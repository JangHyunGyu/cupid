/**
 * ============================================================================
 * CUPID - day1_3_afterschool (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day1_3_afterschool.js + en_day1_3_afterschool.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[1]) SCENARIO[1] = {};

Object.assign(SCENARIO[1], {
    "after_school_start": {
        "background": "assets/images/background/room_school.png",
        "bgm": "sunset1.mp3",
        "character": null,
        "sunset": true,
        "next": "after_school_start_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*수업 끝. 붉게 물든 노을이 창가로 스며든다. 오늘은 좀 특별한 하루였어.*"
            },
            "en": {
                "name": "Me",
                "text": "*School's over. The crimson sunset seeps through the window. It was a rather special day today.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Se acabaron las clases. El atardecer carmesí se filtra por la ventana. Fue un día bastante especial.*"
            },
            "ja": {
                "name": "僕",
                "text": "*授業が終わった。真っ赤な夕焼けが窓から差し込んでくる。今日はなかなか特別な一日だったな。*"
            }
        }
    },
    "after_school_start_2": {
        "background": "assets/images/background/room_school.png",
        "sunset": true,
        "next": "after_school_start_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*가방을 챙기는데 왠지 아쉬움이 남는다. 누군가를 더 보고 싶기도 하고...*"
            },
            "en": {
                "name": "Me",
                "text": "*As I pack my bag, I feel a sense of regret. I kind of want to see someone more...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mientras guardo mis cosas, siento algo de nostalgia. Quisiera ver a alguien más...*"
            },
            "ja": {
                "name": "僕",
                "text": "*カバンを片付けながら、なんだか名残惜しい気持ちになる。もう少し誰かに会いたいような...*"
            }
        }
    },
    "after_school_start_3": {
        "background": "assets/images/background/room_school.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_seoyeon"
            },
            {
                "next": "after_yuna",
                "condition": "met_yuna"
            },
            {
                "next": "after_yuna_new",
                "excludeCondition": "met_yuna"
            },
            {
                "next": "after_dain",
                "condition": "met_dain"
            },
            {
                "next": "after_dain_new",
                "excludeCondition": "met_dain"
            },
            {
                "next": "after_nurse",
                "condition": "met_nurse"
            },
            {
                "next": "after_nurse_new",
                "excludeCondition": "met_nurse"
            },
            {
                "next": "after_teacher"
            },
            {
                "next": "after_home"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이제 어떡할까? 이대로 집에 가기엔 날씨가 너무 좋잖아.*",
                "choices": [
                    "은은한 복도 끝, 학생회실의 서연이를 찾아간다.",
                    "책 냄새 가득한 도서실, 유나를 만나러 간다.",
                    "도서관 별관 쪽을 한번 둘러본다.",
                    "활기가 넘치는 체육관, 다인을 확인한다.",
                    "시끌벅적한 체육관 쪽으로 가본다.",
                    "코끝을 찌르는 소독약 냄새, 보건실로 향한다.",
                    "보건실 쪽이 왠지 궁금해진다.",
                    "인자한 담임선생님이 계신 교무실로 간다.",
                    "오늘은 이만, 집으로 발길을 옮긴다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*What should I do? The sunset is too beautiful to just head home.*",
                "choices": [
                    "Go to the student council room to see Seoyeon.",
                    "Go to the library to see Yuna.",
                    "Take a look around the library annex.",
                    "Go to the gym to check on Dain.",
                    "Head towards the noisy gymnasium.",
                    "Go to the nurse's office.",
                    "Explore the nurse's office.",
                    "Go to the faculty room to see the teacher.",
                    "That's it for today, I'm heading home."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¿Qué debería hacer? El atardecer es demasiado bonito como para ir a casa así nada más.*",
                "choices": [
                    "Ir a la sala del consejo estudiantil a ver a Seoyeon.",
                    "Ir a la biblioteca a ver a Yuna.",
                    "Echar un vistazo al anexo de la biblioteca.",
                    "Ir al gimnasio a ver a Dain.",
                    "Ir hacia el ruidoso gimnasio.",
                    "Ir a la enfermería.",
                    "Explorar la enfermería.",
                    "Ir a la sala de profesores a ver a la profesora.",
                    "Por hoy es suficiente, me voy a casa."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*どうしようかな？この夕焼けを見たら、まっすぐ家に帰るのはもったいない。*",
                "choices": [
                    "ほのかな廊下の奥、生徒会室のソヨンに会いに行く。",
                    "本の香りが漂う図書室、ユナに会いに行く。",
                    "図書館の別館を覗いてみる。",
                    "活気あふれる体育館、ダインを見に行く。",
                    "賑やかな体育館の方へ行ってみる。",
                    "消毒液の匂いがする保健室に向かう。",
                    "保健室の方がなんだか気になる。",
                    "優しい担任先生のいる職員室に行く。",
                    "今日はここまで、家に帰ろう。"
                ]
            }
        }
    },
    "after_teacher": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "after_teacher_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교무실 문을 열자, 서류를 정리하고 계신 담임선생님이 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I open the faculty room door. My teacher is organizing documents alone.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Abro la puerta de la sala de profesores. Mi profesora está organizando documentos sola.*"
            },
            "ja": {
                "name": "僕",
                "text": "*職員室のドアを開けると、書類を整理している担任先生の姿が見える。*"
            }
        }
    },
    "after_teacher_2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "after_teacher_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"어머, {name} 아니니? 이 시간에 교무실엔 어쩐 일이야?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Oh, {name}! What brings you here so late?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"¡Oh, {name}! ¿Qué te trae por aquí a esta hora?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"あら、{name}じゃない？こんな時間に職員室にどうしたの？\""
            }
        }
    },
    "after_teacher_3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_teacher_help",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "after_teacher_miss",
                "stats": {
                    "Teacher": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "after_teacher_info",
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
                "text": "\"전학 첫날이라 궁금한 게 많은 모양이구나. 선생님이 도와줄 수 있는 게 있을까?\"",
                "choices": [
                    "선생님은 언제 퇴근하세요? 혼자 계시면 적적하실 텐데 제가 도와드릴까요?",
                    "일하시는 모습이 너무 멋져서... 한 번 더 뵙고 싶었어요.",
                    "학교 시설에 대해 궁금해서요. 선생님만의 비밀 장소가 있을까요?"
                ]
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"You must have many questions since it's your first day. Is there anything on your mind?\"",
                "choices": [
                    "When are you leaving? I'd love to help.",
                    "I just wanted to see you again before I left.",
                    "Any secret spots in this school?"
                ]
            },
            "es": {
                "name": "Profesora",
                "text": "\"Debes tener muchas preguntas ya que es tu primer día. ¿Hay algo en lo que pueda ayudarte?\"",
                "choices": [
                    "¿Cuándo se va? Si está sola, me encantaría ayudarla.",
                    "Solo quería verla una vez más antes de irme.",
                    "¿Hay algún lugar secreto en esta escuela?"
                ]
            },
            "ja": {
                "name": "担任先生",
                "text": "\"転校初日だから気になることも多いでしょう。先生に何か手伝えることはあるかな？\"",
                "choices": [
                    "先生はいつ帰るんですか？一人だと寂しいでしょうし、手伝いましょうか？",
                    "仕事してる姿がかっこよくて...もう一度会いたくなったんです。",
                    "学校の施設が気になって。先生だけの秘密の場所ってありますか？"
                ]
            }
        }
    },
    "after_teacher_help": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "after_teacher_contact",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"후훗, 마음만으로도 고마워. 하지만 이건 선생님이 해야 할 일인걸. {name}은 얼른 집에 가서 쉬렴.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Hehe, that's sweet of you. But this is my job. You should go home and rest, {name}.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Jeje, qué dulce de tu parte. Pero este es mi trabajo. Deberías ir a casa a descansar, {name}.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"ふふ、気持ちだけでもありがたいわ。でもこれは先生のお仕事だから。{name}は早くお家に帰って休みなさい。\""
            }
        }
    },
    "after_teacher_miss": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "after_teacher_contact",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"어머... {name}, 정말 못 말리겠네. 선생님을 그렇게 좋아해 주니 기쁘긴 하지만... 후훗.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Oh my... you're really something. It's a bit embarrassing, but I'm glad you came... Hehe.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Ay... {name}, de verdad eres un caso. Es un poco vergonzoso, pero me alegra que hayas venido... Jeje.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"あらまあ...{name}、本当にしょうがない子ね。先生をそんなに好いてくれるのは嬉しいけど...ふふ。\""
            }
        }
    },
    "after_teacher_info": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "after_teacher_contact",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"그래, 우리 학교는 역사가 깊어서 숨겨진 곳이 많단다. 나중에 선생님이 천천히 안내해줄게.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"This school has a long history. There are many hidden places. I'll show you around sometime.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Sí, nuestra escuela tiene una larga historia y muchos lugares escondidos. La profesora te los mostrará poco a poco.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"そうね、うちの学校は歴史が深くて隠れた場所がたくさんあるの。今度先生がゆっくり案内してあげるわ。\""
            }
        }
    },
    "after_teacher_contact": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "branches": [
            {
                "next": "after_home",
                "condition": "has_number_teacher"
            },
            {
                "next": "after_teacher_contact_ask"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"아, 맞다. 혹시 급한 일 생기면 연락하렴. 선생님 번호 알려줄게.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Oh, by the way. Contact me if anything urgent comes up. Let me give you my number.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Ah, es verdad. Si surge algo urgente, contáctame. Te daré mi número.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"あ、そうだ。もし急なことがあったら連絡しなさいね。先生の番号教えてあげる。\""
            }
        }
    },
    "after_teacher_contact_ask": {
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "setFlags": [
            "has_number_teacher",
            "has_any_contact"
        ],
        "stats": {
            "Teacher": {
                "affinity": 5
            }
        },
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"자, 여기 선생님 번호야. 저장해두렴.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Here's my number. Make sure to save it.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Aquí tienes mi número. Asegúrate de guardarlo.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"はい、先生の番号よ。ちゃんと登録しておいてね。\""
            }
        }
    },
    "after_seoyeon": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "after_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*학생회실 문을 열자, 서류 더미 속에서 고군분투하는 서연이가 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I open the student council room door. Seoyeon is buried in paperwork.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Abro la puerta de la sala del consejo estudiantil. Seoyeon está luchando entre montones de papeles.*"
            },
            "ja": {
                "name": "僕",
                "text": "*生徒会室のドアを開けると、書類の山と格闘しているソヨンの姿が見える。*"
            }
        }
    },
    "after_seoyeon_2": {
        "background": "assets/images/background/student_room.png",
        "affinityChar": "Seoyeon",
        "sunset": true,
        "affinityBranches": [
            {
                "minAffinity": 15,
                "next": "after_seoyeon_3_high"
            },
            {
                "minAffinity": -5,
                "next": "after_seoyeon_3_standard"
            },
            {
                "minAffinity": -100,
                "next": "after_seoyeon_3_low"
            }
        ]
    },
    "after_seoyeon_3_standard": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_seoyeon_help",
                "setFlag": "helped_seoyeon",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "after_seoyeon_worry",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "after_seoyeon_rude",
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
                "text": "\"어? {name}! 이 시간에 어쩐 일이야? 설마... 나 기다린 거야? (장난기 섞인 미소)\"",
                "choices": [
                    "응, 같이 가고 싶어서. 도와줄까?",
                    "얼굴 보고 싶어서 왔지. 너무 무리하는 거 아냐?",
                    "착각이야. 그냥 길을 잘못 든 것뿐이야."
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh? {name}! You're still here? Were you... waiting for me? (Playful smile)\"",
                "choices": [
                    "Yeah, I wanted to go together. Need help?",
                    "I wanted to see you. Don't push yourself too hard.",
                    "Just a misunderstanding. I took a wrong turn."
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¿Eh? ¡{name}! ¿Sigues aquí? No me digas que... ¿me estabas esperando? (Sonrisa traviesa)\"",
                "choices": [
                    "Sí, quería ir contigo. ¿Te ayudo?",
                    "Quería verte. ¿No te estás esforzando demasiado?",
                    "Es un malentendido. Solo me equivoqué de camino."
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あれ？{name}！こんな時間にどうしたの？まさか...私のこと待ってたの？（いたずらっぽい笑顔）\"",
                "choices": [
                    "うん、一緒に帰りたくて。手伝おうか？",
                    "顔が見たくて来たんだ。無理してない？",
                    "勘違いだよ。ただ道を間違えただけ。"
                ]
            }
        }
    },
    "after_seoyeon_3_high": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_seoyeon_help",
                "setFlag": "helped_seoyeon",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "after_seoyeon_worry",
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "after_seoyeon_compliment",
                "setFlag": "helped_seoyeon",
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
                "text": "*내가 들어서자 서연이가 서류를 내려놓고 환하게 웃는다.* \"{name}! 올 줄 알았어. 아니... 사실 간절히 기다리고 있었어. 우리, 같이 갈까?\"",
                "choices": [
                    "응, 나도 너랑 같이 가고 싶었어. 도와줄게.",
                    "날 기다려준 거야? 감동인데. 정말 기뻐.",
                    "노을 아래서 보니까 평소보다 훨씬 예쁘네."
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon puts down her documents and beams.* \"{name}! I knew you'd come. No... I was desperately hoping you would. Shall we go together?\"",
                "choices": [
                    "Yeah, I wanted to go with you too. I'll help.",
                    "You waited for me? I'm touched. I'm really happy.",
                    "You look much prettier under the sunset."
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon deja los documentos y sonríe radiante.* \"¡{name}! Sabía que vendrías. No... en realidad estaba deseando que vinieras. ¿Vamos juntos?\"",
                "choices": [
                    "Sí, yo también quería ir contigo. Te ayudo.",
                    "¿Me esperaste? Estoy conmovido. De verdad me alegra.",
                    "Te ves mucho más bonita bajo el atardecer."
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "*僕が入ると、ソヨンは書類を置いてパッと笑顔になる。* \"{name}！来てくれると思ってた。ううん...本当は必死に待ってたの。一緒に帰ろ？\"",
                "choices": [
                    "うん、僕もソヨンと一緒に帰りたかった。手伝うよ。",
                    "待っててくれたの？嬉しいな。本当に嬉しい。",
                    "夕焼けの下で見ると、いつもよりずっと綺麗だね。"
                ]
            }
        }
    },
    "after_seoyeon_3_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_home",
                "stats": {
                    "Seoyeon": {
                        "affinity": -5
                    }
                }
            },
            {
                "next": "after_home",
                "stats": {
                    "Seoyeon": {
                        "affinity": -15
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 서류를 정리하며 힐끗 나를 쳐다본다. 그녀의 눈빛에는 귀찮음이 가득하다.* \"...{name}? 여긴 왜 온 거야? 나 지금 바쁘니까 볼일 없으면 나가줄래?\"",
                "choices": [
                    "미안, 방해하려던 건 아니었어.",
                    "나도 바쁜 사람이야. 가라고 안 해도 갈 거야."
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon glances at me with an annoyed expression.* \"...{name}? Why are you here? I'm busy, so please leave if you don't have business.\"",
                "choices": [
                    "Sorry, I didn't mean to disturb you.",
                    "I'm busy too. I'll leave without you asking."
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon me mira de reojo con expresión molesta.* \"...¿{name}? ¿Qué haces aquí? Estoy ocupada, así que si no tienes nada que hacer, ¿podrías irte?\"",
                "choices": [
                    "Perdón, no quería molestarte.",
                    "Yo también estoy ocupado. Me iré sin que me lo pidas."
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンが書類を整理しながらチラッとこちらを見る。その目には迷惑そうな色が浮かんでいる。* \"...{name}？なんでここにいるの？今忙しいから、用がないなら出て行ってくれる？\"",
                "choices": [
                    "ごめん、邪魔するつもりじゃなかったんだ。",
                    "僕も忙しいよ。言われなくても帰るって。"
                ]
            }
        }
    },
    "after_seoyeon_rude": {
        "character": "assets/images/characters/seyoun_angry.png",
        "sunset": true,
        "next": "after_seoyeon_rude_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이의 표정이 순식간에 굳어진다. 다시 서류로 시선을 돌리는 그녀.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon's expression hardens instantly. She turns back to her documents.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*La expresión de Seoyeon se endurece al instante. Vuelve a mirar sus documentos.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンの表情が一瞬で固まる。再び書類に視線を戻す彼女。*"
            }
        }
    },
    "after_seoyeon_rude_2": {
        "character": "assets/images/characters/seyoun_angry.png",
        "sunset": true,
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"아... 그래? 그럼 방해하지 말고 나가줄래? 나 좀 바쁘거든.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh... okay? Then please leave. I'm quite busy.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Ah... ¿sí? Entonces no me molestes y vete, ¿quieres? Estoy bastante ocupada.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あ...そう？じゃあ邪魔しないで出て行ってくれる？ちょっと忙しいから。\""
            }
        }
    },
    "after_seoyeon_compliment": {
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "after_seoyeon_help_action",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 순간 얼굴이 빨개진다. 서류로 얼굴을 가리며 입을 삐죽거린다.* \"뭐, 뭐야 갑자기... 놀리는 거야? ...어, 어차피 빨리 끝내야 하니까 이것 좀 도와줘!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon's face turns red in an instant. She hides behind her documents, pouting.* \"Wh-what's that all of a sudden... Are you teasing me? ...A-anyway, we need to finish quickly so help me with this!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*La cara de Seoyeon se pone roja al instante. Se esconde detrás de los documentos, haciendo pucheros.* \"¿Q-qué dices de repente...? ¿Me estás molestando? ...D-de todos modos, tenemos que terminar rápido, ¡así que ayúdame con esto!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンの顔が一瞬で真っ赤になる。書類で顔を隠しながら唇を尖らせる。* \"な、何急に...からかってるの？...と、とにかく早く終わらせなきゃだから、これ手伝って！\""
            }
        }
    },
    "after_seoyeon_help": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "after_seoyeon_help_dialogue",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 감동한 듯 눈을 크게 뜬다. 이내 환하게 웃으며 옆자리를 내어준다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She looks moved and her eyes widen. Soon she smiles brightly and offers the seat next to her.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Parece conmovida y abre mucho los ojos. Enseguida sonríe y me ofrece el asiento de al lado.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女は感動したように目を大きく見開く。すぐに明るく笑って隣の席を空けてくれた。*"
            }
        }
    },
    "after_seoyeon_help_dialogue": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "after_seoyeon_help_action",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"정말? 고마워! 네가 도와주면 금방 끝날 것 같아. 자, 이것 좀 정리해줄래?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Really? Thanks! With your help, it'll be done in no time. Here, can you organize this?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¿En serio? ¡Gracias! Con tu ayuda, terminaremos enseguida. Toma, ¿puedes organizar esto?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"本当？ありがとう！手伝ってもらえたらすぐ終わると思う。じゃあ、これ整理してくれる？\""
            }
        }
    },
    "after_seoyeon_help_action": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "after_seoyeon_help_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*말없이 서류를 정리하며 느껴지는 묘한 유대감. 창밖은 어느새 노을빛이다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*As I organize the documents in silence, I feel a strange connection. Outside, the sunset is already falling.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Mientras organizamos los documentos en silencio, siento una extraña conexión. Afuera, el atardecer ya está cayendo.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*黙って書類を整理しながら、不思議な絆を感じる。窓の外はいつの間にか夕焼け色に染まっている。*"
            }
        }
    },
    "after_seoyeon_help_3": {
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "after_seoyeon_cafe",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"우리... 이거 다 하고 맛있는 거 먹으러 가자!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Let's go get something delicious after we finish this!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡Cuando terminemos esto, vamos a comer algo rico!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"これ終わったら...美味しいもの食べに行こ！\""
            }
        }
    },
    "after_seoyeon_cafe": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "after_seoyeon_cafe_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*일을 마치고 우리는 학교 앞 작은 카페에 들렀다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*After finishing work, we stopped by a small café in front of school.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Después de terminar el trabajo, pasamos por una pequeña cafetería frente a la escuela.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*仕事を終えた後、学校前の小さなカフェに寄った。*"
            }
        }
    },
    "after_seoyeon_cafe_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "after_seoyeon_cafe_2_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이는 생크림이 듬뿍 올라간 음료를 마시며 행복한 표정을 짓는다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon drinks her beverage topped with whipped cream and looks happy.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon bebe su bebida con crema batida y se ve feliz.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンは生クリームたっぷりのドリンクを飲みながら、幸せそうな表情を浮かべる。*"
            }
        }
    },
    "after_seoyeon_cafe_2_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "after_seoyeon_cafe_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"하아~ 이제야 좀 살 것 같아. 오늘 정말 고마웠어, {name}.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Ahhh, I feel alive now. Thanks so much for today, {name}.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Ahhh, ahora sí me siento viva. Muchas gracias por hoy, {name}.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"はぁ〜やっと生き返った気がする。今日は本当にありがとう、{name}。\""
            }
        }
    },
    "after_seoyeon_cafe_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_seoyeon_promise",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "after_seoyeon_tease",
                "stats": {
                    "Seoyeon": {
                        "affinity": 4
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"덕분에 오늘 하루가 정말 특별해졌어. 있잖아... 우리 내일도 같이 하교할 수 있을까?\"",
                "choices": [
                    "당연하지. 내일이 벌써 기다려져.",
                    "글쎄, 하는 거 봐서? 농담이야. 꼭 같이 가자."
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Thanks to you, today became really special. Hey... can we go home together tomorrow too?\"",
                "choices": [
                    "Of course. I'm already looking forward to tomorrow.",
                    "Well, we'll see? Just kidding. Let's definitely go together."
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Gracias a ti, hoy se volvió realmente especial. Oye... ¿podemos volver juntos a casa mañana también?\"",
                "choices": [
                    "Claro que sí. Ya estoy ansioso por mañana.",
                    "Mmm, ya veremos... Es broma. Vamos juntos sí o sí."
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"おかげで今日は本当に特別な日になったよ。ねえ...明日も一緒に下校できるかな？\"",
                "choices": [
                    "もちろん。もう明日が楽しみだよ。",
                    "さあ、どうしようかな？冗談だよ。絶対一緒に帰ろう。"
                ]
            }
        }
    },
    "after_seoyeon_promise": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "after_seoyeon_promise_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 새끼손가락을 내밀며 환하게 웃는데...*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She holds out her pinky and smiles brightly...*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Extiende su meñique y sonríe radiante...*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*彼女が小指を差し出して明るく笑う...*"
            }
        }
    },
    "after_seoyeon_promise_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "branches": [
            {
                "next": "after_home",
                "condition": "has_number_seyoun"
            },
            {
                "next": "after_seoyeon_contact_ask"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"약속한 거다? 어기기 없기! 그럼 내일 봐 {name}. 조심해서 들어가!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Promise? No backing out! See you tomorrow, {name}. Get home safely!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¿Prometido? ¡No puedes echarte atrás! Nos vemos mañana, {name}. ¡Llega con cuidado a casa!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"約束だよ？破っちゃダメだからね！じゃあ明日ね、{name}。気をつけて帰ってね！\""
            }
        }
    },
    "after_seoyeon_tease": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "sunset": true,
        "next": "after_seoyeon_tease_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 볼을 빵빵하게 부풀리며 나를 째려본다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She puffs up her cheeks and glares at me.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Infla las mejillas y me fulmina con la mirada.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンが頬をぷくーっと膨らませて僕をにらむ。*"
            }
        }
    },
    "after_seoyeon_tease_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "sunset": true,
        "branches": [
            {
                "next": "after_home",
                "condition": "has_number_seyoun"
            },
            {
                "next": "after_seoyeon_contact_ask"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"흥... 정말 못됐어! 그래도 꼭 와야 해. 안 오면 학생회장으로서 아주 무서운...? 농담이야. 내일 봐!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Hmph... You're so mean! But you have to come. If you don't, as student council president I'll... Just kidding. See you tomorrow!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Hmph... ¡Eres muy malo! Pero tienes que venir. Si no vienes, como presidenta del consejo estudiantil voy a... Es broma. ¡Nos vemos mañana!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"もう...本当に意地悪！でも絶対来なきゃダメだよ。来なかったら生徒会長としてすごく怖い...なんてね。明日ね！\""
            }
        }
    },
    "after_seoyeon_contact_ask": {
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_seoyeon_contact_success",
                "setFlags": [
                    "has_number_seyoun",
                    "has_any_contact"
                ]
            },
            {
                "next": "after_seoyeon_contact_fail"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"아, 맞다! 아직 번호를 못 물어봤네. 전하고 싶은 말이 생길 것 같아서... 괜찮으면 번호 알려줄래?\"",
                "choices": [
                    "응, 언제든 연락해. 여기 내 번호야.",
                    "미안하지만 번호는 조금 더 친해지면 알려줄게."
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh wait! We haven't exchanged numbers yet. I might have something to tell you... Could I get your number?\"",
                "choices": [
                    "Sure, contact me anytime. Here's my number.",
                    "Sorry, I'll give it when we're closer."
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡Ah, espera! Aún no hemos intercambiado números. Puede que tenga algo que decirte... ¿Me darías tu número?\"",
                "choices": [
                    "Claro, contáctame cuando quieras. Aquí está mi número.",
                    "Lo siento, te lo daré cuando tengamos más confianza."
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あ、そうだ！まだ番号聞いてなかったね。伝えたいことができそうだから...よかったら番号教えてくれない？\"",
                "choices": [
                    "うん、いつでも連絡して。はい、僕の番号。",
                    "ごめん、もう少し仲良くなったら教えるよ。"
                ]
            }
        }
    },
    "after_seoyeon_contact_success": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"고마워! 그럼 진짜로 나중에 연락할게. 잘 가!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Thanks! Then I'll really message you later. Take care!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡Gracias! Entonces de verdad te escribiré después. ¡Cuídate!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"ありがとう！じゃあ本当に後で連絡するね。気をつけてね！\""
            }
        }
    },
    "after_seoyeon_contact_fail": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": -10
            }
        },
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"아... 응, 알았어! 내가 너무 갑자기 물어봤지? 미안해. 그럼 내일 학교에서 봐!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh... okay! I asked too suddenly, right? Sorry. Then see you at school tomorrow!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Ah... ¡está bien! Fue muy repentino, ¿verdad? Perdón. ¡Entonces nos vemos mañana en la escuela!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あ...うん、わかった！急に聞いちゃったよね？ごめんね。じゃあ明日学校でね！\""
            }
        }
    },
    "after_seoyeon_worry": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "after_seoyeon_worry_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*그녀가 쑥스러운 듯 머리를 긁적이며 웃는다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*She shyly scratches her head and smiles.*"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Se rasca la cabeza tímidamente y sonríe.*"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*恥ずかしそうに頭をかきながら笑う。*"
            }
        }
    },
    "after_seoyeon_worry_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "after_seoyeon_cafe",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"후훗, 들켰네. 학생회장이라는 게 생각보다 할 일이 많거든. 그래도 네가 이렇게 내 마음을 알아주니까 힘이 불끈 나는걸? 조금만 기다려줘, 금방 끝내고 같이 가자!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Hehe, you caught me. Being student council president is more work than expected. But knowing you understand how I feel gives me energy! Wait just a bit, I'll finish soon and we can go together!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Jeje, me atrapaste. Ser presidenta del consejo estudiantil da más trabajo del que parece. ¡Pero saber que me entiendes me da energía! Espera un poco, termino pronto y nos vamos juntos.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"えへへ、バレちゃった。生徒会長って思ったより大変なんだよね。でも、こうやって気持ちをわかってくれると元気が出る！ちょっとだけ待ってて、すぐ終わらせるから一緒に帰ろ！\""
            }
        }
    },
    "after_yuna_new": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_yuna_new_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학교의 조용한 곳을 찾아 걷다 보니, 어느새 도서관 별관에 도착했다. 노을빛이 스며드는 그곳에는 한 소녀가 창가에 앉아 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Walking through the quiet parts of school, I arrive at the library annex. In the sunset light, a girl sits by the window.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Caminando por las partes silenciosas de la escuela, llego al anexo de la biblioteca. Bajo la luz del atardecer, una chica está sentada junto a la ventana.*"
            },
            "ja": {
                "name": "僕",
                "text": "*学校の静かな場所を探して歩いていると、いつの間にか図書館の別館に着いた。夕焼けが差し込むそこには、窓際に座った少女がいる。*"
            }
        }
    },
    "after_yuna_new_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "setFlags": [
            "met_yuna",
            "knows_name_yuna"
        ],
        "next": "after_yuna_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"어? 이 시간에 여기까지 오다니... 너도 참 특이하네. 나는 유나라고 해.\""
            },
            "en": {
                "name": "???",
                "text": "\"Huh? Coming here at this hour... You're quite unusual. I'm Yuna.\""
            },
            "es": {
                "name": "???",
                "text": "\"¿Eh? Venir aquí a esta hora... Eres bastante peculiar. Me llamo Yuna.\""
            },
            "ja": {
                "name": "???",
                "text": "\"え？こんな時間にここまで来るなんて...君も変わってるね。私はユナ。\""
            }
        }
    },
    "after_yuna": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_yuna_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*도서관 별관은 아까보다 더 어둡고 고요하다. 그곳에는 한 소녀가 창가에 앉아 노을을 바라보고 있다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*The library annex is darker and quieter than before. There, a girl sits by the window, gazing at the sunset.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*El anexo de la biblioteca está más oscuro y silencioso que antes. Allí, una chica está sentada junto a la ventana, contemplando el atardecer.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*図書館の別館はさっきよりも暗く、静かだ。そこには一人の少女が窓際に座って夕焼けを眺めている。*"
            }
        }
    },
    "after_yuna_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_yuna_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*그녀는 내가 온 것을 알면서도 한참 동안 창밖만 바라본다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*She knows I've arrived but stares outside for a long time.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Sabe que llegué, pero sigue mirando por la ventana un buen rato.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*僕が来たことに気づいているのに、しばらく窓の外を見つめたままだ。*"
            }
        }
    },
    "after_yuna_3": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "yuna_after_talk",
                "condition": "knows_name_yuna"
            },
            {
                "next": "yuna_name_share_pre"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"아, 안녕... 방과 후의 도서관은 참 고요해서 좋아. 넌 무슨 일로 온 거야?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Oh, hello... The library after school is so quiet, I like it. Why did you come?\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Ah, hola... La biblioteca después de clases es tan tranquila, me gusta. ¿Por qué viniste?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"あ、こんにちは...放課後の図書館は静かで好き。何しに来たの？\""
            }
        }
    },
    "yuna_after_talk": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "yuna_after_choices",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"또 보네, {name}. 여긴 여전히 조용하고... 여전히 무거워. 넌 그 무게가 느껴지지 않아?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Meeting again, {name}. This place is still quiet... and still heavy. Don't you feel that weight?\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Nos vemos de nuevo, {name}. Este lugar sigue siendo tranquilo... y sigue siendo pesado. ¿No sientes ese peso?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"また会ったね、{name}。ここは相変わらず静かで...相変わらず重い。君にはその重さ、感じない？\""
            }
        }
    },
    "yuna_after_choices": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_yuna_secret",
                "affinityChar": "Yuna",
                "affinityBranches": [
                    {
                        "minAffinity": 11,
                        "next": "after_yuna_secret_deep"
                    },
                    {
                        "minAffinity": 5,
                        "next": "after_yuna_secret"
                    },
                    {
                        "minAffinity": -999,
                        "next": "after_yuna_secret_fail"
                    }
                ]
            },
            {
                "next": "after_yuna_boring"
            },
            {
                "next": "after_yuna_rude"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"나한테 궁금한 거라도 있는 거야? 아니면... 그냥 내가 신기해서 온 거야?\"",
                "choices": [
                    "이 학교의 비밀에 대해 알려줘.",
                    "오늘 급식 맛있었지?",
                    "아침부터 계속 여기 있었던 거야?"
                ]
            },
            "en": {
                "name": "Yuna",
                "text": "\"Is there something you're curious about? Or... did you just come because I'm interesting?\"",
                "choices": [
                    "Tell me about the school's secrets.",
                    "Today's cafeteria food was delicious, right?",
                    "Have you been here since morning?"
                ]
            },
            "es": {
                "name": "Yuna",
                "text": "\"¿Hay algo que te da curiosidad? O... ¿solo viniste porque te parezco interesante?\"",
                "choices": [
                    "Cuéntame sobre los secretos de la escuela.",
                    "La comida de la cafetería estuvo rica hoy, ¿no?",
                    "¿Has estado aquí desde la mañana?"
                ]
            },
            "ja": {
                "name": "ユナ",
                "text": "\"私に聞きたいことでもあるの？それとも...ただ私が珍しくて来たの？\"",
                "choices": [
                    "この学校の秘密について教えて。",
                    "今日の給食、おいしかったよね？",
                    "朝からずっとここにいたの？"
                ]
            }
        }
    },
    "yuna_name_share_pre": {
        "sunset": true,
        "setFlag": "knows_name_yuna",
        "next": "yuna_name_share",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"내 이름은 '{name}'(이)야. 너랑 친해지고 싶어.\""
            },
            "en": {
                "name": "Me",
                "text": "\"My name is '{name}'. I want to get close to you.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Mi nombre es '{name}'. Quiero ser tu amigo.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"僕の名前は'{name}'。君と仲良くなりたいんだ。\""
            }
        }
    },
    "yuna_name_share": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "yuna_after_choices",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*그녀가 내 이름을 나지막이 읊조린다.* \"...{name}. 기억해둘게. 하지만 이런 학교에선 이름 같은 건... 아무 의미가 없을지도 몰라.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*She quietly murmurs my name.* \"...{name}. I'll remember it. But in this school, names... might mean nothing.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Murmura mi nombre en voz baja.* \"...{name}. Lo recordaré. Pero en esta escuela, los nombres... puede que no signifiquen nada.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*彼女が僕の名前を小さく呟く。* \"...{name}。覚えておく。でもこの学校じゃ、名前なんて...何の意味もないかもね。\""
            }
        }
    },
    "after_yuna_know": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "after_yuna_know_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*그녀가 천천히 고개를 돌려 나를 바라본다. 그녀의 입가에 옅은 미소가 번진다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*She slowly turns her head to look at me. A faint smile spreads across her lips.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Gira la cabeza lentamente para mirarme. Una leve sonrisa se dibuja en sus labios.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*彼女がゆっくりと顔を向けて僕を見る。その唇に淡い微笑みが広がる。*"
            }
        }
    },
    "after_yuna_know_2": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "after_yuna_know_2_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*그녀가 내 손을 잡고 별관 옥상으로 나를 이끈다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*She takes my hand and leads me to the annex rooftop.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Toma mi mano y me guía hacia la azotea del anexo.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*彼女が僕の手を取って、別館の屋上へと導く。*"
            }
        }
    },
    "after_yuna_know_2_2": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "after_yuna_know_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"나에 대해 알고 싶니...? 풋, 용감한 건지 무모한 건지 모르겠네.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"You want to know about me...? Hmm, I don't know if you're brave or reckless.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"¿Quieres saber sobre mí...? Hmm, no sé si eres valiente o imprudente.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"私のことを知りたいの...？ふっ、勇敢なのか無謀なのかわからないね。\""
            }
        }
    },
    "after_yuna_know_3": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "after_yuna_move_rooftop",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"좋아. 노을이 지기 전에 조금씩... 아주 조금씩 알려줄게. 따라와.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Alright. Before the sunset fades... I'll tell you little by little. Follow me.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Está bien. Antes de que el atardecer se desvanezca... te lo contaré poco a poco. Sígueme.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"いいよ。夕焼けが消える前に、少しずつ...ほんの少しずつ教えてあげる。ついてきて。\""
            }
        }
    },
    "after_yuna_move_rooftop": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "sunset": true,
        "next": "after_yuna_rooftop",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그녀를 따라 삐걱거리는 계단을 올라갔다. 붉게 물든 노을빛이 창문을 통해 스며들고, 옥상에 도착하자 서늘한 바람이 불어온다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I follow her up the creaking stairs. The red sunset seeps through the windows, and when we reach the rooftop, a cool breeze blows.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La sigo subiendo las escaleras que crujen. La luz roja del atardecer se filtra por las ventanas, y al llegar a la azotea, sopla una brisa fresca.*"
            },
            "ja": {
                "name": "僕",
                "text": "*彼女の後について軋む階段を上った。赤く染まった夕焼けが窓から差し込み、屋上に着くと涼しい風が吹いてくる。*"
            }
        }
    },
    "after_yuna_rooftop": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_yuna_rooftop_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*별관 옥상에서 내려다보는 학교는 노을에 물들어 신비로운 분위기를 풍긴다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*Looking down at the school from the annex rooftop, it's dyed in sunset and gives off a mysterious atmosphere.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Vista desde la azotea del anexo, la escuela se tiñe con el atardecer y emana una atmósfera misteriosa.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*別館の屋上から見下ろす学校は夕焼けに染まり、神秘的な雰囲気を醸し出している。*"
            }
        }
    },
    "after_yuna_rooftop_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_yuna_rooftop_2_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나는 난간에 기대 나를 빤히 바라본다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna leans against the railing and stares at me.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Yuna se recarga en la barandilla y me mira fijamente.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*ユナは手すりにもたれかかって、じっと僕を見つめる。*"
            }
        }
    },
    "after_yuna_rooftop_2_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "after_yuna_rooftop_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"사람들은 이 학교가 완벽하다고 생각하지. 하지만 완벽은 환상일 뿐이야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"People think this school is perfect. But perfection is just an illusion.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"La gente cree que esta escuela es perfecta. Pero la perfección es solo una ilusión.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"みんなこの学校が完璧だと思ってる。でも完璧なんて幻想に過ぎないよ。\""
            }
        }
    },
    "after_yuna_rooftop_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_yuna_together"
            },
            {
                "next": "after_yuna_scared"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"겉으로는 드러나지 않는 문제들이 곪아가고 있을 뿐이지. 이 학교를 가득 채운 무거운 기운... 넌 그런 변화를 못 느꼈어?\"",
                "choices": [
                    "너와 함께라면 어디든 괜찮아.",
                    "어둠이라니... 좀 무서운데."
                ]
            },
            "en": {
                "name": "Yuna",
                "text": "\"Problems that don't show on the surface are just festering. The heavy energy filling this school... don't you feel those changes?\"",
                "choices": [
                    "Anywhere is fine as long as I'm with you.",
                    "Darkness... that sounds a bit scary."
                ]
            },
            "es": {
                "name": "Yuna",
                "text": "\"Los problemas que no se ven en la superficie solo se pudren por dentro. La energía pesada que llena esta escuela... ¿no sientes esos cambios?\"",
                "choices": [
                    "Donde sea está bien mientras esté contigo.",
                    "Oscuridad... suena algo aterrador."
                ]
            },
            "ja": {
                "name": "ユナ",
                "text": "\"表に出ない問題がどんどん膿んでいるだけ。この学校を満たしている重い気配...君にはその変化、感じない？\"",
                "choices": [
                    "君と一緒ならどこでも大丈夫だよ。",
                    "闇だなんて...ちょっと怖いな。"
                ]
            }
        }
    },
    "after_yuna_together": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "after_yuna_together_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*그녀가 내 손을 꽉 쥔다. 그녀의 눈을 보며 슬픈 미소를 짓는데...*"
            },
            "en": {
                "name": "Yuna",
                "text": "*She squeezes my hand tight. Looking into her eyes, she gives a sad smile...*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Aprieta mi mano con fuerza. Mirándola a los ojos, esboza una sonrisa triste...*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*彼女が僕の手をぎゅっと握る。その目を見つめると、悲しげな微笑みを浮かべて...*"
            }
        }
    },
    "after_yuna_together_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "yuna_contact_exchange",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"바보 같은 소리... 하지만 싫지 않네. 좋아, 그럼 우리... 서로의 비밀을 공유하는 사이가 되는 건 어때?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Such foolish words... but I don't dislike it. Alright, then... how about we become people who share each other's secrets?\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Qué tontería... pero no me desagrada. Está bien, entonces... ¿qué tal si nos convertimos en personas que comparten los secretos del otro?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"馬鹿なこと言って...でも嫌いじゃない。いいよ、じゃあ...お互いの秘密を共有する仲になるのはどう？\""
            }
        }
    },
    "yuna_contact_exchange": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "yuna_contact_success",
                "setFlags": [
                    "has_number_yuna",
                    "has_any_contact"
                ]
            },
            {
                "next": "yuna_contact_fail",
                "stats": {
                    "Yuna": {
                        "affinity": -25
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나가 난간 쪽에서 몸을 떼며 무심하게 스마트폰을 내민다.* \"비밀을 공유하려면... 연락할 수단은 있어야겠지. 네 번호, 여기에 남겨줘.\"",
                "choices": [
                    "응, 좋아. 너에 대해 모든 걸 알고 싶어.",
                    "미안, 아직은 좀 조심스러워."
                ]
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna pulls away from the railing and nonchalantly holds out her smartphone.* \"To share secrets... we need a way to contact each other. Leave your number here.\"",
                "choices": [
                    "Sure. I want to know everything about you.",
                    "Sorry, I'm still a bit cautious."
                ]
            },
            "es": {
                "name": "Yuna",
                "text": "*Yuna se separa de la barandilla y extiende su celular con indiferencia.* \"Para compartir secretos... necesitamos una forma de contactarnos. Deja tu número aquí.\"",
                "choices": [
                    "Claro. Quiero saber todo sobre ti.",
                    "Perdón, todavía soy algo precavido."
                ]
            },
            "ja": {
                "name": "ユナ",
                "text": "*ユナが手すりから離れて、さりげなくスマホを差し出す。* \"秘密を共有するなら...連絡手段は必要でしょ。ここに番号、入れて。\"",
                "choices": [
                    "うん、いいよ。君のこと全部知りたい。",
                    "ごめん、まだちょっと慎重になりたくて。"
                ]
            }
        }
    },
    "yuna_contact_success": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 15
            }
        },
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나가 내 번호를 저장하고는 희미하게 미소 짓는다.* \"...됐어. 이제 우린 연결된 거야. 내가 부르면... 언제든 와줘야 해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna saves my number and smiles faintly.* \"...Done. Now we're connected. When I call... you have to come anytime.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Yuna guarda mi número y sonríe débilmente.* \"...Listo. Ahora estamos conectados. Cuando te llame... tienes que venir sin importar cuándo.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*ユナが僕の番号を保存して、かすかに微笑む。* \"...できた。これで繋がったね。私が呼んだら...いつでも来てね。\""
            }
        }
    },
    "yuna_contact_fail": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나가 차가운 눈빛으로 나를 바라보더니 스마트폰을 집어넣는다.* \"...그래. 억지로 강요하진 않아. 하지만 기회는 자주 오지 않는다는 걸 명심해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna looks at me with cold eyes and puts away her smartphone.* \"...Fine. I won't force you. But remember that opportunities don't come often.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Yuna me mira con ojos fríos y guarda su celular.* \"...Bien. No te obligaré. Pero recuerda que las oportunidades no llegan seguido.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*ユナが冷たい目で僕を見て、スマホをしまう。* \"...そう。無理強いはしない。でも、チャンスはそう何度も来ないってこと、覚えておいて。\""
            }
        }
    },
    "after_yuna_scared": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_yuna_scared_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*그녀가 차갑게 웃으며 한 발 뒤로 물러선다. 그녀는 다시 창밖으로 시선을 돌린다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*She laughs coldly and takes a step back. She turns her gaze back to the window.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Ríe fríamente y da un paso atrás. Vuelve a dirigir la mirada hacia la ventana.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*彼女が冷たく笑って一歩後ずさる。再び窓の外に視線を戻す。*"
            }
        }
    },
    "after_yuna_scared_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"흠, 역시 그렇겠지. 평범한 학생에게는 너무 무거운 이야기니까. 오늘은 이만 돌아가. 더 이상 깊이 알려고 하지 마.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Hmm, I thought so. It's too heavy a story for an ordinary student. Go home today. Don't try to dig any deeper.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Hmm, lo sabía. Es una historia demasiado pesada para un estudiante común. Vete a casa hoy. No intentes indagar más.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"ふぅん、やっぱりね。普通の学生には重すぎる話だから。今日は帰って。これ以上深入りしようとしないで。\""
            }
        }
    },
    "after_yuna_secret": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_yuna_secret_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*그녀가 검지 손가락을 입술에 갖다 대며 조용히 하라는 신호를 보낸다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*She closes her book and stares at me with those deep purple eyes.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Pone el dedo índice en sus labios y me hace señas de guardar silencio.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*彼女が人差し指を唇に当てて、静かにという合図を送る。*"
            }
        }
    },
    "after_yuna_secret_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_yuna_know",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"쉿... 벽에도 귀가 있는 법이야. 진실을 알게 되면 더 이상 평범한 일상으로 돌아갈 수 없어. 그래도 괜찮다면... 내 손을 잡아.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Shh... Walls have ears. Once you know the truth, you can never return to an ordinary life. If you're okay with that... take my hand.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Shh... Las paredes tienen oídos. Una vez que sepas la verdad, no podrás volver a una vida normal. Si estás bien con eso... toma mi mano.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"しっ...壁に耳あり。真実を知ったら、もう普通の日常には戻れない。それでもいいなら...私の手を取って。\""
            }
        }
    },
    "after_yuna_secret_deep": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 10
            }
        },
        "next": "after_yuna_rooftop",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나가 책을 덮고 나를 빤히 바라본다. 그녀의 눈동자가 보랏빛으로 기묘하게 빛나는 것 같다.* \"...진실? 그걸 감당할 준비는 됐어? 좋아, 네 눈빛도 진심이라면... 따라와. 아무에게도 말하지 않겠다고 약속해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna closes her book and stares at me. Her eyes seem to glow eerily purple.* \"...Truth? Are you ready to handle it? Alright, if your eyes are sincere too... follow me. Promise not to tell anyone.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Yuna cierra su libro y me mira fijamente. Sus ojos parecen brillar con un tono púrpura inquietante.* \"...¿La verdad? ¿Estás listo para soportarla? Bien, si tu mirada también es sincera... sígueme. Prométeme que no le dirás a nadie.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*ユナが本を閉じて僕をじっと見つめる。その瞳が不思議な紫色に光っているように見える。* \"...真実？それを受け止める覚悟はある？いいよ、君の目も本気なら...ついてきて。誰にも言わないって約束して。\""
            }
        }
    },
    "after_yuna_secret_fail": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": -20
            }
        },
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나가 차가운 미소를 짓는다.* \"진실이라... 넌 아직 그 무게를 견디기엔 너무 가벼워 보이는데. 궁금해하는 건 자유지만, 너무 깊이 파고들진 마. 다칠 수도 있으니까.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna gives a cold smile.* \"Truth... You still seem too light to bear its weight. Being curious is fine, but don't dig too deep. You might get hurt.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Yuna sonríe fríamente.* \"La verdad... Aún pareces demasiado liviano para soportar su peso. Ser curioso está bien, pero no indagues demasiado. Podrías salir lastimado.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*ユナが冷たく微笑む。* \"真実ね...君にはまだその重さを支えるには軽すぎるように見えるけど。好奇心は自由だけど、あまり深入りしないで。怪我するかもしれないから。\""
            }
        }
    },
    "after_yuna_boring": {
        "character": "assets/images/characters/yuna_bored.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": -10
            }
        },
        "next": "after_yuna_boring_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나가 한심하다는 듯 한숨을 내쉬며 다시 책으로 시선을 돌린다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna sighs as if I'm pathetic and turns her eyes back to her book.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Yuna suspira como si fuera patético y vuelve a mirar su libro.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*ユナが呆れたようにため息をつき、再び本に目を戻す。*"
            }
        }
    },
    "after_yuna_boring_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"급식...? 그런 세속적인 이야기는 다른 애들이랑 해. 난 바쁘니까 방해하지 말고 나가줘.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Cafeteria food...? Talk about such mundane things with other kids. I'm busy, so don't bother me and leave.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"¿La comida de la cafetería...? Habla de cosas tan triviales con otros chicos. Estoy ocupada, así que no me molestes y vete.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"給食...？そんな俗っぽい話は他の子としてよ。私は忙しいから邪魔しないで出て行って。\""
            }
        }
    },
    "after_yuna_rude": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": -15
            }
        },
        "next": "after_yuna_rude_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*그녀가 책을 덮고 나를 차갑게 쳐다본다. 공기가 순식간에 얼어붙는 것 같다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "*She closes her book and looks at me coldly. The air seems to freeze instantly.*"
            },
            "es": {
                "name": "Yuna",
                "text": "*Cierra su libro y me mira fríamente. El aire parece congelarse al instante.*"
            },
            "ja": {
                "name": "ユナ",
                "text": "*彼女が本を閉じて冷たく僕を見つめる。空気が一瞬で凍りつくようだ。*"
            }
        }
    },
    "after_yuna_rude_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"아침부터라니...? 넌 아직 아무것도 모르고 있구나. 이 학교를 감싸고 있는 이 기묘한 기운... 넌 느껴지지 않아? 무지함은 때로 죄가 되기도 해. 당장 내 앞에서 사라져.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Since this morning...? You still know nothing. This strange aura surrounding the school... can't you feel it? Ignorance can sometimes be a sin. Disappear from my sight.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"¿Desde la mañana...? Aún no sabes nada. Esta extraña aura que rodea la escuela... ¿no la sientes? La ignorancia a veces es un pecado. Desaparece de mi vista.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"朝からだなんて...？君はまだ何も知らないんだね。この学校を包んでいるこの奇妙な気配...感じないの？無知は時に罪になるよ。今すぐ私の前から消えて。\""
            }
        }
    },
    "after_dain_new": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_active.png",
        "sunset": true,
        "next": "after_dain_new_intro",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*체육관으로 향하자 노을빛이 스며드는 코트 위에서 배구 연습을 하고 있는 부원들이 보인다. 그중에서도 유독 눈에 띄는 한 소녀가 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Heading towards the gym, I see volleyball players practicing in the court bathed in the sunset. Among them, one girl stands out.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me dirijo al gimnasio y veo a las jugadoras de voleibol practicando en la cancha bañada por el atardecer. Entre ellas, una chica destaca especialmente.*"
            },
            "ja": {
                "name": "僕",
                "text": "*体育館に向かうと、夕焼けが差し込むコートでバレーの練習をしている部員たちが見える。その中でもひときわ目立つ少女がいた。*"
            }
        }
    },
    "after_dain_new_intro": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "sunset": true,
        "setFlag": "met_dain",
        "next": "after_dain_new_name_ask",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"안녕! 나 배구부 다인이야. 너 오늘 전학 온 애 맞지?\""
            },
            "en": {
                "name": "???",
                "text": "\"Hi! I'm Dain from the volleyball club. You're the transfer student, right?\""
            },
            "es": {
                "name": "???",
                "text": "\"¡Hola! Soy Dain del club de voleibol. ¿Tú eres el estudiante de intercambio, verdad?\""
            },
            "ja": {
                "name": "???",
                "text": "\"やっほー！バレー部のダインだよ。君、今日転校してきた子でしょ？\""
            }
        }
    },
    "after_dain_new_name_ask": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "sunset": true,
        "next": "after_dain_new_name_share",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"그러고 보니 이름이 뭐야? 나만 성급하게 물어본 것 같네!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"By the way, what's your name? Feels like I'm the only one rushing to ask!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Por cierto, ¿cómo te llamas? ¡Siento que soy la única que se apura en preguntar!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"そういえば名前なんだっけ？私ばっかり急いで聞いてる気がする！\""
            }
        }
    },
    "after_dain_new_name_share": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "sunset": true,
        "setFlag": "knows_name_dain",
        "next": "after_dain_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"나 {name}(이)고 2학년 3반이야. 잘 부탁해.\""
            },
            "en": {
                "name": "Me",
                "text": "\"I'm {name}, a second-year in class 3. Nice to meet you.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Soy {name}, de segundo año, clase 3. Mucho gusto.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"僕は{name}、2年3組だよ。よろしくね。\""
            }
        }
    },
    "after_dain": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_active.png",
        "sunset": true,
        "next": "after_dain_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*체육관에 도착하자 다인이는 높게 뛰어올라 강력한 스파이크를 내리꽂고 있다. 그녀의 건강한 에너지가 주변을 밝히는 것 같다.*"
            },
            "en": {
                "name": "Dain",
                "text": "*Arriving at the gym, Dain is jumping high and slamming powerful spikes. Her healthy energy seems to brighten everything around her.*"
            },
            "es": {
                "name": "Dain",
                "text": "*Al llegar al gimnasio, Dain está saltando alto y clavando potentes remates. Su energía saludable parece iluminar todo a su alrededor.*"
            },
            "ja": {
                "name": "ダイン",
                "text": "*体育館に着くと、ダインが高くジャンプして力強いスパイクを打ち込んでいる。彼女の健康的なエネルギーが周りを明るくしているようだ。*"
            }
        }
    },
    "after_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "sunset": true,
        "next": "dain_free_talk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*연습을 잠시 멈춘 사이, 다인이는 나를 발견하고는 수건으로 땀을 닦으며 달려온다.*"
            },
            "en": {
                "name": "Dain",
                "text": "*During a brief break from practice, Dain spots me and runs over while wiping her sweat with a towel.*"
            },
            "es": {
                "name": "Dain",
                "text": "*Durante una breve pausa en la práctica, Dain me ve y corre hacia mí mientras se seca el sudor con una toalla.*"
            },
            "ja": {
                "name": "ダイン",
                "text": "*練習の合間、ダインが僕を見つけてタオルで汗を拭きながら駆け寄ってくる。*"
            }
        }
    },
    "dain_free_talk": {
        "type": "free_talk",
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "affinityChar": "Dain",
        "affinityBranches": [
            {
                "minAffinity": 20,
                "next": "after_dain_3_high"
            },
            {
                "minAffinity": -10,
                "next": "after_dain_3"
            },
            {
                "minAffinity": -100,
                "next": "after_dain_3_low"
            }
        ],
        "next": "after_dain_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"와, {name}! 가까이서 보니까 더 반가운데? 나한테 궁금한 거 있어? 운동이라든가, 학교생활이라든가!\"",
                "context": "방과 후 노을 지는 체육관, 연습을 마친 다인과 즐겁게 대화를 나누는 상황입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 모두 끝나면 다인이 마지막 연습 세트를 끝내고 같이 맛있는 것을 먹으러 가자고 제안하는 상황으로 이어집니다. 대화의 마지막 턴에만 자연스럽게 연습을 마저 끝내야 한다거나 배가 고프다는 등의 이야기를 하며 다음 상황으로 유도해 주세요.",
                "personality": "털털하고 시원시원한 성격의 배구부 에이스. 운동을 사랑하며 주인공에게 호의적이고 에너지가 넘침."
            },
            "en": {
                "name": "Dain",
                "text": "\"Wow, {name}! Even nicer to see you up close, right? Got any questions for me? About sports, school life, anything!\"",
                "context": "After school at sunset in the gym, having a fun conversation with Dain who just finished practice. Keep the conversation going until it naturally concludes. When the conversation ends, Dain will finish her last practice set and suggest going to eat something delicious together. Only at the final turn, naturally mention needing to finish practice or being hungry to lead into the next scene.",
                "personality": "A straight-forward volleyball club ace with an easy-going personality. Loves sports and is friendly and energetic towards the protagonist."
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Wow, {name}! ¡Qué bueno verte de cerca! ¿Tienes alguna pregunta para mí? Sobre deportes, la vida escolar, ¡lo que sea!\"",
                "context": "Después de clases al atardecer en el gimnasio, teniendo una conversación divertida con Dain que acaba de terminar su práctica. Mantén la conversación hasta que termine naturalmente. Cuando la conversación termine, Dain terminará su último set de práctica y sugerirá ir a comer algo delicioso juntos. Solo en el turno final, menciona naturalmente que necesita terminar la práctica o que tiene hambre para llevar a la siguiente escena.",
                "personality": "La estrella directa del club de voleibol con una personalidad relajada. Ama los deportes y es amigable y enérgica con el protagonista."
            },
            "ja": {
                "name": "ダイン",
                "text": "\"わぁ、{name}！近くで見るともっと嬉しいね！私に聞きたいことある？運動のこととか、学校生活のこととか！\"",
                "context": "放課後、夕焼けの体育館で、練習を終えたダインと楽しく会話をしている場面です。会話が自然に終わるまで続けてください。会話が終わったら、ダインは最後の練習セットを終えて一緒に美味しいものを食べに行こうと提案する場面に続きます。最後のターンだけ、練習を終わらせなきゃとかお腹すいたなどの話を自然にして次のシーンへ誘導してください。",
                "personality": "さっぱりとした性格のバレー部エース。運動が大好きで、主人公に好意的でエネルギーに溢れている。"
            }
        }
    },
    "after_dain_3_high": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_dain_cheer_high",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "after_dain_help_high",
                "stats": {
                    "Dain": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "after_dain_tired_high",
                "stats": {
                    "Dain": {
                        "affinity": -20
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이와 대화를 나누다 보니 시간 가는 줄 몰랐다. 그녀의 밝은 에너지 덕분에 나까지 기분이 좋아진다. 다인이는 마지막 연습 세트를 끝내고 같이 맛있는 걸 먹으러 가자고 제안했다.*",
                "choices": [
                    "좋아, 내가 응원할게! 파이팅!",
                    "나도 연습 도와줄게. 공 던져줘!",
                    "오늘은 좀 피곤한데, 그냥 집에 가면 안 돼?"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Time flew by talking with Dain. Her bright energy lifted my spirits too. Dain suggested we go eat something delicious after her last practice set.*",
                "choices": [
                    "Sure, I'll cheer you on! Go for it!",
                    "I'll help with practice. Toss me the ball!",
                    "I'm kinda tired today, can we just go home?"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*El tiempo voló hablando con Dain. Su energía brillante me animó también. Dain sugirió ir a comer algo delicioso después de su último set de práctica.*",
                "choices": [
                    "¡Claro, te animo! ¡Tú puedes!",
                    "Te ayudo con la práctica. ¡Pásame la pelota!",
                    "Estoy algo cansado hoy, ¿podemos ir a casa?"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ダインと話してたらあっという間に時間が過ぎた。彼女の明るいエネルギーのおかげで僕まで気分が良くなる。ダインは最後の練習セットを終えたら一緒に美味しいものを食べに行こうと提案してきた。*",
                "choices": [
                    "いいよ、応援するよ！頑張って！",
                    "僕も練習手伝うよ。ボール投げてよ！",
                    "今日はちょっと疲れたんだけど、帰っちゃダメかな？"
                ]
            }
        }
    },
    "after_dain_3_low": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_dain_cheer_low",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "after_dain_help_low",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "after_dain_tired_low",
                "stats": {
                    "Dain": {
                        "affinity": -20
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이의 표정이 좋지 않다. 연습하느라 예민한 그녀에게 내가 실언을 한 모양이다. 그녀는 퉁명스럽게 마지막 세트만 끝내고 가겠다고 말했다.*",
                "choices": [
                    "좋아, 내가 응원할게! 파이팅!",
                    "나도 연습 도와줄게. 공 던져줘!",
                    "오늘은 좀 피곤한데, 그냥 집에 가면 안 돼?"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Dain doesn't look happy. Seems like I said something wrong to her while she was sensitive from practice. She curtly said she'd just finish her last set and leave.*",
                "choices": [
                    "Sure, I'll cheer you on! Go for it!",
                    "I'll help with practice. Toss me the ball!",
                    "I'm kinda tired today, can we just go home?"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Dain no se ve contenta. Parece que dije algo mal mientras estaba sensible por la práctica. Dijo secamente que solo terminaría su último set y se iría.*",
                "choices": [
                    "¡Claro, te animo! ¡Tú puedes!",
                    "Te ayudo con la práctica. ¡Pásame la pelota!",
                    "Estoy algo cansado hoy, ¿podemos ir a casa?"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ダインの表情が良くない。練習でピリピリしている彼女に、僕が余計なことを言ってしまったみたいだ。彼女はぶっきらぼうに最後のセットだけ終わらせて帰ると言った。*",
                "choices": [
                    "いいよ、応援するよ！頑張って！",
                    "僕も練習手伝うよ。ボール投げてよ！",
                    "今日はちょっと疲れたんだけど、帰っちゃダメかな？"
                ]
            }
        }
    },
    "after_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_dain_cheer_normal",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "after_dain_help_normal",
                "stats": {
                    "Dain": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "after_dain_tired_normal",
                "stats": {
                    "Dain": {
                        "affinity": -20
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이와 즐겁게 대화를 마쳤다. 그녀는 마지막 연습 세트를 마무리할 테니 잠시만 기다려 달라고 했다. 연습이 끝나면 같이 맛있는 걸 먹으러 가기로 했다.*",
                "choices": [
                    "좋아, 내가 응원할게! 파이팅!",
                    "나도 연습 도와줄게. 공 던져줘!",
                    "오늘은 좀 피곤한데, 그냥 집에 가면 안 돼?"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Had a nice chat with Dain. She asked me to wait while she finishes her last practice set. We agreed to go eat something delicious after.*",
                "choices": [
                    "Sure, I'll cheer you on! Go for it!",
                    "I'll help with practice. Toss me the ball!",
                    "I'm kinda tired today, can we just go home?"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Tuve una buena charla con Dain. Me pidió que esperara mientras termina su último set de práctica. Acordamos ir a comer algo delicioso después.*",
                "choices": [
                    "¡Claro, te animo! ¡Tú puedes!",
                    "Te ayudo con la práctica. ¡Pásame la pelota!",
                    "Estoy algo cansado hoy, ¿podemos ir a casa?"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ダインと楽しく話を終えた。彼女は最後の練習セットを終わらせるからちょっと待っててと言った。練習が終わったら一緒に美味しいものを食べに行く約束をした。*",
                "choices": [
                    "いいよ、応援するよ！頑張って！",
                    "僕も練習手伝うよ。ボール投げてよ！",
                    "今日はちょっと疲れたんだけど、帰っちゃダメかな？"
                ]
            }
        }
    },
    "after_dain_tired_high": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "next": "after_dain_tired_high_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*다인이가 아쉬운 기색을 감추지 못하며 내 손을 살짝 붙잡았다가 놓는다.*"
            },
            "en": {
                "name": "Dain",
                "text": "*Dain can't hide her disappointment and briefly grabs my hand before letting go.*"
            },
            "es": {
                "name": "Dain",
                "text": "*Dain no puede ocultar su decepción y agarra brevemente mi mano antes de soltarla.*"
            },
            "ja": {
                "name": "ダイン",
                "text": "*ダインが残念そうな表情を隠せず、僕の手をちょっと掴んでから離す。*"
            }
        }
    },
    "after_dain_tired_high_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"{name}, 정말 가는 거야? 조금 더 같이 있고 싶었는데... 아, 아니! 전학 첫날이라 피곤할 텐데 내가 너무 붙잡았네. 미안! 얼른 가서 쉬어. 내일은 꼭 같이 맛있는 거 먹자?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"{name}, you're really leaving? I wanted to spend more time together... Oh no! You must be tired from your first day. Sorry for keeping you! Go rest. Promise we'll eat together tomorrow?\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¿{name}, de verdad te vas? Quería pasar más tiempo juntos... ¡Ah no! Debes estar cansado por tu primer día. ¡Perdón por entretenerte! Ve a descansar. ¿Prometes que comeremos juntos mañana?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"{name}、本当に帰っちゃうの？もうちょっと一緒にいたかったのに...あ、ごめん！転校初日で疲れてるよね。引き止めてごめん！早く帰って休んで。明日は絶対一緒に美味しいもの食べようね？\""
            }
        }
    },
    "after_dain_tired_low": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "sunset": true,
        "next": "after_dain_tired_low_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*그녀가 차가운 눈빛으로 나를 힐끗 쳐다보고는 다시 공을 집어 든다.*"
            },
            "en": {
                "name": "Dain",
                "text": "*She glances at me coldly and picks up another ball.*"
            },
            "es": {
                "name": "Dain",
                "text": "*Me mira fríamente de reojo y recoge otra pelota.*"
            },
            "ja": {
                "name": "ダイン",
                "text": "*彼女が冷たい目でチラッとこちらを見て、また別のボールを手に取る。*"
            }
        }
    },
    "after_dain_tired_low_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "sunset": true,
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"그래, 마음대로 해. 바쁜 사람 붙잡아두는 것도 미안하니까. 조심히 가든가 말든가.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Fine, do what you want. Sorry for keeping someone busy. Go home or whatever.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Bien, haz lo que quieras. Perdón por retener a alguien tan ocupado. Vete a casa o lo que sea.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"はいはい、好きにすれば。忙しい人を引き止めて悪かったね。気をつけて帰れば。\""
            }
        }
    },
    "after_dain_tired_normal": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "sunset": true,
        "next": "after_dain_tired_normal_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*다인이는 살짝 아쉬운 표정을 짓더니 이내 고개를 끄덕인다.*"
            },
            "en": {
                "name": "Dain",
                "text": "*Dain looks a bit disappointed but nods.*"
            },
            "es": {
                "name": "Dain",
                "text": "*Dain se ve algo decepcionada pero asiente.*"
            },
            "ja": {
                "name": "ダイン",
                "text": "*ダインは少し残念そうな表情をしたけど、すぐに頷いた。*"
            }
        }
    },
    "after_dain_tired_normal_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "sunset": true,
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"아... 맞다. 전학 첫날이라 피곤하겠구나. 미안, 내가 너무 신났나 봐. 그래, 오늘은 이만 들어가 봐. 내일 봐!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh... right. You must be tired from your first day. Sorry, I got too excited. Okay, go home today. See you tomorrow!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Ah... cierto. Debes estar cansado por tu primer día. Perdón, me emocioné demasiado. Bueno, ve a casa hoy. ¡Nos vemos mañana!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"あ...そっか。転校初日だから疲れてるよね。ごめん、私がはしゃぎすぎた。うん、今日はもう帰りな。また明日ね！\""
            }
        }
    },
    "after_dain_help_high": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "after_dain_help_high_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*그녀의 눈이 반짝이며 정말 기쁜 듯 나를 향해 달려온다.*"
            },
            "en": {
                "name": "Dain",
                "text": "*Her eyes sparkle as she runs towards me, clearly overjoyed.*"
            },
            "es": {
                "name": "Dain",
                "text": "*Sus ojos brillan mientras corre hacia mí, claramente encantada.*"
            },
            "ja": {
                "name": "ダイン",
                "text": "*彼女の目がキラキラ輝いて、本当に嬉しそうに僕に向かって走ってくる。*"
            }
        }
    },
    "after_dain_help_high_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_active.png",
        "sunset": true,
        "next": "after_dain_normal",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"정말? 역시 {name}(이)야! 나를 도와주겠다니 완전 든든한걸? 자, 공 간다! 멋지게 올려줘!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Really? That's {name} for you! Helping me out feels so reassuring! Here, toss it up nice and high!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¿¡En serio!? ¡Así se habla, {name}! Que me ayudes me da mucha confianza. ¡Toma, lánzala bien alto!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"本当？さすが{name}！手伝ってくれるなんて超心強い！ほら、高く上げてよ！\""
            }
        }
    },
    "after_dain_help_low": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "sunset": true,
        "next": "after_dain_help_low_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*그녀가 의심스러운 눈초리로 나를 빤히 바라본다.*"
            },
            "en": {
                "name": "Dain",
                "text": "*She looks at me suspiciously.*"
            },
            "es": {
                "name": "Dain",
                "text": "*Me mira con sospecha.*"
            },
            "ja": {
                "name": "ダイン",
                "text": "*彼女が疑わしそうな目でじっと僕を見つめる。*"
            }
        }
    },
    "after_dain_help_low_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "sunset": true,
        "next": "after_dain_normal",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"...할 줄은 알아? 방해만 하지 마. 대충 던져주기나 해.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Do you even know how? Just don't get in my way. Toss it however.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...¿Acaso sabes cómo? Solo no me estorbes. Lánzala como sea.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"...できんの？邪魔だけはしないでよ。適当に投げてくれればいいから。\""
            }
        }
    },
    "after_dain_help_normal": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "after_dain_help_normal_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*그녀의 눈이 반짝이며 나에게 공을 건넨다.*"
            },
            "en": {
                "name": "Dain",
                "text": "*Her eyes light up as she hands me a ball.*"
            },
            "es": {
                "name": "Dain",
                "text": "*Sus ojos se iluminan mientras me pasa una pelota.*"
            },
            "ja": {
                "name": "ダイン",
                "text": "*彼女の目がパッと輝いて、僕にボールを渡す。*"
            }
        }
    },
    "after_dain_help_normal_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_active.png",
        "sunset": true,
        "next": "after_dain_normal",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오! 도와주겠다고? 좋아! 그럼 네트 쪽으로 높게 띄워줘! 간다!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh! You'll help? Great! Toss it high towards the net! Here I go!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Oh! ¿Me ayudarás? ¡Genial! ¡Lánzala alto hacia la red! ¡Ahí voy!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"お！手伝ってくれるの？やった！ネットの方に高く上げて！行くよ！\""
            }
        }
    },
    "after_dain_cheer_high": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "next": "after_dain_cheer_high_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*다인이는 얼굴이 빨개져서 어쩔 줄 몰라 하며 활짝 웃는다.*"
            },
            "en": {
                "name": "Dain",
                "text": "*Dain blushes and beams with a wide smile.*"
            },
            "es": {
                "name": "Dain",
                "text": "*Dain se sonroja y sonríe ampliamente.*"
            },
            "ja": {
                "name": "ダイン",
                "text": "*ダインは顔を赤くして、満面の笑みを浮かべる。*"
            }
        }
    },
    "after_dain_cheer_high_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "next": "after_dain_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"{name}(이)가 응원해주니까... 왠지 평소보다 백배는 더 잘할 수 있을 것 같아! 고마워. 나 멋진 모습 보여줄 테니까 눈 떼지 말고 잘 봐?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"With {name} cheering... I feel like I can do a hundred times better! Thanks. I'll show you my cool side so don't look away, okay?\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Con {name} animándome... ¡siento que puedo hacerlo cien veces mejor! Gracias. Te mostraré mi lado genial, así que no apartes la mirada, ¿ok?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"{name}が応援してくれたら...なんか普段より百倍うまくできそう！ありがとう。かっこいいとこ見せてあげるから、目を離さないでね？\""
            }
        }
    },
    "after_dain_cheer_low": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "sunset": true,
        "next": "after_dain_cheer_low_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*그녀가 눈살을 찌푸리며 퉁명스럽게 대꾸한다.*"
            },
            "en": {
                "name": "Dain",
                "text": "*She frowns and responds curtly.*"
            },
            "es": {
                "name": "Dain",
                "text": "*Frunce el ceño y responde secamente.*"
            },
            "ja": {
                "name": "ダイン",
                "text": "*彼女が眉をひそめてぶっきらぼうに答える。*"
            }
        }
    },
    "after_dain_cheer_low_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "sunset": true,
        "next": "after_dain_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"필요 없어. 구경하는 것도 부담스러우니까 저만치 떨어져 있어. 응원 같은 거 안 해도 나 잘하거든?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Don't need it. Having you watch is annoying, so stay back over there. I'm already good without cheering.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"No lo necesito. Que me mires es molesto, así que quédate allá atrás. Ya soy buena sin porras.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"いらない。見られるのも鬱陶しいから向こうに離れてて。応援なんかなくても私はうまいから。\""
            }
        }
    },
    "after_dain_cheer_normal": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "after_dain_cheer_normal_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*다인이는 쑥스러운 듯 코끝을 찡긋하며 웃는다.*"
            },
            "en": {
                "name": "Dain",
                "text": "*Dain scrunches her nose shyly and smiles.*"
            },
            "es": {
                "name": "Dain",
                "text": "*Dain arruga la nariz tímidamente y sonríe.*"
            },
            "ja": {
                "name": "ダイン",
                "text": "*ダインが恥ずかしそうに鼻をクシャッとさせて笑う。*"
            }
        }
    },
    "after_dain_cheer_normal_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "next": "after_dain_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"뭐, 뭐야... 갑자기 그렇게 칭찬하면 부끄럽잖아! 딱히 네가 보고 있다고 열심히 하는 건 아니니까 착각하지 마. 그래도... 네가 봐주니까 좀 더 힘이 나는 것 같기도 하고...\""
            },
            "en": {
                "name": "Dain",
                "text": "\"W-what... Complimenting me like that so suddenly is embarrassing! It's not like I'm trying harder because you're watching. But still... having you watch does make me feel more energized somehow...\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¿Q-qué...? ¡Que me halagues así de repente es vergonzoso! No es que me esfuerce más porque me estés mirando. Pero aún así... que me veas sí me da más energía de algún modo...\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"な、何よ...急にそんな褒めたら恥ずかしいでしょ！別にあんたが見てるから頑張ってるわけじゃないんだからね。でも...見てくれてるとちょっと力が湧く気もするし...\""
            }
        }
    },
    "after_dain_normal": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "after_dain_normal_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*다인이는 장난스럽게 내 어깨를 툭 친다.*"
            },
            "en": {
                "name": "Dain",
                "text": "*Dain playfully taps my shoulder.*"
            },
            "es": {
                "name": "Dain",
                "text": "*Dain me da un golpecito juguetón en el hombro.*"
            },
            "ja": {
                "name": "ダイン",
                "text": "*ダインがふざけて僕の肩をポンと叩く。*"
            }
        }
    },
    "after_dain_normal_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "after_dain_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"에이~ 아직은 잘 못하나 보네. 좋아. 이왕 김에 우리 연습 끝날 때까지 좀 기다려줄래? 같이 떡볶이라도 먹으러 가자!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hehe, not quite there yet. Alright, while we're at it, can you wait until our practice ends? Let's go get tteokbokki together!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Jeje, aún no llegas al nivel. Bueno, ya que estamos, ¿puedes esperar a que termine la práctica? ¡Vamos a comer tteokbokki juntos!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"えへへ、まだまだだね〜。よし、せっかくだから練習終わるまで待ってくれない？一緒にトッポギ食べに行こ！\""
            }
        }
    },
    "after_dain_end": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "sunset": true,
        "next": "after_dain_end_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인의 연습이 끝날 때까지 체육관 스탠드에 앉아 그녀를 지켜보았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I sat in the gym stands watching Dain until her practice ended.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me senté en las gradas del gimnasio observando a Dain hasta que terminó su práctica.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインの練習が終わるまで、体育館のスタンドに座って彼女を見守った。*"
            }
        }
    },
    "after_dain_end_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "sunset": true,
        "setFlag": "dated_dain_day1",
        "next": "after_dain_tteokbokki",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*연습을 마친 다인이는 거친 숨을 몰아쉬며 나에게 달려온다.* \"후아... 후아... 기다리게 해서 미안! 자, 떡볶이 먹으러 가자!\""
            },
            "en": {
                "name": "Dain",
                "text": "*After practice, Dain runs over to me, breathing heavily.* \"Phew... phew... Sorry for making you wait! Come on, let's go get some tteokbokki!\""
            },
            "es": {
                "name": "Dain",
                "text": "*Después de la práctica, Dain corre hacia mí respirando con dificultad.* \"Uf... uf... ¡Perdón por hacerte esperar! ¡Vamos, vamos a comer tteokbokki!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*練習を終えたダインが息を荒くしながら僕のところに走ってくる。* \"ふぅ...ふぅ...待たせてごめん！さ、トッポギ食べに行こ！\""
            }
        }
    },
    "after_dain_tteokbokki": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "after_dain_tteokbokki_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*김이 모락모락 나는 떡볶이를 크게 베어 물며 다인이는 행복한 미소를 짓는다.*"
            },
            "en": {
                "name": "Dain",
                "text": "*Taking a big bite of steaming tteokbokki, Dain smiles happily.*"
            },
            "es": {
                "name": "Dain",
                "text": "*Dando un gran mordisco al tteokbokki humeante, Dain sonríe feliz.*"
            },
            "ja": {
                "name": "ダイン",
                "text": "*湯気の立つトッポギを大きく頬張りながら、ダインは幸せそうに笑う。*"
            }
        }
    },
    "after_dain_tteokbokki_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "after_dain_tteokbokki_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"와, 역시 운동 끝나고 먹는 떡볶이가 최고라니까! 오늘 같이 와줘서 정말 고마워. 덕분에 평소보다 백 배는 더 맛있는 것 같아!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Ah, tteokbokki after practice is the best! Thanks for coming with me today. It tastes a hundred times better with you!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Ah, el tteokbokki después de la práctica es lo mejor! Gracias por venir conmigo hoy. ¡Contigo sabe cien veces más rico!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"やっぱ運動の後のトッポギは最高だね！今日一緒に来てくれてありがとう。おかげでいつもより百倍美味しい気がする！\""
            }
        }
    },
    "after_dain_tteokbokki_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "after_home",
                "condition": "has_number_dain"
            },
            {
                "next": "dain_contact_exchange"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"우리 내일도.. 아니, 앞으로도 자주 같이 먹으러 오자! 약속이다?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Let's come here often together tomorrow too.. no, from now on! Promise?\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Vengamos juntos seguido mañana también... no, de ahora en adelante! ¿Prometido?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"明日も...ううん、これからもずっと一緒に食べに来よ！約束だよ？\""
            }
        }
    },
    "dain_contact_exchange": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "dain_contact_success",
                "setFlags": [
                    "has_number_dain",
                    "has_any_contact"
                ]
            },
            {
                "next": "dain_contact_call_fail",
                "affinityChar": "Dain",
                "affinityBranches": [
                    {
                        "minAffinity": 35,
                        "next": "dain_contact_call_success"
                    }
                ],
                "setFlags": [
                    "has_number_dain",
                    "has_any_contact"
                ]
            },
            {
                "next": "dain_contact_fail",
                "stats": {
                    "Dain": {
                        "affinity": -20
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*다인이는 떡볶이 국물을 닦으며 장난스럽게 스마트폰을 흔들어 보인다.* \"야 {name}! 우리 앞으로도 같이 맛있는 거 먹으러 다니려면 연락처는 있어야겠지? 번호 찍어줘!\"",
                "choices": [
                    "좋아! 다인이랑 맛집 탐방 다니면 재밌겠다.",
                    "번호 따는 김에... 지금 바로 전화해도 돼?",
                    "음.. 나중에 기회 되면 알려줄게."
                ]
            },
            "en": {
                "name": "Dain",
                "text": "*Dain wipes the sauce off and playfully waves her smartphone.* \"Hey {name}! If we're gonna eat out together from now on, we need each other's numbers! Give me yours!\"",
                "choices": [
                    "Sure! It'd be fun to explore restaurants with you, Dain.",
                    "While we're exchanging numbers.. can I call you right now?",
                    "Hmm.. I'll let you know later when I get a chance."
                ]
            },
            "es": {
                "name": "Dain",
                "text": "*Dain se limpia la salsa y agita su celular juguetonamente.* \"¡Oye, {name}! ¡Si vamos a comer juntos de ahora en adelante, necesitamos nuestros números! ¡Dame el tuyo!\"",
                "choices": [
                    "¡Claro! Sería divertido explorar restaurantes contigo, Dain.",
                    "Ya que estamos intercambiando números... ¿puedo llamarte ahora?",
                    "Mmm... te lo daré después cuando tenga oportunidad."
                ]
            },
            "ja": {
                "name": "ダイン",
                "text": "*ダインがトッポギのタレを拭きながら、いたずらっぽくスマホを振ってみせる。* \"ねえ{name}！これからも一緒に美味しいもの食べに行くなら連絡先ないとでしょ？番号教えて！\"",
                "choices": [
                    "いいよ！ダインと食べ歩きするの楽しそう。",
                    "番号交換ついでに...今すぐ電話してもいい？",
                    "うーん...また機会があったら教えるよ。"
                ]
            }
        }
    },
    "dain_contact_call_success": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 20
            }
        },
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*다인이는 얼굴을 붉히며 당황한 듯 웃는다.* \"...뭐야. 갑자기 내 목소리 듣고 싶다니... 나 내일 연습 일찍 가야 하니까 너무 오래 하진 마.\""
            },
            "en": {
                "name": "Dain",
                "text": "*Dain blushes and laughs nervously.* \"W-what! Out of nowhere... Wanting to hear my voice... That's too heart-fluttering! I have early practice tomorrow so don't talk too long!\""
            },
            "es": {
                "name": "Dain",
                "text": "*Dain se sonroja y ríe nerviosa.* \"¡¿Q-qué?! De la nada... Querer escuchar mi voz... ¡Eso me hace latir el corazón! Mañana tengo práctica temprano, ¡así que no hables demasiado!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*ダインが顔を赤くして慌てたように笑う。* \"...なに。急に私の声が聞きたいとか...ドキドキするでしょ！明日練習早いから長電話はダメだからね。\""
            }
        }
    },
    "dain_contact_call_fail": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": -5
            }
        },
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*다인이는 어이없다는 듯 웃음을 터뜨린다.* \"야, 너 진짜 웃긴다. 번호 받자마자 전화하니, 너무 서두르는 거 아냐? 일단 메시지부터 주고받으면서 친해지자고!\""
            },
            "en": {
                "name": "Dain",
                "text": "*Dain bursts out laughing.* \"Hey, you're hilarious. Calling right after getting the number, aren't you rushing? Let's start with texting and get closer!\""
            },
            "es": {
                "name": "Dain",
                "text": "*Dain se echa a reír.* \"Oye, eres gracioso. ¿Llamar justo después de tener el número? ¿No vas muy rápido? ¡Empecemos con mensajes y nos vamos conociendo!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*ダインが吹き出して笑う。* \"ちょっと、面白すぎ。番号もらった瞬間に電話って、急すぎない？まずはメッセージからにしようよ！\""
            }
        }
    },
    "dain_contact_success": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 15
            }
        },
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*다인이는 시원하게 웃으며 번호를 저장한다.* \"연락처 전송 완료! 내가 맛있는 곳 찾으면 바로 메시지 보낼 테니까 대기하고 있어!\""
            },
            "en": {
                "name": "Dain",
                "text": "*Dain saves the number with a refreshing smile.* \"Contact sent! I'll text you as soon as I find a good place to eat!\""
            },
            "es": {
                "name": "Dain",
                "text": "*Dain guarda el número con una sonrisa refrescante.* \"¡Contacto guardado! ¡Te escribiré en cuanto encuentre un buen lugar para comer!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*ダインが爽やかに笑いながら番号を保存する。* \"連絡先ゲット！美味しいお店見つけたらすぐメッセージ送るから待っててね！\""
            }
        }
    },
    "dain_contact_fail": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": -5
            }
        },
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*다인이는 조금 의외라는 듯 입술을 삐죽이게 하더니 이내 씩씩하게 웃어넘긴다.* \"뭐야~ 튕기는 거야? 알았어, 알았어. 내가 더 노력해서 네 번호 따고 만다!\""
            },
            "en": {
                "name": "Dain",
                "text": "*Dain pouts for a moment but then smiles it off.* \"What, playing hard to get? Alright, alright. I'll try harder to get your number!\""
            },
            "es": {
                "name": "Dain",
                "text": "*Dain hace un puchero por un momento pero luego lo deja pasar con una sonrisa.* \"¿Qué, te haces del rogar? Está bien, está bien. ¡Me esforzaré más para conseguir tu número!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*ダインが一瞬口を尖らせたけど、すぐにカラッと笑い飛ばす。* \"なにー、じらすの？わかったわかった。もっと頑張って番号ゲットしてみせるから！\""
            }
        }
    },
    "after_nurse": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "after_nurse_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*보건실 문을 열자, 선생님이 창가에서 차를 마시고 있다가 나를 보고 미소 짓는다.*"
            },
            "en": {
                "name": "School Nurse",
                "text": "*Opening the nurse's office door, the teacher is drinking tea by the window and smiles when she sees me.*"
            },
            "es": {
                "name": "Enfermera",
                "text": "*Al abrir la puerta de la enfermería, la profesora está tomando té junto a la ventana y sonríe al verme.*"
            },
            "ja": {
                "name": "保健先生",
                "text": "*保健室のドアを開けると、窓際でお茶を飲んでいた先生が僕を見て微笑む。*"
            }
        }
    },
    "after_nurse_new": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "after_nurse_new_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나도 모르게 몸이 나른해져 보건실 쪽으로 발걸음을 옮겼다. 문을 열자 은은한 약초 향기와 함께 성숙한 분위기의 선생님이 나를 맞이한다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I unconsciously felt drowsy and walked towards the nurse's office. Opening the door, a gentle herbal scent greets me along with a mature-looking teacher.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sin darme cuenta me sentí somnoliento y caminé hacia la enfermería. Al abrir la puerta, un suave aroma a hierbas me recibe junto con una profesora de aspecto maduro.*"
            },
            "ja": {
                "name": "僕",
                "text": "*知らず知らずのうちに体がだるくなって、保健室の方へ足を運んだ。ドアを開けると、ほのかな薬草の香りとともに、落ち着いた雰囲気の先生が僕を迎えてくれる。*"
            }
        }
    },
    "after_nurse_new_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "setFlag": "met_nurse",
        "next": "after_nurse_new_name_ask",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, 처음 보는 얼굴이네? 오늘 전학 온 학생이니? 나는 보건선생님이야. 어디가 아파서 온 걸까?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"My, a face I haven't seen before? Are you the new transfer student? I'm the school nurse. Are you here because something hurts?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Vaya, ¿una cara nueva? ¿Eres el estudiante de intercambio? Soy la enfermera de la escuela. ¿Vienes porque te duele algo?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"あら、初めて見る顔ね？今日転校してきた生徒？私は保健の先生よ。どこか痛いの？\""
            }
        }
    },
    "after_nurse_new_name_ask": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "after_nurse_new_name_share",
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
                "text": "\"Por cierto, ¿cómo te llamas? ¿Me lo dirás solo a mí?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"そういえば名前は？先生にだけこっそり教えてくれる？\""
            }
        }
    },
    "after_nurse_new_name_share": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "setFlag": "knows_name_nurse",
        "next": "nurse_after_day1_contact",
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
                "text": "\"Mi nombre es {name}.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"僕の名前は{name}です。\""
            }
        }
    },
    "after_nurse_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "nurse_after_day1_contact",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"{name}! 집에 가기 전에 나 보러 온 거니? 정말 착한 학생이네.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"{name}! Came to see me before going home? What a sweet student.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"¡{name}! ¿Viniste a verme antes de irte a casa? Qué estudiante tan dulce.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"{name}！帰る前に会いに来てくれたの？本当にいい子ね。\""
            }
        }
    },
    "nurse_after_day1_contact": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "nurse_after_day1_contact_already",
                "condition": "has_number_nurse"
            },
            {
                "next": "nurse_after_day1_contact_choice"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"자, 여기 앉으렴. 따뜻한 차 한 잔 줄게. 나랑 좀 더 이야기하고 갈래?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Here, have a seat. Let me pour you some warm tea. Want to chat with me a bit more?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Ven, siéntate. Te sirvo un poco de té caliente. ¿Quieres platicar un poco más conmigo?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"さあ、ここに座って。温かいお茶を入れてあげるわ。もう少し先生とお話ししていく？\""
            }
        }
    },
    "nurse_after_day1_contact_already": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "nurse_after_day1_contact_already_stay",
                "stats": {
                    "Nurse": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "nurse_after_day1_contact_already_leave"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*따뜻한 차 향기가 코끝을 스친다. 어떻게 할까?*",
                "choices": [
                    "네, 잠깐 쉬었다 갈게요.",
                    "오늘은 좀 피곤해서요..."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The warm scent of tea tickles my nose. What should I do?*",
                "choices": [
                    "Yes, I'll rest a bit before going.",
                    "I'm a bit tired today..."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*El cálido aroma del té me acaricia la nariz. ¿Qué debería hacer?*",
                "choices": [
                    "Sí, descansaré un poco antes de irme.",
                    "Estoy algo cansado hoy..."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*温かいお茶の香りが鼻をくすぐる。どうしようかな？*",
                "choices": [
                    "はい、少し休んでいきます。",
                    "今日はちょっと疲れていて..."
                ]
            }
        }
    },
    "nurse_after_day1_contact_already_stay": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "nurse_after_day1_contact_already_stay_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"후훗, 착하네. 전학 첫날이라 힘들었지? 선생님이랑 잠깐 쉬어가렴.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Hehe, good student. It must have been tiring being your first day. Rest here with me for a bit.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Jeje, buen chico. Tu primer día debió ser agotador. Descansa aquí conmigo un rato.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"ふふ、いい子ね。転校初日で疲れたでしょ？先生と少し休んでいきなさい。\""
            }
        }
    },
    "nurse_after_day1_contact_already_stay_2": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"...그래, 이제 슬슬 가봐야겠다. 힘들면 언제든 연락해, 알지?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Alright, time to head out soon. Contact me anytime if you need anything, okay?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...Bien, ya es hora de irse. Contáctame cuando quieras si necesitas algo, ¿de acuerdo?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"...そうね、そろそろ帰らなきゃ。辛いことがあったらいつでも連絡してね、わかった？\""
            }
        }
    },
    "nurse_after_day1_contact_already_leave": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"그래, 무리하지 말고. 힘들면 언제든 연락해, 알지? 조심해서 들어가.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Okay, don't push yourself. Contact me anytime if you need anything, okay? Get home safely.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Está bien, no te esfuerces demasiado. Contáctame cuando quieras si necesitas algo, ¿de acuerdo? Llega con cuidado.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"そう、無理しないでね。辛いことがあったらいつでも連絡してね、わかった？気をつけて帰りなさい。\""
            }
        }
    },
    "nurse_after_day1_contact_choice": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "nurse_after_day1_contact_stay",
                "stats": {
                    "Nurse": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "nurse_after_day1_contact_2"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*따뜻한 차 향기가 코끝을 스친다. 어떻게 할까?*",
                "choices": [
                    "네, 잠깐 쉬었다 갈게요.",
                    "오늘은 좀 피곤해서요..."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The warm scent of tea tickles my nose. What should I do?*",
                "choices": [
                    "Yes, I'll rest a bit before going.",
                    "I'm a bit tired today..."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*El cálido aroma del té me acaricia la nariz. ¿Qué debería hacer?*",
                "choices": [
                    "Sí, descansaré un poco antes de irme.",
                    "Estoy algo cansado hoy..."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*温かいお茶の香りが鼻をくすぐる。どうしようかな？*",
                "choices": [
                    "はい、少し休んでいきます。",
                    "今日はちょっと疲れていて..."
                ]
            }
        }
    },
    "nurse_after_day1_contact_stay": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "nurse_after_day1_contact_stay_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"후훗, 착하네. 전학 첫날이라 힘들었지? 선생님이랑 잠깐 쉬어가렴.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Hehe, good student. It must have been tiring being your first day. Rest here with me for a bit.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Jeje, buen chico. Tu primer día debió ser agotador. Descansa aquí conmigo un rato.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"ふふ、いい子ね。転校初日で疲れたでしょ？先生と少し休んでいきなさい。\""
            }
        }
    },
    "nurse_after_day1_contact_stay_2": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "nurse_after_day1_contact_success",
                "setFlags": [
                    "has_number_nurse",
                    "has_any_contact"
                ]
            },
            {
                "next": "nurse_after_day1_contact_fail",
                "stats": {
                    "Nurse": {
                        "affinity": -15
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"...그래, 이제 슬슬 가봐야겠다. {name}, 혹시 모르니까 내 번호 저장해둘래? 아프거나 고민 있으면 언제든 연락해.\"",
                "choices": [
                    "네, 알려주세요!",
                    "아직은 좀 부담스러워요."
                ]
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Alright, time to head out soon. {name}, just in case, save my number? Contact me anytime if you're sick or have worries.\"",
                "choices": [
                    "Yes, please tell me!",
                    "It's still a bit uncomfortable."
                ]
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...Bien, ya es hora de irse. {name}, por si acaso, ¿guardas mi número? Contáctame cuando quieras si te sientes mal o tienes preocupaciones.\"",
                "choices": [
                    "¡Sí, por favor dígamelo!",
                    "Todavía me resulta algo incómodo."
                ]
            },
            "ja": {
                "name": "保健先生",
                "text": "\"...そうね、そろそろ帰らなきゃ。{name}、念のため先生の番号保存しておく？具合が悪い時や悩みがある時、いつでも連絡してね。\"",
                "choices": [
                    "はい、教えてください！",
                    "まだちょっと気が引けます。"
                ]
            }
        }
    },
    "nurse_after_day1_contact_2": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "nurse_after_day1_contact_success",
                "setFlags": [
                    "has_number_nurse",
                    "has_any_contact"
                ]
            },
            {
                "next": "nurse_after_day1_contact_fail",
                "stats": {
                    "Nurse": {
                        "affinity": -15
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"벌써 가려고? 아쉽네... {name}, 혹시 모르니까 내 번호 저장해둘래? 아프거나 고민 있으면 언제든 연락해.\"",
                "choices": [
                    "네, 알려주세요!",
                    "아직은 좀 부담스러워요."
                ]
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Leaving already? Too bad... {name}, just in case, save my number? Contact me anytime if you're sick or have worries.\"",
                "choices": [
                    "Yes, please tell me!",
                    "It's still a bit uncomfortable."
                ]
            },
            "es": {
                "name": "Enfermera",
                "text": "\"¿Ya te vas? Qué lástima... {name}, por si acaso, ¿guardas mi número? Contáctame cuando quieras si te sientes mal o tienes preocupaciones.\"",
                "choices": [
                    "¡Sí, por favor dígamelo!",
                    "Todavía me resulta algo incómodo."
                ]
            },
            "ja": {
                "name": "保健先生",
                "text": "\"もう帰るの？残念...{name}、念のため先生の番号保存しておく？具合が悪い時や悩みがある時、いつでも連絡してね。\"",
                "choices": [
                    "はい、教えてください！",
                    "まだちょっと気が引けます。"
                ]
            }
        }
    },
    "nurse_after_day1_contact_success": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "stats": {
            "Nurse": {
                "affinity": 10
            }
        },
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"후훗, 착하네. 그럼 나중에 밤에 연락할게? 잘 가, {name}.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Hehe, good student. Then I'll text you tonight? Take care, {name}.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Jeje, buen chico. ¿Entonces te escribo esta noche? Cuídate, {name}.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"ふふ、いい子ね。じゃあ今晩メッセージ送るわね？気をつけてね、{name}。\""
            }
        }
    },
    "nurse_after_day1_contact_fail": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "after_home",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, 튕기는 거야? 알았어. 나중에 마음 바뀌면 말해줘. 조심해서 들어가!\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh my, playing hard to get? Alright. Tell me if you change your mind. Get home safely!\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Ay, ¿te haces del rogar? Está bien. Dime si cambias de opinión. ¡Llega con cuidado a casa!\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"あら、じらすのね？わかったわ。気が変わったら言ってね。気をつけて帰りなさい！\""
            }
        }
    }
});
