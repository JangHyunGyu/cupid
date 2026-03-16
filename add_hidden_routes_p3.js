const fs = require('fs');
const path = require('path');

function addEntries(filePath, entries) {
    let data = {};
    if (fs.existsSync(filePath)) { data = JSON.parse(fs.readFileSync(filePath, 'utf8')); }
    Object.assign(data, entries);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
}

// =====================================================================
// Day 4 Morning - 담임 카페 + 보건 행사 도움
// =====================================================================
console.log('--- Day 4 Morning ---');

let morning4Content = fs.readFileSync('assets/js/scenario/day4_1_morning.js', 'utf8');

// Insert hidden route check before morning4_end
morning4Content = morning4Content.replace(
    '"morning4_end": {',
    '"morning4_hidden_check": {\n        "background": "assets/images/background/student_room.png",\n        "character": null,\n        "branches": [\n            { "condition": "homeroom_day3", "next": "hidden_homeroom_d4_1" },\n            { "next": "hidden_nurse_d4_check" }\n        ]\n    },\n\n    // === HIDDEN Day 4 담임 카페 ===\n    "hidden_homeroom_d4_1": {\n        "background": "assets/images/background/school.png",\n        "character": null,\n        "condition": "homeroom_day3",\n        "next": "hidden_homeroom_d4_2"\n    },\n    "hidden_homeroom_d4_2": {\n        "background": "assets/images/background/school.png",\n        "character": "assets/images/characters/teacher_normal.png",\n        "next": "hidden_homeroom_d4_3"\n    },\n    "hidden_homeroom_d4_3": {\n        "background": "assets/images/background/school.png",\n        "character": null,\n        "next": "hidden_homeroom_d4_4"\n    },\n    "hidden_homeroom_d4_4": {\n        "background": "assets/images/background/school.png",\n        "character": "assets/images/characters/teacher_normal.png",\n        "next": "hidden_homeroom_d4_5"\n    },\n    "hidden_homeroom_d4_5": {\n        "background": "assets/images/background/school.png",\n        "character": "assets/images/characters/teacher_normal.png",\n        "next": "hidden_homeroom_d4_choice"\n    },\n    "hidden_homeroom_d4_choice": {\n        "background": "assets/images/background/school.png",\n        "character": "assets/images/characters/teacher_normal.png",\n        "choices": [\n            { "next": "hidden_homeroom_d4_cafe_1", "stats": { "Teacher": { "affinity": 10 } } },\n            { "next": "hidden_homeroom_d4_decline", "stats": { "Teacher": { "affinity": 5 } } }\n        ]\n    },\n    "hidden_homeroom_d4_cafe_1": {\n        "background": "assets/images/background/school.png",\n        "character": "assets/images/characters/teacher_normal.png",\n        "next": "hidden_homeroom_d4_cafe_2"\n    },\n    "hidden_homeroom_d4_cafe_2": {\n        "background": "assets/images/background/school.png",\n        "character": "assets/images/characters/teacher_normal.png",\n        "next": "hidden_homeroom_d4_cafe_3"\n    },\n    "hidden_homeroom_d4_cafe_3": {\n        "background": "assets/images/background/school.png",\n        "character": "assets/images/characters/teacher_normal.png",\n        "next": "hidden_homeroom_d4_cafe_4"\n    },\n    "hidden_homeroom_d4_cafe_4": {\n        "background": "assets/images/background/school.png",\n        "character": "assets/images/characters/teacher_normal.png",\n        "next": "hidden_homeroom_d4_cafe_5"\n    },\n    "hidden_homeroom_d4_cafe_5": {\n        "background": "assets/images/background/school.png",\n        "character": "assets/images/characters/teacher_normal.png",\n        "next": "hidden_homeroom_d4_cafe_6"\n    },\n    "hidden_homeroom_d4_cafe_6": {\n        "background": "assets/images/background/school.png",\n        "character": "assets/images/characters/teacher_normal.png",\n        "setFlag": "homeroom_day4",\n        "next": "hidden_homeroom_d4_freetalk"\n    },\n    "hidden_homeroom_d4_decline": {\n        "background": "assets/images/background/school.png",\n        "character": "assets/images/characters/teacher_normal.png",\n        "setFlag": "homeroom_day4",\n        "next": "hidden_nurse_d4_check"\n    },\n    "hidden_homeroom_d4_freetalk": {\n        "type": "free_talk",\n        "background": "assets/images/background/school.png",\n        "character": "assets/images/characters/teacher_normal.png",\n        "next": "hidden_nurse_d4_check"\n    },\n\n    // === HIDDEN Day 4 보건 행사 도움 ===\n    "hidden_nurse_d4_check": {\n        "background": "assets/images/background/student_room.png",\n        "character": null,\n        "branches": [\n            { "condition": "nurse_day3", "next": "hidden_nurse_d4_1" },\n            { "next": "morning4_end" }\n        ]\n    },\n    "hidden_nurse_d4_1": {\n        "background": "assets/images/background/nurse_room.png",\n        "character": null,\n        "condition": "nurse_day3",\n        "next": "hidden_nurse_d4_2"\n    },\n    "hidden_nurse_d4_2": {\n        "background": "assets/images/background/nurse_room.png",\n        "character": "assets/images/characters/nurse_normal.png",\n        "next": "hidden_nurse_d4_3"\n    },\n    "hidden_nurse_d4_3": {\n        "background": "assets/images/background/nurse_room.png",\n        "character": null,\n        "next": "hidden_nurse_d4_4"\n    },\n    "hidden_nurse_d4_4": {\n        "background": "assets/images/background/nurse_room.png",\n        "character": "assets/images/characters/nurse_normal.png",\n        "next": "hidden_nurse_d4_5"\n    },\n    "hidden_nurse_d4_5": {\n        "background": "assets/images/background/nurse_room.png",\n        "character": "assets/images/characters/nurse_normal.png",\n        "next": "hidden_nurse_d4_6"\n    },\n    "hidden_nurse_d4_6": {\n        "background": "assets/images/background/nurse_room.png",\n        "character": "assets/images/characters/nurse_normal.png",\n        "next": "hidden_nurse_d4_choice"\n    },\n    "hidden_nurse_d4_choice": {\n        "background": "assets/images/background/nurse_room.png",\n        "character": "assets/images/characters/nurse_normal.png",\n        "choices": [\n            { "next": "hidden_nurse_d4_meal_1", "stats": { "Nurse": { "affinity": 10 } } },\n            { "next": "hidden_nurse_d4_pass", "stats": { "Nurse": { "affinity": 3 } } }\n        ]\n    },\n    "hidden_nurse_d4_meal_1": {\n        "background": "assets/images/background/nurse_room.png",\n        "character": "assets/images/characters/nurse_normal.png",\n        "next": "hidden_nurse_d4_meal_2"\n    },\n    "hidden_nurse_d4_meal_2": {\n        "background": "assets/images/background/nurse_room.png",\n        "character": "assets/images/characters/nurse_normal.png",\n        "next": "hidden_nurse_d4_meal_3"\n    },\n    "hidden_nurse_d4_meal_3": {\n        "background": "assets/images/background/nurse_room.png",\n        "character": "assets/images/characters/nurse_normal.png",\n        "next": "hidden_nurse_d4_meal_4"\n    },\n    "hidden_nurse_d4_meal_4": {\n        "background": "assets/images/background/nurse_room.png",\n        "character": "assets/images/characters/nurse_normal.png",\n        "setFlag": "nurse_day4",\n        "next": "hidden_nurse_d4_freetalk"\n    },\n    "hidden_nurse_d4_pass": {\n        "background": "assets/images/background/nurse_room.png",\n        "character": "assets/images/characters/nurse_normal.png",\n        "setFlag": "nurse_day4",\n        "next": "morning4_end"\n    },\n    "hidden_nurse_d4_freetalk": {\n        "type": "free_talk",\n        "background": "assets/images/background/nurse_room.png",\n        "character": "assets/images/characters/nurse_normal.png",\n        "next": "morning4_end"\n    },\n\n    "morning4_end": {'
);

