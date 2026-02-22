/**
 * ============================================================================
 * CUPID - day4_2_lunch (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day4_2_lunch.js + en_day4_2_lunch.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

Object.assign(SCENARIO[4], {
    "day4_arrive": {
        "background": "assets/images/background/street.png",
        "character": null,
        "bgm": "date.mp3",
        "next": "day4_arrive_nervous",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*약속 장소에 도착했다. 아직 시간이 조금 이르네.*"
            },
            "en": {
                "name": "Me",
                "text": "*I arrived at the meeting spot. I'm a bit early.*"
            }
        }
    },
    "day4_arrive_nervous": {
        "background": "assets/images/background/street.png",
        "next": "day4_arrive_people",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*주머니에 넣은 손이 축축하다. 왜 이렇게 긴장되는 거지… 심호흡 좀 하자.*"
            },
            "en": {
                "name": "Me",
                "text": "*My hands are sweaty in my pockets. Why am I so nervous... Let me take a deep breath.*"
            }
        }
    },
    "day4_arrive_people": {
        "background": "assets/images/background/street.png",
        "next": "day4_arrive_phone",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*주변을 둘러본다. 거리에는 웃으며 걷는 커플들, 아이스크림을 먹는 가족, 강아지를 산책시키는 사람…*"
            },
            "en": {
                "name": "Me",
                "text": "*I look around. On the street, there are couples walking and laughing, a family eating ice cream, someone walking their dog...*"
            }
        }
    },
    "day4_arrive_phone": {
        "background": "assets/images/background/street.png",
        "next": "day4_arrive_look",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*핸드폰을 꺼내본다. 아직 연락은 없다. 시간을 확인하니 약속보다 15분 일찍 도착했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I take out my phone. No messages yet. I check the time — I arrived 15 minutes early.*"
            }
        }
    },
    "day4_arrive_look": {
        "background": "assets/images/background/street.png",
        "next": "day4_arrive_wait",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유리창에 비친 내 모습을 슬쩍 확인한다. 괜찮아, 나쁘지 않아… 아마.*"
            },
            "en": {
                "name": "Me",
                "text": "*I sneak a glance at my reflection in a window. Not bad... I think.*"
            }
        }
    },
    "day4_arrive_wait": {
        "background": "assets/images/background/street.png",
        "next": "day4_heroine_arrive",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*단순한 약속이 아니다. 오늘 누구의 손을 잡느냐에 따라, 내 일상은 완전히 다른 궤도로 진입하게 될 것이다. 묘한 갈증이 목을 조여온다.*"
            },
            "en": {
                "name": "Me",
                "text": "*My heart is racing. Have I ever been this nervous before...*"
            }
        }
    },
    "day4_heroine_arrive": {
        "background": "assets/images/background/street.png",
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day4_meet_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day4_meet_yuna",
                "character": "Yuna"
            },
            {
                "next": "day4_meet_dain",
                "character": "Dain"
            },
            {
                "next": "day4_meet_nurse",
                "character": "Nurse"
            },
            {
                "next": "day4_meet_teacher",
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
    "day4_meet_seoyeon": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day4_seoyeon_react",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"앗, 벌써 와 있었어? 나도 좀 일찍 나왔는데… 후훗.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh, you're already here? I came early too... Hehe.\""
            }
        }
    },
    "day4_seoyeon_react": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day4_seoyeon_compliment",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이가 웃으며 다가온다. 학교 밖에서 만나니… 평소와 다르게 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon walks over with a smile. Meeting outside of school... she looks different from usual.*"
            }
        }
    },
    "day4_seoyeon_compliment": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "choices": [
            {
                "next": "day4_seoyeon_blush",
                "stats": {
                    "Seoyeon": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day4_seoyeon_happy",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뭐라고 해야 하지?*",
                "choices": [
                    "\"오늘 되게 예쁘다.\"",
                    "\"오늘 되게 밝아 보인다!\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*What should I say?*",
                "choices": [
                    "\"You look really pretty today.\"",
                    "\"You look really cheerful today!\""
                ]
            }
        }
    },
    "day4_seoyeon_blush": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"에, 에이… 갑자기 그런 말 하면 어떡해… 고마워.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"W-what... You can't just say that out of nowhere... Thanks.\""
            }
        }
    },
    "day4_seoyeon_happy": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"정말? 오늘 좀 신경 썼거든! 알아봐줘서 기쁘다~\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Really? I put a lot of effort in today! I'm glad you noticed!\""
            }
        }
    },
    "day4_meet_yuna": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day4_yuna_react",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…왔어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...You're here.\""
            }
        }
    },
    "day4_yuna_react": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day4_yuna_compliment",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 카페 앞에 서 있었다. 학교 밖에서 보니 분위기가 달라.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna was standing in front of the café. She gives off a different vibe outside of school.*"
            }
        }
    },
    "day4_yuna_compliment": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day4_yuna_blush",
                "stats": {
                    "Yuna": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day4_yuna_cool",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뭐라고 해야 하지?*",
                "choices": [
                    "\"오늘 분위기 다르다. 예쁘네.\"",
                    "\"기다렸어? 미안.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*What should I say?*",
                "choices": [
                    "\"You look different today. Pretty.\"",
                    "\"Were you waiting? Sorry.\""
                ]
            }
        }
    },
    "day4_yuna_blush": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……그런 말 처음 들어. …고마워.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...No one's ever said that to me before. ...Thanks.\""
            }
        }
    },
    "day4_yuna_cool": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…방금 왔어. 들어가자.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I just got here. Let's go in.\""
            }
        }
    },
    "day4_meet_dain": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day4_dain_react",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야!! 여기여기!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey!! Over here, over here!!\""
            }
        }
    },
    "day4_dain_react": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day4_dain_compliment",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 손을 흔들며 뛰어온다. 학교 밖에서 만나니 분위기가 또 다르다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain waves and runs over. Meeting outside of school, the vibe is totally different.*"
            }
        }
    },
    "day4_dain_compliment": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "choices": [
            {
                "next": "day4_dain_blush",
                "stats": {
                    "Dain": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day4_dain_energy",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뭐라고 해야 하지?*",
                "choices": [
                    "\"오늘 완전 귀엽다!\"",
                    "\"연습은 잘 끝났어?\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*What should I say?*",
                "choices": [
                    "\"You look super cute today!\"",
                    "\"Did practice go well?\""
                ]
            }
        }
    },
    "day4_dain_blush": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"헤, 후훗… 진짜?! 나 오늘 엄청 고민했거든!! 다행이다~!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"H-hehe... Really?! I spent so long deciding what to wear!! What a relief!!\""
            }
        }
    },
    "day4_dain_energy": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"완전 완벽했지!! 오늘 컨디션 최고야!! 자, 빨리 가자!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"It was totally perfect!! I'm in top shape today!! Come on, let's go!!\""
            }
        }
    },
    "day4_meet_nurse": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day4_nurse_react",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, 벌써 와 있었네? 오래 기다렸어?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh my, you're already here? Have you been waiting long?\""
            }
        }
    },
    "day4_nurse_react": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day4_nurse_compliment",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*미술관 입구에서 보건선생님이 웃으며 손을 흔들고 있다. 학교 밖에서 만나니까 왠지 분위기가 다르게 느껴진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The school nurse is waving and smiling at the museum entrance. Meeting outside of school, the atmosphere feels completely different.*"
            }
        }
    },
    "day4_nurse_compliment": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "day4_nurse_blush",
                "stats": {
                    "Nurse": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day4_nurse_smile",
                "stats": {
                    "Nurse": {
                        "affinity": 5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뭐라고 해야 하지?*",
                "choices": [
                    "\"선생님… 오늘 정말 예쁘세요.\"",
                    "\"학교 밖에서 만나니까 신기하네요.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*What should I say?*",
                "choices": [
                    "\"You look... really beautiful today.\"",
                    "\"It's kind of strange meeting outside of school.\""
                ]
            }
        }
    },
    "day4_nurse_blush": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"후후… 고마워. 오늘은 학생이 아니라 그냥 남자로 봐도 될까?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Hehe... Thank you. Can I see you as just a man today, not a student?\""
            }
        }
    },
    "day4_nurse_smile": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"맞아, 나도 좀 긴장돼. 오늘은 선생님이 아니라 그냥 나야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Right, I'm a bit nervous too. Today, I'm not a teacher — just me.\""
            }
        }
    },
    "day4_meet_teacher": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day4_teacher_react",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"오, 왔구나. 늦을 줄 알았는데 의외로 빠르네?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Oh, you made it. I thought you'd be late, but you're surprisingly early.\""
            }
        }
    },
    "day4_teacher_react": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day4_teacher_compliment",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*담임선생님이 카페 앞에서 웃고 있다. 학교 밖에서 만나니 느낌이 달라서 순간 누구인지 못 알아볼 뻔했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The homeroom teacher is smiling in front of the café. She looks so different outside of school that I almost didn't recognize her.*"
            }
        }
    },
    "day4_teacher_compliment": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            {
                "next": "day4_teacher_blush",
                "stats": {
                    "Teacher": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day4_teacher_casual",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뭐라고 해야 하지?*",
                "choices": [
                    "\"선생님 오늘 되게 예쁘세요.\"",
                    "\"카페가 분위기 좋네요.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*What should I say?*",
                "choices": [
                    "\"You look really pretty today.\"",
                    "\"This café has a nice atmosphere.\""
                ]
            }
        }
    },
    "day4_teacher_blush": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…뭐야, 갑자기. 칭찬하면 기분이 이상해지니까 그만해.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...What, all of a sudden. Stop it, compliments make me feel weird.\""
            }
        }
    },
    "day4_teacher_casual": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day4_date_walk",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"그치? 여기 커피가 맛있어. 자, 들어가자.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Right? The coffee here is great. Come on, let's go in.\""
            }
        }
    },
    "day4_date_walk": {
        "character": null,
        "background": "assets/images/background/street.png",
        "next": "day4_date_talk_1",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나란히 걸으며 이런저런 이야기를 나눴다. 학교에서와는 다른, 편안한 분위기.*"
            },
            "en": {
                "name": "Me",
                "text": "*We walked side by side, chatting about all sorts of things. A relaxed atmosphere, different from school.*"
            }
        }
    },
    "day4_date_talk_1": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_talk_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*평소에는 할 수 없었던 이야기들… 좋아하는 음악, 어릴 때 꿈, 사소한 취미.*"
            },
            "en": {
                "name": "Me",
                "text": "*Things we could never talk about at school... favorite music, childhood dreams, little hobbies.*"
            }
        }
    },
    "day4_date_talk_2": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_weather",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이야기를 나눌수록 마음이 가까워지는 게 느껴진다. 이 시간이 영원했으면 좋겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The more we talk, the closer I feel. I wish this moment could last forever.*"
            }
        }
    },
    "day4_date_weather": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_surroundings",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*바람이 살랑살랑 분다. 하늘에는 솜사탕 같은 구름이 천천히 흘러간다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A gentle breeze blows. Cotton candy clouds drift slowly across the sky.*"
            }
        }
    },
    "day4_date_surroundings": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_time_pass",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*거리에는 우리 같은 커플들이 여기저기 보인다. 문득 '우리도 저렇게 보일까?' 하는 생각이 든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I see other couples around, just like us. I suddenly wonder, 'Do we look like that too?'*"
            }
        }
    },
    "day4_date_time_pass": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_sunshine",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*시간이 어떻게 흘러가는지 모르겠다. 핸드폰을 꺼내 시간을 확인하니 벌써 한 시간이 지나 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I have no idea how time flew by so fast. I check my phone and realize an hour has already passed.*"
            }
        }
    },
    "day4_date_sunshine": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_activity_branch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*햇살이 나뭇잎 사이로 쏟아져 내린다. 옆에 걷는 사람의 얼굴에 빛이 내려앉는 게… 예쁘다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Sunlight pours through the leaves. The light falling on the face of the person walking beside me is... beautiful.*"
            }
        }
    },
    "day4_date_activity_branch": {
        "background": "assets/images/background/street.png",
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day4_activity_seoyeon_1",
                "character": "Seoyeon"
            },
            {
                "next": "day4_activity_yuna_1",
                "character": "Yuna"
            },
            {
                "next": "day4_activity_dain_1",
                "character": "Dain"
            },
            {
                "next": "day4_activity_nurse_1",
                "character": "Nurse"
            },
            {
                "next": "day4_activity_teacher_1",
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
    "day4_activity_seoyeon_1": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day4_activity_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"와, 저기 봐! 꽃밭이다! 가보자!!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Wow, look over there! A flower garden! Let's go!!\""
            }
        }
    },
    "day4_activity_seoyeon_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day4_activity_seoyeon_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이가 내 손을 잡고 꽃밭 사이로 뛰어간다. 알록달록한 꽃들 사이에서 서연이가 환하게 웃는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon grabs my hand and runs into the flower garden. She beams brightly among the colorful flowers.*"
            }
        }
    },
    "day4_activity_seoyeon_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day4_activity_seoyeon_4",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"앗, 저기 오리들이다! 빵 좀 줄까? 편의점에서 사온 거 있어!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh, look, ducks! Should we give them some bread? I bought some at the convenience store!\""
            }
        }
    },
    "day4_activity_seoyeon_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day4_activity_converge",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나란히 앉아 연못의 오리들에게 빵을 던져줬다. 오리들이 쪼르르 달려오니 서연이가 까르르 웃는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We sat side by side, tossing bread to the ducks in the pond. When the ducks waddled over, Seoyeon burst out laughing.*"
            }
        }
    },
    "day4_activity_yuna_1": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day4_activity_yuna_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…저기, 서점 들러도 돼? 읽고 싶은 책이 있어서.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Can we stop by the bookstore? There's a book I want to read.\""
            }
        }
    },
    "day4_activity_yuna_2": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day4_activity_yuna_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서점 안에서 유나와 나란히 책장을 넘겼다. 유나는 책을 고를 때 정말 진지한 표정이 된다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We flipped through books side by side in the bookstore. Yuna gets really serious when she's picking out a book.*"
            }
        }
    },
    "day4_activity_yuna_3": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_smile.png",
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "day4_activity_yuna_4",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…이 노래 좋아해? 한쪽 들어볼래.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Do you like this song? Want to listen with one earbud?\""
            }
        }
    },
    "day4_activity_yuna_4": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_shy.png",
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day4_activity_converge",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 이어폰 한쪽을 건네줬다. 가까이 붙어 앉아 같은 음악을 듣는다. 유나의 어깨가 내 어깨에 살짝 닿았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna handed me one of her earbuds. We sat close together, listening to the same music. Her shoulder gently touched mine.*"
            }
        }
    },
    "day4_activity_dain_1": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day4_activity_dain_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야야야, 저기 오락실이다!! 가자가자가자!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey hey hey, there's an arcade over there!! Let's go let's go let's go!!\""
            }
        }
    },
    "day4_activity_dain_2": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day4_activity_dain_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 눈을 반짝이며 오락실 안으로 뛰어간다. 리듬게임 앞에 서더니 도전적으로 날 쳐다본다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain's eyes light up as she dashes into the arcade. She stops in front of a rhythm game and gives me a challenging look.*"
            }
        }
    },
    "day4_activity_dain_3": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "day4_activity_dain_4",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"대결이다!! 지는 사람이 아이스크림 사기!! 절대 안 져!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"It's a showdown!! Loser buys ice cream!! I'm NOT losing!!\""
            }
        }
    },
    "day4_activity_dain_4": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day4_activity_converge",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*결국 내가 졌다. 다인이가 양 주먹을 불끈 쥐며 환호한다. 지긴 했지만… 저렇게 좋아하는 모습은 보기 좋다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I ended up losing. Dain pumps both fists in the air and cheers. I lost, but... seeing her that happy is a pretty good sight.*"
            }
        }
    },
    "day4_activity_nurse_1": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day4_activity_nurse_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"이 그림 좋지 않아? 색감이 참 따뜻해.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Don't you love this painting? The colors are so warm.\""
            }
        }
    },
    "day4_activity_nurse_2": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day4_activity_nurse_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*미술관 안은 조용하고 넓었다. 선생님과 나란히 그림을 보며 천천히 걸었다. 이런 시간이 좋다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The museum was quiet and spacious. We walked slowly, viewing the paintings side by side. I like moments like this.*"
            }
        }
    },
    "day4_activity_nurse_3": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_shy.png",
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "day4_activity_nurse_4",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"나도 학생 때는 꿈이 많았어. 지금도 있긴 하지만… 조금 달라졌을 뿐이야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"When I was a student, I had so many dreams too. I still do, but... they've just changed a little.\""
            }
        }
    },
    "day4_activity_nurse_4": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_shy.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day4_activity_converge",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 한 점의 그림 앞에서 멈춰 섰다. 그림 속 풍경을 바라보는 선생님의 옆모습이… 묘하게 아름답다.*"
            },
            "en": {
                "name": "Me",
                "text": "*She stopped in front of one painting. Her profile, gazing at the landscape in the painting... was unexpectedly beautiful.*"
            }
        }
    },
    "day4_activity_teacher_1": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day4_activity_teacher_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"너, 졸업하면 뭐 하고 싶어? 꿈 같은 거 있어?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"What do you want to do after you graduate? Do you have a dream or anything?\""
            }
        }
    },
    "day4_activity_teacher_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day4_activity_teacher_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*카페에 마주 앉아 이야기를 나눈다. 선생님은 평소와 달리 부드러운 표정이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We sat across from each other in the café, talking. She has a softer expression than usual.*"
            }
        }
    },
    "day4_activity_teacher_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "day4_activity_teacher_4",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"나도 학생 때는 선생님이 되겠다는 생각 안 했어. 인생은 뜻대로 안 되거든. 근데 지금은… 나쁘지 않아.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"When I was a student, I never thought I'd become a teacher. Life doesn't go as planned. But now... it's not bad.\""
            }
        }
    },
    "day4_activity_teacher_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 5
            }
        },
        "next": "day4_activity_converge",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(선생님이 자기 케이크를 한 조각 잘라서 내 접시에 올려줬다. \"먹어봐, 여기 디저트 진짜 맛있어.\" 그 자연스러운 행동에 심장이 뛰었다.)"
            },
            "en": {
                "name": "Me",
                "text": "(She cut a piece of her cake and placed it on my plate. \"Try it, the desserts here are really good.\" My heart skipped a beat at that casual gesture.)"
            }
        }
    },
    "day4_activity_converge": {
        "character": null,
        "background": "assets/images/background/street.png",
        "next": "day4_date_lunch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*시간이 정말 빠르게 흘렀다. 어느새 점심시간이 다 됐다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Time flew by so fast. Before I knew it, it was already lunchtime.*"
            }
        }
    },
    "day4_date_lunch": {
        "character": null,
        "background": "assets/images/background/cafe.png",
        "next": "day4_lunch_menu",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*근처 예쁜 카페에 들어갔다. 창가 자리에 마주 앉으니 더 설레는 건 기분 탓일까.*"
            },
            "en": {
                "name": "Me",
                "text": "*We went into a cute café nearby. Sitting across from each other by the window — is it just me, or does this feel even more exciting?*"
            }
        }
    },
    "day4_lunch_menu": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_order",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*메뉴판을 들여다본다. 파스타, 샌드위치, 브런치 세트… 뭘 시킬까.*"
            },
            "en": {
                "name": "Me",
                "text": "*I look at the menu. Pasta, sandwiches, brunch set... What should I order?*"
            }
        }
    },
    "day4_lunch_order": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_order_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"나는 파스타로 할게. 뭐 먹을래?\""
            },
            "en": {
                "name": "Me",
                "text": "\"I'll go with the pasta. What would you like?\""
            }
        }
    },
    "day4_lunch_order_react": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_awkward",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*상대방도 메뉴를 골랐다. 주문을 하고 나니 어색한 침묵이 잠깐 흐른다.*"
            },
            "en": {
                "name": "Me",
                "text": "*They picked something too. After ordering, there's a brief awkward silence.*"
            }
        }
    },
    "day4_lunch_awkward": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_funny",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뭔가 이야기를 꺼내야 할 것 같은데… 이럴 때 뭘 얘기해야 자연스러울까.*"
            },
            "en": {
                "name": "Me",
                "text": "*I feel like I should say something... What would be natural to talk about at a time like this?*"
            }
        }
    },
    "day4_lunch_funny": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_funny_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*음식이 나왔다. 내가 시킨 파스타가 생각보다 양이 엄청 많다. 상대방이 그걸 보고 웃음을 참지 못한다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The food arrived. The pasta I ordered is way bigger than I expected. They can't hold back their laughter at the sight.*"
            }
        }
    },
    "day4_lunch_funny_react": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_share",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"왜 웃어! 이 정도는 거뜬하다고!\""
            },
            "en": {
                "name": "Me",
                "text": "\"Why are you laughing! I can totally handle this much!\""
            }
        }
    },
    "day4_lunch_share": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_date_lunch_talk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*결국 서로 음식을 나눠 먹게 됐다. 같은 접시에서 포크가 부딪힐 때마다 괜히 웃음이 난다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We ended up sharing each other's food. Every time our forks bump on the same plate, we can't help but laugh.*"
            }
        }
    },
    "day4_date_lunch_talk": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_learn",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이야기꽃이 피었다. 같이 웃고, 같이 고민하고… 이런 게 행복이구나.*"
            },
            "en": {
                "name": "Me",
                "text": "*The conversation blossomed. Laughing together, thinking together... So this is what happiness feels like.*"
            }
        }
    },
    "day4_lunch_learn": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_date_lunch_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*대화를 하면 할수록 몰랐던 면을 알게 된다. 좋아하는 계절, 싫어하는 음식, 어릴 때 별명… 사소한 것들이 소중하게 느껴진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The more we talk, the more I learn about sides of them I never knew. Favorite season, food they dislike, childhood nicknames... These little things feel so precious.*"
            }
        }
    },
    "day4_date_lunch_choice": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "choices": [
            {
                "next": "day4_date_honest",
                "setFlag": "day4_honest_talk"
            },
            {
                "next": "day4_date_grateful"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뭔가 더 특별한 이야기를 꺼내볼까?*",
                "choices": [
                    "\"나 사실… 전학 오기 전에 좀 외로웠어.\"",
                    "\"이 학교에 와서 정말 좋은 사람들을 만났어.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Should I bring up something more personal?*",
                "choices": [
                    "\"To be honest... I was pretty lonely before I transferred here.\"",
                    "\"I've met really great people since coming to this school.\""
                ]
            }
        }
    },
    "day4_date_honest": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_date_honest_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"새로운 환경이 무서웠는데… 덕분에 이젠 매일이 기대돼.\""
            },
            "en": {
                "name": "Me",
                "text": "\"The new environment scared me... but thanks to you, now I look forward to every day.\""
            }
        }
    },
    "day4_date_honest_react": {
        "background": "assets/images/background/cafe.png",
        "character": null,
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
            "Nurse": {
                "affinity": 3
            },
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "day4_date_response",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*상대방이 조용히 내 이야기를 들어주었다. 진심이 통한 걸까, 따뜻한 눈빛으로 고개를 끄덕인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*They listened quietly to my story. Did my sincerity get through? They nod with warm eyes.*"
            }
        }
    },
    "day4_date_grateful": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_date_grateful_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"특히… 지금 이 순간이 가장 좋아.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Especially... right now, this moment is the best.\""
            }
        }
    },
    "day4_date_grateful_react": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_date_response",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*상대방이 살짝 눈을 피하며 미소를 짓는다. 분명 기뻐하는 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*They look away slightly, smiling. They're definitely happy about what I said.*"
            }
        }
    },
    "day4_date_response": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_date_cafe_exit",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*상대방의 눈이 부드러워졌다. 뭔가 통한 것 같은 느낌이 든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Their eyes softened. Something just connected between us.*"
            }
        }
    },
    "day4_date_cafe_exit": {
        "character": null,
        "background": "assets/images/background/street.png",
        "next": "day4_date_photo_moment",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*카페를 나서자 따사로운 오후 햇살이 내리쬔다. 아까보다 거리가 더 가까워진 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As we step out of the café, warm afternoon sunlight pours down. Somehow, the distance between us has gotten smaller.*"
            }
        }
    },
    "day4_date_photo_moment": {
        "background": "assets/images/background/street.png",
        "character": null,
        "choices": [
            {
                "next": "day4_date_photo_yes",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    },
                    "Yuna": {
                        "affinity": 5
                    },
                    "Dain": {
                        "affinity": 5
                    },
                    "Nurse": {
                        "affinity": 5
                    },
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_date_photo_no",
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
                    "Nurse": {
                        "affinity": 3
                    },
                    "Teacher": {
                        "affinity": 3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*문득 이 순간을 남기고 싶다는 생각이 든다.*",
                "choices": [
                    "\"우리 사진 한 장 찍을까?\"",
                    "*마음속에 담아두자.*"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*I suddenly want to capture this moment.*",
                "choices": [
                    "\"Want to take a photo together?\"",
                    "*I'll keep this moment in my heart.*"
                ]
            }
        }
    },
    "day4_date_photo_yes": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_ending_moment",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나란히 서서 셀카를 찍었다. 화면 속에 나란히 웃고 있는 두 사람. 이 사진, 오래오래 간직하고 싶다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We stood side by side and took a selfie. Two people smiling together on the screen. I want to keep this photo forever.*"
            }
        }
    },
    "day4_date_photo_no": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_ending_moment",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*사진보다 더 선명하게, 이 순간을 기억에 새긴다. 바람 냄새, 햇살의 온도, 옆에 있는 사람의 미소.*"
            },
            "en": {
                "name": "Me",
                "text": "*More vivid than any photo, I engrave this moment into my memory. The scent of the breeze, the warmth of the sun, the smile of the person beside me.*"
            }
        }
    },
    "day4_date_ending_moment": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_ending_feel",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나란히 걸으며 잠깐 침묵이 흐른다. 어색한 게 아니라, 편안한 침묵이다. 서로 말 안 해도 괜찮은 그런 사이가 된 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Walking side by side, a brief silence falls. It's not awkward — it's a comfortable silence. We've become the kind of people who are okay without saying a word.*"
            }
        }
    },
    "day4_date_ending_feel": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_transition",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*오늘의 시간이 꿈처럼 느껴진다. 전학 와서 이렇게 좋은 날이 올 줄은… 진짜 몰랐어.*"
            },
            "en": {
                "name": "Me",
                "text": "*Today feels like a dream. I never imagined such a wonderful day would come after transferring here... truly.*"
            }
        }
    },
    "day4_date_transition": {
        "background": "assets/images/background/street.png",
        "character": null,
        "fade": true,
        "next": "day4_afternoon_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*아직 오후가 남았다. 이 데이트는… 아직 끝나지 않았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The afternoon still awaits. This date... isn't over yet.*"
            }
        }
    }
});
