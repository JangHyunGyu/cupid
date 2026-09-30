'use strict';
const { test, expect } = require('@playwright/test');

test('unsupported browser notice is usable at phone, tablet and desktop sizes in every locale', async ({ page }) => {
    const failures = [];
    page.on('pageerror', error => failures.push(error.message));
    await page.addInitScript(() => { Object.hasOwn = undefined; });
    await page.route('**/*', route => {
        const url = new URL(route.request().url());
        return url.hostname === '127.0.0.1' ? route.continue() : route.abort();
    });
    for (const [width, height] of [[320,568], [430,932], [844,390], [768,1024], [1024,768], [1440,900], [320,240]]) {
        await page.setViewportSize({ width, height });
        for (const lang of ['', '-en', '-ja', '-es', '-fr', '-de', '-pt', '-zh']) {
            await page.goto(`/index${lang}.html`);
            const notice = page.locator('#cupid-browser-update');
            await expect(notice).toBeVisible();
            await expect(notice).toBeFocused();
            expect(await page.evaluate(() => window.gameScriptsLoaded)).toBeUndefined();
            const sizing = await notice.evaluate(el => ({ width: el.clientWidth, scrollWidth: el.scrollWidth, height: el.clientHeight, scrollHeight: el.scrollHeight }));
            expect(sizing.scrollWidth).toBeLessThanOrEqual(sizing.width + 1);
            expect(sizing.height).toBe(height);
            await page.keyboard.press('Tab');
            expect(await page.evaluate(() => document.activeElement.id)).not.toBe('start-btn');
        }
    }
    for (const entry of ['/game.html', '/gallery.html']) {
        await page.goto(entry);
        await expect(page.locator('#cupid-browser-update')).toBeVisible();
        expect(await page.evaluate(() => typeof window.GameEngine)).toBe('undefined');
        expect(await page.evaluate(() => typeof window.Gallery)).toBe('undefined');
    }
    expect(failures).toEqual([]);
});
