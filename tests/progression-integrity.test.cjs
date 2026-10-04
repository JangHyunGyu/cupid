const test = require('node:test');
const assert = require('node:assert/strict');
const createIntegrity = require('../assets/js/progression-integrity.js');
const clone = value => JSON.parse(JSON.stringify(value));
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
function guardedSetup(locks) {
    const data = new Map();
    const storage = { getItem: key => data.get(key) || null, setItem: (key, value) => data.set(key, value) };
    const api = createIntegrity({ storage, locks, crypto: require('node:crypto').webcrypto });
    const window = { GAME_LANG: 'en', CupidProgressIntegrity: api };
    vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../assets/js/modules/StateManager.js'), 'utf8'),
        { window, console: { log() {} } });
    const state = new window.StateManager();
    api.start(state);
    function commitTurn(key, amount = 3) {
        assert.equal(window.CupidAffinityGate.commitKey(), key);
        assert.equal(window.CupidAffinityGate.grant('Seoyeon', amount), true);
        return state.changeAffinity('Seoyeon', amount);
    }
    return { window, state, api, data, commitTurn };
}

for (const mode of ['web-lock', 'fallback']) {
    test(`queued affinity commits keep their own grant and receipt (${mode})`, async () => {
        const pending = [];
        const locks = mode === 'web-lock' ? { request: (_, options, operation) => new Promise((resolve, reject) => {
            assert.equal(options.mode, 'exclusive');
            pending.push(() => { try { resolve(operation()); } catch (error) { reject(error); } });
        }) } : undefined;
        const h = guardedSetup(locks);
        const firstKey = 'talk:lunch:0';
        const secondKey = 'talk:lunch:1';
        const first = h.state.commitProgressEvent(firstKey, () => h.commitTurn(firstKey));
        const second = h.state.commitProgressEvent(secondKey, () => h.commitTurn(secondKey));
        const results = Promise.allSettled([first, second]);
        assert.equal(h.window.CupidAffinityGate.commitKey(), '', 'queued work has no grant');
        if (locks) { pending.shift()(); await first; pending.shift()(); }
        assert.deepEqual((await results).map(result => result.status), ['fulfilled', 'fulfilled']);
        assert.equal(h.state.getAffinity('Seoyeon'), 6);
        assert.equal(h.state.progressionRevision, 2);
        assert.deepEqual(Object.keys(JSON.parse(h.data.get('cupid_progress_integrity_v1')).receipts), [firstKey, secondKey]);
        assert.equal(h.window.CupidAffinityGate.commitKey(), '');
        assert.equal(h.state.changeAffinity('Seoyeon', 3), 6, 'no leftover grant');
    });
}

