#!/usr/bin/env node
/**
 * 함정 선택지 신규 노드 5개 언어 번역 일괄 추가
 * - day3_3_afterschool: 67 keys (서연/유나/다인 함정)
 * - day5_1_morning: 26 keys (담임 함정)
 */

const fs = require('fs');
const path = require('path');

// ── 캐릭터 이름 매핑 ──
const NAMES = {
    en: { '서연': 'Seoyeon', '유나': 'Yuna', '다인': 'Dain', '담임선생님': 'Homeroom Teacher' },
    ja: { '서연': 'ソヨン', '유나': 'ユナ', '다인': 'ダイン', '담임선생님': '担任先生' },
    es: { '서연': 'Seoyeon', '유나': 'Yuna', '다인': 'Dain', '담임선생님': 'Profesora' },
    fr: { '서연': 'Seoyeon', '유나': 'Yuna', '다인': 'Dain', '담임선생님': 'Professeure principale' },
    de: { '서연': 'Seoyeon', '유나': 'Yuna', '다인': 'Dain', '담임선생님': 'Klassenlehrerin' }
};

function tx(koName, lang) {
    return NAMES[lang][koName] || koName;
}

// ── Day 3 방과후 — 서연 함정 ──
const seoTraps = {
    en: {
        after3_seo_pity_trap_1: { text: "*Seoyeon slowly raises her head. Her face is — exactly zero. Not cold, not sad. Which is worse.*" },
        after3_seo_pity_trap_2: { text: "...Anyone." },
        after3_seo_pity_trap_3: { text: "Was that meant as comfort?" },
        after3_seo_pity_trap_4: { text: "*Seoyeon wipes the smudged makeup with the back of her hand. Slowly. Every motion measured. She's recovering.*" },
        after3_seo_pity_trap_5: { text: "I didn't become student council president to be 'anyone.'" },
        after3_seo_pity_trap_6: { text: "*The president's face is back. One degree harder than usual. — A face built to bury the unguarded Seoyeon I just saw, *forever*.*" },
        after3_seo_pity_trap_7: { text: "Could you leave? I have work." },
        after3_seo_pity_trap_8: { text: "Seoyeon—" },
        after3_seo_pity_trap_9: { text: "Call me **President**." },
        after3_seo_pity_trap_10: { text: "*I closed the council room door behind me. The hallway was empty. — I tried to comfort her. Sincerely. But for Seoyeon, 'anyone' wasn't comfort, it was demotion. I flattened seven years of her work into a single word.*" }
    },
    ja: {
        after3_seo_pity_trap_1: { text: "*ソヨンがゆっくりと顔を上げる。表情は — きっかり0だ。冷たくも悲しくもない。それがもっと怖い。*" },
        after3_seo_pity_trap_2: { text: "...誰でも。" },
        after3_seo_pity_trap_3: { text: "それ、慰めのつもりで言ったの?" },
        after3_seo_pity_trap_4: { text: "*ソヨンが滲んだ化粧を手の甲で拭う。ゆっくりと。動作の一つ一つが整っている。立て直しているんだ。*" },
        after3_seo_pity_trap_5: { text: "私は『誰でも』になるために生徒会長やってるんじゃない。" },
        after3_seo_pity_trap_6: { text: "*生徒会長の顔が戻ってきた。普段より一段固く。 — さっきの無防備なソヨンを *永遠に* 葬るための顔だ。*" },
        after3_seo_pity_trap_7: { text: "出ていってくれる? 仕事があるの。" },
        after3_seo_pity_trap_8: { text: "ソヨン—" },
        after3_seo_pity_trap_9: { text: "**会長**って呼んで。" },
        after3_seo_pity_trap_10: { text: "*生徒会室のドアを閉めて出てきた。廊下はがらんとしている。 — 慰めようとした。本気で。でもソヨンにとって『誰でも』は慰めじゃなく降格だった。あの人の7年分の努力を、一言で平準化してしまった。*" }
    },
    es: {
        after3_seo_pity_trap_1: { text: "*Seoyeon levanta la cabeza despacio. Su rostro es — exactamente cero. Ni frío ni triste. Eso es peor.*" },
        after3_seo_pity_trap_2: { text: "...Cualquiera." },
        after3_seo_pity_trap_3: { text: "¿Eso lo dijiste como consuelo?" },
        after3_seo_pity_trap_4: { text: "*Seoyeon se limpia el maquillaje corrido con el dorso de la mano. Despacio. Cada movimiento medido. Se está recomponiendo.*" },
        after3_seo_pity_trap_5: { text: "No me hice presidenta del consejo para ser 'cualquiera.'" },
        after3_seo_pity_trap_6: { text: "*Vuelve la cara de la presidenta. Un grado más dura que de costumbre. — Una cara hecha para enterrar *para siempre* a la Seoyeon vulnerable que acabo de ver.*" },
        after3_seo_pity_trap_7: { text: "¿Podrías salir? Tengo trabajo." },
        after3_seo_pity_trap_8: { text: "Seoyeon—" },
        after3_seo_pity_trap_9: { text: "Llámame **Presidenta**." },
        after3_seo_pity_trap_10: { text: "*Cerré la puerta del consejo al salir. El pasillo estaba vacío. — Intenté consolarla. De verdad. Pero para Seoyeon, 'cualquiera' no era consuelo, era una degradación. Aplané siete años de su esfuerzo en una sola palabra.*" }
    },
    fr: {
        after3_seo_pity_trap_1: { text: "*Seoyeon lève lentement la tête. Son visage est — exactement à zéro. Ni froid ni triste. C'est pire.*" },
        after3_seo_pity_trap_2: { text: "...N'importe qui." },
        after3_seo_pity_trap_3: { text: "C'était censé être un réconfort ?" },
        after3_seo_pity_trap_4: { text: "*Seoyeon essuie son maquillage brouillé du dos de la main. Lentement. Chaque geste mesuré. Elle se reprend.*" },
        after3_seo_pity_trap_5: { text: "Je ne suis pas devenue présidente du conseil pour être « n'importe qui »." },
        after3_seo_pity_trap_6: { text: "*Le visage de la présidente est revenu. Un cran plus dur que d'habitude. — Un visage fait pour enterrer *à jamais* la Seoyeon sans défense que je viens de voir.*" },
        after3_seo_pity_trap_7: { text: "Tu peux sortir ? J'ai du travail." },
        after3_seo_pity_trap_8: { text: "Seoyeon—" },
        after3_seo_pity_trap_9: { text: "Appelle-moi **Présidente**." },
        after3_seo_pity_trap_10: { text: "*J'ai fermé la porte du conseil derrière moi. Le couloir était vide. — J'ai voulu la consoler. Sincèrement. Mais pour Seoyeon, « n'importe qui » n'était pas un réconfort, c'était une rétrogradation. J'ai aplati sept ans de ses efforts en un seul mot.*" }
    },
    de: {
        after3_seo_pity_trap_1: { text: "*Seoyeon hebt langsam den Kopf. Ihr Gesicht ist — exakt null. Weder kalt noch traurig. Das ist schlimmer.*" },
        after3_seo_pity_trap_2: { text: "...Jeder." },
        after3_seo_pity_trap_3: { text: "War das als Trost gemeint?" },
        after3_seo_pity_trap_4: { text: "*Seoyeon wischt das verschmierte Make-up mit dem Handrücken weg. Langsam. Jede Bewegung kontrolliert. Sie sammelt sich.*" },
        after3_seo_pity_trap_5: { text: "Ich bin nicht Schülersprecherin geworden, um 'jeder' zu sein." },
        after3_seo_pity_trap_6: { text: "*Das Gesicht der Schülersprecherin ist zurück. Eine Stufe härter als sonst. — Ein Gesicht, gebaut, um die schutzlose Seoyeon, die ich gerade gesehen habe, *für immer* zu begraben.*" },
        after3_seo_pity_trap_7: { text: "Würdest du gehen? Ich habe zu tun." },
        after3_seo_pity_trap_8: { text: "Seoyeon—" },
        after3_seo_pity_trap_9: { text: "Nenn mich **Vorsitzende**." },
        after3_seo_pity_trap_10: { text: "*Ich schloss die Tür des Schülerratsraums hinter mir. Der Flur war leer. — Ich wollte sie trösten. Aufrichtig. Aber für Seoyeon war 'jeder' kein Trost, sondern eine Degradierung. Ich habe sieben Jahre ihrer Arbeit auf ein einziges Wort eingedampft.*" }
    }
};

