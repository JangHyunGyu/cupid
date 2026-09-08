'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const sandbox = { window: {}, TextDecoder, Uint8Array };
vm.runInNewContext(fs.readFileSync(require.resolve('../assets/js/freetalk-core.js'), 'utf8'), sandbox);
const core = sandbox.window.CupidFreeTalkCore;
const recovery = {
    model: 'local-structured-recovery', provider: 'worker',
    providerRoute: 'worker:local-structured-recovery', recovered: true,
    recoveryReason: 'UPSTREAM_UNDISPLAYABLE',
    choices: [{ message: { content: JSON.stringify({ segments: [{ type: 'dialogue', text: 'temporary placeholder' }] }) } }]
};

test('legacy synthetic recovery never becomes displayable conversation content', async () => {
    assert.throws(() => core.selectChatCompletionContent(recovery), error => error.retryExhausted && error.reason === 'UPSTREAM_RETRIES_EXHAUSTED');
    await assert.rejects(core.readChatCompletionStream(new Response(JSON.stringify(recovery))), error => error.retryExhausted);
    const previews = [];
    await assert.rejects(core.readChatCompletionStream(new Response(`data: ${JSON.stringify({ ...recovery, final: true })}\n\ndata: [DONE]\n\n`, {
        headers: { 'Content-Type': 'text/event-stream' }
    }), { onDelta: value => previews.push(value) }), error => error.retryExhausted);
    assert.equal(previews.length, 0);
});

test('genuine model responses repaired after retries remain displayable', () => {
    const content = JSON.stringify({ segments: [{ type: 'dialogue', text: '오늘은 좀 괜찮아.' }] });
    assert.equal(core.selectChatCompletionContent({
        provider: 'openrouter', model: 'google/gemma-4-31b-it', recovered: true,
        recoveryReason: 'DEGENERATE_REPEAT_LOOP', choices: [{ message: { content } }]
    }), content);
});

test('exhausted upstream requests do not restart the frontend retry loop', async () => {
    const response = new Response(JSON.stringify({ retryExhausted: true, retryAfterSeconds: 30 }), {
        status: 503, headers: { 'X-AI-Retry-Exhausted': 'true', 'Retry-After': '30' }
    });
    assert.equal(core.shouldRetryAiResponse(response), false);
    const error = await core.createAiResponseError(response);
    assert.equal(error.reason, 'UPSTREAM_RETRIES_EXHAUSTED');
    assert.equal(error.retryAfterSeconds, 30);
    assert.equal(core.shouldRetryAiResponse(new Response('gateway unavailable', { status: 502 })), true);
});

test('non-JSON transport errors retain normal retry and error handling', async () => {
    const response = new Response('<html>gateway unavailable</html>', { status: 502 });
    assert.equal(core.shouldRetryAiResponse(response), true);
    const error = await core.createAiResponseError(response);
    assert.equal(error.message, 'HTTP 502');
    assert.equal(error.retryExhausted, false);
});
