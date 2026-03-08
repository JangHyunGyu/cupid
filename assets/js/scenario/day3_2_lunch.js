/**
 * ============================================================================
 * CUPID - day3_2_lunch
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[3]) SCENARIO[3] = {};

Object.assign(SCENARIO[3], {
    "day3_lunch_start": {
        "background": "assets/images/background/room_school.png",
        "bgm": "daily.mp3",
        "character": null,
        "next": "day3_lunch_check_dates"
    },
    "day3_lunch_check_dates": {
        "background": "assets/images/background/room_school.png",
        "branches": [
            {
                "next": "day3_lunch_multiple_approach",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_lunch_single_approach",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_lunch_single_approach",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_lunch_single_approach",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_lunch_single_approach",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_lunch_single_approach",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_lunch_normal"
            }
        ]
    },
    "day3_lunch_multiple_approach": {
        "character": null,
        "branches": [
            {
                "next": "day3_lunch_collision",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_lunch_collision_no_seoyeon"
            }
        ]
    },
    "day3_lunch_collision_no_seoyeon": {
        "character": null,
        "next": "day3_lunch_collision_no_seoyeon_choose"
    },
    "day3_lunch_collision_no_seoyeon_choose": {
        "character": null,
        "choices": [
            {
                "next": "day3_lunch_choose_yuna",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_lunch_choose_dain",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_lunch_together_propose"
            },
            {
                "next": "day3_lunch_escape",
                "stats": {
                    "Yuna": {
                        "affinity": -3
                    },
                    "Dain": {
                        "affinity": -3
                    }
                }
            }
        ]
    },
    "day3_lunch_collision": {
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            {
                "next": "day3_lunch_collision_seoyeon_yuna",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_lunch_collision_seoyeon_dain",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_lunch_seoyeon_only"
            }
        ]
    },
    "day3_lunch_collision_seoyeon_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_tension_1"
    },
    "day3_lunch_collision_seoyeon_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day3_lunch_tension_1"
    },
    "day3_lunch_tension_1": {
        "character": null,
        "next": "day3_lunch_tension_2"
    },
    "day3_lunch_tension_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day3_lunch_tension_3"
    },
    "day3_lunch_tension_3": {
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "day3_lunch_choose_seoyeon"
            },
            {
                "next": "day3_lunch_choose_yuna",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_lunch_choose_dain",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_lunch_together_propose"
            },
            {
                "next": "day3_lunch_escape",
                "stats": {
                    "Seoyeon": {
                        "affinity": -3
                    },
                    "Yuna": {
                        "affinity": -3
                    },
                    "Dain": {
                        "affinity": -3
                    }
                }
            }
        ]
    },
    "day3_lunch_choose_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "setFlag": "day3_lunch_with_seoyeon",
        "next": "day3_lunch_seoyeon_others_react"
    },
    "day3_lunch_seoyeon_others_react": {
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            {
                "next": "day3_lunch_yuna_jealous",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_lunch_dain_jealous",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_lunch_with_seoyeon_start"
            }
        ]
    },
    "day3_lunch_yuna_jealous": {
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {
            "Yuna": {
                "affinity": -5
            }
        },
        "setFlag": "day3_jealousy_yuna",
        "next": "day3_lunch_yuna_jealous_2"
    },
    "day3_lunch_yuna_jealous_2": {
        "character": null,
        "next": "day3_lunch_with_seoyeon_start"
    },
    "day3_lunch_dain_jealous": {
        "character": "assets/images/characters/dain_sad.png",
        "stats": {
            "Dain": {
                "affinity": -5
            }
        },
        "setFlag": "day3_jealousy_dain",
        "next": "day3_lunch_dain_jealous_2"
    },
    "day3_lunch_dain_jealous_2": {
        "character": null,
        "next": "day3_lunch_with_seoyeon_start"
    },
    "day3_lunch_with_seoyeon_start": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/store.png",
        "next": "day3_lunch_seoyeon_jealous_talk"
    },
    "day3_lunch_seoyeon_jealous_talk": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "day3_lunch_seoyeon_reassure"
            },
            {
                "next": "day3_lunch_seoyeon_deny"
            },
            {
                "next": "day3_lunch_seoyeon_tease"
            }
        ]
    },
    "day3_lunch_seoyeon_reassure": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 8
            }
        },
        "next": "day3_lunch_seoyeon_weekend"
    },
    "day3_lunch_seoyeon_deny": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": 2
            }
        },
        "next": "day3_lunch_seoyeon_weekend"
    },
    "day3_lunch_seoyeon_tease": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day3_lunch_seoyeon_weekend"
    },
    "day3_lunch_seoyeon_weekend": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            {
                "next": "day3_lunch_seoyeon_caught",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_lunch_seoyeon_promise"
            }
        ]
    },
    "day3_lunch_seoyeon_caught": {
        "choices": [
            {
                "next": "day3_lunch_seoyeon_lie",
                "setFlag": "day3_seoyeon_sunday_promise"
            },
            {
                "next": "day3_lunch_seoyeon_honest"
            },
            {
                "next": "day3_lunch_seoyeon_dodge"
            }
        ]
    },
    "day3_lunch_seoyeon_lie": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day3_lunch_seoyeon_end"
    },
    "day3_lunch_seoyeon_honest": {
        "character": "assets/images/characters/seyoun_sad.png",
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "next": "day3_lunch_seoyeon_honest_2"
    },
    "day3_lunch_seoyeon_honest_2": {
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "day3_lunch_seoyeon_end"
    },
    "day3_lunch_seoyeon_dodge": {
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": -2
            }
        },
        "next": "day3_lunch_seoyeon_end"
    },
    "day3_lunch_seoyeon_promise": {
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "setFlag": "day3_seoyeon_weekend_promise",
        "next": "day3_lunch_seoyeon_end"
    },
    "day3_lunch_seoyeon_end": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "background": "assets/images/background/school.png",
        "next": "day3_lunch_seoyeon_bench"
    },
    "day3_lunch_seoyeon_bench": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day3_lunch_seoyeon_bench_2"
    },
    "day3_lunch_seoyeon_bench_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "choices": [
            {
                "next": "day3_lunch_seoyeon_pat",
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_lunch_seoyeon_same",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_lunch_seoyeon_silent",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "day3_lunch_seoyeon_pat": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "day3_lunch_seoyeon_freetalk"
    },
    "day3_lunch_seoyeon_same": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day3_lunch_seoyeon_freetalk"
    },
    "day3_lunch_seoyeon_silent": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "day3_lunch_seoyeon_freetalk"
    },
    "day3_lunch_seoyeon_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "maxTurns": 4,
        "next": "day3_lunch_seoyeon_bell"
    },
    "day3_lunch_seoyeon_bell": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "fade": true,
        "next": "day3_afternoon_start"
    },
    "day3_lunch_choose_yuna": {
        "character": null,
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "setFlag": "day3_lunch_with_yuna",
        "next": "day3_lunch_yuna_others_react"
    },
    "day3_lunch_yuna_others_react": {
        "character": null,
        "branches": [
            {
                "next": "day3_lunch_yuna_seoyeon_jealous",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_lunch_with_yuna_start"
            }
        ]
    },
    "day3_lunch_yuna_seoyeon_jealous": {
        "character": "assets/images/characters/seyoun_sad.png",
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "setFlag": "day3_jealousy_seoyeon",
        "next": "day3_lunch_with_yuna_start"
    },
    "day3_lunch_with_yuna_start": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_yuna_rooftop"
    },
    "day3_lunch_yuna_rooftop": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/top_school.png",
        "next": "day3_lunch_yuna_bento"
    },
    "day3_lunch_yuna_bento": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_yuna_bento_2"
    },
    "day3_lunch_yuna_bento_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day3_lunch_yuna_bento_ask",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_lunch_yuna_bento_taste",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "day3_lunch_yuna_bento_ask": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "day3_lunch_yuna_bento_eat"
    },
    "day3_lunch_yuna_bento_taste": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_yuna_bento_eat"
    },
    "day3_lunch_yuna_bento_eat": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "day3_lunch_yuna_lap"
    },
    "day3_lunch_yuna_lap": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "day3_lunch_yuna_lap_2"
    },
    "day3_lunch_yuna_lap_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day3_lunch_yuna_lap_yes",
                "stats": {
                    "Yuna": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day3_lunch_yuna_lap_no",
                "stats": {
                    "Yuna": {
                        "affinity": -2
                    }
                }
            }
        ]
    },
    "day3_lunch_yuna_lap_yes": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "day3_lunch_yuna_lap_talk"
    },
    "day3_lunch_yuna_lap_no": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_yuna_talk_1"
    },
    "day3_lunch_yuna_lap_talk": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "day3_lunch_yuna_freetalk"
    },
    "day3_lunch_yuna_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "maxTurns": 4,
        "next": "day3_lunch_yuna_talk_1"
    },
    "day3_lunch_yuna_talk_1": {
        "branches": [
            {
                "next": "day3_lunch_yuna_talk_1_jealous",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_lunch_yuna_single_end"
            }
        ]
    },
    "day3_lunch_yuna_talk_1_jealous": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_yuna_talk_2"
    },
    "day3_lunch_yuna_single_end": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "fade": true,
        "next": "day3_afternoon_start"
    },
    "day3_lunch_yuna_talk_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day3_lunch_yuna_special"
            },
            {
                "next": "day3_lunch_yuna_everyone"
            },
            {
                "next": "day3_lunch_yuna_question"
            }
        ]
    },
    "day3_lunch_yuna_special": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "stats": {
            "Yuna": {
                "affinity": 10
            }
        },
        "next": "day3_lunch_yuna_warning"
    },
    "day3_lunch_yuna_everyone": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_sad.png",
        "stats": {
            "Yuna": {
                "affinity": -3
            }
        },
        "next": "day3_lunch_yuna_warning"
    },
    "day3_lunch_yuna_question": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_yuna_warning"
    },
    "day3_lunch_yuna_warning": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_yuna_warning_2"
    },
    "day3_lunch_yuna_warning_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "fade": true,
        "next": "day3_afternoon_start"
    },
    "day3_lunch_choose_dain": {
        "character": null,
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "setFlag": "day3_lunch_with_dain",
        "next": "day3_lunch_dain_others_react"
    },
    "day3_lunch_dain_others_react": {
        "character": null,
        "branches": [
            {
                "next": "day3_lunch_dain_seoyeon_jealous",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_lunch_with_dain_start"
            }
        ]
    },
    "day3_lunch_dain_seoyeon_jealous": {
        "character": "assets/images/characters/seyoun_sad.png",
        "stats": {
            "Seoyeon": {
                "affinity": -4
            }
        },
        "setFlag": "day3_jealousy_seoyeon",
        "next": "day3_lunch_with_dain_start"
    },
    "day3_lunch_with_dain_start": {
        "character": "assets/images/characters/dain_laugh.png",
        "background": "assets/images/background/room_school.png",
        "next": "day3_lunch_dain_talk_1"
    },
    "day3_lunch_dain_talk_1": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "day3_lunch_dain_talk_2"
    },
    "day3_lunch_dain_talk_2": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "day3_lunch_dain_talk_3"
    },
    "day3_lunch_dain_talk_3": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            {
                "next": "day3_lunch_dain_confess"
            },
            {
                "next": "day3_lunch_dain_friends"
            },
            {
                "next": "day3_lunch_dain_jealous_tease"
            }
        ]
    },
    "day3_lunch_dain_confess": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_shy.png",
        "stats": {
            "Dain": {
                "affinity": 10
            }
        },
        "next": "day3_lunch_dain_end"
    },
    "day3_lunch_dain_friends": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "stats": {
            "Dain": {
                "affinity": 2
            }
        },
        "next": "day3_lunch_dain_end"
    },
    "day3_lunch_dain_jealous_tease": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_shy.png",
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day3_lunch_dain_serious"
    },
    "day3_lunch_dain_serious": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "day3_lunch_dain_serious_2"
    },
    "day3_lunch_dain_serious_2": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "day3_lunch_dain_serious_choice"
    },
    "day3_lunch_dain_serious_choice": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_shy.png",
        "choices": [
            {
                "next": "day3_lunch_dain_special",
                "stats": {
                    "Dain": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day3_lunch_dain_unsure",
                "stats": {
                    "Dain": {
                        "affinity": 2
                    }
                }
            },
            {
                "next": "day3_lunch_dain_friend",
                "stats": {
                    "Dain": {
                        "affinity": -5
                    }
                }
            }
        ]
    },
    "day3_lunch_dain_special": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "day3_lunch_dain_freetalk"
    },
    "day3_lunch_dain_unsure": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "day3_lunch_dain_freetalk"
    },
    "day3_lunch_dain_friend": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "day3_lunch_dain_end"
    },
    "day3_lunch_dain_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_shy.png",
        "maxTurns": 3,
        "next": "day3_lunch_dain_end"
    },
    "day3_lunch_dain_end": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "branches": [
            {
                "next": "day3_lunch_dain_conflict",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_lunch_dain_promise"
            }
        ]
    },
    "day3_lunch_dain_conflict": {
        "choices": [
            {
                "next": "day3_lunch_dain_promise"
            },
            {
                "next": "day3_lunch_dain_maybe"
            }
        ]
    },
    "day3_lunch_dain_promise": {
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "fade": true,
        "next": "day3_afternoon_start"
    },
    "day3_lunch_dain_maybe": {
        "character": "assets/images/characters/dain_sad.png",
        "stats": {
            "Dain": {
                "affinity": -3
            }
        },
        "next": "day3_lunch_dain_suspicious"
    },
    "day3_lunch_dain_suspicious": {
        "character": "assets/images/characters/dain_normal.png",
        "fade": true,
        "next": "day3_afternoon_start"
    },
    "day3_lunch_together_propose": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day3_lunch_together_react"
    },
    "day3_lunch_together_react": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day3_lunch_together_awkward"
    },
    "day3_lunch_together_awkward": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day3_lunch_together_2"
    },
    "day3_lunch_together_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/store.png",
        "next": "day3_lunch_together_3"
    },
    "day3_lunch_together_3": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "day3_lunch_together_4"
    },
    "day3_lunch_together_4": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            {
                "next": "day3_lunch_together_yuna",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_lunch_together_explosion"
            }
        ]
    },
    "day3_lunch_together_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_together_explosion"
    },
    "day3_lunch_together_explosion": {
        "character": "assets/images/characters/yuna_normal.png",
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
        },
        "setFlag": "day3_caught_multiple_dates",
        "next": "day3_lunch_together_silence"
    },
    "day3_lunch_together_silence": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_together_seoyeon_react"
    },
    "day3_lunch_together_seoyeon_react": {
        "character": "assets/images/characters/seyoun_sad.png",
        "stats": {
            "Seoyeon": {
                "affinity": -3
            }
        },
        "next": "day3_lunch_together_yuna_lie"
    },
    "day3_lunch_together_yuna_lie": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_lunch_together_yuna_lie_2"
    },
    "day3_lunch_together_yuna_lie_2": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day3_lunch_together_yuna_lie_3"
    },
    "day3_lunch_together_yuna_lie_3": {
        "character": "assets/images/characters/yuna_sad.png",
        "stats": {
            "Yuna": {
                "affinity": -3
            }
        },
        "setFlag": "day3_yuna_lied",
        "next": "day3_lunch_together_confront"
    },
    "day3_lunch_together_confront": {
        "character": "assets/images/characters/seyoun_sad.png",
        "choices": [
            {
                "next": "day3_lunch_apologize",
                "stats": {
                    "Seoyeon": {
                        "affinity": -8
                    },
                    "Yuna": {
                        "affinity": -8
                    },
                    "Dain": {
                        "affinity": -8
                    }
                }
            },
            {
                "next": "day3_lunch_excuse",
                "stats": {
                    "Seoyeon": {
                        "affinity": -15
                    },
                    "Yuna": {
                        "affinity": -15
                    },
                    "Dain": {
                        "affinity": -15
                    }
                }
            },
            {
                "next": "day3_lunch_run",
                "stats": {
                    "Seoyeon": {
                        "affinity": -20
                    },
                    "Yuna": {
                        "affinity": -20
                    },
                    "Dain": {
                        "affinity": -20
                    }
                }
            }
        ]
    },
    "day3_lunch_apologize": {
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "day3_lunch_apologize_react"
    },
    "day3_lunch_apologize_react": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day3_lunch_together_end"
    },
    "day3_lunch_excuse": {
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "day3_lunch_excuse_react"
    },
    "day3_lunch_excuse_react": {
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "day3_lunch_excuse_react_2"
    },
    "day3_lunch_excuse_react_2": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day3_lunch_excuse_react_3"
    },
    "day3_lunch_excuse_react_3": {
        "character": "assets/images/characters/yuna_sad.png",
        "stats": {
            "Yuna": {
                "affinity": -5
            }
        },
        "setFlag": "day3_yuna_hurt",
        "next": "day3_lunch_together_end"
    },
    "day3_lunch_run": {
        "character": "assets/images/characters/seyoun_sad.png",
        "setFlag": "day3_lunch_escaped",
        "fade": true,
        "next": "day3_afternoon_start"
    },
    "day3_lunch_together_end": {
        "character": "assets/images/characters/dain_normal.png",
        "fade": true,
        "next": "day3_afternoon_start"
    },
    "day3_lunch_escape": {
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlag": "day3_lunch_escaped",
        "next": "day3_lunch_escape_2"
    },
    "day3_lunch_escape_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "fade": true,
        "next": "day3_afternoon_start"
    },
    "day3_lunch_single_approach": {
        "choices": [
            {
                "next": "day3_lunch_seoyeon_only",
                "condition": "has_number_seyoun"
            },
            {
                "next": "day3_lunch_yuna_only",
                "condition": "has_number_yuna"
            },
            {
                "next": "day3_lunch_dain_only",
                "condition": "has_number_dain"
            },
            {
                "next": "day3_lunch_nurse",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_lunch_teacher",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_lunch_alone"
            }
        ]
    },
    "day3_lunch_nurse": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlag": "day3_lunch_with_nurse",
        "next": "day3_lunch_nurse_2"
    },
    "day3_lunch_nurse_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day3_lunch_nurse_3"
    },
    "day3_lunch_nurse_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day3_lunch_nurse_freetalk"
    },
    "day3_lunch_nurse_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "maxTurns": 3,
        "next": "day3_lunch_nurse_4"
    },
    "day3_lunch_nurse_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "fade": true,
        "next": "day3_afternoon_start"
    },
    "day3_lunch_teacher": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlag": "day3_lunch_with_teacher",
        "next": "day3_lunch_teacher_2"
    },
    "day3_lunch_teacher_2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_shy.png",
        "stats": {
            "Teacher": {
                "affinity": 5
            }
        },
        "next": "day3_lunch_teacher_3"
    },
    "day3_lunch_teacher_3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "day3_lunch_teacher_freetalk"
    },
    "day3_lunch_teacher_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_shy.png",
        "maxTurns": 3,
        "next": "day3_lunch_teacher_4"
    },
    "day3_lunch_teacher_4": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_shy.png",
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "fade": true,
        "next": "day3_afternoon_start"
    },
    "day3_lunch_seoyeon_only": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "background": "assets/images/background/store.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "setFlag": "day3_lunch_with_seoyeon",
        "next": "day3_lunch_seoyeon_weekend"
    },
    "day3_lunch_yuna_only": {
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "setFlag": "day3_lunch_with_yuna",
        "next": "day3_lunch_yuna_rooftop"
    },
    "day3_lunch_dain_only": {
        "character": "assets/images/characters/dain_laugh.png",
        "background": "assets/images/background/store.png",
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "setFlag": "day3_lunch_with_dain",
        "next": "day3_lunch_dain_talk_1"
    },
    "day3_lunch_normal": {
        "background": "assets/images/background/store.png",
        "next": "day3_lunch_normal_2"
    },
    "day3_lunch_normal_2": {
        "background": "assets/images/background/store.png",
        "next": "day3_lunch_alone"
    },
    "day3_lunch_alone": {
        "background": "assets/images/background/store.png",
        "fade": true,
        "next": "day3_afternoon_start"
    }
});
