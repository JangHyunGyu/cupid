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
                "text": "\"Transfer student, feels like we've gotten a bit closer? I was just about to look for you. Want to eat together on the rooftop?\"",
                "choices": [
                    "Yeah! I wanted to eat with you, Seoyeon.",
                    "Sorry, I want to be alone today.",
                    "The rooftop? Why go all the way up there?"
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
                    "Say... 'ah~'",
                    "This is the first lunch box with so much care I've seen. Thank you.",
                    "It doesn't look that appetizing... Should've gone to the store."
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
                "text": "\"Wh-what?! You really... saying such things so casually... Fine, you're hopeless. Just this once! Here... 'ah~'\""
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
                "text": "\"Thank you?.. I should be the one thanking you for eating with me. It tastes so much better than eating alone. Will you eat with me like this again?\""
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
                "text": "\"{name}... Hehe, that's a nice name. This school... is very different from what it looks like. From you too.. I feel a strangely familiar aura.\""
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
                "text": "\"에헤, 걱정 마! 이 다인 님이 기초부터 확실하게 가르쳐줄게. 자, 일단 자세부터 잡아볼까?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Ehe, don't worry! The great Dain will teach you from the basics. Now, let's start with the posture!\""
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
            }
        }
    }
});
