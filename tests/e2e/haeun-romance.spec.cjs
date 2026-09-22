const { test, expect } = require('@playwright/test');
const fs = require('node:fs');
const output = 'D:/workspace/_workspace/cupid-affinity-audit-20260922';
const ready = page => page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
for (const [suffix, score] of [['', 60], ['-en', 45]]) {
    test(`Haeun ${suffix || 'ko'}: twenty personal turns, save/load and gallery ending unlock`, async ({ page }) => {
        test.setTimeout(120000);
        const errors = [], requests = [];
        page.on('pageerror', e => errors.push(e.message));
        await page.setViewportSize(suffix ? { width: 390, height: 844 } : { width: 1280, height: 800 });
        await page.route('**/*', route => {
            if (route.request().method() !== 'POST') return route.continue();
            const body = route.request().postDataJSON() || {};
            if (new URL(route.request().url()).pathname === '/api/ai') {
                requests.push(body);
                return route.fulfill({ json: { choices: [{ message: { content: JSON.stringify({ segments: [{ type: 'dialogue', text: suffix ? 'I wanted to hear that from you.' : '그 얘기는 선배한테 듣고 싶었어요.' }], expression: 'relieved', affinity: 3, forcedSexualViolation: 'none' }) } }] } });
            }
            return route.fulfill({ json: { ok: true, eventIds: (body.events || []).map(e => e.eventId) } });
        });
        await page.goto(`/game${suffix}.html`); await ready(page);
        await page.evaluate(async score => {
            const e = window.gameEngine; e.dialogueSystem.typingSpeed = 0;
            e.stateManager.currentDay = 5;
            e.stateManager.stats.Haeun.affinity = score;
            e.stateManager.stats.Yuna.affinity = 80;
            e.stateManager.flags = { route_yuna: true, day4_confession_accepted: true, isDating_Yuna: true, messaged_day5_haeun_personal: true };
            await e.renderScene('after5_start');
        }, score);
        expect(await page.evaluate(() => window.gameEngine.sceneRenderer.currentSceneId)).toBe('day5_haeun_offer_yuna');
        await page.evaluate(async () => { const e=window.gameEngine; await e.renderScene('day5_haeun_route_choice'); });
        fs.mkdirSync(output, { recursive: true });
        await page.screenshot({ path: `${output}/haeun-choice${suffix || '-ko'}.png` });
        await page.evaluate(async () => {
            const e=window.gameEngine;
            await e.executeChoice(e.sceneRenderer.getScene('day5_haeun_route_choice').choices[0]);
            await e.renderScene(e.sceneRenderer.getScene(e.sceneRenderer.currentSceneId).next);
        });
        expect(await page.evaluate(() => window.gameEngine.stateManager.getAffinity('Yuna'))).toBe(70);
        for (let turn=0; turn<20; turn++) {
            if (turn===10) await page.evaluate(async () => { const e=window.gameEngine; await e.renderScene('day5_haeun_walk'); await e.renderScene('day5_haeun_private_2'); });
            await page.waitForFunction(() => !window.gameEngine.dialogueSystem.isCurrentlyTyping());
            await page.evaluate(async () => {
                const e=window.gameEngine; e.dialogueSystem.typingSpeed=0;
                e.uiManager.chatInput.value='I would like to hear what you think. Take your time.';
                await e.freeTalkSystem.sendChatMessage(id => e.sceneRenderer.getScene(id));
            });
            if (turn===4) {
                await page.reload(); await ready(page);
                expect(await page.evaluate(() => window.gameEngine.freeTalkSystem.freeTalkTurns)).toBe(5);
            }
        }
        expect(requests).toHaveLength(20);
        expect(await page.evaluate(() => window.gameEngine.stateManager.getAffinity('Haeun'))).toBe(100);
        await page.evaluate(async () => { const e=window.gameEngine; await e.renderScene('day5_haeun_romance_check'); });
        expect(await page.evaluate(() => window.gameEngine.sceneRenderer.currentSceneId)).toBe('day5_ending_haeun');
        await page.screenshot({ path: `${output}/haeun-ending${suffix || '-ko'}.png` });
        await page.evaluate(async () => { const e=window.gameEngine; await e.renderScene('day5_ending_haeun_epilogue'); await e.renderScene('day5_credits'); });
        const unlock = await page.evaluate(() => JSON.parse(window.CupidStorage.getItem('cupid_gallery')));
        expect(unlock.characters.haeun.perfectEndingCleared).toBe(true);
        expect(unlock.endings.perfect_haeun).toBeTruthy();
        await page.goto(`/gallery${suffix}.html`);
        await page.waitForFunction(() => window.gallery?.freeTalk && window.galleryProgressInstance);
        expect(await page.evaluate(() => window.galleryProgressInstance.isFreeTalkUnlocked('haeun'))).toBe(true);
        await expect(page.locator('[data-char-id="haeun"]')).toBeVisible();
        await page.screenshot({ path: `${output}/haeun-gallery${suffix || '-ko'}.png` });
        await page.evaluate(() => window.gallery.freeTalk.open('haeun'));
        expect(await page.evaluate(() => window.gallery.freeTalk.currentCharId)).toBe('haeun');
        expect(errors).toEqual([]);
    });
}
test('Haeun selected at 99 without enough successful dialogue resumes the original route', async ({ page }) => {
    await page.route('**/*', r => r.request().method()==='POST' ? r.fulfill({json:{ok:true}}) : r.continue());
    await page.goto('/game-en.html'); await ready(page);
    const result = await page.evaluate(async () => {
        const e=window.gameEngine; e.dialogueSystem.typingSpeed=0;e.stateManager.currentDay=5;
        e.stateManager.stats.Haeun.affinity=99;
        e.stateManager.flags={haeun_route_selected:true,route_yuna:true,day4_confession_accepted:true};
        await e.renderScene('day5_haeun_romance_check');
        const scene=e.sceneRenderer.currentSceneId;
        await e.renderScene(e.sceneRenderer.getScene(scene).next);
        return { scene, next:e.sceneRenderer.currentSceneId, original:e.stateManager.getFlag('route_yuna'), selected:e.stateManager.getFlag('haeun_route_selected'), dating:e.stateManager.getFlag('isDating_Haeun') };
    });
    expect(result.scene).toBe('day5_haeun_fallback');
    expect(result.original).toBe(true); expect(result.selected).toBe(false); expect(result.dating).toBeFalsy();
    expect(result.next).not.toContain('haeun');
});
