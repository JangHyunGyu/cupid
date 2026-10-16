'use strict';

const { test, expect } = require('@playwright/test');
const { isMediaFixtureRequest } = require('./helpers/media-fixture.cjs');
const characters = { Seoyeon: 'seyoun', Yuna: 'yuna', Dain: 'dain', Teacher: 'teacher', Nurse: 'nurse', Haeun: 'haeun', Minsu: 'minsu' };

for (const width of [360, 390, 768, 1024, 1440]) {
    for (const surface of ['main', 'gallery']) {
        test(`${surface}/${width}: imported exhaustion sprites load and recover through protected media`, async ({ page }, testInfo) => {
            test.setTimeout(90_000);
            await page.setViewportSize({ width, height: 900 });
            const pageErrors = [];
            page.on('pageerror', error => pageErrors.push(error.message));
            await page.route('**/*', async route => {
                const request = route.request();
                if (request.method() !== 'POST' || isMediaFixtureRequest(request)) return route.continue();
                return route.fulfill({ status: 200, json: { ok: true } });
            });
            if (surface === 'gallery') {
                await page.addInitScript(ids => {
                    localStorage.setItem('cupid_gallery', JSON.stringify({
                        version: 2, affinityRebalanceVersion: 1,
                        characters: Object.fromEntries(ids.map(id => [id, {
                            met: true, maxAffinity: 100, currentAffinity: 100,
                            galleryFreeTalkAffinityInitialized: true, perfectEndingCleared: true, freeTalkCount: 30
                        }])), cg: {}, endings: {}, bgm: {}
                    }));
                }, Object.values(characters).filter(id => id !== 'minsu'));
                await page.goto('/gallery.html');
                await page.waitForFunction(() => window.galleryFreeTalk);
            } else {
                await page.goto('/game.html');
                await page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
                await page.evaluate(async () => {
                    const engine = window.gameEngine;
                    engine.dialogueSystem.typingSpeed = 0;
                    await engine.renderScene('lunch_seo_freetalk');
                    await window.ensureCupidFreeTalkRuntime?.();
                });
            }
            for (const [name, id] of Object.entries(characters)) {
                if (surface === 'gallery' && id === 'minsu') continue;
                await page.evaluate(({ surface, name, id }) => {
                    if (surface === 'gallery') window.galleryFreeTalk.open(id);
                    else {
                        const slot = window.gameEngine.uiManager.charSlots.center;
                        slot.dataset.groupCharId = name;
                        slot.querySelector('img').id = 'exhaustion-test-main-image';
                    }
                }, { surface, name, id });
                const selector = surface === 'gallery' ? '#gft-char-img' : '#exhaustion-test-main-image';
                for (const expression of ['exhausted', 'normal']) {
                    await page.evaluate(({ surface, name, id, expression }) => {
                        if (surface === 'gallery') window.galleryFreeTalk._updateExpression(expression, id);
                        else window.gameEngine.freeTalkSystem.applyExpression(expression, { name });
                    }, { surface, name, id, expression });
                    await expect.poll(() => page.locator(selector).evaluate((img, expected) =>
                        img.complete && img.naturalWidth > 0 && decodeURIComponent(img.currentSrc).includes(expected), `${id}_${expression}`)).toBe(true);
                    if (expression === 'exhausted') {
                        const dimensions = await page.locator(selector).evaluate(img => [img.naturalWidth, img.naturalHeight]);
                        expect(dimensions).toEqual([1086, 1448]);
                        if (id === 'yuna' && [390, 1440].includes(width)) {
                            await page.screenshot({ path: testInfo.outputPath(`${surface}-yuna-${width}.png`) });
                        }
                    }
                }
                if (surface === 'main') {
                    await page.evaluate(name => window.gameEngine.freeTalkSystem._applyGroupExpression('exhausted', name), name);
                    await expect.poll(() => page.locator(selector).evaluate((img, expected) =>
                        img.complete && img.naturalWidth > 0 && decodeURIComponent(img.currentSrc).includes(expected), `${id}_exhausted`)).toBe(true);
                }
            }
            expect(pageErrors).toEqual([]);
        });
    }
}
