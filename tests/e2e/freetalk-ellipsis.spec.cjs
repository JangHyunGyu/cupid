const { test, expect } = require('@playwright/test');
const { installAffinitySeeder } = require('./helpers/affinity-seed.cjs');

for (const surface of ['single', 'group', 'gallery']) for (const lang of ['ko', 'de']) for (const failure of ['empty', 'malformed']) {
    test(`${lang}/${surface}: ${failure}: ellipsis presentation uses one request and no affinity change`, async ({ page }, testInfo) => {
        test.setTimeout(90_000);
        let unavailable = true;
        const requests = [];
        const logs = [];
        const errors = [];
        const placeholder = 'temporary placeholder must never enter conversation';
        await page.route('**/*', async route => {
            const request = route.request();
            if (request.method() !== 'POST') return route.continue();
            const body = request.postDataJSON() || {};
            const pathname = new URL(request.url()).pathname;
            if (body.requestType === 'character') {
                requests.push(body);
                if (requests.length === 1) {
                    if (failure === 'network') return route.abort('failed');
                    return route.fulfill({ status: 200, json: { choices: [{ message: { content: failure === 'empty' ? '' : '{"segments":[{"type":"dialogue","text":"Received prefix' } }] } });
                }
                unavailable = false;
                const segments = [{ type: 'dialogue', text: unavailable ? placeholder : lang === 'ko' ? '오늘은 잘 지냈어. 너는 어땠어?' : 'Heute war es ganz ruhig. Wie war dein Tag?' }];
                const content = surface === 'group'
                    ? { conversations: body.responseSpeakers.map(({ name }) => ({ name, segments, expression: 'neutral', affinity: 0 })) }
                    : { segments, expression: 'neutral', affinity: 0, forcedSexualViolation: 'none' };
                const payload = {
                    ...body.turnId && { turnId: body.turnId },
                    model: unavailable ? 'local-structured-recovery' : 'google/gemma-4-31b-it',
                    provider: unavailable ? 'worker' : 'openrouter',
                    ...(unavailable ? { recovered: true, recoveryReason: 'UPSTREAM_UNDISPLAYABLE' } : {}),
                    choices: [{ message: { content: JSON.stringify(content) } }]
                };
                return route.fulfill({ status: 200, contentType: 'text/event-stream', body: `data: ${JSON.stringify({ ...payload, final: true })}\n\ndata: [DONE]\n\n` });
            }
            if (pathname === '/chat-logs') logs.push(body);
            if (pathname === '/error-logs') errors.push(body);
            return route.fulfill({ status: 200, json: { ok: true, eventIds: (body.events || []).map(item => item.eventId) } });
        });
        const suffix = lang === 'ko' ? '' : `-${lang}`;
        if (surface === 'gallery') {
            // Gallery free talk opens only after the Nurse ending, 80+ affinity and 30 talks.
            await page.addInitScript(() => {
                if (localStorage.getItem('upstream-failure-gallery-seeded')) return;
                localStorage.setItem('upstream-failure-gallery-seeded', '1');
                localStorage.setItem('cupid_gallery', JSON.stringify({
                    version: 2, affinityRebalanceVersion: 1,
                    characters: { nurse: { met: true, maxAffinity: 90, currentAffinity: 60, galleryFreeTalkAffinityInitialized: true, perfectEndingCleared: true, freeTalkCount: 30 } },
                    cg: {}, endings: {}, bgm: {}
                }));
            });
        }
        await installAffinitySeeder(page);
        await page.goto(`/${surface === 'gallery' ? 'gallery' : 'game'}${suffix}.html`);
        if (surface === 'gallery') {
            await page.waitForFunction(() => window.galleryFreeTalk);
            expect(await page.evaluate(() => window.galleryFreeTalk.open('nurse'))).not.toBe(false);
        } else {
            await page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
            await page.evaluate(async surface => {
                const e = window.gameEngine;
                e.dialogueSystem.typingSpeed = 0;
                window.__cupidFailureModals = [];
                e.uiManager.showModal = async message => { window.__cupidFailureModals.push(String(message || '')); };
                window.cupidTestSeedAffinities({ Teacher: 50 });
                window.cupidTestSeedAffinities({ Nurse: 60 });
                await e.renderScene(surface === 'group' ? 'after3_group_teacher_companion' : 'after_nurse_freetalk');
            }, surface);
        }
        await page.waitForFunction(surface => surface === 'gallery'
            ? !window.galleryFreeTalk.isTyping
            : !window.gameEngine.dialogueSystem.isCurrentlyTyping(), surface);
        const snapshot = () => page.evaluate(surface => {
            if (surface === 'gallery') {
                const t = window.galleryFreeTalk;
                return { turns: t.progress.getFreeTalkCount('nurse'), affinity: t.progress.getAffinity('nurse'),
                    history: t.chatHistory.filter(item => item.role !== 'system'), input: document.getElementById('chat-input').value };
            }
            const e = window.gameEngine;
            return { turns: e.freeTalkSystem.freeTalkTurns, affinity: e.stateManager.getAffinity('Nurse'),
                history: e.freeTalkSystem.freeTalkHistory.filter(item => item.role !== 'system'), input: e.uiManager.chatInput.value };
        }, surface);
        const before = await snapshot();
        const input = lang === 'ko' ? '오늘은 잘 지냈어?' : 'Wie war dein Tag?';
        const send = () => page.evaluate(async ({ surface, input }) => {
            document.getElementById('chat-input').value = input;
            if (surface === 'gallery') return window.galleryFreeTalk._handleSend();
            const e = window.gameEngine;
            const advance = window.setInterval(() => e.freeTalkSystem.advanceGroupMessageQueue(), 20);
            try { await e.freeTalkSystem.sendChatMessage(id => e.sceneRenderer.getScene(id)); }
            finally { window.clearInterval(advance); }
        }, { surface, input });
        await send();
        expect(requests).toHaveLength(1);
        const succeeded = await snapshot();
        expect(succeeded.turns).toBe(before.turns + (failure === 'empty' ? 0 : 1));
        expect(succeeded.affinity).toBe(before.affinity);
        expect(await page.locator('body').innerText()).toContain(failure === 'empty' ? '...' : 'Received prefix...');
        expect(succeeded.input).toBe('');
        expect(succeeded.history.filter(item => item.role === 'assistant').length).toBe(before.history.filter(item => item.role === 'assistant').length + 1);
        await expect.poll(() => logs.filter(entry => entry.role === 'assistant' && entry.logSource === 'realtime').length).toBe(1);
        expect(logs.some(entry => String(entry.content).includes(placeholder))).toBe(false);
        expect(errors).toHaveLength(0);
        await testInfo.attach('requests', { body: JSON.stringify(requests), contentType: 'application/json' });
    });
}
