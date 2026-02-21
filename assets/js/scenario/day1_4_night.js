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
                "text": "*I flick on the light in my room and flop onto the bed. The unfamiliar ceiling feels strangely cozy tonight... maybe it's just the mood.*"
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
                "text": "'By the way, I noticed an expression on your face during class today... were you thinking about something funny? I saw everything~'"
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
                "text": "'Haha, I see~ Anyway, the real start is tomorrow, so take care of yourself and get a good rest. See you tomorrow!'"
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
                "text": "*Ding~ An instant reply.* 'I had a great time too! Having you around made me feel so reassured, {name}. See you at school tomorrow~'"
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
                "text": "*An enthusiastic reply came instantly.* 'Oh~ You were watching? How embarrassing! Haha, I'll show you something even cooler tomorrow. Good night, {name}!'"
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
                "text": "*An enthusiastic reply came instantly.* 'Already fallen for my skills? Hehe, I'll make you fall even harder tomorrow! Don't be shocked if I show up in your dreams~'"
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
                "text": "*Instant reply.* 'Ooh!! That's the spirit!! You gotta come early tomorrow, okay? Oversleep and it's a forfeit! Good night, fighting!'"
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
                "text": "*A charming reply arrived.* 'Oh my, you actually messaged? Our transfer student is so sweet~'"
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
                "text": "*A charming reply arrived.* 'My goodness... a message like this at night? Are you trying to keep me up? Just kidding~ I really like this sweet side of you.'"
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
                "text": "'By the way, aren't you worn out from adjusting to the new school? Don't push yourself too hard~ If you get a headache or anything, come straight to the nurse's office.'"
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
                "text": "'Thank you~ Well then, good night, {name}. I'll wish you sweet dreams.'"
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
                "text": "*I replied 'I was just looking at the stars too.' ...The thought that we're looking at the same sky feels strangely exciting.*"
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
                "text": "*A message from the School Nurse.* 'If you're still up, that's no good~ Should I give you a sleep consultation at the nurse's office tomorrow? Just kidding. Good night.'"
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
                "text": "*I replied 'Thank you, Teacher! Good night~' She's so attentive and thoughtful. What a kind person.*"
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
            }
        }
    }
});
