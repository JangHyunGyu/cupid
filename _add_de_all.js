const fs = require('fs');

// FreeTalkSystem.js
let fts = fs.readFileSync('assets/js/modules/FreeTalkSystem.js', 'utf8');

// Location names - add de: to each location
const locReplacements = [
    ['{ es: "Escuela", ja: "学校", en: "School", fr: "École", ko: "학교" }', '{ es: "Escuela", ja: "学校", en: "School", fr: "École", de: "Schule", ko: "학교" }'],
    ['{ es: "Aula", ja: "教室", en: "Classroom", fr: "Salle de classe", ko: "교실" }', '{ es: "Aula", ja: "教室", en: "Classroom", fr: "Salle de classe", de: "Klassenzimmer", ko: "교실" }'],
    ['{ es: "Pasillo", ja: "廊下", en: "Hallway", fr: "Couloir", ko: "복도" }', '{ es: "Pasillo", ja: "廊下", en: "Hallway", fr: "Couloir", de: "Flur", ko: "복도" }'],
    ['{ es: "Puerta de la escuela", ja: "校門前", en: "School Gate", fr: "Portail de l\'école", ko: "교문 앞" }', '{ es: "Puerta de la escuela", ja: "校門前", en: "School Gate", fr: "Portail de l\'école", de: "Schultor", ko: "교문 앞" }'],
    ['{ es: "Azotea", ja: "屋上", en: "Rooftop", fr: "Toit", ko: "학교 옥상" }', '{ es: "Azotea", ja: "屋上", en: "Rooftop", fr: "Toit", de: "Dach", ko: "학교 옥상" }'],
    ['{ es: "Patio", ja: "運動場", en: "Playground", fr: "Cour de récréation", ko: "운동장" }', '{ es: "Patio", ja: "運動場", en: "Playground", fr: "Cour de récréation", de: "Spielplatz", ko: "운동장" }'],
    ['{ es: "Gimnasio", ja: "体育館", en: "Gym", fr: "Gymnase", ko: "체육관" }', '{ es: "Gimnasio", ja: "体育館", en: "Gym", fr: "Gymnase", de: "Turnhalle", ko: "체육관" }'],
    ['{ es: "Enfermería", ja: "保健室", en: "Nurse\'s Office", fr: "Infirmerie", ko: "보건실" }', '{ es: "Enfermería", ja: "保健室", en: "Nurse\'s Office", fr: "Infirmerie", de: "Krankenzimmer", ko: "보건실" }'],
    ['{ es: "Biblioteca", ja: "図書館", en: "Library", fr: "Bibliothèque", ko: "도서관" }', '{ es: "Biblioteca", ja: "図書館", en: "Library", fr: "Bibliothèque", de: "Bibliothek", ko: "도서관" }'],
    ['{ es: "Sala de juegos", ja: "ゲームセンター", en: "Arcade", fr: "Salle d\'arcade", ko: "오락실" }', '{ es: "Sala de juegos", ja: "ゲームセンター", en: "Arcade", fr: "Salle d\'arcade", de: "Spielhalle", ko: "오락실" }'],
    ['{ es: "Librería", ja: "書店", en: "Bookstore", fr: "Librairie", ko: "서점" }', '{ es: "Librería", ja: "書店", en: "Bookstore", fr: "Librairie", de: "Buchhandlung", ko: "서점" }'],
    ['{ es: "Mi habitación", ja: "自分の部屋", en: "My Room", fr: "Ma chambre", ko: "주인공의 방" }', '{ es: "Mi habitación", ja: "自分の部屋", en: "My Room", fr: "Ma chambre", de: "Mein Zimmer", ko: "주인공의 방" }'],
];

for (const [old, rep] of locReplacements) {
    fts = fts.replace(old, rep);
}

// Dating guideline
fts = fts.replace(
    `                fr: \`\\n- SPÉCIAL : Vous sortez actuellement avec l'utilisateur. Utilisez des surnoms extrêmement intimes et affectueux.\`\n            }[lang]`,
    `                fr: \`\\n- SPÉCIAL : Vous sortez actuellement avec l'utilisateur. Utilisez des surnoms extrêmement intimes et affectueux.\`,\n                de: \`\\n- BESONDERS: Du bist derzeit mit dem Benutzer zusammen. Verwende extrem intime und liebevolle Kosenamen.\`\n            }[lang]`
);

