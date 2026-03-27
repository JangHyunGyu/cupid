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
        "branches": [
            { "condition": "homeroom_day2", "next": "hidden_homeroom_d3_1" },
            { "condition": "nurse_day2", "next": "hidden_nurse_d3_check" },
            { "next": "morning3_gate_branch" }
        ]
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

    // === 서연 호감도 최고 루트 — A-4 호감도 3단계 분기 ===
    "morning3_seo_gate_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            { "minAffinity": 35, "next": "morning3_seo_gate_warm_1" },
            { "minAffinity": 15, "next": "morning3_seo_gate_2" },
            { "minAffinity": -100, "next": "morning3_seo_gate_cold_1" }
        ]
    },
    // --- 서연 warm (35+) ---
    "morning3_seo_gate_warm_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "morning3_seo_gate_warm_2"
    },
    "morning3_seo_gate_warm_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "morning3_seo_gate_warm_3"
    },
    "morning3_seo_gate_warm_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "morning3_seo_gate_warm_4"
    },
    "morning3_seo_gate_warm_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "setFlags": ["morning3_companion_seoyeon"],
        "next": "morning3_classroom_1"
    },
    // --- 서연 normal (15~34) ---
    "morning3_seo_gate_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/school.png",
        "next": "morning3_seo_gate_3"
    },
    "morning3_seo_gate_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_seo_gate_4"
    },
    "morning3_seo_gate_4": {
        "character": "assets/images/characters/seyoun_normal.png",
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
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/school.png",
        "setFlags": ["morning3_companion_seoyeon"],
        "next": "morning3_classroom_1"
    },
    // --- 서연 cold (15 미만) ---
    "morning3_seo_gate_cold_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_seo_gate_cold_2"
    },
    "morning3_seo_gate_cold_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_seo_gate_cold_3"
    },
    "morning3_seo_gate_cold_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlags": ["morning3_companion_seoyeon"],
        "next": "morning3_classroom_1"
    },

    // === 유나 호감도 최고 루트 — A-4 호감도 3단계 분기 ===
    "morning3_yuna_gate_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "affinityChar": "Yuna",
        "affinityBranches": [
            { "minAffinity": 35, "next": "morning3_yuna_gate_warm_1" },
            { "minAffinity": 15, "next": "morning3_yuna_gate_2" },
            { "minAffinity": -100, "next": "morning3_yuna_gate_cold_1" }
        ]
    },
    // --- 유나 warm (35+) ---
    "morning3_yuna_gate_warm_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "morning3_yuna_gate_warm_2"
    },
    "morning3_yuna_gate_warm_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "morning3_yuna_gate_warm_3"
    },
    "morning3_yuna_gate_warm_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "morning3_yuna_gate_warm_4"
    },
    "morning3_yuna_gate_warm_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "setFlags": ["morning3_companion_yuna"],
        "next": "morning3_classroom_1"
    },
    // --- 유나 normal (15~34) ---
    "morning3_yuna_gate_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/school.png",
        "next": "morning3_yuna_gate_3"
    },
    "morning3_yuna_gate_3": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/school.png",
        "next": "morning3_yuna_gate_4"
    },
    "morning3_yuna_gate_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning3_yuna_gate_5"
    },
    "morning3_yuna_gate_5": {
        "character": "assets/images/characters/yuna_normal.png",
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
    // --- 유나 cold (15 미만) ---
    "morning3_yuna_gate_cold_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning3_yuna_gate_cold_2"
    },
    "morning3_yuna_gate_cold_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "setFlags": ["morning3_companion_yuna"],
        "next": "morning3_classroom_1"
    },

    // === 다인 호감도 최고 루트 — A-4 호감도 3단계 분기 ===
    "morning3_dain_gate_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "affinityChar": "Dain",
        "affinityBranches": [
            { "minAffinity": 35, "next": "morning3_dain_gate_warm_1" },
            { "minAffinity": 15, "next": "morning3_dain_gate_2" },
            { "minAffinity": -100, "next": "morning3_dain_gate_cold_1" }
        ]
    },
    // --- 다인 warm (35+) ---
    "morning3_dain_gate_warm_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning3_dain_gate_warm_2"
    },
    "morning3_dain_gate_warm_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning3_dain_gate_warm_3"
    },
    "morning3_dain_gate_warm_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_shy.png",
        "setFlags": ["morning3_companion_dain"],
        "next": "morning3_classroom_1"
    },
    // --- 다인 normal (15~34) ---
    "morning3_dain_gate_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_dain_gate_3"
    },
    "morning3_dain_gate_3": {
        "character": "assets/images/characters/dain_normal.png",
        "background": "assets/images/background/school.png",
        "next": "morning3_dain_gate_4"
    },
    "morning3_dain_gate_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_dain_gate_5"
    },
    "morning3_dain_gate_5": {
        "character": "assets/images/characters/dain_normal.png",
        "background": "assets/images/background/school.png",
        "setFlags": ["morning3_companion_dain"],
        "next": "morning3_classroom_1"
    },
    // --- 다인 cold (15 미만) ---
    "morning3_dain_gate_cold_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_dain_gate_cold_2"
    },
    "morning3_dain_gate_cold_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "setFlags": ["morning3_companion_dain"],
        "next": "morning3_classroom_1"
    },

    // === 교실 도착 ===
    "morning3_classroom_1": {
        "character": null,
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
        "next": "morning3_react_yuna_1b"
    },
    "morning3_react_yuna_1b": {
        "background": "assets/images/background/room_school.png",
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
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "morning3_date_intro_b"
    },
    "morning3_date_intro_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
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
                "setFlags": ["accepted_seoyeon_date", "route_seoyeon"],
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
        "next": "morning3_date_seo_accept_b"
    },
    "morning3_date_seo_accept_b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "morning3_date_dain_1"
    },
    "morning3_date_seo_decline": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_date_seo_decline_b"
    },
    "morning3_date_seo_decline_b": {
        "background": "assets/images/background/room_school.png",
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
        "character": "assets/images/characters/dain_normal.png",
        "background": "assets/images/background/room_school.png",
        "next": "morning3_date_dain_3"
    },
    "morning3_date_dain_3": {
        "character": "assets/images/characters/dain_normal.png",
        "background": "assets/images/background/room_school.png",
        "next": "morning3_date_dain_choice"
    },
    "morning3_date_dain_choice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            {
                "next": "morning3_date_dain_accept",
                "setFlags": ["accepted_dain_date", "route_dain"],
                "stats": {
                    "Dain": {
                        "affinity": 7
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
        "character": null,
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
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "morning3_date_dain_decline_inner_2"
    },
    "morning3_date_dain_decline_inner_2": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "morning3_date_yuna_1"
    },

    // === 유나 데이트 제안 (쪽지) ===
    "morning3_date_yuna_1": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/room_school.png",
        "next": "morning3_date_yuna_2"
    },
    "morning3_date_yuna_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/room_school.png",
        "next": "morning3_date_yuna_choice"
    },
    "morning3_date_yuna_choice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "morning3_date_yuna_accept",
                "setFlags": ["accepted_yuna_date", "route_yuna"],
                "stats": { "Yuna": { "affinity": 7 } }
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
        "background": "assets/images/background/room_school.png",
        "character": null,
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
        "background": "assets/images/background/room_school.png",
        "character": null,
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
        "character": "assets/images/characters/yuna_shy.png",
        "next": "morning3_end"
    },
    "morning3_set_multiple": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "setFlags": ["day3_has_multiple_dates"],
        "next": "morning3_end"
    },


    // =========================================================================
    // HIDDEN - Day 3 담임 빈 교실 원고 발견
    // =========================================================================
    "hidden_homeroom_d3_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_2"
    },
    "hidden_homeroom_d3_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_3"
    },
    "hidden_homeroom_d3_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d3_4"
    },
    "hidden_homeroom_d3_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d3_choice"
    },
    "hidden_homeroom_d3_choice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "hidden_homeroom_d3_reveal_1", "stats": { "Teacher": { "affinity": 12 } } },
            { "next": "hidden_homeroom_d3_hide_1", "stats": { "Teacher": { "affinity": 3 } } }
        ]
    },
    "hidden_homeroom_d3_reveal_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_2"
    },
    "hidden_homeroom_d3_reveal_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_3"
    },
    "hidden_homeroom_d3_reveal_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_4"
    },
    "hidden_homeroom_d3_reveal_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_choice"
    },
    "hidden_homeroom_d3_reveal_choice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            {
                "next": "hidden_homeroom_d3_reveal_choice_a",
                "stats": { "Teacher": { "affinity": 9 } }
            },
            {
                "next": "hidden_homeroom_d3_reveal_choice_b",
                "stats": { "Teacher": { "affinity": 3 } }
            }
        ]
    },
    "hidden_homeroom_d3_reveal_choice_a": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d3_reveal_5"
    },
    "hidden_homeroom_d3_reveal_choice_b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_5"
    },
    "hidden_homeroom_d3_reveal_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_6"
    },
    "hidden_homeroom_d3_reveal_6": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "setFlag": "discovered_manuscript",
        "next": "hidden_homeroom_d3_end"
    },
    "hidden_homeroom_d3_hide_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_end"
    },
    "hidden_homeroom_d3_end": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "setFlags": ["homeroom_day3", "homeroom_route_unlocked"],
        "next": "hidden_homeroom_d3_freetalk"
    },
    "hidden_homeroom_d3_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_nurse_d3_check"
    },

    // =========================================================================
    // HIDDEN - Day 3 보건선생님 감정 전환점
    // =========================================================================
    "hidden_nurse_d3_check": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            { "condition": "nurse_day2", "next": "hidden_nurse_d3_1" },
            { "next": "morning3_date_seo_1" }
        ]
    },
    "hidden_nurse_d3_1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_2"
    },
    "hidden_nurse_d3_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_3"
    },
    "hidden_nurse_d3_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_4"
    },
    "hidden_nurse_d3_4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5"
    },
    "hidden_nurse_d3_5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_choice1"
    },
    "hidden_nurse_d3_choice1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "hidden_nurse_d3_choice1_a",
                "stats": { "Nurse": { "affinity": 7 } }
            },
            {
                "next": "hidden_nurse_d3_choice1_b",
                "stats": { "Nurse": { "affinity": 0 } }
            }
        ]
    },
    "hidden_nurse_d3_choice1_a": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_6"
    },
    "hidden_nurse_d3_choice1_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_6"
    },
    "hidden_nurse_d3_6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_7"
    },
    "hidden_nurse_d3_7": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_8"
    },
    "hidden_nurse_d3_8": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_choice2"
    },
    "hidden_nurse_d3_choice2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "hidden_nurse_d3_choice2_a",
                "stats": { "Nurse": { "affinity": 12 } }
            },
            {
                "next": "hidden_nurse_d3_choice2_b",
                "stats": { "Nurse": { "affinity": 5 } }
            }
        ]
    },
    "hidden_nurse_d3_choice2_a": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_9"
    },
    "hidden_nurse_d3_choice2_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_9"
    },
    "hidden_nurse_d3_9": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_10"
    },
    "hidden_nurse_d3_10": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_11"
    },
    "hidden_nurse_d3_11": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_shy.png",
        "setFlags": ["nurse_day3", "nurse_route_unlocked"],
        "next": "hidden_nurse_d3_freetalk"
    },
    "hidden_nurse_d3_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "morning3_date_seo_1"
    },
    // === 종료 ===
    "morning3_end": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "lunch3_start"
    }
});
