const { test, expect } = require('@playwright/test');

for (const [lang, character, lead, offer, startAffinity] of [
    ['ko', 'Seoyeon', 'Dain', 'wall_dain_seo_tempt_2', -8],
    ['ko', 'Yuna', 'Seoyeon', 'wall_seo_yuna_tempt_2', -100],
    ['ko', 'Dain', 'Yuna', 'wall_yuna_dain_tempt_2', 30],
    ['en', 'Seoyeon', 'Dain', 'wall_dain_seo_tempt_2', -8]
]) {
    test(`${lang}/${character}: accepted CG, five scene-only turns, reload, and normal affinity afterward`, async ({ page }) => {
        test.setTimeout(120_000);
        const requests = [];
        const events = [];
        await page.route('**/*', async route => {
            const request = route.request();
            if (request.method() !== 'POST') return route.continue();
            const body = request.postDataJSON();
            if (new URL(request.url()).pathname === '/api/ai' && body.requestType === 'character') {
                requests.push(body);
                const replies = lang === 'ko'
                    ? ['네가 곁에 있어서 기뻐.', '오늘은 네 얘기가 궁금했어.', '그랬구나. 조금 더 들려줘.', '나도 오늘 이 시간이 좋아.', '다음에도 이렇게 얘기하자.']
                    : ['I’m glad you stayed.', 'I wanted to hear about your day.', 'Tell me a little more.', 'I like spending this time with you.', 'Let’s talk like this again.'];
                return route.fulfill({ status: 200, json: { choices: [{ message: { content: JSON.stringify({
                    segments: [{ type: 'dialogue', text: replies[(requests.length - 1) % replies.length] }],
                    expression: 'happy', affinity: 50, forcedSexualViolation: 'none'
                }) } }] } });
            }
            if (Array.isArray(body?.events)) events.push(...body.events);
            return route.fulfill({ status: 200, json: { ok: true, eventIds: (body?.events || []).map(event => event.eventId) } });
        });
        await page.goto(lang === 'ko' ? '/game.html' : '/game-en.html');
        const ready = () => page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
        await ready();
        const accepted = await page.evaluate(async ({ character, lead, offer, startAffinity }) => {
            const e = window.gameEngine;
            e.dialogueSystem.typingSpeed = 0;
            e.stateManager.flags = { [`route_${lead.toLowerCase()}`]: true, day4_confession_accepted: true };
            e.stateManager.stats[lead].affinity = 80;
            e.stateManager.stats[character].affinity = startAffinity;
            await e.renderScene(offer);
            const choice = e.sceneRenderer.getScene(offer).choices[1];
            await e.executeChoice(choice);
            const cg = e.sceneRenderer.getScene(e.sceneRenderer.currentSceneId);
            const result = { background: cg.background, affinity: e.stateManager.getAffinity(character) };
            await e.renderScene(cg.next);
            return result;
        }, { character, lead, offer, startAffinity });
        expect(accepted.affinity).toBe(startAffinity + 8);
        expect(accepted.background).toContain(`event_temptation_${character.toLowerCase()}`);
        const sceneId = `day4_temptation_${character.toLowerCase()}_freetalk`;
        for (let turn = 1; turn <= 5; turn++) {
            await page.waitForFunction(() => {
                const e = window.gameEngine;
                return !e.dialogueSystem.isCurrentlyTyping() && !e.freeTalkSystem.isProcessingChat;
            });
            await page.evaluate(async ({ turn, lang }) => {
                const e = window.gameEngine;
                e.dialogueSystem.typingSpeed = 0;
                e.uiManager.chatInput.value = lang === 'ko' ? `오늘 있었던 일을 얘기할게. ${turn}` : `Let me tell you about my day. ${turn}`;
                await e.freeTalkSystem.sendChatMessage(id => e.sceneRenderer.getScene(id));
            }, { turn, lang });
            expect(requests).toHaveLength(turn);
            const state = await page.evaluate(character => {
                const e = window.gameEngine;
                return { affinity: e.stateManager.getAffinity(character), turns: e.freeTalkSystem.freeTalkTurns,
                    scene: e.sceneRenderer.currentSceneId, max: e.freeTalkSystem.currentMaxTurns,
                    background: e.uiManager.bgLayer.style.backgroundImage };
            }, character);
            expect(state.affinity).toBe(accepted.affinity);
            expect(state.turns).toBe(turn);
            expect(state.max).toBe(5);
            expect(state.scene).toBe(sceneId);
            expect(state.background).toContain(`event_temptation_${character.toLowerCase()}`);
            const prompt = requests.at(-1).messages.find(message => message.role === 'system').content;
            expect(prompt.split('===CACHE_BOUNDARY===')[1]).toContain('100');
            if (turn === 2) {
                await page.reload();
                await ready();
                expect(await page.evaluate(() => window.gameEngine.freeTalkSystem.freeTalkTurns)).toBe(2);
            }
        }
        expect(new Set(requests.map(request => request.cacheKey)).size).toBe(1);
        await page.waitForFunction(() => !window.gameEngine.freeTalkSystem.isFreeTalking);
        await page.evaluate(() => window.CupidRouteTelemetry.flush());
        const entry = events.find(event => event.eventType === 'freetalk_entered' && event.sceneId === sceneId);
        expect(entry.details.dialogueAffinity).toBe(100);
        expect(entry.details.affinities[character]).toBe(accepted.affinity);
        await page.evaluate(async character => {
            const e = window.gameEngine;
            await e.renderScene(e.sceneRenderer.getScene(e.sceneRenderer.currentSceneId).next);
            await e.renderScene(`wall_${character === 'Seoyeon' ? 'seo' : character.toLowerCase()}_freetalk`);
        }, character);
        const normal = await page.evaluate(() => {
            const e = window.gameEngine;
            return e.freeTalkSystem._getSceneDialoguePolicy(e.sceneRenderer.getScene(e.sceneRenderer.currentSceneId));
        });
        expect(normal.romanticInterlude).toBe(false);
        expect(normal.affinity).toBe(accepted.affinity);
    });
}
