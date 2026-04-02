// 오글거리는 대사 수정 — 5개 언어 i18n 일괄 적용 스크립트
// SCENARIO.md + ko i18n 수정 후, 나머지 5개 언어(en/ja/es/fr/de) 동기화용
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
// 1. lunch_yuna_26 (day1_2_lunch)
// KO: "'좋았어.' — 그 한마디에 괜히 기분이 좋아진다. 이 사람은 말이 적은 만큼 무겁다."
// ============================================================
const fix_lunch_yuna_26 = {
    en: "*'That was nice.' — Just those words lift my mood. This person's single word carries more weight than ten from anyone else.*",
    ja: "*「よかった」——そのひと言で、なぜか気分が上がる。この人の一言は、他の誰の十言より重い。*",
    es: "*'Estuvo bien.' — Esas palabras me alegran sin razón. Una sola palabra de esta persona pesa más que diez de cualquier otra.*",
    fr: "*« C'était bien. » — Ces mots me mettent de bonne humeur sans raison. Un seul mot de cette personne pèse plus que dix de n'importe qui d'autre.*",
    de: "*‚Das war schön.' — Allein dieses Wort hebt meine Stimmung. Ein einziges Wort von ihr wiegt mehr als zehn von jedem anderen.*"
};

// ============================================================
// 2. lunch_seo_after_7 (day1_2_lunch)
// KO: "새끼손가락. — 별거 아닌 건데, 괜히 눈이 간다."
// ============================================================
const fix_lunch_seo_after_7 = {
    en: "*Her pinky finger. — It's nothing, but my eyes keep drifting to it.*",
    ja: "*小指。——大したことじゃないのに、つい目が行く。*",
    es: "*Su meñique. — No es nada especial, pero mis ojos se van solos.*",
    fr: "*Son auriculaire. — Ce n'est rien, mais mes yeux y reviennent sans cesse.*",
    de: "*Ihr kleiner Finger. — Nichts Besonderes, aber mein Blick bleibt hängen.*"
};

// ============================================================
// 3. night_seo_late_3 (day1_4_night)
// KO: "'찾으러 갈 거야'. — 핸드폰을 내려놓은 손이 멈춘다."
// ============================================================
const fix_night_seo_late_3 = {
    en: "*'I'll go find it.' — My hand freezes after setting down the phone.*",
    ja: "*「探しに行くよ」——スマホを置いた手が止まる。*",
    es: "*'Iré a buscarlo.' — Mi mano se queda quieta después de soltar el teléfono.*",
    fr: "*« J'irai le chercher. » — Ma main se fige après avoir posé le téléphone.*",
    de: "*‚Ich werde danach suchen.' — Meine Hand erstarrt, nachdem ich das Handy hingelegt habe.*"
};

// ============================================================
// 4. after2_seo_skinship_2 (day2_3_afterschool)
// KO: "서연의 손가락이 멈춘다. 아무 말도 안 하고 고개를 돌린다. — 숨이 잠깐 멈췄다."
// ============================================================
const fix_after2_seo_skinship_2 = {
    en: "*Seoyeon's fingers stop. She turns her head without a word. — I hold my breath for a second.*",
    ja: "*ソヨンの指が止まる。何も言わずに顔をそらす。——息が一瞬止まった。*",
    es: "*Los dedos de Seoyeon se detienen. Gira la cabeza sin decir nada. — Se me corta la respiración un segundo.*",
    fr: "*Les doigts de Seoyeon s'arrêtent. Elle détourne la tête sans rien dire. — Mon souffle se coupe un instant.*",
    de: "*Seoyeons Finger stoppen. Sie dreht den Kopf weg, ohne ein Wort. — Mir stockt kurz der Atem.*"
};

// ============================================================
// 5. night2_flashback_3 (day2_4_night)
// KO: "그때 나는 매일 밤 핸드폰을 열었다. 메모장에 뭔가를 쓰다 지우기를 반복했다. — 매번 보내기 직전에 멈췄다."
// ============================================================
const fix_night2_flashback_3 = {
    en: "*Back then, I opened my phone every night. Typed something in the notes app and deleted it over and over. — Every time, I stopped right before hitting send.*",
    ja: "*あの頃、毎晩スマホを開いた。メモアプリに何かを書いては消してを繰り返した。——毎回、送信する直前で止まった。*",
    es: "*En esa época, abría el teléfono todas las noches. Escribía algo en las notas y lo borraba una y otra vez. — Cada vez, me detenía justo antes de enviarlo.*",
    fr: "*À cette époque, j'ouvrais mon téléphone chaque soir. J'écrivais quelque chose dans les notes et je l'effaçais encore et encore. — Chaque fois, je m'arrêtais juste avant d'envoyer.*",
    de: "*Damals öffnete ich jeden Abend mein Handy. Schrieb etwas in die Notizen und löschte es wieder und wieder. — Jedes Mal hielt ich kurz vor dem Absenden inne.*"
};

