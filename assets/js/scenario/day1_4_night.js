/**
 * ============================================================================
 * CUPID - day1_4_night (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day1_4_night.js + en_day1_4_night.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[1]) SCENARIO[1] = {};

Object.assign(SCENARIO[1], {
    "after_home": {
        "background": "assets/images/background/street.png",
        "bgm": "night1.mp3",
        "character": null,
        "night": true,
        "next": "after_home_walk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어둠이 깔린 거리를 걷는다. 가로등 불빛이 길 위에 길게 그림자를 만들어낸다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I walk through the darkened streets. The streetlights cast long shadows across the road.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Camino por las calles oscurecidas. Las farolas proyectan largas sombras sobre la calle.*"
            },
            "ja": {
                "name": "僕",
                "text": "*暗くなった街を歩く。街灯の光が道の上に長い影を作り出している。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Je marche dans les rues assombries. Les réverbères projettent de longues ombres sur la route.*"
            }
        }
    },
    "after_home_walk": {
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "after_home_neighborhood",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이 동네도 어느새 조금은 익숙해진 것 같아. 편의점 옆 골목을 지나면 우리 집이고... 저 자판기도 아까 본 적 있어.*"
            },
            "en": {
                "name": "Me",
                "text": "*This neighborhood is starting to feel a little familiar already. Past the alley by the convenience store is my house... and I noticed that vending machine earlier too.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Este barrio ya empieza a sentirse un poco familiar. Pasando el callejón junto a la tienda está mi casa... y esa máquina expendedora también la vi antes.*"
            },
            "ja": {
                "name": "僕",
                "text": "*この街もいつの間にか少し見慣れてきた気がする。コンビニ横の路地を過ぎると家で...あの自販機もさっき見かけたな。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Ce quartier commence déjà à me sembler un peu familier. Après la ruelle à côté de la supérette, c'est ma maison... et j'ai aussi remarqué ce distributeur automatique tout à l'heure.*"
            }
        }
    },
    "after_home_neighborhood": {
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "after_home_arrive",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*조용한 주택가. 어딘가에서 저녁 반찬 냄새가 풍겨온다. 낯선 동네인데... 왜 이렇게 편안한 기분이 들지?*"
            },
            "en": {
                "name": "Me",
                "text": "*A quiet residential area. The smell of dinner drifts from somewhere nearby. It's an unfamiliar neighborhood... so why does it feel so comfortable?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Una zona residencial tranquila. El olor de la cena llega desde algún lugar cercano. Es un barrio desconocido... ¿por qué me siento tan cómodo?*"
            },
            "ja": {
                "name": "僕",
                "text": "*静かな住宅街。どこかから夕飯のおかずの匂いが漂ってくる。知らない街なのに...なんでこんなに落ち着くんだろう？*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Un quartier résidentiel calme. L'odeur du dîner flotte depuis quelque part à proximité. C'est un quartier inconnu... alors pourquoi est-ce que je m'y sens si bien ?*"
            }
        }
    },
    "after_home_arrive": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "after_home_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집 앞에 도착했다. 주머니에서 열쇠를 꺼내 현관문을 연다. 부모님은 아직 안 계신 것 같아.*"
            },
            "en": {
                "name": "Me",
                "text": "*I've arrived at the front door. I fish the key out of my pocket and unlock it. Looks like my parents aren't home yet.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Llegué a la puerta. Saco la llave del bolsillo y abro. Parece que mis padres aún no han llegado.*"
            },
            "ja": {
                "name": "僕",
                "text": "*家の前に着いた。ポケットから鍵を取り出して玄関のドアを開ける。まだ両親は帰ってないみたいだ。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Je suis arrivé devant la porte d'entrée. Je sors la clé de ma poche et j'ouvre. On dirait que mes parents ne sont pas encore rentrés.*"
            }
        }
    },
    "after_home_2": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "after_home_settle",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*방 안에 불을 켰다. 침대에 털썩 눕는다. 낯선 천장이 오늘따라 포근하게 느껴지는 건, 기분 탓일까...*"
            },
            "en": {
                "name": "Me",
                "text": "*I flick on the light in my room and flop onto the bed. The unfamiliar ceiling feels oddly cozy tonight... maybe it's just the mood.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Enciendo la luz de mi cuarto y me tiro en la cama. El techo desconocido se siente extrañamente acogedor esta noche... tal vez es solo el ánimo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*部屋の明かりをつけてベッドにバタンと倒れ込む。見慣れない天井が今日に限ってなんだか温かく感じるのは...気のせいかな。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'allume la lumière dans ma chambre et me laisse tomber sur le lit. Le plafond inconnu semble étrangement chaleureux ce soir... c'est peut-être juste l'humeur du moment.*"
            }
        }
    },
    "after_home_settle": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "after_home_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교복을 벗고 편한 옷으로 갈아입었다. 가방을 내려놓고, 책상 위에 오늘 받은 유인물들을 정리한다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I change out of my uniform into something comfortable. I set down my bag and organize the handouts I got today on the desk.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me quito el uniforme y me pongo ropa cómoda. Dejo la mochila y organizo los folletos que recibí hoy sobre el escritorio.*"
            },
            "ja": {
                "name": "僕",
                "text": "*制服を脱いで楽な服に着替えた。カバンを下ろして、今日もらったプリント類を机の上に整理する。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Je me change, troquant mon uniforme pour des vêtements confortables. Je pose mon sac et range les documents reçus aujourd'hui sur le bureau.*"
            }
        }
    },
    "after_home_3": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_reflect_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*내일은 어떤 일들이 기다리고 있을까? 묘한 설렘에 쉽게 잠이 올 것 같지 않아.*"
            },
            "en": {
                "name": "Me",
                "text": "*What's waiting for me tomorrow? A strange excitement makes me feel like sleep won't come easily tonight.*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿Qué me esperará mañana? Una extraña emoción me hace sentir que no podré dormir fácilmente esta noche.*"
            },
            "ja": {
                "name": "僕",
                "text": "*明日はどんなことが待っているんだろう？妙なワクワク感で、今夜はなかなか眠れなさそうだ。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Qu'est-ce qui m'attend demain ? Une étrange excitation me fait sentir que le sommeil ne viendra pas facilement ce soir.*"
            }
        }
    },
    "night_reflect_start": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "night_reflect_seoyeon",
                "condition": "met_seoyeon"
            },
            {
                "next": "night_reflect_yuna",
                "condition": "met_yuna"
            },
            {
                "next": "night_reflect_dain",
                "condition": "met_dain"
            },
            {
                "next": "night_reflect_nurse",
                "condition": "met_nurse"
            },
            {
                "next": "night_reflect_teacher",
                "condition": "met_teacher"
            },
            {
                "next": "night_reflect_end"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*천장을 바라보며 오늘 하루를 떠올린다. 전학 첫날치고는... 정말 많은 일이 있었어.*"
            },
            "en": {
                "name": "Me",
                "text": "*I stare at the ceiling, thinking back on the day. For a first day at a new school... a lot really happened.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Miro el techo, recordando el día. Para ser el primer día en una nueva escuela... pasaron muchas cosas.*"
            },
            "ja": {
                "name": "僕",
                "text": "*天井を見つめながら今日一日を思い返す。転校初日にしては...本当にいろんなことがあったな。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Je fixe le plafond, repensant à la journée. Pour un premier jour dans un nouveau lycée... il s'est vraiment passé beaucoup de choses.*"
            }
        }
    },
    "night_reflect_seoyeon": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "night_reflect_yuna",
                "condition": "met_yuna"
            },
            {
                "next": "night_reflect_dain",
                "condition": "met_dain"
            },
            {
                "next": "night_reflect_nurse",
                "condition": "met_nurse"
            },
            {
                "next": "night_reflect_teacher",
                "condition": "met_teacher"
            },
            {
                "next": "night_reflect_end"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이... 밝고 다정한 아이였어. 처음 보는 나한테도 스스럼없이 다가와줬지. 같은 반이라 앞으로도 많이 볼 텐데, 왠지 기대가 돼.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon... she was bright and kind. She came up to me without hesitation, even though I was a complete stranger. We're in the same class, so I'll be seeing her a lot. I'm looking forward to it.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon... era alegre y amable. Se acercó a mí sin dudar, aunque era un completo extraño. Estamos en la misma clase, así que la veré mucho. Tengo muchas ganas.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨン...明るくて優しい子だった。初めて会う僕にも気さくに話しかけてくれたっけ。同じクラスだからこれからもたくさん会うだろうし、なんだか楽しみだな。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Seoyeon... elle était radieuse et gentille. Elle est venue vers moi sans hésiter, alors que j'étais un parfait inconnu. On est dans la même classe, donc je la verrai souvent. J'ai hâte.*"
            }
        }
    },
    "night_reflect_yuna": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "night_reflect_dain",
                "condition": "met_dain"
            },
            {
                "next": "night_reflect_nurse",
                "condition": "met_nurse"
            },
            {
                "next": "night_reflect_teacher",
                "condition": "met_teacher"
            },
            {
                "next": "night_reflect_end"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나... 신비로운 분위기의 소녀. 말 수는 적었지만, 그 눈빛이 자꾸 떠올라. 무슨 생각을 하고 있었을까... 왠지 더 알고 싶어.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna... a girl with a mysterious aura. She didn't say much, but I keep thinking about those eyes. What was she thinking...? I want to know more about her.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna... una chica con un aura misteriosa. No habló mucho, pero no puedo dejar de pensar en esos ojos. ¿En qué estaba pensando...? Quiero saber más sobre ella.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナ...神秘的な雰囲気の少女。言葉は少なかったけど、あの瞳がずっと頭から離れない。何を考えていたんだろう...もっと知りたいな。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Yuna... une fille avec une aura mystérieuse. Elle n'a pas beaucoup parlé, mais je n'arrête pas de penser à ces yeux. À quoi pensait-elle... ? J'ai envie d'en savoir plus sur elle.*"
            }
        }
    },
    "night_reflect_dain": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "night_reflect_nurse",
                "condition": "met_nurse"
            },
            {
                "next": "night_reflect_teacher",
                "condition": "met_teacher"
            },
            {
                "next": "night_reflect_end"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이... 에너지가 넘치는 아이. 같이 있으면 절대 심심하지 않을 것 같아. 배구하는 모습이 정말 멋있었어.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain... so full of energy. I don't think I'd ever be bored around her. She looked really cool playing volleyball.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dain... llena de energía. No creo que nunca me aburra con ella. Se veía genial jugando voleibol.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダイン...エネルギーに溢れた子。一緒にいたら絶対退屈しないだろうな。バレーしてる姿が本当にかっこよかった。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Dain... tellement pleine d'énergie. Je ne pense pas que je m'ennuierais jamais avec elle. Elle était vraiment impressionnante en jouant au volleyball.*"
            }
        }
    },
    "night_reflect_nurse": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "night_reflect_teacher",
                "condition": "met_teacher"
            },
            {
                "next": "night_reflect_end"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건실 선생님은... 뭐랄까, 묘한 매력이 있었어. 괜히 한 번 더 들러보고 싶은 곳이 됐네.*"
            },
            "en": {
                "name": "Me",
                "text": "*The school nurse had... how do I put it, a certain charm. I kind of want to visit again.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La enfermera tenía... ¿cómo decirlo? Un encanto especial. Me dan ganas de volver a visitarla.*"
            },
            "ja": {
                "name": "僕",
                "text": "*保健室の先生は...なんというか、不思議な魅力があった。なんだかまた行ってみたい場所になったな。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*L'infirmière scolaire avait... comment dire, un certain charme. J'ai un peu envie d'y retourner.*"
            }
        }
    },
    "night_reflect_teacher": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_reflect_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*담임선생님은 은근히 챙겨주셔서 좋았어. 이런 분이 담임이라 다행이야.*"
            },
            "en": {
                "name": "Me",
                "text": "*The homeroom teacher was surprisingly caring. I'm glad to have someone like her as my teacher.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La profesora fue sorprendentemente atenta. Me alegra tener a alguien como ella de profesora.*"
            },
            "ja": {
                "name": "僕",
                "text": "*担任先生はさりげなく気にかけてくれて嬉しかった。こういう先生が担任で良かったな。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Le professeur principal était étonnamment attentionné. Je suis content d'avoir quelqu'un comme elle comme professeur.*"
            }
        }
    },
    "night_reflect_end": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_diary_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이 학교, 생각보다 나쁘지 않아. 내일은 어떤 일이 생길까...*"
            },
            "en": {
                "name": "Me",
                "text": "*This school might not be so bad after all. I wonder what tomorrow will bring...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Esta escuela no está tan mal después de todo. ¿Qué pasará mañana...?*"
            },
            "ja": {
                "name": "僕",
                "text": "*この学校、思ったより悪くないかも。明日はどんなことが起こるかな...*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Ce lycée n'est peut-être pas si mal finalement. Je me demande ce que demain apportera...*"
            }
        }
    },
    "night_diary_choice": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "choices": [
            {
                "next": "night_diary_write_1"
            },
            {
                "next": "night_home"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*책상 서랍에서 새 노트가 보인다. 전학 기념으로 엄마가 넣어주신 건가...*",
                "choices": [
                    "오늘 있었던 일을 적어본다.",
                    "그냥 넘어간다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*I spot a new notebook in the desk drawer. Did Mom slip it in as a transfer gift...?*",
                "choices": [
                    "Write about what happened today.",
                    "Skip it."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Veo un cuaderno nuevo en el cajón del escritorio. ¿Lo habrá puesto mamá como regalo de mudanza...?*",
                "choices": [
                    "Escribir sobre lo que pasó hoy.",
                    "Dejarlo pasar."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*机の引き出しに新しいノートが入っているのを見つけた。転校記念にお母さんが入れてくれたのかな...*",
                "choices": [
                    "今日あったことを書いてみる。",
                    "そのままにしておく。"
                ]
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'aperçois un nouveau cahier dans le tiroir du bureau. Est-ce que maman l'a glissé là comme cadeau de transfert... ?*",
                "choices": [
                    "Écrire sur ce qui s'est passé aujourd'hui.",
                    "Passer mon tour."
                ]
            }
        }
    },
    "night_diary_write_1": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_diary_write_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*펜을 들고 첫 페이지를 열었다. '○월 ○일. 전학 첫날. 새로운 학교는 생각보다 괜찮았다.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I pick up a pen and open to the first page. 'Month X, Day X. First day at the new school. It was better than I expected.'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Tomo un bolígrafo y abro la primera página. 'Mes X, Día X. Primer día en la nueva escuela. Fue mejor de lo que esperaba.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*ペンを手に取って最初のページを開いた。「○月○日。転校初日。新しい学校は思ったより悪くなかった。」*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Je prends un stylo et ouvre la première page. 'Mois X, Jour X. Premier jour au nouveau lycée. C'était mieux que ce que j'attendais.'*"
            }
        }
    },
    "night_diary_write_2": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_diary_write_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*일기를 썼다. 전학 온 첫날... 새로운 학교에서 여러 사람을 만났다. 어떤 인연이 될지 아직 모르겠지만, 나쁘지 않은 하루였다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Wrote in the diary. First day at the new school... Met various people. Don't know what kind of connections they'll turn into yet, but it wasn't a bad day.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Escribí en el diario. Primer día en la nueva escuela... Conocí a varias personas. Aún no sé qué tipo de relaciones serán, pero no fue un mal día.*"
            },
            "ja": {
                "name": "僕",
                "text": "*日記を書いた。転校初日...新しい学校でいろんな人に出会った。どんな縁になるかまだわからないけど、悪くない一日だった。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'ai écrit dans le journal. Premier jour au nouveau lycée... J'ai rencontré plusieurs personnes. Je ne sais pas encore quel genre de liens cela deviendra, mais ce n'était pas une mauvaise journée.*"
            }
        }
    },
    "night_diary_write_3": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "wrote_diary_day1",
        "next": "night_home",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*'내일은 이 사람들과 더 가까워질 수 있을까? 기대된다.' ...펜을 내려놓고 노트를 닫았다. 쓰고 나니 기분이 좀 정리되는 것 같아.*"
            },
            "en": {
                "name": "Me",
                "text": "*'Will I be able to get closer to them tomorrow? I can't wait.' ...I set the pen down and close the notebook. Writing it out helped clear my mind.*"
            },
            "es": {
                "name": "Yo",
                "text": "*'¿Podré acercarme más a ellos mañana? No puedo esperar.' ...Dejo el bolígrafo y cierro el cuaderno. Escribirlo me ayudó a ordenar mis ideas.*"
            },
            "ja": {
                "name": "僕",
                "text": "*「明日はこの人たちともっと仲良くなれるかな？楽しみだ。」...ペンを置いてノートを閉じた。書いたら少し気持ちが整理できた気がする。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*'Est-ce que je pourrai me rapprocher d'eux demain ? J'ai hâte.' ...Je pose le stylo et ferme le cahier. Écrire m'a aidé à clarifier mes pensées.*"
            }
        }
    },
    "night_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "branches": [
            {
                "next": "night_goodnight_start",
                "excludeCondition": "has_any_contact"
            },
            {
                "next": "night_home_check_contact"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*잠들기 전, 습관적으로 스마트폰을 확인한다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Before falling asleep, I check my phone out of habit.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Antes de dormirme, reviso el celular por costumbre.*"
            },
            "ja": {
                "name": "僕",
                "text": "*眠る前、習慣的にスマホを確認する。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Avant de m'endormir, je vérifie mon téléphone par habitude.*"
            }
        }
    },
    "night_home_check_contact": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "choices": [
            {
                "next": "night_message_seyoun",
                "condition": "has_number_seyoun",
                "excludeCondition": "sent_msg_day1_seyoun"
            },
            {
                "next": "night_message_yuna",
                "condition": "has_number_yuna",
                "excludeCondition": "sent_msg_day1_yuna"
            },
            {
                "next": "night_message_dain",
                "condition": "has_number_dain",
                "excludeCondition": "sent_msg_day1_dain"
            },
            {
                "next": "night_message_nurse",
                "condition": "has_number_nurse",
                "excludeCondition": "sent_msg_day1_nurse"
            },
            {
                "next": "night_message_teacher",
                "condition": "has_number_teacher",
                "excludeCondition": "sent_msg_day1_teacher"
            },
            {
                "next": "day1_check_affinity"
            },
            {
                "next": "night_goodnight_start"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*오늘 연락처를 교환했던 사람들... 누구에게 먼저 메시지를 보내볼까?*",
                "choices": [
                    "서연이에게 메시지를 보낸다.",
                    "유나에게 메시지를 보낸다.",
                    "다인이에게 메시지를 보낸다.",
                    "보건선생님께 메시지를 보낸다.",
                    "담임선생님께 메시지를 보낸다.",
                    "호감도 확인하기",
                    "그만 보내고 잠을 잔다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The people I exchanged numbers with today... who should I message first?*",
                "choices": [
                    "Send a message to Seoyeon.",
                    "Send a message to Yuna.",
                    "Send a message to Dain.",
                    "Send a message to the School Nurse.",
                    "Send a message to the Homeroom Teacher.",
                    "Check affinity levels",
                    "Stop messaging and go to sleep."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Las personas con las que intercambié números hoy... ¿a quién le escribo primero?*",
                "choices": [
                    "Enviar un mensaje a Seoyeon.",
                    "Enviar un mensaje a Yuna.",
                    "Enviar un mensaje a Dain.",
                    "Enviar un mensaje a la Enfermera.",
                    "Enviar un mensaje a la Profesora.",
                    "Ver niveles de afinidad",
                    "Dejar de escribir y dormir."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*今日連絡先を交換した人たち...誰に最初にメッセージを送ろうかな？*",
                "choices": [
                    "ソヨンにメッセージを送る。",
                    "ユナにメッセージを送る。",
                    "ダインにメッセージを送る。",
                    "保健先生にメッセージを送る。",
                    "担任先生にメッセージを送る。",
                    "好感度を確認する",
                    "もうやめて寝る。"
                ]
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Les personnes avec qui j'ai échangé mes coordonnées aujourd'hui... à qui devrais-je envoyer un message en premier ?*",
                "choices": [
                    "Envoyer un message à Seoyeon.",
                    "Envoyer un message à Yuna.",
                    "Envoyer un message à Dain.",
                    "Envoyer un message à l'Infirmière Scolaire.",
                    "Envoyer un message au Professeur Principal.",
                    "Vérifier les niveaux d'affinité",
                    "Arrêter d'écrire et aller dormir."
                ]
            }
        }
    },
    "day1_check_affinity": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "현재 캐릭터들과의 호감도 상태입니다.{affinity_list}"
            },
            "en": {
                "name": "System",
                "text": "Here are your current affinity levels with each character.{affinity_list}"
            },
            "es": {
                "name": "Sistema",
                "text": "Estos son tus niveles de afinidad actuales con cada personaje.{affinity_list}"
            },
            "ja": {
                "name": "システム",
                "text": "現在の各キャラクターとの好感度です。{affinity_list}"
            }
            ,"fr": {
                "name": "Système",
                "text": "Voici vos niveaux d'affinité actuels avec chaque personnage.{affinity_list}"
            }
        }
    },
    "night_message_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day1_teacher",
        "next": "night_message_teacher_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*담임선생님께 메시지를 보냈다. '선생님, 오늘 챙겨주셔서 감사해요. 덕분에 첫날 잘 적응한 것 같아요!'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent a message to the Homeroom Teacher. 'Thank you for looking after me today, Teacher. I think I adjusted well on my first day thanks to you!'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a la Profesora. 'Gracias por cuidarme hoy, profesora. Creo que me adapté bien en mi primer día gracias a usted.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*担任先生にメッセージを送った。「先生、今日はお世話になりました。おかげで初日からうまくやれた気がします！」*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message au Professeur Principal. 'Merci de vous être occupé de moi aujourd'hui, Professeur. Je pense m'être bien adapté dès le premier jour grâce à vous !'*"
            }
        }
    },
    "night_message_teacher_reply": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_smile.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "night_message_teacher_extra_1",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*다정한 답장이 왔다.* '어머, {name}! 전학 첫날이라 힘들었을 텐데 이런 메시지까지 보내주다니 기특하네.'"
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*A warm reply arrived.* 'Oh my, {name}! It must have been tough on your first day as a transfer student, and you even sent a message like this. How sweet.'"
            },
            "es": {
                "name": "Profesora",
                "text": "*Llegó una respuesta cálida.* 'Ay, ¡{name}! Debió ser difícil tu primer día como estudiante de intercambio, y aún así me envías un mensaje así. Qué dulce.'"
            },
            "ja": {
                "name": "担任先生",
                "text": "*優しい返信が来た。* 「あら、{name}！転校初日で大変だったでしょうに、こんなメッセージまで送ってくれるなんて偉いわね。」"
            }
            ,"fr": {
                "name": "Professeur Principal",
                "text": "*Une réponse chaleureuse est arrivée.* 'Oh, {name} ! Ça a dû être difficile pour ton premier jour en tant que nouvel élève, et tu m'envoies même un message comme ça. Comme c'est adorable.'"
            }
        }
    },
    "night_message_teacher_extra_1": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_smile.png",
        "silhouette": true,
        "night": true,
        "next": "night_message_teacher_extra_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "'그런데 오늘 수업 시간에 네가 한 표정이 있었는데... 뭔가 재밌는 생각 하고 있었지? 선생님 다 봤다~'"
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "'By the way, I noticed an expression on your face during class today... were you thinking about something funny? I saw everything.'"
            },
            "es": {
                "name": "Profesora",
                "text": "'Por cierto, noté una expresión en tu cara durante la clase hoy... ¿estabas pensando en algo gracioso? La profesora lo vio todo~'"
            },
            "ja": {
                "name": "担任先生",
                "text": "「ところで今日の授業中にね、面白い顔してたの気づいたわよ...何か楽しいこと考えてたでしょ？先生全部見てたんだから〜」"
            }
            ,"fr": {
                "name": "Professeur Principal",
                "text": "'Au fait, j'ai remarqué une expression sur ton visage pendant le cours aujourd'hui... tu pensais à quelque chose de drôle ? J'ai tout vu.'"
            }
        }
    },
    "night_message_teacher_extra_2": {
        "character": "assets/images/characters/teacher_smile.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_message_teacher_extra_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어... 들켰나? 답장을 보낸다. '아, 그게... 교실이 전 학교랑 달라서 신기했어요!'*"
            },
            "en": {
                "name": "Me",
                "text": "*Uh oh... she noticed? I type a reply. 'Oh, that was... the classroom was so different from my old school, I was just fascinated!'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Ay... ¿se dio cuenta? Escribo una respuesta. 'Ah, eso fue... el salón era tan diferente de mi escuela anterior que me quedé fascinado.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*え...バレてた？返信を打つ。「あ、あれは...教室が前の学校と違ってて、珍しかったんです！」*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Oh non... elle a remarqué ? Je tape une réponse. 'Oh, c'était... la salle de classe était tellement différente de mon ancien lycée, j'étais juste fasciné !'*"
            }
        }
    },
    "night_message_teacher_extra_3": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "night_message_teacher_extra_4",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "'하하, 그렇구나~ 어쨌든 내일부터가 진짜 시작이니까, 몸 관리 잘 하고 푹 쉬어. 내일 보자!'"
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "'Haha, I see. Anyway, the real start is tomorrow, so take care of yourself and get a good rest. See you tomorrow!'"
            },
            "es": {
                "name": "Profesora",
                "text": "'Jaja, ya veo~ De todos modos, mañana empieza lo de verdad, así que cuídate y descansa bien. ¡Nos vemos mañana!'"
            },
            "ja": {
                "name": "担任先生",
                "text": "「あはは、そうなんだ〜。とにかく明日からが本番だから、体調管理しっかりして、ゆっくり休むのよ。明日ね！」"
            }
            ,"fr": {
                "name": "Professeur Principal",
                "text": "'Haha, je vois. En tout cas, le vrai début c'est demain, alors prends soin de toi et repose-toi bien. À demain !'"
            }
        }
    },
    "night_message_teacher_extra_4": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*따뜻한 분이시네... 담임선생님이 이런 분이라 다행이야. 스마트폰을 내려놓으며 빙긋 웃었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*What a warm person... I'm glad to have a homeroom teacher like her. I set my phone down with a small smile.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Qué persona tan cálida... Me alegra tener una profesora como ella. Dejo el celular con una pequeña sonrisa.*"
            },
            "ja": {
                "name": "僕",
                "text": "*温かい人だな...こんな先生が担任で良かった。スマホを置いて、思わず笑みがこぼれた。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Quelle personne chaleureuse... Je suis content d'avoir un professeur principal comme elle. Je pose mon téléphone avec un petit sourire.*"
            }
        }
    },
    "night_message_seyoun": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "night_message_seyoun_lunch",
                "condition": "ate_lunch_seoyeon"
            },
            {
                "next": "night_message_seyoun_after",
                "condition": "helped_seoyeon"
            },
            {
                "next": "night_message_seyoun_generic"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이에게 어떤 메시지를 보낼까?*"
            },
            "en": {
                "name": "Me",
                "text": "*What should I write to Seoyeon?*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿Qué le escribo a Seoyeon?*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンにどんなメッセージを送ろうかな？*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Qu'est-ce que je devrais écrire à Seoyeon ?*"
            }
        }
    },
    "night_message_seyoun_lunch": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day1_seyoun",
        "next": "night_message_seyoun_reply_lunch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이에게 메시지를 보냈다. '오늘 같이 점심 먹어서 정말 좋았어. 고마워, 서연아.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent a message to Seoyeon. 'I really enjoyed having lunch together today. Thanks, Seoyeon.'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a Seoyeon. 'De verdad disfruté almorzar juntos hoy. Gracias, Seoyeon.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンにメッセージを送った。「今日一緒にお昼食べれて本当に楽しかった。ありがとう、ソヨン。」*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message à Seoyeon. 'J'ai vraiment apprécié de déjeuner ensemble aujourd'hui. Merci, Seoyeon.'*"
            }
        }
    },
    "night_message_seyoun_after": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day1_seyoun",
        "next": "night_message_seyoun_reply_generic",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이에게 메시지를 보냈다. '오늘 학생회 일 돕는 거 즐거웠어. 힘든 건 없었어? 내일 봐!'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent a message to Seoyeon. 'I had fun helping with the student council stuff today. Hope it wasn't too tiring for you? See you tomorrow!'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a Seoyeon. 'Me divertí ayudando con lo del consejo estudiantil hoy. ¿No fue muy cansado para ti? ¡Nos vemos mañana!'*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンにメッセージを送った。「今日の生徒会の手伝い、楽しかったよ。大変じゃなかった？明日ね！」*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message à Seoyeon. 'Je me suis bien amusé à aider pour les affaires du conseil des élèves aujourd'hui. J'espère que ce n'était pas trop fatigant pour toi ? À demain !'*"
            }
        }
    },
    "night_message_seyoun_generic": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day1_seyoun",
        "next": "night_message_seyoun_reply_generic",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이에게 메시지를 보냈다. '오늘 하루 잘 보냈어? 내일 학교에서 보자.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent a message to Seoyeon. 'Did you have a good day? See you at school tomorrow.'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a Seoyeon. '¿Tuviste un buen día? Nos vemos mañana en la escuela.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンにメッセージを送った。「今日はいい一日だった？明日学校でね。」*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message à Seoyeon. 'Tu as passé une bonne journée ? On se voit au lycée demain.'*"
            }
        }
    },
    "night_message_seyoun_reply_lunch": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "night_message_seyoun_followup",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*징~ 즉각적인 답장이 왔다.* '정말? 다행이다! 맛있게 먹어줘서 내가 더 고마워. 내일도 기대해줘!'"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Ding~ An instant reply.* 'Really? I'm glad! I should be thanking you for enjoying the food. Look forward to tomorrow too!'"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Ding~ Una respuesta instantánea.* '¿En serio? ¡Qué bueno! Yo debería agradecerte por disfrutar la comida. ¡Espera con ganas mañana también!'"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ピロン〜即座に返信が来た。* 「本当？よかった！美味しく食べてくれて、こっちこそありがとう。明日も楽しみにしててね！」"
            }
            ,"fr": {
                "name": "Seoyeon",
                "text": "*Ding~ Une réponse instantanée.* 'Vraiment ? Je suis contente ! C'est moi qui devrais te remercier d'avoir apprécié le repas. Vivement demain aussi !'"
            }
        }
    },
    "night_message_seyoun_reply_generic": {
        "background": "assets/images/background/room_my.png",
        "affinityChar": "Seoyeon",
        "night": true,
        "affinityBranches": [
            {
                "minAffinity": 15,
                "next": "night_message_seyoun_reply_high"
            },
            {
                "minAffinity": 0,
                "next": "night_message_seyoun_reply_standard"
            },
            {
                "minAffinity": -100,
                "next": "night_message_seyoun_reply_low"
            }
        ]
    },
    "night_message_seyoun_reply_standard": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "night_message_seyoun_followup",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*징~ 즉각적인 답장이 왔다.* '나도 정말 즐거웠어! {name} 덕분에 든든해. 내일 학교에서 보자~'"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Ding~ An instant reply.* 'I had a great time too! Having you around made me feel so reassured, {name}. See you at school tomorrow!'"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Ding~ Una respuesta instantánea.* '¡Yo también me divertí mucho! Tenerte cerca me hizo sentir muy segura, {name}. ¡Nos vemos mañana en la escuela!'"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ピロン〜即座に返信が来た。* 「私もすっごく楽しかった！{name}がいてくれて心強かったよ。明日学校でね〜」"
            }
            ,"fr": {
                "name": "Seoyeon",
                "text": "*Ding~ Une réponse instantanée.* 'Moi aussi je me suis bien amusée ! T'avoir à mes côtés m'a vraiment rassurée, {name}. On se voit au lycée demain !'"
            }
        }
    },
    "night_message_seyoun_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "night_message_seyoun_followup",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*하트 이모티콘과 함께 온 답장.* '있잖아... 오늘 너랑 같이 보낸 시간, 자꾸 생각나서 큰일이야. 꿈에서라도 보고 싶어.'"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*A reply came with a heart emoji.* 'You know... I keep thinking about the time we spent together today. I can't help it. I want to see you, even if it's in a dream.'"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Llegó una respuesta con un emoji de corazón.* 'Sabes... no dejo de pensar en el tiempo que pasamos juntos hoy. No puedo evitarlo. Quiero verte, aunque sea en un sueño.'"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ハートの絵文字付きの返信が来た。* 「あのね...今日一緒に過ごした時間、ずっと思い出しちゃって大変なの。夢ででもいいから会いたいな。」"
            }
            ,"fr": {
                "name": "Seoyeon",
                "text": "*Une réponse est arrivée avec un emoji cœur.* 'Tu sais... je n'arrête pas de penser au temps qu'on a passé ensemble aujourd'hui. Je ne peux pas m'en empêcher. J'ai envie de te voir, même si c'est en rêve.'"
            }
        }
    },
    "night_message_seyoun_reply_low": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "next": "night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*잠시 후 도착한 짧은 답장.* '아... 응. 내일 학교에서 보자.'"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*A short reply arrived after a while.* 'Oh... yeah. See you at school tomorrow.'"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Después de un rato llegó una respuesta corta.* 'Ah... sí. Nos vemos mañana en la escuela.'"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*しばらくしてから短い返信が届いた。* 「あ...うん。明日学校でね。」"
            }
            ,"fr": {
                "name": "Seoyeon",
                "text": "*Une courte réponse est arrivée après un moment.* 'Oh... oui. On se voit au lycée demain.'"
            }
        }
    },
    "night_message_seyoun_followup": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "choices": [
            {
                "next": "night_message_seyoun_followup_food"
            },
            {
                "next": "night_message_seyoun_followup_goodnight"
            },
            {
                "next": "night_home_check_contact"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이의 답장을 보고 한참을 들여다봤다. 뭔가 더 보내고 싶은데...*",
                "choices": [
                    "'내일 뭐 먹고 싶어?' 라고 보낸다.",
                    "'잘 자, 서연아.' 라고 보낸다.",
                    "더 보내지 않는다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*I stared at Seoyeon's reply for a long time. I want to say something more...*",
                "choices": [
                    "Send 'What do you want to eat tomorrow?'",
                    "Send 'Good night, Seoyeon.'",
                    "Don't send anything more."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Me quedé mirando la respuesta de Seoyeon por un buen rato. Quiero decir algo más...*",
                "choices": [
                    "Enviar '¿Qué quieres comer mañana?'",
                    "Enviar 'Buenas noches, Seoyeon.'",
                    "No enviar nada más."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンの返信をしばらく見つめていた。もっと何か送りたいな...*",
                "choices": [
                    "「明日何食べたい？」と送る。",
                    "「おやすみ、ソヨン。」と送る。",
                    "もう送らない。"
                ]
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'ai fixé la réponse de Seoyeon pendant un long moment. J'ai envie de dire quelque chose de plus...*",
                "choices": [
                    "Envoyer 'Qu'est-ce que tu veux manger demain ?'",
                    "Envoyer 'Bonne nuit, Seoyeon.'",
                    "Ne rien envoyer de plus."
                ]
            }
        }
    },
    "night_message_seyoun_followup_food": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "night_message_seyoun_followup_end",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*바로 답장.* '오 벌써 내일 점심 걱정? 귀여워ㅋㅋ 내일 봐바, 깜짝 도시락 싸올지도?'"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Instant reply.* 'Oh, already worried about tomorrow's lunch? How cute lol. Just wait and see — I might pack a surprise lunchbox!'"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Respuesta instantánea.* '¿Oh, ya preocupándote por el almuerzo de mañana? Qué lindo jaja. Solo espera y verás — ¡puede que prepare un almuerzo sorpresa!'"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*即返信。* 「え、もう明日のお昼の心配？かわいいなぁ笑 明日のお楽しみ、びっくりお弁当持ってくるかもよ？」"
            }
            ,"fr": {
                "name": "Seoyeon",
                "text": "*Réponse instantanée.* 'Oh, déjà inquiet pour le déjeuner de demain ? Trop mignon lol. Attends et tu verras — je préparerai peut-être un bentô surprise !'"
            }
        }
    },
    "night_message_seyoun_followup_goodnight": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "night_message_seyoun_followup_end",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*잠시 후 답장.* '응... 잘 자, {name}. 좋은 꿈 꿔.'"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*A reply after a moment.* 'Yeah... good night, {name}. Sweet dreams.'"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Una respuesta después de un momento.* 'Sí... buenas noches, {name}. Dulces sueños.'"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*少し間を置いて返信。* 「うん...おやすみ、{name}。いい夢見てね。」"
            }
            ,"fr": {
                "name": "Seoyeon",
                "text": "*Une réponse après un moment.* 'Oui... bonne nuit, {name}. Fais de beaux rêves.'"
            }
        }
    },
    "night_message_seyoun_followup_end": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와의 대화가 이렇게 자연스러울 줄이야. 첫날부터 이런 친구가 생기다니... 기분이 좋아.*"
            },
            "en": {
                "name": "Me",
                "text": "*I can't believe how natural it feels talking with Seoyeon. Making a friend like this on the very first day... it makes me happy.*"
            },
            "es": {
                "name": "Yo",
                "text": "*No puedo creer lo natural que se siente hablar con Seoyeon. Hacer una amiga así el primer día... me hace feliz.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンとの会話がこんなに自然だったなんて。初日からこんな友達ができるなんて...嬉しいな。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Je n'arrive pas à croire à quel point c'est naturel de parler avec Seoyeon. Se faire une amie comme ça dès le premier jour... ça me rend heureux.*"
            }
        }
    },
    "night_message_yuna": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day1_yuna",
        "next": "night_message_yuna_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나에게 메시지를 보냈다. '오늘 즐거웠어. 잘 자.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent a message to Yuna. 'I had a nice time today. Sleep well.'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a Yuna. 'La pasé bien hoy. Duerme bien.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナにメッセージを送った。「今日は楽しかった。おやすみ。」*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message à Yuna. 'J'ai passé un bon moment aujourd'hui. Dors bien.'*"
            }
        }
    },
    "night_message_yuna_reply": {
        "background": "assets/images/background/room_my.png",
        "affinityChar": "Yuna",
        "night": true,
        "affinityBranches": [
            {
                "minAffinity": 10,
                "next": "night_message_yuna_reply_high"
            },
            {
                "minAffinity": 0,
                "next": "night_message_yuna_reply_standard"
            },
            {
                "minAffinity": -100,
                "next": "night_message_yuna_reply_low"
            }
        ]
    },
    "night_message_yuna_reply_standard": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "night_message_yuna_cryptic",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*잠시 후 도착한 답장.* '...응. 너도 잘 자. 내일 학교에서 봐, {name}.'"
            },
            "en": {
                "name": "Yuna",
                "text": "*A reply arrived after a while.* '...Yeah. You too, good night. See you at school tomorrow, {name}.'"
            },
            "es": {
                "name": "Yuna",
                "text": "*Después de un rato llegó una respuesta.* '...Sí. Tú también, buenas noches. Nos vemos mañana en la escuela, {name}.'"
            },
            "ja": {
                "name": "ユナ",
                "text": "*しばらくして返信が届いた。* 「...うん。あなたもおやすみ。明日学校でね、{name}。」"
            }
            ,"fr": {
                "name": "Yuna",
                "text": "*Une réponse est arrivée après un moment.* '...Oui. Toi aussi, bonne nuit. On se voit au lycée demain, {name}.'"
            }
        }
    },
    "night_message_yuna_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_smile.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "night_message_yuna_cryptic",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*잠시 후 도착한 답장.* '오늘... 응, 고마웠어. 덕분에 조금 웃을 수 있었던 것 같아. 잘 자.'"
            },
            "en": {
                "name": "Yuna",
                "text": "*A reply arrived after a while.* 'Today... yeah, thank you. I think I was able to smile a little because of you. Good night.'"
            },
            "es": {
                "name": "Yuna",
                "text": "*Después de un rato llegó una respuesta.* 'Hoy... sí, gracias. Creo que pude sonreír un poco gracias a ti. Buenas noches.'"
            },
            "ja": {
                "name": "ユナ",
                "text": "*しばらくして返信が届いた。* 「今日は...うん、ありがとう。あなたのおかげで少し笑えた気がする。おやすみ。」"
            }
            ,"fr": {
                "name": "Yuna",
                "text": "*Une réponse est arrivée après un moment.* 'Aujourd'hui... oui, merci. Je crois que j'ai pu sourire un peu grâce à toi. Bonne nuit.'"
            }
        }
    },
    "night_message_yuna_reply_low": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "stats": {
            "Yuna": {
                "affinity": -5
            }
        },
        "next": "night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*답장이 없다. 읽음 표시만 떠 있을 뿐이다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*No reply. Only the 'read' indicator is showing.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*No hay respuesta. Solo aparece el indicador de 'leído'.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*返信はない。既読の表示だけがついている。*"
            }
            ,"fr": {
                "name": "Yuna",
                "text": "*Pas de réponse. Seul l'indicateur \u00ab lu \u00bb s'affiche.*"
            }
        }
    },
    "night_message_yuna_cryptic": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "night_message_yuna_cryptic_react",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*추가 메시지가 도착했다.* '...그런데 {name}. 혹시 오늘 밤, 별이 보이면 세 번째 별을 봐줘. 이유는 나중에.'"
            },
            "en": {
                "name": "Yuna",
                "text": "*Another message arrived.* '...By the way, {name}. If you can see the stars tonight, look at the third one. I'll tell you why later.'"
            },
            "es": {
                "name": "Yuna",
                "text": "*Llegó otro mensaje.* '...Por cierto, {name}. Si puedes ver las estrellas esta noche, mira la tercera. Te diré por qué después.'"
            },
            "ja": {
                "name": "ユナ",
                "text": "*追加のメッセージが届いた。* 「...ところで、{name}。もし今夜星が見えたら、三番目の星を見て。理由はあとで。」"
            }
            ,"fr": {
                "name": "Yuna",
                "text": "*Un autre message est arrivé.* '...Au fait, {name}. Si tu peux voir les étoiles ce soir, regarde la troisième. Je te dirai pourquoi plus tard.'"
            }
        }
    },
    "night_message_yuna_cryptic_react": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_message_yuna_cryptic_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*세 번째 별...? 무슨 뜻일까. 유나는 가끔 이런 수수께끼 같은 말을 하는구나.*"
            },
            "en": {
                "name": "Me",
                "text": "*The third star...? What does she mean? Yuna says these riddle-like things sometimes.*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿La tercera estrella...? ¿Qué quiere decir? Yuna dice cosas como acertijos a veces.*"
            },
            "ja": {
                "name": "僕",
                "text": "*三番目の星...？どういう意味だろう。ユナはたまにこういう謎めいたことを言うんだな。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*La troisième étoile... ? Qu'est-ce qu'elle veut dire ? Yuna dit parfois des choses énigmatiques comme ça.*"
            }
        }
    },
    "night_message_yuna_cryptic_choice": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "choices": [
            {
                "next": "night_message_yuna_cryptic_reply"
            },
            {
                "next": "night_message_yuna_cryptic_ask"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뭐라고 답장할까?*",
                "choices": [
                    "'알겠어, 꼭 볼게.' 라고 보낸다.",
                    "'왜? 무슨 뜻이야?' 라고 보낸다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*What should I reply?*",
                "choices": [
                    "Send 'Got it, I'll make sure to look.'",
                    "Send 'Why? What does it mean?'"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¿Qué debería responder?*",
                "choices": [
                    "Enviar 'Entendido, me aseguraré de mirar.'",
                    "Enviar '¿Por qué? ¿Qué significa?'"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*なんて返事しよう？*",
                "choices": [
                    "「わかった、必ず見るよ。」と送る。",
                    "「なんで？どういう意味？」と送る。"
                ]
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Qu'est-ce que je devrais répondre ?*",
                "choices": [
                    "Envoyer 'Compris, je regarderai sans faute.'",
                    "Envoyer 'Pourquoi ? Qu'est-ce que ça veut dire ?'"
                ]
            }
        }
    },
    "night_message_yuna_cryptic_reply": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "night_message_yuna_cryptic_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*'알겠어. 꼭 볼게.' 라고 답장했다. ...정말로 창밖을 보니 별이 몇 개 떠 있다. 세 번째 별은... 저건가?*"
            },
            "en": {
                "name": "Me",
                "text": "*I replied 'Got it. I'll make sure to look.' ...I actually glance out the window, and a few stars are visible. The third star is... that one?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Respondí 'Entendido. Me aseguraré de mirar.' ...De hecho miro por la ventana, y se ven algunas estrellas. La tercera estrella es... ¿esa?*"
            },
            "ja": {
                "name": "僕",
                "text": "*「わかった。必ず見るよ。」と返信した。...実際に窓の外を見ると、いくつか星が見える。三番目の星は...あれかな？*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'ai répondu 'Compris. Je regarderai sans faute.' ...Je jette un coup d'œil par la fenêtre, et quelques étoiles sont visibles. La troisième étoile... c'est celle-là ?*"
            }
        }
    },
    "night_message_yuna_cryptic_ask": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "night_message_yuna_cryptic_end",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*답장.* '...지금 말하면 소원이 안 이루어져. 그냥 봐줘.'"
            },
            "en": {
                "name": "Yuna",
                "text": "*Reply.* '...If I tell you now, the wish won't come true. Just look.'"
            },
            "es": {
                "name": "Yuna",
                "text": "*Respuesta.* '...Si te lo digo ahora, el deseo no se cumplirá. Solo mira.'"
            },
            "ja": {
                "name": "ユナ",
                "text": "*返信。* 「...今言ったら願いが叶わなくなる。ただ見て。」"
            }
            ,"fr": {
                "name": "Yuna",
                "text": "*Réponse.* '...Si je te le dis maintenant, le vœu ne se réalisera pas. Regarde, c'est tout.'"
            }
        }
    },
    "night_message_yuna_cryptic_end": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_smile.png",
        "silhouette": true,
        "night": true,
        "next": "night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*마지막 답장.* '...봤어? 그럼 됐어. 좋은 꿈 꿀 거야, 아마.'"
            },
            "en": {
                "name": "Yuna",
                "text": "*One last reply.* '...Did you see it? Then that's enough. You'll have good dreams, probably.'"
            },
            "es": {
                "name": "Yuna",
                "text": "*Una última respuesta.* '...¿La viste? Entonces está bien. Tendrás buenos sueños, probablemente.'"
            },
            "ja": {
                "name": "ユナ",
                "text": "*最後の返信。* 「...見た？ならいい。いい夢見るよ、たぶん。」"
            }
            ,"fr": {
                "name": "Yuna",
                "text": "*Une dernière réponse.* '...Tu l'as vue ? Alors ça suffit. Tu feras de beaux rêves, probablement.'"
            }
        }
    },
    "night_message_dain": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "night_message_dain_date",
                "condition": "dated_dain_day1"
            },
            {
                "next": "night_message_dain_generic"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이에게 어떤 메시지를 보낼까?*"
            },
            "en": {
                "name": "Me",
                "text": "*What should I write to Dain?*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿Qué debería escribirle a Dain?*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインにどんなメッセージを送ろうか？*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Qu'est-ce que je devrais écrire à Dain ?*"
            }
        }
    },
    "night_message_dain_date": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day1_dain",
        "next": "night_message_dain_reply_date",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이에게 메시지를 보냈다. '오늘 떡볶이 진짜 맛있었어! 다음에 또 가자ㅎㅎ'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent a message to Dain. 'The tteokbokki today was seriously good! Let's go again sometime haha'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a Dain. '¡El tteokbokki de hoy estaba buenísimo! Vamos otra vez algún día jaja'*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインにメッセージを送った。「今日のトッポッキ、マジで美味しかった！また行こうよ笑」*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message à Dain. 'Le tteokbokki d'aujourd'hui était vraiment excellent ! On y retourne un de ces jours haha'*"
            }
        }
    },
    "night_message_dain_generic": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day1_dain",
        "next": "night_message_dain_reply_generic",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이에게 메시지를 보냈다. '오늘 연습하는 거 멋있더라! 내일 봐.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent a message to Dain. 'You looked awesome at practice today! See you tomorrow.'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a Dain. '¡Te veías increíble en la práctica hoy! Nos vemos mañana.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインにメッセージを送った。「今日の練習、カッコよかったよ！また明日ね。」*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message à Dain. 'Tu étais géniale à l'entraînement aujourd'hui ! À demain.'*"
            }
        }
    },
    "night_message_dain_reply_date": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "night_message_dain_selfie",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*활기찬 답장이 즉시 왔다.* '그치?! 내가 맛집은 다 꿰고 있다니까! 다음엔 순대도 추가다!'"
            },
            "en": {
                "name": "Dain",
                "text": "*An enthusiastic reply came instantly.* 'Right?! I told you I know all the best spots! Next time we're adding sundae too!'"
            },
            "es": {
                "name": "Dain",
                "text": "*Una respuesta entusiasta llegó al instante.* '¡¿Verdad?! ¡Te dije que conozco todos los mejores lugares! ¡La próxima vez agregamos sundae también!'"
            },
            "ja": {
                "name": "ダイン",
                "text": "*元気いっぱいの返信がすぐに来た。* 「でしょ？！美味しい店は全部把握してるって言ったじゃん！次はスンデも追加だよ！」"
            }
            ,"fr": {
                "name": "Dain",
                "text": "*Une réponse enthousiaste est arrivée instantanément.* 'Pas vrai ?! Je t'avais dit que je connais tous les meilleurs endroits ! La prochaine fois on ajoute du sundae aussi !'"
            }
        }
    },
    "night_message_dain_reply_generic": {
        "background": "assets/images/background/room_my.png",
        "affinityChar": "Dain",
        "night": true,
        "affinityBranches": [
            {
                "minAffinity": 15,
                "next": "night_message_dain_reply_high"
            },
            {
                "minAffinity": -100,
                "next": "night_message_dain_reply_standard"
            }
        ]
    },
    "night_message_dain_reply_standard": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "night_message_dain_selfie",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*활기찬 답장이 즉시 왔다.* '오~ 지켜보고 있었냐? 부끄럽게! 하하, 내일은 더 멋진 모습 보여줄게. 잘 자, {name}!'"
            },
            "en": {
                "name": "Dain",
                "text": "*An enthusiastic reply came instantly.* 'Oh, you were watching? How embarrassing! Haha, I'll show you something even cooler tomorrow. Good night, {name}!'"
            },
            "es": {
                "name": "Dain",
                "text": "*Una respuesta entusiasta llegó al instante.* '¿Oh, estabas mirando? ¡Qué vergüenza! Jaja, mañana te mostraré algo aún más genial. ¡Buenas noches, {name}!'"
            },
            "ja": {
                "name": "ダイン",
                "text": "*元気いっぱいの返信がすぐに来た。* 「え、見てたの？恥ずかしいじゃん！あはは、明日はもっとカッコいいところ見せてあげるね。おやすみ、{name}！」"
            }
            ,"fr": {
                "name": "Dain",
                "text": "*Une réponse enthousiaste est arrivée instantanément.* 'Oh, tu regardais ? C'est gênant ! Haha, je te montrerai quelque chose d'encore plus cool demain. Bonne nuit, {name} !'"
            }
        }
    },
    "night_message_dain_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "night_message_dain_selfie",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*활기찬 답장이 즉시 왔다.* '내 활약에 벌써 반한 거야? 후후, 내일은 더 반하게 만들어줄게! 꿈에 나 나와도 놀라지 마~'"
            },
            "en": {
                "name": "Dain",
                "text": "*An enthusiastic reply came instantly.* 'Already fallen for my skills? Hehe, I'll make you fall even harder tomorrow! Don't be shocked if I show up in your dreams.'"
            },
            "es": {
                "name": "Dain",
                "text": "*Una respuesta entusiasta llegó al instante.* '¿Ya caíste por mis habilidades? Jeje, ¡mañana haré que caigas aún más! No te asustes si aparezco en tus sueños.'"
            },
            "ja": {
                "name": "ダイン",
                "text": "*元気いっぱいの返信がすぐに来た。* 「もう私の実力に惚れちゃった？えへへ、明日はもっと惚れさせてあげるから！夢に出ても驚かないでよ〜」"
            }
            ,"fr": {
                "name": "Dain",
                "text": "*Une réponse enthousiaste est arrivée instantanément.* 'Déjà conquis par mes talents ? Héhé, je te ferai encore plus craquer demain ! Ne sois pas choqué si j'apparais dans tes rêves.'"
            }
        }
    },
    "night_message_dain_selfie": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "night": true,
        "next": "night_message_dain_selfie_react",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*사진 한 장이 도착했다. 체육관에서 브이를 하며 찍은 셀카다.* '오늘의 나! 멋지지?ㅋㅋ'"
            },
            "en": {
                "name": "Dain",
                "text": "*A photo arrived. It's a selfie of her flashing a peace sign in the gym.* 'Today's me! Pretty cool, right? lol'"
            },
            "es": {
                "name": "Dain",
                "text": "*Llegó una foto. Es una selfie de ella haciendo el signo de paz en el gimnasio.* '¡La yo de hoy! ¿Genial, no? jaja'"
            },
            "ja": {
                "name": "ダイン",
                "text": "*写真が届いた。体育館でピースサインをしながら撮ったセルフィーだ。* 「今日の私！カッコいいでしょ？笑」"
            }
            ,"fr": {
                "name": "Dain",
                "text": "*Une photo est arrivée. C'est un selfie d'elle faisant le signe de la victoire dans le gymnase.* 'Moi aujourd'hui ! Plutôt cool, non ? lol'"
            }
        }
    },
    "night_message_dain_selfie_react": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_message_dain_challenge",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이 셀카... 에너지가 사진에서도 넘쳐흐른다. 나도 모르게 웃음이 나왔어.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain's selfie... her energy practically radiates from the photo. I couldn't help but smile.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La selfie de Dain... su energía prácticamente se irradia de la foto. No pude evitar sonreír.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインのセルフィー...写真からもエネルギーが溢れている。思わず笑顔になってしまった。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Le selfie de Dain... son énergie irradie littéralement de la photo. Je n'ai pas pu m'empêcher de sourire.*"
            }
        }
    },
    "night_message_dain_challenge": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "next": "night_message_dain_challenge_choice",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*추가 메시지.* '아 참! 내일 아침에 학교 뒷산 계단 올라가기 시합 어때? 지면 간식 사기다! 도전?'"
            },
            "en": {
                "name": "Dain",
                "text": "*Another message.* 'Oh, right! How about a race up the stairs behind the school tomorrow morning? Loser buys snacks! You in?'"
            },
            "es": {
                "name": "Dain",
                "text": "*Otro mensaje.* '¡Ah, cierto! ¿Qué tal una carrera subiendo las escaleras detrás de la escuela mañana por la mañana? ¡El que pierda compra botanas! ¿Le entras?'"
            },
            "ja": {
                "name": "ダイン",
                "text": "*追加メッセージ。* 「あ、そうだ！明日の朝、学校の裏山の階段登り競争しない？負けたらおやつ奢りね！挑戦する？」"
            }
            ,"fr": {
                "name": "Dain",
                "text": "*Un autre message.* 'Ah, c'est vrai ! Que dirais-tu d'une course dans les escaliers derrière le lycée demain matin ? Le perdant paie les snacks ! Tu es partant ?'"
            }
        }
    },
    "night_message_dain_challenge_choice": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "choices": [
            {
                "next": "night_message_dain_challenge_accept"
            },
            {
                "next": "night_message_dain_challenge_tease"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이의 도전장이다. 어떻게 할까?*",
                "choices": [
                    "'좋아, 받아들이지!' 라고 보낸다.",
                    "'나한테 지면 어쩌려고 ㅋㅋ' 라고 보낸다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*A challenge from Dain. What should I do?*",
                "choices": [
                    "Send 'You're on, I accept!'",
                    "Send 'What if YOU lose? lol'"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Un desafío de Dain. ¿Qué debería hacer?*",
                "choices": [
                    "Enviar '¡Acepto el reto!'",
                    "Enviar '¿Y si TÚ pierdes? jaja'"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ダインからの挑戦状だ。どうしよう？*",
                "choices": [
                    "「いいよ、受けて立つ！」と送る。",
                    "「負けたらどうするの？笑」と送る。"
                ]
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Un défi de Dain. Qu'est-ce que je fais ?*",
                "choices": [
                    "Envoyer 'C'est parti, j'accepte !'",
                    "Envoyer 'Et si c'est TOI qui perds ? lol'"
                ]
            }
        }
    },
    "night_message_dain_challenge_accept": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*즉시 답장.* '오오!! 좋은 자세다!! 내일 일찍 와야 한다? 늦잠 자면 부전패임! 잘 자, 파이팅!'"
            },
            "en": {
                "name": "Dain",
                "text": "*Instant reply.* 'Ooh!! That's the spirit!! You gotta come early tomorrow, okay? Oversleep and it's a forfeit! Good night, you got this!'"
            },
            "es": {
                "name": "Dain",
                "text": "*Respuesta instantánea.* '¡¡Ooh!! ¡¡Así se habla!! Tienes que llegar temprano mañana, ¿ok? ¡Si te quedas dormido, pierdes automáticamente! ¡Buenas noches, tú puedes!'"
            },
            "ja": {
                "name": "ダイン",
                "text": "*即返信。* 「おお！！いい気合いだね！！明日は早く来なきゃダメだよ？寝坊したら不戦敗だからね！おやすみ、ファイト！」"
            }
            ,"fr": {
                "name": "Dain",
                "text": "*Réponse instantanée.* 'Ooh !! Voilà l'esprit !! Tu dois venir tôt demain, d'accord ? Si tu fais la grasse matinée, c'est forfait ! Bonne nuit, tu vas y arriver !'"
            }
        }
    },
    "night_message_dain_challenge_tease": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*즉시 답장.* '뭐?! ㅋㅋㅋ 큰소리 치네! 좋아 두고 보자!! 내일 아침 정문에서 만나! 잘 자아!!'"
            },
            "en": {
                "name": "Dain",
                "text": "*Instant reply.* 'What?! lol Big talk! Alright, we'll see about that!! Meet me at the front gate tomorrow morning! Good niiiight!!'"
            },
            "es": {
                "name": "Dain",
                "text": "*Respuesta instantánea.* '¡¿Qué?! jaja ¡Mucha palabrería! ¡¡Está bien, ya veremos!! ¡¡Nos vemos en la puerta principal mañana por la mañana!! ¡¡Buenas nocheeees!!'"
            },
            "ja": {
                "name": "ダイン",
                "text": "*即返信。* 「え？！笑 大きく出たね！よーし、お手並み拝見だね！！明日の朝、正門で待ち合わせ！おやすみー！！」"
            }
            ,"fr": {
                "name": "Dain",
                "text": "*Réponse instantanée.* 'Quoi ?! lol De grandes paroles ! D'accord, on verra bien !! Retrouve-moi au portail principal demain matin ! Bonne nuuuit !!'"
            }
        }
    },
    "night_message_nurse": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day1_nurse",
        "next": "night_message_nurse_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님께 메시지를 보냈다. '선생님, 오늘 감사했어요. 편하게 쉴 수 있었어요.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent a message to the School Nurse. 'Thank you for today, Teacher. I was able to rest comfortably.'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a la Enfermera. 'Gracias por lo de hoy, profesora. Pude descansar cómodamente.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*保健先生にメッセージを送った。「今日はありがとうございました。ゆっくり休めました。」*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message à l'Infirmière Scolaire. 'Merci pour aujourd'hui, Madame. J'ai pu me reposer confortablement.'*"
            }
        }
    },
    "night_message_nurse_reply": {
        "background": "assets/images/background/room_my.png",
        "affinityChar": "Nurse",
        "night": true,
        "affinityBranches": [
            {
                "minAffinity": 10,
                "next": "night_message_nurse_reply_high"
            },
            {
                "minAffinity": -100,
                "next": "night_message_nurse_reply_standard"
            }
        ]
    },
    "night_message_nurse_reply_standard": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "night_message_nurse_extra_1",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*매혹적인 답장이 왔다.* '어머, 정말로 연락했네? 우리 전학생, 정말 착하다~'"
            },
            "en": {
                "name": "School Nurse",
                "text": "*A charming reply arrived.* 'Oh my, you actually messaged? Our transfer student is so sweet.'"
            },
            "es": {
                "name": "Enfermera",
                "text": "*Llegó una respuesta encantadora.* 'Ay, ¿de verdad me escribiste? Nuestro estudiante de intercambio es muy dulce.'"
            },
            "ja": {
                "name": "保健先生",
                "text": "*魅力的な返信が来た。* 「あら、本当に連絡してくれたの？うちの転校生、本当にいい子ね〜」"
            }
            ,"fr": {
                "name": "Infirmière Scolaire",
                "text": "*Une réponse charmante est arrivée.* 'Oh, tu m'as vraiment envoyé un message ? Notre nouvel élève est tellement adorable.'"
            }
        }
    },
    "night_message_nurse_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_shy.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "night_message_nurse_extra_1",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*매혹적인 답장이 왔다.* '어머나... 밤에 이런 메시지라니, 선생님 잠 못 자게 하려는 거니? 장난이야~ 너의 다정한 면이 참 좋구나.'"
            },
            "en": {
                "name": "School Nurse",
                "text": "*A charming reply arrived.* 'My goodness... a message like this at night? Are you trying to keep me up? Just kidding. I really like this sweet side of you.'"
            },
            "es": {
                "name": "Enfermera",
                "text": "*Llegó una respuesta encantadora.* 'Dios mío... ¿un mensaje así de noche? ¿Quieres desvelarme? Es broma. Me gusta mucho este lado dulce tuyo.'"
            },
            "ja": {
                "name": "保健先生",
                "text": "*魅力的な返信が来た。* 「あらまあ...夜にこんなメッセージだなんて、先生を眠れなくさせる気？冗談よ〜。あなたのこういう優しいところ、すごく好きよ。」"
            }
            ,"fr": {
                "name": "Infirmière Scolaire",
                "text": "*Une réponse charmante est arrivée.* 'Mon Dieu... un message comme ça le soir ? Tu essaies de m'empêcher de dormir ? Je plaisante. J'aime beaucoup ce côté doux de toi.'"
            }
        }
    },
    "night_message_nurse_extra_1": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "next": "night_message_nurse_extra_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "'그나저나, 새 학교 적응하느라 피곤하지 않아? 무리하면 안 돼~ 머리 아프거나 하면 바로 보건실로 오렴.'"
            },
            "en": {
                "name": "School Nurse",
                "text": "'By the way, aren't you worn out from adjusting to the new school? Don't push yourself too hard. If you get a headache or anything, come straight to the nurse's office.'"
            },
            "es": {
                "name": "Enfermera",
                "text": "'Por cierto, ¿no estás agotado de adaptarte a la nueva escuela? No te esfuerces demasiado. Si te duele la cabeza o algo, ven directo a la enfermería.'"
            },
            "ja": {
                "name": "保健先生",
                "text": "「ところで、新しい学校に慣れるの疲れてない？無理しちゃダメよ〜。頭が痛くなったりしたら、すぐ保健室に来てね。」"
            }
            ,"fr": {
                "name": "Infirmière Scolaire",
                "text": "'Au fait, tu n'es pas épuisé de t'adapter au nouveau lycée ? Ne te pousse pas trop. Si tu as mal à la tête ou quoi que ce soit, viens directement à l'infirmerie.'"
            }
        }
    },
    "night_message_nurse_extra_2": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_message_nurse_extra_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*'네, 감사해요! 선생님도 푹 쉬세요.' 라고 답장했다. ...은근히 챙겨주시는 게 따뜻하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I replied 'Yes, thank you! Please get a good rest too, Teacher.' ...It's really warm how she quietly looks out for me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Respondí '¡Sí, gracias! Usted también descanse bien, profesora.' ...Es muy cálido cómo se preocupa por mí discretamente.*"
            },
            "ja": {
                "name": "僕",
                "text": "*「はい、ありがとうございます！先生もゆっくり休んでください。」と返信した。...さりげなく気にかけてくれるのが温かい。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'ai répondu 'Oui, merci ! Reposez-vous bien aussi, Madame.' ...C'est vraiment chaleureux la façon dont elle veille discrètement sur moi.*"
            }
        }
    },
    "night_message_nurse_extra_3": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_shy.png",
        "silhouette": true,
        "night": true,
        "next": "night_message_nurse_extra_4",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "'고마워~ 그럼 잘 자렴, {name}. 선생님이 좋은 꿈 빌어줄게.'"
            },
            "en": {
                "name": "School Nurse",
                "text": "'Thank you. Well then, good night, {name}. I'll wish you sweet dreams.'"
            },
            "es": {
                "name": "Enfermera",
                "text": "'Gracias. Bueno, entonces buenas noches, {name}. Te desearé dulces sueños.'"
            },
            "ja": {
                "name": "保健先生",
                "text": "「ありがとう〜。じゃあおやすみ、{name}。先生がいい夢見られるようにお祈りしてあげるね。」"
            }
            ,"fr": {
                "name": "Infirmière Scolaire",
                "text": "'Merci. Eh bien, bonne nuit, {name}. Je te souhaite de doux rêves.'"
            }
        }
    },
    "night_message_nurse_extra_4": {
        "character": "assets/images/characters/nurse_shy.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님의 '좋은 꿈 빌어줄게'라는 말이 유독 마음에 남는다. 선생님인데... 왜 이렇게 두근거리지.*"
            },
            "en": {
                "name": "Me",
                "text": "*Her saying 'I'll wish you sweet dreams' lingers in my mind. She's a teacher, but... why is my heart racing like this?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Su 'te desearé dulces sueños' se queda en mi mente. Es una profesora, pero... ¿por qué me late tan rápido el corazón?*"
            },
            "ja": {
                "name": "僕",
                "text": "*保健先生の「いい夢見られるようにお祈りしてあげる」という言葉がやけに心に残る。先生なのに...なんでこんなにドキドキするんだろう。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Son \u00ab Je te souhaite de doux rêves \u00bb reste dans mon esprit. C'est une enseignante, mais... pourquoi mon cœur bat-il si vite ?*"
            }
        }
    },
    "night_goodnight_start": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_goodnight_window",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*스마트폰을 내려놓고 침대에서 일어났다. 잠들기 전에 잠깐 창문을 열어볼까.*"
            },
            "en": {
                "name": "Me",
                "text": "*I set my phone down and sit up in bed. Maybe I'll open the window for a moment before I sleep.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dejé el teléfono y me senté en la cama. Tal vez abra la ventana un momento antes de dormir.*"
            },
            "ja": {
                "name": "僕",
                "text": "*スマホを置いてベッドから起き上がった。寝る前にちょっと窓を開けてみようかな。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Je pose mon téléphone et me redresse dans le lit. Peut-être que je vais ouvrir la fenêtre un instant avant de dormir.*"
            }
        }
    },
    "night_goodnight_window": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_goodnight_sounds",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*창문을 열자 서늘한 밤바람이 얼굴을 스친다. 밤하늘에 별이 몇 개 보인다. 이 동네는 도시보다 별이 잘 보이네.*"
            },
            "en": {
                "name": "Me",
                "text": "*I open the window, and a cool night breeze brushes my face. A few stars are scattered across the night sky. You can see the stars so much better here than in the city.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Abro la ventana y una brisa nocturna fresca me roza la cara. Algunas estrellas están esparcidas por el cielo nocturno. Se ven mucho mejor las estrellas aquí que en la ciudad.*"
            },
            "ja": {
                "name": "僕",
                "text": "*窓を開けると、ひんやりした夜風が顔を撫でた。夜空にいくつか星が見える。この街は都会より星がよく見えるな。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'ouvre la fenêtre, et une brise fraîche de la nuit me caresse le visage. Quelques étoiles sont dispersées dans le ciel nocturne. On voit tellement mieux les étoiles ici qu'en ville.*"
            }
        }
    },
    "night_goodnight_sounds": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_goodnight_think",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*귀뚜라미 소리가 들려온다. 멀리서 기차 소리도 희미하게... 이 조용한 밤이, 어쩐지 좋다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I can hear crickets chirping. A faint train whistle in the distance... this quiet night feels somehow peaceful.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Puedo escuchar grillos cantando. Un silbato de tren tenue a lo lejos... esta noche tranquila se siente de alguna manera pacífica.*"
            },
            "ja": {
                "name": "僕",
                "text": "*コオロギの鳴き声が聞こえる。遠くから電車の音もかすかに...この静かな夜が、なんだか心地いい。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'entends les grillons chanter. Un sifflet de train au loin... cette nuit calme semble étrangement paisible.*"
            }
        }
    },
    "night_goodnight_think": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_goodnight_close",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*내일은 또 어떤 일이 기다리고 있을까... 기대된다.*"
            },
            "en": {
                "name": "Me",
                "text": "*What will tomorrow bring... I'm looking forward to it.*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿Qué traerá el mañana...? Estoy ansioso por descubrirlo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*明日はどんなことが待っているんだろう...楽しみだな。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Qu'est-ce que demain apportera... J'ai hâte d'y être.*"
            }
        }
    },
    "night_goodnight_close": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_surprise_check",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*창문을 닫고 이불 속으로 들어갔다. 눈을 감으면... 잠이 올 것 같아.*"
            },
            "en": {
                "name": "Me",
                "text": "*I close the window and crawl under the covers. If I close my eyes... sleep should come soon.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cierro la ventana y me meto bajo las cobijas. Si cierro los ojos... el sueño debería llegar pronto.*"
            },
            "ja": {
                "name": "僕",
                "text": "*窓を閉めて布団に潜り込んだ。目を閉じれば...眠れそうだ。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Je ferme la fenêtre et me glisse sous les couvertures. Si je ferme les yeux... le sommeil devrait venir bientôt.*"
            }
        }
    },
    "night_surprise_check": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "night_surprise_msg",
                "condition": "has_any_contact"
            },
            {
                "next": "day1_end"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 감으려는 순간 — 징! 스마트폰에 알림이 울렸다. 이 시간에 누구지...?*"
            },
            "en": {
                "name": "Me",
                "text": "*Just as I'm about to close my eyes — ding! My phone buzzes with a notification. Who could it be at this hour...?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Justo cuando estoy a punto de cerrar los ojos — ¡ding! Mi teléfono vibra con una notificación. ¿Quién será a esta hora...?*"
            },
            "ja": {
                "name": "僕",
                "text": "*目を閉じようとした瞬間——ピロン！スマホに通知が鳴った。こんな時間に誰だろう...？*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Juste au moment où je m'apprête à fermer les yeux \u2014 ding ! Mon téléphone vibre avec une notification. Qui cela peut-il être à cette heure... ?*"
            }
        }
    },
    "night_surprise_msg": {
        "selectByHighestAffinity": true,
        "night": true,
        "branches": [
            {
                "character": "Seoyeon",
                "next": "night_surprise_seyoun",
                "condition": "has_number_seyoun"
            },
            {
                "character": "Yuna",
                "next": "night_surprise_yuna",
                "condition": "has_number_yuna"
            },
            {
                "character": "Dain",
                "next": "night_surprise_dain",
                "condition": "has_number_dain"
            },
            {
                "character": "Nurse",
                "next": "night_surprise_nurse",
                "condition": "has_number_nurse"
            },
            {
                "character": "Teacher",
                "next": "night_surprise_teacher",
                "condition": "has_number_teacher"
            },
            {
                "next": "day1_end"
            }
        ]
    },
    "night_surprise_seyoun": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "silhouette": true,
        "night": true,
        "next": "night_surprise_seyoun_react",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이의 메시지.* '잠 안 와서 그러는데... 내일 등교할 때 정문에서 만날래? 같이 가자!'"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*A message from Seoyeon.* 'I can't sleep so... do you want to meet at the front gate tomorrow and walk to school together?'"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Un mensaje de Seoyeon.* 'No puedo dormir, así que... ¿quieres que nos veamos en la puerta principal mañana y caminemos juntos a la escuela?'"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンからのメッセージ。* 「眠れなくて...明日登校する時、正門で待ち合わせしない？一緒に行こうよ！」"
            }
            ,"fr": {
                "name": "Seoyeon",
                "text": "*Un message de Seoyeon.* 'Je n'arrive pas à dormir alors... tu veux qu'on se retrouve au portail principal demain et qu'on aille au lycée ensemble ?'"
            }
        }
    },
    "night_surprise_seyoun_react": {
        "character": "assets/images/characters/seyoun_shy.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "night_surprise_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*'좋아! 내일 정문에서 보자.' 라고 답장했다. ...서연이가 먼저 연락을 해오다니. 왠지 기분이 좋아졌다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I replied 'Sure! I'll see you at the front gate tomorrow.' ...Seoyeon reached out first. That somehow makes me feel really happy.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Respondí '¡Claro! Te veo en la puerta principal mañana.' ...Seoyeon me escribió primero. Eso de alguna manera me hace sentir muy feliz.*"
            },
            "ja": {
                "name": "僕",
                "text": "*「いいよ！明日正門でね。」と返信した。...ソヨンの方から連絡してくれたんだ。なんだか嬉しくなった。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'ai répondu 'Bien sûr ! On se retrouve au portail principal demain.' ...C'est Seoyeon qui m'a contacté en premier. Ça me rend vraiment heureux, bizarrement.*"
            }
        }
    },
    "night_surprise_yuna": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "night_surprise_yuna_react",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나의 메시지.* '...아직 깨어 있어? 별이 예뻐서. 그것만 말하고 싶었어.'"
            },
            "en": {
                "name": "Yuna",
                "text": "*A message from Yuna.* '...Are you still awake? The stars are pretty tonight. That's all I wanted to say.'"
            },
            "es": {
                "name": "Yuna",
                "text": "*Un mensaje de Yuna.* '...¿Sigues despierto? Las estrellas están bonitas esta noche. Eso es todo lo que quería decir.'"
            },
            "ja": {
                "name": "ユナ",
                "text": "*ユナからのメッセージ。* 「...まだ起きてる？今夜、星がきれいだよ。それだけ言いたかった。」"
            }
            ,"fr": {
                "name": "Yuna",
                "text": "*Un message de Yuna.* '...Tu es encore réveillé ? Les étoiles sont jolies ce soir. C'est tout ce que je voulais dire.'"
            }
        }
    },
    "night_surprise_yuna_react": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "night_surprise_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*'나도 방금 별 보고 있었어.' 라고 답장했다. ...같은 하늘을 보고 있다는 게, 묘하게 설레는 느낌이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I replied 'I was just looking at the stars too.' ...The thought that we're looking at the same sky is unexpectedly exciting.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Respondí 'Yo también estaba mirando las estrellas.' ...Pensar que estamos mirando el mismo cielo es inesperadamente emocionante.*"
            },
            "ja": {
                "name": "僕",
                "text": "*「僕もちょうど星を見てたよ。」と返信した。...同じ空を見ているんだと思うと、不思議とドキドキする。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'ai répondu 'Moi aussi, j'étais justement en train de regarder les étoiles.' ...L'idée qu'on regarde le même ciel est étrangement excitante.*"
            }
        }
    },
    "night_surprise_dain": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "night": true,
        "next": "night_surprise_dain_react",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*다인이의 메시지.* '아직 안 잤지?! 내일 시합 잊지 마!! 미리 스트레칭 해둬야 할 걸?ㅋㅋ 잘 자!'"
            },
            "en": {
                "name": "Dain",
                "text": "*A message from Dain.* 'You're still up, right?! Don't forget about tomorrow's race!! You should probably stretch beforehand lol. Good night!'"
            },
            "es": {
                "name": "Dain",
                "text": "*Un mensaje de Dain.* '¡¿Sigues despierto, verdad?! ¡¡No olvides la carrera de mañana!! Deberías estirar antes jaja. ¡Buenas noches!'"
            },
            "ja": {
                "name": "ダイン",
                "text": "*ダインからのメッセージ。* 「まだ起きてるでしょ？！明日の勝負忘れないでよ！！先にストレッチしといた方がいいかもね笑 おやすみ！」"
            }
            ,"fr": {
                "name": "Dain",
                "text": "*Un message de Dain.* 'Tu es encore debout, pas vrai ?! N'oublie pas la course de demain !! Tu devrais t'étirer avant lol. Bonne nuit !'"
            }
        }
    },
    "night_surprise_dain_react": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "night_surprise_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*'걱정 마, 준비 되어 있어!' 라고 답장했다. 다인이의 에너지는 밤에도 변함이 없구나.*"
            },
            "en": {
                "name": "Me",
                "text": "*I replied 'Don't worry, I'm ready!' Dain's energy really never fades, even at night.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Respondí '¡No te preocupes, estoy listo!' La energía de Dain realmente nunca se apaga, ni siquiera de noche.*"
            },
            "ja": {
                "name": "僕",
                "text": "*「心配しないで、準備万端だよ！」と返信した。ダインのエネルギーは夜でも衰えないんだな。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'ai répondu 'Ne t'inquiète pas, je suis prêt !' L'énergie de Dain ne faiblit vraiment jamais, même la nuit.*"
            }
        }
    },
    "night_surprise_nurse": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_shy.png",
        "silhouette": true,
        "night": true,
        "next": "night_surprise_nurse_react",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*보건선생님의 메시지.* '아직 안 잤으면 큰일이야~ 내일 보건실에서 수면 상담해줄까? 농담이야. 잘 자렴.'"
            },
            "en": {
                "name": "School Nurse",
                "text": "*A message from the School Nurse.* 'If you're still up, that's no good. Should I give you a sleep consultation at the nurse's office tomorrow? Just kidding. Good night.'"
            },
            "es": {
                "name": "Enfermera",
                "text": "*Un mensaje de la Enfermera.* 'Si todavía estás despierto, eso no está bien. ¿Quieres que te dé una consulta del sueño en la enfermería mañana? Es broma. Buenas noches.'"
            },
            "ja": {
                "name": "保健先生",
                "text": "*保健先生からのメッセージ。* 「まだ起きてたら大変よ〜。明日保健室で睡眠相談してあげようか？冗談よ。おやすみなさい。」"
            }
            ,"fr": {
                "name": "Infirmière Scolaire",
                "text": "*Un message de l'Infirmière Scolaire.* 'Si tu es encore debout, ce n'est pas bon. Tu veux que je te fasse une consultation sommeil à l'infirmerie demain ? Je plaisante. Bonne nuit.'"
            }
        }
    },
    "night_surprise_nurse_react": {
        "character": "assets/images/characters/nurse_shy.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "night_surprise_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*'네, 지금 잘게요! 감사해요 선생님.' 라고 답장했다. ...장난스럽지만 은근히 걱정해주시는 거겠지?*"
            },
            "en": {
                "name": "Me",
                "text": "*I replied 'I'm going to sleep now! Thank you, Teacher.' ...She's playful, but she's genuinely worried about me, isn't she?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Respondí '¡Ya me voy a dormir! Gracias, profesora.' ...Es juguetona, pero de verdad se preocupa por mí, ¿no?*"
            },
            "ja": {
                "name": "僕",
                "text": "*「今から寝ます！ありがとうございます、先生。」と返信した。...冗談っぽいけど、本当に心配してくれてるんだよな。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'ai répondu 'Je vais dormir maintenant ! Merci, Madame.' ...Elle est taquine, mais elle s'inquiète vraiment pour moi, n'est-ce pas ?*"
            }
        }
    },
    "night_surprise_teacher": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_smile.png",
        "silhouette": true,
        "night": true,
        "next": "night_surprise_teacher_react",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*담임선생님의 메시지.* '혹시 아직 안 잤니? 내일 시간표 바뀐 거 미리 알려주려고. 3교시가 체육이야. 잘 자!'"
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*A message from the Homeroom Teacher.* 'Are you still awake by any chance? I wanted to let you know the schedule changed. 3rd period is PE now. Good night!'"
            },
            "es": {
                "name": "Profesora",
                "text": "*Un mensaje de la Profesora.* '¿Todavía estás despierto por casualidad? Quería avisarte que el horario cambió. La 3ra hora ahora es educación física. ¡Buenas noches!'"
            },
            "ja": {
                "name": "担任先生",
                "text": "*担任先生からのメッセージ。* 「もしかしてまだ起きてる？明日の時間割が変わったから先に伝えておこうと思って。3時間目が体育になったよ。おやすみ！」"
            }
            ,"fr": {
                "name": "Professeur Principal",
                "text": "*Un message du Professeur Principal.* 'Tu es encore réveillé par hasard ? Je voulais te prévenir que l'emploi du temps a changé. La 3ème heure est maintenant éducation physique. Bonne nuit !'"
            }
        }
    },
    "night_surprise_teacher_react": {
        "character": "assets/images/characters/teacher_smile.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "night_surprise_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*'감사합니다 선생님! 잘 자요~' 라고 답장했다. 세심하게 신경 써주셔서 따뜻한 분이야.*"
            },
            "en": {
                "name": "Me",
                "text": "*I replied 'Thank you, Teacher! Good night!' She's so attentive and thoughtful. What a kind person.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Respondí '¡Gracias, profesora! ¡Buenas noches!' Es tan atenta y considerada. Qué persona tan amable.*"
            },
            "ja": {
                "name": "僕",
                "text": "*「ありがとうございます、先生！おやすみなさい！」と返信した。細かいところまで気を遣ってくれて、温かい人だな。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*J'ai répondu 'Merci, Professeur ! Bonne nuit !' Elle est tellement attentive et prévenante. Quelle personne aimable.*"
            }
        }
    },
    "night_surprise_react": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day1_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*깜짝 놀랐지만... 기분이 좋아졌다. 스마트폰을 뒤집어 놓고 이불을 덮었다. 오늘은 진짜 좋은 하루였어.*"
            },
            "en": {
                "name": "Me",
                "text": "*That surprised me, but... it made me happy. I flip my phone face-down and pull up the covers. Today was truly a wonderful day.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me sorprendió, pero... me hizo feliz. Volteo mi teléfono boca abajo y me tapo con las cobijas. Hoy fue verdaderamente un día maravilloso.*"
            },
            "ja": {
                "name": "僕",
                "text": "*びっくりしたけど...嬉しかった。スマホを裏返して布団をかぶった。今日は本当にいい一日だったな。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Ça m'a surpris, mais... ça m'a rendu heureux. Je retourne mon téléphone face contre le lit et remonte les couvertures. Aujourd'hui était vraiment une journée merveilleuse.*"
            }
        }
    },
    "day1_end": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "fade": true,
        "changeDay": 2,
        "next": "day2_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*오늘 하루를 되돌아본다. 새로운 만남들, 낯선 감정들... 내일은 어떤 하루가 될까.*"
            },
            "en": {
                "name": "Me",
                "text": "*I look back on today. New encounters, unfamiliar feelings... What kind of day will tomorrow be?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Reflexiono sobre el día de hoy. Nuevos encuentros, sentimientos desconocidos... ¿Qué tipo de día será mañana?*"
            },
            "ja": {
                "name": "僕",
                "text": "*今日一日を振り返る。新しい出会い、慣れない感情...明日はどんな一日になるんだろう。*"
            }
            ,"fr": {
                "name": "Moi",
                "text": "*Je repense à la journée d'aujourd'hui. De nouvelles rencontres, des sentiments inconnus... Quel genre de journée sera demain ?*"
            }
        }
    }
});
