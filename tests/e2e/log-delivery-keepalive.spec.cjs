'use strict';
// 2026-10-08 장애 재현: 브라우저의 keepalive 전송 한도(64KB)가 차면 keepalive·sendBeacon 요청이 네트워크에 나가기도 전에
// 'Failed to fetch'로 거절되어, AI 답변은 계속 나오는데 chat_logs·장면 기록·표시 영수증·오류 보고가 통째로 끊겼다.
// 실제 Chromium에서 응답하지 않는 keepalive 요청으로 한도를 채운 뒤, 실제 1:1 프리토킹 답변 경로가
// 답변 표시와 chat_logs·표시 영수증·장면 기록 전송, HTTP 500 반복 실패 후 기록 보존과 복구 확인
const { test, expect } = require('@playwright/test');
const { installAffinitySeeder } = require('./helpers/affinity-seed.cjs');

const API_HOST = /chatbot-api\.[^/]+\.workers\.dev/;
const CASES = {
    ko: { page: '/game.html', appId: 'cupid', input: '오늘 수업 많이 힘들었지? 매점에서 네가 좋아하는 우유 사 왔어.', reply: '어? 고마워. 마침 목말랐는데, 이거 어떻게 알았어?' },
    en: { page: '/game-en.html', appId: 'cupid-en', input: 'Long morning, huh? I grabbed you the milk you like from the shop.', reply: 'Oh, thank you. I was thirsty, actually. How did you know?' },
    ja: { page: '/game-ja.html', appId: 'cupid-ja', input: '今日の授業、大変だったでしょ？購買で好きな牛乳を買ってきたよ。', reply: 'え？ありがとう。ちょうど喉が渇いてたの。どうして分かったの？' }
};

function parseBody(request) {
    try { return JSON.parse(request.postData() || 'null') || {}; } catch (_) { return {}; }
}

async function installNetwork(page, { chatLogStatus = 200 } = {}) {
    const seen = { ai: [], chatLogs: [], renderAcks: [], routeEvents: [], errorLogs: [], chatLogStatus };
    await page.route(/googletagmanager|google-analytics|analytics\.google|cloudflareinsights/, route => route.fulfill({ status: 204, body: '' }));
    await page.route(API_HOST, async route => {
        const request = route.request();
        const url = new URL(request.url());
        const origin = request.headers().origin || '*';
        const cors = {
            'access-control-allow-origin': origin,
            'access-control-allow-headers': 'Content-Type, x-app-id, x-app-type',
            'access-control-allow-methods': 'GET, POST, OPTIONS',
            'access-control-max-age': '7200',
            'content-type': 'application/json'
        };
        if (request.method() === 'OPTIONS') return route.fulfill({ status: 204, headers: cors, body: '' });
        // 응답하지 않아 keepalive 한도를 계속 차지합니다.
        if (url.pathname === '/hang') return;
        const body = parseBody(request);
        if (url.pathname === '/chat-logs') {
            seen.chatLogs.push({ body, keepalive: false });
            return route.fulfill(seen.chatLogStatus === 200
                ? { status: 200, headers: cors, body: JSON.stringify({ ok: true }) }
                : { status: seen.chatLogStatus, headers: cors, body: JSON.stringify({ error: 'mock D1 failure' }) });
        }
        if (url.pathname === '/chat-logs/render-ack') {
            seen.renderAcks.push(body);
            return route.fulfill({ status: 200, headers: cors, body: JSON.stringify({ ok: true }) });
        }
        if (url.pathname === '/cupid-route-events') {
            seen.routeEvents.push(body);
            return route.fulfill({ status: 200, headers: cors, body: JSON.stringify({ ok: true, eventIds: (body.events || []).map(event => event.eventId) }) });
        }
        if (url.pathname === '/error-logs') {
            seen.errorLogs.push(body);
            return route.fulfill({ status: 200, headers: cors, body: JSON.stringify({ ok: true }) });
        }
        return route.fulfill({ status: 200, headers: cors, body: '{}' });
    });
    await page.route('**/api/ai', async route => {
        const request = route.request();
        if (request.method() !== 'POST') return route.continue();
        const body = parseBody(request);
        seen.ai.push(body);
        const reply = seen.reply || '응';
        const content = { segments: [{ type: 'dialogue', text: reply }], expression: 'neutral', affinity: 2, forcedSexualViolation: 'none' };
        const payload = { ...(body.turnId && { turnId: body.turnId }), model: 'google/gemma-4-31b-it', provider: 'openrouter',
            choices: [{ message: { content: JSON.stringify(content) } }] };
        return route.fulfill({ status: 200, contentType: 'text/event-stream',
            body: `data: ${JSON.stringify({ choices: [{ delta: { content: JSON.stringify(content) } }] })}\n\ndata: ${JSON.stringify({ ...payload, final: true })}\n\ndata: [DONE]\n\n` });
    });
    return seen;
}

