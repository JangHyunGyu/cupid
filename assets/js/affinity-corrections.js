(function (root, createCorrections) {
    'use strict';
    if (typeof module !== 'undefined' && module.exports) module.exports = createCorrections;
    if (root) root.CupidAffinityCorrections = createCorrections({
        storage: root.CupidStorage, crypto: root.crypto, TextEncoder: root.TextEncoder
    });
})(typeof window !== 'undefined' ? window : null, function (options) {
    'use strict';
    const { storage, crypto, TextEncoder, corrections } = options;
    const manifest = corrections || [
    {
        "id": "main-route-seoyeon-20260909",
        "deviceSha256": "9fe6b2e83ad606ac68ff1832e42a7f1fd6d2f076a73ea469dec209639eefe2fb",
        "character": "Seoyeon",
        "galleryCharacter": "seyoun",
        "perfectCG": "ending_perfect_seoyeon",
        "perfectEnding": "perfect_seoyeon"
    },
    {
        "id": "gallery-unlock-20260922-dain",
        "deviceSha256": "ede48cab5f4481ebb12140e4739e67a2a078acd29afee3c96b620014f654ef1a",
        "character": "Dain",
        "galleryCharacter": "dain",
        "perfectCG": "ending_perfect_dain",
        "perfectEnding": "perfect_dain"
    },
    {
        "id": "gallery-unlock-20260922-seoyeon",
        "deviceSha256": "62a80221a16c1d396077ecf9f929b59242c3c26f23983c1c3ccf4339aa84daa2",
        "character": "Seoyeon",
        "galleryCharacter": "seyoun",
        "perfectCG": "ending_perfect_seoyeon",
        "perfectEnding": "perfect_seoyeon"
    },
    {
        "id": "gallery-unlock-20260922-yuna",
        "deviceSha256": "62a80221a16c1d396077ecf9f929b59242c3c26f23983c1c3ccf4339aa84daa2",
        "character": "Yuna",
        "galleryCharacter": "yuna",
        "perfectCG": "ending_perfect_yuna",
        "perfectEnding": "perfect_yuna"
    },
    {
        "id": "gallery-unlock-20260922-dain",
        "deviceSha256": "62a80221a16c1d396077ecf9f929b59242c3c26f23983c1c3ccf4339aa84daa2",
        "character": "Dain",
        "galleryCharacter": "dain",
        "perfectCG": "ending_perfect_dain",
        "perfectEnding": "perfect_dain"
    },
    {
        "id": "gallery-unlock-20260922-teacher",
        "deviceSha256": "62a80221a16c1d396077ecf9f929b59242c3c26f23983c1c3ccf4339aa84daa2",
        "character": "Teacher",
        "galleryCharacter": "teacher",
        "perfectCG": "ending_perfect_teacher",
        "perfectEnding": "perfect_teacher"
    },
    {
        "id": "gallery-unlock-20260922-nurse",
        "deviceSha256": "62a80221a16c1d396077ecf9f929b59242c3c26f23983c1c3ccf4339aa84daa2",
        "character": "Nurse",
        "galleryCharacter": "nurse",
        "perfectCG": "ending_perfect_nurse",
        "perfectEnding": "perfect_nurse"
    },
    {
        "id": "gallery-baseline-20260922-dain",
        "deviceSha256": "ede48cab5f4481ebb12140e4739e67a2a078acd29afee3c96b620014f654ef1a",
        "character": "Dain",
        "galleryCharacter": "dain",
        "perfectCG": "ending_perfect_dain",
        "perfectEnding": "perfect_dain",
        "correctedPeak": 10,
        "correctedCurrent": -2,
        "restoreFrom99": true
    },
    {
        "id": "gallery-baseline-20260922-dain",
        "deviceSha256": "62a80221a16c1d396077ecf9f929b59242c3c26f23983c1c3ccf4339aa84daa2",
        "character": "Dain",
        "galleryCharacter": "dain",
        "perfectCG": "ending_perfect_dain",
        "perfectEnding": "perfect_dain",
        "correctedPeak": 45,
        "correctedCurrent": -4,
        "restoreFrom99": true
    },
    {
        "id": "gallery-baseline-20260922-nurse",
        "deviceSha256": "62a80221a16c1d396077ecf9f929b59242c3c26f23983c1c3ccf4339aa84daa2",
        "character": "Nurse",
        "galleryCharacter": "nurse",
        "perfectCG": "ending_perfect_nurse",
        "perfectEnding": "perfect_nurse",
        "correctedPeak": 11,
        "correctedCurrent": 11,
        "restoreFrom99": true
    },
    {
        "id": "gallery-baseline-20260922-seoyeon",
        "deviceSha256": "62a80221a16c1d396077ecf9f929b59242c3c26f23983c1c3ccf4339aa84daa2",
        "character": "Seoyeon",
        "galleryCharacter": "seyoun",
        "perfectCG": "ending_perfect_seoyeon",
        "perfectEnding": "perfect_seoyeon",
        "correctedPeak": 97,
        "correctedCurrent": 97,
        "restoreFrom99": true
    },
    {
        "id": "gallery-baseline-20260922-teacher",
        "deviceSha256": "62a80221a16c1d396077ecf9f929b59242c3c26f23983c1c3ccf4339aa84daa2",
        "character": "Teacher",
        "galleryCharacter": "teacher",
        "perfectCG": "ending_perfect_teacher",
        "perfectEnding": "perfect_teacher",
        "correctedPeak": 19,
        "correctedCurrent": 8,
        "restoreFrom99": true
    },
    {
        "id": "gallery-baseline-20260922-yuna",
        "deviceSha256": "62a80221a16c1d396077ecf9f929b59242c3c26f23983c1c3ccf4339aa84daa2",
        "character": "Yuna",
        "galleryCharacter": "yuna",
        "perfectCG": "ending_perfect_yuna",
        "perfectEnding": "perfect_yuna",
        "correctedPeak": 92,
        "correctedCurrent": 5,
        "restoreFrom99": true
    }
];
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
    function cap(value, correction, kind) {
        const target = kind === 'peak' ? correction.correctedPeak : correction.correctedCurrent;
        const baseline = Number.isInteger(target) ? Math.max(-100, Math.min(99, target)) : 99;
        return Number(value) >= (correction.restoreFrom99 ? 99 : 100) ? baseline : value;
    }
    function correctGallery(data) {
        if (!isObject(data)) return false;
        let changed = false;
        for (const correction of active()) {
            if (marked(data, correction.id)) continue;
            const character = data.characters?.[correction.galleryCharacter];
            if (isObject(character)) {
                if ('maxAffinity' in character) character.maxAffinity = cap(character.maxAffinity, correction, 'peak');
                if ('currentAffinity' in character) character.currentAffinity = cap(character.currentAffinity, correction, 'current');
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
            if (isObject(stat) && 'affinity' in stat) stat.affinity = cap(stat.affinity, correction, 'current');
            mark(data, correction.id);
            changed = true;
        }
        return changed;
    }
    function correctSave(data) {
        if (!isObject(data?.gameState)) return false;
        const pending = active().filter(item => !marked(data.gameState, item.id));
        const changed = correctState(data.gameState);
        const checks = {
            Seoyeon: ['seo', 'ending_aff_check_seo'], Yuna: ['yuna', 'ending_aff_check_yuna'],
            Dain: ['dain', 'ending_aff_check_dain'], Teacher: ['teacher', 'hidden_perfect_homeroom_check'],
            Nurse: ['nurse', 'hidden_perfect_nurse_check']
        };
        const affected = pending.find(item => {
            const [suffix] = checks[item.character] || [];
            if (!suffix) return false;
            const pattern = new RegExp(`^(perfect_${suffix}_|perfect_epilogue_.*_${suffix}$|date_choice_perfect_${suffix}$|day5_${suffix}_ending_freetalk_perfect$|hidden_perfect_${item.character === 'Teacher' ? 'homeroom' : suffix}_)`);
            return pattern.test(data.currentSceneId || '') || (data.gameState.flags?.ending_perfect && data.gameState.flags?.[`isDating_${item.character}`]);
        });
        if (changed && affected) {
            data.currentSceneId = checks[affected.character][1];
            data.pendingEntryEffects = true;
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
