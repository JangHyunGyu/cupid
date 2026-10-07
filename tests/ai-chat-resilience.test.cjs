const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const quiet = { log() {}, info() {}, warn() {}, error() {} };
const reply = '{"segments":[{"type":"dialogue","text":"The original reply."}]}';
const completionPayload = payload => new Response(JSON.stringify(payload), { headers: { 'content-type': 'application/json' } });
const completion = content => completionPayload({ choices: [{ message: { content } }] });
const sse = (content, final = null) => new Response(`data: ${JSON.stringify({ choices: [{ delta: { content } }] })}\n\n${final ? `data: ${JSON.stringify({ final: true, ...final })}\n\n` : ''}`, { headers: { 'content-type': 'text/event-stream' } });
const history = [{ role: 'system', content: 'Stable character canon\n===CACHE_BOUNDARY===\nCurrent turn' }, { role: 'user', content: 'Continue.' }];

for (const [label, response] of [
  ['empty text', () => completion('')],
  ['empty structured reply', () => completion('{"segments":[]}')],
  ['malformed structured reply', () => completion('{"segments":[{"text":"unfinished')],
  ['JSON scalar', () => completion('null')],
  ['broken HTTP JSON', () => new Response('<html>Bad gateway</html>', { headers: { 'content-type': 'application/json' } })],
  ['network disconnect', () => { throw new TypeError('Failed to fetch'); }],
  ['interrupted stream', () => sse('{"segments":[{"text":"unfinished')],
  ['empty final stream', () => sse('', { choices: [{ message: { content: '' } }] })],
  ['temporary gateway error', () => new Response('Bad gateway', { status: 502 })]
]) test(`${label}: recover with the same prompt, cache key and turn`, async () => {
  const runtime = load([response, () => completion(reply)]);
  assert.match(await runtime.run(), /The original reply/);
  assert.equal(runtime.requests.length, 2);
  const first = runtime.requests[0], second = runtime.requests[1];
  assert.deepEqual(second.body.messages, first.body.messages);
  assert.equal(second.body.turnId, first.body.turnId);
  assert.equal(second.headers['x-cache-key'], first.headers['x-cache-key']);
});
for (const [label, response] of [
  ['complete stream without final event', () => sse(reply)],
  ['missing JSON closing containers', () => completion(reply.slice(0, -2))]
]) test(`${label}: preserve usable content without regenerating`, async () => {
  const runtime = load([response]);
  assert.match(await runtime.run(), /The original reply/);
  assert.equal(runtime.requests.length, 1);
});
for (const [label, response] of [
  ['server retry exhaustion', () => new Response(JSON.stringify({ retryExhausted: true, reason: 'UPSTREAM_RETRIES_EXHAUSTED' }), { status: 503, headers: { 'x-ai-retry-exhausted': 'true' } })],
  ['placeholder recovery payload', () => completionPayload({ model: 'local-structured-recovery', retryExhausted: true, choices: [{ message: { content: reply } }] })],
  ['safety block', () => sse('', { error: 'Blocked', reason: 'SAFETY_BLOCKED' })],
  ['permission error', () => new Response('{}', { status: 403 })],
  ['caller bug', () => { throw new TypeError('Assignment to constant variable.'); }]
]) test(`${label}: do not send another generation`, async () => {
  const runtime = load([response, () => completion(reply)]);
  await assert.rejects(runtime.run());
  assert.equal(runtime.requests.length, 1);
});
test('repeated invalid replies stop within the shared retry budget', async () => {
  const runtime = load(Array.from({ length: 5 }, () => () => completion('{"segments":[]}')));
  await assert.rejects(runtime.run());
  assert.ok(runtime.requests.length >= 2 && runtime.requests.length <= 3);
});
test('explicit cancellation stops recovery', async () => {
  const runtime = load([() => { runtime.cancel(); throw Object.assign(new Error('Canceled'), { name: 'AbortError' }); }, () => completion(reply)]);
  await assert.rejects(runtime.run());
  assert.equal(runtime.requests.length, 1);
});

const sandbox = { window: {}, AbortController, TextDecoder, setTimeout, clearTimeout };
vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/js/freetalk-core.js'), 'utf8'), sandbox);
const core = sandbox.window.CupidFreeTalkCore;
function load(responses) {
  const requests = [], controller = new AbortController();
  return { requests, cancel: () => controller.abort(), async run(options = {}) {
    const payload = await core.requestChatCompletion('https://ai.test', stream => ({ method: 'POST', headers: { 'x-cache-key': 'test:stable' }, body: JSON.stringify({ messages: history, turnId: 'same-turn', stream }) }), {
      signal: controller.signal, retryDelayMs: 1, timeoutMs: options.timeout || 120000,
      fetchImpl: async (_url, init) => { requests.push({ body: JSON.parse(init.body), headers: init.headers }); return responses[requests.length - 1](init); }
    });
    return core.selectChatCompletionContent(payload);
  } };
}

test('a stalled stream retains a complete reply at the deadline without regenerating', async () => {
  const runtime = load([init => new Response(new ReadableStream({ start(controller) {
    controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ choices: [{ delta: { content: reply } }] })}\n\n`));
    init.signal.addEventListener('abort', () => controller.error(Object.assign(new Error('Aborted'), { name: 'AbortError' })), { once: true });
  } }), { headers: { 'content-type': 'text/event-stream' } })]);
  assert.match(await runtime.run({ timeout: 20 }), /The original reply/);
  assert.equal(runtime.requests.length, 1);
});
