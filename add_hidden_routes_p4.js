const fs = require('fs');
function addEntries(filePath, entries) {
    let data = {};
    if (fs.existsSync(filePath)) { data = JSON.parse(fs.readFileSync(filePath, 'utf8')); }
    Object.assign(data, entries);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
}

// =====================================================================
// Day 5 Morning - 담임 원고 전달 + 보건 밴드 씬
// =====================================================================
console.log('--- Day 5 Morning ---');

let morning5 = fs.readFileSync('assets/js/scenario/day5_1_morning.js', 'utf8');

// Insert hidden check before morning5_end
morning5 = morning5.replace(
    '"morning5_end": {',
    `"hidden_homeroom_d5_check": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            { "condition": "homeroom_day4", "next": "hidden_homeroom_d5_1" },
            { "next": "hidden_nurse_d5_check" }
        ]
    },
    "hidden_homeroom_d5_1": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "hidden_homeroom_d5_2"
    },
    "hidden_homeroom_d5_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_3"
    },
    "hidden_homeroom_d5_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_4"
    },
    "hidden_homeroom_d5_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_5"
    },
    "hidden_homeroom_d5_5": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "hidden_homeroom_d5_6"
    },
    "hidden_homeroom_d5_6": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_7"
    },
    "hidden_homeroom_d5_7": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_8"
    },
    "hidden_homeroom_d5_8": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlag": "homeroom_day5",
        "next": "hidden_homeroom_d5_freetalk"
    },
    "hidden_homeroom_d5_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_nurse_d5_check"
    },
    "hidden_nurse_d5_check": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "branches": [
            { "condition": "nurse_day4", "next": "hidden_nurse_d5_1" },
            { "next": "morning5_end" }
        ]
    },
    "hidden_nurse_d5_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_2"
    },
    "hidden_nurse_d5_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_3"
    },
    "hidden_nurse_d5_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "hidden_nurse_d5_4"
    },
    "hidden_nurse_d5_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_5"
    },
    "hidden_nurse_d5_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_6"
    },
    "hidden_nurse_d5_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_7"
    },
    "hidden_nurse_d5_7": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "setFlag": "nurse_day5",
        "next": "hidden_nurse_d5_freetalk"
    },
    "hidden_nurse_d5_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "morning5_end"
    },

    "morning5_end": {`
);

// morning5_dain_2 should go to hidden check instead of morning5_end
morning5 = morning5.replace('"morning5_dain_2": {\n        "background": "assets/images/background/room_school.png",\n        "character": "assets/images/characters/dain_laugh.png",\n        "next": "morning5_end"\n    }',
    '"morning5_dain_2": {\n        "background": "assets/images/background/room_school.png",\n        "character": "assets/images/characters/dain_laugh.png",\n        "next": "hidden_homeroom_d5_check"\n    }');

fs.writeFileSync('assets/js/scenario/day5_1_morning.js', morning5);
console.log('  day5_1_morning.js updated');

