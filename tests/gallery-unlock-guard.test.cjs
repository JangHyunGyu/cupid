const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

function loadStore() {
    const saved = new Map();
    const sandbox = { console, window: {} };
    sandbox.window.CupidStorage = {
        getItem: key => saved.get(key) || null,
        setItem: (key, value) => saved.set(key, String(value))
    };
    vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../assets/js/gallery-progress.js'), 'utf8'), sandbox);
    return { store: sandbox.window.CupidGalleryStore, saved };
}

test('a filled unlock slot is removed on the next save and on reload', () => {
    const { store, saved } = loadStore();
    const progress = {
        characters: { seyoun: { maxAffinity: 10, currentAffinity: 4, freeTalkCount: 2, met: true } },
        cg: {},
        endings: {},
        bgm: { intro: { unlocked: true } }
    };
    store.commit(progress);
    assert.equal(progress.affinitySealVersion, 2);
    progress.cg.ending_perfect_seoyeon = { unlocked: true };
    progress.characters.seyoun.freeTalkCount = 30;
    progress.characters.seyoun.unlocked = true;
    store.commit(progress);
    assert.equal(progress.cg.ending_perfect_seoyeon, undefined);
    assert.equal(progress.characters.seyoun.freeTalkCount, 2);
    assert.equal(progress.characters.seyoun.unlocked, false);
    assert.equal(progress.characters.seyoun.maxAffinity, 10);

    const tampered = JSON.parse(saved.get('cupid_gallery'));
    tampered.cg.ending_perfect_yuna = { unlocked: true };
    saved.set('cupid_gallery', JSON.stringify(tampered));
    const reloaded = store.sanitize(JSON.parse(saved.get('cupid_gallery')));
    assert.equal(reloaded.cg.ending_perfect_yuna, undefined);
    assert.equal(reloaded.characters.seyoun.maxAffinity, 0);
});
