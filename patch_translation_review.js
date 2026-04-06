#!/usr/bin/env node
/**
 * translation_review_day{3,5}.json 갱신
 * - 신규 17개 키 등록
 * - 회상/플래시백 수정으로 텍스트가 바뀐 기존 키의 _ko_text_preview 갱신 + _reviewed: false
 */

const fs = require('fs');
const path = require('path');

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
            _issues: '신규/수정 — 검토 필요'
        };
    }
    return entry;
}

function loadKo(file) {
    return JSON.parse(fs.readFileSync(`assets/js/i18n/ko/${file}.json`, 'utf-8'));
}

// ── Day 3 처리 ──
const day3path = 'translation_review_day3.json';
const day3 = JSON.parse(fs.readFileSync(day3path, 'utf-8'));
const day3_3 = day3.day3_3_afterschool;
const day3_4 = day3.day3_4_night;
const ko3_3 = loadKo('day3_3_afterschool');
const ko3_4 = loadKo('day3_4_night');

// 신규 키 (Day 3 방과후)
const newDay3Keys = [
    'after3_reject_for_seo_3b',
    'after3_reject_for_seo_3c',
    'after3_dain_dilemma_tell',
    'after3_dain_dilemma_tell_2',
    'after3_dain_dilemma_tell_3',
    'after3_dain_dilemma_tell_4',
    'after3_dain_dilemma_tell_5',
    'after3_dain_dilemma_tell_6',
    'after3_dain_dilemma_tell_7',
    'after3_dain_dilemma_tell_8',
    'after3_dain_dilemma_final',
    'after3_dain_tell_confirm',
    'after3_dain_tell_confirm_2',
    'after3_dain_tell_confirm_3',
    'after3_dain_tell_retreat'
];

let added = 0;
let updated = 0;

for (const k of newDay3Keys) {
    if (!ko3_3[k]) continue;
    if (!day3_3[k]) {
        day3_3[k] = makeEntry('day3_3_afterschool', k, ko3_3[k]);
        added++;
    } else {
        day3_3[k]._ko_text_preview = ko3_3[k].text;
        for (const l of ['en','ja','es','fr','de']) {
            if (day3_3[k][l]) day3_3[k][l]._reviewed = false;
        }
        updated++;
    }
}

// 삭제된 고아 키 제거
const removedDay3Keys = [
    'after3_dain_choice2',
    'after3_dain_choice2_ins',
    'after3_dain_choice2_ins2',
    'after3_dain_choice2_ins3',
    'after3_dain_choice2_ins4',
    'after3_dain_choice2_ins5',
    'after3_dain_choice2_ins6'
];
let removed = 0;
for (const k of removedDay3Keys) {
    if (day3_3[k]) {
        delete day3_3[k];
        removed++;
    }
}

// 수정된 기존 키 (Day 3 방과후 — 선택지 변경 + 안내 텍스트)
const modifiedDay3_3Keys = [
    'after3_dain_choice',          // 선택지 변경
    'after3_reject_for_seo_3',     // 쪽지 텍스트 강화
    'after3_reject_for_seo_4',     // 후속 내레이션 강화
    'minsu_d3_7_ins',              // 소정이 회상 하이브리드
    'minsu_d3_7_ins2'              // 소정이 회상 하이브리드
];
for (const k of modifiedDay3_3Keys) {
    if (day3_3[k] && ko3_3[k]) {
        day3_3[k]._ko_text_preview = ko3_3[k].text;
        if (ko3_3[k].choices) day3_3[k]._has_choices = true;
        for (const l of ['en','ja','es','fr','de']) {
            if (day3_3[k][l]) {
                day3_3[k][l]._reviewed = false;
                day3_3[k][l]._issues = '한국어 본문 수정 — 재번역 필요';
            }
        }
        updated++;
    }
}

// Day 3 밤 — 소정이 회상 수정
const modifiedDay3_4Keys = [
    'night3_faithful_reflect_2_ins',
    'night3_faithful_reflect_3_ins',
    'night3_faithful_reflect_4',
    'night3_cheat_reflect_2',
    'night3_cheat_reflect_3_ins'
];
for (const k of modifiedDay3_4Keys) {
    if (day3_4 && day3_4[k] && ko3_4[k]) {
        day3_4[k]._ko_text_preview = ko3_4[k].text;
        for (const l of ['en','ja','es','fr','de']) {
            if (day3_4[k][l]) {
                day3_4[k][l]._reviewed = false;
                day3_4[k][l]._issues = '한국어 본문 수정 — 재번역 필요';
            }
        }
        updated++;
    }
}

fs.writeFileSync(day3path, JSON.stringify(day3, null, 2) + '\n', 'utf-8');
console.log(`✅ ${day3path} — 신규 ${added}, 수정 ${updated}, 삭제 ${removed}`);

// ── Day 1 처리 (소정이 카톡 수정) ──
const day1path = 'translation_review_day1.json';
const day1 = JSON.parse(fs.readFileSync(day1path, 'utf-8'));
const day1_3 = day1.day1_3_afterschool;
const ko1_3 = loadKo('day1_3_afterschool');