const seoCorrect = {
    en: {
        after3_seo_correct_1: { text: "*Seoyeon stops. For a moment — just a moment — her words break off. Her eyes searching to confirm whether I really didn't see anything.*" },
        after3_seo_correct_2: { text: "*I bend down, pretending to pick up a pen. Fumbling under the desk. Slowly, on purpose. — Not looking at her. The moment I look, the lie cracks.*" },
        after3_seo_correct_3: { text: "Oh, here it is. — Madam President, is this council room a place where pens go missing?" },
        after3_seo_correct_4: { text: "*I look up. Seoyeon is — wiping the smudged makeup off with the back of her hand. Naturally. As if she'd needed to do it from the start.*" },
        after3_seo_correct_5: { text: "...The disappearing pens are an actual mystery. Thirty a year." },
        after3_seo_correct_6: { text: "The president can't even catch the culprit?" },
        after3_seo_correct_7: { text: "*A small laugh.* If I caught them — students would start fearing the council." },
        after3_seo_correct_8: { text: "*The conversation flows naturally. The person who'd been slumped over the desk, the one with smudged makeup — *neither of them existed* in this council room. We agreed on that. Without saying so.*" },
        after3_seo_correct_9: { text: "...{name}." },
        after3_seo_correct_10: { text: "Yeah." },
        after3_seo_correct_11: { text: "About picking up the pen. — Come pick it up again sometime." },
        after3_seo_correct_12: { text: "*I never said I'd keep her secret. Not saying it was the answer. — For Seoyeon, weakness has to *never have existed*. Only to someone who understood that does Seoyeon offer not a pinky promise but a next appointment.*" }
    },
    ja: {
        after3_seo_correct_1: { text: "*ソヨンが止まる。ほんの一瞬 — 本当に一瞬 — 言葉が途切れる。私が本当に見ていないか確かめようとする目。*" },
        after3_seo_correct_2: { text: "*腰をかがめてペンを拾うふりをする。机の下を探る。わざとゆっくり。 — 視線は送らない。視線を送った瞬間、嘘がバレる。*" },
        after3_seo_correct_3: { text: "あ、ここにあった。 — 会長、この生徒会室ってペンがよく消える場所なんですね?" },
        after3_seo_correct_4: { text: "*顔を上げる。ソヨンが — 滲んだ化粧の跡を手の甲ですっと拭っている。自然に。最初からそれが必要だったかのように。*" },
        after3_seo_correct_5: { text: "...生徒会室のペン消失、本当にミステリーなの。年に30本消える。" },
        after3_seo_correct_6: { text: "生徒会長がそれも捕まえられないんですか?" },
        after3_seo_correct_7: { text: "*ふっ.* 捕まえたら — 生徒たちが生徒会を怖がるでしょ。" },
        after3_seo_correct_8: { text: "*会話が自然に続いていく。さっき机に突っ伏していた人も、化粧が滲んでいた人も — この生徒会室には *いなかった*。二人ともそう合意したのだ。何も言わずに。*" },
        after3_seo_correct_9: { text: "...{name}。" },
        after3_seo_correct_10: { text: "うん。" },
        after3_seo_correct_11: { text: "ペンを拾うこと。 — 次もたまに拾いに来て。" },
        after3_seo_correct_12: { text: "*秘密を守るとは最後まで言わなかった。言わなかったのが正解だった。 — ソヨンにとって弱さは *初めから存在してはいけない* ものだ。それを理解した相手にだけ、ソヨンは小指ではなく次の約束を差し出す。*" }
    },
    es: {
        after3_seo_correct_1: { text: "*Seoyeon se detiene. Por un instante — solo un instante — sus palabras se cortan. Sus ojos buscando confirmar si de verdad no vi nada.*" },
        after3_seo_correct_2: { text: "*Me agacho fingiendo recoger un bolígrafo. Tanteando bajo el escritorio. A propósito despacio. — Sin mirarla. En el momento en que la mire, la mentira se rompe.*" },
        after3_seo_correct_3: { text: "Ah, aquí está. — Presidenta, ¿este consejo es un sitio donde los bolis desaparecen mucho?" },
        after3_seo_correct_4: { text: "*Levanto la vista. Seoyeon está — limpiándose el maquillaje corrido con el dorso de la mano. Con naturalidad. Como si lo hubiera necesitado desde el principio.*" },
        after3_seo_correct_5: { text: "...Lo de los bolis desaparecidos es un misterio real. Treinta al año." },
        after3_seo_correct_6: { text: "¿La presidenta no puede ni atrapar al culpable?" },
        after3_seo_correct_7: { text: "*Una pequeña risa.* Si los atrapara — los estudiantes empezarían a temer al consejo." },
        after3_seo_correct_8: { text: "*La conversación fluye con naturalidad. La persona que estaba derrumbada sobre el escritorio, la del maquillaje corrido — *ninguna de las dos existió* en este consejo. Las dos lo acordamos. Sin decirlo.*" },
        after3_seo_correct_9: { text: "...{name}." },
        after3_seo_correct_10: { text: "Sí." },
        after3_seo_correct_11: { text: "Lo de recoger el boli. — Vuelve a recogerlo de vez en cuando." },
        after3_seo_correct_12: { text: "*Nunca dije que guardaría su secreto. No decirlo fue la respuesta. — Para Seoyeon, la debilidad tiene que *no haber existido nunca*. Solo a quien lo entiende, Seoyeon ofrece no un meñique sino una próxima cita.*" }
    },
    fr: {
        after3_seo_correct_1: { text: "*Seoyeon s'arrête. Un instant — un seul instant — ses mots se cassent. Ses yeux cherchant à confirmer si je n'ai vraiment rien vu.*" },
        after3_seo_correct_2: { text: "*Je me penche en faisant semblant de ramasser un stylo. Je tâtonne sous le bureau. Lentement, exprès. — Sans la regarder. À l'instant où je la regarde, le mensonge craque.*" },
        after3_seo_correct_3: { text: "Ah, le voilà. — Madame la Présidente, ce conseil est un endroit où les stylos disparaissent beaucoup ?" },
        after3_seo_correct_4: { text: "*Je relève la tête. Seoyeon est — en train d'essuyer son maquillage brouillé du dos de la main. Naturellement. Comme si elle en avait eu besoin depuis le début.*" },
        after3_seo_correct_5: { text: "...Les stylos qui disparaissent, c'est un vrai mystère. Trente par an." },
        after3_seo_correct_6: { text: "La présidente n'arrive même pas à attraper le coupable ?" },
        after3_seo_correct_7: { text: "*Petit rire.* Si je les attrape — les élèves commenceraient à craindre le conseil." },
        after3_seo_correct_8: { text: "*La conversation s'enchaîne naturellement. La personne effondrée sur le bureau, celle au maquillage brouillé — *aucune n'a existé* dans ce conseil. Nous en avons toutes les deux convenu. Sans rien dire.*" },
        after3_seo_correct_9: { text: "...{name}." },
        after3_seo_correct_10: { text: "Oui." },
        after3_seo_correct_11: { text: "Pour le stylo. — Reviens en ramasser un de temps en temps." },
        after3_seo_correct_12: { text: "*Je n'ai jamais dit que je garderais son secret. Ne pas le dire, c'était la réponse. — Pour Seoyeon, la faiblesse ne doit *jamais avoir existé*. C'est seulement à celui qui comprend cela que Seoyeon tend non pas un petit doigt, mais un prochain rendez-vous.*" }
    },
    de: {
        after3_seo_correct_1: { text: "*Seoyeon hält inne. Einen Moment — nur einen Moment — bricht ihr Satz ab. Ihre Augen suchen, ob ich wirklich nichts gesehen habe.*" },
        after3_seo_correct_2: { text: "*Ich beuge mich vor und tue so, als ob ich einen Stift aufhebe. Taste unter dem Tisch herum. Absichtlich langsam. — Ohne sie anzusehen. In dem Moment, in dem ich sie ansehe, bricht die Lüge auf.*" },
        after3_seo_correct_3: { text: "Ah, hier ist er. — Frau Vorsitzende, ist das Schülerratsbüro ein Ort, an dem viele Stifte verschwinden?" },
        after3_seo_correct_4: { text: "*Ich hebe den Kopf. Seoyeon — wischt sich das verschmierte Make-up mit dem Handrücken ab. Natürlich. Als hätte sie es von Anfang an gebraucht.*" },
        after3_seo_correct_5: { text: "...Die verschwindenden Stifte sind ein echtes Rätsel. Dreißig pro Jahr." },
        after3_seo_correct_6: { text: "Kann die Vorsitzende den Täter nicht mal fassen?" },
        after3_seo_correct_7: { text: "*Ein kleines Lachen.* Wenn ich sie fasse — fangen die Schüler an, den Rat zu fürchten." },
        after3_seo_correct_8: { text: "*Das Gespräch fließt von selbst weiter. Die Person, die über dem Schreibtisch zusammengesackt war, die mit dem verschmierten Make-up — *keine von beiden existierte* in diesem Schülerratsbüro. Wir haben uns beide darauf geeinigt. Ohne ein Wort.*" },
        after3_seo_correct_9: { text: "...{name}." },
        after3_seo_correct_10: { text: "Ja." },
        after3_seo_correct_11: { text: "Das mit dem Stift aufheben. — Komm ab und zu wieder welche aufheben." },
        after3_seo_correct_12: { text: "*Ich habe nie gesagt, dass ich ihr Geheimnis bewahren würde. Es nicht zu sagen war die Antwort. — Für Seoyeon darf Schwäche *nie existiert haben*. Nur jemandem, der das versteht, reicht Seoyeon nicht den kleinen Finger, sondern das nächste Treffen.*" }
    }
};