// Day 5 Morning i18n
const d5m_i18n = {
    ko: {
        "hidden_homeroom_d5_check": { "name": "{name}", "text": "*행사 준비 시간. 복도를 걷는데 \u2014 빈 교실 앞을 지나간다. 문이 열려 있다.*" },
        "hidden_homeroom_d5_1": { "name": "{name}", "text": "*담임이 교탁에 앉아 있다. \u2014 원고가 아니라, 봉투를 들고 있다. 갈색 봉투.*" },
        "hidden_homeroom_d5_2": { "name": "담임선생님", "text": "원고. \u2014 미완성이지만. 첫 번째 독자한테 주려고." },
        "hidden_homeroom_d5_3": { "name": "담임선생님", "text": "7년 동안 아무한테도 안 보여줬어. \u2014 선생님이 이러면 안 되는데." },
        "hidden_homeroom_d5_4": { "name": "{name}", "text": "선생님. 그 말, 이제 안 하셔도 될 것 같아요." },
        "hidden_homeroom_d5_5": { "name": "담임선생님", "text": "...그 말을 학생한테 듣는 날이 올 줄은 몰랐다." },
        "hidden_homeroom_d5_6": { "name": "담임선생님", "text": "...감상문은 안 받아. \u2014 ...맞아. 한 줄이라도 써 줘." },
        "hidden_homeroom_d5_7": { "name": "담임선생님", "text": "졸업하면 \u2014 한 번 보자. 선생님이 아닌 이름으로. ...선생님이 이러면 안 되는데. 마지막이니까. 마지막 한 번만." },
        "hidden_homeroom_d5_8": { "name": "{name}", "text": "*담임이 돌아선다. 넥타이가 흔들린다. \u2014 오늘은 반듯하다.*" },
        "hidden_homeroom_d5_freetalk": { "name": "담임선생님", "text": "*담임선생님과 빈 교실에서 마지막 대화.*", "context": "Day 5. 마지막 날. 담임이 7년의 원고를 건넸다. 졸업 후 만나자는 약속.", "personality": "담임선생님은 마지막이라서 평소보다 솔직하다. '선생님이 이러면 안 되는데'를 마지막으로 쓴다." },
        "hidden_nurse_d5_check": { "name": "{name}", "text": "*행사 중간 쉬는 시간. 보건실 앞을 지나간다.*" },
        "hidden_nurse_d5_1": { "name": "보건선생님", "text": "어? {name}. \u2014 마지막 날이네. 행사 마지막 날이잖아." },
        "hidden_nurse_d5_2": { "name": "보건선생님", "text": "졸업하면 놀러 와. ...그전에도 아프면 와." },
        "hidden_nurse_d5_3": { "name": "{name}", "text": "안 아파도 가면 안 돼요?" },
        "hidden_nurse_d5_4": { "name": "보건선생님", "text": "...그건 졸업하고 물어봐. \u2014 그때는 대답해줄게." },
        "hidden_nurse_d5_5": { "name": "보건선생님", "text": "...{name}. 밴드 붙여줄까?" },
        "hidden_nurse_d5_6": { "name": "보건선생님", "text": "알아. 그냥 핑계가 필요했어." },
        "hidden_nurse_d5_7": { "name": "{name}", "text": "*밴드에 작은 글씨가 적혀 있다. '졸업하면 보건실 말고 카페에서 만나자 \u2014 \u2665'*" },
        "hidden_nurse_d5_freetalk": { "name": "보건선생님", "text": "*보건선생님과 보건실 앞에서 마지막 대화.*", "context": "Day 5. 마지막 날. 보건선생님이 밴드에 메시지를 적어 붙여줬다. 졸업 후 만나자는 약속.", "personality": "보건선생님은 마지막이라 장난기가 줄었다. 핑계가 필요 없는 날을 기다린다." }
    },
    en: {
        "hidden_homeroom_d5_check": { "name": "Me", "text": "*Event prep time. Walking down the hallway \u2014 I pass the empty classroom. The door is open.*" },
        "hidden_homeroom_d5_1": { "name": "Me", "text": "*The teacher is sitting at the desk. \u2014 Not a manuscript this time. He's holding an envelope. A brown envelope.*" },
        "hidden_homeroom_d5_2": { "name": "Homeroom Teacher", "text": "The manuscript. \u2014 It's unfinished. But I wanted to give it to my first reader." },
        "hidden_homeroom_d5_3": { "name": "Homeroom Teacher", "text": "Haven't shown this to anyone in seven years. \u2014 I really shouldn't be doing this." },
        "hidden_homeroom_d5_4": { "name": "Me", "text": "Sir. I think you can stop saying that now." },
        "hidden_homeroom_d5_5": { "name": "Homeroom Teacher", "text": "...Never thought I'd hear that from a student." },
        "hidden_homeroom_d5_6": { "name": "Homeroom Teacher", "text": "...No book reports. \u2014 ...Actually, write me at least one line." },
        "hidden_homeroom_d5_7": { "name": "Homeroom Teacher", "text": "After you graduate \u2014 let's meet. Not as teacher and student. ...I really shouldn't. But just this once. One last time." },
        "hidden_homeroom_d5_8": { "name": "Me", "text": "*He turns away. His tie sways. \u2014 Today, it's straight.*" },
        "hidden_homeroom_d5_freetalk": { "name": "Homeroom Teacher", "text": "*Last conversation with the homeroom teacher in the empty classroom.*", "context": "Day 5. Last day. The teacher handed over his 7-year manuscript. A promise to meet after graduation.", "personality": "The teacher is more honest than usual because it's the last time. Using his catchphrase for the final time." },
        "hidden_nurse_d5_check": { "name": "Me", "text": "*Break during the event. Passing by the nurse's office.*" },
        "hidden_nurse_d5_1": { "name": "School Nurse", "text": "Oh? {name}. \u2014 It's the last day. The last day of the event." },
        "hidden_nurse_d5_2": { "name": "School Nurse", "text": "Come visit after graduation. ...Or before that, if you're hurt." },
        "hidden_nurse_d5_3": { "name": "Me", "text": "What if I'm not hurt?" },
        "hidden_nurse_d5_4": { "name": "School Nurse", "text": "...Ask me that after graduation. \u2014 I'll answer then." },
        "hidden_nurse_d5_5": { "name": "School Nurse", "text": "...{name}. Want me to put on a bandage?" },
        "hidden_nurse_d5_6": { "name": "School Nurse", "text": "I know. I just needed an excuse." },
        "hidden_nurse_d5_7": { "name": "Me", "text": "*There's small writing on the bandage. 'After graduation, let's meet at a cafe instead of the nurse's office \u2014 \u2665'*" },
        "hidden_nurse_d5_freetalk": { "name": "School Nurse", "text": "*Last conversation with the school nurse outside her office.*", "context": "Day 5. Last day. The nurse wrote a message on a bandage. A promise to meet after graduation.", "personality": "The nurse is less playful than usual. Waiting for the day when excuses aren't needed." }
    },
    es: {
        "hidden_homeroom_d5_check": { "name": "Yo", "text": "*Preparativos del evento. Paso por el aula vac\u00eda. La puerta est\u00e1 abierta.*" },
        "hidden_homeroom_d5_1": { "name": "Yo", "text": "*El profesor est\u00e1 sentado en el escritorio. \u2014 No es un manuscrito. Tiene un sobre. Un sobre marr\u00f3n.*" },
        "hidden_homeroom_d5_2": { "name": "Profesor", "text": "El manuscrito. \u2014 Est\u00e1 incompleto. Pero quer\u00eda d\u00e1rselo a mi primer lector." },
        "hidden_homeroom_d5_3": { "name": "Profesor", "text": "No se lo he mostrado a nadie en siete a\u00f1os. \u2014 No deber\u00eda hacer esto." },
        "hidden_homeroom_d5_4": { "name": "Yo", "text": "Profe. Creo que ya puede dejar de decir eso." },
        "hidden_homeroom_d5_5": { "name": "Profesor", "text": "...Nunca pens\u00e9 que escuchar\u00eda eso de un alumno." },
        "hidden_homeroom_d5_6": { "name": "Profesor", "text": "...No acepto rese\u00f1as. \u2014 ...Bueno, al menos una l\u00ednea." },
        "hidden_homeroom_d5_7": { "name": "Profesor", "text": "Cuando te grad\u00faes \u2014 vamos a vernos. No como profesor y alumno. ...No deber\u00eda. Pero solo esta vez. La \u00faltima." },
        "hidden_homeroom_d5_8": { "name": "Yo", "text": "*Se da la vuelta. Su corbata se balancea. \u2014 Hoy est\u00e1 recta.*" },
        "hidden_homeroom_d5_freetalk": { "name": "Profesor", "text": "*\u00daltima conversaci\u00f3n con el profesor en el aula vac\u00eda.*", "context": "D\u00eda 5. \u00daltimo d\u00eda. El profesor entreg\u00f3 su manuscrito de 7 a\u00f1os.", "personality": "El profesor es m\u00e1s sincero porque es la \u00faltima vez. Usa su frase por \u00faltima vez." },
        "hidden_nurse_d5_check": { "name": "Yo", "text": "*Descanso del evento. Paso por la enfermer\u00eda.*" },
        "hidden_nurse_d5_1": { "name": "Enfermera", "text": "\u00bfEh? {name}. \u2014 Es el \u00faltimo d\u00eda. El \u00faltimo d\u00eda del evento." },
        "hidden_nurse_d5_2": { "name": "Enfermera", "text": "Ven a visitarme despu\u00e9s de graduarte. ...O antes, si te lastimas." },
        "hidden_nurse_d5_3": { "name": "Yo", "text": "\u00bfY si no me lastimo?" },
        "hidden_nurse_d5_4": { "name": "Enfermera", "text": "...Preg\u00fantame eso despu\u00e9s de la graduaci\u00f3n. \u2014 Entonces te responder\u00e9." },
        "hidden_nurse_d5_5": { "name": "Enfermera", "text": "...{name}. \u00bfTe pongo una tirita?" },
        "hidden_nurse_d5_6": { "name": "Enfermera", "text": "Lo s\u00e9. Solo necesitaba una excusa." },
        "hidden_nurse_d5_7": { "name": "Yo", "text": "*Hay letras peque\u00f1as en la tirita. 'Despu\u00e9s de graduarte, nos vemos en un caf\u00e9 y no en la enfermer\u00eda \u2014 \u2665'*" },
        "hidden_nurse_d5_freetalk": { "name": "Enfermera", "text": "*\u00daltima conversaci\u00f3n con la enfermera frente a la enfermer\u00eda.*", "context": "D\u00eda 5. \u00daltimo d\u00eda. La enfermera escribi\u00f3 un mensaje en una tirita.", "personality": "La enfermera est\u00e1 menos juguetona. Esperando el d\u00eda sin excusas." }
    },
    ja: {
        "hidden_homeroom_d5_check": { "name": "\u50d5", "text": "*\u30a4\u30d9\u30f3\u30c8\u6e96\u5099\u6642\u9593\u3002\u5eca\u4e0b\u3092\u6b69\u3044\u3066\u3044\u308b\u3068\u2014\u2014\u7a7a\u304d\u6559\u5ba4\u306e\u524d\u3002\u30c9\u30a2\u304c\u958b\u3044\u3066\u3044\u308b\u3002*" },
        "hidden_homeroom_d5_1": { "name": "\u50d5", "text": "*\u62c5\u4efb\u304c\u6559\u58c7\u306b\u5ea7\u3063\u3066\u3044\u308b\u3002\u2014\u2014\u539f\u7a3f\u3058\u3083\u306a\u304f\u3001\u5c01\u7b52\u3092\u6301\u3063\u3066\u3044\u308b\u3002\u8336\u8272\u306e\u5c01\u7b52\u3002*" },
        "hidden_homeroom_d5_2": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u539f\u7a3f\u3002\u2014\u2014\u672a\u5b8c\u6210\u3060\u3051\u3069\u3002\u6700\u521d\u306e\u8aad\u8005\u306b\u6e21\u305d\u3046\u3068\u601d\u3063\u3066\u3002" },
        "hidden_homeroom_d5_3": { "name": "\u62c5\u4efb\u5148\u751f", "text": "7\u5e74\u9593\u8ab0\u306b\u3082\u898b\u305b\u306a\u304b\u3063\u305f\u3002\u2014\u2014\u5148\u751f\u304c\u3053\u3093\u306a\u3053\u3068\u3057\u3061\u3083\u3044\u3051\u306a\u3044\u3093\u3060\u3051\u3069\u3002" },
        "hidden_homeroom_d5_4": { "name": "\u50d5", "text": "\u5148\u751f\u3002\u305d\u306e\u8a00\u8449\u3001\u3082\u3046\u8a00\u308f\u306a\u304f\u3066\u3044\u3044\u3068\u601d\u3044\u307e\u3059\u3002" },
        "hidden_homeroom_d5_5": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u2026\u305d\u308c\u3092\u751f\u5f92\u304b\u3089\u805e\u304f\u65e5\u304c\u6765\u308b\u3068\u306f\u601d\u308f\u306a\u304b\u3063\u305f\u3002" },
        "hidden_homeroom_d5_6": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u2026\u611f\u60f3\u6587\u306f\u53d7\u3051\u4ed8\u3051\u306a\u3044\u3002\u2014\u2014\u2026\u3084\u3063\u3071\u308a\u4e00\u884c\u3067\u3082\u66f8\u3044\u3066\u304f\u308c\u3002" },
        "hidden_homeroom_d5_7": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u5352\u696d\u3057\u305f\u3089\u2014\u2014\u4f1a\u304a\u3046\u3002\u5148\u751f\u3068\u751f\u5f92\u3058\u3083\u306a\u3044\u540d\u524d\u3067\u3002\u2026\u3053\u3093\u306a\u3053\u3068\u3057\u3061\u3083\u3044\u3051\u306a\u3044\u3002\u6700\u5f8c\u3060\u304b\u3089\u3002\u6700\u5f8c\u306e\u4e00\u56de\u3060\u3051\u3002" },
        "hidden_homeroom_d5_8": { "name": "\u50d5", "text": "*\u62c5\u4efb\u304c\u632f\u308a\u8fd4\u308b\u3002\u30cd\u30af\u30bf\u30a4\u304c\u63fa\u308c\u308b\u3002\u2014\u2014\u4eca\u65e5\u306f\u771f\u3063\u76f4\u3050\u3060\u3002*" },
        "hidden_homeroom_d5_freetalk": { "name": "\u62c5\u4efb\u5148\u751f", "text": "*\u62c5\u4efb\u5148\u751f\u3068\u7a7a\u304d\u6559\u5ba4\u3067\u6700\u5f8c\u306e\u4f1a\u8a71\u3002*", "context": "Day 5\u3002\u6700\u5f8c\u306e\u65e5\u3002\u62c5\u4efb\u304c7\u5e74\u306e\u539f\u7a3f\u3092\u6e21\u3057\u305f\u3002\u5352\u696d\u5f8c\u306e\u7d04\u675f\u3002", "personality": "\u62c5\u4efb\u306f\u6700\u5f8c\u3060\u304b\u3089\u666e\u6bb5\u3088\u308a\u7d20\u76f4\u3002\u53e3\u7656\u3092\u6700\u5f8c\u306b\u4f7f\u3046\u3002" },
        "hidden_nurse_d5_check": { "name": "\u50d5", "text": "*\u30a4\u30d9\u30f3\u30c8\u306e\u4f11\u61a9\u6642\u9593\u3002\u4fdd\u5065\u5ba4\u306e\u524d\u3092\u901a\u308b\u3002*" },
        "hidden_nurse_d5_1": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u3048\uff1f{name}\u3002\u2014\u2014\u6700\u5f8c\u306e\u65e5\u3060\u306d\u3002\u30a4\u30d9\u30f3\u30c8\u6700\u7d42\u65e5\u3002" },
        "hidden_nurse_d5_2": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u5352\u696d\u3057\u305f\u3089\u904a\u3073\u306b\u304a\u3044\u3067\u3002\u2026\u305d\u308c\u307e\u3067\u306b\u75db\u304b\u3063\u305f\u3089\u304a\u3044\u3067\u3002" },
        "hidden_nurse_d5_3": { "name": "\u50d5", "text": "\u75db\u304f\u306a\u304f\u3066\u3082\u884c\u3063\u3061\u3083\u30c0\u30e1\u3067\u3059\u304b\uff1f" },
        "hidden_nurse_d5_4": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u2026\u305d\u308c\u306f\u5352\u696d\u3057\u3066\u304b\u3089\u805e\u3044\u3066\u3002\u2014\u2014\u305d\u306e\u6642\u306f\u7b54\u3048\u308b\u304b\u3089\u3002" },
        "hidden_nurse_d5_5": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u2026{name}\u3002\u7d46\u5275\u818f\u8cbc\u3063\u3066\u3042\u3052\u3088\u3046\u304b\uff1f" },
        "hidden_nurse_d5_6": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u308f\u304b\u3063\u3066\u308b\u3002\u305f\u3060\u53e3\u5b9f\u304c\u5fc5\u8981\u3060\u3063\u305f\u306e\u3002" },
        "hidden_nurse_d5_7": { "name": "\u50d5", "text": "*\u7d46\u5275\u818f\u306b\u5c0f\u3055\u306a\u6587\u5b57\u304c\u66f8\u3044\u3066\u3042\u308b\u3002\u300e\u5352\u696d\u3057\u305f\u3089\u4fdd\u5065\u5ba4\u3058\u3083\u306a\u304f\u3066\u30ab\u30d5\u30a7\u3067\u4f1a\u304a\u3046 \u2014 \u2665\u300f*" },
        "hidden_nurse_d5_freetalk": { "name": "\u4fdd\u5065\u5148\u751f", "text": "*\u4fdd\u5065\u5148\u751f\u3068\u4fdd\u5065\u5ba4\u306e\u524d\u3067\u6700\u5f8c\u306e\u4f1a\u8a71\u3002*", "context": "Day 5\u3002\u6700\u5f8c\u306e\u65e5\u3002\u4fdd\u5065\u5148\u751f\u304c\u7d46\u5275\u818f\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3002\u5352\u696d\u5f8c\u306e\u7d04\u675f\u3002", "personality": "\u4fdd\u5065\u5148\u751f\u306f\u3044\u3064\u3082\u3088\u308a\u3044\u305f\u305a\u3089\u304c\u5c11\u306a\u3044\u3002\u53e3\u5b9f\u304c\u8981\u3089\u306a\u3044\u65e5\u3092\u5f85\u3063\u3066\u3044\u308b\u3002" }
    },
    fr: {
        "hidden_homeroom_d5_check": { "name": "Moi", "text": "*Pr\u00e9paration de l'\u00e9v\u00e9nement. En passant devant la salle vide \u2014 la porte est ouverte.*" },
        "hidden_homeroom_d5_1": { "name": "Moi", "text": "*Le prof est assis au bureau. \u2014 Pas un manuscrit cette fois. Une enveloppe. Brune.*" },
        "hidden_homeroom_d5_2": { "name": "Professeur Principal", "text": "Le manuscrit. \u2014 Inachev\u00e9. Mais je voulais le donner \u00e0 mon premier lecteur." },
        "hidden_homeroom_d5_3": { "name": "Professeur Principal", "text": "Je ne l'ai montr\u00e9 \u00e0 personne en sept ans. \u2014 Je devrais pas faire \u00e7a." },
        "hidden_homeroom_d5_4": { "name": "Moi", "text": "Monsieur. Je crois que vous pouvez arr\u00eater de dire \u00e7a." },
        "hidden_homeroom_d5_5": { "name": "Professeur Principal", "text": "...Jamais cru qu'un \u00e9l\u00e8ve me dirait \u00e7a." },
        "hidden_homeroom_d5_6": { "name": "Professeur Principal", "text": "...Pas de compte-rendu. \u2014 ...En fait, \u00e9cris-moi au moins une ligne." },
        "hidden_homeroom_d5_7": { "name": "Professeur Principal", "text": "Apr\u00e8s ton dipl\u00f4me \u2014 on se voit. Plus comme prof et \u00e9l\u00e8ve. ...Je devrais pas. Mais juste cette fois. Une derni\u00e8re fois." },
        "hidden_homeroom_d5_8": { "name": "Moi", "text": "*Il se retourne. Sa cravate oscille. \u2014 Aujourd'hui, elle est droite.*" },
        "hidden_homeroom_d5_freetalk": { "name": "Professeur Principal", "text": "*Derni\u00e8re conversation avec le prof principal dans la salle vide.*", "context": "Jour 5. Dernier jour. Le prof a remis son manuscrit.", "personality": "Le prof est plus honn\u00eate que d'habitude car c'est la derni\u00e8re fois." },
        "hidden_nurse_d5_check": { "name": "Moi", "text": "*Pause de l'\u00e9v\u00e9nement. Je passe devant l'infirmerie.*" },
        "hidden_nurse_d5_1": { "name": "Infirmi\u00e8re", "text": "Oh ? {name}. \u2014 C'est le dernier jour. Le dernier jour de l'\u00e9v\u00e9nement." },
        "hidden_nurse_d5_2": { "name": "Infirmi\u00e8re", "text": "Passe me voir apr\u00e8s le dipl\u00f4me. ...Ou avant, si t'as mal." },
        "hidden_nurse_d5_3": { "name": "Moi", "text": "Et si j'ai pas mal ?" },
        "hidden_nurse_d5_4": { "name": "Infirmi\u00e8re", "text": "...Demande-moi \u00e7a apr\u00e8s le dipl\u00f4me. \u2014 L\u00e0 je r\u00e9pondrai." },
        "hidden_nurse_d5_5": { "name": "Infirmi\u00e8re", "text": "...{name}. Je te mets un pansement ?" },
        "hidden_nurse_d5_6": { "name": "Infirmi\u00e8re", "text": "Je sais. J'avais juste besoin d'une excuse." },
        "hidden_nurse_d5_7": { "name": "Moi", "text": "*Il y a une petite inscription sur le pansement. 'Apr\u00e8s le dipl\u00f4me, on se retrouve au caf\u00e9 et pas \u00e0 l'infirmerie \u2014 \u2665'*" },
        "hidden_nurse_d5_freetalk": { "name": "Infirmi\u00e8re", "text": "*Derni\u00e8re conversation avec l'infirmi\u00e8re devant l'infirmerie.*", "context": "Jour 5. Dernier jour. L'infirmi\u00e8re a \u00e9crit un message sur un pansement.", "personality": "L'infirmi\u00e8re est moins joueuse. Elle attend le jour o\u00f9 les excuses ne seront plus n\u00e9cessaires." }
    },
    de: {
        "hidden_homeroom_d5_check": { "name": "Ich", "text": "*Vorbereitungszeit. Auf dem Flur \u2014 das leere Klassenzimmer. Die T\u00fcr ist offen.*" },
        "hidden_homeroom_d5_1": { "name": "Ich", "text": "*Der Lehrer sitzt am Pult. \u2014 Kein Manuskript diesmal. Ein Umschlag. Ein brauner Umschlag.*" },
        "hidden_homeroom_d5_2": { "name": "Klassenlehrer", "text": "Das Manuskript. \u2014 Unfertig. Aber ich wollte es meinem ersten Leser geben." },
        "hidden_homeroom_d5_3": { "name": "Klassenlehrer", "text": "Hab es sieben Jahre niemandem gezeigt. \u2014 Ich sollte das eigentlich nicht tun." },
        "hidden_homeroom_d5_4": { "name": "Ich", "text": "Herr Lehrer. Ich glaube, Sie k\u00f6nnen damit aufh\u00f6ren." },
        "hidden_homeroom_d5_5": { "name": "Klassenlehrer", "text": "...H\u00e4tte nie gedacht, das von einem Sch\u00fcler zu h\u00f6ren." },
        "hidden_homeroom_d5_6": { "name": "Klassenlehrer", "text": "...Keine Buchberichte. \u2014 ...Schreib mir wenigstens eine Zeile." },
        "hidden_homeroom_d5_7": { "name": "Klassenlehrer", "text": "Nach dem Abschluss \u2014 treffen wir uns. Nicht als Lehrer und Sch\u00fcler. ...Sollte ich nicht. Aber nur dieses eine Mal." },
        "hidden_homeroom_d5_8": { "name": "Ich", "text": "*Er dreht sich um. Seine Krawatte schwingt. \u2014 Heute sitzt sie gerade.*" },
        "hidden_homeroom_d5_freetalk": { "name": "Klassenlehrer", "text": "*Letztes Gespr\u00e4ch mit dem Klassenlehrer im leeren Klassenzimmer.*", "context": "Tag 5. Letzter Tag. Der Lehrer \u00fcbergab sein 7-Jahre-Manuskript.", "personality": "Der Lehrer ist ehrlicher als sonst, weil es das letzte Mal ist." },
        "hidden_nurse_d5_check": { "name": "Ich", "text": "*Pause beim Event. Ich gehe am Krankenzimmer vorbei.*" },
        "hidden_nurse_d5_1": { "name": "Schulkrankenschwester", "text": "Oh? {name}. \u2014 Der letzte Tag. Der letzte Tag des Events." },
        "hidden_nurse_d5_2": { "name": "Schulkrankenschwester", "text": "Komm nach dem Abschluss vorbei. ...Oder vorher, wenn du dich verletzt." },
        "hidden_nurse_d5_3": { "name": "Ich", "text": "Und wenn ich mich nicht verletze?" },
        "hidden_nurse_d5_4": { "name": "Schulkrankenschwester", "text": "...Frag mich das nach dem Abschluss. \u2014 Dann antworte ich." },
        "hidden_nurse_d5_5": { "name": "Schulkrankenschwester", "text": "...{name}. Soll ich dir ein Pflaster kleben?" },
        "hidden_nurse_d5_6": { "name": "Schulkrankenschwester", "text": "Ich wei\u00df. Ich brauchte nur eine Ausrede." },
        "hidden_nurse_d5_7": { "name": "Ich", "text": "*Auf dem Pflaster steht in kleiner Schrift: 'Nach dem Abschluss treffen wir uns im Caf\u00e9 statt im Krankenzimmer \u2014 \u2665'*" },
        "hidden_nurse_d5_freetalk": { "name": "Schulkrankenschwester", "text": "*Letztes Gespr\u00e4ch mit der Schulkrankenschwester vor dem Krankenzimmer.*", "context": "Tag 5. Letzter Tag. Die Krankenschwester schrieb eine Nachricht auf ein Pflaster.", "personality": "Die Krankenschwester ist weniger verspielt. Wartet auf den Tag ohne Ausreden." }
    }
};

