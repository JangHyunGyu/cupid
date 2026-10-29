'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { loadCorpus } = require('../scripts/audit-scene-visuals.cjs');
const { resolveAssetSource } = require('../scripts/character-assets.cjs');
const root = path.resolve(__dirname, '..');
const { rows } = loadCorpus();
const scene = id => rows.find(row => row.id === id).scene;

test('visible emotion continues through disclosures, player replies and recovery', () => {
    for (const id of ['wall_dain_cry_2', 'wall_dain_cry_3', 'wall_dain_cry_4', 'wall_dain_cry_5']) {
        assert.match(scene(id).character, /dain_cry\.png$/);
    }
    assert.match(scene('wall_dain_freetalk').character, /dain_relieved\.png$/);
    for (const id of ['wall_yuna_14_c', 'wall_yuna_14_d', 'wall_yuna_14_e', 'wall_yuna_14_h']) {
        assert.match(scene(id).character, /yuna_sad\.png$/);
    }
    assert.match(scene('after5_farewell_dain_5').character, /dain_sad\.png$/);
    assert.match(scene('date_dain_low').character, /dain_date_sad\.webp$/);
    assert.match(scene('date_dain_shop_2_b').character, /dain_date_shy\.webp$/);
});

test('fixed free-talk openings preserve their authored tone and outfit', () => {
    const expected = {
        lunch_seo_freetalk: 'seyoun_soft_smile.png',
        lunch_dain_freetalk: 'dain_smile.png',
        wall_seo_freetalk: 'seyoun_cry.png',
        after3_dain_freetalk: 'dain_relieved.png',
        day5_seo_ending_freetalk_late_good: 'seyoun_soft_smile.png',
        day5_dain_ending_freetalk_true_love: 'dain_smile.png',
        day5_seo_ending_freetalk_bittersweet: 'seyoun_sad.png',
        day5_dain_ending_freetalk_bittersweet: 'dain_sad.png',
        day5_nurse_ending_freetalk_perfect: 'nurse_home_smile.webp'
    };
    for (const [id, asset] of Object.entries(expected)) assert.equal(path.basename(scene(id).character), asset, id);
    assert.equal(scene('day5_haeun_switch_dain_group_talk').groupParticipants[0].initialExpression, 'angry');
    assert.equal(scene('day5_haeun_switch_teacher_group_talk').groupParticipants[0].initialExpression, 'worried');
});

test('all authored free-talk portraits exist and remote messages retain their opacity', () => {
    for (const row of rows.filter(row => /free_talk/.test(row.scene.type))) {
        const assets = [row.scene.character, ...Object.values(row.scene.characters || {}).map(value => typeof value === 'string' ? value : value?.src)].filter(Boolean);
        for (const asset of assets) assert.ok(fs.existsSync(resolveAssetSource(root, asset)), `${row.id}: ${asset}`);
    }
    for (const id of ['night2_dain_freetalk', 'night2_seo_freetalk', 'night2_yuna_freetalk']) {
        assert.equal(scene(id).characters.center.opacity, 0.35);
    }
});

test('every dynamic confrontation opens with each participant’s own emotion in all languages', () => {
    const context = vm.createContext({ window: {}, console });
    vm.runInContext(fs.readFileSync(path.join(root, 'assets/js/freetalk-core.js'), 'utf8'), context);
    vm.runInContext(fs.readFileSync(path.join(root, 'assets/js/modules/FreeTalkSystem.js'), 'utf8'), context);
    const prototype = context.window.FreeTalkSystem.prototype;
    for (const lang of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt', 'zh']) {
        for (const lead of ['Seoyeon', 'Yuna', 'Dain', 'Teacher', 'Nurse']) {
            for (const tempter of ['Seoyeon', 'Yuna', 'Dain'].filter(id => id !== lead)) {
                const flags = new Set([`route_${lead.toLowerCase()}`, `day4_took_${tempter.toLowerCase()}_counteroffer`]);
                if (['Teacher', 'Nurse'].includes(lead)) flags.add(`day4_counteroffer_target_${lead.toLowerCase()}`);
                const owner = Object.assign(Object.create(prototype), { stateManager: { getFlag: flag => flags.has(flag) } });
                const participants = owner._resolveGroupParticipants(scene('morning5_counteroffer_group_talk'), lang);
                assert.equal(participants.length, 2);
                assert.equal(participants[0].id, lead);
                assert.equal(participants[0].initialExpression, ['Teacher', 'Nurse'].includes(lead) ? 'worried' : 'sad');
                assert.equal(participants[1].id, tempter);
                assert.equal(participants[1].initialExpression, 'worried');
                for (const participant of participants) {
                    const prefix = participant.id === 'Seoyeon' ? 'seyoun' : participant.id.toLowerCase();
                    assert.ok(fs.existsSync(resolveAssetSource(root, `assets/images/characters/${prefix}_${participant.initialExpression}.png`)));
                }
            }
        }
    }
});
