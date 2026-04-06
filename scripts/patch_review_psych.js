// translation_review_day{2,3}.json에 신규 9씬 엔트리 추가
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const NEW = {
  2: {
    section: 'day2_4_night',
    scenes: {
      night2_flashback_8: "*그런데 — 천장을 본다. 오늘 하루가 머릿속에서 안 꺼진다. 서연. 다인. 유나. 셋 다 신경이 쓰인다...*",
      night2_flashback_9: "*소정이 때 나는 한 사람만 봤다. 한 사람만 좋아했고, 한 사람만 보다가 — 그 한 사람이 무너지는 걸 옆에서 다 봤으면서도 메모장에서 멈췄다...*",
      night2_flashback_10: "*— 그래서 지금 내가 셋한테 다 여지를 두고 있는 거다. 인정하기 싫지만. 한 명을 너무 빨리 정하면, 그 한 명만 보게 되고...*",
    }
  },
  3: {
    section: 'day3_1_morning',
    scenes: {
      hidden_homeroom_d3_4_f: "*그런데 — 한 발을 못 떼겠다. 이 사람은 담임이다. 내 출결을 찍고, 내 성적을 매기고...*",
      hidden_homeroom_d3_4_g: "*그래서 지금 내가 이 사람의 비밀을 들여다보는 게 — 호의일까, 월권일까. 학생이 교사의 약한 면을 알아버리면...*",
      hidden_homeroom_d3_4_h: "*— 근데 동시에 알겠다. 모른 척하는 것도 선택이다. 이 사람은 지금 누군가에게 들키고 싶었던 표정이었다...*",
      hidden_nurse_d3_8_f: "*복도로 나왔다. 한 발 떼고 멈춘다. — 방금 그건 뭐였지. 이 사람은 환자를 한 명 잃었다...*",
      hidden_nurse_d3_8_g: "*나는 학생이고, 저 사람은 보건교사다... 내가 두근거리는 건 — 진짜로 이 사람이 좋아진 건가, 아니면 어른 여자가 나한테 처음으로 '괜찮니' 하고 오래 봐줘서인가...*",
      hidden_nurse_d3_8_h: "*그리고 더 무서운 건 저쪽 방향이다. 이 사람한테 나는 — 못 살린 유진이의 자리에 비슷한 나이로 앉은 학생이다...*",
    }
  }
};

const LANGS = ['en', 'ja', 'es', 'fr', 'de'];

function makeEntry(day, section, sceneId, preview) {
  const langDay = `day${day}_${section.split('_')[1]}_${section.split('_')[2]}`; // e.g. day2_4_night
  const e = {
    _ko_ref: `assets/js/i18n/ko/${langDay}.json#${sceneId}`,
    _ko_name: '{name}',
    _ko_text_preview: preview,
    _has_choices: false,
  };
  for (const l of LANGS) {
    e[l] = {
      _ref: `assets/js/i18n/${l}/${langDay}.json#${sceneId}`,
      _reviewed: false,
      _score: 10,
      _issues: null,
    };
  }
  return e;
}

for (const day of [2, 3]) {
  const fp = path.join(ROOT, `translation_review_day${day}.json`);
  const json = JSON.parse(fs.readFileSync(fp, 'utf8'));
  const { section, scenes } = NEW[day];
  if (!json[section]) { console.error(`section ${section} missing`); continue; }
  let added = 0;
  for (const [sceneId, preview] of Object.entries(scenes)) {
    if (json[section][sceneId]) continue;
    json[section][sceneId] = makeEntry(day, section, sceneId, preview);
    added++;
  }
  if (json._meta) {
    json._meta.total_nodes = (json._meta.total_nodes || 0) + added;
    json._meta.all_reviewed = false;
  }
  fs.writeFileSync(fp, JSON.stringify(json, null, 2) + '\n', 'utf8');
  console.log(`day${day}: +${added} entries`);
}
