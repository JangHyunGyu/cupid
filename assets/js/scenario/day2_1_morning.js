/**
 * ============================================================================
 * CUPID - day2_1_morning (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day2_1_morning.js + en_day2_1_morning.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[2]) SCENARIO[2] = {};

Object.assign(SCENARIO[2], {
    "day2_start": {
        "background": "assets/images/background/room_my.png",
        "bgm": "intro.mp3",
        "character": null,
        "next": "day2_start_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 뜨자마자 어제 만난 얼굴들이 스쳐 지나간다. 전학 이틀째의 아침, 설렘 때문인지 알람이 울리기도 전에 잠에서 깨버렸다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The moment I open my eyes, the faces I met yesterday flash through my mind. The morning of my second day at the new school — I woke up before the alarm, probably because of the excitement.*"
            }
        }
    },
    "day2_start_2": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_morning_phone",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어제의 일들이 마치 꿈처럼 달콤하게 느껴지지만... 책상 위에 놓인 교복이 이곳이 현실임을 말해준다. 오늘도 좋은 일이 생길 것 같아.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yesterday feels as sweet as a dream... but the school uniform on my desk reminds me this is reality. I have a feeling something good will happen today too.*"
            }
        }
    },
    "day2_morning_phone": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_morning_phone_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*침대 옆 스마트폰을 집어 든다. 혹시 어젯밤 사이에 누가 메시지를 보내지 않았을까... 화면을 확인해본다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I pick up the smartphone beside my bed. Maybe someone sent me a message overnight... I check the screen.*"
            }
        }
    },
    "day2_morning_phone_2": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_morning_routine",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*특별한 메시지는 없다. 괜히 기대한 건가... 하지만 오늘 학교에서 직접 만나면 되니까. 기대감을 안고 침대에서 일어난다.*"
            },
            "en": {
                "name": "Me",
                "text": "*No messages. Was I hoping for nothing...? But I'll see everyone at school today anyway. I get out of bed, filled with anticipation.*"
            }
        }
    },
    "day2_morning_routine": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_morning_routine_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*세수를 하고 거울 앞에 선다. 어제보다 조금은 나아진 얼굴인 것 같다. 교복으로 갈아입고 머리를 정돈한다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I wash my face and stand in front of the mirror. I think I look a bit better than yesterday. I change into my uniform and fix my hair.*"
            }
        }
    },
    "day2_morning_routine_2": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_breakfast",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*거울 속 교복 차림의 내 모습이 이제는 조금 익숙하다. 넥타이 매듭을 한 번 고쳐 매고, 흐트러진 옷깃을 바로잡는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*My reflection in the uniform looks a little more familiar now. I retie my necktie and straighten my collar.*"
            }
        }
    },
    "day2_breakfast": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_breakfast_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*부엌에 내려오니 식탁 위에 밥과 계란후라이가 놓여 있다. 엄마는 벌써 출근한 모양이다. 혼자 먹는 아침이지만, 왠지 오늘은 외롭지 않다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I come down to the kitchen and find rice and a fried egg on the table. Mom must have already left for work. Eating alone, but somehow I don't feel lonely today.*"
            }
        }
    },
    "day2_breakfast_2": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_start_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*후다닥 아침을 해치우고 가방을 챙긴다. 시계를 보니 여유 있는 시간이다. 느긋하게 등교할 수 있겠어.*"
            },
            "en": {
                "name": "Me",
                "text": "*I scarf down breakfast and grab my bag. Checking the clock, I have plenty of time. I can take a leisurely walk to school.*"
            }
        }
    },
    "day2_start_3": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_road_to_school",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*자, 가보자. 오늘은 또 어떤 떨림이 나를 기다리고 있을까?*"
            },
            "en": {
                "name": "Me",
                "text": "*Alright, let's go. I wonder what kind of excitement awaits me today?*"
            }
        }
    },
    "day2_road_to_school": {
        "background": "assets/images/background/street.png",
        "next": "day2_road_to_school_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집을 나서자 아침 공기가 상쾌하게 폐를 채운다. 어제보다 부드러운 바람이 불어온다. 봄 냄새가 난다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Stepping outside, the fresh morning air fills my lungs. A softer breeze than yesterday blows by. It smells like spring.*"
            }
        }
    },
    "day2_road_to_school_2": {
        "background": "assets/images/background/street.png",
        "next": "day2_road_to_school_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*같은 교복을 입은 학생들이 삼삼오오 짝을 지어 학교 쪽으로 걸어간다. 어제는 낯설기만 하던 풍경인데, 오늘은 어딘가 반갑게 느껴진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Students in the same uniform walk toward school in small groups. Yesterday it all felt so unfamiliar, but today it somehow feels welcoming.*"
            }
        }
    },
    "day2_road_to_school_3": {
        "background": "assets/images/background/street.png",
        "next": "day2_school_gate",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*길 건너편에서 우리 학교 학생 몇 명이 내 쪽을 보며 수군거린다. '아, 전학생이다!' 하는 소리가 바람에 실려 들려온다. 아직 학교의 핫이슈인 모양이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Across the street, a few students from our school glance my way and whisper. I can hear 'Oh, it's the transfer student!' carried by the wind. Looks like I'm still the hot topic.*"
            }
        }
    },
    "day2_school_gate": {
        "background": "assets/images/background/school.png",
        "bgm": "daily2.mp3",
        "next": "day2_school_gate_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교문 앞에 도착하자 어제보다 훨씬 다정하게 느껴지는 풍경이 나를 반긴다. 왠지 모르게 발걸음이 가볍다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Arriving at the school gate, the scenery greets me far more warmly than yesterday. My steps feel light for some reason.*"
            }
        }
    },
    "day2_school_gate_2": {
        "background": "assets/images/background/school.png",
        "choices": [
            {
                "next": "day2_meet_someone"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학교 정문 앞에서 익숙한 얼굴이 눈에 띈다.*",
                "choices": [
                    "주위를 둘러본다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*As I'm about to pass through the gate, someone taps me on the shoulder.*",
                "choices": [
                    "Turn around."
                ]
            }
        }
    },
    "day2_meet_someone": {
        "background": "assets/images/background/school.png",
        "branches": [
            {
                "next": "day2_meet_yuna",
                "character": "Yuna",
                "condition": "met_yuna"
            },
            {
                "next": "day2_meet_nurse",
                "character": "Nurse",
                "condition": "met_nurse"
            },
            {
                "next": "day2_meet_dain",
                "character": "Dain",
                "condition": "met_dain"
            },
            {
                "next": "day2_meet_seoyeon",
                "character": "Seoyeon",
                "condition": "met_seoyeon"
            },
            {
                "next": "day2_meet_teacher"
            }
        ],
        "selectByHighestAffinity": true,
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*주위를 둘러보자 그곳에는...*"
            },
            "en": {
                "name": "Me",
                "text": "*I turn around and there stands...*"
            }
        }
    },
    "day2_meet_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "branches": [
            {
                "next": "day2_yuna_talk_msg",
                "condition": "sent_msg_day1_yuna"
            },
            {
                "next": "day2_yuna_morning_talk"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교문 옆 커다란 느티나무 아래, 유나가 무심한 표정으로 서 있는 것이 보인다. 그녀는 책을 덮고 나를 가만히 바라본다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Under the large zelkova tree beside the school gate, I spot Yuna standing with an indifferent expression. She closes her book and gazes at me quietly.*"
            }
        }
    },
    "day2_yuna_talk_msg": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "day2_classroom_from_yuna",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...안녕. 어젯밤 메시지... 고마웠어. 덕분에 조금은 따뜻한 밤이었어. 이따가... 쪽지 확인해봐.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Hi. Thanks for the message last night. It made the night a little warmer. Later... check the note on your desk.\""
            }
        }
    },
    "day2_yuna_morning_talk": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day2_classroom_from_yuna",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...안녕. 오늘도 그 '빛'은 여전하네. 다행이야. 이따가... 쪽지 확인해봐.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Hi. That 'light' of yours is still the same today. Good. Later... check the note on your desk.\""
            }
        }
    },
    "day2_meet_nurse": {
        "affinityChar": "Nurse",
        "affinityBranches": [
            {
                "minAffinity": 20,
                "next": "day2_meet_nurse_high"
            },
            {
                "minAffinity": -5,
                "next": "day2_meet_nurse_standard"
            },
            {
                "minAffinity": -100,
                "next": "day2_meet_nurse_low"
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
    "day2_meet_nurse_standard": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_nurse_talk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, {name}! 좋은 아침이야. 오늘따라 기운이 넘쳐 보이네?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh my, {name}! Good morning. You look extra energetic today, don't you?\""
            }
        }
    },
    "day2_meet_nurse_high": {
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day2_nurse_talk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 나를 보자마자 다가와 옷매무새를 다듬어준다.* \"우리 전학생, 밤새 무슨 꿈을 꿨길래 이렇게 반짝거릴까? 선생님은 네 생각 하느라 조금 늦잠 잤는데 말이야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*She walks up to me and straightens my clothes.* \"My dear transfer student, what did you dream about to be glowing like this? I barely got any sleep because I was up thinking about you.\""
            }
        }
    },
    "day2_meet_nurse_low": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_classroom",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 나를 힐끗 보더니 무심하게 시선을 돌린다.* \"어머, 전학생... 안색이 안 좋아 보이네. 특별히 볼일 없으면 교실로 가서 쉬는 게 좋겠어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*She sighs and turns her head as soon as she sees me.* \"Oh, transfer student... It's hard enough seeing your face this early in the morning. If you don't have any business, please head to class.\""
            }
        }
    },
    "day2_nurse_talk": {
        "character": "assets/images/characters/nurse_normal.png",
        "branches": [
            {
                "next": "day2_nurse_talk_msg",
                "condition": "sent_msg_day1_nurse"
            },
            {
                "next": "day2_nurse_talk_has_number",
                "condition": "has_number_nurse"
            },
            {
                "next": "day2_nurse_talk_no_number"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 나에게 다가와 살짝 윙크를 한다.*"
            },
            "en": {
                "name": "School Nurse",
                "text": "*She walks up to me and gives a little wink.*"
            }
        }
    },
    "day2_nurse_talk_msg": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_classroom_from_nurse",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어젯밤에 메시지 보내준 거, 정말 귀엽더라. 덕분에 선생님도 기분 좋게 잠들었어. 오늘도 아프면 언제든 보건실로 오렴.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"That message you sent last night was really cute. Thanks to you, I fell asleep in a good mood. If you're not feeling well today, come visit the nurse's office anytime.\""
            }
        }
    },
    "day2_nurse_talk_has_number": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_classroom_from_nurse",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어젯밤에 내 생각 하느라 잠 못 이룬 건 아니지? 후훗, 농담이야. 오늘도 아프면 언제든 보건실로 오렴.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"You didn't lose sleep thinking about me last night, did you? Hehe, just kidding. If you're not feeling well today, come visit the nurse's office anytime.\""
            }
        }
    },
    "day2_nurse_talk_no_number": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_classroom_from_nurse",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"전학 이틀째인데 벌써 학교에 익숙해진 모양이네. 오늘도 무리하지 말고, 힘들면 보건실로 놀러 오렴.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"It's only your second day, but you already look right at home. Don't push yourself too hard, and come hang out at the nurse's office if you need a break.\""
            }
        }
    },
    "day2_meet_seoyeon": {
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_meet_seoyeon_high"
            },
            {
                "minAffinity": -5,
                "next": "day2_meet_seoyeon_standard"
            },
            {
                "minAffinity": -100,
                "next": "day2_meet_seoyeon_low"
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
    "day2_meet_seoyeon_standard": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day2_seoyeon_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"안녕, {name}! 잘 잤니? 오늘도 일찍 왔구나!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Hi, {name}! Did you sleep well? You're here early again today!\""
            }
        }
    },
    "day2_meet_seoyeon_high": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day2_seoyeon_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 교문 앞에서 서성이다 나를 발견하곤, 안도한 듯 환하게 웃으며 다가온다.* \"{name}! 일찍 왔네? 사실... 네가 오늘도 무사히 등교할지 은근히 신경 쓰였거든.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon was lingering by the school gate, and the moment she spots me, she beams and runs over.* \"{name}! I was waiting for you! I couldn't sleep a wink because I was wondering if you slept well last night!\""
            }
        }
    },
    "day2_meet_seoyeon_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "day2_classroom",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 나를 발견하자마자 표정을 굳히며 고개를 돌린다.* \"...아, 왔어? 지각은 안 해서 다행이네. 난 먼저 갈게.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon's expression hardens as soon as she spots me, and she turns her head away.* \"...Oh, you're here? At least you're not late. Well, take care.\""
            }
        }
    },
    "day2_seoyeon_talk": {
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            {
                "next": "day2_seoyeon_talk_msg",
                "condition": "sent_msg_day1_seyoun"
            },
            {
                "next": "day2_seoyeon_talk_has_number",
                "condition": "has_number_seyoun"
            },
            {
                "next": "day2_seoyeon_talk_no_number"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이는 나와 눈을 맞추며 살짝 미소 짓는다.*"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon meets my eyes and smiles softly.*"
            }
        }
    },
    "day2_seoyeon_talk_msg": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day2_classroom_from_seoyeon",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"어제 메시지 정말 고마웠어! 덕분에 푹 잘 수 있었던 것 같아. 우리 오늘도 힘내자!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Thank you so much for the message yesterday! I think I slept well because of it. Let's do our best today too!\""
            }
        }
    },
    "day2_seoyeon_talk_has_number": {
        "character": "assets/images/characters/seyoun_shy.png",
        "choices": [
            {
                "next": "day2_seoyeon_happy",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_seoyeon_normal",
                "stats": {
                    "Seoyeon": {
                        "affinity": 1
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"어제 잘 들어갔어? 연락처 교환하고 나서 메시지 보낼까 말까 수백 번은 고민했는데... 너무 방해될까 봐 꾹 참았어.\"",
                "choices": [
                    "나도 서연이 메시지 엄청 기다렸는데! 지금이라도 보내줘!",
                    "아, 그랬구나. 사실 나도 피곤해서 눕자마자 잠들었어."
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Did you get home okay yesterday? After we exchanged numbers, I must have debated a hundred times whether to text you... but I held back because I didn't want to bother you.\"",
                "choices": [
                    "I was waiting for your message too! Go ahead and send one now.",
                    "Oh, I see. Honestly, I was so tired I fell asleep the moment I lay down."
                ]
            }
        }
    },
    "day2_seoyeon_talk_no_number": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day2_classroom_from_seoyeon",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"어제 잘 들어갔어? 전학 첫날이라 걱정 많이 했는데, 오늘 보니까 안심이 되네. 오늘도 힘내자!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Did you get home okay yesterday? I was really worried since it was your first day, but seeing you today puts me at ease. Let's do our best today too!\""
            }
        }
    },
    "day2_seoyeon_happy": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day2_classroom_from_seoyeon",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"정말? 그럼 오늘부터는 사소한 거라도 다 공유하기다? 자, 같이 교실로 가자!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Really? Then starting today, we share everything, even the little things, deal? Come on, let's head to class together!\""
            }
        }
    },
    "day2_seoyeon_normal": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day2_classroom_from_seoyeon",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"그렇지? 전학 첫날이라 많이 피곤했을 거야. 자, 오늘도 힘내서 학교생활 해보자!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Right? Your first day at a new school must have been exhausting. Come on, let's have another great day!\""
            }
        }
    },
    "day2_meet_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day2_dain_talk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"어어, {name}! 좋은 아침! 오늘따라 일찍 왔네?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey, {name}! Good morning! You're here early today!\""
            }
        }
    },
    "day2_dain_talk": {
        "character": "assets/images/characters/dain_laugh.png",
        "branches": [
            {
                "next": "day2_dain_talk_msg",
                "condition": "sent_msg_day1_dain"
            },
            {
                "next": "day2_dain_talk_dated",
                "condition": "dated_dain_day1"
            },
            {
                "next": "day2_dain_talk_not_dated"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*다인이는 활기차게 내 어깨를 툭 친다.*"
            },
            "en": {
                "name": "Dain",
                "text": "*Dain cheerfully bumps my shoulder.*"
            }
        }
    },
    "day2_dain_talk_msg": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_classroom_from_dain",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"어제 메시지 잘 받았어! 너 은근히 다정하더라? 덕분에 기분 좋게 잤어. 오늘도 활기차게 보내자구!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Got your message yesterday! You're surprisingly sweet, you know that? Thanks to you, I slept great. Let's make today awesome too!\""
            }
        }
    },
    "day2_dain_talk_dated": {
        "character": "assets/images/characters/dain_laugh.png",
        "choices": [
            {
                "next": "day2_dain_happy",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_dain_normal",
                "stats": {
                    "Dain": {
                        "affinity": 1
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"어제 먹은 떡볶이 덕분에 오늘 컨디션 최고야! 너도 그렇지?\"",
                "choices": [
                    "응! 나도 다인이 덕분에 잘 잤어.",
                    "난 좀 피곤한데... 다인이는 체력이 정말 좋구나."
                ]
            },
            "en": {
                "name": "Dain",
                "text": "\"Thanks to the tteokbokki yesterday, I'm in top shape today! Same for you, right?\"",
                "choices": [
                    "Yeah! I slept well thanks to you, Dain.",
                    "I'm a bit tired actually... Dain, you really have amazing stamina."
                ]
            }
        }
    },
    "day2_dain_talk_not_dated": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_classroom_from_dain",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"어제 잘 들어갔어? 전학 첫날인데 학교 구경은 좀 했나 모르겠네! 오늘도 활기차게 보내자구!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Did you get home okay yesterday? It was your first day, so I hope you got to explore the school a bit! Let's make today awesome too!\""
            }
        }
    },
    "day2_dain_happy": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_classroom_from_dain",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"하하! 역시 내 에너지가 좀 넘치긴 하지? 좋아, 오늘 점심시간에도 체육관으로 와! 기다릴게!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Haha! I guess my energy is a bit over the top, huh? Alright, come to the gym at lunch today too! I'll be waiting!\""
            }
        }
    },
    "day2_dain_normal": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day2_classroom_from_dain",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"에이~ 엄살은! 학교생활 적응하려면 체력이 국력이라구! 자, 어서 교실로 가자!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh come on, don't be a wimp! Stamina is everything when you're adjusting to school life! Now let's get to class!\""
            }
        }
    },
    "day2_meet_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_teacher_free_talk",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"어라, {name} 아니니? 전학 이틀째인데 벌써 학교에 적응한 모양이구나. 일찍 오는 모습이 보기 좋다.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Oh, isn't that {name}? Only your second day and you're already fitting right in. It's nice to see you here early.\""
            }
        }
    },
    "day2_teacher_free_talk": {
        "type": "free_talk",
        "character": "assets/images/characters/teacher_normal.png",
        "affinityChar": "Teacher",
        "affinityBranches": [
            {
                "minAffinity": 20,
                "next": "day2_teacher_contact_ask_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_teacher_contact_ask"
            },
            {
                "minAffinity": -100,
                "next": "day2_teacher_contact_ask_low"
            }
        ],
        "next": "day2_teacher_contact_ask",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"수업 시작 전까지 시간이 좀 남았네. 나한테 궁금한 거라도 있니?\"",
                "context": "교문 앞에서 담임선생님과 마주쳐 교실로 함께 걸어가는 상황입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 선생님이 비상연락망을 위해 주인공의 연락처를 물어보는 상황으로 이어집니다. 대화의 마지막 턴에만 연락처를 물어볼 타이밍을 잡거나, 공적인 용무가 있다는 뉘앙스를 풍겨주세요.",
                "personality": "공과 사가 뚜렷하지만 주인공에게는 은근히 약한 모습을 보이는 담임선생님."
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"We still have some time before class starts. Is there anything you'd like to ask me?\"",
                "context": "You've run into the homeroom teacher at the school gate and are walking to the classroom together. Keep the conversation going until it naturally wraps up. At the very end of the conversation, the teacher will ask for the protagonist's contact info for the emergency contact list. Only on the final turn should you hint at needing to ask about contact information or suggest there's some official business.",
                "personality": "A homeroom teacher who strictly separates work from personal matters, but has a secret soft spot for the protagonist."
            }
        }
    },
    "day2_teacher_contact_ask_high": {
        "character": "assets/images/characters/teacher_smile.png",
        "choices": [
            {
                "next": "day2_teacher_contact_success_high",
                "setFlags": [
                    "has_number_teacher",
                    "has_any_contact"
                ]
            },
            {
                "next": "day2_classroom_from_teacher"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님과 즐겁게 대화를 나누며 교실로 향했다. 선생님은 아침부터 기분이 좋아 보인다며, 비상연락망 작성을 위해 내 연락처를 물어보셨다.*",
                "choices": [
                    "네, 여기 제 번호예요.",
                    "나중에 교무실 가서 알려드릴게요."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*I had a nice chat with the teacher on the way to class. She said I looked like I was in a great mood this morning and asked for my phone number for the emergency contact list.*",
                "choices": [
                    "Sure, here's my number.",
                    "I'll stop by the teacher's office later to give it to you."
                ]
            }
        }
    },
    "day2_teacher_contact_ask_low": {
        "character": "assets/images/characters/teacher_angry.png",
        "choices": [
            {
                "next": "day2_teacher_contact_success_low",
                "setFlags": [
                    "has_number_teacher",
                    "has_any_contact"
                ]
            },
            {
                "next": "day2_classroom_from_teacher"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 표정이 굳어졌다. 아침부터 내가 너무 무례하게 굴었나 보다. 선생님은 한숨을 내쉬며 비상연락망 작성을 위해 내 연락처를 알려달라고 하셨다.*",
                "choices": [
                    "네, 여기 제 번호예요.",
                    "나중에 교무실 가서 알려드릴게요."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The teacher's expression hardened. I must have been too rude this early in the morning. She sighed and asked me to provide my phone number for the emergency contact list.*",
                "choices": [
                    "Sure, here's my number.",
                    "I'll stop by the teacher's office later to give it to you."
                ]
            }
        }
    },
    "day2_teacher_contact_ask": {
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            {
                "next": "day2_teacher_contact_success_normal",
                "setFlags": [
                    "has_number_teacher",
                    "has_any_contact"
                ]
            },
            {
                "next": "day2_classroom_from_teacher"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님과 이런저런 이야기를 나누며 교실로 걸어갔다. 선생님은 비상연락망 작성을 위해 내 연락처가 필요하다며 번호를 물어보셨다.*",
                "choices": [
                    "네, 여기 제 번호예요.",
                    "나중에 교무실 가서 알려드릴게요."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*I chatted with the teacher about various things on the walk to class. She said she needed my phone number for the emergency contact list.*",
                "choices": [
                    "Sure, here's my number.",
                    "I'll stop by the teacher's office later to give it to you."
                ]
            }
        }
    },
    "day2_teacher_contact_success_high": {
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 15
            }
        },
        "next": "day2_classroom_from_teacher",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"{name}, 번호 고마워! 후훗, 비상연락망 핑계로 물어보긴 했지만... 실은 나도 너랑 좀 더 친해지고 싶었거든. 학교생활 힘들면 언제든지 이 번호로 연락해?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"{name}, thanks for the number! Hehe, I used the emergency contact list as an excuse, but... truth is, I wanted to get closer to you too. If school life gets tough, don't hesitate to call me anytime, okay?\""
            }
        }
    },
    "day2_teacher_contact_success_low": {
        "character": "assets/images/characters/teacher_angry.png",
        "stats": {
            "Teacher": {
                "affinity": 2
            }
        },
        "next": "day2_classroom_from_teacher",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"...그래, 고맙다. 연락처는 공적인 용도로만 사용할 테니 걱정하지 마. 수업 늦지 않게 어서 들어가 봐.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Alright, thank you. I'll only use your contact info for official purposes, so don't worry. Now hurry up and get to class before you're late.\""
            }
        }
    },
    "day2_teacher_contact_success_normal": {
        "character": "assets/images/characters/teacher_normal.png",
        "stats": {
            "Teacher": {
                "affinity": 10
            }
        },
        "next": "day2_classroom_from_teacher",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"고마워. 그럼 무슨 일 있으면 연락할게. 자, 이제 교실로 가자.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Thank you. I'll reach out if anything comes up. Now, let's head to class.\""
            }
        }
    },
    "day2_classroom_from_teacher": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day2_classroom_from_teacher_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"자, 다 왔다. 오늘도 열심히 해보자.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Alright, we're here. Let's have another great day.\""
            }
        }
    },
    "day2_classroom_from_teacher_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_teacher",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님과 나란히 교실에 들어서자 아이들의 시선이 일제히 쏠린다. 선생님과 같이 온 게 꽤 눈에 띄었나 보다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Walking into the classroom alongside the teacher, all eyes turn to us. Walking in with the homeroom teacher definitely drew some attention.*"
            }
        }
    },
    "day2_classroom_greet_teacher": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_teacher_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "\"오, 전학생! 좋은 아침! 헐, 담임 선생님이랑 같이 왔어? 벌써 특별 대우 받는 거야?\""
            },
            "en": {
                "name": "Classmate",
                "text": "\"Hey, transfer student! Good morning! Whoa, you came with the homeroom teacher? Getting special treatment already?\""
            }
        }
    },
    "day2_classroom_greet_teacher_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_teacher",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*몇몇 아이들이 킥킥대며 장난스러운 눈빛을 보낸다. 다행히 악의는 없어 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A few students snicker with playful looks. At least there's no malice behind it.*"
            }
        }
    },
    "day2_classroom_settle_teacher": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_teacher_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "*옆자리 친구가 팔꿈치로 슬쩍 찌른다.* \"야, 너 담임 선생님이랑 무슨 사이야? 아침부터 같이 등교라니!\""
            },
            "en": {
                "name": "Classmate",
                "text": "*The student next to me nudges my elbow.* \"Dude, what's the deal with you and the homeroom teacher? Walking to school together first thing in the morning!\""
            }
        }
    },
    "day2_classroom_settle_teacher_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_teacher_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"아니야, 교문 앞에서 우연히 마주쳐서 같이 걸어왔을 뿐이야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"It's nothing, we just happened to run into each other at the school gate and walked in together.\""
            }
        }
    },
    "day2_classroom_settle_teacher_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*적당히 둘러대고 자리에 앉는다. 선생님과 함께 들어왔다는 게 좀 민망하면서도... 나쁘지 않은 기분이다. 가방을 풀고 교과서를 꺼내려는데... 뭔가 이상하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I brush it off and take my seat. Walking in with the teacher was a bit embarrassing, but... it didn't feel bad. I start unpacking my bag to get my textbooks out when... something seems off.*"
            }
        }
    },
    "day2_classroom_from_seoyeon": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day2_classroom_from_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"자, 다 왔다! 오늘도 좋은 하루 보내자, {name}!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Here we are! Let's have another great day, {name}!\""
            }
        }
    },
    "day2_classroom_from_seoyeon_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_seoyeon",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와 나란히 교실에 들어서자, 아이들의 시선이 일제히 우리를 향한다. 서연이가 자연스럽게 내 옆에 서 있으니 마치 오래된 친구처럼 보였을 거다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Walking into the classroom side by side with Seoyeon, all eyes turn to us immediately. With Seoyeon standing so naturally beside me, we probably look like old friends.*"
            }
        }
    },
    "day2_classroom_greet_from_seoyeon": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "\"오, 전학생! 좋은 아침! 서연이랑 같이 왔네? 완전 단짝이다!\""
            },
            "en": {
                "name": "Classmate",
                "text": "\"Hey, transfer student! Good morning! You came with Seoyeon? You two are totally besties already!\""
            }
        }
    },
    "day2_classroom_greet_from_seoyeon_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_seoyeon",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*아이들이 서연이와 나를 번갈아 보며 의미심장한 미소를 짓는다. 서연이는 아무렇지 않게 자기 자리로 향한다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The students glance between Seoyeon and me with knowing smiles. Seoyeon casually heads to her seat like it's no big deal.*"
            }
        }
    },
    "day2_classroom_settle_from_seoyeon": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "*앞자리 여학생이 돌아보며 속삭인다.* \"야, 서연이랑 벌써 같이 등교해? 너네 사귀는 거야?\""
            },
            "en": {
                "name": "Classmate",
                "text": "*The girl in the front row turns around and whispers,* \"Hey, you're already walking to school with Seoyeon? Are you two dating?\""
            }
        }
    },
    "day2_classroom_settle_from_seoyeon_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_seoyeon_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"아니야, 교문 앞에서 우연히 만나서 같이 온 거야. 서연이가 많이 챙겨줘서 감사할 뿐이야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"No, we just happened to meet at the school gate and walked in together. I'm just grateful that Seoyeon's been looking out for me.\""
            }
        }
    },
    "day2_classroom_settle_from_seoyeon_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*적당히 둘러대고 자리에 앉는다. 서연이가 자기 자리에서 살짝 손을 흔들어준다. 왠지 기분이 좋아지면서 가방을 풀고 교과서를 꺼내려는데... 뭔가 이상하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I brush it off and take my seat. Seoyeon gives me a little wave from her desk. It puts me in a good mood as I start unpacking my bag to get my textbooks out when... something seems off.*"
            }
        }
    },
    "day2_classroom_from_dain": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_classroom_from_dain_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"자! 교실 도착! 오늘도 파이팅이다, {name}!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"We're here! Let's crush it today, {name}!\""
            }
        }
    },
    "day2_classroom_from_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_dain",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 활기차게 교실 문을 열고 들어서자, 교실 안의 분위기가 한층 밝아진다. 다인이의 에너지는 정말 전염성이 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain bursts through the classroom door with her usual energy, and the whole room seems to brighten up. Her energy is truly contagious.*"
            }
        }
    },
    "day2_classroom_greet_from_dain": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_dain_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "\"오, 전학생! 좋은 아침! 다인이랑 같이 왔네? 벌써 절친 됐어?\""
            },
            "en": {
                "name": "Classmate",
                "text": "\"Hey, transfer student! Good morning! You came with Dain? Already best friends, huh?\""
            }
        }
    },
    "day2_classroom_greet_from_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_classroom_settle_from_dain",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"당연하지! 우리 {name}이(가) 이제 우리 편이야! 자, {name}! 나중에 점심시간에 봐!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Of course! {name}'s one of us now! Alright, {name}! See you at lunch!\""
            }
        }
    },
    "day2_classroom_settle_from_dain": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_dain_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "*앞자리 여학생이 돌아보며 킥킥거린다.* \"다인이한테 붙잡히면 끝이야~ 체력 딸리면 조심해!\""
            },
            "en": {
                "name": "Classmate",
                "text": "*The girl in the front row turns around with a giggle.* \"Once Dain gets a hold of you, there's no escape! Watch out if your stamina can't keep up!\""
            }
        }
    },
    "day2_classroom_settle_from_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_dain_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"아, 하하... 다인이 에너지를 따라가려면 체력 관리를 좀 해야 될 것 같아.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Oh, haha... I think I'll need to work on my fitness to keep up with Dain's energy.\""
            }
        }
    },
    "day2_classroom_settle_from_dain_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*적당히 둘러대고 자리에 앉는다. 다인이가 자기 자리에서 엄지를 치켜세워 보여준다. 에너지를 잔뜩 받은 기분으로 가방을 풀고 교과서를 꺼내려는데... 뭔가 이상하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I brush it off and take my seat. Dain gives me a thumbs up from her desk. Feeling energized, I start unpacking my bag to get my textbooks out when... something seems off.*"
            }
        }
    },
    "day2_classroom_from_nurse": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_from_nurse_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건 선생님과 헤어지고 교실로 향한다. 선생님의 향수 냄새가 아직 코끝에 맴도는 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I part ways with the school nurse and head toward the classroom. Her perfume still seems to linger at the tip of my nose.*"
            }
        }
    },
    "day2_classroom_from_nurse_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_nurse",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교실 문을 열자, 어제보다 훨씬 부드러운 공기가 나를 감싼다. 아이들의 시선에도 호의가 섞여 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Opening the classroom door, a much softer atmosphere than yesterday wraps around me. Even the students' gazes carry a hint of friendliness.*"
            }
        }
    },
    "day2_classroom_greet_from_nurse": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_nurse_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "\"오, 전학생! 좋은 아침! 어라, 방금 보건실 쪽에서 온 거야? 어디 아파?\""
            },
            "en": {
                "name": "Classmate",
                "text": "\"Hey, transfer student! Good morning! Wait, did you just come from the nurse's office? Are you feeling sick?\""
            }
        }
    },
    "day2_classroom_greet_from_nurse_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_nurse",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"아니, 아프진 않아. 그냥 보건 선생님을 잠깐 마주쳤을 뿐이야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"No, I'm fine. I just bumped into the school nurse on the way in.\""
            }
        }
    },
    "day2_classroom_settle_from_nurse": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_nurse_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "*앞자리 여학생이 돌아보며 말한다.* \"아까 보건 선생님이랑 이야기하는 거 봤는데, 꽤 친해 보이던데? 보건실 단골이야?\""
            },
            "en": {
                "name": "Classmate",
                "text": "*The girl in the front row turns around and says,* \"I saw you chatting with the school nurse earlier. You two looked pretty close. A regular visitor to the nurse's office?\""
            }
        }
    },
    "day2_classroom_settle_from_nurse_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_nurse_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"아니야, 선생님이 전학생이라고 잘 적응하고 있는지 확인해주신 거야. 괜히 걱정까지 해주시고...\""
            },
            "en": {
                "name": "Me",
                "text": "\"No, she was just checking on me since I'm the new transfer student. She even went out of her way to make sure I was doing okay...\""
            }
        }
    },
    "day2_classroom_settle_from_nurse_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*적당히 둘러대고 자리에 앉는다. 보건 선생님의 따뜻한 미소가 아직도 머릿속을 맴돈다. 가방을 풀고 교과서를 꺼내려는데... 뭔가 이상하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I brush it off and take my seat. The nurse's warm smile keeps lingering in my mind. I start unpacking my bag to get my textbooks out when... something seems off.*"
            }
        }
    },
    "day2_classroom_from_yuna": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_from_yuna_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나와 헤어지고 교문을 지나 교실로 향한다. 그녀가 남긴 말들이 머릿속을 맴돈다. '쪽지 확인해봐'... 대체 무슨 쪽지일까.*"
            },
            "en": {
                "name": "Me",
                "text": "*I part ways with Yuna, pass through the school gate, and head to the classroom. Her words keep echoing in my head. 'Check the note on your desk'... What note?*"
            }
        }
    },
    "day2_classroom_from_yuna_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_yuna",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교실 문을 열자 익숙한 소란 속으로 들어선다. 하지만 유나의 말이 신경 쓰여 온전히 집중할 수가 없다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Opening the classroom door, I step into the familiar bustle. But I can't fully focus with Yuna's words weighing on my mind.*"
            }
        }
    },
    "day2_classroom_greet_from_yuna": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_yuna_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "\"오, 전학생! 좋은 아침! 왠지 생각에 잠긴 표정인데, 무슨 고민 있어?\""
            },
            "en": {
                "name": "Classmate",
                "text": "\"Hey, transfer student! Good morning! You look like you've got something on your mind. Everything okay?\""
            }
        }
    },
    "day2_classroom_greet_from_yuna_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_yuna",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"아... 아니야, 아무것도 아니야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Oh... it's nothing, really.\""
            }
        }
    },
    "day2_classroom_settle_from_yuna": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_yuna_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "*앞자리 여학생이 돌아보며 말한다.* \"아까 교문 앞에서 누구랑 이야기하는 거 봤는데... 다른 반 애야? 좀 신비로워 보이던데.\""
            },
            "en": {
                "name": "Classmate",
                "text": "*The girl in the front row turns around and says,* \"I saw you talking to some girl at the gate earlier... Is she from another class? She looked kind of mysterious.\""
            }
        }
    },
    "day2_classroom_settle_from_yuna_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_yuna_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"아... 그냥 같은 학교 학생인데, 나도 아직 잘 모르겠어.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Oh... she's just another student here. I don't really know her well yet.\""
            }
        }
    },
    "day2_classroom_settle_from_yuna_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*적당히 둘러대고 자리에 앉는다. 유나가 말한 '쪽지'가 뭔지 계속 신경 쓰인다. 가방을 풀고 교과서를 꺼내려는데... 뭔가 이상하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I brush it off and take my seat. I can't stop thinking about the 'note' Yuna mentioned. I start unpacking my bag to get my textbooks out when... something seems off.*"
            }
        }
    },
    "day2_classroom": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교실 문을 열자, 어제보다 훨씬 부드러운 공기가 나를 감싼다. 아이들의 시선에도 호의가 섞여 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Opening the classroom door, a much softer atmosphere than yesterday wraps around me. Even the students' gazes carry a hint of friendliness.*"
            }
        }
    },
    "day2_classroom_greet": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "\"오, 전학생! 좋은 아침! 어제 잘 적응했어? 우리 반 분위기 괜찮지?\""
            },
            "en": {
                "name": "Classmate",
                "text": "\"Hey, transfer student! Good morning! Did you settle in okay yesterday? Our class is pretty chill, right?\""
            }
        }
    },
    "day2_classroom_greet_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_alone",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*몇몇 아이들이 가볍게 인사를 건네준다. 어제는 호기심 가득한 눈빛이었는데, 오늘은 편안한 미소가 섞여 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A few classmates greet me casually. Yesterday they looked at me with pure curiosity, but today their smiles are relaxed.*"
            }
        }
    },
    "day2_classroom_settle_alone": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_alone_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "*앞자리 여학생이 돌아보며 말한다.* \"전학 이틀째인데 벌써 적응한 거야? 대단하다!\""
            },
            "en": {
                "name": "Classmate",
                "text": "*The girl in the front row turns around and says,* \"Only your second day and you've already settled in? That's impressive!\""
            }
        }
    },
    "day2_classroom_settle_alone_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_alone_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"아, 하하... 다들 잘 해줘서 금방 적응했어.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Oh, haha... Everyone's been so nice, it was easy to adjust.\""
            }
        }
    },
    "day2_classroom_settle_alone_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*적당히 둘러대고 자리에 앉는다. 가방을 풀고 교과서를 꺼내려는데... 뭔가 이상하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I give a vague answer and sit down. Opening my bag to take out my textbooks... something feels off.*"
            }
        }
    },
    "day2_classroom_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "choices": [
            {
                "next": "day2_check_note"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*자리에 앉아 가방을 정리하려는데, 책상 구석에 놓인 작은 쪽지가 눈에 들어온다.*",
                "choices": [
                    "쪽지를 확인한다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*As I'm settling in at my desk, I notice a small note tucked in the corner.*",
                "choices": [
                    "Check the note."
                ]
            }
        }
    },
    "day2_check_note": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_content",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*조심스레 쪽지를 펼친다. 정갈하면서도 어딘가 차가운 글씨체가 눈에 띈다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I carefully unfold the note. The handwriting is neat yet somehow cold.*"
            }
        }
    },
    "day2_note_content": {
        "background": "assets/images/background/room_school.png",
        "next": "day2_note_reaction",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "\"'점심시간에 도서관 별관으로 와. 할 말이 있어.' - 유나\""
            },
            "en": {
                "name": "System",
                "text": "\"'Come to the courtyard behind the library annex at lunch. I have something to tell you.' - Yuna\""
            }
        }
    },
    "day2_note_reaction": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_speculation",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나...? 쪽지를 다시 한 번 읽어본다. '도서관 별관'이라... 학교 구석진 곳이잖아. 이런 방식으로 호출한다니, 뭔가 비밀스러운 느낌이 든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna...? I read the note again. 'The courtyard behind the library annex'... that's a secluded spot at school. Summoning me with a note like this — it feels secretive.*"
            }
        }
    },
    "day2_note_speculation": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_speculation_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*대체 무슨 말을 하려고 이런 쪽지를 남긴 걸까? 연락처라도 있다면 직접 물어볼 텐데... 쪽지라니, 어딘가 그녀답다는 생각이 든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*What could she possibly want to say that she'd leave a note like this? If I had her number, I could just ask her directly... but a note — that somehow feels very like her.*"
            }
        }
    },
    "day2_note_speculation_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_speculation_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*혹시 유나에 대해 아는 사람이 있을까? 주변을 슬쩍 둘러본다. 하지만 쪽지 내용을 함부로 말할 순 없을 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Is there anyone who might know about Yuna? I discreetly glance around. But I don't think I should mention the note to just anyone.*"
            }
        }
    },
    "day2_note_speculation_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_ask_around",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*쪽지를 조심스럽게 접어 주머니에 넣는다. 점심시간이 벌써부터 기다려진다... 아니, 긴장된다는 표현이 더 맞으려나.*"
            },
            "en": {
                "name": "Me",
                "text": "*I carefully fold the note and slip it into my pocket. I can't wait for lunch already... or maybe 'nervous' is more accurate.*"
            }
        }
    },
    "day2_note_ask_around": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            {
                "next": "day2_note_ask_around_met",
                "condition": "met_yuna"
            },
            {
                "next": "day2_note_ask_around_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*옆자리 친구에게 슬쩍 물어본다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I casually ask the person sitting next to me.*"
            }
        }
    },
    "day2_note_ask_around_met": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_ask_around_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"혹시 유나라는 애에 대해 뭐 좀 아는 거 있어? 다른 반인 것 같은데...\""
            },
            "en": {
                "name": "Me",
                "text": "\"Hey, do you know anything about someone named Yuna? I think she's in a different class...\""
            }
        }
    },
    "day2_note_ask_around_new": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_ask_around_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"혹시... 유나라는 애 알아?\""
            },
            "en": {
                "name": "Me",
                "text": "\"Hey... do you know anyone named Yuna?\""
            }
        }
    },
    "day2_note_ask_around_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_ask_around_3",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "\"유나? 음... 우리 반은 아닌데? 다른 반인가? 아니면 선배?\""
            },
            "en": {
                "name": "Classmate",
                "text": "\"Yuna? Hmm... she's not in our class. Maybe another class? Or an upperclassman?\""
            }
        }
    },
    "day2_note_ask_around_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_homeroom_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*역시 아는 사람이 없다. 유나라는 이름만으로는 정보가 부족하다. 점심시간에 직접 가보는 수밖에 없겠어.*"
            },
            "en": {
                "name": "Me",
                "text": "*As expected, nobody knows. Just the name 'Yuna' isn't enough to go on. I'll just have to go there myself at lunch.*"
            }
        }
    },
    "day2_homeroom_start": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_homeroom_rollcall",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"자, 다들 자리에 앉아라. 조회 시작한다.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Alright, everyone take your seats. Homeroom is starting.\""
            }
        }
    },
    "day2_homeroom_rollcall": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_homeroom_rollcall_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*선생님이 출석부를 펼치며 이름을 하나하나 부르기 시작한다.* \"...{name}? 전학생, 여기 있지?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*The teacher opens the attendance book and starts calling names one by one.* \"...{name}? Transfer student, you're here, right?\""
            }
        }
    },
    "day2_homeroom_rollcall_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_homeroom_rollcall_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"네, 있습니다.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Yes, I'm here.\""
            }
        }
    },
    "day2_homeroom_rollcall_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day2_homeroom_notice",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"좋아. 전학 이틀째인데, 어제보다 표정이 밝아졌구나. 잘 적응하고 있나 보다.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Good. It's only your second day, but you look brighter than yesterday. Seems like you're adjusting well.\""
            }
        }
    },
    "day2_homeroom_notice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_homeroom_notice_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"공지사항 하나 전달한다. 이번 주 금요일에 학교 축제 준비 회의가 있을 예정이니까, 관심 있는 학생들은 방과 후에 남아 줘.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"One announcement. There will be a school festival planning meeting this Friday, so anyone interested should stay after school.\""
            }
        }
    },
    "day2_homeroom_notice_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_homeroom_event",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학교 축제라... 전학 온 지 얼마 안 됐는데 축제까지 있다니. 이 학교 생활이 점점 더 기대된다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A school festival... I just transferred and there's already a festival coming up. I'm getting more and more excited about this school.*"
            }
        }
    },
    "day2_homeroom_event": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_homeroom_event_2",
        "_i18n": {
            "ko": {
                "name": "반 친구",
                "text": "\"선생님, 질문요! 축제 때 반 대항 장기자랑도 하나요?\""
            },
            "en": {
                "name": "Classmate",
                "text": "\"Teacher, question! Will there be a class talent show at the festival?\""
            }
        }
    },
    "day2_homeroom_event_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day2_homeroom_event_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"글쎄, 아직 결정된 건 없지만... 우리 반이 나가면 당연히 1등이겠지?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Well, nothing's decided yet, but... if our class enters, we'd obviously win first place, right?\""
            }
        }
    },
    "day2_homeroom_event_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day2_morning_class",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교실이 킥킥대는 웃음으로 가득 찬다. 선생님도 은근히 유머가 있으시다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The classroom fills with chuckles. The teacher actually has a pretty good sense of humor.*"
            }
        }
    },
    "day2_morning_class": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "branches": [
            {
                "next": "day2_morning_class_yuna_msg",
                "condition": "sent_msg_day1_yuna"
            },
            {
                "next": "day2_morning_class_yuna_met",
                "condition": "met_yuna"
            },
            {
                "next": "day2_morning_class_yuna_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*수업 시간 내내 유나의 쪽지가 머릿속을 떠나지 않는다. 대체 무슨 할 말이 있는 걸까?*"
            },
            "en": {
                "name": "Me",
                "text": "*Throughout the entire class, Yuna's note won't leave my mind. What on earth does she want to tell me?*"
            }
        }
    },
    "day2_morning_class_yuna_msg": {
        "next": "day2_morning_class_focus",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어젯밤 메시지를 주고받았던 유나... 번호도 있는데 왜 굳이 쪽지를 남긴 걸까? 그녀다운 방식이라는 생각에 피식 웃음이 난다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna, who I exchanged messages with last night... She has my number, so why leave a note? The thought that this is so very her makes me chuckle.*"
            }
        }
    },
    "day2_morning_class_yuna_met": {
        "next": "day2_morning_class_focus",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어제 만났던 유나... 그녀가 나에게 이런 쪽지를 남긴 걸까? 비밀이라니... 대체 무엇인지 궁금해진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna, who I met yesterday... Did she really leave this note for me? A secret... I can't help but wonder what it could be.*"
            }
        }
    },
    "day2_morning_class_yuna_new": {
        "next": "day2_morning_class_focus",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나...? 어제는 들어보지 못한 이름이다. 대체 누구길래 나에게 이런 쪽지를 남긴 걸까?*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna...? That's a name I didn't hear yesterday. Who is she, and why would she leave a note like this for me?*"
            }
        }
    },
    "day2_morning_class_focus": {
        "next": "day2_morning_class_quiz",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*칠판에 적히는 수학 공식이 눈에 들어오지 않는다. '도서관 별관 뒤뜰'이라는 단어만 머릿속을 맴돈다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The math formulas on the blackboard aren't registering at all. The words 'courtyard behind the library annex' just keep echoing in my head.*"
            }
        }
    },
    "day2_morning_class_quiz": {
        "character": null,
        "next": "day2_morning_class_quiz_2",
        "_i18n": {
            "ko": {
                "name": "수학선생님",
                "text": "\"자, 이 문제 풀어볼 사람? ...전학생, 한 번 해볼래?\""
            },
            "en": {
                "name": "Math Teacher",
                "text": "\"Alright, who wants to try this problem? ...Transfer student, how about you?\""
            }
        }
    },
    "day2_morning_class_quiz_2": {
        "choices": [
            {
                "next": "day2_quiz_try"
            },
            {
                "next": "day2_quiz_pass"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*아뿔싸, 딴생각에 빠져 있었다. 황급히 칠판을 바라보지만, 공식이 도무지 머리에 들어오지 않는다.*",
                "choices": [
                    "당당하게 나가서 도전해본다.",
                    "솔직하게 모르겠다고 한다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Oh no, I was completely zoned out. I hastily look at the blackboard, but the formulas won't register at all.*",
                "choices": [
                    "Boldly walk up and give it a shot.",
                    "Honestly say I don't know."
                ]
            }
        }
    },
    "day2_quiz_try": {
        "next": "day2_quiz_try_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*칠판 앞에 서서 공식을 더듬더듬 써나간다. 다행히 어제 예습했던 부분이라 어렴풋이 기억이 난다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Standing at the blackboard, I fumble through the formula. Luckily, it's something I previewed yesterday, so it vaguely comes back to me.*"
            }
        }
    },
    "day2_quiz_try_2": {
        "character": null,
        "next": "day2_quiz_result",
        "_i18n": {
            "ko": {
                "name": "수학선생님",
                "text": "\"오, 전학생 실력이 꽤 되는데? 맞았어. 잘 했어, 자리로 돌아가.\""
            },
            "en": {
                "name": "Math Teacher",
                "text": "\"Oh, not bad, transfer student! That's correct. Well done — go back to your seat.\""
            }
        }
    },
    "day2_quiz_pass": {
        "next": "day2_quiz_pass_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"죄송합니다, 아직 수업 진도를 다 따라잡지 못해서...\""
            },
            "en": {
                "name": "Me",
                "text": "\"I'm sorry, I haven't quite caught up with the material yet...\""
            }
        }
    },
    "day2_quiz_pass_2": {
        "character": null,
        "next": "day2_quiz_result",
        "_i18n": {
            "ko": {
                "name": "수학선생님",
                "text": "\"괜찮아, 전학 온 지 얼마 안 됐으니까. 다음엔 예습해오렴.\""
            },
            "en": {
                "name": "Math Teacher",
                "text": "\"That's alright, you just transferred. Try to preview the material next time.\""
            }
        }
    },
    "day2_quiz_result": {
        "next": "day2_second_class",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어찌저찌 수업이 넘어간다. 쪽지 때문에 집중이 안 되는 건 어쩔 수 없지만, 그래도 수업은 수업이니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*The class moves on, one way or another. I can't help being distracted by the note, but class is class.*"
            }
        }
    },
    "day2_second_class": {
        "next": "day2_second_class_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*쉬는 시간 없이 바로 2교시 국어 수업이 시작된다. 선생님이 어제 나눠준 유인물을 꺼내라고 한다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Without a break, the second period starts — Korean language class. The teacher tells us to take out the handout from yesterday.*"
            }
        }
    },
    "day2_second_class_2": {
        "next": "day2_second_class_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유인물을 뒤적이다가, 아까 주머니에 넣은 쪽지가 손끝에 닿는다. 심장이 쿵 하고 뛴다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Rummaging through the handouts, my fingertips brush against the note in my pocket. My heart skips a beat.*"
            }
        }
    },
    "day2_second_class_3": {
        "next": "day2_last_class_before_lunch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*점심시간까지 아직 두 시간이나 남았다. 이 시간이 왜 이렇게 안 가는 건지...*"
            },
            "en": {
                "name": "Me",
                "text": "*There are still two hours until lunch. Why is time crawling so slowly...*"
            }
        }
    },
    "day2_last_class_before_lunch": {
        "next": "day2_last_class_before_lunch_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*3교시 영어 수업이 시작된다. 선생님의 발음이 귀에 들리긴 하는데, 머릿속은 온통 점심시간 생각뿐이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Third period, English class. The teacher's pronunciation reaches my ears, but my mind is consumed with thoughts of lunchtime.*"
            }
        }
    },
    "day2_last_class_before_lunch_2": {
        "next": "day2_last_class_before_lunch_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*도서관 별관 뒤뜰... 가본 적도 없는 곳이다. 유나는 도대체 왜 그런 구석진 곳을 골랐을까?*"
            },
            "en": {
                "name": "Me",
                "text": "*The courtyard behind the library annex... I've never even been there. Why would Yuna pick such a secluded place?*"
            }
        }
    },
    "day2_last_class_before_lunch_3": {
        "next": "day2_last_class_before_lunch_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*혹시 위험한 건 아니겠지...? 아니, 같은 학교 학생이 보낸 쪽지인데 뭐가 위험해. 그래도 왠지 두근거린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*It's not dangerous or anything, right...? No, it's just a note from a fellow student. But still, my heart is pounding.*"
            }
        }
    },
    "day2_last_class_before_lunch_4": {
        "next": "day2_class_end_bell",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*시계를 슬쩍 본다. 11시 40분... 점심시간까지 20분 남았다. 아, 시간아 좀 빨리 가라.*"
            },
            "en": {
                "name": "Me",
                "text": "*I sneak a glance at the clock. 11:40... twenty minutes until lunch. Come on, time, move faster.*"
            }
        }
    },
    "day2_class_end_bell": {
        "next": "day2_class_end",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "- 딩동댕동 -"
            },
            "en": {
                "name": "System",
                "text": "- The bell rings -"
            }
        }
    },
    "day2_class_end": {
        "next": "day2_packing_up",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*드디어 점심 종이 울린다! 교실이 순식간에 소란스러워진다. 아이들이 급식실로 우르르 몰려나간다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The lunch bell finally rings! The classroom instantly erupts into commotion. Students rush out toward the cafeteria.*"
            }
        }
    },
    "day2_packing_up": {
        "next": "day2_lunch_decision",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나도 서둘러 교과서를 가방에 넣는다. 주머니 속 쪽지를 한 번 더 확인한다. '도서관 별관'... 좋아, 가보자.*"
            },
            "en": {
                "name": "Me",
                "text": "*I hurriedly pack my textbooks into my bag. I check the note in my pocket one more time. 'The courtyard behind the library annex'... Alright, let's go.*"
            }
        }
    },
    "day2_lunch_decision": {
        "next": "day2_lunch_time",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*점심시간이다. 누구와 함께할까...*"
            },
            "en": {
                "name": "Me",
                "text": "*It's lunch time. Who should I spend it with...*"
            }
        }
    }
});
