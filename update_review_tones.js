#!/usr/bin/env node
/**
 * 대사 톤 수정 후 translation_review_day*.json 갱신 헬퍼
 * - _ko_text_preview 를 새 KO 텍스트로 교체
 * - 외국어 _reviewed: false 마킹 (pt 자동 추가)
 * - 사용: node update_review_tones.js <day>
 *   day = 1~5
 */
const fs = require('fs');
const path = require('path');

const FOREIGN_LANGS = ['en', 'ja', 'es', 'fr', 'de', 'pt'];

const DAY_UPDATES = {
    1: [
        { section: 'day1_1_morning', node: 'seoyeon_meet_4', preview: '학생회장. 전학생 안내는 내 담당이야.' },
        { section: 'day1_1_morning', node: 'hallway_6_c', preview: '*0.5초의 멈칫. 별거 아닐 텐데*' },
        { section: 'day1_2_lunch', node: 'lunch_seo_6_b', preview: '*미소* 의심 많네. — 위가 조용하니까.' },
        { section: 'day1_2_lunch', node: 'lunch_dain_2', preview: '소보로빵에 딸기우유. 이 조합은 한 번도 안 무너졌어.' },
        { section: 'day1_2_lunch', node: 'lunch_dain_18', preview: '아니, 나랑 다니려면 체력 테스트부터 ㅋㅋ' },
        { section: 'day1_3_afterschool', node: 'after_miss_seoyeon_4', preview: '옥상 열어놨는데 안 왔네. — 전학생, 배짱이 있어.' },
        { section: 'day1_3_afterschool', node: 'after_hidden_homeroom_3_b', preview: '아까 하셨던 말씀이 — 계속 남아서요.' },
        { section: 'day1_3_afterschool', node: 'after_homeroom_honest_1', preview: '정신없는 게 정상이야. 첫날부터 여유로우면 그게 더 이상한 거지.' }
    ],
    2: [
        { section: 'day2_2_lunch', node: 'lunch2_dain_end_h', preview: '*말투는 어제 그대로. 근데 눈은 이미 상처 위에 있다.*' },
        { section: 'day2_2_lunch', node: 'lunch2_dain_end_ins8_first', preview: '*말투는 여전한데. 근데 눈은 이미 상처 위에 있다.*' },
        { section: 'day2_2_lunch', node: 'lunch2_dain_end_q', preview: '*정성. 이 단어로 다 담기는 게 맞나.*' },
        { section: 'day2_2_lunch', node: 'lunch2_dain_end_d2', preview: '*방금 — 목소리가 살짝 떨렸다.*' },
        { section: 'day2_3_afterschool', node: 'after2_dain_5', preview: '*빨리 온 쪽이 너. 나는 안 늦었다.*' },
        { section: 'day2_3_afterschool', node: 'after2_dain_9_e', preview: '*랠리가 오간다. 빠르고 정확한 움직임*' },
        { section: 'day2_3_afterschool', node: 'after2_dain_end_3c', preview: "*'이었거든'. 과거형. — 지금은 묻지 말자.*" },
        { section: 'day2_4_night', node: 'night2_reply_seo_5', preview: "*'이번엔 진짜 와.' — 빠지면 대가가 따르는 톤.*" },
        { section: 'day2_4_night', node: 'night2_flashback_9', preview: '*소정이 때 나는 한 사람만 봤다.*' },
        { section: 'day2_4_night', node: 'night2_flashback_10', preview: '*— 그래서 셋 다 여지를 두고 있다.*' }
    ],
    3: [
        { section: 'day3_1_morning', node: 'morning3_seo_gate_4', preview: '지각하면 어때. 혼자 혼나는 것보단 낫잖아.' },
        { section: 'day3_1_morning', node: 'morning3_date_intro', preview: '*1교시가 끝났다. 쉬는 시간마다 — 누가 타이밍을 맞춰 말을 건다.*' },
        { section: 'day3_2_lunch', node: 'lunch3_meal_10', preview: '*마지막 계란말이 하나. 다 같이 먹자고 했다. — 공기가 내려앉았다.*' },
        { section: 'day3_2_lunch', node: 'lunch3_yuna_witness_2', preview: '*표정이 안 움직인다. — 그 정적이 오히려 날이 섰다.*' },
        { section: 'day3_2_lunch', node: 'lunch3_expose_honest_2', preview: '...거절을 못 해서. — 그게 제일 잔인해, {name}.' },
        { section: 'day3_3_afterschool', node: 'after3_seo_9', preview: '*서연이 자세를 바로잡는다. 하지만 — 웃음은 돌아오지 않았다.*' },
        { section: 'day3_3_afterschool', node: 'after3_seo_correct_8', preview: '*대화가 자연스럽게 이어진다. 엎드려 있던 사람도, 번진 화장도 — 지금 이 방엔 없다.*' },
        { section: 'day3_3_afterschool', node: 'after3_yuna_decode_trap_6', preview: '...너 같은 애들 때문에. 한 줄도 못 쓴다.' },
        { section: 'day3_3_afterschool', node: 'after3_dain_6', preview: '*느낌표가 많다. — 너무 많다. 괜찮을 땐 이만큼 안 찍는데.*' },
        { section: 'day3_4_night', node: 'night3_faithful_reflect_2_c', preview: '*1초. 화면만 내려다본다. — 소정이 책상의 낙서. 고개를 돌렸던 38번의 아침.*' },
        { section: 'day3_4_night', node: 'night3_cheat_msg_7', preview: '*유나가 세 줄을 보냈다. 평소 한 줄도 안 쓰는 사람이.*' }
    ],
    4: [
        { section: 'day4_1_morning', node: 'morning4_seo_msg_1_b', preview: '*명령형이다. 데이트 약속도 지시처럼. — 근데 웃긴다.*' },
        { section: 'day4_1_morning', node: 'hidden_homeroom_d4_5_d', preview: "*또 시작. '교육적 관심'이라는 포장 아래로 넘는 선.*" },
        { section: 'day4_2_lunch', node: 'date_seo_pretty_high_4', preview: "*'착각하지 마'. — 근데 머리카락 넘기는 손이 바쁘다.*" },
        { section: 'day4_2_lunch', node: 'date_seo_duck_4', preview: '*무심한 말인데 — 해봤던 사람의 목소리다.*' },
        { section: 'day4_3_afterschool', node: 'confess_seo_4_b', preview: '*숨이 얕아진다. 전 학교에서도 이랬다. — 그땐 삼켰던 말.*' },
        { section: 'day4_3_afterschool', node: 'confess_seo_yes_5', preview: '*단어가 꼬인다. 준비한 적도 없는데 — 멈추질 못 한다.*' },
        { section: 'day4_3_afterschool', node: 'confess_yuna_yes_6_b', preview: '*내 말이 유나의 말보다 길어진 날. — 처음이다.*' },
        { section: 'day4_4_night', node: 'wall_seo_9', preview: '*서연이 웃는다. — 평소의 여유가 아니다. 뒤에 뭔가 숨기는 웃음.*' },
        { section: 'day4_4_night', node: 'wall_seo_14', preview: '칭찬받을 때마다 생각했어. — 이 웃음도 연습한 거라고.' },
        { section: 'day4_4_night', node: 'wall_dain_20', preview: "학교에서 '에너지 넘치네!' 소리 들을 때마다 — 여기가. ...숨이 막혔어." },
        { section: 'day4_4_night', node: 'wall_dain_newdream_1', preview: '*그대로 옆에 앉아 있었다. 둘 다 말이 없다.*' },
        { section: 'day4_4_night', node: 'wall_yuna_12', preview: '*유나의 문장이 평소보다 길다. 훨씬.*' }
    ],
    5: [
        { section: 'day5_2_lunch', node: 'tour_seo_3', preview: "그때 '과분한데'라고 하니까 — 혼날 뻔했지." },
        { section: 'day5_2_lunch', node: 'tour_yuna_8', preview: "그때 말했잖아. '결말을 쓰면 끝난다'고." },
        { section: 'day5_2_lunch', node: 'tour_dain_12', preview: '뭐가 달라졌는진 몰라. ...근데 코트 밖에서도 내가 보여.' },
        { section: 'day5_3_afterschool', node: 'after5_last_chance_2_g', preview: '— 이번엔 보내고 싶지 않아. 네가 돌아왔으니까.' },
        { section: 'day5_3_afterschool', node: 'after5_last_chance_2_q', preview: '기다렸어. 어제부터. 아니 그저께부터.' },
        { section: 'day5_3_afterschool', node: 'after5_last_chance_2_s', preview: '...말해. 이번엔 끝까지 들을게.' },
        { section: 'day5_3_afterschool', node: 'after5_last_chance_yuna_5', preview: '...이번엔 듣고 갈게. 괜찮다고는 못 해도.' },
        { section: 'day5_3_afterschool', node: 'after5_confess_react_dain', preview: '*학교를 나서며.* 야, 진짜?! 나 기다리긴 했어.' }
    ]
};

