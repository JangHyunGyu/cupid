'use strict';
const { expect, test } = require('@playwright/test');

async function loadRuntime(page) {
    await page.goto('/__cupid_e2e_health');
    for (const file of ['storage-adapter.js', 'progression-integrity.js', 'modules/StateManager.js',
        'modules/SaveManager.js', 'freetalk-core.js', 'modules/FreeTalkSystem.js']) {
        await page.addScriptTag({ url: '/assets/js/' + file });
    }
}

test('native Web Locks preserve queued story affinity, save/reload and duplicate receipts', async ({ page }) => {
    await loadRuntime(page);
    const result = await page.evaluate(async () => {
        const state = new window.StateManager();
        state.resetForNewGame();
        const talk = Object.create(window.FreeTalkSystem.prototype);
        Object.assign(talk, { stateManager: state, currentSceneId: 'lunch', currentMaxTurns: 3,
            charNameMap: {}, uiManager: { showAffinityChange() {} },
            galleryManager: { updateMaxAffinity() {}, checkAffinityUnlock() {} } });
        const scene = { name: 'Seoyeon', type: 'free_talk' };
        const seen = [];
        const commitTurn = () => {
            seen.push(window.CupidAffinityGate.commitKey());
            return talk.applyAffinity(3, scene, 'Thank you for your help.').change;
        };
        const commits = await Promise.all([0, 1].map(turn => state.commitProgressEvent(`talk:lunch:${turn}`, commitTurn)));
        const duplicate = await state.commitProgressEvent('talk:lunch:1', commitTurn);
        const save = new window.SaveManager();
        save.save('lunch', '', {}, state.exportState());
        return { locks: !!navigator.locks, score: state.getAffinity('Seoyeon'), seen,
            deltas: commits.map(commit => commit.value), duplicate: duplicate.applied,
            gate: window.CupidAffinityGate.commitKey() };
    });
    expect(result).toEqual({ locks: true, score: 6, seen: ['talk:lunch:0', 'talk:lunch:1'],
        deltas: [3, 3], duplicate: false, gate: '' });
    await page.reload();
    await loadRuntime(page);
    const restored = await page.evaluate(async () => {
        const save = new window.SaveManager().load();
        const state = new window.StateManager();
        state.importState(save.gameState);
        const duplicate = await state.commitProgressEvent('talk:lunch:1', () => { throw new Error('duplicate replayed'); });
        const stale = state.exportState();
        state.resetForNewGame();
        const old = new window.StateManager();
        old.progressionRunId = stale.progressionRunId;
        old.progressionRevision = stale.progressionRevision;
        let conflict;
        try { await old.commitProgressEvent('talk:lunch:2', () => {}); } catch (error) { conflict = error.name; }
        return { score: save.gameState.stats.Seoyeon.affinity, duplicate: duplicate.applied,
            conflict, fresh: state.getAffinity('Seoyeon'), gate: window.CupidAffinityGate.commitKey() };
    });
    expect(restored).toEqual({ score: 6, duplicate: false, conflict: 'ProgressConflictError', fresh: 0, gate: '' });
});

test('quota errors preserve old receipts and native identity and recover pending affinity', async ({ page }) => {
    await loadRuntime(page);
    const result = await page.evaluate(async () => {
        const state = new window.StateManager();
        state.resetForNewGame();
        window.CupidStorage.setItem('cupid_device_id', 'audit-device');
        const commitTurn = () => {
            window.CupidAffinityGate.grant('Seoyeon', 3);
            state.changeAffinity('Seoyeon', 3);
        };
        await state.commitProgressEvent('talk:lunch:0', commitTurn);
        const original = Storage.prototype.setItem;
        let beforeRecovery;
        try {
            Storage.prototype.setItem = function () { throw new DOMException('Full', 'QuotaExceededError'); };
            window.CupidStorage.setItem('unrelated', 'failed');
            const duplicate = await state.commitProgressEvent('talk:lunch:0', commitTurn);
            await state.commitProgressEvent('talk:lunch:1', commitTurn);
            beforeRecovery = { duplicate: duplicate.applied, score: state.getAffinity('Seoyeon'),
                device: window.CupidStorage.getItem('cupid_device_id') };
        } finally { Storage.prototype.setItem = original; }
        window.CupidProgressIntegrity.restoreState(state);
        new window.SaveManager().save('lunch', '', {}, state.exportState());
        return beforeRecovery;
    });
    expect(result).toEqual({ duplicate: false, score: 6, device: 'audit-device' });
    await page.reload();
    await loadRuntime(page);
    expect(await page.evaluate(() => new window.SaveManager().load().gameState.stats.Seoyeon.affinity)).toBe(6);
});
