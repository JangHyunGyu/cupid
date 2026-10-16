'use strict';
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.route(/^https?:\/\//, route => {
        const host = new URL(route.request().url()).hostname;
        return host === '127.0.0.1' || host === 'localhost' ? route.fallback() : route.abort();
    });
});

for (const lang of ['ko', 'en', 'es', 'ja', 'fr', 'de', 'pt', 'zh']) {
    test(`${lang}: translation requests contain only the selected locale and deduplicate days`, async ({ page }) => {
        const requests = [];
        page.on('request', request => { if (/\/i18n\/[^/]+\/day.*\.json/.test(request.url())) requests.push(request.url()); });
        await page.goto(`/game${lang === 'ko' ? '' : '-' + lang}.html`);
        await page.waitForFunction(() => !!window.gameEngine);
        expect(requests).toHaveLength(4);
        await page.evaluate(() => Promise.all([CupidI18nLoader.ensureDay(2), CupidI18nLoader.ensureDay(2)]));
        expect(requests).toHaveLength(8);
        expect(requests.every(url => new URL(url).pathname.includes(`/i18n/${lang}/`))).toBe(true);
        expect(new Set(requests.map(url => new URL(url).searchParams.get('v'))).size).toBe(1);
        expect(new URL(requests[0]).searchParams.get('v')).toBe(await page.evaluate(() => window.ASSET_VERSION));
    });
}

test('gallery recovers from two failed dependency requests after DOMContentLoaded without refreshing', async ({ page }) => {
    let attempts = 0, navigations = 0;
    page.on('framenavigated', frame => { if (frame === page.mainFrame()) navigations++; });
    await page.addInitScript(() => document.addEventListener('DOMContentLoaded', () => { window.__domReadySeen = true; }));
    await page.route('**/assets/js/gallery-ui-core.js?*', async route => {
        if (++attempts <= 2) return route.abort('failed');
        await new Promise(resolve => setTimeout(resolve, 100));
        return route.continue();
    });
    await page.goto('/gallery-ja.html');
    await page.waitForFunction(() => window.galleryScriptsLoaded === true);
    expect(attempts).toBe(3);
    expect(navigations).toBe(1);
    expect(await page.evaluate(() => window.__domReadySeen && !!window.gallery.ui && !!window.gallery.freeTalk)).toBe(true);
    await expect(page.locator('[data-cupid-gallery-load-error]')).toHaveCount(0);
    await page.locator('.tab-btn[data-tab="tips"]').click();
    await expect(page.locator('#tab-tips .tip-card').first()).toBeVisible();
});

test('gallery limits persistent-failure refresh recovery and the existing retry button restores it', async ({ page }) => {
    let attempts = 0, navigations = 0, blocked = true;
    page.on('framenavigated', frame => { if (frame === page.mainFrame()) navigations++; });
    await page.route('**/assets/js/gallery-data.js?*', route => {
        attempts++;
        return blocked ? route.abort('failed') : route.continue();
    });
    await page.goto('/gallery.html');
    const overlay = page.locator('[data-cupid-gallery-load-error]');
    await expect(overlay).toBeVisible({ timeout: 20_000 });
    expect(attempts).toBe(6);
    expect(navigations).toBe(2);
    await expect(overlay.locator('h1')).toHaveText('갤러리를 불러오지 못했습니다');
    blocked = false;
    await overlay.locator('button').click();
    await page.waitForFunction(() => window.galleryScriptsLoaded === true);
    await expect(overlay).toHaveCount(0);
    expect(navigations).toBe(3);
    expect(attempts).toBe(7);
});
