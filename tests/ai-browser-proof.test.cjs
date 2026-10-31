const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function harness(width = 375) {
  const calls = [], widgets = [];
  const window = { innerWidth: width, fetch: async (...args) => { calls.push(args); return new Response('{}'); },
    turnstile: { render(host, options) { widgets.push(options); return widgets.length - 1; },
      execute(id) { queueMicrotask(() => widgets[id].callback('single-use-' + id)); }, remove() {} } };
  const document = { documentElement: { lang: 'en' }, body: { append() {} },
    createElement: () => ({ style: {}, remove() {} }) };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../assets/js/ai-browser-proof.js'), 'utf8'), {
    window, document, location: new URL('https://cupid.archerlab.dev/game.html'),
    URL, Request, Response, Headers, crypto: globalThis.crypto, TextEncoder, DOMException, setTimeout, clearTimeout,
  });
  return { window, calls, widgets };
}

test('verification preserves every prompt byte, cache key, request type and stream flag', async () => {
  const h = harness();
  for (const kind of ['character', 'first-greeting', 'summary', 'selection']) {
    const body = JSON.stringify({ messages: [{ role: 'system', content: 'stable\n===CACHE_BOUNDARY===\ndynamic' }], stream: true });
    await h.window.fetch('/api/ai', { method: 'POST', body, headers: { 'x-cache-key': 'exact-stable-fingerprint', 'x-request-type': kind } });
    const request = h.calls.at(-1)[0];
    assert.equal(await request.clone().text(), body);
    assert.equal(request.headers.get('x-cache-key'), 'exact-stable-fingerprint');
    assert.equal(request.headers.get('x-request-type'), kind);
    assert.equal(request.headers.get('x-ai-proof'), 'single-use-' + (h.widgets.length - 1));
    const hash = Buffer.from(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(kind + '\n' + body))).toString('hex');
    assert.equal(h.widgets.at(-1).cData, hash);
    assert.equal(h.widgets.at(-1).action, 'ai_request');
  }
  assert.equal(new Set(h.calls.map(args => args[0].headers.get('x-ai-proof'))).size, 4);
});

test('only AI POST requests need proof, with compact mobile verification and cancellation', async () => {
  const h = harness(320);
  await h.window.fetch('/api/session', { method: 'POST', body: '{}' });
  await h.window.fetch('/api/ai');
  assert.equal(h.widgets.length, 0);
  await h.window.fetch('https://avatar.archerlab.dev/api/credits/chat', { method: 'POST', body: '{}' });
  assert.equal(h.widgets[0].size, 'compact');
  const signal = AbortSignal.abort();
  await assert.rejects(h.window.fetch('https://openrouter-api.yama5993.workers.dev/', { method: 'POST', body: '{}', signal }), { name: 'AbortError' });
  assert.equal(h.calls.length, 3);
});

test('cancellation is immediate while another request is still obtaining its proof', async () => {
  const h = harness();
  h.window.turnstile.execute = () => {};
  const first = h.window.fetch('/api/ai', { method: 'POST', body: '{}' });
  while (!h.widgets.length) await new Promise(resolve => setTimeout(resolve, 1));
  const controller = new AbortController();
  const second = h.window.fetch('/api/ai', { method: 'POST', body: '{}', signal: controller.signal });
  const rejected = assert.rejects(second, { name: 'AbortError' });
  controller.abort(); await rejected;
  assert.equal(h.calls.length, 0);
  h.widgets[0].callback('first-proof'); await first;
  assert.equal(h.widgets.length, 1);
});