let day1Updated = 0;
const modifiedDay1Keys = ['after_kakao_1', 'after_kakao_3', 'after_kakao_5'];
for (const k of modifiedDay1Keys) {
    if (day1_3 && day1_3[k] && ko1_3[k]) {
        day1_3[k]._ko_text_preview = ko1_3[k].text;
        for (const l of ['en','ja','es','fr','de']) {
            if (day1_3[k][l]) {
                day1_3[k][l]._reviewed = false;
                day1_3[k][l]._issues = '소정이 백스토리 수정 — 재번역 필요';
            }
        }
        day1Updated++;
    }
}
fs.writeFileSync(day1path, JSON.stringify(day1, null, 2) + '\n', 'utf-8');
console.log(`✅ ${day1path} — 수정 ${day1Updated}`);

// ── Day 2 처리 (소정이 회상 수정) ──
const day2path = 'translation_review_day2.json';
const day2 = JSON.parse(fs.readFileSync(day2path, 'utf-8'));
const day2_4 = day2.day2_4_night;
const ko2_4 = loadKo('day2_4_night');

let day2Updated = 0;
const modifiedDay2Keys = [
    'night2_flashback_2',
    'night2_flashback_3',
    'night2_flashback_5',
    'night2_flashback_7'
];
for (const k of modifiedDay2Keys) {
    if (day2_4 && day2_4[k] && ko2_4[k]) {
        day2_4[k]._ko_text_preview = ko2_4[k].text;
        for (const l of ['en','ja','es','fr','de']) {
            if (day2_4[k][l]) {
                day2_4[k][l]._reviewed = false;
                day2_4[k][l]._issues = '소정이 백스토리 수정 — 재번역 필요';
            }
        }
        day2Updated++;
    }
}
fs.writeFileSync(day2path, JSON.stringify(day2, null, 2) + '\n', 'utf-8');
console.log(`✅ ${day2path} — 수정 ${day2Updated}`);

// ── Day 5 처리 (yuna_story_gone 신규 + 엔딩 회상 수정) ──
const day5path = 'translation_review_day5.json';
const day5 = JSON.parse(fs.readFileSync(day5path, 'utf-8'));
const day5_1 = day5.day5_1_morning;
const day5_4 = day5.day5_4_night;
const ko5_1 = loadKo('day5_1_morning');
const ko5_4 = loadKo('day5_4_night');

let day5Added = 0;
let day5Updated = 0;

const newDay5Keys = ['morning5_yuna_story_gone', 'morning5_yuna_story_gone_2'];
for (const k of newDay5Keys) {
    if (!ko5_1[k]) continue;
    if (!day5_1[k]) {
        day5_1[k] = makeEntry('day5_1_morning', k, ko5_1[k]);
        day5Added++;
    }
}

// morning5_seo_note_1_ins (분기 추가됨)
if (day5_1['morning5_seo_note_1_ins'] && ko5_1['morning5_seo_note_1_ins']) {
    day5_1['morning5_seo_note_1_ins']._ko_text_preview = ko5_1['morning5_seo_note_1_ins'].text;
    for (const l of ['en','ja','es','fr','de']) {
        day5_1['morning5_seo_note_1_ins'][l]._reviewed = false;
        day5_1['morning5_seo_note_1_ins'][l]._issues = '분기 추가 — 재번역 필요';
    }
    day5Updated++;
}
// morning5_seo_note_1_ins3 (텍스트 통합)
if (day5_1['morning5_seo_note_1_ins3'] && ko5_1['morning5_seo_note_1_ins3']) {
    day5_1['morning5_seo_note_1_ins3']._ko_text_preview = ko5_1['morning5_seo_note_1_ins3'].text;
    for (const l of ['en','ja','es','fr','de']) {
        day5_1['morning5_seo_note_1_ins3'][l]._reviewed = false;
        day5_1['morning5_seo_note_1_ins3'][l]._issues = '텍스트 통합 — 재번역 필요';
    }
    day5Updated++;
}

// Day 5 엔딩 — 소정이 회상 수정
const modifiedDay5_4Keys = [
    'friend_8',         // 졸업식 갤러리 회상 변경
    'mayhem_7'          // mayhem 엔딩 회상 변경
];
for (const k of modifiedDay5_4Keys) {
    if (day5_4 && day5_4[k] && ko5_4[k]) {
        day5_4[k]._ko_text_preview = ko5_4[k].text;
        for (const l of ['en','ja','es','fr','de']) {
            if (day5_4[k][l]) {
                day5_4[k][l]._reviewed = false;
                day5_4[k][l]._issues = '소정이 백스토리 수정 — 재번역 필요';
            }
        }
        day5Updated++;
    }
}

fs.writeFileSync(day5path, JSON.stringify(day5, null, 2) + '\n', 'utf-8');
console.log(`✅ ${day5path} — 신규 ${day5Added}, 수정 ${day5Updated}`);

console.log('\n✨ translation_review 갱신 완료');
