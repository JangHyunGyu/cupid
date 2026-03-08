/**
 * ============================================================================
 * CUPID - day4_4_night
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

Object.assign(SCENARIO[4], {
    "day4_night_start": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "bgm": "night2.mp3",
        "next": "day4_night_branch"
    },
    "day4_night_branch": {
        "background": "assets/images/background/room_my.png",
        "branches": [
            {
                "next": "day4_night_yuna_sneak",
                "condition": "isDating_Yuna"
            },
            {
                "next": "day4_night_seoyeon_call",
                "condition": "isDating_Seoyeon"
            },
            {
                "next": "day4_night_dain_gym",
                "condition": "isDating_Dain"
            },
            {
                "next": "day4_night_teacher_call",
                "condition": "isDating_Teacher"
            },
            {
                "next": "day4_night_nurse_msg",
                "condition": "isDating_Nurse"
            },
            {
                "next": "day4_night_regret",
                "condition": "day4_waited"
            },
            {
                "next": "day4_night_reflect"
            }
        ]
    },
    "day4_night_yuna_sneak": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "bgm": "mystery.mp3",
        "next": "day4_night_yuna_sneak_2"
    },
    "day4_night_yuna_sneak_2": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_yuna_arrive"
    },
    "day4_night_yuna_arrive": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_arrive_2"
    },
    "day4_night_yuna_arrive_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall"
    },
    "day4_night_yuna_wall": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_2"
    },
    "day4_night_yuna_wall_2": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "night": true,
        "next": "day4_night_yuna_wall_3"
    },
    "day4_night_yuna_wall_3": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "night": true,
        "next": "day4_night_yuna_wall_4"
    },
    "day4_night_yuna_wall_4": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_5"
    },
    "day4_night_yuna_wall_5": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_6"
    },
    "day4_night_yuna_wall_6": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_7"
    },
    "day4_night_yuna_enter_honest": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "day4_night_yuna_corridor"
    },
    "day4_night_yuna_wall_7": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_8"
    },
    "day4_night_yuna_wall_8": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_9"
    },
    "day4_night_yuna_wall_9": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_10"
    },
    "day4_night_yuna_wall_10": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_11"
    },
    "day4_night_yuna_wall_11": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_choice"
    },
    "day4_night_yuna_wall_choice": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_yuna_wall_anger",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_night_yuna_wall_fear",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "day4_night_yuna_wall_anger": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "day4_night_yuna_wall_end"
    },
    "day4_night_yuna_wall_fear": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_wall_end"
    },
    "day4_night_yuna_wall_end": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_arrive_3"
    },
    "day4_night_yuna_arrive_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_choice"
    },
    "day4_night_yuna_choice": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_yuna_enter",
                "stats": {
                    "Yuna": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day4_night_yuna_enter_honest",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            }
        ]
    },
    "day4_night_yuna_enter": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "day4_night_yuna_corridor"
    },
    "day4_night_yuna_corridor": {
        "character": "assets/images/characters/yuna_smile.png",
        "background": "assets/images/background/school_hallway.png",
        "night": true,
        "next": "day4_night_yuna_corridor_2"
    },
    "day4_night_yuna_corridor_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "day4_night_yuna_corridor_3"
    },
    "day4_night_yuna_corridor_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_basement"
    },
    "day4_night_yuna_basement": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/school_basement.png",
        "night": true,
        "next": "day4_night_yuna_basement_2"
    },
    "day4_night_yuna_basement_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_basement_3"
    },
    "day4_night_yuna_basement_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_basement_4"
    },
    "day4_night_yuna_basement_4": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_documents"
    },
    "day4_night_yuna_documents": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_documents_2"
    },
    "day4_night_yuna_documents_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_documents_3"
    },
    "day4_night_yuna_documents_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_truth_choice"
    },
    "day4_night_yuna_truth_choice": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_yuna_senpai_reveal",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_night_yuna_senpai_concern",
                "stats": {
                    "Yuna": {
                        "affinity": 10
                    }
                }
            }
        ]
    },
    "day4_night_yuna_senpai_concern": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_senpai_reveal"
    },
    "day4_night_yuna_senpai_reveal": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_senpai_2"
    },
    "day4_night_yuna_senpai_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_senpai_3"
    },
    "day4_night_yuna_senpai_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_senpai_4"
    },
    "day4_night_yuna_senpai_4": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_senpai_5"
    },
    "day4_night_yuna_senpai_5": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_senpai_6"
    },
    "day4_night_yuna_senpai_6": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_senpai_death"
    },
    "day4_night_yuna_senpai_death": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_silence"
    },
    "day4_night_yuna_silence": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_silence_choice"
    },
    "day4_night_yuna_silence_choice": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_yuna_hand",
                "stats": {
                    "Yuna": {
                        "affinity": 15
                    }
                },
                "setFlag": "day4_held_yuna_hand"
            },
            {
                "next": "day4_night_yuna_listen",
                "stats": {
                    "Yuna": {
                        "affinity": 10
                    }
                }
            }
        ]
    },
    "day4_night_yuna_hand": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_hand_2"
    },
    "day4_night_yuna_hand_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_resemblance"
    },
    "day4_night_yuna_listen": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_intro"
    },
    "day4_night_yuna_seoyeon_intro": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_intro_2"
    },
    "day4_night_yuna_seoyeon_intro_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_intro_3"
    },
    "day4_night_yuna_seoyeon_intro_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal"
    },
    "day4_night_yuna_seoyeon_reveal": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_2"
    },
    "day4_night_yuna_seoyeon_reveal_2": {
        "background": "assets/images/background/school_basement.png",
        "character": null,
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_3"
    },
    "day4_night_yuna_seoyeon_reveal_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_4"
    },
    "day4_night_yuna_seoyeon_reveal_4": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_5"
    },
    "day4_night_yuna_seoyeon_reveal_5": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_6"
    },
    "day4_night_yuna_seoyeon_reveal_6": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_7"
    },
    "day4_night_yuna_seoyeon_reveal_7": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_8"
    },
    "day4_night_yuna_seoyeon_reveal_8": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_9"
    },
    "day4_night_yuna_seoyeon_reveal_9": {
        "background": "assets/images/background/school_basement.png",
        "character": null,
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_10"
    },
    "day4_night_yuna_seoyeon_reveal_10": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_11"
    },
    "day4_night_yuna_seoyeon_reveal_11": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_reveal_12"
    },
    "day4_night_yuna_seoyeon_reveal_12": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_choice"
    },
    "day4_night_yuna_seoyeon_choice": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_yuna_seoyeon_doubt",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_night_yuna_seoyeon_accept",
                "stats": {
                    "Yuna": {
                        "affinity": 8
                    }
                }
            }
        ]
    },
    "day4_night_yuna_seoyeon_doubt": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_doubt_2"
    },
    "day4_night_yuna_seoyeon_doubt_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_bridge"
    },
    "day4_night_yuna_seoyeon_accept": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_seoyeon_bridge"
    },
    "day4_night_yuna_seoyeon_bridge": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resemblance"
    },
    "day4_night_yuna_resemblance": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resemblance_2"
    },
    "day4_night_yuna_resemblance_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_resemblance_3"
    },
    "day4_night_yuna_resemblance_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_resemblance_4"
    },
    "day4_night_yuna_resemblance_4": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_resemblance_5"
    },
    "day4_night_yuna_resemblance_5": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_resemblance_6"
    },
    "day4_night_yuna_resemblance_6": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resemblance_7"
    },
    "day4_night_yuna_resemblance_7": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_critical_choice"
    },
    "day4_night_yuna_critical_choice": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_yuna_moved",
                "stats": {
                    "Yuna": {
                        "affinity": 20
                    }
                },
                "setFlag": "day4_yuna_ally"
            },
            {
                "next": "day4_night_yuna_touched",
                "stats": {
                    "Yuna": {
                        "affinity": 15
                    }
                },
                "setFlag": "day4_yuna_ally"
            },
            {
                "next": "day4_night_yuna_confronted",
                "stats": {
                    "Yuna": {
                        "affinity": -10
                    }
                }
            }
        ]
    },
    "day4_night_yuna_moved": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_moved_2"
    },
    "day4_night_yuna_moved_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_resolve"
    },
    "day4_night_yuna_touched": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_touched_2"
    },
    "day4_night_yuna_touched_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_resolve"
    },
    "day4_night_yuna_confronted": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_confronted_2"
    },
    "day4_night_yuna_confronted_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "day4_night_yuna_confronted_3"
    },
    "day4_night_yuna_confronted_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "setFlag": "day4_yuna_ally",
        "next": "day4_night_yuna_resolve"
    },
    "day4_night_yuna_resolve": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resolve_2"
    },
    "day4_night_yuna_resolve_2": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resolve_3"
    },
    "day4_night_yuna_resolve_3": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resolve_4"
    },
    "day4_night_yuna_resolve_4": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resolve_5"
    },
    "day4_night_yuna_resolve_5": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_resolve_end"
    },
    "day4_night_yuna_resolve_end": {
        "background": "assets/images/background/school_basement.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "setFlag": "day4_yuna_truth_revealed",
        "next": "day4_night_yuna_exit"
    },
    "day4_night_yuna_exit": {
        "character": "assets/images/characters/yuna_smile.png",
        "background": "assets/images/background/street.png",
        "night": true,
        "bgm": "night1.mp3",
        "next": "day4_night_yuna_exit_2"
    },
    "day4_night_yuna_exit_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "day4_night_yuna_exit_3"
    },
    "day4_night_yuna_exit_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "day4_night_yuna_exit_choice"
    },
    "day4_night_yuna_exit_choice": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_yuna_exit_warm",
                "stats": {
                    "Yuna": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day4_night_yuna_exit_promise",
                "stats": {
                    "Yuna": {
                        "affinity": 8
                    }
                }
            }
        ]
    },
    "day4_night_yuna_exit_warm": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_farewell"
    },
    "day4_night_yuna_exit_promise": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "day4_night_yuna_farewell"
    },
    "day4_night_yuna_farewell": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_farewell_2"
    },
    "day4_night_yuna_farewell_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_farewell_3"
    },
    "day4_night_yuna_farewell_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day4_night_yuna_home"
    },
    "day4_night_yuna_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "day4_night_yuna_home_2"
    },
    "day4_night_yuna_home_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "fade": true,
        "next": "day4_final"
    },
    "day4_night_seoyeon_call": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "bgm": "night1.mp3",
        "next": "day4_night_seoyeon_call_2"
    },
    "day4_night_seoyeon_call_2": {
        "background": "assets/images/background/room_my.png",
        "branches": [
            {
                "condition": "day3_lied_to_seoyeon",
                "next": "day4_night_seoyeon_angry_call"
            },
            {
                "next": "day4_night_seoyeon_call_2_normal"
            }
        ]
    },
    "day4_night_seoyeon_call_2_normal": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "silhouette": true,
        "night": true,
        "next": "day4_night_seoyeon_call_3"
    },
    "day4_night_seoyeon_angry_call": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "silhouette": true,
        "night": true,
        "next": "day4_night_seoyeon_call_3"
    },
    "day4_night_seoyeon_call_3": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "silhouette": true,
        "night": true,
        "next": "day4_night_seoyeon_call_4"
    },
    "day4_night_seoyeon_call_4": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "silhouette": true,
        "night": true,
        "next": "day4_night_seoyeon_park"
    },
    "day4_night_seoyeon_park": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_park_2"
    },
    "day4_night_seoyeon_park_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_park_3"
    },
    "day4_night_seoyeon_park_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_seoyeon_concern",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_night_seoyeon_silent_sit",
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            }
        ]
    },
    "day4_night_seoyeon_concern": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_open"
    },
    "day4_night_seoyeon_silent_sit": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_open"
    },
    "day4_night_seoyeon_open": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_open_2"
    },
    "day4_night_seoyeon_open_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_open_3"
    },
    "day4_night_seoyeon_open_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_open_4"
    },
    "day4_night_seoyeon_open_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_open_5"
    },
    "day4_night_seoyeon_open_5": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_open_6"
    },
    "day4_night_seoyeon_open_6": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_open_7"
    },
    "day4_night_seoyeon_open_7": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_tear"
    },
    "day4_night_seoyeon_tear": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_tear_choice"
    },
    "day4_night_seoyeon_tear_choice": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_seoyeon_hug",
                "stats": {
                    "Seoyeon": {
                        "affinity": 15
                    }
                },
                "setFlag": "day4_hugged_seoyeon"
            },
            {
                "next": "day4_night_seoyeon_pinky",
                "stats": {
                    "Seoyeon": {
                        "affinity": 20
                    }
                },
                "setFlag": "day4_pinky_seoyeon"
            }
        ]
    },
    "day4_night_seoyeon_hug": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_hug_2"
    },
    "day4_night_seoyeon_hug_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_hug_3"
    },
    "day4_night_seoyeon_hug_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_real"
    },
    "day4_night_seoyeon_pinky": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_pinky_2"
    },
    "day4_night_seoyeon_pinky_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_pinky_3"
    },
    "day4_night_seoyeon_pinky_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_pinky_4"
    },
    "day4_night_seoyeon_pinky_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "day4_night_seoyeon_real"
    },
    "day4_night_seoyeon_real": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_real_2"
    },
    "day4_night_seoyeon_real_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "day4_night_seoyeon_real_choice"
    },
    "day4_night_seoyeon_real_choice": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_seoyeon_accept",
                "stats": {
                    "Seoyeon": {
                        "affinity": 20
                    }
                }
            },
            {
                "next": "day4_night_seoyeon_gf",
                "stats": {
                    "Seoyeon": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "day4_night_seoyeon_honest",
                "stats": {
                    "Seoyeon": {
                        "affinity": 10
                    }
                }
            }
        ]
    },
    "day4_night_seoyeon_accept": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_accept_2"
    },
    "day4_night_seoyeon_accept_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve"
    },
    "day4_night_seoyeon_gf": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "night": true,
        "next": "day4_night_seoyeon_gf_2"
    },
    "day4_night_seoyeon_gf_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve"
    },
    "day4_night_seoyeon_honest": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_honest_2"
    },
    "day4_night_seoyeon_honest_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve"
    },
    "day4_night_seoyeon_resolve": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve_2"
    },
    "day4_night_seoyeon_resolve_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve_3"
    },
    "day4_night_seoyeon_resolve_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve_4"
    },
    "day4_night_seoyeon_resolve_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_resolve_end"
    },
    "day4_night_seoyeon_resolve_end": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "night": true,
        "setFlag": "day4_seoyeon_real_self",
        "next": "day4_night_seoyeon_farewell"
    },
    "day4_night_seoyeon_farewell": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "day4_night_seoyeon_farewell_2"
    },
    "day4_night_seoyeon_farewell_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_farewell_3"
    },
    "day4_night_seoyeon_farewell_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_farewell_4"
    },
    "day4_night_seoyeon_farewell_4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "night": true,
        "next": "day4_night_seoyeon_farewell_5"
    },
    "day4_night_seoyeon_farewell_5": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "night": true,
        "next": "day4_night_seoyeon_farewell_6"
    },
    "day4_night_seoyeon_farewell_6": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day4_night_seoyeon_home"
    },
    "day4_night_seoyeon_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "day4_night_seoyeon_home_2"
    },
    "day4_night_seoyeon_home_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "day4_final"
    },
    "day4_night_dain_gym": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "bgm": "night1.mp3",
        "next": "day4_night_dain_gym_2"
    },
    "day4_night_dain_gym_2": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_dain_gym_3"
    },
    "day4_night_dain_gym_3": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_dain_arrive"
    },
    "day4_night_dain_arrive": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_arrive_2"
    },
    "day4_night_dain_arrive_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_arrive_3"
    },
    "day4_night_dain_arrive_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_spike"
    },
    "day4_night_dain_spike": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_spike_2"
    },
    "day4_night_dain_spike_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_spike_3"
    },
    "day4_night_dain_spike_3": {
        "background": "assets/images/background/dain_hurt_event1.png",
        "character": null,
        "next": "day4_night_dain_hurt"
    },
    "day4_night_dain_hurt": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_hurt_2"
    },
    "day4_night_dain_hurt_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_hurt_3"
    },
    "day4_night_dain_hurt_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_hurt_4"
    },
    "day4_night_dain_hurt_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_dain_check",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day4_night_dain_serious",
                "stats": {
                    "Dain": {
                        "affinity": 10
                    }
                }
            }
        ]
    },
    "day4_night_dain_check": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_secret"
    },
    "day4_night_dain_serious": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_secret"
    },
    "day4_night_dain_secret": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_secret_2"
    },
    "day4_night_dain_secret_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_secret_3"
    },
    "day4_night_dain_secret_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_secret_4"
    },
    "day4_night_dain_secret_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_secret_5"
    },
    "day4_night_dain_secret_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_secret_6"
    },
    "day4_night_dain_secret_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_dream"
    },
    "day4_night_dain_dream": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_dream_2"
    },
    "day4_night_dain_dream_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_dream_3"
    },
    "day4_night_dain_dream_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_dream_4"
    },
    "day4_night_dain_dream_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_dream_5"
    },
    "day4_night_dain_dream_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_cry"
    },
    "day4_night_dain_cry": {
        "background": "assets/images/background/dain_depression_event1.png",
        "character": null,
        "next": "day4_night_dain_cry_choice"
    },
    "day4_night_dain_cry_choice": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_dain_future",
                "stats": {
                    "Dain": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "day4_night_dain_tears_ok",
                "stats": {
                    "Dain": {
                        "affinity": 20
                    }
                },
                "setFlag": "day4_dain_tears"
            },
            {
                "next": "day4_night_dain_last_spike",
                "stats": {
                    "Dain": {
                        "affinity": 12
                    }
                }
            }
        ]
    },
    "day4_night_dain_future": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_future_2"
    },
    "day4_night_dain_future_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_future_3"
    },
    "day4_night_dain_future_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_future_4"
    },
    "day4_night_dain_future_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "next": "day4_night_dain_resolve"
    },
    "day4_night_dain_tears_ok": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_tears_ok_2"
    },
    "day4_night_dain_tears_ok_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_tears_ok_3"
    },
    "day4_night_dain_tears_ok_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_tears_ok_4"
    },
    "day4_night_dain_tears_ok_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_resolve"
    },
    "day4_night_dain_last_spike": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_last_spike_2"
    },
    "day4_night_dain_last_spike_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_last_spike_3"
    },
    "day4_night_dain_last_spike_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "day4_night_dain_last_spike_4"
    },
    "day4_night_dain_last_spike_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_last_spike_5"
    },
    "day4_night_dain_last_spike_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "next": "day4_night_dain_resolve"
    },
    "day4_night_dain_resolve": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_resolve_2"
    },
    "day4_night_dain_resolve_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_resolve_3"
    },
    "day4_night_dain_resolve_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_resolve_4"
    },
    "day4_night_dain_resolve_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "day4_night_dain_resolve_end"
    },
    "day4_night_dain_resolve_end": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "setFlag": "day4_dain_truth_revealed",
        "next": "day4_night_dain_farewell"
    },
    "day4_night_dain_farewell": {
        "character": "assets/images/characters/dain_shy.png",
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "day4_night_dain_farewell_2"
    },
    "day4_night_dain_farewell_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_pout.png",
        "night": true,
        "next": "day4_night_dain_farewell_3"
    },
    "day4_night_dain_farewell_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_pout.png",
        "night": true,
        "next": "day4_night_dain_farewell_4"
    },
    "day4_night_dain_farewell_4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_pout.png",
        "night": true,
        "next": "day4_night_dain_farewell_5"
    },
    "day4_night_dain_farewell_5": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "next": "day4_night_dain_farewell_6"
    },
    "day4_night_dain_farewell_6": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day4_night_dain_home"
    },
    "day4_night_dain_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "day4_night_dain_home_2"
    },
    "day4_night_dain_home_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "fade": true,
        "next": "day4_final"
    },
    "day4_night_teacher_call": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "bgm": "night1.mp3",
        "next": "day4_night_teacher_call_2"
    },
    "day4_night_teacher_call_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day4_night_teacher_call_3"
    },
    "day4_night_teacher_call_3": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day4_night_teacher_call_4"
    },
    "day4_night_teacher_call_4": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day4_night_teacher_cafe"
    },
    "day4_night_teacher_cafe": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_cafe_2"
    },
    "day4_night_teacher_cafe_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_cafe_3"
    },
    "day4_night_teacher_cafe_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_teacher_concern",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_night_teacher_wait",
                "stats": {
                    "Teacher": {
                        "affinity": 8
                    }
                }
            }
        ]
    },
    "day4_night_teacher_concern": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_open"
    },
    "day4_night_teacher_wait": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_open"
    },
    "day4_night_teacher_open": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_open_2"
    },
    "day4_night_teacher_open_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_open_3"
    },
    "day4_night_teacher_open_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_open_4"
    },
    "day4_night_teacher_open_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_open_5"
    },
    "day4_night_teacher_open_5": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_open_6"
    },
    "day4_night_teacher_open_6": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_tear"
    },
    "day4_night_teacher_tear": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_tear_2"
    },
    "day4_night_teacher_tear_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_tear_choice"
    },
    "day4_night_teacher_tear_choice": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_teacher_hold",
                "stats": {
                    "Teacher": {
                        "affinity": 15
                    }
                },
                "setFlag": "day4_held_teacher_hand"
            },
            {
                "next": "day4_night_teacher_woman",
                "stats": {
                    "Teacher": {
                        "affinity": 20
                    }
                },
                "setFlag": "day4_teacher_as_woman"
            }
        ]
    },
    "day4_night_teacher_hold": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_hold_2"
    },
    "day4_night_teacher_hold_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_hold_3"
    },
    "day4_night_teacher_hold_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_hold_4"
    },
    "day4_night_teacher_hold_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_real"
    },
    "day4_night_teacher_woman": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_woman_2"
    },
    "day4_night_teacher_woman_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_woman_3"
    },
    "day4_night_teacher_woman_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_woman_4"
    },
    "day4_night_teacher_woman_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_real"
    },
    "day4_night_teacher_real": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "next": "day4_night_teacher_real_2"
    },
    "day4_night_teacher_real_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_real_3"
    },
    "day4_night_teacher_real_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_real_4"
    },
    "day4_night_teacher_real_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_real_choice"
    },
    "day4_night_teacher_real_choice": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_teacher_graduate",
                "stats": {
                    "Teacher": {
                        "affinity": 20
                    }
                }
            },
            {
                "next": "day4_night_teacher_present",
                "stats": {
                    "Teacher": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "day4_night_teacher_give_up",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            }
        ]
    },
    "day4_night_teacher_graduate": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_graduate_2"
    },
    "day4_night_teacher_graduate_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_graduate_3"
    },
    "day4_night_teacher_graduate_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_graduate_4"
    },
    "day4_night_teacher_graduate_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "night": true,
        "next": "day4_night_teacher_resolve"
    },
    "day4_night_teacher_present": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_present_2"
    },
    "day4_night_teacher_present_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_present_3"
    },
    "day4_night_teacher_present_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "night": true,
        "next": "day4_night_teacher_resolve"
    },
    "day4_night_teacher_give_up": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_angry.png",
        "night": true,
        "next": "day4_night_teacher_give_up_2"
    },
    "day4_night_teacher_give_up_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_give_up_3"
    },
    "day4_night_teacher_give_up_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_sad.png",
        "night": true,
        "next": "day4_night_teacher_resolve"
    },
    "day4_night_teacher_resolve": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "next": "day4_night_teacher_resolve_2"
    },
    "day4_night_teacher_resolve_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "next": "day4_night_teacher_resolve_3"
    },
    "day4_night_teacher_resolve_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "night": true,
        "next": "day4_night_teacher_resolve_4"
    },
    "day4_night_teacher_resolve_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "night": true,
        "next": "day4_night_teacher_resolve_end"
    },
    "day4_night_teacher_resolve_end": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "night": true,
        "setFlag": "day4_teacher_secret_shared",
        "next": "day4_night_teacher_farewell"
    },
    "day4_night_teacher_farewell": {
        "character": "assets/images/characters/teacher_smile.png",
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "day4_night_teacher_farewell_2"
    },
    "day4_night_teacher_farewell_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_farewell_3"
    },
    "day4_night_teacher_farewell_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_farewell_4"
    },
    "day4_night_teacher_farewell_4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_farewell_5"
    },
    "day4_night_teacher_farewell_5": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_smile.png",
        "night": true,
        "next": "day4_night_teacher_farewell_6"
    },
    "day4_night_teacher_farewell_6": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day4_night_teacher_home"
    },
    "day4_night_teacher_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "day4_night_teacher_home_2"
    },
    "day4_night_teacher_home_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "fade": true,
        "next": "day4_final"
    },
    "day4_night_nurse_msg": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "bgm": "night1.mp3",
        "next": "day4_night_nurse_msg_2"
    },
    "day4_night_nurse_msg_2": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_nurse_msg_3"
    },
    "day4_night_nurse_msg_3": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_nurse_msg_4"
    },
    "day4_night_nurse_msg_4": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_nurse_arrive"
    },
    "day4_night_nurse_arrive": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_arrive_2"
    },
    "day4_night_nurse_arrive_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_arrive_3"
    },
    "day4_night_nurse_arrive_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_nurse_tired",
                "stats": {
                    "Nurse": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day4_night_nurse_real_reason",
                "stats": {
                    "Nurse": {
                        "affinity": 5
                    }
                }
            }
        ]
    },
    "day4_night_nurse_tired": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_mask"
    },
    "day4_night_nurse_real_reason": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_mask"
    },
    "day4_night_nurse_mask": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_mask_2"
    },
    "day4_night_nurse_mask_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_mask_3"
    },
    "day4_night_nurse_mask_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_mask_4"
    },
    "day4_night_nurse_mask_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_mask_5"
    },
    "day4_night_nurse_mask_5": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_mask_6"
    },
    "day4_night_nurse_mask_6": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_lonely"
    },
    "day4_night_nurse_lonely": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_lonely_2"
    },
    "day4_night_nurse_lonely_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_lonely_3"
    },
    "day4_night_nurse_lonely_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_lonely_choice"
    },
    "day4_night_nurse_lonely_choice": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_nurse_hug",
                "stats": {
                    "Nurse": {
                        "affinity": 20
                    }
                },
                "setFlag": "day4_hugged_nurse"
            },
            {
                "next": "day4_night_nurse_care",
                "stats": {
                    "Nurse": {
                        "affinity": 15
                    }
                },
                "setFlag": "day4_nurse_cared"
            }
        ]
    },
    "day4_night_nurse_hug": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_hug_2"
    },
    "day4_night_nurse_hug_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_hug_3"
    },
    "day4_night_nurse_hug_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_hug_4"
    },
    "day4_night_nurse_hug_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_hug_5"
    },
    "day4_night_nurse_hug_5": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_truth"
    },
    "day4_night_nurse_care": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_care_2"
    },
    "day4_night_nurse_care_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_care_3"
    },
    "day4_night_nurse_care_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_care_4"
    },
    "day4_night_nurse_care_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_truth"
    },
    "day4_night_nurse_truth": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_truth_2"
    },
    "day4_night_nurse_truth_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_truth_3"
    },
    "day4_night_nurse_truth_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_truth_4"
    },
    "day4_night_nurse_truth_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_truth_5"
    },
    "day4_night_nurse_truth_5": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_truth_6"
    },
    "day4_night_nurse_truth_6": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_truth_choice"
    },
    "day4_night_nurse_truth_choice": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "choices": [
            {
                "next": "day4_night_nurse_accept_all",
                "stats": {
                    "Nurse": {
                        "affinity": 20
                    }
                }
            },
            {
                "next": "day4_night_nurse_thanks",
                "stats": {
                    "Nurse": {
                        "affinity": 15
                    }
                }
            },
            {
                "next": "day4_night_nurse_safe",
                "stats": {
                    "Nurse": {
                        "affinity": 18
                    }
                }
            }
        ]
    },
    "day4_night_nurse_accept_all": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_accept_all_2"
    },
    "day4_night_nurse_accept_all_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_accept_all_3"
    },
    "day4_night_nurse_accept_all_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_resolve"
    },
    "day4_night_nurse_thanks": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_thanks_2"
    },
    "day4_night_nurse_thanks_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_resolve"
    },
    "day4_night_nurse_safe": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_safe_2"
    },
    "day4_night_nurse_safe_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_resolve"
    },
    "day4_night_nurse_resolve": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_resolve_2"
    },
    "day4_night_nurse_resolve_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_resolve_3"
    },
    "day4_night_nurse_resolve_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_resolve_4"
    },
    "day4_night_nurse_resolve_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_resolve_end"
    },
    "day4_night_nurse_resolve_end": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "setFlag": "day4_nurse_mask_off",
        "next": "day4_night_nurse_farewell"
    },
    "day4_night_nurse_farewell": {
        "character": "assets/images/characters/nurse_shy.png",
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "day4_night_nurse_farewell_2"
    },
    "day4_night_nurse_farewell_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_farewell_3"
    },
    "day4_night_nurse_farewell_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day4_night_nurse_farewell_4"
    },
    "day4_night_nurse_farewell_4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_farewell_5"
    },
    "day4_night_nurse_farewell_5": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_farewell_6"
    },
    "day4_night_nurse_farewell_6": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day4_night_nurse_home"
    },
    "day4_night_nurse_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "day4_night_nurse_home_2"
    },
    "day4_night_nurse_home_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "fade": true,
        "next": "day4_final"
    },
    "day4_night_regret": {
        "night": true,
        "next": "day4_night_regret_2"
    },
    "day4_night_regret_2": {
        "night": true,
        "next": "day4_night_regret_msg"
    },
    "day4_night_regret_msg": {
        "night": true,
        "next": "day4_night_regret_reply"
    },
    "day4_night_regret_reply": {
        "night": true,
        "next": "day4_night_sleep"
    },
    "day4_night_reflect": {
        "night": true,
        "next": "day4_night_sleep"
    },
    "day4_night_sleep": {
        "night": true,
        "fade": true,
        "next": "day4_final"
    },
    "day4_final": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "changeDay": 5,
        "next": "day5_start"
    }
});
