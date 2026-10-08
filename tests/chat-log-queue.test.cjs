'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

function harness(post = async () => new Response('{}')) {
    const source = fs.readFileSync(process.env.CUPID_LOG_TEST_SOURCE
        || path.join(__dirname, '../assets/js/modules/config.js'), 'utf8');
    const storage = new Map();
    const requests = [], reports = [], timers = new Map();
    let now = 1000000, timerId = 0;
    const context = vm.createContext({
        window: { CupidStorage: {
            getItem: key => storage.get(key) || null,
            setItem: (key, value) => storage.set(key, value),
            removeItem: key => storage.delete(key)
        } },
        navigator: { onLine: true }, API_ENDPOINT: 'https://logs.test/',
        Date: class extends Date { static now() { return now; } },
        console: { warn() {} }, AbortController, Blob,
        setTimeout: (fn, delay) => { timers.set(++timerId, { fn, delay }); return timerId; },
        clearTimeout: id => timers.delete(id),
        logCupidError: (error, options) => reports.push({ error, ...options }),
        fetch: async (url, init) => {
            const body = JSON.parse(init.body);
            requests.push({ url, body, init });
            return post(body, url);
        }
    });
    vm.runInContext(source.slice(source.indexOf('const CUPID_CHAT_LOG_QUEUE_KEY'),
        source.indexOf('async function saveCupidChatLog(')), context);
    return { context, requests, reports, storage, timers,
        advance: ms => { now += ms; },
        run: code => vm.runInContext(code, context),
        logs: () => JSON.parse(storage.get('cupid_pending_chat_logs_v1') || '[]'),
        acks: () => JSON.parse(storage.get('cupid_pending_render_acks_v1') || '[]') };
}

test('retryable server errors survive six attempts and recover with the original ID', async () => {
    let status = 503;
    const h = harness(async () => new Response('{}', { status }));
    h.run("enqueueCupidChatLog({ appId: 'cupid', clientMsgId: 'saved-turn', content: 'reply' })");
    for (let attempt = 1; attempt <= 8; attempt++) {
        await h.run('flushCupidChatLogQueue()');
        assert.equal(h.logs()[0]?.attempts, attempt);
        h.advance(120000);
    }
    assert.equal(h.reports.filter(r => r.errorType === 'chat_log_send_failed').length, 1);
    assert.equal(h.reports.filter(r => r.errorType === 'chat_log_delivery_delayed').length, 1);
    assert.equal(h.reports.filter(r => r.errorType === 'chat_log_queue_dropped').length, 0);
    status = 200;
    await h.run('flushCupidChatLogQueue()');
    assert.equal(h.logs().length, 0);
    assert.ok(h.requests.every(r => r.body.clientMsgId === 'saved-turn'));
    assert.ok(h.requests.every(r => !('nextAttemptAt' in r.body) && !('attempts' in r.body)));
});

test('failed rows and their receipts do not block newer successful rows and receipts', async () => {
    const h = harness(async body => new Response('{}', { status: body.clientMsgId === 'bad' ? 500 : 200 }));
    h.run(`enqueueCupidChatLogs(['bad', 'good'].map(clientMsgId => ({ appId: 'cupid', clientMsgId, content: 'reply' })));
        ['bad', 'good'].forEach(clientMsgId => enqueueCupidRenderAck({ appId: 'cupid', clientMsgId }));`);
    await h.run('flushCupidChatLogQueue()');
    await h.run('flushCupidChatRenderAckQueue()');
    assert.deepEqual(h.logs().map(r => r.clientMsgId), ['bad']);
    assert.deepEqual(h.acks().map(r => r.clientMsgId), ['bad']);
    assert.equal(h.requests.filter(r => r.url.endsWith('/render-ack')).length, 1);
    assert.equal(h.requests.at(-1).body.clientMsgId, 'good');
    const before = h.requests.length;
    await h.run('flushCupidChatLogQueue()');
    assert.equal(h.requests.length, before, 'repeated flushes respect the retry deadline');
});

