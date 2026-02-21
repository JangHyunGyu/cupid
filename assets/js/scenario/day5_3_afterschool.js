/**
 * ============================================================================
 * CUPID - day5_3_afterschool (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day5_3_afterschool.js + en_day5_3_afterschool.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

Object.assign(SCENARIO[5], {
    "day5_afternoon_start": {
        "background": "assets/images/background/top_school.png",
        "bgm": "sunset1.mp3",
        "sunset": true,
        "next": "day5_afternoon_branch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어느새 오후가 되었다. 옥상에서 보는 하늘이 주황빛으로 물들기 시작한다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Before I knew it, afternoon arrived. The sky seen from the rooftop is beginning to turn orange.*"
            }
        }
    },
    "day5_afternoon_branch": {
        "background": "assets/images/background/top_school.png",
        "branches": [
            {
                "next": "day5_true_love_start",
                "condition": "day4_confession_accepted",
                "excludeCondition": "day3_has_multiple_dates"
            },
            {
                "next": "day5_good_start",
                "condition": "day4_confession_accepted"
            },
            {
                "next": "day5_mayhem_start",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day5_friend_start",
                "condition": "day4_waited"
            },
            {
                "next": "day5_alone_start"
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
    "day5_true_love_start": {
        "sunset": true,
        "setFlag": "ending_true_love",
        "next": "day5_true_talk_1",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*석양 아래, 연인과 나란히 서 있다. 이 순간이 영원히 멈췄으면 좋겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Standing side by side under the sunset. I wish this moment could last forever.*"
            }
        }
    },
    "day5_true_talk_1": {
        "sunset": true,
        "next": "day5_true_talk_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"있잖아… 전학 오기 전에는 새 학교가 두려웠어.\""
            },
            "en": {
                "name": "Me",
                "text": "\"You know... Before I transferred here, I was scared of the new school.\""
            }
        }
    },
    "day5_true_talk_2": {
        "sunset": true,
        "next": "day5_true_response",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"근데 지금은… 전학 온 게 내 인생에서 가장 잘한 일인 것 같아.\""
            },
            "en": {
                "name": "Me",
                "text": "\"But now... I think transferring here was the best decision of my life.\""
            }
        }
    },
    "day5_true_response": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_true_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_true_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_true_dain",
                "character": "Dain"
            },
            {
                "next": "day5_true_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_true_teacher",
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
    "day5_true_seoyeon": {
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "day5_true_kiss_buildup",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"나도… 네가 전학 와줘서 정말 다행이야. 앞으로도 쭉… 같이 있자.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Me too... I'm so glad you transferred here. Let's stay together... always.\""
            }
        }
    },
    "day5_true_yuna": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "day5_true_kiss_buildup",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…나는 혼자인 게 편하다고 생각했어. 근데 네가 와서… 달라졌어. 고마워.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I thought being alone was easier. But since you came... everything changed. Thank you.\""
            }
        }
    },
    "day5_true_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_true_kiss_buildup",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"네가 와서 매일매일이 더 즐거워졌어!! 앞으로도… 계속 응원해줄 거지?!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Every day became more fun since you came!! You'll keep cheering me on... right?!\""
            }
        }
    },
    "day5_true_nurse": {
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "next": "day5_true_kiss_buildup",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"우리 관계는 쉽지 않겠지만… 너라면 괜찮아. 함께라면 어떤 어려움도 넘을 수 있을 거야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Our relationship won't be easy... But if it's with you, it's okay. Together, we can overcome anything.\""
            }
        }
    },
    "day5_true_teacher": {
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "next": "day5_true_kiss_buildup",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…솔직히 학생한테 이런 감정 가지면 안 되는 건데. 근데 어쩌겠어, 진짜인걸. …앞으로 잘해봐, 우리.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Honestly, a teacher shouldn't feel this way about a student. But what can I do, it's real. ...Let's make this work, us.\""
            }
        }
    },
    "day5_true_kiss_buildup": {
        "character": null,
        "sunset": true,
        "next": "day5_true_kiss_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*바람이 분다. 석양빛에 물든 그 사람의 얼굴이, 유독 가까이 느껴진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The wind blows. Their face, bathed in the sunset glow, feels unusually close.*"
            }
        }
    },
    "day5_true_kiss_2": {
        "character": null,
        "sunset": true,
        "next": "day5_true_kiss_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서로의 눈을 바라본다. 말은 필요 없었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We look into each other's eyes. No words are needed.*"
            }
        }
    },
    "day5_true_kiss_3": {
        "character": null,
        "sunset": true,
        "next": "day5_true_kiss_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*자연스럽게… 얼굴이 가까워진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Naturally... our faces draw closer.*"
            }
        }
    },
    "day5_true_kiss_4": {
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day5_true_kiss_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…눈을 감았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...I closed my eyes.*"
            }
        }
    },
    "day5_true_kiss_5": {
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day5_true_kiss_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*부드러운 온기가 느껴졌다. 시간이 멈춘 것 같았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A soft warmth. Time seemed to stop.*"
            }
        }
    },
    "day5_true_kiss_6": {
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day5_true_kiss_after",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*……*"
            },
            "en": {
                "name": "Me",
                "text": "*......*"
            }
        }
    },
    "day5_true_kiss_after": {
        "character": null,
        "sunset": true,
        "next": "day5_true_evening_branch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 떴을 때, 석양빛 속에서 그 사람이 웃고 있었다. 세상에서 가장 아름다운 미소였다.*"
            },
            "en": {
                "name": "Me",
                "text": "*When I opened my eyes, they were smiling in the sunset light. The most beautiful smile in the world.*"
            }
        }
    },
    "day5_true_evening_branch": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_bed_seoyeon_1",
                "character": "Seoyeon"
            },
            {
                "next": "day5_bed_yuna_1",
                "character": "Yuna"
            },
            {
                "next": "day5_bed_dain_1",
                "character": "Dain"
            },
            {
                "next": "day5_bed_nurse_1",
                "character": "Nurse"
            },
            {
                "next": "day5_bed_teacher_1",
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
    "day5_bed_seoyeon_1": {
        "night": true,
        "next": "day5_bed_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*해가 졌다. 집까지 바래다주려 했는데… 서연이 내 소매를 잡았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sun has set. I was going to walk her home... but Seoyeon grabbed my sleeve.*"
            }
        }
    },
    "day5_bed_seoyeon_2": {
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day5_bed_seoyeon_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…저기, 우리 집 부모님 오늘 안 계시거든. 잠깐만… 들어올래?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Um, my parents aren't home today. Just for a bit... do you want to come in?\""
            }
        }
    },
    "day5_bed_seoyeon_3": {
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_seoyeon_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*조용한 주택가. 서연이 현관문을 열었다. 넓은 거실을 지나 2층 서연의 방으로 올라갔다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A quiet residential street. Seoyeon opened the front door. Past the spacious living room, up to her room on the second floor.*"
            }
        }
    },
    "day5_bed_seoyeon_4": {
        "character": "assets/images/characters/seyoun_shy.png",
        "background": "assets/images/background/seyoun_room.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_seoyeon_4b",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*깔끔하게 정돈된 방. 책장 가득 꽂힌 책들, 책상 위 학생회 서류. 은은한 간접 조명. 서연의 향기가 방 안 가득했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A neatly organized room. A bookshelf full of books, student council papers on the desk. Soft ambient lighting. The room was filled with Seoyeon's scent.*"
            }
        }
    },
    "day5_bed_seoyeon_4b": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_seoyeon_5",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…부모님 방은 1층이라 괜찮아. 아, 아니 그게 아니라… 그냥, 이리 와서 앉아.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...My parents' room is on the first floor, so it's fine. Oh, no that's not what I meant... Just, come sit here.\""
            }
        }
    },
    "day5_bed_seoyeon_5": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_seoyeon_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나란히 침대 가에 앉았다. 서연의 손이 떨리고 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We sat side by side on the edge of the bed. Seoyeon's hands were trembling.*"
            }
        }
    },
    "day5_bed_seoyeon_6": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_seoyeon_7",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…항상 완벽해야 했어. 학생회장이니까. 근데 너한테는… 그냥 나이고 싶어.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...I always had to be perfect. Because I'm the student council president. But with you... I just want to be me.\""
            }
        }
    },
    "day5_bed_seoyeon_7": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_true_morning_seoyeon_1",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이 내 어깨에 머리를 기댔다. 심장이 터질 것 같았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon rested her head on my shoulder. My heart felt like it would burst.*"
            }
        }
    },
    "day5_bed_yuna_1": {
        "night": true,
        "next": "day5_bed_yuna_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*해가 졌다. 돌아가려 했는데… 유나가 내 손을 잡았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sun has set. I was about to leave... but Yuna held my hand.*"
            }
        }
    },
    "day5_bed_yuna_2": {
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day5_bed_yuna_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…아직 안 돼. 보여줄 곳이 있어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Not yet. There's a place I want to show you.\""
            }
        }
    },
    "day5_bed_yuna_3": {
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_yuna_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 이끈 곳은 도서관 별관 꼭대기, 아무도 모르는 다락방이었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna led me to the top of the library annex, a secret attic that no one knows about.*"
            }
        }
    },
    "day5_bed_yuna_4": {
        "character": "assets/images/characters/yuna_shy.png",
        "background": "assets/images/background/yuna_hideout.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_yuna_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*낡은 소파, 담요 한 장, 작은 창문으로 별이 보였다. 유나만의 비밀 공간.*"
            },
            "en": {
                "name": "Me",
                "text": "*An old sofa, a single blanket, and stars visible through a small window. Yuna's secret space.*"
            }
        }
    },
    "day5_bed_yuna_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_yuna_6",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…여기는 나만 알아. 이제 너도 알게 됐지만.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Only I know about this place. Well, now you do too.\""
            }
        }
    },
    "day5_bed_yuna_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_yuna_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 담요를 펼쳤다. 좁은 소파에 나란히 앉으니 어깨가 닿았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna spread out the blanket. Sitting side by side on the narrow sofa, our shoulders touched.*"
            }
        }
    },
    "day5_bed_yuna_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_true_morning_yuna_1",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…가지 마. 오늘은… 여기 있어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Don't go. Tonight... stay here.\""
            }
        }
    },
    "day5_bed_dain_1": {
        "night": true,
        "next": "day5_bed_dain_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*해가 졌다. 다인이 체육관 열쇠를 흔들며 웃었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sun has set. Dain waved a key around with a grin.*"
            }
        }
    },
    "day5_bed_dain_2": {
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day5_bed_dain_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"...여기, 나만의 비밀 장소야. 같이 별 볼래?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey, I've got the key to the gym storage! Let's look at stars and talk!\""
            }
        }
    },
    "day5_bed_dain_3": {
        "character": "assets/images/characters/dain_laugh.png",
        "background": "assets/images/background/gym.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_dain_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*아무도 없는 밤의 체육관. 다인이 매트를 깔고 천장의 채광창을 열었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The gym at night, empty. Dain laid out mats and opened the skylight in the ceiling.*"
            }
        }
    },
    "day5_bed_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_dain_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*매트 위에 나란히 누워 별을 올려다봤다. 다인의 숨소리가 가까이 들렸다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We lay side by side on the mats, looking up at the stars. I could hear Dain breathing close by.*"
            }
        }
    },
    "day5_bed_dain_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_dain_6",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…야, 나 지금 심장이 엄청 뛰어. 손 여기 대봐.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Hey, my heart is beating so fast right now. Put your hand here.\""
            }
        }
    },
    "day5_bed_dain_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_dain_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인의 손이 내 손을 자기 가슴 위에 올려놓았다. 정말로… 빠르게 뛰고 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain placed my hand over her chest. It really was... beating fast.*"
            }
        }
    },
    "day5_bed_dain_7": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_true_morning_dain_1",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…바보, 왜 그렇게 봐. 부끄럽잖아…\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Dummy, why are you looking at me like that? It's embarrassing...\""
            }
        }
    },
    "day5_bed_nurse_1": {
        "night": true,
        "next": "day5_bed_nurse_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*해가 졌다. 보건선생님이 의미심장하게 웃었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sun has set. The school nurse smiled meaningfully.*"
            }
        }
    },
    "day5_bed_nurse_2": {
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day5_bed_nurse_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…학교에 아직 아무도 없을 텐데. 잠깐 보건실에 들르지 않을래?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...There should be no one at school yet. Want to stop by the infirmary?\""
            }
        }
    },
    "day5_bed_nurse_3": {
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_nurse_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*철컥. 보건실 문이 잠기는 소리가 들렸다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Click. I heard the infirmary door lock.*"
            }
        }
    },
    "day5_bed_nurse_4": {
        "character": "assets/images/characters/nurse_shy.png",
        "background": "assets/images/background/nurse_room.jpg",
        "night": true,
        "fade": true,
        "next": "day5_bed_nurse_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*커튼이 쳐진 침대 칸. 소독약 대신, 은은한 향수 냄새가 났다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The curtained bed area. Instead of disinfectant, a faint perfume scent lingered.*"
            }
        }
    },
    "day5_bed_nurse_5": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_nurse_6",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"여기서는… '선생님'이 아니야. 그냥 한 사람의 여자.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"In here... I'm not 'Teacher.' Just a woman.\""
            }
        }
    },
    "day5_bed_nurse_6": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_nurse_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*침대 가에 나란히 앉았다. 선생님의 손이 내 손 위에 올려졌다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We sat side by side on the edge of the bed. Her hand rested on top of mine.*"
            }
        }
    },
    "day5_bed_nurse_7": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_true_morning_nurse_1",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…오늘만은 학생도, 선생님도 아니야. 그냥… 우리.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Just for today, no student, no teacher. Just... us.\""
            }
        }
    },
    "day5_bed_teacher_1": {
        "night": true,
        "next": "day5_bed_teacher_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*해가 졌다. 선생님이 차 키를 꺼내 흔들었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sun has set. The teacher took out her car keys and jingled them.*"
            }
        }
    },
    "day5_bed_teacher_2": {
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day5_bed_teacher_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…태워다줄게. 늦었으니까.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...I'll give you a ride. It's late.\""
            }
        }
    },
    "day5_bed_teacher_3": {
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_teacher_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*차가 멈춘 곳은… 내 집이 아니었다. 선생님의 오피스텔 앞이었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The car stopped... not at my house. It was in front of the teacher's apartment.*"
            }
        }
    },
    "day5_bed_teacher_4": {
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_teacher_5",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…커피 한 잔만. 마시고 보내줄게. 아마.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Just one cup of coffee. I'll send you home after. Probably.\""
            }
        }
    },
    "day5_bed_teacher_5": {
        "character": "assets/images/characters/teacher_shy.png",
        "background": "assets/images/background/teacher_room.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_teacher_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*작지만 깔끔한 오피스텔. 채점 안 된 시험지가 쌓인 책상. 소파에 나란히 앉았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A small but tidy apartment. Ungraded exam papers piled on the desk. We sat side by side on the sofa.*"
            }
        }
    },
    "day5_bed_teacher_6": {
        "background": "assets/images/background/teacher_room.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_teacher_7",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…하, 나 진짜 교사 자격 없다. 학생을 집에 데려오다니.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Hah, I really am unfit to be a teacher. Bringing a student home...\""
            }
        }
    },
    "day5_bed_teacher_7": {
        "background": "assets/images/background/teacher_room.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_true_morning_teacher_1",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 머리끈을 풀며 힘없이 웃었다. 커피는… 결국 식었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The teacher let down her hair and smiled wearily. The coffee... ended up going cold.*"
            }
        }
    },
    "day5_true_morning_seoyeon_1": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_true_morning_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서로의 체온이 얽힌 채, 말없이 거리가 사라졌던 밤이 지났다.*"
            },
            "en": {
                "name": "나",
                "text": "*서로의 체온이 얽힌 채, 말없이 거리가 사라졌던 밤이 지났다.*"
            }
        }
    },
    "day5_true_morning_seoyeon_2": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_true_morning_seoyeon_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 뜨자, 창틈으로 스며드는 아침 햇살 속에서 나를 가만히 바라보고 있는 서연이 보였다.*"
            },
            "en": {
                "name": "나",
                "text": "*눈을 뜨자, 창틈으로 스며드는 아침 햇살 속에서 나를 가만히 바라보고 있는 서연이 보였다.*"
            }
        }
    },
    "day5_true_morning_seoyeon_3": {
        "background": null,
        "character": "assets/images/characters/seyoun_shy.png",
        "fade": true,
        "next": "day5_true_morning_seoyeon_4",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…일찍 깼네. 좀 더 자도 되는데.\""
            },
            "en": {
                "name": "서연",
                "text": "\"…일찍 깼네. 좀 더 자도 되는데.\""
            }
        }
    },
    "day5_true_morning_seoyeon_4": {
        "background": null,
        "character": "assets/images/characters/seyoun_shy.png",
        "fade": true,
        "next": "day5_true_morning_seoyeon_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈이 마주치자 서연의 뺨이 옅게 달아올랐다. 평소의 완벽한 학생회장이 아닌, 오직 나만의 서연이었다.*"
            },
            "en": {
                "name": "나",
                "text": "*눈이 마주치자 서연의 뺨이 옅게 달아올랐다. 평소의 완벽한 학생회장이 아닌, 오직 나만의 서연이었다.*"
            }
        }
    },
    "day5_true_morning_seoyeon_5": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_ending_true",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*맞잡은 두 손 사이로 전해지는 온기 속에서, 우리의 평범한 일상이 비로소 기적이 되는 순간을 마주하고 있었다.*"
            },
            "en": {
                "name": "나",
                "text": "*맞잡은 두 손 사이로 전해지는 온기 속에서, 우리의 평범한 일상이 비로소 기적이 되는 순간을 마주하고 있었다.*"
            }
        }
    },
    "day5_true_morning_yuna_1": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_true_morning_yuna_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*좁은 다락방 소파 위, 서로의 숨결만이 고요하게 섞여들던 밤이 지났다.*"
            },
            "en": {
                "name": "나",
                "text": "*좁은 다락방 소파 위, 서로의 숨결만이 고요하게 섞여들던 밤이 지났다.*"
            }
        }
    },
    "day5_true_morning_yuna_2": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_true_morning_yuna_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 뜨려는데, 내 팔을 단단히 끌어안고 있는 작은 온기가 느껴졌다.*"
            },
            "en": {
                "name": "나",
                "text": "*눈을 뜨려는데, 내 팔을 단단히 끌어안고 있는 작은 온기가 느껴졌다.*"
            }
        }
    },
    "day5_true_morning_yuna_3": {
        "background": null,
        "character": "assets/images/characters/yuna_shy.png",
        "fade": true,
        "next": "day5_true_morning_yuna_4",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…어딜 가려고. 오늘은 하루 종일 내 옆에 있어.\""
            },
            "en": {
                "name": "유나",
                "text": "\"…어딜 가려고. 오늘은 하루 종일 내 옆에 있어.\""
            }
        }
    },
    "day5_true_morning_yuna_4": {
        "background": null,
        "character": "assets/images/characters/yuna_shy.png",
        "fade": true,
        "next": "day5_true_morning_yuna_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*잠결에 웅얼거리며 내 품으로 더 파고드는 유나. 그 서늘했던 아이가 내게만 보여주는 무방비한 모습이었다.*"
            },
            "en": {
                "name": "나",
                "text": "*잠결에 웅얼거리며 내 품으로 더 파고드는 유나. 그 서늘했던 아이가 내게만 보여주는 무방비한 모습이었다.*"
            }
        }
    },
    "day5_true_morning_yuna_5": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_ending_true",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이 고요하고 완벽한 세계에서, 나는 그녀의 온전한 안식처가 되기로 다짐했다.*"
            },
            "en": {
                "name": "나",
                "text": "*이 고요하고 완벽한 세계에서, 나는 그녀의 온전한 안식처가 되기로 다짐했다.*"
            }
        }
    },
    "day5_true_morning_dain_1": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_true_morning_dain_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*별빛이 쏟아지던 체육관 매트 위, 서로의 심장 소리가 하나처럼 겹쳐지던 밤이 지났다.*"
            },
            "en": {
                "name": "나",
                "text": "*별빛이 쏟아지던 체육관 매트 위, 서로의 심장 소리가 하나처럼 겹쳐지던 밤이 지났다.*"
            }
        }
    },
    "day5_true_morning_dain_2": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_true_morning_dain_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*아침 햇살에 눈을 뜨자, 내 배 위로 턱 하니 다리를 걸치고 자는 다인이가 보였다.*"
            },
            "en": {
                "name": "나",
                "text": "*아침 햇살에 눈을 뜨자, 내 배 위로 턱 하니 다리를 걸치고 자는 다인이가 보였다.*"
            }
        }
    },
    "day5_true_morning_dain_3": {
        "background": null,
        "character": "assets/images/characters/dain_laugh.png",
        "fade": true,
        "next": "day5_true_morning_dain_4",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"...으음, 좋은 아침. 눈 뜨자마자 네가 보이니까... 기분 되게 이상하다.\""
            },
            "en": {
                "name": "다인",
                "text": "\"...으음, 좋은 아침. 눈 뜨자마자 네가 보이니까... 기분 되게 이상하다.\""
            }
        }
    },
    "day5_true_morning_dain_4": {
        "background": null,
        "character": "assets/images/characters/dain_laugh.png",
        "fade": true,
        "next": "day5_true_morning_dain_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 비비며 해맑게 웃는 다인이. 어젯밤의 부끄러움은 온데간데없이, 평소의 밝은 에너지 그대로였다.*"
            },
            "en": {
                "name": "나",
                "text": "*눈을 비비며 해맑게 웃는 다인이. 어젯밤의 부끄러움은 온데간데없이, 평소의 밝은 에너지 그대로였다.*"
            }
        }
    },
    "day5_true_morning_dain_5": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_ending_true",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이 눈부신 미소를 매일 아침 볼 수 있다면, 내 남은 생은 분명 지루할 틈이 없을 것이다.*"
            },
            "en": {
                "name": "나",
                "text": "*이 눈부신 미소를 매일 아침 볼 수 있다면, 내 남은 생은 분명 지루할 틈이 없을 것이다.*"
            }
        }
    },
    "day5_true_morning_nurse_1": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_true_morning_nurse_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*은은한 향수 냄새와 함께, 어른의 여유로움에 완전히 이끌렸던 밤이 지났다.*"
            },
            "en": {
                "name": "나",
                "text": "*은은한 향수 냄새와 함께, 어른의 여유로움에 완전히 이끌렸던 밤이 지났다.*"
            }
        }
    },
    "day5_true_morning_nurse_2": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_true_morning_nurse_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 뜨자, 턱을 괸 채 내 얼굴을 가만히 내려다보고 있는 선생님과 시선이 마주쳤다.*"
            },
            "en": {
                "name": "나",
                "text": "*눈을 뜨자, 턱을 괸 채 내 얼굴을 가만히 내려다보고 있는 선생님과 시선이 마주쳤다.*"
            }
        }
    },
    "day5_true_morning_nurse_3": {
        "background": null,
        "character": "assets/images/characters/nurse_shy.png",
        "fade": true,
        "next": "day5_true_morning_nurse_4",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"잘 잤어? 우리 학생, 자는 모습도 꽤 귀엽네.\""
            },
            "en": {
                "name": "보건선생님",
                "text": "\"잘 잤어? 우리 학생, 자는 모습도 꽤 귀엽네.\""
            }
        }
    },
    "day5_true_morning_nurse_4": {
        "background": null,
        "character": "assets/images/characters/nurse_shy.png",
        "fade": true,
        "next": "day5_true_morning_nurse_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*내 뺨을 부드럽게 쓸어내리는 손길. 장난기 어린 미소 뒤에 숨겨진 깊은 애정이 느껴졌다.*"
            },
            "en": {
                "name": "나",
                "text": "*내 뺨을 부드럽게 쓸어내리는 손길. 장난기 어린 미소 뒤에 숨겨진 깊은 애정이 느껴졌다.*"
            }
        }
    },
    "day5_true_morning_nurse_5": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_ending_true",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*더 이상 선생님과 학생이 아닌, 온전한 두 사람으로서 맞이하는 첫 아침이었다.*"
            },
            "en": {
                "name": "나",
                "text": "*더 이상 선생님과 학생이 아닌, 온전한 두 사람으로서 맞이하는 첫 아침이었다.*"
            }
        }
    },
    "day5_true_morning_teacher_1": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_true_morning_teacher_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어설프고 서툴렀지만, 그래서 더 진심이 닿았던 밤이 지났다.*"
            },
            "en": {
                "name": "나",
                "text": "*어설프고 서툴렀지만, 그래서 더 진심이 닿았던 밤이 지났다.*"
            }
        }
    },
    "day5_true_morning_teacher_2": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_true_morning_teacher_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*부스럭거리는 소리에 눈을 뜨니, 선생님이 까치발을 들고 몰래 침대에서 빠져나가려 하고 있었다.*"
            },
            "en": {
                "name": "나",
                "text": "*부스럭거리는 소리에 눈을 뜨니, 선생님이 까치발을 들고 몰래 침대에서 빠져나가려 하고 있었다.*"
            }
        }
    },
    "day5_true_morning_teacher_3": {
        "background": null,
        "character": "assets/images/characters/teacher_shy.png",
        "fade": true,
        "next": "day5_true_morning_teacher_4",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"...깼어? 몰래 커피라도 타놓으려고 했는데... 들켜버렸네.\""
            },
            "en": {
                "name": "담임선생님",
                "text": "\"...깼어? 몰래 커피라도 타놓으려고 했는데... 들켜버렸네.\""
            }
        }
    },
    "day5_true_morning_teacher_4": {
        "background": null,
        "character": "assets/images/characters/teacher_shy.png",
        "fade": true,
        "next": "day5_true_morning_teacher_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*얼굴이 새빨개진 채 어쩔 줄 몰라 하는 선생님의 손을 잡아당겨 다시 품에 안았다.*"
            },
            "en": {
                "name": "나",
                "text": "*얼굴이 새빨개진 채 어쩔 줄 몰라 하는 선생님의 손을 잡아당겨 다시 품에 안았다.*"
            }
        }
    },
    "day5_true_morning_teacher_5": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_ending_true",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"5분만… 이러고 있자.\" 엄격한 선생님의 가면이 벗겨진, 이 사랑스러운 사람을 평생 지켜주고 싶어졌다.)"
            },
            "en": {
                "name": "나",
                "text": "(\"5분만… 이러고 있자.\" 엄격한 선생님의 가면이 벗겨진, 이 사랑스러운 사람을 평생 지켜주고 싶어졌다.)"
            }
        }
    },
    "day5_good_start": {
        "sunset": true,
        "setFlag": "ending_good",
        "next": "day5_good_talk_1",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*석양 아래, 연인과 나란히 서 있다. 여러 일이 있었지만… 결국 이 사람 곁에 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Standing side by side under the sunset. There were complications along the way... but in the end, I'm here with this person.*"
            }
        }
    },
    "day5_good_talk_1": {
        "sunset": true,
        "next": "day5_good_talk_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"…솔직히 말할게. 나 처음엔 마음이 흔들렸어. 좋은 사람들이 많아서.\""
            },
            "en": {
                "name": "Me",
                "text": "\"...I'll be honest. At first, my heart wavered. There were so many wonderful people around.\""
            }
        }
    },
    "day5_good_talk_2": {
        "sunset": true,
        "next": "day5_good_response",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"근데 결국… 내 마음이 향하는 건 너뿐이었어.\""
            },
            "en": {
                "name": "Me",
                "text": "\"But in the end... the only one my heart points to is you.\""
            }
        }
    },
    "day5_good_response": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_good_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_good_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_good_dain",
                "character": "Dain"
            },
            {
                "next": "day5_good_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_good_teacher",
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
    "day5_good_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day5_good_final",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…알고 있었어. 네가 다른 애들한테도 잘해주는 거. 근데 괜찮아. 결국 내 곁에 있으니까.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...I knew. That you were being nice to other girls too. But it's okay. You're by my side in the end.\""
            }
        }
    },
    "day5_good_yuna": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "day5_good_final",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…흔들렸다는 거 알아. 근데 결국 나한테 온 거잖아. …그것만으로 됐어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I know you wavered. But you came to me in the end. ...That's enough.\""
            }
        }
    },
    "day5_good_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_good_final",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"에이~ 나는 처음부터 알았어! 네가 결국 나한테 올 줄!! ...다행이다.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Pfft~ I knew from the start! That you'd come to me in the end!! Hehe!\""
            }
        }
    },
    "day5_good_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day5_good_final",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"학생들한테 인기 많은 건 알고 있었어. 후후… 근데 지금 이 순간만큼은 나만 봐.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"I knew you were popular with the students. Hehe... But right now, just look at me.\""
            }
        }
    },
    "day5_good_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day5_good_final",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…바람둥이. 근데 나한테 온 거면 됐어. 앞으로는 나만 봐. 알겠지?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Player. But since you came to me, that's enough. From now on, eyes on me only. Got it?\""
            }
        }
    },
    "day5_good_final": {
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day5_ending_good",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*맞잡은 두 손 사이로 전해지는 묵직한 온기가, 그동안의 모든 엇갈림과 망설임을 조용히 덮어주고 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We held hands side by side, watching the sunset. It wasn't perfect... but this is our beginning.*"
            }
        }
    },
    "day5_mayhem_start": {
        "sunset": true,
        "next": "day5_mayhem_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*옥상에 올라왔는데… 어라?*"
            },
            "en": {
                "name": "Me",
                "text": "*I came up to the rooftop... Wait, huh?*"
            }
        }
    },
    "day5_mayhem_2": {
        "character": null,
        "sunset": true,
        "next": "day5_mayhem_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*왜… 왜 다들 여기 있는 거야?!*"
            },
            "en": {
                "name": "Me",
                "text": "*Why... why is everyone here?!*"
            }
        }
    },
    "day5_mayhem_3": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_4",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"어머, {name}(이)야! 나도 방금 옥상에 오려던 참이었어~\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh, {name}! I was just about to come up to the rooftop too~\""
            }
        }
    },
    "day5_mayhem_4": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day5_mayhem_5",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…왜 또 서연이가 여기 있어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Why is Seoyeon here again.\""
            }
        }
    },
    "day5_mayhem_5": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_5b",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야!! 나도 왔어!! 엇, 다들 왜 여기 있어?!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey!! I'm here too!! Wait, why is everyone here?!\""
            }
        }
    },
    "day5_mayhem_5b": {
        "sunset": true,
        "branches": [
            {
                "next": "day5_mayhem_teacher_watch",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day5_mayhem_nurse_watch",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day5_mayhem_6"
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
    "day5_mayhem_teacher_watch": {
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day5_mayhem_nurse_check",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*저 멀리서 담임선생님이 이쪽을 바라보고 계신다. 표정이 복잡해 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*In the distance, the homeroom teacher is watching us. Her expression looks complicated.*"
            }
        }
    },
    "day5_mayhem_nurse_check": {
        "sunset": true,
        "branches": [
            {
                "next": "day5_mayhem_nurse_watch",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day5_mayhem_6"
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
    "day5_mayhem_nurse_watch": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day5_mayhem_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님도 창문 너머로 이 상황을 지켜보고 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The school nurse is also watching the situation through a window.*"
            }
        }
    },
    "day5_mayhem_6": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이건… 수라장이 될 것 같은 예감이…*"
            },
            "en": {
                "name": "Me",
                "text": "*I have a feeling... this is going to be absolute chaos...*"
            }
        }
    },
    "day5_mayhem_7": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_8",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"그나저나 {name}(아/야), 이번 주말에 나랑 약속했던 거 기억하지?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"By the way {name}, you remember our plans for this weekend, right?\""
            }
        }
    },
    "day5_mayhem_8": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day5_mayhem_9",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…뭐? 나랑도 약속했는데.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...What? You made plans with me too.\""
            }
        }
    },
    "day5_mayhem_9": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day5_mayhem_10",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"엥?! 야! 나한테도 시간 된다고 했잖아!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Huh?! Hey! You told me you were free too!!\""
            }
        }
    },
    "day5_mayhem_10": {
        "character": null,
        "sunset": true,
        "next": "day5_mayhem_11",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*모두의 시선이 동시에 나를 향한다. …끝났다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Everyone's eyes turn toward me simultaneously. ...I'm done for.*"
            }
        }
    },
    "day5_mayhem_11": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_12",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…{name}. 설명 좀 해줄래?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...{name}. Care to explain?\""
            }
        }
    },
    "day5_mayhem_12": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day5_mayhem_honest"
            },
            {
                "next": "day5_mayhem_confess"
            },
            {
                "next": "day5_mayhem_run"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뭐라고 해야 하지?!*",
                "choices": [
                    "\"다, 다들 좋아하면 안 되나…?\"",
                    "\"진심으로 말할게.\"",
                    "\"(전력으로 도망친다)\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*What do I say?!*",
                "choices": [
                    "\"C-can't I like all of you...?\"",
                    "\"Let me speak from the heart.\"",
                    "\"(Run for it!!)\""
                ]
            }
        }
    },
    "day5_mayhem_honest": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_honest_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"사, 사실… 다들 너무 좋은 사람들이라 고르지 못하겠어서…\""
            },
            "en": {
                "name": "Me",
                "text": "\"A-actually... you're all such wonderful people that I couldn't choose...\""
            }
        }
    },
    "day5_mayhem_honest_2": {
        "sunset": true,
        "next": "day5_mayhem_honest_3",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "*침묵이 흐른다.*"
            },
            "en": {
                "name": "System",
                "text": "*Silence fills the air.*"
            }
        }
    },
    "day5_mayhem_honest_3": {
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "next": "day5_mayhem_honest_4",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"……하.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"......Hah.\""
            }
        }
    },
    "day5_mayhem_honest_4": {
        "character": "assets/images/characters/yuna_sad.png",
        "sunset": true,
        "next": "day5_mayhem_honest_5",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…최악이야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...The worst.\""
            }
        }
    },
    "day5_mayhem_honest_5": {
        "character": "assets/images/characters/dain_sad.png",
        "sunset": true,
        "next": "day5_mayhem_final",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"너 진짜… 진짜 나빠!!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"You really... you're really the worst!!!\""
            }
        }
    },
    "day5_mayhem_run": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_run_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뒤도 돌아보지 않고 옥상 문을 향해 달린다!!*"
            },
            "en": {
                "name": "Me",
                "text": "*I sprint toward the rooftop door without looking back!!*"
            }
        }
    },
    "day5_mayhem_run_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_run_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"잠깐, {name}!! 어딜 가는 거야?!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Wait, {name}!! Where are you going?!\""
            }
        }
    },
    "day5_mayhem_run_3": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day5_mayhem_run_4",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…도망치면 더 나쁜 거 알지?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Running makes it even worse, you know.\""
            }
        }
    },
    "day5_mayhem_run_4": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_run_5",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야 기다려!! 나 달리기 1등이야!! 도망 못 가!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey wait!! I won first place in the dash!! You can't escape!!\""
            }
        }
    },
    "day5_mayhem_run_5": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*계단을 뛰어내려가는 나를 모두가 쫓아온다. 왜 다들 이렇게 빠른 거야?!*"
            },
            "en": {
                "name": "Me",
                "text": "*Everyone chases me down the stairs. Why is everyone so fast?!*"
            }
        }
    },
    "day5_mayhem_confess": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"…장난이 아니야. 나는 진심으로, 여기 있는 모두를 좋아해.\""
            },
            "en": {
                "name": "Me",
                "text": "\"...I'm not joking. I sincerely like every single one of you here.\""
            }
        }
    },
    "day5_mayhem_confess_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"못 고르겠는 게 아니라, 고르고 싶지 않아. 한 사람을 택하면 나머지를 잃잖아.\""
            },
            "en": {
                "name": "Me",
                "text": "\"It's not that I can't choose— I don't want to choose. If I pick one, I lose the others.\""
            }
        }
    },
    "day5_mayhem_confess_3": {
        "sunset": true,
        "next": "day5_mayhem_confess_seoyeon",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "*긴 침묵이 흐른다.*"
            },
            "en": {
                "name": "System",
                "text": "*A long silence follows.*"
            }
        }
    },
    "day5_mayhem_confess_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_yuna",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…하. 너 진짜 대단하다. 보통 이런 말 하면 뺨 맞는 거 알지?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Hah. You've really got nerve. You know you'd normally get slapped for saying that, right?\""
            }
        }
    },
    "day5_mayhem_confess_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_dain",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…최악이야. 근데… 솔직한 건 인정해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...The worst. But... I'll admit you're honest.\""
            }
        }
    },
    "day5_mayhem_confess_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_silence",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야!! 그게 말이 돼?! …근데 왜 싫지가 않지?!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey!! That doesn't even make sense!! ...But why don't I hate it?!\""
            }
        }
    },
    "day5_mayhem_confess_silence": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*모두가 서로 눈치를 본다. 기묘한 침묵이 흐른다.*"
            },
            "en": {
                "name": "Me",
                "text": "*They all exchange glances. A strange silence hangs in the air.*"
            }
        }
    },
    "day5_mayhem_confess_seoyeon_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_confess_yuna_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…조건이 있어. 나한테 제일 잘해야 해.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...I have one condition. You have to treat me the best.\""
            }
        }
    },
    "day5_mayhem_confess_yuna_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_dain_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…나한테 제일 잘해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Treat me the best.\""
            }
        }
    },
    "day5_mayhem_confess_dain_2": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_confess_react",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"나한테!! 제일!! 잘해!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Treat!! Me!! The best!!\""
            }
        }
    },
    "day5_mayhem_confess_react": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_confess_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…모두가 동시에 나를 노려본다. 눈빛이 무섭다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...They all glare at me at once. Their eyes are terrifying.*"
            }
        }
    },
    "day5_mayhem_confess_final": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "fade": true,
        "setFlag": "ending_harem",
        "next": "day5_ending_harem",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…이건 어떻게 보면 지옥의 시작일지도 모른다. 하지만 이 순간만큼은— 세상에서 가장 행복한 남자다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...This might be the beginning of hell. But in this moment— I'm the happiest man in the world.*"
            }
        }
    },
    "day5_mayhem_final": {
        "sunset": true,
        "character": null,
        "next": "day5_mayhem_final_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*석양이 진다. 평화로운 일요일 오후가… 이렇게 끝나는 건가.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sunset fades. Is this how a peaceful Sunday afternoon ends...?*"
            }
        }
    },
    "day5_mayhem_final_2": {
        "character": null,
        "sunset": true,
        "fade": true,
        "setFlag": "ending_mayhem",
        "next": "day5_ending_mayhem",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…근데 나쁘지 않은 기분은 뭐지? 이런 소란스러운 일상도… 나름 행복한 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...But why don't I feel so bad? This chaotic everyday life... is kind of its own happiness.*"
            }
        }
    },
    "day5_friend_start": {
        "sunset": true,
        "next": "day5_friend_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*석양이 옥상을 물들인다. 옆에 있는 그 사람의 얼굴을 바라본다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sunset paints the rooftop. I look at the face of the person beside me.*"
            }
        }
    },
    "day5_friend_choice": {
        "sunset": true,
        "choices": [
            {
                "next": "day5_friend_confess",
                "setFlag": "day5_confessed"
            },
            {
                "next": "day5_friend_stay"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*마음을 전할 마지막 기회다… 어떻게 할까?*",
                "choices": [
                    "\"할 말이 있어…\" (고백한다)",
                    "\"…좋은 친구여서 다행이야.\" (친구로 남는다)"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*This is my last chance to tell them how I feel... What should I do?*",
                "choices": [
                    "\"I need to tell you something...\" (Confess)",
                    "\"...I'm glad we're good friends.\" (Stay friends)"
                ]
            }
        }
    },
    "day5_friend_confess": {
        "sunset": true,
        "next": "day5_friend_confess_response",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"사실… 너를 좋아해. 어제부터 계속 말하려고 했는데, 이제야 용기가 났어.\""
            },
            "en": {
                "name": "Me",
                "text": "\"The truth is... I like you. I've been trying to say it since yesterday, and I finally found the courage.\""
            }
        }
    },
    "day5_friend_confess_response": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_late_accept_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_late_accept_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_late_accept_dain",
                "character": "Dain"
            },
            {
                "next": "day5_late_accept_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_late_accept_teacher",
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
    "day5_late_accept_seoyeon": {
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 15
            }
        },
        "setFlag": "ending_good",
        "next": "day5_late_accept_transition1",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…바보. 기다렸잖아, 계속. 나도… 좋아해.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Dummy. I've been waiting this whole time. I... like you too.\""
            }
        }
    },
    "day5_late_accept_yuna": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 15
            }
        },
        "setFlag": "ending_good",
        "next": "day5_late_accept_transition1",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……늦었어. 진짜 늦었다고. …근데 괜찮아. 나도 같은 마음이니까.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...You're late. Really late. ...But it's okay. I feel the same way.\""
            }
        }
    },
    "day5_late_accept_dain": {
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 15
            }
        },
        "setFlag": "ending_good",
        "next": "day5_late_accept_transition1",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…!! 드디어!! 나 어제부터 얼마나 기다렸는지 알아?! 나도 좋아해, 바보야!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...!! Finally!! Do you know how long I've been waiting since yesterday?! I like you too, dummy!!\""
            }
        }
    },
    "day5_late_accept_nurse": {
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "stats": {
            "Nurse": {
                "affinity": 15
            }
        },
        "setFlag": "ending_good",
        "next": "day5_late_accept_transition1",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…드디어 말해주는 거야? 나도… 같은 마음이야. 오래전부터.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...You're finally saying it? Me too... I've felt the same way. For a long time.\""
            }
        }
    },
    "day5_late_accept_teacher": {
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "stats": {
            "Teacher": {
                "affinity": 15
            }
        },
        "setFlag": "ending_good",
        "next": "day5_late_accept_transition1",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…하, 진짜. 어제 말하지 그랬어. 나 어제 밤새 고민했거든. …나도 좋아해, 이 바보야.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Geez, seriously. Why didn't you say so yesterday. I was up all night thinking about it. ...I like you too, dummy.\""
            }
        }
    },
    "day5_late_accept_transition1": {
        "sunset": true,
        "next": "day5_late_accept_transition2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*한참을 서로 바라보다, 웃음이 터진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*After staring at each other for a while, we burst into laughter.*"
            }
        }
    },
    "day5_late_accept_transition2": {
        "sunset": true,
        "next": "day5_good_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이렇게 간단한 건데, 왜 그렇게 오래 걸렸을까.*"
            },
            "en": {
                "name": "Me",
                "text": "*Something so simple... why did it take so long?*"
            }
        }
    },
    "day5_friend_stay": {
        "sunset": true,
        "setFlag": "ending_friend",
        "next": "day5_friend_response",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"…이 학교에 와서 너 같은 친구를 만난 게 정말 다행이야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"...I'm really glad I met someone like you at this school.\""
            }
        }
    },
    "day5_friend_response": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_friend_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_friend_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_friend_dain",
                "character": "Dain"
            },
            {
                "next": "day5_friend_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_friend_teacher",
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
    "day5_friend_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day5_friend_bitter",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…응, 나도! 앞으로도 좋은 친구로 지내자. …친구.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Yeah, me too! Let's stay good friends. ...Friends.\""
            }
        }
    },
    "day5_friend_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day5_friend_bitter",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…그래. 친구. …고마워.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Right. Friends. ...Thanks.\""
            }
        }
    },
    "day5_friend_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day5_friend_bitter",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…응! 너는 최고의 친구야! …최고의… 친구.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Yeah! You're the best friend ever! ...The best... friend.\""
            }
        }
    },
    "day5_friend_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day5_friend_bitter",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…그래. 좋은 학생이야, 너는. …좋은 학생.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Right. You're a good student. ...A good student.\""
            }
        }
    },
    "day5_friend_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day5_friend_bitter",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…그래, 뭐. 교사와 학생이니까 당연한 건데. …당연한 거지.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Yeah, well. Teacher and student, so of course it's natural. ...Of course.\""
            }
        }
    },
    "day5_friend_bitter": {
        "sunset": true,
        "character": null,
        "next": "day5_friend_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…왠지 그 사람의 미소가 조금 쓸쓸해 보였다. 내 마음 한쪽도 아렸다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...Somehow, their smile looked a little sad. A corner of my heart ached too.*"
            }
        }
    },
    "day5_friend_final": {
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day5_ending_friend",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이게 맞는 선택이었을까? …모르겠다. 하지만 이것도 하나의 결말이니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*Was this the right choice? ...I don't know. But this too is an ending.*"
            }
        }
    },
    "day5_alone_start": {
        "sunset": true,
        "setFlag": "ending_alone",
        "next": "day5_alone_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*옥상에서 혼자 석양을 본다. 이 학교에서 보낸 시간이 스쳐 지나간다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I watch the sunset alone on the rooftop. Memories of my time at this school flash by.*"
            }
        }
    },
    "day5_alone_2": {
        "sunset": true,
        "next": "day5_alone_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연, 유나, 다인, 선생님들… 좋은 사람들이 많았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon, Yuna, Dain, the teachers... There were so many wonderful people.*"
            }
        }
    },
    "day5_alone_3": {
        "sunset": true,
        "next": "day5_alone_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그중 누군가에게 마음을 전했어야 했을까? …아마도.*"
            },
            "en": {
                "name": "Me",
                "text": "*Should I have told one of them how I felt? ...Probably.*"
            }
        }
    },
    "day5_alone_4": {
        "sunset": true,
        "next": "day5_alone_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*하지만 후회하진 않아. 이곳에서 보낸 시간 자체가 소중하니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*But I don't regret it. The time I spent here is precious in itself.*"
            }
        }
    },
    "day5_alone_5": {
        "sunset": true,
        "next": "day5_alone_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*혼자지만 외롭지 않다. 전학 오기 전의 나와는 확실히 달라졌어.*"
            },
            "en": {
                "name": "Me",
                "text": "*I'm alone, but I'm not lonely. I've definitely changed from who I was before I transferred.*"
            }
        }
    },
    "day5_alone_6": {
        "sunset": true,
        "fade": true,
        "next": "day5_ending_alone",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*내일부터 다시 시작이다. 이번엔… 좀 더 용기를 내보자.*"
            },
            "en": {
                "name": "Me",
                "text": "*Tomorrow is a fresh start. This time... I'll be a little braver.*"
            }
        }
    }
});
