/**
 * ============================================================================
 * CUPID - day4_1_morning (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day4_1_morning.js + en_day4_1_morning.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

Object.assign(SCENARIO[4], {
    "day4_start": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "bgm": "morning.mp3",
        "fade": true,
        "next": "day4_morning_dream",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…눈을 뜨니 토요일 아침이다. 심장이 벌써부터 뛴다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...I open my eyes. It's Saturday morning. My heart is already racing.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...Abro los ojos. Es sábado por la mañana. Mi corazón ya está acelerado.*"
            },
            "ja": {
                "name": "僕",
                "text": "*…目を開けると、土曜日の朝だ。心臓がもうドキドキしている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...J'ouvre les yeux. C'est samedi matin. Mon cœur bat déjà la chamade.*"
            }
        }
    },
    "day4_morning_dream": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_wake",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어젯밤, 이상한 꿈을 꿨다. 학교에서 있었던 일들이 파노라마처럼 스쳐 지나갔어.*"
            },
            "en": {
                "name": "Me",
                "text": "*Last night, I had a strange dream. Everything that happened at school flashed by like a panorama.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Anoche tuve un sueño extraño. Todo lo que pasó en la escuela pasó como un panorama.*"
            },
            "ja": {
                "name": "僕",
                "text": "*昨夜、変な夢を見た。学校であったことがパノラマみたいに駆け巡っていった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La nuit dernière, j'ai fait un rêve étrange. Tout ce qui s'est passé à l'école a défilé comme un panorama.*"
            }
        }
    },
    "day4_morning_wake": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_calendar",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*오늘은… 드디어 그날이다. 어제 밤엔 잠도 제대로 못 잤어.*"
            },
            "en": {
                "name": "Me",
                "text": "*Today is... finally the day. I could barely sleep last night.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Hoy es... por fin el día. Apenas pude dormir anoche.*"
            },
            "ja": {
                "name": "僕",
                "text": "*今日は…ついにその日だ。昨夜はろくに眠れなかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Aujourd'hui, c'est... enfin le jour. J'ai à peine dormi la nuit dernière.*"
            }
        }
    },
    "day4_morning_calendar": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_excitement",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*핸드폰 달력을 확인한다. '토요일' — 빨간 글씨가 유난히 눈에 띈다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I check the calendar on my phone. 'Saturday' — the red letters stand out more than usual.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Reviso el calendario en mi teléfono. 'Sábado' — las letras rojas resaltan más de lo normal.*"
            },
            "ja": {
                "name": "僕",
                "text": "*スマホのカレンダーを確認する。「土曜日」――赤い文字がやけに目に付く。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je vérifie le calendrier sur mon téléphone. 'Samedi' — les lettres rouges ressortent plus que d'habitude.*"
            }
        }
    },
    "day4_morning_excitement": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_guilt_check",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*전학 온 지 나흘째. 이렇게 설레는 주말이 올 줄은 몰랐어. 가슴이 쿵쾅거린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*It's only been four days since I transferred here. I never expected such an exciting weekend. My heart is pounding.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Solo han pasado cuatro días desde que me transferí. No esperaba un fin de semana tan emocionante. Mi corazón late con fuerza.*"
            },
            "ja": {
                "name": "僕",
                "text": "*転校してきて四日目。こんなにワクワクする週末が来るとは思わなかった。胸がドキドキする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Cela ne fait que quatre jours depuis mon transfert ici. Je ne m'attendais pas à un week-end aussi excitant. Mon cœur bat fort.*"
            }
        }
    },
    "day4_morning_guilt_check": {
        "background": "assets/images/background/room_my.png",
        "branches": [
            {
                "next": "day4_morning_guilt",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day4_morning_stretch"
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
    "day4_morning_guilt": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_stretch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…잠깐. 여러 명에게 약속한 게 마음에 걸린다. 다들 나를 믿고 약속한 건데... 결국 한 사람밖에 만나지 못할 텐데.*"
            },
            "en": {
                "name": "Me",
                "text": "*...Wait. I feel uneasy about having promised multiple people. They all trusted me when they made plans... but in the end, I can only meet one of them.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...Espera. Me siento mal por haberle prometido a varias personas. Todas confiaron en mí cuando hicimos planes... pero al final, solo puedo ver a una.*"
            },
            "ja": {
                "name": "僕",
                "text": "*…待てよ。何人にも約束してしまったことが気にかかる。みんな僕を信じて約束してくれたのに…結局、一人としか会えないのに。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Attends. Je me sens mal d'avoir fait des promesses à plusieurs personnes. Elles m'ont toutes fait confiance en faisant ces plans... mais au final, je ne peux en voir qu'une seule.*"
            }
        }
    },
    "day4_morning_stretch": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_mirror",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*크게 기지개를 켜고 이불을 걷어찬다. 오늘 하루, 절대 후회 없이 보내야지.*"
            },
            "en": {
                "name": "Me",
                "text": "*I stretch wide and kick off the blankets. Today, I'm going to live without any regrets.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me estiro bien y pateo las cobijas. Hoy voy a vivir sin arrepentimientos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*大きく伸びをして布団を蹴飛ばす。今日一日、絶対に後悔しないように過ごそう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je m'étire de tout mon long et repousse les couvertures. Aujourd'hui, je vais vivre sans aucun regret.*"
            }
        }
    },
    "day4_morning_mirror": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_window",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*거울 앞에 서니 긴장된 내 얼굴이 보인다. 좀 더 멋있어 보이고 싶은데…*"
            },
            "en": {
                "name": "Me",
                "text": "*Standing in front of the mirror, I see my nervous face. I wish I could look a little cooler...*"
            },
            "es": {
                "name": "Yo",
                "text": "*De pie frente al espejo, veo mi cara nerviosa. Ojalá pudiera verme un poco más genial...*"
            },
            "ja": {
                "name": "僕",
                "text": "*鏡の前に立つと、緊張した自分の顔が映る。もうちょっとカッコよく見えたいのに…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Debout devant le miroir, je vois mon visage nerveux. J'aimerais avoir l'air un peu plus cool...*"
            }
        }
    },
    "day4_morning_window": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_weather",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*커튼을 젖히자 눈부신 햇살이 쏟아진다. 밖이 환하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I pull back the curtains and bright sunlight pours in. It's so bright outside.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Abro las cortinas y entra una luz brillante. Afuera está muy iluminado.*"
            },
            "ja": {
                "name": "僕",
                "text": "*カーテンを開けると、まぶしい日差しが降り注ぐ。外は明るい。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ouvre les rideaux et une lumière éclatante se déverse. Dehors, tout est lumineux.*"
            }
        }
    },
    "day4_morning_weather": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_weather2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*하늘이 끝없이 맑다. 벚꽃 잎이 바람에 날리고, 새들이 지저귄다. 완벽한 토요일 아침이야.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sky is endlessly clear. Cherry blossom petals drift in the breeze, and birds are singing. A perfect Saturday morning.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El cielo está despejado hasta el infinito. Los pétalos de cerezo flotan con la brisa y los pájaros cantan. Una mañana de sábado perfecta.*"
            },
            "ja": {
                "name": "僕",
                "text": "*空はどこまでも澄んでいる。桜の花びらが風に舞い、鳥たちがさえずっている。完璧な土曜日の朝だ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le ciel est d'une clarté infinie. Les pétales de cerisier dansent dans la brise et les oiseaux chantent. Un samedi matin parfait.*"
            }
        }
    },
    "day4_morning_weather2": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_kitchen",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*창 너머로 동네 거리가 보인다. 산책하는 사람들, 카페에 들어서는 커플… 나도 곧 저기 있겠지.*"
            },
            "en": {
                "name": "Me",
                "text": "*Through the window, I can see the neighborhood streets. People out for walks, couples heading into cafés... I'll be out there too, soon.*"
            },
            "es": {
                "name": "Yo",
                "text": "*A través de la ventana, veo las calles del vecindario. Gente paseando, parejas entrando a cafés... Yo también estaré ahí pronto.*"
            },
            "ja": {
                "name": "僕",
                "text": "*窓の向こうに街並みが見える。散歩する人たち、カフェに入るカップル…僕もすぐにあそこにいるんだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Par la fenêtre, j'aperçois les rues du quartier. Des gens qui se promènent, des couples qui entrent dans des cafés... Moi aussi, j'y serai bientôt.*"
            }
        }
    },
    "day4_morning_kitchen": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_breakfast_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*부엌으로 향한다. 냉장고에 뭐가 있나 확인해 볼까.*"
            },
            "en": {
                "name": "Me",
                "text": "*I head to the kitchen. Let me check what's in the fridge.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Voy a la cocina. A ver qué hay en el refrigerador.*"
            },
            "ja": {
                "name": "僕",
                "text": "*キッチンに向かう。冷蔵庫に何があるか確認してみよう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je me dirige vers la cuisine. Voyons ce qu'il y a dans le frigo.*"
            }
        }
    },
    "day4_morning_breakfast_choice": {
        "background": "assets/images/background/room_my.png",
        "choices": [
            {
                "next": "day4_morning_breakfast_eat"
            },
            {
                "next": "day4_morning_breakfast_skip"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*시간이 넉넉하긴 한데… 아침은 어떡하지?*",
                "choices": [
                    "토스트라도 먹고 가자",
                    "배보다 설렘이 더 크다, 패스"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*I have plenty of time, but... what should I do about breakfast?*",
                "choices": [
                    "At least grab some toast before heading out",
                    "Too excited to eat — skip it"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Tengo tiempo de sobra, pero... ¿qué hago con el desayuno?*",
                "choices": [
                    "Al menos comer un pan tostado antes de salir",
                    "Estoy más emocionado que hambriento, paso"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*時間はたっぷりあるけど…朝ごはんどうしよう？*",
                "choices": [
                    "トーストくらい食べていこう",
                    "ワクワクしすぎてお腹空かない、パス"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai largement le temps, mais... que faire pour le petit-déjeuner ?*",
                "choices": [
                    "Au moins manger un toast avant de partir",
                    "Trop excité pour manger — on passe"
                ]
            }
        }
    },
    "day4_morning_breakfast_eat": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_breakfast_done",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*토스트에 잼을 발라 한 입 베어 문다. 바삭한 식감이 잠을 확 깨운다. 역시 먹어야 힘이 나지.*"
            },
            "en": {
                "name": "Me",
                "text": "*I spread jam on a slice of toast and take a bite. The crispy texture shakes off the drowsiness. Nothing beats a good breakfast.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Unto mermelada en una tostada y le doy un mordisco. La textura crujiente me despierta de golpe. Nada como un buen desayuno.*"
            },
            "ja": {
                "name": "僕",
                "text": "*トーストにジャムを塗って一口かじる。サクサクの食感で目が覚める。やっぱり食べないと元気が出ないよな。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je tartine de la confiture sur un toast et croque dedans. La texture croustillante me réveille d'un coup. Rien ne vaut un bon petit-déjeuner.*"
            }
        }
    },
    "day4_morning_breakfast_skip": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_breakfast_done",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*배가 고프긴 한데, 긴장돼서 뭘 먹어도 맛을 모르겠다. 나가서 뭔가 사 먹자.*"
            },
            "en": {
                "name": "Me",
                "text": "*I'm hungry, but I'm too nervous to taste anything anyway. I'll grab something on the way.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Tengo hambre, pero estoy tan nervioso que no sabría a nada. Compraré algo por el camino.*"
            },
            "ja": {
                "name": "僕",
                "text": "*お腹は空いてるけど、緊張して何を食べても味がわからなさそうだ。外で何か買おう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai faim, mais je suis trop nerveux pour apprécier quoi que ce soit. J'achèterai quelque chose en route.*"
            }
        }
    },
    "day4_morning_breakfast_done": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_groom",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*좋아, 이제 씻고 준비하자. 시간은 충분해.*"
            },
            "en": {
                "name": "Me",
                "text": "*Alright, time to wash up and get ready. I've got plenty of time.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Bien, hora de lavarme y prepararme. Tengo tiempo de sobra.*"
            },
            "ja": {
                "name": "僕",
                "text": "*よし、洗顔して準備しよう。時間は十分ある。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Bien, c'est l'heure de se laver et de se préparer. J'ai largement le temps.*"
            }
        }
    },
    "day4_morning_groom": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_nervous",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*세수하고, 머리를 정리한다. 평소보다 신경 써서 스타일링했다. 향수도… 살짝만 뿌릴까.*"
            },
            "en": {
                "name": "Me",
                "text": "*I wash my face and fix my hair. I styled it more carefully than usual. Maybe... just a little cologne too.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me lavo la cara y me arreglo el cabello. Lo peiné con más cuidado que de costumbre. Tal vez... un poco de colonia también.*"
            },
            "ja": {
                "name": "僕",
                "text": "*顔を洗って、髪を整える。いつもより気合を入れてスタイリングした。香水も…ちょっとだけつけようかな。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je me lave le visage et me coiffe. J'ai mis plus de soin que d'habitude dans mon style. Peut-être... juste un peu de cologne aussi.*"
            }
        }
    },
    "day4_morning_nervous": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_closet",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*거울에 비친 내 모습을 한 번 더 확인한다. 괜찮아, 나쁘지 않아. …그래도 왜 이렇게 떨리지.*"
            },
            "en": {
                "name": "Me",
                "text": "*I check my reflection in the mirror one more time. Not bad. ...But why am I shaking so much?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me miro en el espejo una vez más. No está mal. ...Pero ¿por qué estoy temblando tanto?*"
            },
            "ja": {
                "name": "僕",
                "text": "*鏡に映った自分をもう一度確認する。大丈夫、悪くない。…でもなんでこんなに震えてるんだろう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je vérifie mon reflet dans le miroir une dernière fois. Pas mal. ...Mais pourquoi est-ce que je tremble autant ?*"
            }
        }
    },
    "day4_morning_closet": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_outfit",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*옷장을 열었다. 교복 말고 입을 옷이… 생각보다 많지 않다. 뭘 입어야 할까.*"
            },
            "en": {
                "name": "Me",
                "text": "*I open the closet. Besides my school uniform, I don't have that many options. What should I wear?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Abro el clóset. Aparte de mi uniforme escolar, no tengo tantas opciones. ¿Qué me pongo?*"
            },
            "ja": {
                "name": "僕",
                "text": "*クローゼットを開けた。制服以外の服は…思ったより多くない。何を着ればいいんだろう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ouvre le placard. En dehors de mon uniforme scolaire, je n'ai pas tant d'options que ça. Qu'est-ce que je devrais porter ?*"
            }
        }
    },
    "day4_morning_outfit": {
        "background": "assets/images/background/room_my.png",
        "choices": [
            {
                "next": "day4_outfit_casual",
                "setFlag": "day4_outfit_casual"
            },
            {
                "next": "day4_outfit_stylish",
                "setFlag": "day4_outfit_stylish"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뭘 입고 나가지? 첫인상이 중요하니까 신중하게 골라야 해.*",
                "choices": [
                    "깔끔한 캐주얼 *흰 셔츠 + 청바지*",
                    "세련된 스타일 *자켓 + 슬랙스*"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*What should I go with? First impressions matter, so I need to choose carefully.*",
                "choices": [
                    "Clean casual *white shirt + jeans*",
                    "Sleek style *jacket + slacks*"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¿Qué me pongo? La primera impresión importa, así que tengo que elegir bien.*",
                "choices": [
                    "Casual limpio *camisa blanca + jeans*",
                    "Estilo elegante *chaqueta + pantalón de vestir*"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*何を着て出よう？第一印象が大事だから、慎重に選ばないと。*",
                "choices": [
                    "さっぱりカジュアル *白シャツ＋ジーンズ*",
                    "おしゃれスタイル *ジャケット＋スラックス*"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Qu'est-ce que je mets ? La première impression compte, alors je dois bien choisir.*",
                "choices": [
                    "Casual soigné *chemise blanche + jean*",
                    "Style élégant *veste + pantalon habillé*"
                ]
            }
        }
    },
    "day4_outfit_casual": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_casual_mirror",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*역시 편한 게 최고지. 자연스럽게 입는 게 내 스타일이야.*"
            },
            "en": {
                "name": "Me",
                "text": "*Comfort is king. Dressing naturally is my style.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La comodidad es lo primero. Vestirme natural es mi estilo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*やっぱり楽なのが一番。自然体で着るのが僕のスタイルだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le confort avant tout. S'habiller naturellement, c'est mon style.*"
            }
        }
    },
    "day4_casual_mirror": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_outfit_done",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*거울 앞에서 한 바퀴 돌아본다. 흰 셔츠에 청바지… 깔끔하고 부담 없어 보인다. 괜찮아.*"
            },
            "en": {
                "name": "Me",
                "text": "*I do a spin in front of the mirror. White shirt and jeans... clean and effortless. Looks good.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Doy una vuelta frente al espejo. Camisa blanca y jeans... limpio y sin esfuerzo. Se ve bien.*"
            },
            "ja": {
                "name": "僕",
                "text": "*鏡の前でくるっと回ってみる。白シャツにジーンズ…さっぱりしていて気負わない感じだ。いいじゃん。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je fais un tour sur moi-même devant le miroir. Chemise blanche et jean... propre et décontracté. Ça a l'air bien.*"
            }
        }
    },
    "day4_outfit_stylish": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_stylish_mirror",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*오늘은 좀 특별하니까. 이 정도면 괜찮겠지?*"
            },
            "en": {
                "name": "Me",
                "text": "*Today is special, after all. This should be fine, right?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Hoy es especial, después de todo. Esto debería estar bien, ¿no?*"
            },
            "ja": {
                "name": "僕",
                "text": "*今日はちょっと特別だからな。これくらいでいいよね？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Aujourd'hui est spécial, après tout. Ça devrait aller, non ?*"
            }
        }
    },
    "day4_stylish_mirror": {
        "background": "assets/images/background/room_my.png",
        "stats": {
            "Seoyeon": {
                "affinity": 1
            },
            "Yuna": {
                "affinity": 1
            },
            "Dain": {
                "affinity": 1
            },
            "Teacher": {
                "affinity": 1
            },
            "Nurse": {
                "affinity": 1
            }
        },
        "next": "day4_morning_outfit_done",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*자켓 기장도 맞고, 슬랙스도 다리가 길어 보인다. 평소와 다른 내 모습이 낯설지만… 나쁘지 않다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The jacket fits just right, and the slacks make my legs look longer. I look different from usual, which feels a bit unfamiliar... but not bad.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La chaqueta me queda perfecta y los pantalones de vestir hacen que mis piernas se vean más largas. Me veo diferente a lo usual, se siente un poco extraño... pero no está mal.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ジャケットの丈もぴったりだし、スラックスで脚が長く見える。いつもと違う自分の姿が少し違和感あるけど…悪くない。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La veste tombe parfaitement, et le pantalon habillé allonge mes jambes. Je parais différent de d'habitude, ce qui fait un peu bizarre... mais pas mal du tout.*"
            }
        }
    },
    "day4_morning_outfit_done": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_phone",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*좋아, 옷은 결정했다. 이제 핸드폰 확인하고 나가면 돼.*"
            },
            "en": {
                "name": "Me",
                "text": "*Good, outfit decided. Now I just need to check my phone and head out.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Bien, ya decidí la ropa. Solo necesito revisar mi teléfono y salir.*"
            },
            "ja": {
                "name": "僕",
                "text": "*よし、服は決まった。あとはスマホを確認して出かけるだけだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Bien, la tenue est choisie. Maintenant, je vérifie mon téléphone et j'y vais.*"
            }
        }
    },
    "day4_morning_phone": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_message_branch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*핸드폰을 확인하니 메시지가 와 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I check my phone. There's a message waiting.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Reviso mi teléfono. Hay un mensaje esperando.*"
            },
            "ja": {
                "name": "僕",
                "text": "*スマホを確認すると、メッセージが来ていた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je vérifie mon téléphone. Un message m'attend.*"
            }
        }
    },
    "day4_morning_message_branch": {
        "background": "assets/images/background/room_my.png",
        "branches": [
            {
                "next": "day4_morning_date_route",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day4_morning_date_route",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day4_morning_date_route",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day4_morning_date_route",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day4_morning_date_route",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day4_no_date_start"
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
    "day4_morning_date_route": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day4_msg_seoyeon",
                "character": "Seoyeon",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day4_msg_yuna",
                "character": "Yuna",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day4_msg_dain",
                "character": "Dain",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day4_msg_nurse",
                "character": "Nurse",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day4_msg_teacher",
                "character": "Teacher",
                "condition": "day3_teacher_date_confirmed"
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
    "day4_msg_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "setFlag": "day4_date_target_set",
        "next": "day4_morning_reply_seoyeon",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"오늘 약속 잊지 않았지? 😊 공원 분수대 앞에서 10시에 만나! 기대된다~\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"You didn't forget about today, right? 😊 Meet me at the park fountain at 10! I can't wait!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"No olvidaste lo de hoy, ¿verdad? 😊 ¡Nos vemos en la fuente del parque a las 10! ¡Estoy emocionada!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "「今日の約束、忘れてないよね？😊 公園の噴水前で10時に会おう！楽しみ～」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Tu n'as pas oublié pour aujourd'hui, n'est-ce pas ? 😊 Retrouve-moi à la fontaine du parc à 10 heures ! J'ai trop hâte !\""
            }
        }
    },
    "day4_morning_reply_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "next": "day4_msg_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이한테서 메시지가 왔다. 웃는 이모티콘이 귀엽네. 뭐라고 답장하지…*"
            },
            "en": {
                "name": "Me",
                "text": "*A message from Seoyeon. That smiley emoji is cute. What should I reply...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Un mensaje de Seoyeon. Ese emoji sonriente es lindo. ¿Qué le respondo...?*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンからメッセージが来た。笑顔の絵文字がかわいいな。なんて返そう…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Un message de Seoyeon. Cet emoji souriant est mignon. Qu'est-ce que je réponds...*"
            }
        }
    },
    "day4_msg_seoyeon_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day4_reply_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"아 참, 오늘 날씨 진짜 좋다! 산책하기 딱이야~ 선크림 바르고 와!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh, and the weather's so nice today! Perfect for a walk. Don't forget sunscreen!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡Ah, y el clima está increíble hoy! Perfecto para caminar. ¡No olvides el protector solar!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "「あ、そうだ、今日天気すっごくいいよ！散歩にぴったり～日焼け止め塗ってきてね！」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Oh, et il fait tellement beau aujourd'hui ! Parfait pour une promenade. N'oublie pas la crème solaire !\""
            }
        }
    },
    "day4_reply_seoyeon_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "next": "day4_seoyeon_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*연달아 메시지가 온다. 서연이도 기대하고 있나 보다. 나도 빨리 준비해서 나가야지.*"
            },
            "en": {
                "name": "Me",
                "text": "*She keeps sending messages back to back. She must be excited too. I should hurry up and get ready.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sigue mandando mensajes uno tras otro. Parece que ella también está emocionada. Mejor me apuro a prepararme.*"
            },
            "ja": {
                "name": "僕",
                "text": "*立て続けにメッセージが来る。ソヨンも楽しみにしてるみたいだ。僕も早く準備して出かけなきゃ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Elle envoie des messages les uns après les autres. Elle doit être excitée aussi. Je ferais mieux de me dépêcher.*"
            }
        }
    },
    "day4_seoyeon_ready": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "next": "day4_morning_loyalty_check",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"그럼 이따 봐~!! 😆\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"See you soon!! 😆\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡¡Nos vemos al rato!! 😆\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "「じゃあ後でね～！！😆」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"À tout à l'heure !! 😆\""
            }
        }
    },
    "day4_msg_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "setFlag": "day4_date_target_set",
        "next": "day4_morning_reply_yuna",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…10시. 역 앞 카페. 늦으면 모른다.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...10 o'clock. Café by the station. Don't be late.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...10 en punto. Café frente a la estación. No llegues tarde.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "「…10時。駅前のカフェ。遅れたら知らない。」"
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...10 heures. Le café devant la gare. Ne sois pas en retard.\""
            }
        }
    },
    "day4_morning_reply_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day4_msg_yuna_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나답게 짧고 간결하다. 근데 이런 게 유나의 매력이지. '알겠어, 안 늦을게!' 라고 보내자.*"
            },
            "en": {
                "name": "Me",
                "text": "*Short and to the point — so typical of Yuna. But that's part of her charm. I type back, 'Got it, I won't be late!'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Corto y directo — típico de Yuna. Pero eso es parte de su encanto. Le respondo: '¡Entendido, no llegaré tarde!'*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナらしく短くて簡潔だ。でもそこがユナの魅力なんだよな。「了解、遅れないよ！」と返した。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Court et direct — tellement typique de Yuna. Mais c'est ce qui fait son charme. Je réponds : 'Compris, je ne serai pas en retard !'*"
            }
        }
    },
    "day4_msg_yuna_2": {
        "character": "assets/images/characters/yuna_shy.png",
        "silhouette": true,
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "day4_reply_yuna_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…별거 아닌데. 그냥 커피 마시고 싶었을 뿐이야. …혼자는 좀 그래서.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...It's nothing special. I just wanted some coffee. ...It's just weird going alone.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...No es nada especial. Solo quería un café. ...Es raro ir sola.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "「…別に大したことじゃない。ただコーヒーが飲みたかっただけ。…一人はちょっとあれだから。」"
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Ce n'est rien de spécial. J'avais juste envie d'un café. ...C'est juste bizarre d'y aller seule.\""
            }
        }
    },
    "day4_reply_yuna_2": {
        "character": "assets/images/characters/yuna_shy.png",
        "silhouette": true,
        "next": "day4_yuna_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…이게 유나식 '같이 가고 싶다'인 거지? 입가에 미소가 번진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...That's Yuna-speak for 'I want to go together,' right? A smile spreads across my face.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...Esa es la forma de Yuna de decir 'quiero ir contigo', ¿verdad? Una sonrisa se dibuja en mi cara.*"
            },
            "ja": {
                "name": "僕",
                "text": "*…これがユナ流の「一緒に行きたい」ってことだよね？口元に笑みが広がる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...C'est la façon de Yuna de dire 'je veux y aller ensemble', n'est-ce pas ? Un sourire s'étend sur mon visage.*"
            }
        }
    },
    "day4_yuna_ready": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day4_morning_loyalty_check",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…빨리 와.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Hurry up.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Apúrate.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "「…早く来て。」"
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Dépêche-toi.\""
            }
        }
    },
    "day4_msg_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "setFlag": "day4_date_target_set",
        "next": "day4_morning_reply_dain",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야!! 오늘 연습 끝나고 만나자!! 체육관 앞에서 11시!! 늦지 마!!!! 🏐\""
            },
            "en": {
                "name": "Dain",
                "text": "\"HEY!! Let's meet up after practice today!! In front of the gym at 11!! Don't be late!!!! 🏐\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡¡OYE!! ¡¡Nos vemos después de la práctica hoy!! ¡¡Frente al gimnasio a las 11!! ¡¡¡¡No llegues tarde!!!! 🏐\""
            },
            "ja": {
                "name": "ダイン",
                "text": "「ねぇ！！今日練習終わったら会おう！！体育館の前で11時！！遅れないでよ！！！！🏐」"
            },
            "fr": {
                "name": "Dain",
                "text": "\"HÉ !! On se retrouve après l'entraînement aujourd'hui !! Devant le gymnase à 11 heures !! Ne sois pas en retard !!!! 🏐\""
            }
        }
    },
    "day4_morning_reply_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "next": "day4_msg_dain_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*느낌표가 엄청 많네… 다인이의 에너지가 메시지에서도 느껴진다. 답장을 보내야지.*"
            },
            "en": {
                "name": "Me",
                "text": "*So many exclamation marks... Dain's energy comes through even in her texts. Better send a reply.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Tantos signos de exclamación... La energía de Dain se siente hasta en sus mensajes. Mejor le contesto.*"
            },
            "ja": {
                "name": "僕",
                "text": "*感嘆符がすごく多いな…ダインのエネルギーはメッセージからも伝わってくる。返信しなきゃ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Tellement de points d'exclamation... L'énergie de Dain transparaît même dans ses messages. Il faut que je réponde.*"
            }
        }
    },
    "day4_msg_dain_2": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "day4_reply_dain_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"아 맞다!! 오늘 연습 끝나면 배 엄청 고플 거야!! 맛집 알아봐 줘!! 고기 먹고 싶어!!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh right!! I'm gonna be STARVING after practice!! Find us a good restaurant!! I want meat!!!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡¡Ah, cierto!! ¡¡Voy a estar MUERTA de hambre después de la práctica!! ¡¡Busca un buen restaurante!! ¡¡¡Quiero carne!!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "「あ、そうだ！！練習終わったらめっちゃお腹空いてるはず！！おいしいお店探しといて！！お肉食べたい！！！」"
            },
            "fr": {
                "name": "Dain",
                "text": "\"Ah, c'est vrai !! Je vais être AFFAMÉE après l'entraînement !! Trouve-nous un bon restaurant !! Je veux de la viande !!!\""
            }
        }
    },
    "day4_reply_dain_2": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "next": "day4_dain_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*맛집 검색까지 시키는 건가… 하긴, 다인이랑 밥 먹는 것도 나쁘지 않다. 아니, 기대된다.*"
            },
            "en": {
                "name": "Me",
                "text": "*She's even making me look up restaurants... Then again, eating with Dain doesn't sound bad. No — I'm actually looking forward to it.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Hasta me pone a buscar restaurantes... Aunque comer con Dain no suena mal. No — de hecho me emociona.*"
            },
            "ja": {
                "name": "僕",
                "text": "*レストランまで探させるのか…まあ、ダインとご飯食べるのも悪くない。いや、楽しみだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Elle me fait même chercher des restaurants... Cela dit, manger avec Dain n'a rien de désagréable. Non — en fait, j'ai hâte.*"
            }
        }
    },
    "day4_dain_ready": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "next": "day4_morning_loyalty_check",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"그럼 이따 보자!! 기대해!!! 💪\""
            },
            "en": {
                "name": "Dain",
                "text": "\"See you later!! Get excited!!! 💪\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡¡Nos vemos al rato!! ¡¡¡Emociónate!!! 💪\""
            },
            "ja": {
                "name": "ダイン",
                "text": "「じゃあ後でね！！楽しみにしてて！！！💪」"
            },
            "fr": {
                "name": "Dain",
                "text": "\"À plus tard !! Prépare-toi !!! 💪\""
            }
        }
    },
    "day4_msg_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "setFlag": "day4_date_target_set",
        "next": "day4_morning_reply_nurse",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"오늘 괜찮으면… 시내 미술관은 어때? 보고 싶은 전시가 있거든. 11시에 미술관 앞에서 만나자.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"If you're free today... how about the art museum downtown? There's an exhibition I'd like to see. Let's meet in front of the museum at 11.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Si estás libre hoy... ¿qué tal el museo de arte del centro? Hay una exposición que quiero ver. Nos vemos frente al museo a las 11.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "「今日もし暇なら…市内の美術館はどう？見たい展示があるの。11時に美術館の前で会おう。」"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Si tu es libre aujourd'hui... que dirais-tu du musée d'art en ville ? Il y a une exposition que j'aimerais voir. Retrouvons-nous devant le musée à 11 heures.\""
            }
        }
    },
    "day4_morning_reply_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day4_msg_nurse_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님과 미술관이라… 왠지 두근거린다. '네, 꼭 갈게요!'라고 보냈다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The art museum with the school nurse... My heart is fluttering. I replied, 'Yes, I'll definitely be there!'*"
            },
            "es": {
                "name": "Yo",
                "text": "*El museo de arte con la enfermera... Mi corazón late con fuerza. Respondí: '¡Sí, ahí estaré!'*"
            },
            "ja": {
                "name": "僕",
                "text": "*保健先生と美術館か…なんだかドキドキする。「はい、絶対行きます！」と返した。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le musée d'art avec l'infirmière scolaire... Mon cœur s'emballe. J'ai répondu : 'Oui, j'y serai sans faute !'*"
            }
        }
    },
    "day4_msg_nurse_2": {
        "character": "assets/images/characters/nurse_shy.png",
        "silhouette": true,
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "day4_reply_nurse_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"기대하고 있을게. 아, 그리고… 오늘은 선생님이라고 부르지 마. 그냥 편하게 만나는 거야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"I'll be looking forward to it. Oh, and... don't call me 'ma'am' today. Let's just meet casually.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Estaré esperando con ganas. Ah, y... hoy no me digas 'señorita'. Solo estamos saliendo como amigos.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "「楽しみにしてるね。あ、それと…今日は先生って呼ばないで。ただの気軽な約束だから。」"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"J'ai hâte d'y être. Oh, et... ne m'appelle pas 'madame' aujourd'hui. On se retrouve juste de manière décontractée.\""
            }
        }
    },
    "day4_reply_nurse_2": {
        "character": "assets/images/characters/nurse_shy.png",
        "silhouette": true,
        "next": "day4_nurse_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이라고 부르지 말라니… 심장이 멈추는 줄 알았다. 오늘은 정말 특별한 날이 될 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Don't call her 'ma'am'...? I thought my heart was going to stop. Today is going to be a truly special day.*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿Que no la llame 'señorita'...? Pensé que mi corazón iba a detenerse. Hoy va a ser un día verdaderamente especial.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生って呼ばないで…だって？心臓が止まるかと思った。今日は本当に特別な日になりそうだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Ne pas l'appeler 'madame'... ? J'ai cru que mon cœur allait s'arrêter. Aujourd'hui va être une journée vraiment spéciale.*"
            }
        }
    },
    "day4_nurse_ready": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day4_morning_loyalty_check",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"그럼 이따 봐 😊\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"See you later then 😊\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Nos vemos al rato entonces 😊\""
            },
            "ja": {
                "name": "保健先生",
                "text": "「じゃあ後でね 😊」"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"À tout à l'heure alors 😊\""
            }
        }
    },
    "day4_msg_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "setFlag": "day4_date_target_set",
        "next": "day4_morning_reply_teacher",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"오늘 점심쯤에 학교 근처 카페에서 볼까? 할 얘기가 있어서. 12시에 만나자.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Want to meet at the café near school around lunch? There's something I'd like to talk about. Let's meet at 12.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"¿Quieres vernos en el café cerca de la escuela a la hora del almuerzo? Hay algo de lo que quiero hablar. Nos vemos a las 12.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "「今日のお昼頃、学校近くのカフェで会わない？話したいことがあって。12時に会おう。」"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"On se retrouve au café près de l'école vers midi ? J'aimerais te parler de quelque chose. Retrouvons-nous à 12 heures.\""
            }
        }
    },
    "day4_morning_reply_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day4_msg_teacher_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*담임선생님이랑 학교 밖에서 만나다니… 긴장된다. 바로 답장을 보냈다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Meeting the homeroom teacher outside of school... I'm nervous. I sent a reply right away.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Encontrarme con la profesora fuera de la escuela... Estoy nervioso. Le respondí de inmediato.*"
            },
            "ja": {
                "name": "僕",
                "text": "*担任先生と学校の外で会うなんて…緊張する。すぐに返信を送った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Rencontrer le professeur principal en dehors de l'école... Je suis nerveux. J'ai envoyé une réponse tout de suite.*"
            }
        }
    },
    "day4_msg_teacher_2": {
        "character": "assets/images/characters/teacher_smile.png",
        "silhouette": true,
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "day4_reply_teacher_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"사복으로 갈 테니까 못 알아봐도 놀라지 마. …농담이야. 아마 알아볼 거야.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"I'll be in casual clothes, so don't be surprised if you don't recognize me. ...Just kidding. You probably will.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Voy a ir con ropa casual, así que no te sorprendas si no me reconoces. ...Es broma. Probablemente sí me reconozcas.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "「私服で行くから、わからなくても驚かないでね。…冗談。たぶんわかるよ。」"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"Je serai en tenue décontractée, alors ne sois pas surpris si tu ne me reconnais pas. ...Je plaisante. Tu me reconnaîtras sûrement.\""
            }
        }
    },
    "day4_reply_teacher_2": {
        "character": "assets/images/characters/teacher_smile.png",
        "silhouette": true,
        "next": "day4_teacher_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*담임선생님이 농담을 하다니. 평소에 보여주지 않던 모습이라 더 신선하다. 사복 모습은 어떨까.*"
            },
            "en": {
                "name": "Me",
                "text": "*The homeroom teacher cracking jokes? That's a side I've never seen before — it feels refreshing. I wonder what she looks like in casual clothes.*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿La profesora haciendo bromas? Es un lado que nunca había visto — se siente refrescante. Me pregunto cómo se verá con ropa casual.*"
            },
            "ja": {
                "name": "僕",
                "text": "*担任先生が冗談を言うなんて。普段見せない一面だから余計に新鮮だ。私服姿はどんな感じなんだろう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le professeur principal qui fait des blagues ? C'est un côté que je n'avais jamais vu — c'est rafraîchissant. Je me demande à quoi elle ressemble en tenue décontractée.*"
            }
        }
    },
    "day4_teacher_ready": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day4_morning_loyalty_check",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"늦지 마라. 기다리는 건 싫어하니까.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Don't be late. I hate waiting.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"No llegues tarde. Odio esperar.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "「遅れるなよ。待つのは嫌いだから。」"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"Ne sois pas en retard. Je déteste attendre.\""
            }
        }
    },
    "day4_morning_loyalty_check": {
        "background": "assets/images/background/room_my.png",
        "branches": [
            {
                "next": "day4_morning_loyalty_boost",
                "condition": "day3_loyalty_bonus"
            },
            {
                "next": "day4_morning_lastcheck"
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
    "day4_morning_loyalty_boost": {
        "background": "assets/images/background/room_my.png",
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
            "Teacher": {
                "affinity": 3
            },
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "day4_morning_lastcheck",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*한 사람만을 위해 준비하고 있다는 사실이… 오히려 마음을 단단하게 해준다. 오늘은 오직 그 사람만 생각하자.*"
            },
            "en": {
                "name": "Me",
                "text": "*The fact that I'm getting ready for just one person... somehow makes me feel more certain. Today, I'll think only of them.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El hecho de que me estoy preparando para una sola persona... de alguna manera me hace sentir más seguro. Hoy, solo pensaré en esa persona.*"
            },
            "ja": {
                "name": "僕",
                "text": "*たった一人のために準備しているという事実が…逆に気持ちをしっかりさせてくれる。今日はあの人のことだけ考えよう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le fait que je me prépare pour une seule personne... me donne paradoxalement plus d'assurance. Aujourd'hui, je ne penserai qu'à elle.*"
            }
        }
    },
    "day4_morning_lastcheck": {
        "character": null,
        "next": "day4_morning_wallet",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*마지막으로 거울을 본다. …괜찮다. 아니, 꽤 괜찮아 보인다. 자신감을 갖자.*"
            },
            "en": {
                "name": "Me",
                "text": "*One last look in the mirror. ...I look fine. No — I actually look pretty good. Let's be confident.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Un último vistazo al espejo. ...Me veo bien. No — de hecho me veo bastante bien. Vamos con confianza.*"
            },
            "ja": {
                "name": "僕",
                "text": "*最後に鏡を見る。…大丈夫だ。いや、なかなかいい感じに見える。自信を持とう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Un dernier coup d'œil dans le miroir. ...Ça va. Non — j'ai plutôt fière allure. Ayons confiance.*"
            }
        }
    },
    "day4_morning_wallet": {
        "character": null,
        "next": "day4_morning_lock",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*지갑, 핸드폰, 열쇠. 하나씩 주머니에 넣는다. 혹시 모르니까 손수건도 챙기자.*"
            },
            "en": {
                "name": "Me",
                "text": "*Wallet, phone, keys. I put each one in my pockets. Better bring a handkerchief too, just in case.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cartera, teléfono, llaves. Los meto uno por uno en mis bolsillos. Mejor llevo un pañuelo también, por si acaso.*"
            },
            "ja": {
                "name": "僕",
                "text": "*財布、スマホ、鍵。一つずつポケットに入れる。念のためハンカチも持っていこう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Portefeuille, téléphone, clés. Je les mets un par un dans mes poches. Mieux vaut prendre un mouchoir aussi, au cas où.*"
            }
        }
    },
    "day4_morning_lock": {
        "character": null,
        "next": "day4_morning_outside",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*현관문을 나서며 열쇠로 문을 잠근다. 딸깍 — 마치 새로운 하루의 시작을 알리는 소리 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I step out the front door and lock it behind me. Click — like the sound of a brand new day beginning.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Salgo por la puerta principal y la cierro con llave. Clic — como el sonido de un nuevo día comenzando.*"
            },
            "ja": {
                "name": "僕",
                "text": "*玄関を出て鍵をかける。カチッ――まるで新しい一日の始まりを告げる音みたいだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je sors par la porte d'entrée et je verrouille derrière moi. Clic — comme le son d'une toute nouvelle journée qui commence.*"
            }
        }
    },
    "day4_morning_outside": {
        "character": null,
        "background": "assets/images/background/street.png",
        "next": "day4_morning_depart",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*밖으로 나오자 따사로운 바람이 불어온다. 벚꽃 향기가 코끝을 스친다. 거리에는 활기가 넘친다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A warm breeze greets me outside. The scent of cherry blossoms brushes past. The streets are full of life.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Una brisa cálida me recibe afuera. El aroma de los cerezos en flor me roza la nariz. Las calles están llenas de vida.*"
            },
            "ja": {
                "name": "僕",
                "text": "*外に出ると暖かい風が吹いてくる。桜の香りが鼻先をかすめる。通りは活気にあふれている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Une brise tiède m'accueille dehors. Le parfum des cerisiers en fleurs effleure mon nez. Les rues sont pleines de vie.*"
            }
        }
    },
    "day4_morning_depart": {
        "background": "assets/images/background/street.png",
        "character": null,
        "fade": true,
        "next": "day4_arrive",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*좋아, 준비 완료. 가자!*"
            },
            "en": {
                "name": "Me",
                "text": "*Alright, all set. Let's go!*"
            },
            "es": {
                "name": "Yo",
                "text": "*Bien, todo listo. ¡Vamos!*"
            },
            "ja": {
                "name": "僕",
                "text": "*よし、準備完了。行こう！*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Très bien, tout est prêt. Allons-y !*"
            }
        }
    },
    "day4_no_date_start": {
        "next": "day4_no_date_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…핸드폰을 확인했지만, 메시지는 없다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...I check my phone, but there are no messages.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...Reviso mi teléfono, pero no hay mensajes.*"
            },
            "ja": {
                "name": "僕",
                "text": "*…スマホを確認したけど、メッセージはなかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Je vérifie mon téléphone, mais il n'y a aucun message.*"
            }
        }
    },
    "day4_no_date_2": {
        "next": "day4_no_date_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*주말인데 약속이 없다니. 전학 와서 벌써 나흘이 지났는데… 뭘 한 걸까.*"
            },
            "en": {
                "name": "Me",
                "text": "*It's the weekend and I have no plans. It's already been four days since I transferred... What have I been doing?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Es fin de semana y no tengo planes. Ya han pasado cuatro días desde que me transferí... ¿Qué he estado haciendo?*"
            },
            "ja": {
                "name": "僕",
                "text": "*週末なのに予定がないなんて。転校してきてもう四日経ったのに…何やってたんだろう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*C'est le week-end et je n'ai aucun plan. Cela fait déjà quatre jours depuis mon transfert... Qu'est-ce que j'ai fait de tout ce temps ?*"
            }
        }
    },
    "day4_no_date_3": {
        "choices": [
            {
                "next": "day4_no_date_park"
            },
            {
                "next": "day4_no_date_home"
            },
            {
                "next": "day4_no_date_cafe"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그래도 이 좋은 날씨에 집에만 있을 수는 없지. 어디라도 나가 볼까.*",
                "choices": [
                    "편의점에서 간식 사서 공원 가기",
                    "집에서 뒹굴뒹굴하기",
                    "동네 카페에 가서 시간 보내기"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Still, I can't just stay home on a beautiful day like this. Maybe I should go out somewhere.*",
                "choices": [
                    "Grab snacks from the convenience store and head to the park",
                    "Just laze around at home",
                    "Kill time at a local café"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Aun así, no puedo quedarme en casa con un día tan bonito. Tal vez debería salir a algún lugar.*",
                "choices": [
                    "Comprar snacks en la tienda e ir al parque",
                    "Quedarme en casa sin hacer nada",
                    "Pasar el rato en un café local"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*それでもこんないい天気に家にいるわけにはいかない。どこか出かけてみようかな。*",
                "choices": [
                    "コンビニでおやつを買って公園に行く",
                    "家でゴロゴロする",
                    "近所のカフェで時間を潰す"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Quand même, je ne peux pas rester chez moi par une si belle journée. Je devrais peut-être sortir quelque part.*",
                "choices": [
                    "Acheter des snacks à la supérette et aller au parc",
                    "Traîner à la maison",
                    "Passer le temps dans un café du coin"
                ]
            }
        }
    },
    "day4_no_date_park": {
        "background": "assets/images/background/park.png",
        "next": "day4_no_date_park_weather",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*편의점에서 삼각김밥과 음료수를 사서 공원으로 향했다. 벤치에 앉아 혼자 간식을 먹는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I buy a rice ball and a drink from the convenience store and head to the park. I sit on a bench, eating alone.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Compro una bola de arroz y una bebida en la tienda y voy al parque. Me siento en una banca, comiendo solo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*コンビニでおにぎりと飲み物を買って公園に向かった。ベンチに座って一人で食べる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'achète un onigiri et une boisson au konbini et je me dirige vers le parc. Je m'assieds sur un banc et mange seul.*"
            }
        }
    },
    "day4_no_date_park_weather": {
        "background": "assets/images/background/park.png",
        "next": "day4_no_date_lonely",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*벚꽃 잎이 바람에 날려 어깨 위에 내려앉는다. 아름다운 풍경인데… 혼자 보니까 좀 쓸쓸하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Cherry blossom petals blown by the wind land on my shoulder. It's a beautiful scene... but sitting here alone, it feels a little lonely.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Los pétalos de cerezo llevados por el viento caen en mi hombro. Es una escena hermosa... pero estando aquí solo, se siente un poco solitario.*"
            },
            "ja": {
                "name": "僕",
                "text": "*桜の花びらが風に舞って肩の上に降りてくる。綺麗な景色なのに…一人で見ると少し寂しい。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Des pétales de cerisier portés par le vent se posent sur mon épaule. C'est un beau spectacle... mais assis ici tout seul, c'est un peu solitaire.*"
            }
        }
    },
    "day4_no_date_home": {
        "next": "day4_no_date_home_bored",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*침대에 누워서 천장만 바라봤다. 이래도 되나 싶다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I lie in bed staring at the ceiling. Is this really how I should be spending my day?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me acuesto en la cama mirando el techo. ¿De verdad debería pasar mi día así?*"
            },
            "ja": {
                "name": "僕",
                "text": "*ベッドに寝転がって天井を見つめた。こんなんでいいのかな。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je suis allongé sur mon lit, les yeux rivés au plafond. Est-ce vraiment comme ça que je devrais passer ma journée ?*"
            }
        }
    },
    "day4_no_date_home_bored": {
        "next": "day4_no_date_lonely",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*SNS를 열었더니 동급생들이 올린 주말 사진이 가득하다. 다들 즐거워 보이는데… 나만 이런 건가.*"
            },
            "en": {
                "name": "Me",
                "text": "*I open social media and it's filled with weekend photos from classmates. Everyone looks so happy... Am I the only one like this?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Abro las redes sociales y están llenas de fotos del fin de semana de mis compañeros. Todos se ven tan felices... ¿Soy el único así?*"
            },
            "ja": {
                "name": "僕",
                "text": "*SNSを開いたらクラスメイトの週末の写真がいっぱいだ。みんな楽しそうなのに…僕だけこんな感じなのかな。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ouvre les réseaux sociaux et c'est rempli de photos du week-end de mes camarades. Tout le monde a l'air si heureux... Suis-je le seul dans cette situation ?*"
            }
        }
    },
    "day4_no_date_cafe": {
        "background": "assets/images/background/cafe.png",
        "next": "day4_no_date_cafe_sit",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*동네 카페에 들어가 아메리카노를 시켰다. 창가 자리에 앉아 밖을 내다본다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I walk into a local café and order an Americano. I sit by the window and gaze outside.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Entro a un café del barrio y pido un americano. Me siento junto a la ventana y miro afuera.*"
            },
            "ja": {
                "name": "僕",
                "text": "*近所のカフェに入ってアメリカーノを頼んだ。窓際の席に座って外を眺める。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'entre dans un café du quartier et commande un americano. Je m'installe près de la fenêtre et regarde dehors.*"
            }
        }
    },
    "day4_no_date_cafe_sit": {
        "background": "assets/images/background/cafe.png",
        "next": "day4_no_date_lonely",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*커플들이 지나가는 거리를 바라보며 커피를 홀짝인다. 쓴맛이 유독 진하게 느껴진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I watch couples passing by on the street, sipping my coffee. The bitterness feels particularly strong today.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Veo parejas pasar por la calle mientras tomo mi café. El amargor se siente especialmente fuerte hoy.*"
            },
            "ja": {
                "name": "僕",
                "text": "*通りを行くカップルを眺めながらコーヒーをすする。苦みがいつもより強く感じる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je regarde les couples passer dans la rue en sirotant mon café. L'amertume me semble particulièrement forte aujourd'hui.*"
            }
        }
    },
    "day4_no_date_lonely": {
        "background": "assets/images/background/park.png",
        "next": "day4_no_date_wander",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…이렇게 혼자 토요일을 보내다니. 그래도 가만히만 있을 수는 없어. 좀 걸어 보자.*"
            },
            "en": {
                "name": "Me",
                "text": "*...Spending Saturday all alone like this. But I can't just sit still. Let me take a walk.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...Pasar el sábado completamente solo así. Pero no puedo quedarme quieto. Voy a caminar un poco.*"
            },
            "ja": {
                "name": "僕",
                "text": "*…こうして一人で土曜日を過ごすなんて。でもじっとしてはいられない。少し歩いてみよう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Passer mon samedi tout seul comme ça. Mais je ne peux pas rester sans rien faire. Allons faire un tour.*"
            }
        }
    },
    "day4_no_date_wander": {
        "background": "assets/images/background/street.png",
        "next": "day4_no_date_encounter",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*별생각 없이 동네를 걷다 보니 공원 근처 편의점 앞에 와 있다. 그때, 낯익은 뒷모습이 눈에 들어온다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Walking aimlessly through the neighborhood, I end up in front of the convenience store near the park. That's when I notice a familiar figure from behind.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Caminando sin rumbo por el vecindario, termino frente a la tienda cerca del parque. Es entonces cuando noto una figura familiar de espaldas.*"
            },
            "ja": {
                "name": "僕",
                "text": "*何も考えずに街を歩いていたら、公園近くのコンビニの前に来ていた。その時、見覚えのある後ろ姿が目に入った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En déambulant sans but dans le quartier, je me retrouve devant le konbini près du parc. C'est alors que je remarque une silhouette familière de dos.*"
            }
        }
    },
    "day4_no_date_encounter": {
        "background": "assets/images/background/street.png",
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day4_no_date_meet_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day4_no_date_meet_yuna",
                "character": "Yuna"
            },
            {
                "next": "day4_no_date_meet_dain",
                "character": "Dain"
            },
            {
                "next": "day4_no_date_meet_nurse",
                "character": "Nurse"
            },
            {
                "next": "day4_no_date_meet_teacher",
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
    "day4_no_date_meet_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day4_no_date_chat_seoyeon",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"어? 너 여기 웬일이야? 나도 산책 나왔거든! 같이 걸을래?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Huh? What are you doing here? I just came out for a walk! Wanna join me?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¿Eh? ¿Qué haces aquí? ¡Yo también salí a caminar! ¿Quieres acompañarme?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "「え？こんなところでどうしたの？私も散歩に来たの！一緒に歩こうよ？」"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Hein ? Qu'est-ce que tu fais ici ? Je suis juste sortie me promener ! Tu veux m'accompagner ?\""
            }
        }
    },
    "day4_no_date_chat_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day4_no_date_after_encounter",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이가 활짝 웃으며 다가온다. 혼자라서 쓸쓸했는데, 서연이를 만나다니. 운명인가.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon walks up with a bright smile. I was feeling so lonely being alone, and now I run into her. Must be fate.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon se acerca con una gran sonrisa. Me sentía tan solo, y ahora me la encuentro. Debe ser el destino.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンが笑顔で近づいてくる。一人で寂しかったのに、ソヨンに会えるなんて。運命かな。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon s'approche avec un grand sourire. Je me sentais si seul, et voilà que je tombe sur elle. C'est sûrement le destin.*"
            }
        }
    },
    "day4_no_date_meet_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day4_no_date_chat_yuna",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…어. 너도 혼자야? …나도.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Oh. You're alone too? ...Same here.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Oh. ¿Tú también estás solo? ...Yo también.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "「…あ。あんたも一人？…私も。」"
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Oh. Tu es seul aussi ? ...Moi aussi.\""
            }
        }
    },
    "day4_no_date_chat_yuna": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "day4_no_date_after_encounter",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 이어폰 한쪽을 빼며 나를 올려다본다. 조용한 눈빛이 왠지 따뜻하게 느껴진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna pulls out one earbud and looks up at me. Her quiet gaze feels surprisingly warm.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna se quita un audífono y me mira. Su mirada tranquila se siente sorprendentemente cálida.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナがイヤホンの片方を外して僕を見上げる。静かなまなざしがなぜか温かく感じる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna retire un écouteur et lève les yeux vers moi. Son regard calme est étonnamment chaleureux.*"
            }
        }
    },
    "day4_no_date_meet_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day4_no_date_chat_dain",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"엥?! 여기서 만나다니!! 나 연습 끝나고 음료수 사러 왔거든!! 같이 뭐 할래?!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Whoa?! Running into you here!! I came to grab a drink after practice!! Wanna hang out?!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡¿Qué?! ¡¡Encontrarte aquí!! ¡¡Vine a comprar algo de tomar después de la práctica!! ¡¿Quieres pasar el rato?!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "「えっ？！こんなところで会うなんて！！練習終わって飲み物買いに来たの！！一緒に何かする？！」"
            },
            "fr": {
                "name": "Dain",
                "text": "\"Whoa ?! Te croiser ici !! Je suis venue acheter un truc à boire après l'entraînement !! On traîne ensemble ?!\""
            }
        }
    },
    "day4_no_date_chat_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day4_no_date_after_encounter",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 운동복 차림으로 씩씩하게 다가온다. 이 에너지 넘치는 만남이 반갑다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain walks up energetically in her workout clothes. I'm glad for this lively encounter.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dain se acerca con energía en su ropa deportiva. Me alegra este encuentro tan animado.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインが運動着姿で元気に近づいてくる。この活気あふれる出会いが嬉しい。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain s'approche pleine d'énergie dans ses vêtements de sport. Je suis content de cette rencontre pleine de vie.*"
            }
        }
    },
    "day4_no_date_meet_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day4_no_date_chat_nurse",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, 이런 데서 만나네. 나도 잠깐 산책 나온 거야. 같이 걸을까?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh my, fancy meeting you here. I just stepped out for a walk too. Want to walk together?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Vaya, qué coincidencia encontrarte aquí. Yo también salí a caminar. ¿Quieres caminar juntos?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "「あら、こんなところで会うなんて。私も散歩に出てきたの。一緒に歩こうか？」"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Oh, quelle surprise de te voir ici. Je suis sortie me promener aussi. On marche ensemble ?\""
            }
        }
    },
    "day4_no_date_chat_nurse": {
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day4_no_date_after_encounter",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 사복 차림을 금방은 못 알아볼 뻔했다. 학교 밖에서 보니 분위기가 다르다. 심장이 뛴다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I almost didn't recognize her in casual clothes. She looks so different outside of school. My heart starts racing.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Casi no la reconozco con ropa casual. Se ve tan diferente fuera de la escuela. Mi corazón empieza a acelerarse.*"
            },
            "ja": {
                "name": "僕",
                "text": "*私服姿をすぐには見分けられなかった。学校の外で見ると雰囲気が違う。心臓がドキドキする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai failli ne pas la reconnaître en vêtements décontractés. Elle a l'air si différente en dehors de l'école. Mon cœur se met à battre la chamade.*"
            }
        }
    },
    "day4_no_date_meet_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "stats": {
            "Teacher": {
                "affinity": 5
            }
        },
        "next": "day4_no_date_chat_teacher",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…너 여기서 뭐 해? 하, 선생도 주말은 있거든. 뭐, 잠깐 차라도 마실래?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...What are you doing here? Heh, teachers get weekends too, you know. Well, want to grab a coffee or something?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...¿Qué haces aquí? Ja, los profesores también tienen fines de semana, ¿sabes? Bueno, ¿quieres tomar un café o algo?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "「…こんなところで何してるの？ふん、先生だって週末はあるんだよ。まあ、お茶でもする？」"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"...Qu'est-ce que tu fais ici ? Hé, les profs aussi ont droit au week-end, tu sais. Bon, tu veux prendre un café ou quelque chose ?\""
            }
        }
    },
    "day4_no_date_chat_teacher": {
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day4_no_date_after_encounter",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*담임선생님이 무표정하게 말하지만, 먼저 말을 걸어준 거잖아. 입꼬리가 살짝 올라간 것도 봤다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The homeroom teacher says it with a straight face, but she's the one who started the conversation. I even caught the slight curve of a smile on her lips.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La profesora lo dice con cara seria, pero ella fue la que inició la conversación. Incluso noté una leve curva de sonrisa en sus labios.*"
            },
            "ja": {
                "name": "僕",
                "text": "*担任先生は無表情で言うけど、話しかけてきたのは先生の方じゃないか。口角がわずかに上がっているのも見えた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le professeur principal dit ça avec un air détaché, mais c'est elle qui a engagé la conversation. J'ai même aperçu l'ombre d'un sourire sur ses lèvres.*"
            }
        }
    },
    "day4_no_date_after_encounter": {
        "character": null,
        "next": "day4_no_date_reflect",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*잠시 같이 걸으며 이런저런 얘기를 나눴다. 주말이 이렇게 바뀔 줄이야.*"
            },
            "en": {
                "name": "Me",
                "text": "*We walked together for a while, chatting about this and that. I never imagined my weekend would turn out like this.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Caminamos juntos un rato, hablando de esto y aquello. Nunca imaginé que mi fin de semana terminaría así.*"
            },
            "ja": {
                "name": "僕",
                "text": "*しばらく一緒に歩きながらいろんな話をした。週末がこんなふうに変わるなんて。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Nous avons marché ensemble un moment, discutant de tout et de rien. Je n'aurais jamais imaginé que mon week-end se passerait comme ça.*"
            }
        }
    },
    "day4_no_date_reflect": {
        "character": null,
        "next": "day4_no_date_sunset",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*약속도 없이 시작한 하루였는데… 이 우연 하나만으로도 오늘이 특별해진 기분이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*It started as a day with no plans... but just this one chance encounter made today feel special.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Empezó como un día sin planes... pero solo este encuentro casual hizo que hoy se sintiera especial.*"
            },
            "ja": {
                "name": "僕",
                "text": "*予定もなく始まった一日だったのに…この偶然の出会いひとつで、今日が特別に感じる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La journée avait commencé sans aucun plan... mais cette simple rencontre fortuite a rendu aujourd'hui spécial.*"
            }
        }
    },
    "day4_no_date_sunset": {
        "character": null,
        "background": "assets/images/background/street.png",
        "next": "day4_no_date_evening",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어느새 노을이 번지기 시작한다. 하늘이 주황빛으로 물든다. 나쁘지 않은 하루였어.*"
            },
            "en": {
                "name": "Me",
                "text": "*Before I know it, the sunset is starting to spread. The sky turns orange. It wasn't a bad day after all.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sin darme cuenta, el atardecer empieza a extenderse. El cielo se tiñe de naranja. No fue un mal día después de todo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*いつの間にか夕焼けが広がり始めた。空がオレンジ色に染まる。悪くない一日だった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Sans que je m'en rende compte, le coucher de soleil commence à s'étendre. Le ciel vire à l'orange. Ce n'était pas une si mauvaise journée, finalement.*"
            }
        }
    },
    "day4_no_date_evening": {
        "background": "assets/images/background/street.png",
        "character": null,
        "fade": true,
        "next": "day4_night_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집으로 돌아가는 길. 오늘을 떠올리면 자연스럽게 미소가 지어진다. 내일이 기대된다.*"
            },
            "en": {
                "name": "Me",
                "text": "*On the way home. Thinking back on today, a smile naturally forms on my face. I'm already looking forward to Monday.*"
            },
            "es": {
                "name": "Yo",
                "text": "*De camino a casa. Recordando el día de hoy, una sonrisa se forma naturalmente en mi cara. Ya tengo ganas de que sea lunes.*"
            },
            "ja": {
                "name": "僕",
                "text": "*家に帰る道。今日のことを思い返すと自然に笑みがこぼれる。月曜日が楽しみだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Sur le chemin du retour. En repensant à aujourd'hui, un sourire se dessine naturellement sur mon visage. J'ai déjà hâte d'être à lundi.*"
            }
        }
    }
});
