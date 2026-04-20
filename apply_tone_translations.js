#!/usr/bin/env node
/**
 * 대사 톤 수정(50건) × 6개 언어(en/ja/es/fr/de/pt) 일괄 적용
 * - assets/js/i18n/{lang}/day*.json 의 text 갱신
 * - translation_review_day{1~5}.json 에서 해당 노드 _reviewed: true 마킹
 */
const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, 'assets', 'js', 'i18n');
const LANGS = ['en', 'ja', 'es', 'fr', 'de', 'pt'];

// fileKey → { nodeId → { lang: newText } }
const updates = {
    // ═════════════════ Day 1 ═════════════════
    'day1_1_morning.json': {
        'seoyeon_meet_4': {
            en: "Student council president. New transfers are on me.",
            ja: "生徒会長。転校生の案内は私の担当。",
            es: "Presidenta del consejo. Los transferidos son asunto mío.",
            fr: "Présidente du conseil. Les nouveaux arrivants, c'est mon rayon.",
            de: "Schülersprecherin. Neulinge sind mein Ressort.",
            pt: "Presidente do conselho. Os transferidos ficam comigo."
        },
        'hallway_6_c': {
            en: "*A half-second pause. Nothing, probably — but it sticks.*",
            ja: "*0.5秒のためらい。大したことじゃないはずなのに—妙に残る。*",
            es: "*Una vacilación de medio segundo. No debe ser nada — pero se queda.*",
            fr: "*Une demi-seconde d'hésitation. Sûrement rien — mais ça reste.*",
            de: "*Ein halber Sekunden Zögern. Wahrscheinlich nichts — aber es bleibt.*",
            pt: "*Meio segundo de hesitação. Não deve ser nada — mas fica.*"
        }
    },
    'day1_2_lunch.json': {
        'lunch_seo_6_b': {
            en: "*smile* You're suspicious. — The view up here is quiet.",
            ja: "*微笑* 疑い深いね。—上は静かだから。",
            es: "*sonríe* Qué desconfiado. — Aquí arriba hay silencio.",
            fr: "*sourire* Tu es méfiant. — C'est tranquille là-haut.",
            de: "*lächelt* Misstrauisch. — Hier oben ist's ruhig.",
            pt: "*sorri* Desconfiado. — Aqui em cima é tranquilo."
        },
        'lunch_dain_2': {
            en: "Streusel bread and strawberry milk. That combo's never let me down.",
            ja: "ソボロパンにいちごミルク。この組み合わせ、裏切ったことないから！",
            es: "Pan soboro y leche de fresa. Ese combo nunca me ha fallado.",
            fr: "Brioche soboro et lait à la fraise. Ce combo m'a jamais lâchée.",
            de: "Streuselbrötchen mit Erdbeermilch. Diese Kombi hat mich nie enttäuscht.",
            pt: "Pão soboro com leite de morango. Essa combinação nunca me traiu."
        },
        'lunch_dain_18': {
            en: "Nah, hanging with me means a fitness test first lol",
            ja: "いや、あたしとつるむなら体力テストからだし笑",
            es: "Nah, salir conmigo requiere test físico primero jaja",
            fr: "Nan, traîner avec moi ça commence par un test physique mdr",
            de: "Nee, mit mir rumzuhängen heißt erst Fitnesstest lol",
            pt: "Nada, sair comigo começa com teste físico kkk"
        }
    },
    'day1_3_afterschool.json': {
        'after_miss_seoyeon_4': {
            en: "Left the rooftop open and you didn't show. — Got some nerve, transfer.",
            ja: "屋上、開けておいたのに来なかったね。—転校生、度胸あるじゃない。",
            es: "Dejé la azotea abierta y no viniste. — Qué atrevido, transferido.",
            fr: "J'avais laissé le toit ouvert, t'es pas venu. — T'as du cran, le nouveau.",
            de: "Das Dach war offen, du kamst nicht. — Mutig, Neuling.",
            pt: "Deixei o terraço aberto e você não apareceu. — Que ousadia, transferido."
        },
        'after_hidden_homeroom_3_b': {
            en: "What you said earlier — it kept sticking with me.",
            ja: "さっき言ってくださった言葉が—ずっと頭に残ってて。",
            es: "Lo que dijo antes — se me quedó grabado.",
            fr: "Ce que vous avez dit tout à l'heure — ça m'est resté.",
            de: "Was Sie vorhin sagten — das blieb bei mir hängen.",
            pt: "O que disse antes — ficou comigo."
        },
        'after_homeroom_honest_1': {
            en: "Being overwhelmed is normal. Day-one calm would be the weirder thing.",
            ja: "バタバタするのが普通よ。初日から余裕ある方がおかしいでしょ。",
            es: "Es normal estar abrumado. Lo raro sería estar tranquilo el primer día.",
            fr: "Être débordé, c'est normal. Serein dès le premier jour, ça serait bizarre.",
            de: "Überfordert zu sein ist normal. Vom ersten Tag an entspannt wäre seltsam.",
            pt: "Estar sobrecarregado é normal. Tranquilo no primeiro dia é que seria estranho."
        }
    },
    // ═════════════════ Day 2 ═════════════════
    'day2_2_lunch.json': {
        'lunch2_dain_end_h': {
            en: "*Same teasing tone as yesterday. But her eyes are already on the cut.*",
            ja: "*口調は昨日のまま。でも目はもう傷の上にある。*",
            es: "*El mismo tono de ayer. Pero sus ojos ya están sobre la herida.*",
            fr: "*Même ton qu'hier. Mais ses yeux sont déjà sur la coupure.*",
            de: "*Derselbe Ton wie gestern. Aber ihre Augen sind schon auf der Wunde.*",
            pt: "*Mesmo tom de ontem. Mas os olhos já estão sobre a ferida.*"
        },
        'lunch2_dain_end_ins8_first': {
            en: "*Same teasing tone. But her eyes are already on the cut.*",
            ja: "*口調はそのままなのに。目はもう傷の上にある。*",
            es: "*Mismo tono de siempre. Pero sus ojos ya están sobre la herida.*",
            fr: "*Toujours le même ton. Mais ses yeux sont déjà sur la coupure.*",
            de: "*Derselbe Ton wie immer. Aber ihre Augen sind schon auf der Wunde.*",
            pt: "*Mesmo tom de sempre. Mas os olhos já estão sobre a ferida.*"
        },
        'lunch2_dain_end_q': {
            en: "*Care. Is that really the word for this?*",
            ja: "*丁寧さ。—この言葉で全部収まってる？*",
            es: "*Esmero. ¿Es esa la palabra que cabe aquí?*",
            fr: "*Attentionnée. C'est vraiment le mot ?*",
            de: "*Fürsorge. Ist das wirklich das Wort dafür?*",
            pt: "*Cuidado. É essa a palavra certa?*"
        },
        'lunch2_dain_end_d2': {
            en: "*Just now — her voice wavered a little.*",
            ja: "*今—声がわずかに揺れた。*",
            es: "*Hace un momento — su voz tembló un poco.*",
            fr: "*À l'instant — sa voix a légèrement tremblé.*",
            de: "*Gerade eben — ihre Stimme hat leicht gezittert.*",
            pt: "*Agora mesmo — a voz dela vacilou um pouco.*"
        }
    },
    'day2_3_afterschool.json': {
        'after2_dain_5': {
            en: "*You're the one who came early. I wasn't late.*",
            ja: "*早く来たのはそっち。こっちは遅れてない。*",
            es: "*La que llegó temprano fuiste tú. Yo no llegué tarde.*",
            fr: "*C'est toi qui es arrivée tôt. Moi, pas en retard.*",
            de: "*Du warst die Frühaufsteherin. Ich war nicht zu spät.*",
            pt: "*Quem chegou cedo foi você. Eu não me atrasei.*"
        },
        'after2_dain_9_e': {
            en: "*Rally after rally. Fast, precise — but she puts more weight on her left leg each landing. She's avoiding her right side.*",
            ja: "*ラリーが続く。速くて正確—でも着地するたび左足に体重がかかる。右側をかばっている。*",
            es: "*El peloteo va y viene. Rápida y precisa — pero carga más peso en la pierna izquierda al aterrizar. Protege el lado derecho.*",
            fr: "*L'échange continue. Rapide et précise — mais à chaque atterrissage, plus de poids sur la jambe gauche. Elle évite le côté droit.*",
            de: "*Der Ballwechsel geht weiter. Schnell und präzise — aber bei jeder Landung mehr Gewicht aufs linke Bein. Sie meidet die rechte Seite.*",
            pt: "*A troca continua. Rápida e precisa — mas ela descarrega mais peso na perna esquerda a cada aterrissagem. Protege o lado direito.*"
        },
        'after2_dain_end_3c': {
            en: "*'Used to be.' Past tense. — Don't ask now.*",
            ja: "*「だったんだ」。過去形。—今は訊かない方がいい。*",
            es: "*'Solía ser'. Pasado. — Mejor no preguntar ahora.*",
            fr: "*'J'étais.' Au passé. — Vaut mieux pas demander maintenant.*",
            de: "*'War mal.' Vergangenheit. — Jetzt nicht fragen.*",
            pt: "*'Era'. Pretérito. — Melhor não perguntar agora.*"
        }
    },
    'day2_4_night.json': {
        'night2_reply_seo_5': {
            en: "*'This time, really come.' — The kind of tone that comes with consequences.*",
            ja: "*「今度こそ本当に来て。」—抜けたら代償が伴うトーン。*",
            es: "*'Esta vez ven de verdad.' — Un tono con consecuencias si fallo.*",
            fr: "*'Cette fois, viens vraiment.' — Le ton qui promet des conséquences.*",
            de: "*'Diesmal komm wirklich.' — Ein Ton mit Konsequenzen.*",
            pt: "*'Desta vez vem mesmo.' — Um tom com consequências se eu faltar.*"
        },
        'night2_flashback_9': {
            en: "*With Sojeong, I only watched one person. Liked her, only watched, and missed her breaking apart. Thirty-eight drafts that stopped in my notes app. — Watching only one meant I could lose her.*",
            ja: "*ソジョンのとき、私は一人だけを見てた。好きで、見ているだけで、崩れていくのを見逃した。メモ帳で止まった38回。—一人だけを見るって、失いうるって意味だった。*",
            es: "*En los días de Sojeong, solo miraba a una persona. La quería, solo miraba, y se me escapó su derrumbe. Treinta y ocho intentos detenidos en mis notas. — Mirar solo a una significaba poder perderla.*",
            fr: "*À l'époque de Sojeong, je ne regardais qu'une personne. Je l'aimais, je regardais juste, et j'ai raté son effondrement. Trente-huit brouillons arrêtés dans mes notes. — Ne regarder qu'une seule, c'était pouvoir la perdre.*",
            de: "*Bei Sojeong habe ich nur eine Person angesehen. Mochte sie, sah nur zu, verpasste ihren Zusammenbruch. Achtunddreißig Notizen, alle abgebrochen. — Nur eine zu sehen hieß, sie verlieren zu können.*",
            pt: "*Na época da Sojeong, eu olhava só para uma pessoa. Gostava, só observava, e perdi o momento em que ela desmoronou. Trinta e oito rascunhos parados nas notas. — Olhar só para uma significava poder perdê-la.*"
        },
        'night2_flashback_10': {
            en: "*— That's why I'm keeping a door open for all three. Pick one too fast, and I might miss another one falling apart. Insurance. I know it's cowardly. I'm an indecisive piece of shit. But — losing someone while watching only her, that I know.*",
            ja: "*—だから三人とも可能性を残してる。一人を早く決めすぎたら、別の一人が崩れるときまた見逃すかもしれないから。保険。卑怯なのは分かってる。優柔不断なクソ野郎だ。でも—一人だけ見て失うのがどんなものかは、知ってる。*",
            es: "*— Por eso dejo una puerta abierta con las tres. Si elijo una muy pronto, podría no notar cómo otra se derrumba. Un seguro. Sé que es cobardía. Un indeciso de mierda. Pero — lo que es perder a alguien mirando solo a esa persona, eso sí lo sé.*",
            fr: "*— C'est pour ça que je laisse une porte ouverte avec les trois. Si je choisis trop vite, je pourrais rater une autre qui s'effondre. Une assurance. C'est lâche, je sais. Un indécis de merde. Mais — perdre quelqu'un en ne regardant qu'elle, ça, je connais.*",
            de: "*— Deshalb halte ich mir bei allen dreien eine Tür offen. Wähle ich zu schnell, könnte ich übersehen, wie eine andere zerbricht. Absicherung. Ich weiß, es ist feige. Ein unentschlossener Idiot. Aber — jemanden zu verlieren, während man nur sie ansieht, das kenne ich.*",
            pt: "*— Por isso mantenho uma porta aberta com as três. Se escolher rápido demais, posso perder o momento em que outra desmorona. Um seguro. Sei que é covardia. Um indeciso de merda. Mas — perder alguém olhando só para ela, isso eu conheço.*"
        }
    },
    // ═════════════════ Day 3 ═════════════════
    'day3_1_morning.json': {
        'morning3_seo_gate_4': {
            en: "So what if we're late. Beats getting scolded alone.",
            ja: "遅刻がなんだっていうの。一人で叱られるよりマシじゃない。",
            es: "¿Qué importa llegar tarde? Mejor que te regañen sola.",
            fr: "On s'en fout d'être en retard. Mieux que se faire gronder toute seule.",
            de: "Wen kümmert's, wenn wir zu spät sind. Besser, als allein geschimpft zu werden.",
            pt: "E daí se chegarmos tarde? Melhor que levar bronca sozinha."
        },
        'morning3_date_intro': {
            en: "*First period ends. Every break — someone times their approach perfectly.*",
            ja: "*一限が終わった。休み時間になるたび—誰かがタイミングを合わせて話しかけてくる。*",
            es: "*Se acaba la primera clase. En cada recreo — alguien calcula el momento perfecto para hablarme.*",
            fr: "*Premier cours terminé. À chaque pause — quelqu'un me parle pile au bon moment.*",
            de: "*Erste Stunde zu Ende. Jede Pause — jemand wählt genau den richtigen Moment.*",
            pt: "*Primeira aula acaba. Em cada intervalo — alguém escolhe o momento certo pra falar comigo.*"
        }
    },
    'day3_2_lunch.json': {
        'lunch3_meal_10': {
            en: "*Last piece of rolled omelet. 'Let's share,' I said. — The air dropped.*",
            ja: "*最後の卵焼きひとつ。「みんなで食べよう」と言った。—空気が沈んだ。*",
            es: "*El último trozo del rollo de tortilla. 'Comámoslo juntos', dije. — El aire se vino abajo.*",
            fr: "*Le dernier morceau d'omelette roulée. 'On partage', j'ai dit. — L'air s'est alourdi.*",
            de: "*Das letzte Stück Omelettrolle. 'Teilen wir es', sagte ich. — Die Luft fiel.*",
            pt: "*Último pedaço de omelete enrolada. 'Vamos dividir', eu disse. — O ar caiu.*"
        },
        'lunch3_yuna_witness_2': {
            en: "*No flicker in her expression. — The stillness itself cuts.*",
            ja: "*表情が動かない。—その静けさの方がむしろ刃を立てている。*",
            es: "*Ni un gesto. — Esa quietud misma corta.*",
            fr: "*Aucun mouvement sur son visage. — C'est ce calme même qui tranche.*",
            de: "*Keine Regung im Gesicht. — Diese Stille selbst schneidet.*",
            pt: "*Nenhum movimento no rosto. — O próprio silêncio tem corte.*"
        },
        'lunch3_expose_honest_2': {
            en: "...Not being able to say no. — That's the cruelest part, {name}.",
            ja: "…断れないって。—それが一番残酷なの、{name}。",
            es: "...No poder decir que no. — Eso es lo más cruel, {name}.",
            fr: "...Ne pas pouvoir refuser. — C'est ça le plus cruel, {name}.",
            de: "...Nicht nein sagen können. — Das ist das Grausamste, {name}.",
            pt: "...Não conseguir dizer não. — É isso o mais cruel, {name}."
        }
    },
    'day3_3_afterschool.json': {
        'after3_seo_9': {
            en: "*Seoyeon straightens up. But — the smile doesn't come back.*",
            ja: "*ソヨンが姿勢を正す。でも—笑顔は戻らなかった。*",
            es: "*Seoyeon se endereza. Pero — la sonrisa no volvió.*",
            fr: "*Seoyeon se redresse. Mais — le sourire n'est pas revenu.*",
            de: "*Seoyeon richtet sich auf. Aber — das Lächeln kehrte nicht zurück.*",
            pt: "*Seoyeon se endireita. Mas — o sorriso não voltou.*"
        },
        'after3_seo_correct_8': {
            en: "*The conversation flows naturally. The one slumped on the desk, the smudged makeup — not in this room anymore. Silently, we both agreed.*",
            ja: "*会話が自然に流れる。机に突っ伏していた人も、滲んだ化粧も—今この部屋にはいない。言わずに、二人とも合意した。*",
            es: "*La conversación fluye natural. La que estaba desplomada, el maquillaje corrido — ya no están en este cuarto. Sin palabras, lo acordamos.*",
            fr: "*La conversation reprend son cours. La personne effondrée, le maquillage coulé — plus dans cette pièce. Sans mot, on s'est mis d'accord.*",
            de: "*Das Gespräch läuft natürlich. Die über dem Tisch Zusammengesunkene, das verwischte Make-up — nicht mehr in diesem Raum. Wortlos haben wir uns geeinigt.*",
            pt: "*A conversa flui naturalmente. A pessoa caída sobre a mesa, a maquiagem borrada — não estão mais nesta sala. Sem palavras, concordamos.*"
        },
        'after3_yuna_decode_trap_6': {
            en: "...People like you. Can't write a single line.",
            ja: "…あんたみたいなやつのせいで。一行も書けない。",
            es: "...Por gente como tú. No puedo escribir ni una línea.",
            fr: "...À cause des gens comme toi. Je peux pas écrire une ligne.",
            de: "...Wegen Leuten wie dir. Keine einzige Zeile bring ich raus.",
            pt: "...Por causa de gente como você. Não consigo escrever uma linha."
        },
        'after3_dain_6': {
            en: "*Too many exclamation marks. — Way too many. She doesn't use this many when she's actually okay.*",
            ja: "*ビックリマークが多い。—多すぎる。平気なときはこんなに付けないのに。*",
            es: "*Muchos signos de exclamación. — Demasiados. Cuando está bien no usa tantos.*",
            fr: "*Trop de points d'exclamation. — Beaucoup trop. Quand elle va bien, elle en met pas autant.*",
            de: "*Zu viele Ausrufezeichen. — Viel zu viele. Wenn sie okay ist, setzt sie nicht so viele.*",
            pt: "*Muitos pontos de exclamação. — Demais. Quando ela está bem, não usa tantos.*"
        }
    },
    'day3_4_night.json': {
        'night3_faithful_reflect_2_c': {
            en: "*One second. Just staring at the screen. — Sojeong's desk graffiti. The thirty-eight mornings I looked away.*",
            ja: "*1秒。画面だけ見つめる。—ソジョンの机の落書き。顔を背けた38回の朝。*",
            es: "*Un segundo. Solo miro la pantalla. — El grafiti en el pupitre de Sojeong. Las treinta y ocho mañanas en que aparté la vista.*",
            fr: "*Une seconde. Je fixe juste l'écran. — Le graffiti sur le bureau de Sojeong. Les trente-huit matins où j'ai détourné le regard.*",
            de: "*Eine Sekunde. Starre nur auf den Bildschirm. — Sojeongs Schreibtischkritzelei. Die achtunddreißig Morgen, an denen ich wegsah.*",
            pt: "*Um segundo. Só encaro a tela. — O rabisco na mesa da Sojeong. As trinta e oito manhãs em que desviei o olhar.*"
        },
        'night3_cheat_msg_7': {
            en: "*Yuna sent three lines. From someone who usually won't type even one.*",
            ja: "*ユナが三行送ってきた。普段一行も打たない人が。*",
            es: "*Yuna mandó tres líneas. De alguien que normalmente no escribe ni una.*",
            fr: "*Yuna a envoyé trois lignes. Elle qui en tape jamais une.*",
            de: "*Yuna hat drei Zeilen geschickt. Sie, die sonst nicht mal eine tippt.*",
            pt: "*Yuna mandou três linhas. Alguém que normalmente não escreve nem uma.*"
        }
    },
    // ═════════════════ Day 4 ═════════════════
    'day4_1_morning.json': {
        'morning4_seo_msg_1_b': {
            en: "*Imperative. Even dates sound like orders. — And somehow it's funny.*",
            ja: "*命令形だ。デートの約束まで指示みたいに。—でも、笑える。*",
            es: "*En imperativo. Hasta las citas suenan a órdenes. — Pero tiene gracia.*",
            fr: "*À l'impératif. Même un rendez-vous sonne comme un ordre. — Mais c'est drôle.*",
            de: "*Imperativ. Sogar Dates klingen wie Befehle. — Aber lustig ist es.*",
            pt: "*No imperativo. Até encontros soam como ordens. — Mas é engraçado.*"
        },
        'hidden_homeroom_d4_5_d': {
            en: "*Here we go again. A line being crossed under the cover of 'educational concern.'*",
            ja: "*また始まった。「教育的関心」という包みの下で越えられる線。*",
            es: "*Otra vez. Una línea cruzada bajo el disfraz de 'interés educativo'.*",
            fr: "*Ça recommence. Une ligne franchie sous couvert d'« intérêt éducatif ».*",
            de: "*Schon wieder. Eine Grenze, die unter dem Deckmantel von „pädagogischem Interesse“ überschritten wird.*",
            pt: "*Lá vem de novo. Uma linha cruzada sob o disfarce de 'interesse educativo'.*"
        }
    },
    'day4_2_lunch.json': {
        'date_seo_pretty_high_4': {
            en: "*'Don't get ideas.' — But her hand can't stop tucking her hair back.*",
            ja: "*「勘違いしないで」。—でも髪をかき上げる手が忙しい。*",
            es: "*'No te hagas ilusiones.' — Pero la mano que le acomoda el pelo no para.*",
            fr: "*'Te fais pas d'illusions.' — Mais sa main n'arrête pas de remettre ses cheveux.*",
            de: "*'Bilde dir nichts ein.' — Aber ihre Hand streicht ständig durchs Haar.*",
            pt: "*'Não se iluda.' — Mas a mão dela não para de ajeitar o cabelo.*"
        },
        'date_seo_duck_4': {
            en: "*Offhand words — but spoken by someone who's been there. We pass a flower shop.*",
            ja: "*何気ない言葉なのに—経験のある人の声だ。花屋の前を通り過ぎる。*",
            es: "*Palabras casuales — pero de alguien que ya lo vivió. Pasamos frente a una floristería.*",
            fr: "*Des mots détachés — mais dits par quelqu'un qui l'a vécu. On passe devant un fleuriste.*",
            de: "*Beiläufige Worte — aber von jemandem, der's durchgemacht hat. Wir gehen an einem Blumenladen vorbei.*",
            pt: "*Palavras casuais — mas de alguém que já passou por isso. Passamos por uma floricultura.*"
        }
    },
    'day4_3_afterschool.json': {
        'confess_seo_4_b': {
            en: "*My breath goes shallow. Same as my old school. — Words I swallowed back then.*",
            ja: "*呼吸が浅くなる。前の学校でもこうだった。—あのとき飲み込んだ言葉。*",
            es: "*Mi respiración se vuelve superficial. Igual que en la otra escuela. — Palabras que entonces tragué.*",
            fr: "*Ma respiration s'accélère. Comme dans mon ancienne école. — Des mots que j'avais ravalés.*",
            de: "*Mein Atem wird flach. Wie schon in der alten Schule. — Worte, die ich damals runterschluckte.*",
            pt: "*A respiração fica rasa. Como na escola antiga. — Palavras que engoli na época.*"
        },
        'confess_seo_yes_5': {
            en: "*The words tangle. I never prepared any — and I can't stop.*",
            ja: "*言葉が絡まる。準備したこともないのに—止められない。*",
            es: "*Las palabras se enredan. Nunca las preparé — y no puedo parar.*",
            fr: "*Les mots s'emmêlent. Rien n'était préparé — et je peux plus m'arrêter.*",
            de: "*Die Worte verheddern sich. Nie vorbereitet — und ich kann nicht aufhören.*",
            pt: "*As palavras se embolam. Nunca preparei — e não consigo parar.*"
        },
        'confess_yuna_yes_6_b': {
            en: "*The day my words ran longer than Yuna's. — A first.*",
            ja: "*私の言葉がユナより長くなった日。—初めてだ。*",
            es: "*El día en que mis palabras superaron a las de Yuna. — La primera vez.*",
            fr: "*Le jour où mes mots dépassent ceux de Yuna. — Une première.*",
            de: "*Der Tag, an dem meine Worte länger sind als Yunas. — Zum ersten Mal.*",
            pt: "*O dia em que minhas palavras passaram as da Yuna. — A primeira vez.*"
        }
    },
    'day4_4_night.json': {
        'wall_seo_9': {
            en: "*Seoyeon smiles. — Not her usual ease. A smile hiding something behind it.*",
            ja: "*ソヨンが笑う。—普段の余裕じゃない。後ろに何か隠している笑み。*",
            es: "*Seoyeon sonríe. — No es su soltura habitual. Una sonrisa que oculta algo detrás.*",
            fr: "*Seoyeon sourit. — Pas son aisance habituelle. Un sourire qui cache quelque chose.*",
            de: "*Seoyeon lächelt. — Nicht ihre gewohnte Gelassenheit. Ein Lächeln, das etwas verbirgt.*",
            pt: "*Seoyeon sorri. — Não é sua elegância de sempre. Um sorriso que esconde algo.*"
        },
        'wall_seo_14': {
            en: "Every time they praised me, I thought. — Even this smile is rehearsed. Did anyone actually see me?",
            ja: "褒められるたびに思ってた。—この笑顔も練習したんだって。本物の私を見た人はいたのかって。",
            es: "Cada elogio me hacía pensar. — Hasta esta sonrisa es ensayada. ¿Alguien me vio de verdad?",
            fr: "À chaque compliment, je pensais. — Même ce sourire est répété. Quelqu'un m'a vraiment vue ?",
            de: "Bei jedem Kompliment dachte ich. — Sogar dieses Lächeln ist einstudiert. Hat mich jemand wirklich gesehen?",
            pt: "A cada elogio eu pensava. — Até esse sorriso é ensaiado. Alguém chegou a me ver de verdade?"
        },
        'wall_dain_20': {
            en: "Every time someone at school said 'So much energy!' — right here. ...I couldn't breathe.",
            ja: "学校で「元気だね！」って言われるたび—ここが。…息が詰まった。",
            es: "Cada vez que en la escuela decían '¡Qué energía!' — aquí. ...se me cerraba la garganta.",
            fr: "À chaque fois qu'à l'école on disait « Quelle pêche ! » — ici. ...je suffoquais.",
            de: "Jedes Mal wenn in der Schule jemand „So viel Energie!“ sagte — hier. ...bekam ich keine Luft.",
            pt: "Cada vez que na escola diziam 'Que energia!' — aqui. ...eu ficava sem ar."
        },
        'wall_dain_newdream_1': {
            en: "*I just stayed beside her. Neither of us spoke. — I've never been this quiet next to Dain before.*",
            ja: "*そのまま横にいた。二人とも無言。—ダインの横でこんなに長く静かなのは初めてだ。*",
            es: "*Me quedé a su lado. Los dos callados. — Nunca había estado tanto tiempo en silencio junto a Dain.*",
            fr: "*Je suis resté à côté. On se taisait tous les deux. — C'est la première fois que je suis si longtemps silencieux à côté de Dain.*",
            de: "*Ich blieb neben ihr. Beide still. — So lange still neben Dain zu sein, ist das erste Mal.*",
            pt: "*Fiquei ao lado dela. Ambos calados. — Nunca tinha ficado tanto tempo em silêncio ao lado da Dain.*"
        },
        'wall_yuna_12': {
            en: "*Yuna's sentences are longer than usual. Much longer.*",
            ja: "*ユナの文章が普段より長い。ずっと。*",
            es: "*Las frases de Yuna son más largas de lo normal. Mucho más.*",
            fr: "*Les phrases de Yuna sont plus longues que d'habitude. Beaucoup plus.*",
            de: "*Yunas Sätze sind länger als sonst. Viel länger.*",
            pt: "*As frases da Yuna estão mais longas que o normal. Muito mais.*"
        }
    },
    // ═════════════════ Day 5 ═════════════════
    'day5_2_lunch.json': {
        'tour_seo_3': {
            en: "Back then I said 'this is too much' — and almost got scolded.",
            ja: "あのとき「もったいないな」って言ったら—叱られそうになったな。",
            es: "Aquella vez dije 'es demasiado' — y casi me reñí.",
            fr: "Cette fois-là j'ai dit « c'est trop » — et j'ai failli me faire engueuler.",
            de: "Damals sagte ich 'das ist zu viel' — und wäre beinahe ausgeschimpft worden.",
            pt: "Naquela vez eu disse 'é demais' — e quase levei bronca."
        },
        'tour_yuna_8': {
            en: "You said it back then. 'Writing the ending means it ends.'",
            ja: "あのとき言ってたよね。「結末を書いたら終わるって」。",
            es: "Lo dijiste aquella vez. 'Escribir el final es terminarlo.'",
            fr: "Tu me l'as dit à l'époque. « Écrire la fin, c'est la finir. »",
            de: "Du hast es damals gesagt. 'Das Ende schreiben heißt es beenden.'",
            pt: "Você disse aquela vez. 'Escrever o fim é acabar com isso.'"
        },
        'tour_dain_12': {
            en: "Dunno what changed. ...But I can see myself off the court now, too.",
            ja: "何が変わったのかは分からない。…でもコートの外でも自分が見える。",
            es: "No sé qué cambió. ...Pero ahora me veo hasta fuera de la cancha.",
            fr: "Je sais pas ce qui a changé. ...Mais maintenant je me vois même hors du terrain.",
            de: "Weiß nicht, was anders ist. ...Aber ich sehe mich jetzt auch außerhalb des Platzes.",
            pt: "Sei lá o que mudou. ...Mas agora eu me enxergo até fora da quadra."
        }
    },
    'day5_3_afterschool.json': {
        'after5_last_chance_2_g': {
            en: "— This time I don't want to let you go. Not after you came back.",
            ja: "—今回は行かせたくない。戻ってきてくれたから。",
            es: "— Esta vez no quiero dejarte ir. Ya que volviste.",
            fr: "— Cette fois, je te laisse pas partir. Tu es revenu.",
            de: "— Diesmal will ich dich nicht gehen lassen. Du bist ja zurückgekommen.",
            pt: "— Desta vez não quero te deixar ir. Já que você voltou."
        },
        'after5_last_chance_2_q': {
            en: "I waited. Since yesterday. No, since the day before. But — it doesn't just get okay right away.",
            ja: "待ってた。昨日から。ううん、一昨日から。でも—すぐに大丈夫にはならない。",
            es: "Te esperé. Desde ayer. No, desde anteayer. Pero — no se arregla de golpe.",
            fr: "J'ai attendu. Depuis hier. Non, depuis avant-hier. Mais — ça va pas d'un coup.",
            de: "Ich hab gewartet. Seit gestern. Nein, seit vorgestern. Aber — so schnell wird's nicht okay.",
            pt: "Esperei. Desde ontem. Não, desde anteontem. Mas — não fica tudo bem de cara."
        },
        'after5_last_chance_2_s': {
            en: "...Say it. I'll hear you out this time.",
            ja: "…話して。今度は最後まで聞くから。",
            es: "...Habla. Esta vez te escucho hasta el final.",
            fr: "...Parle. Cette fois je t'écoute jusqu'au bout.",
            de: "...Sag's. Diesmal hör ich dich bis zum Ende an.",
            pt: "...Fala. Desta vez escuto até o fim."
        },
        'after5_last_chance_yuna_5': {
            en: "...I'll listen this time. Even if I can't say it's okay.",
            ja: "…今回は聞いてから帰る。大丈夫とは言えなくても。",
            es: "...Esta vez te oiré. Aunque no pueda decir que está bien.",
            fr: "...Cette fois j'écoute. Même si je peux pas dire que ça va.",
            de: "...Diesmal höre ich zu. Auch wenn ich nicht sagen kann, dass es okay ist.",
            pt: "...Desta vez vou ouvir. Mesmo sem poder dizer que está tudo bem."
        },
        'after5_confess_react_dain': {
            en: "*Walking out of school.* Hey, really?! ...For real? I did wait, yeah. — But smiling the second I waited would feel cheap. This time say it all the way through.",
            ja: "*学校を出ながら。*ねえ、マジで？！…本当に？待ってはいたけど。—でも待ってたからってすぐ笑ったら悔しいじゃん。今度は最後まで言って。",
            es: "*Al salir de la escuela.* ¿Oye, en serio?! ...¿De verdad? Esperar, esperé. — Pero sonreír al toque me dejaría en ridículo. Esta vez dímelo hasta el final.",
            fr: "*En sortant de l'école.* Hé, sérieux ?! ...Vraiment ? J'ai attendu, oui. — Mais sourire direct, ça serait vexant. Cette fois, dis-le jusqu'au bout.",
            de: "*Als wir aus der Schule gehen.* Ey, echt?! ...Wirklich? Gewartet hab ich schon. — Aber direkt zu lächeln wär ärgerlich. Diesmal sag's bis zum Ende.",
            pt: "*Saindo da escola.* Ei, sério?! ...Mesmo? Esperar eu esperei. — Mas sorrir na hora seria humilhante. Desta vez fala até o fim."
        }
    }
};

