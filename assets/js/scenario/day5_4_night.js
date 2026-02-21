/**
 * ============================================================================
 * CUPID - day5_4_night (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day5_4_night.js + en_day5_4_night.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

Object.assign(SCENARIO[5], {
    "day5_ending_true": {
        "background": null,
        "character": null,
        "night": true,
        "bgm": null,
        "fade": true,
        "next": "day5_ending_true_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그렇게, 나의 전학 이야기는 막을 내린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*And so, my transfer student story comes to an end.*"
            }
        }
    },
    "day5_ending_true_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_true_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*새로운 학교에서 만난 단 한 사람.*"
            },
            "en": {
                "name": "Me",
                "text": "*That one person I met at my new school.*"
            }
        }
    },
    "day5_ending_true_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*처음 만난 그 순간부터, 지금 이 순간까지— 한 번도 흔들린 적 없었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*From the very first moment we met, until this very moment— my heart never once wavered.*"
            }
        }
    },
    "day5_ending_true_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*기억나. 처음 눈이 마주쳤던 그 순간. 시간이 멈춘 것 같았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I remember it. That moment our eyes first met in the hallway. It felt like time had stopped.*"
            }
        }
    },
    "day5_ending_true_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그때는 몰랐다. 그 짧은 눈빛 하나가, 내 인생의 방향을 바꿔놓을 줄은.*"
            },
            "en": {
                "name": "Me",
                "text": "*I didn't know back then. That one brief glance would change the course of my entire life.*"
            }
        }
    },
    "day5_ending_true_6": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*사랑에 빠진 순간은 정확히 알 수 없다. 다만— 어느 날 문득, 그 사람 없는 내일이 상상되지 않았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I can't pinpoint the exact moment I fell in love. I just— one day, I couldn't imagine a tomorrow without them.*"
            }
        }
    },
    "day5_ending_true_7": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_8",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*아직도 입술에 남아있는 온기처럼, 이 감정은 영원히 사라지지 않을 거다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Like warmth that still lingers on my lips, this feeling will never fade.*"
            }
        }
    },
    "day5_ending_true_8": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_9",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*누구는 이런 감정에도 유통기한이 있다고 말하겠지.*"
            },
            "en": {
                "name": "Me",
                "text": "*Some would say even feelings like this have an expiration date.*"
            }
        }
    },
    "day5_ending_true_9": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_10",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*하지만 나는 안다. 이건 식는 게 아니라, 스며드는 거라는 걸.*"
            },
            "en": {
                "name": "Me",
                "text": "*But I know the truth. This isn't something that cools— it's something that seeps deeper.*"
            }
        }
    },
    "day5_ending_true_10": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_11",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*내일도, 모레도, 일 년 뒤에도— 이 사람 곁에서 벗어날 수 없는 내가 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Tomorrow, the day after, even a year from now I can see myself unable to escape from this person.*"
            }
        }
    },
    "day5_ending_true_11": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_12",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*약속하자. 어떤 계절이 와도, 넌 영원히 내 곁에 묶여 있을 거라고.*"
            },
            "en": {
                "name": "Me",
                "text": "*Let's make a promise. No matter what season comes, you will be tied to my side forever.*"
            }
        }
    },
    "day5_ending_true_12": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_13",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*누군가를 온전히 사랑한다는 건— 세상의 모든 불확실함 속에서, 단 하나의 집착을 품는 일이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*To love someone completely is to hold one single obsession amid all the uncertainty in the world.*"
            }
        }
    },
    "day5_ending_true_13": {
        "night": true,
        "fade": true,
        "next": "day5_credits",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "─── TRUE LOVE END ───"
            },
            "en": {
                "name": "System",
                "text": "─── TRUE LOVE END ───"
            }
        }
    },
    "day5_ending_good": {
        "background": null,
        "character": null,
        "night": true,
        "bgm": null,
        "fade": true,
        "next": "day5_ending_good_route",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그렇게, 나의 전학 이야기는 막을 내린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*And so, my transfer student story comes to an end.*"
            }
        }
    },
    "day5_ending_good_route": {
        "night": true,
        "branches": [
            {
                "next": "day5_ending_good_faithful_2",
                "condition": "day5_confessed"
            },
            {
                "next": "day5_ending_good_2"
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
    "day5_ending_good_faithful_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_good_faithful_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*용기를 내기까지 오래 걸렸다. 하지만 기다린 만큼, 이 마음은 확실하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*It took me a long time to find the courage. But because I waited, this feeling is certain.*"
            }
        }
    },
    "day5_ending_good_faithful_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_faithful_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*처음부터 마음은 하나였다. 다만 전하는 데 시간이 걸렸을 뿐.*"
            },
            "en": {
                "name": "Me",
                "text": "*My heart was set from the beginning. It just took time to put it into words.*"
            }
        }
    },
    "day5_ending_good_faithful_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_faithful_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*망설인 건 상대의 마음이 두려웠기 때문이다. 거절당할까 봐, 이 관계가 깨질까 봐.*"
            },
            "en": {
                "name": "Me",
                "text": "*I hesitated because I was afraid of the answer. Afraid of rejection, afraid of ruining what we had.*"
            }
        }
    },
    "day5_ending_good_faithful_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*하지만 결국 말했다. 그리고 그 대답은— 기다린 보람이 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*But I finally said it. And the answer— was worth the wait.*"
            }
        }
    },
    "day5_ending_good_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_good_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*마음이 흔들리기도 했고, 실수도 했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*My heart swayed at times, and I made mistakes.*"
            }
        }
    },
    "day5_ending_good_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*하지만 결국— 진짜 마음이 향하는 곳을 찾았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*But in the end— I found where my true feelings belonged.*"
            }
        }
    },
    "day5_ending_good_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*돌이켜보면, 다른 사람의 마음에 무심했던 적도 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Looking back, there were times I was careless with someone else's heart.*"
            }
        }
    },
    "day5_ending_good_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*누군가에게는 희망을 줬다가 거둬들인 셈이 되었을지도 모른다. 그게 미안하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I may have given someone hope only to take it away. I'm sorry for that.*"
            }
        }
    },
    "day5_ending_good_6": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*하지만 그 흔들림이 있었기에, 진짜 마음이 뭔지 알게 됐다.*"
            },
            "en": {
                "name": "Me",
                "text": "*But it was because of that wavering that I came to understand what true feelings really are.*"
            }
        }
    },
    "day5_ending_good_7": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_8",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*완벽하지 않아도 괜찮다. 이게 우리의 시작이니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*It doesn't have to be perfect. Because this is our beginning.*"
            }
        }
    },
    "day5_ending_good_8": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_9",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*길을 잃었던 게 아니었다. 널 내 것으로 만들기 위한 과정이었을 뿐.*"
            },
            "en": {
                "name": "Me",
                "text": "*I wasn't lost. It was just a process to make you mine.*"
            }
        }
    },
    "day5_ending_good_9": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_10",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*망설임이 없었다면, 지금 이 지독한 소유욕도 없었을 거다.*"
            },
            "en": {
                "name": "Me",
                "text": "*If there had been no hesitation, there would be no such terrible possessiveness now.*"
            }
        }
    },
    "day5_ending_good_10": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_11",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*불완전한 사랑도 사랑이다. 아니, 어쩌면 망가졌기에 더 완벽한 건지도 모른다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Imperfect love is still love. No perhaps it's more perfect because it's broken.*"
            }
        }
    },
    "day5_ending_good_11": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_12",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*앞으로도 실수하겠지. 부딪히겠지. 하지만 이 사람과 함께라면, 차라리 같이 파멸하는 것도 나쁘지 않다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I'll make mistakes again. We'll clash. But with this person, falling into ruin together wouldn't be so bad.*"
            }
        }
    },
    "day5_ending_good_12": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_13",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그래서 괜찮다. 이 집착은, 오래 걸린 만큼 절대 풀리지 않을 테니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*So it's okay. This obsession took a long time to form that's exactly why it will never be undone.*"
            }
        }
    },
    "day5_ending_good_13": {
        "night": true,
        "fade": true,
        "next": "day5_credits",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "─── GOOD END ───"
            },
            "en": {
                "name": "System",
                "text": "─── GOOD END ───"
            }
        }
    },
    "day5_ending_mayhem": {
        "background": null,
        "character": null,
        "night": true,
        "bgm": null,
        "fade": true,
        "next": "day5_ending_mayhem_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그렇게, 나의 전학 이야기는… 끝난 건가?*"
            },
            "en": {
                "name": "Me",
                "text": "*And so, my transfer student story… is it really over?*"
            }
        }
    },
    "day5_ending_mayhem_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_mayhem_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*하나의 별만 바라보기엔, 밤하늘이 너무 아름다웠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The night sky was too beautiful to gaze at just one star.*"
            }
        }
    },
    "day5_ending_mayhem_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…라고 변명해봐야 쫓기는 건 변하지 않겠지.*"
            },
            "en": {
                "name": "Me",
                "text": "*…not that excuses like that will stop them from chasing me.*"
            }
        }
    },
    "day5_ending_mayhem_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어느 날은 교실 뒤에서 동시에 세 개의 도시락이 나왔다. 그날, 나는 진심으로 큰일이라고 생각했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*One day, three lunch boxes appeared behind the classroom at the same time. That day, I genuinely thought I was done for.*"
            }
        }
    },
    "day5_ending_mayhem_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*(\"어제 쟤랑 같이 있었지?\" 서연이의 가위질 소리, 유나의 서늘한 눈빛, 다인이의 으르렁거리는 목소리... 매일매일이 생존 게임이다.)*"
            },
            "en": {
                "name": "Me",
                "text": "(\"Is she your girlfriend?\" \"No, I am!\" \"What are you talking about, it's me!\" …The hallway became a battlefield that day.)"
            }
        }
    },
    "day5_ending_mayhem_6": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나는 그 틈을 타 몰래 옥상으로 도망쳤다. 인생에서 그렇게 빨리 달려본 건 처음이었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I took the chance to sneak away to the rooftop. I'd never run that fast in my entire life.*"
            }
        }
    },
    "day5_ending_mayhem_7": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_8",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*누구 하나를 선택하는 순간, 남은 이들의 집착이 나를 갈기갈기 찢어놓을지도 모른다. 도망칠 곳은, 애초에 없었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*…But someone was already waiting for me on the rooftop. There really was no escape.*"
            }
        }
    },
    "day5_ending_mayhem_8": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_9",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어쩌면 욕심일지도 모른다. 모두를 소중히 여기고 싶다는 마음은. 하지만 이미 늦었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Maybe it's selfish. Wanting to cherish everyone. But it's already too late.*"
            }
        }
    },
    "day5_ending_mayhem_9": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_10",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그녀들의 집착은 이미 나를 옭아매고 있다. 누구 하나를 선택하는 순간, 나는 파멸할 것이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Their obsession is already suffocating me. The moment I choose one, I will be ruined.*"
            }
        }
    },
    "day5_ending_mayhem_10": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_11",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이런 지옥 같은 매일이… 솔직히 나쁘지 않다. 내일은 또 어떤 핏빛 수라장이 펼쳐질까.*"
            },
            "en": {
                "name": "Me",
                "text": "*This hellish everyday life honestly, it's not bad. I wonder what kind of bloody mayhem tomorrow will bring.*"
            }
        }
    },
    "day5_ending_mayhem_11": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_12",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다시 태어나도 같은 선택을 할 거냐고? …대답은 안 하겠다. 근데 이 웃음은 진짜다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Would I make the same choices if I were born again? …I won't answer that. But this smile is real.*"
            }
        }
    },
    "day5_ending_mayhem_12": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_13",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*결론은 없다. 근데 뭐… 이 소란스러운 매일이 나의 이야기다.*"
            },
            "en": {
                "name": "Me",
                "text": "*There's no conclusion. But well… this chaotic everyday life is my story.*"
            }
        }
    },
    "day5_ending_mayhem_13": {
        "night": true,
        "fade": true,
        "next": "day5_credits",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "─── MAYHEM END ───"
            },
            "en": {
                "name": "System",
                "text": "─── MAYHEM END ───"
            }
        }
    },
    "day5_ending_harem": {
        "background": null,
        "character": null,
        "night": true,
        "bgm": null,
        "fade": true,
        "next": "day5_ending_harem_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그렇게, 나의 전학 이야기는— 끝나지 않았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*And so, my transfer student story— hasn't ended.*"
            }
        }
    },
    "day5_ending_harem_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_harem_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*여러 명의 연인. 말도 안 되는 현실이 눈앞에 펼쳐졌다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Multiple lovers. An impossible reality unfolded before my eyes.*"
            }
        }
    },
    "day5_ending_harem_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*매일이 전쟁이다. 누구한테 제일 잘하느냐를 두고 날마다 전투가 벌어진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Every day is a war. Battles break out daily over who gets treated the best.*"
            }
        }
    },
    "day5_ending_harem_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*월요일엔 같이 등교하는 순서, 화요일엔 도시락, 수요일엔 귀가길… 한 주의 스케줄은 외교 전쟁이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Monday is the walking-to-school order, Tuesday is lunch boxes, Wednesday is the walk home… the weekly schedule is a diplomatic war.*"
            }
        }
    },
    "day5_ending_harem_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그녀들은 서로를 맹렬히 견제하면서도, 나를 온전히 독점할 수 없다면 차라리 공유하겠다는 기묘하고도 위험한 타협을 이뤘다.*"
            },
            "en": {
                "name": "Me",
                "text": "*One of them watches over me with a quiet smile, another confidently links her arm with mine, and the last one secretly holds my hand from behind.*"
            }
        }
    },
    "day5_ending_harem_6": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*각자의 매력이 너무 다르다. 그래서 비교할 수가 없고, 그래서 포기할 수도 없다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Each of their charms is so different. That's why I can't compare them, and that's why I can't give any of them up.*"
            }
        }
    },
    "day5_ending_harem_7": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_8",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*하지만 이상하게도… 모두가 웃고 있다. 나를 완전히 소유했다는 듯이.*"
            },
            "en": {
                "name": "Me",
                "text": "*But strangely enough all of them are smiling. As if they completely own me.*"
            }
        }
    },
    "day5_ending_harem_8": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_9",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*욕심이라 불러도 좋다. 이 지독한 집착의 굴레에서 벗어날 수 없다면.*"
            },
            "en": {
                "name": "Me",
                "text": "*Call it greed if you want. If I can't escape from this terrible cycle of obsession.*"
            }
        }
    },
    "day5_ending_harem_9": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_10",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*후회는 없다. 아니, 후회할 틈조차 주지 않는다. 그녀들은 나를 철저히 감시하고 있으니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*No regrets. No, they don't even give me time to regret. They are watching my every move.*"
            }
        }
    },
    "day5_ending_harem_10": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_11",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*물론, 이 균형이 언제 깨질지는 아무도 모른다. 누군가 선을 넘는 순간, 피바람이 불겠지.*"
            },
            "en": {
                "name": "Me",
                "text": "*Of course, no one knows when this balance will break. The moment someone crosses the line, a bloodbath will begin.*"
            }
        }
    },
    "day5_ending_harem_11": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_12",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*달콤한 지옥. 이 배덕감과 아찔한 쾌락 속에서, 나는 영원히 빠져나갈 수 없을 것이다. 아니, 빠져나가고 싶지 않다.*"
            },
            "en": {
                "name": "Me",
                "text": "*But the fact that I even enjoy the tension— maybe I'm already past the point of no return.*"
            }
        }
    },
    "day5_ending_harem_12": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_13",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*내일도 감시당하겠지. 모레는 더 옥죄어오겠지. 하지만— 이 핏빛 날들을, 나는 받아들인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Tomorrow I'll be watched again. The day after, they'll tighten their grip even more. But these bloody days, I accept them.*"
            }
        }
    },
    "day5_ending_harem_13": {
        "night": true,
        "fade": true,
        "next": "day5_credits",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "─── HAREM END ───"
            },
            "en": {
                "name": "System",
                "text": "─── HAREM END ───"
            }
        }
    },
    "day5_ending_friend": {
        "background": null,
        "character": null,
        "night": true,
        "bgm": null,
        "fade": true,
        "next": "day5_ending_friend_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그렇게, 나의 전학 이야기는 막을 내린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*And so, my transfer student story comes to an end.*"
            }
        }
    },
    "day5_ending_friend_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_friend_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*마음을 전하지 못했다. 아니, 전하지 않았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I couldn't say what I felt. No— I chose not to.*"
            }
        }
    },
    "day5_ending_friend_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"친구\"라는 말 뒤에 숨긴 감정이, 가끔 밤에 떠오를지도 모른다.)"
            },
            "en": {
                "name": "Me",
                "text": "(The feelings I hid behind the word \"friend\" might surface on some quiet nights.)"
            }
        }
    },
    "day5_ending_friend_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*기억난다. 그날 옥상에서, 바람에 날린 머리카락을 넘기던 그 손끝.*"
            },
            "en": {
                "name": "Me",
                "text": "*I remember. That day on the rooftop, the way the wind swept their hair, and the fingertips that brushed it aside.*"
            }
        }
    },
    "day5_ending_friend_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(그때 \"좋아해\"라고 말했더라면, 지금 이 밤은 달랐을까.)"
            },
            "en": {
                "name": "Me",
                "text": "(If I had said \"I like you\" back then, would tonight be any different?)"
            }
        }
    },
    "day5_ending_friend_6": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*말하지 못한 감정은 사라지는 게 아니다. 마음 깊은 곳에서 조용히 빛나고 있을 뿐.*"
            },
            "en": {
                "name": "Me",
                "text": "*Unspoken feelings don't disappear. They simply glow quietly, deep within the heart.*"
            }
        }
    },
    "day5_ending_friend_7": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_8",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*때로는 가장 가까운 거리가, 가장 먼 거리이기도 하다. '친구'라는 이름의 거리.*"
            },
            "en": {
                "name": "Me",
                "text": "(Sometimes the closest distance is also the farthest. The distance called \"friends.\")"
            }
        }
    },
    "day5_ending_friend_8": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_9",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그래도 나쁘지만은 않다. 옆에서 웃는 모습을 볼 수 있으니까. 언젠가 그 미소를 부숴버릴 날을 기다리며.*"
            },
            "en": {
                "name": "Me",
                "text": "*Still, it's not all bad. I can see their smile right beside me. Waiting for the day I can shatter that smile.*"
            }
        }
    },
    "day5_ending_friend_9": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_10",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어쩌면 이건 비겁함이 아니라, 조용한 사냥인지도 모른다. 먹잇감을 품은 채 곁에 머무르는 일.*"
            },
            "en": {
                "name": "Me",
                "text": "*Maybe this isn't cowardice, but a quiet hunt. Staying by their side while holding my prey.*"
            }
        }
    },
    "day5_ending_friend_10": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_11",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그래도… 후회하지 않아. 널 완전히 내 것으로 만들 수 있는 기회가, 언젠가 올 테니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*Still I don't regret it. Someday, the chance to make you completely mine will come.*"
            }
        }
    },
    "day5_ending_friend_11": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_12",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*입끝을 맴돌다 끝내 삼켜버린 말들은 결코 사라지지 않고, 내 안에서 조용히 나이테를 새겨갈 것이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Someday— when the day comes that I can speak this heart, I won't hesitate.*"
            }
        }
    },
    "day5_ending_friend_12": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_13",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어떤 이야기는 끝맺지 않아서 더 오래 남는다. 이 계절이, 그렇게 기억될 거다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Some stories linger longer precisely because they're left unfinished. This season will be remembered that way.*"
            }
        }
    },
    "day5_ending_friend_13": {
        "night": true,
        "fade": true,
        "next": "day5_credits",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "─── FRIEND END ───"
            },
            "en": {
                "name": "System",
                "text": "─── FRIEND END ───"
            }
        }
    },
    "day5_ending_alone": {
        "background": null,
        "character": null,
        "night": true,
        "bgm": null,
        "fade": true,
        "next": "day5_ending_alone_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그렇게, 나의 전학 이야기는 막을 내린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*And so, my transfer student story comes to an end.*"
            }
        }
    },
    "day5_ending_alone_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_alone_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*특별한 누군가는 생기지 않았다. 하지만 이 학교에서 보낸 시간은 소중했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*No one special came along. But the time I spent at this school was precious.*"
            }
        }
    },
    "day5_ending_alone_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*전학 오기 전, 아무것도 할 수 없었던 나와는 달라졌으니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*I'm different now from who I was before I transferred— back when I felt like I couldn't do anything.*"
            }
        }
    },
    "day5_ending_alone_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이 학교에서 배운 건 연애가 아니었다. 나 자신과 마주하는 법이었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*What I learned at this school wasn't about romance. It was about facing myself.*"
            }
        }
    },
    "day5_ending_alone_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교실의 웃음소리, 쉬는 시간의 잡담, 체육 시간의 햇살— 그 모든 평범한 것들이 의미 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The laughter in the classroom, the chatter between classes, the sunlight during P.E.— all those ordinary things mattered.*"
            }
        }
    },
    "day5_ending_alone_6": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*고독은 벌이 아니다. 자기 자신과 마주하는 시간이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Solitude is not a punishment. It's time spent face to face with yourself.*"
            }
        }
    },
    "day5_ending_alone_7": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_8",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*누군가를 사랑하기 전에, 먼저 나 자신을 이해해야 한다는 걸 배웠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I learned that before you can love someone else, you must first understand yourself.*"
            }
        }
    },
    "day5_ending_alone_8": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_9",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*혼자라서 외로운 게 아니다. 혼자이기에 비로소 들리는 것들이 있다. 그녀들의 발소리, 숨소리, 나를 지켜보는 시선들.*"
            },
            "en": {
                "name": "Me",
                "text": "*Being alone doesn't mean being lonely. There are things you can only hear when you're on your own. Their footsteps, their breathing, the eyes watching me.*"
            }
        }
    },
    "day5_ending_alone_9": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_10",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*바람 소리, 발걸음 소리, 내 심장 소리. 그 고요한 리듬 속에서 나는 서서히 미쳐가고 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sound of the wind, my footsteps, my own heartbeat. Within that quiet rhythm, I was slowly going mad.*"
            }
        }
    },
    "day5_ending_alone_10": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_11",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*누군가에게 닿지 못했다 해도, 이 시간들이 결코 무의미해지는 것은 아니다. 나는 분명 어제보다 더 깊은 어둠 속으로 가라앉고 있으니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*Even if I couldn't reach anyone, these times are never meaningless. Because I am definitely sinking into a deeper darkness than yesterday.*"
            }
        }
    },
    "day5_ending_alone_11": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_12",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서두르지 않아도 된다. 나만의 속도로, 나만의 길을 걸으면 되니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*There's no need to rush. I can walk at my own pace, on my own path.*"
            }
        }
    },
    "day5_ending_alone_12": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_13",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*혼자 걷는 밤길도 나쁘지 않다. 별이 유난히 밝은 건, 어둠 덕분이니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*Walking alone on a night road isn't so bad. The stars shine brightest, after all, because of the darkness.*"
            }
        }
    },
    "day5_ending_alone_13": {
        "night": true,
        "fade": true,
        "next": "day5_credits",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "─── ALONE END ───"
            },
            "en": {
                "name": "System",
                "text": "─── ALONE END ───"
            }
        }
    },
    "day5_credits": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "type": "credits",
        "next": "day5_ending_restart",
        "_i18n": {
            "ko": {
                "name": "",
                "text": ""
            },
            "en": {
                "name": "",
                "text": ""
            }
        }
    },
    "day5_ending_restart": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "choices": [
            {
                "next": "index.html"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "",
                "choices": [
                    "처음부터 다시 시작하기"
                ]
            },
            "en": {
                "name": "System",
                "text": "",
                "choices": [
                    "Start Over from the Beginning"
                ]
            }
        }
    }
});
