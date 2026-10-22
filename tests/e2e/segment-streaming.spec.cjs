const { test, expect } = require('@playwright/test');
const { installAffinitySeeder } = require('./helpers/affinity-seed.cjs');

for (const interrupted of [false, true]) test(`segment stream displays before final and ${interrupted ? 'keeps affinity on interruption' : 'commits affinity after final'}`, async ({ page }) => {
  test.setTimeout(60000);
  await page.route('**/*', async route => {
    if (route.request().method() === 'POST') return route.fulfill({ json: { ok: true } });
    return route.continue();
  });
  await installAffinitySeeder(page);
  await page.goto('/game-en.html');
  await page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
  await page.evaluate(async () => {
    const e = window.gameEngine;
    e.dialogueSystem.typingSpeed = 0;
    window.cupidTestSeedAffinities({ Seoyeon: 10 });
    await e.renderScene('lunch_seo_freetalk');
  });
  await page.waitForFunction(() => !window.gameEngine.dialogueSystem.isCurrentlyTyping());
  const before = await page.evaluate(() => ({ affinity: window.gameEngine.stateManager.getAffinity('Seoyeon'), turns: window.gameEngine.freeTalkSystem.freeTalkTurns }));
  await page.evaluate(() => {
    const realFetch = window.fetch.bind(window);
    window.__segmentCalls = 0;
    window.fetch = async (url, init = {}) => {
      let body; try { body = JSON.parse(init.body); } catch {}
      if (body?.requestType !== 'character') return realFetch(url, init);
      window.__segmentCalls++;
      window.__segmentRequest = body;
      const encoder = new TextEncoder();
      return new Response(new ReadableStream({ start(controller) {
        const send = value => controller.enqueue(encoder.encode(`data: ${JSON.stringify(value)}\n\n`));
        const segments = [{ type: 'dialogue', text: 'The first line is already here.' }];
        send({ segmentPreview: true, turnId: body.turnId, content: JSON.stringify({ segments, displayFallback: { empty: false, partial: true } }) });
        window.__finishSegments = interrupted => {
          if (interrupted) controller.error(new TypeError('Network interrupted'));
          else {
            send({ final: true, segmentStream: true, turnId: body.turnId, choices: [{ message: { content: JSON.stringify({ segments, affinity: 2, expression: 'neutral', forcedSexualViolation: 'none' }) }, finish_reason: 'stop' }] });
            controller.close();
          }
        };
      } }), { headers: { 'content-type': 'text/event-stream' } });
    };
    const e = window.gameEngine;
    const commit = e.stateManager.commitProgressEvent.bind(e.stateManager);
    window.__segmentCommits = 0;
    e.stateManager.commitProgressEvent = (...args) => { window.__segmentCommits++; return commit(...args); };
    document.getElementById('chat-input').value = 'Continue.';
    window.__segmentDone = false;
    window.__segmentWork = e.freeTalkSystem.sendChatMessage(id => e.sceneRenderer.getScene(id)).then(() => { window.__segmentDone = true; });
  });
  await expect(page.locator('#dialogue-box')).toContainText('The first line is already here.');
  expect(await page.evaluate(() => window.__segmentDone)).toBe(false);
  expect(await page.evaluate(() => window.__segmentRequest.responseStreaming)).toBe('segments-v1');
  expect(await page.evaluate(() => window.gameEngine.stateManager.getAffinity('Seoyeon'))).toBe(before.affinity);
  expect(await page.evaluate(() => window.__segmentCommits)).toBe(0);
  await page.evaluate(interrupted => window.__finishSegments(interrupted), interrupted);
  await page.waitForFunction(() => window.__segmentDone);
  expect(await page.evaluate(() => window.__segmentCalls)).toBe(1);
  expect(await page.evaluate(() => window.gameEngine.stateManager.getAffinity('Seoyeon'))).toBe(before.affinity + (interrupted ? 0 : 2));
  await expect(page.locator('#dialogue-box')).toContainText('The first line is already here.');
});