// ============================================================
// 6. night2_reply_yuna_7 (day2_4_night)
// KO: "세 번째 별? — 창문을 열고 밤하늘을 올려다본다. 세 번째가 어떤 건지는 모르겠다. 유나다운 수수께끼다. — 답은 안 알려주면서, 찾아보게 만드는 사람."
// ============================================================
const fix_night2_reply_yuna_7 = {
    en: "*The third star? — I open the window and look up at the night sky. Not sure which one is the third. A riddle, very Yuna. — Never tells the answer, but makes you want to find it.*",
    ja: "*三つ目の星？——窓を開けて夜空を見上げる。三つ目がどれなのかはわからない。ユナらしい謎かけだ。——答えは教えないくせに、探したくなる人。*",
    es: "*¿La tercera estrella? — Abro la ventana y miro al cielo nocturno. No sé cuál es la tercera. Un acertijo típico de Yuna. — No te da la respuesta, pero te hace querer buscarla.*",
    fr: "*La troisième étoile ? — J'ouvre la fenêtre et lève les yeux vers le ciel. Impossible de savoir laquelle est la troisième. Une énigme typique de Yuna. — Elle ne donne jamais la réponse, mais donne envie de chercher.*",
    de: "*Der dritte Stern? — Ich öffne das Fenster und schaue zum Nachthimmel hoch. Keine Ahnung, welcher der dritte ist. Ein Rätsel, typisch Yuna. — Verrät die Antwort nie, aber macht einen neugierig.*"
};

// ============================================================
// 7. night2_reply_yuna_6_ins (day2_4_night) — 별 나레이션 분할본
// KO 확인 후 적용 (night2_reply_yuna_7과 관련된 분할 씬)
// ============================================================
const fix_night2_reply_yuna_6_ins = {
    en: "*The third star? — I open the window and look up at the night sky. Not sure which one is the third.*",
    ja: "*三つ目の星？——窓を開けて夜空を見上げる。三つ目がどれなのかはわからない。*",
    es: "*¿La tercera estrella? — Abro la ventana y miro al cielo nocturno. No sé cuál es la tercera.*",
    fr: "*La troisième étoile ? — J'ouvre la fenêtre et lève les yeux vers le ciel. Impossible de savoir laquelle est la troisième.*",
    de: "*Der dritte Stern? — Ich öffne das Fenster und schaue zum Nachthimmel hoch. Keine Ahnung, welcher der dritte ist.*"
};

// ============================================================
// 8. lunch3_meal_10_ins5 (day3_2_lunch)
// KO: "유나가 고개만 끄덕인다. 쪽지를 쓰다 접어서 주머니에 넣는다. 안 건넨다. — 뭐라고 적었는지는, 모르겠다."
// ============================================================
const fix_lunch3_meal_10_ins5 = {
    en: "*Yuna just nods. She writes on a note, folds it, and puts it in her pocket. Doesn't hand it over. — No idea what it said.*",
    ja: "*ユナはただ頷く。メモを書きかけて折り畳んでポケットにしまう。渡さない。——何を書いたのかは、わからない。*",
    es: "*Yuna solo asiente. Escribe en un papel, lo dobla y se lo guarda en el bolsillo. No lo entrega. — No sé qué decía.*",
    fr: "*Yuna hoche juste la tête. Elle écrit sur un papier, le plie et le met dans sa poche. Elle ne le donne pas. — Aucune idée de ce qui était écrit.*",
    de: "*Yuna nickt nur. Sie schreibt auf einen Zettel, faltet ihn und steckt ihn in die Tasche. Gibt ihn nicht her. — Keine Ahnung, was draufstand.*"
};