// ── Day 3 방과후 — 유나 함정 ──
const yunaTraps = {
    en: {
        after3_yuna_decode_trap_1: { text: "*Yuna clutches the notebook tighter. Her knuckles go white.*" },
        after3_yuna_decode_trap_2: { text: "...It's not." },
        after3_yuna_decode_trap_3: { text: "Not? But look at this part — 'reading by the classroom window—'" },
        after3_yuna_decode_trap_4: { text: "**I said it isn't.**" },
        after3_yuna_decode_trap_5: { text: "*Yuna shoves the notebook into her bag. Not her usual slow movements. A hand running away.*" },
        after3_yuna_decode_trap_6: { text: "...People like you — that's why I can't write." },
        after3_yuna_decode_trap_7: { text: "What?" },
        after3_yuna_decode_trap_8: { text: "If I get caught even inside fiction — there's nowhere left to escape." },
        after3_yuna_decode_trap_9: { text: "*Yuna shoulders her bag and stands up. Heads for the ladder. Doesn't look back as usual — no, this time she *can't* look back.*" },
        after3_yuna_decode_trap_10: { text: "...This place. I'm locking it from now on." },
        after3_yuna_decode_trap_11: { text: "*Footsteps going down the ladder. I'm alone in the attic. Where the notebook had been, only fingerprints remain. — I learned that noticing is love. But for some people, *pretending not to notice* is love. For Yuna, fiction was *the place she escaped reality to*. Following her even there meant breaking her last refuge.*" }
    },
    ja: {
        after3_yuna_decode_trap_1: { text: "*ユナがノートをさらに強く抱きしめる。指の節が白くなる。*" },
        after3_yuna_decode_trap_2: { text: "...違う。" },
        after3_yuna_decode_trap_3: { text: "違うって? でもこの部分見てよ、『教室の窓際で本を読んでいた——』" },
        after3_yuna_decode_trap_4: { text: "**違うって言ったでしょ。**" },
        after3_yuna_decode_trap_5: { text: "*ユナがノートをカバンに押し込む。いつものゆっくりした動作じゃない。逃げる手だ。*" },
        after3_yuna_decode_trap_6: { text: "...あんたみたいな人がいるから — 書けなくなる。" },
        after3_yuna_decode_trap_7: { text: "え?" },
        after3_yuna_decode_trap_8: { text: "小説の中までバレたら — 逃げ場がなくなる。" },
        after3_yuna_decode_trap_9: { text: "*ユナがカバンを背負って立ち上がる。はしごの方へ向かう。いつもみたいに振り返らない — いや。今回は *振り返れない* んだ。*" },
        after3_yuna_decode_trap_10: { text: "...ここ。これから鍵かけとく。" },
        after3_yuna_decode_trap_11: { text: "*はしごを下りていく足音。屋根裏に一人残される。ノートがあった場所に指の跡だけが残っている。 — 気づくことが愛だと教わった。でもある人にとっては *気づかないふり* が愛だ。ユナにとって小説は *現実から逃げた場所* だった。そこまで追いかけたのは、最後の逃げ場を壊したことだった。*" }
    },
    es: {
        after3_yuna_decode_trap_1: { text: "*Yuna aprieta más el cuaderno contra el pecho. Los nudillos se le ponen blancos.*" },
        after3_yuna_decode_trap_2: { text: "...No." },
        after3_yuna_decode_trap_3: { text: "¿No? Pero mira esta parte: 'leyendo junto a la ventana del aula—'" },
        after3_yuna_decode_trap_4: { text: "**Te dije que no.**" },
        after3_yuna_decode_trap_5: { text: "*Yuna mete el cuaderno en la mochila a empujones. No es su movimiento lento de siempre. Es una mano huyendo.*" },
        after3_yuna_decode_trap_6: { text: "...Por gente como tú — no puedo escribir." },
        after3_yuna_decode_trap_7: { text: "¿Qué?" },
        after3_yuna_decode_trap_8: { text: "Si me descubren incluso dentro de la ficción — no me queda dónde huir." },
        after3_yuna_decode_trap_9: { text: "*Yuna se echa la mochila al hombro y se levanta. Va hacia la escalera. No mira atrás como siempre — no. Esta vez *no puede* mirar atrás.*" },
        after3_yuna_decode_trap_10: { text: "...Este sitio. A partir de ahora lo cerraré con llave." },
        after3_yuna_decode_trap_11: { text: "*Pasos bajando por la escalera. Me quedo solo en el desván. Donde estaba el cuaderno, solo quedan huellas de dedos. — Me enseñaron que darse cuenta es amar. Pero para algunas personas, *fingir no darse cuenta* es amor. Para Yuna, la ficción era *el lugar al que huía de la realidad*. Seguirla hasta allí fue romper su último refugio.*" }
    },
    fr: {
        after3_yuna_decode_trap_1: { text: "*Yuna serre le cahier plus fort contre elle. Les jointures de ses doigts blanchissent.*" },
        after3_yuna_decode_trap_2: { text: "...Non." },
        after3_yuna_decode_trap_3: { text: "Non ? Mais regarde ce passage, « lisant près de la fenêtre de la classe—»" },
        after3_yuna_decode_trap_4: { text: "**J'ai dit non.**" },
        after3_yuna_decode_trap_5: { text: "*Yuna fourre le cahier dans son sac. Pas ses gestes lents habituels. Une main qui fuit.*" },
        after3_yuna_decode_trap_6: { text: "...À cause des gens comme toi — je ne peux plus écrire." },
        after3_yuna_decode_trap_7: { text: "Hein ?" },
        after3_yuna_decode_trap_8: { text: "Si on me reconnaît même dans la fiction — il ne me reste plus aucun endroit où fuir." },
        after3_yuna_decode_trap_9: { text: "*Yuna met son sac sur l'épaule et se lève. Elle se dirige vers l'échelle. Elle ne se retourne pas comme d'habitude — non. Cette fois, elle *ne peut pas* se retourner.*" },
        after3_yuna_decode_trap_10: { text: "...Cet endroit. Je vais le fermer à clé désormais." },
        after3_yuna_decode_trap_11: { text: "*Bruits de pas descendant l'échelle. Je reste seul dans le grenier. Là où était le cahier, il ne reste que des traces de doigts. — On m'a appris que remarquer, c'est aimer. Mais pour certaines personnes, *faire semblant de ne pas remarquer*, c'est aimer. Pour Yuna, la fiction était *l'endroit où elle s'échappait du réel*. La suivre jusque-là, c'était détruire son dernier refuge.*" }
    },
    de: {
        after3_yuna_decode_trap_1: { text: "*Yuna drückt das Notizbuch fester an sich. Ihre Knöchel werden weiß.*" },
        after3_yuna_decode_trap_2: { text: "...Nein." },
        after3_yuna_decode_trap_3: { text: "Nein? Aber schau dir diese Stelle an, 'las am Klassenzimmerfenster—'" },
        after3_yuna_decode_trap_4: { text: "**Ich sagte, es ist nicht so.**" },
        after3_yuna_decode_trap_5: { text: "*Yuna stopft das Notizbuch in ihre Tasche. Nicht ihre üblichen langsamen Bewegungen. Eine fliehende Hand.*" },
        after3_yuna_decode_trap_6: { text: "...Wegen Leuten wie dir — kann ich nicht mehr schreiben." },
        after3_yuna_decode_trap_7: { text: "Was?" },
        after3_yuna_decode_trap_8: { text: "Wenn man mich sogar in der Fiktion erkennt — habe ich keinen Ort mehr zum Fliehen." },
        after3_yuna_decode_trap_9: { text: "*Yuna nimmt ihre Tasche und steht auf. Geht zur Leiter. Sie schaut nicht zurück wie sonst — nein. Diesmal *kann* sie nicht zurückschauen.*" },
        after3_yuna_decode_trap_10: { text: "...Dieser Ort. Ab jetzt schließe ich ihn ab." },
        after3_yuna_decode_trap_11: { text: "*Schritte, die die Leiter hinuntergehen. Ich bleibe allein im Dachboden. Wo das Notizbuch lag, sind nur noch Fingerspuren. — Man lehrte mich, dass Bemerken Liebe ist. Aber für manche Menschen ist *so tun, als ob man nicht bemerkt*, Liebe. Für Yuna war Fiktion *der Ort, an den sie vor der Realität floh*. Sie bis dorthin zu verfolgen, hieß ihren letzten Zufluchtsort zu zerstören.*" }
    }
};

