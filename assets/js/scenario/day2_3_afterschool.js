/**
 * ============================================================================
 * CUPID - day2_3_afterschool (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day2_3_afterschool.js + en_day2_3_afterschool.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[2]) SCENARIO[2] = {};

Object.assign(SCENARIO[2], {
    "day2_afternoon_class": {
        "background": "assets/images/background/room_school.png",
        "bgm": "sunset2.mp3",
        "character": null,
        "sunset": true,
        "next": "day2_after_school",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*지루한 오후 수업 끝. 창가로 스며드는 붉은 노을이 교실을 감성적으로 물들인다. 이제 자유시간인가...*"
            },
            "en": {
                "name": "Me",
                "text": "*School's finally over. The red sunset filtering through the window paints the classroom in a sentimental glow. Is it free time now...?*"
            }
        }
    },
    "day2_afternoon_nurse_skip": {
        "background": "assets/images/background/nurse_room.jpg",
        "bgm": "sunset2.mp3",
        "character": null,
        "sunset": true,
        "setFlag": "woke_up_in_nurse_room",
        "next": "day2_after_school",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건실 침대에서 눈을 뜨니 어느덧 노을이 지고 있다. 수업은 다 빠졌지만, 선생님 옆에서 푹 자고 일어났더니 몸이 가볍다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I wake up on the infirmary bed to find the sun setting. I skipped all my classes, but waking up after a long nap next to the teacher makes my body feel light.*"
            }
        }
    },
    "day2_after_school": {
        "background": "assets/images/background/school_hallway.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_after_seoyeon"
            },
            {
                "next": "day2_after_yuna",
                "condition": "met_yuna"
            },
            {
                "next": "day2_after_yuna",
                "excludeCondition": "met_yuna"
            },
            {
                "next": "day2_after_dain",
                "condition": "met_dain"
            },
            {
                "next": "day2_after_dain",
                "excludeCondition": "met_dain"
            },
            {
                "next": "day2_after_nurse_stay",
                "condition": "woke_up_in_nurse_room"
            },
            {
                "next": "day2_after_nurse",
                "excludeCondition": "woke_up_in_nurse_room"
            },
            {
                "next": "day2_after_teacher"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어제보다 훨씬 익숙해진 복도. 오늘은 어떤 떨림이 나를 기다리고 있을까? 발길 닿는 대로 가보자.*",
                "choices": [
                    "함께 노을을 보고 싶은 서연이를 찾아가 본다.",
                    "유나와 함께 학교의 깊은 비밀 속으로 들어간다.",
                    "비밀스러운 쪽지를 남긴 그녀, 유나를 찾아본다.",
                    "땀방울이 아름다운 다인이의 연습을 도우러 간다.",
                    "활기가 넘치는 체육관, 다인의 목소리를 찾아간다.",
                    "나를 간호해준 선생님과 좀 더 대화를 나눈다.",
                    "은은한 약 냄새가 나는 보건실, 선생님을 보러 간다.",
                    "인자한 담임선생님이 계신 교무실로 발길을 옮긴다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The hallway feels much more familiar than yesterday. What kind of heart-pounding moments are waiting for me today? Let's go where my heart leads.*",
                "choices": [
                    "Go find Seoyeon to watch the sunset together.",
                    "Dive into the school's deep secrets with Yuna.",
                    "Search for Yuna, the mysterious girl who left the note.",
                    "Go help Dain practice, her sweat beads looking beautiful.",
                    "Head to the lively gym, searching for Dain's voice.",
                    "Talk more with the teacher who took care of me.",
                    "Go to the infirmary, scented with faint medicine, to see the teacher.",
                    "Head to the faculty room to see my kind homeroom teacher."
                ]
            }
        }
    },
    "day2_after_nurse_stay": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_after_nurse_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다시 보건실로 발걸음을 옮겼다. 선생님은 여전히 자리에 앉아 계신다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I headed back to the infirmary. The nurse is still sitting in her seat.*"
            }
        }
    },
    "day2_after_seoyeon": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day2_after_seoyeon_work",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학생회실. 서연이와 함께 서류를 정리하기 시작했다. 전학 온 지 얼마 안 된 나에게 서연이는 친절하게 업무를 가르쳐주었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Student Council Room. I started helping Seoyeon organize documents. She kindly explains the work to me, a newcomer.*"
            }
        }
    },
    "day2_after_seoyeon_work": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day2_after_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와 함께 집중해서 서류를 정리하다 보니 창밖이 붉은 노을빛으로 물들어 있다. 학생회실 안에는 우리 둘의 숨소리와 종이 넘기는 소리만 가득하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Lost in work with Seoyeon, the window outside is bathed in crimson sunset light. The room is filled only with our breathing and the sound of paper.*"
            }
        }
    },
    "day2_after_seoyeon_2": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day2_after_seoyeon_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"휴... 드디어 끝났네. {name}, 이렇게까지 도와줘서 정말 고마워. 너 아니었으면 오늘 안에 다 못 끝냈을 거야.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Phew... finished at last. {name}, thank you so much for helping this much. I wouldn't have finished this today without you.\""
            }
        }
    },
    "day2_after_seoyeon_3": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_seoyeon_why",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day2_seoyeon_home",
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 25,
                        "next": "day2_seoyeon_home_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "day2_seoyeon_home"
                    },
                    {
                        "minAffinity": -100,
                        "next": "day2_seoyeon_home_low"
                    }
                ],
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day2_seoyeon_massage",
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 25,
                        "next": "day2_seoyeon_massage_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "day2_seoyeon_massage"
                    },
                    {
                        "minAffinity": -100,
                        "next": "day2_seoyeon_massage_low"
                    }
                ],
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
                "text": "*서연이가 기지개를 켜며 살짝 웃는다. 피곤해 보이지만 눈빛은 어느 때보다 맑고 예쁘다.*",
                "choices": [
                    "서연이는 왜 그렇게 매사에 진심이고 열심히야?",
                    "이젠 그만 쉬자. 집까지 내가 꼭 데려다줄게.",
                    "많이 뭉쳤네. 자, 잠깐만 가만히 있어 봐."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon stretches with a soft smile. She looks tired, but her eyes are clearer and more beautiful than ever.*",
                "choices": [
                    "Seoyeon, why are you always so sincere and hardworking?",
                    "Let's rest now. I'll make sure to walk you home.",
                    "Your shoulders look tense. Here, stay still for a second."
                ]
            }
        }
    },
    "day2_seoyeon_why": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "day2_seoyeon_night_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"음... 그냥, 누군가는 해야 할 일이니까. 그리고 내가 최선을 다하면 학교가 조금이라도 좋아지지 않을까 싶어서.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Well... it's just something that needs to be done. And I hope that if I do my best, the school might improve, even if just a little.\""
            }
        }
    },
    "day2_seoyeon_home_high": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "sunset": true,
        "next": "day2_seoyeon_night_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"정말...? (서연이가 환하게 웃으며 내 팔을 살며시 잡는다) 사실 {name}이랑 같이 가고 싶었어. 오늘 노을이 정말 예쁘다...\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Really...? (Seoyeon smiles brightly and gently takes my arm) Honestly, I wanted to walk with you, {name}. The sunset is so beautiful...\""
            }
        }
    },
    "day2_seoyeon_home": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "day2_seoyeon_night_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"어...? 데려다준다고? 아... 음, 그래주면 나야 고맙지만...\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh...? Walk me home? Ah... well, I'd be very grateful if you did...\""
            }
        }
    },
    "day2_seoyeon_home_low": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": -8
            }
        },
        "next": "day2_seoyeon_night_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"아.. 괜찮아, 혼자 갈 수 있어. 오늘 도와줘서 고마웠어.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh.. it's okay, I can go alone. Thanks for helping today though.\""
            }
        }
    },
    "day2_seoyeon_massage_high": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "sunset": true,
        "next": "day2_seoyeon_night_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"으응... {name}... (서연이가 기분 좋게 눈을 감고 몸을 맡긴다) 정말 시원해... 네 손이 이렇게 따뜻한 줄 몰랐어. 조금만 더...\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Mmm... {name}... (Seoyeon happily closes her eyes and leans into it) That feels so good... I didn't know your hands were so warm. Just a little more...\""
            }
        }
    },
    "day2_seoyeon_massage": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "day2_seoyeon_night_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"앗... {name}! 갑자기 이러면... (서연의 몸이 움찔하더니 이내 긴장을 풀고 눈을 감는다) ...시원하다. 고마워.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Ah... {name}! So suddenly... (She flinches for a moment, but soon relaxes and closes her eyes) ...That feels great. Thank you.\""
            }
        }
    },
    "day2_seoyeon_massage_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": -10
            }
        },
        "next": "day2_seoyeon_night_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 황급히 몸을 빼며 불편한 표정을 짓는다* \"갑자기 뭐야... 좀 불편해.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon quickly pulls away, looking uncomfortable* \"What was that...? It's a bit uncomfortable.\""
            }
        }
    },
    "day2_seoyeon_night_talk": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "setFlag": "day2_met_seoyeon_after",
        "next": "day2_seoyeon_dain_encounter",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"{name}... 오늘 정말 고마웠어. 너랑 있으면 힘든 일도 다 잊게 돼. 우리... 내일도 같이 점심 먹을래?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"{name}... thank you so much for today. When I'm with you, all my tired thoughts vanish. Should we... have lunch together tomorrow too?\""
            }
        }
    },
    "day2_seoyeon_dain_encounter": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_seoyeon_dain_met",
                "condition": "day2_met_dain_lunch"
            },
            {
                "next": "day2_seoyeon_dain_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와 함께 학생회실을 나서는데, 복도에서 누군가와 마주쳤다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As we leave the student council room together, we bump into someone in the corridor.*"
            }
        }
    },
    "day2_seoyeon_dain_met": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_laugh.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_react",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오? 아까 매점에서 본 애! {name} 아니야! 와, 학생회장이랑 같이 있네?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh? You're the one from the snack bar earlier! {name}! Wow, hanging out with the student council president?\""
            }
        }
    },
    "day2_seoyeon_dain_new": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_laugh.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_react",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "\"어? 너 혹시 전학생? 우와, 학생회장님이랑 벌써 친해진 거야?\""
            },
            "en": {
                "name": "???",
                "text": "\"Huh? Are you the transfer student? Whoa, already friends with the council president?\""
            }
        }
    },
    "day2_seoyeon_dain_react": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_laugh.png"
        },
        "sunset": true,
        "setFlag": "knows_name_dain",
        "next": "day2_seoyeon_dain_choice",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"(서연이가 살짝 당황한 표정을 짓는다) ...정다인 학생? 어, 안녕. 우리 그냥 일 끝났으니까 가려던 참이야.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"(Seoyeon looks slightly flustered) ...Dain, right? Hi. We just finished work, so we were heading out.\""
            }
        }
    },
    "day2_seoyeon_dain_choice": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_laugh.png"
        },
        "sunset": true,
        "choices": [
            {
                "next": "day2_seoyeon_dain_yes",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    },
                    "Seoyeon": {
                        "affinity": -2
                    }
                }
            },
            {
                "next": "day2_seoyeon_dain_no",
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
                "next": "day2_seoyeon_dain_both",
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
                "name": "다인",
                "text": "\"아, 그래? 난 연습 끝나고 가는 길이야! {name}, 다음엔 나랑도 놀아줘~!\"",
                "choices": [
                    "응, 다음에 꼭!",
                    "오늘은 서연이랑 약속이 있어서...",
                    "*애매하게 웃으며* 둘 다 만나면 좋겠는데."
                ]
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh, really? I just finished practice! {name}, hang out with me next time too!\"",
                "choices": [
                    "Sure, definitely!",
                    "I have plans with Seoyeon today, so...",
                    "*Smile vaguely* It'd be nice to hang out with both of you."
                ]
            }
        }
    },
    "day2_seoyeon_dain_yes": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_laugh.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"약속이다! 그럼 내일 보자, {name}!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"It's a promise! See you tomorrow, {name}!\""
            }
        }
    },
    "day2_seoyeon_dain_no": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_normal.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"에이~ 섭섭하네. 그래도 다음엔 꼭 놀아줘!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Aww, that's disappointing. But promise me next time!\""
            }
        }
    },
    "day2_seoyeon_dain_both": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_normal.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_both_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*순간 서연이와 다인이의 표정이 동시에 굳는다. 뭔가 잘못 말한 건가...?*"
            },
            "en": {
                "name": "Me",
                "text": "*Both Seoyeon's and Dain's expressions freeze at the same time. Did I say something wrong...?*"
            }
        }
    },
    "day2_seoyeon_dain_both_2": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_pout.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_both_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"...뭐야, 둘 다? 그게 무슨 말이야?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...What? Both of us? What's that supposed to mean?\""
            }
        }
    },
    "day2_seoyeon_dain_both_3": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_pout.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_both_4",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"(서연이가 차갑게 웃는다) 후훗... {name}은 참 인기가 많구나? 여기저기 다 좋다고 하고 다니는 타입인가 봐.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"(Seoyeon smiles coldly) Heh... {name} sure is popular, huh? The type who says yes to everyone, I guess.\""
            }
        }
    },
    "day2_seoyeon_dain_both_4": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_normal.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_both_5",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"에이, 학생회장님도. 근데 맞는 말이긴 하네? {name}, 너 그러다 둘 다 놓친다?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh come on, Miss President. But she's got a point though? {name}, you might end up losing both of us like that.\""
            }
        }
    },
    "day2_seoyeon_dain_both_5": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_normal.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*두 사람이 묘하게 서로를 의식하며 나를 바라본다. 분위기가 싸해졌다...*"
            },
            "en": {
                "name": "Me",
                "text": "*The two of them exchange glances while staring at me. The atmosphere just got really awkward...*"
            }
        }
    },
    "day2_seoyeon_dain_end": {
        "sunset": true,
        "branches": [
            {
                "next": "day2_end",
                "condition": "has_number_seyoun"
            },
            {
                "next": "day2_seoyeon_contact_ask"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 손을 흔들며 멀어졌다. 서연이의 표정이 왜인지 살짝 굳어 있는 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain waves and walks away. Seoyeon's expression seems slightly stiff for some reason.*"
            }
        }
    },
    "day2_seoyeon_contact_ask": {
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_seoyeon_contact_success",
                "setFlags": [
                    "has_number_seyoun",
                    "has_any_contact"
                ]
            },
            {
                "next": "day2_seoyeon_contact_fail"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"아, 맞다! 아직 연락처를 못 물어봤네. 전하고 싶은 말이 계속 생길 것 같아서... 괜찮다면 번호 알려줄래?\"",
                "choices": [
                    "응, 언제든 연락해. 여기 내 번호야.",
                    "미안하지만 번호는 조금 더 친해지면 알려줄게."
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh, right! I haven't asked for your contact info yet. I have a feeling I'll keep wanting to talk to you... Can I have your number?\"",
                "choices": [
                    "Sure, contact me anytime. Here's my number.",
                    "Sorry, I'll give it to you when we're a bit closer."
                ]
            }
        }
    },
    "day2_seoyeon_contact_success": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"고마워! 그럼 진짜로 나중에 연락할게. 잘 가!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Thank you! I'll definitely message you later. Get home safe!\""
            }
        }
    },
    "day2_seoyeon_contact_fail": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": -10
            }
        },
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"아... 응, 알았어! 내가 너무 갑자기 물어봤지? 미안해. 그럼 내일 학교에서 봐!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh... right! I asked too suddenly, didn't I? Sorry. See you at school tomorrow!\""
            }
        }
    },
    "day2_after_yuna": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_after_yuna_met",
                "condition": "met_yuna"
            },
            {
                "next": "day2_after_yuna_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*도서관 별관. 낡은 건물 안으로 들어서자 서늘한 공기가 나를 감싼다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Library Annex. As I enter the old building, a cool draft of air surrounds me.*"
            }
        }
    },
    "day2_after_yuna_met": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_after_yuna_follow_again",
                "condition": "visited_warehouse_at_lunch"
            },
            {
                "next": "day2_after_yuna_follow_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"왔구나. 자, 나를 따라와. 보여줄 게 있어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"You're here. Come, follow me. I have something to show you.\""
            }
        }
    },
    "day2_after_yuna_new": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "setFlag": "met_yuna",
        "next": "day2_after_yuna_new_name_ask",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "\"너... 내가 누군지 궁금해서 온 거지? 사실 이 학교에는 아주 깊은 비밀이 있어.\""
            },
            "en": {
                "name": "???",
                "text": "\"You... you came because you're curious about me, right? This school hides a very deep secret.\""
            }
        }
    },
    "day2_after_yuna_new_name_ask": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day2_after_yuna_new_name_share",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"난 유나야. 네 이름은 뭐야?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"I'm Yuna. What's your name?\""
            }
        }
    },
    "day2_after_yuna_new_name_share": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "setFlag": "knows_name_yuna",
        "next": "day2_after_yuna_new_follow",
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
    "day2_after_yuna_new_follow": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_after_yuna_follow_again",
                "condition": "visited_warehouse_at_lunch"
            },
            {
                "next": "day2_after_yuna_follow_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"{name}... 기억해둘게. 자, 나를 따라와. 너한테만 보여줄 게 있으니까.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"{name}... I'll remember that. Come, follow me. I have something to show only you.\""
            }
        }
    },
    "day2_after_yuna_follow_again": {
        "background": "assets/images/background/school_basement.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_after_yuna_3_pre_again",
                "condition": "visited_warehouse_at_lunch"
            },
            {
                "next": "day2_after_yuna_3_pre_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나를 따라 다시 지하실 창고로 내려갔다. 아까보다 공기가 더 차갑게 느껴진다. 노을빛이 창문을 통해 스며들지만 지하실은 여전히 어두컴컴하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I follow Yuna back down to the basement warehouse. The air feels even colder than before. The sunset glow fades as we descend into the shadows.*"
            }
        }
    },
    "day2_after_yuna_follow_new": {
        "background": "assets/images/background/school_basement.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_after_yuna_3_pre_again",
                "condition": "visited_warehouse_at_lunch"
            },
            {
                "next": "day2_after_yuna_3_pre_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나를 따라 지하실의 먼지 쌓인 창고로 내려갔다. 기묘한 한기가 감도는 곳이다. 창문으로 노을빛이 희미하게 스며든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I follow Yuna down to a dusty warehouse in the basement. A strange chill hangs in the air. The sunset light barely reaches this deep.*"
            }
        }
    },
    "day2_after_yuna_3_pre_again": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day2_after_yuna_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"아까 봤던 그 문양들... 다시 보니 어때? 노을 질 때 보니까 더 기괴하지 않아?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Those symbols we saw earlier... what do you think now? Don't they look even more eerie in this dim light?\""
            }
        }
    },
    "day2_after_yuna_3_pre_new": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day2_after_yuna_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"봐, {name}. 이 벽에 새겨진 문양들... 내가 추적해온 이 학교의 비밀들과 일치해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Look, {name}. These patterns on the wall... they match the secrets of this school I've been tracking.\""
            }
        }
    },
    "day2_after_yuna_3": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_yuna_meaning",
                "stats": {
                    "Yuna": {
                        "affinity": 4
                    }
                }
            },
            {
                "next": "day2_yuna_scary",
                "affinityChar": "Yuna",
                "affinityBranches": [
                    {
                        "minAffinity": 20,
                        "next": "day2_yuna_scary_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "day2_yuna_scary"
                    },
                    {
                        "minAffinity": -100,
                        "next": "day2_yuna_scary_low"
                    }
                ],
                "stats": {
                    "Yuna": {
                        "affinity": 6
                    }
                }
            },
            {
                "next": "day2_yuna_eye",
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
                "text": "*유나가 손가락으로 벽의 틈새를 가리킨다. 그곳에는 붉은색으로 기묘한 눈 모양이 그려져 있다.*",
                "choices": [
                    "이게 대체 뭘 의미하는 거야?",
                    "*유나의 손을 잡으며* 무서우니까 이제 나가자.",
                    "이 눈... 꼭 우리를 지켜보고 있는 것 같아."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Yuna points to a crack in the wall. A strange, eye-like symbol is drawn there in reddish ink.*",
                "choices": [
                    "What does this even mean?",
                    "*Taking Yuna's hand* It's scary, let's get out of here.",
                    "This eye... it feels like it's watching us."
                ]
            }
        }
    },
    "day2_yuna_meaning": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day2_yuna_night_talk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"감시... 아니면 보호. 누구를 위한 것인지는 아직 알 수 없어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Surveillance... or protection. I still don't know who it's for.\""
            }
        }
    },
    "day2_yuna_scary_high": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day2_yuna_night_talk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나가 내 손을 꼭 잡으며 살며시 미소 짓는다.* \"...네 손, 따뜻해. 오랜만에 이런 온기를 느껴보네. 좋아, 나가자. 하지만... 손은 놓지 마.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna holds my hand tightly and smiles softly.* \"...Your hand is warm. It's been a long time since I felt such warmth. Okay, let's go. But... don't let go of my hand.\""
            }
        }
    },
    "day2_yuna_scary": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "day2_yuna_night_talk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...손이 따뜻하네. 알았어. 오늘은 이만 돌아가자.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Your hand is warm. Okay. Let's head back for today.\""
            }
        }
    },
    "day2_yuna_scary_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": -10
            }
        },
        "next": "day2_yuna_night_talk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나가 차갑게 손을 뿌리친다.* \"...갑자기 손은 왜 잡아? 무섭다고? 겁쟁이치고는 대담하네. 나가고 싶으면 혼자 나가.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna coldly pulls her hand away.* \"...Why are you grabbing my hand? Scared? You're quite bold for a coward. Leave alone if you want.\""
            }
        }
    },
    "day2_yuna_eye": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "day2_yuna_night_talk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"정답이야. 이 학교는 거대한 감옥이나 실험실일지도 몰라. 그리고 우린 그 안에서 무언가를 시험받고 있는 거고.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Correct. This school might be a giant prison or a laboratory. And we're being tested within it.\""
            }
        }
    },
    "day2_yuna_night_talk": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "setFlag": "day2_met_yuna_after",
        "next": "day2_yuna_nurse_encounter",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"이건... 단순한 낙서가 아니야. 이 학교의 설립 목적과 관련이 있어. {name}, 넌 이제 돌이킬 수 없는 길을 선택한 거야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"This isn't just graffiti. It's tied to the very purpose of this school. {name}, you've chosen a path with no turning back.\""
            }
        }
    },
    "day2_yuna_nurse_encounter": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_yuna_nurse_met",
                "condition": "met_nurse"
            },
            {
                "next": "day2_yuna_nurse_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나와 함께 창고를 나서는데, 복도에서 누군가와 마주쳤다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As we leave the warehouse with Yuna, we bump into someone in the corridor.*"
            }
        }
    },
    "day2_yuna_nurse_met": {
        "characters": {
            "left": "assets/images/characters/yuna_normal.png",
            "right": "assets/images/characters/nurse_normal.png"
        },
        "sunset": true,
        "next": "day2_yuna_nurse_react",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, {name}? 이 시간에 여긴 웬일이야? ...그리고 이 학생은...\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh my, {name}? What are you doing here at this hour? ...And who is this student?\""
            }
        }
    },
    "day2_yuna_nurse_new": {
        "characters": {
            "left": "assets/images/characters/yuna_normal.png",
            "right": "assets/images/characters/nurse_normal.png"
        },
        "sunset": true,
        "setFlags": [
            "met_nurse",
            "knows_name_nurse"
        ],
        "next": "day2_yuna_nurse_react",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "\"어머? 학생들이 이 시간에 여긴 웬일이야? 여기는 오래된 창고라 위험한데... 아, 난 보건선생님이야.\""
            },
            "en": {
                "name": "???",
                "text": "\"Hmm? Students at this hour, here? This old warehouse is dangerous... Oh, I'm the school nurse.\""
            }
        }
    },
    "day2_yuna_nurse_react": {
        "characters": {
            "left": "assets/images/characters/yuna_normal.png",
            "right": "assets/images/characters/nurse_normal.png"
        },
        "sunset": true,
        "next": "day2_yuna_nurse_choice",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"(유나가 차갑게 말한다) ...그냥 지나가는 길이에요. 신경 쓸 것 없어요.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"(Yuna speaks coldly) ...We were just passing by. Don't mind us.\""
            }
        }
    },
    "day2_yuna_nurse_choice": {
        "characters": {
            "left": "assets/images/characters/yuna_normal.png",
            "right": "assets/images/characters/nurse_normal.png"
        },
        "sunset": true,
        "choices": [
            {
                "next": "day2_yuna_nurse_protect",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    },
                    "Nurse": {
                        "affinity": -2
                    }
                }
            },
            {
                "next": "day2_yuna_nurse_excuse",
                "stats": {
                    "Nurse": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day2_yuna_nurse_silent",
                "stats": {
                    "Yuna": {
                        "affinity": 2
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"(보건선생님이 유나를 의미심장하게 바라본다) ...그래? 후훗, 조심해서 가렴. 어두운 곳에는 위험한 것들이 숨어 있으니까.\"",
                "choices": [
                    "*유나의 손을 잡고* 네, 조심할게요.",
                    "선생님, 저희 그냥 산책하던 거예요.",
                    "*아무 말 없이 목례만 한다*"
                ]
            },
            "en": {
                "name": "School Nurse",
                "text": "\"(The nurse looks at Yuna suspiciously) ...Is that so? Hehe, be careful. Dangerous things hide in dark places.\"",
                "choices": [
                    "*Hold Yuna's hand* Yes, we'll be careful.",
                    "Ma'am, we were just taking a walk.",
                    "*Just bow silently*"
                ]
            }
        }
    },
    "day2_yuna_nurse_protect": {
        "characters": {
            "left": "assets/images/characters/yuna_shy.png",
            "right": "assets/images/characters/nurse_normal.png"
        },
        "sunset": true,
        "next": "day2_yuna_nurse_end",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"(유나가 내 손을 살짝 꼭 쥐다) ...고마워.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"(Yuna squeezes my hand slightly) ...Thanks.\""
            }
        }
    },
    "day2_yuna_nurse_excuse": {
        "characters": {
            "left": "assets/images/characters/yuna_normal.png",
            "right": "assets/images/characters/nurse_normal.png"
        },
        "sunset": true,
        "next": "day2_yuna_nurse_end",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"그래? 후훗, 다음부터는 좀 더 밝은 곳으로 산책하렴. 선생님이 걱정되니까.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Is that so? Hehe, try walking somewhere brighter next time. I worry, you know.\""
            }
        }
    },
    "day2_yuna_nurse_silent": {
        "characters": {
            "left": "assets/images/characters/yuna_normal.png",
            "right": "assets/images/characters/nurse_normal.png"
        },
        "sunset": true,
        "next": "day2_yuna_nurse_end",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"(보건선생님이 의미심장한 눈빛으로 우리를 바라보다가 지나간다)\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"(The nurse watches us with a suspicious look, then walks away)\""
            }
        }
    },
    "day2_yuna_nurse_end": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_end",
                "condition": "has_number_yuna"
            },
            {
                "next": "day2_yuna_contact_ask"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...저 사람, 뭔가 이상해. 단순한 보건선생님이 아닌 것 같아. {name}, 조심해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...That person feels strange. She's not just a normal school nurse. {name}, be careful.\""
            }
        }
    },
    "day2_yuna_contact_ask": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_yuna_contact_success",
                "setFlags": [
                    "has_number_yuna",
                    "has_any_contact"
                ]
            },
            {
                "next": "day2_yuna_contact_fail",
                "stats": {
                    "Yuna": {
                        "affinity": -15
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"비밀을 공유하려면... 연락할 수단은 있어야겠지. 네 번호, 여기에 남겨줘.\"",
                "choices": [
                    "응, 좋아. 너에 대해 모든 걸 알고 싶어.",
                    "미안, 아직은 좀 조심스러워."
                ]
            },
            "en": {
                "name": "Yuna",
                "text": "\"If we're sharing secrets... we need a way to reach each other. Leave your number here.\"",
                "choices": [
                    "Sure. I want to know everything about you.",
                    "Sorry, I'm still a bit cautious."
                ]
            }
        }
    },
    "day2_yuna_contact_success": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 8
            }
        },
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...됐어. 이제 우린 연결된 거야. 내가 부르면... 언제든 와줘야 해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Done. Now we're connected. When I call... you must come, no matter what.\""
            }
        }
    },
    "day2_yuna_contact_fail": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...그래. 억지로 강요하진 않아. 하지만 기회는 자주 오지 않는다는 걸 명심해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Fine. I won't force you. But remember, opportunities are rare.\""
            }
        }
    },
    "day2_after_dain": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_after_dain_met",
                "condition": "met_dain"
            },
            {
                "next": "day2_after_dain_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*체육관 문을 열자, 활기찬 기합 소리와 함께 배구공 튀기는 소리가 들려온다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Opening the gym door, the energetic shouts and the sound of volleyballs bouncing greet me.*"
            }
        }
    },
    "day2_after_dain_met": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day2_after_dain_practice",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오! {name}! 마침 잘 왔다. 나 연습하는 것 좀 도와줄래?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh! {name}! Perfect timing. Can you help me with practice?\""
            }
        }
    },
    "day2_after_dain_practice": {
        "character": "assets/images/characters/dain_sweat.png",
        "sunset": true,
        "next": "day2_after_dain_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이의 스파이크 연습을 도와주다 보니 어느새 온몸이 땀으로 젖었다. 창밖은 어느덧 어둑어둑해졌다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Helping Dain with her spikes, I'm soon drenched in sweat. Outside, it has already turned dark.*"
            }
        }
    },
    "day2_after_dain_new": {
        "character": "assets/images/characters/dain_sweat.png",
        "sunset": true,
        "setFlag": "met_dain",
        "next": "day2_after_dain_new_name_ask",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "\"하아, 하아... 너 에너지가 넘치는구나! 처음 보는데 호흡이 척척 맞네!\""
            },
            "en": {
                "name": "???",
                "text": "\"Haa, haa... You're so full of energy! We're perfectly in sync for our first time!\""
            }
        }
    },
    "day2_after_dain_new_name_ask": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day2_after_dain_new_name_share",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "\"난 2학년 3반 정다인이야! 네 이름은 뭐야?\""
            },
            "en": {
                "name": "???",
                "text": "\"I'm Dain Jung from Class 2-3! What's your name?\""
            }
        }
    },
    "day2_after_dain_new_name_share": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "setFlag": "knows_name_dain",
        "next": "day2_after_dain_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"난 {name}(이)고 나도 2학년 3반이야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"I'm {name}. I'm in Class 2-3, too.\""
            }
        }
    },
    "day2_after_dain_3": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_dain_praise",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_dain_match",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day2_dain_food",
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
                "text": "*다인이가 수건으로 땀을 닦으며 나에게 시원한 음료수를 건넨다.*",
                "choices": [
                    "다인이가 토스를 잘 올려줘서 그렇지.",
                    "나중에 정식으로 한판 붙어볼까?",
                    "운동 후에 먹는 떡볶이가 최고지? 그치?"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Dain wipes her sweat with a towel and hands me a cold drink.*",
                "choices": [
                    "It's because you gave me such great tosses.",
                    "Should we have a real match sometime?",
                    "Tteokbokki after exercise is the best, right?"
                ]
            }
        }
    },
    "day2_dain_praise": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day2_dain_night_talk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"에이, 겸손하긴! 아무튼 오늘 덕분에 연습 잘 됐어. 고마워!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Aww, don't be so modest! Anyway, thanks to you, I got some great practice in. Thanks!\""
            }
        }
    },
    "day2_dain_match": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "setFlag": "day2_dain_bet",
        "next": "day2_dain_night_talk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오? 자신만만인데? 좋아, 내기 걸고 한판 하는 거다? 지는 사람이 떡볶이 쏘기!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh? Confident? Fine, let's make a bet! Loser buys Tteokbokki!\""
            }
        }
    },
    "day2_dain_food": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day2_dain_night_talk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"그치! 너 좀 뭘 아는구나? 떡볶이에 튀김까지 곁들이면... 크, 생각만 해도 행복하다!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Whoa! You really get it! Tteokbokki with fried sides... man, just thinking about it makes me happy!\""
            }
        }
    },
    "day2_dain_night_talk": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "setFlag": "day2_met_dain_after",
        "next": "day2_dain_yuna_encounter",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"와! 너 정말 열정적이다. 우리 팀으로 영입하고 싶을 정도야! 오늘 고생했어, {name}! 조심해서 들어가!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Wow! You're really passionate about this. I almost want to recruit you for the team! Great job today, {name}! Get home safe!\""
            }
        }
    },
    "day2_dain_yuna_encounter": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day2_dain_yuna_spot",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그때, 체육관 창문 너머로 누군가 지나가는 게 보인다. 창백한 피부의 여학생이 조용히 복도를 걷고 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Just then, I notice someone passing by the gym window. A pale-skinned girl walks quietly down the corridor.*"
            }
        }
    },
    "day2_dain_yuna_spot": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day2_dain_yuna_choice",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"(다인이가 창밖을 보며 살짝 몸을 떨다) 저, 저 애... 좀 으스스하지 않아? 맨날 혼자 저렇게 돌아다니는데...\""
            },
            "en": {
                "name": "Dain",
                "text": "\"(Dain looks out the window and shivers slightly) That girl... isn't she kind of creepy? She's always wandering around alone like that...\""
            }
        }
    },
    "day2_dain_yuna_choice": {
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            {
                "next": "day2_dain_yuna_know",
                "condition": "met_yuna",
                "stats": {
                    "Dain": {
                        "affinity": 2
                    },
                    "Yuna": {
                        "affinity": 2
                    }
                }
            },
            {
                "next": "day2_dain_yuna_unknown",
                "excludeCondition": "met_yuna",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day2_dain_yuna_compliment",
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
                "text": "*다인이가 유나를 보며 불안해하는 것 같다.*",
                "choices": [
                    "유나? 아, 그냥 조용한 애야.",
                    "글쎄, 나도 처음 봐.",
                    "다인이 더 밝고 좋아!"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Dain seems uneasy looking at Yuna.*",
                "choices": [
                    "Yuna? She's just quiet, that's all.",
                    "Dunno, first time seeing her.",
                    "You're way brighter and better, Dain!"
                ]
            }
        }
    },
    "day2_dain_yuna_know": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day2_dain_yuna_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"어? 알아? 와, {name} 넌 여러 애들이랑 친하구나. 근데 나랑 제일 친한 거지? 그치?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Huh? You know her? Wow, {name}, you're friends with everyone. But I'm your best friend, right? Right?\""
            }
        }
    },
    "day2_dain_yuna_unknown": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day2_dain_yuna_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"그치? 뭔가 분위기가 달라... 아무튼 나랑 있을 땐 저런 생각 하지 말고 나한테만 집중해!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Right? She has this different vibe... Anyway, when you're with me, focus only on me!\""
            }
        }
    },
    "day2_dain_yuna_compliment": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day2_dain_yuna_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"에이, 갑자기 무슨 말이야~! (다인이가 얼굴을 붉히며 어깨를 친다) 아무튼 고마워! 역시 {name}이 최고야!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"H-hey, what's with that all of a sudden?! (Dain blushes and playfully hits my shoulder) But thanks! {name}'s the best!\""
            }
        }
    },
    "day2_dain_yuna_end": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_end",
                "condition": "has_number_dain"
            },
            {
                "next": "day2_dain_contact_ask"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 멀리 사라진다. 다인이는 여전히 신경 쓰이는 듯하지만, 이내 다시 밝은 표정을 짓는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna disappears into the distance. Dain still seems bothered but quickly returns to her bright expression.*"
            }
        }
    },
    "day2_dain_contact_ask": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_dain_contact_success",
                "setFlags": [
                    "has_number_dain",
                    "has_any_contact"
                ]
            },
            {
                "next": "day2_dain_contact_fail",
                "stats": {
                    "Dain": {
                        "affinity": -15
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"아, {name}! 우리 앞으로도 계속 보려면 연락처는 있어야겠지? 여기 번호 찍어!\"",
                "choices": [
                    "응, 당연하지! 여기 내 번호야.",
                    "우리 어차피 내일 학교에서 볼 거잖아?"
                ]
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey, {name}! If we're going on food tours, we'll need each other's numbers, right? Punch it in!\"",
                "choices": [
                    "Sure! It'll be fun to explore food places with you.",
                    "Hmm.. maybe next time."
                ]
            }
        }
    },
    "day2_dain_contact_success": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 8
            }
        },
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오케이, 저장 완료! 이제 심심할 때마다 너한테 연락한다? 각오하고 있어!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Contact saved! I'll message you as soon as I find a tasty spot, so be ready!\""
            }
        }
    },
    "day2_dain_contact_fail": {
        "character": "assets/images/characters/dain_pout.png",
        "sunset": true,
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"참 나, 비싸게 구네? 알았어! 내일 체육관 오기만 해봐, 번호 줄 때까지 안 보내줄 거니까!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"What? Playing coy? Fine, fine. I'll work harder until I get your number!\""
            }
        }
    },
    "day2_after_nurse": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_after_nurse_met",
                "condition": "met_nurse"
            },
            {
                "next": "day2_after_nurse_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건실 문을 열자, 은은한 허브 향기와 함께 선생님이 책을 읽고 있는 모습이 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Opening the infirmary door, I see the teacher reading under the gentle scent of herbs.*"
            }
        }
    },
    "day2_after_nurse_met": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "affinityChar": "Nurse",
        "affinityBranches": [
            {
                "minAffinity": 20,
                "next": "day2_after_nurse_met_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_after_nurse_met_check"
            },
            {
                "minAffinity": -100,
                "next": "day2_after_nurse_met_low"
            }
        ],
        "next": "day2_after_nurse_met_check",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, {name}. 또 왔네? 오늘은 어디가 아파서 온 걸까? 아니면... 그냥 내 얼굴 보러 온 거야?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh, {name}. Back again? What's the trouble today? Or... did you just come to see me?\""
            }
        }
    },
    "day2_after_nurse_met_high": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "branches": [
            {
                "next": "day2_after_nurse_invited",
                "condition": "invited_nurse_home"
            },
            {
                "next": "day2_after_nurse_3"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 내 얼굴을 보며 부드럽게 미소 짓는다.* \"후훗, {name}. 이렇게 자주 오니까 선생님도 은근히 기대가 되네. 어서 들어와.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher looks at me and smiles softly.* \"Hehe, {name}. Seeing you so often makes me start to look forward to it. Come on in.\""
            }
        }
    },
    "day2_after_nurse_met_check": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_after_nurse_invited",
                "condition": "invited_nurse_home"
            },
            {
                "next": "day2_after_nurse_3"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, {name}. 방과 후에 보건실이라니... 어디 안 좋은 거야?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh, {name}. An infirmary visit after school... is something wrong?\""
            }
        }
    },
    "day2_after_nurse_met_low": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_after_nurse_invited",
                "condition": "invited_nurse_home"
            },
            {
                "next": "day2_after_nurse_3"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 날 보며 무심하게 말한다.* \"...{name}, 또 왔어? 오늘은 무슨 일이야?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher looks at me uncertainly.* \"...It's {name}, right? Are you feeling unwell?\""
            }
        }
    },
    "day2_after_nurse_invited": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_after_nurse_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"후훗, {name}. 오늘 저녁 우리 집에서 보기로 한 거... 잊지 않았지? 벌써부터 보고 싶어서 달려온 거라면 선생님 정말 감동인데?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Hehe, {name}. You haven't forgotten our plan to meet at my place this evening, have you? If you're here because you missed me already, I'm truly touched.\""
            }
        }
    },
    "day2_after_nurse_new": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "setFlag": "met_nurse",
        "next": "day2_after_nurse_new_name_ask",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, 처음 보는 얼굴이네? 이번에 전학 온 학생이니? 나는 보건선생님이야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh, a new face? Are you the transfer student? I'm the school nurse.\""
            }
        }
    },
    "day2_after_nurse_new_name_ask": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_after_nurse_new_name_share",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"그러고 보니 이름이 뭐야? 선생님한테만 살짝 알려줄래?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"By the way, what's your name? Won't you tell me? Just between us.\""
            }
        }
    },
    "day2_after_nurse_new_name_share": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "setFlag": "knows_name_nurse",
        "next": "day2_after_nurse_3",
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
    "day2_after_nurse_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_nurse_miss",
                "affinityChar": "Nurse",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "day2_nurse_miss"
                    },
                    {
                        "minAffinity": 0,
                        "next": "day2_nurse_miss_normal"
                    },
                    {
                        "minAffinity": -100,
                        "next": "day2_nurse_miss_low"
                    }
                ],
                "stats": {
                    "Nurse": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day2_nurse_rest",
                "stats": {
                    "Nurse": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day2_nurse_aroma",
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
                "text": "*선생님이 안경을 고쳐 쓰며 나를 빤히 바라본다.*",
                "choices": [
                    "선생님이 보고 싶어서 왔어요.",
                    "그냥 조용히 쉬고 싶어서요.",
                    "이 방에서 나는 향기가 너무 좋아요."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The teacher adjusts her glasses and stares at me intently.*",
                "choices": [
                    "I came because I missed you.",
                    "I just wanted some quiet rest.",
                    "I love the scent of this room."
                ]
            }
        }
    },
    "day2_nurse_miss": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_nurse_night_talk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"후훗, 솔직해서 좋네. 그렇게 솔직한 우리 전학생에겐 상을 줘야겠지?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Hehe, I like how honest you are. I should give such an honest transfer student a reward, shouldn't I?\""
            }
        }
    },
    "day2_nurse_miss_normal": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_nurse_night_talk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"후훗, 솔직한 건 좋은데... 선생님한테 그런 말을 하면 오해받을 수 있어, {name}. 그래도 귀엽긴 하네.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Hehe, honesty is good... but saying things like that to a teacher can be misunderstood, {name}. Still, you are quite cute.\""
            }
        }
    },
    "day2_nurse_miss_low": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "stats": {
            "Nurse": {
                "affinity": -8
            }
        },
        "next": "day2_nurse_night_talk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 안경 너머로 나를 차갑게 바라본다.* \"...아직 우린 그런 사이가 아닌 것 같은데? 학생, 농담도 적당히 해야지. 오늘은 그냥 쉬다 가렴.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher looks at me coldly over her glasses.* \"...I don't think we're quite on such terms yet? Student, keep your jokes appropriate. Just rest here for today.\""
            }
        }
    },
    "day2_nurse_rest": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_nurse_night_talk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"그래? 그럼 저기 침대에 가서 누워 있어. 내가 방해 안 할게.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Is that so? Then go ahead and lie down on that bed. I won't disturb you.\""
            }
        }
    },
    "day2_nurse_aroma": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_nurse_night_talk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, 눈썰미가 좋네. 이건 내가 직접 블렌딩한 아로마 오일이야. 마음을 편안하게 해주지.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh, you have sharp senses. This is an aroma oil I blended myself. It's meant to put the mind at ease.\""
            }
        }
    },
    "day2_nurse_night_talk": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_nurse_night_talk_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 부드러운 미소를 지으며 내 머리를 쓰다듬는다* \"후훗, 나랑 더 있고 싶어서 온 거구나? 좋아, 오늘은 특별히 조금 더 같이 있어줄게.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher smiles softly and strokes my hair.* \"Hehe, you came because you wanted more time with me, didn't you? Fine, I'll stay with you a bit longer today, just for you.\""
            }
        }
    },
    "day2_nurse_night_talk_2": {
        "character": "assets/images/characters/nurse_normal.png",
        "background": "assets/images/background/nurse_room.jpg",
        "sunset": true,
        "setFlag": "day2_met_nurse_after",
        "branches": [
            {
                "next": "day2_end",
                "condition": "invited_nurse_home"
            },
            {
                "next": "day2_nurse_contact_already_have_talk",
                "condition": "has_number_nurse"
            },
            {
                "next": "day2_nurse_contact_ask"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님과 함께 보건실에서 도란도란 이야기를 나누다 보니 어느새 밖이 캄캄해졌다. 아쉽지만 다음을 기약하며 학교를 나섰다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Chatting with the teacher in the infirmary, the sunset has deepened into dusk. Regretfully, I leave the school, promising to see her again.*"
            }
        }
    },
    "day2_nurse_contact_already_have_talk": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_end"
            },
            {
                "next": "nurse_contact_home_fail_after",
                "affinityChar": "Nurse",
                "affinityBranches": [
                    {
                        "minAffinity": 55,
                        "next": "nurse_contact_home_success_after"
                    }
                ]
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"{name}, 우리 이미 번호 교환했었지? 시간 나면 꼭 연락해야 해? 기다릴 테니까.\"",
                "choices": [
                    "네, 그럴게요.",
                    "번호 말고... 오늘 저녁 선생님 집으로 가면 안 돼요?"
                ]
            },
            "en": {
                "name": "School Nurse",
                "text": "\"{name}, we've already exchanged numbers, haven't we? You must contact me if you're bored this evening. I'll be waiting.\"",
                "choices": [
                    "Yes, I will.",
                    "Instead of my number... can I go to your house this evening?"
                ]
            }
        }
    },
    "nurse_contact_home_success_after": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "stats": {
            "Nurse": {
                "affinity": 8
            }
        },
        "setFlags": [
            "invited_nurse_home"
        ],
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 눈을 크게 뜨더니, 이내 요염한 미소를 지으며 내 귓가에 속삭인다.* \"어머... {name}, 생각보다 훨씬 대담하네? 좋아, 오늘 저녁 우리 집으로 올래? 주소 찍어줄게. 대신... 부모님께는 비밀이야?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher's eyes widen, then she whispers in my ear with a seductive smile.* \"Oh... {name}, you're much bolder than I thought. Fine, want to come to my house this evening? I'll send you the address. But... it's a secret from your parents, okay?\""
            }
        }
    },
    "nurse_contact_home_fail_after": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 꺄르르 웃음을 터뜨린다.* \"어머나 {name}! 넌 정말 귀엽다. 하지만 우리 집은 아직 좀 이른 것 같네? 나중에 메시지나 해.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher bursts into laughter.* \"Oh my, {name}! You're so cute. But my house is a bit too early, isn't it? Just message me later.\""
            }
        }
    },
    "day2_nurse_contact_ask": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_nurse_contact_success",
                "setFlags": [
                    "has_number_nurse",
                    "has_any_contact"
                ]
            },
            {
                "next": "day2_nurse_contact_fail",
                "stats": {
                    "Nurse": {
                        "affinity": -5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"{name}, 혹시 모르니까 내 번호 저장해둘래? 아프거나 고민 있으면 언제든 연락해.\"",
                "choices": [
                    "네, 알려주세요!",
                    "아직은 좀 부담스러워요."
                ]
            },
            "en": {
                "name": "School Nurse",
                "text": "\"{name}, why don't you save my number just in case? Contact me anytime you're sick or need someone to talk to.\"",
                "choices": [
                    "Yes, please!",
                    "It's a bit much for now."
                ]
            }
        }
    },
    "day2_nurse_contact_success": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "stats": {
            "Nurse": {
                "affinity": 10
            }
        },
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"후훗, 착하네. 그럼 나중에 연락할게? 잘 가, {name}.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Hehe, good boy. Then I'll message you later. Have a good evening, {name}.\""
            }
        }
    },
    "day2_nurse_contact_fail": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, 튕기는 거야? 알았어. 나중에 마음 바뀌면 말해줘. 조심해서 들어가!\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh, playing hard to get? Fine. Let me know if you change your mind. Get home safe!\""
            }
        }
    },
    "day2_after_teacher": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day2_after_teacher_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교무실 문을 열자, 텅 빈 사무실 안에서 홀로 스탠드를 켜고 서류를 검토 중인 담임선생님이 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Opening the faculty room door, I see the homeroom teacher working alone under a desk lamp in the empty office.*"
            }
        }
    },
    "day2_after_teacher_2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day2_after_teacher_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"어머, {name}? 이 시간에 교무실엔 어쩐 일이야? 아직 하교 안 했니?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Oh, {name}? What brings you here at this hour? Haven't you gone home yet?\""
            }
        }
    },
    "day2_after_teacher_3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_after_teacher_work",
                "stats": {
                    "Teacher": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day2_after_teacher_coffee",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_after_teacher_worry",
                "stats": {
                    "Teacher": {
                        "affinity": 8
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"선생님은 이번 주에 제출할 서류가 좀 많아서... 후훗, 전학 첫 주부터 선생님의 이런 초췌한 모습만 보여주게 되네.\"",
                "choices": [
                    "제가 도와드릴게요. 같이 하면 금방 끝날 거예요!",
                    "선생님 힘내세요! 제가 커피라도 한 잔 타 드릴까요?",
                    "선생님, 너무 무리하시는 거 아니에요? 걱정돼요."
                ]
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"I have quite a few documents to submit this week... Hehe, I'm showing you such a haggard side of me since your first week.\"",
                "choices": [
                    "I'll help you. We'll finish much faster together!",
                    "Hang in there! Should I make you a cup of coffee?",
                    "Teacher, don't overwork yourself. I'm worried."
                ]
            }
        }
    },
    "day2_after_teacher_work": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day2_after_teacher_work_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 옆자리에 앉아 서류 정리를 돕기 시작했다. 조용한 교무실 안에 종이 넘기는 소리만 규칙적으로 들려온다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I sat next to the teacher and started helping her sort the papers. Only the rhythmic sound of turning pages fills the quiet office.*"
            }
        }
    },
    "day2_after_teacher_work_2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day2_after_teacher_branch",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"고마워, {name}. 덕분에 정말 큰 도움이 됐어. 혼자 했으면 많이 고생할 뻔했어.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Thank you, {name}. You've been a huge help. I would've been here much longer if I were alone.\""
            }
        }
    },
    "day2_after_teacher_branch": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "affinityChar": "Teacher",
        "affinityBranches": [
            {
                "minAffinity": 70,
                "next": "day2_after_teacher_special"
            }
        ],
        "next": "day2_after_teacher_normal",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 나를 가만히 바라보며 생각에 잠긴 듯하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The teacher looks at me quietly, seemingly lost in thought.*"
            }
        }
    },
    "day2_after_teacher_special": {
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day2_after_teacher_special_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*선생님이 갑자기 내 쪽으로 몸을 기울인다. 은은한 향수 냄새와 함께 그녀의 따뜻한 숨결이 느껴진다.*"
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*The teacher suddenly leans in toward me. I can feel her warm breath and the faint scent of her perfume.*"
            }
        }
    },
    "day2_after_teacher_special_2": {
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day2_after_teacher_special_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"{name}, 넌 참 특별한 학생인 것 같아. 전학 온 지 이틀밖에 안 됐는데... 왜 이렇게 오래 알고 지낸 사이처럼 편안할까?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"{name}, I think you're a truly special student. It's only been two days... why do I feel so comfortable, as if we've known each other for years?\""
            }
        }
    },
    "day2_after_teacher_special_3": {
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "stats": {
            "Teacher": {
                "affinity": 15
            }
        },
        "setFlag": "day2_teacher_date",
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"오늘 도와준 보답으로... 선생님이 집까지 데려다줄게. 차에서 좀 더 이야기할까?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"As a reward for helping today... I'll drive you home. Shall we talk more in the car?\""
            }
        }
    },
    "day2_after_teacher_normal": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"자, 이제 늦었으니까 얼른 들어가 봐. 선생님도 이제 정리하고 퇴근해야겠다. 오늘 정말 고생 많았어!\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Well, it's late, so you should head home. I'll finish up and leave, too. You did a great job today!\""
            }
        }
    },
    "day2_after_teacher_coffee": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day2_after_teacher_normal",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"어머, 커피? 후훗, 마음만으로도 고마워. 하지만 학생이 타주는 커피를 마실 순 없지. 대신 선생님이 맛있는 사탕 하나 줄게!\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Oh, coffee? Hehe, thank you for the thought. But I can't have a student prepare it for me. I'll give you a delicious candy instead!\""
            }
        }
    },
    "day2_after_teacher_worry": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day2_after_teacher_normal",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"걱정해줘서 고마워. 선생님은 괜찮아! 우리 {name}이 이렇게 착해서 선생님은 정말 든든한걸?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Thank you for worrying about me. I'm okay! I feel so reassured because {name} is such a kind student.\""
            }
        }
    }
});
