const fs = require('fs');
const path = require('path');

function addEntries(filePath, entries) {
    let data = {};
    if (fs.existsSync(filePath)) {
        data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    Object.assign(data, entries);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
}

// =====================================================================
// Day 2 Afterschool - Nurse PE scene (nurse_day1 conditional)
// =====================================================================
console.log('--- Day 2 Afterschool (Nurse PE scene) ---');

let after2Content = fs.readFileSync('assets/js/scenario/day2_3_afterschool.js', 'utf8');

// Change after2_start to branch: if nurse_day1, show nurse scene first, then proceed
// Actually, per scenario, nurse PE scene happens during Day 2 LUNCH (체육 시간), not afterschool
// But the task says to put it in day2_3_afterschool.js
// Let's add the nurse scene and connect it: after2_start -> hidden_nurse_d2_check -> (if nurse_day1) nurse scene -> after2_choice

after2Content = after2Content.replace(
    '"after2_start": {\n        "background": "assets/images/background/room_school.png",\n        "bgm": "sunset1.mp3",\n        "character": null,\n        "next": "after2_choice"\n    }',
    '"after2_start": {\n        "background": "assets/images/background/room_school.png",\n        "bgm": "sunset1.mp3",\n        "character": null,\n        "branches": [\n            { "condition": "nurse_day1", "next": "hidden_nurse_d2_1" },\n            { "next": "after2_choice" }\n        ]\n    }'
);

const nurse_d2_nodes = `
    // =========================================================================
    // HIDDEN ROUTE - Day 2 보건선생님 체육 시간
    // =========================================================================
    "hidden_nurse_d2_1": {
        "background": "assets/images/background/nurse_room.png",
        "character": null,
        "condition": "nurse_day1",
        "next": "hidden_nurse_d2_2"
    },
    "hidden_nurse_d2_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_3"
    },
    "hidden_nurse_d2_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": null,
        "next": "hidden_nurse_d2_4"
    },
    "hidden_nurse_d2_4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_5"
    },
    "hidden_nurse_d2_5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_6"
    },
    "hidden_nurse_d2_6": {
        "background": "assets/images/background/nurse_room.png",
        "character": null,
        "next": "hidden_nurse_d2_7"
    },
    "hidden_nurse_d2_7": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_8"
    },
    "hidden_nurse_d2_8": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_9"
    },
    "hidden_nurse_d2_9": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlag": "nurse_day2",
        "next": "hidden_nurse_d2_freetalk"
    },
    "hidden_nurse_d2_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after2_choice"
    },`;

after2Content = after2Content.replace('});', nurse_d2_nodes + '\n});');
fs.writeFileSync('assets/js/scenario/day2_3_afterschool.js', after2Content);
console.log('  day2_3_afterschool.js updated');

// Day 2 Afterschool i18n
const nurse_d2_i18n = {
    ko: {
        "hidden_nurse_d2_1": { "name": "{name}", "text": "*체육 시간에 팔꿈치가 까졌다. 별거 아닌데 피가 조금 난다.*" },
        "hidden_nurse_d2_2": { "name": "보건선생님", "text": "어머, 어제의 전학생. 또 왔네? 단골 되려고?" },
        "hidden_nurse_d2_3": { "name": "{name}", "text": "팔꿈치 좀 까졌는데요." },
        "hidden_nurse_d2_4": { "name": "보건선생님", "text": "가만있어 봐~..." },
        "hidden_nurse_d2_5": { "name": "보건선생님", "text": "여기... 이렇게... 자, 됐다. 정성이야, 정성. 대충 붙이면 떨어지거든." },
        "hidden_nurse_d2_6": { "name": "{name}", "text": "*밴드를 확인하는데 — 책상 위에 노트북이 열려 있다. 의료 기록이 아니라 — 개인 일기 같은 것.*" },
        "hidden_nurse_d2_7": { "name": "보건선생님", "text": "그건 안 봤지? 비밀~ 선생님도 비밀이 있는 거야." },
        "hidden_nurse_d2_8": { "name": "보건선생님", "text": "자, 다 됐으니까 수업 가. — 다음에는 안 다치고 와." },
        "hidden_nurse_d2_9": { "name": "보건선생님", "text": "이유 없어도 와도 돼. — 아 물론 수업 시간에는 안 되고~! 방과후에!" },
        "hidden_nurse_d2_freetalk": { "name": "보건선생님", "text": "*보건선생님과 보건실에서 대화 중.*", "context": "Day 2. 체육 시간에 팔꿈치를 다쳐서 보건실에 왔다. 보건선생님이 정성껏 밴드를 붙여줬다.", "personality": "보건선생님은 장난스럽지만 정성스러운 사람. 밴드를 붙이는 데 시간이 오래 걸린다. 비밀을 숨기고 있다." }
    },
    en: {
        "hidden_nurse_d2_1": { "name": "Me", "text": "*Scraped my elbow during PE. Nothing major, but it's bleeding a little.*" },
        "hidden_nurse_d2_2": { "name": "School Nurse", "text": "Oh my, yesterday's transfer student. Back already? Trying to become a regular?" },
        "hidden_nurse_d2_3": { "name": "Me", "text": "I scraped my elbow." },
        "hidden_nurse_d2_4": { "name": "School Nurse", "text": "Hold still~..." },
        "hidden_nurse_d2_5": { "name": "School Nurse", "text": "Here... like this... there, done. It's all about care. Slap it on carelessly and it'll peel off." },
        "hidden_nurse_d2_6": { "name": "Me", "text": "*Checking the bandage when — her laptop is open on the desk. That's not a medical record — looks more like a personal diary.*" },
        "hidden_nurse_d2_7": { "name": "School Nurse", "text": "You didn't see that, right? Secret~ Even teachers have secrets." },
        "hidden_nurse_d2_8": { "name": "School Nurse", "text": "All done, get back to class. — Next time, come without an injury." },
        "hidden_nurse_d2_9": { "name": "School Nurse", "text": "You can come even without a reason. — Well, not during class~! After school!" },
        "hidden_nurse_d2_freetalk": { "name": "School Nurse", "text": "*Chatting with the school nurse in the nurse's office.*", "context": "Day 2. Scraped elbow during PE, came to the nurse's office. The nurse carefully applied a bandage.", "personality": "The school nurse is playful but meticulous. Takes a long time applying bandages. Hiding something personal." }
    },
    es: {
        "hidden_nurse_d2_1": { "name": "Yo", "text": "*Me raspe el codo en educaci\u00f3n f\u00edsica. No es nada grave, pero sangra un poco.*" },
        "hidden_nurse_d2_2": { "name": "Enfermera", "text": "Vaya, el nuevo de ayer. \u00bfOtra vez aqu\u00ed? \u00bfQuieres ser cliente fijo?" },
        "hidden_nurse_d2_3": { "name": "Yo", "text": "Me raspe el codo." },
        "hidden_nurse_d2_4": { "name": "Enfermera", "text": "Qu\u00e9date quieto~..." },
        "hidden_nurse_d2_5": { "name": "Enfermera", "text": "Aqu\u00ed... as\u00ed... listo. Es cuesti\u00f3n de cuidado. Si lo pones mal, se despega." },
        "hidden_nurse_d2_6": { "name": "Yo", "text": "*Revisando la tirita cuando \u2014 su port\u00e1til est\u00e1 abierto en el escritorio. No es un historial m\u00e9dico \u2014 parece un diario personal.*" },
        "hidden_nurse_d2_7": { "name": "Enfermera", "text": "No viste eso, \u00bfverdad? Secreto~ Los profesores tambi\u00e9n tienen secretos." },
        "hidden_nurse_d2_8": { "name": "Enfermera", "text": "Listo, vuelve a clase. \u2014 La pr\u00f3xima vez, ven sin heridas." },
        "hidden_nurse_d2_9": { "name": "Enfermera", "text": "Puedes venir sin raz\u00f3n. \u2014 Bueno, no en horario de clase~! \u00a1Despu\u00e9s de clases!" },
        "hidden_nurse_d2_freetalk": { "name": "Enfermera", "text": "*Conversando con la enfermera en la enfermer\u00eda.*", "context": "D\u00eda 2. Se raspo el codo en educaci\u00f3n f\u00edsica.", "personality": "La enfermera es juguetona pero meticulosa. Tarda mucho en poner tiritas. Esconde algo personal." }
    },
    ja: {
        "hidden_nurse_d2_1": { "name": "\u50d5", "text": "*\u4f53\u80b2\u306e\u6642\u9593\u306b\u8098\u3092\u64e6\u308a\u3080\u3044\u305f\u3002\u5927\u3057\u305f\u3053\u3068\u306a\u3044\u3051\u3069\u3001\u5c11\u3057\u8840\u304c\u51fa\u3066\u3044\u308b\u3002*" },
        "hidden_nurse_d2_2": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u3042\u3089\u3001\u6628\u65e5\u306e\u8ee2\u6821\u751f\u3002\u307e\u305f\u6765\u305f\u306e\uff1f\u5e38\u9023\u306b\u306a\u308b\u6c17\uff1f" },
        "hidden_nurse_d2_3": { "name": "\u50d5", "text": "\u8098\u3092\u3061\u3087\u3063\u3068\u64e6\u308a\u3080\u3044\u3066\u3002" },
        "hidden_nurse_d2_4": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u3058\u3063\u3068\u3057\u3066\u3066\uff5e\u2026" },
        "hidden_nurse_d2_5": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u3053\u3053\u2026\u3053\u3046\u3057\u3066\u2026\u3088\u3057\u3001\u3067\u304d\u305f\u3002\u4e01\u5be7\u306b\u3084\u3089\u306a\u3044\u3068\u5265\u304c\u308c\u3061\u3083\u3046\u304b\u3089\u306d\u3002" },
        "hidden_nurse_d2_6": { "name": "\u50d5", "text": "*\u7d46\u5275\u818f\u3092\u78ba\u8a8d\u3057\u3066\u3044\u308b\u3068\u2014\u2014\u673a\u306e\u4e0a\u306e\u30ce\u30fc\u30c8\u30d1\u30bd\u30b3\u30f3\u304c\u958b\u3044\u3066\u3044\u308b\u3002\u533b\u7642\u8a18\u9332\u3058\u3083\u306a\u304f\u3066\u2014\u2014\u500b\u4eba\u7684\u306a\u65e5\u8a18\u306e\u3088\u3046\u306a\u3082\u306e\u3002*" },
        "hidden_nurse_d2_7": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u305d\u308c\u3001\u898b\u3066\u306a\u3044\u3088\u306d\uff1f\u79d8\u5bc6\uff5e\u5148\u751f\u306b\u3082\u79d8\u5bc6\u304c\u3042\u308b\u306e\u3002" },
        "hidden_nurse_d2_8": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u3088\u3057\u3001\u7d42\u308f\u3063\u305f\u304b\u3089\u6388\u696d\u306b\u623b\u308a\u306a\u3002\u2014\u2014\u6b21\u306f\u602a\u6211\u3057\u306a\u3044\u3067\u6765\u3066\u306d\u3002" },
        "hidden_nurse_d2_9": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u7406\u7531\u304c\u306a\u304f\u3066\u3082\u6765\u3066\u3044\u3044\u3088\u3002\u2014\u2014\u3042\u3001\u3082\u3061\u308d\u3093\u6388\u696d\u4e2d\u306f\u30c0\u30e1\uff5e\uff01\u653e\u8ab2\u5f8c\u306b\u306d\uff01" },
        "hidden_nurse_d2_freetalk": { "name": "\u4fdd\u5065\u5148\u751f", "text": "*\u4fdd\u5065\u5148\u751f\u3068\u4fdd\u5065\u5ba4\u3067\u4f1a\u8a71\u4e2d\u3002*", "context": "Day 2\u3002\u4f53\u80b2\u3067\u8098\u3092\u64e6\u308a\u3080\u3044\u3066\u4fdd\u5065\u5ba4\u306b\u6765\u305f\u3002", "personality": "\u4fdd\u5065\u5148\u751f\u306f\u3044\u305f\u305a\u3089\u597d\u304d\u3060\u304c\u4e01\u5be7\u3002\u7d46\u5275\u818f\u306b\u6642\u9593\u3092\u304b\u3051\u308b\u3002\u4f55\u304b\u96a0\u3057\u3066\u3044\u308b\u3002" }
    },
    fr: {
        "hidden_nurse_d2_1": { "name": "Moi", "text": "*Je me suis \u00e9corche le coude en sport. Rien de grave, mais \u00e7a saigne un peu.*" },
        "hidden_nurse_d2_2": { "name": "Infirmi\u00e8re", "text": "Oh, le nouveau d'hier. D\u00e9j\u00e0 de retour ? Tu veux devenir un habitu\u00e9 ?" },
        "hidden_nurse_d2_3": { "name": "Moi", "text": "Je me suis \u00e9corche le coude." },
        "hidden_nurse_d2_4": { "name": "Infirmi\u00e8re", "text": "Bouge pas~..." },
        "hidden_nurse_d2_5": { "name": "Infirmi\u00e8re", "text": "L\u00e0... comme \u00e7a... voil\u00e0. C'est une question de soin. Un pansement mal pos\u00e9, \u00e7a tient pas." },
        "hidden_nurse_d2_6": { "name": "Moi", "text": "*En v\u00e9rifiant le pansement \u2014 son ordinateur est ouvert sur le bureau. Ce n'est pas un dossier m\u00e9dical \u2014 on dirait un journal intime.*" },
        "hidden_nurse_d2_7": { "name": "Infirmi\u00e8re", "text": "T'as rien vu, hein ? Secret~ Les profs aussi ont des secrets." },
        "hidden_nurse_d2_8": { "name": "Infirmi\u00e8re", "text": "C'est bon, retourne en cours. \u2014 La prochaine fois, viens sans blessure." },
        "hidden_nurse_d2_9": { "name": "Infirmi\u00e8re", "text": "Tu peux venir m\u00eame sans raison. \u2014 Enfin, pas pendant les cours~! Apr\u00e8s les cours !" },
        "hidden_nurse_d2_freetalk": { "name": "Infirmi\u00e8re", "text": "*En train de discuter avec l'infirmi\u00e8re dans l'infirmerie.*", "context": "Jour 2. Coude \u00e9corch\u00e9 en sport.", "personality": "L'infirmi\u00e8re est joueuse mais m\u00e9ticuleuse. Prend son temps pour les pansements." }
    },
    de: {
        "hidden_nurse_d2_1": { "name": "Ich", "text": "*Hab mir im Sportunterricht den Ellbogen aufgesch\u00fcrft. Nichts Schlimmes, aber es blutet ein bisschen.*" },
        "hidden_nurse_d2_2": { "name": "Schulkrankenschwester", "text": "Oh, der Neue von gestern. Schon wieder hier? Willst du Stammgast werden?" },
        "hidden_nurse_d2_3": { "name": "Ich", "text": "Hab mir den Ellbogen aufgeschrammt." },
        "hidden_nurse_d2_4": { "name": "Schulkrankenschwester", "text": "Halt still~..." },
        "hidden_nurse_d2_5": { "name": "Schulkrankenschwester", "text": "Hier... so... fertig. Mit Sorgfalt, sonst h\u00e4lt's nicht." },
        "hidden_nurse_d2_6": { "name": "Ich", "text": "*Beim Pr\u00fcfen des Pflasters \u2014 ihr Laptop steht offen auf dem Tisch. Das ist keine Krankenakte \u2014 sieht eher wie ein pers\u00f6nliches Tagebuch aus.*" },
        "hidden_nurse_d2_7": { "name": "Schulkrankenschwester", "text": "Das hast du nicht gesehen, oder? Geheimnis~ Auch Lehrer haben Geheimnisse." },
        "hidden_nurse_d2_8": { "name": "Schulkrankenschwester", "text": "Fertig, geh zur\u00fcck zum Unterricht. \u2014 N\u00e4chstes Mal kommst du ohne Verletzung." },
        "hidden_nurse_d2_9": { "name": "Schulkrankenschwester", "text": "Du kannst auch ohne Grund kommen. \u2014 Na ja, nicht w\u00e4hrend des Unterrichts~! Nach der Schule!" },
        "hidden_nurse_d2_freetalk": { "name": "Schulkrankenschwester", "text": "*Im Gespr\u00e4ch mit der Schulkrankenschwester im Krankenzimmer.*", "context": "Tag 2. Ellbogen beim Sport aufgesch\u00fcrft.", "personality": "Die Schulkrankenschwester ist verspielt aber gr\u00fcndlich. Braucht lange f\u00fcr Pflaster." }
    }
};

for (const [lang, entries] of Object.entries(nurse_d2_i18n)) {
    addEntries(`assets/js/i18n/${lang}/day2_3_afterschool.json`, entries);
}
console.log('  day2_3_afterschool i18n complete');

// =====================================================================
// Day 2 Night - hidden route night messages
// =====================================================================
console.log('\n--- Day 2 Night ---');

let night2Content = fs.readFileSync('assets/js/scenario/day2_4_night.js', 'utf8');

// Add hidden route nodes and make the freetalk nodes point to a hidden check instead of night2_end_1
const night2_hidden = `
    // =========================================================================
    // HIDDEN ROUTE - Day 2 Night messages
    // =========================================================================
    "night2_hidden_check": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "branches": [
            { "condition": "homeroom_day2", "next": "night2_hidden_homeroom_1" },
            { "condition": "nurse_day2", "next": "night2_hidden_nurse_1" },
            { "next": "night2_end_1" }
        ]
    },
    "night2_hidden_homeroom_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night2_hidden_homeroom_2"
    },
    "night2_hidden_homeroom_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night2_hidden_homeroom_3"
    },
    "night2_hidden_homeroom_3": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "branches": [
            { "condition": "nurse_day2", "next": "night2_hidden_nurse_1" },
            { "next": "night2_end_1" }
        ]
    },
    "night2_hidden_nurse_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night2_hidden_nurse_2"
    },
    "night2_hidden_nurse_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night2_end_1"
    },`;

// Change freetalk nodes to point to night2_hidden_check
night2Content = night2Content.replace(
    '"night2_seo_freetalk": {\n        "type": "free_talk",\n        "background": "assets/images/background/home_room.png",\n        "character": "assets/images/characters/seyoun_normal.png",\n        "next": "night2_end_1"\n    }',
    '"night2_seo_freetalk": {\n        "type": "free_talk",\n        "background": "assets/images/background/home_room.png",\n        "character": "assets/images/characters/seyoun_normal.png",\n        "next": "night2_hidden_check"\n    }'
);
night2Content = night2Content.replace(
    '"night2_dain_freetalk": {\n        "type": "free_talk",\n        "background": "assets/images/background/home_room.png",\n        "character": "assets/images/characters/dain_normal.png",\n        "next": "night2_end_1"\n    }',
    '"night2_dain_freetalk": {\n        "type": "free_talk",\n        "background": "assets/images/background/home_room.png",\n        "character": "assets/images/characters/dain_normal.png",\n        "next": "night2_hidden_check"\n    }'
);
night2Content = night2Content.replace(
    '"night2_yuna_freetalk": {\n        "type": "free_talk",\n        "background": "assets/images/background/home_room.png",\n        "character": "assets/images/characters/yuna_normal.png",\n        "next": "night2_end_1"\n    }',
    '"night2_yuna_freetalk": {\n        "type": "free_talk",\n        "background": "assets/images/background/home_room.png",\n        "character": "assets/images/characters/yuna_normal.png",\n        "next": "night2_hidden_check"\n    }'
);

night2Content = night2Content.replace('});', night2_hidden + '\n});');
fs.writeFileSync('assets/js/scenario/day2_4_night.js', night2Content);
console.log('  day2_4_night.js updated');

// Day 2 Night i18n
const night2_hidden_i18n = {
    ko: {
        "night2_hidden_check": { "name": "{name}", "text": "*메신저 알림 사이에 \u2014 또 다른 알림이 보인다.*" },
        "night2_hidden_homeroom_1": { "name": "{name}", "text": "*담임선생님에게서 개인 메시지가 왔다. '{name}, 오늘 교무실 와줘서 고마웠다. 행정적인 거 끝났으니까 더 안 불러도 된다. ...근데 적응 힘들면 언제든 와.'*" },
        "night2_hidden_homeroom_2": { "name": "{name}", "text": "*세 줄. 감사, 거리 두기, 다시 다가오기. \u2014 줄다리기를 혼자서 하고 있다.*" },
        "night2_hidden_homeroom_3": { "name": "{name}", "text": "*'더 안 불러도 된다'와 '언제든 와'가 같은 메시지에 들어 있다. 모순인데 \u2014 이 사람답다.*" },
        "night2_hidden_nurse_1": { "name": "{name}", "text": "*건강 관리 앱 알림. '보건실 기록: {name} \u2014 팔꿈치 찰과상 (경미). 메모: 밴드 내일 아침에 갈아줄게. 밴드 갈아주는 건 의료 행위니까 거부권 없음 ^^'*" },
        "night2_hidden_nurse_2": { "name": "{name}", "text": "*거부권 없음. \u2014 의료적 강제인 건지 개인적 관심인 건지, 이모티콘이 경계를 흐린다.*" }
    },
    en: {
        "night2_hidden_check": { "name": "Me", "text": "*Between the messenger alerts \u2014 I spot more notifications.*" },
        "night2_hidden_homeroom_1": { "name": "Me", "text": "*A private message from the homeroom teacher. '{name}, thanks for coming to the office today. The paperwork's done so I won't need to call you in again. ...But if adjusting gets tough, come by anytime.'*" },
        "night2_hidden_homeroom_2": { "name": "Me", "text": "*Three lines. Gratitude, distance, then reaching out again. \u2014 He's playing tug of war with himself.*" },
        "night2_hidden_homeroom_3": { "name": "Me", "text": "*'Won't need to call you in' and 'come by anytime' in the same message. Contradictory \u2014 but that's so him.*" },
        "night2_hidden_nurse_1": { "name": "Me", "text": "*Health app notification. 'Nurse's Record: {name} \u2014 Elbow abrasion (minor). Note: I'll change the bandage tomorrow morning. Changing bandages is a medical procedure so you can't refuse ^^'*" },
        "night2_hidden_nurse_2": { "name": "Me", "text": "*Can't refuse. \u2014 Is that medical authority or personal interest? The emoji blurs the line.*" }
    },
    es: {
        "night2_hidden_check": { "name": "Yo", "text": "*Entre las alertas del chat \u2014 veo m\u00e1s notificaciones.*" },
        "night2_hidden_homeroom_1": { "name": "Yo", "text": "*Un mensaje privado del profesor. '{name}, gracias por venir a la oficina hoy. El papeleo ya termin\u00f3, no tendr\u00e9 que llamarte m\u00e1s. ...Pero si la adaptaci\u00f3n se pone dif\u00edcil, pasa cuando quieras.'*" },
        "night2_hidden_homeroom_2": { "name": "Yo", "text": "*Tres l\u00edneas. Agradecimiento, distancia, y luego acercarse de nuevo. \u2014 Est\u00e1 tirando de la cuerda consigo mismo.*" },
        "night2_hidden_homeroom_3": { "name": "Yo", "text": "*'No tendr\u00e9 que llamarte' y 'pasa cuando quieras' en el mismo mensaje. Contradictorio \u2014 pero t\u00edpico de \u00e9l.*" },
        "night2_hidden_nurse_1": { "name": "Yo", "text": "*Notificaci\u00f3n de la app de salud. 'Registro enfermer\u00eda: {name} \u2014 Rasgu\u00f1o en el codo (leve). Nota: Te cambio la tirita ma\u00f1ana. Cambiar tiritas es un acto m\u00e9dico as\u00ed que no puedes negarte ^^'*" },
        "night2_hidden_nurse_2": { "name": "Yo", "text": "*Sin derecho a negarse. \u2014 \u00bfEs autoridad m\u00e9dica o inter\u00e9s personal? El emoji difumina la l\u00ednea.*" }
    },
    ja: {
        "night2_hidden_check": { "name": "\u50d5", "text": "*\u30e1\u30c3\u30bb\u30f3\u30b8\u30e3\u30fc\u306e\u901a\u77e5\u306e\u9593\u306b\u2014\u2014\u307e\u305f\u5225\u306e\u901a\u77e5\u304c\u898b\u3048\u308b\u3002*" },
        "night2_hidden_homeroom_1": { "name": "\u50d5", "text": "*\u62c5\u4efb\u5148\u751f\u304b\u3089\u500b\u4eba\u30e1\u30c3\u30bb\u30fc\u30b8\u3002\u300e{name}\u3001\u4eca\u65e5\u306f\u8077\u54e1\u5ba4\u306b\u6765\u3066\u304f\u308c\u3066\u3042\u308a\u304c\u3068\u3046\u3002\u4e8b\u52d9\u7684\u306a\u3053\u3068\u306f\u7d42\u308f\u3063\u305f\u304b\u3089\u3082\u3046\u547c\u3070\u306a\u3044\u3002\u2026\u3067\u3082\u3064\u3089\u304b\u3063\u305f\u3089\u3044\u3064\u3067\u3082\u6765\u3044\u300f*" },
        "night2_hidden_homeroom_2": { "name": "\u50d5", "text": "*\u4e09\u884c\u3002\u611f\u8b1d\u3001\u8ddd\u96e2\u3001\u305d\u3057\u3066\u307e\u305f\u8fd1\u3065\u304f\u3002\u2014\u2014\u4e00\u4eba\u3067\u7db1\u5f15\u304d\u3057\u3066\u3044\u308b\u3002*" },
        "night2_hidden_homeroom_3": { "name": "\u50d5", "text": "*\u300e\u3082\u3046\u547c\u3070\u306a\u3044\u300f\u3068\u300e\u3044\u3064\u3067\u3082\u6765\u3044\u300f\u304c\u540c\u3058\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u3002\u77db\u76fe\u3057\u3066\u308b\u3051\u3069\u2014\u2014\u3053\u306e\u4eba\u3089\u3057\u3044\u3002*" },
        "night2_hidden_nurse_1": { "name": "\u50d5", "text": "*\u5065\u5eb7\u7ba1\u7406\u30a2\u30d7\u30ea\u306e\u901a\u77e5\u3002\u300e\u4fdd\u5065\u5ba4\u8a18\u9332: {name} \u2014 \u8098\u64e6\u308a\u50b7\uff08\u8efd\u5ea6\uff09\u3002\u30e1\u30e2: \u7d46\u5275\u818f\u306f\u660e\u65e5\u306e\u671d\u66ff\u3048\u308b\u306d\u3002\u7d46\u5275\u818f\u4ea4\u63db\u306f\u533b\u7642\u884c\u70ba\u3060\u304b\u3089\u62d2\u5426\u6a29\u306a\u3057 ^^\u300f*" },
        "night2_hidden_nurse_2": { "name": "\u50d5", "text": "*\u62d2\u5426\u6a29\u306a\u3057\u3002\u2014\u2014\u533b\u7642\u7684\u5f37\u5236\u306a\u306e\u304b\u500b\u4eba\u7684\u95a2\u5fc3\u306a\u306e\u304b\u3001\u7d75\u6587\u5b57\u304c\u5883\u754c\u3092\u66d6\u6627\u306b\u3059\u308b\u3002*" }
    },
    fr: {
        "night2_hidden_check": { "name": "Moi", "text": "*Entre les alertes du chat \u2014 d'autres notifications apparaissent.*" },
        "night2_hidden_homeroom_1": { "name": "Moi", "text": "*Un message priv\u00e9 du prof principal. '{name}, merci d'\u00eatre pass\u00e9 au bureau aujourd'hui. L'administratif est r\u00e9gl\u00e9, plus besoin de revenir. ...Mais si l'adaptation est difficile, passe quand tu veux.'*" },
        "night2_hidden_homeroom_2": { "name": "Moi", "text": "*Trois lignes. Remerciement, distance, puis rapprochement. \u2014 Il joue au tir \u00e0 la corde avec lui-m\u00eame.*" },
        "night2_hidden_homeroom_3": { "name": "Moi", "text": "*'Plus besoin de revenir' et 'passe quand tu veux' dans le m\u00eame message. Contradictoire \u2014 mais tellement lui.*" },
        "night2_hidden_nurse_1": { "name": "Moi", "text": "*Notification de l'appli sant\u00e9. 'Dossier infirmerie : {name} \u2014 \u00c9corchure au coude (l\u00e9g\u00e8re). Note : Je changerai le pansement demain matin. Le changement de pansement est un acte m\u00e9dical, pas de droit de refus ^^'*" },
        "night2_hidden_nurse_2": { "name": "Moi", "text": "*Pas de droit de refus. \u2014 Autorit\u00e9 m\u00e9dicale ou int\u00e9r\u00eat personnel ? L'\u00e9moji brouille la fronti\u00e8re.*" }
    },
    de: {
        "night2_hidden_check": { "name": "Ich", "text": "*Zwischen den Chat-Benachrichtigungen \u2014 fallen mir weitere Meldungen auf.*" },
        "night2_hidden_homeroom_1": { "name": "Ich", "text": "*Eine private Nachricht vom Klassenlehrer. '{name}, danke, dass du heute im B\u00fcro warst. Der Papierkram ist erledigt, ich muss dich nicht mehr rufen. ...Aber wenn die Eingew\u00f6hnung schwer f\u00e4llt, komm jederzeit.'*" },
        "night2_hidden_homeroom_2": { "name": "Ich", "text": "*Drei Zeilen. Dank, Distanz, dann wieder Ann\u00e4herung. \u2014 Er spielt Tauziehen mit sich selbst.*" },
        "night2_hidden_homeroom_3": { "name": "Ich", "text": "*'Muss dich nicht mehr rufen' und 'komm jederzeit' in derselben Nachricht. Widerspr\u00fcchlich \u2014 aber das ist so typisch f\u00fcr ihn.*" },
        "night2_hidden_nurse_1": { "name": "Ich", "text": "*Benachrichtigung der Gesundheits-App. 'Krankenakte: {name} \u2014 Sch\u00fcrfwunde am Ellbogen (leicht). Notiz: Pflaster wechsle ich morgen fr\u00fch. Pflasterwechsel ist eine medizinische Ma\u00dfnahme, also kein Widerspruchsrecht ^^'*" },
        "night2_hidden_nurse_2": { "name": "Ich", "text": "*Kein Widerspruchsrecht. \u2014 Medizinische Anordnung oder pers\u00f6nliches Interesse? Das Emoji verwischt die Grenze.*" }
    }
};

for (const [lang, entries] of Object.entries(night2_hidden_i18n)) {
    addEntries(`assets/js/i18n/${lang}/day2_4_night.json`, entries);
}
console.log('  day2_4_night i18n complete');

// =====================================================================
// Day 3 Morning - 담임 빈교실 원고 발견 + 보건 감정 전환점
// =====================================================================
console.log('\n--- Day 3 Morning ---');

let morning3Content = fs.readFileSync('assets/js/scenario/day3_1_morning.js', 'utf8');

// Add hidden routes before morning3_end. Insert check before date intro.
// morning3_date_intro -> check hidden routes -> then continue
morning3Content = morning3Content.replace(
    '"morning3_date_intro": {\n        "character": null,\n        "background": "assets/images/background/room_school.png",\n        "next": "morning3_date_seo_1"\n    }',
    '"morning3_date_intro": {\n        "character": null,\n        "background": "assets/images/background/room_school.png",\n        "branches": [\n            { "condition": "homeroom_day2", "next": "hidden_homeroom_d3_1" },\n            { "next": "hidden_nurse_d3_check" }\n        ]\n    }'
);

const day3_hidden_nodes = `
    // =========================================================================
    // HIDDEN - Day 3 담임 빈 교실 원고 발견
    // =========================================================================
    "hidden_homeroom_d3_1": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "condition": "homeroom_day2",
        "next": "hidden_homeroom_d3_2"
    },
    "hidden_homeroom_d3_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_3"
    },
    "hidden_homeroom_d3_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_4"
    },
    "hidden_homeroom_d3_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_choice"
    },
    "hidden_homeroom_d3_choice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "hidden_homeroom_d3_reveal_1", "stats": { "Teacher": { "affinity": 10 } } },
            { "next": "hidden_homeroom_d3_hide_1", "stats": { "Teacher": { "affinity": 3 } } }
        ]
    },
    "hidden_homeroom_d3_reveal_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_2"
    },
    "hidden_homeroom_d3_reveal_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_3"
    },
    "hidden_homeroom_d3_reveal_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_4"
    },
    "hidden_homeroom_d3_reveal_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_5"
    },
    "hidden_homeroom_d3_reveal_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_6"
    },
    "hidden_homeroom_d3_reveal_6": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlag": "discovered_manuscript",
        "next": "hidden_homeroom_d3_end"
    },
    "hidden_homeroom_d3_hide_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_end"
    },
    "hidden_homeroom_d3_end": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "setFlag": "homeroom_day3",
        "next": "hidden_homeroom_d3_freetalk"
    },
    "hidden_homeroom_d3_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_nurse_d3_check"
    },

    // =========================================================================
    // HIDDEN - Day 3 보건선생님 감정 전환점
    // =========================================================================
    "hidden_nurse_d3_check": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            { "condition": "nurse_day2", "next": "hidden_nurse_d3_1" },
            { "next": "morning3_date_seo_1" }
        ]
    },
    "hidden_nurse_d3_1": {
        "background": "assets/images/background/nurse_room.png",
        "character": null,
        "condition": "nurse_day2",
        "next": "hidden_nurse_d3_2"
    },
    "hidden_nurse_d3_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_3"
    },
    "hidden_nurse_d3_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": null,
        "next": "hidden_nurse_d3_4"
    },
    "hidden_nurse_d3_4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5"
    },
    "hidden_nurse_d3_5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_6"
    },
    "hidden_nurse_d3_6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_7"
    },
    "hidden_nurse_d3_7": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_8"
    },
    "hidden_nurse_d3_8": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_9"
    },
    "hidden_nurse_d3_9": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlag": "nurse_day3",
        "next": "hidden_nurse_d3_freetalk"
    },
    "hidden_nurse_d3_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "morning3_date_seo_1"
    },`;

morning3Content = morning3Content.replace('    // === 종료 ===', day3_hidden_nodes + '\n    // === 종료 ===');
fs.writeFileSync('assets/js/scenario/day3_1_morning.js', morning3Content);
console.log('  day3_1_morning.js updated');

// Day 3 morning i18n
const day3_hidden_i18n = {
    ko: {
        "hidden_homeroom_d3_1": { "name": "{name}", "text": "*쉬는 시간. 빈 교실 앞을 지나가는데 \u2014 안에서 인기척이 난다. 조용히 다가간다.*" },
        "hidden_homeroom_d3_2": { "name": "{name}", "text": "*담임선생님이 교탁에 앉아 뭔가를 쓰고 있다. 펜을 멈추고 고개를 든다. \u2014 나와 눈이 마주친다.*" },
        "hidden_homeroom_d3_3": { "name": "담임선생님", "text": "......" },
        "hidden_homeroom_d3_4": { "name": "담임선생님", "text": "...아무것도 아니야. 업무 서류야. \u2014 ...눈치 빠른 건 장점인데, 가끔 단점이야." },
        "hidden_homeroom_d3_choice": { "name": "{name}", "text": "*원고지다. 들킨 사람의 얼굴을 하고 있다.*", "choices": ["원고지인 거 봤어요. \u2014 소설 쓰시는 거예요?", "죄송합니다, 안 봤어요."] },
        "hidden_homeroom_d3_reveal_1": { "name": "담임선생님", "text": "...소설이라고 하기엔 부끄럽고. 습작이라고 하기엔 너무 오래 됐고. 7년." },
        "hidden_homeroom_d3_reveal_2": { "name": "담임선생님", "text": "대학 때 시작했어. 문예창작과. 졸업하고 등단 준비했는데 \u2014 2년 동안 떨어졌어. 세 번." },
        "hidden_homeroom_d3_reveal_3": { "name": "담임선생님", "text": "임용시험 봤어. 국어 교사. \u2014 소설 쓰던 사람이 국어를 가르치고 있으니, 아이러니하지?" },
        "hidden_homeroom_d3_reveal_4": { "name": "담임선생님", "text": "포기라고 하면 편하겠지. 근데 가끔 이렇게 빈 교실에서 꺼내 보는 걸 보면 \u2014 포기를 못 한 거겠지." },
        "hidden_homeroom_d3_reveal_5": { "name": "담임선생님", "text": "...이거 아무한테도 말하면 안 돼. 선생님이 학생한테 이런 얘기까지 하면. \u2014 비밀이야." },
        "hidden_homeroom_d3_reveal_6": { "name": "{name}", "text": "*담임이 웃는다. 건조하지 않은, 살짝 어색한 웃음. \u2014 ...첫 번째 독자 지원이네. 7년 만에.*" },
        "hidden_homeroom_d3_hide_1": { "name": "담임선생님", "text": "...그래, 안 본 걸로 해줘. 부탁이야. \u2014 ...고마워." },
        "hidden_homeroom_d3_end": { "name": "{name}", "text": "*담임이 넥타이를 고치며 교실을 나선다. \u2014 이 사람한테 '부탁'은 드문 단어다.*" },
        "hidden_homeroom_d3_freetalk": { "name": "담임선생님", "text": "*담임선생님과 빈 교실에서 대화 중.*", "context": "Day 3 아침. 빈 교실에서 담임선생님이 소설 원고를 쓰고 있는 걸 발견했다. 7년간 숨겨온 비밀.", "personality": "담임선생님은 소설가 지망생이었다. 교사가 되었지만 포기하지 못한 꿈. 들킨 것에 대한 부끄러움과 안도가 공존." },
        "hidden_nurse_d3_check": { "name": "{name}", "text": "*쉬는 시간이 끝나간다.*" },
        "hidden_nurse_d3_1": { "name": "{name}", "text": "*아침부터 뭔가 불안하다. 발이 보건실로 향한다. 아프지 않은데.*" },
        "hidden_nurse_d3_2": { "name": "보건선생님", "text": "...어? 오늘은 어디 다쳤어? \u2014 아프지 않은데 보건실에?" },
        "hidden_nurse_d3_3": { "name": "{name}", "text": "...좀 쉬고 싶어서요. 그냥... 사람 관계가 복잡해져서." },
        "hidden_nurse_d3_4": { "name": "보건선생님", "text": "...앉아. 농담 아니고, 표정 안 좋아. 무슨 일 있어?" },
        "hidden_nurse_d3_5": { "name": "보건선생님", "text": "그거 연애 상담이야? \u2014 아닌 척하는 게 제일 티 나는 거야." },
        "hidden_nurse_d3_6": { "name": "보건선생님", "text": "대학병원에서 일할 때. 환자가 너무 많았어. 다 살리고 싶은데, 손이 두 개밖에 없잖아. 결국 한 명도 제대로 못 챙기는 기분이 들더라." },
        "hidden_nurse_d3_7": { "name": "보건선생님", "text": "그래서 여기 왔어. 학교에서는 \u2014 한 명 한 명 제대로 볼 수 있으니까." },
        "hidden_nurse_d3_8": { "name": "보건선생님", "text": "너도 마찬가지야. 다 챙기려고 하지 마. \u2014 진짜 중요한 사람 한 명을 제대로 보는 게 낫지 않겠어?" },
        "hidden_nurse_d3_9": { "name": "보건선생님", "text": "...진짜 중요한 사람. 혹시 그게 선생님이면 어쩌지? \u2014 농담이야~ 가 봐!" },
        "hidden_nurse_d3_freetalk": { "name": "보건선생님", "text": "*보건선생님과 보건실에서 대화 중.*", "context": "Day 3. 불안한 마음에 보건실을 찾았다. 보건선생님이 진지하게 상담해줬다. 대학병원 번아웃 이야기.", "personality": "보건선생님은 평소 장난스럽지만 진지해지면 분위기가 완전히 달라진다. 번아웃 경험을 가진 전문가. 감정과 직함 사이에서 흔들린다." }
    },
    en: {
        "hidden_homeroom_d3_1": { "name": "Me", "text": "*Break time. Passing by an empty classroom \u2014 I hear someone inside. I approach quietly.*" },
        "hidden_homeroom_d3_2": { "name": "Me", "text": "*The homeroom teacher is sitting at the desk, writing something. He stops and looks up. \u2014 Our eyes meet.*" },
        "hidden_homeroom_d3_3": { "name": "Homeroom Teacher", "text": "......" },
        "hidden_homeroom_d3_4": { "name": "Homeroom Teacher", "text": "...It's nothing. Work documents. \u2014 ...Being observant is usually a strength. Sometimes it's a weakness." },
        "hidden_homeroom_d3_choice": { "name": "Me", "text": "*That's manuscript paper. He has the face of someone who's been caught.*", "choices": ["I saw it's manuscript paper. \u2014 Are you writing a novel?", "Sorry, I didn't see anything."] },
        "hidden_homeroom_d3_reveal_1": { "name": "Homeroom Teacher", "text": "...Too embarrassing to call it a novel. Too old to call it practice. Seven years." },
        "hidden_homeroom_d3_reveal_2": { "name": "Homeroom Teacher", "text": "Started in college. Creative writing major. After graduating, I applied for literary awards \u2014 got rejected three times over two years." },
        "hidden_homeroom_d3_reveal_3": { "name": "Homeroom Teacher", "text": "Took the teaching exam. Korean language teacher. \u2014 A would-be novelist teaching literature. Ironic, right?" },
        "hidden_homeroom_d3_reveal_4": { "name": "Homeroom Teacher", "text": "It'd be easier to say I gave up. But I keep pulling it out in empty classrooms like this \u2014 so I guess I never really did." },
        "hidden_homeroom_d3_reveal_5": { "name": "Homeroom Teacher", "text": "...Don't tell anyone about this. A teacher sharing this with a student \u2014 it's a secret." },
        "hidden_homeroom_d3_reveal_6": { "name": "Me", "text": "*He smiles. Not his usual dry one \u2014 slightly awkward. \u2014 ...First reader applicant in seven years.*" },
        "hidden_homeroom_d3_hide_1": { "name": "Homeroom Teacher", "text": "...Right, just pretend you didn't see anything. Please. \u2014 ...Thanks." },
        "hidden_homeroom_d3_end": { "name": "Me", "text": "*He straightens his tie and leaves. \u2014 'Please' is a rare word from this man.*" },
        "hidden_homeroom_d3_freetalk": { "name": "Homeroom Teacher", "text": "*Talking with the homeroom teacher in the empty classroom.*", "context": "Day 3 morning. Discovered the teacher writing a novel manuscript in an empty classroom. A secret he's kept for 7 years.", "personality": "The teacher was an aspiring novelist. Became a teacher but never let go of the dream. A mix of embarrassment and relief at being found out." },
        "hidden_nurse_d3_check": { "name": "Me", "text": "*Break time is almost over.*" },
        "hidden_nurse_d3_1": { "name": "Me", "text": "*Something feels off since this morning. My feet take me to the nurse's office. I'm not even hurt.*" },
        "hidden_nurse_d3_2": { "name": "School Nurse", "text": "...Huh? What'd you hurt today? \u2014 You're not hurt but you came to the nurse's office?" },
        "hidden_nurse_d3_3": { "name": "Me", "text": "...I just wanted to rest. Relationships are getting complicated." },
        "hidden_nurse_d3_4": { "name": "School Nurse", "text": "...Sit down. Seriously, you look rough. What's going on?" },
        "hidden_nurse_d3_5": { "name": "School Nurse", "text": "Is this a relationship consultation? \u2014 Pretending it's not is the biggest giveaway." },
        "hidden_nurse_d3_6": { "name": "School Nurse", "text": "When I worked at the hospital. Too many patients. I wanted to save everyone, but I only have two hands. Eventually it felt like I couldn't properly care for even one." },
        "hidden_nurse_d3_7": { "name": "School Nurse", "text": "That's why I came here. At school \u2014 I can actually give each person proper attention." },
        "hidden_nurse_d3_8": { "name": "School Nurse", "text": "Same goes for you. Don't try to take care of everyone. \u2014 Wouldn't it be better to really see the one person who matters most?" },
        "hidden_nurse_d3_9": { "name": "School Nurse", "text": "...The one who matters most. What if that's your teacher? \u2014 Kidding~ Go on, get to class!" },
        "hidden_nurse_d3_freetalk": { "name": "School Nurse", "text": "*Talking with the school nurse in the nurse's office.*", "context": "Day 3. Came to the nurse's office feeling anxious. The nurse had a serious heart-to-heart, including her hospital burnout backstory.", "personality": "Usually playful, but when serious the whole atmosphere changes. A professional with burnout experience. Torn between feelings and her title." }
    },
    es: {
        "hidden_homeroom_d3_1": { "name": "Yo", "text": "*Recreo. Paso por un aula vac\u00eda \u2014 escucho a alguien adentro. Me acerco despacio.*" },
        "hidden_homeroom_d3_2": { "name": "Yo", "text": "*El profesor est\u00e1 sentado en el escritorio, escribiendo algo. Se detiene y levanta la vista. \u2014 Nuestras miradas se cruzan.*" },
        "hidden_homeroom_d3_3": { "name": "Profesor", "text": "......" },
        "hidden_homeroom_d3_4": { "name": "Profesor", "text": "...No es nada. Documentos de trabajo. \u2014 ...Ser observador es una virtud, pero a veces es un defecto." },
        "hidden_homeroom_d3_choice": { "name": "Yo", "text": "*Es papel de manuscrito. Tiene cara de que lo pillaron.*", "choices": ["Vi que es un manuscrito. \u2014 \u00bfEst\u00e1 escribiendo una novela?", "Perd\u00f3n, no vi nada."] },
        "hidden_homeroom_d3_reveal_1": { "name": "Profesor", "text": "...Muy vergonzoso para llamarlo novela. Demasiado viejo para llamarlo pr\u00e1ctica. Siete a\u00f1os." },
        "hidden_homeroom_d3_reveal_2": { "name": "Profesor", "text": "Empec\u00e9 en la universidad. Escritura creativa. Al graduarme, apliqu\u00e9 a premios literarios \u2014 me rechazaron tres veces en dos a\u00f1os." },
        "hidden_homeroom_d3_reveal_3": { "name": "Profesor", "text": "Hice el examen docente. Profesor de lengua. \u2014 Un aspirante a novelista ense\u00f1ando literatura. Ir\u00f3nico, \u00bfno?" },
        "hidden_homeroom_d3_reveal_4": { "name": "Profesor", "text": "Ser\u00eda m\u00e1s f\u00e1cil decir que lo dej\u00e9. Pero sigo sac\u00e1ndolo en aulas vac\u00edas \u2014 as\u00ed que supongo que nunca lo hice." },
        "hidden_homeroom_d3_reveal_5": { "name": "Profesor", "text": "...No le digas esto a nadie. Un profesor comparti\u00e9ndole esto a un alumno \u2014 es un secreto." },
        "hidden_homeroom_d3_reveal_6": { "name": "Yo", "text": "*Sonr\u00ede. No su sonrisa seca de siempre \u2014 una algo torpe. \u2014 ...Primer candidato a lector en siete a\u00f1os.*" },
        "hidden_homeroom_d3_hide_1": { "name": "Profesor", "text": "...Bien, has como que no viste nada. Por favor. \u2014 ...Gracias." },
        "hidden_homeroom_d3_end": { "name": "Yo", "text": "*Se arregla la corbata y sale. \u2014 'Por favor' es una palabra rara en \u00e9l.*" },
        "hidden_homeroom_d3_freetalk": { "name": "Profesor", "text": "*Conversando con el profesor en el aula vac\u00eda.*", "context": "D\u00eda 3 ma\u00f1ana. Descubri\u00f3 al profesor escribiendo un manuscrito en un aula vac\u00eda.", "personality": "El profesor fue aspirante a novelista. Se hizo profesor pero nunca renunci\u00f3 al sue\u00f1o." },
        "hidden_nurse_d3_check": { "name": "Yo", "text": "*El recreo est\u00e1 por terminar.*" },
        "hidden_nurse_d3_1": { "name": "Yo", "text": "*Algo me inquieta desde esta ma\u00f1ana. Mis pies me llevan a la enfermer\u00eda. Ni siquiera estoy herido.*" },
        "hidden_nurse_d3_2": { "name": "Enfermera", "text": "...\u00bfEh? \u00bfQu\u00e9 te pas\u00f3 hoy? \u2014 \u00bfNo est\u00e1s herido pero vienes a la enfermer\u00eda?" },
        "hidden_nurse_d3_3": { "name": "Yo", "text": "...Solo quer\u00eda descansar. Las relaciones se est\u00e1n complicando." },
        "hidden_nurse_d3_4": { "name": "Enfermera", "text": "...Si\u00e9ntate. En serio, tienes mala cara. \u00bfQu\u00e9 pasa?" },
        "hidden_nurse_d3_5": { "name": "Enfermera", "text": "\u00bfEsto es una consulta sentimental? \u2014 Fingir que no lo es es lo que m\u00e1s te delata." },
        "hidden_nurse_d3_6": { "name": "Enfermera", "text": "Cuando trabajaba en el hospital. Demasiados pacientes. Quer\u00eda salvarlos a todos, pero solo tengo dos manos. Al final sent\u00eda que no pod\u00eda cuidar bien ni a uno." },
        "hidden_nurse_d3_7": { "name": "Enfermera", "text": "Por eso vine aqu\u00ed. En la escuela \u2014 puedo ver a cada persona como se merece." },
        "hidden_nurse_d3_8": { "name": "Enfermera", "text": "T\u00fa tambi\u00e9n. No intentes cuidar a todos. \u2014 \u00bfNo ser\u00eda mejor ver bien a la persona que realmente importa?" },
        "hidden_nurse_d3_9": { "name": "Enfermera", "text": "...La persona que importa. \u00bfY si resulta que es tu profesora? \u2014 \u00a1Es broma~ anda, ve a clase!" },
        "hidden_nurse_d3_freetalk": { "name": "Enfermera", "text": "*Conversando con la enfermera en la enfermer\u00eda.*", "context": "D\u00eda 3. Vino a la enfermer\u00eda por ansiedad. La enfermera tuvo una conversaci\u00f3n seria.", "personality": "Normalmente juguetona, pero al ponerse seria el ambiente cambia totalmente. Profesional con experiencia de burnout." }
    },
    ja: {
        "hidden_homeroom_d3_1": { "name": "\u50d5", "text": "*\u4f11\u307f\u6642\u9593\u3002\u7a7a\u304d\u6559\u5ba4\u306e\u524d\u3092\u901a\u308a\u304b\u304b\u308b\u3068\u2014\u2014\u4e2d\u304b\u3089\u4eba\u306e\u6c17\u914d\u304c\u3059\u308b\u3002\u9759\u304b\u306b\u8fd1\u3065\u304f\u3002*" },
        "hidden_homeroom_d3_2": { "name": "\u50d5", "text": "*\u62c5\u4efb\u5148\u751f\u304c\u6559\u58c7\u306b\u5ea7\u3063\u3066\u4f55\u304b\u3092\u66f8\u3044\u3066\u3044\u308b\u3002\u30da\u30f3\u3092\u6b62\u3081\u3066\u9854\u3092\u4e0a\u3052\u308b\u3002\u2014\u2014\u76ee\u304c\u5408\u3063\u305f\u3002*" },
        "hidden_homeroom_d3_3": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u2026\u2026\u2026\u2026" },
        "hidden_homeroom_d3_4": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u2026\u4f55\u3067\u3082\u306a\u3044\u3002\u696d\u52d9\u66f8\u985e\u3060\u3002\u2014\u2014\u2026\u76ee\u6572\u304d\u304c\u3044\u3044\u306e\u306f\u9577\u6240\u3060\u3051\u3069\u3001\u305f\u307e\u306b\u77ed\u6240\u3060\u306a\u3002" },
        "hidden_homeroom_d3_choice": { "name": "\u50d5", "text": "*\u539f\u7a3f\u7528\u7d19\u3060\u3002\u898b\u3064\u304b\u3063\u305f\u4eba\u306e\u9854\u3092\u3057\u3066\u3044\u308b\u3002*", "choices": ["\u539f\u7a3f\u7528\u7d19\u306a\u306e\u306f\u898b\u3048\u307e\u3057\u305f\u3002\u2014\u2014\u5c0f\u8aac\u3092\u66f8\u3044\u3066\u3044\u308b\u3093\u3067\u3059\u304b\uff1f", "\u3059\u307f\u307e\u305b\u3093\u3001\u4f55\u3082\u898b\u3066\u307e\u305b\u3093\u3002"] },
        "hidden_homeroom_d3_reveal_1": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u2026\u5c0f\u8aac\u3068\u547c\u3076\u306b\u306f\u6065\u305a\u304b\u3057\u3044\u3002\u7fd2\u4f5c\u3068\u547c\u3076\u306b\u306f\u9577\u3059\u304e\u308b\u30027\u5e74\u3002" },
        "hidden_homeroom_d3_reveal_2": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u5927\u5b66\u306e\u6642\u306b\u59cb\u3081\u305f\u3002\u6587\u82b8\u5275\u4f5c\u5b66\u79d1\u3002\u5352\u696d\u5f8c\u3001\u6587\u5b66\u8cde\u306b\u5fdc\u52df\u3057\u305f\u3051\u3069\u2014\u20142\u5e74\u3067\u4e09\u56de\u843d\u3061\u305f\u3002" },
        "hidden_homeroom_d3_reveal_3": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u6559\u54e1\u63a1\u7528\u8a66\u9a13\u3092\u53d7\u3051\u305f\u3002\u56fd\u8a9e\u6559\u5e2b\u3002\u2014\u2014\u5c0f\u8aac\u3092\u66f8\u3044\u3066\u3044\u305f\u4eba\u9593\u304c\u56fd\u8a9e\u3092\u6559\u3048\u3066\u308b\u3002\u76ae\u8089\u3060\u306d\u3002" },
        "hidden_homeroom_d3_reveal_4": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u8aee\u3081\u305f\u3068\u8a00\u3048\u3070\u697d\u3060\u308d\u3046\u3002\u3067\u3082\u3053\u3046\u3057\u3066\u7a7a\u304d\u6559\u5ba4\u3067\u53d6\u308a\u51fa\u3057\u3066\u3044\u308b\u3068\u3053\u308d\u3092\u898b\u308b\u3068\u2014\u2014\u8aee\u3081\u304d\u308c\u3066\u306a\u3044\u3093\u3060\u308d\u3046\u306a\u3002" },
        "hidden_homeroom_d3_reveal_5": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u2026\u3053\u308c\u3001\u8ab0\u306b\u3082\u8a00\u3046\u306a\u3088\u3002\u5148\u751f\u304c\u751f\u5f92\u306b\u3053\u3093\u306a\u8a71\u307e\u3067\u3057\u305f\u3089\u3002\u2014\u2014\u79d8\u5bc6\u3060\u3002" },
        "hidden_homeroom_d3_reveal_6": { "name": "\u50d5", "text": "*\u62c5\u4efb\u304c\u7b11\u3046\u3002\u30c9\u30e9\u30a4\u3058\u3083\u306a\u3044\u3001\u5c11\u3057\u304e\u3053\u3061\u306a\u3044\u7b11\u9854\u3002\u2014\u2014\u2026\u521d\u3081\u3066\u306e\u8aad\u8005\u5fd7\u9858\u8005\u30027\u5e74\u3076\u308a\u3002*" },
        "hidden_homeroom_d3_hide_1": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u2026\u305d\u3046\u304b\u3001\u898b\u306a\u304b\u3063\u305f\u3053\u3068\u306b\u3057\u3066\u304f\u308c\u3002\u983c\u3080\u3002\u2014\u2014\u2026\u3042\u308a\u304c\u3068\u3046\u3002" },
        "hidden_homeroom_d3_end": { "name": "\u50d5", "text": "*\u62c5\u4efb\u304c\u30cd\u30af\u30bf\u30a4\u3092\u76f4\u3057\u3066\u6559\u5ba4\u3092\u51fa\u308b\u3002\u2014\u2014\u3053\u306e\u4eba\u306b\u3068\u3063\u3066\u300c\u983c\u3080\u300d\u306f\u73cd\u3057\u3044\u8a00\u8449\u3060\u3002*" },
        "hidden_homeroom_d3_freetalk": { "name": "\u62c5\u4efb\u5148\u751f", "text": "*\u62c5\u4efb\u5148\u751f\u3068\u7a7a\u304d\u6559\u5ba4\u3067\u4f1a\u8a71\u4e2d\u3002*", "context": "Day 3\u671d\u3002\u7a7a\u304d\u6559\u5ba4\u3067\u62c5\u4efb\u304c\u5c0f\u8aac\u306e\u539f\u7a3f\u3092\u66f8\u3044\u3066\u3044\u308b\u306e\u3092\u767a\u898b\u3002", "personality": "\u62c5\u4efb\u5148\u751f\u306f\u5c0f\u8aac\u5bb6\u5fd7\u671b\u3060\u3063\u305f\u3002\u6559\u5e2b\u306b\u306a\u3063\u305f\u304c\u5922\u3092\u8aee\u3081\u304d\u308c\u3066\u3044\u306a\u3044\u3002" },
        "hidden_nurse_d3_check": { "name": "\u50d5", "text": "*\u4f11\u307f\u6642\u9593\u304c\u7d42\u308f\u308a\u304b\u3051\u3066\u3044\u308b\u3002*" },
        "hidden_nurse_d3_1": { "name": "\u50d5", "text": "*\u671d\u304b\u3089\u4f55\u304b\u4e0d\u5b89\u3060\u3002\u8db3\u304c\u4fdd\u5065\u5ba4\u306b\u5411\u304b\u3046\u3002\u75db\u304f\u306a\u3044\u306e\u306b\u3002*" },
        "hidden_nurse_d3_2": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u2026\u3048\uff1f\u4eca\u65e5\u306f\u3069\u3053\u602a\u6211\u3057\u305f\u306e\uff1f\u2014\u2014\u602a\u6211\u3057\u3066\u306a\u3044\u306e\u306b\u4fdd\u5065\u5ba4\uff1f" },
        "hidden_nurse_d3_3": { "name": "\u50d5", "text": "\u2026\u3061\u3087\u3063\u3068\u4f11\u307f\u305f\u304f\u3066\u3002\u4eba\u9593\u95a2\u4fc2\u304c\u8907\u96d1\u306b\u306a\u3063\u3066\u304d\u3066\u3002" },
        "hidden_nurse_d3_4": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u2026\u5ea7\u3063\u3066\u3002\u5197\u8ac7\u3058\u3083\u306a\u304f\u3001\u9854\u8272\u304c\u60aa\u3044\u3088\u3002\u4f55\u304c\u3042\u3063\u305f\u306e\uff1f" },
        "hidden_nurse_d3_5": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u305d\u308c\u3001\u604b\u611b\u76f8\u8ac7\uff1f\u2014\u2014\u9055\u3046\u3075\u308a\u3092\u3059\u308b\u306e\u304c\u4e00\u756a\u30d0\u30ec\u308b\u3093\u3060\u3088\u3002" },
        "hidden_nurse_d3_6": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u75c5\u9662\u3067\u50cd\u3044\u3066\u3044\u305f\u6642\u3002\u60a3\u8005\u304c\u591a\u3059\u304e\u305f\u3002\u307f\u3093\u306a\u6551\u3044\u305f\u3044\u306e\u306b\u3001\u624b\u306f\u4e8c\u3064\u3057\u304b\u306a\u3044\u3002\u7d50\u5c40\u4e00\u4eba\u3082\u3061\u3083\u3093\u3068\u30b1\u30a2\u3067\u304d\u3066\u306a\u3044\u6c17\u304c\u3057\u305f\u3002" },
        "hidden_nurse_d3_7": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u3060\u304b\u3089\u3053\u3053\u306b\u6765\u305f\u3002\u5b66\u6821\u306a\u3089\u2014\u2014\u4e00\u4eba\u4e00\u4eba\u3061\u3083\u3093\u3068\u898b\u3089\u308c\u308b\u304b\u3089\u3002" },
        "hidden_nurse_d3_8": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u541b\u3082\u540c\u3058\u3002\u5168\u54e1\u306e\u9762\u5012\u3092\u898b\u3088\u3046\u3068\u3057\u306a\u3044\u3067\u3002\u2014\u2014\u672c\u5f53\u306b\u5927\u4e8b\u306a\u4eba\u4e00\u4eba\u3092\u3061\u3083\u3093\u3068\u898b\u308b\u65b9\u304c\u3044\u3044\u3093\u3058\u3083\u306a\u3044\uff1f" },
        "hidden_nurse_d3_9": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u2026\u672c\u5f53\u306b\u5927\u4e8b\u306a\u4eba\u3002\u3082\u3057\u304b\u3057\u3066\u305d\u308c\u304c\u5148\u751f\u3060\u3063\u305f\u3089\u3069\u3046\u3057\u3088\u3046\uff1f\u2014\u2014\u5197\u8ac7\u3060\u3088\uff5e\u884c\u3063\u3066\u304a\u3044\u3067\uff01" },
        "hidden_nurse_d3_freetalk": { "name": "\u4fdd\u5065\u5148\u751f", "text": "*\u4fdd\u5065\u5148\u751f\u3068\u4fdd\u5065\u5ba4\u3067\u4f1a\u8a71\u4e2d\u3002*", "context": "Day 3\u3002\u4e0d\u5b89\u306a\u6c17\u6301\u3061\u3067\u4fdd\u5065\u5ba4\u3092\u8a2a\u308c\u305f\u3002", "personality": "\u666e\u6bb5\u306f\u3044\u305f\u305a\u3089\u597d\u304d\u3060\u304c\u771f\u5263\u306b\u306a\u308b\u3068\u96f0\u56f2\u6c17\u304c\u4e00\u5909\u3059\u308b\u3002\u30d0\u30fc\u30f3\u30a2\u30a6\u30c8\u7d4c\u9a13\u8005\u3002" }
    },
    fr: {
        "hidden_homeroom_d3_1": { "name": "Moi", "text": "*Pause. En passant devant une salle vide \u2014 j'entends quelqu'un \u00e0 l'int\u00e9rieur. Je m'approche discr\u00e8tement.*" },
        "hidden_homeroom_d3_2": { "name": "Moi", "text": "*Le prof principal est assis au bureau, en train d'\u00e9crire. Il s'arr\u00eate et l\u00e8ve la t\u00eate. \u2014 Nos regards se croisent.*" },
        "hidden_homeroom_d3_3": { "name": "Professeur Principal", "text": "......" },
        "hidden_homeroom_d3_4": { "name": "Professeur Principal", "text": "...C'est rien. Des documents. \u2014 ...\u00catre observateur, c'est bien. Parfois, c'est un d\u00e9faut." },
        "hidden_homeroom_d3_choice": { "name": "Moi", "text": "*C'est du papier manuscrit. Il a la t\u00eate de quelqu'un qui s'est fait prendre.*", "choices": ["J'ai vu que c'est un manuscrit. \u2014 Vous \u00e9crivez un roman ?", "Pardon, je n'ai rien vu."] },
        "hidden_homeroom_d3_reveal_1": { "name": "Professeur Principal", "text": "...Trop g\u00eanant pour appeler \u00e7a un roman. Trop vieux pour de l'exercice. Sept ans." },
        "hidden_homeroom_d3_reveal_2": { "name": "Professeur Principal", "text": "J'ai commenc\u00e9 \u00e0 la fac. \u00c9criture cr\u00e9ative. Apr\u00e8s le dipl\u00f4me, j'ai postul\u00e9 \u00e0 des prix litt\u00e9raires \u2014 refus\u00e9 trois fois en deux ans." },
        "hidden_homeroom_d3_reveal_3": { "name": "Professeur Principal", "text": "J'ai pass\u00e9 le concours de l'enseignement. Prof de fran\u00e7ais. \u2014 Un aspirant romancier qui enseigne la litt\u00e9rature. Ironique, non ?" },
        "hidden_homeroom_d3_reveal_4": { "name": "Professeur Principal", "text": "Ce serait plus simple de dire que j'ai abandonn\u00e9. Mais je continue \u00e0 le sortir dans des salles vides \u2014 alors je suppose que non." },
        "hidden_homeroom_d3_reveal_5": { "name": "Professeur Principal", "text": "...N'en parle \u00e0 personne. Un prof qui partage \u00e7a avec un \u00e9l\u00e8ve \u2014 c'est un secret." },
        "hidden_homeroom_d3_reveal_6": { "name": "Moi", "text": "*Il sourit. Pas son sourire sec habituel \u2014 un peu maladroit. \u2014 ...Premier candidat lecteur en sept ans.*" },
        "hidden_homeroom_d3_hide_1": { "name": "Professeur Principal", "text": "...D'accord, fais comme si t'avais rien vu. S'il te pla\u00eet. \u2014 ...Merci." },
        "hidden_homeroom_d3_end": { "name": "Moi", "text": "*Il rajuste sa cravate et sort. \u2014 'S'il te pla\u00eet' est un mot rare chez lui.*" },
        "hidden_homeroom_d3_freetalk": { "name": "Professeur Principal", "text": "*En train de discuter avec le prof principal dans la salle vide.*", "context": "Jour 3 matin. D\u00e9couvert le prof en train d'\u00e9crire un manuscrit.", "personality": "Le prof \u00e9tait un aspirant romancier. Il est devenu prof mais n'a jamais abandonn\u00e9 son r\u00eave." },
        "hidden_nurse_d3_check": { "name": "Moi", "text": "*La pause touche \u00e0 sa fin.*" },
        "hidden_nurse_d3_1": { "name": "Moi", "text": "*Quelque chose me tracasse depuis ce matin. Mes pieds m'emm\u00e8nent \u00e0 l'infirmerie. Je n'ai m\u00eame pas mal.*" },
        "hidden_nurse_d3_2": { "name": "Infirmi\u00e8re", "text": "...Hein ? Qu'est-ce que tu t'es fait aujourd'hui ? \u2014 T'es pas bless\u00e9 mais tu viens \u00e0 l'infirmerie ?" },
        "hidden_nurse_d3_3": { "name": "Moi", "text": "...Je voulais juste me reposer. Les relations se compliquent." },
        "hidden_nurse_d3_4": { "name": "Infirmi\u00e8re", "text": "...Assieds-toi. S\u00e9rieux, t'as une sale t\u00eate. Qu'est-ce qui se passe ?" },
        "hidden_nurse_d3_5": { "name": "Infirmi\u00e8re", "text": "C'est une consultation sentimentale ? \u2014 Pr\u00e9tendre que non, c'est le plus gros aveu." },
        "hidden_nurse_d3_6": { "name": "Infirmi\u00e8re", "text": "Quand je bossais \u00e0 l'h\u00f4pital. Trop de patients. Je voulais tous les sauver, mais j'ai que deux mains. Au final, j'avais l'impression de n'en soigner aucun correctement." },
        "hidden_nurse_d3_7": { "name": "Infirmi\u00e8re", "text": "C'est pour \u00e7a que je suis venue ici. \u00c0 l'\u00e9cole \u2014 je peux vraiment m'occuper de chacun." },
        "hidden_nurse_d3_8": { "name": "Infirmi\u00e8re", "text": "C'est pareil pour toi. N'essaie pas de t'occuper de tout le monde. \u2014 Ce serait pas mieux de vraiment regarder la seule personne qui compte ?" },
        "hidden_nurse_d3_9": { "name": "Infirmi\u00e8re", "text": "...La personne qui compte. Et si c'\u00e9tait ta prof ? \u2014 Je plaisante~ allez, file en cours !" },
        "hidden_nurse_d3_freetalk": { "name": "Infirmi\u00e8re", "text": "*En train de discuter avec l'infirmi\u00e8re dans l'infirmerie.*", "context": "Jour 3. Venu \u00e0 l'infirmerie par anxi\u00e9t\u00e9.", "personality": "D'habitude joueuse, mais quand elle est s\u00e9rieuse l'atmosph\u00e8re change compl\u00e8tement." }
    },
    de: {
        "hidden_homeroom_d3_1": { "name": "Ich", "text": "*Pause. Beim Vorbeigehen an einem leeren Klassenzimmer \u2014 h\u00f6re ich jemanden drin. Ich n\u00e4here mich leise.*" },
        "hidden_homeroom_d3_2": { "name": "Ich", "text": "*Der Klassenlehrer sitzt am Pult und schreibt etwas. Er h\u00e4lt inne und blickt auf. \u2014 Unsere Blicke treffen sich.*" },
        "hidden_homeroom_d3_3": { "name": "Klassenlehrer", "text": "......" },
        "hidden_homeroom_d3_4": { "name": "Klassenlehrer", "text": "...Ist nichts. Dienstliche Unterlagen. \u2014 ...Aufmerksam zu sein ist normalerweise eine St\u00e4rke. Manchmal eine Schw\u00e4che." },
        "hidden_homeroom_d3_choice": { "name": "Ich", "text": "*Das ist Manuskriptpapier. Er hat den Gesichtsausdruck von jemandem, der ertappt wurde.*", "choices": ["Ich hab gesehen, dass es ein Manuskript ist. \u2014 Schreiben Sie einen Roman?", "Entschuldigung, ich hab nichts gesehen."] },
        "hidden_homeroom_d3_reveal_1": { "name": "Klassenlehrer", "text": "...Zu peinlich, um es Roman zu nennen. Zu alt f\u00fcr eine \u00dcbung. Sieben Jahre." },
        "hidden_homeroom_d3_reveal_2": { "name": "Klassenlehrer", "text": "Hab an der Uni angefangen. Kreatives Schreiben. Nach dem Abschluss hab ich mich bei Literaturpreisen beworben \u2014 dreimal abgelehnt in zwei Jahren." },
        "hidden_homeroom_d3_reveal_3": { "name": "Klassenlehrer", "text": "Hab das Lehrerexamen gemacht. Deutschlehrer. \u2014 Ein M\u00f6chtegern-Romanautor, der Literatur unterrichtet. Ironisch, oder?" },
        "hidden_homeroom_d3_reveal_4": { "name": "Klassenlehrer", "text": "Es w\u00e4re einfacher zu sagen, ich h\u00e4tte aufgegeben. Aber ich hole es immer wieder in leeren Klassenzimmern raus \u2014 also hab ich's wohl nie wirklich." },
        "hidden_homeroom_d3_reveal_5": { "name": "Klassenlehrer", "text": "...Erz\u00e4hl das niemandem. Ein Lehrer, der das mit einem Sch\u00fcler teilt \u2014 das ist ein Geheimnis." },
        "hidden_homeroom_d3_reveal_6": { "name": "Ich", "text": "*Er l\u00e4chelt. Nicht sein \u00fcbliches trockenes \u2014 etwas unbeholfen. \u2014 ...Erster Leser-Bewerber seit sieben Jahren.*" },
        "hidden_homeroom_d3_hide_1": { "name": "Klassenlehrer", "text": "...Okay, tu so, als h\u00e4ttest du nichts gesehen. Bitte. \u2014 ...Danke." },
        "hidden_homeroom_d3_end": { "name": "Ich", "text": "*Er richtet seine Krawatte und geht. \u2014 'Bitte' ist ein seltenes Wort bei ihm.*" },
        "hidden_homeroom_d3_freetalk": { "name": "Klassenlehrer", "text": "*Im Gespr\u00e4ch mit dem Klassenlehrer im leeren Klassenzimmer.*", "context": "Tag 3 morgens. Den Lehrer beim Schreiben eines Manuskripts im leeren Klassenzimmer entdeckt.", "personality": "Der Lehrer war ein angehender Romanautor. Wurde Lehrer, hat den Traum aber nie aufgegeben." },
        "hidden_nurse_d3_check": { "name": "Ich", "text": "*Die Pause geht zu Ende.*" },
        "hidden_nurse_d3_1": { "name": "Ich", "text": "*Seit heute Morgen beunruhigt mich etwas. Meine F\u00fc\u00dfe tragen mich zum Krankenzimmer. Ich bin nicht mal verletzt.*" },
        "hidden_nurse_d3_2": { "name": "Schulkrankenschwester", "text": "...H\u00e4? Was hast du dir heute getan? \u2014 Du bist nicht verletzt, aber kommst ins Krankenzimmer?" },
        "hidden_nurse_d3_3": { "name": "Ich", "text": "...Wollte mich einfach ausruhen. Beziehungen werden kompliziert." },
        "hidden_nurse_d3_4": { "name": "Schulkrankenschwester", "text": "...Setz dich. Im Ernst, du siehst nicht gut aus. Was ist los?" },
        "hidden_nurse_d3_5": { "name": "Schulkrankenschwester", "text": "Ist das eine Beziehungsberatung? \u2014 So tun als w\u00e4re es keine, verr\u00e4t dich am meisten." },
        "hidden_nurse_d3_6": { "name": "Schulkrankenschwester", "text": "Als ich im Krankenhaus gearbeitet habe. Zu viele Patienten. Ich wollte alle retten, aber ich hab nur zwei H\u00e4nde. Am Ende f\u00fchlte es sich an, als k\u00f6nnte ich mich um keinen richtig k\u00fcmmern." },
        "hidden_nurse_d3_7": { "name": "Schulkrankenschwester", "text": "Deshalb bin ich hierher gekommen. In der Schule \u2014 kann ich mich wirklich um jeden Einzelnen k\u00fcmmern." },
        "hidden_nurse_d3_8": { "name": "Schulkrankenschwester", "text": "F\u00fcr dich gilt das Gleiche. Versuch nicht, dich um alle zu k\u00fcmmern. \u2014 W\u00e4re es nicht besser, die eine Person, die wirklich z\u00e4hlt, richtig anzuschauen?" },
        "hidden_nurse_d3_9": { "name": "Schulkrankenschwester", "text": "...Die Person, die z\u00e4hlt. Was, wenn das deine Lehrerin ist? \u2014 Spa\u00df~ geh zum Unterricht!" },
        "hidden_nurse_d3_freetalk": { "name": "Schulkrankenschwester", "text": "*Im Gespr\u00e4ch mit der Schulkrankenschwester im Krankenzimmer.*", "context": "Tag 3. Kam aus Unruhe ins Krankenzimmer.", "personality": "Normalerweise verspielt, aber wenn ernst, \u00e4ndert sich die Atmosph\u00e4re komplett." }
    }
};

for (const [lang, entries] of Object.entries(day3_hidden_i18n)) {
    addEntries(`assets/js/i18n/${lang}/day3_1_morning.json`, entries);
}
console.log('  day3_1_morning i18n complete');

console.log('\n=== Phase 2 complete (Day2 afterschool/night + Day3 morning) ===');
