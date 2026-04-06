// 주인공 트라우마 다리 + 히든 루트 윤리 갈등 신규 씬 i18n 일괄 주입
// 대상: day2_4_night.json (3씬), day3_1_morning.json (6씬) × 6 언어
const fs = require('fs');
const path = require('path');

const I18N = path.join(__dirname, '..', 'assets', 'js', 'i18n');

// ──────────────────────────────────────────────────────────────
// 신규 씬 텍스트 (6 언어)
// ──────────────────────────────────────────────────────────────
const SCENES = {
  // ── day2_4_night: 트라우마 다리 ──
  night2_flashback_8: {
    name: '{name}',
    ko: "*그런데 — 천장을 본다. 오늘 하루가 머릿속에서 안 꺼진다. 서연. 다인. 유나. 셋 다 신경이 쓰인다. 이게 호기심이라고 우길 수도 있다. 근데 솔직히 말하면, 무섭다. 누구 한 명한테 마음이 기우는 게.*",
    en: "*But — I stare at the ceiling. Today won't switch off. Seoyeon. Dain. Yuna. All three are stuck in my head. I could call it curiosity. Honestly though, it scares me. The thought of leaning toward any one of them.*",
    ja: "*でも — 天井を見上げる。今日が頭から離れない。ソヨン。ダイン。ユナ。三人とも気になっている。好奇心だと言い張ることもできる。でも本音を言えば、怖い。誰か一人に心が傾くのが。*",
    es: "*Pero — miro al techo. El día no se apaga. Seoyeon. Dain. Yuna. Las tres siguen en mi cabeza. Podría llamarlo curiosidad. Pero, siendo honesto, me asusta. La idea de inclinarme por una sola.*",
    fr: "*Mais — je fixe le plafond. La journée ne s'éteint pas. Seoyeon. Dain. Yuna. Toutes les trois me trottent dans la tête. Je pourrais appeler ça de la curiosité. Honnêtement, ça me fait peur. L'idée de pencher vers une seule.*",
    de: "*Aber — ich starre an die Decke. Der Tag lässt sich nicht abschalten. Seoyeon. Dain. Yuna. Alle drei stecken in meinem Kopf. Ich könnte es Neugier nennen. Ehrlich gesagt macht es mir aber Angst. Dieser Gedanke, mich für eine zu entscheiden.*"
  },
  night2_flashback_9: {
    name: '{name}',
    ko: "*소정이 때 나는 한 사람만 봤다. 한 사람만 좋아했고, 한 사람만 보다가 — 그 한 사람이 무너지는 걸 옆에서 다 봤으면서도 메모장에서 멈췄다. 38번. 한 명만 본다는 건, 한 명을 잃을 수 있다는 말이었다. 그때의 나는 그걸 몰랐다.*",
    en: "*Back with Sojeong, I only looked at one person. I only liked one person, only watched one person — and even as she fell apart right beside me, I stopped at the notepad. Thirty-eight times. Looking at only one meant being able to lose that one. I didn't know that then.*",
    ja: "*ソジョンの時、僕は一人しか見ていなかった。一人だけを好きで、一人だけを見ていて — その一人が崩れていくのを横で見ていたのに、メモ帳で止まった。38回。一人だけを見るというのは、その一人を失えるということだった。あの時の僕はそれを知らなかった。*",
    es: "*Con Sojeong, solo miraba a una persona. Solo quería a una, solo veía a una — y aunque se derrumbó justo a mi lado, me detuve en el bloc de notas. Treinta y ocho veces. Mirar solo a una significaba poder perder a esa una. Yo entonces no lo sabía.*",
    fr: "*Avec Sojeong, je ne regardais qu'une seule personne. Je n'aimais qu'une seule, je ne voyais qu'une seule — et même quand elle s'effondrait juste à côté de moi, je me suis arrêté au bloc-notes. Trente-huit fois. Ne regarder qu'une seule, ça voulait dire pouvoir la perdre. Je ne le savais pas, à l'époque.*",
    de: "*Damals bei Sojeong habe ich nur eine angesehen. Nur eine gemocht, nur eine im Blick gehabt — und obwohl sie direkt neben mir zerbrach, blieb ich beim Notizblock stehen. Achtunddreißig Mal. Nur eine anzusehen bedeutete, diese eine verlieren zu können. Damals wusste ich das nicht.*"
  },
  night2_flashback_10: {
    name: '{name}',
    ko: "*— 그래서 지금 내가 셋한테 다 여지를 두고 있는 거다. 인정하기 싫지만. 한 명을 너무 빨리 정하면, 그 한 명만 보게 되고, 나머지는 안 보이게 되고, 결국 또 누군가 무너질 때 옆에서 못 알아챌까 봐. 보험 같은 거다. 비겁한 거 안다. 누가 봐도 우유부단한 새끼지. 근데 — 한 사람만 보다가 잃는 게 어떤 건지, 나는 안다. 그게 제일 무섭다.*",
    en: "*— That's why I'm leaving the door open with all three of them right now. I don't want to admit it. If I pick one too fast, I'll only see her, the rest will fade out, and one day someone might fall apart again and I won't notice. It's insurance. I know it's cowardly. Anyone looking would just call me indecisive. But — I know what it feels like to lose someone because she was the only one I was looking at. That's what scares me most.*",
    ja: "*— だから今、僕は三人全員に余地を残している。認めたくないけど。一人を早く決めすぎると、その一人しか見えなくなって、残りは見えなくなって、また誰かが崩れる時に隣で気づけないかもしれない。保険みたいなものだ。卑怯なのはわかってる。誰が見ても優柔不断な野郎だ。でも — 一人だけを見ていて失うのがどういうことか、僕は知っている。それが一番怖い。*",
    es: "*— Por eso ahora dejo la puerta abierta con las tres. No quiero admitirlo. Si elijo a una demasiado rápido, solo la veré a ella, las demás se desvanecerán, y un día alguien podría volver a derrumbarse y no me daré cuenta. Es como un seguro. Sé que es cobarde. Cualquiera diría que soy un indeciso. Pero — sé lo que se siente perder a alguien porque era la única a la que miraba. Eso es lo que más miedo me da.*",
    fr: "*— C'est pour ça que je laisse la porte ouverte aux trois en ce moment. Je n'ai pas envie de l'admettre. Si j'en choisis une trop vite, je ne verrai qu'elle, les autres disparaîtront, et un jour quelqu'un s'effondrera encore et je ne m'en rendrai pas compte. C'est une assurance. Je sais que c'est lâche. N'importe qui me traiterait d'indécis. Mais — je sais ce que c'est de perdre quelqu'un parce que c'était la seule que je regardais. C'est ça qui me fait le plus peur.*",
    de: "*— Deshalb lasse ich gerade bei allen dreien die Tür offen. Ich gebe es ungern zu. Wenn ich mich zu schnell festlege, sehe ich nur noch sie, der Rest verschwimmt, und eines Tages bricht vielleicht wieder jemand zusammen, und ich merke es nicht. Es ist eine Versicherung. Ich weiß, dass es feige ist. Jeder würde mich einfach unentschlossen nennen. Aber — ich weiß, wie es ist, jemanden zu verlieren, weil sie die einzige war, die ich angesehen habe. Das macht mir am meisten Angst.*"
  },

  // ── day3_1_morning: 담임 윤리 갈등 ──
  hidden_homeroom_d3_4_f: {
    name: '{name}',
    ko: "*그런데 — 한 발을 못 떼겠다. 이 사람은 담임이다. 내 출결을 찍고, 내 성적을 매기고, 학기말에 내 생활기록부에 한 줄을 적는 사람. 그 줄이 내 대학 원서로 간다. 권력은 한 방향으로만 흐른다. 내 쪽이 아니다.*",
    en: "*But — I can't move my foot. This person is my homeroom teacher. The one who marks my attendance, grades my work, and writes a single line on my report at the end of the term. That line goes into my college applications. Power flows in one direction here. Not mine.*",
    ja: "*でも — 一歩が踏み出せない。この人は担任だ。僕の出欠をつけ、僕の成績をつけ、学期末に僕の生活記録に一行を書く人。その一行が僕の大学願書に行く。力は一方向にしか流れない。僕の方じゃない。*",
    es: "*Pero — no puedo mover el pie. Esta persona es mi tutora. La que marca mi asistencia, califica mi trabajo y escribe una línea en mi expediente al final del trimestre. Esa línea va a mi solicitud universitaria. El poder fluye en una sola dirección aquí. No hacia mí.*",
    fr: "*Mais — je n'arrive pas à bouger. Cette personne, c'est ma prof principale. Celle qui note mes absences, mes résultats, et qui écrira une ligne sur mon dossier en fin de trimestre. Cette ligne ira dans mes dossiers d'inscription à la fac. Le pouvoir ne va que dans un sens ici. Pas vers moi.*",
    de: "*Aber — ich bekomme den Fuß nicht los. Diese Person ist meine Klassenlehrerin. Die, die meine Anwesenheit einträgt, meine Noten gibt und am Ende des Halbjahres eine Zeile in mein Zeugnis schreibt. Diese Zeile landet in meinen Hochschulbewerbungen. Macht fließt hier nur in eine Richtung. Nicht zu mir.*"
  },
  hidden_homeroom_d3_4_g: {
    name: '{name}',
    ko: "*그래서 지금 내가 이 사람의 비밀을 들여다보는 게 — 호의일까, 월권일까. 학생이 교사의 약한 면을 알아버리면, 그 다음부터 두 사람 사이의 거리는 더 이상 직선이 아니다. 어른 한 명의 7년이 내 손바닥 위에 올라오는 거다. 내가 그걸 받을 자격이 있나.*",
    en: "*So me peeking into her secret right now — is it kindness, or is it overstepping? Once a student knows a teacher's weak spot, the line between them isn't a straight one anymore. Seven years of an adult's life lands in the palm of my hand. Am I qualified to hold that?*",
    ja: "*だから今、僕がこの人の秘密を覗き込んでいるのは — 親切なのか、越権なのか。生徒が教師の弱い部分を知ってしまったら、その後の二人の距離はもう直線じゃない。大人一人の7年が僕の手のひらに乗る。僕にそれを受け取る資格があるのか。*",
    es: "*Así que estar asomándome a su secreto ahora mismo — ¿es bondad o es extralimitarme? En cuanto un estudiante conoce el lado débil de una profesora, la línea entre los dos ya no es recta. Siete años de la vida de una adulta caen en la palma de mi mano. ¿Tengo derecho a sostener eso?*",
    fr: "*Alors le fait que je sois en train de regarder son secret — c'est de la bienveillance ou de l'abus ? Dès qu'un élève connaît la faille d'une prof, la distance entre eux n'est plus une ligne droite. Sept ans de la vie d'une adulte se posent dans le creux de ma main. Est-ce que j'ai le droit de recevoir ça ?*",
    de: "*Dass ich gerade in ihr Geheimnis hineinschaue — ist das Freundlichkeit oder Anmaßung? Sobald ein Schüler die Schwachstelle einer Lehrerin kennt, ist die Linie zwischen den beiden keine gerade mehr. Sieben Jahre aus dem Leben einer Erwachsenen landen in meiner Handfläche. Habe ich überhaupt das Recht, das zu halten?*"
  },
  hidden_homeroom_d3_4_h: {
    name: '{name}',
    ko: "*— 근데 동시에 알겠다. 모른 척하는 것도 선택이다. 이 사람은 지금 누군가에게 들키고 싶었던 표정이었다. 7년 동안 한 번도 들키지 못한 사람의 얼굴. 어느 쪽이든, 나는 선을 하나 넘는다.*",
    en: "*— And at the same time, I get it. Pretending not to see is also a choice. The look on her face just now — it was the look of someone who wanted to be caught. The face of someone no one has caught in seven years. Either way, I cross a line.*",
    ja: "*— でも同時にわかる。気づかないふりをするのも選択だ。この人はさっき、誰かに見つかりたかった顔をしていた。7年間一度も見つけてもらえなかった人の顔。どちらにしても、僕は線を一本越える。*",
    es: "*— Y al mismo tiempo, lo entiendo. Hacerse el desentendido también es una elección. La cara que ha puesto hace un momento — era la cara de alguien que quería ser descubierta. La cara de alguien a quien nadie ha descubierto en siete años. De cualquier modo, cruzo una línea.*",
    fr: "*— Et en même temps, je comprends. Faire semblant de ne pas voir, c'est aussi un choix. Le visage qu'elle vient de faire — c'était celui de quelqu'un qui voulait être surpris. Le visage de quelqu'un que personne n'a surpris depuis sept ans. D'une façon ou d'une autre, je franchis une ligne.*",
    de: "*— Und gleichzeitig verstehe ich es. So zu tun, als hätte ich nichts gesehen, ist auch eine Entscheidung. Der Ausdruck eben — das war der Ausdruck von jemandem, der erwischt werden wollte. Das Gesicht von jemandem, den seit sieben Jahren niemand erwischt hat. So oder so überschreite ich eine Linie.*"
  },

  // ── day3_1_morning: 보건 윤리 갈등 ──
  hidden_nurse_d3_8_f: {
    name: '{name}',
    ko: "*복도로 나왔다. 한 발 떼고 멈춘다. — 방금 그건 뭐였지. 이 사람은 환자를 한 명 잃었다. 그 죄책감을 안고 학교로 도망쳐 왔다. 지금 그 사람한테 내가 어떤 자리인지 — 처음으로 정확히 묻게 된다.*",
    en: "*Stepped out into the hallway. Took one step and stopped. — What was that, just now. This person lost a patient. She fled to a school carrying that guilt. What kind of place do I occupy for her right now — for the first time, I have to ask that out loud.*",
    ja: "*廊下に出た。一歩進んで止まる。— 今のは何だったんだろう。この人は患者を一人失った。その罪悪感を抱えて学校に逃げてきた。今、僕はこの人にとってどんな存在なのか — 初めて正面から問うことになる。*",
    es: "*Salí al pasillo. Di un paso y me detuve. — ¿Qué ha sido eso? Esta persona perdió a una paciente. Huyó a una escuela cargando esa culpa. Qué clase de lugar ocupo para ella ahora mismo — por primera vez, tengo que preguntármelo en serio.*",
    fr: "*Sorti dans le couloir. Un pas, puis je m'arrête. — C'était quoi, ça ? Cette personne a perdu une patiente. Elle s'est réfugiée dans une école avec cette culpabilité. Quelle place est-ce que je tiens pour elle en ce moment — pour la première fois, je dois me poser la question franchement.*",
    de: "*Auf den Flur getreten. Einen Schritt gemacht und stehen geblieben. — Was war das eben. Diese Person hat eine Patientin verloren. Mit dieser Schuld ist sie in eine Schule geflüchtet. Welchen Platz nehme ich gerade für sie ein — zum ersten Mal muss ich diese Frage wirklich stellen.*"
  },
  hidden_nurse_d3_8_g: {
    name: '{name}',
    ko: "*나는 학생이고, 저 사람은 보건교사다. 내가 다치면 가는 곳, 내가 아프다고 하면 침대를 내주는 사람. 그 관계 자체가 비대칭이다. 내가 두근거리는 건 — 진짜로 이 사람이 좋아진 건가, 아니면 어른 여자가 나한테 처음으로 '괜찮니' 하고 오래 봐줘서인가. 둘은 비슷해 보여도 같은 게 아니다.*",
    en: "*I'm a student, and she's the school nurse. The place I go when I'm hurt, the person who gives me a bed when I say I'm sick. The relationship itself is asymmetrical. This racing in my chest — is it really because I've started liking her, or is it because for the first time an adult woman asked me 'are you okay?' and actually looked at me for a while? The two might look alike, but they're not the same thing.*",
    ja: "*僕は生徒で、あの人は保健の先生だ。怪我をしたら行く場所、しんどいと言えばベッドを出してくれる人。関係そのものが非対称だ。僕が胸を高鳴らせているのは — 本当にこの人を好きになったのか、それとも大人の女性が初めて僕に「大丈夫?」と言って長く見てくれたからなのか。二つは似ていても、同じものじゃない。*",
    es: "*Yo soy estudiante y ella es la enfermera del colegio. El sitio al que voy cuando me hago daño, la persona que me ofrece una cama cuando digo que me encuentro mal. La relación en sí es asimétrica. Este latido — ¿de verdad es porque me ha empezado a gustar, o es porque por primera vez una mujer adulta me ha preguntado 'estás bien?' y me ha mirado durante un buen rato? Las dos cosas se parecen, pero no son lo mismo.*",
    fr: "*Je suis élève, et elle est infirmière scolaire. L'endroit où je vais quand je suis blessé, la personne qui me prête un lit quand je dis que je ne me sens pas bien. La relation elle-même est asymétrique. Ce que je ressens là — est-ce vraiment parce que je commence à l'apprécier, ou parce que pour la première fois une femme adulte m'a demandé « ça va ? » et m'a regardé un bon moment ? Les deux se ressemblent, mais ce n'est pas la même chose.*",
    de: "*Ich bin ein Schüler, und sie ist Schulkrankenschwester. Der Ort, an den ich gehe, wenn ich verletzt bin, die Person, die mir ein Bett gibt, wenn ich sage, dass ich mich krank fühle. Die Beziehung selbst ist asymmetrisch. Dieses Klopfen in meiner Brust — kommt es wirklich daher, dass ich sie zu mögen beginne, oder daher, dass mich zum ersten Mal eine erwachsene Frau gefragt hat 'geht es dir gut?' und mich tatsächlich eine Weile angesehen hat? Die beiden mögen ähnlich aussehen, aber sie sind nicht dasselbe.*"
  },
  hidden_nurse_d3_8_h: {
    name: '{name}',
    ko: "*그리고 더 무서운 건 저쪽 방향이다. 이 사람한테 나는 — 못 살린 유진이의 자리에 비슷한 나이로 앉은 학생이다. 지금 나한테 마음 한 조각이 옮겨가는 게 있다면, 그건 나를 보는 게 아닐 수도 있다. 그걸 알면서 손 내미는 건, 이 사람의 죄책감을 이용하는 거다. — 어느 쪽이든 깨끗한 답은 없다.*",
    en: "*And the scarier part runs the other way. To her, I'm — a student sitting in the seat of the Yujin she couldn't save, at about the same age. If a piece of her heart is starting to move toward me, it might not be me she's looking at. Reaching out knowing that means using her guilt. — Either direction, there's no clean answer.*",
    ja: "*そしてもっと怖いのは、向こう側だ。この人にとって僕は — 救えなかったユジンの席に、近い年齢で座っている生徒だ。今、僕に心の一片が移ってきているとしても、それは僕を見ているんじゃないかもしれない。それを知っていて手を伸ばすのは、この人の罪悪感を利用することだ。— どちらにしても、きれいな答えはない。*",
    es: "*Y lo más aterrador va en el otro sentido. Para ella, yo soy — un estudiante sentado en el sitio de la Yujin a la que no pudo salvar, más o menos a la misma edad. Si un pedazo de su corazón está empezando a moverse hacia mí, puede que no sea a mí a quien mira. Tenderle la mano sabiendo eso es aprovecharme de su culpa. — En cualquier dirección, no hay una respuesta limpia.*",
    fr: "*Et le plus effrayant va dans l'autre sens. Pour elle, je suis — un élève assis à la place de la Yujin qu'elle n'a pas pu sauver, à peu près au même âge. Si un morceau de son cœur commence à se déplacer vers moi, ce n'est peut-être pas moi qu'elle regarde. Tendre la main en sachant ça, c'est me servir de sa culpabilité. — Dans un sens comme dans l'autre, il n'y a pas de réponse propre.*",
    de: "*Und der noch beängstigendere Teil läuft in die andere Richtung. Für sie bin ich — ein Schüler, der in etwa demselben Alter auf dem Platz der Yujin sitzt, die sie nicht retten konnte. Wenn sich gerade ein Stück ihres Herzens auf mich zubewegt, sieht sie vielleicht gar nicht mich. Mit diesem Wissen die Hand auszustrecken, heißt, ihre Schuld auszunutzen. — In keine Richtung gibt es eine saubere Antwort.*"
  }
};

