const { test, expect } = require('@playwright/test');

async function openGame(page, lang = 'ko') {
    await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
    await page.goto(`/game${lang === 'ko' ? '' : '-' + lang}.html`);
    await page.waitForFunction(() => window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
    await page.evaluate(async () => {
        for (const day of [2, 3, 4, 5]) await CupidContentLoader.ensureDay(day);
        gameEngine.dialogueSystem.typingSpeed = 0;
    });
}

for (const width of [390, 1440]) test(`corrected visual states render real art at ${width}px`, async ({ page }, testInfo) => {
    test.setTimeout(180_000);
    await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
    await openGame(page);
    for (const [id, background, actor] of [
        ['morning4_start', 'room_my_day', null],
        ['lunch2_yuna_13', 'yuna_hideout_day', 'yuna_normal'],
        ['after2_dain_end_b', 'snack_shop', 'dain_laugh'],
        ['date_seo_flower_2', 'flower_shop', 'seyoun_normal'],
        ['date_yuna_bookstore', 'bookstore', 'yuna_date_normal'],
        ['date_dain_pretty_high', 'school_back', 'dain_date_shy'],
        ['date_perfect_nurse_home_1', 'nurse_house_day', 'nurse_home_smile'],
        ['lunch3_expose_12', 'room_school', 'minsu_normal'],
        ['after5_farewell_seo_7', 'school_hallway', null]
    ]) {
        await page.evaluate(id => gameEngine.renderScene(id, { restoring: true }), id);
        const result = await page.evaluate(() => ({
            background: decodeURIComponent(document.querySelector('#background-layer').style.backgroundImage),
            images: [...document.querySelectorAll('#character-layer img')].map(img => ({ src: decodeURIComponent(img.src), width: img.naturalWidth }))
        }));
        expect(result.background).toContain(background + '.');
        expect(result.images).toHaveLength(actor ? 1 : 0);
        if (actor) { expect(result.images[0].src).toContain(actor + '.'); expect(result.images[0].width).toBeGreaterThan(0); }
        if (['date_yuna_bookstore', 'date_dain_pretty_high', 'date_perfect_nurse_home_1'].includes(id)) {
            await page.waitForTimeout(350);
            await page.screenshot({ path: testInfo.outputPath(id + '.png'), animations: 'disabled' });
        }
    }
    await page.evaluate(() => gameEngine.renderScene('hidden_good_homeroom_1', { restoring: true }));
    await expect(page.locator('#background-layer')).not.toHaveClass(/\bnight\b|\bsunset\b/);
    await page.evaluate(() => gameEngine.renderScene('night3_nightmare_3', { restoring: true }));
    await expect(page.locator('#character-layer img')).toHaveCSS('opacity', '0.35');
    await expect(page.locator('#background-layer')).toHaveClass(/\bnight\b/);
    await page.evaluate(() => gameEngine.renderScene('day5_ending_harem', { restoring: true }));
    await expect(page.locator('#background-layer')).toHaveCSS('background-size', 'contain');
    await page.screenshot({ path: testInfo.outputPath('unresolved-cg.png'), animations: 'disabled' });
});

test('a home conversation retains its outfit when the AI changes expression', async ({ page }) => {
    await openGame(page);
    await page.evaluate(() => gameEngine.renderScene('day5_nurse_ending_freetalk_perfect', { restoring: true }));
    await page.evaluate(() => gameEngine.freeTalkSystem.applyExpression('angry', gameEngine.sceneRenderer.getScene('day5_nurse_ending_freetalk_perfect')));
    await expect.poll(() => page.locator('#character-layer img').getAttribute('src')).toMatch(/nurse_home_angry/);
    await expect.poll(() => page.locator('#character-layer img').evaluate(img => img.naturalWidth)).toBe(3584);
});

test('reused portraits update opacity in both unchanged and mixed slot transitions', async ({ page }) => {
    await openGame(page);
    await page.addStyleTag({ content: '#character-layer img { transition: none !important; animation: none !important; }' });
    const result = await page.evaluate(async () => {
        const renderer = gameEngine.sceneRenderer;
        const src = 'assets/images/characters/seyoun_normal.png';
        renderer.currentSceneId = 'visual-opacity-check';
        const update = scene => renderer.updateCharacters(scene, 'visual-opacity-check');
        await update({ character: src });
        const original = gameEngine.uiManager.charSlots.center.querySelector('img');
        await update({ characters: { center: { src, opacity: 0.35 } } });
        const remote = getComputedStyle(original).opacity;
        await update({ character: src });
        const present = getComputedStyle(original).opacity;
        await update({ characters: { center: { src, opacity: 0.35 }, left: 'assets/images/characters/dain_normal.png' } });
        return { remote, present, mixed: getComputedStyle(original).opacity, reused: original === gameEngine.uiManager.charSlots.center.querySelector('img') };
    });
    expect(result).toEqual({ remote: '0.35', present: '1', mixed: '0.35', reused: true });
});

test('an AI-selected expression cannot leak into the next authored portrait', async ({ page }) => {
    await openGame(page);
    await page.evaluate(() => gameEngine.renderScene('classroom_dain_1', { restoring: true }));
    await page.evaluate(() => gameEngine.freeTalkSystem.applyExpression('angry', gameEngine.sceneRenderer.getScene('classroom_dain_1')));
    await expect.poll(() => page.locator('#character-layer img').getAttribute('src')).toMatch(/dain_angry/);
    await page.evaluate(() => gameEngine.renderScene('classroom_dain_1', { restoring: true }));
    await expect.poll(() => page.locator('#character-layer img').getAttribute('src')).toMatch(/dain_normal/);
});

for (const lang of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt', 'zh']) test(`${lang}: every outfit has localized gallery labels and unchanged base requirements`, async ({ page }) => {
    await page.goto(`/gallery${lang === 'ko' ? '' : '-' + lang}.html`);
    await page.waitForFunction(() => window.GalleryData && window.gallery?.ui);
    const result = await page.evaluate(lang => {
        const problems = [];
        for (const [id, outfits] of Object.entries(GalleryData.OUTFIT_EXPRESSIONS)) for (const [outfit, expressions] of Object.entries(outfits)) for (const expression of expressions) {
            const key = `${outfit}_${expression}`;
            if (!GalleryData.getCharacter(lang, id).expressions.includes(key) || GalleryData.getExpressionName(lang, key) === key
                || GalleryData.getExpressionRequirement(id, key) !== GalleryData.getExpressionRequirement(id, expression)) problems.push(id + '/' + key);
        }
        return problems;
    }, lang);
    expect(result).toEqual([]);
});
