const { test, expect } = require('@playwright/test');

for (const mode of ['high', 'low']) for (const [index, character] of ['Seoyeon', 'Yuna', 'Dain', 'Teacher', 'Nurse'].entries()) {
    test(`${mode}/${character}: buildup, persisted rival, entry loss, group turns and archive`, async ({ page }) => {
        test.setTimeout(120_000);
        const requests = [];
        const logs = [];
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        await page.route('**/*', async route => {
            const request = route.request();
            if (request.method() !== 'POST') return route.continue();
            const body = request.postDataJSON() || {};
            if (new URL(request.url()).pathname === '/api/ai') {
                requests.push(body);
                return route.fulfill({ status: 200, json: { choices: [{ message: { content: JSON.stringify({
                    conversations: body.responseSpeakers.map((speaker, i) => ({
                        name: speaker.name,
                        segments: [{ type: 'dialogue', text: i === 0 ? '그때 무슨 뜻이었는지 조금 더 얘기해 줘.' : '네. 저도 듣고 있어요.' }],
                        expression: 'normal', affinity: i === 0 ? 2 : 1
                    }))
                }) } }] } });
            }
            if (new URL(request.url()).pathname === '/chat-logs') logs.push(body);
            return route.fulfill({ status: 200, json: { ok: true, eventIds: (body.events || []).map(event => event.eventId) } });
        });
        await page.setViewportSize(index % 2 ? { width: 390, height: 844 } : { width: 1280, height: 800 });
        await page.goto('/game.html');
        const ready = () => page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
        await ready();
        const delayed = index % 2 === 1;
        const entry = await page.evaluate(async ({ character, mode, delayed }) => {
            const e = window.gameEngine;
            e.dialogueSystem.typingSpeed = 0;
            e.stateManager.currentDay = mode === 'high' ? 5 : 4;
            e.stateManager.playerName = '검증';
            e.stateManager.flags = { route_seoyeon: true };
            for (const id of ['Seoyeon', 'Yuna', 'Dain', 'Teacher', 'Nurse']) e.stateManager.stats[id].affinity = 79;
            e.stateManager.stats[character].affinity = 80;
            e.stateManager.stats.Haeun.affinity = mode === 'high' ? 12 : -1;
            e.stateManager.setChatMemory('Haeun', [{ role: 'user', content: '지금은 얘기를 듣기 어려워.' }, { role: 'assistant', content: '제 얘기도 조금은 들어 주셨으면 좋겠어요.' }]);
            await e.renderScene(mode === 'high' ? 'day5_haeun_gate' : 'day4_haeun_gate');
            const seen = [];
            for (let i = 0; i < 15; i++) {
                const id = e.sceneRenderer.currentSceneId;
                seen.push(id);
                if (id.includes('_escalation')) break;
                const scene = e.sceneRenderer.getScene(id);
                if (scene.choices) await e.executeChoice(scene.choices[delayed ? 1 : 0]);
                else await e.renderScene(e.sceneRenderer.resolveNextScene(scene));
            }
            return { seen, selected: e.stateManager.getFlag(mode === 'high' ? 'day5_haeun_rival' : 'day4_haeun_rival'), affinity: e.stateManager.getAffinity(character), scene: e.sceneRenderer.currentSceneId };
        }, { character, mode, delayed });
        expect(entry.selected).toBe(character);
        expect(entry.affinity).toBe(delayed ? 60 : 65);
        expect(entry.seen).toContain(mode === 'high' ? 'day5_haeun_high_clasp' : 'day4_haeun_concern_clarify');
        await page.reload();
        await ready();
        expect(await page.evaluate(character => window.gameEngine.stateManager.getAffinity(character), character)).toBe(entry.affinity);
        await page.evaluate(async () => {
            const e = window.gameEngine;
            e.dialogueSystem.typingSpeed = 0;
            await e.renderScene(e.sceneRenderer.getScene(e.sceneRenderer.currentSceneId).next);
        });
        const sessionId = `day${mode === 'low' ? 4 : 5}_haeun_${mode === 'low' ? 'concern_' : ''}${character.toLowerCase()}_group_talk`;
        expect(await page.evaluate(() => window.gameEngine.sceneRenderer.currentSceneId)).toBe(sessionId);
        expect(await page.evaluate(() => window.gameEngine.freeTalkSystem.groupParticipants.map(participant => participant.id))).toEqual([character, 'Haeun']);
        await expect(page.locator('[data-group-char-id="Haeun"] img')).toBeVisible();
        const dimensions = await page.evaluate(() => [...document.querySelectorAll('.group-freetalk-participant img')].map(img => ({ width: img.naturalWidth, height: img.naturalHeight })));
        expect(dimensions.every(image => image.width > 0 && image.height > 0)).toBe(true);
        await page.screenshot({ path: `test-results/haeun-${mode}-${character}.png` });
        const turns = character === 'Seoyeon' ? 5 : 1;
        for (let turn = 0; turn < turns; turn++) {
            await page.waitForFunction(() => !window.gameEngine.dialogueSystem.isCurrentlyTyping() && !window.gameEngine.freeTalkSystem.isProcessingChat);
            await page.evaluate(() => {
                const e = window.gameEngine;
                e.dialogueSystem.typingSpeed = 0;
                e.uiManager.chatInput.value = '내가 어떤 뜻으로 말했는지 차근차근 설명할게.';
                window.__haeunSend = e.freeTalkSystem.sendChatMessage(id => e.sceneRenderer.getScene(id));
            });
            await page.waitForFunction(() => window.gameEngine.freeTalkSystem._groupAdvanceResolver);
            await page.evaluate(() => window.gameEngine.freeTalkSystem.advanceGroupMessageQueue());
            await page.evaluate(() => window.__haeunSend);
            expect(requests).toHaveLength(turn + 1);
            const current = await page.evaluate(character => window.gameEngine.stateManager.getAffinity(character), character);
            expect(current).toBe(entry.affinity + (turn + 1) * 2);
            if (turn === 0 && turns > 1) {
                await page.reload();
                await ready();
                expect(await page.evaluate(() => window.gameEngine.freeTalkSystem.freeTalkTurns)).toBe(1);
                expect(await page.evaluate(character => window.gameEngine.stateManager.getAffinity(character), character)).toBe(current);
            }
        }
        expect(new Set(requests.map(request => request.cacheKey)).size).toBe(1);
        expect(requests[0].messages[0].content).toContain(mode === 'low' ? '지금은 얘기를 듣기 어려워.' : '팔찌');
        await expect.poll(() => logs.filter(log => log.sessionId === sessionId).length).toBe(turns * 3);
        expect(logs.filter(log => log.sessionId === sessionId).every(log => log.conversationDay === (mode === 'low' ? 4 : 5))).toBe(true);
        expect(logs.filter(log => log.sessionId === sessionId && log.role === 'assistant').map(log => log.speakerId).filter(Boolean).length).toBeGreaterThan(0);
        if (turns === 5) {
            await page.waitForFunction(() => !window.gameEngine.freeTalkSystem.isFreeTalking);
            await page.evaluate(async () => {
                const e = window.gameEngine;
                await e.renderScene(e.sceneRenderer.getScene(e.sceneRenderer.currentSceneId).next);
            });
            expect(await page.evaluate(() => window.gameEngine.sceneRenderer.currentSceneId)).toBe(mode === 'high' ? 'day5_haeun_finish' : 'day4_haeun_finish');
            if (mode === 'low') {
                const continuation = await page.evaluate(async () => {
                    const e = window.gameEngine;
                    await e.renderScene('day4_haeun_gate');
                    const morning = e.sceneRenderer.currentSceneId;
                    e.stateManager.currentDay = 5;
                    e.stateManager.stats.Haeun.affinity = -1;
                    await e.renderScene('day5_haeun_gate');
                    return { morning, festival: e.sceneRenderer.currentSceneId, completed: e.stateManager.getFlag('day4_haeun_event_done') };
                });
                expect(continuation).toEqual({ morning: 'morning4_end', festival: 'day5_haeun_low_intro', completed: true });
            }
        }
        expect(errors).toEqual([]);
    });
}