const LANGS = ['ko', 'en', 'ja', 'es', 'fr', 'de'];

const FILE_BY_SCENE = {
  night2_flashback_8: 'day2_4_night.json',
  night2_flashback_9: 'day2_4_night.json',
  night2_flashback_10: 'day2_4_night.json',
  hidden_homeroom_d3_4_f: 'day3_1_morning.json',
  hidden_homeroom_d3_4_g: 'day3_1_morning.json',
  hidden_homeroom_d3_4_h: 'day3_1_morning.json',
  hidden_nurse_d3_8_f: 'day3_1_morning.json',
  hidden_nurse_d3_8_g: 'day3_1_morning.json',
  hidden_nurse_d3_8_h: 'day3_1_morning.json',
};

const ANCHOR_BY_SCENE = {
  night2_flashback_8: 'night2_flashback_7',
  night2_flashback_9: 'night2_flashback_8',
  night2_flashback_10: 'night2_flashback_9',
  hidden_homeroom_d3_4_f: 'hidden_homeroom_d3_4_e',
  hidden_homeroom_d3_4_g: 'hidden_homeroom_d3_4_f',
  hidden_homeroom_d3_4_h: 'hidden_homeroom_d3_4_g',
  hidden_nurse_d3_8_f: 'hidden_nurse_d3_8_e',
  hidden_nurse_d3_8_g: 'hidden_nurse_d3_8_f',
  hidden_nurse_d3_8_h: 'hidden_nurse_d3_8_g',
};

