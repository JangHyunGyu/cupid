/**
 * ============================================================================
 * CUPID - day4_2_lunch (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day4_2_lunch.js + en_day4_2_lunch.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

Object.assign(SCENARIO[4], {
    "day4_arrive": {
        "background": "assets/images/background/street.png",
        "character": null,
        "bgm": "date.mp3",
        "next": "day4_arrive_nervous",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*약속 장소에 도착했다. 아직 시간이 조금 이르네.*"
            },
            "en": {
                "name": "Me",
                "text": "*I arrived at the meeting spot. I'm a bit early.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Llegué al punto de encuentro. Estoy un poco temprano.*"
            },
            "ja": {
                "name": "僕",
                "text": "*約束の場所に着いた。まだちょっと早いな。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je suis arrivé au point de rendez-vous. Je suis un peu en avance.*"
            }
        }
    },
    "day4_arrive_nervous": {
        "background": "assets/images/background/street.png",
        "next": "day4_arrive_people",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*주머니에 넣은 손이 축축하다. 왜 이렇게 긴장되는 거지… 심호흡 좀 하자.*"
            },
            "en": {
                "name": "Me",
                "text": "*My hands are sweaty in my pockets. Why am I so nervous... Let me take a deep breath.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mis manos están sudorosas en los bolsillos. ¿Por qué estoy tan nervioso...? Déjame respirar profundo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ポケットの中の手が汗ばんでいる。なんでこんなに緊張するんだろう…深呼吸しよう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mes mains sont moites dans mes poches. Pourquoi suis-je si nerveux... Laisse-moi prendre une grande inspiration.*"
            }
        }
    },
    "day4_arrive_people": {
        "background": "assets/images/background/street.png",
        "next": "day4_arrive_phone",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*주변을 둘러본다. 거리에는 웃으며 걷는 커플들, 아이스크림을 먹는 가족, 강아지를 산책시키는 사람…*"
            },
            "en": {
                "name": "Me",
                "text": "*I look around. On the street, there are couples walking and laughing, a family eating ice cream, someone walking their dog...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Miro a mi alrededor. En la calle hay parejas caminando y riendo, una familia comiendo helado, alguien paseando a su perro...*"
            },
            "ja": {
                "name": "僕",
                "text": "*周りを見渡す。通りには笑いながら歩くカップル、アイスクリームを食べている家族、犬の散歩をしている人…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je regarde autour de moi. Dans la rue, il y a des couples qui marchent en riant, une famille qui mange des glaces, quelqu'un qui promène son chien...*"
            }
        }
    },
    "day4_arrive_phone": {
        "background": "assets/images/background/street.png",
        "next": "day4_arrive_look",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*핸드폰을 꺼내본다. 아직 연락은 없다. 시간을 확인하니 약속보다 15분 일찍 도착했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I take out my phone. No messages yet. I check the time — I arrived 15 minutes early.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Saco mi teléfono. Todavía no hay mensajes. Reviso la hora — llegué 15 minutos antes.*"
            },
            "ja": {
                "name": "僕",
                "text": "*スマホを取り出す。まだ連絡はない。時間を確認すると、約束より15分早く着いていた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je sors mon téléphone. Pas encore de messages. Je vérifie l'heure — je suis arrivé 15 minutes en avance.*"
            }
        }
    },
    "day4_arrive_look": {
        "background": "assets/images/background/street.png",
        "next": "day4_arrive_wait",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유리창에 비친 내 모습을 슬쩍 확인한다. 괜찮아, 나쁘지 않아… 아마.*"
            },
            "en": {
                "name": "Me",
                "text": "*I sneak a glance at my reflection in a window. Not bad... I think.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Echo un vistazo rápido a mi reflejo en un vidrio. No está mal... creo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ガラスに映った自分をこっそり確認する。悪くない…たぶん。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je jette un coup d'oeil furtif à mon reflet dans une vitrine. Pas mal... je crois.*"
            }
        }
    },
    "day4_arrive_wait": {
        "background": "assets/images/background/street.png",
        "next": "day4_heroine_arrive",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*단순한 약속이 아니다. 오늘 누구의 손을 잡느냐에 따라, 내 일상은 완전히 다른 궤도로 진입하게 될 것이다. 묘한 갈증이 목을 조여온다.*"
            },
            "en": {
                "name": "Me",
                "text": "*My heart is racing. Have I ever been this nervous before...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mi corazón está acelerado. ¿Alguna vez estuve tan nervioso antes...?*"
            },
            "ja": {
                "name": "僕",
                "text": "*心臓がドキドキする。こんなに緊張したことあっただろうか…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mon coeur bat la chamade. Ai-je déjà été aussi nerveux auparavant...*"
            }
        }
    },
    "day4_heroine_arrive": {
        "background": "assets/images/background/street.png",
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day4_meet_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day4_meet_yuna",
                "character": "Yuna"
            },
            {
                "next": "day4_meet_dain",
                "character": "Dain"
            },
            {
                "next": "day4_meet_nurse",
                "character": "Nurse"
            },
            {
                "next": "day4_meet_teacher",
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
    "day4_meet_seoyeon": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day4_seoyeon_react",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"앗, 벌써 와 있었어? 나도 좀 일찍 나왔는데… 후훗.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh, you're already here? I came early too... Hehe.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Oh, ¿ya estás aquí? Yo también llegué temprano... Jeje.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "「あ、もう来てたんだ？私もちょっと早く出ちゃって…えへへ。」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Oh, tu es déjà là ? Moi aussi je suis venue en avance... Héhé.\""
            }
        }
    },
    "day4_seoyeon_react": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day4_seoyeon_compliment",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이가 웃으며 다가온다. 학교 밖에서 만나니… 평소와 다르게 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon walks over with a smile. Meeting outside of school... she looks different from usual.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon se acerca sonriendo. Encontrarnos fuera de la escuela... se ve diferente a lo usual.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンが笑顔で近づいてくる。学校の外で会うと…いつもと違って見える。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon s'approche avec un sourire. La voir en dehors de l'école... elle a l'air différente de d'habitude.*"
            }
        }
    },
    "day4_seoyeon_compliment": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "choices": [
            {
                "next": "day4_seoyeon_blush",
                "stats": {
                    "Seoyeon": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day4_seoyeon_happy",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뭐라고 해야 하지?*",
                "choices": [
                    "\"오늘 되게 예쁘다.\"",
                    "\"오늘 되게 밝아 보인다!\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*What should I say?*",
                "choices": [
                    "\"You look really pretty today.\"",
                    "\"You look really cheerful today!\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¿Qué debería decir?*",
                "choices": [
                    "\"Te ves muy bonita hoy.\"",
                    "\"¡Te ves muy alegre hoy!\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*なんて言おう？*",
                "choices": [
                    "「今日、すごくかわいいね。」",
                    "「今日、すごく明るく見えるね！」"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Qu'est-ce que je devrais dire ?*",
                "choices": [
                    "\"Tu es vraiment jolie aujourd'hui.\"",
                    "\"Tu as l'air vraiment joyeuse aujourd'hui !\""
                ]
            }
        }
    },
    "day4_seoyeon_blush": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"에, 에이… 갑자기 그런 말 하면 어떡해… 고마워.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"W-what... You can't just say that out of nowhere... Thanks.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Q-qué... No puedes decir eso de la nada... Gracias.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "「え、えぇ…いきなりそんなこと言わないでよ…ありがとう。」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Q-quoi... Tu ne peux pas dire ça comme ça de nulle part... Merci.\""
            }
        }
    },
    "day4_seoyeon_happy": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"정말? 오늘 좀 신경 썼거든! 알아봐줘서 기쁘다~\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Really? I put a lot of effort in today! I'm glad you noticed!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¿En serio? ¡Hoy me esforcé mucho! ¡Me alegra que lo notes!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "「ほんと？今日ちょっと気合入れたんだ！気づいてくれて嬉しい～」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Vraiment ? J'ai fait beaucoup d'efforts aujourd'hui ! Je suis contente que tu l'aies remarqué !\""
            }
        }
    },
    "day4_meet_yuna": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day4_yuna_react",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…왔어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...You're here.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Llegaste.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "「…来たんだ。」"
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Tu es là.\""
            }
        }
    },
    "day4_yuna_react": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day4_yuna_compliment",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 카페 앞에 서 있었다. 학교 밖에서 보니 분위기가 달라.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna was standing in front of the café. She gives off a different vibe outside of school.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna estaba parada frente al café. Da una vibra diferente fuera de la escuela.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナがカフェの前に立っていた。学校の外で見ると雰囲気が違う。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna se tenait devant le café. Elle dégage une atmosphère différente en dehors de l'école.*"
            }
        }
    },
    "day4_yuna_compliment": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day4_yuna_blush",
                "stats": {
                    "Yuna": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day4_yuna_cool",
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
                "text": "*뭐라고 해야 하지?*",
                "choices": [
                    "\"오늘 분위기 다르다. 예쁘네.\"",
                    "\"기다렸어? 미안.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*What should I say?*",
                "choices": [
                    "\"You look different today. Pretty.\"",
                    "\"Were you waiting? Sorry.\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¿Qué debería decir?*",
                "choices": [
                    "\"Hoy te ves diferente. Bonita.\"",
                    "\"¿Estabas esperando? Perdón.\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*なんて言おう？*",
                "choices": [
                    "「今日、雰囲気違うね。かわいい。」",
                    "「待った？ごめん。」"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Qu'est-ce que je devrais dire ?*",
                "choices": [
                    "\"Tu as l'air différente aujourd'hui. Jolie.\"",
                    "\"Tu attendais ? Désolé.\""
                ]
            }
        }
    },
    "day4_yuna_blush": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……그런 말 처음 들어. …고마워.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...No one's ever said that to me before. ...Thanks.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Nadie me había dicho eso antes. ...Gracias.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "「……そんなこと言われたの初めて。…ありがと。」"
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Personne ne m'a jamais dit ça avant. ...Merci.\""
            }
        }
    },
    "day4_yuna_cool": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…방금 왔어. 들어가자.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I just got here. Let's go in.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Acabo de llegar. Entremos.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "「…今来たとこ。入ろ。」"
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Je viens d'arriver. Allons-y.\""
            }
        }
    },
    "day4_meet_dain": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day4_dain_react",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야!! 여기여기!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey!! Over here, over here!!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡¡Oye!! ¡¡Aquí, aquí!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "「ねぇ！！こっちこっち！！」"
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hé !! Par ici, par ici !!\""
            }
        }
    },
    "day4_dain_react": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day4_dain_compliment",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 손을 흔들며 뛰어온다. 학교 밖에서 만나니 분위기가 또 다르다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain waves and runs over. Meeting outside of school, the vibe is totally different.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dain agita la mano y corre hacia mí. Encontrarnos fuera de la escuela, la vibra es totalmente diferente.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインが手を振りながら走ってくる。学校の外で会うと雰囲気がまた違う。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain fait signe de la main et court vers moi. Se retrouver en dehors de l'école, l'ambiance est totalement différente.*"
            }
        }
    },
    "day4_dain_compliment": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "choices": [
            {
                "next": "day4_dain_blush",
                "stats": {
                    "Dain": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day4_dain_energy",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뭐라고 해야 하지?*",
                "choices": [
                    "\"오늘 완전 귀엽다!\"",
                    "\"연습은 잘 끝났어?\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*What should I say?*",
                "choices": [
                    "\"You look super cute today!\"",
                    "\"Did practice go well?\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¿Qué debería decir?*",
                "choices": [
                    "\"¡Hoy te ves súper linda!\"",
                    "\"¿Cómo te fue en la práctica?\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*なんて言おう？*",
                "choices": [
                    "「今日めっちゃかわいいね！」",
                    "「練習はうまくいった？」"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Qu'est-ce que je devrais dire ?*",
                "choices": [
                    "\"Tu es super mignonne aujourd'hui !\"",
                    "\"L'entraînement s'est bien passé ?\""
                ]
            }
        }
    },
    "day4_dain_blush": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"헤, 후훗… 진짜?! 나 오늘 엄청 고민했거든!! 다행이다~!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"H-hehe... Really?! I spent so long deciding what to wear!! What a relief!!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"J-jeje... ¿¡En serio?! ¡¡Tardé mucho en decidir qué ponerme!! ¡¡Qué alivio!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "「へ、へへ…ほんと？！今日めっちゃ悩んだんだよ！！よかった～！！」"
            },
            "fr": {
                "name": "Dain",
                "text": "\"H-héhé... Vraiment ?! J'ai passé tellement de temps à choisir quoi porter !! Quel soulagement !!\""
            }
        }
    },
    "day4_dain_energy": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"완전 완벽했지!! 오늘 컨디션 최고야!! 자, 빨리 가자!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"It was totally perfect!! I'm in top shape today!! Come on, let's go!!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡¡Estuvo totalmente perfecta!! ¡¡Hoy estoy en mi mejor forma!! ¡¡Vamos, vamos!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "「完璧だったよ！！今日はコンディション最高！！さあ、早く行こう！！」"
            },
            "fr": {
                "name": "Dain",
                "text": "\"C'était absolument parfait !! Je suis au top de ma forme aujourd'hui !! Allez, on y va !!\""
            }
        }
    },
    "day4_meet_nurse": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day4_nurse_react",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, 벌써 와 있었네? 오래 기다렸어?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh my, you're already here? Have you been waiting long?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Vaya, ¿ya estás aquí? ¿Llevas mucho esperando?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "「あら、もう来てたの？長く待った？」"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Oh là là, tu es déjà là ? Tu attends depuis longtemps ?\""
            }
        }
    },
    "day4_nurse_react": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day4_nurse_compliment",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*미술관 입구에서 보건선생님이 웃으며 손을 흔들고 있다. 학교 밖에서 만나니까 왠지 분위기가 다르게 느껴진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The school nurse is waving and smiling at the museum entrance. Meeting outside of school, the atmosphere feels completely different.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La enfermera me saluda con la mano y sonríe en la entrada del museo. Encontrarnos fuera de la escuela se siente completamente diferente.*"
            },
            "ja": {
                "name": "僕",
                "text": "*美術館の入口で保健先生が笑顔で手を振っている。学校の外で会うと、雰囲気がまるで違う。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*L'infirmière scolaire me fait signe en souriant à l'entrée du musée. Se retrouver en dehors de l'école, l'atmosphère est complètement différente.*"
            }
        }
    },
    "day4_nurse_compliment": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "day4_nurse_blush",
                "stats": {
                    "Nurse": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day4_nurse_smile",
                "stats": {
                    "Nurse": {
                        "affinity": 5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뭐라고 해야 하지?*",
                "choices": [
                    "\"선생님… 오늘 정말 예쁘세요.\"",
                    "\"학교 밖에서 만나니까 신기하네요.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*What should I say?*",
                "choices": [
                    "\"You look... really beautiful today.\"",
                    "\"It's kind of strange meeting outside of school.\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¿Qué debería decir?*",
                "choices": [
                    "\"Se ve... realmente hermosa hoy.\"",
                    "\"Es un poco raro vernos fuera de la escuela.\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*なんて言おう？*",
                "choices": [
                    "「先生…今日、本当にきれいです。」",
                    "「学校の外で会うと不思議ですね。」"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Qu'est-ce que je devrais dire ?*",
                "choices": [
                    "\"Vous êtes... vraiment belle aujourd'hui.\"",
                    "\"C'est un peu étrange de se voir en dehors de l'école.\""
                ]
            }
        }
    },
    "day4_nurse_blush": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"후후… 고마워. 오늘은 학생이 아니라 그냥 남자로 봐도 될까?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Hehe... Thank you. Can I see you as just a man today, not a student?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Jeje... Gracias. ¿Puedo verte hoy solo como un hombre, no como un estudiante?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "「ふふ…ありがとう。今日は生徒じゃなくて、ただの男の人として見てもいい？」"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Héhé... Merci. Est-ce que je peux te voir aujourd'hui simplement comme un homme, et non comme un élève ?\""
            }
        }
    },
    "day4_nurse_smile": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"맞아, 나도 좀 긴장돼. 오늘은 선생님이 아니라 그냥 나야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Right, I'm a bit nervous too. Today, I'm not a teacher — just me.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Sí, yo también estoy un poco nerviosa. Hoy no soy profesora — solo soy yo.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "「そうだよね、私もちょっと緊張してる。今日は先生じゃなくて、ただの私だから。」"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"C'est vrai, moi aussi je suis un peu nerveuse. Aujourd'hui, je ne suis pas une enseignante — juste moi.\""
            }
        }
    },
    "day4_meet_teacher": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day4_teacher_react",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"오, 왔구나. 늦을 줄 알았는데 의외로 빠르네?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Oh, you made it. I thought you'd be late, but you're surprisingly early.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Oh, llegaste. Pensé que llegarías tarde, pero eres sorprendentemente puntual.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "「お、来たね。遅れると思ったのに、意外と早いじゃん。」"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"Oh, tu es venu. Je pensais que tu serais en retard, mais tu es étonnamment en avance.\""
            }
        }
    },
    "day4_teacher_react": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day4_teacher_compliment",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*담임선생님이 카페 앞에서 웃고 있다. 학교 밖에서 만나니 느낌이 달라서 순간 누구인지 못 알아볼 뻔했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The homeroom teacher is smiling in front of the café. She looks so different outside of school that I almost didn't recognize her.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La profesora está sonriendo frente al café. Se ve tan diferente fuera de la escuela que casi no la reconozco.*"
            },
            "ja": {
                "name": "僕",
                "text": "*担任先生がカフェの前で笑っている。学校の外だと雰囲気が違いすぎて、一瞬誰だかわからなかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le professeur principal sourit devant le café. Elle a l'air tellement différente en dehors de l'école que j'ai failli ne pas la reconnaître.*"
            }
        }
    },
    "day4_teacher_compliment": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            {
                "next": "day4_teacher_blush",
                "stats": {
                    "Teacher": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day4_teacher_casual",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뭐라고 해야 하지?*",
                "choices": [
                    "\"선생님 오늘 되게 예쁘세요.\"",
                    "\"카페가 분위기 좋네요.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*What should I say?*",
                "choices": [
                    "\"You look really pretty today.\"",
                    "\"This café has a nice atmosphere.\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¿Qué debería decir?*",
                "choices": [
                    "\"Hoy se ve muy bonita, profesora.\"",
                    "\"Este café tiene un buen ambiente.\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*なんて言おう？*",
                "choices": [
                    "「先生、今日すごくきれいです。」",
                    "「このカフェ、雰囲気いいですね。」"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Qu'est-ce que je devrais dire ?*",
                "choices": [
                    "\"Vous êtes vraiment jolie aujourd'hui.\"",
                    "\"Ce café a une belle atmosphère.\""
                ]
            }
        }
    },
    "day4_teacher_blush": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…뭐야, 갑자기. 칭찬하면 기분이 이상해지니까 그만해.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...What, all of a sudden. Stop it, compliments make me feel weird.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Qué, de repente. Para, los cumplidos me hacen sentir rara.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "「…なに、いきなり。やめてよ、褒められると変な気持ちになるから。」"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"...Quoi, comme ça d'un coup. Arrête, les compliments me mettent mal à l'aise.\""
            }
        }
    },
    "day4_teacher_casual": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"그치? 여기 커피가 맛있어. 자, 들어가자.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Right? The coffee here is great. Come on, let's go in.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"¿Verdad? El café aquí es buenísimo. Vamos, entremos.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "「でしょ？ここのコーヒーおいしいんだよ。さ、入ろう。」"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"N'est-ce pas ? Le café ici est excellent. Allez, entrons.\""
            }
        }
    },
    "day4_date_walk": {
        "character": null,
        "background": "assets/images/background/street.png",
        "next": "day4_date_talk_1",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나란히 걸으며 이런저런 이야기를 나눴다. 학교에서와는 다른, 편안한 분위기.*"
            },
            "en": {
                "name": "Me",
                "text": "*We walked side by side, chatting about all sorts of things. A relaxed atmosphere, different from school.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Caminamos lado a lado, hablando de todo un poco. Un ambiente relajado, diferente al de la escuela.*"
            },
            "ja": {
                "name": "僕",
                "text": "*並んで歩きながらいろんな話をした。学校とは違う、リラックスした雰囲気。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Nous avons marché côte à côte, discutant de tout et de rien. Une atmosphère détendue, différente de l'école.*"
            }
        }
    },
    "day4_date_talk_1": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_talk_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*평소에는 할 수 없었던 이야기들… 좋아하는 음악, 어릴 때 꿈, 사소한 취미.*"
            },
            "en": {
                "name": "Me",
                "text": "*Things we could never talk about at school... favorite music, childhood dreams, little hobbies.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cosas de las que nunca podríamos hablar en la escuela... música favorita, sueños de la infancia, pequeños pasatiempos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*学校ではできなかった話…好きな音楽、子どもの頃の夢、ちょっとした趣味。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Des choses dont on ne pouvait jamais parler à l'école... musique préférée, rêves d'enfance, petits loisirs.*"
            }
        }
    },
    "day4_date_talk_2": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_weather",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이야기를 나눌수록 마음이 가까워지는 게 느껴진다. 이 시간이 영원했으면 좋겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The more we talk, the closer I feel. I wish this moment could last forever.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cuanto más hablamos, más cercanos nos sentimos. Ojalá este momento durara para siempre.*"
            },
            "ja": {
                "name": "僕",
                "text": "*話せば話すほど、心が近づいていくのを感じる。この時間がずっと続けばいいのに。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Plus nous parlons, plus je me sens proche. J'aimerais que ce moment dure pour toujours.*"
            }
        }
    },
    "day4_date_weather": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_surroundings",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*바람이 살랑살랑 분다. 하늘에는 솜사탕 같은 구름이 천천히 흘러간다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A gentle breeze blows. Cotton candy clouds drift slowly across the sky.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sopla una brisa suave. Nubes como algodón de azúcar se deslizan lentamente por el cielo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*風がそよそよ吹く。空には綿あめみたいな雲がゆっくり流れていく。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Une douce brise souffle. Des nuages comme de la barbe à papa dérivent lentement dans le ciel.*"
            }
        }
    },
    "day4_date_surroundings": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_time_pass",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*거리에는 우리 같은 커플들이 여기저기 보인다. 문득 '우리도 저렇게 보일까?' 하는 생각이 든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I see other couples around, just like us. I suddenly wonder, 'Do we look like that too?'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Veo otras parejas alrededor, como nosotros. De repente me pregunto: '¿Nosotros también nos vemos así?'*"
            },
            "ja": {
                "name": "僕",
                "text": "*通りには僕たちみたいなカップルがあちこちにいる。ふと「僕たちもあんなふうに見えてるのかな？」と思う。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je vois d'autres couples autour, comme nous. Je me demande soudain : 'Est-ce qu'on a l'air comme eux aussi ?'*"
            }
        }
    },
    "day4_date_time_pass": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_sunshine",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*시간이 어떻게 흘러가는지 모르겠다. 핸드폰을 꺼내 시간을 확인하니 벌써 한 시간이 지나 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I have no idea how time flew by so fast. I check my phone and realize an hour has already passed.*"
            },
            "es": {
                "name": "Yo",
                "text": "*No tengo idea de cómo pasó el tiempo tan rápido. Reviso mi teléfono y ya pasó una hora.*"
            },
            "ja": {
                "name": "僕",
                "text": "*時間がどう過ぎたのかわからない。スマホを見たらもう一時間も経っていた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je n'ai aucune idée de comment le temps a filé si vite. Je vérifie mon téléphone et réalise qu'une heure est déjà passée.*"
            }
        }
    },
    "day4_date_sunshine": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_activity_branch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*햇살이 나뭇잎 사이로 쏟아져 내린다. 옆에 걷는 사람의 얼굴에 빛이 내려앉는 게… 예쁘다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Sunlight pours through the leaves. The light falling on the face of the person walking beside me is... beautiful.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La luz del sol se filtra entre las hojas. La luz que cae sobre el rostro de la persona que camina a mi lado es... hermosa.*"
            },
            "ja": {
                "name": "僕",
                "text": "*木漏れ日が降り注ぐ。隣を歩く人の顔に光が降りかかるのが…きれいだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La lumière du soleil se déverse à travers les feuilles. La lumière qui tombe sur le visage de la personne qui marche à côté de moi est... magnifique.*"
            }
        }
    },
    "day4_date_activity_branch": {
        "background": "assets/images/background/street.png",
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day4_activity_seoyeon_1",
                "character": "Seoyeon"
            },
            {
                "next": "day4_activity_yuna_1",
                "character": "Yuna"
            },
            {
                "next": "day4_activity_dain_1",
                "character": "Dain"
            },
            {
                "next": "day4_activity_nurse_1",
                "character": "Nurse"
            },
            {
                "next": "day4_activity_teacher_1",
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
    "day4_activity_seoyeon_1": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day4_activity_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"와, 저기 봐! 꽃밭이다! 가보자!!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Wow, look over there! A flower garden! Let's go!!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡Mira, allá! ¡Un jardín de flores! ¡¡Vamos!!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "「わぁ、あそこ見て！お花畑だ！行こう！！」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Waouh, regarde là-bas ! Un jardin de fleurs ! Allons-y !!\""
            }
        }
    },
    "day4_activity_seoyeon_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day4_activity_seoyeon_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이가 내 손을 잡고 꽃밭 사이로 뛰어간다. 알록달록한 꽃들 사이에서 서연이가 환하게 웃는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon grabs my hand and runs into the flower garden. She beams brightly among the colorful flowers.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon me toma de la mano y corre hacia el jardín de flores. Sonríe radiante entre las flores coloridas.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンが僕の手を掴んで花畑の中を走り出す。色とりどりの花の中でソヨンが満面の笑みを見せる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon me prend la main et court dans le jardin de fleurs. Elle rayonne parmi les fleurs colorées.*"
            }
        }
    },
    "day4_activity_seoyeon_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day4_activity_seoyeon_4",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"앗, 저기 오리들이다! 빵 좀 줄까? 편의점에서 사온 거 있어!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh, look, ducks! Should we give them some bread? I bought some at the convenience store!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡Oh, mira, patos! ¿Les damos un poco de pan? ¡Compré en la tienda!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "「あ、あそこにアヒルがいるよ！パンあげようか？コンビニで買ってきたの！」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Oh, regarde, des canards ! On leur donne du pain ? J'en ai acheté à la supérette !\""
            }
        }
    },
    "day4_activity_seoyeon_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day4_activity_converge",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나란히 앉아 연못의 오리들에게 빵을 던져줬다. 오리들이 쪼르르 달려오니 서연이가 까르르 웃는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We sat side by side, tossing bread to the ducks in the pond. When the ducks waddled over, Seoyeon burst out laughing.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Nos sentamos lado a lado, lanzando pan a los patos del estanque. Cuando los patos vinieron corriendo, Seoyeon se echó a reír.*"
            },
            "ja": {
                "name": "僕",
                "text": "*並んで座って池のアヒルにパンを投げた。アヒルがよちよち近づいてくると、ソヨンがきゃっきゃと笑った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Nous nous sommes assis côte à côte, lançant du pain aux canards dans l'étang. Quand les canards se sont danddinés vers nous, Seoyeon a éclaté de rire.*"
            }
        }
    },
    "day4_activity_yuna_1": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day4_activity_yuna_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…저기, 서점 들러도 돼? 읽고 싶은 책이 있어서.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Can we stop by the bookstore? There's a book I want to read.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...¿Podemos pasar por la librería? Hay un libro que quiero leer.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "「…あそこ、本屋寄ってもいい？読みたい本があって。」"
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...On peut passer à la librairie ? Il y a un livre que je voudrais lire.\""
            }
        }
    },
    "day4_activity_yuna_2": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day4_activity_yuna_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서점 안에서 유나와 나란히 책장을 넘겼다. 유나는 책을 고를 때 정말 진지한 표정이 된다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We flipped through books side by side in the bookstore. Yuna gets really serious when she's picking out a book.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Hojeamos libros lado a lado en la librería. Yuna se pone muy seria cuando elige un libro.*"
            },
            "ja": {
                "name": "僕",
                "text": "*本屋で並んでページをめくった。ユナは本を選ぶときすごく真剣な表情になる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Nous avons feuilleté des livres côte à côte dans la librairie. Yuna devient très sérieuse quand elle choisit un livre.*"
            }
        }
    },
    "day4_activity_yuna_3": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_smile.png",
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "day4_activity_yuna_4",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…이 노래 좋아해? 한쪽 들어볼래.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Do you like this song? Want to listen with one earbud?\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...¿Te gusta esta canción? ¿Quieres escuchar con un audífono?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "「…この曲好き？片方聴く？」"
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Tu aimes cette chanson ? Tu veux écouter avec un écouteur ?\""
            }
        }
    },
    "day4_activity_yuna_4": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_shy.png",
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day4_activity_converge",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 이어폰 한쪽을 건네줬다. 가까이 붙어 앉아 같은 음악을 듣는다. 유나의 어깨가 내 어깨에 살짝 닿았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna handed me one of her earbuds. We sat close together, listening to the same music. Her shoulder gently touched mine.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna me pasó uno de sus audífonos. Nos sentamos juntos, escuchando la misma música. Su hombro rozó suavemente el mío.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナがイヤホンの片方を渡してくれた。近くに寄り添って同じ音楽を聴く。ユナの肩が僕の肩にそっと触れた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna m'a tendu un de ses écouteurs. Nous nous sommes assis tout près, écoutant la même musique. Son épaule a doucement touché la mienne.*"
            }
        }
    },
    "day4_activity_dain_1": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day4_activity_dain_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야야야, 저기 오락실이다!! 가자가자가자!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey hey hey, there's an arcade over there!! Let's go let's go let's go!!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡¡Oye oye oye, ahí hay un arcade!! ¡¡Vamos vamos vamos!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "「ねぇねぇねぇ、あそこゲーセンだ！！行こう行こう行こう！！」"
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hé hé hé, il y a une salle d'arcade là-bas !! Allons-y allons-y allons-y !!\""
            }
        }
    },
    "day4_activity_dain_2": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day4_activity_dain_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 눈을 반짝이며 오락실 안으로 뛰어간다. 리듬게임 앞에 서더니 도전적으로 날 쳐다본다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain's eyes light up as she dashes into the arcade. She stops in front of a rhythm game and gives me a challenging look.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Los ojos de Dain se iluminan mientras corre hacia el arcade. Se para frente a un juego de ritmo y me mira desafiante.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインが目をキラキラさせてゲーセンの中に駆け込む。リズムゲームの前に立つと、挑戦的な目で僕を見た。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Les yeux de Dain s'illuminent tandis qu'elle se précipite dans la salle d'arcade. Elle s'arrête devant un jeu de rythme et me lance un regard de défi.*"
            }
        }
    },
    "day4_activity_dain_3": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "day4_activity_dain_4",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"대결이다!! 지는 사람이 아이스크림 사기!! 절대 안 져!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"It's a showdown!! Loser buys ice cream!! I'm NOT losing!!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡¡Es un duelo!! ¡¡El que pierda compra helado!! ¡¡NO voy a perder!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "「勝負だ！！負けた方がアイスおごり！！絶対負けないから！！」"
            },
            "fr": {
                "name": "Dain",
                "text": "\"C'est un duel !! Le perdant paie la glace !! Je ne perdrai PAS !!\""
            }
        }
    },
    "day4_activity_dain_4": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day4_activity_converge",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*결국 내가 졌다. 다인이가 양 주먹을 불끈 쥐며 환호한다. 지긴 했지만… 저렇게 좋아하는 모습은 보기 좋다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I ended up losing. Dain pumps both fists in the air and cheers. I lost, but... seeing her that happy is a pretty good sight.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Terminé perdiendo. Dain levanta los puños al aire y celebra. Perdí, pero... verla tan feliz es una vista bastante buena.*"
            },
            "ja": {
                "name": "僕",
                "text": "*結局僕が負けた。ダインが両手の拳を突き上げて歓声をあげる。負けたけど…あんなに喜んでる姿を見るのはいいもんだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai fini par perdre. Dain lève les deux poings en l'air et pousse des cris de joie. J'ai perdu, mais... la voir aussi heureuse, c'est plutôt agréable.*"
            }
        }
    },
    "day4_activity_nurse_1": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day4_activity_nurse_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"이 그림 좋지 않아? 색감이 참 따뜻해.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Don't you love this painting? The colors are so warm.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"¿No te encanta esta pintura? Los colores son tan cálidos.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "「この絵、いいと思わない？色合いがすごく温かいでしょ。」"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Tu n'aimes pas ce tableau ? Les couleurs sont tellement chaleureuses.\""
            }
        }
    },
    "day4_activity_nurse_2": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day4_activity_nurse_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*미술관 안은 조용하고 넓었다. 선생님과 나란히 그림을 보며 천천히 걸었다. 이런 시간이 좋다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The museum was quiet and spacious. We walked slowly, viewing the paintings side by side. I like moments like this.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El museo era tranquilo y espacioso. Caminamos lentamente, viendo las pinturas lado a lado. Me gustan momentos como este.*"
            },
            "ja": {
                "name": "僕",
                "text": "*美術館の中は静かで広かった。先生と並んで絵を見ながらゆっくり歩いた。こういう時間が好きだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le musée était calme et spacieux. Nous avons marché lentement, admirant les tableaux côte à côte. J'aime les moments comme celui-ci.*"
            }
        }
    },
    "day4_activity_nurse_3": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_shy.png",
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "day4_activity_nurse_4",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"나도 학생 때는 꿈이 많았어. 지금도 있긴 하지만… 조금 달라졌을 뿐이야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"When I was a student, I had so many dreams too. I still do, but... they've just changed a little.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Cuando era estudiante, yo también tenía muchos sueños. Aún los tengo, pero... solo han cambiado un poco.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "「私も学生の頃は夢がたくさんあったの。今もあるけど…ちょっと変わっただけ。」"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Quand j'étais étudiante, j'avais tellement de rêves moi aussi. J'en ai encore, mais... ils ont juste un peu changé.\""
            }
        }
    },
    "day4_activity_nurse_4": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_shy.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day4_activity_converge",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 한 점의 그림 앞에서 멈춰 섰다. 그림 속 풍경을 바라보는 선생님의 옆모습이… 묘하게 아름답다.*"
            },
            "en": {
                "name": "Me",
                "text": "*She stopped in front of one painting. Her profile, gazing at the landscape in the painting... was unexpectedly beautiful.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Se detuvo frente a una pintura. Su perfil, contemplando el paisaje de la pintura... era inesperadamente hermoso.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生が一枚の絵の前で立ち止まった。絵の中の風景を見つめる先生の横顔が…妙に美しかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Elle s'est arrêtée devant un tableau. Son profil, contemplant le paysage dans la peinture... était d'une beauté inattendue.*"
            }
        }
    },
    "day4_activity_teacher_1": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day4_activity_teacher_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"너, 졸업하면 뭐 하고 싶어? 꿈 같은 거 있어?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"What do you want to do after you graduate? Do you have a dream or anything?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"¿Qué quieres hacer cuando te gradúes? ¿Tienes algún sueño o algo así?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "「卒業したら何がしたい？夢とかある？」"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"Qu'est-ce que tu veux faire après ton diplôme ? Tu as un rêve ou quelque chose ?\""
            }
        }
    },
    "day4_activity_teacher_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day4_activity_teacher_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*카페에 마주 앉아 이야기를 나눈다. 선생님은 평소와 달리 부드러운 표정이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We sat across from each other in the café, talking. She has a softer expression than usual.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Nos sentamos frente a frente en el café, conversando. Tiene una expresión más suave de lo normal.*"
            },
            "ja": {
                "name": "僕",
                "text": "*カフェで向かい合って話をする。先生はいつもより柔らかい表情をしている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Nous nous sommes assis face à face dans le café, en train de discuter. Elle a une expression plus douce que d'habitude.*"
            }
        }
    },
    "day4_activity_teacher_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "day4_activity_teacher_4",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"나도 학생 때는 선생님이 되겠다는 생각 안 했어. 인생은 뜻대로 안 되거든. 근데 지금은… 나쁘지 않아.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"When I was a student, I never thought I'd become a teacher. Life doesn't go as planned. But now... it's not bad.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Cuando era estudiante, nunca pensé que sería profesora. La vida no sale como uno planea. Pero ahora... no está mal.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "「私も学生の頃は先生になるなんて思ってなかった。人生って思い通りにいかないから。でも今は…悪くないよ。」"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"Quand j'étais étudiante, je n'aurais jamais pensé devenir professeur. La vie ne se passe pas comme prévu. Mais maintenant... ce n'est pas si mal.\""
            }
        }
    },
    "day4_activity_teacher_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 5
            }
        },
        "next": "day4_activity_converge",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(선생님이 자기 케이크를 한 조각 잘라서 내 접시에 올려줬다. \"먹어봐, 여기 디저트 진짜 맛있어.\" 그 자연스러운 행동에 심장이 뛰었다.)"
            },
            "en": {
                "name": "Me",
                "text": "(She cut a piece of her cake and placed it on my plate. \"Try it, the desserts here are really good.\" My heart skipped a beat at that casual gesture.)"
            },
            "es": {
                "name": "Yo",
                "text": "(Cortó un pedazo de su pastel y lo puso en mi plato. \"Pruébalo, los postres aquí son muy buenos.\" Mi corazón se detuvo un instante con ese gesto tan natural.)"
            },
            "ja": {
                "name": "僕",
                "text": "(先生が自分のケーキを一切れ切って僕の皿に載せてくれた。「食べてみて、ここのデザート本当においしいから。」その何気ない仕草に心臓がドキッとした。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(Elle a coupé un morceau de son gâteau et l'a posé sur mon assiette. \"Goûte, les desserts ici sont vraiment bons.\" Mon coeur a fait un bond face à ce geste si naturel.)"
            }
        }
    },
    "day4_activity_converge": {
        "character": null,
        "background": "assets/images/background/street.png",
        "next": "day4_date_lunch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*시간이 정말 빠르게 흘렀다. 어느새 점심시간이 다 됐다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Time flew by so fast. Before I knew it, it was already lunchtime.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El tiempo pasó volando. Sin darme cuenta, ya era hora del almuerzo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*時間が本当にあっという間に過ぎた。いつの間にかもうお昼の時間だ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le temps a filé à toute allure. Sans m'en rendre compte, c'est déjà l'heure du déjeuner.*"
            }
        }
    },
    "day4_date_lunch": {
        "character": null,
        "background": "assets/images/background/cafe.png",
        "next": "day4_lunch_menu",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*근처 예쁜 카페에 들어갔다. 창가 자리에 마주 앉으니 더 설레는 건 기분 탓일까.*"
            },
            "en": {
                "name": "Me",
                "text": "*We went into a cute café nearby. Sitting across from each other by the window — is it just me, or does this feel even more exciting?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Entramos a un café lindo que estaba cerca. Sentados frente a frente junto a la ventana — ¿es mi imaginación o esto se siente aún más emocionante?*"
            },
            "ja": {
                "name": "僕",
                "text": "*近くのおしゃれなカフェに入った。窓際で向かい合って座ると余計にドキドキするのは気のせいだろうか。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Nous sommes entrés dans un joli café à proximité. Assis face à face près de la fenêtre — est-ce juste moi, ou est-ce que c'est encore plus excitant ?*"
            }
        }
    },
    "day4_lunch_menu": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_order",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*메뉴판을 들여다본다. 파스타, 샌드위치, 브런치 세트… 뭘 시킬까.*"
            },
            "en": {
                "name": "Me",
                "text": "*I look at the menu. Pasta, sandwiches, brunch set... What should I order?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Miro el menú. Pasta, sándwiches, set de brunch... ¿Qué pido?*"
            },
            "ja": {
                "name": "僕",
                "text": "*メニューを見る。パスタ、サンドイッチ、ブランチセット…何にしようかな。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je regarde le menu. Pâtes, sandwichs, formule brunch... Qu'est-ce que je commande ?*"
            }
        }
    },
    "day4_lunch_order": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_order_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"나는 파스타로 할게. 뭐 먹을래?\""
            },
            "en": {
                "name": "Me",
                "text": "\"I'll go with the pasta. What would you like?\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Yo voy a pedir la pasta. ¿Tú qué quieres?\""
            },
            "ja": {
                "name": "僕",
                "text": "「僕はパスタにするよ。何にする？」"
            },
            "fr": {
                "name": "Moi",
                "text": "\"Je vais prendre les pâtes. Qu'est-ce que tu voudrais ?\""
            }
        }
    },
    "day4_lunch_order_react": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_awkward",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*상대방도 메뉴를 골랐다. 주문을 하고 나니 어색한 침묵이 잠깐 흐른다.*"
            },
            "en": {
                "name": "Me",
                "text": "*They picked something too. After ordering, there's a brief awkward silence.*"
            },
            "es": {
                "name": "Yo",
                "text": "*También eligió algo. Después de ordenar, hay un breve silencio incómodo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*相手もメニューを選んだ。注文を済ませると、少し気まずい沈黙が流れる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*L'autre a aussi choisi quelque chose. Après avoir commandé, un bref silence gênant s'installe.*"
            }
        }
    },
    "day4_lunch_awkward": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_funny",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뭔가 이야기를 꺼내야 할 것 같은데… 이럴 때 뭘 얘기해야 자연스러울까.*"
            },
            "en": {
                "name": "Me",
                "text": "*I feel like I should say something... What would be natural to talk about at a time like this?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Siento que debería decir algo... ¿De qué sería natural hablar en un momento como este?*"
            },
            "ja": {
                "name": "僕",
                "text": "*何か話題を出さなきゃ…こういう時って何を話せば自然なんだろう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai l'impression que je devrais dire quelque chose... De quoi serait-il naturel de parler dans un moment pareil ?*"
            }
        }
    },
    "day4_lunch_funny": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_funny_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*음식이 나왔다. 내가 시킨 파스타가 생각보다 양이 엄청 많다. 상대방이 그걸 보고 웃음을 참지 못한다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The food arrived. The pasta I ordered is way bigger than I expected. They can't hold back their laughter at the sight.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La comida llegó. La pasta que pedí es mucho más grande de lo que esperaba. No puede contener la risa al verla.*"
            },
            "ja": {
                "name": "僕",
                "text": "*料理が来た。僕が頼んだパスタが思ったよりすごい量だ。相手がそれを見て笑いを堪えきれないでいる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La nourriture est arrivée. Les pâtes que j'ai commandées sont bien plus grosses que prévu. L'autre ne peut pas s'empêcher de rire en voyant ça.*"
            }
        }
    },
    "day4_lunch_funny_react": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_share",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"왜 웃어! 이 정도는 거뜬하다고!\""
            },
            "en": {
                "name": "Me",
                "text": "\"Why are you laughing! I can totally handle this much!\""
            },
            "es": {
                "name": "Yo",
                "text": "\"¡¿Por qué te ríes?! ¡Esto no es nada para mí!\""
            },
            "ja": {
                "name": "僕",
                "text": "「何で笑うの！これくらい余裕だって！」"
            },
            "fr": {
                "name": "Moi",
                "text": "\"Pourquoi tu ris ! Je peux totalement gérer ça !\""
            }
        }
    },
    "day4_lunch_share": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_date_lunch_talk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*결국 서로 음식을 나눠 먹게 됐다. 같은 접시에서 포크가 부딪힐 때마다 괜히 웃음이 난다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We ended up sharing each other's food. Every time our forks bump on the same plate, we can't help but laugh.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Terminamos compartiendo la comida. Cada vez que nuestros tenedores chocan en el mismo plato, no podemos evitar reírnos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*結局お互いの料理を分け合うことになった。同じ皿でフォークがぶつかるたびに思わず笑ってしまう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Nous avons fini par partager nos plats. Chaque fois que nos fourchettes se croisent dans la même assiette, on ne peut s'empêcher de rire.*"
            }
        }
    },
    "day4_date_lunch_talk": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_learn",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이야기꽃이 피었다. 같이 웃고, 같이 고민하고… 이런 게 행복이구나.*"
            },
            "en": {
                "name": "Me",
                "text": "*The conversation blossomed. Laughing together, thinking together... So this is what happiness feels like.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La conversación fluyó. Reír juntos, pensar juntos... Así que esto es lo que se siente ser feliz.*"
            },
            "ja": {
                "name": "僕",
                "text": "*会話の花が咲いた。一緒に笑って、一緒に悩んで…これが幸せってことなんだな。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La conversation a fleuri. Rire ensemble, réfléchir ensemble... Alors c'est ça, le bonheur.*"
            }
        }
    },
    "day4_lunch_learn": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_date_lunch_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*대화를 하면 할수록 몰랐던 면을 알게 된다. 좋아하는 계절, 싫어하는 음식, 어릴 때 별명… 사소한 것들이 소중하게 느껴진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The more we talk, the more I learn about sides of them I never knew. Favorite season, food they dislike, childhood nicknames... These little things feel so precious.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cuanto más hablamos, más descubro lados que no conocía. Su estación favorita, la comida que no le gusta, apodos de la infancia... Estas pequeñas cosas se sienten tan valiosas.*"
            },
            "ja": {
                "name": "僕",
                "text": "*話せば話すほど、知らなかった一面がわかる。好きな季節、嫌いな食べ物、子どもの頃のあだ名…些細なことが大切に感じる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Plus nous parlons, plus je découvre des facettes que je ne connaissais pas. Saison préférée, plats détestés, surnoms d'enfance... Ces petits détails me semblent si précieux.*"
            }
        }
    },
    "day4_date_lunch_choice": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "choices": [
            {
                "next": "day4_date_honest",
                "setFlag": "day4_honest_talk"
            },
            {
                "next": "day4_date_grateful"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뭔가 더 특별한 이야기를 꺼내볼까?*",
                "choices": [
                    "\"나 사실… 전학 오기 전에 좀 외로웠어.\"",
                    "\"이 학교에 와서 정말 좋은 사람들을 만났어.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Should I bring up something more personal?*",
                "choices": [
                    "\"To be honest... I was pretty lonely before I transferred here.\"",
                    "\"I've met really great people since coming to this school.\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¿Debería hablar de algo más personal?*",
                "choices": [
                    "\"Para ser honesto... me sentía bastante solo antes de transferirme aquí.\"",
                    "\"He conocido gente muy buena desde que llegué a esta escuela.\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*もう少し特別な話をしてみようかな？*",
                "choices": [
                    "「実は…転校してくる前、結構寂しかったんだ。」",
                    "「この学校に来て、本当にいい人たちに出会えたよ。」"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Devrais-je aborder quelque chose de plus personnel ?*",
                "choices": [
                    "\"Pour être honnête... je me sentais plutôt seul avant mon transfert ici.\"",
                    "\"J'ai rencontré des gens vraiment formidables depuis mon arrivée dans cette école.\""
                ]
            }
        }
    },
    "day4_date_honest": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_date_honest_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"새로운 환경이 무서웠는데… 덕분에 이젠 매일이 기대돼.\""
            },
            "en": {
                "name": "Me",
                "text": "\"The new environment scared me... but thanks to you, now I look forward to every day.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"El nuevo ambiente me asustaba... pero gracias a ti, ahora espero cada día con ganas.\""
            },
            "ja": {
                "name": "僕",
                "text": "「新しい環境が怖かったけど…おかげで今は毎日が楽しみなんだ。」"
            },
            "fr": {
                "name": "Moi",
                "text": "\"Le nouvel environnement me faisait peur... mais grâce à toi, maintenant j'attends chaque jour avec impatience.\""
            }
        }
    },
    "day4_date_honest_react": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            },
            "Yuna": {
                "affinity": 3
            },
            "Dain": {
                "affinity": 3
            },
            "Nurse": {
                "affinity": 3
            },
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "day4_date_response",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*상대방이 조용히 내 이야기를 들어주었다. 진심이 통한 걸까, 따뜻한 눈빛으로 고개를 끄덕인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*They listened quietly to my story. Did my sincerity get through? They nod with warm eyes.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Escuchó mi historia en silencio. ¿Habrá llegado mi sinceridad? Asiente con una mirada cálida.*"
            },
            "ja": {
                "name": "僕",
                "text": "*相手は静かに僕の話を聞いてくれた。気持ちが伝わったのかな、温かい目で頷いてくれる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Elle a écouté mon histoire en silence. Ma sincérité est-elle passée ? Elle hoche la tête avec un regard chaleureux.*"
            }
        }
    },
    "day4_date_grateful": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_date_grateful_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"특히… 지금 이 순간이 가장 좋아.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Especially... right now, this moment is the best.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Especialmente... ahora mismo, este momento es el mejor.\""
            },
            "ja": {
                "name": "僕",
                "text": "「特に…今この瞬間が一番いい。」"
            },
            "fr": {
                "name": "Moi",
                "text": "\"Surtout... en ce moment même, c'est le meilleur instant.\""
            }
        }
    },
    "day4_date_grateful_react": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_date_response",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*상대방이 살짝 눈을 피하며 미소를 짓는다. 분명 기뻐하는 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*They look away slightly, smiling. They're definitely happy about what I said.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Desvía la mirada un poco, sonriendo. Definitivamente está contenta con lo que dije.*"
            },
            "ja": {
                "name": "僕",
                "text": "*相手がちょっと目を逸らしながら微笑む。きっと喜んでくれている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Elle détourne légèrement le regard en souriant. Ce que j'ai dit lui a clairement fait plaisir.*"
            }
        }
    },
    "day4_date_response": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_date_cafe_exit",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*상대방의 눈이 부드러워졌다. 뭔가 통한 것 같은 느낌이 든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Their eyes softened. Something just connected between us.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Su mirada se suavizó. Algo acaba de conectar entre nosotros.*"
            },
            "ja": {
                "name": "僕",
                "text": "*相手の目が優しくなった。何かが通じ合った気がする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Son regard s'est adouci. Quelque chose vient de se connecter entre nous.*"
            }
        }
    },
    "day4_date_cafe_exit": {
        "character": null,
        "background": "assets/images/background/street.png",
        "next": "day4_date_photo_moment",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*카페를 나서자 따사로운 오후 햇살이 내리쬔다. 아까보다 거리가 더 가까워진 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As we step out of the café, warm afternoon sunlight pours down. Somehow, the distance between us has gotten smaller.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al salir del café, la cálida luz de la tarde cae sobre nosotros. De alguna manera, la distancia entre nosotros se ha acortado.*"
            },
            "ja": {
                "name": "僕",
                "text": "*カフェを出ると暖かい午後の日差しが降り注ぐ。さっきより距離が縮まった気がする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En sortant du café, la douce lumière de l'après-midi se déverse sur nous. D'une certaine façon, la distance entre nous s'est réduite.*"
            }
        }
    },
    "day4_date_photo_moment": {
        "background": "assets/images/background/street.png",
        "character": null,
        "choices": [
            {
                "next": "day4_date_photo_yes",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    },
                    "Yuna": {
                        "affinity": 5
                    },
                    "Dain": {
                        "affinity": 5
                    },
                    "Nurse": {
                        "affinity": 5
                    },
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_date_photo_no",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    },
                    "Yuna": {
                        "affinity": 3
                    },
                    "Dain": {
                        "affinity": 3
                    },
                    "Nurse": {
                        "affinity": 3
                    },
                    "Teacher": {
                        "affinity": 3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*문득 이 순간을 남기고 싶다는 생각이 든다.*",
                "choices": [
                    "\"우리 사진 한 장 찍을까?\"",
                    "*마음속에 담아두자.*"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*I suddenly want to capture this moment.*",
                "choices": [
                    "\"Want to take a photo together?\"",
                    "*I'll keep this moment in my heart.*"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*De repente quiero capturar este momento.*",
                "choices": [
                    "\"¿Quieres que nos tomemos una foto juntos?\"",
                    "*Guardaré este momento en mi corazón.*"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ふと、この瞬間を残したいと思った。*",
                "choices": [
                    "「写真、一枚撮ろうか？」",
                    "*心の中にしまっておこう。*"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai soudain envie de capturer cet instant.*",
                "choices": [
                    "\"On prend une photo ensemble ?\"",
                    "*Je garderai ce moment dans mon cœur.*"
                ]
            }
        }
    },
    "day4_date_photo_yes": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_ending_moment",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나란히 서서 셀카를 찍었다. 화면 속에 나란히 웃고 있는 두 사람. 이 사진, 오래오래 간직하고 싶다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We stood side by side and took a selfie. Two people smiling together on the screen. I want to keep this photo forever.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Nos paramos lado a lado y nos tomamos una selfie. Dos personas sonriendo juntas en la pantalla. Quiero guardar esta foto para siempre.*"
            },
            "ja": {
                "name": "僕",
                "text": "*並んで立ってセルフィーを撮った。画面の中で二人並んで笑っている。この写真、ずっと大切にしたい。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Nous nous sommes mis côte à côte et avons pris un selfie. Deux personnes souriantes ensemble sur l'écran. Je veux garder cette photo pour toujours.*"
            }
        }
    },
    "day4_date_photo_no": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_ending_moment",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*사진보다 더 선명하게, 이 순간을 기억에 새긴다. 바람 냄새, 햇살의 온도, 옆에 있는 사람의 미소.*"
            },
            "en": {
                "name": "Me",
                "text": "*More vivid than any photo, I engrave this moment into my memory. The scent of the breeze, the warmth of the sun, the smile of the person beside me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Más vívido que cualquier foto, grabo este momento en mi memoria. El aroma de la brisa, la calidez del sol, la sonrisa de la persona a mi lado.*"
            },
            "ja": {
                "name": "僕",
                "text": "*写真よりも鮮明に、この瞬間を記憶に刻む。風の匂い、日差しの温もり、隣にいる人の笑顔。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Plus vivace que n'importe quelle photo, je grave cet instant dans ma mémoire. Le parfum de la brise, la chaleur du soleil, le sourire de la personne à mes côtés.*"
            }
        }
    },
    "day4_date_ending_moment": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_ending_feel",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나란히 걸으며 잠깐 침묵이 흐른다. 어색한 게 아니라, 편안한 침묵이다. 서로 말 안 해도 괜찮은 그런 사이가 된 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Walking side by side, a brief silence falls. It's not awkward — it's a comfortable silence. We've become the kind of people who are okay without saying a word.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Caminando lado a lado, cae un breve silencio. No es incómodo — es un silencio cómodo. Nos hemos convertido en el tipo de personas que están bien sin decir nada.*"
            },
            "ja": {
                "name": "僕",
                "text": "*並んで歩きながらしばらく沈黙が流れる。気まずいんじゃなくて、心地いい沈黙だ。何も言わなくても大丈夫な関係になれた気がする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En marchant côte à côte, un bref silence s'installe. Ce n'est pas gênant — c'est un silence confortable. Nous sommes devenus le genre de personnes qui se sentent bien sans dire un mot.*"
            }
        }
    },
    "day4_date_ending_feel": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_transition",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*오늘의 시간이 꿈처럼 느껴진다. 전학 와서 이렇게 좋은 날이 올 줄은… 진짜 몰랐어.*"
            },
            "en": {
                "name": "Me",
                "text": "*Today feels like a dream. I never imagined such a wonderful day would come after transferring here... truly.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Hoy se siente como un sueño. Nunca imaginé que vendría un día tan maravilloso después de transferirme aquí... de verdad.*"
            },
            "ja": {
                "name": "僕",
                "text": "*今日は夢みたいだ。転校してきてこんなに素敵な日が来るなんて…本当に思わなかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Aujourd'hui ressemble à un rêve. Je n'aurais jamais imaginé qu'une si belle journée viendrait après mon transfert ici... vraiment.*"
            }
        }
    },
    "day4_date_transition": {
        "background": "assets/images/background/street.png",
        "character": null,
        "fade": true,
        "next": "day4_afternoon_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*아직 오후가 남았다. 이 데이트는… 아직 끝나지 않았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The afternoon still awaits. This date... isn't over yet.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La tarde aún espera. Esta cita... aún no termina.*"
            },
            "ja": {
                "name": "僕",
                "text": "*まだ午後が残っている。このデートは…まだ終わっていない。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*L'après-midi nous attend encore. Ce rendez-vous... n'est pas encore terminé.*"
            }
        }
    }
});