// Jealousy guideline
fts = fts.replace(
    `                    fr: \`\\n- JALOUSIE : Vous avez remarqué que l'utilisateur sort aussi avec d'autres (\${otherDatingChars.join(", ")}).\`\n                }[lang]`,
    `                    fr: \`\\n- JALOUSIE : Vous avez remarqué que l'utilisateur sort aussi avec d'autres (\${otherDatingChars.join(", ")}).\`,\n                    de: \`\\n- EIFERSUCHT: Du hast bemerkt, dass der Benutzer auch mit anderen ausgeht (\${otherDatingChars.join(", ")}).\`\n                }[lang]`
);

// Medium instruction - remote
fts = fts.replace(
    `{ es: "\\n- MEDIO: Comunicándose por TELÉFONO/MENSAJERÍA.", ja: "\\n- メディア: 電話/メッセンジャーで連絡中。", en: "\\n- MEDIUM: Communicating via PHONE/MESSENGER.", fr: "\\n- MOYEN : Communication par TÉLÉPHONE/MESSAGERIE." }[lang]`,
    `{ es: "\\n- MEDIO: Comunicándose por TELÉFONO/MENSAJERÍA.", ja: "\\n- メディア: 電話/メッセンジャーで連絡中。", en: "\\n- MEDIUM: Communicating via PHONE/MESSENGER.", fr: "\\n- MOYEN : Communication par TÉLÉPHONE/MESSAGERIE.", de: "\\n- MEDIUM: Kommunikation per TELEFON/MESSENGER." }[lang]`
);

// Medium instruction - face to face
fts = fts.replace(
    `{ es: "\\n- MEDIO: Hablando CARA A CARA.", ja: "\\n- メディア: 対面で会話中。", en: "\\n- MEDIUM: Talking FACE-TO-FACE.", fr: "\\n- MOYEN : Conversation EN PERSONNE." }[lang]`,
    `{ es: "\\n- MEDIO: Hablando CARA A CARA.", ja: "\\n- メディア: 対面で会話中。", en: "\\n- MEDIUM: Talking FACE-TO-FACE.", fr: "\\n- MOYEN : Conversation EN PERSONNE.", de: "\\n- MEDIUM: Gespräch VON ANGESICHT ZU ANGESICHT." }[lang]`
);

// Context fallback
fts = fts.replace(
    `{ es: "Hablando con el usuario.", ja: "ユーザーと会話中です。", en: "Talking with the user.", fr: "En conversation avec l'utilisateur." }[lang]`,
    `{ es: "Hablando con el usuario.", ja: "ユーザーと会話中です。", en: "Talking with the user.", fr: "En conversation avec l'utilisateur.", de: "Im Gespräch mit dem Benutzer." }[lang]`
);

// Chat guide tips - add de
fts = fts.replace(
    `                fr: isRemote\n                    ? "<b>Tip :</b> Décrivez le ton avec des astérisques, ex : <i>*en souriant* Salut...</i>"\n                    : "<b>Tip :</b> Décrivez la scène ou les actions, ex : <i>*prend la main* Allons-y.</i>"\n            };`,
    `                fr: isRemote\n                    ? "<b>Tip :</b> Décrivez le ton avec des astérisques, ex : <i>*en souriant* Salut...</i>"\n                    : "<b>Tip :</b> Décrivez la scène ou les actions, ex : <i>*prend la main* Allons-y.</i>",\n                de: isRemote\n                    ? "<b>Tipp:</b> Beschreibe den Ton mit Sternchen, z.B. <i>*lächelnd* Hey...</i>"\n                    : "<b>Tipp:</b> Beschreibe die Szene oder Aktionen, z.B. <i>*nimmt die Hand* Lass uns gehen.</i>"\n            };`
);

