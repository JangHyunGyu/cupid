const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const sandbox = { window: { GAME_LANG: 'ko' }, console };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../assets/js/modules/StateManager.js'), 'utf8')
    + '\nglobalThis.StateManager = StateManager;', sandbox);

test('direct affinity assignment does not change the score', () => {
    const state = new sandbox.StateManager();
    state.stats.Dain.affinity = 100;
    assert.equal(state.getAffinity('Dain'), 0);
    assert.equal(state.changeAffinity('Dain', 3), 3);
    assert.equal(state.getAffinity('Dain'), 3);
    state.stats = { Dain: { affinity: 100 } };
    state.restoreCommittedAffinities({ Dain: { affinity: 3 }, Yuna: { affinity: 9 } });
    assert.equal(state.getAffinity('Dain'), 3);
    assert.equal(state.stats.Dain.affinity = 80, 80);
    assert.equal(state.getAffinity('Dain'), 3);
});
