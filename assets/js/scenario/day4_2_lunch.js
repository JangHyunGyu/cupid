/**
 * ============================================================================
 * CUPID - day4_2_lunch
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

Object.assign(SCENARIO[4], {
    "day4_arrive": {
        "background": "assets/images/background/street.png",
        "character": null,
        "bgm": "date.mp3",
        "next": "day4_arrive_nervous"
    },
    "day4_arrive_nervous": {
        "background": "assets/images/background/street.png",
        "next": "day4_arrive_people"
    },
    "day4_arrive_people": {
        "background": "assets/images/background/street.png",
        "next": "day4_arrive_phone"
    },
    "day4_arrive_phone": {
        "background": "assets/images/background/street.png",
        "next": "day4_arrive_look"
    },
    "day4_arrive_look": {
        "background": "assets/images/background/street.png",
        "next": "day4_arrive_wait"
    },
    "day4_arrive_wait": {
        "background": "assets/images/background/street.png",
        "next": "day4_heroine_arrive"
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
        ]
    },
    "day4_meet_seoyeon": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day4_seoyeon_react"
    },
    "day4_seoyeon_react": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day4_seoyeon_compliment"
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
        ]
    },
    "day4_seoyeon_blush": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "day4_date_walk"
    },
    "day4_seoyeon_happy": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day4_date_walk"
    },
    "day4_meet_yuna": {
        "background": "assets/images/background/cafe.png",
        "branches": [
            {
                "condition": "day3_lied_to_yuna",
                "next": "day4_yuna_angry_greeting"
            },
            {
                "next": "day4_meet_yuna_normal"
            }
        ]
    },
    "day4_meet_yuna_normal": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day4_yuna_react"
    },
    "day4_yuna_angry_greeting": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "day4_yuna_react"
    },
    "day4_yuna_react": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day4_yuna_compliment"
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
        ]
    },
    "day4_yuna_blush": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "day4_date_walk"
    },
    "day4_yuna_cool": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day4_date_walk"
    },
    "day4_meet_dain": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day4_dain_react"
    },
    "day4_dain_react": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day4_dain_compliment"
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
        ]
    },
    "day4_dain_blush": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "day4_date_walk"
    },
    "day4_dain_energy": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day4_date_walk"
    },
    "day4_meet_nurse": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day4_nurse_react"
    },
    "day4_nurse_react": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day4_nurse_compliment"
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
        ]
    },
    "day4_nurse_blush": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day4_date_walk"
    },
    "day4_nurse_smile": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day4_date_walk"
    },
    "day4_meet_teacher": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day4_teacher_react"
    },
    "day4_teacher_react": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day4_teacher_compliment"
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
        ]
    },
    "day4_teacher_blush": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "day4_date_walk"
    },
    "day4_teacher_casual": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day4_date_walk"
    },
    "day4_date_walk": {
        "character": null,
        "background": "assets/images/background/street.png",
        "next": "day4_date_talk_1"
    },
    "day4_date_talk_1": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_talk_2"
    },
    "day4_date_talk_2": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_weather"
    },
    "day4_date_weather": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_surroundings"
    },
    "day4_date_surroundings": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_time_pass"
    },
    "day4_date_time_pass": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_sunshine"
    },
    "day4_date_sunshine": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_activity_branch"
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
        ]
    },
    "day4_activity_seoyeon_1": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day4_activity_seoyeon_2"
    },
    "day4_activity_seoyeon_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day4_activity_seoyeon_3"
    },
    "day4_activity_seoyeon_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day4_activity_seoyeon_4"
    },
    "day4_activity_seoyeon_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day4_activity_converge"
    },
    "day4_activity_yuna_1": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day4_activity_yuna_2"
    },
    "day4_activity_yuna_2": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day4_activity_yuna_3"
    },
    "day4_activity_yuna_3": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_smile.png",
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "day4_activity_yuna_4"
    },
    "day4_activity_yuna_4": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_shy.png",
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day4_activity_converge"
    },
    "day4_activity_dain_1": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day4_activity_dain_2"
    },
    "day4_activity_dain_2": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day4_activity_dain_3"
    },
    "day4_activity_dain_3": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "day4_activity_dain_4"
    },
    "day4_activity_dain_4": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day4_activity_converge"
    },
    "day4_activity_nurse_1": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day4_activity_nurse_2"
    },
    "day4_activity_nurse_2": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day4_activity_nurse_3"
    },
    "day4_activity_nurse_3": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_shy.png",
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "day4_activity_nurse_4"
    },
    "day4_activity_nurse_4": {
        "background": "assets/images/background/museum.png",
        "character": "assets/images/characters/nurse_shy.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day4_activity_converge"
    },
    "day4_activity_teacher_1": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day4_activity_teacher_2"
    },
    "day4_activity_teacher_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day4_activity_teacher_3"
    },
    "day4_activity_teacher_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "day4_activity_teacher_4"
    },
    "day4_activity_teacher_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 5
            }
        },
        "next": "day4_activity_converge"
    },
    "day4_activity_converge": {
        "character": null,
        "background": "assets/images/background/street.png",
        "next": "day4_date_lunch"
    },
    "day4_date_lunch": {
        "character": null,
        "background": "assets/images/background/cafe.png",
        "next": "day4_lunch_menu"
    },
    "day4_lunch_menu": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_order"
    },
    "day4_lunch_order": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_order_react"
    },
    "day4_lunch_order_react": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_awkward"
    },
    "day4_lunch_awkward": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_funny"
    },
    "day4_lunch_funny": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_funny_react"
    },
    "day4_lunch_funny_react": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_share"
    },
    "day4_lunch_share": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_date_lunch_talk"
    },
    "day4_date_lunch_talk": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_lunch_learn"
    },
    "day4_lunch_learn": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_date_lunch_choice"
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
        ]
    },
    "day4_date_honest": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_date_honest_react"
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
        "next": "day4_date_response"
    },
    "day4_date_grateful": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_date_grateful_react"
    },
    "day4_date_grateful_react": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_date_response"
    },
    "day4_date_response": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "day4_date_cafe_exit"
    },
    "day4_date_cafe_exit": {
        "character": null,
        "background": "assets/images/background/street.png",
        "next": "day4_date_photo_moment"
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
        ]
    },
    "day4_date_photo_yes": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_ending_moment"
    },
    "day4_date_photo_no": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_ending_moment"
    },
    "day4_date_ending_moment": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_ending_feel"
    },
    "day4_date_ending_feel": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "day4_date_transition"
    },
    "day4_date_transition": {
        "background": "assets/images/background/street.png",
        "character": null,
        "fade": true,
        "next": "day4_afternoon_start"
    }
});