// Skip confirm message
fts = fts.replace(
    `{ es: "¿Detener la conversación y continuar?", ja: "会話を中断して次のシーンに進みますか？", en: "Stop the conversation and proceed?", fr: "Arrêter la conversation et continuer ?" }[lang]`,
    `{ es: "¿Detener la conversación y continuar?", ja: "会話を中断して次のシーンに進みますか？", en: "Stop the conversation and proceed?", fr: "Arrêter la conversation et continuer ?", de: "Gespräch beenden und fortfahren?" }[lang]`
);

// End message (appears twice)
const endMsgOld = `{ es: "\\n\\n(La conversación ha terminado.)", ja: "\\n\\n（会話が終了しました。）", en: "\\n\\n(Conversation ended. Click to continue.)", fr: "\\n\\n(La conversation est terminée.)" }`;
const endMsgNew = `{ es: "\\n\\n(La conversación ha terminado.)", ja: "\\n\\n（会話が終了しました。）", en: "\\n\\n(Conversation ended. Click to continue.)", fr: "\\n\\n(La conversation est terminée.)", de: "\\n\\n(Gespräch beendet. Klicke, um fortzufahren.)" }`;
fts = fts.replaceAll(endMsgOld, endMsgNew);

// Progress tag
fts = fts.replace(
    'fr: `\\n[Progression du scénario] : ${this.freeTalkTurns}/${this.currentMaxTurns} tours. ${remaining} restants.`',
    'fr: `\\n[Progression du scénario] : ${this.freeTalkTurns}/${this.currentMaxTurns} tours. ${remaining} restants.`, de: `\\n[Szenariofortschritt]: ${this.freeTalkTurns}/${this.currentMaxTurns} Runden. ${remaining} übrig.`'
);

// Progress tag split - add German prefix
fts = fts.replace(
    ".split('\\n[Progression du scénario]')[0];",
    ".split('\\n[Progression du scénario]')[0].split('\\n[Szenariofortschritt]')[0];"
);

// Player label
fts = fts.replace(
    '{ en: "Me", es: "Yo", ja: "僕", fr: "Moi" }',
    '{ en: "Me", es: "Yo", ja: "僕", fr: "Moi", de: "Ich" }'
);

// Fallback response text
fts = fts.replace(
    `{ es: "No pude entender la respuesta. Intentaré de nuevo.", ja: "応答を理解できませんでした。もう一度試みます。", en: "I couldn't understand the response. Let me try again.", fr: "Je n'ai pas pu comprendre la réponse. Laissez-moi réessayer." }`,
    `{ es: "No pude entender la respuesta. Intentaré de nuevo.", ja: "応答を理解できませんでした。もう一度試みます。", en: "I couldn't understand the response. Let me try again.", fr: "Je n'ai pas pu comprendre la réponse. Laissez-moi réessayer.", de: "Ich konnte die Antwort nicht verstehen. Lass mich es nochmal versuchen." }`
);

fs.writeFileSync('assets/js/modules/FreeTalkSystem.js', fts, 'utf8');
console.log('FreeTalkSystem.js updated');

// DialogueSystem.js
let ds = fs.readFileSync('assets/js/modules/DialogueSystem.js', 'utf8');

// defaultTitle
ds = ds.replace(
    '{ es: "Estudiante Transferido", ja: "転校生", en: "Transfer Student", fr: "Élève transféré" }[lang]',
    '{ es: "Estudiante Transferido", ja: "転校生", en: "Transfer Student", fr: "Élève transféré", de: "Austauschschüler" }[lang]'
);

// charNamesByLang - add de entry
ds = ds.replace(
    `            fr: { Seoyeon: "Seoyeon", Yuna: "Yuna", Dain: "Dain", Teacher: "Professeur Principal", Nurse: "Infirmière Scolaire" },\n            ko:`,
    `            fr: { Seoyeon: "Seoyeon", Yuna: "Yuna", Dain: "Dain", Teacher: "Professeur Principal", Nurse: "Infirmière Scolaire" },\n            de: { Seoyeon: "Seoyeon", Yuna: "Yuna", Dain: "Dain", Teacher: "Lehrerin", Nurse: "Schulkrankenschwester" },\n            ko:`
);

