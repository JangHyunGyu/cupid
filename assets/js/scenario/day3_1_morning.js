/**
 * ============================================================================
 * CUPID - day3_1_morning (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day3_1_morning.js + en_day3_1_morning.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[3]) SCENARIO[3] = {};

Object.assign(SCENARIO[3], {
    "day3_start": {
        "background": "assets/images/background/room_my.png",
        "bgm": "intro.mp3",
        "character": null,
        "next": "day3_start_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*알람 소리에 눈을 뜬다. 전학 온 지 벌써 사흘째... 이제는 아침에 일어나는 것도 조금은 익숙해진 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I wake up to the sound of my alarm. It's already been three days since I transferred... I'm starting to get used to waking up in the morning.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me despierto con el sonido de la alarma. Ya han pasado tres días desde que me transferí... Estoy empezando a acostumbrarme a despertar por las mañanas.*"
            },
            "ja": {
                "name": "僕",
                "text": "*目覚ましの音で目が覚める。転校してからもう三日目…朝起きるのにも少し慣れてきた気がする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je me réveille au son de mon réveil. Cela fait déjà trois jours que j'ai été transféré... Je commence à m'habituer à me lever le matin.*"
            }
        }
    },
    "day3_nurse_home_morning": {
        "background": "assets/images/background/nurse_house.png",
        "character": null,
        "next": "day3_nurse_home_morning_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 뜬다... 여기가 어디지? 낯선 천장이 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I open my eyes... Where am I? An unfamiliar ceiling.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Abro los ojos... ¿Dónde estoy? Un techo desconocido.*"
            },
            "ja": {
                "name": "僕",
                "text": "*目を開ける…ここはどこだ？見慣れない天井が見える。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ouvre les yeux... Où suis-je ? Un plafond inconnu.*"
            }
        }
    },
    "day3_nurse_home_morning_2": {
        "background": "assets/images/background/nurse_house.png",
        "next": "day3_nurse_home_morning_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*순간 어젯밤의 기억이 머릿속을 스치고 지나간다. 선생님의 향기, 부드러운 손길, 그리고...*"
            },
            "en": {
                "name": "Me",
                "text": "*Memories of last night flash through my mind. Her scent, her soft touch, and...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Los recuerdos de anoche pasan por mi mente. Su aroma, su suave tacto, y...*"
            },
            "ja": {
                "name": "僕",
                "text": "*昨夜の記憶が頭をよぎる。先生の香り、柔らかな手触り、そして…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Les souvenirs de la nuit dernière traversent mon esprit. Son parfum, sa douceur, et...*"
            }
        }
    },
    "day3_nurse_home_morning_3": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day3_nurse_home_morning_4",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, 일어났네? 후후후, 어젯밤엔 잘 자더라?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh my, you're awake? Hehe, did you sleep well last night?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Vaya, ¿ya despertaste? Jeje, ¿dormiste bien anoche?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"あら、起きたの？ふふ、昨夜はよく眠れた？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Oh, tu es réveillé ? Héhé, tu as bien dormi cette nuit ?\""
            }
        }
    },
    "day3_nurse_home_morning_4": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "day3_nurse_home_morning_thanks"
            },
            {
                "next": "day3_nurse_home_morning_bold"
            },
            {
                "next": "day3_nurse_home_morning_shy"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 커피 한 잔을 건네며 은은하게 웃는다. 얼굴이 뜨거워진다.*",
                "choices": [
                    "\"감사합니다, 선생님...\"",
                    "\"어젯밤... 정말 좋았어요\"",
                    "*부끄러워서 말을 못한다*"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*She hands me a cup of coffee with a knowing smile. My face feels hot.*",
                "choices": [
                    "\"Thank you, teacher...\"",
                    "\"Last night... was amazing\"",
                    "*Too embarrassed to speak*"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Me ofrece una taza de café con una sonrisa cómplice. Siento la cara caliente.*",
                "choices": [
                    "\"Gracias, profesora...\"",
                    "\"Anoche... fue increíble\"",
                    "*Demasiado avergonzado para hablar*"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*意味ありげな微笑みでコーヒーを差し出される。顔が熱くなる。*",
                "choices": [
                    "「ありがとうございます、先生…」",
                    "「昨夜は…最高でした」",
                    "*恥ずかしくて何も言えない*"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Elle me tend une tasse de café avec un sourire complice. Mon visage est brûlant.*",
                "choices": [
                    "\"Merci, madame...\"",
                    "\"Hier soir... c'était merveilleux\"",
                    "*Trop gêné pour parler*"
                ]
            }
        }
    },
    "day3_nurse_home_morning_thanks": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "day3_nurse_home_morning_leave",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"후후, 너무 딱딱하게 굴지 말려무나~ 우리 사이에.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Hehe, don't be so stiff. Not after what we shared.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Jeje, no seas tan formal. No después de lo que compartimos.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"ふふ、そんなに固くならないで。もう私たちの仲でしょ。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Héhé, ne sois pas si guindé. Pas après ce qu'on a partagé.\""
            }
        }
    },
    "day3_nurse_home_morning_bold": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 8
            }
        },
        "next": "day3_nurse_home_morning_leave",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머... 아침부터 대담하네? 후후, 선생님도 좋았어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh my... Bold thing to say in the morning. Hehe, teacher enjoyed it too.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Vaya... Qué atrevido tan temprano. Jeje, a la profesora también le gustó.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"あら…朝から大胆ね。ふふ、先生も楽しかったわよ。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Oh là là... Quelle audace dès le matin. Héhé, ta prof aussi a apprécié.\""
            }
        }
    },
    "day3_nurse_home_morning_shy": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day3_nurse_home_morning_leave",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"후후, 귀여워라. 부끄러워하는 모습도 너무 사랑스럽다?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Hehe, so cute. Your shy face is adorable too.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Jeje, qué lindo. Tu cara tímida también es adorable.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"ふふ、かわいい。恥ずかしがってる顔もたまらないわね。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Héhé, trop mignon. Ton air timide est adorable aussi.\""
            }
        }
    },
    "day3_nurse_home_morning_leave": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day3_nurse_home_morning_leave_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"자, 어서 준비해. 학교 가야지? 오늘 학교에서 보면... 모른 척 해야 해, 알지?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Now, hurry up and get ready. You need to go to school, right? When we see each other at school... pretend nothing happened, okay?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Ahora, apúrate y prepárate. Tienes que ir a la escuela, ¿verdad? Cuando nos veamos en la escuela... finge que no pasó nada, ¿de acuerdo?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"さあ、早く準備して。学校に行かないと、でしょ？学校で会ったら…何もなかったふりしてね、わかった？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Allez, dépêche-toi de te préparer. Tu dois aller à l'école, non ? Quand on se verra à l'école... fais comme si de rien n'était, d'accord ?\""
            }
        }
    },
    "day3_nurse_home_morning_leave_2": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlag": "day3_came_from_nurse_home",
        "next": "day3_nurse_home_school_arrival",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 윙크에 심장이 또 뛴다. 서둘러 옷을 챙기고 선생님 집을 나섰다.*"
            },
            "en": {
                "name": "Me",
                "text": "*My heart races at her wink. I quickly gather my things and leave her place.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mi corazón se acelera con su guiño. Recojo mis cosas rápidamente y salgo de su casa.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生のウインクに心臓がまた跳ねる。急いで荷物をまとめて先生の家を出た。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mon cœur s'emballe à son clin d'œil. Je rassemble vite mes affaires et quitte son appartement.*"
            }
        }
    },
    "day3_nurse_home_school_arrival": {
        "character": null,
        "background": "assets/images/background/school.png",
        "next": "day3_nurse_home_suspicion",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학교에 도착했다. 오늘따라 아침 공기가 상쾌하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I arrived at school. The morning air feels especially refreshing today.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Llegué a la escuela. El aire de la mañana se siente especialmente fresco hoy.*"
            },
            "ja": {
                "name": "僕",
                "text": "*学校に着いた。今日は朝の空気が特に爽やかに感じる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je suis arrivé à l'école. L'air du matin est particulièrement rafraîchissant aujourd'hui.*"
            }
        }
    },
    "day3_nurse_home_suspicion": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day3_nurse_home_suspicion_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"{name}! 좋은 아침... 어? 오늘 어디서 온 거야? 평소랑 다른 방향에서 온 것 같은데...\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"{name}! Good morning... Huh? Where did you come from today? It seems like you came from a different direction than usual...\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"{name}! Buenos días... ¿Eh? ¿De dónde vienes hoy? Parece que viniste de una dirección diferente a la usual...\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"{name}！おはよう…あれ？今日はどこから来たの？いつもと違う方向から来たみたいだけど…\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"{name} ! Bonjour... Hein ? D'où viens-tu aujourd'hui ? On dirait que tu es venu d'une direction différente de d'habitude...\""
            }
        }
    },
    "day3_nurse_home_suspicion_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "day3_nurse_home_lie"
            },
            {
                "next": "day3_nurse_home_half_lie"
            },
            {
                "next": "day3_nurse_home_stutter"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이의 날카로운 질문에 당황한다.*",
                "choices": [
                    "\"그냥 산책하다가...\"",
                    "\"친척 집에서 자고 왔어\"",
                    "*말을 얼버무린다*"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*I'm flustered by Seoyeon's sharp question.*",
                "choices": [
                    "\"Just took a walk...\"",
                    "\"Stayed at a relative's house\"",
                    "*Stammer nervously*"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Me desconcierte la pregunta directa de Seoyeon.*",
                "choices": [
                    "\"Solo estaba paseando...\"",
                    "\"Me quedé en casa de un familiar\"",
                    "*Balbuceo nerviosamente*"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンの鋭い質問に動揺する。*",
                "choices": [
                    "「ちょっと散歩してて…」",
                    "「親戚の家に泊まってたんだ」",
                    "*しどろもどろになる*"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Je suis déstabilisé par la question directe de Seoyeon.*",
                "choices": [
                    "\"J'ai juste fait une promenade...\"",
                    "\"J'ai dormi chez un parent\"",
                    "*Bafouiller nerveusement*"
                ]
            }
        }
    },
    "day3_nurse_home_lie": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlag": "day3_seoyeon_suspicious",
        "stats": {
            "Seoyeon": {
                "affinity": -10
            }
        },
        "next": "day3_nurse_home_yuna_appears",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...산책? 이 시간에? 글쎄...\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...A walk? At this hour? Hmm...\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...¿Un paseo? ¿A esta hora? Hmm...\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…散歩？この時間に？ふうん…\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Une promenade ? À cette heure ? Hmm...\""
            }
        }
    },
    "day3_nurse_home_half_lie": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "setFlag": "day3_seoyeon_jealous",
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "next": "day3_nurse_home_yuna_appears",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...친척? 여자 친척?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...A relative? A female relative?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...¿Un familiar? ¿Una familiar mujer?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…親戚？女の人の親戚？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Un parent ? Une parente ?\""
            }
        }
    },
    "day3_nurse_home_stutter": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "setFlag": "day3_seoyeon_very_suspicious",
        "stats": {
            "Seoyeon": {
                "affinity": -12
            }
        },
        "next": "day3_nurse_home_yuna_appears",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...왜 말을 못 해? 숨기는 거 있지?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Why can't you answer? Are you hiding something?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...¿Por qué no puedes responder? ¿Estás ocultando algo?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…なんで答えられないの？何か隠してるでしょ？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Pourquoi tu ne peux pas répondre ? Tu caches quelque chose ?\""
            }
        }
    },
    "day3_nurse_home_yuna_appears": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_nurse_home_yuna_appears_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...{name}. 오늘 향수 냄새가 다르네.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...{name}. You smell different today.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...{name}. Hueles diferente hoy.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…{name}。今日、違う匂いがする。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...{name}. Tu sens différent aujourd'hui.\""
            }
        }
    },
    "day3_nurse_home_yuna_appears_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_nurse_home_yuna_appears_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 내 얼굴을 봤다. 그 눈빛이... 날카롭다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna stares at my face. Her eyes are... piercing.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna me mira fijamente. Sus ojos son... penetrantes.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナが僕の顔をじっと見つめる。その目つきが…鋭い。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna me fixe du regard. Ses yeux sont... perçants.*"
            }
        }
    },
    "day3_nurse_home_yuna_appears_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "day3_yuna_knows_secret",
        "stats": {
            "Yuna": {
                "affinity": -20
            }
        },
        "next": "day3_nurse_home_tension",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...어른의 향수. 여자 향수.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...An adult's perfume. A woman's perfume.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Perfume de adulta. Perfume de mujer.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…大人の香水。女の人の香水。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Un parfum d'adulte. Un parfum de femme.\""
            }
        }
    },
    "day3_nurse_home_tension": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "stats": {
            "Seoyeon": {
                "affinity": -8
            }
        },
        "next": "day3_nurse_home_tension_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...향수? 네가 그런 걸 뿌릴 리는 없고. 대체 간밤에 누구 품에 있었던 거야?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...What?!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...¡¿Qué?!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…え?!\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Quoi ?!\""
            }
        }
    },
    "day3_nurse_home_tension_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "choices": [
            {
                "next": "day3_nurse_home_escape"
            },
            {
                "next": "day3_nurse_home_excuse"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*분위기가 싸늘해졌다. 어떻게든 이 자리를 벗어나야 한다.*",
                "choices": [
                    "\"수업 늦겠다, 먼저 간다!\"",
                    "\"오해야, 어제 부모님 친구 집에...\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The atmosphere became tense. I need to get out of this situation somehow.*",
                "choices": [
                    "\"I'll be late for class, gotta go!\"",
                    "\"It's a misunderstanding, I was at my parents' friend's place...\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*El ambiente se puso tenso. Necesito salir de esta situación de alguna manera.*",
                "choices": [
                    "\"¡Voy a llegar tarde a clase, me voy!\"",
                    "\"Es un malentendido, estaba en casa de un amigo de mis padres...\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*雰囲気が険悪になった。なんとかこの場を切り抜けないと。*",
                "choices": [
                    "「授業に遅れる、先に行くね！」",
                    "「誤解だよ、親の友達の家に…」"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*L'atmosphère est devenue tendue. Je dois m'en sortir d'une manière ou d'une autre.*",
                "choices": [
                    "\"Je vais être en retard en cours, j'y vais !\"",
                    "\"C'est un malentendu, j'étais chez un ami de mes parents...\""
                ]
            }
        }
    },
    "day3_nurse_home_escape": {
        "character": "assets/images/characters/seyoun_sad.png",
        "background": "assets/images/background/school.png",
        "next": "day3_classroom",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서둘러 교실로 향한다. 뒤에서 느껴지는 시선이 따갑다...*"
            },
            "en": {
                "name": "Me",
                "text": "*I hurry to the classroom. The gazes from behind feel burning hot...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me apresuro al salón. Las miradas desde atrás queman...*"
            },
            "ja": {
                "name": "僕",
                "text": "*急いで教室に向かう。背後からの視線が痛い…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je me dépêche d'aller en classe. Les regards dans mon dos sont brûlants...*"
            }
        }
    },
    "day3_nurse_home_excuse": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "stats": {
            "Seoyeon": {
                "affinity": -10
            }
        },
        "next": "day3_nurse_home_excuse_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...부모님 친구? 그럼 왜 몰래 숨기는 것처럼 굴었어?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Your parents' friend? Then why did you act like you were hiding something?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...¿Amigo de tus padres? Entonces, ¿por qué actuaste como si estuvieras ocultando algo?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…お父さんの友達？じゃあなんで隠すような態度だったの？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Un ami de tes parents ? Alors pourquoi tu avais l'air de cacher quelque chose ?\""
            }
        }
    },
    "day3_nurse_home_excuse_2": {
        "character": "assets/images/characters/seyoun_sad.png",
        "background": "assets/images/background/school.png",
        "next": "day3_classroom",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이의 눈빛이 사나워 보인다. 일단 교실로 향하자.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon looks upset. Let's just head to the classroom for now.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon se ve molesta. Vamos al salón por ahora.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンが怒っているように見える。とりあえず教室に向かおう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon a l'air contrariée. Allons en classe pour l'instant.*"
            }
        }
    },
    "day3_start_2": {
        "background": "assets/images/background/room_my.png",
        "next": "day3_start_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*창밖을 보니 오늘은 날씨가 참 좋다. 벌써 금요일이라니... 주말에는 뭘 하지?*"
            },
            "en": {
                "name": "Me",
                "text": "*Looking outside, the weather is really nice today. It's already Friday... What should I do this weekend?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mirando afuera, el clima está muy bonito hoy. Ya es viernes... ¿Qué debería hacer este fin de semana?*"
            },
            "ja": {
                "name": "僕",
                "text": "*外を見ると今日は天気がいい。もう金曜日か…週末は何をしようかな？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En regardant dehors, il fait vraiment beau aujourd'hui. C'est déjà vendredi... Que faire ce week-end ?*"
            }
        }
    },
    "day3_start_3": {
        "background": "assets/images/background/room_my.png",
        "branches": [
            {
                "next": "day3_morning_message_check",
                "condition": "has_any_contact"
            },
            {
                "next": "day3_prepare_school_no_contact"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*스마트폰을 확인하니 읽지 않은 메시지가 있다. 누구일까?*"
            },
            "en": {
                "name": "Me",
                "text": "*I check my smartphone and see there are unread messages. Who could it be?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Reviso mi teléfono y veo que hay mensajes sin leer. ¿Quién será?*"
            },
            "ja": {
                "name": "僕",
                "text": "*スマホを確認すると未読メッセージがある。誰だろう？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je vérifie mon téléphone et vois des messages non lus. Qui cela peut-il être ?*"
            }
        }
    },
    "day3_morning_message_check": {
        "choices": [
            {
                "next": "day3_show_message",
                "condition": "has_number_seyoun",
                "setFlags": [
                    "viewing_seoyeon",
                    "first_check"
                ]
            },
            {
                "next": "day3_show_message",
                "condition": "has_number_yuna",
                "setFlags": [
                    "viewing_yuna",
                    "first_check"
                ]
            },
            {
                "next": "day3_show_message",
                "condition": "has_number_dain",
                "setFlags": [
                    "viewing_dain",
                    "first_check"
                ]
            },
            {
                "next": "day3_show_message",
                "condition": "has_number_nurse",
                "setFlags": [
                    "viewing_nurse",
                    "first_check"
                ]
            },
            {
                "next": "day3_show_message",
                "condition": "has_number_teacher",
                "setFlags": [
                    "viewing_teacher",
                    "first_check"
                ]
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*메시지를 확인해본다.*",
                "choices": [
                    "서연이의 메시지 확인",
                    "유나의 메시지 확인",
                    "다인이의 메시지 확인",
                    "보건선생님의 메시지 확인",
                    "담임선생님의 메시지 확인"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Let me check the messages.*",
                "choices": [
                    "Check Seoyeon's message",
                    "Check Yuna's message",
                    "Check Dain's message",
                    "Check Nurse's message",
                    "Check Homeroom Teacher's message"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Voy a revisar los mensajes.*",
                "choices": [
                    "Ver mensaje de Seoyeon",
                    "Ver mensaje de Yuna",
                    "Ver mensaje de Dain",
                    "Ver mensaje de la Enfermera",
                    "Ver mensaje de la Profesora"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*メッセージを確認しよう。*",
                "choices": [
                    "ソヨンのメッセージを確認",
                    "ユナのメッセージを確認",
                    "ダインのメッセージを確認",
                    "保健先生のメッセージを確認",
                    "担任先生のメッセージを確認"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Voyons les messages.*",
                "choices": [
                    "Voir le message de Seoyeon",
                    "Voir le message de Yuna",
                    "Voir le message de Dain",
                    "Voir le message de l'Infirmière",
                    "Voir le message du Professeur Principal"
                ]
            }
        }
    },
    "day3_show_message": {
        "branches": [
            {
                "next": "day3_msg_seoyeon",
                "condition": "viewing_seoyeon"
            },
            {
                "next": "day3_msg_yuna",
                "condition": "viewing_yuna"
            },
            {
                "next": "day3_msg_dain",
                "condition": "viewing_dain"
            },
            {
                "next": "day3_msg_nurse",
                "condition": "viewing_nurse"
            },
            {
                "next": "day3_msg_teacher",
                "condition": "viewing_teacher"
            }
        ]
    },
    "day3_msg_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "next": "day3_msg_response_first",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*새벽 6시에 온 메시지* '좋은 아침! {name}아, 오늘도 화이팅! 아, 그리고 혹시 같이 등교할래? 집 앞에서 기다릴게!'"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Message sent at 6 AM* 'Good morning! {name}, fighting for today too! Oh, and would you like to walk to school together? I'll wait for you in front of your house!'"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Mensaje enviado a las 6 AM* '¡Buenos días! {name}, ¡ánimo para hoy también! Ah, ¿quieres que caminemos juntos a la escuela? ¡Te espero frente a tu casa!'"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*朝6時に届いたメッセージ*「おはよう！{name}、今日も頑張ろうね！あ、それと一緒に登校しない？家の前で待ってるね！」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Message envoyé à 6h* 'Bonjour ! {name}, courage pour aujourd'hui aussi ! Ah, tu veux qu'on aille à l'école ensemble ? Je t'attends devant chez toi !'"
            }
        }
    },
    "day3_msg_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day3_msg_response_first",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*새벽 3시에 온 메시지* '...{name}. 오늘 아침 학교 뒷문에서 기다릴게. 같이 가자.'"
            },
            "en": {
                "name": "Yuna",
                "text": "*Message sent at 3 AM* '...{name}. I'll wait for you at the back gate this morning. Let's go together.'"
            },
            "es": {
                "name": "Yuna",
                "text": "*Mensaje enviado a las 3 AM* '...{name}. Te espero en la puerta trasera esta mañana. Vamos juntos.'"
            },
            "ja": {
                "name": "ユナ",
                "text": "*深夜3時に届いたメッセージ*「…{name}。今朝、裏門で待ってる。一緒に行こう。」"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Message envoyé à 3h* '...{name}. Je t'attendrai au portail arrière ce matin. Allons-y ensemble.'"
            }
        }
    },
    "day3_msg_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "next": "day3_msg_response_first",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*아침 7시에 온 메시지* '야호! {name}야! 같이 학교 가자! 집 어디야? 내가 찾아갈게! ><'"
            },
            "en": {
                "name": "Dain",
                "text": "*Message sent at 7 AM* 'Yay! {name}! Let's go to school together! Where do you live? I'll come find you! ><'"
            },
            "es": {
                "name": "Dain",
                "text": "*Mensaje enviado a las 7 AM* '¡Yuju! ¡{name}! ¡Vamos juntos a la escuela! ¿Dónde vives? ¡Voy a buscarte! ><'"
            },
            "ja": {
                "name": "ダイン",
                "text": "*朝7時に届いたメッセージ*「やっほー！{name}！一緒に学校行こう！家どこ？迎えに行くよ！><」"
            },
            "fr": {
                "name": "Dain",
                "text": "*Message envoyé à 7h* 'Youpi ! {name} ! Allons à l'école ensemble ! Tu habites où ? Je viens te chercher ! ><'"
            }
        }
    },
    "day3_msg_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day3_msg_response_first_teachers",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*어젯밤 11시에 온 메시지* '후훗, {name}. 오늘 아침에 같이 등교할까? 선생님이랑 단둘이... 😉'"
            },
            "en": {
                "name": "School Nurse",
                "text": "*Message sent last night at 11 PM* 'Hehe, {name}. How about walking to school together this morning? Just the two of us... 😉'"
            },
            "es": {
                "name": "Enfermera",
                "text": "*Mensaje enviado anoche a las 11 PM* 'Jeje, {name}. ¿Qué tal si caminamos juntos a la escuela esta mañana? Solo nosotros dos... 😉'"
            },
            "ja": {
                "name": "保健先生",
                "text": "*昨夜11時に届いたメッセージ*「ふふっ、{name}。今朝一緒に登校しない？先生と二人きりで…😉」"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Message envoyé hier soir à 23h* 'Héhé, {name}. Et si on allait à l'école ensemble ce matin ? Rien que nous deux... 😉'"
            }
        }
    },
    "day3_msg_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day3_msg_response_first_teachers",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*어젯밤 10시에 온 메시지* '{name}야, 혹시 내일 아침 일찍 등교하니? 선생님도 일찍 가는데 같이 걸어갈래?'"
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*Message sent last night at 10 PM* '{name}, are you going to school early tomorrow morning? I'm going early too, would you like to walk together?'"
            },
            "es": {
                "name": "Profesora",
                "text": "*Mensaje enviado anoche a las 10 PM* '{name}, ¿vas a ir temprano a la escuela mañana? Yo también voy temprano, ¿quieres caminar juntos?'"
            },
            "ja": {
                "name": "担任先生",
                "text": "*昨夜10時に届いたメッセージ*「{name}、明日の朝早く登校する？先生も早く行くんだけど、一緒に歩かない？」"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Message envoyé hier soir à 22h* '{name}, tu vas à l'école tôt demain matin ? J'y vais tôt aussi, tu veux qu'on marche ensemble ?'"
            }
        }
    },
    "day3_msg_response_first": {
        "choices": [
            {
                "next": "day3_accept_walk",
                "stats": {
                    "#{current_character}": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_reject_walk",
                "stats": {
                    "#{current_character}": {
                        "affinity": -5
                    }
                }
            },
            {
                "next": "day3_check_more_messages"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어떻게 답장할까?*",
                "choices": [
                    "좋아! 같이 가자",
                    "미안, 오늘은 혼자 갈게",
                    "다른 메시지도 확인해본다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*How should I reply?*",
                "choices": [
                    "Sure! Let's go together",
                    "Sorry, I'll go alone today",
                    "Check other messages"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¿Cómo debería responder?*",
                "choices": [
                    "¡Claro! Vamos juntos",
                    "Perdón, hoy iré solo",
                    "Revisar otros mensajes"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*どう返信しようか？*",
                "choices": [
                    "いいよ！一緒に行こう",
                    "ごめん、今日は一人で行くよ",
                    "他のメッセージを確認する"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Comment devrais-je répondre ?*",
                "choices": [
                    "Bien sûr ! Allons-y ensemble",
                    "Désolé, j'irai seul aujourd'hui",
                    "Voir les autres messages"
                ]
            }
        }
    },
    "day3_msg_response_first_teachers": {
        "choices": [
            {
                "next": "day3_accept_walk",
                "stats": {
                    "#{current_character}": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_reject_walk",
                "stats": {
                    "#{current_character}": {
                        "affinity": -5
                    }
                }
            },
            {
                "next": "day3_check_more_messages"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어떻게 답장할까?*",
                "choices": [
                    "네! 같이 가요",
                    "죄송하지만 오늘은 혼자 갈게요",
                    "다른 메시지도 확인해본다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*How should I reply?*",
                "choices": [
                    "Yes! Let's go together",
                    "Sorry, I'll go alone today",
                    "Check other messages"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¿Cómo debería responder?*",
                "choices": [
                    "¡Sí! Vamos juntos",
                    "Perdón, hoy iré solo",
                    "Revisar otros mensajes"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*どう返信しようか？*",
                "choices": [
                    "はい！一緒に行きましょう",
                    "ごめん、今日は一人で行くよ",
                    "他のメッセージを確認する"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Comment devrais-je répondre ?*",
                "choices": [
                    "Oui ! Allons-y ensemble",
                    "Désolé, j'irai seul aujourd'hui",
                    "Voir les autres messages"
                ]
            }
        }
    },
    "day3_msg_response_after_check": {
        "next": "day3_return_to_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이 메시지를 봤었지...*"
            },
            "en": {
                "name": "Me",
                "text": "*I already saw this message...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Ya vi este mensaje...*"
            },
            "ja": {
                "name": "僕",
                "text": "*このメッセージはもう見た…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai déjà vu ce message...*"
            }
        }
    },
    "day3_accept_walk": {
        "branches": [
            {
                "next": "day3_walk_with_seoyeon",
                "condition": "viewing_seoyeon"
            },
            {
                "next": "day3_walk_with_yuna",
                "condition": "viewing_yuna"
            },
            {
                "next": "day3_walk_with_dain",
                "condition": "viewing_dain"
            },
            {
                "next": "day3_walk_with_nurse",
                "condition": "viewing_nurse"
            },
            {
                "next": "day3_walk_with_teacher",
                "condition": "viewing_teacher"
            }
        ]
    },
    "day3_reject_walk": {
        "branches": [
            {
                "next": "day3_reject_msg_seoyeon",
                "condition": "viewing_seoyeon",
                "setFlags": [
                    "rejected_seoyeon"
                ]
            },
            {
                "next": "day3_reject_msg_yuna",
                "condition": "viewing_yuna",
                "setFlags": [
                    "rejected_yuna"
                ]
            },
            {
                "next": "day3_reject_msg_dain",
                "condition": "viewing_dain",
                "setFlags": [
                    "rejected_dain"
                ]
            },
            {
                "next": "day3_reject_msg_nurse",
                "condition": "viewing_nurse",
                "setFlags": [
                    "rejected_nurse"
                ]
            },
            {
                "next": "day3_reject_msg_teacher",
                "condition": "viewing_teacher",
                "setFlags": [
                    "rejected_teacher"
                ]
            }
        ]
    },
    "day3_reject_msg_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "next": "day3_after_reject",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*답장* '아... 그렇구나. 괜찮아! 그럼 학교에서 봐!'"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Reply* 'Oh... I see. It's okay! See you at school then!'"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Respuesta* 'Ah... ya veo. ¡Está bien! ¡Nos vemos en la escuela entonces!'"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*返信*「あ…そうなんだ。大丈夫！じゃあ学校でね！」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Réponse* 'Ah... je vois. C'est pas grave ! On se voit à l'école alors !'"
            }
        }
    },
    "day3_reject_msg_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day3_after_reject",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*답장* '...그래. 혼자 가는 게 더 편할 때도 있지.'"
            },
            "en": {
                "name": "Yuna",
                "text": "*Reply* '...Alright. Sometimes it's more comfortable to go alone.'"
            },
            "es": {
                "name": "Yuna",
                "text": "*Respuesta* '...Está bien. A veces es más cómodo ir solo.'"
            },
            "ja": {
                "name": "ユナ",
                "text": "*返信*「…そう。一人の方が楽な時もあるよね。」"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Réponse* '...D'accord. Parfois c'est plus confortable d'y aller seul.'"
            }
        }
    },
    "day3_reject_msg_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "next": "day3_after_reject",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*답장* '에이~ 아쉽다! 그래도 학교에서 보자!'"
            },
            "en": {
                "name": "Dain",
                "text": "*Reply* 'Aw, that's too bad! But see you at school!'"
            },
            "es": {
                "name": "Dain",
                "text": "*Respuesta* '¡Ay, qué lástima! ¡Pero nos vemos en la escuela!'"
            },
            "ja": {
                "name": "ダイン",
                "text": "*返信*「えー残念！でも学校で会おうね！」"
            },
            "fr": {
                "name": "Dain",
                "text": "*Réponse* 'Oh, c'est dommage ! Mais on se voit à l'école !'"
            }
        }
    },
    "day3_reject_msg_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day3_after_reject",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*답장* '어머, 그래? 아쉽네. 그럼 학교에서 보자.'"
            },
            "en": {
                "name": "School Nurse",
                "text": "*Reply* 'Oh my, really? That's a shame. See you at school then.'"
            },
            "es": {
                "name": "Enfermera",
                "text": "*Respuesta* 'Vaya, ¿en serio? Qué lástima. Nos vemos en la escuela entonces.'"
            },
            "ja": {
                "name": "保健先生",
                "text": "*返信*「あら、そう？残念ね。じゃあ学校でね。」"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Réponse* 'Oh, vraiment ? Quel dommage. On se voit à l'école alors.'"
            }
        }
    },
    "day3_reject_msg_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day3_after_reject",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*답장* '그래, 알았어. 학교에서 보자!'"
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*Reply* 'Okay, understood. See you at school!'"
            },
            "es": {
                "name": "Profesora",
                "text": "*Respuesta* 'Bueno, entendido. ¡Nos vemos en la escuela!'"
            },
            "ja": {
                "name": "担任先生",
                "text": "*返信*「そう、わかった。学校で会おうね！」"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Réponse* 'D'accord, compris. On se voit à l'école !'"
            }
        }
    },
    "day3_after_reject": {
        "character": null,
        "choices": [
            {
                "next": "day3_check_more_after_reject"
            },
            {
                "next": "day3_prepare_school"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다른 메시지도 확인해볼까?*",
                "choices": [
                    "다른 메시지 확인",
                    "그냥 혼자 등교한다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Should I check other messages?*",
                "choices": [
                    "Check other messages",
                    "Just go to school alone"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¿Debería revisar otros mensajes?*",
                "choices": [
                    "Revisar otros mensajes",
                    "Ir a la escuela solo"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*他のメッセージも確認しようか？*",
                "choices": [
                    "他のメッセージを確認する",
                    "一人で登校する"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Devrais-je consulter d'autres messages ?*",
                "choices": [
                    "Voir les autres messages",
                    "Aller à l'école seul"
                ]
            }
        }
    },
    "day3_check_more_messages": {
        "choices": [
            {
                "next": "day3_msg_seoyeon",
                "condition": "has_number_seyoun",
                "excludeCondition": "viewing_seoyeon",
                "clearFlags": [
                    "viewing_yuna",
                    "viewing_dain",
                    "viewing_nurse",
                    "viewing_teacher"
                ],
                "setFlags": [
                    "viewing_seoyeon"
                ]
            },
            {
                "next": "day3_msg_yuna",
                "condition": "has_number_yuna",
                "excludeCondition": "viewing_yuna",
                "clearFlags": [
                    "viewing_seoyeon",
                    "viewing_dain",
                    "viewing_nurse",
                    "viewing_teacher"
                ],
                "setFlags": [
                    "viewing_yuna"
                ]
            },
            {
                "next": "day3_msg_dain",
                "condition": "has_number_dain",
                "excludeCondition": "viewing_dain",
                "clearFlags": [
                    "viewing_seoyeon",
                    "viewing_yuna",
                    "viewing_nurse",
                    "viewing_teacher"
                ],
                "setFlags": [
                    "viewing_dain"
                ]
            },
            {
                "next": "day3_msg_nurse",
                "condition": "has_number_nurse",
                "excludeCondition": "viewing_nurse",
                "clearFlags": [
                    "viewing_seoyeon",
                    "viewing_yuna",
                    "viewing_dain",
                    "viewing_teacher"
                ],
                "setFlags": [
                    "viewing_nurse"
                ]
            },
            {
                "next": "day3_msg_teacher",
                "condition": "has_number_teacher",
                "excludeCondition": "viewing_teacher",
                "clearFlags": [
                    "viewing_seoyeon",
                    "viewing_yuna",
                    "viewing_dain",
                    "viewing_nurse"
                ],
                "setFlags": [
                    "viewing_teacher"
                ]
            },
            {
                "next": "day3_walk_with_seoyeon",
                "condition": "viewing_seoyeon",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_with_yuna",
                "condition": "viewing_yuna",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_with_dain",
                "condition": "viewing_dain",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_with_nurse",
                "condition": "viewing_nurse",
                "stats": {
                    "Nurse": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_with_teacher",
                "condition": "viewing_teacher",
                "stats": {
                    "Teacher": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_alone"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다른 메시지도 확인해본다.*",
                "choices": [
                    "서연이의 메시지 확인",
                    "유나의 메시지 확인",
                    "다인이의 메시지 확인",
                    "보건선생님의 메시지 확인",
                    "담임선생님의 메시지 확인",
                    "서연이와 같이 간다",
                    "유나와 같이 간다",
                    "다인이와 같이 간다",
                    "보건선생님과 같이 간다",
                    "담임선생님과 같이 간다",
                    "혼자 간다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Let me check other messages.*",
                "choices": [
                    "Check Seoyeon's message",
                    "Check Yuna's message",
                    "Check Dain's message",
                    "Check Nurse's message",
                    "Check Teacher's message",
                    "Go with Seoyeon",
                    "Go with Yuna",
                    "Go with Dain",
                    "Go with Nurse",
                    "Go with Teacher",
                    "Go alone"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Voy a revisar los otros mensajes.*",
                "choices": [
                    "Ver mensaje de Seoyeon",
                    "Ver mensaje de Yuna",
                    "Ver mensaje de Dain",
                    "Ver mensaje de la Enfermera",
                    "Ver mensaje de la Profesora",
                    "Ir con Seoyeon",
                    "Ir con Yuna",
                    "Ir con Dain",
                    "Ir con la Enfermera",
                    "Ir con la Profesora",
                    "Ir solo"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*他のメッセージも確認しよう。*",
                "choices": [
                    "ソヨンのメッセージを確認",
                    "ユナのメッセージを確認",
                    "ダインのメッセージを確認",
                    "保健先生のメッセージを確認",
                    "担任先生のメッセージを確認",
                    "ソヨンと行く",
                    "ユナと行く",
                    "ダインと行く",
                    "保健先生と行く",
                    "担任先生と行く",
                    "一人で行く"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Voyons les autres messages.*",
                "choices": [
                    "Voir le message de Seoyeon",
                    "Voir le message de Yuna",
                    "Voir le message de Dain",
                    "Voir le message de l'Infirmière",
                    "Voir le message du Professeur",
                    "Aller avec Seoyeon",
                    "Aller avec Yuna",
                    "Aller avec Dain",
                    "Aller avec l'Infirmière",
                    "Aller avec le Professeur",
                    "Y aller seul"
                ]
            }
        }
    },
    "day3_check_more_after_reject": {
        "character": null,
        "silhouette": true,
        "choices": [
            {
                "next": "day3_msg_seoyeon_after_reject",
                "condition": "has_number_seyoun",
                "excludeCondition": "rejected_seoyeon",
                "clearFlags": [
                    "viewing_yuna",
                    "viewing_dain",
                    "viewing_nurse",
                    "viewing_teacher"
                ],
                "setFlags": [
                    "viewing_seoyeon"
                ]
            },
            {
                "next": "day3_msg_yuna_after_reject",
                "condition": "has_number_yuna",
                "excludeCondition": "rejected_yuna",
                "clearFlags": [
                    "viewing_seoyeon",
                    "viewing_dain",
                    "viewing_nurse",
                    "viewing_teacher"
                ],
                "setFlags": [
                    "viewing_yuna"
                ]
            },
            {
                "next": "day3_msg_dain_after_reject",
                "condition": "has_number_dain",
                "excludeCondition": "rejected_dain",
                "clearFlags": [
                    "viewing_seoyeon",
                    "viewing_yuna",
                    "viewing_nurse",
                    "viewing_teacher"
                ],
                "setFlags": [
                    "viewing_dain"
                ]
            },
            {
                "next": "day3_msg_nurse_after_reject",
                "condition": "has_number_nurse",
                "excludeCondition": "rejected_nurse",
                "clearFlags": [
                    "viewing_seoyeon",
                    "viewing_yuna",
                    "viewing_dain",
                    "viewing_teacher"
                ],
                "setFlags": [
                    "viewing_nurse"
                ]
            },
            {
                "next": "day3_msg_teacher_after_reject",
                "condition": "has_number_teacher",
                "excludeCondition": "rejected_teacher",
                "clearFlags": [
                    "viewing_seoyeon",
                    "viewing_yuna",
                    "viewing_dain",
                    "viewing_nurse"
                ],
                "setFlags": [
                    "viewing_teacher"
                ]
            },
            {
                "next": "day3_prepare_school"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다른 메시지도 확인해본다.*",
                "choices": [
                    "서연이의 메시지 확인",
                    "유나의 메시지 확인",
                    "다인이의 메시지 확인",
                    "보건선생님의 메시지 확인",
                    "담임선생님의 메시지 확인",
                    "그냥 혼자 등교한다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Let me check other messages.*",
                "choices": [
                    "Check Seoyeon's message",
                    "Check Yuna's message",
                    "Check Dain's message",
                    "Check Nurse's message",
                    "Check Teacher's message",
                    "Just go to school alone"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Voy a revisar los otros mensajes.*",
                "choices": [
                    "Ver mensaje de Seoyeon",
                    "Ver mensaje de Yuna",
                    "Ver mensaje de Dain",
                    "Ver mensaje de la Enfermera",
                    "Ver mensaje de la Profesora",
                    "Ir a la escuela solo"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*他のメッセージも確認しよう。*",
                "choices": [
                    "ソヨンのメッセージを確認",
                    "ユナのメッセージを確認",
                    "ダインのメッセージを確認",
                    "保健先生のメッセージを確認",
                    "担任先生のメッセージを確認",
                    "一人で登校する"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Voyons les autres messages.*",
                "choices": [
                    "Voir le message de Seoyeon",
                    "Voir le message de Yuna",
                    "Voir le message de Dain",
                    "Voir le message de l'Infirmière",
                    "Voir le message du Professeur",
                    "Aller à l'école seul"
                ]
            }
        }
    },
    "day3_show_message_after_reject": {
        "branches": [
            {
                "next": "day3_msg_seoyeon_after_reject",
                "condition": "viewing_seoyeon"
            },
            {
                "next": "day3_msg_yuna_after_reject",
                "condition": "viewing_yuna"
            },
            {
                "next": "day3_msg_dain_after_reject",
                "condition": "viewing_dain"
            },
            {
                "next": "day3_msg_nurse_after_reject",
                "condition": "viewing_nurse"
            },
            {
                "next": "day3_msg_teacher_after_reject",
                "condition": "viewing_teacher"
            }
        ]
    },
    "day3_msg_seoyeon_after_reject": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_change_mind",
                "stats": {
                    "Seoyeon": {
                        "affinity": 1
                    }
                }
            },
            {
                "next": "day3_check_more_after_reject"
            },
            {
                "next": "day3_prepare_school"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*새벽 6시에 온 메시지* '좋은 아침! {name}아, 오늘도 화이팅! 아, 그리고 혹시 같이 등교할래? 집 앞에서 기다릴게!'",
                "choices": [
                    "서연이와 같이 간다 *아까 거절했는데...*",
                    "다른 메시지 확인",
                    "그냥 혼자 간다"
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Message sent at 6 AM* 'Good morning! {name}, fighting for today too! Oh, and would you like to walk to school together? I'll wait for you in front of your house!'",
                "choices": [
                    "Go with Seoyeon *I rejected her earlier...*",
                    "Check other messages",
                    "Just go alone"
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Mensaje enviado a las 6 AM* '¡Buenos días! {name}, ¡ánimo para hoy también! Ah, ¿quieres que caminemos juntos a la escuela? ¡Te espero frente a tu casa!'",
                "choices": [
                    "Ir con Seoyeon *La rechacé antes...*",
                    "Revisar otros mensajes",
                    "Ir solo"
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "*朝6時に届いたメッセージ*「おはよう！{name}、今日も頑張ろうね！あ、それと一緒に登校しない？家の前で待ってるね！」",
                "choices": [
                    "ソヨンと行く *さっき断ったのに…*",
                    "他のメッセージを確認する",
                    "一人で行く"
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Message envoyé à 6h* 'Bonjour ! {name}, courage pour aujourd'hui aussi ! Ah, tu veux qu'on aille à l'école ensemble ? Je t'attends devant chez toi !'",
                "choices": [
                    "Aller avec Seoyeon *Je l'ai refusée tout à l'heure...*",
                    "Voir les autres messages",
                    "Y aller seul"
                ]
            }
        }
    },
    "day3_msg_yuna_after_reject": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_change_mind",
                "stats": {
                    "Yuna": {
                        "affinity": 1
                    }
                }
            },
            {
                "next": "day3_check_more_after_reject"
            },
            {
                "next": "day3_prepare_school"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*새벽 3시에 온 메시지* '...{name}. 오늘 아침 학교 뒷문에서 기다릴게. 같이 가자.'",
                "choices": [
                    "유나와 같이 간다 *아까 거절했는데...*",
                    "다른 메시지 확인",
                    "그냥 혼자 간다"
                ]
            },
            "en": {
                "name": "Yuna",
                "text": "*Message sent at 3 AM* '...{name}. I'll wait for you at the back gate this morning. Let's go together.'",
                "choices": [
                    "Go with Yuna *I rejected her earlier...*",
                    "Check other messages",
                    "Just go alone"
                ]
            },
            "es": {
                "name": "Yuna",
                "text": "*Mensaje enviado a las 3 AM* '...{name}. Te espero en la puerta trasera esta mañana. Vamos juntos.'",
                "choices": [
                    "Ir con Yuna *La rechacé antes...*",
                    "Revisar otros mensajes",
                    "Ir solo"
                ]
            },
            "ja": {
                "name": "ユナ",
                "text": "*深夜3時に届いたメッセージ*「…{name}。今朝、裏門で待ってる。一緒に行こう。」",
                "choices": [
                    "ユナと行く *さっき断ったのに…*",
                    "他のメッセージを確認する",
                    "一人で行く"
                ]
            },
            "fr": {
                "name": "Yuna",
                "text": "*Message envoyé à 3h* '...{name}. Je t'attendrai au portail arrière ce matin. Allons-y ensemble.'",
                "choices": [
                    "Aller avec Yuna *Je l'ai refusée tout à l'heure...*",
                    "Voir les autres messages",
                    "Y aller seul"
                ]
            }
        }
    },
    "day3_msg_dain_after_reject": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_change_mind",
                "stats": {
                    "Dain": {
                        "affinity": 1
                    }
                }
            },
            {
                "next": "day3_check_more_after_reject"
            },
            {
                "next": "day3_prepare_school"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*아침 7시에 온 메시지* '야호! {name}야! 같이 학교 가자! 집 어디야? 내가 찾아갈게! ><'",
                "choices": [
                    "다인이와 같이 간다 *아까 거절했는데...*",
                    "다른 메시지 확인",
                    "그냥 혼자 간다"
                ]
            },
            "en": {
                "name": "Dain",
                "text": "*Message sent at 7 AM* 'Yay! {name}! Let's go to school together! Where do you live? I'll come find you! ><'",
                "choices": [
                    "Go with Dain *I rejected her earlier...*",
                    "Check other messages",
                    "Just go alone"
                ]
            },
            "es": {
                "name": "Dain",
                "text": "*Mensaje enviado a las 7 AM* '¡Yuju! ¡{name}! ¡Vamos juntos a la escuela! ¿Dónde vives? ¡Voy a buscarte! ><'",
                "choices": [
                    "Ir con Dain *La rechacé antes...*",
                    "Revisar otros mensajes",
                    "Ir solo"
                ]
            },
            "ja": {
                "name": "ダイン",
                "text": "*朝7時に届いたメッセージ*「やっほー！{name}！一緒に学校行こう！家どこ？迎えに行くよ！><」",
                "choices": [
                    "ダインと行く *さっき断ったのに…*",
                    "他のメッセージを確認する",
                    "一人で行く"
                ]
            },
            "fr": {
                "name": "Dain",
                "text": "*Message envoyé à 7h* 'Youpi ! {name} ! Allons à l'école ensemble ! Tu habites où ? Je viens te chercher ! ><'",
                "choices": [
                    "Aller avec Dain *Je l'ai refusée tout à l'heure...*",
                    "Voir les autres messages",
                    "Y aller seul"
                ]
            }
        }
    },
    "day3_msg_nurse_after_reject": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_change_mind_teachers",
                "stats": {
                    "Nurse": {
                        "affinity": 1
                    }
                }
            },
            {
                "next": "day3_check_more_after_reject"
            },
            {
                "next": "day3_prepare_school"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*어젯밤 11시에 온 메시지* '후훗, {name}. 오늘 아침에 같이 등교할까? 선생님이랑 단둘이... 😉'",
                "choices": [
                    "보건선생님과 같이 간다 *아까 거절했는데...*",
                    "다른 메시지 확인",
                    "그냥 혼자 간다"
                ]
            },
            "en": {
                "name": "School Nurse",
                "text": "*Message sent last night at 11 PM* 'Hehe, {name}. How about walking to school together this morning? Just the two of us... 😉'",
                "choices": [
                    "Go with Nurse *I rejected her earlier...*",
                    "Check other messages",
                    "Just go alone"
                ]
            },
            "es": {
                "name": "Enfermera",
                "text": "*Mensaje enviado anoche a las 11 PM* 'Jeje, {name}. ¿Qué tal si caminamos juntos a la escuela esta mañana? Solo nosotros dos... 😉'",
                "choices": [
                    "Ir con la Enfermera *La rechacé antes...*",
                    "Revisar otros mensajes",
                    "Ir solo"
                ]
            },
            "ja": {
                "name": "保健先生",
                "text": "*昨夜11時に届いたメッセージ*「ふふっ、{name}。今朝一緒に登校しない？先生と二人きりで…😉」",
                "choices": [
                    "保健先生と行く *さっき断ったのに…*",
                    "他のメッセージを確認する",
                    "一人で行く"
                ]
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Message envoyé hier soir à 23h* 'Héhé, {name}. Et si on allait à l'école ensemble ce matin ? Rien que nous deux... 😉'",
                "choices": [
                    "Aller avec l'Infirmière *Je l'ai refusée tout à l'heure...*",
                    "Voir les autres messages",
                    "Y aller seul"
                ]
            }
        }
    },
    "day3_msg_teacher_after_reject": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_change_mind_teachers",
                "stats": {
                    "Teacher": {
                        "affinity": 1
                    }
                }
            },
            {
                "next": "day3_check_more_after_reject"
            },
            {
                "next": "day3_prepare_school"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*어젯밤 10시에 온 메시지* '{name}야, 혹시 내일 아침 일찍 등교하니? 선생님도 일찍 가는데 같이 걸어갈래?'",
                "choices": [
                    "담임선생님과 같이 간다 *아까 거절했는데...*",
                    "다른 메시지 확인",
                    "그냥 혼자 간다"
                ]
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*Message sent last night at 10 PM* '{name}, are you going to school early tomorrow morning? I'm going early too, would you like to walk together?'",
                "choices": [
                    "Go with Teacher *I rejected her earlier...*",
                    "Check other messages",
                    "Just go alone"
                ]
            },
            "es": {
                "name": "Profesora",
                "text": "*Mensaje enviado anoche a las 10 PM* '{name}, ¿vas a ir temprano a la escuela mañana? Yo también voy temprano, ¿quieres caminar juntos?'",
                "choices": [
                    "Ir con la Profesora *La rechacé antes...*",
                    "Revisar otros mensajes",
                    "Ir solo"
                ]
            },
            "ja": {
                "name": "担任先生",
                "text": "*昨夜10時に届いたメッセージ*「{name}、明日の朝早く登校する？先生も早く行くんだけど、一緒に歩かない？」",
                "choices": [
                    "担任先生と行く *さっき断ったのに…*",
                    "他のメッセージを確認する",
                    "一人で行く"
                ]
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Message envoyé hier soir à 22h* '{name}, tu vas à l'école tôt demain matin ? J'y vais tôt aussi, tu veux qu'on marche ensemble ?'",
                "choices": [
                    "Aller avec le Professeur *Je l'ai refusée tout à l'heure...*",
                    "Voir les autres messages",
                    "Y aller seul"
                ]
            }
        }
    },
    "day3_change_mind": {
        "character": null,
        "silhouette": true,
        "next": "day3_change_mind_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다시 메시지를 보냈다. '미안, 방금 다른 메시지 확인하고 왔어. 역시 같이 가고 싶어!'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent another message. 'Sorry, I just checked other messages. I actually want to go together!'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Envié otro mensaje. 'Perdón, estaba revisando otros mensajes. ¡En realidad quiero ir contigo!'*"
            },
            "ja": {
                "name": "僕",
                "text": "*もう一度メッセージを送った。「ごめん、他のメッセージ確認してた。やっぱり一緒に行きたい！」*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un autre message. 'Pardon, je consultais d'autres messages. En fait, j'aimerais bien qu'on y aille ensemble !'*"
            }
        }
    },
    "day3_change_mind_teachers": {
        "character": null,
        "silhouette": true,
        "next": "day3_change_mind_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다시 메시지를 보냈다. '죄송해요, 역시 같이 가고 싶어요!'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent another message. 'Sorry, I actually want to go together!'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Envié otro mensaje. 'Perdón, ¡en realidad quiero ir contigo!'*"
            },
            "ja": {
                "name": "僕",
                "text": "*もう一度メッセージを送った。「すみません、やっぱり一緒に行きたいです！」*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un autre message. 'Pardon, en fait j'aimerais bien qu'on y aille ensemble !'*"
            }
        }
    },
    "day3_change_mind_reply": {
        "branches": [
            {
                "next": "day3_change_mind_seoyeon",
                "condition": "viewing_seoyeon"
            },
            {
                "next": "day3_change_mind_yuna",
                "condition": "viewing_yuna"
            },
            {
                "next": "day3_change_mind_dain",
                "condition": "viewing_dain"
            },
            {
                "next": "day3_change_mind_nurse",
                "condition": "viewing_nurse"
            },
            {
                "next": "day3_change_mind_teacher",
                "condition": "viewing_teacher"
            }
        ]
    },
    "day3_change_mind_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "next": "day3_walk_with_seoyeon",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*즉각 답장이 왔다* '정말?! 좋아! 그럼 빨리 나와! 기다릴게!'"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Immediate reply* 'Really?! Great! Then hurry up and come out! I'll wait!'"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Respuesta inmediata* '¡¿En serio?! ¡Genial! ¡Entonces sal rápido! ¡Te espero!'"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*即座に返信が来た*「本当？！やったー！じゃあ早く出てきて！待ってるね！」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Réponse immédiate* 'Vraiment ?! Super ! Alors dépêche-toi de sortir ! Je t'attends !'"
            }
        }
    },
    "day3_change_mind_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day3_walk_with_yuna",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*잠시 후 답장이 왔다* '...알았어. 기다릴게.'"
            },
            "en": {
                "name": "Yuna",
                "text": "*Reply after a moment* '...Okay. I'll wait.'"
            },
            "es": {
                "name": "Yuna",
                "text": "*Respuesta después de un momento* '...Está bien. Te espero.'"
            },
            "ja": {
                "name": "ユナ",
                "text": "*しばらくして返信が来た*「…わかった。待ってる。」"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Réponse après un moment* '...D'accord. J'attends.'"
            }
        }
    },
    "day3_change_mind_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "next": "day3_walk_with_dain",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*곧바로 답장이 왔다* '오케이! 그럼 지금 출발할게! 기다려!'"
            },
            "en": {
                "name": "Dain",
                "text": "*Immediate reply* 'Okay! I'm leaving now! Wait for me!'"
            },
            "es": {
                "name": "Dain",
                "text": "*Respuesta inmediata* '¡Okey! ¡Ya salgo! ¡Espérame!'"
            },
            "ja": {
                "name": "ダイン",
                "text": "*即座に返信が来た*「オッケー！今出発するね！待っててー！」"
            },
            "fr": {
                "name": "Dain",
                "text": "*Réponse immédiate* 'OK ! Je pars maintenant ! Attends-moi !'"
            }
        }
    },
    "day3_change_mind_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day3_walk_with_nurse",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*답장* '후훗, 마음이 바뀌었구나? 좋아, 그럼 빨리 나와.'"
            },
            "en": {
                "name": "School Nurse",
                "text": "*Reply* 'Hehe, changed your mind? Good, come out quickly.'"
            },
            "es": {
                "name": "Enfermera",
                "text": "*Respuesta* 'Jeje, ¿cambiaste de opinión? Bien, sal rápido.'"
            },
            "ja": {
                "name": "保健先生",
                "text": "*返信*「ふふ、気が変わった？よかった、早く出てきて。」"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Réponse* 'Héhé, tu as changé d'avis ? Bien, sors vite.'"
            }
        }
    },
    "day3_change_mind_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day3_walk_with_teacher",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*답장* '그래? 괜찮아! 그럼 빨리 준비하렴.'"
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*Reply* 'Really? That's fine! Get ready quickly.'"
            },
            "es": {
                "name": "Profesora",
                "text": "*Respuesta* '¿En serio? ¡Está bien! Prepárate rápido.'"
            },
            "ja": {
                "name": "担任先生",
                "text": "*返信*「本当？大丈夫よ！早く準備してね。」"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Réponse* 'Vraiment ? Pas de souci ! Prépare-toi vite.'"
            }
        }
    },
    "day3_return_to_choice": {
        "choices": [
            {
                "next": "day3_walk_with_seoyeon",
                "condition": "has_number_seyoun",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_with_yuna",
                "condition": "has_number_yuna",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_with_dain",
                "condition": "has_number_dain",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_with_nurse",
                "condition": "has_number_nurse",
                "stats": {
                    "Nurse": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_with_teacher",
                "condition": "has_number_teacher",
                "stats": {
                    "Teacher": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_alone"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*음... 누구랑 같이 갈까?*",
                "choices": [
                    "서연이와 같이 간다",
                    "유나와 같이 간다",
                    "다인이와 같이 간다",
                    "보건선생님과 같이 간다",
                    "담임선생님과 같이 간다",
                    "혼자 간다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Hmm... who should I go with?*",
                "choices": [
                    "Go with Seoyeon",
                    "Go with Yuna",
                    "Go with Dain",
                    "Go with Nurse",
                    "Go with Teacher",
                    "Go alone"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Hmm... ¿con quién debería ir?*",
                "choices": [
                    "Ir con Seoyeon",
                    "Ir con Yuna",
                    "Ir con Dain",
                    "Ir con la Enfermera",
                    "Ir con la Profesora",
                    "Ir solo"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*うーん…誰と一緒に行こうか？*",
                "choices": [
                    "ソヨンと行く",
                    "ユナと行く",
                    "ダインと行く",
                    "保健先生と行く",
                    "担任先生と行く",
                    "一人で行く"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Hmm... avec qui devrais-je y aller ?*",
                "choices": [
                    "Aller avec Seoyeon",
                    "Aller avec Yuna",
                    "Aller avec Dain",
                    "Aller avec l'Infirmière",
                    "Aller avec le Professeur",
                    "Y aller seul"
                ]
            }
        }
    },
    "day3_walk_with_seoyeon": {
        "background": "assets/images/background/street.png",
        "bgm": "daily2.mp3",
        "character": "assets/images/characters/seyoun_laugh.png",
        "setFlag": "day3_morning_with_seoyeon",
        "next": "day3_walk_with_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이의 집 앞으로 향했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I headed to the front of Seoyeon's house.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me dirigí al frente de la casa de Seoyeon.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンの家の前に向かった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je me suis dirigé devant la maison de Seoyeon.*"
            }
        }
    },
    "day3_walk_with_seoyeon_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day3_walk_seoyeon_dream",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"와! 진짜 왔네! 고마워!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Wow! You really came! Thank you!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡Wow! ¡De verdad viniste! ¡Gracias!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"わあ！本当に来てくれたんだ！ありがとう！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Waouh ! Tu es vraiment venu ! Merci !\""
            }
        }
    },
    "day3_walk_seoyeon_dream": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day3_walk_seoyeon_dream_choice",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*나란히 걸으며* \"있잖아, {name}아. 어젯밤에 내가 무슨 꿈을 꿨는지 알아?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Walking side by side* \"Hey, {name}. Do you know what I dreamed about last night?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Caminando lado a lado* \"Oye, {name}. ¿Sabes qué soñé anoche?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*並んで歩きながら*「ねえ、{name}。昨夜の夢の話、聞いてくれる？」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*En marchant côte à côte* \"Hé, {name}. Tu sais ce que j'ai rêvé la nuit dernière ?\""
            }
        }
    },
    "day3_walk_seoyeon_dream_choice": {
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "day3_walk_seoyeon_dream_ask"
            },
            {
                "next": "day3_walk_seoyeon_dream_me"
            },
            {
                "next": "day3_walk_seoyeon_dream_bad"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이가 갑자기 꿈 이야기를 꺼낸다.*",
                "choices": [
                    "무슨 꿈?",
                    "나 나온 꿈?",
                    "악몽?"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon suddenly brings up a dream.*",
                "choices": [
                    "What kind of dream?",
                    "Was I in it?",
                    "A nightmare?"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon de repente saca el tema de un sueño.*",
                "choices": [
                    "¿Qué tipo de sueño?",
                    "¿Yo salía?",
                    "¿Una pesadilla?"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンが突然夢の話を切り出す。*",
                "choices": [
                    "どんな夢？",
                    "僕が出てきた夢？",
                    "悪夢？"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon aborde soudain le sujet d'un rêve.*",
                "choices": [
                    "Quel genre de rêve ?",
                    "J'y étais ?",
                    "Un cauchemar ?"
                ]
            }
        }
    },
    "day3_walk_seoyeon_dream_ask": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day3_walk_seoyeon_crosswalk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이의 얼굴이 빨개진다* \"비, 비밀! 아무것도 아니야! 왜 물어봐!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon's face turns red* \"I-it's a secret! It was nothing! Why are you asking?!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*La cara de Seoyeon se pone roja* \"¡E-es un secreto! ¡No fue nada! ¡¿Por qué preguntas?!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンの顔が真っ赤になる*「ひ、秘密！なんでもないよ！なんで聞くの！」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Le visage de Seoyeon rougit* \"C-c'est un secret ! C'était rien ! Pourquoi tu demandes ?!\""
            }
        }
    },
    "day3_walk_seoyeon_dream_me": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day3_walk_seoyeon_crosswalk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 멈칫한다* \"...뭐야. 왜 그렇게 생각해. ...맞긴 하지만 그건 중요한 게 아니라...\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon freezes* \"W-what?! Why would you think that! ...Okay, maybe, but that's not the point!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon se congela* \"¡¿Q-qué?! ¡¿Por qué piensas eso?! ...Bueno, tal vez, ¡pero ese no es el punto!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンが固まる*「な…っ！なんでそう思うの！…当たってるけど、そういう話じゃなくて…」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon se fige* \"Q-quoi ?! Pourquoi tu penses ça ! ...Bon, peut-être, mais c'est pas la question !\""
            }
        }
    },
    "day3_walk_seoyeon_dream_bad": {
        "character": "assets/images/characters/seyoun_pout.png",
        "stats": {
            "Seoyeon": {
                "affinity": -2
            }
        },
        "next": "day3_walk_seoyeon_crosswalk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 한숨을 쉬며* \"야, 너 완전 분위기 파괴야. 좋은 꿈이었거든!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon sighs* \"Ugh, you totally killed the mood. It was a good dream, you know!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon suspira* \"Ugh, arruinaste totalmente el ambiente. ¡Fue un buen sueño, sabes!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンがため息をつく*「もう、完全に雰囲気壊しだよ。いい夢だったのに！」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon soupire* \"Pfff, tu as complètement cassé l'ambiance. C'était un beau rêve, tu sais !\""
            }
        }
    },
    "day3_walk_seoyeon_crosswalk": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day3_walk_seoyeon_crosswalk_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*횡단보도에서 신호를 기다린다. 가만히 서 있으니 서연이의 손이 내 손에 닿을 듯 말 듯 가깝다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We wait for the light at the crosswalk. Standing still, Seoyeon's hand is tantalizingly close to mine.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Esperamos la luz en el cruce peatonal. Sin movernos, la mano de Seoyeon está tentadoramente cerca de la mía.*"
            },
            "ja": {
                "name": "僕",
                "text": "*横断歩道で信号を待つ。じっと立っていると、ソヨンの手が僕の手に触れそうなくらい近い。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*On attend le feu au passage piéton. Immobiles, la main de Seoyeon est si tentante de proximité avec la mienne.*"
            }
        }
    },
    "day3_walk_seoyeon_crosswalk_2": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day3_walk_seoyeon_freetalk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이가 새끼손가락으로 내 손을 살짝 건드린다. 눈이 마주치자 둘 다 동시에 시선을 돌린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon lightly brushes my hand with her pinky finger. Our eyes meet, and we both look away at the same time.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon roza ligeramente mi mano con su meñique. Nuestros ojos se encuentran, y ambos miramos hacia otro lado al mismo tiempo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンが小指で僕の手をそっと触れる。目が合うと、二人同時に視線をそらす。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon effleure ma main avec son petit doigt. Nos regards se croisent, et on détourne les yeux en même temps.*"
            }
        }
    },
    "day3_walk_seoyeon_freetalk": {
        "type": "free_talk",
        "character": "assets/images/characters/seyoun_shy.png",
        "maxTurns": 4,
        "next": "day3_seoyeon_weekend_talk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학교까지 가는 길, 서연이와 이런저런 이야기를 나눈다.*",
                "context": "서연이와 아침 등교길에 나란히 걸으며 대화하는 중. 횡단보도에서 손이 닿아 둘 다 살짝 의식하고 있는 상태. 금요일 아침이라 주말 이야기가 나올 수 있다."
            },
            "en": {
                "name": "Me",
                "text": "*We chat about various things on the way to school.*",
                "context": "Walking to school with Seoyeon side by side. Our hands touched at the crosswalk, so there's a slightly self-conscious atmosphere. It's Friday morning, so weekend plans might come up."
            },
            "es": {
                "name": "Yo",
                "text": "*Charlamos de varias cosas camino a la escuela.*",
                "context": "Caminando a la escuela junto a Seoyeon. Nuestras manos se tocaron en el cruce, así que hay un ambiente un poco tímido. Es viernes por la mañana, así que podrían surgir planes para el fin de semana."
            },
            "ja": {
                "name": "僕",
                "text": "*学校までの道、ソヨンと色んな話をする。*",
                "context": "ソヨンと並んで朝の登校路を歩いている。横断歩道で手が触れ合い、二人とも少し意識している状態。金曜の朝なので週末の話題が出るかもしれない。"
            },
            "fr": {
                "name": "Moi",
                "text": "*On discute de tout et de rien sur le chemin de l'école.*",
                "context": "On marche vers l'école avec Seoyeon côte à côte. Nos mains se sont touchées au passage piéton, créant une atmosphère un peu gênée. C'est vendredi matin, les projets du week-end pourraient être évoqués."
            }
        }
    },
    "day3_seoyeon_weekend_talk": {
        "character": "assets/images/characters/seyoun_shy.png",
        "choices": [
            {
                "next": "day3_seoyeon_weekend_ask"
            },
            {
                "next": "day3_seoyeon_weekend_tease"
            },
            {
                "next": "day3_seoyeon_weekend_direct"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*학교 정문이 보일 즈음, 서연이가 뭔가 꺼내기 어려운 듯 말을 더듬는다* \"저기… {name}아. 이번 주말에 혹시 시간 있어? 가보고 싶은 카페가 있거든…\"",
                "choices": [
                    "어떤 카페인데?",
                    "나랑 단둘이?",
                    "좋아, 언제 갈까?"
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "*As the school gate comes into view, Seoyeon stutters as if trying to say something difficult* \"Um... {name}. Are you free this weekend? There's a café I've been wanting to visit...\"",
                "choices": [
                    "What kind of café?",
                    "Just the two of us?",
                    "Sure, when should we go?"
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Cuando aparece la puerta de la escuela, Seoyeon tartamudea como si intentara decir algo difícil* \"Este... {name}. ¿Estás libre este fin de semana? Hay una cafetería que he querido visitar...\"",
                "choices": [
                    "¿Qué tipo de cafetería?",
                    "¿Solo nosotros dos?",
                    "Claro, ¿cuándo vamos?"
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "*校門が見えてくる頃、ソヨンが何か言いづらそうに口ごもる*「あの…{name}。今週末、もし時間あったら…行きたいカフェがあるんだけど…」",
                "choices": [
                    "どんなカフェ？",
                    "二人きりで？",
                    "いいよ、いつ行く？"
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Alors que le portail de l'école apparaît, Seoyeon bégaie comme si elle essayait de dire quelque chose de difficile* \"Euh... {name}. Tu es libre ce week-end ? Il y a un café que j'aimerais visiter...\"",
                "choices": [
                    "Quel genre de café ?",
                    "Juste nous deux ?",
                    "Bien sûr, quand y va-t-on ?"
                ]
            }
        }
    },
    "day3_seoyeon_weekend_ask": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day3_seoyeon_weekend_choice",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"SNS에서 본 건데, 분위기가 진짜 예쁜 곳이야. 혼자 가긴 좀 그래서… 토요일 오후 2시, 공원 분수대 앞에서 만나자!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"I saw it on social media, and it has a really pretty vibe. It's awkward going alone though... Let's meet at the park fountain at 2 PM on Saturday!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Lo vi en redes sociales, y tiene un ambiente muy bonito. Es incómodo ir sola... ¡Nos vemos en la fuente del parque a las 2 PM el sábado!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"SNSで見つけたんだけど、すごく雰囲気がいいところなの。一人で行くのはちょっと…土曜日の午後2時、公園の噴水前で会おう！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Je l'ai vu sur les réseaux sociaux, l'ambiance a l'air vraiment jolie. C'est gênant d'y aller seule... Retrouvons-nous à la fontaine du parc à 14h samedi !\""
            }
        }
    },
    "day3_seoyeon_weekend_tease": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day3_seoyeon_weekend_choice",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이 얼굴이 새빨개진다* \"...뭐야. 그냥 친구끼리 가는 거지. …근데 다른 사람은 안 불렀어. 토요일 오후 2시, 공원 분수대 앞이야.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon's face turns bright red* \"W-what?! It's just friends hanging out! ...But I didn't invite anyone else. Saturday at 2 PM, at the park fountain.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*La cara de Seoyeon se pone roja* \"¡¿Q-qué?! ¡Solo somos amigos saliendo! ...Pero no invité a nadie más. Sábado a las 2 PM, en la fuente del parque.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンの顔が真っ赤になる*「な…っ！ただの友達同士のお出かけだし！…でも他の人は誘ってないけど。土曜日の午後2時、公園の噴水前ね。」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Le visage de Seoyeon devient écarlate* \"Q-quoi ?! On sort juste entre amis ! ...Mais je n'ai invité personne d'autre. Samedi à 14h, à la fontaine du parc.\""
            }
        }
    },
    "day3_seoyeon_weekend_direct": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day3_seoyeon_weekend_choice",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 환하게 웃는다* \"...정말? 토요일 오후 2시, 공원 분수대 앞이야. 늦으면 안 돼.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon beams* \"Really?! Saturday at 2 PM, at the park fountain! You better not be late!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon sonríe radiante* \"¡¿En serio?! ¡Sábado a las 2 PM, en la fuente del parque! ¡Más te vale no llegar tarde!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンが満面の笑みを浮かべる*「本当？！土曜日の午後2時、公園の噴水前ね！遅れたらダメだよ！」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon rayonne* \"Vraiment ?! Samedi à 14h, à la fontaine du parc ! T'as pas intérêt à être en retard !\""
            }
        }
    },
    "day3_seoyeon_weekend_choice": {
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "day3_seoyeon_weekend_yes",
                "setFlag": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_seoyeon_weekend_later"
            },
            {
                "next": "day3_seoyeon_weekend_no"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이가 기대에 찬 눈으로 나를 바라본다.*",
                "choices": [
                    "알았어, 꼭 갈게",
                    "생각해보고 답해줄게",
                    "미안, 주말에 좀 바빠서"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon looks at me with eyes full of anticipation.*",
                "choices": [
                    "Sure, I'll definitely be there",
                    "Let me think about it",
                    "Sorry, I'm busy this weekend"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon me mira con ojos llenos de anticipación.*",
                "choices": [
                    "Claro, definitivamente estaré ahí",
                    "Déjame pensarlo",
                    "Perdón, estoy ocupado este fin de semana"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンが期待に満ちた目で僕を見つめる。*",
                "choices": [
                    "わかった、絶対行くよ",
                    "考えてから返事するね",
                    "ごめん、週末はちょっと忙しくて"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon me regarde avec des yeux pleins d'attente.*",
                "choices": [
                    "Bien sûr, j'y serai sans faute",
                    "Laisse-moi y réfléchir",
                    "Désolé, je suis occupé ce week-end"
                ]
            }
        }
    },
    "day3_seoyeon_weekend_yes": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 8
            }
        },
        "next": "day3_arrive_school",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 소리를 지르다 급하게 입을 막는다* \"…헴! 그, 그래. 그럼 토요일에 봐. 기대해도 좋아!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon nearly shouts but quickly covers her mouth* \"...Ahem! O-okay. See you Saturday then. You can look forward to it!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon casi grita pero rápidamente se cubre la boca* \"...¡Ejem! B-bueno. Nos vemos el sábado entonces. ¡Puedes esperar con ansias!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンが叫びそうになって慌てて口を押さえる*「…ゴホン！そ、そうだね。じゃあ土曜日にね。楽しみにしてて！」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon manque de crier mais se couvre vite la bouche* \"...Ahem ! D-d'accord. À samedi alors. Tu peux t'en réjouir !\""
            }
        }
    },
    "day3_seoyeon_weekend_later": {
        "character": "assets/images/characters/seyoun_sad.png",
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "next": "day3_arrive_school",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이의 표정이 살짝 어두워진다* \"…응, 알겠어. 그럼 나중에 연락해줘.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon's expression dims slightly* \"...Okay, I see. Let me know later then.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*La expresión de Seoyeon se oscurece ligeramente* \"...Bueno, entiendo. Avísame después entonces.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンの表情が少し曇る*「…うん、わかった。じゃあ後で教えてね。」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*L'expression de Seoyeon s'assombrit légèrement* \"...D'accord, je comprends. Dis-moi plus tard alors.\""
            }
        }
    },
    "day3_seoyeon_weekend_no": {
        "character": "assets/images/characters/seyoun_sad.png",
        "stats": {
            "Seoyeon": {
                "affinity": -15
            }
        },
        "next": "day3_arrive_school",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 억지로 웃는다* \"…아, 그래? 괜찮아! 뭐, 다음에 가면 되지!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon forces a smile* \"...Oh, is that so? It's fine! We can go some other time!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon fuerza una sonrisa* \"...Ah, ¿en serio? ¡Está bien! ¡Podemos ir en otra ocasión!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンが無理に笑う*「…あ、そうなんだ？大丈夫！また今度行けばいいよね！」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon force un sourire* \"...Ah, c'est vrai ? C'est pas grave ! On ira une autre fois !\""
            }
        }
    },
    "day3_walk_with_yuna": {
        "background": "assets/images/background/street.png",
        "bgm": "daily2.mp3",
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "day3_morning_with_yuna",
        "next": "day3_walk_yuna_greet",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학교 가는 길 골목 쪽으로 향했다. 나무 그늘 아래 유나가 서 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I headed toward the alley on the way to school. Yuna is standing under the shade of a tree.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me dirigí hacia el callejón camino a la escuela. Yuna está parada bajo la sombra de un árbol.*"
            },
            "ja": {
                "name": "僕",
                "text": "*学校への近道の路地に向かった。木陰の下にユナが立っている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je me suis dirigé vers la ruelle sur le chemin de l'école. Yuna se tient à l'ombre d'un arbre.*"
            }
        }
    },
    "day3_walk_yuna_greet": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_walk_yuna_leaf",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...왔구나. (조용히 걸으며) 오늘 날씨가 좋네. 하지만... 평화롭게 보이는 것들이 가장 위험한 법이야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...You came. (Walking quietly) The weather is nice today. But... things that look peaceful are often the most dangerous.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Viniste. (Caminando tranquilamente) El clima está lindo hoy. Pero... las cosas que se ven pacíficas son a menudo las más peligrosas.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…来たんだ。（静かに歩きながら）今日は天気がいいね。でも…平和に見えるものほど、一番危険なんだよ。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Tu es venu. (Marchant silencieusement) Il fait beau aujourd'hui. Mais... les choses qui semblent paisibles sont souvent les plus dangereuses.\""
            }
        }
    },
    "day3_walk_yuna_leaf": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_walk_yuna_leaf_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*바람에 날린 나뭇잎이 내 머리 위에 내려앉았다. 유나가 가만히 손을 뻗어 그것을 집어든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A leaf blown by the wind lands on my head. Yuna quietly reaches out and picks it off.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Una hoja llevada por el viento cae en mi cabeza. Yuna silenciosamente extiende la mano y la quita.*"
            },
            "ja": {
                "name": "僕",
                "text": "*風に飛ばされた葉っぱが僕の頭の上に落ちた。ユナが静かに手を伸ばしてそれを取る。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Une feuille emportée par le vent atterrit sur ma tête. Yuna tend silencieusement la main et la retire.*"
            }
        }
    },
    "day3_walk_yuna_leaf_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_walk_yuna_leaf_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...꽃보다 예쁘다.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Prettier than a flower.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Más bonita que una flor.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…花より綺麗。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Plus jolie qu'une fleur.\""
            }
        }
    },
    "day3_walk_yuna_leaf_3": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_walk_yuna_necktie",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 무표정하게 내뱉은 말에 심장이 뛴다. 뭐라고 해야 할지 몰라 멈칫하는데, 유나가 갑자기 발을 멈춘다.*"
            },
            "en": {
                "name": "Me",
                "text": "*My heart skips at Yuna's deadpan remark. Before I can respond, Yuna suddenly stops walking.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mi corazón salta con el comentario inexpresivo de Yuna. Antes de que pueda responder, Yuna de repente deja de caminar.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナの無表情な一言に心臓が跳ねる。何か言おうとする前に、ユナが急に立ち止まる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mon cœur fait un bond face à la remarque impassible de Yuna. Avant que je puisse répondre, Yuna s'arrête soudainement.*"
            }
        }
    },
    "day3_walk_yuna_necktie": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_walk_yuna_necktie_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...저기. 가만히 있어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Hey. Stay still.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Oye. Quédate quieto.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…ねえ。じっとして。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Hé. Ne bouge pas.\""
            }
        }
    },
    "day3_walk_yuna_necktie_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day3_walk_yuna_necktie_still"
            },
            {
                "next": "day3_walk_yuna_necktie_cold"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 내 넥타이를 고쳐매기 시작한다. 얼굴이 10cm 거리까지 가까워진다.*",
                "choices": [
                    "*가만히 있는다*",
                    "유나 손이 차갑다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Yuna starts fixing my necktie. Her face is barely 10 centimeters away from mine.*",
                "choices": [
                    "*Stay still*",
                    "Your hands are cold, Yuna"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna empieza a arreglar mi corbata. Su cara está a apenas 10 centímetros de la mía.*",
                "choices": [
                    "*Quedarme quieto*",
                    "Tus manos están frías, Yuna"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ユナが僕のネクタイを直し始める。顔が10センチの距離まで近づいている。*",
                "choices": [
                    "*じっとしている*",
                    "ユナ、手が冷たいね"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna commence à ajuster ma cravate. Son visage est à peine à 10 centimètres du mien.*",
                "choices": [
                    "*Rester immobile*",
                    "Tes mains sont froides, Yuna"
                ]
            }
        }
    },
    "day3_walk_yuna_necktie_still": {
        "character": "assets/images/characters/yuna_shy.png",
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day3_walk_yuna_freetalk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...바보. 이렇게 풀어져 있으면 어떡해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Dummy. How can you walk around with it this loose.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Tonto. Cómo puedes caminar con esto tan suelto.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…バカ。こんなに緩いままでどうするの。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Idiot. Comment tu peux te balader avec une cravate aussi lâche.\""
            }
        }
    },
    "day3_walk_yuna_necktie_cold": {
        "character": "assets/images/characters/yuna_shy.png",
        "stats": {
            "Yuna": {
                "affinity": 8
            }
        },
        "next": "day3_walk_yuna_freetalk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나의 손이 멈춘다. 잠시 침묵이 흐른 뒤* \"...따뜻하게 해줄까?\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna's hands pause. After a moment of silence* \"...Want me to warm them up?\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Las manos de Yuna se detienen. Después de un momento de silencio* \"...¿Quieres que las caliente?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*ユナの手が止まる。少しの沈黙の後*「…温めてあげようか？」"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Les mains de Yuna s'arrêtent. Après un moment de silence* \"...Tu veux que je les réchauffe ?\""
            }
        }
    },
    "day3_walk_yuna_freetalk": {
        "type": "free_talk",
        "character": "assets/images/characters/yuna_shy.png",
        "maxTurns": 3,
        "next": "day3_walk_yuna_talk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나와 나란히 학교를 향해 걷는다. 조용하지만 불편하지 않은 침묵이 흐른다.*",
                "context": "유나와 아침 등교길. 유나가 넥타이를 고쳐준 직후라 묘한 분위기. 조용하지만 가까운 거리감이 느껴지는 상태."
            },
            "en": {
                "name": "Me",
                "text": "*I walk alongside Yuna toward school. A quiet but comfortable silence fills the air.*",
                "context": "Walking to school with Yuna in the morning. She just fixed my necktie, creating an oddly intimate atmosphere. It's quiet but the distance between us feels close."
            },
            "es": {
                "name": "Yo",
                "text": "*Camino junto a Yuna hacia la escuela. Un silencio tranquilo pero cómodo llena el aire.*",
                "context": "Caminando a la escuela con Yuna por la mañana. Acaba de arreglarme la corbata, creando un ambiente extrañamente íntimo. Es tranquilo pero la distancia entre nosotros se siente cercana."
            },
            "ja": {
                "name": "僕",
                "text": "*ユナと並んで学校に向かって歩く。静かだけど心地よい沈黙が流れる。*",
                "context": "ユナと朝の登校路を歩いている。ユナがネクタイを直してくれた直後で、妙に親密な雰囲気。静かだが距離感が近い。"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je marche aux côtés de Yuna vers l'école. Un silence calme mais confortable emplit l'air.*",
                "context": "On marche vers l'école avec Yuna le matin. Elle vient d'ajuster ma cravate, créant une atmosphère étrangement intime. C'est silencieux mais la distance entre nous semble réduite."
            }
        }
    },
    "day3_walk_yuna_talk": {
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day3_yuna_weekend_ask"
            },
            {
                "next": "day3_yuna_weekend_curious"
            },
            {
                "next": "day3_yuna_weekend_direct"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*한적한 길을 걸으며 유나가 갑자기 입을 연다* \"{name}, 주말에... 너한테만 보여주고 싶은 곳이 있어.\"",
                "choices": [
                    "어떤 곳인데?",
                    "또 무슨 비밀이야?",
                    "...좋아, 언제?"
                ]
            },
            "en": {
                "name": "Yuna",
                "text": "*Walking down the quiet path, Yuna suddenly speaks* \"{name}, this weekend... there's a place I want to show only you.\"",
                "choices": [
                    "What kind of place?",
                    "Another secret?",
                    "...Okay, when?"
                ]
            },
            "es": {
                "name": "Yuna",
                "text": "*Caminando por el sendero tranquilo, Yuna habla de repente* \"{name}, este fin de semana... hay un lugar que quiero mostrarte solo a ti.\"",
                "choices": [
                    "¿Qué tipo de lugar?",
                    "¿Otro secreto?",
                    "...Bueno, ¿cuándo?"
                ]
            },
            "ja": {
                "name": "ユナ",
                "text": "*静かな道を歩いていると、ユナが突然口を開く*「{name}、週末…君にだけ見せたい場所がある。」",
                "choices": [
                    "どんな場所？",
                    "また秘密？",
                    "…いいよ、いつ？"
                ]
            },
            "fr": {
                "name": "Yuna",
                "text": "*En marchant sur le chemin tranquille, Yuna parle soudain* \"{name}, ce week-end... il y a un endroit que je veux montrer rien qu'à toi.\"",
                "choices": [
                    "Quel genre d'endroit ?",
                    "Encore un secret ?",
                    "...D'accord, quand ?"
                ]
            }
        }
    },
    "day3_yuna_weekend_ask": {
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "day3_yuna_weekend_choice",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...이 학교의 진짜 모습을 볼 수 있는 곳. 토요일 저녁 8시, 학교 뒷문에서 만나자. 절대 늦지 마. 어둠 속에서만 보이는 것들이 있어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...A place where you can see the real face of this school. Saturday evening at 8 PM, at the school's back gate. Don't be late. There are things that can only be seen in the darkness.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Un lugar donde puedes ver la verdadera cara de esta escuela. Sábado a las 8 PM, en la puerta trasera de la escuela. No llegues tarde. Hay cosas que solo se pueden ver en la oscuridad.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…この学校の本当の姿が見える場所。土曜の夜8時、学校の裏門で。遅れないで。闇の中でしか見えないものがあるから。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Un endroit où tu peux voir le vrai visage de cette école. Samedi soir à 20h, au portail arrière de l'école. Ne sois pas en retard. Il y a des choses qu'on ne peut voir que dans l'obscurité.\""
            }
        }
    },
    "day3_yuna_weekend_curious": {
        "character": "assets/images/characters/yuna_smile.png",
        "stats": {
            "Yuna": {
                "affinity": 1
            }
        },
        "next": "day3_yuna_weekend_choice",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나가 차갑게 웃는다* \"비밀이라기보단... 진실에 가깝지. 토요일 저녁 8시. 해가 지고 나면 모든 게 달라져. 올 거지?\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna smiles coldly* \"It's closer to the truth than a secret. Saturday evening at 8 PM. Everything changes after the sun sets. You'll come, right?\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Yuna sonríe fríamente* \"Es más cercano a la verdad que a un secreto. Sábado a las 8 PM. Todo cambia después de que se pone el sol. Vendrás, ¿verdad?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*ユナが冷たく微笑む*「秘密というより…真実に近いかな。土曜の夜8時。日が沈んだら全てが変わる。来るでしょ？」"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Yuna sourit froidement* \"C'est plus proche de la vérité qu'un secret. Samedi soir à 20h. Tout change après le coucher du soleil. Tu viendras, n'est-ce pas ?\""
            }
        }
    },
    "day3_yuna_weekend_direct": {
        "character": "assets/images/characters/yuna_smile.png",
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day3_yuna_weekend_choice",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나가 놀란 듯 나를 바라보다가 미소 짓는다* \"...역시 너야. 토요일 저녁 8시, 학교 뒷문. 어둠이 내려야만 볼 수 있는 것들이 있어. 꼭 와야 해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna looks at me in surprise, then smiles* \"...That's so like you. Saturday evening at 8 PM, school back gate. There are things that can only be seen when darkness falls. You must come.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Yuna me mira sorprendida, luego sonríe* \"...Eso es tan tú. Sábado a las 8 PM, puerta trasera de la escuela. Hay cosas que solo se ven cuando cae la oscuridad. Debes venir.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*ユナが驚いたように僕を見て、それから微笑む*「…やっぱり君だね。土曜の夜8時、学校の裏門。暗闇が降りないと見えないものがある。絶対来てね。」"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Yuna me regarde avec surprise, puis sourit* \"...Ça te ressemble bien. Samedi soir à 20h, portail arrière de l'école. Il y a des choses qu'on ne peut voir que quand l'obscurité tombe. Tu dois venir.\""
            }
        }
    },
    "day3_yuna_weekend_choice": {
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day3_yuna_weekend_yes",
                "setFlag": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_yuna_weekend_later"
            },
            {
                "next": "day3_yuna_weekend_no"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 진지한 눈빛이 나를 뚫어본다. 저녁 8시라니... 뭔가 심상치 않다.*",
                "choices": [
                    "알았어, 꼭 갈게",
                    "생각해보고 답해줄게",
                    "너나 봐, 난 다른 약속이 있거든"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Yuna's serious gaze pierces through me. 8 PM in the evening... Something feels ominous.*",
                "choices": [
                    "Okay, I'll definitely come",
                    "Let me think about it and reply",
                    "Sorry, I have other plans"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La mirada seria de Yuna me atraviesa. Las 8 PM... Algo se siente ominoso.*",
                "choices": [
                    "Bueno, definitivamente iré",
                    "Déjame pensarlo y te respondo",
                    "Perdón, tengo otros planes"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ユナの真剣な眼差しが僕を射抜く。夜の8時か…何か只事ではない気がする。*",
                "choices": [
                    "わかった、絶対行く",
                    "考えてから返事する",
                    "ごめん、他の予定があるんだ"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Le regard sérieux de Yuna me transperce. 20h le soir... Quelque chose semble inquiétant.*",
                "choices": [
                    "D'accord, je viendrai sans faute",
                    "Laisse-moi y réfléchir et te répondre",
                    "Désolé, j'ai d'autres projets"
                ]
            }
        }
    },
    "day3_yuna_weekend_yes": {
        "character": "assets/images/characters/yuna_shy.png",
        "stats": {
            "Yuna": {
                "affinity": 8
            }
        },
        "next": "day3_arrive_school",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나가 내 손을 살짝 잡았다가 놓는다* \"...고마워. 후회하지 않을 거야. 토요일 밤, 진실을 마주할 준비를 해둬.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna briefly holds my hand then lets go* \"...Thank you. You won't regret it. Saturday night, be ready to face the truth.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Yuna toma brevemente mi mano y luego la suelta* \"...Gracias. No te arrepentirás. El sábado por la noche, prepárate para enfrentar la verdad.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*ユナが僕の手をそっと握って、離す*「…ありがとう。後悔しないよ。土曜の夜、真実と向き合う覚悟をしておいて。」"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Yuna prend brièvement ma main puis la lâche* \"...Merci. Tu ne le regretteras pas. Samedi soir, prépare-toi à affronter la vérité.\""
            }
        }
    },
    "day3_yuna_weekend_later": {
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {
            "Yuna": {
                "affinity": -5
            }
        },
        "next": "day3_arrive_school",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나가 실망한 듯 고개를 돌린다* \"...그래. 하지만 기회는 한 번뿐이야. 잘 생각해. 밤에만 열리는 문이 있거든.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna looks disappointed and turns her head away* \"...I see. But there's only one chance. Think carefully. There's a door that only opens at night.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Yuna se ve decepcionada y voltea la cabeza* \"...Ya veo. Pero solo hay una oportunidad. Piénsalo bien. Hay una puerta que solo se abre de noche.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*ユナが残念そうに顔をそらす*「…そう。でもチャンスは一度きり。よく考えて。夜にしか開かない扉があるから。」"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Yuna semble déçue et détourne la tête* \"...Je vois. Mais il n'y a qu'une seule chance. Réfléchis bien. Il y a une porte qui ne s'ouvre que la nuit.\""
            }
        }
    },
    "day3_yuna_weekend_no": {
        "character": "assets/images/characters/yuna_bored.png",
        "stats": {
            "Yuna": {
                "affinity": -15
            }
        },
        "next": "day3_arrive_school",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나의 눈빛이 차갑게 식는다* \"......\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna's gaze turns cold* \"......\""
            },
            "es": {
                "name": "Yuna",
                "text": "*La mirada de Yuna se vuelve fría* \"......\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*ユナの視線が冷たくなる*「……」"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Le regard de Yuna devient glacial* \"......\""
            }
        }
    },
    "day3_walk_with_dain": {
        "background": "assets/images/background/street.png",
        "bgm": "daily2.mp3",
        "character": "assets/images/characters/dain_laugh.png",
        "setFlag": "day3_morning_with_dain",
        "next": "day3_walk_dain_bump",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*약속 장소로 가는 길. 멀리서 다인이가 손을 크게 흔들며 전속력으로 달려온다.*"
            },
            "en": {
                "name": "Me",
                "text": "*On the way to the meeting spot. From a distance, Dain is waving her hand widely and running toward me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Camino al punto de encuentro. A lo lejos, Dain agita su mano ampliamente y corre hacia mí.*"
            },
            "ja": {
                "name": "僕",
                "text": "*待ち合わせ場所に向かう途中。遠くからダインが大きく手を振りながら全力で走ってくる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En chemin vers le point de rendez-vous. Au loin, Dain agite la main et court vers moi.*"
            }
        }
    },
    "day3_walk_dain_bump": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day3_walk_dain_bump_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"{name}!! 야호─!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"{name}!! Yay!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"{name}!! ¡Yuju!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"{name}！！やっほー！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"{name} !! Youpi !\""
            }
        }
    },
    "day3_walk_dain_bump_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day3_walk_dain_bump_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 브레이크 없이 돌진해온다. 피할 틈도 없이─ 쿵!*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain charges at me full speed with no brakes. There's no time to dodge— CRASH!*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dain carga hacia mí a toda velocidad sin frenos. No hay tiempo para esquivar— ¡CRASH!*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインがブレーキなしで全速力で突っ込んでくる。避ける暇もなく―ドンッ！*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain fonce vers moi à toute vitesse sans freiner. Pas le temps d'esquiver — BOUM !*"
            }
        }
    },
    "day3_walk_dain_bump_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "day3_walk_dain_bump_4",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"아악! 미, 미안! 브레이크가 안 걸렸어!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Ow! S-sorry! I couldn't stop!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Ay! ¡P-perdón! ¡No pude detenerme!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"いたっ！ご、ごめん！止まれなかった！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Aïe ! D-désolée ! J'ai pas pu m'arrêter !\""
            }
        }
    },
    "day3_walk_dain_bump_4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "choices": [
            {
                "next": "day3_walk_dain_help"
            },
            {
                "next": "day3_walk_dain_bold"
            },
            {
                "next": "day3_walk_dain_freeze"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 내 위에 엎어졌다. 서로의 얼굴이 10cm 거리... 다인이의 숨소리가 느껴진다.*",
                "choices": [
                    "\"괜찮아?\" (일으켜 세워준다)",
                    "\"이대로 있을까?\"",
                    "*아무 말 못 한다*"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Dain fell on top of me. Our faces are barely 10 centimeters apart... I can feel her breath.*",
                "choices": [
                    "\"Are you okay?\" (Help her up)",
                    "\"Should we stay like this?\"",
                    "*Can't say anything*"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Dain cayó encima de mí. Nuestras caras están a apenas 10 centímetros... Puedo sentir su aliento.*",
                "choices": [
                    "\"¿Estás bien?\" (La ayudo a levantarse)",
                    "\"¿Nos quedamos así?\"",
                    "*No puedo decir nada*"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ダインが僕の上に倒れ込んだ。お互いの顔が10センチの距離…ダインの息遣いが感じられる。*",
                "choices": [
                    "「大丈夫？」（助け起こす）",
                    "「このままでいようか？」",
                    "*何も言えない*"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain est tombée sur moi. Nos visages sont à peine à 10 centimètres... Je sens son souffle.*",
                "choices": [
                    "\"Ça va ?\" (L'aider à se relever)",
                    "\"On reste comme ça ?\"",
                    "*Impossible de dire quoi que ce soit*"
                ]
            }
        }
    },
    "day3_walk_dain_help": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day3_walk_dain_greet",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*손을 잡아 일으켜주자 다인이의 얼굴이 새빨개진다* \"고, 고마워... 심장 터질 뻔했잖아! 아, 부딪혀서 심장이 뛴 거야! 다른 이유 아니거든!\""
            },
            "en": {
                "name": "Dain",
                "text": "*As I take her hand and help her up, Dain's face turns beet red* \"Th-thanks... My heart almost exploded! I mean from the crash! Not for any other reason!\""
            },
            "es": {
                "name": "Dain",
                "text": "*Al tomar su mano y ayudarla a levantarse, la cara de Dain se pone roja* \"G-gracias... ¡Mi corazón casi explota! ¡Digo, por el choque! ¡No por otra razón!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*手を取って起こしてあげると、ダインの顔が真っ赤になる*「あ、ありがと…心臓止まるかと思った！ぶつかったからだよ！他の理由じゃないからね！」"
            },
            "fr": {
                "name": "Dain",
                "text": "*En lui prenant la main pour l'aider, le visage de Dain devient cramoisi* \"M-merci... Mon cœur a failli exploser ! À cause du choc, hein ! Pas pour une autre raison !\""
            }
        }
    },
    "day3_walk_dain_bold": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "stats": {
            "Dain": {
                "affinity": 8
            }
        },
        "next": "day3_walk_dain_greet_shy",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"하?! ...바보 같아. 당장 일어나! 사람들 보잖아!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Huh?! Y-you idiot! Get up now! People are watching!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡¿Eh?! ¡I-idiota! ¡Levántate ya! ¡La gente está mirando!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"はぁ？！ば、バカ！早く起きてよ！人が見てるじゃん！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hein ?! E-espèce d'idiot ! Lève-toi ! Les gens regardent !\""
            }
        }
    },
    "day3_walk_dain_freeze": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "day3_walk_dain_greet",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야, 왜 그래?! 얼굴 빨개진 거 누구야! ...나도 빨개? 아 몰라!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey, what's wrong?! Who's blushing here?! ...Am I blushing too? Ugh, whatever!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Oye, qué pasa?! ¡¿Quién se sonroja aquí?! ...¿Yo también estoy sonrojada? ¡Ugh, como sea!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"ちょっと、どうしたの？！顔赤いのは誰？！…私も赤い？あーもう知らない！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hé, qu'est-ce qui se passe ?! Qui rougit ici ?! ...Moi aussi je rougis ? Pfff, peu importe !\""
            }
        }
    },
    "day3_walk_dain_greet_shy": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "day3_walk_dain_greet",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*벌떡 일어나서 먼지를 털며* \"...바보. 아침부터 무슨 짓이야.\""
            },
            "en": {
                "name": "Dain",
                "text": "*Jumping up and dusting herself off* \"...Dummy. What are you doing first thing in the morning.\""
            },
            "es": {
                "name": "Dain",
                "text": "*Se levanta de un salto y se sacude el polvo* \"...Tonto. Qué haces a primera hora de la mañana.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*ぱっと起き上がって埃を払いながら*「…バカ。朝から何やってんの。」"
            },
            "fr": {
                "name": "Dain",
                "text": "*Se relevant d'un bond et se dépoussiérant* \"...Idiot. Qu'est-ce que tu fais dès le matin.\""
            }
        }
    },
    "day3_walk_dain_greet": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day3_walk_dain_freetalk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*기분을 가다듬으며* \"어, 어쨌든! 같이 학교 가자! 오늘 날씨 완전 운동하기 좋은데?\""
            },
            "en": {
                "name": "Dain",
                "text": "*Composing herself* \"A-anyway! Let's walk to school together! The weather is perfect for exercise today!\""
            },
            "es": {
                "name": "Dain",
                "text": "*Recomponiéndose* \"¡D-de todos modos! ¡Vamos juntos a la escuela! ¡El clima está perfecto para hacer ejercicio hoy!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*気を取り直して*「と、とにかく！一緒に学校行こう！今日は運動日和だよね？」"
            },
            "fr": {
                "name": "Dain",
                "text": "*Se ressaisissant* \"B-bref ! Allons à l'école ensemble ! Le temps est parfait pour le sport aujourd'hui !\""
            }
        }
    },
    "day3_walk_dain_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "maxTurns": 4,
        "next": "day3_walk_dain_talk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이와 나란히 학교로 향한다. 아까 부딪힌 일 때문인지 다인이가 평소보다 살짝 거리를 유지한다.*",
                "context": "다인이와 등교길. 아까 부딪혀 넘어지는 해프닝이 있어서 다인이가 약간 수줍어하고 있다. 에너지 넘치지만 가끔 얼굴을 붉힌다."
            },
            "en": {
                "name": "Me",
                "text": "*I walk alongside Dain toward school. Perhaps because of the earlier collision, she's keeping a bit more distance than usual.*",
                "context": "Walking to school with Dain. There was a bumping incident earlier so Dain is a bit shy. She's energetic but blushes occasionally."
            },
            "es": {
                "name": "Yo",
                "text": "*Camino junto a Dain hacia la escuela. Tal vez por el choque de antes, mantiene un poco más de distancia de lo usual.*",
                "context": "Caminando a la escuela con Dain. Hubo un incidente de choque antes, así que Dain está un poco tímida. Es enérgica pero se sonroja de vez en cuando."
            },
            "ja": {
                "name": "僕",
                "text": "*ダインと並んで学校に向かう。さっきぶつかった事があったからか、いつもより少し距離を保っている。*",
                "context": "ダインと登校路を歩いている。さっきぶつかるハプニングがあったので、ダインが少し恥ずかしがっている。元気だけどたまに顔を赤らめる。"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je marche aux côtés de Dain vers l'école. Peut-être à cause de la collision, elle garde un peu plus de distance que d'habitude.*",
                "context": "On marche vers l'école avec Dain. Il y a eu un incident de collision, donc Dain est un peu timide. Elle est énergique mais rougit de temps en temps."
            }
        }
    },
    "day3_walk_dain_talk": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            {
                "next": "day3_dain_weekend_ask"
            },
            {
                "next": "day3_dain_weekend_early"
            },
            {
                "next": "day3_dain_weekend_hesitate"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*신나게 걸으며* \"아! 맞다 {name}! 내일 아침 9시에 체육관에서 우리 팀 연습 경기 있거든? 와서 응원해주라!\"",
                "choices": [
                    "재밌겠다! 당연히 가야지!",
                    "아침 9시? 좀 일찍 일어나야겠네",
                    "귀찮은데..."
                ]
            },
            "en": {
                "name": "Dain",
                "text": "*Walking excitedly* \"Oh! By the way {name}! Tomorrow at 9 AM, our team has a practice match at the gym. Come cheer for me!\"",
                "choices": [
                    "Sounds fun! Of course I'll go!",
                    "9 AM? That's pretty early",
                    "That sounds troublesome..."
                ]
            },
            "es": {
                "name": "Dain",
                "text": "*Caminando emocionada* \"¡Ah! ¡Por cierto {name}! Mañana a las 9 AM, nuestro equipo tiene un partido de práctica en el gimnasio. ¡Ven a animarme!\"",
                "choices": [
                    "¡Suena divertido! ¡Claro que iré!",
                    "¿9 AM? Es bastante temprano",
                    "Eso suena problemático..."
                ]
            },
            "ja": {
                "name": "ダイン",
                "text": "*ウキウキしながら歩いて*「あ！そうだ{name}！明日の朝9時に体育館でうちのチームの練習試合があるんだ！応援に来てよ！」",
                "choices": [
                    "楽しそう！もちろん行くよ！",
                    "朝9時？結構早いね",
                    "面倒くさいな…"
                ]
            },
            "fr": {
                "name": "Dain",
                "text": "*Marchant avec enthousiasme* \"Oh ! Au fait {name} ! Demain à 9h, notre équipe a un match d'entraînement au gymnase. Viens m'encourager !\"",
                "choices": [
                    "Ça a l'air sympa ! Bien sûr que j'irai !",
                    "9h ? C'est assez tôt",
                    "Ça a l'air contraignant..."
                ]
            }
        }
    },
    "day3_dain_weekend_ask": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "day3_dain_weekend_choice",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*다인이가 신나서 점프한다* \"진짜?! 와 대박! 그럼 연습 끝나고 같이 밥도 먹자! 떡볶이 먹으러 가자!\""
            },
            "en": {
                "name": "Dain",
                "text": "*Dain jumps excitedly* \"Really?! Awesome! Then after practice, let's eat together! Let's go get tteokbokki!\""
            },
            "es": {
                "name": "Dain",
                "text": "*Dain salta emocionada* \"¡¿En serio?! ¡Genial! ¡Entonces después de la práctica, comamos juntos! ¡Vamos a comer tteokbokki!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*ダインが興奮して飛び跳ねる*「マジで？！やった！じゃあ練習終わったら一緒にご飯食べよ！トッポッキ食べに行こう！」"
            },
            "fr": {
                "name": "Dain",
                "text": "*Dain saute d'excitation* \"Vraiment ?! Génial ! Alors après l'entraînement, mangeons ensemble ! Allons manger des tteokbokki !\""
            }
        }
    },
    "day3_dain_weekend_early": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 1
            }
        },
        "next": "day3_dain_weekend_choice",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*다인이가 웃으며* \"그치? 나도 일찍 일어나는 거 힘들긴 한데, 그래도 와주면 진짜 힘날 것 같아!\""
            },
            "en": {
                "name": "Dain",
                "text": "*Dain smiles* \"Right? It's hard for me to wake up early too, but it would really give me energy if you came!\""
            },
            "es": {
                "name": "Dain",
                "text": "*Dain sonríe* \"¿Verdad? A mí también me cuesta levantarme temprano, ¡pero me daría mucha energía si vinieras!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*ダインが笑う*「だよね？私も早起き辛いけど、来てくれたら本当に元気出ると思う！」"
            },
            "fr": {
                "name": "Dain",
                "text": "*Dain sourit* \"N'est-ce pas ? C'est dur pour moi aussi de me lever tôt, mais ça me donnerait vraiment de l'énergie si tu venais !\""
            }
        }
    },
    "day3_dain_weekend_hesitate": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_normal.png",
        "stats": {
            "Dain": {
                "affinity": -2
            }
        },
        "next": "day3_dain_weekend_choice",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*다인이가 어깨동무를 하며* \"괜찮아! 그냥 와서 응원만 해주면 돼! 내 멋진 스파이크 보여줄게!\""
            },
            "en": {
                "name": "Dain",
                "text": "*Dain puts her arm around my shoulder* \"It's okay! Just come and cheer! I'll show you my awesome spike!\""
            },
            "es": {
                "name": "Dain",
                "text": "*Dain pone su brazo alrededor de mi hombro* \"¡Está bien! ¡Solo ven y anima! ¡Te mostraré mi increíble remate!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*ダインが肩に腕を回す*「大丈夫！応援に来るだけでいいから！かっこいいスパイク見せてあげるよ！」"
            },
            "fr": {
                "name": "Dain",
                "text": "*Dain met son bras autour de mon épaule* \"T'inquiète ! Viens juste encourager ! Je te montrerai mon smash incroyable !\""
            }
        }
    },
    "day3_dain_weekend_choice": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            {
                "next": "day3_dain_weekend_yes",
                "setFlag": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_dain_weekend_later"
            },
            {
                "next": "day3_dain_weekend_no"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 기대에 찬 눈빛으로 나를 바라본다.*",
                "choices": [
                    "알았어! 토요일 9시에 체육관에서 보자",
                    "생각해보고 연락할게",
                    "수고, 주말에 다른 일이 있어서..."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Dain looks at me with hopeful eyes.*",
                "choices": [
                    "Okay! See you Saturday at 9 at the gym",
                    "Let me think about it and contact you",
                    "Good luck, I have other plans this weekend..."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Dain me mira con ojos esperanzados.*",
                "choices": [
                    "¡Okey! Nos vemos el sábado a las 9 en el gimnasio",
                    "Déjame pensarlo y te contacto",
                    "Buena suerte, tengo otros planes este fin de semana..."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ダインが期待に満ちた目で僕を見る。*",
                "choices": [
                    "了解！土曜日の9時に体育館でね",
                    "考えてから連絡するよ",
                    "頑張って、週末は他の予定があって…"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain me regarde avec des yeux pleins d'espoir.*",
                "choices": [
                    "OK ! On se voit samedi à 9h au gymnase",
                    "Laisse-moi y réfléchir et te recontacter",
                    "Bonne chance, j'ai d'autres projets ce week-end..."
                ]
            }
        }
    },
    "day3_dain_weekend_yes": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 8
            }
        },
        "next": "day3_arrive_school",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*다인이가 내 손을 잡고 흔든다* \"와! 최고야 {name}! 그럼 토요일에 꼭 보자! 늦지 마!\""
            },
            "en": {
                "name": "Dain",
                "text": "*Dain grabs my hand and shakes it* \"Wow! You're the best {name}! Then see you on Saturday! Don't be late!\""
            },
            "es": {
                "name": "Dain",
                "text": "*Dain toma mi mano y la sacude* \"¡Wow! ¡Eres el mejor {name}! ¡Entonces nos vemos el sábado! ¡No llegues tarde!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*ダインが僕の手を掴んで振る*「わー！{name}最高！じゃあ土曜日に絶対会おうね！遅れたらダメだよ！」"
            },
            "fr": {
                "name": "Dain",
                "text": "*Dain attrape ma main et la secoue* \"Waouh ! Tu es le meilleur {name} ! Alors à samedi ! Ne sois pas en retard !\""
            }
        }
    },
    "day3_dain_weekend_later": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_normal.png",
        "stats": {
            "Dain": {
                "affinity": -3
            }
        },
        "next": "day3_arrive_school",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*다인이가 조금 풀이 죽는다* \"에이... 그래도 꼭 와야 돼? 약속이다?\""
            },
            "en": {
                "name": "Dain",
                "text": "*Dain looks a bit down* \"Aw... But you have to come, okay? Promise?\""
            },
            "es": {
                "name": "Dain",
                "text": "*Dain se desanima un poco* \"Ay... Pero tienes que venir, ¿de acuerdo? ¿Lo prometes?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*ダインが少ししょんぼりする*「えー…でも絶対来てね？約束だよ？」"
            },
            "fr": {
                "name": "Dain",
                "text": "*Dain a l'air un peu abattue* \"Oh... Mais tu dois venir, d'accord ? Promis ?\""
            }
        }
    },
    "day3_dain_weekend_no": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_sad.png",
        "stats": {
            "Dain": {
                "affinity": -10
            }
        },
        "next": "day3_arrive_school",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*다인이가 실망한 표정을 짓는다* \"아... 그렇구나. 그래도 나중에 시간 나면 꼭 놀러 와!\""
            },
            "en": {
                "name": "Dain",
                "text": "*Dain makes a disappointed face* \"Oh... I see. But if you have time later, make sure to visit!\""
            },
            "es": {
                "name": "Dain",
                "text": "*Dain hace una cara decepcionada* \"Ah... ya veo. ¡Pero si tienes tiempo después, asegúrate de visitarnos!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*ダインが残念そうな顔をする*「あ…そうなんだ。でも時間できたら絶対遊びに来てね！」"
            },
            "fr": {
                "name": "Dain",
                "text": "*Dain fait une moue déçue* \"Oh... Je vois. Mais si tu as du temps plus tard, n'hésite pas à venir !\""
            }
        }
    },
    "day3_walk_with_nurse": {
        "background": "assets/images/background/street.png",
        "bgm": "daily2.mp3",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlag": "day3_morning_with_nurse",
        "next": "day3_walk_nurse_greet",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님과 만나기로 한 장소 앞으로 향했다. 보건선생님이 기다리고 계신다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I headed to the meeting spot with the teacher. The school nurse is waiting.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me dirigí al punto de encuentro con la profesora. La enfermera escolar está esperando.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生との待ち合わせ場所に向かった。保健先生が待っている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je me suis dirigé vers le point de rendez-vous. L'infirmière scolaire attend.*"
            }
        }
    },
    "day3_walk_nurse_greet": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day3_walk_nurse_arm",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, {name}. 왔네? 후훗, 우리 전학생 참 착하네. 자, 같이 걸어가자.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh my, {name}. You came? Hehe, our transfer student is so nice. Come on, let's walk together.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Vaya, {name}. ¿Viniste? Jeje, nuestro estudiante transferido es tan amable. Vamos, caminemos juntos.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"あら、{name}。来たのね？ふふ、うちの転校生は本当にいい子ね。さあ、一緒に歩こう。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Oh, {name}. Tu es venu ? Héhé, notre élève transféré est si gentil. Allez, marchons ensemble.\""
            }
        }
    },
    "day3_walk_nurse_arm": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "day3_walk_nurse_enjoy"
            },
            {
                "next": "day3_walk_nurse_worry"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 은근히 내 팔에 손을 올리며 나란히 걷는다. 다른 사람이 보면 뭐라고 생각할까...*",
                "choices": [
                    "*그냥 즐긴다*",
                    "\"선생님, 사람들이 봐요...\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The teacher subtly places her hand on my arm as we walk side by side. What would people think if they saw us...*",
                "choices": [
                    "*Just enjoy it*",
                    "\"Teacher, people might see us...\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La profesora sutilmente pone su mano en mi brazo mientras caminamos lado a lado. ¿Qué pensaría la gente si nos viera...?*",
                "choices": [
                    "*Simplemente disfrutarlo*",
                    "\"Profesora, la gente podría vernos...\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*先生がさりげなく僕の腕に手を置いて並んで歩く。他の人に見られたらどう思うだろう…*",
                "choices": [
                    "*そのまま楽しむ*",
                    "「先生、人に見られますよ…」"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Elle pose subtilement sa main sur mon bras tandis qu'on marche côte à côte. Que penseraient les gens s'ils nous voyaient...*",
                "choices": [
                    "*En profiter*",
                    "\"Madame, les gens pourraient nous voir...\""
                ]
            }
        }
    },
    "day3_walk_nurse_enjoy": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day3_walk_nurse_conflict",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 만족스럽게 웃는다* \"후훗, 좋아. 이렇게 같이 걸으니까.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher smiles with satisfaction* \"Hehe, this is nice. Walking together like this.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*La profesora sonríe satisfecha* \"Jeje, esto es agradable. Caminar juntos así.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生が満足そうに微笑む*「ふふ、いいわね。こうやって一緒に歩くの。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Elle sourit avec satisfaction* \"Héhé, c'est agréable. Marcher ensemble comme ça.\""
            }
        }
    },
    "day3_walk_nurse_worry": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 2
            }
        },
        "next": "day3_walk_nurse_conflict",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 짧은 한숨을 쉬며 손을 뗀다* \"그래... 우리 사이가 들키면 안 되니까.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher sighs softly and removes her hand* \"You're right... We can't let anyone find out about us.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*La profesora suspira suavemente y retira su mano* \"Tienes razón... No podemos dejar que nadie se entere de nosotros.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生が小さくため息をついて手を離す*「そうね…バレちゃいけないもんね、私たちのこと。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Elle soupire doucement et retire sa main* \"Tu as raison... Personne ne doit découvrir notre relation.\""
            }
        }
    },
    "day3_walk_nurse_conflict": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day3_walk_nurse_conflict_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*뭔가 생각에 잠긴 듯 조용히* \"...{name}야, 선생님이 학생한테 이러면 안 되는 건데... 내 맘이 말을 안 들어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*Looking lost in thought, she says quietly* \"...{name}, I know a teacher shouldn't be doing this with a student... but my heart won't listen.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*Perdida en sus pensamientos, dice en voz baja* \"...{name}, sé que una profesora no debería hacer esto con un estudiante... pero mi corazón no obedece.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*何か考え込むように静かに*「…{name}、先生が生徒にこんなことしちゃいけないってわかってるんだけど…気持ちが言うこと聞かないの。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*L'air perdue dans ses pensées, elle dit doucement* \"...{name}, je sais qu'une enseignante ne devrait pas faire ça avec un élève... mais mon cœur refuse d'écouter.\""
            }
        }
    },
    "day3_walk_nurse_conflict_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "day3_walk_nurse_confess",
                "stats": {
                    "Nurse": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_walk_nurse_hand",
                "stats": {
                    "Nurse": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day3_walk_nurse_boundary",
                "stats": {
                    "Nurse": {
                        "affinity": -5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 목소리에 평소에 없는 진지함이 느껴진다. 선생님도 갈등하고 있는 걸까.*",
                "choices": [
                    "\"저도 선생님이 좋아요\"",
                    "*조용히 선생님의 손을 잡는다*",
                    "\"그래도 선생님은 선생님이잖아요\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*There's an unusual seriousness in her voice. Is she struggling with this too?*",
                "choices": [
                    "\"I like you too, teacher\"",
                    "*Quietly take her hand*",
                    "\"But you're still a teacher\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Hay una seriedad inusual en su voz. ¿Ella también está luchando con esto?*",
                "choices": [
                    "\"A mí también me gustas, profesora\"",
                    "*Tomar su mano silenciosamente*",
                    "\"Pero sigues siendo una profesora\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*先生の声にいつもにない真剣さが感じられる。先生も葛藤しているのだろうか。*",
                "choices": [
                    "「僕も先生のことが好きです」",
                    "*静かに先生の手を握る*",
                    "「でも先生は先生じゃないですか」"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Il y a une gravité inhabituelle dans sa voix. Elle aussi se débat avec ça ?*",
                "choices": [
                    "\"Moi aussi je vous aime bien, madame\"",
                    "*Lui prendre doucement la main*",
                    "\"Mais vous êtes quand même professeur\""
                ]
            }
        }
    },
    "day3_walk_nurse_confess": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day3_walk_nurse_freetalk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님의 눈이 휘둥그레진다* \"...너, 진짜 위험하다? 선생님을 이렇게 흔들리게 하면 어떡해.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*Her eyes go wide* \"...You're really dangerous, you know? Making a teacher's heart waver like this.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*Sus ojos se abren ampliamente* \"...Eres realmente peligroso, ¿lo sabías? Haciendo que el corazón de una profesora se tambalee así.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生の目が大きく見開かれる*「…あなた、本当に危険な子ね。先生の心をこんなに揺さぶるなんて。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Ses yeux s'écarquillent* \"...Tu es vraiment dangereux, tu sais ? Faire vaciller le cœur d'une enseignante comme ça.\""
            }
        }
    },
    "day3_walk_nurse_hand": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day3_walk_nurse_freetalk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 놀란 듯 내 손을 보다가... 꼭 잡아온다* \"...5초만. 5초만 이러고 있자.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*She looks down at our hands in surprise... then holds on tight* \"...Just five seconds. Let's stay like this for just five seconds.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*Ella mira nuestras manos con sorpresa... luego aprieta fuerte* \"...Solo cinco segundos. Quedémonos así solo cinco segundos.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*驚いたように繋いだ手を見つめて…ぎゅっと握り返す*「…5秒だけ。5秒だけこうしてよう。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Elle regarde nos mains avec surprise... puis serre fort* \"...Juste cinq secondes. Restons comme ça juste cinq secondes.\""
            }
        }
    },
    "day3_walk_nurse_boundary": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day3_walk_nurse_freetalk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님의 표정이 순간 굳어졌다가 억지 미소를 짓는다* \"...그래, 맞아. 선생님은 선생님이니까.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*Her expression freezes for a moment before she forces a smile* \"...Right. A teacher is a teacher, after all.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*Su expresión se congela por un momento antes de forzar una sonrisa* \"...Cierto. Una profesora es una profesora, después de todo.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生の表情が一瞬固まって、無理に笑顔を作る*「…そうよね。先生は先生だもんね。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Son expression se fige un instant avant de forcer un sourire* \"...C'est vrai. Une enseignante reste une enseignante, après tout.\""
            }
        }
    },
    "day3_walk_nurse_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "maxTurns": 3,
        "next": "day3_walk_nurse_talk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님과 함께 학교로 향한다. 묘한 긴장감과 설렘이 동시에 느껴진다.*",
                "context": "보건선생님과 등교길. 선생님이 '학생한테 이러면 안 되는데'라며 갈등을 내비쳤다. 금지된 사랑의 묘한 긴장감."
            },
            "en": {
                "name": "Me",
                "text": "*I walk toward school with the nurse. A strange mix of tension and excitement fills the air.*",
                "context": "Walking to school with the school nurse. She confessed that she shouldn't feel this way about a student. The tension of a forbidden love hangs in the air."
            },
            "es": {
                "name": "Yo",
                "text": "*Camino hacia la escuela con la enfermera. Una extraña mezcla de tensión y emoción llena el aire.*",
                "context": "Caminando a la escuela con la enfermera. Confesó que no debería sentir esto por un estudiante. La tensión de un amor prohibido flota en el aire."
            },
            "ja": {
                "name": "僕",
                "text": "*保健先生と一緒に学校に向かう。妙な緊張感とときめきが同時に感じられる。*",
                "context": "保健先生と登校路を歩いている。先生が「生徒にこんな気持ちになっちゃいけないのに」と葛藤を見せた。禁断の恋の妙な緊張感。"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je marche vers l'école avec l'infirmière. Un étrange mélange de tension et d'excitation emplit l'air.*",
                "context": "On marche vers l'école avec l'infirmière scolaire. Elle a avoué qu'elle ne devrait pas ressentir ça pour un élève. La tension d'un amour interdit flotte dans l'air."
            }
        }
    },
    "day3_walk_nurse_talk": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "day3_nurse_weekend_ask"
            },
            {
                "next": "day3_nurse_weekend_curious"
            },
            {
                "next": "day3_nurse_weekend_none"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*학교 정문이 보이자 선생님이 다시 밝은 표정을 짓는다* \"저기, {name}야. 혹시 이번 주말에 시간 있니?\"",
                "choices": [
                    "네, 왜요? 무슨 일 있으세요?",
                    "글쎄요... 주말에 뭐 하실 건데요?",
                    "아직 계획 없는데요?"
                ]
            },
            "en": {
                "name": "School Nurse",
                "text": "*Walking to school, the teacher subtly places her hand on my arm* \"Say, {name}. Do you have time this weekend?\"",
                "choices": [
                    "Yes, why? Is something going on?",
                    "Well... what are your plans for the weekend?",
                    "I don't have any plans yet?"
                ]
            },
            "es": {
                "name": "Enfermera",
                "text": "*Caminando a la escuela, la profesora sutilmente coloca su mano en mi brazo* \"Oye, {name}. ¿Tienes tiempo este fin de semana?\"",
                "choices": [
                    "Sí, ¿por qué? ¿Pasa algo?",
                    "Bueno... ¿cuáles son tus planes para el fin de semana?",
                    "¿Todavía no tengo planes?"
                ]
            },
            "ja": {
                "name": "保健先生",
                "text": "*登校中、先生がさりげなく僕の腕に手を触れる*「ねえ、{name}。今週末、時間ある？\"",
                "choices": [
                    "はい、なんですか？何かあるんですか？",
                    "えっと…週末は何するつもりですか？",
                    "まだ予定はないですけど？"
                ]
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*En marchant vers l'école, elle pose subtilement sa main sur mon bras* \"Dis, {name}. Tu as du temps ce week-end ?\"",
                "choices": [
                    "Oui, pourquoi ? Il se passe quelque chose ?",
                    "Eh bien... quels sont vos projets pour le week-end ?",
                    "Je n'ai pas encore de projets ?"
                ]
            }
        }
    },
    "day3_nurse_weekend_ask": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "day3_nurse_weekend_choice",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 의미심장하게 웃는다* \"후훗, 사실... 일요일 저녁에 맛있는 레스토랑 예약해뒀거든. 혼자 가기 아까워서... 우리 같이 갈래? 일요일 저녁 7시 어때?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher smiles meaningfully* \"Hehe, actually... I reserved a nice restaurant for Sunday evening. It'd be a shame to go alone... Want to come with me? How about Sunday evening at 7?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*La profesora sonríe con significado* \"Jeje, en realidad... Reservé un lindo restaurante para el domingo por la noche. Sería una lástima ir sola... ¿Quieres venir conmigo? ¿Qué tal el domingo a las 7?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生が意味深に微笑む*「ふふ、実は…日曜の夜においしいレストラン予約してあるの。一人で行くのもったいなくて…一緒に行かない？日曜の夜7時はどう？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Elle sourit d'un air entendu* \"Héhé, en fait... j'ai réservé un bon restaurant pour dimanche soir. Ce serait dommage d'y aller seule... Tu veux m'accompagner ? Dimanche soir à 19h, ça te dit ?\""
            }
        }
    },
    "day3_nurse_weekend_curious": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 1
            }
        },
        "next": "day3_nurse_weekend_choice",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 장난스럽게 윙크한다* \"음... 괜찮은 레스토랑 예약해뒀는데 같이 가고 싶어서. 괜찮으면... 일요일 저녁 7시에?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher winks playfully* \"Hmm... I have a nice restaurant reserved and I wanted to go together. If you're okay with it... Sunday evening at 7?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*La profesora guiña el ojo juguetonamente* \"Hmm... Tengo un buen restaurante reservado y quería ir juntos. Si estás de acuerdo... ¿domingo a las 7?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生がいたずらっぽくウインクする*「うーん…いいレストラン予約してあるんだけど、一緒に行きたくて。もしよかったら…日曜の夜7時に？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Elle fait un clin d'œil espiègle* \"Hmm... j'ai réservé un bon restaurant et je voulais qu'on y aille ensemble. Si ça te convient... dimanche soir à 19h ?\""
            }
        }
    },
    "day3_nurse_weekend_none": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 2
            }
        },
        "next": "day3_nurse_weekend_choice",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 만족스럽게 미소 짓는다* \"정말? 그럼 우리 일요일 저녁에 같이 저녁 먹자! 7시에 만날까? 주소 보낼게.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher smiles with satisfaction* \"Really? Then let's have dinner together on Sunday evening! How about meeting at 7? I'll send you the address.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*La profesora sonríe satisfecha* \"¿En serio? ¡Entonces cenemos juntos el domingo por la noche! ¿Qué tal a las 7? Te enviaré la dirección.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生が満足そうに微笑む*「本当？じゃあ日曜の夜に一緒にご飯食べよう！7時に待ち合わせでどう？住所送るね。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Elle sourit avec satisfaction* \"Vraiment ? Alors dînons ensemble dimanche soir ! On se retrouve à 19h ? Je t'enverrai l'adresse.\""
            }
        }
    },
    "day3_nurse_weekend_choice": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "day3_nurse_weekend_yes",
                "setFlag": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_nurse_weekend_later"
            },
            {
                "next": "day3_nurse_weekend_no"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 매혹적인 눈빛으로 나를 바라본다. 심장이 두근거린다...*",
                "choices": [
                    "좋아요! 일요일에 꼭 갈게요",
                    "생각해보고 나중에 답할게요",
                    "미안해요, 주말에 다른 약속이..."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The teacher gazes at me with captivating eyes. My heart is racing...*",
                "choices": [
                    "Sure! I'll definitely be there on Sunday",
                    "Let me think about it and reply later",
                    "Sorry, I have other plans this weekend..."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La profesora me mira con ojos cautivadores. Mi corazón late acelerado...*",
                "choices": [
                    "¡Claro! Definitivamente estaré ahí el domingo",
                    "Déjame pensarlo y te respondo después",
                    "Perdón, tengo otros planes este fin de semana..."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*先生が魅惑的な瞳で僕を見つめる。心臓がドキドキする…*",
                "choices": [
                    "いいですね！日曜日、絶対行きます",
                    "考えてから後で返事します",
                    "すみません、週末は他の予定が…"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Elle me regarde avec des yeux captivants. Mon cœur bat la chamade...*",
                "choices": [
                    "Bien sûr ! J'y serai sans faute dimanche",
                    "Laisse-moi y réfléchir et te répondre plus tard",
                    "Désolé, j'ai d'autres projets ce week-end..."
                ]
            }
        }
    },
    "day3_nurse_weekend_yes": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 8
            }
        },
        "next": "day3_arrive_school",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 내 손을 살짝 쥐었다가 놓는다* \"후훗, 정말? 그럼 일요일 저녁 7시, 기대하고 있을게. 멋지게 입고 와야 해?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher gently squeezes my hand then lets go* \"Hehe, really? Then Sunday evening at 7, I'll be looking forward to it. Dress up nice, okay?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*La profesora aprieta suavemente mi mano y luego la suelta* \"Jeje, ¿en serio? Entonces el domingo a las 7, estaré esperando con ansias. Vístete bien, ¿de acuerdo?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生が僕の手をそっと握って離す*「ふふ、本当？じゃあ日曜の夜7時、楽しみにしてるわね。かっこよくして来てね？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Elle serre doucement ma main puis la lâche* \"Héhé, vraiment ? Alors dimanche soir à 19h, j'ai hâte d'y être. Habille-toi bien, d'accord ?\""
            }
        }
    },
    "day3_nurse_weekend_later": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": -3
            }
        },
        "next": "day3_arrive_school",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 조금 아쉬운 표정을 짓는다* \"아... 그래? 그럼 점심시간에 보건실로 놀러 와. 다시 이야기하자.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher makes a slightly disappointed face* \"Oh... really? Then come visit the nurse's office at lunchtime. Let's talk again.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*La profesora hace una cara ligeramente decepcionada* \"Oh... ¿en serio? Entonces ven a la enfermería a la hora del almuerzo. Hablemos de nuevo.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生が少し残念そうな表情を見せる*「あら…そう？じゃあお昼休みに保健室に遊びに来て。またお話しましょ。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*L'infirmière fait une mine légèrement déçue* \"Oh... vraiment ? Alors passe à l'infirmerie à l'heure du déjeuner. On en reparlera.\""
            }
        }
    },
    "day3_nurse_weekend_no": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": -10
            }
        },
        "next": "day3_arrive_school",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님의 미소가 살짝 굳어진다* \"...그렇구나. 괜찮아. 다음 기회에 보자.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher's smile stiffens slightly* \"...I see. That's okay. Maybe next time.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*La sonrisa de la profesora se endurece ligeramente* \"...Ya veo. Está bien. Tal vez la próxima vez.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生の笑顔が少し硬くなる*「…そう。大丈夫よ。また今度ね。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Le sourire de l'infirmière se fige légèrement* \"...Je vois. Ce n'est pas grave. Peut-être une prochaine fois.\""
            }
        }
    },
    "day3_walk_with_teacher": {
        "background": "assets/images/background/street.png",
        "bgm": "daily2.mp3",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlag": "day3_morning_with_teacher",
        "next": "day3_walk_teacher_greet",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*약속 장소로 향했다. 담임선생님이 차에서 손을 흔들고 계신다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I headed to the meeting spot. The homeroom teacher is waving from the car.*"
            },
            "es": {
                "name": "Yo",
                "text": "*I headed to the meeting spot. The homeroom teacher is waving from the car.*"
            },
            "ja": {
                "name": "僕",
                "text": "*I headed to the meeting spot. The homeroom teacher is waving from the car.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je me suis dirigé vers le point de rendez-vous. Le professeur principal me fait signe depuis sa voiture.*"
            }
        }
    },
    "day3_walk_teacher_greet": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day3_walk_teacher_car",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"{name}! 좋은 아침! 같이 차로 출근하니까 좋네. 자, 안전벨트 매렴.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"{name}! Good morning! It's nice to commute together by car. Now, put on your seatbelt.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"{name}! Good morning! It's nice to commute together by car. Now, put on your seatbelt.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"{name}! Good morning! It's nice to commute together by car. Now, put on your seatbelt.\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"{name} ! Bonjour ! C'est agréable de faire le trajet ensemble en voiture. Allez, attache ta ceinture.\""
            }
        }
    },
    "day3_walk_teacher_car": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day3_walk_teacher_hair",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 차에 탔다. 은은한 향수 냄새와 잔잔한 음악이 흐른다. 뭔가 어색하면서도 설레는 기분이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I got into the teacher's car. A subtle perfume scent and soft music fills the air. It feels awkward yet exciting.*"
            },
            "es": {
                "name": "Yo",
                "text": "*I got into the teacher's car. A subtle perfume scent and soft music fills the air. It feels awkward yet exciting.*"
            },
            "ja": {
                "name": "僕",
                "text": "*I got into the teacher's car. A subtle perfume scent and soft music fills the air. It feels awkward yet exciting.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je suis monté dans la voiture du professeur. Un léger parfum et une musique douce flottent dans l'air. C'est à la fois gênant et excitant.*"
            }
        }
    },
    "day3_walk_teacher_hair": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day3_walk_teacher_hair_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*신호대기 중, 선생님이 갑자기 손을 뻗어 내 머리카락을 정리해준다* \"...잠깐만. 여기 헝클어져 있었어.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*While stopped at a red light, the teacher suddenly reaches out to fix my hair* \"...Hold on. This part was messy.\""
            },
            "es": {
                "name": "Profesora",
                "text": "*While stopped at a red light, the teacher suddenly reaches out to fix my hair* \"...Hold on. This part was messy.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*While stopped at a red light, the teacher suddenly reaches out to fix my hair* \"...Hold on. This part was messy.\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*À l'arrêt au feu rouge, le professeur tend soudain la main pour arranger mes cheveux* \"...Attends. C'était tout décoiffé ici.\""
            }
        }
    },
    "day3_walk_teacher_hair_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "day3_walk_teacher_conflict",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*손을 멈추며 작은 목소리로* \"...학생한테 이러면 안 되는데.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*She pauses, whispering* \"...I shouldn't be doing this to a student.\""
            },
            "es": {
                "name": "Profesora",
                "text": "*She pauses, whispering* \"...I shouldn't be doing this to a student.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*She pauses, whispering* \"...I shouldn't be doing this to a student.\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Elle s'arrête, murmurant* \"...Je ne devrais pas faire ça à un élève.\""
            }
        }
    },
    "day3_walk_teacher_conflict": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "choices": [
            {
                "next": "day3_walk_teacher_warm",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_walk_teacher_hold",
                "stats": {
                    "Teacher": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_walk_teacher_calm",
                "stats": {
                    "Teacher": {
                        "affinity": 2
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 손길이 따뜻하다. 차 안의 공기가 묘하게 변한다.*",
                "choices": [
                    "\"선생님 손이 따뜻하네요\"",
                    "*가만히 선생님의 손을 잡는다*",
                    "\"괜찮아요, 선생님\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Her touch is warm. The air inside the car shifts to something strange.*",
                "choices": [
                    "\"Your hands are warm, teacher\"",
                    "*Quietly hold her hand*",
                    "\"It's okay, teacher\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Her touch is warm. The air inside the car shifts to something strange.*",
                "choices": [
                    "\"Your hands are warm, teacher\"",
                    "*Quietly hold her hand*",
                    "\"It's okay, teacher\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*Her touch is warm. The air inside the car shifts to something strange.*",
                "choices": [
                    "\"Your hands are warm, teacher\"",
                    "*Quietly hold her hand*",
                    "\"It's okay, teacher\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Son contact est chaud. L'atmosphère dans la voiture change subtilement.*",
                "choices": [
                    "\"Vos mains sont chaudes, professeur\"",
                    "*Lui prendre doucement la main*",
                    "\"Ce n'est rien, professeur\""
                ]
            }
        }
    },
    "day3_walk_teacher_warm": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "day3_walk_teacher_freetalk",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*선생님이 당황하며 손을 거둔다* \"어마, 이 애가... 선생님을 놀라게 하네.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*The teacher pulls her hand back, flustered* \"Oh my, this kid... Surprising a teacher like that.\""
            },
            "es": {
                "name": "Profesora",
                "text": "*The teacher pulls her hand back, flustered* \"Oh my, this kid... Surprising a teacher like that.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*The teacher pulls her hand back, flustered* \"Oh my, this kid... Surprising a teacher like that.\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Le professeur retire sa main, troublée* \"Oh là là, cet élève... Me surprendre comme ça.\""
            }
        }
    },
    "day3_walk_teacher_hold": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "day3_walk_teacher_freetalk",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*선생님이 놀란 듯 내 손을 보다가... 뿌리치지 않는다* \"...신호 바뀌면 놓을 거야. 약속해.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*She looks at our hands in surprise... but doesn't pull away* \"...When the light changes, I'm letting go. Promise.\""
            },
            "es": {
                "name": "Profesora",
                "text": "*She looks at our hands in surprise... but doesn't pull away* \"...When the light changes, I'm letting go. Promise.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*She looks at our hands in surprise... but doesn't pull away* \"...When the light changes, I'm letting go. Promise.\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Elle regarde nos mains avec surprise... mais ne se dégage pas* \"...Quand le feu passera au vert, je lâcherai. Promis.\""
            }
        }
    },
    "day3_walk_teacher_calm": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day3_walk_teacher_freetalk",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*선생님이 쓸쓸하게 웃는다* \"...고마워. 선생님이 조금 이상했지?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*The teacher smiles wistfully* \"...Thank you. Was teacher being a bit strange?\""
            },
            "es": {
                "name": "Profesora",
                "text": "*The teacher smiles wistfully* \"...Thank you. Was teacher being a bit strange?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*The teacher smiles wistfully* \"...Thank you. Was teacher being a bit strange?\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Le professeur sourit avec mélancolie* \"...Merci. Le professeur était un peu bizarre, non ?\""
            }
        }
    },
    "day3_walk_teacher_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "maxTurns": 3,
        "next": "day3_walk_teacher_talk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*담임선생님의 차 안에서 학교까지 함께 향한다.*",
                "context": "담임선생님의 차 안에서 등교 중. 선생님이 머리를 정리해주며 '학생한테 이러면 안 되는데'라고 했다. 금지된 사랑의 묘한 분위기."
            },
            "en": {
                "name": "Me",
                "text": "*Riding in the homeroom teacher's car on the way to school.*",
                "context": "In the homeroom teacher's car on the way to school. She fixed my hair and said 'I shouldn't be doing this to a student.' The tension of a forbidden love hangs in the air."
            },
            "es": {
                "name": "Yo",
                "text": "*Riding in the homeroom teacher's car on the way to school.*",
                "context": "En el auto de la profesora camino a la escuela. Me arregló el cabello y dijo 'No debería hacer esto con un estudiante.' La tensión de un amor prohibido flota en el aire."
            },
            "ja": {
                "name": "僕",
                "text": "*Riding in the homeroom teacher's car on the way to school.*",
                "context": "担任先生の車の中で登校中。先生が髪を整えてくれながら「生徒にこんなことしちゃいけないのに」と言った。禁断の恋の妙な雰囲気。"
            },
            "fr": {
                "name": "Moi",
                "text": "*En route vers l'école dans la voiture du professeur principal.*",
                "context": "Dans la voiture du professeur principal en route vers l'école. Elle m'a arrangé les cheveux et a dit 'Je ne devrais pas faire ça à un élève.' La tension d'un amour interdit flotte dans l'air."
            }
        }
    },
    "day3_walk_teacher_talk": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            {
                "next": "day3_teacher_weekend_ask"
            },
            {
                "next": "day3_teacher_weekend_curious"
            },
            {
                "next": "day3_teacher_weekend_none"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*운전하며 선생님이 조심스럽게 말을 꺼낸다* \"저기, {name}야. 혹시 이번 주말에 시간 있니?\"",
                "choices": [
                    "네, 왜요? 무슨 일 있으세요?",
                    "글쎄요... 주말에 뭐 하실 건데요?",
                    "아직 계획 없는데요?"
                ]
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*While driving, the teacher carefully brings up a topic* \"Say, {name}. Do you have time this weekend?\"",
                "choices": [
                    "Yes, why? Is something going on?",
                    "Well... what are your plans for the weekend?",
                    "I don't have any plans yet?"
                ]
            },
            "es": {
                "name": "Profesora",
                "text": "*While driving, the teacher carefully brings up a topic* \"Say, {name}. Do you have time this weekend?\"",
                "choices": [
                    "Sí, ¿por qué? ¿Pasa algo?",
                    "Bueno... ¿cuáles son tus planes para el fin de semana?",
                    "¿Todavía no tengo planes?"
                ]
            },
            "ja": {
                "name": "担任先生",
                "text": "*While driving, the teacher carefully brings up a topic* \"Say, {name}. Do you have time this weekend?\"",
                "choices": [
                    "はい、なんですか？何かあるんですか？",
                    "えっと…週末は何するつもりですか？",
                    "まだ予定はないですけど？"
                ]
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*En conduisant, le professeur aborde prudemment le sujet* \"Dis-moi, {name}. Tu es libre ce week-end ?\"",
                "choices": [
                    "Oui, pourquoi ? Il se passe quelque chose ?",
                    "Eh bien... quels sont vos projets pour le week-end ?",
                    "Je n'ai pas encore de projets ?"
                ]
            }
        }
    },
    "day3_teacher_weekend_ask": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "day3_teacher_weekend_choice",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*선생님이 잠깐 나를 쳐다보며 미소 짓는다* \"사실... 박물관 전시회 티켓이 두 장 생겼거든. 혼자 가기 아까워서... 우리 같이 갈래? 일요일 오후 2시 어때?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*The teacher glances at me and smiles* \"Actually... I got two tickets for a museum exhibition. It'd be a shame to go alone... Want to come with me? How about Sunday afternoon at 2?\""
            },
            "es": {
                "name": "Profesora",
                "text": "*The teacher glances at me and smiles* \"Actually... I got two tickets for a museum exhibition. It'd be a shame to go alone... Want to come with me? How about Sunday afternoon at 2?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*The teacher glances at me and smiles* \"Actually... I got two tickets for a museum exhibition. It'd be a shame to go alone... Want to come with me? How about Sunday afternoon at 2?\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Le professeur me jette un regard et sourit* \"En fait... j'ai obtenu deux billets pour une exposition au musée. Ce serait dommage d'y aller seule... Tu veux venir avec moi ? Dimanche après-midi à 14h, ça te dit ?\""
            }
        }
    },
    "day3_teacher_weekend_curious": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "stats": {
            "Teacher": {
                "affinity": 1
            }
        },
        "next": "day3_teacher_weekend_choice",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"음... 박물관 전시회 티켓이 있는데 같이 가고 싶어서. 괜찮으면... 일요일 오후 2시에?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Hmm... I have museum exhibition tickets and I wanted to go together. If you're okay with it... Sunday afternoon at 2?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Hmm... I have museum exhibition tickets and I wanted to go together. If you're okay with it... Sunday afternoon at 2?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"Hmm... I have museum exhibition tickets and I wanted to go together. If you're okay with it... Sunday afternoon at 2?\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"Hmm... j'ai des billets pour une exposition au musée et je voulais y aller ensemble. Si ça te convient... dimanche après-midi à 14h ?\""
            }
        }
    },
    "day3_teacher_weekend_none": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 2
            }
        },
        "next": "day3_teacher_weekend_choice",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*선생님이 반색하며* \"정말? 그럼 우리 일요일 오후에 박물관 전시회 보러 가자! 2시에 박물관 앞에서 만날까?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*The teacher's face lights up* \"Really? Then let's go see the museum exhibition on Sunday afternoon! How about meeting at the museum at 2?\""
            },
            "es": {
                "name": "Profesora",
                "text": "*The teacher's face lights up* \"Really? Then let's go see the museum exhibition on Sunday afternoon! How about meeting at the museum at 2?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*The teacher's face lights up* \"Really? Then let's go see the museum exhibition on Sunday afternoon! How about meeting at the museum at 2?\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Le visage du professeur s'illumine* \"Vraiment ? Alors allons voir l'exposition au musée dimanche après-midi ! On se retrouve devant le musée à 14h ?\""
            }
        }
    },
    "day3_teacher_weekend_choice": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            {
                "next": "day3_teacher_weekend_yes",
                "setFlag": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_teacher_weekend_later"
            },
            {
                "next": "day3_teacher_weekend_no"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 기대에 찬 눈빛으로 잠깐 나를 본다. 차 안의 공기가 묘하게 따뜻하다...*",
                "choices": [
                    "좋아요! 일요일에 꼭 갈게요",
                    "생각해보고 나중에 답할게요",
                    "박물관 노잼인데."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The teacher glances at me with hopeful eyes. The air in the car feels unusually warm...*",
                "choices": [
                    "Sure! I'll definitely be there on Sunday",
                    "Let me think about it and reply later",
                    "Museums are boring though."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*The teacher glances at me with hopeful eyes. The air in the car feels unusually warm...*",
                "choices": [
                    "¡Claro! Definitivamente estaré ahí el domingo",
                    "Déjame pensarlo y te respondo después",
                    "Museums are boring though."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*The teacher glances at me with hopeful eyes. The air in the car feels unusually warm...*",
                "choices": [
                    "いいですね！日曜日、絶対行きます",
                    "考えてから後で返事します",
                    "Museums are boring though."
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Le professeur me jette un regard plein d'espoir. L'air dans la voiture semble étrangement chaud...*",
                "choices": [
                    "Bien sûr ! J'y serai sans faute dimanche",
                    "Laissez-moi y réfléchir et vous répondre plus tard",
                    "Les musées, c'est ennuyeux quand même."
                ]
            }
        }
    },
    "day3_teacher_weekend_yes": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 8
            }
        },
        "next": "day3_arrive_school",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*선생님이 환하게 웃으며* \"정말? 그럼 일요일 오후 2시, 꼭 보자. 재미있을 거야!\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*The teacher smiles brightly* \"Really? Then Sunday at 2 PM, it's a date. It'll be fun!\""
            },
            "es": {
                "name": "Profesora",
                "text": "*The teacher smiles brightly* \"Really? Then Sunday at 2 PM, it's a date. It'll be fun!\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*The teacher smiles brightly* \"Really? Then Sunday at 2 PM, it's a date. It'll be fun!\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Le professeur sourit radieusement* \"Vraiment ? Alors dimanche à 14h, c'est un rendez-vous. Ça va être amusant !\""
            }
        }
    },
    "day3_teacher_weekend_later": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "stats": {
            "Teacher": {
                "affinity": -3
            }
        },
        "next": "day3_arrive_school",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*선생님이 조금 아쉬운 표정을 짓는다* \"아... 그래? 그럼 점심시간에 다시 이야기하자.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*The teacher makes a slightly disappointed face* \"Oh... really? Then let's talk again at lunchtime.\""
            },
            "es": {
                "name": "Profesora",
                "text": "*The teacher makes a slightly disappointed face* \"Oh... really? Then let's talk again at lunchtime.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*The teacher makes a slightly disappointed face* \"Oh... really? Then let's talk again at lunchtime.\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Le professeur fait une mine légèrement déçue* \"Oh... vraiment ? Alors on en reparlera à l'heure du déjeuner.\""
            }
        }
    },
    "day3_teacher_weekend_no": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "stats": {
            "Teacher": {
                "affinity": -10
            }
        },
        "next": "day3_arrive_school",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*선생님의 표정이 순간 굳어진다* \"...실망이구나. 선생님은 너한테 거는 기대가 컸는데.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*The teacher's expression stiffens for a moment* \"...That's disappointing. I had high expectations for you.\""
            },
            "es": {
                "name": "Profesora",
                "text": "*The teacher's expression stiffens for a moment* \"...That's disappointing. I had high expectations for you.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*The teacher's expression stiffens for a moment* \"...That's disappointing. I had high expectations for you.\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*L'expression du professeur se fige un instant* \"...C'est décevant. J'avais de grands espoirs pour toi.\""
            }
        }
    },
    "day3_prepare_school": {
        "next": "day3_walk_alone",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학교 갈 준비를 서둘러 마쳤다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I hurried to get ready for school.*"
            },
            "es": {
                "name": "Yo",
                "text": "*I hurried to get ready for school.*"
            },
            "ja": {
                "name": "僕",
                "text": "*I hurried to get ready for school.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je me suis dépêché de me préparer pour l'école.*"
            }
        }
    },
    "day3_prepare_school_no_contact": {
        "next": "day3_prepare_school_ads",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*메시지를 확인해보니...*"
            },
            "en": {
                "name": "Me",
                "text": "*I check my messages...*"
            },
            "es": {
                "name": "Yo",
                "text": "*I check my messages...*"
            },
            "ja": {
                "name": "僕",
                "text": "*I check my messages...*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je vérifie mes messages...*"
            }
        }
    },
    "day3_prepare_school_ads": {
        "next": "day3_walk_alone",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*'한정 특가! 지금 주문하시면...', '이벤트 당첨을 축하드립니다...'* ...전부 광고 메시지네. 오늘도 혼자 등교하는 건가."
            },
            "en": {
                "name": "Me",
                "text": "*'Limited time sale! Order now...', 'Congratulations on winning the event...'* ...They're all spam messages. Looks like I'm going to school alone today."
            },
            "es": {
                "name": "Yo",
                "text": "*'Limited time sale! Order now...', 'Congratulations on winning the event...'* ...They're all spam messages. Looks like I'm going to school alone today."
            },
            "ja": {
                "name": "僕",
                "text": "*'Limited time sale! Order now...', 'Congratulations on winning the event...'* ...They're all spam messages. Looks like I'm going to school alone today."
            },
            "fr": {
                "name": "Moi",
                "text": "*'Vente flash ! Commandez maintenant...', 'Félicitations, vous avez gagné...'* ...Ce ne sont que des spams. On dirait que je vais à l'école seul aujourd'hui."
            }
        }
    },
    "day3_walk_alone": {
        "background": "assets/images/background/street.png",
        "bgm": "daily2.mp3",
        "character": null,
        "next": "day3_arrive_school",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*혼자 학교로 향했다. 아침 공기가 상쾌하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I headed to school alone. The morning air is refreshing.*"
            },
            "es": {
                "name": "Yo",
                "text": "*I headed to school alone. The morning air is refreshing.*"
            },
            "ja": {
                "name": "僕",
                "text": "*I headed to school alone. The morning air is refreshing.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je me suis dirigé vers l'école seul. L'air du matin est rafraîchissant.*"
            }
        }
    },
    "day3_arrive_school": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "day3_classroom",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어느덧 학교 정문에 도착했다. 오늘도 이 학교에서의 하루가 시작된다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Before I knew it, I arrived at the school gate. Another lively day begins.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Before I knew it, I arrived at the school gate. Another lively day begins.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Before I knew it, I arrived at the school gate. Another lively day begins.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Sans m'en rendre compte, je suis arrivé devant le portail de l'école. Une nouvelle journée animée commence.*"
            }
        }
    },
    "day3_classroom": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            {
                "next": "day3_classroom_note_seoyeon",
                "condition": "day3_morning_with_seoyeon"
            },
            {
                "next": "day3_classroom_note_yuna",
                "condition": "day3_morning_with_yuna"
            },
            {
                "next": "day3_classroom_note_dain",
                "condition": "day3_morning_with_dain"
            },
            {
                "next": "day3_classroom_empty"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교실에 들어서니 아이들이 웅성거린다. 자리에 앉으려는데... 책상 위에 뭔가 놓여있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As I enter the classroom, the kids are buzzing. I sit down at my desk and notice... something is on it.*"
            },
            "es": {
                "name": "Yo",
                "text": "*As I enter the classroom, the kids are buzzing. I sit down at my desk and notice... something is on it.*"
            },
            "ja": {
                "name": "僕",
                "text": "*As I enter the classroom, the kids are buzzing. I sit down at my desk and notice... something is on it.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En entrant dans la salle de classe, les élèves bourdonnent. Je m'assois à mon bureau et remarque... quelque chose est posé dessus.*"
            }
        }
    },
    "day3_classroom_note_seoyeon": {
        "stats": {
            "Seoyeon": {
                "affinity": 2
            }
        },
        "next": "day3_classroom_class_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*작은 메모가 있다. '오늘 점심 같이 먹자 ♡ - 서연' ... 방금 전까지 같이 있었으면서 메모를 미리 넣어둔 건가?*"
            },
            "en": {
                "name": "Me",
                "text": "*There's a small note. 'Let's eat lunch together ♡ - Seoyeon' ... We were literally just together, and she left a note in advance?*"
            },
            "es": {
                "name": "Yo",
                "text": "*There's a small note. 'Let's eat lunch together ♡ - Seoyeon' ... We were literally just together, and she left a note in advance?*"
            },
            "ja": {
                "name": "僕",
                "text": "*There's a small note. 'Let's eat lunch together ♡ - Seoyeon' ... We were literally just together, and she left a note in advance?*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Il y a un petit mot. 'Mangeons ensemble ce midi ♡ - Seoyeon' ... On était ensemble il y a deux minutes, et elle avait déjà laissé un mot ?*"
            }
        }
    },
    "day3_classroom_note_yuna": {
        "stats": {
            "Yuna": {
                "affinity": 2
            }
        },
        "next": "day3_classroom_class_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*종이접기 까마귀가 있다. 날개를 펼쳐보니 안쪽에 글씨가 있다. '...내일 밤' ─ 유나가 넣어둔 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*There's an origami crow. I unfold its wings to find writing inside. '...Tomorrow night' — Looks like Yuna left it.*"
            },
            "es": {
                "name": "Yo",
                "text": "*There's an origami crow. I unfold its wings to find writing inside. '...Tomorrow night' — Looks like Yuna left it.*"
            },
            "ja": {
                "name": "僕",
                "text": "*There's an origami crow. I unfold its wings to find writing inside. '...Tomorrow night' — Looks like Yuna left it.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Il y a un corbeau en origami. Je déplie ses ailes et découvre une inscription à l'intérieur. '...Demain soir' — On dirait que c'est Yuna qui l'a laissé.*"
            }
        }
    },
    "day3_classroom_note_dain": {
        "stats": {
            "Dain": {
                "affinity": 2
            }
        },
        "next": "day3_classroom_class_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*에너지바와 포스트잇이 있다. '운동 안 하는 놈은 이거라도 먹어! - 다인' ... 아까 벌써 넣어둔 건가.*"
            },
            "en": {
                "name": "Me",
                "text": "*There's an energy bar and a sticky note. 'If you don't exercise, at least eat this! - Dain' ... She must have left it earlier.*"
            },
            "es": {
                "name": "Yo",
                "text": "*There's an energy bar and a sticky note. 'If you don't exercise, at least eat this! - Dain' ... She must have left it earlier.*"
            },
            "ja": {
                "name": "僕",
                "text": "*There's an energy bar and a sticky note. 'If you don't exercise, at least eat this! - Dain' ... She must have left it earlier.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Il y a une barre énergétique et un post-it. 'Si tu ne fais pas de sport, mange au moins ça ! - Dain' ... Elle a dû le déposer plus tôt.*"
            }
        }
    },
    "day3_classroom_empty": {
        "next": "day3_classroom_class_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*책상 위에는 아무것도 없다. 평범한 금요일 아침이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Nothing on my desk. Just an ordinary Friday morning.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Nothing on my desk. Just an ordinary Friday morning.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Nothing on my desk. Just an ordinary Friday morning.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Rien sur mon bureau. Juste un vendredi matin ordinaire.*"
            }
        }
    },
    "day3_classroom_class_start": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day3_classroom_teacher_event",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*수업이 시작되었다. 담임선생님이 칠판에 문제를 써내려간다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Class begins. The homeroom teacher starts writing problems on the board.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Class begins. The homeroom teacher starts writing problems on the board.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Class begins. The homeroom teacher starts writing problems on the board.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le cours commence. Le professeur principal se met à écrire des problèmes au tableau.*"
            }
        }
    },
    "day3_classroom_teacher_event": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "branches": [
            {
                "next": "day3_classroom_teacher_wink",
                "condition": "isDating_Teacher"
            },
            {
                "next": "day3_classroom_teacher_glance",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_classroom_nurse_visit"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 팔을 들어 칠판에 글씨를 쓸 때, 은은한 향수 냄새가 살짝 풍긴다. 아무도 모르는 것 같은데... 나만 알아챈 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*When the teacher raises her arm to write on the board, a subtle whiff of perfume drifts over. No one else seems to notice... only me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*When the teacher raises her arm to write on the board, a subtle whiff of perfume drifts over. No one else seems to notice... only me.*"
            },
            "ja": {
                "name": "僕",
                "text": "*When the teacher raises her arm to write on the board, a subtle whiff of perfume drifts over. No one else seems to notice... only me.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Quand le professeur lève le bras pour écrire au tableau, un léger effluve de parfum parvient jusqu'à moi. Personne d'autre ne semble le remarquer... sauf moi.*"
            }
        }
    },
    "day3_classroom_teacher_wink": {
        "character": "assets/images/characters/teacher_shy.png",
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "day3_classroom_nurse_visit",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*선생님이 질문을 하다가 나와 눈이 마주치자... 살짝 윙크를 한다* \"...{name}, 대답은?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*While asking a question, her eyes meet mine... she gives a subtle wink* \"...{name}, your answer?\""
            },
            "es": {
                "name": "Profesora",
                "text": "*While asking a question, her eyes meet mine... she gives a subtle wink* \"...{name}, your answer?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*While asking a question, her eyes meet mine... she gives a subtle wink* \"...{name}, your answer?\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*En posant une question, ses yeux croisent les miens... elle fait un clin d'œil discret* \"...{name}, ta réponse ?\""
            }
        }
    },
    "day3_classroom_teacher_glance": {
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 2
            }
        },
        "next": "day3_classroom_nurse_visit",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 잠깐 내 쪽을 바라보더니 미세하게 미소 짓는다. 일요일 약속을 떠올리고 있는 걸까?*"
            },
            "en": {
                "name": "Me",
                "text": "*The teacher glances my way and smiles faintly. Is she thinking about our Sunday plans?*"
            },
            "es": {
                "name": "Yo",
                "text": "*The teacher glances my way and smiles faintly. Is she thinking about our Sunday plans?*"
            },
            "ja": {
                "name": "僕",
                "text": "*The teacher glances my way and smiles faintly. Is she thinking about our Sunday plans?*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le professeur jette un regard dans ma direction et sourit légèrement. Pense-t-elle à nos projets de dimanche ?*"
            }
        }
    },
    "day3_classroom_nurse_visit": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day3_classroom_nurse_visit_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*수업 중간, 교실 문이 열리고 보건선생님이 들어온다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Mid-class, the classroom door opens and the school nurse walks in.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mid-class, the classroom door opens and the school nurse walks in.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Mid-class, the classroom door opens and the school nurse walks in.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En plein cours, la porte de la salle s'ouvre et l'infirmière scolaire entre.*"
            }
        }
    },
    "day3_classroom_nurse_visit_2": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day3_classroom_nurse_visit_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"선생님, 죄송해요. 건강 설문지 배포하러 왔어요.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Sorry to interrupt, teacher. I'm here to hand out health surveys.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Sorry to interrupt, teacher. I'm here to hand out health surveys.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"Sorry to interrupt, teacher. I'm here to hand out health surveys.\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Sorry to interrupt, teacher. I'm here to hand out health surveys.\""
            }
        }
    },
    "day3_classroom_nurse_visit_3": {
        "character": "assets/images/characters/nurse_normal.png",
        "branches": [
            {
                "next": "day3_classroom_nurse_secret",
                "condition": "isDating_Nurse"
            },
            {
                "next": "day3_classroom_nurse_band",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_classroom_nurse_pass"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님이 설문지를 나눠주며 내 앞에서 멈춘다. 손가락이 살짝 내 손에 닿는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The nurse pauses in front of me while handing out surveys. Her fingers lightly brush against my hand.*"
            },
            "es": {
                "name": "Yo",
                "text": "*The nurse pauses in front of me while handing out surveys. Her fingers lightly brush against my hand.*"
            },
            "ja": {
                "name": "僕",
                "text": "*The nurse pauses in front of me while handing out surveys. Her fingers lightly brush against my hand.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*The nurse pauses in front of me while handing out surveys. Her fingers lightly brush against my hand.*"
            }
        }
    },
    "day3_classroom_nurse_secret": {
        "character": "assets/images/characters/nurse_shy.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day3_classroom_nurse_leave",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*아무도 모르게 설문지 사이에 작은 메모를 끼워놓았다. '오늘 점심에 보건실로 와. 특별한 거 준비해둘게 💋'*"
            },
            "en": {
                "name": "School Nurse",
                "text": "*Without anyone noticing, she slips a small note between the survey pages. 'Come to the nurse's office at lunch. I've prepared something special 💋'*"
            },
            "es": {
                "name": "Enfermera",
                "text": "*Without anyone noticing, she slips a small note between the survey pages. 'Come to the nurse's office at lunch. I've prepared something special 💋'*"
            },
            "ja": {
                "name": "保健先生",
                "text": "*Without anyone noticing, she slips a small note between the survey pages. 'Come to the nurse's office at lunch. I've prepared something special 💋'*"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Without anyone noticing, she slips a small note between the survey pages. 'Come to the nurse's office at lunch. I've prepared something special 💋'*"
            }
        }
    },
    "day3_classroom_nurse_band": {
        "character": "assets/images/characters/nurse_shy.png",
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "day3_classroom_nurse_leave",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 설문지를 건네며 내 손등에 밴드를 붙여준다* \"…상처 없는데요? 그냥... 선생님 마크야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*She hands me the survey and places a band-aid on the back of my hand* \"...You don't have a wound? Well... it's teacher's mark.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*She hands me the survey and places a band-aid on the back of my hand* \"...You don't have a wound? Well... it's teacher's mark.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*She hands me the survey and places a band-aid on the back of my hand* \"...You don't have a wound? Well... it's teacher's mark.\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*She hands me the survey and places a band-aid on the back of my hand* \"...You don't have a wound? Well... it's teacher's mark.\""
            }
        }
    },
    "day3_classroom_nurse_pass": {
        "next": "day3_classroom_nurse_leave",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님이 은은하게 웃으며 설문지를 건네주고 지나간다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The nurse smiles gently as she hands me the survey and moves on.*"
            },
            "es": {
                "name": "Yo",
                "text": "*The nurse smiles gently as she hands me the survey and moves on.*"
            },
            "ja": {
                "name": "僕",
                "text": "*The nurse smiles gently as she hands me the survey and moves on.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*The nurse smiles gently as she hands me the survey and moves on.*"
            }
        }
    },
    "day3_classroom_nurse_leave": {
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day3_break_time",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님이 교실을 나간다. 주변 애들은 아무것도 모른다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The nurse leaves the classroom. None of the other students noticed a thing.*"
            },
            "es": {
                "name": "Yo",
                "text": "*The nurse leaves the classroom. None of the other students noticed a thing.*"
            },
            "ja": {
                "name": "僕",
                "text": "*The nurse leaves the classroom. None of the other students noticed a thing.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*The nurse leaves the classroom. None of the other students noticed a thing.*"
            }
        }
    },
    "day3_break_time": {
        "character": "assets/images/characters/nurse_shy.png",
        "silhouette": true,
        "branches": [
            {
                "next": "day3_weekend_check_seoyeon",
                "condition": "has_any_contact"
            },
            {
                "next": "day3_morning_end"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*쉬는 시간. 핸드폰을 꺼내보니 주말 관련 메시지들이 와있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Break time. I check my phone — there are messages about weekend plans.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Break time. I check my phone — there are messages about weekend plans.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Break time. I check my phone — there are messages about weekend plans.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Break time. I check my phone — there are messages about weekend plans.*"
            }
        }
    },
    "day3_weekend_check_seoyeon": {
        "branches": [
            {
                "next": "day3_weekend_invite_seoyeon",
                "condition": "has_number_seyoun",
                "excludeCondition": "day3_morning_with_seoyeon"
            },
            {
                "next": "day3_weekend_check_yuna"
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
    "day3_weekend_invite_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_weekend_yes_seoyeon",
                "setFlag": "day3_seoyeon_date_confirmed",
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_weekend_no_seoyeon",
                "stats": {
                    "Seoyeon": {
                        "affinity": -3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*메시지* '있잖아 {name}! 이번 주 토요일에 새로 생긴 카페 같이 갈래? 너랑 꼭 가보고 싶어서! ☕'",
                "choices": [
                    "좋아! 같이 가자",
                    "미안, 주말에 좀 바빠서"
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Message* 'Hey {name}! Want to check out that new café this Saturday? I really want to go with you! ☕'",
                "choices": [
                    "Sure! Let's go!",
                    "Sorry, I'm busy this weekend"
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Message* 'Hey {name}! Want to check out that new café this Saturday? I really want to go with you! ☕'",
                "choices": [
                    "Sure! Let's go!",
                    "Perdón, estoy ocupado este fin de semana"
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "*Message* 'Hey {name}! Want to check out that new café this Saturday? I really want to go with you! ☕'",
                "choices": [
                    "Sure! Let's go!",
                    "ごめん、週末はちょっと忙しくて"
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Message* 'Hey {name}! Want to check out that new café this Saturday? I really want to go with you! ☕'",
                "choices": [
                    "Sure! Let's go!",
                    "Désolé, je suis occupé ce week-end"
                ]
            }
        }
    },
    "day3_weekend_yes_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "next": "day3_weekend_check_yuna",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*답장이 바로 온다* '진짜?! 그럼 토요일에 보자! 기대해도 좋아! ♡'"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Instant reply* 'Really?! See you Saturday then! You can look forward to it! ♡'"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Instant reply* 'Really?! See you Saturday then! You can look forward to it! ♡'"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*Instant reply* 'Really?! See you Saturday then! You can look forward to it! ♡'"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Instant reply* 'Really?! See you Saturday then! You can look forward to it! ♡'"
            }
        }
    },
    "day3_weekend_no_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "next": "day3_weekend_check_yuna",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*한참 뒤에 답장이 온다* '...그래, 괜찮아! 다음에 가면 되지!'"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Reply after a long pause* '...That's okay! Maybe next time!'"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Reply after a long pause* '...That's okay! Maybe next time!'"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*Reply after a long pause* '...That's okay! Maybe next time!'"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Reply after a long pause* '...That's okay! Maybe next time!'"
            }
        }
    },
    "day3_weekend_check_yuna": {
        "branches": [
            {
                "next": "day3_weekend_invite_yuna",
                "condition": "has_number_yuna",
                "excludeCondition": "day3_morning_with_yuna"
            },
            {
                "next": "day3_weekend_check_dain"
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
    "day3_weekend_invite_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_weekend_yes_yuna",
                "setFlag": "day3_yuna_date_confirmed",
                "stats": {
                    "Yuna": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_weekend_no_yuna",
                "stats": {
                    "Yuna": {
                        "affinity": -3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*메시지* '...토요일 밤 8시. 학교 뒤 창고. 진실을 알고 싶다면 와. 혼자서.'",
                "choices": [
                    "알았어, 꼭 갈게",
                    "무섭잖아, 안 갈래"
                ]
            },
            "en": {
                "name": "Yuna",
                "text": "*Message* '...Saturday night. 8 PM. The warehouse behind school. Come if you want the truth. Alone.'",
                "choices": [
                    "Got it, I'll be there",
                    "That's creepy, no thanks"
                ]
            },
            "es": {
                "name": "Yuna",
                "text": "*Message* '...Saturday night. 8 PM. The warehouse behind school. Come if you want the truth. Alone.'",
                "choices": [
                    "Got it, I'll be there",
                    "That's creepy, no thanks"
                ]
            },
            "ja": {
                "name": "ユナ",
                "text": "*Message* '...Saturday night. 8 PM. The warehouse behind school. Come if you want the truth. Alone.'",
                "choices": [
                    "Got it, I'll be there",
                    "That's creepy, no thanks"
                ]
            },
            "fr": {
                "name": "Yuna",
                "text": "*Message* '...Saturday night. 8 PM. The warehouse behind school. Come if you want the truth. Alone.'",
                "choices": [
                    "Got it, I'll be there",
                    "That's creepy, no thanks"
                ]
            }
        }
    },
    "day3_weekend_yes_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day3_weekend_check_dain",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*답장* '...고마워. 후회하지 않을 거야.'"
            },
            "en": {
                "name": "Yuna",
                "text": "*Reply* '...Thank you. You won't regret it.'"
            },
            "es": {
                "name": "Yuna",
                "text": "*Respuesta* '...Thank you. You won't regret it.'"
            },
            "ja": {
                "name": "ユナ",
                "text": "*返信* '...Thank you. You won't regret it.'"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Reply* '...Thank you. You won't regret it.'"
            }
        }
    },
    "day3_weekend_no_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day3_weekend_check_dain",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*읽음 표시만 뜨고 답장이 없다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*Read. No reply.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Read. No reply.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*Read. No reply.*"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Read. No reply.*"
            }
        }
    },
    "day3_weekend_check_dain": {
        "branches": [
            {
                "next": "day3_weekend_invite_dain",
                "condition": "has_number_dain",
                "excludeCondition": "day3_morning_with_dain"
            },
            {
                "next": "day3_weekend_check_nurse"
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
    "day3_weekend_invite_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_weekend_yes_dain",
                "setFlag": "day3_dain_date_confirmed",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_weekend_no_dain",
                "stats": {
                    "Dain": {
                        "affinity": -3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*메시지* '{name}아!!! 토요일에 체육관에서 나랑 운동할래?! 9시에 보자!! 💪🔥'",
                "choices": [
                    "좋아! 토요일에 보자",
                    "운동은 좀..."
                ]
            },
            "en": {
                "name": "Dain",
                "text": "*Message* '{name}!!! Wanna work out with me at the gym on Saturday?! See you at 9!! 💪🔥'",
                "choices": [
                    "Sure! See you Saturday!",
                    "Working out isn't really my thing..."
                ]
            },
            "es": {
                "name": "Dain",
                "text": "*Message* '{name}!!! Wanna work out with me at the gym on Saturday?! See you at 9!! 💪🔥'",
                "choices": [
                    "Sure! See you Saturday!",
                    "Working out isn't really my thing..."
                ]
            },
            "ja": {
                "name": "ダイン",
                "text": "*Message* '{name}!!! Wanna work out with me at the gym on Saturday?! See you at 9!! 💪🔥'",
                "choices": [
                    "Sure! See you Saturday!",
                    "Working out isn't really my thing..."
                ]
            },
            "fr": {
                "name": "Dain",
                "text": "*Message* '{name}!!! Wanna work out with me at the gym on Saturday?! See you at 9!! 💪🔥'",
                "choices": [
                    "Sure! See you Saturday!",
                    "Working out isn't really my thing..."
                ]
            }
        }
    },
    "day3_weekend_yes_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "next": "day3_weekend_check_nurse",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*답장이 0.5초 만에 온다* '와!! 최고!! 운동복 꼭 챙겨와!! 🏃‍♂️'"
            },
            "en": {
                "name": "Dain",
                "text": "*Reply in 0.5 seconds* 'AWESOME!! Don't forget your gym clothes!! 🏃‍♂️'"
            },
            "es": {
                "name": "Dain",
                "text": "*Reply in 0.5 seconds* 'AWESOME!! Don't forget your gym clothes!! 🏃‍♂️'"
            },
            "ja": {
                "name": "ダイン",
                "text": "*Reply in 0.5 seconds* 'AWESOME!! Don't forget your gym clothes!! 🏃‍♂️'"
            },
            "fr": {
                "name": "Dain",
                "text": "*Reply in 0.5 seconds* 'AWESOME!! Don't forget your gym clothes!! 🏃‍♂️'"
            }
        }
    },
    "day3_weekend_no_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "next": "day3_weekend_check_nurse",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*답장* '에이~ 아쉽다! 그래도 다음엔 꼭 같이 하자!'"
            },
            "en": {
                "name": "Dain",
                "text": "*Reply* 'Aww, too bad! But let's definitely do it next time!'"
            },
            "es": {
                "name": "Dain",
                "text": "*Respuesta* 'Aww, too bad! But let's definitely do it next time!'"
            },
            "ja": {
                "name": "ダイン",
                "text": "*返信* 'Aww, too bad! But let's definitely do it next time!'"
            },
            "fr": {
                "name": "Dain",
                "text": "*Reply* 'Aww, too bad! But let's definitely do it next time!'"
            }
        }
    },
    "day3_weekend_check_nurse": {
        "branches": [
            {
                "next": "day3_weekend_invite_nurse",
                "condition": "has_number_nurse",
                "excludeCondition": "day3_morning_with_nurse"
            },
            {
                "next": "day3_weekend_check_teacher"
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
    "day3_weekend_invite_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_weekend_yes_nurse",
                "setFlag": "day3_nurse_date_confirmed",
                "stats": {
                    "Nurse": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_weekend_no_nurse",
                "stats": {
                    "Nurse": {
                        "affinity": -3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*메시지* '혹시 이번 일요일 저녁에 시간 있어? 선생님이 맛집 하나 알려줄까 해서... 😉'",
                "choices": [
                    "좋아요! 꼭 갈게요",
                    "죄송해요, 일요일에 약속이..."
                ]
            },
            "en": {
                "name": "School Nurse",
                "text": "*Message* 'Are you free this Sunday evening? I know a great restaurant I'd love to take you to... 😉'",
                "choices": [
                    "Sure! I'd love to go!",
                    "Sorry, I have plans on Sunday..."
                ]
            },
            "es": {
                "name": "Enfermera",
                "text": "*Message* 'Are you free this Sunday evening? I know a great restaurant I'd love to take you to... 😉'",
                "choices": [
                    "Sure! I'd love to go!",
                    "Sorry, I have plans on Sunday..."
                ]
            },
            "ja": {
                "name": "保健先生",
                "text": "*Message* 'Are you free this Sunday evening? I know a great restaurant I'd love to take you to... 😉'",
                "choices": [
                    "Sure! I'd love to go!",
                    "Sorry, I have plans on Sunday..."
                ]
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Message* 'Are you free this Sunday evening? I know a great restaurant I'd love to take you to... 😉'",
                "choices": [
                    "Sure! I'd love to go!",
                    "Sorry, I have plans on Sunday..."
                ]
            }
        }
    },
    "day3_weekend_yes_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day3_weekend_check_teacher",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*답장* '후훗, 기대하고 있을게. 일요일 저녁 7시에 만나자 💋'"
            },
            "en": {
                "name": "School Nurse",
                "text": "*Reply* 'Great. I'll be waiting. Sunday at 7 PM 💋'"
            },
            "es": {
                "name": "Enfermera",
                "text": "*Respuesta* 'Great. I'll be waiting. Sunday at 7 PM 💋'"
            },
            "ja": {
                "name": "保健先生",
                "text": "*返信* 'Great. I'll be waiting. Sunday at 7 PM 💋'"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Reply* 'Great. I'll be waiting. Sunday at 7 PM 💋'"
            }
        }
    },
    "day3_weekend_no_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day3_weekend_check_teacher",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*답장* '아쉽네... 다음에 꼭 같이 가자.'"
            },
            "en": {
                "name": "School Nurse",
                "text": "*Reply* 'That's a shame... Maybe next time then.'"
            },
            "es": {
                "name": "Enfermera",
                "text": "*Respuesta* 'That's a shame... Maybe next time then.'"
            },
            "ja": {
                "name": "保健先生",
                "text": "*返信* 'That's a shame... Maybe next time then.'"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Reply* 'That's a shame... Maybe next time then.'"
            }
        }
    },
    "day3_weekend_check_teacher": {
        "branches": [
            {
                "next": "day3_weekend_invite_teacher",
                "condition": "has_number_teacher",
                "excludeCondition": "day3_morning_with_teacher"
            },
            {
                "next": "day3_check_multiple_dates"
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
    "day3_weekend_invite_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_weekend_yes_teacher",
                "setFlag": "day3_teacher_date_confirmed",
                "stats": {
                    "Teacher": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_weekend_no_teacher",
                "stats": {
                    "Teacher": {
                        "affinity": -3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*메시지* '{name}아, 이번 일요일에 시립 박물관에서 특별전 한다는데 같이 갈래? 수행평가 가산점도 줄게 ㅋ'",
                "choices": [
                    "좋아요! 꼭 갈게요",
                    "박물관은 좀..."
                ]
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*Message* '{name}, there's a special exhibition at the city museum this Sunday. Want to go together? I'll give you extra credit too lol'",
                "choices": [
                    "Sure! I'll definitely be there!",
                    "Museums aren't really my thing..."
                ]
            },
            "es": {
                "name": "Profesora",
                "text": "*Message* '{name}, there's a special exhibition at the city museum this Sunday. Want to go together? I'll give you extra credit too lol'",
                "choices": [
                    "Sure! I'll definitely be there!",
                    "Museums aren't really my thing..."
                ]
            },
            "ja": {
                "name": "担任先生",
                "text": "*Message* '{name}, there's a special exhibition at the city museum this Sunday. Want to go together? I'll give you extra credit too lol'",
                "choices": [
                    "Sure! I'll definitely be there!",
                    "Museums aren't really my thing..."
                ]
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Message* '{name}, there's a special exhibition at the city museum this Sunday. Want to go together? I'll give you extra credit too lol'",
                "choices": [
                    "Sure! I'll definitely be there!",
                    "Museums aren't really my thing..."
                ]
            }
        }
    },
    "day3_weekend_yes_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day3_check_multiple_dates",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*답장* '좋아! 일요일 오후 2시에 만나자. 재미있을 거야!'"
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*Reply* 'Great! Let's meet Sunday at 2 PM. It'll be fun!'"
            },
            "es": {
                "name": "Profesora",
                "text": "*Respuesta* 'Great! Let's meet Sunday at 2 PM. It'll be fun!'"
            },
            "ja": {
                "name": "担任先生",
                "text": "*返信* 'Great! Let's meet Sunday at 2 PM. It'll be fun!'"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Reply* 'Great! Let's meet Sunday at 2 PM. It'll be fun!'"
            }
        }
    },
    "day3_weekend_no_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day3_check_multiple_dates",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*답장* '그래, 알겠어. 다음 기회에 보자.'"
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*Reply* 'Alright. Maybe next time then.'"
            },
            "es": {
                "name": "Profesora",
                "text": "*Respuesta* 'Alright. Maybe next time then.'"
            },
            "ja": {
                "name": "担任先生",
                "text": "*返信* 'Alright. Maybe next time then.'"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Reply* 'Alright. Maybe next time then.'"
            }
        }
    },
    "day3_check_multiple_dates": {
        "branches": [
            {
                "next": "day3_multi_from_seoyeon",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_multi_from_yuna",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_multi_from_dain",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_multi_from_nurse",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_morning_end"
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
    "day3_multi_from_seoyeon": {
        "branches": [
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_morning_end"
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
    "day3_multi_from_yuna": {
        "branches": [
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_morning_end"
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
    "day3_multi_from_dain": {
        "branches": [
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_morning_end"
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
    "day3_multi_from_nurse": {
        "branches": [
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_morning_end"
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
    "day3_set_multiple_dates": {
        "setFlag": "day3_has_multiple_dates",
        "next": "day3_morning_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*......잠깐. 나 혹시 주말 약속을 여러 개 잡아버린 건 아닌가? 괜히 불안해진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...Wait. Did I just make plans with multiple people this weekend? I'm starting to feel uneasy.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...Wait. Did I just make plans with multiple people this weekend? I'm starting to feel uneasy.*"
            },
            "ja": {
                "name": "僕",
                "text": "*...Wait. Did I just make plans with multiple people this weekend? I'm starting to feel uneasy.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Wait. Did I just make plans with multiple people this weekend? I'm starting to feel uneasy.*"
            }
        }
    },
    "day3_morning_end": {
        "fade": true,
        "next": "day3_lunch_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*수업이 계속되고... 시간이 흘러 어느덧 점심시간이 되었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Classes began... and before I knew it, it was lunchtime.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Classes began... and before I knew it, it was lunchtime.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Classes began... and before I knew it, it was lunchtime.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Classes began... and before I knew it, it was lunchtime.*"
            }
        }
    }
});