const yunaCorrect = {
    en: {
        after3_yuna_correct_1: { text: "*Yuna's grip on the notebook loosens — just slightly. For maybe one second.*" },
        after3_yuna_correct_2: { text: "...The author." },
        after3_yuna_correct_3: { text: "Yeah. Whose is this? Was it published?" },
        after3_yuna_correct_4: { text: "...I don't know. Probably not published." },
        after3_yuna_correct_5: { text: "Shame. Something this good shouldn't stay buried." },
        after3_yuna_correct_6: { text: "*Yuna sets the notebook back down on the desk. The hand that had been clutching it — slowly relaxes. The hand that had been *defending* the notebook becomes a hand *displaying* it.*" },
        after3_yuna_correct_7: { text: "...Want to borrow it?" },
        after3_yuna_correct_8: { text: "Really? Without the author's permission?" },
        after3_yuna_correct_9: { text: "...Let's just say the author allows it." },
        after3_yuna_correct_10: { text: "*Yuna holds the notebook out. With both hands. Not the way you lend a book — the way you *deliberately* hand something over.*" },
        after3_yuna_correct_11: { text: "*The notebook lands heavy in my hands. Not the weight of paper. — A weight only someone who knows Yuna is *the author* and yet *doesn't say so* can ever be handed.*" },
        after3_yuna_correct_12: { text: "When you're done — write one line for the author. Anonymously." }
    },
    ja: {
        after3_yuna_correct_1: { text: "*ユナがノートを抱きしめる指が — ほんの少しだけ緩む。1秒ほど。*" },
        after3_yuna_correct_2: { text: "...作家。" },
        after3_yuna_correct_3: { text: "うん。これ誰の? 出版されてるの?" },
        after3_yuna_correct_4: { text: "...知らない。たぶん出版はされてないと思う。" },
        after3_yuna_correct_5: { text: "もったいない。こんなのが埋もれてるのはダメだよ。" },
        after3_yuna_correct_6: { text: "*ユナがノートを机に戻す。胸に抱いていた手が — ゆっくりと解ける。ノートを *守っていた* 手が *見せる* 手に変わる。*" },
        after3_yuna_correct_7: { text: "...貸そうか?" },
        after3_yuna_correct_8: { text: "本当に? 作家の許可もなしに?" },
        after3_yuna_correct_9: { text: "...作家が許可したことにする。" },
        after3_yuna_correct_10: { text: "*ユナがノートを差し出す。両手で。本を貸す姿勢じゃなくて — 何かを *意識的に手渡す* 姿勢だ。*" },
        after3_yuna_correct_11: { text: "*受け取る手に重みが乗る。紙の重さじゃない。 — ユナが *作家* だと知られたことを分かっていながら、それを *口に出さなかった* 相手にだけ手渡せる重さだ。*" },
        after3_yuna_correct_12: { text: "読み終わったら — 作家に一行だけ書いて。匿名で。" }
    },
    es: {
        after3_yuna_correct_1: { text: "*Los dedos de Yuna que abrazan el cuaderno — se aflojan, solo un poco. Como un segundo.*" },
        after3_yuna_correct_2: { text: "...El autor." },
        after3_yuna_correct_3: { text: "Sí. ¿De quién es esto? ¿Está publicado?" },
        after3_yuna_correct_4: { text: "...No sé. Probablemente no esté publicado." },
        after3_yuna_correct_5: { text: "Qué pena. Algo así no debería quedar enterrado." },
        after3_yuna_correct_6: { text: "*Yuna vuelve a poner el cuaderno en el escritorio. La mano que lo abrazaba — se relaja despacio. La mano que *defendía* el cuaderno se convierte en una mano que lo *muestra*.*" },
        after3_yuna_correct_7: { text: "...¿Te lo presto?" },
        after3_yuna_correct_8: { text: "¿En serio? ¿Sin permiso del autor?" },
        after3_yuna_correct_9: { text: "...Digamos que el autor lo permite." },
        after3_yuna_correct_10: { text: "*Yuna me tiende el cuaderno. Con las dos manos. No la postura de prestar un libro — la postura de *entregar conscientemente* algo.*" },
        after3_yuna_correct_11: { text: "*Llega pesado a mis manos. No el peso del papel. — Un peso que solo se le entrega a alguien que sabe que Yuna es *la autora* y aun así *no lo dice*.*" },
        after3_yuna_correct_12: { text: "Cuando lo termines — escríbele una línea al autor. De forma anónima." }
    },
    fr: {
        after3_yuna_correct_1: { text: "*Les doigts de Yuna qui serrent le cahier — se desserrent juste un peu. Une seconde environ.*" },
        after3_yuna_correct_2: { text: "...L'auteur." },
        after3_yuna_correct_3: { text: "Oui. C'est de qui ? C'est publié ?" },
        after3_yuna_correct_4: { text: "...Je ne sais pas. Sûrement pas publié." },
        after3_yuna_correct_5: { text: "Dommage. Quelque chose comme ça ne devrait pas rester enterré." },
        after3_yuna_correct_6: { text: "*Yuna repose le cahier sur le bureau. La main qui le serrait — se détend lentement. La main qui *défendait* le cahier devient une main qui le *montre*.*" },
        after3_yuna_correct_7: { text: "...Tu veux l'emprunter ?" },
        after3_yuna_correct_8: { text: "Vraiment ? Sans la permission de l'auteur ?" },
        after3_yuna_correct_9: { text: "...Disons que l'auteur le permet." },
        after3_yuna_correct_10: { text: "*Yuna tend le cahier. Des deux mains. Pas la posture qu'on prend pour prêter un livre — la posture qu'on prend pour *remettre consciemment* quelque chose.*" },
        after3_yuna_correct_11: { text: "*Il arrive lourd dans mes mains. Pas le poids du papier. — Un poids qu'on ne tend qu'à quelqu'un qui sait que Yuna est *l'auteure* et qui pourtant *ne le dit pas*.*" },
        after3_yuna_correct_12: { text: "Quand tu auras fini — écris une ligne pour l'auteur. Anonymement." }
    },
    de: {
        after3_yuna_correct_1: { text: "*Yunas Finger um das Notizbuch — lockern sich nur ein bisschen. Etwa eine Sekunde lang.*" },
        after3_yuna_correct_2: { text: "...Der Autor." },
        after3_yuna_correct_3: { text: "Ja. Wem gehört das? Ist es veröffentlicht?" },
        after3_yuna_correct_4: { text: "...Ich weiß nicht. Wahrscheinlich nicht veröffentlicht." },
        after3_yuna_correct_5: { text: "Schade. Sowas sollte nicht vergraben bleiben." },
        after3_yuna_correct_6: { text: "*Yuna legt das Notizbuch wieder auf den Tisch. Die Hand, die es festhielt — entspannt sich langsam. Die Hand, die das Notizbuch *verteidigte*, wird zu einer Hand, die es *zeigt*.*" },
        after3_yuna_correct_7: { text: "...Soll ich's dir leihen?" },
        after3_yuna_correct_8: { text: "Wirklich? Ohne Erlaubnis des Autors?" },
        after3_yuna_correct_9: { text: "...Sagen wir, der Autor erlaubt es." },
        after3_yuna_correct_10: { text: "*Yuna reicht das Notizbuch hin. Mit beiden Händen. Nicht die Haltung, mit der man ein Buch verleiht — die Haltung, mit der man etwas *bewusst übergibt*.*" },
        after3_yuna_correct_11: { text: "*Es liegt schwer in meinen Händen. Nicht das Gewicht von Papier. — Ein Gewicht, das man nur jemandem reicht, der weiß, dass Yuna *die Autorin* ist, und es trotzdem *nicht ausspricht*.*" },
        after3_yuna_correct_12: { text: "Wenn du fertig bist — schreib dem Autor eine Zeile. Anonym." }
    }
};

