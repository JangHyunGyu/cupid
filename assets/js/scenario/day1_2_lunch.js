/**
 * ============================================================================
 * CUPID - day1_2_lunch
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[1]) SCENARIO[1] = {};

Object.assign(SCENARIO[1], {
    "lunch_time": {
        "background": "assets/images/background/room_school.png",
        "bgm": "daily.mp3",
        "character": null,
        "next": "lunch_time_2"
    },
    "lunch_time_2": {
        "background": "assets/images/background/room_school.png",
        "choices": [
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 40,
                        "next": "lunch_seoyeon_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "lunch_seoyeon_normal_branch"
                    },
                    {
                        "minAffinity": -100,
                        "next": "lunch_seoyeon_low"
                    }
                ],
                "next": "lunch_seoyeon_normal_branch"
            },
            {
                "next": "lunch_alone"
            },
            {
                "next": "lunch_dain"
            },
            {
                "next": "lunch_nurse"
            },
            {
                "next": "lunch_store"
            },
            {
                "next": "lunch_sleep"
            }
        ]
    },
    "lunch_seoyeon_high": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "rooftop_1"
    },
    "lunch_seoyeon_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "lunch_seoyeon_2_normal"
    },
    "lunch_seoyeon_normal_branch": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            {
                "next": "lunch_seoyeon_2_study",
                "condition": "personality_study"
            },
            {
                "next": "lunch_seoyeon_2_party",
                "condition": "personality_active"
            },
            {
                "next": "lunch_seoyeon_2_normal"
            }
        ]
    },
    "lunch_seoyeon_2_study": {
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "rooftop_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "lunch_alone",
                "stats": {
                    "Seoyeon": {
                        "affinity": -10
                    }
                }
            },
            {
                "next": "lunch_refuse_rooftop",
                "stats": {
                    "Seoyeon": {
                        "affinity": -20
                    }
                }
            }
        ]
    },
    "lunch_seoyeon_2_party": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "choices": [
            {
                "next": "rooftop_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "lunch_alone",
                "stats": {
                    "Seoyeon": {
                        "affinity": -10
                    }
                }
            },
            {
                "next": "lunch_refuse_rooftop",
                "stats": {
                    "Seoyeon": {
                        "affinity": -20
                    }
                }
            }
        ]
    },
    "lunch_seoyeon_2_normal": {
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "rooftop_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "lunch_alone",
                "stats": {
                    "Seoyeon": {
                        "affinity": -10
                    }
                }
            },
            {
                "next": "lunch_refuse_rooftop",
                "stats": {
                    "Seoyeon": {
                        "affinity": -20
                    }
                }
            }
        ]
    },
    "rooftop_1": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlag": "ate_lunch_seoyeon",
        "next": "rooftop_1_2"
    },
    "rooftop_1_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "rooftop_1_3"
    },
    "rooftop_1_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "rooftop_1_4"
    },
    "rooftop_1_4": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "rooftop_1_5"
    },
    "rooftop_1_5": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "rooftop_talk_main"
    },
    "rooftop_talk_main": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "rooftop_1_2_2"
    },
    "rooftop_1_2_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "rooftop_1_2_3"
    },
    "rooftop_1_2_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "rooftop_talk_food",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "rooftop_talk_ah_fail",
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 30,
                        "next": "rooftop_talk_ah"
                    }
                ],
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "rooftop_talk_thanks",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "rooftop_talk_rude",
                "stats": {
                    "Seoyeon": {
                        "affinity": -20
                    }
                }
            }
        ]
    },
    "rooftop_talk_ah_fail": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "stats": {
            "Seoyeon": {
                "affinity": -15
            }
        },
        "next": "rooftop_awkward"
    },
    "rooftop_awkward": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "rooftop_2"
    },
    "lunch_refuse_rooftop": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "lunch_alone"
    },
    "rooftop_talk_rude": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "rooftop_2"
    },
    "rooftop_talk_food": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "rooftop_talk_food_2"
    },
    "rooftop_talk_food_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "rooftop_2"
    },
    "rooftop_talk_ah": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "rooftop_talk_ah_2"
    },
    "rooftop_talk_ah_2": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "rooftop_2"
    },
    "rooftop_talk_thanks": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "rooftop_talk_thanks_2"
    },
    "rooftop_talk_thanks_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "rooftop_2"
    },
    "rooftop_2": {
        "background": "assets/images/background/top_school.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 0,
                "next": "rooftop_2_normal"
            },
            {
                "minAffinity": -100,
                "next": "rooftop_2_low"
            }
        ],
        "next": "rooftop_2_normal"
    },
    "rooftop_2_normal": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "rooftop_2_2"
    },
    "rooftop_2_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "rooftop_2_2_low"
    },
    "rooftop_2_2_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "rooftop_free_talk"
    },
    "rooftop_2_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "rooftop_free_talk"
    },
    "rooftop_free_talk": {
        "type": "free_talk",
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "rooftop_choices_high"
            },
            {
                "minAffinity": 0,
                "next": "rooftop_choices"
            },
            {
                "minAffinity": -100,
                "next": "rooftop_choices_low"
            }
        ],
        "next": "rooftop_choices"
    },
    "rooftop_choices_high": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "choices": [
            {
                "next": "rooftop_destiny_high"
            },
            {
                "next": "rooftop_kind_high"
            },
            {
                "next": "rooftop_comfortable_high"
            }
        ]
    },
    "rooftop_choices_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "choices": [
            {
                "next": "rooftop_destiny_low"
            },
            {
                "next": "rooftop_kind_low"
            },
            {
                "next": "rooftop_comfortable_low"
            }
        ]
    },
    "rooftop_choices": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "choices": [
            {
                "next": "rooftop_destiny_normal"
            },
            {
                "next": "rooftop_kind_normal"
            },
            {
                "next": "rooftop_comfortable_normal"
            }
        ]
    },
    "rooftop_destiny_high": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "stats": {
            "Seoyeon": {
                "affinity": 7
            }
        },
        "next": "rooftop_destiny_high_2"
    },
    "rooftop_destiny_high_2": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "seyoun_contact_exchange"
    },
    "rooftop_destiny_normal": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "rooftop_destiny_normal_2"
    },
    "rooftop_destiny_normal_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "seyoun_contact_exchange"
    },
    "rooftop_destiny_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "stats": {
            "Seoyeon": {
                "affinity": -10
            }
        },
        "next": "rooftop_destiny_low_2"
    },
    "rooftop_destiny_low_2": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "seyoun_contact_exchange"
    },
    "rooftop_kind_high": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "rooftop_kind_high_2"
    },
    "rooftop_kind_high_2": {
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "seyoun_contact_exchange"
    },
    "rooftop_kind_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "next": "rooftop_kind_low_2"
    },
    "rooftop_kind_low_2": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "seyoun_contact_exchange"
    },
    "rooftop_kind_normal": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "rooftop_kind_normal_2"
    },
    "rooftop_kind_normal_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "seyoun_contact_exchange"
    },
    "rooftop_comfortable_high": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 6
            }
        },
        "next": "rooftop_comfortable_high_2"
    },
    "rooftop_comfortable_high_2": {
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "seyoun_contact_exchange"
    },
    "rooftop_comfortable_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "stats": {
            "Seoyeon": {
                "affinity": 2
            }
        },
        "next": "rooftop_comfortable_low_2"
    },
    "rooftop_comfortable_low_2": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "seyoun_contact_exchange"
    },
    "rooftop_comfortable_normal": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": 4
            }
        },
        "next": "rooftop_comfortable_normal_2"
    },
    "rooftop_comfortable_normal_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "seyoun_contact_exchange"
    },
    "seyoun_contact_exchange": {
        "type": "free_talk",
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 15,
                "next": "seyoun_contact_exchange_high"
            },
            {
                "minAffinity": 0,
                "next": "seyoun_contact_exchange_normal"
            },
            {
                "minAffinity": -999,
                "next": "seyoun_contact_exchange_low"
            }
        ],
        "next": "seyoun_contact_exchange_normal"
    },
    "seyoun_contact_exchange_high": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "choices": [
            {
                "next": "seyoun_contact_success",
                "setFlags": [
                    "has_number_seyoun",
                    "has_any_contact"
                ]
            },
            {
                "next": "seyoun_contact_fail",
                "stats": {
                    "Seoyeon": {
                        "affinity": -20
                    }
                }
            }
        ]
    },
    "seyoun_contact_exchange_normal": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "seyoun_contact_success",
                "setFlags": [
                    "has_number_seyoun",
                    "has_any_contact"
                ]
            },
            {
                "next": "seyoun_contact_fail",
                "stats": {
                    "Seoyeon": {
                        "affinity": -20
                    }
                }
            }
        ]
    },
    "seyoun_contact_exchange_low": {
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "seyoun_contact_success_cold",
                "setFlags": [
                    "has_number_seyoun",
                    "has_any_contact"
                ]
            },
            {
                "next": "seyoun_contact_fail",
                "stats": {
                    "Seoyeon": {
                        "affinity": -20
                    }
                }
            }
        ]
    },
    "seyoun_contact_success_cold": {
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": 2
            }
        },
        "next": "after_school_start"
    },
    "seyoun_contact_success": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 8
            }
        },
        "next": "after_school_start"
    },
    "seyoun_contact_fail": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after_school_start"
    },
    "lunch_alone": {
        "background": "assets/images/background/library_old.png",
        "character": null,
        "next": "alone_2"
    },
    "alone_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "alone_2_2"
    },
    "alone_2_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "yuna_intro"
    },
    "yuna_intro": {
        "background": "assets/images/background/library_old.png",
        "next": "yuna_intro_name_ask"
    },
    "yuna_intro_name_ask": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "yuna_intro_name_share"
    },
    "yuna_intro_name_share": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "knows_name_yuna",
        "next": "yuna_intro_2"
    },
    "yuna_intro_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_smile.png",
        "setFlag": "met_yuna",
        "next": "yuna_free_talk"
    },
    "yuna_free_talk": {
        "type": "free_talk",
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "affinityChar": "Yuna",
        "affinityBranches": [
            {
                "minAffinity": 15,
                "next": "yuna_choices_high"
            },
            {
                "minAffinity": 0,
                "next": "yuna_choices"
            },
            {
                "minAffinity": -100,
                "next": "yuna_choices_low"
            }
        ],
        "next": "yuna_choices"
    },
    "yuna_choices_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "choices": [
            {
                "next": "yuna_secret_high"
            },
            {
                "next": "yuna_scent_high"
            },
            {
                "next": "yuna_danger_high"
            }
        ]
    },
    "yuna_choices_low": {
        "character": "assets/images/characters/yuna_angry.png",
        "choices": [
            {
                "next": "yuna_secret_low"
            },
            {
                "next": "yuna_scent_low"
            },
            {
                "next": "yuna_danger_low"
            }
        ]
    },
    "yuna_choices": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "yuna_secret_normal"
            },
            {
                "next": "yuna_scent_normal"
            },
            {
                "next": "yuna_danger_normal"
            }
        ]
    },
    "yuna_secret_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "stats": {
            "Yuna": {
                "affinity": 6
            }
        },
        "next": "yuna_secret_high_2"
    },
    "yuna_secret_high_2": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "after_school_start"
    },
    "yuna_secret_low": {
        "character": "assets/images/characters/yuna_angry.png",
        "next": "yuna_secret_low_2"
    },
    "yuna_secret_low_2": {
        "character": "assets/images/characters/yuna_angry.png",
        "next": "after_school_start"
    },
    "yuna_secret_normal": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "yuna_secret_normal_2"
    },
    "yuna_secret_normal_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "after_school_start"
    },
    "yuna_scent_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "yuna_scent_high_2"
    },
    "yuna_scent_high_2": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "after_school_start"
    },
    "yuna_scent_low": {
        "character": "assets/images/characters/yuna_angry.png",
        "next": "yuna_scent_low_2"
    },
    "yuna_scent_low_2": {
        "character": "assets/images/characters/yuna_angry.png",
        "next": "after_school_start"
    },
    "yuna_scent_normal": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "yuna_scent_normal_2"
    },
    "yuna_scent_normal_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after_school_start"
    },
    "yuna_danger_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "yuna_danger_high_2"
    },
    "yuna_danger_high_2": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "after_school_start"
    },
    "yuna_danger_low": {
        "character": "assets/images/characters/yuna_angry.png",
        "next": "yuna_danger_low_2"
    },
    "yuna_danger_low_2": {
        "character": "assets/images/characters/yuna_angry.png",
        "next": "after_school_start"
    },
    "yuna_danger_normal": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "yuna_danger_normal_2"
    },
    "yuna_danger_normal_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "after_school_start"
    },
    "lunch_store": {
        "background": "assets/images/background/store.png",
        "next": "lunch_store_2"
    },
    "lunch_store_2": {
        "background": "assets/images/background/store.png",
        "next": "lunch_store_teacher"
    },
    "lunch_store_teacher": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "lunch_store_teacher_2"
    },
    "lunch_store_teacher_2": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/teacher_normal.png",
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "after_school_start"
    },
    "lunch_sleep": {
        "background": "assets/images/background/room_school.png",
        "next": "lunch_sleep_2"
    },
    "lunch_sleep_2": {
        "background": "assets/images/background/room_school.png",
        "next": "lunch_sleep_3"
    },
    "lunch_sleep_3": {
        "background": "assets/images/background/room_school.png",
        "next": "lunch_sleep_seoyeon"
    },
    "lunch_sleep_seoyeon": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "lunch_sleep_seoyeon_2"
    },
    "lunch_sleep_seoyeon_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "after_school_start"
    },
    "lunch_dain": {
        "background": "assets/images/background/gym.png",
        "next": "lunch_dain_2"
    },
    "lunch_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "setFlag": "met_dain",
        "branches": [
            {
                "next": "lunch_dain_3_active",
                "condition": "personality_active"
            },
            {
                "next": "lunch_dain_3_normal"
            }
        ]
    },
    "lunch_dain_3_active": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "dain_name_share"
    },
    "lunch_dain_3_normal": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "dain_name_share"
    },
    "dain_name_share": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "setFlag": "knows_name_dain",
        "next": "dain_name_share_2"
    },
    "dain_name_share_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_gym_2"
    },
    "lunch_dain_gym_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "setFlag": "met_dain",
        "choices": [
            {
                "next": "lunch_dain_play"
            },
            {
                "next": "lunch_dain_teach"
            }
        ]
    },
    "lunch_dain_play": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_active.png",
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "lunch_dain_end"
    },
    "lunch_dain_teach": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 15
            }
        },
        "next": "lunch_dain_end"
    },
    "lunch_dain_end": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_active.png",
        "next": "after_school_start"
    },
    "lunch_nurse": {
        "background": "assets/images/background/nurse_room.jpg",
        "next": "lunch_nurse_2"
    },
    "lunch_nurse_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "nurse_intro"
    },
    "nurse_intro": {
        "character": "assets/images/characters/nurse_normal.png",
        "setFlag": "met_nurse",
        "next": "nurse_name_share_pre"
    },
    "nurse_name_share_pre": {
        "character": "assets/images/characters/nurse_normal.png",
        "setFlag": "knows_name_nurse",
        "branches": [
            {
                "next": "nurse_name_share_study",
                "condition": "personality_study"
            },
            {
                "next": "nurse_name_share_normal"
            }
        ]
    },
    "nurse_name_share_study": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "nurse_free_talk_day1"
    },
    "nurse_name_share_normal": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "nurse_free_talk_day1"
    },
    "nurse_free_talk_day1": {
        "type": "free_talk",
        "character": "assets/images/characters/nurse_normal.png",
        "affinityChar": "Nurse",
        "affinityBranches": [
            {
                "minAffinity": 15,
                "next": "nurse_day1_end_high"
            },
            {
                "minAffinity": 0,
                "next": "after_school_start"
            },
            {
                "minAffinity": -100,
                "next": "nurse_day1_end_low"
            }
        ],
        "next": "after_school_start"
    },
    "nurse_day1_end_high": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_school_start"
    },
    "nurse_day1_end_low": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_school_start"
    }
});
