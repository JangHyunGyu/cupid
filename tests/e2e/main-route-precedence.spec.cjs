const { test, expect } = require('@playwright/test');

for (const lang of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt']) {
    test(`${lang}: a staff visit preserves the main route through acceptance, reload, and confrontation`, async ({ page }) => {
        test.setTimeout(90_000);
        const events = [];
        await page.route('**/*', route => {
            if (route.request().method() !== 'POST') return route.continue();
            const body = route.request().postDataJSON();
            events.push(...(body?.events || []));
            return route.fulfill({ status: 200, json: { ok: true, eventIds: (body?.events || []).map(event => event.eventId) } });
        });
        await page.goto(lang === 'ko' ? '/game.html' : `/game-${lang}.html`);
        const ready = () => page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
        await ready();
        const offerId = await page.evaluate(async () => {
            const e = window.gameEngine;
            e.dialogueSystem.typingSpeed = 0;
            e.stateManager.currentDay = 4;
            e.stateManager.flags = { route_seoyeon: true, nurse_day4: true, day4_confession_accepted: true };
            for (const [id, affinity] of Object.entries({ Seoyeon: 71, Yuna: -4, Dain: -5, Teacher: 0, Nurse: 16 })) {
                e.stateManager.stats[id].affinity = affinity;
            }
            await e.renderScene('day4_night_branch');
            for (let step = 0; step < 30; step++) {
                const id = e.sceneRenderer.currentSceneId;
                const scene = e.sceneRenderer.getScene(id);
                if (scene.choices?.some(choice => choice.setFlags?.includes('day4_counteroffer_penalty_deferred'))) return id;
                if (scene.choices) throw new Error(`Unexpected choice before the rival offer: ${id}`);
                await e.renderScene(e._resolveNextScene(scene));
            }
            throw new Error('The rival offer was not reached');
        });
        expect(offerId).toBe('wall_seo_yuna_tempt_2');
        await page.reload();
        await ready();
        expect(await page.evaluate(() => window.gameEngine.sceneRenderer.currentSceneId)).toBe(offerId);
        const accepted = await page.evaluate(async () => {
            const e = window.gameEngine;
            e.dialogueSystem.typingSpeed = 0;
            const scene = e.sceneRenderer.getScene(e.sceneRenderer.currentSceneId);
            await e.executeChoice(scene.choices.find(choice => choice.setFlags?.includes('day4_counteroffer_penalty_deferred')));
            return {
                scene: e.sceneRenderer.currentSceneId,
                affinities: Object.fromEntries(['Seoyeon', 'Yuna', 'Dain', 'Teacher', 'Nurse'].map(id => [id, e.stateManager.getAffinity(id)])),
                nurseTarget: Boolean(e.stateManager.getFlag('day4_counteroffer_target_nurse')),
                nurseVisit: e.stateManager.getFlag('nurse_day4')
            };
        });
        expect(accepted.scene).toBe('wall_seo_yuna_tempt_accept');
        expect(accepted.affinities).toEqual({ Seoyeon: 61, Yuna: 26, Dain: -5, Teacher: 0, Nurse: 16 });
        expect(accepted.nurseTarget).toBe(false);
        expect(accepted.nurseVisit).toBe(true);
        const confrontation = await page.evaluate(async () => {
            const e = window.gameEngine;
            await e.renderScene('morning5_start');
            for (let step = 0; step < 45; step++) {
                const id = e.sceneRenderer.currentSceneId;
                if (id === 'morning5_counteroffer_group_talk') {
                    await window.CupidRouteTelemetry.flush();
                    return e.freeTalkSystem.groupParticipants.map(participant => participant.id);
                }
                const scene = e.sceneRenderer.getScene(id);
                if (scene.choices) await e.executeChoice(scene.choices[0]);
                else await e.renderScene(e._resolveNextScene(scene));
            }
            throw new Error('The confrontation was not reached');
        });
        expect(confrontation).toEqual(['Seoyeon', 'Yuna']);
        await expect.poll(() => events.some(event => event.eventType === 'offer_choice')).toBe(true);
        expect(events.find(event => event.eventType === 'offer_choice').route).toBe('Seoyeon');
        await page.reload();
        await ready();
        expect(await page.evaluate(() => window.gameEngine.freeTalkSystem.groupParticipants.map(participant => participant.id))).toEqual(['Seoyeon', 'Yuna']);
    });
}