// Affinity list header
ds = ds.replace(
    '{ es: "\\n\\n[Estado de Afinidad]\\n", ja: "\\n\\n[好感度状況]\\n", en: "\\n\\n[Affinity Status]\\n", fr: "\\n\\n[État d\'Affinité]\\n" }[lang]',
    '{ es: "\\n\\n[Estado de Afinidad]\\n", ja: "\\n\\n[好感度状況]\\n", en: "\\n\\n[Affinity Status]\\n", fr: "\\n\\n[État d\'Affinité]\\n", de: "\\n\\n[Zuneigungsstatus]\\n" }[lang]'
);

// Add German name mappings to charFileMap in DialogueSystem
ds = ds.replace(
    `            "???": "seyoun"\n        };`,
    `            "???": "seyoun",\n            "Lehrerin": "teacher", "Schulkrankenschwester": "nurse"\n        };`
);

fs.writeFileSync('assets/js/modules/DialogueSystem.js', ds, 'utf8');
console.log('DialogueSystem.js updated');

// GameEngine.js
let ge = fs.readFileSync('assets/js/modules/GameEngine.js', 'utf8');

// Error messages (4 occurrences of similar pattern)
ge = ge.replaceAll(
    '{ es: "Escena no encontrada. Verifica los datos del escenario.", ja: "シーンが見つかりません。シナリオデータを確認してください。", en: "Scene not found. Please check the scenario data.", fr: "Scène introuvable. Veuillez vérifier les données du scénario." }[lang]',
    '{ es: "Escena no encontrada. Verifica los datos del escenario.", ja: "シーンが見つかりません。シナリオデータを確認してください。", en: "Scene not found. Please check the scenario data.", fr: "Scène introuvable. Veuillez vérifier les données du scénario.", de: "Szene nicht gefunden. Bitte überprüfe die Szenariodaten." }[lang]'
);

ge = ge.replaceAll(
    '{ es: "Siguiente escena no definida. Verifica los datos del escenario.", ja: "次のシーンが定義されていません。シナリオデータを確認してください。", en: "Next scene not defined. Please check the scenario data.", fr: "Scène suivante non définie. Veuillez vérifier les données du scénario." }[lang]',
    '{ es: "Siguiente escena no definida. Verifica los datos del escenario.", ja: "次のシーンが定義されていません。シナリオデータを確認してください。", en: "Next scene not defined. Please check the scenario data.", fr: "Scène suivante non définie. Veuillez vérifier les données du scénario.", de: "Nächste Szene nicht definiert. Bitte überprüfe die Szenariodaten." }[lang]'
);

ge = ge.replaceAll(
    '{ es: "No hay opciones disponibles y la siguiente escena no está definida.", ja: "選択肢がなく、次のシーンが定義されていません。シナリオデータを確認してください。", en: "No available choices and next scene not defined. Please check the scenario data.", fr: "Aucun choix disponible et la scène suivante n\'est pas définie." }[lang]',
    '{ es: "No hay opciones disponibles y la siguiente escena no está definida.", ja: "選択肢がなく、次のシーンが定義されていません。シナリオデータを確認してください。", en: "No available choices and next scene not defined. Please check the scenario data.", fr: "Aucun choix disponible et la scène suivante n\'est pas définie.", de: "Keine verfügbaren Auswahlmöglichkeiten und nächste Szene nicht definiert." }[lang]'
);

// Name validation messages
ge = ge.replace(
    '{ es: "Por favor, usa solo coreano o solo inglés. No se permite mezclar.", ja: "韓国語のみ、または英語のみで入力してください。混合は不可です。", en: "Please use only Korean or only English. Mixing is not allowed.", fr: "Veuillez utiliser uniquement le coréen ou uniquement l\'anglais. Le mélange n\'est pas autorisé." }[lang]',
    '{ es: "Por favor, usa solo coreano o solo inglés. No se permite mezclar.", ja: "韓国語のみ、または英語のみで入力してください。混合は不可です。", en: "Please use only Korean or only English. Mixing is not allowed.", fr: "Veuillez utiliser uniquement le coréen ou uniquement l\'anglais. Le mélange n\'est pas autorisé.", de: "Bitte verwende nur Koreanisch oder nur Englisch. Mischen ist nicht erlaubt." }[lang]'
);

