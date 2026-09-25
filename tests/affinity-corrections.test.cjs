const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { webcrypto, createHash } = require('node:crypto');
const createCorrections = require('../assets/js/affinity-corrections.js');
const root = path.resolve(__dirname, '..');
const device = 'test-target-device';
const id = 'main-route-seoyeon-20260909';
const manifest = [{ id, deviceSha256: createHash('sha256').update(device).digest('hex'), character: 'Seoyeon', galleryCharacter: 'seyoun', perfectCG: 'ending_perfect_seoyeon', perfectEnding: 'perfect_seoyeon' }];
const clone = value => JSON.parse(JSON.stringify(value));

test('baseline rollback replaces prior 99 with separate verified peak/current, once per revision', async () => {
    const next = { ...manifest[0], id: 'baseline-v2', correctedPeak: 45, correctedCurrent: -4, restoreFrom99: true };
    const data = new Map([['cupid_device_id', device]]);
    const api = createCorrections({ storage: {getItem:k=>data.get(k),setItem:(k,v)=>data.set(k,v)}, crypto:webcrypto,TextEncoder,corrections:[manifest[0],next] });
    await api.ready;
    for (const score of [99, 100]) {
        const progress = { characters:{seyoun:{maxAffinity:score,currentAffinity:score,unlocked:true,perfectEndingCleared:true}}, cg:{ending_perfect_seoyeon:{unlocked:true}},endings:{perfect_seoyeon:{unlocked:true}}, appliedAffinityCorrections:[id] };
        assert.equal(api.correctGallery(progress),true);
        assert.equal(progress.characters.seyoun.maxAffinity,45);
        assert.equal(progress.characters.seyoun.currentAffinity,-4);
        assert.equal(progress.characters.seyoun.perfectEndingCleared,undefined);
        assert.equal(progress.cg.ending_perfect_seoyeon,undefined);
        const state={stats:{Seoyeon:{affinity:score}},appliedAffinityCorrections:[id]};
        api.correctState(state);assert.equal(state.stats.Seoyeon.affinity,-4);
        state.stats.Seoyeon.affinity=12;assert.equal(api.correctState(state),false);assert.equal(state.stats.Seoyeon.affinity,12);
        progress.characters.seyoun.maxAffinity=48;assert.equal(api.correctGallery(progress),false);assert.equal(progress.characters.seyoun.maxAffinity,48);
    }
    const lower={stats:{Seoyeon:{affinity:-37}}};api.correctState(lower);assert.equal(lower.stats.Seoyeon.affinity,-37);
});

test('all five corrected perfect routes return to their own affinity checks, including credits', async () => {
    for (const [character, suffix, check] of [
        ['Seoyeon', 'seo', 'ending_aff_check_seo'], ['Yuna', 'yuna', 'ending_aff_check_yuna'],
        ['Dain', 'dain', 'ending_aff_check_dain'], ['Teacher', 'teacher', 'hidden_perfect_homeroom_check'],
        ['Nurse', 'nurse', 'hidden_perfect_nurse_check']
    ]) {
        const data = new Map([['cupid_device_id', device]]);
        const api = createCorrections({ storage: { getItem: k => data.get(k), setItem: (k,v) => data.set(k,v) },
            crypto: webcrypto, TextEncoder, corrections: [{ ...manifest[0], character }] });
        await api.ready;
        for (const scene of [`day5_${suffix}_ending_freetalk_perfect`, 'day5_credits']) {
            const save = { currentSceneId: scene, gameState: { stats: { [character]: { affinity: 100 } }, flags: { ending_perfect: true, [`isDating_${character}`]: true } } };
            assert.equal(api.correctSave(save), true);
            assert.equal(save.currentSceneId, check);
            assert.equal(save.gameState.stats[character].affinity, 99);
            assert.equal(save.gameState.flags.ending_perfect, false);
            assert.equal(save.pendingEntryEffects, true);
        }
    }
});
const gallery = () => ({
    version: 2, affinityRebalanceVersion: 1,
    characters: {
        seyoun: { maxAffinity: 100, currentAffinity: 58, met: true, unlocked: true, unlockedAt: 123, perfectEndingCleared: true, trueEndingCleared: true, freeTalkCount: 36 },
        dain: { maxAffinity: 100, currentAffinity: 100, perfectEndingCleared: true, unlocked: true }
    },
    cg: { ending_perfect_seoyeon: { unlocked: true }, ending_perfect_dain: { unlocked: true }, event_temptation_seoyeon: { unlocked: true } },
    endings: { perfect_seoyeon: { unlocked: true }, perfect_dain: { unlocked: true }, true_seoyeon: { unlocked: true } },
    bgm: { intro: { unlocked: true } }
});
async function setup(deviceId = device, values = {}) {
    const data = new Map(Object.entries({ cupid_device_id: deviceId, ...values }));
    const storage = { getItem: key => data.get(key) ?? null, setItem: (key, value) => data.set(key, String(value)) };
    const api = createCorrections({ storage, crypto: webcrypto, TextEncoder, corrections: manifest });
    await api.ready;
    return { api, data, storage };
}

