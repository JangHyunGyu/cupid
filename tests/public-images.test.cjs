'use strict';
const test = require('node:test'), assert = require('node:assert/strict');
const fs = require('node:fs'), path = require('node:path'), crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const modulePromise = import('data:text/javascript;base64,' + fs.readFileSync(path.join(root, 'functions/_lib/public-images.js')).toString('base64'));
const bytes = Buffer.from('unchanged image body');
const sha256 = crypto.createHash('sha256').update(bytes).digest('hex');
const etag = crypto.createHash('md5').update(bytes).digest('hex');
const id = sha256 + '.webp';
const manifest = { routes: { 'assets/characters/alex/portrait.webp': id, 'assets/images/old-avatar.webp': id }, objects: { [id]: { key: 'objects/' + id, sha256, etag, bytes: bytes.length, contentType: 'image/webp' } } };
function harness() {
  const stored = new Map(), pending = []; let gets = 0, heads = 0;
  const bucket = { async get(key) { assert.equal(key, 'objects/' + id); gets++; return { body: new Response(bytes).body, etag, size: bytes.length }; }, async head() { heads++; return { etag, size: bytes.length }; } };
  const cache = { async match(req) { return stored.get(req.url)?.clone(); }, async put(req, response) { stored.set(req.url, new Response(await response.arrayBuffer(), response)); } };
  async function request(name, options = {}, env = { PUBLIC_IMAGE_BUCKET: bucket }) {
    const { serveImage } = await modulePromise;
    const response = await serveImage({ request: new Request('https://example.test/' + name, options), env, waitUntil(p) { pending.push(p); }, next() { return new Response('next'); } }, manifest, cache);
    await Promise.all(pending);
    return response;
  }
  return { request, bucket, counts: () => ({ gets, heads }) };
}
test('canonical, historical and query URLs deliver identical original bytes from one immutable edge cache entry', async () => {
  const h = harness();
  const first = await h.request('assets/characters/alex/portrait.webp?v=old');
  assert.equal(first.status, 200); assert.equal(first.headers.get('X-Image-Cache'), 'MISS');
  assert.deepEqual(Buffer.from(await first.arrayBuffer()), bytes);
  const old = await h.request('assets/images/old-avatar.webp?v=another');
  assert.equal(old.headers.get('X-Image-Cache'), 'HIT');
  assert.deepEqual(Buffer.from(await old.arrayBuffer()), bytes);
  assert.equal(h.counts().gets, 1);
  assert.equal(old.headers.get('Cache-Control'), 'public, max-age=3600');
});
test('HEAD and conditional GET preserve validators without downloading an original', async () => {
  const h = harness();
  const response = await h.request('assets/images/old-avatar.webp', { method: 'HEAD' });
  assert.equal(await response.text(), ''); assert.equal(response.headers.get('Content-Length'), String(bytes.length));
  assert.deepEqual(h.counts(), { gets: 0, heads: 1 });
  const cached = await h.request('assets/images/old-avatar.webp', { headers: { 'If-None-Match': 'W/"' + sha256 + '"' } });
  assert.equal(cached.status, 304); assert.equal(await cached.text(), '');
  assert.deepEqual(h.counts(), { gets: 0, heads: 1 });
});
test('unknown/private paths and mutation methods cannot access R2; unrelated routes continue normally', async () => {
  const h = harness();
  for (const name of ['assets/images/locked.webp', 'assets/images/%ZZ.png', 'assets/images/../../secret.png', 'assets/images/__proto__.png']) {
    assert.equal((await h.request(name)).status, 404);
  }
  assert.equal((await h.request('assets/images/old-avatar.webp', { method: 'POST' })).status, 405);
  assert.equal(await (await h.request('api/media?asset=locked')).text(), 'next');
  assert.deepEqual(h.counts(), { gets: 0, heads: 0 });
});
test('missing binding, missing object or corrupt R2 identity fails closed and is never cached', async () => {
  const h = harness();
  for (const env of [{}, { PUBLIC_IMAGE_BUCKET: { get: async () => null } }, { PUBLIC_IMAGE_BUCKET: { get: async () => ({ etag: 'bad', size: bytes.length, body: new Response(bytes).body }) } }]) {
    const response = await h.request('assets/images/old-avatar.webp', {}, env);
    assert.equal(response.status, 503); assert.equal(response.headers.get('Cache-Control'), 'no-store');
  }
  assert.equal((await h.request('assets/images/old-avatar.webp')).status, 200);
});
test('published catalog preserves every backed-up canonical/legacy route and excludes protected Cupid images', () => {
  require('../scripts/image-assets.cjs').verifyPublished(root);
});
