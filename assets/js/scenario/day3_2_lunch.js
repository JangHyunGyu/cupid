/**
 * ============================================================================
 * CUPID - day3_2_lunch (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day3_2_lunch.js + en_day3_2_lunch.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[3]) SCENARIO[3] = {};

Object.assign(SCENARIO[3], {
    "day3_lunch_start": {
        "background": "assets/images/background/room_school.png",
        "bgm": "daily.mp3",
        "character": null,
        "next": "day3_lunch_check_dates",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*점심시간을 알리는 종이 울렸다. 오늘은 금요일... 내일부터 주말이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The lunch bell rings. It's Friday... Tomorrow is the weekend.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Suena la campana del almuerzo. Es viernes... Mañana es fin de semana.*"
            },
            "ja": {
                "name": "僕",
                "text": "*昼休みを知らせるチャイムが鳴った。今日は金曜日…明日から週末だ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*The lunch bell rings. It's Friday... Tomorrow is the weekend.*"
            }
        }
    },
    "day3_lunch_check_dates": {
        "background": "assets/images/background/room_school.png",
        "branches": [
            {
                "next": "day3_lunch_multiple_approach",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_lunch_single_approach",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_lunch_single_approach",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_lunch_single_approach",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_lunch_single_approach",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_lunch_single_approach",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_lunch_normal"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*책상에서 일어나려는데, 갑자기 여러 명의 시선이 느껴진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As I try to get up from my desk, I feel multiple eyes on me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cuando intento levantarme de mi escritorio, siento varias miradas sobre mí.*"
            },
            "ja": {
                "name": "僕",
                "text": "*席を立とうとすると、複数の視線を感じる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*As I try to get up from my desk, I feel multiple eyes on me.*"
            }
        }
    },
    "day3_lunch_multiple_approach": {
        "character": null,
        "branches": [
            {
                "next": "day3_lunch_collision",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_lunch_collision_no_seoyeon"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어... 잠깐, 왜 다들 이쪽으로...?*"
            },
            "en": {
                "name": "Me",
                "text": "*Uh... wait, why is everyone coming this way...?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Eh... espera, ¿por qué todos vienen hacia acá...?*"
            },
            "ja": {
                "name": "僕",
                "text": "*え…ちょっと待て、なんでみんなこっちに…？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Uh... wait, why is everyone coming this way...?*"
            }
        }
    },
    "day3_lunch_collision_no_seoyeon": {
        "character": null,
        "next": "day3_lunch_collision_no_seoyeon_choose",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*약속한 애들이 동시에 나에게 다가온다. 분위기가 심상치 않다...*"
            },
            "en": {
                "name": "Me",
                "text": "*The girls I made plans with are all approaching me at the same time. This doesn't look good...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Las chicas con las que hice planes se acercan todas al mismo tiempo. Esto no pinta bien...*"
            },
            "ja": {
                "name": "僕",
                "text": "*約束した子たちが同時に近づいてくる。これはまずい…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*The girls I made plans with are all approaching me at the same time. This doesn't look good...*"
            }
        }
    },
    "day3_lunch_collision_no_seoyeon_choose": {
        "character": null,
        "choices": [
            {
                "next": "day3_lunch_choose_yuna",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_lunch_choose_dain",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_lunch_together_propose"
            },
            {
                "next": "day3_lunch_escape",
                "stats": {
                    "Yuna": {
                        "affinity": -3
                    },
                    "Dain": {
                        "affinity": -3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*누구와 함께 먹을까...?*",
                "choices": [
                    "유나와 점심을 먹는다",
                    "다인이와 점심을 먹는다",
                    "다 같이 먹자고 제안한다",
                    "혼자 먹겠다고 도망친다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Who should I eat with...?*",
                "choices": [
                    "Have lunch with Yuna",
                    "Have lunch with Dain",
                    "Suggest eating together",
                    "Run away to eat alone"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¿Con quién debería comer...?*",
                "choices": [
                    "Almorzar con Yuna",
                    "Almorzar con Dain",
                    "Sugerir comer todos juntos",
                    "Huir para comer solo"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*誰と食べようか…？*",
                "choices": [
                    "ユナとランチを食べる",
                    "ダインとランチを食べる",
                    "みんなで食べようと提案する",
                    "逃げて一人で食べる"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Who should I eat with...?*",
                "choices": [
                    "Have lunch with Yuna",
                    "Have lunch with Dain",
                    "Suggest eating together",
                    "Run away to eat alone"
                ]
            }
        }
    },
    "day3_lunch_collision": {
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            {
                "next": "day3_lunch_collision_seoyeon_yuna",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_lunch_collision_seoyeon_dain",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_lunch_seoyeon_only"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"어, {name}! 점심 같이... 어?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Hey, {name}! Want to have lunch... huh?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡Oye, {name}! ¿Quieres almorzar... eh?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あ、{name}！一緒にお昼…あれ？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Hey, {name}! Want to have lunch... huh?\""
            }
        }
    },
    "day3_lunch_collision_seoyeon_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_tension_1",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...{name}. 같이 가.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...{name}. Come with me.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...{name}. Ven conmigo.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…{name}。一緒に来て。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...{name}. Come with me.\""
            }
        }
    },
    "day3_lunch_collision_seoyeon_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day3_lunch_tension_1",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야, {name}! 밥 먹으러 가자! 어... 서연이도?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey, {name}! Let's go eat! Oh... Seoyeon too?\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Hey, {name}! Let's go eat! Oh... Seoyeon too?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Hey, {name}! Let's go eat! Oh... Seoyeon too?\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hey, {name}! Let's go eat! Oh... Seoyeon too?\""
            }
        }
    },
    "day3_lunch_tension_1": {
        "character": null,
        "next": "day3_lunch_tension_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*순간, 교실 안에 미묘한 긴장감이 감돈다. 서로를 바라보는 눈빛이 예사롭지 않다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Suddenly, the classroom fills with tension. Their eyes meeting each other don't look friendly.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Suddenly, the classroom fills with tension. Their eyes meeting each other don't look friendly.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Suddenly, the classroom fills with tension. Their eyes meeting each other don't look friendly.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Suddenly, the classroom fills with tension. Their eyes meeting each other don't look friendly.*"
            }
        }
    },
    "day3_lunch_tension_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day3_lunch_tension_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...저기, 나 먼저 {name}한테 말 걸었는데?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Excuse me, I spoke to {name} first?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Excuse me, I spoke to {name} first?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"...Excuse me, I spoke to {name} first?\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Excuse me, I spoke to {name} first?\""
            }
        }
    },
    "day3_lunch_tension_3": {
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "day3_lunch_choose_seoyeon"
            },
            {
                "next": "day3_lunch_choose_yuna",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_lunch_choose_dain",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_lunch_together_propose"
            },
            {
                "next": "day3_lunch_escape",
                "stats": {
                    "Seoyeon": {
                        "affinity": -3
                    },
                    "Yuna": {
                        "affinity": -3
                    },
                    "Dain": {
                        "affinity": -3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*분위기가 심상치 않다... 어떡하지?*",
                "choices": [
                    "서연이와 점심을 먹는다",
                    "유나와 점심을 먹는다",
                    "다인이와 점심을 먹는다",
                    "다 같이 먹자고 제안한다",
                    "혼자 먹겠다고 도망친다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*This doesn't look good... What should I do?*",
                "choices": [
                    "Have lunch with Seoyeon",
                    "Have lunch with Yuna",
                    "Have lunch with Dain",
                    "Suggest eating together",
                    "Run away to eat alone"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*This doesn't look good... What should I do?*",
                "choices": [
                    "Almorzar con Seoyeon",
                    "Almorzar con Yuna",
                    "Almorzar con Dain",
                    "Sugerir comer todos juntos",
                    "Huir para comer solo"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*This doesn't look good... What should I do?*",
                "choices": [
                    "ソヨンとランチを食べる",
                    "ユナとランチを食べる",
                    "ダインとランチを食べる",
                    "みんなで食べようと提案する",
                    "逃げて一人で食べる"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*This doesn't look good... What should I do?*",
                "choices": [
                    "Have lunch with Seoyeon",
                    "Have lunch with Yuna",
                    "Have lunch with Dain",
                    "Suggest eating together",
                    "Run away to eat alone"
                ]
            }
        }
    },
    "day3_lunch_choose_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "setFlag": "day3_lunch_with_seoyeon",
        "next": "day3_lunch_seoyeon_others_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"서연아, 같이 가자. 어제 약속한 거 있잖아.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Seoyeon, let's go together. We had plans from yesterday, remember?\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Seoyeon, let's go together. We had plans from yesterday, remember?\""
            },
            "ja": {
                "name": "僕",
                "text": "\"Seoyeon, let's go together. We had plans from yesterday, remember?\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Seoyeon, let's go together. We had plans from yesterday, remember?\""
            }
        }
    },
    "day3_lunch_seoyeon_others_react": {
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            {
                "next": "day3_lunch_yuna_jealous",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_lunch_dain_jealous",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_lunch_with_seoyeon_start"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다른 애들의 표정이 굳는 게 느껴진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I can feel the others' expressions harden.*"
            },
            "es": {
                "name": "Yo",
                "text": "*I can feel the others' expressions harden.*"
            },
            "ja": {
                "name": "僕",
                "text": "*I can feel the others' expressions harden.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*I can feel the others' expressions harden.*"
            }
        }
    },
    "day3_lunch_yuna_jealous": {
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {
            "Yuna": {
                "affinity": -5
            }
        },
        "setFlag": "day3_jealousy_yuna",
        "next": "day3_lunch_yuna_jealous_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...그래. 재밌게 먹어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I see. Enjoy your meal.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...I see. Enjoy your meal.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...I see. Enjoy your meal.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...I see. Enjoy your meal.\""
            }
        }
    },
    "day3_lunch_yuna_jealous_2": {
        "character": null,
        "next": "day3_lunch_with_seoyeon_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 아무 말 없이 교실을 나간다. 그녀의 뒷모습이 왠지 쓸쓸해 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna leaves the classroom without a word. Her back looks somehow lonely.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna leaves the classroom without a word. Her back looks somehow lonely.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Yuna leaves the classroom without a word. Her back looks somehow lonely.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna leaves the classroom without a word. Her back looks somehow lonely.*"
            }
        }
    },
    "day3_lunch_dain_jealous": {
        "character": "assets/images/characters/dain_sad.png",
        "stats": {
            "Dain": {
                "affinity": -5
            }
        },
        "setFlag": "day3_jealousy_dain",
        "next": "day3_lunch_dain_jealous_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"뭐야, 난 안 끼워줘? 흥, 알았어!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"What, you're not including me? Hmph, fine!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"What, you're not including me? Hmph, fine!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"What, you're not including me? Hmph, fine!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"What, you're not including me? Hmph, fine!\""
            }
        }
    },
    "day3_lunch_dain_jealous_2": {
        "character": null,
        "next": "day3_lunch_with_seoyeon_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 투덜거리며 다른 친구들에게로 가버린다. 신경 쓰인다...*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain grumbles and goes to her other friends. I'm a bit worried...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dain grumbles and goes to her other friends. I'm a bit worried...*"
            },
            "ja": {
                "name": "僕",
                "text": "*Dain grumbles and goes to her other friends. I'm a bit worried...*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain grumbles and goes to her other friends. I'm a bit worried...*"
            }
        }
    },
    "day3_lunch_with_seoyeon_start": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/store.png",
        "next": "day3_lunch_seoyeon_jealous_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"후... 드디어 둘이네. 솔직히 말할게, {name}. 요즘 너한테 관심 있는 애들 너무 많은 거 아니야?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Phew... Finally just the two of us. Honestly, {name}, don't you think too many people are interested in you lately?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Phew... Finally just the two of us. Honestly, {name}, don't you think too many people are interested in you lately?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"Phew... Finally just the two of us. Honestly, {name}, don't you think too many people are interested in you lately?\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Phew... Finally just the two of us. Honestly, {name}, don't you think too many people are interested in you lately?\""
            }
        }
    },
    "day3_lunch_seoyeon_jealous_talk": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "day3_lunch_seoyeon_reassure"
            },
            {
                "next": "day3_lunch_seoyeon_deny"
            },
            {
                "next": "day3_lunch_seoyeon_tease"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이의 목소리에 평소와 다른 날이 서 있다.*",
                "choices": [
                    "\"서연이가 제일 소중해\"",
                    "\"그냥 친구들이야\"",
                    "\"왜, 질투해?\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*There's an unusual edge in Seoyeon's voice.*",
                "choices": [
                    "\"You're the most important to me\"",
                    "\"They're just friends\"",
                    "\"Why, are you jealous?\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*There's an unusual edge in Seoyeon's voice.*",
                "choices": [
                    "\"You're the most important to me\"",
                    "\"They're just friends\"",
                    "\"Why, are you jealous?\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*There's an unusual edge in Seoyeon's voice.*",
                "choices": [
                    "\"You're the most important to me\"",
                    "\"They're just friends\"",
                    "\"Why, are you jealous?\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*There's an unusual edge in Seoyeon's voice.*",
                "choices": [
                    "\"You're the most important to me\"",
                    "\"They're just friends\"",
                    "\"Why, are you jealous?\""
                ]
            }
        }
    },
    "day3_lunch_seoyeon_reassure": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 8
            }
        },
        "next": "day3_lunch_seoyeon_weekend",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...정말? 그 말... 기억할게.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Really? I'll remember that.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Really? I'll remember that.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"...Really? I'll remember that.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Really? I'll remember that.\""
            }
        }
    },
    "day3_lunch_seoyeon_deny": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": 2
            }
        },
        "next": "day3_lunch_seoyeon_weekend",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...그래, 그렇겠지. 미안, 이상한 말 했어.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Right, I guess so. Sorry, I said something weird.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Right, I guess so. Sorry, I said something weird.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"...Right, I guess so. Sorry, I said something weird.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Right, I guess so. Sorry, I said something weird.\""
            }
        }
    },
    "day3_lunch_seoyeon_tease": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day3_lunch_seoyeon_weekend",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"질투? ...그래, 맞아. 네 시선이 다른 곳을 향할 때마다 속이 타들어 가는 것 같아. 그러니까 나만 봐.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"W-what! Who said I'm jealous! ...Maybe a little.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"W-what! Who said I'm jealous! ...Maybe a little.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"W-what! Who said I'm jealous! ...Maybe a little.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"W-what! Who said I'm jealous! ...Maybe a little.\""
            }
        }
    },
    "day3_lunch_seoyeon_weekend": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            {
                "next": "day3_lunch_seoyeon_caught",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_lunch_seoyeon_promise"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"그나저나 주말에 뭐 해? 나... 시간 있으면 같이 어디 가고 싶은데.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"By the way, what are you doing this weekend? I... want to hang out somewhere together if you're free.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"By the way, what are you doing this weekend? I... want to hang out somewhere together if you're free.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"By the way, what are you doing this weekend? I... want to hang out somewhere together if you're free.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"By the way, what are you doing this weekend? I... want to hang out somewhere together if you're free.\""
            }
        }
    },
    "day3_lunch_seoyeon_caught": {
        "choices": [
            {
                "next": "day3_lunch_seoyeon_lie",
                "setFlag": "day3_seoyeon_sunday_promise"
            },
            {
                "next": "day3_lunch_seoyeon_honest"
            },
            {
                "next": "day3_lunch_seoyeon_dodge"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*잠깐, 나 이미 다른 약속이... 어떡하지?*",
                "choices": [
                    "\"일요일은 어때?\" (거짓말)",
                    "솔직하게 말한다",
                    "얼버무린다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Wait, I already have other plans... What should I do?*",
                "choices": [
                    "\"How about Sunday?\" (Lie)",
                    "Be honest",
                    "Dodge the question"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Wait, I already have other plans... What should I do?*",
                "choices": [
                    "\"How about Sunday?\" (Lie)",
                    "Be honest",
                    "Dodge the question"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*Wait, I already have other plans... What should I do?*",
                "choices": [
                    "\"How about Sunday?\" (Lie)",
                    "Be honest",
                    "Dodge the question"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Wait, I already have other plans... What should I do?*",
                "choices": [
                    "\"How about Sunday?\" (Lie)",
                    "Be honest",
                    "Dodge the question"
                ]
            }
        }
    },
    "day3_lunch_seoyeon_lie": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day3_lunch_seoyeon_end",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...정말? 그럼 일요일에 만나. 어디 갈지는 내가 정해도 될까?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Really?! Then let's meet on Sunday! Can I pick where to go?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Really?! Then let's meet on Sunday! Can I pick where to go?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"Really?! Then let's meet on Sunday! Can I pick where to go?\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Really?! Then let's meet on Sunday! Can I pick where to go?\""
            }
        }
    },
    "day3_lunch_seoyeon_honest": {
        "character": "assets/images/characters/seyoun_sad.png",
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "next": "day3_lunch_seoyeon_honest_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...뭐? 다른 약속이 있어? 누구랑?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...What? You have other plans? With who?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...What? You have other plans? With who?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"...What? You have other plans? With who?\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...What? You have other plans? With who?\""
            }
        }
    },
    "day3_lunch_seoyeon_honest_2": {
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "day3_lunch_seoyeon_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이의 눈빛이 차갑게 변한다. 분위기가 급격히 얼어붙었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon's eyes turn cold. The atmosphere has frozen.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon's eyes turn cold. The atmosphere has frozen.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Seoyeon's eyes turn cold. The atmosphere has frozen.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon's eyes turn cold. The atmosphere has frozen.*"
            }
        }
    },
    "day3_lunch_seoyeon_dodge": {
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": -2
            }
        },
        "next": "day3_lunch_seoyeon_end",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"왜 그래, 대답을 못 해? ...혹시 다른 약속 있어?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Why are you hesitating? ...Do you have other plans?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Why are you hesitating? ...Do you have other plans?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"Why are you hesitating? ...Do you have other plans?\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Why are you hesitating? ...Do you have other plans?\""
            }
        }
    },
    "day3_lunch_seoyeon_promise": {
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "setFlag": "day3_seoyeon_weekend_promise",
        "next": "day3_lunch_seoyeon_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"좋아, 주말에 같이 놀자.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Sure, let's hang out this weekend.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Sure, let's hang out this weekend.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"Sure, let's hang out this weekend.\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Sure, let's hang out this weekend.\""
            }
        }
    },
    "day3_lunch_seoyeon_end": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "background": "assets/images/background/school.png",
        "next": "day3_lunch_seoyeon_bench",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*점심을 다 먹고 서연이와 학교 뒤편 벤치에 앉았다. 바람이 살랑살랑 분다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We finished lunch and sat on a bench behind the school. A gentle breeze is blowing.*"
            },
            "es": {
                "name": "Yo",
                "text": "*We finished lunch and sat on a bench behind the school. A gentle breeze is blowing.*"
            },
            "ja": {
                "name": "僕",
                "text": "*We finished lunch and sat on a bench behind the school. A gentle breeze is blowing.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*We finished lunch and sat on a bench behind the school. A gentle breeze is blowing.*"
            }
        }
    },
    "day3_lunch_seoyeon_bench": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day3_lunch_seoyeon_bench_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*조용히 내 어깨에 머리를 기대며* \"...{name}아. 나 요즘 이상해. 매일 네 생각만 해.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Quietly leaning her head on my shoulder* \"...{name}. I've been strange lately. I think about you every single day.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Quietly leaning her head on my shoulder* \"...{name}. I've been strange lately. I think about you every single day.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*Quietly leaning her head on my shoulder* \"...{name}. I've been strange lately. I think about you every single day.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Quietly leaning her head on my shoulder* \"...{name}. I've been strange lately. I think about you every single day.\""
            }
        }
    },
    "day3_lunch_seoyeon_bench_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "choices": [
            {
                "next": "day3_lunch_seoyeon_pat",
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_lunch_seoyeon_same",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_lunch_seoyeon_silent",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이의 머리카락에서 샴푸 향이 난다. 심장이 두근거린다.*",
                "choices": [
                    "*서연이의 머리를 쓰다듬는다*",
                    "\"나도 똑같아\"",
                    "*가만히 있는다*"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The scent of shampoo from Seoyeon's hair. My heart is racing.*",
                "choices": [
                    "*Pat Seoyeon's head*",
                    "\"I feel the same way\"",
                    "*Stay still*"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*The scent of shampoo from Seoyeon's hair. My heart is racing.*",
                "choices": [
                    "*Pat Seoyeon's head*",
                    "\"I feel the same way\"",
                    "*Quedarme quieto*"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*The scent of shampoo from Seoyeon's hair. My heart is racing.*",
                "choices": [
                    "*Pat Seoyeon's head*",
                    "\"I feel the same way\"",
                    "*じっとしている*"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*The scent of shampoo from Seoyeon's hair. My heart is racing.*",
                "choices": [
                    "*Pat Seoyeon's head*",
                    "\"I feel the same way\"",
                    "*Rester immobile*"
                ]
            }
        }
    },
    "day3_lunch_seoyeon_pat": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "day3_lunch_seoyeon_freetalk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*머리를 쓰다듬자 서연이가 얼굴을 묻는다* \"바, 바보... 이런 데서 그러면 어떡해...\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*As I pat her head, Seoyeon buries her face* \"D-dummy... Don't do that in a place like this...\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*As I pat her head, Seoyeon buries her face* \"D-dummy... Don't do that in a place like this...\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*As I pat her head, Seoyeon buries her face* \"D-dummy... Don't do that in a place like this...\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*As I pat her head, Seoyeon buries her face* \"D-dummy... Don't do that in a place like this...\""
            }
        }
    },
    "day3_lunch_seoyeon_same": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day3_lunch_seoyeon_freetalk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 고개를 들어 나를 바라본다* \"...진짜? 그 말... 기억해둘 거야.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon lifts her head and looks at me* \"...Really? I'm going to remember that.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon lifts her head and looks at me* \"...Really? I'm going to remember that.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*Seoyeon lifts her head and looks at me* \"...Really? I'm going to remember that.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon lifts her head and looks at me* \"...Really? I'm going to remember that.\""
            }
        }
    },
    "day3_lunch_seoyeon_silent": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "day3_lunch_seoyeon_freetalk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 조용히 내 손을 잡는다* \"...이렇게 있으니까 좋다.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon quietly takes my hand* \"...This is nice. Just like this.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon quietly takes my hand* \"...This is nice. Just like this.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*Seoyeon quietly takes my hand* \"...This is nice. Just like this.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon quietly takes my hand* \"...This is nice. Just like this.\""
            }
        }
    },
    "day3_lunch_seoyeon_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "maxTurns": 4,
        "next": "day3_lunch_seoyeon_bell",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학교 뒤편 벤치에서 서연이와 나란히 앉아 이야기를 나눈다.*",
                "context": "서연이와 학교 뒤편 벤치에서 둘이 나란히 앉아있다. 서연이가 어깨에 머리를 기대고 '매일 네 생각만 해'라고 고백한 후. 달콤한 분위기."
            },
            "en": {
                "name": "Me",
                "text": "*Sitting side by side with Seoyeon on the bench behind the school, chatting.*",
                "context": "Sitting with Seoyeon on a bench behind school. She leaned her head on my shoulder and confessed she thinks about me every day. Sweet atmosphere."
            },
            "es": {
                "name": "Yo",
                "text": "*Sitting side by side with Seoyeon on the bench behind the school, chatting.*",
                "context": "Sentado con Seoyeon en un banco detrás de la escuela. Apoyó su cabeza en mi hombro y confesó que piensa en mí todos los días. Ambiente dulce."
            },
            "ja": {
                "name": "僕",
                "text": "*Sitting side by side with Seoyeon on the bench behind the school, chatting.*",
                "context": "ソヨンと学校裏のベンチに並んで座っている。ソヨンが肩に頭を乗せて「毎日あなたのことを考えてる」と告白した後。甘い雰囲気。"
            },
            "fr": {
                "name": "Moi",
                "text": "*Sitting side by side with Seoyeon on the bench behind the school, chatting.*",
                "context": "Sitting with Seoyeon on a bench behind school. She leaned her head on my shoulder and confessed she thinks about me every day. Sweet atmosphere."
            }
        }
    },
    "day3_lunch_seoyeon_bell": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "fade": true,
        "next": "day3_afternoon_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*수업 종이 울린다. 서연이와의 시간이 마법처럼 짧게 느껴졌다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The bell rings for class. Time with Seoyeon felt magically short.*"
            },
            "es": {
                "name": "Yo",
                "text": "*The bell rings for class. Time with Seoyeon felt magically short.*"
            },
            "ja": {
                "name": "僕",
                "text": "*The bell rings for class. Time with Seoyeon felt magically short.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*The bell rings for class. Time with Seoyeon felt magically short.*"
            }
        }
    },
    "day3_lunch_choose_yuna": {
        "character": null,
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "setFlag": "day3_lunch_with_yuna",
        "next": "day3_lunch_yuna_others_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"유나야, 같이 가자.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Yuna, let's go together.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Yuna, let's go together.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"Yuna, let's go together.\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Yuna, let's go together.\""
            }
        }
    },
    "day3_lunch_yuna_others_react": {
        "character": null,
        "branches": [
            {
                "next": "day3_lunch_yuna_seoyeon_jealous",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_lunch_with_yuna_start"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나와 함께 가기로 했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I decided to go with Yuna.*"
            },
            "es": {
                "name": "Yo",
                "text": "*I decided to go with Yuna.*"
            },
            "ja": {
                "name": "僕",
                "text": "*I decided to go with Yuna.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*I decided to go with Yuna.*"
            }
        }
    },
    "day3_lunch_yuna_seoyeon_jealous": {
        "character": "assets/images/characters/seyoun_sad.png",
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "setFlag": "day3_jealousy_seoyeon",
        "next": "day3_lunch_with_yuna_start",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...그래? 알았어.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Okay. Got it.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Okay. Got it.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"...Okay. Got it.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Okay. Got it.\""
            }
        }
    },
    "day3_lunch_with_yuna_start": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_yuna_rooftop",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...따라와.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Follow me.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Follow me.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...Follow me.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Follow me.\""
            }
        }
    },
    "day3_lunch_yuna_rooftop": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/top_school.png",
        "next": "day3_lunch_yuna_bento",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나를 따라 옥상으로 올라왔다. 유나가 바닥에 돗자리를 깔고 가방에서 도시락을 꺼낸다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I followed Yuna to the rooftop. Yuna lays down a blanket on the floor and pulls out a lunchbox from her bag.*"
            },
            "es": {
                "name": "Yo",
                "text": "*I followed Yuna to the rooftop. Yuna lays down a blanket on the floor and pulls out a lunchbox from her bag.*"
            },
            "ja": {
                "name": "僕",
                "text": "*I followed Yuna to the rooftop. Yuna lays down a blanket on the floor and pulls out a lunchbox from her bag.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*I followed Yuna to the rooftop. Yuna lays down a blanket on the floor and pulls out a lunchbox from her bag.*"
            }
        }
    },
    "day3_lunch_yuna_bento": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_yuna_bento_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...만들어왔어. 두 명분.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I made it. For two.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...I made it. For two.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...I made it. For two.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...I made it. For two.\""
            }
        }
    },
    "day3_lunch_yuna_bento_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day3_lunch_yuna_bento_ask",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_lunch_yuna_bento_taste",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*도시락 두 칸이 나란히 놓여있다. 하나는 검은색, 하나는 분홍색 뚜껑. 유나가 직접 만든 건가?*",
                "choices": [
                    "\"유나가 직접 만든 거야?\"",
                    "*조용히 맛본다*"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Two lunch boxes placed side by side. One with a black lid, one with a pink lid. Did Yuna make these herself?*",
                "choices": [
                    "\"You made these yourself?\"",
                    "*Quietly taste it*"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Two lunch boxes placed side by side. One with a black lid, one with a pink lid. Did Yuna make these herself?*",
                "choices": [
                    "\"You made these yourself?\"",
                    "*Quietly taste it*"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*Two lunch boxes placed side by side. One with a black lid, one with a pink lid. Did Yuna make these herself?*",
                "choices": [
                    "\"You made these yourself?\"",
                    "*Quietly taste it*"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Two lunch boxes placed side by side. One with a black lid, one with a pink lid. Did Yuna make these herself?*",
                "choices": [
                    "\"You made these yourself?\"",
                    "*Quietly taste it*"
                ]
            }
        }
    },
    "day3_lunch_yuna_bento_ask": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "day3_lunch_yuna_bento_eat",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*다른 곳을 보며* \"...눈치 빠르네. 맛없으면 버려도 돼.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Looking away* \"...You're perceptive. Throw it away if it's bad.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Looking away* \"...You're perceptive. Throw it away if it's bad.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*Looking away* \"...You're perceptive. Throw it away if it's bad.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "*Looking away* \"...You're perceptive. Throw it away if it's bad.\""
            }
        }
    },
    "day3_lunch_yuna_bento_taste": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_yuna_bento_eat",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*한 입 먹어본다. 의외로... 정말 맛있다!*"
            },
            "en": {
                "name": "Me",
                "text": "*I take a bite. Surprisingly... it's actually really good!*"
            },
            "es": {
                "name": "Yo",
                "text": "*I take a bite. Surprisingly... it's actually really good!*"
            },
            "ja": {
                "name": "僕",
                "text": "*I take a bite. Surprisingly... it's actually really good!*"
            },
            "fr": {
                "name": "Moi",
                "text": "*I take a bite. Surprisingly... it's actually really good!*"
            }
        }
    },
    "day3_lunch_yuna_bento_eat": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "day3_lunch_yuna_lap",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*내가 먹는 모습을 지켜보다가 미세하게 미소 짓는다* \"...맛있어?\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Watching me eat, she smiles ever so slightly* \"...Is it good?\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Watching me eat, she smiles ever so slightly* \"...Is it good?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*Watching me eat, she smiles ever so slightly* \"...Is it good?\""
            },
            "fr": {
                "name": "Yuna",
                "text": "*Watching me eat, she smiles ever so slightly* \"...Is it good?\""
            }
        }
    },
    "day3_lunch_yuna_lap": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "day3_lunch_yuna_lap_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*도시락을 다 먹고 나니 나른한 바람에 졸음이 온다. 유나가 갑자기 내 어깨를 누른다.*"
            },
            "en": {
                "name": "Me",
                "text": "*After finishing the lunchbox, a gentle breeze makes me drowsy. Yuna suddenly pushes down on my shoulder.*"
            },
            "es": {
                "name": "Yo",
                "text": "*After finishing the lunchbox, a gentle breeze makes me drowsy. Yuna suddenly pushes down on my shoulder.*"
            },
            "ja": {
                "name": "僕",
                "text": "*After finishing the lunchbox, a gentle breeze makes me drowsy. Yuna suddenly pushes down on my shoulder.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*After finishing the lunchbox, a gentle breeze makes me drowsy. Yuna suddenly pushes down on my shoulder.*"
            }
        }
    },
    "day3_lunch_yuna_lap_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day3_lunch_yuna_lap_yes",
                "stats": {
                    "Yuna": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day3_lunch_yuna_lap_no",
                "stats": {
                    "Yuna": {
                        "affinity": -2
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...누워. 내 무릎에.\"",
                "choices": [
                    "*유나의 무릎에 눕는다*",
                    "\"괜찮아, 아직...\""
                ]
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Lie down. On my lap.\"",
                "choices": [
                    "*Lie on Yuna's lap*",
                    "\"It's okay, not yet...\""
                ]
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Lie down. On my lap.\"",
                "choices": [
                    "*Lie on Yuna's lap*",
                    "\"It's okay, not yet...\""
                ]
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...Lie down. On my lap.\"",
                "choices": [
                    "*Lie on Yuna's lap*",
                    "\"It's okay, not yet...\""
                ]
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Lie down. On my lap.\"",
                "choices": [
                    "*Lie on Yuna's lap*",
                    "\"It's okay, not yet...\""
                ]
            }
        }
    },
    "day3_lunch_yuna_lap_yes": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "day3_lunch_yuna_lap_talk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*내가 눕자 유나가 내 머리카락을 쓰다듬는다* \"...5분만.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*As I lie down, Yuna strokes my hair* \"...Just five minutes.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*As I lie down, Yuna strokes my hair* \"...Just five minutes.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*As I lie down, Yuna strokes my hair* \"...Just five minutes.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "*As I lie down, Yuna strokes my hair* \"...Just five minutes.\""
            }
        }
    },
    "day3_lunch_yuna_lap_no": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_yuna_talk_1",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...그래.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Fine.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Fine.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...Fine.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Fine.\""
            }
        }
    },
    "day3_lunch_yuna_lap_talk": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "day3_lunch_yuna_freetalk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*조용히 내 머리를 쓰다듬으며* \"...이러고 있으면 니가 내 것 같은 기분이 들어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Quietly stroking my hair* \"...When we're like this, it feels like you're mine.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Quietly stroking my hair* \"...When we're like this, it feels like you're mine.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*Quietly stroking my hair* \"...When we're like this, it feels like you're mine.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "*Quietly stroking my hair* \"...When we're like this, it feels like you're mine.\""
            }
        }
    },
    "day3_lunch_yuna_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "maxTurns": 4,
        "next": "day3_lunch_yuna_talk_1",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 무릎에 누워 옥상 위의 하늘을 바라보며 이야기를 나눈다.*",
                "context": "유나의 무릎에 누워서 옥상에서 대화 중. 유나가 도시락을 만들어와서 함께 먹었고, 유나가 머리를 쓰다듬어주고 있다. 조용하고 평화로운 분위기."
            },
            "en": {
                "name": "Me",
                "text": "*Lying on Yuna's lap, looking up at the sky from the rooftop, chatting.*",
                "context": "Lying on Yuna's lap on the rooftop. Yuna made a homemade lunchbox and is stroking my hair. Quiet, peaceful atmosphere."
            },
            "es": {
                "name": "Yo",
                "text": "*Lying on Yuna's lap, looking up at the sky from the rooftop, chatting.*",
                "context": "Acostado en el regazo de Yuna en la azotea. Yuna preparó un almuerzo casero y me acaricia el cabello. Ambiente tranquilo y pacífico."
            },
            "ja": {
                "name": "僕",
                "text": "*Lying on Yuna's lap, looking up at the sky from the rooftop, chatting.*",
                "context": "ユナの膝枕で屋上にいる。ユナがお弁当を作ってきてくれて、髪を撫でている。静かで穏やかな雰囲気。"
            },
            "fr": {
                "name": "Moi",
                "text": "*Lying on Yuna's lap, looking up at the sky from the rooftop, chatting.*",
                "context": "Lying on Yuna's lap on the rooftop. Yuna made a homemade lunchbox and is stroking my hair. Quiet, peaceful atmosphere."
            }
        }
    },
    "day3_lunch_yuna_talk_1": {
        "branches": [
            {
                "next": "day3_lunch_yuna_talk_1_jealous",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_lunch_yuna_single_end"
            }
        ]
    },
    "day3_lunch_yuna_talk_1_jealous": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_yuna_talk_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...{name}. 넌 나한테만 잘해주는 줄 알았어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...{name}. I thought you were only nice to me.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...{name}. I thought you were only nice to me.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...{name}. I thought you were only nice to me.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...{name}. I thought you were only nice to me.\""
            }
        }
    },
    "day3_lunch_yuna_single_end": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "fade": true,
        "next": "day3_afternoon_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나와 함께 평화로운 점심시간을 보냈다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I spent a peaceful lunch time with Yuna.*"
            },
            "es": {
                "name": "Yo",
                "text": "*I spent a peaceful lunch time with Yuna.*"
            },
            "ja": {
                "name": "僕",
                "text": "*I spent a peaceful lunch time with Yuna.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*I spent a peaceful lunch time with Yuna.*"
            }
        }
    },
    "day3_lunch_yuna_talk_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day3_lunch_yuna_special"
            },
            {
                "next": "day3_lunch_yuna_everyone"
            },
            {
                "next": "day3_lunch_yuna_question"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 말에 가시가 돋쳐 있다.*",
                "choices": [
                    "\"유나가 특별해\"",
                    "\"모두에게 잘해주려고 해\"",
                    "\"왜 그런 말을 해?\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*There's thorns in Yuna's words.*",
                "choices": [
                    "\"You're special to me\"",
                    "\"I try to be nice to everyone\"",
                    "\"Why do you say that?\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*There's thorns in Yuna's words.*",
                "choices": [
                    "\"You're special to me\"",
                    "\"I try to be nice to everyone\"",
                    "\"Why do you say that?\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*There's thorns in Yuna's words.*",
                "choices": [
                    "\"You're special to me\"",
                    "\"I try to be nice to everyone\"",
                    "\"Why do you say that?\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*There's thorns in Yuna's words.*",
                "choices": [
                    "\"You're special to me\"",
                    "\"I try to be nice to everyone\"",
                    "\"Why do you say that?\""
                ]
            }
        }
    },
    "day3_lunch_yuna_special": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "stats": {
            "Yuna": {
                "affinity": 10
            }
        },
        "next": "day3_lunch_yuna_warning",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...정말? 그 말... 증명해줘. 내일 밤.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Really? Prove it. Tomorrow night.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Really? Prove it. Tomorrow night.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...Really? Prove it. Tomorrow night.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Really? Prove it. Tomorrow night.\""
            }
        }
    },
    "day3_lunch_yuna_everyone": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_sad.png",
        "stats": {
            "Yuna": {
                "affinity": -3
            }
        },
        "next": "day3_lunch_yuna_warning",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...그래. 역시 그렇구나. 난 그냥 '모두' 중 하나야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I see. So I'm just one of 'everyone'.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...I see. So I'm just one of 'everyone'.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...I see. So I'm just one of 'everyone'.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...I see. So I'm just one of 'everyone'.\""
            }
        }
    },
    "day3_lunch_yuna_question": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_yuna_warning",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...몰라도 돼. 아직은.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...You don't need to know. Not yet.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...You don't need to know. Not yet.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...You don't need to know. Not yet.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...You don't need to know. Not yet.\""
            }
        }
    },
    "day3_lunch_yuna_warning": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_yuna_warning_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"하나만 기억해. 나를 배신하면... 후회할 거야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Remember one thing. If you betray me... you'll regret it.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Remember one thing. If you betray me... you'll regret it.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"Remember one thing. If you betray me... you'll regret it.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"Remember one thing. If you betray me... you'll regret it.\""
            }
        }
    },
    "day3_lunch_yuna_warning_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "fade": true,
        "next": "day3_afternoon_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 눈동자가 순간 섬뜩하게 빛났다... 농담인 거겠지?*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna's eyes flashed eerily for a moment... That was a joke, right?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna's eyes flashed eerily for a moment... That was a joke, right?*"
            },
            "ja": {
                "name": "僕",
                "text": "*Yuna's eyes flashed eerily for a moment... That was a joke, right?*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna's eyes flashed eerily for a moment... That was a joke, right?*"
            }
        }
    },
    "day3_lunch_choose_dain": {
        "character": null,
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "setFlag": "day3_lunch_with_dain",
        "next": "day3_lunch_dain_others_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"다인아, 같이 밥 먹으러 가자.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Dain, let's go eat together.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Dain, let's go eat together.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"Dain, let's go eat together.\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Dain, let's go eat together.\""
            }
        }
    },
    "day3_lunch_dain_others_react": {
        "character": null,
        "branches": [
            {
                "next": "day3_lunch_dain_seoyeon_jealous",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_lunch_with_dain_start"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이와 함께 가기로 했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I decided to go with Dain.*"
            },
            "es": {
                "name": "Yo",
                "text": "*I decided to go with Dain.*"
            },
            "ja": {
                "name": "僕",
                "text": "*I decided to go with Dain.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*I decided to go with Dain.*"
            }
        }
    },
    "day3_lunch_dain_seoyeon_jealous": {
        "character": "assets/images/characters/seyoun_sad.png",
        "stats": {
            "Seoyeon": {
                "affinity": -4
            }
        },
        "setFlag": "day3_jealousy_seoyeon",
        "next": "day3_lunch_with_dain_start",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...알았어. 나중에 봐.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Okay. See you later.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Okay. See you later.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"...Okay. See you later.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Okay. See you later.\""
            }
        }
    },
    "day3_lunch_with_dain_start": {
        "character": "assets/images/characters/dain_laugh.png",
        "background": "assets/images/background/room_school.png",
        "next": "day3_lunch_dain_talk_1",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야호! 역시 {name}이 최고야! 빨리 가자, 오늘 급식 치킨이래!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Yay! {name} is the best! Let's go, today's lunch is chicken!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Yay! {name} is the best! Let's go, today's lunch is chicken!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Yay! {name} is the best! Let's go, today's lunch is chicken!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Yay! {name} is the best! Let's go, today's lunch is chicken!\""
            }
        }
    },
    "day3_lunch_dain_talk_1": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "day3_lunch_dain_talk_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"근데 있잖아... 아까 서연이 표정 봤어? 완전 질투하는 거 같던데?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"By the way... did you see Seoyeon's face just now? Totally jealous, right?\""
            },
            "es": {
                "name": "Dain",
                "text": "\"By the way... did you see Seoyeon's face just now? Totally jealous, right?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"By the way... did you see Seoyeon's face just now? Totally jealous, right?\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"By the way... did you see Seoyeon's face just now? Totally jealous, right?\""
            }
        }
    },
    "day3_lunch_dain_talk_2": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "day3_lunch_dain_talk_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 주변을 힐끗거리며 목소리를 낮춘다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain glances around and lowers her voice.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dain glances around and lowers her voice.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Dain glances around and lowers her voice.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain glances around and lowers her voice.*"
            }
        }
    },
    "day3_lunch_dain_talk_3": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            {
                "next": "day3_lunch_dain_confess"
            },
            {
                "next": "day3_lunch_dain_friends"
            },
            {
                "next": "day3_lunch_dain_jealous_tease"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야, 솔직히 말해봐. 너 서연이랑 사귀어? 아님 유나? 걔네 둘 다 너한테 관심 있는 거 다 알아.\"",
                "choices": [
                    "\"아니, 다인이가 좋아\"",
                    "\"그냥 친구야\"",
                    "\"왜, 다인이도 질투해?\""
                ]
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey, be honest with me. Are you dating Seoyeon? Or Yuna? I know they're both interested in you.\"",
                "choices": [
                    "\"No, I like you\"",
                    "\"We're just friends\"",
                    "\"Why, are you jealous too?\""
                ]
            },
            "es": {
                "name": "Dain",
                "text": "\"Hey, be honest with me. Are you dating Seoyeon? Or Yuna? I know they're both interested in you.\"",
                "choices": [
                    "\"No, I like you\"",
                    "\"We're just friends\"",
                    "\"Why, are you jealous too?\""
                ]
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Hey, be honest with me. Are you dating Seoyeon? Or Yuna? I know they're both interested in you.\"",
                "choices": [
                    "\"No, I like you\"",
                    "\"We're just friends\"",
                    "\"Why, are you jealous too?\""
                ]
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hey, be honest with me. Are you dating Seoyeon? Or Yuna? I know they're both interested in you.\"",
                "choices": [
                    "\"No, I like you\"",
                    "\"We're just friends\"",
                    "\"Why, are you jealous too?\""
                ]
            }
        }
    },
    "day3_lunch_dain_confess": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_shy.png",
        "stats": {
            "Dain": {
                "affinity": 10
            }
        },
        "next": "day3_lunch_dain_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"뭐, 뭐라고?! 갑자기 그런 말 하면... 아, 진짜!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"W-what?! Saying that out of nowhere... Geez!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"W-what?! Saying that out of nowhere... Geez!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"W-what?! Saying that out of nowhere... Geez!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"W-what?! Saying that out of nowhere... Geez!\""
            }
        }
    },
    "day3_lunch_dain_friends": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "stats": {
            "Dain": {
                "affinity": 2
            }
        },
        "next": "day3_lunch_dain_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"흠~ 정말? 근데 걔네 표정은 그게 아닌데... 뭐, 상관없지만!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hmm, really? Their faces say otherwise though... Well, whatever!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Hmm, really? Their faces say otherwise though... Well, whatever!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Hmm, really? Their faces say otherwise though... Well, whatever!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hmm, really? Their faces say otherwise though... Well, whatever!\""
            }
        }
    },
    "day3_lunch_dain_jealous_tease": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_shy.png",
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day3_lunch_dain_serious",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"하?! 누가 질투래! 난 그냥 궁금한 거야! ...조금 신경 쓰이긴 하지만!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Huh?! Who's jealous! I'm just curious! ...Maybe a little bothered though!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Huh?! Who's jealous! I'm just curious! ...Maybe a little bothered though!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Huh?! Who's jealous! I'm just curious! ...Maybe a little bothered though!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Huh?! Who's jealous! I'm just curious! ...Maybe a little bothered though!\""
            }
        }
    },
    "day3_lunch_dain_serious": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "day3_lunch_dain_serious_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*갑자기 젓가락을 멈추고 조용히* \"...{name}. 나 진지하게 물어볼게.\""
            },
            "en": {
                "name": "Dain",
                "text": "*Suddenly putting down her chopsticks, quietly* \"...{name}. Let me ask you something seriously.\""
            },
            "es": {
                "name": "Dain",
                "text": "*Suddenly putting down her chopsticks, quietly* \"...{name}. Let me ask you something seriously.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*Suddenly putting down her chopsticks, quietly* \"...{name}. Let me ask you something seriously.\""
            },
            "fr": {
                "name": "Dain",
                "text": "*Suddenly putting down her chopsticks, quietly* \"...{name}. Let me ask you something seriously.\""
            }
        }
    },
    "day3_lunch_dain_serious_2": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "day3_lunch_dain_serious_choice",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"...나를 어떻게 생각해? 그냥 친구? 아니면... 다른 뭔가?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...What am I to you? Just a friend? Or... something else?\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...What am I to you? Just a friend? Or... something else?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"...What am I to you? Just a friend? Or... something else?\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"...What am I to you? Just a friend? Or... something else?\""
            }
        }
    },
    "day3_lunch_dain_serious_choice": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_shy.png",
        "choices": [
            {
                "next": "day3_lunch_dain_special",
                "stats": {
                    "Dain": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day3_lunch_dain_unsure",
                "stats": {
                    "Dain": {
                        "affinity": 2
                    }
                }
            },
            {
                "next": "day3_lunch_dain_friend",
                "stats": {
                    "Dain": {
                        "affinity": -5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이의 눈이 평소와 다르다. 진지하다.*",
                "choices": [
                    "\"다인이는 특별해\"",
                    "\"아직 모르겠어\"",
                    "\"소중한 친구\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Dain's eyes are different from usual. She's serious.*",
                "choices": [
                    "\"You're special, Dain\"",
                    "\"I'm not sure yet\"",
                    "\"A precious friend\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Dain's eyes are different from usual. She's serious.*",
                "choices": [
                    "\"You're special, Dain\"",
                    "\"I'm not sure yet\"",
                    "\"A precious friend\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*Dain's eyes are different from usual. She's serious.*",
                "choices": [
                    "\"You're special, Dain\"",
                    "\"I'm not sure yet\"",
                    "\"A precious friend\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain's eyes are different from usual. She's serious.*",
                "choices": [
                    "\"You're special, Dain\"",
                    "\"I'm not sure yet\"",
                    "\"A precious friend\""
                ]
            }
        }
    },
    "day3_lunch_dain_special": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "day3_lunch_dain_freetalk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*얼굴이 새빨개지며 주먹으로 때린다* \"아, 아아! 진짜?! 야, 나 심장 터지는 줄 알았잖아!\""
            },
            "en": {
                "name": "Dain",
                "text": "*Her face turns beet red and she punches my arm* \"Wh-what?! Really?! My heart almost exploded, you know!\""
            },
            "es": {
                "name": "Dain",
                "text": "*Her face turns beet red and she punches my arm* \"Wh-what?! Really?! My heart almost exploded, you know!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*Her face turns beet red and she punches my arm* \"Wh-what?! Really?! My heart almost exploded, you know!\""
            },
            "fr": {
                "name": "Dain",
                "text": "*Her face turns beet red and she punches my arm* \"Wh-what?! Really?! My heart almost exploded, you know!\""
            }
        }
    },
    "day3_lunch_dain_unsure": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "day3_lunch_dain_freetalk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*살짝 실망한 표정을 짓다가 바로 밝아진다* \"...그래! 그럼 내가 특별해지는 거 보여줄게! 두고 봐!\""
            },
            "en": {
                "name": "Dain",
                "text": "*Looking slightly disappointed but quickly brightening up* \"...Fine! Then I'll show you how special I can be! Just watch!\""
            },
            "es": {
                "name": "Dain",
                "text": "*Looking slightly disappointed but quickly brightening up* \"...Fine! Then I'll show you how special I can be! Just watch!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*Looking slightly disappointed but quickly brightening up* \"...Fine! Then I'll show you how special I can be! Just watch!\""
            },
            "fr": {
                "name": "Dain",
                "text": "*Looking slightly disappointed but quickly brightening up* \"...Fine! Then I'll show you how special I can be! Just watch!\""
            }
        }
    },
    "day3_lunch_dain_friend": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "day3_lunch_dain_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*순간 다인이의 표정이 굳어졌다가 억지로 웃는다* \"...아하, 그래? 친구. 그래, 친구지. 하하!\""
            },
            "en": {
                "name": "Dain",
                "text": "*Her expression freezes for a moment before she forces a laugh* \"...Ahaha, right? A friend. Yeah, friends. Haha!\""
            },
            "es": {
                "name": "Dain",
                "text": "*Her expression freezes for a moment before she forces a laugh* \"...Ahaha, right? A friend. Yeah, friends. Haha!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*Her expression freezes for a moment before she forces a laugh* \"...Ahaha, right? A friend. Yeah, friends. Haha!\""
            },
            "fr": {
                "name": "Dain",
                "text": "*Her expression freezes for a moment before she forces a laugh* \"...Ahaha, right? A friend. Yeah, friends. Haha!\""
            }
        }
    },
    "day3_lunch_dain_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_shy.png",
        "maxTurns": 3,
        "next": "day3_lunch_dain_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이와 급식실 한쪽에 나란히 앉아 이야기를 나눈다. 다인이가 평소보다 수줍어하다.*",
                "context": "다인이와 점심 대화 중. 다인이가 '나를 어떻게 생각해?'라고 진지하게 물어봄. 평소의 활발함 대신 수줍어하는 모습."
            },
            "en": {
                "name": "Me",
                "text": "*Sitting side by side with Dain in the cafeteria, chatting. She's shier than usual.*",
                "context": "Having lunch with Dain. She asked 'What am I to you?' seriously. She's being shy instead of her usual energetic self."
            },
            "es": {
                "name": "Yo",
                "text": "*Sitting side by side with Dain in the cafeteria, chatting. She's shier than usual.*",
                "context": "Almorzando con Dain. Preguntó '¿Qué soy para ti?' en serio. Está siendo tímida en lugar de su usual yo enérgico."
            },
            "ja": {
                "name": "僕",
                "text": "*Sitting side by side with Dain in the cafeteria, chatting. She's shier than usual.*",
                "context": "ダインとランチ中。ダインが「私のこと、どう思ってる？」と真剣に聞いてきた。いつもの活発さの代わりに恥ずかしがっている。"
            },
            "fr": {
                "name": "Moi",
                "text": "*Sitting side by side with Dain in the cafeteria, chatting. She's shier than usual.*",
                "context": "Having lunch with Dain. She asked 'What am I to you?' seriously. She's being shy instead of her usual energetic self."
            }
        }
    },
    "day3_lunch_dain_end": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "branches": [
            {
                "next": "day3_lunch_dain_conflict",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_lunch_dain_promise"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"어쨌든! 내일 연습 보러 올 거지? 꼭 와야 해!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Anyway! You're coming to my practice tomorrow, right? You better come!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Anyway! You're coming to my practice tomorrow, right? You better come!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Anyway! You're coming to my practice tomorrow, right? You better come!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Anyway! You're coming to my practice tomorrow, right? You better come!\""
            }
        }
    },
    "day3_lunch_dain_conflict": {
        "choices": [
            {
                "next": "day3_lunch_dain_promise"
            },
            {
                "next": "day3_lunch_dain_maybe"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*내일... 다른 약속도 있는데...*",
                "choices": [
                    "\"당연하지!\"",
                    "\"시간이 되면...\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Tomorrow... I have other plans too...*",
                "choices": [
                    "\"Of course!\"",
                    "\"If I have time...\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Tomorrow... I have other plans too...*",
                "choices": [
                    "\"Of course!\"",
                    "\"If I have time...\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*Tomorrow... I have other plans too...*",
                "choices": [
                    "\"Of course!\"",
                    "\"If I have time...\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Tomorrow... I have other plans too...*",
                "choices": [
                    "\"Of course!\"",
                    "\"If I have time...\""
                ]
            }
        }
    },
    "day3_lunch_dain_promise": {
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "fade": true,
        "next": "day3_afternoon_start",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"좋아! 기대할게! 내 멋진 스파이크 보여줄 테니까!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Great! Look forward to it! I'll show you my amazing spike!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Great! Look forward to it! I'll show you my amazing spike!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Great! Look forward to it! I'll show you my amazing spike!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Great! Look forward to it! I'll show you my amazing spike!\""
            }
        }
    },
    "day3_lunch_dain_maybe": {
        "character": "assets/images/characters/dain_sad.png",
        "stats": {
            "Dain": {
                "affinity": -3
            }
        },
        "next": "day3_lunch_dain_suspicious",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"...뭐야, 시간이 되면? 다른 약속 있어?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...What, if you have time? Do you have other plans?\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...What, if you have time? Do you have other plans?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"...What, if you have time? Do you have other plans?\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"...What, if you have time? Do you have other plans?\""
            }
        }
    },
    "day3_lunch_dain_suspicious": {
        "character": "assets/images/characters/dain_normal.png",
        "fade": true,
        "next": "day3_afternoon_start",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"흥, 알았어. 근데 바람 맞추면 나 진짜 화낼 거야!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hmph, fine. But if you stand me up, I'll be really mad!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Hmph, fine. But if you stand me up, I'll be really mad!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Hmph, fine. But if you stand me up, I'll be really mad!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hmph, fine. But if you stand me up, I'll be really mad!\""
            }
        }
    },
    "day3_lunch_together_propose": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day3_lunch_together_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"다, 다 같이 먹으면 안 돼?\""
            },
            "en": {
                "name": "Me",
                "text": "\"C-can't we all eat together?\""
            },
            "es": {
                "name": "Yo",
                "text": "\"C-can't we all eat together?\""
            },
            "ja": {
                "name": "僕",
                "text": "\"C-can't we all eat together?\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"C-can't we all eat together?\""
            }
        }
    },
    "day3_lunch_together_react": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day3_lunch_together_awkward",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*순간 정적이 흐른다. 세 명의 시선이 서로를 훑는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A moment of silence. Three pairs of eyes scan each other.*"
            },
            "es": {
                "name": "Yo",
                "text": "*A moment of silence. Three pairs of eyes scan each other.*"
            },
            "ja": {
                "name": "僕",
                "text": "*A moment of silence. Three pairs of eyes scan each other.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*A moment of silence. Three pairs of eyes scan each other.*"
            }
        }
    },
    "day3_lunch_together_awkward": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day3_lunch_together_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...그래, 뭐. 다 같이 먹지.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Fine. Let's all eat together.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Fine. Let's all eat together.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"...Fine. Let's all eat together.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Fine. Let's all eat together.\""
            }
        }
    },
    "day3_lunch_together_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/store.png",
        "next": "day3_lunch_together_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*급식실에서의 점심. 분위기가 묘하게 살벌하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Lunch in the cafeteria. The atmosphere is unusually tense.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Lunch in the cafeteria. The atmosphere is unusually tense.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Lunch in the cafeteria. The atmosphere is unusually tense.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Lunch in the cafeteria. The atmosphere is unusually tense.*"
            }
        }
    },
    "day3_lunch_together_3": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "day3_lunch_together_4",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야, {name}. 내일 배구 연습 보러 올 거지?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey, {name}. You're coming to see my volleyball practice tomorrow, right?\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Hey, {name}. You're coming to see my volleyball practice tomorrow, right?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Hey, {name}. You're coming to see my volleyball practice tomorrow, right?\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hey, {name}. You're coming to see my volleyball practice tomorrow, right?\""
            }
        }
    },
    "day3_lunch_together_4": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            {
                "next": "day3_lunch_together_yuna",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_lunch_together_explosion"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"어? {name} 내일 나랑 약속 있는데?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Huh? {name} has plans with me tomorrow?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Huh? {name} has plans with me tomorrow?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"Huh? {name} has plans with me tomorrow?\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Huh? {name} has plans with me tomorrow?\""
            }
        }
    },
    "day3_lunch_together_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_together_explosion",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...{name}은 나랑 약속했어. 내일 밤.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...{name} promised me. Tomorrow night.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...{name} promised me. Tomorrow night.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...{name} promised me. Tomorrow night.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...{name} promised me. Tomorrow night.\""
            }
        }
    },
    "day3_lunch_together_explosion": {
        "character": "assets/images/characters/yuna_normal.png",
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
        },
        "setFlag": "day3_caught_multiple_dates",
        "next": "day3_lunch_together_silence",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*공기가 급속도로 얼어붙는다. 모두의 시선이 나에게 쏠린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The air freezes rapidly. All eyes are on me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*The air freezes rapidly. All eyes are on me.*"
            },
            "ja": {
                "name": "僕",
                "text": "*The air freezes rapidly. All eyes are on me.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*The air freezes rapidly. All eyes are on me.*"
            }
        }
    },
    "day3_lunch_together_silence": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_together_seoyeon_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*답답한 정적이 흐른다. 서연이의 손이 떨리고, 유나의 눈이 어두워지고, 다인이의 표정이 굳어졌다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A suffocating silence fills the air. Seoyeon's hands are trembling, Yuna's eyes darken, and Dain's expression hardens.*"
            },
            "es": {
                "name": "Yo",
                "text": "*A suffocating silence fills the air. Seoyeon's hands are trembling, Yuna's eyes darken, and Dain's expression hardens.*"
            },
            "ja": {
                "name": "僕",
                "text": "*A suffocating silence fills the air. Seoyeon's hands are trembling, Yuna's eyes darken, and Dain's expression hardens.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*A suffocating silence fills the air. Seoyeon's hands are trembling, Yuna's eyes darken, and Dain's expression hardens.*"
            }
        }
    },
    "day3_lunch_together_seoyeon_react": {
        "character": "assets/images/characters/seyoun_sad.png",
        "stats": {
            "Seoyeon": {
                "affinity": -3
            }
        },
        "next": "day3_lunch_together_yuna_lie",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*천천히 숟가락을 내려놓으며* \"...그러니까. 나만 특별한 게 아니었네?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Slowly putting down her spoon* \"...So. I wasn't the only special one.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Slowly putting down her spoon* \"...So. I wasn't the only special one.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*Slowly putting down her spoon* \"...So. I wasn't the only special one.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Slowly putting down her spoon* \"...So. I wasn't the only special one.\""
            }
        }
    },
    "day3_lunch_together_yuna_lie": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_together_yuna_lie_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*자리에서 일어서며* \"...나는 알고 있었어. {name}이 나한테만 약속한 게 아니라는 거.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Standing up* \"...I knew. That {name} didn't only promise me.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Standing up* \"...I knew. That {name} didn't only promise me.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*Standing up* \"...I knew. That {name} didn't only promise me.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "*Standing up* \"...I knew. That {name} didn't only promise me.\""
            }
        }
    },
    "day3_lunch_together_yuna_lie_2": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day3_lunch_together_yuna_lie_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"...정말? 그럼 왜 알면서 왔어?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Huh? Really? Then why did you come knowing that?!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Huh? Really? Then why did you come knowing that?!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Huh? Really? Then why did you come knowing that?!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Huh? Really? Then why did you come knowing that?!\""
            }
        }
    },
    "day3_lunch_together_yuna_lie_3": {
        "character": "assets/images/characters/yuna_sad.png",
        "stats": {
            "Yuna": {
                "affinity": -3
            }
        },
        "setFlag": "day3_yuna_lied",
        "next": "day3_lunch_together_confront",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*나를 차갑게 바라보며* \"...거짓말이야. 나도 몰랐어. 그냥... 다른 애들 앞에서 울고 싶지 않았을 뿐이야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Looking at me coldly* \"...That was a lie. I didn't know either. I just... didn't want to cry in front of the others.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Looking at me coldly* \"...That was a lie. I didn't know either. I just... didn't want to cry in front of the others.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*Looking at me coldly* \"...That was a lie. I didn't know either. I just... didn't want to cry in front of the others.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "*Looking at me coldly* \"...That was a lie. I didn't know either. I just... didn't want to cry in front of the others.\""
            }
        }
    },
    "day3_lunch_together_confront": {
        "character": "assets/images/characters/seyoun_sad.png",
        "choices": [
            {
                "next": "day3_lunch_apologize",
                "stats": {
                    "Seoyeon": {
                        "affinity": -8
                    },
                    "Yuna": {
                        "affinity": -8
                    },
                    "Dain": {
                        "affinity": -8
                    }
                }
            },
            {
                "next": "day3_lunch_excuse",
                "stats": {
                    "Seoyeon": {
                        "affinity": -15
                    },
                    "Yuna": {
                        "affinity": -15
                    },
                    "Dain": {
                        "affinity": -15
                    }
                }
            },
            {
                "next": "day3_lunch_run",
                "stats": {
                    "Seoyeon": {
                        "affinity": -20
                    },
                    "Yuna": {
                        "affinity": -20
                    },
                    "Dain": {
                        "affinity": -20
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"잠깐... {name}, 너 우리한테 다 약속한 거야?\"",
                "choices": [
                    "솔직하게 사과한다",
                    "시간대가 다르다고 변명한다",
                    "도망친다"
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Wait... {name}, did you make promises with all of us?\"",
                "choices": [
                    "Apologize honestly",
                    "Make excuses about different times",
                    "Run away"
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Wait... {name}, did you make promises with all of us?\"",
                "choices": [
                    "Apologize honestly",
                    "Make excuses about different times",
                    "Run away"
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"Wait... {name}, did you make promises with all of us?\"",
                "choices": [
                    "Apologize honestly",
                    "Make excuses about different times",
                    "Run away"
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Wait... {name}, did you make promises with all of us?\"",
                "choices": [
                    "Apologize honestly",
                    "Make excuses about different times",
                    "Run away"
                ]
            }
        }
    },
    "day3_lunch_apologize": {
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "day3_lunch_apologize_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"미안해... 다들 거절하기가 어려워서...\""
            },
            "en": {
                "name": "Me",
                "text": "\"I'm sorry... I couldn't say no to anyone...\""
            },
            "es": {
                "name": "Yo",
                "text": "\"I'm sorry... I couldn't say no to anyone...\""
            },
            "ja": {
                "name": "僕",
                "text": "\"I'm sorry... I couldn't say no to anyone...\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"I'm sorry... I couldn't say no to anyone...\""
            }
        }
    },
    "day3_lunch_apologize_react": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day3_lunch_together_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"...솔직한 건 좋은데, 좀 짜증나네.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Being honest is good, but still annoying.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...Being honest is good, but still annoying.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"...Being honest is good, but still annoying.\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"...Being honest is good, but still annoying.\""
            }
        }
    },
    "day3_lunch_excuse": {
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "day3_lunch_excuse_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"아, 시간대가 다 달라서... 다인이는 아침, 다른 약속은 오후니까...\""
            },
            "en": {
                "name": "Me",
                "text": "\"Well, the times are all different... Dain's in the morning, others in the evening...\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Well, the times are all different... Dain's in the morning, others in the evening...\""
            },
            "ja": {
                "name": "僕",
                "text": "\"Well, the times are all different... Dain's in the morning, others in the evening...\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Well, the times are all different... Dain's in the morning, others in the evening...\""
            }
        }
    },
    "day3_lunch_excuse_react": {
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "day3_lunch_excuse_react_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"그게 문제가 아니라... 아, 몰라. 나도 헷갈려.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"That's not the problem... Ugh, I don't know. I'm confused too.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"That's not the problem... Ugh, I don't know. I'm confused too.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"That's not the problem... Ugh, I don't know. I'm confused too.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"That's not the problem... Ugh, I don't know. I'm confused too.\""
            }
        }
    },
    "day3_lunch_excuse_react_2": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day3_lunch_excuse_react_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"음... 시간 관리를 잘하면 되는 거 아냐? 나는 괜찮은데.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hmm... can't you just manage your time well? I'm fine with it.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Hmm... can't you just manage your time well? I'm fine with it.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Hmm... can't you just manage your time well? I'm fine with it.\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hmm... can't you just manage your time well? I'm fine with it.\""
            }
        }
    },
    "day3_lunch_excuse_react_3": {
        "character": "assets/images/characters/yuna_sad.png",
        "stats": {
            "Yuna": {
                "affinity": -5
            }
        },
        "setFlag": "day3_yuna_hurt",
        "next": "day3_lunch_together_end",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...너 같은 애는 그래도 되겠지. 하지만 나는...(일어선다) 먼저 갈게.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Someone like you might be fine with that. But I... (stands up) I'm leaving first.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Someone like you might be fine with that. But I... (stands up) I'm leaving first.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...Someone like you might be fine with that. But I... (stands up) I'm leaving first.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Someone like you might be fine with that. But I... (stands up) I'm leaving first.\""
            }
        }
    },
    "day3_lunch_run": {
        "character": "assets/images/characters/seyoun_sad.png",
        "setFlag": "day3_lunch_escaped",
        "fade": true,
        "next": "day3_afternoon_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*밥을 급하게 먹고 도망치듯 자리를 피했다. 최악의 선택이었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I hurriedly finished my food and escaped. That was the worst choice.*"
            },
            "es": {
                "name": "Yo",
                "text": "*I hurriedly finished my food and escaped. That was the worst choice.*"
            },
            "ja": {
                "name": "僕",
                "text": "*I hurriedly finished my food and escaped. That was the worst choice.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*I hurriedly finished my food and escaped. That was the worst choice.*"
            }
        }
    },
    "day3_lunch_together_end": {
        "character": "assets/images/characters/dain_normal.png",
        "fade": true,
        "next": "day3_afternoon_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어색한 분위기 속에서 점심시간이 끝났다. 주말이 걱정된다...*"
            },
            "en": {
                "name": "Me",
                "text": "*Lunch ended in an awkward atmosphere. I'm worried about the weekend...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Lunch ended in an awkward atmosphere. I'm worried about the weekend...*"
            },
            "ja": {
                "name": "僕",
                "text": "*Lunch ended in an awkward atmosphere. I'm worried about the weekend...*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Lunch ended in an awkward atmosphere. I'm worried about the weekend...*"
            }
        }
    },
    "day3_lunch_escape": {
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlag": "day3_lunch_escaped",
        "next": "day3_lunch_escape_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"아, 나 갑자기 할 일이 생각났어! 먼저 갈게!\""
            },
            "en": {
                "name": "Me",
                "text": "\"Oh, I just remembered something I need to do! See you later!\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Oh, I just remembered something I need to do! See you later!\""
            },
            "ja": {
                "name": "僕",
                "text": "\"Oh, I just remembered something I need to do! See you later!\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Oh, I just remembered something I need to do! See you later!\""
            }
        }
    },
    "day3_lunch_escape_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "fade": true,
        "next": "day3_afternoon_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*도망치듯 교실을 빠져나왔다. 뒤에서 한숨 소리가 들리는 것 같다...*"
            },
            "en": {
                "name": "Me",
                "text": "*I escaped the classroom as if running away. I think I heard sighs behind me...*"
            },
            "es": {
                "name": "Yo",
                "text": "*I escaped the classroom as if running away. I think I heard sighs behind me...*"
            },
            "ja": {
                "name": "僕",
                "text": "*I escaped the classroom as if running away. I think I heard sighs behind me...*"
            },
            "fr": {
                "name": "Moi",
                "text": "*I escaped the classroom as if running away. I think I heard sighs behind me...*"
            }
        }
    },
    "day3_lunch_single_approach": {
        "choices": [
            {
                "next": "day3_lunch_seoyeon_only",
                "condition": "has_number_seyoun"
            },
            {
                "next": "day3_lunch_yuna_only",
                "condition": "has_number_yuna"
            },
            {
                "next": "day3_lunch_dain_only",
                "condition": "has_number_dain"
            },
            {
                "next": "day3_lunch_nurse",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_lunch_teacher",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_lunch_alone"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*점심시간이다. 누구와 먹을까?*",
                "choices": [
                    "서연이와 먹는다",
                    "유나와 먹는다",
                    "다인이와 먹는다",
                    "보건실에 간다",
                    "담임선생님을 찾는다",
                    "혼자 먹는다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*It's lunch time. Who should I eat with?*",
                "choices": [
                    "Eat with Seoyeon",
                    "Eat with Yuna",
                    "Eat with Dain",
                    "Visit the nurse's office",
                    "Find the homeroom teacher",
                    "Eat alone"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*It's lunch time. Who should I eat with?*",
                "choices": [
                    "Eat with Seoyeon",
                    "Eat with Yuna",
                    "Eat with Dain",
                    "Visit the nurse's office",
                    "Find the homeroom teacher",
                    "Eat alone"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*It's lunch time. Who should I eat with?*",
                "choices": [
                    "Eat with Seoyeon",
                    "Eat with Yuna",
                    "Eat with Dain",
                    "Visit the nurse's office",
                    "Find the homeroom teacher",
                    "Eat alone"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*It's lunch time. Who should I eat with?*",
                "choices": [
                    "Eat with Seoyeon",
                    "Eat with Yuna",
                    "Eat with Dain",
                    "Visit the nurse's office",
                    "Find the homeroom teacher",
                    "Eat alone"
                ]
            }
        }
    },
    "day3_lunch_nurse": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlag": "day3_lunch_with_nurse",
        "next": "day3_lunch_nurse_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*점심시간을 맞아 보건실로 향했다. 선생님이 자리에서 샌드위치를 먹고 계신다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I headed to the nurse's office during lunch. The teacher is eating a sandwich at her desk.*"
            },
            "es": {
                "name": "Yo",
                "text": "*I headed to the nurse's office during lunch. The teacher is eating a sandwich at her desk.*"
            },
            "ja": {
                "name": "僕",
                "text": "*I headed to the nurse's office during lunch. The teacher is eating a sandwich at her desk.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*I headed to the nurse's office during lunch. The teacher is eating a sandwich at her desk.*"
            }
        }
    },
    "day3_lunch_nurse_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day3_lunch_nurse_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*나를 보고 만면에 미소 짓는다* \"어머, 우리 {name} 왔네? 밥 먹었어? 선생님이랑 같이 먹을래?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*Beaming when she sees me* \"Oh my, {name}! Have you eaten? Want to eat with teacher?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*Beaming when she sees me* \"Oh my, {name}! Have you eaten? Want to eat with teacher?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*Beaming when she sees me* \"Oh my, {name}! Have you eaten? Want to eat with teacher?\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Beaming when she sees me* \"Oh my, {name}! Have you eaten? Want to eat with teacher?\""
            }
        }
    },
    "day3_lunch_nurse_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day3_lunch_nurse_freetalk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*문을 잠그고* \"사실... 둘만의 시간을 좀 가지고 싶었어. 애들 눈치 보는 것도 지치잖아.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*Locking the door* \"Actually... I wanted some time alone with you. Watching out for the kids is exhausting.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*Locking the door* \"Actually... I wanted some time alone with you. Watching out for the kids is exhausting.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*Locking the door* \"Actually... I wanted some time alone with you. Watching out for the kids is exhausting.\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Locking the door* \"Actually... I wanted some time alone with you. Watching out for the kids is exhausting.\""
            }
        }
    },
    "day3_lunch_nurse_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "maxTurns": 3,
        "next": "day3_lunch_nurse_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건실에서 선생님과 둘이 점심을 먹는다. 비밀스러운 분위기에 심장이 뛰었다.*",
                "context": "보건실에서 보건선생님과 단둘이 점심 먹는 중. 선생님이 문을 잠갔다. 비밀 데이트 같은 분위기. 금지된 사랑의 설렘."
            },
            "en": {
                "name": "Me",
                "text": "*Having lunch together in the nurse's office. My heart races at the secretive atmosphere.*",
                "context": "Having lunch alone with the school nurse in her office. She locked the door. It's like a secret date. The thrill of a forbidden love."
            },
            "es": {
                "name": "Yo",
                "text": "*Having lunch together in the nurse's office. My heart races at the secretive atmosphere.*",
                "context": "Almorzando a solas con la enfermera en su oficina. Cerró la puerta con llave. Es como una cita secreta. La emoción de un amor prohibido."
            },
            "ja": {
                "name": "僕",
                "text": "*Having lunch together in the nurse's office. My heart races at the secretive atmosphere.*",
                "context": "保健室で保健先生と二人きりでランチ中。先生がドアに鍵をかけた。秘密のデートのような雰囲気。禁断の恋のときめき。"
            },
            "fr": {
                "name": "Moi",
                "text": "*Having lunch together in the nurse's office. My heart races at the secretive atmosphere.*",
                "context": "Having lunch alone with the school nurse in her office. She locked the door. It's like a secret date. The thrill of a forbidden love."
            }
        }
    },
    "day3_lunch_nurse_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "fade": true,
        "next": "day3_afternoon_start",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*시계를 보며 한숨* \"...시간 다 됐네. 수업 들어가. 일요일에 보자.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*Glancing at the clock with a sigh* \"...Time's up. Get to class. See you Sunday.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*Glancing at the clock with a sigh* \"...Time's up. Get to class. See you Sunday.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*Glancing at the clock with a sigh* \"...Time's up. Get to class. See you Sunday.\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Glancing at the clock with a sigh* \"...Time's up. Get to class. See you Sunday.\""
            }
        }
    },
    "day3_lunch_teacher": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlag": "day3_lunch_with_teacher",
        "next": "day3_lunch_teacher_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*점심시간에 담임선생님을 찾아 교무실에 갔다. 선생님이 혼자 커피를 마시고 계신다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I visited the teachers' office during lunch. The teacher is having coffee alone.*"
            },
            "es": {
                "name": "Yo",
                "text": "*I visited the teachers' office during lunch. The teacher is having coffee alone.*"
            },
            "ja": {
                "name": "僕",
                "text": "*I visited the teachers' office during lunch. The teacher is having coffee alone.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*I visited the teachers' office during lunch. The teacher is having coffee alone.*"
            }
        }
    },
    "day3_lunch_teacher_2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_shy.png",
        "stats": {
            "Teacher": {
                "affinity": 5
            }
        },
        "next": "day3_lunch_teacher_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*나를 보고 당황하다가 밝아진다* \"…{name}? 어쩐 일이야? 선생님 점심시간인데...\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*Surprised to see me, then brightening up* \"...{name}? What brings you here? It's my lunch break...\""
            },
            "es": {
                "name": "Profesora",
                "text": "*Surprised to see me, then brightening up* \"...{name}? What brings you here? It's my lunch break...\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*Surprised to see me, then brightening up* \"...{name}? What brings you here? It's my lunch break...\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Surprised to see me, then brightening up* \"...{name}? What brings you here? It's my lunch break...\""
            }
        }
    },
    "day3_lunch_teacher_3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "day3_lunch_teacher_freetalk",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*볼을 붉히며* \"...들어와. 문 닫고.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*Blushing* \"...Come in. Close the door.\""
            },
            "es": {
                "name": "Profesora",
                "text": "*Blushing* \"...Come in. Close the door.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*Blushing* \"...Come in. Close the door.\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Blushing* \"...Come in. Close the door.\""
            }
        }
    },
    "day3_lunch_teacher_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_shy.png",
        "maxTurns": 3,
        "next": "day3_lunch_teacher_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교무실에서 담임선생님과 둘이 점심을 먹는다.*",
                "context": "교무실에서 담임선생님과 단둘이 점심 먹는 중. 선생님이 수줍어하며 문을 닫았다. 비밀 데이트 분위기."
            },
            "en": {
                "name": "Me",
                "text": "*Having lunch with the homeroom teacher in the teachers' office.*",
                "context": "Having lunch alone with the homeroom teacher in her office. She shyly closed the door. Secret date atmosphere."
            },
            "es": {
                "name": "Yo",
                "text": "*Having lunch with the homeroom teacher in the teachers' office.*",
                "context": "Almorzando a solas con la profesora en su oficina. Cerró la puerta tímidamente. Ambiente de cita secreta."
            },
            "ja": {
                "name": "僕",
                "text": "*Having lunch with the homeroom teacher in the teachers' office.*",
                "context": "教務室で担任先生と二人きりでランチ中。先生が恥ずかしそうにドアを閉めた。秘密のデートの雰囲気。"
            },
            "fr": {
                "name": "Moi",
                "text": "*Having lunch with the homeroom teacher in the teachers' office.*",
                "context": "Having lunch alone with the homeroom teacher in her office. She shyly closed the door. Secret date atmosphere."
            }
        }
    },
    "day3_lunch_teacher_4": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_shy.png",
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "fade": true,
        "next": "day3_afternoon_start",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*커피잔을 내려놓으며* \"...이러면 안 되는데. 학생이 선생님 점심시간에 찾아오고, 선생님은 그게 좋고. 이게 말이 돼?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*Putting down her coffee cup* \"...This shouldn't be happening. A student coming to spend lunch with a teacher, and the teacher enjoying it. Does that even make sense?\""
            },
            "es": {
                "name": "Profesora",
                "text": "*Putting down her coffee cup* \"...This shouldn't be happening. A student coming to spend lunch with a teacher, and the teacher enjoying it. Does that even make sense?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*Putting down her coffee cup* \"...This shouldn't be happening. A student coming to spend lunch with a teacher, and the teacher enjoying it. Does that even make sense?\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Putting down her coffee cup* \"...This shouldn't be happening. A student coming to spend lunch with a teacher, and the teacher enjoying it. Does that even make sense?\""
            }
        }
    },
    "day3_lunch_seoyeon_only": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "background": "assets/images/background/store.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "setFlag": "day3_lunch_with_seoyeon",
        "next": "day3_lunch_seoyeon_weekend",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"{name}! 같이 밥 먹자!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"{name}! Let's eat together!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"{name}! Let's eat together!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"{name}! Let's eat together!\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"{name}! Let's eat together!\""
            }
        }
    },
    "day3_lunch_yuna_only": {
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "setFlag": "day3_lunch_with_yuna",
        "next": "day3_lunch_yuna_rooftop",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...{name}. 옥상.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...{name}. Rooftop.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...{name}. Rooftop.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"...{name}. Rooftop.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...{name}. Rooftop.\""
            }
        }
    },
    "day3_lunch_dain_only": {
        "character": "assets/images/characters/dain_laugh.png",
        "background": "assets/images/background/store.png",
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "setFlag": "day3_lunch_with_dain",
        "next": "day3_lunch_dain_talk_1",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"밥 먹으러 가자! 오늘 치킨이래!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Let's go eat! Today's chicken day!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Let's go eat! Today's chicken day!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"Let's go eat! Today's chicken day!\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Let's go eat! Today's chicken day!\""
            }
        }
    },
    "day3_lunch_normal": {
        "background": "assets/images/background/store.png",
        "next": "day3_lunch_normal_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*특별한 약속도 없고... 오늘은 평범하게 점심을 먹어야겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*No special plans... I'll just have a normal lunch today.*"
            },
            "es": {
                "name": "Yo",
                "text": "*No special plans... I'll just have a normal lunch today.*"
            },
            "ja": {
                "name": "僕",
                "text": "*No special plans... I'll just have a normal lunch today.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*No special plans... I'll just have a normal lunch today.*"
            }
        }
    },
    "day3_lunch_normal_2": {
        "background": "assets/images/background/store.png",
        "next": "day3_lunch_alone",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*주변에서 웃음소리가 들린다. 다들 친구들과 즐거워 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I hear laughter around me. Everyone looks happy with their friends.*"
            },
            "es": {
                "name": "Yo",
                "text": "*I hear laughter around me. Everyone looks happy with their friends.*"
            },
            "ja": {
                "name": "僕",
                "text": "*I hear laughter around me. Everyone looks happy with their friends.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*I hear laughter around me. Everyone looks happy with their friends.*"
            }
        }
    },
    "day3_lunch_alone": {
        "background": "assets/images/background/store.png",
        "fade": true,
        "next": "day3_afternoon_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*혼자 조용히 점심을 먹었다. 주말에는 뭘 할까...*"
            },
            "en": {
                "name": "Me",
                "text": "*I quietly ate lunch alone. What should I do this weekend...*"
            },
            "es": {
                "name": "Yo",
                "text": "*I quietly ate lunch alone. What should I do this weekend...*"
            },
            "ja": {
                "name": "僕",
                "text": "*I quietly ate lunch alone. What should I do this weekend...*"
            },
            "fr": {
                "name": "Moi",
                "text": "*I quietly ate lunch alone. What should I do this weekend...*"
            }
        }
    }
});
