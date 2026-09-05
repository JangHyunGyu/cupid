'use strict';

const { expect, test } = require('@playwright/test');

async function ready(page) {
    await page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
}

test('reload and landing Continue preserve authored rewards and the current scene', async ({ page }) => {
    await page.goto('/game.html');
    await ready(page);
    const expected = await page.evaluate(async () => {
        const engine = window.gameEngine;
        engine.dialogueSystem.typingSpeed = 0;
        engine.stateManager.stats.Dain.affinity = 20;
        await engine.renderScene('lunch_dain_2');
        return { affinity: engine.stateManager.getAffinity('Dain'), scene: engine.sceneRenderer.currentSceneId };
    });
    expect(expected.affinity).toBeGreaterThan(20);
    for (let i = 0; i < 2; i++) {
        await page.reload();
        await ready(page);
        expect(await page.evaluate(() => ({
            affinity: window.gameEngine.stateManager.getAffinity('Dain'),
            scene: window.gameEngine.sceneRenderer.currentSceneId
        }))).toEqual(expected);
    }
    await page.goto('/index.html');
    await page.locator('#continue-btn').click();
    await ready(page);
    expect(await page.evaluate(() => ({
        affinity: window.gameEngine.stateManager.getAffinity('Dain'),
        scene: window.gameEngine.sceneRenderer.currentSceneId
    }))).toEqual(expected);
});

test('a saved authored penalty and its flags are not applied again on reload', async ({ page }) => {
    await page.goto('/game.html');
    await ready(page);
    const expected = await page.evaluate(async () => {
        const e = window.gameEngine;
        e.dialogueSystem.typingSpeed = 0;
        await e._getSceneWithLazyContent('after3_seo_freetalk');
        const [id, scene] = Object.entries(SCENARIO[3]).find(([id, n]) =>
            !n.type && !n.routeBeforeRender && !n.affinityGuard && n.next &&
            n.stats && Object.values(n.stats).some(s => s.affinity < 0)
        );
        const char = Object.keys(scene.stats).find(key => scene.stats[key].affinity < 0);
        e.stateManager.stats[char].affinity = 60;
        await e.renderScene(id);
        return { id: e.sceneRenderer.currentSceneId, char, affinity: e.stateManager.getAffinity(char), flags: e.stateManager.flags };
    });
    expect(expected.affinity).toBeLessThan(60);
    await page.reload();
    await ready(page);
    expect(await page.evaluate(char => ({
        id: window.gameEngine.sceneRenderer.currentSceneId,
        char,
        affinity: window.gameEngine.stateManager.getAffinity(char),
        flags: window.gameEngine.stateManager.flags
    }), expected.char)).toEqual(expected);
});

test('individual dialogue reload restores committed turns, reply, medium and location', async ({ page }) => {
    await page.goto('/game.html');
    await ready(page);
    await page.evaluate(async () => {
        const e = window.gameEngine;
        e.dialogueSystem.typingSpeed = 0;
        e.stateManager.stats.Seoyeon.affinity = 70;
        await e.renderScene('after3_seo_freetalk');
        const talk = e.freeTalkSystem;
        const reply = { role: 'assistant', content: '오늘은 조금 더 얘기해도 돼.', speakerId: 'Seoyeon', speakerName: '서연' };
        talk.freeTalkHistory.push({ role: 'user', content: '조금 더 있을게.' }, reply);
        e.stateManager.setChatMemory('Seoyeon', talk.freeTalkHistory);
        talk.freeTalkTurns = 1;
        talk._commitFreeTalkCheckpoint(reply);
        e.saveGame();
    });
    await page.reload();
    await ready(page);
    await expect(page.locator('#message')).toHaveText('오늘은 조금 더 얘기해도 돼.');
    const restored = await page.evaluate(() => {
        const t = window.gameEngine.freeTalkSystem;
        return {
            scene: t.currentSceneId, turns: t.freeTalkTurns, max: t.currentMaxTurns,
            remote: t._isRemote, history: t.freeTalkHistory,
            displayed: document.querySelector('#message').textContent
        };
    });
    expect(restored.scene).toBe('after3_seo_freetalk');
    expect(restored.turns).toBe(1);
    expect(restored.max).toBe(3);
    expect(restored.remote).toBe(false);
    expect(restored.displayed).toContain('오늘은 조금 더 얘기해도 돼.');
    expect(restored.history.filter(m => m.content === '오늘은 조금 더 얘기해도 돼.')).toHaveLength(1);
    const dynamicPrompt = restored.history.find(m => m.role === 'system').content.split('===CACHE_BOUNDARY===')[1];
    expect(dynamicPrompt).toContain('학생회실');
});

