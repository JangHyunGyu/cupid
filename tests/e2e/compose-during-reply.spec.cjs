const { test, expect } = require('@playwright/test');
const { installAffinitySeeder } = require('./helpers/affinity-seed.cjs');

for (const surface of ['single', 'group', 'gallery']) for (const fail of [false, true]) {
    test(`${surface}: draft survives a pending reply and ${fail ? 'failure' : 'completion'}`, async ({ page }) => {
        test.setTimeout(90000);
        const requests = [];
        let release;
        const pending = new Promise(resolve => { release = resolve; });
        await page.route('**/*', async route => {
            const request = route.request();
            if (request.method() !== 'POST') return route.continue();
            const body = request.postDataJSON() || {};
            if (body.requestType === 'character') {
                requests.push(body);
                await pending;
                if (fail) return route.fulfill({ status: 503, headers: { 'X-AI-Retry-Exhausted': 'true' },
                    json: { reason: 'UPSTREAM_RETRIES_EXHAUSTED', retryExhausted: true } });
                const segments = [{ type: 'dialogue', text: 'It was a quiet day.' }];
                const content = surface === 'group'
                    ? { conversations: body.responseSpeakers.map(({ name }) => ({ name, segments, expression: 'neutral', affinity: 0 })) }
                    : { segments, expression: 'neutral', affinity: 0, forcedSexualViolation: 'none' };
                return route.fulfill({ json: { turnId: body.turnId, choices: [{ message: { content: JSON.stringify(content) } }] } });
            }
            return route.fulfill({ json: { ok: true, eventIds: (body.events || []).map(item => item.eventId) } });
        });
        await page.addInitScript(() => {
            localStorage.setItem('cupid_gallery', JSON.stringify({ version: 2, affinityRebalanceVersion: 1,
                characters: { nurse: { met: true, maxAffinity: 90, currentAffinity: 60, galleryFreeTalkAffinityInitialized: true,
                    perfectEndingCleared: true, freeTalkCount: 30 } }, cg: {}, endings: {}, bgm: {} }));
        });
        await installAffinitySeeder(page);
        await page.goto(`/${surface === 'gallery' ? 'gallery' : 'game'}-en.html`);
        if (surface === 'gallery') {
            await page.waitForFunction(() => window.galleryFreeTalk);
            await page.evaluate(() => window.galleryFreeTalk.open('nurse'));
        } else {
            await page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
            await page.evaluate(async surface => {
                const e = window.gameEngine;
                e.dialogueSystem.typingSpeed = 0;
                e.uiManager.showModal = async () => {};
                window.cupidTestSeedAffinities({ Teacher: 50, Nurse: 60 });
                await e.renderScene(surface === 'group' ? 'after3_group_teacher_companion' : 'after_nurse_freetalk');
            }, surface);
        }
        await page.waitForFunction(surface => surface === 'gallery' ? !window.galleryFreeTalk.isTyping
            : !window.gameEngine.dialogueSystem.isCurrentlyTyping(), surface);
        await page.evaluate(surface => {
            window.sendDraft = () => surface === 'gallery' ? window.galleryFreeTalk._handleSend()
                : window.gameEngine.freeTalkSystem.sendChatMessage(id => window.gameEngine.sceneRenderer.getScene(id));
            window.advanceDraftTimer = setInterval(() => window.gameEngine?.freeTalkSystem.advanceGroupMessageQueue(), 20);
            document.getElementById('chat-input').value = 'How was your day?';
            window.draftRequest = window.sendDraft();
        }, surface);
        await expect.poll(() => requests.length).toBe(1);
        const input = page.locator('#chat-input');
        const send = page.locator('#chat-send');
        await expect(input).toBeEditable();
        await expect(send).toBeDisabled();
        await input.fill('Next draft');
        await input.press('End');
        await page.keyboard.type(' kept');
        if (!fail) {
            for (const [width, height] of [[320, 568], [375, 812], [430, 932], [667, 375], [768, 1024], [1024, 768], [1440, 900]]) {
                await page.setViewportSize({ width, height });
                await input.focus();
                await expect(input).toBeInViewport({ ratio: 1 });
                await expect(send).toBeInViewport({ ratio: 1 });
                await expect(input).toHaveValue('Next draft kept');
                expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
                await page.setViewportSize({ width, height: Math.max(320, height - 120) });
                await expect(input).toBeInViewport({ ratio: 1 });
                if (width === 375 || width === 1440) await page.screenshot({ path: `../_workspace/compose-browser/cupid-${surface}-${width}.png` });
            }
        }
        await input.press('Enter');
        await page.evaluate(() => window.sendDraft());
        await expect(input).toHaveValue('Next draft kept');
        expect(requests).toHaveLength(1);
        release();
        await page.evaluate(async () => { await window.draftRequest; clearInterval(window.advanceDraftTimer); });
        await expect(input).toHaveValue('Next draft kept');
        await expect(input).toBeEditable();
        await expect(send).toBeEnabled();
        expect(requests).toHaveLength(1);
        await input.dispatchEvent('keydown', { key: 'Enter', isComposing: true, keyCode: 229 });
        await expect(input).toHaveValue('Next draft kept');
        expect(requests).toHaveLength(1);
    });
}
