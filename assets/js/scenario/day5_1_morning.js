/**
 * ============================================================================
 * CUPID - day5_1_morning (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day5_1_morning.js + en_day5_1_morning.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

Object.assign(SCENARIO[5], {
    "day5_start": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "bgm": "morning.mp3",
        "fade": true,
        "next": "day5_morning_wake",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*일요일 아침. 따스한 햇살이 커튼 사이로 스며든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Sunday morning. Warm sunlight filters through the curtains.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Domingo por la mañana. La cálida luz del sol se filtra entre las cortinas.*"
            },
            "ja": {
                "name": "僕",
                "text": "*日曜日の朝。温かい日差しがカーテンの隙間から差し込んでくる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dimanche matin. Un doux soleil filtre à travers les rideaux.*"
            }
        }
    },
    "day5_morning_wake": {
        "background": "assets/images/background/room_my.png",
        "next": "day5_morning_stretch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 떴다. 알람 없이 저절로 깬 건 오랜만이다. 시계를 보니 아침 8시.*"
            },
            "en": {
                "name": "Me",
                "text": "*I opened my eyes. It's been a while since I woke up on my own without an alarm. The clock reads 8 AM.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Abrí los ojos. Hace mucho que no me despierto solo, sin alarma. El reloj marca las 8 de la mañana.*"
            },
            "ja": {
                "name": "僕",
                "text": "*目を開けた。アラームなしで自然に起きたのは久しぶりだ。時計を見ると朝8時。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai ouvert les yeux. Ça faisait longtemps que je ne m'étais pas réveillé tout seul, sans alarme. L'horloge indique 8 heures.*"
            }
        }
    },
    "day5_morning_stretch": {
        "background": "assets/images/background/room_my.png",
        "next": "day5_morning_think",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*기지개를 켜며 천장을 바라본다. 오늘이 일요일이라는 게 실감이 안 난다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I stretch and stare at the ceiling. It doesn't feel real that today is Sunday.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me estiro mirando al techo. No me parece real que hoy sea domingo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*伸びをしながら天井を見上げる。今日が日曜日だなんて実感が湧かない。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je m'étire en fixant le plafond. J'ai du mal à réaliser qu'on est dimanche.*"
            }
        }
    },
    "day5_morning_think": {
        "background": "assets/images/background/room_my.png",
        "next": "day5_morning_mirror",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이 학교에 전학 온 게 겨우 나흘 전이라니. 마치 한 달은 된 것 같은데.*"
            },
            "en": {
                "name": "Me",
                "text": "*It's only been five days since I transferred to this school. It feels like it's been at least a month.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Solo han pasado cinco días desde que me transferí a esta escuela. Parece que ha pasado al menos un mes.*"
            },
            "ja": {
                "name": "僕",
                "text": "*この学校に転校してきてまだたった5日だなんて。まるで1ヶ月は経ったみたいだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Ça ne fait que cinq jours que j'ai été transféré dans cette école. On dirait que ça fait au moins un mois.*"
            }
        }
    },
    "day5_morning_mirror": {
        "background": "assets/images/background/room_my.png",
        "next": "day5_morning_mirror2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*세수를 하고 거울 앞에 섰다. 거울 속의 나는… 전학 오기 전과는 뭔가 다른 얼굴을 하고 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I washed my face and stood in front of the mirror. The face staring back at me looks... different from before I transferred.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me lavé la cara y me paré frente al espejo. El rostro que me devuelve la mirada se ve... diferente al de antes de transferirme.*"
            },
            "ja": {
                "name": "僕",
                "text": "*顔を洗って鏡の前に立った。鏡の中の僕は……転校前とはどこか違う顔をしている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je me suis lavé le visage et me suis planté devant le miroir. Le visage qui me fixe a l'air... différent d'avant mon transfert.*"
            }
        }
    },
    "day5_morning_mirror2": {
        "background": "assets/images/background/room_my.png",
        "next": "day5_morning_phone_check",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*4일 동안 참 많은 일이 있었다. 새로운 반, 새로운 사람들… 그리고 특별한 만남들.*"
            },
            "en": {
                "name": "Me",
                "text": "*So much happened over the past four days. A new class, new people... and some very special encounters.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Pasaron tantas cosas en estos cuatro días. Una nueva clase, gente nueva... y algunos encuentros muy especiales.*"
            },
            "ja": {
                "name": "僕",
                "text": "*4日間で本当にいろんなことがあった。新しいクラス、新しい人たち……そして特別な出会い。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Tant de choses se sont passées en quatre jours. Une nouvelle classe, de nouvelles personnes... et des rencontres très spéciales.*"
            }
        }
    },
    "day5_morning_phone_check": {
        "background": "assets/images/background/room_my.png",
        "next": "day5_morning_msg_branch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*침대 위에 놓인 핸드폰을 집어 들었다. 화면에 알림이 떠 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I picked up the phone from my bed. There are notifications on the screen.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Tomé el teléfono de la cama. Hay notificaciones en la pantalla.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ベッドの上に置いてあったスマホを手に取った。画面に通知が来ている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai attrapé mon téléphone sur le lit. Des notifications s'affichent à l'écran.*"
            }
        }
    },
    "day5_morning_msg_branch": {
        "background": "assets/images/background/room_my.png",
        "branches": [
            {
                "next": "day5_couple_msg_branch",
                "condition": "day4_confession_accepted"
            },
            {
                "next": "day5_pending_msg_branch",
                "condition": "day4_waited"
            },
            {
                "next": "day5_default_msg_start"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": ""
            },
            "en": {
                "name": "System",
                "text": ""
            },
            "es": {
                "name": "Sistema",
                "text": ""
            },
            "ja": {
                "name": "システム",
                "text": ""
            },
            "fr": {
                "name": "Système",
                "text": ""
            }
        }
    },
    "day5_couple_msg_branch": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_couple_msg_seoyeon",
                "character": "Seoyeon",
                "condition": "isDating_Seoyeon"
            },
            {
                "next": "day5_couple_msg_yuna",
                "character": "Yuna",
                "condition": "isDating_Yuna"
            },
            {
                "next": "day5_couple_msg_dain",
                "character": "Dain",
                "condition": "isDating_Dain"
            },
            {
                "next": "day5_couple_msg_nurse",
                "character": "Nurse",
                "condition": "isDating_Nurse"
            },
            {
                "next": "day5_couple_msg_teacher",
                "character": "Teacher",
                "condition": "isDating_Teacher"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": ""
            },
            "en": {
                "name": "System",
                "text": ""
            },
            "es": {
                "name": "Sistema",
                "text": ""
            },
            "ja": {
                "name": "システム",
                "text": ""
            },
            "fr": {
                "name": "Système",
                "text": ""
            }
        }
    },
    "day5_couple_msg_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "next": "day5_couple_react_seoyeon",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"좋은 아침 ☀️ 오늘 날씨 진짜 좋다! 학교 정원에 꽃이 피었을 것 같아. 같이 보러 갈래?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Good morning ☀️ The weather's amazing today! I bet the flowers in the school garden are blooming. Wanna go see them together?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡Buenos días ☀️ El clima está increíble hoy! Apuesto a que las flores del jardín de la escuela ya florecieron. ¿Quieres ir a verlas juntos?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "「おはよう ☀️ 今日、すごくいい天気だね！学校の庭に花が咲いてると思うの。一緒に見に行かない？」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Bonjour ☀️ Il fait super beau aujourd'hui ! Je parie que les fleurs du jardin de l'école sont en train d'éclore. Tu veux aller les voir ensemble ?\""
            }
        }
    },
    "day5_couple_react_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day5_couple_reply_seoyeon",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이 메시지를 보니 저절로 웃음이 나온다. 아침부터 꽃 이야기라니, 서연이답다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Reading Seoyeon's message makes me smile without even trying. Talking about flowers first thing in the morning—that's so like her.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Leer el mensaje de Seoyeon me hace sonreír sin querer. Hablar de flores a primera hora de la mañana... es tan típico de ella.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンのメッセージを見ると自然と笑みがこぼれる。朝から花の話だなんて、ソヨンらしいな。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le message de Seoyeon me fait sourire malgré moi. Parler de fleurs dès le matin, c'est tellement elle.*"
            }
        }
    },
    "day5_couple_reply_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"좋아! 학교 정문 앞에서 만나자. 보여주고 싶은 곳도 있어 😊\" 라고 답했다.)"
            },
            "en": {
                "name": "Me",
                "text": "(I replied, \"Sounds great! Let's meet at the school front gate. There's a place I want to show you too 😊\")"
            },
            "es": {
                "name": "Yo",
                "text": "(Respondí: \"¡Genial! Nos vemos en la entrada de la escuela. También hay un lugar que quiero mostrarte 😊\")"
            },
            "ja": {
                "name": "僕",
                "text": "(「いいね！学校の正門前で会おう。見せたい場所もあるんだ 😊」と返信した。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(J'ai répondu : \"Super ! On se retrouve devant le portail de l'école. J'ai aussi un endroit à te montrer 😊\")"
            }
        }
    },
    "day5_couple_msg_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day5_couple_react_yuna",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…일어났어? 오늘 학교 갈 거지? …나도 갈게. 정문 앞. 10시.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...You up? You're going to school today, right? ...I'll go too. Front gate. 10 o'clock.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...¿Ya despertaste? Vas a ir a la escuela hoy, ¿verdad? ...Yo también iré. Entrada principal. 10 en punto.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "「……起きた？ 今日、学校行くでしょ？ ……私も行く。正門前。10時。」"
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...T'es réveillé ? Tu vas à l'école aujourd'hui, non ? ...J'y vais aussi. Portail principal. 10 heures.\""
            }
        }
    },
    "day5_couple_react_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "day5_couple_reply_yuna",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(유나답게 짧지만… 자세히 보면 \"나도 갈게\"라는 말에 설렘이 담겨 있다.)"
            },
            "en": {
                "name": "Me",
                "text": "(Short and sweet, just like Yuna... But if you look closely, there's a hint of excitement in the words \"I'll go too.\")"
            },
            "es": {
                "name": "Yo",
                "text": "(Corto y directo, típico de Yuna... Pero si lo lees bien, hay un toque de emoción en eso de \"yo también iré\".)"
            },
            "ja": {
                "name": "僕",
                "text": "(ユナらしく短いけど……よく見ると「私も行く」という言葉にときめきが込められている。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(Court et direct, tout à fait Yuna... Mais en y regardant de plus près, il y a une pointe d'excitation dans les mots « J'y vais aussi. »)"
            }
        }
    },
    "day5_couple_reply_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"응, 갈게. 기다리고 있어.\" 담담하게 답했지만, 심장이 빨리 뛴다.)"
            },
            "en": {
                "name": "Me",
                "text": "(\"Yeah, I'll be there. Wait for me.\" I replied calmly, but my heart is racing.)"
            },
            "es": {
                "name": "Yo",
                "text": "(\"Sí, ahí estaré. Espérame.\" Respondí con calma, pero mi corazón late a mil.)"
            },
            "ja": {
                "name": "僕",
                "text": "(「うん、行くよ。待ってて。」淡々と返したけど、心臓がドキドキしている。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(\"Ouais, j'y serai. Attends-moi.\" J'ai répondu calmement, mais mon cœur bat la chamade.)"
            }
        }
    },
    "day5_couple_msg_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "next": "day5_couple_react_dain",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"좋은 아침!! ☀️🏐 오늘 학교 가자!! 정문 앞에서 만나!! 뛰어올게!! 절대 늦지 마!!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Good morning!! ☀️🏐 Let's go to school today!! Meet me at the front gate!! I'll run over!! Don't you DARE be late!!!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡¡Buenos días!! ☀️🏐 ¡¡Vamos a la escuela hoy!! ¡¡Nos vemos en la entrada!! ¡¡Voy corriendo!! ¡¡¡NO TE ATREVAS a llegar tarde!!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "「おはよう!! ☀️🏐 今日学校行こう!! 正門前で待ち合わせね!! 走っていくから!! 絶対遅刻しないでよ!!!」"
            },
            "fr": {
                "name": "Dain",
                "text": "\"Bonjour !! ☀️🏐 On va à l'école aujourd'hui !! Retrouve-moi au portail !! Je cours jusqu'à toi !! T'as PAS INTÉRÊT à être en retard !!!\""
            }
        }
    },
    "day5_couple_react_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "day5_couple_reply_dain",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…느낌표가 잔뜩. 아침부터 에너지가 넘치는 다인이. 그런데 이런 메시지를 보면 나까지 기운이 나네.*"
            },
            "en": {
                "name": "Me",
                "text": "*...So many exclamation marks. Dain's overflowing with energy from the crack of dawn. But somehow, messages like this give me energy too.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...Tantos signos de exclamación. Dain rebosa energía desde temprano. Pero de alguna forma, mensajes así me dan energía a mí también.*"
            },
            "ja": {
                "name": "僕",
                "text": "*……びっくりマークだらけ。朝からエネルギー全開のダイン。でもこういうメッセージを見ると、僕まで元気が出てくる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Autant de points d'exclamation. Dain déborde d'énergie dès l'aube. Mais bizarrement, ce genre de messages me donne de l'énergie aussi.*"
            }
        }
    },
    "day5_couple_reply_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"ㅋㅋ 알겠어! 안 늦을게. 뛰지 말고 조심해서 와!\" 라고 답장을 보냈다.)"
            },
            "en": {
                "name": "Me",
                "text": "(I texted back, \"Haha, got it! I won't be late. Don't run—be careful on your way!\")"
            },
            "es": {
                "name": "Yo",
                "text": "(Le respondí: \"Jaja, ¡entendido! No llegaré tarde. ¡No corras, ven con cuidado!\")"
            },
            "ja": {
                "name": "僕",
                "text": "(「笑 わかった！遅れないよ。走らないで気をつけて来てね！」と返信した。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(J'ai répondu : \"Haha, c'est noté ! Je serai pas en retard. Ne cours pas, fais attention en chemin !\")"
            }
        }
    },
    "day5_couple_msg_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day5_couple_react_nurse",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"잘 잤어? 오늘 날씨가 좋아서 기분이 설레네. 학교 앞에서 볼까? …주말에 만나는 건 또 다른 느낌이지? 💕\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Did you sleep well? The weather's so nice today, I'm feeling a little giddy. Want to meet in front of the school? ...Meeting on a weekend feels different, doesn't it? 💕\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"¿Dormiste bien? El clima está tan lindo hoy que me siento emocionada. ¿Nos vemos frente a la escuela? ...Vernos en fin de semana se siente diferente, ¿no? 💕\""
            },
            "ja": {
                "name": "保健先生",
                "text": "「よく眠れた？ 今日はお天気がいいからなんだかワクワクしちゃうね。学校の前で会わない？ ……週末に会うのって、また違う感じでしょ？ 💕」"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Tu as bien dormi ? Il fait tellement beau aujourd'hui, je me sens un peu fébrile. On se retrouve devant l'école ? ...Se voir le week-end, c'est différent, non ? 💕\""
            }
        }
    },
    "day5_couple_react_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "day5_couple_reply_nurse",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 보낸 하트 이모티콘에 얼굴이 빨개졌다. 학교 밖에서 만나는 건 확실히 다른 느낌이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*My face turned red at the heart emoji she sent. Meeting outside of school definitely feels different.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me sonrojé por el emoji de corazón que envió. Vernos fuera de la escuela definitivamente se siente diferente.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生が送ったハートの絵文字に顔が赤くなった。学校の外で会うのは確かに違う感じだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mon visage a rougi en voyant l'emoji cœur qu'elle a envoyé. Se voir en dehors de l'école, c'est vraiment différent.*"
            }
        }
    },
    "day5_couple_reply_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"네, 기대돼요. 정문 앞에서 10시에 만나요!\" 존댓말로 쓰다가… 뭔가 어색하다.)"
            },
            "en": {
                "name": "Me",
                "text": "(\"Yes, I'm looking forward to it. Let's meet at the front gate at 10!\" I started writing formally but... it felt a bit awkward.)"
            },
            "es": {
                "name": "Yo",
                "text": "(\"Sí, estoy ansioso. ¡Nos vemos en la entrada a las 10!\" Empecé a escribir formal pero... se sintió un poco raro.)"
            },
            "ja": {
                "name": "僕",
                "text": "(「はい、楽しみです。正門前で10時に会いましょう！」敬語で書いたけど……なんだかぎこちない。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(\"Oui, j'ai hâte. On se retrouve au portail à 10 heures !\" J'ai commencé à écrire de façon formelle mais... c'était un peu gênant.)"
            }
        }
    },
    "day5_couple_msg_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day5_couple_react_teacher",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"오늘 학교 올 거지? 주말인데 뭐… 잠깐 볼 일이 있어서. 정문 앞에서 10시. 늦으면 혼난다.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Are you coming to school today? It's the weekend, but... I have something to see you about. Front gate, 10 o'clock. You'll be in trouble if you're late.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"¿Vas a venir a la escuela hoy? Es fin de semana, pero... tengo algo que tratar contigo. Entrada principal, 10 en punto. Si llegas tarde, te va a ir mal.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "「今日、学校来るでしょ？ 週末だけど……ちょっと用があって。正門前で10時。遅れたら怒るからね。」"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"Tu viens à l'école aujourd'hui ? C'est le week-end, mais... j'ai quelque chose à voir avec toi. Portail principal, 10 heures. Gare à toi si tu es en retard.\""
            }
        }
    },
    "day5_couple_react_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "day5_couple_reply_teacher",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"볼 일이 있어서\"라니. 쿨한 척 하지만 만나자고 먼저 연락한 건 선생님인데. 그런 선생님이 좋다.)"
            },
            "en": {
                "name": "Me",
                "text": "(\"Something to see me about,\" she says. Playing it cool, but she's the one who reached out first. I like that about her.)"
            },
            "es": {
                "name": "Yo",
                "text": "(\"Algo que tratar\", dice. Se hace la indiferente, pero ella fue quien me contactó primero. Eso me gusta de ella.)"
            },
            "ja": {
                "name": "僕",
                "text": "(「用がある」だって。クールなふりしてるけど、先に連絡してきたのは先生のほうなのに。そういうところが好きだ。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(\"Quelque chose à voir avec moi\", dit-elle. Elle joue les indifférentes, mais c'est elle qui a fait le premier pas. J'aime ça chez elle.)"
            }
        }
    },
    "day5_couple_reply_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"안 늦을게요. 꼭 갈게요!\" 라고 답장을 보내며 살짝 웃었다.)"
            },
            "en": {
                "name": "Me",
                "text": "(I texted back, \"I won't be late. I'll definitely be there!\" and let out a small smile.)"
            },
            "es": {
                "name": "Yo",
                "text": "(Le respondí: \"No llegaré tarde. ¡Definitivamente estaré ahí!\" y solté una pequeña sonrisa.)"
            },
            "ja": {
                "name": "僕",
                "text": "(「遅れません。必ず行きます！」と返信しながら、少し笑った。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(J'ai répondu : \"Je serai pas en retard. J'y serai sans faute !\" et j'ai laissé échapper un petit sourire.)"
            }
        }
    },
    "day5_pending_msg_branch": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_pending_msg_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_pending_msg_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_pending_msg_dain",
                "character": "Dain"
            },
            {
                "next": "day5_pending_msg_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_pending_msg_teacher",
                "character": "Teacher"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": ""
            },
            "en": {
                "name": "System",
                "text": ""
            },
            "es": {
                "name": "Sistema",
                "text": ""
            },
            "ja": {
                "name": "システム",
                "text": ""
            },
            "fr": {
                "name": "Système",
                "text": ""
            }
        }
    },
    "day5_pending_msg_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "next": "day5_pending_react_seoyeon",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"오늘 시간 있어? 정원 손질 도와줄 사람이 필요한데… 아, 물론 강제는 아니야! 😅\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Are you free today? I need someone to help with the garden... Oh, no pressure though! 😅\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¿Estás libre hoy? Necesito a alguien que me ayude con el jardín... ¡Ah, pero no es obligatorio! 😅\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "「今日、時間ある？ 庭の手入れを手伝ってくれる人が必要なんだけど……あ、もちろん強制じゃないよ！ 😅」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Tu es libre aujourd'hui ? J'aurais besoin d'aide pour le jardin... Oh, sans pression hein ! 😅\""
            }
        }
    },
    "day5_pending_react_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "next": "day5_pending_reply_seoyeon",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(서연이가 나를 부른다. \"강제는 아니야\"라면서도… 가고 싶다는 마음은 확실하다.)"
            },
            "en": {
                "name": "Me",
                "text": "(Seoyeon's asking me to come. She says \"no pressure,\" but... I know I want to go.)"
            },
            "es": {
                "name": "Yo",
                "text": "(Seoyeon me está invitando. Dice \"no es obligatorio\", pero... sé que quiero ir.)"
            },
            "ja": {
                "name": "僕",
                "text": "(ソヨンが僕を呼んでいる。「強制じゃない」って言いつつ……行きたい気持ちは確かだ。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(Seoyeon me demande de venir. Elle dit « sans pression », mais... je sais que j'ai envie d'y aller.)"
            }
        }
    },
    "day5_pending_reply_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(오늘은 꼭 내 마음을 전해야 해. \"갈게! 정문 앞에서 만나자.\" 라고 답했다.)"
            },
            "en": {
                "name": "Me",
                "text": "(Today, I have to tell her how I feel. I replied, \"I'll be there! Let's meet at the front gate.\")"
            },
            "es": {
                "name": "Yo",
                "text": "(Hoy tengo que decirle lo que siento. Respondí: \"¡Ahí estaré! Nos vemos en la entrada.\")"
            },
            "ja": {
                "name": "僕",
                "text": "(今日こそ気持ちを伝えなきゃ。「行くよ！正門前で会おう。」と返した。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(Aujourd'hui, je dois lui dire ce que je ressens. J'ai répondu : \"J'y serai ! On se retrouve au portail.\")"
            }
        }
    },
    "day5_pending_msg_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day5_pending_react_yuna",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…오늘 학교. 올 수 있어? …할 말이 있어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...School. Today. Can you come? ...I have something to tell you.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...La escuela. Hoy. ¿Puedes venir? ...Tengo algo que decirte.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "「……今日、学校。来れる？ ……話したいことがあるの。」"
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...L'école. Aujourd'hui. Tu peux venir ? ...J'ai quelque chose à te dire.\""
            }
        }
    },
    "day5_pending_react_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day5_pending_reply_yuna",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"할 말이 있어\"라니. 심장이 쿵 뛰었다. 혹시 유나도 나한테…?)"
            },
            "en": {
                "name": "Me",
                "text": "(\"I have something to tell you.\" My heart skipped a beat. Could Yuna also feel the same way about me...?)"
            },
            "es": {
                "name": "Yo",
                "text": "(\"Tengo algo que decirte.\" Mi corazón dio un vuelco. ¿Será que Yuna también siente lo mismo por mí...?)"
            },
            "ja": {
                "name": "僕",
                "text": "(「話したいことがある」だって。心臓がドキンと鳴った。もしかしてユナも僕のことを……？)"
            },
            "fr": {
                "name": "Moi",
                "text": "(\"J'ai quelque chose à te dire.\" Mon cœur a raté un battement. Est-ce que Yuna ressentirait la même chose pour moi... ?)"
            }
        }
    },
    "day5_pending_reply_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(나도 할 말이 있다. \"응, 갈게.\" 간결하게 답하고 핸드폰을 내려놓았다.)"
            },
            "en": {
                "name": "Me",
                "text": "(I have something to say too. \"Yeah, I'll be there.\" I replied briefly and set my phone down.)"
            },
            "es": {
                "name": "Yo",
                "text": "(Yo también tengo algo que decir. \"Sí, ahí estaré.\" Respondí brevemente y dejé el teléfono.)"
            },
            "ja": {
                "name": "僕",
                "text": "(僕も言いたいことがある。「うん、行くよ。」短く返して、スマホを置いた。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(J'ai aussi quelque chose à dire. \"Ouais, j'y serai.\" J'ai répondu brièvement et posé mon téléphone.)"
            }
        }
    },
    "day5_pending_msg_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "next": "day5_pending_react_dain",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야! 오늘 학교 올래?! 연습 끝나고 잠깐만 시간 돼? 중요한 거야!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey! Wanna come to school today?! Do you have a sec after practice? It's important!!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Oye! ¿Quieres venir a la escuela hoy? ¿Tienes un momento después del entrenamiento? ¡¡Es importante!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "「ねえ！今日学校来ない？！練習終わったらちょっとだけ時間ある？ 大事なことなの!!」"
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hé ! Tu veux venir à l'école aujourd'hui ?! T'as une minute après l'entraînement ? C'est important !!\""
            }
        }
    },
    "day5_pending_react_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "next": "day5_pending_reply_dain",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"중요한 거\"라고 했다. 다인이가 진지하게 말하는 건 드문 일인데. 무슨 일일까.)"
            },
            "en": {
                "name": "Me",
                "text": "(She said \"it's important.\" Dain being serious is rare. I wonder what it could be.)"
            },
            "es": {
                "name": "Yo",
                "text": "(Dijo \"es importante\". Es raro que Dain se ponga seria. Me pregunto qué será.)"
            },
            "ja": {
                "name": "僕",
                "text": "(「大事なこと」だって。ダインが真剣に言うのは珍しい。何があったんだろう。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(Elle a dit « c'est important ». Dain sérieuse, c'est rare. Je me demande ce que c'est.)"
            }
        }
    },
    "day5_pending_reply_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(그리고 나도… 오늘 꼭 하고 싶은 말이 있다. \"갈게!! 기다려!\" 라고 답했다.)"
            },
            "en": {
                "name": "Me",
                "text": "(And I have something I need to say today too. I replied, \"I'll be there!! Wait for me!\")"
            },
            "es": {
                "name": "Yo",
                "text": "(Y yo también... tengo algo que necesito decir hoy. Respondí: \"¡¡Ahí estaré!! ¡Espérame!\")"
            },
            "ja": {
                "name": "僕",
                "text": "(そして僕も……今日どうしても言いたいことがある。「行くよ!! 待ってて！」と返した。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(Et moi aussi, j'ai quelque chose à dire aujourd'hui. J'ai répondu : \"J'y serai !! Attends-moi !\")"
            }
        }
    },
    "day5_pending_msg_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day5_pending_react_nurse",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"오늘 혹시 학교에 올 일 있어? 보건실 정리 좀 해야 하는데… 같이 와주면 좋겠다.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Are you coming to school today by any chance? I need to organize the nurse's office... It'd be nice if you could come help.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"¿Por casualidad vas a venir a la escuela hoy? Necesito organizar la enfermería... Me gustaría que vinieras a ayudar.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "「今日もしかして学校に来る用事ある？ 保健室の整理をしなきゃいけなくて……一緒に来てくれると嬉しいんだけど。」"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Tu ne viendrais pas à l'école par hasard aujourd'hui ? Je dois ranger l'infirmerie... Ce serait sympa si tu pouvais venir m'aider.\""
            }
        }
    },
    "day5_pending_react_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day5_pending_reply_nurse",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*주말에 보건실 정리라… 핑계 같기도 하지만, 만날 수 있다면 이유는 상관없다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Organizing the nurse's office on a weekend... It sounds like an excuse, but if it means I can see her, the reason doesn't matter.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Organizar la enfermería en fin de semana... Suena a excusa, pero si significa que puedo verla, la razón no importa.*"
            },
            "ja": {
                "name": "僕",
                "text": "*週末に保健室の整理か……口実っぽいけど、会えるなら理由なんてどうでもいい。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Ranger l'infirmerie un week-end... Ça ressemble à une excuse, mais si ça me permet de la voir, la raison importe peu.*"
            }
        }
    },
    "day5_pending_reply_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(오늘, 꼭 마음을 전하자. \"갈게요! 정문 앞에서 만나요.\" 라고 답했다.)"
            },
            "en": {
                "name": "Me",
                "text": "(Today, I have to tell her how I feel. I replied, \"I'll be there! Let's meet at the front gate.\")"
            },
            "es": {
                "name": "Yo",
                "text": "(Hoy tengo que decirle lo que siento. Respondí: \"¡Ahí estaré! Nos vemos en la entrada.\")"
            },
            "ja": {
                "name": "僕",
                "text": "(今日こそ、気持ちを伝えよう。「行きます！正門前で会いましょう。」と返した。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(Aujourd'hui, je dois lui dire ce que je ressens. J'ai répondu : \"J'y serai ! On se retrouve au portail.\")"
            }
        }
    },
    "day5_pending_msg_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day5_pending_react_teacher",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"오늘 학교에 잠깐 올 수 있어? 서류 정리 좀 도와줄래. …다른 뜻은 없으니까 이상한 생각 하지 마.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Can you come by school today? I could use help organizing some paperwork. ...Don't get any ideas, there's no hidden meaning.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"¿Puedes pasar por la escuela hoy? Necesito ayuda organizando unos documentos. ...No te hagas ideas, no tiene ningún significado oculto.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "「今日ちょっと学校に来れる？ 書類整理を手伝ってほしいんだけど。……変な意味はないから、変なこと考えないでよね。」"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"Tu peux passer à l'école aujourd'hui ? J'aurais besoin d'aide pour ranger de la paperasse. ...Ne te fais pas d'idées, il n'y a aucun sous-entendu.\""
            }
        }
    },
    "day5_pending_react_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day5_pending_reply_teacher",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"다른 뜻은 없다\"는 말이 오히려 의미심장하게 느껴진다. 선생님도 마찬가지인 걸까.)"
            },
            "en": {
                "name": "Me",
                "text": "(\"No hidden meaning\"—somehow that makes it feel even more meaningful. Could she be feeling the same way?)"
            },
            "es": {
                "name": "Yo",
                "text": "(\"Sin significado oculto\"... de alguna forma eso lo hace sentir aún más significativo. ¿Será que ella siente lo mismo?)"
            },
            "ja": {
                "name": "僕",
                "text": "(「変な意味はない」って言うのが、かえって意味深に感じる。先生も同じ気持ちなのかな。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(\"Aucun sous-entendu\"... bizarrement, ça rend la chose encore plus significative. Est-ce qu'elle ressentirait la même chose ?)"
            }
        }
    },
    "day5_pending_reply_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(오늘이 지나면 기회가 없을지도 모른다. \"갈게요!\" 라고 답장을 보냈다.)"
            },
            "en": {
                "name": "Me",
                "text": "(If today passes, I might never get another chance. I texted back, \"I'll be there!\")"
            },
            "es": {
                "name": "Yo",
                "text": "(Si dejo pasar hoy, puede que no tenga otra oportunidad. Le respondí: \"¡Ahí estaré!\")"
            },
            "ja": {
                "name": "僕",
                "text": "(今日を逃したらもうチャンスはないかもしれない。「行きます！」と返信を送った。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(Si aujourd'hui passe, je n'aurai peut-être plus jamais l'occasion. J'ai répondu : \"J'y serai !\")"
            }
        }
    },
    "day5_default_msg_start": {
        "next": "day5_default_msg_scroll",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*핸드폰 화면을 켰지만… 새 메시지는 없다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I turned on my phone... but there are no new messages.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Encendí el teléfono... pero no hay mensajes nuevos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*スマホの画面をつけたけど……新しいメッセージはない。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai allumé mon téléphone... mais il n'y a aucun nouveau message.*"
            }
        }
    },
    "day5_default_msg_scroll": {
        "next": "day5_default_msg_reflect",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*대화 목록을 스크롤해 본다. 며칠 동안 나눈 대화들이 쭉 이어져 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I scroll through my chat list. Conversations from the past few days stretch on and on.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Reviso mi lista de chats. Las conversaciones de los últimos días se extienden una tras otra.*"
            },
            "ja": {
                "name": "僕",
                "text": "*チャットリストをスクロールしてみる。数日間の会話がずらっと並んでいる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je fais défiler ma liste de conversations. Les échanges des derniers jours s'étirent à l'infini.*"
            }
        }
    },
    "day5_default_msg_reflect": {
        "next": "day5_default_msg_reflect2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*전학 와서 여러 사람들을 만났다. 서연, 유나, 다인, 보건선생님, 담임선생님…*"
            },
            "en": {
                "name": "Me",
                "text": "*Since transferring, I've met so many people. Seoyeon, Yuna, Dain, the school nurse, the homeroom teacher...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Desde que me transferí, conocí a tanta gente. Seoyeon, Yuna, Dain, la enfermera, la profesora...*"
            },
            "ja": {
                "name": "僕",
                "text": "*転校してきていろんな人に出会った。ソヨン、ユナ、ダイン、保健先生、担任先生……*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Depuis mon transfert, j'ai rencontré tellement de monde. Seoyeon, Yuna, Dain, l'infirmière scolaire, le professeur principal...*"
            }
        }
    },
    "day5_default_msg_reflect2": {
        "next": "day5_default_msg_resolve",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다들 따뜻하게 대해줬는데… 결국 확실하게 마음을 전하지 못했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*They were all so kind to me... but in the end, I never managed to properly tell any of them how I feel.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Todos fueron tan amables conmigo... pero al final, nunca logré expresarle mis sentimientos a nadie.*"
            },
            "ja": {
                "name": "僕",
                "text": "*みんな優しくしてくれたのに……結局、ちゃんと気持ちを伝えられなかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Elles ont toutes été si gentilles avec moi... mais au final, je n'ai jamais réussi à dire à aucune d'entre elles ce que je ressens.*"
            }
        }
    },
    "day5_default_msg_resolve": {
        "next": "day5_default_msg_decide",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*아무런 연락도 없는 텅 빈 화면. 하지만 이대로 주저앉아 마침표를 찍고 싶지는 않다. 내 마음은 아직 전해지지 않았으니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*...No, it's not over yet. Today is Sunday. If I go to school, maybe I'll run into someone.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...No, aún no terminó. Hoy es domingo. Si voy a la escuela, tal vez me encuentre con alguien.*"
            },
            "ja": {
                "name": "僕",
                "text": "*……いや、まだ終わりじゃない。今日は日曜日だ。学校に行けば、誰かに会えるかもしれない。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Non, ce n'est pas encore fini. Aujourd'hui c'est dimanche. Si je vais à l'école, je croiserai peut-être quelqu'un.*"
            }
        }
    },
    "day5_default_msg_decide": {
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*마지막 날이니까. 학교 주변이라도 산책하자. 뭔가 달라질 수도 있으니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*It's the last day. I'll at least take a walk around the school. Something might change.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Es el último día. Al menos daré un paseo por los alrededores de la escuela. Algo podría cambiar.*"
            },
            "ja": {
                "name": "僕",
                "text": "*最後の日だから。学校の周りを散歩しよう。何か変わるかもしれないから。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*C'est le dernier jour. Je vais au moins faire un tour à l'école. Quelque chose changera peut-être.*"
            }
        }
    },
    "day5_morning_ready": {
        "character": null,
        "next": "day5_morning_closet",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이제 준비를 해야 한다. 옷장 앞에 섰다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Time to get ready. I stood in front of my closet.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Es hora de prepararme. Me paré frente al armario.*"
            },
            "ja": {
                "name": "僕",
                "text": "*そろそろ準備しなきゃ。クローゼットの前に立った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Il est temps de se préparer. Je me suis planté devant mon placard.*"
            }
        }
    },
    "day5_morning_closet": {
        "character": null,
        "next": "day5_outfit_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*일요일이니까 교복은 안 입어도 되는데… 뭘 입을까.*"
            },
            "en": {
                "name": "Me",
                "text": "*It's Sunday, so I don't have to wear the school uniform... but what should I wear?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Es domingo, así que no tengo que usar el uniforme... pero ¿qué me pongo?*"
            },
            "ja": {
                "name": "僕",
                "text": "*日曜日だから制服じゃなくていいけど……何を着よう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*C'est dimanche, pas besoin de porter l'uniforme... mais qu'est-ce que je vais mettre ?*"
            }
        }
    },
    "day5_outfit_choice": {
        "character": null,
        "choices": [
            {
                "next": "day5_outfit_casual",
                "setFlag": "day5_outfit_casual"
            },
            {
                "next": "day5_outfit_special",
                "setFlag": "day5_outfit_special"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*오늘 뭘 입고 나갈까?*",
                "choices": [
                    "깔끔한 캐주얼 *편하고 자연스럽게*",
                    "살짝 신경 쓴 코디 *오늘은 특별하니까*"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*What should I wear today?*",
                "choices": [
                    "Clean casual *comfortable and natural*",
                    "A little dressed up *today's special, after all*"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¿Qué me pongo hoy?*",
                "choices": [
                    "Casual limpio *cómodo y natural*",
                    "Un poco más arreglado *hoy es especial, después de todo*"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*今日は何を着て出かけよう？*",
                "choices": [
                    "きれいめカジュアル *楽で自然に*",
                    "ちょっとおしゃれなコーデ *今日は特別だから*"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Qu'est-ce que je porte aujourd'hui ?*",
                "choices": [
                    "Casual soigné *confortable et naturel*",
                    "Un peu habillé *après tout, c'est un jour spécial*"
                ]
            }
        }
    },
    "day5_outfit_casual": {
        "character": null,
        "next": "day5_breakfast",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*깨끗한 셔츠에 청바지. 편하면서도 단정한 느낌이다. 역시 자연스러운 게 나답지.*"
            },
            "en": {
                "name": "Me",
                "text": "*A crisp shirt and jeans. Comfortable yet neat. Yeah, keeping it natural is more my style.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Una camisa limpia y jeans. Cómodo pero presentable. Sí, lo natural va más conmigo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*きれいなシャツにジーンズ。楽だけどきちんとした感じ。やっぱり自然体が僕らしいな。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Une chemise impeccable et un jean. Confortable mais soigné. Ouais, rester naturel, c'est plus mon style.*"
            }
        }
    },
    "day5_outfit_special": {
        "character": null,
        "next": "day5_breakfast",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*평소보다 좀 더 신경 써서 골랐다. 거울 앞에서 한 번 더 확인한다. …괜찮은 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I picked my outfit more carefully than usual. One last check in the mirror. ...Looks good, I think.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Elegí mi ropa con más cuidado de lo usual. Una última revisada en el espejo. ...Creo que se ve bien.*"
            },
            "ja": {
                "name": "僕",
                "text": "*いつもより少し気を遣って選んだ。鏡の前でもう一度確認する。……いい感じかも。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai choisi ma tenue avec plus de soin que d'habitude. Un dernier coup d'œil dans le miroir. ...Ça a l'air bien, je crois.*"
            }
        }
    },
    "day5_breakfast": {
        "character": null,
        "next": "day5_outfit_check",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*간단하게 토스트를 구워 먹었다. 일요일 아침, 조용한 부엌. 밖에서 새소리가 들린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I made some quick toast and ate. A quiet kitchen on a Sunday morning. I can hear birds singing outside.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Preparé unas tostadas rápidas y comí. Una cocina tranquila en una mañana de domingo. Se escuchan pájaros cantando afuera.*"
            },
            "ja": {
                "name": "僕",
                "text": "*簡単にトーストを焼いて食べた。日曜の朝、静かなキッチン。外から鳥のさえずりが聞こえる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai fait griller un toast rapidement et mangé. Une cuisine silencieuse un dimanche matin. J'entends les oiseaux chanter dehors.*"
            }
        }
    },
    "day5_outfit_check": {
        "character": null,
        "next": "day5_morning_items",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*거울 속 내 모습을 마지막으로 확인한다. 전학 첫날과는 확실히 다른 눈빛이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*One final look at myself in the mirror. My eyes are definitely different from the first day I transferred.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Un último vistazo en el espejo. Mi mirada es definitivamente diferente a la del primer día de transferencia.*"
            },
            "ja": {
                "name": "僕",
                "text": "*鏡の中の自分を最後に確認する。転校初日とは明らかに違う目をしている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Un dernier regard dans le miroir. Mes yeux sont définitivement différents du premier jour de mon transfert.*"
            }
        }
    },
    "day5_morning_items": {
        "character": null,
        "next": "day5_morning_depart",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*지갑, 핸드폰, 열쇠. 준비 완료. 현관문 앞에 섰다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Wallet, phone, keys. All set. I stood at the front door.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Billetera, teléfono, llaves. Todo listo. Me paré frente a la puerta.*"
            },
            "ja": {
                "name": "僕",
                "text": "*財布、スマホ、鍵。準備完了。玄関の前に立った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Portefeuille, téléphone, clés. Tout est prêt. Je me suis posté devant la porte d'entrée.*"
            }
        }
    },
    "day5_morning_depart": {
        "character": null,
        "background": "assets/images/background/street.png",
        "fade": true,
        "next": "day5_walk_route_branch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*문을 열고 밖으로 나섰다. 봄바람이 기분 좋게 불어온다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I opened the door and stepped outside. A pleasant spring breeze greeted me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Abrí la puerta y salí. Una agradable brisa primaveral me recibió.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ドアを開けて外に出た。春の風が心地よく吹いてくる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai ouvert la porte et suis sorti. Une agréable brise printanière m'a accueilli.*"
            }
        }
    },
    "day5_walk_route_branch": {
        "background": "assets/images/background/street.png",
        "branches": [
            {
                "next": "day5_walk_couple_branch",
                "condition": "day4_confession_accepted"
            },
            {
                "next": "day5_walk_pending_start",
                "condition": "day4_waited"
            },
            {
                "next": "day5_walk_default_start"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": ""
            },
            "en": {
                "name": "System",
                "text": ""
            },
            "es": {
                "name": "Sistema",
                "text": ""
            },
            "ja": {
                "name": "システム",
                "text": ""
            },
            "fr": {
                "name": "Système",
                "text": ""
            }
        }
    },
    "day5_walk_couple_branch": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_walk_couple_seoyeon",
                "character": "Seoyeon",
                "condition": "isDating_Seoyeon"
            },
            {
                "next": "day5_walk_couple_yuna",
                "character": "Yuna",
                "condition": "isDating_Yuna"
            },
            {
                "next": "day5_walk_couple_dain",
                "character": "Dain",
                "condition": "isDating_Dain"
            },
            {
                "next": "day5_walk_couple_nurse",
                "character": "Nurse",
                "condition": "isDating_Nurse"
            },
            {
                "next": "day5_walk_couple_teacher",
                "character": "Teacher",
                "condition": "isDating_Teacher"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": ""
            },
            "en": {
                "name": "System",
                "text": ""
            },
            "es": {
                "name": "Sistema",
                "text": ""
            },
            "ja": {
                "name": "システム",
                "text": ""
            },
            "fr": {
                "name": "Système",
                "text": ""
            }
        }
    },
    "day5_walk_couple_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day5_walk_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"여기! 여기!!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Over here! Over here!!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡Aquí! ¡¡Aquí!!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "「ここ！ここだよ!!」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Par ici ! Par ici !!\""
            }
        }
    },
    "day5_walk_seoyeon_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day5_walk_seoyeon_talk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*약속 장소에 서연이가 이미 와 있었다. 햇살 아래 서 있는 서연이가 눈부시다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon was already there at our meeting spot. Standing in the sunlight, she looked radiant.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon ya estaba en el punto de encuentro. Parada bajo la luz del sol, se veía radiante.*"
            },
            "ja": {
                "name": "僕",
                "text": "*待ち合わせ場所にソヨンがもう来ていた。日差しの下に立つソヨンが眩しい。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon était déjà au point de rendez-vous. Debout dans la lumière du soleil, elle était radieuse.*"
            }
        }
    },
    "day5_walk_seoyeon_talk": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day5_walk_seoyeon_react",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"오늘 날씨 진짜 좋다. 같이 걸으니까 더 좋고. 봄에는 이 길에 벚꽃이 핀다던데, 알아?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"The weather's so nice today. Even nicer walking together. Did you know cherry blossoms bloom along this path in spring?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"El clima está hermoso hoy. Y es mejor caminando juntos. ¿Sabías que en primavera florecen cerezos en este camino?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "「今日、本当にいい天気だね。一緒に歩くともっといいし。春にはこの道に桜が咲くんだって、知ってた？」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Il fait tellement beau aujourd'hui. C'est encore mieux de marcher ensemble. Tu savais que des cerisiers fleurissent le long de ce chemin au printemps ?\""
            }
        }
    },
    "day5_walk_seoyeon_react": {
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day5_walk_couple_common",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와 나란히 걷는다. 따로 말하지 않아도 자연스럽게 보폭이 맞춰진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I walked side by side with Seoyeon. Without saying a word, our steps naturally fell in sync.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Caminé al lado de Seoyeon. Sin decir nada, nuestros pasos se sincronizaron naturalmente.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンと並んで歩く。何も言わなくても自然と歩幅が合う。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai marché côte à côte avec Seoyeon. Sans dire un mot, nos pas se sont naturellement synchronisés.*"
            }
        }
    },
    "day5_walk_couple_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day5_walk_yuna_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*약속 장소에 도착하니 유나가 벽에 기대서 있었다. 이어폰 한쪽을 귀에 꽂은 채.*"
            },
            "en": {
                "name": "Me",
                "text": "*When I arrived at our meeting spot, Yuna was leaning against the wall. One earbud in her ear.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cuando llegué al punto de encuentro, Yuna estaba recostada contra la pared. Con un auricular puesto.*"
            },
            "ja": {
                "name": "僕",
                "text": "*待ち合わせ場所に着くと、ユナが壁にもたれて立っていた。イヤホンの片方を耳につけたまま。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En arrivant au point de rendez-vous, Yuna était adossée au mur. Un écouteur dans l'oreille.*"
            }
        }
    },
    "day5_walk_yuna_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day5_walk_yuna_talk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…왔어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...You came.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Viniste.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "「……来たんだ。」"
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Tu es venu.\""
            }
        }
    },
    "day5_walk_yuna_talk": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day5_walk_yuna_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 이어폰 한쪽을 빼서 내게 내밀었다. 아무 말 없이 같이 들으라는 뜻이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna pulled out one earbud and held it out to me. No words needed—she wanted me to listen along.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna se quitó un auricular y me lo ofreció. Sin palabras, quería que escucháramos juntos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナがイヤホンの片方を外して僕に差し出した。何も言わずに一緒に聴けということだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna a retiré un écouteur et me l'a tendu. Pas besoin de mots — elle voulait que j'écoute avec elle.*"
            }
        }
    },
    "day5_walk_yuna_react": {
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day5_walk_couple_common",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이어폰을 나눠 끼고 나란히 걸었다. 말은 없지만, 이 침묵이 불편하지 않다. 오히려 좋다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We shared the earbuds and walked side by side. No words, but this silence isn't uncomfortable. If anything, it's nice.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Compartimos los auriculares y caminamos lado a lado. Sin palabras, pero este silencio no es incómodo. De hecho, es agradable.*"
            },
            "ja": {
                "name": "僕",
                "text": "*イヤホンを分け合って並んで歩いた。言葉はないけど、この沈黙は居心地が悪くない。むしろ心地いい。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*On a partagé les écouteurs et marché côte à côte. Pas un mot, mais ce silence n'est pas gênant. C'est même agréable.*"
            }
        }
    },
    "day5_walk_couple_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day5_walk_dain_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야!! 여기야 여기!! 빨리 와!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey!! Over here!! Hurry up!!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡¡Oye!! ¡¡Aquí!! ¡¡Apúrate!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "「ねえ!! こっちこっち!! 早く来て!!」"
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hé !! Par ici !! Dépêche-toi !!\""
            }
        }
    },
    "day5_walk_dain_2": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day5_walk_dain_talk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 저 멀리서 두 팔을 흔들고 있다. 아침부터 저 에너지는 대체 어디서 나오는 걸까.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain was waving both arms from way over there. Where does she get all that energy this early in the morning?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dain estaba agitando ambos brazos desde allá lejos. ¿De dónde saca tanta energía tan temprano?*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインが遠くで両腕を振っている。朝からあのエネルギーは一体どこから出てくるんだろう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain agitait les deux bras depuis là-bas. Où trouve-t-elle toute cette énergie si tôt le matin ?*"
            }
        }
    },
    "day5_walk_dain_talk": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day5_walk_dain_react",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"일요일에 학교 가는 건 좀 이상하긴 한데, 너랑 같이니까 소풍 느낌이다! 가자가자!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Going to school on a Sunday is kinda weird, but since I'm with you, it feels like a field trip! Let's go, let's go!!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Ir a la escuela un domingo es algo raro, pero como estoy contigo, ¡se siente como una excursión! ¡¡Vamos, vamos!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "「日曜日に学校行くのはちょっと変だけど、あなたと一緒だから遠足みたい！行こう行こう!!」"
            },
            "fr": {
                "name": "Dain",
                "text": "\"Aller à l'école un dimanche, c'est un peu bizarre, mais avec toi, on dirait une sortie scolaire ! Allez, allez !!\""
            }
        }
    },
    "day5_walk_dain_react": {
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day5_walk_couple_common",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이의 손에 이끌려 걸었다. 어느새 나까지 웃고 있었다. 이 에너지는 전염되나 보다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I walked along, pulled by Dain's hand. Before I knew it, I was smiling too. Her energy must be contagious.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Caminé llevado de la mano de Dain. Sin darme cuenta, yo también estaba sonriendo. Su energía debe ser contagiosa.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインの手に引かれて歩いた。いつの間にか僕まで笑っていた。このエネルギーは伝染するらしい。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai marché, entraîné par la main de Dain. Sans m'en rendre compte, je souriais aussi. Son énergie doit être contagieuse.*"
            }
        }
    },
    "day5_walk_couple_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day5_walk_nurse_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*약속 장소에 도착하니 선생님이 사복 차림으로 서 있었다. 학교에서 볼 때와는 또 다른 느낌이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*When I arrived at the meeting spot, she was standing there in casual clothes. She looks so different from how she does at school.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cuando llegué al punto de encuentro, estaba parada con ropa casual. Se ve tan diferente a como luce en la escuela.*"
            },
            "ja": {
                "name": "僕",
                "text": "*待ち合わせ場所に着くと、先生が私服姿で立っていた。学校で見る時とはまた違う雰囲気だ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En arrivant au point de rendez-vous, elle était là en tenue décontractée. Elle a l'air tellement différente de d'habitude à l'école.*"
            }
        }
    },
    "day5_walk_nurse_2": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day5_walk_nurse_talk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"왔구나. 주말에 보니까 또 새롭네. 평소 가운 입은 나만 봤으니까.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"You made it. Seeing you on the weekend feels different. You've only ever seen me in my lab coat, after all.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Llegaste. Verte en fin de semana se siente diferente. Después de todo, solo me has visto con bata.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "「来たんだ。週末に会うとまた新鮮だね。いつも白衣の私しか見てなかったでしょ。」"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Tu es là. Te voir le week-end, ça fait drôle. Tu ne m'as jamais vue qu'en blouse, après tout.\""
            }
        }
    },
    "day5_walk_nurse_talk": {
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day5_walk_nurse_react",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"이 길로 가면 학교 가는 지름길이야. …아는 사람이 없는 길이기도 하고.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"If we go this way, it's a shortcut to school. ...It's also a path where nobody we know would see us.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Si vamos por aquí, es un atajo a la escuela. ...También es un camino donde nadie nos vería.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "「この道を行くと学校への近道なの。……知り合いがいない道でもあるし。」"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Si on passe par là, c'est un raccourci vers l'école. ...C'est aussi un chemin où personne qu'on connaît ne nous verra.\""
            }
        }
    },
    "day5_walk_nurse_react": {
        "character": "assets/images/characters/nurse_shy.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day5_walk_couple_common",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*살짝 수줍어하는 선생님의 표정이 새롭다. 나란히 걷는 것만으로도 심장이 뛴다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The slightly shy look on her face was something new. Just walking side by side was enough to make my heart race.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La expresión un poco tímida en su rostro era algo nuevo. Solo caminar lado a lado era suficiente para hacer latir mi corazón.*"
            },
            "ja": {
                "name": "僕",
                "text": "*少し恥ずかしそうな先生の表情が新鮮だ。並んで歩くだけで心臓がドキドキする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Son air légèrement timide, c'était nouveau. Juste marcher côte à côte suffisait à faire battre mon cœur.*"
            }
        }
    },
    "day5_walk_couple_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day5_walk_teacher_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*약속 장소에 도착하니 선생님이 캐주얼 차림으로 서 있었다. 교실에서 보던 엄격한 모습과는 딴판이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*When I arrived at the meeting spot, she was standing in casual clothes. A far cry from the strict teacher I see in the classroom.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cuando llegué al punto de encuentro, estaba parada con ropa casual. Muy diferente a la profesora estricta que veo en clase.*"
            },
            "ja": {
                "name": "僕",
                "text": "*待ち合わせ場所に着くと、先生がカジュアルな服装で立っていた。教室で見る厳しい姿とは全然違う。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En arrivant au point de rendez-vous, elle était là en tenue décontractée. Bien loin de la professeure stricte que je vois en classe.*"
            }
        }
    },
    "day5_walk_teacher_2": {
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day5_walk_teacher_talk",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"늦을 줄 알았는데 시간 딱 맞게 왔네. …칭찬이야, 일단.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"I thought you'd be late, but you're right on time. ...That's a compliment, by the way.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Pensé que llegarías tarde, pero llegaste justo a tiempo. ...Eso es un cumplido, por cierto.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "「遅れると思ったのにぴったり来たわね。……褒めてるのよ、一応。」"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"Je pensais que tu serais en retard, mais tu es pile à l'heure. ...C'est un compliment, au passage.\""
            }
        }
    },
    "day5_walk_teacher_talk": {
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day5_walk_teacher_react",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"주말에 같이 걷는 건 처음이네. …학교에서랑은 좀 다르지? 난 지금… 선생님이 아니라 그냥 한 사람이야.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"This is the first time we've walked together on a weekend. ...It's different from school, isn't it? Right now, I'm not a teacher. I'm just... a person.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Es la primera vez que caminamos juntos en fin de semana. ...Es diferente a la escuela, ¿no? Ahora mismo no soy una profesora. Soy solo... una persona.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "「週末に一緒に歩くのは初めてだね。……学校とは違うでしょ？ 私は今……先生じゃなくて、ただの一人の人間。」"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"C'est la première fois qu'on marche ensemble un week-end. ...C'est différent de l'école, non ? En ce moment, je ne suis pas professeure. Je suis juste... une personne.\""
            }
        }
    },
    "day5_walk_teacher_react": {
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 5
            }
        },
        "next": "day5_walk_couple_common",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"그냥 한 사람\"이라. 그 말에 가슴이 뜨거워졌다. 이렇게 솔직한 선생님은 처음 본다.)"
            },
            "en": {
                "name": "Me",
                "text": "(\"Just a person.\" Those words made my chest feel warm. I've never seen her this honest before.)"
            },
            "es": {
                "name": "Yo",
                "text": "(\"Solo una persona.\" Esas palabras hicieron que mi pecho se calentara. Nunca la había visto tan sincera.)"
            },
            "ja": {
                "name": "僕",
                "text": "(「ただの一人の人間」か。その言葉に胸が熱くなった。こんなに素直な先生は初めて見る。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(\"Juste une personne.\" Ces mots m'ont réchauffé le cœur. Je ne l'avais jamais vue aussi sincère.)"
            }
        }
    },
    "day5_walk_couple_common": {
        "character": null,
        "next": "day5_walk_couple_common2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나란히 걸으며 지난 며칠간의 이야기를 나누었다. 처음 만났을 때 이야기, 웃겼던 일들, 가슴 뛰었던 순간들.*"
            },
            "en": {
                "name": "Me",
                "text": "*Walking side by side, we talked about everything that happened the past few days. How we first met, the funny moments, the times our hearts raced.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Caminando lado a lado, hablamos de todo lo que pasó estos días. Cómo nos conocimos, los momentos divertidos, las veces que nos latió el corazón.*"
            },
            "ja": {
                "name": "僕",
                "text": "*並んで歩きながらこの数日間のことを話した。初めて会った時のこと、笑ったこと、胸がドキドキした瞬間。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En marchant côte à côte, on a parlé de tout ce qui s'est passé ces derniers jours. Notre première rencontre, les moments drôles, les instants où nos cœurs ont battu la chamade.*"
            }
        }
    },
    "day5_walk_couple_common2": {
        "character": null,
        "next": "day5_arrive_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어느새 학교가 보이기 시작했다. 작별이 아쉬울 줄 알았는데, 오늘은 함께하는 하루의 시작이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Before I knew it, the school came into view. I thought I'd dread saying goodbye, but today marks the beginning of a day we're spending together.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sin darme cuenta, la escuela apareció a la vista. Pensé que me daría pena despedirme, pero hoy marca el comienzo de un día que pasaremos juntos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*いつの間にか学校が見え始めた。別れが惜しいと思ったけど、今日は一緒に過ごす一日の始まりだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Sans m'en rendre compte, l'école est apparue. Je pensais redouter les adieux, mais aujourd'hui marque le début d'une journée passée ensemble.*"
            }
        }
    },
    "day5_walk_pending_start": {
        "next": "day5_walk_pending_think",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집을 나서서 학교 쪽으로 걷기 시작했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I left the house and started walking toward school.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Salí de casa y empecé a caminar hacia la escuela.*"
            },
            "ja": {
                "name": "僕",
                "text": "*家を出て学校の方へ歩き始めた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je suis sorti de chez moi et me suis dirigé vers l'école.*"
            }
        }
    },
    "day5_walk_pending_think": {
        "next": "day5_walk_pending_plan",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어제 고백하지 못한 게 자꾸 머릿속에 맴돈다. 오늘은… 오늘은 반드시.*"
            },
            "en": {
                "name": "Me",
                "text": "*I can't stop thinking about how I didn't confess yesterday. Today... today I absolutely will.*"
            },
            "es": {
                "name": "Yo",
                "text": "*No puedo dejar de pensar en que no me confesé ayer. Hoy... hoy definitivamente lo haré.*"
            },
            "ja": {
                "name": "僕",
                "text": "*昨日告白できなかったことが頭の中でぐるぐる回っている。今日は……今日こそ必ず。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je n'arrête pas de penser au fait que je ne me suis pas déclaré hier. Aujourd'hui... aujourd'hui, je le ferai sans faute.*"
            }
        }
    },
    "day5_walk_pending_plan": {
        "next": "day5_walk_pending_nervous",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(뭐라고 말하지? \"좋아해\"? \"사귀자\"? 아니, 자연스럽게 분위기를 보고…)"
            },
            "en": {
                "name": "Me",
                "text": "(What should I say? \"I like you\"? \"Will you go out with me\"? No, maybe I should just play it by ear...)"
            },
            "es": {
                "name": "Yo",
                "text": "(¿Qué digo? \"¿Me gustas\"? \"¿Quieres salir conmigo\"? No, mejor dejo que fluya...)"
            },
            "ja": {
                "name": "僕",
                "text": "(何て言おう？「好きだ」？「付き合おう」？いや、自然に雰囲気を見て……)"
            },
            "fr": {
                "name": "Moi",
                "text": "(Qu'est-ce que je devrais dire ? « Je t'aime bien » ? « Tu veux sortir avec moi » ? Non, peut-être que je devrais juste improviser...)"
            }
        }
    },
    "day5_walk_pending_nervous": {
        "next": "day5_walk_pending_resolve",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*아, 벌써 손이 떨린다. 걸음을 옮길수록 심장이 빨라진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*My hands are already trembling. With every step, my heart beats faster.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mis manos ya están temblando. Con cada paso, mi corazón late más rápido.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ああ、もう手が震えている。歩くたびに心臓が速くなる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mes mains tremblent déjà. À chaque pas, mon cœur bat plus vite.*"
            }
        }
    },
    "day5_walk_pending_resolve": {
        "next": "day5_walk_pending_memory",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*괜찮아. 4일 동안 함께한 시간들이 있잖아. 그 시간들이 나에게 용기를 준다.*"
            },
            "en": {
                "name": "Me",
                "text": "*It's okay. I have four days' worth of memories together. Those moments give me courage.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Está bien. Tengo cuatro días de recuerdos juntos. Esos momentos me dan valor.*"
            },
            "ja": {
                "name": "僕",
                "text": "*大丈夫。4日間一緒に過ごした時間がある。あの時間が僕に勇気をくれる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Ça va aller. J'ai quatre jours de souvenirs partagés. Ces moments me donnent du courage.*"
            }
        }
    },
    "day5_walk_pending_memory": {
        "next": "day5_walk_pending_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*첫날 어색했던 인사, 함께 웃었던 점심시간, 방과후의 대화… 모든 순간이 소중했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The awkward greeting on the first day, laughing together at lunch, our after-school conversations... every moment was precious.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El saludo incómodo del primer día, las risas juntos en el almuerzo, las conversaciones después de clases... cada momento fue valioso.*"
            },
            "ja": {
                "name": "僕",
                "text": "*初日のぎこちない挨拶、一緒に笑った昼休み、放課後の会話……すべての瞬間が大切だった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Les salutations maladroites du premier jour, les rires à la cantine, nos conversations après les cours... chaque moment était précieux.*"
            }
        }
    },
    "day5_walk_pending_ready": {
        "next": "day5_walk_pending_almost",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그래, 후회하지 않으려면 오늘 말해야 해.*"
            },
            "en": {
                "name": "Me",
                "text": "*Right. If I don't want any regrets, I have to say it today.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sí. Si no quiero arrepentirme, tengo que decirlo hoy.*"
            },
            "ja": {
                "name": "僕",
                "text": "*そうだ、後悔したくないなら今日言わなきゃ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*C'est ça. Si je ne veux pas de regrets, je dois le dire aujourd'hui.*"
            }
        }
    },
    "day5_walk_pending_almost": {
        "next": "day5_arrive_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*저 앞에 학교가 보인다. 심호흡을 한 번 크게 했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The school is just up ahead. I took one deep breath.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La escuela está justo adelante. Tomé una respiración profunda.*"
            },
            "ja": {
                "name": "僕",
                "text": "*あの先に学校が見える。大きく深呼吸をした。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*L'école est juste devant. J'ai pris une grande inspiration.*"
            }
        }
    },
    "day5_walk_default_start": {
        "next": "day5_walk_default_reflect",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*혼자 걷는 일요일 아침 거리. 평소 같으면 이 시간에 아직 자고 있었을 텐데.*"
            },
            "en": {
                "name": "Me",
                "text": "*Walking alone on a Sunday morning. Normally, I'd still be in bed at this hour.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Caminando solo una mañana de domingo. Normalmente, todavía estaría en cama a esta hora.*"
            },
            "ja": {
                "name": "僕",
                "text": "*一人で歩く日曜の朝の通り。普段ならこの時間はまだ寝ていたはずなのに。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Marcher seul un dimanche matin. D'habitude, je serais encore au lit à cette heure-ci.*"
            }
        }
    },
    "day5_walk_default_reflect": {
        "next": "day5_walk_default_change",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*전학 오기 전에는 일요일 아침에 집에서 뒹굴거리는 게 전부였다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Before I transferred, my Sunday mornings were nothing but lounging around at home.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Antes de transferirme, mis mañanas de domingo no eran más que holgazanear en casa.*"
            },
            "ja": {
                "name": "僕",
                "text": "*転校する前は、日曜の朝は家でゴロゴロするだけだった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Avant mon transfert, mes dimanches matin n'étaient que traîner à la maison.*"
            }
        }
    },
    "day5_walk_default_change": {
        "next": "day5_walk_default_people",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그런데 지금은 달라졌다. 일요일에도 학교에 가고 싶다는 생각을 하게 될 줄이야.*"
            },
            "en": {
                "name": "Me",
                "text": "*But now things have changed. I never thought the day would come when I'd actually want to go to school on a Sunday.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Pero ahora las cosas cambiaron. Nunca pensé que llegaría el día en que quisiera ir a la escuela un domingo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*でも今は変わった。日曜日にも学校に行きたいと思う日が来るなんて。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mais maintenant les choses ont changé. Je n'aurais jamais pensé qu'un jour j'aurais envie d'aller à l'école un dimanche.*"
            }
        }
    },
    "day5_walk_default_people": {
        "next": "day5_walk_default_arrive",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이의 다정함, 유나의 신비로움, 다인이의 밝음, 보건선생님의 따스함, 담임선생님의 진심… 다 소중한 인연이었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon's warmth, Yuna's mysteriousness, Dain's brightness, the school nurse's gentleness, the homeroom teacher's sincerity... They were all meaningful connections.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La calidez de Seoyeon, el misterio de Yuna, la alegría de Dain, la ternura de la enfermera, la sinceridad de la profesora... Todas fueron conexiones valiosas.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンの優しさ、ユナの神秘さ、ダインの明るさ、保健先生の温かさ、担任先生の真心……全部大切な縁だった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La chaleur de Seoyeon, le mystère de Yuna, la vivacité de Dain, la douceur de l'infirmière, la sincérité du professeur principal... C'étaient toutes des liens précieux.*"
            }
        }
    },
    "day5_walk_default_arrive": {
        "next": "day5_arrive_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*저 앞에 학교 건물이 보인다. 전학 첫날 봤던 그 풍경이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The school building comes into view up ahead. The same scenery I saw on my very first day here.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El edificio de la escuela aparece a la vista. El mismo paisaje que vi en mi primer día aquí.*"
            },
            "ja": {
                "name": "僕",
                "text": "*あの先に学校の建物が見える。転校初日に見たあの風景だ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le bâtiment de l'école apparaît devant moi. Le même paysage que celui de mon tout premier jour ici.*"
            }
        }
    },
    "day5_arrive_start": {
        "character": null,
        "background": "assets/images/background/school.png",
        "next": "day5_arrive_nostalgia",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학교 정문 앞에 섰다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I stood in front of the school gate.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me paré frente a la entrada de la escuela.*"
            },
            "ja": {
                "name": "僕",
                "text": "*学校の正門の前に立った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je me suis arrêté devant le portail de l'école.*"
            }
        }
    },
    "day5_arrive_nostalgia": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "day5_arrive_firstday",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이 정문… 5일 전, 처음 이 학교에 왔을 때도 이 자리에 섰었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*This gate... Five days ago, when I first came to this school, I stood in this exact spot.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Esta entrada... Hace cinco días, cuando vine a esta escuela por primera vez, estuve parado en este mismo lugar.*"
            },
            "ja": {
                "name": "僕",
                "text": "*この正門……5日前、初めてこの学校に来た時もここに立っていた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Ce portail... Il y a cinq jours, quand je suis arrivé dans cette école pour la première fois, je me tenais exactement ici.*"
            }
        }
    },
    "day5_arrive_firstday": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "day5_arrive_now",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그때는 모든 게 낯설었다. 새로운 학교, 새로운 교실, 모르는 얼굴들. 긴장으로 발이 떨어지지 않았는데.*"
            },
            "en": {
                "name": "Me",
                "text": "*Back then, everything was unfamiliar. A new school, a new classroom, faces I didn't recognize. I was so nervous my feet wouldn't move.*"
            },
            "es": {
                "name": "Yo",
                "text": "*En ese entonces, todo era desconocido. Una nueva escuela, un nuevo salón, caras que no reconocía. Estaba tan nervioso que mis pies no se movían.*"
            },
            "ja": {
                "name": "僕",
                "text": "*あの時は全てが見知らぬものだった。新しい学校、新しい教室、知らない顔ばかり。緊張で足が動かなかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*À l'époque, tout m'était inconnu. Une nouvelle école, une nouvelle salle de classe, des visages que je ne reconnaissais pas. J'étais si nerveux que mes pieds refusaient d'avancer.*"
            }
        }
    },
    "day5_arrive_now": {
        "background": "assets/images/background/school.png",
        "character": null,
        "fade": true,
        "next": "day5_school_arrive",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*지금은 다르다. 이곳에 내가 아는 사람들이 있고, 내가 돌아올 곳이 있다. 정문을 지나 안으로 들어갔다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Now it's different. There are people I know here, and a place I can come back to. I walked past the gate and headed inside.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Ahora es diferente. Hay personas que conozco aquí, y un lugar al que puedo volver. Pasé la entrada y entré.*"
            },
            "ja": {
                "name": "僕",
                "text": "*今は違う。ここには僕の知っている人たちがいて、帰る場所がある。正門を通って中に入った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Maintenant c'est différent. Il y a des gens que je connais ici, et un endroit où je peux revenir. J'ai franchi le portail et suis entré.*"
            }
        }
    }
});