// ============================================================
// 9. after3_confront_5 (day3_3_afterschool)
// KO: "네가 다른 애들한테 똑같이 웃어줄 때, 그게 좀 싫었어."
// ============================================================
const fix_after3_confront_5 = {
    en: "When you smiled the same way at other people, I kind of hated it.",
    ja: "あなたが他の子にも同じように笑いかけるの、ちょっと嫌だった。",
    es: "Cuando les sonreías igual a las demás, eso me molestaba un poco.",
    fr: "Quand tu souriais pareil aux autres, ça me dérangeait un peu.",
    de: "Wenn du den anderen genauso zugelächelt hast, das hat mich gestört."
};

// ============================================================
// 10. haeun_warn_5c_ins (day3_3_afterschool) — 같은 대사 중복
// ============================================================
const fix_haeun_warn_5c_ins = { ...fix_after3_confront_5 };

// ============================================================
// 11. after3_confront_excuse_2 (day3_3_afterschool)
// KO: "몇 명이랑 약속했냐가 문제가 아니야. 나한테 그 약속이 뭐였는지가 문제야."
// ============================================================
const fix_after3_confront_excuse_2 = {
    en: "It's not about how many people you made plans with. It's about what that promise meant to me.",
    ja: "何人と約束したかが問題じゃないの。私にとってその約束が何だったかが問題なの。",
    es: "No es cuántas personas tenían planes contigo. Es lo que esa promesa significaba para mí.",
    fr: "Ce n'est pas le nombre de personnes avec qui tu avais rendez-vous. C'est ce que cette promesse représentait pour moi.",
    de: "Es geht nicht darum, mit wie vielen du dich verabredet hast. Es geht darum, was dieses Versprechen für mich bedeutet hat."
};

// ============================================================
// 12. night3_nightmare_3 (day3_4_night)
// KO: "나한테만 그랬잖아..."
// ============================================================
const fix_night3_nightmare_3 = {
    en: "You only did that with me...",
    ja: "私にだけそうしたじゃない…",
    es: "Solo lo hacías conmigo...",
    fr: "Tu ne faisais ça qu'avec moi...",
    de: "Du hast das nur mit mir gemacht..."
};

// ============================================================
// 13. night3_dream_2 (day3_4_night)
// KO: "얼굴은 안 보이는데, 이상하게 불안하지 않았다."
// ============================================================
const fix_night3_dream_2 = {
    en: "*Couldn't see their face, but strangely, I wasn't anxious.*",
    ja: "*顔は見えないのに、不思議と不安じゃなかった。*",
    es: "*No podía ver su cara, pero extrañamente, no sentía ansiedad.*",
    fr: "*Je ne voyais pas son visage, mais étrangement, je n'étais pas inquiet.*",
    de: "*Das Gesicht war nicht zu sehen, aber seltsamerweise war ich nicht unruhig.*"
};

// ============================================================
// 14. night3_cheat_reflect_5_ins (day3_4_night)
// KO: "꿈을 꿨다. — 누군가와 나란히 걷고 있었다. 얼굴은 안 보이는데, 이상하게 불안하지 않았다."
// ============================================================
const fix_night3_cheat_reflect_5_ins = {
    en: "*I had a dream. — Walking side by side with someone. Couldn't see their face, but strangely, I wasn't anxious.*",
    ja: "*夢を見た。——誰かと並んで歩いていた。顔は見えないのに、不思議と不安じゃなかった。*",
    es: "*Tuve un sueño. — Caminaba al lado de alguien. No podía ver su cara, pero extrañamente, no sentía ansiedad.*",
    fr: "*J'ai fait un rêve. — Je marchais côte à côte avec quelqu'un. Je ne voyais pas son visage, mais étrangement, je n'étais pas inquiet.*",
    de: "*Ich träumte. — Ging neben jemandem her. Das Gesicht war nicht zu sehen, aber seltsamerweise war ich nicht unruhig.*"
};

