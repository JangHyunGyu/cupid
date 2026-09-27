const { test, expect } = require('@playwright/test');

test('locked image reads and preloads never issue progression grants', async ({ page }) => {
  const grants = [];
  await page.route('**/api/gallery/unlocks', async route => {
    grants.push(route.request().postDataJSON());
    await route.fulfill({ json: { assets: [] } });
  });
  await page.route('**/api/media?*', route => route.fulfill({ status: 403, body: 'locked' }));
  await page.goto('/gallery.html');
  await page.waitForFunction(() => !!window.CupidMedia);
  await page.evaluate(() => window.CupidMedia.ensureSession());
  const before = grants.length;
  const outcome = await page.evaluate(() => new Promise(resolve => {
    CupidMedia.preloadUnlocked(['characters/dain_bikini']);
    CupidMedia.loadImageWithMediaFallback(new Image(), 'characters/dain_bikini', () => resolve('loaded'), () => resolve('denied'));
  }));
  expect(outcome).toBe('denied');
  expect(grants).toHaveLength(before);
});

test('concurrent grants wait for one acknowledgement before rendering a decoded sprite', async ({ page }) => {
  const grants = [];
  let acknowledge;
  const held = new Promise(resolve => acknowledge = resolve);
  await page.route('**/api/gallery/unlocks', async route => {
    const body = route.request().postDataJSON();
    grants.push(body);
    await held;
    await route.fulfill({ json: { assets: body.assets } });
  });
  let imageRequests = 0;
  page.on('request', req => { if (req.url().includes('/api/media?') && req.url().includes('dain_laugh')) imageRequests++; });
  await page.goto('/gallery.html');
  await page.waitForFunction(() => !!window.CupidMedia);
  const rendered = page.evaluate(() => new Promise(resolve => {
    CupidMedia.unlock(['characters/dain_laugh']);
    CupidMedia.unlock(['characters/dain_laugh']);
    const img = new Image();
    CupidMedia.loadImageWithMediaFallback(img, 'characters/dain_laugh', () => resolve(img.naturalWidth), () => resolve(0));
  }));
  await expect.poll(() => grants.length).toBe(1);
  expect(imageRequests).toBe(0);
  acknowledge();
  expect(await rendered).toBeGreaterThan(0);
  expect(imageRequests).toBe(1);
});

test('CG modal receives its decoded-image callback and becomes visible', async ({ page }) => {
  await page.route('**/api/gallery/unlocks', async route => {
    await route.fulfill({ json: { assets: route.request().postDataJSON().assets } });
  });
  await page.goto('/gallery.html');
  await page.waitForFunction(() => typeof CGRenderer !== 'undefined' && !!window.CupidMedia);
  await page.evaluate(() => {
    const renderer = new CGRenderer({ lang: 'ko', progress: { isUnlocked: () => true } });
    renderer.openModal('ending_perfect_seoyeon');
  });
  const image = page.locator('#cg-modal-image');
  await expect(image).toHaveClass(/cg-image-loaded/);
  await expect(image).toBeVisible();
  expect(await image.evaluate(img => img.naturalWidth)).toBeGreaterThan(0);
});