for (const [lang, entries] of Object.entries(d5m_i18n)) {
    addEntries(`assets/js/i18n/${lang}/day5_1_morning.json`, entries);
}
console.log('  day5_1_morning i18n complete');

// =====================================================================
// Day 5 Night - Hidden route endings
// =====================================================================
console.log('\n--- Day 5 Night (Endings) ---');

let night5 = fs.readFileSync('assets/js/scenario/day5_4_night.js', 'utf8');

// Add hidden route ending checks BEFORE the main ending branches
// Insert into ending_start's branches array - hidden endings have higher priority
night5 = night5.replace(
    '"ending_start": {\n        "background": null,\n        "character": null,\n        "night": true,\n        "fade": true,\n        "branches": [\n            {\n                "next": "day5_ending_true",',
    '"ending_start": {\n        "background": null,\n        "character": null,\n        "night": true,\n        "fade": true,\n        "branches": [\n            {\n                "next": "hidden_true_homeroom_1",\n                "condition": "homeroom_day5"\n            },\n            {\n                "next": "hidden_true_nurse_1",\n                "condition": "nurse_day5"\n            },\n            {\n                "next": "hidden_good_homeroom_1",\n                "condition": "homeroom_day4",\n                "excludeCondition": "homeroom_day5"\n            },\n            {\n                "next": "hidden_good_nurse_1",\n                "condition": "nurse_day4",\n                "excludeCondition": "nurse_day5"\n            },\n            {\n                "next": "day5_ending_true",'
);