// ============================================================
// 15. night3_faithful_reflect_3 (day3_4_night)
// KO: "지우면 그때 감정까지 없어질 것 같아서 남겨뒀었다. 근데 이제 미련이 아니라 기록이다. — 역할은 끝났다."
// ============================================================
const fix_night3_faithful_reflect_3 = {
    en: "*I kept it because deleting it felt like erasing those feelings too. But now it's not lingering attachment — it's just a record. — Its purpose is done.*",
    ja: "*消したらあの時の感情まで消える気がして残していた。でも今は未練じゃなくて記録だ。——役目は終わった。*",
    es: "*Lo guardé porque sentía que al borrarlo desaparecerían también esos sentimientos. Pero ahora no es apego — es solo un registro. — Ya cumplió su función.*",
    fr: "*Je l'avais gardée parce que la supprimer, c'était comme effacer ces sentiments aussi. Mais maintenant ce n'est plus de l'attachement — c'est juste un souvenir. — Son rôle est terminé.*",
    de: "*Ich hatte es behalten, weil es sich anfühlte, als würden die Gefühle von damals mit verschwinden. Aber jetzt ist es kein Festhalten mehr — nur noch eine Erinnerung. — Seine Aufgabe ist erfüllt.*"
};

// ============================================================
// 16. night3_faithful_reflect_4 (day3_4_night)
// KO: "이번에는 다르다. 한 사람에게만 말하겠다. 나머지에게는 — 확실하게 말하겠다."
// ============================================================
const fix_night3_faithful_reflect_4 = {
    en: "*This time is different. I'll speak to only one person. The rest — I'll be clear with them.*",
    ja: "*今度は違う。一人にだけ言う。残りには——はっきり伝える。*",
    es: "*Esta vez es diferente. Solo le diré a una persona. Al resto — les hablaré claro.*",
    fr: "*Cette fois c'est différent. Je ne parlerai qu'à une seule personne. Aux autres — je serai clair.*",
    de: "*Diesmal ist es anders. Ich werde nur einer Person etwas sagen. Den anderen — werde ich klar Bescheid geben.*"
};

// ============================================================
// 17. confess_seo_yes_6 (day4_3_afterschool)
// KO: "그때 네가 진짜 서연이었어. 나는 그 서연이 좋아."
// ============================================================
const fix_confess_seo_yes_6 = {
    en: "That was the real you, Seoyeon. That's the you I like.",
    ja: "あの時のお前が本当のソヨンだった。俺はそのソヨンが好きだ。",
    es: "Esa eras tú de verdad, Seoyeon. Esa es la Seoyeon que me gusta.",
    fr: "À ce moment-là, c'était la vraie toi, Seoyeon. C'est cette Seoyeon que j'aime.",
    de: "Das warst du wirklich, Seoyeon. Diese Seoyeon mag ich."
};

// ============================================================
// 18. confess_dain_yes_10_ins (day4_3_afterschool)
// KO: "'엄청'. — 다인은 늘 이렇다. 짧고 솔직하다. 그래서 믿긴다."
// ============================================================
const fix_confess_dain_yes_10_ins = {
    en: "*'A lot.' — Dain is always like this. Short and honest. That's why it's convincing.*",
    ja: "*「めっちゃ」——ダインはいつもこうだ。短くて素直。だから信じられる。*",
    es: "*'Mucho.' — Dain siempre es así. Corta y sincera. Por eso le creo.*",
    fr: "*« Énormément. » — Dain est toujours comme ça. Courte et sincère. C'est pour ça qu'on la croit.*",
    de: "*‚Total.' — Dain ist immer so. Kurz und ehrlich. Deshalb glaubt man ihr.*"
};

// ============================================================
// 19. wall_seo_pinky_2 (day4_4_night)
// KO: "울고 싶으면 나한테 연락해. 안 물어볼게."
// ============================================================
const fix_wall_seo_pinky_2 = {
    en: "When you want to cry, text me. I won't ask why.",
    ja: "泣きたくなったら連絡して。何も聞かないから。",
    es: "Cuando quieras llorar, escríbeme. No preguntaré nada.",
    fr: "Quand tu veux pleurer, écris-moi. Je ne poserai pas de questions.",
    de: "Wenn du weinen willst, schreib mir. Ich frag nicht nach."
};

