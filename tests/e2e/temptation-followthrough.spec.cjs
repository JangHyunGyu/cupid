const { test, expect } = require('@playwright/test');

for (const lang of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt']) {
    test(`${lang}: earlier incidents retain day four and cannot interrupt accepted temptation`, async ({ page }) => {
        test.setTimeout(90_000);
        await page.route('**/*', route => {
            const request = route.request();
            if (request.method() !== 'POST') return route.continue();
            const body = request.postDataJSON();
            return route.fulfill({ status: 200, json: { ok: true, eventIds: (body?.events || []).map(event => event.eventId) } });
        });
        await page.goto(lang === 'ko' ? '/game.html' : `/game-${lang}.html`);
        const ready = () => page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
        await ready();
        const meeting = await page.evaluate(async () => {
            const e = window.gameEngine;
            e.dialogueSystem.typingSpeed = 0;
            e.stateManager.flags = { route_seoyeon: true, day3_caught_multiple_dates: true, harem_seed: true };
            e.stateManager.stats.Seoyeon.affinity = 65;
            await e.renderScene('morning4_end');
            const visited = [];
            for (let i = 0; i < 10; i++) {
                const id = e.sceneRenderer.currentSceneId;
                visited.push(id);
                if (id.startsWith('date_seo_')) return { id, visited };
                await e.renderScene(e._resolveNextScene(e.sceneRenderer.getScene(id)));
            }
            return { id: e.sceneRenderer.currentSceneId, visited };
        });
        expect(meeting.id).toMatch(/^date_seo_/);
        expect(meeting.visited).toContain('day4_caught_fallout_4');
        expect(meeting.visited).not.toContain('morning5_start');

        const accepted = await page.evaluate(async () => {
            const e = window.gameEngine;
            e.stateManager.flags.day4_waited = true;
            e.stateManager.stats.Dain.affinity = -10;
            await e.renderScene('wall_seo_glimpse_2');
            await e.executeChoice(e.sceneRenderer.getScene('wall_seo_glimpse_2').choices[1]);
            const cg = e.sceneRenderer.getScene(e.sceneRenderer.currentSceneId);
            await e.renderScene(cg.next);
            return { background: cg.background, scene: e.sceneRenderer.currentSceneId };
        });
        expect(accepted.background).toContain('event_temptation_dain');
        expect(accepted.scene).toBe('day4_temptation_dain_freetalk');
        await page.reload();
        await ready();
        expect(await page.evaluate(() => window.gameEngine.sceneRenderer.currentSceneId)).toBe(accepted.scene);

        const confrontation = await page.evaluate(async () => {
            const e = window.gameEngine;
            e.dialogueSystem.typingSpeed = 0;
            e.freeTalkSystem.endFreeTalk();
            await e.renderScene(e._resolveNextScene(e.sceneRenderer.getScene(e.sceneRenderer.currentSceneId)));
            const visited = [];
            for (let i = 0; i < 45; i++) {
                const id = e.sceneRenderer.currentSceneId;
                visited.push(id);
                if (id === 'morning5_counteroffer_group_talk') return {
                    id, visited, maxTurns: e.freeTalkSystem.currentMaxTurns,
                    participants: e.freeTalkSystem.groupParticipants.map(p => p.id),
                    lied: e.stateManager.getFlag('day5_lied_about_counteroffer'),
                    priorCaught: e.stateManager.getFlag('day3_caught_multiple_dates'),
                    priorShared: e.stateManager.getFlag('harem_seed')
                };
                const scene = e.sceneRenderer.getScene(id);
                if (scene.choices) await e.executeChoice(scene.choices[3] || scene.choices[0]);
                else await e.renderScene(e._resolveNextScene(scene));
            }
            return { id: e.sceneRenderer.currentSceneId, visited };
        });
        expect(confrontation.id).toBe('morning5_counteroffer_group_talk');
        expect(confrontation.visited).toContain('morning5_counteroffer_gather');
        expect(confrontation.maxTurns).toBe(3);
        expect(confrontation.participants).toEqual(['Seoyeon', 'Dain']);
        expect(confrontation.lied).toBe(true);
        expect(confrontation.priorCaught && confrontation.priorShared).toBe(true);
        await page.reload();
        await ready();
        expect(await page.evaluate(() => window.gameEngine.sceneRenderer.currentSceneId)).toBe('morning5_counteroffer_group_talk');
    });
}
