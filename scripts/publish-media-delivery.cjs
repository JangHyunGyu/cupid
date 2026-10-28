'use strict';
// Stage immutable objects before a git deployment; publish the viewer index after main is pushed.
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { createHash } = require('node:crypto');
const { resolveMediaDelivery } = require('./lib/media-delivery.cjs');
const { resolveAssetSource } = require('./character-assets.cjs');
const root = path.resolve(__dirname, '..');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const git = args => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();

async function publish() {
  const mode = process.argv[2];
  if (!['--objects-only', '--index-only'].includes(mode)) throw new Error('Choose --objects-only <private-directory> or --index-only');
  if (git(['branch', '--show-current']) !== 'main') throw new Error('Publish only from main');
  if (mode === '--index-only' && (git(['status', '--porcelain'])
    || git(['rev-parse', 'HEAD']) !== git(['rev-parse', 'origin/main']))) {
    throw new Error('Index publication requires a clean main matching origin/main');
  }
  const storage = JSON.parse(fs.readFileSync(path.join(root, 'config/media-storage.json'), 'utf8'));
  const variants = JSON.parse(fs.readFileSync(path.join(root, 'config/media-delivery.json'), 'utf8'));
  const delivery = resolveMediaDelivery(storage, variants);
  const staged = new Map();
  if (mode === '--objects-only') {
    const source = process.argv[3] && path.resolve(process.argv[3]);
    if (!source || !path.relative(root, source).startsWith('..' + path.sep)) throw new Error('Use a private candidate directory outside the repository');
    for (const [relative, variant] of Object.entries(variants)) {
      const canonical = path.relative(root, resolveAssetSource(root, relative));
      const bytes = fs.readFileSync(path.join(source, canonical));
      if (bytes.length !== variant.size || hash(bytes) !== variant.sha256
        || bytes.toString('ascii', 0, 4) !== 'RIFF' || bytes.toString('ascii', 8, 12) !== 'WEBP') {
        throw new Error('Candidate mismatch: ' + relative);
      }
      staged.set(relative, bytes);
    }
  }
  const token = process.env.CLOUDFLARE_API_TOKEN;
  const account = process.env.CLOUDFLARE_ACCOUNT_ID;
  if (!token || !/^[a-f0-9]{32}$/.test(account || '')) throw new Error('Cloudflare credentials missing');
  const base = `https://api.cloudflare.com/client/v4/accounts/${account}/r2/buckets/cupid-media-private`;
  async function request(suffix, options = {}) {
    const response = await fetch(base + suffix, { ...options, headers: { ...options.headers, Authorization: 'Bearer ' + token } });
    if (!response.ok) throw new Error('R2 request failed: ' + response.status);
    return response;
  }
  const managed = await (await request('/domains/managed')).json();
  const custom = await (await request('/domains/custom')).json();
  if (managed.result?.enabled !== false || !Array.isArray(custom.result?.domains) || custom.result.domains.length) {
    throw new Error('All public bucket access must remain disabled');
  }
  for (const [relative, variant] of Object.entries(variants)) {
    if (mode === '--objects-only') {
      await request('/objects/' + variant.key, { method: 'PUT', body: staged.get(relative),
        headers: { 'Content-Type': 'image/webp', 'Cache-Control': 'private, max-age=0' } });
    }
    const readback = Buffer.from(await (await request('/objects/' + variant.key)).arrayBuffer());
    if (readback.length !== variant.size || hash(readback) !== variant.sha256) throw new Error('Object readback mismatch: ' + relative);
    console.log('Verified ' + relative);
  }
  if (mode === '--objects-only') return;
  const live = await (await request('/objects/catalog/media-v1.json')).json();
  if (JSON.stringify(Object.keys(live).sort()) !== JSON.stringify(Object.keys(storage).sort())) throw new Error('Live catalog paths changed');
  for (const [relative, item] of Object.entries(storage)) {
    if (live[relative].sourceHash !== item.sourceHash
      || (!variants[relative] && live[relative].sha256 !== item.sha256)
      || (variants[relative] && ![item.sha256, variants[relative].sha256].includes(live[relative].sha256))) {
      throw new Error('Live catalog changed: ' + relative);
    }
  }
  const body = JSON.stringify(delivery, null, 2) + '\n';
  await request('/objects/catalog/media-v1.json', { method: 'PUT', body,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'private, no-store' } });
  const readback = await (await request('/objects/catalog/media-v1.json')).text();
  if (readback !== body) throw new Error('Catalog readback mismatch');
  console.log('Verified private viewer catalog; originals retained');
}

publish().catch(error => { console.error(error.message); process.exitCode = 1; });
