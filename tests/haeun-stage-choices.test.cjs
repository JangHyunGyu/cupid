'use strict';
// Haeun's four emotional-stage choice scenes (cheering -> awareness -> avoidance/wavering -> guilt).
// Rules: plus/minus symmetric, 4 choices, best-choice sum = +10 (so the theoretical budget gains exactly 10),
// 8-language parity, and scene order following the emotional arc.
const vm = require('node:vm');
const fixture = require('./affinity-fixture.cjs');
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const languages = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt', 'zh'];
const scenario = {};
for (let day = 0; day <= 5; day++) scenario[day] = {};
for (const file of fs.readdirSync(path.join(root, 'assets/js/scenario')).filter(f => /^day\d.*\.js$/.test(f)).sort()) {
    new Function('SCENARIO', 'Object', fs.readFileSync(path.join(root, 'assets/js/scenario', file), 'utf8'))(scenario, Object);
}
const scenes = Object.assign({}, ...Object.values(scenario));
const copy = lang => Object.assign({}, ...fs.readdirSync(path.join(root, 'assets/js/i18n', lang)).filter(f => /^day.*\.json$/.test(f))
    .map(f => JSON.parse(fs.readFileSync(path.join(root, 'assets/js/i18n', lang, f), 'utf8'))));
const STAGES = [
    { id: 'haeun_cheer_choice', day: 3, stage: 'cheering', up: 'haeun_cheer_up', down: 'haeun_cheer_down' },
    { id: 'day4_haeun_notice_choice', day: 4, stage: 'awareness', up: 'day4_haeun_notice_up', down: 'day4_haeun_notice_down' },
    { id: 'day5_haeun_waver_choice', day: 5, stage: 'avoidance and wavering', up: 'day5_haeun_waver_up', down: 'day5_haeun_waver_down' },
    { id: 'day5_haeun_guilt_choice', day: 5, stage: 'guilt-mixed conflict', up: 'day5_haeun_guilt_up', down: 'day5_haeun_guilt_down' }
];
const delta = choice => Number(choice.stats?.Haeun?.affinity);

test('every Haeun stage scene has equal plus and minus counts with paired magnitudes', () => {
    for (const { id, day, up, down } of STAGES) {
        const scene = scenario[day][id];
        assert.ok(scene, id);
        assert.equal(scene.choices.length, 4, `${id} must expose four choices`);
        const values = scene.choices.map(delta);
        assert.ok(values.every(v => Number.isInteger(v) && v !== 0), `${id} every choice moves Haeun affinity`);
        const plus = values.filter(v => v > 0).sort((a, b) => a - b);
        const minus = values.filter(v => v < 0).map(Math.abs).sort((a, b) => a - b);
        assert.equal(plus.length, minus.length, `${id} plus/minus counts`);
        assert.deepEqual(plus, minus, `${id} magnitudes must pair up symmetrically`);
        for (const choice of scene.choices) {
            assert.deepEqual(Object.keys(choice.stats), ['Haeun'], `${id} only changes Haeun`);
            assert.equal(choice.next, delta(choice) > 0 ? up : down, `${id} reaction matches the sign`);
        }
    }
});

test('the best choices across the four scenes add exactly +10 and the worst exactly -10', () => {
    const best = STAGES.reduce((sum, { id, day }) => sum + Math.max(...scenario[day][id].choices.map(delta)), 0);
    const worst = STAGES.reduce((sum, { id, day }) => sum + Math.min(...scenario[day][id].choices.map(delta)), 0);
    assert.equal(best, 10);
    assert.equal(worst, -10);
});

