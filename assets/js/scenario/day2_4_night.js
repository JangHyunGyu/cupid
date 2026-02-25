/**
 * ============================================================================
 * CUPID - day2_4_night (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day2_4_night.js + en_day2_4_night.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[2]) SCENARIO[2] = {};

Object.assign(SCENARIO[2], {
    "day2_end": {
        "background": "assets/images/background/street.png",
        "bgm": "night2.mp3",
        "character": null,
        "night": true,
        "next": "day2_end_walk_home",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교문을 나서자 저녁 공기가 얼굴을 감싼다. 어느새 하늘은 짙은 남색으로 물들어 가고 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As I step out of the school gate, the evening air wraps around my face. The sky is already fading into a deep navy blue.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al salir por la puerta de la escuela, el aire de la noche envuelve mi rostro. El cielo ya se tiñe de un azul marino profundo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*校門を出ると、夜の空気が顔を包み込む。いつの間にか空は深い紺色に染まっていた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En franchissant le portail de l'école, l'air du soir enveloppe mon visage. Le ciel vire déjà au bleu marine profond.*"
            }
        }
    },
    "day2_end_walk_home": {
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "day2_end_evening_air",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*가로등이 하나둘씩 켜지기 시작한다. 이 거리도 어느새 낯이 익어서, 어디서 꺾어야 하는지 생각하지 않아도 발이 알아서 움직인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The streetlights begin flickering on one by one. This road has become so familiar that my feet know where to turn without thinking.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Las farolas empiezan a encenderse una por una. Este camino ya me es tan familiar que mis pies saben dónde girar sin pensarlo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*街灯が一つずつ灯り始める。この道もいつの間にか見慣れて、どこで曲がればいいか考えなくても足が勝手に動く。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Les réverbères s'allument un à un. Cette route m'est devenue si familière que mes pieds savent où tourner sans réfléchir.*"
            }
        }
    },
    "day2_end_evening_air": {
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "day2_end_arrive_home",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어딘가에서 저녁밥 짓는 냄새가 바람에 실려온다. 이웃집 창문 너머로 따뜻한 불빛이 새어나오고... 이런 평범한 풍경이 묘하게 마음을 편안하게 해준다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The smell of someone cooking dinner drifts on the breeze. Warm light seeps through a neighbor's window... Something about this ordinary scene puts my mind oddly at ease.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El olor de alguien cocinando la cena llega con la brisa. Una luz cálida se filtra por la ventana de un vecino... Algo en esta escena cotidiana me tranquiliza extrañamente.*"
            },
            "ja": {
                "name": "僕",
                "text": "*どこかから夕飯を作る匂いが風に乗って漂ってくる。隣の家の窓から温かい光が漏れていて…こんな何気ない風景が、妙に心を落ち着かせてくれる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*L'odeur du dîner de quelqu'un flotte dans la brise. Une lumière chaude filtre par la fenêtre d'un voisin... Quelque chose dans cette scène ordinaire apaise étrangement mon esprit.*"
            }
        }
    },
    "day2_end_arrive_home": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_end_change_clothes",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*현관문을 열고 들어섰다. 신발을 벗으며 '다녀왔습니다'라고 중얼거렸지만, 대답은 없다. 부모님은 아직 안 오신 모양이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I open the front door and step inside. I mutter 'I'm home' as I take off my shoes, but there's no reply. Looks like my parents aren't back yet.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Abro la puerta y entro. Murmuro 'ya llegué' mientras me quito los zapatos, pero no hay respuesta. Parece que mis padres aún no volvieron.*"
            },
            "ja": {
                "name": "僕",
                "text": "*玄関のドアを開けて中に入った。靴を脱ぎながら「ただいま」と呟いたけど、返事はない。両親はまだ帰ってないみたいだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ouvre la porte d'entrée et entre. Je marmonne « je suis rentré » en enlevant mes chaussures, mais pas de réponse. On dirait que mes parents ne sont pas encore là.*"
            }
        }
    },
    "day2_end_change_clothes": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_end_settle",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교복을 벗고 편한 옷으로 갈아입었다. 넥타이를 빼는 순간, 하루의 긴장이 한꺼번에 풀리는 기분이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I change out of my uniform into something comfortable. The moment the tie comes off, it feels like all the tension from the day melts away at once.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me quito el uniforme y me pongo algo cómodo. En el momento en que me saco la corbata, siento como si toda la tensión del día se desvaneciera de golpe.*"
            },
            "ja": {
                "name": "僕",
                "text": "*制服を脱いで楽な服に着替えた。ネクタイを外した瞬間、一日の緊張が一気に解けていく気がする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je quitte mon uniforme pour quelque chose de confortable. Dès que la cravate est enlevée, on dirait que toute la tension de la journée fond d'un coup.*"
            }
        }
    },
    "day2_end_settle": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_end_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*가방을 내려놓고 책상 앞에 앉았다. 오늘 받은 프린트물을 파일에 꽂고, 물 한 잔을 마신다. 조용한 방 안에 시계 소리만 똑딱거린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I set my bag down and sit at my desk. I file away the printouts from today and drink a glass of water. The only sound in the quiet room is the ticking of the clock.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dejo la mochila y me siento en el escritorio. Guardo las hojas de hoy y tomo un vaso de agua. El único sonido en la habitación silenciosa es el tic-tac del reloj.*"
            },
            "ja": {
                "name": "僕",
                "text": "*カバンを下ろして机の前に座った。今日もらったプリントをファイルに挟んで、水を一杯飲む。静かな部屋に時計の音だけがカチカチと響いている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je pose mon sac et m'assieds à mon bureau. Je range les polys d'aujourd'hui et bois un verre d'eau. Le seul bruit dans la pièce silencieuse est le tic-tac de l'horloge.*"
            }
        }
    },
    "day2_end_2": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_reflect_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*침대에 기대앉아 천장을 올려다본다. 오늘은... 정말 많은 일이 있었어. 어제보다 훨씬 깊고 복잡한 하루였다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I lean back against my bed and stare at the ceiling. Today was... really something. A much deeper and more complicated day than yesterday.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me recuesto contra la cama y miro el techo. Hoy fue... bastante intenso. Un día mucho más profundo y complicado que ayer.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ベッドにもたれかかって天井を見上げる。今日は…本当にいろんなことがあった。昨日よりずっと深くて複雑な一日だった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je m'adosse à mon lit et fixe le plafond. Aujourd'hui était... vraiment quelque chose. Une journée bien plus profonde et compliquée qu'hier.*"
            }
        }
    },
    "day2_night_reflect_start": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_reflect_yuna_check",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 감으면 오늘 있었던 장면들이 파노라마처럼 스쳐 지나간다. 이틀째인데... 이미 이 학교가 내 일상의 일부가 된 것 같아.*"
            },
            "en": {
                "name": "Me",
                "text": "*When I close my eyes, the scenes from today flash by like a panorama. It's only been two days... but this school already feels like part of my everyday life.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al cerrar los ojos, las escenas de hoy pasan como un panorama. Solo han sido dos días... pero esta escuela ya se siente parte de mi vida cotidiana.*"
            },
            "ja": {
                "name": "僕",
                "text": "*目を閉じると、今日の出来事がパノラマのように駆け巡る。まだ二日目なのに…もうこの学校が日常の一部になっている気がする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Quand je ferme les yeux, les scènes d'aujourd'hui défilent comme un panorama. Ça ne fait que deux jours... mais cette école fait déjà partie de mon quotidien.*"
            }
        }
    },
    "day2_night_reflect_yuna_check": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_reflect_yuna_secret",
                "condition": "met_yuna"
            },
            {
                "next": "day2_night_reflect_seoyeon_check"
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
    "day2_night_reflect_yuna_secret": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_reflect_seoyeon_check",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 속삭였던 비밀... 아직도 머릿속을 떠나지 않는다. 그 아이는 왜 나한테만 그런 이야기를 한 걸까? 저 신비로운 눈동자 속에 어떤 세계가 펼쳐져 있는 건지...*"
            },
            "en": {
                "name": "Me",
                "text": "*The secret Yuna whispered to me... it still lingers in my mind. Why did she tell only me something like that? What kind of world lies behind those mysterious eyes of hers...*"
            },
            "es": {
                "name": "Yo",
                "text": "*El secreto que Yuna me susurró... todavía ronda mi mente. ¿Por qué me lo contó solo a mí? ¿Qué clase de mundo se esconde detrás de esos ojos misteriosos...?*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナが囁いた秘密…まだ頭から離れない。あの子はなぜ僕にだけあんな話をしたんだろう？あの神秘的な瞳の奥にはどんな世界が広がっているのか…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le secret que Yuna m'a chuchoté... il persiste encore dans mon esprit. Pourquoi m'a-t-elle dit ça uniquement à moi ? Quel genre de monde se cache derrière ces yeux mystérieux...*"
            }
        }
    },
    "day2_night_reflect_seoyeon_check": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_reflect_seoyeon",
                "condition": "met_seoyeon"
            },
            {
                "next": "day2_night_reflect_dain_check"
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
    "day2_night_reflect_seoyeon": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_reflect_dain_check",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이는 오늘도 변함없이 밝았어. 학생회 일로 바쁘면서도 나를 챙겨주려고 애쓰는 모습이... 사실 좀 미안하기도 하고, 고맙기도 하고.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon was her usual cheerful self today. Even though she's busy with student council work, she tries so hard to look after me... I feel a bit guilty, but also grateful.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon estuvo alegre como siempre hoy. Aunque está ocupada con el consejo estudiantil, se esfuerza tanto por cuidarme... Me siento un poco culpable, pero también agradecido.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンは今日もいつも通り明るかった。生徒会の仕事で忙しいのに、僕のことを気にかけてくれて…正直ちょっと申し訳なくもあり、ありがたくもある。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon était fidèle à elle-même, joyeuse comme toujours aujourd'hui. Même si elle est occupée avec le conseil des élèves, elle fait tellement d'efforts pour prendre soin de moi... Je me sens un peu coupable, mais aussi reconnaissant.*"
            }
        }
    },
    "day2_night_reflect_dain_check": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_reflect_dain",
                "condition": "met_dain"
            },
            {
                "next": "day2_night_reflect_adults"
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
    "day2_night_reflect_dain": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_reflect_adults",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이는... 아, 그 에너지. 같이 있으면 지칠 틈이 없어. 운동하는 모습이 정말 멋있었고, 장난치는 것도 즐거웠어. 내일은 또 무슨 도전을 걸어올까.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain is... ah, that energy. There's never a dull moment with her. Watching her play sports was really cool, and messing around with her was fun. I wonder what challenge she'll throw at me tomorrow.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dain es... ah, esa energía. Nunca hay un momento aburrido con ella. Verla hacer deporte fue genial, y bromear con ella fue divertido. Me pregunto qué desafío me lanzará mañana.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインは…ああ、あのエネルギー。一緒にいると退屈する暇がない。運動している姿は本当にかっこよかったし、ふざけ合うのも楽しかった。明日はまたどんな挑戦を仕掛けてくるんだろう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain est... ah, cette énergie. On ne s'ennuie jamais avec elle. La regarder faire du sport était vraiment cool, et déconner avec elle était amusant. Je me demande quel défi elle me lancera demain.*"
            }
        }
    },
    "day2_night_reflect_adults": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_snack_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님은 오늘도 묘한 분위기를 풍기셨고, 담임선생님은 장난스러우면서도 은근히 나를 신경 쓰셨어. 어른이라서 더 복잡한 걸까, 아니면... 내가 너무 의식하는 걸까.*"
            },
            "en": {
                "name": "Me",
                "text": "*The School Nurse had that mysterious aura about her again today, and the Homeroom Teacher was playful yet subtly attentive toward me. Is it more complicated because they're adults, or... am I just overthinking it?*"
            },
            "es": {
                "name": "Yo",
                "text": "*La enfermera tenía esa aura misteriosa de nuevo hoy, y la tutora fue juguetona pero sutilmente atenta conmigo. ¿Es más complicado porque son adultas, o... solo estoy pensando demasiado?*"
            },
            "ja": {
                "name": "僕",
                "text": "*保健の先生は今日も不思議な雰囲気を漂わせていたし、担任の先生はおちゃめなのにさりげなく僕を気にかけてくれてた。大人だからもっと複雑なのか、それとも…僕が意識しすぎてるだけなのか。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*L'infirmière scolaire avait encore cette aura mystérieuse aujourd'hui, et la professeure principale était joueuse mais subtilement attentive envers moi. Est-ce plus compliqué parce que ce sont des adultes, ou... est-ce que je réfléchis trop ?*"
            }
        }
    },
    "day2_night_snack_start": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_snack_kitchen",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*생각에 잠겨 있었더니 어느새 배가 고파졌다. 저녁은 간단하게 때웠으니... 부엌에서 뭐라도 찾아볼까.*"
            },
            "en": {
                "name": "Me",
                "text": "*Lost in thought, I realize I've gotten hungry. I barely ate dinner... maybe I should find something in the kitchen.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Perdido en mis pensamientos, me doy cuenta de que tengo hambre. Apenas cené... quizás debería buscar algo en la cocina.*"
            },
            "ja": {
                "name": "僕",
                "text": "*考え事をしていたらいつの間にかお腹が空いてきた。夕飯は軽く済ませたし…台所で何か探そうかな。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Perdu dans mes pensées, je réalise que j'ai faim. J'ai à peine dîné... je devrais peut-être trouver quelque chose dans la cuisine.*"
            }
        }
    },
    "day2_night_snack_kitchen": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_snack_ramen",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*냉장고를 열어보니 엄마가 남겨둔 반찬 몇 가지와 라면이 보인다. 오늘은 라면 기분이야.*"
            },
            "en": {
                "name": "Me",
                "text": "*I open the fridge and find a few side dishes Mom left behind and some instant noodles. I'm in the mood for ramen tonight.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Abro el refrigerador y encuentro algunos acompañamientos que dejó mamá y fideos instantáneos. Hoy tengo antojo de ramen.*"
            },
            "ja": {
                "name": "僕",
                "text": "*冷蔵庫を開けると、お母さんが残してくれたおかずとラーメンが目に入る。今日はラーメンの気分だ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ouvre le frigo et trouve quelques plats que maman a laissés et des nouilles instantanées. J'ai envie de ramen ce soir.*"
            }
        }
    },
    "day2_night_snack_ramen": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_snack_think",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*냄비에 물을 올리고 라면을 끓이기 시작한다. 보글보글 끓는 소리가 조용한 부엌을 채운다. 김이 모락모락 올라오는 걸 보고 있자니 마음이 편안해진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I put water in the pot and start boiling the ramen. The bubbling sound fills the quiet kitchen. Watching the steam curl up makes me feel at ease.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Pongo agua en la olla y empiezo a hervir el ramen. El burbujeo llena la cocina silenciosa. Ver el vapor elevarse me hace sentir tranquilo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*鍋にお湯を沸かしてラーメンを作り始める。ぐつぐつと煮える音が静かな台所を満たす。湯気がもくもくと立ち上るのを見ていると、心が穏やかになる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je mets de l'eau dans la casserole et commence à faire bouillir les ramen. Le bruit des bulles remplit la cuisine silencieuse. Regarder la vapeur s'élever m'apaise.*"
            }
        }
    },
    "day2_night_snack_think": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_home",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*라면을 후루룩 먹으며 생각한다. 오늘 연락처를 교환했던 사람들... 메시지를 보내볼까? 아니면 그냥 자버릴까. 설거지를 마치고 방으로 돌아왔다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I slurp the ramen and think. The people I exchanged numbers with today... should I send them a message? Or just go to sleep? After finishing the dishes, I head back to my room.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sorbo el ramen y pienso. Las personas con las que intercambié números hoy... ¿debería enviarles un mensaje? ¿O simplemente dormir? Después de lavar los platos, vuelvo a mi habitación.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ラーメンをすすりながら考える。今日連絡先を交換した人たち…メッセージを送ってみようか？それともこのまま寝ちゃおうか。洗い物を終えて部屋に戻った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je mange mes ramen en réfléchissant. Les personnes avec qui j'ai échangé des numéros aujourd'hui... devrais-je leur envoyer un message ? Ou juste dormir ? Après avoir fait la vaisselle, je retourne dans ma chambre.*"
            }
        }
    },
    "day2_night_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "branches": [
            {
                "next": "day2_night_goodnight_start",
                "excludeCondition": "has_any_contact"
            },
            {
                "next": "day2_night_social_media"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*침대에 누워 습관적으로 스마트폰을 들었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I lie on my bed and pick up my phone out of habit.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me acuesto en la cama y tomo el celular por costumbre.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ベッドに横になって、つい習慣でスマホを手に取った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je m'allonge sur mon lit et prends mon téléphone par habitude.*"
            }
        }
    },
    "day2_night_social_media": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_social_media_scroll",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*메시지를 보내기 전에 SNS를 잠깐 훑어본다. 타임라인에 학교 친구들의 글이 올라와 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Before sending any messages, I quickly scroll through social media. My school friends' posts fill the timeline.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Antes de enviar mensajes, reviso rápidamente las redes sociales. Las publicaciones de mis compañeros de escuela llenan el feed.*"
            },
            "ja": {
                "name": "僕",
                "text": "*メッセージを送る前に、ちょっとだけSNSを覗いてみる。タイムラインに学校の友達の投稿が並んでいる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Avant d'envoyer des messages, je fais défiler rapidement les réseaux sociaux. Les publications de mes amis de l'école remplissent le fil d'actualité.*"
            }
        }
    },
    "day2_night_social_media_scroll": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_social_media_post",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*누군가가 올린 급식 사진, 체육 시간에 몰래 찍은 사진, 학교 운동장 석양 사진... 다들 나름의 하루를 보내고 있구나.*"
            },
            "en": {
                "name": "Me",
                "text": "*Someone's photo of school lunch, a sneaky shot taken during PE class, a picture of the sunset over the school field... Everyone's living their own version of the day.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La foto del almuerzo de alguien, una foto a escondidas durante educación física, una imagen del atardecer sobre el campo de la escuela... Todos están viviendo su propia versión del día.*"
            },
            "ja": {
                "name": "僕",
                "text": "*誰かが載せた給食の写真、体育の時間にこっそり撮った写真、校庭の夕焼け写真…みんなそれぞれの一日を過ごしてるんだな。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La photo du déjeuner de quelqu'un, un cliché volé pendant le cours de sport, une photo du coucher de soleil sur le terrain de l'école... Chacun vit sa propre version de la journée.*"
            }
        }
    },
    "day2_night_social_media_post": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_social_media_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이가 올린 학생회 활동 인증샷에 좋아요가 잔뜩 눌려 있다. 다인이의 배구 연습 영상에는 '멋있다!'라는 댓글이 줄줄이 달려 있고...*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon's student council activity photo is loaded with likes. Dain's volleyball practice video has a flood of comments saying 'So cool!'...*"
            },
            "es": {
                "name": "Yo",
                "text": "*La foto de actividades del consejo estudiantil de Seoyeon tiene un montón de likes. El video de práctica de voleibol de Dain tiene una avalancha de comentarios que dicen '¡Qué genial!'...*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンが上げた生徒会活動の写真にはいいねがたくさん付いている。ダインのバレー練習の動画には「かっこいい！」というコメントがずらりと並んでいて…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La photo d'activité du conseil de Seoyeon croule sous les likes. La vidéo d'entraînement de volley de Dain est inondée de commentaires disant « Trop cool ! »...*"
            }
        }
    },
    "day2_night_social_media_react": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나도 모르게 미소가 지어진다. 좋아요를 몇 개 누르고 타임라인을 닫았다. ...이제 직접 메시지를 보내볼까.*"
            },
            "en": {
                "name": "Me",
                "text": "*I smile without realizing it. I tap a few likes and close the timeline. ...Maybe it's time to send a message directly.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sonrío sin darme cuenta. Le doy like a algunas publicaciones y cierro el feed. ...Quizás es hora de enviar un mensaje directamente.*"
            },
            "ja": {
                "name": "僕",
                "text": "*気づいたら笑顔になっていた。いくつかいいねを押してタイムラインを閉じた。…そろそろ直接メッセージを送ってみようか。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je souris sans m'en rendre compte. Je mets quelques likes et ferme le fil d'actualité. ...C'est peut-être le moment d'envoyer un message directement.*"
            }
        }
    },
    "day2_night_home_check_contact": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "choices": [
            {
                "next": "day2_night_message_seyoun",
                "condition": "has_number_seyoun",
                "excludeCondition": "sent_msg_day2_seyoun"
            },
            {
                "next": "day2_night_message_yuna",
                "condition": "has_number_yuna",
                "excludeCondition": "sent_msg_day2_yuna"
            },
            {
                "next": "day2_night_message_dain",
                "condition": "has_number_dain",
                "excludeCondition": "sent_msg_day2_dain"
            },
            {
                "next": "day2_night_message_nurse",
                "condition": "has_number_nurse",
                "excludeCondition": "sent_msg_day2_nurse"
            },
            {
                "next": "day2_night_message_teacher",
                "condition": "has_number_teacher",
                "excludeCondition": "sent_msg_day2_teacher"
            },
            {
                "next": "day2_night_nurse_home",
                "condition": "invited_nurse_home"
            },
            {
                "next": "day2_check_affinity"
            },
            {
                "next": "day2_night_goodnight_start"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*누군가에게 메시지를 보내볼까...?*",
                "choices": [
                    "서연이에게 메시지를 보낸다.",
                    "유나에게 메시지를 보낸다.",
                    "다인이에게 메시지를 보낸다.",
                    "보건선생님께 메시지를 보낸다.",
                    "담임선생님께 메시지를 보낸다.",
                    "보건선생님 댁으로 향한다.",
                    "호감도 확인하기",
                    "그만 보내고 잠을 잔다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Should I send a message to someone...?*",
                "choices": [
                    "Send a message to Seoyeon.",
                    "Send a message to Yuna.",
                    "Send a message to Dain.",
                    "Send a message to the School Nurse.",
                    "Send a message to the Homeroom Teacher.",
                    "Head to the School Nurse's place.",
                    "Check affinity",
                    "Stop messaging and go to sleep."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¿Debería enviarle un mensaje a alguien...?*",
                "choices": [
                    "Enviar un mensaje a Seoyeon.",
                    "Enviar un mensaje a Yuna.",
                    "Enviar un mensaje a Dain.",
                    "Enviar un mensaje a la enfermera.",
                    "Enviar un mensaje a la tutora.",
                    "Ir a la casa de la enfermera.",
                    "Ver afinidad",
                    "Dejar de escribir y dormir."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*誰かにメッセージを送ってみようか…？*",
                "choices": [
                    "ソヨンにメッセージを送る。",
                    "ユナにメッセージを送る。",
                    "ダインにメッセージを送る。",
                    "保健の先生にメッセージを送る。",
                    "担任の先生にメッセージを送る。",
                    "保健の先生の家に向かう。",
                    "好感度を確認する",
                    "もうやめて寝る。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Devrais-je envoyer un message à quelqu'un ...?*",
                "choices": [
                    "Envoyer un message à Seoyeon.",
                    "Envoyer un message à Yuna.",
                    "Envoyer un message à Dain.",
                    "Envoyer un message à l'infirmière scolaire.",
                    "Envoyer un message à la professeure principale.",
                    "Se rendre chez l'infirmière scolaire.",
                    "Vérifier l'affinité",
                    "Arrêter les messages et aller dormir."
                ]
            }
        }
    },
    "day2_check_affinity": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "현재 캐릭터들과의 호감도 상태입니다.{affinity_list}"
            },
            "en": {
                "name": "System",
                "text": "Here is your current affinity status with each character.{affinity_list}"
            },
            "es": {
                "name": "Sistema",
                "text": "Este es tu estado actual de afinidad con cada personaje.{affinity_list}"
            },
            "ja": {
                "name": "システム",
                "text": "現在のキャラクターとの好感度状態です。{affinity_list}"
            },
            "fr": {
                "name": "Système",
                "text": "Voici ton statut d'affinité actuel avec chaque personnage.{affinity_list}"
            }
        }
    },
    "day2_night_nurse_home": {
        "background": "assets/images/background/nurse_house.png",
        "character": null,
        "night": true,
        "next": "day2_night_nurse_home_entrance",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 알려준 주소로 향했다. 학교 근처의 조용한 오피스텔이다. 엘리베이터를 타고 올라가며 심장이 빨라지는 것을 느낀다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I head to the address she gave me. It's a quiet studio apartment building near the school. My heart beats faster as I ride the elevator up.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me dirijo a la dirección que me dio. Es un edificio de departamentos tranquilo cerca de la escuela. Mi corazón late más rápido mientras subo en el elevador.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生が教えてくれた住所に向かった。学校の近くの静かなマンションだ。エレベーターで上がりながら、心臓が速くなるのを感じる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je me rends à l'adresse qu'elle m'a donnée. C'est un immeuble de studios calme près de l'école. Mon cœur bat plus vite en montant dans l'ascenseur.*"
            }
        }
    },
    "day2_night_nurse_home_entrance": {
        "character": "assets/images/characters/nurse_normal.png",
        "background": "assets/images/background/nurse_house.png",
        "night": true,
        "next": "day2_night_nurse_home_casual",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*초인종을 누르자 안에서 부스럭거리는 소리가 들린다. '잠깐만~'이라는 목소리와 함께 발걸음 소리가 가까워진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I press the doorbell and hear rustling from inside. A voice calls out 'Just a moment!' followed by footsteps drawing closer.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Toco el timbre y escucho ruidos adentro. Una voz dice '¡Un momento!' seguida de pasos que se acercan.*"
            },
            "ja": {
                "name": "僕",
                "text": "*インターホンを押すと、中からガサガサと音がする。「ちょっと待って〜」という声とともに足音が近づいてくる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'appuie sur la sonnette et entends du remue-ménage à l'intérieur. Une voix lance « Un instant ! » suivie de pas qui s'approchent.*"
            }
        }
    },
    "day2_night_nurse_home_casual": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day2_night_nurse_home_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*문 너머로 모습을 드러낸 선생님은... 학교에서와 전혀 다른 인상이었다. 흰 가운 대신 편한 니트와 긴 치마 차림. 살짝 젖은 머리카락에서 샴푸 향이 은은하게 풍겨온다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The figure that appears from behind the door is... completely different from how she looks at school. Instead of her white coat, she's wearing a cozy knit sweater and a long skirt. A faint scent of shampoo drifts from her slightly damp hair.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La figura que aparece detrás de la puerta es... completamente diferente a como se ve en la escuela. En vez de su bata blanca, lleva un suéter de punto acogedor y una falda larga. Un suave aroma a champú emana de su cabello ligeramente húmedo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ドアの向こうから現れた先生は…学校とはまるで違う印象だった。白衣の代わりにゆったりしたニットと長いスカート姿。少し濡れた髪からシャンプーの香りがほのかに漂ってくる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La silhouette qui apparaît derrière la porte est... complètement différente de son apparence à l'école. Au lieu de sa blouse blanche, elle porte un pull en maille douillet et une longue jupe. Un léger parfum de shampoing émane de ses cheveux légèrement humides.*"
            }
        }
    },
    "day2_night_nurse_home_2": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day2_night_nurse_home_tea",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, 정말로 왔네? 어서 들어오렴. 밖이 많이 춥지?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh my, you actually came? Come on in. It must be cold outside, right?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Ay, ¿de verdad viniste? Pasa, pasa. Debe hacer frío afuera, ¿no?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"あら、本当に来たの？さあ入って。外、寒かったでしょ？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Oh, tu es vraiment venu ? Entre. Il doit faire froid dehors, non ?\\\""
            }
        }
    },
    "day2_night_nurse_home_tea": {
        "character": "assets/images/characters/nurse_normal.png",
        "background": "assets/images/background/nurse_house.png",
        "night": true,
        "next": "day2_night_nurse_home_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*안으로 들어서자 아늑한 원룸이 눈에 들어온다. 은은한 간접조명, 작은 화분들, 따뜻한 색감의 인테리어. 선생님이 부엌에서 주전자를 올린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Stepping inside, a cozy studio apartment comes into view. Soft indirect lighting, small potted plants, warm-toned décor. She puts the kettle on in the kitchen.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al entrar, aparece un acogedor departamento tipo estudio. Iluminación indirecta suave, pequeñas plantas en maceta, decoración de tonos cálidos. Ella pone la tetera en la cocina.*"
            },
            "ja": {
                "name": "僕",
                "text": "*中に入ると、居心地の良いワンルームが目に飛び込んでくる。柔らかい間接照明、小さな鉢植え、温かみのあるインテリア。先生がキッチンでやかんを火にかける。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En entrant, un studio douillet s'offre à ma vue. Un éclairage indirect doux, de petites plantes en pot, une déco aux tons chauds. Elle met la bouilloire en marche dans la cuisine.*"
            }
        }
    },
    "day2_night_nurse_home_3": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day2_night_nurse_home_talk_life",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"자, 여기 앉으렴. 따뜻한 차 한 잔 줄게. 우리 전학생이랑 단둘이 있으니까... 왠지 기분이 묘하네?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Here, sit down. I'll make you a warm cup of tea. Being alone with my cute transfer student... it feels kind of special, don't you think?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Ven, siéntate. Te preparo una taza de té caliente. Estar a solas con mi lindo estudiante de intercambio... se siente algo especial, ¿no crees?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"さあ、ここに座って。温かいお茶を淹れてあげる。可愛い転校生と二人きりなんて…なんだか特別な感じがするわね？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Tiens, assieds-toi. Je vais te préparer une tasse de thé chaud. Être seule avec mon mignon nouvel élève... c'est un peu spécial, tu ne trouves pas ?\\\""
            }
        }
    },
    "day2_night_nurse_home_talk_life": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day2_night_nurse_home_talk_alone",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"학교에서는 항상 '선생님'이지만, 여기선 그냥 한 사람이야. 나도 퇴근하면 이렇게 차 마시면서 드라마 보거든. 의외지?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"At school, I'm always 'the teacher,' but here, I'm just a person. When I get home, I drink tea and watch dramas like this. Surprised?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"En la escuela siempre soy 'la profesora', pero aquí soy solo una persona. Cuando llego a casa, tomo té y veo dramas así. ¿Sorprendido?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"学校ではいつも『先生』だけど、ここではただの一人の人間よ。帰ったらこうやってお茶飲みながらドラマ観てるの。意外でしょ？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"A l'école, je suis toujours « la professeure », mais ici, je suis juste une personne. Quand je rentre, je bois du thé et regarde des dramas comme ça. Surpris ?\\\""
            }
        }
    },
    "day2_night_nurse_home_talk_alone": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day2_night_nurse_home_decision",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"사실... 이 집에 학생을 초대한 건 네가 처음이야. 혼자 사니까 가끔 적적할 때가 있거든. 이렇게 차 마실 상대가 있으면 좋겠다고 생각했어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Actually... you're the first student I've ever invited to this place. Living alone, it gets lonely sometimes. I thought it would be nice to have someone to share tea with.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"En realidad... eres el primer estudiante que invito a este lugar. Vivir sola a veces es solitario. Pensé que sería lindo tener a alguien con quien tomar té.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"実は…この家に生徒を招いたのはあなたが初めてよ。一人暮らしだから、たまに寂しくなることがあるの。こうやってお茶する相手がいたらいいなって思ってたの。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"En fait... tu es le premier élève que j'invite ici. Vivre seule, c'est parfois solitaire. Je me suis dit que ce serait bien d'avoir quelqu'un avec qui partager un thé.\\\""
            }
        }
    },
    "day2_night_nurse_home_decision": {
        "character": "assets/images/characters/nurse_normal.png",
        "background": "assets/images/background/nurse_house.png",
        "night": true,
        "choices": [
            {
                "next": "day2_night_nurse_home_4"
            },
            {
                "next": "day2_night_home_check_contact"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*시계를 보니 벌써 밤 11시가 넘었다. 찻잔은 비었고, 밤은 깊어졌다. 이대로 더 머무를까, 아니면 돌아갈까...*",
                "choices": [
                    "조금 더 머무른다.",
                    "늦었으니 돌아간다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*I glance at the clock — it's already past 11 PM. The teacup is empty, and the night has grown deep. Should I stay a bit longer, or head back...*",
                "choices": [
                    "Stay a little longer.",
                    "It's late, I should head back."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Miro el reloj: ya pasaron las 11 PM. La taza de té está vacía y la noche se ha hecho profunda. ¿Me quedo un poco más o me voy...?*",
                "choices": [
                    "Quedarme un rato más.",
                    "Ya es tarde, debería irme."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*時計を見ると、もう夜の11時を過ぎていた。ティーカップは空になり、夜は深まっている。もう少しいようか、それとも帰ろうか…*",
                "choices": [
                    "もう少しいる。",
                    "遅くなったから帰る。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Je jette un coup d'œil à l'horloge — il est déjà plus de 23h. La tasse de thé est vide, et la nuit s'est approfondie. Devrais-je rester un peu plus, ou rentrer...*",
                "choices": [
                    "Rester encore un peu.",
                    "Il est tard, je devrais rentrer."
                ]
            }
        }
    },
    "day2_night_nurse_home_4": {
        "background": "assets/images/background/nurse_home_event1.png",
        "character": null,
        "night": true,
        "next": "day2_night_nurse_home_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 방... 은은한 조명 아래 둘만의 시간이 흐른다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Her room... a quiet moment for just the two of us, under the dim lighting.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Su habitación... un momento tranquilo solo para nosotros dos, bajo la luz tenue.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生の部屋…柔らかな照明の下、二人だけの時間が流れる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Sa chambre... un moment calme rien que pour nous deux, sous la lumière tamisée.*"
            }
        }
    },
    "day2_night_nurse_home_5": {
        "background": "assets/images/background/nurse_house.png",
        "character": null,
        "night": true,
        "fade": true,
        "setFlag": "spent_night_at_nurse_home",
        "stats": {
            "Nurse": {
                "affinity": 15
            }
        },
        "changeDay": 3,
        "next": "day3_nurse_home_morning",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님과 단둘이 남겨진 방... 심장 소리가 귓가에 울릴 정도로 크게 들려온다. 그녀의 향기가 코끝을 간지럽히고, 밤은 점점 깊어만 간다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Alone with her in this room... my heartbeat pounds so loudly it echoes in my ears. Her scent tickles the tip of my nose, and the night only grows deeper.*"
            },
            "es": {
                "name": "Yo",
                "text": "*A solas con ella en esta habitación... mi corazón late tan fuerte que retumba en mis oídos. Su aroma cosquillea la punta de mi nariz, y la noche solo se hace más profunda.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生と二人きりの部屋…心臓の音が耳元で鳴り響くほど大きく聞こえる。彼女の香りが鼻先をくすぐり、夜はどんどん深まっていく。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Seul avec elle dans cette pièce... mon cœur bat si fort qu'il résonne dans mes oreilles. Son parfum chatouille le bout de mon nez, et la nuit ne fait que s'approfondir.*"
            }
        }
    },
    "day2_night_message_seyoun": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_message_seyoun_after",
                "condition": "day2_met_seoyeon_after"
            },
            {
                "next": "day2_night_message_seyoun_lunch",
                "condition": "day2_ate_lunch_seoyeon"
            },
            {
                "next": "day2_night_message_seyoun_generic"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이에게 어떤 메시지를 보낼까?*"
            },
            "en": {
                "name": "Me",
                "text": "*What should I text Seoyeon?*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿Qué le escribo a Seoyeon?*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンにどんなメッセージを送ろうか？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Qu'est-ce que je devrais écrire à Seoyeon ?*"
            }
        }
    },
    "day2_night_message_seyoun_after": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_seyoun",
        "next": "day2_night_message_seyoun_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이에게 메시지를 보냈다. '오늘 노을부터 야근(?)까지, 너랑 함께해서 정말 행복했어. 내일 봐!'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent Seoyeon a message. 'From tonight's sunset to your overtime?, I was really happy to spend it all with you. See you tomorrow!'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a Seoyeon. 'Desde el atardecer hasta tus horas extra, fui muy feliz pasándolo todo contigo. ¡Nos vemos mañana!'*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンにメッセージを送った。「今日は夕焼けから残業(?)まで、一緒に過ごせてすごく楽しかった。また明日ね！」*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message à Seoyeon. 'Du coucher de soleil de ce soir à tes heures sup ? j'étais vraiment heureux de tout partager avec toi. À demain !'*"
            }
        }
    },
    "day2_night_message_seyoun_lunch": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_seyoun",
        "next": "day2_night_message_seyoun_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이에게 메시지를 보냈다. '오늘 점심 샌드위치 정말 맛있었어! 내일 봐.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent Seoyeon a message. 'The sandwich at lunch today was really delicious! See you tomorrow.'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a Seoyeon. '¡El sándwich del almuerzo de hoy estuvo delicioso! Nos vemos mañana.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンにメッセージを送った。「今日のお昼のサンドイッチ、すごく美味しかったよ！また明日ね。」*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message à Seoyeon. 'Le sandwich de ce midi était vraiment délicieux ! À demain.'*"
            }
        }
    },
    "day2_night_message_seyoun_generic": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_seyoun",
        "next": "day2_night_message_seyoun_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이에게 메시지를 보냈다. '오늘 하루 잘 보냈어? 내일 학교에서 보자.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent Seoyeon a message. 'How was your day? See you at school tomorrow.'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a Seoyeon. '¿Cómo estuvo tu día? Nos vemos mañana en la escuela.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンにメッセージを送った。「今日一日どうだった？明日学校で会おう。」*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message à Seoyeon. 'Comment s'est passée ta journée ? À demain à l'école.'*"
            }
        }
    },
    "day2_night_message_seyoun_reply": {
        "type": "free_talk",
        "maxTurns": 5,
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_night_message_seyoun_reply_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_night_message_seyoun_reply_normal"
            },
            {
                "minAffinity": -100,
                "next": "day2_night_message_seyoun_reply_low"
            }
        ],
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*잠시 후, 답장이 왔다.* '...혹시 아직 안 잤어? 내일 학교에서 보자, {name}.'",
                "context": "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 서연이는 주인공의 메시지에 답장을 보낸 상태입니다. 주인공과의 관계에 따라 답장의 톤이 달라집니다. 호감도가 높으면 다정하고 적극적으로, 호감도가 낮으면 조심스럽고 담담하게 대화하세요. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
                "personality": "밝고 다정하며 친근한 학생회장. 주인공에게 호감을 갖고 있으며 솔직하고 적극적으로 다가감."
            },
            "en": {
                "name": "Seoyeon",
                "text": "*After a moment, a reply came.* '...Are you still awake? See you at school tomorrow, {name}.'",
                "context": "It's nighttime, and they are chatting via smartphone messages from their respective homes. Seoyeon has sent a reply to the protagonist's message. Her tone varies depending on her relationship with the protagonist—if affinity is high, she is warm and proactive; if affinity is low, she is cautious and reserved. Please continue the conversation until it naturally wraps up. Once the conversation concludes, the protagonist will drift off to sleep looking forward to tomorrow. Only on the final turn, say goodnight or suggest seeing each other at school tomorrow to end the conversation naturally.",
                "personality": "A bright, affectionate, and friendly student council president. She has feelings for the protagonist and approaches him honestly and proactively."
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Después de un momento, llegó la respuesta.* '...¿Todavía estás despierto? Nos vemos mañana en la escuela, {name}.'",
                "context": "Es de noche y están chateando por mensajes de celular desde sus respectivas casas. Seoyeon ha respondido al mensaje del protagonista. Su tono varía según la relación: si la afinidad es alta, es cálida y proactiva; si es baja, es cautelosa y reservada. Continúa la conversación hasta que termine naturalmente. Solo en el último turno, di buenas noches o sugiere verse en la escuela mañana.",
                "personality": "Una presidenta del consejo estudiantil brillante, cariñosa y amigable. Tiene sentimientos por el protagonista y se acerca de forma honesta y proactiva."
            },
            "ja": {
                "name": "ソヨン",
                "text": "*少しして、返信が来た。* 「…まだ起きてたの？明日学校で会おうね、{name}。」",
                "context": "夜、それぞれの家からスマートフォンのメッセージでやり取りしている状況です。ソヨンは主人公のメッセージに返信した状態です。好感度が高ければ温かく積極的に、低ければ慎重に控えめに会話してください。会話が自然に終わるまで続けてください。最後のターンでのみ、おやすみの挨拶や明日学校で会おうと言って自然に会話を終了してください。",
                "personality": "明るくて優しくて親しみやすい生徒会長。主人公に好意を持っており、素直で積極的に接する。"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Après un moment, une réponse est arrivée.* '...Tu es encore debout ? À demain à l'école, {name}.'",
                "context": "C'est la nuit, et ils discutent par messages sur smartphone depuis chez eux. Seoyeon a répondu au message du protagoniste. Son ton varie selon sa relation avec le protagoniste—si l'affinité est élevée, elle est chaleureuse et proactive ; si l'affinité est basse, elle est prudente et réservée. Continue la conversation jusqu'à ce qu'elle se termine naturellement. Une fois la conversation terminée, le protagoniste s'endormira en pensant à demain. Seulement au dernier tour, dis bonne nuit ou suggère de se voir à l'école demain pour terminer la conversation naturellement.",
                "personality": "Une présidente du conseil des élèves lumineuse, affectueuse et amicale. Elle a des sentiments pour le protagoniste et l'approche avec honnêteté et proactivité."
            }
        }
    },
    "day2_night_message_seyoun_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와의 대화는 언제나 즐겁다. 그녀의 다정한 말투에서 진심이 느껴져 가방을 챙기는 손길이 가볍다. 내일 점심시간이 벌써부터 기다려진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Talking with Seoyeon is always a joy. I can feel the sincerity in her warm words, and it makes packing my bag feel lighter. I'm already looking forward to lunchtime tomorrow.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Hablar con Seoyeon siempre es un placer. Puedo sentir la sinceridad en sus cálidas palabras, y eso hace que preparar mi mochila se sienta más ligero. Ya espero con ansias el almuerzo de mañana.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンとの会話はいつも楽しい。彼女の温かい言葉から伝わる誠実さが、カバンを片付ける手を軽くしてくれる。明日の昼休みがもう待ち遠しい。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Parler avec Seoyeon est toujours un plaisir. Je sens la sincérité dans ses mots chaleureux, et ça rend la préparation de mon sac plus légère. J'ai déjà hâte d'être au déjeuner de demain.*"
            }
        }
    },
    "day2_night_message_seyoun_reply_normal": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와 무난하게 대화를 마쳤다. 내일 점심 약속을 잊지 말아야겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I finished chatting with Seoyeon without any issues. I'd better not forget our lunch plans tomorrow.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Terminé de chatear con Seoyeon sin problemas. Mejor no olvido nuestros planes de almuerzo para mañana.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンと無難に会話を終えた。明日のお昼の約束を忘れないようにしないと。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai fini de discuter avec Seoyeon sans problème. Je ferais mieux de ne pas oublier nos plans pour le déjeuner de demain.*"
            }
        }
    },
    "day2_night_message_seyoun_reply_low": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이의 반응이 평소보다 조금 사무적으로 느껴진다. 내가 무언가 실수한 걸까? 내일은 좀 더 조심스럽게 다가가야겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon's response feels more businesslike than usual. Did I do something wrong? I should approach her more carefully tomorrow.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La respuesta de Seoyeon se siente más fría de lo normal. ¿Hice algo mal? Debería acercarme con más cuidado mañana.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンの返事がいつもより事務的に感じる。何か失敗したのかな？明日はもっと慎重に接した方がいいかもしれない。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La réponse de Seoyeon semble plus formelle que d'habitude. Ai-je fait quelque chose de mal ? Je devrais l'aborder plus prudemment demain.*"
            }
        }
    },
    "day2_night_message_yuna": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_message_yuna_met",
                "condition": "day2_met_yuna_after"
            },
            {
                "next": "day2_night_message_yuna_met",
                "condition": "day2_met_yuna_lunch"
            },
            {
                "next": "day2_night_message_yuna_generic"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나에게 어떤 메시지를 보낼까?*"
            },
            "en": {
                "name": "Me",
                "text": "*What should I text Yuna?*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿Qué le escribo a Yuna?*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナにどんなメッセージを送ろうか？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Qu'est-ce que je devrais écrire à Yuna ?*"
            }
        }
    },
    "day2_night_message_yuna_met": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_yuna",
        "next": "day2_night_message_yuna_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나에게 메시지를 보냈다. '오늘 보여준 거... 잊지 않을게. 잘 자.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent Yuna a message. 'What you showed me today... I won't forget it. Good night.'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a Yuna. 'Lo que me mostraste hoy... no lo olvidaré. Buenas noches.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナにメッセージを送った。「今日見せてくれたこと…忘れないよ。おやすみ。」*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message à Yuna. 'Ce que tu m'as montré aujourd'hui... je ne l'oublierai pas. Bonne nuit.'*"
            }
        }
    },
    "day2_night_message_yuna_generic": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_yuna",
        "next": "day2_night_message_yuna_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나에게 메시지를 보냈다. '오늘 하루는 어땠어? 내일 학교에서 보자.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent Yuna a message. 'How was your day today? See you at school tomorrow.'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a Yuna. '¿Cómo estuvo tu día hoy? Nos vemos mañana en la escuela.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナにメッセージを送った。「今日一日どうだった？明日学校で会おう。」*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message à Yuna. 'Comment s'est passée ta journée ? À demain à l'école.'*"
            }
        }
    },
    "day2_night_message_yuna_reply": {
        "type": "free_talk",
        "maxTurns": 5,
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "affinityChar": "Yuna",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_night_message_yuna_reply_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_night_message_yuna_reply_normal"
            },
            {
                "minAffinity": -100,
                "next": "day2_night_message_yuna_reply_low"
            }
        ],
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*잠시 후 도착한 답장.* '...응. 네가 이해해줄 줄 알았어. 꿈속에서도 지켜보고 있을게, {name}.'",
                "context": "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 유나는 주인공의 메시지에 짧지만 깊은 여운이 담긴 답장을 보낸 상태입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
                "personality": "신비롭고 차가우며 비밀이 많은 소녀. 주인공에게 묘한 흥미를 느끼고 있으며, 짧고 의미심장한 말투를 사용함."
            },
            "en": {
                "name": "Yuna",
                "text": "*A reply arrives after a moment.* '...Yeah. I knew you'd understand. I'll be watching over you, even in your dreams, {name}.'",
                "context": "It's nighttime, and they are chatting via smartphone messages from their respective homes. Yuna has sent a brief but deeply lingering reply to the protagonist's message. Please continue the conversation until it naturally wraps up. Once the conversation concludes, the protagonist will drift off to sleep looking forward to tomorrow. Only on the final turn, say goodnight or suggest seeing each other at school tomorrow to end the conversation naturally.",
                "personality": "A mysterious, cool, and secretive girl. She feels a strange fascination toward the protagonist and uses short, enigmatic phrases."
            },
            "es": {
                "name": "Yuna",
                "text": "*Llega una respuesta después de un momento.* '...Sí. Sabía que entenderías. Te estaré vigilando, incluso en tus sueños, {name}.'",
                "context": "Es de noche y están chateando por mensajes de celular desde sus respectivas casas. Yuna ha enviado una respuesta breve pero con un profundo eco. Continúa la conversación hasta que termine naturalmente. Solo en el último turno, di buenas noches o sugiere verse en la escuela mañana.",
                "personality": "Una chica misteriosa, fría y llena de secretos. Siente una extraña fascinación hacia el protagonista y usa frases cortas y enigmáticas."
            },
            "ja": {
                "name": "ユナ",
                "text": "*少しして返信が届いた。* 「…うん。あなたならわかってくれると思った。夢の中でも見守ってるから、{name}。」",
                "context": "夜、それぞれの家からスマートフォンのメッセージでやり取りしている状況です。ユナは主人公のメッセージに短いが余韻のある返信を送った状態です。会話が自然に終わるまで続けてください。最後のターンでのみ、おやすみの挨拶や明日学校で会おうと言って自然に会話を終了してください。",
                "personality": "神秘的でクールで秘密が多い少女。主人公に妙な興味を感じており、短く意味深な言い回しを使う。"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Une réponse arrive après un moment.* '...Ouais. Je savais que tu comprendrais. Je veillerai sur toi, même dans tes rêves, {name}.'",
                "context": "C'est la nuit, et ils discutent par messages sur smartphone depuis chez eux. Yuna a envoyé une réponse brève mais profondément pénétrante au message du protagoniste. Continue la conversation jusqu'à ce qu'elle se termine naturellement. Une fois la conversation terminée, le protagoniste s'endormira en pensant à demain. Seulement au dernier tour, dis bonne nuit ou suggère de se voir à l'école demain pour terminer la conversation naturellement.",
                "personality": "Une fille mystérieuse, froide et secrète. Elle ressent une étrange fascination pour le protagoniste et utilise des phrases courtes et énigmatiques."
            }
        }
    },
    "day2_night_message_yuna_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 신비로운 분위기에 점점 빠져드는 것 같다. '꿈속에서도 지켜보겠다'는 그녀의 말이 무섭기보다는 묘하게 안심이 된다. 정말로 꿈에서 그녀를 만날 수 있을 것만 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I feel myself being drawn deeper into Yuna's mysterious aura. Her words about watching over me in my dreams feel less frightening and more oddly comforting. It almost feels like I really could meet her in a dream.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Siento que me atrae cada vez más el aura misteriosa de Yuna. Sus palabras sobre vigilarme en mis sueños se sienten menos aterradoras y más extrañamente reconfortantes. Casi parece que realmente podría encontrarla en un sueño.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナの神秘的な雰囲気にどんどん引き込まれていく気がする。「夢の中でも見守ってる」という彼女の言葉が、怖いというよりも不思議と安心感を与えてくれる。本当に夢の中で彼女に会えそうな気がする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je me sens attiré plus profondément dans l'aura mystérieuse de Yuna. Ses mots sur le fait de veiller sur moi dans mes rêves sont moins effrayants et étrangement réconfortants. On dirait presque que je pourrais vraiment la rencontrer en rêve.*"
            }
        }
    },
    "day2_night_message_yuna_reply_normal": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나와의 대화는 여전히 난해하지만, 조금은 가까워진 기분이다. 그녀가 말한 비밀들이 머릿속을 맴돈다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Talking with Yuna is still puzzling, but I feel like we've gotten a little closer. The secrets she mentioned keep swirling in my mind.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Hablar con Yuna sigue siendo desconcertante, pero siento que nos hemos acercado un poco. Los secretos que mencionó siguen dando vueltas en mi mente.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナとの会話は相変わらず難解だけど、少しは距離が縮まった気がする。彼女が話した秘密が頭の中をぐるぐる巡っている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Parler avec Yuna reste déroutant, mais j'ai l'impression qu'on s'est un peu rapprochés. Les secrets qu'elle a mentionnés continuent de tourbillonner dans mon esprit.*"
            }
        }
    },
    "day2_night_message_yuna_reply_low": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 태도가 너무나 차갑고 기괴하다. 그녀의 세계에 발을 들이는 것이 정말 옳은 선택인지, 한기가 느껴진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna's attitude is so cold and unsettling. A chill runs through me, and I wonder if stepping into her world was really the right choice.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La actitud de Yuna es tan fría e inquietante. Un escalofrío me recorre, y me pregunto si entrar en su mundo fue realmente la decisión correcta.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナの態度があまりにも冷たくて不気味だ。寒気が走り、彼女の世界に足を踏み入れたことが本当に正しい選択だったのか、疑問に思う。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*L'attitude de Yuna est si froide et déstabilisante. Un frisson me parcourt, et je me demande si entrer dans son monde était vraiment le bon choix.*"
            }
        }
    },
    "day2_night_message_dain": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_message_dain_after",
                "condition": "day2_met_dain_after"
            },
            {
                "next": "day2_night_message_dain_lunch",
                "condition": "day2_met_dain_lunch"
            },
            {
                "next": "day2_night_message_dain_generic"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이에게 어떤 메시지를 보낼까?*"
            },
            "en": {
                "name": "Me",
                "text": "*What should I text Dain?*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿Qué le escribo a Dain?*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインにどんなメッセージを送ろうか？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Qu'est-ce que je devrais écrire à Dain ?*"
            }
        }
    },
    "day2_night_message_dain_after": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_message_dain_bet",
                "condition": "day2_dain_bet"
            },
            {
                "next": "day2_night_message_dain_practice"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*방과 후 연습 때 일이 생각난다. 어떤 메시지를 보낼까?*"
            },
            "en": {
                "name": "Me",
                "text": "*I'm reminded of what happened during after-school practice. What should I text her?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Recuerdo lo que pasó durante la práctica después de clases. ¿Qué le escribo?*"
            },
            "ja": {
                "name": "僕",
                "text": "*放課後の練習のことを思い出す。どんなメッセージを送ろうか？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je repense à ce qui s'est passé pendant l'entraînement après les cours. Qu'est-ce que je devrais lui écrire ?*"
            }
        }
    },
    "day2_night_message_dain_bet": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_dain",
        "next": "day2_night_message_dain_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이에게 메시지를 보냈다. '오늘 연습 수고했어! 내일 떡볶이 내기 잊지 마.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent Dain a message. 'Great job at practice today! Don't forget our tteokbokki bet tomorrow.'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a Dain. '¡Buen trabajo en la práctica hoy! No olvides nuestra apuesta de tteokbokki mañana.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインにメッセージを送った。「今日の練習お疲れ！明日のトッポッキの賭け、忘れないでね。」*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message à Dain. 'Bravo pour l'entraînement aujourd'hui ! N'oublie pas notre pari tteokbokki demain.'*"
            }
        }
    },
    "day2_night_message_dain_practice": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_dain",
        "next": "day2_night_message_dain_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이에게 메시지를 보냈다. '오늘 연습 수고했어! 덕분에 즐거웠어. 내일 봐!'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent Dain a message. 'Great job at practice today! I had a blast thanks to you. See you tomorrow!'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a Dain. '¡Buen trabajo en la práctica hoy! La pasé genial gracias a ti. ¡Nos vemos mañana!'*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインにメッセージを送った。「今日の練習お疲れ！おかげですごく楽しかったよ。また明日ね！」*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message à Dain. 'Bravo pour l'entraînement aujourd'hui ! Je me suis éclaté grâce à toi. À demain !'*"
            }
        }
    },
    "day2_night_message_dain_lunch": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_dain",
        "next": "day2_night_message_dain_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이에게 메시지를 보냈다. '오늘 매점에서 본 거 재밌었어! 내일 떡볶이 먹으러 가자.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent Dain a message. 'Running into you at the snack bar today was fun! Let's go grab tteokbokki tomorrow.'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a Dain. '¡Fue divertido encontrarte en la cafetería hoy! Vamos a comer tteokbokki mañana.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインにメッセージを送った。「今日売店で会えて楽しかったよ！明日トッポッキ食べに行こう。」*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message à Dain. 'Te croiser à la boutique aujourd'hui, c'était fun ! Allons manger du tteokbokki demain.'*"
            }
        }
    },
    "day2_night_message_dain_generic": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_dain",
        "next": "day2_night_message_dain_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이에게 메시지를 보냈다. '다인아, 오늘 하루 수고했어! 내일 보자.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent Dain a message. 'Hey Dain, great job today! See you tomorrow.'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a Dain. '¡Oye Dain, buen trabajo hoy! Nos vemos mañana.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインにメッセージを送った。「ダイン、今日はお疲れ！また明日ね。」*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message à Dain. 'Hé Dain, bravo pour aujourd'hui ! À demain.'*"
            }
        }
    },
    "day2_night_message_dain_reply": {
        "type": "free_talk",
        "maxTurns": 5,
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "affinityChar": "Dain",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_night_message_dain_reply_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_night_message_dain_reply_normal"
            },
            {
                "minAffinity": -100,
                "next": "day2_night_message_dain_reply_low"
            }
        ],
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*활기찬 답장.* '당연하지! 내가 이길 거니까 지갑 준비해둬! 하하, 잘 자, {name}!'",
                "context": "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 다인이는 주인공의 메시지에 활기차게 답장을 보낸 상태입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
                "personality": "털털하고 시원시원한 성격의 배구부 에이스. 주인공과 함께 있는 시간을 즐거워하며 장난스럽고 활기차게 대화함."
            },
            "en": {
                "name": "Dain",
                "text": "*An energetic reply.* 'Of course! I'm gonna win, so have your wallet ready! Haha, good night, {name}!'",
                "context": "It's nighttime, and they are chatting via smartphone messages from their respective homes. Dain has sent an energetic reply to the protagonist's message. Please continue the conversation until it naturally wraps up. Once the conversation concludes, the protagonist will drift off to sleep looking forward to tomorrow. Only on the final turn, say goodnight or suggest seeing each other at school tomorrow to end the conversation naturally.",
                "personality": "An easygoing and refreshingly straightforward volleyball team ace. She enjoys spending time with the protagonist and converses in a playful, energetic manner."
            },
            "es": {
                "name": "Dain",
                "text": "*Una respuesta enérgica.* '¡Por supuesto! Voy a ganar, ¡así que ten tu billetera lista! Jaja, buenas noches, {name}.'",
                "context": "Es de noche y están chateando por mensajes de celular desde sus respectivas casas. Dain ha enviado una respuesta enérgica al mensaje del protagonista. Continúa la conversación hasta que termine naturalmente. Solo en el último turno, di buenas noches o sugiere verse en la escuela mañana.",
                "personality": "Una as del equipo de voleibol, relajada y refrescantemente directa. Disfruta pasar tiempo con el protagonista y conversa de manera juguetona y enérgica."
            },
            "ja": {
                "name": "ダイン",
                "text": "*元気いっぱいの返信。* 「当たり前じゃん！あたしが勝つから、財布用意しといてね！ハハ、おやすみ、{name}！」",
                "context": "夜、それぞれの家からスマートフォンのメッセージでやり取りしている状況です。ダインは主人公のメッセージに元気いっぱいに返信した状態です。会話が自然に終わるまで続けてください。最後のターンでのみ、おやすみの挨拶や明日学校で会おうと言って自然に会話を終了してください。",
                "personality": "さっぱりして爽やかなバレー部のエース。主人公と過ごす時間を楽しみ、明るくお茶目に会話する。"
            },
            "fr": {
                "name": "Dain",
                "text": "*Une réponse énergique.* 'Bien sûr ! Je vais gagner, alors prépare ton portefeuille ! Haha, bonne nuit, {name} !'",
                "context": "C'est la nuit, et ils discutent par messages sur smartphone depuis chez eux. Dain a envoyé une réponse énergique au message du protagoniste. Continue la conversation jusqu'à ce qu'elle se termine naturellement. Une fois la conversation terminée, le protagoniste s'endormira en pensant à demain. Seulement au dernier tour, dis bonne nuit ou suggère de se voir à l'école demain pour terminer la conversation naturellement.",
                "personality": "Une joueuse de volley-ball décontractée et rafraîchissante. Elle aime passer du temps avec le protagoniste et discute de manière enjouée et énergique."
            }
        }
    },
    "day2_night_message_dain_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이의 활기찬 에너지 덕분에 나까지 기운이 난다. '지갑 준비해둬'라며 장난치는 모습이 눈앞에 선하다. 내일 떡볶이 내기는 그녀를 위해서라도 꼭 져줘야 할까?*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain's vibrant energy lifts my spirits too. I can practically see her grinning as she teases 'have your wallet ready.' Should I maybe lose the tteokbokki bet on purpose just for her tomorrow?*"
            },
            "es": {
                "name": "Yo",
                "text": "*La energía vibrante de Dain también me levanta el ánimo. Casi puedo verla sonriendo mientras bromea con 'ten tu billetera lista'. ¿Debería perder la apuesta de tteokbokki a propósito solo por ella mañana?*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインの活発なエネルギーのおかげで僕まで元気が出る。「財布用意しといてね」とからかう彼女の笑顔が目に浮かぶようだ。明日のトッポッキの賭け、彼女のためにわざと負けてあげようかな？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*L'énergie vibrante de Dain me remonte aussi le moral. Je la vois pratiquement sourire en me taquinant « prépare ton portefeuille ». Devrais-je peut-être perdre le pari tteokbokki exprès pour elle demain ?*"
            }
        }
    },
    "day2_night_message_dain_reply_normal": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이와 즐겁게 대화를 마쳤다. 내일 떡볶이 내기에서 지지 않도록 마음의 준비를 해야겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I had a fun chat with Dain. I should mentally prepare so I don't lose the tteokbokki bet tomorrow.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Tuve una charla divertida con Dain. Debería prepararme mentalmente para no perder la apuesta de tteokbokki mañana.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインと楽しく会話を終えた。明日のトッポッキの賭けで負けないように心の準備をしておかないと。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai eu une discussion amusante avec Dain. Je devrais me préparer mentalement pour ne pas perdre le pari tteokbokki demain.*"
            }
        }
    },
    "day2_night_message_dain_reply_low": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_sad.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이의 반응이 평소보다 무미건조하다. 내가 보낸 메시지가 귀찮았던 건 아닐지, 핸드폰을 든 손이 어색해진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain's response is more lifeless than usual. I wonder if my message annoyed her. The hand holding my phone feels awkward.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La respuesta de Dain es más apagada de lo normal. Me pregunto si mi mensaje la molestó. La mano que sostiene mi celular se siente incómoda.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインの反応がいつもより素っ気ない。送ったメッセージが迷惑だったのかな？携帯を持つ手がぎこちなくなる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La réponse de Dain est plus morne que d'habitude. Je me demande si mon message l'a agacée. La main tenant mon téléphone se sent maladroite.*"
            }
        }
    },
    "day2_night_message_nurse": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_message_nurse_rest",
                "condition": "day2_met_nurse_after"
            },
            {
                "next": "day2_night_message_nurse_rest",
                "condition": "woke_up_in_nurse_room"
            },
            {
                "next": "day2_night_message_nurse_generic"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님께 어떤 메시지를 보낼까?*"
            },
            "en": {
                "name": "Me",
                "text": "*What should I text the School Nurse?*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿Qué le escribo a la Enfermera?*"
            },
            "ja": {
                "name": "僕",
                "text": "*保健先生にどんなメッセージを送ろうか？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Qu'est-ce que je devrais écrire à l'infirmière scolaire ?*"
            }
        }
    },
    "day2_night_message_nurse_rest": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_nurse",
        "next": "day2_night_message_nurse_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님께 메시지를 보냈다. '선생님, 오늘 감사했어요. 덕분에 잘 쉬었어요.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent the School Nurse a message. 'Thank you for today, ma'am. I got a good rest thanks to you.'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a la Enfermera. 'Gracias por lo de hoy, señorita. Descansé bien gracias a usted.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*保健先生にメッセージを送った。「先生、今日はありがとうございました。おかげでゆっくり休めました。」*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message à l'infirmière scolaire. 'Merci pour aujourd'hui, madame. J'ai bien pu me reposer grâce à vous.'*"
            }
        }
    },
    "day2_night_message_nurse_generic": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_nurse",
        "next": "day2_night_message_nurse_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님께 메시지를 보냈다. '선생님, 오늘 하루 수고하셨어요. 안녕히 주무세요.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent the School Nurse a message. 'Thank you for your hard work today, ma'am. Good night.'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a la Enfermera. 'Gracias por su arduo trabajo hoy, señorita. Buenas noches.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*保健先生にメッセージを送った。「先生、今日はお疲れ様でした。おやすみなさい。」*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message à l'infirmière scolaire. 'Merci pour votre travail aujourd'hui, madame. Bonne nuit.'*"
            }
        }
    },
    "day2_night_message_nurse_reply": {
        "type": "free_talk",
        "maxTurns": 5,
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "affinityChar": "Nurse",
        "affinityBranches": [
            {
                "minAffinity": 40,
                "next": "day2_night_message_nurse_reply_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_night_message_nurse_reply_normal"
            },
            {
                "minAffinity": -100,
                "next": "day2_night_message_nurse_reply_low"
            }
        ],
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*잠시 후, 답장이 왔다.* '응, 읽었어. 무리하지 말고 푹 쉬어. 내일 봐, {name}.'",
                "context": "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 보건선생님은 주인공의 메시지에 답장을 보낸 상태입니다. 주인공과의 관계에 따라 답장의 톤이 달라집니다. 호감도가 높으면 장난스럽고 매혹적으로, 호감도가 낮으면 사무적이고 거리감 있게 대화하세요. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
                "personality": "나른하고 섹시하면서도 다정한 보건선생님. 주인공에게 묘한 매력을 느끼며 대담하게 유혹하는 대범한 성격."
            },
            "en": {
                "name": "School Nurse",
                "text": "*After a moment, a reply came.* 'Got it. Don't push yourself—get some rest. See you tomorrow, {name}.'",
                "context": "It's nighttime, and they are chatting via smartphone messages from their respective homes. The School Nurse has sent a reply to the protagonist's message. Her tone varies depending on her relationship with the protagonist—if affinity is high, she is playful and alluring; if affinity is low, she is professional and distant. Please continue the conversation until it naturally wraps up. Once the conversation concludes, the protagonist will drift off to sleep looking forward to tomorrow. Only on the final turn, say goodnight or suggest seeing each other at school tomorrow to end the conversation naturally.",
                "personality": "A languid, alluring, yet warmhearted school nurse. She feels a mysterious attraction to the protagonist and has a bold, daringly flirtatious personality."
            },
            "es": {
                "name": "Enfermera",
                "text": "*Después de un momento, llegó la respuesta.* 'Entendido. No te esfuerces demasiado, descansa bien. Nos vemos mañana, {name}.'",
                "context": "Es de noche y están chateando por mensajes de celular desde sus respectivas casas. La Enfermera ha respondido al mensaje del protagonista. Su tono varía según la relación: si la afinidad es alta, es juguetona y seductora; si es baja, es profesional y distante. Continúa la conversación hasta que termine naturalmente. Solo en el último turno, di buenas noches o sugiere verse en la escuela mañana.",
                "personality": "Una enfermera escolar lánguida, seductora pero cariñosa. Siente una misteriosa atracción hacia el protagonista y tiene una personalidad audaz y coqueta."
            },
            "ja": {
                "name": "保健先生",
                "text": "*少しして、返信が来た。* 「了解。無理しないで、ゆっくり休みなさい。また明日ね、{name}。」",
                "context": "夜、それぞれの家からスマートフォンのメッセージでやり取りしている状況です。保健先生は主人公のメッセージに返信した状態です。好感度が高ければ悪戯っぽく魅惑的に、低ければ事務的で距離を置いた態度で会話してください。会話が自然に終わるまで続けてください。最後のターンでのみ、おやすみの挨拶や明日学校で会おうと言って自然に会話を終了してください。",
                "personality": "けだるくて色っぽくも温かい保健の先生。主人公に不思議な魅力を感じ、大胆に誘惑する奔放な性格。"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Après un moment, une réponse est arrivée.* 'Compris. Ne te force pas—repose-toi. À demain, {name}.'",
                "context": "C'est la nuit, et ils discutent par messages sur smartphone depuis chez eux. L'infirmière scolaire a répondu au message du protagoniste. Son ton varie selon sa relation avec le protagoniste—si l'affinité est élevée, elle est joueuse et séduisante ; si l'affinité est basse, elle est professionnelle et distante. Continue la conversation jusqu'à ce qu'elle se termine naturellement. Une fois la conversation terminée, le protagoniste s'endormira en pensant à demain. Seulement au dernier tour, dis bonne nuit ou suggère de se voir à l'école demain pour terminer la conversation naturellement.",
                "personality": "Une infirmière scolaire languissante, séduisante mais chaleureuse. Elle ressent une attirance mystérieuse pour le protagoniste et a une personnalité audacieuse et fli rteuse."
            }
        }
    },
    "day2_night_message_nurse_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 매혹적인 말투가 귓가에 맴도는 것 같다. 화면 너머로 그녀의 미소가 보이는 듯해 심장이 떨린다. 내일은 무슨 일이 있어도 보건실에 들러야겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Her alluring tone seems to linger in my ears. I can almost see her smile through the screen, and my heart trembles. No matter what happens tomorrow, I have to stop by the nurse's office.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Su tono seductor parece quedarse en mis oídos. Casi puedo ver su sonrisa a través de la pantalla, y mi corazón tiembla. Pase lo que pase mañana, tengo que pasar por la enfermería.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生の魅惑的な話し方が耳に残っているようだ。画面の向こうに彼女の微笑みが見える気がして、心臓が震える。明日は何があっても保健室に寄らないと。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Son ton séduisant semble persister dans mes oreilles. Je peux presque voir son sourire à travers l'écran, et mon cœur tremble. Quoi qu'il arrive demain, je dois passer à l'infirmerie.*"
            }
        }
    },
    "day2_night_message_nurse_reply_normal": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님과 무사히 연락을 마쳤다. 내일 학교에서 뵈면 반갑게 인사드려야겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I finished texting the School Nurse without any issues. I should greet her warmly if I see her at school tomorrow.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Terminé de escribirle a la Enfermera sin problemas. Debería saludarla con cariño si la veo mañana en la escuela.*"
            },
            "ja": {
                "name": "僕",
                "text": "*保健先生と無事にやり取りを終えた。明日学校でお会いしたら、元気に挨拶しないと。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai fini de discuter avec l'infirmière scolaire sans problème. Je devrais la saluer chaleureusement si je la vois à l'école demain.*"
            }
        }
    },
    "day2_night_message_nurse_reply_low": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 답장이 너무나 사무적이다. 단순히 학생 중 한 명으로만 대하시는 것 같아 씁쓸한 기분이 든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Her reply is painfully matter-of-fact. She's clearly treating me as just another student, and a bitter feeling sinks in.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Su respuesta es dolorosamente formal. Claramente me está tratando como un estudiante más, y un sentimiento amargo se instala en mí.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生の返信があまりにも事務的だ。単なる生徒の一人として扱われているようで、苦い気持ちが込み上げてくる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Sa réponse est douloureusement factuelle. Elle me traite clairement comme un simple élève, et un sentiment amer s'installe.*"
            }
        }
    },
    "day2_night_message_teacher": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_teacher",
        "next": "day2_night_message_teacher_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*담임선생님께 메시지를 보냈다. '선생님, 오늘 하루 수고하셨습니다. 안녕히 주무세요.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent the Homeroom Teacher a message. 'Thank you for your hard work today, ma'am. Good night.'*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le envié un mensaje a la Profesora. 'Gracias por su arduo trabajo hoy, profesora. Buenas noches.'*"
            },
            "ja": {
                "name": "僕",
                "text": "*担任先生にメッセージを送った。「先生、今日はお疲れ様でした。おやすみなさい。」*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai envoyé un message à la professeure principale. 'Merci pour votre travail aujourd'hui, madame. Bonne nuit.'*"
            }
        }
    },
    "day2_night_message_teacher_reply": {
        "type": "free_talk",
        "maxTurns": 5,
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "affinityChar": "Teacher",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_night_message_teacher_reply_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_night_message_teacher_reply_normal"
            },
            {
                "minAffinity": -100,
                "next": "day2_night_message_teacher_reply_low"
            }
        ],
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*조금 늦게 도착한 답장.* '어머, {name}. 이 시간에 메시지라니 조금 놀랐네. 그래도 걱정해줘서 고마워. 너도 푹 자고 내일 지각하지 마렴.'",
                "context": "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 담임선생님은 주인공의 메시지에 조금 당황하면서도 고마워하며 답장을 보낸 상태입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
                "personality": "공과 사가 뚜렷하지만 주인공에게는 은근히 약한 모습을 보이는 담임선생님. 따뜻하고 세심하게 챙기면서도 선을 지키려 함."
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*A slightly delayed reply.* 'Oh my, {name}. A message at this hour — I'm a little surprised. But thank you for thinking of me. You get a good night's sleep too, and don't be late tomorrow.'",
                "context": "It's nighttime, and they are chatting via smartphone messages from their respective homes. The Homeroom Teacher was a bit flustered but grateful for the protagonist's message, and has sent a reply. Please continue the conversation until it naturally wraps up. Once the conversation concludes, the protagonist will drift off to sleep looking forward to tomorrow. Only on the final turn, say goodnight or suggest seeing each other at school tomorrow to end the conversation naturally.",
                "personality": "A homeroom teacher who keeps a clear line between professional and personal, yet has a soft spot for the protagonist. She cares warmly and attentively while trying to maintain boundaries."
            },
            "es": {
                "name": "Profesora",
                "text": "*Una respuesta un poco tardía.* 'Ay, {name}. Un mensaje a esta hora, me sorprendió un poco. Pero gracias por pensar en mí. Tú también duerme bien, y no llegues tarde mañana.'",
                "context": "Es de noche y están chateando por mensajes de celular desde sus respectivas casas. La Profesora se sorprendió un poco pero agradeció el mensaje del protagonista, y ha enviado una respuesta. Continúa la conversación hasta que termine naturalmente. Solo en el último turno, di buenas noches o sugiere verse en la escuela mañana.",
                "personality": "Una profesora titular que mantiene una línea clara entre lo profesional y lo personal, pero tiene debilidad por el protagonista. Cuida con calidez y atención mientras intenta mantener los límites."
            },
            "ja": {
                "name": "担任先生",
                "text": "*少し遅れて届いた返信。* 「あら、{name}。こんな時間にメッセージなんて、ちょっとびっくりしたわ。でも気にかけてくれてありがとう。あなたもぐっすり寝て、明日遅刻しないようにね。」",
                "context": "夜、それぞれの家からスマートフォンのメッセージでやり取りしている状況です。担任先生は主人公のメッセージに少し戸惑いながらも嬉しく思い、返信した状態です。会話が自然に終わるまで続けてください。最後のターンでのみ、おやすみの挨拶や明日学校で会おうと言って自然に会話を終了してください。",
                "personality": "公私の区別がはっきりしているが、主人公にはひそかに弱い担任の先生。温かく細やかに気を配りながらも、一線を守ろうとする。"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Une réponse légèrement tardive.* 'Oh là là, {name}. Un message à cette heure — je suis un peu surprise. Mais merci de penser à moi. Dors bien toi aussi, et ne sois pas en retard demain.'",
                "context": "C'est la nuit, et ils discutent par messages sur smartphone depuis chez eux. La professeure principale était un peu troublée mais reconnaissante du message du protagoniste, et a envoyé une réponse. Continue la conversation jusqu'à ce qu'elle se termine naturellement. Une fois la conversation terminée, le protagoniste s'endormira en pensant à demain. Seulement au dernier tour, dis bonne nuit ou suggère de se voir à l'école demain pour terminer la conversation naturellement.",
                "personality": "Une professeure principale qui maintient une ligne claire entre le professionnel et le personnel, mais qui a un faible pour le protagoniste. Elle prend soin de lui avec chaleur et attention tout en essayant de garder ses distances."
            }
        }
    },
    "day2_night_message_teacher_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 다정한 답장에 마음이 따뜻해진다. 학생으로서가 아니라, 조금은 한 명의 인격체로 존중받는 기분이 들어 내일 학교 가는 길이 기다려진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The warmth in her reply makes my heart feel full. It's not just being treated as a student — I feel a little respected as a person, and it makes me look forward to going to school tomorrow.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La calidez en su respuesta hace que mi corazón se sienta lleno. No es solo ser tratado como un estudiante — me siento un poco respetado como persona, y eso me hace esperar con ansias ir a la escuela mañana.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生の温かい返信に心が満たされる。ただの生徒としてではなく、一人の人間として少し認められた気がして、明日学校に行くのが楽しみになる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La chaleur de sa réponse remplit mon cœur. Ce n'est pas juste être traité comme un élève — je me sens un peu respecté en tant que personne, et ça me donne envie d'aller à l'école demain.*"
            }
        }
    },
    "day2_night_message_teacher_reply_normal": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님과 무사히 연락을 마쳤다. 내일은 지각하지 않도록 주의해야겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I finished chatting with the Homeroom Teacher without any problems. I'd better make sure I'm not late tomorrow.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Terminé de chatear con la Profesora sin problemas. Mejor me aseguro de no llegar tarde mañana.*"
            },
            "ja": {
                "name": "僕",
                "text": "*担任先生と無事にやり取りを終えた。明日は遅刻しないように気をつけないと。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai fini de discuter avec la professeure principale sans problème. Je ferais mieux de ne pas être en retard demain.*"
            }
        }
    },
    "day2_night_message_teacher_reply_low": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 답장이 짧고 엄격하다. 사적인 시간에 연락한 것이 큰 실례였던 것 같아 후회가 밀려온다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Her reply is short and strict. The regret of texting her during her personal time washes over me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Su respuesta es corta y estricta. El arrepentimiento de haberle escrito en su tiempo personal me invade.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生の返信が短くて厳しい。プライベートな時間に連絡してしまったことへの後悔が押し寄せてくる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Sa réponse est courte et stricte. Le regret de lui avoir écrit pendant son temps personnel m'envahit.*"
            }
        }
    },
    "day2_night_goodnight_start": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_goodnight_stars",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*스마트폰을 내려놓고 창가로 다가갔다. 잠들기 전에 잠깐, 이 밤을 느껴보고 싶었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I set my phone down and walk over to the window. Before falling asleep, I just want to take in this night for a moment.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dejé el celular y me acerqué a la ventana. Antes de dormir, solo quiero sentir esta noche por un momento.*"
            },
            "ja": {
                "name": "僕",
                "text": "*スマホを置いて窓辺に近づいた。眠る前に少しだけ、この夜を感じたかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je pose mon téléphone et me dirige vers la fenêtre. Avant de m'endormir, je veux juste profiter de cette nuit un instant.*"
            }
        }
    },
    "day2_night_goodnight_stars": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_goodnight_sounds",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*창문을 열자 차가운 밤공기가 밀려든다. 하늘 위로 별들이 수놓아져 있다. 어제보다 더 선명하게 보이는 것 같아... 유나가 말했던 '세 번째 별'이 문득 떠오른다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Opening the window, cold night air rushes in. Stars are scattered across the sky above. They seem even brighter than yesterday... Yuna's mention of 'the third star' crosses my mind.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al abrir la ventana, el aire frío de la noche entra de golpe. Las estrellas están esparcidas por el cielo. Parecen aún más brillantes que ayer... La mención de Yuna sobre 'la tercera estrella' me viene a la mente.*"
            },
            "ja": {
                "name": "僕",
                "text": "*窓を開けると、冷たい夜の空気が押し寄せてくる。空には星が散りばめられている。昨日よりも鮮明に見える気がする…ユナが言っていた「三番目の星」のことがふと頭をよぎる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En ouvrant la fenêtre, l'air froid de la nuit s'engouffre. Des étoiles sont éparpillées dans le ciel. Elles semblent encore plus brillantes qu'hier... La mention de Yuna de « la troisième étoile » me traverse l'esprit.*"
            }
        }
    },
    "day2_night_goodnight_sounds": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_goodnight_tomorrow",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*벌레 소리가 끊임없이 이어진다. 먼 곳에서 자동차 경적 소리가 한 번 울리고 다시 고요해진다. 이 동네의 밤은... 참 조용하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The chirping of insects continues endlessly. A car horn sounds once from somewhere far away, then silence returns. The nights in this neighborhood... are really quiet.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El canto de los insectos continúa sin cesar. Una bocina de auto suena una vez desde algún lugar lejano, y luego vuelve el silencio. Las noches en este vecindario... son realmente tranquilas.*"
            },
            "ja": {
                "name": "僕",
                "text": "*虫の声が絶え間なく続いている。遠くから車のクラクションが一度鳴って、また静寂に戻る。この辺りの夜は…本当に静かだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le chant des insectes continue sans fin. Un klaxon retentit une fois au loin, puis le silence revient. Les nuits dans ce quartier... sont vraiment calmes.*"
            }
        }
    },
    "day2_night_goodnight_tomorrow": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_goodnight_close",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*내일이면 벌써 전학 온 지 3일째. 서연이, 유나, 다인이, 선생님들... 그들과의 관계는 어떻게 변해갈까. 기대와 불안이 뒤섞인 묘한 설렘이 가슴을 채운다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Tomorrow will already be my third day since transferring. Seoyeon, Yuna, Dain, the teachers... How will my relationships with them change? A strange flutter of anticipation and anxiety fills my chest.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mañana será mi tercer día desde que me transferí. Seoyeon, Yuna, Dain, las profesoras... ¿Cómo cambiarán mis relaciones con ellas? Una extraña mezcla de expectativa y ansiedad llena mi pecho.*"
            },
            "ja": {
                "name": "僕",
                "text": "*明日でもう転校して3日目。ソヨン、ユナ、ダイン、先生たち…彼女たちとの関係はどう変わっていくんだろう。期待と不安が入り混じった不思議なときめきが胸を満たす。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Demain sera déjà mon troisième jour depuis le transfert. Seoyeon, Yuna, Dain, les professeures... Comment mes relations avec elles vont-elles évoluer ? Un étrange mélange d'anticipation et d'anxiété remplit ma poitrine.*"
            }
        }
    },
    "day2_night_goodnight_close": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_dream_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*창문을 닫고 커튼을 쳤다. 이불 속으로 파고들어 눈을 감았다. 오늘도 고생 많았어, 나...*"
            },
            "en": {
                "name": "Me",
                "text": "*I close the window and draw the curtains. I burrow into my blanket and shut my eyes. Good job today, me...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cierro la ventana y corro las cortinas. Me acurruco bajo la cobija y cierro los ojos. Buen trabajo hoy, yo...*"
            },
            "ja": {
                "name": "僕",
                "text": "*窓を閉めてカーテンを引いた。布団に潜り込んで目を閉じる。今日もお疲れ様、僕…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je ferme la fenêtre et tire les rideaux. Je me blottis dans ma couverture et ferme les yeux. Bien joué aujourd'hui, moi...*"
            }
        }
    },
    "day2_night_dream_start": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_dream_vision",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*의식이 아스라하게 흐려진다... 꿈인지 현실인지 모를 공간에 서 있다. 학교 옥상인 것 같기도 하고, 어딘지 모를 정원 같기도 한 곳.*"
            },
            "en": {
                "name": "Me",
                "text": "*My consciousness fades into a haze... I'm standing in a space where I can't tell if it's a dream or reality. It looks like the school rooftop, or maybe some unknown garden.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mi conciencia se desvanece en una neblina... Estoy de pie en un espacio donde no puedo distinguir si es un sueño o la realidad. Parece la azotea de la escuela, o quizás algún jardín desconocido.*"
            },
            "ja": {
                "name": "僕",
                "text": "*意識がぼんやりと霞んでいく…夢なのか現実なのかわからない空間に立っている。学校の屋上のようでもあり、どこかの知らない庭園のようでもある場所。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Ma conscience se dissipe dans une brume... Je me tiens dans un espace où je ne sais pas si c'est un rêve ou la réalité. Ça ressemble au toit de l'école, ou peut-être à un jardin inconnu.*"
            }
        }
    },
    "day2_night_dream_vision": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_dream_end",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "*누군가의 목소리가 바람에 실려 온다. '내일... 너에게 보여주고 싶은 것이 있어.' 목소리의 주인공은 알 수 없지만, 따뜻하면서도 간절한 울림이 귓가에 맴돈다.*"
            },
            "en": {
                "name": "???",
                "text": "*Someone's voice drifts in on the wind. 'Tomorrow... there's something I want to show you.' I can't tell who the voice belongs to, but its warm yet desperate resonance lingers in my ears.*"
            },
            "es": {
                "name": "???",
                "text": "*La voz de alguien llega con el viento. 'Mañana... hay algo que quiero mostrarte.' No puedo distinguir a quién pertenece la voz, pero su resonancia cálida pero desesperada se queda en mis oídos.*"
            },
            "ja": {
                "name": "???",
                "text": "*誰かの声が風に乗って届く。「明日…君に見せたいものがあるんだ。」声の主はわからないけれど、温かくも切実な響きが耳に残る。*"
            },
            "fr": {
                "name": "???",
                "text": "*La voix de quelqu'un flotte dans le vent. « Demain... il y a quelque chose que je veux te montrer. » Je ne sais pas à qui appartient cette voix, mais sa résonance chaude et désespérée persiste dans mes oreilles.*"
            }
        }
    },
    "day2_night_dream_end": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_final_scene",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*손을 뻗었지만 아무것도 잡히지 않는다. 목소리는 서서히 멀어지고... 의식이 깊고 깊은 잠 속으로 가라앉는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I reach out my hand, but nothing is there. The voice slowly fades away... and my consciousness sinks into a deep, deep sleep.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Extiendo la mano, pero no hay nada. La voz se desvanece lentamente... y mi conciencia se hunde en un sueño profundo, profundo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*手を伸ばしたけれど何も掴めない。声は少しずつ遠ざかり…意識が深い深い眠りの中へ沈んでいく。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je tends la main, mais il n'y a rien. La voix s'estompe lentement... et ma conscience sombre dans un sommeil profond, très profond.*"
            }
        }
    },
    "day2_final_scene": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "fade": true,
        "changeDay": 3,
        "next": "day3_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어둠 속에서 희미한 빛이 번진다. 내일은 또 어떤 진실이 나를 기다리고 있을까... 무거운 눈꺼풀을 닫으며 깊은 잠에 빠져든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A faint light bleeds through the darkness. What truths await me tomorrow... I close my heavy eyelids and drift into a deep slumber.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Una luz tenue se filtra a través de la oscuridad. Qué verdades me esperan mañana... Cierro mis pesados párpados y caigo en un profundo sueño.*"
            },
            "ja": {
                "name": "僕",
                "text": "*闇の中でかすかな光が滲む。明日はどんな真実が僕を待っているんだろう…重いまぶたを閉じて、深い眠りに落ちていく。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Une faible lumière perce l'obscurité. Quelles vérités m'attendent demain... Je ferme mes lourdes paupières et sombre dans un profond sommeil.*"
            }
        }
    }
});