test('guarded commits clean up failed grants and apply retried turns exactly once', async () => {
    const h = guardedSetup();
    function commitTurn() {
        h.window.CupidAffinityGate.grant('Seoyeon', 3);
        h.state.changeAffinity('Seoyeon', 3);
        throw new Error('turn failed');
    }
    await assert.rejects(h.state.commitProgressEvent('talk:lunch:0', commitTurn), /turn failed/);
    assert.equal(h.state.getAffinity('Seoyeon'), 0);
    assert.equal(h.window.CupidAffinityGate.commitKey(), '');
    const results = await Promise.all([
        h.state.commitProgressEvent('talk:lunch:0', () => h.commitTurn('talk:lunch:0')),
        h.state.commitProgressEvent('talk:lunch:0', () => h.commitTurn('talk:lunch:0'))
    ]);
    assert.deepEqual(results.map(result => result.applied), [true, false]);
    assert.equal(h.state.getAffinity('Seoyeon'), 3);
});
function setup() {
    const data = new Map();
    const storage = { getItem: key => data.get(key) || null, setItem: (key, value) => data.set(key, value) };
    const api = createIntegrity({ storage, crypto: require('node:crypto').webcrypto });
    const state = { stats: { Seoyeon: { affinity: 0 } }, flags: {}, currentDay: 1, freeTalkCheckpoint: null };
    api.start(state);
    const save = { currentSceneId: 'start', gameState: clone(state) };
    api.save(save);
    return { api, storage, state, save };
}
test('a scene or choice applies at most once in a run', () => {
    const { api, state } = setup();
    const apply = () => { state.stats.Seoyeon.affinity += 5; return 'next'; };
    assert.equal(api.commit(state, 'choice:opening', apply, { transition: true }).applied, true);
    assert.equal(api.commit(state, 'choice:opening', apply, { transition: true }).applied, false);
    assert.equal(state.stats.Seoyeon.affinity, 5);
});
test('restoring an old save preserves committed points, consumed turns and the pending destination', () => {
    const { api, state, save } = setup();
    api.commit(state, 'talk:lunch:0', () => { state.stats.Seoyeon.affinity += 3; },
        { checkpoint: { sceneId: 'lunch', turns: 1, completed: false, lastReply: { content: 'reply' } } });
    assert.equal(api.restoreSave(save), true);
    assert.equal(save.gameState.stats.Seoyeon.affinity, 3);
    assert.equal(save.gameState.freeTalkCheckpoint.turns, 1);
    const restored = clone(save.gameState);
    assert.equal(api.commit(restored, 'talk:lunch:0', () => { restored.stats.Seoyeon.affinity += 3; }).applied, false);
    api.commit(restored, 'choice:lunch', () => 'after_lunch', { transition: true });
    assert.equal(api.restoreSave(save), true);
    assert.equal(save.currentSceneId, 'after_lunch');
    assert.equal(save.pendingEntryEffects, true);
});
test('stale tabs cannot award points or overwrite the newer save', () => {
    const { api, storage, state, save } = setup();
    const other = createIntegrity({ storage });
    const stale = clone(state);
    api.commit(state, 'talk:lunch:0', () => { state.stats.Seoyeon.affinity = 3; });
    assert.throws(() => other.commit(stale, 'talk:lunch:0', () => { stale.stats.Seoyeon.affinity = 3; }), { name: 'ProgressConflictError' });
    assert.equal(other.save({ ...save, gameState: stale }), false);
    other.restoreState(stale);
    assert.equal(stale.stats.Seoyeon.affinity, 3);
    assert.equal(other.commit(stale, 'talk:lunch:0', () => {}).applied, false);
});
test('a modified save cannot replace the protected score at the same revision', () => {
    const { api, save } = setup();
    save.gameState.stats.Seoyeon.affinity = 100;
    assert.equal(api.restoreSave(save), true);
    assert.equal(save.gameState.stats.Seoyeon.affinity, 0);
});
test('new game resets receipt ownership and invalidates the previous tab', () => {
    const { api, state } = setup();
    api.commit(state, 'scene:start', () => { state.stats.Seoyeon.affinity = 5; });
    const previous = clone(state);
    const fresh = { stats: { Seoyeon: { affinity: 0 } }, flags: {}, currentDay: 1 };
    api.start(fresh);
    assert.throws(() => api.commit(previous, 'scene:next', () => {}), { name: 'ProgressConflictError' });
    assert.equal(api.commit(fresh, 'scene:start', () => { fresh.stats.Seoyeon.affinity = 5; }).applied, true);
});
test('failed mutations roll back critical state without consuming a receipt', () => {
    const { api, state } = setup();
    assert.throws(() => api.commit(state, 'scene:start', () => { state.stats.Seoyeon.affinity = 100; throw new Error('failed'); }));
    assert.equal(state.stats.Seoyeon.affinity, 0);
    assert.equal(api.commit(state, 'scene:start', () => {}).applied, true);
});

test('a rewritten progress record loses its affinity', () => {
    const { api, storage, state } = setup();
    const saved = JSON.parse(storage.getItem('cupid_progress_integrity_v1'));
    saved.snapshot.stats.Seoyeon.affinity = 100;
    storage.setItem('cupid_progress_integrity_v1', JSON.stringify(saved));
    state.stats.Seoyeon.affinity = 12;
    api.restoreState(state);
    assert.equal(state.stats.Seoyeon.affinity, 0);
});

test('a console edit is discarded before the next reward and is not saved', () => {
    const { api, state, save } = setup();
    state.stats.Seoyeon.affinity = 100;
    assert.equal(api.commit(state, 'scene:next', () => { state.stats.Seoyeon.affinity += 3; }).applied, true);
    assert.equal(state.stats.Seoyeon.affinity, 3);
    const cheated = clone(state);
    cheated.stats.Seoyeon.affinity = 100;
    assert.equal(api.save({ ...save, gameState: cheated }), true);
    assert.equal(cheated.stats.Seoyeon.affinity, 3);
});

test('a choice routed through intermediate nodes resumes at the final arrived scene', () => {
    const { api, state, save } = setup();
    api.commit(state, 'choice:start', () => 'router', { transition: true });
    api.commit(state, 'scene:actual', () => {}, { arrivedScene: 'actual' });
    api.save({ ...save, currentSceneId: 'actual', gameState: state });
    const restored = clone(save);
    api.restoreSave(restored);
    assert.equal(restored.currentSceneId, 'actual');
    assert.notEqual(restored.pendingEntryEffects, true);
});
