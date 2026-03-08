/**
 * ============================================================================
 * CUPID - day1_1_morning
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[1]) SCENARIO[1] = {};

Object.assign(SCENARIO[1], {
    "start": {
        "background": "assets/images/background/school.png",
        "bgm": "intro.mp3",
        "character": null,
        "next": "start_2"
    },
    "start_2": {
        "background": "assets/images/background/school.png",
        "next": "start_3"
    },
    "start_3": {
        "background": "assets/images/background/school.png",
        "next": "name_input_scene"
    },
    "name_input_scene": {
        "type": "input",
        "background": "assets/images/background/school.png",
        "next": "start_4"
    },
    "start_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "intro_1"
    },
    "intro_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "intro_2"
    },
    "intro_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "intro_3"
    },
    "intro_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlags": [
            "met_seoyeon",
            "knows_name_seoyeon"
        ],
        "choices": [
            {
                "next": "path_friendly_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "path_blush_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "path_tease_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 7
                    }
                }
            },
            {
                "next": "path_silent_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "path_rude_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": -30
                    }
                }
            }
        ]
    },
    "path_rude_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "path_rude_1_2"
    },
    "path_rude_1_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "hallway_1"
    },
    "path_friendly_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "path_friendly_1_2"
    },
    "path_friendly_1_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "hallway_1"
    },
    "path_tease_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "path_tease_1_2"
    },
    "path_tease_1_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_1"
    },
    "path_blush_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "path_blush_1_2"
    },
    "path_blush_1_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "hallway_1"
    },
    "path_silent_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "path_silent_1_2"
    },
    "path_silent_1_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_1"
    },
    "hallway_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_back.png",
        "next": "hallway_name_ask"
    },
    "hallway_name_ask": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_name_share"
    },
    "hallway_name_share": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_name_share_2"
    },
    "hallway_name_share_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "hallway_1_2"
    },
    "hallway_1_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_back.png",
        "next": "hallway_free_talk"
    },
    "hallway_free_talk": {
        "type": "free_talk",
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 15,
                "next": "hallway_1_3_high"
            },
            {
                "minAffinity": 0,
                "next": "hallway_1_3"
            },
            {
                "minAffinity": -999,
                "next": "hallway_1_3_low"
            }
        ],
        "next": "hallway_1_3"
    },
    "hallway_1_3_high": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "choices": [
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_club_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_club_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_club_low"
                    }
                ]
            },
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_flatter_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_flatter_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_flatter_low"
                    }
                ]
            },
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_trap_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_trap_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_trap_low"
                    }
                ]
            },
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_listen_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_listen_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_listen_low"
                    }
                ]
            }
        ]
    },
    "hallway_1_3_low": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "choices": [
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_club_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_club_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_club_low"
                    }
                ]
            },
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_flatter_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_flatter_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_flatter_low"
                    }
                ]
            },
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_trap_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_trap_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_trap_low"
                    }
                ]
            },
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_listen_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_listen_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_listen_low"
                    }
                ]
            }
        ]
    },
    "hallway_1_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_club_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_club_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_club_low"
                    }
                ]
            },
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_flatter_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_flatter_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_flatter_low"
                    }
                ]
            },
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_trap_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_trap_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_trap_low"
                    }
                ]
            },
            {
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "hallway_talk_listen_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "hallway_talk_listen_normal"
                    },
                    {
                        "minAffinity": -999,
                        "next": "hallway_talk_listen_low"
                    }
                ]
            }
        ]
    },
    "hallway_talk_trap_high": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 7
            }
        },
        "next": "hallway_talk_trap_high_2"
    },
    "hallway_talk_trap_high_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "hallway_2"
    },
    "hallway_talk_trap_low": {
        "character": "assets/images/characters/seyoun_angry.png",
        "stats": {
            "Seoyeon": {
                "affinity": -10
            }
        },
        "next": "hallway_talk_trap_low_2"
    },
    "hallway_talk_trap_low_2": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "hallway_2"
    },
    "hallway_talk_trap_normal": {
        "character": "assets/images/characters/seyoun_pout.png",
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "next": "hallway_talk_trap_normal_2"
    },
    "hallway_talk_trap_normal_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_2"
    },
    "hallway_talk_club_high": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "hallway_talk_club_high_2"
    },
    "hallway_talk_club_high_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "hallway_2"
    },
    "hallway_talk_club_low": {
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": -2
            }
        },
        "next": "hallway_talk_club_low_2"
    },
    "hallway_talk_club_low_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_2"
    },
    "hallway_talk_club_normal": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "hallway_talk_club_normal_2"
    },
    "hallway_talk_club_normal_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_2"
    },
    "hallway_talk_flatter_high": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "stats": {
            "Seoyeon": {
                "affinity": 8
            }
        },
        "next": "hallway_talk_flatter_high_2"
    },
    "hallway_talk_flatter_high_2": {
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "hallway_2"
    },
    "hallway_talk_flatter_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "next": "hallway_talk_flatter_low_2"
    },
    "hallway_talk_flatter_low_2": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "hallway_2"
    },
    "hallway_talk_flatter_normal": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "hallway_talk_flatter_normal_2"
    },
    "hallway_talk_flatter_normal_2": {
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "hallway_2"
    },
    "hallway_talk_listen_high": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "hallway_talk_listen_high_2"
    },
    "hallway_talk_listen_high_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "hallway_2"
    },
    "hallway_talk_listen_low": {
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "next": "hallway_talk_listen_low_2"
    },
    "hallway_talk_listen_low_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_2"
    },
    "hallway_talk_listen_normal": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 2
            }
        },
        "next": "hallway_talk_listen_normal_2"
    },
    "hallway_talk_listen_normal_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_2"
    },
    "hallway_2": {
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 0,
                "next": "hallway_2_normal"
            },
            {
                "minAffinity": -100,
                "next": "hallway_2_low"
            }
        ],
        "next": "hallway_2_normal"
    },
    "hallway_2_normal": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_2_2"
    },
    "hallway_2_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "hallway_2_2_low"
    },
    "hallway_2_2_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "hallway_2_3_low"
    },
    "hallway_2_3_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "hallway_2_2"
    },
    "hallway_2_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_2_3"
    },
    "hallway_2_3": {
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "path_flirt_2",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "path_direct_2",
                "stats": {
                    "Seoyeon": {
                        "affinity": 6
                    }
                }
            },
            {
                "next": "path_normal_2",
                "stats": {
                    "Seoyeon": {
                        "affinity": -3
                    }
                }
            },
            {
                "next": "path_rude_2",
                "stats": {
                    "Seoyeon": {
                        "affinity": -40
                    }
                }
            }
        ]
    },
    "path_rude_2": {
        "character": "assets/images/characters/seyoun_pout.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "classroom_1_1_high"
            },
            {
                "minAffinity": 0,
                "next": "classroom_1_1"
            },
            {
                "minAffinity": -100,
                "next": "classroom_1_1_low"
            }
        ],
        "next": "classroom_1_1"
    },
    "path_flirt_2": {
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "path_flirt_2_2"
    },
    "path_flirt_2_2": {
        "character": "assets/images/characters/seyoun_shy.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "classroom_1_1_high"
            },
            {
                "minAffinity": 0,
                "next": "classroom_1_1"
            },
            {
                "minAffinity": -100,
                "next": "classroom_1_1_low"
            }
        ],
        "next": "classroom_1_1"
    },
    "path_normal_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_back.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "classroom_1_1_high"
            },
            {
                "minAffinity": 0,
                "next": "classroom_1_1"
            },
            {
                "minAffinity": -100,
                "next": "classroom_1_1_low"
            }
        ],
        "next": "classroom_1_1"
    },
    "path_direct_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "path_direct_2_2"
    },
    "path_direct_2_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "classroom_1_1_high"
            },
            {
                "minAffinity": 0,
                "next": "classroom_1_1"
            },
            {
                "minAffinity": -100,
                "next": "classroom_1_1_low"
            }
        ],
        "next": "classroom_1_1"
    },
    "classroom_1_1_high": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "classroom_1_2_high"
    },
    "classroom_1_2_high": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "classroom_1_3_high"
    },
    "classroom_1_3_high": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "classroom_2"
    },
    "classroom_1_1_low": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_back.png",
        "next": "classroom_1_2_low"
    },
    "classroom_1_2_low": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "classroom_1_3_low"
    },
    "classroom_1_3_low": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "classroom_2"
    },
    "classroom_1_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "classroom_1_2"
    },
    "classroom_1_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "classroom_1_3"
    },
    "classroom_1_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "classroom_2"
    },
    "classroom_2": {
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "classroom_2_high"
            },
            {
                "minAffinity": 0,
                "next": "classroom_2_normal"
            },
            {
                "minAffinity": -100,
                "next": "classroom_2_low"
            }
        ],
        "next": "classroom_2_normal"
    },
    "classroom_2_normal": {
        "background": "assets/images/background/room_school.png",
        "bgm": "daily.mp3",
        "characters": {
            "left": "assets/images/characters/teacher_normal.png",
            "right": "assets/images/characters/seyoun_normal.png"
        },
        "setFlag": "met_teacher",
        "next": "classroom_2_2"
    },
    "classroom_2_high": {
        "background": "assets/images/background/room_school.png",
        "bgm": "daily.mp3",
        "characters": {
            "left": "assets/images/characters/teacher_normal.png",
            "right": "assets/images/characters/seyoun_laugh.png"
        },
        "setFlag": "met_teacher",
        "next": "classroom_2_2"
    },
    "classroom_2_low": {
        "background": "assets/images/background/room_school.png",
        "bgm": "daily.mp3",
        "characters": {
            "left": "assets/images/characters/teacher_normal.png",
            "right": "assets/images/characters/seyoun_pout.png"
        },
        "setFlag": "met_teacher",
        "next": "classroom_2_2"
    },
    "classroom_2_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "teacher_free_talk"
    },
    "teacher_free_talk": {
        "type": "free_talk",
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "affinityChar": "Teacher",
        "affinityBranches": [
            {
                "minAffinity": 10,
                "next": "classroom_2_3_high"
            },
            {
                "minAffinity": -5,
                "next": "classroom_2_3"
            },
            {
                "minAffinity": -100,
                "next": "classroom_2_3_low"
            }
        ],
        "next": "classroom_2_3"
    },
    "classroom_2_3_high": {
        "character": "assets/images/characters/teacher_smile.png",
        "choices": [
            {
                "next": "teacher_name_share_high",
                "setFlag": "knows_name_teacher",
                "stats": {
                    "Teacher": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "class_after_party",
                "setFlags": [
                    "personality_active",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "class_after_active",
                "setFlags": [
                    "personality_active",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": 4
                    }
                }
            },
            {
                "next": "class_after_quiet",
                "setFlags": [
                    "personality_quiet",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": 4
                    }
                }
            },
            {
                "next": "class_after_study",
                "setFlags": [
                    "personality_study",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": -15
                    }
                }
            }
        ]
    },
    "classroom_2_3_low": {
        "character": "assets/images/characters/teacher_angry.png",
        "choices": [
            {
                "next": "teacher_name_share_low",
                "setFlag": "knows_name_teacher",
                "stats": {
                    "Teacher": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "class_after_party",
                "setFlags": [
                    "personality_active",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "class_after_active",
                "setFlags": [
                    "personality_active",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": 4
                    }
                }
            },
            {
                "next": "class_after_quiet",
                "setFlags": [
                    "personality_quiet",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": 4
                    }
                }
            },
            {
                "next": "class_after_study",
                "setFlags": [
                    "personality_study",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": -15
                    }
                }
            }
        ]
    },
    "classroom_2_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            {
                "next": "teacher_name_share_normal",
                "setFlag": "knows_name_teacher",
                "stats": {
                    "Teacher": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "class_after_party",
                "setFlags": [
                    "personality_active",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "class_after_active",
                "setFlags": [
                    "personality_active",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": 4
                    }
                }
            },
            {
                "next": "class_after_quiet",
                "setFlags": [
                    "personality_quiet",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": 4
                    }
                }
            },
            {
                "next": "class_after_study",
                "setFlags": [
                    "personality_study",
                    "knows_name_teacher"
                ],
                "stats": {
                    "Teacher": {
                        "affinity": -15
                    }
                }
            }
        ]
    },
    "teacher_name_share_high": {
        "character": "assets/images/characters/teacher_smile.png",
        "next": "class_after_name"
    },
    "teacher_name_share_low": {
        "character": "assets/images/characters/teacher_angry.png",
        "next": "class_after_quiet"
    },
    "teacher_name_share_normal": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "class_after_name"
    },
    "class_after_name": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "affinityChar": "Teacher",
        "affinityBranches": [
            {
                "minAffinity": 15,
                "next": "class_after_party"
            },
            {
                "minAffinity": 0,
                "next": "class_after_active"
            },
            {
                "minAffinity": -999,
                "next": "class_after_quiet"
            }
        ],
        "next": "class_after_active"
    },
    "class_after_active": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "class_after_active_2"
    },
    "class_after_active_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "class_after_active_3"
    },
    "class_after_active_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "lunch_time"
    },
    "class_after_quiet": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "class_after_quiet_2"
    },
    "class_after_quiet_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "class_after_quiet_3"
    },
    "class_after_quiet_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "lunch_time"
    },
    "class_after_party": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "class_after_party_2"
    },
    "class_after_party_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "class_after_party_3"
    },
    "class_after_party_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "lunch_time"
    },
    "class_after_study": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "class_after_study_2"
    },
    "class_after_study_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "class_after_study_3"
    },
    "class_after_study_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "lunch_time"
    }
});