// ── Day 3 방과후 — 다인 함정 ──
const dainTraps = {
    en: {
        after3_dain_pity_trap_1: { text: "*Dain's hand stops rubbing her knee. Slowly, she lifts her head.*" },
        after3_dain_pity_trap_2: { text: "...Pushing it." },
        after3_dain_pity_trap_3: { text: "Hey. I'm not pushing it. This is just — bad form." },
        after3_dain_pity_trap_4: { text: "*Dain stands up. Pretends not to notice her knee trembling slightly. Grabs her bag.*" },
        after3_dain_pity_trap_5: { text: "...Don't look at me like that. Not you too." },
        after3_dain_pity_trap_6: { text: "Like what?" },
        after3_dain_pity_trap_7: { text: "Like I'm about to break." },
        after3_dain_pity_trap_8: { text: "*Dain walks toward the gym door. She doesn't run like usual. That hurts more.*" },
        after3_dain_pity_trap_9: { text: "Coach does it. My parents do it. Everyone does it. — I thought you wouldn't." },
        after3_dain_pity_trap_10: { text: "*The gym door closes. Not with the usual slam. Quietly. — That's heavier. I made the face Dain hates most. Knowing it. With good intentions. That makes it worse.*" }
    },
    ja: {
        after3_dain_pity_trap_1: { text: "*ダインの膝をさすっていた手が止まる。ゆっくりと顔を上げる。*" },
        after3_dain_pity_trap_2: { text: "...無理。" },
        after3_dain_pity_trap_3: { text: "ねえ。無理してないって。これただ — 姿勢が悪かっただけ。" },
        after3_dain_pity_trap_4: { text: "*ダインが立ち上がる。膝が少し震えるのを見ないふりする。カバンを取る。*" },
        after3_dain_pity_trap_5: { text: "...あんたまでそんな目で見ないで。" },
        after3_dain_pity_trap_6: { text: "そんなって?" },
        after3_dain_pity_trap_7: { text: "今にも壊れそうって目で。" },
        after3_dain_pity_trap_8: { text: "*ダインが体育館のドアの方へ歩いていく。いつもみたいに走らない。それがもっと痛い。*" },
        after3_dain_pity_trap_9: { text: "コーチもそう。親もそう。みんなそう。 — あんたはそうじゃないと思ってたのに。" },
        after3_dain_pity_trap_10: { text: "*体育館のドアが閉まる。いつものバタン、じゃない。そっと。 — それがもっと重い。ダインが一番嫌う表情を私が浮かべた。分かっていて。善意で。だからもっと最悪だ。*" }
    },
    es: {
        after3_dain_pity_trap_1: { text: "*La mano de Dain que se frotaba la rodilla se detiene. Despacio, levanta la cabeza.*" },
        after3_dain_pity_trap_2: { text: "...Forzar." },
        after3_dain_pity_trap_3: { text: "Eh. No estoy forzando. Esto es solo — mala postura." },
        after3_dain_pity_trap_4: { text: "*Dain se levanta. Finge no notar que la rodilla le tiembla un poco. Coge la mochila.*" },
        after3_dain_pity_trap_5: { text: "...Tú no me mires así." },
        after3_dain_pity_trap_6: { text: "¿Así cómo?" },
        after3_dain_pity_trap_7: { text: "Como si estuviera a punto de romperme." },
        after3_dain_pity_trap_8: { text: "*Dain camina hacia la puerta del gimnasio. No corre como siempre. Eso duele más.*" },
        after3_dain_pity_trap_9: { text: "El entrenador lo hace. Mis padres lo hacen. Todos lo hacen. — Pensé que tú no." },
        after3_dain_pity_trap_10: { text: "*La puerta del gimnasio se cierra. No con el portazo de siempre. Despacio. — Eso pesa más. Puse la cara que Dain más odia. Sabiéndolo. Con buena intención. Por eso es aún peor.*" }
    },
    fr: {
        after3_dain_pity_trap_1: { text: "*La main de Dain qui frottait son genou s'arrête. Lentement, elle lève la tête.*" },
        after3_dain_pity_trap_2: { text: "...Forcer." },
        after3_dain_pity_trap_3: { text: "Hé. Je ne force pas. C'est juste — une mauvaise posture." },
        after3_dain_pity_trap_4: { text: "*Dain se lève. Fait semblant de ne pas voir son genou trembler légèrement. Attrape son sac.*" },
        after3_dain_pity_trap_5: { text: "...Toi, ne me regarde pas comme ça." },
        after3_dain_pity_trap_6: { text: "Comme quoi ?" },
        after3_dain_pity_trap_7: { text: "Comme si j'étais sur le point de me casser." },
        after3_dain_pity_trap_8: { text: "*Dain marche vers la porte du gymnase. Elle ne court pas comme d'habitude. Ça fait plus mal.*" },
        after3_dain_pity_trap_9: { text: "Le coach fait pareil. Mes parents font pareil. Tout le monde fait pareil. — Je pensais que toi, non." },
        after3_dain_pity_trap_10: { text: "*La porte du gymnase se referme. Pas le claquement habituel. Tout doucement. — C'est plus lourd. J'ai fait le visage que Dain déteste le plus. En le sachant. Avec de bonnes intentions. C'est ce qui rend ça encore pire.*" }
    },
    de: {
        after3_dain_pity_trap_1: { text: "*Dains Hand, die ihr Knie rieb, hält inne. Langsam hebt sie den Kopf.*" },
        after3_dain_pity_trap_2: { text: "...Übertreiben." },
        after3_dain_pity_trap_3: { text: "Hey. Ich übertreibe nicht. Das ist nur — falsche Haltung." },
        after3_dain_pity_trap_4: { text: "*Dain steht auf. Tut so, als ob sie nicht bemerkt, dass ihr Knie leicht zittert. Greift nach ihrer Tasche.*" },
        after3_dain_pity_trap_5: { text: "...Schau du mich nicht auch so an." },
        after3_dain_pity_trap_6: { text: "Wie?" },
        after3_dain_pity_trap_7: { text: "Als würde ich gleich zerbrechen." },
        after3_dain_pity_trap_8: { text: "*Dain geht zur Hallentür. Sie rennt nicht wie sonst. Das tut mehr weh.*" },
        after3_dain_pity_trap_9: { text: "Der Trainer macht es. Meine Eltern machen es. Alle machen es. — Ich dachte, du nicht." },
        after3_dain_pity_trap_10: { text: "*Die Hallentür schließt sich. Nicht mit dem üblichen Knall. Leise. — Das ist schwerer. Ich habe das Gesicht gemacht, das Dain am meisten hasst. Wissentlich. Mit guten Absichten. Deshalb ist es noch schlimmer.*" }
    }
};

const dainCorrect = {
    en: {
        after3_dain_correct_1: { text: "*Dain stops. — She expected the knee question. She expected to be treated like a patient. A faint crack in her expression.*" },
        after3_dain_correct_2: { text: "...Hey." },
        after3_dain_correct_3: { text: "Why." },
        after3_dain_correct_4: { text: "You're being weird." },
        after3_dain_correct_5: { text: "Is that good weird or bad weird." },
        after3_dain_correct_6: { text: "...I don't know. But pick up the ball first. You really won't catch this one." },
        after3_dain_correct_7: { text: "*Dain stands up. Rolls her knee once, lightly. Unconsciously. And then — sets up her toss. Same as always.*" },
        after3_dain_correct_8: { text: "Here it comes, transfer student!" },
        after3_dain_correct_9: { text: "*The serve flies. I miss it. The ball hits my wrist and ricochets off the ceiling. Dain claps and laughs. A real laugh. First one today.*" },
        after3_dain_correct_10: { text: "See? I won! ...Ah." },
        after3_dain_correct_11: { text: "*As Dain lands — her right knee buckles slightly. One second. Her face is still smiling but her hand goes to the knee. This time she doesn't hide it. There's no need to hide it anymore.*" },
        after3_dain_correct_12: { text: "...You know what. This thing. It's been going on a while." }
    },
    ja: {
        after3_dain_correct_1: { text: "*ダインが止まる。 — 膝の話を切り出すと思ってた。患者扱いされると思ってた。表情に微かなひび。*" },
        after3_dain_correct_2: { text: "...ねえ。" },
        after3_dain_correct_3: { text: "なに。" },
        after3_dain_correct_4: { text: "あんた、ちょっと変。" },
        after3_dain_correct_5: { text: "変なのって、いい変?悪い変?" },
        after3_dain_correct_6: { text: "...知らない。とりあえずボール取って。あんた本当に取れないから。" },
        after3_dain_correct_7: { text: "*ダインが立ち上がる。膝を一度、軽く回す。無意識に。そして — トスの構えを取る。いつもと同じように。*" },
        after3_dain_correct_8: { text: "いきます、転校生!" },
        after3_dain_correct_9: { text: "*サーブが飛んでくる。取れない。ボールが手首に当たって天井に跳ねる。ダインが拍手しながら笑う。本物の笑い。今日初めて見る。*" },
        after3_dain_correct_10: { text: "ほら! 私の勝ち! ...あ。" },
        after3_dain_correct_11: { text: "*ダインが着地しながら — 右膝が少し曲がる。1秒。表情は笑っているのに手が膝にいく。今度は隠さない。隠す必要がなくなったんだ。*" },
        after3_dain_correct_12: { text: "...あのさ。実はこれ。ちょっと前から。" }
    },
    es: {
        after3_dain_correct_1: { text: "*Dain se detiene. — Esperaba la pregunta sobre la rodilla. Esperaba que la tratara como a una paciente. Una pequeña grieta en su expresión.*" },
        after3_dain_correct_2: { text: "...Oye." },
        after3_dain_correct_3: { text: "Qué." },
        after3_dain_correct_4: { text: "Estás raro." },
        after3_dain_correct_5: { text: "¿Raro bueno o raro malo?" },
        after3_dain_correct_6: { text: "...No sé. Pero primero coge el balón. De verdad no vas a poder atraparlo." },
        after3_dain_correct_7: { text: "*Dain se levanta. Gira la rodilla una vez, suavemente. Inconscientemente. Y entonces — adopta su postura de saque. Igual que siempre.*" },
        after3_dain_correct_8: { text: "¡Allá va, transferido!" },
        after3_dain_correct_9: { text: "*El saque vuela. No lo atrapo. La pelota me da en la muñeca y rebota en el techo. Dain aplaude y se ríe. Una risa de verdad. La primera de hoy.*" },
        after3_dain_correct_10: { text: "¿Viste? ¡Gané! ...Ah." },
        after3_dain_correct_11: { text: "*Al caer, la rodilla derecha de Dain se dobla un poco. Un segundo. Su cara sigue sonriendo pero la mano va a la rodilla. Esta vez no lo esconde. Ya no hace falta esconderlo.*" },
        after3_dain_correct_12: { text: "...Sabes qué. Esto. Hace tiempo que viene." }
    },
    fr: {
        after3_dain_correct_1: { text: "*Dain s'arrête. — Elle s'attendait à la question du genou. Elle s'attendait à être traitée comme une malade. Une légère fissure dans son expression.*" },
        after3_dain_correct_2: { text: "...Hé." },
        after3_dain_correct_3: { text: "Quoi." },
        after3_dain_correct_4: { text: "T'es bizarre." },
        after3_dain_correct_5: { text: "Bizarre dans le bon sens ou dans le mauvais ?" },
        after3_dain_correct_6: { text: "...Je sais pas. Mais d'abord, prends le ballon. Tu vas vraiment pas l'attraper." },
        after3_dain_correct_7: { text: "*Dain se lève. Fait rouler son genou une fois, légèrement. Inconsciemment. Et puis — prend sa position de service. Comme d'habitude.*" },
        after3_dain_correct_8: { text: "J'arrive, transfert !" },
        after3_dain_correct_9: { text: "*Le service arrive. Je le rate. La balle frappe mon poignet et rebondit au plafond. Dain applaudit en riant. Un vrai rire. Le premier de la journée.*" },
        after3_dain_correct_10: { text: "T'as vu ? J'ai gagné ! ...Ah." },
        after3_dain_correct_11: { text: "*En atterrissant, le genou droit de Dain se plie légèrement. Une seconde. Son visage sourit toujours mais sa main va au genou. Cette fois, elle ne le cache pas. Plus besoin de le cacher.*" },
        after3_dain_correct_12: { text: "...Tu sais quoi. Ce truc. Ça dure depuis un moment." }
    },
    de: {
        after3_dain_correct_1: { text: "*Dain hält inne. — Sie hatte die Knie-Frage erwartet. Sie hatte erwartet, wie eine Patientin behandelt zu werden. Ein feiner Riss in ihrer Miene.*" },
        after3_dain_correct_2: { text: "...Hey." },
        after3_dain_correct_3: { text: "Was." },
        after3_dain_correct_4: { text: "Du bist komisch." },
        after3_dain_correct_5: { text: "Komisch gut oder komisch schlecht?" },
        after3_dain_correct_6: { text: "...Weiß nicht. Aber heb erstmal den Ball auf. Du wirst ihn echt nicht fangen." },
        after3_dain_correct_7: { text: "*Dain steht auf. Rollt ihr Knie einmal, leicht. Unbewusst. Und dann — nimmt sie die Aufschlagstellung ein. Wie immer.*" },
        after3_dain_correct_8: { text: "Es geht los, Neue!" },
        after3_dain_correct_9: { text: "*Der Aufschlag fliegt. Ich verfehle ihn. Der Ball trifft mein Handgelenk und prallt von der Decke ab. Dain klatscht und lacht. Ein echtes Lachen. Das erste heute.*" },
        after3_dain_correct_10: { text: "Siehst du? Ich hab gewonnen! ...Ah." },
        after3_dain_correct_11: { text: "*Beim Landen knickt Dains rechtes Knie leicht ein. Eine Sekunde. Ihr Gesicht lächelt noch, aber ihre Hand greift zum Knie. Diesmal versteckt sie es nicht. Sie muss es nicht mehr verstecken.*" },
        after3_dain_correct_12: { text: "...Weißt du was. Das hier. Das geht schon eine Weile so." }
    }
};

