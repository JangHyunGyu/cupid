const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

function boot(options = {}) {
  const handlers = {}, entries = new Map(), deleted = [], writes = [];
  let fetches = 0;
  const cache = {
    match: async request => entries.get(request.url)?.clone(),
    put: async (request, response) => {
      if (options.disk) await options.disk;
      entries.set(request.url, response.clone());
    },
    keys: async () => [...entries.keys()].map(url => new Request(url)),
    delete: async request => entries.delete(request.url)
  };
  const sandbox = { Request, Response, URL, console, crypto, Map,
    location: { origin: 'https://cupid.test' },
    self: { addEventListener: (name, fn) => handlers[name] = fn, clients: { claim() {} } },
    caches: {
      open: async () => cache,
      keys: async () => ['cupid-protected-media-v2', 'cupid-v-old-media'],
      delete: async name => { deleted.push(name); return true; }
    },
    fetch: async request => {
      fetches++;
      if (options.network) await options.network;
      return new Response('pixels', { status: options.status || 200, headers: {
        'x-cupid-media-version': options.version || new URL(request.url).searchParams.get('v') || ''
      } });
    }
  };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../service-worker.js'), 'utf8'), sandbox);
  const request = (guest = 'guest-a', version = 'a'.repeat(24)) => new Request(
    'https://cupid.test/api/media?asset=characters/dain_laugh&guest=' + guest + '&v=' + version);
  function serve(req = request()) {
    let result;
    handlers.fetch({ request: req, respondWith: promise => result = promise, waitUntil: p => writes.push(p) });
    return result;
  }
  return { serve, request, entries, writes, handlers, deleted, fetches: () => fetches };
}

test('service worker coalesces identical reads and returns pixels before disk writes finish', async () => {
  let releaseDisk, releaseNetwork;
  const f = boot({ disk: new Promise(resolve => releaseDisk = resolve), network: new Promise(resolve => releaseNetwork = resolve) });
  const a = f.serve(), b = f.serve();
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(f.fetches(), 1);
  releaseNetwork();
  assert.equal(await (await a).text(), 'pixels');
  assert.equal(await (await b).text(), 'pixels');
  assert.equal(f.entries.size, 0, 'renderable response does not wait for disk');
  releaseDisk();
  await Promise.all(f.writes);
  await f.serve();
  assert.equal(f.fetches(), 1, 'warm read skips network');
  await f.serve(f.request('guest-b'));
  assert.equal(f.fetches(), 2, 'another guest cannot hit this browser cache entry');
  await Promise.all(f.writes);
});

test('service worker does not persist failures, mismatched hashes or session APIs', async () => {
  for (const options of [{ status: 403 }, { version: 'b'.repeat(24) }]) {
    const f = boot(options);
    await f.serve(); await Promise.all(f.writes);
    assert.equal(f.entries.size, 0);
  }
  const f = boot();
  await f.serve(f.request('guest-a', '2.9.272'));
  await f.serve(new Request('https://cupid.test/api/gallery/unlocks?guest=guest-a'));
  await Promise.all(f.writes);
  assert.equal(f.entries.size, 0);
});

test('application activation retains content-addressed media and removes legacy caches', async () => {
  const f = boot(); let completion;
  f.handlers.activate({ waitUntil: promise => completion = promise });
  await completion;
  assert.deepEqual(f.deleted, ['cupid-v-old-media']);
});
