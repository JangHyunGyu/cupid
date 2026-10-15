'use strict';
const { test, expect } = require('@playwright/test');

async function openGame(page, lang = 'ko') {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
    await page.goto(`/game${lang === 'ko' ? '' : '-' + lang}.html`);
    await page.waitForFunction(() => window.gameEngine?.messengerView && !gameEngine._isRendering);
    await page.evaluate(async () => {
        for (const day of [2, 3, 4]) await CupidContentLoader.ensureDay(day);
        gameEngine.dialogueSystem.typingSpeed = 0;
    });
    return errors;
}

async function render(page, id) {
    await page.evaluate(id => gameEngine.renderScene(id, { restoring: true }), id);
}

async function expectNoOverlap(page) {
    const boxes = await page.evaluate(() => {
        const rect = element => {
            const b = element.getBoundingClientRect();
            return { left: b.left, top: b.top, right: b.right, bottom: b.bottom, width: b.width, height: b.height };
        };
        const visible = element => element && getComputedStyle(element).display !== 'none' && element.getBoundingClientRect().height > 0;
        return {
            viewport: { width: innerWidth, height: innerHeight },
            panel: rect(document.querySelector('#messenger-panel')),
            controls: ['#dialogue-box', '#choice-container'].map(selector => document.querySelector(selector)).filter(visible).map(rect)
        };
    });
    expect(boxes.panel.left).toBeGreaterThanOrEqual(0);
    expect(boxes.panel.right).toBeLessThanOrEqual(boxes.viewport.width);
    expect(boxes.panel.top).toBeGreaterThanOrEqual(0);
    for (const control of boxes.controls) expect(boxes.panel.bottom).toBeLessThanOrEqual(control.top);
}

for (const [width, height] of [[1440, 900], [390, 844], [320, 568], [844, 390], [568, 320]]) {
    test(`night messages, narration and reply controls fit ${width}x${height}`, async ({ page }, testInfo) => {
        await page.setViewportSize({ width, height });
        const errors = await openGame(page);
        await render(page, 'night2_msg_yuna_general');
        await expect(page.locator('#messenger-panel')).toHaveAttribute('data-contact', 'Yuna');
        await expect(page.locator('#name-tag')).toBeHidden();
        await expect(page.locator('#message')).toBeEmpty();
        await expect(page.locator('#next-indicator')).toBeVisible();
        await expectNoOverlap(page);
        await page.screenshot({ path: testInfo.outputPath('incoming.png'), animations: 'disabled' });

        await page.locator('#messenger-panel').click();
        await expect.poll(() => page.evaluate(() => gameEngine.sceneRenderer.currentSceneId)).toBe('night2_msg_7');
        await page.waitForFunction(() => !gameEngine.dialogueSystem.isCurrentlyTyping());
        await expect(page.locator('#message')).not.toBeEmpty();
        await expectNoOverlap(page);
        await page.locator('#dialogue-box').click();
        await expect.poll(() => page.evaluate(() => gameEngine.sceneRenderer.currentSceneId)).toBe('night2_choice');
        await page.waitForFunction(() => !gameEngine._isRendering && !gameEngine.dialogueSystem.isCurrentlyTyping());
        await page.locator('#dialogue-box').click();
        await expect(page.locator('.choice-btn')).toHaveCount(3);
        if (await page.locator('#messenger-panel').isVisible()) await expectNoOverlap(page);
        await page.screenshot({ path: testInfo.outputPath('reply-choices.png'), animations: 'disabled' });
        await page.locator('.choice-btn').filter({ hasText: '서연' }).click();
        await expect(page.locator('#messenger-panel')).toHaveAttribute('data-contact', 'Seoyeon');
        await expect(page.locator('.messenger-row.is-player .messenger-bubble')).toHaveText('네가 부르면 언제든 또 갈게');
        await expect(page.locator('.messenger-receipt')).toHaveText('1');
        await expect(page.locator('.messenger-receipt')).toHaveClass(/is-gone/);
        await expect(page.locator('#name-tag')).toBeHidden();
        await expectNoOverlap(page);
        await page.screenshot({ path: testInfo.outputPath('outgoing.png'), animations: 'disabled' });
        expect(errors).toEqual([]);
    });
}

test('replying to a different contact opens that contact and clears the old thread', async ({ page }) => {
    await openGame(page);
    await render(page, 'night2_msg_yuna_specific');
    await render(page, 'night2_reply_seo_1');
    await expect(page.locator('#messenger-panel')).toHaveAttribute('data-contact', 'Seoyeon');
    await expect(page.locator('.messenger-bubble')).toHaveCount(1);
    await expect(page.locator('.messenger-title')).toHaveText('서연');
});

