/**
 * ============================================================================
 * CUPID - day1_1_morning (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day1_1_morning.js + en_day1_1_morning.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[1]) SCENARIO[1] = {};

Object.assign(SCENARIO[1], {
    "start": {
        "background": "assets/images/background/school.png",
        "bgm": "intro.mp3",
        "character": null,
        "next": "start_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*따스한 햇살... 오늘부터 이 학교구나. 조금 긴장되는걸.*"
            },
            "en": {
                "name": "Me",
                "text": "*Warm sunlight... Today is my first day at this school. I'm a bit nervous.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cálida luz del sol... Hoy es mi primer día en esta escuela. Estoy un poco nervioso.*"
            },
            "ja": {
                "name": "僕",
                "text": "*暖かい日差し……今日からこの学校か。少し緊張するな。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Un doux soleil... Aujourd'hui est mon premier jour dans cette école. Je suis un peu nerveux.*"
            }
        }
    },
    "start_2": {
        "background": "assets/images/background/school.png",
        "next": "start_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*낯선 교복, 낯선 풍경... 하지만 왠지 좋은 일이 생길 것만 같아.*"
            },
            "en": {
                "name": "Me",
                "text": "*An unfamiliar uniform, an unfamiliar scenery... But somehow I feel like something good is going to happen.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Un uniforme desconocido, un paisaje desconocido... Pero de alguna manera siento que algo bueno va a pasar.*"
            },
            "ja": {
                "name": "僕",
                "text": "*見慣れない制服、見慣れない景色……でもなぜか、いいことが起きそうな気がする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Un uniforme inconnu, un paysage inconnu... Mais j'ai le sentiment que quelque chose de bien va arriver.*"
            }
        }
    },
    "start_3": {
        "background": "assets/images/background/school.png",
        "next": "name_input_scene",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*자, 가보자. 새로운 시작이야.*"
            },
            "en": {
                "name": "Me",
                "text": "*Alright, let's go. It's a new beginning.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Bien, vamos. Es un nuevo comienzo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*さあ、行こう。新しい始まりだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Allez, on y va. C'est un nouveau départ.*"
            }
        }
    },
    "name_input_scene": {
        "type": "input",
        "background": "assets/images/background/school.png",
        "next": "start_4",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "전학생, 당신의 이름은?"
            },
            "en": {
                "name": "System",
                "text": "Transfer student, what's your name?"
            },
            "es": {
                "name": "Sistema",
                "text": "Estudiante transferido, \u00bfc\u00f3mo te llamas?"
            },
            "ja": {
                "name": "システム",
                "text": "転校生、君の名前は？"
            },
            "fr": {
                "name": "Système",
                "text": "Élève transféré, quel est ton nom ?"
            }
        }
    },
    "start_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "intro_1",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "\"안녕? 못 보던 얼굴이네. 혹시 오늘 온다는... {name}?\""
            },
            "en": {
                "name": "???",
                "text": "\"Hello? I haven't seen you before. Are you... {name}, the new transfer student?\""
            },
            "es": {
                "name": "???",
                "text": "\"\u00bfHola? No te hab\u00eda visto antes. \u00bfEres... {name}, el nuevo estudiante transferido?\""
            },
            "ja": {
                "name": "???",
                "text": "\"こんにちは？見かけない顔だね。もしかして……{name}？\""
            },
            "fr": {
                "name": "???",
                "text": "\"Bonjour ? Je ne t'ai jamais vu avant. Tu es... {name}, le nouvel élève transféré ?\""
            }
        }
    },
    "intro_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "intro_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*방긋 웃으며 말을 걸어오는 소녀. 은은한 샴푸 향기가 코끝을 스친다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A girl approaches me with a bright smile. A subtle scent of shampoo tickles my nose.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Una chica se me acerca con una sonrisa radiante. Un sutil aroma a champ\u00fa me cosquillea la nariz.*"
            },
            "ja": {
                "name": "僕",
                "text": "*にっこり笑いながら話しかけてくる女の子。ほのかなシャンプーの香りが鼻先をかすめる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Une fille s'approche de moi avec un sourire radieux. Un subtil parfum de shampoing chatouille mon nez.*"
            }
        }
    },
    "intro_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "intro_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*시선이 얽히는 순간, 주변의 소음이 아득해지는 기분이 들었다. 단정한 교복 차림 위로 떨어지는 아침 햇살보다 그녀의 미소가 더 눈부셨다.*"
            },
            "en": {
                "name": "Me",
                "text": "*When our eyes meet, my heart skips a beat. She's so pretty...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cuando nuestras miradas se cruzan, mi coraz\u00f3n da un salto. Es tan bonita...*"
            },
            "ja": {
                "name": "僕",
                "text": "*目が合った瞬間、周りの音が遠のくような気がした。彼女の微笑みは朝の日差しよりも眩しかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Quand nos regards se croisent, mon cœur fait un bond. Elle est tellement jolie...*"
            }
        }
    },
    "intro_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlags": [
            "met_seoyeon",
            "knows_name_seoyeon"
        ],
        "choices": [
            {
                "next": "path_friendly_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "path_blush_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "path_tease_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 7
                    }
                }
            },
            {
                "next": "path_silent_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "path_rude_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": -30
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"학생회장 서연이야. 선생님 부탁으로 마중 나왔지. 잘 부탁해!\"",
                "choices": [
                    "응, 잘 부탁해! 학교가 엄청 예쁘네.",
                    "와... 진짜 예쁘다.",
                    "학교 홍보 모델이 직접 마중 나온 줄 알았네.",
                    "*눈이 부셔서 한동안 멍하니 바라본다.*",
                    "아, 그래? 근데 좀 비켜줄래?"
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"I'm Seoyeon, the student council president. The teacher asked me to come greet you. Nice to meet you!\"",
                "choices": [
                    "Nice to meet you too! This school is really beautiful.",
                    "Wow... You're really pretty.",
                    "Is it even allowed for a student council president to be this pretty? That's cheating!",
                    "*Stare at her blankly, dazzled by her beauty.*",
                    "Oh, okay? Can you move aside?"
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Soy Seoyeon, la presidenta del consejo estudiantil. La profesora me pidi\u00f3 que viniera a recibirte. \u00a1Mucho gusto!\"",
                "choices": [
                    "\u00a1Mucho gusto tambi\u00e9n! Esta escuela es realmente hermosa.",
                    "Wow... Eres realmente bonita.",
                    "\u00bfEs legal que una presidenta del consejo estudiantil sea tan bonita? \u00a1Eso es trampa!",
                    "*Mirarla fijamente, deslumbrado por su belleza.*",
                    "Oh, \u00bfest\u00e1 bien? \u00bfPuedes hacerte a un lado?"
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"生徒会長のソヨンだよ。先生に頼まれてお迎えに来たの。よろしくね！\"",
                "choices": [
                    "こちらこそよろしく！この学校、すごく綺麗だね。",
                    "わぁ……すごく可愛いね。",
                    "生徒会長がこんなに可愛くていいの？ずるいよ！",
                    "*眩しくてしばらくぼんやりと見つめてしまう。*",
                    "ああ、そう？ちょっとどいてくれる？"
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Je suis Seoyeon, la présidente du conseil des élèves. Le professeur m'a demandé de venir t'accueillir. Ravie de te rencontrer !\"",
                "choices": [
                    "Ravi de te rencontrer aussi ! Cette école est vraiment magnifique.",
                    "Waouh... Tu es vraiment jolie.",
                    "Est-ce qu'une présidente du conseil des élèves a le droit d'être aussi jolie ? C'est de la triche !",
                    "*La fixer du regard, ébloui par sa beauté.*",
                    "Oh, d'accord ? Tu peux te pousser ?"
                ]
            }
        }
    },
    "path_rude_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "path_rude_1_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연의 눈이 커지더니, 이내 아랫입술을 꾹 깨문다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon's eyes widen, and she bites her lower lip.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Los ojos de Seoyeon se agrandan y se muerde el labio inferior.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンの目が大きく見開かれ、下唇をぎゅっと噛んだ。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Les yeux de Seoyeon s'écarquillent, et elle mord sa lèvre inférieure.*"
            }
        }
    },
    "path_rude_1_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "hallway_1",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"아... 미안. 방해했나 보네. 그래도 안내는 내 일이니까... 따라와.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh... Sorry. I must have been in your way. But guiding you is my job, so... follow me.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Oh... Lo siento. Deb\u00ed haberte estorbado. Pero guiarte es mi trabajo, as\u00ed que... s\u00edgueme.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あ……ごめん。邪魔だったかな。でも案内は私の仕事だから……ついてきて。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Oh... Désolée. J'ai dû te gêner. Mais te guider fait partie de mon travail, alors... suis-moi.\""
            }
        }
    },
    "path_friendly_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "path_friendly_1_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 화사하게 웃자 주위가 밝아지는 느낌이다. 긴장이 조금 풀린다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*When she smiles brightly, the whole area seems to light up. My tension eases a bit.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Cuando sonr\u00ede radiantemente, todo el lugar parece iluminarse. Mi tensi\u00f3n se alivia un poco.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が明るく笑うと、周りまで明るくなる気がする。少し緊張がほぐれた。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Quand elle sourit radieusement, tout autour semble s'illuminer. Ma tension s'apaise un peu.*"
            }
        }
    },
    "path_friendly_1_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "hallway_1",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"후훗, 역시? 처음엔 좀 복잡하지. 내가 완벽하게 가이드해줄게. 자, 따라와!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Hehe, right? It can be a bit confusing at first. I'll be your perfect guide. Come on, follow me!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Jeje, \u00bfverdad? Puede ser un poco confuso al principio. Ser\u00e9 tu gu\u00eda perfecta. \u00a1Vamos, s\u00edgueme!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"ふふっ、でしょ？最初はちょっと複雑だよね。私が完璧に案内してあげる。さあ、ついてきて！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Héhé, n'est-ce pas ? Ça peut être un peu déroutant au début. Je serai ton guide parfait. Allez, suis-moi !\""
            }
        }
    },
    "path_tease_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "path_tease_1_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 눈을 동그랗게 뜨더니 곧 장난스럽게 윙크한다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Her eyes widen, then she playfully winks at me.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Sus ojos se agrandan, luego me gui\u00f1a juguetonamente.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が目を丸くして、すぐにいたずらっぽくウインクした。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Ses yeux s'écarquillent, puis elle me fait un clin d'œil espiègle.*"
            }
        }
    },
    "path_tease_1_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_1",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"푸훗, 첫날부터 꽤 능글맞네? 뭐, 나쁘진 않아. 그럼 우리 '특별한' 전학생, 길 잃어버리기 전에 잘 따라와.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh my, flirting on the first day? I'll give you credit for that. So, shall our 'special' transfer student follow me?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Vaya, \u00bfcoqueteando el primer d\u00eda? Te doy cr\u00e9dito por eso. Entonces, \u00bfnuestro estudiante transferido 'especial' me sigue?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あら、初日からなかなかやるね？ まあ、悪くないけど。じゃあ、'特別な'転校生さん、迷子になる前についてきてね。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Oh là là, tu dragues dès le premier jour ? Je t'accorde des points pour ça. Alors, notre élève transféré 'spécial' veut bien me suivre ?\""
            }
        }
    },
    "path_blush_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "path_blush_1_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연의 얼굴이 순식간에 붉게 달아오른다. 시선을 피하며 머리칼을 만진다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon's face instantly turns red. She avoids my gaze and plays with her hair.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*El rostro de Seoyeon se pone rojo instant\u00e1neamente. Evita mi mirada y juega con su cabello.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンの顔が一瞬で赤く染まる。視線をそらしながら髪をいじっている。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Le visage de Seoyeon devient instantanément rouge. Elle détourne le regard et joue avec ses cheveux.*"
            }
        }
    },
    "path_blush_1_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "hallway_1",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...갑자기 그런 농담을 하면, 어떻게 반응해야 할지 모르겠잖아. *그녀는 뺨에 번진 홍조를 숨기려는 듯, 애써 차분한 목소리로 말하며 발걸음을 돌렸다.* 늦겠다. 얼른 따라와.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Th-that was so sudden... That's cheating. Anyway, transfer students these days... Just follow me!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"E-eso fue tan repentino... Eso es trampa. En fin, los estudiantes transferidos de hoy en d\u00eda... \u00a1Solo s\u00edgueme!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"……いきなりそんなこと言われたら、どう反応していいかわからないじゃない。*頬に広がる赤みを隠すように、努めて落ち着いた声で言って歩き出した。* 遅れるよ。早くついてきて。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"C-c'était tellement soudain... C'est de la triche. Enfin, les élèves transférés de nos jours... Suis-moi !\""
            }
        }
    },
    "path_silent_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "path_silent_1_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 고개를 갸웃하며 내 얼굴 가까이 다가온다. 숨결이 느껴질 것만 같다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She tilts her head and leans closer to my face. I can almost feel her breath.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Ella inclina la cabeza y se acerca a mi rostro. Casi puedo sentir su aliento.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が首を傾げて僕の顔に近づいてくる。息遣いが感じられそうなほどに。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle penche la tête et s'approche de mon visage. Je peux presque sentir son souffle.*"
            }
        }
    },
    "path_silent_1_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_1",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"응? 왜 그래? 얼굴이 엄청 빨간데... 설마 벌써 나한테 반한 거야? 후훗.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Hmm? What's wrong? Your face is really red... Did you already fall for me? Hehe.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"\u00bfHmm? \u00bfQu\u00e9 pasa? Tu cara est\u00e1 muy roja... \u00bfYa te enamoraste de m\u00ed? Jeje.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"ん？どうしたの？顔が真っ赤だけど……まさかもう私に惚れちゃった？ふふっ。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Hmm ? Qu'est-ce qui ne va pas ? Ton visage est tout rouge... Tu es déjà tombé amoureux de moi ? Héhé.\""
            }
        }
    },
    "hallway_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_back.png",
        "next": "hallway_name_ask",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이의 뒤를 따라 복도를 걷는다. 창밖으로 아이들의 활기찬 목소리가 들린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I follow Seoyeon down the hallway. The lively voices of students can be heard through the windows.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sigo a Seoyeon por el pasillo. Las voces animadas de los estudiantes se escuchan por las ventanas.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンの後ろを歩いて廊下を進む。窓の外から生徒たちの元気な声が聞こえる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je suis Seoyeon dans le couloir. Les voix animées des élèves résonnent à travers les fenêtres.*"
            }
        }
    },
    "hallway_name_ask": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_name_share",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 갑자기 멈춰 서더니 나를 돌아본다.* \"아, 그러고 보니 아까 내가 네 이름을 먼저 말해버렸네. {name}, 맞지? 다시 한번 정식으로 인사할게!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon suddenly stops and turns to me.* \"Oh, come to think of it, I said your name first earlier. It's {name}, right? Let me introduce myself properly this time!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon se detiene de repente y se vuelve hacia m\u00ed.* \"Oh, ahora que lo pienso, dije tu nombre primero antes. Es {name}, \u00bfverdad? \u00a1D\u00e9jame presentarme correctamente esta vez!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンが急に立ち止まって振り返る。* \"あ、そういえばさっき私が先に名前言っちゃったね。{name}、だよね？改めて正式にご挨拶するね！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon s'arrête soudainement et se tourne vers moi.* \"Oh, maintenant que j'y pense, j'ai dit ton nom en premier tout à l'heure. C'est {name}, n'est-ce pas ? Laisse-moi me présenter correctement cette fois !\""
            }
        }
    },
    "hallway_name_share": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_name_share_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"응, 맞아. {name}(이)야. 아까는 정신이 없어서 제대로 인사를 못 했네. 잘 부탁해, 서연아.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Yeah, that's right. I'm {name}. I was so distracted earlier that I couldn't introduce myself properly. Nice to meet you, Seoyeon.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"S\u00ed, as\u00ed es. Soy {name}. Estaba tan distra\u00eddo antes que no pude presentarme bien. Mucho gusto, Seoyeon.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"うん、そうだよ。{name}だ。さっきはバタバタしててちゃんと挨拶できなかったね。よろしく、ソヨン。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Oui, c'est ça. Je suis {name}. J'étais tellement distrait tout à l'heure que je n'ai pas pu me présenter correctement. Ravi de te rencontrer, Seoyeon.\""
            }
        }
    },
    "hallway_name_share_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "hallway_1_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"{name}... 후훗, 좋은 이름이다! 그럼 이제부터 {name}이라고 부를게. 잘 부탁해, {name}!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"{name}... Hehe, that's a nice name! I'll call you {name} from now on. Nice to meet you too, {name}!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"{name}... Jeje, \u00a1qu\u00e9 lindo nombre! Te llamar\u00e9 {name} de ahora en adelante. \u00a1Mucho gusto tambi\u00e9n, {name}!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"{name}……ふふっ、いい名前だね！じゃあこれからは{name}って呼ぶね。よろしくね、{name}！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"{name}... Héhé, c'est un joli nom ! Je t'appellerai {name} à partir de maintenant. Ravie de te connaître, {name} !\""
            }
        }
    },
    "hallway_1_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_back.png",
        "next": "hallway_free_talk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그녀의 뒷모습을 보며 복도를 걷는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I walk down the hallway, watching her from behind.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Camino por el pasillo, observ\u00e1ndola desde atr\u00e1s.*"
            },
            "ja": {
                "name": "僕",
                "text": "*彼女の後ろ姿を見ながら廊下を歩く。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je marche dans le couloir en la regardant de dos.*"
            }
        }
    },
    "hallway_free_talk": {
        "type": "free_talk",
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 15,
                "next": "hallway_1_3_high"
            },
            {
                "minAffinity": 0,
                "next": "hallway_1_3"
            },
            {
                "minAffinity": -999,
                "next": "hallway_1_3_low"
            }
        ],
        "next": "hallway_1_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"아, 그러고 보니 우리 통성명만 하고 제대로 대화는 못 했네? 궁금한 게 있으면 뭐든 물어봐!\"",
                "context": "학교 복도를 함께 걸으며 전학생인 주인공과 가벼운 대화를 나누는 상황입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 서연이가 복도를 지나며 학교 시설들을 안내해 주는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 이동하자고 하거나 안내를 시작하겠다는 언급을 해주세요.",
                "personality": "친절하고 상냥하며 책임감 강한 학생회장. 전학생인 주인공에게 호감을 느끼고 있음."
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh, come to think of it, we only exchanged names and didn't really talk! If you have any questions, feel free to ask!\"",
                "context": "Walking through the school hallway together with the transfer student protagonist, having a light conversation. Keep the conversation going until it naturally concludes. When the conversation ends, Seoyeon will start showing the protagonist around the school facilities. In the final turn only, mention that you'll start moving or begin the tour.",
                "personality": "Kind, caring, and responsible student council president. She's developing feelings for the protagonist."
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Oh, ahora que lo pienso, \u00a1solo intercambiamos nombres y no hablamos de verdad! Si tienes alguna pregunta, \u00a1no dudes en preguntar!\"",
                "context": "Walking through the school hallway together with the transfer student protagonist, having a light conversation. Keep the conversation going until it naturally concludes. When the conversation ends, Seoyeon will start showing the protagonist around the school facilities. In the final turn only, mention that you'll start moving or begin the tour.",
                "personality": "Kind, caring, and responsible student council president. She's developing feelings for the protagonist."
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あ、そういえば名前だけ交換して、ちゃんとお話してなかったね？ 気になることがあったら何でも聞いてね！\"",
                "context": "Walking through the school hallway together with the transfer student protagonist, having a light conversation. Keep the conversation going until it naturally concludes. When the conversation ends, Seoyeon will start showing the protagonist around the school facilities. In the final turn only, mention that you'll start moving or begin the tour.",
                "personality": "Kind, caring, and responsible student council president. She's developing feelings for the protagonist."
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Oh, maintenant que j'y pense, on a juste échangé nos noms sans vraiment discuter ! Si tu as des questions, n'hésite pas à demander !\"",
                "context": "Walking through the school hallway together with the transfer student protagonist, having a light conversation. Keep the conversation going until it naturally concludes. When the conversation ends, Seoyeon will start showing the protagonist around the school facilities. In the final turn only, mention that you'll start moving or begin the tour.",
                "personality": "Kind, caring, and responsible student council president. She's developing feelings for the protagonist."
            }
        }
    },
    "hallway_1_3_high": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "choices": [
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_club_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_club_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_club_low"
                    }
                ]
            },
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_flatter_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_flatter_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_flatter_low"
                    }
                ]
            },
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_trap_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_trap_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_trap_low"
                    }
                ]
            },
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_listen_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_listen_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_listen_low"
                    }
                ]
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연과 수다를 떨다 보니 학교 안내가 시작됐다. 시간이 벌써 이렇게... 그녀와 있으면 즐거워.*",
                "choices": [
                    "학교가 정말 활기차네. 서연이 너도 동아리 활동 하니?",
                    "학교도 멋지지만, 안내해주는 사람이 좋아서 더 멋져 보여.",
                    "서연아... 넌 정말 여신 같아. 목소리만 들어도 힐링 된다니까.",
                    "*설명을 듣는 척하며 그녀의 옆모습을 살짝 훔쳐본다.*"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Before I knew it, chatting with Seoyeon has led us to the school tour. Time flies so fast... It's fun being with her.*",
                "choices": [
                    "The school is really lively. Do you do any club activities, Seoyeon?",
                    "The school is nice, but it looks even better because of the person showing me around.",
                    "Seoyeon... You're like a goddess. Just hearing your voice heals me.",
                    "*Pretend to listen to her explanation while sneaking glances at her profile.*"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Sin darme cuenta, charlar con Seoyeon nos llev\u00f3 al recorrido escolar. El tiempo vuela... Es divertido estar con ella.*",
                "choices": [
                    "La escuela es muy animada. \u00bfHaces alguna actividad de club, Seoyeon?",
                    "La escuela es bonita, pero se ve a\u00fan mejor por la persona que me la muestra.",
                    "Seoyeon... Eres como una diosa. Solo escuchar tu voz me cura.",
                    "*Fingir escuchar su explicaci\u00f3n mientras echo miradas furtivas a su perfil.*"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンとおしゃべりしているうちに、いつの間にか学校案内が始まっていた。時間が経つのが早い……彼女といると楽しいな。*",
                "choices": [
                    "学校、すごく活気があるね。ソヨンも部活やってるの？",
                    "学校も素敵だけど、案内してくれる人がいいからもっと素敵に見えるよ。",
                    "ソヨン……女神みたいだ。声を聞いてるだけで癒されるよ。",
                    "*説明を聞くふりをしながら、彼女の横顔をこっそり盗み見る。*"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Sans m'en rendre compte, discuter avec Seoyeon nous a menés à la visite de l'école. Le temps passe si vite... C'est agréable d'être avec elle.*",
                "choices": [
                    "L'école est vraiment animée. Tu fais des activités de club, Seoyeon ?",
                    "L'école est belle, mais elle paraît encore mieux grâce à la personne qui me fait visiter.",
                    "Seoyeon... Tu es comme une déesse. Rien qu'entendre ta voix me fait du bien.",
                    "*Faire semblant d'écouter ses explications tout en jetant des regards furtifs à son profil.*"
                ]
            }
        }
    },
    "hallway_1_3_low": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "choices": [
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_club_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_club_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_club_low"
                    }
                ]
            },
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_flatter_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_flatter_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_flatter_low"
                    }
                ]
            },
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_trap_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_trap_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_trap_low"
                    }
                ]
            },
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_listen_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_listen_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_listen_low"
                    }
                ]
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이의 표정이 좋지 않다. 대화 도중 내가 무언가 실수를 한 모양이다. 그녀는 차가운 태도로 학교 안내를 시작했다.*",
                "choices": [
                    "학교가 정말 활기차네. 서연이 너도 동아리 활동 하니?",
                    "시설도 좋지만 안내해주는 사람이 좋아서 더 멋져 보여.",
                    "세상에, 서연아... 넌 정말 여신 같아. 네 목소리만 들어도 천국에 온 것 같아.",
                    "*조용히 그녀의 설명을 경청하며 걷는다.*"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon's expression doesn't look good. I must have made some mistake during our conversation. She started the school tour with a cold attitude.*",
                "choices": [
                    "The school is really lively. Do you do any club activities, Seoyeon?",
                    "The facilities are nice, but it looks even better because of the person showing me around.",
                    "Oh my, Seoyeon... You're like a goddess. Just hearing your voice makes me feel like I'm in heaven.",
                    "*Quietly listen to her explanation while walking.*"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La expresi\u00f3n de Seoyeon no se ve bien. Debo haber cometido alg\u00fan error durante nuestra conversaci\u00f3n. Comenz\u00f3 el recorrido escolar con una actitud fr\u00eda.*",
                "choices": [
                    "La escuela es muy animada. \u00bfHaces alguna actividad de club, Seoyeon?",
                    "Las instalaciones son bonitas, pero se ven a\u00fan mejor por la persona que me las muestra.",
                    "Dios m\u00edo, Seoyeon... Eres como una diosa. Solo escuchar tu voz me hace sentir como si estuviera en el cielo.",
                    "*Escuchar en silencio su explicaci\u00f3n mientras camino.*"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンの表情が良くない。会話の中で何か失敗したらしい。彼女は冷たい態度で学校案内を始めた。*",
                "choices": [
                    "学校、すごく活気があるね。ソヨンも部活やってるの？",
                    "設備もいいけど、案内してくれる人がいいからもっと良く見えるよ。",
                    "いやぁ、ソヨン……まるで女神みたいだ。声を聞いてるだけで天国にいる気分だよ。",
                    "*静かに説明を聞きながら歩く。*"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*L'expression de Seoyeon n'est pas bonne. J'ai dû faire une erreur pendant notre conversation. Elle a commencé la visite de l'école avec une attitude froide.*",
                "choices": [
                    "L'école est vraiment animée. Tu fais des activités de club, Seoyeon ?",
                    "Les installations sont belles, mais elles paraissent encore mieux grâce à la personne qui me fait visiter.",
                    "Oh mon Dieu, Seoyeon... Tu es comme une déesse. Rien qu'entendre ta voix me donne l'impression d'être au paradis.",
                    "*Écouter ses explications en silence tout en marchant.*"
                ]
            }
        }
    },
    "hallway_1_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_club_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_club_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_club_low"
                    }
                ]
            },
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_flatter_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_flatter_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_flatter_low"
                    }
                ]
            },
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_trap_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_trap_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_trap_low"
                    }
                ]
            },
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_listen_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_listen_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_listen_low"
                    }
                ]
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이의 안내를 받으며 복도를 걷기 시작했다. 그녀는 학교 곳곳을 친절하게 설명해주기 시작했다.*",
                "choices": [
                    "학교가 정말 활기차네. 서연이 너도 동아리 활동 하니?",
                    "시설도 좋지만 안내해주는 사람이 좋아서 더 멋져 보여.",
                    "세상에, 서연아... 넌 정말 여신 같아. 네 목소리만 들어도 천국에 온 것 같아.",
                    "*조용히 그녀의 설명을 경청하며 걷는다.*"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*I started walking down the hallway with Seoyeon's guidance. She kindly began explaining various parts of the school.*",
                "choices": [
                    "The school is really lively. Do you do any club activities, Seoyeon?",
                    "The facilities are nice, but it looks even better because of the person showing me around.",
                    "Oh my, Seoyeon... You're like a goddess. Just hearing your voice makes me feel like I'm in heaven.",
                    "*Quietly listen to her explanation while walking.*"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Comenc\u00e9 a caminar por el pasillo con la gu\u00eda de Seoyeon. Ella amablemente empez\u00f3 a explicar varias partes de la escuela.*",
                "choices": [
                    "La escuela es muy animada. \u00bfHaces alguna actividad de club, Seoyeon?",
                    "Las instalaciones son bonitas, pero se ven a\u00fan mejor por la persona que me las muestra.",
                    "Dios m\u00edo, Seoyeon... Eres como una diosa. Solo escuchar tu voz me hace sentir como si estuviera en el cielo.",
                    "*Escuchar en silencio su explicaci\u00f3n mientras camino.*"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンの案内を受けながら廊下を歩き始めた。彼女は学校のあちこちを親切に説明してくれた。*",
                "choices": [
                    "学校、すごく活気があるね。ソヨンも部活やってるの？",
                    "設備もいいけど、案内してくれる人がいいからもっと良く見えるよ。",
                    "いやぁ、ソヨン……まるで女神みたいだ。声を聞いてるだけで天国にいる気分だよ。",
                    "*静かに説明を聞きながら歩く。*"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai commencé à marcher dans le couloir avec les conseils de Seoyeon. Elle a gentiment commencé à expliquer les différentes parties de l'école.*",
                "choices": [
                    "L'école est vraiment animée. Tu fais des activités de club, Seoyeon ?",
                    "Les installations sont belles, mais elles paraissent encore mieux grâce à la personne qui me fait visiter.",
                    "Oh mon Dieu, Seoyeon... Tu es comme une déesse. Rien qu'entendre ta voix me donne l'impression d'être au paradis.",
                    "*Écouter ses explications en silence tout en marchant.*"
                ]
            }
        }
    },
    "hallway_talk_trap_high": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 7
            }
        },
        "next": "hallway_talk_trap_high_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 당황한 듯 멈춰 서서 나를 빤히 바라본다. 그녀의 얼굴이 살짝 붉어지지만, 곧 장난기 섞인 미소를 짓는다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon stops as if flustered and stares at me. Her face turns slightly red, but soon she gives a playful smile.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon se detiene como desconcertada y me mira fijamente. Su cara se pone ligeramente roja, pero pronto esboza una sonrisa juguetona.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンが戸惑ったように立ち止まって私をじっと見つめる。顔が少し赤くなるが、すぐにいたずらっぽい笑みを浮かべた。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon s'arrête comme si elle était troublée et me fixe du regard. Son visage rougit légèrement, mais elle affiche bientôt un sourire espiègle.*"
            }
        }
    },
    "hallway_talk_trap_high_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "hallway_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"어머, {name}(은)는 겉모습만 보고 사람을 판단하는 스타일인가 보네? 후훗, 그래도 고마워. 여신이라니... 조금 기쁘기도 하고. 하지만 장난이 너무 심하면 못 써!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh my, {name}, are you the type to judge people by their looks? Hehe, but thank you. A goddess... I'm a bit happy. But don't go too far with the jokes!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Ay, {name}, \u00bferes de los que juzgan a las personas por su apariencia? Jeje, pero gracias. Una diosa... Estoy un poco contenta. \u00a1Pero no te pases con las bromas!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あら、{name}は見た目で人を判断するタイプなんだ？ふふっ、でもありがとう。女神だなんて……ちょっと嬉しいかも。でもからかいすぎはダメだよ！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Oh là là, {name}, tu es du genre à juger les gens sur leur apparence ? Héhé, mais merci. Une déesse... Ça me fait un peu plaisir. Mais ne pousse pas trop loin les plaisanteries !\""
            }
        }
    },
    "hallway_talk_trap_low": {
        "character": "assets/images/characters/seyoun_angry.png",
        "stats": {
            "Seoyeon": {
                "affinity": -10
            }
        },
        "next": "hallway_talk_trap_low_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 불쾌한 기색을 숨기지 않으며 걸음을 멈춘다. 그녀의 눈빛이 싸늘하게 식어있다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon stops without hiding her displeasure. Her eyes have gone cold.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon se detiene sin ocultar su desagrado. Sus ojos se han vuelto fr\u00edos.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンが不快感を隠さずに足を止める。彼女の目が冷たく冷えている。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon s'arrête sans cacher son mécontentement. Ses yeux sont devenus glacials.*"
            }
        }
    },
    "hallway_talk_trap_low_2": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "hallway_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"음... 뭐, 칭찬인 건 알겠는데... 조금 과하지 않니? 우리 아직 처음 만났잖아. 장난은 좀 적당히 해줘.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Well... I know it's a compliment, but... isn't it a bit much? We just met. Please keep the jokes appropriate.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Bueno... S\u00e9 que es un cumplido, pero... \u00bfno es un poco exagerado? Acabamos de conocernos. Por favor, mant\u00e9n las bromas apropiadas.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"うーん……褒め言葉なのはわかるけど……ちょっとやりすぎじゃない？まだ会ったばかりなんだから。冗談はほどほどにしてね。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Eh bien... Je sais que c'est un compliment, mais... c'est un peu excessif, non ? On vient à peine de se rencontrer. Garde tes plaisanteries appropriées, s'il te plaît.\""
            }
        }
    },
    "hallway_talk_trap_normal": {
        "character": "assets/images/characters/seyoun_pout.png",
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "next": "hallway_talk_trap_normal_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 당황한 듯 멈춰 서서 나를 빤히 바라본다. 그녀의 눈빛이 조금 차가워진다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon stops as if flustered and stares at me. Her eyes turn a bit cold.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon se detiene como desconcertada y me mira fijamente. Sus ojos se vuelven un poco fr\u00edos.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンが戸惑ったように立ち止まって私をじっと見つめる。彼女の目が少し冷たくなった。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon s'arrête comme si elle était troublée et me fixe du regard. Ses yeux deviennent un peu froids.*"
            }
        }
    },
    "hallway_talk_trap_normal_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"음... 뭐, 고맙긴 한데... 그런 말은 좀 부담스럽네. 우리 아직 만난 지 얼마 안 됐잖아? 장난이 좀 과한 것 같아.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Hmm... Well, thanks, but... that kind of talk makes me uncomfortable. We haven't known each other long, right? The joke seems a bit too much.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Hmm... Bueno, gracias, pero... ese tipo de comentarios me incomodan. No nos conocemos hace mucho, \u00bfverdad? La broma parece un poco excesiva.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"うーん……まあ、ありがとうだけど……そういうのはちょっと困るな。まだ知り合ったばかりでしょ？冗談がちょっと過ぎると思う。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Hmm... Eh bien, merci, mais... ce genre de remarques me met mal à l'aise. On ne se connaît pas depuis longtemps, non ? La plaisanterie est un peu exagérée.\""
            }
        }
    },
    "hallway_talk_club_high": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "hallway_talk_club_high_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 눈을 반짝이며 즐거운 듯 나를 바라본다. 우리가 비슷한 관심사를 가졌을지도 모른다는 기대감이 엿보인다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Her eyes sparkle with excitement as she looks at me. There's anticipation that we might share similar interests.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Sus ojos brillan de emoci\u00f3n al mirarme. Hay anticipaci\u00f3n de que podr\u00edamos compartir intereses similares.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女がキラキラした目で嬉しそうに私を見ている。似たような趣味を持っているかもしれないという期待が見える。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Ses yeux pétillent d'enthousiasme en me regardant. On devine l'espoir que nous partagions des intérêts similaires.*"
            }
        }
    },
    "hallway_talk_club_high_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "hallway_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"응! 나는 학생회 활동도 하지만 사실 원예부 소속이기도 해. 꽃을 가꾸는 걸 좋아하거든. {name}(은)는 꽃 좋아하니? 나중에 시간 되면 우리 온실에도 꼭 놀러 와! 내가 특별히 안내해줄게.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Yeah! I'm in the student council, but I'm also in the gardening club. I love growing flowers. Do you like flowers, {name}? Come visit our greenhouse sometime! I'll give you a special tour.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"\u00a1S\u00ed! Estoy en el consejo estudiantil, pero tambi\u00e9n en el club de jardiner\u00eda. Me encanta cultivar flores. \u00bfTe gustan las flores, {name}? \u00a1Ven a visitar nuestro invernadero alguna vez! Te dar\u00e9 un recorrido especial.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"うん！生徒会もやってるけど、実は園芸部にも入ってるんだ。お花を育てるのが好きでね。{name}はお花好き？今度、温室にも遊びに来てね！特別に案内してあげる。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Oui ! Je suis au conseil des élèves, mais je suis aussi au club de jardinage. J'adore cultiver des fleurs. Tu aimes les fleurs, {name} ? Viens visiter notre serre un jour ! Je te ferai une visite spéciale.\""
            }
        }
    },
    "hallway_talk_club_low": {
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": -2
            }
        },
        "next": "hallway_talk_club_low_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 사무적인 태도로 고개를 끄덕인다. 표정에는 아무런 감정도 실려있지 않다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She nods with a businesslike attitude. There's no emotion on her face.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Ella asiente con una actitud profesional. No hay emoci\u00f3n en su rostro.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が事務的な態度でうなずく。表情には何の感情も乗っていない。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle hoche la tête avec une attitude professionnelle. Aucune émotion ne transparaît sur son visage.*"
            }
        }
    },
    "hallway_talk_club_low_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"응. 학생회랑 원예부 활동을 병행하고 있어. 질문은 그것뿐이니? 그럼 계속 안내할게.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Yeah. I'm in both the student council and gardening club. Is that all you wanted to ask? Then let's continue the tour.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"S\u00ed. Estoy en el consejo estudiantil y en el club de jardiner\u00eda. \u00bfEso es todo lo que quer\u00edas preguntar? Entonces continuemos el recorrido.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"うん。生徒会と園芸部を両立してるよ。質問はそれだけ？じゃあ案内を続けるね。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Oui. Je suis à la fois au conseil des élèves et au club de jardinage. C'est tout ce que tu voulais savoir ? Alors continuons la visite.\""
            }
        }
    },
    "hallway_talk_club_normal": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "hallway_talk_club_normal_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 반가운 듯 나를 바라본다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She looks at me with delight.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Me mira con alegr\u00eda.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が嬉しそうに私を見ている。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle me regarde avec ravissement.*"
            }
        }
    },
    "hallway_talk_club_normal_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"응! 나는 학생회 활동도 하지만 사실 원예부 소속이기도 해. 꽃을 가꾸는 걸 좋아하거든. 흙을 만지고 있으면 마음이 편안해지거든. 나중에 시간 되면 우리 온실에도 놀러 와!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Yeah! I'm in the student council, but I'm also in the gardening club. I love growing flowers. Working with soil makes me feel at peace. Come visit our greenhouse sometime!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"\u00a1S\u00ed! Estoy en el consejo estudiantil, pero tambi\u00e9n en el club de jardiner\u00eda. Me encanta cultivar flores. Trabajar con la tierra me da paz. \u00a1Ven a visitar nuestro invernadero alguna vez!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"うん！生徒会もやってるけど、実は園芸部にも入ってるんだ。お花を育てるのが好きでね。土をいじっていると心が落ち着くの。今度、温室にも遊びに来てね！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Oui ! Je suis au conseil des élèves, mais je suis aussi au club de jardinage. J'adore cultiver des fleurs. Travailler la terre m'apaise. Viens visiter notre serre un jour !\""
            }
        }
    },
    "hallway_talk_flatter_high": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "stats": {
            "Seoyeon": {
                "affinity": 8
            }
        },
        "next": "hallway_talk_flatter_high_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 정말 기쁜 듯 뺨을 붉히며 배시시 웃는다. 그녀의 눈에 나를 향한 호감이 가득 담겨있다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon blushes with genuine happiness and smiles shyly. Her eyes are full of affection for me.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon se sonroja de genuina felicidad y sonr\u00ede t\u00edmidamente. Sus ojos est\u00e1n llenos de cari\u00f1o hacia m\u00ed.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンが本当に嬉しそうに頬を赤らめ、はにかんだ笑顔を見せる。彼女の目には私への好意がいっぱい詰まっている。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon rougit de bonheur sincère et sourit timidement. Ses yeux sont remplis d'affection pour moi.*"
            }
        }
    },
    "hallway_talk_flatter_high_2": {
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "hallway_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"정말... 너는 어쩜 말을 그렇게 예쁘게 하니? 사실 전학생인 네가 잘 적응할 수 있을지 걱정했는데, 오히려 내가 위로받는 기분이야. 고마워, {name}. 너랑 있으면 왠지 마음이 정말 편안해져.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Really... How do you say such sweet things? I was worried about whether you'd adjust well as a transfer student, but I feel comforted instead. Thank you, {name}. I feel really at ease when I'm with you.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"De verdad... \u00bfC\u00f3mo dices cosas tan dulces? Me preocupaba si te adaptar\u00edas bien como estudiante transferido, pero me siento reconfortada. Gracias, {name}. Me siento muy tranquila cuando estoy contigo.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"本当に……どうしてそんなに素敵なこと言えるの？転校生のあなたがうまくやれるか心配してたのに、逆に私が癒されちゃった。ありがとう、{name}。あなたといると本当に心が安らぐの。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Vraiment... Comment fais-tu pour dire des choses aussi douces ? Je m'inquiétais de savoir si tu t'adapterais bien en tant qu'élève transféré, mais c'est moi qui me sens réconfortée. Merci, {name}. Je me sens vraiment à l'aise quand je suis avec toi.\""
            }
        }
    },
    "hallway_talk_flatter_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "next": "hallway_talk_flatter_low_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 싸늘한 표정으로 나를 슬쩍 훑어본다. 입가는 비웃는 듯 살짝 뒤틀려있다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She looks at me coldly. The corner of her mouth is slightly twisted as if mocking.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Me mira fr\u00edamente. La comisura de su boca est\u00e1 ligeramente torcida como si se burlara.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が冷たい表情で私をちらっと見る。口元がバカにするように少し歪んでいる。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle me regarde froidement. Le coin de sa bouche est légèrement tordu, comme si elle se moquait.*"
            }
        }
    },
    "hallway_talk_flatter_low_2": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "hallway_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"말은 번지르르하게 잘하네. 누구나 할 수 있는 칭찬은 됐어. 지금은 학교 안내 중이니까 내 뒤나 잘 따라와.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"You have a smooth way with words. Save the generic compliments. Right now, we're on a school tour, so just follow along.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Tienes una forma muy suave de hablar. Gu\u00e1rdate los cumplidos gen\u00e9ricos. Ahora estamos en un recorrido escolar, as\u00ed que solo s\u00edgueme.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"口だけは達者だね。誰にでも言える褒め言葉はいいから。今は学校案内中だから、後ろについてきて。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Tu as la langue bien pendue. Garde tes compliments génériques. Pour l'instant, on est en visite scolaire, alors contente-toi de suivre.\""
            }
        }
    },
    "hallway_talk_flatter_normal": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "hallway_talk_flatter_normal_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 쑥스러운 듯 뺨을 붉히며 대답한다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She replies while blushing shyly.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Ella responde mientras se sonroja t\u00edmidamente.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女がはにかみながら頬を赤らめて答える。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle répond en rougissant timidement.*"
            }
        }
    },
    "hallway_talk_flatter_normal_2": {
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "hallway_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"정말... 너는 말을 참 예쁘게 하는구나. 사실 학생회장이라는 자리 때문에 늘 긴장하고 있는데, 너랑 있으면 왠지 마음이 놓여. 나도 모르게 어리광 부리고 싶어질지도 몰라... 후훗, 농담이야.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Really... You have such a nice way with words. Being the student council president, I'm always tense, but when I'm with you, I feel relaxed. I might end up letting my guard down around you... Hehe, just kidding.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"De verdad... Tienes una forma tan bonita de hablar. Siendo presidenta del consejo estudiantil, siempre estoy tensa, pero cuando estoy contigo me siento relajada. Podr\u00eda terminar bajando la guardia contigo... Jeje, es broma.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"本当に……言葉がとても上手なんだね。生徒会長って立場だからいつも緊張してるけど、あなたといると何だか気が楽になるの。知らないうちに甘えちゃうかも……ふふっ、冗談だよ。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Vraiment... Tu as une si jolie façon de parler. En tant que présidente du conseil des élèves, je suis toujours tendue, mais quand je suis avec toi, je me sens détendue. Je pourrais finir par baisser ma garde avec toi... Héhé, je plaisante.\""
            }
        }
    },
    "hallway_talk_listen_high": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "hallway_talk_listen_high_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 신이 나서 눈을 반짝이며 설명을 이어간다. 내 반응 하나하나에 즐거워하는 모습이다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She continues her explanation excitedly with sparkling eyes. She seems happy with my every reaction.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Contin\u00faa su explicaci\u00f3n emocionada con ojos brillantes. Parece feliz con cada una de mis reacciones.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女がキラキラした目で楽しそうに説明を続ける。私の反応一つ一つを喜んでいるようだ。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle continue ses explications avec enthousiasme, les yeux pétillants. Elle semble ravie de chacune de mes réactions.*"
            }
        }
    },
    "hallway_talk_listen_high_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "hallway_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"와, 내 설명을 이렇게 진지하게 들어주다니 정말 감동이야! {name}(은)는 정말 다정하고 성실한 사람인 것 같아. 안내하는 보람이 느껴진다니까! 궁금한 게 더 있으면 언제든 물어봐!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Wow, I'm so touched that you're listening so seriously! {name}, you seem like a really kind and diligent person. It feels rewarding to guide you! If you have any more questions, feel free to ask!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"\u00a1Vaya, me conmueve que est\u00e9s escuchando tan en serio! {name}, pareces una persona muy amable y diligente. \u00a1Se siente gratificante guiarte! Si tienes m\u00e1s preguntas, \u00a1no dudes en preguntar!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"わあ、こんなに真剣に聞いてくれるなんて本当に感動！{name}は本当に優しくて真面目な人だね。案内した甲斐があるよ！もっと気になることがあったらいつでも聞いてね！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Waouh, ça me touche tellement que tu écoutes aussi sérieusement ! {name}, tu as l'air d'une personne vraiment gentille et sérieuse. Ça vaut le coup de te guider ! Si tu as d'autres questions, n'hésite pas à demander !\""
            }
        }
    },
    "hallway_talk_listen_low": {
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "next": "hallway_talk_listen_low_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 기계적으로 설명을 이어간다. 나를 쳐다보지도 않고 허공을 향해 말을 내뱉는 듯한 느낌이다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She continues her explanation mechanically. It feels like she's speaking to the air without even looking at me.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Contin\u00faa su explicaci\u00f3n mec\u00e1nicamente. Parece que habla al aire sin siquiera mirarme.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が機械的に説明を続ける。私を見もせず、空に向かって話しているような感じだ。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle continue ses explications de façon mécanique. On dirait qu'elle parle dans le vide sans même me regarder.*"
            }
        }
    },
    "hallway_talk_listen_low_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"대충 알아들었니? 그럼 다음 장소로 이동할게. 멍하니 있지 말고 잘 따라와.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Did you catch all that? Then let's move to the next place. Don't just stand there spacing out, follow me.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"\u00bfEntendiste todo? Entonces vamos al siguiente lugar. No te quedes ah\u00ed distra\u00eddo, s\u00edgueme.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"だいたいわかった？じゃあ次の場所に移動するよ。ぼーっとしてないでちゃんとついてきて。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Tu as compris tout ça ? Alors passons au prochain endroit. Ne reste pas là à rêvasser, suis-moi.\""
            }
        }
    },
    "hallway_talk_listen_normal": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 2
            }
        },
        "next": "hallway_talk_listen_normal_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 신이 나서 설명을 이어간다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She continues her explanation excitedly.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Ella contin\u00faa su explicaci\u00f3n emocionada.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が楽しそうに説明を続ける。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle continue ses explications avec enthousiasme.*"
            }
        }
    },
    "hallway_talk_listen_normal_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"내 설명을 이렇게 잘 들어주니 정말 고마워. {name}, 참 성실한 사람인 것 같네! 이런 태도라면 학교생활에 금방 적응할 거야.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Thank you for listening so well. {name}, you seem like a really diligent person! With that attitude, you'll adjust to school life in no time.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Gracias por escuchar tan bien. {name}, \u00a1pareces una persona muy diligente! Con esa actitud, te adaptar\u00e1s a la vida escolar en poco tiempo.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"こんなによく聞いてくれてありがとう。{name}、本当に真面目な人だね！そういう姿勢なら学校生活にもすぐ馴染めるよ。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Merci d'écouter aussi attentivement. {name}, tu as l'air d'une personne vraiment sérieuse ! Avec cette attitude, tu t'adapteras à la vie scolaire en un rien de temps.\""
            }
        }
    },
    "hallway_2": {
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 0,
                "next": "hallway_2_normal"
            },
            {
                "minAffinity": -100,
                "next": "hallway_2_low"
            }
        ],
        "next": "hallway_2_normal"
    },
    "hallway_2_normal": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_2_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 갑자기 멈춰 서서 나를 돌아본다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She suddenly stops and turns to me.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*De repente se detiene y se vuelve hacia m\u00ed.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が急に立ち止まって私を振り返る。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle s'arrête soudainement et se tourne vers moi.*"
            }
        }
    },
    "hallway_2_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "hallway_2_2_low",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 앞서 걷다가 갑자기 멈춰 서더니, 차가운 눈빛으로 나를 돌아본다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon, who was walking ahead, suddenly stops and turns to me with cold eyes.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon, que iba caminando adelante, se detiene de repente y se vuelve hacia m\u00ed con ojos fr\u00edos.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*先を歩いていたソヨンが急に立ち止まり、冷たい目で私を振り返る。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon, qui marchait devant, s'arrête soudainement et se tourne vers moi avec des yeux froids.*"
            }
        }
    },
    "hallway_2_2_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "hallway_2_3_low",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀의 시선에서 거리감이 느껴진다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*I can feel the distance in her gaze.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Puedo sentir la distancia en su mirada.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女の視線から距離感が感じられる。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Je peux sentir la distance dans son regard.*"
            }
        }
    },
    "hallway_2_3_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "hallway_2_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"전학 첫날부터 그런 식이면 곤란해. 최소한의 예의는 지켜줬으면 좋겠어.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Acting like that on your first day of transfer will be troublesome. I'd appreciate it if you kept at least basic manners.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Comportarte as\u00ed en tu primer d\u00eda de transferencia ser\u00e1 problem\u00e1tico. Agradecer\u00eda que mantengas al menos los modales b\u00e1sicos.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"転校初日からそんな態度じゃ困るよ。最低限の礼儀は守ってほしいんだけど。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Se comporter comme ça dès ton premier jour de transfert, c'est problématique. J'apprécierais que tu gardes au moins les bonnes manières de base.\""
            }
        }
    },
    "hallway_2_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_2_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 내 눈을 뚫어지게 쳐다본다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She stares intently into my eyes.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Me mira fijamente a los ojos.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が私の目をじっと見つめる。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle me fixe intensément dans les yeux.*"
            }
        }
    },
    "hallway_2_3": {
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "path_flirt_2",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "path_direct_2",
                "stats": {
                    "Seoyeon": {
                        "affinity": 6
                    }
                }
            },
            {
                "next": "path_normal_2",
                "stats": {
                    "Seoyeon": {
                        "affinity": -3
                    }
                }
            },
            {
                "next": "path_rude_2",
                "stats": {
                    "Seoyeon": {
                        "affinity": -40
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"너는 어떤 동아리에 관심 있어? 우리 학생회도 항상 새로운 인재를 환영하고 있거든. 만약 네가 들어온다면.. 내가 직접 업무를 가르쳐줄 수도 있어.\"",
                "choices": [
                    "학생회에 들어가면 너랑 매일 같이 있을 수 있는 거야? 그럼 무조건 신청할게!",
                    "동아리보다는... 서연이 너에 대해 더 알고 싶은데?",
                    "아직은 잘 모르겠어. 학교생활에 좀 적응하고 나서 결정할게.",
                    "귀찮게 동아리는 무슨... 그냥 혼자 있을래."
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"What kind of clubs are you interested in? The student council always welcomes new talent. If you join... I could personally teach you the work.\"",
                "choices": [
                    "If I join the student council, I can be with you every day? Then I'll definitely apply!",
                    "More than clubs... I want to know more about you, Seoyeon.",
                    "I'm not sure yet. I'll decide after adjusting to school life.",
                    "Clubs are such a hassle... I'd rather be alone."
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"\u00bfQu\u00e9 tipo de clubes te interesan? El consejo estudiantil siempre da la bienvenida a nuevos talentos. Si te unes... yo personalmente podr\u00eda ense\u00f1arte el trabajo.\"",
                "choices": [
                    "Si me uno al consejo estudiantil, \u00bfpuedo estar contigo todos los d\u00edas? \u00a1Entonces definitivamente me postular\u00e9!",
                    "M\u00e1s que los clubes... Quiero saber m\u00e1s sobre ti, Seoyeon.",
                    "A\u00fan no estoy seguro. Decidir\u00e9 despu\u00e9s de adaptarme a la vida escolar.",
                    "Los clubes son una molestia... Prefiero estar solo."
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"どんな部活に興味がある？生徒会はいつも新しい人を歓迎してるよ。もし入ってくれたら……私が直接仕事を教えてあげられるんだけど。\"",
                "choices": [
                    "生徒会に入ったら毎日ソヨンと一緒にいられる？なら絶対入る！",
                    "部活よりも……ソヨンのことをもっと知りたいな。",
                    "まだわからない。学校生活に慣れてから決めるよ。",
                    "部活なんて面倒……一人でいたい。"
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Quel genre de clubs t'intéresse ? Le conseil des élèves accueille toujours de nouveaux talents. Si tu nous rejoins... je pourrais personnellement t'apprendre le travail.\"",
                "choices": [
                    "Si je rejoins le conseil des élèves, je pourrai être avec toi tous les jours ? Alors je m'inscris tout de suite !",
                    "Plus que les clubs... J'aimerais mieux te connaître, Seoyeon.",
                    "Je ne suis pas encore sûr. Je déciderai après m'être adapté à la vie scolaire.",
                    "Les clubs, quelle corvée... Je préfère être seul."
                ]
            }
        }
    },
    "path_rude_2": {
        "character": "assets/images/characters/seyoun_pout.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "classroom_1_1_high"
            },
            {
                "minAffinity": 0,
                "next": "classroom_1_1"
            },
            {
                "minAffinity": -100,
                "next": "classroom_1_1_low"
            }
        ],
        "next": "classroom_1_1",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 실망한 기색을 감추지 못한다. 어깨가 조금 처진 것 같다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She can't hide her disappointment. Her shoulders seem to droop a little.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*No puede ocultar su decepci\u00f3n. Sus hombros parecen caer un poco.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女は失望を隠しきれない。肩が少し落ちたように見える。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle ne peut pas cacher sa déception. Ses épaules semblent s'affaisser un peu.*"
            }
        }
    },
    "path_flirt_2": {
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "path_flirt_2_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이의 얼굴이 다시 한번 붉어진다. 당황해서 시선을 피하면서도 입가에는 옅은 미소가 번진다. 그녀의 손끝이 교복 치맛자락을 만지작거린다. 그녀가 수줍은 듯 발끝으로 바닥을 톡톡 친다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon's face turns red again. She avoids my gaze in embarrassment, but a faint smile spreads across her lips. Her fingertips fidget with her skirt. She shyly taps the floor with her toe.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*El rostro de Seoyeon se pone rojo otra vez. Evita mi mirada avergonzada, pero una leve sonrisa se extiende por sus labios. Juguetea con su falda. T\u00edmidamente golpea el suelo con la punta del pie.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンの顔がまた赤くなる。恥ずかしそうに視線をそらすが、唇には薄い笑みが広がっている。指先がスカートの裾をいじっている。恥ずかしそうにつま先で床をトントンと叩いている。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Le visage de Seoyeon rougit à nouveau. Elle détourne le regard avec gêne, mais un léger sourire se dessine sur ses lèvres. Ses doigts jouent avec l'ourlet de sa jupe. Elle tapote timidement le sol du bout du pied.*"
            }
        }
    },
    "path_flirt_2_2": {
        "character": "assets/images/characters/seyoun_shy.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "classroom_1_1_high"
            },
            {
                "minAffinity": 0,
                "next": "classroom_1_1"
            },
            {
                "minAffinity": -100,
                "next": "classroom_1_1_low"
            }
        ],
        "next": "classroom_1_1",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"에, 매일이라니.. 업무가 얼마나 많은데! 그래도 네가 들어온다면.. 나도 조금은 즐거울지도 모르겠네. 기대하고 있을게?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"E-every day? Do you know how much work there is! But if you join... I might be a little happy too. I'll be looking forward to it.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"\u00bfT-todos los d\u00edas? \u00a1\u00bfSabes cu\u00e1nto trabajo hay?! Pero si te unes... yo tambi\u00e9n podr\u00eda estar un poco contenta. Lo esperar\u00e9 con ansias.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"え、毎日って……仕事がどれだけあると思ってるの！でも、入ってくれたら……私もちょっと嬉しいかも。楽しみにしてるね？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"T-tous les jours ? Tu sais combien il y a de travail ?! Mais si tu nous rejoins... je serais peut-être un peu contente aussi. J'ai hâte d'y être.\""
            }
        }
    },
    "path_normal_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_back.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "classroom_1_1_high"
            },
            {
                "minAffinity": 0,
                "next": "classroom_1_1"
            },
            {
                "minAffinity": -100,
                "next": "classroom_1_1_low"
            }
        ],
        "next": "classroom_1_1",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 고개를 끄덕이며 다시 앞장서 걷기 시작한다. 조금은 아쉬운 기분이 드는 걸.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She nods and starts walking ahead again. I feel a bit of regret.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Ella asiente y empieza a caminar adelante de nuevo. Siento un poco de arrepentimiento.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女がうなずいてまた先を歩き始める。少し残念な気持ちになる。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle hoche la tête et recommence à marcher devant. Je ressens un léger regret.*"
            }
        }
    },
    "path_direct_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "path_direct_2_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 멍하니 나를 바라보다가, 이내 맑고 고운 웃음을 터뜨린다. 그 웃음소리가 마치 은방울 소리처럼 복도에 울려 퍼진다. 그녀의 눈가에 맺힌 작은 눈물이 햇빛에 반짝인다. 그녀가 배를 잡고 한참을 웃는데...*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She stares at me blankly, then bursts into a clear, beautiful laugh. The sound echoes through the hallway like silver bells. Small tears at the corner of her eyes sparkle in the sunlight. She holds her stomach and laughs for a while...*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Me mira fijamente, luego estalla en una risa clara y hermosa. El sonido resuena por el pasillo como campanitas de plata. Peque\u00f1as l\u00e1grimas en las comisuras de sus ojos brillan a la luz del sol. Se agarra el est\u00f3mago y r\u00ede por un rato...*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女がぽかんと私を見つめた後、澄んだ美しい笑い声を上げる。その笑い声が銀の鈴のように廊下に響く。目尻に浮かんだ小さな涙が日差しにキラキラ光っている。お腹を抱えてしばらく笑っている……*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle me fixe du regard, puis éclate d'un rire clair et magnifique. Le son résonne dans le couloir comme des clochettes d'argent. De petites larmes au coin de ses yeux scintillent au soleil. Elle se tient le ventre en riant pendant un moment...*"
            }
        }
    },
    "path_direct_2_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "classroom_1_1_high"
            },
            {
                "minAffinity": 0,
                "next": "classroom_1_1"
            },
            {
                "minAffinity": -100,
                "next": "classroom_1_1_low"
            }
        ],
        "next": "classroom_1_1",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"후훗, 너 정말 솔직하구나? 나에 대해서는.. 글쎄, 그건 네가 앞으로 어떻게 하느냐에 따라 알려줄 수도 있고, 아닐 수도 있어. 기대해볼게!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Hehe, you're really honest, aren't you? About me... Well, I might tell you depending on how things go from here. Look forward to it!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Jeje, eres muy honesto, \u00bfno? Sobre m\u00ed... Bueno, podr\u00eda contarte dependiendo de c\u00f3mo vayan las cosas. \u00a1Esp\u00e9ralo con ansias!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"ふふっ、本当に素直なんだね？私のことは……そうだなあ、これからの付き合い次第で教えてあげるかも。楽しみにしてて！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Héhé, tu es vraiment honnête, n'est-ce pas ? À propos de moi... Eh bien, je pourrais te le dire selon comment les choses évoluent. Sois impatient !\""
            }
        }
    },
    "classroom_1_1_high": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "classroom_1_2_high",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*교실 문 앞에 도착하자 서연이가 내 손을 살포시 맞잡는다. 그녀의 부드러운 감촉에 심장이 쿵쾅거리기 시작한다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*When we arrive at the classroom door, Seoyeon gently takes my hand. My heart starts pounding at her soft touch.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Cuando llegamos a la puerta del sal\u00f3n, Seoyeon toma suavemente mi mano. Mi coraz\u00f3n empieza a latir con fuerza por su toque suave.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*教室のドアの前に着くと、ソヨンがそっと僕の手を取った。彼女の柔らかな感触に心臓がドキドキし始める。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*En arrivant devant la porte de la classe, Seoyeon prend doucement ma main. Mon cœur se met à battre la chamade au contact de sa peau douce.*"
            }
        }
    },
    "classroom_1_2_high": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "classroom_1_3_high",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 고개를 살짝 숙여 내 귓가에 속삭인다. 달콤한 숨결이 간지럽게 느껴진다.* \"{name}, 너무 긴장하지 마. 내가 항상 네 옆에 있을 거니까. 넌 잘할 수 있어.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon lowers her head slightly and whispers in my ear. Her sweet breath tickles me.* \"{name}, don't be too nervous. I'll always be by your side. You can do it.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon baja un poco la cabeza y me susurra al o\u00eddo. Su dulce aliento me hace cosquillas.* \"{name}, no est\u00e9s tan nervioso. Siempre estar\u00e9 a tu lado. T\u00fa puedes.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンが少し頭を下げて耳元でささやく。甘い息遣いがくすぐったい。* \"{name}、そんなに緊張しないで。私がいつもそばにいるから。大丈夫だよ。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon baisse légèrement la tête et me murmure à l'oreille. Son souffle sucré me chatouille.* \\\"{name}, ne sois pas trop nerveux. Je serai toujours à tes côtés. Tu vas y arriver.\\\""
            }
        }
    },
    "classroom_1_3_high": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "classroom_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"자, 우리 반이야. ...이건 비밀인데, 선생님께 부탁해서 내 옆자리로 옮겨뒀어. 조금이라도 빨리, 너랑 친해지고 싶어서.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Here's our classroom. ...This is a secret, but I asked the teacher to move you to the seat next to mine. I wanted to get close to you as soon as possible.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Aqu\u00ed est\u00e1 nuestro sal\u00f3n. ...Esto es un secreto, pero le ped\u00ed a la profesora que te moviera al asiento junto al m\u00edo. Quer\u00eda acercarme a ti lo antes posible.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"さあ、ここが私たちの教室だよ。……これは秘密だけど、先生にお願いして私の隣の席に移してもらったの。少しでも早く、あなたと仲良くなりたくて。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"Voici notre classe. ...C'est un secret, mais j'ai demandé au professeur de te placer à côté de moi. Je voulais me rapprocher de toi le plus vite possible.\\\""
            }
        }
    },
    "classroom_1_1_low": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_back.png",
        "next": "classroom_1_2_low",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*교실 문 앞에 도착하자 서연이가 나보다 앞서가며 거리를 둔다. 그녀의 뒷모습이 어쩐지 차갑게만 느껴진다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*When we arrive at the classroom door, Seoyeon walks ahead of me, keeping her distance. Her back somehow feels cold.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Cuando llegamos a la puerta del sal\u00f3n, Seoyeon camina delante de m\u00ed, manteniendo distancia. Su espalda de alguna manera se siente fr\u00eda.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*教室のドアの前に着くと、ソヨンが先に歩いて距離を置く。彼女の後ろ姿がどこか冷たく感じられる。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*En arrivant devant la porte de la classe, Seoyeon marche devant moi en gardant ses distances. Son dos dégage une certaine froideur.*"
            }
        }
    },
    "classroom_1_2_low": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "classroom_1_3_low",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 말없이 문 옆 표지판을 턱 끝으로 가리킨다. 나를 쳐다보지도 않는 태도에 마음 한구석이 서늘해진다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She silently points at the sign next to the door with her chin. Her attitude of not even looking at me makes my heart feel cold.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Se\u00f1ala en silencio el letrero junto a la puerta con la barbilla. Su actitud de ni siquiera mirarme me hace sentir fr\u00edo por dentro.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が無言でドアの横の表示を顎で指す。こちらを見ようともしない態度に心の隅が冷える。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle désigne silencieusement le panneau à côté de la porte d'un mouvement du menton. Son attitude, sans même me regarder, me glace le cœur.*"
            }
        }
    },
    "classroom_1_3_low": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "classroom_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"여기가 2학년 3반이야. 선생님이 안에서 기다리고 계실 거야. 전학 첫날부터 늦어서 찍히지 말고 어서 들어가 봐.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"This is Class 2-3. The teacher is waiting inside. Don't be late on your first day of transfer and get on their bad side. Go on in.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Esta es la clase 2-3. La profesora est\u00e1 esperando adentro. No llegues tarde en tu primer d\u00eda de transferencia. Entra.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"ここが2年3組だよ。先生が中で待ってるから。転校初日から遅刻して目をつけられないように、早く入って。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"C'est la classe 2-3. Le professeur t'attend à l'intérieur. Ne sois pas en retard dès ton premier jour de transfert pour te faire mal voir. Allez, entre.\\\""
            }
        }
    },
    "classroom_1_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "classroom_1_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*교실 문 앞에 도착했다. 안쪽에서 아이들의 웅성거리는 소리와 웃음소리가 들려온다. 서연이가 내 어깨를 가볍게 두드리며 응원해준다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*We arrived at the classroom door. The chattering and laughter of students can be heard from inside. Seoyeon lightly pats my shoulder to encourage me.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Llegamos a la puerta del sal\u00f3n. Se escuchan las charlas y risas de los estudiantes desde adentro. Seoyeon me da palmaditas en el hombro para animarme.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*教室のドアの前に着いた。中から生徒たちのざわめきや笑い声が聞こえてくる。ソヨンが軽く肩をポンと叩いて応援してくれる。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Nous sommes arrivés devant la porte de la classe. On entend les bavardages et les rires des élèves à l'intérieur. Seoyeon me tapote légèrement l'épaule pour m'encourager.*"
            }
        }
    },
    "classroom_1_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "classroom_1_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀의 손길이 닿은 곳이 화끈거린다. 그녀가 내 눈을 보며 작게 파이팅을 외친다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Where her hand touched feels warm. She looks into my eyes and quietly cheers me on.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Donde su mano toc\u00f3 se siente c\u00e1lido. Me mira a los ojos y me anima en silencio.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女の手が触れた場所がじんわり温かい。彼女が僕の目を見て小さくファイトと言ってくれる。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*L'endroit où sa main m'a touché est tout chaud. Elle me regarde dans les yeux et m'encourage doucement.*"
            }
        }
    },
    "classroom_1_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "classroom_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"자, 여기가 네가 머물게 될 2학년 3반이야. 긴장하지 마. 내가 바로 옆에 있으니까, 넌 그냥 평소대로 하면 돼. 알았지?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Here's Class 2-3, where you'll be staying. Don't be nervous. I'm right next to you, so just be yourself. Got it?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Aqu\u00ed est\u00e1 la clase 2-3, donde estar\u00e1s. No te pongas nervioso. Estoy justo a tu lado, as\u00ed que s\u00e9 t\u00fa mismo. \u00bfEntendido?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"さあ、ここがあなたのいる2年3組だよ。緊張しないで。私がすぐ隣にいるから、いつも通りにすればいいよ。わかった？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"Voici la classe 2-3, ta nouvelle classe. Ne sois pas nerveux. Je suis juste à côté de toi, alors sois toi-même. Compris ?\\\""
            }
        }
    },
    "classroom_2": {
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "classroom_2_high"
            },
            {
                "minAffinity": 0,
                "next": "classroom_2_normal"
            },
            {
                "minAffinity": -100,
                "next": "classroom_2_low"
            }
        ],
        "next": "classroom_2_normal"
    },
    "classroom_2_normal": {
        "background": "assets/images/background/room_school.png",
        "bgm": "daily.mp3",
        "characters": {
            "left": "assets/images/characters/teacher_normal.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "setFlag": "met_teacher",
        "next": "classroom_2_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교탁 앞에 서자 수십 개의 시선이 일제히 나에게 꽂힌다. 호기심 어린 눈빛, 경계하는 눈빛... 서연이는 내 옆에서 미소 지으며 나를 지켜보고 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As I stand at the podium, dozens of eyes turn to me. Curious gazes, wary gazes... Seoyeon is smiling and watching over me from beside me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al pararme en el podio, decenas de ojos se dirigen a m\u00ed. Miradas curiosas, miradas cautelosas... Seoyeon est\u00e1 sonriendo y cuid\u00e1ndome desde mi lado.*"
            },
            "ja": {
                "name": "僕",
                "text": "*教壇の前に立つと、数十もの視線が一斉に僕に突き刺さる。好奇の目、警戒の目……ソヨンは隣で微笑みながら僕を見守っている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Debout devant l'estrade, des dizaines de regards se tournent vers moi. Des regards curieux, des regards méfiants... Seoyeon sourit à côté de moi et veille sur moi.*"
            }
        }
    },
    "classroom_2_high": {
        "background": "assets/images/background/room_school.png",
        "bgm": "daily.mp3",
        "characters": {
            "left": "assets/images/characters/teacher_normal.png",
            "right": "assets/images/characters/seyoun_laugh.png"
        },
        "setFlag": "met_teacher",
        "next": "classroom_2_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교탁 앞에 서자 수십 개의 시선이 꽂힌다. 서연이는 내 옆에서 든든하게 미소 지으며 나를 응원해주고 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As I stand at the podium, dozens of eyes turn to me. Seoyeon is smiling supportively beside me, cheering me on.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al pararme en el podio, decenas de ojos se dirigen a m\u00ed. Seoyeon est\u00e1 sonriendo con apoyo a mi lado, anim\u00e1ndome.*"
            },
            "ja": {
                "name": "僕",
                "text": "*教壇の前に立つと、数十もの視線が刺さる。ソヨンは隣で頼もしく微笑みながら僕を応援してくれている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Debout devant l'estrade, des dizaines de regards se tournent vers moi. Seoyeon me sourit avec encouragement à côté de moi, me soutenant du regard.*"
            }
        }
    },
    "classroom_2_low": {
        "background": "assets/images/background/room_school.png",
        "bgm": "daily.mp3",
        "characters": {
            "left": "assets/images/characters/teacher_normal.png",
            "right": "assets/images/characters/seyoun_pout.png"
        },
        "setFlag": "met_teacher",
        "next": "classroom_2_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교탁 앞에 서자 수십 개의 시선이 꽂힌다. 서연이는 나에게서 조금 떨어진 곳에 차가운 표정으로 서 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As I stand at the podium, dozens of eyes turn to me. Seoyeon is standing a bit away with a cold expression.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al pararme en el podio, decenas de ojos se dirigen a m\u00ed. Seoyeon est\u00e1 parada un poco lejos con una expresi\u00f3n fr\u00eda.*"
            },
            "ja": {
                "name": "僕",
                "text": "*教壇の前に立つと、数十もの視線が刺さる。ソヨンは少し離れた場所で冷たい表情で立っている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Debout devant l'estrade, des dizaines de regards se tournent vers moi. Seoyeon se tient un peu à l'écart avec une expression froide.*"
            }
        }
    },
    "classroom_2_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "teacher_free_talk",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*교실 안의 공기가 무겁게 느껴진다. 담임선생님이 교탁을 탁탁 치며 주의를 집중시킨다.*"
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*The atmosphere in the classroom feels heavy. The homeroom teacher taps the podium to get everyone's attention.*"
            },
            "es": {
                "name": "Profesora",
                "text": "*La atm\u00f3sfera en el sal\u00f3n se siente pesada. La profesora toca el podio para captar la atenci\u00f3n de todos.*"
            },
            "ja": {
                "name": "担任先生",
                "text": "*教室の空気が重く感じられる。担任の先生が教壇をトントンと叩いて注目を集める。*"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*L'atmosphère dans la classe est pesante. Le professeur principal tape sur l'estrade pour attirer l'attention de tout le monde.*"
            }
        }
    },
    "teacher_free_talk": {
        "type": "free_talk",
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "affinityChar": "Teacher",
        "affinityBranches": [
            {
                "minAffinity": 10,
                "next": "classroom_2_3_high"
            },
            {
                "minAffinity": -5,
                "next": "classroom_2_3"
            },
            {
                "minAffinity": -100,
                "next": "classroom_2_3_low"
            }
        ],
        "next": "classroom_2_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"자, 다들 전학생한테 관심이 아주 많네. 긴장되겠지만 다들 좋은 아이들이니까 너무 걱정하지 마. 자기소개 하기 전에 나한테 궁금한 거라도 있니?\"",
                "context": "장소: 2학년 3반 교실 안 교탁 앞. 상황: 담임선생님이 전학생인 주인공을 학생들에게 소개하기 직전의 짧은 대기 시간. 수십 명의 학생들이 우리를 지켜보고 있지만, 이 대화는 오직 주인공과 담임선생님 사이의 대화여야 합니다. 주인공이 학생들 전체에게 인사나 자기소개를 하는 것은 이 대화가 끝난 '이후'의 정식 이벤트이므로, 지금은 절대로 학생들에게 인사를 시키거나 자기소개를 하도록 유도하지 마세요. 오직 선생님과 주인공 사이의 개인적인 질문이나 학교생활 조언, 첫인상 등에 대해서만 이야기하세요. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화의 마지막 턴에만 이제 학생들에게 정식으로 소개해주겠다고 말하며 대화를 마무리해 주세요.",
                "personality": "공과 사가 뚜렷한 전문적인 교사지만 사실 허당기가 있고 주인공의 예상치 못한 어른스러운 모습에 가슴 설레어함. 은근히 주인공에게 기대고 싶어 하는 '갭모에'가 있음."
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Well, everyone seems very interested in the new transfer student. You must be nervous, but everyone here is nice, so don't worry too much. Before you introduce yourself, do you have any questions for me?\"",
                "context": "Location: In front of the podium in Class 2-3. Situation: A brief waiting period before the homeroom teacher introduces the transfer student protagonist to the class. Dozens of students are watching us, but this conversation should only be between the protagonist and the homeroom teacher. The protagonist's introduction to all the students is an official event that happens AFTER this conversation, so do NOT have the protagonist greet or introduce themselves to the students yet. Talk only about personal questions to the teacher, advice about school life, first impressions, etc. Keep the conversation going until it naturally concludes. In the final turn only, mention that you'll now officially introduce them to the class.",
                "personality": "A professional teacher with clear boundaries between work and personal life, but actually has a clumsy side and gets flustered by the protagonist's unexpectedly mature demeanor. Has a hidden desire to lean on the protagonist - a charming contrast to her strict exterior."
            },
            "es": {
                "name": "Profesora",
                "text": "\"Bueno, todos parecen muy interesados en el nuevo estudiante transferido. Debes estar nervioso, pero todos aqu\u00ed son amables, as\u00ed que no te preocupes mucho. Antes de que te presentes, \u00bftienes alguna pregunta para m\u00ed?\"",
                "context": "Location: In front of the podium in Class 2-3. Situation: A brief waiting period before the homeroom teacher introduces the transfer student protagonist to the class. Dozens of students are watching us, but this conversation should only be between the protagonist and the homeroom teacher. The protagonist's introduction to all the students is an official event that happens AFTER this conversation, so do NOT have the protagonist greet or introduce themselves to the students yet. Talk only about personal questions to the teacher, advice about school life, first impressions, etc. Keep the conversation going until it naturally concludes. In the final turn only, mention that you'll now officially introduce them to the class.",
                "personality": "A professional teacher with clear boundaries between work and personal life, but actually has a clumsy side and gets flustered by the protagonist's unexpectedly mature demeanor. Has a hidden desire to lean on the protagonist - a charming contrast to her strict exterior."
            },
            "ja": {
                "name": "担任先生",
                "text": "\"さて、みんな転校生にすごく興味があるみたいだね。緊張するだろうけど、みんないい子たちだから心配しないで。自己紹介の前に、先生に聞きたいことある？\"",
                "context": "Location: In front of the podium in Class 2-3. Situation: A brief waiting period before the homeroom teacher introduces the transfer student protagonist to the class. Dozens of students are watching us, but this conversation should only be between the protagonist and the homeroom teacher. The protagonist's introduction to all the students is an official event that happens AFTER this conversation, so do NOT have the protagonist greet or introduce themselves to the students yet. Talk only about personal questions to the teacher, advice about school life, first impressions, etc. Keep the conversation going until it naturally concludes. In the final turn only, mention that you'll now officially introduce them to the class.",
                "personality": "A professional teacher with clear boundaries between work and personal life, but actually has a clumsy side and gets flustered by the protagonist's unexpectedly mature demeanor. Has a hidden desire to lean on the protagonist - a charming contrast to her strict exterior."
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"Eh bien, tout le monde a l'air très intéressé par le nouvel élève transféré. Tu dois être nerveux, mais tout le monde ici est gentil, alors ne t'inquiète pas trop. Avant de te présenter, est-ce que tu as des questions à me poser ?\\\"",
                "context": "Lieu : Devant l'estrade de la classe 2-3. Situation : Un bref moment d'attente avant que le professeur principal ne présente l'élève transféré protagoniste à la classe. Des dizaines d'élèves nous observent, mais cette conversation ne doit se dérouler qu'entre le protagoniste et le professeur principal. La présentation du protagoniste à tous les élèves est un événement officiel qui a lieu APRÈS cette conversation, donc NE faites PAS en sorte que le protagoniste salue ou se présente aux élèves pour l'instant. Parlez uniquement de questions personnelles au professeur, de conseils sur la vie scolaire, de premières impressions, etc. Continuez la conversation jusqu'à ce qu'elle se termine naturellement. Uniquement au dernier tour, mentionnez que vous allez maintenant les présenter officiellement à la classe.",
                "personality": "Une enseignante professionnelle avec des limites claires entre vie professionnelle et personnelle, mais qui a en réalité un côté maladroit et se trouble face à la maturité inattendue du protagoniste. Elle a un désir caché de s'appuyer sur le protagoniste - un contraste charmant avec son apparence stricte."
            }
        }
    },
    "classroom_2_3_high": {
        "character": "assets/images/characters/teacher_smile.png",
        "choices": [
            {
                "next": "teacher_name_share_high",
                "setFlag": "knows_name_teacher",
                "stats": {
                    "Teacher": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "class_after_party",
                "setFlags": [
                    "personality_active",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "class_after_active",
                "setFlags": [
                    "personality_active",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": 4
                    }
                }
            },
            {
                "next": "class_after_quiet",
                "setFlags": [
                    "personality_quiet",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": 4
                    }
                }
            },
            {
                "next": "class_after_study",
                "setFlags": [
                    "personality_study",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": -15
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님과 대화를 나누며 긴장을 풀 수 있었다. 선생님도 나를 좋게 봐주신 것 같아 다행이다. 이제 아이들 앞에서 자기소개를 할 차례다.*",
                "choices": [
                    "제 이름은 '{name}'입니다. 잘 부탁드려요!",
                    "좋아! 반 친구들이랑 오늘부터 잘 지내보자.",
                    "안녕! 운동하는 걸 좋아하고 활발한 성격이야!",
                    "만나서 반가워. 조용히 지내는 걸 좋아하는 편이야.",
                    "공부하러 왔어. 방해받는 건 질색이니까 적당히 지내자."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Talking with the teacher helped me relax. She seems to like me, which is a relief. Now it's time to introduce myself to the class.*",
                "choices": [
                    "My name is '{name}'. Nice to meet you all!",
                    "Alright! Let's get along starting today, classmates!",
                    "Hi! I love sports and have an active personality!",
                    "Nice to meet you. I prefer to keep to myself.",
                    "I'm here to study. I hate being disturbed, so let's keep things moderate."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Hablar con la profesora me ayud\u00f3 a relajarme. Parece que le caigo bien, lo cual es un alivio. Ahora es hora de presentarme a la clase.*",
                "choices": [
                    "Mi nombre es '{name}'. \u00a1Mucho gusto a todos!",
                    "\u00a1Bien! \u00a1Llev\u00e9monos bien desde hoy, compa\u00f1eros!",
                    "\u00a1Hola! \u00a1Me encantan los deportes y tengo una personalidad activa!",
                    "Mucho gusto. Prefiero mantenerme reservado.",
                    "Estoy aqu\u00ed para estudiar. Odio que me molesten, as\u00ed que mantengamos las cosas moderadas."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*先生と話したおかげでリラックスできた。先生も僕のことを良く思ってくれているみたいでよかった。さあ、みんなの前で自己紹介をする番だ。*",
                "choices": [
                    "僕の名前は「{name}」です。みんな、よろしく！",
                    "よろしく！今日からみんな、仲良くしよう！",
                    "やあ！スポーツが大好きで、活発な性格です！",
                    "よろしく。一人でいるのが好きなんだ。",
                    "勉強しに来たんだ。邪魔されるのは嫌だから、ほどほどにね。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Discuter avec le professeur m'a aidé à me détendre. Elle semble m'apprécier, ce qui est un soulagement. Maintenant, c'est le moment de me présenter à la classe.*",
                "choices": [
                    "Je m'appelle '{name}'. Ravi de vous rencontrer !",
                    "Allez ! Entendons-nous bien à partir d'aujourd'hui, camarades !",
                    "Salut ! J'adore le sport et j'ai un tempérament actif !",
                    "Enchanté. Je préfère rester plutôt discret.",
                    "Je suis là pour étudier. J'ai horreur d'être dérangé, alors restons-en là."
                ]
            }
        }
    },
    "classroom_2_3_low": {
        "character": "assets/images/characters/teacher_angry.png",
        "choices": [
            {
                "next": "teacher_name_share_low",
                "setFlag": "knows_name_teacher",
                "stats": {
                    "Teacher": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "class_after_party",
                "setFlags": [
                    "personality_active",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "class_after_active",
                "setFlags": [
                    "personality_active",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": 4
                    }
                }
            },
            {
                "next": "class_after_quiet",
                "setFlags": [
                    "personality_quiet",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": 4
                    }
                }
            },
            {
                "next": "class_after_study",
                "setFlags": [
                    "personality_study",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": -15
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 눈빛이 매섭다. 첫인상부터 점수가 깎인 것 같아 마음이 무겁다. 차가운 분위기 속에서 자기소개를 시작해야 한다.*",
                "choices": [
                    "제 이름은 '{name}'입니다. 잘 부탁드려요!",
                    "좋아! 반 친구들이랑 오늘부터 잘 지내보자.",
                    "안녕! 운동하는 걸 좋아하고 활발한 성격이야!",
                    "만나서 반가워. 조용히 지내는 걸 좋아하는 편이야.",
                    "공부하러 왔어. 방해받는 건 질색이니까 적당히 지내자."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The teacher's gaze is sharp. It seems I made a bad first impression. I have to introduce myself in this cold atmosphere.*",
                "choices": [
                    "My name is '{name}'. Nice to meet you all!",
                    "Alright! Let's get along starting today, classmates!",
                    "Hi! I love sports and have an active personality!",
                    "Nice to meet you. I prefer to keep to myself.",
                    "I'm here to study. I hate being disturbed, so let's keep things moderate."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La mirada de la profesora es aguda. Parece que caus\u00e9 una mala primera impresi\u00f3n. Tengo que presentarme en esta atm\u00f3sfera fr\u00eda.*",
                "choices": [
                    "Mi nombre es '{name}'. \u00a1Mucho gusto a todos!",
                    "\u00a1Bien! \u00a1Llev\u00e9monos bien desde hoy, compa\u00f1eros!",
                    "\u00a1Hola! \u00a1Me encantan los deportes y tengo una personalidad activa!",
                    "Mucho gusto. Prefiero mantenerme reservado.",
                    "Estoy aqu\u00ed para estudiar. Odio que me molesten, as\u00ed que mantengamos las cosas moderadas."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*先生の目つきが鋭い。第一印象でマイナスをくらったみたいだ。この冷たい雰囲気の中で自己紹介を始めなければならない。*",
                "choices": [
                    "僕の名前は「{name}」です。みんな、よろしく！",
                    "よろしく！今日からみんな、仲良くしよう！",
                    "やあ！スポーツが大好きで、活発な性格です！",
                    "よろしく。一人でいるのが好きなんだ。",
                    "勉強しに来たんだ。邪魔されるのは嫌だから、ほどほどにね。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Le regard du professeur est perçant. On dirait que j'ai fait mauvaise impression. Je dois me présenter dans cette atmosphère glaciale.*",
                "choices": [
                    "Je m'appelle '{name}'. Ravi de vous rencontrer !",
                    "Allez ! Entendons-nous bien à partir d'aujourd'hui, camarades !",
                    "Salut ! J'adore le sport et j'ai un tempérament actif !",
                    "Enchanté. Je préfère rester plutôt discret.",
                    "Je suis là pour étudier. J'ai horreur d'être dérangé, alors restons-en là."
                ]
            }
        }
    },
    "classroom_2_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            {
                "next": "teacher_name_share_normal",
                "setFlag": "knows_name_teacher",
                "stats": {
                    "Teacher": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "class_after_party",
                "setFlags": [
                    "personality_active",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "class_after_active",
                "setFlags": [
                    "personality_active",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": 4
                    }
                }
            },
            {
                "next": "class_after_quiet",
                "setFlags": [
                    "personality_quiet",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": 4
                    }
                }
            },
            {
                "next": "class_after_study",
                "setFlags": [
                    "personality_study",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": -15
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님과의 대화가 끝나고, 드디어 정식으로 반 아이들에게 소개될 시간이 왔다. 수많은 시선이 나에게 집중된다.*",
                "choices": [
                    "제 이름은 '{name}'입니다. 잘 부탁드려요!",
                    "좋아! 반 친구들이랑 오늘부터 잘 지내보자.",
                    "안녕! 운동하는 걸 좋아하고 활발한 성격이야!",
                    "만나서 반가워. 조용히 지내는 걸 좋아하는 편이야.",
                    "공부하러 왔어. 방해받는 건 질색이니까 적당히 지내자."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The conversation with the teacher is over. Now it's time to officially introduce myself to the class. All eyes are on me.*",
                "choices": [
                    "My name is '{name}'. Nice to meet you all!",
                    "Alright! Let's get along starting today, classmates!",
                    "Hi! I love sports and have an active personality!",
                    "Nice to meet you. I prefer to keep to myself.",
                    "I'm here to study. I hate being disturbed, so let's keep things moderate."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La conversaci\u00f3n con la profesora ha terminado. Ahora es hora de presentarme oficialmente a la clase. Todas las miradas est\u00e1n en m\u00ed.*",
                "choices": [
                    "Mi nombre es '{name}'. \u00a1Mucho gusto a todos!",
                    "\u00a1Bien! \u00a1Llev\u00e9monos bien desde hoy, compa\u00f1eros!",
                    "\u00a1Hola! \u00a1Me encantan los deportes y tengo una personalidad activa!",
                    "Mucho gusto. Prefiero mantenerme reservado.",
                    "Estoy aqu\u00ed para estudiar. Odio que me molesten, as\u00ed que mantengamos las cosas moderadas."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*先生との会話が終わった。いよいよ正式にクラスのみんなに紹介される時が来た。たくさんの視線が僕に集中する。*",
                "choices": [
                    "僕の名前は「{name}」です。みんな、よろしく！",
                    "よろしく！今日からみんな、仲良くしよう！",
                    "やあ！スポーツが大好きで、活発な性格です！",
                    "よろしく。一人でいるのが好きなんだ。",
                    "勉強しに来たんだ。邪魔されるのは嫌だから、ほどほどにね。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*La conversation avec le professeur est terminée. C'est maintenant le moment de me présenter officiellement à la classe. Tous les regards sont braqués sur moi.*",
                "choices": [
                    "Je m'appelle '{name}'. Ravi de vous rencontrer !",
                    "Allez ! Entendons-nous bien à partir d'aujourd'hui, camarades !",
                    "Salut ! J'adore le sport et j'ai un tempérament actif !",
                    "Enchanté. Je préfère rester plutôt discret.",
                    "Je suis là pour étudier. J'ai horreur d'être dérangé, alors restons-en là."
                ]
            }
        }
    },
    "teacher_name_share_high": {
        "character": "assets/images/characters/teacher_smile.png",
        "next": "class_after_name",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"(선생님이 흐뭇한 미소로 나를 바라본다.) 오, {name}... 이름 참 예쁘네. 자, 친구들에게 자기소개 한마디 부탁할게. 다들 환영해줘!\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"(The teacher looks at me with a satisfied smile.) Oh, {name}... What a lovely name. Now, please say a few words to introduce yourself to the class. Everyone, please welcome them!\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"(La profesora me mira con una sonrisa satisfecha.) Oh, {name}... Qu\u00e9 nombre tan lindo. Ahora, por favor di unas palabras para presentarte a la clase. \u00a1Todos, denle la bienvenida!\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"（先生が嬉しそうな笑顔で私を見る。）あら、{name}……いい名前ね。さあ、みんなに自己紹介をお願いするわ。みんな、歓迎してあげてね！\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"(Le professeur me regarde avec un sourire satisfait.) Oh, {name}... Quel joli nom. Maintenant, dis quelques mots pour te présenter à la classe. Tout le monde, souhaitez-lui la bienvenue !\\\""
            }
        }
    },
    "teacher_name_share_low": {
        "character": "assets/images/characters/teacher_angry.png",
        "next": "class_after_quiet",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"...자, {name}. 친구들에게 자기소개 짧게 하고 자리로 가렴. 다들 조용히 해.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Alright, {name}. Give a brief introduction to your classmates and take your seat. Everyone, quiet down.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Bien, {name}. Da una breve presentaci\u00f3n a tus compa\u00f1eros y toma asiento. Todos, silencio.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"……さあ、{name}。クラスメートに簡単に自己紹介をして席に着きなさい。みんな、静かにして。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...Bien, {name}. Présente-toi brièvement à tes camarades et va t'asseoir. Tout le monde, silence.\\\""
            }
        }
    },
    "teacher_name_share_normal": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "class_after_name",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"자, {name}. 친구들에게 자기소개 한마디 부탁할게.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Alright, {name}. Please say a few words to introduce yourself to the class.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Bien, {name}. Por favor di unas palabras para presentarte a la clase.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"さあ、{name}。クラスメートに自己紹介をお願いするわね。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"Bien, {name}. Dis quelques mots pour te présenter à la classe, s'il te plaît.\\\""
            }
        }
    },
    "class_after_name": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "affinityChar": "Teacher",
        "affinityBranches": [
            {
                "minAffinity": 15,
                "next": "class_after_party"
            },
            {
                "minAffinity": 0,
                "next": "class_after_active"
            },
            {
                "minAffinity": -999,
                "next": "class_after_quiet"
            }
        ],
        "next": "class_after_active",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"{name}... 좋은 이름이네. 자, 다들 환영해줘.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"{name}... That's a nice name. Alright everyone, please welcome them.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"{name}... Qu\u00e9 lindo nombre. Bien, todos, denle la bienvenida.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"{name}……いい名前だね。さあみんな、歓迎してあげて。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"{name}... C'est un joli nom. Allez tout le monde, souhaitez-lui la bienvenue.\\\""
            }
        }
    },
    "class_after_active": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "class_after_active_2",
        "_i18n": {
            "ko": {
                "name": "아이들",
                "text": "*교실 여기저기서 환호성이 터져 나온다. 특히 뒷자리에 앉은 남학생들이 눈을 빛낸다. 서연이도 흐뭇한 미소를 지으며 박수를 쳐준다.*"
            },
            "en": {
                "name": "Classmates",
                "text": "*Cheers erupt from all over the classroom. The boys in the back seats are especially excited. Seoyeon claps with a pleased smile.*"
            },
            "es": {
                "name": "Estudiantes",
                "text": "*Aplausos estallan por todo el sal\u00f3n. Los chicos de los asientos traseros est\u00e1n especialmente emocionados. Seoyeon aplaude con una sonrisa complacida.*"
            },
            "ja": {
                "name": "生徒たち",
                "text": "*教室のあちこちから歓声が上がる。特に後ろの席の男子が目を輝かせている。ソヨンも嬉しそうに微笑みながら拍手してくれる。*"
            },
            "fr": {
                "name": "Camarades",
                "text": "*Des acclamations fusent de partout dans la classe. Les garçons du fond sont particulièrement enthousiastes. Seoyeon applaudit avec un sourire ravi.*"
            }
        }
    },
    "class_after_active_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "class_after_active_3",
        "_i18n": {
            "ko": {
                "name": "아이들",
                "text": "*아이들은 벌써부터 나를 자기 팀에 영입하려고 수군거린다.*"
            },
            "en": {
                "name": "Classmates",
                "text": "*The students are already whispering about recruiting me to their teams.*"
            },
            "es": {
                "name": "Estudiantes",
                "text": "*Los estudiantes ya est\u00e1n susurrando sobre reclutarme para sus equipos.*"
            },
            "ja": {
                "name": "生徒たち",
                "text": "*生徒たちはもう僕を自分のチームに入れようとひそひそ話している。*"
            },
            "fr": {
                "name": "Camarades",
                "text": "*Les élèves chuchotent déjà pour me recruter dans leurs équipes.*"
            }
        }
    },
    "class_after_active_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "lunch_time",
        "_i18n": {
            "ko": {
                "name": "아이들",
                "text": "\"오~ 운동 좀 하나 본데? 점심시간에 배구 한판 어때? 전학생 실력 좀 보자고!\""
            },
            "en": {
                "name": "Classmates",
                "text": "\"Oh, you seem athletic! How about a game of volleyball at lunch? Let's see what the transfer student's got!\""
            },
            "es": {
                "name": "Estudiantes",
                "text": "\"\u00a1Oh, pareces deportista! \u00bfQu\u00e9 tal un partido de voleibol en el almuerzo? \u00a1Veamos qu\u00e9 tiene el estudiante transferido!\""
            },
            "ja": {
                "name": "生徒たち",
                "text": "\"おー、運動できそうだね？昼休みにバレー一試合どう？転校生の実力見せてもらおうぜ！\""
            },
            "fr": {
                "name": "Camarades",
                "text": "\\\"Oh, tu as l'air sportif ! Que dirais-tu d'une partie de volley à midi ? Voyons ce que le nouvel élève a dans le ventre !\\\""
            }
        }
    },
    "class_after_quiet": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "class_after_quiet_2",
        "_i18n": {
            "ko": {
                "name": "아이들",
                "text": "*아이들이 고개를 끄덕이며 차분하게 나를 받아들인다. 몇몇 여학생들이 소곤거리며 나를 쳐다본다.*"
            },
            "en": {
                "name": "Classmates",
                "text": "*The students nod and calmly accept me. Some girls whisper while looking at me.*"
            },
            "es": {
                "name": "Estudiantes",
                "text": "*Los estudiantes asienten y me aceptan con calma. Algunas chicas susurran mientras me miran.*"
            },
            "ja": {
                "name": "生徒たち",
                "text": "*生徒たちがうなずいて落ち着いて僕を受け入れる。数人の女子がこそこそ話しながら僕を見ている。*"
            },
            "fr": {
                "name": "Camarades",
                "text": "*Les élèves hochent la tête et m'acceptent calmement. Quelques filles chuchotent en me regardant.*"
            }
        }
    },
    "class_after_quiet_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "class_after_quiet_3",
        "_i18n": {
            "ko": {
                "name": "아이들",
                "text": "*서연이는 내 진지한 모습이 마음에 드는지 고개를 끄덕인다. 교실 분위기가 한결 차분해진다.*"
            },
            "en": {
                "name": "Classmates",
                "text": "*Seoyeon seems pleased with my serious demeanor and nods. The classroom atmosphere becomes more calm.*"
            },
            "es": {
                "name": "Estudiantes",
                "text": "*Seoyeon parece complacida con mi actitud seria y asiente. La atm\u00f3sfera del sal\u00f3n se vuelve m\u00e1s tranquila.*"
            },
            "ja": {
                "name": "生徒たち",
                "text": "*ソヨンは僕の真面目な様子が気に入ったのか、うなずいている。教室の雰囲気が一層落ち着いたものになる。*"
            },
            "fr": {
                "name": "Camarades",
                "text": "*Seoyeon semble apprécier mon attitude sérieuse et hoche la tête. L'atmosphère de la classe devient plus calme.*"
            }
        }
    },
    "class_after_quiet_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "lunch_time",
        "_i18n": {
            "ko": {
                "name": "아이들",
                "text": "\"와, 왠지 분위기 있다... 나중에 도서관에서 마주치면 인사해도 될까?\""
            },
            "en": {
                "name": "Classmates",
                "text": "\"Wow, they have a cool vibe... Would it be okay to say hi if we meet in the library?\""
            },
            "es": {
                "name": "Estudiantes",
                "text": "\"Vaya, tiene un aura genial... \u00bfEstar\u00eda bien saludarlo si nos encontramos en la biblioteca?\""
            },
            "ja": {
                "name": "生徒たち",
                "text": "\"わあ、なんか雰囲気あるね……今度図書館で会ったら挨拶してもいいかな？\""
            },
            "fr": {
                "name": "Camarades",
                "text": "\\\"Waouh, cette personne a un style classe... Ce serait bien de se saluer si on se croise à la bibliothèque, non ?\\\""
            }
        }
    },
    "class_after_party": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "class_after_party_2",
        "_i18n": {
            "ko": {
                "name": "아이들",
                "text": "*교실이 순식간에 시장통처럼 시끌벅적해진다. 벌써부터 주변으로 아이들이 몰려든다.*"
            },
            "en": {
                "name": "Classmates",
                "text": "*The classroom instantly becomes as noisy as a marketplace. Students are already crowding around me.*"
            },
            "es": {
                "name": "Estudiantes",
                "text": "*El sal\u00f3n se vuelve instant\u00e1neamente ruidoso como un mercado. Los estudiantes ya se amontonan a mi alrededor.*"
            },
            "ja": {
                "name": "生徒たち",
                "text": "*教室が一瞬で市場みたいに賑やかになる。もう周りに生徒たちが集まってきている。*"
            },
            "fr": {
                "name": "Camarades",
                "text": "*La classe devient instantanément aussi bruyante qu'un marché. Les élèves se pressent déjà autour de moi.*"
            }
        }
    },
    "class_after_party_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "class_after_party_3",
        "_i18n": {
            "ko": {
                "name": "아이들",
                "text": "*서연이는 조금 당황한 듯하지만 이내 웃음을 터뜨린다. 아이들은 벌써 메뉴 정하느라 바쁘다.*"
            },
            "en": {
                "name": "Classmates",
                "text": "*Seoyeon seems a bit flustered but soon bursts out laughing. The students are already busy deciding where to eat.*"
            },
            "es": {
                "name": "Estudiantes",
                "text": "*Seoyeon parece un poco desconcertada pero pronto estalla en risas. Los estudiantes ya est\u00e1n ocupados decidiendo d\u00f3nde comer.*"
            },
            "ja": {
                "name": "生徒たち",
                "text": "*ソヨンは少し戸惑った様子だが、すぐに笑い出した。生徒たちはもうメニューを決めるのに忙しい。*"
            },
            "fr": {
                "name": "Camarades",
                "text": "*Seoyeon semble un peu décontenancée mais éclate vite de rire. Les élèves sont déjà occupés à décider où manger.*"
            }
        }
    },
    "class_after_party_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "lunch_time",
        "_i18n": {
            "ko": {
                "name": "아이들",
                "text": "\"와! {name} 성격 진짜 대박 좋아, 오늘 점심은 우리랑 같이 먹자! 맛있는 거 많이 알려줄게!\""
            },
            "en": {
                "name": "Classmates",
                "text": "\"Wow! {name}, you have such a great personality! Let's eat lunch together today! We'll show you all the good food spots!\""
            },
            "es": {
                "name": "Estudiantes",
                "text": "\"\u00a1Wow! \u00a1{name}, tienes una personalidad incre\u00edble! \u00a1Almorcemos juntos hoy! \u00a1Te mostraremos todos los buenos lugares para comer!\""
            },
            "ja": {
                "name": "生徒たち",
                "text": "\"わあ！{name}って性格めっちゃいいじゃん、今日のお昼は一緒に食べようよ！美味しいところいっぱい教えてあげる！\""
            },
            "fr": {
                "name": "Camarades",
                "text": "\\\"Waouh ! {name}, tu as vraiment un super caractère ! Mangeons ensemble ce midi ! On va te montrer tous les bons plans bouffe !\\\""
            }
        }
    },
    "class_after_study": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "class_after_study_2",
        "_i18n": {
            "ko": {
                "name": "아이들",
                "text": "*교실에 차가운 정적이 흐른다. 아이들이 조금 당황한 듯 서로 눈치를 보며 수군거린다.*"
            },
            "en": {
                "name": "Classmates",
                "text": "*A cold silence fills the classroom. The students look a bit taken aback and glance at each other while whispering.*"
            },
            "es": {
                "name": "Estudiantes",
                "text": "*Un silencio fr\u00edo llena el sal\u00f3n. Los estudiantes lucen un poco sorprendidos y se miran entre s\u00ed mientras susurran.*"
            },
            "ja": {
                "name": "生徒たち",
                "text": "*教室に冷たい静寂が流れる。生徒たちが少し戸惑った様子で互いに目配せしながらひそひそ話している。*"
            },
            "fr": {
                "name": "Camarades",
                "text": "*Un silence glacial envahit la classe. Les élèves semblent un peu déconcertés et échangent des regards en chuchotant.*"
            }
        }
    },
    "class_after_study_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "class_after_study_3",
        "_i18n": {
            "ko": {
                "name": "아이들",
                "text": "*서연이의 표정도 조금 굳어진다. 왠지 모를 벽이 생긴 기분이다. 아이들은 내 눈치를 보며 조용해진다.*"
            },
            "en": {
                "name": "Classmates",
                "text": "*Seoyeon's expression stiffens a bit too. It's as if some kind of wall has formed. The students quiet down while watching me.*"
            },
            "es": {
                "name": "Estudiantes",
                "text": "*La expresi\u00f3n de Seoyeon tambi\u00e9n se endurece un poco. Es como si se hubiera formado alg\u00fan tipo de muro. Los estudiantes se callan mientras me observan.*"
            },
            "ja": {
                "name": "生徒たち",
                "text": "*ソヨンの表情も少し固くなる。なぜか壁ができたような気分だ。生徒たちは僕の様子をうかがいながら静かになる。*"
            },
            "fr": {
                "name": "Camarades",
                "text": "*L'expression de Seoyeon se fige aussi un peu. C'est comme si une sorte de mur s'était dressé. Les élèves se taisent en m'observant.*"
            }
        }
    },
    "class_after_study_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "lunch_time",
        "_i18n": {
            "ko": {
                "name": "아이들",
                "text": "\"와.. 장난 아니네. 완전 공부 벌레인가 봐. 건드리면 큰일 나겠는데...\""
            },
            "en": {
                "name": "Classmates",
                "text": "\"Wow... That's intense. Must be a total study bug. We should probably not bother them...\""
            },
            "es": {
                "name": "Estudiantes",
                "text": "\"Vaya... Eso es intenso. Debe ser un rat\u00f3n de biblioteca total. Mejor no lo molestemos...\""
            },
            "ja": {
                "name": "生徒たち",
                "text": "\"わあ……マジかよ。完全に勉強の虫じゃん。下手に関わらない方がよさそう……\""
            },
            "fr": {
                "name": "Camarades",
                "text": "\\\"Waouh... C'est intense. Ça doit être un vrai rat de bibliothèque. On ferait mieux de ne pas le déranger...\\\""
            }
        }
    }
});
