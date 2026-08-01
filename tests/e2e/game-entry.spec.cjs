'use strict';

const { expect, test } = require('@playwright/test');

async function waitForRuntime(page) {
    try {
        await page.waitForFunction(() => window.gameScriptsLoaded === true, null, { timeout: 15_000 });
    } catch (error) {
        const state = await page.evaluate(() => ({
            href: location.href,
            title: document.title,
            body: document.body?.innerText?.slice(0, 200) || '',
            loaded: window.gameScriptsLoaded,
            lastError: window.__cupidLastLoadError || null
        }));
        throw new Error(`game runtime did not load: ${JSON.stringify(state)}; ${error.message}`);
    }
}

for (const pageName of ['index.html', 'index-en.html', 'game.html', 'game-en.html']) {
    test(`${pageName} loads the complete game runtime`, async ({ page }) => {
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        const response = await page.goto(`/${pageName}`, { waitUntil: 'domcontentloaded' });
        expect(response?.status()).toBe(200);
        await waitForRuntime(page);
        if (pageName.startsWith('index')) {
            await expect(page.locator('#start-btn')).toBeEnabled();
        } else {
            await expect(page.locator('#game-container')).toHaveCount(1);
        }
        expect(errors).toEqual([]);
    });
}

test('new game reaches the name input scene without changing UI contracts', async ({ page }) => {
    await page.goto('/index.html');
    await waitForRuntime(page);
    await page.locator('#start-btn').click();
    await expect(page.locator('#game-container')).toBeVisible();
    await page.waitForFunction(() => window.gameEngine?.dialogueSystem);
    await page.evaluate(() => { window.gameEngine.dialogueSystem.typingSpeed = 0; });

    for (let step = 0; step < 40; step += 1) {
        if (await page.locator('#name-input-container').isVisible()) break;
        const readyChoice = page.locator('.choice-btn.choice-ready').first();
        if (await readyChoice.isVisible()) await readyChoice.click();
        else if (await page.locator('#dialogue-box').isVisible()) await page.locator('#dialogue-box').click();
        await page.waitForTimeout(50);
    }
    await expect(page.locator('#name-input-container')).toBeVisible();
});

test('gallery runtime includes the shared free-talk core', async ({ page }) => {
    await page.goto('/gallery.html');
    await page.waitForFunction(() => window.GalleryFreeTalk && window.CupidFreeTalkCore);
    await expect(page.locator('#gallery-freetalk-overlay')).toHaveCount(1);
});
