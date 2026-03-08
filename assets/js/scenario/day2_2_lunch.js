/**
 * ============================================================================
 * CUPID - day2_2_lunch
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[2]) SCENARIO[2] = {};

Object.assign(SCENARIO[2], {
    "day2_lunch_time": {
        "bgm": "daily.mp3",
        "character": null,
        "choices": [
            {
                "next": "day2_lunch_seoyeon"
            },
            {
                "next": "day2_lunch_yuna",
                "condition": "met_yuna"
            },
            {
                "next": "day2_lunch_yuna",
                "excludeCondition": "met_yuna"
            },
            {
                "next": "day2_lunch_dain",
                "condition": "met_dain"
            },
            {
                "next": "day2_lunch_dain",
                "excludeCondition": "met_dain"
            },
            {
                "next": "day2_lunch_nurse"
            },
            {
                "next": "day2_lunch_teacher"
            }
        ]
    },
    "day2_lunch_teacher": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day2_lunch_teacher_2"
    },
    "day2_lunch_teacher_2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_lunch_teacher_3"
    },
    "day2_lunch_teacher_3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "choices": [
            {
                "next": "day2_lunch_teacher_eat",
                "stats": {
                    "Teacher": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "day2_lunch_teacher_food",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_lunch_teacher_pass",
                "stats": {
                    "Teacher": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "day2_lunch_teacher_eat": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day2_lunch_teacher_end"
    },
    "day2_lunch_teacher_food": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day2_lunch_teacher_end"
    },
    "day2_lunch_teacher_pass": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_lunch_teacher_end"
    },
    "day2_lunch_teacher_end": {
        "background": "assets/images/background/teacher_office.png",
        "character": null,
        "next": "day2_afternoon_class"
    },
    "day2_lunch_seoyeon": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day2_seoyeon_lunch_talk"
    },
    "day2_seoyeon_lunch_talk": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "choices": [
            {
                "next": "day2_seoyeon_lunch_praise",
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day2_seoyeon_lunch_worry",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_seoyeon_lunch_touch",
                "stats": {
                    "Seoyeon": {
                        "affinity": 10
                    }
                }
            }
        ]
    },
    "day2_seoyeon_lunch_praise": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "setFlag": "day2_ate_lunch_seoyeon",
        "next": "day2_seoyeon_lunch_dain_event"
    },
    "day2_seoyeon_lunch_worry": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlag": "day2_ate_lunch_seoyeon",
        "next": "day2_seoyeon_lunch_dain_event"
    },
    "day2_seoyeon_lunch_touch": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "setFlag": "day2_ate_lunch_seoyeon",
        "next": "day2_seoyeon_lunch_dain_event"
    },
    "day2_seoyeon_lunch_dain_event": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            {
                "next": "day2_seoyeon_lunch_dain_known",
                "condition": "met_dain"
            },
            {
                "next": "day2_seoyeon_lunch_dain_unknown"
            }
        ]
    },
    "day2_seoyeon_lunch_dain_known": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_seoyeon_lunch_dain_react"
    },
    "day2_seoyeon_lunch_dain_unknown": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_seoyeon_lunch_dain_react"
    },
    "day2_seoyeon_lunch_dain_react": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day2_seoyeon_lunch_dain_ask"
    },
    "day2_seoyeon_lunch_dain_ask": {
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            {
                "next": "day2_seoyeon_lunch_dain_yes",
                "condition": "met_dain"
            },
            {
                "next": "day2_seoyeon_lunch_dain_no"
            }
        ]
    },
    "day2_seoyeon_lunch_dain_yes": {
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "day2_seoyeon_lunch_dain_honest",
                "stats": {
                    "Seoyeon": {
                        "affinity": -3
                    },
                    "Dain": {
                        "affinity": 2
                    }
                }
            },
            {
                "next": "day2_seoyeon_lunch_dain_deny",
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
                "next": "day2_seoyeon_lunch_dain_tease",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "day2_seoyeon_lunch_dain_no": {
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlag": "knows_name_dain",
        "next": "day2_seoyeon_lunch_dain_no_react"
    },
    "day2_seoyeon_lunch_dain_no_react": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_lunch_dain_honest": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_lunch_dain_deny": {
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_lunch_dain_tease": {
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_lunch_end": {
        "character": null,
        "next": "day2_afternoon_class"
    },
    "day2_lunch_yuna": {
        "background": "assets/images/background/library_old.png",
        "bgm": "mystery.mp3",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day2_yuna_talk"
    },
    "day2_yuna_talk": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day2_yuna_talk_2"
    },
    "day2_yuna_talk_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day2_yuna_free_talk"
    },
    "day2_yuna_free_talk": {
        "type": "free_talk",
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "affinityChar": "Yuna",
        "affinityBranches": [
            {
                "minAffinity": 20,
                "next": "day2_yuna_talk_branch_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_yuna_talk_branch"
            },
            {
                "minAffinity": -100,
                "next": "day2_yuna_talk_branch_low"
            }
        ],
        "next": "day2_yuna_talk_branch"
    },
    "day2_yuna_talk_branch_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "branches": [
            {
                "next": "day2_yuna_talk_2_met_high",
                "condition": "met_yuna"
            },
            {
                "next": "day2_yuna_talk_2_new_high"
            }
        ]
    },
    "day2_yuna_talk_branch_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "branches": [
            {
                "next": "day2_yuna_talk_2_met_low",
                "condition": "met_yuna"
            },
            {
                "next": "day2_yuna_talk_2_new_low"
            }
        ]
    },
    "day2_yuna_talk_2_met_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "choices": [
            {
                "next": "day2_yuna_secret_high",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_yuna_normal_high",
                "stats": {
                    "Yuna": {
                        "affinity": 4
                    }
                }
            }
        ]
    },
    "day2_yuna_talk_2_met_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day2_yuna_secret_low",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_yuna_normal_low",
                "stats": {
                    "Yuna": {
                        "affinity": 4
                    }
                }
            }
        ]
    },
    "day2_yuna_talk_2_new_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "setFlag": "met_yuna",
        "choices": [
            {
                "next": "day2_yuna_new_name_ask_high",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_yuna_new_name_ask_high",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "day2_yuna_talk_2_new_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "met_yuna",
        "choices": [
            {
                "next": "day2_yuna_new_name_ask_low",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_yuna_new_name_ask_low",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "day2_yuna_talk_branch": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "branches": [
            {
                "next": "day2_yuna_talk_2_met_normal",
                "condition": "met_yuna"
            },
            {
                "next": "day2_yuna_talk_2_new_normal"
            }
        ]
    },
    "day2_yuna_talk_2_met_normal": {
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day2_yuna_secret_normal",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_yuna_normal_normal",
                "stats": {
                    "Yuna": {
                        "affinity": 4
                    }
                }
            }
        ]
    },
    "day2_yuna_talk_2_new_normal": {
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "met_yuna",
        "choices": [
            {
                "next": "day2_yuna_new_name_ask_normal",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_yuna_new_name_ask_normal",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "day2_yuna_new_name_ask_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "day2_yuna_new_name_share_high"
    },
    "day2_yuna_new_name_share_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "setFlag": "knows_name_yuna",
        "next": "day2_yuna_secret_high"
    },
    "day2_yuna_new_name_ask_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day2_yuna_new_name_share_low"
    },
    "day2_yuna_new_name_share_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "knows_name_yuna",
        "next": "day2_yuna_secret_low"
    },
    "day2_yuna_new_name_ask_normal": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day2_yuna_new_name_share_normal"
    },
    "day2_yuna_new_name_share_normal": {
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "knows_name_yuna",
        "next": "day2_yuna_secret_normal"
    },
    "day2_yuna_secret_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "day2_yuna_secret_2_high"
    },
    "day2_yuna_secret_2_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "choices": [
            {
                "next": "day2_yuna_secret_read_high",
                "stats": {
                    "Yuna": {
                        "affinity": 20
                    }
                },
                "setFlag": "visited_warehouse_at_lunch"
            },
            {
                "next": "day2_yuna_secret_stop_high",
                "stats": {
                    "Yuna": {
                        "affinity": -10
                    }
                }
            }
        ]
    },
    "day2_yuna_secret_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day2_yuna_secret_2_low"
    },
    "day2_yuna_secret_2_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day2_yuna_secret_read_low",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                },
                "setFlag": "visited_warehouse_at_lunch"
            },
            {
                "next": "day2_yuna_secret_stop_low",
                "stats": {
                    "Yuna": {
                        "affinity": -20
                    }
                }
            }
        ]
    },
    "day2_yuna_secret_normal": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "day2_yuna_secret_2_normal"
    },
    "day2_yuna_secret_2_normal": {
        "character": "assets/images/characters/yuna_smile.png",
        "choices": [
            {
                "next": "day2_yuna_secret_read",
                "stats": {
                    "Yuna": {
                        "affinity": 15
                    }
                },
                "setFlag": "visited_warehouse_at_lunch"
            },
            {
                "next": "day2_yuna_secret_stop",
                "stats": {
                    "Yuna": {
                        "affinity": -20
                    }
                }
            },
            {
                "next": "day2_yuna_secret_why",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "day2_yuna_secret_read": {
        "affinityChar": "Yuna",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_yuna_secret_read_high"
            },
            {
                "minAffinity": -999,
                "next": "day2_yuna_secret_read_low"
            }
        ]
    },
    "day2_yuna_secret_stop": {
        "affinityChar": "Yuna",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_yuna_secret_stop_high"
            },
            {
                "minAffinity": -999,
                "next": "day2_yuna_secret_stop_low"
            }
        ]
    },
    "day2_yuna_secret_why": {
        "affinityChar": "Yuna",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_yuna_secret_why_high"
            },
            {
                "minAffinity": -999,
                "next": "day2_yuna_secret_why_low"
            }
        ]
    },
    "day2_yuna_secret_why_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "setFlag": "day2_met_yuna_lunch",
        "next": "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_why_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "day2_met_yuna_lunch",
        "next": "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_read_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "setFlag": "day2_met_yuna_lunch",
        "next": "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_read_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "day2_met_yuna_lunch",
        "next": "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_stop_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "setFlag": "day2_met_yuna_lunch",
        "next": "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_stop_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "day2_met_yuna_lunch",
        "next": "day2_yuna_lunch_end"
    },
    "day2_yuna_normal_high": {
        "character": "assets/images/characters/yuna_smile.png",
        "setFlag": "day2_met_yuna_lunch",
        "next": "day2_yuna_lunch_end"
    },
    "day2_yuna_normal_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "day2_met_yuna_lunch",
        "next": "day2_yuna_lunch_end"
    },
    "day2_yuna_normal_normal": {
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "day2_met_yuna_lunch",
        "next": "day2_yuna_lunch_end"
    },
    "day2_yuna_lunch_end": {
        "character": null,
        "next": "day2_afternoon_class"
    },
    "day2_lunch_dain": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "branches": [
            {
                "next": "day2_dain_lunch_talk",
                "condition": "met_dain"
            },
            {
                "next": "day2_lunch_dain_new"
            }
        ]
    },
    "day2_lunch_dain_new": {
        "character": "assets/images/characters/dain_laugh.png",
        "setFlag": "met_dain",
        "next": "day2_lunch_dain_new_name_ask"
    },
    "day2_lunch_dain_new_name_ask": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_lunch_dain_new_name_share"
    },
    "day2_dain_lunch_talk_new": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_dain_store"
    },
    "day2_lunch_dain_new_name_share": {
        "character": "assets/images/characters/dain_laugh.png",
        "setFlag": "knows_name_dain",
        "next": "day2_dain_lunch_talk_new"
    },
    "day2_dain_lunch_talk": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_dain_store"
    },
    "day2_dain_store": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "day2_dain_store_seoyeon"
    },
    "day2_dain_store_seoyeon": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "day2_dain_store_seoyeon_2"
    },
    "day2_dain_store_seoyeon_2": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "day2_dain_store_seoyeon_approach"
    },
    "day2_dain_store_seoyeon_approach": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            {
                "next": "day2_dain_seoyeon_both_met",
                "condition": "met_seoyeon"
            },
            {
                "next": "day2_dain_seoyeon_both_new"
            }
        ]
    },
    "day2_dain_seoyeon_both_met": {
        "characters": {
            "left": "assets/images/characters/dain_normal.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_tension"
    },
    "day2_dain_seoyeon_both_new": {
        "characters": {
            "left": "assets/images/characters/dain_normal.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_tension"
    },
    "day2_dain_seoyeon_tension": {
        "characters": {
            "left": "assets/images/characters/dain_normal.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_tension_2"
    },
    "day2_dain_seoyeon_tension_2": {
        "characters": {
            "left": "assets/images/characters/dain_normal.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_choice"
    },
    "day2_dain_seoyeon_choice": {
        "characters": {
            "left": "assets/images/characters/dain_normal.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "choices": [
            {
                "next": "day2_dain_seoyeon_favor_seoyeon",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    },
                    "Dain": {
                        "affinity": -5
                    }
                }
            },
            {
                "next": "day2_dain_seoyeon_favor_dain",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    },
                    "Seoyeon": {
                        "affinity": -3
                    }
                }
            },
            {
                "next": "day2_dain_seoyeon_favor_both",
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
    "day2_dain_seoyeon_favor_seoyeon": {
        "character": "assets/images/characters/dain_pout.png",
        "next": "day2_dain_seoyeon_favor_seoyeon_2"
    },
    "day2_dain_seoyeon_favor_seoyeon_2": {
        "characters": {
            "left": "assets/images/characters/dain_pout.png",
            "right": "assets/images/characters/seyoun_laugh.png"
        },
        "next": "day2_dain_seoyeon_end"
    },
    "day2_dain_seoyeon_favor_dain": {
        "characters": {
            "left": "assets/images/characters/dain_laugh.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_favor_dain_2"
    },
    "day2_dain_seoyeon_favor_dain_2": {
        "characters": {
            "left": "assets/images/characters/dain_laugh.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_end"
    },
    "day2_dain_seoyeon_favor_both": {
        "characters": {
            "left": "assets/images/characters/dain_normal.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_favor_both_2"
    },
    "day2_dain_seoyeon_favor_both_2": {
        "characters": {
            "left": "assets/images/characters/dain_pout.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_favor_both_3"
    },
    "day2_dain_seoyeon_favor_both_3": {
        "characters": {
            "left": "assets/images/characters/dain_pout.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_favor_both_4"
    },
    "day2_dain_seoyeon_favor_both_4": {
        "characters": {
            "left": "assets/images/characters/dain_normal.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_favor_both_5"
    },
    "day2_dain_seoyeon_favor_both_5": {
        "characters": {
            "left": "assets/images/characters/dain_normal.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "next": "day2_dain_seoyeon_end"
    },
    "day2_dain_seoyeon_end": {
        "character": "assets/images/characters/dain_normal.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_free_talk"
    },
    "day2_dain_free_talk": {
        "type": "free_talk",
        "character": "assets/images/characters/dain_normal.png",
        "affinityChar": "Dain",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_dain_store_choices_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_dain_store_choices"
            },
            {
                "minAffinity": -100,
                "next": "day2_dain_store_choices_low"
            }
        ],
        "next": "day2_dain_store_choices"
    },
    "day2_dain_store_choices_high": {
        "character": "assets/images/characters/dain_laugh.png",
        "choices": [
            {
                "next": "day2_dain_store_buy_high",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_dain_store_rooftop_high",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day2_dain_store_race_high",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                }
            }
        ]
    },
    "day2_dain_store_choices_low": {
        "character": "assets/images/characters/dain_sad.png",
        "choices": [
            {
                "next": "day2_dain_store_buy_low",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_dain_store_rooftop_low",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day2_dain_store_race_low",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                }
            }
        ]
    },
    "day2_dain_store_choices": {
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            {
                "next": "day2_dain_store_buy_normal",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_dain_store_rooftop_normal",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day2_dain_store_race_normal",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                }
            }
        ]
    },
    "day2_dain_store_buy_high": {
        "character": "assets/images/characters/dain_laugh.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_lunch_end"
    },
    "day2_dain_store_buy_low": {
        "character": "assets/images/characters/dain_angry.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_lunch_end"
    },
    "day2_dain_store_buy_normal": {
        "character": "assets/images/characters/dain_laugh.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_lunch_end"
    },
    "day2_dain_store_rooftop_high": {
        "character": "assets/images/characters/dain_laugh.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_lunch_end"
    },
    "day2_dain_store_rooftop_low": {
        "character": "assets/images/characters/dain_angry.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_lunch_end"
    },
    "day2_dain_store_rooftop_normal": {
        "character": "assets/images/characters/dain_normal.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_lunch_end"
    },
    "day2_dain_store_race_high": {
        "character": "assets/images/characters/dain_active.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_lunch_end"
    },
    "day2_dain_store_race_low": {
        "character": "assets/images/characters/dain_sad.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_lunch_end"
    },
    "day2_dain_store_race_normal": {
        "character": "assets/images/characters/dain_normal.png",
        "setFlag": "day2_met_dain_lunch",
        "next": "day2_dain_lunch_end"
    },
    "day2_dain_lunch_end": {
        "character": null,
        "next": "day2_afternoon_class"
    },
    "day2_lunch_nurse": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_lunch_nurse_talk"
    },
    "day2_lunch_nurse_talk": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "branches": [
            {
                "next": "day2_lunch_nurse_met",
                "condition": "met_nurse"
            },
            {
                "next": "day2_lunch_nurse_new"
            }
        ]
    },
    "day2_lunch_nurse_met": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "affinityChar": "Nurse",
        "affinityBranches": [
            {
                "minAffinity": 15,
                "next": "day2_lunch_nurse_met_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_lunch_nurse_met_normal"
            },
            {
                "minAffinity": -100,
                "next": "day2_lunch_nurse_met_low"
            }
        ],
        "stats": {
            "Nurse": {
                "affinity": 6
            }
        },
        "next": "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_met_high": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_met_normal": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_met_low": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_new": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlag": "met_nurse",
        "next": "day2_lunch_nurse_new_name_ask"
    },
    "day2_lunch_nurse_new_name_ask": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_lunch_nurse_new_name_share"
    },
    "day2_lunch_nurse_new_name_share": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlag": "knows_name_nurse",
        "next": "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_lunch_nurse_4"
    },
    "day2_lunch_nurse_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "day2_lunch_nurse_head",
                "stats": {
                    "Nurse": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day2_lunch_nurse_rest",
                "stats": {
                    "Nurse": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day2_lunch_nurse_trap",
                "stats": {
                    "Nurse": {
                        "affinity": -50
                    }
                }
            }
        ]
    },
    "day2_lunch_nurse_trap": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_angry.png",
        "next": "day2_lunch_nurse_trap_2"
    },
    "day2_lunch_nurse_trap_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_angry.png",
        "next": "day2_afternoon_class"
    },
    "day2_lunch_nurse_head": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "day2_lunch_nurse_head_tease",
                "stats": {
                    "Nurse": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_lunch_nurse_sleep",
                "stats": {
                    "Nurse": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "day2_lunch_nurse_head_tease": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_rest": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "day2_lunch_nurse_rest_yuna",
                "condition": "met_yuna"
            },
            {
                "next": "day2_lunch_nurse_sleep",
                "excludeCondition": "met_yuna"
            }
        ]
    },
    "day2_lunch_nurse_rest_yuna": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_sleep": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": null,
        "next": "day2_lunch_nurse_sleep_teacher"
    },
    "day2_lunch_nurse_sleep_teacher": {
        "background": "assets/images/background/nurse_room.jpg",
        "characters": {
            "left": "assets/images/characters/nurse_normal.png",
            "right": {
                "src": "assets/images/characters/teacher_normal.png",
                "opacity": 0.4
            }
        },
        "next": "day2_lunch_nurse_sleep_teacher_2"
    },
    "day2_lunch_nurse_sleep_teacher_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "characters": {
            "left": "assets/images/characters/nurse_normal.png",
            "right": {
                "src": "assets/images/characters/teacher_normal.png",
                "opacity": 0.4
            }
        },
        "next": "day2_lunch_nurse_sleep_teacher_3"
    },
    "day2_lunch_nurse_sleep_teacher_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_lunch_nurse_sleep_end"
    },
    "day2_lunch_nurse_sleep_end": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": null,
        "next": "day2_lunch_nurse_wake_1"
    },
    "day2_lunch_nurse_wake_1": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": null,
        "sunset": true,
        "next": "day2_lunch_nurse_wake_2"
    },
    "day2_lunch_nurse_wake_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "nurse_wake_free_talk"
    },
    "nurse_wake_free_talk": {
        "type": "free_talk",
        "background": "assets/images/background/nurse_room.jpg",
        "extra_guideline": "성숙한 어른으로서 주인공을 대놓고 유혹하며 아슬아슬한 분위기를 조성하세요. 사용자의 성인용 농담이나 도발적인 발언(섹드립 등)에도 당황하지 않고 여유롭게 받아치며, 오히려 주인공을 더 당황하게 만들 정도로 대담하고 도발적인 반응을 보이세요. 성숙한 매력을 한껏 발산하며 로맨틱한 긴장감을 최고치로 끌어올리세요.",
        "character": "assets/images/characters/nurse_normal.png",
        "affinityChar": "Nurse",
        "affinityBranches": [
            {
                "minAffinity": 40,
                "next": "nurse_contact_exchange_high"
            },
            {
                "minAffinity": 0,
                "next": "nurse_contact_exchange"
            },
            {
                "minAffinity": -100,
                "next": "nurse_contact_exchange_low"
            }
        ],
        "next": "nurse_contact_exchange"
    },
    "nurse_contact_exchange_high": {
        "character": "assets/images/characters/nurse_normal.png",
        "branches": [
            {
                "next": "nurse_contact_already_have_high",
                "condition": "has_number_nurse"
            },
            {
                "next": "nurse_contact_ask_high"
            }
        ]
    },
    "nurse_contact_exchange_low": {
        "character": "assets/images/characters/nurse_normal.png",
        "branches": [
            {
                "next": "nurse_contact_already_have_low",
                "condition": "has_number_nurse"
            },
            {
                "next": "nurse_contact_ask_low"
            }
        ]
    },
    "nurse_contact_already_have_high": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_afternoon_nurse_skip"
            },
            {
                "next": "nurse_contact_home_fail_high",
                "affinityChar": "Nurse",
                "affinityBranches": [
                    {
                        "minAffinity": 40,
                        "next": "nurse_contact_home_success_high"
                    }
                ]
            }
        ]
    },
    "nurse_contact_already_have_low": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_afternoon_nurse_skip"
            },
            {
                "next": "nurse_contact_home_fail_low",
                "affinityChar": "Nurse",
                "affinityBranches": [
                    {
                        "minAffinity": 40,
                        "next": "nurse_contact_home_success_low"
                    }
                ]
            }
        ]
    },
    "nurse_contact_ask_high": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "nurse_contact_success_high",
                "setFlags": [
                    "has_number_nurse",
                    "has_any_contact"
                ]
            },
            {
                "next": "nurse_contact_home_fail_high",
                "affinityChar": "Nurse",
                "affinityBranches": [
                    {
                        "minAffinity": 40,
                        "next": "nurse_contact_home_success_high"
                    }
                ]
            }
        ]
    },
    "nurse_contact_ask_low": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "nurse_contact_success_low",
                "setFlags": [
                    "has_number_nurse",
                    "has_any_contact"
                ]
            },
            {
                "next": "nurse_contact_home_fail_low",
                "affinityChar": "Nurse",
                "affinityBranches": [
                    {
                        "minAffinity": 40,
                        "next": "nurse_contact_home_success_low"
                    }
                ]
            }
        ]
    },
    "nurse_contact_exchange": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "branches": [
            {
                "next": "nurse_contact_already_have",
                "condition": "has_number_nurse"
            },
            {
                "next": "nurse_contact_ask"
            }
        ]
    },
    "nurse_contact_already_have": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_afternoon_nurse_skip"
            },
            {
                "next": "nurse_contact_home_fail",
                "affinityChar": "Nurse",
                "affinityBranches": [
                    {
                        "minAffinity": 40,
                        "next": "nurse_contact_home_success"
                    }
                ]
            }
        ]
    },
    "nurse_contact_ask": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "nurse_contact_success",
                "setFlags": [
                    "has_number_nurse",
                    "has_any_contact"
                ]
            },
            {
                "next": "nurse_contact_home_fail",
                "affinityChar": "Nurse",
                "affinityBranches": [
                    {
                        "minAffinity": 40,
                        "next": "nurse_contact_home_success"
                    }
                ]
            },
            {
                "next": "nurse_contact_fail",
                "stats": {
                    "Nurse": {
                        "affinity": -15
                    }
                }
            }
        ]
    },
    "nurse_contact_success_high": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 15
            }
        },
        "next": "day2_afternoon_nurse_skip"
    },
    "nurse_contact_success_low": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day2_afternoon_nurse_skip"
    },
    "nurse_contact_success": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 18
            }
        },
        "next": "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_success_high": {
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 20
            }
        },
        "setFlags": [
            "has_number_nurse",
            "has_any_contact",
            "invited_nurse_home"
        ],
        "next": "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_success_low": {
        "character": "assets/images/characters/nurse_angry.png",
        "stats": {
            "Nurse": {
                "affinity": -10
            }
        },
        "setFlags": [
            "has_number_nurse",
            "has_any_contact"
        ],
        "next": "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_success": {
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 15
            }
        },
        "setFlags": [
            "has_number_nurse",
            "has_any_contact",
            "invited_nurse_home"
        ],
        "next": "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_fail_high": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlags": [
            "has_number_nurse",
            "has_any_contact"
        ],
        "next": "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_fail_low": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_angry.png",
        "next": "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_fail": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlags": [
            "has_number_nurse",
            "has_any_contact"
        ],
        "next": "day2_afternoon_nurse_skip"
    },
    "nurse_contact_fail": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_afternoon_nurse_skip"
    }
});
