const test = require('node:test');
const assert = require('node:assert/strict');
const { randomBytes, createCipheriv, createHash } = require('node:crypto');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const load = name => import(pathToFileURL(path.join(root, name)).href);
const origin = 'https://cupid.test';

async function fixture() {
  const [sessions, media, unlock, { MEDIA_MANIFEST }] = await Promise.all([
    load('functions/_lib/media-session.js'), load('functions/api/media.js'),
    load('functions/api/gallery/unlocks.js'), load('functions/_lib/media-manifest.js')
  ]);
  const rawKey = randomBytes(32), iv = randomBytes(12), plain = Buffer.from('test-image-pixels');
  const cipher = createCipheriv('aes-256-gcm', rawKey, iv);
  const packed = Buffer.concat([Buffer.from('CUPIDENC1'), iv, cipher.update(plain), cipher.final(), cipher.getAuthTag()]);
  const id = 'characters/dain_bikini', publicId = 'characters/dain_normal';
  const original = [MEDIA_MANIFEST[id], MEDIA_MANIFEST[publicId]];
  const hash = createHash('sha256').update(packed).digest('hex');
  for (const name of [id, publicId]) MEDIA_MANIFEST[name] = {
    version: 'a'.repeat(24), files: [{ path: 'assets/images/' + name + '.webp', hash }]
  };
  const grants = new Set(), cacheEntries = new Map(), writes = [];
  let fetches = 0, checks = 0;
  const oldCaches = global.caches;
  global.caches = { default: {
    match: async key => cacheEntries.get(key.url)?.clone(),
    put: async (key, value) => { cacheEntries.set(key.url, value.clone()); }
  } };
  const env = { CUPID_MEDIA_KEY: rawKey.toString('base64'),
    ASSETS: { fetch: async () => { fetches++; return new Response(packed); } },
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

test('warm edge cache saves asset fetch/decryption but never bypasses current unlock checks', async () => {
  const f = await fixture();
  try {
    assert.equal((await f.serve()).status, 403);
    assert.equal((await f.post([f.id])).status, 200);
    const first = await f.serve();
    assert.equal(first.status, 200);
    assert.equal(first.headers.get('x-cupid-media-cache'), 'MISS');
    assert.match(first.headers.get('server-timing'), /decrypt;dur=/);
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

test('unknown paths, plaintext and changed ciphertext fail closed; public normals need no session', async () => {
  const f = await fixture();
  try {
    for (const asset of ['characters/../dain_bikini', 'characters/fake', '__proto__', 'characters/dain_bikini%2fextra']) {
      assert.equal((await f.serve(f.request(asset))).status, 400);
    }
    assert.equal((await f.post(['characters/fake'])).status, 400);
    const publicResponse = await f.serve(f.request(f.publicId, { Cookie: '' }));
    assert.equal(publicResponse.status, 200);
    assert.match(publicResponse.headers.get('cache-control'), /public/);
    assert.equal(f.counters().checks, 0);
    f.cacheEntries.clear();
    f.env.ASSETS.fetch = async () => new Response('plaintext image');
    assert.equal((await f.serve(f.request(f.publicId))).status, 503);
    const changed = Buffer.concat([Buffer.from('CUPIDENC1'), Buffer.alloc(60)]);
    f.env.ASSETS.fetch = async () => new Response(changed);
    assert.equal((await f.serve(f.request(f.publicId))).status, 503);
  } finally { f.restore(); }
});
