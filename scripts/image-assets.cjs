'use strict';
const fs = require('node:fs'), path = require('node:path'), crypto = require('node:crypto');
const IMAGE = /\.(png|webp|jpe?g|gif|avif|svg|ico)$/i;
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
function read(root, file) { return JSON.parse(fs.readFileSync(path.join(root, file), 'utf8')); }
function verifyPublished(root) {
  const manifest = read(root, 'config/public-images.json');
  const sources = read(root, 'config/image-sources.json');
  const receipt = read(root, 'config/image-publication.json');
  for (const [file, expected] of Object.entries(receipt.manifests)) {
    if (hash(fs.readFileSync(path.join(root, file))) !== expected) throw new Error('Image manifest changed without upload/read-back verification: ' + file);
  }
  if (!receipt.manifests['config/public-images.json'] || !receipt.manifests['config/image-sources.json'] || receipt.verified !== true) throw new Error('Missing verified image publication');
  if (manifest.schemaVersion !== 1 || sources.schemaVersion !== 1 || manifest.bucket !== 'archerlab-site-images' || sources.backupBucket !== 'archerlab-image-backups') throw new Error('Unexpected image storage schema');
  const { inside, catalog } = require('./character-assets.cjs');
  for (const [name, item] of Object.entries(sources.files)) {
    const local = inside(root, name);
    if (fs.existsSync(local)) {
      const bytes = fs.readFileSync(local);
      if (bytes.length !== item.bytes || hash(bytes) !== item.sha256) throw new Error('Local image changed; publish it before building: ' + name);
    }
    if (!IMAGE.test(name) || !/^[a-f0-9]{64}$/.test(item.sha256) || !Number.isSafeInteger(item.bytes) || item.bytes <= 0) throw new Error('Invalid source image: ' + name);
  }
  for (const [id, item] of Object.entries(manifest.objects)) {
    if (id !== item.sha256 + path.extname(item.source).toLowerCase() || item.key !== 'objects/' + id || !/^[a-f0-9]{32}$/.test(item.etag) || !item.contentType.startsWith('image/')) throw new Error('Invalid public image identity: ' + id);
    const source = sources.files[item.source];
    if (!source || source.sha256 !== item.sha256 || source.bytes !== item.bytes) throw new Error('Public image/source mismatch: ' + item.source);
  }
  for (const [url, id] of Object.entries(manifest.routes)) {
    inside(root, url);
    if (!IMAGE.test(url) || !Object.hasOwn(manifest.objects, id)) throw new Error('Invalid public image route: ' + url);
  }
  for (const asset of catalog(root).data.assets) for (const item of Object.values(asset.files)) {
    const source = sources.files[item.source];
    if (!source || source.sha256 !== item.sha256 || source.bytes !== item.bytes) throw new Error('Character image is not backed up: ' + item.source);
    if (manifest.project !== 'cupid') for (const url of item.publicPaths) {
      if (manifest.objects[manifest.routes[url]]?.sha256 !== item.sha256) throw new Error('Missing canonical/legacy image route: ' + url);
    }
  }
  if (manifest.project === 'cupid') {
    const { listProtectedAssets } = require('./lib/cupid-protected-assets.cjs');
    for (const name of listProtectedAssets(root)) {
      const source = catalog(root).aliases.get(name) || name;
      if (Object.hasOwn(manifest.routes, name) || Object.hasOwn(manifest.routes, source)) throw new Error('Protected image exposed publicly: ' + name);
    }
  }
  console.log(`[images] ${Object.keys(sources.files).length} backed-up sources; ${Object.keys(manifest.routes).length} public URLs verified`);
  return { manifest, sources };
}
function prepareImageRoutes(root, output) {
  const { manifest } = verifyPublished(root);
  const includes = new Set(manifest.project === 'cupid' ? ['/api/*'] : []);
  for (const name of Object.keys(manifest.routes)) includes.add(name.startsWith('assets/') ? '/' + name.split('/').slice(0, 2).join('/') + '/*' : '/' + name);
  // Explicitly intercept unknown/protected image paths so Pages cannot SPA-fallback.
  includes.add('/assets/characters/*'); includes.add('/assets/images/*');
  if (includes.size > 100) throw new Error('Too many Pages image route patterns');
  fs.mkdirSync(output, { recursive: true });
  fs.writeFileSync(path.join(output, '_routes.json'), JSON.stringify({ version: 1, include: [...includes].sort(), exclude: [] }, null, 2) + '\n');
  return manifest;
}
module.exports = { IMAGE, verifyPublished, prepareImageRoutes };
if (require.main === module) verifyPublished(path.resolve(__dirname, '..'));