// ── Day 5 아침 — 담임 함정 ──
const teacherTraps = {
    en: {
        hidden_homeroom_d5_praise_trap_1: { text: "*The teacher pauses. — And then her usual dry expression returns. Too quickly.*" },
        hidden_homeroom_d5_praise_trap_2: { text: "...Without even reading it?" },
        hidden_homeroom_d5_praise_trap_3: { text: "Ah, that's — it's bound to be good. You spent seven years on it." },
        hidden_homeroom_d5_praise_trap_4: { text: "...Right." },
        hidden_homeroom_d5_praise_trap_5: { text: "*The teacher reaches out. Takes the manuscript back. Slowly. Slides it back into the envelope.*" },
        hidden_homeroom_d5_praise_trap_6: { text: "Forget it. Sorry for taking your time." },
        hidden_homeroom_d5_praise_trap_7: { text: "Teacher—" },
        hidden_homeroom_d5_praise_trap_8: { text: "I sent it to publishers three times in seven years. All rejected. Two of those three rejection letters started with — 'Seven years is impressive. I'm sure it's wonderful.'" },
        hidden_homeroom_d5_praise_trap_9: { text: "*...I didn't know. I knew about the failed debuts, but not that the rejection wording was *exactly the same as what I just said*.*" },
        hidden_homeroom_d5_praise_trap_10: { text: "...I thought you'd actually read it and tell me. — I showed it to you because I figured a student would feel less pressured." },
        hidden_homeroom_d5_praise_trap_11: { text: "Go on. You'll be late for the event." },
        hidden_homeroom_d5_praise_trap_12: { text: "*I closed the classroom door. The envelope was still on her desk. — What she hadn't gotten in seven years wasn't *sincere praise* but *someone who'd read it seriously*. Praise was in the rejection letters too. I said the exact same thing as a rejection letter. With good intentions.*" }
    },
    ja: {
        hidden_homeroom_d5_praise_trap_1: { text: "*担任が一瞬止まる。 — そしていつもの乾いた表情に戻る。あまりにも速く。*" },
        hidden_homeroom_d5_praise_trap_2: { text: "...読みもしないで?" },
        hidden_homeroom_d5_praise_trap_3: { text: "あ、それは — きっといいに決まってますよ。7年も書いたんでしょう。" },
        hidden_homeroom_d5_praise_trap_4: { text: "...そう。" },
        hidden_homeroom_d5_praise_trap_5: { text: "*担任が手を伸ばす。原稿を持っていく。ゆっくりと。封筒に戻す。*" },
        hidden_homeroom_d5_praise_trap_6: { text: "もういい。時間取らせてごめん。" },
        hidden_homeroom_d5_praise_trap_7: { text: "先生—" },
        hidden_homeroom_d5_praise_trap_8: { text: "7年で出版社に三回送ったの。全部落ちた。その三回のうち二回が — 『7年も書かれたんですね。きっと素晴らしいでしょう』で始まる断りメールだった。" },
        hidden_homeroom_d5_praise_trap_9: { text: "*...知らなかった。デビューに落ちたのは知ってたけど、その断りの文句が *私が今言ったのと全く同じ* だったなんて。*" },
        hidden_homeroom_d5_praise_trap_10: { text: "...読んで言ってくれると思ってた。 — 学生だから負担が少ないと思って見せたのに。" },
        hidden_homeroom_d5_praise_trap_11: { text: "行きなさい。行事の時間に遅れるよ。" },
        hidden_homeroom_d5_praise_trap_12: { text: "*教室のドアを閉めて出てきた。封筒は担任の机の上にある。 — 7年で一度ももらえなかったのは *心からの賞賛* じゃなくて *真剣に読んでくれる人* だったと、今気づいた。賞賛なら断りメールにもあった。私は断りメールと全く同じことを言った。善意で。*" }
    },
    es: {
        hidden_homeroom_d5_praise_trap_1: { text: "*La profesora se detiene. — Y luego vuelve a su habitual expresión seca. Demasiado rápido.*" },
        hidden_homeroom_d5_praise_trap_2: { text: "...¿Sin haberlo leído siquiera?" },
        hidden_homeroom_d5_praise_trap_3: { text: "Ah, es que — seguro que es bueno. Lleva siete años escribiéndolo." },
        hidden_homeroom_d5_praise_trap_4: { text: "...Ya." },
        hidden_homeroom_d5_praise_trap_5: { text: "*La profesora extiende la mano. Recoge el manuscrito. Despacio. Lo vuelve a meter en el sobre.*" },
        hidden_homeroom_d5_praise_trap_6: { text: "Déjalo. Perdón por hacerte perder el tiempo." },
        hidden_homeroom_d5_praise_trap_7: { text: "Profesora—" },
        hidden_homeroom_d5_praise_trap_8: { text: "Lo envié a editoriales tres veces en siete años. Todas rechazadas. Dos de esas tres cartas de rechazo empezaban con — 'Siete años es admirable. Seguro que es estupendo.'" },
        hidden_homeroom_d5_praise_trap_9: { text: "*...No lo sabía. Sabía lo del debut fallido, pero no que esa frase de rechazo fuera *exactamente lo que yo acabo de decir*.*" },
        hidden_homeroom_d5_praise_trap_10: { text: "...Pensé que lo leerías y me dirías. — Te lo enseñé porque pensaba que una estudiante sentiría menos presión." },
        hidden_homeroom_d5_praise_trap_11: { text: "Vete. Llegarás tarde al evento." },
        hidden_homeroom_d5_praise_trap_12: { text: "*Cerré la puerta del aula al salir. El sobre seguía en su mesa. — Lo que en siete años no había recibido no era *un elogio sincero* sino *alguien que lo leyera en serio*. El elogio también estaba en las cartas de rechazo. Dije exactamente lo mismo que una carta de rechazo. Con buena intención.*" }
    },
    fr: {
        hidden_homeroom_d5_praise_trap_1: { text: "*La professeure s'arrête. — Puis son expression sèche habituelle revient. Trop vite.*" },
        hidden_homeroom_d5_praise_trap_2: { text: "...Sans même l'avoir lu ?" },
        hidden_homeroom_d5_praise_trap_3: { text: "Ah, c'est que — c'est forcément bien. Vous avez passé sept ans dessus." },
        hidden_homeroom_d5_praise_trap_4: { text: "...Bon." },
        hidden_homeroom_d5_praise_trap_5: { text: "*La professeure tend la main. Reprend le manuscrit. Lentement. Le remet dans l'enveloppe.*" },
        hidden_homeroom_d5_praise_trap_6: { text: "Laisse tomber. Désolée de t'avoir pris ton temps." },
        hidden_homeroom_d5_praise_trap_7: { text: "Madame—" },
        hidden_homeroom_d5_praise_trap_8: { text: "Je l'ai envoyé à des éditeurs trois fois en sept ans. Refusé à chaque fois. Deux de ces trois lettres commençaient par — « Sept ans, c'est admirable. Ce sera sûrement formidable. »" },
        hidden_homeroom_d5_praise_trap_9: { text: "*...Je ne savais pas. Je savais pour les refus, mais pas que la formulation était *exactement la même que celle que je viens de dire*.*" },
        hidden_homeroom_d5_praise_trap_10: { text: "...Je pensais que tu le lirais et me dirais. — Je te l'ai montré parce que je me disais qu'un élève aurait moins de pression." },
        hidden_homeroom_d5_praise_trap_11: { text: "Vas-y. Tu vas être en retard pour l'événement." },
        hidden_homeroom_d5_praise_trap_12: { text: "*J'ai fermé la porte de la classe. L'enveloppe est restée sur son bureau. — Ce qu'elle n'avait jamais reçu en sept ans, ce n'était pas *un éloge sincère*, mais *quelqu'un qui le lirait sérieusement*. L'éloge était aussi dans les lettres de refus. J'ai dit exactement la même chose qu'une lettre de refus. Avec de bonnes intentions.*" }
    },
    de: {
        hidden_homeroom_d5_praise_trap_1: { text: "*Die Lehrerin hält inne. — Und dann kehrt ihr gewohnt trockener Ausdruck zurück. Zu schnell.*" },
        hidden_homeroom_d5_praise_trap_2: { text: "...Ohne es überhaupt gelesen zu haben?" },
        hidden_homeroom_d5_praise_trap_3: { text: "Ah, das ist — es ist sicher gut. Sie haben sieben Jahre daran gesessen." },
        hidden_homeroom_d5_praise_trap_4: { text: "...Schon." },
        hidden_homeroom_d5_praise_trap_5: { text: "*Die Lehrerin streckt die Hand aus. Nimmt das Manuskript zurück. Langsam. Steckt es zurück in den Umschlag.*" },
        hidden_homeroom_d5_praise_trap_6: { text: "Vergiss es. Tut mir leid, dass ich deine Zeit gestohlen habe." },
        hidden_homeroom_d5_praise_trap_7: { text: "Frau Lehrerin—" },
        hidden_homeroom_d5_praise_trap_8: { text: "Ich habe es in sieben Jahren dreimal an Verlage geschickt. Alles abgelehnt. Zwei dieser drei Absagen begannen mit — 'Sieben Jahre sind beeindruckend. Es wird sicher großartig sein.'" },
        hidden_homeroom_d5_praise_trap_9: { text: "*...Ich wusste es nicht. Von den gescheiterten Debüts wusste ich, aber nicht, dass die Absage *genau das war, was ich gerade gesagt habe*.*" },
        hidden_homeroom_d5_praise_trap_10: { text: "...Ich dachte, du würdest es lesen und mir sagen. — Ich habe es dir gezeigt, weil ich dachte, dass eine Schülerin weniger Druck spüren würde." },
        hidden_homeroom_d5_praise_trap_11: { text: "Geh. Du kommst zu spät zur Veranstaltung." },
        hidden_homeroom_d5_praise_trap_12: { text: "*Ich schloss die Klassentür hinter mir. Der Umschlag lag noch auf ihrem Tisch. — Was sie in sieben Jahren nie bekommen hatte, war nicht *aufrichtiges Lob*, sondern *jemand, der es ernsthaft liest*. Lob stand auch in den Absagen. Ich habe genau das Gleiche gesagt wie eine Absage. Mit guten Absichten.*" }
    }
};

