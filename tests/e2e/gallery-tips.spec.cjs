const { test, expect } = require('@playwright/test');

const PAGES = [
  ['ko', '/gallery.html'], ['en', '/gallery-en.html'], ['es', '/gallery-es.html'], ['ja', '/gallery-ja.html'],
  ['fr', '/gallery-fr.html'], ['de', '/gallery-de.html'], ['pt', '/gallery-pt.html'], ['zh', '/gallery-zh.html']
];

async function openTips(page, url) {
  await page.route('**/api/gallery/unlocks', route => route.fulfill({ json: { assets: [] } }));
  await page.goto(url);
  await page.waitForFunction(() => !!window.gallery?.ui?.tips);
  await page.locator('.tab-btn[data-tab="tips"]').click();
  await expect(page.locator('#tab-tips')).toBeVisible();
}

const noHorizontalOverflow = page => page.evaluate(() => {
  const doc = document.documentElement;
  return { scroll: doc.scrollWidth, client: doc.clientWidth, body: document.body.scrollWidth };
});

test('tips tab is public: lists general and character tips without any save data', async ({ page }) => {
  await openTips(page, '/gallery.html');
  await expect(page.locator('.tip-card:not(.is-locked)')).toHaveCount(13);
  await expect(page.locator('.tip-card.is-locked')).toHaveCount(1);
  await expect(page.locator('.tips-group[data-tip-group="general"] .tip-card')).toHaveCount(8);
  await expect(page.locator('.tip-card[data-tip-id="teacher"]')).toBeVisible();
  await expect(page.locator('.tip-card[data-tip-id="nurse"]')).toBeVisible();
  await expect(page.locator('.tip-card.is-locked .tip-card__title')).toHaveText('???');
});

test('tip popup: dialog roles, focus trap, ESC, backdrop click, scroll lock and focus return', async ({ page }) => {
  await openTips(page, '/gallery.html');
  const card = page.locator('.tip-card[data-tip-id="group"]');
  await card.focus();
  await page.keyboard.press('Enter');

  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog).toHaveAttribute('aria-modal', 'true');
  await expect(page.locator('#tip-modal-title')).toHaveText('그룹 대화');
  await expect(page.locator('#tip-modal-close')).toBeFocused();
  expect(await page.evaluate(() => getComputedStyle(document.body).overflow)).toBe('hidden');
  expect(await page.evaluate(() => document.querySelector('main').hasAttribute('inert'))).toBe(true);

  // Tab / Shift+Tab never leave the dialog
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press('Tab');
    expect(await page.evaluate(() => document.getElementById('tip-modal').contains(document.activeElement))).toBe(true);
  }
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press('Shift+Tab');
    expect(await page.evaluate(() => document.getElementById('tip-modal').contains(document.activeElement))).toBe(true);
  }

  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await expect(card).toBeFocused();
  expect(await page.evaluate(() => getComputedStyle(document.body).overflow)).not.toBe('hidden');
  expect(await page.evaluate(() => document.querySelector('main').hasAttribute('inert'))).toBe(false);

  // backdrop click closes, click inside the dialog does not
  await card.click();
  await expect(dialog).toBeVisible();
  await page.locator('#tip-modal-title').click();
  await expect(dialog).toBeVisible();
  await page.mouse.click(2, 2);
  await expect(dialog).toBeHidden();

  // close buttons
  await card.click();
  await page.locator('#tip-modal-done').click();
  await expect(dialog).toBeHidden();
});

test('a met character unlocks the spoiler-gated tip', async ({ page }) => {
  await openTips(page, '/gallery.html');
  await page.evaluate(() => {
    window.gallery.ui.progress.isMet = id => id === 'haeun' || true;
    window.gallery.ui.renderTips();
  });
  await expect(page.locator('.tip-card.is-locked')).toHaveCount(0);
  await page.locator('.tip-card[data-tip-id="haeun"]').click();
  await expect(page.locator('#tip-modal-title')).toHaveText('하은');
});

for (const [lang, url] of PAGES) {
  test(`390px mobile layout has no horizontal overflow and the popup fits (${lang})`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await openTips(page, url);
    let size = await noHorizontalOverflow(page);
    expect(size.scroll, `${lang} list scrollWidth`).toBeLessThanOrEqual(size.client);
    expect(size.body, `${lang} list body`).toBeLessThanOrEqual(size.client);

    const longest = await page.evaluate(() => {
      const items = window.GalleryTipsData.items.filter(item => item.id !== 'haeun');
      return items.map(item => item.id);
    });
    for (const id of longest) {
      await page.locator(`.tip-card[data-tip-id="${id}"]`).click();
      await page.waitForFunction(() => getComputedStyle(document.getElementById('tip-modal')).transform === 'none'
        && document.getElementById('tip-modal-backdrop').classList.contains('is-open'));
      const box = await page.locator('#tip-modal').boundingBox();
      expect(box.x, `${lang}/${id} x`).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width, `${lang}/${id} right`).toBeLessThanOrEqual(390.5);
      expect(box.y + box.height, `${lang}/${id} bottom`).toBeLessThanOrEqual(844.5);
      expect(box.y, `${lang}/${id} top`).toBeGreaterThanOrEqual(0);
      size = await noHorizontalOverflow(page);
      expect(size.scroll, `${lang}/${id} scrollWidth`).toBeLessThanOrEqual(size.client);
      const inner = await page.evaluate(() => {
        const body = document.getElementById('tip-modal-body');
        return { overflowX: body.scrollWidth - body.clientWidth };
      });
      expect(inner.overflowX, `${lang}/${id} body overflow`).toBeLessThanOrEqual(0);
      await page.keyboard.press('Escape');
    }
  });
}

test('desktop layout shows two columns and a centered dialog', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await openTips(page, '/gallery-en.html');
  const cols = await page.evaluate(() => getComputedStyle(document.querySelector('.tips-list')).gridTemplateColumns.split(' ').length);
  expect(cols).toBe(2);
  await page.locator('.tip-card[data-tip-id="perfect"]').click();
  await page.waitForFunction(() => getComputedStyle(document.getElementById('tip-modal')).transform === 'none');
  const box = await page.locator('#tip-modal').boundingBox();
  expect(Math.abs(box.x + box.width / 2 - 640)).toBeLessThan(2);
  expect(box.width).toBeLessThanOrEqual(560);
});

test('the other tabs keep working after visiting the tips tab', async ({ page }) => {
  await openTips(page, '/gallery.html');
  await page.locator('.tab-btn[data-tab="characters"]').click();
  await expect(page.locator('#tab-characters')).toBeVisible();
  await expect(page.locator('#tab-tips')).toBeHidden();
  await expect(page.locator('.character-card').first()).toBeVisible();
  await page.locator('.tab-btn[data-tab="endings"]').click();
  await expect(page.locator('.ending-card').first()).toBeVisible();
});
