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
                "text": "\"You didn't forget about today, right? 😊 Meet me at the park fountain at 10! I can't wait~\""
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
                "text": "\"Oh, and the weather's so nice today! Perfect for a walk~ Don't forget sunscreen!\""
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
                "text": "\"See you soon~!! 😆\""
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
                "text": "*Yuna pulls out one earbud and looks up at me. Her quiet gaze feels strangely warm.*"
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
            }
        }
    }
});
