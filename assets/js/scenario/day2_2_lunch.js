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
            }
        }
    }
});