// 파일명 → day 번호 매핑 (translation_review 업데이트용)
const fileToDay = {
    'day1_1_morning.json': 1, 'day1_2_lunch.json': 1, 'day1_3_afterschool.json': 1, 'day1_4_night.json': 1,
    'day2_1_morning.json': 2, 'day2_2_lunch.json': 2, 'day2_3_afterschool.json': 2, 'day2_4_night.json': 2,
    'day3_1_morning.json': 3, 'day3_2_lunch.json': 3, 'day3_3_afterschool.json': 3, 'day3_4_night.json': 3,
    'day4_1_morning.json': 4, 'day4_2_lunch.json': 4, 'day4_3_afterschool.json': 4, 'day4_4_night.json': 4,
    'day5_1_morning.json': 5, 'day5_2_lunch.json': 5, 'day5_3_afterschool.json': 5, 'day5_4_night.json': 5
};

let totalFiles = 0;
let totalNodes = 0;

// ========== i18n 파일 업데이트 ==========
for (const file in updates) {
    for (const lang of LANGS) {
        const filePath = path.join(i18nPath, lang, file);
        if (!fs.existsSync(filePath)) {
            console.warn(`  ⚠  Missing: ${lang}/${file}`);
            continue;
        }
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        let modified = false;
        for (const key in updates[file]) {
            const newText = updates[file][key][lang];
            if (!newText) continue;
            if (!data[key]) {
                console.warn(`  ⚠  Node not in ${lang}/${file}: ${key}`);
                continue;
            }
            data[key].text = newText;
            modified = true;
        }
        if (modified) {
            fs.writeFileSync(filePath, JSON.stringify(data, null, 4) + '\n', 'utf8');
            totalFiles++;
            console.log(`  ✓ ${lang}/${file}`);
        }
    }
}

