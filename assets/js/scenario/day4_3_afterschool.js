/**
 * ============================================================================
 * CUPID - day4_3_afterschool (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day4_3_afterschool.js + en_day4_3_afterschool.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

Object.assign(SCENARIO[4], {
    "day4_afternoon_start": {
        "background": "assets/images/background/street.png",
        "bgm": "sunset2.mp3",
        "sunset": true,
        "next": "day4_walk_together",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*카페를 나와 함께 거리를 걸었다. 어느새 오후가 되었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We left the café and walked together through the streets. Before I knew it, afternoon had arrived.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Salimos del café y caminamos juntos por las calles. Sin darme cuenta, ya era la tarde.*"
            },
            "ja": {
                "name": "僕",
                "text": "*カフェを出て一緒に街を歩いた。いつの間にか午後になっていた。*"
            }
        }
    },
    "day4_walk_together": {
        "background": "assets/images/background/street.png",
        "next": "day4_walk_street",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나란히 걸으며 주변을 둘러본다. 주말이라 거리에 사람이 꽤 많다. 웃음소리, 음악 소리, 달콤한 냄새가 뒤섞인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We walked side by side, looking around at the scenery. It was the weekend, so the streets were pretty crowded. Laughter, music, and sweet aromas all blended together.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Caminamos uno al lado del otro, mirando el paisaje. Era fin de semana, así que las calles estaban bastante llenas. Risas, música y aromas dulces se mezclaban.*"
            },
            "ja": {
                "name": "僕",
                "text": "*並んで歩きながら周りを見回す。週末だから通りにはかなり人が多い。笑い声、音楽、甘い匂いが入り混じる。*"
            }
        }
    },
    "day4_walk_street": {
        "background": "assets/images/background/street.png",
        "next": "day4_walk_market",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*쇼윈도에 비친 우리 모습이 보인다. 마치 진짜 커플처럼… 심장이 뜀박질한다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I caught our reflection in a shop window. We looked just like a real couple… My heart started racing.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Vi nuestro reflejo en un escaparate. Parecíamos una pareja de verdad… Mi corazón empezó a latir con fuerza.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ショーウィンドウに映った僕たちの姿が見える。まるで本物のカップルみたいで…心臓がドキドキした。*"
            }
        }
    },
    "day4_walk_market": {
        "background": "assets/images/background/street.png",
        "next": "day4_walk_food_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*골목 안쪽에 작은 시장이 보인다. 맛있는 냄새가 바람에 실려온다. 군침이 돈다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A small market came into view down a side alley. Delicious smells drifted in on the breeze. My mouth was watering.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al fondo de un callejón se veía un pequeño mercado. Olores deliciosos llegaban con la brisa. Se me hizo agua la boca.*"
            },
            "ja": {
                "name": "僕",
                "text": "*路地の奥に小さな市場が見える。美味しそうな匂いが風に乗ってくる。思わずお腹が鳴りそうだ。*"
            }
        }
    },
    "day4_walk_food_choice": {
        "background": "assets/images/background/street.png",
        "choices": [
            {
                "next": "day4_walk_food_share"
            },
            {
                "next": "day4_walk_food_look"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*길거리 음식 노점이 눈에 들어온다. 어떻게 할까?*",
                "choices": [
                    "\"하나 사서 나눠 먹을래?\"",
                    "\"맛있겠다… 좀만 구경하자.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*A street food stall caught my eye. What should I do?*",
                "choices": [
                    "\"Want to share one?\"",
                    "\"Looks delicious… Let's just browse for a bit.\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Un puesto de comida callejera me llamó la atención. ¿Qué debería hacer?*",
                "choices": [
                    "\"¿Quieres compartir uno?\"",
                    "\"Se ve delicioso… Solo miremos un poco.\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*屋台が目に入った。どうしよう？*",
                "choices": [
                    "「一つ買って分けない？」",
                    "「美味しそうだな…ちょっと見てみよう。」"
                ]
            }
        }
    },
    "day4_walk_food_share": {
        "background": "assets/images/background/street.png",
        "next": "day4_walk_close",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(붕어빵을 하나 사서 반으로 나눴다. 따끈한 김이 모락모락 올라온다. \"자, 반.\" 건네는 손이 살짝 떨렸다.)"
            },
            "en": {
                "name": "Me",
                "text": "(I bought a fish-shaped pastry and split it in half. Warm steam rose from it. \"Here, half for you.\" My hand trembled slightly as I offered it.)"
            },
            "es": {
                "name": "Yo",
                "text": "(Compré un pastelito con forma de pez y lo partí por la mitad. El vapor caliente subía. \"Toma, la mitad para ti.\" Mi mano tembló un poco al ofrecerlo.)"
            },
            "ja": {
                "name": "僕",
                "text": "(たい焼きを一つ買って半分に割った。温かい湯気がもくもくと立ち上る。「はい、半分。」渡す手が少し震えた。)"
            }
        }
    },
    "day4_walk_food_look": {
        "background": "assets/images/background/street.png",
        "next": "day4_walk_close",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*노점 앞에서 이것저것 구경하다가 어깨가 스쳤다. 심장이 덜컹한다. 모른 척했지만, 귀까지 빨개진 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As we browsed in front of the stall, our shoulders brushed against each other. My heart lurched. I pretended not to notice, but I'm pretty sure I was blushing up to my ears.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mientras mirábamos frente al puesto, nuestros hombros se rozaron. Mi corazón dio un vuelco. Fingí no darme cuenta, pero estoy seguro de que me sonrojé hasta las orejas.*"
            },
            "ja": {
                "name": "僕",
                "text": "*屋台の前であれこれ見ていたら、肩が触れた。心臓がドキッとする。知らないふりをしたけど、耳まで赤くなっていたと思う。*"
            }
        }
    },
    "day4_walk_close": {
        "background": "assets/images/background/street.png",
        "sunset": true,
        "next": "day4_walk_feelings",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나란히 걸으며 다시 큰길로 나왔다. 어느새 거리가 좀 한산해졌다. 석양빛이 건물 사이로 길게 드리워진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We walked side by side back out to the main road. The streets had grown quieter. The sunset's glow stretched long between the buildings.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Caminamos uno al lado del otro de vuelta a la calle principal. Las calles se habían tranquilizado. El resplandor del atardecer se extendía entre los edificios.*"
            },
            "ja": {
                "name": "僕",
                "text": "*並んで歩きながら大通りに戻った。いつの間にか通りは静かになっていた。夕日の光がビルの間に長く差し込んでいる。*"
            }
        }
    },
    "day4_walk_feelings": {
        "background": "assets/images/background/street.png",
        "next": "day4_afternoon_walk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이렇게 같이 걷는 것만으로도 이렇게 행복하다니. 옆에 있는 사람의 얼굴을 몰래 훔쳐본다. 뭔가… 말로 표현할 수 없는 감정이 차오른다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I can't believe just walking together like this can make me this happy. I stole a glance at the person beside me. Something… an emotion I couldn't put into words was welling up inside me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*No puedo creer que solo caminar juntos me haga tan feliz. Le eché un vistazo a la persona a mi lado. Algo… una emoción que no podía expresar con palabras crecía dentro de mí.*"
            },
            "ja": {
                "name": "僕",
                "text": "*こうして一緒に歩くだけでこんなに幸せだなんて。隣にいる人の顔をこっそり盗み見る。なんだか…言葉にできない感情が込み上げてくる。*"
            }
        }
    },
    "day4_afternoon_walk": {
        "background": "assets/images/background/street.png",
        "next": "day4_special_notice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나란히 걷는 게 이렇게 좋은 거였나. 손끝이 스칠 때마다 심장이 쿵쾅거린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I never knew walking side by side could feel this good. Every time our fingertips brushed, my heart pounded.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Nunca supe que caminar uno al lado del otro podía sentirse tan bien. Cada vez que nuestros dedos se rozaban, mi corazón latía con fuerza.*"
            },
            "ja": {
                "name": "僕",
                "text": "*並んで歩くのがこんなに良いものだったなんて。指先が触れるたびに心臓がドキドキする。*"
            }
        }
    },
    "day4_special_notice": {
        "background": "assets/images/background/street.png",
        "next": "day4_special_visit",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*걷다 보니 골목 안쪽에 분위기 있는 가게들이 눈에 들어왔다. 상대방이 한 곳을 가리켰다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As we walked, some charming shops tucked away in the alley caught my eye. My companion pointed at one of them.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mientras caminábamos, unas tiendas encantadoras escondidas en el callejón me llamaron la atención. Mi acompañante señaló una de ellas.*"
            },
            "ja": {
                "name": "僕",
                "text": "*歩いていると、路地の奥に雰囲気のあるお店が目に入った。相手が一軒を指差した。*"
            }
        }
    },
    "day4_special_visit": {
        "background": "assets/images/background/street.png",
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day4_special_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day4_special_yuna",
                "character": "Yuna"
            },
            {
                "next": "day4_special_dain",
                "character": "Dain"
            },
            {
                "next": "day4_special_nurse",
                "character": "Nurse"
            },
            {
                "next": "day4_special_teacher",
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
            }
        }
    },
    "day4_special_seoyeon": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day4_special_seoyeon_react",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"저기 봐, 꽃집이다! 잠깐 들어가 보자!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Look over there, a flower shop! Let's go check it out!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡Mira allí, una florería! ¡Vamos a verla!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "「あそこ見て、花屋さんだよ！ちょっと入ってみよう！」"
            }
        }
    },
    "day4_special_seoyeon_react": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "choices": [
            {
                "next": "day4_afternoon_special",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_afternoon_special",
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
                "text": "(서연이가 꽃들 사이에서 환하게 웃으며 작은 꽃 한 송이를 골라 내 앞에 내밀었다. \"이거, 너 줄게. 꽃말이… 비밀이야.\")",
                "choices": [
                    "\"서연이가 더 예뻐.\"",
                    "\"고마워, 소중히 간직할게.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "(Seoyeon beamed among the flowers, picked out a single blossom, and held it out to me. \"This one's for you. The flower meaning is… a secret.\")",
                "choices": [
                    "\"You're prettier than any flower.\"",
                    "\"Thank you, I'll treasure it.\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "(Seoyeon sonrió radiante entre las flores, eligió una y me la ofreció. \"Esta es para ti. El significado de la flor es… un secreto.\")",
                "choices": [
                    "\"Tú eres más bonita que cualquier flor.\"",
                    "\"Gracias, la guardaré con cariño.\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "(ソヨンが花の中で嬉しそうに笑いながら、小さな花を一輪選んで差し出してきた。「これ、あげる。花言葉は…秘密だよ。」)",
                "choices": [
                    "「ソヨンの方がずっと綺麗だよ。」",
                    "「ありがとう、大切にするね。」"
                ]
            }
        }
    },
    "day4_special_yuna": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day4_special_yuna_react",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…저기, 헌책방이다. 잠깐 들어가도 돼?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"…There's a used bookstore over there. Would it be okay if we stopped in?\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"…Hay una librería de segunda mano allá. ¿Podemos entrar un momento?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "「…あそこ、古本屋だ。ちょっと入ってもいい？」"
            }
        }
    },
    "day4_special_yuna_react": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_smile.png",
        "choices": [
            {
                "next": "day4_afternoon_special",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_afternoon_special",
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
                "text": "(유나가 낡은 책장 사이에서 한 권의 책을 조심스럽게 꺼냈다. \"이 책… 같이 읽고 싶었어.\" 유나의 눈이 부드럽게 빛났다.)",
                "choices": [
                    "\"같이 읽자. 매일 한 장씩.\"",
                    "\"유나가 고른 거라면 분명 좋은 책이겠지.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "(Yuna carefully pulled a book from the old shelves. \"This book… I wanted to read it together with you.\" Her eyes shimmered softly.)",
                "choices": [
                    "\"Let's read it together. One chapter a day.\"",
                    "\"If you picked it, I'm sure it's a great book.\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "(Yuna sacó cuidadosamente un libro de los estantes viejos. \"Este libro… quería leerlo contigo.\" Sus ojos brillaron suavemente.)",
                "choices": [
                    "\"Leámoslo juntos. Un capítulo por día.\"",
                    "\"Si tú lo elegiste, seguro es un gran libro.\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "(ユナが古い本棚から一冊の本をそっと取り出した。「この本…一緒に読みたかったの。」ユナの目が柔らかく光った。)",
                "choices": [
                    "「一緒に読もう。毎日一章ずつ。」",
                    "「ユナが選んだなら、きっといい本だよ。」"
                ]
            }
        }
    },
    "day4_special_dain": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day4_special_dain_react",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오! 스포츠용품점이다!! 잠깐만, 나 봐야 할 거 있어!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh! A sports store!! Hold on, there's something I need to check out!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Oh! ¡¡Una tienda de deportes!! ¡Espera, hay algo que tengo que ver!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "「お！スポーツ用品店だ！！ちょっと待って、見たいものがあるの！！」"
            }
        }
    },
    "day4_special_dain_react": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_shy.png",
        "choices": [
            {
                "next": "day4_afternoon_special",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_afternoon_special",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(다인이가 커플 손목밴드를 들고 신나게 뛰어왔다. \"이거 봐, 커플 밴드! 우리 하나씩 하자!\" 얼굴이 살짝 붉어져 있다.)",
                "choices": [
                    "\"좋아! 맞춰서 하자.\"",
                    "\"다인이가 골라줘, 센스 있으니까.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "(Dain came running over excitedly with matching wristbands. \"Look at these, couple wristbands! Let's each wear one!\" Her face was slightly flushed.)",
                "choices": [
                    "\"Sure! Let's match!\"",
                    "\"You pick them out, you've got great taste.\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "(Dain vino corriendo emocionada con unas pulseras a juego. \"¡Mira estas, pulseras de pareja! ¡Pongámonos una cada uno!\" Su cara estaba un poco sonrojada.)",
                "choices": [
                    "\"¡Claro! ¡Hagamos juego!\"",
                    "\"Tú elígelas, tienes buen gusto.\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "(ダインがカップルお揃いのリストバンドを持って嬉しそうに走ってきた。「これ見て、ペアバンド！一つずつつけよう！」顔がちょっと赤くなっている。)",
                "choices": [
                    "「いいね！お揃いにしよう。」",
                    "「ダインが選んでよ、センスいいから。」"
                ]
            }
        }
    },
    "day4_special_nurse": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day4_special_nurse_react",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, 저기 앤티크 숍이네. 같이 구경해 볼까?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh my, an antique shop over there. Shall we have a look?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Vaya, una tienda de antigüedades. ¿Entramos a ver?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "「あら、あそこにアンティークショップがあるわ。一緒に見てみない？」"
            }
        }
    },
    "day4_special_nurse_react": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/nurse_shy.png",
        "choices": [
            {
                "next": "day4_afternoon_special",
                "stats": {
                    "Nurse": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_afternoon_special",
                "stats": {
                    "Nurse": {
                        "affinity": 3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(선생님이 빈티지 브로치를 들어 햇빛에 비춰보며 미소 지었다. \"이거 예쁘지 않아? 왠지… 오래 간직하고 싶은 느낌.\")",
                "choices": [
                    "\"선생님한테 잘 어울릴 것 같아요. 제가 사드릴까요?\"",
                    "\"좋은 눈 가지셨네요. 진짜 예뻐요.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "(She held up a vintage brooch, tilting it in the sunlight with a smile. \"Isn't this pretty? Something about it… makes me want to keep it forever.\")",
                "choices": [
                    "\"It would look great on you. Can I buy it for you?\"",
                    "\"You have a good eye. It's really beautiful.\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "(Ella sostuvo un broche antiguo, inclinándolo a la luz del sol con una sonrisa. \"¿No es bonito? Algo en él… me hace querer guardarlo para siempre.\")",
                "choices": [
                    "\"Le quedaría muy bien. ¿Puedo comprárselo?\"",
                    "\"Tiene muy buen ojo. Es realmente hermoso.\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "(先生がヴィンテージのブローチを手に取り、日の光にかざして微笑んだ。「これ、素敵じゃない？なんだか…ずっと大切にしたい気持ちになるの。」)",
                "choices": [
                    "「先生に似合いそうです。僕が買いましょうか？」",
                    "「いい目してますね。本当に綺麗です。」"
                ]
            }
        }
    },
    "day4_special_teacher": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day4_special_teacher_react",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"잠깐, 저기 문구점 좀 들러도 될까? 펜이 하나 필요한데.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Wait, can we stop by that stationery store? I need a pen.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Espera, ¿podemos pasar por esa papelería? Necesito un bolígrafo.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "「ちょっと、あそこの文房具屋に寄ってもいい？ペンが一本欲しいの。」"
            }
        }
    },
    "day4_special_teacher_react": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/teacher_shy.png",
        "choices": [
            {
                "next": "day4_afternoon_special",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_afternoon_special",
                "stats": {
                    "Teacher": {
                        "affinity": 3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(선생님이 펜을 고르더니 잠시 멈칫하며 하나를 더 집었다. \"…이건 네 거. 수업 시간에 열심히 필기해. …선물이야.\" 고개를 돌렸지만 귀끝이 붉었다.)",
                "choices": [
                    "\"감사합니다. 매일 쓸게요.\"",
                    "\"선생님이 골라준 거라 더 특별하네요.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "(She was picking out a pen when she paused and grabbed another one. \"…This one's for you. Make sure you take good notes in class. …It's a gift.\" She turned away, but the tips of her ears were red.)",
                "choices": [
                    "\"Thank you. I'll use it every day.\"",
                    "\"It's even more special because you picked it out.\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "(Estaba eligiendo un bolígrafo cuando se detuvo y tomó otro. \"…Este es para ti. Asegúrate de tomar buenos apuntes en clase. …Es un regalo.\" Se dio la vuelta, pero las puntas de sus orejas estaban rojas.)",
                "choices": [
                    "\"Gracias. Lo usaré todos los días.\"",
                    "\"Es aún más especial porque lo elegiste tú.\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "(先生がペンを選んでいると、ふと手を止めてもう一本手に取った。「…これは君の分。授業中ちゃんとノート取りなさいよ。…プレゼントだから。」顔を背けたけど、耳の先が赤かった。)",
                "choices": [
                    "「ありがとうございます。毎日使います。」",
                    "「先生が選んでくれたから、もっと特別ですね。」"
                ]
            }
        }
    },
    "day4_afternoon_special": {
        "character": null,
        "background": "assets/images/background/park.png",
        "sunset": true,
        "next": "day4_afternoon_park",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(특별한 시간이었다. \"저기, 강변 공원 가볼래?\" 상대방이 먼저 제안했다.)"
            },
            "en": {
                "name": "Me",
                "text": "(It was a special time together. \"Hey, want to head to the riverside park?\" My companion suggested it first.)"
            },
            "es": {
                "name": "Yo",
                "text": "(Fue un momento especial juntos. \"Oye, ¿quieres ir al parque del río?\" Mi acompañante lo sugirió primero.)"
            },
            "ja": {
                "name": "僕",
                "text": "(特別な時間だった。「ねえ、川沿いの公園に行ってみない？」相手が先に提案してくれた。)"
            }
        }
    },
    "day4_afternoon_park": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "day4_sunset_approach",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*강변 공원에 도착하니 석양이 물 위에 반짝이고 있었다. 마치 영화 속 한 장면 같았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We arrived at the riverside park. The sunset was sparkling on the water. It looked like a scene straight out of a movie.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Llegamos al parque junto al río. El atardecer brillaba sobre el agua. Parecía una escena sacada de una película.*"
            },
            "ja": {
                "name": "僕",
                "text": "*川沿いの公園に着いた。夕日が水面にきらきらと輝いていた。まるで映画のワンシーンみたいだった。*"
            }
        }
    },
    "day4_sunset_approach": {
        "background": "assets/images/background/park.png",
        "character": null,
        "sunset": true,
        "next": "day4_sunset_colors",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*강변을 따라 천천히 걷는다. 수면 위로 석양빛이 일렁이며 금빛 물결을 만든다. 시간이 점점 느려지는 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We walked slowly along the riverbank. The sunset light shimmered across the water, painting golden ripples. Time seemed to slow down.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Caminamos lentamente por la orilla del río. La luz del atardecer se reflejaba en el agua, pintando ondas doradas. El tiempo parecía ir más lento.*"
            },
            "ja": {
                "name": "僕",
                "text": "*川沿いをゆっくり歩く。水面に夕焼けの光が揺らめいて、金色の波紋を描いている。時間がどんどんゆっくり流れていく気がする。*"
            }
        }
    },
    "day4_sunset_colors": {
        "background": "assets/images/background/park.png",
        "character": null,
        "sunset": true,
        "next": "day4_sunset_wind",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*하늘이 주황에서 분홍으로, 다시 보라빛으로 물들어 간다. 이런 하늘을 본 건 태어나서 처음인 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sky shifted from orange to pink, and then to violet. I don't think I've ever seen a sky this beautiful in my entire life.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El cielo cambió de naranja a rosa, y luego a violeta. Creo que nunca en mi vida había visto un cielo tan hermoso.*"
            },
            "ja": {
                "name": "僕",
                "text": "*空がオレンジからピンクに、そして紫色に染まっていく。こんな空を見たのは生まれて初めてかもしれない。*"
            }
        }
    },
    "day4_sunset_wind": {
        "background": "assets/images/background/park.png",
        "character": null,
        "sunset": true,
        "next": "day4_sunset_stare",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*따뜻한 바람이 스친다. 강가에서 불어오는 바람에 실려 풀냄새와 물냄새가 섞인다. 잔잔한 물소리가 배경음악처럼 흐른다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A warm breeze brushed past us. The wind from the river carried the scent of grass and water. The gentle sound of flowing water played like background music.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Una brisa cálida nos acarició. El viento del río traía el aroma de hierba y agua. El suave sonido del agua corría como música de fondo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*温かい風が吹き抜ける。川から吹く風に草の匂いと水の匂いが混ざる。穏やかな水の音がBGMのように流れている。*"
            }
        }
    },
    "day4_sunset_stare": {
        "background": "assets/images/background/park.png",
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day4_sunset_stare_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day4_sunset_stare_yuna",
                "character": "Yuna"
            },
            {
                "next": "day4_sunset_stare_dain",
                "character": "Dain"
            },
            {
                "next": "day4_sunset_stare_nurse",
                "character": "Nurse"
            },
            {
                "next": "day4_sunset_stare_teacher",
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
            }
        }
    },
    "day4_sunset_stare_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day4_afternoon_sunset",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이가 난간에 팔을 기대고 석양을 바라보고 있다. 바람에 머리카락이 흩날린다. 노을빛에 물든 그 옆모습이… 너무 예쁘다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon was leaning on the railing, gazing at the sunset. Her hair fluttered in the breeze. Her profile, bathed in the glow of the setting sun… was breathtakingly beautiful.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon estaba apoyada en la barandilla, contemplando el atardecer. Su cabello ondeaba con la brisa. Su perfil, bañado por el resplandor del sol poniente… era increíblemente hermoso.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンが手すりに腕をかけて夕日を眺めている。風に髪がなびく。夕焼けに染まったその横顔が…息を呑むほど綺麗だった。*"
            }
        }
    },
    "day4_sunset_stare_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day4_afternoon_sunset",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 조용히 석양을 바라보고 있다. 평소의 무표정한 얼굴이 부드럽게 풀어져 있다. 이런 표정은… 처음이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna was quietly watching the sunset. Her usually expressionless face had softened gently. I've… never seen her look like this before.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna observaba el atardecer en silencio. Su rostro usualmente inexpresivo se había suavizado. Nunca… la había visto así antes.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナが静かに夕日を眺めている。いつもの無表情が柔らかくほどけている。こんな表情は…初めてだ。*"
            }
        }
    },
    "day4_sunset_stare_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day4_afternoon_sunset",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(다인이가 \"와…\" 하고 작게 탄성을 질렀다. 평소 활발한 모습과 달리 가만히 석양을 바라보는 모습이 새삼 어른스럽다.)"
            },
            "en": {
                "name": "Me",
                "text": "*Dain let out a small gasp of awe. Unlike her usual energetic self, she stood still, gazing at the sunset. She looked unexpectedly mature.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dain dejó escapar un pequeño suspiro de asombro. A diferencia de su yo enérgico habitual, se quedó quieta contemplando el atardecer. Se veía inesperadamente madura.*"
            },
            "ja": {
                "name": "僕",
                "text": "(ダインが「わぁ…」と小さく感嘆の声を漏らした。いつもの元気な姿と違い、じっと夕日を見つめるその姿が意外と大人っぽかった。)"
            }
        }
    },
    "day4_sunset_stare_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day4_afternoon_sunset",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 눈을 가늘게 뜨고 석양을 바라보고 있다. 노을빛에 물든 그 모습이 마치 한 폭의 그림 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*She gazed at the sunset with her eyes gently narrowed. Bathed in the glow of the setting sun, she looked like a painting come to life.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Ella contemplaba el atardecer con los ojos entrecerrados. Bañada por el resplandor del sol poniente, parecía una pintura cobrada vida.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生が目を細めて夕日を眺めている。夕焼けに染まったその姿がまるで一枚の絵画のようだった。*"
            }
        }
    },
    "day4_sunset_stare_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day4_afternoon_sunset",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 조용히 난간에 기대어 강을 내려다보고 있다. 평소의 엄격한 모습은 온데간데없고, 부드러운 미소가 번지고 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*She leaned quietly against the railing, looking down at the river. Her usual strictness was nowhere to be seen, replaced by a soft, gentle smile.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Se apoyó silenciosamente en la barandilla, mirando el río. Su severidad habitual había desaparecido por completo, reemplazada por una sonrisa suave y gentil.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生が静かに手すりに寄りかかって川を見下ろしている。いつもの厳しさはどこにもなく、柔らかい微笑みが浮かんでいた。*"
            }
        }
    },
    "day4_afternoon_sunset": {
        "character": null,
        "bgm": "confession.mp3",
        "sunset": true,
        "next": "day4_afternoon_silence",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*석양빛이 그 사람의 얼굴을 비추고 있다. 이상하게 말이 나오질 않는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sunset was illuminating their face. Strangely, I couldn't find any words to say.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El atardecer iluminaba su rostro. Extrañamente, no podía encontrar palabras.*"
            },
            "ja": {
                "name": "僕",
                "text": "*夕日がその人の顔を照らしている。不思議と言葉が出てこない。*"
            }
        }
    },
    "day4_afternoon_silence": {
        "character": null,
        "sunset": true,
        "next": "day4_afternoon_feeling",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*……*"
            },
            "en": {
                "name": "Me",
                "text": "*……*"
            },
            "es": {
                "name": "Yo",
                "text": "*……*"
            },
            "ja": {
                "name": "僕",
                "text": "*……*"
            }
        }
    },
    "day4_afternoon_feeling": {
        "character": null,
        "sunset": true,
        "next": "day4_confession_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이 감정이 뭔지 이제는 확실히 알 것 같다. 전학 온 첫날부터 지금까지… 쭉 느끼고 있었던 거다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I think I finally know what this feeling is. From the very first day I transferred here until now… I've been feeling it all along.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Creo que por fin sé qué es este sentimiento. Desde el primer día que me transferí hasta ahora… lo he sentido todo este tiempo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*この感情が何なのか、もうはっきりわかった気がする。転校してきた初日からずっと…感じていたんだ。*"
            }
        }
    },
    "day4_confession_choice": {
        "character": null,
        "sunset": true,
        "choices": [
            {
                "next": "day4_confess",
                "setFlag": "day4_confessed"
            },
            {
                "next": "day4_wait",
                "setFlag": "day4_waited"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*지금 이 순간… 마음을 전할까?*",
                "choices": [
                    "\"할 말이 있어…\"  (고백한다)",
                    "\"…이 풍경 진짜 예쁘다.\"  (아직은 아니야)"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Right now, in this moment… should I tell them how I feel?*",
                "choices": [
                    "\"There's something I need to tell you…\"  (Confess)",
                    "\"…This view is really beautiful.\"  (Not yet)"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Ahora mismo, en este momento… ¿debería decirle lo que siento?*",
                "choices": [
                    "\"Hay algo que necesito decirte…\"  (Confesarse)",
                    "\"…Este paisaje es realmente hermoso.\"  (Todavía no)"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*今この瞬間…気持ちを伝えようか？*",
                "choices": [
                    "「言いたいことがあるんだ…」（告白する）",
                    "「…この景色、本当に綺麗だね。」（まだだ）"
                ]
            }
        }
    },
    "day4_confess": {
        "character": null,
        "sunset": true,
        "next": "day4_confess_heartbeat",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"사실… 전학 오고 나서 매일 생각한 사람이 있어.\""
            },
            "en": {
                "name": "Me",
                "text": "\"The truth is… ever since I transferred here, all I've thought about every day is you.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"La verdad es que… desde que me transferí aquí, en lo único que pienso cada día es en ti.\""
            },
            "ja": {
                "name": "僕",
                "text": "「実は…転校してきてから、毎日考えていた人がいるんだ。」"
            }
        }
    },
    "day4_confess_heartbeat": {
        "character": null,
        "sunset": true,
        "next": "day4_confess_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*심장이 미친 듯이 뛴다. 쿵, 쿵, 쿵. 이 소리가 상대방에게도 들리는 건 아닐까.*"
            },
            "en": {
                "name": "Me",
                "text": "*My heart was pounding like crazy. Thump, thump, thump. Can they hear it too?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mi corazón latía como loco. Tum, tum, tum. ¿Acaso puede escucharlo también?*"
            },
            "ja": {
                "name": "僕",
                "text": "*心臓がおかしいくらいに鳴っている。ドクン、ドクン、ドクン。この音、相手にも聞こえてるんじゃないか。*"
            }
        }
    },
    "day4_confess_2": {
        "character": null,
        "sunset": true,
        "next": "day4_confess_breathe",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"처음엔 그냥 좋은 사람이라고 생각했는데… 이제는 확실해.\""
            },
            "en": {
                "name": "Me",
                "text": "\"At first, I just thought you were a good person… but now I'm sure.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Al principio, solo pensé que eras una buena persona… pero ahora estoy seguro.\""
            },
            "ja": {
                "name": "僕",
                "text": "「最初はただいい人だなって思ってたんだけど…今ははっきりわかった。」"
            }
        }
    },
    "day4_confess_breathe": {
        "character": null,
        "sunset": true,
        "next": "day4_confess_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*숨을 깊이 들이마셨다. 손을 꽉 쥐었다. 지금 아니면… 평생 후회할 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I took a deep breath. I clenched my fists. If not now… I'll regret it for the rest of my life.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Respiré profundamente. Apreté los puños. Si no es ahora… me arrepentiré el resto de mi vida.*"
            },
            "ja": {
                "name": "僕",
                "text": "*深く息を吸い込んだ。手をぎゅっと握りしめた。今じゃなかったら…一生後悔する気がする。*"
            }
        }
    },
    "day4_confess_3": {
        "character": null,
        "sunset": true,
        "next": "day4_confess_silence",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"나… 좋아해. 진심으로.\""
            },
            "en": {
                "name": "Me",
                "text": "\"I… I like you.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Yo… me gustas. De verdad.\""
            },
            "ja": {
                "name": "僕",
                "text": "「僕…好きだよ。本気で。」"
            }
        }
    },
    "day4_confess_silence": {
        "character": null,
        "sunset": true,
        "next": "day4_confess_response",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*말이 끝나자 정적이 흘렀다. 석양빛에 물든 세상이 멈춘 것처럼 느껴졌다. 1초가 1시간처럼 길게 느껴진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As soon as the words left my mouth, silence fell. The world bathed in the sunset's glow seemed to stop. Every second felt like an hour.*"
            },
            "es": {
                "name": "Yo",
                "text": "*En cuanto las palabras salieron de mi boca, se hizo el silencio. El mundo bañado por el atardecer pareció detenerse. Cada segundo se sentía como una hora.*"
            },
            "ja": {
                "name": "僕",
                "text": "*言い終わった瞬間、静寂が流れた。夕焼けに染まった世界が止まったように感じた。1秒が1時間のように長く感じる。*"
            }
        }
    },
    "day4_confess_response": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day4_confess_to_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day4_confess_to_yuna",
                "character": "Yuna"
            },
            {
                "next": "day4_confess_to_dain",
                "character": "Dain"
            },
            {
                "next": "day4_confess_to_nurse",
                "character": "Nurse"
            },
            {
                "next": "day4_confess_to_teacher",
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
            }
        }
    },
    "day4_confess_to_seoyeon": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "sunset": true,
        "next": "day4_accept_seoyeon",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"서연아... 네가 웃을 때마다 내 세상의 축이 조금씩 기울어지는 기분이었어. 더 이상은 모른 척할 수가 없어. 널 좋아해.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Seoyeon… seeing your smile every morning has become the reason I start my day. I've never felt anything like this before.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Seoyeon… ver tu sonrisa cada mañana se convirtió en la razón por la que empiezo mi día. Nunca había sentido algo así.\""
            },
            "ja": {
                "name": "僕",
                "text": "「ソヨン…毎朝君の笑顔を見ることが、僕の一日が始まる理由になってた。こんな気持ちは初めてなんだ。」"
            }
        }
    },
    "day4_confess_to_yuna": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "day4_accept_yuna",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"유나야... 네 차가운 표정 뒤에 숨겨진 온기를 알게 된 순간부터, 내 시선은 늘 너를 향해 있었어. 널 좋아해.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Yuna… when I'm with you, the world feels quiet. I love that stillness. It's special because it's you.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Yuna… cuando estoy contigo, el mundo se siente tranquilo. Me encanta esa calma. Es especial porque eres tú.\""
            },
            "ja": {
                "name": "僕",
                "text": "「ユナ…君と一緒にいると、世界が静かに感じるんだ。その静けさが好きなんだ。君だから特別なんだよ。」"
            }
        }
    },
    "day4_confess_to_dain": {
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "next": "day4_accept_dain",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"다인아… 네가 웃으면 나도 모르게 웃게 돼. 네 밝은 에너지가 나한테 전염되는 것 같아. 언제부턴가 네가 없으면 허전해.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Dain… when you smile, I can't help but smile too. Your bright energy is contagious. At some point, it started feeling empty without you around.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Dain… cuando sonríes, no puedo evitar sonreír también. Tu energía brillante es contagiosa. En algún momento, empecé a sentirme vacío sin ti.\""
            },
            "ja": {
                "name": "僕",
                "text": "「ダイン…君が笑うと、僕もつられて笑っちゃうんだ。君の明るいエネルギーは伝染するんだよ。いつからか、君がいないと寂しくなったんだ。」"
            }
        }
    },
    "day4_confess_to_nurse": {
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "next": "day4_accept_nurse",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"선생님… 아니, 이건 학생으로서가 아니라 한 사람으로서 하는 말이에요. 선생님을 좋아합니다. 진심이에요.\""
            },
            "en": {
                "name": "Me",
                "text": "\"I'm not saying this as a student… I'm saying this as a person. I like you. I truly mean it.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"No digo esto como estudiante… lo digo como persona. Me gustas. Lo digo de verdad.\""
            },
            "ja": {
                "name": "僕",
                "text": "「先生…これは生徒としてじゃなく、一人の人間として言ってるんです。先生が好きです。本気です。」"
            }
        }
    },
    "day4_confess_to_teacher": {
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "next": "day4_accept_teacher",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"선생님… 선생님이 엄격할 때도, 웃을 때도, 전부 다 좋았어요. 이 마음은 선생님만을 향한 진심이에요.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Whether you're being strict or smiling… I've liked every side of you. These feelings are genuine, and they're only for you.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Ya sea que estés siendo estricta o sonriendo… me ha gustado cada lado tuyo. Estos sentimientos son genuinos, y son solo para ti.\""
            },
            "ja": {
                "name": "僕",
                "text": "「先生…厳しい時も、笑っている時も、全部好きでした。この気持ちは先生だけに向けた本気の気持ちです。」"
            }
        }
    },
    "day4_accept_seoyeon": {
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 20
            }
        },
        "setFlags": [
            "day4_confession_accepted",
            "isDating_Seoyeon"
        ],
        "next": "day4_accept_seoyeon_moment",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...바보. 이제야 말해주네. 기억해? 이제 넌 온전히 내 거야. 다른 사람 쳐다보면... 진짜 안 참을 거야.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"…Me too. I like you too. Ever since the first day you transferred in, when I first saw you at the school gate.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"…Yo también. También me gustas. Desde el primer día que te transferiste, cuando te vi por primera vez en la puerta de la escuela.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "「…私も。私も好き。転校してきた初日、校門で初めて見た時から。」"
            }
        }
    },
    "day4_accept_seoyeon_moment": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "sunset": true,
        "next": "day4_accept_seoyeon_close",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이의 눈가에 눈물이 맺혀 있다. 석양빛에 반짝이는 그 눈물이… 세상에서 가장 아름다운 보석 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Tears were welling up in Seoyeon's eyes. Those tears, sparkling in the sunset's glow… were like the most beautiful jewels in the world.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Las lágrimas brotaban en los ojos de Seoyeon. Esas lágrimas, brillando bajo el resplandor del atardecer… eran como las joyas más hermosas del mundo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンの目に涙が浮かんでいる。夕日の光にきらめくその涙が…世界で一番美しい宝石のようだった。*"
            }
        }
    },
    "day4_accept_seoyeon_close": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "sunset": true,
        "next": "day4_after_confess",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…이제 절대 안 놔줄 거야.\"  *서연이가 내 손에 깍지를 끼며 강하게 옭아맸다. 달콤하면서도 숨 막히는 구속감이 밀려온다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"…Can I hold your hand?\"  (Seoyeon gently wrapped her hand around mine. It was warm, and trembling slightly.)"
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"…¿Puedo tomarte de la mano?\"  (Seoyeon envolvió suavemente mi mano con la suya. Era cálida, y temblaba ligeramente.)"
            },
            "ja": {
                "name": "ソヨン",
                "text": "「…手、繋いでもいい？」（ソヨンがそっと僕の手を握った。温かくて、少し震えていた。）"
            }
        }
    },
    "day4_accept_yuna": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 20
            }
        },
        "setFlags": [
            "day4_confession_accepted",
            "isDating_Yuna"
        ],
        "next": "day4_accept_yuna_moment",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...네가 먼저 선을 넘은 거야. 이제 도망치고 싶어도 못 도망쳐. 넌 내 거니까. 평생, 내 옆에서 숨 쉬어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"…Dummy. I was going to say it first.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"…Tonto. Yo iba a decirlo primero.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "「…バカ。先に言おうとしてたのに。」"
            }
        }
    },
    "day4_accept_yuna_moment": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "day4_accept_yuna_close",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 고개를 살짝 숙였다. 귀끝까지 빨개진 게 보인다. 평소와 전혀 다른 모습에 심장이 터질 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna slightly lowered her head. I could see the blush spreading all the way to the tips of her ears. This was completely different from how she usually is… my heart felt like it would burst.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna bajó ligeramente la cabeza. Podía ver el rubor extendiéndose hasta las puntas de sus orejas. Era completamente diferente a como suele ser… mi corazón sentía que iba a explotar.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナが少しうつむいた。耳の先まで赤くなっているのが見える。いつもと全然違うこの姿に…心臓が破裂しそうだった。*"
            }
        }
    },
    "day4_accept_yuna_close": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "day4_after_confess",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…가만히 있어.\"  *유나가 내 옷깃을 꽉 쥐며 품에 파고들었다. 서늘하지만 뜨거운 숨결이 목덜미를 간지럽힌다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "\"…Stay still.\"  (Yuna moved right next to me and stood close. Our shoulders were touching. A small warmth radiated between us.)"
            },
            "es": {
                "name": "Yuna",
                "text": "\"…No te muevas.\"  (Yuna se acercó a mi lado y se quedó cerca. Nuestros hombros se tocaban. Un pequeño calor irradiaba entre nosotros.)"
            },
            "ja": {
                "name": "ユナ",
                "text": "「…じっとして。」（ユナが僕のすぐ隣に来て、ぴったりと寄り添った。肩が触れ合う。小さな温もりが二人の間に広がった。）"
            }
        }
    },
    "day4_accept_dain": {
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 20
            }
        },
        "setFlags": [
            "day4_confession_accepted",
            "isDating_Dain"
        ],
        "next": "day4_accept_dain_moment",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"……...정말? 거짓말 아니지? 나도!! 나도 너 좋아해!! ...정말?!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"…Huh?! F-for real?! Me too!! I like you too!! Oh my gosh!!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"…¿¡Eh!? ¿¡D-de verdad!? ¡¡Yo también!! ¡¡También me gustas!! ¡¡Dios mío!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "「…え？！ほ、ほんとに？！私も！！私も好き！！うそでしょ？！」"
            }
        }
    },
    "day4_accept_dain_moment": {
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "next": "day4_accept_dain_close",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 두 팔로 내 팔을 꽉 잡았다. 얼굴은 빨갛게 상기되어 있지만 눈은 반짝반짝 빛나고 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain grabbed my arm with both hands. Her face was flushed bright red, but her eyes were sparkling with joy.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dain agarró mi brazo con ambas manos. Su cara estaba completamente roja, pero sus ojos brillaban de alegría.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインが両手で僕の腕をぎゅっと掴んだ。顔は真っ赤に上気しているけど、目はキラキラと輝いていた。*"
            }
        }
    },
    "day4_accept_dain_close": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day4_after_confess",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"후훗, 우리 이제 사귀는 거지?! 진짜?! 아 심장 터져!!\"  (다인이가 펄쩍펄쩍 뛰며 내 손을 잡고 흔들었다.)"
            },
            "en": {
                "name": "Dain",
                "text": "\"Hehe, so we're officially dating now, right?! Really?! Ahh, my heart's gonna explode!!\"  (Dain bounced up and down, grabbing my hand and shaking it.)"
            },
            "es": {
                "name": "Dain",
                "text": "\"Jeje, ¿entonces estamos saliendo oficialmente, verdad?! ¿¡De verdad!? ¡¡Ahh, mi corazón va a explotar!!\"  (Dain saltaba de arriba a abajo, tomando mi mano y sacudiéndola.)"
            },
            "ja": {
                "name": "ダイン",
                "text": "「えへへ、じゃあ私たち付き合ってるってことだよね？！本当に？！ああもう心臓爆発しそう！！」（ダインがぴょんぴょん跳ねながら僕の手を掴んで振り回した。）"
            }
        }
    },
    "day4_accept_nurse": {
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "stats": {
            "Nurse": {
                "affinity": 20
            }
        },
        "setFlags": [
            "day4_confession_accepted",
            "isDating_Nurse"
        ],
        "next": "day4_accept_nurse_moment",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…알고 있었어. 네 눈을 보면 다 알 수 있었거든. …나도 같은 마음이야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"…I already knew. I could tell just by looking into your eyes. …I feel the same way.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"…Ya lo sabía. Podía notarlo con solo mirarte a los ojos. …Yo siento lo mismo.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "「…わかってたわ。あなたの目を見ればわかるもの。…私も同じ気持ちよ。」"
            }
        }
    },
    "day4_accept_nurse_moment": {
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "next": "day4_accept_nurse_close",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 한 걸음 가까이 다가왔다. 은은한 향기가 코끝을 스친다. 심장이 멎을 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*She took a step closer. A faint, gentle fragrance brushed past my nose. My heart felt like it might stop.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Ella dio un paso más cerca. Una fragancia suave y delicada rozó mi nariz. Sentí que mi corazón podría detenerse.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生が一歩近づいてきた。ほのかな香りが鼻先をかすめる。心臓が止まりそうだった。*"
            }
        }
    },
    "day4_accept_nurse_close": {
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "next": "day4_after_confess",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"학교에선 비밀이야... 우리만의, 위험한 장난.\"  *선생님이 내 귓가에 다가와 달콤하고 아찔한 숨결을 속삭였다.*"
            },
            "en": {
                "name": "School Nurse",
                "text": "\"It's a secret, just between us.\"  (She gently took my hand. Her soft, warm hand… was trembling.)"
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Es un secreto, solo entre nosotros.\"  (Ella tomó suavemente mi mano. Su mano suave y cálida… estaba temblando.)"
            },
            "ja": {
                "name": "保健先生",
                "text": "「秘密よ、二人だけの。」（先生がそっと僕の手を取った。柔らかくて温かい手が…震えていた。）"
            }
        }
    },
    "day4_accept_teacher": {
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "stats": {
            "Teacher": {
                "affinity": 20
            }
        },
        "setFlags": [
            "day4_confession_accepted",
            "isDating_Teacher"
        ],
        "next": "day4_accept_teacher_moment",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…하아, 진짜 미치겠네. 내가 학생한테 흔들릴 줄이야. 선을 넘은 건 너야. 앞으로 무슨 일이 생겨도... 후회하지 마.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"…Honestly, you. You know a student shouldn't say things like that to a teacher, right? …But I feel the same way, you dummy.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"…En serio, tú. Sabes que un estudiante no debería decirle esas cosas a una profesora, ¿verdad? …Pero yo siento lo mismo, tonto.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "「…まったく、あなたね。生徒が先生にそんなこと言っちゃダメでしょ？…でも、私も同じ気持ちよ、バカ。」"
            }
        }
    },
    "day4_accept_teacher_moment": {
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "next": "day4_accept_teacher_close",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 눈이 흔들리고 있다. 빈틈없던 사람의 이런 모습은… 나만 볼 수 있는 거겠지.*"
            },
            "en": {
                "name": "Me",
                "text": "*Her eyes were wavering. Getting to see this vulnerable side of someone who's always so guarded… I must be the only one who gets to see this.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sus ojos estaban vacilantes. Ver este lado vulnerable de alguien que siempre está tan protegida… debo ser el único que puede ver esto.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生の目が揺れている。いつも隙のないあの人のこんな姿は…僕だけが見られるものなんだろう。*"
            }
        }
    },
    "day4_accept_teacher_close": {
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day4_after_confess",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…각오해.\"  *선생님이 넥타이를 살짝 풀며, 평소의 엄격함이 무너진 짙고 농염한 눈빛으로 나를 옭아맸다.*"
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"…Just this much.\"  (She linked her pinky finger with mine. \"At school… it's a secret.\")"
            },
            "es": {
                "name": "Profesora",
                "text": "\"…Solo esto.\"  (Ella entrelazó su meñique con el mío. \"En la escuela… es un secreto.\")"
            },
            "ja": {
                "name": "担任先生",
                "text": "「…これだけね。」（先生が僕と小指を絡めた。「学校では…秘密よ。」）"
            }
        }
    },
    "day4_after_confess": {
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day4_night_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*석양 아래, 두 사람의 그림자가 하나로 겹쳐진다. 세상에서 가장 행복한 순간이었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Beneath the sunset, our two shadows merged into one. It was the happiest moment in the world.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Bajo el atardecer, nuestras dos sombras se fusionaron en una sola. Fue el momento más feliz del mundo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*夕日の下、二人の影が一つに重なった。世界で一番幸せな瞬間だった。*"
            }
        }
    },
    "day4_wait": {
        "character": null,
        "sunset": true,
        "next": "day4_wait_conflict",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"…이 풍경, 진짜 예쁘다.\""
            },
            "en": {
                "name": "Me",
                "text": "\"…This view is really beautiful.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"…Este paisaje es realmente hermoso.\""
            },
            "ja": {
                "name": "僕",
                "text": "「…この景色、本当に綺麗だね。」"
            }
        }
    },
    "day4_wait_conflict": {
        "character": null,
        "sunset": true,
        "next": "day4_wait_walk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*하고 싶은 말이 목 끝까지 올라왔는데… 결국 삼켰다. 아직… 아직은 때가 아니야.*"
            },
            "en": {
                "name": "Me",
                "text": "*The words I wanted to say rose all the way to the tip of my tongue… but I swallowed them back down. Not yet… it's not the right time yet.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Las palabras que quería decir subieron hasta la punta de mi lengua… pero las tragué de vuelta. Todavía no… aún no es el momento.*"
            },
            "ja": {
                "name": "僕",
                "text": "*言いたい言葉が喉元まで上がってきたけど…結局飲み込んだ。まだ…まだその時じゃない。*"
            }
        }
    },
    "day4_wait_walk": {
        "character": null,
        "sunset": true,
        "next": "day4_wait_talk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나란히 강변길을 걸었다. 아무 말도 하지 않았지만, 이상하게 불편하지 않은 침묵이었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We walked side by side along the riverbank. Neither of us said a word, but somehow, the silence wasn't uncomfortable at all.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Caminamos uno al lado del otro por la orilla del río. Ninguno dijo una palabra, pero de alguna manera, el silencio no era incómodo en absoluto.*"
            },
            "ja": {
                "name": "僕",
                "text": "*並んで川沿いの道を歩いた。何も話さなかったけど、不思議と居心地の悪くない沈黙だった。*"
            }
        }
    },
    "day4_wait_talk": {
        "character": null,
        "sunset": true,
        "next": "day4_wait_linger",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"…오늘 진짜 재밌었어. 고마워.\""
            },
            "en": {
                "name": "Me",
                "text": "\"…Today was really fun. Thank you.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"…Hoy fue muy divertido. Gracias.\""
            },
            "ja": {
                "name": "僕",
                "text": "「…今日、本当に楽しかった。ありがとう。」"
            }
        }
    },
    "day4_wait_linger": {
        "character": null,
        "sunset": true,
        "next": "day4_wait_feelings",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*저기 보이는 건널목에서 헤어져야 한다. 한 발짝을 내딛기가 이렇게 어려울 줄이야.*"
            },
            "en": {
                "name": "Me",
                "text": "*We'd have to part ways at the crosswalk up ahead. I never knew taking a single step could be this hard.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Tendríamos que separarnos en el cruce más adelante. Nunca supe que dar un solo paso podía ser tan difícil.*"
            },
            "ja": {
                "name": "僕",
                "text": "*あの先の横断歩道で別れなきゃいけない。一歩踏み出すのがこんなに難しいなんて。*"
            }
        }
    },
    "day4_wait_feelings": {
        "character": null,
        "sunset": true,
        "next": "day4_wait_response",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*아까 삼킨 말이 다시 올라왔다. '좋아해.' 세 글자가 심장 안에서 벽을 두드리고 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The words I swallowed earlier came surging back up. 'I like you.' Those three words were pounding against the walls of my heart.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Las palabras que tragué antes volvieron a surgir. 'Me gustas.' Esas tres palabras golpeaban las paredes de mi corazón.*"
            },
            "ja": {
                "name": "僕",
                "text": "*さっき飲み込んだ言葉がまた込み上げてきた。「好きだよ。」その三文字が心臓の壁を叩いている。*"
            }
        }
    },
    "day4_wait_response": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day4_wait_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day4_wait_yuna",
                "character": "Yuna"
            },
            {
                "next": "day4_wait_dain",
                "character": "Dain"
            },
            {
                "next": "day4_wait_nurse",
                "character": "Nurse"
            },
            {
                "next": "day4_wait_teacher",
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
            }
        }
    },
    "day4_wait_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day4_wait_goodbye",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"나도! 또 만나자… 그치?\"  (서연이가 환하게 웃었지만, 눈 속 어딘가에 아쉬움이 비쳤다.)"
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Me too! Let's hang out again… okay?\"  (Seoyeon smiled brightly, but somewhere deep in her eyes, a hint of longing showed.)"
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡Yo también! Salgamos de nuevo… ¿sí?\"  (Seoyeon sonrió con alegría, pero en algún lugar de sus ojos, se asomó un destello de anhelo.)"
            },
            "ja": {
                "name": "ソヨン",
                "text": "「私も！また遊ぼうね…ね？」（ソヨンは明るく笑ったけど、目の奥にどこか名残惜しさが見えた。）"
            }
        }
    },
    "day4_wait_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day4_wait_goodbye",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…응. 나쁘지 않았어. …다음에 또 하자.\"  (유나가 살짝 고개를 돌렸다. 혹시 표정을 감추려는 걸까.)"
            },
            "en": {
                "name": "Yuna",
                "text": "\"…Yeah. It wasn't bad. …Let's do this again sometime.\"  (Yuna turned her head slightly. Was she trying to hide her expression?)"
            },
            "es": {
                "name": "Yuna",
                "text": "\"…Sí. No estuvo mal. …Hagámoslo de nuevo alguna vez.\"  (Yuna giró ligeramente la cabeza. ¿Estaba tratando de ocultar su expresión?)"
            },
            "ja": {
                "name": "ユナ",
                "text": "「…うん。悪くなかった。…また、やろう。」（ユナが少し顔をそむけた。表情を隠そうとしているのだろうか。）"
            }
        }
    },
    "day4_wait_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day4_wait_goodbye",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"당연 재밌었지!! 다음에 또 가자!!\"  (다인이가 밝게 웃었지만, 잠깐 입술을 깨무는 게 보였다.)"
            },
            "en": {
                "name": "Dain",
                "text": "\"Of course it was fun!! Let's go out again next time!!\"  (Dain smiled brightly, but for a moment, I caught her biting her lip.)"
            },
            "es": {
                "name": "Dain",
                "text": "\"¡¡Claro que fue divertido!! ¡¡Salgamos de nuevo la próxima vez!!\"  (Dain sonrió con alegría, pero por un momento, la vi morderse el labio.)"
            },
            "ja": {
                "name": "ダイン",
                "text": "「もちろん楽しかったよ！！次もまた行こう！！」（ダインは明るく笑ったけど、一瞬唇を噛んでいるのが見えた。）"
            }
        }
    },
    "day4_wait_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day4_wait_goodbye",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"즐거운 시간이었어. …다음에 또 만날까?\"  (선생님의 미소가 평소보다 살짝 약해 보였다.)"
            },
            "en": {
                "name": "School Nurse",
                "text": "\"It was a lovely time. …Shall we meet up again?\"  (Her smile seemed just a bit weaker than usual.)"
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Fue un momento encantador. …¿Nos vemos de nuevo?\"  (Su sonrisa parecía un poco más débil de lo normal.)"
            },
            "ja": {
                "name": "保健先生",
                "text": "「楽しい時間だったわ。…また会えるかしら？」（先生の微笑みがいつもより少しだけ弱く見えた。）"
            }
        }
    },
    "day4_wait_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "stats": {
            "Teacher": {
                "affinity": 5
            }
        },
        "next": "day4_wait_goodbye",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…뭐, 나쁘지 않았네. 다음에 또 불러. 나가줄게.\"  (선생님이 웃었지만, 돌아서는 발걸음이 느렸다.)"
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"…Well, it wasn't bad. Call me again next time. I'll come.\"  (She smiled, but her steps as she turned away were slow.)"
            },
            "es": {
                "name": "Profesora",
                "text": "\"…Bueno, no estuvo mal. Llámame de nuevo la próxima vez. Vendré.\"  (Sonrió, pero sus pasos al darse la vuelta fueron lentos.)"
            },
            "ja": {
                "name": "担任先生",
                "text": "「…まあ、悪くなかったわね。次もまた呼んでね。来てあげるから。」（先生は笑ったけど、振り返る足取りが遅かった。）"
            }
        }
    },
    "day4_wait_goodbye": {
        "character": null,
        "sunset": true,
        "next": "day4_wait_regret",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*인사를 나누고 발걸음을 돌렸다. 뒤를 돌아보고 싶었지만… 참았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We said our goodbyes and I turned to walk away. I wanted to look back… but I held myself back.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Nos despedimos y me di la vuelta para irme. Quería mirar atrás… pero me contuve.*"
            },
            "ja": {
                "name": "僕",
                "text": "*挨拶を交わして足を向けた。振り返りたかったけど…我慢した。*"
            }
        }
    },
    "day4_wait_regret": {
        "character": null,
        "sunset": true,
        "next": "day4_wait_home",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*도저히 참을 수가 없어서 뒤를 돌아봤다. 상대방도 뒤를 돌아보고 있었다. 눈이 마주친 순간, 서로 황급히 고개를 돌렸다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I couldn't help it anymore and looked back. They had turned around too. The moment our eyes met, we both quickly looked away.*"
            },
            "es": {
                "name": "Yo",
                "text": "*No pude más y miré atrás. También se había dado la vuelta. En el momento en que nuestros ojos se encontraron, ambos miramos rápidamente hacia otro lado.*"
            },
            "ja": {
                "name": "僕",
                "text": "*どうしても我慢できなくて振り返った。相手も振り返っていた。目が合った瞬間、お互い慌てて顔をそむけた。*"
            }
        }
    },
    "day4_wait_home": {
        "character": null,
        "sunset": true,
        "next": "day4_wait_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집으로 돌아가는 길. 오늘 하지 못한 말이 가슴 한구석에 무겁게 남아있다. '다음에는 꼭… 꼭 말하자.'*"
            },
            "en": {
                "name": "Me",
                "text": "*On the way home. The words I couldn't say today sat heavy in a corner of my chest. 'Next time… I'll definitely say it. I have to.'*"
            },
            "es": {
                "name": "Yo",
                "text": "*De camino a casa. Las palabras que no pude decir hoy pesaban en un rincón de mi pecho. 'La próxima vez… definitivamente lo diré. Tengo que hacerlo.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*家への帰り道。今日言えなかった言葉が胸の隅に重く残っている。「次こそは…絶対に言おう。」*"
            }
        }
    },
    "day4_wait_end": {
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day4_night_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*마음속에는… 하지 못한 말이 맴돌았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*In my heart… the unspoken words lingered.*"
            },
            "es": {
                "name": "Yo",
                "text": "*En mi corazón… las palabras no dichas persistían.*"
            },
            "ja": {
                "name": "僕",
                "text": "*心の中には…言えなかった言葉がいつまでも残っていた。*"
            }
        }
    }
});
