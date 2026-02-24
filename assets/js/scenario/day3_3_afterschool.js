/**
 * ============================================================================
 * CUPID - day3_3_afterschool (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day3_3_afterschool.js + en_day3_3_afterschool.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[3]) SCENARIO[3] = {};

Object.assign(SCENARIO[3], {
    "day3_afternoon_start": {
        "background": "assets/images/background/room_school.png",
        "bgm": "daily2.mp3",
        "character": null,
        "sunset": true,
        "next": "day3_afternoon_check",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*드디어 종례가 끝났다. 금요일 방과후... 해방감과 함께 묘한 긴장감이 느껴진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Finally, homeroom is over. Friday after school... Freedom mixed with strange tension.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Por fin terminó la clase. Viernes después de clases... Libertad mezclada con una extraña tensión.*"
            },
            "ja": {
                "name": "僕",
                "text": "*やっと終礼が終わった。金曜日の放課後…解放感と共に妙な緊張感がある。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Enfin, la classe est terminée. Vendredi après les cours... La liberté se mêle à une étrange tension.*"
            }
        }
    },
    "day3_afternoon_check": {
        "background": "assets/images/background/room_school.png",
        "sunset": true,
        "branches": [
            {
                "next": "day3_afternoon_tension",
                "condition": "day3_caught_multiple_dates"
            },
            {
                "next": "day3_afternoon_jealousy_check",
                "condition": "day3_jealousy_seoyeon"
            },
            {
                "next": "day3_afternoon_jealousy_check",
                "condition": "day3_jealousy_yuna"
            },
            {
                "next": "day3_afternoon_jealousy_check",
                "condition": "day3_jealousy_dain"
            },
            {
                "next": "day3_afternoon_normal"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*가방을 챙기려는데...*"
            },
            "en": {
                "name": "Me",
                "text": "*As I pack my bag...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mientras empaco mi mochila...*"
            },
            "ja": {
                "name": "僕",
                "text": "*鞄を片付けようとすると…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Alors que je prépare mon sac...*"
            }
        }
    },
    "day3_afternoon_tension": {
        "sunset": true,
        "next": "day3_afternoon_tension_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교실 분위기가 무겁다. 아까 점심때 일 때문인 것 같다...*"
            },
            "en": {
                "name": "Me",
                "text": "*The classroom atmosphere is heavy. Must be because of lunch...*"
            },
            "es": {
                "name": "Yo",
                "text": "*El ambiente del salón está pesado. Debe ser por lo del almuerzo...*"
            },
            "ja": {
                "name": "僕",
                "text": "*教室の雰囲気が重い。さっきの昼休みのせいだろう…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*L'atmosphère de la classe est lourde. Ça doit être à cause du déjeuner...*"
            }
        }
    },
    "day3_afternoon_tension_2": {
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "next": "day3_afternoon_confrontation",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...{name}아, 잠깐 얘기 좀 하자.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...{name}, can we talk for a moment?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...{name}, ¿podemos hablar un momento?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…{name}、ちょっと話がある。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...{name}, on peut parler un instant ?\""
            }
        }
    },
    "day3_afternoon_confrontation": {
        "character": "assets/images/characters/seyoun_sad.png",
        "background": "assets/images/background/school_hallway.png",
        "sunset": true,
        "next": "day3_afternoon_confrontation_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이가 복도로 나를 데리고 나왔다. 평소의 다정한 미소는 온데간데없고, 차갑게 굳은 표정에 등줄기를 타고 식은땀이 흐른다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon takes me to the hallway. Her expression looks serious.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon me lleva al pasillo. Su expresión se ve seria.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンに廊下に連れ出された。表情が真剣だ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon m'emmène dans le couloir. Son expression est sérieuse.*"
            }
        }
    },
    "day3_afternoon_confrontation_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "next": "day3_afternoon_confrontation_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"점심때 말이야... 네가 다른 애들한테 웃어줄 때마다, 내 안에서 뭔가가 무너지는 기분이었어. 너, 정말 우리 모두한테 주말을 약속한 거야?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"About lunch... Did you really make weekend plans with all of us?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Sobre el almuerzo... ¿De verdad hiciste planes de fin de semana con todas nosotras?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"お昼のことなんだけど…本当にみんなと週末の約束したの？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"À propos du déjeuner... Tu as vraiment pris des engagements pour le week-end avec nous toutes ?\""
            }
        }
    },
    "day3_afternoon_confrontation_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_admit"
            },
            {
                "next": "day3_afternoon_justify"
            },
            {
                "next": "day3_afternoon_lie_seoyeon"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어떻게 대답해야 할까...*",
                "choices": [
                    "솔직하게 인정한다",
                    "시간대가 다르니까 괜찮다고 한다",
                    "서연이만 진심이라고 한다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*How should I answer...*",
                "choices": [
                    "Admit honestly",
                    "Say different times make it okay",
                    "Say only Seoyeon is sincere"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¿Cómo debería responder...?*",
                "choices": [
                    "Admitir honestamente",
                    "Decir que diferentes horarios lo hacen aceptable",
                    "Decir que solo Seoyeon es sincera"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*どう答えればいいんだろう…*",
                "choices": [
                    "正直に認める",
                    "時間帯が違うから大丈夫と言う",
                    "ソヨンだけが本気だと言う"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Comment devrais-je répondre...*",
                "choices": [
                    "Admettre honnêtement",
                    "Dire que les horaires différents rendent ça acceptable",
                    "Dire que seule Seoyeon est sincère"
                ]
            }
        }
    },
    "day3_afternoon_admit": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "next": "day3_afternoon_admit_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"...응. 미안해. 다들 거절하기가 어려워서...\""
            },
            "en": {
                "name": "Me",
                "text": "\"...Yes. Sorry. I couldn't turn anyone down...\""
            },
            "es": {
                "name": "Yo",
                "text": "\"...Sí. Perdón. No pude rechazar a nadie...\""
            },
            "ja": {
                "name": "僕",
                "text": "\"…うん。ごめん。みんなに断れなくて…\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"...Oui. Désolé. Je n'arrivais pas à dire non...\""
            }
        }
    },
    "day3_afternoon_admit_react": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day3_afternoon_admit_react_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"거절하기 어려웠다고? 네 그 어설픈 다정함이 나를 얼마나 비참하게 만드는지, 넌 모를 거야.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Thanks for being honest. But I don't like that.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Gracias por ser honesto. Pero no me gusta eso.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…正直に言ってくれてありがとう。でも、嫌だよそういうの。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Merci d'être honnête. Mais ça ne me plaît pas.\""
            }
        }
    },
    "day3_afternoon_admit_react_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "setFlag": "day3_seoyeon_ultimatum",
        "next": "day3_afternoon_transition",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"난 네 친절함의 일부가 되고 싶지 않아. 전부가 아니면... 차라리 아무것도 안 할래. 선택해, {name}.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"If I'm really special to you... only meet me. Otherwise, I have options too.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"If I'm really special to you... only meet me. Otherwise, I have options too.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"If I'm really special to you... only meet me. Otherwise, I have options too.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Si je compte vraiment pour toi... ne vois que moi. Sinon, j'ai d'autres options aussi.\""
            }
        }
    },
    "day3_afternoon_justify": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "next": "day3_afternoon_justify_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"시간대가 다 달라서... 다 만날 수 있을 것 같아서...\""
            },
            "en": {
                "name": "Me",
                "text": "\"The times are all different... so I thought I could meet everyone...\""
            },
            "es": {
                "name": "Yo",
                "text": "\"The times are all different... so I thought I could meet everyone...\""
            },
            "ja": {
                "name": "僕",
                "text": "\"The times are all different... so I thought I could meet everyone...\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Les horaires sont tous différents... alors je me suis dit que je pourrais voir tout le monde...\""
            }
        }
    },
    "day3_afternoon_justify_react": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "next": "day3_afternoon_justify_react_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...그게 문제라는 걸 모르겠어?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Don't you see that's the problem?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Don't you see that's the problem?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"...Don't you see that's the problem?\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Tu ne vois pas que c'est ça le problème ?\""
            }
        }
    },
    "day3_afternoon_justify_react_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day3_afternoon_transition",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...알았어. 주말에 보면 알겠지.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Fine. We'll see this weekend.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Fine. We'll see this weekend.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"...Fine. We'll see this weekend.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Très bien. On verra ce week-end.\""
            }
        }
    },
    "day3_afternoon_lie_seoyeon": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "next": "day3_afternoon_lie_seoyeon_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"서연아, 너만 진심이야. 다른 애들은 그냥 친구로서...\""
            },
            "en": {
                "name": "Me",
                "text": "\"Seoyeon, you're the only one I'm sincere about. The others are just friends...\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Seoyeon, you're the only one I'm sincere about. The others are just friends...\""
            },
            "ja": {
                "name": "僕",
                "text": "\"Seoyeon, you're the only one I'm sincere about. The others are just friends...\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Seoyeon, tu es la seule qui compte vraiment. Les autres, ce sont juste des amies...\""
            }
        }
    },
    "day3_afternoon_lie_seoyeon_react": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "setFlag": "day3_promised_seoyeon_only",
        "next": "day3_afternoon_lie_warning",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...정말? 그 말... 믿어도 돼?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Really? Can I trust that?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Really? Can I trust that?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"...Really? Can I trust that?\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Vraiment ? Je peux te croire ?\""
            }
        }
    },
    "day3_afternoon_lie_warning": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day3_afternoon_transition",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이가 미소 짓는다. 하지만... 이게 맞는 걸까? 다른 애들에게 뭐라고 해야 하지?*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon smiles. But... is this right? What should I tell the others?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon smiles. But... is this right? What should I tell the others?*"
            },
            "ja": {
                "name": "僕",
                "text": "*Seoyeon smiles. But... is this right? What should I tell the others?*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon sourit. Mais... est-ce que c'est bien ? Qu'est-ce que je vais dire aux autres ?*"
            }
        }
    },
    "day3_afternoon_jealousy_check": {
        "sunset": true,
        "next": "day3_afternoon_approach",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*점심때 분위기가 좀 이상했는데... 괜찮겠지?*"
            },
            "en": {
                "name": "Me",
                "text": "*The atmosphere was a bit weird during lunch... It should be fine, right?*"
            },
            "es": {
                "name": "Yo",
                "text": "*The atmosphere was a bit weird during lunch... It should be fine, right?*"
            },
            "ja": {
                "name": "僕",
                "text": "*The atmosphere was a bit weird during lunch... It should be fine, right?*"
            },
            "fr": {
                "name": "Moi",
                "text": "*L'ambiance était un peu bizarre au déjeuner... Ça devrait aller, non ?*"
            }
        }
    },
    "day3_afternoon_approach": {
        "sunset": true,
        "branches": [
            {
                "next": "day3_afternoon_seoyeon_approach",
                "condition": "day3_jealousy_seoyeon"
            },
            {
                "next": "day3_afternoon_yuna_approach",
                "condition": "day3_jealousy_yuna"
            },
            {
                "next": "day3_afternoon_dain_approach",
                "condition": "day3_jealousy_dain"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*가방을 챙기고 일어서는데, 누군가 다가온다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As I stand up to pack my bag, someone approaches.*"
            },
            "es": {
                "name": "Yo",
                "text": "*As I stand up to pack my bag, someone approaches.*"
            },
            "ja": {
                "name": "僕",
                "text": "*As I stand up to pack my bag, someone approaches.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Alors que je me lève pour préparer mon sac, quelqu'un s'approche.*"
            }
        }
    },
    "day3_afternoon_seoyeon_approach": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...{name}, 잠깐 시간 돼?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...{name}, do you have a minute?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...{name}, do you have a minute?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"...{name}, do you have a minute?\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...{name}, tu as une minute ?\""
            }
        }
    },
    "day3_afternoon_seoyeon_talk": {
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_talk_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"점심때... 미안해, 내가 좀 예민했던 것 같아.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"About lunch... Sorry, I think I was being sensitive.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"About lunch... Sorry, I think I was being sensitive.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"About lunch... Sorry, I think I was being sensitive.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"À propos du déjeuner... Désolée, je crois que j'étais un peu susceptible.\""
            }
        }
    },
    "day3_afternoon_seoyeon_talk_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_seoyeon_comfort"
            },
            {
                "next": "day3_afternoon_seoyeon_friend"
            },
            {
                "next": "day3_afternoon_seoyeon_tease"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"근데 솔직히... 너 유나나 다인이랑 친한 거 보면 마음이 좀 그래.\"",
                "choices": [
                    "\"서연이가 제일 좋아\"",
                    "\"다들 소중한 친구야\"",
                    "\"질투하는 거야?\""
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"But honestly... seeing you close with Yuna or Dain bothers me a little.\"",
                "choices": [
                    "\"You're my favorite, Seoyeon\"",
                    "\"They're all precious friends\"",
                    "\"Are you jealous?\""
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"But honestly... seeing you close with Yuna or Dain bothers me a little.\"",
                "choices": [
                    "\"You're my favorite, Seoyeon\"",
                    "\"They're all precious friends\"",
                    "\"Are you jealous?\""
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"But honestly... seeing you close with Yuna or Dain bothers me a little.\"",
                "choices": [
                    "\"You're my favorite, Seoyeon\"",
                    "\"They're all precious friends\"",
                    "\"Are you jealous?\""
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Mais honnêtement... te voir proche de Yuna ou Dain, ça me dérange un peu.\"",
                "choices": [
                    "\"Tu es ma préférée, Seoyeon\"",
                    "\"Ce sont toutes des amies précieuses\"",
                    "\"Tu es jalouse ?\""
                ]
            }
        }
    },
    "day3_afternoon_seoyeon_comfort": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 8
            }
        },
        "next": "day3_afternoon_transition",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...진짜? 그 말 들으니까... 좀 안심이 돼.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Really? Hearing that... I feel a bit relieved.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Really? Hearing that... I feel a bit relieved.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"...Really? Hearing that... I feel a bit relieved.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Vraiment ? Entendre ça... je me sens un peu soulagée.\""
            }
        }
    },
    "day3_afternoon_seoyeon_friend": {
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": -3
            }
        },
        "next": "day3_afternoon_transition",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...그래. 친구구나. 알았어.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Right. Friends. Got it.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Right. Friends. Got it.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"...Right. Friends. Got it.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...D'accord. Des amies. Compris.\""
            }
        }
    },
    "day3_afternoon_seoyeon_tease": {
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day3_afternoon_transition",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...뭐야. 그게 아니라... 아, 몰라.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"W-what! That's not... Ugh, forget it!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"W-what! That's not... Ugh, forget it!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"W-what! That's not... Ugh, forget it!\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Q-quoi ! C'est pas... Roh, laisse tomber !\""
            }
        }
    },
    "day3_afternoon_yuna_approach": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_talk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...{name}.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...{name}.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...{name}.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...{name}.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...{name}.\""
            }
        }
    },
    "day3_afternoon_yuna_talk": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_talk_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"점심때... 네 시선이 어디로 향하는지 똑똑히 봤어. 서연이더라.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"At lunch... you chose Seoyeon.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"At lunch... you chose Seoyeon.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"At lunch... you chose Seoyeon.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"Au déjeuner... tu as choisi Seoyeon.\""
            }
        }
    },
    "day3_afternoon_yuna_talk_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_yuna_apologize"
            },
            {
                "next": "day3_afternoon_yuna_promise"
            },
            {
                "next": "day3_afternoon_yuna_question"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 서늘한 눈동자가 나를 꿰뚫어 보는 것 같다. 숨이 턱 막히는 압박감이다.*",
                "choices": [
                    "\"미안해, 유나\"",
                    "\"내일은 유나랑 있을게\"",
                    "\"왜, 화났어?\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Yuna's eyes are colder than usual.*",
                "choices": [
                    "\"I'm sorry, Yuna\"",
                    "\"I'll spend time with you tomorrow\"",
                    "\"Why, are you upset?\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna's eyes are colder than usual.*",
                "choices": [
                    "\"I'm sorry, Yuna\"",
                    "\"I'll spend time with you tomorrow\"",
                    "\"Why, are you upset?\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*Yuna's eyes are colder than usual.*",
                "choices": [
                    "\"I'm sorry, Yuna\"",
                    "\"I'll spend time with you tomorrow\"",
                    "\"Why, are you upset?\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Les yeux de Yuna sont plus froids que d'habitude.*",
                "choices": [
                    "\"Je suis désolé, Yuna\"",
                    "\"Je passerai du temps avec toi demain\"",
                    "\"Pourquoi, tu es vexée ?\""
                ]
            }
        }
    },
    "day3_afternoon_yuna_apologize": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day3_afternoon_yuna_warning",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"사과를 듣고 싶은 게 아니야. 네가 누구 옆에 서 있을지, 그 자리의 무게를 알았으면 해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...It's okay. We have tomorrow.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...It's okay. We have tomorrow.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...It's okay. We have tomorrow.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...C'est bon. On a demain.\""
            }
        }
    },
    "day3_afternoon_yuna_promise": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 8
            }
        },
        "setFlag": "day3_yuna_priority_promise",
        "next": "day3_afternoon_yuna_warning",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...그 말, 잊지 않을게.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I won't forget those words.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...I won't forget those words.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...I won't forget those words.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Je n'oublierai pas ces mots.\""
            }
        }
    },
    "day3_afternoon_yuna_question": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": -3
            }
        },
        "next": "day3_afternoon_yuna_warning",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...화? 아니. 그냥... 확인하고 싶었어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Upset? No. I just... wanted to confirm.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Upset? No. I just... wanted to confirm.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...Upset? No. I just... wanted to confirm.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Vexée ? Non. Je voulais juste... vérifier.\""
            }
        }
    },
    "day3_afternoon_yuna_warning": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day3_afternoon_transition",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"내일은 도망치지 마. 네가 만든 기대감, 끝까지 책임져야 할 테니까.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Remember, {name}. If you lie to me... you know, right?\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Remember, {name}. If you lie to me... you know, right?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"Remember, {name}. If you lie to me... you know, right?\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"Souviens-toi, {name}. Si tu me mens... tu sais ce qui arrivera, n'est-ce pas ?\""
            }
        }
    },
    "day3_afternoon_dain_approach": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day3_afternoon_dain_talk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"{name}아.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey, {name}!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Hey, {name}!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Hey, {name}!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hé, {name} !\""
            }
        }
    },
    "day3_afternoon_dain_talk": {
        "character": "assets/images/characters/dain_sad.png",
        "sunset": true,
        "next": "day3_afternoon_dain_talk_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"점심때... 나도 같이 먹고 싶었는데. 다음엔 나도 끼워주면 안 돼?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Why didn't you include me at lunch?! I wanted to eat together too!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Why didn't you include me at lunch?! I wanted to eat together too!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Why didn't you include me at lunch?! I wanted to eat together too!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Pourquoi tu ne m'as pas incluse au déjeuner ?! Moi aussi je voulais manger ensemble !\""
            }
        }
    },
    "day3_afternoon_dain_talk_2": {
        "character": "assets/images/characters/dain_sad.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_dain_sorry"
            },
            {
                "next": "day3_afternoon_dain_promise"
            },
            {
                "next": "day3_afternoon_dain_tease"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 볼을 부풀리며 항의한다.*",
                "choices": [
                    "\"미안, 다음엔 같이 먹자\"",
                    "\"내일 연습 보러 갈게\"",
                    "\"귀엽네, 화난 거야?\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Dain pouts and complains.*",
                "choices": [
                    "\"Sorry, let's eat together next time\"",
                    "\"I'll come to your practice tomorrow\"",
                    "\"Cute, are you angry?\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Dain pouts and complains.*",
                "choices": [
                    "\"Sorry, let's eat together next time\"",
                    "\"I'll come to your practice tomorrow\"",
                    "\"Cute, are you angry?\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*Dain pouts and complains.*",
                "choices": [
                    "\"Sorry, let's eat together next time\"",
                    "\"I'll come to your practice tomorrow\"",
                    "\"Cute, are you angry?\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain boude et se plaint.*",
                "choices": [
                    "\"Désolé, on mangera ensemble la prochaine fois\"",
                    "\"Je viendrai à ton entraînement demain\"",
                    "\"Mignonne, tu es fâchée ?\""
                ]
            }
        }
    },
    "day3_afternoon_dain_sorry": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day3_afternoon_transition",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"...알았어. 그 약속, 꼭 지켜야 해.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hmph, you better! It's a promise!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Hmph, you better! It's a promise!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Hmph, you better! It's a promise!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hmph, t'as intérêt ! C'est une promesse !\""
            }
        }
    },
    "day3_afternoon_dain_promise": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 8
            }
        },
        "next": "day3_afternoon_transition",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"진짜?! 그럼 용서해줄게! 내 스파이크 기대해!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Really?! Then I forgive you! Look forward to my spike!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Really?! Then I forgive you! Look forward to my spike!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Really?! Then I forgive you! Look forward to my spike!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Vraiment ?! Alors je te pardonne ! Prépare-toi à voir mon smash !\""
            }
        }
    },
    "day3_afternoon_dain_tease": {
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day3_afternoon_transition",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"...뭐야. 귀엽긴 뭐가 귀여워.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"W-what! Cute my foot! Dummy!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"W-what! Cute my foot! Dummy!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"W-what! Cute my foot! Dummy!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Q-quoi ! Mignonne mon œil ! Idiot !\""
            }
        }
    },
    "day3_afternoon_normal": {
        "sunset": true,
        "next": "day3_afternoon_transition",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*평화로운 방과후다. 집에 갈 준비를 하자.*"
            },
            "en": {
                "name": "Me",
                "text": "*A peaceful after school. Let me get ready to go home.*"
            },
            "es": {
                "name": "Yo",
                "text": "*A peaceful after school. Let me get ready to go home.*"
            },
            "ja": {
                "name": "僕",
                "text": "*A peaceful after school. Let me get ready to go home.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Un après-midi paisible après les cours. Allez, je me prépare à rentrer.*"
            }
        }
    },
    "day3_afternoon_transition": {
        "character": null,
        "background": "assets/images/background/school.png",
        "sunset": true,
        "next": "day3_afternoon_gate",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교문을 나서려는데...*"
            },
            "en": {
                "name": "Me",
                "text": "*As I'm about to leave through the school gate...*"
            },
            "es": {
                "name": "Yo",
                "text": "*As I'm about to leave through the school gate...*"
            },
            "ja": {
                "name": "僕",
                "text": "*As I'm about to leave through the school gate...*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Alors que je m'apprête à passer le portail de l'école...*"
            }
        }
    },
    "day3_afternoon_gate": {
        "background": "assets/images/background/school.png",
        "sunset": true,
        "branches": [
            {
                "next": "day3_afternoon_multiple_wait",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_afternoon_single_wait",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_afternoon_single_wait",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_afternoon_single_wait",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_afternoon_teacher_wait",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_afternoon_nurse_wait",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_afternoon_nobody_waiting"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*누군가 기다리고 있는 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Someone seems to be waiting.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Someone seems to be waiting.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Someone seems to be waiting.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Quelqu'un semble attendre.*"
            }
        }
    },
    "day3_afternoon_multiple_wait": {
        "sunset": true,
        "branches": [
            {
                "next": "day3_afternoon_multiple_scene",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_afternoon_multiple_no_seoyeon"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어... 왜 다들 교문 앞에...?*"
            },
            "en": {
                "name": "Me",
                "text": "*Uh... why is everyone at the gate...?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Uh... why is everyone at the gate...?*"
            },
            "ja": {
                "name": "僕",
                "text": "*Uh... why is everyone at the gate...?*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Euh... pourquoi tout le monde est au portail...?*"
            }
        }
    },
    "day3_afternoon_multiple_no_seoyeon": {
        "sunset": true,
        "next": "day3_afternoon_choose_walk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교문 앞에 여러 명이 서 있다. 다들 나를 기다리는 건가...?*"
            },
            "en": {
                "name": "Me",
                "text": "*Several people are standing at the school gate. Are they all waiting for me...?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Several people are standing at the school gate. Are they all waiting for me...?*"
            },
            "ja": {
                "name": "僕",
                "text": "*Several people are standing at the school gate. Are they all waiting for me...?*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Plusieurs personnes se tiennent devant le portail de l'école. Elles m'attendent toutes...?*"
            }
        }
    },
    "day3_afternoon_multiple_scene": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "day3_afternoon_three_way",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_afternoon_two_way_dain",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_afternoon_seoyeon_walk"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"어, {name}! 같이 가자... 어?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Hey, {name}! Let's walk together... huh?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Hey, {name}! Let's walk together... huh?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"Hey, {name}! Let's walk together... huh?\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Hé, {name} ! On rentre ensemble... hein ?\""
            }
        }
    },
    "day3_afternoon_three_way": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day3_afternoon_three_way_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...또 만났네.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...We meet again.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...We meet again.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...We meet again.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...On se retrouve encore.\""
            }
        }
    },
    "day3_afternoon_three_way_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day3_afternoon_choose_walk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와 유나가 서로를 노려보고 있다. 분위기가 살벌하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon and Yuna are glaring at each other. The atmosphere is tense.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon and Yuna are glaring at each other. The atmosphere is tense.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Seoyeon and Yuna are glaring at each other. The atmosphere is tense.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon et Yuna se fusillent du regard. L'atmosphère est tendue.*"
            }
        }
    },
    "day3_afternoon_two_way_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day3_afternoon_choose_walk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오? 서연이도 여기 있네? 나도 {name}이랑 같이 가려고!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh? Seoyeon's here too? I was gonna walk home with {name}!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Oh? Seoyeon's here too? I was gonna walk home with {name}!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Oh? Seoyeon's here too? I was gonna walk home with {name}!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Oh ? Seoyeon est là aussi ? Moi je voulais rentrer avec {name} !\""
            }
        }
    },
    "day3_afternoon_choose_walk": {
        "character": null,
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_seoyeon_walk"
            },
            {
                "next": "day3_afternoon_yuna_walk",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_afternoon_dain_walk",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_afternoon_reject_all",
                "stats": {
                    "Seoyeon": {
                        "affinity": -5
                    },
                    "Yuna": {
                        "affinity": -5
                    },
                    "Dain": {
                        "affinity": -5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*누구와 함께 갈까...?*",
                "choices": [
                    "서연이와 간다",
                    "유나와 간다",
                    "다인이와 간다",
                    "혼자 간다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Who should I walk with...?*",
                "choices": [
                    "Go with Seoyeon",
                    "Go with Yuna",
                    "Go with Dain",
                    "Go alone"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Who should I walk with...?*",
                "choices": [
                    "Ir con Seoyeon",
                    "Ir con Yuna",
                    "Ir con Dain",
                    "Ir solo"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*Who should I walk with...?*",
                "choices": [
                    "ソヨンと行く",
                    "ユナと行く",
                    "ダインと行く",
                    "一人で行く"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Avec qui devrais-je marcher...?*",
                "choices": [
                    "Aller avec Seoyeon",
                    "Aller avec Yuna",
                    "Aller avec Dain",
                    "Y aller seul"
                ]
            }
        }
    },
    "day3_afternoon_seoyeon_walk": {
        "character": null,
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "setFlag": "day3_walked_with_seoyeon",
        "next": "day3_afternoon_seoyeon_walk_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"서연아, 같이 가자.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Seoyeon, let's go together.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Seoyeon, let's go together.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"Seoyeon, let's go together.\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Seoyeon, on y va ensemble.\""
            }
        }
    },
    "day3_afternoon_seoyeon_walk_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "background": "assets/images/background/street.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_walk_others",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"응! 가자!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Sure! Let's go!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Sure! Let's go!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"Sure! Let's go!\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Oui ! Allons-y !\""
            }
        }
    },
    "day3_afternoon_seoyeon_walk_others": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "branches": [
            {
                "next": "day3_afternoon_seoyeon_walk_yuna_reaction",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_afternoon_seoyeon_walk_dain_reaction",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_afternoon_seoyeon_talk_walk"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뒤에서 시선이 느껴지지만... 서연이와 걷는 지금이 좋다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I feel eyes on my back... but right now, walking with Seoyeon feels nice.*"
            },
            "es": {
                "name": "Yo",
                "text": "*I feel eyes on my back... but right now, walking with Seoyeon feels nice.*"
            },
            "ja": {
                "name": "僕",
                "text": "*I feel eyes on my back... but right now, walking with Seoyeon feels nice.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je sens des regards dans mon dos... mais en ce moment, marcher avec Seoyeon, c'est agréable.*"
            }
        }
    },
    "day3_afternoon_seoyeon_walk_yuna_reaction": {
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": -8
            }
        },
        "setFlag": "day3_yuna_witnessed_seoyeon",
        "next": "day3_afternoon_seoyeon_talk_walk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 멀찍이서 우리를 바라보고 있다. 그 눈빛이... 무섭다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna is watching us from a distance. That look... is scary.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna is watching us from a distance. That look... is scary.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Yuna is watching us from a distance. That look... is scary.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna nous observe de loin. Ce regard... fait peur.*"
            }
        }
    },
    "day3_afternoon_seoyeon_walk_dain_reaction": {
        "character": "assets/images/characters/dain_sad.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": -5
            }
        },
        "next": "day3_afternoon_seoyeon_talk_walk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"...나 먼저 갈게.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hmph! I'm going first!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Hmph! I'm going first!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Hmph! I'm going first!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hmph ! Je pars devant !\""
            }
        }
    },
    "day3_afternoon_seoyeon_talk_walk": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_sunset",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…있잖아, {name}. 저기 강변길로 돌아가자. 오늘 석양 예쁜데.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Hey, {name}. Let's take the riverside path back. The sunset is beautiful today.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Hey, {name}. Let's take the riverside path back. The sunset is beautiful today.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"...Hey, {name}. Let's take the riverside path back. The sunset is beautiful today.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Dis, {name}. On prend le chemin le long de la rivière pour rentrer ? Le coucher de soleil est magnifique aujourd'hui.\""
            }
        }
    },
    "day3_afternoon_seoyeon_sunset": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "background": "assets/images/background/street.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_sunset_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*석양이 강물에 반사되어 반짝인다. 서연이의 얼굴이 주황빛으로 물들어 눈부시다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sunset reflects off the river, sparkling. Seoyeon's face glows with an orange tint — she looks radiant.*"
            },
            "es": {
                "name": "Yo",
                "text": "*The sunset reflects off the river, sparkling. Seoyeon's face glows with an orange tint — she looks radiant.*"
            },
            "ja": {
                "name": "僕",
                "text": "*The sunset reflects off the river, sparkling. Seoyeon's face glows with an orange tint — she looks radiant.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le coucher de soleil se reflète sur la rivière, scintillant. Le visage de Seoyeon brille d'une teinte orangée — elle est radieuse.*"
            }
        }
    },
    "day3_afternoon_seoyeon_sunset_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_sunset_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*갑자기 발을 멈추고 내 앞에 서며* \"…{name}아. 나 한 가지 물어봐도 돼?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She suddenly stops and stands in front of me* \"...{name}. Can I ask you something?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*She suddenly stops and stands in front of me* \"...{name}. Can I ask you something?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*She suddenly stops and stands in front of me* \"...{name}. Can I ask you something?\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle s'arrête soudain et se place devant moi* \"...{name}. Je peux te demander quelque chose ?\""
            }
        }
    },
    "day3_afternoon_seoyeon_sunset_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_seoyeon_pinky",
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_afternoon_seoyeon_hand",
                "stats": {
                    "Seoyeon": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day3_afternoon_seoyeon_try",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*석양을 배경으로 서연이의 눈이 빛난다* \"내일… 나만 만나줄 거지?\"",
                "choices": [
                    "\"당연하지\"",
                    "*서연이의 손을 잡는다*",
                    "\"…노력할게\""
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Against the sunset backdrop, Seoyeon's eyes shine* \"Tomorrow... you'll only meet me, right?\"",
                "choices": [
                    "\"Of course\"",
                    "*Take Seoyeon's hand*",
                    "\"...I'll try\""
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Against the sunset backdrop, Seoyeon's eyes shine* \"Tomorrow... you'll only meet me, right?\"",
                "choices": [
                    "\"Of course\"",
                    "*Take Seoyeon's hand*",
                    "\"...I'll try\""
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "*Against the sunset backdrop, Seoyeon's eyes shine* \"Tomorrow... you'll only meet me, right?\"",
                "choices": [
                    "\"Of course\"",
                    "*Take Seoyeon's hand*",
                    "\"...I'll try\""
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Sur fond de coucher de soleil, les yeux de Seoyeon brillent* \"Demain... tu ne verras que moi, hein ?\"",
                "choices": [
                    "\"Bien sûr\"",
                    "*Prendre la main de Seoyeon*",
                    "\"...Je vais essayer\""
                ]
            }
        }
    },
    "day3_afternoon_seoyeon_pinky": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_freetalk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 새끼손가락을 내밀며* \"그럼 새끼손가락 걸자. 약속 어기면… 바늘 만 개 삼키는 거다?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon holds out her pinky finger* \"Then let's pinky promise. If you break it... you swallow ten thousand needles?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon holds out her pinky finger* \"Then let's pinky promise. If you break it... you swallow ten thousand needles?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*Seoyeon holds out her pinky finger* \"Then let's pinky promise. If you break it... you swallow ten thousand needles?\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon tend son petit doigt* \"Alors faisons une promesse de petit doigt. Si tu la brises... tu avales dix mille aiguilles ?\""
            }
        }
    },
    "day3_afternoon_seoyeon_hand": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_freetalk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이의 손이 떨리다가 내 손을 꼭 잡는다* \"…바보. 이런 데서 손 잡으면 어떡해.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon's hand trembles before she grips mine tight* \"...Dummy. What if someone sees us holding hands here.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon's hand trembles before she grips mine tight* \"...Dummy. What if someone sees us holding hands here.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*Seoyeon's hand trembles before she grips mine tight* \"...Dummy. What if someone sees us holding hands here.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*La main de Seoyeon tremble avant de serrer la mienne* \"...Idiot. Et si quelqu'un nous voyait se tenir la main ici.\""
            }
        }
    },
    "day3_afternoon_seoyeon_try": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_freetalk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*살짝 실망한 표정을 짓다가 억지로 웃는다* \"…그래. 노력하는 거다?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Looking slightly disappointed, she forces a smile* \"...Okay. You'll try, right?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Looking slightly disappointed, she forces a smile* \"...Okay. You'll try, right?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*Looking slightly disappointed, she forces a smile* \"...Okay. You'll try, right?\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*L'air légèrement déçue, elle force un sourire* \"...D'accord. Tu vas essayer, hein ?\""
            }
        }
    },
    "day3_afternoon_seoyeon_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "maxTurns": 4,
        "next": "day3_afternoon_seoyeon_talk_walk_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*석양 지는 강변길을 서연이와 나란히 걷는다. 주황빛이 점점 더 깊어진다.*",
                "context": "서연이와 석양 강변길을 걷는 중. 서연이가 '내일 나만 만나줘'라고 하며 새끼손가락/손잡기 스킨십 후. 달콤하고 로맨틱한 분위기."
            },
            "en": {
                "name": "Me",
                "text": "*Walking alongside Seoyeon down the riverside path as the sunset deepens.*",
                "context": "Walking with Seoyeon along the sunset riverside. She asked 'Will you only meet me tomorrow?' and they had a pinky promise/hand-holding moment. Sweet and romantic atmosphere."
            },
            "es": {
                "name": "Yo",
                "text": "*Walking alongside Seoyeon down the riverside path as the sunset deepens.*",
                "context": "Caminando con Seoyeon junto al río al atardecer. Preguntó '¿Solo me verás a mí mañana?' y tuvieron un momento de promesa de meñique. Ambiente dulce y romántico."
            },
            "ja": {
                "name": "僕",
                "text": "*Walking alongside Seoyeon down the riverside path as the sunset deepens.*",
                "context": "ソヨンと夕焼けの川沿いを歩いている。ソヨンが「明日は私だけに会ってくれる？」と言い、指切り・手つなぎのスキンシップがあった。甘くてロマンチックな雰囲気。"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je marche aux côtés de Seoyeon le long de la rivière alors que le coucher de soleil s'intensifie.*",
                "context": "En train de marcher avec Seoyeon le long de la rivière au coucher du soleil. Elle a demandé « Tu ne verras que moi demain ? » et ils ont eu un moment de promesse de petit doigt/main dans la main. Ambiance douce et romantique."
            }
        }
    },
    "day3_afternoon_seoyeon_talk_walk_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "branches": [
            {
                "next": "day3_afternoon_seoyeon_guilt",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_afternoon_seoyeon_happy"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"우리 둘만의 시간이잖아. 그치?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"It's our time together, just the two of us. Right?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"It's our time together, just the two of us. Right?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"It's our time together, just the two of us. Right?\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"C'est notre moment à nous, rien que tous les deux. Pas vrai ?\""
            }
        }
    },
    "day3_afternoon_seoyeon_guilt": {
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_seoyeon_happy",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_afternoon_seoyeon_confess_walk",
                "stats": {
                    "Seoyeon": {
                        "affinity": -10
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*... '둘만의 시간'이라. 다른 약속들이 머릿속을 스친다.*",
                "choices": [
                    "\"응, 기대돼\"",
                    "\"사실은...\" (솔직하게 말한다)"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*...'Just the two of us'. My other plans flash through my mind.*",
                "choices": [
                    "\"Yeah, I'm excited too\"",
                    "\"Actually...\" (Be honest)"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*...'Just the two of us'. My other plans flash through my mind.*",
                "choices": [
                    "\"Yeah, I'm excited too\"",
                    "\"Actually...\" (Be honest)"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*...'Just the two of us'. My other plans flash through my mind.*",
                "choices": [
                    "\"Yeah, I'm excited too\"",
                    "\"Actually...\" (Be honest)"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*...'Rien que nous deux'. Mes autres engagements me traversent l'esprit.*",
                "choices": [
                    "\"Oui, j'ai hâte aussi\"",
                    "\"En fait...\" (Être honnête)"
                ]
            }
        }
    },
    "day3_afternoon_seoyeon_happy": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "fade": true,
        "next": "day3_night_start",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"후훗, 나도! 그럼 내일 봐! 잘 자!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Hehe, me too! See you tomorrow then! Sleep well!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Hehe, me too! See you tomorrow then! Sleep well!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"Hehe, me too! See you tomorrow then! Sleep well!\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Héhé, moi aussi ! À demain alors ! Dors bien !\""
            }
        }
    },
    "day3_afternoon_seoyeon_confess_walk": {
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_angry",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...뭐? 다른 약속도 있어?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...What? You have other plans too?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...What? You have other plans too?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"...What? You have other plans too?\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Quoi ? Tu as d'autres plans aussi ?\""
            }
        }
    },
    "day3_afternoon_seoyeon_angry": {
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "setFlag": "day3_seoyeon_knows_others",
        "fade": true,
        "next": "day3_night_start",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...알았어. 주말에 보면 알겠지, 네가 누굴 진짜 좋아하는지.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Fine. We'll see this weekend who you really like.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Fine. We'll see this weekend who you really like.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"...Fine. We'll see this weekend who you really like.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Très bien. On verra ce week-end qui tu aimes vraiment.\""
            }
        }
    },
    "day3_afternoon_yuna_walk": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "setFlag": "day3_walked_with_yuna",
        "next": "day3_afternoon_yuna_walk_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"유나야, 같이 가자.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Yuna, let's walk together.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Yuna, let's walk together.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"Yuna, let's walk together.\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Yuna, on rentre ensemble.\""
            }
        }
    },
    "day3_afternoon_yuna_walk_2": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_walk_others",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...응.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Okay.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Okay.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...Okay.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...D'accord.\""
            }
        }
    },
    "day3_afternoon_yuna_walk_others": {
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": -8
            }
        },
        "setFlag": "day3_seoyeon_witnessed_yuna",
        "next": "day3_afternoon_yuna_talk_walk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...알았어. 조심히 가.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Okay. Be careful going home.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Okay. Be careful going home.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"...Okay. Be careful going home.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...D'accord. Fais attention en rentrant.\""
            }
        }
    },
    "day3_afternoon_yuna_talk_walk": {
        "character": null,
        "background": "assets/images/background/street.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_cat",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나와 함께 조용한 길을 걷는다. 그녀는 말이 없지만, 분위기가 편안하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Walking with Yuna down a quiet path. She doesn't say much, but the atmosphere is comfortable.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Walking with Yuna down a quiet path. She doesn't say much, but the atmosphere is comfortable.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Walking with Yuna down a quiet path. She doesn't say much, but the atmosphere is comfortable.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je marche avec Yuna sur un chemin tranquille. Elle ne dit pas grand-chose, mais l'atmosphère est agréable.*"
            }
        }
    },
    "day3_afternoon_yuna_cat": {
        "background": "assets/images/background/street.png",
        "character": null,
        "sunset": true,
        "next": "day3_afternoon_yuna_cat_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*길가에 작은 고양이 한 마리가 웅크리고 있다. 유나가 갑자기 멈춘다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A small cat is curled up by the roadside. Yuna suddenly stops.*"
            },
            "es": {
                "name": "Yo",
                "text": "*A small cat is curled up by the roadside. Yuna suddenly stops.*"
            },
            "ja": {
                "name": "僕",
                "text": "*A small cat is curled up by the roadside. Yuna suddenly stops.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Un petit chat est blotti au bord de la route. Yuna s'arrête soudain.*"
            }
        }
    },
    "day3_afternoon_yuna_cat_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_cat_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*조용히 무릎을 꿇고 고양이를 쓰다듬는다* \"…같이 있어줘서 다행이다.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Quietly kneeling down to pet the cat* \"...I'm glad you're with me.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Quietly kneeling down to pet the cat* \"...I'm glad you're with me.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*Quietly kneeling down to pet the cat* \"...I'm glad you're with me.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "*S'agenouillant doucement pour caresser le chat* \"...Je suis contente que tu sois avec moi.\""
            }
        }
    },
    "day3_afternoon_yuna_cat_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_yuna_cat_pat",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_afternoon_yuna_head_pat",
                "stats": {
                    "Yuna": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day3_afternoon_yuna_cat_watch",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 고양이를 쓰다듬는 모습이… 너무 부드럽다.*",
                "choices": [
                    "*나도 고양이를 쓰다듬는다*",
                    "*유나의 머리를 쓰다듬는다*",
                    "*조용히 지켜본다*"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The way Yuna pets the cat... she looks so gentle.*",
                "choices": [
                    "*Pet the cat too*",
                    "*Pat Yuna's head*",
                    "*Watch quietly*"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*The way Yuna pets the cat... she looks so gentle.*",
                "choices": [
                    "*Pet the cat too*",
                    "*Pat Yuna's head*",
                    "*Watch quietly*"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*The way Yuna pets the cat... she looks so gentle.*",
                "choices": [
                    "*Pet the cat too*",
                    "*Pat Yuna's head*",
                    "*Watch quietly*"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*La façon dont Yuna caresse le chat... elle a l'air si douce.*",
                "choices": [
                    "*Caresser le chat aussi*",
                    "*Caresser la tête de Yuna*",
                    "*Observer en silence*"
                ]
            }
        }
    },
    "day3_afternoon_yuna_cat_pat": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_freetalk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*두 사람의 손이 고양이 위에서 맞닿는다* \"…따뜻하네.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Our hands meet on top of the cat* \"...Warm.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Our hands meet on top of the cat* \"...Warm.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*Our hands meet on top of the cat* \"...Warm.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "*Nos mains se rencontrent sur le chat* \"...C'est chaud.\""
            }
        }
    },
    "day3_afternoon_yuna_head_pat": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_head_pat_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*머리를 쓰다듬는 내 손에 멈춰선다* \"…나를 쓰다듬는 거야?\""
            },
            "en": {
                "name": "Yuna",
                "text": "*She freezes when I pat her head* \"...You're petting me?\""
            },
            "es": {
                "name": "Yuna",
                "text": "*She freezes when I pat her head* \"...You're petting me?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*She freezes when I pat her head* \"...You're petting me?\""
            },
            "fr": {
                "name": "Yuna",
                "text": "*Elle se fige quand je lui caresse la tête* \"...Tu me caresses ?\""
            }
        }
    },
    "day3_afternoon_yuna_head_pat_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_freetalk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*눈을 감으며* \"…멈추지 마. 조금만 더.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Closing her eyes* \"...Don't stop. Just a little more.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Closing her eyes* \"...Don't stop. Just a little more.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*Closing her eyes* \"...Don't stop. Just a little more.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "*Fermant les yeux* \"...N'arrête pas. Encore un peu.\""
            }
        }
    },
    "day3_afternoon_yuna_cat_watch": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_freetalk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*고양이를 안아들며* \"…이 아이, {name}을 닮았어. 따뜻하고… 모자라.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Holding the cat up* \"...This one looks like you, {name}. Warm and... clueless.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Holding the cat up* \"...This one looks like you, {name}. Warm and... clueless.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*Holding the cat up* \"...This one looks like you, {name}. Warm and... clueless.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "*Soulevant le chat* \"...Celui-là te ressemble, {name}. Chaleureux et... naïf.\""
            }
        }
    },
    "day3_afternoon_yuna_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "maxTurns": 4,
        "next": "day3_afternoon_yuna_talk_walk_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나와 나란히 길을 걷는다. 평소보다 유나의 표정이 부드럽다.*",
                "context": "유나와 귀가길에 고양이를 함께 쓰다듬은 후. 유나가 평소보다 부드러운 표정. 조용하고 편안한 분위기."
            },
            "en": {
                "name": "Me",
                "text": "*Walking side by side with Yuna. Her expression is softer than usual.*",
                "context": "Walking home with Yuna after petting a cat together. Yuna's expression is softer than usual. Quiet and comfortable atmosphere."
            },
            "es": {
                "name": "Yo",
                "text": "*Walking side by side with Yuna. Her expression is softer than usual.*",
                "context": "Caminando a casa con Yuna después de acariciar un gato juntos. La expresión de Yuna es más suave de lo usual. Ambiente tranquilo y cómodo."
            },
            "ja": {
                "name": "僕",
                "text": "*Walking side by side with Yuna. Her expression is softer than usual.*",
                "context": "ユナと一緒に猫を撫でた後の帰り道。ユナの表情がいつもより柔らかい。静かで心地よい雰囲気。"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je marche côte à côte avec Yuna. Son expression est plus douce que d'habitude.*",
                "context": "En rentrant avec Yuna après avoir caressé un chat ensemble. L'expression de Yuna est plus douce que d'habitude. Ambiance calme et agréable."
            }
        }
    },
    "day3_afternoon_yuna_talk_walk_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_talk_walk_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...{name}. 내일 밤, 잊지 마.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...{name}. Don't forget tomorrow night.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...{name}. Don't forget tomorrow night.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...{name}. Don't forget tomorrow night.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...{name}. N'oublie pas demain soir.\""
            }
        }
    },
    "day3_afternoon_yuna_talk_walk_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_warning_walk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"학교 후문. 8시. 늦으면... 안 돼.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"School back gate. 8 PM. Don't... be late.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"School back gate. 8 PM. Don't... be late.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"School back gate. 8 PM. Don't... be late.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"Portail arrière de l'école. 20h. Ne sois pas... en retard.\""
            }
        }
    },
    "day3_afternoon_yuna_warning_walk": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_yuna_promise_keep",
                "stats": {
                    "Yuna": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_afternoon_yuna_late_question"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 목소리에 묘한 압박감이 느껴진다.*",
                "choices": [
                    "\"절대 안 늦을게\"",
                    "\"혹시 늦으면?\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*There's a strange pressure in Yuna's voice.*",
                "choices": [
                    "\"I definitely won't be late\"",
                    "\"What if I'm late?\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*There's a strange pressure in Yuna's voice.*",
                "choices": [
                    "\"I definitely won't be late\"",
                    "\"What if I'm late?\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*There's a strange pressure in Yuna's voice.*",
                "choices": [
                    "\"I definitely won't be late\"",
                    "\"What if I'm late?\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Il y a une étrange pression dans la voix de Yuna.*",
                "choices": [
                    "\"Je ne serai absolument pas en retard\"",
                    "\"Et si je suis en retard ?\""
                ]
            }
        }
    },
    "day3_afternoon_yuna_promise_keep": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "fade": true,
        "next": "day3_night_start",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...좋아. 믿을게.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Good. I'll trust you.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Good. I'll trust you.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...Good. I'll trust you.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Bien. Je te fais confiance.\""
            }
        }
    },
    "day3_afternoon_yuna_late_question": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_late_warning",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...그럼 안 돼. 절대로.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...That can't happen. Absolutely not.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...That can't happen. Absolutely not.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...That can't happen. Absolutely not.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Ça ne doit pas arriver. Absolument pas.\""
            }
        }
    },
    "day3_afternoon_yuna_late_warning": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "fade": true,
        "next": "day3_night_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 눈동자가 순간 이상하게 빛난 것 같았다... 착각이겠지?*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna's eyes seemed to flash oddly for a moment... Must be my imagination?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna's eyes seemed to flash oddly for a moment... Must be my imagination?*"
            },
            "ja": {
                "name": "僕",
                "text": "*Yuna's eyes seemed to flash oddly for a moment... Must be my imagination?*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Les yeux de Yuna ont semblé briller étrangement un instant... C'est sûrement mon imagination ?*"
            }
        }
    },
    "day3_afternoon_dain_walk": {
        "character": null,
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "setFlag": "day3_walked_with_dain",
        "next": "day3_afternoon_dain_walk_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"다인아, 같이 가자.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Dain, let's walk together.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Dain, let's walk together.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"Dain, let's walk together.\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Dain, on rentre ensemble.\""
            }
        }
    },
    "day3_afternoon_dain_walk_2": {
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": -5
            },
            "Yuna": {
                "affinity": -5
            }
        },
        "background": "assets/images/background/street.png",
        "sunset": true,
        "next": "day3_afternoon_dain_talk_walk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야호! 가자 가자!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Yay! Let's go!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Yay! Let's go!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Yay! Let's go!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Youpi ! Allons-y !\""
            }
        }
    },
    "day3_afternoon_dain_talk_walk": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day3_afternoon_dain_store",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야, {name}! 저기 편의점 보이지? 목마르다!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey, {name}! See that convenience store? I'm thirsty!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Hey, {name}! See that convenience store? I'm thirsty!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Hey, {name}! See that convenience store? I'm thirsty!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hé, {name} ! Tu vois cette supérette ? J'ai soif !\""
            }
        }
    },
    "day3_afternoon_dain_store": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day3_afternoon_dain_store_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 편의점으로 달려간다. 따라가보니 아이스크림 코너 앞에 멈춰선다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain dashes to the convenience store. I follow and find her stopped at the ice cream section.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dain dashes to the convenience store. I follow and find her stopped at the ice cream section.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Dain dashes to the convenience store. I follow and find her stopped at the ice cream section.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain fonce vers la supérette. Je la suis et la retrouve arrêtée au rayon des glaces.*"
            }
        }
    },
    "day3_afternoon_dain_store_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_dain_ice_one",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_afternoon_dain_ice_share",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"니가 골라줘! 나 골라달라면 다 사고 싶어져서…\"",
                "choices": [
                    "*하나만 골라준다*",
                    "*두 개 사서 하나 나눠먹는다*"
                ]
            },
            "en": {
                "name": "Dain",
                "text": "\"You pick for me! If I pick, I'll want to buy everything...\"",
                "choices": [
                    "*Pick one for her*",
                    "*Buy two and share one*"
                ]
            },
            "es": {
                "name": "Dain",
                "text": "\"You pick for me! If I pick, I'll want to buy everything...\"",
                "choices": [
                    "*Pick one for her*",
                    "*Buy two and share one*"
                ]
            },
            "ja": {
                "name": "ダイン",
                "text": "\"You pick for me! If I pick, I'll want to buy everything...\"",
                "choices": [
                    "*Pick one for her*",
                    "*Buy two and share one*"
                ]
            },
            "fr": {
                "name": "Dain",
                "text": "\"Choisis pour moi ! Si je choisis, je vais vouloir tout acheter...\"",
                "choices": [
                    "*En choisir une pour elle*",
                    "*En acheter deux et en partager une*"
                ]
            }
        }
    },
    "day3_afternoon_dain_ice_one": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day3_afternoon_dain_park",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*아이스크림을 받아들며* \"…고마워. 역시 {name}이 최고!\""
            },
            "en": {
                "name": "Dain",
                "text": "*Taking the ice cream* \"...Thanks. {name} is the best!\""
            },
            "es": {
                "name": "Dain",
                "text": "*Taking the ice cream* \"...Thanks. {name} is the best!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*Taking the ice cream* \"...Thanks. {name} is the best!\""
            },
            "fr": {
                "name": "Dain",
                "text": "*Prenant la glace* \"...Merci. {name} est le meilleur !\""
            }
        }
    },
    "day3_afternoon_dain_ice_share": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "next": "day3_afternoon_dain_park",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*나눠먹기를 받아들며 얼굴이 빨개진다* \"…이, 이게 나눠먹기?! 간접키스잖아! 아, 아니다! 그냥 나눠먹는 거야!\""
            },
            "en": {
                "name": "Dain",
                "text": "*Her face turns red at the idea of sharing* \"Th-that's sharing?! That's an indirect kiss! N-no! It's just sharing!\""
            },
            "es": {
                "name": "Dain",
                "text": "*Her face turns red at the idea of sharing* \"Th-that's sharing?! That's an indirect kiss! N-no! It's just sharing!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*Her face turns red at the idea of sharing* \"Th-that's sharing?! That's an indirect kiss! N-no! It's just sharing!\""
            },
            "fr": {
                "name": "Dain",
                "text": "*Son visage rougit à l'idée de partager* \"C-c'est ça partager ?! C'est un baiser indirect ! N-non ! C'est juste partager !\""
            }
        }
    },
    "day3_afternoon_dain_park": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day3_afternoon_dain_park_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이와 근처 공원 벤치에 나란히 앉았다. 아이스크림을 먹으며 석양을 바라본다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain and I sit side by side on a park bench nearby. We eat ice cream while watching the sunset.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dain and I sit side by side on a park bench nearby. We eat ice cream while watching the sunset.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Dain and I sit side by side on a park bench nearby. We eat ice cream while watching the sunset.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain et moi sommes assis côte à côte sur un banc du parc. On mange des glaces en regardant le coucher de soleil.*"
            }
        }
    },
    "day3_afternoon_dain_park_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day3_afternoon_dain_park_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*갑자기 조용해지며* \"…{name}. 나, 사실 어제 잠 못 잤어.\""
            },
            "en": {
                "name": "Dain",
                "text": "*Suddenly getting quiet* \"...{name}. Actually, I couldn't sleep last night.\""
            },
            "es": {
                "name": "Dain",
                "text": "*Suddenly getting quiet* \"...{name}. Actually, I couldn't sleep last night.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*Suddenly getting quiet* \"...{name}. Actually, I couldn't sleep last night.\""
            },
            "fr": {
                "name": "Dain",
                "text": "*Devenant soudain silencieuse* \"...{name}. En fait, je n'ai pas pu dormir la nuit dernière.\""
            }
        }
    },
    "day3_afternoon_dain_park_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/dain_sad.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_dain_promise_firm",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_afternoon_dain_pat",
                "stats": {
                    "Dain": {
                        "affinity": 10
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…내일 연습 보러 와준다면서… 정말 올 거지? 바람 맞추는 거 아니지?\"",
                "choices": [
                    "\"절대 바람 맞추지 않아\"",
                    "*다인이의 머리를 쓰다듬는다*"
                ]
            },
            "en": {
                "name": "Dain",
                "text": "\"...You said you'd come to my practice tomorrow... You'll really come, right? You're not gonna stand me up?\"",
                "choices": [
                    "\"I would never stand you up\"",
                    "*Pat Dain's head*"
                ]
            },
            "es": {
                "name": "Dain",
                "text": "\"...You said you'd come to my practice tomorrow... You'll really come, right? You're not gonna stand me up?\"",
                "choices": [
                    "\"I would never stand you up\"",
                    "*Pat Dain's head*"
                ]
            },
            "ja": {
                "name": "ダイン",
                "text": "\"...You said you'd come to my practice tomorrow... You'll really come, right? You're not gonna stand me up?\"",
                "choices": [
                    "\"I would never stand you up\"",
                    "*Pat Dain's head*"
                ]
            },
            "fr": {
                "name": "Dain",
                "text": "\"...Tu as dit que tu viendrais à mon entraînement demain... Tu viendras vraiment, hein ? Tu ne vas pas me poser un lapin ?\"",
                "choices": [
                    "\"Je ne te poserais jamais un lapin\"",
                    "*Caresser la tête de Dain*"
                ]
            }
        }
    },
    "day3_afternoon_dain_promise_firm": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day3_afternoon_dain_freetalk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*눈이 반짝이며* \"…진짜? 약속!\""
            },
            "en": {
                "name": "Dain",
                "text": "*Her eyes light up* \"...Really? Promise!\""
            },
            "es": {
                "name": "Dain",
                "text": "*Her eyes light up* \"...Really? Promise!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*Her eyes light up* \"...Really? Promise!\""
            },
            "fr": {
                "name": "Dain",
                "text": "*Ses yeux s'illuminent* \"...Vraiment ? Promis !\""
            }
        }
    },
    "day3_afternoon_dain_pat": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "next": "day3_afternoon_dain_freetalk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*머리를 쓰다듬으면 다인이가 얼굴을 붉힌다* \"야, 나 애기 아니거든! …근데 멈추지 마.\""
            },
            "en": {
                "name": "Dain",
                "text": "*Patting her head makes Dain's face turn red* \"Hey, I'm not a kid! ...But don't stop.\""
            },
            "es": {
                "name": "Dain",
                "text": "*Patting her head makes Dain's face turn red* \"Hey, I'm not a kid! ...But don't stop.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*Patting her head makes Dain's face turn red* \"Hey, I'm not a kid! ...But don't stop.\""
            },
            "fr": {
                "name": "Dain",
                "text": "*Lui caresser la tête fait rougir Dain* \"Hé, je ne suis pas une gamine ! ...Mais n'arrête pas.\""
            }
        }
    },
    "day3_afternoon_dain_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "maxTurns": 4,
        "next": "day3_afternoon_dain_talk_walk_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*공원 벤치에서 다인이와 아이스크림을 먹으며 이야기를 나눈다.*",
                "context": "다인이와 공원 벤치에서 아이스크림 나눠먹기 후. 다인이가 '잘 못 잤다'라며 진지한 모습. 평소의 활발함 대신 수줍어하는 분위기."
            },
            "en": {
                "name": "Me",
                "text": "*Eating ice cream and chatting with Dain on a park bench.*",
                "context": "Sharing ice cream with Dain on a park bench. She said 'I couldn't sleep last night' showing a serious side. She's being shy instead of her usual energetic self."
            },
            "es": {
                "name": "Yo",
                "text": "*Eating ice cream and chatting with Dain on a park bench.*",
                "context": "Compartiendo helado con Dain en un banco del parque. Dijo 'No pude dormir anoche' mostrando un lado serio. Está siendo tímida en lugar de su yo enérgico habitual."
            },
            "ja": {
                "name": "僕",
                "text": "*Eating ice cream and chatting with Dain on a park bench.*",
                "context": "ダインと公園のベンチでアイスクリームを分け合った後。ダインが「昨日寝れなかった」と真剣な一面を見せた。いつもの活発さの代わりに恥ずかしがっている。"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je mange des glaces et discute avec Dain sur un banc du parc.*",
                "context": "En train de partager une glace avec Dain sur un banc du parc. Elle a dit « Je n'ai pas pu dormir la nuit dernière » montrant un côté sérieux. Elle est timide au lieu de son énergie habituelle."
            }
        }
    },
    "day3_afternoon_dain_talk_walk_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_dain_excited",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_afternoon_dain_cheer",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"나 {name}한테 멋진 모습 보여주고 싶거든!\"",
                "choices": [
                    "\"기대할게!\"",
                    "\"내가 응원해줄게\""
                ]
            },
            "en": {
                "name": "Dain",
                "text": "\"I want to show you my cool side!\"",
                "choices": [
                    "\"Looking forward to it!\"",
                    "\"I'll cheer for you\""
                ]
            },
            "es": {
                "name": "Dain",
                "text": "\"I want to show you my cool side!\"",
                "choices": [
                    "\"Looking forward to it!\"",
                    "\"I'll cheer for you\""
                ]
            },
            "ja": {
                "name": "ダイン",
                "text": "\"I want to show you my cool side!\"",
                "choices": [
                    "\"Looking forward to it!\"",
                    "\"I'll cheer for you\""
                ]
            },
            "fr": {
                "name": "Dain",
                "text": "\"Je veux te montrer mon côté cool !\"",
                "choices": [
                    "\"J'ai hâte de voir ça !\"",
                    "\"Je t'encouragerai\""
                ]
            }
        }
    },
    "day3_afternoon_dain_excited": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "fade": true,
        "next": "day3_night_start",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"좋아! 각오해!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Great! Be prepared!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Great! Be prepared!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Great! Be prepared!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Super ! Tiens-toi prêt !\""
            }
        }
    },
    "day3_afternoon_dain_cheer": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "fade": true,
        "next": "day3_night_start",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"후훗... 그 말 듣고 나니까 더 열심히 해야겠다!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hehe... Hearing that makes me want to work even harder!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Hehe... Hearing that makes me want to work even harder!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Hehe... Hearing that makes me want to work even harder!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hehe... Hearing that makes me want to work even harder!\""
            }
        }
    },
    "day3_afternoon_reject_all": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "setFlag": "day3_walked_alone",
        "next": "day3_afternoon_reject_reaction",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"미안, 오늘은 혼자 가고 싶어.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Sorry, I want to go alone today.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Sorry, I want to go alone today.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"Sorry, I want to go alone today.\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Sorry, I want to go alone today.\""
            }
        }
    },
    "day3_afternoon_reject_reaction": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "fade": true,
        "next": "day3_night_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*모두의 표정이 굳는다. 실망한 눈빛이 느껴진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Everyone's expressions harden. I can feel their disappointment.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Everyone's expressions harden. I can feel their disappointment.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Everyone's expressions harden. I can feel their disappointment.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Les expressions de tout le monde se figent. Je sens leur déception.*"
            }
        }
    },
    "day3_afternoon_nobody_waiting": {
        "background": "assets/images/background/school.png",
        "sunset": true,
        "next": "day3_afternoon_alone_walk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*...아무도 없다. 착각이었나. 괜히 기대한 내가 바보지.*"
            },
            "en": {
                "name": "Me",
                "text": "*...No one's here. Must've been my imagination. Silly me for getting my hopes up.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...No one's here. Must've been my imagination. Silly me for getting my hopes up.*"
            },
            "ja": {
                "name": "僕",
                "text": "*...No one's here. Must've been my imagination. Silly me for getting my hopes up.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Personne n'est là. C'était sûrement mon imagination. Quel idiot de m'être fait des idées.*"
            }
        }
    },
    "day3_afternoon_alone_walk": {
        "character": null,
        "background": "assets/images/background/street.png",
        "sunset": true,
        "fade": true,
        "next": "day3_night_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*혼자 집으로 향한다. 내일은 어떤 하루가 될까...*"
            },
            "en": {
                "name": "Me",
                "text": "*I head home alone. I wonder what tomorrow will bring...*"
            },
            "es": {
                "name": "Yo",
                "text": "*I head home alone. I wonder what tomorrow will bring...*"
            },
            "ja": {
                "name": "僕",
                "text": "*I head home alone. I wonder what tomorrow will bring...*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je rentre seul à la maison. Je me demande ce que demain nous réserve...*"
            }
        }
    },
    "day3_afternoon_single_wait": {
        "sunset": true,
        "branches": [
            {
                "next": "day3_afternoon_seoyeon_solo",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_afternoon_yuna_solo",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_afternoon_dain_solo",
                "condition": "day3_dain_date_confirmed"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교문 앞에 누군가 서 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Someone is standing in front of the gate.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Someone is standing in front of the gate.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Someone is standing in front of the gate.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Quelqu'un se tient devant le portail.*"
            }
        }
    },
    "day3_afternoon_seoyeon_solo": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day3_afternoon_seoyeon_walk_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"{name}! 같이 가자!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"{name}! Let's walk together!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"{name}! Let's walk together!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"{name}! Let's walk together!\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"{name}! Let's walk together!\""
            }
        }
    },
    "day3_afternoon_yuna_solo": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "day3_afternoon_yuna_talk_walk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...기다렸어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I was waiting.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...I was waiting.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...I was waiting.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...I was waiting.\""
            }
        }
    },
    "day3_afternoon_dain_solo": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "day3_afternoon_dain_talk_walk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야! 빨리 와! 같이 가자!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey! Hurry up! Let's walk together!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Hey! Hurry up! Let's walk together!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Hey! Hurry up! Let's walk together!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hey! Hurry up! Let's walk together!\""
            }
        }
    },
    "day3_afternoon_teacher_wait": {
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_teacher_ride",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_afternoon_alone_walk"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"{name}, 잠깐 시간 있니? 선생님이 데려다줄까?\"",
                "choices": [
                    "\"네, 감사합니다!\"",
                    "\"괜찮아요, 걸어갈게요\""
                ]
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"{name}, do you have a minute? Want me to give you a ride?\"",
                "choices": [
                    "\"Yes, thank you!\"",
                    "\"It's okay, I'll walk\""
                ]
            },
            "es": {
                "name": "Profesora",
                "text": "\"{name}, do you have a minute? Want me to give you a ride?\"",
                "choices": [
                    "\"Yes, thank you!\"",
                    "\"It's okay, I'll walk\""
                ]
            },
            "ja": {
                "name": "担任先生",
                "text": "\"{name}, do you have a minute? Want me to give you a ride?\"",
                "choices": [
                    "\"Yes, thank you!\"",
                    "\"It's okay, I'll walk\""
                ]
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"{name}, do you have a minute? Want me to give you a ride?\"",
                "choices": [
                    "\"Yes, thank you!\"",
                    "\"It's okay, I'll walk\""
                ]
            }
        }
    },
    "day3_afternoon_teacher_ride": {
        "character": "assets/images/characters/teacher_normal.png",
        "background": "assets/images/background/street.png",
        "sunset": true,
        "next": "day3_afternoon_teacher_ride_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 차에 탔다. 퇴근길 도로가 석양으로 물든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I got in the teacher's car. The road home is bathed in sunset.*"
            },
            "es": {
                "name": "Yo",
                "text": "*I got in the teacher's car. The road home is bathed in sunset.*"
            },
            "ja": {
                "name": "僕",
                "text": "*I got in the teacher's car. The road home is bathed in sunset.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je suis monté dans la voiture du professeur. La route du retour baigne dans le coucher de soleil.*"
            }
        }
    },
    "day3_afternoon_teacher_ride_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "next": "day3_afternoon_teacher_ride_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*운전하며 조용히* \"…{name}야. 우리 이렇게 둘이만 있으니까… 뭔가 이상한 기분이야.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*Driving quietly* \"...{name}. Being alone together like this... feels a bit strange.\""
            },
            "es": {
                "name": "Profesora",
                "text": "*Driving quietly* \"...{name}. Being alone together like this... feels a bit strange.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*Driving quietly* \"...{name}. Being alone together like this... feels a bit strange.\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Driving quietly* \"...{name}. Being alone together like this... feels a bit strange.\""
            }
        }
    },
    "day3_afternoon_teacher_ride_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_teacher_hold",
                "stats": {
                    "Teacher": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day3_afternoon_teacher_stop",
                "stats": {
                    "Teacher": {
                        "affinity": -3
                    }
                }
            },
            {
                "next": "day3_afternoon_teacher_lean",
                "stats": {
                    "Teacher": {
                        "affinity": 8
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*신호에 멈춘다. 선생님이 조용히 내 손등을 건드린다.*",
                "choices": [
                    "*선생님 손을 잡는다*",
                    "\"선생님, 이러면 안 돼요\"",
                    "*조용히 어깨에 머리를 기댄다*"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*We stop at a red light. The teacher quietly touches the back of my hand.*",
                "choices": [
                    "*Hold her hand*",
                    "\"Teacher, we shouldn't\"",
                    "*Quietly lean my head on her shoulder*"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*We stop at a red light. The teacher quietly touches the back of my hand.*",
                "choices": [
                    "*Hold her hand*",
                    "\"Teacher, we shouldn't\"",
                    "*Quietly lean my head on her shoulder*"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*We stop at a red light. The teacher quietly touches the back of my hand.*",
                "choices": [
                    "*Hold her hand*",
                    "\"Teacher, we shouldn't\"",
                    "*Quietly lean my head on her shoulder*"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*On s'arrête à un feu rouge. Le professeur effleure doucement le dos de ma main.*",
                "choices": [
                    "*Lui prendre la main*",
                    "\"Teacher, we shouldn't\"",
                    "*Poser doucement ma tête sur son épaule*"
                ]
            }
        }
    },
    "day3_afternoon_teacher_hold": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "next": "day3_afternoon_teacher_freetalk",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*선생님이 숨을 멈춘다* \"…신호 바뀌면 놓을 거야. 약속.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*The teacher holds her breath* \"...When the light changes, I'm letting go. Promise.\""
            },
            "es": {
                "name": "Profesora",
                "text": "*The teacher holds her breath* \"...When the light changes, I'm letting go. Promise.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*The teacher holds her breath* \"...When the light changes, I'm letting go. Promise.\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*The teacher holds her breath* \"...When the light changes, I'm letting go. Promise.\""
            }
        }
    },
    "day3_afternoon_teacher_stop": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day3_afternoon_teacher_freetalk",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*선생님이 쓸쓸하게 웃는다* \"…그래, 맞아. 선생님이 정신 차려야지.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*The teacher smiles wistfully* \"...You're right. Teacher needs to come to her senses.\""
            },
            "es": {
                "name": "Profesora",
                "text": "*The teacher smiles wistfully* \"...You're right. Teacher needs to come to her senses.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*The teacher smiles wistfully* \"...You're right. Teacher needs to come to her senses.\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*The teacher smiles wistfully* \"...You're right. Teacher needs to come to her senses.\""
            }
        }
    },
    "day3_afternoon_teacher_lean": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "next": "day3_afternoon_teacher_freetalk",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*놀라서 멈칫하더니… 조용히 내 머리를 쓰다듬는다* \"…아직 신호 안 바뀌었다.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*Startled at first... then quietly strokes my hair* \"...The light hasn't changed yet.\""
            },
            "es": {
                "name": "Profesora",
                "text": "*Startled at first... then quietly strokes my hair* \"...The light hasn't changed yet.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*Startled at first... then quietly strokes my hair* \"...The light hasn't changed yet.\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Startled at first... then quietly strokes my hair* \"...The light hasn't changed yet.\""
            }
        }
    },
    "day3_afternoon_teacher_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "maxTurns": 3,
        "next": "day3_afternoon_teacher_arrive",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*담임선생님의 차 안에서 함께 집으로 향한다.*",
                "context": "담임선생님의 차 안에서 귀가 중. 석양 속에서 손을 잡거나 어깨에 기대는 스킨십 후. 금지된 사랑의 달콤함과 죄책감."
            },
            "en": {
                "name": "Me",
                "text": "*Riding in the teacher's car on the way home.*",
                "context": "In the homeroom teacher's car heading home. After hand-holding or leaning on her shoulder in the sunset. The sweetness and guilt of a forbidden love."
            },
            "es": {
                "name": "Yo",
                "text": "*Riding in the teacher's car on the way home.*",
                "context": "En el auto de la profesora camino a casa. Después de tomarse de la mano o apoyarse en su hombro al atardecer. La dulzura y culpa de un amor prohibido."
            },
            "ja": {
                "name": "僕",
                "text": "*Riding in the teacher's car on the way home.*",
                "context": "担任先生の車の中で帰宅中。夕焼けの中で手を繋いだり肩に寄りかかったりした後。禁断の恋の甘さと罪悪感。"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dans la voiture du professeur sur le chemin du retour.*",
                "context": "Dans la voiture du professeur principal en rentrant chez soi. Après s'être tenu la main ou s'être appuyé sur son épaule au coucher du soleil. La douceur et la culpabilité d'un amour interdit."
            }
        }
    },
    "day3_afternoon_teacher_arrive": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "fade": true,
        "next": "day3_night_start",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*집 앞에 도착하며* \"…모레 일요일에 박물관 약속 잊지 않았지? 기대하고 있을게.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*Arriving at my house* \"...You haven't forgotten our museum date on Sunday, right? I'll be looking forward to it.\""
            },
            "es": {
                "name": "Profesora",
                "text": "*Arriving at my house* \"...You haven't forgotten our museum date on Sunday, right? I'll be looking forward to it.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*Arriving at my house* \"...You haven't forgotten our museum date on Sunday, right? I'll be looking forward to it.\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Arriving at my house* \"...You haven't forgotten our museum date on Sunday, right? I'll be looking forward to it.\""
            }
        }
    },
    "day3_afternoon_nurse_wait": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_nurse_walk",
                "stats": {
                    "Nurse": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_afternoon_alone_walk"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, {name}. 퇴근하려고 나왔는데 딱 마주쳤네? 후훗.\"",
                "choices": [
                    "\"같이 가실래요?\"",
                    "\"안녕히 가세요\""
                ]
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh my, {name}. I came out to leave and ran into you? Hehe.\"",
                "choices": [
                    "\"Shall we walk together?\"",
                    "\"Have a good evening\""
                ]
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Oh my, {name}. I came out to leave and ran into you? Hehe.\"",
                "choices": [
                    "\"Shall we walk together?\"",
                    "\"Have a good evening\""
                ]
            },
            "ja": {
                "name": "保健先生",
                "text": "\"Oh my, {name}. I came out to leave and ran into you? Hehe.\"",
                "choices": [
                    "\"Shall we walk together?\"",
                    "\"Have a good evening\""
                ]
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Oh my, {name}. I came out to leave and ran into you? Hehe.\"",
                "choices": [
                    "\"Shall we walk together?\"",
                    "\"Have a good evening\""
                ]
            }
        }
    },
    "day3_afternoon_nurse_walk": {
        "character": "assets/images/characters/nurse_normal.png",
        "background": "assets/images/background/street.png",
        "sunset": true,
        "next": "day3_afternoon_nurse_band",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님과 나란히 걷는다. 선생님이 내 손등을 본다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Walking side by side with the nurse. She glances at the back of my hand.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Walking side by side with the nurse. She glances at the back of my hand.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Walking side by side with the nurse. She glances at the back of my hand.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je marche côte à côte avec l'infirmière. Elle jette un coup d'œil au dos de ma main.*"
            }
        }
    },
    "day3_afternoon_nurse_band": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day3_afternoon_nurse_band_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*갑자기 내 손을 잡고 밴드를 붙여준다* \"…여기 긁혔는데? 못 봤어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*She suddenly takes my hand and puts a band-aid on it* \"...There's a scratch here? You didn't notice.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*She suddenly takes my hand and puts a band-aid on it* \"...There's a scratch here? You didn't notice.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*She suddenly takes my hand and puts a band-aid on it* \"...There's a scratch here? You didn't notice.\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*She suddenly takes my hand and puts a band-aid on it* \"...There's a scratch here? You didn't notice.\""
            }
        }
    },
    "day3_afternoon_nurse_band_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_nurse_caught",
                "stats": {
                    "Nurse": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_afternoon_nurse_hold",
                "stats": {
                    "Nurse": {
                        "affinity": 10
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*상처가 없는데… 선생님이 손을 잡고 싶었던 걸까?*",
                "choices": [
                    "\"상처 없는데요?\"",
                    "*그냥 손을 잡아준다*"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*There's no scratch... Did she just want to hold my hand?*",
                "choices": [
                    "\"There's no scratch though?\"",
                    "*Just hold her hand*"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*There's no scratch... Did she just want to hold my hand?*",
                "choices": [
                    "\"There's no scratch though?\"",
                    "*Just hold her hand*"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*There's no scratch... Did she just want to hold my hand?*",
                "choices": [
                    "\"There's no scratch though?\"",
                    "*Just hold her hand*"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Il n'y a pas d'égratignure... Elle voulait juste me tenir la main ?*",
                "choices": [
                    "\"There's no scratch though?\"",
                    "*Simplement lui tenir la main*"
                ]
            }
        }
    },
    "day3_afternoon_nurse_caught": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "next": "day3_afternoon_nurse_freetalk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*들켰다는 듯 얼굴이 빨개진다* \"…훔, 눈치 빠르네? 그냥… 선생님 마크야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*Her face turns red as if caught* \"...Hmm, sharp eyes? It's just... teacher's mark.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*Her face turns red as if caught* \"...Hmm, sharp eyes? It's just... teacher's mark.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*Her face turns red as if caught* \"...Hmm, sharp eyes? It's just... teacher's mark.\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Her face turns red as if caught* \"...Hmm, sharp eyes? It's just... teacher's mark.\""
            }
        }
    },
    "day3_afternoon_nurse_hold": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "next": "day3_afternoon_nurse_freetalk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*놀라서 멈춰서다가… 꼭 잡아온다* \"…위험한 애. 10초만 이러고 있자.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*Surprised, she stops... then holds on tight* \"...Dangerous boy. Let's stay like this for ten seconds.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*Surprised, she stops... then holds on tight* \"...Dangerous boy. Let's stay like this for ten seconds.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*Surprised, she stops... then holds on tight* \"...Dangerous boy. Let's stay like this for ten seconds.\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Surprised, she stops... then holds on tight* \"...Dangerous boy. Let's stay like this for ten seconds.\""
            }
        }
    },
    "day3_afternoon_nurse_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "maxTurns": 3,
        "next": "day3_afternoon_nurse_arrive",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님과 나란히 퇴근길을 걷는다.*",
                "context": "보건선생님과 퇴근길. 선생님이 밴드를 구실로 손을 잡았다. 금지된 사랑의 설렘과 긴장감."
            },
            "en": {
                "name": "Me",
                "text": "*Walking home alongside the school nurse.*",
                "context": "Walking home with the school nurse. She used a band-aid as an excuse to hold my hand. The thrill and tension of a forbidden love."
            },
            "es": {
                "name": "Yo",
                "text": "*Walking home alongside the school nurse.*",
                "context": "Caminando a casa con la enfermera. Usó una bandita como excusa para tomar mi mano. La emoción y tensión de un amor prohibido."
            },
            "ja": {
                "name": "僕",
                "text": "*Walking home alongside the school nurse.*",
                "context": "保健先生との帰り道。先生がバンドエイドを口実に手を握った。禁断の恋のときめきと緊張感。"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je rentre en marchant aux côtés de l'infirmière scolaire.*",
                "context": "En rentrant avec l'infirmière scolaire. Elle a utilisé un pansement comme prétexte pour me tenir la main. Le frisson et la tension d'un amour interdit."
            }
        }
    },
    "day3_afternoon_nurse_arrive": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "fade": true,
        "next": "day3_night_start",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"일요일 저녁 7시, 잊으면 안 돼? 선생님 기다리고 있을 테니까.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Don't forget Sunday 7 PM, okay? I'll be waiting for you.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Don't forget Sunday 7 PM, okay? I'll be waiting for you.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"Don't forget Sunday 7 PM, okay? I'll be waiting for you.\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Don't forget Sunday 7 PM, okay? I'll be waiting for you.\""
            }
        }
    }
});