// ========== translation_review 에서 _reviewed: true 마킹 ==========
const reviewsByDay = {};
for (const file in updates) {
    const day = fileToDay[file];
    if (!day) continue;
    const section = file.replace('.json', '');
    if (!reviewsByDay[day]) {
        const rPath = path.join(__dirname, `translation_review_day${day}.json`);
        reviewsByDay[day] = { path: rPath, data: JSON.parse(fs.readFileSync(rPath, 'utf8')), modified: false };
    }
    const { data } = reviewsByDay[day];
    if (!data[section]) continue;
    for (const nodeId in updates[file]) {
        const n = data[section][nodeId];
        if (!n) continue;
        for (const lang of LANGS) {
            if (n[lang]) n[lang]._reviewed = true;
        }
        totalNodes++;
    }
    reviewsByDay[day].modified = true;
}

// _meta.all_reviewed 재계산은 생략 (다른 노드는 여전히 unreviewed일 수 있으므로 false 유지)
for (const day in reviewsByDay) {
    const { path: rPath, data, modified } = reviewsByDay[day];
    if (!modified) continue;
    fs.writeFileSync(rPath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log(`  ✓ translation_review_day${day}.json`);
}

console.log(`\n완료: ${totalFiles}개 i18n 파일, ${totalNodes}개 리뷰 노드 갱신`);