// Fix: morning4_start_2 should branch to hidden check
morning4Content = morning4Content.replace(
    '"morning4_start_2": {\n        "background": "assets/images/background/student_room.png",\n        "character": null,\n        "branches": [\n            {\n                "next": "morning4_seo_msg_1",\n                "condition": "route_seoyeon"\n            },\n            {\n                "next": "morning4_yuna_msg_1",\n                "condition": "route_yuna"\n            },\n            {\n                "next": "morning4_dain_msg_1",\n                "condition": "route_dain"\n            },\n            {\n                "next": "morning4_end"\n            }\n        ]\n    }',
    '"morning4_start_2": {\n        "background": "assets/images/background/student_room.png",\n        "character": null,\n        "branches": [\n            {\n                "next": "morning4_seo_msg_1",\n                "condition": "route_seoyeon"\n            },\n            {\n                "next": "morning4_yuna_msg_1",\n                "condition": "route_yuna"\n            },\n            {\n                "next": "morning4_dain_msg_1",\n                "condition": "route_dain"\n            },\n            {\n                "next": "morning4_hidden_check"\n            }\n        ]\n    }'
);

// Also fix msg nodes to go to hidden check instead of morning4_end
morning4Content = morning4Content.replace(
    '"morning4_seo_msg_1": {\n        "background": "assets/images/background/student_room.png",\n        "character": null,\n        "condition": "route_seoyeon",\n        "next": "morning4_end"\n    }',
    '"morning4_seo_msg_1": {\n        "background": "assets/images/background/student_room.png",\n        "character": null,\n        "condition": "route_seoyeon",\n        "next": "morning4_hidden_check"\n    }'
);
morning4Content = morning4Content.replace(
    '"morning4_yuna_msg_1": {\n        "background": "assets/images/background/student_room.png",\n        "character": null,\n        "condition": "route_yuna",\n        "next": "morning4_end"\n    }',
    '"morning4_yuna_msg_1": {\n        "background": "assets/images/background/student_room.png",\n        "character": null,\n        "condition": "route_yuna",\n        "next": "morning4_hidden_check"\n    }'
);
morning4Content = morning4Content.replace(
    '"morning4_dain_msg_1": {\n        "background": "assets/images/background/student_room.png",\n        "character": null,\n        "condition": "route_dain",\n        "next": "morning4_end"\n    }',
    '"morning4_dain_msg_1": {\n        "background": "assets/images/background/student_room.png",\n        "character": null,\n        "condition": "route_dain",\n        "next": "morning4_hidden_check"\n    }'
);

fs.writeFileSync('assets/js/scenario/day4_1_morning.js', morning4Content);
console.log('  day4_1_morning.js updated');

