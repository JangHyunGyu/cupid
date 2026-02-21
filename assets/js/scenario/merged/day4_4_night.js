/**
 * ============================================================================
 * CUPID - day4_4_night (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day4_4_night.js + en_day4_4_night.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

Object.assign(SCENARIO[4], {
    "day4_night_start": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "bgm": "night2.mp3",
        "next": "day4_night_branch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집에 돌아왔다. 방에 누우니 오늘의 기억이 필름처럼 스쳐 지나간다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I'm back home. Lying in bed, today's memories replay like a film.*"
            }
        }
    },
    "day4_night_branch": {
        "background": "assets/images/background/room_my.png",
        "branches": [
            {
                "next": "day4_night_yuna_sneak",
                "condition": "isDating_Yuna"
            },
            {
                "next": "day4_night_seoyeon_call",
                "condition": "isDating_Seoyeon"
            },
            {
                "next": "day4_night_dain_gym",
                "condition": "isDating_Dain"
            },
            {
                "next": "day4_night_teacher_call",
                "condition": "isDating_Teacher"
            },
            {
                "next": "day4_night_nurse_msg",
                "condition": "isDating_Nurse"
            },
            {
                "next": "day4_night_regret",
                "condition": "day4_waited"
            },
            {
                "next": "day4_night_reflect"
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
    "day4_night_yuna_sneak": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "bgm": "mystery.mp3",
        "next": "day4_night_yuna_sneak_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*밤 10시. 유나에게서 메시지가 왔다. '학교 후문. 지금 와.'*"
            },
            "en": {
                "name": "Me",
                "text": "*10 PM. A message came from Yuna. 'School back gate. Come now.'*"
            }
        }
    },
    "day4_night_yuna_sneak_2": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_yuna_arrive",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*심장이 두근거린다. 유나가 말했던 '진실'… 드디어 알게 되는 건가.*"
            },
            "en": {
                "name": "Me",
                "text": "*My heart is pounding. The 'truth' Yuna mentioned... am I finally going to find out?*"
            }
        }
    },
    "day4_night_yuna_arrive": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_arrive_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…왔어. 늦을 줄 알았는데.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...You came. I thought you'd be late.\""
            }
        }
    },
    "day4_night_yuna_arrive_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_arrive_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학교 후문. 유나가 가로등 불빛 아래 서 있었다. 표정이 평소보다 더 단단해 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The school back gate. Yuna stood under a streetlight. Her expression looked more resolute than usual.*"
            }
        }
    },
    "day4_night_yuna_arrive_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_choice",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…오늘 보여줄 게 있어. 각오는 됐어?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I have something to show you today. Are you prepared?\""
            }
        }
    },
    "day4_night_yuna_choice": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_yuna_enter",
                "stats": {
                    "Yuna": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day4_night_yuna_enter_honest",
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
                "text": "*유나의 눈빛이 심상치 않다.*",
                "choices": [
                    "\"당연하지. 그래서 온 거잖아.\"",
                    "\"…솔직히 좀 무섭긴 해.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The look in Yuna's eyes is serious.*",
                "choices": [
                    "\"Of course. That's why I came.\"",
                    "\"...Honestly, I'm a little scared.\""
                ]
            }
        }
    },
    "day4_night_yuna_enter": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "day4_night_yuna_corridor",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…좋아. 따라와.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Good. Follow me.\""
            }
        }
    },
    "day4_night_yuna_enter_honest": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "day4_night_yuna_corridor",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……솔직한 건 좋아해. 괜찮아, 내가 옆에 있으니까.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I like that you're honest. It's okay—I'm right here beside you.\""
            }
        }
    },
    "day4_night_yuna_corridor": {
        "character": "assets/images/characters/yuna_smile.png",
        "background": "assets/images/background/school_hallway.png",
        "night": true,
        "next": "day4_night_yuna_corridor_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 후문 자물쇠를 익숙하게 열었다. 마치 이미 여러 번 해 본 것처럼.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna opened the back gate lock with practiced ease. As if she'd done this many times before.*"
            }
        }
    },
    "day4_night_yuna_corridor_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "day4_night_yuna_corridor_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*텅 빈 학교 복도. 비상등만 희미하게 켜져 있다. 낮에는 시끄러웠던 곳이 지금은 숨소리마저 울릴 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The empty school hallway. Only the dim emergency lights were on. The place that was so noisy during the day now felt like even a breath would echo.*"
            }
        }
    },
    "day4_night_yuna_corridor_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_basement",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…지하 자료실이야. 학교가 봉인한 구역. 여기에 전부 있어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...The underground archives. A section the school sealed off. Everything's in here.\""
            }
        }
    },
    "day4_night_yuna_basement": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/school_basement.png",
        "night": true,
        "next": "day4_night_yuna_basement_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*지하로 내려가자 공기가 차갑게 바뀌었다. 먼지 냄새와 함께 오래된 서류 냄새가 코끝을 찔렀다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As we descended underground, the air turned cold. The smell of dust and old documents stung my nose.*"
            }
        }
    },
    "day4_night_yuna_basement_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_basement_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"이 학교 재단… '성진학원'. 겉으로는 교육 명문을 자처하지만, 10년 전부터 조직적으로 비자금을 운영해 왔어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"This school's foundation... 'Sungjin Academy.' They claim to be an elite educational institution, but they've been operating a slush fund systematically for the past ten years.\""
            }
        }
    },
    "day4_night_yuna_basement_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_basement_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"…비자금?\""
            },
            "en": {
                "name": "Me",
                "text": "\"...A slush fund?\""
            }
        }
    },
    "day4_night_yuna_basement_4": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_documents",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"학생 복지 기금 횡령, 시설 보수비 허위 청구, 기부금 유용… 여기 다 있어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Embezzling student welfare funds, false claims for facility repair costs, misappropriation of donations... It's all here.\""
            }
        }
    },
    "day4_night_yuna_documents": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_documents_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 선반에서 낡은 서류 파일을 꺼냈다. 빼곡한 숫자들과 도장들. 이건… 진짜 장부다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna pulled out a worn file from the shelf. Dense numbers and stamps filled the pages. This is... a real ledger.*"
            }
        }
    },
    "day4_night_yuna_documents_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_documents_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"특히 이 건물… 본관 동쪽 계단. 3년 전 보수 공사를 했다고 되어 있는데, 실제로는 한 푼도 쓰지 않았어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Especially this building... the east staircase of the main hall. Records say it was renovated three years ago, but in reality, not a single penny was spent.\""
            }
        }
    },
    "day4_night_yuna_documents_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_truth_choice",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…그리고 그 계단에서, 1년 전에 사고가 일어났어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...And on those stairs, an accident happened one year ago.\""
            }
        }
    },
    "day4_night_yuna_truth_choice": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_yuna_senpai_reveal",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_night_yuna_senpai_concern",
                "stats": {
                    "Yuna": {
                        "affinity": 10
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 목소리가 떨리고 있다.*",
                "choices": [
                    "\"…누가 다친 거야?\"",
                    "\"유나… 괜찮아?\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Yuna's voice is trembling.*",
                "choices": [
                    "\"...Who got hurt?\"",
                    "\"Yuna... are you okay?\""
                ]
            }
        }
    },
    "day4_night_yuna_senpai_concern": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_senpai_reveal",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……괜찮냐고 묻는 사람은, 네가 처음이야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...You're the first person to ask me that.\""
            }
        }
    },
    "day4_night_yuna_senpai_reveal": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_senpai_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…이준호 선배. 당시 학생회장이었어. 재단 비리를 알게 되고, 증거를 모으고 있었지.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Lee Junho, a senior. He was the student council president at the time. He found out about the foundation's corruption and was gathering evidence.\""
            }
        }
    },
    "day4_night_yuna_senpai_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_senpai_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"선배는… 정의감이 강한 사람이었어. 바보같을 정도로. 누군가 피해를 보고 있으면 절대 그냥 못 넘어가는.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"He was... a person with a strong sense of justice. Almost foolishly so. He could never look away when someone was being wronged.\""
            }
        }
    },
    "day4_night_yuna_senpai_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_senpai_4",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"그러다 어느 날… 그 동쪽 계단에서 추락했어. 학교는 '실족사'로 처리했고.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Then one day... he fell from that east staircase. The school ruled it an 'accidental fall.'\""
            }
        }
    },
    "day4_night_yuna_senpai_4": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_senpai_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"……실족사? 비리를 조사하던 사람이?\""
            },
            "en": {
                "name": "Me",
                "text": "\"...An accidental fall? The person who was investigating the corruption?\""
            }
        }
    },
    "day4_night_yuna_senpai_5": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_senpai_6",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…보수도 안 한 낡은 계단 난간이 부러졌대. 재단이 공사비를 횡령하지 않았다면 일어나지 않았을 사고야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...The old staircase railing that was never repaired broke. If the foundation hadn't embezzled the repair funds, that accident would never have happened.\""
            }
        }
    },
    "day4_night_yuna_senpai_6": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_senpai_death",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"증거를 들고 교육청에 가려던 전날이었어. 우연인지, 아닌지… 아직도 모르겠어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"It was the day before he planned to take the evidence to the Board of Education. Whether it was coincidence or not... I still don't know.\""
            }
        }
    },
    "day4_night_yuna_senpai_death": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_silence",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"선배는… 며칠 뒤 병원에서 눈을 감았어. 끝내 깨어나지 못했지.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"He... passed away in the hospital a few days later. He never woke up.\""
            }
        }
    },
    "day4_night_yuna_silence": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_silence_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 손이 떨리고 있었다. 서류를 쥔 손가락 끝이 하얗게 질려 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna's hands were shaking. Her fingertips, gripping the documents, had turned white.*"
            }
        }
    },
    "day4_night_yuna_silence_choice": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_yuna_hand",
                "stats": {
                    "Yuna": {
                        "affinity": 15
                    }
                },
                "setFlag": "day4_held_yuna_hand"
            },
            {
                "next": "day4_night_yuna_listen",
                "stats": {
                    "Yuna": {
                        "affinity": 10
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*……*",
                "choices": [
                    "유나의 손을 잡는다",
                    "\"…계속 말해줘. 듣고 있을게.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*...*",
                "choices": [
                    "Take Yuna's hand",
                    "\"...Keep talking. I'm listening.\""
                ]
            }
        }
    },
    "day4_night_yuna_hand": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_hand_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……!\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...!\""
            }
        }
    },
    "day4_night_yuna_hand_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_resemblance",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 손이 차가웠다. 하지만 내 손을 뿌리치지 않았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna's hand was cold. But she didn't pull away.*"
            }
        }
    },
    "day4_night_yuna_listen": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_resemblance",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……고마워.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Thank you.\""
            }
        }
    },
    "day4_night_yuna_resemblance": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resemblance_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…사실, 너한테 말해야 할 게 하나 더 있어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Actually, there's one more thing I need to tell you.\""
            }
        }
    },
    "day4_night_yuna_resemblance_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_resemblance_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"처음 네가 전학 왔을 때… 나 숨이 멎을 뻔했어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"When you first transferred here... I almost stopped breathing.\""
            }
        }
    },
    "day4_night_yuna_resemblance_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_resemblance_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"…왜?\""
            },
            "en": {
                "name": "Me",
                "text": "\"...Why?\""
            }
        }
    },
    "day4_night_yuna_resemblance_4": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_resemblance_5",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"너… 준호 선배랑 닮았거든. 눈빛이, 분위기가. 불의를 보면 가만히 못 있는 그런 느낌까지.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"You... look like Junho. Your eyes, your aura. Even that feeling of never being able to stand by when something's wrong.\""
            }
        }
    },
    "day4_night_yuna_resemblance_5": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_resemblance_6",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…그래서 처음엔 무서웠어. 또 같은 일이 반복될까 봐. 너까지 위험해질까 봐.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...So at first, I was scared. Afraid the same thing would happen again. Afraid you'd be in danger too.\""
            }
        }
    },
    "day4_night_yuna_resemblance_6": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resemblance_7",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"그런데 동시에… 네가 옆에 있으면, 선배가 못 다 한 일을 끝낼 수 있을 것 같았어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"But at the same time... with you by my side, I felt like I could finish what he couldn't.\""
            }
        }
    },
    "day4_night_yuna_resemblance_7": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_critical_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그래서였구나. 유나가 처음부터 나에게 관심을 보인 이유. '특별한 빛'이라고 했던 것도… 선배의 그림자였던 걸까.*"
            },
            "en": {
                "name": "Me",
                "text": "*So that's why. The reason Yuna showed interest in me from the start. When she called me a 'special light'... was I just the senior's shadow?*"
            }
        }
    },
    "day4_night_yuna_critical_choice": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_yuna_moved",
                "stats": {
                    "Yuna": {
                        "affinity": 20
                    }
                },
                "setFlag": "day4_yuna_ally"
            },
            {
                "next": "day4_night_yuna_touched",
                "stats": {
                    "Yuna": {
                        "affinity": 15
                    }
                },
                "setFlag": "day4_yuna_ally"
            },
            {
                "next": "day4_night_yuna_confronted",
                "stats": {
                    "Yuna": {
                        "affinity": -10
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*……뭐라고 해야 하지.*",
                "choices": [
                    "\"나는 그 선배가 아니야. 나는 나야. 그래도… 같이 싸울게.\"",
                    "\"선배의 대역이어도 괜찮아. 유나한테 필요한 사람이 되고 싶어.\"",
                    "\"…그래서 나한테 접근한 거야? 선배 대신?\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*...What should I say?*",
                "choices": [
                    "\"I'm not him. I'm me. But still... I'll fight alongside you.\"",
                    "\"Even if I'm his stand-in, that's fine. I want to be the person you need.\"",
                    "\"...So you approached me because of him? As a replacement?\""
                ]
            }
        }
    },
    "day4_night_yuna_moved": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_moved_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…… 알아. 너는 너야. 처음엔 선배의 그림자를 쫓았을지도 몰라. 그런데 지금은……\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I know. You are you. Maybe at first I was chasing the senior's shadow. But now...\""
            }
        }
    },
    "day4_night_yuna_moved_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_resolve",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……지금은 네가 보여. 너만.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Now I see you. Only you.\""
            }
        }
    },
    "day4_night_yuna_touched": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_touched_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"바보… 그런 말 하면 어떡해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Idiot... you can't just say things like that.\""
            }
        }
    },
    "day4_night_yuna_touched_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_resolve",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"대역 같은 거 아니야. 너는… 이미 너 자신으로 충분해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"You're not a stand-in. You... are already more than enough, just as yourself.\""
            }
        }
    },
    "day4_night_yuna_confronted": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_confronted_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...\""
            }
        }
    },
    "day4_night_yuna_confronted_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_confronted_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…부정 안 할게. 처음엔 그랬어. 그런데… 함께 시간을 보내면서 바뀌었어. 이건 진심이야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I won't deny it. At first, that's how it was. But... as we spent time together, that changed. This is real.\""
            }
        }
    },
    "day4_night_yuna_confronted_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "setFlag": "day4_yuna_ally",
        "next": "day4_night_yuna_resolve",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…믿어주지 않아도, 증명해 볼게.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Even if you don't believe me, I'll prove it.\""
            }
        }
    },
    "day4_night_yuna_resolve": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resolve_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…이 서류들, 사본을 떠 놨어. 원본은 여기 그대로 두고.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I made copies of these documents. The originals stay here.\""
            }
        }
    },
    "day4_night_yuna_resolve_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resolve_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"선배가 못 다 한 일… 이번엔 끝내고 싶어. 교육청에 제보할 거야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"What the senior couldn't finish... I want to see it through this time. I'm reporting it to the Board of Education.\""
            }
        }
    },
    "day4_night_yuna_resolve_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resolve_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나의 눈에 결의가 서려 있다. 이건 단순한 호기심이 아니었다. 1년간 혼자 진실을 파헤쳐 온 거다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Determination filled Yuna's eyes. This wasn't mere curiosity. She'd been uncovering the truth alone for an entire year.*"
            }
        }
    },
    "day4_night_yuna_resolve_4": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resolve_5",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…근데 위험할 수 있어. 재단이 가만히 있진 않을 거야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...But it could be dangerous. The foundation won't sit still.\""
            }
        }
    },
    "day4_night_yuna_resolve_5": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resolve_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"…같이 하자. 혼자 짊어지지 마.\""
            },
            "en": {
                "name": "Me",
                "text": "\"...Let's do this together. Don't carry it all alone.\""
            }
        }
    },
    "day4_night_yuna_resolve_end": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "setFlag": "day4_yuna_truth_revealed",
        "next": "day4_night_yuna_exit",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……응.\""
            },
            "en": {
                "name": "Yuna",
                "text": "Yuna gently takes your hand, her touch no longer cold, but warm and seeking comfort."
            }
        }
    },
    "day4_night_yuna_exit": {
        "character": "assets/images/characters/yuna_smile.png",
        "background": "assets/images/background/street.png",
        "night": true,
        "bgm": "night1.mp3",
        "next": "day4_night_yuna_exit_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학교를 빠져나왔다. 찬 밤바람이 불었지만, 옆에 유나가 있어서 덜 추웠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We slipped out of the school. The cold night breeze blew, but it felt less cold with Yuna beside me.*"
            }
        }
    },
    "day4_night_yuna_exit_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_exit_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…오늘, 고마웠어. 혼자 안고 있던 걸 누군가한테 말한 건 처음이야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Thank you for today. It's the first time I've told anyone what I've been carrying alone.\""
            }
        }
    },
    "day4_night_yuna_exit_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "day4_night_yuna_exit_choice",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…좀 무거운 하루였지?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...It was a heavy day, wasn't it?\""
            }
        }
    },
    "day4_night_yuna_exit_choice": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_yuna_exit_warm",
                "stats": {
                    "Yuna": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day4_night_yuna_exit_promise",
                "stats": {
                    "Yuna": {
                        "affinity": 8
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*밤하늘 아래 유나가 어색하게 웃고 있다.*",
                "choices": [
                    "\"아니. 유나를 더 알게 된 거니까.\"",
                    "\"다음엔 진짜 데이트 하자. 카페 같은 데서.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Under the night sky, Yuna smiles awkwardly.*",
                "choices": [
                    "\"No. Because I got to know you better.\"",
                    "\"Next time, let's go on a real date. Somewhere like a café.\""
                ]
            }
        }
    },
    "day4_night_yuna_exit_warm": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_farewell",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……그런 말, 반칙이야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...That's not fair, saying something like that.\""
            }
        }
    },
    "day4_night_yuna_exit_promise": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "day4_night_yuna_farewell",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…카페. 좋아. 이번엔 내가 골라도 돼?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...A café. I'd like that. Can I pick the place this time?\""
            }
        }
    },
    "day4_night_yuna_farewell": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_farewell_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 돌아서려다 멈칫했다. 그리고 내 옷깃을 꽉 쥐었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna stopped as she was about to turn around. And she gripped my collar tightly.*"
            }
        }
    },
    "day4_night_yuna_farewell_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_farewell_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"선배처럼 죽게 내버려두지 않아. 널 지키기 위해서라면… 차라리 널 부숴서라도 내 곁에 묶어둘 거야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "I won't let you die like Sunbae. To protect you... I'd rather break you and tie you to my side."
            }
        }
    },
    "day4_night_yuna_farewell_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_home",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"넌 내 거니까. 아무데도 못 가.\""
            },
            "en": {
                "name": "Me",
                "text": "You're mine. You can't go anywhere."
            }
        }
    },
    "day4_night_yuna_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "day4_night_yuna_home_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집에 돌아왔다. 유나의 서늘한 눈빛과 꽉 쥐었던 손길이 잊혀지지 않는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I returned home. Yuna's chilling gaze and tight grip won't leave my mind.*"
            }
        }
    },
    "day4_night_yuna_home_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "fade": true,
        "next": "day4_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그녀가 말한 '지킨다'는 의미가, 어쩌면 내가 생각한 것과 다를지도 모른다는 예감이 들었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I had a feeling that what she meant by 'protecting' might be different from what I thought.*"
            }
        }
    },
    "day4_night_seoyeon_call": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "bgm": "night1.mp3",
        "next": "day4_night_seoyeon_call_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*밤 9시. 서연에게서 전화가 왔다.*"
            },
            "en": {
                "name": "Me",
                "text": "*9 PM. A call from Seoyeon.*"
            }
        }
    },
    "day4_night_seoyeon_call_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "silhouette": true,
        "night": true,
        "next": "day4_night_seoyeon_call_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…저기, 나인데. 바쁘지 않으면… 잠깐 나올 수 있어?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Hey, it's me. If you're not busy... could you come out for a bit?\""
            }
        }
    },
    "day4_night_seoyeon_call_3": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "silhouette": true,
        "night": true,
        "next": "day4_night_seoyeon_call_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연의 목소리가 평소와 다르다. 웃음기가 없고, 어딘가 떨리는 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon's voice sounds different from usual. No warmth, and it seems like she's trembling.*"
            }
        }
    },
    "day4_night_seoyeon_call_4": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "silhouette": true,
        "night": true,
        "next": "day4_night_seoyeon_park",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…우리 집 앞 공원 알지? 거기서 기다릴게.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...You know the park near my house, right? I'll wait there.\""
            }
        }
    },
    "day4_night_seoyeon_park": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_park_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*공원에 도착했다. 벤치에 서연이 혼자 앉아 있었다. 평소의 단정한 교복 대신 편한 옷차림이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I arrived at the park. Seoyeon was sitting alone on a bench. Instead of her usual neat uniform, she wore casual clothes.*"
            }
        }
    },
    "day4_night_seoyeon_park_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_park_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…왔구나. 갑자기 불러서 미안해.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...You came. Sorry for calling you out so suddenly.\""
            }
        }
    },
    "day4_night_seoyeon_park_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_seoyeon_concern",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_night_seoyeon_silent_sit",
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연의 눈이 빨갛다. …울었던 건가?*",
                "choices": [
                    "\"무슨 일이야? 괜찮아?\"",
                    "아무 말 없이 옆에 앉는다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon's eyes are red. ...Was she crying?*",
                "choices": [
                    "\"What happened? Are you okay?\"",
                    "Sit next to her without saying anything"
                ]
            }
        }
    },
    "day4_night_seoyeon_concern": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_open",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"……괜찮다고 하면 거짓말이겠지.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...If I said I was fine, that would be a lie.\""
            }
        }
    },
    "day4_night_seoyeon_silent_sit": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_open",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…… 고마워. 그냥 옆에 있어 주는 거, 제일 좋아.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Thank you. Just sitting next to me... that's the best thing.\""
            }
        }
    },
    "day4_night_seoyeon_open": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_open_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…오늘 엄마한테 전화가 왔어. 아빠랑 또 싸웠대.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Mom called today. She and Dad had another fight.\""
            }
        }
    },
    "day4_night_seoyeon_open_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_open_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"우리 집… 겉으로는 멀쩡해 보이지? 넓은 집, 좋은 차, 학생회장 딸.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Our house... looks perfect from the outside, right? Big house, nice car, student council president daughter.\""
            }
        }
    },
    "day4_night_seoyeon_open_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_open_4",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"근데 사실… 엄마 아빠는 1년째 같은 지붕 아래서 남남이야. 이혼 서류만 안 냈을 뿐.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"But actually... Mom and Dad haven't lived under the same roof for a year now. They just haven't filed for divorce yet.\""
            }
        }
    },
    "day4_night_seoyeon_open_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_open_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"……서연.\""
            },
            "en": {
                "name": "Me",
                "text": "\"...Seoyeon.\""
            }
        }
    },
    "day4_night_seoyeon_open_5": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_open_6",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"엄마가 말했어. '너라도 완벽해야 이 집이 유지된다'고. 그래서… 학생회장도, 성적도, 전부 놓을 수가 없었어.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Mom said, 'At least you need to be perfect for this family to hold together.' So... student council, grades, I couldn't let go of any of it.\""
            }
        }
    },
    "day4_night_seoyeon_open_6": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_open_7",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"모두한테 웃어야 했어. '서연이는 항상 밝구나', '서연이는 뭐든 잘하네'. 그 말이… 점점 감옥 같았어.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"I had to smile for everyone. 'Seoyeon is always so bright,' 'Seoyeon is good at everything.' Those words... started to feel like a prison.\""
            }
        }
    },
    "day4_night_seoyeon_open_7": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_tear",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"웃는 게 아니라 웃음을 '하고' 있었어. 매일.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"I wasn't smiling—I was 'performing' a smile. Every single day.\""
            }
        }
    },
    "day4_night_seoyeon_tear": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_tear_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연의 눈에서 눈물이 흘러내렸다. 가로등 불빛에 반짝이는 눈물을 보는 건 처음이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Tears spilled from Seoyeon's eyes. Glistening under the streetlight. It was the first time I'd ever seen her cry.*"
            }
        }
    },
    "day4_night_seoyeon_tear_choice": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_seoyeon_hug",
                "stats": {
                    "Seoyeon": {
                        "affinity": 15
                    }
                },
                "setFlag": "day4_hugged_seoyeon"
            },
            {
                "next": "day4_night_seoyeon_pinky",
                "stats": {
                    "Seoyeon": {
                        "affinity": 20
                    }
                },
                "setFlag": "day4_pinky_seoyeon"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이 울고 있다. 처음 보는 모습이다.*",
                "choices": [
                    "서연을 안아준다",
                    "새끼손가락을 내민다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon is crying. I've never seen this side of her.*",
                "choices": [
                    "Hug Seoyeon",
                    "Offer a pinky promise"
                ]
            }
        }
    },
    "day4_night_seoyeon_hug": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_hug_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"……!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...... !\""
            }
        }
    },
    "day4_night_seoyeon_hug_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_hug_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이 내 가슴에 얼굴을 묻었다. 작은 어깨가 떨리고 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon buried her face in my chest. Her small shoulders were trembling.*"
            }
        }
    },
    "day4_night_seoyeon_hug_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_real",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…이렇게 울어본 거, 정말 오랜만이야. 누구 앞에서 우는 건… 처음이고.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...It's been so long since I cried like this. Crying in front of someone... this is the first time.\""
            }
        }
    },
    "day4_night_seoyeon_pinky": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_pinky_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"약속할게. 서연이 울고 싶을 때, 나한테 울어도 돼.\""
            },
            "en": {
                "name": "Me",
                "text": "\"I promise. Whenever you want to cry, you can cry with me.\""
            }
        }
    },
    "day4_night_seoyeon_pinky_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_pinky_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…… 새끼손가락?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...A pinky promise?\""
            }
        }
    },
    "day4_night_seoyeon_pinky_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_pinky_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이 떨리는 손으로 새끼손가락을 걸었다. 그리고 참았던 울음이 터져 나왔다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon locked her trembling pinky with mine. And then the tears she'd been holding back poured out.*"
            }
        }
    },
    "day4_night_seoyeon_pinky_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_real",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…바보야, 왜 이렇게… 나한테 잘해주는 건데……\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...You fool, why are you... so kind to me...\""
            }
        }
    },
    "day4_night_seoyeon_real": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_real_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…사실 오늘 데이트하면서도 무서웠어. 내가 이렇게 행복해도 되나. 이 행복도 곧 무너지는 거 아닌가.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Even during our date today, I was scared. Am I allowed to be this happy? Will this happiness crumble too?\""
            }
        }
    },
    "day4_night_seoyeon_real_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_real_choice",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"넌… 완벽하지 않은 나도 괜찮아?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Are you... okay with a me that's not perfect?\""
            }
        }
    },
    "day4_night_seoyeon_real_choice": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_seoyeon_accept",
                "stats": {
                    "Seoyeon": {
                        "affinity": 20
                    }
                }
            },
            {
                "next": "day4_night_seoyeon_gf",
                "stats": {
                    "Seoyeon": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "day4_night_seoyeon_honest",
                "stats": {
                    "Seoyeon": {
                        "affinity": 10
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이 떨리는 눈으로 나를 올려다보고 있다.*",
                "choices": [
                    "\"완벽한 서연보다, 지금 이 서연이 더 좋아.\"",
                    "\"학생회장 서연이 아니라, 그냥 서연이가 내 여자친구야.\"",
                    "\"솔직히 완벽한 줄만 알았어. 하지만… 이런 모습도 보여줘서 고마워.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon is looking up at me with trembling eyes.*",
                "choices": [
                    "\"I like the Seoyeon right now more than the perfect one.\"",
                    "\"Not the class president Seoyeon—just Seoyeon is my girlfriend.\"",
                    "\"Honestly, I always thought you were perfect. But... thank you for showing me this side too.\""
                ]
            }
        }
    },
    "day4_night_seoyeon_accept": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_accept_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"……정말?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Really?\""
            }
        }
    },
    "day4_night_seoyeon_accept_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…그 말, 평생 잊지 않을 거야. 잊으면… 약속이니까.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...I'll never forget those words. If I do... we made a pinky promise, after all.\""
            }
        }
    },
    "day4_night_seoyeon_gf": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "night": true,
        "next": "day4_night_seoyeon_gf_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"여, 여자친구……\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"G-girlfriend......\""
            }
        }
    },
    "day4_night_seoyeon_gf_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…아, 심장이 두근거려서 죽을 것 같아. 그런 말 갑자기 하면 어떡해……\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Ah, my heart is pounding so hard I might die. You can't just say things like that...\""
            }
        }
    },
    "day4_night_seoyeon_honest": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_honest_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…… 고마워. 진심이지?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Thank you. Do you mean it?\""
            }
        }
    },
    "day4_night_seoyeon_honest_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"앞으로는… 너한테만은 연기 안 할게. 약속해.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"From now on... I won't act in front of you. I promise.\""
            }
        }
    },
    "day4_night_seoyeon_resolve": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…있잖아. 나 결심했어.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...You know what? I've made up my mind.\""
            }
        }
    },
    "day4_night_seoyeon_resolve_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"엄마한테 말할 거야. 나는 '완벽한 딸'이기 전에 나 자신이고 싶다고.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"I'm going to tell Mom. That I want to be myself before being 'the perfect daughter.'\""
            }
        }
    },
    "day4_night_seoyeon_resolve_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve_4",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"내 이런 밑바닥까지 봤으니까… 이제 넌 절대 날 떠날 수 없어.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "Since you've seen me at my lowest like this... you can never leave me now."
            }
        }
    },
    "day4_night_seoyeon_resolve_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"……서연아?\""
            },
            "en": {
                "name": "Me",
                "text": "......Seoyeon?"
            }
        }
    },
    "day4_night_seoyeon_resolve_end": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "night": true,
        "setFlag": "day4_seoyeon_real_self",
        "next": "day4_night_seoyeon_farewell",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"만약 다른 여자한테 웃어주면… 그땐 나도 내가 무슨 짓을 할지 몰라. 알았지?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "If you smile at another girl... I don't know what I'll do then. Got it?"
            }
        }
    },
    "day4_night_seoyeon_farewell": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "day4_night_seoyeon_farewell_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*공원을 나와 집 앞까지 함께 걸었다. 서연이 내 팔을 꽉 껴안고 놓아주지 않았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We left the park and walked together to my house. Seoyeon hugged my arm tightly and wouldn't let go.*"
            }
        }
    },
    "day4_night_seoyeon_farewell_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_farewell_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…오늘 못난 모습 보여줬는데, 도망 안 갔네. 다행이다.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "...I showed you an ugly side of me today, but you didn't run away. I'm glad."
            }
        }
    },
    "day4_night_seoyeon_farewell_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_farewell_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"도망은. 오히려 더 좋아졌는데?\""
            },
            "en": {
                "name": "Me",
                "text": "\"Run away? I actually like you more now.\""
            }
        }
    },
    "day4_night_seoyeon_farewell_4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "night": true,
        "next": "day4_night_seoyeon_farewell_5",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"……그 말, 절대 잊지 마. 넌 이제 내 거니까.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "......Never forget those words. You're mine now."
            }
        }
    },
    "day4_night_seoyeon_farewell_5": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "night": true,
        "next": "day4_night_seoyeon_farewell_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이 돌아서면서 서늘하지만 달콤한 미소를 지었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As Seoyeon turned to leave, she said in a small voice.*"
            }
        }
    },
    "day4_night_seoyeon_farewell_6": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_home",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…오늘, 처음으로 '내가 나여도 괜찮다'고 느꼈어. 고마워.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*As Seoyeon turned around, she gave a chilling but sweet smile.*"
            }
        }
    },
    "day4_night_seoyeon_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "day4_night_seoyeon_home_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집에 돌아왔다. 서연의 눈물이 자꾸 떠오른다. 완벽했던 학생회장의 진짜 모습… 그 무거운 짐을 나눠 들고 싶다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Back home. Seoyeon's tears keep coming back to me. The real face behind the perfect student council president... I want to share that heavy burden.*"
            }
        }
    },
    "day4_night_seoyeon_home_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "day4_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*내일은… 서연이 웃는 이유가 '연기'가 아니라 '진심'이 되도록 해주고 싶다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Tomorrow... I want her smile to come from the heart, not from acting.*"
            }
        }
    },
    "day4_night_dain_gym": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "bgm": "night1.mp3",
        "next": "day4_night_dain_gym_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*밤 9시 반. 다인에게서 메시지가 왔다. '야 지금 시간 돼?ㅋㅋ 학교 오면 안 되지??'*"
            },
            "en": {
                "name": "Me",
                "text": "*9:30 PM. A message from Dain. 'Hey, you free rn?? lol Can you come to school??'*"
            }
        }
    },
    "day4_night_dain_gym_2": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_dain_gym_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*곧바로 또 메시지가 왔다. '아 그냥 와ㅋㅋ 체육관 뒷문 열어놨음!'*"
            },
            "en": {
                "name": "Me",
                "text": "*Another message right away. 'Nvm just come lol! Gym back door is open!'*"
            }
        }
    },
    "day4_night_dain_gym_3": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_dain_arrive",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이 이 시간에 학교 체육관이라니. 뭔가 이상한데… 가보자.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain at the school gym at this hour? Something feels off... Let's go check.*"
            }
        }
    },
    "day4_night_dain_arrive": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_arrive_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*체육관에 들어서자, 비상등만 켜진 어두운 코트 위에 다인이 혼자 배구공을 튀기고 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I entered the gym. In the darkness lit only by emergency lights, Dain was alone, bumping a volleyball.*"
            }
        }
    },
    "day4_night_dain_arrive_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_arrive_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오! 진짜 왔어?! 후훗, 역시 내 남자친구!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh! You actually came?! Hehe, that's my boyfriend!\""
            }
        }
    },
    "day4_night_dain_arrive_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_spike",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그런데… 뭔가 이상하다. 다인이 평소보다 더 힘껏 웃고 있는 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*But... something's off. Dain seems to be smiling harder than usual.*"
            }
        }
    },
    "day4_night_dain_spike": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_spike_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"토스 올려줘! 한 번만! 내 스파이크 보여줄게!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Toss for me! Just once! I'll show you my spike!!\""
            }
        }
    },
    "day4_night_dain_spike_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_spike_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인에게 토스를 올려줬다. 다인이 높이 뛰어올라 스파이크를 내리찍는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I tossed the ball to Dain. She jumped high and slammed the spike down.*"
            }
        }
    },
    "day4_night_dain_spike_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_hurt",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*착지하는 순간— 다인이 오른쪽 무릎을 움켜잡고 쪼그려 앉았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The moment she landed—Dain grabbed her right knee and crumpled to the floor.*"
            }
        }
    },
    "day4_night_dain_hurt": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_hurt_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"……!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...... !!\""
            }
        }
    },
    "day4_night_dain_hurt_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_hurt_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"다인!!\""
            },
            "en": {
                "name": "Me",
                "text": "\"Dain!!\""
            }
        }
    },
    "day4_night_dain_hurt_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_hurt_4",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"아, 아냐!! 괜찮아!! 그냥 삐끗한 거야 ㅋㅋ 별거 아…\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Ow ow!! I'm fine!! Just tweaked it a little haha, no biggie...\""
            }
        }
    },
    "day4_night_dain_hurt_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_dain_check",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day4_night_dain_serious",
                "stats": {
                    "Dain": {
                        "affinity": 10
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이 웃고 있지만, 무릎을 잡은 손이 하얗게 질려 있다.*",
                "choices": [
                    "\"거짓말하지 마. 어디 봐.\"",
                    "\"다인. 괜찮지 않잖아.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Dain is smiling, but her hand gripping her knee has gone white.*",
                "choices": [
                    "\"Don't lie. Let me see.\"",
                    "\"Dain. You're not okay.\""
                ]
            }
        }
    },
    "day4_night_dain_check": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_secret",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인의 무릎을 보려 하자, 다인이 화들짝 뒤로 물러났다.*"
            },
            "en": {
                "name": "Me",
                "text": "*When I tried to look at Dain's knee, she flinched and pulled away.*"
            }
        }
    },
    "day4_night_dain_serious": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_secret",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"……\""
            },
            "en": {
                "name": "Dain",
                "text": "\"......\""
            }
        }
    },
    "day4_night_dain_secret": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_secret_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…… 알았어. 숨기려 했는데.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Fine. I was trying to hide it.\""
            }
        }
    },
    "day4_night_dain_secret_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_secret_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이 무릎 보호대를 걷어 올렸다. 무릎이 심하게 부어 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain rolled up her knee brace. Her knee was badly swollen.*"
            }
        }
    },
    "day4_night_dain_secret_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_secret_4",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…전방 십자인대. 작년에 다쳤어. 수술했는데… 완치가 안 됐어.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Torn ACL. I injured it last year. Had surgery but... it never fully healed.\""
            }
        }
    },
    "day4_night_dain_secret_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_secret_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"……작년에?\""
            },
            "en": {
                "name": "Me",
                "text": "\"...Last year?\""
            }
        }
    },
    "day4_night_dain_secret_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_secret_6",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"의사 선생님이 그랬어. '일상생활은 괜찮지만, 이전처럼 뛰는 건 무리'라고.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"The doctor said, 'Daily life is fine, but playing like before is too much.'\""
            }
        }
    },
    "day4_night_dain_secret_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_dream",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"체육대 진학도, 프로 선수도… 다 물 건너갔어.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Athletic scholarship, going pro... All gone. Just like that.\""
            }
        }
    },
    "day4_night_dain_dream": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_dream_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…배구가 전부였던 다인에게, 그건 사형선고나 마찬가지였을 거다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...For Dain, who lived for volleyball, that must have been a death sentence.*"
            }
        }
    },
    "day4_night_dain_dream_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_dream_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…맨날 밝은 척 웃은 거, 알아? 아무도 모르게.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...You know how I always smile? Nobody knows it's an act.\""
            }
        }
    },
    "day4_night_dain_dream_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_dream_4",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"'다인이는 항상 에너지 넘치네!' 그 말 들을 때마다… 진짜 웃긴다. 속으론 매일 무릎이 불타는 것 같은데.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"'Dain is always so energetic!' Every time I hear that... I laugh for real. But inside, my knee burns every single day.\""
            }
        }
    },
    "day4_night_dain_dream_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_dream_5",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오늘 너랑 데이트하면서 뛰어다닐 때도… 사실 아팠어. 근데 티 내고 싶지 않았어.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Even on our date today, when we were running around... it actually hurt. But I didn't want to show it.\""
            }
        }
    },
    "day4_night_dain_dream_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_cry",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"포기해야 하는 건 알아. 근데… 그냥 한 번만 더 뛰고 싶었어. 이 코트에서.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"I know I need to let go. But... I just wanted to jump one more time. On this court.\""
            }
        }
    },
    "day4_night_dain_cry": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_cry_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이 배구공을 꼭 안고 고개를 숙였다. 어깨가 떨리고 있었다. 항상 밝기만 했던 다인이… 울고 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain hugged the volleyball tight and lowered her head. Her shoulders were shaking. The girl who was always bright and cheerful... was crying.*"
            }
        }
    },
    "day4_night_dain_cry_choice": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_dain_future",
                "stats": {
                    "Dain": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "day4_night_dain_tears_ok",
                "stats": {
                    "Dain": {
                        "affinity": 20
                    }
                },
                "setFlag": "day4_dain_tears"
            },
            {
                "next": "day4_night_dain_last_spike",
                "stats": {
                    "Dain": {
                        "affinity": 12
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*……뭐라고 해야 하지.*",
                "choices": [
                    "\"다인의 꿈이 배구만은 아닐 거야. 새로운 꿈 같이 찾자.\"",
                    "\"울어도 돼. 밝은 척 안 해도 돼. 나한테는.\"",
                    "\"…한 번 더 토스 올려줄까? 마지막으로.\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*...What do I say?*",
                "choices": [
                    "\"Your dream isn't just volleyball. Let's find a new dream together.\"",
                    "\"You can cry. You don't have to pretend to be okay. Not with me.\"",
                    "\"...Want me to toss one more? One last time.\""
                ]
            }
        }
    },
    "day4_night_dain_future": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_future_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…새로운 꿈?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...A new dream?\""
            }
        }
    },
    "day4_night_dain_future_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_future_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…코치라든가, 트레이너라든가… 그런 거 생각해 본 적은 있어. 가르치는 건 좋아하니까.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...I've thought about it. Coaching, training... I do love teaching people.\""
            }
        }
    },
    "day4_night_dain_future_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_future_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"다인이면 세상에서 제일 열정적인 코치 될 거야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"You'd be the most passionate coach in the world.\""
            }
        }
    },
    "day4_night_dain_future_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "next": "day4_night_dain_resolve",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…바보, 갑자기 그런 말 하면 울잖아……\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Dummy, if you say things like that I'll cry again...\""
            }
        }
    },
    "day4_night_dain_tears_ok": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_tears_ok_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"……\""
            },
            "en": {
                "name": "Dain",
                "text": "\"......\""
            }
        }
    },
    "day4_night_dain_tears_ok_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_tears_ok_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…… 이 바보야…… 그런 말 하면…… 진짜 울잖아……!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...You dummy... if you say that... I'll actually cry...!!\""
            }
        }
    },
    "day4_night_dain_tears_ok_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_tears_ok_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이 내 가슴팍에 얼굴을 파묻고 엉엉 울기 시작했다. 체육관에 울음소리가 울려 퍼졌다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain buried her face in my chest and started sobbing. Her cries echoed through the empty gym.*"
            }
        }
    },
    "day4_night_dain_tears_ok_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_resolve",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…아무한테도 말 못 했어…… 혼자서 매일…… 무서웠단 말이야……\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...I couldn't tell anyone... every day, alone... I was so scared...\""
            }
        }
    },
    "day4_night_dain_last_spike": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_last_spike_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…… 마지막?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...One last time?\""
            }
        }
    },
    "day4_night_dain_last_spike_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_last_spike_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"마지막이 아니라, '새로운 시작 전의 마지막 한 발'이야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Not 'last'—it's 'the last one before a new beginning.'\""
            }
        }
    },
    "day4_night_dain_last_spike_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_last_spike_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*토스를 올려줬다. 다인이 이를 악물고 뛰어올라 최고의 스파이크를 내리찍었다. 착지와 함께 무릎을 잡았지만… 웃고 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I tossed the ball. Dain gritted her teeth and jumped, slamming down the best spike I'd ever seen. She grabbed her knee on landing... but she was smiling.*"
            }
        }
    },
    "day4_night_dain_last_spike_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_last_spike_5",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…ㅋㅋ 아프다. 근데… 시원하다.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Haha. It hurts. But... it felt amazing.\""
            }
        }
    },
    "day4_night_dain_last_spike_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "next": "day4_night_dain_resolve",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…고마워. 이걸로 진짜 보내줄 수 있을 것 같아.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Thank you. I think I can really let go now.\""
            }
        }
    },
    "day4_night_dain_resolve": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_resolve_2",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…야.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Hey.\""
            }
        }
    },
    "day4_night_dain_resolve_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_resolve_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"나 결심했어. 주치의 선생님한테 제대로 이야기하고, 재활에 집중할 거야.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"I've decided. I'm going to talk to my doctor properly and focus on rehabilitation.\""
            }
        }
    },
    "day4_night_dain_resolve_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_resolve_4",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"만약 내가 배구를 영영 못하게 되면… 네가 내 인생 전부 책임져야 해. 알았지?\""
            },
            "en": {
                "name": "Dain",
                "text": "If I can never play volleyball again... you have to take responsibility for my whole life. Got it?"
            }
        }
    },
    "day4_night_dain_resolve_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_resolve_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"……어?\""
            },
            "en": {
                "name": "Me",
                "text": "......Huh?"
            }
        }
    },
    "day4_night_dain_resolve_end": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "setFlag": "day4_dain_truth_revealed",
        "next": "day4_night_dain_farewell",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"농담 아니야. 넌 이제 내 거니까 도망칠 생각 마. 내 다리가 부서져도 널 쫓아갈 거니까.\""
            },
            "en": {
                "name": "Dain",
                "text": "I'm not joking. You're mine now, so don't even think about running away. Even if my legs break, I'll chase after you."
            }
        }
    },
    "day4_night_dain_farewell": {
        "character": "assets/images/characters/dain_shy.png",
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "day4_night_dain_farewell_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*체육관을 나왔다. 다인이 내 팔짱을 꽉 끼고, 절대 놓아주지 않겠다는 듯 힘을 주었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We left the gym. Dain linked her arm tightly with mine, putting strength into it as if she would never let go.*"
            }
        }
    },
    "day4_night_dain_farewell_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_pout.png",
        "night": true,
        "next": "day4_night_dain_farewell_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…오늘 내 약점 다 봤으니까, 넌 이제 나한테서 못 벗어나. 평생 내 옆에서 토스나 올려.\""
            },
            "en": {
                "name": "Dain",
                "text": "...Since you've seen all my weaknesses today, you can't escape from me now. Just set tosses by my side for the rest of your life."
            }
        }
    },
    "day4_night_dain_farewell_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_pout.png",
        "night": true,
        "next": "day4_night_dain_farewell_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"그 모습도 좋았는데?\""
            },
            "en": {
                "name": "Me",
                "text": "\"I liked that side of you too.\""
            }
        }
    },
    "day4_night_dain_farewell_4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_pout.png",
        "night": true,
        "next": "day4_night_dain_farewell_5",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…ㅎ, 변태 아냐? 우는 여자친구 보면서 '좋았다'니.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Huh? Who says 'I liked it' about their crying girlfriend? Weirdo.\""
            }
        }
    },
    "day4_night_dain_farewell_5": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "next": "day4_night_dain_farewell_6",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…근데, 고마워. 진짜로. 네가 아니었으면 영영 혼자 안고 갔을 거야.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...But thanks. Really. Without you, I would've kept carrying this alone forever.\""
            }
        }
    },
    "day4_night_dain_farewell_6": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_home",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…내일부터는 진짜로 웃을게. 가짜 말고, 진짜로.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Starting tomorrow, I'll smile for real. Not fake—for real.\""
            }
        }
    },
    "day4_night_dain_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "day4_night_dain_home_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집에 돌아왔다. 체육관에서의 다인의 눈물이 떠오른다. 항상 밝기만 했던 다인이 감추고 있던 아픔… 그 무게가 가슴에 남아 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Back home. Dain's tears from the gym keep flashing before my eyes. The pain she hid behind her constant brightness... it weighs heavy on my heart.*"
            }
        }
    },
    "day4_night_dain_home_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "fade": true,
        "next": "day4_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*내일은 다인이 진심으로 웃을 수 있는 하루가 되길. 옆에서 지켜봐 줘야지.*"
            },
            "en": {
                "name": "Me",
                "text": "*Tomorrow... I want it to be a day where Dain can smile from the heart. I'll be right there beside her.*"
            }
        }
    },
    "day4_night_teacher_call": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "bgm": "night1.mp3",
        "next": "day4_night_teacher_call_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*밤 9시. 선생님한테 전화가 왔다.*"
            },
            "en": {
                "name": "Me",
                "text": "*9 PM. A call from the teacher.*"
            }
        }
    },
    "day4_night_teacher_call_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day4_night_teacher_call_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…여보세요? 나야. 지금… 시간 괜찮아?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Hello? It's me. Are you... free right now?\""
            }
        }
    },
    "day4_night_teacher_call_3": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day4_night_teacher_call_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님 목소리가 평소와 다르다. 교실에서의 당당한 목소리가 아니라… 어딘가 지쳐 있는 느낌.*"
            },
            "en": {
                "name": "Me",
                "text": "*Her voice sounds different from usual. Not the confident voice from the classroom... it sounds like she's about to break.*"
            }
        }
    },
    "day4_night_teacher_call_4": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day4_night_teacher_cafe",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…학교 근처 카페 알지? 거기서 잠깐 볼 수 있을까.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...There's a café near the school. Can we meet there?\""
            }
        }
    },
    "day4_night_teacher_cafe": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_cafe_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*카페에 도착했다. 구석 자리에 선생님이 앉아 있었다. 평소 정장 차림이 아니라 캐주얼한 옷을 입고 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I arrived at the café. She was sitting in a corner booth. Instead of her usual neat outfit, she was in casual clothes.*"
            }
        }
    },
    "day4_night_teacher_cafe_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_cafe_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…와줘서 고마워. 갑자기 불러서 미안해.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Thanks for coming. Sorry for calling you out so suddenly.\""
            }
        }
    },
    "day4_night_teacher_cafe_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_teacher_concern",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_night_teacher_wait",
                "stats": {
                    "Teacher": {
                        "affinity": 8
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님 눈이 붉다. …울었던 건가?*",
                "choices": [
                    "\"무슨 일 있었어요?\"",
                    "커피를 건네며 조용히 기다린다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Her eyes are red. ...Was she crying?*",
                "choices": [
                    "\"Did something happen?\"",
                    "Offer her coffee and wait quietly"
                ]
            }
        }
    },
    "day4_night_teacher_concern": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_open",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…일이라기보다는, 오늘 좀 많이 생각을 했어.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...It's not so much that something happened. I just... thought a lot today.\""
            }
        }
    },
    "day4_night_teacher_wait": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_open",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…고마워. 이렇게 아무 말 없이 옆에 있어주는 거… 네가 참 좋아.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Thank you. Just sitting next to me without saying anything... I really like that about you.\""
            }
        }
    },
    "day4_night_teacher_open": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_open_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…어제 교무회의에서 교감 선생님이 그러시더라. '학생과 개인적으로 친하게 지내는 건 조심해야 한다'고.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...At the faculty meeting yesterday, the vice principal said, 'Be careful about getting too personally close to students.'\""
            }
        }
    },
    "day4_night_teacher_open_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_open_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"직접적으로 우리 얘기를 한 건 아닐 수도 있어. 하지만… 심장이 멈추는 줄 알았어.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Maybe it wasn't about us directly. But... my heart nearly stopped.\""
            }
        }
    },
    "day4_night_teacher_open_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_open_4",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"나… 선생이잖아. 너의 담임이잖아. 이러면 안 되는 거 알아.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"I'm... a teacher. Your homeroom teacher. I know this isn't right.\""
            }
        }
    },
    "day4_night_teacher_open_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_open_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"……선생님.\""
            },
            "en": {
                "name": "Me",
                "text": "\"......\""
            }
        }
    },
    "day4_night_teacher_open_5": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_open_6",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"근데 돌아가는 길에 자꾸 네 생각이 나는 거야. '지금 뭐 하고 있을까', '밥은 먹었을까'…\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"But on the way home, I kept thinking about you. 'What is he doing right now?' 'Did he eat?'...\""
            }
        }
    },
    "day4_night_teacher_open_6": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_tear",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"교사로서 자격이 없는 걸까. 아니면… 이 마음이 진짜라서 이러는 걸까.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Am I not qualified to be a teacher? Or... is it because these feelings are real that I feel this way?\""
            }
        }
    },
    "day4_night_teacher_tear": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_tear_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 커피잔을 꼭 쥐고 고개를 숙였다. 어깨가 미세하게 떨리고 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*She gripped her coffee cup tightly and lowered her head. Her shoulders were trembling ever so slightly.*"
            }
        }
    },
    "day4_night_teacher_tear_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_tear_choice",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…하하, 미안. 선생이 학생 앞에서 이러면 안 되는데.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Ha, sorry. A teacher shouldn't be like this in front of a student.\""
            }
        }
    },
    "day4_night_teacher_tear_choice": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_teacher_hold",
                "stats": {
                    "Teacher": {
                        "affinity": 15
                    }
                },
                "setFlag": "day4_held_teacher_hand"
            },
            {
                "next": "day4_night_teacher_woman",
                "stats": {
                    "Teacher": {
                        "affinity": 20
                    }
                },
                "setFlag": "day4_teacher_as_woman"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 눈가에 눈물이 맺혀 있다.*",
                "choices": [
                    "손을 잡는다",
                    "\"지금은 선생님이 아니라, 한 사람의 여자로 봐도 돼요\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*There are tears glistening at the corner of her eyes.*",
                "choices": [
                    "Hold her hand",
                    "\"Right now, you're not my teacher—you're a woman I care about\""
                ]
            }
        }
    },
    "day4_night_teacher_hold": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_hold_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…… !\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"......!\""
            }
        }
    },
    "day4_night_teacher_hold_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_hold_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*테이블 밑으로 선생님의 손을 잡았다. 차가웠던 손이 점점 따뜻해졌다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I reached under the table and held her hand. Her cold fingers slowly grew warm.*"
            }
        }
    },
    "day4_night_teacher_hold_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_hold_4",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…여기서 이러면 안 되는데. 누가 볼 수도 있잖아.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...We shouldn't do this here. Someone might see.\""
            }
        }
    },
    "day4_night_teacher_hold_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_real",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…근데 놓기 싫다.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...But I don't want to let go.\""
            }
        }
    },
    "day4_night_teacher_woman": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_woman_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…뭐?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...What?\""
            }
        }
    },
    "day4_night_teacher_woman_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_woman_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"선생님이기 전에, 한 명의 사람이잖아요. 울고 싶을 때 울어도 되는 거예요.\""
            },
            "en": {
                "name": "Me",
                "text": "\"Before you're a teacher, you're a person. It's okay to cry when you want to cry.\""
            }
        }
    },
    "day4_night_teacher_woman_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_woman_4",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"……너, 진짜.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...You, honestly.\""
            }
        }
    },
    "day4_night_teacher_woman_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_real",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…그런 말 하면 진짜 울어버린다, 바보야.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...If you say things like that, I'll really start crying, you dummy.\""
            }
        }
    },
    "day4_night_teacher_real": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "next": "day4_night_teacher_real_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…있잖아. 나 처음 교사 됐을 때, '절대 학생한테 감정 갖지 말자' 그렇게 다짐했었어.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...You know, when I first became a teacher, I promised myself I'd never catch feelings for a student.\""
            }
        }
    },
    "day4_night_teacher_real_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_real_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"근데 너는… 어느 순간부터 그 다짐을 무너뜨리더라.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"But then you came along... and broke that promise before I even noticed.\""
            }
        }
    },
    "day4_night_teacher_real_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_real_4",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"지각해서 혼냈는데 오히려 웃으면서 '선생님 오늘 좀 피곤해 보여요, 괜찮아요?' 그러잖아.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"When I scolded you for being late, you just smiled and said, 'You look tired today, are you okay?' instead of making excuses.\""
            }
        }
    },
    "day4_night_teacher_real_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_real_choice",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"그때부터… 자꾸 신경 쓰이기 시작했어.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"That's when... I started noticing you.\""
            }
        }
    },
    "day4_night_teacher_real_choice": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_teacher_graduate",
                "stats": {
                    "Teacher": {
                        "affinity": 20
                    }
                }
            },
            {
                "next": "day4_night_teacher_present",
                "stats": {
                    "Teacher": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "day4_night_teacher_give_up",
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
                "text": "*선생님이 떨리는 목소리로 진심을 말하고 있다.*",
                "choices": [
                    "\"졸업하면 당당하게 옆에 있을게요\"",
                    "\"지금 이 순간이 소중해요. 그걸로 충분해요\"",
                    "\"선생님이 힘들면 그만둬도 괜찮아요\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*She's speaking her heart with a trembling voice.*",
                "choices": [
                    "\"After I graduate, I'll stand proudly by your side\"",
                    "\"This moment right now is precious. That's enough for me\"",
                    "\"If it's too hard for you, we can stop\""
                ]
            }
        }
    },
    "day4_night_teacher_graduate": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_graduate_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…졸업하면?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...After you graduate?\""
            }
        }
    },
    "day4_night_teacher_graduate_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_graduate_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…그때까지 기다려 줄 거야?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Will you wait until then?\""
            }
        }
    },
    "day4_night_teacher_graduate_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_graduate_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"기다리는 게 아니라, 그때까지 더 멋진 사람이 돼서 올게요.\""
            },
            "en": {
                "name": "Me",
                "text": "\"I'm not waiting—I'm going to become someone even better by then.\""
            }
        }
    },
    "day4_night_teacher_graduate_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "night": true,
        "next": "day4_night_teacher_resolve",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…하, 진짜. 나보다 훨씬 어른스러운 거 아니야.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...God, seriously. You're way more mature than I am.\""
            }
        }
    },
    "day4_night_teacher_present": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_present_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…지금 이 순간?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...This moment right now?\""
            }
        }
    },
    "day4_night_teacher_present_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_present_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"내일 걱정은 내일 해요. 지금은 그냥 같이 있고 싶어요.\""
            },
            "en": {
                "name": "Me",
                "text": "\"We can worry about tomorrow when it comes. Right now, I just want to be here with you.\""
            }
        }
    },
    "day4_night_teacher_present_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "night": true,
        "next": "day4_night_teacher_resolve",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…그래, 맞아. 지금 이 시간이 소중한 거지.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...You're right. Right now... this time together is what matters.\""
            }
        }
    },
    "day4_night_teacher_give_up": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_angry.png",
        "night": true,
        "next": "day4_night_teacher_give_up_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…그만두라고?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Stop?\""
            }
        }
    },
    "day4_night_teacher_give_up_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_give_up_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…바보. 그만두고 싶어서 고민하는 게 아니야.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...You dummy. I'm not struggling because I want to stop.\""
            }
        }
    },
    "day4_night_teacher_give_up_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_resolve",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"너를 좋아하는 마음이 진짜라서… 그래서 무서운 거야.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"It's because my feelings are real... that's what scares me.\""
            }
        }
    },
    "day4_night_teacher_resolve": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "next": "day4_night_teacher_resolve_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…있잖아.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...You know what?\""
            }
        }
    },
    "day4_night_teacher_resolve_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "next": "day4_night_teacher_resolve_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"나 결심했어. 교사 자리 따위 잃어도 상관없어.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "I've made up my mind. I don't care if I lose my position as a teacher."
            }
        }
    },
    "day4_night_teacher_resolve_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "night": true,
        "next": "day4_night_teacher_resolve_4",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"만약 들키면… 널 아무도 못 보는 내 방에 가둬버릴 거야. 그럼 평생 나만 볼 수 있겠지?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "If we get caught... I'll lock you in my room where no one can see you. Then only I can see you forever, right?"
            }
        }
    },
    "day4_night_teacher_resolve_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "night": true,
        "next": "day4_night_teacher_resolve_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"……선생님?\""
            },
            "en": {
                "name": "Me",
                "text": "......Teacher?"
            }
        }
    },
    "day4_night_teacher_resolve_end": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "night": true,
        "setFlag": "day4_teacher_secret_shared",
        "next": "day4_night_teacher_farewell",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"농담 아니야. 넌 이제 내 공범이니까. 절대 못 빠져나가.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "I'm not joking. You're my accomplice now. You can never get out."
            }
        }
    },
    "day4_night_teacher_farewell": {
        "character": "assets/images/characters/teacher_smile.png",
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "day4_night_teacher_farewell_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*카페를 나왔다. 밤거리를 나란히 걸었다. 선생님이 내 손을 깍지 껴 잡고 놓아주지 않았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We left the cafe. We walked side by side on the night street. The teacher intertwined her fingers with mine and wouldn't let go.*"
            }
        }
    },
    "day4_night_teacher_farewell_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_farewell_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…학교에서는 다시 엄격한 선생님인 척할 거야. 다른 애들이 눈치채면 안 되니까.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "...I'll pretend to be a strict teacher again at school. We can't let the other kids notice."
            }
        }
    },
    "day4_night_teacher_farewell_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_farewell_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"비밀 연애네요.\""
            },
            "en": {
                "name": "Me",
                "text": "A secret romance."
            }
        }
    },
    "day4_night_teacher_farewell_4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_farewell_5",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"응. 그러니까… 학교에서 다른 여자애들이랑 너무 친하게 지내지 마.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "Yeah. So... don't get too close to other girls at school."
            }
        }
    },
    "day4_night_teacher_farewell_5": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_smile.png",
        "night": true,
        "next": "day4_night_teacher_farewell_6",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"선생님 권한으로 널 어떻게 괴롭힐지 모르니까. 알았지?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "You never know how I might torment you using my authority as a teacher. Got it?"
            }
        }
    },
    "day4_night_teacher_farewell_6": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_home",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…내일 봐. 나의 공범.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "...See you tomorrow. My accomplice."
            }
        }
    },
    "day4_night_teacher_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "day4_night_teacher_home_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집에 돌아왔다. 카페에서의 선생님 모습이 떠오른다. 항상 당당하고 완벽했던 선생님이… 한 명의 여자로서 보여준 눈물과 떨림.*"
            },
            "en": {
                "name": "Me",
                "text": "*Back home. The image of her at the café keeps coming back to me. The always confident, perfect teacher... showing her tears and vulnerability as just a woman.*"
            }
        }
    },
    "day4_night_teacher_home_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "fade": true,
        "next": "day4_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이 비밀은 무겁지만… 그만큼 소중하다. 선생님의 그 마음을 절대 가볍게 여기지 않을 거다.*"
            },
            "en": {
                "name": "Me",
                "text": "*This secret is daunting... but it's precious. I'll never take her feelings lightly.*"
            }
        }
    },
    "day4_night_nurse_msg": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "bgm": "night1.mp3",
        "next": "day4_night_nurse_msg_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*밤 10시. 보건선생님한테 메시지가 왔다. '아직 안 잤지? 시간 되면 잠깐 나올 수 있어?'*"
            },
            "en": {
                "name": "Me",
                "text": "*10 PM. A message from the nurse. 'Still up? Can you come out for a bit if you have time?'*"
            }
        }
    },
    "day4_night_nurse_msg_2": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_nurse_msg_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…평소처럼 장난스러운 메시지인데, 왜 이 시간에? 뭔가 이상하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...Her usual playful message, but why this late? Something feels off.*"
            }
        }
    },
    "day4_night_nurse_msg_3": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_nurse_msg_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*곧바로 답장했다. '어디로 가면 돼요?'*"
            },
            "en": {
                "name": "Me",
                "text": "*I replied right away. 'Where should I go?'*"
            }
        }
    },
    "day4_night_nurse_msg_4": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_nurse_arrive",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*'학교 보건실. 뒷문 열어둘게.' …보건실에서?*"
            },
            "en": {
                "name": "Me",
                "text": "*'The nurse's office at school. I'll leave the back door open.' ...The nurse's office?*"
            }
        }
    },
    "day4_night_nurse_arrive": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_arrive_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학교에 도착했다. 보건실 문을 열자, 작은 스탠드 하나만 켜진 어두운 방 안에 선생님이 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I arrived at the school. When I opened the nurse's office door, the room was dark with only a small lamp on. She was there.*"
            }
        }
    },
    "day4_night_nurse_arrive_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_arrive_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"와, 진짜 나왔네. 한밤중에 불러내도 와주는 거야?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Wow, you actually came. Even though I called you out this late?\""
            }
        }
    },
    "day4_night_nurse_arrive_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_nurse_tired",
                "stats": {
                    "Nurse": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day4_night_nurse_real_reason",
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
                "text": "*평소처럼 장난스럽게 웃고 있는데… 눈 밑에 다크서클이 짙다. 그리고 책상 위에 빈 커피캔이 여러 개.*",
                "choices": [
                    "\"선생님, 많이 피곤해 보여요\"",
                    "\"진짜 이유가 뭐예요?\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*She's smiling as usual, but... there are dark circles under her eyes. And several empty coffee cans on the desk.*",
                "choices": [
                    "\"You look really tired\"",
                    "\"What's the real reason you called me here?\""
                ]
            }
        }
    },
    "day4_night_nurse_tired": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_mask",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"그래? 요즘 좀 정신없었나 봐. 괜찮아, 별거 아니야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Think so? It's been a hectic week. I'm fine though, really.\""
            }
        }
    },
    "day4_night_nurse_real_reason": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_mask",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…진짜 이유? …보고 싶었으니까.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...The real reason? ...I wanted to see you.\""
            }
        }
    },
    "day4_night_nurse_mask": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_mask_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 웃고 있지만, 어딘가 무리하고 있다는 느낌이 든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*She's smiling, but something feels forced. Like she's pushing too hard.*"
            }
        }
    },
    "day4_night_nurse_mask_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_mask_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…있잖아, 오늘 학교에서 좀 힘든 일이 있었어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Actually, something kind of tough happened at school today.\""
            }
        }
    },
    "day4_night_nurse_mask_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_mask_4",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"다른 선생님들이 그러더라. '보건 선생님은 항상 밝아서 좋겠다, 고민 없어 보인다'고.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"The other teachers said, 'The nurse is always so cheerful—must be nice having no worries.'\""
            }
        }
    },
    "day4_night_nurse_mask_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_mask_5",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…고민 없어 보인다. 하하. 그 말이 제일 아팠어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...'No worries.' Haha. That one... actually stung the most.\""
            }
        }
    },
    "day4_night_nurse_mask_5": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_mask_6",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"나도 힘든데… 아무도 안 물어보더라. '괜찮아?' 한마디.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"I was struggling too... but nobody asked. Not even once. Not a single 'are you okay?'\""
            }
        }
    },
    "day4_night_nurse_mask_6": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_lonely",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"보건실에 아이들이 올 때마다 웃어주고, 다독여주고. 근데… 나는 누가 다독여주지?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"In the nurse's office, kids come in and I smile for them, take care of them. But... who takes care of me?\""
            }
        }
    },
    "day4_night_nurse_lonely": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_lonely_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…집에 가면 아무도 없어. 혼자 사니까.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...When I go home, there's nobody. I live alone.\""
            }
        }
    },
    "day4_night_nurse_lonely_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_lonely_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"그래서… 자꾸 학교에 늦게까지 남게 되더라. 이 보건실이라도 있으면 외롭지 않으니까.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"So... I started staying late at school. At least in this nurse's office, I don't feel so alone.\""
            }
        }
    },
    "day4_night_nurse_lonely_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_lonely_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 웃음을 멈췄다. 처음으로 장난기 없는, 진짜 얼굴을 보여주고 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Her smile faded. For the first time, she's showing me her real face—without the jokes, without the teasing.*"
            }
        }
    },
    "day4_night_nurse_lonely_choice": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_nurse_hug",
                "stats": {
                    "Nurse": {
                        "affinity": 20
                    }
                },
                "setFlag": "day4_hugged_nurse"
            },
            {
                "next": "day4_night_nurse_care",
                "stats": {
                    "Nurse": {
                        "affinity": 15
                    }
                },
                "setFlag": "day4_nurse_cared"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 진짜 모습이 보인다. 뭐라고 해야 할까.*",
                "choices": [
                    "옆에 앉아서 안아준다",
                    "\"이제는 제가 선생님을 돌봐드릴게요\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*I can see the real her now. What do I say?*",
                "choices": [
                    "Sit beside her and hold her",
                    "\"From now on, I'll be the one to take care of you\""
                ]
            }
        }
    },
    "day4_night_nurse_hug": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_hug_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"……!!\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"......!!\""
            }
        }
    },
    "day4_night_nurse_hug_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_hug_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…야, 갑자기… 뭐야…\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Hey, all of a sudden... what are you...\""
            }
        }
    },
    "day4_night_nurse_hug_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_hug_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 처음에는 당황했지만… 곧 내 옷을 꼭 쥐었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*She was startled at first... but soon her hands gripped my clothes tightly.*"
            }
        }
    },
    "day4_night_nurse_hug_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_hug_5",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…이상해. 내가 남한테 안기고 싶었던 적이 있었나.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...This is weird. Have I ever wanted someone to hold me like this before?\""
            }
        }
    },
    "day4_night_nurse_hug_5": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_truth",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…조금만 이러고 있자. 조금만.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Let's just stay like this. Just a little while.\""
            }
        }
    },
    "day4_night_nurse_care": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_care_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…뭐? 네가 나를?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...What? You'll take care of me?\""
            }
        }
    },
    "day4_night_nurse_care_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_care_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"선생님은 항상 다른 사람을 돌보잖아요. 이제는 돌봄 받을 차례예요.\""
            },
            "en": {
                "name": "Me",
                "text": "\"You always take care of everyone else. It's your turn to be taken care of.\""
            }
        }
    },
    "day4_night_nurse_care_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_care_4",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…하하. 어쩜 이렇게 정곡을 찌르니.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Ha. How do you always hit me right where it hurts?\""
            }
        }
    },
    "day4_night_nurse_care_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_truth",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…진짜 그래줄 거야?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Do you really mean that?\""
            }
        }
    },
    "day4_night_nurse_truth": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_truth_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…사실 나, 보건 교사가 된 이유가 있어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Actually, there's a reason I became a school nurse.\""
            }
        }
    },
    "day4_night_nurse_truth_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_truth_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"고등학교 때, 친한 친구가 아파서 오래 결석했거든. 그때 보건실 선생님이 정말 잘 챙겨줬어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"In high school, a close friend of mine got sick and was absent for a long time. The school nurse back then really took care of her.\""
            }
        }
    },
    "day4_night_nurse_truth_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_truth_4",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"나도 그런 사람이 되고 싶었어. 아픈 아이들의 편이 되어주는 사람.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"I wanted to be someone like that too. Someone who's there for kids when they're hurting.\""
            }
        }
    },
    "day4_night_nurse_truth_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_truth_5",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"근데 막상 되고 보니까… '보건 선생님은 장난이나 치는 사람' 취급이더라.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"But in reality... they just saw me as 'the nurse who jokes around.' Not a real teacher.\""
            }
        }
    },
    "day4_night_nurse_truth_5": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_truth_6",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"진지하게 굴면 분위기 망친다고 하니까… 자연스럽게 웃음으로 감추게 됐어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"They said being serious would ruin the vibe, so... I naturally started hiding behind laughs.\""
            }
        }
    },
    "day4_night_nurse_truth_6": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_truth_choice",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…너한테도 그랬어. 장난치면서 다가갔지. 진심을 보여주는 게… 무서웠으니까.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...I did the same with you. Approaching you with jokes and teasing. Because showing my real feelings... was terrifying.\""
            }
        }
    },
    "day4_night_nurse_truth_choice": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_nurse_accept_all",
                "stats": {
                    "Nurse": {
                        "affinity": 20
                    }
                }
            },
            {
                "next": "day4_night_nurse_thanks",
                "stats": {
                    "Nurse": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "day4_night_nurse_safe",
                "stats": {
                    "Nurse": {
                        "affinity": 18
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 목소리가 떨리고 있다.*",
                "choices": [
                    "\"장난치는 선생님도, 지금의 선생님도 다 좋아요\"",
                    "\"진심을 보여줘서 고마워요\"",
                    "\"이제 안 무서워해도 돼요. 제가 있으니까\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Her voice is trembling.*",
                "choices": [
                    "\"I love the playful you and the real you—all of it\"",
                    "\"Thank you for showing me the real you\"",
                    "\"You don't have to be scared anymore. I'm here\""
                ]
            }
        }
    },
    "day4_night_nurse_accept_all": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_accept_all_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…다 좋다고?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...All of it?\""
            }
        }
    },
    "day4_night_nurse_accept_all_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_accept_all_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…그렇게 말해주는 사람은 네가 처음이야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...You're the first person who's ever said that to me.\""
            }
        }
    },
    "day4_night_nurse_accept_all_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_resolve",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…처음이라서 어떻게 반응해야 할지 모르겠네.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...I don't even know how to react. This is a first.\""
            }
        }
    },
    "day4_night_nurse_thanks": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_thanks_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…고맙다고? 내가?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Thankful? To me?\""
            }
        }
    },
    "day4_night_nurse_thanks_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_resolve",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…너한테 진심을 보여주는 게 이렇게 편할 줄 몰랐어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...I didn't know being honest with you could feel this comfortable.\""
            }
        }
    },
    "day4_night_nurse_safe": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_safe_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…안 무서워해도 된다고?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...I don't have to be scared?\""
            }
        }
    },
    "day4_night_nurse_safe_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_resolve",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…어쩌면 너한테가 제일 편한 건지 모르겠다. 이상하게.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Maybe you're the person I feel most at ease with. Funny how that works.\""
            }
        }
    },
    "day4_night_nurse_resolve": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_resolve_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…있잖아.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...You know what?\""
            }
        }
    },
    "day4_night_nurse_resolve_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_resolve_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"이제부터 너한테는 가면 안 쓸게. 대신… 널 영원히 이 보건실에 가둬두고 싶어.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "I won't wear a mask in front of you anymore. Instead... I want to lock you in this infirmary forever."
            }
        }
    },
    "day4_night_nurse_resolve_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_resolve_4",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"내가 평생 간호해 줄 테니까… 네가 계속 아팠으면 좋겠어. 나만 의지하게.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "I'll nurse you for the rest of my life... so I want you to keep being sick. So you only rely on me."
            }
        }
    },
    "day4_night_nurse_resolve_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_resolve_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"……선생님?\""
            },
            "en": {
                "name": "Me",
                "text": "......Teacher?"
            }
        }
    },
    "day4_night_nurse_resolve_end": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "setFlag": "day4_nurse_mask_off",
        "next": "day4_night_nurse_farewell",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"농담이야. …반쯤은. 그러니까 다치면 무조건 나한테 와. 다른 데 가면 진짜 화낼 거야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "I'm joking. ...Half joking. So if you get hurt, come straight to me. If you go anywhere else, I'll be really mad."
            }
        }
    },
    "day4_night_nurse_farewell": {
        "character": "assets/images/characters/nurse_shy.png",
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "day4_night_nurse_farewell_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건실을 나와서 학교 밖으로 걸었다. 선생님이 내 팔짱을 꽉 끼고 놓아주지 않았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We left the infirmary and walked out of the school. The teacher linked her arm tightly with mine and wouldn't let go.*"
            }
        }
    },
    "day4_night_nurse_farewell_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_farewell_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…내일 학교 오면, 제일 먼저 보건실부터 들러. 출석 체크할 거니까.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "...When you come to school tomorrow, drop by the infirmary first. I'll be checking attendance."
            }
        }
    },
    "day4_night_nurse_farewell_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_farewell_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"찌질한 게 아니라 솔직한 거예요.\""
            },
            "en": {
                "name": "Me",
                "text": "\"That wasn't uncool—that was honest.\""
            }
        }
    },
    "day4_night_nurse_farewell_4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_farewell_5",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…하. 너 앞에서는 자꾸 솔직해지는 게 신기해. 나답지 않게.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...It's strange. Around you, I keep getting honest. That's not like me at all.\""
            }
        }
    },
    "day4_night_nurse_farewell_5": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_farewell_6",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…다음에 학교에서 보면 또 평소처럼 굴 거야. 근데 눈은 속이지 못할걸.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...When we see each other at school again, I'll act normal. But my eyes won't be able to hide it.\""
            }
        }
    },
    "day4_night_nurse_farewell_6": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_home",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…그러니까 잘 봐. 보건실 앞을 지나갈 때… 한 번쯤은.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...So pay attention. When you walk past the nurse's office... just once.\""
            }
        }
    },
    "day4_night_nurse_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "day4_night_nurse_home_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집에 돌아왔다. 보건실에서 본 선생님의 진짜 얼굴이 떠오른다. 항상 장난치며 웃던 사람이… 사실은 가장 외로웠던 사람.*"
            },
            "en": {
                "name": "Me",
                "text": "*Back home. The real face she showed me in the nurse's office keeps replaying. The person who was always joking and laughing... was actually the loneliest one of all.*"
            }
        }
    },
    "day4_night_nurse_home_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "fade": true,
        "next": "day4_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이제는 선생님이 혼자가 아니다. 내가 옆에 있으니까. 내일은 진짜 웃음을 볼 수 있겠지.*"
            },
            "en": {
                "name": "Me",
                "text": "*She's not alone anymore. I'm here. Tomorrow, I want to see her real smile.*"
            }
        }
    },
    "day4_night_regret": {
        "night": true,
        "next": "day4_night_regret_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…오늘 말할 수 있었는데. 그 석양 아래서, 완벽한 순간이었는데.*"
            },
            "en": {
                "name": "Me",
                "text": "*...I could have said it today. Under that sunset, it was the perfect moment.*"
            }
        }
    },
    "day4_night_regret_2": {
        "night": true,
        "next": "day4_night_regret_msg",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*괜찮아. 내일이 있으니까. 내일은 반드시… 마음을 전하자.*"
            },
            "en": {
                "name": "Me",
                "text": "*It's okay. There's tomorrow. Tomorrow, I'll definitely... tell them how I feel.*"
            }
        }
    },
    "day4_night_regret_msg": {
        "night": true,
        "next": "day4_night_regret_reply",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(핸드폰에 메시지가 왔다. \"오늘 즐거웠어. 내일도 시간 괜찮아?\")"
            },
            "en": {
                "name": "Me",
                "text": "(A message came on my phone. \"I had fun today. Are you free tomorrow too?\")"
            }
        }
    },
    "day4_night_regret_reply": {
        "night": true,
        "next": "day4_night_sleep",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"응, 내일도 만나자.\" 꼭 내일은 말할 거야.)"
            },
            "en": {
                "name": "Me",
                "text": "(\"Yeah, let's meet tomorrow.\" I'll definitely say it tomorrow.)"
            }
        }
    },
    "day4_night_reflect": {
        "night": true,
        "next": "day4_night_sleep",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*토요일이 이렇게 지나갔다. 내일은… 뭘 하지?*"
            },
            "en": {
                "name": "Me",
                "text": "*And just like that, Saturday passed. Tomorrow... what should I do?*"
            }
        }
    },
    "day4_night_sleep": {
        "night": true,
        "fade": true,
        "next": "day4_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 감으면 그 사람의 얼굴이 떠오른다. 이대로 잠들어도 좋겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*When I close my eyes, their face appears. I wouldn't mind falling asleep like this.*"
            }
        }
    },
    "day4_final": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "changeDay": 5,
        "next": "day5_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*토요일 밤이 깊어간다... 내일은 일요일, 마지막 날이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Saturday night deepens... Tomorrow is Sunday, the last day.*"
            }
        }
    }
});