// ============================================================
// 20. wall_seo_line_choice (day4_4_night) — choices 배열
// KO choices:
//   1. "완벽 안 해도 돼. 지금 이 서연이 더 좋아."
//   2. "학생회장 서연 말고, 그냥 서연이가 내 여자친구인 거잖아."
//   3. "솔직히 다 잘하는 줄만 알았어. 이런 모습도 보여줘서 고마워."
// ============================================================
const fix_wall_seo_line_choice = {
    en: [
        "You don't have to be perfect. I like this Seoyeon more.",
        "Not student council president Seoyeon — just Seoyeon is my girlfriend.",
        "Honestly, I thought you were good at everything. Thanks for showing me this side too."
    ],
    ja: [
        "完璧じゃなくていい。今のソヨンの方が好きだ。",
        "生徒会長のソヨンじゃなくて、ただのソヨンが俺の彼女なんだから。",
        "正直、何でもできると思ってた。こういう姿も見せてくれてありがとう。"
    ],
    es: [
        "No tienes que ser perfecta. Me gusta más esta Seoyeon.",
        "No la presidenta del consejo, solo Seoyeon — esa es mi novia.",
        "Sinceramente, pensaba que eras buena en todo. Gracias por mostrarme este lado también."
    ],
    fr: [
        "Tu n'as pas besoin d'être parfaite. C'est cette Seoyeon que je préfère.",
        "Pas la présidente du conseil — juste Seoyeon, c'est elle ma petite amie.",
        "Honnêtement, je pensais que tu étais douée en tout. Merci de me montrer ce côté aussi."
    ],
    de: [
        "Du musst nicht perfekt sein. Diese Seoyeon mag ich lieber.",
        "Nicht die Schülerratsvorsitzende — einfach Seoyeon ist meine Freundin.",
        "Ehrlich gesagt dachte ich, du könntest alles. Danke, dass du mir auch diese Seite zeigst."
    ]
};

// ============================================================
// 21. tour_yuna_end_2 (day5_2_lunch)
// KO: "'당분간은'. — 유나가 할 수 있는 최대한의 약속이다."
// ============================================================
const fix_tour_yuna_end_2 = {
    en: "*'For now.' — That's the most Yuna can promise.*",
    ja: "*「当分は」——ユナにできる精一杯の約束だ。*",
    es: "*'Por ahora.' — Es lo máximo que Yuna puede prometer.*",
    fr: "*« Pour le moment. » — C'est le maximum que Yuna puisse promettre.*",
    de: "*‚Vorerst.' — Das ist das Maximum, das Yuna versprechen kann.*"
};

// ============================================================
// 22. after5_last_chance_choice (day5_3_afterschool)
// KO: "지금 아니면 기회 없다."
// ============================================================
const fix_after5_last_chance_choice = {
    en: "*If not now, there's no chance.*",
    ja: "*今じゃなきゃ、チャンスはない。*",
    es: "*Si no es ahora, no habrá oportunidad.*",
    fr: "*Si ce n'est pas maintenant, il n'y aura pas d'autre chance.*",
    de: "*Wenn nicht jetzt, dann nie.*"
};

// ============================================================
// 23. true_seo_7 (day5_4_night)
// KO: "...옆에 있어줘."
// ============================================================
const fix_true_seo_7 = {
    en: "...Stay with me.",
    ja: "…そばにいて。",
    es: "...Quédate conmigo.",
    fr: "...Reste avec moi.",
    de: "...Bleib bei mir."
};

// ============================================================
// 24. good_epilogue_1 / _yuna / _dain (day5_4_night)
// KO: "흔들렸으니까 알았다. 진짜 마음이 뭔지."
// ============================================================
const fix_good_epilogue_1 = {
    en: "*I wavered, so I found out. What my real feelings are.*",
    ja: "*揺れたから、わかった。本当の気持ちが何か。*",
    es: "*Dudé, por eso lo supe. Cuáles eran mis verdaderos sentimientos.*",
    fr: "*J'ai hésité, alors j'ai compris. Ce que je ressentais vraiment.*",
    de: "*Ich habe geschwankt, deshalb weiß ich es jetzt. Was meine wahren Gefühle sind.*"
};

// ============================================================
// 25. good_epilogue_2 / _yuna / _dain (day5_4_night)
// KO: "돌아간 것 같았는데, 결국 여기였다."
// ============================================================
const fix_good_epilogue_2 = {
    en: "*Felt like I took a detour, but this is where I was headed all along.*",
    ja: "*遠回りしたと思ったけど、結局ここだった。*",
    es: "*Parecía un rodeo, pero al final era aquí.*",
    fr: "*J'avais l'impression d'avoir fait un détour, mais c'était ici depuis le début.*",
    de: "*Fühlte sich wie ein Umweg an, aber am Ende war es hier.*"
};

