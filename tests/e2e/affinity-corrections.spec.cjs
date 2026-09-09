const { test, expect } = require('@playwright/test');
const { createHash } = require('node:crypto');
const deviceId = 'test-affinity-correction-browser';
const fingerprint = createHash('sha256').update(deviceId).digest('hex');
const originalFingerprint = '9fe6b2e83ad606ac68ff1832e42a7f1fd6d2f076a73ea469dec209639eefe2fb';
const correctionId = 'main-route-seoyeon-20260909';

for (const lang of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt']) {
    test(`${lang}: targeted gallery correction, replay protection, and legitimate requalification`, async ({ page }) => {
        const logs = [];
        await page.route('**/*', async route => {
            const request = route.request();
            if (new URL(request.url()).pathname.endsWith('/affinity-corrections.js')) {
                const response = await route.fetch();
                return route.fulfill({ response, body: (await response.text()).replace(originalFingerprint, fingerprint) });
            }
            if (request.method() !== 'POST') return route.continue();
            const body = request.postDataJSON();
            if (new URL(request.url()).pathname === '/chat-logs') logs.push(body);
            return route.fulfill({ status: 200, json: { ok: true, eventIds: (body?.events || []).map(event => event.eventId) } });
        });
        await page.addInitScript(({ deviceId }) => {
            if (localStorage.getItem('correction-test-seeded')) return;
            localStorage.setItem('correction-test-seeded', '1');
            localStorage.setItem('cupid_device_id', deviceId);
            localStorage.setItem('cupid_gallery', JSON.stringify({
                version: 2, affinityRebalanceVersion: 1,
                characters: {
                    seyoun: { met: true, maxAffinity: 100, currentAffinity: 58, galleryFreeTalkAffinityInitialized: true, unlocked: true, perfectEndingCleared: true, freeTalkCount: 36 },
                    dain: { met: true, maxAffinity: 100, currentAffinity: 100, galleryFreeTalkAffinityInitialized: true, unlocked: true, perfectEndingCleared: true, freeTalkCount: 36 }
                },
                cg: { ending_perfect_seoyeon: { unlocked: true }, ending_perfect_dain: { unlocked: true } },
                endings: { perfect_seoyeon: { unlocked: true }, perfect_dain: { unlocked: true } }, bgm: {}
            }));
        }, { deviceId });
        await page.goto(lang === 'ko' ? '/gallery.html' : `/gallery-${lang}.html`);
        const ready = () => page.waitForFunction(() => window.gallery?.progress && window.gallery?.ui);
        await ready();
        const corrected = await page.evaluate(() => {
            const p = window.gallery.progress;
            return { data: p.data, seoyeonTalk: p.isFreeTalkUnlocked('seyoun'), dainTalk: p.isFreeTalkUnlocked('dain'), lastExpression: p.isExpressionUnlocked('seyoun', 2, 3) };
        });
        expect(corrected.data.characters.seyoun.maxAffinity).toBe(99);
        expect(corrected.data.characters.seyoun.currentAffinity).toBe(58);
        expect(corrected.data.characters.dain.maxAffinity).toBe(100);
        expect(corrected.data.cg.ending_perfect_seoyeon).toBeUndefined();
        expect(corrected.data.endings.perfect_seoyeon).toBeUndefined();
        expect(corrected.seoyeonTalk).toBe(false);
        expect(corrected.lastExpression).toBe(false);
        expect(corrected.dainTalk).toBe(true);
        await page.evaluate(async () => {
            const p = window.gallery.progress;
            p.data.characters.seyoun.currentAffinity = 99;
            p.save();
            const result = p.changeCurrentAffinity('seyoun', 1);
            await window.saveCupidChatLog({ charId: 'Seoyeon', sessionId: 'gallery-freetalk', userContent: 'test', assistantContent: 'test', affinityChange: result.change, affinityCurrent: result.value });
            await window.saveCupidGroupChatLog({ sessionId: 'test-group', turnId: 'test-correction-turn', participants: ['Seoyeon', 'Dain'], userContent: 'test', assistantMessages: [
                { speakerId: 'Seoyeon', content: 'test', affinityChange: 0, affinityCurrent: 100 },
                { speakerId: 'Dain', content: 'test', affinityChange: 0, affinityCurrent: 100 }
            ] });
        });
        const real = logs.filter(entry => entry.role === 'assistant');
        expect(real.filter(entry => entry.charId === 'Seoyeon' || entry.speakerId === 'Seoyeon').every(entry => entry.affinityCorrectionIds?.includes(correctionId))).toBe(true);
        expect(real.find(entry => entry.speakerId === 'Dain').affinityCorrectionIds).toBeUndefined();
        await page.reload();
        await ready();
        expect(await page.evaluate(() => window.gallery.progress.getAffinity('seyoun'))).toBe(100);
        const restored = await page.evaluate(() => {
            const old = JSON.parse(window.CupidStorage.getItem('cupid_gallery'));
            delete old.appliedAffinityCorrections;
            old.characters.seyoun.perfectEndingCleared = true;
            window.CupidStorage.setItem('cupid_gallery', JSON.stringify(old));
            window.gallery.progress.refresh();
            return window.gallery.progress.data;
        });
        expect(restored.characters.seyoun.maxAffinity).toBe(99);
        expect(restored.characters.seyoun.perfectEndingCleared).toBeUndefined();
        expect(restored.characters.dain.maxAffinity).toBe(100);
    });
}