// Day 4 i18n
const day4_i18n = {
    ko: {
        "morning4_hidden_check": { "name": "{name}", "text": "*주말. 학교 근처를 지나가게 됐다.*" },
        "hidden_homeroom_d4_1": { "name": "{name}", "text": "*학교 정문이 살짝 열려 있다. 안쪽에서 인기척. — 정문 앞에서 나오는 사람. 담임선생님이다. 사복 차림.*" },
        "hidden_homeroom_d4_2": { "name": "담임선생님", "text": "...어? {name}?" },
        "hidden_homeroom_d4_3": { "name": "{name}", "text": "선생님? 주말인데 학교에요?" },
        "hidden_homeroom_d4_4": { "name": "담임선생님", "text": "아, 이건 — 서류 정리가 남아서. ...교사는 주말에도 교사야. 뭐." },
        "hidden_homeroom_d4_5": { "name": "담임선생님", "text": "...밥 먹었어? 선생님이 이러면 안 되는데... 커피 한 잔 정도는 괜찮지? — 학생이니까 주스지만." },
        "hidden_homeroom_d4_choice": { "name": "{name}", "text": "*사복 차림의 담임은 교사처럼 보이지 않는다. 그냥 — 글 쓰는 사람처럼.*", "choices": ["좋아요. 근처에 카페 있어요?", "선생님, 그러면 안 되는 거 아니에요?"] },
        "hidden_homeroom_d4_cafe_1": { "name": "담임선생님", "text": "학교 밖에서 학생이랑 차 마시는 건 처음이야. 솔직히? 좀 어색해." },
        "hidden_homeroom_d4_cafe_2": { "name": "담임선생님", "text": "...조금. 어제 네가 보고 나서 — 이상하게 좀 더 쓸 수 있었어. 누군가한테 들킨 게 — 안도가 됐달까." },
        "hidden_homeroom_d4_cafe_3": { "name": "담임선생님", "text": "소설에서 제일 어려운 게 뭔지 알아? 첫 번째 독자를 찾는 거야. 읽어줄 사람이 없으면 — 이야기는 완성되지 않아." },
        "hidden_homeroom_d4_cafe_4": { "name": "담임선생님", "text": "...첫 번째 독자가 되어줄래?" },
        "hidden_homeroom_d4_cafe_5": { "name": "{name}", "text": "읽고 싶어요." },
        "hidden_homeroom_d4_cafe_6": { "name": "담임선생님", "text": "...고마워. 근데 이거 아무한테도 — 알지? 선생님이 이러면 안 되는데." },
        "hidden_homeroom_d4_decline": { "name": "담임선생님", "text": "...맞아. 안 되는 거지. 가 봐. 주말인데 학교 앞에서 뭐 하냐. — 재밌는 거 해." },
        "hidden_homeroom_d4_freetalk": { "name": "담임선생님", "text": "*담임선생님과 카페에서 대화 중.*", "context": "Day 4. 주말에 학교 앞에서 우연히 만나 카페에서 대화. 첫 번째 독자가 되어달라는 부탁.", "personality": "담임선생님은 사복 차림에서 더 편안하다. 소설에 대한 열정과 학생에 대한 감정 사이에서 흔들린다." },
        "hidden_nurse_d4_check": { "name": "{name}", "text": "*주말이 끝나간다.*" },
        "hidden_nurse_d4_1": { "name": "{name}", "text": "*보건선생님이 학교 메신저로 '도와줄 사람 구함'이라고 올렸다. 발이 학교를 향하고 있다.*" },
        "hidden_nurse_d4_2": { "name": "보건선생님", "text": "어? 진짜 왔어? 올 줄 몰랐는데. — 학생이 주말에 보건실에 자원봉사를 오다니." },
        "hidden_nurse_d4_3": { "name": "{name}", "text": "도와준다고 했잖아요." },
        "hidden_nurse_d4_4": { "name": "보건선생님", "text": "...대학병원에서는 이런 거 혼자 다 했었는데. 야간 근무 때 — 간호사 세 명이 해야 할 일을 혼자 하는 날도 있었어." },
        "hidden_nurse_d4_5": { "name": "보건선생님", "text": "그때 나한테 제일 힘들었던 건 일의 양이 아니었어. 아무도 내 이름을 안 불러줬어. 다 직함이지, 이름이 아니거든." },
        "hidden_nurse_d4_6": { "name": "보건선생님", "text": "고마워~ 덕분에 빨리 끝났다. ...별거야." },
        "hidden_nurse_d4_choice": { "name": "보건선생님", "text": "자, 보답으로 뭐 사줄까? 선생님이 학생한테 밥 사주는 건 교육적 활동이니까~", "choices": ["교육적 활동이면 돼요?", "괜찮아요, 저 이만 갈게요"] },
        "hidden_nurse_d4_meal_1": { "name": "보건선생님", "text": "아 맵다! 이게 학생들이 먹는 건가?!" },
        "hidden_nurse_d4_meal_2": { "name": "{name}", "text": "안 늙었는데요." },
        "hidden_nurse_d4_meal_3": { "name": "보건선생님", "text": "...그런 말. 학생한테 들으니까 이상하네." },
        "hidden_nurse_d4_meal_4": { "name": "보건선생님", "text": "{name}. 오늘 고마웠어. — 진짜로." },
        "hidden_nurse_d4_pass": { "name": "보건선생님", "text": "그래~ 조심히 가! — 다음에 또 와." },
        "hidden_nurse_d4_freetalk": { "name": "보건선생님", "text": "*보건선생님과 분식집에서 대화 중.*", "context": "Day 4. 주말에 건강검진 준비를 도와주고 분식집에서 식사. 대학병원 번아웃 이야기.", "personality": "보건선생님은 사복에서 누나 같다. 장난기와 진심이 오가며, 이름을 불러주는 것의 무게를 안다." }
    },
    en: {
        "morning4_hidden_check": { "name": "Me", "text": "*Weekend. I end up passing by the school.*" },
        "hidden_homeroom_d4_1": { "name": "Me", "text": "*The school gate is slightly ajar. Signs of life inside. — Someone walks out. It's the homeroom teacher. In casual clothes.*" },
        "hidden_homeroom_d4_2": { "name": "Homeroom Teacher", "text": "...Huh? {name}?" },
        "hidden_homeroom_d4_3": { "name": "Me", "text": "Sir? It's the weekend, why are you at school?" },
        "hidden_homeroom_d4_4": { "name": "Homeroom Teacher", "text": "Oh, it's — leftover paperwork. ...Teachers are teachers even on weekends." },
        "hidden_homeroom_d4_5": { "name": "Homeroom Teacher", "text": "...Have you eaten? I really shouldn't do this... but one cup of coffee should be fine, right? — Well, juice, since you're a student." },
        "hidden_homeroom_d4_choice": { "name": "Me", "text": "*In casual clothes, the teacher doesn't look like a teacher. More like — a writer.*", "choices": ["Sure. Is there a cafe nearby?", "Sir, you probably shouldn't, right?"] },
        "hidden_homeroom_d4_cafe_1": { "name": "Homeroom Teacher", "text": "First time having tea with a student outside school. Honestly? A bit awkward." },
        "hidden_homeroom_d4_cafe_2": { "name": "Homeroom Teacher", "text": "...A little. After you saw it yesterday — somehow I could write more. Being found out was... a relief, I guess." },
        "hidden_homeroom_d4_cafe_3": { "name": "Homeroom Teacher", "text": "Know what's hardest about novels? Finding the first reader. Writing can be done alone. But without someone to read it — the story never gets finished." },
        "hidden_homeroom_d4_cafe_4": { "name": "Homeroom Teacher", "text": "...Will you be my first reader?" },
        "hidden_homeroom_d4_cafe_5": { "name": "Me", "text": "I want to read it." },
        "hidden_homeroom_d4_cafe_6": { "name": "Homeroom Teacher", "text": "...Thanks. But this stays between us — you know? I really shouldn't be doing this." },
        "hidden_homeroom_d4_decline": { "name": "Homeroom Teacher", "text": "...Right. I shouldn't. Go on, it's the weekend, don't hang around school. — Go have fun." },
        "hidden_homeroom_d4_freetalk": { "name": "Homeroom Teacher", "text": "*Talking with the homeroom teacher at a cafe.*", "context": "Day 4. Ran into the teacher on the weekend, went to a cafe. He asked you to be his first reader.", "personality": "The teacher is more relaxed in casual clothes. Torn between passion for writing and feelings for a student." },
        "hidden_nurse_d4_check": { "name": "Me", "text": "*The weekend is winding down.*" },
        "hidden_nurse_d4_1": { "name": "Me", "text": "*The school nurse posted 'looking for helpers' on the school messenger. My feet are already heading to school.*" },
        "hidden_nurse_d4_2": { "name": "School Nurse", "text": "Huh? You actually came? Didn't expect that. — A student volunteering at the nurse's office on a weekend." },
        "hidden_nurse_d4_3": { "name": "Me", "text": "I said I'd help." },
        "hidden_nurse_d4_4": { "name": "School Nurse", "text": "...At the hospital I used to do all this alone. Night shifts — sometimes one nurse doing three nurses' work." },
        "hidden_nurse_d4_5": { "name": "School Nurse", "text": "The hardest part wasn't the workload. Nobody called me by my name. 'Nurse,' 'night shift,' 'Ward 3.' All titles, not names." },
        "hidden_nurse_d4_6": { "name": "School Nurse", "text": "Thanks~ Finished faster because of you. ...It matters." },
        "hidden_nurse_d4_choice": { "name": "School Nurse", "text": "So, as thanks, can I buy you something? A teacher treating a student to a meal is totally an educational activity~", "choices": ["If it's educational, sure?", "That's okay, I should get going"] },
        "hidden_nurse_d4_meal_1": { "name": "School Nurse", "text": "This is so spicy! Is this what students eat?!" },
        "hidden_nurse_d4_meal_2": { "name": "Me", "text": "You're not old at all." },
        "hidden_nurse_d4_meal_3": { "name": "School Nurse", "text": "...That kind of thing. Sounds strange coming from a student." },
        "hidden_nurse_d4_meal_4": { "name": "School Nurse", "text": "{name}. Thanks for today. — Seriously." },
        "hidden_nurse_d4_pass": { "name": "School Nurse", "text": "Alright~ Get home safe! — Come by again." },
        "hidden_nurse_d4_freetalk": { "name": "School Nurse", "text": "*Talking with the school nurse at a snack bar.*", "context": "Day 4. Helped with health checkup prep on the weekend, then ate together. Hospital burnout backstory.", "personality": "In casual clothes she feels more like an older sister. Oscillates between playfulness and sincerity." }
    },
    es: {
        "morning4_hidden_check": { "name": "Yo", "text": "*Fin de semana. Paso por la escuela.*" },
        "hidden_homeroom_d4_1": { "name": "Yo", "text": "*La puerta de la escuela est\u00e1 entreabierta. Alguien sale. Es el profesor. En ropa casual.*" },
        "hidden_homeroom_d4_2": { "name": "Profesor", "text": "...\u00bfEh? \u00bf{name}?" },
        "hidden_homeroom_d4_3": { "name": "Yo", "text": "\u00bfProfe? Es fin de semana, \u00bfqu\u00e9 hace en la escuela?" },
        "hidden_homeroom_d4_4": { "name": "Profesor", "text": "Ah, es que \u2014 me qued\u00f3 papeleo. ...Un profesor es profesor incluso los fines de semana." },
        "hidden_homeroom_d4_5": { "name": "Profesor", "text": "...\u00bfComiste? No deber\u00eda hacer esto... pero un caf\u00e9 est\u00e1 bien, \u00bfno? \u2014 Bueno, un jugo, que eres estudiante." },
        "hidden_homeroom_d4_choice": { "name": "Yo", "text": "*En ropa casual, el profesor no parece profesor. M\u00e1s bien \u2014 un escritor.*", "choices": ["Dale. \u00bfHay alg\u00fan caf\u00e9 cerca?", "Profe, \u00bfno deber\u00eda hacer eso?"] },
        "hidden_homeroom_d4_cafe_1": { "name": "Profesor", "text": "Primera vez tomando algo con un alumno fuera de la escuela. \u00bfSinceramente? Un poco inc\u00f3modo." },
        "hidden_homeroom_d4_cafe_2": { "name": "Profesor", "text": "...Un poco. Despu\u00e9s de que me descubrieras ayer \u2014 pude escribir m\u00e1s. Que alguien lo supiera fue... un alivio." },
        "hidden_homeroom_d4_cafe_3": { "name": "Profesor", "text": "\u00bfSabes qu\u00e9 es lo m\u00e1s dif\u00edcil de escribir novelas? Encontrar al primer lector. Sin alguien que lea \u2014 la historia nunca se completa." },
        "hidden_homeroom_d4_cafe_4": { "name": "Profesor", "text": "...\u00bfSer\u00edas mi primer lector?" },
        "hidden_homeroom_d4_cafe_5": { "name": "Yo", "text": "Quiero leerlo." },
        "hidden_homeroom_d4_cafe_6": { "name": "Profesor", "text": "...Gracias. Pero esto queda entre nosotros \u2014 \u00bfs\u00ed? No deber\u00eda hacer esto." },
        "hidden_homeroom_d4_decline": { "name": "Profesor", "text": "...Cierto. No deber\u00eda. Anda, es fin de semana. \u2014 Divi\u00e9rtete." },
        "hidden_homeroom_d4_freetalk": { "name": "Profesor", "text": "*Conversando con el profesor en un caf\u00e9.*", "context": "D\u00eda 4. Encuentro casual el fin de semana. Pidi\u00f3 ser su primer lector.", "personality": "El profesor es m\u00e1s relajado en ropa casual. Dividido entre la pasi\u00f3n por escribir y sus sentimientos." },
        "hidden_nurse_d4_check": { "name": "Yo", "text": "*El fin de semana se acaba.*" },
        "hidden_nurse_d4_1": { "name": "Yo", "text": "*La enfermera public\u00f3 'busco ayudante' en el chat escolar. Mis pies ya se dirigen a la escuela.*" },
        "hidden_nurse_d4_2": { "name": "Enfermera", "text": "\u00bfEh? \u00bfViniste de verdad? No lo esperaba. \u2014 Un estudiante voluntario en la enfermer\u00eda un fin de semana." },
        "hidden_nurse_d4_3": { "name": "Yo", "text": "Dije que ayudar\u00eda." },
        "hidden_nurse_d4_4": { "name": "Enfermera", "text": "...En el hospital hac\u00eda todo esto sola. Turnos de noche \u2014 a veces una enfermera haciendo el trabajo de tres." },
        "hidden_nurse_d4_5": { "name": "Enfermera", "text": "Lo m\u00e1s duro no era la carga de trabajo. Nadie me llamaba por mi nombre. 'Enfermera', 'turno nocturno', 'Planta 3'. Todo cargos, no nombres." },
        "hidden_nurse_d4_6": { "name": "Enfermera", "text": "\u00a1Gracias~ Terminamos r\u00e1pido por ti! ...S\u00ed importa." },
        "hidden_nurse_d4_choice": { "name": "Enfermera", "text": "Bueno, \u00bfte invito algo? Una profesora invitando a un alumno es una actividad educativa~", "choices": ["\u00bfSi es educativa, est\u00e1 bien?", "No hace falta, me voy yendo"] },
        "hidden_nurse_d4_meal_1": { "name": "Enfermera", "text": "\u00a1Qu\u00e9 picante! \u00bf\u00c9sto es lo que comen los estudiantes?!" },
        "hidden_nurse_d4_meal_2": { "name": "Yo", "text": "No eres vieja para nada." },
        "hidden_nurse_d4_meal_3": { "name": "Enfermera", "text": "...Eso. Suena raro viniendo de un estudiante." },
        "hidden_nurse_d4_meal_4": { "name": "Enfermera", "text": "{name}. Gracias por hoy. \u2014 De verdad." },
        "hidden_nurse_d4_pass": { "name": "Enfermera", "text": "\u00a1Bueno~ Cu\u00eddate! \u2014 Vuelve pronto." },
        "hidden_nurse_d4_freetalk": { "name": "Enfermera", "text": "*Conversando con la enfermera en una tienda de comida.*", "context": "D\u00eda 4. Ayud\u00f3 con los preparativos y comieron juntos.", "personality": "En ropa casual parece una hermana mayor. Oscila entre lo juguet\u00f3n y lo sincero." }
    },
    ja: {
        "morning4_hidden_check": { "name": "\u50d5", "text": "*\u9031\u672b\u3002\u5b66\u6821\u306e\u8fd1\u304f\u3092\u901a\u308a\u304b\u304b\u3063\u305f\u3002*" },
        "hidden_homeroom_d4_1": { "name": "\u50d5", "text": "*\u5b66\u6821\u306e\u6b63\u9580\u304c\u5c11\u3057\u958b\u3044\u3066\u3044\u308b\u3002\u4e2d\u304b\u3089\u4eba\u306e\u6c17\u914d\u3002\u2014\u2014\u51fa\u3066\u304d\u305f\u306e\u306f\u62c5\u4efb\u5148\u751f\u3002\u79c1\u670d\u59ff\u3002*" },
        "hidden_homeroom_d4_2": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u2026\u3048\uff1f{name}\uff1f" },
        "hidden_homeroom_d4_3": { "name": "\u50d5", "text": "\u5148\u751f\uff1f\u9031\u672b\u306a\u306e\u306b\u5b66\u6821\u3067\u3059\u304b\uff1f" },
        "hidden_homeroom_d4_4": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u3042\u3001\u3053\u308c\u306f\u2014\u2014\u66f8\u985e\u6574\u7406\u304c\u6b8b\u3063\u3066\u3066\u3002\u2026\u6559\u5e2b\u306f\u9031\u672b\u3067\u3082\u6559\u5e2b\u3060\u304b\u3089\u306a\u3002" },
        "hidden_homeroom_d4_5": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u2026\u3054\u98ef\u98df\u3079\u305f\uff1f\u5148\u751f\u304c\u3053\u3093\u306a\u3053\u3068\u3057\u3061\u3083\u3044\u3051\u306a\u3044\u3093\u3060\u3051\u3069\u2026\u30b3\u30fc\u30d2\u30fc\u4e00\u676f\u304f\u3089\u3044\u306f\u3044\u3044\u3088\u306d\uff1f\u2014\u2014\u751f\u5f92\u3060\u304b\u3089\u30b8\u30e5\u30fc\u30b9\u3060\u3051\u3069\u3002" },
        "hidden_homeroom_d4_choice": { "name": "\u50d5", "text": "*\u79c1\u670d\u306e\u62c5\u4efb\u306f\u6559\u5e2b\u306b\u898b\u3048\u306a\u3044\u3002\u305f\u3060\u306e\u2014\u2014\u7269\u66f8\u304d\u306e\u3088\u3046\u3060\u3002*", "choices": ["\u3044\u3044\u3067\u3059\u306d\u3002\u8fd1\u304f\u306b\u30ab\u30d5\u30a7\u3042\u308a\u307e\u3059\u304b\uff1f", "\u5148\u751f\u3001\u305d\u308c\u306f\u30c0\u30e1\u3058\u3083\u306a\u3044\u3067\u3059\u304b\uff1f"] },
        "hidden_homeroom_d4_cafe_1": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u5b66\u6821\u306e\u5916\u3067\u751f\u5f92\u3068\u304a\u8336\u3059\u308b\u306e\u306f\u521d\u3081\u3066\u3060\u3002\u6b63\u76f4\uff1f\u3061\u3087\u3063\u3068\u6c17\u307e\u305a\u3044\u3002" },
        "hidden_homeroom_d4_cafe_2": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u2026\u5c11\u3057\u3002\u6628\u65e5\u541b\u306b\u898b\u3089\u308c\u3066\u304b\u3089\u2014\u2014\u4e0d\u601d\u8b70\u3068\u3082\u3063\u3068\u66f8\u3051\u305f\u3002\u8ab0\u304b\u306b\u30d0\u30ec\u305f\u306e\u304c\u2014\u2014\u5b89\u5fc3\u3060\u3063\u305f\u306e\u304b\u306a\u3002" },
        "hidden_homeroom_d4_cafe_3": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u5c0f\u8aac\u3067\u4e00\u756a\u96e3\u3057\u3044\u306e\u304c\u4f55\u304b\u77e5\u3063\u3066\u308b\uff1f\u6700\u521d\u306e\u8aad\u8005\u3092\u898b\u3064\u3051\u308b\u3053\u3068\u3002\u8aad\u3093\u3067\u304f\u308c\u308b\u4eba\u304c\u3044\u306a\u3044\u3068\u2014\u2014\u7269\u8a9e\u306f\u5b8c\u6210\u3057\u306a\u3044\u3002" },
        "hidden_homeroom_d4_cafe_4": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u2026\u6700\u521d\u306e\u8aad\u8005\u306b\u306a\u3063\u3066\u304f\u308c\u306a\u3044\u304b\uff1f" },
        "hidden_homeroom_d4_cafe_5": { "name": "\u50d5", "text": "\u8aad\u307f\u305f\u3044\u3067\u3059\u3002" },
        "hidden_homeroom_d4_cafe_6": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u2026\u3042\u308a\u304c\u3068\u3046\u3002\u3067\u3082\u3053\u308c\u3001\u8ab0\u306b\u3082\u2014\u2014\u308f\u304b\u3063\u3066\u308b\u3088\u306d\uff1f\u5148\u751f\u304c\u3053\u3093\u306a\u3053\u3068\u3057\u3061\u3083\u3044\u3051\u306a\u3044\u3093\u3060\u3051\u3069\u3002" },
        "hidden_homeroom_d4_decline": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u2026\u305d\u3046\u3060\u306a\u3002\u30c0\u30e1\u3060\u3088\u306a\u3002\u884c\u3051\u3002\u9031\u672b\u306a\u306e\u306b\u5b66\u6821\u306e\u524d\u3067\u4f55\u3057\u3066\u308b\u3093\u3060\u3002\u2014\u2014\u697d\u3057\u3044\u3053\u3068\u3057\u308d\u3002" },
        "hidden_homeroom_d4_freetalk": { "name": "\u62c5\u4efb\u5148\u751f", "text": "*\u62c5\u4efb\u5148\u751f\u3068\u30ab\u30d5\u30a7\u3067\u4f1a\u8a71\u4e2d\u3002*", "context": "Day 4\u3002\u9031\u672b\u306b\u5076\u7136\u4f1a\u3063\u3066\u30ab\u30d5\u30a7\u3067\u4f1a\u8a71\u3002\u6700\u521d\u306e\u8aad\u8005\u306b\u306a\u3063\u3066\u307b\u3057\u3044\u3068\u983c\u307e\u308c\u305f\u3002", "personality": "\u62c5\u4efb\u306f\u79c1\u670d\u3060\u3068\u3082\u3063\u3068\u30ea\u30e9\u30c3\u30af\u30b9\u3057\u3066\u3044\u308b\u3002\u57f7\u7b46\u3078\u306e\u60c5\u71b1\u3068\u751f\u5f92\u3078\u306e\u611f\u60c5\u306e\u9593\u3067\u63fa\u308c\u3066\u3044\u308b\u3002" },
        "hidden_nurse_d4_check": { "name": "\u50d5", "text": "*\u9031\u672b\u304c\u7d42\u308f\u308a\u304b\u3051\u3066\u3044\u308b\u3002*" },
        "hidden_nurse_d4_1": { "name": "\u50d5", "text": "*\u4fdd\u5065\u5148\u751f\u304c\u5b66\u6821\u306e\u30e1\u30c3\u30bb\u30f3\u30b8\u30e3\u30fc\u3067\u300e\u624b\u4f1d\u3063\u3066\u304f\u308c\u308b\u4eba\u52df\u96c6\u300f\u3068\u6295\u7a3f\u3057\u305f\u3002\u8db3\u304c\u5b66\u6821\u306b\u5411\u304b\u3063\u3066\u3044\u308b\u3002*" },
        "hidden_nurse_d4_2": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u3048\uff1f\u672c\u5f53\u306b\u6765\u305f\u306e\uff1f\u6765\u308b\u3068\u601d\u308f\u306a\u304b\u3063\u305f\u3002\u2014\u2014\u751f\u5f92\u304c\u9031\u672b\u306b\u4fdd\u5065\u5ba4\u306b\u30dc\u30e9\u30f3\u30c6\u30a3\u30a2\u3060\u306a\u3093\u3066\u3002" },
        "hidden_nurse_d4_3": { "name": "\u50d5", "text": "\u624b\u4f1d\u3046\u3063\u3066\u8a00\u3063\u305f\u3058\u3083\u306a\u3044\u3067\u3059\u304b\u3002" },
        "hidden_nurse_d4_4": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u2026\u75c5\u9662\u3067\u306f\u3053\u3046\u3044\u3046\u306e\u5168\u90e8\u4e00\u4eba\u3067\u3084\u3063\u3066\u305f\u3002\u591c\u52e4\u306e\u6642\u2014\u2014\u770b\u8b77\u5e2b\u4e09\u4eba\u5206\u306e\u4ed5\u4e8b\u3092\u4e00\u4eba\u3067\u3084\u308b\u65e5\u3082\u3042\u3063\u305f\u3002" },
        "hidden_nurse_d4_5": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u4e00\u756a\u3064\u3089\u304b\u3063\u305f\u306e\u306f\u4ed5\u4e8b\u306e\u91cf\u3058\u3083\u306a\u304b\u3063\u305f\u3002\u8ab0\u3082\u79c1\u306e\u540d\u524d\u3092\u547c\u3093\u3067\u304f\u308c\u306a\u304b\u3063\u305f\u3002\u5168\u90e8\u80a9\u66f8\u304d\u3067\u3001\u540d\u524d\u3058\u3083\u306a\u3044\u3093\u3060\u3088\u306d\u3002" },
        "hidden_nurse_d4_6": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u3042\u308a\u304c\u3068\u3046\uff5e\u304a\u304b\u3052\u3067\u65e9\u304f\u7d42\u308f\u3063\u305f\u3002\u2026\u5927\u3057\u305f\u3053\u3068\u3060\u3088\u3002" },
        "hidden_nurse_d4_choice": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u3055\u3001\u304a\u793c\u306b\u4f55\u304b\u304a\u3054\u308d\u3046\u304b\uff1f\u5148\u751f\u304c\u751f\u5f92\u306b\u3054\u98ef\u304a\u3054\u308b\u306e\u306f\u6559\u80b2\u7684\u6d3b\u52d5\u3060\u304b\u3089\uff5e", "choices": ["\u6559\u80b2\u7684\u6d3b\u52d5\u306a\u3089\u3044\u3044\u3093\u3067\u3059\u304b\uff1f", "\u5927\u4e08\u592b\u3067\u3059\u3001\u305d\u308d\u305d\u308d\u5e30\u308a\u307e\u3059"] },
        "hidden_nurse_d4_meal_1": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u8f9b\u3044\uff01\u3053\u308c\u304c\u751f\u5f92\u305f\u3061\u306e\u98df\u3079\u308b\u3082\u306e\uff1f\uff01" },
        "hidden_nurse_d4_meal_2": { "name": "\u50d5", "text": "\u5168\u7136\u8001\u3051\u3066\u306a\u3044\u3067\u3059\u3088\u3002" },
        "hidden_nurse_d4_meal_3": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u2026\u305d\u3046\u3044\u3046\u3053\u3068\u3002\u751f\u5f92\u304b\u3089\u805e\u304f\u3068\u5909\u306a\u611f\u3058\u3060\u306d\u3002" },
        "hidden_nurse_d4_meal_4": { "name": "\u4fdd\u5065\u5148\u751f", "text": "{name}\u3002\u4eca\u65e5\u306f\u3042\u308a\u304c\u3068\u3046\u3002\u2014\u2014\u672c\u5f53\u306b\u3002" },
        "hidden_nurse_d4_pass": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u3044\u3044\u3088\uff5e\u6c17\u3092\u3064\u3051\u3066\u306d\uff01\u2014\u2014\u307e\u305f\u304a\u3044\u3067\u3002" },
        "hidden_nurse_d4_freetalk": { "name": "\u4fdd\u5065\u5148\u751f", "text": "*\u4fdd\u5065\u5148\u751f\u3068\u5c4b\u53f0\u3067\u4f1a\u8a71\u4e2d\u3002*", "context": "Day 4\u3002\u9031\u672b\u306b\u5065\u5eb7\u8a3a\u65ad\u6e96\u5099\u3092\u624b\u4f1d\u3063\u3066\u4e00\u7dd2\u306b\u98df\u4e8b\u3002", "personality": "\u79c1\u670d\u3060\u3068\u304a\u59c9\u3055\u3093\u307f\u305f\u3044\u3002\u3044\u305f\u305a\u3089\u3068\u672c\u6c17\u304c\u884c\u304d\u6765\u3059\u308b\u3002" }
    },
    fr: {
        "morning4_hidden_check": { "name": "Moi", "text": "*Weekend. Je passe devant l'\u00e9cole.*" },
        "hidden_homeroom_d4_1": { "name": "Moi", "text": "*Le portail est entrouvert. Quelqu'un sort. C'est le prof principal. En civil.*" },
        "hidden_homeroom_d4_2": { "name": "Professeur Principal", "text": "...Hein ? {name} ?" },
        "hidden_homeroom_d4_3": { "name": "Moi", "text": "Monsieur ? C'est le weekend, qu'est-ce que vous faites l\u00e0 ?" },
        "hidden_homeroom_d4_4": { "name": "Professeur Principal", "text": "Ah, c'est que \u2014 de la paperasse. ...Un prof reste un prof m\u00eame le weekend." },
        "hidden_homeroom_d4_5": { "name": "Professeur Principal", "text": "...T'as mang\u00e9 ? Je devrais pas faire \u00e7a... mais un caf\u00e9, \u00e7a va, non ? \u2014 Enfin, un jus pour toi." },
        "hidden_homeroom_d4_choice": { "name": "Moi", "text": "*En civil, le prof ne ressemble pas \u00e0 un prof. Plut\u00f4t \u00e0 \u2014 un \u00e9crivain.*", "choices": ["D'accord. Il y a un caf\u00e9 dans le coin ?", "Monsieur, vous devriez pas, non ?"] },
        "hidden_homeroom_d4_cafe_1": { "name": "Professeur Principal", "text": "Premi\u00e8re fois que je prends un verre avec un \u00e9l\u00e8ve en dehors de l'\u00e9cole. Franchement ? Un peu g\u00eanant." },
        "hidden_homeroom_d4_cafe_2": { "name": "Professeur Principal", "text": "...Un peu. Apr\u00e8s que tu m'aies d\u00e9couvert hier \u2014 j'ai pu \u00e9crire davantage. \u00catre d\u00e9couvert, c'\u00e9tait... un soulagement." },
        "hidden_homeroom_d4_cafe_3": { "name": "Professeur Principal", "text": "Tu sais ce qui est le plus dur dans l'\u00e9criture ? Trouver le premier lecteur. Sans quelqu'un pour lire \u2014 l'histoire ne se termine jamais." },
        "hidden_homeroom_d4_cafe_4": { "name": "Professeur Principal", "text": "...Tu veux bien \u00eatre mon premier lecteur ?" },
        "hidden_homeroom_d4_cafe_5": { "name": "Moi", "text": "J'ai envie de le lire." },
        "hidden_homeroom_d4_cafe_6": { "name": "Professeur Principal", "text": "...Merci. Mais \u00e7a reste entre nous \u2014 d'accord ? Je devrais pas faire \u00e7a." },
        "hidden_homeroom_d4_decline": { "name": "Professeur Principal", "text": "...T'as raison. Je devrais pas. Allez, c'est le weekend. \u2014 Va t'amuser." },
        "hidden_homeroom_d4_freetalk": { "name": "Professeur Principal", "text": "*En train de discuter avec le prof principal au caf\u00e9.*", "context": "Jour 4. Rencontre fortuite le weekend, caf\u00e9 ensemble. Il m'a demand\u00e9 d'\u00eatre son premier lecteur.", "personality": "Le prof est plus d\u00e9tendu en civil. D\u00e9chir\u00e9 entre passion pour l'\u00e9criture et sentiments." },
        "hidden_nurse_d4_check": { "name": "Moi", "text": "*Le weekend touche \u00e0 sa fin.*" },
        "hidden_nurse_d4_1": { "name": "Moi", "text": "*L'infirmi\u00e8re a post\u00e9 'cherche volontaires' sur la messagerie. Mes pieds se dirigent d\u00e9j\u00e0 vers l'\u00e9cole.*" },
        "hidden_nurse_d4_2": { "name": "Infirmi\u00e8re", "text": "Hein ? T'es vraiment venu ? Je m'y attendais pas. \u2014 Un \u00e9l\u00e8ve b\u00e9n\u00e9vole \u00e0 l'infirmerie un weekend." },
        "hidden_nurse_d4_3": { "name": "Moi", "text": "J'avais dit que j'aiderais." },
        "hidden_nurse_d4_4": { "name": "Infirmi\u00e8re", "text": "...\u00c0 l'h\u00f4pital je faisais tout \u00e7a seule. Les gardes de nuit \u2014 parfois une infirmi\u00e8re fait le travail de trois." },
        "hidden_nurse_d4_5": { "name": "Infirmi\u00e8re", "text": "Le plus dur, c'\u00e9tait pas la charge. Personne m'appelait par mon pr\u00e9nom. Tout \u00e9tait des titres, pas des noms." },
        "hidden_nurse_d4_6": { "name": "Infirmi\u00e8re", "text": "Merci~ On a fini vite gr\u00e2ce \u00e0 toi ! ...\u00c7a compte." },
        "hidden_nurse_d4_choice": { "name": "Infirmi\u00e8re", "text": "Bon, en remerciement, je t'offre quelque chose ? Un prof qui nourrit un \u00e9l\u00e8ve, c'est \u00e9ducatif~", "choices": ["Si c'est \u00e9ducatif, \u00e7a va ?", "\u00c7a va, je vais y aller"] },
        "hidden_nurse_d4_meal_1": { "name": "Infirmi\u00e8re", "text": "C'est super \u00e9pic\u00e9 ! C'est \u00e7a que mangent les \u00e9l\u00e8ves ?!" },
        "hidden_nurse_d4_meal_2": { "name": "Moi", "text": "Vous n'\u00eates pas vieille du tout." },
        "hidden_nurse_d4_meal_3": { "name": "Infirmi\u00e8re", "text": "...Ce genre de chose. \u00c7a sonne bizarre venant d'un \u00e9l\u00e8ve." },
        "hidden_nurse_d4_meal_4": { "name": "Infirmi\u00e8re", "text": "{name}. Merci pour aujourd'hui. \u2014 Vraiment." },
        "hidden_nurse_d4_pass": { "name": "Infirmi\u00e8re", "text": "D'accord~ Rentre bien ! \u2014 Reviens bient\u00f4t." },
        "hidden_nurse_d4_freetalk": { "name": "Infirmi\u00e8re", "text": "*En train de discuter avec l'infirmi\u00e8re dans un snack.*", "context": "Jour 4. Aid\u00e9 aux pr\u00e9paratifs et mang\u00e9 ensemble.", "personality": "En civil, elle fait plus grande s\u0153ur. Oscille entre enjouement et sinc\u00e9rit\u00e9." }
    },
    de: {
        "morning4_hidden_check": { "name": "Ich", "text": "*Wochenende. Ich komme an der Schule vorbei.*" },
        "hidden_homeroom_d4_1": { "name": "Ich", "text": "*Das Schultor steht einen Spalt offen. Jemand kommt raus. Der Klassenlehrer. In Freizeitkleidung.*" },
        "hidden_homeroom_d4_2": { "name": "Klassenlehrer", "text": "...H\u00e4? {name}?" },
        "hidden_homeroom_d4_3": { "name": "Ich", "text": "Herr Lehrer? Es ist Wochenende, was machen Sie hier?" },
        "hidden_homeroom_d4_4": { "name": "Klassenlehrer", "text": "Ach, da war noch \u2014 Papierkram. ...Lehrer sind auch am Wochenende Lehrer." },
        "hidden_homeroom_d4_5": { "name": "Klassenlehrer", "text": "...Schon gegessen? Ich sollte das eigentlich nicht tun... aber ein Kaffee geht doch, oder? \u2014 Also Saft, weil du Sch\u00fcler bist." },
        "hidden_homeroom_d4_choice": { "name": "Ich", "text": "*In Freizeitkleidung sieht der Lehrer nicht wie ein Lehrer aus. Eher wie \u2014 ein Schriftsteller.*", "choices": ["Klar. Gibt's ein Caf\u00e9 in der N\u00e4he?", "Das sollten Sie nicht tun, oder?"] },
        "hidden_homeroom_d4_cafe_1": { "name": "Klassenlehrer", "text": "Das erste Mal, dass ich mit einem Sch\u00fcler au\u00dferhalb der Schule was trinke. Ehrlich? Ein bisschen komisch." },
        "hidden_homeroom_d4_cafe_2": { "name": "Klassenlehrer", "text": "...Ein bisschen. Nachdem du mich gestern entdeckt hast \u2014 konnte ich irgendwie mehr schreiben. Ertappt zu werden war... erleichternd." },
        "hidden_homeroom_d4_cafe_3": { "name": "Klassenlehrer", "text": "Wei\u00dft du, was beim Romanschreiben am schwersten ist? Den ersten Leser zu finden. Ohne jemanden, der liest \u2014 wird die Geschichte nie fertig." },
        "hidden_homeroom_d4_cafe_4": { "name": "Klassenlehrer", "text": "...W\u00fcrdest du mein erster Leser werden?" },
        "hidden_homeroom_d4_cafe_5": { "name": "Ich", "text": "Ich will es lesen." },
        "hidden_homeroom_d4_cafe_6": { "name": "Klassenlehrer", "text": "...Danke. Aber das bleibt unter uns \u2014 klar? Ich sollte das eigentlich nicht tun." },
        "hidden_homeroom_d4_decline": { "name": "Klassenlehrer", "text": "...Stimmt. Sollte ich nicht. Geh. Es ist Wochenende. \u2014 Hab Spa\u00df." },
        "hidden_homeroom_d4_freetalk": { "name": "Klassenlehrer", "text": "*Im Gespr\u00e4ch mit dem Klassenlehrer im Caf\u00e9.*", "context": "Tag 4. Zuf\u00e4llige Begegnung am Wochenende. Er bat mich, sein erster Leser zu werden.", "personality": "Der Lehrer ist in Freizeitkleidung entspannter. Zerrissen zwischen Schreiblust und Gef\u00fchlen." },
        "hidden_nurse_d4_check": { "name": "Ich", "text": "*Das Wochenende geht zu Ende.*" },
        "hidden_nurse_d4_1": { "name": "Ich", "text": "*Die Schulkrankenschwester hat im Schul-Chat 'Suche Helfer' gepostet. Meine F\u00fc\u00dfe tragen mich zur Schule.*" },
        "hidden_nurse_d4_2": { "name": "Schulkrankenschwester", "text": "H\u00e4? Du bist wirklich gekommen? H\u00e4tte ich nicht erwartet. \u2014 Ein Sch\u00fcler, der am Wochenende im Krankenzimmer aushilft." },
        "hidden_nurse_d4_3": { "name": "Ich", "text": "Ich hab gesagt, dass ich helfe." },
        "hidden_nurse_d4_4": { "name": "Schulkrankenschwester", "text": "...Im Krankenhaus hab ich das alles alleine gemacht. Nachtschichten \u2014 manchmal eine Schwester f\u00fcr drei." },
        "hidden_nurse_d4_5": { "name": "Schulkrankenschwester", "text": "Das Schlimmste war nicht die Arbeitslast. Niemand hat mich beim Namen genannt. Alles Titel, keine Namen." },
        "hidden_nurse_d4_6": { "name": "Schulkrankenschwester", "text": "Danke~ Dank dir war's schnell fertig! ...Das bedeutet was." },
        "hidden_nurse_d4_choice": { "name": "Schulkrankenschwester", "text": "So, als Dank spendiere ich dir was? Eine Lehrerin, die einen Sch\u00fcler einl\u00e4dt, ist eine p\u00e4dagogische Ma\u00dfnahme~", "choices": ["Wenn's p\u00e4dagogisch ist, warum nicht?", "Passt schon, ich gehe dann"] },
        "hidden_nurse_d4_meal_1": { "name": "Schulkrankenschwester", "text": "Das ist so scharf! Essen Sch\u00fcler sowas?!" },
        "hidden_nurse_d4_meal_2": { "name": "Ich", "text": "Sie sind \u00fcberhaupt nicht alt." },
        "hidden_nurse_d4_meal_3": { "name": "Schulkrankenschwester", "text": "...So was. Klingt komisch von einem Sch\u00fcler." },
        "hidden_nurse_d4_meal_4": { "name": "Schulkrankenschwester", "text": "{name}. Danke f\u00fcr heute. \u2014 Echt jetzt." },
        "hidden_nurse_d4_pass": { "name": "Schulkrankenschwester", "text": "Okay~ Komm gut heim! \u2014 Komm bald wieder." },
        "hidden_nurse_d4_freetalk": { "name": "Schulkrankenschwester", "text": "*Im Gespr\u00e4ch mit der Schulkrankenschwester beim Imbiss.*", "context": "Tag 4. Am Wochenende bei Vorbereitungen geholfen und zusammen gegessen.", "personality": "In Freizeitkleidung wirkt sie wie eine gro\u00dfe Schwester. Pendelt zwischen Scherz und Ernsthaftigkeit." }
    }
};

for (const [lang, entries] of Object.entries(day4_i18n)) {
    addEntries(`assets/js/i18n/${lang}/day4_1_morning.json`, entries);
}
console.log('  day4_1_morning i18n complete');

console.log('\n=== Phase 3 complete (Day 4) ===');
