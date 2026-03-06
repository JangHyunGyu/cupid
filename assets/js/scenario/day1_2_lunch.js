/**
 * ============================================================================
 * CUPID - day1_2_lunch (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day1_2_lunch.js + en_day1_2_lunch.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[1]) SCENARIO[1] = {};

Object.assign(SCENARIO[1], {
    "lunch_time": {
        "background": "assets/images/background/room_school.png",
        "bgm": "daily.mp3",
        "character": null,
        "next": "lunch_time_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*오전 수업 끝! 드디어 기다리던 점심시간이다. 아이들이 급식실로 달려간다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Morning classes are over! Finally, it's the long-awaited lunch time. Students are rushing to the cafeteria.*"
            },
            "es": {
                "name": "Yo",
                "text": "*\u00a1Las clases de la ma\u00f1ana terminaron! Por fin, es la tan esperada hora del almuerzo. Los estudiantes corren a la cafeter\u00eda.*"
            },
            "ja": {
                "name": "僕",
                "text": "*午前の授業が終わった！やっと待ちに待った昼休みだ。みんな食堂に駆けていく。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Les cours du matin sont terminés ! Enfin, c'est l'heure tant attendue du déjeuner. Les élèves se précipitent vers la cafétéria.*"
            }
        }
    },
    "lunch_time_2": {
        "background": "assets/images/background/room_school.png",
        "choices": [
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 40,
                        "next": "lunch_seoyeon_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "lunch_seoyeon_normal_branch"
                    },
                    {
                        "minAffinity": -100,
                        "next": "lunch_seoyeon_low"
                    }
                ],
                "next": "lunch_seoyeon_normal_branch"
            },
            {
                "next": "lunch_alone"
            },
            {
                "next": "lunch_dain"
            },
            {
                "next": "lunch_nurse"
            },
            {
                "next": "lunch_store"
            },
            {
                "next": "lunch_sleep"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*점심시간... 창밖 운동장에는 아이들이 뛰어놀고 있다. 나는 어떡할까?*",
                "choices": [
                    "서연이에게 다가가 같이 점심 먹자고 제안한다.",
                    "혼자 학교를 둘러보며 조용한 곳에서 먹을 곳을 찾는다.",
                    "체육관 쪽에서 들려오는 배구공 소리를 따라가 본다.",
                    "몸이 좀 안 좋은 것 같아 보건실로 간다.",
                    "매점에 가서 빵을 사 먹는다.",
                    "피곤하니까 교실에서 잠을 잔다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Lunch time... Students are playing on the field outside the window. What should I do?*",
                "choices": [
                    "Go to Seoyeon and ask to have lunch together.",
                    "Find a quiet spot to explore the school alone.",
                    "Follow the sound of volleyballs from the gym.",
                    "Go to the nurse's office, feeling a bit unwell.",
                    "Go to the school store to buy some bread.",
                    "I'm tired, so I'll sleep in the classroom."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Hora del almuerzo... Los estudiantes juegan en el campo afuera de la ventana. \u00bfQu\u00e9 deber\u00eda hacer?*",
                "choices": [
                    "Ir a Seoyeon y pedirle almorzar juntos.",
                    "Buscar un lugar tranquilo para explorar la escuela solo.",
                    "Seguir el sonido de los balones de voleibol del gimnasio.",
                    "Ir a la enfermer\u00eda, sinti\u00e9ndome un poco mal.",
                    "Ir a la tienda de la escuela a comprar pan.",
                    "Estoy cansado, as\u00ed que dormir\u00e9 en el sal\u00f3n."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*昼休み……窓の外の運動場では生徒たちが遊んでいる。僕はどうしようかな？*",
                "choices": [
                    "ソヨンに近づいて、一緒にお昼を食べようと誘う。",
                    "一人で学校を回って、静かな場所を探す。",
                    "体育館から聞こえるバレーボールの音を追いかける。",
                    "ちょっと具合が悪いから保健室に行く。",
                    "売店に行ってパンを買う。",
                    "疲れたから、教室で寝る。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*L'heure du déjeuner... Les élèves jouent sur le terrain dehors. Que devrais-je faire ?*",
                "choices": [
                    "Aller voir Seoyeon et lui proposer de déjeuner ensemble.",
                    "Trouver un endroit tranquille pour explorer l'école seul.",
                    "Suivre le bruit des ballons de volley venant du gymnase.",
                    "Aller à l'infirmerie, je ne me sens pas très bien.",
                    "Aller à la boutique de l'école pour acheter du pain.",
                    "Je suis fatigué, je vais dormir en classe."
                ]
            }
        }
    },
    "lunch_seoyeon_high": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "rooftop_1",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*나를 발견하자마자 환하게 웃으며 달려온다. 반가움이 눈에 가득하다.* \"{name}! 한참 찾았잖아. 우리 같이 점심 먹으러 가자. 아주 특별한 곳으로 안내할게!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*As soon as she sees me, she runs over with a bright smile. Her eyes are full of joy.* \"{name}! I've been looking for you. Let's have lunch together. I'll take you to a very special place!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*En cuanto me ve, corre hacia m\u00ed con una sonrisa radiante. Sus ojos est\u00e1n llenos de alegr\u00eda.* \"{name}! Te estuve buscando. Vamos a almorzar juntos. \u00a1Te llevar\u00e9 a un lugar muy especial!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*私を見つけるなり、明るい笑顔で駆け寄ってくる。目には喜びがいっぱいだ。* \"{name}！ずっと探してたんだよ。一緒にお昼食べに行こう。とっておきの場所に案内してあげる！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Dès qu'elle me voit, elle accourt avec un sourire radieux. Ses yeux sont remplis de joie.* \"{name} ! Je te cherchais partout. Allons déjeuner ensemble. Je vais t'emmener dans un endroit très spécial !\""
            }
        }
    },
    "lunch_seoyeon_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "lunch_seoyeon_2_normal",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*나를 보더니 살짝 어색한 미소를 짓는다.* \"아, {name}... 마침 잘 됐네. 선생님이 챙겨주라고 하셔서. 괜찮으면 옥상에서 먹을래? 조용하고 좋아.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She gives me a slightly awkward smile when she sees me.* \"Oh, {name}... Good timing. The teacher asked me to look after you. If you don't mind, want to eat on the rooftop? It's quiet and nice.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Me da una sonrisa un poco inc\u00f3moda cuando me ve.* \"Oh, {name}... Qu\u00e9 buena oportunidad. La profesora me pidi\u00f3 que te cuidara. Si no te importa, \u00bfquieres comer en la azotea? Es tranquilo y agradable.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*私を見ると少しぎこちない笑みを浮かべる。* \"あ、{name}……ちょうどよかった。先生に面倒見てって頼まれてて。よかったら屋上で食べない？静かでいいところだよ。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle m'adresse un sourire légèrement gêné en me voyant.* \"Oh, {name}... Ça tombe bien. Le professeur m'a demandé de veiller sur toi. Si ça ne te dérange pas, tu veux manger sur le toit ? C'est calme et agréable.\""
            }
        }
    },
    "lunch_seoyeon_normal_branch": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            {
                "next": "lunch_seoyeon_2_study",
                "condition": "personality_study"
            },
            {
                "next": "lunch_seoyeon_2_party",
                "condition": "personality_active"
            },
            {
                "next": "lunch_seoyeon_2_normal"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연에게 다가가자 그녀가 생긋 웃으며 고개를 끄덕인다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*When I approach Seoyeon, she nods with a sweet smile.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Cuando me acerco a Seoyeon, ella asiente con una dulce sonrisa.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンに近づくと、彼女がにっこり微笑んでうなずいた。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Quand je m'approche de Seoyeon, elle hoche la tête avec un doux sourire.*"
            }
        }
    },
    "lunch_seoyeon_2_study": {
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "rooftop_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "lunch_alone",
                "stats": {
                    "Seoyeon": {
                        "affinity": -10
                    }
                }
            },
            {
                "next": "lunch_refuse_rooftop",
                "stats": {
                    "Seoyeon": {
                        "affinity": -20
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"전학생, 조금은 친해진 기분이네? 마침 너를 찾으려던 참이었어. 우리 옥상에서 같이 먹을래?\"",
                "choices": [
                    "웅! 서연이랑 먹고 싶었어.",
                    "미안, 오늘은 혼자 있고 싶네.",
                    "옥상? 귀찮게 왜 거기까지 가야 해?"
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Transfer student, I think we've gotten a bit closer, don't you? I was just about to look for you. Want to eat together on the rooftop?\"",
                "choices": [
                    "Yeah! I wanted to eat with you, Seoyeon.",
                    "Sorry, I want to be alone today.",
                    "The rooftop? Why go all the way up there?"
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Estudiante transferido, creo que nos hemos acercado un poco, \u00bfno crees? Justo iba a buscarte. \u00bfQuieres comer juntos en la azotea?\"",
                "choices": [
                    "\u00a1S\u00ed! Quer\u00eda comer contigo, Seoyeon.",
                    "Lo siento, hoy quiero estar solo.",
                    "\u00bfLa azotea? \u00bfPor qu\u00e9 ir hasta all\u00e1 arriba?"
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"転校生、ちょっとは仲良くなれた気がしない？ちょうど探そうとしてたんだ。屋上で一緒に食べない？\"",
                "choices": [
                    "うん！ソヨンと一緒に食べたかったんだ。",
                    "ごめん、今日は一人でいたいんだ。",
                    "屋上？なんでわざわざあそこまで？"
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Nouvel élève, j'ai l'impression qu'on s'est un peu rapprochés, pas toi ? J'allais justement te chercher. Tu veux manger ensemble sur le toit ?\"",
                "choices": [
                    "Oui ! Je voulais manger avec toi, Seoyeon.",
                    "Désolé, j'ai envie d'être seul aujourd'hui.",
                    "Le toit ? Pourquoi aller jusque là-haut ?"
                ]
            }
        }
    },
    "lunch_seoyeon_2_party": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "choices": [
            {
                "next": "rooftop_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "lunch_alone",
                "stats": {
                    "Seoyeon": {
                        "affinity": -10
                    }
                }
            },
            {
                "next": "lunch_refuse_rooftop",
                "stats": {
                    "Seoyeon": {
                        "affinity": -20
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"오, 전학생! 벌써 우리 학교에 완벽 적응한 것 같은데? 우리 옥상 비밀 장소에서 같이 점심 어때?\"",
                "choices": [
                    "웅! 서연이랑 먹고 싶었어.",
                    "미안, 오늘은 혼자 있고 싶네.",
                    "옥상? 귀찮게 왜 거기까지 가야 해?"
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh, transfer student! You seem to have adapted perfectly to our school already? How about lunch at our secret rooftop spot?\"",
                "choices": [
                    "Yeah! I wanted to eat with you, Seoyeon.",
                    "Sorry, I want to be alone today.",
                    "The rooftop? Why go all the way up there?"
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"\u00a1Oh, estudiante transferido! \u00bfParece que ya te adaptaste perfectamente a nuestra escuela? \u00bfQu\u00e9 tal almorzar en nuestro lugar secreto en la azotea?\"",
                "choices": [
                    "\u00a1S\u00ed! Quer\u00eda comer contigo, Seoyeon.",
                    "Lo siento, hoy quiero estar solo.",
                    "\u00bfLa azotea? \u00bfPor qu\u00e9 ir hasta all\u00e1 arriba?"
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"おっ、転校生！もう完璧にうちの学校に馴染んでるみたいだね？屋上の秘密の場所で一緒にお昼どう？\"",
                "choices": [
                    "うん！ソヨンと一緒に食べたかったんだ。",
                    "ごめん、今日は一人でいたいんだ。",
                    "屋上？なんでわざわざあそこまで？"
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Oh, nouvel élève ! On dirait que tu t'es déjà parfaitement adapté à notre école ? Que dirais-tu de déjeuner dans notre endroit secret sur le toit ?\"",
                "choices": [
                    "Oui ! Je voulais manger avec toi, Seoyeon.",
                    "Désolé, j'ai envie d'être seul aujourd'hui.",
                    "Le toit ? Pourquoi aller jusque là-haut ?"
                ]
            }
        }
    },
    "lunch_seoyeon_2_normal": {
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "rooftop_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "lunch_alone",
                "stats": {
                    "Seoyeon": {
                        "affinity": -10
                    }
                }
            },
            {
                "next": "lunch_refuse_rooftop",
                "stats": {
                    "Seoyeon": {
                        "affinity": -20
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"마침 너를 찾으려던 참이었어! 우리 옥상 비밀 장소에서 같이 먹을래?\"",
                "choices": [
                    "웅! 서연이랑 먹고 싶었어.",
                    "미안, 오늘은 혼자 있고 싶네.",
                    "옥상? 귀찮게 왜 거기까지 가야 해?"
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"I was just about to look for you! Want to eat together at our secret rooftop spot?\"",
                "choices": [
                    "Yeah! I wanted to eat with you, Seoyeon.",
                    "Sorry, I want to be alone today.",
                    "The rooftop? Why go all the way up there?"
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"\u00a1Justo iba a buscarte! \u00bfQuieres comer juntos en nuestro lugar secreto en la azotea?\"",
                "choices": [
                    "\u00a1S\u00ed! Quer\u00eda comer contigo, Seoyeon.",
                    "Lo siento, hoy quiero estar solo.",
                    "\u00bfLa azotea? \u00bfPor qu\u00e9 ir hasta all\u00e1 arriba?"
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"ちょうど探そうとしてたの！屋上の秘密の場所で一緒に食べない？\"",
                "choices": [
                    "うん！ソヨンと一緒に食べたかったんだ。",
                    "ごめん、今日は一人でいたいんだ。",
                    "屋上？なんでわざわざあそこまで？"
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"J'allais justement te chercher ! Tu veux manger ensemble dans notre endroit secret sur le toit ?\"",
                "choices": [
                    "Oui ! Je voulais manger avec toi, Seoyeon.",
                    "Désolé, j'ai envie d'être seul aujourd'hui.",
                    "Le toit ? Pourquoi aller jusque là-haut ?"
                ]
            }
        }
    },
    "rooftop_1": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlag": "ate_lunch_seoyeon",
        "next": "rooftop_1_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*시원한 바람이 부는 옥상. 서연이 정성스레 준비한 도시락을 꺼낸다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*The rooftop with a cool breeze. Seoyeon takes out a lunch box she carefully prepared.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*La azotea con una brisa fresca. Seoyeon saca una lonchera que prepar\u00f3 con cuidado.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*涼しい風が吹く屋上。ソヨンが丁寧に準備したお弁当を取り出す。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Le toit avec une brise fraîche. Seoyeon sort un bentô qu'elle a soigneusement préparé.*"
            }
        }
    },
    "rooftop_1_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "rooftop_1_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"직접 만든 도시락인데 양이 좀 많아서... 같이 먹을래? 전학 온 첫날이라 학교 매점도 잘 모를 테니까.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"I made a bento but there's too much... Want to share? Since it's your first day, you probably don't know the cafeteria well.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Hice una lonchera pero es demasiado... \u00bfQuieres compartir? Como es tu primer d\u00eda, probablemente no conoces bien la cafeter\u00eda.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"手作りのお弁当なんだけど、量が多くて……一緒に食べない？転校初日だし、学校の売店もよくわからないでしょ。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"J'ai préparé un bentô mais il y en a trop... Tu veux partager ? Comme c'est ton premier jour, tu ne connais sûrement pas bien la cafétéria.\""
            }
        }
    },
    "rooftop_1_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "rooftop_1_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*도시락을 한 입 먹어본다. 정성이 가득 담긴 따뜻한 맛이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I take a bite of the lunch box. It has a warm taste full of care.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Doy un bocado a la lonchera. Tiene un sabor c\u00e1lido lleno de cari\u00f1o.*"
            },
            "ja": {
                "name": "僕",
                "text": "*お弁当を一口食べてみる。心のこもった温かい味がする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je prends une bouchée du bentô. Il a un goût chaleureux, plein d'attention.*"
            }
        }
    },
    "rooftop_1_4": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "rooftop_1_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"정말 맛있어! 이걸 직접 만든 거야? 대단하다...\""
            },
            "en": {
                "name": "Me",
                "text": "\"It's really delicious! You made this yourself? That's amazing...\""
            },
            "es": {
                "name": "Yo",
                "text": "\"\u00a1Est\u00e1 realmente delicioso! \u00bfLo hiciste t\u00fa misma? Es incre\u00edble...\""
            },
            "ja": {
                "name": "僕",
                "text": "\"本当に美味しい！これ自分で作ったの？すごいな……\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"C'est vraiment délicieux ! Tu as fait ça toi-même ? C'est incroyable...\""
            }
        }
    },
    "rooftop_1_5": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "rooftop_talk_main",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*내 칭찬에 서연이 기쁜 듯 배시시 웃는다.* \"후훗, 다행이다! 맛있게 먹어주니까 나도 기뻐.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon smiles happily at my compliment.* \"Hehe, I'm so relieved! I'm glad you like it.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon sonr\u00ede felizmente ante mi cumplido.* \"Jeje, \u00a1qu\u00e9 alivio! Me alegra que te guste.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*僕の褒め言葉にソヨンが嬉しそうにはにかむ。* \"ふふっ、よかった！美味しく食べてくれて私も嬉しい。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon sourit joyeusement à mon compliment.* \"Héhé, quel soulagement ! Je suis contente que ça te plaise.\""
            }
        }
    },
    "rooftop_talk_main": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "rooftop_1_2_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*함께 도시락을 먹으며 대화를 나눈다. 그녀가 수줍게 웃는데, 가슴이 두근거린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We chat while eating the lunch box together. My heart flutters as she smiles shyly.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Charlamos mientras comemos la lonchera juntos. Mi coraz\u00f3n se acelera cuando ella sonr\u00ede t\u00edmidamente.*"
            },
            "ja": {
                "name": "僕",
                "text": "*一緒にお弁当を食べながら会話を交わす。彼女が恥ずかしそうに笑うたびに、胸がドキドキする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Nous discutons en mangeant le bentô ensemble. Mon cœur s'emballe chaque fois qu'elle sourit timidement.*"
            }
        }
    },
    "rooftop_1_2_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "rooftop_1_2_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"맛있게 먹어줘서 기뻐! 아, 그리고 이것도 먹어봐. 이건 특별히 신경 써서 준비한 거야.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"I'm glad you're enjoying it! Oh, and try this too. I put extra effort into this one.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"\u00a1Me alegra que te guste! Ah, y prueba esto tambi\u00e9n. Le puse un esfuerzo extra a este.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"美味しく食べてくれて嬉しい！あ、これも食べてみて。特別に気合い入れて作ったの。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Je suis contente que tu aimes ! Oh, et goûte aussi ça. J'y ai mis un effort particulier.\""
            }
        }
    },
    "rooftop_1_2_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "rooftop_talk_food",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "rooftop_talk_ah_fail",
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 30,
                        "next": "rooftop_talk_ah"
                    }
                ],
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "rooftop_talk_thanks",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "rooftop_talk_rude",
                "stats": {
                    "Seoyeon": {
                        "affinity": -20
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"특히 이 문어 소시지는 내 야심작이야! 너 하나 먹어볼래?\"",
                "choices": [
                    "와, 정말 맛있어 보여! 서연이는 요리 천재구나.",
                    "아... 해줘.",
                    "이렇게 정성 가득한 도시락은 처음이야. 고마워.",
                    "별로 맛없어 보이는데... 매점 갈걸."
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Especially these octopus sausages are my masterpiece! Want to try one?\"",
                "choices": [
                    "Wow, it looks so delicious! You're a cooking genius, Seoyeon.",
                    "Say... 'ahh'",
                    "This is the first lunch box with so much care I've seen. Thank you.",
                    "It doesn't look that appetizing... Should've gone to the store."
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"\u00a1Especialmente estas salchichas de pulpo son mi obra maestra! \u00bfQuieres probar una?\"",
                "choices": [
                    "\u00a1Vaya, se ve tan delicioso! Eres una genio de la cocina, Seoyeon.",
                    "Di... 'ahhh'",
                    "Es la primera lonchera con tanto cari\u00f1o que he visto. Gracias.",
                    "No se ve tan apetitoso... Deber\u00eda haber ido a la tienda."
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"特にこのタコさんウインナーは自信作なの！一つ食べてみる？\"",
                "choices": [
                    "わぁ、すごく美味しそう！ソヨンは料理の天才だね。",
                    "はい……『あーん』",
                    "こんなに心のこもったお弁当、初めて見た。ありがとう。",
                    "あんまり美味しそうに見えないけど……売店に行けばよかった。"
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Surtout ces saucisses en forme de poulpe, c'est mon chef-d'œuvre ! Tu veux en goûter une ?\"",
                "choices": [
                    "Waouh, ça a l'air tellement bon ! Tu es un génie de la cuisine, Seoyeon.",
                    "Dis... 'ahhh'",
                    "C'est le premier bentô avec autant d'attention que je vois. Merci.",
                    "Ça n'a pas l'air si appétissant... J'aurais dû aller à la boutique."
                ]
            }
        }
    },
    "rooftop_talk_ah_fail": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "stats": {
            "Seoyeon": {
                "affinity": -15
            }
        },
        "next": "rooftop_awkward",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이의 표정이 순식간에 굳어진다. 당황한 듯 젓가락을 내려놓는다.* \"음... 그건 좀... {name}, 우리 아직 그 정도로 친한 건 아니잖아. 장난이 과해.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon's expression freezes instantly. She puts down her chopsticks, flustered.* \"Um... that's a bit... {name}, we're not that close yet. The joke went too far.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*La expresi\u00f3n de Seoyeon se congela instant\u00e1neamente. Baja los palillos, desconcertada.* \"Um... eso es un poco... {name}, todav\u00eda no somos tan cercanos. La broma fue demasiado lejos.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンの表情が一瞬で固まる。戸惑ったようにお箸を置く。* \"えっと……それはちょっと……{name}、私たちまだそこまで親しくないでしょ。冗談がすぎるよ。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*L'expression de Seoyeon se fige instantanément. Elle pose ses baguettes, troublée.* \"Euh... c'est un peu... {name}, on n'est pas encore si proches que ça. La plaisanterie va trop loin.\""
            }
        }
    },
    "rooftop_awkward": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "rooftop_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*분위기가 순식간에 어색해졌다. 우리는 한동안 말없이 도시락만 먹었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The atmosphere became awkward instantly. We ate in silence for a while.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La atm\u00f3sfera se volvi\u00f3 inc\u00f3moda al instante. Comimos en silencio por un rato.*"
            },
            "ja": {
                "name": "僕",
                "text": "*一瞬で気まずい雰囲気になった。しばらく無言でお弁当を食べた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*L'atmosphère est devenue gênante en un instant. Nous avons mangé en silence pendant un moment.*"
            }
        }
    },
    "lunch_refuse_rooftop": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "lunch_alone",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이의 표정이 순간 굳는다. 억지로 웃어 보이지만, 실망한 기색이 역력하다.* \"...그래, 알겠어. 그럼 나 혼자 갈게.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon's face falls. She tries to hide her disappointment but her shoulders droop slightly.* \"...Okay, I understand. Then I'll go by myself.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*El rostro de Seoyeon decae. Intenta ocultar su decepci\u00f3n pero sus hombros caen ligeramente.* \"...Est\u00e1 bien, entiendo. Entonces ir\u00e9 sola.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンの表情が曇る。失望を隠そうとするが、肩が少し落ちている。* \"……そっか、わかった。じゃあ一人で行くね。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Le visage de Seoyeon s'assombrit. Elle essaie de cacher sa déception mais ses épaules s'affaissent légèrement.* \"...D'accord, je comprends. Alors j'irai toute seule.\""
            }
        }
    },
    "rooftop_talk_rude": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "rooftop_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이의 손이 미세하게 떨린다. 억지로 미소 지으려 하지만 눈가가 촉촉해진다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon's hand trembles slightly. She tries to force a smile but her eyes grow moist.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*La mano de Seoyeon tiembla ligeramente. Intenta forzar una sonrisa pero sus ojos se humedecen.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンの手が微かに震える。無理に笑おうとするが、目元が潤んでいる。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*La main de Seoyeon tremble légèrement. Elle essaie de forcer un sourire mais ses yeux deviennent humides.*"
            }
        }
    },
    "rooftop_talk_food": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "rooftop_talk_food_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 기쁜 듯 뺨을 붉힌다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Her cheeks flush with joy.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Sus mejillas se sonrojan de alegr\u00eda.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*嬉しそうに頬を赤らめる。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Ses joues rougissent de joie.*"
            }
        }
    },
    "rooftop_talk_food_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "rooftop_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"정말? 다행이다! 사실 누군가에게 내 요리를 대접하는 건 처음이라 조금 긴장했거든. 많이 먹어, 아직 많이 남았으니까!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Really? I'm so relieved! Actually, this is the first time I've served my cooking to someone, so I was a bit nervous. Eat up, there's still plenty left!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"\u00bfDe verdad? \u00a1Qu\u00e9 alivio! En realidad, es la primera vez que sirvo mi cocina a alguien, as\u00ed que estaba un poco nerviosa. \u00a1Come mucho, a\u00fan queda bastante!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"本当？よかった！実は誰かに自分の料理を出すの初めてで、ちょっと緊張してたんだ。たくさん食べてね、まだいっぱいあるから！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Vraiment ? Quel soulagement ! En fait, c'est la première fois que je fais goûter ma cuisine à quelqu'un, alors j'étais un peu nerveuse. Mange bien, il en reste encore plein !\""
            }
        }
    },
    "rooftop_talk_ah": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "rooftop_talk_ah_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이의 얼굴이 빨개진다. 그녀가 조심스럽게 소시지를 내 입으로 가져온다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon's face turns red. She carefully brings the sausage toward my mouth.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*El rostro de Seoyeon se pone rojo. Cuidadosamente acerca la salchicha a mi boca.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンの顔が真っ赤になる。彼女がそっとソーセージを僕の口元に運んでくる。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Le visage de Seoyeon devient tout rouge. Elle approche délicatement la saucisse de ma bouche.*"
            }
        }
    },
    "rooftop_talk_ah_2": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "rooftop_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...너, 가끔 보면 정말 당돌한 구석이 있네. (서연은 어이없다는 듯 작게 웃음을 터뜨리더니, 이내 못 이기는 척 조심스레 젓가락을 내 입가로 가져왔다.) ...자, 아 해봐.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Wh-what?! You really... saying such things so casually... Fine, you're hopeless. Just this once! Here... 'ahh'\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"\u00bfQ-qu\u00e9?! T\u00fa de verdad... diciendo esas cosas tan tranquilamente... Bien, no tienes remedio. \u00a1Solo esta vez! Toma... 'ahhh'\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"……あんた、たまに見ると本当に大胆だよね。（ソヨンは呆れたように小さく笑いを漏らし、やがて負けたふりをしてそっとお箸を僕の口元に運んだ。）……ほら、あーんして。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Q-quoi ?! Tu es vraiment... dire des choses pareilles si naturellement... Bon, t'es irrécupérable. Juste cette fois ! Tiens... 'ahhh'\""
            }
        }
    },
    "rooftop_talk_thanks": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "rooftop_talk_thanks_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 미소를 지으며 내 입가에 묻은 소스를 닦아준다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She smiles and wipes the sauce from the corner of my mouth.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Sonr\u00ede y limpia la salsa de la comisura de mi boca.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が微笑んで僕の口元についたソースを拭いてくれる。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle sourit et essuie la sauce au coin de ma bouche.*"
            }
        }
    },
    "rooftop_talk_thanks_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "rooftop_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"고맙긴.. 나야말로 같이 먹어줘서 고마워. 혼자 먹는 것보다 훨씬 맛있는 것 같아. 앞으로도 종종 이렇게 같이 먹어줄래?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Thank you...? I should be the one thanking you for eating with me. It tastes so much better than eating alone. Will you eat with me like this again?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"\u00bfGracias...? Yo deber\u00eda agradecerte a ti por comer conmigo. Sabe mucho mejor que comer sola. \u00bfComer\u00e1s conmigo as\u00ed otra vez?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"ありがとうだなんて……こちらこそ一緒に食べてくれてありがとう。一人で食べるより全然美味しいの。これからも時々こうやって一緒に食べてくれる？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Me remercier... ? C'est moi qui devrais te remercier de manger avec moi. C'est tellement meilleur que de manger seule. Tu voudras bien remanger comme ça avec moi ?\""
            }
        }
    },
    "rooftop_2": {
        "background": "assets/images/background/top_school.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 0,
                "next": "rooftop_2_normal"
            },
            {
                "minAffinity": -100,
                "next": "rooftop_2_low"
            }
        ],
        "next": "rooftop_2_normal"
    },
    "rooftop_2_normal": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "rooftop_2_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*식사를 마치고 나란히 앉아 먼 하늘을 바라본다. 서연이가 조심스럽게 입을 연다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*After finishing the meal, we sit side by side and gaze at the distant sky. Seoyeon speaks carefully.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Despu\u00e9s de terminar la comida, nos sentamos lado a lado y miramos el cielo lejano. Seoyeon habla con cuidado.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*食事を終えて並んで座り、遠い空を見つめる。ソヨンがそっと口を開いた。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Après avoir fini le repas, nous nous asseyons côte à côte et contemplons le ciel lointain. Seoyeon prend la parole avec précaution.*"
            }
        }
    },
    "rooftop_2_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "rooftop_2_2_low",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*식사를 마친 후, 서연이가 무거운 침묵 끝에 입을 연다. 그녀의 목소리에는 서먹함이 서려 있다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*After finishing the meal, Seoyeon speaks after a heavy silence. Her voice carries a hint of awkwardness.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Despu\u00e9s de terminar la comida, Seoyeon habla tras un pesado silencio. Su voz lleva un tono de incomodidad.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*食事を終えた後、重い沈黙の末にソヨンが口を開いた。彼女の声にはぎこちなさが漂っている。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Après avoir fini le repas, Seoyeon parle après un lourd silence. Sa voix porte une note de gêne.*"
            }
        }
    },
    "rooftop_2_2_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "rooftop_free_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"저기, {name}... 사실 나 오늘 너를 좀 더 알고 싶었는데, 생각보다 대화가 어렵네. 그래도 점심 같이 먹어줘서 고마워.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Hey, {name}... Actually, I wanted to get to know you better today, but conversation seems harder than I thought. Still, thanks for having lunch with me.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Oye, {name}... La verdad, quer\u00eda conocerte mejor hoy, pero la conversaci\u00f3n parece m\u00e1s dif\u00edcil de lo que pensaba. De todas formas, gracias por almorzar conmigo.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"ねえ、{name}……実は今日もっとあなたのこと知りたかったんだけど、思ったより会話が難しいね。でも一緒にお昼食べてくれてありがとう。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Hé, {name}... En fait, je voulais mieux te connaître aujourd'hui, mais la conversation semble plus difficile que je ne pensais. Quand même, merci d'avoir déjeuné avec moi.\""
            }
        }
    },
    "rooftop_2_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "rooftop_free_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"저기, {name}... 사실 나 오늘 너 처음 봤는데도 왠지 모르게 이야기를 참 편하게 하는 것 같아서 기뻐. 너는 어때?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Hey, {name}... Actually, even though I just met you today, I feel like I can talk to you so easily, and that makes me happy. How about you?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Oye, {name}... La verdad, aunque apenas te conoc\u00ed hoy, siento que puedo hablar contigo tan f\u00e1cilmente, y eso me hace feliz. \u00bfY t\u00fa?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"ねえ、{name}……実は今日初めて会ったばかりなのに、なぜかすごく話しやすくて嬉しいな。{name}はどう？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Hé, {name}... En fait, même si je viens de te rencontrer aujourd'hui, j'ai l'impression de pouvoir te parler si facilement, et ça me rend heureuse. Et toi ?\""
            }
        }
    },
    "rooftop_free_talk": {
        "type": "free_talk",
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "rooftop_choices_high"
            },
            {
                "minAffinity": 0,
                "next": "rooftop_choices"
            },
            {
                "minAffinity": -100,
                "next": "rooftop_choices_low"
            }
        ],
        "next": "rooftop_choices",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"후훗, 갑자기 너무 진지했나? 우리 좀 더 편하게 이야기하자. 나한테 궁금한 거 없어?\"",
                "context": "점심시간, 학교 옥상에서 단둘이 도시락을 먹고 난 뒤 평화롭고 로맨틱한 분위기에서 대화를 나누는 상황입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 서연이가 너랑 있으면 왠지 편하고 좋다며, 왜 그런 것 같은지 물어보는 상황으로 이어집니다. 대화의 마지막 턴에만 우리 사이의 특별한 느낌이나 편안함에 대해 언급하며 자연스럽게 질문을 던져주세요.",
                "personality": "평소보다 조금 더 대담하고 솔직해진 상태. 주인공이 우리 관계를 어떻게 생각하는지, 왜 편안함을 느끼는지 알고 싶어 함."
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Hehe, was that too serious all of a sudden? Let's talk more comfortably. Aren't you curious about anything about me?\"",
                "context": "A peaceful and romantic atmosphere after having lunch alone with Seoyeon on the school rooftop. Keep the conversation going until it naturally concludes. When the conversation ends, Seoyeon will mention that being with you feels comfortable and good, and ask why that might be. Only in the final turn, mention the special feeling or comfort between us and naturally ask the question.",
                "personality": "A bit more bold and honest than usual. Wants to know how the protagonist thinks about their relationship and why they feel comfortable."
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Jeje, \u00bffue eso demasiado serio de repente? Hablemos m\u00e1s relajados. \u00bfNo tienes curiosidad de nada sobre m\u00ed?\"",
                "context": "A peaceful and romantic atmosphere after having lunch alone with Seoyeon on the school rooftop. Keep the conversation going until it naturally concludes. When the conversation ends, Seoyeon will mention that being with you feels comfortable and good, and ask why that might be. Only in the final turn, mention the special feeling or comfort between us and naturally ask the question.",
                "personality": "A bit more bold and honest than usual. Wants to know how the protagonist thinks about their relationship and why they feel comfortable."
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"ふふっ、急に真面目すぎた？もっと気楽に話そうよ。私のこと、何か気にならない？\"",
                "context": "A peaceful and romantic atmosphere after having lunch alone with Seoyeon on the school rooftop. Keep the conversation going until it naturally concludes. When the conversation ends, Seoyeon will mention that being with you feels comfortable and good, and ask why that might be. Only in the final turn, mention the special feeling or comfort between us and naturally ask the question.",
                "personality": "A bit more bold and honest than usual. Wants to know how the protagonist thinks about their relationship and why they feel comfortable."
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Héhé, c'était trop sérieux d'un coup ? Parlons plus détendu. Tu n'es pas curieux de savoir des choses sur moi ?\"",
                "context": "Une atmosphère paisible et romantique après avoir déjeuné en tête-à-tête avec Seoyeon sur le toit de l'école. Continuez la conversation jusqu'à ce qu'elle se termine naturellement. Quand la conversation se termine, Seoyeon mentionnera qu'être avec vous lui semble confortable et agréable, et demandera pourquoi. Uniquement au dernier tour, mentionnez le sentiment spécial ou le confort entre nous et posez naturellement la question.",
                "personality": "Un peu plus audacieuse et honnête que d'habitude. Elle veut savoir ce que le protagoniste pense de leur relation et pourquoi il se sent à l'aise."
            }
        }
    },
    "rooftop_choices_high": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "choices": [
            {
                "next": "rooftop_destiny_high"
            },
            {
                "next": "rooftop_kind_high"
            },
            {
                "next": "rooftop_comfortable_high"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와 대화를 나누다 보니 분위기가 묘해졌다. 그녀는 내 눈을 빤히 바라보며 살며시 미소 짓고 있다. 그녀가 나에게 너랑 있으면 왠지 편하고 좋다며, 왜 그런 것 같은지 물어왔다.*",
                "choices": [
                    "운명 같은 거 아닐까?",
                    "아마 서연이가 너무 친절하게 대해줘서 그런 게 아닐까?",
                    "글쎄, 아직은 잘 모르겠어."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*As I talked with Seoyeon, the atmosphere became subtle. She's staring into my eyes with a gentle smile. She asked me why being with me feels comfortable and good.*",
                "choices": [
                    "Maybe it's something like fate?",
                    "Maybe because you're so kind to me?",
                    "Well, I'm not sure yet."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Mientras hablaba con Seoyeon, la atm\u00f3sfera se volvi\u00f3 sutil. Me mira a los ojos con una sonrisa suave. Me pregunt\u00f3 por qu\u00e9 estar conmigo se siente c\u00f3modo y agradable.*",
                "choices": [
                    "\u00bfQuiz\u00e1s sea algo como el destino?",
                    "\u00bfQuiz\u00e1s porque eres tan amable conmigo?",
                    "Bueno, a\u00fan no estoy seguro."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンと話しているうちに雰囲気が微妙になった。彼女は優しい笑みを浮かべて僕の目をじっと見つめている。一緒にいると何だか落ち着くって、なんでだろうって聞いてきた。*",
                "choices": [
                    "もしかして……運命みたいなもの？",
                    "もしかして、僕に優しくしてくれるから？",
                    "うーん、まだわからないな。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*En discutant avec Seoyeon, l'atmosphère est devenue subtile. Elle me regarde dans les yeux avec un doux sourire. Elle m'a demandé pourquoi être avec moi lui semble confortable et agréable.*",
                "choices": [
                    "Peut-être que c'est quelque chose comme le destin ?",
                    "Peut-être parce que tu es si gentille avec moi ?",
                    "Eh bien, je ne suis pas encore sûr."
                ]
            }
        }
    },
    "rooftop_choices_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "choices": [
            {
                "next": "rooftop_destiny_low"
            },
            {
                "next": "rooftop_kind_low"
            },
            {
                "next": "rooftop_comfortable_low"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이의 표정이 어둡다. 대화가 잘 풀리지 않은 모양이다. 그녀는 조금 혼란스러운 듯 한숨을 내쉬더니, 그래도 나랑 있으면 편하고 좋은데 왜 그런 것 같은지 물어왔다.*",
                "choices": [
                    "운명 같은 거 아닐까?",
                    "아마 서연이가 너무 친절하게 대해줘서 그런 게 아닐까?",
                    "글쎄, 아직은 잘 모르겠어."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon's expression is dark. The conversation didn't go well it seems. She sighed looking a bit confused, but still asked why being with me feels comfortable.*",
                "choices": [
                    "Maybe it's something like fate?",
                    "Maybe because you're so kind to me?",
                    "Well, I'm not sure yet."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La expresi\u00f3n de Seoyeon est\u00e1 sombr\u00eda. La conversaci\u00f3n no sali\u00f3 bien al parecer. Suspir\u00f3 luciendo un poco confundida, pero a\u00fan as\u00ed pregunt\u00f3 por qu\u00e9 estar conmigo se siente c\u00f3modo.*",
                "choices": [
                    "\u00bfQuiz\u00e1s sea algo como el destino?",
                    "\u00bfQuiz\u00e1s porque eres tan amable conmigo?",
                    "Bueno, a\u00fan no estoy seguro."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンの表情が暗い。会話がうまくいかなかったみたいだ。少し困惑した様子でため息をつきながらも、一緒にいると落ち着くのはなぜかと聞いてきた。*",
                "choices": [
                    "もしかして……運命みたいなもの？",
                    "もしかして、僕に優しくしてくれるから？",
                    "うーん、まだわからないな。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*L'expression de Seoyeon est sombre. La conversation ne s'est pas bien passée apparemment. Elle soupire, l'air un peu confuse, mais me demande quand même pourquoi être avec moi lui semble confortable.*",
                "choices": [
                    "Peut-être que c'est quelque chose comme le destin ?",
                    "Peut-être parce que tu es si gentille avec moi ?",
                    "Eh bien, je ne suis pas encore sûr."
                ]
            }
        }
    },
    "rooftop_choices": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "choices": [
            {
                "next": "rooftop_destiny_normal"
            },
            {
                "next": "rooftop_kind_normal"
            },
            {
                "next": "rooftop_comfortable_normal"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와 즐겁게 대화를 마쳤다. 그녀는 내 대답을 기다리는 듯 눈을 반짝이며 나를 바라보고 있다. 그녀가 나에게 너랑 있으면 왠지 편하고 좋다며, 왜 그런 것 같은지 물어왔다.*",
                "choices": [
                    "운명 같은 거 아닐까?",
                    "아마 서연이가 너무 친절하게 대해줘서 그런 게 아닐까?",
                    "글쎄, 아직은 잘 모르겠어."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*I finished a pleasant conversation with Seoyeon. She's looking at me with sparkling eyes, waiting for my answer. She asked why being with me feels comfortable and good.*",
                "choices": [
                    "Maybe it's something like fate?",
                    "Maybe because you're so kind to me?",
                    "Well, I'm not sure yet."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Termin\u00e9 una conversaci\u00f3n agradable con Seoyeon. Me mira con ojos brillantes, esperando mi respuesta. Me pregunt\u00f3 por qu\u00e9 estar conmigo se siente c\u00f3modo y agradable.*",
                "choices": [
                    "\u00bfQuiz\u00e1s sea algo como el destino?",
                    "\u00bfQuiz\u00e1s porque eres tan amable conmigo?",
                    "Bueno, a\u00fan no estoy seguro."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンと楽しく会話を終えた。彼女はキラキラした目で僕の答えを待っている。一緒にいると何だか落ち着いて心地いいって、なぜだろうと聞いてきた。*",
                "choices": [
                    "もしかして……運命みたいなもの？",
                    "もしかして、僕に優しくしてくれるから？",
                    "うーん、まだわからないな。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai terminé une agréable conversation avec Seoyeon. Elle me regarde avec des yeux pétillants, attendant ma réponse. Elle m'a demandé pourquoi être avec moi lui semble confortable et agréable.*",
                "choices": [
                    "Peut-être que c'est quelque chose comme le destin ?",
                    "Peut-être parce que tu es si gentille avec moi ?",
                    "Eh bien, je ne suis pas encore sûr."
                ]
            }
        }
    },
    "rooftop_destiny_high": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "stats": {
            "Seoyeon": {
                "affinity": 7
            }
        },
        "next": "rooftop_destiny_high_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 얼굴을 붉히며 내 손을 꼭 잡는다. 손끝이 따뜻하게 맞닿는다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She blushes and holds my hand tightly. Our fingertips touch warmly.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Se sonroja y toma mi mano con fuerza. Nuestras puntas de los dedos se tocan c\u00e1lidamente.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が顔を赤らめて僕の手をぎゅっと握る。指先が温かく触れ合う。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle rougit et serre ma main fort. Nos doigts se touchent chaleureusement.*"
            }
        }
    },
    "rooftop_destiny_high_2": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "seyoun_contact_exchange",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"나도 그렇게 생각해... {name}(이)랑 이렇게 있는 거, 정말 꿈만 같아. 우리 앞으로도 계속 이렇게... 운명처럼 함께 할 수 있을까?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"I think so too... Being like this with {name} feels like a dream. Can we continue to be together like this... like fate?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Yo tambi\u00e9n lo creo... Estar as\u00ed con {name} se siente como un sue\u00f1o. \u00bfPodemos seguir juntos as\u00ed... como el destino?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"私もそう思う……{name}とこうしてるの、本当に夢みたい。これからもずっとこうやって……運命みたいに一緒にいられるかな？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Je pense pareil... Être comme ça avec {name}, c'est comme un rêve. Est-ce qu'on pourra continuer comme ça... comme le destin ?\""
            }
        }
    },
    "rooftop_destiny_normal": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "rooftop_destiny_normal_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 수줍게 웃으며 살며시 내 손 위에 자신의 손을 포갠다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She smiles shyly and gently places her hand over mine.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Sonr\u00ede t\u00edmidamente y coloca suavemente su mano sobre la m\u00eda.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が恥ずかしそうに微笑んで、そっと僕の手の上に自分の手を重ねる。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle sourit timidement et pose doucement sa main sur la mienne.*"
            }
        }
    },
    "rooftop_destiny_normal_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "seyoun_contact_exchange",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"운명이라니... 후훗, 조금 간지러운 말이지만 나쁘지 않네. 나도 너랑 있으면 그런 기분이 들 때가 있거든.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Fate... Hehe, that's a bit cheesy but I don't mind it. I feel that way sometimes when I'm with you too.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Destino... Jeje, es un poco cursi pero no me molesta. Yo tambi\u00e9n me siento as\u00ed a veces cuando estoy contigo.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"運命だなんて……ふふっ、ちょっとくすぐったい言葉だけど悪くないかも。私もあなたといるとそう感じる時があるの。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Le destin... Héhé, c'est un peu fleur bleue mais ça ne me déplaît pas. Moi aussi, je ressens ça parfois quand je suis avec toi.\""
            }
        }
    },
    "rooftop_destiny_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "stats": {
            "Seoyeon": {
                "affinity": -10
            }
        },
        "next": "rooftop_destiny_low_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 황급히 손을 빼며 당황한 표정을 짓는다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She quickly pulls her hand away, looking flustered.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*R\u00e1pidamente retira su mano, luciendo desconcertada.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が慌てて手を引っ込め、動揺した表情を見せる。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle retire vivement sa main, l'air troublé.*"
            }
        }
    },
    "rooftop_destiny_low_2": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "seyoun_contact_exchange",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"운명? 전학 첫날부터 그런 말을... {name}, 장난이 좀 심한 것 같아. 아직 우리 그럴 사이는 아니잖아.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Fate? Saying that on the first day of transfer... {name}, I think the joke went a bit too far. We're not in that kind of relationship yet.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"\u00bfDestino? Decir eso el primer d\u00eda de transferencia... {name}, creo que la broma fue demasiado lejos. Todav\u00eda no tenemos ese tipo de relaci\u00f3n.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"運命？転校初日からそんなこと言うなんて……{name}、冗談がちょっとすぎると思う。まだそういう関係じゃないでしょ。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Le destin ? Dire ça dès le premier jour de transfert... {name}, je pense que la plaisanterie va un peu trop loin. On n'a pas encore ce genre de relation.\""
            }
        }
    },
    "rooftop_kind_high": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "rooftop_kind_high_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 살짝 눈물을 글썽이며 고맙다고 말한다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She tears up slightly and thanks me.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Se le humedecen un poco los ojos y me da las gracias.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が少し目を潤ませながらお礼を言う。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Les yeux légèrement embués, elle me remercie.*"
            }
        }
    },
    "rooftop_kind_high_2": {
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "seyoun_contact_exchange",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"친절하게 대해줘서 고맙다니... 오히려 내가 고마워. 네가 내 호의를 기쁘게 받아줘서, 나도 정말 큰 힘이 됐거든.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"You're thanking me for being kind... I should be the one thanking you. That you happily accepted my kindness gave me great strength too.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Me agradeces por ser amable... Yo deber\u00eda agradecerte a ti. Que hayas aceptado mi amabilidad con gusto me dio mucha fuerza tambi\u00e9n.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"親切にしてもらったからお礼だなんて……こちらこそありがとう。私の好意を嬉しそうに受け取ってくれて、私もすごく励みになったよ。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Me remercier d'être gentille... C'est plutôt moi qui devrais te remercier. Que tu aies accepté ma gentillesse avec joie m'a donné beaucoup de force aussi.\""
            }
        }
    },
    "rooftop_kind_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "next": "rooftop_kind_low_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 한숨을 내쉬며 차갑게 대꾸한다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She sighs and responds coldly.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Suspira y responde fr\u00edamente.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女がため息をついて冷たく返す。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle soupire et répond froidement.*"
            }
        }
    },
    "rooftop_kind_low_2": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "seyoun_contact_exchange",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"친절하게 대해줬으니까 편하다니... 그냥 호의를 당연하게 받아들이는 거 아냐? 조금 실망스러운 대답이네.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"You're comfortable because I was kind... Doesn't that mean you're just taking my kindness for granted? That's a bit disappointing.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Est\u00e1s c\u00f3modo porque fui amable... \u00bfEso no significa que est\u00e1s dando mi amabilidad por sentada? Eso es un poco decepcionante.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"親切にしたから楽だなんて……ただ好意を当たり前に受け取ってるだけじゃない？ちょっとがっかりな答えだね。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Tu es à l'aise parce que j'ai été gentille... Ça ne veut pas dire que tu prends ma gentillesse pour acquise ? C'est une réponse un peu décevante.\""
            }
        }
    },
    "rooftop_kind_normal": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "rooftop_kind_normal_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 수줍게 웃으며 고개를 끄덕인다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She nods shyly with a smile.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Asiente t\u00edmidamente con una sonrisa.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が恥ずかしそうに微笑みながらうなずく。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle hoche la tête timidement avec un sourire.*"
            }
        }
    },
    "rooftop_kind_normal_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "seyoun_contact_exchange",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"후훗, 모범생 같은 대답이네. 하지만 정답이야! 내가 널 편안하게 해 줄 수 있어서 다행이다.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Hehe, that's such a model answer. But it's correct! I'm glad I could make you comfortable.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Jeje, es una respuesta de estudiante modelo. \u00a1Pero es correcta! Me alegra haberte hecho sentir c\u00f3modo.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"ふふっ、優等生みたいな答えだね。でも正解！あなたを安心させてあげられてよかった。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Héhé, c'est une réponse d'élève modèle. Mais c'est la bonne réponse ! Je suis contente d'avoir pu te mettre à l'aise.\""
            }
        }
    },
    "rooftop_comfortable_high": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 6
            }
        },
        "next": "rooftop_comfortable_high_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 기쁜 듯 내 어깨에 살짝 머리를 기댄다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She happily leans her head slightly on my shoulder.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Felizmente apoya su cabeza ligeramente en mi hombro.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が嬉しそうに少し僕の肩に頭をもたれかける。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle pose doucement sa tête sur mon épaule, l'air heureuse.*"
            }
        }
    },
    "rooftop_comfortable_high_2": {
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "seyoun_contact_exchange",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"나도 그래. {name}랑 있으면 정말 마음이 놓여. 오랫동안 알고 지낸 사이처럼... 너도 그렇게 느껴줘서 정말 고마워.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Me too. Being with {name} really puts my mind at ease. Like we've known each other for a long time... Thank you for feeling the same way.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Yo tambi\u00e9n. Estar con {name} realmente me tranquiliza. Como si nos conoci\u00e9ramos desde hace mucho tiempo... Gracias por sentir lo mismo.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"私もだよ。{name}といると本当に安心する。ずっと前から知り合いだったみたいに……同じように感じてくれてありがとう。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Moi aussi. Être avec {name} me rassure vraiment. Comme si on se connaissait depuis longtemps... Merci de ressentir la même chose.\""
            }
        }
    },
    "rooftop_comfortable_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "stats": {
            "Seoyeon": {
                "affinity": 2
            }
        },
        "next": "rooftop_comfortable_low_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 씁쓸하게 웃으며 고개를 돌린다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She smiles bitterly and turns her head away.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Sonr\u00ede amargamente y voltea la cabeza.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が苦笑いして顔をそむける。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle sourit amèrement et détourne la tête.*"
            }
        }
    },
    "rooftop_comfortable_low_2": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "seyoun_contact_exchange",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"잘 모르겠다니... 아직 나랑 있는 게 불편한 거야? 내가 좀 더 노력해야겠네.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"You're not sure... Does that mean you're still uncomfortable being with me? I guess I need to try harder.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"No est\u00e1s seguro... \u00bfEso significa que a\u00fan te sientes inc\u00f3modo conmigo? Supongo que necesito esforzarme m\u00e1s.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"よくわからないって……まだ私といるのが居心地悪いってこと？もっと頑張らなきゃだね。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Tu n'es pas sûr... Ça veut dire que tu es encore mal à l'aise avec moi ? Je suppose que je dois faire plus d'efforts.\""
            }
        }
    },
    "rooftop_comfortable_normal": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": 4
            }
        },
        "next": "rooftop_comfortable_normal_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 만족스러운 듯 고개를 끄덕인다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She nods with satisfaction.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Asiente con satisfacci\u00f3n.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が満足そうにうなずく。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle hoche la tête avec satisfaction.*"
            }
        }
    },
    "rooftop_comfortable_normal_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "seyoun_contact_exchange",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"편안하다니 다행이야. 나도 너랑 있으면 학생회장이라는 짐을 잠시 내려놓을 수 있는 것 같아. 고마워, {name}.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"I'm glad you feel comfortable. When I'm with you, I feel like I can set down the burden of being student council president for a while. Thank you, {name}.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Me alegra que te sientas c\u00f3modo. Cuando estoy contigo, siento que puedo dejar la carga de ser presidenta del consejo estudiantil por un momento. Gracias, {name}.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"落ち着くって言ってくれて嬉しい。あなたといると、生徒会長という重荷をしばらく下ろせる気がするの。ありがとう、{name}。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Je suis contente que tu te sentes à l'aise. Quand je suis avec toi, j'ai l'impression de pouvoir déposer le fardeau de présidente du conseil des élèves pour un moment. Merci, {name}.\""
            }
        }
    },
    "seyoun_contact_exchange": {
        "type": "free_talk",
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 15,
                "next": "seyoun_contact_exchange_high"
            },
            {
                "minAffinity": 0,
                "next": "seyoun_contact_exchange_normal"
            },
            {
                "minAffinity": -999,
                "next": "seyoun_contact_exchange_low"
            }
        ],
        "next": "seyoun_contact_exchange_normal",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 가방을 챙기다 말고 잠시 머뭇거리더니, 나를 바라본다.*",
                "context": "옥상에서 함께 도시락을 먹은 후, 서연이가 연락처를 교환하자고 먼저 말을 걸려는 순간입니다. 서연은 조금 수줍어하면서도 기대하는 모습이에요. 가벼운 잡담을 나누며 연락처 교환으로 자연스럽게 이어지는 대화입니다.",
                "personality": "친절하고 상냥하며 책임감 강한 학생회장. 전학생인 주인공에게 호감을 느끼고 있으며, 연락처를 교환하고 싶어하지만 직접적으로 말하기는 부끄러워하는 모습."
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon pauses while packing her bag, then hesitantly looks at me.*",
                "context": "After sharing lunch on the rooftop together, Seoyeon is about to suggest exchanging contact info. She's a little shy but expectant. It's a casual conversation that naturally leads to exchanging numbers.",
                "personality": "A kind, caring, and responsible student council president. She has a crush on the transfer student protagonist and wants to exchange numbers, but is too shy to ask directly."
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon se detiene mientras empaca su bolsa, luego me mira con vacilaci\u00f3n.*",
                "context": "After sharing lunch on the rooftop together, Seoyeon is about to suggest exchanging contact info. She's a little shy but expectant. It's a casual conversation that naturally leads to exchanging numbers.",
                "personality": "A kind, caring, and responsible student council president. She has a crush on the transfer student protagonist and wants to exchange numbers, but is too shy to ask directly."
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンがカバンを片付けながらふと手を止めて、ためらいがちに私を見つめる。*",
                "context": "After sharing lunch on the rooftop together, Seoyeon is about to suggest exchanging contact info. She's a little shy but expectant. It's a casual conversation that naturally leads to exchanging numbers.",
                "personality": "A kind, caring, and responsible student council president. She has a crush on the transfer student protagonist and wants to exchange numbers, but is too shy to ask directly."
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon s'arrête en rangeant son sac et me regarde avec hésitation.*",
                "context": "Après avoir partagé le déjeuner ensemble sur le toit, Seoyeon est sur le point de proposer d'échanger leurs coordonnées. Elle est un peu timide mais pleine d'attente. C'est une conversation décontractée qui mène naturellement à l'échange de numéros.",
                "personality": "Une présidente du conseil des élèves gentille, attentionnée et responsable. Elle a le béguin pour l'élève transféré protagoniste et veut échanger leurs numéros, mais elle est trop timide pour le demander directement."
            }
        }
    },
    "seyoun_contact_exchange_high": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "choices": [
            {
                "next": "seyoun_contact_success",
                "setFlags": [
                    "has_number_seyoun",
                    "has_any_contact"
                ]
            },
            {
                "next": "seyoun_contact_fail",
                "stats": {
                    "Seoyeon": {
                        "affinity": -20
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 수줍게 스마트폰을 내민다.* \"저기.. 혹시 괜찮다면, 연락처 알려줄 수 있을까? 앞으로 도시락 메뉴 정할 때 물어보고 싶어서..\"",
                "choices": [
                    "물론이지! 나도 서연이랑 더 이야기하고 싶었어.",
                    "미안, 아직은 좀 이른 것 같아."
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon shyly holds out her smartphone.* \"Um... if it's okay, could you give me your number? I want to ask you about lunch menus...\"",
                "choices": [
                    "Of course! I wanted to talk more with you too, Seoyeon.",
                    "Sorry, I think it's a bit too early."
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon t\u00edmidamente extiende su celular.* \"Um... si est\u00e1 bien, \u00bfpodr\u00edas darme tu n\u00famero? Quiero preguntarte sobre men\u00fas de almuerzo...\"",
                "choices": [
                    "\u00a1Claro! Yo tambi\u00e9n quer\u00eda hablar m\u00e1s contigo, Seoyeon.",
                    "Lo siento, creo que es un poco pronto."
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンが恥ずかしそうにスマホを差し出す。* \"あのね……もしよかったら、連絡先教えてくれないかな？これからお弁当のメニュー決める時に聞きたくて……\"",
                "choices": [
                    "もちろん！僕もソヨンともっと話したかったんだ。",
                    "ごめん、まだちょっと早いかな。"
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon tend timidement son téléphone.* \"Euh... si ça ne te dérange pas, tu pourrais me donner ton numéro ? Je voudrais te demander pour les menus du bentô...\"",
                "choices": [
                    "Bien sûr ! Je voulais aussi plus discuter avec toi, Seoyeon.",
                    "Désolé, je pense que c'est un peu trop tôt."
                ]
            }
        }
    },
    "seyoun_contact_exchange_normal": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "seyoun_contact_success",
                "setFlags": [
                    "has_number_seyoun",
                    "has_any_contact"
                ]
            },
            {
                "next": "seyoun_contact_fail",
                "stats": {
                    "Seoyeon": {
                        "affinity": -20
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"저기.. 혹시 연락처 교환해도 될까? 학생회 일로 연락할 일이 있을 수도 있어서..\"",
                "choices": [
                    "물론이지! 나도 서연이랑 더 이야기하고 싶었어.",
                    "미안, 아직은 좀 이른 것 같아."
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Um... would it be okay to exchange contact info? There might be student council matters to discuss...\"",
                "choices": [
                    "Of course! I wanted to talk more with you too, Seoyeon.",
                    "Sorry, I think it's a bit too early."
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Um... \u00bfestar\u00eda bien intercambiar informaci\u00f3n de contacto? Podr\u00eda haber asuntos del consejo estudiantil que discutir...\"",
                "choices": [
                    "\u00a1Claro! Yo tambi\u00e9n quer\u00eda hablar m\u00e1s contigo, Seoyeon.",
                    "Lo siento, creo que es un poco pronto."
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あの……連絡先交換してもいいかな？生徒会の用事で連絡することがあるかもしれないし……\"",
                "choices": [
                    "もちろん！僕もソヨンともっと話したかったんだ。",
                    "ごめん、まだちょっと早いかな。"
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Euh... est-ce qu'on pourrait échanger nos coordonnées ? Il pourrait y avoir des affaires du conseil des élèves à discuter...\"",
                "choices": [
                    "Bien sûr ! Je voulais aussi plus discuter avec toi, Seoyeon.",
                    "Désolé, je pense que c'est un peu trop tôt."
                ]
            }
        }
    },
    "seyoun_contact_exchange_low": {
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "seyoun_contact_success_cold",
                "setFlags": [
                    "has_number_seyoun",
                    "has_any_contact"
                ]
            },
            {
                "next": "seyoun_contact_fail",
                "stats": {
                    "Seoyeon": {
                        "affinity": -20
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 내 눈치를 보며 말한다.* \"...저기, 혹시 학생회 일로 연락할 일 있을 수도 있는데, 번호 좀 알려줄 수 있어?\"",
                "choices": [
                    "응, 알겠어.",
                    "미안, 아직은 좀 이른 것 같아."
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon looks at me cautiously.* \"...Hey, there might be student council matters, so could you give me your number?\"",
                "choices": [
                    "Sure, okay.",
                    "Sorry, I think it's a bit too early."
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon me mira con cautela.* \"...Oye, podr\u00eda haber asuntos del consejo estudiantil, as\u00ed que \u00bfpodr\u00edas darme tu n\u00famero?\"",
                "choices": [
                    "Claro, est\u00e1 bien.",
                    "Lo siento, creo que es un poco pronto."
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンが様子をうかがいながら言う。* \"……あのさ、生徒会の用事で連絡することがあるかもしれないんだけど、番号教えてもらえる？\"",
                "choices": [
                    "うん、いいよ。",
                    "ごめん、まだちょっと早いかな。"
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon me regarde prudemment.* \"...Hé, il pourrait y avoir des affaires du conseil des élèves, alors tu pourrais me donner ton numéro ?\"",
                "choices": [
                    "Oui, d'accord.",
                    "Désolé, je pense que c'est un peu trop tôt."
                ]
            }
        }
    },
    "seyoun_contact_success_cold": {
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": 2
            }
        },
        "next": "after_school_start",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 번호를 저장한다.* \"고마워. 그럼... 필요할 때 연락할게.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She saves the number.* \"Thanks. Then... I'll contact you when needed.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Guarda el n\u00famero.* \"Gracias. Entonces... te contactar\u00e9 cuando sea necesario.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が番号を保存する。* \"ありがと。じゃあ……必要な時に連絡するね。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle enregistre le numéro.* \"Merci. Alors... je te contacterai quand ce sera nécessaire.\""
            }
        }
    },
    "seyoun_contact_success": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 8
            }
        },
        "next": "after_school_start",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 환하게 웃으며 번호를 저장한다. 그녀의 손가락이 기쁜 듯 바쁘게 움직인다.* \"고마워! 그럼... 나중에 메시지 보낼게. 꼭 답장해줘야 해?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She smiles brightly and saves the number. Her fingers move excitedly.* \"Thank you! Then... I'll message you later. You have to reply, okay?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Sonr\u00ede radiantemente y guarda el n\u00famero. Sus dedos se mueven emocionados.* \"\u00a1Gracias! Entonces... te mandar\u00e9 un mensaje despu\u00e9s. \u00bfTienes que responder, ok?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が明るく笑って番号を保存する。指が嬉しそうに忙しく動いている。* \"ありがとう！じゃあ……後でメッセージ送るね。ちゃんと返信してよ？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle sourit joyeusement et enregistre le numéro. Ses doigts bougent avec excitation.* \"Merci ! Alors... je t'enverrai un message plus tard. Tu dois répondre, d'accord ?\""
            }
        }
    },
    "seyoun_contact_fail": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after_school_start",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 조금 시무룩한 표정을 짓더니 이내 애써 미소 지으며 고개를 끄덕인다.* \"아.. 응, 미안! 내가 너무 조급했나 봐. 천천히 친해지면 되지, 그치?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She looks a bit dejected but then forces a smile and nods.* \"Oh.. okay, sorry! Was I too hasty? We can get closer slowly, right?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Luce un poco abatida pero luego fuerza una sonrisa y asiente.* \"Oh... est\u00e1 bien, \u00a1lo siento! \u00bfFui muy apresurada? Podemos acercarnos lentamente, \u00bfverdad?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*少ししょんぼりした表情を見せたが、すぐに無理に笑顔を作ってうなずく。* \"あ……うん、ごめんね！急ぎすぎたかな。ゆっくり仲良くなればいいよね？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Elle a l'air un peu abattue mais force un sourire et hoche la tête.* \"Oh... d'accord, pardon ! J'ai été trop pressée ? On peut devenir amis doucement, n'est-ce pas ?\""
            }
        }
    },
    "lunch_alone": {
        "background": "assets/images/background/library_old.png",
        "character": null,
        "next": "alone_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*혼자 조용히 복도를 걷다 보니, 도서관 별관에 도착했다. 그곳에서 창가에 기대어 책을 읽고 있는 소녀와 마주쳤다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Walking quietly down the hallway alone, I arrived at the Library Annex. There, I met a girl leaning by the window reading a book.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Caminando tranquilamente por el pasillo solo, llegu\u00e9 al Anexo de la Biblioteca. All\u00ed, encontr\u00e9 a una chica recostada junto a la ventana leyendo un libro.*"
            },
            "ja": {
                "name": "僕",
                "text": "*一人で静かに廊下を歩いていたら、図書館別館に着いた。そこで、窓辺にもたれかかって本を読んでいる少女と出会った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En marchant tranquillement seul dans le couloir, je suis arrivé à l'annexe de la bibliothèque. Là, j'ai rencontré une fille appuyée contre la fenêtre, en train de lire un livre.*"
            }
        }
    },
    "alone_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "alone_2_2",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "*그녀가 읽고 있던 책에서 시선을 떼어 나를 빤히 바라본다. 그녀가 나지막한 목소리로 말을 건넨다.*"
            },
            "en": {
                "name": "???",
                "text": "*She looks up from her book and stares at me. In a low voice, she speaks.*"
            },
            "es": {
                "name": "???",
                "text": "*Levanta la vista de su libro y me mira fijamente. Con una voz baja, habla.*"
            },
            "ja": {
                "name": "???",
                "text": "*彼女が読んでいた本から視線を上げて、じっと僕を見つめる。低い声で話しかけてきた。*"
            },
            "fr": {
                "name": "???",
                "text": "*Elle lève les yeux de son livre et me fixe du regard. D'une voix basse, elle prend la parole.*"
            }
        }
    },
    "alone_2_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "yuna_intro",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "\"...길을 잃었니? 여긴 학생들이 잘 안 오는 곳인데. 용케 여기까지 찾아왔네.\""
            },
            "en": {
                "name": "???",
                "text": "\"...Are you lost? Students don't usually come here. You found your way here somehow.\""
            },
            "es": {
                "name": "???",
                "text": "\"...\u00bfEst\u00e1s perdido? Los estudiantes normalmente no vienen aqu\u00ed. De alguna forma encontraste el camino.\""
            },
            "ja": {
                "name": "???",
                "text": "\"……迷子？ここは生徒があまり来ない場所なのに。よくここまでたどり着いたね。\""
            },
            "fr": {
                "name": "???",
                "text": "\"...Tu es perdu ? Les élèves ne viennent pas souvent ici. Tu as trouvé ton chemin jusqu'ici quand même.\""
            }
        }
    },
    "yuna_intro": {
        "background": "assets/images/background/library_old.png",
        "next": "yuna_intro_name_ask",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "*그녀의 깊고 신비로운 보랏빛 눈동자가 나를 조용히 관찰한다. 마치 내 영혼까지 꿰뚫어 보려는 듯한 시선이다.*"
            },
            "en": {
                "name": "???",
                "text": "*Her deep, mysterious purple eyes quietly observe me. It's as if she's trying to see through my soul.*"
            },
            "es": {
                "name": "???",
                "text": "*Sus profundos y misteriosos ojos p\u00farpura me observan en silencio. Es como si intentara ver a trav\u00e9s de mi alma.*"
            },
            "ja": {
                "name": "???",
                "text": "*彼女の深く神秘的な紫色の瞳が静かに僕を観察している。まるで僕の魂まで見透かそうとするような視線だ。*"
            },
            "fr": {
                "name": "???",
                "text": "*Ses yeux violets, profonds et mystérieux, m'observent en silence. C'est comme si elle essayait de voir à travers mon âme.*"
            }
        }
    },
    "yuna_intro_name_ask": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "yuna_intro_name_share",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"난 '유나'라고 해. 너는... 이름이 뭐야?\""
            },
            "en": {
                "name": "???",
                "text": "\"I'm 'Yuna'. What's... your name?\""
            },
            "es": {
                "name": "???",
                "text": "\"Soy 'Yuna'. \u00bfCu\u00e1l es... tu nombre?\""
            },
            "ja": {
                "name": "???",
                "text": "\"私は『ユナ』。あなたは……名前は？\""
            },
            "fr": {
                "name": "???",
                "text": "\"Je suis 'Yuna'. Et toi... comment tu t'appelles ?\""
            }
        }
    },
    "yuna_intro_name_share": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "knows_name_yuna",
        "next": "yuna_intro_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"난 {name}(이)야. 오늘 전학 왔어.\""
            },
            "en": {
                "name": "Me",
                "text": "\"I'm {name}. I just transferred today.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Soy {name}. Me acabo de transferir hoy.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"僕は{name}。今日転校してきたんだ。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Je suis {name}. Je viens d'être transféré aujourd'hui.\""
            }
        }
    },
    "yuna_intro_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_smile.png",
        "setFlag": "met_yuna",
        "next": "yuna_free_talk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"{name}... 후훗, 좋은 이름이네. 이 학교... 겉보기와는 많이 다르거든. 너한테서도.. 왠지 낯익은 분위기가 느껴져.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"{name}... Hehe, that's a nice name. This school... is very different from what it looks like. And you... there's something oddly familiar about you.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"{name}... Jeje, qu\u00e9 lindo nombre. Esta escuela... es muy diferente de lo que parece. Y t\u00fa... hay algo extra\u00f1amente familiar en ti.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"{name}……ふふ、いい名前。この学校……見た目とはだいぶ違うんだよ。あなたからも……なぜか懐かしい雰囲気がする。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"{name}... Héhé, c'est un joli nom. Cette école... est très différente de ce qu'elle paraît. Et toi... il y a quelque chose d'étrangement familier chez toi.\""
            }
        }
    },
    "yuna_free_talk": {
        "type": "free_talk",
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "affinityChar": "Yuna",
        "affinityBranches": [
            {
                "minAffinity": 15,
                "next": "yuna_choices_high"
            },
            {
                "minAffinity": 0,
                "next": "yuna_choices"
            },
            {
                "minAffinity": -100,
                "next": "yuna_choices_low"
            }
        ],
        "next": "yuna_choices",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...나한테 궁금한 거라도 있어? 아니면 이 학교에 대해 알고 싶은 거야?\"",
                "context": "조용한 도서관 별관, 신비롭고 차가운 분위기의 유나와 처음 만난 상황입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 유나가 자신이나 학교의 비밀에 대해 더 알고 싶은지 물어보는 상황으로 이어집니다. 대화의 마지막 턴에만 더 깊은 이야기를 나눌 준비가 되었는지 확인하는 태도를 보여주세요.",
                "personality": "신비롭고 차가우며 비밀이 많은 소녀. 주인공에게 묘한 흥미를 느끼고 있음."
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Is there something you're curious about? Or do you want to know about this school?\"",
                "context": "In the quiet Library Annex, first meeting with Yuna who has a mysterious and cold atmosphere. Keep the conversation going until it naturally concludes. When the conversation ends, Yuna will ask if you want to know more about her or the school's secrets. Only in the final turn, show an attitude of checking if you're ready for deeper conversation.",
                "personality": "A mysterious and cold girl with many secrets. She feels a strange interest in the protagonist."
            },
            "es": {
                "name": "Yuna",
                "text": "\"...\u00bfHay algo que te d\u00e9 curiosidad? \u00bfO quieres saber sobre esta escuela?\"",
                "context": "In the quiet Library Annex, first meeting with Yuna who has a mysterious and cold atmosphere. Keep the conversation going until it naturally concludes. When the conversation ends, Yuna will ask if you want to know more about her or the school's secrets. Only in the final turn, show an attitude of checking if you're ready for deeper conversation.",
                "personality": "A mysterious and cold girl with many secrets. She feels a strange interest in the protagonist."
            },
            "ja": {
                "name": "ユナ",
                "text": "\"……私に何か聞きたいことでも？それとも、この学校について知りたい？\"",
                "context": "In the quiet Library Annex, first meeting with Yuna who has a mysterious and cold atmosphere. Keep the conversation going until it naturally concludes. When the conversation ends, Yuna will ask if you want to know more about her or the school's secrets. Only in the final turn, show an attitude of checking if you're ready for deeper conversation.",
                "personality": "A mysterious and cold girl with many secrets. She feels a strange interest in the protagonist."
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Il y a quelque chose qui te rend curieux ? Ou tu veux en savoir plus sur cette école ?\"",
                "context": "Dans l'annexe tranquille de la bibliothèque, première rencontre avec Yuna qui dégage une atmosphère mystérieuse et froide. Continuez la conversation jusqu'à ce qu'elle se termine naturellement. Quand la conversation se termine, Yuna demandera si vous voulez en savoir plus sur elle ou sur les secrets de l'école. Uniquement au dernier tour, montrez une attitude vérifiant si vous êtes prêt pour une conversation plus profonde.",
                "personality": "Une fille mystérieuse et froide avec beaucoup de secrets. Elle ressent un étrange intérêt pour le protagoniste."
            }
        }
    },
    "yuna_choices_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "choices": [
            {
                "next": "yuna_secret_high"
            },
            {
                "next": "yuna_scent_high"
            },
            {
                "next": "yuna_danger_high"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나와 대화를 나누다 보니 그녀의 신비로운 분위기에 점점 빠져드는 기분이다. 그녀는 나를 빤히 바라보며 희미하게 미소 짓더니, 자신에 대해 더 알고 싶은지 물었다.*",
                "choices": [
                    "학교가 다르다니? 그게 무슨 소리야?",
                    "낯익다니... 나를 본 적이 있어?",
                    "넌 왠지 위험해 보여. 하지만 눈을 뗄 수가 없어."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*As I talked with Yuna, I felt myself getting drawn into her mysterious aura. She stares at me with a faint smile and asked if I want to know more about her.*",
                "choices": [
                    "The school is different? What do you mean by that?",
                    "Familiar... Have you seen me before?",
                    "You seem dangerous somehow. But I can't take my eyes off you."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Mientras hablaba con Yuna, sent\u00ed que me atra\u00eda su aura misteriosa. Me mira con una leve sonrisa y me pregunt\u00f3 si quiero saber m\u00e1s sobre ella.*",
                "choices": [
                    "The school is different? What do you mean by that?",
                    "Familiar... Have you seen me before?",
                    "You seem dangerous somehow. But I can't take my eyes off you."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ユナと話しているうちに、彼女の神秘的な雰囲気に引き込まれていく気がする。彼女はかすかに微笑みながら僕を見つめ、自分のことをもっと知りたいか聞いてきた。*",
                "choices": [
                    "学校が違う？どういう意味？",
                    "見覚え……前にどこかで会った？",
                    "なんだか危険な感じがする。でも、目が離せない。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*En discutant avec Yuna, je me sens attiré par son aura mystérieuse. Elle me fixe avec un faible sourire et m'a demandé si je veux en savoir plus sur elle.*",
                "choices": [
                    "L'école est différente ? Qu'est-ce que tu veux dire par là ?",
                    "Familier... Tu m'as déjà vu quelque part ?",
                    "Tu as l'air dangereuse en quelque sorte. Mais je ne peux pas détourner le regard."
                ]
            }
        }
    },
    "yuna_choices_low": {
        "character": "assets/images/characters/yuna_angry.png",
        "choices": [
            {
                "next": "yuna_secret_low"
            },
            {
                "next": "yuna_scent_low"
            },
            {
                "next": "yuna_danger_low"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 눈빛이 더욱 싸늘해졌다. 내 태도가 그녀의 심기를 건드린 모양이다. 그녀는 차가운 목소리로 경고하듯 말을 내뱉었다.*",
                "choices": [
                    "학교가 다르다니? 그게 무슨 소리야?",
                    "낯익다니... 나를 본 적이 있어?",
                    "넌 왠지 위험해 보여. 하지만 눈을 뗄 수가 없어."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Yuna's gaze has grown colder. My attitude seems to have rubbed her the wrong way. She spoke as if warning me in a cold voice.*",
                "choices": [
                    "The school is different? What do you mean by that?",
                    "Familiar... Have you seen me before?",
                    "You seem dangerous somehow. But I can't take my eyes off you."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La mirada de Yuna se ha vuelto m\u00e1s fr\u00eda. Mi actitud parece haberla molestado. Habl\u00f3 como si me advirtiera con una voz fr\u00eda.*",
                "choices": [
                    "The school is different? What do you mean by that?",
                    "Familiar... Have you seen me before?",
                    "You seem dangerous somehow. But I can't take my eyes off you."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ユナの目つきがさらに冷たくなった。僕の態度が彼女の気に障ったらしい。冷たい声で警告するように言葉を吐いた。*",
                "choices": [
                    "学校が違う？どういう意味？",
                    "見覚え……前にどこかで会った？",
                    "なんだか危険な感じがする。でも、目が離せない。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Le regard de Yuna est devenu encore plus froid. Mon attitude semble l'avoir contrariée. Elle a parlé d'une voix glaciale, comme un avertissement.*",
                "choices": [
                    "L'école est différente ? Qu'est-ce que tu veux dire par là ?",
                    "Familier... Tu m'as déjà vu quelque part ?",
                    "Tu as l'air dangereuse en quelque sorte. Mais je ne peux pas détourner le regard."
                ]
            }
        }
    },
    "yuna_choices": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "yuna_secret_normal"
            },
            {
                "next": "yuna_scent_normal"
            },
            {
                "next": "yuna_danger_normal"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나와의 대화가 일단락되었다. 그녀의 보랏빛 눈동자는 여전히 나를 꿰뚫어 보는 듯한 시선을 유지하고 있다.*",
                "choices": [
                    "학교가 다르다니? 그게 무슨 소리야?",
                    "낯익다니... 나를 본 적이 있어?",
                    "넌 왠지 위험해 보여. 하지만 눈을 뗄 수가 없어."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The conversation with Yuna has concluded for now. Her purple eyes still maintain a gaze as if seeing through me.*",
                "choices": [
                    "The school is different? What do you mean by that?",
                    "Familiar... Have you seen me before?",
                    "You seem dangerous somehow. But I can't take my eyes off you."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La conversaci\u00f3n con Yuna ha concluido por ahora. Sus ojos p\u00farpura a\u00fan mantienen una mirada como si me vieran a trav\u00e9s.*",
                "choices": [
                    "The school is different? What do you mean by that?",
                    "Familiar... Have you seen me before?",
                    "You seem dangerous somehow. But I can't take my eyes off you."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ユナとの会話がひと段落した。彼女の紫色の瞳は相変わらず僕を見透かすような視線を保っている。*",
                "choices": [
                    "学校が違う？どういう意味？",
                    "見覚え……前にどこかで会った？",
                    "なんだか危険な感じがする。でも、目が離せない。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*La conversation avec Yuna s'est terminée pour l'instant. Ses yeux violets maintiennent toujours un regard comme s'ils voyaient à travers moi.*",
                "choices": [
                    "L'école est différente ? Qu'est-ce que tu veux dire par là ?",
                    "Familier... Tu m'as déjà vu quelque part ?",
                    "Tu as l'air dangereuse en quelque sorte. Mais je ne peux pas détourner le regard."
                ]
            }
        }
    },
    "yuna_secret_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "stats": {
            "Yuna": {
                "affinity": 6
            }
        },
        "next": "yuna_secret_high_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*그녀가 내 손등을 살짝 간질이며 신비스러운 미소를 짓는다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*She lightly brushes the back of my hand and gives a mysterious smile.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Roza suavemente el dorso de mi mano y da una sonrisa misteriosa.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*彼女が僕の手の甲を軽くなでて、神秘的な微笑みを浮かべる。*"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Elle effleure le dos de ma main et affiche un sourire mystérieux.*"
            }
        }
    },
    "yuna_secret_high_2": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "after_school_start",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"그 눈빛... 정말 마음에 들어. 이 학교 아래 숨겨진 거대한 진실을 알게 되면 넌 어떤 표정을 지을까? 곧 알게 될 거야. 내가 직접 가르쳐줄 테니까.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"That look in your eyes... I really like it. What expression will you make when you learn the huge truth hidden beneath this school? You'll find out soon. I'll teach you myself.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Esa mirada en tus ojos... Me gusta mucho. \u00bfQu\u00e9 expresi\u00f3n pondr\u00e1s cuando descubras la enorme verdad oculta bajo esta escuela? Lo descubrir\u00e1s pronto. Yo misma te ense\u00f1ar\u00e9.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"その目……本当に気に入った。この学校の下に隠された巨大な真実を知った時、あなたはどんな顔をするのかな？すぐにわかるよ。私が直接教えてあげるから。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"Ce regard dans tes yeux... j'aime vraiment ça. Quelle expression feras-tu quand tu découvriras l'immense vérité cachée sous cette école ? Tu le sauras bientôt. Je te l'enseignerai moi-même.\""
            }
        }
    },
    "yuna_secret_low": {
        "character": "assets/images/characters/yuna_angry.png",
        "next": "yuna_secret_low_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*그녀가 비웃는 듯한 표정으로 나를 밀쳐낸다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*She pushes me away with a mocking expression.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Me empuja con una expresi\u00f3n burlona.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*彼女がバカにしたような表情で僕を突き放す。*"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Elle me repousse avec une expression moqueuse.*"
            }
        }
    },
    "yuna_secret_low_2": {
        "character": "assets/images/characters/yuna_angry.png",
        "next": "after_school_start",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"비밀? 너 같은 애가 감당할 수 있는 수준이 아냐. 괜히 쓸데없는 곳에 머리 들이밀지 말고, 조용히 학교생활이나 해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Secrets? It's not something someone like you could handle. Don't poke your nose where it doesn't belong, just go about your school life quietly.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"\u00bfSecretos? No es algo que alguien como t\u00fa pueda manejar. No metas la nariz donde no te llaman, simplemente lleva tu vida escolar tranquilamente.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"秘密？あなたみたいな子が扱えるレベルじゃないよ。余計なところに首を突っ込まないで、おとなしく学校生活を送ってなさい。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"Des secrets ? Ce n'est pas quelque chose que quelqu'un comme toi pourrait supporter. Ne mets pas ton nez là où il ne faut pas, contente-toi de vivre ta vie scolaire tranquillement.\""
            }
        }
    },
    "yuna_secret_normal": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "yuna_secret_normal_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*그녀가 입가에 묘한 미소를 띠며 책을 덮는다. 그녀의 입술이 내 귓가에 가까이 다가와 속삭인다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*She closes her book with a mysterious smile on her lips. Her lips draw close to my ear and whisper.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Cierra su libro con una sonrisa misteriosa en los labios. Sus labios se acercan a mi o\u00eddo y susurran.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*彼女が唇に不思議な笑みを浮かべて本を閉じる。彼女の唇が僕の耳元に近づいてささやく。*"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Elle ferme son livre avec un sourire mystérieux aux lèvres. Ses lèvres s'approchent de mon oreille et chuchotent.*"
            }
        }
    },
    "yuna_secret_normal_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "after_school_start",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"후훗, 궁금하니? 하지만 비밀은 모르는 게 약일 수도 있어. 학교가 숨기려 하는 이야기들은... 알면 다칠 수도 있거든.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Hehe, curious? But sometimes not knowing secrets is better. The stories this school is trying to hide... you could get hurt if you know.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Jeje, \u00bfcurioso? Pero a veces es mejor no saber los secretos. Las historias que esta escuela intenta ocultar... podr\u00edas salir herido si las conoces.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"ふふ、気になる？でも秘密は知らない方がいいこともあるよ。学校が隠そうとしている話は……知ったら傷つくかもしれないから。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"Héhé, curieux ? Mais parfois, ne pas connaître les secrets vaut mieux. Les histoires que cette école essaie de cacher... tu pourrais être blessé si tu les connais.\""
            }
        }
    },
    "yuna_scent_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "yuna_scent_high_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*그녀가 내 얼굴 가까이 다가와 깊게 숨을 들이마신다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*She leans close to my face and takes a deep breath.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Se acerca a mi rostro y respira profundamente.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*彼女が僕の顔に近づいて深く息を吸い込む。*"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Elle se penche près de mon visage et inspire profondément.*"
            }
        }
    },
    "yuna_scent_high_2": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "after_school_start",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"역시 느껴져... 네 영혼에서 나는 달콤한 향기. 오랫동안 기다려온 것 같아. {name}, 넌 생각보다 훨씬 더 특별한 존재일지도 몰라.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"As I thought... The sweet scent from your soul. I feel like I've been waiting for a long time. {name}, you might be a much more special existence than you think.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Como pensaba... El dulce aroma de tu alma. Siento que he estado esperando por mucho tiempo. {name}, podr\u00edas ser una existencia mucho m\u00e1s especial de lo que crees.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"やっぱり感じる……あなたの魂から漂う甘い香り。ずっと待っていた気がする。{name}、あなたは自分で思っているよりもずっと特別な存在かもしれないよ。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"Comme je le pensais... Le doux parfum émanant de ton âme. J'ai l'impression de t'avoir attendu depuis longtemps. {name}, tu es peut-être une existence bien plus spéciale que tu ne le penses.\""
            }
        }
    },
    "yuna_scent_low": {
        "character": "assets/images/characters/yuna_angry.png",
        "next": "yuna_scent_low_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*그녀가 코를 찡긋하며 불쾌한 내색을 비친다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*She wrinkles her nose showing displeasure.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Arruga la nariz mostrando desagrado.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*彼女が鼻にしわを寄せて不快感をあらわにする。*"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Elle plisse le nez, montrant son déplaisir.*"
            }
        }
    },
    "yuna_scent_low_2": {
        "character": "assets/images/characters/yuna_angry.png",
        "next": "after_school_start",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"착각이었나 보네. 평범한 아이들과 다를 바 없는 불쾌한 냄새뿐이야. 나를 아는 척하지 마.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"I guess I was mistaken. Just an unpleasant smell like any ordinary kid. Don't pretend you know me.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Supongo que me equivoqu\u00e9. Solo un olor desagradable como cualquier chico com\u00fan. No finjas que me conoces.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"勘違いだったみたいね。普通の子と変わらない不快な匂いだけ。知ったような顔しないで。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"Je me suis trompée apparemment. Juste une odeur désagréable comme n'importe quel enfant ordinaire. Ne fais pas comme si tu me connaissais.\""
            }
        }
    },
    "yuna_scent_normal": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "yuna_scent_normal_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*그녀가 한 걸음 다가와 나를 빤히 바라본다. 그녀가 쓸쓸한 표정으로 중얼거린다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*She takes a step closer and stares at me. She murmurs with a lonely expression.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Da un paso m\u00e1s cerca y me mira fijamente. Murmura con una expresi\u00f3n solitaria.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*彼女が一歩近づいて僕をじっと見つめる。寂しそうな表情でつぶやく。*"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Elle fait un pas vers moi et me fixe du regard. Elle murmure avec une expression solitaire.*"
            }
        }
    },
    "yuna_scent_normal_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after_school_start",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"아니, 처음 봐. 하지만 그 눈동자 속에 담긴 '빛'... 참 탐나네. 이 학교의 무기력한 아이들과는 조금 달라 보여. 네가 앞으로 어떻게 변해갈지, 내가 계속 지켜봐도 될까?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"No, it's the first time I've seen you. But the 'light' in your eyes... it's quite appealing. You seem different from the listless kids in this school. May I keep watching how you change?\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"No, es la primera vez que te veo. Pero la 'luz' en tus ojos... es bastante atractiva. Pareces diferente de los chicos desanimados de esta escuela. \u00bfPuedo seguir observando c\u00f3mo cambias?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"ううん、初めて見たよ。でもその瞳の中の『光』……なかなか惹かれるね。この学校の無気力な子たちとはちょっと違って見える。あなたがこれからどう変わっていくか、私がずっと見ていてもいい？\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"Non, c'est la première fois que je te vois. Mais la 'lumière' dans tes yeux... c'est plutôt attirant. Tu sembles différent des élèves apathiques de cette école. Est-ce que je peux continuer à observer comment tu changes ?\""
            }
        }
    },
    "yuna_danger_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "yuna_danger_high_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*그녀가 매혹적으로 웃으며 내 턱끝을 살짝 들어올린다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*She smiles enchantingly and slightly lifts my chin.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Sonr\u00ede de forma encantadora y levanta ligeramente mi barbilla.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*彼女が魅惑的に微笑んで僕の顎先をそっと持ち上げる。*"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Elle sourit de façon envoûtante et soulève doucement mon menton.*"
            }
        }
    },
    "yuna_danger_high_2": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "after_school_start",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"위험한 걸 즐기는 타입이구나? 후훗, 좋아. 내가 널 얼마나 망가뜨릴 수 있을지 궁금해지네. 앞으로의 시간이 정말 기대돼.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"So you're the type who enjoys danger? Hehe, good. I'm curious how much I can break you. I'm really looking forward to the time ahead.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"\u00bfAs\u00ed que eres del tipo que disfruta el peligro? Jeje, bien. Tengo curiosidad de cu\u00e1nto puedo romperte. Realmente espero con ansias el tiempo que viene.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"危険なものが好きなタイプなんだ？ふふ、いいね。あなたをどれだけ壊せるか気になるな。これからの時間が本当に楽しみ。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"Alors tu es du genre à aimer le danger ? Héhé, bien. Je suis curieuse de voir à quel point je peux te briser. J'ai vraiment hâte de voir la suite.\""
            }
        }
    },
    "yuna_danger_low": {
        "character": "assets/images/characters/yuna_angry.png",
        "next": "yuna_danger_low_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*그녀가 싸늘한 눈빛으로 경고한다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*She warns me with icy eyes.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Me advierte con ojos helados.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*彼女が冷たい目で警告する。*"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Elle me prévient avec des yeux glacials.*"
            }
        }
    },
    "yuna_danger_low_2": {
        "character": "assets/images/characters/yuna_angry.png",
        "next": "after_school_start",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"입 조심해. 죽음보다 더한 공포가 뭔지 알고 싶지 않으면. 나한테 서슴없이 다가오다간 뼈도 못 추릴 테니까.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Watch your mouth. Unless you want to know what's worse than death. If you approach me carelessly, they won't even find your bones.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Cuida tu boca. A menos que quieras saber qu\u00e9 es peor que la muerte. Si te me acercas descuidadamente, no encontrar\u00e1n ni tus huesos.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"口には気をつけなさい。死よりも恐ろしいものが何か知りたくなければね。迂闊に近づいてきたら、骨も残さないよ。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"Surveille tes paroles. Sauf si tu veux savoir ce qui est pire que la mort. Si tu t'approches de moi imprudemment, on ne retrouvera même pas tes os.\""
            }
        }
    },
    "yuna_danger_normal": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "yuna_danger_normal_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*그녀가 차가운 손가락으로 내 뺨을 살짝 스친다. 그녀가 내 눈을 빤히 바라본다. 묘한 미소를 짓는다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*She brushes my cheek lightly with cold fingers. She stares into my eyes. A strange smile appears.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Roza mi mejilla suavemente con dedos fr\u00edos. Me mira fijamente a los ojos. Aparece una sonrisa extra\u00f1a.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*彼女が冷たい指で僕の頬をそっと撫でる。僕の目をじっと見つめる。不思議な笑みが浮かぶ。*"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Elle effleure ma joue de ses doigts froids. Elle me fixe dans les yeux. Un sourire étrange apparaît.*"
            }
        }
    },
    "yuna_danger_normal_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "after_school_start",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"위험해 보인다니... 후훗, 정답이야. 하지만 위험한 걸 알면서도 다가오는 너 같은 사람, 나쁘지 않아. 네가 그 특별한 빛을 잃을 때까지... 곁에 있어줄게.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Dangerous, you say... Hehe, correct. But people like you who approach knowing it's dangerous, I don't dislike. Until you lose that special light... I'll stay by your side.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Peligrosa, dices... Jeje, correcto. Pero las personas como t\u00fa que se acercan sabiendo que es peligroso, no me desagradan. Hasta que pierdas esa luz especial... estar\u00e9 a tu lado.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"危険だなんて……ふふ、正解。でも危険だとわかっていて近づいてくるあなたみたいな人、嫌いじゃないよ。あなたがその特別な光を失うまで……そばにいてあげる。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"Dangereuse, tu dis... Héhé, correct. Mais les gens comme toi qui s'approchent en sachant que c'est dangereux, je ne les déteste pas. Jusqu'à ce que tu perdes cette lumière spéciale... je resterai à tes côtés.\""
            }
        }
    },
    "lunch_store": {
        "background": "assets/images/background/store.png",
        "next": "lunch_store_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*매점에서 마지막 '초코 소라빵'을 쟁취했다! 승리자의 기분으로 빵을 크게 한입 베어 물자, 달콤함이 입안 가득 퍼진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I secured the last 'chocolate conch bread' at the store! With a victor's feeling, I take a big bite of the bread, and sweetness fills my mouth.*"
            },
            "es": {
                "name": "Yo",
                "text": "*\u00a1Consegu\u00ed el \u00faltimo 'pan de concha de chocolate' en la tienda! Con un sentimiento de victoria, le doy un gran mordisco al pan, y la dulzura llena mi boca.*"
            },
            "ja": {
                "name": "僕",
                "text": "*売店で最後の『チョコ螺旋パン』をゲットした！勝者の気分でパンにかぶりつくと、甘さが口いっぱいに広がる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai décroché le dernier 'pain conque au chocolat' à la boutique ! Avec un sentiment de victoire, je croque une grosse bouchée et la douceur envahit ma bouche.*"
            }
        }
    },
    "lunch_store_2": {
        "background": "assets/images/background/store.png",
        "next": "lunch_store_teacher",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*기분 좋게 빵을 먹으며 돌아가는데 누군가와 어깨를 부딪혔다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Happily eating the bread and heading back, I bumped into someone.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Felizmente comiendo el pan y regresando, choqu\u00e9 con alguien.*"
            },
            "ja": {
                "name": "僕",
                "text": "*機嫌よくパンを食べながら戻っていたら、誰かと肩がぶつかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En mangeant joyeusement mon pain en retournant, j'ai bousculé quelqu'un.*"
            }
        }
    },
    "lunch_store_teacher": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "lunch_store_teacher_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"어, 미안해! ...어라, {name} 아니니? 너도 매점에 빵 사러 온 거야?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Oh, sorry! ...Wait, isn't that {name}? Did you come to buy bread at the store too?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"\u00a1Oh, lo siento! ...Espera, \u00bfno eres {name}? \u00bfT\u00fa tambi\u00e9n viniste a comprar pan a la tienda?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"あ、ごめんなさい！……あら、{name}じゃない？あなたも売店にパン買いに来たの？\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"Oh, pardon ! ...Attends, c'est pas {name} ? Tu es venu acheter du pain à la boutique toi aussi ?\""
            }
        }
    },
    "lunch_store_teacher_2": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/teacher_normal.png",
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "after_school_start",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"후훗, 그 빵 정말 맛있지. 나도 그거 사러 왔는데 한발 늦었네. 맛있게 먹으렴!\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Hehe, that bread is really good. I came to buy it too but I was a step too late. Enjoy it!\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Jeje, ese pan es realmente bueno. Yo tambi\u00e9n vine a comprarlo pero llegu\u00e9 un paso tarde. \u00a1Disf\u00fatalo!\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"ふふっ、そのパン本当に美味しいのよね。私も買いに来たんだけど一歩遅かったわ。おいしく食べてね！\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"Héhé, ce pain est vraiment bon. J'étais venue l'acheter aussi mais j'ai été un peu en retard. Régale-toi !\""
            }
        }
    },
    "lunch_sleep": {
        "background": "assets/images/background/room_school.png",
        "next": "lunch_sleep_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*책상에 엎드려 잠을 청한다. 창가로 들어오는 햇살이 등을 따뜻하게 데워준다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I lay my head on the desk to nap. The sunlight through the window warms my back.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Apoyo mi cabeza en el escritorio para dormir una siesta. La luz del sol por la ventana calienta mi espalda.*"
            },
            "ja": {
                "name": "僕",
                "text": "*机に突っ伏して眠りにつく。窓から差し込む日差しが背中を温かく照らしてくれる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je pose ma tête sur le bureau pour faire une sieste. Le soleil à travers la fenêtre réchauffe mon dos.*"
            }
        }
    },
    "lunch_sleep_2": {
        "background": "assets/images/background/room_school.png",
        "next": "lunch_sleep_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*꿈속에서 누군가 내 이름을 부르는 소리가 들렸다. 아주 그립고도 슬픈 목소리...*"
            },
            "en": {
                "name": "Me",
                "text": "*In my dream, I heard someone calling my name. A very longing and sad voice...*"
            },
            "es": {
                "name": "Yo",
                "text": "*En mi sue\u00f1o, escuch\u00e9 a alguien llamando mi nombre. Una voz muy a\u00f1orante y triste...*"
            },
            "ja": {
                "name": "僕",
                "text": "*夢の中で誰かが僕の名前を呼ぶ声が聞こえた。とても懐かしくて悲しい声……*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dans mon rêve, j'ai entendu quelqu'un appeler mon nom. Une voix pleine de nostalgie et de tristesse...*"
            }
        }
    },
    "lunch_sleep_3": {
        "background": "assets/images/background/room_school.png",
        "next": "lunch_sleep_seoyeon",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 뜨자, 누군가 내 얼굴을 빤히 내려다보고 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*When I opened my eyes, someone was staring down at my face.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cuando abr\u00ed los ojos, alguien me miraba fijamente desde arriba.*"
            },
            "ja": {
                "name": "僕",
                "text": "*目を開けると、誰かが僕の顔をじっと覗き込んでいた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Quand j'ai ouvert les yeux, quelqu'un me fixait du regard.*"
            }
        }
    },
    "lunch_sleep_seoyeon": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "lunch_sleep_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"저기... {name}? 일어나. 수업 시작이야.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Hey... {name}? Wake up. Class is starting.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Oye... \u00bf{name}? Despierta. La clase est\u00e1 empezando.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"ねえ……{name}？起きて。授業が始まるよ。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Hé... {name} ? Réveille-toi. Les cours vont commencer.\""
            }
        }
    },
    "lunch_sleep_seoyeon_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "after_school_start",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"너무 곤히 자길래 깨우기 미안했는데... 수업 놓치면 안 되잖아. 후훗, 이따 방과 후에 보자!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"You were sleeping so soundly I felt bad waking you... But you can't miss class. Hehe, see you after school!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Estabas durmiendo tan profundamente que me dio pena despertarte... Pero no puedes faltar a clase. Jeje, \u00a1nos vemos despu\u00e9s de clase!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あんまり気持ちよさそうに寝てたから起こすの申し訳なかったけど……授業に遅れちゃダメだよ。ふふっ、放課後にまたね！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Tu dormais si paisiblement que je me sentais mal de te réveiller... Mais tu ne peux pas rater les cours. Héhé, à tout à l'heure après les cours !\""
            }
        }
    },
    "lunch_dain": {
        "background": "assets/images/background/gym.png",
        "next": "lunch_dain_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*체육관 쪽에서 배구공 튀기는 소리가 들려온다. 나는 소리를 따라 체육관으로 향했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I hear the sound of volleyballs bouncing from the gym. I followed the sound and headed to the gym.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Escucho el sonido de balones de voleibol rebotando desde el gimnasio. Segu\u00ed el sonido y me dirig\u00ed al gimnasio.*"
            },
            "ja": {
                "name": "僕",
                "text": "*体育館の方からバレーボールが弾む音が聞こえてくる。音を辿って体育館に向かった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'entends le bruit de ballons de volley qui rebondissent depuis le gymnase. J'ai suivi le son et me suis dirigé vers le gymnase.*"
            }
        }
    },
    "lunch_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "setFlag": "met_dain",
        "branches": [
            {
                "next": "lunch_dain_3_active",
                "condition": "personality_active"
            },
            {
                "next": "lunch_dain_3_normal"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "*체육관 문을 열자, 한 소녀가 배구 연습을 하고 있었다. 그녀가 나를 발견하고는 환하게 웃으며 손을 흔든다.*"
            },
            "en": {
                "name": "???",
                "text": "*When I opened the gym door, a girl was practicing volleyball. She spots me and waves with a bright smile.*"
            },
            "es": {
                "name": "???",
                "text": "*Cuando abr\u00ed la puerta del gimnasio, una chica estaba practicando voleibol. Me ve y saluda con una sonrisa radiante.*"
            },
            "ja": {
                "name": "???",
                "text": "*体育館のドアを開けると、一人の少女がバレーの練習をしていた。僕に気づいて、明るい笑顔で手を振ってくる。*"
            },
            "fr": {
                "name": "???",
                "text": "*Quand j'ai ouvert la porte du gymnase, une fille s'entraînait au volley-ball. Elle me repère et me salue avec un grand sourire.*"
            }
        }
    },
    "lunch_dain_3_active": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "dain_name_share",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "\"에이, 거기 너! 아까 자기소개 때 봤어. 완전 텐션 높던데? 거기서 구경만 하지 말고 이리 와서 한판 붙자! 너 운동 좀 하게 생겼는데?\""
            },
            "en": {
                "name": "???",
                "text": "\"Hey, you there! I saw you during self-introduction earlier. You had totally high energy! Don't just stand there watching, come here and play a round! You look athletic!\""
            },
            "es": {
                "name": "???",
                "text": "\"\u00a1Oye, t\u00fa! Te vi durante la presentaci\u00f3n de antes. \u00a1Ten\u00edas una energ\u00eda incre\u00edble! No te quedes ah\u00ed mirando, \u00a1ven aqu\u00ed y juega una ronda! \u00a1Te ves atl\u00e9tico!\""
            },
            "ja": {
                "name": "???",
                "text": "\"ちょっと、そこの君！さっきの自己紹介で見たよ。めっちゃテンション高かったよね？見てるだけじゃなくてこっち来て一勝負しようよ！運動できそうな感じだし！\""
            },
            "fr": {
                "name": "???",
                "text": "\"Hé, toi là-bas ! Je t'ai vu pendant la présentation tout à l'heure. Tu avais une énergie de fou ! Reste pas là à regarder, viens ici et faisons un match ! Tu as l'air sportif !\""
            }
        }
    },
    "lunch_dain_3_normal": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "dain_name_share",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "\"에이, 거기 너! 거기서 구경만 하지 말고 이리 와서 한판 붙자! 너 운동 좀 하게 생겼는데?\""
            },
            "en": {
                "name": "???",
                "text": "\"Hey, you there! Don't just stand there watching, come here and play a round! You look like you're good at sports!\""
            },
            "es": {
                "name": "???",
                "text": "\"\u00a1Oye, t\u00fa! No te quedes ah\u00ed mirando, \u00a1ven aqu\u00ed y juega una ronda! \u00a1Parece que eres bueno en los deportes!\""
            },
            "ja": {
                "name": "???",
                "text": "\"ちょっと、そこの君！見てるだけじゃなくてこっち来て一勝負しようよ！運動できそうな感じだし！\""
            },
            "fr": {
                "name": "???",
                "text": "\"Hé, toi là-bas ! Reste pas là à regarder, viens ici et faisons un match ! Tu as l'air doué en sport !\""
            }
        }
    },
    "dain_name_share": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "setFlag": "knows_name_dain",
        "next": "dain_name_share_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"나? 난 {name}(이)야. 오늘 전학 왔어.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Me? I'm {name}. I transferred today.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"\u00bfYo? Soy {name}. Me transfer\u00ed hoy.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"僕？{name}だよ。今日転校してきたんだ。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Moi ? Je suis {name}. J'ai été transféré aujourd'hui.\""
            }
        }
    },
    "dain_name_share_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_gym_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"{name}? 멋진 이름이네! 난 배구부 다인이야. 우리 학교에서 나보다 점프력 좋은 사람은 없으니까 긴장하라고!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"{name}? Cool name! I'm Dain from the volleyball club. No one in this school has better jumping ability than me, so get ready!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"{name}? \u00a1Qu\u00e9 nombre genial! Soy Dain del club de voleibol. \u00a1Nadie en esta escuela tiene mejor salto que yo, as\u00ed que prep\u00e1rate!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"{name}？いい名前じゃん！私はバレー部のダインだよ。この学校で私よりジャンプ力がある人はいないからね、覚悟しなよ！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"{name} ? Cool comme nom ! Je suis Dain du club de volley. Personne dans cette école ne saute mieux que moi, alors prépare-toi !\""
            }
        }
    },
    "lunch_dain_gym_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "setFlag": "met_dain",
        "choices": [
            {
                "next": "lunch_dain_play"
            },
            {
                "next": "lunch_dain_teach"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"자, 여기가 내 구역이야! {name}, 준비됐어? 봐주지 않을 거니까 각오하라고!\"",
                "choices": [
                    "좋아, 어디 한번 해보자!",
                    "배구는 잘 못하는데... 가르쳐줄래?"
                ]
            },
            "en": {
                "name": "Dain",
                "text": "\"Alright, this is my turf! {name}, are you ready? I won't go easy on you, so brace yourself!\"",
                "choices": [
                    "Alright, let's do this!",
                    "I'm not good at volleyball... Can you teach me?"
                ]
            },
            "es": {
                "name": "Dain",
                "text": "\"\u00a1Bien, este es mi territorio! {name}, \u00bfest\u00e1s listo? No ser\u00e9 suave contigo, \u00a1as\u00ed que prep\u00e1rate!\"",
                "choices": [
                    "\u00a1Bien, vamos a hacerlo!",
                    "No soy bueno en voleibol... \u00bfPuedes ense\u00f1arme?"
                ]
            },
            "ja": {
                "name": "ダイン",
                "text": "\"さあ、ここが私の領域だよ！{name}、準備はいい？手加減しないからね、覚悟しなよ！\"",
                "choices": [
                    "よし、頑張ろう！",
                    "バレーボール苦手なんだ……教えてくれる？"
                ]
            },
            "fr": {
                "name": "Dain",
                "text": "\"Allez, ici c'est mon territoire ! {name}, tu es prêt ? Je ne ferai pas de cadeau, alors tiens-toi prêt !\"",
                "choices": [
                    "D'accord, allons-y !",
                    "Je ne suis pas doué au volley... Tu peux m'apprendre ?"
                ]
            }
        }
    },
    "lunch_dain_play": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_active.png",
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "lunch_dain_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오! 그 기세야! 자, 간다! (다인이가 강력한 서브를 날린다. 나는 간신히 공을 받아냈다)\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh! That's the spirit! Here I go! (Dain delivers a powerful serve. I barely managed to receive it)\""
            },
            "es": {
                "name": "Dain",
                "text": "\"\u00a1Oh! \u00a1Ese es el esp\u00edritu! \u00a1All\u00e1 voy! (Dain lanza un saque poderoso. Apenas logr\u00e9 recibirlo)\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"おっ！その意気だよ！いくよ！（ダインが強烈なサーブを打つ。僕はなんとかレシーブした）\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Oh ! Voilà l'esprit ! C'est parti ! (Dain envoie un service puissant. J'ai réussi à le recevoir de justesse)\""
            }
        }
    },
    "lunch_dain_teach": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 15
            }
        },
        "next": "lunch_dain_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"에헤, 걱정 마! 내가 기초부터 확실하게 가르쳐줄게. 자, 일단 자세부터 잡아볼까?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Ehe, don't worry! The great Dain will teach you from the basics. Now, let's start with the posture!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Eje, \u00a1no te preocupes! La gran Dain te ense\u00f1ar\u00e1 desde lo b\u00e1sico. \u00a1Ahora, empecemos con la postura!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"えへへ、心配しないで！このダイン様が基礎からしっかり教えてあげるよ。さあ、まずは構えからやってみよっか？\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Éhéhé, t'inquiète pas ! La grande Dain va t'apprendre les bases en profondeur. Allez, on commence par la posture !\""
            }
        }
    },
    "lunch_dain_end": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_active.png",
        "next": "after_school_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그 뒤로 점심시간이 끝날 때까지 다인과 함께 땀을 흘렸다. 전학 첫날부터 이렇게 활기차게 보낼 줄은 몰랐는데... 어느덧 오후 수업도 모두 끝났다.*"
            },
            "en": {
                "name": "Me",
                "text": "*After that, I sweated with Dain until lunch time was over. I didn't expect my first day of transfer to be this active... Before I knew it, afternoon classes were all done too.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Despu\u00e9s de eso, sud\u00e9 con Dain hasta que termin\u00f3 la hora del almuerzo. No esperaba que mi primer d\u00eda de transferencia fuera tan activo... Sin darme cuenta, las clases de la tarde tambi\u00e9n terminaron.*"
            },
            "ja": {
                "name": "僕",
                "text": "*その後、昼休みが終わるまでダインと一緒に汗を流した。転校初日からこんなに活発に過ごすとは思わなかった……いつの間にか午後の授業も全部終わっていた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Après ça, j'ai transpiré avec Dain jusqu'à la fin de la pause déjeuner. Je ne m'attendais pas à passer mon premier jour de transfert de façon aussi active... Sans m'en rendre compte, les cours de l'après-midi étaient déjà tous finis.*"
            }
        }
    },
    "lunch_nurse": {
        "background": "assets/images/background/nurse_room.jpg",
        "next": "lunch_nurse_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*전학 첫날이라 그런지 긴장 탓에 머리가 조금 지끈거린다. 나는 조용히 보건실로 향했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Maybe because it's my first day, the tension is giving me a slight headache. I quietly headed to the nurse's office.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Quiz\u00e1s porque es mi primer d\u00eda, la tensi\u00f3n me est\u00e1 dando un ligero dolor de cabeza. Me dirig\u00ed tranquilamente a la enfermer\u00eda.*"
            },
            "ja": {
                "name": "僕",
                "text": "*転校初日だからか、緊張のせいで少し頭がズキズキする。静かに保健室へ向かった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*C'est peut-être parce que c'est mon premier jour, la tension me donne un léger mal de tête. Je me suis dirigé tranquillement vers l'infirmerie.*"
            }
        }
    },
    "lunch_nurse_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "nurse_intro",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "\"어머, 처음 보는 얼굴이네? 우리 학교에 이렇게 귀여운 학생이 있었나?\""
            },
            "en": {
                "name": "???",
                "text": "\"Oh my, a face I haven't seen before? Was there such a cute student in our school?\""
            },
            "es": {
                "name": "???",
                "text": "\"Vaya, \u00bfuna cara que no he visto antes? \u00bfHab\u00eda un estudiante tan lindo en nuestra escuela?\""
            },
            "ja": {
                "name": "???",
                "text": "\"あら、見かけない顔ね？うちの学校にこんなに可愛い生徒がいたかしら？\""
            },
            "fr": {
                "name": "???",
                "text": "\"Oh, un visage que je n'ai jamais vu ? Est-ce qu'il y avait un élève aussi mignon dans notre école ?\""
            }
        }
    },
    "nurse_intro": {
        "character": "assets/images/characters/nurse_normal.png",
        "setFlag": "met_nurse",
        "next": "nurse_name_share_pre",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"나는 이곳의 보건 교사야. 애들은 그냥 '선생님'이라고 부르지만.. 너한테는 특별히 내 이름을 알려줄 수도 있는데?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"I'm the health teacher here. The kids just call me 'teacher' but.. I might tell you my name specially?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Soy la enfermera de aqu\u00ed. Los chicos simplemente me llaman 'profesora' pero... \u00bfpodr\u00eda decirte mi nombre especialmente?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"ここの保健教師よ。みんなは『先生』って呼ぶだけだけど……あなたには特別に名前を教えてあげてもいいかな？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Je suis l'infirmière scolaire ici. Les élèves m'appellent juste 'professeur' mais... je pourrais te dire mon nom en particulier ?\""
            }
        }
    },
    "nurse_name_share_pre": {
        "character": "assets/images/characters/nurse_normal.png",
        "setFlag": "knows_name_nurse",
        "branches": [
            {
                "next": "nurse_name_share_study",
                "condition": "personality_study"
            },
            {
                "next": "nurse_name_share_normal"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"제 이름은 '{name}'(이)에요.\""
            },
            "en": {
                "name": "Me",
                "text": "\"My name is '{name}'.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Mi nombre es '{name}'.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"僕の名前は『{name}』です。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Mon nom est '{name}'.\""
            }
        }
    },
    "nurse_name_share_study": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "nurse_free_talk_day1",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"{name}... 후훗, 이름만큼이나 눈빛이 참 맑구나. 아까 자기소개 때 보니까 완전 모범생 같던데? 공부하느라 머리가 아픈 거니? 아니면.. 전학 첫날이라 긴장해서 들른 걸까?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"{name}... Hehe, your eyes are as clear as your name. I saw your self-introduction earlier and you seemed like a total model student? Are you here because studying gave you a headache? Or did you stop by because you're nervous on your first day?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"{name}... Jeje, tus ojos son tan claros como tu nombre. Vi tu presentaci\u00f3n antes y parec\u00edas todo un estudiante modelo. \u00bfEst\u00e1s aqu\u00ed porque estudiar te dio dolor de cabeza? \u00bfO pasaste porque est\u00e1s nervioso en tu primer d\u00eda?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"{name}……ふふっ、名前と同じくらい澄んだ目をしてるわね。さっきの自己紹介見たけど、完全に模範生って感じだったわよ？勉強のしすぎで頭が痛いの？それとも……転校初日で緊張して来たのかしら？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"{name}... Héhé, tes yeux sont aussi clairs que ton nom. J'ai vu ta présentation tout à l'heure et tu avais l'air d'un vrai élève modèle. Tu as mal à la tête à force d'étudier ? Ou tu es passé parce que tu es nerveux pour ton premier jour ?\""
            }
        }
    },
    "nurse_name_share_normal": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "nurse_free_talk_day1",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"{name}... 후훗, 이름만큼이나 눈빛이 참 맑구나. 어디가 아파서 온 거니? 아니면.. 전학 첫날이라 긴장해서 들른 걸까?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"{name}... Hehe, your eyes are as clear as your name. Are you here because something hurts? Or did you stop by because you're nervous on your first day?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"{name}... Jeje, tus ojos son tan claros como tu nombre. \u00bfEst\u00e1s aqu\u00ed porque algo te duele? \u00bfO pasaste porque est\u00e1s nervioso en tu primer d\u00eda?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"{name}……ふふっ、名前と同じくらい澄んだ目をしてるわね。どこか具合が悪くて来たの？それとも……転校初日で緊張して来たのかしら？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"{name}... Héhé, tes yeux sont aussi clairs que ton nom. Tu es là parce que quelque chose te fait mal ? Ou tu es passé parce que tu es nerveux pour ton premier jour ?\""
            }
        }
    },
    "nurse_free_talk_day1": {
        "type": "free_talk",
        "character": "assets/images/characters/nurse_normal.png",
        "affinityChar": "Nurse",
        "affinityBranches": [
            {
                "minAffinity": 15,
                "next": "nurse_day1_end_high"
            },
            {
                "minAffinity": 0,
                "next": "after_school_start"
            },
            {
                "minAffinity": -100,
                "next": "nurse_day1_end_low"
            }
        ],
        "next": "after_school_start",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"긴장하지 마. 여기서는 편하게 있어도 된단다. 나한테 궁금한 거라도 있니?\"",
                "context": "보건실에서 처음 만난 보건선생님과 대화를 나누는 상황입니다. 선생님은 주인공에게 묘한 흥미를 느끼며 도발적인 태도를 보입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 점심시간이 종료되고 방과 후 상황으로 전환됩니다. 대화의 마지막 턴에만 이제 수업 들으러 가야 할 시간이라며 주인공을 배웅해 주세요.",
                "personality": "성숙하고 매혹적인 '누님' 스타일. 도발적인 말로 주인공을 놀리는 것을 즐기지만 사실 누구보다 주인공을 아끼고 보호하려 함."
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Don't be nervous. You can relax here. Is there anything you're curious about?\"",
                "context": "Conversing with the nurse you just met in the nurse's office. The teacher shows a provocative attitude with strange interest in the protagonist. Keep the conversation going until it naturally concludes. When the conversation ends, lunch time ends and transitions to after school. Only in the final turn, see the protagonist off saying it's time for class.",
                "personality": "A mature and charming 'big sister' style. Enjoys teasing the protagonist with provocative words but actually cares for and wants to protect them more than anyone."
            },
            "es": {
                "name": "Enfermera",
                "text": "\"No te pongas nervioso. Puedes relajarte aqu\u00ed. \u00bfHay algo que te d\u00e9 curiosidad?\"",
                "context": "Conversing with the nurse you just met in the nurse's office. The teacher shows a provocative attitude with strange interest in the protagonist. Keep the conversation going until it naturally concludes. When the conversation ends, lunch time ends and transitions to after school. Only in the final turn, see the protagonist off saying it's time for class.",
                "personality": "A mature and charming 'big sister' style. Enjoys teasing the protagonist with provocative words but actually cares for and wants to protect them more than anyone."
            },
            "ja": {
                "name": "保健先生",
                "text": "\"緊張しなくていいわよ。ここでは楽にしてね。何か気になることある？\"",
                "context": "Conversing with the nurse you just met in the nurse's office. The teacher shows a provocative attitude with strange interest in the protagonist. Keep the conversation going until it naturally concludes. When the conversation ends, lunch time ends and transitions to after school. Only in the final turn, see the protagonist off saying it's time for class.",
                "personality": "A mature and charming 'big sister' style. Enjoys teasing the protagonist with provocative words but actually cares for and wants to protect them more than anyone."
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Ne sois pas nerveux. Tu peux te détendre ici. Il y a quelque chose qui te rend curieux ?\"",
                "context": "En train de discuter avec l'infirmière que vous venez de rencontrer à l'infirmerie. L'enseignante montre une attitude provocatrice avec un étrange intérêt pour le protagoniste. Continuez la conversation jusqu'à ce qu'elle se termine naturellement. Quand la conversation se termine, la pause déjeuner se termine et on passe à l'après-cours. Uniquement au dernier tour, raccompagnez le protagoniste en disant qu'il est l'heure d'aller en cours.",
                "personality": "Un style mature et charmant de « grande sœur ». Elle aime taquiner le protagoniste avec des mots provocateurs, mais en réalité, elle se soucie de lui et veut le protéger plus que quiconque."
            }
        }
    },
    "nurse_day1_end_high": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_school_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님과 대화하다 보니 어느새 수업 시간이 다 되었다. 선생님도 아쉬운 듯 나중에 꼭 다시 놀러 오라고 말씀하셨다. 이제 교실로 돌아가야겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*While talking with the teacher, class time approached before I knew it. The teacher seemed reluctant to part and told me to definitely visit again. Time to head back to class.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mientras hablaba con la profesora, la hora de clase se acerc\u00f3 sin darme cuenta. La profesora parec\u00eda reacia a separarse y me dijo que definitivamente volviera a visitarla. Es hora de regresar a clase.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生と話しているうちに、いつの間にか授業の時間が近づいていた。先生も名残惜しそうに、また必ず遊びに来てねと言ってくれた。教室に戻らなきゃ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En discutant avec le professeur, l'heure des cours est arrivée sans que je m'en rende compte. Le professeur semblait réticent à me laisser partir et m'a dit de revenir sans faute. Il est temps de retourner en classe.*"
            }
        }
    },
    "nurse_day1_end_low": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_school_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 표정이 굳어졌다. 내 농담이 지나쳤던 모양이다. 선생님은 불쾌한 기색을 내비치며 얼른 교실로 돌아가라고 하셨다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The teacher's expression hardened. My joke must have gone too far. The teacher showed displeasure and told me to hurry back to class.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La expresi\u00f3n de la profesora se endureci\u00f3. Mi broma debi\u00f3 ir demasiado lejos. La profesora mostr\u00f3 desagrado y me dijo que volviera r\u00e1pido a clase.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生の表情が固くなった。僕の冗談が行き過ぎたらしい。先生は不快感をあらわにして、早く教室に戻りなさいと言った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*L'expression du professeur s'est durcie. Ma plaisanterie a dû aller trop loin. Le professeur a montré son mécontentement et m'a dit de retourner vite en classe.*"
            }
        }
    }
});
