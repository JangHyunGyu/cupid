'use strict';
const { test, expect } = require('@playwright/test');

for (const [width, height] of [[320, 568], [430, 932], [932, 430], [768, 1024], [1024, 768], [1440, 900]]) {
    test(`opening portrait and saved expression agree at ${width}x${height}`, async ({ page }, info) => {
        test.setTimeout(120000);
        await page.setViewportSize({ width, height });
        await page.emulateMedia({ reducedMotion: 'reduce' });
        await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1'
            ? route.continue() : route.abort());
        await page.goto('/game.html');
        await page.waitForFunction(() => window.gameEngine?.sceneRenderer && !gameEngine._isRendering);
        await page.evaluate(async () => {
            const game = window.gameEngine;
            game.dialogueSystem.typingSpeed = 0;
            await window.ensureCupidFreeTalkRuntime();
            window.qaOpeningLogs = [];
            window.recordCupidVisibleChat = entry => window.qaOpeningLogs.push(entry);
            await window.CupidContentLoader.ensureDay(3);
        });
        for (const [sceneId, owner, prefix, expression, day] of [
            ['lunch_seo_freetalk', 'Seoyeon', 'seyoun', 'soft_smile', 1],
            ['lunch_yuna_freetalk', 'Yuna', 'yuna', 'soft_smile', 1],
            ['lunch_dain_freetalk', 'Dain', 'dain', 'smile', 1],
            ['after_homeroom_freetalk', 'Teacher', 'teacher', 'soft_smile', 1],
            ['after_nurse_freetalk', 'Nurse', 'nurse', 'soft_smile', 1],
            ['haeun_freetalk', 'Haeun', 'haeun', 'worried', 3]
        ]) {
            const result = await page.evaluate(async ({ sceneId, owner, prefix, day }) => {
                const game = window.gameEngine;
                game.stateManager.currentDay = day;
                // A prior AI reply stores a logical asset on the reused portrait element.
                await game.sceneRenderer.updateCharacters({ character: `assets/images/characters/${prefix}_normal.png` }, game.sceneRenderer.currentSceneId);
                game.freeTalkSystem.applyExpression('normal', { name: owner });
                await game.renderScene(sceneId);
                const portrait = document.querySelector('#char-center img');
                return { src: portrait.src, log: window.qaOpeningLogs.find(row => row.logSource === 'opening' && row.sessionId === sceneId) };
            }, { sceneId, owner, prefix, day });
            expect(result.src).toContain(`${prefix}_${expression}`);
            expect(result.log.expression).toBe(expression);
            expect(result.log.avatarAsset).toBe(`assets/images/characters/${prefix}_${expression}.webp`);
            expect(result.log.expressionVariant).toBe('01');
            await expect(page.locator('#chat-input')).toBeEnabled();
            for (const selector of ['#chat-input', '#chat-send']) {
                await expect(page.locator(selector)).toBeInViewport();
            }
            expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
            await page.screenshot({ path: info.outputPath(`${sceneId}.png`), animations: 'disabled' });
        }
    });
}