const teacherCorrect = {
    en: {
        hidden_homeroom_d5_correct_1: { text: "*The teacher stops. Really stops. Not for half a second — for about three. Her grip on the clipboard tightens.*" },
        hidden_homeroom_d5_correct_2: { text: "...How did you know." },
        hidden_homeroom_d5_correct_3: { text: "I haven't even opened it yet." },
        hidden_homeroom_d5_correct_4: { text: "Right. — How did you know the last chapter is empty." },
        hidden_homeroom_d5_correct_5: { text: "*I didn't. It was a guess. — Someone who'd taken seven years showing it to a student *today* of all days felt off. If it were finished, she'd have sent it to publishers first. It wasn't finished — so she needed *permission* to end it.*" },
        hidden_homeroom_d5_correct_6: { text: "...I really can't write it. The last line." },
        hidden_homeroom_d5_correct_7: { text: "It's been stuck on that one line for seven years. Because if I finish — it'd confirm I'm not a writer." },
        hidden_homeroom_d5_correct_8: { text: "*For the first time, the teacher said the word *writer* about herself. She hadn't said it once in seven years.*" },
        hidden_homeroom_d5_correct_9: { text: "Want me to look at that one line with you?" },
        hidden_homeroom_d5_correct_10: { text: "...A student?" },
        hidden_homeroom_d5_correct_11: { text: "It's just one line. Students can write one line." },
        hidden_homeroom_d5_correct_12: { text: "*The teacher laughs. Really laughs. Not just the corners of her mouth — her eyes too. The face of seven years of self-censorship coming undone for one second.*" },
        hidden_homeroom_d5_correct_13: { text: "...I'll take that offer." },
        hidden_homeroom_d5_correct_14: { text: "*I hold the manuscript again. It's not as heavy as before. — Closing seven years of incomplete work with praise wasn't what she needed. What she needed was *someone who'd accept the incomplete as incomplete*. That's real support.*" }
    },
    ja: {
        hidden_homeroom_d5_correct_1: { text: "*担任が止まる。本当に止まる。0.5秒じゃなくて — 3秒くらい。クリップボードを握る手に力が入る。*" },
        hidden_homeroom_d5_correct_2: { text: "...どうして分かったの。" },
        hidden_homeroom_d5_correct_3: { text: "まだ原稿開いてもいないんですけど。" },
        hidden_homeroom_d5_correct_4: { text: "そうね。 — どうして分かったの、最後の章が空白だって。" },
        hidden_homeroom_d5_correct_5: { text: "*分からなかった。推測だった。 — 7年かかったという人が、よりによって *今日* 学生に初めて見せるのが変だった。完成してたら出版社に先に送ってたはず。完成してないから — 終わらせる *許可* が必要なんだ。*" },
        hidden_homeroom_d5_correct_6: { text: "...本当に書けないの。最後の一行が。" },
        hidden_homeroom_d5_correct_7: { text: "7年間その一行のせいで原稿が止まってた。終わらせたら — 私が作家じゃないって確定するから。" },
        hidden_homeroom_d5_correct_8: { text: "*初めて担任が *作家* という言葉を自分の口から出した。7年間一度も口にしなかった言葉だ。*" },
        hidden_homeroom_d5_correct_9: { text: "一行書くの、一緒に見てあげましょうか。" },
        hidden_homeroom_d5_correct_10: { text: "...学生が?" },
        hidden_homeroom_d5_correct_11: { text: "一行ならいいじゃないですか。学生だって一行は書きます。" },
        hidden_homeroom_d5_correct_12: { text: "*担任が笑う。本当に。口角だけじゃなくて、目も一緒に。7年分の自己検閲が1秒だけ解ける顔だ。*" },
        hidden_homeroom_d5_correct_13: { text: "...受けるわ。その提案。" },
        hidden_homeroom_d5_correct_14: { text: "*原稿をまた抱える。さっきほど重くない。 — 7年分の未完成を称賛で *完結させる* ことより、未完成を *未完成として認めてくれる* ことがこの人には必要だった。それが本物の応援だ。*" }
    },
    es: {
        hidden_homeroom_d5_correct_1: { text: "*La profesora se detiene. De verdad se detiene. No medio segundo — unos tres. Aprieta más el portapapeles.*" },
        hidden_homeroom_d5_correct_2: { text: "...¿Cómo lo sabías?" },
        hidden_homeroom_d5_correct_3: { text: "Ni siquiera he abierto el manuscrito todavía." },
        hidden_homeroom_d5_correct_4: { text: "Cierto. — ¿Cómo sabías que el último capítulo está vacío?" },
        hidden_homeroom_d5_correct_5: { text: "*No lo sabía. Fue una suposición. — Que alguien que ha tardado siete años se lo enseñe por primera vez a una estudiante *justo hoy* era extraño. Si estuviera terminado, lo habría enviado primero a editoriales. No está terminado — así que necesita *permiso* para acabarlo.*" },
        hidden_homeroom_d5_correct_6: { text: "...De verdad no puedo escribirla. Esa última línea." },
        hidden_homeroom_d5_correct_7: { text: "Llevo siete años atascada en esa línea. Porque si la termino — confirma que no soy escritora." },
        hidden_homeroom_d5_correct_8: { text: "*Por primera vez, la profesora pronunció la palabra *escritora* refiriéndose a ella misma. Una palabra que no había dicho en siete años.*" },
        hidden_homeroom_d5_correct_9: { text: "¿Quiere que miremos esa línea juntas?" },
        hidden_homeroom_d5_correct_10: { text: "...¿Una estudiante?" },
        hidden_homeroom_d5_correct_11: { text: "Es solo una línea. Las estudiantes también escribimos una línea." },
        hidden_homeroom_d5_correct_12: { text: "*La profesora se ríe. De verdad. No solo con las comisuras — también con los ojos. La cara de siete años de autocensura desatándose por un segundo.*" },
        hidden_homeroom_d5_correct_13: { text: "...Acepto esa propuesta." },
        hidden_homeroom_d5_correct_14: { text: "*Vuelvo a abrazar el manuscrito. Ya no pesa como antes. — Cerrar siete años de inconcluso con un elogio no era lo que necesitaba. Lo que necesitaba era *alguien que aceptara lo inconcluso como inconcluso*. Eso es apoyo de verdad.*" }
    },
    fr: {
        hidden_homeroom_d5_correct_1: { text: "*La professeure s'arrête. Vraiment. Pas une demi-seconde — trois secondes environ. Sa main serre plus fort le porte-bloc.*" },
        hidden_homeroom_d5_correct_2: { text: "...Comment tu as su." },
        hidden_homeroom_d5_correct_3: { text: "Je n'ai même pas encore ouvert le manuscrit." },
        hidden_homeroom_d5_correct_4: { text: "C'est vrai. — Comment tu as su que le dernier chapitre est vide." },
        hidden_homeroom_d5_correct_5: { text: "*Je ne savais pas. C'était une supposition. — Que quelqu'un qui a mis sept ans le montre pour la première fois à un élève *aujourd'hui*, ça sonnait faux. Si c'était fini, elle l'aurait envoyé d'abord aux éditeurs. Ce n'est pas fini — donc elle a besoin de *permission* pour le terminer.*" },
        hidden_homeroom_d5_correct_6: { text: "...Je n'arrive vraiment pas à l'écrire. Cette dernière ligne." },
        hidden_homeroom_d5_correct_7: { text: "Le manuscrit est bloqué là-dessus depuis sept ans. Parce que si je le finis — ça confirmera que je ne suis pas écrivaine." },
        hidden_homeroom_d5_correct_8: { text: "*Pour la première fois, la professeure a prononcé le mot *écrivaine* en parlant d'elle-même. Un mot qu'elle n'avait pas dit en sept ans.*" },
        hidden_homeroom_d5_correct_9: { text: "Vous voulez qu'on regarde cette ligne ensemble ?" },
        hidden_homeroom_d5_correct_10: { text: "...Une élève ?" },
        hidden_homeroom_d5_correct_11: { text: "C'est juste une ligne. Les élèves aussi écrivent une ligne." },
        hidden_homeroom_d5_correct_12: { text: "*La professeure rit. Vraiment. Pas seulement les coins de la bouche — les yeux aussi. Le visage de sept ans d'autocensure qui se relâche pendant une seconde.*" },
        hidden_homeroom_d5_correct_13: { text: "...J'accepte. Cette proposition." },
        hidden_homeroom_d5_correct_14: { text: "*Je reprends le manuscrit dans mes bras. Il est moins lourd qu'avant. — Boucler sept ans d'inachevé par un éloge n'était pas ce qu'il lui fallait. Ce qu'il lui fallait, c'était *quelqu'un qui accepte l'inachevé comme inachevé*. C'est ça, le vrai soutien.*" }
    },
    de: {
        hidden_homeroom_d5_correct_1: { text: "*Die Lehrerin hält inne. Wirklich. Nicht eine halbe Sekunde — eher drei. Ihre Hand am Klemmbrett spannt sich an.*" },
        hidden_homeroom_d5_correct_2: { text: "...Woher wusstest du das." },
        hidden_homeroom_d5_correct_3: { text: "Ich habe das Manuskript noch nicht mal aufgeschlagen." },
        hidden_homeroom_d5_correct_4: { text: "Stimmt. — Woher wusstest du, dass das letzte Kapitel leer ist." },
        hidden_homeroom_d5_correct_5: { text: "*Ich wusste es nicht. Es war eine Vermutung. — Dass jemand, der sieben Jahre daran saß, es ausgerechnet *heute* einer Schülerin zum ersten Mal zeigt, war seltsam. Wäre es fertig, hätte sie es zuerst an Verlage geschickt. Es ist nicht fertig — also braucht sie *Erlaubnis*, es zu beenden.*" },
        hidden_homeroom_d5_correct_6: { text: "...Ich kriege sie wirklich nicht hin. Die letzte Zeile." },
        hidden_homeroom_d5_correct_7: { text: "Seit sieben Jahren steckt das Manuskript wegen dieser einen Zeile fest. Weil wenn ich es beende — wäre bestätigt, dass ich keine Autorin bin." },
        hidden_homeroom_d5_correct_8: { text: "*Zum ersten Mal sprach die Lehrerin das Wort *Autorin* über sich selbst aus. Ein Wort, das sie sieben Jahre lang kein einziges Mal gesagt hatte.*" },
        hidden_homeroom_d5_correct_9: { text: "Wollen Sie, dass wir die eine Zeile zusammen anschauen?" },
        hidden_homeroom_d5_correct_10: { text: "...Eine Schülerin?" },
        hidden_homeroom_d5_correct_11: { text: "Es ist nur eine Zeile. Schüler können auch eine Zeile schreiben." },
        hidden_homeroom_d5_correct_12: { text: "*Die Lehrerin lacht. Wirklich. Nicht nur die Mundwinkel — auch die Augen. Das Gesicht von sieben Jahren Selbstzensur, die sich für eine Sekunde lockern.*" },
        hidden_homeroom_d5_correct_13: { text: "...Ich nehme an. Dieses Angebot." },
        hidden_homeroom_d5_correct_14: { text: "*Ich nehme das Manuskript wieder in den Arm. Es ist nicht mehr so schwer wie vorher. — Sieben Jahre Unfertiges mit Lob *abzuschließen* war nicht, was sie brauchte. Was sie brauchte, war *jemand, der das Unfertige als unfertig anerkennt*. Das ist echte Unterstützung.*" }
    }
};

