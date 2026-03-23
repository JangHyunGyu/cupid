/**
 * ============================================================================
 * CUPID - day3_2_lunch
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[3]) SCENARIO[3] = {};

Object.assign(SCENARIO[3], {
    "lunch3_start": {
        "background": "assets/images/background/room_school.png",
        "bgm": "daily.mp3",
        "character": null,
        "next": "lunch3_start_2"
    },
    "lunch3_start_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "lunch3_meal_1"
    },
    "lunch3_meal_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch3_meal_2"
    },
    "lunch3_meal_2": {
        "character": "assets/images/characters/dain_laugh.png",
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_meal_3"
    },
    "lunch3_meal_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch3_meal_4"
    },
    "lunch3_meal_4": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_meal_5"
    },
    "lunch3_meal_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch3_meal_6"
    },
    "lunch3_meal_6": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_meal_7"
    },
    "lunch3_meal_7": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_meal_8"
    },
    "lunch3_meal_8": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "next": "lunch3_meal_9"
    },
    "lunch3_meal_9": {
        "character": "assets/images/characters/yuna_bored.png",
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_meal_10"
    },
    "lunch3_meal_10": {
        "character": "assets/images/characters/yuna_bored.png",
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_meal_11"
    },
    "lunch3_meal_11": {
        "character": "assets/images/characters/yuna_bored.png",
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_choice"
    },
    "lunch3_choice": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "choices": [
            { "next": "lunch3_give_seo_1" },
            { "next": "lunch3_give_dain_1" },
            { "next": "lunch3_give_yuna_1" },
            { "next": "lunch3_share_1" }
        ]
    },

    "lunch3_give_seo_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": { "Seoyeon": { "affinity": 5 } },
        "setFlags": ["lunch3_gave_seoyeon"],
        "next": "lunch3_seo_skin_check"
    },
    // --- Day 3 스킨십: 서연 밥풀 (호감도 40+) ---
    "lunch3_seo_skin_check": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            { "minAffinity": 40, "next": "lunch3_seo_skin_1" },
            { "minAffinity": 0, "next": "lunch3_give_seo_2" }
        ]
    },
    "lunch3_seo_skin_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "lunch3_seo_skin_2"
    },
    "lunch3_seo_skin_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "lunch3_seo_skin_3"
    },
    "lunch3_seo_skin_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "setFlags": ["day3_skinship_seoyeon"],
        "next": "lunch3_give_seo_2"
    },
    "lunch3_give_seo_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_pout.png",
        "stats": { "Dain": { "affinity": -3 } },
        "next": "lunch3_seo_witness_1"
    },
    // --- B-4: 다인이 목격하고 돌아감 → 주인공 대응 선택지 ---
    "lunch3_seo_witness_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "lunch3_seo_witness_choice"
    },
    "lunch3_seo_witness_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_sad.png",
        "choices": [
            {
                "next": "lunch3_seo_chase_dain_1",
                "stats": { "Seoyeon": { "affinity": -3 }, "Dain": { "affinity": 2 } }
            },
            {
                "next": "lunch3_seo_focus_1",
                "stats": { "Dain": { "affinity": -5 } }
            }
        ]
    },
    "lunch3_seo_chase_dain_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch3_seo_chase_dain_2"
    },
    "lunch3_seo_chase_dain_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "lunch3_give_seo_3"
    },
    "lunch3_seo_focus_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch3_seo_focus_2"
    },
    "lunch3_seo_focus_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch3_give_seo_3"
    },
    "lunch3_give_seo_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_sad.png",
        "stats": { "Yuna": { "affinity": -3 } },
        "branches": [
            {
                "next": "lunch3_expose_1",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "lunch3_end"
            }
        ]
    },

    "lunch3_give_dain_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "stats": { "Dain": { "affinity": 5 } },
        "setFlags": ["lunch3_gave_dain"],
        "next": "lunch3_dain_skin_check"
    },
    // --- Day 3 스킨십: 다인 안김 (호감도 40+) ---
    "lunch3_dain_skin_check": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "affinityChar": "Dain",
        "affinityBranches": [
            { "minAffinity": 40, "next": "lunch3_dain_skin_1" },
            { "minAffinity": 0, "next": "lunch3_give_dain_2" }
        ]
    },
    "lunch3_dain_skin_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "lunch3_dain_skin_2"
    },
    "lunch3_dain_skin_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "lunch3_dain_skin_3"
    },
    "lunch3_dain_skin_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_shy.png",
        "setFlags": ["day3_skinship_dain"],
        "next": "lunch3_give_dain_2"
    },
    "lunch3_give_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "stats": { "Seoyeon": { "affinity": -3 } },
        "next": "lunch3_dain_witness_1"
    },
    // --- B-4: 유나가 체육관 안을 보고 지나감 ---
    "lunch3_dain_witness_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "lunch3_dain_witness_2"
    },
    "lunch3_dain_witness_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "lunch3_give_dain_3"
    },
    "lunch3_give_dain_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_sad.png",
        "stats": { "Yuna": { "affinity": -3 } },
        "branches": [
            {
                "next": "lunch3_expose_1",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "lunch3_end"
            }
        ]
    },

    "lunch3_give_yuna_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "stats": { "Yuna": { "affinity": 5 } },
        "setFlags": ["lunch3_gave_yuna"],
        "next": "lunch3_yuna_skin_check"
    },
    // --- Day 3 스킨십: 유나 손잡기 (호감도 40+) ---
    "lunch3_yuna_skin_check": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "affinityChar": "Yuna",
        "affinityBranches": [
            { "minAffinity": 40, "next": "lunch3_yuna_skin_1" },
            { "minAffinity": 0, "next": "lunch3_give_yuna_2" }
        ]
    },
    "lunch3_yuna_skin_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "lunch3_yuna_skin_2"
    },
    "lunch3_yuna_skin_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "lunch3_yuna_skin_3"
    },
    "lunch3_yuna_skin_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "setFlags": ["day3_skinship_yuna"],
        "next": "lunch3_give_yuna_2"
    },
    "lunch3_give_yuna_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "stats": { "Seoyeon": { "affinity": -3 } },
        "next": "lunch3_yuna_witness_1"
    },
    // --- B-4: 서연이 도서관에서 도시락 냄새를 알게 됨 ---
    "lunch3_yuna_witness_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch3_yuna_witness_2"
    },
    "lunch3_yuna_witness_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch3_give_yuna_3"
    },
    "lunch3_give_yuna_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_pout.png",
        "stats": { "Dain": { "affinity": -3 } },
        "branches": [
            {
                "next": "lunch3_expose_1",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "lunch3_end"
            }
        ]
    },

    "lunch3_share_1": {
        "character": "assets/images/characters/yuna_bored.png",
        "background": "assets/images/background/room_school.png",
        "branches": [
            {
                "next": "lunch3_expose_1",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "lunch3_end"
            }
        ]
    },

    "lunch3_expose_1": {
        "character": "assets/images/characters/dain_laugh.png",
        "background": "assets/images/background/room_school.png",
        "setFlag": "day3_caught_multiple_dates",
        "next": "lunch3_expose_2"
    },
    "lunch3_expose_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch3_expose_3"
    },
    "lunch3_expose_3": {
        "character": "assets/images/characters/dain_laugh.png",
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_expose_4"
    },
    "lunch3_expose_4": {
        "character": "assets/images/characters/dain_laugh.png",
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_expose_5"
    },
    "lunch3_expose_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "lunch3_expose_6"
    },
    "lunch3_expose_6": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "lunch3_expose_7"
    },
    "lunch3_expose_7": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "lunch3_expose_8"
    },
    "lunch3_expose_8": {
        "character": "assets/images/characters/dain_pout.png",
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_expose_9"
    },
    "lunch3_expose_9": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch3_expose_10"
    },
    "lunch3_expose_10": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_expose_11"
    },
    "lunch3_expose_11": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "lunch3_expose_12"
    },
    "lunch3_expose_12": {
        "character": null,
        "background": "assets/images/background/room_school.png",
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
        "next": "lunch3_expose_13"
    },
    "lunch3_expose_13": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_expose_14"
    },
    "lunch3_expose_14": {
        "character": "assets/images/characters/minsu_smirk.png",
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_expose_15"
    },
    "lunch3_expose_15": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_expose_choice"
    },
    "lunch3_expose_choice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "choices": [
            {
                "next": "lunch3_expose_honest_1",
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
                }
            },
            {
                "next": "lunch3_expose_excuse_1",
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
                "next": "lunch3_expose_run_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": -10
                    },
                    "Yuna": {
                        "affinity": -10
                    },
                    "Dain": {
                        "affinity": -10
                    }
                }
            }
        ]
    },

    "lunch3_expose_honest_1": {
        "character": "assets/images/characters/seyoun_angry.png",
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_expose_honest_2"
    },
    "lunch3_expose_honest_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "lunch3_expose_honest_3"
    },
    "lunch3_expose_honest_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "lunch3_expose_honest_4"
    },
    "lunch3_expose_honest_4": {
        "character": "assets/images/characters/seyoun_sad.png",
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_expose_honest_5"
    },
    "lunch3_expose_honest_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "lunch3_expose_honest_6"
    },
    "lunch3_expose_honest_6": {
        "character": "assets/images/characters/seyoun_angry.png",
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_expose_honest_7"
    },
    "lunch3_expose_honest_7": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_sad.png",
        "setFlag": "day3_dain_no_exclamation",
        "next": "lunch3_end"
    },

    "lunch3_expose_excuse_1": {
        "character": "assets/images/characters/seyoun_angry.png",
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_expose_excuse_2"
    },
    "lunch3_expose_excuse_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "lunch3_expose_excuse_3"
    },
    "lunch3_expose_excuse_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "lunch3_expose_excuse_4"
    },
    "lunch3_expose_excuse_4": {
        "character": "assets/images/characters/dain_sad.png",
        "background": "assets/images/background/room_school.png",
        "setFlag": "day3_dain_no_exclamation",
        "next": "lunch3_end"
    },

    "lunch3_expose_run_1": {
        "character": "assets/images/characters/seyoun_angry.png",
        "background": "assets/images/background/room_school.png",
        "setFlag": "day3_lunch_escaped",
        "next": "lunch3_expose_run_2"
    },
    "lunch3_expose_run_2": {
        "character": "assets/images/characters/seyoun_angry.png",
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_end"
    },

    "lunch3_end": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "after3_start"
    }
});
