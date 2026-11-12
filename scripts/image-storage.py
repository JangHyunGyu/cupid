"""Restore verified images, or publish changed originals as immutable R2 objects.

Python 3.10+ and an authenticated Wrangler CLI are needed for remote operations.
No credentials, plaintext protected Cupid images, or backup archives enter Git.
"""
import argparse, concurrent.futures, hashlib, importlib.util, json, mimetypes, os, pathlib, shutil, subprocess, tempfile, zipfile

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
    executable = shutil.which('wrangler') or shutil.which('wrangler.cmd')
    if not executable:
        npx = shutil.which('npx') or shutil.which('npx.cmd')
        if not npx:
            raise RuntimeError('Install Wrangler and run wrangler login, then retry')
        cmd_prefix = [npx, 'wrangler']
    else:
        cmd_prefix = [executable]
    import time
    for attempt in range(8):
        try:
            res = subprocess.run([*cmd_prefix, *args], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE, encoding='utf-8', errors='replace', timeout=45)
        except subprocess.TimeoutExpired:
            if attempt == 7:
                raise
            time.sleep(2 * (attempt + 1))
            continue
        if res.returncode == 0:
            return
        if attempt == 7:
            if res.stderr:
                print(res.stderr.encode('ascii', 'replace').decode('ascii'), flush=True)
            res.check_returncode()
        time.sleep(2 * (attempt + 1))

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
                        data = archive.extractfile(entry).read()
                        if entry.name.lower().endswith('.svg') and digest(data) != item['sha256']:
                            # Git normalizes text, while the verified snapshot preserves
                            # Windows originals. Accept reconstruction ONLY by exact hash.
                            normalized = data.replace(b'\r\n', b'\n')
                            for candidate in (normalized, normalized.replace(b'\n', b'\r\n')):
                                if digest(candidate) == item['sha256']:
                                    data = candidate
                                    break
                        install(entry.name, data, item)
                        del pending[entry.name]
                # Drain TAR trailer padding before waiting: small Windows pipes
                # can otherwise leave git blocked after tarfile reaches EOF.
                while proc.stdout.read(1024 * 1024):
                    pass
                if proc.wait() != 0:
                    raise RuntimeError('Git archive failed')
            finally:
                if proc.poll() is None:
                    proc.kill()
                    proc.wait()
                proc.stdout.close()
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
    check = pathlib.Path(temp) / ('readback-' + bucket + '-' + key.replace('/', '_'))
    fetch(bucket, key, check)
    verify(check.read_bytes(), item, key)

def _load_sync_helper():
    harem_root = pathlib.Path(os.environ.get('HAREM_ROOT') or (ROOT.parent / 'harem')).resolve()
    helper_path = harem_root / 'scripts' / 'sync-cupid-sprites.py'
    if not helper_path.exists():
        return None
    spec = importlib.util.spec_from_file_location('sync_cupid_sprites', str(helper_path))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod

def publish(args):
    file_list = list(args.files or [])
    if getattr(args, 'files_from', None):
        raw = pathlib.Path(args.files_from).read_text(encoding='utf-8').strip()
        file_list.extend(json.loads(raw) if raw.startswith('[') else [line.strip() for line in raw.splitlines() if line.strip()])
    if not file_list:
        raise RuntimeError('Specify changed image paths; use --public only for newly public non-character images')
    branch = subprocess.check_output(['git', 'branch', '--show-current'], cwd=ROOT, text=True).strip()
    if branch != 'main': raise RuntimeError('Image publication requires main')
    subprocess.run(['git', 'fetch', 'origin', 'main'], cwd=ROOT, check=True)
    subprocess.run(['git', 'merge-base', '--is-ancestor', 'origin/main', 'HEAD'], cwd=ROOT, check=True)
    sources, public = read('config/image-sources.json'), read('config/public-images.json')
    catalog = read('config/character-assets.json')
    media_storage = read('config/media-storage.json')
    aliases = {f['source']: f['publicPaths'] for a in catalog['assets'] for f in a['files'].values()}
    file_entry_by_src = {f['source']: f for a in catalog['assets'] for f in a['files'].values()}
    src_by_pub = {pub: f['source'] for a in catalog['assets'] for f in a['files'].values() for pub in f['publicPaths']}
    protected = set()
    if public['project'] == 'cupid':
        protected = set(json.loads(subprocess.check_output(['node', '-e', "console.log(JSON.stringify(require('./scripts/lib/cupid-protected-assets.cjs').listProtectedAssets(process.cwd())))"], cwd=ROOT)))
        protected.update(aliases)
    verified_backups = {
        v.get('backupKey'): (v.get('sha256'), v.get('bytes'))
        for v in sources['files'].values()
        if isinstance(v.get('backupKey'), str) and v['backupKey'].startswith('objects/sources/')
    }
    verified_public = {
        v.get('key'): (v.get('sha256'), v.get('bytes'))
        for v in public['objects'].values()
        if isinstance(v.get('key'), str) and v['key'].startswith('objects/')
    }
    verified_private = {
        v.get('key'): (v.get('sha256'), v.get('size'))
        for v in media_storage.values()
        if isinstance(v, dict) and isinstance(v.get('key'), str) and v['key'].startswith('images/')
    }

    sync_mod = None
    private_media_changed = False
    catalog_changed = False

    with tempfile.TemporaryDirectory(prefix='image-publish-') as tmp:
        uploads = {}
        staged_idx = 0
        def stage_bytes(data: bytes, suffix: str) -> pathlib.Path:
            nonlocal staged_idx
            staged_idx += 1
            p = pathlib.Path(tmp) / f'staged-{staged_idx}{suffix}'
            p.write_bytes(data)
            return p

        expanded_files = []
        for name in file_list:
            if name.startswith('tests/fixtures/corrected-media/'):
                pub_rel = name[len('tests/fixtures/corrected-media/'):]
                if pub_rel in src_by_pub:
                    c_src = src_by_pub[pub_rel]
                    if sync_mod is None:
                        sync_mod = _load_sync_helper()
                    plain_bytes = safe(name).read_bytes()
                    if plain_bytes.startswith(b'CUPIDENC1'):
                        raise RuntimeError('Corrected-media fixture must be plaintext: ' + name)
                    if sync_mod is not None:
                        enc_bytes = sync_mod.encrypt_cupidenc1(plain_bytes)
                        c_target = safe(c_src)
                        c_target.parent.mkdir(parents=True, exist_ok=True)
                        c_target.write_bytes(enc_bytes)
                        if c_src not in file_list and c_src not in expanded_files:
                            expanded_files.append(c_src)
            expanded_files.append(name)

        for name in expanded_files:
            source = safe(name)
            data = source.read_bytes()
            ext = source.suffix.lower()
            if ext not in ['.png', '.webp', '.jpg', '.jpeg', '.gif', '.avif', '.svg', '.ico']:
                raise RuntimeError('Unsupported image: ' + name)

            # Automatically package & register protected Cupid character/CG assets into cupid-media-private + media-storage.json
            if public['project'] == 'cupid' and name in file_entry_by_src:
                if sync_mod is None:
                    sync_mod = _load_sync_helper()
                if sync_mod is not None:
                    if data.startswith(b'CUPIDENC1'):
                        enc_bytes = data
                        plain_bytes = sync_mod.decrypt_cupidenc1(enc_bytes)
                    else:
                        plain_bytes = data
                        enc_bytes = sync_mod.encrypt_cupidenc1(plain_bytes)
                        source.write_bytes(enc_bytes)
                        data = enc_bytes
                    plain_sha = digest(plain_bytes)
                    enc_sha = digest(enc_bytes)
                    f_entry = file_entry_by_src[name]
                    f_entry['sha256'] = enc_sha
                    f_entry['bytes'] = len(enc_bytes)
                    catalog_changed = True
                    pub_path = f_entry['publicPaths'][0]
                    fix_rel = 'tests/fixtures/corrected-media/' + pub_path
                    fix_full = safe(fix_rel)
                    fix_full.parent.mkdir(parents=True, exist_ok=True)
                    fix_full.write_bytes(plain_bytes)
                    plain_item = {'sha256': plain_sha, 'bytes': len(plain_bytes), 'backupKey': 'objects/sources/' + plain_sha + ext}
                    sources['files'][fix_rel] = plain_item
                    plain_staged = stage_bytes(plain_bytes, ext)
                    if verified_backups.get(plain_item['backupKey']) != (plain_item['sha256'], plain_item['bytes']):
                        uploads[(sources['backupBucket'], plain_item['backupKey'])] = (plain_staged, dict(plain_item))
                    priv_key = 'images/' + plain_sha + ext
                    if verified_private.get(priv_key) != (plain_item['sha256'], plain_item['bytes']):
                        uploads[('cupid-media-private', priv_key)] = (plain_staged, dict(plain_item))
                    new_ms_entry = {
                        'sourceHash': enc_sha,
                        'key': priv_key,
                        'sha256': plain_sha,
                        'etag': hashlib.md5(plain_bytes).hexdigest(),
                        'size': len(plain_bytes),
                    }
                    if media_storage.get(pub_path) != new_ms_entry:
                        media_storage[pub_path] = new_ms_entry
                        private_media_changed = True

            item = {'sha256': digest(data), 'bytes': len(data)}
            object_id = item['sha256'] + ext
            item['backupKey'] = 'objects/sources/' + object_id
            if verified_backups.get(item['backupKey']) != (item['sha256'], item['bytes']):
                uploads[(sources['backupBucket'], item['backupKey'])] = (source, dict(item))
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
                if verified_public.get(obj['key']) != (item['sha256'], item['bytes']):
                    uploads[(public['bucket'], obj['key'])] = (source, dict(item))
                public['objects'][object_id] = obj
                for route in set(routes + aliases.get(name, [name])): public['routes'][route] = object_id
            elif args.public:
                raise RuntimeError('Protected Cupid media cannot be made public: ' + name)

        if uploads:
            with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
                futs = [pool.submit(upload_verified, bkt, k, src_p, meta, tmp) for (bkt, k), (src_p, meta) in uploads.items()]
                for fut in concurrent.futures.as_completed(futs):
                    fut.result()

        active = set(public['routes'].values())
        public['objects'] = {key: value for key, value in public['objects'].items() if key in active}
        sources['files'] = {k: sources['files'][k] for k in sorted(sources['files'].keys())}
        # Original objects and previous snapshots remain immutable in R2.
        for filename, value in [('config/image-sources.json', sources), ('config/public-images.json', public)]:
            payload = (json.dumps(value, ensure_ascii=False, indent=2) + '\n').encode('utf-8')
            staged = pathlib.Path(tmp) / pathlib.Path(filename).name
            staged.write_bytes(payload)
            upload_verified(sources['backupBucket'], 'manifests/' + digest(payload) + '.json', staged,
                            {'sha256': digest(payload), 'bytes': len(payload)}, tmp)
        for filename, value in [('config/image-sources.json', sources), ('config/public-images.json', public)]:
            (ROOT / filename).write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', encoding='utf-8', newline='\n')
        if catalog_changed:
            catalog['assets'].sort(key=lambda a: a['id'])
            (ROOT / 'config/character-assets.json').write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8', newline='\n')
        if private_media_changed:
            (ROOT / 'config/media-storage.json').write_text(json.dumps(media_storage, ensure_ascii=False, indent=2) + '\n', encoding='utf-8', newline='\n')
            delivery_resolved = subprocess.check_output(
                [
                    'node', '-e',
                    "const fs=require('fs'), {resolveMediaDelivery}=require('./scripts/lib/media-delivery.cjs');"
                    "const s=JSON.parse(fs.readFileSync('config/media-storage.json','utf8'));"
                    "const d=JSON.parse(fs.readFileSync('config/media-delivery.json','utf8'));"
                    "process.stdout.write(JSON.stringify(resolveMediaDelivery(s,d),null,2)+'\\n');",
                ],
                cwd=ROOT,
            )
            cat_staged = pathlib.Path(tmp) / 'media-v1.json'
            cat_staged.write_bytes(delivery_resolved)
            upload_verified('cupid-media-private', 'catalog/media-v1.json', cat_staged,
                            {'sha256': digest(delivery_resolved), 'bytes': len(delivery_resolved)}, tmp)
            subprocess.run(['node', 'scripts/sync-media-manifest.cjs', '--write'], cwd=ROOT, check=True)
        receipt = {'schemaVersion': 1, 'verified': True, 'method': 'R2 full read-back SHA-256', 'manifests': {
            name: digest((ROOT / name).read_bytes()) for name in ['config/image-sources.json', 'config/public-images.json']}}
        (ROOT / 'config/image-publication.json').write_text(json.dumps(receipt, indent=2) + '\n', encoding='utf-8', newline='\n')
    sync_script = ROOT / 'scripts/sync-cupid-sprites.py'
    if not getattr(args, 'no_cupid_sync', False) and sync_script.exists() and any(f.startswith(('assets/characters/', 'tests/fixtures/corrected-media/assets/images/characters/')) for f in file_list):
        import sys as _sys
        subprocess.run([_sys.executable, str(sync_script), '--prefer', 'cupid'], cwd=ROOT, check=True)
    print('Images backed up and uploaded; review manifests, run image/cache checks, then commit metadata')

parser = argparse.ArgumentParser(description=__doc__)
commands = parser.add_subparsers(dest='command', required=True)
r = commands.add_parser('restore')
r.add_argument('--local-backup', help='Directory containing verified snapshot ZIP parts')
r.add_argument('--from-git', action='store_true', help='Recover baseline images from recorded Git commits first')
r.add_argument('--prefix', default='', help='Restore a subset of source paths')
p = commands.add_parser('publish')
p.add_argument('--public', action='store_true', help='Register new public runtime images; refuses protected Cupid media')
p.add_argument('--no-cupid-sync', action='store_true', help='Skip automatic harem <-> cupid sprite synchronization')
p.add_argument('--files-from', help='File containing JSON array or newline-separated list of changed image paths')
p.add_argument('files', nargs='*')
if __name__ == '__main__':
    args = parser.parse_args()
    (restore if args.command == 'restore' else publish)(args)
