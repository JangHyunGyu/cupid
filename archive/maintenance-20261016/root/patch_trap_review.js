#!/usr/bin/env node
/**
 * 함정 선택지 신규 노드 translation_review 갱신
 */
const fs = require('fs');

function makeEntry(file, key, koData) {
    const langs = ['en', 'ja', 'es', 'fr', 'de'];
    const entry = {
        _ko_ref: `assets/js/i18n/ko/${file}.json#${key}`,
        _ko_name: koData.name || '{name}',
        _ko_text_preview: koData.text || '',
        _has_choices: !!koData.choices
    };
    for (const l of langs) {
        entry[l] = {
            _ref: `assets/js/i18n/${l}/${file}.json#${key}`,
            _reviewed: false,
            _score: null,
            _issues: '함정 선택지 신규 — 검토 필요'
        };
    }
    return entry;
}

// ── Day 3 처리 ──
const day3path = 'translation_review_day3.json';
const day3 = JSON.parse(fs.readFileSync(day3path, 'utf-8'));
const day3_3 = day3.day3_3_afterschool;
const ko3_3 = JSON.parse(fs.readFileSync('assets/js/i18n/ko/day3_3_afterschool.json', 'utf-8'));

const newDay3Keys = [];
for (let i = 1; i <= 10; i++) newDay3Keys.push(`after3_seo_pity_trap_${i}`);
for (let i = 1; i <= 12; i++) newDay3Keys.push(`after3_seo_correct_${i}`);
for (let i = 1; i <= 11; i++) newDay3Keys.push(`after3_yuna_decode_trap_${i}`);
for (let i = 1; i <= 12; i++) newDay3Keys.push(`after3_yuna_correct_${i}`);
for (let i = 1; i <= 10; i++) newDay3Keys.push(`after3_dain_pity_trap_${i}`);
for (let i = 1; i <= 12; i++) newDay3Keys.push(`after3_dain_correct_${i}`);

let added3 = 0, removed3 = 0;
for (const k of newDay3Keys) {
    if (ko3_3[k] && !day3_3[k]) {
        day3_3[k] = makeEntry('day3_3_afterschool', k, ko3_3[k]);
        added3++;
    }
}

// 삭제된 고아 키 제거
const removedDay3 = [
    'after3_seo_choice1', 'after3_seo_choice1_react',
    'after3_seo_choice1_react_ins', 'after3_seo_choice1_react_ins3',
    'after3_seo_choice1_react_ins4', 'after3_seo_choice1_react_ins5',
    'after3_seo_choice1_react_ins6', 'after3_seo_choice1_react_ins7',
    'after3_seo_choice1_react_ins8', 'after3_seo_choice2', 'after3_seo_end_c2',
    'after3_yuna_choice1', 'after3_yuna_choice1_2', 'after3_yuna_choice1_2_ins',
    'after3_yuna_choice1_3', 'after3_yuna_choice1_react',
    'after3_yuna_choice2', 'after3_yuna_choice2_2', 'after3_yuna_choice2_3',
    'after3_yuna_choice2_3_ins', 'after3_yuna_choice2_react'
];
for (const k of removedDay3) {
    if (day3_3[k]) { delete day3_3[k]; removed3++; }
}

// 수정된 선택지 컨테이너
const modified3 = ['after3_seo_choice', 'after3_yuna_choice', 'after3_dain_choice'];
let updated3 = 0;
for (const k of modified3) {
    if (day3_3[k] && ko3_3[k]) {
        day3_3[k]._ko_text_preview = ko3_3[k].text;
        if (ko3_3[k].choices) day3_3[k]._has_choices = true;
        for (const l of ['en','ja','es','fr','de']) {
            if (day3_3[k][l]) {
                day3_3[k][l]._reviewed = false;
                day3_3[k][l]._issues = '선택지 함정 패턴으로 교체 — 재번역 필요';
            }
        }
        updated3++;
    }
}

fs.writeFileSync(day3path, JSON.stringify(day3, null, 2) + '\n', 'utf-8');
console.log(`✅ ${day3path} — 신규 ${added3}, 수정 ${updated3}, 삭제 ${removed3}`);

// ── Day 5 처리 ──
const day5path = 'translation_review_day5.json';
const day5 = JSON.parse(fs.readFileSync(day5path, 'utf-8'));
const day5_1 = day5.day5_1_morning;
const ko5_1 = JSON.parse(fs.readFileSync('assets/js/i18n/ko/day5_1_morning.json', 'utf-8'));

const newDay5Keys = [];
for (let i = 1; i <= 12; i++) newDay5Keys.push(`hidden_homeroom_d5_praise_trap_${i}`);
for (let i = 1; i <= 14; i++) newDay5Keys.push(`hidden_homeroom_d5_correct_${i}`);

let added5 = 0;
for (const k of newDay5Keys) {
    if (ko5_1[k] && !day5_1[k]) {
        day5_1[k] = makeEntry('day5_1_morning', k, ko5_1[k]);
        added5++;
    }
}

// hidden_homeroom_d5_choice 수정
let updated5 = 0;
if (day5_1['hidden_homeroom_d5_choice'] && ko5_1['hidden_homeroom_d5_choice']) {
    day5_1['hidden_homeroom_d5_choice']._ko_text_preview = ko5_1['hidden_homeroom_d5_choice'].text;
    day5_1['hidden_homeroom_d5_choice']._has_choices = true;
    for (const l of ['en','ja','es','fr','de']) {
        day5_1['hidden_homeroom_d5_choice'][l]._reviewed = false;
        day5_1['hidden_homeroom_d5_choice'][l]._issues = '선택지 함정 패턴으로 교체 — 재번역 필요';
    }
    updated5++;
}

fs.writeFileSync(day5path, JSON.stringify(day5, null, 2) + '\n', 'utf-8');
console.log(`✅ ${day5path} — 신규 ${added5}, 수정 ${updated5}`);

console.log('\n✨ 함정 노드 translation_review 갱신 완료');
