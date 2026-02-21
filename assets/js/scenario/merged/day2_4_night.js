/**
 * ============================================================================
 * CUPID - day2_4_night (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day2_4_night.js + en_day2_4_night.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[2]) SCENARIO[2] = {};

Object.assign(SCENARIO[2], {
    "day2_end": {
        "background": "assets/images/background/street.png",
        "bgm": "night2.mp3",
        "character": null,
        "night": true,
        "next": "day2_end_walk_home",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교문을 나서자 저녁 공기가 얼굴을 감싼다. 어느새 하늘은 짙은 남색으로 물들어 가고 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As I step out of the school gate, the evening air wraps around my face. The sky is already fading into a deep navy blue.*"
            }
        }
    },
    "day2_end_walk_home": {
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "day2_end_evening_air",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*가로등이 하나둘씩 켜지기 시작한다. 이 거리도 어느새 낯이 익어서, 어디서 꺾어야 하는지 생각하지 않아도 발이 알아서 움직인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The streetlights begin flickering on one by one. This road has become so familiar that my feet know where to turn without thinking.*"
            }
        }
    },
    "day2_end_evening_air": {
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "day2_end_arrive_home",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어딘가에서 저녁밥 짓는 냄새가 바람에 실려온다. 이웃집 창문 너머로 따뜻한 불빛이 새어나오고... 이런 평범한 풍경이 묘하게 마음을 편안하게 해준다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The smell of someone cooking dinner drifts on the breeze. Warm light seeps through a neighbor's window... Something about this ordinary scene puts my mind strangely at ease.*"
            }
        }
    },
    "day2_end_arrive_home": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_end_change_clothes",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*현관문을 열고 들어섰다. 신발을 벗으며 '다녀왔습니다'라고 중얼거렸지만, 대답은 없다. 부모님은 아직 안 오신 모양이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I open the front door and step inside. I mutter 'I'm home' as I take off my shoes, but there's no reply. Looks like my parents aren't back yet.*"
            }
        }
    },
    "day2_end_change_clothes": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_end_settle",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교복을 벗고 편한 옷으로 갈아입었다. 넥타이를 빼는 순간, 하루의 긴장이 한꺼번에 풀리는 기분이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I change out of my uniform into something comfortable. The moment the tie comes off, it feels like all the tension from the day melts away at once.*"
            }
        }
    },
    "day2_end_settle": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_end_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*가방을 내려놓고 책상 앞에 앉았다. 오늘 받은 프린트물을 파일에 꽂고, 물 한 잔을 마신다. 조용한 방 안에 시계 소리만 똑딱거린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I set my bag down and sit at my desk. I file away the printouts from today and drink a glass of water. The only sound in the quiet room is the ticking of the clock.*"
            }
        }
    },
    "day2_end_2": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_reflect_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*침대에 기대앉아 천장을 올려다본다. 오늘은... 정말 많은 일이 있었어. 어제보다 훨씬 깊고 복잡한 하루였다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I lean back against my bed and stare at the ceiling. Today was... really something. A much deeper and more complicated day than yesterday.*"
            }
        }
    },
    "day2_night_reflect_start": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_reflect_yuna_check",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 감으면 오늘 있었던 장면들이 파노라마처럼 스쳐 지나간다. 이틀째인데... 이미 이 학교가 내 일상의 일부가 된 것 같아.*"
            },
            "en": {
                "name": "Me",
                "text": "*When I close my eyes, the scenes from today flash by like a panorama. It's only been two days... but this school already feels like part of my everyday life.*"
            }
        }
    },
    "day2_night_reflect_yuna_check": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_reflect_yuna_secret",
                "condition": "met_yuna"
            },
            {
                "next": "day2_night_reflect_seoyeon_check"
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
    "day2_night_reflect_yuna_secret": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_reflect_seoyeon_check",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 속삭였던 비밀... 아직도 머릿속을 떠나지 않는다. 그 아이는 왜 나한테만 그런 이야기를 한 걸까? 저 신비로운 눈동자 속에 어떤 세계가 펼쳐져 있는 건지...*"
            },
            "en": {
                "name": "Me",
                "text": "*The secret Yuna whispered to me... it still lingers in my mind. Why did she tell only me something like that? What kind of world lies behind those mysterious eyes of hers...*"
            }
        }
    },
    "day2_night_reflect_seoyeon_check": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_reflect_seoyeon",
                "condition": "met_seoyeon"
            },
            {
                "next": "day2_night_reflect_dain_check"
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
    "day2_night_reflect_seoyeon": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_reflect_dain_check",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이는 오늘도 변함없이 밝았어. 학생회 일로 바쁘면서도 나를 챙겨주려고 애쓰는 모습이... 사실 좀 미안하기도 하고, 고맙기도 하고.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon was her usual cheerful self today. Even though she's busy with student council work, she tries so hard to look after me... I feel a bit guilty, but also grateful.*"
            }
        }
    },
    "day2_night_reflect_dain_check": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_reflect_dain",
                "condition": "met_dain"
            },
            {
                "next": "day2_night_reflect_adults"
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
    "day2_night_reflect_dain": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_reflect_adults",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이는... 아, 그 에너지. 같이 있으면 지칠 틈이 없어. 운동하는 모습이 정말 멋있었고, 장난치는 것도 즐거웠어. 내일은 또 무슨 도전을 걸어올까.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain is... ah, that energy. There's never a dull moment with her. Watching her play sports was really cool, and messing around with her was fun. I wonder what challenge she'll throw at me tomorrow.*"
            }
        }
    },
    "day2_night_reflect_adults": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_snack_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님은 오늘도 묘한 분위기를 풍기셨고, 담임선생님은 장난스러우면서도 은근히 나를 신경 쓰셨어. 어른이라서 더 복잡한 걸까, 아니면... 내가 너무 의식하는 걸까.*"
            },
            "en": {
                "name": "Me",
                "text": "*The School Nurse had that mysterious aura about her again today, and the Homeroom Teacher was playful yet subtly attentive toward me. Is it more complicated because they're adults, or... am I just overthinking it?*"
            }
        }
    },
    "day2_night_snack_start": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_snack_kitchen",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*생각에 잠겨 있었더니 어느새 배가 고파졌다. 저녁은 간단하게 때웠으니... 부엌에서 뭐라도 찾아볼까.*"
            },
            "en": {
                "name": "Me",
                "text": "*Lost in thought, I realize I've gotten hungry. I barely ate dinner... maybe I should find something in the kitchen.*"
            }
        }
    },
    "day2_night_snack_kitchen": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_snack_ramen",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*냉장고를 열어보니 엄마가 남겨둔 반찬 몇 가지와 라면이 보인다. 오늘은 라면 기분이야.*"
            },
            "en": {
                "name": "Me",
                "text": "*I open the fridge and find a few side dishes Mom left behind and some instant noodles. I'm in the mood for ramen tonight.*"
            }
        }
    },
    "day2_night_snack_ramen": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_snack_think",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*냄비에 물을 올리고 라면을 끓이기 시작한다. 보글보글 끓는 소리가 조용한 부엌을 채운다. 김이 모락모락 올라오는 걸 보고 있자니 마음이 편안해진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I put water in the pot and start boiling the ramen. The bubbling sound fills the quiet kitchen. Watching the steam curl up makes me feel at ease.*"
            }
        }
    },
    "day2_night_snack_think": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_home",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*라면을 후루룩 먹으며 생각한다. 오늘 연락처를 교환했던 사람들... 메시지를 보내볼까? 아니면 그냥 자버릴까. 설거지를 마치고 방으로 돌아왔다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I slurp the ramen and think. The people I exchanged numbers with today... should I send them a message? Or just go to sleep? After finishing the dishes, I head back to my room.*"
            }
        }
    },
    "day2_night_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "branches": [
            {
                "next": "day2_night_goodnight_start",
                "excludeCondition": "has_any_contact"
            },
            {
                "next": "day2_night_social_media"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*침대에 누워 습관적으로 스마트폰을 들었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I lie on my bed and pick up my phone out of habit.*"
            }
        }
    },
    "day2_night_social_media": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_social_media_scroll",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*메시지를 보내기 전에 SNS를 잠깐 훑어본다. 타임라인에 학교 친구들의 글이 올라와 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Before sending any messages, I quickly scroll through social media. My school friends' posts fill the timeline.*"
            }
        }
    },
    "day2_night_social_media_scroll": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_social_media_post",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*누군가가 올린 급식 사진, 체육 시간에 몰래 찍은 사진, 학교 운동장 석양 사진... 다들 나름의 하루를 보내고 있구나.*"
            },
            "en": {
                "name": "Me",
                "text": "*Someone's photo of school lunch, a sneaky shot taken during PE class, a picture of the sunset over the school field... Everyone's living their own version of the day.*"
            }
        }
    },
    "day2_night_social_media_post": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_social_media_react",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이가 올린 학생회 활동 인증샷에 좋아요가 잔뜩 눌려 있다. 다인이의 배구 연습 영상에는 '멋있다!'라는 댓글이 줄줄이 달려 있고...*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon's student council activity photo is loaded with likes. Dain's volleyball practice video has a flood of comments saying 'So cool!'...*"
            }
        }
    },
    "day2_night_social_media_react": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나도 모르게 미소가 지어진다. 좋아요를 몇 개 누르고 타임라인을 닫았다. ...이제 직접 메시지를 보내볼까.*"
            },
            "en": {
                "name": "Me",
                "text": "*I smile without realizing it. I tap a few likes and close the timeline. ...Maybe it's time to send a message directly.*"
            }
        }
    },
    "day2_night_home_check_contact": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "choices": [
            {
                "next": "day2_night_message_seyoun",
                "condition": "has_number_seyoun",
                "excludeCondition": "sent_msg_day2_seyoun"
            },
            {
                "next": "day2_night_message_yuna",
                "condition": "has_number_yuna",
                "excludeCondition": "sent_msg_day2_yuna"
            },
            {
                "next": "day2_night_message_dain",
                "condition": "has_number_dain",
                "excludeCondition": "sent_msg_day2_dain"
            },
            {
                "next": "day2_night_message_nurse",
                "condition": "has_number_nurse",
                "excludeCondition": "sent_msg_day2_nurse"
            },
            {
                "next": "day2_night_message_teacher",
                "condition": "has_number_teacher",
                "excludeCondition": "sent_msg_day2_teacher"
            },
            {
                "next": "day2_night_nurse_home",
                "condition": "invited_nurse_home"
            },
            {
                "next": "day2_check_affinity"
            },
            {
                "next": "day2_night_goodnight_start"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*누군가에게 메시지를 보내볼까...?*",
                "choices": [
                    "서연이에게 메시지를 보낸다.",
                    "유나에게 메시지를 보낸다.",
                    "다인이에게 메시지를 보낸다.",
                    "보건선생님께 메시지를 보낸다.",
                    "담임선생님께 메시지를 보낸다.",
                    "보건선생님 댁으로 향한다.",
                    "호감도 확인하기",
                    "그만 보내고 잠을 잔다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Should I send a message to someone...?*",
                "choices": [
                    "Send a message to Seoyeon.",
                    "Send a message to Yuna.",
                    "Send a message to Dain.",
                    "Send a message to the School Nurse.",
                    "Send a message to the Homeroom Teacher.",
                    "Head to the School Nurse's place.",
                    "Check affinity",
                    "Stop messaging and go to sleep."
                ]
            }
        }
    },
    "day2_check_affinity": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "현재 캐릭터들과의 호감도 상태입니다.{affinity_list}"
            },
            "en": {
                "name": "System",
                "text": "Here is your current affinity status with each character.{affinity_list}"
            }
        }
    },
    "day2_night_nurse_home": {
        "background": "assets/images/background/nurse_house.png",
        "character": null,
        "night": true,
        "next": "day2_night_nurse_home_entrance",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 알려준 주소로 향했다. 학교 근처의 조용한 오피스텔이다. 엘리베이터를 타고 올라가며 심장이 빨라지는 것을 느낀다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I head to the address she gave me. It's a quiet studio apartment building near the school. My heart beats faster as I ride the elevator up.*"
            }
        }
    },
    "day2_night_nurse_home_entrance": {
        "character": "assets/images/characters/nurse_normal.png",
        "background": "assets/images/background/nurse_house.png",
        "night": true,
        "next": "day2_night_nurse_home_casual",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*초인종을 누르자 안에서 부스럭거리는 소리가 들린다. '잠깐만~'이라는 목소리와 함께 발걸음 소리가 가까워진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I press the doorbell and hear rustling from inside. A voice calls out 'Just a moment~' followed by footsteps drawing closer.*"
            }
        }
    },
    "day2_night_nurse_home_casual": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day2_night_nurse_home_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*문 너머로 모습을 드러낸 선생님은... 학교에서와 전혀 다른 인상이었다. 흰 가운 대신 편한 니트와 긴 치마 차림. 살짝 젖은 머리카락에서 샴푸 향이 은은하게 풍겨온다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The figure that appears from behind the door is... completely different from how she looks at school. Instead of her white coat, she's wearing a cozy knit sweater and a long skirt. A faint scent of shampoo drifts from her slightly damp hair.*"
            }
        }
    },
    "day2_night_nurse_home_2": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day2_night_nurse_home_tea",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, 정말로 왔네? 어서 들어오렴. 밖이 많이 춥지?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh my, you actually came? Come on in. It must be cold outside, right?\""
            }
        }
    },
    "day2_night_nurse_home_tea": {
        "character": "assets/images/characters/nurse_normal.png",
        "background": "assets/images/background/nurse_house.png",
        "night": true,
        "next": "day2_night_nurse_home_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*안으로 들어서자 아늑한 원룸이 눈에 들어온다. 은은한 간접조명, 작은 화분들, 따뜻한 색감의 인테리어. 선생님이 부엌에서 주전자를 올린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Stepping inside, a cozy studio apartment comes into view. Soft indirect lighting, small potted plants, warm-toned décor. She puts the kettle on in the kitchen.*"
            }
        }
    },
    "day2_night_nurse_home_3": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day2_night_nurse_home_talk_life",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"자, 여기 앉으렴. 따뜻한 차 한 잔 줄게. 우리 전학생이랑 단둘이 있으니까... 왠지 기분이 묘하네?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Here, sit down. I'll make you a warm cup of tea. Being alone with my cute transfer student... it feels kind of special, don't you think?\""
            }
        }
    },
    "day2_night_nurse_home_talk_life": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day2_night_nurse_home_talk_alone",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"학교에서는 항상 '선생님'이지만, 여기선 그냥 한 사람이야. 나도 퇴근하면 이렇게 차 마시면서 드라마 보거든. 의외지?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"At school, I'm always 'the teacher,' but here, I'm just a person. When I get home, I drink tea and watch dramas like this. Surprised?\""
            }
        }
    },
    "day2_night_nurse_home_talk_alone": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day2_night_nurse_home_decision",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"사실... 이 집에 학생을 초대한 건 네가 처음이야. 혼자 사니까 가끔 적적할 때가 있거든. 이렇게 차 마실 상대가 있으면 좋겠다고 생각했어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Actually... you're the first student I've ever invited to this place. Living alone, it gets lonely sometimes. I thought it would be nice to have someone to share tea with.\""
            }
        }
    },
    "day2_night_nurse_home_decision": {
        "character": "assets/images/characters/nurse_normal.png",
        "background": "assets/images/background/nurse_house.png",
        "night": true,
        "choices": [
            {
                "next": "day2_night_nurse_home_4"
            },
            {
                "next": "day2_night_home_check_contact"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*시계를 보니 벌써 밤 11시가 넘었다. 찻잔은 비었고, 밤은 깊어졌다. 이대로 더 머무를까, 아니면 돌아갈까...*",
                "choices": [
                    "조금 더 머무른다.",
                    "늦었으니 돌아간다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*I glance at the clock — it's already past 11 PM. The teacup is empty, and the night has grown deep. Should I stay a bit longer, or head back...*",
                "choices": [
                    "Stay a little longer.",
                    "It's late, I should head back."
                ]
            }
        }
    },
    "day2_night_nurse_home_4": {
        "background": "assets/images/background/nurse_home_event1.png",
        "character": null,
        "night": true,
        "next": "day2_night_nurse_home_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 방... 은은한 조명 아래 둘만의 시간이 흐른다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Her room... a quiet moment for just the two of us, under the dim lighting.*"
            }
        }
    },
    "day2_night_nurse_home_5": {
        "background": "assets/images/background/nurse_house.png",
        "character": null,
        "night": true,
        "fade": true,
        "setFlag": "spent_night_at_nurse_home",
        "stats": {
            "Nurse": {
                "affinity": 15
            }
        },
        "changeDay": 3,
        "next": "day3_nurse_home_morning",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님과 단둘이 남겨진 방... 심장 소리가 귓가에 울릴 정도로 크게 들려온다. 그녀의 향기가 코끝을 간지럽히고, 밤은 점점 깊어만 간다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Alone with her in this room... my heartbeat pounds so loudly it echoes in my ears. Her scent tickles the tip of my nose, and the night only grows deeper.*"
            }
        }
    },
    "day2_night_message_seyoun": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_message_seyoun_after",
                "condition": "day2_met_seoyeon_after"
            },
            {
                "next": "day2_night_message_seyoun_lunch",
                "condition": "day2_ate_lunch_seoyeon"
            },
            {
                "next": "day2_night_message_seyoun_generic"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이에게 어떤 메시지를 보낼까?*"
            },
            "en": {
                "name": "Me",
                "text": "*What should I text Seoyeon?*"
            }
        }
    },
    "day2_night_message_seyoun_after": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_seyoun",
        "next": "day2_night_message_seyoun_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이에게 메시지를 보냈다. '오늘 노을부터 야근(?)까지, 너랑 함께해서 정말 행복했어. 내일 봐!'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent Seoyeon a message. 'From tonight's sunset to your overtime?, I was really happy to spend it all with you. See you tomorrow!'*"
            }
        }
    },
    "day2_night_message_seyoun_lunch": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_seyoun",
        "next": "day2_night_message_seyoun_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이에게 메시지를 보냈다. '오늘 점심 샌드위치 정말 맛있었어! 내일 봐.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent Seoyeon a message. 'The sandwich at lunch today was really delicious! See you tomorrow.'*"
            }
        }
    },
    "day2_night_message_seyoun_generic": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_seyoun",
        "next": "day2_night_message_seyoun_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이에게 메시지를 보냈다. '오늘 하루 잘 보냈어? 내일 학교에서 보자.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent Seoyeon a message. 'How was your day? See you at school tomorrow.'*"
            }
        }
    },
    "day2_night_message_seyoun_reply": {
        "type": "free_talk",
        "maxTurns": 10,
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_night_message_seyoun_reply_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_night_message_seyoun_reply_normal"
            },
            {
                "minAffinity": -100,
                "next": "day2_night_message_seyoun_reply_low"
            }
        ],
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*잠시 후, 답장이 왔다.* '...혹시 아직 안 잤어? 내일 학교에서 보자, {name}.'",
                "context": "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 서연이는 주인공의 메시지에 답장을 보낸 상태입니다. 주인공과의 관계에 따라 답장의 톤이 달라집니다. 호감도가 높으면 다정하고 적극적으로, 호감도가 낮으면 조심스럽고 담담하게 대화하세요. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
                "personality": "밝고 다정하며 친근한 학생회장. 주인공에게 호감을 갖고 있으며 솔직하고 적극적으로 다가감."
            },
            "en": {
                "name": "Seoyeon",
                "text": "*After a moment, a reply came.* '...Are you still awake? See you at school tomorrow, {name}.'",
                "context": "It's nighttime, and they are chatting via smartphone messages from their respective homes. Seoyeon has sent a reply to the protagonist's message. Her tone varies depending on her relationship with the protagonist—if affinity is high, she is warm and proactive; if affinity is low, she is cautious and reserved. Please continue the conversation until it naturally wraps up. Once the conversation concludes, the protagonist will drift off to sleep looking forward to tomorrow. Only on the final turn, say goodnight or suggest seeing each other at school tomorrow to end the conversation naturally.",
                "personality": "A bright, affectionate, and friendly student council president. She has feelings for the protagonist and approaches him honestly and proactively."
            }
        }
    },
    "day2_night_message_seyoun_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와의 대화는 언제나 즐겁다. 그녀의 다정한 말투에서 진심이 느껴져 가방을 챙기는 손길이 가볍다. 내일 점심시간이 벌써부터 기다려진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Talking with Seoyeon is always a joy. I can feel the sincerity in her warm words, and it makes packing my bag feel lighter. I'm already looking forward to lunchtime tomorrow.*"
            }
        }
    },
    "day2_night_message_seyoun_reply_normal": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와 무난하게 대화를 마쳤다. 내일 점심 약속을 잊지 말아야겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I finished chatting with Seoyeon without any issues. I'd better not forget our lunch plans tomorrow.*"
            }
        }
    },
    "day2_night_message_seyoun_reply_low": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이의 반응이 평소보다 조금 사무적으로 느껴진다. 내가 무언가 실수한 걸까? 내일은 좀 더 조심스럽게 다가가야겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon's response feels more businesslike than usual. Did I do something wrong? I should approach her more carefully tomorrow.*"
            }
        }
    },
    "day2_night_message_yuna": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_message_yuna_met",
                "condition": "day2_met_yuna_after"
            },
            {
                "next": "day2_night_message_yuna_met",
                "condition": "day2_met_yuna_lunch"
            },
            {
                "next": "day2_night_message_yuna_generic"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나에게 어떤 메시지를 보낼까?*"
            },
            "en": {
                "name": "Me",
                "text": "*What should I text Yuna?*"
            }
        }
    },
    "day2_night_message_yuna_met": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_yuna",
        "next": "day2_night_message_yuna_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나에게 메시지를 보냈다. '오늘 보여준 거... 잊지 않을게. 잘 자.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent Yuna a message. 'What you showed me today... I won't forget it. Good night.'*"
            }
        }
    },
    "day2_night_message_yuna_generic": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_yuna",
        "next": "day2_night_message_yuna_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나에게 메시지를 보냈다. '오늘 하루는 어땠어? 내일 학교에서 보자.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent Yuna a message. 'How was your day today? See you at school tomorrow.'*"
            }
        }
    },
    "day2_night_message_yuna_reply": {
        "type": "free_talk",
        "maxTurns": 10,
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "affinityChar": "Yuna",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_night_message_yuna_reply_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_night_message_yuna_reply_normal"
            },
            {
                "minAffinity": -100,
                "next": "day2_night_message_yuna_reply_low"
            }
        ],
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*잠시 후 도착한 답장.* '...응. 네가 이해해줄 줄 알았어. 꿈속에서도 지켜보고 있을게, {name}.'",
                "context": "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 유나는 주인공의 메시지에 짧지만 깊은 여운이 담긴 답장을 보낸 상태입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
                "personality": "신비롭고 차가우며 비밀이 많은 소녀. 주인공에게 묘한 흥미를 느끼고 있으며, 짧고 의미심장한 말투를 사용함."
            },
            "en": {
                "name": "Yuna",
                "text": "*A reply arrives after a moment.* '...Yeah. I knew you'd understand. I'll be watching over you, even in your dreams, {name}.'",
                "context": "It's nighttime, and they are chatting via smartphone messages from their respective homes. Yuna has sent a brief but deeply lingering reply to the protagonist's message. Please continue the conversation until it naturally wraps up. Once the conversation concludes, the protagonist will drift off to sleep looking forward to tomorrow. Only on the final turn, say goodnight or suggest seeing each other at school tomorrow to end the conversation naturally.",
                "personality": "A mysterious, cool, and secretive girl. She feels a strange fascination toward the protagonist and uses short, enigmatic phrases."
            }
        }
    },
    "day2_night_message_yuna_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 신비로운 분위기에 점점 빠져드는 것 같다. '꿈속에서도 지켜보겠다'는 그녀의 말이 무섭기보다는 묘하게 안심이 된다. 정말로 꿈에서 그녀를 만날 수 있을 것만 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I feel myself being drawn deeper into Yuna's mysterious aura. Her words about watching over me in my dreams feel less frightening and more strangely comforting. It almost feels like I really could meet her in a dream.*"
            }
        }
    },
    "day2_night_message_yuna_reply_normal": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나와의 대화는 여전히 난해하지만, 조금은 가까워진 기분이다. 그녀가 말한 비밀들이 머릿속을 맴돈다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Talking with Yuna is still puzzling, but I feel like we've gotten a little closer. The secrets she mentioned keep swirling in my mind.*"
            }
        }
    },
    "day2_night_message_yuna_reply_low": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 태도가 너무나 차갑고 기괴하다. 그녀의 세계에 발을 들이는 것이 정말 옳은 선택인지, 한기가 느껴진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna's attitude is so cold and unsettling. A chill runs through me, and I wonder if stepping into her world was really the right choice.*"
            }
        }
    },
    "day2_night_message_dain": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_message_dain_after",
                "condition": "day2_met_dain_after"
            },
            {
                "next": "day2_night_message_dain_lunch",
                "condition": "day2_met_dain_lunch"
            },
            {
                "next": "day2_night_message_dain_generic"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이에게 어떤 메시지를 보낼까?*"
            },
            "en": {
                "name": "Me",
                "text": "*What should I text Dain?*"
            }
        }
    },
    "day2_night_message_dain_after": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_message_dain_bet",
                "condition": "day2_dain_bet"
            },
            {
                "next": "day2_night_message_dain_practice"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*방과 후 연습 때 일이 생각난다. 어떤 메시지를 보낼까?*"
            },
            "en": {
                "name": "Me",
                "text": "*I'm reminded of what happened during after-school practice. What should I text her?*"
            }
        }
    },
    "day2_night_message_dain_bet": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_dain",
        "next": "day2_night_message_dain_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이에게 메시지를 보냈다. '오늘 연습 수고했어! 내일 떡볶이 내기 잊지 마.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent Dain a message. 'Great job at practice today! Don't forget our tteokbokki bet tomorrow.'*"
            }
        }
    },
    "day2_night_message_dain_practice": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_dain",
        "next": "day2_night_message_dain_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이에게 메시지를 보냈다. '오늘 연습 수고했어! 덕분에 즐거웠어. 내일 봐!'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent Dain a message. 'Great job at practice today! I had a blast thanks to you. See you tomorrow!'*"
            }
        }
    },
    "day2_night_message_dain_lunch": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_dain",
        "next": "day2_night_message_dain_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이에게 메시지를 보냈다. '오늘 매점에서 본 거 재밌었어! 내일 떡볶이 먹으러 가자.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent Dain a message. 'Running into you at the snack bar today was fun! Let's go grab tteokbokki tomorrow.'*"
            }
        }
    },
    "day2_night_message_dain_generic": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_dain",
        "next": "day2_night_message_dain_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이에게 메시지를 보냈다. '다인아, 오늘 하루 수고했어! 내일 보자.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent Dain a message. 'Hey Dain, great job today! See you tomorrow.'*"
            }
        }
    },
    "day2_night_message_dain_reply": {
        "type": "free_talk",
        "maxTurns": 10,
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "affinityChar": "Dain",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_night_message_dain_reply_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_night_message_dain_reply_normal"
            },
            {
                "minAffinity": -100,
                "next": "day2_night_message_dain_reply_low"
            }
        ],
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*활기찬 답장.* '당연하지! 내가 이길 거니까 지갑 준비해둬! 하하, 잘 자, {name}!'",
                "context": "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 다인이는 주인공의 메시지에 활기차게 답장을 보낸 상태입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
                "personality": "털털하고 시원시원한 성격의 배구부 에이스. 주인공과 함께 있는 시간을 즐거워하며 장난스럽고 활기차게 대화함."
            },
            "en": {
                "name": "Dain",
                "text": "*An energetic reply.* 'Of course! I'm gonna win, so have your wallet ready! Haha, good night, {name}!'",
                "context": "It's nighttime, and they are chatting via smartphone messages from their respective homes. Dain has sent an energetic reply to the protagonist's message. Please continue the conversation until it naturally wraps up. Once the conversation concludes, the protagonist will drift off to sleep looking forward to tomorrow. Only on the final turn, say goodnight or suggest seeing each other at school tomorrow to end the conversation naturally.",
                "personality": "An easygoing and refreshingly straightforward volleyball team ace. She enjoys spending time with the protagonist and converses in a playful, energetic manner."
            }
        }
    },
    "day2_night_message_dain_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이의 활기찬 에너지 덕분에 나까지 기운이 난다. '지갑 준비해둬'라며 장난치는 모습이 눈앞에 선하다. 내일 떡볶이 내기는 그녀를 위해서라도 꼭 져줘야 할까?*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain's vibrant energy lifts my spirits too. I can practically see her grinning as she teases 'have your wallet ready.' Should I maybe lose the tteokbokki bet on purpose just for her tomorrow?*"
            }
        }
    },
    "day2_night_message_dain_reply_normal": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이와 즐겁게 대화를 마쳤다. 내일 떡볶이 내기에서 지지 않도록 마음의 준비를 해야겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I had a fun chat with Dain. I should mentally prepare so I don't lose the tteokbokki bet tomorrow.*"
            }
        }
    },
    "day2_night_message_dain_reply_low": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_sad.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이의 반응이 평소보다 무미건조하다. 내가 보낸 메시지가 귀찮았던 건 아닐지, 핸드폰을 든 손이 어색해진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain's response is more lifeless than usual. I wonder if my message annoyed her. The hand holding my phone feels awkward.*"
            }
        }
    },
    "day2_night_message_nurse": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_message_nurse_rest",
                "condition": "day2_met_nurse_after"
            },
            {
                "next": "day2_night_message_nurse_rest",
                "condition": "woke_up_in_nurse_room"
            },
            {
                "next": "day2_night_message_nurse_generic"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님께 어떤 메시지를 보낼까?*"
            },
            "en": {
                "name": "Me",
                "text": "*What should I text the School Nurse?*"
            }
        }
    },
    "day2_night_message_nurse_rest": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_nurse",
        "next": "day2_night_message_nurse_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님께 메시지를 보냈다. '선생님, 오늘 감사했어요. 덕분에 잘 쉬었어요.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent the School Nurse a message. 'Thank you for today, ma'am. I got a good rest thanks to you.'*"
            }
        }
    },
    "day2_night_message_nurse_generic": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_nurse",
        "next": "day2_night_message_nurse_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님께 메시지를 보냈다. '선생님, 오늘 하루 수고하셨어요. 안녕히 주무세요.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent the School Nurse a message. 'Thank you for your hard work today, ma'am. Good night.'*"
            }
        }
    },
    "day2_night_message_nurse_reply": {
        "type": "free_talk",
        "maxTurns": 10,
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "affinityChar": "Nurse",
        "affinityBranches": [
            {
                "minAffinity": 40,
                "next": "day2_night_message_nurse_reply_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_night_message_nurse_reply_normal"
            },
            {
                "minAffinity": -100,
                "next": "day2_night_message_nurse_reply_low"
            }
        ],
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*잠시 후, 답장이 왔다.* '응, 읽었어. 무리하지 말고 푹 쉬어. 내일 봐, {name}.'",
                "context": "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 보건선생님은 주인공의 메시지에 답장을 보낸 상태입니다. 주인공과의 관계에 따라 답장의 톤이 달라집니다. 호감도가 높으면 장난스럽고 매혹적으로, 호감도가 낮으면 사무적이고 거리감 있게 대화하세요. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
                "personality": "나른하고 섹시하면서도 다정한 보건선생님. 주인공에게 묘한 매력을 느끼며 대담하게 유혹하는 대범한 성격."
            },
            "en": {
                "name": "School Nurse",
                "text": "*After a moment, a reply came.* 'Got it. Don't push yourself—get some rest. See you tomorrow, {name}.'",
                "context": "It's nighttime, and they are chatting via smartphone messages from their respective homes. The School Nurse has sent a reply to the protagonist's message. Her tone varies depending on her relationship with the protagonist—if affinity is high, she is playful and alluring; if affinity is low, she is professional and distant. Please continue the conversation until it naturally wraps up. Once the conversation concludes, the protagonist will drift off to sleep looking forward to tomorrow. Only on the final turn, say goodnight or suggest seeing each other at school tomorrow to end the conversation naturally.",
                "personality": "A languid, alluring, yet warmhearted school nurse. She feels a mysterious attraction to the protagonist and has a bold, daringly flirtatious personality."
            }
        }
    },
    "day2_night_message_nurse_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 매혹적인 말투가 귓가에 맴도는 것 같다. 화면 너머로 그녀의 미소가 보이는 듯해 심장이 떨린다. 내일은 무슨 일이 있어도 보건실에 들러야겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Her alluring tone seems to linger in my ears. I can almost see her smile through the screen, and my heart trembles. No matter what happens tomorrow, I have to stop by the nurse's office.*"
            }
        }
    },
    "day2_night_message_nurse_reply_normal": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님과 무사히 연락을 마쳤다. 내일 학교에서 뵈면 반갑게 인사드려야겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I finished texting the School Nurse without any issues. I should greet her warmly if I see her at school tomorrow.*"
            }
        }
    },
    "day2_night_message_nurse_reply_low": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 답장이 너무나 사무적이다. 단순히 학생 중 한 명으로만 대하시는 것 같아 씁쓸한 기분이 든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Her reply is painfully matter-of-fact. It feels like she's treating me as just another student, and a bitter feeling sinks in.*"
            }
        }
    },
    "day2_night_message_teacher": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_teacher",
        "next": "day2_night_message_teacher_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*담임선생님께 메시지를 보냈다. '선생님, 오늘 하루 수고하셨습니다. 안녕히 주무세요.'*"
            },
            "en": {
                "name": "Me",
                "text": "*I sent the Homeroom Teacher a message. 'Thank you for your hard work today, ma'am. Good night.'*"
            }
        }
    },
    "day2_night_message_teacher_reply": {
        "type": "free_talk",
        "maxTurns": 10,
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "affinityChar": "Teacher",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_night_message_teacher_reply_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_night_message_teacher_reply_normal"
            },
            {
                "minAffinity": -100,
                "next": "day2_night_message_teacher_reply_low"
            }
        ],
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*조금 늦게 도착한 답장.* '어머, {name}. 이 시간에 메시지라니 조금 놀랐네. 그래도 걱정해줘서 고마워. 너도 푹 자고 내일 지각하지 마렴.'",
                "context": "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 담임선생님은 주인공의 메시지에 조금 당황하면서도 고마워하며 답장을 보낸 상태입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
                "personality": "공과 사가 뚜렷하지만 주인공에게는 은근히 약한 모습을 보이는 담임선생님. 따뜻하고 세심하게 챙기면서도 선을 지키려 함."
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*A slightly delayed reply.* 'Oh my, {name}. A message at this hour — I'm a little surprised. But thank you for thinking of me. You get a good night's sleep too, and don't be late tomorrow.'",
                "context": "It's nighttime, and they are chatting via smartphone messages from their respective homes. The Homeroom Teacher was a bit flustered but grateful for the protagonist's message, and has sent a reply. Please continue the conversation until it naturally wraps up. Once the conversation concludes, the protagonist will drift off to sleep looking forward to tomorrow. Only on the final turn, say goodnight or suggest seeing each other at school tomorrow to end the conversation naturally.",
                "personality": "A homeroom teacher who keeps a clear line between professional and personal, yet has a soft spot for the protagonist. She cares warmly and attentively while trying to maintain boundaries."
            }
        }
    },
    "day2_night_message_teacher_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 다정한 답장에 마음이 따뜻해진다. 학생으로서가 아니라, 조금은 한 명의 인격체로 존중받는 기분이 들어 내일 학교 가는 길이 기다려진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The warmth in her reply makes my heart feel full. It's not just being treated as a student — I feel a little respected as a person, and it makes me look forward to going to school tomorrow.*"
            }
        }
    },
    "day2_night_message_teacher_reply_normal": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님과 무사히 연락을 마쳤다. 내일은 지각하지 않도록 주의해야겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I finished chatting with the Homeroom Teacher without any problems. I'd better make sure I'm not late tomorrow.*"
            }
        }
    },
    "day2_night_message_teacher_reply_low": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 답장이 짧고 엄격하다. 사적인 시간에 연락한 것이 큰 실례였던 것 같아 후회가 밀려온다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Her reply is short and strict. The regret of texting her during her personal time washes over me.*"
            }
        }
    },
    "day2_night_goodnight_start": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_goodnight_stars",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*스마트폰을 내려놓고 창가로 다가갔다. 잠들기 전에 잠깐, 이 밤을 느껴보고 싶었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I set my phone down and walk over to the window. Before falling asleep, I just want to take in this night for a moment.*"
            }
        }
    },
    "day2_night_goodnight_stars": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_goodnight_sounds",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*창문을 열자 차가운 밤공기가 밀려든다. 하늘 위로 별들이 수놓아져 있다. 어제보다 더 선명하게 보이는 것 같아... 유나가 말했던 '세 번째 별'이 문득 떠오른다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Opening the window, cold night air rushes in. Stars are scattered across the sky above. They seem even brighter than yesterday... Yuna's mention of 'the third star' crosses my mind.*"
            }
        }
    },
    "day2_night_goodnight_sounds": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_goodnight_tomorrow",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*벌레 소리가 끊임없이 이어진다. 먼 곳에서 자동차 경적 소리가 한 번 울리고 다시 고요해진다. 이 동네의 밤은... 참 조용하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The chirping of insects continues endlessly. A car horn sounds once from somewhere far away, then silence returns. The nights in this neighborhood... are really quiet.*"
            }
        }
    },
    "day2_night_goodnight_tomorrow": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_goodnight_close",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*내일이면 벌써 전학 온 지 3일째. 서연이, 유나, 다인이, 선생님들... 그들과의 관계는 어떻게 변해갈까. 기대와 불안이 뒤섞인 묘한 설렘이 가슴을 채운다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Tomorrow will already be my third day since transferring. Seoyeon, Yuna, Dain, the teachers... How will my relationships with them change? A strange flutter of anticipation and anxiety fills my chest.*"
            }
        }
    },
    "day2_night_goodnight_close": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_dream_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*창문을 닫고 커튼을 쳤다. 이불 속으로 파고들어 눈을 감았다. 오늘도 고생 많았어, 나...*"
            },
            "en": {
                "name": "Me",
                "text": "*I close the window and draw the curtains. I burrow into my blanket and shut my eyes. Good job today, me...*"
            }
        }
    },
    "day2_night_dream_start": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_dream_vision",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*의식이 아스라하게 흐려진다... 꿈인지 현실인지 모를 공간에 서 있다. 학교 옥상인 것 같기도 하고, 어딘지 모를 정원 같기도 한 곳.*"
            },
            "en": {
                "name": "Me",
                "text": "*My consciousness fades into a haze... I'm standing in a space where I can't tell if it's a dream or reality. It looks like the school rooftop, or maybe some unknown garden.*"
            }
        }
    },
    "day2_night_dream_vision": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_dream_end",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "*누군가의 목소리가 바람에 실려 온다. '내일... 너에게 보여주고 싶은 것이 있어.' 목소리의 주인공은 알 수 없지만, 따뜻하면서도 간절한 울림이 귓가에 맴돈다.*"
            },
            "en": {
                "name": "???",
                "text": "*Someone's voice drifts in on the wind. 'Tomorrow... there's something I want to show you.' I can't tell who the voice belongs to, but its warm yet desperate resonance lingers in my ears.*"
            }
        }
    },
    "day2_night_dream_end": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_final_scene",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*손을 뻗었지만 아무것도 잡히지 않는다. 목소리는 서서히 멀어지고... 의식이 깊고 깊은 잠 속으로 가라앉는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I reach out my hand, but nothing is there. The voice slowly fades away... and my consciousness sinks into a deep, deep sleep.*"
            }
        }
    },
    "day2_final_scene": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "fade": true,
        "changeDay": 3,
        "next": "day3_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어둠 속에서 희미한 빛이 번진다. 내일은 또 어떤 진실이 나를 기다리고 있을까... 무거운 눈꺼풀을 닫으며 깊은 잠에 빠져든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A faint light bleeds through the darkness. What truths await me tomorrow... I close my heavy eyelids and drift into a deep slumber.*"
            }
        }
    }
});