const INSERT_ORDER = [
  'night2_flashback_8', 'night2_flashback_9', 'night2_flashback_10',
  'hidden_homeroom_d3_4_f', 'hidden_homeroom_d3_4_g', 'hidden_homeroom_d3_4_h',
  'hidden_nurse_d3_8_f', 'hidden_nurse_d3_8_g', 'hidden_nurse_d3_8_h',
];

let totalChanges = 0;

for (const lang of LANGS) {
  const touchedFiles = new Set();
  for (const sceneId of INSERT_ORDER) {
    const file = FILE_BY_SCENE[sceneId];
    const fp = path.join(I18N, lang, file);
    const json = JSON.parse(fs.readFileSync(fp, 'utf8'));
    if (json[sceneId]) continue; // 이미 있으면 skip
    const data = SCENES[sceneId];
    // anchor 다음에 삽입하기 위해 객체를 재구성
    const anchor = ANCHOR_BY_SCENE[sceneId];
    const entries = Object.entries(json);
    const idx = entries.findIndex(([k]) => k === anchor);
    if (idx === -1) {
      console.warn(`[${lang}/${file}] anchor ${anchor} not found, appending`);
      json[sceneId] = { name: data.name, text: data[lang] };
    } else {
      entries.splice(idx + 1, 0, [sceneId, { name: data.name, text: data[lang] }]);
      // 객체 재구성
      for (const k of Object.keys(json)) delete json[k];
      for (const [k, v] of entries) json[k] = v;
    }
    fs.writeFileSync(fp, JSON.stringify(json, null, 2) + '\n', 'utf8');
    touchedFiles.add(file);
    totalChanges++;
  }
  console.log(`[${lang}] patched: ${[...touchedFiles].join(', ')}`);
}

console.log(`\n총 ${totalChanges}건 적용 완료.`);