// ============================================================
// 26. good_epilogue_3 / _yuna / _dain (day5_4_night)
// KO: "서툴러도 괜찮다. 처음이니까."
// ============================================================
const fix_good_epilogue_3 = {
    en: "*It's okay to be clumsy. It's our first time, after all.*",
    ja: "*不器用でもいい。初めてだから。*",
    es: "*Está bien ser torpe. Es nuestra primera vez, después de todo.*",
    fr: "*C'est pas grave d'être maladroit. C'est la première fois, après tout.*",
    de: "*Unbeholfen ist okay. Es ist schließlich unser erstes Mal.*"
};

// ============================================================
// 27. friend_6 (day5_4_night)
// KO: "앞으로도 이렇게 메시지를 주고받겠지. 이모티콘 붙이고, 가끔 밥 먹고, 별일 없냐고 물으면 없다고 답하겠지. — 바로 옆인데 넘지 못하는 선. 그게 친구다."
// ============================================================
const fix_friend_6 = {
    en: "*We'll keep texting like this. Attach emoji, grab food sometimes, ask if anything's new and say nothing is. — Right next to each other but a line we can't cross. That's what friends are.*",
    ja: "*これからもこうやってメッセージをやり取りするんだろう。スタンプつけて、たまにご飯食べて、変わりないかと聞かれたらないと答える。——すぐ隣にいるのに越えられない線。それが友達だ。*",
    es: "*Seguiremos mandándonos mensajes así. Con emojis, comiendo juntos a veces, preguntando si hay algo nuevo y respondiendo que no. — Justo al lado pero sin cruzar la línea. Eso es ser amigos.*",
    fr: "*On continuera à s'envoyer des messages comme ça. Avec des emojis, manger ensemble de temps en temps, demander si tout va bien et répondre que oui. — Juste à côté mais une ligne qu'on ne peut pas franchir. C'est ça, l'amitié.*",
    de: "*Wir werden weiter so Nachrichten schreiben. Mit Emojis, ab und zu essen gehen, fragen ob was los ist und sagen, dass nichts los ist. — Direkt nebeneinander, aber eine Linie, die man nicht überschreiten kann. Das ist Freundschaft.*"
};


// ============================================================
// APPLY ALL FIXES
// ============================================================
const allFixes = [
    // text 수정
    { file: 'day1_2_lunch', nodeId: 'lunch_yuna_26', translations: fix_lunch_yuna_26 },
    { file: 'day1_2_lunch', nodeId: 'lunch_seo_after_7', translations: fix_lunch_seo_after_7 },
    { file: 'day1_4_night', nodeId: 'night_seo_late_3', translations: fix_night_seo_late_3 },
    { file: 'day2_3_afterschool', nodeId: 'after2_seo_skinship_2', translations: fix_after2_seo_skinship_2 },
    { file: 'day2_4_night', nodeId: 'night2_flashback_3', translations: fix_night2_flashback_3 },
    { file: 'day2_4_night', nodeId: 'night2_reply_yuna_7', translations: fix_night2_reply_yuna_7 },
    { file: 'day2_4_night', nodeId: 'night2_reply_yuna_6_ins', translations: fix_night2_reply_yuna_6_ins },
    { file: 'day3_2_lunch', nodeId: 'lunch3_meal_10_ins5', translations: fix_lunch3_meal_10_ins5 },
    { file: 'day3_3_afterschool', nodeId: 'after3_confront_5', translations: fix_after3_confront_5 },
    { file: 'day3_3_afterschool', nodeId: 'haeun_warn_5c_ins', translations: fix_haeun_warn_5c_ins },
    { file: 'day3_3_afterschool', nodeId: 'after3_confront_excuse_2', translations: fix_after3_confront_excuse_2 },
    { file: 'day3_4_night', nodeId: 'night3_nightmare_3', translations: fix_night3_nightmare_3 },
    { file: 'day3_4_night', nodeId: 'night3_dream_2', translations: fix_night3_dream_2 },
    { file: 'day3_4_night', nodeId: 'night3_cheat_reflect_5_ins', translations: fix_night3_cheat_reflect_5_ins },
    { file: 'day3_4_night', nodeId: 'night3_faithful_reflect_3', translations: fix_night3_faithful_reflect_3 },
    { file: 'day3_4_night', nodeId: 'night3_faithful_reflect_4', translations: fix_night3_faithful_reflect_4 },
    { file: 'day4_3_afterschool', nodeId: 'confess_seo_yes_6', translations: fix_confess_seo_yes_6 },
    { file: 'day4_3_afterschool', nodeId: 'confess_dain_yes_10_ins', translations: fix_confess_dain_yes_10_ins },
    { file: 'day4_4_night', nodeId: 'wall_seo_pinky_2', translations: fix_wall_seo_pinky_2 },
    { file: 'day5_2_lunch', nodeId: 'tour_yuna_end_2', translations: fix_tour_yuna_end_2 },
    { file: 'day5_3_afterschool', nodeId: 'after5_last_chance_choice', translations: fix_after5_last_chance_choice },
    { file: 'day5_4_night', nodeId: 'true_seo_7', translations: fix_true_seo_7 },
    { file: 'day5_4_night', nodeId: 'good_epilogue_1', translations: fix_good_epilogue_1 },
    { file: 'day5_4_night', nodeId: 'good_epilogue_1_yuna', translations: fix_good_epilogue_1 },
    { file: 'day5_4_night', nodeId: 'good_epilogue_1_dain', translations: fix_good_epilogue_1 },
    { file: 'day5_4_night', nodeId: 'good_epilogue_2', translations: fix_good_epilogue_2 },
    { file: 'day5_4_night', nodeId: 'good_epilogue_2_yuna', translations: fix_good_epilogue_2 },
    { file: 'day5_4_night', nodeId: 'good_epilogue_2_dain', translations: fix_good_epilogue_2 },
    { file: 'day5_4_night', nodeId: 'good_epilogue_3', translations: fix_good_epilogue_3 },
    { file: 'day5_4_night', nodeId: 'good_epilogue_3_yuna', translations: fix_good_epilogue_3 },
    { file: 'day5_4_night', nodeId: 'good_epilogue_3_dain', translations: fix_good_epilogue_3 },
    { file: 'day5_4_night', nodeId: 'friend_6', translations: fix_friend_6 },
];

