/**
 * ============================================================================
 * CUPID - day2_1_morning (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day2_1_morning.js + en_day2_1_morning.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[2]) SCENARIO[2] = {};

Object.assign(SCENARIO[2], {
    "day2_start": {
        "background": "assets/images/background/room_my.png",
        "bgm": "intro.mp3",
        "character": null,
        "next": "day2_start_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 뜨자마자 어제 만난 얼굴들이 스쳐 지나간다. 전학 이틀째의 아침, 설렘 때문인지 알람이 울리기도 전에 잠에서 깨버렸다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The moment I open my eyes, the faces I met yesterday flash through my mind. The morning of my second day at the new school — I woke up before the alarm, probably because of the excitement.*"
            },
            "es": {
                "name": "Yo",
                "text": "*En cuanto abro los ojos, los rostros que conocí ayer pasan por mi mente. La mañana de mi segundo día en la nueva escuela — me desperté antes de la alarma, probablemente por la emoción.*"
            },
            "ja": {
                "name": "僕",
                "text": "*目を開けた瞬間、昨日出会った顔が頭をよぎる。転校二日目の朝、ワクワクしすぎたのか、アラームが鳴る前に目が覚めてしまった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*À l'instant où j'ouvre les yeux, les visages rencontrés hier me reviennent en mémoire. Le matin de mon deuxième jour dans ma nouvelle école — je me suis réveillé avant le réveil, sans doute à cause de l'excitation.*"
            }
        }
    },
    "day2_start_2": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_morning_phone",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어제의 일들이 마치 꿈처럼 달콤하게 느껴지지만... 책상 위에 놓인 교복이 이곳이 현실임을 말해준다. 오늘도 좋은 일이 생길 것 같아.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yesterday feels as sweet as a dream... but the school uniform on my desk reminds me this is reality. I have a feeling something good will happen today too.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Lo de ayer se siente dulce como un sueño... pero el uniforme sobre mi escritorio me recuerda que esto es la realidad. Tengo el presentimiento de que hoy también pasará algo bueno.*"
            },
            "ja": {
                "name": "僕",
                "text": "*昨日のことがまるで夢のように甘く感じられるけど…机の上に置かれた制服が、ここが現実だと教えてくれる。今日もいいことがありそうな気がする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Hier semble aussi doux qu'un rêve... mais l'uniforme scolaire sur mon bureau me rappelle que c'est la réalité. J'ai le sentiment que quelque chose de bien va aussi se passer aujourd'hui.*"
            }
        }
    },
    "day2_morning_phone": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_morning_phone_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*침대 옆 스마트폰을 집어 든다. 혹시 어젯밤 사이에 누가 메시지를 보내지 않았을까... 화면을 확인해본다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I pick up the smartphone beside my bed. Maybe someone sent me a message overnight... I check the screen.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Tomo el celular que está al lado de mi cama. Tal vez alguien me envió un mensaje anoche... Reviso la pantalla.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ベッドの横のスマホを手に取る。もしかして昨夜の間に誰かからメッセージが来てないかな…画面を確認する。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je prends le smartphone à côté de mon lit. Peut-être que quelqu'un m'a envoyé un message pendant la nuit... Je regarde l'écran.*"
            }
        }
    },
    "day2_morning_phone_2": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_morning_routine",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*특별한 메시지는 없다. 괜히 기대한 건가... 하지만 오늘 학교에서 직접 만나면 되니까. 기대감을 안고 침대에서 일어난다.*"
            },
            "en": {
                "name": "Me",
                "text": "*No messages. Was I hoping for nothing...? But I'll see everyone at school today anyway. I get out of bed, filled with anticipation.*"
            },
            "es": {
                "name": "Yo",
                "text": "*No hay mensajes. ¿Me hice ilusiones por nada...? Pero de todos modos los veré en la escuela hoy. Me levanto de la cama lleno de expectativa.*"
            },
            "ja": {
                "name": "僕",
                "text": "*特にメッセージはない。期待しすぎたかな…でも今日学校で直接会えばいいか。期待を胸にベッドから起き上がる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Aucun message. Est-ce que j'espérais pour rien ?... Mais je verrai tout le monde à l'école aujourd'hui de toute façon. Je sors du lit, empli d'impatience.*"
            }
        }
    },
    "day2_morning_routine": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_morning_routine_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*세수를 하고 거울 앞에 선다. 어제보다 조금은 나아진 얼굴인 것 같다. 교복으로 갈아입고 머리를 정돈한다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I wash my face and stand in front of the mirror. I think I look a bit better than yesterday. I change into my uniform and fix my hair.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me lavo la cara y me paro frente al espejo. Creo que me veo un poco mejor que ayer. Me cambio al uniforme y me arreglo el cabello.*"
            },
            "ja": {
                "name": "僕",
                "text": "*顔を洗って鏡の前に立つ。昨日よりちょっとマシな顔をしてる気がする。制服に着替えて髪を整える。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je me lave le visage et me place devant le miroir. Je crois que j'ai meilleure mine qu'hier. J'enfile mon uniforme et me coiffe.*"
            }
        }
    },
    "day2_morning_routine_2": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_breakfast",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*거울 속 교복 차림의 내 모습이 이제는 조금 익숙하다. 넥타이 매듭을 한 번 고쳐 매고, 흐트러진 옷깃을 바로잡는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*My reflection in the uniform looks a little more familiar now. I retie my necktie and straighten my collar.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mi reflejo con el uniforme ya se ve un poco más familiar. Reajusto el nudo de la corbata y acomodo el cuello.*"
            },
            "ja": {
                "name": "僕",
                "text": "*鏡に映る制服姿の自分が、もう少し見慣れてきた。ネクタイの結び目を直して、乱れた襟を正す。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mon reflet en uniforme me paraît un peu plus familier maintenant. Je refais mon nœud de cravate et ajuste mon col.*"
            }
        }
    },
    "day2_breakfast": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_breakfast_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*부엌에 내려오니 식탁 위에 밥과 계란후라이가 놓여 있다. 엄마는 벌써 출근한 모양이다. 혼자 먹는 아침이지만, 왠지 오늘은 외롭지 않다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I come down to the kitchen and find rice and a fried egg on the table. Mom must have already left for work. Eating alone, but somehow I don't feel lonely today.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Bajo a la cocina y encuentro arroz y un huevo frito en la mesa. Mamá ya se fue a trabajar. Desayuno solo, pero por alguna razón hoy no me siento solo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*台所に降りると、テーブルの上にご飯と目玉焼きが置いてある。お母さんはもう出勤したみたいだ。一人の朝ごはんだけど、なぜか今日は寂しくない。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je descends à la cuisine et trouve du riz et un œuf au plat sur la table. Maman doit déjà être partie au travail. Je mange seul, mais bizarrement je ne me sens pas seul aujourd'hui.*"
            }
        }
    },
    "day2_breakfast_2": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_start_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*후다닥 아침을 해치우고 가방을 챙긴다. 시계를 보니 여유 있는 시간이다. 느긋하게 등교할 수 있겠어.*"
            },
            "en": {
                "name": "Me",
                "text": "*I scarf down breakfast and grab my bag. Checking the clock, I have plenty of time. I can take a leisurely walk to school.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Devoro el desayuno rápidamente y agarro mi mochila. Al ver el reloj, tengo tiempo de sobra. Puedo caminar tranquilamente a la escuela.*"
            },
            "ja": {
                "name": "僕",
                "text": "*さっと朝ごはんを済ませてカバンを用意する。時計を見ると余裕のある時間だ。のんびり登校できそう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'avale mon petit-déjeuner et attrape mon sac. En vérifiant l'heure, j'ai largement le temps. Je peux prendre mon temps pour aller à l'école.*"
            }
        }
    },
    "day2_start_3": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_road_to_school",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*자, 가보자. 오늘은 또 어떤 떨림이 나를 기다리고 있을까?*"
            },
            "en": {
                "name": "Me",
                "text": "*Alright, let's go. I wonder what kind of excitement awaits me today?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Bueno, vamos. ¿Qué tipo de emociones me esperarán hoy?*"
            },
            "ja": {
                "name": "僕",
                "text": "*さあ、行こう。今日はどんなドキドキが僕を待ってるんだろう？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Allez, c'est parti. Je me demande quel genre de surprises m'attend aujourd'hui ?*"
            }
        }
    },
    "day2_road_to_school": {
        "background": "assets/images/background/street.png",
        "next": "day2_road_to_school_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집을 나서자 아침 공기가 상쾌하게 폐를 채운다. 어제보다 부드러운 바람이 불어온다. 봄 냄새가 난다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Stepping outside, the fresh morning air fills my lungs. A softer breeze than yesterday blows by. It smells like spring.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al salir de casa, el aire fresco de la mañana llena mis pulmones. Sopla una brisa más suave que la de ayer. Huele a primavera.*"
            },
            "ja": {
                "name": "僕",
                "text": "*家を出ると、朝の新鮮な空気が肺を満たす。昨日より柔らかい風が吹いてくる。春の匂いがする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En sortant, l'air frais du matin emplit mes poumons. Une brise plus douce qu'hier souffle. Ça sent le printemps.*"
            }
        }
    },
    "day2_road_to_school_2": {
        "background": "assets/images/background/street.png",
        "next": "day2_road_to_school_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*같은 교복을 입은 학생들이 삼삼오오 짝을 지어 학교 쪽으로 걸어간다. 어제는 낯설기만 하던 풍경인데, 오늘은 어딘가 반갑게 느껴진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Students in the same uniform walk toward school in small groups. Yesterday it all felt so unfamiliar, but today it somehow feels welcoming.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Estudiantes con el mismo uniforme caminan hacia la escuela en pequeños grupos. Ayer todo se sentía tan desconocido, pero hoy de alguna manera se siente acogedor.*"
            },
            "ja": {
                "name": "僕",
                "text": "*同じ制服を着た生徒たちが三々五々学校へ向かって歩いている。昨日は見慣れない風景だったのに、今日はどこか温かく感じる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Des élèves en uniforme marchent vers l'école en petits groupes. Hier tout me semblait si étranger, mais aujourd'hui c'est étonnamment accueillant.*"
            }
        }
    },
    "day2_road_to_school_3": {
        "background": "assets/images/background/street.png",
        "next": "day2_school_gate",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*길 건너편에서 우리 학교 학생 몇 명이 내 쪽을 보며 수군거린다. '아, 전학생이다!' 하는 소리가 바람에 실려 들려온다. 아직 학교의 핫이슈인 모양이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Across the street, a few students from our school glance my way and whisper. I can hear 'Oh, it's the transfer student!' carried by the wind. Looks like I'm still the hot topic.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al otro lado de la calle, algunos estudiantes de nuestra escuela me miran y cuchichean. Puedo oír '¡Ah, es el estudiante de intercambio!' llevado por el viento. Parece que sigo siendo el tema del momento.*"
            },
            "ja": {
                "name": "僕",
                "text": "*道の向こう側で、うちの学校の生徒が何人かこっちを見てひそひそ話してる。「あ、転校生だ！」って声が風に乗って聞こえてくる。まだ学校のホットな話題みたいだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*De l'autre côté de la rue, quelques élèves de notre école me regardent et chuchotent. J'entends « Oh, c'est le nouvel élève ! » porté par le vent. On dirait que je suis encore le sujet du moment.*"
            }
        }
    },
    "day2_school_gate": {
        "background": "assets/images/background/school.png",
        "bgm": "daily2.mp3",
        "next": "day2_school_gate_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교문 앞에 도착하자 어제보다 훨씬 다정하게 느껴지는 풍경이 나를 반긴다. 왠지 모르게 발걸음이 가볍다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Arriving at the school gate, the scenery greets me far more warmly than yesterday. My steps feel light for some reason.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al llegar a la puerta de la escuela, el paisaje me recibe con mucha más calidez que ayer. Mis pasos se sienten ligeros por alguna razón.*"
            },
            "ja": {
                "name": "僕",
                "text": "*校門の前に着くと、昨日よりずっと温かく感じる風景が迎えてくれる。なんだか足取りが軽い。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En arrivant au portail de l'école, le paysage m'accueille bien plus chaleureusement qu'hier. Mes pas sont légers, sans raison particulière.*"
            }
        }
    },
    "day2_school_gate_2": {
        "background": "assets/images/background/school.png",
        "choices": [
            {
                "next": "day2_meet_someone"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학교 정문 앞에서 익숙한 얼굴이 눈에 띈다.*",
                "choices": [
                    "주위를 둘러본다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*As I'm about to pass through the gate, someone taps me on the shoulder.*",
                "choices": [
                    "Turn around."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Justo cuando estoy por pasar la puerta, alguien me toca el hombro.*",
                "choices": [
                    "Voltear."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*校門をくぐろうとした時、誰かが肩をトントンと叩いた。*",
                "choices": [
                    "振り返る。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Alors que je m'apprête à franchir le portail, quelqu'un me tapote l'épaule.*",
                "choices": [
                    "Se retourner."
                ]
            }
        }
    },
    "day2_meet_someone": {
        "background": "assets/images/background/school.png",
        "branches": [
            {
                "next": "day2_meet_yuna",
                "character": "Yuna",
                "condition": "met_yuna"
            },
            {
                "next": "day2_meet_nurse",
                "character": "Nurse",
                "condition": "met_nurse"
            },
            {
                "next": "day2_meet_dain",
                "character": "Dain",
                "condition": "met_dain"
            },
            {
                "next": "day2_meet_seoyeon",
                "character": "Seoyeon",
                "condition": "met_seoyeon"
            },
            {
                "next": "day2_meet_teacher"
            }
        ],
        "selectByHighestAffinity": true,
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*주위를 둘러보자 그곳에는...*"
            },
            "en": {
                "name": "Me",
                "text": "*I turn around and there stands...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me volteo y ahí está...*"
            },
            "ja": {
                "name": "僕",
                "text": "*振り返ると、そこに立っていたのは…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je me retourne et là se tient...*"
            }
        }
    },
    "day2_meet_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "branches": [
            {
                "next": "day2_yuna_talk_msg",
                "condition": "sent_msg_day1_yuna"
            },
            {
                "next": "day2_yuna_morning_talk"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교문 옆 커다란 느티나무 아래, 유나가 무심한 표정으로 서 있는 것이 보인다. 그녀는 책을 덮고 나를 가만히 바라본다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Under the large zelkova tree beside the school gate, I spot Yuna standing with an indifferent expression. She closes her book and gazes at me quietly.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Bajo el gran árbol de zelkova junto a la puerta de la escuela, veo a Yuna de pie con una expresión indiferente. Cierra su libro y me mira en silencio.*"
            },
            "ja": {
                "name": "僕",
                "text": "*校門のそばの大きなケヤキの木の下に、無表情のユナが立っている。本を閉じて、静かに僕を見つめる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Sous le grand zelkova à côté du portail de l'école, j'aperçois Yuna debout avec une expression indifférente. Elle ferme son livre et me regarde en silence.*"
            }
        }
    },
    "day2_yuna_talk_msg": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "day2_classroom_from_yuna",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...안녕. 어젯밤 메시지... 고마웠어. 덕분에 조금은 따뜻한 밤이었어. 이따가... 쪽지 확인해봐.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Hi. Thanks for the message last night. It made the night a little warmer. Later... check the note on your desk.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Hola. Gracias por el mensaje de anoche. Hizo que la noche fuera un poco más cálida. Luego... revisa la nota en tu escritorio.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…やあ。昨夜のメッセージ、ありがとう。少しだけ夜が暖かくなった。あとで…机の上のメモを見て。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Salut. Merci pour le message d'hier soir. Il a rendu la nuit un peu plus chaude. Plus tard... regarde le mot sur ton bureau.\\\""
            }
        }
    },
    "day2_yuna_morning_talk": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day2_classroom_from_yuna",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...안녕. 오늘도 그 '빛'은 여전하네. 다행이야. 이따가... 쪽지 확인해봐.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Hi. That 'light' of yours is still the same today. Good. Later... check the note on your desk.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Hola. Tu 'luz' sigue igual hoy. Bien. Luego... revisa la nota en tu escritorio.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…やあ。君の『光』は今日も変わらないね。いい。あとで…机の上のメモを見て。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Salut. Ta « lumière » est toujours la même aujourd'hui. Bien. Plus tard... regarde le mot sur ton bureau.\\\""
            }
        }
    },
    "day2_meet_nurse": {
        "affinityChar": "Nurse",
        "affinityBranches": [
            {
                "minAffinity": 20,
                "next": "day2_meet_nurse_high"
            },
            {
                "minAffinity": -5,
                "next": "day2_meet_nurse_standard"
            },
            {
                "minAffinity": -100,
                "next": "day2_meet_nurse_low"
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
    "day2_meet_nurse_standard": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_nurse_talk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, {name}! 좋은 아침이야. 오늘따라 기운이 넘쳐 보이네?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh my, {name}! Good morning. You look extra energetic today, don't you?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"¡Ay, {name}! Buenos días. Hoy te ves con mucha energía, ¿no?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"あら、{name}！おはよう。今日はやけに元気そうね？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Oh là là, {name} ! Bonjour. Tu as l'air particulièrement en forme aujourd'hui, non ?\\\""
            }
        }
    },
    "day2_meet_nurse_high": {
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day2_nurse_talk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 나를 보자마자 다가와 옷매무새를 다듬어준다.* \"우리 전학생, 밤새 무슨 꿈을 꿨길래 이렇게 반짝거릴까? 선생님은 네 생각 하느라 조금 늦잠 잤는데 말이야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*She walks up to me and straightens my clothes.* \"My dear transfer student, what did you dream about to be glowing like this? I barely got any sleep because I was up thinking about you.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*Se acerca a mí y me arregla la ropa.* \"Mi querido estudiante de intercambio, ¿qué soñaste para brillar así? Yo apenas dormí porque estuve pensando en ti.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*彼女が近づいてきて服を直してくれる。* \"転校生くん、どんな夢を見たらそんなにキラキラするの？ 私は君のこと考えてたらほとんど眠れなかったのに。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Elle s'approche de moi et ajuste mes vêtements.* \\\"Mon cher nouvel élève, qu'as-tu rêvé pour rayonner comme ça ? J'ai à peine dormi parce que je pensais à toi.\\\""
            }
        }
    },
    "day2_meet_nurse_low": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_classroom",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 나를 힐끗 보더니 무심하게 시선을 돌린다.* \"어머, 전학생... 안색이 안 좋아 보이네. 특별히 볼일 없으면 교실로 가서 쉬는 게 좋겠어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*She sighs and turns her head as soon as she sees me.* \"Oh, transfer student... It's hard enough seeing your face this early in the morning. If you don't have any business, please head to class.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*Suspira y voltea la cabeza en cuanto me ve.* \"Ah, estudiante de intercambio... Ya es bastante difícil verte tan temprano por la mañana. Si no tienes nada que hacer, ve a clase.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*僕を見るなりため息をついて顔をそらす。* \"あぁ、転校生…朝から君の顔を見るだけで疲れるわ。用がないなら教室に行って。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Elle soupire et détourne la tête dès qu'elle me voit.* \\\"Oh, le nouvel élève... C'est déjà pénible de voir ton visage si tôt le matin. Si tu n'as rien à faire, va en classe.\\\""
            }
        }
    },
    "day2_nurse_talk": {
        "character": "assets/images/characters/nurse_normal.png",
        "branches": [
            {
                "next": "day2_nurse_talk_msg",
                "condition": "sent_msg_day1_nurse"
            },
            {
                "next": "day2_nurse_talk_has_number",
                "condition": "has_number_nurse"
            },
            {
                "next": "day2_nurse_talk_no_number"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 나에게 다가와 살짝 윙크를 한다.*"
            },
            "en": {
                "name": "School Nurse",
                "text": "*She walks up to me and gives a little wink.*"
            },
            "es": {
                "name": "Enfermera",
                "text": "*Se acerca a mí y me guiña un ojo.*"
            },
            "ja": {
                "name": "保健先生",
                "text": "*彼女が近づいてきて、軽くウインクをする。*"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Elle s'approche de moi et me fait un petit clin d'œil.*"
            }
        }
    },
    "day2_nurse_talk_msg": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_classroom_from_nurse",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어젯밤에 메시지 보내준 거, 정말 귀엽더라. 덕분에 선생님도 기분 좋게 잠들었어. 오늘도 아프면 언제든 보건실로 오렴.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"That message you sent last night was really cute. Thanks to you, I fell asleep in a good mood. If you're not feeling well today, come visit the nurse's office anytime.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"El mensaje que enviaste anoche fue muy lindo. Gracias a ti, me dormí de buen humor. Si no te sientes bien hoy, ven a la enfermería cuando quieras.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"昨夜のメッセージ、すごく可愛かったわ。おかげでいい気分で眠れたの。今日体調が悪かったら、いつでも保健室に来てね。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Le message que tu m'as envoyé hier soir était vraiment mignon. Grâce à toi, je me suis endormie de bonne humeur. Si tu ne te sens pas bien aujourd'hui, viens à l'infirmerie quand tu veux.\\\""
            }
        }
    },
    "day2_nurse_talk_has_number": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_classroom_from_nurse",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어젯밤에 내 생각 하느라 잠 못 이룬 건 아니지? 후훗, 농담이야. 오늘도 아프면 언제든 보건실로 오렴.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"You didn't lose sleep thinking about me last night, did you? Hehe, just kidding. If you're not feeling well today, come visit the nurse's office anytime.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"¿No perdiste el sueño pensando en mí anoche? Jeje, es broma. Si no te sientes bien hoy, ven a la enfermería cuando quieras.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"昨夜、私のこと考えて眠れなかったんじゃない？ ふふ、冗談よ。今日体調が悪かったら、いつでも保健室に来てね。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Tu n'as pas perdu le sommeil en pensant à moi hier soir, si ? Héhé, je plaisante. Si tu ne te sens pas bien aujourd'hui, viens à l'infirmerie quand tu veux.\\\""
            }
        }
    },
    "day2_nurse_talk_no_number": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_classroom_from_nurse",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"전학 이틀째인데 벌써 학교에 익숙해진 모양이네. 오늘도 무리하지 말고, 힘들면 보건실로 놀러 오렴.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"It's only your second day, but you already look right at home. Don't push yourself too hard, and come hang out at the nurse's office if you need a break.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Apenas es tu segundo día, pero ya pareces estar como en casa. No te esfuerces demasiado, y ven a descansar a la enfermería si necesitas un respiro.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"まだ二日目なのに、もうすっかり馴染んでるわね。無理しないで、休憩が必要な時は保健室に遊びに来て。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"C'est seulement ton deuxième jour, mais tu as déjà l'air chez toi. Ne te surmène pas, et viens faire un tour à l'infirmerie si tu as besoin d'une pause.\\\""
            }
        }
    },
    "day2_meet_seoyeon": {
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_meet_seoyeon_high"
            },
            {
                "minAffinity": -5,
                "next": "day2_meet_seoyeon_standard"
            },
            {
                "minAffinity": -100,
                "next": "day2_meet_seoyeon_low"
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
    "day2_meet_seoyeon_standard": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day2_seoyeon_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"안녕, {name}! 잘 잤니? 오늘도 일찍 왔구나!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Hi, {name}! Did you sleep well? You're here early again today!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡Hola, {name}! ¿Dormiste bien? ¡Hoy también llegaste temprano!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あ、{name}！よく眠れた？ 今日も早いね！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"Salut, {name} ! Tu as bien dormi ? Tu es encore en avance aujourd'hui !\\\""
            }
        }
    },
    "day2_meet_seoyeon_high": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day2_seoyeon_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 교문 앞에서 서성이다 나를 발견하곤, 안도한 듯 환하게 웃으며 다가온다.* \"{name}! 일찍 왔네? 사실... 네가 오늘도 무사히 등교할지 은근히 신경 쓰였거든.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon was lingering by the school gate, and the moment she spots me, she beams and runs over.* \"{name}! I was waiting for you! I couldn't sleep a wink because I was wondering if you slept well last night!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon estaba merodeando por la puerta de la escuela, y en cuanto me ve, sonríe radiante y corre hacia mí.* \"¡{name}! ¡Te estaba esperando! ¡No pude dormir nada porque me preguntaba si habías dormido bien anoche!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンが校門のあたりでうろうろしていて、僕を見つけた瞬間、ぱっと笑顔になって駆け寄ってくる。* \"あ、{name}！待ってたの！昨夜ちゃんと眠れたかなって気になって、全然眠れなかったんだよ！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon traînait près du portail de l'école, et dès qu'elle m'aperçoit, elle sourit et accourt.* \\\"{name} ! Je t'attendais ! Je n'ai pas fermé l'œil de la nuit en me demandant si tu avais bien dormi !\\\""
            }
        }
    },
    "day2_meet_seoyeon_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "day2_classroom",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 나를 발견하자마자 표정을 굳히며 고개를 돌린다.* \"...아, 왔어? 지각은 안 해서 다행이네. 난 먼저 갈게.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon's expression hardens as soon as she spots me, and she turns her head away.* \"...Oh, you're here? At least you're not late. Well, take care.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*La expresión de Seoyeon se endurece en cuanto me ve y voltea la cabeza.* \"...Ah, llegaste. Al menos no llegas tarde. Bueno, cuídate.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンは僕を見た途端に表情が固くなって、顔をそらす。* \"…あ、来たんだ。遅刻しないだけマシだね。じゃ、お疲れ。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*L'expression de Seoyeon se durcit dès qu'elle me voit, et elle détourne la tête.* \\\"...Oh, tu es là ? Au moins tu n'es pas en retard. Bon, prends soin de toi.\\\""
            }
        }
    },
    "day2_seoyeon_talk": {
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            {
                "next": "day2_seoyeon_talk_msg",
                "condition": "sent_msg_day1_seyoun"
            },
            {
                "next": "day2_seoyeon_talk_has_number",
                "condition": "has_number_seyoun"
            },
            {
                "next": "day2_seoyeon_talk_no_number"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이는 나와 눈을 맞추며 살짝 미소 짓는다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon meets my eyes and smiles softly.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon me mira a los ojos y sonríe suavemente.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンが僕の目を見て、柔らかく微笑む。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Seoyeon croise mon regard et sourit doucement.*"
            }
        }
    },
    "day2_seoyeon_talk_msg": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day2_classroom_from_seoyeon",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"어제 메시지 정말 고마웠어! 덕분에 푹 잘 수 있었던 것 같아. 우리 오늘도 힘내자!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Thank you so much for the message yesterday! I think I slept well because of it. Let's do our best today too!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡Muchas gracias por el mensaje de ayer! Creo que dormí bien gracias a eso. ¡Hoy también demos lo mejor!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"昨日はメッセージありがとう！おかげでよく眠れた気がする。今日も頑張ろうね！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"Merci beaucoup pour le message d'hier ! Je crois que j'ai bien dormi grâce à ça. Donnons le meilleur de nous-mêmes aujourd'hui aussi !\\\""
            }
        }
    },
    "day2_seoyeon_talk_has_number": {
        "character": "assets/images/characters/seyoun_shy.png",
        "choices": [
            {
                "next": "day2_seoyeon_happy",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_seoyeon_normal",
                "stats": {
                    "Seoyeon": {
                        "affinity": 1
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"어제 잘 들어갔어? 연락처 교환하고 나서 메시지 보낼까 말까 수백 번은 고민했는데... 너무 방해될까 봐 꾹 참았어.\"",
                "choices": [
                    "나도 서연이 메시지 엄청 기다렸는데! 지금이라도 보내줘!",
                    "아, 그랬구나. 사실 나도 피곤해서 눕자마자 잠들었어."
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Did you get home okay yesterday? After we exchanged numbers, I must have debated a hundred times whether to text you... but I held back because I didn't want to bother you.\"",
                "choices": [
                    "I was waiting for your message too! Go ahead and send one now.",
                    "Oh, I see. Honestly, I was so tired I fell asleep the moment I lay down."
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¿Llegaste bien ayer? Después de intercambiar números, debí haber dudado cien veces si enviarte un mensaje... pero me contuve porque no quería molestarte.\"",
                "choices": [
                    "¡Yo también estaba esperando tu mensaje! Envíame uno ahora.",
                    "Ah, ya veo. Honestamente, estaba tan cansado que me dormí en cuanto me acosté."
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"昨日ちゃんと帰れた？ 連絡先交換してから、メッセージ送ろうか百回くらい迷って…でも迷惑かなって我慢しちゃった。\"",
                "choices": [
                    "僕も待ってたよ！今からでも送って。",
                    "あぁ、そうだったんだ。正直、疲れすぎて横になった瞬間寝ちゃって。"
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"Tu es bien rentré hier ? Après avoir échangé nos numéros, j'ai dû hésiter cent fois à t'envoyer un message... mais je me suis retenue pour ne pas te déranger.\\\"",
                "choices": [
                    "J'attendais aussi ton message ! Vas-y, envoie-le maintenant.",
                    "Ah, je vois. Honnêtement, j'étais tellement fatigué que je me suis endormi dès que je me suis couché."
                ]
            }
        }
    },
    "day2_seoyeon_talk_no_number": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day2_classroom_from_seoyeon",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"어제 잘 들어갔어? 전학 첫날이라 걱정 많이 했는데, 오늘 보니까 안심이 되네. 오늘도 힘내자!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Did you get home okay yesterday? I was really worried since it was your first day, but seeing you today puts me at ease. Let's do our best today too!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¿Llegaste bien ayer? Me preocupé mucho porque era tu primer día, pero verte hoy me tranquiliza. ¡Hoy también demos lo mejor!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"昨日ちゃんと帰れた？ 初日だったから本当に心配だったけど、今日元気そうで安心した。今日も頑張ろうね！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"Tu es bien rentré hier ? Je m'inquiétais beaucoup puisque c'était ton premier jour, mais te voir aujourd'hui me rassure. Donnons le meilleur de nous-mêmes aujourd'hui aussi !\\\""
            }
        }
    },
    "day2_seoyeon_happy": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day2_classroom_from_seoyeon",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"정말? 그럼 오늘부터는 사소한 거라도 다 공유하기다? 자, 같이 교실로 가자!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Really? Then starting today, we share everything, even the little things, deal? Come on, let's head to class together!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¿En serio? Entonces a partir de hoy, compartimos todo, hasta las pequeñas cosas, ¿trato hecho? ¡Vamos, caminemos juntos a clase!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"本当？ じゃあ今日から、小さなことでも何でも共有しよう、約束！さあ、一緒に教室行こう！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"Vraiment ? Alors à partir d'aujourd'hui, on se dit tout, même les petites choses, d'accord ? Allez, allons en classe ensemble !\\\""
            }
        }
    },
    "day2_seoyeon_normal": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day2_classroom_from_seoyeon",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"그렇지? 전학 첫날이라 많이 피곤했을 거야. 자, 오늘도 힘내서 학교생활 해보자!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Right? Your first day at a new school must have been exhausting. Come on, let's have another great day!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¿Verdad? El primer día en una escuela nueva debió ser agotador. ¡Vamos, que hoy también sea un gran día!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"だよね？ 新しい学校の初日は疲れたでしょ。さあ、今日も素敵な一日にしよう！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"N'est-ce pas ? Ton premier jour dans une nouvelle école a dû être épuisant. Allez, passons encore une super journée !\\\""
            }
        }
    },
    "day2_meet_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day2_dain_talk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"어어, {name}! 좋은 아침! 오늘따라 일찍 왔네?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey, {name}! Good morning! You're here early today!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Oye, {name}! ¡Buenos días! ¡Hoy llegaste temprano!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"おっす、{name}！おはよ！今日早いじゃん！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Hé, {name} ! Bonjour ! Tu es en avance aujourd'hui !\\\""
            }
        }
    },
    "day2_dain_talk": {
        "character": "assets/images/characters/dain_laugh.png",
        "branches": [
            {
                "next": "day2_dain_talk_msg",
                "condition": "sent_msg_day1_dain"
            },
            {
                "next": "day2_dain_talk_dated",
                "condition": "dated_dain_day1"
            },
            {
                "next": "day2_dain_talk_not_dated"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*다인이는 활기차게 내 어깨를 툭 친다.*"
            },
            "en": {
                "name": "Dain",
                "text": "*Dain cheerfully bumps my shoulder.*"
            },
            "es": {
                "name": "Dain",
                "text": "*Dain me da un golpecito alegre en el hombro.*"
            },
            "ja": {
                "name": "ダイン",
                "text": "*ダインが元気よく僕の肩をポンと叩く。*"
            },
            "fr": {
                "name": "Dain",
                "text": "*Dain me donne joyeusement un coup d'épaule.*"
            }
        }
    },
    "day2_dain_talk_msg": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_classroom_from_dain",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"어제 메시지 잘 받았어! 너 은근히 다정하더라? 덕분에 기분 좋게 잤어. 오늘도 활기차게 보내자구!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Got your message yesterday! You're surprisingly sweet, you know that? Thanks to you, I slept great. Let's make today awesome too!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Recibí tu mensaje ayer! Eres sorprendentemente dulce, ¿lo sabías? Gracias a ti, dormí genial. ¡Hoy también va a ser increíble!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"昨日のメッセージ受け取ったよ！意外と優しいんだね、知ってた？ おかげでぐっすり眠れた。今日も最高の一日にしよう！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"J'ai reçu ton message hier ! T'es étonnamment mignon, tu sais ? Grâce à toi, j'ai super bien dormi. Faisons de cette journée un truc génial !\\\""
            }
        }
    },
    "day2_dain_talk_dated": {
        "character": "assets/images/characters/dain_laugh.png",
        "choices": [
            {
                "next": "day2_dain_happy",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_dain_normal",
                "stats": {
                    "Dain": {
                        "affinity": 1
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"어제 먹은 떡볶이 덕분에 오늘 컨디션 최고야! 너도 그렇지?\"",
                "choices": [
                    "응! 나도 다인이 덕분에 잘 잤어.",
                    "난 좀 피곤한데... 다인이는 체력이 정말 좋구나."
                ]
            },
            "en": {
                "name": "Dain",
                "text": "\"Thanks to the tteokbokki yesterday, I'm in top shape today! Same for you, right?\"",
                "choices": [
                    "Yeah! I slept well thanks to you, Dain.",
                    "I'm a bit tired actually... Dain, you really have amazing stamina."
                ]
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Gracias al tteokbokki de ayer, hoy estoy en plena forma! Tú también, ¿verdad?\"",
                "choices": [
                    "¡Sí! Dormí bien gracias a ti, Dain.",
                    "Estoy un poco cansado la verdad... Dain, realmente tienes una resistencia increíble."
                ]
            },
            "ja": {
                "name": "ダイン",
                "text": "\"昨日のトッポッキのおかげで今日は絶好調！ そっちも同じでしょ？\"",
                "choices": [
                    "うん！ダインのおかげでよく眠れたよ。",
                    "ちょっと疲れてるかも…ダイン、ほんとにスタミナすごいね。"
                ]
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Grâce au tteokbokki d'hier, je suis en pleine forme aujourd'hui ! Toi aussi, pas vrai ?\\\"",
                "choices": [
                    "Ouais ! J'ai bien dormi grâce à toi, Dain.",
                    "En fait, je suis un peu fatigué... Dain, tu as vraiment une énergie incroyable."
                ]
            }
        }
    },
    "day2_dain_talk_not_dated": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_classroom_from_dain",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"어제 잘 들어갔어? 전학 첫날인데 학교 구경은 좀 했나 모르겠네! 오늘도 활기차게 보내자구!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Did you get home okay yesterday? It was your first day, so I hope you got to explore the school a bit! Let's make today awesome too!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¿Llegaste bien ayer? Era tu primer día, ¡así que espero que hayas podido explorar la escuela un poco! ¡Hoy también va a ser genial!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"昨日はちゃんと帰れた？ 初日だったんだから、少しは学校を探検できた？ 今日も最高の一日にしよう！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Tu es bien rentré hier ? C'était ton premier jour, alors j'espère que tu as pu explorer un peu l'école ! Faisons de cette journée un truc génial !\\\""
            }
        }
    },
    "day2_dain_happy": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_classroom_from_dain",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"하하! 역시 내 에너지가 좀 넘치긴 하지? 좋아, 오늘 점심시간에도 체육관으로 와! 기다릴게!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Haha! I guess my energy is a bit over the top, huh? Alright, come to the gym at lunch today too! I'll be waiting!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Jaja! Supongo que mi energía es un poco exagerada, ¿no? ¡Bueno, hoy también ven al gimnasio a la hora del almuerzo! ¡Te estaré esperando!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"あはは！あたしのエネルギーちょっとやりすぎかな？ よし、今日もお昼に体育館来てよ！待ってるからね！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Haha ! Mon énergie est un peu trop, hein ? Bon, viens au gymnase à midi aujourd'hui aussi ! Je t'attends !\\\""
            }
        }
    },
    "day2_dain_normal": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day2_classroom_from_dain",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"에이~ 엄살은! 학교생활 적응하려면 체력이 국력이라구! 자, 어서 교실로 가자!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh come on, don't be a wimp! Stamina is everything when you're adjusting to school life! Now let's get to class!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Ay, vamos, no seas flojo! ¡La resistencia lo es todo cuando te estás adaptando a la vida escolar! ¡Ahora vamos a clase!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"えー、ヘタレなこと言わないでよ！学校生活に慣れるにはスタミナが全てなんだから！さ、教室行くよ！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Oh allez, sois pas une chiffe molle ! L'endurance, c'est la clé quand on s'adapte à la vie scolaire ! Allez, en classe !\\\""
            }
        }
    },
    "day2_meet_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_teacher_free_talk",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"어라, {name} 아니니? 전학 이틀째인데 벌써 학교에 적응한 모양이구나. 일찍 오는 모습이 보기 좋다.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Oh, isn't that {name}? Only your second day and you're already fitting right in. It's nice to see you here early.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Ah, ¿no es {name}? Apenas es tu segundo día y ya te ves como en casa. Me alegra verte temprano.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"あら、{name}じゃない？ まだ二日目なのに、もうすっかり馴染んでるわね。早く来てて偉いわ。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"Oh, c'est pas {name} ? Seulement ton deuxième jour et tu t'intègres déjà bien. C'est agréable de te voir en avance.\\\""
            }
        }
    },
    "day2_teacher_free_talk": {
        "type": "free_talk",
        "character": "assets/images/characters/teacher_normal.png",
        "affinityChar": "Teacher",
        "affinityBranches": [
            {
                "minAffinity": 20,
                "next": "day2_teacher_contact_ask_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_teacher_contact_ask"
            },
            {
                "minAffinity": -100,
                "next": "day2_teacher_contact_ask_low"
            }
        ],
        "next": "day2_teacher_contact_ask",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"수업 시작 전까지 시간이 좀 남았네. 나한테 궁금한 거라도 있니?\"",
                "context": "교문 앞에서 담임선생님과 마주쳐 교실로 함께 걸어가는 상황입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 선생님이 비상연락망을 위해 주인공의 연락처를 물어보는 상황으로 이어집니다. 대화의 마지막 턴에만 연락처를 물어볼 타이밍을 잡거나, 공적인 용무가 있다는 뉘앙스를 풍겨주세요.",
                "personality": "공과 사가 뚜렷하지만 주인공에게는 은근히 약한 모습을 보이는 담임선생님."
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"We still have some time before class starts. Is there anything you'd like to ask me?\"",
                "context": "You've run into the homeroom teacher at the school gate and are walking to the classroom together. Keep the conversation going until it naturally wraps up. At the very end of the conversation, the teacher will ask for the protagonist's contact info for the emergency contact list. Only on the final turn should you hint at needing to ask about contact information or suggest there's some official business.",
                "personality": "A homeroom teacher who strictly separates work from personal matters, but has a secret soft spot for the protagonist."
            },
            "es": {
                "name": "Profesora",
                "text": "\"Todavía tenemos algo de tiempo antes de que empiecen las clases. ¿Hay algo que quieras preguntarme?\"",
                "context": "Te encontraste con la profesora en la puerta de la escuela y caminan juntos al salón. Mantén la conversación hasta que termine naturalmente. Al final de la conversación, la profesora pedirá los datos de contacto del protagonista para la lista de emergencias. Solo en el último turno debes insinuar que necesita preguntar sobre información de contacto o sugerir que hay un asunto oficial.",
                "personality": "Una profesora que separa estrictamente el trabajo de lo personal, pero que tiene una debilidad secreta por el protagonista."
            },
            "ja": {
                "name": "担任先生",
                "text": "\"授業が始まるまでまだ少し時間があるわ。何か聞きたいことはある？\"",
                "context": "校門で担任の先生に会って、一緒に教室まで歩いている。会話が自然に終わるまで続けてください。会話の最後に、先生は緊急連絡先リストのために主人公の連絡先を聞きます。最後のターンでのみ、連絡先について聞く必要があることをほのめかすか、公式な用事があることを示唆してください。",
                "personality": "仕事とプライベートを厳格に分ける担任教師だが、主人公には密かに弱い。"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"On a encore un peu de temps avant le début des cours. Tu as quelque chose à me demander ?\\\"",
                "context": "Tu as croisé le professeur principal au portail de l'école et vous marchez ensemble vers la classe. Continue la conversation jusqu'à ce qu'elle se termine naturellement. Tout à la fin de la conversation, le professeur demandera les coordonnées du protagoniste pour la liste de contacts d'urgence. Seulement au dernier tour, fais allusion au besoin de demander des coordonnées ou suggère qu'il y a une affaire officielle.",
                "personality": "Un professeur principal qui sépare strictement le travail du personnel, mais qui a un faible secret pour le protagoniste."
            }
        }
    },
    "day2_teacher_contact_ask_high": {
        "character": "assets/images/characters/teacher_smile.png",
        "choices": [
            {
                "next": "day2_teacher_contact_success_high",
                "setFlags": [
                    "has_number_teacher",
                    "has_any_contact"
                ]
            },
            {
                "next": "day2_classroom_from_teacher"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님과 즐겁게 대화를 나누며 교실로 향했다. 선생님은 아침부터 기분이 좋아 보인다며, 비상연락망 작성을 위해 내 연락처를 물어보셨다.*",
                "choices": [
                    "네, 여기 제 번호예요.",
                    "나중에 교무실 가서 알려드릴게요."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*I had a nice chat with the teacher on the way to class. She said I looked like I was in a great mood this morning and asked for my phone number for the emergency contact list.*",
                "choices": [
                    "Sure, here's my number.",
                    "I'll stop by the teacher's office later to give it to you."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Tuve una agradable charla con la profesora camino a clase. Dijo que me veía de muy buen humor esta mañana y me pidió mi número para la lista de contactos de emergencia.*",
                "choices": [
                    "Claro, aquí está mi número.",
                    "Pasaré luego por la sala de profesores para dártelo."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*教室まで先生と楽しくおしゃべりした。今朝はすごく機嫌が良さそうだねって言われて、緊急連絡先リストのために電話番号を聞かれた。*",
                "choices": [
                    "はい、これが僕の番号です。",
                    "後で職員室に行って教えます。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai eu une chouette discussion avec la professeure en allant en classe. Elle m'a dit que j'avais l'air de bonne humeur ce matin et m'a demandé mon numéro de téléphone pour la liste de contacts d'urgence.*",
                "choices": [
                    "Bien sûr, voici mon numéro.",
                    "Je passerai à la salle des professeurs plus tard pour vous le donner."
                ]
            }
        }
    },
    "day2_teacher_contact_ask_low": {
        "character": "assets/images/characters/teacher_angry.png",
        "choices": [
            {
                "next": "day2_teacher_contact_success_low",
                "setFlags": [
                    "has_number_teacher",
                    "has_any_contact"
                ]
            },
            {
                "next": "day2_classroom_from_teacher"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 표정이 굳어졌다. 아침부터 내가 너무 무례하게 굴었나 보다. 선생님은 한숨을 내쉬며 비상연락망 작성을 위해 내 연락처를 알려달라고 하셨다.*",
                "choices": [
                    "네, 여기 제 번호예요.",
                    "나중에 교무실 가서 알려드릴게요."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The teacher's expression hardened. I must have been too rude this early in the morning. She sighed and asked me to provide my phone number for the emergency contact list.*",
                "choices": [
                    "Sure, here's my number.",
                    "I'll stop by the teacher's office later to give it to you."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La expresión de la profesora se endureció. Debí ser demasiado grosero tan temprano por la mañana. Suspiró y me pidió que le diera mi número para la lista de contactos de emergencia.*",
                "choices": [
                    "Claro, aquí está mi número.",
                    "Pasaré luego por la sala de profesores para dártelo."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*先生の表情が固くなった。朝から失礼すぎたかもしれない。ため息をつきながら、緊急連絡先リストのために電話番号を教えてと言われた。*",
                "choices": [
                    "はい、これが僕の番号です。",
                    "後で職員室に行って教えます。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*L'expression de la professeure s'est durcie. J'ai dû être trop impoli si tôt le matin. Elle a soupiré et m'a demandé de fournir mon numéro pour la liste de contacts d'urgence.*",
                "choices": [
                    "Bien sûr, voici mon numéro.",
                    "Je passerai à la salle des professeurs plus tard pour vous le donner."
                ]
            }
        }
    },
    "day2_teacher_contact_ask": {
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            {
                "next": "day2_teacher_contact_success_normal",
                "setFlags": [
                    "has_number_teacher",
                    "has_any_contact"
                ]
            },
            {
                "next": "day2_classroom_from_teacher"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님과 이런저런 이야기를 나누며 교실로 걸어갔다. 선생님은 비상연락망 작성을 위해 내 연락처가 필요하다며 번호를 물어보셨다.*",
                "choices": [
                    "네, 여기 제 번호예요.",
                    "나중에 교무실 가서 알려드릴게요."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*I chatted with the teacher about various things on the walk to class. She said she needed my phone number for the emergency contact list.*",
                "choices": [
                    "Sure, here's my number.",
                    "I'll stop by the teacher's office later to give it to you."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Charlé con la profesora sobre varias cosas camino a clase. Dijo que necesitaba mi número para la lista de contactos de emergencia.*",
                "choices": [
                    "Claro, aquí está mi número.",
                    "Pasaré luego por la sala de profesores para dártelo."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*教室まで歩きながら先生といろいろ話した。緊急連絡先リストのために電話番号が必要だと言われた。*",
                "choices": [
                    "はい、これが僕の番号です。",
                    "後で職員室に行って教えます。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai discuté avec la professeure de choses et d'autres en allant en classe. Elle m'a dit qu'elle avait besoin de mon numéro de téléphone pour la liste de contacts d'urgence.*",
                "choices": [
                    "Bien sûr, voici mon numéro.",
                    "Je passerai à la salle des professeurs plus tard pour vous le donner."
                ]
            }
        }
    },
    "day2_teacher_contact_success_high": {
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 15
            }
        },
        "next": "day2_classroom_from_teacher",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"{name}, 번호 고마워! 후훗, 비상연락망 핑계로 물어보긴 했지만... 실은 나도 너랑 좀 더 친해지고 싶었거든. 학교생활 힘들면 언제든지 이 번호로 연락해?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"{name}, thanks for the number! Hehe, I used the emergency contact list as an excuse, but... truth is, I wanted to get closer to you too. If school life gets tough, don't hesitate to call me anytime, okay?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"{name}, ¡gracias por el número! Jeje, usé la lista de emergencias como excusa, pero... la verdad es que yo también quería acercarme más a ti. Si la vida escolar se pone difícil, no dudes en llamarme cuando quieras, ¿de acuerdo?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"{name}、番号ありがとう！ ふふ、緊急連絡先を口実にしちゃったけど…本当は、私も君ともっと仲良くなりたかったの。学校生活がつらくなったら、いつでも電話してきていいのよ？\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"{name}, merci pour le numéro ! Héhé, j'ai utilisé la liste de contacts d'urgence comme prétexte, mais... en vérité, je voulais aussi me rapprocher de toi. Si la vie scolaire devient difficile, n'hésite pas à m'appeler, d'accord ?\\\""
            }
        }
    },
    "day2_teacher_contact_success_low": {
        "character": "assets/images/characters/teacher_angry.png",
        "stats": {
            "Teacher": {
                "affinity": 2
            }
        },
        "next": "day2_classroom_from_teacher",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"...그래, 고맙다. 연락처는 공적인 용도로만 사용할 테니 걱정하지 마. 수업 늦지 않게 어서 들어가 봐.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Alright, thank you. I'll only use your contact info for official purposes, so don't worry. Now hurry up and get to class before you're late.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Está bien, gracias. Solo usaré tu información de contacto para asuntos oficiales, así que no te preocupes. Ahora apúrate y ve a clase antes de que llegues tarde.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…はい、ありがとう。連絡先は公式な目的にしか使わないから安心して。さあ、遅刻する前に早く教室に行きなさい。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"...D'accord, merci. Je n'utiliserai tes coordonnées qu'à des fins officielles, ne t'inquiète pas. Maintenant dépêche-toi d'aller en classe avant d'être en retard.\\\""
            }
        }
    },
    "day2_teacher_contact_success_normal": {
        "character": "assets/images/characters/teacher_normal.png",
        "stats": {
            "Teacher": {
                "affinity": 10
            }
        },
        "next": "day2_classroom_from_teacher",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"고마워. 그럼 무슨 일 있으면 연락할게. 자, 이제 교실로 가자.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Thank you. I'll reach out if anything comes up. Now, let's head to class.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Gracias. Te contactaré si surge algo. Ahora, vamos a clase.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"ありがとう。何かあったら連絡するわね。さ、教室に行きましょう。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"Merci. Je te contacterai si quelque chose se présente. Maintenant, allons en classe.\\\""
            }
        }
    },
    "day2_classroom_from_teacher": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day2_classroom_from_teacher_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"자, 다 왔다. 오늘도 열심히 해보자.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Alright, we're here. Let's have another great day.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Bien, llegamos. Que hoy también sea un buen día.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"さ、着いたわよ。今日もいい一日にしましょう。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"Bien, on y est. Passons encore une bonne journée.\\\""
            }
        }
    },
    "day2_classroom_from_teacher_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_teacher",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님과 나란히 교실에 들어서자 아이들의 시선이 일제히 쏠린다. 선생님과 같이 온 게 꽤 눈에 띄었나 보다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Walking into the classroom alongside the teacher, all eyes turn to us. Walking in with the homeroom teacher definitely drew some attention.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al entrar al salón junto a la profesora, todas las miradas se dirigen hacia nosotros. Entrar con la profesora definitivamente atrajo atención.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生と一緒に教室に入ると、全員の視線がこっちに向く。担任と一緒に入ってくるのは確かに目立つ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En entrant dans la classe aux côtés de la professeure, tous les regards se tournent vers nous. Entrer avec le professeur principal a attiré l'attention.*"
            }
        }
    },
    "day2_classroom_greet_teacher": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_teacher_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "\"오, 전학생! 좋은 아침! 헐, 담임 선생님이랑 같이 왔어? 벌써 특별 대우 받는 거야?\""
            },
            "en": {
                "name": "Classmate",
                "text": "\"Hey, transfer student! Good morning! Whoa, you came with the homeroom teacher? Getting special treatment already?\""
            },
            "es": {
                "name": "Compañero",
                "text": "\"¡Oye, estudiante de intercambio! ¡Buenos días! Guau, ¿viniste con la profesora? ¿Ya tienes trato especial?\""
            },
            "ja": {
                "name": "クラスメイト",
                "text": "\"おっ、転校生！おはよう！うわ、担任の先生と一緒に来たの？もう特別扱いかよ？\""
            },
            "fr": {
                "name": "Camarade de classe",
                "text": "\\\"Hé, le nouveau ! Bonjour ! Whoa, t'es venu avec le prof principal ? Déjà un traitement de faveur ?\\\""
            }
        }
    },
    "day2_classroom_greet_teacher_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_teacher",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*몇몇 아이들이 킥킥대며 장난스러운 눈빛을 보낸다. 다행히 악의는 없어 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A few students snicker with playful looks. At least there's no malice behind it.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Algunos estudiantes se ríen con miradas juguetonas. Al menos no hay mala intención detrás.*"
            },
            "ja": {
                "name": "僕",
                "text": "*何人かの生徒がいたずらっぽい顔でクスクス笑ってる。でも悪意はなさそうだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Quelques élèves ricanent avec des regards taquins. Au moins il n'y a pas de méchanceté derrière.*"
            }
        }
    },
    "day2_classroom_settle_teacher": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_teacher_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "*옆자리 친구가 팔꿈치로 슬쩍 찌른다.* \"야, 너 담임 선생님이랑 무슨 사이야? 아침부터 같이 등교라니!\""
            },
            "en": {
                "name": "Classmate",
                "text": "*The student next to me nudges my elbow.* \"Dude, what's the deal with you and the homeroom teacher? Walking to school together first thing in the morning!\""
            },
            "es": {
                "name": "Compañero",
                "text": "*El estudiante de al lado me codea.* \"Oye, ¿qué onda entre tú y la profesora? ¡Caminando juntos a la escuela tan temprano por la mañana!\""
            },
            "ja": {
                "name": "クラスメイト",
                "text": "*隣の席のやつが肘でつついてくる。* \"おい、お前と担任先生どういう関係？ 朝から一緒に登校とか！\""
            },
            "fr": {
                "name": "Camarade de classe",
                "text": "*L'élève à côté de moi me donne un coup de coude.* \\\"Mec, c'est quoi le truc entre toi et le prof principal ? Marcher ensemble dès le matin !\\\""
            }
        }
    },
    "day2_classroom_settle_teacher_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_teacher_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"아니야, 교문 앞에서 우연히 마주쳐서 같이 걸어왔을 뿐이야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"It's nothing, we just happened to run into each other at the school gate and walked in together.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"No es nada, simplemente nos encontramos en la puerta de la escuela y caminamos juntos.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"何でもないよ、たまたま校門で会っただけ。一緒に歩いてきただけだって。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"C'est rien, on s'est juste croisés au portail de l'école et on a marché ensemble.\\\""
            }
        }
    },
    "day2_classroom_settle_teacher_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*적당히 둘러대고 자리에 앉는다. 선생님과 함께 들어왔다는 게 좀 민망하면서도... 나쁘지 않은 기분이다. 가방을 풀고 교과서를 꺼내려는데... 뭔가 이상하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I brush it off and take my seat. Walking in with the teacher was a bit embarrassing, but... it didn't feel bad. I start unpacking my bag to get my textbooks out when... something seems off.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Lo dejo pasar y me siento. Entrar con la profesora fue un poco vergonzoso, pero... no se sintió mal. Empiezo a sacar los libros de la mochila cuando... algo parece raro.*"
            },
            "ja": {
                "name": "僕",
                "text": "*適当にかわして席に着く。先生と一緒に入ってきたのはちょっと恥ずかしかったけど…悪い気はしなかった。カバンから教科書を出そうとした時…何か違和感がある。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je balaie la remarque et m'assieds. Entrer avec la professeure était un peu gênant, mais... ce n'était pas désagréable. Je commence à défaire mon sac pour sortir mes manuels quand... quelque chose me semble bizarre.*"
            }
        }
    },
    "day2_classroom_from_seoyeon": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day2_classroom_from_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"자, 다 왔다! 오늘도 좋은 하루 보내자, {name}!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Here we are! Let's have another great day, {name}!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡Llegamos! ¡Que hoy también sea un gran día, {name}!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"着いたよ！今日もいい一日にしようね、{name}！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"On y est ! Passons encore une super journée, {name} !\\\""
            }
        }
    },
    "day2_classroom_from_seoyeon_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_seoyeon",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와 나란히 교실에 들어서자, 아이들의 시선이 일제히 우리를 향한다. 서연이가 자연스럽게 내 옆에 서 있으니 마치 오래된 친구처럼 보였을 거다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Walking into the classroom side by side with Seoyeon, all eyes turn to us immediately. With Seoyeon standing so naturally beside me, we probably look like old friends.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al entrar al salón al lado de Seoyeon, todas las miradas se dirigen hacia nosotros de inmediato. Con Seoyeon tan naturalmente a mi lado, seguramente parecemos viejos amigos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンと並んで教室に入ると、すぐに全員の視線が集まる。ソヨンがこんなに自然に隣にいると、きっと昔からの友達に見えるんだろうな。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En entrant dans la classe côte à côte avec Seoyeon, tous les regards se tournent immédiatement vers nous. Avec Seoyeon si naturellement à mes côtés, on doit avoir l'air de vieux amis.*"
            }
        }
    },
    "day2_classroom_greet_from_seoyeon": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "\"오, 전학생! 좋은 아침! 서연이랑 같이 왔네? 완전 단짝이다!\""
            },
            "en": {
                "name": "Classmate",
                "text": "\"Hey, transfer student! Good morning! You came with Seoyeon? You two are totally besties already!\""
            },
            "es": {
                "name": "Compañero",
                "text": "\"¡Oye, estudiante de intercambio! ¡Buenos días! ¿Viniste con Seoyeon? ¡Ya son inseparables!\""
            },
            "ja": {
                "name": "クラスメイト",
                "text": "\"おっ、転校生！おはよう！ソヨンと一緒に来たの？もう完全に仲良しじゃん！\""
            },
            "fr": {
                "name": "Camarade de classe",
                "text": "\\\"Hé, le nouveau ! Bonjour ! T'es venu avec Seoyeon ? Vous êtes déjà super potes !\\\""
            }
        }
    },
    "day2_classroom_greet_from_seoyeon_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_seoyeon",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*아이들이 서연이와 나를 번갈아 보며 의미심장한 미소를 짓는다. 서연이는 아무렇지 않게 자기 자리로 향한다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The students glance between Seoyeon and me with knowing smiles. Seoyeon casually heads to her seat like it's no big deal.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Los estudiantes miran entre Seoyeon y yo con sonrisas cómplices. Seoyeon se dirige a su asiento como si nada.*"
            },
            "ja": {
                "name": "僕",
                "text": "*生徒たちがソヨンと僕を交互に見てニヤニヤしてる。ソヨンは何でもないように自分の席に向かう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Les élèves nous regardent tour à tour, Seoyeon et moi, avec des sourires entendus. Seoyeon se dirige tranquillement vers sa place comme si de rien n'était.*"
            }
        }
    },
    "day2_classroom_settle_from_seoyeon": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "*앞자리 여학생이 돌아보며 속삭인다.* \"야, 서연이랑 벌써 같이 등교해? 너네 사귀는 거야?\""
            },
            "en": {
                "name": "Classmate",
                "text": "*The girl in the front row turns around and whispers,* \"Hey, you're already walking to school with Seoyeon? Are you two dating?\""
            },
            "es": {
                "name": "Compañero",
                "text": "*La chica de la primera fila se voltea y susurra,* \"Oye, ¿ya estás caminando a la escuela con Seoyeon? ¿Están saliendo?\""
            },
            "ja": {
                "name": "クラスメイト",
                "text": "*前の席の女の子が振り返ってささやく。* \"ねぇ、もうソヨンと一緒に登校してるの？ 付き合ってるの？\""
            },
            "fr": {
                "name": "Camarade de classe",
                "text": "*La fille au premier rang se retourne et chuchote,* \\\"Hé, tu viens déjà à l'école avec Seoyeon ? Vous sortez ensemble ?\\\""
            }
        }
    },
    "day2_classroom_settle_from_seoyeon_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_seoyeon_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"아니야, 교문 앞에서 우연히 만나서 같이 온 거야. 서연이가 많이 챙겨줘서 감사할 뿐이야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"No, we just happened to meet at the school gate and walked in together. I'm just grateful that Seoyeon's been looking out for me.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"No, simplemente nos encontramos en la puerta y caminamos juntos. Estoy agradecido de que Seoyeon me cuide tanto.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"違うよ、たまたま校門で会っただけ。ソヨンが気にかけてくれて感謝してるだけだよ。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Non, on s'est juste retrouvés au portail et on a marché ensemble. Je suis juste reconnaissant que Seoyeon veille sur moi.\\\""
            }
        }
    },
    "day2_classroom_settle_from_seoyeon_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*적당히 둘러대고 자리에 앉는다. 서연이가 자기 자리에서 살짝 손을 흔들어준다. 왠지 기분이 좋아지면서 가방을 풀고 교과서를 꺼내려는데... 뭔가 이상하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I brush it off and take my seat. Seoyeon gives me a little wave from her desk. It puts me in a good mood as I start unpacking my bag to get my textbooks out when... something seems off.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Lo dejo pasar y me siento. Seoyeon me hace un pequeño saludo desde su escritorio. Me pone de buen humor mientras empiezo a sacar los libros cuando... algo parece raro.*"
            },
            "ja": {
                "name": "僕",
                "text": "*適当にかわして席に着く。ソヨンが自分の席から小さく手を振ってくれる。いい気分で教科書を出そうとした時…何か違和感がある。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je balaie la remarque et m'assieds. Seoyeon me fait un petit signe de la main depuis son bureau. Ça me met de bonne humeur alors que je commence à défaire mon sac pour sortir mes manuels quand... quelque chose me semble bizarre.*"
            }
        }
    },
    "day2_classroom_from_dain": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_classroom_from_dain_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"자! 교실 도착! 오늘도 파이팅이다, {name}!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"We're here! Let's crush it today, {name}!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Llegamos! ¡Hoy vamos con todo, {name}!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"着いた！今日もぶっちぎるよ、{name}！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"On est arrivés ! On va tout déchirer aujourd'hui, {name} !\\\""
            }
        }
    },
    "day2_classroom_from_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_dain",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 활기차게 교실 문을 열고 들어서자, 교실 안의 분위기가 한층 밝아진다. 다인이의 에너지는 정말 전염성이 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain bursts through the classroom door with her usual energy, and the whole room seems to brighten up. Her energy is truly contagious.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dain irrumpe por la puerta del salón con su energía de siempre, y todo el lugar parece iluminarse. Su energía es realmente contagiosa.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインがいつものエネルギーで教室のドアを勢いよく開けると、部屋全体が明るくなった気がする。彼女のエネルギーは本当に伝染する。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain débarque dans la classe avec son énergie habituelle, et toute la pièce semble s'illuminer. Son énergie est vraiment contagieuse.*"
            }
        }
    },
    "day2_classroom_greet_from_dain": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_dain_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "\"오, 전학생! 좋은 아침! 다인이랑 같이 왔네? 벌써 절친 됐어?\""
            },
            "en": {
                "name": "Classmate",
                "text": "\"Hey, transfer student! Good morning! You came with Dain? Already best friends, huh?\""
            },
            "es": {
                "name": "Compañero",
                "text": "\"¡Oye, estudiante de intercambio! ¡Buenos días! ¿Viniste con Dain? ¿Ya son mejores amigos?\""
            },
            "ja": {
                "name": "クラスメイト",
                "text": "\"おっ、転校生！おはよう！ダインと一緒に来たの？もう親友かよ？\""
            },
            "fr": {
                "name": "Camarade de classe",
                "text": "\\\"Hé, le nouveau ! Bonjour ! T'es venu avec Dain ? Déjà meilleurs amis, hein ?\\\""
            }
        }
    },
    "day2_classroom_greet_from_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_classroom_settle_from_dain",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"당연하지! 우리 {name}이(가) 이제 우리 편이야! 자, {name}! 나중에 점심시간에 봐!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Of course! {name}'s one of us now! Alright, {name}! See you at lunch!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Por supuesto! ¡{name} ya es de los nuestros! ¡Bueno, {name}! ¡Nos vemos a la hora del almuerzo!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"当たり前じゃん！{name}はもう仲間だよ！じゃあ{name}！お昼にまたね！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Bien sûr ! {name} fait partie de la bande maintenant ! Allez, {name} ! On se voit à midi !\\\""
            }
        }
    },
    "day2_classroom_settle_from_dain": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_dain_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "*앞자리 여학생이 돌아보며 킥킥거린다.* \"다인이한테 붙잡히면 끝이야~ 체력 딸리면 조심해!\""
            },
            "en": {
                "name": "Classmate",
                "text": "*The girl in the front row turns around with a giggle.* \"Once Dain gets a hold of you, there's no escape! Watch out if your stamina can't keep up!\""
            },
            "es": {
                "name": "Compañero",
                "text": "*La chica de la primera fila se voltea riéndose.* \"¡Una vez que Dain te atrapa, no hay escapatoria! ¡Ten cuidado si tu resistencia no aguanta!\""
            },
            "ja": {
                "name": "クラスメイト",
                "text": "*前の席の女の子がクスクス笑いながら振り返る。* \"ダインに捕まったら逃げられないよ！体力ないとヤバいから気をつけてね！\""
            },
            "fr": {
                "name": "Camarade de classe",
                "text": "*La fille au premier rang se retourne en gloussant.* \\\"Une fois que Dain t'a attrapé, y'a pas d'échappatoire ! Gare à toi si ton endurance ne suit pas !\\\""
            }
        }
    },
    "day2_classroom_settle_from_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_dain_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"아, 하하... 다인이 에너지를 따라가려면 체력 관리를 좀 해야 될 것 같아.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Oh, haha... I think I'll need to work on my fitness to keep up with Dain's energy.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Ah, jaja... Creo que necesito mejorar mi condición física para seguirle el ritmo a la energía de Dain.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"あはは…ダインのエネルギーについていくには、体力つけないとダメかも。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Oh, haha... Je crois que je vais devoir travailler ma condition physique pour suivre l'énergie de Dain.\\\""
            }
        }
    },
    "day2_classroom_settle_from_dain_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*적당히 둘러대고 자리에 앉는다. 다인이가 자기 자리에서 엄지를 치켜세워 보여준다. 에너지를 잔뜩 받은 기분으로 가방을 풀고 교과서를 꺼내려는데... 뭔가 이상하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I brush it off and take my seat. Dain gives me a thumbs up from her desk. Feeling energized, I start unpacking my bag to get my textbooks out when... something seems off.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Lo dejo pasar y me siento. Dain me hace una señal con el pulgar desde su escritorio. Sintiéndome energizado, empiezo a sacar los libros cuando... algo parece raro.*"
            },
            "ja": {
                "name": "僕",
                "text": "*適当にかわして席に着く。ダインが自分の席からサムズアップしてくれる。元気をもらいながら教科書を出そうとした時…何か違和感がある。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je balaie la remarque et m'assieds. Dain me fait un pouce en l'air depuis son bureau. Plein d'énergie, je commence à défaire mon sac pour sortir mes manuels quand... quelque chose me semble bizarre.*"
            }
        }
    },
    "day2_classroom_from_nurse": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_from_nurse_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건 선생님과 헤어지고 교실로 향한다. 선생님의 향수 냄새가 아직 코끝에 맴도는 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I part ways with the school nurse and head toward the classroom. Her perfume still seems to linger at the tip of my nose.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me despido de la enfermera y me dirijo al salón. Su perfume parece seguir flotando en la punta de mi nariz.*"
            },
            "ja": {
                "name": "僕",
                "text": "*保健の先生と別れて教室に向かう。彼女の香水がまだ鼻先に残っている気がする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je quitte l'infirmière scolaire et me dirige vers la classe. Son parfum semble encore flotter au bout de mon nez.*"
            }
        }
    },
    "day2_classroom_from_nurse_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_nurse",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교실 문을 열자, 어제보다 훨씬 부드러운 공기가 나를 감싼다. 아이들의 시선에도 호의가 섞여 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Opening the classroom door, a much softer atmosphere than yesterday wraps around me. Even the students' gazes carry a hint of friendliness.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al abrir la puerta del salón, una atmósfera mucho más suave que la de ayer me envuelve. Incluso las miradas de los estudiantes tienen un toque de amabilidad.*"
            },
            "ja": {
                "name": "僕",
                "text": "*教室のドアを開けると、昨日よりずっと柔らかい雰囲気が包んでくる。生徒たちの目にも、どこか親しみが感じられる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En ouvrant la porte de la classe, une atmosphère bien plus douce qu'hier m'enveloppe. Même les regards des élèves portent une touche d'amitié.*"
            }
        }
    },
    "day2_classroom_greet_from_nurse": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_nurse_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "\"오, 전학생! 좋은 아침! 어라, 방금 보건실 쪽에서 온 거야? 어디 아파?\""
            },
            "en": {
                "name": "Classmate",
                "text": "\"Hey, transfer student! Good morning! Wait, did you just come from the nurse's office? Are you feeling sick?\""
            },
            "es": {
                "name": "Compañero",
                "text": "\"¡Oye, estudiante de intercambio! ¡Buenos días! Espera, ¿vienes de la enfermería? ¿Te sientes mal?\""
            },
            "ja": {
                "name": "クラスメイト",
                "text": "\"おっ、転校生！おはよう！あれ、今保健室から来た？具合悪いの？\""
            },
            "fr": {
                "name": "Camarade de classe",
                "text": "\\\"Hé, le nouveau ! Bonjour ! Attends, tu viens de l'infirmerie ? Tu es malade ?\\\""
            }
        }
    },
    "day2_classroom_greet_from_nurse_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_nurse",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"아니, 아프진 않아. 그냥 보건 선생님을 잠깐 마주쳤을 뿐이야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"No, I'm fine. I just bumped into the school nurse on the way in.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"No, estoy bien. Solo me encontré con la enfermera de camino.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"いや、大丈夫。来る途中でたまたま保健の先生に会っただけ。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Non, je vais bien. J'ai juste croisé l'infirmière scolaire en arrivant.\\\""
            }
        }
    },
    "day2_classroom_settle_from_nurse": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_nurse_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "*앞자리 여학생이 돌아보며 말한다.* \"아까 보건 선생님이랑 이야기하는 거 봤는데, 꽤 친해 보이던데? 보건실 단골이야?\""
            },
            "en": {
                "name": "Classmate",
                "text": "*The girl in the front row turns around and says,* \"I saw you chatting with the school nurse earlier. You two looked pretty close. A regular visitor to the nurse's office?\""
            },
            "es": {
                "name": "Compañero",
                "text": "*La chica de la primera fila se voltea y dice,* \"Te vi platicando con la enfermera hace rato. Se veían muy cercanos. ¿Ya eres un habitual de la enfermería?\""
            },
            "ja": {
                "name": "クラスメイト",
                "text": "*前の席の女の子が振り返って言う。* \"さっき保健の先生と話してるの見たよ。すごく仲良さそうだったけど。保健室の常連さん？\""
            },
            "fr": {
                "name": "Camarade de classe",
                "text": "*La fille au premier rang se retourne et dit,* \\\"Je t'ai vu discuter avec l'infirmière tout à l'heure. Vous aviez l'air proches. Un habitué de l'infirmerie ?\\\""
            }
        }
    },
    "day2_classroom_settle_from_nurse_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_nurse_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"아니야, 선생님이 전학생이라고 잘 적응하고 있는지 확인해주신 거야. 괜히 걱정까지 해주시고...\""
            },
            "en": {
                "name": "Me",
                "text": "\"No, she was just checking on me since I'm the new transfer student. She even went out of her way to make sure I was doing okay...\""
            },
            "es": {
                "name": "Yo",
                "text": "\"No, solo estaba pendiente de mí porque soy el nuevo estudiante de intercambio. Hasta se tomó la molestia de asegurarse de que estuviera bien...\""
            },
            "ja": {
                "name": "僕",
                "text": "\"いや、転校生だから気にかけてくれただけだよ。わざわざ大丈夫か確認してくれて…\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Non, elle vérifiait juste comment j'allais puisque je suis le nouvel élève. Elle a même pris la peine de s'assurer que tout allait bien...\\\""
            }
        }
    },
    "day2_classroom_settle_from_nurse_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*적당히 둘러대고 자리에 앉는다. 보건 선생님의 따뜻한 미소가 아직도 머릿속을 맴돈다. 가방을 풀고 교과서를 꺼내려는데... 뭔가 이상하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I brush it off and take my seat. The nurse's warm smile keeps lingering in my mind. I start unpacking my bag to get my textbooks out when... something seems off.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Lo dejo pasar y me siento. La cálida sonrisa de la enfermera sigue dando vueltas en mi mente. Empiezo a sacar los libros cuando... algo parece raro.*"
            },
            "ja": {
                "name": "僕",
                "text": "*適当にかわして席に着く。保健の先生の温かい笑顔が頭から離れない。教科書を出そうとした時…何か違和感がある。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je balaie la remarque et m'assieds. Le sourire chaleureux de l'infirmière reste gravé dans mon esprit. Je commence à défaire mon sac pour sortir mes manuels quand... quelque chose me semble bizarre.*"
            }
        }
    },
    "day2_classroom_from_yuna": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_from_yuna_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나와 헤어지고 교문을 지나 교실로 향한다. 그녀가 남긴 말들이 머릿속을 맴돈다. '쪽지 확인해봐'... 대체 무슨 쪽지일까.*"
            },
            "en": {
                "name": "Me",
                "text": "*I part ways with Yuna, pass through the school gate, and head to the classroom. Her words keep echoing in my head. 'Check the note on your desk'... What note?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me despido de Yuna, paso la puerta de la escuela y me dirijo al salón. Sus palabras siguen resonando en mi cabeza. 'Revisa la nota en tu escritorio'... ¿Qué nota?*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナと別れて校門をくぐり、教室に向かう。彼女の言葉が頭の中でこだまし続けている。「机の上のメモを見て」…何のメモだろう？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je quitte Yuna, franchis le portail de l'école et me dirige vers la classe. Ses mots résonnent dans ma tête. « Regarde le mot sur ton bureau »... Quel mot ?*"
            }
        }
    },
    "day2_classroom_from_yuna_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_yuna",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교실 문을 열자 익숙한 소란 속으로 들어선다. 하지만 유나의 말이 신경 쓰여 온전히 집중할 수가 없다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Opening the classroom door, I step into the familiar bustle. But I can't fully focus with Yuna's words weighing on my mind.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al abrir la puerta del salón, entro en el bullicio familiar. Pero no puedo concentrarme del todo con las palabras de Yuna en mi mente.*"
            },
            "ja": {
                "name": "僕",
                "text": "*教室のドアを開けると、いつもの賑やかさに入る。でもユナの言葉が気になって、完全には集中できない。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En ouvrant la porte de la classe, je plonge dans le brouhaha familier. Mais je n'arrive pas à me concentrer avec les mots de Yuna qui pèsent sur mon esprit.*"
            }
        }
    },
    "day2_classroom_greet_from_yuna": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_yuna_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "\"오, 전학생! 좋은 아침! 왠지 생각에 잠긴 표정인데, 무슨 고민 있어?\""
            },
            "en": {
                "name": "Classmate",
                "text": "\"Hey, transfer student! Good morning! You look like you've got something on your mind. Everything okay?\""
            },
            "es": {
                "name": "Compañero",
                "text": "\"¡Oye, estudiante de intercambio! ¡Buenos días! Parece que tienes algo en mente. ¿Estás bien?\""
            },
            "ja": {
                "name": "クラスメイト",
                "text": "\"おっ、転校生！おはよう！なんか考え事してる感じだけど、大丈夫？\""
            },
            "fr": {
                "name": "Camarade de classe",
                "text": "\\\"Hé, le nouveau ! Bonjour ! T'as l'air préoccupé. Tout va bien ?\\\""
            }
        }
    },
    "day2_classroom_greet_from_yuna_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_yuna",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"아... 아니야, 아무것도 아니야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Oh... it's nothing, really.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Ah... no es nada, de verdad.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"あぁ…何でもないよ、本当に。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Oh... c'est rien, vraiment.\\\""
            }
        }
    },
    "day2_classroom_settle_from_yuna": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_yuna_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "*앞자리 여학생이 돌아보며 말한다.* \"아까 교문 앞에서 누구랑 이야기하는 거 봤는데... 다른 반 애야? 좀 신비로워 보이던데.\""
            },
            "en": {
                "name": "Classmate",
                "text": "*The girl in the front row turns around and says,* \"I saw you talking to some girl at the gate earlier... Is she from another class? She looked kind of mysterious.\""
            },
            "es": {
                "name": "Compañero",
                "text": "*La chica de la primera fila se voltea y dice,* \"Te vi hablando con una chica en la puerta... ¿Es de otra clase? Se veía algo misteriosa.\""
            },
            "ja": {
                "name": "クラスメイト",
                "text": "*前の席の女の子が振り返って言う。* \"さっき校門で女の子と話してるの見たけど…他のクラスの子？なんかミステリアスな感じだったね。\""
            },
            "fr": {
                "name": "Camarade de classe",
                "text": "*La fille au premier rang se retourne et dit,* \\\"Je t'ai vu parler à une fille au portail tout à l'heure... Elle est d'une autre classe ? Elle avait l'air un peu mystérieuse.\\\""
            }
        }
    },
    "day2_classroom_settle_from_yuna_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_yuna_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"아... 그냥 같은 학교 학생인데, 나도 아직 잘 모르겠어.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Oh... she's just another student here. I don't really know her well yet.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Ah... es solo otra estudiante de aquí. Aún no la conozco bien.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"あぁ…この学校の生徒だよ。まだよく知らないんだけどね。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Oh... c'est juste une autre élève. Je ne la connais pas encore très bien.\\\""
            }
        }
    },
    "day2_classroom_settle_from_yuna_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*적당히 둘러대고 자리에 앉는다. 유나가 말한 '쪽지'가 뭔지 계속 신경 쓰인다. 가방을 풀고 교과서를 꺼내려는데... 뭔가 이상하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I brush it off and take my seat. I can't stop thinking about the 'note' Yuna mentioned. I start unpacking my bag to get my textbooks out when... something seems off.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Lo dejo pasar y me siento. No puedo dejar de pensar en la 'nota' que mencionó Yuna. Empiezo a sacar los libros cuando... algo parece raro.*"
            },
            "ja": {
                "name": "僕",
                "text": "*適当にかわして席に着く。ユナが言った「メモ」のことが気になって仕方ない。教科書を出そうとした時…何か違和感がある。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je balaie la remarque et m'assieds. Je n'arrive pas à arrêter de penser au « mot » que Yuna a mentionné. Je commence à défaire mon sac pour sortir mes manuels quand... quelque chose me semble bizarre.*"
            }
        }
    },
    "day2_classroom": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교실 문을 열자, 어제보다 훨씬 부드러운 공기가 나를 감싼다. 아이들의 시선에도 호의가 섞여 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Opening the classroom door, a much softer atmosphere than yesterday wraps around me. Even the students' gazes carry a hint of friendliness.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al abrir la puerta del salón, una atmósfera mucho más suave que la de ayer me envuelve. Incluso las miradas de los estudiantes tienen un toque de amabilidad.*"
            },
            "ja": {
                "name": "僕",
                "text": "*教室のドアを開けると、昨日よりずっと柔らかい雰囲気が包んでくる。生徒たちの目にも、どこか親しみが感じられる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En ouvrant la porte de la classe, une atmosphère bien plus douce qu'hier m'enveloppe. Même les regards des élèves portent une touche d'amitié.*"
            }
        }
    },
    "day2_classroom_greet": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "\"오, 전학생! 좋은 아침! 어제 잘 적응했어? 우리 반 분위기 괜찮지?\""
            },
            "en": {
                "name": "Classmate",
                "text": "\"Hey, transfer student! Good morning! Did you settle in okay yesterday? Our class is pretty chill, right?\""
            },
            "es": {
                "name": "Compañero",
                "text": "\"¡Oye, estudiante de intercambio! ¡Buenos días! ¿Te acomodaste bien ayer? Nuestro salón es bastante tranquilo, ¿no?\""
            },
            "ja": {
                "name": "クラスメイト",
                "text": "\"おっ、転校生！おはよう！昨日はうまく馴染めた？うちのクラス、結構いい感じでしょ？\""
            },
            "fr": {
                "name": "Camarade de classe",
                "text": "\\\"Hé, le nouveau ! Bonjour ! Tu t'es bien installé hier ? Notre classe est plutôt cool, non ?\\\""
            }
        }
    },
    "day2_classroom_greet_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_alone",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*몇몇 아이들이 가볍게 인사를 건네준다. 어제는 호기심 가득한 눈빛이었는데, 오늘은 편안한 미소가 섞여 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A few classmates greet me casually. Yesterday they looked at me with pure curiosity, but today their smiles are relaxed.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Algunos compañeros me saludan casualmente. Ayer me miraban con pura curiosidad, pero hoy sus sonrisas son relajadas.*"
            },
            "ja": {
                "name": "僕",
                "text": "*何人かのクラスメイトが気軽に挨拶してくる。昨日は純粋な好奇心で見てたけど、今日は笑顔がリラックスしてる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Quelques camarades me saluent décontractés. Hier ils me regardaient avec pure curiosité, mais aujourd'hui leurs sourires sont détendus.*"
            }
        }
    },
    "day2_classroom_settle_alone": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_alone_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "*앞자리 여학생이 돌아보며 말한다.* \"전학 이틀째인데 벌써 적응한 거야? 대단하다!\""
            },
            "en": {
                "name": "Classmate",
                "text": "*The girl in the front row turns around and says,* \"Only your second day and you've already settled in? That's impressive!\""
            },
            "es": {
                "name": "Compañero",
                "text": "*La chica de la primera fila se voltea y dice,* \"¿Apenas es tu segundo día y ya te acomodaste? ¡Eso es impresionante!\""
            },
            "ja": {
                "name": "クラスメイト",
                "text": "*前の席の女の子が振り返って言う。* \"まだ二日目なのにもう馴染んでるの？すごいね！\""
            },
            "fr": {
                "name": "Camarade de classe",
                "text": "*La fille au premier rang se retourne et dit,* \\\"Seulement ton deuxième jour et tu es déjà installé ? C'est impressionnant !\\\""
            }
        }
    },
    "day2_classroom_settle_alone_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_alone_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"아, 하하... 다들 잘 해줘서 금방 적응했어.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Oh, haha... Everyone's been so nice, it was easy to adjust.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Ah, jaja... Es que todos han sido muy amables, así que fue fácil adaptarme.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"あ、あはは…みんなが優しくしてくれたおかげだよ。すぐに馴染めた。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Oh, haha... Tout le monde a été tellement gentil, c'était facile de s'adapter.\\\""
            }
        }
    },
    "day2_classroom_settle_alone_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*적당히 둘러대고 자리에 앉는다. 가방을 풀고 교과서를 꺼내려는데... 뭔가 이상하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I give a vague answer and sit down. Opening my bag to take out my textbooks... something feels off.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Doy una respuesta vaga y me siento. Al abrir la mochila para sacar los libros... algo se siente raro.*"
            },
            "ja": {
                "name": "僕",
                "text": "*適当に答えて席に着く。カバンを開けて教科書を出そうとしたら…何か違和感がある。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je donne une réponse vague et m'assieds. En ouvrant mon sac pour sortir mes manuels... quelque chose me semble bizarre.*"
            }
        }
    },
    "day2_classroom_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "choices": [
            {
                "next": "day2_check_note"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*자리에 앉아 가방을 정리하려는데, 책상 구석에 놓인 작은 쪽지가 눈에 들어온다.*",
                "choices": [
                    "쪽지를 확인한다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*As I'm settling in at my desk, I notice a small note tucked in the corner.*",
                "choices": [
                    "Check the note."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Mientras me acomodo en mi escritorio, noto una pequeña nota en la esquina.*",
                "choices": [
                    "Revisar la nota."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*席に着いて落ち着こうとすると、端に小さなメモが挟まっているのに気づく。*",
                "choices": [
                    "メモを確認する。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*En m'installant à mon bureau, je remarque un petit mot glissé dans un coin.*",
                "choices": [
                    "Vérifier le mot."
                ]
            }
        }
    },
    "day2_check_note": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_content",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*조심스레 쪽지를 펼친다. 정갈하면서도 어딘가 차가운 글씨체가 눈에 띈다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I carefully unfold the note. The handwriting is neat yet somehow cold.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Desdoblo la nota con cuidado. La letra es prolija pero de alguna manera fría.*"
            },
            "ja": {
                "name": "僕",
                "text": "*そっとメモを広げる。きれいだけど、どこか冷たい筆跡だ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je déplie soigneusement le mot. L'écriture est soignée mais étrangement froide.*"
            }
        }
    },
    "day2_note_content": {
        "background": "assets/images/background/room_school.png",
        "next": "day2_note_reaction",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "\"'점심시간에 도서관 별관으로 와. 할 말이 있어.' - 유나\""
            },
            "en": {
                "name": "System",
                "text": "\"'Come to the courtyard behind the library annex at lunch. I have something to tell you.' - Yuna\""
            },
            "es": {
                "name": "Sistema",
                "text": "\"'Ven al patio trasero del anexo de la biblioteca a la hora del almuerzo. Tengo algo que decirte.' - Yuna\""
            },
            "ja": {
                "name": "システム",
                "text": "\"『昼休みに図書館別館の裏庭に来て。話したいことがある。』- ユナ\""
            },
            "fr": {
                "name": "Système",
                "text": "\\\"'Viens dans la cour derrière l'annexe de la bibliothèque à midi. J'ai quelque chose à te dire.' - Yuna\\\""
            }
        }
    },
    "day2_note_reaction": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_speculation",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나...? 쪽지를 다시 한 번 읽어본다. '도서관 별관'이라... 학교 구석진 곳이잖아. 이런 방식으로 호출한다니, 뭔가 비밀스러운 느낌이 든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna...? I read the note again. 'The courtyard behind the library annex'... that's a secluded spot at school. Summoning me with a note like this — it feels secretive.*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿Yuna...? Leo la nota otra vez. 'El patio trasero del anexo de la biblioteca'... es un lugar apartado de la escuela. Convocarme con una nota así — se siente muy secreto.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナ…？ もう一度メモを読む。「図書館別館の裏庭」…学校の中でもかなり人目につかない場所だ。こんなメモで呼び出すなんて、なんだか秘密めいてる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna ...? Je relis le mot. « La cour derrière l'annexe de la bibliothèque »... c'est un endroit isolé de l'école. Me convoquer avec un mot comme ça — c'est tellement secret.*"
            }
        }
    },
    "day2_note_speculation": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_speculation_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*대체 무슨 말을 하려고 이런 쪽지를 남긴 걸까? 연락처라도 있다면 직접 물어볼 텐데... 쪽지라니, 어딘가 그녀답다는 생각이 든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*What could she possibly want to say that she'd leave a note like this? If I had her number, I could just ask her directly... but a note — that somehow feels very like her.*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿Qué podría querer decirme para dejar una nota así? Si tuviera su número, podría preguntarle directamente... pero una nota — eso de alguna manera se siente muy propio de ella.*"
            },
            "ja": {
                "name": "僕",
                "text": "*一体何を話したいから、こんなメモを残したんだろう？ 連絡先を知ってたら直接聞けるのに…でもメモっていうのが、なんだか彼女らしい気がする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Qu'est-ce qu'elle peut bien vouloir me dire pour laisser un mot comme ça ? Si j'avais son numéro, je pourrais lui demander directement... mais un mot — ça lui ressemble tellement.*"
            }
        }
    },
    "day2_note_speculation_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_speculation_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*혹시 유나에 대해 아는 사람이 있을까? 주변을 슬쩍 둘러본다. 하지만 쪽지 내용을 함부로 말할 순 없을 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Is there anyone who might know about Yuna? I discreetly glance around. But I don't think I should mention the note to just anyone.*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿Habrá alguien que sepa algo sobre Yuna? Echo un vistazo discreto a mi alrededor. Pero no creo que deba mencionar la nota a cualquiera.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナのことを知ってる人はいないかな？ さりげなく周りを見回す。でもメモのことを誰にでも言うべきじゃない気がする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Y a-t-il quelqu'un qui pourrait connaître Yuna ? Je jette discrètement un coup d'œil autour de moi. Mais je ne pense pas devoir mentionner le mot à n'importe qui.*"
            }
        }
    },
    "day2_note_speculation_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_ask_around",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*쪽지를 조심스럽게 접어 주머니에 넣는다. 점심시간이 벌써부터 기다려진다... 아니, 긴장된다는 표현이 더 맞으려나.*"
            },
            "en": {
                "name": "Me",
                "text": "*I carefully fold the note and slip it into my pocket. I can't wait for lunch already... or maybe 'nervous' is more accurate.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Doblo la nota con cuidado y la guardo en mi bolsillo. Ya no puedo esperar a la hora del almuerzo... o más bien 'nervioso' sería más preciso.*"
            },
            "ja": {
                "name": "僕",
                "text": "*メモを丁寧に折ってポケットにしまう。お昼が待ちきれない…いや、「緊張している」の方が正確かもしれない。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je plie soigneusement le mot et le glisse dans ma poche. J'ai déjà hâte que ce soit midi... ou plutôt « nerveux » serait plus juste.*"
            }
        }
    },
    "day2_note_ask_around": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            {
                "next": "day2_note_ask_around_met",
                "condition": "met_yuna"
            },
            {
                "next": "day2_note_ask_around_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*옆자리 친구에게 슬쩍 물어본다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I casually ask the person sitting next to me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Le pregunto casualmente a la persona sentada a mi lado.*"
            },
            "ja": {
                "name": "僕",
                "text": "*さりげなく隣の席の人に聞いてみる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je demande discrètement à la personne assise à côté de moi.*"
            }
        }
    },
    "day2_note_ask_around_met": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_ask_around_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"혹시 유나라는 애에 대해 뭐 좀 아는 거 있어? 다른 반인 것 같은데...\""
            },
            "en": {
                "name": "Me",
                "text": "\"Hey, do you know anything about someone named Yuna? I think she's in a different class...\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Oye, ¿sabes algo sobre alguien llamada Yuna? Creo que está en otra clase...\""
            },
            "ja": {
                "name": "僕",
                "text": "\"ねぇ、ユナっていう人知ってる？ 別のクラスだと思うんだけど…\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Hé, tu sais quelque chose sur une certaine Yuna ? Je crois qu'elle est dans une autre classe...\\\""
            }
        }
    },
    "day2_note_ask_around_new": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_ask_around_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"혹시... 유나라는 애 알아?\""
            },
            "en": {
                "name": "Me",
                "text": "\"Hey... do you know anyone named Yuna?\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Oye... ¿conoces a alguien llamada Yuna?\""
            },
            "ja": {
                "name": "僕",
                "text": "\"ねぇ…ユナっていう人知ってる？\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Hé... tu connais quelqu'un qui s'appelle Yuna ?\\\""
            }
        }
    },
    "day2_note_ask_around_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_ask_around_3",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "\"유나? 음... 우리 반은 아닌데? 다른 반인가? 아니면 선배?\""
            },
            "en": {
                "name": "Classmate",
                "text": "\"Yuna? Hmm... she's not in our class. Maybe another class? Or an upperclassman?\""
            },
            "es": {
                "name": "Compañero",
                "text": "\"¿Yuna? Hmm... no está en nuestro salón. ¿Tal vez en otro salón? ¿O alguien de grado superior?\""
            },
            "ja": {
                "name": "クラスメイト",
                "text": "\"ユナ？ うーん…うちのクラスにはいないなぁ。別のクラスかな？ それとも先輩？\""
            },
            "fr": {
                "name": "Camarade de classe",
                "text": "\\\"Yuna ? Hmm... elle n'est pas dans notre classe. Peut-être dans une autre classe ? Ou une élève plus âgée ?\\\""
            }
        }
    },
    "day2_note_ask_around_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_homeroom_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*역시 아는 사람이 없다. 유나라는 이름만으로는 정보가 부족하다. 점심시간에 직접 가보는 수밖에 없겠어.*"
            },
            "en": {
                "name": "Me",
                "text": "*As expected, nobody knows. Just the name 'Yuna' isn't enough to go on. I'll just have to go there myself at lunch.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Como era de esperarse, nadie sabe. Solo el nombre 'Yuna' no es suficiente. Tendré que ir yo mismo a la hora del almuerzo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*やっぱり誰も知らない。「ユナ」という名前だけじゃ手がかりが足りない。お昼に自分で行くしかないか。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Comme prévu, personne ne sait. Le nom « Yuna » seul ne suffit pas. Je n'aurai qu'à y aller moi-même à midi.*"
            }
        }
    },
    "day2_homeroom_start": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_homeroom_rollcall",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"자, 다들 자리에 앉아라. 조회 시작한다.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Alright, everyone take your seats. Homeroom is starting.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Bien, todos a sus asientos. Comienza la hora de tutoría.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"はい、みんな席について。ホームルーム始めるわよ。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"Bien, tout le monde à sa place. L'appel commence.\\\""
            }
        }
    },
    "day2_homeroom_rollcall": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_homeroom_rollcall_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*선생님이 출석부를 펼치며 이름을 하나하나 부르기 시작한다.* \"...{name}? 전학생, 여기 있지?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*The teacher opens the attendance book and starts calling names one by one.* \"...{name}? Transfer student, you're here, right?\""
            },
            "es": {
                "name": "Profesora",
                "text": "*La profesora abre el libro de asistencia y empieza a llamar nombres uno por uno.* \"...¿{name}? Estudiante de intercambio, ¿estás aquí?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*先生が出席簿を開いて、一人ずつ名前を呼び始める。* \"…{name}？ 転校生、いるわよね？\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*La professeure ouvre le cahier de présence et commence l'appel.* \\\"...{name} ? Le nouvel élève, tu es là ?\\\""
            }
        }
    },
    "day2_homeroom_rollcall_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_homeroom_rollcall_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"네, 있습니다.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Yes, I'm here.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Sí, estoy aquí.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"はい、います。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Oui, je suis là.\\\""
            }
        }
    },
    "day2_homeroom_rollcall_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day2_homeroom_notice",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"좋아. 전학 이틀째인데, 어제보다 표정이 밝아졌구나. 잘 적응하고 있나 보다.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Good. It's only your second day, but you look brighter than yesterday. Seems like you're adjusting well.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Bien. Apenas es tu segundo día, pero te ves más animado que ayer. Parece que te estás adaptando bien.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"よし。まだ二日目なのに、昨日より明るい顔してるわね。うまく馴染めてるみたいで何より。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"Bien. Ce n'est que ton deuxième jour, mais tu as l'air plus épanoui qu'hier. On dirait que tu t'adaptes bien.\\\""
            }
        }
    },
    "day2_homeroom_notice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_homeroom_notice_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"공지사항 하나 전달한다. 이번 주 금요일에 학교 축제 준비 회의가 있을 예정이니까, 관심 있는 학생들은 방과 후에 남아 줘.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"One announcement. There will be a school festival planning meeting this Friday, so anyone interested should stay after school.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Un anuncio. Este viernes habrá una reunión de planificación del festival escolar, así que si alguien está interesado, quédese después de clases.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"一つお知らせ。今週の金曜日に学園祭の企画会議があるから、興味のある人は放課後残ってね。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"Une annonce. Il y aura une réunion de planification du festival scolaire ce vendredi, donc toute personne intéressée doit rester après les cours.\\\""
            }
        }
    },
    "day2_homeroom_notice_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_homeroom_event",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학교 축제라... 전학 온 지 얼마 안 됐는데 축제까지 있다니. 이 학교 생활이 점점 더 기대된다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A school festival... I just transferred and there's already a festival coming up. I'm getting more and more excited about this school.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Un festival escolar... Apenas me transferí y ya viene un festival. Cada vez me emociona más esta escuela.*"
            },
            "ja": {
                "name": "僕",
                "text": "*学園祭か…転校したばかりなのにもう祭りがあるんだ。この学校がますます楽しみになってきた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Un festival scolaire... Je viens d'arriver et il y a déjà un festival qui approche. Je suis de plus en plus enthousiaste pour cette école.*"
            }
        }
    },
    "day2_homeroom_event": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_homeroom_event_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "\"선생님, 질문요! 축제 때 반 대항 장기자랑도 하나요?\""
            },
            "en": {
                "name": "Classmate",
                "text": "\"Teacher, question! Will there be a class talent show at the festival?\""
            },
            "es": {
                "name": "Compañero",
                "text": "\"¡Profesora, pregunta! ¿Habrá un espectáculo de talentos por salón en el festival?\""
            },
            "ja": {
                "name": "クラスメイト",
                "text": "\"先生、質問！ 学園祭でクラス対抗のタレントショーはあるんですか？\""
            },
            "fr": {
                "name": "Camarade de classe",
                "text": "\\\"Professeur, question ! Il y aura un spectacle de talents par classe au festival ?\\\""
            }
        }
    },
    "day2_homeroom_event_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day2_homeroom_event_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"글쎄, 아직 결정된 건 없지만... 우리 반이 나가면 당연히 1등이겠지?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Well, nothing's decided yet, but... if our class enters, we'd obviously win first place, right?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Bueno, todavía no se ha decidido nada, pero... si nuestro salón participa, obviamente ganaríamos el primer lugar, ¿no?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"まあ、まだ何も決まってないけど…うちのクラスが出たら、当然一位よね？\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\\\"Eh bien, rien n'est encore décidé, mais... si notre classe participe, on gagnerait évidemment la première place, non ?\\\""
            }
        }
    },
    "day2_homeroom_event_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day2_morning_class",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교실이 킥킥대는 웃음으로 가득 찬다. 선생님도 은근히 유머가 있으시다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The classroom fills with chuckles. The teacher actually has a pretty good sense of humor.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El salón se llena de risas. La profesora tiene bastante buen sentido del humor.*"
            },
            "ja": {
                "name": "僕",
                "text": "*教室がクスクス笑いで満たされる。先生、意外とユーモアのセンスあるんだな。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La classe se remplit de rires. La professeure a en fait un assez bon sens de l'humour.*"
            }
        }
    },
    "day2_morning_class": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "branches": [
            {
                "next": "day2_morning_class_yuna_msg",
                "condition": "sent_msg_day1_yuna"
            },
            {
                "next": "day2_morning_class_yuna_met",
                "condition": "met_yuna"
            },
            {
                "next": "day2_morning_class_yuna_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*수업 시간 내내 유나의 쪽지가 머릿속을 떠나지 않는다. 대체 무슨 할 말이 있는 걸까?*"
            },
            "en": {
                "name": "Me",
                "text": "*Throughout the entire class, Yuna's note won't leave my mind. What on earth does she want to tell me?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Durante toda la clase, la nota de Yuna no sale de mi mente. ¿Qué diablos querrá decirme?*"
            },
            "ja": {
                "name": "僕",
                "text": "*授業中ずっと、ユナのメモが頭から離れない。一体何を伝えたいんだろう？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Pendant tout le cours, le mot de Yuna ne quitte pas mon esprit. Qu'est-ce qu'elle peut bien vouloir me dire ?*"
            }
        }
    },
    "day2_morning_class_yuna_msg": {
        "next": "day2_morning_class_focus",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어젯밤 메시지를 주고받았던 유나... 번호도 있는데 왜 굳이 쪽지를 남긴 걸까? 그녀다운 방식이라는 생각에 피식 웃음이 난다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna, who I exchanged messages with last night... She has my number, so why leave a note? The thought that this is so very her makes me chuckle.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna, con quien intercambié mensajes anoche... Tiene mi número, ¿entonces por qué dejar una nota? Pensar que eso es tan propio de ella me hace reír.*"
            },
            "ja": {
                "name": "僕",
                "text": "*昨夜メッセージを交わしたユナ…僕の番号を知ってるのに、なぜメモ？ それが彼女らしいなと思うと、ちょっと笑えてくる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna, avec qui j'ai échangé des messages hier soir... Elle a mon numéro, alors pourquoi laisser un mot ? L'idée que c'est tellement elle me fait sourire.*"
            }
        }
    },
    "day2_morning_class_yuna_met": {
        "next": "day2_morning_class_focus",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어제 만났던 유나... 그녀가 나에게 이런 쪽지를 남긴 걸까? 비밀이라니... 대체 무엇인지 궁금해진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna, who I met yesterday... Did she really leave this note for me? A secret... I can't help but wonder what it could be.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna, a quien conocí ayer... ¿De verdad dejó esta nota para mí? Un secreto... no puedo evitar preguntarme qué será.*"
            },
            "ja": {
                "name": "僕",
                "text": "*昨日会ったユナ…本当にこのメモを残してくれたのかな？ 秘密って…何なんだろう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna, que j'ai rencontrée hier... C'est vraiment elle qui m'a laissé ce mot ? Un secret... Je ne peux m'empêcher de me demander ce que c'est.*"
            }
        }
    },
    "day2_morning_class_yuna_new": {
        "next": "day2_morning_class_focus",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나...? 어제는 들어보지 못한 이름이다. 대체 누구길래 나에게 이런 쪽지를 남긴 걸까?*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna...? That's a name I didn't hear yesterday. Who is she, and why would she leave a note like this for me?*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿Yuna...? Ese es un nombre que no escuché ayer. ¿Quién es, y por qué me dejaría una nota así?*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナ…？ 昨日は聞かなかった名前だ。誰なんだろう、なぜ僕にこんなメモを残したんだろう？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna ...? C'est un nom que je n'ai pas entendu hier. Qui est-elle, et pourquoi me laisserait-elle un mot comme ça ?*"
            }
        }
    },
    "day2_morning_class_focus": {
        "next": "day2_morning_class_quiz",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*칠판에 적히는 수학 공식이 눈에 들어오지 않는다. '도서관 별관 뒤뜰'이라는 단어만 머릿속을 맴돈다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The math formulas on the blackboard aren't registering at all. The words 'courtyard behind the library annex' just keep echoing in my head.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Las fórmulas matemáticas en el pizarrón no registran en absoluto. Las palabras 'patio trasero del anexo de la biblioteca' siguen resonando en mi cabeza.*"
            },
            "ja": {
                "name": "僕",
                "text": "*黒板の数学の公式が全く頭に入ってこない。「図書館別館の裏庭」という言葉が頭の中でこだまし続けている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Les formules de maths au tableau ne rentrent pas du tout. Les mots « cour derrière l'annexe de la bibliothèque » ne cessent de résonner dans ma tête.*"
            }
        }
    },
    "day2_morning_class_quiz": {
        "character": null,
        "next": "day2_morning_class_quiz_2",
        "_i18n": {
            "ko": {
                "name": "수학선생님",
                "text": "\"자, 이 문제 풀어볼 사람? ...전학생, 한 번 해볼래?\""
            },
            "en": {
                "name": "Math Teacher",
                "text": "\"Alright, who wants to try this problem? ...Transfer student, how about you?\""
            },
            "es": {
                "name": "Profesor de Matemáticas",
                "text": "\"Bien, ¿quién quiere intentar este problema? ...Estudiante de intercambio, ¿qué tal tú?\""
            },
            "ja": {
                "name": "数学の先生",
                "text": "\"さて、この問題を解きたい人は？ …転校生、どうだ？\""
            },
            "fr": {
                "name": "Professeur de Maths",
                "text": "\\\"Bien, qui veut essayer ce problème ? ...Le nouvel élève, et toi ?\\\""
            }
        }
    },
    "day2_morning_class_quiz_2": {
        "choices": [
            {
                "next": "day2_quiz_try"
            },
            {
                "next": "day2_quiz_pass"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*아뿔싸, 딴생각에 빠져 있었다. 황급히 칠판을 바라보지만, 공식이 도무지 머리에 들어오지 않는다.*",
                "choices": [
                    "당당하게 나가서 도전해본다.",
                    "솔직하게 모르겠다고 한다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Oh no, I was completely zoned out. I hastily look at the blackboard, but the formulas won't register at all.*",
                "choices": [
                    "Boldly walk up and give it a shot.",
                    "Honestly say I don't know."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Ay no, estaba completamente distraído. Miro el pizarrón apresuradamente, pero las fórmulas no registran.*",
                "choices": [
                    "Ir al frente y dar un intento valiente.",
                    "Decir honestamente que no sé."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*やばい、完全にボーッとしてた。慌てて黒板を見るけど、公式が全然頭に入ってこない。*",
                "choices": [
                    "堂々と前に出てやってみる。",
                    "正直に分からないと言う。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Oh non, j'étais complètement dans la lune. Je regarde précipitamment le tableau, mais les formules ne rentrent pas du tout.*",
                "choices": [
                    "Monter courageusement et tenter le coup.",
                    "Avouer honnêtement que je ne sais pas."
                ]
            }
        }
    },
    "day2_quiz_try": {
        "next": "day2_quiz_try_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*칠판 앞에 서서 공식을 더듬더듬 써나간다. 다행히 어제 예습했던 부분이라 어렴풋이 기억이 난다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Standing at the blackboard, I fumble through the formula. Luckily, it's something I previewed yesterday, so it vaguely comes back to me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*De pie frente al pizarrón, lucho con la fórmula. Por suerte, es algo que revisé ayer, así que vagamente vuelve a mí.*"
            },
            "ja": {
                "name": "僕",
                "text": "*黒板の前に立って、四苦八苦しながら公式をたどる。運よく、昨日予習した内容だったから、なんとなく思い出せた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Debout au tableau, je tâtonne avec la formule. Heureusement, c'est quelque chose que j'ai révisé hier, donc ça me revient vaguement.*"
            }
        }
    },
    "day2_quiz_try_2": {
        "character": null,
        "next": "day2_quiz_result",
        "_i18n": {
            "ko": {
                "name": "수학선생님",
                "text": "\"오, 전학생 실력이 꽤 되는데? 맞았어. 잘 했어, 자리로 돌아가.\""
            },
            "en": {
                "name": "Math Teacher",
                "text": "\"Oh, not bad, transfer student! That's correct. Well done — go back to your seat.\""
            },
            "es": {
                "name": "Profesor de Matemáticas",
                "text": "\"Oh, nada mal, estudiante de intercambio. Eso es correcto. Buen trabajo — vuelve a tu asiento.\""
            },
            "ja": {
                "name": "数学の先生",
                "text": "\"おお、なかなかやるな、転校生！正解だ。よくやった。席に戻っていいぞ。\""
            },
            "fr": {
                "name": "Professeur de Maths",
                "text": "\\\"Oh, pas mal, le nouveau ! C'est correct. Bien joué — retourne à ta place.\\\""
            }
        }
    },
    "day2_quiz_pass": {
        "next": "day2_quiz_pass_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"죄송합니다, 아직 수업 진도를 다 따라잡지 못해서...\""
            },
            "en": {
                "name": "Me",
                "text": "\"I'm sorry, I haven't quite caught up with the material yet...\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Lo siento, todavía no me he puesto al día con el material...\""
            },
            "ja": {
                "name": "僕",
                "text": "\"すみません、まだ内容に追いつけてなくて…\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Je suis désolé, je n'ai pas encore rattrapé le programme...\\\""
            }
        }
    },
    "day2_quiz_pass_2": {
        "character": null,
        "next": "day2_quiz_result",
        "_i18n": {
            "ko": {
                "name": "수학선생님",
                "text": "\"괜찮아, 전학 온 지 얼마 안 됐으니까. 다음엔 예습해오렴.\""
            },
            "en": {
                "name": "Math Teacher",
                "text": "\"That's alright, you just transferred. Try to preview the material next time.\""
            },
            "es": {
                "name": "Profesor de Matemáticas",
                "text": "\"Está bien, acabas de transferirte. Intenta repasar el material la próxima vez.\""
            },
            "ja": {
                "name": "数学の先生",
                "text": "\"大丈夫だ、転校したばかりだからな。次回は予習してこい。\""
            },
            "fr": {
                "name": "Professeur de Maths",
                "text": "\\\"C'est pas grave, tu viens d'arriver. Essaie de préparer le cours la prochaine fois.\\\""
            }
        }
    },
    "day2_quiz_result": {
        "next": "day2_second_class",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어찌저찌 수업이 넘어간다. 쪽지 때문에 집중이 안 되는 건 어쩔 수 없지만, 그래도 수업은 수업이니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*The class moves on, one way or another. I can't help being distracted by the note, but class is class.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La clase continúa, de una forma u otra. No puedo evitar distraerme con la nota, pero clase es clase.*"
            },
            "ja": {
                "name": "僕",
                "text": "*どうにか授業は続いていく。メモのことが気になって仕方ないけど、授業は授業だ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le cours continue, tant bien que mal. Je ne peux m'empêcher d'être distrait par le mot, mais un cours est un cours.*"
            }
        }
    },
    "day2_second_class": {
        "next": "day2_second_class_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*쉬는 시간 없이 바로 2교시 국어 수업이 시작된다. 선생님이 어제 나눠준 유인물을 꺼내라고 한다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Without a break, the second period starts — Korean language class. The teacher tells us to take out the handout from yesterday.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sin descanso, comienza la segunda hora — clase de lengua. El profesor nos dice que saquemos el material de ayer.*"
            },
            "ja": {
                "name": "僕",
                "text": "*休む間もなく二時間目が始まる。国語の授業だ。先生が昨日の配布物を出すように言う。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Sans pause, la deuxième heure commence — cours de coréen. Le professeur nous dit de sortir le poly d'hier.*"
            }
        }
    },
    "day2_second_class_2": {
        "next": "day2_second_class_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유인물을 뒤적이다가, 아까 주머니에 넣은 쪽지가 손끝에 닿는다. 심장이 쿵 하고 뛴다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Rummaging through the handouts, my fingertips brush against the note in my pocket. My heart skips a beat.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Rebuscando entre los materiales, mis dedos rozan la nota en mi bolsillo. El corazón me da un vuelco.*"
            },
            "ja": {
                "name": "僕",
                "text": "*プリントを探していると、指先がポケットの中のメモに触れる。心臓がドキッとする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En fouillant dans les polys, mes doigts effleurent le mot dans ma poche. Mon cœur fait un bond.*"
            }
        }
    },
    "day2_second_class_3": {
        "next": "day2_last_class_before_lunch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*점심시간까지 아직 두 시간이나 남았다. 이 시간이 왜 이렇게 안 가는 건지...*"
            },
            "en": {
                "name": "Me",
                "text": "*There are still two hours until lunch. Why is time crawling so slowly...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Todavía faltan dos horas para el almuerzo. ¿Por qué el tiempo pasa tan lento...?*"
            },
            "ja": {
                "name": "僕",
                "text": "*お昼まであと二時間もある。なんでこんなに時間が遅いんだろう…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Il reste encore deux heures avant le déjeuner. Pourquoi le temps passe-t-il si lentement...*"
            }
        }
    },
    "day2_last_class_before_lunch": {
        "next": "day2_last_class_before_lunch_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*3교시 영어 수업이 시작된다. 선생님의 발음이 귀에 들리긴 하는데, 머릿속은 온통 점심시간 생각뿐이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Third period, English class. The teacher's pronunciation reaches my ears, but my mind is consumed with thoughts of lunchtime.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Tercera hora, clase de inglés. La pronunciación del profesor llega a mis oídos, pero mi mente está consumida con pensamientos sobre la hora del almuerzo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*三時間目、英語の授業。先生の発音が耳に入ってくるけど、頭の中はお昼のことでいっぱいだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Troisième heure, cours d'anglais. La prononciation du professeur atteint mes oreilles, mais mon esprit est absorbé par la pause déjeuner.*"
            }
        }
    },
    "day2_last_class_before_lunch_2": {
        "next": "day2_last_class_before_lunch_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*도서관 별관 뒤뜰... 가본 적도 없는 곳이다. 유나는 도대체 왜 그런 구석진 곳을 골랐을까?*"
            },
            "en": {
                "name": "Me",
                "text": "*The courtyard behind the library annex... I've never even been there. Why would Yuna pick such a secluded place?*"
            },
            "es": {
                "name": "Yo",
                "text": "*El patio trasero del anexo de la biblioteca... Ni siquiera he estado ahí. ¿Por qué Yuna elegiría un lugar tan apartado?*"
            },
            "ja": {
                "name": "僕",
                "text": "*図書館別館の裏庭…行ったこともない場所だ。なぜユナはそんな人目につかないところを選んだんだろう？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La cour derrière l'annexe de la bibliothèque... Je n'y suis même jamais allé. Pourquoi Yuna choisirait-elle un endroit si isolé ?*"
            }
        }
    },
    "day2_last_class_before_lunch_3": {
        "next": "day2_last_class_before_lunch_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*혹시 위험한 건 아니겠지...? 아니, 같은 학교 학생이 보낸 쪽지인데 뭐가 위험해. 그래도 왠지 두근거린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*It's not dangerous or anything, right...? No, it's just a note from a fellow student. But still, my heart is pounding.*"
            },
            "es": {
                "name": "Yo",
                "text": "*No es peligroso ni nada, ¿verdad...? No, es solo una nota de otra estudiante. Pero aun así, el corazón me late fuerte.*"
            },
            "ja": {
                "name": "僕",
                "text": "*危ないとかじゃないよね…？ いや、ただの生徒からのメモだ。でも、やっぱりドキドキする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Ce n'est pas dangereux ni rien, hein ...? Non, c'est juste un mot d'une camarade. Mais quand même, mon cœur bat la chamade.*"
            }
        }
    },
    "day2_last_class_before_lunch_4": {
        "next": "day2_class_end_bell",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*시계를 슬쩍 본다. 11시 40분... 점심시간까지 20분 남았다. 아, 시간아 좀 빨리 가라.*"
            },
            "en": {
                "name": "Me",
                "text": "*I sneak a glance at the clock. 11:40... twenty minutes until lunch. Come on, time, move faster.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Echo un vistazo al reloj disimuladamente. 11:40... veinte minutos para el almuerzo. Vamos, tiempo, muévete más rápido.*"
            },
            "ja": {
                "name": "僕",
                "text": "*こっそり時計を見る。11時40分…お昼まであと20分。早くしてくれ、時間。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je jette un coup d'œil discret à l'horloge. 11h40... vingt minutes avant le déjeuner. Allez, le temps, avance plus vite.*"
            }
        }
    },
    "day2_class_end_bell": {
        "next": "day2_class_end",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "- 딩동댕동 -"
            },
            "en": {
                "name": "System",
                "text": "- The bell rings -"
            },
            "es": {
                "name": "Sistema",
                "text": "- Suena la campana -"
            },
            "ja": {
                "name": "システム",
                "text": "- チャイムが鳴る -"
            },
            "fr": {
                "name": "Système",
                "text": "- La cloche sonne -"
            }
        }
    },
    "day2_class_end": {
        "next": "day2_packing_up",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*드디어 점심 종이 울린다! 교실이 순식간에 소란스러워진다. 아이들이 급식실로 우르르 몰려나간다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The lunch bell finally rings! The classroom instantly erupts into commotion. Students rush out toward the cafeteria.*"
            },
            "es": {
                "name": "Yo",
                "text": "*¡Por fin suena la campana del almuerzo! El salón estalla en alboroto al instante. Los estudiantes salen corriendo hacia la cafetería.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ついにお昼のチャイムが鳴った！教室が一気に騒がしくなる。生徒たちが食堂に向かって駆け出していく。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La cloche du déjeuner sonne enfin ! La classe éclate instantanément en agitation. Les élèves se précipitent vers la cantine.*"
            }
        }
    },
    "day2_packing_up": {
        "next": "day2_lunch_decision",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나도 서둘러 교과서를 가방에 넣는다. 주머니 속 쪽지를 한 번 더 확인한다. '도서관 별관'... 좋아, 가보자.*"
            },
            "en": {
                "name": "Me",
                "text": "*I hurriedly pack my textbooks into my bag. I check the note in my pocket one more time. 'The courtyard behind the library annex'... Alright, let's go.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Guardo los libros apresuradamente en la mochila. Reviso la nota en mi bolsillo una vez más. 'El patio trasero del anexo de la biblioteca'... Bien, vamos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*急いで教科書をカバンにしまう。ポケットのメモをもう一度確認する。「図書館別館の裏庭」…よし、行こう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je range précipitamment mes manuels dans mon sac. Je vérifie le mot dans ma poche une dernière fois. « La cour derrière l'annexe de la bibliothèque »... Bon, allons-y.*"
            }
        }
    },
    "day2_lunch_decision": {
        "next": "day2_lunch_time",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*점심시간이다. 누구와 함께할까...*"
            },
            "en": {
                "name": "Me",
                "text": "*It's lunch time. Who should I spend it with...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Es hora del almuerzo. ¿Con quién debería pasarlo...?*"
            },
            "ja": {
                "name": "僕",
                "text": "*お昼の時間だ。誰と過ごそうかな…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*C'est l'heure du déjeuner. Avec qui vais-je le passer ...*"
            }
        }
    }
});
