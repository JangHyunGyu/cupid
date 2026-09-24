const { test, expect } = require('@playwright/test');

for (const [index, lang] of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt'].entries()) {
    test(`${lang}: Haeun CGs unlock only when viewed and open native masters in the gallery`, async ({ page }) => {
        test.setTimeout(120_000);
        const suffix = lang === 'ko' ? '' : `-${lang}`;
        const ids = ['event_haeun_trust', 'event_haeun_reputation'];
        await page.setViewportSize(index % 2 === 0 ? { width: 390, height: 844 } : { width: 1280, height: 800 });
        await page.route('**/*', route => route.request().method() === 'POST'
            ? route.fulfill({ json: { ok: true } }) : route.continue());
        const readyGallery = () => page.waitForFunction(() => window.gallery?.ui && window.GalleryData);
        await page.goto(`/gallery${suffix}.html`, { waitUntil: 'domcontentloaded' });
        await readyGallery();
        await page.locator('[data-tab="cg"]').click();
        for (const id of ids) await expect(page.locator(`[data-cg-id="${id}"]`)).toHaveClass(/locked/);
        for (const [mode, id, sceneId, preceding] of [
            ['high', ids[0], 'day5_haeun_trust_cg', 'day5_haeun_defends'],
            ['low', ids[1], 'day4_haeun_reputation_cg', 'day4_haeun_concern_clarify']
        ]) {
            await page.goto(`/game${suffix}.html`, { waitUntil: 'domcontentloaded' });
            await page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
            const result = await page.evaluate(async ({ mode, id, sceneId }) => {
                const e = window.gameEngine;
                e.dialogueSystem.typingSpeed = 0;
                e.stateManager.currentDay = mode === 'high' ? 5 : 4;
                e.stateManager.flags = { route_seoyeon: true };
                e.stateManager.stats.Haeun.affinity = mode === 'high' ? 8 : -1;
                for (const key of ['Seoyeon', 'Yuna', 'Dain', 'Teacher', 'Nurse']) e.stateManager.stats[key].affinity = key === 'Seoyeon' ? 80 : 30;
                await e.renderScene(mode === 'high' ? 'day5_haeun_gate' : 'day4_haeun_gate');
                const visited = [];
                for (let count = 0; count < 15; count++) {
                    const current = e.sceneRenderer.currentSceneId;
                    visited.push(current);
                    if (current === sceneId) break;
                    if (e.galleryManager.getProgress().cg[id]?.unlocked) throw new Error('CG unlocked before its scene');
                    const scene = e.sceneRenderer.getScene(current);
                    if (scene.choices) await e.executeChoice(scene.choices[0]);
                    else await e.renderScene(e.sceneRenderer.resolveNextScene(scene));
                }
                return { visited, scene: e.sceneRenderer.currentSceneId, affinity: e.stateManager.getAffinity('Seoyeon'),
                    unlocked: !!e.galleryManager.getProgress().cg[id]?.unlocked,
                    background: e.uiManager.bgLayer.style.backgroundImage,
                    standingSprites: document.querySelectorAll('#character-layer .char-slot img').length };
            }, { mode, id, sceneId });
            expect(result.scene).toBe(sceneId);
            expect(result.visited.at(-2)).toBe(preceding);
            expect(result.unlocked).toBe(true);
            expect(result.affinity).toBe(80);
            expect(result.background).toMatch(new RegExp(`${id}\\.(?:png|webp)(?:\\?|&|%26|["\\)])`));
            expect(result.standingSprites).toBe(0);
            if (lang === 'ko' || lang === 'en') await page.screenshot({ path: `test-results/haeun-cg-${lang}-${mode}-scene.png` });
            await page.reload({ waitUntil: 'domcontentloaded' });
            await page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
            expect(await page.evaluate(() => window.gameEngine.sceneRenderer.currentSceneId)).toBe(sceneId);
            await page.goto(`/gallery${suffix}.html`, { waitUntil: 'domcontentloaded' });
            await readyGallery();
            await page.locator('[data-tab="cg"]').click();
            const card = page.locator(`[data-cg-id="${id}"]`);
            await expect(card).not.toHaveClass(/locked/);
            if (mode === 'high') await expect(page.locator(`[data-cg-id="${ids[1]}"]`)).toHaveClass(/locked/);
            const copy = await page.evaluate(({ lang, id }) => window.GalleryData.getCG(lang, id), { lang, id });
            await expect(card.locator('h4')).toHaveText(copy.name);
            await card.click();
            const image = page.locator('#cg-modal-image');
            await expect(image).toBeVisible();
            await expect.poll(() => image.evaluate(img => img.complete && img.naturalWidth), { timeout: 30_000 }).toBe(mode === 'high' ? 2160 : 3072);
            expect(await image.evaluate(img => img.naturalHeight)).toBe(mode === 'high' ? 2160 : 3072);
            await expect(image).toHaveCSS('opacity', '1');
            await expect(page.locator('#cg-modal-title')).toHaveText(copy.name);
            await expect(page.locator('#cg-modal-desc')).toHaveText(copy.description);
            if (lang === 'ko' || lang === 'en') await page.screenshot({ path: `test-results/haeun-cg-${lang}-${mode}-gallery.png` });
        }
    });
}
