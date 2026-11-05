const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function harness(width = 375, respond = () => new Response('{}')) {
  const calls = [], widgets = [];
  const window = { innerWidth: width, fetch: async (...args) => { calls.push(args); return respond(...args); },
    turnstile: { render(host, options) { widgets.push(options); return widgets.length - 1; },
      execute(id) { queueMicrotask(() => widgets[id].callback('single-use-' + id)); }, remove() {} } };
  const events = new EventTarget();
  const appended = [];
  const document = { documentElement: { lang: 'en' }, body: { append(node) { appended.push(node); } }, visibilityState: 'visible',
    addEventListener: events.addEventListener.bind(events), removeEventListener: events.removeEventListener.bind(events),
    createElement: tag => ({ tagName: String(tag || '').toUpperCase(), style: {}, children: [],
      append(...nodes) { this.children.push(...nodes); }, setAttribute() {}, remove() { this.removed = true; } }) };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../assets/js/ai-browser-proof.js'), 'utf8'), {
    window, document, location: new URL('https://cupid.archerlab.dev/game.html'),
    URL, Request, Response, Headers, crypto: globalThis.crypto, TextEncoder, DOMException, setTimeout, clearTimeout, console: { warn() {} },
    Array, Object, Error, String, Boolean,
  });
  return { window, calls, widgets, document, events, appended };
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

test('initial first-greeting skips browser verification once and defers Turnstile to the first user message', async () => {
  const h = harness();
  const greetingBody = JSON.stringify({ messages: [{ role: 'system', content: 'Opening' }, { role: 'user', content: 'Start' }] });
  await h.window.fetch('/api/ai', { method: 'POST', body: greetingBody, headers: { 'x-request-type': 'first-greeting' } });
  assert.equal(h.widgets.length, 0);
  assert.equal(h.calls.length, 1);
  assert.equal(h.calls[0][0].headers.get('x-ai-proof'), null);

  const userBody = JSON.stringify({ messages: [{ role: 'system', content: 'Opening' }, { role: 'user', content: 'Hello' }] });
  await h.window.fetch('/api/ai', { method: 'POST', body: userBody, headers: { 'x-request-type': 'character' } });
  assert.equal(h.widgets.length, 1);
  assert.equal(h.calls.length, 2);
  assert.equal(h.calls[1][0].headers.get('x-ai-proof'), 'single-use-0');
});

test('a recoverable verification failure retries once without changing request bytes or cache identity', async () => {
  const h = harness();
  h.window.turnstile.execute = id => queueMicrotask(() => id === 0
    ? h.widgets[id]['error-callback']('300030') : h.widgets[id].callback('recovered-proof'));
  const body = '{"messages":[{"role":"user","content":"Keep exact bytes"}]}';
  await h.window.fetch('/api/ai', { method: 'POST', body, headers: { 'x-cache-key': 'stable-key', 'x-request-type': 'summary' } });
  assert.equal(h.widgets.length, 2);
  assert.equal(h.calls.length, 1);
  assert.equal(h.widgets[0].cData, h.widgets[1].cData);
  assert.equal(await h.calls[0][0].clone().text(), body);
  assert.equal(h.calls[0][0].headers.get('x-cache-key'), 'stable-key');
  assert.equal(h.calls[0][0].headers.get('x-ai-proof'), 'recovered-proof');
});

for (const [code, attempts] of [['200500', 2], ['110200', 1], ['unknown', 1]]) {
  test(`verification ${code} fails closed after ${attempts} attempt(s)`, async () => {
    const h = harness();
    h.window.turnstile.execute = id => queueMicrotask(() => h.widgets[id]['error-callback'](code));
    await assert.rejects(h.window.fetch('/api/ai', { method: 'POST', body: '{}' }), error => {
      assert.equal(error.turnstileErrorCode, code);
      assert.deepEqual([...error.turnstileErrorCodes], Array(attempts).fill(code));
      assert.equal(error.turnstileWidgetLoaded, true);
      assert.equal(error.turnstileScriptLoaded, true);
      assert.equal(error.turnstileBotSuspected, false);
      assert.match(error.message, /Verify again/);
      return true;
    });
    assert.equal(h.widgets.length, attempts);
    assert.equal(h.calls.length, 0);
  });
}

