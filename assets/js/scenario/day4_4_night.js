/**
 * ============================================================================
 * CUPID - day4_4_night (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day4_4_night.js + en_day4_4_night.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다..
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

Object.assign(SCENARIO[4], {
    "day4_night_start": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "bgm": "night2.mp3",
        "next": "day4_night_branch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집에 돌아왔다. 방에 누우니 오늘의 기억이 필름처럼 스쳐 지나간다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I'm back home. Lying in bed, today's memories replay like a film.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Llegué a casa. Acostado en la cama, los recuerdos de hoy pasan como una película.*"
            },
            "ja": {
                "name": "僕",
                "text": "*家に帰ってきた。ベッドに横になると、今日の記憶がフィルムのように駆け巡る。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je suis rentré. Allongé dans mon lit, les souvenirs d'aujourd'hui défilent comme un film.*"
            }
        }
    },
    "day4_night_branch": {
        "background": "assets/images/background/room_my.png",
        "branches": [
            {
                "next": "day4_night_yuna_sneak",
                "condition": "isDating_Yuna"
            },
            {
                "next": "day4_night_seoyeon_call",
                "condition": "isDating_Seoyeon"
            },
            {
                "next": "day4_night_dain_gym",
                "condition": "isDating_Dain"
            },
            {
                "next": "day4_night_teacher_call",
                "condition": "isDating_Teacher"
            },
            {
                "next": "day4_night_nurse_msg",
                "condition": "isDating_Nurse"
            },
            {
                "next": "day4_night_regret",
                "condition": "day4_waited"
            },
            {
                "next": "day4_night_reflect"
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
    "day4_night_yuna_sneak": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "bgm": "mystery.mp3",
        "next": "day4_night_yuna_sneak_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*밤 10시. 유나에게서 메시지가 왔다. '학교 후문. 지금 와.'*"
            },
            "en": {
                "name": "Me",
                "text": "*10 PM. A message came from Yuna. 'School back gate. Come now.'*"
            },
            "es": {
                "name": "Yo",
                "text": "*10 PM. Llegó un mensaje de Yuna. 'Puerta trasera de la escuela. Ven ahora.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*夜10時。ユナからメッセージが来た。「学校の裏門。今すぐ来て。」*"
            },
            "fr": {
                "name": "Moi",
                "text": "*22 heures. Un message de Yuna. 'Portail arrière de l'école. Viens maintenant.'*"
            }
        }
    },
    "day4_night_yuna_sneak_2": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_yuna_arrive",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*심장이 두근거린다. 유나가 말했던 '진실'… 드디어 알게 되는 건가.*"
            },
            "en": {
                "name": "Me",
                "text": "*My heart is pounding. The 'truth' Yuna mentioned... am I finally going to find out?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mi corazón late con fuerza. La 'verdad' que Yuna mencionó... ¿finalmente voy a descubrirla?*"
            },
            "ja": {
                "name": "僕",
                "text": "*心臓がドキドキする。ユナが言っていた「真実」…ついにわかるのか。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mon cœur bat la chamade. La 'vérité' dont Yuna parlait... vais-je enfin la découvrir ?*"
            }
        }
    },
    "day4_night_yuna_arrive": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_arrive_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…왔어. 늦을 줄 알았는데.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...You came. I thought you'd be late.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Viniste. Pensé que llegarías tarde.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…来たんだ。遅れると思ってた。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Tu es venu. Je pensais que tu serais en retard.\\\""
            }
        }
    },
    "day4_night_yuna_arrive_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학교 후문. 유나가 가로등 불빛 아래 서 있었다. 표정이 평소보다 더 단단해 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The school back gate. Yuna stood under a streetlight. Her expression looked more resolute than usual.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La puerta trasera de la escuela. Yuna estaba de pie bajo la luz de la calle. Su expresión se veía más decidida que de costumbre.*"
            },
            "ja": {
                "name": "僕",
                "text": "*学校の裏門。ユナが街灯の下に立っていた。表情がいつもより硬い。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le portail arrière de l'école. Yuna se tenait sous un réverbère. Son expression semblait plus déterminée que d'habitude.*"
            }
        }
    },
    "day4_night_yuna_wall": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…안으로 가기 전에, 먼저 봐야 할 게 있어. 이쪽으로 와.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Before we go inside, there's something you need to see first. Come this way.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Antes de entrar, hay algo que necesitas ver primero. Ven por aquí.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…中に入る前に、まず見てほしいものがある。こっちに来て。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Avant d'entrer, il y a quelque chose que tu dois voir. Suis-moi par ici.\\\""
            }
        }
    },
    "day4_night_yuna_wall_2": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "night": true,
        "next": "day4_night_yuna_wall_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 학교 건물 뒤편으로 나를 이끌었다. 가로등도 없는 어두운 구석. 손전등 불빛이 낡은 콘크리트 외벽을 비추자— 균열이 보였다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna led me to the back of the school building. A dark corner with no streetlights. When her flashlight lit up the old concrete exterior wall— I saw the crack.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna me llevó a la parte trasera del edificio escolar. Un rincón oscuro sin farolas. Cuando su linterna iluminó la vieja pared exterior de concreto— vi la grieta.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナが校舎の裏手に僕を連れて行った。街灯もない暗い角。懐中電灯が古いコンクリートの外壁を照らすと――ひびが見えた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna m'a conduit à l'arrière du bâtiment scolaire. Un coin sombre sans éclairage. Quand sa lampe torche a illuminé le vieux mur extérieur en béton — j'ai vu la fissure.*"
            }
        }
    },
    "day4_night_yuna_wall_3": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "night": true,
        "next": "day4_night_yuna_wall_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*균열이라는 말로는 부족했다. 외벽 한쪽 면을 따라 세로로 길게, 팔뚝 두께만큼 벌어진 갈라짐이 이어져 있었다. 여기저기 콘크리트 조각이 이미 떨어져 나간 흔적도 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*'Crack' was too mild a word for it. Running vertically along one side of the exterior wall, a fissure as wide as a forearm stretched from top to bottom. Chunks of concrete had already fallen away in several places.*"
            },
            "es": {
                "name": "Yo",
                "text": "*'Grieta' era una palabra demasiado suave. A lo largo de un lado de la pared exterior, una fisura del grosor de un antebrazo se extendía verticalmente. En varios lugares ya se habían desprendido fragmentos de concreto.*"
            },
            "ja": {
                "name": "僕",
                "text": "*「ひび」という言葉では足りなかった。外壁の一面に沿って縦に長く、腕の太さほどに口を開いた亀裂が続いていた。あちこちにコンクリートの破片がすでに剥落した跡も見える。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*'Fissure' était un mot trop faible. Le long d'un côté du mur extérieur, une crevasse large comme un avant-bras s'étendait verticalement de haut en bas. Des morceaux de béton s'étaient déjà détachés à plusieurs endroits.*"
            }
        }
    },
    "day4_night_yuna_wall_4": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"이거… 언제부터 이랬어?\""
            },
            "en": {
                "name": "Me",
                "text": "\"This... how long has it been like this?\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Esto... ¿desde cuándo está así?\""
            },
            "ja": {
                "name": "僕",
                "text": "\"これ…いつからこんなに？\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Ça... depuis quand c'est comme ça ?\\\""
            }
        }
    },
    "day4_night_yuna_wall_5": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_6",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"적어도 3년. 근데 학교는 계속 보수를 미뤄왔어. 학생들이 이쪽으로 못 오게 막아두고.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"At least three years. But the school kept delaying repairs. They've blocked students from coming over here.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Al menos tres años. Pero la escuela siguió aplazando las reparaciones. Han bloqueado el acceso a los estudiantes en esta zona.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"少なくとも3年。でも学校はずっと修繕を先延ばしにしてきた。生徒がここに来られないように封鎖して。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Au moins trois ans. Mais l'école n'a cessé de repousser les réparations. Ils ont interdit aux élèves de venir ici.\\\""
            }
        }
    },
    "day4_night_yuna_wall_6": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_7",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"이 건물, 지어질 때부터 문제가 있었어. 설계대로 시공이 안 됐거든. 철근 간격, 콘크리트 배합비... 전부 기준 미달이었어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"This building had problems from the moment it was built. It wasn't constructed according to the design. Rebar spacing, concrete mix ratio... all of it was below standard.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Este edificio tuvo problemas desde que fue construido. No se construyó según el diseño. El espaciado de las varillas, la mezcla de concreto... todo estaba por debajo del estándar.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"この建物、建設当初から問題があった。設計通りに施工されてなかったんだ。鉄筋の間隔、コンクリートの配合比…全部基準以下だった。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Ce bâtiment avait des problèmes dès sa construction. Il n'a pas été construit selon les plans. L'espacement des armatures, le dosage du béton... tout était en dessous des normes.\\\""
            }
        }
    },    
    "day4_night_yuna_enter_honest": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "day4_night_yuna_corridor",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……솔직한 건 좋아해. 괜찮아, 내가 옆에 있으니까.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I like that you're honest. It's okay—I'm right here beside you.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Me gusta que seas honesto. Está bien, estoy aquí a tu lado.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…正直なの、好きだよ。大丈夫、私がそばにいるから。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...J'aime ta franchise. Ça va — je suis juste là, à côté de toi.\\\""
            }
        }
    },
    "day4_night_yuna_wall_7": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_8",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"…그걸 어떻게 알았어?\""
            },
            "en": {
                "name": "Me",
                "text": "\"...How do you know that?\""
            },
            "es": {
                "name": "Yo",
                "text": "\"...¿Cómo sabes eso?\""
            },
            "ja": {
                "name": "僕",
                "text": "\"…それをどうやって知ったの？\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"...Comment tu sais ça ?\\\""
            }
        }
    },
    "day4_night_yuna_wall_8": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_9",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"시공사가 '성진건설'이었어. 재단 이사장 처남이 대표로 있는 회사. 공사비 15억 중 7억이 어디로 갔는지 알아?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"The contractor was 'Hanjin Construction.' A company whose CEO is the brother-in-law of the foundation's chairman. Do you know where 700 million of the 1.5 billion won in construction costs went?\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"La constructora era 'Hanjin Construction.' Una empresa cuyo CEO es el cuñado del presidente de la fundación. ¿Sabes adónde fueron 700 millones de los 1.500 millones de won en costos de construcción?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"施工業者は『漢進建設』。財団の理事長の義弟が代表を務める会社。工事費15億のうち7億がどこに消えたか知ってる？\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"L'entrepreneur était 'Hanjin Construction.' Une entreprise dont le PDG est le beau-frère du président de la fondation. Tu sais où sont passés 700 millions sur les 1,5 milliard de wons de coûts de construction ?\\\""
            }
        }
    },
    "day4_night_yuna_wall_9": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_10",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*심장이 서늘해졌다. 설마…*"
            },
            "en": {
                "name": "Me",
                "text": "*My chest went cold. Surely not...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Se me heló el corazón. No puede ser...*"
            },
            "ja": {
                "name": "僕",
                "text": "*胸が冷たくなった。まさか…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mon sang s'est glacé. Ce n'est pas possible...*"
            }
        }
    },
    "day4_night_yuna_wall_10": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_11",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"재단 계좌로. 공사비를 빼돌리고 부실 시공을 한 거야. 이 균열이 그 증거야. 학교 건물 전체가 사실 위험해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Into the foundation's accounts. They siphoned off the construction funds and did shoddy work. This crack is the proof. The entire school building is actually dangerous.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"A las cuentas de la fundación. Desviaron los fondos de construcción e hicieron un trabajo deficiente. Esta grieta es la prueba. En realidad, todo el edificio escolar es peligroso.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"財団の口座へ。工事費を横領して手抜き工事をしたんだ。この亀裂がその証拠。学校の建物全体が実は危険な状態にある。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Sur les comptes de la fondation. Ils ont détourné les fonds de construction et bâclé les travaux. Cette fissure en est la preuve. Tout le bâtiment scolaire est en réalité dangereux.\\\""
            }
        }
    },
    "day4_night_yuna_wall_11": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*균열을 다시 봤다. 단순한 낡음이 아니었다. 이건 누군가의 탐욕이 남긴 흔적이었다. 수백 명의 학생들이 매일 이런 건물 안에 있다는 사실이 갑자기 두렵게 느껴졌다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I looked at the crack again. It wasn't just ordinary aging. This was the trace left behind by someone's greed. The fact that hundreds of students were inside this building every day suddenly felt terrifying.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Volví a mirar la grieta. No era solo desgaste ordinario. Era la huella dejada por la codicia de alguien. El hecho de que cientos de estudiantes estuvieran dentro de este edificio todos los días de repente me pareció aterrador.*"
            },
            "ja": {
                "name": "僕",
                "text": "*亀裂をもう一度見た。単なる老朽化じゃなかった。これは誰かの欲が残した跡だった。何百人もの生徒が毎日この建物の中にいるという事実が、急に恐ろしく感じられた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai regardé la fissure à nouveau. Ce n'était pas un simple vieillissement. C'était la trace laissée par l'avidité de quelqu'un. Le fait que des centaines d'élèves se trouvaient dans ce bâtiment chaque jour m'a soudain paru terrifiant.*"
            }
        }
    },
    "day4_night_yuna_wall_choice": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_yuna_wall_anger",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_night_yuna_wall_fear",
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
                "text": "*이게 현실이라는 게 믿기지 않았다.*",
                "choices": [
                    "\"…이걸 알면서도 학교가 숨긴 거야? 용납이 안 돼.\"",
                    "\"…이거, 우리가 건드려도 되는 거야?\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*I couldn't believe this was real.*",
                "choices": [
                    "\"...The school knew about this and hid it? That's unforgivable.\"",
                    "\"...Should we really be getting involved in this?\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*No podía creer que esto fuera real.*",
                "choices": [
                    "\"...¿La escuela lo sabía y lo ocultó? Eso es imperdonable.\"",
                    "\"...¿Deberíamos meternos en esto?\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*これが現実だとは信じられなかった。*",
                "choices": [
                    "\"…これを知りながら学校が隠したの？許せない。\"",
                    "\"…これ、僕たちが関わっていいものなの？\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Je n'arrivais pas à croire que c'était réel.*",
                "choices": [
                    "\\\"...L'école le savait et l'a caché ? C'est impardonnable.\\\"",
                    "\\\"...On devrait vraiment s'en mêler ?\\\""
                ]
            }
        }
    },
    "day4_night_yuna_wall_anger": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "day4_night_yuna_wall_end",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…나도 처음에 그랬지만 분노만으론 안 돼. 그래서 증거가 필요했어. 지하에 있어. 따라와.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...That's how I felt at first too. But anger alone isn't enough. That's why I needed evidence. It's downstairs. Follow me.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Así me sentí yo al principio también. Pero la rabia sola no basta. Por eso necesitaba pruebas. Están abajo. Sígueme.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…私も最初はそうだった。でも怒りだけじゃ足りない。だから証拠が必要だった。地下にある。ついてきて。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...C'est ce que j'ai ressenti au début aussi. Mais la colère seule ne suffit pas. C'est pour ça que j'avais besoin de preuves. C'est en bas. Suis-moi.\\\""
            }
        }
    },
    "day4_night_yuna_wall_fear": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_end",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…무서운 거 당연해. 나도 1년 동안 그랬어. 근데 이미 알아버렸잖아. 모른 척할 수 있어?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Being scared is natural. I felt the same way for a whole year. But now you know. Can you pretend you don't?\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Tener miedo es normal. Yo también lo sentí durante un año entero. Pero ahora ya sabes. ¿Puedes fingir que no?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…怖いのは当然だよ。私も1年間そうだった。でも、もう知ってしまったじゃない。知らないふりができる？\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Avoir peur, c'est normal. J'ai ressenti la même chose pendant un an. Mais maintenant tu sais. Tu peux faire semblant de ne rien savoir ?\\\""
            }
        }
    },    
    "day4_night_yuna_wall_end": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_arrive_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 말이 가슴 깊이 박혔다. 모른 척할 수 없었다. 이미 이 균열을 눈으로 봐버렸으니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna's words struck deep. I couldn't pretend not to know. I'd already seen this crack with my own eyes.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Las palabras de Yuna me llegaron al fondo. No podía fingir no saber. Ya había visto esta grieta con mis propios ojos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナの言葉が胸の奥に刺さった。知らないふりはできなかった。もうこの亀裂を自分の目で見てしまったから。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Les mots de Yuna m'ont frappé en plein cœur. Je ne pouvais pas faire semblant de ne rien savoir. J'avais déjà vu cette fissure de mes propres yeux.*"
            }
        }
    },
    "day4_night_yuna_arrive_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_choice",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…이쪽으로 따라와. 각오는 됐어?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I have something to show you today. Are you prepared?\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Hoy tengo algo que mostrarte. ¿Estás preparado?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…今日見せたいものがある。覚悟はできてる？\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...J'ai quelque chose à te montrer aujourd'hui. Tu es prêt ?\\\""
            }
        }
    },
    "day4_night_yuna_choice": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_yuna_enter",
                "stats": {
                    "Yuna": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day4_night_yuna_enter_honest",
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
                "text": "*유나의 눈빛이 심상치 않다.*",
                "choices": [
                    "\"당연하지. 그래서 온 거잖아.\"",
                    "\"…솔직히 좀 무섭긴 해.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The look in Yuna's eyes is serious.*",
                "choices": [
                    "\"Of course. That's why I came.\"",
                    "\"...Honestly, I'm a little scared.\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La mirada de Yuna es seria.*",
                "choices": [
                    "\"Por supuesto. Por eso vine.\"",
                    "\"...Sinceramente, me da un poco de miedo.\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ユナの目つきが尋常じゃない。*",
                "choices": [
                    "\"当然だよ。そのために来たんだから。\"",
                    "\"…正直、ちょっと怖いかも。\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Le regard de Yuna est grave.*",
                "choices": [
                    "\\\"Bien sûr. C'est pour ça que je suis venu.\\\"",
                    "\\\"...Honnêtement, j'ai un peu peur.\\\""
                ]
            }
        }
    },
    "day4_night_yuna_enter": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "day4_night_yuna_corridor",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…좋아. 따라와.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Good. Follow me.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Bien. Sígueme.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…いいね。ついてきて。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Bien. Suis-moi.\\\""
            }
        }
    },
    "day4_night_yuna_enter_honest": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "day4_night_yuna_corridor",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……솔직해도 돼. 괜찮아, 내가 옆에 있으니까.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I like that you're honest. It's okay—I'm right here beside you.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Me gusta que seas honesto. Está bien, estoy aquí a tu lado.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…正直なの、好きだよ。大丈夫、私がそばにいるから。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...J'aime ta franchise. Ça va — je suis juste là, à côté de toi.\\\""
            }
        }
    },    
    "day4_night_yuna_corridor": {
        "character": "assets/images/characters/yuna_smile.png",
        "background": "assets/images/background/school_hallway.png",
        "night": true,
        "next": "day4_night_yuna_corridor_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 후문 자물쇠를 익숙하게 열었다. 마치 이미 여러 번 해 본 것처럼.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna opened the back gate lock with practiced ease. As if she'd done this many times before.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna abrió la cerradura de la puerta trasera con facilidad. Como si lo hubiera hecho muchas veces antes.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナは裏門の鍵を慣れた手つきで開けた。まるで何度もやったことがあるみたいに。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna a ouvert la serrure du portail arrière avec une aisance experte. Comme si elle l'avait fait de nombreuses fois.*"
            }
        }
    },
    "day4_night_yuna_corridor_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "day4_night_yuna_corridor_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*텅 빈 학교 복도. 비상등만 희미하게 켜져 있다. 낮에는 시끄러웠던 곳이 지금은 숨소리마저 울릴 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The empty school hallway. Only the dim emergency lights were on. The place that was so noisy during the day now felt like even a breath would echo.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El pasillo vacío de la escuela. Solo las tenues luces de emergencia estaban encendidas. El lugar que era tan ruidoso durante el día ahora parecía que hasta un suspiro resonaría.*"
            },
            "ja": {
                "name": "僕",
                "text": "*がらんとした学校の廊下。非常灯だけがぼんやり点いている。昼間は騒がしかった場所が、今は息遣いすら響きそうだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le couloir vide de l'école. Seules les faibles lumières de secours étaient allumées. L'endroit si bruyant en journée semblait maintenant si silencieux qu'un souffle y résonnerait.*"
            }
        }
    },
    "day4_night_yuna_corridor_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_basement",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…지하 자료실이야. 학교가 봉인한 구역. 여기에 전부 있어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...The underground archives. A section the school sealed off. Everything's in here.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Los archivos subterráneos. Una sección que la escuela selló. Todo está aquí.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…地下資料室。学校が封印した区画。ここに全部ある。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Les archives souterraines. Une section que l'école a condamnée. Tout est ici.\\\""
            }
        }
    },
    "day4_night_yuna_basement": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/school_basement.png",
        "night": true,
        "next": "day4_night_yuna_basement_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*지하로 내려가자 공기가 차갑게 바뀌었다. 먼지 냄새와 함께 오래된 서류 냄새가 코끝을 찔렀다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As we descended underground, the air turned cold. The smell of dust and old documents stung my nose.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al bajar al subterráneo, el aire se volvió frío. El olor a polvo y documentos viejos me golpeó la nariz.*"
            },
            "ja": {
                "name": "僕",
                "text": "*地下に降りると空気が冷たくなった。ほこりの匂いと古い書類の匂いが鼻を突いた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En descendant sous terre, l'air est devenu glacial. L'odeur de poussière et de vieux documents m'a piqué le nez.*"
            }
        }
    },
    "day4_night_yuna_basement_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_basement_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"이 학교 재단… '성진학원'. 겉으로는 교육 명문을 자처하지만, 10년 전부터 조직적으로 비자금을 운영해 왔어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"This school's foundation... 'Sungjin Academy.' They claim to be an elite educational institution, but they've been operating a slush fund systematically for the past ten years.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"La fundación de esta escuela... 'Academia Sungjin.' Se hacen pasar por una institución educativa de élite, pero han operado fondos ilícitos sistemáticamente durante los últimos diez años.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"この学校の財団…『聖進学園』。表向きは教育名門を自称してるけど、10年前から組織的に裏金を運営してきた。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"La fondation de cette école... 'Académie Sungjin.' Ils prétendent être une institution éducative d'élite, mais ils gèrent une caisse noire de manière systématique depuis dix ans.\\\""
            }
        }
    },
    "day4_night_yuna_basement_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_basement_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"…비자금?\""
            },
            "en": {
                "name": "Me",
                "text": "\"...A slush fund?\""
            },
            "es": {
                "name": "Yo",
                "text": "\"...¿Fondos ilícitos?\""
            },
            "ja": {
                "name": "僕",
                "text": "\"…裏金？\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"...Une caisse noire ?\\\""
            }
        }
    },
    "day4_night_yuna_basement_4": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_documents",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"학생 복지 기금 횡령, 시설 보수비 허위 청구, 기부금 유용… 여기 다 있어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Embezzling student welfare funds, false claims for facility repair costs, misappropriation of donations... It's all here.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Malversación de fondos de bienestar estudiantil, reclamaciones falsas por reparaciones, desvío de donaciones... Todo está aquí.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"学生福祉基金の横領、施設修繕費の虚偽請求、寄付金の流用…ここに全部ある。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Détournement des fonds d'aide aux élèves, fausses factures de réparation, malversation des dons... Tout est là.\\\""
            }
        }
    },
    "day4_night_yuna_documents": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_documents_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 선반에서 낡은 서류 파일을 꺼냈다. 빼곡한 숫자들과 도장들. 이건… 진짜 장부다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna pulled out a worn file from the shelf. Dense numbers and stamps filled the pages. This is... a real ledger.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna sacó un archivo desgastado del estante. Números densos y sellos llenaban las páginas. Esto es... un libro de contabilidad real.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナが棚から古びた書類ファイルを取り出した。びっしりと並んだ数字と印鑑。これは…本物の帳簿だ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna a sorti un dossier usé de l'étagère. Des chiffres serrés et des tampons remplissaient les pages. C'est... un vrai livre de comptes.*"
            }
        }
    },
    "day4_night_yuna_documents_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_documents_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"특히 균열이 심한 이 건물… 본관 동쪽 계단. 3년 전 보수 공사를 했다고 되어 있는데, 실제로는 한 푼도 쓰지 않았어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Especially this building... the east staircase of the main hall. Records say it was renovated three years ago, but in reality, not a single penny was spent.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Especialmente este edificio... la escalera este del edificio principal. Los registros dicen que fue renovada hace tres años, pero en realidad, no se gastó ni un centavo.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"特にこの建物…本館東側の階段。3年前に補修工事をしたことになってるけど、実際には一銭も使われてない。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Surtout ce bâtiment... l'escalier est du hall principal. Les registres indiquent qu'il a été rénové il y a trois ans, mais en réalité, pas un centime n'a été dépensé.\\\""
            }
        }
    },
    "day4_night_yuna_documents_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_truth_choice",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…그리고 그 계단에서, 1년 전에 사고가 일어났어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...And on those stairs, an accident happened one year ago.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Y en esas escaleras, hace un año ocurrió un accidente.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…そしてその階段で、1年前に事故が起きた。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Et dans cet escalier, un accident s'est produit il y a un an.\\\""
            }
        }
    },
    "day4_night_yuna_truth_choice": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_yuna_senpai_reveal",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_night_yuna_senpai_concern",
                "stats": {
                    "Yuna": {
                        "affinity": 10
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 목소리가 떨리고 있다.*",
                "choices": [
                    "\"…누가 다친 거야?\"",
                    "\"유나야… 괜찮아?\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Yuna's voice is trembling.*",
                "choices": [
                    "\"...Who got hurt?\"",
                    "\"Yuna... are you okay?\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La voz de Yuna está temblando.*",
                "choices": [
                    "\"...¿Quién resultó herido?\"",
                    "\"Yuna... ¿estás bien?\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ユナの声が震えている。*",
                "choices": [
                    "\"…誰が怪我したの？\"",
                    "\"ユナ…大丈夫？\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*La voix de Yuna tremble.*",
                "choices": [
                    "\\\"...Qui a été blessé ?\\\"",
                    "\\\"Yuna... ça va ?\\\""
                ]
            }
        }
    },
    "day4_night_yuna_senpai_concern": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_senpai_reveal",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……괜찮냐고 묻는 사람은, 네가 처음이야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...You're the first person to ask me that.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Eres la primera persona que me pregunta eso.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"……大丈夫かって聞いてくれたのは、あんたが初めて。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Tu es la première personne à me demander ça.\\\""
            }
        }
    },
    "day4_night_yuna_senpai_reveal": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_senpai_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…이준호 선배. 당시 학생회장이었어. 재단 비리를 알게 되고, 증거를 모으고 있었지.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Lee Junho, a senior. He was the student council president at the time. He found out about the foundation's corruption and was gathering evidence.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Lee Junho, un estudiante mayor. Era el presidente del consejo estudiantil en ese momento. Descubrió la corrupción de la fundación y estaba reuniendo pruebas.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…イ・ジュノ先輩。当時の生徒会長だった。財団の不正を知って、証拠を集めてた。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Lee Junho, un élève plus âgé. Il était président du conseil des élèves à l'époque. Il avait découvert la corruption de la fondation et rassemblait des preuves.\\\""
            }
        }
    },
    "day4_night_yuna_senpai_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_senpai_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"선배는… 정의감이 강한 사람이었어. 바보같을 정도로. 누군가 피해를 보고 있으면 절대 그냥 못 넘어가는.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"He was... a person with a strong sense of justice. Almost foolishly so. He could never look away when someone was being wronged.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Él era... una persona con un fuerte sentido de justicia. Casi tontamente. Nunca podía mirar hacia otro lado cuando alguien estaba siendo perjudicado.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"先輩は…正義感が強い人だった。馬鹿みたいに。誰かが被害を受けてると、絶対に見過ごせない人。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"C'était... quelqu'un avec un sens aigu de la justice. Presque naïvement. Il ne pouvait jamais détourner le regard quand quelqu'un subissait une injustice.\\\""
            }
        }
    },
    "day4_night_yuna_senpai_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_senpai_4",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"그러다 어느 날… 그 동쪽 계단에서 추락했어. 학교는 '실족사'로 처리했고.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Then one day... he fell from that east staircase. The school ruled it an 'accidental fall.'\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Entonces un día... cayó de esa escalera este. La escuela lo clasificó como 'caída accidental.'\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"そしてある日…あの東階段から転落した。学校は『失足死』として処理した。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Et puis un jour... il est tombé de cet escalier est. L'école a conclu à une 'chute accidentelle.'\\\""
            }
        }
    },
    "day4_night_yuna_senpai_4": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_senpai_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"……실족사? 비리를 조사하던 사람이?\""
            },
            "en": {
                "name": "Me",
                "text": "\"...An accidental fall? The person who was investigating the corruption?\""
            },
            "es": {
                "name": "Yo",
                "text": "\"...¿Una caída accidental? ¿La persona que investigaba la corrupción?\""
            },
            "ja": {
                "name": "僕",
                "text": "\"……失足死？不正を調査してた人が？\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"...Une chute accidentelle ? La personne qui enquêtait sur la corruption ?\\\""
            }
        }
    },
    "day4_night_yuna_senpai_5": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_senpai_6",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…보수도 안 한 낡은 계단 난간이 부러지면서 추락했대. 하지만... 수상하게도 선배의 머리엔 무언가에 찍힌 흔적이 있었어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...The old staircase railing that was never repaired broke. If the foundation hadn't embezzled the repair funds, that accident would never have happened.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...La barandilla vieja de la escalera que nunca fue reparada se rompió. Si la fundación no hubiera malversado los fondos de reparación, ese accidente nunca habría ocurrido.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…補修もされてない古い階段の手すりが折れたんだって。財団が工事費を横領しなければ起きなかった事故。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...La vieille rampe d'escalier qui n'avait jamais été réparée s'est brisée. Si la fondation n'avait pas détourné les fonds de réparation, cet accident ne serait jamais arrivé.\\\""
            }
        }
    },
    "day4_night_yuna_senpai_6": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_senpai_death",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"증거를 들고 교육청에 가려던 전날이었어. 우연인지, 아닌지… 아직도 모르겠어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"It was the day before he planned to take the evidence to the Board of Education. Whether it was coincidence or not... I still don't know.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Fue el día antes de que planeara llevar las pruebas a la Junta de Educación. Si fue coincidencia o no... aún no lo sé.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"証拠を持って教育委員会に行く前日だった。偶然なのか、そうじゃないのか…まだわからない。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"C'était la veille du jour où il comptait apporter les preuves au Rectorat. Que ce soit une coïncidence ou non... je ne sais toujours pas.\\\""
            }
        }
    },
    "day4_night_yuna_senpai_death": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_silence",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"선배는… 며칠 뒤 병원에서 눈을 감았어. 끝내 깨어나지 못했지.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"He... passed away in the hospital a few days later. He never woke up.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Él... falleció en el hospital unos días después. Nunca despertó.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"先輩は…数日後に病院で息を引き取った。結局目を覚まさなかった。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Il est... décédé à l'hôpital quelques jours plus tard. Il ne s'est jamais réveillé.\\\""
            }
        }
    },
    "day4_night_yuna_silence": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_silence_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 손이 떨리고 있었다. 서류를 쥔 손가락 끝이 하얗게 질려 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna's hands were shaking. Her fingertips, gripping the documents, had turned white.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Las manos de Yuna temblaban. Sus dedos, aferrados a los documentos, se habían puesto blancos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナの手が震えていた。書類を握る指先が白くなっている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Les mains de Yuna tremblaient. Le bout de ses doigts, agrippés aux documents, était devenu blanc.*"
            }
        }
    },
    "day4_night_yuna_silence_choice": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_yuna_hand",
                "stats": {
                    "Yuna": {
                        "affinity": 15
                    }
                },
                "setFlag": "day4_held_yuna_hand"
            },
            {
                "next": "day4_night_yuna_listen",
                "stats": {
                    "Yuna": {
                        "affinity": 10
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*……*",
                "choices": [
                    "유나의 손을 잡는다",
                    "\"…계속 말해줘. 듣고 있을게.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*...*",
                "choices": [
                    "Take Yuna's hand",
                    "\"...Keep talking. I'm listening.\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*...*",
                "choices": [
                    "Tomar la mano de Yuna",
                    "\"...Sigue hablando. Te escucho.\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*……*",
                "choices": [
                    "ユナの手を握る",
                    "\"…続けて。聞いてるから。\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*...*",
                "choices": [
                    "Prendre la main de Yuna",
                    "\\\"...Continue. Je t'écoute.\\\""
                ]
            }
        }
    },
    "day4_night_yuna_hand": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_hand_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……!\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...!\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...!\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"……！\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"... !\\\""
            }
        }
    },
    "day4_night_yuna_hand_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_resemblance",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 손이 차가웠다. 하지만 내 손을 뿌리치지 않았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna's hand was cold. But she didn't pull away.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La mano de Yuna estaba fría. Pero no se apartó.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナの手は冷たかった。でも僕の手を振り払わなかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La main de Yuna était glacée. Mais elle ne s'est pas dégagée.*"
            }
        }
    },
    "day4_night_yuna_listen": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_intro",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……고마워.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Thank you.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Gracias.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"……ありがとう。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Merci.\\\""
            }
        }
    },
    "day4_night_yuna_seoyeon_intro": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_intro_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…그리고 한 가지 더. 이게 제일 중요해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...And one more thing. This is the most important part.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Y una cosa más. Esta es la parte más importante.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…それともう一つ。これが一番重要なんだ。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Et encore une chose. C'est la plus importante.\\\""
            }
        }
    },
    "day4_night_yuna_seoyeon_intro_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_intro_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"재단 비리는 10년 전 이사장이 시작했어. 근데 지금… 최근 2년 사이에 일어난 일들은 달라. 더 치밀하고, 더 조직적이야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"The foundation's corruption started with the chairman ten years ago. But now... what's happened in the last two years is different. More calculated, more organized.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"La corrupción de la fundación comenzó con el presidente hace diez años. Pero ahora... lo que ha pasado en los últimos dos años es diferente. Más calculado, más organizado.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"財団の不正は10年前に理事長が始めた。でも今…ここ2年で起きたことは違う。もっと緻密で、もっと組織的。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"La corruption de la fondation a commencé avec le président il y a dix ans. Mais maintenant... ce qui s'est passé ces deux dernières années est différent. Plus calculé, plus organisé.\\\""
            }
        }
    },
    "day4_night_yuna_seoyeon_intro_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"…더 치밀하다고? 누가?\""
            },
            "en": {
                "name": "Me",
                "text": "\"...More calculated? Who?\""
            },
            "es": {
                "name": "Yo",
                "text": "\"...¿Más calculado? ¿Quién?\""
            },
            "ja": {
                "name": "僕",
                "text": "\"…もっと緻密って？誰が？\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"...Plus calculé ? Par qui ?\\\""
            }
        }
    },
    "day4_night_yuna_seoyeon_reveal": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…서연이야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Seoyeon.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Seoyeon.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…ソヨンだよ。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Seoyeon.\\\""
            }
        }
    },
    "day4_night_yuna_seoyeon_reveal_2": {
        "background": "assets/images/background/school_basement.png",
        "character": null,
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*심장이 멎는 것 같았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*It felt like my heart stopped.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sentí como si mi corazón se detuviera.*"
            },
            "ja": {
                "name": "僕",
                "text": "*心臓が止まりそうだった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai eu l'impression que mon cœur s'est arrêté.*"
            }
        }
    },
    "day4_night_yuna_seoyeon_reveal_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"…서연이? 우리 반 서연이? 그게 무슨—\""
            },
            "en": {
                "name": "Me",
                "text": "\"...Seoyeon? Seoyeon from our class? What are you—\""
            },
            "es": {
                "name": "Yo",
                "text": "\"...¿Seoyeon? ¿La Seoyeon de nuestra clase? ¿Qué estás—\""
            },
            "ja": {
                "name": "僕",
                "text": "\"…ソヨン？うちのクラスのソヨン？それってどういう—\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"...Seoyeon ? La Seoyeon de notre classe ? Qu'est-ce que tu—\\\""
            }
        }
    },
    "day4_night_yuna_seoyeon_reveal_4": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_5",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"서연은 이사장 손녀야. 이 학교 재단 '성진학원' 이사장… 성진그룹 회장의 외손녀.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Seoyeon is the chairman's granddaughter. The chairman of this school's foundation, 'Sungjin Academy'... the granddaughter of the Sungjin Group chairman.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Seoyeon es la nieta del presidente. El presidente de la fundación de esta escuela, 'Academia Sungjin'... la nieta del presidente del Grupo Sungjin.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"ソヨンは理事長の孫娘。この学校の財団『聖進学園』の理事長…聖進グループ会長の孫娘。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Seoyeon est la petite-fille du président. Le président de la fondation de cette école, 'l'Académie Sungjin'... la petite-fille du président du Groupe Sungjin.\\\""
            }
        }
    },
    "day4_night_yuna_seoyeon_reveal_5": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*머릿속이 하얘졌다. 서연이… 항상 밝게 웃던 그 애가. 그 호기심 가득한 눈이. 이사장 손녀?*"
            },
            "en": {
                "name": "Me",
                "text": "*My mind went blank. Seoyeon... that girl who always smiled so brightly. Those curious eyes. The chairman's granddaughter?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mi mente se quedó en blanco. Seoyeon... esa chica que siempre sonreía tan brillantemente. Esos ojos curiosos. ¿La nieta del presidente?*"
            },
            "ja": {
                "name": "僕",
                "text": "*頭の中が真っ白になった。ソヨンが…いつも明るく笑ってたあの子が。あの好奇心溢れる目が。理事長の孫娘？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mon esprit s'est vidé. Seoyeon... cette fille qui souriait toujours si joyeusement. Ces yeux curieux. La petite-fille du président ?*"
            }
        }
    },
    "day4_night_yuna_seoyeon_reveal_6": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_7",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"학생회비 유용, 장학금 사기 수급, 교내 상벌 조작… 최근 2년간 일어난 일들, 서연이가 재단을 등에 업고 직접 설계한 거야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Misuse of student council funds, fraudulent scholarship applications, manipulation of school disciplinary records... everything that happened in the last two years, Seoyeon designed it herself, with the foundation backing her.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Mal uso de los fondos del consejo estudiantil, solicitudes de becas fraudulentas, manipulación de registros disciplinarios escolares... todo lo que sucedió en los últimos dos años, Seoyeon lo diseñó ella misma, respaldada por la fundación.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"生徒会費の流用、奨学金の不正受給、校内の賞罰操作…ここ2年で起きたこと、ソヨンが財団を後ろ盾にして自分で設計したんだ。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Détournement des fonds du conseil des élèves, demandes de bourses frauduleuses, manipulation des dossiers disciplinaires... tout ce qui s'est passé ces deux dernières années, Seoyeon l'a orchestré elle-même, avec le soutien de la fondation.\\\""
            }
        }
    },
    "day4_night_yuna_seoyeon_reveal_7": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_8",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"…믿기지 않아. 서연이가 그럴 애가 아니잖아.\""
            },
            "en": {
                "name": "Me",
                "text": "\"...I can't believe it. Seoyeon isn't that kind of person.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"...No puedo creerlo. Seoyeon no es ese tipo de persona.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"…信じられない。ソヨンがそんな子じゃないだろ。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"...Je n'arrive pas à y croire. Seoyeon n'est pas ce genre de personne.\\\""
            }
        }
    },
    "day4_night_yuna_seoyeon_reveal_8": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_9",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…나도 그렇게 생각했어. 처음엔. 근데 이 서류들 봐.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I thought the same thing. At first. But look at these documents.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Yo pensaba lo mismo. Al principio. Pero mira estos documentos.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…私もそう思ってた。最初は。でもこの書類を見て。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...J'ai pensé la même chose. Au début. Mais regarde ces documents.\\\""
            }
        }
    },
    "day4_night_yuna_seoyeon_reveal_9": {
        "background": "assets/images/background/school_basement.png",
        "character": null,
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_10",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 서류 한 뭉치를 건넸다. 학생회 결산 보고서, 장학금 선발 명단, 교내 징계위원회 회의록… 모든 서류에 서연의 같은 서명이 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna handed me a stack of documents. Student council financial reports, scholarship selection lists, school disciplinary committee meeting minutes... Every document had the Seoyeon's same signature.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna me entregó un montón de documentos. Informes financieros del consejo estudiantil, listas de selección de becas, actas de reuniones del comité disciplinario escolar... Cada documento tenía la Seoyeon's misma firma.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナが書類の束を渡してきた。生徒会の決算報告書、奨学金選考名簿、校内懲戒委員会の議事録…すべての書類に同じサインがあった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna m'a tendu une pile de documents. Rapports financiers du conseil des élèves, listes de sélection de bourses, procès-verbaux du comité disciplinaire... Chaque document portait la même signature de Seoyeon.*"
            }
        }
    },
    "day4_night_yuna_seoyeon_reveal_10": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_11",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"서연이는 학생회장 자리를 이용해서 돈 흐름을 통제했어. 표면적으로는 완벽한 학생이면서, 뒤에서는 재단이 하라는 대로 움직인 거야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Seoyeon used her position as student council president to control the flow of money. On the surface, a perfect student — behind the scenes, doing exactly what the foundation told her to.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Seoyeon usó su posición como presidenta del consejo estudiantil para controlar el flujo de dinero. En la superficie, una estudiante perfecta — entre bastidores, haciendo exactamente lo que la fundación le decía.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"ソヨンは生徒会長の立場を使って金の流れを操った。表向きは完璧な生徒でありながら、裏では財団の言いなりになって動いていたんだ。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Seoyeon a utilisé son poste de présidente du conseil des élèves pour contrôler les flux d'argent. En apparence, une élève parfaite — dans l'ombre, exécutant exactement ce que la fondation lui dictait.\\\""
            }
        }
    },
    "day4_night_yuna_seoyeon_reveal_11": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_12",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*손에 쥔 서류가 떨렸다. 서연의 웃는 얼굴이 머릿속에 스쳤다. 그 자연스러운 미소가, 그 환한 눈빛이… 전부 연기였던 걸까.*"
            },
            "en": {
                "name": "Me",
                "text": "*The documents in my hands trembled. Seoyeon's smiling face flashed through my mind. That natural smile, those bright eyes... was all of it an act?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Los documentos en mis manos temblaron. La cara sonriente de Seoyeon cruzó por mi mente. Esa sonrisa natural, esos ojos brillantes... ¿todo era una actuación?*"
            },
            "ja": {
                "name": "僕",
                "text": "*手に持った書類が震えた。ソヨンの笑顔が脳裏をよぎった。あの自然な笑み、あの明るい目…全部演技だったのか。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Les documents tremblaient entre mes mains. Le visage souriant de Seoyeon m'est revenu en mémoire. Ce sourire naturel, ces yeux brillants... tout cela n'était-il qu'une comédie ?*"
            }
        }
    },
    "day4_night_yuna_seoyeon_reveal_12": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_choice",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…서연이가 나쁜 사람인지, 아닌지는 나도 몰라. 태어날 때부터 그 구조 안에 있었던 거니까. 근데 그게 면죄부가 되진 않아. 피해를 본 사람들이 실제로 있으니까.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Whether Seoyeon is a bad person or not, I don't know. She's been inside that system since birth. But that doesn't excuse it. Because there are real people who were hurt.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Si Seoyeon es una mala persona o no, no lo sé. Ha estado dentro de ese sistema desde que nació. Pero eso no lo excusa. Porque hay personas reales que fueron lastimadas.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…ソヨンが悪い人間かどうか、私にもわからない。生まれた時からその構造の中にいたんだから。でもそれが免罪符にはならない。実際に被害を受けた人たちがいるから。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Que Seoyeon soit une mauvaise personne ou non, je ne sais pas. Elle est dans ce système depuis sa naissance. Mais ça ne l'excuse pas. Parce qu'il y a de vraies victimes.\\\""
            }
        }
    },
    "day4_night_yuna_seoyeon_choice": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_yuna_seoyeon_doubt",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_night_yuna_seoyeon_accept",
                "stats": {
                    "Yuna": {
                        "affinity": 8
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이 사실을 받아들일 수가 없었다.*",
                "choices": [
                    "\"…서연이한테 직접 물어보고 싶어.\"",
                    "\"…알겠어. 증거가 있으니까. 진행하자.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*I couldn't accept this.*",
                "choices": [
                    "\"...I want to ask Seoyeon directly.\"",
                    "\"...Okay. There's evidence. Let's move forward.\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*No podía aceptar esto.*",
                "choices": [
                    "\"...Quiero preguntarle directamente a Seoyeon.\"",
                    "\"...Entendido. Hay pruebas. Sigamos adelante.\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*この事実を受け入れられなかった。*",
                "choices": [
                    "\"…ソヨンに直接聞いてみたい。\"",
                    "\"…わかった。証拠があるんだから。進めよう。\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Je ne pouvais pas accepter ça.*",
                "choices": [
                    "\\\"...Je veux le demander directement à Seoyeon.\\\"",
                    "\\\"...D'accord. Il y a des preuves. Allons de l'avant.\\\""
                ]
            }
        }
    },
    "day4_night_yuna_seoyeon_doubt": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_doubt_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…그건 안 돼. 아직 너무 위험해. 서연이가 알아채는 순간 증거가 사라질 수 있어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...That's not possible. It's still too dangerous. The moment Seoyeon realizes, the evidence could disappear.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Eso no es posible. Todavía es demasiado peligroso. En el momento en que Seoyeon se dé cuenta, las pruebas podrían desaparecer.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…それはダメ。まだ危険すぎる。ソヨンが気づいた瞬間、証拠が消えるかもしれない。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...C'est impossible. C'est encore trop dangereux. Dès que Seoyeon s'en rendra compte, les preuves pourraient disparaître.\\\""
            }
        }
    },
    "day4_night_yuna_seoyeon_doubt_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_bridge",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그 말이 맞다는 걸 알면서도… 쉽게 받아들여지지 않았다. 서연이 얼굴이 계속 눈앞에 아른거렸다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I knew she was right... but I couldn't easily accept it. Seoyeon's face kept floating before my eyes.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sabía que tenía razón... pero no podía aceptarlo fácilmente. La cara de Seoyeon seguía flotando ante mis ojos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*その言葉が正しいとわかっていながら…すんなり受け入れられなかった。ソヨンの顔がずっと目の前にちらついていた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je savais qu'elle avait raison... mais je ne pouvais pas l'accepter facilement. Le visage de Seoyeon ne cessait d'apparaître devant mes yeux.*"
            }
        }
    },
    "day4_night_yuna_seoyeon_accept": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_bridge",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…고마워. 믿어줘서.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Thank you. For believing me.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Gracias. Por creerme.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…ありがとう。信じてくれて。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Merci. De m'avoir crue.\\\""
            }
        }
    },
    "day4_night_yuna_seoyeon_bridge": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resemblance",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*지하실의 냉기가 뼛속까지 스몄다. 서연. 재단. 선배의 죽음. 벽의 균열. 모든 것이 하나로 연결되고 있었다. 그리고 유나는 이걸 혼자 감당해 온 거다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The cold of the basement seeped into my bones. Seoyeon. The foundation. The senior's death. The crack in the wall. Everything was connecting into one. And Yuna had been carrying all of this alone.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El frío del sótano se me metió en los huesos. Seoyeon. La fundación. La muerte del senpai. La grieta en la pared. Todo se estaba conectando en uno. Y Yuna había estado cargando todo esto sola.*"
            },
            "ja": {
                "name": "僕",
                "text": "*地下室の冷気が骨の髄まで染み込んだ。ソヨン。財団。先輩の死。壁の亀裂。すべてがひとつに繋がっていた。そしてユナはこれをひとりで抱えてきたんだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le froid du sous-sol me transperçait les os. Seoyeon. La fondation. La mort de l'aîné. La fissure dans le mur. Tout se connectait. Et Yuna avait porté tout cela seule.*"
            }
        }
    },
    "day4_night_yuna_resemblance": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resemblance_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…사실, 너한테 말해야 할 게 하나 더 있어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Actually, there's one more thing I need to tell you.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...En realidad, hay una cosa más que necesito decirte.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…実は、もう一つ言わなきゃいけないことがある。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...En fait, il y a encore quelque chose que je dois te dire.\\\""
            }
        }
    },
    "day4_night_yuna_resemblance_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_resemblance_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"처음 네가 전학 왔을 때… 나 숨이 멎을 뻔했어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"When you first transferred here... I almost stopped breathing.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Cuando transferiste aquí por primera vez... casi dejé de respirar.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"あんたが最初に転校してきた時…息が止まりそうだった。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Quand tu as été transféré ici... j'ai failli arrêter de respirer.\\\""
            }
        }
    },
    "day4_night_yuna_resemblance_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_resemblance_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"…왜?\""
            },
            "en": {
                "name": "Me",
                "text": "\"...Why?\""
            },
            "es": {
                "name": "Yo",
                "text": "\"...¿Por qué?\""
            },
            "ja": {
                "name": "僕",
                "text": "\"…なんで？\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"...Pourquoi ?\\\""
            }
        }
    },
    "day4_night_yuna_resemblance_4": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_resemblance_5",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"너… 준호 선배랑 닮았거든. 눈빛이, 분위기가. 불의를 보면 가만히 못 있는 그런 느낌까지.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"You... look like Junho. Your eyes, your aura. Even that feeling of never being able to stand by when something's wrong.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Tú... te pareces a Junho. Tu mirada, tu aura. Hasta esa sensación de no poder quedarte quieto cuando algo está mal.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"あんた…ジュノ先輩に似てるんだよ。目つきとか、雰囲気とか。不正を見ると黙ってられない感じまで。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Tu... ressembles à Junho. Tes yeux, ton aura. Même cette impression de ne jamais pouvoir rester les bras croisés face à l'injustice.\\\""
            }
        }
    },
    "day4_night_yuna_resemblance_5": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_resemblance_6",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…그래서 처음엔 무서웠어. 또 같은 일이 반복될까 봐. 너까지 위험해질까 봐.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...So at first, I was scared. Afraid the same thing would happen again. Afraid you'd be in danger too.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Así que al principio, tenía miedo. Miedo de que lo mismo volviera a pasar. Miedo de que tú también estuvieras en peligro.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…だから最初は怖かった。また同じことが繰り返されるんじゃないかって。あんたまで危険になるんじゃないかって。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Alors au début, j'avais peur. Peur que la même chose se reproduise. Peur que tu sois en danger toi aussi.\\\""
            }
        }
    },
    "day4_night_yuna_resemblance_6": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resemblance_7",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"그런데 동시에… 네가 옆에 있으면, 선배가 못 다 한 일을 끝낼 수 있을 것 같았어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"But at the same time... with you by my side, I felt like I could finish what he couldn't.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Pero al mismo tiempo... contigo a mi lado, sentí que podía terminar lo que él no pudo.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"でも同時に…あんたがそばにいれば、先輩がやり残したことを終わらせられる気がした。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Mais en même temps... avec toi à mes côtés, j'avais l'impression de pouvoir finir ce qu'il n'avait pas pu accomplir.\\\""
            }
        }
    },
    "day4_night_yuna_resemblance_7": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_critical_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그래서였구나. 유나가 처음부터 나에게 관심을 보인 이유. '특별한 빛'이라고 했던 것도… 선배의 그림자였던 걸까.*"
            },
            "en": {
                "name": "Me",
                "text": "*So that's why. The reason Yuna showed interest in me from the start. When she called me a 'special light'... was I just the senior's shadow?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Así que era por eso. La razón por la que Yuna mostró interés en mí desde el principio. Cuando me llamó una 'luz especial'... ¿era solo la sombra del senpai?*"
            },
            "ja": {
                "name": "僕",
                "text": "*そういうことだったのか。ユナが最初から僕に関心を示した理由。「特別な光」と言ったのも…先輩の影だったのか。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Alors c'était ça. La raison pour laquelle Yuna s'est intéressée à moi dès le début. Quand elle m'a appelé une 'lumière spéciale'... n'étais-je que l'ombre de cet aîné ?*"
            }
        }
    },
    "day4_night_yuna_critical_choice": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_yuna_moved",
                "stats": {
                    "Yuna": {
                        "affinity": 20
                    }
                },
                "setFlag": "day4_yuna_ally"
            },
            {
                "next": "day4_night_yuna_touched",
                "stats": {
                    "Yuna": {
                        "affinity": 15
                    }
                },
                "setFlag": "day4_yuna_ally"
            },
            {
                "next": "day4_night_yuna_confronted",
                "stats": {
                    "Yuna": {
                        "affinity": -10
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*……뭐라고 해야 하지.*",
                "choices": [
                    "\"나는 그 선배가 아니야. 나는 나야. 그래도… 같이 싸울게.\"",
                    "\"선배의 대역이어도 괜찮아. 유나한테 필요한 사람이 되고 싶어.\"",
                    "\"…그래서 나한테 접근한 거야? 선배 대신?\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*...What should I say?*",
                "choices": [
                    "\"I'm not him. I'm me. But still... I'll fight alongside you.\"",
                    "\"Even if I'm his stand-in, that's fine. I want to be the person you need.\"",
                    "\"...So you approached me because of him? As a replacement?\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*...¿Qué debería decir?*",
                "choices": [
                    "\"No soy él. Soy yo. Pero aun así... lucharé a tu lado.\"",
                    "\"Aunque sea su reemplazo, está bien. Quiero ser la persona que necesitas.\"",
                    "\"...¿Entonces te acercaste a mí por él? ¿Como un sustituto?\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*……なんて言えばいいんだ。*",
                "choices": [
                    "\"僕はあの先輩じゃない。僕は僕だ。でも…一緒に戦うよ。\"",
                    "\"先輩の代役でもいい。ユナに必要な人になりたい。\"",
                    "\"…だから僕に近づいたの？先輩の代わりとして？\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*...Que devrais-je dire ?*",
                "choices": [
                    "\\\"Je ne suis pas lui. Je suis moi. Mais quand même... je me battrai à tes côtés.\\\"",
                    "\\\"Même si je ne suis que son remplaçant, ça me va. Je veux être la personne dont tu as besoin.\\\"",
                    "\\\"...Alors tu t'es rapprochée de moi à cause de lui ? Comme un remplaçant ?\\\""
                ]
            }
        }
    },
    "day4_night_yuna_moved": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_moved_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…… 알아. 너는 너야. 처음엔 선배의 그림자를 쫓았을지도 몰라. 그런데 지금은……\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I know. You are you. Maybe at first I was chasing the senior's shadow. But now...\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Lo sé. Tú eres tú. Quizás al principio perseguía la sombra del senpai. Pero ahora...\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"……わかってる。あんたはあんただ。最初は先輩の影を追ってたのかもしれない。でも今は……\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Je sais. Tu es toi. Peut-être qu'au début je poursuivais l'ombre de cet aîné. Mais maintenant...\\\""
            }
        }
    },
    "day4_night_yuna_moved_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_resolve",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……지금은 네가 보여. 너만.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Now I see you. Only you.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Ahora te veo a ti. Solo a ti.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"……今はあんたが見える。あんただけが。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Maintenant je ne vois que toi. Toi seul.\\\""
            }
        }
    },
    "day4_night_yuna_touched": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_touched_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"바보… 그런 말 하면 어떡해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Idiot... you can't just say things like that.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Tonto... no puedes decir cosas así.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"バカ…そんなこと言われたら困る。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Idiot... tu ne peux pas dire des choses comme ça.\\\""
            }
        }
    },
    "day4_night_yuna_touched_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_resolve",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"대역 같은 거 아니야. 너는… 이미 너 자신으로 충분해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"You're not a stand-in. You... are already more than enough, just as yourself.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"No eres un sustituto. Tú... ya eres más que suficiente, tal como eres.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"代役なんかじゃない。あんたは…あんた自身で十分だよ。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Tu n'es pas un remplaçant. Tu... es déjà plus que suffisant, tel que tu es.\\\""
            }
        }
    },
    "day4_night_yuna_confronted": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_confronted_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"……\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...\\\""
            }
        }
    },
    "day4_night_yuna_confronted_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_confronted_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…부정 안 할게. 처음엔 그랬어. 그런데… 함께 시간을 보내면서 바뀌었어. 이건 진심이야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I won't deny it. At first, that's how it was. But... as we spent time together, that changed. This is real.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...No lo negaré. Al principio, así era. Pero... mientras pasábamos tiempo juntos, eso cambió. Esto es real.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…否定しない。最初はそうだった。でも…一緒に過ごすうちに変わった。これは本気。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Je ne le nierai pas. Au début, c'était comme ça. Mais... au fil du temps passé ensemble, ça a changé. C'est réel.\\\""
            }
        }
    },
    "day4_night_yuna_confronted_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "setFlag": "day4_yuna_ally",
        "next": "day4_night_yuna_resolve",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…믿어주지 않아도, 증명해 볼게.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Even if you don't believe me, I'll prove it.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Aunque no me creas, te lo demostraré.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…信じてくれなくても、証明してみせる。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Même si tu ne me crois pas, je te le prouverai.\\\""
            }
        }
    },
    "day4_night_yuna_resolve": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resolve_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…이 서류들, 사본을 떠 놨어. 원본은 여기 그대로 두고.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I made copies of these documents. The originals stay here.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Hice copias de estos documentos. Los originales se quedan aquí.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…この書類、コピーを取ってある。原本はここにそのまま置いて。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...J'ai fait des copies de ces documents. Les originaux restent ici.\\\""
            }
        }
    },
    "day4_night_yuna_resolve_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resolve_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"선배가 못 다 한 일… 이번엔 끝내고 싶어. 언론과 교육청에 제보할 거야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"What the senior couldn't finish... I want to see it through this time. I'm reporting it to the Press and Board of Education.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Lo que el senpai no pudo terminar... esta vez quiero completarlo. Voy a denunciarlo a la Press and Junta de Educación.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"先輩がやり残したこと…今度こそ終わらせたい。教育委員会に通報する。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Ce que l'aîné n'a pas pu accomplir... je veux le mener à bien cette fois. Je vais le signaler à la presse et au Rectorat.\\\""
            }
        }
    },
    "day4_night_yuna_resolve_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resolve_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 눈에 결의가 서려 있다. 이건 단순한 호기심이 아니었다. 1년간 혼자 진실을 파헤쳐 온 거다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Determination filled Yuna's eyes. This wasn't mere curiosity. She'd been uncovering the truth alone for an entire year.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Determinación llenaba los ojos de Yuna. Esto no era simple curiosidad. Había estado descubriendo la verdad sola durante un año entero.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナの目に決意が宿っている。これは単なる好奇心じゃなかった。1年間ひとりで真実を掘り起こしてきたんだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La détermination emplissait les yeux de Yuna. Ce n'était pas de la simple curiosité. Elle avait enquêté seule sur la vérité pendant une année entière.*"
            }
        }
    },
    "day4_night_yuna_resolve_4": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resolve_5",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…근데 위험할 수 있어. 재단이 가만히 있진 않을 거야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...But it could be dangerous. The foundation won't sit still.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Pero podría ser peligroso. La fundación no se quedará de brazos cruzados.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…でも危険かもしれない。財団が黙ってるわけない。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Mais ça pourrait être dangereux. La fondation ne va pas rester les bras croisés.\\\""
            }
        }
    },
    "day4_night_yuna_resolve_5": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resolve_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"…같이 하자. 혼자 짊어지지 마.\""
            },
            "en": {
                "name": "Me",
                "text": "\"...Let's do this together. Don't carry it all alone.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"...Hagámoslo juntos. No lo cargues sola.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"…一緒にやろう。ひとりで抱え込むなよ。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"...Faisons-le ensemble. Ne porte pas tout ça toute seule.\\\""
            }
        }
    },
    "day4_night_yuna_resolve_end": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "setFlag": "day4_yuna_truth_revealed",
        "next": "day4_night_yuna_exit",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……응.\""
            },
            "en": {
                "name": "Yuna",
                "text": "Yuna gently takes your hand, her touch no longer cold, but warm and seeking comfort."
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Sí.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"……うん。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "Yuna prend doucement ta main ; son toucher n'est plus froid, mais chaud, en quête de réconfort."
            }
        }
    },
    "day4_night_yuna_exit": {
        "character": "assets/images/characters/yuna_smile.png",
        "background": "assets/images/background/street.png",
        "night": true,
        "bgm": "night1.mp3",
        "next": "day4_night_yuna_exit_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학교를 빠져나왔다. 찬 밤바람이 불었지만, 옆에 유나가 있어서 덜 추웠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We slipped out of the school. The cold night breeze blew, but it felt less cold with Yuna beside me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Salimos de la escuela. La brisa fría de la noche soplaba, pero con Yuna a mi lado se sentía menos frío.*"
            },
            "ja": {
                "name": "僕",
                "text": "*学校を抜け出した。冷たい夜風が吹いていたけど、隣にユナがいるから寒くなかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Nous nous sommes faufilés hors de l'école. La brise froide de la nuit soufflait, mais elle semblait moins glaciale avec Yuna à mes côtés.*"
            }
        }
    },
    "day4_night_yuna_exit_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_exit_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…오늘, 고마웠어. 혼자 안고 있던 걸 누군가한테 말한 건 처음이야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Thank you for today. It's the first time I've told anyone what I've been carrying alone.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Gracias por hoy. Es la primera vez que le cuento a alguien lo que he estado cargando sola.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…今日はありがとう。ひとりで抱えてたことを誰かに話したの、初めて。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Merci pour aujourd'hui. C'est la première fois que je confie à quelqu'un ce que je portais seule.\\\""
            }
        }
    },
    "day4_night_yuna_exit_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "day4_night_yuna_exit_choice",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…좀 무거운 하루였지?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...It was a heavy day, wasn't it?\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Fue un día pesado, ¿no?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…重い一日だったでしょ？\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...C'était une journée lourde, non ?\\\""
            }
        }
    },
    "day4_night_yuna_exit_choice": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_yuna_exit_warm",
                "stats": {
                    "Yuna": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day4_night_yuna_exit_promise",
                "stats": {
                    "Yuna": {
                        "affinity": 8
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*밤하늘 아래 유나가 어색하게 웃고 있다.*",
                "choices": [
                    "\"아니. 유나를 더 알게 된 거니까.\"",
                    "\"다음엔 진짜 데이트 하자. 카페 같은 데서.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Under the night sky, Yuna smiles awkwardly.*",
                "choices": [
                    "\"No. Because I got to know you better.\"",
                    "\"Next time, let's go on a real date. Somewhere like a café.\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Bajo el cielo nocturno, Yuna sonríe torpemente.*",
                "choices": [
                    "\"No. Porque pude conocerte mejor.\"",
                    "\"La próxima vez, tengamos una cita de verdad. En un café o algo.\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*夜空の下、ユナがぎこちなく笑っている。*",
                "choices": [
                    "\"ううん。ユナのことをもっと知れたから。\"",
                    "\"次は本当のデートしよう。カフェとかで。\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Sous le ciel nocturne, Yuna sourit maladroitement.*",
                "choices": [
                    "\\\"Non. Parce que j'ai appris à mieux te connaître.\\\"",
                    "\\\"La prochaine fois, allons à un vrai rendez-vous. Dans un café, par exemple.\\\""
                ]
            }
        }
    },
    "day4_night_yuna_exit_warm": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_farewell",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……그런 말, 반칙이야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...That's not fair, saying something like that.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Eso no es justo, decir algo así.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"……そういうこと言うの、反則。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...C'est pas juste de dire un truc pareil.\\\""
            }
        }
    },
    "day4_night_yuna_exit_promise": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "day4_night_yuna_farewell",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…카페. 좋아. 이번엔 내가 골라도 돼?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...A café. I'd like that. Can I pick the place this time?\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Un café. Me gustaría. ¿Puedo elegir el lugar esta vez?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…カフェ。いいね。今度は私が選んでもいい？\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Un café. Ça me plairait. Je peux choisir l'endroit cette fois ?\\\""
            }
        }
    },
    "day4_night_yuna_farewell": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_farewell_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 돌아서려다 멈칫했다. 그리고 내 옷깃을 꽉 쥐었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna stopped as she was about to turn around. And she gripped my collar tightly.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna se detuvo cuando estaba a punto de darse vuelta. Y agarró mi cuello con fuerza.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナが振り返ろうとして立ち止まった。そして僕の襟をぎゅっと掴んだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna s'est arrêtée alors qu'elle allait se retourner. Et elle a agrippé fermement mon col.*"
            }
        }
    },
    "day4_night_yuna_farewell_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_farewell_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"선배처럼 죽게 내버려두지 않아. 널 지키기 위해서라면… 차라리 널 부숴서라도 내 곁에 묶어둘 거야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "I won't let you die like he did. To protect you... I'd rather break you and tie you to my side."
            },
            "es": {
                "name": "Yuna",
                "text": "\"No dejaré que mueras como él. Para protegerte... prefiero romperte y atarte a mi lado.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"先輩みたいに死なせない。あんたを守るためなら…いっそ壊してでも私のそばに縛りつける。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "Je ne te laisserai pas mourir comme lui. Pour te protéger... je préfère te briser et t'enchaîner à moi."
            }
        }
    },
    "day4_night_yuna_farewell_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_home",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"넌 내 거니까. 아무데도 못 가.\""
            },
            "en": {
                "name": "Me",
                "text": "You're mine. You can't go anywhere."
            },
            "es": {
                "name": "Yo",
                "text": "\"Eres mío. No puedes ir a ningún lado.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"あんたは私のものだから。どこにも行かせない。\""
            },
            "fr": {
                "name": "Moi",
                "text": "Tu es à moi. Tu ne peux aller nulle part."
            }
        }
    },
    "day4_night_yuna_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "day4_night_yuna_home_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집에 돌아왔다. 유나의 서늘한 눈빛과 꽉 쥐었던 손길이 잊혀지지 않는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I returned home. Yuna's chilling gaze and tight grip won't leave my mind.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Volví a casa. La mirada fría de Yuna y su agarre firme no salen de mi mente.*"
            },
            "ja": {
                "name": "僕",
                "text": "*家に帰ってきた。ユナのひんやりとした眼差しと、ぎゅっと握られた手の感触が忘れられない。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je suis rentré chez moi. Le regard glaçant de Yuna et sa poigne serrée ne quittent pas mon esprit.*"
            }
        }
    },
    "day4_night_yuna_home_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "fade": true,
        "next": "day4_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그녀가 말한 '지킨다'는 의미가, 어쩌면 내가 생각한 것과 다를지도 모른다는 예감이 들었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I had a feeling that what she meant by 'protecting' might be different from what I thought.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Tuve el presentimiento de que lo que ella quiso decir con 'proteger' podría ser diferente de lo que yo pensaba.*"
            },
            "ja": {
                "name": "僕",
                "text": "*彼女が言った「守る」の意味が、もしかしたら僕が思っていたのとは違うかもしれないという予感がした。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'avais le pressentiment que ce qu'elle entendait par 'protéger' était différent de ce que je pensais.*"
            }
        }
    },
    "day4_night_seoyeon_call": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "bgm": "night1.mp3",
        "next": "day4_night_seoyeon_call_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*밤 9시. 서연에게서 전화가 왔다.*"
            },
            "en": {
                "name": "Me",
                "text": "*9 PM. A call from Seoyeon.*"
            },
            "es": {
                "name": "Yo",
                "text": "*9 PM. Una llamada de Seoyeon.*"
            },
            "ja": {
                "name": "僕",
                "text": "*夜9時。ソヨンから電話が来た。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*21 heures. Un appel de Seoyeon.*"
            }
        }
    },
    "day4_night_seoyeon_call_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "silhouette": true,
        "night": true,
        "next": "day4_night_seoyeon_call_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…저기, 나인데. 바쁘지 않으면… 잠깐 나올 수 있어?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Hey, it's me. If you're not busy... could you come out for a bit?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Hola, soy yo. Si no estás ocupado... ¿podrías salir un momento?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…あの、私だけど。忙しくなければ…ちょっと出てこれる？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"...Salut, c'est moi. Si tu n'es pas occupé... tu pourrais sortir un moment ?\\\""
            }
        }
    },
    "day4_night_seoyeon_call_3": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "silhouette": true,
        "night": true,
        "next": "day4_night_seoyeon_call_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연의 목소리가 평소와 다르다. 웃음기가 없고, 어딘가 떨리는 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon's voice sounds different from usual. No warmth, and it seems like she's trembling.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La voz de Seoyeon suena diferente de lo habitual. Sin calidez, y parece que está temblando.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンの声がいつもと違う。明るさがなくて、どこか震えているようだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La voix de Seoyeon est différente de d'habitude. Aucune chaleur, et elle semble trembler.*"
            }
        }
    },
    "day4_night_seoyeon_call_4": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "silhouette": true,
        "night": true,
        "next": "day4_night_seoyeon_park",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…우리 집 앞 공원 알지? 거기서 기다릴게.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...You know the park near my house, right? I'll wait there.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...¿Conoces el parque cerca de mi casa? Te espero ahí.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…うちの前の公園わかるよね？そこで待ってるね。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"...Tu connais le parc près de chez moi, non ? Je t'attends là-bas.\\\""
            }
        }
    },
    "day4_night_seoyeon_park": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_park_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*공원에 도착했다. 벤치에 서연이 혼자 앉아 있었다. 평소의 단정한 교복 대신 편한 옷차림이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I arrived at the park. Seoyeon was sitting alone on a bench. Instead of her usual neat uniform, she wore casual clothes.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Llegué al parque. Seoyeon estaba sentada sola en un banco. En vez de su uniforme pulcro de siempre, vestía ropa casual.*"
            },
            "ja": {
                "name": "僕",
                "text": "*公園に着いた。ベンチにソヨンがひとりで座っていた。いつものきちんとした制服じゃなくて、楽な服装だ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je suis arrivé au parc. Seoyeon était assise seule sur un banc. Au lieu de son uniforme soigné habituel, elle portait des vêtements décontractés.*"
            }
        }
    },
    "day4_night_seoyeon_park_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_park_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…왔구나. 갑자기 불러서 미안해.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...You came. Sorry for calling you out so suddenly.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Viniste. Perdón por llamarte tan de repente.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…来てくれたんだ。急に呼んでごめんね。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"...Tu es venu. Pardon de t'avoir appelé si soudainement.\\\""
            }
        }
    },
    "day4_night_seoyeon_park_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_seoyeon_concern",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_night_seoyeon_silent_sit",
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연의 눈이 빨갛다. …울었던 건가?*",
                "choices": [
                    "\"무슨 일이야? 괜찮아?\"",
                    "아무 말 없이 옆에 앉는다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon's eyes are red. ...Was she crying?*",
                "choices": [
                    "\"What happened? Are you okay?\"",
                    "Sit next to her without saying anything"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Los ojos de Seoyeon están rojos. ...¿Estaba llorando?*",
                "choices": [
                    "\"¿Qué pasó? ¿Estás bien?\"",
                    "Sentarse a su lado sin decir nada"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンの目が赤い。…泣いてたのか？*",
                "choices": [
                    "\"何かあったの？大丈夫？\"",
                    "何も言わずに隣に座る"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Les yeux de Seoyeon sont rouges. ...Elle pleurait ?*",
                "choices": [
                    "\\\"Qu'est-ce qui s'est passé ? Ça va ?\\\"",
                    "S'asseoir à côté d'elle sans rien dire"
                ]
            }
        }
    },
    "day4_night_seoyeon_concern": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_open",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"……괜찮다고 하면 거짓말이겠지.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...If I said I was fine, that would be a lie.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Si dijera que estoy bien, sería mentira.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"……大丈夫って言ったら、嘘になるよね。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"...Si je disais que ça va, ce serait un mensonge.\\\""
            }
        }
    },
    "day4_night_seoyeon_silent_sit": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_open",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…… 고마워. 그냥 옆에 있어 주는 거, 제일 좋아.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Thank you. Just sitting next to me... that's the best thing.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Gracias. Solo estar a mi lado... es lo mejor.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"……ありがとう。ただそばにいてくれるの、一番嬉しい。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"...Merci. Juste être assis à côté de moi... c'est ce qu'il y a de mieux.\\\""
            }
        }
    },
    "day4_night_seoyeon_open": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_open_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…오늘 엄마한테 전화가 왔어. 아빠랑 또 싸웠대.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Mom called today. She and Dad had another fight.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Mamá llamó hoy. Ella y papá tuvieron otra pelea.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…今日、お母さんから電話があって。お父さんとまた喧嘩したって。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"...Maman a appelé aujourd'hui. Elle et papa se sont encore disputés.\\\""
            }
        }
    },
    "day4_night_seoyeon_open_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_open_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"우리 집… 겉으로는 멀쩡해 보이지? 넓은 집, 좋은 차, 학생회장 딸.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Our house... looks perfect from the outside, right? Big house, nice car, student council president daughter.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Nuestra casa... se ve perfecta desde afuera, ¿verdad? Casa grande, carro bonito, hija presidenta del consejo estudiantil.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"うちの家…外からは完璧に見えるでしょ？大きな家、いい車、生徒会長の娘。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"Notre maison... semble parfaite de l'extérieur, non ? Grande maison, belle voiture, fille présidente du conseil des élèves.\\\""
            }
        }
    },
    "day4_night_seoyeon_open_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_open_4",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"근데 사실… 엄마 아빠는 1년째 같은 지붕 아래서 남남이야. 이혼 서류만 안 냈을 뿐.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"But actually... Mom and Dad haven't lived under the same roof for a year now. They just haven't filed for divorce yet.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Pero en realidad... mamá y papá llevan un año viviendo como extraños bajo el mismo techo. Solo no han firmado el divorcio.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"でも実は…お母さんとお父さん、1年も同じ屋根の下で他人同士なの。離婚届を出してないだけ。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"Mais en réalité... maman et papa ne vivent plus sous le même toit depuis un an. Ils n'ont juste pas encore demandé le divorce.\\\""
            }
        }
    },
    "day4_night_seoyeon_open_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_open_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"……서연.\""
            },
            "en": {
                "name": "Me",
                "text": "\"...Seoyeon.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"...Seoyeon.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"……ソヨン。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"...Seoyeon.\\\""
            }
        }
    },
    "day4_night_seoyeon_open_5": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_open_6",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"엄마가 말했어. '너라도 완벽해야 이 집이 유지된다'고. 그래서… 학생회장도, 성적도, 전부 놓을 수가 없었어.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Mom said, 'At least you need to be perfect for this family to hold together.' So... student council, grades, I couldn't let go of any of it.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Mamá dijo: 'Al menos tú tienes que ser perfecta para que esta familia se mantenga.' Así que... el consejo estudiantil, las calificaciones, no podía soltar nada.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"お母さんに言われたの。『あなただけでも完璧じゃないとこの家は持たない』って。だから…生徒会長も、成績も、全部手放せなかった。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"Maman a dit : 'Au moins, toi, tu dois être parfaite pour que cette famille tienne.' Alors... le conseil des élèves, les notes, je ne pouvais rien lâcher.\\\""
            }
        }
    },
    "day4_night_seoyeon_open_6": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_open_7",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"모두한테 웃어야 했어. '서연이는 항상 밝구나', '서연이는 뭐든 잘하네'. 그 말이… 점점 감옥 같았어.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"I had to smile for everyone. 'Seoyeon is always so bright,' 'Seoyeon is good at everything.' Those words... started to feel like a prison.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Tenía que sonreírle a todos. 'Seoyeon siempre es tan alegre,' 'Seoyeon es buena en todo.' Esas palabras... empezaron a sentirse como una prisión.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"みんなに笑顔でいなきゃいけなかった。『ソヨンはいつも明るいね』、『ソヨンは何でもできるね』。その言葉が…だんだん牢獄みたいだった。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"Je devais sourire pour tout le monde. 'Seoyeon est toujours si radieuse,' 'Seoyeon est bonne en tout.' Ces mots... ont commencé à ressembler à une prison.\\\""
            }
        }
    },
    "day4_night_seoyeon_open_7": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_tear",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"웃는 게 아니라 웃음을 '하고' 있었어. 매일.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"I wasn't smiling—I was 'performing' a smile. Every single day.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"No sonreía—estaba 'actuando' una sonrisa. Todos los días.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"笑ってたんじゃなくて、笑いを『演じて』たの。毎日。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"Je ne souriais pas — je 'jouais' le sourire. Chaque jour.\\\""
            }
        }
    },
    "day4_night_seoyeon_tear": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_tear_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연의 눈에서 눈물이 흘러내렸다. 가로등 불빛에 반짝이는 눈물을 보는 건 처음이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Tears spilled from Seoyeon's eyes. Glistening under the streetlight. It was the first time I'd ever seen her cry.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Lágrimas cayeron de los ojos de Seoyeon. Brillando bajo la luz de la calle. Era la primera vez que la veía llorar.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンの目から涙がこぼれた。街灯の光にきらめく涙を見るのは初めてだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Des larmes ont coulé des yeux de Seoyeon. Scintillant sous le réverbère. C'était la première fois que je la voyais pleurer.*"
            }
        }
    },
    "day4_night_seoyeon_tear_choice": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_seoyeon_hug",
                "stats": {
                    "Seoyeon": {
                        "affinity": 15
                    }
                },
                "setFlag": "day4_hugged_seoyeon"
            },
            {
                "next": "day4_night_seoyeon_pinky",
                "stats": {
                    "Seoyeon": {
                        "affinity": 20
                    }
                },
                "setFlag": "day4_pinky_seoyeon"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이 울고 있다. 처음 보는 모습이다.*",
                "choices": [
                    "서연을 안아준다",
                    "새끼손가락을 내민다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon is crying. I've never seen this side of her.*",
                "choices": [
                    "Hug Seoyeon",
                    "Offer a pinky promise"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon está llorando. Nunca había visto este lado de ella.*",
                "choices": [
                    "Abrazar a Seoyeon",
                    "Ofrecer una promesa de meñique"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンが泣いている。こんな姿、初めて見る。*",
                "choices": [
                    "ソヨンを抱きしめる",
                    "小指を差し出す"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon pleure. Je n'avais jamais vu ce côté d'elle.*",
                "choices": [
                    "Serrer Seoyeon dans ses bras",
                    "Lui proposer une promesse du petit doigt"
                ]
            }
        }
    },
    "day4_night_seoyeon_hug": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_hug_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"……!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...... !\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"……！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"...... !\\\""
            }
        }
    },
    "day4_night_seoyeon_hug_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_hug_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이 내 가슴에 얼굴을 묻었다. 작은 어깨가 떨리고 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon buried her face in my chest. Her small shoulders were trembling.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon enterró su cara en mi pecho. Sus pequeños hombros temblaban.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンが僕の胸に顔を埋めた。小さな肩が震えていた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon a enfoui son visage contre ma poitrine. Ses petites épaules tremblaient.*"
            }
        }
    },
    "day4_night_seoyeon_hug_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_real",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…이렇게 울어본 거, 정말 오랜만이야. 누구 앞에서 우는 건… 처음이고.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...It's been so long since I cried like this. Crying in front of someone... this is the first time.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Hace tanto que no lloraba así. Llorar frente a alguien... es la primera vez.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…こんなに泣いたの、本当に久しぶり。誰かの前で泣くのは…初めて。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"...Ça faisait tellement longtemps que je n'avais pas pleuré comme ça. Pleurer devant quelqu'un... c'est la première fois.\\\""
            }
        }
    },
    "day4_night_seoyeon_pinky": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_pinky_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"약속할게. 서연이 울고 싶을 때, 나한테 울어도 돼.\""
            },
            "en": {
                "name": "Me",
                "text": "\"I promise. Whenever you want to cry, you can cry with me.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Te lo prometo. Cuando quieras llorar, puedes llorar conmigo.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"約束するよ。ソヨンが泣きたい時は、僕の前で泣いていいから。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Je te le promets. Quand tu voudras pleurer, tu pourras pleurer avec moi.\\\""
            }
        }
    },
    "day4_night_seoyeon_pinky_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_pinky_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…… 새끼손가락?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...A pinky promise?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...¿Una promesa de meñique?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"……小指？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"...Une promesse du petit doigt ?\\\""
            }
        }
    },
    "day4_night_seoyeon_pinky_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_pinky_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이 떨리는 손으로 새끼손가락을 걸었다. 그리고 참았던 울음이 터져 나왔다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon locked her trembling pinky with mine. And then the tears she'd been holding back poured out.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon entrelazó su meñique tembloroso con el mío. Y entonces las lágrimas que había contenido se desbordaron.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンが震える手で小指を絡めた。そして我慢していた涙があふれ出した。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon a noué son petit doigt tremblant au mien. Et les larmes qu'elle retenait se sont déversées.*"
            }
        }
    },
    "day4_night_seoyeon_pinky_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_real",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…바보야, 왜 이렇게… 나한테 잘해주는 건데……\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...You fool, why are you... so kind to me...\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Tonto, ¿por qué eres... tan amable conmigo...\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…バカ、なんでこんなに…私に優しくするの……\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"...Idiot, pourquoi tu es... si gentil avec moi...\\\""
            }
        }
    },
    "day4_night_seoyeon_real": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_real_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…사실 오늘 데이트하면서도 무서웠어. 내가 이렇게 행복해도 되나. 이 행복도 곧 무너지는 거 아닌가.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Even during our date today, I was scared. Am I allowed to be this happy? Will this happiness crumble too?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...La verdad es que incluso durante nuestra cita hoy, tenía miedo. ¿Puedo ser tan feliz? ¿Esta felicidad también se derrumbará?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…実は今日のデート中も怖かった。こんなに幸せでいいのかなって。この幸せもすぐ崩れるんじゃないかって。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"...Même pendant notre rendez-vous aujourd'hui, j'avais peur. Ai-je le droit d'être si heureuse ? Est-ce que ce bonheur va s'effondrer aussi ?\\\""
            }
        }
    },
    "day4_night_seoyeon_real_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_real_choice",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"넌… 완벽하지 않은 나도 괜찮아?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Are you... okay with a me that's not perfect?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¿Estás... bien con una yo que no es perfecta?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"完璧じゃない私でも…いいの？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"Tu... acceptes une version de moi qui n'est pas parfaite ?\\\""
            }
        }
    },
    "day4_night_seoyeon_real_choice": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_seoyeon_accept",
                "stats": {
                    "Seoyeon": {
                        "affinity": 20
                    }
                }
            },
            {
                "next": "day4_night_seoyeon_gf",
                "stats": {
                    "Seoyeon": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "day4_night_seoyeon_honest",
                "stats": {
                    "Seoyeon": {
                        "affinity": 10
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이 떨리는 눈으로 나를 올려다보고 있다.*",
                "choices": [
                    "\"완벽한 서연보다, 지금 이 서연이 더 좋아.\"",
                    "\"학생회장 서연이 아니라, 그냥 서연이가 내 여자친구야.\"",
                    "\"솔직히 완벽한 줄만 알았어. 하지만… 이런 모습도 보여줘서 고마워.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon is looking up at me with trembling eyes.*",
                "choices": [
                    "\"I like the Seoyeon right now more than the perfect one.\"",
                    "\"Not the class president Seoyeon—just Seoyeon is my girlfriend.\"",
                    "\"Honestly, I always thought you were perfect. But... thank you for showing me this side too.\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon me mira con ojos temblorosos.*",
                "choices": [
                    "\"Me gusta más la Seoyeon de ahora que la perfecta.\"",
                    "\"No la presidenta Seoyeon—solo Seoyeon es mi novia.\"",
                    "\"Sinceramente, siempre pensé que eras perfecta. Pero... gracias por mostrarme este lado también.\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンが震える目で僕を見上げている。*",
                "choices": [
                    "\"完璧なソヨンより、今のソヨンの方が好きだよ。\"",
                    "\"生徒会長のソヨンじゃなくて、ただのソヨンが僕の彼女だよ。\"",
                    "\"正直、完璧だと思ってた。でも…こんな姿も見せてくれてありがとう。\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon me regarde avec des yeux tremblants.*",
                "choices": [
                    "\\\"J'aime la Seoyeon d'en ce moment plus que la parfaite.\\\"",
                    "\\\"Pas la Seoyeon présidente du conseil — juste Seoyeon est ma petite amie.\\\"",
                    "\\\"Honnêtement, je t'ai toujours trouvée parfaite. Mais... merci de me montrer aussi ce côté de toi.\\\""
                ]
            }
        }
    },
    "day4_night_seoyeon_accept": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_accept_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"……정말?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Really?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...¿De verdad?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"……本当に？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"...Vraiment ?\\\""
            }
        }
    },
    "day4_night_seoyeon_accept_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…그 말, 평생 잊지 않을 거야. 잊으면… 약속이니까.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...I'll never forget those words. If I do... we made a pinky promise, after all.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Nunca olvidaré esas palabras. Si lo hago... hicimos una promesa de meñique, después de todo.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…その言葉、一生忘れないよ。忘れたら…約束だから。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"...Je n'oublierai jamais ces mots. Si jamais... on a fait une promesse du petit doigt, après tout.\\\""
            }
        }
    },
    "day4_night_seoyeon_gf": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "night": true,
        "next": "day4_night_seoyeon_gf_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"여, 여자친구……\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"G-girlfriend......\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¿N-novia...?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"か、彼女……\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"P-petite amie......\\\""
            }
        }
    },
    "day4_night_seoyeon_gf_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…아, 심장이 두근거려서 죽을 것 같아. 그런 말 갑자기 하면 어떡해……\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Ah, my heart is pounding so hard I might die. You can't just say things like that...\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Ay, mi corazón late tan fuerte que me voy a morir. No puedes decir cosas así de repente...\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…あ、心臓がドキドキして死にそう。そんなこと急に言わないでよ……\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"...Ah, mon cœur bat si fort que je pourrais mourir. Tu ne peux pas dire des choses comme ça...\\\""
            }
        }
    },
    "day4_night_seoyeon_honest": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_honest_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…… 고마워. 진심이지?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Thank you. Do you mean it?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Gracias. ¿Lo dices en serio?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"……ありがとう。本気で言ってる？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"...Merci. Tu le penses vraiment ?\\\""
            }
        }
    },
    "day4_night_seoyeon_honest_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"앞으로는… 너한테만은 연기 안 할게. 약속해.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"From now on... I won't act in front of you. I promise.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"De ahora en adelante... no voy a actuar frente a ti. Lo prometo.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"これからは…あなたの前では演技しない。約束する。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"Désormais... je ne ferai plus semblant devant toi. Promis.\\\""
            }
        }
    },
    "day4_night_seoyeon_resolve": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…있잖아. 나 결심했어.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...You know what? I've made up my mind.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Sabes qué, he tomado una decisión.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…あのね。決めたの。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"...Tu sais quoi ? Je me suis décidée.\\\""
            }
        }
    },
    "day4_night_seoyeon_resolve_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"엄마한테 말할 거야. 나는 '완벽한 딸'이기 전에 나 자신이고 싶다고.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"I'm going to tell Mom. That I want to be myself before being 'the perfect daughter.'\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Voy a decirle a mamá. Que quiero ser yo misma antes de ser 'la hija perfecta.'\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"お母さんに言う。『完璧な娘』でいる前に、自分自身でいたいって。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"Je vais le dire à maman. Que je veux être moi-même avant d'être 'la fille parfaite.'\\\""
            }
        }
    },
    "day4_night_seoyeon_resolve_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve_4",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"내 이런 밑바닥까지 봤으니까… 이제 넌 절대 날 떠날 수 없어.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "Since you've seen me at my lowest like this... you can never leave me now."
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Ya que viste mi peor lado... ahora nunca podrás dejarme.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"こんな底まで見られちゃったから…もうあなたは絶対に私から離れられないよ。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "Puisque tu m'as vue au plus bas comme ça... tu ne pourras plus jamais me quitter."
            }
        }
    },
    "day4_night_seoyeon_resolve_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"……서연아?\""
            },
            "en": {
                "name": "Me",
                "text": "......Seoyeon?"
            },
            "es": {
                "name": "Yo",
                "text": "\"...¿Seoyeon?\""
            },
            "ja": {
                "name": "僕",
                "text": "\"……ソヨン？\""
            },
            "fr": {
                "name": "Moi",
                "text": "......Seoyeon ?"
            }
        }
    },
    "day4_night_seoyeon_resolve_end": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "night": true,
        "setFlag": "day4_seoyeon_real_self",
        "next": "day4_night_seoyeon_farewell",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"만약 다른 여자한테 웃어주면… 그땐 나도 내가 무슨 짓을 할지 몰라. 알았지?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "If you smile at another girl... I don't know what I'll do then. Got it?"
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Si le sonríes a otra chica... no sé qué haré entonces. ¿Entendido?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"もし他の女の子に笑いかけたら…その時は私も何するかわからないよ。わかった？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "Si tu souris à une autre fille... je ne sais pas ce que je ferai. Compris ?"
            }
        }
    },
    "day4_night_seoyeon_farewell": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "day4_night_seoyeon_farewell_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*공원을 나와 집 앞까지 함께 걸었다. 서연이 내 팔을 꽉 껴안고 놓아주지 않았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We left the park and walked together to my house. Seoyeon hugged my arm tightly and wouldn't let go.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Salimos del parque y caminamos juntos hasta mi casa. Seoyeon se aferró a mi brazo y no me soltaba.*"
            },
            "ja": {
                "name": "僕",
                "text": "*公園を出て家の前まで一緒に歩いた。ソヨンが僕の腕をぎゅっと抱きしめて離さなかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Nous avons quitté le parc et marché ensemble jusqu'à chez moi. Seoyeon serrait mon bras et ne voulait pas lâcher.*"
            }
        }
    },
    "day4_night_seoyeon_farewell_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_farewell_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…오늘 못난 모습 보여줬는데, 도망 안 갔네. 다행이다.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "...I showed you an ugly side of me today, but you didn't run away. I'm glad."
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Hoy te mostré un lado feo de mí, pero no huiste. Me alegro.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…今日みっともない姿見せちゃったのに、逃げなかったね。よかった。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "...Je t'ai montré un côté laid de moi aujourd'hui, mais tu n'as pas fui. Je suis contente."
            }
        }
    },
    "day4_night_seoyeon_farewell_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_farewell_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"도망은. 오히려 더 좋아졌는데?\""
            },
            "en": {
                "name": "Me",
                "text": "\"Run away? I actually like you more now.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"¿Huir? En realidad me gustas más ahora.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"逃げるわけないよ。むしろもっと好きになったけど。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Fuir ? En fait, je t'aime encore plus maintenant.\\\""
            }
        }
    },
    "day4_night_seoyeon_farewell_4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "night": true,
        "next": "day4_night_seoyeon_farewell_5",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"……그 말, 절대 잊지 마. 넌 이제 내 거니까.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "......Never forget those words. You're mine now."
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Nunca olvides esas palabras. Eres mío ahora.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"……その言葉、絶対忘れないで。あなたはもう私のだから。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "......N'oublie jamais ces mots. Tu es à moi maintenant."
            }
        }
    },
    "day4_night_seoyeon_farewell_5": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "night": true,
        "next": "day4_night_seoyeon_farewell_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이 돌아서면서 서늘하지만 달콤한 미소를 지었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As Seoyeon turned to leave, she said in a small voice.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mientras Seoyeon se daba vuelta, hizo una sonrisa fría pero dulce.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンが振り返りながら、ひんやりとした、でも甘い微笑みを浮かべた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Alors que Seoyeon se retournait pour partir, elle a dit d'une petite voix.*"
            }
        }
    },
    "day4_night_seoyeon_farewell_6": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_home",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…오늘, 처음으로 '내가 나여도 괜찮다'고 느꼈어. 고마워.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*As Seoyeon turned around, she gave a chilling but sweet smile.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Hoy, por primera vez, sentí que 'está bien ser yo misma.' Gracias.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…今日、初めて『私が私でいていいんだ』って感じた。ありがとう。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*En se retournant, Seoyeon a affiché un sourire glaçant mais doux.*"
            }
        }
    },
    "day4_night_seoyeon_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "day4_night_seoyeon_home_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집에 돌아왔다. 서연의 눈물이 자꾸 떠오른다. 완벽했던 학생회장의 진짜 모습… 그 무거운 짐을 나눠 들고 싶다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Back home. Seoyeon's tears keep coming back to me. The real face behind the perfect student council president... I want to share that heavy burden.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Volví a casa. Las lágrimas de Seoyeon siguen viniendo a mi mente. El rostro real detrás de la perfecta presidenta del consejo estudiantil... quiero compartir esa carga pesada.*"
            },
            "ja": {
                "name": "僕",
                "text": "*家に帰ってきた。ソヨンの涙がずっと浮かんでくる。完璧だった生徒会長の本当の姿…あの重い荷物を一緒に持ちたい。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*De retour chez moi. Les larmes de Seoyeon me reviennent sans cesse. Le vrai visage derrière la présidente parfaite du conseil des élèves... je veux partager ce lourd fardeau.*"
            }
        }
    },
    "day4_night_seoyeon_home_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "day4_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*내일은… 서연이 웃는 이유가 '연기'가 아니라 '진심'이 되도록 해주고 싶다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Tomorrow... I want her smile to come from the heart, not from acting.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mañana... quiero que su sonrisa venga del corazón, no de la actuación.*"
            },
            "ja": {
                "name": "僕",
                "text": "*明日は…ソヨンの笑顔が『演技』じゃなくて『本心』になるようにしてあげたい。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Demain... je veux que son sourire vienne du cœur, pas d'un rôle qu'elle joue.*"
            }
        }
    },
    "day4_night_dain_gym": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "bgm": "night1.mp3",
        "next": "day4_night_dain_gym_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*밤 9시 반. 다인에게서 메시지가 왔다. '야 지금 시간 돼?ㅋㅋ 학교 오면 안 되지??'*"
            },
            "en": {
                "name": "Me",
                "text": "*9:30 PM. A message from Dain. 'Hey, you free rn?? lol Can you come to school??'*"
            },
            "es": {
                "name": "Yo",
                "text": "*9:30 PM. Un mensaje de Dain. 'Oye, ¿estás libre ahora?? jaja ¿Puedes venir a la escuela??'*"
            },
            "ja": {
                "name": "僕",
                "text": "*夜9時半。ダインからメッセージが来た。「ねえ今暇？笑 学校来れない？？」*"
            },
            "fr": {
                "name": "Moi",
                "text": "*21h30. Un message de Dain. 'Hey, t'es libre là ?? mdr Tu peux venir à l'école ??'*"
            }
        }
    },
    "day4_night_dain_gym_2": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_dain_gym_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*곧바로 또 메시지가 왔다. '아 그냥 와ㅋㅋ 체육관 뒷문 열어놨음!'*"
            },
            "en": {
                "name": "Me",
                "text": "*Another message right away. 'Nvm just come lol! Gym back door is open!'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Otro mensaje enseguida. 'Olvídalo, solo ven jaja ¡La puerta trasera del gimnasio está abierta!'*"
            },
            "ja": {
                "name": "僕",
                "text": "*すぐにまたメッセージが来た。「てかもう来て笑 体育館の裏口開けてあるから！」*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Un autre message aussitôt. 'Laisse tomber viens c'est tout mdr ! La porte arrière du gymnase est ouverte !'*"
            }
        }
    },
    "day4_night_dain_gym_3": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_dain_arrive",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이 이 시간에 학교 체육관이라니. 뭔가 이상한데… 가보자.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain at the school gym at this hour? Something feels off... Let's go check.*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿Dain en el gimnasio de la escuela a esta hora? Algo se siente raro... Vamos a ver.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインがこの時間に学校の体育館だなんて。なんか変だけど…行ってみよう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain au gymnase de l'école à cette heure ? Quelque chose cloche... Allons voir.*"
            }
        }
    },
    "day4_night_dain_arrive": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_arrive_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*체육관에 들어서자, 비상등만 켜진 어두운 코트 위에 다인이 혼자 배구공을 튀기고 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I entered the gym. In the darkness lit only by emergency lights, Dain was alone, bumping a volleyball.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Entré al gimnasio. En la oscuridad iluminada solo por luces de emergencia, Dain estaba sola, golpeando un balón de voleibol.*"
            },
            "ja": {
                "name": "僕",
                "text": "*体育館に入ると、非常灯だけが灯る暗いコートの上で、ダインがひとりでバレーボールを弾いていた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je suis entré dans le gymnase. Dans l'obscurité éclairée uniquement par les lumières de secours, Dain était seule, faisant rebondir un ballon de volley.*"
            }
        }
    },
    "day4_night_dain_arrive_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_arrive_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오! 진짜 왔어?! 후훗, 역시 내 남자친구!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh! You actually came?! Hehe, that's my boyfriend!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Oh! ¿¡De verdad viniste!? Jeje, ¡ese es mi novio!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"おっ！本当に来たの？！えへへ、さすが私の彼氏！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Oh ! T'es vraiment venu ?! Héhé, c'est bien mon copain !\\\""
            }
        }
    },
    "day4_night_dain_arrive_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_spike",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그런데… 뭔가 이상하다. 다인이 평소보다 더 힘껏 웃고 있는 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*But... something's off. Dain seems to be smiling harder than usual.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Pero... algo no está bien. Dain parece estar sonriendo más de lo normal.*"
            },
            "ja": {
                "name": "僕",
                "text": "*でも…なんか変だ。ダインがいつもよりもっと頑張って笑ってるような気がする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mais... quelque chose ne va pas. Dain semble sourire plus fort que d'habitude.*"
            }
        }
    },
    "day4_night_dain_spike": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_spike_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"토스 올려줘! 한 번만! 내 스파이크 보여줄게!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Toss for me! Just once! I'll show you my spike!!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Levántame un pase! ¡Solo uno! ¡¡Te mostraré mi remate!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"トス上げて！一回だけ！私のスパイク見せてあげる！！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Fais-moi une passe ! Juste une fois ! Je vais te montrer mon smash !!\\\""
            }
        }
    },
    "day4_night_dain_spike_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_spike_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인에게 토스를 올려줬다. 다인이 높이 뛰어올라 스파이크를 내리찍는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I tossed the ball to Dain. She jumped high and slammed the spike down.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le lancé el pase a Dain. Ella saltó alto y clavó el remate.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインにトスを上げた。ダインが高く跳んでスパイクを叩き込む。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai lancé le ballon à Dain. Elle a sauté haut et a claqué le smash.*"
            }
        }
    },
    "day4_night_dain_spike_3": {
        "background": "assets/images/background/dain_hurt_event1.png",
        "character": null,
        "next": "day4_night_dain_hurt",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*착지하는 순간— 다인이 오른쪽 무릎을 움켜잡고 쪼그려 앉았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The moment she landed—Dain grabbed her right knee and crumpled to the floor.*"
            },
            "es": {
                "name": "Yo",
                "text": "*En el momento de aterrizar— Dain agarró su rodilla derecha y se desplomó al suelo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*着地した瞬間――ダインが右膝を押さえてしゃがみ込んだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Au moment de l'atterrissage — Dain a saisi son genou droit et s'est effondrée au sol.*"
            }
        }
    },
    "day4_night_dain_hurt": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_hurt_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"……!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...... !!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"……！！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"...... !!\\\""
            }
        }
    },
    "day4_night_dain_hurt_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_hurt_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"다인!!\""
            },
            "en": {
                "name": "Me",
                "text": "\"Dain!!\""
            },
            "es": {
                "name": "Yo",
                "text": "\"¡¡Dain!!\""
            },
            "ja": {
                "name": "僕",
                "text": "\"ダイン！！\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Dain !!\\\""
            }
        }
    },
    "day4_night_dain_hurt_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_hurt_4",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"아, 아냐!! 괜찮아!! 그냥 삐끗한 거야 ㅋㅋ 별거 아…\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Ow ow!! I'm fine!! Just tweaked it a little haha, no biggie...\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Ay ay! ¡¡Estoy bien!! Solo se torció un poco jaja, no es nada...\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"あ、大丈夫！！ちょっとひねっただけだって笑 大したことな…\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Aïe aïe !! Ça va !! J'ai juste un peu forcé haha, c'est rien...\\\""
            }
        }
    },
    "day4_night_dain_hurt_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_dain_check",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day4_night_dain_serious",
                "stats": {
                    "Dain": {
                        "affinity": 10
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이 웃고 있지만, 무릎을 잡은 손이 하얗게 질려 있다.*",
                "choices": [
                    "\"거짓말하지 마. 어디 봐.\"",
                    "\"다인. 괜찮지 않잖아.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Dain is smiling, but her hand gripping her knee has gone white.*",
                "choices": [
                    "\"Don't lie. Let me see.\"",
                    "\"Dain. You're not okay.\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Dain está sonriendo, pero su mano agarrando la rodilla está blanca.*",
                "choices": [
                    "\"No mientas. Déjame ver.\"",
                    "\"Dain. No estás bien.\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ダインは笑ってるけど、膝を握る手が真っ白だ。*",
                "choices": [
                    "\"嘘つくなよ。見せて。\"",
                    "\"ダイン。大丈夫じゃないだろ。\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain sourit, mais sa main qui agrippe son genou est devenue blanche.*",
                "choices": [
                    "\\\"Ne mens pas. Laisse-moi voir.\\\"",
                    "\\\"Dain. Tu ne vas pas bien.\\\""
                ]
            }
        }
    },
    "day4_night_dain_check": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_secret",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인의 무릎을 보려 하자, 다인이 화들짝 뒤로 물러났다.*"
            },
            "en": {
                "name": "Me",
                "text": "*When I tried to look at Dain's knee, she flinched and pulled away.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cuando intenté ver la rodilla de Dain, ella se sobresaltó y retrocedió.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインの膝を見ようとしたら、ダインがびくっと後ずさった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Quand j'ai essayé de regarder le genou de Dain, elle a sursauté et s'est reculée.*"
            }
        }
    },
    "day4_night_dain_serious": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_secret",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"……\""
            },
            "en": {
                "name": "Dain",
                "text": "\"......\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"……\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"......\\\""
            }
        }
    },
    "day4_night_dain_secret": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_secret_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…… 알았어. 숨기려 했는데.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Fine. I was trying to hide it.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...Está bien. Estaba tratando de ocultarlo.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"……わかった。隠そうとしてたんだけど。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"...Bon. J'essayais de le cacher.\\\""
            }
        }
    },
    "day4_night_dain_secret_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_secret_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이 무릎 보호대를 걷어 올렸다. 무릎이 심하게 부어 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain rolled up her knee brace. Her knee was badly swollen.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dain se levantó la rodillera. Su rodilla estaba muy hinchada.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインが膝のサポーターをめくった。膝がひどく腫れている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain a remonté sa genouillère. Son genou était terriblement enflé.*"
            }
        }
    },
    "day4_night_dain_secret_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_secret_4",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…전방 십자인대. 작년에 다쳤어. 수술했는데… 완치가 안 됐어.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Torn ACL. I injured it last year. Had surgery but... it never fully healed.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...Ligamento cruzado anterior roto. Me lesioné el año pasado. Me operaron pero... nunca sanó completamente.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"…前十字靭帯。去年怪我した。手術したけど…完治しなかった。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"...Rupture des ligaments croisés. Je me suis blessée l'an dernier. J'ai été opérée mais... ça n'a jamais complètement guéri.\\\""
            }
        }
    },
    "day4_night_dain_secret_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_secret_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"……작년에?\""
            },
            "en": {
                "name": "Me",
                "text": "\"...Last year?\""
            },
            "es": {
                "name": "Yo",
                "text": "\"...¿El año pasado?\""
            },
            "ja": {
                "name": "僕",
                "text": "\"…去年？\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"...L'an dernier ?\\\""
            }
        }
    },
    "day4_night_dain_secret_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_secret_6",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"의사 선생님이 그랬어. '일상생활은 괜찮지만, 이전처럼 뛰는 건 무리'라고.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"The doctor said, 'Daily life is fine, but playing like before is too much.'\""
            },
            "es": {
                "name": "Dain",
                "text": "\"El doctor dijo: 'La vida diaria está bien, pero jugar como antes es demasiado.'\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"お医者さんに言われた。『日常生活は大丈夫だけど、以前みたいに跳ぶのは無理』って。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Le médecin a dit : 'La vie quotidienne, pas de souci, mais rejouer comme avant, c'est trop.'\\\""
            }
        }
    },
    "day4_night_dain_secret_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_dream",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"체육대 진학도, 프로 선수도… 다 물 건너갔어.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Athletic scholarship, going pro... All gone. Just like that.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Beca deportiva, volverse profesional... Todo se fue. Así nada más.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"体育大学進学も、プロ選手も…全部ダメになった。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Bourse sportive, devenir pro... Tout envolé. Comme ça.\\\""
            }
        }
    },
    "day4_night_dain_dream": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_dream_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…배구가 전부였던 다인에게, 그건 사형선고나 마찬가지였을 거다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...For Dain, who lived for volleyball, that must have been a death sentence.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...Para Dain, que vivía para el voleibol, eso debió haber sido una sentencia de muerte.*"
            },
            "ja": {
                "name": "僕",
                "text": "*…バレーボールが全てだったダインにとって、それは死刑宣告みたいなものだっただろう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Pour Dain, qui vivait pour le volley, ça a dû être une condamnation à mort.*"
            }
        }
    },
    "day4_night_dain_dream_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_dream_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…맨날 밝은 척 웃은 거, 알아? 아무도 모르게.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...You know how I always smile? Nobody knows it's an act.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...¿Sabes cómo siempre sonrío? Nadie sabe que es una actuación.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"…毎日明るいフリして笑ってたの、知ってた？誰にもバレないように。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"...Tu sais que je souris toujours ? Personne ne sait que c'est du cinéma.\\\""
            }
        }
    },
    "day4_night_dain_dream_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_dream_4",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"'다인이는 항상 에너지 넘치네!' 그 말 들을 때마다… 진짜 웃긴다. 속으론 매일 무릎이 불타는 것 같은데.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"'Dain is always so energetic!' Every time I hear that... I laugh for real. But inside, my knee burns every single day.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"'¡Dain siempre tiene tanta energía!' Cada vez que escucho eso... me río de verdad. Pero por dentro, mi rodilla arde todos los días.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"『ダインはいつも元気だね！』って言われるたびに…本当に笑えるよ。中では毎日膝が燃えるみたいなのに。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"'Dain est toujours pleine d'énergie !' Chaque fois que j'entends ça... je ris pour de vrai. Mais à l'intérieur, mon genou me brûle chaque jour.\\\""
            }
        }
    },
    "day4_night_dain_dream_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_dream_5",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오늘 너랑 데이트하면서 뛰어다닐 때도… 사실 아팠어. 근데 티 내고 싶지 않았어.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Even on our date today, when we were running around... it actually hurt. But I didn't want to show it.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Incluso en nuestra cita hoy, cuando corríamos... en realidad me dolía. Pero no quería demostrarlo.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"今日のデートで走り回ってた時も…本当は痛かった。でもバレたくなかった。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Même pendant notre rendez-vous aujourd'hui, quand on courait partout... ça faisait vraiment mal. Mais je ne voulais pas le montrer.\\\""
            }
        }
    },
    "day4_night_dain_dream_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_cry",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"포기해야 하는 건 알아. 근데… 그냥 한 번만 더 뛰고 싶었어. 이 코트에서.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"I know I need to let go. But... I just wanted to jump one more time. On this court.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Sé que tengo que dejarlo ir. Pero... solo quería saltar una vez más. En esta cancha.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"諦めなきゃいけないのはわかってる。でも…もう一回だけ跳びたかった。このコートで。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Je sais que je dois tourner la page. Mais... je voulais juste sauter une dernière fois. Sur ce terrain.\\\""
            }
        }
    },
    "day4_night_dain_cry": {
        "background": "assets/images/background/dain_depression_event.png",
        "character": null,
        "next": "day4_night_dain_cry_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이 배구공을 꼭 안고 고개를 숙였다. 어깨가 떨리고 있었다. 항상 밝기만 했던 다인이… 울고 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain hugged the volleyball tight and lowered her head. Her shoulders were shaking. The girl who was always bright and cheerful... was crying.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dain abrazó el balón de voleibol con fuerza y bajó la cabeza. Sus hombros temblaban. La chica que siempre era alegre y brillante... estaba llorando.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインがバレーボールをぎゅっと抱きしめて頭を下げた。肩が震えている。いつも明るかったダインが…泣いている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain a serré le ballon de volley contre elle et a baissé la tête. Ses épaules tremblaient. La fille toujours joyeuse et pleine d'entrain... pleurait.*"
            }
        }
    },
    "day4_night_dain_cry_choice": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_dain_future",
                "stats": {
                    "Dain": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "day4_night_dain_tears_ok",
                "stats": {
                    "Dain": {
                        "affinity": 20
                    }
                },
                "setFlag": "day4_dain_tears"
            },
            {
                "next": "day4_night_dain_last_spike",
                "stats": {
                    "Dain": {
                        "affinity": 12
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*……뭐라고 해야 하지.*",
                "choices": [
                    "\"다인의 꿈이 배구만은 아닐 거야. 새로운 꿈 같이 찾자.\"",
                    "\"울어도 돼. 밝은 척 안 해도 돼. 나한테는.\"",
                    "\"…한 번 더 토스 올려줄까? 마지막으로.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*...What do I say?*",
                "choices": [
                    "\"Your dream isn't just volleyball. Let's find a new dream together.\"",
                    "\"You can cry. You don't have to pretend to be okay. Not with me.\"",
                    "\"...Want me to toss one more? One last time.\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*...¿Qué digo?*",
                "choices": [
                    "\"Tu sueño no es solo el voleibol. Busquemos un nuevo sueño juntos.\"",
                    "\"Puedes llorar. No tienes que fingir estar bien. No conmigo.\"",
                    "\"...¿Quieres que lance uno más? Una última vez.\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*……なんて言えばいいんだ。*",
                "choices": [
                    "\"ダインの夢はバレーボールだけじゃないよ。新しい夢、一緒に探そう。\"",
                    "\"泣いていいよ。明るいフリしなくていい。僕の前では。\"",
                    "\"…もう一回トス上げようか？最後に。\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*...Qu'est-ce que je dis ?*",
                "choices": [
                    "\\\"Ton rêve, ce n'est pas que le volley. Trouvons un nouveau rêve ensemble.\\\"",
                    "\\\"Tu peux pleurer. Tu n'as pas besoin de faire semblant d'aller bien. Pas avec moi.\\\"",
                    "\\\"...Tu veux que je fasse encore une passe ? Une dernière fois.\\\""
                ]
            }
        }
    },
    "day4_night_dain_future": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_future_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…새로운 꿈?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...A new dream?\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...¿Un nuevo sueño?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"…新しい夢？\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"...Un nouveau rêve ?\\\""
            }
        }
    },
    "day4_night_dain_future_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_future_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…코치라든가, 트레이너라든가… 그런 거 생각해 본 적은 있어. 가르치는 건 좋아하니까.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...I've thought about it. Coaching, training... I do love teaching people.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...Lo he pensado. Entrenadora, preparadora física... Me gusta enseñar a la gente.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"…コーチとか、トレーナーとか…考えたことはある。教えるのは好きだから。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"...J'y ai réfléchi. Entraîner, former... j'adore enseigner aux gens.\\\""
            }
        }
    },
    "day4_night_dain_future_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_future_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"다인이면 세상에서 제일 열정적인 코치 될 거야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"You'd be the most passionate coach in the world.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Serías la entrenadora más apasionada del mundo.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"ダインなら世界一情熱的なコーチになれるよ。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Tu serais l'entraîneuse la plus passionnée du monde.\\\""
            }
        }
    },
    "day4_night_dain_future_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "next": "day4_night_dain_resolve",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…바보, 갑자기 그런 말 하면 울잖아……\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Dummy, if you say things like that I'll cry again...\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...Tonto, si dices cosas así voy a llorar otra vez...\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"…バカ、そんなこと言ったら泣いちゃうじゃん……\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"...Idiot, si tu dis des trucs comme ça je vais encore pleurer...\\\""
            }
        }
    },
    "day4_night_dain_tears_ok": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_tears_ok_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"……\""
            },
            "en": {
                "name": "Dain",
                "text": "\"......\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"……\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"......\\\""
            }
        }
    },
    "day4_night_dain_tears_ok_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_tears_ok_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…… 이 바보야…… 그런 말 하면…… 진짜 울잖아……!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...You dummy... if you say that... I'll actually cry...!!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...Tonto... si dices eso... de verdad voy a llorar...!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"……このバカ……そんなこと言ったら……本当に泣いちゃうじゃん……！！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"...Espèce d'idiot... si tu dis ça... je vais vraiment pleurer... !!\\\""
            }
        }
    },
    "day4_night_dain_tears_ok_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_tears_ok_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이 내 가슴팍에 얼굴을 파묻고 엉엉 울기 시작했다. 체육관에 울음소리가 울려 퍼졌다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain buried her face in my chest and started sobbing. Her cries echoed through the empty gym.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dain enterró su cara en mi pecho y empezó a sollozar. Sus llantos resonaron por el gimnasio vacío.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインが僕の胸に顔をうずめてわんわん泣き始めた。体育館に泣き声が響き渡った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain a enfoui son visage contre ma poitrine et s'est mise à sangloter. Ses pleurs résonnaient dans le gymnase vide.*"
            }
        }
    },
    "day4_night_dain_tears_ok_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_resolve",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…아무한테도 말 못 했어…… 혼자서 매일…… 무서웠단 말이야……\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...I couldn't tell anyone... every day, alone... I was so scared...\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...No podía decírselo a nadie... todos los días, sola... tenía mucho miedo...\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"…誰にも言えなかった……毎日ひとりで……怖かったんだよ……\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"...Je ne pouvais le dire à personne... chaque jour, toute seule... j'avais tellement peur...\\\""
            }
        }
    },
    "day4_night_dain_last_spike": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_last_spike_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…… 마지막?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...One last time?\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...¿Una última vez?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"……最後？\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"...Une dernière fois ?\\\""
            }
        }
    },
    "day4_night_dain_last_spike_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_last_spike_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"마지막이 아니라, '새로운 시작 전의 마지막 한 발'이야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Not 'last'—it's 'the last one before a new beginning.'\""
            },
            "es": {
                "name": "Yo",
                "text": "\"No 'última'—es 'el último salto antes de un nuevo comienzo.'\""
            },
            "ja": {
                "name": "僕",
                "text": "\"最後じゃなくて、『新しい始まりの前の最後の一歩』だよ。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Pas 'dernière' — c'est 'la dernière avant un nouveau départ.'\\\""
            }
        }
    },
    "day4_night_dain_last_spike_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_last_spike_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*토스를 올려줬다. 다인이 이를 악물고 뛰어올라 최고의 스파이크를 내리찍었다. 착지와 함께 무릎을 잡았지만… 웃고 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I tossed the ball. Dain gritted her teeth and jumped, slamming down the best spike I'd ever seen. She grabbed her knee on landing... but she was smiling.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Lancé el balón. Dain apretó los dientes y saltó, clavando el mejor remate que había visto. Agarró su rodilla al aterrizar... pero estaba sonriendo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*トスを上げた。ダインが歯を食いしばって跳び上がり、最高のスパイクを叩き込んだ。着地と同時に膝を押さえたけど…笑っていた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai lancé le ballon. Dain a serré les dents et sauté, claquant le plus beau smash que j'aie jamais vu. Elle a attrapé son genou à l'atterrissage... mais elle souriait.*"
            }
        }
    },
    "day4_night_dain_last_spike_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_last_spike_5",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…ㅋㅋ 아프다. 근데… 시원하다.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Haha. It hurts. But... it felt amazing.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...Jaja. Duele. Pero... se sintió increíble.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"…笑 痛い。でも…気持ちいい。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"...Haha. Ça fait mal. Mais... c'était incroyable.\\\""
            }
        }
    },
    "day4_night_dain_last_spike_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "next": "day4_night_dain_resolve",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…고마워. 이걸로 진짜 보내줄 수 있을 것 같아.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Thank you. I think I can really let go now.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...Gracias. Creo que ahora sí puedo dejarlo ir.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"…ありがとう。これで本当に手放せる気がする。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"...Merci. Je crois que je peux vraiment tourner la page maintenant.\\\""
            }
        }
    },
    "day4_night_dain_resolve": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_resolve_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…야.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Hey.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...Oye.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"…ねえ。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"...Hé.\\\""
            }
        }
    },
    "day4_night_dain_resolve_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_resolve_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"나 결심했어. 주치의 선생님한테 제대로 이야기하고, 재활에 집중할 거야.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"I've decided. I'm going to talk to my doctor properly and focus on rehabilitation.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"He decidido. Voy a hablar con mi doctor seriamente y concentrarme en la rehabilitación.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"決めた。主治医の先生にちゃんと話して、リハビリに集中する。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"J'ai décidé. Je vais parler sérieusement à mon médecin et me concentrer sur la rééducation.\\\""
            }
        }
    },
    "day4_night_dain_resolve_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_resolve_4",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"만약 내가 배구를 영영 못하게 되면… 네가 내 인생 전부 책임져야 해. 알았지?\""
            },
            "en": {
                "name": "Dain",
                "text": "If I can never play volleyball again... you have to take responsibility for my whole life. Got it?"
            },
            "es": {
                "name": "Dain",
                "text": "\"Si nunca puedo volver a jugar voleibol... tú tendrás que hacerte responsable de toda mi vida. ¿Entendido?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"もしバレーボールが永遠にできなくなったら…あんたが私の人生全部責任取ってよ。わかった？\""
            },
            "fr": {
                "name": "Dain",
                "text": "Si je ne peux plus jamais jouer au volley... tu devras prendre la responsabilité de toute ma vie. Compris ?"
            }
        }
    },
    "day4_night_dain_resolve_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_resolve_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"……어?\""
            },
            "en": {
                "name": "Me",
                "text": "......Huh?"
            },
            "es": {
                "name": "Yo",
                "text": "\"...¿Eh?\""
            },
            "ja": {
                "name": "僕",
                "text": "\"……え？\""
            },
            "fr": {
                "name": "Moi",
                "text": "......Hein ?"
            }
        }
    },
    "day4_night_dain_resolve_end": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "setFlag": "day4_dain_truth_revealed",
        "next": "day4_night_dain_farewell",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"농담 아니야. 넌 이제 내 거니까 도망칠 생각 마. 내 다리가 부서져도 널 쫓아갈 거니까.\""
            },
            "en": {
                "name": "Dain",
                "text": "I'm not joking. You're mine now, so don't even think about running away. Even if my legs break, I'll chase after you."
            },
            "es": {
                "name": "Dain",
                "text": "\"No es broma. Eres mío ahora, así que ni pienses en escapar. Aunque mis piernas se rompan, te perseguiré.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"冗談じゃないよ。あんたはもう私のものだから、逃げようなんて思わないで。脚が壊れても追いかけるから。\""
            },
            "fr": {
                "name": "Dain",
                "text": "Je ne plaisante pas. Tu es à moi maintenant, alors n'essaie même pas de fuir. Même si mes jambes se brisent, je te poursuivrai."
            }
        }
    },
    "day4_night_dain_farewell": {
        "character": "assets/images/characters/dain_shy.png",
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "day4_night_dain_farewell_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*체육관을 나왔다. 다인이 내 팔짱을 꽉 끼고, 절대 놓아주지 않겠다는 듯 힘을 주었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We left the gym. Dain linked her arm tightly with mine, putting strength into it as if she would never let go.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Salimos del gimnasio. Dain enlazó su brazo fuertemente con el mío, con fuerza como si nunca fuera a soltarme.*"
            },
            "ja": {
                "name": "僕",
                "text": "*体育館を出た。ダインが僕の腕をぎゅっと組んで、絶対に離さないとばかりに力を込めた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Nous avons quitté le gymnase. Dain a enlacé mon bras fermement, y mettant toute sa force comme si elle ne le lâcherait jamais.*"
            }
        }
    },
    "day4_night_dain_farewell_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_pout.png",
        "night": true,
        "next": "day4_night_dain_farewell_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…오늘 내 약점 다 봤으니까, 넌 이제 나한테서 못 벗어나. 평생 내 옆에서 토스나 올려.\""
            },
            "en": {
                "name": "Dain",
                "text": "...Since you've seen all my weaknesses today, you can't escape from me now. Just set tosses by my side for the rest of your life."
            },
            "es": {
                "name": "Dain",
                "text": "\"...Ya que viste todas mis debilidades hoy, ya no puedes escapar de mí. Solo levanta tosses a mi lado por el resto de tu vida.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"…今日私の弱点全部見たんだから、もう逃げられないよ。一生私のそばでトス上げてて。\""
            },
            "fr": {
                "name": "Dain",
                "text": "...Puisque tu as vu toutes mes faiblesses aujourd'hui, tu ne peux plus m'échapper. Contente-toi de me faire des passes pour le reste de ta vie."
            }
        }
    },
    "day4_night_dain_farewell_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_pout.png",
        "night": true,
        "next": "day4_night_dain_farewell_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"그 모습도 좋았는데?\""
            },
            "en": {
                "name": "Me",
                "text": "\"I liked that side of you too.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Ese lado tuyo también me gustó.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"あの姿も良かったけどね。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"J'ai aimé ce côté de toi aussi.\\\""
            }
        }
    },
    "day4_night_dain_farewell_4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_pout.png",
        "night": true,
        "next": "day4_night_dain_farewell_5",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…ㅎ, 변태 아냐? 우는 여자친구 보면서 '좋았다'니.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Huh? Who says 'I liked it' about their crying girlfriend? Weirdo.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...¿Eh? ¿Quién dice 'me gustó' sobre su novia llorando? Raro.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"…え、変態じゃない？泣いてる彼女見て『良かった』って。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"...Hein ? Qui dit 'j'ai aimé ça' en parlant de sa copine en pleurs ? T'es bizarre.\\\""
            }
        }
    },
    "day4_night_dain_farewell_5": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "next": "day4_night_dain_farewell_6",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…근데, 고마워. 진짜로. 네가 아니었으면 영영 혼자 안고 갔을 거야.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...But thanks. Really. Without you, I would've kept carrying this alone forever.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...Pero gracias. De verdad. Sin ti, habría seguido cargando esto sola para siempre.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"…でも、ありがとう。本当に。あんたがいなかったら、ずっとひとりで抱えてたと思う。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"...Mais merci. Vraiment. Sans toi, j'aurais continué à porter ça toute seule pour toujours.\\\""
            }
        }
    },
    "day4_night_dain_farewell_6": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_home",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…내일부터는 진짜로 웃을게. 가짜 말고, 진짜로.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Starting tomorrow, I'll smile for real. Not fake—for real.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...A partir de mañana, sonreiré de verdad. No en falso—de verdad.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"…明日からは本当に笑うよ。偽物じゃなくて、本当に。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"...À partir de demain, je sourirai pour de vrai. Pas du faux — pour de vrai.\\\""
            }
        }
    },
    "day4_night_dain_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "day4_night_dain_home_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집에 돌아왔다. 체육관에서의 다인의 눈물이 떠오른다. 항상 밝기만 했던 다인이 감추고 있던 아픔… 그 무게가 가슴에 남아 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Back home. Dain's tears from the gym keep flashing before my eyes. The pain she hid behind her constant brightness... it weighs heavy on my heart.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Volví a casa. Las lágrimas de Dain en el gimnasio siguen apareciendo ante mis ojos. El dolor que escondía detrás de su constante alegría... pesa en mi corazón.*"
            },
            "ja": {
                "name": "僕",
                "text": "*家に帰ってきた。体育館でのダインの涙が浮かんでくる。いつも明るかったダインが隠していた痛み…その重さが胸に残っている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*De retour chez moi. Les larmes de Dain au gymnase me reviennent sans cesse. La douleur qu'elle cachait derrière sa gaieté constante... ça me pèse sur le cœur.*"
            }
        }
    },
    "day4_night_dain_home_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "fade": true,
        "next": "day4_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*내일은 다인이 진심으로 웃을 수 있는 하루가 되길. 옆에서 지켜봐 줘야지.*"
            },
            "en": {
                "name": "Me",
                "text": "*Tomorrow... I want it to be a day where Dain can smile from the heart. I'll be right there beside her.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mañana... quiero que sea un día en el que Dain pueda sonreír de corazón. Estaré ahí a su lado.*"
            },
            "ja": {
                "name": "僕",
                "text": "*明日は…ダインが心から笑える一日になりますように。そばで見守ってあげよう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Demain... je veux que ce soit un jour où Dain pourra sourire du fond du cœur. Je serai juste là, à ses côtés.*"
            }
        }
    },
    "day4_night_teacher_call": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "bgm": "night1.mp3",
        "next": "day4_night_teacher_call_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*밤 9시. 선생님한테 전화가 왔다.*"
            },
            "en": {
                "name": "Me",
                "text": "*9 PM. A call from the teacher.*"
            },
            "es": {
                "name": "Yo",
                "text": "*9 PM. Una llamada de la profesora.*"
            },
            "ja": {
                "name": "僕",
                "text": "*夜9時。先生から電話が来た。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*21 heures. Un appel de la professeure.*"
            }
        }
    },
    "day4_night_teacher_call_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day4_night_teacher_call_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…여보세요? 나야. 지금… 시간 괜찮아?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Hello? It's me. Are you... free right now?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...¿Hola? Soy yo. ¿Estás... libre ahora?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…もしもし？私だけど。今…時間大丈夫？\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Allô ? C'est moi. Tu es... libre en ce moment ?\\\""
            }
        }
    },
    "day4_night_teacher_call_3": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day4_night_teacher_call_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님 목소리가 평소와 다르다. 교실에서의 당당한 목소리가 아니라… 어딘가 지쳐 있는 느낌.*"
            },
            "en": {
                "name": "Me",
                "text": "*Her voice sounds different from usual. Not the confident voice from the classroom... it sounds like she's about to break.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Su voz suena diferente de lo habitual. No es la voz segura del aula... suena como si estuviera a punto de quebrarse.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生の声がいつもと違う。教室での堂々とした声じゃなくて…どこか疲れ切っている感じ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Sa voix est différente de d'habitude. Pas la voix assurée de la salle de classe... on dirait qu'elle est sur le point de craquer.*"
            }
        }
    },
    "day4_night_teacher_call_4": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day4_night_teacher_cafe",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…학교 근처 카페 알지? 거기서 잠깐 볼 수 있을까.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...There's a café near the school. Can we meet there?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Hay un café cerca de la escuela. ¿Podemos vernos ahí?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…学校の近くのカフェ知ってるでしょ？そこでちょっと会えないかな。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Il y a un café près de l'école. On peut se retrouver là-bas ?\\\""
            }
        }
    },
    "day4_night_teacher_cafe": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_cafe_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*카페에 도착했다. 구석 자리에 선생님이 앉아 있었다. 평소 정장 차림이 아니라 캐주얼한 옷을 입고 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I arrived at the café. She was sitting in a corner booth. Instead of her usual neat outfit, she was in casual clothes.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Llegué al café. Estaba sentada en un rincón. En vez de su atuendo habitual, vestía ropa casual.*"
            },
            "ja": {
                "name": "僕",
                "text": "*カフェに着いた。隅の席に先生が座っていた。いつものスーツ姿じゃなくて、カジュアルな服を着ている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je suis arrivé au café. Elle était assise dans un coin isolé. Au lieu de sa tenue soignée habituelle, elle portait des vêtements décontractés.*"
            }
        }
    },
    "day4_night_teacher_cafe_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_cafe_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…와줘서 고마워. 갑자기 불러서 미안해.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Thanks for coming. Sorry for calling you out so suddenly.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Gracias por venir. Perdón por llamarte tan de repente.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…来てくれてありがとう。急に呼んでごめんね。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Merci d'être venu. Pardon de t'avoir appelé si soudainement.\\\""
            }
        }
    },
    "day4_night_teacher_cafe_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_teacher_concern",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_night_teacher_wait",
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
                "text": "*선생님 눈이 붉다. …울었던 건가?*",
                "choices": [
                    "\"무슨 일 있었어요?\"",
                    "커피를 건네며 조용히 기다린다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Her eyes are red. ...Was she crying?*",
                "choices": [
                    "\"Did something happen?\"",
                    "Offer her coffee and wait quietly"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Sus ojos están rojos. ...¿Estaba llorando?*",
                "choices": [
                    "\"¿Pasó algo?\"",
                    "Ofrecerle café y esperar en silencio"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*先生の目が赤い。…泣いてたのか？*",
                "choices": [
                    "\"何かあったんですか？\"",
                    "コーヒーを渡して静かに待つ"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Ses yeux sont rouges. ...Elle pleurait ?*",
                "choices": [
                    "\\\"Il s'est passé quelque chose ?\\\"",
                    "Lui offrir un café et attendre calmement"
                ]
            }
        }
    },
    "day4_night_teacher_concern": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_open",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…일이라기보다는, 오늘 좀 많이 생각을 했어.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...It's not so much that something happened. I just... thought a lot today.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...No es tanto que algo haya pasado. Solo... pensé mucho hoy.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…何かあったというより、今日はちょっと色々考えちゃって。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Ce n'est pas tant qu'il s'est passé quelque chose. J'ai juste... beaucoup réfléchi aujourd'hui.\\\""
            }
        }
    },
    "day4_night_teacher_wait": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_open",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…고마워. 이렇게 아무 말 없이 옆에 있어주는 거… 네가 참 좋아.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Thank you. Just sitting next to me without saying anything... I really like that about you.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Gracias. Solo estar a mi lado sin decir nada... me gusta mucho eso de ti.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…ありがとう。こうやって何も言わずにそばにいてくれるの…あなたのそういうところ、好き。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Merci. Juste être assis à côté de moi sans rien dire... j'aime vraiment ça chez toi.\\\""
            }
        }
    },
    "day4_night_teacher_open": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_open_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…어제 교무회의에서 교감 선생님이 그러시더라. '학생과 개인적으로 친하게 지내는 건 조심해야 한다'고.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...At the faculty meeting yesterday, the vice principal said, 'Be careful about getting too personally close to students.'\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...En la reunión de profesores ayer, el subdirector dijo: 'Tengan cuidado de no acercarse demasiado personalmente a los estudiantes.'\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…昨日の職員会議で教頭先生に言われたの。『生徒と個人的に親しくするのは気をつけるように』って。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...À la réunion des professeurs hier, le proviseur adjoint a dit : 'Faites attention à ne pas devenir trop proche personnellement des élèves.'\\\""
            }
        }
    },
    "day4_night_teacher_open_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_open_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"직접적으로 우리 얘기를 한 건 아닐 수도 있어. 하지만… 심장이 멈추는 줄 알았어.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Maybe it wasn't about us directly. But... my heart nearly stopped.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Quizás no era sobre nosotros directamente. Pero... casi se me para el corazón.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"直接私たちのことを言ったわけじゃないかもしれない。でも…心臓が止まるかと思った。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"Ce n'était peut-être pas à propos de nous directement. Mais... mon cœur a failli s'arrêter.\\\""
            }
        }
    },
    "day4_night_teacher_open_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_open_4",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"나… 선생이잖아. 너의 담임이잖아. 이러면 안 되는 거 알아.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"I'm... a teacher. Your homeroom teacher. I know this isn't right.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Soy... una profesora. Tu profesora de aula. Sé que esto no está bien.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"私…先生なんだよ。あなたの担任なんだよ。こんなのダメだってわかってる。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"Je suis... une professeure. Ta professeure principale. Je sais que ce n'est pas bien.\\\""
            }
        }
    },
    "day4_night_teacher_open_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_open_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"……선생님.\""
            },
            "en": {
                "name": "Me",
                "text": "\"......\""
            },
            "es": {
                "name": "Yo",
                "text": "\"...Profesora.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"……先生。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"......\\\""
            }
        }
    },
    "day4_night_teacher_open_5": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_open_6",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"근데 돌아가는 길에 자꾸 네 생각이 나는 거야. '지금 뭐 하고 있을까', '밥은 먹었을까'…\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"But on the way home, I kept thinking about you. 'What is he doing right now?' 'Did he eat?'...\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Pero de camino a casa, no dejaba de pensar en ti. '¿Qué estará haciendo ahora?' '¿Ya comió?'...\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"でも帰り道、ずっとあなたのことが気になって。『今何してるかな』、『ご飯食べたかな』…って。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"Mais sur le chemin du retour, je n'arrêtais pas de penser à toi. 'Qu'est-ce qu'il fait en ce moment ?' 'Est-ce qu'il a mangé ?'...\\\""
            }
        }
    },
    "day4_night_teacher_open_6": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_tear",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"교사로서 자격이 없는 걸까. 아니면… 이 마음이 진짜라서 이러는 걸까.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Am I not qualified to be a teacher? Or... is it because these feelings are real that I feel this way?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"¿No estoy calificada para ser profesora? O... ¿es porque estos sentimientos son reales que me siento así?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"教師として失格なのかな。それとも…この気持ちが本物だからこうなるのかな。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"Ne suis-je pas faite pour être enseignante ? Ou... est-ce parce que ces sentiments sont réels que je me sens ainsi ?\\\""
            }
        }
    },
    "day4_night_teacher_tear": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_tear_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 커피잔을 꼭 쥐고 고개를 숙였다. 어깨가 미세하게 떨리고 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*She gripped her coffee cup tightly and lowered her head. Her shoulders were trembling ever so slightly.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Ella agarró su taza de café con fuerza y bajó la cabeza. Sus hombros temblaban ligeramente.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生がコーヒーカップをぎゅっと握って頭を下げた。肩が微かに震えている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Elle a serré sa tasse de café et baissé la tête. Ses épaules tremblaient imperceptiblement.*"
            }
        }
    },
    "day4_night_teacher_tear_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_tear_choice",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…하하, 미안. 선생이 학생 앞에서 이러면 안 되는데.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Ha, sorry. A teacher shouldn't be like this in front of a student.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Ja, perdón. Una profesora no debería estar así frente a un estudiante.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…はは、ごめんね。先生が生徒の前でこんな姿見せちゃダメだよね。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Ha, pardon. Une professeure ne devrait pas être comme ça devant un élève.\\\""
            }
        }
    },
    "day4_night_teacher_tear_choice": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_teacher_hold",
                "stats": {
                    "Teacher": {
                        "affinity": 15
                    }
                },
                "setFlag": "day4_held_teacher_hand"
            },
            {
                "next": "day4_night_teacher_woman",
                "stats": {
                    "Teacher": {
                        "affinity": 20
                    }
                },
                "setFlag": "day4_teacher_as_woman"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 눈가에 눈물이 맺혀 있다.*",
                "choices": [
                    "손을 잡는다",
                    "\"지금은 선생님이 아니라, 한 사람의 여자로 봐도 돼요\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*There are tears glistening at the corner of her eyes.*",
                "choices": [
                    "Hold her hand",
                    "\"Right now, you're not my teacher—you're a woman I care about\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Hay lágrimas brillando en las esquinas de sus ojos.*",
                "choices": [
                    "Tomar su mano",
                    "\"Ahora mismo, no eres mi profesora—eres una mujer que me importa\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*先生の目尻に涙が浮かんでいる。*",
                "choices": [
                    "手を握る",
                    "\"今は先生じゃなくて、ひとりの女性として見ていいですか\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Des larmes brillent au coin de ses yeux.*",
                "choices": [
                    "Lui prendre la main",
                    "\\\"En ce moment, tu n'es pas ma prof — tu es une femme à qui je tiens\\\""
                ]
            }
        }
    },
    "day4_night_teacher_hold": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_hold_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…… !\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"......!\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...!\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"……！\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...... !\\\""
            }
        }
    },
    "day4_night_teacher_hold_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_hold_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*테이블 밑으로 선생님의 손을 잡았다. 차가웠던 손이 점점 따뜻해졌다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I reached under the table and held her hand. Her cold fingers slowly grew warm.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Tomé su mano bajo la mesa. Sus dedos fríos poco a poco se calentaron.*"
            },
            "ja": {
                "name": "僕",
                "text": "*テーブルの下で先生の手を握った。冷たかった手がだんだん温かくなった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai glissé ma main sous la table et pris la sienne. Ses doigts froids se sont lentement réchauffés.*"
            }
        }
    },
    "day4_night_teacher_hold_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_hold_4",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…여기서 이러면 안 되는데. 누가 볼 수도 있잖아.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...We shouldn't do this here. Someone might see.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...No deberíamos hacer esto aquí. Alguien podría ver.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…ここでこんなことしちゃダメなのに。誰かに見られたら。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...On ne devrait pas faire ça ici. Quelqu'un pourrait voir.\\\""
            }
        }
    },
    "day4_night_teacher_hold_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_real",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…근데 놓기 싫다.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...But I don't want to let go.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Pero no quiero soltar.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…でも離したくない。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Mais je ne veux pas lâcher.\\\""
            }
        }
    },
    "day4_night_teacher_woman": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_woman_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…뭐?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...What?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...¿Qué?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…え？\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Quoi ?\\\""
            }
        }
    },
    "day4_night_teacher_woman_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_woman_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"선생님이기 전에, 한 명의 사람이잖아요. 울고 싶을 때 울어도 되는 거예요.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Before you're a teacher, you're a person. It's okay to cry when you want to cry.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Antes de ser profesora, eres una persona. Está bien llorar cuando quieras llorar.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"先生である前に、ひとりの人間じゃないですか。泣きたい時は泣いていいんですよ。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Avant d'être professeure, tu es une personne. C'est normal de pleurer quand tu en as envie.\\\""
            }
        }
    },
    "day4_night_teacher_woman_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_woman_4",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"……너, 진짜.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...You, honestly.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Tú, en serio.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"……あなたって、本当に。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Toi, franchement.\\\""
            }
        }
    },
    "day4_night_teacher_woman_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_real",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…그런 말 하면 진짜 울어버린다, 바보야.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...If you say things like that, I'll really start crying, you dummy.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Si dices cosas así, de verdad voy a llorar, tonto.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…そんなこと言われたら本当に泣いちゃうよ、バカ。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Si tu dis des choses comme ça, je vais vraiment me mettre à pleurer, idiot.\\\""
            }
        }
    },
    "day4_night_teacher_real": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "next": "day4_night_teacher_real_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…있잖아. 나 처음 교사 됐을 때, '절대 학생한테 감정 갖지 말자' 그렇게 다짐했었어.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...You know, when I first became a teacher, I promised myself I'd never catch feelings for a student.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Sabes, cuando me convertí en profesora por primera vez, me prometí que nunca tendría sentimientos por un estudiante.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…あのね。私が初めて教師になった時、『絶対に生徒に感情を持たないようにしよう』って誓ったの。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Tu sais, quand je suis devenue professeure, je me suis promis de ne jamais tomber amoureuse d'un élève.\\\""
            }
        }
    },
    "day4_night_teacher_real_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_real_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"근데 너는… 어느 순간부터 그 다짐을 무너뜨리더라.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"But then you came along... and broke that promise before I even noticed.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Pero entonces llegaste tú... y rompiste esa promesa antes de que me diera cuenta.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"でもあなたは…いつの間にかその誓いを壊しちゃった。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"Mais tu es arrivé... et tu as brisé cette promesse avant même que je m'en rende compte.\\\""
            }
        }
    },
    "day4_night_teacher_real_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_real_4",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"지각해서 혼냈는데 오히려 웃으면서 '선생님 오늘 좀 피곤해 보여요, 괜찮아요?' 그러잖아.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"When I scolded you for being late, you just smiled and said, 'You look tired today, are you okay?' instead of making excuses.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Cuando te regañé por llegar tarde, solo sonreíste y dijiste: '¿Se ve cansada hoy, está bien?' en vez de dar excusas.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"遅刻して叱ったのに、むしろ笑って『先生、今日ちょっと疲れて見えます、大丈夫ですか？』って言うんだもん。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"Quand je t'ai grondé pour ton retard, tu as juste souri et dit : 'Vous avez l'air fatiguée aujourd'hui, ça va ?' au lieu de te justifier.\\\""
            }
        }
    },
    "day4_night_teacher_real_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_real_choice",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"그때부터… 자꾸 신경 쓰이기 시작했어.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"That's when... I started noticing you.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Desde entonces... empecé a fijarme en ti.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"あの時から…ずっと気になり始めた。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"C'est là que... j'ai commencé à te remarquer.\\\""
            }
        }
    },
    "day4_night_teacher_real_choice": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_teacher_graduate",
                "stats": {
                    "Teacher": {
                        "affinity": 20
                    }
                }
            },
            {
                "next": "day4_night_teacher_present",
                "stats": {
                    "Teacher": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "day4_night_teacher_give_up",
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
                "text": "*선생님이 떨리는 목소리로 진심을 말하고 있다.*",
                "choices": [
                    "\"졸업하면 당당하게 옆에 있을게요\"",
                    "\"지금 이 순간이 소중해요. 그걸로 충분해요\"",
                    "\"선생님이 힘들면 그만둬도 괜찮아요\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*She's speaking her heart with a trembling voice.*",
                "choices": [
                    "\"After I graduate, I'll stand proudly by your side\"",
                    "\"This moment right now is precious. That's enough for me\"",
                    "\"If it's too hard for you, we can stop\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Ella está hablando con el corazón, con voz temblorosa.*",
                "choices": [
                    "\"Cuando me gradúe, estaré orgullosamente a tu lado\"",
                    "\"Este momento ahora es precioso. Eso es suficiente para mí\"",
                    "\"Si es muy difícil para ti, podemos parar\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*先生が震える声で本心を話している。*",
                "choices": [
                    "\"卒業したら堂々とそばにいますよ\"",
                    "\"今この瞬間が大切です。それで十分です\"",
                    "\"先生が辛いならやめてもいいですよ\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Elle ouvre son cœur d'une voix tremblante.*",
                "choices": [
                    "\\\"Après mon diplôme, je me tiendrai fièrement à tes côtés\\\"",
                    "\\\"Cet instant présent est précieux. Ça me suffit\\\"",
                    "\\\"Si c'est trop dur pour toi, on peut arrêter\\\""
                ]
            }
        }
    },
    "day4_night_teacher_graduate": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_graduate_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…졸업하면?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...After you graduate?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...¿Después de que te gradúes?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…卒業したら？\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Après ton diplôme ?\\\""
            }
        }
    },
    "day4_night_teacher_graduate_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_graduate_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…그때까지 기다려 줄 거야?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Will you wait until then?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...¿Esperarás hasta entonces?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…それまで待ってくれるの？\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Tu attendras jusque-là ?\\\""
            }
        }
    },
    "day4_night_teacher_graduate_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_graduate_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"기다리는 게 아니라, 그때까지 더 멋진 사람이 돼서 올게요.\""
            },
            "en": {
                "name": "Me",
                "text": "\"I'm not waiting—I'm going to become someone even better by then.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"No estoy esperando—voy a convertirme en alguien aún mejor para entonces.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"待つんじゃなくて、その時までにもっとかっこいい人になって来ますよ。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Je n'attends pas — je vais devenir quelqu'un d'encore mieux d'ici là.\\\""
            }
        }
    },
    "day4_night_teacher_graduate_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "night": true,
        "next": "day4_night_teacher_resolve",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…하, 진짜. 나보다 훨씬 어른스러운 거 아니야.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...God, seriously. You're way more mature than I am.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Dios, en serio. Eres mucho más maduro que yo.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…はぁ、もう。私よりずっと大人じゃん。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Mon Dieu, sérieusement. Tu es bien plus mature que moi.\\\""
            }
        }
    },
    "day4_night_teacher_present": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_present_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…지금 이 순간?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...This moment right now?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...¿Este momento ahora?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…今この瞬間？\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Cet instant présent ?\\\""
            }
        }
    },
    "day4_night_teacher_present_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_present_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"내일 걱정은 내일 해요. 지금은 그냥 같이 있고 싶어요.\""
            },
            "en": {
                "name": "Me",
                "text": "\"We can worry about tomorrow when it comes. Right now, I just want to be here with you.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Podemos preocuparnos por mañana cuando llegue. Ahora mismo, solo quiero estar aquí contigo.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"明日のことは明日心配しましょう。今はただ、一緒にいたいです。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"On s'inquiétera de demain quand il viendra. Pour l'instant, je veux juste être ici avec toi.\\\""
            }
        }
    },
    "day4_night_teacher_present_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "night": true,
        "next": "day4_night_teacher_resolve",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…그래, 맞아. 지금 이 시간이 소중한 거지.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...You're right. Right now... this time together is what matters.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Tienes razón. Ahora mismo... este tiempo juntos es lo que importa.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…そうだよね。今この時間が大切なんだよね。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Tu as raison. Pour l'instant... ce temps ensemble est ce qui compte.\\\""
            }
        }
    },
    "day4_night_teacher_give_up": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_angry.png",
        "night": true,
        "next": "day4_night_teacher_give_up_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…그만두라고?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Stop?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...¿Parar?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…やめる？\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Arrêter ?\\\""
            }
        }
    },
    "day4_night_teacher_give_up_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_give_up_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…바보. 그만두고 싶어서 고민하는 게 아니야.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...You dummy. I'm not struggling because I want to stop.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Tonto. No estoy luchando porque quiera parar.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…バカ。やめたくて悩んでるんじゃないの。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Idiot. Ce n'est pas parce que je veux arrêter que j'ai du mal.\\\""
            }
        }
    },
    "day4_night_teacher_give_up_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_resolve",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"너를 좋아하는 마음이 진짜라서… 그래서 무서운 거야.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"It's because my feelings are real... that's what scares me.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Es porque mis sentimientos son reales... eso es lo que me asusta.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"あなたを好きな気持ちが本物だから…だから怖いの。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"C'est parce que mes sentiments sont réels... que ça me fait peur.\\\""
            }
        }
    },
    "day4_night_teacher_resolve": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "next": "day4_night_teacher_resolve_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…있잖아.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...You know what?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...¿Sabes qué?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…あのね。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Tu sais quoi ?\\\""
            }
        }
    },
    "day4_night_teacher_resolve_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "next": "day4_night_teacher_resolve_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"나 결심했어. 교사 자리 따위 잃어도 상관없어.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "I've made up my mind. I don't care if I lose my position as a teacher."
            },
            "es": {
                "name": "Profesora",
                "text": "\"He tomado una decisión. No me importa si pierdo mi puesto como profesora.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"決めた。教師の立場なんて失ってもいい。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "J'ai pris ma décision. Peu importe si je perds mon poste d'enseignante."
            }
        }
    },
    "day4_night_teacher_resolve_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "night": true,
        "next": "day4_night_teacher_resolve_4",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"만약 들키면… 널 아무도 못 보는 내 방에 가둬버릴 거야. 그럼 평생 나만 볼 수 있겠지?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "If we get caught... I'll lock you in my room where no one can see you. Then only I can see you forever, right?"
            },
            "es": {
                "name": "Profesora",
                "text": "\"Si nos descubren... te encerraré en mi cuarto donde nadie pueda verte. Así solo yo podré verte para siempre, ¿verdad?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"もしバレたら…あなたを誰にも見えない私の部屋に閉じ込めちゃう。そうしたら一生私だけのものでしょ？\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "Si on se fait prendre... je t'enfermerai dans ma chambre où personne ne pourra te voir. Comme ça, il n'y aura que moi pour te voir, pour toujours, non ?"
            }
        }
    },
    "day4_night_teacher_resolve_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "night": true,
        "next": "day4_night_teacher_resolve_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"……선생님?\""
            },
            "en": {
                "name": "Me",
                "text": "......Teacher?"
            },
            "es": {
                "name": "Yo",
                "text": "\"...¿Profesora?\""
            },
            "ja": {
                "name": "僕",
                "text": "\"……先生？\""
            },
            "fr": {
                "name": "Moi",
                "text": "......Professeure ?"
            }
        }
    },
    "day4_night_teacher_resolve_end": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "night": true,
        "setFlag": "day4_teacher_secret_shared",
        "next": "day4_night_teacher_farewell",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"농담 아니야. 넌 이제 내 공범이니까. 절대 못 빠져나가.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "I'm not joking. You're my accomplice now. You can never get out."
            },
            "es": {
                "name": "Profesora",
                "text": "\"No es broma. Eres mi cómplice ahora. Nunca podrás escapar.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"冗談じゃないよ。あなたはもう私の共犯者だから。絶対に逃がさない。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "Je ne plaisante pas. Tu es mon complice maintenant. Tu ne pourras jamais t'en sortir."
            }
        }
    },
    "day4_night_teacher_farewell": {
        "character": "assets/images/characters/teacher_smile.png",
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "day4_night_teacher_farewell_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*카페를 나왔다. 밤거리를 나란히 걸었다. 선생님이 내 손을 깍지 껴 잡고 놓아주지 않았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We left the cafe. We walked side by side on the night street. The teacher intertwined her fingers with mine and wouldn't let go.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Salimos del café. Caminamos juntos por la calle nocturna. La profesora entrelazó sus dedos con los míos y no me soltaba.*"
            },
            "ja": {
                "name": "僕",
                "text": "*カフェを出た。夜道を並んで歩いた。先生が僕の手を指を絡めて握って、離さなかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Nous avons quitté le café. Nous avons marché côte à côte dans la rue nocturne. La professeure a entrelacé ses doigts aux miens et n'a pas lâché.*"
            }
        }
    },
    "day4_night_teacher_farewell_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_farewell_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…학교에서는 다시 엄격한 선생님인 척할 거야. 다른 애들이 눈치채면 안 되니까.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "...I'll pretend to be a strict teacher again at school. We can't let the other kids notice."
            },
            "es": {
                "name": "Profesora",
                "text": "\"...En la escuela volveré a actuar como una profesora estricta. No podemos dejar que los demás se den cuenta.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…学校ではまた厳しい先生のフリするね。他の子にバレたらいけないから。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "...Je ferai semblant d'être une prof stricte à l'école. On ne peut pas laisser les autres élèves s'en apercevoir."
            }
        }
    },
    "day4_night_teacher_farewell_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_farewell_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"비밀 연애네요.\""
            },
            "en": {
                "name": "Me",
                "text": "A secret romance."
            },
            "es": {
                "name": "Yo",
                "text": "\"Un romance secreto.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"秘密の恋愛ですね。\""
            },
            "fr": {
                "name": "Moi",
                "text": "Une romance secrète."
            }
        }
    },
    "day4_night_teacher_farewell_4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_farewell_5",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"응. 그러니까… 학교에서 다른 여자애들이랑 너무 친하게 지내지 마.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "Yeah. So... don't get too close to other girls at school."
            },
            "es": {
                "name": "Profesora",
                "text": "\"Sí. Así que... no te acerques demasiado a otras chicas en la escuela.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"うん。だから…学校で他の女の子と仲良くしすぎないでね。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "Oui. Alors... ne te rapproche pas trop des autres filles à l'école."
            }
        }
    },
    "day4_night_teacher_farewell_5": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_smile.png",
        "night": true,
        "next": "day4_night_teacher_farewell_6",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"선생님 권한으로 널 어떻게 괴롭힐지 모르니까. 알았지?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "You never know how I might torment you using my authority as a teacher. Got it?"
            },
            "es": {
                "name": "Profesora",
                "text": "\"Nunca sabes cómo podría atormentarte usando mi autoridad como profesora. ¿Entendido?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"先生の権限であなたをどう苦しめるかわからないよ。わかった？\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "Tu ne sais pas comment je pourrais te tourmenter en utilisant mon autorité de professeure. Compris ?"
            }
        }
    },
    "day4_night_teacher_farewell_6": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_home",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…내일 봐. 나의 공범.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "...See you tomorrow. My accomplice."
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Nos vemos mañana. Mi cómplice.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…また明日ね。私の共犯者。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "...À demain. Mon complice."
            }
        }
    },
    "day4_night_teacher_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "day4_night_teacher_home_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집에 돌아왔다. 카페에서의 선생님 모습이 떠오른다. 항상 당당하고 완벽했던 선생님이… 한 명의 여자로서 보여준 눈물과 떨림.*"
            },
            "en": {
                "name": "Me",
                "text": "*Back home. The image of her at the café keeps coming back to me. The always confident, perfect teacher... showing her tears and vulnerability as just a woman.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Volví a casa. La imagen de ella en el café sigue repitiéndose. La profesora siempre segura y perfecta... mostrando sus lágrimas y vulnerabilidad como solo una mujer.*"
            },
            "ja": {
                "name": "僕",
                "text": "*家に帰ってきた。カフェでの先生の姿が浮かんでくる。いつも堂々として完璧だった先生が…ひとりの女性として見せた涙と震え。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*De retour chez moi. Son image au café me revient sans cesse. La professeure toujours sûre d'elle, parfaite... montrant ses larmes et sa vulnérabilité en tant que simple femme.*"
            }
        }
    },
    "day4_night_teacher_home_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "fade": true,
        "next": "day4_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이 비밀은 무겁지만… 그만큼 소중하다. 선생님의 그 마음을 절대 가볍게 여기지 않을 거다.*"
            },
            "en": {
                "name": "Me",
                "text": "*This secret is daunting... but it's precious. I'll never take her feelings lightly.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Este secreto es abrumador... pero es precioso. Nunca tomaré sus sentimientos a la ligera.*"
            },
            "ja": {
                "name": "僕",
                "text": "*この秘密は重いけど…それだけ大切だ。先生のあの気持ちを絶対に軽く考えない。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Ce secret est redoutable... mais il est précieux. Je ne prendrai jamais ses sentiments à la légère.*"
            }
        }
    },
    "day4_night_nurse_msg": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "bgm": "night1.mp3",
        "next": "day4_night_nurse_msg_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*밤 10시. 보건선생님한테 메시지가 왔다. '아직 안 잤지? 시간 되면 잠깐 나올 수 있어?'*"
            },
            "en": {
                "name": "Me",
                "text": "*10 PM. A message from the nurse. 'Still up? Can you come out for a bit if you have time?'*"
            },
            "es": {
                "name": "Yo",
                "text": "*10 PM. Un mensaje de la enfermera. '¿Sigues despierto? ¿Puedes salir un momento si tienes tiempo?'*"
            },
            "ja": {
                "name": "僕",
                "text": "*夜10時。保健の先生からメッセージが来た。「まだ起きてる？時間あったらちょっと出てこれる？」*"
            },
            "fr": {
                "name": "Moi",
                "text": "*22 heures. Un message de l'infirmière. 'Encore debout ? Tu peux sortir un peu si tu as le temps ?'*"
            }
        }
    },
    "day4_night_nurse_msg_2": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_nurse_msg_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…평소처럼 장난스러운 메시지인데, 왜 이 시간에? 뭔가 이상하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...Her usual playful message, but why this late? Something feels off.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...Su mensaje juguetón de siempre, pero ¿por qué tan tarde? Algo se siente raro.*"
            },
            "ja": {
                "name": "僕",
                "text": "*…いつもみたいなふざけたメッセージだけど、なんでこの時間に？なんか変だ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Son message joueur habituel, mais pourquoi si tard ? Quelque chose ne va pas.*"
            }
        }
    },
    "day4_night_nurse_msg_3": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_nurse_msg_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*곧바로 답장했다. '어디로 가면 돼요?'*"
            },
            "en": {
                "name": "Me",
                "text": "*I replied right away. 'Where should I go?'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Respondí enseguida. '¿Dónde voy?'*"
            },
            "ja": {
                "name": "僕",
                "text": "*すぐに返信した。「どこに行けばいいですか？」*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai répondu tout de suite. 'Où est-ce que je dois aller ?'*"
            }
        }
    },
    "day4_night_nurse_msg_4": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_nurse_arrive",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*'학교 보건실. 뒷문 열어둘게.' …보건실에서?*"
            },
            "en": {
                "name": "Me",
                "text": "*'The nurse's office at school. I'll leave the back door open.' ...The nurse's office?*"
            },
            "es": {
                "name": "Yo",
                "text": "*'La enfermería de la escuela. Dejaré la puerta trasera abierta.' ...¿La enfermería?*"
            },
            "ja": {
                "name": "僕",
                "text": "*「学校の保健室。裏口開けとくね。」…保健室で？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*'L'infirmerie de l'école. Je laisserai la porte de derrière ouverte.' ...L'infirmerie ?*"
            }
        }
    },
    "day4_night_nurse_arrive": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_arrive_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학교에 도착했다. 보건실 문을 열자, 작은 스탠드 하나만 켜진 어두운 방 안에 선생님이 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I arrived at the school. When I opened the nurse's office door, the room was dark with only a small lamp on. She was there.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Llegué a la escuela. Al abrir la puerta de la enfermería, el cuarto estaba oscuro con solo una pequeña lámpara encendida. Ella estaba ahí.*"
            },
            "ja": {
                "name": "僕",
                "text": "*学校に着いた。保健室のドアを開けると、小さなスタンドライトだけが灯る暗い部屋に先生がいた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je suis arrivé à l'école. Quand j'ai ouvert la porte de l'infirmerie, la pièce était sombre, éclairée seulement par une petite lampe. Elle était là.*"
            }
        }
    },
    "day4_night_nurse_arrive_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_arrive_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"와, 진짜 나왔네. 한밤중에 불러내도 와주는 거야?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Wow, you actually came. Even though I called you out this late?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Wow, de verdad viniste. ¿Aunque te llamé tan tarde?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"わぁ、本当に来たんだ。こんな夜中に呼び出しても来てくれるの？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Waouh, tu es vraiment venu. Même si je t'ai fait venir si tard ?\\\""
            }
        }
    },
    "day4_night_nurse_arrive_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_nurse_tired",
                "stats": {
                    "Nurse": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day4_night_nurse_real_reason",
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
                "text": "*평소처럼 장난스럽게 웃고 있는데… 눈 밑에 다크서클이 짙다. 그리고 책상 위에 빈 커피캔이 여러 개.*",
                "choices": [
                    "\"선생님, 많이 피곤해 보여요\"",
                    "\"진짜 이유가 뭐예요?\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*She's smiling as usual, but... there are dark circles under her eyes. And several empty coffee cans on the desk.*",
                "choices": [
                    "\"You look really tired\"",
                    "\"What's the real reason you called me here?\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Está sonriendo como siempre, pero... tiene ojeras oscuras. Y varias latas de café vacías en el escritorio.*",
                "choices": [
                    "\"Se ve muy cansada\"",
                    "\"¿Cuál es la verdadera razón por la que me llamó aquí?\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*いつもみたいにふざけて笑ってるけど…目の下にクマが濃い。そして机の上に空のコーヒー缶がいくつも。*",
                "choices": [
                    "\"先生、すごく疲れて見えますよ\"",
                    "\"本当の理由は何ですか？\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Elle sourit comme d'habitude, mais... il y a des cernes sous ses yeux. Et plusieurs canettes de café vides sur le bureau.*",
                "choices": [
                    "\\\"Tu as l'air vraiment fatiguée\\\"",
                    "\\\"C'est quoi la vraie raison pour laquelle tu m'as fait venir ?\\\""
                ]
            }
        }
    },
    "day4_night_nurse_tired": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_mask",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"그래? 요즘 좀 정신없었나 봐. 괜찮아, 별거 아니야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Think so? It's been a hectic week. I'm fine though, really.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"¿Tú crees? Ha sido una semana agitada. Pero estoy bien, de verdad.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"そう？最近ちょっとバタバタしてたかも。大丈夫、大したことないよ。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Tu trouves ? C'était une semaine mouvementée. Mais ça va, vraiment.\\\""
            }
        }
    },
    "day4_night_nurse_real_reason": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_mask",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…진짜 이유? …보고 싶었으니까.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...The real reason? ...I wanted to see you.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...¿La verdadera razón? ...Quería verte.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…本当の理由？…会いたかったから。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...La vraie raison ? ...Je voulais te voir.\\\""
            }
        }
    },
    "day4_night_nurse_mask": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_mask_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 웃고 있지만, 어딘가 무리하고 있다는 느낌이 든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*She's smiling, but something feels forced. Like she's pushing too hard.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Está sonriendo, pero algo se siente forzado. Como si se estuviera esforzando demasiado.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生は笑っているけど、どこか無理している感じがする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Elle sourit, mais quelque chose semble forcé. Comme si elle en faisait trop.*"
            }
        }
    },
    "day4_night_nurse_mask_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_mask_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…있잖아, 오늘 학교에서 좀 힘든 일이 있었어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Actually, something kind of tough happened at school today.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...En realidad, hoy pasó algo difícil en la escuela.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…あのね、今日学校でちょっと辛いことがあって。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...En fait, un truc un peu dur s'est passé à l'école aujourd'hui.\\\""
            }
        }
    },
    "day4_night_nurse_mask_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_mask_4",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"다른 선생님들이 그러더라. '보건 선생님은 항상 밝아서 좋겠다, 고민 없어 보인다'고.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"The other teachers said, 'The nurse is always so cheerful—must be nice having no worries.'\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Los otros profesores dijeron: 'La enfermera siempre es tan alegre—debe ser lindo no tener preocupaciones.'\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"他の先生たちに言われたの。『保健の先生はいつも明るくていいね、悩みなさそう』って。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Les autres profs ont dit : 'L'infirmière est toujours si joyeuse — ça doit être bien de ne pas avoir de soucis.'\\\""
            }
        }
    },
    "day4_night_nurse_mask_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_mask_5",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…고민 없어 보인다. 하하. 그 말이 제일 아팠어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...'No worries.' Haha. That one... actually stung the most.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...'Sin preocupaciones.' Jaja. Eso... fue lo que más dolió.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…悩みなさそう。あはは。その言葉が一番痛かった。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...'Pas de soucis.' Haha. Celle-là... c'est celle qui a fait le plus mal.\\\""
            }
        }
    },
    "day4_night_nurse_mask_5": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_mask_6",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"나도 힘든데… 아무도 안 물어보더라. '괜찮아?' 한마디.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"I was struggling too... but nobody asked. Not even once. Not a single 'are you okay?'\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Yo también estaba pasándola mal... pero nadie preguntó. Ni una vez. Ni un solo '¿estás bien?'\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"私だって辛いのに…誰も聞いてくれないんだよね。『大丈夫？』のひとことも。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Moi aussi j'avais du mal... mais personne n'a demandé. Pas une seule fois. Pas un seul 'ça va ?'\\\""
            }
        }
    },
    "day4_night_nurse_mask_6": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_lonely",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"보건실에 아이들이 올 때마다 웃어주고, 다독여주고. 근데… 나는 누가 다독여주지?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"In the nurse's office, kids come in and I smile for them, take care of them. But... who takes care of me?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"En la enfermería, los chicos vienen y les sonrío, los cuido. Pero... ¿quién me cuida a mí?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"保健室に子供たちが来るたびに笑顔で接して、癒してあげて。でも…私のことは誰が癒してくれるの？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"À l'infirmerie, les élèves viennent et je leur souris, je prends soin d'eux. Mais... qui prend soin de moi ?\\\""
            }
        }
    },
    "day4_night_nurse_lonely": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_lonely_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…집에 가면 아무도 없어. 혼자 사니까.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...When I go home, there's nobody. I live alone.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...Cuando llego a casa, no hay nadie. Vivo sola.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…家に帰っても誰もいないの。一人暮らしだから。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...Quand je rentre chez moi, il n'y a personne. Je vis seule.\\\""
            }
        }
    },
    "day4_night_nurse_lonely_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_lonely_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"그래서… 자꾸 학교에 늦게까지 남게 되더라. 이 보건실이라도 있으면 외롭지 않으니까.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"So... I started staying late at school. At least in this nurse's office, I don't feel so alone.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Entonces... empecé a quedarme tarde en la escuela. Al menos en esta enfermería, no me siento tan sola.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"だから…つい学校に遅くまで残っちゃう。この保健室にいれば寂しくないから。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Alors... j'ai commencé à rester tard à l'école. Au moins dans cette infirmerie, je ne me sens pas si seule.\\\""
            }
        }
    },
    "day4_night_nurse_lonely_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_lonely_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 웃음을 멈췄다. 처음으로 장난기 없는, 진짜 얼굴을 보여주고 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Her smile faded. For the first time, she's showing me her real face—without the jokes, without the teasing.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Su sonrisa desapareció. Por primera vez, me muestra su verdadero rostro—sin bromas, sin burlas.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生が笑顔をやめた。初めてふざけない、本当の顔を見せてくれている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Son sourire s'est effacé. Pour la première fois, elle me montre son vrai visage — sans les blagues, sans les taquineries.*"
            }
        }
    },
    "day4_night_nurse_lonely_choice": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_nurse_hug",
                "stats": {
                    "Nurse": {
                        "affinity": 20
                    }
                },
                "setFlag": "day4_hugged_nurse"
            },
            {
                "next": "day4_night_nurse_care",
                "stats": {
                    "Nurse": {
                        "affinity": 15
                    }
                },
                "setFlag": "day4_nurse_cared"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 진짜 모습이 보인다. 뭐라고 해야 할까.*",
                "choices": [
                    "옆에 앉아서 안아준다",
                    "\"이제는 제가 선생님을 돌봐드릴게요\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*I can see the real her now. What do I say?*",
                "choices": [
                    "Sit beside her and hold her",
                    "\"From now on, I'll be the one to take care of you\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Puedo ver a la verdadera ella ahora. ¿Qué digo?*",
                "choices": [
                    "Sentarse a su lado y abrazarla",
                    "\"De ahora en adelante, yo cuidaré de usted\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*先生の本当の姿が見える。なんて言えばいいんだろう。*",
                "choices": [
                    "隣に座って抱きしめる",
                    "\"これからは僕が先生のことを看てあげますよ\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Je peux voir la vraie elle maintenant. Que dire ?*",
                "choices": [
                    "S'asseoir à côté d'elle et la serrer dans ses bras",
                    "\\\"Désormais, c'est moi qui prendrai soin de toi\\\""
                ]
            }
        }
    },
    "day4_night_nurse_hug": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_hug_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"……!!\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"......!!\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...!!\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"……！！\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...... !!\\\""
            }
        }
    },
    "day4_night_nurse_hug_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_hug_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…야, 갑자기… 뭐야…\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Hey, all of a sudden... what are you...\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...Oye, de repente... ¿qué haces...\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…ちょっと、急に…何…\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...Hé, tout d'un coup... qu'est-ce que tu...\\\""
            }
        }
    },
    "day4_night_nurse_hug_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_hug_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 처음에는 당황했지만… 곧 내 옷을 꼭 쥐었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*She was startled at first... but soon her hands gripped my clothes tightly.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al principio se sorprendió... pero pronto sus manos se aferraron a mi ropa con fuerza.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生は最初戸惑ったけど…すぐに僕の服をぎゅっと握った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Elle a d'abord été surprise... mais bientôt ses mains ont agrippé mes vêtements.*"
            }
        }
    },
    "day4_night_nurse_hug_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_hug_5",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…이상해. 내가 남한테 안기고 싶었던 적이 있었나.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...This is weird. Have I ever wanted someone to hold me like this before?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...Qué raro. ¿Alguna vez había querido que alguien me abrazara así?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…変だな。人に抱きしめてもらいたいと思ったこと、あったっけ。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...C'est bizarre. Est-ce que j'ai déjà voulu que quelqu'un me serre comme ça ?\\\""
            }
        }
    },
    "day4_night_nurse_hug_5": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_truth",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…조금만 이러고 있자. 조금만.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Let's just stay like this. Just a little while.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...Quedémonos así. Solo un ratito.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…もうちょっとだけこのままでいよう。ちょっとだけ。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...Restons juste comme ça. Encore un peu.\\\""
            }
        }
    },
    "day4_night_nurse_care": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_care_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…뭐? 네가 나를?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...What? You'll take care of me?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...¿Qué? ¿Tú cuidarás de mí?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…え？あなたが私を？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...Quoi ? Tu prendras soin de moi ?\\\""
            }
        }
    },
    "day4_night_nurse_care_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_care_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"선생님은 항상 다른 사람을 돌보잖아요. 이제는 돌봄 받을 차례예요.\""
            },
            "en": {
                "name": "Me",
                "text": "\"You always take care of everyone else. It's your turn to be taken care of.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Usted siempre cuida a los demás. Es su turno de ser cuidada.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"先生はいつも他の人を看ているじゃないですか。今度は看てもらう番ですよ。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Tu prends toujours soin des autres. C'est à ton tour qu'on prenne soin de toi.\\\""
            }
        }
    },
    "day4_night_nurse_care_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_care_4",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…하하. 어쩜 이렇게 정곡을 찌르니.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Ha. How do you always hit me right where it hurts?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...Ja. ¿Cómo siempre das justo en el blanco?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…あはは。よくそうやって急所突いてくるよね。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...Ha. Comment tu fais pour toujours toucher là où ça fait mal ?\\\""
            }
        }
    },
    "day4_night_nurse_care_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_truth",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…진짜 그래줄 거야?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Do you really mean that?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...¿De verdad lo harás?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…本当にそうしてくれる？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...Tu le penses vraiment ?\\\""
            }
        }
    },
    "day4_night_nurse_truth": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_truth_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…사실 나, 보건 교사가 된 이유가 있어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Actually, there's a reason I became a school nurse.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...En realidad, hay una razón por la que me hice enfermera escolar.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…実は、保健教師になった理由があるの。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...En fait, il y a une raison pour laquelle je suis devenue infirmière scolaire.\\\""
            }
        }
    },
    "day4_night_nurse_truth_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_truth_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"고등학교 때, 친한 친구가 아파서 오래 결석했거든. 그때 보건실 선생님이 정말 잘 챙겨줬어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"In high school, a close friend of mine got sick and was absent for a long time. The school nurse back then really took care of her.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"En la secundaria, una amiga cercana se enfermó y estuvo ausente mucho tiempo. La enfermera escolar de ese entonces realmente cuidó de ella.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"高校の時、仲のいい友達が病気で長い間欠席したの。その時の保健室の先生が本当によく面倒見てくれて。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Au lycée, une amie proche est tombée malade et a été absente longtemps. L'infirmière scolaire de l'époque a vraiment pris soin d'elle.\\\""
            }
        }
    },
    "day4_night_nurse_truth_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_truth_4",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"나도 그런 사람이 되고 싶었어. 아픈 아이들의 편이 되어주는 사람.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"I wanted to be someone like that too. Someone who's there for kids when they're hurting.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Yo también quería ser alguien así. Alguien que esté ahí para los chicos cuando están sufriendo.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"私もそういう人になりたかった。辛い子たちの味方になれる人。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Je voulais être quelqu'un comme ça aussi. Quelqu'un qui est là pour les jeunes quand ils souffrent.\\\""
            }
        }
    },
    "day4_night_nurse_truth_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_truth_5",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"근데 막상 되고 보니까… '보건 선생님은 장난이나 치는 사람' 취급이더라.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"But in reality... they just saw me as 'the nurse who jokes around.' Not a real teacher.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Pero en realidad... me veían como 'la enfermera que hace chistes.' No como una profesora de verdad.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"でもいざなってみたら…『冗談ばかり言う保健の先生』扱い。本物の先生じゃないって。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Mais en réalité... ils me voyaient juste comme 'l'infirmière qui rigole tout le temps.' Pas une vraie enseignante.\\\""
            }
        }
    },
    "day4_night_nurse_truth_5": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_truth_6",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"진지하게 굴면 분위기 망친다고 하니까… 자연스럽게 웃음으로 감추게 됐어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"They said being serious would ruin the vibe, so... I naturally started hiding behind laughs.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Dijeron que ser seria arruinaría el ambiente, así que... naturalmente empecé a esconderme detrás de risas.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"真面目にすると雰囲気壊すって言われるから…自然と笑いで隠すようになった。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"On disait qu'être sérieuse gâcherait l'ambiance, alors... j'ai naturellement commencé à me cacher derrière les rires.\\\""
            }
        }
    },
    "day4_night_nurse_truth_6": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_truth_choice",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…너한테도 그랬어. 장난치면서 다가갔지. 진심을 보여주는 게… 무서웠으니까.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...I did the same with you. Approaching you with jokes and teasing. Because showing my real feelings... was terrifying.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...Contigo hice lo mismo. Acercándome con bromas. Porque mostrar mis verdaderos sentimientos... me aterraba.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…あなたにもそうだった。ふざけながら近づいた。本心を見せるのが…怖かったから。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...J'ai fait pareil avec toi. T'approcher avec des blagues et des taquineries. Parce que montrer mes vrais sentiments... c'était terrifiant.\\\""
            }
        }
    },
    "day4_night_nurse_truth_choice": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_nurse_accept_all",
                "stats": {
                    "Nurse": {
                        "affinity": 20
                    }
                }
            },
            {
                "next": "day4_night_nurse_thanks",
                "stats": {
                    "Nurse": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "day4_night_nurse_safe",
                "stats": {
                    "Nurse": {
                        "affinity": 18
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 목소리가 떨리고 있다.*",
                "choices": [
                    "\"장난치는 선생님도, 지금의 선생님도 다 좋아요\"",
                    "\"진심을 보여줘서 고마워요\"",
                    "\"이제 안 무서워해도 돼요. 제가 있으니까\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Her voice is trembling.*",
                "choices": [
                    "\"I love the playful you and the real you—all of it\"",
                    "\"Thank you for showing me the real you\"",
                    "\"You don't have to be scared anymore. I'm here\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Su voz está temblando.*",
                "choices": [
                    "\"Me gusta la tú juguetona y la tú real—todo\"",
                    "\"Gracias por mostrarme tu verdadero yo\"",
                    "\"Ya no tienes que tener miedo. Estoy aquí\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*先生の声が震えている。*",
                "choices": [
                    "\"ふざけてる先生も、今の先生も、全部好きですよ\"",
                    "\"本心を見せてくれてありがとうございます\"",
                    "\"もう怖がらなくていいですよ。僕がいますから\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Sa voix tremble.*",
                "choices": [
                    "\\\"J'aime la toi espiègle et la vraie toi — tout\\\"",
                    "\\\"Merci de me montrer la vraie toi\\\"",
                    "\\\"Tu n'as plus besoin d'avoir peur. Je suis là\\\""
                ]
            }
        }
    },
    "day4_night_nurse_accept_all": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_accept_all_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…다 좋다고?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...All of it?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...¿Todo?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…全部？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...Tout ?\\\""
            }
        }
    },
    "day4_night_nurse_accept_all_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_accept_all_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…그렇게 말해주는 사람은 네가 처음이야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...You're the first person who's ever said that to me.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...Eres la primera persona que me dice eso.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…そう言ってくれたのは、あなたが初めて。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...Tu es la première personne à m'avoir dit ça.\\\""
            }
        }
    },
    "day4_night_nurse_accept_all_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_resolve",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…처음이라서 어떻게 반응해야 할지 모르겠네.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...I don't even know how to react. This is a first.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...Ni siquiera sé cómo reaccionar. Es la primera vez.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…初めてだから、どう反応していいかわかんない。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...Je ne sais même pas comment réagir. C'est une première.\\\""
            }
        }
    },
    "day4_night_nurse_thanks": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_thanks_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…고맙다고? 내가?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Thankful? To me?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...¿Agradecida? ¿A mí?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…ありがとう？私に？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...Reconnaissant ? Envers moi ?\\\""
            }
        }
    },
    "day4_night_nurse_thanks_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_resolve",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…너한테 진심을 보여주는 게 이렇게 편할 줄 몰랐어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...I didn't know being honest with you could feel this comfortable.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...No sabía que ser honesta contigo podía sentirse tan cómodo.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…あなたに本心を見せるのがこんなに楽だとは思わなかった。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...Je ne savais pas qu'être honnête avec toi pouvait être aussi apaisant.\\\""
            }
        }
    },
    "day4_night_nurse_safe": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_safe_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…안 무서워해도 된다고?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...I don't have to be scared?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...¿No tengo que tener miedo?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…怖がらなくていいの？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...Je n'ai plus besoin d'avoir peur ?\\\""
            }
        }
    },
    "day4_night_nurse_safe_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_resolve",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…어쩌면 너한테가 제일 편한 건지 모르겠다. 이상하게.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Maybe you're the person I feel most at ease with. Funny how that works.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...Tal vez eres la persona con la que me siento más cómoda. Curioso cómo funciona eso.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…もしかしたらあなたが一番楽なのかも。不思議だよね。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...Tu es peut-être la personne avec qui je me sens le plus à l'aise. C'est drôle, non ?\\\""
            }
        }
    },
    "day4_night_nurse_resolve": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_resolve_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…있잖아.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...You know what?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...¿Sabes qué?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…あのね。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...Tu sais quoi ?\\\""
            }
        }
    },
    "day4_night_nurse_resolve_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_resolve_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"이제부터 너한테는 가면 안 쓸게. 대신… 널 영원히 이 보건실에 가둬두고 싶어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "I won't wear a mask in front of you anymore. Instead... I want to lock you in this infirmary forever."
            },
            "es": {
                "name": "Enfermera",
                "text": "\"No usaré una máscara frente a ti nunca más. En cambio... quiero encerrarte en esta enfermería para siempre.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"これからはあなたの前ではもう仮面はつけない。その代わり…あなたをこの保健室に永遠に閉じ込めたい。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "Je ne porterai plus de masque devant toi. En échange... je veux t'enfermer dans cette infirmerie pour toujours."
            }
        }
    },
    "day4_night_nurse_resolve_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_resolve_4",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"내가 평생 간호해 줄 테니까… 네가 계속 아팠으면 좋겠어. 나만 의지하게.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "I'll nurse you for the rest of my life... so I want you to keep being sick. So you only rely on me."
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Te cuidaré por el resto de mi vida... así que quiero que sigas enfermo. Para que solo dependas de mí.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"一生看病してあげるから…ずっと体調悪くしててほしい。私だけに頼るように。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "Je te soignerai toute ma vie... alors je veux que tu restes malade. Pour que tu ne comptes que sur moi."
            }
        }
    },
    "day4_night_nurse_resolve_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_resolve_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"……선생님?\""
            },
            "en": {
                "name": "Me",
                "text": "......Teacher?"
            },
            "es": {
                "name": "Yo",
                "text": "\"...¿Profesora?\""
            },
            "ja": {
                "name": "僕",
                "text": "\"……先生？\""
            },
            "fr": {
                "name": "Moi",
                "text": "......Professeure ?"
            }
        }
    },
    "day4_night_nurse_resolve_end": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "setFlag": "day4_nurse_mask_off",
        "next": "day4_night_nurse_farewell",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"농담이야. …반쯤은. 그러니까 다치면 무조건 나한테 와. 다른 데 가면 진짜 화낼 거야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "I'm joking. ...Half joking. So if you get hurt, come straight to me. If you go anywhere else, I'll be really mad."
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Es broma. ...A medias. Así que si te lastimas, ven directo a mí. Si vas a otro lado, me enojaré de verdad.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"冗談だよ。…半分は。だから怪我したら絶対私のところに来てね。よそに行ったら本気で怒るから。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "Je plaisante. ...À moitié. Alors si tu te blesses, viens directement me voir. Si tu vas ailleurs, je serai vraiment en colère."
            }
        }
    },
    "day4_night_nurse_farewell": {
        "character": "assets/images/characters/nurse_shy.png",
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "day4_night_nurse_farewell_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건실을 나와서 학교 밖으로 걸었다. 선생님이 내 팔짱을 꽉 끼고 놓아주지 않았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We left the infirmary and walked out of the school. The teacher linked her arm tightly with mine and wouldn't let go.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Salimos de la enfermería y caminamos fuera de la escuela. La profesora enlazó su brazo fuertemente con el mío y no me soltaba.*"
            },
            "ja": {
                "name": "僕",
                "text": "*保健室を出て学校の外を歩いた。先生が僕の腕をぎゅっと組んで離さなかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Nous avons quitté l'infirmerie et sommes sortis de l'école. Elle a enlacé mon bras fermement et ne voulait pas lâcher.*"
            }
        }
    },
    "day4_night_nurse_farewell_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_farewell_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…내일 학교 오면, 제일 먼저 보건실부터 들러. 출석 체크할 거니까.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "...When you come to school tomorrow, drop by the infirmary first. I'll be checking attendance."
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...Cuando vengas a la escuela mañana, pasa primero por la enfermería. Voy a tomar asistencia.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…明日学校来たら、一番に保健室に寄ってね。出席チェックするから。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "...Quand tu viendras à l'école demain, passe d'abord par l'infirmerie. Je prendrai les présences."
            }
        }
    },
    "day4_night_nurse_farewell_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_farewell_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"찌질한 게 아니라 솔직한 거예요.\""
            },
            "en": {
                "name": "Me",
                "text": "\"That wasn't uncool—that was honest.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Eso no fue patético—fue honesto.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"ダサいんじゃなくて、素直なんですよ。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Ce n'était pas gênant — c'était honnête.\\\""
            }
        }
    },
    "day4_night_nurse_farewell_4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_farewell_5",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…하. 너 앞에서는 자꾸 솔직해지는 게 신기해. 나답지 않게.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...It's strange. Around you, I keep getting honest. That's not like me at all.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...Es extraño. A tu lado, sigo siendo honesta. Eso no es nada como yo.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…不思議。あなたの前だとどんどん素直になっちゃう。私らしくないのに。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...C'est étrange. Près de toi, je n'arrête pas d'être honnête. Ça ne me ressemble pas du tout.\\\""
            }
        }
    },
    "day4_night_nurse_farewell_5": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_farewell_6",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…다음에 학교에서 보면 또 평소처럼 굴 거야. 근데 눈은 속이지 못할걸.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...When we see each other at school again, I'll act normal. But my eyes won't be able to hide it.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...Cuando nos veamos en la escuela otra vez, actuaré normal. Pero mis ojos no podrán ocultarlo.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…学校でまた会ったら、いつも通りにするよ。でも目は誤魔化せないと思う。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...Quand on se reverra à l'école, j'agirai normalement. Mais mes yeux ne pourront pas le cacher.\\\""
            }
        }
    },
    "day4_night_nurse_farewell_6": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_home",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…그러니까 잘 봐. 보건실 앞을 지나갈 때… 한 번쯤은.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...So pay attention. When you walk past the nurse's office... just once.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...Así que presta atención. Cuando pases frente a la enfermería... aunque sea una vez.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…だからよく見てね。保健室の前を通る時…一回くらいは。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...Alors fais attention. Quand tu passeras devant l'infirmerie... juste un regard.\\\""
            }
        }
    },
    "day4_night_nurse_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "day4_night_nurse_home_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집에 돌아왔다. 보건실에서 본 선생님의 진짜 얼굴이 떠오른다. 항상 장난치며 웃던 사람이… 사실은 가장 외로웠던 사람.*"
            },
            "en": {
                "name": "Me",
                "text": "*Back home. The real face she showed me in the nurse's office keeps replaying. The person who was always joking and laughing... was actually the loneliest one of all.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Volví a casa. El verdadero rostro que me mostró en la enfermería sigue repitiéndose. La persona que siempre bromeaba y reía... en realidad era la más sola de todos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*家に帰ってきた。保健室で見た先生の本当の顔が浮かんでくる。いつもふざけて笑っていた人が…実は一番寂しかった人。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*De retour chez moi. Le vrai visage qu'elle m'a montré à l'infirmerie ne cesse de repasser. La personne qui blaguait et riait toujours... était en fait la plus solitaire de toutes.*"
            }
        }
    },
    "day4_night_nurse_home_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "fade": true,
        "next": "day4_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이제는 선생님이 혼자가 아니다. 내가 옆에 있으니까. 내일은 진짜 웃음을 볼 수 있겠지.*"
            },
            "en": {
                "name": "Me",
                "text": "*She's not alone anymore. I'm here. Tomorrow, I want to see her real smile.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Ya no está sola. Estoy aquí. Mañana, quiero ver su sonrisa real.*"
            },
            "ja": {
                "name": "僕",
                "text": "*もう先生はひとりじゃない。僕がいるから。明日は本当の笑顔が見れるといいな。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Elle n'est plus seule. Je suis là. Demain, je veux voir son vrai sourire.*"
            }
        }
    },
    "day4_night_regret": {
        "night": true,
        "next": "day4_night_regret_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…오늘 말할 수 있었는데. 그 석양 아래서, 완벽한 순간이었는데.*"
            },
            "en": {
                "name": "Me",
                "text": "*...I could have said it today. Under that sunset, it was the perfect moment.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...Pude haberlo dicho hoy. Bajo ese atardecer, era el momento perfecto.*"
            },
            "ja": {
                "name": "僕",
                "text": "*…今日言えたのに。あの夕焼けの下で、完璧な瞬間だったのに。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...J'aurais pu le dire aujourd'hui. Sous ce coucher de soleil, c'était le moment parfait.*"
            }
        }
    },
    "day4_night_regret_2": {
        "night": true,
        "next": "day4_night_regret_msg",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*괜찮아. 내일이 있으니까. 내일은 반드시… 마음을 전하자.*"
            },
            "en": {
                "name": "Me",
                "text": "*It's okay. There's tomorrow. Tomorrow, I'll definitely... tell them how I feel.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Está bien. Hay un mañana. Mañana, definitivamente... les diré lo que siento.*"
            },
            "ja": {
                "name": "僕",
                "text": "*大丈夫。明日がある。明日こそ必ず…気持ちを伝えよう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Ce n'est pas grave. Il y a demain. Demain, je vais... leur dire ce que je ressens, c'est sûr.*"
            }
        }
    },
    "day4_night_regret_msg": {
        "night": true,
        "next": "day4_night_regret_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(핸드폰에 메시지가 왔다. \"오늘 즐거웠어. 내일도 시간 괜찮아?\")"
            },
            "en": {
                "name": "Me",
                "text": "(A message came on my phone. \"I had fun today. Are you free tomorrow too?\")"
            },
            "es": {
                "name": "Yo",
                "text": "(Llegó un mensaje a mi teléfono. \"Me divertí hoy. ¿Estás libre mañana también?\")"
            },
            "ja": {
                "name": "僕",
                "text": "(スマホにメッセージが来た。「今日は楽しかった。明日も時間ある？」)"
            },
            "fr": {
                "name": "Moi",
                "text": "(Un message est arrivé sur mon téléphone. \\\"Je me suis bien amusé(e) aujourd'hui. Tu es libre demain aussi ?\\\")"
            }
        }
    },
    "day4_night_regret_reply": {
        "night": true,
        "next": "day4_night_sleep",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"응, 내일도 만나자.\" 꼭 내일은 말할 거야.)"
            },
            "en": {
                "name": "Me",
                "text": "(\"Yeah, let's meet tomorrow.\" I'll definitely say it tomorrow.)"
            },
            "es": {
                "name": "Yo",
                "text": "(\"Sí, veámonos mañana.\" Definitivamente lo diré mañana.)"
            },
            "ja": {
                "name": "僕",
                "text": "(「うん、明日も会おう。」明日こそ絶対言うんだ。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(\\\"Oui, retrouvons-nous demain.\\\" Je le dirai demain, c'est sûr.)"
            }
        }
    },
    "day4_night_reflect": {
        "night": true,
        "next": "day4_night_sleep",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*토요일이 이렇게 지나갔다. 내일은… 뭘 하지?*"
            },
            "en": {
                "name": "Me",
                "text": "*And just like that, Saturday passed. Tomorrow... what should I do?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Y así pasó el sábado. Mañana... ¿qué haré?*"
            },
            "ja": {
                "name": "僕",
                "text": "*土曜日がこうして過ぎていった。明日は…何しよう？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Et comme ça, le samedi est passé. Demain... que devrais-je faire ?*"
            }
        }
    },
    "day4_night_sleep": {
        "night": true,
        "fade": true,
        "next": "day4_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 감으면 그 사람의 얼굴이 떠오른다. 이대로 잠들어도 좋겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*When I close my eyes, their face appears. I wouldn't mind falling asleep like this.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cuando cierro los ojos, su rostro aparece. No me importaría quedarme dormido así.*"
            },
            "ja": {
                "name": "僕",
                "text": "*目を閉じるとあの人の顔が浮かぶ。このまま眠ってしまってもいい。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Quand je ferme les yeux, leur visage apparaît. Ça ne me dérangerait pas de m'endormir comme ça.*"
            }
        }
    },
    "day4_final": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "changeDay": 5,
        "next": "day5_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*토요일 밤이 깊어간다... 내일은 일요일, 마지막 날이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Saturday night deepens... Tomorrow is Sunday, the last day.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La noche del sábado se profundiza... Mañana es domingo, el último día.*"
            },
            "ja": {
                "name": "僕",
                "text": "*土曜の夜が更けていく…明日は日曜日、最後の日だ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La nuit de samedi s'approfondit... Demain, c'est dimanche, le dernier jour.*"
            }
        }
    }
});