test('stage scenes follow the emotional arc and sit before the 45 gate', () => {
    assert.equal(scenes.haeun_warn_6_b.next, 'haeun_cheer_1');
    assert.equal(scenes.haeun_cheer_1.next, 'haeun_cheer_choice');
    assert.equal(scenes.haeun_cheer_up.next, 'haeun_warn_7');
    assert.equal(scenes.haeun_cheer_down.next, 'haeun_warn_7');
    assert.equal(scenes.day5_haeun_defends.next, 'day5_haeun_trust_cg');
    assert.equal(scenes.day5_haeun_finish.next, 'day5_haeun_wave_gate');
    assert.equal(scenes.day5_haeun_waver_up.next, 'day5_haeun_personal');
    assert.equal(scenes.day5_haeun_waver_down.next, 'day5_haeun_personal');
    assert.equal(scenes.after5_start.next, 'day5_haeun_guilt_gate');
    assert.equal(scenes.day5_haeun_guilt_up.next, 'day5_haeun_route_gate');
    assert.equal(scenes.day5_haeun_guilt_down.next, 'day5_haeun_route_gate');
    assert.equal(scenes.day5_haeun_private_2.next, 'day5_haeun_apology_gate');
});

test('all stage nodes and the new wavering/offer/apology lines exist in all eight languages', () => {
    const ids = [
        ...STAGES.flatMap(({ id, up, down }) => [id, up, down]),
        'haeun_cheer_1', 'day4_haeun_notice_1', 'day5_haeun_waver_1', 'day5_haeun_guilt_1',
        ...['seoyeon', 'yuna', 'dain', 'teacher', 'nurse'].map(c => `day5_ending_haeun_apology_${c}`)
    ];
    const ko = copy('ko');
    for (const lang of languages) {
        const data = copy(lang);
        for (const id of ids) {
            assert.ok(data[id]?.text?.trim(), `${lang}/${id}`);
            const expected = ko[id].choices?.length;
            if (expected) {
                assert.equal(data[id].choices?.length, expected, `${lang}/${id} choice count`);
                assert.ok(data[id].choices.every(c => c.trim()), `${lang}/${id} choices`);
            }
        }
        // the two wavering lines that must differ from the original copy
        assert.notEqual(data.day5_haeun_defends.text, data.day5_haeun_fallback.text);
        assert.match(ko.day5_haeun_defends.text, /변명/);
    }
});

test('Haeun spoken Korean lines in the new nodes keep the senior honorifics and polite register', () => {
    const ko = copy('ko');
    const ids = Object.keys(ko).filter(id => /^(haeun_cheer_|day4_haeun_notice_|day5_haeun_waver_|day5_haeun_guilt_|day5_ending_haeun_apology_)/.test(id));
    assert.ok(ids.length >= 21);
    for (const id of ids) {
        assert.equal(ko[id].name, '하은', id);
        const spoken = ko[id].text.split('*').filter((_, i) => i % 2 === 0).join(' ');
        assert.doesNotMatch(spoken, /(서연|유나|다인)(?!\s*선배)/, id);
        assert.doesNotMatch(spoken, /(?:야|해|어|냐)[.?!]\s*$/, `${id} must stay in polite speech`);
    }
});

