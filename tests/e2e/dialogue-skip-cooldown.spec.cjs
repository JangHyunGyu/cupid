'use strict';
const { test, expect } = require('@playwright/test');

const text = 'This complete line must remain visible after a manual reveal.';
async function boot(page) {
    await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
    await page.goto('/game.html');
    await page.waitForFunction(() => window.gameEngine?.sceneRenderer && !gameEngine._isRendering);
    await page.waitForFunction(() => !gameEngine.dialogueSystem.isCurrentlyTyping());
    await page.evaluate(text => {
        window.qaSkipTime = 1000;
        Object.defineProperty(performance, 'now', { configurable: true, value: () => window.qaSkipTime });
        for (const [id, next] of [['day1_qa_skip_a', 'day1_qa_skip_b'], ['day1_qa_skip_b', 'day1_qa_skip_c'], ['day1_qa_skip_c', null]]) {
            SCENARIO[1][id] = { name: 'Actor', text, next };
        }
        gameEngine.dialogueSystem.typingSpeed = 1000;
    }, text);
}
async function startTyping(page, id = 'day1_qa_skip_a') {
    await page.evaluate(id => { window.qaPendingRender = gameEngine.renderScene(id, { restoring: true }); }, id);
    await page.waitForFunction(() => !gameEngine._isRendering && gameEngine.dialogueSystem.isCurrentlyTyping());
}

for (const width of [1440, 390]) test.describe(`250ms manual reveal guard at ${width}px`, () => {
    test.use({ viewport: { width, height: width === 390 ? 844 : 900 }, hasTouch: width === 390 });
    const activate = locator => width === 390 ? locator.tap() : locator.click();

    test('real click or touch completes text, drops repeated input, then advances at 250ms', async ({ page }, testInfo) => {
        await boot(page);
        await startTyping(page);
        await activate(page.locator('#dialogue-box'));
        await page.waitForFunction(() => !gameEngine.dialogueSystem.isCurrentlyTyping());
        await expect(page.locator('#message')).toHaveText(text);
        await page.evaluate(() => { window.qaSkipTime = 1249; });
        await activate(page.locator('#dialogue-box'));
        await page.evaluate(() => { for (let i = 0; i < 20; i++) document.querySelector('#dialogue-box').click(); });
        expect(await page.evaluate(() => gameEngine.sceneRenderer.currentSceneId)).toBe('day1_qa_skip_a');
        await page.screenshot({ path: testInfo.outputPath('manual-reveal.png'), animations: 'disabled' });
        await page.evaluate(() => { window.qaSkipTime = 1250; });
        expect(await page.evaluate(() => gameEngine.sceneRenderer.currentSceneId)).toBe('day1_qa_skip_a');
        await activate(page.locator('#dialogue-box'));
        await expect.poll(() => page.evaluate(() => gameEngine.sceneRenderer.currentSceneId)).toBe('day1_qa_skip_b');
    });

    test('natural completion and an explicit scene change have no stale cooldown', async ({ page }) => {
        await boot(page);
        await page.evaluate(async () => {
            gameEngine.dialogueSystem.typingSpeed = 1;
            await gameEngine.renderScene('day1_qa_skip_a', { restoring: true });
        });
        await activate(page.locator('#dialogue-box'));
        await expect.poll(() => page.evaluate(() => gameEngine.sceneRenderer.currentSceneId)).toBe('day1_qa_skip_b');
        await page.waitForFunction(() => !gameEngine._isRendering && !gameEngine.dialogueSystem.isCurrentlyTyping());
        await page.evaluate(async () => {
            gameEngine.dialogueSystem.armAdvanceCooldown();
            await gameEngine.renderScene('day1_qa_skip_b', { restoring: true });
        });
        expect(await page.evaluate(() => gameEngine.dialogueSystem.isAdvanceCoolingDown())).toBe(false);
        await activate(page.locator('#dialogue-box'));
        await expect.poll(() => page.evaluate(() => gameEngine.sceneRenderer.currentSceneId)).toBe('day1_qa_skip_c');
    });

    test('a skipped messenger bubble uses the same 250ms protection', async ({ page }) => {
        await boot(page);
        await page.evaluate(async () => {
            await CupidContentLoader.ensureDay(2);
            window.qaPendingRender = gameEngine.renderScene('night2_msg_yuna_specific');
        });
        await expect(page.locator('.messenger-typing-row')).toBeVisible();
        await activate(page.locator('#messenger-panel'));
        await expect(page.locator('.messenger-bubble')).toHaveCount(1);
        await page.evaluate(() => { window.qaSkipTime = 1249; });
        await activate(page.locator('#messenger-panel'));
        expect(await page.evaluate(() => gameEngine.sceneRenderer.currentSceneId)).toBe('night2_msg_yuna_specific');
        await page.evaluate(() => { window.qaSkipTime = 1250; });
        await activate(page.locator('#messenger-panel'));
        await expect.poll(() => page.evaluate(() => gameEngine.sceneRenderer.currentSceneId)).toBe('night2_msg_yuna_specific_2');
    });

    test('ending dialogue retains its existing skip lock', async ({ page }) => {
        await boot(page);
        await page.evaluate(text => { SCENARIO[1].ending_qa_skip = { name: 'Actor', text: text.repeat(4), next: 'day1_qa_skip_b' }; }, text);
        await startTyping(page, 'ending_qa_skip');
        await activate(page.locator('#dialogue-box'));
        expect(await page.evaluate(() => gameEngine.dialogueSystem.isCurrentlyTyping())).toBe(true);
        expect(await page.evaluate(() => gameEngine.dialogueSystem.skipTyping)).toBe(false);
        expect(await page.evaluate(() => gameEngine.sceneRenderer.currentSceneId)).toBe('ending_qa_skip');
    });
});
