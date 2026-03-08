/**
 * ============================================================================
 * CUPID - day3_3_afterschool
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[3]) SCENARIO[3] = {};

Object.assign(SCENARIO[3], {
    "day3_afternoon_start": {
        "background": "assets/images/background/room_school.png",
        "bgm": "daily2.mp3",
        "character": null,
        "sunset": true,
        "next": "day3_afternoon_check"
    },
    "day3_afternoon_check": {
        "background": "assets/images/background/room_school.png",
        "sunset": true,
        "branches": [
            {
                "next": "day3_afternoon_tension",
                "condition": "day3_caught_multiple_dates"
            },
            {
                "next": "day3_afternoon_jealousy_check",
                "condition": "day3_jealousy_seoyeon"
            },
            {
                "next": "day3_afternoon_jealousy_check",
                "condition": "day3_jealousy_yuna"
            },
            {
                "next": "day3_afternoon_jealousy_check",
                "condition": "day3_jealousy_dain"
            },
            {
                "next": "day3_afternoon_normal"
            }
        ]
    },
    "day3_afternoon_tension": {
        "sunset": true,
        "next": "day3_afternoon_tension_2"
    },
    "day3_afternoon_tension_2": {
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "next": "day3_afternoon_confrontation"
    },
    "day3_afternoon_confrontation": {
        "character": "assets/images/characters/seyoun_sad.png",
        "background": "assets/images/background/school_hallway.png",
        "sunset": true,
        "next": "day3_afternoon_confrontation_2"
    },
    "day3_afternoon_confrontation_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "next": "day3_afternoon_confrontation_3"
    },
    "day3_afternoon_confrontation_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_admit"
            },
            {
                "next": "day3_afternoon_justify"
            },
            {
                "next": "day3_afternoon_lie_seoyeon"
            }
        ]
    },
    "day3_afternoon_admit": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "next": "day3_afternoon_admit_react"
    },
    "day3_afternoon_admit_react": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day3_afternoon_admit_react_2"
    },
    "day3_afternoon_admit_react_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "setFlag": "day3_seoyeon_ultimatum",
        "next": "day3_afternoon_transition"
    },
    "day3_afternoon_justify": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "next": "day3_afternoon_justify_react"
    },
    "day3_afternoon_justify_react": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "next": "day3_afternoon_justify_react_2"
    },
    "day3_afternoon_justify_react_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day3_afternoon_transition"
    },
    "day3_afternoon_lie_seoyeon": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "next": "day3_afternoon_lie_seoyeon_react"
    },
    "day3_afternoon_lie_seoyeon_react": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "setFlag": "day3_promised_seoyeon_only",
        "next": "day3_afternoon_lie_warning"
    },
    "day3_afternoon_lie_warning": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day3_afternoon_transition"
    },
    "day3_afternoon_jealousy_check": {
        "sunset": true,
        "next": "day3_afternoon_approach"
    },
    "day3_afternoon_approach": {
        "sunset": true,
        "branches": [
            {
                "next": "day3_afternoon_seoyeon_approach",
                "condition": "day3_jealousy_seoyeon"
            },
            {
                "next": "day3_afternoon_yuna_approach",
                "condition": "day3_jealousy_yuna"
            },
            {
                "next": "day3_afternoon_dain_approach",
                "condition": "day3_jealousy_dain"
            }
        ]
    },
    "day3_afternoon_seoyeon_approach": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_talk"
    },
    "day3_afternoon_seoyeon_talk": {
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_talk_2"
    },
    "day3_afternoon_seoyeon_talk_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_seoyeon_comfort"
            },
            {
                "next": "day3_afternoon_seoyeon_friend"
            },
            {
                "next": "day3_afternoon_seoyeon_tease"
            }
        ]
    },
    "day3_afternoon_seoyeon_comfort": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 8
            }
        },
        "next": "day3_afternoon_transition"
    },
    "day3_afternoon_seoyeon_friend": {
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": -3
            }
        },
        "next": "day3_afternoon_transition"
    },
    "day3_afternoon_seoyeon_tease": {
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day3_afternoon_transition"
    },
    "day3_afternoon_yuna_approach": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_talk"
    },
    "day3_afternoon_yuna_talk": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_talk_2"
    },
    "day3_afternoon_yuna_talk_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_yuna_apologize"
            },
            {
                "next": "day3_afternoon_yuna_promise"
            },
            {
                "next": "day3_afternoon_yuna_question"
            }
        ]
    },
    "day3_afternoon_yuna_apologize": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day3_afternoon_yuna_warning"
    },
    "day3_afternoon_yuna_promise": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 8
            }
        },
        "setFlag": "day3_yuna_priority_promise",
        "next": "day3_afternoon_yuna_warning"
    },
    "day3_afternoon_yuna_question": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": -3
            }
        },
        "next": "day3_afternoon_yuna_warning"
    },
    "day3_afternoon_yuna_warning": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day3_afternoon_transition"
    },
    "day3_afternoon_dain_approach": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day3_afternoon_dain_talk"
    },
    "day3_afternoon_dain_talk": {
        "character": "assets/images/characters/dain_sad.png",
        "sunset": true,
        "next": "day3_afternoon_dain_talk_2"
    },
    "day3_afternoon_dain_talk_2": {
        "character": "assets/images/characters/dain_sad.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_dain_sorry"
            },
            {
                "next": "day3_afternoon_dain_promise"
            },
            {
                "next": "day3_afternoon_dain_tease"
            }
        ]
    },
    "day3_afternoon_dain_sorry": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day3_afternoon_transition"
    },
    "day3_afternoon_dain_promise": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 8
            }
        },
        "next": "day3_afternoon_transition"
    },
    "day3_afternoon_dain_tease": {
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day3_afternoon_transition"
    },
    "day3_afternoon_normal": {
        "sunset": true,
        "next": "day3_afternoon_transition"
    },
    "day3_afternoon_transition": {
        "character": null,
        "background": "assets/images/background/school.png",
        "sunset": true,
        "next": "day3_afternoon_gate"
    },
    "day3_afternoon_gate": {
        "background": "assets/images/background/school.png",
        "sunset": true,
        "branches": [
            {
                "next": "day3_afternoon_multiple_wait",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_afternoon_single_wait",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_afternoon_single_wait",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_afternoon_single_wait",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_afternoon_teacher_wait",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_afternoon_nurse_wait",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_afternoon_nobody_waiting"
            }
        ]
    },
    "day3_afternoon_multiple_wait": {
        "sunset": true,
        "branches": [
            {
                "next": "day3_afternoon_multiple_scene",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_afternoon_multiple_no_seoyeon"
            }
        ]
    },
    "day3_afternoon_multiple_no_seoyeon": {
        "sunset": true,
        "next": "day3_afternoon_choose_walk"
    },
    "day3_afternoon_multiple_scene": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "day3_afternoon_three_way",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_afternoon_two_way_dain",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_afternoon_seoyeon_walk"
            }
        ]
    },
    "day3_afternoon_three_way": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day3_afternoon_three_way_2"
    },
    "day3_afternoon_three_way_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day3_afternoon_choose_walk"
    },
    "day3_afternoon_two_way_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day3_afternoon_choose_walk"
    },
    "day3_afternoon_choose_walk": {
        "character": null,
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_seoyeon_walk"
            },
            {
                "next": "day3_afternoon_yuna_walk",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_afternoon_dain_walk",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_afternoon_reject_all",
                "stats": {
                    "Seoyeon": {
                        "affinity": -5
                    },
                    "Yuna": {
                        "affinity": -5
                    },
                    "Dain": {
                        "affinity": -5
                    }
                }
            }
        ]
    },
    "day3_afternoon_seoyeon_walk": {
        "character": null,
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "setFlag": "day3_walked_with_seoyeon",
        "next": "day3_afternoon_seoyeon_walk_2"
    },
    "day3_afternoon_seoyeon_walk_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "background": "assets/images/background/street.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_walk_others"
    },
    "day3_afternoon_seoyeon_walk_others": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "branches": [
            {
                "next": "day3_afternoon_seoyeon_walk_yuna_reaction",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_afternoon_seoyeon_walk_dain_reaction",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_afternoon_seoyeon_talk_walk"
            }
        ]
    },
    "day3_afternoon_seoyeon_walk_yuna_reaction": {
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": -8
            }
        },
        "setFlag": "day3_yuna_witnessed_seoyeon",
        "next": "day3_afternoon_seoyeon_talk_walk"
    },
    "day3_afternoon_seoyeon_walk_dain_reaction": {
        "character": "assets/images/characters/dain_sad.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": -5
            }
        },
        "next": "day3_afternoon_seoyeon_talk_walk"
    },
    "day3_afternoon_seoyeon_talk_walk": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_sunset"
    },
    "day3_afternoon_seoyeon_sunset": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "background": "assets/images/background/street.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_sunset_2"
    },
    "day3_afternoon_seoyeon_sunset_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_sunset_3"
    },
    "day3_afternoon_seoyeon_sunset_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_seoyeon_pinky",
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_afternoon_seoyeon_hand",
                "stats": {
                    "Seoyeon": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day3_afternoon_seoyeon_try",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "day3_afternoon_seoyeon_pinky": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_freetalk"
    },
    "day3_afternoon_seoyeon_hand": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_freetalk"
    },
    "day3_afternoon_seoyeon_try": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_freetalk"
    },
    "day3_afternoon_seoyeon_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "maxTurns": 4,
        "next": "day3_afternoon_seoyeon_talk_walk_2"
    },
    "day3_afternoon_seoyeon_talk_walk_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "branches": [
            {
                "next": "day3_afternoon_seoyeon_guilt",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_afternoon_seoyeon_happy"
            }
        ]
    },
    "day3_afternoon_seoyeon_guilt": {
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_seoyeon_happy",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_afternoon_seoyeon_confess_walk",
                "stats": {
                    "Seoyeon": {
                        "affinity": -10
                    }
                }
            }
        ]
    },
    "day3_afternoon_seoyeon_happy": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "fade": true,
        "next": "day3_night_start"
    },
    "day3_afternoon_seoyeon_confess_walk": {
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "next": "day3_afternoon_seoyeon_angry"
    },
    "day3_afternoon_seoyeon_angry": {
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "setFlag": "day3_seoyeon_knows_others",
        "fade": true,
        "next": "day3_night_start"
    },
    "day3_afternoon_yuna_walk": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "setFlag": "day3_walked_with_yuna",
        "next": "day3_afternoon_yuna_walk_2"
    },
    "day3_afternoon_yuna_walk_2": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_walk_others"
    },
    "day3_afternoon_yuna_walk_others": {
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": -8
            }
        },
        "setFlag": "day3_seoyeon_witnessed_yuna",
        "next": "day3_afternoon_yuna_talk_walk"
    },
    "day3_afternoon_yuna_talk_walk": {
        "character": null,
        "background": "assets/images/background/street.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_cat"
    },
    "day3_afternoon_yuna_cat": {
        "background": "assets/images/background/street.png",
        "character": null,
        "sunset": true,
        "next": "day3_afternoon_yuna_cat_2"
    },
    "day3_afternoon_yuna_cat_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_cat_3"
    },
    "day3_afternoon_yuna_cat_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_yuna_cat_pat",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_afternoon_yuna_head_pat",
                "stats": {
                    "Yuna": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day3_afternoon_yuna_cat_watch",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            }
        ]
    },
    "day3_afternoon_yuna_cat_pat": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_freetalk"
    },
    "day3_afternoon_yuna_head_pat": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_head_pat_2"
    },
    "day3_afternoon_yuna_head_pat_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_freetalk"
    },
    "day3_afternoon_yuna_cat_watch": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_freetalk"
    },
    "day3_afternoon_yuna_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "maxTurns": 4,
        "next": "day3_afternoon_yuna_talk_walk_2"
    },
    "day3_afternoon_yuna_talk_walk_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_talk_walk_3"
    },
    "day3_afternoon_yuna_talk_walk_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_warning_walk"
    },
    "day3_afternoon_yuna_warning_walk": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_yuna_promise_keep",
                "stats": {
                    "Yuna": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_afternoon_yuna_late_question"
            }
        ]
    },
    "day3_afternoon_yuna_promise_keep": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "fade": true,
        "next": "day3_night_start"
    },
    "day3_afternoon_yuna_late_question": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day3_afternoon_yuna_late_warning"
    },
    "day3_afternoon_yuna_late_warning": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "fade": true,
        "next": "day3_night_start"
    },
    "day3_afternoon_dain_walk": {
        "character": null,
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "setFlag": "day3_walked_with_dain",
        "next": "day3_afternoon_dain_walk_2"
    },
    "day3_afternoon_dain_walk_2": {
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": -5
            },
            "Yuna": {
                "affinity": -5
            }
        },
        "background": "assets/images/background/street.png",
        "sunset": true,
        "next": "day3_afternoon_dain_talk_walk"
    },
    "day3_afternoon_dain_talk_walk": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day3_afternoon_dain_store"
    },
    "day3_afternoon_dain_store": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day3_afternoon_dain_store_2"
    },
    "day3_afternoon_dain_store_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_dain_ice_one",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_afternoon_dain_ice_share",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                }
            }
        ]
    },
    "day3_afternoon_dain_ice_one": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day3_afternoon_dain_park"
    },
    "day3_afternoon_dain_ice_share": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "next": "day3_afternoon_dain_park"
    },
    "day3_afternoon_dain_park": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day3_afternoon_dain_park_2"
    },
    "day3_afternoon_dain_park_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day3_afternoon_dain_park_3"
    },
    "day3_afternoon_dain_park_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/dain_sad.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_dain_promise_firm",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_afternoon_dain_pat",
                "stats": {
                    "Dain": {
                        "affinity": 10
                    }
                }
            }
        ]
    },
    "day3_afternoon_dain_promise_firm": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day3_afternoon_dain_freetalk"
    },
    "day3_afternoon_dain_pat": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "next": "day3_afternoon_dain_freetalk"
    },
    "day3_afternoon_dain_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "maxTurns": 4,
        "next": "day3_afternoon_dain_talk_walk_2"
    },
    "day3_afternoon_dain_talk_walk_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_dain_excited",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_afternoon_dain_cheer",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                }
            }
        ]
    },
    "day3_afternoon_dain_excited": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "fade": true,
        "next": "day3_night_start"
    },
    "day3_afternoon_dain_cheer": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "fade": true,
        "next": "day3_night_start"
    },
    "day3_afternoon_reject_all": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "setFlag": "day3_walked_alone",
        "next": "day3_afternoon_reject_reaction"
    },
    "day3_afternoon_reject_reaction": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "fade": true,
        "next": "day3_night_start"
    },
    "day3_afternoon_nobody_waiting": {
        "background": "assets/images/background/school.png",
        "sunset": true,
        "next": "day3_afternoon_alone_walk"
    },
    "day3_afternoon_alone_walk": {
        "character": null,
        "background": "assets/images/background/street.png",
        "sunset": true,
        "fade": true,
        "next": "day3_night_start"
    },
    "day3_afternoon_single_wait": {
        "sunset": true,
        "branches": [
            {
                "next": "day3_afternoon_seoyeon_solo",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_afternoon_yuna_solo",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_afternoon_dain_solo",
                "condition": "day3_dain_date_confirmed"
            }
        ]
    },
    "day3_afternoon_seoyeon_solo": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day3_afternoon_seoyeon_walk_2"
    },
    "day3_afternoon_yuna_solo": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "day3_afternoon_yuna_talk_walk"
    },
    "day3_afternoon_dain_solo": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "day3_afternoon_dain_talk_walk"
    },
    "day3_afternoon_teacher_wait": {
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_teacher_ride",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_afternoon_alone_walk"
            }
        ]
    },
    "day3_afternoon_teacher_ride": {
        "character": "assets/images/characters/teacher_normal.png",
        "background": "assets/images/background/street.png",
        "sunset": true,
        "next": "day3_afternoon_teacher_ride_2"
    },
    "day3_afternoon_teacher_ride_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "next": "day3_afternoon_teacher_ride_3"
    },
    "day3_afternoon_teacher_ride_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_teacher_hold",
                "stats": {
                    "Teacher": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day3_afternoon_teacher_stop",
                "stats": {
                    "Teacher": {
                        "affinity": -3
                    }
                }
            },
            {
                "next": "day3_afternoon_teacher_lean",
                "stats": {
                    "Teacher": {
                        "affinity": 8
                    }
                }
            }
        ]
    },
    "day3_afternoon_teacher_hold": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "next": "day3_afternoon_teacher_freetalk"
    },
    "day3_afternoon_teacher_stop": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day3_afternoon_teacher_freetalk"
    },
    "day3_afternoon_teacher_lean": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "next": "day3_afternoon_teacher_freetalk"
    },
    "day3_afternoon_teacher_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "maxTurns": 3,
        "next": "day3_afternoon_teacher_arrive"
    },
    "day3_afternoon_teacher_arrive": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "fade": true,
        "next": "day3_night_start"
    },
    "day3_afternoon_nurse_wait": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_nurse_walk",
                "stats": {
                    "Nurse": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_afternoon_alone_walk"
            }
        ]
    },
    "day3_afternoon_nurse_walk": {
        "character": "assets/images/characters/nurse_normal.png",
        "background": "assets/images/background/street.png",
        "sunset": true,
        "next": "day3_afternoon_nurse_band"
    },
    "day3_afternoon_nurse_band": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day3_afternoon_nurse_band_2"
    },
    "day3_afternoon_nurse_band_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day3_afternoon_nurse_caught",
                "stats": {
                    "Nurse": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_afternoon_nurse_hold",
                "stats": {
                    "Nurse": {
                        "affinity": 10
                    }
                }
            }
        ]
    },
    "day3_afternoon_nurse_caught": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "next": "day3_afternoon_nurse_freetalk"
    },
    "day3_afternoon_nurse_hold": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "next": "day3_afternoon_nurse_freetalk"
    },
    "day3_afternoon_nurse_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "maxTurns": 3,
        "next": "day3_afternoon_nurse_arrive"
    },
    "day3_afternoon_nurse_arrive": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "fade": true,
        "next": "day3_night_start"
    }
});