// ── 캐릭터 이름 매핑 (key prefix → ko name) ──
const KEY_TO_NAME = {
    'after3_seo_pity_trap_2': '서연',
    'after3_seo_pity_trap_3': '서연',
    'after3_seo_pity_trap_5': '서연',
    'after3_seo_pity_trap_7': '서연',
    'after3_seo_pity_trap_9': '서연',
    'after3_seo_correct_5': '서연',
    'after3_seo_correct_7': '서연',
    'after3_seo_correct_9': '서연',
    'after3_seo_correct_11': '서연',
    'after3_yuna_decode_trap_2': '유나',
    'after3_yuna_decode_trap_4': '유나',
    'after3_yuna_decode_trap_6': '유나',
    'after3_yuna_decode_trap_8': '유나',
    'after3_yuna_decode_trap_10': '유나',
    'after3_yuna_correct_2': '유나',
    'after3_yuna_correct_4': '유나',
    'after3_yuna_correct_7': '유나',
    'after3_yuna_correct_9': '유나',
    'after3_yuna_correct_12': '유나',
    'after3_dain_pity_trap_2': '다인',
    'after3_dain_pity_trap_3': '다인',
    'after3_dain_pity_trap_5': '다인',
    'after3_dain_pity_trap_7': '다인',
    'after3_dain_pity_trap_9': '다인',
    'after3_dain_correct_2': '다인',
    'after3_dain_correct_4': '다인',
    'after3_dain_correct_6': '다인',
    'after3_dain_correct_8': '다인',
    'after3_dain_correct_10': '다인',
    'after3_dain_correct_12': '다인',
    'hidden_homeroom_d5_praise_trap_2': '담임선생님',
    'hidden_homeroom_d5_praise_trap_4': '담임선생님',
    'hidden_homeroom_d5_praise_trap_6': '담임선생님',
    'hidden_homeroom_d5_praise_trap_8': '담임선생님',
    'hidden_homeroom_d5_praise_trap_10': '담임선생님',
    'hidden_homeroom_d5_praise_trap_11': '담임선생님',
    'hidden_homeroom_d5_correct_2': '담임선생님',
    'hidden_homeroom_d5_correct_4': '담임선생님',
    'hidden_homeroom_d5_correct_6': '담임선생님',
    'hidden_homeroom_d5_correct_7': '담임선생님',
    'hidden_homeroom_d5_correct_10': '담임선생님',
    'hidden_homeroom_d5_correct_12': '담임선생님',
    'hidden_homeroom_d5_correct_13': '담임선생님'
};

// ── 통합 ──
const allTraps = {};
for (const lang of ['en', 'ja', 'es', 'fr', 'de']) {
    allTraps[lang] = {
        ...seoTraps[lang], ...seoCorrect[lang],
        ...yunaTraps[lang], ...yunaCorrect[lang],
        ...dainTraps[lang], ...dainCorrect[lang]
    };
}

const teacherAll = {};
for (const lang of ['en', 'ja', 'es', 'fr', 'de']) {
    teacherAll[lang] = { ...teacherTraps[lang], ...teacherCorrect[lang] };
}

// ── 적용 ──
let totalAdded = 0;

for (const lang of ['en', 'ja', 'es', 'fr', 'de']) {
    // day3_3
    const path3 = path.join(__dirname, 'assets/js/i18n', lang, 'day3_3_afterschool.json');
    const data3 = JSON.parse(fs.readFileSync(path3, 'utf-8'));
    let added3 = 0;
    for (const [k, v] of Object.entries(allTraps[lang])) {
        if (!data3[k]) {
            const koName = KEY_TO_NAME[k] || '{name}';
            data3[k] = {
                name: koName === '{name}' ? '{name}' : tx(koName, lang),
                text: v.text
            };
            added3++;
            totalAdded++;
        }
    }
    fs.writeFileSync(path3, JSON.stringify(data3, null, 2) + '\n', 'utf-8');
    console.log(`✅ ${lang}/day3_3_afterschool.json — +${added3}`);

    // day5_1
    const path5 = path.join(__dirname, 'assets/js/i18n', lang, 'day5_1_morning.json');
    const data5 = JSON.parse(fs.readFileSync(path5, 'utf-8'));
    let added5 = 0;
    for (const [k, v] of Object.entries(teacherAll[lang])) {
        if (!data5[k]) {
            const koName = KEY_TO_NAME[k] || '{name}';
            data5[k] = {
                name: koName === '{name}' ? '{name}' : tx(koName, lang),
                text: v.text
            };
            added5++;
            totalAdded++;
        }
    }
    fs.writeFileSync(path5, JSON.stringify(data5, null, 2) + '\n', 'utf-8');
    console.log(`✅ ${lang}/day5_1_morning.json — +${added5}`);
}

console.log(`\n총 ${totalAdded}개 번역 추가 완료`);