const day = parseInt(process.argv[2] || '1', 10);
const updates = DAY_UPDATES[day];
if (!updates || !updates.length) {
    console.log(`Day ${day}: 업데이트 항목 없음`);
    process.exit(0);
}

const reviewFile = path.join(__dirname, `translation_review_day${day}.json`);
const data = JSON.parse(fs.readFileSync(reviewFile, 'utf8'));

// _meta 갱신: pt 추가 + all_reviewed false
if (data._meta) {
    if (data._meta.lang_avg && !('pt' in data._meta.lang_avg)) {
        data._meta.lang_avg.pt = 10;
    }
    data._meta.all_reviewed = false;
}

let ok = 0, missing = 0;
for (const { section, node, preview } of updates) {
    const n = data[section] && data[section][node];
    if (!n) {
        console.error(`  ✗ Not found: ${section}.${node}`);
        missing++;
        continue;
    }
    n._ko_text_preview = preview;
    for (const lang of FOREIGN_LANGS) {
        if (!n[lang]) {
            n[lang] = {
                _ref: `assets/js/i18n/${lang}/${section}.json#${node}`,
                _reviewed: false,
                _score: 10,
                _issues: null
            };
        } else {
            n[lang]._reviewed = false;
        }
    }
    ok++;
    console.log(`  ✓ ${section}.${node}`);
}

fs.writeFileSync(reviewFile, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log(`\nDay ${day}: ${ok}개 노드 갱신, ${missing}개 누락 → ${reviewFile}`);
