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
  ['network disconnect', () => { throw new TypeError('Failed to fetch'); }],
  ['temporary gateway error', () => new Response('Bad gateway', { status: 502 })]
]) test(`${label}: recover with the same prompt, cache key and turn`, async () => {
  const runtime = load([response, () => completion(reply)]);
  assert.match(await runtime.run(), /The original reply/);
  assert.equal(runtime.requests.length, 2);
  assert.deepEqual(runtime.requests[1].body.messages, runtime.requests[0].body.messages);
  assert.equal(runtime.requests[1].body.turnId, runtime.requests[0].body.turnId);
  assert.equal(runtime.requests[1].headers['x-cache-key'], runtime.requests[0].headers['x-cache-key']);
});
for (const [label, response, expected] of [
  ['empty text', () => completion(''), '...'],
  ['empty structured reply', () => completion('{"segments":[]}'), '...'],
  ['malformed structured reply', () => completion('{"segments":[{"text":"unfinished'), 'unfinished...'],
  ['JSON scalar', () => completion('null'), '...'],
  ['broken HTTP JSON', () => new Response('<html>Bad gateway</html>', { headers: { 'content-type': 'application/json' } }), '...'],
  ['interrupted stream', () => sse('{"segments":[{"text":"unfinished'), 'unfinished...'],
  ['empty final stream', () => sse('', { choices: [{ message: { content: '' } }] }), '...']
]) test(`${label}: display the received content or ellipsis without generating again`, async () => {
  const runtime = load([response, () => completion(reply)]);
  const parsed = JSON.parse(await runtime.run());
  const visible = parsed.segments || parsed.sceneMessages?.[0]?.segments || parsed.conversations?.[0]?.segments;
  assert.equal(visible[0].text, expected);
  assert.equal(parsed.displayFallback.empty, expected === '...');
  assert.equal(runtime.requests.length, 1);
  assert.equal(runtime.requests[0].body.responsePresentation, 'ellipsis');
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
test('an empty reply completes with an ellipsis after a single request', async () => {
  const runtime = load([() => completion('{"segments":[]}')]);
  assert.match(await runtime.run(), /\.\.\./);
  assert.equal(runtime.requests.length, 1);
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
    const payload = await core.requestChatCompletion('https://ai.test', stream => ({ method: 'POST', headers: { 'x-cache-key': 'test:stable' }, body: JSON.stringify({ messages: history, turnId: 'same-turn', stream, responsePresentation: 'ellipsis' }) }), {
      signal: controller.signal, retryDelayMs: 1, timeoutMs: options.timeout || 120000, onDelta: options.onDelta,
      fetchImpl: async (_url, init) => { requests.push({ body: JSON.parse(init.body), headers: init.headers }); return responses[requests.length - 1](init); }
    });
    return core.selectChatCompletionContent(payload);
  } };
}

for (const stream of [false, true]) test(`repeated-token ${stream ? 'stream' : 'JSON'} never reaches preview or consumes a turn`, async () => {
  const content = JSON.stringify({ segments: [{ type: 'narration', text: 'our '.repeat(150) }], affinity: 3 });
  const runtime = load([() => stream ? sse(content, { choices: [{ message: { content } }] }) : completion(content)]);
  const previews = [];
  const parsed = JSON.parse(await runtime.run({ onDelta: value => previews.push(value.content) }));
  assert.equal(parsed.displayFallback.empty, true);
  assert.equal(parsed.affinity, 0);
  assert.equal(previews.length, 0);
  assert.equal(runtime.requests.length, 1);
});

test('normal emphasis remains intact and reaches the validated preview once', async () => {
  const content = JSON.stringify({ segments: [{ type: 'dialogue', text: 'No no no! Come back.' }] });
  const runtime = load([() => sse(content, { choices: [{ message: { content } }] })]);
  const previews = [];
  assert.match(await runtime.run({ onDelta: value => previews.push(value.content) }), /No no no!/);
  assert.equal(previews.length, 1);
});

test('a stalled stream retains a complete reply at the deadline without regenerating', async () => {
  const runtime = load([init => new Response(new ReadableStream({ start(controller) {
    controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ choices: [{ delta: { content: reply } }] })}\n\n`));
    init.signal.addEventListener('abort', () => controller.error(Object.assign(new Error('Aborted'), { name: 'AbortError' })), { once: true });
  } }), { headers: { 'content-type': 'text/event-stream' } })]);
  assert.match(await runtime.run({ timeout: 20 }), /The original reply/);
  assert.equal(runtime.requests.length, 1);
});
