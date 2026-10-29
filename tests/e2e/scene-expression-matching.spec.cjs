'use strict';
const { test, expect } = require('@playwright/test');
const { isMediaFixtureRequest } = require('./helpers/media-fixture.cjs');
for (const lang of ['ko', 'en']) for (const width of [390, 1440]) {
    test(`${lang}/${width}: scene and fixed opening portraits match their emotional context`, async ({ page }, testInfo) => {
        test.setTimeout(180000);
        await page.setViewportSize({ width, height: 900 });
        await page.emulateMedia({ reducedMotion: 'reduce' });
        await page.route('**/*', route => route.request().method() !== 'POST' || isMediaFixtureRequest(route.request())
            ? route.continue() : route.fulfill({ json: { ok: true } }));
        await page.goto(lang === 'ko' ? '/game.html' : '/game-en.html');
        await page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
        for (const [id, day, expected] of [
            ['wall_dain_cry_2', 4, ['dain_cry']],
            ['after5_farewell_dain_5', 5, ['dain_sad']],
            ['day5_seo_ending_freetalk_late_good', 5, ['seyoun_soft_smile']],
            ['morning5_counteroffer_group_talk', 5, ['seyoun_sad', 'dain_worried']]
        ]) {
            await page.evaluate(async ({ id, day }) => {
                const game = window.gameEngine;
                game.dialogueSystem.typingSpeed = 0;
                game.stateManager.currentDay = day;
                game.stateManager.setFlag('route_seoyeon', true);
                game.stateManager.setFlag('day4_took_dain_counteroffer', true);
                await game.renderScene(id);
            }, { id, day });
            const portraits = page.locator('#character-layer img');
            await expect(portraits).toHaveCount(expected.length);
            for (let index = 0; index < expected.length; index++) {
                await expect.poll(() => portraits.nth(index).evaluate((img, expectedAsset) => img.complete && img.naturalWidth > 0 && decodeURIComponent(img.currentSrc).includes(expectedAsset), expected[index]).catch(() => false)).toBe(true);
            }
            if (id.includes('freetalk') || id.includes('group_talk')) {
                await expect(page.locator('#chat-input')).toBeEnabled();
                expect(await page.evaluate(() => window.gameEngine.freeTalkSystem.freeTalkTurns)).toBe(0);
            }
            expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
            await page.screenshot({ path: testInfo.outputPath(`${id}.png`) });
        }
    });
}
