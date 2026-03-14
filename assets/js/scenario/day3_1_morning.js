/**
 * ============================================================================
 * CUPID - day3_1_morning
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[3]) SCENARIO[3] = {};

Object.assign(SCENARIO[3], {
    "morning3_start": {
        "background": "assets/images/background/school.png",
        "bgm": "intro.mp3",
        "character": null,
        "next": "morning3_start_2"
    },
    "morning3_start_2": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "morning3_gate_branch"
    },
    "morning3_gate_branch": {
        "background": "assets/images/background/school.png",
        "character": null,
        "affinityBranches": [
            { "char": "Seoyeon", "minAffinity": 1, "next": "morning3_seo_gate_1" },
            { "char": "Dain", "minAffinity": 1, "next": "morning3_dain_gate_1" },
            { "char": "Yuna", "minAffinity": 1, "next": "morning3_yuna_gate_1" }
        ],
        "next": "morning3_seo_gate_1"
    },

    // === 서연 호감도 최고 루트 ===
    "morning3_seo_gate_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_seo_gate_2"
    },
    "morning3_seo_gate_2": {
        "background": "assets/images/background/school.png",
        "next": "morning3_seo_gate_3"
    },
    "morning3_seo_gate_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_seo_gate_4"
    },
    "morning3_seo_gate_4": {
        "background": "assets/images/background/school.png",
        "next": "morning3_seo_gate_5"
    },
    "morning3_seo_gate_5": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "morning3_seo_gate_6"
    },
    "morning3_seo_gate_6": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_seo_gate_7"
    },
    "morning3_seo_gate_7": {
        "background": "assets/images/background/school.png",
        "setFlags": ["morning3_companion_seoyeon"],
        "next": "morning3_classroom_1"
    },

    // === 유나 호감도 최고 루트 ===
    "morning3_yuna_gate_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning3_yuna_gate_2"
    },
    "morning3_yuna_gate_2": {
        "background": "assets/images/background/school.png",
        "next": "morning3_yuna_gate_3"
    },
    "morning3_yuna_gate_3": {
        "background": "assets/images/background/school.png",
        "next": "morning3_yuna_gate_4"
    },
    "morning3_yuna_gate_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning3_yuna_gate_5"
    },
    "morning3_yuna_gate_5": {
        "background": "assets/images/background/school.png",
        "next": "morning3_yuna_gate_6"
    },
    "morning3_yuna_gate_6": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning3_yuna_gate_7"
    },
    "morning3_yuna_gate_7": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "setFlags": ["morning3_companion_yuna"],
        "next": "morning3_classroom_1"
    },

    // === 다인 호감도 최고 루트 ===
    "morning3_dain_gate_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_dain_gate_2"
    },
    "morning3_dain_gate_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_dain_gate_3"
    },
    "morning3_dain_gate_3": {
        "background": "assets/images/background/school.png",
        "next": "morning3_dain_gate_4"
    },
    "morning3_dain_gate_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_dain_gate_5"
    },
    "morning3_dain_gate_5": {
        "background": "assets/images/background/school.png",
        "setFlags": ["morning3_companion_dain"],
        "next": "morning3_classroom_1"
    },

    // === 교실 도착 ===
    "morning3_classroom_1": {
        "background": "assets/images/background/room_school.png",
        "branches": [
            {
                "next": "morning3_react_seo_1",
                "condition": "morning3_companion_seoyeon"
            },
            {
                "next": "morning3_react_yuna_1",
                "condition": "morning3_companion_yuna"
            },
            {
                "next": "morning3_react_dain_1",
                "condition": "morning3_companion_dain"
            },
            {
                "next": "morning3_react_seo_1"
            }
        ]
    },

    // === 서연과 동행 시 리액션 ===
    "morning3_react_seo_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_react_seo_2"
    },
    "morning3_react_seo_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "next": "morning3_date_intro"
    },

    // === 유나와 동행 시 리액션 ===
    "morning3_react_yuna_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "morning3_react_yuna_2"
    },
    "morning3_react_yuna_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_date_intro"
    },

    // === 다인과 동행 시 리액션 ===
    "morning3_react_dain_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_react_dain_2"
    },
    "morning3_react_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning3_date_intro"
    },

    // === 주말 데이트 제안 도입 ===
    "morning3_date_intro": {
        "background": "assets/images/background/room_school.png",
        "next": "morning3_date_seo_1"
    },

    // === 서연 데이트 제안 ===
    "morning3_date_seo_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_date_seo_choice"
    },
    "morning3_date_seo_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "morning3_date_seo_accept",
                "setFlags": ["accepted_seoyeon_date"],
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "morning3_date_seo_decline",
                "stats": {
                    "Seoyeon": {
                        "affinity": -3
                    }
                }
            }
        ]
    },
    "morning3_date_seo_accept": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "morning3_date_dain_1"
    },
    "morning3_date_seo_decline": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_date_dain_1"
    },

    // === 다인 데이트 제안 ===
    "morning3_date_dain_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_date_dain_2"
    },
    "morning3_date_dain_2": {
        "background": "assets/images/background/room_school.png",
        "next": "morning3_date_dain_3"
    },
    "morning3_date_dain_3": {
        "background": "assets/images/background/room_school.png",
        "next": "morning3_date_dain_choice"
    },
    "morning3_date_dain_choice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            {
                "next": "morning3_date_dain_accept",
                "setFlags": ["accepted_dain_date"],
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "morning3_date_dain_decline",
                "stats": {
                    "Dain": {
                        "affinity": -3
                    }
                }
            }
        ]
    },
    "morning3_date_dain_accept": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning3_date_dain_decline_narr"
    },
    "morning3_date_dain_decline": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_date_dain_decline_narr"
    },
    "morning3_date_dain_decline_narr": {
        "background": "assets/images/background/room_school.png",
        "branches": [
            {
                "next": "morning3_date_dain_decline_inner",
                "excludeCondition": "accepted_dain_date"
            },
            {
                "next": "morning3_date_yuna_1"
            }
        ]
    },
    "morning3_date_dain_decline_inner": {
        "background": "assets/images/background/room_school.png",
        "next": "morning3_date_dain_decline_inner_2"
    },
    "morning3_date_dain_decline_inner_2": {
        "background": "assets/images/background/room_school.png",
        "next": "morning3_date_yuna_1"
    },

    // === 유나 데이트 제안 (쪽지) ===
    "morning3_date_yuna_1": {
        "background": "assets/images/background/room_school.png",
        "next": "morning3_date_yuna_2"
    },
    "morning3_date_yuna_2": {
        "background": "assets/images/background/room_school.png",
        "next": "morning3_date_yuna_choice"
    },
    "morning3_date_yuna_choice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "morning3_date_yuna_accept",
                "setFlags": ["accepted_yuna_date"],
                "stats": { "Yuna": { "affinity": 5 } }
            },
            {
                "next": "morning3_date_yuna_decline",
                "stats": { "Yuna": { "affinity": -3 } }
            }
        ]
    },
    "morning3_date_yuna_accept": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "morning3_check_multiple"
    },
    "morning3_date_yuna_decline": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "morning3_check_multiple"
    },

    // === 복수 약속 체크 ===
    "morning3_check_multiple": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            {
                "next": "morning3_multi_from_seo",
                "condition": "accepted_seoyeon_date"
            },
            {
                "next": "morning3_multi_from_dain",
                "condition": "accepted_dain_date"
            },
            {
                "next": "morning3_multi_from_yuna",
                "condition": "accepted_yuna_date"
            },
            {
                "next": "morning3_end"
            }
        ]
    },
    "morning3_multi_from_seo": {
        "branches": [
            {
                "next": "morning3_set_multiple",
                "condition": "accepted_dain_date"
            },
            {
                "next": "morning3_set_multiple",
                "condition": "accepted_yuna_date"
            },
            {
                "next": "morning3_end"
            }
        ]
    },
    "morning3_multi_from_dain": {
        "branches": [
            {
                "next": "morning3_set_multiple",
                "condition": "accepted_yuna_date"
            },
            {
                "next": "morning3_end"
            }
        ]
    },
    "morning3_multi_from_yuna": {
        "next": "morning3_end"
    },
    "morning3_set_multiple": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "setFlags": ["day3_has_multiple_dates"],
        "next": "morning3_end"
    },

    // === 종료 ===
    "morning3_end": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "lunch3_start"
    }
});
