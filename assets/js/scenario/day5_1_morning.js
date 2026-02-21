/**
 * ============================================================================
 * CUPID - day5_1_morning (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day5_1_morning.js + en_day5_1_morning.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

Object.assign(SCENARIO[5], {
    "day5_start": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "bgm": "morning.mp3",
        "fade": true,
        "next": "day5_morning_wake",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*일요일 아침. 따스한 햇살이 커튼 사이로 스며든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Sunday morning. Warm sunlight filters through the curtains.*"
            }
        }
    },
    "day5_morning_wake": {
        "background": "assets/images/background/room_my.png",
        "next": "day5_morning_stretch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 떴다. 알람 없이 저절로 깬 건 오랜만이다. 시계를 보니 아침 8시.*"
            },
            "en": {
                "name": "Me",
                "text": "*I opened my eyes. It's been a while since I woke up on my own without an alarm. The clock reads 8 AM.*"
            }
        }
    },
    "day5_morning_stretch": {
        "background": "assets/images/background/room_my.png",
        "next": "day5_morning_think",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*기지개를 켜며 천장을 바라본다. 오늘이 일요일이라는 게 실감이 안 난다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I stretch and stare at the ceiling. It doesn't feel real that today is Sunday.*"
            }
        }
    },
    "day5_morning_think": {
        "background": "assets/images/background/room_my.png",
        "next": "day5_morning_mirror",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이 학교에 전학 온 게 겨우 나흘 전이라니. 마치 한 달은 된 것 같은데.*"
            },
            "en": {
                "name": "Me",
                "text": "*It's only been five days since I transferred to this school. It feels like it's been at least a month.*"
            }
        }
    },
    "day5_morning_mirror": {
        "background": "assets/images/background/room_my.png",
        "next": "day5_morning_mirror2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*세수를 하고 거울 앞에 섰다. 거울 속의 나는… 전학 오기 전과는 뭔가 다른 얼굴을 하고 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I washed my face and stood in front of the mirror. The face staring back at me looks... different from before I transferred.*"
            }
        }
    },
    "day5_morning_mirror2": {
        "background": "assets/images/background/room_my.png",
        "next": "day5_morning_phone_check",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*4일 동안 참 많은 일이 있었다. 새로운 반, 새로운 사람들… 그리고 특별한 만남들.*"
            },
            "en": {
                "name": "Me",
                "text": "*So much happened over the past four days. A new class, new people... and some very special encounters.*"
            }
        }
    },
    "day5_morning_phone_check": {
        "background": "assets/images/background/room_my.png",
        "next": "day5_morning_msg_branch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*침대 위에 놓인 핸드폰을 집어 들었다. 화면에 알림이 떠 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I picked up the phone from my bed. There are notifications on the screen.*"
            }
        }
    },
    "day5_morning_msg_branch": {
        "background": "assets/images/background/room_my.png",
        "branches": [
            {
                "next": "day5_couple_msg_branch",
                "condition": "day4_confession_accepted"
            },
            {
                "next": "day5_pending_msg_branch",
                "condition": "day4_waited"
            },
            {
                "next": "day5_default_msg_start"
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
    "day5_couple_msg_branch": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_couple_msg_seoyeon",
                "character": "Seoyeon",
                "condition": "isDating_Seoyeon"
            },
            {
                "next": "day5_couple_msg_yuna",
                "character": "Yuna",
                "condition": "isDating_Yuna"
            },
            {
                "next": "day5_couple_msg_dain",
                "character": "Dain",
                "condition": "isDating_Dain"
            },
            {
                "next": "day5_couple_msg_nurse",
                "character": "Nurse",
                "condition": "isDating_Nurse"
            },
            {
                "next": "day5_couple_msg_teacher",
                "character": "Teacher",
                "condition": "isDating_Teacher"
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
    "day5_couple_msg_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "next": "day5_couple_react_seoyeon",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"좋은 아침 ☀️ 오늘 날씨 진짜 좋다! 학교 정원에 꽃이 피었을 것 같아. 같이 보러 갈래?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Good morning ☀️ The weather's amazing today! I bet the flowers in the school garden are blooming. Wanna go see them together?\""
            }
        }
    },
    "day5_couple_react_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day5_couple_reply_seoyeon",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이 메시지를 보니 저절로 웃음이 나온다. 아침부터 꽃 이야기라니, 서연이답다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Reading Seoyeon's message makes me smile without even trying. Talking about flowers first thing in the morning—that's so like her.*"
            }
        }
    },
    "day5_couple_reply_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"좋아! 학교 정문 앞에서 만나자. 보여주고 싶은 곳도 있어 😊\" 라고 답했다.)"
            },
            "en": {
                "name": "Me",
                "text": "(I replied, \"Sounds great! Let's meet at the school front gate. There's a place I want to show you too 😊\")"
            }
        }
    },
    "day5_couple_msg_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day5_couple_react_yuna",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…일어났어? 오늘 학교 갈 거지? …나도 갈게. 정문 앞. 10시.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...You up? You're going to school today, right? ...I'll go too. Front gate. 10 o'clock.\""
            }
        }
    },
    "day5_couple_react_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "day5_couple_reply_yuna",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(유나답게 짧지만… 자세히 보면 \"나도 갈게\"라는 말에 설렘이 담겨 있다.)"
            },
            "en": {
                "name": "Me",
                "text": "(Short and sweet, just like Yuna... But if you look closely, there's a hint of excitement in the words \"I'll go too.\")"
            }
        }
    },
    "day5_couple_reply_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"응, 갈게. 기다리고 있어.\" 담담하게 답했지만, 심장이 빨리 뛴다.)"
            },
            "en": {
                "name": "Me",
                "text": "(\"Yeah, I'll be there. Wait for me.\" I replied calmly, but my heart is racing.)"
            }
        }
    },
    "day5_couple_msg_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "next": "day5_couple_react_dain",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"좋은 아침!! ☀️🏐 오늘 학교 가자!! 정문 앞에서 만나!! 뛰어올게!! 절대 늦지 마!!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Good morning!! ☀️🏐 Let's go to school today!! Meet me at the front gate!! I'll run over!! Don't you DARE be late!!!\""
            }
        }
    },
    "day5_couple_react_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "day5_couple_reply_dain",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…느낌표가 잔뜩. 아침부터 에너지가 넘치는 다인이. 그런데 이런 메시지를 보면 나까지 기운이 나네.*"
            },
            "en": {
                "name": "Me",
                "text": "*...So many exclamation marks. Dain's overflowing with energy from the crack of dawn. But somehow, messages like this give me energy too.*"
            }
        }
    },
    "day5_couple_reply_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"ㅋㅋ 알겠어! 안 늦을게. 뛰지 말고 조심해서 와!\" 라고 답장을 보냈다.)"
            },
            "en": {
                "name": "Me",
                "text": "(I texted back, \"Haha, got it! I won't be late. Don't run—be careful on your way!\")"
            }
        }
    },
    "day5_couple_msg_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day5_couple_react_nurse",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"잘 잤어? 오늘 날씨가 좋아서 기분이 설레네. 학교 앞에서 볼까? …주말에 만나는 건 또 다른 느낌이지? 💕\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Did you sleep well? The weather's so nice today, I'm feeling a little giddy. Want to meet in front of the school? ...Meeting on a weekend feels different, doesn't it? 💕\""
            }
        }
    },
    "day5_couple_react_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "day5_couple_reply_nurse",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 보낸 하트 이모티콘에 얼굴이 빨개졌다. 학교 밖에서 만나는 건 확실히 다른 느낌이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*My face turned red at the heart emoji she sent. Meeting outside of school definitely feels different.*"
            }
        }
    },
    "day5_couple_reply_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"네, 기대돼요. 정문 앞에서 10시에 만나요!\" 존댓말로 쓰다가… 뭔가 어색하다.)"
            },
            "en": {
                "name": "Me",
                "text": "(\"Yes, I'm looking forward to it. Let's meet at the front gate at 10!\" I started writing formally but... it felt a bit awkward.)"
            }
        }
    },
    "day5_couple_msg_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day5_couple_react_teacher",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"오늘 학교 올 거지? 주말인데 뭐… 잠깐 볼 일이 있어서. 정문 앞에서 10시. 늦으면 혼난다.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Are you coming to school today? It's the weekend, but... I have something to see you about. Front gate, 10 o'clock. You'll be in trouble if you're late.\""
            }
        }
    },
    "day5_couple_react_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "day5_couple_reply_teacher",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"볼 일이 있어서\"라니. 쿨한 척 하지만 만나자고 먼저 연락한 건 선생님인데. 그런 선생님이 좋다.)"
            },
            "en": {
                "name": "Me",
                "text": "(\"Something to see me about,\" she says. Playing it cool, but she's the one who reached out first. I like that about her.)"
            }
        }
    },
    "day5_couple_reply_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"안 늦을게요. 꼭 갈게요!\" 라고 답장을 보내며 살짝 웃었다.)"
            },
            "en": {
                "name": "Me",
                "text": "(I texted back, \"I won't be late. I'll definitely be there!\" and let out a small smile.)"
            }
        }
    },
    "day5_pending_msg_branch": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_pending_msg_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_pending_msg_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_pending_msg_dain",
                "character": "Dain"
            },
            {
                "next": "day5_pending_msg_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_pending_msg_teacher",
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
    "day5_pending_msg_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "next": "day5_pending_react_seoyeon",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"오늘 시간 있어? 정원 손질 도와줄 사람이 필요한데… 아, 물론 강제는 아니야! 😅\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Are you free today? I need someone to help with the garden... Oh, no pressure though! 😅\""
            }
        }
    },
    "day5_pending_react_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "next": "day5_pending_reply_seoyeon",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(서연이가 나를 부른다. \"강제는 아니야\"라면서도… 가고 싶다는 마음은 확실하다.)"
            },
            "en": {
                "name": "Me",
                "text": "(Seoyeon's asking me to come. She says \"no pressure,\" but... I know I want to go.)"
            }
        }
    },
    "day5_pending_reply_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(오늘은 꼭 내 마음을 전해야 해. \"갈게! 정문 앞에서 만나자.\" 라고 답했다.)"
            },
            "en": {
                "name": "Me",
                "text": "(Today, I have to tell her how I feel. I replied, \"I'll be there! Let's meet at the front gate.\")"
            }
        }
    },
    "day5_pending_msg_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day5_pending_react_yuna",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…오늘 학교. 올 수 있어? …할 말이 있어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...School. Today. Can you come? ...I have something to tell you.\""
            }
        }
    },
    "day5_pending_react_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day5_pending_reply_yuna",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"할 말이 있어\"라니. 심장이 쿵 뛰었다. 혹시 유나도 나한테…?)"
            },
            "en": {
                "name": "Me",
                "text": "(\"I have something to tell you.\" My heart skipped a beat. Could Yuna also feel the same way about me...?)"
            }
        }
    },
    "day5_pending_reply_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(나도 할 말이 있다. \"응, 갈게.\" 간결하게 답하고 핸드폰을 내려놓았다.)"
            },
            "en": {
                "name": "Me",
                "text": "(I have something to say too. \"Yeah, I'll be there.\" I replied briefly and set my phone down.)"
            }
        }
    },
    "day5_pending_msg_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "next": "day5_pending_react_dain",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야! 오늘 학교 올래?! 연습 끝나고 잠깐만 시간 돼? 중요한 거야!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey! Wanna come to school today?! Do you have a sec after practice? It's important!!\""
            }
        }
    },
    "day5_pending_react_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "next": "day5_pending_reply_dain",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"중요한 거\"라고 했다. 다인이가 진지하게 말하는 건 드문 일인데. 무슨 일일까.)"
            },
            "en": {
                "name": "Me",
                "text": "(She said \"it's important.\" Dain being serious is rare. I wonder what it could be.)"
            }
        }
    },
    "day5_pending_reply_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(그리고 나도… 오늘 꼭 하고 싶은 말이 있다. \"갈게!! 기다려!\" 라고 답했다.)"
            },
            "en": {
                "name": "Me",
                "text": "(And I have something I need to say today too. I replied, \"I'll be there!! Wait for me!\")"
            }
        }
    },
    "day5_pending_msg_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day5_pending_react_nurse",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"오늘 혹시 학교에 올 일 있어? 보건실 정리 좀 해야 하는데… 같이 와주면 좋겠다.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Are you coming to school today by any chance? I need to organize the nurse's office... It'd be nice if you could come help.\""
            }
        }
    },
    "day5_pending_react_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day5_pending_reply_nurse",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*주말에 보건실 정리라… 핑계 같기도 하지만, 만날 수 있다면 이유는 상관없다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Organizing the nurse's office on a weekend... It sounds like an excuse, but if it means I can see her, the reason doesn't matter.*"
            }
        }
    },
    "day5_pending_reply_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(오늘, 꼭 마음을 전하자. \"갈게요! 정문 앞에서 만나요.\" 라고 답했다.)"
            },
            "en": {
                "name": "Me",
                "text": "(Today, I have to tell her how I feel. I replied, \"I'll be there! Let's meet at the front gate.\")"
            }
        }
    },
    "day5_pending_msg_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day5_pending_react_teacher",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"오늘 학교에 잠깐 올 수 있어? 서류 정리 좀 도와줄래. …다른 뜻은 없으니까 이상한 생각 하지 마.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Can you come by school today? I could use help organizing some paperwork. ...Don't get any ideas, there's no hidden meaning.\""
            }
        }
    },
    "day5_pending_react_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day5_pending_reply_teacher",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"다른 뜻은 없다\"는 말이 오히려 의미심장하게 느껴진다. 선생님도 마찬가지인 걸까.)"
            },
            "en": {
                "name": "Me",
                "text": "(\"No hidden meaning\"—somehow that makes it feel even more meaningful. Could she be feeling the same way?)"
            }
        }
    },
    "day5_pending_reply_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(오늘이 지나면 기회가 없을지도 모른다. \"갈게요!\" 라고 답장을 보냈다.)"
            },
            "en": {
                "name": "Me",
                "text": "(If today passes, I might never get another chance. I texted back, \"I'll be there!\")"
            }
        }
    },
    "day5_default_msg_start": {
        "next": "day5_default_msg_scroll",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*핸드폰 화면을 켰지만… 새 메시지는 없다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I turned on my phone... but there are no new messages.*"
            }
        }
    },
    "day5_default_msg_scroll": {
        "next": "day5_default_msg_reflect",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*대화 목록을 스크롤해 본다. 며칠 동안 나눈 대화들이 쭉 이어져 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I scroll through my chat list. Conversations from the past few days stretch on and on.*"
            }
        }
    },
    "day5_default_msg_reflect": {
        "next": "day5_default_msg_reflect2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*전학 와서 여러 사람들을 만났다. 서연, 유나, 다인, 보건선생님, 담임선생님…*"
            },
            "en": {
                "name": "Me",
                "text": "*Since transferring, I've met so many people. Seoyeon, Yuna, Dain, the school nurse, the homeroom teacher...*"
            }
        }
    },
    "day5_default_msg_reflect2": {
        "next": "day5_default_msg_resolve",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다들 따뜻하게 대해줬는데… 결국 확실하게 마음을 전하지 못했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*They were all so kind to me... but in the end, I never managed to properly tell any of them how I feel.*"
            }
        }
    },
    "day5_default_msg_resolve": {
        "next": "day5_default_msg_decide",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*아무런 연락도 없는 텅 빈 화면. 하지만 이대로 주저앉아 마침표를 찍고 싶지는 않다. 내 마음은 아직 전해지지 않았으니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*...No, it's not over yet. Today is Sunday. If I go to school, maybe I'll run into someone.*"
            }
        }
    },
    "day5_default_msg_decide": {
        "next": "day5_morning_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*마지막 날이니까. 학교 주변이라도 산책하자. 뭔가 달라질 수도 있으니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*It's the last day. I'll at least take a walk around the school. Something might change.*"
            }
        }
    },
    "day5_morning_ready": {
        "character": null,
        "next": "day5_morning_closet",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이제 준비를 해야 한다. 옷장 앞에 섰다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Time to get ready. I stood in front of my closet.*"
            }
        }
    },
    "day5_morning_closet": {
        "character": null,
        "next": "day5_outfit_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*일요일이니까 교복은 안 입어도 되는데… 뭘 입을까.*"
            },
            "en": {
                "name": "Me",
                "text": "*It's Sunday, so I don't have to wear the school uniform... but what should I wear?*"
            }
        }
    },
    "day5_outfit_choice": {
        "character": null,
        "choices": [
            {
                "next": "day5_outfit_casual",
                "setFlag": "day5_outfit_casual"
            },
            {
                "next": "day5_outfit_special",
                "setFlag": "day5_outfit_special"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*오늘 뭘 입고 나갈까?*",
                "choices": [
                    "깔끔한 캐주얼 *편하고 자연스럽게*",
                    "살짝 신경 쓴 코디 *오늘은 특별하니까*"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*What should I wear today?*",
                "choices": [
                    "Clean casual *comfortable and natural*",
                    "A little dressed up *today's special, after all*"
                ]
            }
        }
    },
    "day5_outfit_casual": {
        "character": null,
        "next": "day5_breakfast",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*깨끗한 셔츠에 청바지. 편하면서도 단정한 느낌이다. 역시 자연스러운 게 나답지.*"
            },
            "en": {
                "name": "Me",
                "text": "*A crisp shirt and jeans. Comfortable yet neat. Yeah, keeping it natural is more my style.*"
            }
        }
    },
    "day5_outfit_special": {
        "character": null,
        "next": "day5_breakfast",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*평소보다 좀 더 신경 써서 골랐다. 거울 앞에서 한 번 더 확인한다. …괜찮은 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I picked my outfit more carefully than usual. One last check in the mirror. ...Looks good, I think.*"
            }
        }
    },
    "day5_breakfast": {
        "character": null,
        "next": "day5_outfit_check",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*간단하게 토스트를 구워 먹었다. 일요일 아침, 조용한 부엌. 밖에서 새소리가 들린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I made some quick toast and ate. A quiet kitchen on a Sunday morning. I can hear birds singing outside.*"
            }
        }
    },
    "day5_outfit_check": {
        "character": null,
        "next": "day5_morning_items",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*거울 속 내 모습을 마지막으로 확인한다. 전학 첫날과는 확실히 다른 눈빛이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*One final look at myself in the mirror. My eyes are definitely different from the first day I transferred.*"
            }
        }
    },
    "day5_morning_items": {
        "character": null,
        "next": "day5_morning_depart",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*지갑, 핸드폰, 열쇠. 준비 완료. 현관문 앞에 섰다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Wallet, phone, keys. All set. I stood at the front door.*"
            }
        }
    },
    "day5_morning_depart": {
        "character": null,
        "background": "assets/images/background/street.png",
        "fade": true,
        "next": "day5_walk_route_branch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*문을 열고 밖으로 나섰다. 봄바람이 기분 좋게 불어온다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I opened the door and stepped outside. A pleasant spring breeze greeted me.*"
            }
        }
    },
    "day5_walk_route_branch": {
        "background": "assets/images/background/street.png",
        "branches": [
            {
                "next": "day5_walk_couple_branch",
                "condition": "day4_confession_accepted"
            },
            {
                "next": "day5_walk_pending_start",
                "condition": "day4_waited"
            },
            {
                "next": "day5_walk_default_start"
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
    "day5_walk_couple_branch": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_walk_couple_seoyeon",
                "character": "Seoyeon",
                "condition": "isDating_Seoyeon"
            },
            {
                "next": "day5_walk_couple_yuna",
                "character": "Yuna",
                "condition": "isDating_Yuna"
            },
            {
                "next": "day5_walk_couple_dain",
                "character": "Dain",
                "condition": "isDating_Dain"
            },
            {
                "next": "day5_walk_couple_nurse",
                "character": "Nurse",
                "condition": "isDating_Nurse"
            },
            {
                "next": "day5_walk_couple_teacher",
                "character": "Teacher",
                "condition": "isDating_Teacher"
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
    "day5_walk_couple_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day5_walk_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"여기! 여기!!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Over here! Over here!!\""
            }
        }
    },
    "day5_walk_seoyeon_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day5_walk_seoyeon_talk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*약속 장소에 서연이가 이미 와 있었다. 햇살 아래 서 있는 서연이가 눈부시다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon was already there at our meeting spot. Standing in the sunlight, she looked radiant.*"
            }
        }
    },
    "day5_walk_seoyeon_talk": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day5_walk_seoyeon_react",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"오늘 날씨 진짜 좋다. 같이 걸으니까 더 좋고. 봄에는 이 길에 벚꽃이 핀다던데, 알아?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"The weather's so nice today. Even nicer walking together. Did you know cherry blossoms bloom along this path in spring?\""
            }
        }
    },
    "day5_walk_seoyeon_react": {
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day5_walk_couple_common",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와 나란히 걷는다. 따로 말하지 않아도 자연스럽게 보폭이 맞춰진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I walked side by side with Seoyeon. Without saying a word, our steps naturally fell in sync.*"
            }
        }
    },
    "day5_walk_couple_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day5_walk_yuna_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*약속 장소에 도착하니 유나가 벽에 기대서 있었다. 이어폰 한쪽을 귀에 꽂은 채.*"
            },
            "en": {
                "name": "Me",
                "text": "*When I arrived at our meeting spot, Yuna was leaning against the wall. One earbud in her ear.*"
            }
        }
    },
    "day5_walk_yuna_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day5_walk_yuna_talk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…왔어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...You came.\""
            }
        }
    },
    "day5_walk_yuna_talk": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day5_walk_yuna_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 이어폰 한쪽을 빼서 내게 내밀었다. 아무 말 없이 같이 들으라는 뜻이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna pulled out one earbud and held it out to me. No words needed—she wanted me to listen along.*"
            }
        }
    },
    "day5_walk_yuna_react": {
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day5_walk_couple_common",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이어폰을 나눠 끼고 나란히 걸었다. 말은 없지만, 이 침묵이 불편하지 않다. 오히려 좋다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We shared the earbuds and walked side by side. No words, but this silence isn't uncomfortable. If anything, it's nice.*"
            }
        }
    },
    "day5_walk_couple_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day5_walk_dain_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야!! 여기야 여기!! 빨리 와!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey!! Over here!! Hurry up!!\""
            }
        }
    },
    "day5_walk_dain_2": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day5_walk_dain_talk",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 저 멀리서 두 팔을 흔들고 있다. 아침부터 저 에너지는 대체 어디서 나오는 걸까.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain was waving both arms from way over there. Where does she get all that energy this early in the morning?*"
            }
        }
    },
    "day5_walk_dain_talk": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day5_walk_dain_react",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"일요일에 학교 가는 건 좀 이상하긴 한데, 너랑 같이니까 소풍 느낌이다! 가자가자!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Going to school on a Sunday is kinda weird, but since I'm with you, it feels like a field trip! Let's go, let's go!!\""
            }
        }
    },
    "day5_walk_dain_react": {
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day5_walk_couple_common",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이의 손에 이끌려 걸었다. 어느새 나까지 웃고 있었다. 이 에너지는 전염되나 보다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I walked along, pulled by Dain's hand. Before I knew it, I was smiling too. Her energy must be contagious.*"
            }
        }
    },
    "day5_walk_couple_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day5_walk_nurse_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*약속 장소에 도착하니 선생님이 사복 차림으로 서 있었다. 학교에서 볼 때와는 또 다른 느낌이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*When I arrived at the meeting spot, she was standing there in casual clothes. She looks so different from how she does at school.*"
            }
        }
    },
    "day5_walk_nurse_2": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day5_walk_nurse_talk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"왔구나. 주말에 보니까 또 새롭네. 평소 가운 입은 나만 봤으니까.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"You made it. Seeing you on the weekend feels different. You've only ever seen me in my lab coat, after all.\""
            }
        }
    },
    "day5_walk_nurse_talk": {
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day5_walk_nurse_react",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"이 길로 가면 학교 가는 지름길이야. …아는 사람이 없는 길이기도 하고.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"If we go this way, it's a shortcut to school. ...It's also a path where nobody we know would see us.\""
            }
        }
    },
    "day5_walk_nurse_react": {
        "character": "assets/images/characters/nurse_shy.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day5_walk_couple_common",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*살짝 수줍어하는 선생님의 표정이 새롭다. 나란히 걷는 것만으로도 심장이 뛴다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The slightly shy look on her face was something new. Just walking side by side was enough to make my heart race.*"
            }
        }
    },
    "day5_walk_couple_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day5_walk_teacher_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*약속 장소에 도착하니 선생님이 캐주얼 차림으로 서 있었다. 교실에서 보던 엄격한 모습과는 딴판이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*When I arrived at the meeting spot, she was standing in casual clothes. A far cry from the strict teacher I see in the classroom.*"
            }
        }
    },
    "day5_walk_teacher_2": {
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day5_walk_teacher_talk",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"늦을 줄 알았는데 시간 딱 맞게 왔네. …칭찬이야, 일단.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"I thought you'd be late, but you're right on time. ...That's a compliment, by the way.\""
            }
        }
    },
    "day5_walk_teacher_talk": {
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day5_walk_teacher_react",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"주말에 같이 걷는 건 처음이네. …학교에서랑은 좀 다르지? 난 지금… 선생님이 아니라 그냥 한 사람이야.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"This is the first time we've walked together on a weekend. ...It's different from school, isn't it? Right now, I'm not a teacher. I'm just... a person.\""
            }
        }
    },
    "day5_walk_teacher_react": {
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 5
            }
        },
        "next": "day5_walk_couple_common",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"그냥 한 사람\"이라. 그 말에 가슴이 뜨거워졌다. 이렇게 솔직한 선생님은 처음 본다.)"
            },
            "en": {
                "name": "Me",
                "text": "(\"Just a person.\" Those words made my chest feel warm. I've never seen her this honest before.)"
            }
        }
    },
    "day5_walk_couple_common": {
        "character": null,
        "next": "day5_walk_couple_common2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나란히 걸으며 지난 며칠간의 이야기를 나누었다. 처음 만났을 때 이야기, 웃겼던 일들, 가슴 뛰었던 순간들.*"
            },
            "en": {
                "name": "Me",
                "text": "*Walking side by side, we talked about everything that happened the past few days. How we first met, the funny moments, the times our hearts raced.*"
            }
        }
    },
    "day5_walk_couple_common2": {
        "character": null,
        "next": "day5_arrive_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어느새 학교가 보이기 시작했다. 작별이 아쉬울 줄 알았는데, 오늘은 함께하는 하루의 시작이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Before I knew it, the school came into view. I thought I'd dread saying goodbye, but today marks the beginning of a day we're spending together.*"
            }
        }
    },
    "day5_walk_pending_start": {
        "next": "day5_walk_pending_think",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집을 나서서 학교 쪽으로 걷기 시작했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I left the house and started walking toward school.*"
            }
        }
    },
    "day5_walk_pending_think": {
        "next": "day5_walk_pending_plan",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어제 고백하지 못한 게 자꾸 머릿속에 맴돈다. 오늘은… 오늘은 반드시.*"
            },
            "en": {
                "name": "Me",
                "text": "*I can't stop thinking about how I didn't confess yesterday. Today... today I absolutely will.*"
            }
        }
    },
    "day5_walk_pending_plan": {
        "next": "day5_walk_pending_nervous",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(뭐라고 말하지? \"좋아해\"? \"사귀자\"? 아니, 자연스럽게 분위기를 보고…)"
            },
            "en": {
                "name": "Me",
                "text": "(What should I say? \"I like you\"? \"Will you go out with me\"? No, maybe I should just play it by ear...)"
            }
        }
    },
    "day5_walk_pending_nervous": {
        "next": "day5_walk_pending_resolve",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*아, 벌써 손이 떨린다. 걸음을 옮길수록 심장이 빨라진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*My hands are already trembling. With every step, my heart beats faster.*"
            }
        }
    },
    "day5_walk_pending_resolve": {
        "next": "day5_walk_pending_memory",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*괜찮아. 4일 동안 함께한 시간들이 있잖아. 그 시간들이 나에게 용기를 준다.*"
            },
            "en": {
                "name": "Me",
                "text": "*It's okay. I have four days' worth of memories together. Those moments give me courage.*"
            }
        }
    },
    "day5_walk_pending_memory": {
        "next": "day5_walk_pending_ready",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*첫날 어색했던 인사, 함께 웃었던 점심시간, 방과후의 대화… 모든 순간이 소중했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The awkward greeting on the first day, laughing together at lunch, our after-school conversations... every moment was precious.*"
            }
        }
    },
    "day5_walk_pending_ready": {
        "next": "day5_walk_pending_almost",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그래, 후회하지 않으려면 오늘 말해야 해.*"
            },
            "en": {
                "name": "Me",
                "text": "*Right. If I don't want any regrets, I have to say it today.*"
            }
        }
    },
    "day5_walk_pending_almost": {
        "next": "day5_arrive_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*저 앞에 학교가 보인다. 심호흡을 한 번 크게 했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The school is just up ahead. I took one deep breath.*"
            }
        }
    },
    "day5_walk_default_start": {
        "next": "day5_walk_default_reflect",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*혼자 걷는 일요일 아침 거리. 평소 같으면 이 시간에 아직 자고 있었을 텐데.*"
            },
            "en": {
                "name": "Me",
                "text": "*Walking alone on a Sunday morning. Normally, I'd still be in bed at this hour.*"
            }
        }
    },
    "day5_walk_default_reflect": {
        "next": "day5_walk_default_change",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*전학 오기 전에는 일요일 아침에 집에서 뒹굴거리는 게 전부였다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Before I transferred, my Sunday mornings were nothing but lounging around at home.*"
            }
        }
    },
    "day5_walk_default_change": {
        "next": "day5_walk_default_people",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그런데 지금은 달라졌다. 일요일에도 학교에 가고 싶다는 생각을 하게 될 줄이야.*"
            },
            "en": {
                "name": "Me",
                "text": "*But now things have changed. I never thought the day would come when I'd actually want to go to school on a Sunday.*"
            }
        }
    },
    "day5_walk_default_people": {
        "next": "day5_walk_default_arrive",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이의 다정함, 유나의 신비로움, 다인이의 밝음, 보건선생님의 따스함, 담임선생님의 진심… 다 소중한 인연이었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon's warmth, Yuna's mysteriousness, Dain's brightness, the school nurse's gentleness, the homeroom teacher's sincerity... They were all meaningful connections.*"
            }
        }
    },
    "day5_walk_default_arrive": {
        "next": "day5_arrive_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*저 앞에 학교 건물이 보인다. 전학 첫날 봤던 그 풍경이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The school building comes into view up ahead. The same scenery I saw on my very first day here.*"
            }
        }
    },
    "day5_arrive_start": {
        "character": null,
        "background": "assets/images/background/school.png",
        "next": "day5_arrive_nostalgia",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학교 정문 앞에 섰다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I stood in front of the school gate.*"
            }
        }
    },
    "day5_arrive_nostalgia": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "day5_arrive_firstday",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이 정문… 5일 전, 처음 이 학교에 왔을 때도 이 자리에 섰었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*This gate... Five days ago, when I first came to this school, I stood in this exact spot.*"
            }
        }
    },
    "day5_arrive_firstday": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "day5_arrive_now",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그때는 모든 게 낯설었다. 새로운 학교, 새로운 교실, 모르는 얼굴들. 긴장으로 발이 떨어지지 않았는데.*"
            },
            "en": {
                "name": "Me",
                "text": "*Back then, everything was unfamiliar. A new school, a new classroom, faces I didn't recognize. I was so nervous my feet wouldn't move.*"
            }
        }
    },
    "day5_arrive_now": {
        "background": "assets/images/background/school.png",
        "character": null,
        "fade": true,
        "next": "day5_school_arrive",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*지금은 다르다. 이곳에 내가 아는 사람들이 있고, 내가 돌아올 곳이 있다. 정문을 지나 안으로 들어갔다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Now it's different. There are people I know here, and a place I can come back to. I walked past the gate and headed inside.*"
            }
        }
    }
});