// Add hidden ending nodes before credits
const hiddenEndings = `
    // =========================================================================
    // HIDDEN ROUTE ENDINGS
    // =========================================================================

    // === 담임 TRUE LOVE END ===
    "hidden_true_homeroom_1": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "hidden_true_homeroom_2"
    },
    "hidden_true_homeroom_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "night": true,
        "fade": true,
        "next": "hidden_true_homeroom_3"
    },
    "hidden_true_homeroom_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_homeroom_4"
    },
    "hidden_true_homeroom_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_homeroom_5"
    },
    "hidden_true_homeroom_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_homeroom_6"
    },
    "hidden_true_homeroom_6": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_homeroom_7"
    },
    "hidden_true_homeroom_7": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_homeroom_8"
    },
    "hidden_true_homeroom_8": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },

    // === 보건 TRUE LOVE END ===
    "hidden_true_nurse_1": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "hidden_true_nurse_2"
    },
    "hidden_true_nurse_2": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "fade": true,
        "next": "hidden_true_nurse_3"
    },
    "hidden_true_nurse_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_nurse_4"
    },
    "hidden_true_nurse_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_nurse_5"
    },
    "hidden_true_nurse_5": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_nurse_6"
    },
    "hidden_true_nurse_6": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_nurse_7"
    },
    "hidden_true_nurse_7": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_nurse_8"
    },
    "hidden_true_nurse_8": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },

    // === 담임 GOOD END ===
    "hidden_good_homeroom_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "fade": true,
        "bgm": "night2.mp3",
        "next": "hidden_good_homeroom_2"
    },
    "hidden_good_homeroom_2": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "fade": true,
        "next": "hidden_good_homeroom_3"
    },
    "hidden_good_homeroom_3": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "fade": true,
        "next": "hidden_good_homeroom_4"
    },
    "hidden_good_homeroom_4": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },

    // === 보건 GOOD END ===
    "hidden_good_nurse_1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "fade": true,
        "bgm": "night2.mp3",
        "next": "hidden_good_nurse_2"
    },
    "hidden_good_nurse_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_good_nurse_3"
    },
    "hidden_good_nurse_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": null,
        "night": true,
        "fade": true,
        "next": "hidden_good_nurse_4"
    },
    "hidden_good_nurse_4": {
        "background": "assets/images/background/nurse_room.png",
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },`;

night5 = night5.replace(
    '    // =========================================================================\n    // CREDITS & RESTART',
    hiddenEndings + '\n    // =========================================================================\n    // CREDITS & RESTART'
);

fs.writeFileSync('assets/js/scenario/day5_4_night.js', night5);
console.log('  day5_4_night.js updated');

