/**
 * ============================================================================
 * CUPID - day3_3_afterschool
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[3]) SCENARIO[3] = {};

Object.assign(SCENARIO[3], {
    "after3_start": {
        "background": "assets/images/background/school_hallway.png",
        "bgm": "sunset1.mp3",
        "character": null,
        "next": "after3_choice"
    },
    "after3_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "choices": [
            {
                "next": "after3_seo_1",
                "setFlags": ["route_seoyeon"]
            },
            {
                "next": "after3_yuna_1",
                "setFlags": ["route_yuna"]
            },
            {
                "next": "after3_dain_1",
                "setFlags": ["route_dain"]
            }
        ]
    },

    // ========== SEOYEON ROUTE ==========
    "after3_seo_1": {
        "background": "assets/images/background/teacher_room.png",
        "bgm": "sunset1.mp3",
        "character": null,
        "next": "after3_seo_2"
    },
    "after3_seo_2": {
        "background": "assets/images/background/teacher_room.png",
        "character": null,
        "next": "after3_seo_3"
    },
    "after3_seo_3": {
        "background": "assets/images/background/teacher_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_4"
    },
    "after3_seo_4": {
        "background": "assets/images/background/teacher_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_5"
    },
    "after3_seo_5": {
        "background": "assets/images/background/teacher_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_6"
    },
    "after3_seo_6": {
        "background": "assets/images/background/teacher_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_7"
    },
    "after3_seo_7": {
        "background": "assets/images/background/teacher_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_8"
    },
    "after3_seo_8": {
        "background": "assets/images/background/teacher_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_9"
    },
    "after3_seo_9": {
        "background": "assets/images/background/teacher_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_choice"
    },
    "after3_seo_choice": {
        "background": "assets/images/background/teacher_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "choices": [
            {
                "next": "after3_seo_choice1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "after3_seo_choice2",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            }
        ]
    },
    "after3_seo_choice1": {
        "background": "assets/images/background/teacher_room.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "after3_seo_choice1_react"
    },
    "after3_seo_choice1_react": {
        "background": "assets/images/background/teacher_room.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "setFlags": ["seoyeon_day3_event"],
        "next": "after3_seo_end"
    },
    "after3_seo_choice2": {
        "background": "assets/images/background/teacher_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlags": ["seoyeon_day3_event"],
        "next": "after3_seo_end"
    },
    "after3_seo_end": {
        "background": "assets/images/background/teacher_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "branches": [
            {
                "next": "after3_confront_1",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "after3_final"
            }
        ]
    },

    // ========== YUNA ROUTE ==========
    "after3_yuna_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "bgm": "night1.mp3",
        "character": null,
        "next": "after3_yuna_2"
    },
    "after3_yuna_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "next": "after3_yuna_3"
    },
    "after3_yuna_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "next": "after3_yuna_4"
    },
    "after3_yuna_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "next": "after3_yuna_5"
    },
    "after3_yuna_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "next": "after3_yuna_6"
    },
    "after3_yuna_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after3_yuna_7"
    },
    "after3_yuna_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after3_yuna_8"
    },
    "after3_yuna_8": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_9"
    },
    "after3_yuna_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_choice"
    },
    "after3_yuna_choice": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "choices": [
            {
                "next": "after3_yuna_choice1",
                "stats": {
                    "Yuna": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "after3_yuna_choice2",
                "stats": {
                    "Yuna": {
                        "affinity": 10
                    }
                }
            }
        ]
    },
    "after3_yuna_choice1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_choice1_2"
    },
    "after3_yuna_choice1_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_choice1_3"
    },
    "after3_yuna_choice1_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_choice1_react"
    },
    "after3_yuna_choice1_react": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "setFlags": ["yuna_day3_event"],
        "next": "after3_yuna_end"
    },
    "after3_yuna_choice2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_choice2_2"
    },
    "after3_yuna_choice2_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_choice2_3"
    },
    "after3_yuna_choice2_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_choice2_react"
    },
    "after3_yuna_choice2_react": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "setFlags": ["yuna_day3_event"],
        "next": "after3_yuna_end"
    },
    "after3_yuna_end": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "branches": [
            {
                "next": "after3_confront_1",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "after3_final"
            }
        ]
    },

    // ========== DAIN ROUTE ==========
    "after3_dain_1": {
        "background": "assets/images/background/gym.png",
        "bgm": "daily2.mp3",
        "character": null,
        "next": "after3_dain_2"
    },
    "after3_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after3_dain_3"
    },
    "after3_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "next": "after3_dain_4"
    },
    "after3_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "next": "after3_dain_5"
    },
    "after3_dain_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "next": "after3_dain_6"
    },
    "after3_dain_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_choice"
    },
    "after3_dain_choice": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "choices": [
            {
                "next": "after3_dain_choice1",
                "stats": {
                    "Dain": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "after3_dain_choice2",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            }
        ]
    },
    "after3_dain_choice1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_choice1_2"
    },
    "after3_dain_choice1_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_choice1_3"
    },
    "after3_dain_choice1_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after3_dain_choice1_react"
    },
    "after3_dain_choice1_react": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after3_dain_choice1_react2"
    },
    "after3_dain_choice1_react2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after3_dain_choice1_react3"
    },
    "after3_dain_choice1_react3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "setFlags": ["dain_day3_event"],
        "next": "after3_dain_end"
    },
    "after3_dain_choice2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "setFlags": ["dain_day3_event"],
        "next": "after3_dain_end"
    },
    "after3_dain_end": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "branches": [
            {
                "next": "after3_confront_1",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "after3_final"
            }
        ]
    },

    // ========== CONFRONTATION ==========
    "after3_confront_1": {
        "background": "assets/images/background/school_hallway.png",
        "bgm": "mystery.mp3",
        "character": null,
        "next": "after3_confront_2"
    },
    "after3_confront_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_3"
    },
    "after3_confront_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_4"
    },
    "after3_confront_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_5"
    },
    "after3_confront_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_6"
    },
    "after3_confront_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_choice"
    },
    "after3_confront_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "choices": [
            {
                "next": "after3_confront_admit",
                "stats": {
                    "Seoyeon": {
                        "affinity": -5
                    }
                }
            },
            {
                "next": "after3_confront_excuse",
                "stats": {
                    "Seoyeon": {
                        "affinity": -8
                    }
                }
            },
            {
                "next": "after3_confront_lie",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            }
        ]
    },

    // --- Admit ---
    "after3_confront_admit": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_admit_2"
    },
    "after3_confront_admit_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "after3_confront_admit_3"
    },
    "after3_confront_admit_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "after3_confront_admit_4"
    },
    "after3_confront_admit_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_admit_5"
    },
    "after3_confront_admit_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_admit_6"
    },
    "after3_confront_admit_6": {
        "background": "assets/images/background/school_hallway.png",
        "next": "after3_confront_yuna_enter"
    },

    // --- Excuse ---
    "after3_confront_excuse": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "after3_confront_excuse_2"
    },
    "after3_confront_excuse_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "after3_confront_yuna_enter"
    },

    // --- Lie ---
    "after3_confront_lie": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_lie_2"
    },
    "after3_confront_lie_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_yuna_enter"
    },

    // --- Yuna enters ---
    "after3_confront_yuna_enter": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after3_confront_yuna_1"
    },
    "after3_confront_yuna_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_angry.png",
        "next": "after3_confront_yuna_2"
    },
    "after3_confront_yuna_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_angry.png",
        "next": "after3_confront_yuna_3"
    },
    "after3_confront_yuna_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_angry.png",
        "next": "after3_confront_yuna_4"
    },
    "after3_confront_yuna_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_angry.png",
        "next": "after3_confront_yuna_5"
    },
    "after3_confront_yuna_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_angry.png",
        "next": "after3_confront_yuna_6"
    },
    "after3_confront_yuna_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after3_confront_end"
    },
    "after3_confront_end": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after3_final"
    },

    // ========== FINAL ==========
    "after3_final": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "night3_start"
    }
});