async function openFreeTalk(page, pagePath) {
    await installAffinitySeeder(page);
    await page.goto(pagePath);
    await page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
    await page.evaluate(async () => {
        const e = window.gameEngine;
        e.dialogueSystem.typingSpeed = 0;
        e.uiManager.showModal = async message => { window.__cupidLogPathModal = String(message); };
        window.cupidTestSeedAffinities({ Seoyeon: 10 });
        await e.renderScene('lunch_seo_freetalk');
    });
    await page.waitForFunction(() => !window.gameEngine.dialogueSystem.isCurrentlyTyping());
}

// 응답하지 않는 keepalive 요청으로 한도를 채우고, 정말 찼는지(작은 keepalive도 거절되는지) 확인합니다.
async function exhaustKeepalive(page) {
    await page.evaluate(async () => {
        const endpoint = window.API_ENDPOINT;
        for (let size = 32768; size >= 16; size = Math.floor(size / 2)) {
            for (let i = 0; i < 2; i += 1) {
                fetch(`${endpoint}hang`, { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: 'x'.repeat(size), keepalive: true }).catch(() => {});
            }
            await new Promise(resolve => setTimeout(resolve, 30));
        }
    });
    return probeKeepalive(page);
}

function probeKeepalive(page) {
    return page.evaluate(async () => {
        const beacon = navigator.sendBeacon(`${window.API_ENDPOINT}probe-beacon`, 'y'.repeat(200));
        try {
            await fetch(`${window.API_ENDPOINT}probe`, { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: 'y'.repeat(200), keepalive: true });
            return { fetch: 'sent', beacon };
        } catch (error) {
            return { fetch: String(error), beacon };
        }
    });
}

for (const [lang, sample] of Object.entries(CASES)) {
    test(`${lang}: with the keepalive quota exhausted, the AI reply is shown and chat_logs, render-ack and route-events still arrive`, async ({ page }) => {
        test.setTimeout(90_000);
        const pageErrors = [];
        page.on('pageerror', error => pageErrors.push(String(error?.message || error)));
        const seen = await installNetwork(page);
        seen.reply = sample.reply;
        await openFreeTalk(page, sample.page);

        const proof = await exhaustKeepalive(page);
        // keepalive fetch는 바로 거절됩니다. sendBeacon은 true를 돌려줘도 실제로는 나가지 못하고 대기할 수 있어 판단에 쓰지 않습니다.
        expect(proof.fetch).toMatch(/Failed to fetch/);

        await page.evaluate(async input => {
            const e = window.gameEngine;
            document.getElementById('chat-input').value = input;
            await e.freeTalkSystem.sendChatMessage(id => e.sceneRenderer.getScene(id));
        }, sample.input);

        // AI 요청은 서버의 기록 도착 확인용으로 userId와 turnId를 함께 보냅니다.
        expect(seen.ai).toHaveLength(1);
        const deviceId = await page.evaluate(() => window.getCupidDeviceId());
        expect(seen.ai[0].userId).toBe(deviceId);
        expect(seen.ai[0].turnId).toMatch(/^[a-z0-9]+-[a-z0-9]+$/);

        const shown = await page.evaluate(() => ({
            modal: window.__cupidLogPathModal || '',
            text: document.getElementById('dialogue-box')?.innerText || document.body.innerText
        }));
        expect(shown.modal).toBe('');
        expect(shown.text.replace(/\s+/g, '')).toContain(sample.reply.replace(/\s+/g, ''));

        // chat_logs: 사용자·답변 행이 이 턴의 turnId(request_id)로 도착합니다.
        await expect.poll(() => seen.chatLogs.filter(item => item.body.requestId === seen.ai[0].turnId).length, { timeout: 20_000 }).toBe(2);
        const assistant = seen.chatLogs.find(item => item.body.role === 'assistant' && item.body.requestId === seen.ai[0].turnId).body;
        expect(assistant.appId).toBe(sample.appId);
        expect(assistant.userId).toBe(deviceId);
        expect(assistant.content).toContain(sample.reply);
        expect(assistant).not.toHaveProperty('attempts');

        // 표시 영수증: 화면 글이 기대 글과 같으므로 renderedContent 없이 플래그만 보냅니다.
        await expect.poll(() => seen.renderAcks.filter(ack => ack.clientMsgId === assistant.clientMsgId).length, { timeout: 20_000 }).toBe(1);
        const ack = seen.renderAcks.find(item => item.clientMsgId === assistant.clientMsgId);
        expect(ack).toMatchObject({ status: 'rendered', renderedMatchesExpected: true });
        expect(ack).not.toHaveProperty('renderedContent');
        expect(ack.expectedContent.replace(/\s+/g, '')).toContain(sample.reply.replace(/\s+/g, '').slice(0, 10));

        // 장면 기록: 넘어오기 표시(crossing)도 한도와 상관없이 도착합니다.
        await page.evaluate(() => window.CupidRouteTelemetry.crossing('arrived'));
        await expect.poll(() => seen.routeEvents.flatMap(body => body.events || []).filter(event => event.eventType === 'crossing_arrived').length, { timeout: 20_000 }).toBe(1);

        // 큐가 비고, 오류 로그에는 기록 전송 실패가 없으며, 한도는 끝까지 차 있었습니다.
        const queues = await page.evaluate(() => ({
            chatLogs: window.CupidStorage.getItem('cupid_pending_chat_logs_v1'),
            renderAcks: window.CupidStorage.getItem('cupid_pending_render_acks_v1'),
            routeEvents: JSON.parse(window.CupidStorage.getItem('cupid_pending_route_events_v1') || '[]').length
        }));
        expect(queues.chatLogs ?? null).toBeNull();
        expect(queues.renderAcks ?? null).toBeNull();
        expect(queues.routeEvents).toBe(0);
        expect(seen.errorLogs.filter(body => /chat_log|render_ack|route_events/.test(String(body.errorType || '')))).toEqual([]);
        expect((await probeKeepalive(page)).fetch).toMatch(/Failed to fetch/);
        expect(pageErrors).toEqual([]);
    });
}

