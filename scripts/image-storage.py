"""Restore verified images, or publish changed originals as immutable R2 objects.

Python 3.10+ and an authenticated Wrangler CLI are needed for remote operations.
No credentials, plaintext protected Cupid images, or backup archives enter Git.
"""
import argparse, hashlib, json, mimetypes, os, pathlib, shutil, subprocess, tempfile, zipfile

ROOT = pathlib.Path(__file__).resolve().parents[1]

def read(name):
    return json.loads((ROOT / name).read_text(encoding='utf-8'))

def digest(data):
    return hashlib.sha256(data).hexdigest()

def safe(name):
    if '\\' in name or name.startswith('/') or '..' in name.split('/') or ':' in name:
        raise ValueError('Unsafe image path: ' + name)
    full = (ROOT / name).resolve()
    if ROOT not in full.parents:
        raise ValueError('Image path escaped repository')
    return full

def wrangler(*args):
    executable = shutil.which('wrangler')
    if not executable:
        raise RuntimeError('Install Wrangler and run wrangler login, then retry')
    subprocess.run([executable, *args], cwd=ROOT, check=True, stdout=subprocess.DEVNULL)

def fetch(bucket, key, destination):
    destination.parent.mkdir(parents=True, exist_ok=True)
    wrangler('r2', 'object', 'get', bucket + '/' + key, '--file', str(destination), '--remote')

def verify(data, item, name):
    if digest(data) != item['sha256'] or len(data) != item['bytes']:
        raise RuntimeError('Image checksum mismatch: ' + name)

def install(name, data, item):
    verify(data, item, name)
    target = safe(name)
    if target.exists():
        verify(target.read_bytes(), item, name)  # Never overwrite an edited original.
        return
    target.parent.mkdir(parents=True, exist_ok=True)
    temporary = target.with_name(target.name + '.restoring')
    temporary.write_bytes(data)
    temporary.replace(target)

def restore(args):
    sources = read('config/image-sources.json')
    pending = {}
    for name, item in sources['files'].items():
        if args.prefix and not name.startswith(args.prefix):
            continue
        target = safe(name)
        if target.exists():
            verify(target.read_bytes(), item, name)
        else:
            pending[name] = item
    if args.from_git:
        # Baseline recovery requires only a depth-one fetch of the recorded commit.
        # New revisions without a Git ancestor are restored from R2 instead.
        commits = sorted(set(item.get('sourceCommit') for item in pending.values() if item.get('sourceCommit')))
        for commit in commits:
            if subprocess.run(['git', 'cat-file', '-e', commit + '^{commit}'], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL).returncode:
                subprocess.run(['git', 'fetch', '--depth=1', 'origin', commit], cwd=ROOT, check=True)
            import tarfile
            proc = subprocess.Popen(['git', 'archive', '--format=tar', commit], cwd=ROOT, stdout=subprocess.PIPE)
            try:
                with tarfile.open(fileobj=proc.stdout, mode='r|') as archive:
                    for entry in archive:
                        item = pending.get(entry.name)
                        if not item or item.get('sourceCommit') != commit:
                            continue
                        if not entry.isfile():
                            raise RuntimeError('Non-file image in Git archive')
                        install(entry.name, archive.extractfile(entry).read(), item)
                        del pending[entry.name]
                if proc.wait() != 0:
                    raise RuntimeError('Git archive failed')
            finally:
                proc.stdout.close()
                if proc.poll() is None: proc.kill()
    groups = {}
    for name, item in pending.items():
        groups.setdefault(item['backupKey'], []).append((name, item))
    parts = {part['file']: part for part in sources['parts']}
    with tempfile.TemporaryDirectory(prefix='image-restore-') as tmp:
        for key, files in groups.items():
            part_name = key.rsplit('/', 1)[-1]
            local = pathlib.Path(args.local_backup) / part_name if args.local_backup else None
            if not local or not local.exists():
                local = pathlib.Path(tmp) / part_name
                fetch(sources['backupBucket'], key, local)
            if key.endswith('.zip'):
                part = parts[part_name]
                if local.stat().st_size != part['size'] or digest(local.read_bytes()) != part['sha256']:
                    raise RuntimeError('Backup archive checksum mismatch: ' + part_name)
                with zipfile.ZipFile(local) as archive:
                    for name, item in files:
                        install(name, archive.read(name), item)
            else:
                data = local.read_bytes()
                for name, item in files: install(name, data, item)
    print('Image restore complete; SHA-256 verified for every selected original')

def upload_verified(bucket, key, source, item, temp):
    verify(source.read_bytes(), item, str(source))
    wrangler('r2', 'object', 'put', bucket + '/' + key, '--file', str(source), '--content-type', mimetypes.guess_type(str(source))[0] or 'application/octet-stream', '--remote')
    check = pathlib.Path(temp) / 'readback'
    fetch(bucket, key, check)
    verify(check.read_bytes(), item, key)