test('typing can be skipped without advancing and cancelled typing cannot leak into the next scene', async ({ page }) => {
    const errors = await openGame(page);
    await page.evaluate(() => { window.pendingMessage = gameEngine.renderScene('night2_msg_yuna_specific'); });
    await expect(page.locator('.messenger-typing-row')).toBeVisible();
    await expect(page.locator('#message')).toBeEmpty();
    await expect(page.locator('#name-tag')).toBeHidden();
    await page.locator('#messenger-panel').click();
    await expect(page.locator('.messenger-bubble')).toHaveCount(1);
    expect(await page.evaluate(() => gameEngine.sceneRenderer.currentSceneId)).toBe('night2_msg_yuna_specific');
    await page.evaluate(() => window.pendingMessage);
    await page.evaluate(() => { window.pendingMessage = gameEngine.renderScene('night2_msg_yuna_specific_2'); });
    await expect(page.locator('.messenger-typing-row')).toBeVisible();
    await render(page, 'night2_reply_dain_react_neg');
    await page.evaluate(() => window.pendingMessage);
    await expect(page.locator('#messenger-panel')).toHaveAttribute('data-contact', 'Dain');
    await expect(page.locator('.messenger-bubble')).toHaveCount(1);
    await expect(page.locator('#message')).toContainText('읽음 표시');
    await expect(page.locator('#name-tag')).toBeVisible();
    expect(await page.evaluate(() => gameEngine.messengerView.isAnimating())).toBe(false);
    await expect(page.locator('.messenger-typing-row')).toHaveCount(0);
    const nextScene = await page.evaluate(() => gameEngine.sceneRenderer.getScene(gameEngine.sceneRenderer.currentSceneId).next);
    await page.locator('#dialogue-box').click();
    await expect.poll(() => page.evaluate(() => gameEngine.sceneRenderer.currentSceneId)).toBe(nextScene);
    await render(page, 'morning2_seo_1');
    await expect(page.locator('#messenger-panel')).toBeHidden();
    await expect(page.locator('#name-tag')).toBeVisible();
    expect(errors).toEqual([]);
});

test('legacy saves use the surviving scene ID and explicit day-four replies restore their contact', async ({ page }) => {
    await openGame(page);
    await render(page, 'morning2_break_1');
    expect(await page.evaluate(() => gameEngine.sceneRenderer.currentSceneId)).toBe('morning2_seo_dust_1');
    await render(page, 'night3_cheat_msg_1');
    expect(await page.evaluate(() => gameEngine.sceneRenderer.currentSceneId)).toBe('night3_cheat_msg_2');
    for (const [route, contact] of [['seoyeon', 'Seoyeon'], ['dain', 'Dain'], ['yuna', 'Yuna']]) {
        await page.evaluate(() => gameEngine.messengerView.hide());
        await render(page, `day4_waited_${route}_promise`);
        await expect(page.locator('#messenger-panel')).toHaveAttribute('data-contact', contact);
        await expect(page.locator('.messenger-row.is-player')).toHaveCount(1);
    }
    await render(page, 'wall_seo_pre_high_1');
    await expect(page.locator('#messenger-panel')).toBeHidden();
    await expect(page.locator('#message')).not.toBeEmpty();
    await render(page, 'night_homeroom_msg_1');
    await expect(page.locator('#messenger-panel')).toBeHidden();
    await expect(page.locator('.messenger-bubble')).toHaveCount(0);
    await expect(page.locator('#message')).not.toBeEmpty();
});

for (const lang of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt', 'zh']) {
    test(`${lang}: messages and contact names use the active locale`, async ({ page }) => {
        const errors = await openGame(page, lang);
        await render(page, 'night2_msg_yuna_specific');
        const expected = await page.evaluate(() => gameEngine.sceneRenderer.getScene('night2_msg_yuna_specific'));
        await expect(page.locator('.messenger-title')).toHaveText(expected.name);
        await expect(page.locator('.messenger-bubble')).toHaveText(expected.text);
        await expect(page.locator('#name-tag')).toBeHidden();
        expect(errors).toEqual([]);
    });
}

for (const [width, height] of [[1440, 900], [390, 844], [320, 568], [844, 390], [568, 320]]) {
    test(`four-choice message keeps controls reachable through rotation at ${width}x${height}`, async ({ page }, testInfo) => {
        await page.setViewportSize({ width, height });
        await openGame(page);
        await render(page, 'day4_teacher_yuna_counteroffer');
        await expect(page.locator('#messenger-panel')).toBeVisible();
        await expectNoOverlap(page);
        await page.locator('#dialogue-box').click();
        await expect(page.locator('.choice-btn')).toHaveCount(4);
        if (width === 568) await expect(page.locator('#messenger-panel')).toBeHidden();
        else {
            await expect(page.locator('#messenger-panel')).toBeVisible();
            await expectNoOverlap(page);
        }
        await page.screenshot({ path: testInfo.outputPath('four-choices.png'), animations: 'disabled' });
        for (const button of await page.locator('.choice-btn').all()) {
            const box = await button.boundingBox();
            expect(box.y).toBeGreaterThanOrEqual(0);
            expect(box.y + box.height).toBeLessThanOrEqual(height);
        }
        await page.setViewportSize({ width: 390, height: 844 });
        await expect(page.locator('#messenger-panel')).toBeVisible();
        await expectNoOverlap(page);
    });
}