test('ko: repeated HTTP 500 retains the whole turn and recovers after reload (keepalive exhausted)', async ({ page }) => {
    test.setTimeout(90_000);
    const seen = await installNetwork(page, { chatLogStatus: 500 });
    seen.reply = CASES.ko.reply;
    await openFreeTalk(page, CASES.ko.page);
    expect((await exhaustKeepalive(page)).fetch).toMatch(/Failed to fetch/);

    await page.evaluate(async input => {
        const e = window.gameEngine;
        document.getElementById('chat-input').value = input;
        await e.freeTalkSystem.sendChatMessage(id => e.sceneRenderer.getScene(id));
    }, CASES.ko.input);

    // 전송 한도가 찬 상태에서도 사용자·답변 기록의 첫 실패 보고 도착 확인
    await expect.poll(() => seen.errorLogs.filter(body => body.errorType === 'chat_log_send_failed').length, { timeout: 20_000 }).toBe(2);
    const firstReport = seen.errorLogs.find(body => body.errorType === 'chat_log_send_failed');
    expect(firstReport.extra.httpStatus).toBe(500);
    expect(firstReport.extra.attempts).toBe(1);
    expect(firstReport.message).toMatch(/chat-logs HTTP 500/);
    const headId = firstReport.extra.clientMsgId;
    expect(headId).toBeTruthy();

    // 브라우저 저장값의 대기 시각만 앞당겨 재시도 실행
    for (let attempt = 2; attempt <= 6; attempt += 1) {
        await page.evaluate(async () => {
            const key = 'cupid_pending_chat_logs_v1';
            const queue = JSON.parse(window.CupidStorage.getItem(key) || '[]');
            window.CupidStorage.setItem(key, JSON.stringify(queue.map(item => ({ ...item, nextAttemptAt: 0 }))));
            await window.flushCupidChatLogQueue();
        });
    }
    await expect.poll(() => seen.errorLogs.filter(body => body.errorType === 'chat_log_delivery_delayed' && body.extra?.clientMsgId === headId).length, { timeout: 20_000 }).toBe(1);
    expect(seen.chatLogs.filter(item => item.body.clientMsgId === headId)).toHaveLength(6);
    expect(seen.errorLogs.filter(body => body.errorType === 'chat_log_send_failed' && body.extra?.clientMsgId === headId)).toHaveLength(1);
    const queue = await page.evaluate(() => JSON.parse(window.CupidStorage.getItem('cupid_pending_chat_logs_v1') || '[]'));
    expect(queue).toHaveLength(2);
    expect(queue.every(entry => entry.attempts === 6)).toBe(true);
    expect(seen.errorLogs.some(body => body.errorType === 'chat_log_queue_dropped')).toBe(false);

    seen.chatLogStatus = 200;
    await page.evaluate(() => {
        const key = 'cupid_pending_chat_logs_v1';
        const queue = JSON.parse(localStorage.getItem(key));
        localStorage.setItem(key, JSON.stringify(queue.map(item => ({ ...item, nextAttemptAt: 0 }))));
    });
    await page.reload();
    await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem('cupid_pending_chat_logs_v1') || '[]').length)).toBe(0);
    await expect.poll(() => seen.renderAcks.length).toBe(1);
    await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem('cupid_pending_render_acks_v1') || '[]').length)).toBe(0);
    expect(seen.chatLogs.slice(-2).map(item => item.body.clientMsgId)).toEqual(queue.map(item => item.clientMsgId));
});