test('group dialogue reload retains its speakers despite a changed affinity ranking', async ({ page }) => {
    await page.goto('/game.html');
    await ready(page);
    const original = await page.evaluate(async () => {
        const e = window.gameEngine;
        e.dialogueSystem.typingSpeed = 0;
        e.stateManager.stats.Dain.affinity = 50;
        e.stateManager.stats.Yuna.affinity = 40;
        e.stateManager.stats.Seoyeon.affinity = 30;
        await e.renderScene('after2_group_dain_companion');
        const t = e.freeTalkSystem;
        const ids = t.groupParticipants.map(p => p.id);
        t.freeTalkTurns = 1;
        t._commitFreeTalkCheckpoint({ content: '자료도 여기 있어.', speakerId: 'Yuna', speakerName: '유나' });
        e.stateManager.stats.Seoyeon.affinity = 90;
        e.saveGame();
        return ids;
    });
    expect(original).toEqual(['Dain', 'Yuna']);
    await page.reload();
    await ready(page);
    await expect(page.locator('#message')).toHaveText('자료도 여기 있어.');
    expect(await page.evaluate(() => ({
        participants: window.gameEngine.freeTalkSystem.groupParticipants.map(p => p.id),
        turns: window.gameEngine.freeTalkSystem.freeTalkTurns,
        displayed: document.querySelector('#message').textContent
    }))).toEqual({ participants: original, turns: 1, displayed: '자료도 여기 있어.' });
});

test('school staff confrontation uses the missed check-in, with distinct speaker roles', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/game.html');
    await ready(page);
    const prompts = await page.evaluate(async () => {
        const e = window.gameEngine;
        e.dialogueSystem.typingSpeed = 0;
        e.stateManager.flags = {
            day4_counteroffer_target_teacher: true,
            day4_took_dain_counteroffer: true,
            day5_abandoned_teacher: true,
            day5_confessed_counteroffer: true
        };
        await e.renderScene('morning5_counteroffer_group_talk');
        return {
            participants: e.freeTalkSystem.groupParticipants.map(p => p.id),
            prompt: e.freeTalkSystem._buildCurrentGroupSystemPrompt(
                await e._getSceneWithLazyContent('morning5_counteroffer_group_talk'), 'ko'
            )
        };
    });
    expect(prompts.participants).toEqual(['Teacher', 'Dain']);
    const [stable, dynamic] = prompts.prompt.split('===CACHE_BOUNDARY===');
    expect(stable).toContain('학생은 교직원에게 존댓말');
    expect(stable).not.toContain('원래 마음을 주던 상대이자 방금 배신을 알게 된 사람');
    expect(dynamic).toContain('학교 앱');
    expect(dynamic).toContain('교직원은 연애 경쟁자가 아니다');
    expect(await page.locator('.group-freetalk-participant').count()).toBe(2);
    await expect(page.locator('#chat-send svg')).toBeVisible();
    const send = await page.locator('#chat-send').boundingBox();
    const skip = await page.locator('#chat-skip-btn').boundingBox();
    expect(send.width).toBeLessThanOrEqual(45);
    expect(send.x + send.width).toBeLessThanOrEqual(skip.x);
});
