'use strict';
// End-to-end guard for the Main 1:1 FreeTalk reply path (regression for 7eebb302, where a
// `const reply` reassignment threw on every AI reply). A mocked AI reply must be displayed,
// its affinity applied, the turn committed, and the realtime chat log sent, with no client error.
const { test, expect } = require('@playwright/test');

const CASES = {
    ko: { input: '오늘 수업 많이 힘들었지? 매점에서 네가 좋아하는 우유 사 왔어.', reply: '어? 고마워. 마침 목말랐는데, 이거 어떻게 알았어?' },
    en: { input: 'Long morning, huh? I grabbed you the milk you like from the shop.', reply: 'Oh, thank you. I was thirsty, actually. How did you know?' }
};

for (const [lang, sample] of Object.entries(CASES)) {
    test(`${lang}: a 1:1 FreeTalk AI reply is displayed, scored, committed and logged`, async ({ page }) => {
        test.setTimeout(90_000);
        const aiRequests = [];
        const chatLogs = [];
        const errorLogs = [];
        const pageErrors = [];
        const consoleErrors = [];
        page.on('pageerror', error => pageErrors.push(String(error?.message || error)));
        page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()); });
        await page.route('**/*', async route => {
            const request = route.request();
            if (request.method() !== 'POST') return route.continue();
            const body = request.postDataJSON() || {};
            const pathname = new URL(request.url()).pathname;
            if (body.requestType === 'character') {
                aiRequests.push(body);
                const content = { segments: [{ type: 'dialogue', text: sample.reply }], expression: 'neutral', affinity: 2, forcedSexualViolation: 'none' };
                const payload = { ...(body.turnId && { turnId: body.turnId }), model: 'google/gemma-4-31b-it', provider: 'openrouter',
                    choices: [{ message: { content: JSON.stringify(content) } }] };
                return route.fulfill({ status: 200, contentType: 'text/event-stream',
                    body: `data: ${JSON.stringify({ choices: [{ delta: { content: JSON.stringify(content) } }] })}\n\ndata: ${JSON.stringify({ ...payload, final: true })}\n\ndata: [DONE]\n\n` });
            }
            if (pathname === '/chat-logs') chatLogs.push(body);
            if (pathname === '/error-logs') errorLogs.push(body);
            return route.fulfill({ status: 200, json: { ok: true, eventIds: (body.events || []).map(item => item.eventId) } });
        });
        await page.goto(`/game${lang === 'ko' ? '' : `-${lang}`}.html`);
        await page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
        await page.evaluate(async () => {
            const e = window.gameEngine;
            e.dialogueSystem.typingSpeed = 0;
            e.uiManager.showModal = async message => { window.__cupidReplyPathModal = String(message); };
            e.stateManager.stats.Seoyeon.affinity = 10;
            await e.renderScene('lunch_seo_freetalk');
        });
        await page.waitForFunction(() => !window.gameEngine.dialogueSystem.isCurrentlyTyping());
        const before = await page.evaluate(() => ({
            turns: window.gameEngine.freeTalkSystem.freeTalkTurns,
            affinity: window.gameEngine.stateManager.getAffinity('Seoyeon')
        }));
        await page.evaluate(async input => {
            const e = window.gameEngine;
            document.getElementById('chat-input').value = input;
            await e.freeTalkSystem.sendChatMessage(id => e.sceneRenderer.getScene(id));
        }, sample.input);
        expect(aiRequests).toHaveLength(1);
        const after = await page.evaluate(() => {
            const e = window.gameEngine;
            return {
                modal: window.__cupidReplyPathModal || '',
                turns: e.freeTalkSystem.freeTalkTurns,
                affinity: e.stateManager.getAffinity('Seoyeon'),
                input: e.uiManager.chatInput.value,
                lastAssistant: e.freeTalkSystem.freeTalkHistory.filter(item => item.role === 'assistant').at(-1)?.content || '',
                shown: document.getElementById('dialogue-box')?.innerText || document.body.innerText
            };
        });
        expect(after.modal).toBe('');
        expect(after.turns).toBe(before.turns + 1);
        expect(after.input).toBe('');
        expect(after.lastAssistant).toContain(sample.reply);
        // The dialogue box paces sentences onto separate lines, so compare without whitespace.
        expect(after.shown.replace(/\s+/g, '')).toContain(sample.reply.replace(/\s+/g, ''));
        expect(after.affinity).toBe(before.affinity + 2);
        await expect.poll(() => chatLogs.filter(entry => entry.role === 'assistant' && entry.logSource === 'realtime').length).toBe(1);
        expect(chatLogs.find(entry => entry.role === 'assistant' && entry.logSource === 'realtime').content).toContain(sample.reply);
        expect(errorLogs.filter(entry => /freetalk/.test(JSON.stringify(entry)))).toEqual([]);
        expect(pageErrors).toEqual([]);
        expect(consoleErrors.filter(text => /AI Chat Error|Assignment to constant/i.test(text))).toEqual([]);
    });
}

test('ko: a client code exception in the reply path is reported to error logs, not hidden as transport noise', async ({ page }) => {
    test.setTimeout(90_000);
    await page.route('**/*', async route => {
        const request = route.request();
        if (request.method() !== 'POST') return route.continue();
        const body = request.postDataJSON() || {};
        if (body.requestType === 'character') {
            const content = { segments: [{ type: 'dialogue', text: '응, 고마워.' }], expression: 'neutral', affinity: 1, forcedSexualViolation: 'none' };
            return route.fulfill({ status: 200, contentType: 'text/event-stream',
                body: `data: ${JSON.stringify({ ...(body.turnId && { turnId: body.turnId }), choices: [{ message: { content: JSON.stringify(content) } }], final: true })}\n\ndata: [DONE]\n\n` });
        }
        return route.fulfill({ status: 200, json: { ok: true } });
    });
    await page.goto('/game.html');
    await page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
    const result = await page.evaluate(async () => {
        const e = window.gameEngine;
        e.dialogueSystem.typingSpeed = 0;
        e.uiManager.showModal = async () => {};
        e.stateManager.stats.Seoyeon.affinity = 10;
        await e.renderScene('lunch_seo_freetalk');
        while (e.dialogueSystem.isCurrentlyTyping()) await new Promise(resolve => setTimeout(resolve, 20));
        const affinityBefore = e.stateManager.getAffinity('Seoyeon');
        const reported = [];
        window.logCupidError = (error, options) => reported.push({ message: String(error?.message || error), errorType: options?.errorType || '' });
        e.freeTalkSystem.parseJsonResponse = () => { throw new TypeError('Assignment to constant variable.'); };
        document.getElementById('chat-input').value = '오늘 점심 같이 먹을래?';
        await e.freeTalkSystem.sendChatMessage(id => e.sceneRenderer.getScene(id));
        return { reported, affinityBefore, affinity: e.stateManager.getAffinity('Seoyeon'), input: e.uiManager.chatInput.value };
    });
    expect(result.reported).toEqual([{ message: 'Assignment to constant variable.', errorType: 'freetalk_client_exception' }]);
    expect(result.affinity).toBe(result.affinityBefore);
    expect(result.input).toBe('오늘 점심 같이 먹을래?');
});
