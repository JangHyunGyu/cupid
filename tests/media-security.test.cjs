const test = require('node:test');
const assert = require('node:assert/strict');
const { randomBytes, createHash } = require('node:crypto');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const load = name => import(pathToFileURL(path.join(root, name)).href);
const origin = 'https://cupid.test';

test('legacy protected static URLs are denied before CDN lookup while ordinary backgrounds remain public', async () => {
  const sprites = await load('functions/assets/images/characters/[[path]].js');
  const backgrounds = await load('functions/assets/images/background/[[path]].js');
  assert.equal(sprites.onRequest().status, 404);
  let staticReads = 0;
  const next = () => { staticReads++; return new Response('public-background'); };
  for (const suffix of ['ending_perfect_seoyeon.webp', 'ending_perfect_seoyeon.png?v=old', '%65nding_perfect_seoyeon.webp']) {
    const response = backgrounds.onRequest({ request: new Request(origin + '/assets/images/background/' + suffix), next });
    assert.equal(response.status, 404);
    assert.equal(response.headers.get('cache-control'), 'no-store');
  }
  assert.equal(staticReads, 0);
  assert.equal((await backgrounds.onRequest({request: new Request(origin + '/assets/images/background/classroom.webp'), next})).status, 200);
  assert.equal(staticReads, 1);
});

