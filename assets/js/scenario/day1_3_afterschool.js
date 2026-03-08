/**
 * ============================================================================
 * CUPID - day1_3_afterschool
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[1]) SCENARIO[1] = {};

Object.assign(SCENARIO[1], {
    "after_school_start": {
        "background": "assets/images/background/room_school.png",
        "bgm": "sunset1.mp3",
        "character": null,
        "sunset": true,
        "next": "after_school_start_2"
    },
    "after_school_start_2": {
        "background": "assets/images/background/room_school.png",
        "sunset": true,
        "next": "after_school_start_3"
    },
    "after_school_start_3": {
        "background": "assets/images/background/room_school.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_seoyeon"
            },
            {
                "next": "after_yuna",
                "condition": "met_yuna"
            },
            {
                "next": "after_yuna_new",
                "excludeCondition": "met_yuna"
            },
            {
                "next": "after_dain",
                "condition": "met_dain"
            },
            {
                "next": "after_dain_new",
                "excludeCondition": "met_dain"
            },
            {
                "next": "after_nurse",
                "condition": "met_nurse"
            },
            {
                "next": "after_nurse_new",
                "excludeCondition": "met_nurse"
            },
            {
                "next": "after_teacher"
            },
            {
                "next": "after_home"
            }
        ]
    },
    "after_teacher": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "after_teacher_2"
    },
    "after_teacher_2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "after_teacher_3"
    },
    "after_teacher_3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_teacher_help",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "after_teacher_miss",
                "stats": {
                    "Teacher": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "after_teacher_info",
                "stats": {
                    "Teacher": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "after_teacher_help": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "after_teacher_contact"
    },
    "after_teacher_miss": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "after_teacher_contact"
    },
    "after_teacher_info": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "after_teacher_contact"
    },
    "after_teacher_contact": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "branches": [
            {
                "next": "after_home",
                "condition": "has_number_teacher"
            },
            {
                "next": "after_teacher_contact_ask"
            }
        ]
    },
    "after_teacher_contact_ask": {
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "setFlags": [
            "has_number_teacher",
            "has_any_contact"
        ],
        "stats": {
            "Teacher": {
                "affinity": 5
            }
        },
        "next": "after_home"
    },
    "after_seoyeon": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "after_seoyeon_2"
    },
    "after_seoyeon_2": {
        "background": "assets/images/background/student_room.png",
        "affinityChar": "Seoyeon",
        "sunset": true,
        "affinityBranches": [
            {
                "minAffinity": 15,
                "next": "after_seoyeon_3_high"
            },
            {
                "minAffinity": -5,
                "next": "after_seoyeon_3_standard"
            },
            {
                "minAffinity": -100,
                "next": "after_seoyeon_3_low"
            }
        ]
    },
    "after_seoyeon_3_standard": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_seoyeon_help",
                "setFlag": "helped_seoyeon",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "after_seoyeon_worry",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "after_seoyeon_rude",
                "stats": {
                    "Seoyeon": {
                        "affinity": -30
                    }
                }
            }
        ]
    },
    "after_seoyeon_3_high": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_seoyeon_help",
                "setFlag": "helped_seoyeon",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "after_seoyeon_worry",
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "after_seoyeon_compliment",
                "setFlag": "helped_seoyeon",
                "stats": {
                    "Seoyeon": {
                        "affinity": 10
                    }
                }
            }
        ]
    },
    "after_seoyeon_3_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_home",
                "stats": {
                    "Seoyeon": {
                        "affinity": -5
                    }
                }
            },
            {
                "next": "after_home",
                "stats": {
                    "Seoyeon": {
                        "affinity": -15
                    }
                }
            }
        ]
    },
    "after_seoyeon_rude": {
        "character": "assets/images/characters/seyoun_angry.png",
        "sunset": true,
        "next": "after_seoyeon_rude_2"
    },
    "after_seoyeon_rude_2": {
        "character": "assets/images/characters/seyoun_angry.png",
        "sunset": true,
        "next": "after_home"
    },
    "after_seoyeon_compliment": {
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "after_seoyeon_help_action"
    },
    "after_seoyeon_help": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "after_seoyeon_help_dialogue"
    },
    "after_seoyeon_help_dialogue": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "after_seoyeon_help_action"
    },
    "after_seoyeon_help_action": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "after_seoyeon_help_3"
    },
    "after_seoyeon_help_3": {
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "after_seoyeon_cafe"
    },
    "after_seoyeon_cafe": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "after_seoyeon_cafe_2"
    },
    "after_seoyeon_cafe_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "after_seoyeon_cafe_2_2"
    },
    "after_seoyeon_cafe_2_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "after_seoyeon_cafe_3"
    },
    "after_seoyeon_cafe_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_seoyeon_promise",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "after_seoyeon_tease",
                "stats": {
                    "Seoyeon": {
                        "affinity": 4
                    }
                }
            }
        ]
    },
    "after_seoyeon_promise": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "after_seoyeon_promise_2"
    },
    "after_seoyeon_promise_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "branches": [
            {
                "next": "after_home",
                "condition": "has_number_seyoun"
            },
            {
                "next": "after_seoyeon_contact_ask"
            }
        ]
    },
    "after_seoyeon_tease": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "sunset": true,
        "next": "after_seoyeon_tease_2"
    },
    "after_seoyeon_tease_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "sunset": true,
        "branches": [
            {
                "next": "after_home",
                "condition": "has_number_seyoun"
            },
            {
                "next": "after_seoyeon_contact_ask"
            }
        ]
    },
    "after_seoyeon_contact_ask": {
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_seoyeon_contact_success",
                "setFlags": [
                    "has_number_seyoun",
                    "has_any_contact"
                ]
            },
            {
                "next": "after_seoyeon_contact_fail"
            }
        ]
    },
    "after_seoyeon_contact_success": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "after_home"
    },
    "after_seoyeon_contact_fail": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": -10
            }
        },
        "next": "after_home"
    },
    "after_seoyeon_worry": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "after_seoyeon_worry_2"
    },
    "after_seoyeon_worry_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "after_seoyeon_cafe"
    },
    "after_yuna_new": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_yuna_new_2"
    },
    "after_yuna_new_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "setFlags": [
            "met_yuna",
            "knows_name_yuna"
        ],
        "next": "after_yuna_3"
    },
    "after_yuna": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_yuna_2"
    },
    "after_yuna_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_yuna_3"
    },
    "after_yuna_3": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "yuna_after_talk",
                "condition": "knows_name_yuna"
            },
            {
                "next": "yuna_name_share_pre"
            }
        ]
    },
    "yuna_after_talk": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "yuna_after_choices"
    },
    "yuna_after_choices": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_yuna_secret",
                "affinityChar": "Yuna",
                "affinityBranches": [
                    {
                        "minAffinity": 11,
                        "next": "after_yuna_secret_deep"
                    },
                    {
                        "minAffinity": 5,
                        "next": "after_yuna_secret"
                    },
                    {
                        "minAffinity": -999,
                        "next": "after_yuna_secret_fail"
                    }
                ]
            },
            {
                "next": "after_yuna_boring"
            },
            {
                "next": "after_yuna_rude"
            }
        ]
    },
    "yuna_name_share_pre": {
        "sunset": true,
        "setFlag": "knows_name_yuna",
        "next": "yuna_name_share"
    },
    "yuna_name_share": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "yuna_after_choices"
    },
    "after_yuna_know": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "after_yuna_know_2"
    },
    "after_yuna_know_2": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "after_yuna_know_2_2"
    },
    "after_yuna_know_2_2": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "after_yuna_know_3"
    },
    "after_yuna_know_3": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "after_yuna_move_rooftop"
    },
    "after_yuna_move_rooftop": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "sunset": true,
        "next": "after_yuna_rooftop"
    },
    "after_yuna_rooftop": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_yuna_rooftop_2"
    },
    "after_yuna_rooftop_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_yuna_rooftop_2_2"
    },
    "after_yuna_rooftop_2_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "after_yuna_rooftop_3"
    },
    "after_yuna_rooftop_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_yuna_together"
            },
            {
                "next": "after_yuna_scared"
            }
        ]
    },
    "after_yuna_together": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "after_yuna_together_2"
    },
    "after_yuna_together_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "yuna_contact_exchange"
    },
    "yuna_contact_exchange": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "yuna_contact_success",
                "setFlags": [
                    "has_number_yuna",
                    "has_any_contact"
                ]
            },
            {
                "next": "yuna_contact_fail",
                "stats": {
                    "Yuna": {
                        "affinity": -25
                    }
                }
            }
        ]
    },
    "yuna_contact_success": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 15
            }
        },
        "next": "after_home"
    },
    "yuna_contact_fail": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_home"
    },
    "after_yuna_scared": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_yuna_scared_2"
    },
    "after_yuna_scared_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "after_home"
    },
    "after_yuna_secret": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_yuna_secret_2"
    },
    "after_yuna_secret_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_yuna_know"
    },
    "after_yuna_secret_deep": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 10
            }
        },
        "next": "after_yuna_rooftop"
    },
    "after_yuna_secret_fail": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": -20
            }
        },
        "next": "after_home"
    },
    "after_yuna_boring": {
        "character": "assets/images/characters/yuna_bored.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": -10
            }
        },
        "next": "after_yuna_boring_2"
    },
    "after_yuna_boring_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_home"
    },
    "after_yuna_rude": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": -15
            }
        },
        "next": "after_yuna_rude_2"
    },
    "after_yuna_rude_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after_home"
    },
    "after_dain_new": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_active.png",
        "sunset": true,
        "next": "after_dain_new_intro"
    },
    "after_dain_new_intro": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "sunset": true,
        "setFlag": "met_dain",
        "next": "after_dain_new_name_ask"
    },
    "after_dain_new_name_ask": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "sunset": true,
        "next": "after_dain_new_name_share"
    },
    "after_dain_new_name_share": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "sunset": true,
        "setFlag": "knows_name_dain",
        "next": "after_dain_2"
    },
    "after_dain": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_active.png",
        "sunset": true,
        "next": "after_dain_2"
    },
    "after_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "sunset": true,
        "next": "dain_free_talk"
    },
    "dain_free_talk": {
        "type": "free_talk",
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "affinityChar": "Dain",
        "affinityBranches": [
            {
                "minAffinity": 20,
                "next": "after_dain_3_high"
            },
            {
                "minAffinity": -10,
                "next": "after_dain_3"
            },
            {
                "minAffinity": -100,
                "next": "after_dain_3_low"
            }
        ],
        "next": "after_dain_3"
    },
    "after_dain_3_high": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_dain_cheer_high",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "after_dain_help_high",
                "stats": {
                    "Dain": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "after_dain_tired_high",
                "stats": {
                    "Dain": {
                        "affinity": -20
                    }
                }
            }
        ]
    },
    "after_dain_3_low": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_dain_cheer_low",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "after_dain_help_low",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "after_dain_tired_low",
                "stats": {
                    "Dain": {
                        "affinity": -20
                    }
                }
            }
        ]
    },
    "after_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "after_dain_cheer_normal",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "after_dain_help_normal",
                "stats": {
                    "Dain": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "after_dain_tired_normal",
                "stats": {
                    "Dain": {
                        "affinity": -20
                    }
                }
            }
        ]
    },
    "after_dain_tired_high": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "next": "after_dain_tired_high_2"
    },
    "after_dain_tired_high_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "next": "after_home"
    },
    "after_dain_tired_low": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "sunset": true,
        "next": "after_dain_tired_low_2"
    },
    "after_dain_tired_low_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "sunset": true,
        "next": "after_home"
    },
    "after_dain_tired_normal": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "sunset": true,
        "next": "after_dain_tired_normal_2"
    },
    "after_dain_tired_normal_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "sunset": true,
        "next": "after_home"
    },
    "after_dain_help_high": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "after_dain_help_high_2"
    },
    "after_dain_help_high_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_active.png",
        "sunset": true,
        "next": "after_dain_normal"
    },
    "after_dain_help_low": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "sunset": true,
        "next": "after_dain_help_low_2"
    },
    "after_dain_help_low_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "sunset": true,
        "next": "after_dain_normal"
    },
    "after_dain_help_normal": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "after_dain_help_normal_2"
    },
    "after_dain_help_normal_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_active.png",
        "sunset": true,
        "next": "after_dain_normal"
    },
    "after_dain_cheer_high": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "next": "after_dain_cheer_high_2"
    },
    "after_dain_cheer_high_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "next": "after_dain_end"
    },
    "after_dain_cheer_low": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "sunset": true,
        "next": "after_dain_cheer_low_2"
    },
    "after_dain_cheer_low_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "sunset": true,
        "next": "after_dain_end"
    },
    "after_dain_cheer_normal": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "after_dain_cheer_normal_2"
    },
    "after_dain_cheer_normal_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "next": "after_dain_end"
    },
    "after_dain_normal": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "after_dain_normal_2"
    },
    "after_dain_normal_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "after_dain_end"
    },
    "after_dain_end": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "sunset": true,
        "next": "after_dain_end_2"
    },
    "after_dain_end_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "sunset": true,
        "setFlag": "dated_dain_day1",
        "next": "after_dain_tteokbokki"
    },
    "after_dain_tteokbokki": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "after_dain_tteokbokki_2"
    },
    "after_dain_tteokbokki_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "after_dain_tteokbokki_3"
    },
    "after_dain_tteokbokki_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "after_home",
                "condition": "has_number_dain"
            },
            {
                "next": "dain_contact_exchange"
            }
        ]
    },
    "dain_contact_exchange": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "dain_contact_success",
                "setFlags": [
                    "has_number_dain",
                    "has_any_contact"
                ]
            },
            {
                "next": "dain_contact_call_fail",
                "affinityChar": "Dain",
                "affinityBranches": [
                    {
                        "minAffinity": 35,
                        "next": "dain_contact_call_success"
                    }
                ],
                "setFlags": [
                    "has_number_dain",
                    "has_any_contact"
                ]
            },
            {
                "next": "dain_contact_fail",
                "stats": {
                    "Dain": {
                        "affinity": -20
                    }
                }
            }
        ]
    },
    "dain_contact_call_success": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 20
            }
        },
        "next": "after_home"
    },
    "dain_contact_call_fail": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": -5
            }
        },
        "next": "after_home"
    },
    "dain_contact_success": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 15
            }
        },
        "next": "after_home"
    },
    "dain_contact_fail": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": -5
            }
        },
        "next": "after_home"
    },
    "after_nurse": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "after_nurse_2"
    },
    "after_nurse_new": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "after_nurse_new_2"
    },
    "after_nurse_new_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "setFlag": "met_nurse",
        "next": "after_nurse_new_name_ask"
    },
    "after_nurse_new_name_ask": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "after_nurse_new_name_share"
    },
    "after_nurse_new_name_share": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "setFlag": "knows_name_nurse",
        "next": "nurse_after_day1_contact"
    },
    "after_nurse_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "nurse_after_day1_contact"
    },
    "nurse_after_day1_contact": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "nurse_after_day1_contact_already",
                "condition": "has_number_nurse"
            },
            {
                "next": "nurse_after_day1_contact_choice"
            }
        ]
    },
    "nurse_after_day1_contact_already": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "nurse_after_day1_contact_already_stay",
                "stats": {
                    "Nurse": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "nurse_after_day1_contact_already_leave"
            }
        ]
    },
    "nurse_after_day1_contact_already_stay": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "nurse_after_day1_contact_already_stay_2"
    },
    "nurse_after_day1_contact_already_stay_2": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "after_home"
    },
    "nurse_after_day1_contact_already_leave": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "after_home"
    },
    "nurse_after_day1_contact_choice": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "nurse_after_day1_contact_stay",
                "stats": {
                    "Nurse": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "nurse_after_day1_contact_2"
            }
        ]
    },
    "nurse_after_day1_contact_stay": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "nurse_after_day1_contact_stay_2"
    },
    "nurse_after_day1_contact_stay_2": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "nurse_after_day1_contact_success",
                "setFlags": [
                    "has_number_nurse",
                    "has_any_contact"
                ]
            },
            {
                "next": "nurse_after_day1_contact_fail",
                "stats": {
                    "Nurse": {
                        "affinity": -15
                    }
                }
            }
        ]
    },
    "nurse_after_day1_contact_2": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "nurse_after_day1_contact_success",
                "setFlags": [
                    "has_number_nurse",
                    "has_any_contact"
                ]
            },
            {
                "next": "nurse_after_day1_contact_fail",
                "stats": {
                    "Nurse": {
                        "affinity": -15
                    }
                }
            }
        ]
    },
    "nurse_after_day1_contact_success": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "stats": {
            "Nurse": {
                "affinity": 10
            }
        },
        "next": "after_home"
    },
    "nurse_after_day1_contact_fail": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "after_home"
    }
});
