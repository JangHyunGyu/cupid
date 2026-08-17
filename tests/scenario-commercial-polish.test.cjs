'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const locales = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt'];

function loadScenario(files) {
    const context = vm.createContext({ console });
    for (const file of files) {
        const source = fs.readFileSync(path.join(root, 'assets', 'js', 'scenario', file), 'utf8');
        vm.runInContext(source, context, { filename: file });
    }
    return context.SCENARIO;
}

function locale(locale, file) {
    return JSON.parse(fs.readFileSync(path.join(root, 'assets', 'js', 'i18n', locale, `${file}.json`), 'utf8'));
}

test('Day 2 split-route warning matches the chosen path and message senders do not repeat', () => {
    const day2 = loadScenario(['day2_3_afterschool.js', 'day2_4_night.js'])[2];
    assert.equal(day2.minsu_warn_6.next, 'night2_start');
    assert.equal(day2.minsu_warn_15_b, undefined);
    assert.equal(day2.minsu_warn_15_c, undefined);
    assert.equal(day2.night2_msg_seo_general_alt.branches[0].condition, 'chose_yuna_after2');
    assert.equal(day2.night2_msg_seo_general_alt.branches[0].next, 'night2_msg_7');
    assert.equal(day2.night2_msg_seo_general_alt.branches[1].next, 'night2_msg_yuna_general');

    for (const code of locales) {
        const copy = locale(code, 'day2_3_afterschool');
        assert.ok(copy.minsu_warn_6?.text?.trim(), `${code}: missing split-route warning`);
        assert.equal(copy.minsu_warn_15_b, undefined, `${code}: stale Dain teaser`);
        assert.equal(copy.minsu_warn_15_c, undefined, `${code}: stale Seoyeon teaser`);
    }
    assert.match(locale('ko', 'day2_3_afterschool').minsu_warn_6.text, /점심엔 한 명, 방과후엔 또 한 명/);
});

test('Day 4 rival temptation resolves before the lead wall scene', () => {
    const day4 = loadScenario(['day4_4_night.js'])[4];
    const leads = [
        ['seoyeon', 'seo', ['wall_seo_glimpse_2', 'wall_seo_yuna_tempt_2']],
        ['dain', 'dain', ['wall_dain_glimpse_4_c', 'wall_dain_seo_tempt_2']],
        ['yuna', 'yuna', ['wall_yuna_glimpse_3_b', 'wall_yuna_dain_tempt_2']]
    ];

    for (const [route, short, choices] of leads) {
        const wall = `wall_${short}_1`;
        const rank = `wall_${short}_rival_rank`;
        const routeBranch = day4.day4_student_night_branch.branches.find((branch) => branch.condition === `route_${route}`);
        assert.equal(routeBranch.next, rank);
        assert.equal(day4[rank].rankedRivalFallback, wall);
        assert.equal(day4[`wall_${short}_freetalk`].next, 'day4_student_return_home');
        for (const choiceScene of choices) assert.equal(day4[choiceScene].choices[0].next, wall);
    }
    assert.equal(day4.day4_student_return_home.next, 'day4_hidden_msg_branch');
});

test('Day 5 accountability and route growth scenes are mandatory on successful routes', () => {
    const day5 = loadScenario(['day5_1_morning.js', 'day5_2_lunch.js'])[5];
    assert.equal(day5.morning5_end_branch.next, 'morning5_sojeong_1');
    assert.deepEqual([...day5.morning5_sojeong_4.setFlags], ['sojeong_apology_sent']);
    assert.equal(day5.morning5_sojeong_5.next, 'morning5_route_branch');

    const routeEvents = [
        ['tour_seo_1', 'tour_seo_event_1', 'tour_seo_event_5', 'day5_seoyeon_delegated', 'tour_seo_2'],
        ['tour_yuna_1', 'tour_yuna_event_1', 'tour_yuna_event_5', 'day5_yuna_signed_story', 'tour_yuna_2'],
        ['tour_dain_1', 'tour_dain_event_1', 'tour_dain_event_5', 'day5_dain_chose_commentary', 'tour_dain_2']
    ];
    for (const [entry, first, last, flag, resume] of routeEvents) {
        assert.equal(day5[entry].next, first);
        assert.ok(day5[last].setFlags.includes(flag));
        assert.equal(day5[last].next, resume);
    }
});

test('PERFECT endings include route-specific agency codas', () => {
    const day5 = loadScenario(['day5_4_night.js'])[5];
    for (const route of ['seo', 'yuna', 'dain']) {
        assert.equal(day5[`perfect_epilogue_3_${route}`].next, `perfect_${route}_coda_1`);
        assert.equal(day5[`perfect_${route}_coda_1`].next, `perfect_${route}_coda_2`);
        assert.equal(day5[`perfect_${route}_coda_2`].next, `perfect_${route}_coda_3`);
        assert.equal(day5[`perfect_${route}_coda_3`].next, `date_choice_perfect_${route}`);
    }
});

test('all seven locales contain the new scenes and distinct failure labels', () => {
    const required = {
        day5_1_morning: ['morning5_sojeong_1', 'morning5_sojeong_2', 'morning5_sojeong_3', 'morning5_sojeong_4', 'morning5_sojeong_5'],
        day5_2_lunch: ['tour_seo_event_1', 'tour_seo_event_5', 'tour_yuna_event_1', 'tour_yuna_event_5', 'tour_dain_event_1', 'tour_dain_event_5'],
        day5_4_night: ['perfect_seo_coda_1', 'perfect_seo_coda_3', 'perfect_yuna_coda_1', 'perfect_yuna_coda_3', 'perfect_dain_coda_1', 'perfect_dain_coda_3']
    };

    for (const code of locales) {
        for (const [file, keys] of Object.entries(required)) {
            const data = locale(code, file);
            for (const key of keys) assert.ok(data[key]?.text?.trim(), `${code}/${file}:${key}`);
        }
        const endings = locale(code, 'day5_4_night');
        assert.equal(endings.confess_fail_5.text, '─── CONFESSION REJECTED END ───');
        assert.equal(endings.harem_8.text, '─── UNRESOLVED END ───');
    }
});

test('Korean penalty copy signals the actual interpersonal mistake', () => {
    const day3 = locale('ko', 'day3_3_afterschool');
    const day4 = locale('ko', 'day4_4_night');
    const day5 = locale('ko', 'day5_1_morning');
    assert.match(day3.after3_seo_choice.choices[0], /누구나/);
    assert.match(day3.after3_dain_choice.choices[0], /포기/);
    assert.match(day5.hidden_homeroom_d5_choice.choices[0], /표시할 건 없/);
    assert.match(day4.wall_dain_19.text, /재활이 끝난 척/);
});