// choices 수정 (별도 처리)
const choiceFixes = [
    { file: 'day4_4_night', nodeId: 'wall_seo_line_choice', translations: fix_wall_seo_line_choice },
];

const langs = ['en', 'ja', 'es', 'fr', 'de'];
let totalFixed = 0;
let totalSkipped = 0;
let errors = [];

// text 필드 수정
for (const fix of allFixes) {
    for (const lang of langs) {
        try {
            const data = loadJSON(lang, fix.file);
            if (!data[fix.nodeId]) {
                errors.push(`[MISSING] ${lang}/${fix.file} > ${fix.nodeId}`);
                continue;
            }
            const oldText = data[fix.nodeId].text;
            const newText = fix.translations[lang];

            if (oldText === newText) {
                totalSkipped++;
                continue;
            }

            data[fix.nodeId].text = newText;
            saveJSON(lang, fix.file, data);
            console.log(`[FIXED] ${lang}/${fix.file} > ${fix.nodeId}`);
            totalFixed++;
        } catch (e) {
            errors.push(`${lang}/${fix.file} > ${fix.nodeId}: ${e.message}`);
        }
    }
}

// choices 배열 수정
for (const fix of choiceFixes) {
    for (const lang of langs) {
        try {
            const data = loadJSON(lang, fix.file);
            if (!data[fix.nodeId]) {
                errors.push(`[MISSING] ${lang}/${fix.file} > ${fix.nodeId}`);
                continue;
            }
            if (!data[fix.nodeId].choices) {
                errors.push(`[NO CHOICES] ${lang}/${fix.file} > ${fix.nodeId}`);
                continue;
            }

            const oldChoices = JSON.stringify(data[fix.nodeId].choices);
            const newChoices = fix.translations[lang];

            if (oldChoices === JSON.stringify(newChoices)) {
                totalSkipped++;
                continue;
            }

            data[fix.nodeId].choices = newChoices;
            saveJSON(lang, fix.file, data);
            console.log(`[FIXED CHOICES] ${lang}/${fix.file} > ${fix.nodeId}`);
            totalFixed++;
        } catch (e) {
            errors.push(`${lang}/${fix.file} > ${fix.nodeId}: ${e.message}`);
        }
    }
}

console.log(`\n=== Summary ===`);
console.log(`Total fixes applied: ${totalFixed}`);
console.log(`Already correct (skipped): ${totalSkipped}`);
if (errors.length > 0) {
    console.log(`Errors/Missing: ${errors.length}`);
    errors.forEach(e => console.log(`  - ${e}`));
} else {
    console.log(`Errors: 0`);
}