test('render receipt failures also survive six attempts without blocking other receipts', async () => {
    let status = 429;
    const h = harness(async body => new Response('{}', { status: body.clientMsgId === 'bad' ? status : 200 }));
    h.run(`['bad', 'good'].forEach(clientMsgId => enqueueCupidRenderAck({ appId: 'cupid', clientMsgId }));`);
    for (let attempt = 1; attempt <= 7; attempt++) {
        await h.run('flushCupidChatRenderAckQueue()');
        assert.equal(h.acks()[0]?.attempts, attempt);
        h.advance(120000);
    }
    assert.deepEqual(h.acks().map(r => r.clientMsgId), ['bad']);
    status = 200;
    await h.run('flushCupidChatRenderAckQueue()');
    assert.equal(h.acks().length, 0);
});

test('offline backlog exceeding the former limits retains every row and receipt', async () => {
    const h = harness();
    h.context.navigator.onLine = false;
    h.run(`for (let i = 0; i < 150; i++) {
        const entry = { appId: 'cupid', clientMsgId: 'turn-' + i, content: 'reply' };
        enqueueCupidChatLog(entry); enqueueCupidRenderAck(entry);
    }`);
    await h.run('flushCupidChatLogQueue()');
    assert.equal(h.requests.length, 0);
    assert.equal(h.logs().length, 150);
    assert.equal(h.acks().length, 150);
    h.context.navigator.onLine = true;
    await h.run('flushCupidChatLogQueue()');
    await h.run('flushCupidChatRenderAckQueue()');
    assert.equal(h.requests.length, 300);
    assert.equal(h.logs().length + h.acks().length, 0);
});

test('network interruptions retain rows and non-retryable payload errors cannot clog the queue', async () => {
    let online = false;
    const h = harness(async body => {
        if (!online) throw new TypeError('Failed to fetch');
        return new Response('{}', { status: body.clientMsgId === 'invalid' ? 400 : 200 });
    });
    h.run(`enqueueCupidChatLogs(['invalid', 'valid'].map(clientMsgId => ({ appId: 'cupid', clientMsgId, content: 'reply' })))`);
    for (let i = 0; i < 7; i++) {
        await h.run('flushCupidChatLogQueue()');
        h.advance(120000);
    }
    assert.equal(h.logs().length, 2);
    online = true;
    await h.run('flushCupidChatLogQueue()');
    assert.equal(h.logs().length, 0);
    const dropped = h.reports.filter(r => r.errorType === 'chat_log_queue_dropped');
    assert.equal(dropped.length, 1);
    assert.equal(dropped[0].extra.httpStatus, 400);
    assert.equal(dropped[0].extra.reason, 'non_retryable');
});

test('a stalled response body times out, releases the flush, and lets the next row save', async () => {
    const h = harness(async body => body.clientMsgId === 'stalled'
        ? { ok: true, status: 200, text: () => new Promise(() => {}) }
        : new Response('{}'));
    h.run(`enqueueCupidChatLogs(['stalled', 'next'].map(clientMsgId => ({ appId: 'cupid', clientMsgId, content: 'reply' })))`);
    const flushing = h.run('flushCupidChatLogQueue()');
    await Promise.resolve();
    const timeout = [...h.timers.values()].find(timer => timer.delay === 15000);
    assert.ok(timeout);
    timeout.fn();
    await flushing;
    assert.deepEqual(h.logs().map(r => r.clientMsgId), ['stalled']);
    assert.equal(h.logs()[0].attempts, 1);
    assert.equal(h.requests.length, 2);
    assert.equal(h.requests[0].init.signal.aborted, true);
    assert.equal(h.run('cupidChatLogFlushPromise'), null);
});

test('concurrent save calls join the active flush without duplicate requests or lost rows', async () => {
    let release;
    const gate = new Promise(resolve => { release = resolve; });
    const h = harness(async body => {
        if (body.clientMsgId === 'first') await gate;
        return new Response('{}');
    });
    h.run("enqueueCupidChatLog({ appId: 'cupid', clientMsgId: 'first', content: 'reply' })");
    const first = h.run('flushCupidChatLogQueue()');
    h.run("enqueueCupidChatLog({ appId: 'cupid', clientMsgId: 'second', content: 'reply' })");
    const second = h.run('flushCupidChatLogQueue()');
    release();
    await Promise.all([first, second]);
    assert.deepEqual(h.requests.map(r => r.body.clientMsgId), ['first', 'second']);
    assert.equal(h.logs().length, 0);
});