// Day 5 Night i18n
const d5n_i18n = {
    ko: {
        "hidden_true_homeroom_1": { "name": "{name}", "text": "*졸업식 날. \u2014 시간이 흘렀다. 교복은 더 이상 뻣뻣하지 않다.*" },
        "hidden_true_homeroom_2": { "name": "{name}", "text": "*빈 교실. 원고를 쓰던 그 교실. \u2014 담임선생님이 기다리고 있다. 사복 차림이다.*" },
        "hidden_true_homeroom_3": { "name": "담임선생님", "text": "졸업 축하해." },
        "hidden_true_homeroom_4": { "name": "담임선생님", "text": "...그 말. '선생님'이라고 안 했네. 처음으로." },
        "hidden_true_homeroom_5": { "name": "담임선생님", "text": "원고 완성했어. \u2014 네가 첫 번째 독자라서 쓸 수 있었어. '한 줄이라도'라고 했는데 세 장을 써왔잖아." },
        "hidden_true_homeroom_6": { "name": "담임선생님", "text": "이제 선생님이 아니니까 \u2014 한 마디 해도 돼? ...커피 마시러 가자. 이번엔 주스 말고 커피." },
        "hidden_true_homeroom_7": { "name": "{name}", "text": "좋아요." },
        "hidden_true_homeroom_8": { "name": "담임선생님", "text": "...선생님이 이러면 안 되는데. 아니. 이제 선생님이 아니지.\n\n\u2500\u2500\u2500 \ub2f4\uc784\uc120\uc0dd\ub2d8 TRUE LOVE END \u2500\u2500\u2500" },
        "hidden_true_nurse_1": { "name": "{name}", "text": "*졸업식 날. 교문을 나오는데 \u2014 보건실 앞에 밴드가 붙어 있다.*" },
        "hidden_true_nurse_2": { "name": "{name}", "text": "*'졸업 축하해. 카페에서 기다릴게.' \u2014 밴드를 떼니 안쪽에 작은 약도가 있다.*" },
        "hidden_true_nurse_3": { "name": "보건선생님", "text": "졸업 축하해. ...오늘부터 존댓말 안 해도 돼." },
        "hidden_true_nurse_4": { "name": "보건선생님", "text": "있잖아. Day 1에 네가 보건실에 왔을 때. 이마 만지면서 '만져보고 싶었다'고 했잖아. 농담이었거든." },
        "hidden_true_nurse_5": { "name": "보건선생님", "text": "...근데 지금은 농담이 아니야." },
        "hidden_true_nurse_6": { "name": "보건선생님", "text": "선생님이 학생한테 감정이 생기면 안 되잖아. 그래서 농담으로 포장했어. 계속. 근데 너는 농담 뒤에 진심이 있다는 걸 알아챘잖아." },
        "hidden_true_nurse_7": { "name": "보건선생님", "text": "...들킨 건 너가 처음이야." },
        "hidden_true_nurse_8": { "name": "보건선생님", "text": "이제는 밴드 없이도 만날 수 있어. \u2014 핑계 없이.\n\n\u2500\u2500\u2500 \ubcf4\uac74\uc120\uc0dd\ub2d8 TRUE LOVE END \u2500\u2500\u2500" },
        "hidden_good_homeroom_1": { "name": "담임선생님", "text": "졸업 축하해." },
        "hidden_good_homeroom_2": { "name": "{name}", "text": "*악수를 하는데 \u2014 손에 종이가 끼워져 있다. 접힌 쪽지.*" },
        "hidden_good_homeroom_3": { "name": "{name}", "text": "*'원고 완성하면 연락할게. \u2014 첫 번째 독자에게.' 전화번호가 적혀 있다.*" },
        "hidden_good_homeroom_4": { "name": "{name}", "text": "*선생님의 손이 \u2014 3초쯤 더 길게 잡혀 있었다. 악수치고는 길고, 고백치고는 짧은.\n\n\u2500\u2500\u2500 \ub2f4\uc784\uc120\uc0dd\ub2d8 GOOD END \u2500\u2500\u2500*" },
        "hidden_good_nurse_1": { "name": "보건선생님", "text": "아, 졸업생. 환자가 퇴원 인사를 하다니. \u2014 감동이야." },
        "hidden_good_nurse_2": { "name": "보건선생님", "text": "비타민. \u2014 대학 가면 건강 관리 잘해. ...의료적 관심. 이번에는 진짜로." },
        "hidden_good_nurse_3": { "name": "{name}", "text": "*병 뚜껑 안쪽에 작은 글씨. '아프면 연락해. 안 아파도 연락해. \u2014 \u2665'*" },
        "hidden_good_nurse_4": { "name": "{name}", "text": "*하트가 \u2014 이번에는 확실히 의료적 관심이 아니다.\n\n\u2500\u2500\u2500 \ubcf4\uac74\uc120\uc0dd\ub2d8 GOOD END \u2500\u2500\u2500*" }
    },
    en: {
        "hidden_true_homeroom_1": { "name": "Me", "text": "*Graduation day. \u2014 Time has passed. The uniform isn't stiff anymore.*" },
        "hidden_true_homeroom_2": { "name": "Me", "text": "*The empty classroom. The one where he wrote. \u2014 The homeroom teacher is waiting. In casual clothes.*" },
        "hidden_true_homeroom_3": { "name": "Homeroom Teacher", "text": "Congratulations on graduating." },
        "hidden_true_homeroom_4": { "name": "Homeroom Teacher", "text": "...That. You didn't say 'sir.' First time." },
        "hidden_true_homeroom_5": { "name": "Homeroom Teacher", "text": "I finished the manuscript. \u2014 I could write it because you were my first reader. I asked for one line and you came back with three pages." },
        "hidden_true_homeroom_6": { "name": "Homeroom Teacher", "text": "Since I'm not your teacher anymore \u2014 can I say one thing? ...Let's go get coffee. Real coffee this time, not juice." },
        "hidden_true_homeroom_7": { "name": "Me", "text": "I'd like that." },
        "hidden_true_homeroom_8": { "name": "Homeroom Teacher", "text": "...I really shouldn't be doing this. No. I'm not a teacher anymore.\n\n\u2500\u2500\u2500 Homeroom Teacher TRUE LOVE END \u2500\u2500\u2500" },
        "hidden_true_nurse_1": { "name": "Me", "text": "*Graduation day. Walking out the school gate \u2014 there's a bandage stuck to the nurse's office door.*" },
        "hidden_true_nurse_2": { "name": "Me", "text": "*'Congrats on graduating. I'll wait at the cafe.' \u2014 Peeling off the bandage, there's a little map inside.*" },
        "hidden_true_nurse_3": { "name": "School Nurse", "text": "Congrats on graduating. ...Starting today, you can drop the formalities." },
        "hidden_true_nurse_4": { "name": "School Nurse", "text": "You know, on Day 1 when you came to the nurse's office. I touched your forehead and said 'I just wanted to touch you.' That was a joke." },
        "hidden_true_nurse_5": { "name": "School Nurse", "text": "...But right now it's not a joke." },
        "hidden_true_nurse_6": { "name": "School Nurse", "text": "A teacher shouldn't catch feelings for a student. I know that. \u2014 So I kept wrapping everything in jokes. But you saw through them every time." },
        "hidden_true_nurse_7": { "name": "School Nurse", "text": "...You're the first person to see through me." },
        "hidden_true_nurse_8": { "name": "School Nurse", "text": "Now we can meet without bandages. \u2014 No excuses needed.\n\n\u2500\u2500\u2500 School Nurse TRUE LOVE END \u2500\u2500\u2500" },
        "hidden_good_homeroom_1": { "name": "Homeroom Teacher", "text": "Congratulations on graduating." },
        "hidden_good_homeroom_2": { "name": "Me", "text": "*During the handshake \u2014 something slips into my palm. A folded note.*" },
        "hidden_good_homeroom_3": { "name": "Me", "text": "*'When I finish the manuscript, I'll reach out. \u2014 To my first reader.' There's a phone number.*" },
        "hidden_good_homeroom_4": { "name": "Me", "text": "*His hand held on about three seconds longer than a handshake should. Too long for a handshake, too short for a confession.\n\n\u2500\u2500\u2500 Homeroom Teacher GOOD END \u2500\u2500\u2500*" },
        "hidden_good_nurse_1": { "name": "School Nurse", "text": "Oh, a graduate. A patient giving discharge greetings. \u2014 I'm touched." },
        "hidden_good_nurse_2": { "name": "School Nurse", "text": "Vitamins. \u2014 Take care of yourself in college. ...Medical concern. This time, for real." },
        "hidden_good_nurse_3": { "name": "Me", "text": "*Inside the cap, tiny writing. 'Call me if you're sick. Call me even if you're not. \u2014 \u2665'*" },
        "hidden_good_nurse_4": { "name": "Me", "text": "*That heart \u2014 this time it's definitely not medical concern.\n\n\u2500\u2500\u2500 School Nurse GOOD END \u2500\u2500\u2500*" }
    },
    es: {
        "hidden_true_homeroom_1": { "name": "Yo", "text": "*D\u00eda de graduaci\u00f3n. \u2014 Ha pasado el tiempo. El uniforme ya no es r\u00edgido.*" },
        "hidden_true_homeroom_2": { "name": "Yo", "text": "*El aula vac\u00eda. Donde escrib\u00eda. \u2014 El profesor espera. En ropa casual.*" },
        "hidden_true_homeroom_3": { "name": "Profesor", "text": "Felicidades por graduarte." },
        "hidden_true_homeroom_4": { "name": "Profesor", "text": "...Eso. No dijiste 'profe'. Primera vez." },
        "hidden_true_homeroom_5": { "name": "Profesor", "text": "Termin\u00e9 el manuscrito. \u2014 Pude escribirlo porque t\u00fa fuiste mi primer lector. Ped\u00ed una l\u00ednea y trajiste tres p\u00e1ginas." },
        "hidden_true_homeroom_6": { "name": "Profesor", "text": "Ya no soy tu profesor \u2014 \u00bfpuedo decir algo? ...Vamos por un caf\u00e9. Esta vez de verdad, no jugo." },
        "hidden_true_homeroom_7": { "name": "Yo", "text": "Me gustar\u00eda." },
        "hidden_true_homeroom_8": { "name": "Profesor", "text": "...No deber\u00eda hacer esto. No. Ya no soy profesor.\n\n\u2500\u2500\u2500 Profesor TRUE LOVE END \u2500\u2500\u2500" },
        "hidden_true_nurse_1": { "name": "Yo", "text": "*D\u00eda de graduaci\u00f3n. Saliendo \u2014 hay una tirita pegada en la puerta de la enfermer\u00eda.*" },
        "hidden_true_nurse_2": { "name": "Yo", "text": "*'Felicidades. Te espero en el caf\u00e9.' \u2014 Al despegarla, hay un peque\u00f1o mapa dentro.*" },
        "hidden_true_nurse_3": { "name": "Enfermera", "text": "Felicidades. ...Desde hoy puedes tutearme." },
        "hidden_true_nurse_4": { "name": "Enfermera", "text": "\u00bfSabes? El primer d\u00eda, cuando viniste a la enfermer\u00eda. Te toqu\u00e9 la frente y dije 'solo quer\u00eda tocarte'. Era broma." },
        "hidden_true_nurse_5": { "name": "Enfermera", "text": "...Pero ahora no es broma." },
        "hidden_true_nurse_6": { "name": "Enfermera", "text": "Una profesora no deber\u00eda sentir cosas por un alumno. Lo sab\u00eda. \u2014 Por eso lo envolv\u00eda todo en bromas. Pero t\u00fa siempre viste a trav\u00e9s de ellas." },
        "hidden_true_nurse_7": { "name": "Enfermera", "text": "...Eres el primero que me descubri\u00f3." },
        "hidden_true_nurse_8": { "name": "Enfermera", "text": "Ahora podemos vernos sin tiritas. \u2014 Sin excusas.\n\n\u2500\u2500\u2500 Enfermera TRUE LOVE END \u2500\u2500\u2500" },
        "hidden_good_homeroom_1": { "name": "Profesor", "text": "Felicidades por graduarte." },
        "hidden_good_homeroom_2": { "name": "Yo", "text": "*Al dar la mano \u2014 algo se desliza en mi palma. Una nota doblada.*" },
        "hidden_good_homeroom_3": { "name": "Yo", "text": "*'Cuando termine el manuscrito, te contactar\u00e9. \u2014 A mi primer lector.' Hay un n\u00famero de tel\u00e9fono.*" },
        "hidden_good_homeroom_4": { "name": "Yo", "text": "*Su mano se qued\u00f3 tres segundos m\u00e1s. Largo para un apret\u00f3n, corto para una confesi\u00f3n.\n\n\u2500\u2500\u2500 Profesor GOOD END \u2500\u2500\u2500*" },
        "hidden_good_nurse_1": { "name": "Enfermera", "text": "Oh, un graduado. Un paciente que viene a despedirse. \u2014 Me conmueve." },
        "hidden_good_nurse_2": { "name": "Enfermera", "text": "Vitaminas. \u2014 Cu\u00eddate en la universidad. ...Inter\u00e9s m\u00e9dico. Esta vez de verdad." },
        "hidden_good_nurse_3": { "name": "Yo", "text": "*Dentro de la tapa, letras diminutas. 'Ll\u00e1mame si est\u00e1s enfermo. Ll\u00e1mame aunque no lo est\u00e9s. \u2014 \u2665'*" },
        "hidden_good_nurse_4": { "name": "Yo", "text": "*Ese coraz\u00f3n \u2014 esta vez definitivamente no es inter\u00e9s m\u00e9dico.\n\n\u2500\u2500\u2500 Enfermera GOOD END \u2500\u2500\u2500*" }
    },
    ja: {
        "hidden_true_homeroom_1": { "name": "\u50d5", "text": "*\u5352\u696d\u5f0f\u306e\u65e5\u3002\u2014\u2014\u6642\u304c\u6d41\u308c\u305f\u3002\u5236\u670d\u306f\u3082\u3046\u56fa\u304f\u306a\u3044\u3002*" },
        "hidden_true_homeroom_2": { "name": "\u50d5", "text": "*\u7a7a\u304d\u6559\u5ba4\u3002\u539f\u7a3f\u3092\u66f8\u3044\u3066\u3044\u305f\u3042\u306e\u6559\u5ba4\u3002\u2014\u2014\u62c5\u4efb\u5148\u751f\u304c\u5f85\u3063\u3066\u3044\u308b\u3002\u79c1\u670d\u59ff\u3002*" },
        "hidden_true_homeroom_3": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u5352\u696d\u304a\u3081\u3067\u3068\u3046\u3002" },
        "hidden_true_homeroom_4": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u2026\u305d\u308c\u3002\u300e\u5148\u751f\u300f\u3063\u3066\u8a00\u308f\u306a\u304b\u3063\u305f\u306d\u3002\u521d\u3081\u3066\u3002" },
        "hidden_true_homeroom_5": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u539f\u7a3f\u3001\u5b8c\u6210\u3057\u305f\u3002\u2014\u2014\u541b\u304c\u6700\u521d\u306e\u8aad\u8005\u3060\u3063\u305f\u304b\u3089\u66f8\u3051\u305f\u3002\u4e00\u884c\u3067\u3044\u3044\u3068\u8a00\u3063\u305f\u306e\u306b\u4e09\u30da\u30fc\u30b8\u66f8\u3044\u3066\u304d\u305f\u3058\u3083\u306a\u3044\u304b\u3002" },
        "hidden_true_homeroom_6": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u3082\u3046\u5148\u751f\u3058\u3083\u306a\u3044\u304b\u3089\u2014\u2014\u4e00\u3064\u8a00\u3063\u3066\u3082\u3044\u3044\uff1f\u2026\u30b3\u30fc\u30d2\u30fc\u98f2\u307f\u306b\u884c\u3053\u3046\u3002\u4eca\u5ea6\u306f\u30b8\u30e5\u30fc\u30b9\u3058\u3083\u306a\u304f\u3066\u30b3\u30fc\u30d2\u30fc\u3002" },
        "hidden_true_homeroom_7": { "name": "\u50d5", "text": "\u3044\u3044\u3067\u3059\u306d\u3002" },
        "hidden_true_homeroom_8": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u2026\u5148\u751f\u304c\u3053\u3093\u306a\u3053\u3068\u3057\u3061\u3083\u3044\u3051\u306a\u3044\u3093\u3060\u3051\u3069\u3002\u3044\u3084\u3002\u3082\u3046\u5148\u751f\u3058\u3083\u306a\u3044\u3002\n\n\u2500\u2500\u2500 \u62c5\u4efb\u5148\u751f TRUE LOVE END \u2500\u2500\u2500" },
        "hidden_true_nurse_1": { "name": "\u50d5", "text": "*\u5352\u696d\u5f0f\u306e\u65e5\u3002\u6821\u9580\u3092\u51fa\u308b\u3068\u2014\u2014\u4fdd\u5065\u5ba4\u306e\u30c9\u30a2\u306b\u7d46\u5275\u818f\u304c\u8cbc\u3063\u3066\u3042\u308b\u3002*" },
        "hidden_true_nurse_2": { "name": "\u50d5", "text": "*\u300e\u5352\u696d\u304a\u3081\u3067\u3068\u3046\u3002\u30ab\u30d5\u30a7\u3067\u5f85\u3063\u3066\u308b\u300f\u2014\u2014\u7d46\u5275\u818f\u3092\u5265\u304c\u3059\u3068\u3001\u4e2d\u306b\u5c0f\u3055\u306a\u5730\u56f3\u3002*" },
        "hidden_true_nurse_3": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u5352\u696d\u304a\u3081\u3067\u3068\u3046\u3002\u2026\u4eca\u65e5\u304b\u3089\u656c\u8a9e\u306f\u3044\u3089\u306a\u3044\u3088\u3002" },
        "hidden_true_nurse_4": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u3042\u306e\u306d\u3002\u521d\u65e5\u306b\u4fdd\u5065\u5ba4\u306b\u6765\u305f\u6642\u3002\u984d\u306b\u89e6\u308c\u3066\u300e\u89e6\u308a\u305f\u304b\u3063\u305f\u300f\u3063\u3066\u8a00\u3063\u305f\u3058\u3083\u3093\u3002\u3042\u308c\u306f\u5197\u8ac7\u3060\u3063\u305f\u3002" },
        "hidden_true_nurse_5": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u2026\u3067\u3082\u4eca\u306f\u5197\u8ac7\u3058\u3083\u306a\u3044\u3002" },
        "hidden_true_nurse_6": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u5148\u751f\u304c\u751f\u5f92\u306b\u611f\u60c5\u3092\u6301\u3063\u3061\u3083\u3044\u3051\u306a\u3044\u3002\u308f\u304b\u3063\u3066\u305f\u3002\u2014\u2014\u3060\u304b\u3089\u5168\u90e8\u5197\u8ac7\u3067\u5305\u3093\u3060\u3002\u305a\u3063\u3068\u3002\u3067\u3082\u541b\u306f\u5197\u8ac7\u306e\u88cf\u306b\u672c\u97f3\u304c\u3042\u308b\u3053\u3068\u306b\u6c17\u3065\u3044\u305f\u3002" },
        "hidden_true_nurse_7": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u2026\u898b\u7834\u3063\u305f\u306e\u306f\u541b\u304c\u521d\u3081\u3066\u3002" },
        "hidden_true_nurse_8": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u3082\u3046\u7d46\u5275\u818f\u306a\u3057\u3067\u4f1a\u3048\u308b\u3002\u2014\u2014\u53e3\u5b9f\u306a\u3057\u3067\u3002\n\n\u2500\u2500\u2500 \u4fdd\u5065\u5148\u751f TRUE LOVE END \u2500\u2500\u2500" },
        "hidden_good_homeroom_1": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u5352\u696d\u304a\u3081\u3067\u3068\u3046\u3002" },
        "hidden_good_homeroom_2": { "name": "\u50d5", "text": "*\u63e1\u624b\u306e\u6700\u4e2d\u2014\u2014\u624b\u306e\u3072\u3089\u306b\u4f55\u304b\u6ed1\u308a\u8fbc\u3080\u3002\u6298\u308a\u305f\u305f\u307e\u308c\u305f\u30e1\u30e2\u3002*" },
        "hidden_good_homeroom_3": { "name": "\u50d5", "text": "*\u300e\u539f\u7a3f\u304c\u5b8c\u6210\u3057\u305f\u3089\u9023\u7d61\u3059\u308b\u3002\u2014\u2014\u6700\u521d\u306e\u8aad\u8005\u3078\u300f\u96fb\u8a71\u756a\u53f7\u304c\u66f8\u304b\u308c\u3066\u3044\u308b\u3002*" },
        "hidden_good_homeroom_4": { "name": "\u50d5", "text": "*\u5148\u751f\u306e\u624b\u304c\u20143\u79d2\u307b\u3069\u9577\u304f\u63e1\u3089\u308c\u3066\u3044\u305f\u3002\u63e1\u624b\u306b\u3057\u3066\u306f\u9577\u304f\u3001\u544a\u767d\u306b\u3057\u3066\u306f\u77ed\u3044\u3002\n\n\u2500\u2500\u2500 \u62c5\u4efb\u5148\u751f GOOD END \u2500\u2500\u2500*" },
        "hidden_good_nurse_1": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u3042\u3001\u5352\u696d\u751f\u3002\u60a3\u8005\u304c\u9000\u9662\u306e\u6328\u62f6\u3060\u306a\u3093\u3066\u3002\u2014\u2014\u611f\u52d5\u3002" },
        "hidden_good_nurse_2": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u30d3\u30bf\u30df\u30f3\u3002\u2014\u2014\u5927\u5b66\u3067\u306f\u5065\u5eb7\u7ba1\u7406\u3057\u3066\u306d\u3002\u2026\u533b\u7642\u7684\u95a2\u5fc3\u3002\u4eca\u56de\u306f\u672c\u5f53\u306b\u3002" },
        "hidden_good_nurse_3": { "name": "\u50d5", "text": "*\u84cb\u306e\u88cf\u5074\u306b\u5c0f\u3055\u306a\u6587\u5b57\u3002\u300e\u75db\u304b\u3063\u305f\u3089\u9023\u7d61\u3057\u3066\u3002\u75db\u304f\u306a\u304f\u3066\u3082\u9023\u7d61\u3057\u3066\u3002\u2014 \u2665\u300f*" },
        "hidden_good_nurse_4": { "name": "\u50d5", "text": "*\u3042\u306e\u30cf\u30fc\u30c8\u2014\u2014\u4eca\u56de\u306f\u78ba\u5b9f\u306b\u533b\u7642\u7684\u95a2\u5fc3\u3058\u3083\u306a\u3044\u3002\n\n\u2500\u2500\u2500 \u4fdd\u5065\u5148\u751f GOOD END \u2500\u2500\u2500*" }
    },
    fr: {
        "hidden_true_homeroom_1": { "name": "Moi", "text": "*Jour de la remise des dipl\u00f4mes. \u2014 Le temps a pass\u00e9. L'uniforme n'est plus raide.*" },
        "hidden_true_homeroom_2": { "name": "Moi", "text": "*La salle vide. Celle o\u00f9 il \u00e9crivait. \u2014 Le prof principal attend. En civil.*" },
        "hidden_true_homeroom_3": { "name": "Professeur Principal", "text": "F\u00e9licitations pour le dipl\u00f4me." },
        "hidden_true_homeroom_4": { "name": "Professeur Principal", "text": "...Tiens. Tu n'as pas dit 'monsieur'. Premi\u00e8re fois." },
        "hidden_true_homeroom_5": { "name": "Professeur Principal", "text": "J'ai termin\u00e9 le manuscrit. \u2014 C'est gr\u00e2ce \u00e0 toi. J'ai demand\u00e9 une ligne et t'es revenu avec trois pages." },
        "hidden_true_homeroom_6": { "name": "Professeur Principal", "text": "Je suis plus ton prof \u2014 je peux dire un truc ? ...On va boire un caf\u00e9. Un vrai cette fois, pas un jus." },
        "hidden_true_homeroom_7": { "name": "Moi", "text": "Avec plaisir." },
        "hidden_true_homeroom_8": { "name": "Professeur Principal", "text": "...Je devrais pas faire \u00e7a. Non. Je suis plus prof.\n\n\u2500\u2500\u2500 Professeur Principal TRUE LOVE END \u2500\u2500\u2500" },
        "hidden_true_nurse_1": { "name": "Moi", "text": "*Remise des dipl\u00f4mes. En sortant \u2014 un pansement coll\u00e9 sur la porte de l'infirmerie.*" },
        "hidden_true_nurse_2": { "name": "Moi", "text": "*'F\u00e9licitations. Je t'attends au caf\u00e9.' \u2014 En d\u00e9collant le pansement, un petit plan \u00e0 l'int\u00e9rieur.*" },
        "hidden_true_nurse_3": { "name": "Infirmi\u00e8re", "text": "F\u00e9licitations. ...\u00c0 partir d'aujourd'hui, tu peux me tutoyer." },
        "hidden_true_nurse_4": { "name": "Infirmi\u00e8re", "text": "Tu sais, le premier jour, quand t'es venu. J'ai touch\u00e9 ton front et j'ai dit 'j'avais envie de te toucher'. C'\u00e9tait une blague." },
        "hidden_true_nurse_5": { "name": "Infirmi\u00e8re", "text": "...Mais l\u00e0, c'est plus une blague." },
        "hidden_true_nurse_6": { "name": "Infirmi\u00e8re", "text": "Un prof devrait pas avoir de sentiments pour un \u00e9l\u00e8ve. Je le savais. \u2014 Alors j'emballais tout dans des blagues. Mais toi, tu voyais \u00e0 travers \u00e0 chaque fois." },
        "hidden_true_nurse_7": { "name": "Infirmi\u00e8re", "text": "...T'es le premier \u00e0 voir \u00e0 travers moi." },
        "hidden_true_nurse_8": { "name": "Infirmi\u00e8re", "text": "Maintenant on peut se voir sans pansements. \u2014 Sans excuses.\n\n\u2500\u2500\u2500 Infirmi\u00e8re TRUE LOVE END \u2500\u2500\u2500" },
        "hidden_good_homeroom_1": { "name": "Professeur Principal", "text": "F\u00e9licitations." },
        "hidden_good_homeroom_2": { "name": "Moi", "text": "*Pendant la poign\u00e9e de main \u2014 quelque chose glisse dans ma paume. Un billet pli\u00e9.*" },
        "hidden_good_homeroom_3": { "name": "Moi", "text": "*'Quand je finirai le manuscrit, je te contacterai. \u2014 \u00c0 mon premier lecteur.' Il y a un num\u00e9ro.*" },
        "hidden_good_homeroom_4": { "name": "Moi", "text": "*Sa main est rest\u00e9e trois secondes de plus. Trop long pour une poign\u00e9e de main, trop court pour une d\u00e9claration.\n\n\u2500\u2500\u2500 Professeur Principal GOOD END \u2500\u2500\u2500*" },
        "hidden_good_nurse_1": { "name": "Infirmi\u00e8re", "text": "Oh, un dipl\u00f4m\u00e9. Un patient qui fait ses adieux. \u2014 Je suis touch\u00e9e." },
        "hidden_good_nurse_2": { "name": "Infirmi\u00e8re", "text": "Des vitamines. \u2014 Prends soin de toi \u00e0 la fac. ...Int\u00e9r\u00eat m\u00e9dical. Cette fois, pour de vrai." },
        "hidden_good_nurse_3": { "name": "Moi", "text": "*Sous le bouchon, une petite inscription. 'Appelle-moi si t'es malade. Appelle-moi m\u00eame si t'es pas malade. \u2014 \u2665'*" },
        "hidden_good_nurse_4": { "name": "Moi", "text": "*Ce c\u0153ur \u2014 cette fois, ce n'est clairement pas de l'int\u00e9r\u00eat m\u00e9dical.\n\n\u2500\u2500\u2500 Infirmi\u00e8re GOOD END \u2500\u2500\u2500*" }
    },
    de: {
        "hidden_true_homeroom_1": { "name": "Ich", "text": "*Abschlusstag. \u2014 Die Zeit ist vergangen. Die Uniform ist nicht mehr steif.*" },
        "hidden_true_homeroom_2": { "name": "Ich", "text": "*Das leere Klassenzimmer. Das, in dem er geschrieben hat. \u2014 Der Klassenlehrer wartet. In Freizeitkleidung.*" },
        "hidden_true_homeroom_3": { "name": "Klassenlehrer", "text": "Gl\u00fcckwunsch zum Abschluss." },
        "hidden_true_homeroom_4": { "name": "Klassenlehrer", "text": "...Das. Du hast nicht 'Herr Lehrer' gesagt. Zum ersten Mal." },
        "hidden_true_homeroom_5": { "name": "Klassenlehrer", "text": "Ich hab das Manuskript fertig. \u2014 Weil du mein erster Leser warst. Ich sagte eine Zeile und du kamst mit drei Seiten." },
        "hidden_true_homeroom_6": { "name": "Klassenlehrer", "text": "Da ich nicht mehr dein Lehrer bin \u2014 darf ich was sagen? ...Lass uns Kaffee trinken gehen. Diesmal echten, keinen Saft." },
        "hidden_true_homeroom_7": { "name": "Ich", "text": "Gerne." },
        "hidden_true_homeroom_8": { "name": "Klassenlehrer", "text": "...Ich sollte das eigentlich nicht tun. Nein. Ich bin kein Lehrer mehr.\n\n\u2500\u2500\u2500 Klassenlehrer TRUE LOVE END \u2500\u2500\u2500" },
        "hidden_true_nurse_1": { "name": "Ich", "text": "*Abschlusstag. Beim Rausgehen \u2014 ein Pflaster an der T\u00fcr des Krankenzimmers.*" },
        "hidden_true_nurse_2": { "name": "Ich", "text": "*'Gl\u00fcckwunsch. Ich warte im Caf\u00e9.' \u2014 Unter dem Pflaster eine kleine Karte.*" },
        "hidden_true_nurse_3": { "name": "Schulkrankenschwester", "text": "Gl\u00fcckwunsch zum Abschluss. ...Ab heute kannst du mich duzen." },
        "hidden_true_nurse_4": { "name": "Schulkrankenschwester", "text": "Wei\u00dft du, am ersten Tag, als du kamst. Ich hab deine Stirn ber\u00fchrt und gesagt 'Ich wollte dich einfach anfassen'. Das war ein Witz." },
        "hidden_true_nurse_5": { "name": "Schulkrankenschwester", "text": "...Aber jetzt ist es kein Witz." },
        "hidden_true_nurse_6": { "name": "Schulkrankenschwester", "text": "Eine Lehrerin sollte keine Gef\u00fchle f\u00fcr einen Sch\u00fcler entwickeln. Wusste ich. \u2014 Deshalb hab ich alles in Witze verpackt. Aber du hast immer durchgeschaut." },
        "hidden_true_nurse_7": { "name": "Schulkrankenschwester", "text": "...Du bist der Erste, der mich durchschaut hat." },
        "hidden_true_nurse_8": { "name": "Schulkrankenschwester", "text": "Jetzt k\u00f6nnen wir uns ohne Pflaster treffen. \u2014 Ohne Ausreden.\n\n\u2500\u2500\u2500 Schulkrankenschwester TRUE LOVE END \u2500\u2500\u2500" },
        "hidden_good_homeroom_1": { "name": "Klassenlehrer", "text": "Gl\u00fcckwunsch zum Abschluss." },
        "hidden_good_homeroom_2": { "name": "Ich", "text": "*Beim H\u00e4ndesch\u00fctteln \u2014 etwas gleitet in meine Hand. Eine gefaltete Notiz.*" },
        "hidden_good_homeroom_3": { "name": "Ich", "text": "*'Wenn das Manuskript fertig ist, melde ich mich. \u2014 An meinen ersten Leser.' Eine Telefonnummer.*" },
        "hidden_good_homeroom_4": { "name": "Ich", "text": "*Seine Hand hielt etwa drei Sekunden l\u00e4nger. Zu lang f\u00fcr einen H\u00e4ndedruck, zu kurz f\u00fcr ein Gest\u00e4ndnis.\n\n\u2500\u2500\u2500 Klassenlehrer GOOD END \u2500\u2500\u2500*" },
        "hidden_good_nurse_1": { "name": "Schulkrankenschwester", "text": "Ach, ein Absolvent. Ein Patient, der sich verabschiedet. \u2014 R\u00fchrend." },
        "hidden_good_nurse_2": { "name": "Schulkrankenschwester", "text": "Vitamine. \u2014 Pass an der Uni auf dich auf. ...Medizinisches Interesse. Diesmal wirklich." },
        "hidden_good_nurse_3": { "name": "Ich", "text": "*Im Deckel, winzige Schrift. 'Ruf an, wenn du krank bist. Ruf auch an, wenn nicht. \u2014 \u2665'*" },
        "hidden_good_nurse_4": { "name": "Ich", "text": "*Dieses Herz \u2014 diesmal ist es definitiv kein medizinisches Interesse.\n\n\u2500\u2500\u2500 Schulkrankenschwester GOOD END \u2500\u2500\u2500*" }
    }
};

for (const [lang, entries] of Object.entries(d5n_i18n)) {
    addEntries(`assets/js/i18n/${lang}/day5_4_night.json`, entries);
}
console.log('  day5_4_night i18n complete');

console.log('\n=== Phase 4 complete (Day 5 morning + endings) ===');
