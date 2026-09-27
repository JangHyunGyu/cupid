'use strict';
const { test, expect } = require('@playwright/test');

const viewports = [[320,568],[390,844],[430,932],[568,320],[844,390],[768,1024],[1024,768],[1366,768],[1920,1080],[2560,1440],[3440,1440],[3840,2160]];

async function measure(image) {
  return image.evaluate(img => {
    const rect = img.getBoundingClientRect();
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(img, 0, 0);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let firstRow = 0;
    // Ignore isolated matte noise; measure the visible crown, not the image box.
    for (; firstRow < canvas.height; firstRow++) {
      let count = 0;
      for (let x = 0; x < canvas.width; x++) {
        if (pixels[(firstRow * canvas.width + x) * 4 + 3] > 32) count++;
      }
      if (count >= canvas.width * 0.01) break;
    }
    const contentHeight = Math.min(rect.height, rect.width * img.naturalHeight / img.naturalWidth);
    return { width: rect.width, height: rect.height, contentHeight,
      crown: rect.top + (rect.height - contentHeight) / 2 + firstRow / canvas.height * contentHeight,
      bottom: rect.bottom, naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight };
  });
}

async function boot(page) {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.route(/^https?:\/\//, route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.fallback() : route.abort());
  await page.goto('/game.html');
  await page.waitForFunction(() => !!window.gameEngine?.sceneRenderer);
  await page.evaluate(async () => {
    window.gameEngine.dialogueSystem.typingSpeed = 0;
    await window.gameEngine.renderScene('classroom_yuna_1');
  });
  await expect(page.locator('#char-center img')).toBeVisible();
}

for (const [width, height] of viewports) {
  test(`Yuna sprite scale at ${width}x${height}`, async ({ page }, info) => {
    await page.setViewportSize({ width, height });
    await boot(page);
    const results = [];
    for (const expression of ['normal','bored','smile','shy','angry','sad','worried','flushed','laugh','pout']) {
      await page.evaluate(async expression => {
        const renderer = window.gameEngine.sceneRenderer;
        await renderer.updateCharacters({ character: `assets/images/characters/yuna_${expression}.png` }, renderer.currentSceneId);
      }, expression);
      const metrics = await measure(page.locator('#char-center img'));
      results.push({ expression, ...metrics });
      if (expression === 'bored') await page.screenshot({ path: info.outputPath('yuna-bored.png') });
    }
    await info.attach('sprite-metrics.json', { body: JSON.stringify({ width, height, results }, null, 2), contentType: 'application/json' });
    const normal = results[0];
    for (const result of results) {
      expect(Math.abs(result.crown - normal.crown), result.expression + ' crown must not jump between expressions').toBeLessThan(height * 0.01);
      expect(Math.abs(result.bottom - normal.bottom), result.expression + ' stays bottom aligned').toBeLessThan(1);
      expect(result.crown).toBeGreaterThanOrEqual(0);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  });
}

for (const [width, height] of [[320,568],[390,844],[844,390],[768,1024],[1024,768],[1920,1080],[3840,2160]]) {
  test(`Yuna side and group framing at ${width}x${height}`, async ({ page }, info) => {
    await page.setViewportSize({ width, height });
    await boot(page);
    for (const side of ['left','right']) {
      const other = side === 'left' ? 'right' : 'left';
      let baseline;
      for (const expression of ['normal','bored','smile','shy','angry','sad']) {
        await page.evaluate(async ({ side, other, expression }) => {
          const renderer = window.gameEngine.sceneRenderer;
          await renderer.updateCharacters({ characters: {
            [side]: `assets/images/characters/yuna_${expression}.png`,
            [other]: 'assets/images/characters/dain_normal.png'
          } }, renderer.currentSceneId);
        }, { side, other, expression });
        const metrics = await measure(page.locator(`#char-${side} img`));
        if (!baseline) baseline = metrics;
        expect(Math.abs(metrics.crown - baseline.crown), `${side}/${expression}`).toBeLessThan(height * 0.01);
        expect(Math.abs(metrics.bottom - baseline.bottom)).toBeLessThan(1);
        expect(metrics.crown).toBeGreaterThanOrEqual(0);
      }
    }
    await page.locator('#character-layer').evaluate(layer => layer.classList.add('group-freetalk-mode'));
    await page.screenshot({ path: info.outputPath('yuna-group.png') });
    await page.locator('#settings-btn').click();
    await expect(page.locator('#settingsModal')).toBeVisible();
    await page.locator('#settingsModal button').focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#settingsModal')).toBeHidden();
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  });
}

test('Yuna framing survives phone rotation, dynamic height, touch and animation', async ({ browser }, info) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, serviceWorkers: 'block' });
  const page = await context.newPage();
  await boot(page);
  for (const [width, height] of [[390,844],[390,650],[844,390],[390,844]]) {
    await page.setViewportSize({ width, height });
    // Mobile emulation settles viewport CSS after setViewportSize resolves.
    await page.waitForFunction(({ width, height }) => innerWidth === width && innerHeight === height
      && Math.abs(document.querySelector('#char-center').getBoundingClientRect().height - height) < 1
      && matchMedia('(orientation: portrait)').matches === (height >= width), { width, height });
    const results = [];
    for (const expression of ['normal','smile']) {
      await page.evaluate(async expression => {
        const renderer = window.gameEngine.sceneRenderer;
        await renderer.updateCharacters({ character: `assets/images/characters/yuna_${expression}.png` }, renderer.currentSceneId);
      }, expression);
      results.push(await measure(page.locator('#char-center img')));
    }
    expect(Math.abs(results[0].crown - results[1].crown)).toBeLessThan(height * 0.01);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  }
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  for (const state of ['char-breathing','char-talking','thinking']) {
    await page.locator('#char-center img').evaluate((img, state) => { img.className = state; }, state);
    const metrics = await measure(page.locator('#char-center img'));
    expect(metrics.crown).toBeGreaterThan(0);
    expect(metrics.crown).toBeLessThan(844 * 0.22);
  }
  await page.locator('#settings-btn').tap();
  await expect(page.locator('#settingsModal')).toBeVisible();
  await page.locator('#settingsModal button').tap();
  await expect(page.locator('#settingsModal')).toBeHidden();
  await page.screenshot({ path: info.outputPath('yuna-phone.png') });
  await context.close();
});