test('legacy Day 5 reputation saves keep their date, score and continuation', async ({ page }) => {
    await page.route('**/*', route => route.request().method() === 'POST'
        ? route.fulfill({ json: { ok: true } }) : route.continue());
    await page.goto('/game.html');
    const ready = () => page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
    await ready();
    await page.evaluate(async () => {
        const e = window.gameEngine;
        e.dialogueSystem.typingSpeed = 0;
        e.stateManager.currentDay = 5;
        e.stateManager.stats.Yuna.affinity = 65;
        e.stateManager.flags = { day5_haeun_rival: 'Yuna', day5_haeun_misunderstanding_started: true };
        await e.renderScene('day5_haeun_concern_yuna_group_talk');
    });
    await page.reload();
    await ready();
    const restored = await page.evaluate(() => {
        const e = window.gameEngine;
        return { day: e.stateManager.currentDay, scene: e.sceneRenderer.currentSceneId,
            next: e.sceneRenderer.getScene(e.sceneRenderer.currentSceneId).next,
            affinity: e.stateManager.getAffinity('Yuna'), participants: e.freeTalkSystem.groupParticipants.map(p => p.id) };
    });
    expect(restored).toEqual({ day: 5, scene: 'day5_haeun_concern_yuna_group_talk', next: 'day5_haeun_low_intro', affinity: 65, participants: ['Yuna', 'Haeun'] });
});