def publish(args):
    if not args.files:
        raise RuntimeError('Specify changed image paths; use --public only for newly public non-character images')
    branch = subprocess.check_output(['git', 'branch', '--show-current'], cwd=ROOT, text=True).strip()
    if branch != 'main': raise RuntimeError('Image publication requires main')
    subprocess.run(['git', 'fetch', 'origin', 'main'], cwd=ROOT, check=True)
    subprocess.run(['git', 'merge-base', '--is-ancestor', 'origin/main', 'HEAD'], cwd=ROOT, check=True)
    sources, public = read('config/image-sources.json'), read('config/public-images.json')
    catalog = read('config/character-assets.json')
    aliases = {f['source']: f['publicPaths'] for a in catalog['assets'] for f in a['files'].values()}
    protected = set()
    if public['project'] == 'cupid':
        protected = set(json.loads(subprocess.check_output(['node', '-e', "console.log(JSON.stringify(require('./scripts/lib/cupid-protected-assets.cjs').listProtectedAssets(process.cwd())))"], cwd=ROOT)))
        protected.update(aliases)
    with tempfile.TemporaryDirectory(prefix='image-publish-') as tmp:
        for name in args.files:
            source = safe(name)
            data = source.read_bytes()
            ext = source.suffix.lower()
            if ext not in ['.png', '.webp', '.jpg', '.jpeg', '.gif', '.avif', '.svg', '.ico']:
                raise RuntimeError('Unsupported image: ' + name)
            item = {'sha256': digest(data), 'bytes': len(data)}
            object_id = item['sha256'] + ext
            item['backupKey'] = 'objects/sources/' + object_id
            upload_verified(sources['backupBucket'], item['backupKey'], source, item, tmp)
            old = sources['files'].get(name)
            if old and old['sha256'] == item['sha256']:
                item = old
            sources['files'][name] = item
            routes = [p for p, oid in public['routes'].items() if public['objects'][oid]['source'] == name]
            if name not in protected and (routes or args.public or name in aliases):
                if data.startswith(b'CUPIDENC1'):
                    raise RuntimeError('Encrypted source cannot be published publicly: ' + name)
                if not (name.startswith(('assets/images/', 'assets/characters/')) or '/' not in name):
                    raise RuntimeError('Public image must be a runtime asset: ' + name)
                obj = {**{k: item[k] for k in ['sha256', 'bytes']}, 'source': name, 'key': 'objects/' + object_id,
                       'etag': hashlib.md5(data).hexdigest(), 'contentType': mimetypes.guess_type(name)[0] or 'application/octet-stream'}
                upload_verified(public['bucket'], obj['key'], source, item, tmp)
                public['objects'][object_id] = obj
                for route in set(routes + aliases.get(name, [name])): public['routes'][route] = object_id
            elif args.public:
                raise RuntimeError('Protected Cupid media cannot be made public: ' + name)
        active = set(public['routes'].values())
        public['objects'] = {key: value for key, value in public['objects'].items() if key in active}
        # Original objects and previous snapshots remain immutable in R2.
        for filename, value in [('config/image-sources.json', sources), ('config/public-images.json', public)]:
            payload = (json.dumps(value, ensure_ascii=False, indent=2) + '\n').encode('utf-8')
            staged = pathlib.Path(tmp) / pathlib.Path(filename).name
            staged.write_bytes(payload)
            upload_verified(sources['backupBucket'], 'manifests/' + digest(payload) + '.json', staged,
                            {'sha256': digest(payload), 'bytes': len(payload)}, tmp)
        for filename, value in [('config/image-sources.json', sources), ('config/public-images.json', public)]:
            (ROOT / filename).write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
        receipt = {'schemaVersion': 1, 'verified': True, 'method': 'R2 full read-back SHA-256', 'manifests': {
            name: digest((ROOT / name).read_bytes()) for name in ['config/image-sources.json', 'config/public-images.json']}}
        (ROOT / 'config/image-publication.json').write_text(json.dumps(receipt, indent=2) + '\n', encoding='utf-8')
    print('Images backed up and uploaded; review manifests, run image/cache checks, then commit metadata')

parser = argparse.ArgumentParser(description=__doc__)
commands = parser.add_subparsers(dest='command', required=True)
r = commands.add_parser('restore')
r.add_argument('--local-backup', help='Directory containing verified snapshot ZIP parts')
r.add_argument('--from-git', action='store_true', help='Recover baseline images from recorded Git commits first')
r.add_argument('--prefix', default='', help='Restore a subset of source paths')
p = commands.add_parser('publish')
p.add_argument('--public', action='store_true', help='Register new public runtime images; refuses protected Cupid media')
p.add_argument('files', nargs='*')
if __name__ == '__main__':
    args = parser.parse_args()
    (restore if args.command == 'restore' else publish)(args)
