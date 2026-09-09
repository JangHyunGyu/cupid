const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'parallel' });

for (const lang of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt']) {
  for (const bothVisits of [false, true]) {
    test(`${lang}/${bothVisits ? 'both' : 'nurse'}: visits continue through check-in, main-route rivalry, and next-day follow-up`, async ({ page }) => {
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
        const checkin = await page.evaluate(async bothVisits => {
            const e = window.gameEngine;
            e.dialogueSystem.typingSpeed = 0;
            e.stateManager.currentDay = 4;
            e.stateManager.flags = { route_seoyeon: true, nurse_day4: true, nurse_route_unlocked: true,
                homeroom_day4: bothVisits, homeroom_route_unlocked: bothVisits, day4_confession_accepted: true };
            for (const [id, affinity] of Object.entries({ Seoyeon: 71, Yuna: -4, Dain: -5, Teacher: 0, Nurse: 16 })) {
                e.stateManager.stats[id].affinity = affinity;
            }
            await e.renderScene('day4_night_branch');
            return { id: e.sceneRenderer.currentSceneId, text: e.sceneRenderer.getScene(e.sceneRenderer.currentSceneId).text,
                completed: Boolean(e.stateManager.getFlag('day4_staff_checkin_completed')) };
        }, bothVisits);
        expect(checkin.id).toBe(bothVisits ? 'day4_student_both_checkin' : 'day4_student_nurse_checkin');
        expect(checkin.text.trim()).not.toBe('');
        expect(checkin.completed).toBe(false);
        await page.reload();
        await ready();
        expect(await page.evaluate(() => window.gameEngine.sceneRenderer.currentSceneId)).toBe(checkin.id);
        const offer = await page.evaluate(async () => {
            const e = window.gameEngine;
            e.dialogueSystem.typingSpeed = 0;
            const visited = [];
            for (let step = 0; step < 30; step++) {
                const id = e.sceneRenderer.currentSceneId;
                const scene = e.sceneRenderer.getScene(id);
                visited.push(id);
                if (scene.choices?.some(choice => choice.setFlags?.includes('day4_counteroffer_penalty_deferred'))) return {
                    id, visited, completed: e.stateManager.getFlag('day4_staff_checkin_completed'),
                    mainAffinity: e.stateManager.getAffinity('Seoyeon'), nurseAffinity: e.stateManager.getAffinity('Nurse')
                };
                if (scene.choices) throw new Error(`Unexpected choice before the rival offer: ${id}`);
                await e.renderScene(e._resolveNextScene(scene));
            }
            throw new Error('The rival offer was not reached');
        });
        expect(offer.id).toBe('wall_seo_yuna_tempt_2');
        expect(offer.completed).toBe(true);
        expect(offer.mainAffinity).toBe(71);
        expect(offer.nurseAffinity).toBe(16);
        expect(offer.visited.indexOf('day4_student_checkin_return_home')).toBeLessThan(offer.visited.indexOf('wall_seo_1'));
        expect(offer.visited).not.toContain('day4_student_night_branch');
        await page.reload();
        await ready();
        expect(await page.evaluate(() => window.gameEngine.sceneRenderer.currentSceneId)).toBe(offer.id);
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
            await e.renderScene(e._resolveNextScene(e.sceneRenderer.getScene(e.sceneRenderer.currentSceneId)));
            e.freeTalkSystem.endFreeTalk();
            await e.renderScene(e._resolveNextScene(e.sceneRenderer.getScene(e.sceneRenderer.currentSceneId)));
            const visited = [];
            for (let step = 0; step < 80; step++) {
                const id = e.sceneRenderer.currentSceneId;
                visited.push(id);
                if (id === 'morning5_counteroffer_group_talk') {
                    await window.CupidRouteTelemetry.flush();
                    return { visited, participants: e.freeTalkSystem.groupParticipants.map(participant => participant.id) };
                }
                const scene = e.sceneRenderer.getScene(id);
                if (scene.choices) await e.executeChoice(scene.choices[0]);
                else await e.renderScene(e._resolveNextScene(scene));
            }
            throw new Error('The confrontation was not reached');
        });
        expect(confrontation.participants).toEqual(['Seoyeon', 'Yuna']);
        expect(confrontation.visited).toContain('night_nurse_msg_1');
        expect(confrontation.visited.includes('night_homeroom_msg_1')).toBe(bothVisits);
        await expect.poll(() => events.some(event => event.eventType === 'offer_choice')).toBe(true);
        expect(events.find(event => event.eventType === 'offer_choice').route).toBe('Seoyeon');
        await page.reload();
        await ready();
        expect(await page.evaluate(() => window.gameEngine.freeTalkSystem.groupParticipants.map(participant => participant.id))).toEqual(['Seoyeon', 'Yuna']);
        const followup = await page.evaluate(async () => {
            const e = window.gameEngine;
            e.dialogueSystem.typingSpeed = 0;
            e.freeTalkSystem.endFreeTalk();
            await e.renderScene(e._resolveNextScene(e.sceneRenderer.getScene(e.sceneRenderer.currentSceneId)));
            for (let step = 0; step < 30; step++) {
                const id = e.sceneRenderer.currentSceneId;
                if (id === 'hidden_nurse_d5_1') return { id, affinity: e.stateManager.getAffinity('Nurse'), completed: e.stateManager.getFlag('day4_staff_checkin_completed') };
                const scene = e.sceneRenderer.getScene(id);
                if (scene.choices) await e.executeChoice(scene.choices[0]);
                else await e.renderScene(e._resolveNextScene(scene));
            }
            throw new Error('The nurse visit follow-up was not reached');
        });
        expect(followup).toEqual({ id: 'hidden_nurse_d5_1', affinity: 16, completed: true });
    });
  }
}
