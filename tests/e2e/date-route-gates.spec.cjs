const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'parallel' });
const characters = [['Seoyeon', 'seo'], ['Yuna', 'yuna'], ['Dain', 'dain']];

async function openGame(page, lang, lightweight = false) {
    await page.route('**/*', route => {
        const request = route.request();
        if (request.method() === 'POST') return route.fulfill({ status: 200, json: { ok: true } });
        // Logic cases traverse many scenes; layout cases below retain the real art.
        if (lightweight && request.resourceType() === 'image') return route.fulfill({
            contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>'
        });
        if (lightweight && request.resourceType() === 'media') return route.abort();
        return route.continue();
    });
    await page.goto(lang === 'ko' ? '/game.html' : `/game-${lang}.html`);
    await ready(page);
}

async function ready(page) {
    await page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
}

for (const lang of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt']) {
    test(`${lang}: date thresholds, refusal flags, and save continuation`, async ({ page }) => {
        test.setTimeout(120_000);
        await openGame(page, lang, true);
        for (const [character, short] of characters) {
            const results = await page.evaluate(async ({ character, short }) => {
                const e = window.gameEngine;
                e.dialogueSystem.typingSpeed = 0;
                const route = `route_${character.toLowerCase()}`;
                const promise = `accepted_${character.toLowerCase()}_date`;
                const result = {};
                async function render(id, affinity, flags = {}) {
                    e.stateManager.flags = { ...flags };
                    e.stateManager.currentDay = id.startsWith('date_') || id === 'day4_date_branch' ? 4 : 3;
                    for (const id of ['Seoyeon', 'Yuna', 'Dain']) e.stateManager.stats[id].affinity = id === character ? affinity : 50;
                    await e.renderScene(id);
                    return e.sceneRenderer.currentSceneId;
                }
                result.inviteLow = await render(`morning3_date_${short}_1`, 19);
                result.inviteAllowed = await render(`morning3_date_${short}_1`, 20);
                result.autoLow = await render(`after3_auto_${short}`, 29, { [promise]: true });
                result.autoFlags = { route: Boolean(e.stateManager.getFlag(route)), promise: Boolean(e.stateManager.getFlag(promise)) };
                for (const chooser of ['after3_choice', 'after3_multi_choice']) {
                    await render(chooser, 29, { [promise]: true, day3_has_multiple_dates: chooser === 'after3_multi_choice' });
                    const scene = e.sceneRenderer.getScene(chooser);
                    await e.executeChoice(scene.choices.find(choice => choice.setFlags?.includes(route)));
                    result[chooser] = {
                        scene: e.sceneRenderer.currentSceneId,
                        route: Boolean(e.stateManager.getFlag(route)), promise: Boolean(e.stateManager.getFlag(promise)),
                        otherAffinities: ['Seoyeon', 'Yuna', 'Dain'].filter(id => id !== character).map(id => e.stateManager.getAffinity(id)),
                        text: e.sceneRenderer.getScene(e.sceneRenderer.currentSceneId).text
                    };
                }
                result.autoAllowed = await render(`after3_auto_${short}`, 30, { [promise]: true });
                result.allowedFlag = e.stateManager.getFlag(route);
                result.dateLow = await render('day4_date_branch', 29, { [route]: true, [promise]: true });
                result.waited = e.stateManager.getFlag('day4_waited');
                result.dateAllowed = await render('day4_date_branch', 30, { [route]: true, [promise]: true });
                // Seed a pre-update save at the first date scene; the next tier must recheck live affinity.
                e.stateManager.stats[character].affinity = 29;
                e.saveGame();
                return result;
            }, { character, short });
            expect(results.inviteLow).toBe(`morning3_date_${short}_low`);
            expect(results.inviteAllowed).toBe(`morning3_date_${short}_1`);
            expect(results.autoLow).toBe(`after3_${short}_low_1`);
            expect(results.autoFlags).toEqual({ route: false, promise: false });
            for (const chooser of ['after3_choice', 'after3_multi_choice']) {
                expect(results[chooser]).toMatchObject({ scene: `after3_${short}_low_1`, route: false, promise: false, otherAffinities: [50, 50] });
                expect(results[chooser].text.length).toBeGreaterThan(10);
            }
            expect(results.autoAllowed).toBe(`after3_auto_${short}`);
            expect(results.allowedFlag).toBe(true);
            expect(results.dateLow).toBe(`date_${short}_low`);
            expect(results.waited).toBe(true);
            expect(results.dateAllowed).toBe(`date_${short}_1`);
            await page.reload();
            await ready(page);
            const restored = await page.evaluate(async () => {
                const e = window.gameEngine;
                e.dialogueSystem.typingSpeed = 0;
                const saved = e.sceneRenderer.currentSceneId;
                for (let step = 0; step < 3 && !e.sceneRenderer.currentSceneId.endsWith('_low'); step++) {
                    await e.renderScene(e._resolveNextScene(e.sceneRenderer.getScene(e.sceneRenderer.currentSceneId)));
                }
                return { saved, scene: e.sceneRenderer.currentSceneId };
            });
            expect(restored.saved).toBe(`date_${short}_1`);
            expect(restored.scene).toBe(`date_${short}_low`);
        }
    });
}

for (const [width, height, lang] of [
    [320, 568, 'ko'], [430, 932, 'ko'], [568, 320, 'ko'], [932, 430, 'ko'],
    [768, 1024, 'ko'], [1024, 768, 'ko'], [1440, 900, 'ko'], [390, 664, 'ko'],
    [320, 568, 'de'], [568, 320, 'fr']
]) {
    test(`${lang}/${width}x${height}: immersive route choices stay usable`, async ({ page }, testInfo) => {
        await page.setViewportSize({ width, height });
        await page.emulateMedia({ reducedMotion: 'reduce' });
        await openGame(page, lang);
        await page.evaluate(async () => {
            const e = window.gameEngine;
            e.dialogueSystem.typingSpeed = 0;
            e.stateManager.currentDay = 3;
            e.stateManager.flags = {};
            await e.renderScene('after3_choice');
        });
        await expect(page.locator('#message')).not.toContainText('30');
        await page.locator('#dialogue-box').click();
        const choices = page.locator('#choice-container button');
        await expect(choices).toHaveCount(4);
        for (const choice of await choices.all()) {
            await expect(choice).toBeVisible();
            await expect(choice).toHaveCSS('opacity', '1');
            await expect(choice).toHaveClass(/choice-ready/);
            const box = await choice.boundingBox();
            expect(box.x).toBeGreaterThanOrEqual(0);
            expect(box.y).toBeGreaterThanOrEqual(0);
            expect(box.x + box.width).toBeLessThanOrEqual(width + 1);
            expect(box.y + box.height).toBeLessThanOrEqual(height + 1);
            expect(box.height).toBeGreaterThanOrEqual(44);
        }
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
        await page.screenshot({ path: testInfo.outputPath('date-route-choice.png') });
        const homeText = require(`../../assets/js/i18n/${lang}/day3_3_afterschool.json`).after3_choice.choices[3];
        await page.getByRole('button', { name: homeText, exact: true }).focus();
        await page.keyboard.press('Enter');
        await expect.poll(() => page.evaluate(() => window.gameEngine.sceneRenderer.currentSceneId)).toBe('after3_walk_home');
    });
}
