const { test, expect } = require('@playwright/test');

for (const surface of ['single', 'group', 'gallery']) for (const lang of ['ko', 'de']) {
    test(`${lang}/${surface}: failed generation preserves input and state; the next real reply completes once`, async ({ page }, testInfo) => {
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
                if (unavailable && lang === 'ko') return route.fulfill({
                    status: 503, headers: { 'X-AI-Retry-Exhausted': 'true', 'Retry-After': '30' },
                    json: { reason: 'UPSTREAM_RETRIES_EXHAUSTED', retryExhausted: true, retryAfterSeconds: 30 }
                });
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
        await page.goto(`/${surface === 'gallery' ? 'gallery' : 'game'}${suffix}.html`);
        if (surface === 'gallery') {
            await page.waitForFunction(() => window.galleryFreeTalk);
            await page.evaluate(() => window.galleryFreeTalk.open('nurse'));
        } else {
            await page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
            await page.evaluate(async surface => {
                const e = window.gameEngine;
                e.dialogueSystem.typingSpeed = 0;
                e.uiManager.showModal = async () => {};
                e.stateManager.stats.Teacher.affinity = 50;
                e.stateManager.stats.Nurse.affinity = 60;
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
        const failed = await snapshot();
        expect(failed).toEqual({ ...before, input });
        expect(logs.filter(entry => entry.logSource === 'realtime')).toHaveLength(0);
        expect(await page.locator('body').innerText()).not.toContain(placeholder);
        await expect.poll(() => errors.length).toBeGreaterThan(0);
        unavailable = false;
        await send();
        expect(requests).toHaveLength(2);
        const succeeded = await snapshot();
        expect(succeeded.turns).toBe(before.turns + 1);
        expect(succeeded.input).toBe('');
        expect(succeeded.history.filter(item => item.role === 'assistant').length).toBe(before.history.filter(item => item.role === 'assistant').length + 1);
        await expect.poll(() => logs.filter(entry => entry.role === 'assistant' && entry.logSource === 'realtime').length).toBe(surface === 'group' ? 2 : 1);
        expect(logs.some(entry => String(entry.content).includes(placeholder))).toBe(false);
        expect(requests[1].cacheKey).toBe(requests[0].cacheKey);
        await testInfo.attach('requests', { body: JSON.stringify(requests), contentType: 'application/json' });
    });
}
