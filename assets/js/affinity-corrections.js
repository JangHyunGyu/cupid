(function (root, createCorrections) {
    'use strict';
    if (typeof module !== 'undefined' && module.exports) module.exports = createCorrections;
    if (root) root.CupidAffinityCorrections = createCorrections({
        storage: root.CupidStorage, crypto: root.crypto, TextEncoder: root.TextEncoder
    });
})(typeof window !== 'undefined' ? window : null, function (options) {
    'use strict';
    const { storage, crypto, TextEncoder, corrections } = options;
    const manifest = corrections || [{
        id: 'main-route-seoyeon-20260909',
        deviceSha256: '9fe6b2e83ad606ac68ff1832e42a7f1fd6d2f076a73ea469dec209639eefe2fb',
        character: 'Seoyeon', galleryCharacter: 'seyoun',
        perfectCG: 'ending_perfect_seoyeon', perfectEnding: 'perfect_seoyeon'
    }];
    let matchedDevice = '';
    let matches = [];
    const isObject = value => value && typeof value === 'object' && !Array.isArray(value);
    const active = () => storage?.getItem('cupid_device_id') === matchedDevice ? matches : [];
    const marked = (data, id) => Array.isArray(data?.appliedAffinityCorrections) && data.appliedAffinityCorrections.includes(id);
    function mark(data, id) {
        data.appliedAffinityCorrections = [...new Set([
            ...(Array.isArray(data.appliedAffinityCorrections) ? data.appliedAffinityCorrections : []), id
        ])];
    }
    function cap(value) {
        return Number(value) >= 100 ? 99 : value;
    }
    function correctGallery(data) {
        if (!isObject(data)) return false;
        let changed = false;
        for (const correction of active()) {
            if (marked(data, correction.id)) continue;
            const character = data.characters?.[correction.galleryCharacter];
            if (isObject(character)) {
                if ('maxAffinity' in character) character.maxAffinity = cap(character.maxAffinity);
                if ('currentAffinity' in character) character.currentAffinity = cap(character.currentAffinity);
                for (const key of ['unlocked', 'unlockedAt', 'perfectEndingCleared', 'trueEndingCleared']) delete character[key];
            }
            if (isObject(data.cg)) delete data.cg[correction.perfectCG];
            if (isObject(data.endings)) delete data.endings[correction.perfectEnding];
            mark(data, correction.id);
            changed = true;
        }
        return changed;
    }
    function correctState(data) {
        if (!isObject(data)) return false;
        let changed = false;
        for (const correction of active()) {
            if (marked(data, correction.id)) continue;
            const stat = data.stats?.[correction.character];
            if (isObject(stat) && 'affinity' in stat) stat.affinity = cap(stat.affinity);
            mark(data, correction.id);
            changed = true;
        }
        return changed;
    }
    function correctSave(data) {
        if (!isObject(data?.gameState)) return false;
        const changed = correctState(data.gameState);
        if (changed && /^(perfect_seo_|perfect_epilogue_.*_seo$|date_choice_perfect_seo$|day5_seo_ending_freetalk_perfect$)/.test(data.currentSceneId || '')) {
            data.currentSceneId = 'ending_aff_check_seo';
            data.lastBgUrl = '';
            data.currentCharacters = {};
            data.gameState.freeTalkCheckpoint = null;
            if (isObject(data.gameState.flags)) data.gameState.flags.ending_perfect = false;
        }
        return changed;
    }
    function reconcileStorage() {
        for (const [key, correct] of [['cupid_gallery', correctGallery], ['cupid_save', correctSave]]) {
            const raw = storage?.getItem(key);
            if (!raw) continue;
            let data;
            try { data = JSON.parse(raw); } catch (_) { continue; }
            if (correct(data)) storage.setItem(key, JSON.stringify(data));
        }
    }
    async function initialize() {
        const device = storage?.getItem('cupid_device_id');
        if (!device) return;
        const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(device));
        const fingerprint = Array.from(new Uint8Array(bytes), byte => byte.toString(16).padStart(2, '0')).join('');
        matches = manifest.filter(item => item.deviceSha256 === fingerprint);
        matchedDevice = device;
        reconcileStorage();
    }
    const api = {
        correctGallery, correctState, correctSave, reconcileStorage,
        ids: character => active().filter(item => !character || item.character === character).map(item => item.id)
    };
    api.ready = initialize();
    return Object.freeze(api);
});