ge = ge.replace(
    '{ es: "Por favor, ingresa caracteres coreanos completos (ej: 가, no ㄱ).", ja: "完成した韓国語を入力してください。（例：ㄱ → 가）", en: "Please enter complete Korean characters (e.g., 가, not ㄱ).", fr: "Veuillez entrer des caractères coréens complets (ex : 가, pas ㄱ)." }[lang]',
    '{ es: "Por favor, ingresa caracteres coreanos completos (ej: 가, no ㄱ).", ja: "完成した韓国語を入力してください。（例：ㄱ → 가）", en: "Please enter complete Korean characters (e.g., 가, not ㄱ).", fr: "Veuillez entrer des caractères coréens complets (ex : 가, pas ㄱ).", de: "Bitte gib vollständige koreanische Zeichen ein (z.B. 가, nicht ㄱ)." }[lang]'
);

ge = ge.replace(
    '{ es: "Por favor, ingresa un nombre: 1-12 letras en inglés o 1-6 caracteres coreanos.", ja: "名前を入力してください：英字1〜12文字、または韓国語1〜6文字。", en: "Please enter a name: 1-12 English letters or 1-6 Korean characters.", fr: "Veuillez entrer un nom : 1-12 lettres anglaises ou 1-6 caractères coréens." }[lang]',
    '{ es: "Por favor, ingresa un nombre: 1-12 letras en inglés o 1-6 caracteres coreanos.", ja: "名前を入力してください：英字1〜12文字、または韓国語1〜6文字。", en: "Please enter a name: 1-12 English letters or 1-6 Korean characters.", fr: "Veuillez entrer un nom : 1-12 lettres anglaises ou 1-6 caractères coréens.", de: "Bitte gib einen Namen ein: 1-12 englische Buchstaben oder 1-6 koreanische Zeichen." }[lang]'
);

