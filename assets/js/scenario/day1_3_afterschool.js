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
                "text": "\"Ahhh~ I feel alive now. Thanks so much for today, {name}.\""
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
                "text": "\"Hehe~ Not quite there yet. Alright, while we're at it, can you wait until our practice ends? Let's go get tteokbokki together!\""
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
                "text": "*Dain pouts for a moment but then smiles it off.* \"What~ Playing hard to get? Alright, alright. I'll try harder to get your number!\""
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
            }
        }
    }
});