async function fixture() {
  const [sessions, media, unlock, { MEDIA_MANIFEST }] = await Promise.all([
    load('functions/_lib/media-session.js'), load('functions/api/media.js'),
    load('functions/api/gallery/unlocks.js'), load('functions/_lib/media-manifest.js')
  ]);
  const rawKey = randomBytes(32), plain = Buffer.from('test-image-pixels');
  const id = 'characters/dain_bikini', publicId = 'characters/dain_normal';
  const original = [MEDIA_MANIFEST[id], MEDIA_MANIFEST[publicId]];
  const hash = createHash('sha256').update(plain).digest('hex');
  const etag = createHash('md5').update(plain).digest('hex');
  const key = 'images/' + hash + '.webp';
  for (const name of [id, publicId]) MEDIA_MANIFEST[name] = {
    version: 'a'.repeat(24), files: [{ path: 'assets/images/' + name + '.webp', key, sha256: hash, etag, size: plain.length }]
  };
  const grants = new Set(), cacheEntries = new Map(), writes = [];
  let fetches = 0, checks = 0;
  const oldCaches = global.caches;
  global.caches = { default: {
    match: async key => cacheEntries.get(key.url)?.clone(),
    put: async (key, value) => { cacheEntries.set(key.url, value.clone()); }
  } };
  const env = { CUPID_MEDIA_KEY: rawKey.toString('base64'),
    MEDIA_BUCKET: { get: async requested => {
      assert.equal(requested, key); fetches++;
      return { body: new Response(plain).body, size: plain.length, etag };
    } },
    ASSETS: { fetch: async () => { throw new Error('Public storage must never be read'); } },
    DB: {
      prepare(sql) { return { bind(guest, asset) { return {
        first: async () => { checks++; return grants.has(guest + ':' + asset) ? { ok: 1 } : null; },
        all: async () => ({ results: [] }), guest, asset
      }; } }; },
      batch: async statements => { for (const row of statements) grants.add(row.guest + ':' + row.asset); }
    }
  };
  const create = () => sessions.createMediaSession(new Request(origin + '/api/media-session', {
    method: 'POST', headers: { Origin: origin }
  }), env);
  const session = await create();
  const cookie = session.headers.get('set-cookie').split(';')[0];
  const { guestId } = await session.json();
  const request = (asset = id, headers = {}, query = '') => new Request(origin + '/api/media?asset=' + asset
    + '&v=' + 'a'.repeat(24) + query, { headers: { Cookie: cookie, ...headers } });
  const serve = req => media.onRequestGet({ request: req || request(), env, waitUntil: p => writes.push(p) });
  const post = (assets, headers = {}, guest = guestId) => unlock.onRequestPost({ env,
    request: new Request(origin + '/api/gallery/unlocks', { method: 'POST',
      headers: { Origin: origin, Cookie: cookie, 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify({ guestId: guest, assets }) }) });
  return { sessions, env, id, publicId, plain, cookie, guestId, create, request, serve, post, grants, writes,
    cacheEntries, counters: () => ({ fetches, checks }),
    restore() { [MEDIA_MANIFEST[id], MEDIA_MANIFEST[publicId]] = original; global.caches = oldCaches; } };
}

test('signed session cannot be replaced by guest URLs, forged cookies or cross-site calls', async () => {
  const f = await fixture();
  try {
    assert.match(f.cookie, /^__Host-cupid-media=/);
    assert.equal((await f.serve(f.request(f.id, { Cookie: '' }, '&guest=' + f.guestId))).status, 401);
    assert.equal((await f.serve(f.request(f.id, { Cookie: f.cookie + '0' }))).status, 401);
    assert.equal((await f.serve(f.request(f.id, {}, '&guest=11111111-1111-4111-8111-111111111111'))).status, 401);
    assert.equal((await f.post([f.id], { Origin: 'https://evil.test' })).status, 403);
    assert.equal((await f.post([f.id], { Origin: '' })).status, 403);
    assert.equal((await f.post([f.id], {}, '11111111-1111-4111-8111-111111111111')).status, 401);
    assert.equal((await f.post(['x'.repeat(17000)])).status, 413);
    assert.equal((await f.serve(f.request(f.publicId, { 'Sec-Fetch-Site': 'cross-site' }))).status, 403);
    assert.equal(f.counters().fetches, 0);
    const denied = await f.sessions.createMediaSession(new Request(origin + '/api/media-session', {
      method: 'POST', headers: { Origin: 'https://evil.test' }
    }), f.env);
    assert.equal(denied.status, 403);
    const next = await f.create();
    assert.match(next.headers.get('set-cookie'), /Secure; HttpOnly; SameSite=Strict/);
    assert.notEqual((await next.json()).guestId, f.guestId);
    const now = Date.now;
    try {
      Date.now = () => now() + 366 * 86400000;
      assert.equal((await f.serve()).status, 401, 'expired cookies are rejected');
    } finally { Date.now = now; }
  } finally { f.restore(); }
});

test('warm edge cache saves private R2 reads but never bypasses current unlock checks', async () => {
  const f = await fixture();
  try {
    assert.equal((await f.serve()).status, 403);
    assert.equal((await f.post([f.id])).status, 200);
    const first = await f.serve();
    assert.equal(first.status, 200);
    assert.equal(first.headers.get('x-cupid-media-cache'), 'MISS');
    assert.match(first.headers.get('server-timing'), /storage;dur=/);
    assert.doesNotMatch(first.headers.get('server-timing'), /decrypt/);
    assert.equal(first.headers.get('x-cupid-media-source'), 'private-r2');
    assert.deepEqual(Buffer.from(await first.arrayBuffer()), f.plain);
    await Promise.all(f.writes);
    const second = await f.serve();
    assert.equal(second.headers.get('x-cupid-media-cache'), 'HIT');
    assert.equal(second.headers.get('cache-control'), 'private, max-age=86400');
    assert.equal(second.headers.get('cross-origin-resource-policy'), 'same-origin');
    assert.equal(second.headers.get('vary'), 'Cookie');
    assert.deepEqual(Buffer.from(await second.arrayBuffer()), f.plain);
    assert.equal(f.counters().fetches, 1);
    f.grants.clear();
    assert.equal((await f.serve()).status, 403);
    assert.equal(f.counters().checks, 4);
    const otherSession = await f.create();
    assert.equal((await f.serve(f.request(f.id, { Cookie: otherSession.headers.get('set-cookie').split(';')[0] }))).status, 403);
    const internalUrl = [...f.cacheEntries.keys()][0];
    assert.equal((await f.serve(new Request(internalUrl))).status, 400);
    const oldKey = f.env.CUPID_MEDIA_KEY;
    f.env.CUPID_MEDIA_KEY = randomBytes(32).toString('base64');
    assert.equal((await f.serve()).status, 401, 'key rotation invalidates signed sessions');
    f.env.CUPID_MEDIA_KEY = oldKey;
  } finally { f.restore(); }
});

test('unknown paths and changed R2 objects fail closed; public normals need no session secret', async () => {
  const f = await fixture();
  try {
    for (const asset of ['characters/../dain_bikini', 'characters/fake', '__proto__', 'characters/dain_bikini%2fextra']) {
      assert.equal((await f.serve(f.request(asset))).status, 400);
    }
    assert.equal((await f.post(['characters/fake'])).status, 400);
    delete f.env.CUPID_MEDIA_KEY;
    const publicResponse = await f.serve(f.request(f.publicId, { Cookie: '' }));
    assert.equal(publicResponse.status, 200);
    assert.match(publicResponse.headers.get('cache-control'), /public/);
    assert.equal(f.counters().checks, 0);
    f.cacheEntries.clear();
    f.env.MEDIA_BUCKET.get = async () => ({ body: new Response('unexpected image').body, size: f.plain.length, etag: 'wrong' });
    assert.equal((await f.serve(f.request(f.publicId))).status, 503);
    f.env.MEDIA_BUCKET.get = async () => null;
    assert.equal((await f.serve(f.request(f.publicId))).status, 404);
    f.env.MEDIA_BUCKET.get = async () => { throw new Error('Storage outage'); };
    assert.equal((await f.serve(f.request(f.publicId))).status, 503);
    delete f.env.MEDIA_BUCKET;
    assert.equal((await f.serve(f.request(f.publicId))).status, 503);
  } finally { f.restore(); }
});

test('cold delivery starts streaming before the whole image or cache write is available', async () => {
  const f = await fixture();
  try {
    await f.post([f.id]);
    let finish;
    const remaining = new Promise(resolve => { finish = resolve; });
    const originalGet = f.env.MEDIA_BUCKET.get;
    f.env.MEDIA_BUCKET.get = async key => {
      const object = await originalGet(key);
      await object.body.cancel();
      object.body = new ReadableStream({
        async start(controller) {
          controller.enqueue(f.plain.subarray(0, 4));
          await remaining;
          controller.enqueue(f.plain.subarray(4));
          controller.close();
        }
      });
      return object;
    };
    let releaseCache;
    global.caches.default.put = () => new Promise(resolve => { releaseCache = resolve; });
    const timeout = new Promise((_, reject) => { const timer = setTimeout(() => reject(new Error('Buffered the entire image')), 1000); timer.unref(); });
    const response = await Promise.race([f.serve(), timeout]);
    const reader = response.body.getReader();
    const chunk = await Promise.race([reader.read(), timeout]);
    assert.deepEqual(Buffer.from(chunk.value), f.plain.subarray(0, 4));
    finish(); releaseCache();
    assert.deepEqual(Buffer.from((await reader.read()).value), f.plain.subarray(4));
    assert.equal((await reader.read()).done, true);
    await Promise.all(f.writes);
  } finally { f.restore(); }
});
