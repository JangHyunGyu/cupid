/**
 * ============================================================================
 * CUPID - day5_2_lunch (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day5_2_lunch.js + en_day5_2_lunch.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

Object.assign(SCENARIO[5], {
    "day5_school_arrive": {
        "background": "assets/images/background/school.png",
        "bgm": "date.mp3",
        "next": "day5_school_arrive2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교문으로 들어선다. 일요일 학교는 조용하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I walk through the school gate. The school is quiet on a Sunday.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Entro por la puerta de la escuela. La escuela está tranquila un domingo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*校門をくぐる。日曜日の学校は静かだ。*"
            }
        }
    },
    "day5_school_arrive2": {
        "background": "assets/images/background/school.png",
        "next": "day5_school_arrive3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이번 주가 정말 빨리 지나갔다. 벌써 마지막 날이라니... 교정의 나무들이 바람에 살랑인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*This week went by so fast. I can't believe it's already the last day... The trees in the schoolyard sway gently in the breeze.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Esta semana pasó volando. No puedo creer que ya sea el último día... Los árboles del patio se mecen suavemente con la brisa.*"
            },
            "ja": {
                "name": "僕",
                "text": "*今週は本当にあっという間だった。もう最後の日だなんて……校庭の木々が風にそよいでいる。*"
            }
        }
    },
    "day5_school_arrive3": {
        "background": "assets/images/background/school.png",
        "next": "day5_school_arrive4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*불과 며칠 전인데 까마득하게 느껴진다. 그때의 나는 긴장하고 불안했었지. 지금은 이렇게 달라졌다.*"
            },
            "en": {
                "name": "Me",
                "text": "*It was only a few days ago, but it feels like ages. I was so nervous and anxious back then. Look how much has changed now.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Fue hace solo unos días, pero se siente como una eternidad. Estaba tan nervioso y ansioso entonces. Mira cuánto ha cambiado ahora.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ほんの数日前なのに遠い昔のように感じる。あの時の僕は緊張して不安だった。今はこんなに変わった。*"
            }
        }
    },
    "day5_school_arrive4": {
        "background": "assets/images/background/school.png",
        "next": "day5_school_meet",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뒤를 돌아보니 저 멀리서 누군가 걸어오고 있다. 낯익은 모습이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Looking back, someone is walking from afar. A familiar figure.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mirando atrás, alguien viene caminando desde lejos. Una figura conocida.*"
            },
            "ja": {
                "name": "僕",
                "text": "*振り返ると、遠くから誰かが歩いてくる。見覚えのある姿だ。*"
            }
        }
    },
    "day5_school_meet": {
        "background": "assets/images/background/school.png",
        "selectByHighestAffinity": true,
        "branches": [
            { "next": "day5_meet_seoyeon", "character": "Seoyeon" },
            { "next": "day5_meet_yuna", "character": "Yuna" },
            { "next": "day5_meet_dain", "character": "Dain" },
            { "next": "day5_meet_nurse", "character": "Nurse" },
            { "next": "day5_meet_teacher", "character": "Teacher" }
        ],
        "_i18n": {
            "ko": { "name": "시스템", "text": "" },
            "en": { "name": "System", "text": "" },
            "es": { "name": "Sistema", "text": "" },
            "ja": { "name": "システム", "text": "" }
        }
    },
    "day5_meet_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day5_meet_seoyeon2",
        "_i18n": {
            "ko": { "name": "서연", "text": "\"여기서 처음 만났었지? 그때 길 잃은 강아지 같았어, 후후.\"" },
            "en": { "name": "Seoyeon", "text": "\"This is where we first met, right? You looked like a lost puppy back then, hehe.\"" },
            "es": { "name": "Seoyeon", "text": "\"Aquí fue donde nos conocimos, ¿no? Parecías un cachorro perdido en ese entonces, jeje.\"" },
            "ja": { "name": "ソヨン", "text": "「ここで初めて会ったんだよね？ あの時、迷子の子犬みたいだったよ、ふふ。」" }
        }
    },
    "day5_meet_seoyeon2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day5_react_seoyeon",
        "_i18n": {
            "ko": { "name": "서연", "text": "\"근데 지금은… 달라 보여. 얼굴에 여유가 생겼달까? 좋은 변화야.\"" },
            "en": { "name": "Seoyeon", "text": "\"But now... you seem different. There's a sense of ease about you. It's a nice change.\"" },
            "es": { "name": "Seoyeon", "text": "\"Pero ahora... te ves diferente. Hay una tranquilidad en ti. Es un buen cambio.\"" },
            "ja": { "name": "ソヨン", "text": "「でも今は……違って見える。顔に余裕ができたっていうか？ いい変化だよ。」" }
        }
    },
    "day5_react_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day5_seoyeon_d4_check",
        "_i18n": {
            "ko": { "name": "나", "text": "*서연이의 웃는 얼굴을 보니 가슴이 따뜻해진다. 이 학교에서 가장 처음 다가와준 사람이었지.*" },
            "en": { "name": "Me", "text": "*Seeing Seoyeon's smiling face makes my heart feel warm. She was the first person to reach out to me at this school.*" },
            "es": { "name": "Yo", "text": "*Ver la sonrisa de Seoyeon me llena el corazón de calidez. Fue la primera persona que se acercó a mí en esta escuela.*" },
            "ja": { "name": "僕", "text": "*ソヨンの笑顔を見ると胸が温かくなる。この学校で一番最初に声をかけてくれた人だった。*" }
        }
    },
    "day5_seoyeon_d4_check": {
        "background": "assets/images/background/school.png",
        "branches": [
            { "next": "day5_seoyeon_d4_warmth", "condition": "day4_hugged_seoyeon" },
            { "next": "day5_seoyeon_d4_warmth_pinky", "condition": "day4_pinky_seoyeon" },
            { "next": "day5_outfit_reaction_check" }
        ],
        "_i18n": {
            "ko": { "name": "시스템", "text": "" },
            "en": { "name": "System", "text": "" },
            "es": { "name": "Sistema", "text": "" },
            "ja": { "name": "システム", "text": "" }
        }
    },
    "day5_seoyeon_d4_warmth": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": { "Seoyeon": { "affinity": 3 } },
        "next": "day5_outfit_reaction_check",
        "_i18n": {
            "ko": { "name": "서연", "text": "\"…있잖아. 어젯밤에 안아줬을 때… 정말 고마웠어. 덕분에 용기가 났거든.\"" },
            "en": { "name": "Seoyeon", "text": "\"...You know, when you hugged me last night... I was really grateful. It gave me courage.\"" },
            "es": { "name": "Seoyeon", "text": "\"...Sabes, cuando me abrazaste anoche... estaba muy agradecida. Me dio valor.\"" },
            "ja": { "name": "ソヨン", "text": "「……あのね。昨夜抱きしめてくれた時……本当にありがとう。おかげで勇気が出たの。」" }
        }
    },
    "day5_seoyeon_d4_warmth_pinky": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": { "Seoyeon": { "affinity": 3 } },
        "next": "day5_outfit_reaction_check",
        "_i18n": {
            "ko": { "name": "서연", "text": "\"어젯밤 새끼손가락 걸었던 거… 아직도 손끝이 따뜻해. 약속, 꼭 지켜줘.\"" },
            "en": { "name": "Seoyeon", "text": "\"The pinky promise from last night... my fingertip still feels warm. Please keep your promise, okay?\"" },
            "es": { "name": "Seoyeon", "text": "\"La promesa de meñique de anoche... mi dedo todavía se siente cálido. Por favor cumple tu promesa, ¿sí?\"" },
            "ja": { "name": "ソヨン", "text": "「昨夜の指切り……まだ指先が温かいの。約束、絶対守ってね。」" }
        }
    },
    "day5_meet_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day5_meet_yuna2",
        "_i18n": {
            "ko": { "name": "유나", "text": "\"…여기. 처음 봤을 때 기억나? …나는 기억해.\"" },
            "en": { "name": "Yuna", "text": "\"...Here. Do you remember when we first met? ...I do.\"" },
            "es": { "name": "Yuna", "text": "\"...Aquí. ¿Recuerdas cuando nos conocimos? ...Yo sí.\"" },
            "ja": { "name": "ユナ", "text": "「……ここ。初めて会った時、覚えてる？ ……私は覚えてる。」" }
        }
    },
    "day5_meet_yuna2": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "day5_react_yuna",
        "_i18n": {
            "ko": { "name": "유나", "text": "\"…네가 교문에 서 있었을 때, 좀 외로워 보였어. …나도 그랬으니까, 알아봤어.\"" },
            "en": { "name": "Yuna", "text": "\"...When you were standing at the gate, you looked lonely. ...I was the same way, so I could tell.\"" },
            "es": { "name": "Yuna", "text": "\"...Cuando estabas parado en la entrada, te veías solo. ...Yo era igual, así que lo noté.\"" },
            "ja": { "name": "ユナ", "text": "「……校門に立ってた時、ちょっと寂しそうに見えた。……私も同じだったから、わかったの。」" }
        }
    },
    "day5_react_yuna": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "day5_yuna_d4_check",
        "_i18n": {
            "ko": { "name": "나", "text": "*유나가 이렇게 많은 말을 한 건 처음이다. 그만큼 오늘이 특별한 날이라는 뜻일까.*" },
            "en": { "name": "Me", "text": "*This is the first time Yuna has said so much. Does that mean today is a special day for her too?*" },
            "es": { "name": "Yo", "text": "*Es la primera vez que Yuna dice tanto. ¿Será que hoy también es un día especial para ella?*" },
            "ja": { "name": "僕", "text": "*ユナがこんなにたくさん話すのは初めてだ。それだけ今日が特別な日ということなのかな。*" }
        }
    },
    "day5_yuna_d4_check": {
        "background": "assets/images/background/school.png",
        "branches": [
            { "next": "day5_yuna_d4_warmth", "condition": "day4_held_yuna_hand" },
            { "next": "day5_yuna_d4_warmth_ally", "condition": "day4_yuna_ally" },
            { "next": "day5_outfit_reaction_check" }
        ],
        "_i18n": {
            "ko": { "name": "시스템", "text": "" },
            "en": { "name": "System", "text": "" },
            "es": { "name": "Sistema", "text": "" },
            "ja": { "name": "システム", "text": "" }
        }
    },
    "day5_yuna_d4_warmth": {
        "character": "assets/images/characters/yuna_shy.png",
        "stats": { "Yuna": { "affinity": 3 } },
        "next": "day5_outfit_reaction_check",
        "_i18n": {
            "ko": { "name": "유나", "text": "\"…어젯밤에 손 잡아줘서 고마웠어. …따뜻했어.\"" },
            "en": { "name": "Yuna", "text": "\"...Thank you for holding my hand last night. ...It was warm.\"" },
            "es": { "name": "Yuna", "text": "\"...Gracias por tomar mi mano anoche. ...Fue cálido.\"" },
            "ja": { "name": "ユナ", "text": "「……昨夜、手を握ってくれてありがとう。……温かかった。」" }
        }
    },
    "day5_yuna_d4_warmth_ally": {
        "character": "assets/images/characters/yuna_smile.png",
        "stats": { "Yuna": { "affinity": 3 } },
        "next": "day5_outfit_reaction_check",
        "_i18n": {
            "ko": { "name": "유나", "text": "\"…어제 내 편이 되어줘서. …잊지 않을게.\"" },
            "en": { "name": "Yuna", "text": "\"...For taking my side yesterday. ...I won't forget it.\"" },
            "es": { "name": "Yuna", "text": "\"...Por ponerte de mi lado ayer. ...No lo olvidaré.\"" },
            "ja": { "name": "ユナ", "text": "「……昨日、味方になってくれて。……忘れないよ。」" }
        }
    },
    "day5_meet_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day5_meet_dain2",
        "_i18n": {
            "ko": { "name": "다인", "text": "\"학교 정문에 오니까... 우리 처음 만났을 때 생각난다. 그때 내가 배구공 날린 거 기억나?!\"" },
            "en": { "name": "Dain", "text": "\"Hey! Being at the school gate reminds me of the first day!! Do you remember when I hit you with the volleyball?!\"" },
            "es": { "name": "Dain", "text": "\"¡Al estar en la entrada de la escuela me recuerda al primer día! ¿Te acuerdas cuando te pegué con la pelota de vóley?\"" },
            "ja": { "name": "ダイン", "text": "「学校の正門に来ると……初めて会った時のこと思い出すね。あの時私がバレーボール飛ばしたの覚えてる？！」" }
        }
    },
    "day5_meet_dain2": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day5_react_dain",
        "_i18n": {
            "ko": { "name": "다인", "text": "\"그땐 정말 미안했는데... 지금 생각해보면 그 우연이 참 고마워.\"" },
            "en": { "name": "Dain", "text": "\"I felt so bad about it, but looking back, maybe it was fate! If I hadn't hit you, I never would've talked to you!!\"" },
            "es": { "name": "Dain", "text": "\"Me sentía muy mal por eso, pero mirándolo ahora, ¡tal vez fue el destino! Si no te hubiera golpeado, ¡nunca te habría hablado!\"" },
            "ja": { "name": "ダイン", "text": "「あの時は本当にごめんね……でも今思えば、あの偶然に感謝だよ。」" }
        }
    },
    "day5_react_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day5_dain_d4_check",
        "_i18n": {
            "ko": { "name": "나", "text": "*갑작스러운 사고처럼 시작된 인연이었지만, 지금은 그 우연마저 필연처럼 느껴진다. 다인이의 환한 웃음이 내 일상을 완전히 바꿔놓았으니까.*" },
            "en": { "name": "Me", "text": "*Getting hit by that volleyball did hurt... but if it's how I met Dain, maybe I should be grateful.*" },
            "es": { "name": "Yo", "text": "*Ese pelotazo sí que dolió... pero si así conocí a Dain, tal vez debería estar agradecido.*" },
            "ja": { "name": "僕", "text": "*突然の事故のように始まった縁だったけど、今ではあの偶然さえ運命のように感じる。ダインの明るい笑顔が僕の日常を完全に変えたんだから。*" }
        }
    },
    "day5_dain_d4_check": {
        "background": "assets/images/background/school.png",
        "branches": [
            { "next": "day5_dain_d4_warmth", "condition": "day4_dain_tears" },
            { "next": "day5_outfit_reaction_check" }
        ],
        "_i18n": {
            "ko": { "name": "시스템", "text": "" },
            "en": { "name": "System", "text": "" },
            "es": { "name": "Sistema", "text": "" },
            "ja": { "name": "システム", "text": "" }
        }
    },
    "day5_dain_d4_warmth": {
        "character": "assets/images/characters/dain_shy.png",
        "stats": { "Dain": { "affinity": 3 } },
        "next": "day5_outfit_reaction_check",
        "_i18n": {
            "ko": { "name": "다인", "text": "\"…어제 운 거 비밀이야!! 근데… 네 앞에서 울 수 있어서, 다행이었어.\"" },
            "en": { "name": "Dain", "text": "\"...Me crying yesterday is a SECRET!! But... I'm glad I could cry in front of you.\"" },
            "es": { "name": "Dain", "text": "\"...¡¡Lo de que lloré ayer es un SECRETO!! Pero... me alegra haber podido llorar frente a ti.\"" },
            "ja": { "name": "ダイン", "text": "「……昨日泣いたのは秘密だからね!! でも……あなたの前で泣けて、よかった。」" }
        }
    },
    "day5_meet_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day5_meet_nurse2",
        "_i18n": {
            "ko": { "name": "보건선생님", "text": "\"주말에 학교에 오니까 기분이 묘하네. 이 학교에서 너를 만난 건… 운명이었을까.\"" },
            "en": { "name": "School Nurse", "text": "\"Coming to school on a weekend feels strange. Meeting you at this school... was it destiny, I wonder.\"" },
            "es": { "name": "Enfermera", "text": "\"Venir a la escuela un fin de semana se siente raro. Conocerte en esta escuela... ¿habrá sido el destino?\"" },
            "ja": { "name": "保健先生", "text": "「週末に学校に来ると不思議な気分。この学校であなたに出会ったのは……運命だったのかな。」" }
        }
    },
    "day5_meet_nurse2": {
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day5_react_nurse",
        "_i18n": {
            "ko": { "name": "보건선생님", "text": "\"전학 온 첫날 보건실에 왔을 때, 긴장한 얼굴이 귀여웠어. 지금은 좀 의젓해졌네.\"" },
            "en": { "name": "School Nurse", "text": "\"When you came to the nurse's office on your first day, your nervous face was so cute. You've matured a lot since then.\"" },
            "es": { "name": "Enfermera", "text": "\"Cuando viniste a la enfermería en tu primer día, tu cara nerviosa era muy tierna. Has madurado mucho desde entonces.\"" },
            "ja": { "name": "保健先生", "text": "「転校初日に保健室に来た時、緊張した顔がかわいかったよ。今はだいぶ大人っぽくなったね。」" }
        }
    },
    "day5_react_nurse": {
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day5_outfit_reaction_check",
        "_i18n": {
            "ko": { "name": "나", "text": "*사복 차림의 선생님이 낯설면서도 설렌다. 평소 가운 속에 가려진 모습이 이렇게 아름다울 줄이야.*" },
            "en": { "name": "Me", "text": "*Seeing her in casual clothes feels unfamiliar yet exciting. I had no idea she looked this beautiful underneath that usual lab coat.*" },
            "es": { "name": "Yo", "text": "*Verla con ropa casual se siente extraño pero emocionante. No tenía idea de que se veía tan hermosa debajo de esa bata.*" },
            "ja": { "name": "僕", "text": "*私服姿の先生が新鮮でドキドキする。いつもの白衣の下にこんなに綺麗な姿が隠れていたなんて。*" }
        }
    },
    "day5_meet_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day5_meet_teacher2",
        "_i18n": {
            "ko": { "name": "담임선생님", "text": "\"하, 주말에 학교 오니까 이상하네. 근데… 너랑 같이니까 나쁘지 않아.\"" },
            "en": { "name": "Homeroom Teacher", "text": "\"Ha, coming to school on a weekend is weird. But... being here with you, it's not so bad.\"" },
            "es": { "name": "Profesora", "text": "\"Ja, venir a la escuela un fin de semana es raro. Pero... estar aquí contigo no está tan mal.\"" },
            "ja": { "name": "担任先生", "text": "「はぁ、週末に学校来ると変な感じ。でも……あなたと一緒だから悪くないかな。」" }
        }
    },
    "day5_meet_teacher2": {
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day5_react_teacher",
        "_i18n": {
            "ko": { "name": "담임선생님", "text": "\"전학 온 첫날 교무실에서 처음 봤을 때, 불안한 눈이었는데. 지금은 완전히 다른 사람 같아.\"" },
            "en": { "name": "Homeroom Teacher", "text": "\"When I first saw you in the staff room on your transfer day, your eyes looked so anxious. Now you seem like a completely different person.\"" },
            "es": { "name": "Profesora", "text": "\"Cuando te vi por primera vez en la sala de profesores el día de tu transferencia, tus ojos se veían tan ansiosos. Ahora pareces una persona completamente diferente.\"" },
            "ja": { "name": "担任先生", "text": "「転校初日に職員室で初めて見た時、不安そうな目をしてたのに。今は全然違う人みたい。」" }
        }
    },
    "day5_react_teacher": {
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day5_outfit_reaction_check",
        "_i18n": {
            "ko": { "name": "나", "text": "*칭찬을 듣는 건 드문 일이라 더 기쁘다. 선생님도 오늘은 부드러운 표정이다.*" },
            "en": { "name": "Me", "text": "*Getting a compliment from her is so rare that it makes me even happier. She has such a soft expression today too.*" },
            "es": { "name": "Yo", "text": "*Recibir un cumplido de ella es tan raro que me hace aún más feliz. Hoy también tiene una expresión muy suave.*" },
            "ja": { "name": "僕", "text": "*褒められるのは珍しいからなおさら嬉しい。先生も今日は柔らかい表情だ。*" }
        }
    },
    "day5_outfit_reaction_check": {
        "background": "assets/images/background/school.png",
        "branches": [
            { "next": "day5_outfit_compliment", "condition": "day5_outfit_special" },
            { "next": "day5_walk_together" }
        ],
        "_i18n": {
            "ko": { "name": "시스템", "text": "" },
            "en": { "name": "System", "text": "" },
            "es": { "name": "Sistema", "text": "" },
            "ja": { "name": "システム", "text": "" }
        }
    },
    "day5_outfit_compliment": {
        "background": "assets/images/background/school.png",
        "next": "day5_walk_together",
        "_i18n": {
            "ko": { "name": "나", "text": "(상대가 내 옷차림을 보더니 눈을 동그랗게 떴다. \"오늘 왜 이렇게 멋져?\" 라는 말에 괜히 뿌듯해진다.)" },
            "en": { "name": "Me", "text": "(They look me up and down, eyes widening. \"Why do you look so nice today?\" The small compliment makes my heart flutter.)" },
            "es": { "name": "Yo", "text": "(Me mira de arriba a abajo con los ojos bien abiertos. \"¿Por qué te ves tan bien hoy?\" El pequeño cumplido me hace sentir mariposas.)" },
            "ja": { "name": "僕", "text": "(相手が僕の服装を見て目を丸くした。「今日なんでそんなにかっこいいの？」という言葉に思わず嬉しくなる。)" }
        }
    },
    "day5_walk_together": {
        "character": null,
        "next": "day5_walk_enter",
        "_i18n": {
            "ko": { "name": "나", "text": "\"안으로 들어가 볼까? 추억의 장소들이 많잖아.\"" },
            "en": { "name": "Me", "text": "\"Want to go inside? There are a lot of places with memories here.\"" },
            "es": { "name": "Yo", "text": "\"¿Quieres entrar? Hay muchos lugares con recuerdos aquí.\"" },
            "ja": { "name": "僕", "text": "「中に入ってみない？思い出の場所がたくさんあるし。」" }
        }
    },
    "day5_walk_enter": {
        "character": null,
        "background": "assets/images/background/school_hallway.png",
        "next": "day5_corridor1",
        "_i18n": {
            "ko": { "name": "나", "text": "*나란히 학교 안으로 들어섰다. 일요일 학교는 텅 비어 있어서 우리 발소리만 울린다.*" },
            "en": { "name": "Me", "text": "*We walked into the school side by side. The school is empty on a Sunday, so only our footsteps echo through the halls.*" },
            "es": { "name": "Yo", "text": "*Entramos a la escuela lado a lado. La escuela está vacía un domingo, así que solo nuestros pasos resuenan en los pasillos.*" },
            "ja": { "name": "僕", "text": "*並んで校舎の中に入った。日曜日の学校はがらんとしていて、僕たちの足音だけが響く。*" }
        }
    },
    "day5_corridor1": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_corridor2",
        "_i18n": {
            "ko": { "name": "나", "text": "*이 복도… 전학 온 첫날, 교실을 찾지 못해서 헤맸던 곳이다. 어디로 가야 할지 몰라 발이 떨어지지 않았었지.*" },
            "en": { "name": "Me", "text": "*This hallway... On my first day as a transfer student, I wandered here trying to find my classroom. I couldn't bring myself to move, not knowing where to go.*" },
            "es": { "name": "Yo", "text": "*Este pasillo... En mi primer día como estudiante transferido, vagué por aquí tratando de encontrar mi salón. No podía moverme sin saber a dónde ir.*" },
            "ja": { "name": "僕", "text": "*この廊下……転校初日、教室が見つからなくて迷った場所だ。どこに行けばいいかわからなくて足が動かなかった。*" }
        }
    },
    "day5_corridor2": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_classroom_enter",
        "_i18n": {
            "ko": { "name": "나", "text": "*그때 이 복도에서 누군가가 말을 걸어줬다. 그 작은 친절이 지금까지 이어진 거다.*" },
            "en": { "name": "Me", "text": "*Someone spoke to me in this hallway back then. That small act of kindness led to everything that followed.*" },
            "es": { "name": "Yo", "text": "*Alguien me habló en este pasillo aquel día. Ese pequeño acto de amabilidad llevó a todo lo que vino después.*" },
            "ja": { "name": "僕", "text": "*あの時この廊下で誰かが声をかけてくれた。あの小さな優しさが今まで続いているんだ。*" }
        }
    },
    "day5_classroom_enter": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "day5_classroom1",
        "_i18n": {
            "ko": { "name": "나", "text": "*교실 문을 열었다. 빈 교실에 햇살이 비스듬히 들어와 책상 위를 물들인다.*" },
            "en": { "name": "Me", "text": "*I opened the classroom door. Sunlight streams in at an angle, painting the desks in a golden glow.*" },
            "es": { "name": "Yo", "text": "*Abrí la puerta del salón. La luz del sol entra en diagonal, tiñendo los escritorios de un brillo dorado.*" },
            "ja": { "name": "僕", "text": "*教室のドアを開けた。空っぽの教室に日差しが斜めに差し込んで、机の上を染めている。*" }
        }
    },
    "day5_classroom1": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day5_classroom2",
        "_i18n": {
            "ko": { "name": "나", "text": "*내 자리. 전학 와서 처음 앉았던 그 자리가 그대로 있다. 잠깐 다시 앉아봤다.*" },
            "en": { "name": "Me", "text": "*My seat. The same seat I first sat in when I transferred here is still here. I sat down in it for a moment.*" },
            "es": { "name": "Yo", "text": "*Mi asiento. El mismo donde me senté por primera vez cuando me transferí sigue aquí. Me senté un momento.*" },
            "ja": { "name": "僕", "text": "*僕の席。転校してきて初めて座ったあの席がそのまま残っている。少しだけまた座ってみた。*" }
        }
    },
    "day5_classroom2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day5_classroom3",
        "_i18n": {
            "ko": { "name": "나", "text": "*이 자리에서 칠판을 올려다보면… 아, 그때와 같은 각도다. 이상하게 편안해진다.*" },
            "en": { "name": "Me", "text": "*Looking up at the blackboard from this seat... Ah, it's the same angle as back then. Somehow, it feels comforting.*" },
            "es": { "name": "Yo", "text": "*Mirando la pizarra desde este asiento... Ah, es el mismo ángulo de aquel entonces. De alguna forma, me reconforta.*" },
            "ja": { "name": "僕", "text": "*この席から黒板を見上げると……ああ、あの時と同じ角度だ。不思議と落ち着く。*" }
        }
    },
    "day5_classroom3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day5_classroom_react",
        "_i18n": {
            "ko": { "name": "나", "text": "\"여기서 참 많은 일이 있었지. 수업 시간에 졸다가 걸리기도 하고, 쪽지도 돌리고…\"" },
            "en": { "name": "Me", "text": "\"A lot happened in this classroom. Getting caught dozing off during class, passing notes around...\"" },
            "es": { "name": "Yo", "text": "\"Pasaron muchas cosas en este salón. Me cacharon dormitando en clase, pasamos notas...\"" },
            "ja": { "name": "僕", "text": "「この教室でいろんなことがあったよね。授業中に居眠りしてバレたり、手紙回したり……」" }
        }
    },
    "day5_classroom_react": {
        "background": "assets/images/background/room_school.png",
        "selectByHighestAffinity": true,
        "branches": [
            { "next": "day5_classroom_seoyeon", "character": "Seoyeon" },
            { "next": "day5_classroom_yuna", "character": "Yuna" },
            { "next": "day5_classroom_dain", "character": "Dain" },
            { "next": "day5_classroom_nurse", "character": "Nurse" },
            { "next": "day5_classroom_teacher", "character": "Teacher" }
        ],
        "_i18n": {
            "ko": { "name": "시스템", "text": "" },
            "en": { "name": "System", "text": "" },
            "es": { "name": "Sistema", "text": "" },
            "ja": { "name": "システム", "text": "" }
        }
    },
    "day5_classroom_seoyeon": {
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "day5_memory_spot_suggest",
        "_i18n": {
            "ko": { "name": "서연", "text": "\"맞아. 네가 처음 자기소개 했을 때, 나는 이미 '이 사람 괜찮다' 생각했거든. 학생회장의 직감이랄까.\"" },
            "en": { "name": "Seoyeon", "text": "\"Yeah. When you first introduced yourself, I already thought 'This person seems nice.' Call it the student council president's intuition.\"" },
            "es": { "name": "Seoyeon", "text": "\"Sí. Cuando te presentaste por primera vez, ya pensé 'esta persona parece agradable'. Llámalo intuición de presidenta del consejo estudiantil.\"" },
            "ja": { "name": "ソヨン", "text": "「そうだよね。初めて自己紹介した時、私はもう『この人いいな』って思ってたんだ。生徒会長の直感っていうか。」" }
        }
    },
    "day5_classroom_yuna": {
        "character": "assets/images/characters/yuna_shy.png",
        "next": "day5_memory_spot_suggest",
        "_i18n": {
            "ko": { "name": "유나", "text": "\"…여기서 처음으로 눈이 마주쳤어. 창밖 보고 있었는데… 네가 나를 봤을 때, 심장이 뛰었어.\"" },
            "en": { "name": "Yuna", "text": "\"...Our eyes met here for the first time. I was looking out the window... and when you looked at me, my heart skipped a beat.\"" },
            "es": { "name": "Yuna", "text": "\"...Nuestras miradas se cruzaron aquí por primera vez. Estaba mirando por la ventana... y cuando me miraste, mi corazón dio un salto.\"" },
            "ja": { "name": "ユナ", "text": "「……ここで初めて目が合ったの。窓の外を見てたんだけど……あなたが私を見た時、心臓がドキッとした。」" }
        }
    },
    "day5_classroom_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day5_memory_spot_suggest",
        "_i18n": {
            "ko": { "name": "다인", "text": "\"여기서 체육 수업 전에 스트레칭 했잖아!! 너 유연성 진짜 없었는데 ㅋㅋ 지금은 좀 나아졌어?\"" },
            "en": { "name": "Dain", "text": "\"We used to stretch in here before gym class!! You were so inflexible back then, lol. Has it gotten any better?\"" },
            "es": { "name": "Dain", "text": "\"¡¡Aquí hacíamos estiramientos antes de educación física!! Eras tan poco flexible, jaja. ¿Mejoraste algo?\"" },
            "ja": { "name": "ダイン", "text": "「ここで体育の前にストレッチしたでしょ!! あの時の柔軟性のなさったら笑 今は少しマシになった？」" }
        }
    },
    "day5_classroom_nurse": {
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day5_memory_spot_suggest",
        "_i18n": {
            "ko": { "name": "보건선생님", "text": "\"이 교실에 수업 참관 왔을 때, 네가 자꾸 보건실 쪽 창문을 보는 거 알았거든? 후후.\"" },
            "en": { "name": "School Nurse", "text": "\"When I came for a class observation, I noticed you kept looking toward the nurse's office window, you know? Hehe.\"" },
            "es": { "name": "Enfermera", "text": "\"Cuando vine a observar la clase, noté que no dejabas de mirar hacia la ventana de la enfermería, ¿sabes? Jeje.\"" },
            "ja": { "name": "保健先生", "text": "「この教室に授業参観に来た時、あなたがずっと保健室側の窓を見てるの気づいてたんだよ？ ふふ。」" }
        }
    },
    "day5_classroom_teacher": {
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day5_memory_spot_suggest",
        "_i18n": {
            "ko": { "name": "담임선생님", "text": "\"매일 이 교실에서 출석 부르면서 네 이름을 불렀는데. 슬슬 익숙해질 만하면… 벌써 마지막이네.\"" },
            "en": { "name": "Homeroom Teacher", "text": "\"Every day in this classroom, I called your name during roll call. Just when I was getting used to it... it's already the end.\"" },
            "es": { "name": "Profesora", "text": "\"Cada día en este salón, decía tu nombre al pasar lista. Justo cuando me estaba acostumbrando... ya es el final.\"" },
            "ja": { "name": "担任先生", "text": "「毎日この教室で出席を取りながらあなたの名前を呼んでたのに。そろそろ慣れてきたところで……もう最後なのね。」" }
        }
    },
    "day5_memory_spot_suggest": {
        "character": null,
        "next": "day5_memory_spot_branch",
        "_i18n": {
            "ko": { "name": "나", "text": "\"가고 싶은 데 있어? 더 둘러보자.\"" },
            "en": { "name": "Me", "text": "\"Is there anywhere you'd like to go? Let's look around some more.\"" },
            "es": { "name": "Yo", "text": "\"¿Hay algún lugar donde quieras ir? Sigamos recorriendo.\"" },
            "ja": { "name": "僕", "text": "「行きたい場所ある？もっと見て回ろう。」" }
        }
    },
    "day5_memory_spot_branch": {
        "selectByHighestAffinity": true,
        "branches": [
            { "next": "day5_memory_seoyeon", "character": "Seoyeon" },
            { "next": "day5_memory_yuna", "character": "Yuna" },
            { "next": "day5_memory_dain", "character": "Dain" },
            { "next": "day5_memory_nurse", "character": "Nurse" },
            { "next": "day5_memory_teacher", "character": "Teacher" }
        ],
        "_i18n": {
            "ko": { "name": "시스템", "text": "" },
            "en": { "name": "System", "text": "" },
            "es": { "name": "Sistema", "text": "" },
            "ja": { "name": "システム", "text": "" }
        }
    },
    "day5_memory_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "background": "assets/images/background/park.png",
        "next": "day5_memory_seoyeon2",
        "_i18n": {
            "ko": { "name": "서연", "text": "\"아! 잠깐, 정원 쪽으로 가보자. 내가 매일 물 주던 화단 기억나?\"" },
            "en": { "name": "Seoyeon", "text": "\"Oh! Wait, let's go to the garden. Remember the flower bed I used to water every day?\"" },
            "es": { "name": "Seoyeon", "text": "\"¡Oh! Espera, vamos al jardín. ¿Recuerdas el macizo de flores que regaba todos los días?\"" },
            "ja": { "name": "ソヨン", "text": "「あ！ちょっと待って、庭の方に行こう。私が毎日水やりしてた花壇、覚えてる？」" }
        }
    },
    "day5_memory_seoyeon2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": { "Seoyeon": { "affinity": 3 } },
        "next": "day5_memory_common",
        "_i18n": {
            "ko": { "name": "서연", "text": "\"봐, 내가 심은 꽃들이 다 피었어. 네가 처음 여기 왔을 때 같이 물 줬었잖아. 그때부터… 느꼈어.\"" },
            "en": { "name": "Seoyeon", "text": "\"Look, all the flowers I planted have bloomed. You helped me water them the first time you came here. That's when I... started to feel something.\"" },
            "es": { "name": "Seoyeon", "text": "\"Mira, todas las flores que planté florecieron. Me ayudaste a regarlas la primera vez que viniste. Desde ese momento... empecé a sentir algo.\"" },
            "ja": { "name": "ソヨン", "text": "「見て、私が植えた花が全部咲いたよ。あなたが初めてここに来た時、一緒に水やりしたでしょ。あの時から……感じてたの。」" }
        }
    },
    "day5_memory_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/library_old.png",
        "next": "day5_memory_yuna2",
        "_i18n": {
            "ko": { "name": "유나", "text": "\"…잠깐. 저기 가볼래. 도서관.\"" },
            "en": { "name": "Yuna", "text": "\"...Wait. Can we go over there? The library.\"" },
            "es": { "name": "Yuna", "text": "\"...Espera. ¿Podemos ir allá? La biblioteca.\"" },
            "ja": { "name": "ユナ", "text": "「……ちょっと待って。あそこ行きたい。図書館。」" }
        }
    },
    "day5_memory_yuna2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_smile.png",
        "stats": { "Yuna": { "affinity": 3 } },
        "next": "day5_memory_common",
        "_i18n": {
            "ko": { "name": "유나", "text": "\"…여기서 처음으로 옆자리에 앉았었지. 네가 책 제목 물어봤을 때… 놀랐어. 아무도 말 건 적 없었으니까.\"" },
            "en": { "name": "Yuna", "text": "\"...This is where you first sat next to me. When you asked me about the book title... I was surprised. Nobody had ever talked to me before.\"" },
            "es": { "name": "Yuna", "text": "\"...Aquí fue donde te sentaste a mi lado por primera vez. Cuando me preguntaste por el título del libro... me sorprendí. Nadie me había hablado antes.\"" },
            "ja": { "name": "ユナ", "text": "「……ここで初めて隣に座ったんだよね。本のタイトルを聞いてきた時……驚いた。誰も話しかけてこなかったから。」" }
        }
    },
    "day5_memory_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "background": "assets/images/background/gym.png",
        "next": "day5_memory_dain2",
        "_i18n": {
            "ko": { "name": "다인", "text": "\"잠깐!! 체육관 가자!! 첫날 여기서 사건이 일어났잖아!!\"" },
            "en": { "name": "Dain", "text": "\"Wait!! Let's go to the gym!! That's where the whole thing started on the first day!!\"" },
            "es": { "name": "Dain", "text": "\"¡¡Espera!! ¡¡Vamos al gimnasio!! ¡¡Ahí empezó todo el primer día!!\"" },
            "ja": { "name": "ダイン", "text": "「ちょっと!! 体育館行こう!! 初日にあそこで事件が起きたでしょ!!」" }
        }
    },
    "day5_memory_dain2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "stats": { "Dain": { "affinity": 3 } },
        "next": "day5_memory_common",
        "_i18n": {
            "ko": { "name": "다인", "text": "\"여기서 내가 배구 연습하다가 공이 날아갔는데… 네 얼굴에 맞았지! 미안ㅋㅋ 근데 그때 화 안 내서 고마웠어.\"" },
            "en": { "name": "Dain", "text": "\"I was practicing volleyball here and the ball went flying... and hit you right in the face! Sorry, haha! But I was grateful you didn't get mad.\"" },
            "es": { "name": "Dain", "text": "\"Estaba practicando vóley aquí y la pelota voló... ¡y te dio justo en la cara! Perdón, jaja. Pero te agradezco que no te enojaras.\"" },
            "ja": { "name": "ダイン", "text": "「ここでバレーの練習してたらボールが飛んでって……あなたの顔に当たったよね！ごめんね笑 でもあの時怒らないでくれてありがとう。」" }
        }
    },
    "day5_memory_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "background": "assets/images/background/nurse_room.jpg",
        "next": "day5_memory_nurse2",
        "_i18n": {
            "ko": { "name": "보건선생님", "text": "\"보건실 한번 들러볼까? 네가 처음 온 날 기억이 새롭네.\"" },
            "en": { "name": "School Nurse", "text": "\"Shall we stop by the nurse's office? I vividly remember the day you first came.\"" },
            "es": { "name": "Enfermera", "text": "\"¿Pasamos por la enfermería? Recuerdo vívidamente el día que viniste por primera vez.\"" },
            "ja": { "name": "保健先生", "text": "「保健室に寄ってみない？あなたが初めて来た日の記憶が鮮明よ。」" }
        }
    },
    "day5_memory_nurse2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "stats": { "Nurse": { "affinity": 3 } },
        "next": "day5_memory_common",
        "_i18n": {
            "ko": { "name": "보건선생님", "text": "\"전학 첫날 긴장해서 머리 아프다고 왔었잖아. 그때 네 이마에 손 올려줬는데… 네 얼굴이 새빨갛더라, 후후.\"" },
            "en": { "name": "School Nurse", "text": "\"On your first day, you came in saying you had a headache because you were so nervous. When I put my hand on your forehead... your face turned bright red, hehe.\"" },
            "es": { "name": "Enfermera", "text": "\"El primer día, viniste diciendo que te dolía la cabeza por los nervios. Cuando puse mi mano en tu frente... tu cara se puso roja como un tomate, jeje.\"" },
            "ja": { "name": "保健先生", "text": "「転校初日、緊張で頭が痛いって来たでしょ。あの時おでこに手を当てたら……顔が真っ赤だったよね、ふふ。」" }
        }
    },
    "day5_memory_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "background": "assets/images/background/room_school.png",
        "next": "day5_memory_teacher2",
        "_i18n": {
            "ko": { "name": "담임선생님", "text": "\"잠깐. 교탁 앞에 좀 서 봐. 전학 와서 자기소개 했던 그 자리야.\"" },
            "en": { "name": "Homeroom Teacher", "text": "\"Wait. Stand in front of the podium. That's where you introduced yourself on your first day.\"" },
            "es": { "name": "Profesora", "text": "\"Espera. Párate frente al podio. Ahí es donde te presentaste en tu primer día.\"" },
            "ja": { "name": "担任先生", "text": "「ちょっと待って。教壇の前に立ってみて。転校してきて自己紹介した場所よ。」" }
        }
    },
    "day5_memory_teacher2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "stats": { "Teacher": { "affinity": 3 } },
        "next": "day5_memory_common",
        "_i18n": {
            "ko": { "name": "담임선생님", "text": "\"그때 목소리가 많이 떨렸는데… 내가 속으로 '이 녀석, 좀 걱정되네' 했어. 근데 지금은 달라졌잖아.\"" },
            "en": { "name": "Homeroom Teacher", "text": "\"Your voice was trembling so much back then... I was thinking to myself, 'This kid, I'm a bit worried about him.' But you've really changed since then.\"" },
            "es": { "name": "Profesora", "text": "\"Tu voz temblaba mucho en ese entonces... Pensé para mí, 'Este chico, me preocupa un poco'. Pero has cambiado mucho desde entonces.\"" },
            "ja": { "name": "担任先生", "text": "「あの時、声がすごく震えてたのに……私は心の中で『この子、ちょっと心配だな』って思ってた。でも今はすっかり変わったよね。」" }
        }
    },
    "day5_memory_common": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "day5_memory_common2",
        "_i18n": {
            "ko": { "name": "나", "text": "*이곳에서의 기억이 가슴 깊은 곳에서 올라온다. 처음엔 아무것도 몰랐는데, 하루하루가 쌓여서 지금의 나를 만들었다.*" },
            "en": { "name": "Me", "text": "*Memories of this place well up from deep within my heart. I knew nothing at first, but each passing day built up to who I am now.*" },
            "es": { "name": "Yo", "text": "*Los recuerdos de este lugar brotan desde lo profundo de mi corazón. Al principio no sabía nada, pero cada día que pasó me convirtió en quien soy ahora.*" },
            "ja": { "name": "僕", "text": "*ここでの記憶が胸の奥から湧き上がってくる。最初は何も知らなかったのに、一日一日が積み重なって今の僕を作った。*" }
        }
    },
    "day5_memory_common2": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "day5_rooftop_suggest",
        "_i18n": {
            "ko": { "name": "나", "text": "*모든 장소에 추억이 있고, 그 추억에는 언제나 이 사람이 있었다. 그게 뭘 의미하는지, 나는 이제 안다.*" },
            "en": { "name": "Me", "text": "*Every place holds a memory, and in every memory, this person was always there. I know what that means now.*" },
            "es": { "name": "Yo", "text": "*Cada lugar guarda un recuerdo, y en cada recuerdo, esta persona siempre estuvo ahí. Ahora sé lo que eso significa.*" },
            "ja": { "name": "僕", "text": "*どの場所にも思い出があって、その思い出にはいつもこの人がいた。それが何を意味するのか、僕はもうわかっている。*" }
        }
    },
    "day5_rooftop_suggest": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day5_rooftop_stairs1",
        "_i18n": {
            "ko": { "name": "나", "text": "\"저기… 옥상 한번 가볼래? 오늘 날씨도 좋고, 위에서 보면 경치가 좋을 것 같아.\"" },
            "en": { "name": "Me", "text": "\"Hey... want to go up to the rooftop? The weather's nice today, and the view from up there should be great.\"" },
            "es": { "name": "Yo", "text": "\"Oye... ¿quieres subir a la azotea? El clima está lindo hoy, y la vista desde arriba debe ser genial.\"" },
            "ja": { "name": "僕", "text": "「あの……屋上に行ってみない？今日天気もいいし、上から見たら景色が綺麗だと思うんだ。」" }
        }
    },
    "day5_rooftop_stairs1": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_rooftop_stairs2",
        "_i18n": {
            "ko": { "name": "나", "text": "*계단을 올라간다. 발소리 두 개가 텅 빈 계단통에 울려 퍼진다. 한 층, 두 층.*" },
            "en": { "name": "Me", "text": "*We climb the stairs. Two sets of footsteps echo through the empty stairwell. One floor, two floors.*" },
            "es": { "name": "Yo", "text": "*Subimos las escaleras. Dos pares de pisadas resuenan en la escalera vacía. Un piso, dos pisos.*" },
            "ja": { "name": "僕", "text": "*階段を上る。二つの足音ががらんとした階段に響く。一階、二階。*" }
        }
    },
    "day5_rooftop_stairs2": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_rooftop_door",
        "_i18n": {
            "ko": { "name": "나", "text": "*마지막 계단을 올라 옥상 문 앞에 섰다. 문 틈 사이로 바람이 새어 들어온다.*" },
            "en": { "name": "Me", "text": "*We reached the top of the last staircase and stood before the rooftop door. A breeze slips through the gap in the door.*" },
            "es": { "name": "Yo", "text": "*Llegamos al final de la última escalera y nos paramos frente a la puerta de la azotea. Una brisa se cuela por la rendija.*" },
            "ja": { "name": "僕", "text": "*最後の階段を上って屋上のドアの前に立った。ドアの隙間から風が吹き込んでくる。*" }
        }
    },
    "day5_rooftop_door": {
        "character": null,
        "background": "assets/images/background/top_school.png",
        "next": "day5_rooftop_view1",
        "_i18n": {
            "ko": { "name": "나", "text": "*삐걱. 옥상 문을 열자 탁 트인 하늘이 펼쳐졌다. 바람이 기분 좋게 불어온다.*" },
            "en": { "name": "Me", "text": "*Creak. The rooftop door swings open to reveal a wide-open sky. A pleasant breeze greets us.*" },
            "es": { "name": "Yo", "text": "*Creak. La puerta de la azotea se abre revelando un cielo abierto. Una agradable brisa nos recibe.*" },
            "ja": { "name": "僕", "text": "*ギィ。屋上のドアを開けると、広い空が広がった。心地よい風が吹いてくる。*" }
        }
    },
    "day5_rooftop_view1": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "next": "day5_rooftop_view2",
        "_i18n": {
            "ko": { "name": "나", "text": "*와… 여기서 보는 풍경이 이렇게 아름다운 거였나. 학교 운동장, 저 멀리 이어진 지붕들, 아까 걸었던 거리.*" },
            "en": { "name": "Me", "text": "*Wow... Was the view from up here always this beautiful? The school grounds, the rooftops stretching into the distance, the streets we walked earlier.*" },
            "es": { "name": "Yo", "text": "*Wow... ¿La vista desde aquí siempre fue tan hermosa? El patio de la escuela, los techos extendiéndose a la distancia, las calles que caminamos antes.*" },
            "ja": { "name": "僕", "text": "*わぁ……ここから見る景色ってこんなに綺麗だったんだ。校庭、遠くまで続く屋根、さっき歩いた道。*" }
        }
    },
    "day5_rooftop_view2": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "next": "day5_rooftop_lean",
        "_i18n": {
            "ko": { "name": "나", "text": "*아니면… 이렇게 아름답게 느껴지는 건, 옆에 있는 사람 덕분일까.*" },
            "en": { "name": "Me", "text": "*Or maybe... it feels this beautiful because of the person standing beside me.*" },
            "es": { "name": "Yo", "text": "*O tal vez... se siente tan hermoso por la persona que está a mi lado.*" },
            "ja": { "name": "僕", "text": "*それとも……こんなに綺麗に感じるのは、隣にいるこの人のおかげなのかな。*" }
        }
    },
    "day5_rooftop_lean": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "next": "day5_rooftop_silence",
        "_i18n": {
            "ko": { "name": "나", "text": "*나란히 난간에 기대어 섰다. 바람에 머리카락이 흩날린다.*" },
            "en": { "name": "Me", "text": "*We leaned against the railing side by side. The wind tousles our hair.*" },
            "es": { "name": "Yo", "text": "*Nos recostamos contra la baranda lado a lado. El viento nos revuelve el cabello.*" },
            "ja": { "name": "僕", "text": "*並んで手すりにもたれて立った。風に髪がなびく。*" }
        }
    },
    "day5_rooftop_silence": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "next": "day5_rooftop_talk_branch",
        "_i18n": {
            "ko": { "name": "나", "text": "*한동안 아무 말 없이 풍경을 바라봤다. 이상하게 침묵이 어색하지 않다. 이 사람과는 말이 없어도 편하다.*" },
            "en": { "name": "Me", "text": "*For a while, we just gazed at the scenery in silence. Strangely, the silence doesn't feel awkward. With this person, words aren't always necessary.*" },
            "es": { "name": "Yo", "text": "*Por un rato, solo contemplamos el paisaje en silencio. Extrañamente, el silencio no se siente incómodo. Con esta persona, las palabras no siempre son necesarias.*" },
            "ja": { "name": "僕", "text": "*しばらく何も言わずに景色を眺めた。不思議と沈黙が気まずくない。この人とは言葉がなくても居心地がいい。*" }
        }
    },
    "day5_rooftop_talk_branch": {
        "background": "assets/images/background/top_school.png",
        "selectByHighestAffinity": true,
        "branches": [
            { "next": "day5_rooftop_seoyeon", "character": "Seoyeon" },
            { "next": "day5_rooftop_yuna", "character": "Yuna" },
            { "next": "day5_rooftop_dain", "character": "Dain" },
            { "next": "day5_rooftop_nurse", "character": "Nurse" },
            { "next": "day5_rooftop_teacher", "character": "Teacher" }
        ],
        "_i18n": {
            "ko": { "name": "시스템", "text": "" },
            "en": { "name": "System", "text": "" },
            "es": { "name": "Sistema", "text": "" },
            "ja": { "name": "システム", "text": "" }
        }
    },
    "day5_rooftop_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": { "Seoyeon": { "affinity": 5 } },
        "next": "day5_rooftop_future_talk",
        "_i18n": {
            "ko": { "name": "서연", "text": "\"나, 꿈이 있어. 이 학교를 졸업하고 나서도 누군가를 위해 일하는 사람이 되고 싶어. 학생회 하면서 그런 생각을 더 하게 됐거든.\"" },
            "en": { "name": "Seoyeon", "text": "\"I have a dream. Even after graduating from this school, I want to be someone who works for others. Being on the student council made me think about that even more.\"" },
            "es": { "name": "Seoyeon", "text": "\"Tengo un sueño. Incluso después de graduarme, quiero ser alguien que trabaje por los demás. Estar en el consejo estudiantil me hizo pensar más en eso.\"" },
            "ja": { "name": "ソヨン", "text": "「私、夢があるの。この学校を卒業してからも、誰かのために働く人になりたい。生徒会をやりながらそういう気持ちが強くなったの。」" }
        }
    },
    "day5_rooftop_yuna": {
        "character": "assets/images/characters/yuna_shy.png",
        "stats": { "Yuna": { "affinity": 5 } },
        "next": "day5_rooftop_future_talk",
        "_i18n": {
            "ko": { "name": "유나", "text": "\"…나는, 글을 쓰고 싶어. 사람한테 못 하는 말을 글로는 할 수 있으니까. …네가 읽어줬으면 좋겠어.\"" },
            "en": { "name": "Yuna", "text": "\"...I want to write. I can say things in writing that I can't say to people. ...I'd like it if you read what I write.\"" },
            "es": { "name": "Yuna", "text": "\"...Quiero escribir. Puedo decir en escritura lo que no puedo decirle a la gente. ...Me gustaría que leyeras lo que escribo.\"" },
            "ja": { "name": "ユナ", "text": "「……私は、文章を書きたい。人に言えないことも文章なら言えるから。……あなたに読んでほしい。」" }
        }
    },
    "day5_rooftop_dain": {
        "character": "assets/images/characters/dain_sad.png",
        "stats": { "Dain": { "affinity": 5 } },
        "next": "day5_rooftop_future_talk",
        "_i18n": {
            "ko": { "name": "다인", "text": "\"나 있지, 프로 선수가 되고 싶어! 전국대회 나가서 우승하고, TV에도 나오고! …근데 가끔 불안해. 진짜 할 수 있을까 하고.\"" },
            "en": { "name": "Dain", "text": "\"You know what, I want to become a pro athlete! Compete in nationals, win the championship, be on TV! ...But sometimes I get scared. Like, can I really do it?\"" },
            "es": { "name": "Dain", "text": "\"¿Sabes qué? ¡Quiero ser atleta profesional! ¡Competir en el nacional, ganar el campeonato, salir en la tele! ...Pero a veces me da miedo. Como, ¿de verdad puedo lograrlo?\"" },
            "ja": { "name": "ダイン", "text": "「あのね、プロの選手になりたいの！全国大会に出て優勝して、テレビにも出て！……でもたまに不安になる。本当にできるのかなって。」" }
        }
    },
    "day5_rooftop_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "stats": { "Nurse": { "affinity": 5 } },
        "next": "day5_rooftop_future_talk",
        "_i18n": {
            "ko": { "name": "보건선생님", "text": "\"처음엔 병원 간호사가 되고 싶었어. 근데 학교에서 아이들을 돌보다 보니, 이곳이 내 자리인 것 같아. …너를 만난 것도 이곳이었고.\"" },
            "en": { "name": "School Nurse", "text": "\"At first, I wanted to be a hospital nurse. But after taking care of the kids at school, I felt like this is where I belong. ...And this is where I met you, too.\"" },
            "es": { "name": "Enfermera", "text": "\"Al principio quería ser enfermera de hospital. Pero después de cuidar a los chicos en la escuela, sentí que este es mi lugar. ...Y aquí también te conocí a ti.\"" },
            "ja": { "name": "保健先生", "text": "「最初は病院の看護師になりたかったの。でも学校で子どもたちの面倒を見ているうちに、ここが私の居場所だと思えた。……あなたに出会ったのもここだし。」" }
        }
    },
    "day5_rooftop_teacher": {
        "character": "assets/images/characters/teacher_shy.png",
        "stats": { "Teacher": { "affinity": 5 } },
        "next": "day5_rooftop_future_talk",
        "_i18n": {
            "ko": { "name": "담임선생님", "text": "\"처음 교사가 됐을 때는 자신이 없었어. 근데 너 같은 학생들을 만나니까… 이 길 선택하길 잘했다고 느껴. 솔직히.\"" },
            "en": { "name": "Homeroom Teacher", "text": "\"When I first became a teacher, I had no confidence. But meeting students like you... honestly, it makes me feel like I made the right choice.\"" },
            "es": { "name": "Profesora", "text": "\"Cuando empecé como profesora, no tenía confianza. Pero conocer estudiantes como tú... sinceramente, me hace sentir que tomé la decisión correcta.\"" },
            "ja": { "name": "担任先生", "text": "「最初に教師になった時は自信がなかったの。でもあなたみたいな生徒に出会って……この道を選んでよかったって感じる。正直に言うと。」" }
        }
    },
    "day5_rooftop_future_talk": {
        "character": null,
        "next": "day5_rooftop_feeling1",
        "_i18n": {
            "ko": { "name": "나", "text": "\"나도… 솔직히 전학 오기 전엔 미래 같은 거 생각할 여유 없었어. 그냥 하루하루 버티는 느낌이었거든.\"" },
            "en": { "name": "Me", "text": "\"Me too... honestly, before I transferred here, I didn't have the luxury to think about the future. It felt like I was just getting through each day.\"" },
            "es": { "name": "Yo", "text": "\"Yo también... sinceramente, antes de transferirme, no tenía el lujo de pensar en el futuro. Sentía que solo sobrevivía cada día.\"" },
            "ja": { "name": "僕", "text": "「僕も……正直、転校する前は将来のことなんて考える余裕がなかった。ただ毎日を耐えてるだけだったから。」" }
        }
    },
    "day5_rooftop_feeling1": {
        "character": null,
        "next": "day5_rooftop_feeling2",
        "_i18n": {
            "ko": { "name": "나", "text": "\"근데 여기 와서 달라졌어. 내일이 기대되기 시작했다. 누군가를 만나는 게 즐거워졌고… 매일 학교 오는 게 행복해졌어.\"" },
            "en": { "name": "Me", "text": "\"But things changed after I came here. I started looking forward to tomorrow. Meeting people became fun... and coming to school every day made me happy.\"" },
            "es": { "name": "Yo", "text": "\"Pero las cosas cambiaron después de venir aquí. Empecé a esperar con ganas el mañana. Conocer gente se volvió divertido... y venir a la escuela cada día me hizo feliz.\"" },
            "ja": { "name": "僕", "text": "「でもここに来て変わった。明日が楽しみになった。誰かに会うのが嬉しくなって……毎日学校に来るのが幸せになった。」" }
        }
    },
    "day5_rooftop_feeling2": {
        "character": null,
        "next": "day5_lunch_suggest",
        "_i18n": {
            "ko": { "name": "나", "text": "*그건… 전부 옆에 있는 이 사람 덕분이다. 아직 말로 다 표현하진 못하겠지만, 언젠가 꼭.*" },
            "en": { "name": "Me", "text": "*That's all... because of the person beside me. I can't put it all into words just yet, but someday, I will.*" },
            "es": { "name": "Yo", "text": "*Todo eso es... gracias a la persona a mi lado. Aún no puedo expresarlo todo con palabras, pero algún día lo haré.*" },
            "ja": { "name": "僕", "text": "*それは……全部隣にいるこの人のおかげだ。まだ言葉にできないけど、いつかきっと。*" }
        }
    },
    "day5_lunch_suggest": {
        "character": null,
        "next": "day5_lunch_setup",
        "_i18n": {
            "ko": { "name": "나", "text": "\"배 안 고파? 나 아까 편의점에서 사 온 게 있는데. 여기서 먹을까?\"" },
            "en": { "name": "Me", "text": "\"Are you hungry? I picked some things up from the convenience store earlier. Want to eat up here?\"" },
            "es": { "name": "Yo", "text": "\"¿Tienes hambre? Compré algunas cosas en la tienda antes. ¿Quieres comer aquí arriba?\"" },
            "ja": { "name": "僕", "text": "「お腹空かない？さっきコンビニで買ってきたものがあるんだけど。ここで食べない？」" }
        }
    },
    "day5_lunch_setup": {
        "character": null,
        "next": "day5_lunch_sit",
        "_i18n": {
            "ko": { "name": "나", "text": "*가방에서 삼각김밥이랑 음료수를 꺼냈다. 소박하지만, 이 풍경 앞에서 먹으면 뭐든 특별해질 것 같다.*" },
            "en": { "name": "Me", "text": "*I pulled out some rice balls and drinks from my bag. It's a simple meal, but with this view, anything would feel special.*" },
            "es": { "name": "Yo", "text": "*Saqué unos onigiris y bebidas de mi mochila. Es una comida sencilla, pero con esta vista, cualquier cosa se sentiría especial.*" },
            "ja": { "name": "僕", "text": "*カバンからおにぎりと飲み物を取り出した。質素だけど、この景色の前で食べたら何だって特別になりそうだ。*" }
        }
    },
    "day5_lunch_sit": {
        "character": null,
        "next": "day5_lunch_eat1",
        "_i18n": {
            "ko": { "name": "나", "text": "*난간 옆 그늘진 벽에 나란히 앉았다. 콘크리트 바닥이 좀 차갑지만, 옆 온기가 따뜻하다.*" },
            "en": { "name": "Me", "text": "*We sat down side by side against the shaded wall near the railing. The concrete floor is a bit cold, but the warmth beside me makes up for it.*" },
            "es": { "name": "Yo", "text": "*Nos sentamos lado a lado contra la pared sombreada cerca de la baranda. El piso de concreto está un poco frío, pero la calidez a mi lado lo compensa.*" },
            "ja": { "name": "僕", "text": "*手すりの横の日陰の壁に並んで座った。コンクリートの床は少し冷たいけど、隣の温もりが温かい。*" }
        }
    },
    "day5_lunch_eat1": {
        "character": null,
        "next": "day5_lunch_talk1",
        "_i18n": {
            "ko": { "name": "나", "text": "*삼각김밥을 한 입 베어 물었다. 간단한 편의점 김밥인데, 오늘따라 유독 맛있게 느껴진다.*" },
            "en": { "name": "Me", "text": "*I took a bite of the rice ball. It's just a simple convenience store rice ball, but today it tastes especially good.*" },
            "es": { "name": "Yo", "text": "*Le di un mordisco al onigiri. Es solo un simple onigiri de tienda, pero hoy sabe especialmente bien.*" },
            "ja": { "name": "僕", "text": "*おにぎりを一口かじった。ただのコンビニおにぎりなのに、今日はやけに美味しく感じる。*" }
        }
    },
    "day5_lunch_talk1": {
        "character": null,
        "next": "day5_lunch_talk2",
        "_i18n": {
            "ko": { "name": "나", "text": "\"있잖아, 이렇게 옥상에서 먹으니까 소풍 온 기분이다.\"" },
            "en": { "name": "Me", "text": "\"You know, eating up here on the rooftop feels like we're on a picnic.\"" },
            "es": { "name": "Yo", "text": "\"Sabes, comer aquí en la azotea se siente como un picnic.\"" },
            "ja": { "name": "僕", "text": "「ねえ、こうやって屋上で食べるとピクニックに来たみたいだね。」" }
        }
    },
    "day5_lunch_talk2": {
        "character": null,
        "next": "day5_lunch_talk3",
        "_i18n": {
            "ko": { "name": "나", "text": "*옆에서 작게 웃는 소리가 들렸다. 그 웃음이 바람에 실려 어딘가로 퍼져간다.*" },
            "en": { "name": "Me", "text": "*I heard a soft laugh from beside me. That laughter drifted away on the breeze, carried off somewhere far.*" },
            "es": { "name": "Yo", "text": "*Escuché una risa suave a mi lado. Esa risa se fue con la brisa, llevada a algún lugar lejano.*" },
            "ja": { "name": "僕", "text": "*隣から小さな笑い声が聞こえた。その笑い声が風に乗ってどこかへ広がっていく。*" }
        }
    },
    "day5_lunch_talk3": {
        "character": null,
        "next": "day5_lunch_talk4",
        "_i18n": {
            "ko": { "name": "나", "text": "\"전학 오기 전엔 혼자 밥 먹는 게 당연했거든. 교실에서도, 집에서도. 그게 편한 줄 알았어.\"" },
            "en": { "name": "Me", "text": "\"Before I transferred here, eating alone was just normal for me. In the classroom, at home. I thought I was fine with it.\"" },
            "es": { "name": "Yo", "text": "\"Antes de transferirme, comer solo era lo normal para mí. En el salón, en casa. Pensaba que estaba bien así.\"" },
            "ja": { "name": "僕", "text": "「転校する前は一人でご飯を食べるのが当たり前だった。教室でも、家でも。それが楽だと思ってた。」" }
        }
    },
    "day5_lunch_talk4": {
        "character": null,
        "next": "day5_lunch_moment_branch",
        "_i18n": {
            "ko": { "name": "나", "text": "\"근데 지금은… 누군가랑 같이 먹는 게 이렇게 좋은 건지 처음 알았어.\"" },
            "en": { "name": "Me", "text": "\"But now... I realize for the first time how nice it is to eat with someone.\"" },
            "es": { "name": "Yo", "text": "\"Pero ahora... me doy cuenta por primera vez de lo lindo que es comer con alguien.\"" },
            "ja": { "name": "僕", "text": "「でも今は……誰かと一緒に食べるのがこんなにいいことだって初めて知った。」" }
        }
    },
    "day5_lunch_moment_branch": {
        "selectByHighestAffinity": true,
        "branches": [
            { "next": "day5_lunch_moment_seoyeon", "character": "Seoyeon" },
            { "next": "day5_lunch_moment_yuna", "character": "Yuna" },
            { "next": "day5_lunch_moment_dain", "character": "Dain" },
            { "next": "day5_lunch_moment_nurse", "character": "Nurse" },
            { "next": "day5_lunch_moment_teacher", "character": "Teacher" }
        ],
        "_i18n": {
            "ko": { "name": "시스템", "text": "" },
            "en": { "name": "System", "text": "" },
            "es": { "name": "Sistema", "text": "" },
            "ja": { "name": "システム", "text": "" }
        }
    },
    "day5_lunch_moment_seoyeon": {
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "day5_lunch_touch_seoyeon",
        "_i18n": {
            "ko": { "name": "서연", "text": "\"나도 그래. 학생회 일로 바빠서 밥도 대충 혼자 먹었거든. 근데 너랑 먹으니까… 시간이 천천히 가는 것 같아.\"" },
            "en": { "name": "Seoyeon", "text": "\"Same here. I was always so busy with student council work that I just ate alone. But eating with you... it feels like time slows down.\"" },
            "es": { "name": "Seoyeon", "text": "\"Lo mismo digo. Siempre estaba tan ocupada con el consejo estudiantil que comía sola. Pero comer contigo... siento que el tiempo pasa más lento.\"" },
            "ja": { "name": "ソヨン", "text": "「私もそう。生徒会の仕事で忙しくて、ご飯もいつも一人で適当に食べてた。でもあなたと食べると……時間がゆっくり流れる気がする。」" }
        }
    },
    "day5_lunch_touch_seoyeon": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "stats": { "Seoyeon": { "affinity": 5 } },
        "next": "day5_lunch_after",
        "_i18n": {
            "ko": { "name": "나", "text": "*서연이가 살며시 내 어깨에 머리를 기댔다. 뺨이 발갛게 물든 채로. 심장이 멈출 것 같다.*" },
            "en": { "name": "Me", "text": "*Seoyeon gently rested her head on my shoulder. Her cheeks flushed red. I feel like my heart is going to stop.*" },
            "es": { "name": "Yo", "text": "*Seoyeon suavemente recostó su cabeza en mi hombro. Sus mejillas rojas como tomate. Siento que mi corazón va a detenerse.*" },
            "ja": { "name": "僕", "text": "*ソヨンがそっと僕の肩に頭を預けた。頬を赤く染めたまま。心臓が止まりそうだ。*" }
        }
    },
    "day5_lunch_moment_yuna": {
        "character": "assets/images/characters/yuna_shy.png",
        "next": "day5_lunch_touch_yuna",
        "_i18n": {
            "ko": { "name": "유나", "text": "\"…나도. 혼자 먹는 게 편한 줄 알았는데… 네 옆에 있으면 밥이 더 맛있어.\"" },
            "en": { "name": "Yuna", "text": "\"...Me too. I thought eating alone was comfortable... but when I'm next to you, the food tastes better.\"" },
            "es": { "name": "Yuna", "text": "\"...Yo también. Pensaba que comer sola era cómodo... pero cuando estoy a tu lado, la comida sabe mejor.\"" },
            "ja": { "name": "ユナ", "text": "「……私も。一人で食べるのが楽だと思ってたけど……あなたの隣にいるとご飯がもっと美味しい。」" }
        }
    },
    "day5_lunch_touch_yuna": {
        "character": "assets/images/characters/yuna_smile.png",
        "stats": { "Yuna": { "affinity": 5 } },
        "next": "day5_lunch_after",
        "_i18n": {
            "ko": { "name": "나", "text": "*유나의 손이 슬며시 내 손 위에 올라왔다. 차갑던 손끝이 점점 따뜻해진다. 손을 감싸 쥐었다.*" },
            "en": { "name": "Me", "text": "*Yuna's hand quietly slid over mine. Her cold fingertips slowly grew warmer. I held her hand in mine.*" },
            "es": { "name": "Yo", "text": "*La mano de Yuna se deslizó silenciosamente sobre la mía. Sus dedos fríos se fueron calentando poco a poco. Le tomé la mano.*" },
            "ja": { "name": "僕", "text": "*ユナの手がそっと僕の手の上に置かれた。冷たかった指先がだんだん温かくなっていく。手を包み込んだ。*" }
        }
    },
    "day5_lunch_moment_dain": {
        "character": "assets/images/characters/dain_shy.png",
        "next": "day5_lunch_touch_dain",
        "_i18n": {
            "ko": { "name": "다인", "text": "\"나 혼자 먹을 때는 빨리빨리 먹었거든?! 근데 너랑 먹으면 천천히 먹게 돼. 이상하지…?\"" },
            "en": { "name": "Dain", "text": "\"When I eat alone, I always eat super fast! But when I'm with you, I eat slowly. Isn't that weird...?\"" },
            "es": { "name": "Dain", "text": "\"¡Cuando como sola, siempre como súper rápido! Pero cuando estoy contigo, como despacio. ¿No es raro...?\"" },
            "ja": { "name": "ダイン", "text": "「一人で食べる時はいつもガーッて早く食べてたの！でもあなたと食べるとゆっくり食べちゃう。変だよね……？」" }
        }
    },
    "day5_lunch_touch_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "stats": { "Dain": { "affinity": 5 } },
        "next": "day5_lunch_after",
        "_i18n": {
            "ko": { "name": "나", "text": "(다인이가 갑자기 내 팔을 꽉 잡았다. \"뭐야, 갑자기 말이 없으면 걱정되잖아!\" 하면서도 손을 놓지 않는다.)" },
            "en": { "name": "Me", "text": "(Dain suddenly grabbed my arm tightly. \"Hey, don't go all quiet on me, it makes me worry!\" she said, but she didn't let go.)" },
            "es": { "name": "Yo", "text": "(Dain de repente me agarró el brazo fuerte. \"¡Oye, no te quedes callado así, me preocupo!\" dijo, pero no me soltó.)" },
            "ja": { "name": "僕", "text": "(ダインが急に僕の腕をぎゅっと掴んだ。「もう、急に黙ったら心配するじゃん！」って言いながらも手を離さない。)" }
        }
    },
    "day5_lunch_moment_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day5_lunch_touch_nurse",
        "_i18n": {
            "ko": { "name": "보건선생님", "text": "\"어른이 되면 이런 시간이 점점 줄어들거든. 그래서… 지금 이 순간이 더 소중한 거야.\"" },
            "en": { "name": "School Nurse", "text": "\"As you grow up, moments like these become fewer and fewer. That's why... this moment right now is all the more precious.\"" },
            "es": { "name": "Enfermera", "text": "\"Cuando creces, momentos como estos son cada vez menos. Por eso... este momento es aún más valioso.\"" },
            "ja": { "name": "保健先生", "text": "「大人になるとこういう時間はどんどん減っていくんだよ。だから……今このひとときがもっと大切なの。」" }
        }
    },
    "day5_lunch_touch_nurse": {
        "character": "assets/images/characters/nurse_shy.png",
        "stats": { "Nurse": { "affinity": 5 } },
        "next": "day5_lunch_after",
        "_i18n": {
            "ko": { "name": "나", "text": "(선생님이 음료수 캔을 내 볼에 살짝 갖다 댔다. \"차갑지?\" 하며 웃는 얼굴이 햇살보다 눈부시다.)" },
            "en": { "name": "Me", "text": "(She pressed the drink can gently against my cheek. \"Cold, isn't it?\" she said with a smile brighter than the sunlight.)" },
            "es": { "name": "Yo", "text": "(Presionó suavemente la lata de bebida contra mi mejilla. \"Frío, ¿no?\" dijo con una sonrisa más brillante que la luz del sol.)" },
            "ja": { "name": "僕", "text": "(先生が飲み物の缶を僕の頬にそっと当てた。「冷たいでしょ？」って笑う顔が日差しより眩しい。)" }
        }
    },
    "day5_lunch_moment_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day5_lunch_touch_teacher",
        "_i18n": {
            "ko": { "name": "담임선생님", "text": "\"이렇게 학생이랑 밥 먹는 건 처음이야. 교사로서는 좀 그렇지만… 오늘은 그냥 한 사람으로 있고 싶어.\"" },
            "en": { "name": "Homeroom Teacher", "text": "\"This is my first time eating with a student like this. As a teacher, it's a bit... but today, I just want to be here as a person.\"" },
            "es": { "name": "Profesora", "text": "\"Es la primera vez que como así con un estudiante. Como profesora es un poco... pero hoy solo quiero estar aquí como persona.\"" },
            "ja": { "name": "担任先生", "text": "「こうやって生徒とご飯食べるの初めて。教師としてはちょっとアレだけど……今日はただの一人の人間でいたい。」" }
        }
    },
    "day5_lunch_touch_teacher": {
        "character": "assets/images/characters/teacher_shy.png",
        "stats": { "Teacher": { "affinity": 5 } },
        "next": "day5_lunch_after",
        "_i18n": {
            "ko": { "name": "나", "text": "*선생님이 미소를 지으며 내 머리를 한 번 쓱 쓸었다. 평소의 엄격함은 온데간데없고, 따뜻한 손길만 남았다.*" },
            "en": { "name": "Me", "text": "*She smiled and gently brushed her hand over my hair. Her usual strictness was nowhere to be found—only a warm, tender touch remained.*" },
            "es": { "name": "Yo", "text": "*Sonrió y me acarició suavemente el cabello. Su rigidez habitual no estaba por ningún lado, solo quedaba un toque cálido y tierno.*" },
            "ja": { "name": "僕", "text": "*先生が微笑みながら僕の頭をさっと撫でた。いつもの厳しさはどこにもなく、温かい手のぬくもりだけが残った。*" }
        }
    },
    "day5_lunch_after": {
        "character": null,
        "next": "day5_lunch_cleanup",
        "_i18n": {
            "ko": { "name": "나", "text": "*음료수를 마저 마셨다. 차가운 캔이 어느새 손 안에서 미지근해졌다. 시간이 이렇게 빨리 흘렀다니.*" },
            "en": { "name": "Me", "text": "*I finished the last of my drink. The cold can had already turned lukewarm in my hands. Time passed so quickly.*" },
            "es": { "name": "Yo", "text": "*Terminé mi bebida. La lata fría ya se había puesto tibia en mis manos. El tiempo pasó tan rápido.*" },
            "ja": { "name": "僕", "text": "*飲み物を飲み干した。冷たかった缶がいつの間にか手の中でぬるくなっていた。こんなに早く時間が過ぎるなんて。*" }
        }
    },
    "day5_lunch_cleanup": {
        "character": null,
        "next": "day5_pre_afternoon1",
        "_i18n": {
            "ko": { "name": "나", "text": "*쓰레기를 챙겨서 자리를 정리했다. 옥상 바닥에 우리가 앉았던 자리에 햇살 자국이 남아 있다.*" },
            "en": { "name": "Me", "text": "*I gathered the trash and tidied up. On the rooftop floor, a sunlit imprint remained where we had been sitting.*" },
            "es": { "name": "Yo", "text": "*Recogí la basura y ordené. En el piso de la azotea, quedó una marca de sol donde habíamos estado sentados.*" },
            "ja": { "name": "僕", "text": "*ゴミを片付けて場所を整理した。屋上の床に、僕たちが座っていた場所に日差しの跡が残っている。*" }
        }
    },
    "day5_pre_afternoon1": {
        "character": null,
        "next": "day5_pre_afternoon2",
        "_i18n": {
            "ko": { "name": "나", "text": "*해가 중천을 넘기기 시작했다. 아까보다 그림자가 짧아졌다.*" },
            "en": { "name": "Me", "text": "*The sun has begun to pass its peak. The shadows are shorter than before.*" },
            "es": { "name": "Yo", "text": "*El sol ha empezado a pasar su punto más alto. Las sombras son más cortas que antes.*" },
            "ja": { "name": "僕", "text": "*太陽が頂点を過ぎ始めた。さっきより影が短くなっている。*" }
        }
    },
    "day5_pre_afternoon2": {
        "character": null,
        "next": "day5_pre_afternoon3",
        "_i18n": {
            "ko": { "name": "나", "text": "*오늘 하루가 아직 남았다. 아니… 정확히 말하면, 아직 하지 못한 말이 남았다.*" },
            "en": { "name": "Me", "text": "*There's still time left today. No... more precisely, there are still words left unsaid.*" },
            "es": { "name": "Yo", "text": "*Todavía queda tiempo hoy. No... más precisamente, todavía quedan palabras sin decir.*" },
            "ja": { "name": "僕", "text": "*今日はまだ一日が残っている。いや……正確に言えば、まだ言えていない言葉が残っている。*" }
        }
    },
    "day5_pre_afternoon3": {
        "character": null,
        "next": "day5_pre_afternoon4",
        "_i18n": {
            "ko": { "name": "나", "text": "*가슴 안쪽에서 무언가가 꿈틀거린다. 이건… 용기를 내야 할 때가 다가오고 있다는 신호다.*" },
            "en": { "name": "Me", "text": "*Something stirs deep inside my chest. This is a sign... that the time to gather my courage is approaching.*" },
            "es": { "name": "Yo", "text": "*Algo se agita en lo profundo de mi pecho. Es una señal... de que el momento de reunir valor se acerca.*" },
            "ja": { "name": "僕", "text": "*胸の奥で何かがうずいている。これは……勇気を出す時が近づいているというサインだ。*" }
        }
    },
    "day5_pre_afternoon4": {
        "character": null,
        "fade": true,
        "next": "day5_afternoon_start",
        "_i18n": {
            "ko": { "name": "나", "text": "*옆에 서 있는 이 사람에게. 오늘, 반드시 전하고 싶은 마음이 있다.*" },
            "en": { "name": "Me", "text": "*To the person standing beside me. Today, there are feelings I absolutely must convey.*" },
            "es": { "name": "Yo", "text": "*A la persona que está a mi lado. Hoy, hay sentimientos que absolutamente debo expresar.*" },
            "ja": { "name": "僕", "text": "*隣に立っているこの人に。今日、どうしても伝えたい気持ちがある。*" }
        }
    }
});
