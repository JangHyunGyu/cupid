'use strict';
// Explicit maintenance command, never run by the public/CI build.
// Read plaintext originals outside the repository. Credentials stay in env vars.
const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
const { listProtectedAssets } = require('./lib/cupid-protected-assets.cjs');
const { readPlainMedia } = require('./lib/read-plain-media.cjs');
const root = path.resolve(__dirname, '..');
const digest = (algorithm, bytes) => createHash(algorithm).update(bytes).digest('hex');

async function upload() {
  const source = process.argv[2] && path.resolve(process.argv[2]);
  if (!source || !path.relative(root, source).startsWith('..' + path.sep)) {
    throw new Error('Provide a private original directory outside the repository');
  }
  const token = process.env.CLOUDFLARE_API_TOKEN;
  const account = process.env.CLOUDFLARE_ACCOUNT_ID;
  if (!token || !/^[a-f0-9]{32}$/.test(account || '')) throw new Error('Cloudflare credentials missing');
  const api = `https://api.cloudflare.com/client/v4/accounts/${account}/r2/buckets/cupid-media-private`;
  async function request(suffix, options = {}) {
    const response = await fetch(api + suffix, { ...options,
      headers: { ...options.headers, Authorization: 'Bearer ' + token } });
    if (!response.ok) throw new Error(`R2 request failed (${response.status})`);
    return response;
  }
  const visibility = await (await request('/domains/managed')).json();
  const domains = await (await request('/domains/custom')).json();
  if (visibility.result?.enabled !== false || !Array.isArray(domains.result?.domains)
    || domains.result.domains.length) throw new Error('Bucket must have ALL public access disabled');
  const catalog = {};
  for (const file of listProtectedAssets(root)) {
    const bytes = fs.readFileSync(path.join(source, file));
    const ext = path.extname(file);
    const valid = ext === '.webp' ? bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP'
      : ext === '.png' ? bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))
      : bytes[0] === 255 && bytes[1] === 216;
    if (!valid) throw new Error('Original is not a plaintext image: ' + file);
    const sha256 = digest('sha256', bytes), key = 'images/' + sha256 + ext;
    if (digest('sha256', readPlainMedia(path.join(root, file))) !== sha256) {
      throw new Error('Original and source archive differ; update both before uploading: ' + file);
    }
    const contentType = ext === '.webp' ? 'image/webp' : ext === '.png' ? 'image/png' : 'image/jpeg';
    await request('/objects/' + key, { method: 'PUT', body: bytes,
      headers: { 'Content-Type': contentType, 'Cache-Control': 'private, max-age=0' } });
    const readback = Buffer.from(await (await request('/objects/' + key)).arrayBuffer());
    if (digest('sha256', readback) !== sha256) throw new Error('Readback mismatch: ' + file);
    catalog[file] = { sourceHash: digest('sha256', fs.readFileSync(path.join(root, file))),
      key, sha256, etag: digest('md5', bytes), size: bytes.length };
    console.log('Verified ' + file);
  }
  fs.writeFileSync(path.join(root, 'config/media-storage.json'), JSON.stringify(catalog, null, 2) + '\n');
}
upload().catch(error => { console.error(error.message); process.exitCode = 1; });
