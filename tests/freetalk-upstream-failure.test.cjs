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

for (const content of ['The first reply stays.', '{"segments":[{"type":"dialogue","text":"Keep this first reply."}]}', '{"segments":[{"type":"dialogue","text":"She said \\\"hello\\\"."}']) {
    test(`complete or locally repairable stream content survives missing final metadata: ${content}`, async () => {
        const response = new Response(`data: ${JSON.stringify({ choices: [{ delta: { content } }] })}\n\n`, {
            headers: { 'Content-Type': 'text/event-stream' }
        });
        const result = await core.readChatCompletionStream(response);
        assert.ok(core.selectChatCompletionContent(result).includes(content.includes('segments') ? 'segments' : 'The first reply'));
        if (content.includes('She said')) assert.equal(JSON.parse(core.selectChatCompletionContent(result)).segments[0].text, 'She said "hello".');
    });
}
test('irreparable or empty streamed replies still fail, while safety and stale turns stay terminal', async () => {
    for (const content of ['', '{broken', '{"segments":[]}']) {
        const response = new Response(`data: ${JSON.stringify({ choices: [{ delta: { content } }] })}\n\n`, {
            headers: { 'Content-Type': 'text/event-stream' }
        });
        await assert.rejects(core.readChatCompletionStream(response), error => error.reason === 'STREAM_INTERRUPTED');
    }
    for (const reason of ['SAFETY_BLOCKED', 'STALE_TURN']) {
        const response = new Response(`data: ${JSON.stringify({ choices: [{ delta: { content: 'A visible reply.' } }] })}\n\n`, {
            headers: { 'Content-Type': 'text/event-stream' }
        });
        await assert.rejects(core.readChatCompletionStream(response, { onDelta() { throw Object.assign(new Error(reason), { reason }); } }), error => error.reason === reason);
    }
});
test('Main and Gallery clients contain no quality-driven generation or rejection path', () => {
    for (const file of ['modules/FreeTalkSystem.js', 'gallery-freetalk.js']) {
        const source = fs.readFileSync(require.resolve('../assets/js/' + file), 'utf8');
        assert.doesNotMatch(source, /repairAttempt|requestCupid(?:Gallery)?ReplyData\(repairMessages|ROLEPLAY_QUALITY_REJECTED/);
    }
});
test('a read failure after a complete reply preserves actual stream text', async () => {
    let reads = 0;
    const content = '{"segments":[{"type":"dialogue","text":"Keep the received text."}]}';
    const response = { headers: new Headers({ 'content-type': 'text/event-stream' }), body: { getReader: () => ({
        async read() {
            if (reads++ === 0) return { done: false, value: new TextEncoder().encode(`data: ${JSON.stringify({ choices: [{ delta: { content } }] })}\n\n`) };
            throw new TypeError('Network interrupted');
        }, releaseLock() {}
    }) } };
    assert.equal(core.selectChatCompletionContent(await core.readChatCompletionStream(response)), content);
});
test('only real network fetch failures are treated as transient transport noise', () => {
    for (const message of ['Failed to fetch', 'Load failed', 'NetworkError when attempting to fetch resource.',
        'The network connection was lost.', 'Network request failed', 'fetch failed', 'Network interrupted']) {
        assert.equal(core.isNetworkTransportError(new TypeError(message)), true, message);
        assert.equal(core.isClientCodeException(new TypeError(message)), false, message);
    }
    assert.equal(core.isNetworkTransportError(Object.assign(new Error('socket closed'), { isTransportFailure: true })), true);
    // Code bugs (e.g. the 7eebb302 const reassignment) must reach logCupidError as client exceptions.
    for (const error of [new TypeError('Assignment to constant variable.'),
        new TypeError("Cannot read properties of undefined (reading 'fetch')"),
        new TypeError('this.applyAffinity is not a function'), new ReferenceError('reply is not defined'),
        new RangeError('Invalid array length')]) {
        assert.equal(core.isNetworkTransportError(error), false, error.message);
        assert.equal(core.isClientCodeException(error), true, error.message);
    }
    for (const error of [new Error('HTTP 503'), new Error('AI response was empty. Please try again.'), null, undefined]) {
        assert.equal(core.isNetworkTransportError(error), false);
        assert.equal(core.isClientCodeException(error), false);
    }
});
test('Main, Group and Gallery catch blocks classify TypeErrors through the shared network check', () => {
    const main = fs.readFileSync(require.resolve('../assets/js/modules/FreeTalkSystem.js'), 'utf8');
    const gallery = fs.readFileSync(require.resolve('../assets/js/gallery-freetalk.js'), 'utf8');
    for (const source of [main, gallery]) {
        assert.doesNotMatch(source, /instanceof TypeError/);
        assert.match(source, /(?:CupidFreeTalkCore|GalleryFreeTalkCore)\.requestChatCompletion\(/);
        assert.match(source, /(?:CupidFreeTalkCore|GalleryFreeTalkCore)\.isNetworkTransportError\(/);
    }
    assert.equal((main.match(/CupidFreeTalkCore\.requestChatCompletion\(/g) || []).length, 2);
    assert.match(main, /isClientCodeException\(error\) \? 'freetalk_client_exception'/);
    assert.match(main, /isClientCodeException\(error\) \? 'group_freetalk_client_exception'/);
    assert.match(gallery, /isClientCodeException\(err\) \? 'freetalk_client_exception'/);
    // A code bug is neither transient nor offline, so the logging guard lets it through.
    assert.match(main, /const isOfflineTransportFailure = navigator\.onLine === false && isNetworkTransportFailure;/);
    assert.match(main, /const isOfflineTransportFailure = navigator\.onLine === false && isTransientTransportFailure;/);
    assert.match(gallery, /const isOfflineTransportFailure = navigator\.onLine === false && isNetworkTransportFailure;/);
});
