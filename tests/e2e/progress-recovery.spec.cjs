const { test, expect } = require('@playwright/test');

test('a stale dialogue action resumes the latest committed destination without replaying rewards', async ({ page }) => {
    await page.route('**/*', route => route.request().method() === 'POST'
        ? route.fulfill({ json: { ok: true } }) : route.continue());
    await page.goto('/game-en.html');
    await page.waitForFunction(() => window.gameEngine && window.gameScriptsLoaded && !window.gameEngine._isRendering);
    const result = await page.evaluate(async () => {
        const engine = window.gameEngine;
        engine.dialogueSystem.typingSpeed = 0;
        SCENARIO[1].recovery_before = { name: 'Test', text: 'Before', next: 'recovery_after' };
        SCENARIO[1].recovery_after = { name: 'Test', text: 'After', stats: { Seoyeon: { affinity: 2 } } };
        await engine.renderScene('recovery_before');
        const latest = new window.StateManager();
        latest.importState(engine.stateManager.exportState());
        await latest.commitProgressEvent('test:other-tab-transition', () => {
            latest.setFlag('recovery_latest', true);
            return 'recovery_after';
        }, { transition: true });
        let staleOperations = 0;
        await engine._runAsync('dialogue click', () => engine.stateManager.commitProgressEvent('test:stale', () => { staleOperations++; }));
        const first = { scene: engine.sceneRenderer.currentSceneId, affinity: engine.stateManager.getAffinity('Seoyeon') };
        await engine.renderScene('recovery_after', { restoring: true });
        return {
            first, staleOperations, latestFlag: engine.stateManager.flags.recovery_latest,
            affinity: engine.stateManager.getAffinity('Seoyeon'), recovering: Boolean(engine._progressRecovery),
            savedScene: engine.saveManager.load().currentSceneId
        };
    });
    expect(result).toEqual({ first: { scene: 'recovery_after', affinity: 2 }, staleOperations: 0,
        latestFlag: true, affinity: 2, recovering: false, savedScene: 'recovery_after' });
});