test('only the matching device and character lose their peak and 100-point unlocks', async () => {
    const before = gallery();
    const h = await setup(device, { cupid_gallery: JSON.stringify(before) });
    const after = JSON.parse(h.data.get('cupid_gallery'));
    assert.equal(after.characters.seyoun.maxAffinity, 99);
    assert.equal(after.characters.seyoun.currentAffinity, 58);
    assert.equal(after.characters.seyoun.freeTalkCount, 36);
    for (const key of ['unlocked', 'unlockedAt', 'perfectEndingCleared', 'trueEndingCleared']) assert.equal(after.characters.seyoun[key], undefined);
    assert.equal(after.cg.ending_perfect_seoyeon, undefined);
    assert.equal(after.endings.perfect_seoyeon, undefined);
    assert.deepEqual(after.characters.dain, before.characters.dain);
    assert.deepEqual(after.cg.ending_perfect_dain, before.cg.ending_perfect_dain);
    assert.deepEqual(after.cg.event_temptation_seoyeon, before.cg.event_temptation_seoyeon);
    assert.deepEqual(after.endings.true_seoyeon, before.endings.true_seoyeon);
    assert.deepEqual(h.api.ids('Seoyeon'), [id]);
    assert.deepEqual(h.api.ids('Dain'), []);
    const other = await setup('unaffected-device', { cupid_gallery: JSON.stringify(before) });
    assert.equal(other.data.get('cupid_gallery'), JSON.stringify(before));
    assert.deepEqual(other.api.ids(), []);
});

test('lower current affinity stays unchanged and new 100-point achievements survive reload', async () => {
    const h = await setup();
    for (const current of [-100, -1, 0, 58, 99, 100]) {
        const progress = gallery();
        progress.characters.seyoun.currentAffinity = current;
        h.api.correctGallery(progress);
        assert.equal(progress.characters.seyoun.currentAffinity, Math.min(current, 99));
        progress.characters.seyoun.maxAffinity = 100;
        progress.characters.seyoun.currentAffinity = 100;
        progress.characters.seyoun.perfectEndingCleared = true;
        progress.cg.ending_perfect_seoyeon = { unlocked: true };
        assert.equal(h.api.correctGallery(progress), false);
        h.storage.setItem('cupid_gallery', JSON.stringify(progress));
        h.api.reconcileStorage();
        assert.deepEqual(JSON.parse(h.storage.getItem('cupid_gallery')), progress);
    }
    const restored = gallery();
    assert.equal(h.api.correctGallery(restored), true, 'an uncorrected backup must not restore the old unlocks');
    h.storage.setItem('cupid_device_id', 'different-device');
    assert.equal(h.api.correctGallery(gallery()), false);
});

test('save loading and direct state restoration preserve correction markers and other routes', async () => {
    const saved = { currentSceneId: 'day5_seo_ending_freetalk_perfect', gameState: {
        affinityRebalanceVersion: 1, stats: { Seoyeon: { affinity: 100 }, Dain: { affinity: 100 } },
        flags: { route_seoyeon: true, ending_perfect: true, isDating_Seoyeon: true }
    } };
    const h = await setup(device, { cupid_save: JSON.stringify(saved) });
    const result = JSON.parse(h.storage.getItem('cupid_save'));
    assert.equal(result.gameState.stats.Seoyeon.affinity, 99);
    assert.equal(result.gameState.stats.Dain.affinity, 100);
    assert.equal(result.currentSceneId, 'ending_aff_check_seo');
    assert.equal(result.gameState.flags.ending_perfect, false);
    assert.equal(result.gameState.flags.isDating_Seoyeon, true);
    const context = { window: { CupidStorage: h.storage, CupidAffinityCorrections: h.api }, console: { log() {}, warn() {} } };
    vm.createContext(context);
    for (const file of ['StateManager', 'SaveManager']) vm.runInContext(fs.readFileSync(path.join(root, `assets/js/modules/${file}.js`), 'utf8'), context);
    const state = new context.window.StateManager();
    state.importState(clone(saved.gameState));
    assert.equal(state.getAffinity('Seoyeon'), 99);
    context.window.CupidAffinityGate.testGrant('Seoyeon', 1);
    state.changeAffinity('Seoyeon', 1);
    const fresh = state.exportState();
    state.importState(fresh);
    assert.equal(state.getAffinity('Seoyeon'), 100);
    assert.deepEqual([...fresh.appliedAffinityCorrections], [id]);
    h.storage.setItem('cupid_save', JSON.stringify(saved));
    assert.equal(new context.window.SaveManager().load().gameState.stats.Seoyeon.affinity, 99);
});

test('malformed saves and missing devices remain untouched', async () => {
    const h = await setup(device, { cupid_save: '{broken', cupid_gallery: '{broken' });
    assert.equal(h.storage.getItem('cupid_save'), '{broken');
    assert.equal(h.storage.getItem('cupid_gallery'), '{broken');
    const empty = await setup('');
    assert.deepEqual(empty.api.ids(), []);
});
