// Fix all confirmed translation deviations across 5 languages
const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, 'assets', 'js', 'i18n');

function loadJSON(lang, file) {
    const p = path.join(i18nDir, lang, `${file}.json`);
    return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function saveJSON(lang, file, data) {
    const p = path.join(i18nDir, lang, `${file}.json`);
    fs.writeFileSync(p, JSON.stringify(data, null, 4), 'utf8');
}

// ============================================================
// FIX 1: hallway_5 in day1_1_morning
// KO: "학생회장이면 열 수 있는 문이 몇 개 있거든."
// Current (wrong): "The rooftop is normally locked. President's privilege."
// ============================================================
const fixes_hallway5 = {
    en: "Being student council president means there are a few doors I can open.",
    ja: "「生徒会長だと開けられるドアがいくつかあるの。」",
    es: "Ser la presidenta del consejo estudiantil significa que hay varias puertas que puedo abrir.",
    fr: "Être présidente du conseil des élèves, ça veut dire qu'il y a certaines portes que je peux ouvrir.",
    de: "Als Schülerratsvorsitzende gibt es ein paar Türen, die ich öffnen kann."
};

// ============================================================
// FIX 2: hallway_7 in day1_1_morning
// KO: "...궁금하면 점심때 따라와."
// Current (wrong): "...You're sharp."
// ============================================================
const fixes_hallway7 = {
    en: "...If you're curious, follow me at lunch.",
    ja: "「…気になるなら、お昼に付いてきて。」",
    es: "...Si te da curiosidad, sígueme a la hora de comer.",
    fr: "...Si ça t'intrigue, suis-moi à midi.",
    de: "...Wenn du neugierig bist, komm in der Mittagspause mit."
};

// ============================================================
// FIX 3: hallway_8 in day1_1_morning
// KO: "*갑자기 점심 약속이 생겼다. — 거절한 적 없는데.*"
// Current (wrong): "*She hesitated — just half a second..."
// ============================================================
const fixes_hallway8 = {
    en: "*Suddenly I have lunch plans. — I never even said yes.*",
    ja: "*いきなり昼の約束ができた。——断った覚えもないのに。*",
    es: "*De repente tengo planes para comer. — Ni siquiera dije que sí.*",
    fr: "*Et voilà que j'ai un rendez-vous pour le déjeuner. — Je n'ai même pas dit oui.*",
    de: "*Plötzlich habe ich Mittagspläne. — Dabei hab ich nie zugesagt.*"
};

// ============================================================
// FIX 4: after5_end in day5_3_afterschool
// KO: "*석양이 교정을 물들인다. 5일이라는 시간이 이렇게 짧았나. — 마지막 선택의 순간이 다가온다.*"
// Current (wrong): debug/dev text
// ============================================================
const fixes_after5_end = {
    en: "*The sunset paints the schoolyard. Were five days really this short? — The moment of the final choice draws near.*",
    ja: "*夕日が校庭を染めている。5日間がこんなに短かったとは。——最後の選択の瞬間が近づいてくる。*",
    es: "*El atardecer tiñe el patio del instituto. ¿Cinco días fueron realmente tan cortos? — El momento de la decisión final se acerca.*",
    fr: "*Le coucher de soleil teinte la cour. Cinq jours, c'était vraiment si court que ça ? — Le moment du dernier choix approche.*",
    de: "*Der Sonnenuntergang taucht den Schulhof in Farbe. Waren fünf Tage wirklich so kurz? — Der Moment der letzten Entscheidung rückt näher.*"
};

// ============================================================
// FIX 5: after5_last_chance_1 in day5_3_afterschool
// KO: "*걸음이 멈춘다. 석양이 등 뒤로 길게 그림자를 만든다.*"
// Current (wrong): "At the previous school, it was the same..."
// ============================================================
const fixes_last_chance_1 = {
    en: "*My feet stop. The setting sun casts a long shadow behind me.*",
    ja: "*足が止まる。夕日が背中の後ろに長い影を作る。*",
    es: "*Mis pasos se detienen. El sol poniente proyecta una larga sombra a mis espaldas.*",
    fr: "*Mes pas s'arrêtent. Le soleil couchant projette une longue ombre derrière moi.*",
    de: "*Meine Schritte halten inne. Die untergehende Sonne wirft einen langen Schatten hinter mir.*"
};

// ============================================================
// FIX 6: after5_last_chance_choice in day5_3_afterschool
// KO: "*지금이 아니면 영원히 말 못 한다.*"
// Current: "*The sun is setting. Time is running out.*" (nuance missing "forever")
// ============================================================
const fixes_last_chance_choice = {
    en: "*If not now, I'll never be able to say it.*",
    ja: "*今言わなければ、永遠に言えない。*",
    es: "*Si no es ahora, no podré decirlo nunca.*",
    fr: "*Si ce n'est pas maintenant, je ne pourrai jamais le dire.*",
    de: "*Wenn nicht jetzt, dann nie.*"
};

// ============================================================
// FIX 7: after5_confess_yes in day5_3_afterschool
// KO: "*돌아선다. 목소리가 떨린다. — 그래도 이번에는.*"
// Current (wrong): "*I ran. Toward that person..."
// ============================================================
const fixes_confess_yes = {
    en: "*I turn around. My voice trembles. — But this time.*",
    ja: "*振り返る。声が震える。——でも今度こそ。*",
    es: "*Me doy la vuelta. Mi voz tiembla. — Pero esta vez.*",
    fr: "*Je me retourne. Ma voix tremble. — Mais cette fois.*",
    de: "*Ich drehe mich um. Meine Stimme zittert. — Aber diesmal.*"
};

// ============================================================
// FIX 8: after5_confess_yes_2 in day5_3_afterschool
// KO: "있잖아 — 나, 너한테 할 말이 있어."
// Current (wrong): "*I said it. Clumsy, broken — but I said it.*"
// ============================================================
const fixes_confess_yes_2 = {
    en: "Hey — I have something to tell you.",
    ja: "あのさ——僕、君に言いたいことがあるんだ。",
    es: "Oye... tengo algo que decirte.",
    fr: "Écoute... j'ai quelque chose à te dire.",
    de: "Hey... ich muss dir etwas sagen."
};

// ============================================================
// FIX 9: after5_confess_no_2 in day5_3_afterschool
// KO: "*저녁 바람이 불어온다. 등 뒤의 그림자가 길어진다. — 혼자다.*"
// Current (wrong): "*The sunset faded. Just like my words.*"
// ============================================================
const fixes_confess_no_2 = {
    en: "*The evening breeze blows in. The shadow behind me grows longer. — I'm alone.*",
    ja: "*夕風が吹いてくる。背中の後ろの影が伸びていく。——一人だ。*",
    es: "*La brisa de la tarde sopla. La sombra a mis espaldas se alarga. — Estoy solo.*",
    fr: "*La brise du soir souffle. L'ombre derrière moi s'allonge. — Je suis seul.*",
    de: "*Der Abendwind weht. Der Schatten hinter mir wird länger. — Ich bin allein.*"
};

// ============================================================
// FIX 10: harem_7 in day5_4_night
// KO: "*깨지는 건 시간문제다. — 깨질 때 누가 가장 크게 다칠까.*"
// Current (truncated): "*This balance will break.*"
// ============================================================
const fixes_harem_7 = {
    en: "*It's only a matter of time before it breaks. — When it does, who will be hurt the most?*",
    ja: "*壊れるのは時間の問題だ。——壊れた時、一番深く傷つくのは誰だろう。*",
    es: "*Es solo cuestión de tiempo que se rompa. — Cuando lo haga, ¿quién será el más herido?*",
    fr: "*Ce n'est qu'une question de temps avant que tout ne se brise. — Quand ça arrivera, qui sera le plus blessé ?*",
    de: "*Es ist nur eine Frage der Zeit, bis es zerbricht. — Wenn es soweit ist, wer wird am meisten verletzt?*"
};

// ============================================================
// FIX 11: mayhem_6 in day5_4_night
// KO: "*교문 앞에 서 있다. 벚꽃이 떨어진다. 아무도 줍지 않는다.*"
// Current (wrong): "*I watched all three walk away. None of them looked back.*"
// ============================================================
const fixes_mayhem_6 = {
    en: "*I'm standing in front of the school gate. Cherry blossoms are falling. No one picks them up.*",
    ja: "*校門の前に立っている。桜が散っている。誰も拾わない。*",
    es: "*Estoy frente a la puerta del instituto. Los pétalos de cerezo caen. Nadie los recoge.*",
    fr: "*Je suis devant le portail. Les pétales de cerisier tombent. Personne ne les ramasse.*",
    de: "*Ich stehe vor dem Schultor. Kirschblüten fallen. Niemand hebt sie auf.*"
};

// ============================================================
// APPLY ALL FIXES
// ============================================================
const allFixes = [
    { file: 'day1_1_morning', nodeId: 'hallway_5', translations: fixes_hallway5 },
    { file: 'day1_1_morning', nodeId: 'hallway_7', translations: fixes_hallway7 },
    { file: 'day1_1_morning', nodeId: 'hallway_8', translations: fixes_hallway8 },
    { file: 'day5_3_afterschool', nodeId: 'after5_end', translations: fixes_after5_end },
    { file: 'day5_3_afterschool', nodeId: 'after5_last_chance_1', translations: fixes_last_chance_1 },
    { file: 'day5_3_afterschool', nodeId: 'after5_last_chance_choice', translations: fixes_last_chance_choice },
    { file: 'day5_3_afterschool', nodeId: 'after5_confess_yes', translations: fixes_confess_yes },
    { file: 'day5_3_afterschool', nodeId: 'after5_confess_yes_2', translations: fixes_confess_yes_2 },
    { file: 'day5_3_afterschool', nodeId: 'after5_confess_no_2', translations: fixes_confess_no_2 },
    { file: 'day5_4_night', nodeId: 'harem_7', translations: fixes_harem_7 },
    { file: 'day5_4_night', nodeId: 'mayhem_6', translations: fixes_mayhem_6 },
];

let totalFixed = 0;
let errors = [];

for (const fix of allFixes) {
    for (const lang of Object.keys(fix.translations)) {
        try {
            const data = loadJSON(lang, fix.file);
            if (!data[fix.nodeId]) {
                errors.push(`${lang}/${fix.file}: node ${fix.nodeId} not found`);
                continue;
            }
            const oldText = data[fix.nodeId].text;
            const newText = fix.translations[lang];
            
            if (oldText === newText) {
                console.log(`[SKIP] ${lang}/${fix.file} > ${fix.nodeId} (already correct)`);
                continue;
            }
            
            data[fix.nodeId].text = newText;
            
            // For after5_last_chance_choice, also check choices are preserved
            if (fix.nodeId === 'after5_last_chance_choice' && data[fix.nodeId].choices) {
                // keep existing choices
            }
            
            saveJSON(lang, fix.file, data);
            console.log(`[FIXED] ${lang}/${fix.file} > ${fix.nodeId}`);
            console.log(`   OLD: ${oldText.substring(0, 60)}...`);
            console.log(`   NEW: ${newText.substring(0, 60)}...`);
            totalFixed++;
        } catch (e) {
            errors.push(`${lang}/${fix.file} > ${fix.nodeId}: ${e.message}`);
        }
    }
}

console.log(`\n=== Summary ===`);
console.log(`Total fixes applied: ${totalFixed}`);
if (errors.length > 0) {
    console.log(`Errors: ${errors.length}`);
    errors.forEach(e => console.log(`  - ${e}`));
}
