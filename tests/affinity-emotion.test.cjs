const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const runtime = { window: {}, console, setTimeout, clearTimeout };
vm.createContext(runtime);
for (const file of ['freetalk-core.js', 'prompts.js', 'gallery-freetalk.js', 'modules/FreeTalkSystem.js']) {
    vm.runInContext(fs.readFileSync(path.join(__dirname, '../assets/js', file), 'utf8'), runtime, { filename: file });
}
const api = runtime.window;
const core = api.CupidFreeTalkCore;
const languages = ['ko', 'en', 'es', 'ja', 'fr', 'de', 'pt'];
const characters = ['Seoyeon', 'Yuna', 'Dain', 'Teacher', 'Nurse'];
const scores = [-1, -19, -20, -39, -40, -59, -60, -79, -80, -100];
const split = prompt => {
    const parts = prompt.split(core.CACHE_BOUNDARY_MARKER);
    assert.equal(parts.length, 2);
    return parts;
};

test('negative emotion has five increasing bands and preserves exact intensity within each band in seven languages', () => {
    for (const lang of languages) {
        const descriptions = scores.map(score => {
            const state = api.buildCupidNegativeAffinityState(lang, score, 'Character');
            assert.ok(state.includes(`${-score}/100`));
            assert.ok(state.includes('Character'));
            return state.split('\n')[1];
        });
        assert.equal(new Set(descriptions).size, 5, lang);
        for (let index = 0; index < descriptions.length; index += 2) {
            assert.equal(descriptions[index], descriptions[index + 1]);
        }
        for (const score of [0, 1, 100, undefined, NaN]) {
            assert.equal(api.buildCupidNegativeAffinityState(lang, score), '');
        }
        assert.equal(api.buildCupidNegativeAffinityState(lang, -1000), api.buildCupidNegativeAffinityState(lang, -100));
    }
    assert.match(api.buildCupidNegativeAffinityState('ko', -1), /아직 깊은 분노나 혐오까지 간 상태는 아닙니다/);
    assert.match(api.buildCupidNegativeAffinityState('ko', -25), /불신과 짜증/);
    assert.match(api.buildCupidNegativeAffinityState('ko', -45), /분노와 원망/);
    assert.match(api.buildCupidNegativeAffinityState('ko', -65), /반감이 커서/);
    assert.match(api.buildCupidNegativeAffinityState('ko', -90), /깊이 정이 떨어져/);
});

test('ordinary single conversation keeps the emotional rule stable and current scores in the live tail', () => {
    for (const lang of languages) for (const character of [...characters, 'Haeun']) {
        let baseline;
        for (const score of [...scores, 0, 100]) {
            const prompt = api.buildSystemPrompt({ lang, sceneName: character, displayName: character,
                affinity: score, playerName: 'Player', promptData: api.getPromptData(lang, 'Player') });
            const [stable] = split(prompt);
            const rule = api.buildCupidEmotionalRangeRule(lang);
            assert.ok(stable.includes(rule), `${lang}/${character}`);
            const guidance = api.buildCupidAffinityIntimacyGuidance(lang, score, {
                characterName: character, nonRomance: character === 'Haeun'
            });
            const combined = `${prompt}\n${guidance}`;
            const [, dynamic] = split(combined);
            const state = api.buildCupidNegativeAffinityState(lang, score, character);
            if (score < 0) {
                assert.ok(dynamic.includes(state));
                assert.ok(!stable.includes(state));
            }
            const fingerprint = core.getStablePromptFingerprint(combined);
            if (baseline) assert.equal(fingerprint, baseline, 'affinity must not split the stable cache key');
            baseline = fingerprint;
            assert.notEqual(fingerprint, core.getStablePromptFingerprint(combined.replace(rule, '')));
            if (character === 'Haeun') assert.match(guidance, /비연애 관계|non-romantic relationship/);
        }
    }
});

test('group participants each use their latest affinity without sharing anger or cache lineage changes', () => {
    const prototype = api.FreeTalkSystem.prototype;
    for (const lang of languages) for (const type of ['counteroffer_confrontation', 'social']) {
        let score = -5;
        const context = {
            stateManager: { playerName: 'Player', getFlag: () => false, getAffinity: id => id === 'Seoyeon' ? score : 80 },
            groupParticipants: [{ id: 'Seoyeon', name: 'Seoyeon', role: 'lead' }, { id: 'Yuna', name: 'Yuna', role: 'tempter' }],
            getGameContext: () => '', _getGroupChoiceState: prototype._getGroupChoiceState,
            _getLocalizedGroupLocation: prototype._getLocalizedGroupLocation,
            charNameMap: {},
            _buildTemptationNightMemoryBlock: prototype._buildTemptationNightMemoryBlock,
            _getTemptationPrecedingHistory: prototype._getTemptationPrecedingHistory
        };
        const build = () => prototype._buildCurrentGroupSystemPrompt.call(context, { groupParticipants: type }, lang);
        const before = build();
        score = -95;
        const after = build();
        const [stable, dynamic] = split(after);
        assert.ok(stable.includes(api.buildCupidEmotionalRangeRule(lang)));
        assert.ok(dynamic.includes(api.buildCupidNegativeAffinityState(lang, score, 'Seoyeon')));
        assert.ok(!dynamic.includes(api.buildCupidNegativeAffinityState(lang, score, 'Yuna')));
        assert.equal(core.getStablePromptFingerprint(before), core.getStablePromptFingerprint(after));
    }
});

test('gallery uses the same gradient without resetting the established relationship or losing cache reuse', () => {
    for (const lang of languages) for (const character of characters) {
        const galleryId = character === 'Seoyeon' ? 'seyoun' : character.toLowerCase();
        let affinity = -5;
        const gallery = new api.GalleryFreeTalk(lang, {
            getPlayerName: () => 'Player', isFreeTalkUnlocked: () => false, getCurrentAffinity: () => affinity
        });
        let baseline;
        for (const score of scores) {
            affinity = score;
            const prompt = gallery._buildCachedSystemPrompt(galleryId);
            const [stable, dynamic] = split(prompt);
            assert.ok(stable.includes(api.buildCupidEmotionalRangeRule(lang)));
            const name = gallery.CHAR_NAMES[galleryId][lang];
            assert.ok(dynamic.includes(api.buildCupidNegativeAffinityState(lang, score, name)));
            assert.match(stable, /점수만으로 초기화·결별하지 않습니다|never reset or automatically separate them/);
            assert.doesNotMatch(dynamic, /애정과 갈등이 팽팽|affection and tension are balanced/);
            const fingerprint = core.getStablePromptFingerprint(prompt);
            if (baseline) assert.equal(fingerprint, baseline);
            baseline = fingerprint;
        }
    }
});
