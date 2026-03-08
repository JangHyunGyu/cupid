/**
 * ============================================================================
 * CUPID - day2_3_afterschool
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
        "next": "day2_after_school"
    },
    "day2_afternoon_nurse_skip": {
        "background": "assets/images/background/nurse_room.jpg",
        "bgm": "sunset2.mp3",
        "character": null,
        "sunset": true,
        "setFlag": "woke_up_in_nurse_room",
        "next": "day2_after_school"
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
        ]
    },
    "day2_after_nurse_stay": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_after_nurse_3"
    },
    "day2_after_seoyeon": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day2_after_seoyeon_work"
    },
    "day2_after_seoyeon_work": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day2_after_seoyeon_2"
    },
    "day2_after_seoyeon_2": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day2_after_seoyeon_3"
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
        ]
    },
    "day2_seoyeon_why": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_home_high": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "sunset": true,
        "next": "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_home": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_home_low": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": -8
            }
        },
        "next": "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_massage_high": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "sunset": true,
        "next": "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_massage": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_massage_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": -10
            }
        },
        "next": "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_night_talk": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "setFlag": "day2_met_seoyeon_after",
        "next": "day2_seoyeon_dain_encounter"
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
        ]
    },
    "day2_seoyeon_dain_met": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_laugh.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_react"
    },
    "day2_seoyeon_dain_new": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_laugh.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_react"
    },
    "day2_seoyeon_dain_react": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_laugh.png"
        },
        "sunset": true,
        "setFlag": "knows_name_dain",
        "next": "day2_seoyeon_dain_choice"
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
        ]
    },
    "day2_seoyeon_dain_yes": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_laugh.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_end"
    },
    "day2_seoyeon_dain_no": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_normal.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_end"
    },
    "day2_seoyeon_dain_both": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_normal.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_both_2"
    },
    "day2_seoyeon_dain_both_2": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_pout.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_both_3"
    },
    "day2_seoyeon_dain_both_3": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_pout.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_both_4"
    },
    "day2_seoyeon_dain_both_4": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_normal.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_both_5"
    },
    "day2_seoyeon_dain_both_5": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_normal.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_end"
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
        ]
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
        ]
    },
    "day2_seoyeon_contact_success": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day2_end"
    },
    "day2_seoyeon_contact_fail": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": -10
            }
        },
        "next": "day2_end"
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
        ]
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
        ]
    },
    "day2_after_yuna_new": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "setFlag": "met_yuna",
        "next": "day2_after_yuna_new_name_ask"
    },
    "day2_after_yuna_new_name_ask": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day2_after_yuna_new_name_share"
    },
    "day2_after_yuna_new_name_share": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "setFlag": "knows_name_yuna",
        "next": "day2_after_yuna_new_follow"
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
        ]
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
        ]
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
        ]
    },
    "day2_after_yuna_3_pre_again": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day2_after_yuna_3"
    },
    "day2_after_yuna_3_pre_new": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day2_after_yuna_3"
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
        ]
    },
    "day2_yuna_meaning": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day2_yuna_night_talk"
    },
    "day2_yuna_scary_high": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day2_yuna_night_talk"
    },
    "day2_yuna_scary": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "day2_yuna_night_talk"
    },
    "day2_yuna_scary_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": -10
            }
        },
        "next": "day2_yuna_night_talk"
    },
    "day2_yuna_eye": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "day2_yuna_night_talk"
    },
    "day2_yuna_night_talk": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "setFlag": "day2_met_yuna_after",
        "next": "day2_yuna_nurse_encounter"
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
        ]
    },
    "day2_yuna_nurse_met": {
        "characters": {
            "left": "assets/images/characters/yuna_normal.png",
            "right": "assets/images/characters/nurse_normal.png"
        },
        "sunset": true,
        "next": "day2_yuna_nurse_react"
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
        "next": "day2_yuna_nurse_react"
    },
    "day2_yuna_nurse_react": {
        "characters": {
            "left": "assets/images/characters/yuna_normal.png",
            "right": "assets/images/characters/nurse_normal.png"
        },
        "sunset": true,
        "next": "day2_yuna_nurse_choice"
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
        ]
    },
    "day2_yuna_nurse_protect": {
        "characters": {
            "left": "assets/images/characters/yuna_shy.png",
            "right": "assets/images/characters/nurse_normal.png"
        },
        "sunset": true,
        "next": "day2_yuna_nurse_end"
    },
    "day2_yuna_nurse_excuse": {
        "characters": {
            "left": "assets/images/characters/yuna_normal.png",
            "right": "assets/images/characters/nurse_normal.png"
        },
        "sunset": true,
        "next": "day2_yuna_nurse_end"
    },
    "day2_yuna_nurse_silent": {
        "characters": {
            "left": "assets/images/characters/yuna_normal.png",
            "right": "assets/images/characters/nurse_normal.png"
        },
        "sunset": true,
        "next": "day2_yuna_nurse_end"
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
        ]
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
        ]
    },
    "day2_yuna_contact_success": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 8
            }
        },
        "next": "day2_end"
    },
    "day2_yuna_contact_fail": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day2_end"
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
        ]
    },
    "day2_after_dain_met": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day2_after_dain_practice"
    },
    "day2_after_dain_practice": {
        "character": "assets/images/characters/dain_sweat.png",
        "sunset": true,
        "next": "day2_after_dain_3"
    },
    "day2_after_dain_new": {
        "character": "assets/images/characters/dain_sweat.png",
        "sunset": true,
        "setFlag": "met_dain",
        "next": "day2_after_dain_new_name_ask"
    },
    "day2_after_dain_new_name_ask": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day2_after_dain_new_name_share"
    },
    "day2_after_dain_new_name_share": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "setFlag": "knows_name_dain",
        "next": "day2_after_dain_3"
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
        ]
    },
    "day2_dain_praise": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day2_dain_night_talk"
    },
    "day2_dain_match": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "setFlag": "day2_dain_bet",
        "next": "day2_dain_night_talk"
    },
    "day2_dain_food": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day2_dain_night_talk"
    },
    "day2_dain_night_talk": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "setFlag": "day2_met_dain_after",
        "next": "day2_dain_yuna_encounter"
    },
    "day2_dain_yuna_encounter": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day2_dain_yuna_spot"
    },
    "day2_dain_yuna_spot": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day2_dain_yuna_choice"
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
        ]
    },
    "day2_dain_yuna_know": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day2_dain_yuna_end"
    },
    "day2_dain_yuna_unknown": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day2_dain_yuna_end"
    },
    "day2_dain_yuna_compliment": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day2_dain_yuna_end"
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
        ]
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
        ]
    },
    "day2_dain_contact_success": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 8
            }
        },
        "next": "day2_end"
    },
    "day2_dain_contact_fail": {
        "character": "assets/images/characters/dain_pout.png",
        "sunset": true,
        "next": "day2_end"
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
        ]
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
        "next": "day2_after_nurse_met_check"
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
        ]
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
        ]
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
        ]
    },
    "day2_after_nurse_invited": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_after_nurse_3"
    },
    "day2_after_nurse_new": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "setFlag": "met_nurse",
        "next": "day2_after_nurse_new_name_ask"
    },
    "day2_after_nurse_new_name_ask": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_after_nurse_new_name_share"
    },
    "day2_after_nurse_new_name_share": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "setFlag": "knows_name_nurse",
        "next": "day2_after_nurse_3"
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
        ]
    },
    "day2_nurse_miss": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_nurse_night_talk"
    },
    "day2_nurse_miss_normal": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_nurse_night_talk"
    },
    "day2_nurse_miss_low": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "stats": {
            "Nurse": {
                "affinity": -8
            }
        },
        "next": "day2_nurse_night_talk"
    },
    "day2_nurse_rest": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_nurse_night_talk"
    },
    "day2_nurse_aroma": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_nurse_night_talk"
    },
    "day2_nurse_night_talk": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_nurse_night_talk_2"
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
        ]
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
        ]
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
        "next": "day2_end"
    },
    "nurse_contact_home_fail_after": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_end"
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
        ]
    },
    "day2_nurse_contact_success": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "stats": {
            "Nurse": {
                "affinity": 10
            }
        },
        "next": "day2_end"
    },
    "day2_nurse_contact_fail": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_end"
    },
    "day2_after_teacher": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day2_after_teacher_2"
    },
    "day2_after_teacher_2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day2_after_teacher_3"
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
        ]
    },
    "day2_after_teacher_work": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day2_after_teacher_work_2"
    },
    "day2_after_teacher_work_2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day2_after_teacher_branch"
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
        "next": "day2_after_teacher_normal"
    },
    "day2_after_teacher_special": {
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day2_after_teacher_special_2"
    },
    "day2_after_teacher_special_2": {
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day2_after_teacher_special_3"
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
        "next": "day2_end"
    },
    "day2_after_teacher_normal": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day2_end"
    },
    "day2_after_teacher_coffee": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day2_after_teacher_normal"
    },
    "day2_after_teacher_worry": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day2_after_teacher_normal"
    }
});
