/**
 * ============================================================================
 * CUPID - day2_2_lunch (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day2_2_lunch.js + en_day2_2_lunch.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[2]) SCENARIO[2] = {};

Object.assign(SCENARIO[2], {
    "day2_lunch_time": {
        "bgm": "daily.mp3",
        "character": null,
        "choices": [
            {
                "next": "day2_lunch_seoyeon"
            },
            {
                "next": "day2_lunch_yuna",
                "condition": "met_yuna"
            },
            {
                "next": "day2_lunch_yuna",
                "excludeCondition": "met_yuna"
            },
            {
                "next": "day2_lunch_dain",
                "condition": "met_dain"
            },
            {
                "next": "day2_lunch_dain",
                "excludeCondition": "met_dain"
            },
            {
                "next": "day2_lunch_nurse"
            },
            {
                "next": "day2_lunch_teacher"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*딩동댕동! 드디어 기다리던 점심시간이다. 교실 안은 활기로 가득 차고, 내 심장도 조금씩 빠르게 뛰기 시작한다.*",
                "choices": [
                    "화사한 미소가 생각나는 서연이에게 간다.",
                    "유나와의 약속, 도서관 별관 뒤뜰로 향한다.",
                    "비밀스러운 쪽지를 남긴 유나를 확인하러 간다.",
                    "활기가 넘치는 체육관, 다인을 확인하러 간다.",
                    "시끌벅적한 체육관 쪽으로 발길을 옮긴다.",
                    "조금 휴식이 필요한 것 같아 보건실로 간다.",
                    "다정한 담임선생님이 계신 교무실로 향한다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The bell rings! Finally, lunch break. The classroom is buzzing with energy, and my heart starts to race.*",
                "choices": [
                    "Go to see Seoyeon and her radiant smile.",
                    "Head to the library annex backyard as promised.",
                    "Find out who left that mysterious note.",
                    "Go to the gym to see Dain.",
                    "Follow the lively sounds from the gymnasium.",
                    "I need some rest. Heading to the nurse's office.",
                    "Go to the faculty room to see the teacher."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¡Suena la campana! Por fin, la hora del almuerzo. El salón está lleno de energía, y mi corazón empieza a latir más rápido.*",
                "choices": [
                    "Ir a ver a Seoyeon y su radiante sonrisa.",
                    "Ir al patio trasero del anexo de la biblioteca como prometí.",
                    "Averiguar quién dejó esa nota misteriosa.",
                    "Ir al gimnasio a ver a Dain.",
                    "Seguir los sonidos animados del gimnasio.",
                    "Necesito descansar. Voy a la enfermería.",
                    "Ir a la sala de profesores a ver a la profesora."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*チャイムが鳴った！やっと昼休みだ。教室は活気に満ちていて、僕の心臓も少しずつ速く鳴り始める。*",
                "choices": [
                    "明るい笑顔が浮かぶソヨンのところへ行く。",
                    "約束通り、図書館別館の裏庭へ向かう。",
                    "あの謎のメモを残した人物を確かめに行く。",
                    "体育館にダインに会いに行く。",
                    "体育館の方から聞こえる賑やかな音に向かう。",
                    "少し休憩が必要だ。保健室へ行く。",
                    "優しい担任先生がいる職員室へ向かう。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*La cloche sonne ! Enfin, la pause déjeuner. La salle de classe déborde d'énergie, et mon cœur commence à s'emballer.*",
                "choices": [
                    "Aller voir Seoyeon et son sourire radieux.",
                    "Se rendre dans la cour arrière de l'annexe de la bibliothèque comme promis.",
                    "Découvrir qui a laissé ce mystérieux mot.",
                    "Aller au gymnase pour voir Dain.",
                    "Suivre les sons animés venant du gymnase.",
                    "J'ai besoin de repos. Direction l'infirmerie.",
                    "Aller à la salle des professeurs voir le professeur."
                ]
            }
        }
    },
    "day2_lunch_teacher": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day2_lunch_teacher_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교무실 문을 열자, 산더미 같은 서류 더미 사이에서 지친 기색으로 도시락을 꺼내시던 선생님과 눈이 마주쳤다. 나를 발견하자마자 피곤함이 싹 가신 듯 환하게 웃으시는 모습에, 왠지 모르게 가슴 한구석이 찌릿해졌다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I open the faculty room door. My teacher, who was about to eat, smiles warmly when she sees me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Abro la puerta de la sala de profesores. Mi profesora, que estaba a punto de comer, sonríe cálidamente al verme.*"
            },
            "ja": {
                "name": "僕",
                "text": "*職員室のドアを開ける。お弁当を食べようとしていた先生が、僕を見て温かく微笑む。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ouvre la porte de la salle des professeurs. Mon professeur, qui s'apprêtait à manger, sourit chaleureusement en me voyant.*"
            }
        }
    },
    "day2_lunch_teacher_2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_lunch_teacher_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"어머, {name}! 점심은 맛있게 먹었니? 선생님은 이제 막 먹으려던 참이야.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Oh, {name}! Did you have a good lunch? I was just about to start mine.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"¡Ah, {name}! ¿Almorzaste bien? Yo estaba por empezar el mío.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"あら、{name}！お昼はちゃんと食べた？ 私はちょうどこれからなの。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"Oh, {name} ! Tu as bien déjeuné ? J'allais justement commencer le mien.\""
            }
        }
    },
    "day2_lunch_teacher_3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "choices": [
            {
                "next": "day2_lunch_teacher_eat",
                "stats": {
                    "Teacher": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "day2_lunch_teacher_food",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_lunch_teacher_pass",
                "stats": {
                    "Teacher": {
                        "affinity": 3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"혹시 선생님이랑 같이 점심 먹고 싶어서 온 거니? 후훗, 농담이야.\"",
                "choices": [
                    "네, 선생님이랑 같이 먹으려고 왔어요. 옆에 앉아도 될까요?",
                    "선생님 도시락이 멀리서 봐도 너무 맛있어 보여서요.",
                    "아니요, 그냥 지나가다가 선생님 생각나서 들렀어요."
                ]
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Did you come all this way just to eat with me? Hehe, just kidding.\"",
                "choices": [
                    "Actually, yes. Can I sit next to you?",
                    "Your lunch looks so good, I couldn't resist.",
                    "I was just passing by and thought of you."
                ]
            },
            "es": {
                "name": "Profesora",
                "text": "\"¿Viniste hasta aquí solo para comer conmigo? Jeje, es broma.\"",
                "choices": [
                    "La verdad sí. ¿Puedo sentarme a tu lado?",
                    "Tu almuerzo se ve tan rico que no pude resistirme.",
                    "Solo pasaba por aquí y pensé en ti."
                ]
            },
            "ja": {
                "name": "担任先生",
                "text": "\"わざわざ私と一緒にご飯食べに来たの？ ふふ、冗談よ。\"",
                "choices": [
                    "実は、はい。隣に座ってもいいですか？",
                    "先生のお弁当が美味しそうで、つい。",
                    "たまたま通りかかって、先生のことを思い出して。"
                ]
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"Tu es venu jusqu'ici juste pour manger avec moi ? Héhé, je plaisante.\"",
                "choices": [
                    "En fait, oui. Je peux m'asseoir à côté de vous ?",
                    "Votre déjeuner a l'air tellement bon, je n'ai pas pu résister.",
                    "Je passais par là et j'ai pensé à vous."
                ]
            }
        }
    },
    "day2_lunch_teacher_eat": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day2_lunch_teacher_end",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"어머나... 정말 대담한 학생이네? 좋아, 선생님 도시락 반찬 좀 나눠줄게. 자, 아~ 해보렴.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"My, my... you're a bold student, aren't you? Fine, I'll share some. Here, say 'Ahh'.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Vaya, vaya... eres un estudiante atrevido, ¿no? Está bien, te compartiré un poco. A ver, di 'Aah'.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"あらあら…大胆な生徒ね。しょうがないわ、少し分けてあげる。はい、あーん。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"Oh là là... tu es un élève audacieux, n'est-ce pas ? Bon, je vais partager un peu. Allez, dis 'Aah'.\""
            }
        }
    },
    "day2_lunch_teacher_food": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day2_lunch_teacher_end",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"후훗, 우리 어머니가 솜씨가 좀 좋으시거든. 나중에 기회 되면 {name}한테도 맛 보여주고 싶네.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Hehe, my mother is quite the cook. I'd love to let you taste her cooking properly sometime.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Jeje, mi mamá es muy buena cocinera. Me encantaría dejarte probar su comida como se debe algún día.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"ふふ、お母さんは料理上手なの。いつかちゃんとお母さんの手料理を食べさせてあげたいわね。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"Héhé, ma mère est une excellente cuisinière. J'aimerais te faire goûter sa cuisine correctement un jour.\""
            }
        }
    },
    "day2_lunch_teacher_pass": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_lunch_teacher_end",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"그래? 그래도 이렇게 들러주니 고맙네. 남은 점심시간 즐겁게 보내렴!\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Is that so? Well, thank you for stopping by. Have a great lunch break!\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"¿Es así? Bueno, gracias por pasar. ¡Que disfrutes la hora del almuerzo!\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"そう？ まあ、寄ってくれてありがとう。楽しいお昼休みを過ごしてね！\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"Ah bon ? Eh bien, merci d'être passé. Profite bien de ta pause déjeuner !\""
            }
        }
    },
    "day2_lunch_teacher_end": {
        "background": "assets/images/background/teacher_office.png",
        "character": null,
        "next": "day2_afternoon_class",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님과 짧지만 즐거운 대화를 나누고 교실로 돌아왔다. 어른의 여유로움 속에 숨겨진, 나에게만 보여주는 듯한 무방비한 미소가 자꾸만 머릿속을 맴돈다.*"
            },
            "en": {
                "name": "Me",
                "text": "*After a brief but sweet chat, I head back. Her gentle smile stays with me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Después de una breve pero dulce charla, regreso. Su gentil sonrisa se queda conmigo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*短いけど甘いひとときの後、戻る。先生の優しい笑顔が心に残っている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Après une discussion brève mais agréable, je retourne en classe. Son doux sourire reste gravé dans ma mémoire.*"
            }
        }
    },
    "day2_lunch_seoyeon": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day2_seoyeon_lunch_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*학생회실 문을 열자, 혼자서 조용히 한숨을 돌리며 도시락을 꺼내던 서연이가 나를 발견하고는 눈을 동그랗게 뜬다. 완벽한 학생회장의 모습 뒤에 숨겨진, 나만 아는 무방비한 표정에 순간 심장이 덜컹 내려앉았다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*I open the student council room. Seoyeon, eating her lunch, blinks in surprise and then beams.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Abro la puerta del consejo estudiantil. Seoyeon, comiendo su almuerzo, parpadea sorprendida y luego sonríe radiante.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*生徒会室のドアを開ける。お弁当を食べていたソヨンが、驚いたように瞬きした後、ぱっと笑顔になる。*"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*J'ouvre la salle du conseil des élèves. Seoyeon, en train de déjeuner, cligne des yeux de surprise puis rayonne de joie.*"
            }
        }
    },
    "day2_seoyeon_lunch_talk": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "choices": [
            {
                "next": "day2_seoyeon_lunch_praise",
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day2_seoyeon_lunch_worry",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_seoyeon_lunch_touch",
                "stats": {
                    "Seoyeon": {
                        "affinity": 10
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"{name}! 마침 오길 기다리고 있었어. 우리 여기 앉아. 오늘 샌드위치를 좀 넉넉하게 만들었거든.\"",
                "choices": [
                    "와, 정말 맛있어 보여! 서연이는 요리 천재구나.",
                    "학생회 일 때문에 피곤하진 않아? 너무 무리하지 않았으면 좋겠어.",
                    "입가에 빵가루 묻었어. 자, 가만히 있어 봐."
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"{name}! I was just hoping you'd come. Sit here. I made some extra sandwiches today.\"",
                "choices": [
                    "They look amazing! You're a natural, Seoyeon.",
                    "Aren't you tired from all the work? Don't overdo it.",
                    "You've got a crumb... hold still. *Wipe it off*"
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡{name}! Justo estaba esperando que vinieras. Siéntate aquí. Hoy hice sándwiches de más.\"",
                "choices": [
                    "¡Se ven increíbles! Eres una natural, Seoyeon.",
                    "¿No estás cansada de tanto trabajo? No te exijas demasiado.",
                    "Tienes una miga... quédate quieta. *Se la quito*"
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あ、{name}！来てくれないかなって思ってたんだ。ここ座って。今日はサンドイッチ多めに作ってきたの。\"",
                "choices": [
                    "すごく美味しそう！ソヨン、料理上手だね。",
                    "疲れてない？無理しすぎないでよ。",
                    "パンくずついてるよ…じっとして。*拭いてあげる*"
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"{name} ! J'espérais justement que tu viendrais. Assieds-toi ici. J'ai préparé des sandwichs en plus aujourd'hui.\"",
                "choices": [
                    "Ils ont l'air incroyables ! Tu es un vrai cordon-bleu, Seoyeon.",
                    "Tu n'es pas fatiguée par tout ce travail ? Ne te surmène pas.",
                    "Tu as une miette... ne bouge pas. *L'essuyer*"
                ]
            }
        }
    },
    "day2_seoyeon_lunch_praise": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "setFlag": "day2_ate_lunch_seoyeon",
        "next": "day2_seoyeon_lunch_dain_event",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"정말? 입맛에 맞을지 걱정했는데 다행이다. 자, 사양 말고 많이 먹어!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Really? I was worried they might not be to your taste. Eat up!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¿En serio? Me preocupaba que no fueran de tu gusto. ¡Come!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"本当？ 口に合うか心配だったんだ。たくさん食べてね！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Vraiment ? J'avais peur que ce ne soit pas à ton goût. Mange bien !\""
            }
        }
    },
    "day2_seoyeon_lunch_worry": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlag": "day2_ate_lunch_seoyeon",
        "next": "day2_seoyeon_lunch_dain_event",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"괜찮아. 네가 맛있게 먹어주는 모습 보니까 피곤함이 싹 가시는 것 같아. 정말로.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"I'm okay. Seeing you enjoy the food makes all the fatigue disappear. Truly.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Estoy bien. Verte disfrutar la comida hace que toda la fatiga desaparezca. De verdad.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"大丈夫だよ。{name}が美味しそうに食べてくれるのを見ると、疲れなんて吹き飛ぶの。本当に。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Ça va. Te voir apprécier la nourriture fait disparaître toute ma fatigue. Vraiment.\""
            }
        }
    },
    "day2_seoyeon_lunch_touch": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "setFlag": "day2_ate_lunch_seoyeon",
        "next": "day2_seoyeon_lunch_dain_event",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"아... 고, 고마워. 내가 너무 급하게 먹었나 보네... *서연이의 얼굴이 살짝 붉어진다.*\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Ah... T-thank you. I must have been eating too greedily... (She blushes slightly)\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Ah... G-gracias. Debo haber estado comiendo muy rápido... (Se sonroja un poco)\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あ…あ、ありがとう。がっついて食べてたかも…（少し顔を赤くする）\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Ah... M-merci. J'ai dû manger trop vite... (Elle rougit légèrement)\""
            }
        }
    },
    "day2_seoyeon_lunch_dain_event": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            {
                "next": "day2_seoyeon_lunch_dain_known",
                "condition": "met_dain"
            },
            {
                "next": "day2_seoyeon_lunch_dain_unknown"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그때, 학생회실 창문 너머로 누군가 지나가며 손을 흔든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Just then, someone passing by the student council room window waves at us.*"
            },
            "es": {
                "name": "Yo",
                "text": "*En ese momento, alguien que pasa por la ventana del consejo estudiantil nos saluda con la mano.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ちょうどその時、生徒会室の窓の外を通りかかった誰かが手を振ってくる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*À ce moment-là, quelqu'un passant devant la fenêtre de la salle du conseil nous fait signe.*"
            }
        }
    },
    "day2_seoyeon_lunch_dain_known": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_seoyeon_lunch_dain_react",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"어? {name}이다! 야호~! 나중에 보자!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh? {name}! Hey! See you later!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¿Oh? ¡{name}! ¡Hola! ¡Nos vemos luego!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"あれ？ {name}！やっほー！また後でね！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Oh ? {name} ! Salut ! À plus tard !\""
            }
        }
    },
    "day2_seoyeon_lunch_dain_unknown": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_seoyeon_lunch_dain_react",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "\"어? 저 애 누구지? 학생회실에 웬 남학생이... 아무튼 안녕~!\""
            },
            "en": {
                "name": "???",
                "text": "\"Huh? Who's that? A boy in the student council room... Anyway, hi!\""
            },
            "es": {
                "name": "???",
                "text": "\"¿Eh? ¿Quién es ese? Un chico en el consejo estudiantil... En fin, ¡hola!\""
            },
            "ja": {
                "name": "???",
                "text": "\"ん？ 誰だろ？ 生徒会室に男子が…まあいいや、やっほー！\""
            },
            "fr": {
                "name": "???",
                "text": "\"Hein ? C'est qui ? Un garçon dans la salle du conseil... Bref, salut !\""
            }
        }
    },
    "day2_seoyeon_lunch_dain_react": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day2_seoyeon_lunch_dain_ask",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*문득 서연이를 돌아보니, 아까와는 다른 묘한 표정을 짓고 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*When I look at Seoyeon, she has a subtle expression different from before.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cuando miro a Seoyeon, tiene una expresión sutil, diferente a la de antes.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンを見ると、さっきとは微妙に違う表情をしている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Quand je regarde Seoyeon, elle a une expression subtile, différente de tout à l'heure.*"
            }
        }
    },
    "day2_seoyeon_lunch_dain_ask": {
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            {
                "next": "day2_seoyeon_lunch_dain_yes",
                "condition": "met_dain"
            },
            {
                "next": "day2_seoyeon_lunch_dain_no"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...저 애, 배구부 정다인이야. {name}, 혹시 친해?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...That's Dain from the volleyball club. {name}, are you close with her?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Esa es Dain del club de voleibol. {name}, ¿son cercanos?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…あれ、バレー部のダインだよ。{name}、あの子と仲いいの？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...C'est Dain du club de volley. {name}, tu es proche d'elle ?\""
            }
        }
    },
    "day2_seoyeon_lunch_dain_yes": {
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "day2_seoyeon_lunch_dain_honest",
                "stats": {
                    "Seoyeon": {
                        "affinity": -3
                    },
                    "Dain": {
                        "affinity": 2
                    }
                }
            },
            {
                "next": "day2_seoyeon_lunch_dain_deny",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    },
                    "Dain": {
                        "affinity": -2
                    }
                }
            },
            {
                "next": "day2_seoyeon_lunch_dain_tease",
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
                "text": "*서연이의 질문에 어떻게 대답할까 고민된다.*",
                "choices": [
                    "응, 어제 만났어. 밝고 재밌는 애더라.",
                    "그냥 아는 사이야. 서연이가 더 중요해.",
                    "왜? 혹시 질투하는 거야?"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*I wonder how to answer Seoyeon's question.*",
                "choices": [
                    "Yeah, we met yesterday. She's bright and fun.",
                    "Just acquaintances. You're more important to me, Seoyeon.",
                    "Why? Are you jealous?"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Me pregunto cómo responder a la pregunta de Seoyeon.*",
                "choices": [
                    "Sí, nos conocimos ayer. Es alegre y divertida.",
                    "Solo conocidos. Tú eres más importante para mí, Seoyeon.",
                    "¿Por qué? ¿Estás celosa?"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンの質問にどう答えようかな。*",
                "choices": [
                    "うん、昨日会ったんだ。明るくて楽しい子だよ。",
                    "知り合い程度だよ。僕にはソヨンの方が大事。",
                    "なに？もしかして嫉妬？"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Je me demande comment répondre à la question de Seoyeon.*",
                "choices": [
                    "Oui, on s'est rencontrés hier. Elle est joyeuse et amusante.",
                    "Juste des connaissances. Tu es plus importante pour moi, Seoyeon.",
                    "Pourquoi ? Tu es jalouse ?"
                ]
            }
        }
    },
    "day2_seoyeon_lunch_dain_no": {
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlag": "knows_name_dain",
        "next": "day2_seoyeon_lunch_dain_no_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"(정다인... 기억해두자.) 아니, 처음 보는 애야. 왜?\""
            },
            "en": {
                "name": "Me",
                "text": "\"(Dain Jung... I'll remember that.) No, first time seeing her. Why?\""
            },
            "es": {
                "name": "Yo",
                "text": "\"(Dain Jung... Lo recordaré.) No, es la primera vez que la veo. ¿Por qué?\""
            },
            "ja": {
                "name": "僕",
                "text": "\"（ダインちゃんか…覚えておこう。）いや、初めて見た。なんで？\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"(Dain Jung... Je vais m'en souvenir.) Non, c'est la première fois que je la vois. Pourquoi ?\""
            }
        }
    },
    "day2_seoyeon_lunch_dain_no_react": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day2_seoyeon_lunch_end",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"아, 아니야. 그냥 물어본 거야. (서연이가 안도하는 듯 미소 짓는다) ...그럼, 우리 밥 계속 먹자!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh, nothing. Just curious. (Seoyeon smiles with relief) ...Let's keep eating!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Ah, nada. Solo curiosidad. (Seoyeon sonríe aliviada) ...¡Sigamos comiendo!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あ、ううん。ちょっと気になっただけ。（ソヨンがほっとしたように微笑む）…食べ続けよう！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Oh, rien. Juste curieuse. (Seoyeon sourit avec soulagement) ...Continuons à manger !\""
            }
        }
    },
    "day2_seoyeon_lunch_dain_honest": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day2_seoyeon_lunch_end",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"...그렇구나. (서연이가 잠시 창밖을 바라보다가 미소를 짓는다) 좋은 친구가 많으면 좋지. 나도... 더 노력해야겠네.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...I see. (Seoyeon looks out the window for a moment, then smiles) It's good to have many friends. I should... try harder too.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Ya veo. (Seoyeon mira por la ventana un momento, luego sonríe) Es bueno tener muchos amigos. Yo también debería... esforzarme más.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…そうなんだ。（ソヨンが一瞬窓の外を見て、それから微笑む）友達が多いのはいいことだよね。私も…もっと頑張らなきゃ。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Je vois. (Seoyeon regarde par la fenêtre un instant, puis sourit) C'est bien d'avoir beaucoup d'amis. Je devrais... faire plus d'efforts aussi.\""
            }
        }
    },
    "day2_seoyeon_lunch_dain_deny": {
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "day2_seoyeon_lunch_end",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이의 표정이 살짝 밝아진다.* \"...그래? 후훗, 그런 말 들으니까 기분이 좋네. 고마워, {name}.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"(Seoyeon's expression brightens slightly) ...Really? Hehe, hearing that makes me happy. Thanks, {name}.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"(La expresión de Seoyeon se ilumina un poco) ...¿De verdad? Jeje, oír eso me hace feliz. Gracias, {name}.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"（ソヨンの表情がぱっと明るくなる）…本当？ えへへ、そう言ってもらえると嬉しいな。ありがとう、{name}。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"(L'expression de Seoyeon s'illumine) ...Vraiment ? Héhé, ça me fait plaisir d'entendre ça. Merci, {name}.\""
            }
        }
    },
    "day2_seoyeon_lunch_dain_tease": {
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "day2_seoyeon_lunch_end",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"질투라니, 그런 거 아니야. 그냥... 네가 벌써 다른 애들이랑 친해진 것 같아서 조금 낯설었을 뿐이야. *서연은 시선을 창밖으로 돌리며, 애써 덤덤한 척 샌드위치 포장지를 만지작거렸다.*\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"J-jealous?! No way! I was just... curious! (Seoyeon turns her head away, blushing)\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¿¡C-celosa!? ¡Para nada! Solo tenía... ¡curiosidad! (Seoyeon voltea la cabeza, sonrojándose)\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"や、嫉妬!? そんなわけないでしょ！ただ…気になっただけ！（ソヨンが顔を赤くして横を向く）\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"J-jalouse ?! Pas du tout ! J'étais juste... curieuse ! (Seoyeon détourne la tête en rougissant)\""
            }
        }
    },
    "day2_seoyeon_lunch_end": {
        "character": null,
        "next": "day2_afternoon_class",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와 즐거운 점심시간을 보내고 교실로 돌아왔다. 그녀가 직접 만든 샌드위치의 여운이 입안에 기분 좋게 남아있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*After a lovely lunch with her, I return. The taste of her sandwiches is still lingering sweet.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Después de un encantador almuerzo con ella, regreso. El sabor de sus sándwiches sigue siendo dulce en mi boca.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンとの素敵なお昼の後、教室に戻る。彼女のサンドイッチの味がまだ甘く残っている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Après un charmant déjeuner avec elle, je retourne en classe. Le goût de ses sandwichs reste encore agréablement en bouche.*"
            }
        }
    },
    "day2_lunch_yuna": {
        "background": "assets/images/background/library_old.png",
        "bgm": "mystery.mp3",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day2_yuna_talk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*도서관 안. 먼지가 떠다니는 고요한 공간에, 유나가 마치 한 폭의 그림처럼 서 있다. 창문으로 스며든 햇살이 그녀의 머리칼을 비출 때, 왠지 모르게 숨을 죽이게 되었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Inside the old library. In the quiet, dust-filled space, Yuna stands like part of the scenery.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dentro de la vieja biblioteca. En el espacio silencioso y lleno de polvo, Yuna está de pie como parte del paisaje.*"
            },
            "ja": {
                "name": "僕",
                "text": "*古い図書館の中。静かで埃っぽい空間に、ユナが風景の一部のように立っている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dans la vieille bibliothèque. Dans cet espace calme et poussiéreux, Yuna se tient là comme faisant partie du décor.*"
            }
        }
    },
    "day2_yuna_talk": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day2_yuna_talk_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...왔구나. 쪽지 보고 진짜 올 줄은 몰랐는데.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...You came. I didn't think you'd actually show up for a note.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Viniste. No pensé que realmente vendrías por una nota.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…来たんだ。メモくらいで本当に来るとは思わなかった。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Tu es venu. Je ne pensais pas que tu viendrais vraiment pour un simple mot.\""
            }
        }
    },
    "day2_yuna_talk_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day2_yuna_free_talk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나가 무표정한 얼굴로 나를 빤히 바라본다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*She gazes at me with an unreadable expression.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Me mira con una expresión indescifrable.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*読めない表情で僕を見つめる。*"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Elle me fixe avec une expression indéchiffrable.*"
            }
        }
    },
    "day2_yuna_free_talk": {
        "type": "free_talk",
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "affinityChar": "Yuna",
        "affinityBranches": [
            {
                "minAffinity": 20,
                "next": "day2_yuna_talk_branch_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_yuna_talk_branch"
            },
            {
                "minAffinity": -100,
                "next": "day2_yuna_talk_branch_low"
            }
        ],
        "next": "day2_yuna_talk_branch",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...나한테 궁금한 거라도 있어? 아니면 이 학교에 대해 더 알고 싶은 거야?\"",
                "context": "조용한 도서관 별관, 신비로운 분위기의 유나와 단둘이 대화를 나누는 상황입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 유나가 학교의 비밀에 대해 이야기하며 주인공에게만 보여주고 싶은 것이 있다고 제안하는 상황으로 이어집니다. 대화의 마지막 턴에만 비밀스러운 분위기를 조성하며 주인공의 호기심을 자극해 주세요.",
                "personality": "신비롭고 차가우며 비밀이 많은 소녀. 주인공에게 묘한 흥미를 느끼고 있음."
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Do you have questions for me? Or do you want to know more about this school?\"",
                "context": "Quiet library annex backyard, private conversation with the mysterious Yuna. Keep the conversation going actively until it's finished. After the conversation, Yuna will talk about the school's secrets and suggest that there is something she only wants to show the protagonist. ONLY at the final turn of the conversation, please create a mysterious atmosphere and stimulate the protagonist's curiosity.",
                "personality": "Mysterious, cold, and secretive. She feels a strange interest in the protagonist."
            },
            "es": {
                "name": "Yuna",
                "text": "\"...¿Tienes preguntas para mí? ¿O quieres saber más sobre esta escuela?\"",
                "context": "Patio trasero silencioso del anexo de la biblioteca, conversación privada con la misteriosa Yuna. Mantén la conversación activa hasta que termine. Después de la conversación, Yuna hablará sobre los secretos de la escuela y sugerirá que hay algo que solo quiere mostrar al protagonista. SOLO en el último turno, crea una atmósfera misteriosa y estimula la curiosidad del protagonista.",
                "personality": "Misteriosa, fría y reservada. Siente un extraño interés por el protagonista."
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…私に聞きたいことがある？それとも、この学校のことをもっと知りたい？\"",
                "context": "静かな図書館別館の裏庭、謎めいたユナとの二人きりの会話。会話が終わるまで積極的に続けてください。会話の後、ユナは学校の秘密について語り、主人公にだけ見せたいものがあると示唆します。会話の最後のターンでのみ、ミステリアスな雰囲気を作り、主人公の好奇心を刺激してください。",
                "personality": "ミステリアスで冷たく、秘密主義。主人公に不思議な興味を抱いている。"
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Tu as des questions pour moi ? Ou tu veux en savoir plus sur cette école ?\"",
                "context": "Cour arrière silencieuse de l'annexe de la bibliothèque, conversation privée avec la mystérieuse Yuna. Continuez activement la conversation jusqu'à ce qu'elle soit terminée. Après la conversation, Yuna parlera des secrets de l'école et suggérera qu'il y a quelque chose qu'elle veut montrer uniquement au protagoniste. UNIQUEMENT au dernier tour, créez une atmosphère mystérieuse et stimulez la curiosité du protagoniste.",
                "personality": "Mystérieuse, froide et secrète. Elle ressent un étrange intérêt pour le protagoniste."
            }
        }
    },
    "day2_yuna_talk_branch_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "branches": [
            {
                "next": "day2_yuna_talk_2_met_high",
                "condition": "met_yuna"
            },
            {
                "next": "day2_yuna_talk_2_new_high"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 평소보다 조금은 부드러워진 표정으로 나를 바라본다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna's expression softens as she looks at me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La expresión de Yuna se suaviza mientras me mira.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナの表情が僕を見ながら少し柔らかくなる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*L'expression de Yuna s'adoucit en me regardant.*"
            }
        }
    },
    "day2_yuna_talk_branch_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "branches": [
            {
                "next": "day2_yuna_talk_2_met_low",
                "condition": "met_yuna"
            },
            {
                "next": "day2_yuna_talk_2_new_low"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 차갑고 실망스러운 눈빛으로 나를 바라본다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna gazes at me with cold, disappointed eyes.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna me mira con ojos fríos y decepcionados.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナが冷たく、失望した目で僕を見つめる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna me fixe avec des yeux froids et déçus.*"
            }
        }
    },
    "day2_yuna_talk_2_met_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "choices": [
            {
                "next": "day2_yuna_secret_high",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_yuna_normal_high",
                "stats": {
                    "Yuna": {
                        "affinity": 4
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나는 나와 대화하며 마음이 편안해졌다고 말했다. 그리고 어제 말했던 학교의 비밀에 대해, 나에게만 보여주고 싶은 것이 있다며 제안해 왔다.*",
                "choices": [
                    "그게 뭔데? 나도 궁금해.",
                    "비밀 같은 건 관심 없어. 그냥 너랑 이야기하고 싶어서 온 거야."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Yuna says she feels at ease talking to me. She mentions the 'secret' and says there's something she only wants to show me.*",
                "choices": [
                    "What is it? I'm curious.",
                    "I'm more interested in talking to you."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna dice que se siente tranquila hablando conmigo. Menciona el 'secreto' y dice que hay algo que solo quiere mostrarme.*",
                "choices": [
                    "¿Qué es? Tengo curiosidad.",
                    "Me interesa más hablar contigo."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ユナは僕と話していると落ち着くと言う。「秘密」に触れて、僕にだけ見せたいものがあると言う。*",
                "choices": [
                    "何？気になる。",
                    "それより、君と話してる方がいい。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna dit qu'elle se sent à l'aise en parlant avec moi. Elle mentionne le 'secret' et dit qu'il y a quelque chose qu'elle veut me montrer à moi seul.*",
                "choices": [
                    "Qu'est-ce que c'est ? Je suis curieux.",
                    "Parler avec toi m'intéresse davantage."
                ]
            }
        }
    },
    "day2_yuna_talk_2_met_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day2_yuna_secret_low",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_yuna_normal_low",
                "stats": {
                    "Yuna": {
                        "affinity": 4
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 눈빛이 더욱 차가워졌다. 내 무례한 태도 때문에 진실을 감당할 수 없을 거라며 독설을 내뱉었지만, 어제 약속했으니 일단 따라오라고 했다.*",
                "choices": [
                    "그게 뭔데? 나도 궁금해.",
                    "비밀 같은 건 관심 없어. 그냥 너랑 이야기하고 싶어서 온 거야."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Yuna's gaze is icy. She says I might not handle the truth, but tells me to follow her anyway since we promised.*",
                "choices": [
                    "Show me. I can handle it.",
                    "I'm not interested in secrets. I'll pass."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La mirada de Yuna es gélida. Dice que tal vez no pueda manejar la verdad, pero me dice que la siga de todos modos ya que prometimos.*",
                "choices": [
                    "Muéstrame. Puedo manejarlo.",
                    "No me interesan los secretos. Paso."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ユナの視線は氷のように冷たい。真実に耐えられないかもしれないと言うけど、約束したから付いてこいと言う。*",
                "choices": [
                    "見せて。僕なら大丈夫だよ。",
                    "秘密には興味ない。やめとく。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Le regard de Yuna est glacial. Elle dit que je pourrais ne pas supporter la vérité, mais me dit de la suivre puisqu'on a promis.*",
                "choices": [
                    "Montre-moi. Je peux le supporter.",
                    "Les secrets ne m'intéressent pas. Je passe."
                ]
            }
        }
    },
    "day2_yuna_talk_2_new_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "setFlag": "met_yuna",
        "choices": [
            {
                "next": "day2_yuna_new_name_ask_high",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_yuna_new_name_ask_high",
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
                "text": "*유나는 나와 대화하며 기분이 묘하다고 말했다. 그리고 이 학교에는 아주 깊은 비밀이 있다며, 나에게만 보여주고 싶은 것이 있다고 제안했다.*",
                "choices": [
                    "네가 쪽지를 남긴 유나야? 비밀이 뭔데?",
                    "그냥 쪽지 보고 궁금해서 와봤어. 넌 누구야?"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Yuna says she feels a strange pull toward me. She mentions a deep secret in this school and wants to show me.*",
                "choices": [
                    "Are you the Yuna from the note? What secret?",
                    "I just came because of the note. Who are you?"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna dice que siente una extraña atracción hacia mí. Menciona un secreto profundo en esta escuela y quiere mostrármelo.*",
                "choices": [
                    "¿Eres la Yuna de la nota? ¿Qué secreto?",
                    "Solo vine por la nota. ¿Quién eres?"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ユナは僕に不思議な引力を感じると言う。この学校に深い秘密があって、見せたいと言う。*",
                "choices": [
                    "メモのユナ？秘密って何？",
                    "メモが気になって来ただけ。君は誰？"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna dit qu'elle ressent une étrange attirance envers moi. Elle mentionne un secret profond dans cette école et veut me le montrer.*",
                "choices": [
                    "Tu es la Yuna du mot ? Quel secret ?",
                    "Je suis juste venu à cause du mot. Qui es-tu ?"
                ]
            }
        }
    },
    "day2_yuna_talk_2_new_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "met_yuna",
        "choices": [
            {
                "next": "day2_yuna_new_name_ask_low",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_yuna_new_name_ask_low",
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
                "text": "*유나의 눈빛이 더욱 차가워졌다. 내 무례한 태도 때문에 진실을 감당할 수 없을 거라며 독설을 내뱉었지만, 여기까지 왔으니 일단 따라오라고 했다.*",
                "choices": [
                    "네가 쪽지를 남긴 유나야? 비밀이 뭔데?",
                    "그냥 쪽지 보고 궁금해서 와봤어. 넌 누구야?"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Yuna's eyes are cold. She says I don't look like I can handle the truth, but tells me to follow her since I'm here.*",
                "choices": [
                    "What's the secret? Show me.",
                    "I'm leaving. This feels weird."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Los ojos de Yuna son fríos. Dice que no parezco capaz de manejar la verdad, pero que la siga ya que estoy aquí.*",
                "choices": [
                    "¿Cuál es el secreto? Muéstrame.",
                    "Me voy. Esto se siente raro."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ユナの目は冷たい。真実に耐えられなさそうだと言うけど、来たんだから付いてこいと言う。*",
                "choices": [
                    "秘密って何？見せて。",
                    "帰る。なんか変だ。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Les yeux de Yuna sont froids. Elle dit que je n'ai pas l'air de pouvoir supporter la vérité, mais me dit de la suivre puisque je suis là.*",
                "choices": [
                    "C'est quoi le secret ? Montre-moi.",
                    "Je m'en vais. C'est bizarre."
                ]
            }
        }
    },
    "day2_yuna_talk_branch": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "branches": [
            {
                "next": "day2_yuna_talk_2_met_normal",
                "condition": "met_yuna"
            },
            {
                "next": "day2_yuna_talk_2_new_normal"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 나를 바라보며 입을 열기 시작한다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna looks at me and begins to speak.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna me mira y empieza a hablar.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナが僕を見て、話し始める。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna me regarde et commence à parler.*"
            }
        }
    },
    "day2_yuna_talk_2_met_normal": {
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day2_yuna_secret_normal",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_yuna_normal_normal",
                "stats": {
                    "Yuna": {
                        "affinity": 4
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나는 어제 말했던 학교의 비밀에 대해 언급하며, 나에게만 보여주고 싶은 것이 있다고 말했다.*",
                "choices": [
                    "그게 뭔데? 나도 궁금해.",
                    "비밀 같은 건 관심 없어. 그냥 너랑 이야기하고 싶어서 온 거야."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Yuna mentions the secret she told me yesterday and says she has something to show me.*",
                "choices": [
                    "What is it? I want to see.",
                    "I just wanted to talk to you."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna menciona el secreto que me contó ayer y dice que tiene algo que mostrarme.*",
                "choices": [
                    "¿Qué es? Quiero verlo.",
                    "Solo quería hablar contigo."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ユナが昨日話してくれた秘密に触れて、見せたいものがあると言う。*",
                "choices": [
                    "何？見たい。",
                    "ただ君と話したかっただけ。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna mentionne le secret dont elle m'a parlé hier et dit qu'elle a quelque chose à me montrer.*",
                "choices": [
                    "Qu'est-ce que c'est ? Je veux voir.",
                    "Je voulais juste te parler."
                ]
            }
        }
    },
    "day2_yuna_talk_2_new_normal": {
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "met_yuna",
        "choices": [
            {
                "next": "day2_yuna_new_name_ask_normal",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_yuna_new_name_ask_normal",
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
                "text": "*유나는 내가 그녀의 정체를 궁금해할 거라며, 이 학교의 깊은 비밀을 나에게만 보여주겠다고 제안했다.*",
                "choices": [
                    "네가 쪽지를 남긴 유나야? 비밀이 뭔데?",
                    "그냥 쪽지 보고 궁금해서 와봤어. 넌 누구야?"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Yuna says I must be curious about her. She offers to show me a deep secret of the school.*",
                "choices": [
                    "Are you the Yuna from the note? What secret?",
                    "I just came because of the note. Who are you?"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna dice que debo tener curiosidad sobre ella. Se ofrece a mostrarme un secreto profundo de la escuela.*",
                "choices": [
                    "¿Eres la Yuna de la nota? ¿Qué secreto?",
                    "Solo vine por la nota. ¿Quién eres?"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ユナは僕が彼女のことを気になっているはずだと言う。学校の深い秘密を見せてくれると言う。*",
                "choices": [
                    "メモのユナ？秘密って何？",
                    "メモが気になって来ただけ。君は誰？"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna dit que je dois être curieux à son sujet. Elle propose de me montrer un secret profond de l'école.*",
                "choices": [
                    "Tu es la Yuna du mot ? Quel secret ?",
                    "Je suis juste venu à cause du mot. Qui es-tu ?"
                ]
            }
        }
    },
    "day2_yuna_new_name_ask_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "day2_yuna_new_name_share_high",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*그녀가 조금 수줍은 듯 고개를 숙이며 묻는다.* \"...그러고 보니, 네 이름은 뭐야? 나도 모르게 비밀을 공유할 정도로 너한테 끌렸나 봐. 네 이름을 알고 싶어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*She bows her head shyly.* \"...By the way, what's your name? I felt drawn to you enough to share this secret. I want to know you.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Baja la cabeza tímidamente.* \"...Por cierto, ¿cómo te llamas? Sentí una conexión contigo suficiente como para compartir este secreto. Quiero conocerte.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*恥ずかしそうにうつむく。* \"…ところで、名前は？ この秘密を共有したいと思えるくらい惹かれたの。君のこと知りたい。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "*Elle baisse la tête timidement.* \"...Au fait, comment tu t'appelles ? J'ai été assez attirée par toi pour vouloir partager ce secret. Je veux te connaître.\""
            }
        }
    },
    "day2_yuna_new_name_share_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "setFlag": "knows_name_yuna",
        "next": "day2_yuna_secret_high",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"내 이름은 {name}(이)야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"My name is {name}.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Me llamo {name}.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"僕の名前は{name}。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Je m'appelle {name}.\""
            }
        }
    },
    "day2_yuna_new_name_ask_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day2_yuna_new_name_share_low",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*그녀가 쌀쌀맞게 묻는다.* \"...이름이라도 알아야 나중에 원망을 듣든 말든 할 거 아냐. 네 이름, 뭐라고 불러야 해?\""
            },
            "en": {
                "name": "Yuna",
                "text": "*She asks coldly.* \"...I should probably know your name before we go further. What is it?\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Pregunta fríamente.* \"...Debería saber tu nombre antes de seguir. ¿Cómo te llamas?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*冷たく聞く。* \"…先に進む前に名前くらい知っておくべきね。何て言うの？\""
            },
            "fr": {
                "name": "Yuna",
                "text": "*Elle demande froidement.* \"...Je devrais au moins connaître ton nom avant d'aller plus loin. Comment tu t'appelles ?\""
            }
        }
    },
    "day2_yuna_new_name_share_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "knows_name_yuna",
        "next": "day2_yuna_secret_low",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"내 이름은 {name}(이)야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"My name is {name}.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Me llamo {name}.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"僕の名前は{name}。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Je m'appelle {name}.\""
            }
        }
    },
    "day2_yuna_new_name_ask_normal": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day2_yuna_new_name_share_normal",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...그러고 보니, 네 이름은 뭐야? 쪽지엔 내 이름만 적어두고 네 이름은 차마 못 적었거든.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I forgot to ask your name. I only wrote mine on the note.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Se me olvidó preguntarte tu nombre. Solo escribí el mío en la nota.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…名前を聞くのを忘れてた。メモには自分の名前しか書かなかったし。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...J'ai oublié de te demander ton nom. Je n'avais écrit que le mien sur le mot.\""
            }
        }
    },
    "day2_yuna_new_name_share_normal": {
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "knows_name_yuna",
        "next": "day2_yuna_secret_normal",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"내 이름은 {name}(이)야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"My name is {name}.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Me llamo {name}.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"僕の名前は{name}。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Je m'appelle {name}.\""
            }
        }
    },
    "day2_yuna_secret_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "day2_yuna_secret_2_high",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나가 조심스럽게 내 손을 깍지 껴 잡는다. 온기가 전해지는 그녀의 손에서 진심이 느껴진다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna gently interlocks her fingers with mine. I can feel her heart through her warm hand.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Yuna entrelaza suavemente sus dedos con los míos. Puedo sentir su corazón a través de su cálida mano.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*ユナがそっと僕の指に自分の指を絡めてくる。温かい手を通して、彼女の鼓動が伝わってくる。*"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Yuna entrelace doucement ses doigts avec les miens. Je peux sentir son coeur battre à travers sa main chaude.*"
            }
        }
    },
    "day2_yuna_secret_2_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "choices": [
            {
                "next": "day2_yuna_secret_read_high",
                "stats": {
                    "Yuna": {
                        "affinity": 20
                    }
                },
                "setFlag": "visited_warehouse_at_lunch"
            },
            {
                "next": "day2_yuna_secret_stop_high",
                "stats": {
                    "Yuna": {
                        "affinity": -10
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"너라면... 이 무거운 진실을 함께 짊어져 줄 수 있을 것 같아. {name}, 나를 믿고 따라와 줄 수 있어? 이 뒤의 세상은 이전과 전혀 다를 거야.\"",
                "choices": [
                    "응, 내가 함께할게. 같이 보자.",
                    "미안, 이건 좀 무리인 것 같아."
                ]
            },
            "en": {
                "name": "Yuna",
                "text": "\"I think... you're the one who can share this burden with me. {name}, will you follow me? The world ahead is different from what you know.\"",
                "choices": [
                    "I'll be with you. Let's see it together.",
                    "I'm sorry, I can't handle this yet."
                ]
            },
            "es": {
                "name": "Yuna",
                "text": "\"Creo que... tú eres quien puede compartir esta carga conmigo. {name}, ¿me seguirás? El mundo que hay adelante es diferente a lo que conoces.\"",
                "choices": [
                    "Estaré contigo. Veámoslo juntos.",
                    "Lo siento, aún no puedo con esto."
                ]
            },
            "ja": {
                "name": "ユナ",
                "text": "\"きっと…君なら、この重荷を一緒に背負ってくれる。{name}、付いてきてくれる？この先の世界は、君が知ってるものとは違うから。\"",
                "choices": [
                    "一緒にいるよ。二人で見よう。",
                    "ごめん、まだ僕には無理かも。"
                ]
            },
            "fr": {
                "name": "Yuna",
                "text": "\"Je pense... que tu es celui qui peut partager ce fardeau avec moi. {name}, tu veux bien me suivre ? Le monde qui nous attend est différent de ce que tu connais.\"",
                "choices": [
                    "Je serai avec toi. Voyons ça ensemble.",
                    "Désolé, je ne peux pas encore gérer ça."
                ]
            }
        }
    },
    "day2_yuna_secret_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day2_yuna_secret_2_low",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나가 내 소매를 거칠게 잡아 끈다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna grabs my sleeve and pulls me forward.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Yuna me agarra de la manga y me jala hacia adelante.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*ユナが僕の袖を掴んで引っ張る。*"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Yuna attrape ma manche et me tire vers l'avant.*"
            }
        }
    },
    "day2_yuna_secret_2_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day2_yuna_secret_read_low",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                },
                "setFlag": "visited_warehouse_at_lunch"
            },
            {
                "next": "day2_yuna_secret_stop_low",
                "stats": {
                    "Yuna": {
                        "affinity": -20
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"그냥 구경이나 해. 네가 뭘 알겠냐마는... 여기까지 왔으니까 어쩔 수 없지. 방해만 하지 마.\"",
                "choices": [
                    "그게 뭔데? 나도 궁금해.",
                    "그만둘래. 너무 위험해 보여."
                ]
            },
            "en": {
                "name": "Yuna",
                "text": "\"Just watch. Not like you'll understand, but you're here already. Don't get in my way.\"",
                "choices": [
                    "Show me. What is it?",
                    "I'm out. This is too dangerous."
                ]
            },
            "es": {
                "name": "Yuna",
                "text": "\"Solo mira. No es que vayas a entender, pero ya estás aquí. No me estorbes.\"",
                "choices": [
                    "Muéstrame. ¿Qué es?",
                    "Me voy. Esto es muy peligroso."
                ]
            },
            "ja": {
                "name": "ユナ",
                "text": "\"見てればいい。どうせ理解できないだろうけど、もう来ちゃったんだし。邪魔しないで。\"",
                "choices": [
                    "見せて。何なの？",
                    "帰る。危なすぎる。"
                ]
            },
            "fr": {
                "name": "Yuna",
                "text": "\"Regarde, c'est tout. Tu ne comprendras probablement pas, mais tu es déjà là. Ne me gêne pas.\"",
                "choices": [
                    "Montre-moi. C'est quoi ?",
                    "Je m'en vais. C'est trop dangereux."
                ]
            }
        }
    },
    "day2_yuna_secret_normal": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "day2_yuna_secret_2_normal",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나가 내 손을 잡고 낡은 창고 쪽으로 이끈다. 손끝에서 전해지는 차가운 감촉에 몸이 떨렸다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna leads me toward the old warehouse. Her cold touch makes me shiver.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Yuna me guía hacia el viejo almacén. Su toque frío me hace estremecerme.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*ユナが古い倉庫へ僕を導いていく。彼女の冷たい触れ方にゾクッとする。*"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Yuna me guide vers le vieil entrepôt. Son toucher froid me fait frissonner.*"
            }
        }
    },
    "day2_yuna_secret_2_normal": {
        "character": "assets/images/characters/yuna_smile.png",
        "choices": [
            {
                "next": "day2_yuna_secret_read",
                "stats": {
                    "Yuna": {
                        "affinity": 15
                    }
                },
                "setFlag": "visited_warehouse_at_lunch"
            },
            {
                "next": "day2_yuna_secret_stop",
                "stats": {
                    "Yuna": {
                        "affinity": -20
                    }
                }
            },
            {
                "next": "day2_yuna_secret_why",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"이 안에는... 학교가 오랫동안 숨겨온 기록들이 있어. 네가 이걸 보면... 모든 게 달라질 거야.\"",
                "choices": [
                    "그 기록, 나도 같이 봐도 될까?",
                    "위험한 거 아냐? 그냥 내버려 두는 게 좋겠어.",
                    "유나야, 넌 왜 이런 걸 조사하는 거야?"
                ]
            },
            "en": {
                "name": "Yuna",
                "text": "\"Inside are records the school has hidden for a long time. Once you see them... everything will change.\"",
                "choices": [
                    "Can I see them too?",
                    "Is it safe? Maybe we should leave it.",
                    "Why are you doing this, Yuna?"
                ]
            },
            "es": {
                "name": "Yuna",
                "text": "\"Adentro hay registros que la escuela ha ocultado por mucho tiempo. Una vez que los veas... todo cambiará.\"",
                "choices": [
                    "¿Puedo verlos yo también?",
                    "¿Es seguro? Tal vez deberíamos dejarlo.",
                    "¿Por qué haces esto, Yuna?"
                ]
            },
            "ja": {
                "name": "ユナ",
                "text": "\"中には、学校が長い間隠してきた記録がある。一度見たら…全てが変わるよ。\"",
                "choices": [
                    "僕も見ていい？",
                    "安全なの？やめた方がいいかも。",
                    "なぜこんなことをするの、ユナ？"
                ]
            },
            "fr": {
                "name": "Yuna",
                "text": "\"À l'intérieur se trouvent des dossiers que l'école cache depuis longtemps. Une fois que tu les verras... tout changera.\"",
                "choices": [
                    "Je peux les voir aussi ?",
                    "C'est sûr ? Peut-être qu'on devrait laisser tomber.",
                    "Pourquoi fais-tu ça, Yuna ?"
                ]
            }
        }
    },
    "day2_yuna_secret_read": {
        "affinityChar": "Yuna",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_yuna_secret_read_high"
            },
            {
                "minAffinity": -999,
                "next": "day2_yuna_secret_read_low"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나"
            },
            "en": {
                "name": "Me"
            },
            "es": {
                "name": "Yo"
            },
            "ja": {
                "name": "僕"
            },
            "fr": {
                "name": "Moi"
            }
        }
    },
    "day2_yuna_secret_stop": {
        "affinityChar": "Yuna",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_yuna_secret_stop_high"
            },
            {
                "minAffinity": -999,
                "next": "day2_yuna_secret_stop_low"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나"
            },
            "en": {
                "name": "Me"
            },
            "es": {
                "name": "Yo"
            },
            "ja": {
                "name": "僕"
            },
            "fr": {
                "name": "Moi"
            }
        }
    },
    "day2_yuna_secret_why": {
        "affinityChar": "Yuna",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_yuna_secret_why_high"
            },
            {
                "minAffinity": -999,
                "next": "day2_yuna_secret_why_low"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나"
            },
            "en": {
                "name": "Me"
            },
            "es": {
                "name": "Yo"
            },
            "ja": {
                "name": "僕"
            },
            "fr": {
                "name": "Moi"
            }
        }
    },
    "day2_yuna_secret_why_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "setFlag": "day2_met_yuna_lunch",
        "next": "day2_yuna_lunch_end",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"그게 궁금해? 사실... 나도 잘 모르겠어. 그냥 네가 전학 온 날부터, 왠지 너라면 내 이야기를 들어줄 것 같다는 예감이 들었거든. 우습지?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Curious? Honestly... I'm not sure. But since the day you transferred, I had a feeling you'd be the one. Funny, right?\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"¿Curioso? Honestamente... no estoy segura. Pero desde el día que te transferiste, tuve el presentimiento de que serías tú. Gracioso, ¿no?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"気になる？ 正直…わからない。でも君が転校してきた日から、君だっていう予感があったの。おかしいでしょ？\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Curieux ? Honnêtement... je ne sais pas trop. Mais depuis le jour de ton transfert, j'avais le pressentiment que ce serait toi. Drôle, non ?\\\""
            }
        }
    },
    "day2_yuna_secret_why_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "day2_met_yuna_lunch",
        "next": "day2_yuna_lunch_end",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"네가 알아서 뭐 하게? 호기심은 고양이를 죽인다는 말도 몰라? 그냥 입 닥치고 구경이나 하든가, 아니면 꺼져.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"What's it to you? Just watch or leave. No need to poke your nose into my business.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"¿Qué te importa? Solo mira o vete. No necesitas meterte en mis asuntos.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"あんたに関係ある？見るか帰るか。私のことに首を突っ込まないで。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Qu'est-ce que ça peut te faire ? Regarde ou va-t'en. Pas besoin de fourrer ton nez dans mes affaires.\\\""
            }
        }
    },
    "day2_yuna_secret_read_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "setFlag": "day2_met_yuna_lunch",
        "next": "day2_yuna_lunch_end",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"고마워, {name}. 너랑 함께라면 더 이상 두렵지 않아. 자, 그럼 같이 열어볼까?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Thank you, {name}. With you, I'm not afraid. Shall we?\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Gracias, {name}. Contigo, no tengo miedo. ¿Vamos?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"ありがとう、{name}。君がいれば、怖くない。行こう？\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Merci, {name}. Avec toi, je n'ai pas peur. On y va ?\\\""
            }
        }
    },
    "day2_yuna_secret_read_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "day2_met_yuna_lunch",
        "next": "day2_yuna_lunch_end",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"진짜 볼 거야? 후회하지 마. 네가 울고불고 매달려도 난 모르는 일이니까.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"You really want to see? Don't regret it. I won't help you if you start crying.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"¿De verdad quieres ver? No te arrepientas. No te ayudaré si empiezas a llorar.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"本当に見たいの？後悔しないでよ。泣いても助けないから。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Tu veux vraiment voir ? Ne viens pas te plaindre. Si tu te mets à pleurer, ce n'est pas mon problème.\\\""
            }
        }
    },
    "day2_yuna_secret_stop_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "setFlag": "day2_met_yuna_lunch",
        "next": "day2_yuna_lunch_end",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...그래? 많이 무서운가 보네. 이해해. 대신 나중에라도 생각이 바뀌면 다시 말해줘.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I see. You must be scared. I understand. Tell me if you change your mind later.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Ya veo. Debes tener miedo. Entiendo. Dime si cambias de opinión después.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…そう。怖いんだね。わかる。気が変わったら言って。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Je vois. Tu dois avoir peur. Je comprends. Dis-moi si tu changes d'avis.\\\""
            }
        }
    },
    "day2_yuna_secret_stop_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "day2_met_yuna_lunch",
        "next": "day2_yuna_lunch_end",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"그럴 줄 알았어. 입만 살았지 실제론 아무것도 못 하는 겁쟁이. 다시는 내 앞에 나타나지 마.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"I knew it. You're a coward. Don't show your face again.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Lo sabía. Eres un cobarde. No vuelvas a aparecerte frente a mí.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"やっぱりね。臆病者。もう顔を見せないで。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Je le savais. Tu es un lâche. Ne te montre plus devant moi.\\\""
            }
        }
    },
    "day2_yuna_normal_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "setFlag": "day2_met_yuna_lunch",
        "next": "day2_yuna_lunch_end",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"나랑 이야기하고 싶어서 왔다고...? 후훗, 너 정말 사랑스러운 소리를 잘하는구나. 좋아, 그럼 오늘은 이대로 좀 더 같이 있어주겠니?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"You came just to talk to me...? Hehe, you really say sweet things. Fine, stay with me a little longer then.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"¿Viniste solo para hablar conmigo...? Jeje, realmente dices cosas dulces. Está bien, quédate conmigo un rato más entonces.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"私と話しに来ただけ…？ ふふ、甘いこと言うんだね。いいよ、もう少し一緒にいて。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Tu es venu juste pour me parler... ? Héhé, tu dis vraiment des choses adorables. D'accord, reste encore un peu avec moi alors.\\\""
            }
        }
    },
    "day2_yuna_normal_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "day2_met_yuna_lunch",
        "next": "day2_yuna_lunch_end",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"나랑 떠들러 여기까지 왔다고? 한심하네. 내 시간 낭비하지 말고 저리 비켜.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"To talk? Pathetic. Don't waste my time and get lost.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"¿A hablar? Patético. No pierdas mi tiempo y lárgate.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"話す？くだらない。時間の無駄だから消えて。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"Pour parler ? Pathétique. Ne me fais pas perdre mon temps et dégage.\\\""
            }
        }
    },
    "day2_yuna_normal_normal": {
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "day2_met_yuna_lunch",
        "next": "day2_yuna_lunch_end",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...그래? 넌 참 이상한 애야. 다른 애들은 다들 무서워하는데. 좋아, 그럼 오늘은 그냥 이렇게 같이 있자.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Is that so? You're a strange one. Most people are afraid. Fine, let's just stay like this for today.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...¿Es así? Eres raro. La mayoría de la gente tiene miedo. Está bien, quedémonos así por hoy.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…そう？変わってるね。普通の人は怖がるのに。いいよ、今日はこのままでいよう。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\\\"...Ah bon ? Tu es vraiment bizarre. La plupart des gens ont peur. Bon, restons comme ça pour aujourd'hui.\\\""
            }
        }
    },
    "day2_yuna_lunch_end": {
        "character": null,
        "next": "day2_afternoon_class",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나와 헤어져 교실로 돌아왔다. 그녀가 했던 기묘한 말들이 머릿속을 맴돌아 오후 수업에 집중하기가 힘들었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I head back. Her mysterious words haunt me, making it hard to focus on class.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Regreso. Sus misteriosas palabras me persiguen, haciendo difícil concentrarme en clase.*"
            },
            "ja": {
                "name": "僕",
                "text": "*教室に戻る。彼女のミステリアスな言葉が頭から離れず、授業に集中できそうにない。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je retourne en classe. Ses paroles mystérieuses me hantent, rendant difficile la concentration en cours.*"
            }
        }
    },
    "day2_lunch_dain": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "branches": [
            {
                "next": "day2_dain_lunch_talk",
                "condition": "met_dain"
            },
            {
                "next": "day2_lunch_dain_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*체육관 문을 열자, 땀방울을 흩날리며 스파이크를 때리던 다인이가 나를 발견하고는 환하게 웃으며 달려온다. 건강하게 빛나는 미소와 활기찬 발걸음에 나도 모르게 입꼬리가 올라갔다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I open the gym. Dain, practicing hard, runs over with a wide grin.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Abro el gimnasio. Dain, que estaba practicando duro, corre hacia mí con una gran sonrisa.*"
            },
            "ja": {
                "name": "僕",
                "text": "*体育館のドアを開ける。一生懸命練習していたダインが、満面の笑みで駆け寄ってくる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ouvre la porte du gymnase. Dain, qui s'entraînait dur, accourt vers moi avec un large sourire.*"
            }
        }
    },
    "day2_lunch_dain_new": {
        "character": "assets/images/characters/dain_laugh.png",
        "setFlag": "met_dain",
        "next": "day2_lunch_dain_new_name_ask",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "\"오! 처음 보는 얼굴인데? 너 새로 전학 온 애 맞지? 나 배구부 다인이야!\""
            },
            "en": {
                "name": "???",
                "text": "\"Oh! A new face! You're the transfer student, right? I'm Dain from the volleyball club!\""
            },
            "es": {
                "name": "???",
                "text": "\"¡Oh! ¡Una cara nueva! Eres el estudiante de intercambio, ¿verdad? ¡Soy Dain, del club de voleibol!\""
            },
            "ja": {
                "name": "???",
                "text": "\"おっ！見ない顔！転校生でしょ？ あたしはダイン、バレー部！\""
            },
            "fr": {
                "name": "???",
                "text": "\\\"Oh ! Un nouveau visage ! Tu es le nouvel élève, c'est ça ? Moi c'est Dain, du club de volley !\\\""
            }
        }
    },
    "day2_lunch_dain_new_name_ask": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_lunch_dain_new_name_share",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"그러고 보니 이름이 뭐야? 나만 성급하게 물어본 것 같네!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"By the way, what's your name? I'm the only one who didn't introduce myself properly!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Por cierto, ¿cómo te llamas? ¡Soy la única que no se presentó bien!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"ところで、名前は？ ちゃんと自己紹介してないのあたしだけじゃん！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Au fait, comment tu t'appelles ? Je suis la seule à ne pas m'être présentée correctement !\\\""
            }
        }
    },
    "day2_dain_lunch_talk_new": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_dain_store",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오! {name}? 멋진 이름이네! 좋아, 만난 기념으로 오늘 점심은 내가 쏜다! 매점으로 가자!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh! {name}? Cool name! Great, to celebrate, lunch is on me! Let's go to the snack bar!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Oh! ¿{name}? ¡Buen nombre! ¡Genial, para celebrar, el almuerzo va por mi cuenta! ¡Vamos a la tienda de bocadillos!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"おぉ！{name}？ いい名前じゃん！よし、お祝いにお昼はあたしのおごり！売店行こ！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Oh ! {name} ? Trop cool comme prénom ! Allez, pour fêter ça, c'est moi qui régale ! Direction la cafét' !\\\""
            }
        }
    },
    "day2_lunch_dain_new_name_share": {
        "character": "assets/images/characters/dain_laugh.png",
        "setFlag": "knows_name_dain",
        "next": "day2_dain_lunch_talk_new",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"내 이름은 {name}(이)야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"My name is {name}.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Me llamo {name}.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"僕の名前は{name}。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Je m'appelle {name}.\\\""
            }
        }
    },
    "day2_dain_lunch_talk": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_dain_store",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오! 진짜 왔네? 좋아, 오늘 점심은 내가 쏜다! 매점으로 가자!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh! You really came! Great, lunch is on me today! Let's go to the snack bar!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Oh! ¡De verdad viniste! ¡Genial, hoy el almuerzo va por mi cuenta! ¡Vamos a la tienda de bocadillos!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"おっ！本当に来てくれた！よし、今日のお昼はあたしのおごり！売店行こ！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Oh ! Tu es vraiment venu ! Super, aujourd'hui c'est moi qui régale ! Allez, direction la cafét' !\\\""
            }
        }
    },
    "day2_dain_store": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "day2_dain_store_seoyeon",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이와 함께 매점으로 향했다. 쉬는 시간이라 그런지 매점 앞은 아이들로 북적거린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We head to the snack bar. It's packed with students.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Nos dirigimos a la tienda de bocadillos. Está llena de estudiantes.*"
            },
            "ja": {
                "name": "僕",
                "text": "*売店に向かう。生徒でいっぱいだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*On se dirige vers la cafétéria. C'est bondé d'élèves.*"
            }
        }
    },
    "day2_dain_store_seoyeon": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "day2_dain_store_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그때, 매점 반대편에서 익숙한 얼굴이 보인다. 서연이가 음료수를 사고 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Just then, I spot a familiar face across the store. Seoyeon is buying a drink.*"
            },
            "es": {
                "name": "Yo",
                "text": "*En ese momento, veo una cara conocida al otro lado de la tienda. Seoyeon está comprando una bebida.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ちょうどその時、売店の向こう側に見覚えのある顔を見つける。ソヨンが飲み物を買っている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*À ce moment-là, j'aperçois un visage familier de l'autre côté du magasin. Seoyeon est en train d'acheter une boisson.*"
            }
        }
    },
    "day2_dain_store_seoyeon_2": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "day2_dain_store_seoyeon_approach",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오? 저 애... 학생회장 아니야? 뭔가 범접 불가의 아우라가 느껴지는데. {name}, 혹시 아는 사이야?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh? That girl... Isn't she the student council president? She has this unapproachable aura. {name}, do you know her?\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¿Oh? Esa chica... ¿No es la presidenta del consejo estudiantil? Tiene un aura inaccesible. {name}, ¿la conoces?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"あれ？あの子…生徒会長じゃない？近寄りがたいオーラがあるよね。{name}、知り合い？\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Oh ? Cette fille... C'est pas la présidente du conseil des élèves ? Elle dégage une aura intimidante. {name}, tu la connais ?\\\""
            }
        }
    },
    "day2_dain_store_seoyeon_approach": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            {
                "next": "day2_dain_seoyeon_both_met",
                "condition": "met_seoyeon"
            },
            {
                "next": "day2_dain_seoyeon_both_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그때, 서연이가 우리를 발견하고 다가온다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Just then, Seoyeon notices us and walks over.*"
            },
            "es": {
                "name": "Yo",
                "text": "*En ese momento, Seoyeon nos nota y se acerca.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ちょうどその時、ソヨンが僕たちに気づいて歩いてくる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*À ce moment-là, Seoyeon nous remarque et s'approche.*"
            }
        }
    },
    "day2_dain_seoyeon_both_met": {
        "characters": {
            "left": "assets/images/characters/dain_normal.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_tension",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"어? {name}! 여기서 보네. 아까 밥 맛있게 먹었어? (다인을 보며) ...?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh? {name}! Fancy seeing you here. Did you enjoy lunch earlier? (Glances at Dain) ...?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¿Oh? ¡{name}! Qué sorpresa verte aquí. ¿Disfrutaste el almuerzo? (Mira a Dain) ...?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あれ？{name}！こんなところで会うなんて。さっきのお昼は楽しかった？（ダインをちらっと見る）…？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"Oh ? {name} ! Quelle surprise de te voir ici. Tu as bien déjeuné tout à l'heure ? (Elle jette un coup d'œil à Dain) ...?\\\""
            }
        }
    },
    "day2_dain_seoyeon_both_new": {
        "characters": {
            "left": "assets/images/characters/dain_normal.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_tension",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"어머, 전학생? 여기서 보네. 나 서연이야. (다인을 보며) ...?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh my, the transfer student? Nice to see you here. I'm Seoyeon. (Glances at Dain) ...?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Ay, ¿el estudiante de intercambio? Qué gusto verte aquí. Soy Seoyeon. (Mira a Dain) ...?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あら、転校生？こんなところで会えるなんて。私はソヨン。（ダインをちらっと見る）…？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"Oh, le nouvel élève ? Ravie de te voir ici. Je suis Seoyeon. (Elle jette un coup d'œil à Dain) ...?\\\""
            }
        }
    },
    "day2_dain_seoyeon_tension": {
        "characters": {
            "left": "assets/images/characters/dain_normal.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_tension_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"(다인이 살짝 경계하는 표정을 짓는다) 어, 학생회장님. 안녕하세요? 저희 지금 점심 마무리 중인데...\""
            },
            "en": {
                "name": "Dain",
                "text": "\"(Dain looks slightly on guard) Oh, hi Miss President. We're just finishing up lunch here...\""
            },
            "es": {
                "name": "Dain",
                "text": "\"(Dain se pone un poco a la defensiva) Oh, hola señorita presidenta. Nosotros solo estamos terminando de almorzar aquí...\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"（ダインが少し警戒した顔で）あ、どうも会長。あたしたちはちょうどお昼食べてるとこで…\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"(Dain se met légèrement sur ses gardes) Oh, salut Madame la Présidente. On finit juste de déjeuner...\\\""
            }
        }
    },
    "day2_dain_seoyeon_tension_2": {
        "characters": {
            "left": "assets/images/characters/dain_normal.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_choice",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"(서연이가 빙그레 웃는다) 후훗, 그래? 재미있게 먹어. {name}, 나중에 학생회실에도 놀러 와?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"(Seoyeon smiles brightly) Heh, is that so? Enjoy yourselves. {name}, come visit the student council room later, okay?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"(Seoyeon sonríe radiante) Vaya, ¿es así? Diviértanse. {name}, ven a visitar el consejo estudiantil luego, ¿de acuerdo?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"（ソヨンが明るく微笑む）へぇ、そうなんだ。楽しんでね。{name}、後で生徒会室にも来てね？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"(Seoyeon sourit radieusement) Héhé, ah bon ? Amusez-vous bien. {name}, viens faire un tour à la salle du conseil plus tard, d'accord ?\\\""
            }
        }
    },
    "day2_dain_seoyeon_choice": {
        "characters": {
            "left": "assets/images/characters/dain_normal.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "choices": [
            {
                "next": "day2_dain_seoyeon_favor_seoyeon",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    },
                    "Dain": {
                        "affinity": -5
                    }
                }
            },
            {
                "next": "day2_dain_seoyeon_favor_dain",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    },
                    "Seoyeon": {
                        "affinity": -3
                    }
                }
            },
            {
                "next": "day2_dain_seoyeon_favor_both",
                "stats": {
                    "Seoyeon": {
                        "affinity": -5
                    },
                    "Dain": {
                        "affinity": -5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와 다인이 나를 두고 묘하게 신경전을 벌이는 것 같다. 어떻게 대답하지?*",
                "choices": [
                    "응, 서연아! 나중에 꼭 갈게.",
                    "오늘은 다인이랑 약속이 있어서... 다음에!",
                    "*애매하게 웃으며* 둘 다 만나면 좋겠는데."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon and Dain seem to be having some kind of subtle standoff over me. What should I say?*",
                "choices": [
                    "Sure, Seoyeon! I'll definitely come by later.",
                    "I've got plans with Dain today... Maybe next time!",
                    "*Smile vaguely* Would be nice to hang with both of you."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon y Dain parecen tener una especie de enfrentamiento sutil por mí. ¿Qué debería decir?*",
                "choices": [
                    "¡Claro, Seoyeon! Definitivamente pasaré luego.",
                    "Tengo planes con Dain hoy... ¡Tal vez la próxima!",
                    "*Sonreír vagamente* Sería genial pasar tiempo con ambas."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンとダインが、僕を巡って微妙な駆け引きをしているみたいだ。何て言おう？*",
                "choices": [
                    "もちろん、ソヨン！後で絶対行くよ。",
                    "今日はダインと予定があるんだ…また今度ね！",
                    "*曖昧に微笑む* 二人と一緒にいられたら最高だね。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon et Dain semblent se livrer à une sorte de rivalité subtile à mon sujet. Qu'est-ce que je devrais dire ?*",
                "choices": [
                    "Bien sûr, Seoyeon ! Je passerai sans faute tout à l'heure.",
                    "J'ai des plans avec Dain aujourd'hui... Peut-être la prochaine fois !",
                    "*Sourire vaguement* Ce serait chouette de traîner avec vous deux."
                ]
            }
        }
    },
    "day2_dain_seoyeon_favor_seoyeon": {
        "character": "assets/images/characters/dain_pout.png",
        "next": "day2_dain_seoyeon_favor_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"(다인이 살짝 시무룩한 표정으로) ....흥, 그래? 나랑 있으면서 벌써 다른 약속?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"(Dain looks a bit dejected) ...Huh, really? Already making other plans while you're with me?\""
            },
            "es": {
                "name": "Dain",
                "text": "\"(Dain se ve un poco decaída) ...¿Eh, en serio? ¿Ya haciendo otros planes mientras estás conmigo?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"（ダインが少ししょんぼりする）…え、マジ？あたしと一緒にいるのに、もう他の予定入れるの？\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"(Dain a l'air un peu dépitée) ...Hein, sérieux ? Tu fais déjà d'autres plans alors que tu es avec moi ?\\\""
            }
        }
    },
    "day2_dain_seoyeon_favor_seoyeon_2": {
        "characters": {
            "left": "assets/images/characters/dain_pout.png",
            "right": "assets/images/characters/seyoun_laugh.png"
        },
        "next": "day2_dain_seoyeon_end",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"(서연이가 흐뭇하게 웃는다) 후훗, 고마워 {name}. 그럼 나중에 보자.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"(Seoyeon smiles satisfied) Hehe, thanks {name}. See you later then.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"(Seoyeon sonríe satisfecha) Jeje, gracias {name}. Entonces nos vemos luego.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"（ソヨンが満足そうに微笑む）えへへ、ありがとう{name}。じゃあ後でね。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"(Seoyeon sourit, satisfaite) Héhé, merci {name}. À tout à l'heure alors.\\\""
            }
        }
    },
    "day2_dain_seoyeon_favor_dain": {
        "characters": {
            "left": "assets/images/characters/dain_laugh.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_favor_dain_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"(다인이 환하게 웃으며 내 팔을 감싼다) 들었지? 오늘은 {name}이 내 거야!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"(Dain beams and grabs my arm) Hear that? {name}'s all mine today!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"(Dain sonríe radiante y me agarra del brazo) ¿Escuchaste? ¡{name} es todo mío hoy!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"（ダインがぱっと笑って僕の腕を掴む）聞いた？{name}は今日あたしのもの！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"(Dain rayonne et attrape mon bras) T'as entendu ? {name} est rien qu'à moi aujourd'hui !\\\""
            }
        }
    },
    "day2_dain_seoyeon_favor_dain_2": {
        "characters": {
            "left": "assets/images/characters/dain_laugh.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_end",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"(서연이가 살짝 굳은 표정으로) ...그래, 재미있게 놀아. 나중에 보자, {name}.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"(Seoyeon's expression stiffens slightly) ...I see. Have fun then. See you later, {name}.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"(La expresión de Seoyeon se endurece un poco) ...Ya veo. Diviértanse entonces. Nos vemos, {name}.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"（ソヨンの表情が少し固くなる）…そう。楽しんでね。またね、{name}。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"(L'expression de Seoyeon se crispe légèrement) ...Je vois. Amusez-vous bien alors. À plus tard, {name}.\\\""
            }
        }
    },
    "day2_dain_seoyeon_favor_both": {
        "characters": {
            "left": "assets/images/characters/dain_normal.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_favor_both_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*순간 두 사람의 표정이 동시에 굳는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Both their expressions freeze at the same time.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Las expresiones de ambas se congelan al mismo tiempo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*二人の表情が同時に固まる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Leurs expressions se figent toutes les deux en même temps.*"
            }
        }
    },
    "day2_dain_seoyeon_favor_both_2": {
        "characters": {
            "left": "assets/images/characters/dain_pout.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_favor_both_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"...둘 다? 하, 역시 인기 많은 타입이야?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Both of us? Ha, the popular type, huh?\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...¿Las dos? Ja, eres del tipo popular, ¿eh?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"…二人とも？は、モテるタイプだね。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"...Toutes les deux ? Ha, le genre populaire, hein ?\\\""
            }
        }
    },
    "day2_dain_seoyeon_favor_both_3": {
        "characters": {
            "left": "assets/images/characters/dain_pout.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_favor_both_4",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"(서연이가 차갑게 웃는다) 후훗... 여기저기 다 좋다고 하고 다니면 나중에 두 명 다 잃을 수도 있어.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"(Seoyeon smiles coldly) Heh... Being nice to everyone might mean you end up losing both.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"(Seoyeon sonríe fríamente) Vaya... Ser amable con todos puede hacer que termines perdiendo a ambas.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"（ソヨンが冷たく微笑む）へぇ…誰にでも優しいと、両方失うかもよ。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\\\"(Seoyeon sourit froidement) Héhé... Être gentil avec tout le monde, ça pourrait bien te faire perdre les deux.\\\""
            }
        }
    },
    "day2_dain_seoyeon_favor_both_4": {
        "characters": {
            "left": "assets/images/characters/dain_normal.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_favor_both_5",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"(다인이 놀란 눈으로 서연을 본다) 헉, 학생회장님 의외로 직설적이시네? 근데 나도 동감.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"(Dain looks at Seoyeon in surprise) Whoa, Miss President's pretty blunt, huh? But I actually agree.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"(Dain mira a Seoyeon sorprendida) Vaya, la señorita presidenta es bastante directa, ¿eh? Pero la verdad estoy de acuerdo.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"（ダインが驚いてソヨンを見る）うわ、会長ってズバッと言うんだね。でも正直、同意。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"(Dain regarde Seoyeon avec surprise) Ouah, la Présidente est plutôt directe, hein ? Mais en fait, je suis d'accord.\\\""
            }
        }
    },
    "day2_dain_seoyeon_favor_both_5": {
        "characters": {
            "left": "assets/images/characters/dain_normal.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*두 사람이 서로를 의식하며 나를 바라본다. 분위기가 싸해졌다...*"
            },
            "en": {
                "name": "Me",
                "text": "*The two of them exchange glances while staring at me. Things just got really awkward...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Las dos intercambian miradas mientras me observan. Esto se puso muy incómodo...*"
            },
            "ja": {
                "name": "僕",
                "text": "*二人が僕を見つめながら視線を交わす。すごく気まずくなってきた…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Elles échangent des regards tout en me fixant. L'ambiance vient de devenir vraiment gênante...*"
            }
        }
    },
    "day2_dain_seoyeon_end": {
        "character": "assets/images/characters/dain_normal.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_free_talk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이가 손을 흔들며 멀어졌다. 다인이 나를 똑바로 바라보더니 다시 웃었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon waves and walks away. Dain watches me intently for a moment, then smiles again.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon se despide con la mano y se va. Dain me observa atentamente por un momento, luego vuelve a sonreír.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンが手を振って去っていく。ダインがしばらく僕をじっと見つめてから、また笑顔に戻る。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon fait un signe de la main et s'éloigne. Dain me regarde intensément un instant, puis sourit à nouveau.*"
            }
        }
    },
    "day2_dain_free_talk": {
        "type": "free_talk",
        "character": "assets/images/characters/dain_normal.png",
        "affinityChar": "Dain",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_dain_store_choices_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_dain_store_choices"
            },
            {
                "minAffinity": -100,
                "next": "day2_dain_store_choices_low"
            }
        ],
        "next": "day2_dain_store_choices",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"와, 사람 진짜 많다! 그치? 기다리는 동안 나랑 수다나 떨자. 나한테 궁금한 거 없어?\"",
                "context": "점심시간, 학생들로 북적이는 학교 매점 앞, 다인과 함께 간식을 사기 위해 줄을 서서 대화를 나누는 상황입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 매점에서 간식을 고르는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 우리 차례가 다 되어 간다거나, 무엇을 먹을지 결정하자는 등의 이야기를 하며 자연스럽게 다음 상황으로 유도해 주세요.",
                "personality": "털털하고 시원시원한 성격의 배구부 에이스. 주인공과 함께 있는 시간을 즐거워함."
            },
            "en": {
                "name": "Dain",
                "text": "\"Wow, it's crowded! Right? Let's chat while we wait. Anything you want to know?\"",
                "context": "In front of the crowded school store, standing in line with Dain to buy snacks. Keep the conversation going actively until it's finished. After the conversation, you will choose snacks at the store. ONLY at the final turn of the conversation, please naturally lead into the next situation by mentioning that it's almost our turn or by deciding what to eat.",
                "personality": "A straight-forward volleyball club ace with an easy-going personality. Enjoys spending time with the protagonist."
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Guau, está lleno de gente! ¿Verdad? Platiquemos mientras esperamos. ¿Hay algo que quieras saber?\"",
                "context": "Frente a la tienda escolar llena de gente, haciendo fila con Dain para comprar bocadillos. Mantén la conversación activa hasta que termine. Después de la conversación, elegirán bocadillos en la tienda. SOLO en el último turno de la conversación, lleva la situación al siguiente paso mencionando que ya casi es su turno o decidiendo qué comer.",
                "personality": "Una as directa del club de voleibol con una personalidad relajada. Disfruta pasar tiempo con el protagonista."
            },
            "ja": {
                "name": "ダイン",
                "text": "\"うわ、混んでる！ね？待ってる間おしゃべりしよ。何か知りたいことある？\"",
                "context": "混雑した学校の売店の前で、ダインと一緒にお菓子を買うために並んでいる。会話が終わるまで積極的に続けてください。会話の後、売店でお菓子を選びます。会話の最後のターンでのみ、もうすぐ順番だということに触れるか、何を食べるか決めることで自然に次の場面へ移行してください。",
                "personality": "バレー部のエースで裏表のないさっぱりした性格。主人公と一緒にいるのが楽しい。"
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Waouh, y'a un monde fou ! Pas vrai ? Bavardons en attendant. Tu veux savoir quelque chose ?\\\"",
                "context": "Devant la boutique bondée de l'école, en train de faire la queue avec Dain pour acheter des en-cas. Continuez activement la conversation jusqu'à ce qu'elle soit terminée. Après la conversation, vous choisirez des en-cas à la boutique. UNIQUEMENT au dernier tour de la conversation, guidez naturellement vers la situation suivante en mentionnant que c'est bientôt notre tour ou en décidant quoi manger.",
                "personality": "L'as directe et franche du club de volley, avec une personnalité décontractée. Elle apprécie passer du temps avec le protagoniste."
            }
        }
    },
    "day2_dain_store_choices_high": {
        "character": "assets/images/characters/dain_laugh.png",
        "choices": [
            {
                "next": "day2_dain_store_buy_high",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_dain_store_rooftop_high",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day2_dain_store_race_high",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이와 수다를 떨다 보니 줄 서는 게 전혀 지루하지 않았다. 어느덧 우리 차례가 되었고, 다인이는 기분이 좋은지 자기가 쏘겠다며 메뉴를 골라보라고 했다.*",
                "choices": [
                    "내가 다인이 몫까지 살게. 뭐 먹을래?",
                    "사람 진짜 많다... 우리 그냥 옥상 갈까?",
                    "다인아, 저기 마지막 피자빵이다! 내가 먼저 낚아채올게!"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Chatting with Dain made waiting in line not boring at all. It's our turn now, and Dain's in such a good mood she said she'd treat me.*",
                "choices": [
                    "I'll buy yours too, Dain. What do you want?",
                    "It's really crowded... Should we just go to the rooftop?",
                    "Dain, there's the last pizza bread! Let me grab it first!"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Platicar con Dain hizo que la espera en la fila no fuera aburrida para nada. Es nuestro turno, y Dain está tan contenta que dijo que me invita.*",
                "choices": [
                    "Yo también te invito, Dain. ¿Qué quieres?",
                    "Está muy lleno... ¿Vamos mejor a la azotea?",
                    "¡Dain, ahí está el último pan de pizza! ¡Déjame agarrarlo primero!"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ダインとのおしゃべりで、並んでいても全然退屈しなかった。やっと順番が来て、ダインは機嫌がいいからおごってくれるって。*",
                "choices": [
                    "僕もダインの分買うよ。何がいい？",
                    "すごく混んでるね…屋上に行かない？",
                    "ダイン、最後のピザパンがある！先に取らせて！"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Discuter avec Dain a rendu l'attente dans la file pas ennuyeuse du tout. C'est notre tour maintenant, et Dain est de si bonne humeur qu'elle a dit qu'elle m'invitait.*",
                "choices": [
                    "Je t'offre le tien aussi, Dain. Tu veux quoi ?",
                    "Y'a vraiment trop de monde... On va sur le toit plutôt ?",
                    "Dain, c'est le dernier pain pizza ! Laisse-moi l'attraper en premier !"
                ]
            }
        }
    },
    "day2_dain_store_choices_low": {
        "character": "assets/images/characters/dain_sad.png",
        "choices": [
            {
                "next": "day2_dain_store_buy_low",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_dain_store_rooftop_low",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day2_dain_store_race_low",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이의 기분이 상한 것 같다. 줄 서느라 피곤한 그녀에게 내가 너무 까칠하게 굴었나 보다. 그녀는 한숨을 내쉬며 얼른 뭐 먹을지나 고르라고 말했다.*",
                "choices": [
                    "내가 다인이 몫까지 살게. 뭐 먹을래?",
                    "사람 진짜 많다... 우리 그냥 옥상 갈까?",
                    "다인아, 저기 마지막 피자빵이다! 내가 먼저 낚아채올게!"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Dain seems upset. I must have been too rude while she was tired from waiting. She sighed and told me to just pick something.*",
                "choices": [
                    "I'll buy yours too, Dain. What do you want?",
                    "It's really crowded... Should we just go to the rooftop?",
                    "Dain, there's the last pizza bread! Let me grab it first!"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Dain parece molesta. Debí ser demasiado grosero mientras estaba cansada de esperar. Suspiró y me dijo que simplemente elija algo.*",
                "choices": [
                    "Yo también te invito, Dain. ¿Qué quieres?",
                    "Está muy lleno... ¿Vamos mejor a la azotea?",
                    "¡Dain, ahí está el último pan de pizza! ¡Déjame agarrarlo primero!"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ダインが不機嫌そうだ。待ってる間に失礼なことを言いすぎたかも。ため息をついて、好きなの選べって言われた。*",
                "choices": [
                    "僕もダインの分買うよ。何がいい？",
                    "すごく混んでるね…屋上に行かない？",
                    "ダイン、最後のピザパンがある！先に取らせて！"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain a l'air contrariée. J'ai dû être trop brusque alors qu'elle était fatiguée d'attendre. Elle a soupiré et m'a dit de juste choisir quelque chose.*",
                "choices": [
                    "Je t'offre le tien aussi, Dain. Tu veux quoi ?",
                    "Y'a vraiment trop de monde... On va sur le toit plutôt ?",
                    "Dain, c'est le dernier pain pizza ! Laisse-moi l'attraper en premier !"
                ]
            }
        }
    },
    "day2_dain_store_choices": {
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            {
                "next": "day2_dain_store_buy_normal",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_dain_store_rooftop_normal",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day2_dain_store_race_normal",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이와 이야기를 나누는 사이 어느덧 우리 차례가 되었다. 다인이는 무엇을 먹을지 물어보았다.*",
                "choices": [
                    "내가 다인이 몫까지 살게. 뭐 먹을래?",
                    "사람 진짜 많다... 우리 그냥 옥상 갈까?",
                    "다인아, 저기 마지막 피자빵이다! 내가 먼저 낚아채올게!"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*While talking with Dain, it's finally our turn. She asked what I want to eat.*",
                "choices": [
                    "I'll buy yours too, Dain. What do you want?",
                    "It's really crowded... Should we just go to the rooftop?",
                    "Dain, there's the last pizza bread! Let me grab it first!"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Mientras hablaba con Dain, por fin es nuestro turno. Me preguntó qué quiero comer.*",
                "choices": [
                    "Yo también te invito, Dain. ¿Qué quieres?",
                    "Está muy lleno... ¿Vamos mejor a la azotea?",
                    "¡Dain, ahí está el último pan de pizza! ¡Déjame agarrarlo primero!"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ダインと話してたら、やっと順番が来た。何食べたい？って聞かれた。*",
                "choices": [
                    "僕もダインの分買うよ。何がいい？",
                    "すごく混んでるね…屋上に行かない？",
                    "ダイン、最後のピザパンがある！先に取らせて！"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*En discutant avec Dain, c'est enfin notre tour. Elle m'a demandé ce que je voulais manger.*",
                "choices": [
                    "Je t'offre le tien aussi, Dain. Tu veux quoi ?",
                    "Y'a vraiment trop de monde... On va sur le toit plutôt ?",
                    "Dain, c'est le dernier pain pizza ! Laisse-moi l'attraper en premier !"
                ]
            }
        }
    },
    "day2_dain_store_buy_high": {
        "character": "assets/images/characters/dain_laugh.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_lunch_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"에이~ {name}! 네가 왜 사? 내가 쏜다고 했잖아! 후훗, 그래도 마음은 정말 고마워. 그럼 오늘은 네가 사고, 내일은 내가 더 맛있는 거 사줄게! 약속!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey, {name}! Why are you paying? I said I'm treating! Hehe, but thanks for the thought. You pay today, and I'll get you something even better tomorrow! Promise!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Oye, {name}! ¿Por qué pagas tú? ¡Dije que yo invito! Jeje, pero gracias por el detalle. Hoy pagas tú, ¡y mañana te compro algo aún mejor! ¡Prometido!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"ちょっと{name}！なんで払うの？あたしがおごるって言ったじゃん！ふふ、でもその気持ちは嬉しい。今日は君が払って、明日はあたしがもっといいもの奢るから！約束！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Hé, {name} ! Pourquoi tu paies ? J'ai dit que c'est moi qui régale ! Héhé, mais merci pour l'intention. Tu paies aujourd'hui, et demain je t'offre quelque chose d'encore mieux ! Promis !\\\""
            }
        }
    },
    "day2_dain_store_buy_low": {
        "character": "assets/images/characters/dain_angry.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_lunch_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"됐어. 내가 산다고 했으면 끝이지, 무슨 말이 그렇게 많아? 그냥 받아 먹기나 해.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Whatever. I said I'd pay, so that's that. Just eat.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Da igual. Dije que yo pago, así que así será. Solo come.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"別にいい。あたしが払うって言ったんだから。食べて。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Peu importe. J'ai dit que je paierais, point final. Mange.\\\""
            }
        }
    },
    "day2_dain_store_buy_normal": {
        "character": "assets/images/characters/dain_laugh.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_lunch_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"에이~ 내가 쏜다니까! 전학생이 무슨 돈이 있다고 그래? 오늘은 내가 대접할 테니까 그냥 맛있게 먹기나 해!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey, I said I'm treating! What money does a transfer student have? Today I'll treat you, so just enjoy!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Oye, dije que yo invito! ¿Qué dinero tiene un estudiante de intercambio? ¡Hoy te invito yo, así que solo disfruta!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"ちょっと、あたしがおごるって言ったじゃん！転校生がどんなお金持ってるの？今日はあたしの奢りだから、素直に食べなって！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Hé, j'ai dit que c'est moi qui invite ! Quel argent peut avoir un nouvel élève ? Aujourd'hui c'est ma tournée, alors profite !\\\""
            }
        }
    },
    "day2_dain_store_rooftop_high": {
        "character": "assets/images/characters/dain_laugh.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_lunch_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오! 옥상 데이트?! 좋아 좋아! 단둘이 오붓하게 먹으면 더 꿀맛이겠는걸? 자, 얼른 사서 올라가자!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh! A rooftop date?! Nice nice! It'll taste better eating just the two of us! Let's buy quickly and go up!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Oh! ¿¡Una cita en la azotea!? ¡Genial genial! ¡Será más rico si comemos solo los dos! ¡Compremos rápido y subamos!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"おぉ！屋上デート!? いいね！二人だけで食べた方が美味しいよね！早く買って上行こ！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Oh ! Un rendez-vous sur le toit ?! Trop bien ! Ce sera encore meilleur rien qu'à deux ! On achète vite et on monte !\\\""
            }
        }
    },
    "day2_dain_store_rooftop_low": {
        "character": "assets/images/characters/dain_angry.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_lunch_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"옥상까지 언제가... 귀찮게. 그냥 대충 여기서 먹고 말자.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"The rooftop... why bother going so far. Let's just eat here.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"La azotea... para qué ir tan lejos. Solo comamos aquí.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"屋上…わざわざそんな遠くまで行くの。ここで食べよ。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Le toit... pourquoi se donner cette peine. Mangeons ici.\\\""
            }
        }
    },
    "day2_dain_store_rooftop_normal": {
        "character": "assets/images/characters/dain_normal.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_lunch_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"옥상? 오, 그것도 좋지! 시원한 바람 맞으면서 먹으면 더 맛있겠다. 좋아, 얼른 빵만 사서 올라가자!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Rooftop? Oh, that's good too! It'll taste better with the cool breeze. Okay, let's just grab some bread and go up!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¿La azotea? ¡Oh, eso suena bien! Con la brisa fresca será más rico. ¡Bueno, compremos algo de pan y subamos!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"屋上？あ、それもいいね！涼しい風があった方が美味しいもんね。よし、パンだけ買ってすぐ上行こ！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Le toit ? Oh, c'est bien aussi ! Ce sera meilleur avec la brise fraîche. Allez, on prend du pain et on monte !\\\""
            }
        }
    },
    "day2_dain_store_race_high": {
        "character": "assets/images/characters/dain_active.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_lunch_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오호! 승부욕 발동인가? 좋아! {name}, 나도 안 봐준다? 지는 사람이 오늘 점심 다 내기! 하나, 둘, 셋!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oho! Feeling competitive? Alright! {name}, no mercy from me either? Loser buys all of today's lunch! Ready, set, go!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Oho! ¿Quieres competir? ¡Bueno! {name}, ¡yo tampoco tendré piedad! ¡El que pierda paga todo el almuerzo de hoy! ¡Listos, ya!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"おほ！勝負する気？よし！{name}、あたしも容赦しないからね？負けた方が今日のお昼全部おごり！よーい、ドン！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Oho ! L'esprit de compétition ? D'accord ! {name}, pas de pitié de mon côté non plus ! Le perdant paie tout le déjeuner ! À vos marques, prêts, partez !\\\""
            }
        }
    },
    "day2_dain_store_race_low": {
        "character": "assets/images/characters/dain_sad.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_lunch_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"나 지금 그럴 기분 아니거든... 시끄러우니까 조용히 좀 해.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Not in the mood for that... Just be quiet.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"No estoy de humor para eso... Solo cállate.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"そんな気分じゃない…静かにして。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Pas d'humeur pour ça... Tais-toi.\\\""
            }
        }
    },
    "day2_dain_store_race_normal": {
        "character": "assets/images/characters/dain_normal.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_lunch_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오호! 역시 내 파트너답다! 좋아, 누가 먼저 낚나 내기하자! 지는 사람이 음료수 쏘기!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oho! That's my partner! Okay, let's race for it! Loser buys drinks!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Oho! ¡Ese es mi compañero! ¡Bueno, echemos una carrera! ¡El que pierda paga las bebidas!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"おほ！さすが相棒！よし、競争だ！負けた方がジュース奢り！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\\\"Oho ! C'est bien mon partenaire ! OK, on fait la course ! Le perdant paie les boissons !\\\""
            }
        }
    },
    "day2_dain_lunch_end": {
        "character": null,
        "next": "day2_afternoon_class",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이와 시끌벅적하게 점심을 먹고 교실로 돌아왔다. 그녀의 밝은 에너지 덕분에 오후 수업도 힘낼 수 있을 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Had a lively lunch with Dain and headed back to class. Her bright energy should help me get through the afternoon.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Tuve un almuerzo animado con Dain y regresé a clase. Su energía brillante me ayudará a sobrevivir la tarde.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインと賑やかなお昼を過ごして教室に戻った。彼女の明るいエネルギーで午後も乗り切れそうだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai passé un déjeuner animé avec Dain et je suis retourné en classe. Son énergie débordante devrait m'aider à tenir tout l'après-midi.*"
            }
        }
    },
    "day2_lunch_nurse": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_lunch_nurse_talk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*긴장 탓인지 머리가 지끈거린다. 나도 모르게 조용한 보건실로 발걸음을 옮겼다. 문을 열자마자 훅 끼쳐오는 특유의 소독약 냄새와 은은한 향수 냄새가 묘하게 마음을 진정시킨다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Maybe from nerves, my head is throbbing. I unconsciously walked to the quiet nurse's office.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Tal vez por los nervios, me duele la cabeza. Sin darme cuenta, caminé hasta la silenciosa enfermería.*"
            },
            "ja": {
                "name": "僕",
                "text": "*緊張のせいか、頭がズキズキする。気がついたら、静かな保健室まで歩いてきていた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Peut-être à cause du stress, j'ai mal à la tête. Sans m'en rendre compte, je me suis dirigé vers l'infirmerie silencieuse.*"
            }
        }
    },
    "day2_lunch_nurse_talk": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "branches": [
            {
                "next": "day2_lunch_nurse_met",
                "condition": "met_nurse"
            },
            {
                "next": "day2_lunch_nurse_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, 안녕? 점심시간에 보건실이라니, 어디가 아픈 거니?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh my, hello? Coming to the nurse's office during lunch, are you not feeling well?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Ara, ¿hola? ¿Vienes a la enfermería a la hora del almuerzo? ¿No te sientes bien?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"あら、こんにちは？ お昼休みに保健室に来るなんて、体調悪いの？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Oh, bonjour ? Venir à l'infirmerie pendant la pause déjeuner, tu ne te sens pas bien ?\\\""
            }
        }
    },
    "day2_lunch_nurse_met": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "affinityChar": "Nurse",
        "affinityBranches": [
            {
                "minAffinity": 15,
                "next": "day2_lunch_nurse_met_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_lunch_nurse_met_normal"
            },
            {
                "minAffinity": -100,
                "next": "day2_lunch_nurse_met_low"
            }
        ],
        "stats": {
            "Nurse": {
                "affinity": 6
            }
        },
        "next": "day2_lunch_nurse_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, 우리 {name}이네? 어디가 아픈 걸까, 아니면 내 얼굴 보고 싶어서 설레는 걸까?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh my, isn't this our {name}? Are you feeling sick, or is your heart racing from wanting to see me?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Ara, ¿no es nuestro {name}? ¿Te sientes mal, o el corazón te late fuerte porque querías verme?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"あら、{name}じゃない？ 具合が悪いの、それとも私に会いたくてドキドキしてるの？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Oh, mais c'est notre {name} ! Tu es malade, ou ton cœur bat la chamade parce que tu voulais me voir ?\\\""
            }
        }
    },
    "day2_lunch_nurse_met_high": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day2_lunch_nurse_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 내 얼굴을 보며 은근히 미소 짓는다.* \"후훗, {name}. 너 또 왔구나? 세상에... 선생님을 이렇게 자주 찾아오는 학생은 너밖에 없어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher smiles subtly looking at my face.* \"Hehe, {name}. You're here again? Goodness... you're the only student who visits me this often.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*La profesora sonríe sutilmente mirando mi cara.* \"Jeje, {name}. ¿Otra vez aquí? Dios mío... eres el único estudiante que me visita tan seguido.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生が僕の顔を見て意味ありげに微笑む。* \"ふふ、{name}。また来たの？もう…こんなに頻繁に来てくれるのは君だけよ。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*L'infirmière sourit subtilement en me regardant.* \\\"Héhé, {name}. Tu es encore là ? Mon Dieu... tu es le seul élève à me rendre visite aussi souvent.\\\""
            }
        }
    },
    "day2_lunch_nurse_met_normal": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_lunch_nurse_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, {name}. 점심시간에 보건실이라니... 어디 아픈 거야?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh my, {name}. The nurse's office during lunch... are you not feeling well?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Ara, {name}. La enfermería a la hora del almuerzo... ¿no te sientes bien?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"あら、{name}。お昼休みに保健室…体調悪いの？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Oh, {name}. L'infirmerie pendant le déjeuner... tu ne te sens pas bien ?\\\""
            }
        }
    },
    "day2_lunch_nurse_met_low": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_lunch_nurse_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 날 보며 시큰둥하게 말한다.* \"...{name}, 오늘은 무슨 일이야? 들어와.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher looks at me and tilts her head as if unsure.* \"Uh... {name}, right? Are you sick? Come in.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*La profesora me mira e inclina la cabeza como si no estuviera segura.* \"Eh... ¿{name}, verdad? ¿Estás enfermo? Pasa.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生が首をかしげながら僕を見る。* \"えっと…{name}、だよね？ 具合悪い？入って。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*L'infirmière me regarde en penchant la tête, hésitante.* \\\"Euh... {name}, c'est ça ? Tu es malade ? Entre.\\\""
            }
        }
    },
    "day2_lunch_nurse_new": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlag": "met_nurse",
        "next": "day2_lunch_nurse_new_name_ask",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, 처음 보는 얼굴이네? 새로 전학 온 학생이니? 나는 보건선생님이야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh my, a face I haven't seen before? Are you the new transfer student? I'm the school nurse.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Ara, ¿una cara desconocida? ¿Eres el nuevo estudiante de intercambio? Soy la enfermera de la escuela.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"あら、見ない顔ね？ 新しい転校生？ 私は保健の先生よ。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Oh, un visage que je n'ai jamais vu ? Tu es le nouvel élève ? Je suis l'infirmière scolaire.\\\""
            }
        }
    },
    "day2_lunch_nurse_new_name_ask": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_lunch_nurse_new_name_share",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"그러고 보니 이름이 뭐야? 선생님한테만 살짝 알려줄래?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"By the way, what's your name? Will you tell just me?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Por cierto, ¿cómo te llamas? ¿Me lo dices solo a mí?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"ところで、お名前は？ 私だけに教えてくれる？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Au fait, comment tu t'appelles ? Tu veux bien me le dire, rien qu'à moi ?\\\""
            }
        }
    },
    "day2_lunch_nurse_new_name_share": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlag": "knows_name_nurse",
        "next": "day2_lunch_nurse_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"제 이름은 {name}(이)에요.\""
            },
            "en": {
                "name": "Me",
                "text": "\"My name is {name}.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Me llamo {name}.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"僕の名前は{name}です。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"Je m'appelle {name}.\\\""
            }
        }
    },
    "day2_lunch_nurse_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_lunch_nurse_4",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 부드러운 미소와 함께 나를 침대로 안내한다. 코끝을 간지럽히는 은은한 약초 향기에 긴장이 풀린다.*"
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher guides me to the bed with a soft smile. The gentle herbal scent soothes my nerves.*"
            },
            "es": {
                "name": "Enfermera",
                "text": "*La profesora me guía a la cama con una suave sonrisa. El aroma suave de hierbas calma mis nervios.*"
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生が柔らかい笑顔でベッドまで案内してくれる。優しいハーブの香りが神経を落ち着かせる。*"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*L'infirmière me guide vers le lit avec un doux sourire. Le léger parfum d'herbes médicinales apaise mes nerfs.*"
            }
        }
    },
    "day2_lunch_nurse_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "day2_lunch_nurse_head",
                "stats": {
                    "Nurse": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day2_lunch_nurse_rest",
                "stats": {
                    "Nurse": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day2_lunch_nurse_trap",
                "stats": {
                    "Nurse": {
                        "affinity": -50
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"자, 여기 편하게 누우렴. 선생님이 어디가 불편한지 봐줄게.\"",
                "choices": [
                    "머리가 좀 아파요.",
                    "그냥 좀 쉬고 싶어요.",
                    "선생님, 이런 식으로 학생들을 유혹하는 게 취미예요?"
                ]
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Here, lie down comfortably. Let me see what's bothering you.\"",
                "choices": [
                    "I have a headache.",
                    "I just want to rest.",
                    "Is this how you seduce students, Teacher?"
                ]
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Ven, acuéstate cómodamente. Déjame ver qué te molesta.\"",
                "choices": [
                    "Me duele la cabeza.",
                    "Solo quiero descansar.",
                    "¿Así es como seduce a los estudiantes, profesora?"
                ]
            },
            "ja": {
                "name": "保健先生",
                "text": "\"さ、楽に横になって。どこが辛いか見せて。\"",
                "choices": [
                    "頭が痛いんです。",
                    "ただ休みたいだけです。",
                    "先生、こうやって生徒を誘惑するんですか？"
                ]
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Voilà, allonge-toi confortablement. Voyons ce qui ne va pas.\\\"",
                "choices": [
                    "J'ai mal à la tête.",
                    "Je veux juste me reposer.",
                    "C'est comme ça que vous séduisez les élèves, Madame ?"
                ]
            }
        }
    },
    "day2_lunch_nurse_trap": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_angry.png",
        "next": "day2_lunch_nurse_trap_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님의 입가에서 미소가 순식간에 증발한다. 보건실 안의 공기가 얼어붙듯 무겁게 가라앉는다.*"
            },
            "en": {
                "name": "School Nurse",
                "text": "*The smile instantly vanishes from the teacher's face. The air in the nurse's office turns heavy and cold.*"
            },
            "es": {
                "name": "Enfermera",
                "text": "*La sonrisa desaparece al instante del rostro de la profesora. El aire en la enfermería se vuelve pesado y frío.*"
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生の顔から一瞬で笑みが消える。保健室の空気が重く冷たくなる。*"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Le sourire disparaît instantanément du visage de l'infirmière. L'atmosphère de l'infirmerie devient lourde et glaciale.*"
            }
        }
    },
    "day2_lunch_nurse_trap_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_angry.png",
        "next": "day2_afternoon_class",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머... {name}, 내가 너무 받아줬나 보네. 어른에게 그런 무례한 말은 농담으로 안 들려. 오늘은 그만 나가줄래? 기분이 아주 별로네.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"My... {name}, I must have been too lenient with you. Such rude comments to an adult don't sound like a joke. Would you please leave today? I'm in a terrible mood now.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Vaya... {name}, debo haber sido demasiado indulgente contigo. Esos comentarios groseros a una adulta no suenan como una broma. ¿Podrías irte hoy? Estoy de muy mal humor ahora.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"あら…{name}、私が甘やかしすぎたみたいね。大人に対してそんな失礼なこと、冗談には聞こえないわ。今日は帰ってくれる？すごく気分が悪くなったの。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Mon Dieu... {name}, j'ai dû être trop indulgente avec toi. Des remarques aussi impolies envers un adulte ne ressemblent pas à une plaisanterie. Tu veux bien partir aujourd'hui ? Je suis de très mauvaise humeur maintenant.\\\""
            }
        }
    },
    "day2_lunch_nurse_head": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "day2_lunch_nurse_head_tease",
                "stats": {
                    "Nurse": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_lunch_nurse_sleep",
                "stats": {
                    "Nurse": {
                        "affinity": 3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"긴장성 두통인 것 같네. 이거 먹고 한숨 푹 자고 나면 괜찮아질 거야.\"",
                "choices": [
                    "선생님이 직접 먹여주시면 안 돼요?",
                    "감사합니다. *약을 받아 먹는다*"
                ]
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Sounds like a tension headache. Take this and get some good sleep, you'll feel better.\"",
                "choices": [
                    "Could you feed it to me, Teacher?",
                    "Thank you. *Takes the medicine*"
                ]
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Parece un dolor de cabeza por tensión. Tómate esto y duerme bien, te sentirás mejor.\"",
                "choices": [
                    "¿Me lo puede dar en la boca, profesora?",
                    "Gracias. *Toma la medicina*"
                ]
            },
            "ja": {
                "name": "保健先生",
                "text": "\"緊張性の頭痛みたいね。これ飲んでぐっすり寝れば良くなるわ。\"",
                "choices": [
                    "先生、あーんして飲ませてくれますか？",
                    "ありがとうございます。*薬を飲む*"
                ]
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"On dirait un mal de tête dû au stress. Prends ça et dors bien, tu iras mieux.\\\"",
                "choices": [
                    "Vous pourriez me le donner à la bouche, Madame ?",
                    "Merci. *Prend le médicament*"
                ]
            }
        }
    },
    "day2_lunch_nurse_head_tease": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_lunch_nurse_sleep",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머... {name}, 넌 정말 못 말리겠구나? 좋아, 아 해봐. 착한 학생한테는 상을 줘야지?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"My... {name}, you're really something, aren't you? Alright, say 'ah'. Good students deserve rewards, right?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Vaya... {name}, eres todo un caso, ¿eh? Está bien, di 'aah'. Los buenos estudiantes merecen recompensas, ¿no?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"あら…{name}、ほんとに大胆ね。いいわ、はい、あーん。いい子にはご褒美よね？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Mon Dieu... {name}, tu es vraiment incorrigible, n'est-ce pas ? Allez, dis 'aah'. Les bons élèves méritent une récompense, non ?\\\""
            }
        }
    },
    "day2_lunch_nurse_rest": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "day2_lunch_nurse_rest_yuna",
                "condition": "met_yuna"
            },
            {
                "next": "day2_lunch_nurse_sleep",
                "excludeCondition": "met_yuna"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"후훗, 가끔은 그런 날도 있지. 여기 커튼 치고 편안하게 쉬렴. 그나저나... {name}한테선 기운이 넘치네. 보고만 있어도 내 몸이 다 뜨거워지는 것 같아.\"",
                "choices": [
                    "다음",
                    "다음"
                ]
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Hehe, sometimes you have days like that. Lie down comfortably here with the curtain drawn. By the way... {name}, you have such strong energy. Just looking at you makes my body feel hot.\"",
                "choices": [
                    "Next",
                    "Next"
                ]
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Jeje, a veces hay días así. Acuéstate cómodamente aquí con la cortina cerrada. Por cierto... {name}, tienes una energía muy fuerte. Solo con mirarte, mi cuerpo se acalora.\"",
                "choices": [
                    "Siguiente",
                    "Siguiente"
                ]
            },
            "ja": {
                "name": "保健先生",
                "text": "\"ふふ、そういう日もあるわよね。ここでカーテン閉めて楽に横になって。ところで…{name}、君ってすごく強い気を持ってるわね。見てるだけで体が熱くなっちゃう。\"",
                "choices": [
                    "次へ",
                    "次へ"
                ]
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Héhé, parfois on a des jours comme ça. Allonge-toi confortablement ici avec le rideau tiré. Au fait... {name}, tu as une énergie tellement intense. Rien qu'en te regardant, j'ai chaud partout.\\\"",
                "choices": [
                    "Suivant",
                    "Suivant"
                ]
            }
        }
    },
    "day2_lunch_nurse_rest_yuna": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_lunch_nurse_sleep",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*기운이 넘친다니...? 유나가 했던 말들이 떠오른다. 이 학교, 정말 뭔가가 있는 걸까?*"
            },
            "en": {
                "name": "Me",
                "text": "\"(Strong energy...? It reminds me of what Yuna said. Is there really something going on at this school?)\""
            },
            "es": {
                "name": "Yo",
                "text": "\"(¿Energía fuerte...? Me recuerda lo que dijo Yuna. ¿De verdad estará pasando algo en esta escuela?)\""
            },
            "ja": {
                "name": "僕",
                "text": "\"（強い気…？ ユナが言ってたことを思い出す。この学校、本当に何かあるのかな？）\""
            },
            "fr": {
                "name": "Moi",
                "text": "\\\"(Une énergie intense... ? Ça me rappelle ce que Yuna a dit. Il se passe vraiment quelque chose dans cette école ?)\\\""
            }
        }
    },
    "day2_lunch_nurse_sleep": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": null,
        "next": "day2_lunch_nurse_sleep_teacher",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 덮어준 이불의 온기에 나도 모르게 의식이 흐려진다. 어른 특유의 나른하고 다정한 손길이 닿았던 이마가 왠지 모르게 뜨겁다. 전학 이틀간의 피로가 한꺼번에 밀려오는 기분이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The warmth of the blanket the teacher covered me with makes my consciousness drift. The exhaustion from the past two days hits all at once.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La calidez de la manta que la profesora me cubrió hace que mi consciencia se nuble. El agotamiento de los últimos dos días me golpea de repente.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生がかけてくれた毛布の温もりで意識がぼんやりしてくる。この二日間の疲れが一気に押し寄せてきた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La chaleur de la couverture que l'infirmière m'a mise me fait perdre conscience. L'épuisement des deux derniers jours me frappe d'un coup.*"
            }
        }
    },
    "day2_lunch_nurse_sleep_teacher": {
        "background": "assets/images/background/nurse_room.jpg",
        "characters": {
            "left": "assets/images/characters/nurse_normal.png",
            "right": {
                "src": "assets/images/characters/teacher_normal.png",
                "opacity": 0.4
            }
        },
        "next": "day2_lunch_nurse_sleep_teacher_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*희미하게 선생님의 목소리가 들린다.* \"... 네, 담임 선생님. {name} 학생이 상태가 좋지 않아서 오후 수업은 좀 쉬게 했어요.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*I faintly hear the teacher's voice.* \"...Yes, homeroom teacher. The student {name} isn't feeling well so I let them skip afternoon classes.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*Escucho débilmente la voz de la profesora.* \"...Sí, profesora. El estudiante {name} no se siente bien, así que le dejé faltar a las clases de la tarde.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*うっすらと先生の声が聞こえる。* \"…はい、担任の先生。{name}さんが体調悪いので、午後の授業はお休みさせました。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*J'entends vaguement la voix de l'infirmière.* \\\"...Oui, professeur principal. L'élève {name} ne se sent pas bien alors je l'ai dispensé des cours de l'après-midi.\\\""
            }
        }
    },
    "day2_lunch_nurse_sleep_teacher_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "characters": {
            "left": "assets/images/characters/nurse_normal.png",
            "right": {
                "src": "assets/images/characters/teacher_normal.png",
                "opacity": 0.4
            }
        },
        "next": "day2_lunch_nurse_sleep_teacher_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*목소리가 살짝 낮아진다.* \"...네? 직접 데리러 오시겠다고요? 후훗, 괜찮아요. 여기는 제 영역이니까요. 제가 책임지고 잘 돌봐드릴게요.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The voice gets a bit lower.* \"...What? You want to come pick them up yourself? Hehe, it's fine. This is my domain. I'll take good care of them, I promise.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*La voz baja un poco.* \"...¿Qué? ¿Quieres venir a recogerlo tú misma? Jeje, está bien. Este es mi dominio. Lo cuidaré bien, lo prometo.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*声が少し低くなる。* \"…え？自分で迎えに来たいって？ ふふ、大丈夫よ。ここは私の領域だから。ちゃんと面倒見るから、約束。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*La voix baisse un peu.* \\\"...Quoi ? Vous voulez venir le chercher vous-même ? Héhé, c'est bon. C'est mon domaine ici. Je m'en occupe bien, promis.\\\""
            }
        }
    },
    "day2_lunch_nurse_sleep_teacher_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_lunch_nurse_sleep_end",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*전화를 끊는 소리가 들린다.* \"...후훗, 담임 선생님도 참. 자기 학생이라고 신경 쓰시는 건 좋은데... 보건실에서는 내가 법이야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*Sound of hanging up the phone.* \"...Hehe, the homeroom teacher too. It's nice that she cares about her students... but in the nurse's office, I'm the law.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*Sonido de colgar el teléfono.* \"...Jeje, la profesora también. Es lindo que se preocupe por sus estudiantes... pero en la enfermería, yo mando.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*電話を切る音。* \"…ふふ、担任の先生も。生徒思いなのは素敵だけど…保健室では、私がルールよ。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Bruit de téléphone raccroché.* \\\"...Héhé, le professeur principal aussi. C'est gentil de se soucier de ses élèves... mais à l'infirmerie, c'est moi qui commande.\\\""
            }
        }
    },
    "day2_lunch_nurse_sleep_end": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": null,
        "next": "day2_lunch_nurse_wake_1",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*...어느새 주변이 조용해졌다. 서서히 의식이 돌아오며 눈을 뜬다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...Before I know it, everything goes quiet. I slowly regain consciousness and open my eyes.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...Antes de darme cuenta, todo queda en silencio. Lentamente recupero la consciencia y abro los ojos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*…いつの間にか、全てが静かになる。ゆっくりと意識が戻ってきて、目を開ける。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Sans que je m'en rende compte, tout devient silencieux. Je reprends lentement conscience et j'ouvre les yeux.*"
            }
        }
    },
    "day2_lunch_nurse_wake_1": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": null,
        "sunset": true,
        "next": "day2_lunch_nurse_wake_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*창밖은 어느새 이글거리는 주황빛 노을로 가득하다. 점심시간에 잠들었는데 벌써 방과 후라니... 얼마나 깊게 잠들었던 걸까.*"
            },
            "en": {
                "name": "Me",
                "text": "*Outside the window, the sky is already filled with blazing orange sunset. I fell asleep during lunch and it's already after school... How deeply did I sleep.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Por la ventana, el cielo ya está lleno del naranja ardiente del atardecer. Me dormí en el almuerzo y ya pasaron las clases... ¿Qué tan profundamente dormí?*"
            },
            "ja": {
                "name": "僕",
                "text": "*窓の外は、もう燃えるようなオレンジ色の夕焼け空だ。お昼に寝たはずなのに、もう放課後…どれだけ深く寝てたんだろう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Par la fenêtre, le ciel est déjà embrasé d'un orange flamboyant. Je me suis endormi pendant le déjeuner et c'est déjà la fin des cours... J'ai dormi si profondément.*"
            }
        }
    },
    "day2_lunch_nurse_wake_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "nurse_wake_free_talk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"(선생님이 부드러운 미소를 띤다.) 어머, 이제 일어났니? 정말 달게 자더구나. 오후 수업은 담임 선생님한테 미리 말씀드려뒀으니까 걱정 마. 이제 곧 하교 시간이야. 몸은 좀 어때?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"(The teacher smiles softly.) Oh my, you're awake? You slept so soundly. I already notified your homeroom teacher about the afternoon classes, so don't worry. It's almost time to go home. How are you feeling?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"(La profesora sonríe suavemente.) Ara, ¿despertaste? Dormiste muy profundamente. Ya le avisé a tu profesora sobre las clases de la tarde, así que no te preocupes. Ya casi es hora de ir a casa. ¿Cómo te sientes?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"（先生が柔らかく微笑む。）あら、起きた？ぐっすり寝てたわね。午後の授業のことは担任の先生に連絡済みだから安心して。もうそろそろ下校の時間よ。体調はどう？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"(L'infirmière sourit doucement.) Oh, tu es réveillé ? Tu as dormi comme un loir. J'ai déjà prévenu ton professeur principal pour les cours de l'après-midi, alors ne t'inquiète pas. C'est bientôt l'heure de rentrer. Comment tu te sens ?\\\""
            }
        }
    },
    "nurse_wake_free_talk": {
        "type": "free_talk",
        "background": "assets/images/background/nurse_room.jpg",
        "extra_guideline": "성숙한 어른으로서 주인공을 대놓고 유혹하며 아슬아슬한 분위기를 조성하세요. 사용자의 성인용 농담이나 도발적인 발언(섹드립 등)에도 당황하지 않고 여유롭게 받아치며, 오히려 주인공을 더 당황하게 만들 정도로 대담하고 도발적인 반응을 보이세요. 성숙한 매력을 한껏 발산하며 로맨틱한 긴장감을 최고치로 끌어올리세요.",
        "character": "assets/images/characters/nurse_normal.png",
        "affinityChar": "Nurse",
        "affinityBranches": [
            {
                "minAffinity": 40,
                "next": "nurse_contact_exchange_high"
            },
            {
                "minAffinity": 0,
                "next": "nurse_contact_exchange"
            },
            {
                "minAffinity": -100,
                "next": "nurse_contact_exchange_low"
            }
        ],
        "next": "nurse_contact_exchange",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"후훗, 아직 잠이 덜 깼네. 집에 가기 전에 나랑 좀 더 이야기할래?\"",
                "context": "노을이 지는 보건실, 방금 잠에서 깨어난 주인공과 보건선생님이 단둘이 남겨진 상황입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 보건선생님이 주인공에게 연락처를 알려주거나 밤에 연락하라고 유혹하는 상황으로 이어집니다. 대화의 마지막 턴에만 하교 시간이 다 되었음을 알리며 아쉬운 분위기를 연출하거나, 개인적인 연락을 유도하는 발언을 해주세요.",
                "personality": "나른하고 섹시하면서도 다정한 보건선생님. 주인공에게 묘한 매력을 느끼며 대담하게 유혹하는 대범한 성격."
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Hehe, you still look sleepy. Want to chat with me a bit before going home?\"",
                "context": "In the nurse's office at sunset, the protagonist just woke up and is alone with the nurse. Keep the conversation going actively until it's finished. After the conversation, the nurse will offer her number and tease about contacting her at night. ONLY at the final turn, hint that it's time to go home or suggest private contact.",
                "personality": "Languid and seductive yet caring school nurse. Feels a peculiar attraction to the protagonist and boldly flirts with daring confidence."
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Jeje, todavía te ves somnoliento. ¿Quieres platicar conmigo un rato antes de ir a casa?\"",
                "context": "En la enfermería al atardecer, el protagonista acaba de despertar y está solo con la enfermera. Mantén la conversación activa hasta que termine. Después de la conversación, la enfermera ofrecerá su número y bromeará sobre contactarla de noche. SOLO en el último turno, insinúa que es hora de ir a casa o sugiere contacto privado.",
                "personality": "Enfermera escolar lánguida y seductora pero cariñosa. Siente una atracción peculiar por el protagonista y coquetea audazmente con atrevida confianza."
            },
            "ja": {
                "name": "保健先生",
                "text": "\"ふふ、まだ眠そうね。帰る前に少しおしゃべりする？\"",
                "context": "夕暮れの保健室で、主人公が目覚めたばかりで養護教諭と二人きり。会話が終わるまで積極的に続けてください。会話の後、養護教諭は自分の番号を教えて、夜に連絡してねとからかいます。最後のターンでのみ、帰る時間であることをほのめかすか、プライベートな連絡を提案してください。",
                "personality": "けだるく色っぽいが面倒見の良い養護教諭。主人公に独特の魅力を感じ、大胆に自信を持ってフリートする。"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Héhé, tu as encore l'air endormi. Tu veux discuter un peu avec moi avant de rentrer ?\\\"",
                "context": "Dans l'infirmerie au coucher du soleil, le protagoniste vient de se réveiller et est seul avec l'infirmière. Continuez activement la conversation jusqu'à ce qu'elle soit terminée. Après la conversation, l'infirmière proposera son numéro et taquinera au sujet d'un contact nocturne. UNIQUEMENT au dernier tour, suggérez qu'il est l'heure de rentrer ou proposez un contact privé.",
                "personality": "Infirmière scolaire langoureuse et séduisante mais attentionnée. Ressent une attirance particulière pour le protagoniste et flirte audacieusement avec assurance."
            }
        }
    },
    "nurse_contact_exchange_high": {
        "character": "assets/images/characters/nurse_normal.png",
        "branches": [
            {
                "next": "nurse_contact_already_have_high",
                "condition": "has_number_nurse"
            },
            {
                "next": "nurse_contact_ask_high"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님이 장난스러우면서도 유혹적인 미소로 나를 바라본다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The nurse looks at me with a playful yet seductive smile.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La enfermera me mira con una sonrisa juguetona pero seductora.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生がいたずらっぽくも色っぽい笑顔で僕を見る。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*L'infirmière me regarde avec un sourire à la fois espiègle et séduisant.*"
            }
        }
    },
    "nurse_contact_exchange_low": {
        "character": "assets/images/characters/nurse_normal.png",
        "branches": [
            {
                "next": "nurse_contact_already_have_low",
                "condition": "has_number_nurse"
            },
            {
                "next": "nurse_contact_ask_low"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님이 조금은 피곤한 기색으로 나를 바라본다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The nurse looks at me with a somewhat tired expression.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La enfermera me mira con una expresión algo cansada.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生がやや疲れた表情で僕を見る。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*L'infirmière me regarde avec une expression un peu fatiguée.*"
            }
        }
    },
    "nurse_contact_already_have_high": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_afternoon_nurse_skip"
            },
            {
                "next": "nurse_contact_home_fail_high",
                "affinityChar": "Nurse",
                "affinityBranches": [
                    {
                        "minAffinity": 40,
                        "next": "nurse_contact_home_success_high"
                    }
                ]
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님은 이미 번호를 교환했다는 사실을 상기시키며 내 귓가에 속삭였다. 오늘 밤 내 목소리가 듣고 싶을 것 같다며, 꼭 연락하라는 당부를 남겼다.*",
                "choices": [
                    "네, 그럴게요.",
                    "번호 말고... 오늘 밤 선생님 집으로 가면 안 돼요?"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The teacher reminded me we already exchanged numbers and whispered in my ear. She said she'll want to hear my voice tonight, so I should definitely contact her.*",
                "choices": [
                    "Yes, I will.",
                    "Instead of just a call... can I come to your house tonight?"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La profesora me recordó que ya intercambiamos números y me susurró al oído. Dijo que querrá escuchar mi voz esta noche, así que definitivamente debería contactarla.*",
                "choices": [
                    "Sí, lo haré.",
                    "En vez de solo una llamada... ¿puedo ir a tu casa esta noche?"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*先生がもう連絡先を交換してることを思い出させて、耳元でささやいた。今夜は君の声が聞きたくなるから、絶対連絡してねって。*",
                "choices": [
                    "はい、します。",
                    "電話だけじゃなくて…今夜、家に行ってもいい？"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*L'infirmière m'a rappelé qu'on avait déjà échangé nos numéros et m'a chuchoté à l'oreille. Elle a dit qu'elle voudra entendre ma voix ce soir, alors je devrais absolument la contacter.*",
                "choices": [
                    "Oui, c'est promis.",
                    "Au lieu d'un simple appel... je peux venir chez vous ce soir ?"
                ]
            }
        }
    },
    "nurse_contact_already_have_low": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_afternoon_nurse_skip"
            },
            {
                "next": "nurse_contact_home_fail_low",
                "affinityChar": "Nurse",
                "affinityBranches": [
                    {
                        "minAffinity": 40,
                        "next": "nurse_contact_home_success_low"
                    }
                ]
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님은 이미 번호를 교환했지만, 내 무례한 태도 때문에 연락하지 않는 게 나을지도 모르겠다며 차갑게 말했다. 그리고는 이제 그만 가보라며 나를 배웅했다.*",
                "choices": [
                    "네, 그럴게요.",
                    "번호 말고... 오늘 밤 선생님 집으로 가면 안 돼요?"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The teacher said we already exchanged numbers, but given my rude behavior, it might be better not to contact her. She coldly told me to leave.*",
                "choices": [
                    "Yes, I will.",
                    "Instead of just a call... can I come to your house tonight?"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La profesora dijo que ya intercambiamos números, pero dado mi comportamiento grosero, sería mejor no contactarla. Me dijo fríamente que me fuera.*",
                "choices": [
                    "Sí, lo haré.",
                    "En vez de solo una llamada... ¿puedo ir a tu casa esta noche?"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*先生がもう連絡先は交換済みだけど、失礼な態度を考えると連絡しない方がいいかもと言った。冷たく帰るように言われた。*",
                "choices": [
                    "はい、します。",
                    "電話だけじゃなくて…今夜、家に行ってもいい？"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*L'infirmière a dit qu'on avait déjà échangé nos numéros, mais vu mon comportement impoli, il vaudrait mieux ne pas la contacter. Elle m'a froidement dit de partir.*",
                "choices": [
                    "Oui, c'est promis.",
                    "Au lieu d'un simple appel... je peux venir chez vous ce soir ?"
                ]
            }
        }
    },
    "nurse_contact_ask_high": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "nurse_contact_success_high",
                "setFlags": [
                    "has_number_nurse",
                    "has_any_contact"
                ]
            },
            {
                "next": "nurse_contact_home_fail_high",
                "affinityChar": "Nurse",
                "affinityBranches": [
                    {
                        "minAffinity": 40,
                        "next": "nurse_contact_home_success_high"
                    }
                ]
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님은 나와 더 이야기하고 싶다며 내 손을 살며시 잡았다. 밤에 잠이 안 오면 연락하라며 자신의 번호를 알려주겠다고 제안했다.*",
                "choices": [
                    "네, 알고 싶어요.",
                    "번호 말고... 선생님 집으로 가면 안 돼요?"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The teacher said she wants to talk with me more and gently held my hand. She offered to give me her number for when I can't sleep at night.*",
                "choices": [
                    "Yes, I want to know.",
                    "Instead of just a number... can I come to your house?"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La profesora dijo que quiere hablar más conmigo y gentilmente tomó mi mano. Se ofreció a darme su número para cuando no pueda dormir de noche.*",
                "choices": [
                    "Sí, quiero saberlo.",
                    "En vez de solo un número... ¿puedo ir a tu casa?"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*先生がもっと話したいと言って、そっと僕の手を握った。夜眠れない時のために番号を教えてあげると言ってくれた。*",
                "choices": [
                    "はい、知りたいです。",
                    "番号だけじゃなくて…お家に行ってもいい？"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*L'infirmière a dit qu'elle voulait encore discuter avec moi et m'a doucement pris la main. Elle m'a proposé de me donner son numéro pour quand je n'arrive pas à dormir la nuit.*",
                "choices": [
                    "Oui, je veux bien.",
                    "Au lieu d'un simple numéro... je peux venir chez vous ?"
                ]
            }
        }
    },
    "nurse_contact_ask_low": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "nurse_contact_success_low",
                "setFlags": [
                    "has_number_nurse",
                    "has_any_contact"
                ]
            },
            {
                "next": "nurse_contact_home_fail_low",
                "affinityChar": "Nurse",
                "affinityBranches": [
                    {
                        "minAffinity": 40,
                        "next": "nurse_contact_home_success_low"
                    }
                ]
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님은 내가 정말 손이 많이 가는 학생이라며 한숨을 내쉬었다. 비상시를 위해 번호는 알려주겠지만, 장난칠 생각은 하지 말라며 엄포를 놓았다.*",
                "choices": [
                    "네, 알고 싶어요.",
                    "번호 말고... 선생님 집으로 가면 안 돼요?"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The teacher sighed saying I'm a handful. She said she'll give me her number for emergencies, but warned me not to play pranks.*",
                "choices": [
                    "Yes, I want to know.",
                    "Instead of just a number... can I come to your house?"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La profesora suspiró diciendo que soy un caso difícil. Dijo que me daría su número para emergencias, pero me advirtió que no hiciera travesuras.*",
                "choices": [
                    "Sí, quiero saberlo.",
                    "En vez de solo un número... ¿puedo ir a tu casa?"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*先生が手のかかる子ねとため息をついた。緊急用に番号を教えてあげるけど、いたずらしないでって釘を刺された。*",
                "choices": [
                    "はい、知りたいです。",
                    "番号だけじゃなくて…お家に行ってもいい？"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*L'infirmière a soupiré en disant que je suis un cas difficile. Elle a dit qu'elle me donnerait son numéro pour les urgences, mais m'a prévenu de ne pas faire de bêtises.*",
                "choices": [
                    "Oui, je veux bien.",
                    "Au lieu d'un simple numéro... je peux venir chez vous ?"
                ]
            }
        }
    },
    "nurse_contact_exchange": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "branches": [
            {
                "next": "nurse_contact_already_have",
                "condition": "has_number_nurse"
            },
            {
                "next": "nurse_contact_ask"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님이 나를 바라보며 입을 연다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The nurse looks at me and speaks.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La enfermera me mira y habla.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生が僕を見て話し始める。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*L'infirmière me regarde et prend la parole.*"
            }
        }
    },
    "nurse_contact_already_have": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_afternoon_nurse_skip"
            },
            {
                "next": "nurse_contact_home_fail",
                "affinityChar": "Nurse",
                "affinityBranches": [
                    {
                        "minAffinity": 40,
                        "next": "nurse_contact_home_success"
                    }
                ]
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님은 이미 번호를 교환했다는 사실을 상기시키며 몸을 살짝 기울여 속삭였다. 밤에 심심하면 꼭 연락하라며 기다리겠다고 말했다.*",
                "choices": [
                    "네, 그럴게요.",
                    "번호 말고... 오늘 밤 선생님 집으로 가면 안 돼요?"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The teacher reminded me we already exchanged numbers and leaned in to whisper. She said she'll be waiting, so definitely contact her if I'm bored at night.*",
                "choices": [
                    "Yes, I will.",
                    "Instead of just a call... can I come to your house tonight?"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La profesora me recordó que ya intercambiamos números y se acercó para susurrar. Dijo que estará esperando, así que definitivamente debería contactarla si me aburro de noche.*",
                "choices": [
                    "Sí, lo haré.",
                    "En vez de solo una llamada... ¿puedo ir a tu casa esta noche?"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*先生がもう連絡先は交換済みだと耳元でささやいた。待ってるから、夜暇だったら絶対連絡してねって。*",
                "choices": [
                    "はい、します。",
                    "電話だけじゃなくて…今夜、家に行ってもいい？"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*L'infirmière m'a rappelé qu'on avait déjà échangé nos numéros et s'est penchée pour murmurer. Elle a dit qu'elle attendrait, alors je devrais absolument la contacter si je m'ennuie la nuit.*",
                "choices": [
                    "Oui, c'est promis.",
                    "Au lieu d'un simple appel... je peux venir chez vous ce soir ?"
                ]
            }
        }
    },
    "nurse_contact_ask": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "nurse_contact_success",
                "setFlags": [
                    "has_number_nurse",
                    "has_any_contact"
                ]
            },
            {
                "next": "nurse_contact_home_fail",
                "affinityChar": "Nurse",
                "affinityBranches": [
                    {
                        "minAffinity": 40,
                        "next": "nurse_contact_home_success"
                    }
                ]
            },
            {
                "next": "nurse_contact_fail",
                "stats": {
                    "Nurse": {
                        "affinity": -15
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님은 몸을 살짝 기울여 속삭이며, 밤에 잠이 안 오면 연락하라며 자신의 번호를 알려주겠다고 제안했다.*",
                "choices": [
                    "네, 알고 싶어요.",
                    "번호 말고... 선생님 집으로 가면 안 돼요?",
                    "아, 괜찮아요."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The teacher leaned in to whisper, offering her number for when I can't sleep at night.*",
                "choices": [
                    "Yes, I want to know.",
                    "Instead of just a number... can I come to your house?",
                    "Ah, I'm okay."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La profesora se acercó para susurrar, ofreciéndome su número para cuando no pueda dormir de noche.*",
                "choices": [
                    "Sí, quiero saberlo.",
                    "En vez de solo un número... ¿puedo ir a tu casa?",
                    "Ah, estoy bien."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*先生が耳元でささやいて、夜眠れない時のために番号を教えてくれると言った。*",
                "choices": [
                    "はい、知りたいです。",
                    "番号だけじゃなくて…お家に行ってもいい？",
                    "あ、大丈夫です。"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*L'infirmière s'est penchée pour murmurer, me proposant son numéro pour les nuits où je n'arrive pas à dormir.*",
                "choices": [
                    "Oui, je veux bien.",
                    "Au lieu d'un simple numéro... je peux venir chez vous ?",
                    "Ah, ça va aller."
                ]
            }
        }
    },
    "nurse_contact_success_high": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 15
            }
        },
        "next": "day2_afternoon_nurse_skip",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*그녀가 내 손등에 자신의 번호를 적어주며 윙크한다.* \"후훗, 자 이 번호... 잃어버리면 안 돼? 오늘 밤, 네가 어떤 메시지를 보낼지 벌써부터 기대되네.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*She writes her number on the back of my hand and winks.* \"Hehe, this number... don't lose it, okay? I'm already looking forward to what message you'll send tonight.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*Escribe su número en el dorso de mi mano y guiña un ojo.* \"Jeje, este número... no lo pierdas, ¿de acuerdo? Ya estoy ansiosa por ver qué mensaje me enviarás esta noche.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*僕の手の甲に番号を書いてウインクする。* \"ふふ、この番号…なくさないでね？ 今夜どんなメッセージが来るか、もう楽しみ。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Elle écrit son numéro sur le dos de ma main et fait un clin d'œil.* \\\"Héhé, ce numéro... ne le perds pas, d'accord ? J'ai déjà hâte de voir quel message tu m'enverras ce soir.\\\""
            }
        }
    },
    "nurse_contact_success_low": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day2_afternoon_nurse_skip",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"...자 여기. 비상시에만 써. 새벽에 헛소리 보냈다간 바로 차단할 테니까 조심하고.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Here. Only for emergencies. If you send nonsense at dawn, I'll block you immediately, so be careful.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...Toma. Solo para emergencias. Si me envías tonterías de madrugada, te bloqueo inmediatamente, así que ten cuidado.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…はい。緊急用だけよ。夜中にくだらないメッセージ送ったら即ブロックするから、気をつけて。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...Tiens. Uniquement pour les urgences. Si tu m'envoies des bêtises à l'aube, je te bloque immédiatement, alors fais attention.\\\""
            }
        }
    },
    "nurse_contact_success": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 18
            }
        },
        "next": "day2_afternoon_nurse_skip",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*그녀가 요염하게 웃으며 번호를 저장한다.* \"후훗, 그럼 나중에 밤에 기다릴게? 답장 늦게 하면 삐질지도 몰라.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*She smiles seductively and saves the number.* \"Hehe, then I'll be waiting for you at night? If you're slow to reply, I might get upset.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*Sonríe seductoramente y guarda el número.* \"Jeje, entonces te espero esta noche. Si tardas en responder, puede que me enoje.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*色っぽく微笑んで番号を保存する。* \"ふふ、じゃあ夜に待ってるわね？ 返信遅かったら拗ねちゃうかも。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Elle sourit de manière séduisante et enregistre le numéro.* \\\"Héhé, alors je t'attendrai ce soir ? Si tu mets du temps à répondre, je risque de bouder.\\\""
            }
        }
    },
    "nurse_contact_home_success_high": {
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 20
            }
        },
        "setFlags": [
            "has_number_nurse",
            "has_any_contact",
            "invited_nurse_home"
        ],
        "next": "day2_afternoon_nurse_skip",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*그녀가 내 목을 감싸 안으며 귓가에 뜨거운 숨결을 내뱉는다.* \"어머... {name}. 정말 참을성이 없구나? 좋아, 오늘 밤... 선생님 비밀의 방으로 널 초대할게. 단둘이서... 아주 깊은 이야기를 나눠보자.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*She wraps her arms around my neck and breathes hotly in my ear.* \"My... {name}. You really have no patience, do you? Alright, tonight... I'll invite you to my secret room. Just the two of us... let's have a very deep conversation.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*Me rodea el cuello con los brazos y respira cálidamente en mi oído.* \"Vaya... {name}. Realmente no tienes paciencia, ¿verdad? Está bien, esta noche... te invitaré a mi habitación secreta. Solo nosotros dos... tengamos una conversación muy profunda.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*僕の首に腕を回して、耳元に熱い息をかける。* \"あら…{name}。本当にせっかちね。いいわ、今夜…私の秘密の部屋に招待してあげる。二人きりで…とても深い話をしましょう。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Elle passe ses bras autour de mon cou et souffle chaudement à mon oreille.* \\\"Mon Dieu... {name}. Tu n'as vraiment aucune patience, hein ? D'accord, ce soir... je t'invite dans ma chambre secrète. Rien que nous deux... ayons une conversation très intime.\\\""
            }
        }
    },
    "nurse_contact_home_success_low": {
        "character": "assets/images/characters/nurse_angry.png",
        "stats": {
            "Nurse": {
                "affinity": -10
            }
        },
        "setFlags": [
            "has_number_nurse",
            "has_any_contact"
        ],
        "next": "day2_afternoon_nurse_skip",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"...너 지금 제정신이니? 어디서 감히 선생님한테 그런 농담을... 오늘 당장 반성문 써와. 번호는 알려주겠지만, 집 근처엔 얼신도 하지 마.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Are you in your right mind? How dare you make such a joke to a teacher... Write a reflection today. I'll give you my number, but don't even think about coming near my house.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...¿Estás en tus cabales? ¿Cómo te atreves a hacerle esa broma a una profesora? Escribe una reflexión hoy. Te daré mi número, pero ni se te ocurra acercarte a mi casa.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…正気？先生に向かってそんな冗談を言うなんて…今日反省文を書いて。番号は教えるけど、家には近づかないで。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"...Tu es sérieux là ? Comment oses-tu faire une telle plaisanterie à une enseignante... Écris une réflexion aujourd'hui. Je te donne mon numéro, mais ne t'avise même pas de t'approcher de chez moi.\\\""
            }
        }
    },
    "nurse_contact_home_success": {
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 15
            }
        },
        "setFlags": [
            "has_number_nurse",
            "has_any_contact",
            "invited_nurse_home"
        ],
        "next": "day2_afternoon_nurse_skip",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 눈을 크게 뜨더니, 이내 요염한 미소를 지으며 내 귓가에 속삭인다.* \"어머... {name}, 생각보다 훨씬 대담하네? 좋아, 오늘 밤 우리 집으로 올래? 주소 찍어줄게. 대신... 부모님께는 비밀이야?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher's eyes widen, then she gives a seductive smile and whispers in my ear.* \"My... {name}, you're much bolder than I thought? Alright, want to come to my house tonight? I'll give you the address. But... it's our secret from your parents?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*Los ojos de la profesora se abren de par en par, luego da una sonrisa seductora y me susurra al oído.* \"Vaya... {name}, eres mucho más atrevido de lo que pensaba. Está bien, ¿quieres venir a mi casa esta noche? Te doy la dirección. Pero... es nuestro secreto, ¿de acuerdo?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生が目を見開いた後、色っぽく微笑んで耳元でささやく。* \"あら…{name}、思ったよりずっと大胆ね。いいわ、今夜私の家に来る？住所教えてあげる。でも…親には内緒よ？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Les yeux de l'infirmière s'écarquillent, puis elle affiche un sourire séduisant et me chuchote à l'oreille.* \\\"Mon Dieu... {name}, tu es bien plus audacieux que je ne le pensais. D'accord, tu veux venir chez moi ce soir ? Je te donne l'adresse. Mais... c'est un secret entre nous, pas un mot à tes parents, hein ?\\\""
            }
        }
    },
    "nurse_contact_home_fail_high": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlags": [
            "has_number_nurse",
            "has_any_contact"
        ],
        "next": "day2_afternoon_nurse_skip",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 내 뺨을 살짝 꼬집으며 웃는다.* \"후훗, 정말 적극적이네! 하지만 오늘은 선생님도 준비가 좀 필요해서... 일단 번호로 아쉬움을 달래보자?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher lightly pinches my cheek and laughs.* \"Hehe, you're really forward! But the teacher needs some preparation today too... Let's settle for the number for now?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*La profesora me pellizca suavemente la mejilla y ríe.* \"Jeje, ¡eres muy directo! Pero la profesora también necesita algo de preparación hoy... ¿Conformémonos con el número por ahora?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生が軽く頬をつねって笑う。* \"ふふ、本当に積極的ね！でも先生も今日は準備が必要だから…まずは番号だけにしておかない？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*L'infirmière me pince légèrement la joue en riant.* \\\"Héhé, tu es vraiment direct ! Mais j'ai besoin de me préparer aussi aujourd'hui... Contentons-nous du numéro pour l'instant, d'accord ?\\\""
            }
        }
    },
    "nurse_contact_home_fail_low": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_angry.png",
        "next": "day2_afternoon_nurse_skip",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"말조심해. 한 번만 더 그런 소리 하면 보건실 근처에도 못 오게 할 거야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Watch your mouth. Say that one more time and I'll ban you from the nurse's office.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Cuida tu boca. Dilo una vez más y te prohíbo la entrada a la enfermería.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"口を慎みなさい。もう一回言ったら保健室出入り禁止にするわよ。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\\\"Surveille ton langage. Redis ça une seule fois et je t'interdis l'accès à l'infirmerie.\\\""
            }
        }
    },
    "nurse_contact_home_fail": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlags": [
            "has_number_nurse",
            "has_any_contact"
        ],
        "next": "day2_afternoon_nurse_skip",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 꺄르르 웃음을 터뜨린다.* \"어머나 {name}! 넌 정말 귀엽다. 하지만 우리 집은 아직 좀 이른 것 같네? 일단 번호부터 교환하자.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher bursts into giggles.* \"My goodness {name}! You're so cute. But my house is a bit early, don't you think? Let's exchange numbers first.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*La profesora estalla en risitas.* \"¡Dios mío, {name}! Eres tan lindo. Pero mi casa es un poco pronto, ¿no crees? Intercambiemos números primero.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生がクスクス笑う。* \"もう、{name}！可愛いんだから。でも家はまだ早くない？まずは番号交換からにしましょ。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*L'infirmière éclate de rire.* \\\"Mon Dieu, {name} ! Tu es trop mignon. Mais venir chez moi, c'est un peu tôt, tu ne trouves pas ? Échangeons d'abord nos numéros.\\\""
            }
        }
    },
    "nurse_contact_fail": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_afternoon_nurse_skip",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 조금 아쉬운 듯 입술을 삐죽인다.* \"쳇... 튕기는 거야? 알았어. 나중에 마음 바뀌면 말해줘.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher pouts a bit.* \"Tch... Playing hard to get? Alright. Tell me if you change your mind.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*La profesora hace un pequeño puchero.* \"Tch... ¿Haciéndote el difícil? Está bien. Dime si cambias de opinión.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生が少し頬を膨らませる。* \"ちぇ…焦らすのね。わかった。気が変わったら言ってね。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*L'infirmière fait une petite moue.* \\\"Tch... Tu joues les inaccessibles ? D'accord. Dis-moi si tu changes d'avis.\\\""
            }
        }
    }
});