function runtime() {
    const read = f => fs.readFileSync(path.join(root, f), 'utf8');
    const context = { window: {}, console, setTimeout, clearTimeout, CHAR_NAME_MAP: {},
        document: { createElement: () => ({ toDataURL: () => '' }) } };
    vm.createContext(context);
    for (const file of ['freetalk-core.js', 'example-dialogues-ko.js', 'prompts.js', 'modules/StateManager.js', 'modules/SceneRenderer.js',
        ...fs.readdirSync(path.join(root, 'assets/js/scenario')).filter(f => /^day.*\.js$/.test(f)).map(f => 'scenario/' + f)]) {
        vm.runInContext(read('assets/js/' + file), context, { filename: file });
    }
    const state = new context.window.StateManager();
    fixture.register(state, context);
    const renderer = new context.window.SceneRenderer(state, { updateMaxAffinity() {}, checkAffinityUnlock() {} }, { showAffinityChange() {} });
    return { context, state, renderer, scenes: Object.assign({}, ...Object.values(context.SCENARIO)) };
}
// Walk non-interactive links from a scene (taking the first choice) until a target scene or a free-talk stop.
function walk(r, from, stopAt, limit = 40) {
    const seen = [];
    let id = from;
    for (let i = 0; i < limit && id; i++) {
        seen.push(id);
        if (id === stopAt) return seen;
        const scene = r.scenes[id];
        if (!scene) throw new Error('missing scene ' + id);
        id = scene.choices ? scene.choices[0].next : r.renderer.resolveNextScene(scene);
    }
    return seen;
}
test('stage gates route correctly: cheer is Seoyeon-event only, later stages need the cheer flag, 45 gate is untouched', () => {
    const r = runtime();
    const { state, renderer, scenes } = r;
    // old saves / players who never saw the cheer scene skip every later stage scene
    state.setFlag('messaged_haeun_freetalk');
    assert.equal(renderer.resolveNextScene(scenes.day4_haeun_personal_gate), 'day4_haeun_personal');
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_wave_gate), 'day5_haeun_personal');
    state.setFlag('messaged_day5_haeun_personal');
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_guilt_gate), 'day5_haeun_route_gate');
    // once Haeun cheered, the arc continues in order
    state.setFlag('haeun_cheer_seen');
    assert.equal(renderer.resolveNextScene(scenes.day4_haeun_personal_gate), 'day4_haeun_notice_check');
    assert.equal(renderer.resolveNextScene(scenes.day4_haeun_notice_check), 'day4_haeun_notice_1');
    assert.equal(scenes.day4_haeun_notice_up.next, 'day4_haeun_personal');
    state.setFlag('day4_haeun_notice_done');
    assert.equal(renderer.resolveNextScene(scenes.day4_haeun_personal_gate), 'day4_haeun_personal');
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_wave_gate), 'day5_haeun_waver_1');
    // guilt scene only after the day-5 personal talk has built enough trust, and never twice
    fixture.seed(state, 'Haeun', 7);
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_guilt_gate), 'day5_haeun_guilt_check');
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_guilt_check), 'day5_haeun_guilt_affinity');
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_guilt_affinity), 'day5_haeun_route_gate');
    fixture.seed(state, 'Haeun', 8);
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_guilt_affinity), 'day5_haeun_guilt_1');
    state.setFlag('day5_haeun_guilt_done');
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_guilt_gate), 'day5_haeun_route_gate');
    // the unchanged 45 gate and 100 threshold
    for (const score of [44, 45]) {
        fixture.seed(state, 'Haeun', score);
        assert.equal(renderer.resolveNextScene(scenes.day5_haeun_route_affinity), score >= 45 ? 'day5_haeun_route_rival' : 'after5_original_start');
    }
    fixture.seed(state, 'Haeun', 99);
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_apology_gate), 'day5_haeun_romance_check');
    fixture.seed(state, 'Haeun', 100);
    state.setFlag('day5_haeun_route_rival', 'Yuna');
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_apology_gate), 'day5_haeun_apology_router');
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_apology_router), 'day5_ending_haeun_apology_yuna');
    assert.equal(scenes.day5_ending_haeun_apology_yuna.next, 'day5_haeun_romance_check');
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_romance_check), 'day5_ending_haeun');
});

test('carry-over (counter-offer penalty deferred) route reaches the Haeun trust gate before the tour branch', () => {
    const { state, renderer, scenes } = runtime();
    assert.equal(renderer.resolveNextScene(scenes.morning5_route_branch), 'morning5_end');
    state.setFlag('day4_counteroffer_penalty_deferred');
    assert.equal(renderer.resolveNextScene(scenes.morning5_route_branch), 'morning5_co_haeun_check');
    for (const [score, next] of [[-100, 'tour_co_branch'], [0, 'tour_co_branch'], [7, 'tour_co_branch'], [8, 'day5_haeun_gate'], [60, 'day5_haeun_gate']]) {
        fixture.seed(state, 'Haeun', score);
        assert.equal(renderer.resolveNextScene(scenes.morning5_co_haeun_check), next, String(score));
    }
    // after the festival event the existing gate hands back to the tour branch, so no other ending path changes
    state.setFlag('day5_haeun_event_done');
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_gate), 'day5_haeun_resume');
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_resume), 'tour_co_branch');
});
