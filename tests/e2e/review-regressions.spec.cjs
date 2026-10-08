const { test, expect } = require('@playwright/test');

async function gallery(page, lang = 'ko') {
    await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.fallback() : route.abort());
    await page.goto(`/gallery${lang === 'ko' ? '' : '-' + lang}.html`);
    await page.waitForFunction(() => window.gallery?.ui && window.GalleryData);
}

for (const lang of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt', 'zh']) {
    test(`${lang}: active CGs exclude the retired scene and never expose null labels`, async ({ page }) => {
        await gallery(page, lang);
        const result = await page.evaluate(lang => {
            const renderer = new CGRenderer({ lang, progress: { isUnlocked: () => true } });
            renderer.init(); renderer.render();
            return [...document.querySelectorAll('.cg-card')].map(card => ({ id: card.dataset.cgId, label: card.querySelector('.card-info p').textContent }));
        }, lang);
        expect(result).toHaveLength(33);
        expect(result.some(card => card.id === 'nurse_home_event1' || card.label === 'null' || card.label === 'undefined')).toBe(false);
    });
}

test('a failed CG can be retried without changing its unlock record', async ({ page }) => {
    let fail = true;
    await page.route('**/api/media?*', route => fail && route.request().url().includes('ending_friend')
        ? route.fulfill({ status: 503, body: 'Temporary test outage' }) : route.fallback());
    await gallery(page);
    await page.setViewportSize({ width: 390, height: 844 });
    await page.evaluate(() => {
        window.reviewCG = new CGRenderer({ lang: 'ko', progress: { isUnlocked: () => true } });
        window.reviewCG.openModal('ending_friend');
    });
    await expect(page.locator('#cg-load-error')).toBeVisible();
    const stored = await page.evaluate(() => CupidStorage.getItem('cupid_gallery'));
    fail = false;
    await page.locator('#cg-retry-btn').click();
    await expect(page.locator('#cg-load-error')).toBeHidden();
    await expect(page.locator('#cg-modal-image')).toHaveClass(/cg-image-loaded/);
    expect(await page.locator('#cg-modal-image').evaluate(img => img.naturalWidth)).toBeGreaterThan(0);
    expect(await page.evaluate(() => CupidStorage.getItem('cupid_gallery'))).toBe(stored);
});

test('stale CG callbacks cannot replace the current image state or reopen an error after close', async ({ page }) => {
    await gallery(page);
    const result = await page.evaluate(async () => {
        const callbacks = [];
        CupidMedia.loadImageWithMediaFallback = (img, path, loaded, failed) => callbacks.push({ loaded, failed });
        const renderer = new CGRenderer({ lang: 'ko', progress: { isUnlocked: () => true } });
        renderer.openModal('ending_friend');
        renderer.openModal('ending_harem');
        callbacks[0].failed(); callbacks[0].loaded();
        await new Promise(requestAnimationFrame);
        const stale = { error: !document.querySelector('#cg-load-error').hidden, loaded: document.querySelector('#cg-modal-image').classList.contains('cg-image-loaded') };
        renderer.closeModal(); callbacks[1].failed();
        return { stale, closedError: !document.querySelector('#cg-load-error').hidden };
    });
    expect(result).toEqual({ stale: { error: false, loaded: false }, closedError: false });
});

test('versioned backgrounds use lossless WebP and retain a successfully loaded PNG fallback', async ({ page }) => {
    const requested = [];
    await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.fallback() : route.abort());
    page.on('request', request => { if (request.url().includes('/background/gym.')) requested.push(request.url()); });
    await page.goto('/game.html');
    await page.waitForFunction(() => window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
    await page.evaluate(() => gameEngine.sceneRenderer.setBackground('assets/images/background/gym.png'));
    expect(requested.some(url => /gym\.lossless\.webp\?v=/.test(url))).toBe(true);
    expect(requested.some(url => /gym\.png\?v=/.test(url))).toBe(false);
    await page.route('**/assets/images/background/arcade.lossless.webp*', route => route.fulfill({ status: 404, body: 'Injected failure' }));
    await page.evaluate(() => gameEngine.sceneRenderer.setBackground('assets/images/background/arcade.png'));
    const fallback = await page.locator('#background-layer').evaluate(el => el.style.backgroundImage);
    expect(fallback).toMatch(/arcade\.png\?v=/);
    await page.evaluate(() => gameEngine.sceneRenderer.setBackground('assets/images/background/missing-test-background.png'));
    expect(await page.locator('#background-layer').evaluate(el => el.style.backgroundImage)).toBe(fallback);
});
