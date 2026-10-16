const { test, expect } = require('@playwright/test');
const fs = require('node:fs');
const path = require('node:path');
const { PNG } = require(path.join(path.dirname(require.resolve('playwright-core/package.json')), 'lib/utilsBundle.js'));

const originalCss = fs.readFileSync(path.resolve(__dirname, '../../assets/vendor/pretendard/pretendard.css'), 'utf8');
const languages = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt', 'zh'];

function expectSameRendering(before, after) {
    const a = PNG.sync.read(before);
    const b = PNG.sync.read(after);
    expect([b.width, b.height]).toEqual([a.width, a.height]);
    let changed = 0;
    let maximum = 0;
    for (let offset = 0; offset < a.data.length; offset += 4) {
        let delta = 0;
        for (let channel = 0; channel < 4; channel++) {
            delta = Math.max(delta, Math.abs(a.data[offset + channel] - b.data[offset + channel]));
        }
        if (delta) changed++;
        maximum = Math.max(maximum, delta);
    }
    // Chromium can round a handful of translucent border pixels by 1–2/255.
    // Glyph changes, shifted controls and any larger repaint fail this check.
    expect(maximum).toBeLessThanOrEqual(2);
    expect(changed).toBeLessThanOrEqual(16);
}

async function openHome(browser, lang, viewport, baseline) {
    const context = await browser.newContext({ viewport, reducedMotion: 'reduce', serviceWorkers: 'block' });
    const page = await context.newPage();
    const fonts = [];
    page.on('request', request => { if (request.url().includes('.woff2')) fonts.push(request.url()); });
    await page.route('**/*', route => {
        const url = new URL(route.request().url());
        if (url.hostname !== '127.0.0.1') return route.abort();
        if (baseline && url.pathname.endsWith('/pretendard-home.css')) {
            return route.fulfill({ body: originalCss, contentType: 'text/css' });
        }
        return route.continue();
    });
    await page.addInitScript(lang => {
        localStorage.setItem('cupid:language', lang);
        let seed = 41;
        Math.random = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
    }, lang);
    await page.goto(`/index${lang === 'ko' ? '' : '-' + lang}.html`);
    await expect(page.locator('#start-btn')).toBeEnabled();
    await page.evaluate(async () => {
        await document.fonts.ready;
        await Promise.all([...document.images].map(image => image.decode().catch(() => {})));
    });
    await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}' });
    await page.waitForTimeout(150);
    return { context, page, fonts };
}

async function switchToSubsetFont(page) {
    await page.unroute('**/*');
    await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
    await page.evaluate(async () => {
        const link = document.querySelector('link[href*="pretendard-home.css"]');
        await new Promise((resolve, reject) => {
            link.addEventListener('load', resolve, { once: true });
            link.addEventListener('error', reject, { once: true });
            const url = new URL(link.href);
            url.searchParams.set('font-review', 'subset');
            link.href = url.href;
        });
        await document.fonts.ready;
        await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    });
}

for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
    for (const lang of languages) {
        test(`home font preserves ${lang} appearance at ${viewport.width}px`, async ({ browser }, testInfo) => {
            const full = await openHome(browser, lang, viewport, true);
            let cold;
            const geometry = page => page.locator('h1,.start-btn,.contact-link,.lang-combo-selected,.footer').evaluateAll(nodes => nodes.map(node => {
                    const rect = node.getBoundingClientRect();
                    return { text: node.textContent, x: rect.x, y: rect.y, width: rect.width, height: rect.height };
                }));
            try {
                const beforeGeometry = await geometry(full.page);
                const before = await full.page.screenshot({ animations: 'disabled', path: testInfo.outputPath('before.png') });
                await switchToSubsetFont(full.page);
                const after = await full.page.screenshot({ animations: 'disabled', path: testInfo.outputPath('after.png') });
                expect(await geometry(full.page)).toEqual(beforeGeometry);
                expectSameRendering(before, after);
                cold = await openHome(browser, lang, viewport, false);
                expect(await geometry(cold.page)).toEqual(beforeGeometry);
                if (lang !== 'zh') {
                    expect(cold.fonts.some(url => url.includes('CupidHomeSans-'))).toBe(true);
                    expect(cold.fonts.some(url => url.endsWith('/PretendardVariable.woff2'))).toBe(false);
                }
            } finally {
                await full.context.close();
                if (cold) await cold.context.close();
            }
        });
    }
}

test('story entry restores the complete font and preserves mixed-script punctuation', async ({ browser }, testInfo) => {
    const images = [];
    for (const baseline of [true, false]) {
        const { context, page, fonts } = await openHome(browser, 'ko', { width: 1000, height: 800 }, baseline);
        await page.locator('#start-btn').click();
        await page.waitForFunction(() => window.gameScriptsLoaded === true);
        expect(await page.locator('link[data-cupid-story-font]').count()).toBe(1);
        expect(fonts.some(url => url.endsWith('/PretendardVariable.woff2'))).toBe(true);
        await page.evaluate(async () => {
            const lines = '새 게임 가나다 힣 똠 햏 뷁 — Café déjà vu, ação, ¿Quién? Ā ß œ<br>日本語 恋愛 龜 漢字 简体中文 自由对话 你好<br>CUPID 0123456789 +3 ffi ff fi AV To';
            document.body.innerHTML = [45, 400, 700, 920].map(weight => `<p style="font: ${weight} 24px Pretendard;margin:18px">${lines}</p>`).join('');
            document.body.style.cssText = 'background:white;color:black;display:block;padding:8px;overflow:visible';
            await document.fonts.load('400 24px Pretendard', '힣똠龜');
            await document.fonts.ready;
        });
        await page.waitForTimeout(150);
        images.push(await page.screenshot({ animations: 'disabled', path: testInfo.outputPath(baseline ? 'mixed-before.png' : 'mixed-after.png') }));
        await context.close();
    }
    expectSameRendering(images[0], images[1]);
});
