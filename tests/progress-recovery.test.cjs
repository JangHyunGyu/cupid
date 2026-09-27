'use strict';
const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function engine() {
    const context = { window: {}, console: { error() {} }, document: { querySelectorAll: () => [] } };
    vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../assets/js/modules/GameEngine.js'), 'utf8'), context);
    const instance = Object.create(context.window.GameEngine.prototype);
    instance.reports = [];
    instance._reportCaughtError = (...args) => instance.reports.push(args);
    return instance;
}
const conflict = () => Object.assign(new Error('stale'), { name: 'ProgressConflictError' });

test('stale dialogue actions restore once and do not replay or accept input during recovery', async () => {
    const game = engine();
    let restored = 0;
    let replayed = 0;
    let finish;
    game.continueGame = async options => {
        assert.equal(options.requireSave, true);
        restored++;
        await new Promise(resolve => { finish = resolve; });
    };
    const recovery = game._handleAsyncError('dialogue click', conflict());
    assert.equal(game._handleAsyncError('dialogue click', conflict()), recovery);
    assert.equal(game._runAsync('next click', () => replayed++), recovery);
    await Promise.resolve();
    finish();
    await recovery;
    assert.equal(restored, 1);
    assert.equal(replayed, 0);
    assert.equal(game.reports.length, 0);
    assert.equal(game._progressRecovery, null);
    await game._runAsync('fresh click', () => replayed++);
    assert.equal(replayed, 1);
});

test('failed recovery is reported once without recursion and never starts a new game', async () => {
    const game = engine();
    let newGames = 0;
    game.saveManager = { load: () => null };
    game.startNewGame = async () => { newGames++; };
    await game._handleAsyncError('dialogue click', conflict());
    assert.equal(newGames, 0);
    assert.equal(game.reports.length, 1);
    assert.equal(game.reports[0][2], 'progress_recovery_failed');
    assert.equal(game._progressRecovery, null);
});

test('ordinary errors keep reporting and a second conflict during restore does not loop', async () => {
    const game = engine();
    game._handleAsyncError('chat send', new Error('offline'));
    assert.equal(game.reports[0][2], 'game_engine_async_error');
    game.continueGame = async () => { throw conflict(); };
    await game._handleAsyncError('dialogue click', conflict());
    assert.equal(game.reports.length, 2);
    assert.equal(game.reports[1][2], 'progress_recovery_failed');
});
