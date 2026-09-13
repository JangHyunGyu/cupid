const { test, expect } = require('@playwright/test');

for (const [lang, character, startAffinity, viewport] of [
    ['ko', 'Yuna', -38, { width: 390, height: 844 }],
    ['en', 'Dain', -78, { width: 1440, height: 900 }]
]) {
    test(`${lang}/${character}: negative emotion follows applied scores across turns and reload`, async ({ page }) => {
        test.setTimeout(120_000);
        await page.setViewportSize(viewport);
        const requests = [];
        const changes = [-5, 3, 0];
        await page.route('**/*', async route => {
            const request = route.request();
            if (request.method() !== 'POST') return route.continue();
            const body = request.postDataJSON();
            if (new URL(request.url()).pathname === '/api/ai' && body.requestType === 'character') {
                requests.push(body);
                return route.fulfill({ status: 200, json: { choices: [{ message: { content: JSON.stringify({
                    segments: [{ type: 'dialogue', text: lang === 'ko' ? '지금은 혼자 있고 싶어.' : 'I want to be alone right now.' }],
                    expression: 'normal', affinity: changes[requests.length - 1], forcedSexualViolation: 'none'
                }) } }] } });
            }
            return route.fulfill({ status: 200, json: { ok: true, eventIds: (body?.events || []).map(event => event.eventId) } });
        });
        await page.goto(lang === 'ko' ? '/game.html' : '/game-en.html');
        const ready = () => page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
        await ready();
        await page.evaluate(async ({ character, startAffinity }) => {
            const e = window.gameEngine;
            e.dialogueSystem.typingSpeed = 0;
            e.stateManager.flags = { [`isDating_${character}`]: true };
            e.stateManager.stats[character].affinity = startAffinity;
            await e.renderScene(`wall_${character.toLowerCase()}_freetalk`);
        }, { character, startAffinity });
        let score = startAffinity;
        for (let turn = 0; turn < 3; turn++) {
            await page.waitForFunction(() => !window.gameEngine.dialogueSystem.isCurrentlyTyping() && !window.gameEngine.freeTalkSystem.isProcessingChat);
            const expectedState = await page.evaluate(({ lang, score }) => {
                const e = window.gameEngine;
                return window.buildCupidNegativeAffinityState(lang, score, e.sceneRenderer.getScene(e.sceneRenderer.currentSceneId).name);
            }, { lang, score });
            await page.evaluate(async lang => {
                const e = window.gameEngine;
                e.uiManager.chatInput.value = lang === 'ko' ? '알겠어. 네 얘기는 들었어.' : 'All right. I heard you.';
                await e.freeTalkSystem.sendChatMessage(id => e.sceneRenderer.getScene(id));
            }, lang);
            expect(requests).toHaveLength(turn + 1);
            const [stable, dynamic] = requests.at(-1).messages.find(message => message.role === 'system').content.split('===CACHE_BOUNDARY===');
            expect(dynamic).toContain(expectedState);
            expect(stable).not.toContain(expectedState);
            expect(dynamic).toContain(lang === 'ko' ? '연인이라는 이유로' : 'A strained relationship');
            score += changes[turn];
            expect(await page.evaluate(character => window.gameEngine.stateManager.getAffinity(character), character)).toBe(score);
            if (turn === 0) {
                await page.reload();
                await ready();
                expect(await page.evaluate(() => window.gameEngine.freeTalkSystem.freeTalkTurns)).toBe(1);
            }
        }
        expect(new Set(requests.map(request => request.cacheKey)).size).toBe(1);
    });
}