// Credits - add de to all ct() objects
const creditReplacements = [
    // Subtitle
    ["{ es: 'Donde cae la flecha de Cupido', ja: 'キューピッドの矢が届く場所', en: 'Where Cupid\\'s Arrow Lands', fr: 'Là où la flèche de Cupidon se pose', ko: '사랑의 화살이 닿는 곳' }",
     "{ es: 'Donde cae la flecha de Cupido', ja: 'キューピッドの矢が届く場所', en: 'Where Cupid\\'s Arrow Lands', fr: 'Là où la flèche de Cupidon se pose', de: 'Wo Amors Pfeil trifft', ko: '사랑의 화살이 닿는 곳' }"],
    // Planning
    ["{ es: 'Planificación · Guión', ja: '企画・シナリオ', en: 'Planning · Scenario', fr: 'Planification · Scénario', ko: '기획 · 시나리오' }",
     "{ es: 'Planificación · Guión', ja: '企画・シナリオ', en: 'Planning · Scenario', fr: 'Planification · Scénario', de: 'Planung · Szenario', ko: '기획 · 시나리오' }"],
    // Programming
    ["{ es: 'Programación · Dirección', ja: 'プログラミング・演出', en: 'Programming · Direction', fr: 'Programmation · Direction', ko: '프로그래밍 · 연출' }",
     "{ es: 'Programación · Dirección', ja: 'プログラミング・演出', en: 'Programming · Direction', fr: 'Programmation · Direction', de: 'Programmierung · Regie', ko: '프로그래밍 · 연출' }"],
    // Art
    ["{ es: 'Arte · Diseño', ja: 'アート・デザイン', en: 'Art · Design', fr: 'Art · Design', ko: '아트 · 디자인' }",
     "{ es: 'Arte · Diseño', ja: 'アート・デザイン', en: 'Art · Design', fr: 'Art · Design', de: 'Kunst · Design', ko: '아트 · 디자인' }"],
    // Music
    ["{ es: 'Música · Sonido', ja: '音楽・サウンド', en: 'Music · Sound', fr: 'Musique · Son', ko: '음악 · 사운드' }",
     "{ es: 'Música · Sonido', ja: '音楽・サウンド', en: 'Music · Sound', fr: 'Musique · Son', de: 'Musik · Sound', ko: '음악 · 사운드' }"],
    // Characters
    ["{ es: 'Personajes', ja: '登場人物', en: 'Characters', fr: 'Personnages', ko: '등장인물' }",
     "{ es: 'Personajes', ja: '登場人物', en: 'Characters', fr: 'Personnages', de: 'Charaktere', ko: '등장인물' }"],
    // Characters list - Seoyeon group 
    ["{ es: 'Seoyeon · Yuna · Dain', ja: 'ソヨン · ユナ · ダイン', en: 'Seoyeon · Yuna · Dain', fr: 'Seoyeon · Yuna · Dain', ko: '서연 · 유나 · 다인' }",
     "{ es: 'Seoyeon · Yuna · Dain', ja: 'ソヨン · ユナ · ダイン', en: 'Seoyeon · Yuna · Dain', fr: 'Seoyeon · Yuna · Dain', de: 'Seoyeon · Yuna · Dain', ko: '서연 · 유나 · 다인' }"],
    // Characters list - Nurse/Teacher group
    ["{ es: 'Enfermera · Profesora', ja: '保健先生 · 担任先生', en: 'School Nurse · Homeroom Teacher', fr: 'Infirmière Scolaire · Professeur Principal', ko: '보건선생님 · 담임선생님' }",
     "{ es: 'Enfermera · Profesora', ja: '保健先生 · 担任先生', en: 'School Nurse · Homeroom Teacher', fr: 'Infirmière Scolaire · Professeur Principal', de: 'Schulkrankenschwester · Lehrerin', ko: '보건선생님 · 담임선생님' }"],
    // Production
    ["{ es: 'Producción', ja: '制作', en: 'Production', fr: 'Produit par', ko: '제작' }",
     "{ es: 'Producción', ja: '制作', en: 'Production', fr: 'Produit par', de: 'Produktion', ko: '제작' }"],
    // Special Thanks
    ["{ es: 'Agradecimientos Especiales', ja: 'スペシャルサンクス', en: 'Special Thanks', fr: 'Remerciements Spéciaux', ko: 'Special Thanks' }",
     "{ es: 'Agradecimientos Especiales', ja: 'スペシャルサンクス', en: 'Special Thanks', fr: 'Remerciements Spéciaux', de: 'Besonderer Dank', ko: 'Special Thanks' }"],
    // Thank you  
    ["{ es: '¡Gracias por jugar!', ja: 'プレイしていただきありがとうございます！', en: 'Thank you for playing!', fr: 'Merci d\\'avoir joué !', ko: '플레이해 주신 여러분께' }",
     "{ es: '¡Gracias por jugar!', ja: 'プレイしていただきありがとうございます！', en: 'Thank you for playing!', fr: 'Merci d\\'avoir joué !', de: 'Vielen Dank fürs Spielen!', ko: '플레이해 주신 여러분께' }"],
    // Appreciate
    ["{ es: 'Lo apreciamos sinceramente.', ja: '心より感謝申し上げます。', en: 'We sincerely appreciate it.', fr: 'Nous vous en sommes sincèrement reconnaissants.', ko: '진심으로 감사드립니다' }",
     "{ es: 'Lo apreciamos sinceramente.', ja: '心より感謝申し上げます。', en: 'We sincerely appreciate it.', fr: 'Nous vous en sommes sincèrement reconnaissants.', de: 'Wir schätzen es aufrichtig.', ko: '진심으로 감사드립니다' }"],
];