test('bot-suspected codes (300/600) attach Turnstile metadata, show extension/VPN guidance, and retry interactively on button click', async () => {
  const h = harness();
  let shouldFail = true;
  h.window.turnstile.execute = id => queueMicrotask(() => shouldFail
    ? h.widgets[id]['error-callback']('300030')
    : h.widgets[id].callback('interactive-proof'));
  await assert.rejects(h.window.fetch('/api/ai', { method: 'POST', body: '{}' }), error => {
    assert.equal(error.turnstileErrorCode, '300030');
    assert.deepEqual([...error.turnstileErrorCodes], ['300030', '300030']);
    assert.equal(error.turnstileWidgetLoaded, true);
    assert.equal(error.turnstileScriptLoaded, true);
    assert.equal(error.turnstileBotSuspected, true);
    assert.match(error.message, /extensions or VPN/i);
    return true;
  });
  const banner = h.appended.find(node => node.className === 'ai-browser-verification-retry');
  assert.ok(banner, 'retry banner should be rendered');
  assert.ok(banner.retryButton, 'retry button should be attached');

  let clicked = 0;
  h.document.querySelector = selector => {
    if (selector === '#chat-input') return { value: 'Retry my message' };
    if (selector === '#chat-send') return { disabled: false, click() { clicked++; } };
    return null;
  };
  shouldFail = false;
  banner.retryButton.onclick({});
  assert.equal(clicked, 1);
  assert.equal(banner.removed, true);

  await h.window.fetch('/api/ai', { method: 'POST', body: '{}' });
  assert.equal(h.widgets.at(-1).appearance, 'always');
  assert.equal(h.calls.length, 1);
  assert.equal(h.calls[0][0].headers.get('x-ai-proof'), 'interactive-proof');
});

test('hidden pages wait for visibility, and cancellation releases the verification queue', async () => {
  const h = harness(); h.document.visibilityState = 'hidden';
  const controller = new AbortController();
  const first = h.window.fetch('/api/ai', { method: 'POST', body: '{}', signal: controller.signal });
  const rejected = assert.rejects(first, { name: 'AbortError' });
  await new Promise(resolve => setTimeout(resolve, 20));
  assert.equal(h.widgets.length, 0);
  controller.abort(); await rejected;
  const next = h.window.fetch('/api/ai', { method: 'POST', body: '{}' });
  await new Promise(resolve => setTimeout(resolve, 20));
  assert.equal(h.widgets.length, 0);
  h.document.visibilityState = 'visible'; h.events.dispatchEvent(new Event('visibilitychange'));
  await next;
  assert.equal(h.widgets.length, 1); assert.equal(h.calls.length, 1);
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

// D1 error_logs #6465 (2026-11-04): 300030 twice, logged with no stage, and the automatic retry
// was rendered invisible again. The retry must be interactive and the error must carry stage/attempts.
test('300030 challenge failures retry with a visible widget and report stage and attempts (row 6465)', async () => {
  const h = harness();
  h.window.turnstile.execute = id => queueMicrotask(() => h.widgets[id]['error-callback']('300030'));
  await assert.rejects(h.window.fetch('/api/ai', { method: 'POST', body: '{}', headers: { 'x-request-type': 'character' } }), error => {
    assert.equal(error.turnstileErrorCode, '300030');
    assert.deepEqual(Array.from(error.turnstileErrorCodes), ['300030', '300030']);
    assert.equal(error.turnstileStage, 'challenge');
    assert.equal(error.turnstileAttempts, 2);
    assert.equal(error.turnstileAppearance, 'always');
    return true;
  });
  assert.deepEqual(h.widgets.map(w => w.appearance), ['interaction-only', 'always']);
});