// Also add name lines for credits
const creditNameReplacements = [
    ["{ es: 'Hyungyu Jang · Yujin Kim · Sanghun Lee', ja: 'Hyungyu Jang · Yujin Kim · Sanghun Lee', en: 'Hyungyu Jang · Yujin Kim · Sanghun Lee', ko: '장현규 · 김유진 · 이상훈' }",
     "{ es: 'Hyungyu Jang · Yujin Kim · Sanghun Lee', ja: 'Hyungyu Jang · Yujin Kim · Sanghun Lee', en: 'Hyungyu Jang · Yujin Kim · Sanghun Lee', de: 'Hyungyu Jang · Yujin Kim · Sanghun Lee', ko: '장현규 · 김유진 · 이상훈' }"],
];

for (const [old, rep] of creditReplacements) {
    if (ge.includes(old)) {
        ge = ge.replace(old, rep);
    } else {
        console.log('WARNING: Credit replacement not found:', old.substring(0, 60));
    }
}

for (const [old, rep] of creditNameReplacements) {
    ge = ge.replaceAll(old, rep);
}

// Also handle the duplicate name entries (Hyungyu Jang · Yujin Kim appears multiple times)
const nameJangKim = "{ es: 'Hyungyu Jang · Yujin Kim', ja: 'Hyungyu Jang · Yujin Kim', en: 'Hyungyu Jang · Yujin Kim', ko: '장현규 · 김유진' }";
const nameJangKimDe = "{ es: 'Hyungyu Jang · Yujin Kim', ja: 'Hyungyu Jang · Yujin Kim', en: 'Hyungyu Jang · Yujin Kim', de: 'Hyungyu Jang · Yujin Kim', ko: '장현규 · 김유진' }";
ge = ge.replaceAll(nameJangKim, nameJangKimDe);

const nameJang = "{ es: 'Hyungyu Jang', ja: 'Hyungyu Jang', en: 'Hyungyu Jang', ko: '장현규' }";
const nameJangDe = "{ es: 'Hyungyu Jang', ja: 'Hyungyu Jang', en: 'Hyungyu Jang', de: 'Hyungyu Jang', ko: '장현규' }";
ge = ge.replaceAll(nameJang, nameJangDe);

fs.writeFileSync('assets/js/modules/GameEngine.js', ge, 'utf8');
console.log('GameEngine.js updated');

// UIManager.js
let ui = fs.readFileSync('assets/js/modules/UIManager.js', 'utf8');

ui = ui.replace(
    "{ es: 'Subir imagen', ja: '画像をアップロード', en: 'Upload image', fr: 'Télécharger une image' }[document.documentElement.lang] || '이미지 업로드'",
    "{ es: 'Subir imagen', ja: '画像をアップロード', en: 'Upload image', fr: 'Télécharger une image', de: 'Bild hochladen' }[document.documentElement.lang] || '이미지 업로드'"
);

ui = ui.replace(
    "{ es: 'Eliminar imagen', ja: '画像を削除', en: 'Remove image', fr: \"Supprimer l'image\" }[document.documentElement.lang] || '미리보기 제거'",
    "{ es: 'Eliminar imagen', ja: '画像を削除', en: 'Remove image', fr: \"Supprimer l'image\", de: 'Bild entfernen' }[document.documentElement.lang] || '미리보기 제거'"
);

ui = ui.replace(
    "{ es: 'Solo se pueden subir archivos de imagen.', ja: '画像ファイルのみアップロード可能です。', en: 'Only image files can be uploaded.', fr: 'Seuls les fichiers image peuvent être téléchargés.' }[document.documentElement.lang] || '이미지 파일만 업로드 가능합니다.'",
    "{ es: 'Solo se pueden subir archivos de imagen.', ja: '画像ファイルのみアップロード可能です。', en: 'Only image files can be uploaded.', fr: 'Seuls les fichiers image peuvent être téléchargés.', de: 'Nur Bilddateien können hochgeladen werden.' }[document.documentElement.lang] || '이미지 파일만 업로드 가능합니다.'"
);

fs.writeFileSync('assets/js/modules/UIManager.js', ui, 'utf8');
console.log('UIManager.js updated');

// Clean up
try { fs.unlinkSync('_add_de_flags.js'); } catch(e) {}

console.log('\nAll files updated successfully!');
