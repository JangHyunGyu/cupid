/**
 * ============================================================================
 * CUPID - day2_2_lunch
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[2]) SCENARIO[2] = {};

Object.assign(SCENARIO[2], {
    "lunch2_start": {
        "background": "assets/images/background/school_hallway.png",
        "bgm": "daily.mp3",
        "character": null,
        "next": "lunch2_start_2"
    },
    "lunch2_start_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "lunch2_choice"
    },
    "lunch2_choice": {
        "background": "assets/images/background/school_hallway.png",
        "choices": [
            { "next": "lunch2_yuna_1" },
            { "next": "lunch2_seo_1" },
            { "next": "lunch2_dain_1" }
        ]
    },

    "lunch2_yuna_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "bgm": "night1.mp3",
        "next": "lunch2_yuna_2"
    },
    "lunch2_yuna_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_3"
    },
    "lunch2_yuna_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "stats": { "Yuna": { "affinity": 8 } },
        "next": "lunch2_yuna_4"
    },
    "lunch2_yuna_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_5"
    },
    "lunch2_yuna_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_6"
    },
    "lunch2_yuna_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_7"
    },
    "lunch2_yuna_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_8"
    },
    "lunch2_yuna_8": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_9"
    },
    "lunch2_yuna_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "lunch2_yuna_10"
    },
    "lunch2_yuna_10": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_11"
    },
    "lunch2_yuna_11": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_12"
    },
    "lunch2_yuna_12": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_13"
    },
    "lunch2_yuna_13": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_14"
    },
    "lunch2_yuna_14": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_15"
    },
    "lunch2_yuna_15": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_16"
    },
    "lunch2_yuna_16": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_17"
    },
    "lunch2_yuna_17": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_choice"
    },
    "lunch2_yuna_choice": {
        "background": "assets/images/background/yuna_hideout.png",
        "choices": [
            {
                "next": "lunch2_yuna_c1_1",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "lunch2_yuna_c2_1",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            }
        ]
    },
    "lunch2_yuna_c1_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c1_2"
    },
    "lunch2_yuna_c1_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_c1_3"
    },
    "lunch2_yuna_c1_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c1_4"
    },
    "lunch2_yuna_c1_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_c1_5"
    },
    "lunch2_yuna_c1_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_c1_6"
    },
    "lunch2_yuna_c1_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c1_7"
    },
    "lunch2_yuna_c1_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_c1_8"
    },
    "lunch2_yuna_c1_8": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_c1_9"
    },
    "lunch2_yuna_c1_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_c1_10"
    },
    "lunch2_yuna_c1_10": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c1_11"
    },
    "lunch2_yuna_c1_11": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_c1_12"
    },
    "lunch2_yuna_c1_12": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_c1_13"
    },
    "lunch2_yuna_c1_13": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_c1_14"
    },
    "lunch2_yuna_c1_14": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_end"
    },
    "lunch2_yuna_c2_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_c2_2"
    },
    "lunch2_yuna_c2_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_c2_3"
    },
    "lunch2_yuna_c2_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c2_4"
    },
    "lunch2_yuna_c2_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_c2_5"
    },
    "lunch2_yuna_c2_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_c2_6"
    },
    "lunch2_yuna_c2_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c2_7"
    },
    "lunch2_yuna_c2_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_c2_8"
    },
    "lunch2_yuna_c2_8": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c2_9"
    },
    "lunch2_yuna_c2_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "next": "lunch2_yuna_end"
    },
    "lunch2_yuna_end": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "next": "after2_start"
    },

    "lunch2_seo_1": {
        "background": "assets/images/background/top_school.png",
        "bgm": "sunset1.mp3",
        "next": "lunch2_seo_2"
    },
    "lunch2_seo_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": { "Seoyeon": { "affinity": 8 } },
        "next": "lunch2_seo_3"
    },
    "lunch2_seo_3": {
        "background": "assets/images/background/top_school.png",
        "next": "lunch2_seo_4"
    },
    "lunch2_seo_4": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "lunch2_seo_5"
    },
    "lunch2_seo_5": {
        "background": "assets/images/background/top_school.png",
        "next": "lunch2_seo_6"
    },
    "lunch2_seo_6": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_7"
    },
    "lunch2_seo_7": {
        "background": "assets/images/background/top_school.png",
        "next": "lunch2_seo_8"
    },
    "lunch2_seo_8": {
        "background": "assets/images/background/top_school.png",
        "next": "lunch2_seo_9"
    },
    "lunch2_seo_9": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_seo_10"
    },
    "lunch2_seo_10": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_11"
    },
    "lunch2_seo_11": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_seo_12"
    },
    "lunch2_seo_12": {
        "background": "assets/images/background/top_school.png",
        "next": "lunch2_seo_13"
    },
    "lunch2_seo_13": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_seo_14"
    },
    "lunch2_seo_14": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_15"
    },
    "lunch2_seo_15": {
        "background": "assets/images/background/top_school.png",
        "next": "lunch2_seo_16"
    },
    "lunch2_seo_16": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_17"
    },
    "lunch2_seo_17": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_seo_18"
    },
    "lunch2_seo_18": {
        "background": "assets/images/background/top_school.png",
        "next": "lunch2_seo_19"
    },
    "lunch2_seo_19": {
        "background": "assets/images/background/top_school.png",
        "next": "lunch2_seo_20"
    },
    "lunch2_seo_20": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_choice"
    },
    "lunch2_seo_choice": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "lunch2_seo_c1_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "lunch2_seo_c2_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "lunch2_seo_c1_1": {
        "background": "assets/images/background/top_school.png",
        "next": "lunch2_seo_c1_2"
    },
    "lunch2_seo_c1_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_c1_3"
    },
    "lunch2_seo_c1_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_seo_c1_4"
    },
    "lunch2_seo_c1_4": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "lunch2_seo_c1_5"
    },
    "lunch2_seo_c1_5": {
        "background": "assets/images/background/top_school.png",
        "next": "lunch2_seo_end"
    },
    "lunch2_seo_c2_1": {
        "background": "assets/images/background/top_school.png",
        "next": "lunch2_seo_c2_2"
    },
    "lunch2_seo_c2_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "lunch2_seo_c2_3"
    },
    "lunch2_seo_c2_3": {
        "background": "assets/images/background/top_school.png",
        "next": "lunch2_seo_end"
    },
    "lunch2_seo_end": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "next": "after2_start"
    },

    "lunch2_dain_1": {
        "background": "assets/images/background/store.png",
        "bgm": "daily2.mp3",
        "next": "lunch2_dain_2"
    },
    "lunch2_dain_2": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "stats": { "Dain": { "affinity": 8 } },
        "next": "lunch2_dain_3"
    },
    "lunch2_dain_3": {
        "background": "assets/images/background/store.png",
        "next": "lunch2_dain_4"
    },
    "lunch2_dain_4": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_5"
    },
    "lunch2_dain_5": {
        "background": "assets/images/background/store.png",
        "next": "lunch2_dain_6"
    },
    "lunch2_dain_6": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "lunch2_dain_7"
    },
    "lunch2_dain_7": {
        "background": "assets/images/background/store.png",
        "next": "lunch2_dain_8"
    },
    "lunch2_dain_8": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "lunch2_dain_9"
    },
    "lunch2_dain_9": {
        "background": "assets/images/background/store.png",
        "next": "lunch2_dain_10"
    },
    "lunch2_dain_10": {
        "background": "assets/images/background/store.png",
        "next": "lunch2_dain_11"
    },
    "lunch2_dain_11": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_12"
    },
    "lunch2_dain_12": {
        "background": "assets/images/background/store.png",
        "next": "lunch2_dain_13"
    },
    "lunch2_dain_13": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_choice"
    },
    "lunch2_dain_choice": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            {
                "next": "lunch2_dain_c1_1",
                "stats": {
                    "Dain": {
                        "affinity": -3
                    }
                }
            },
            {
                "next": "lunch2_dain_c2_1",
                "stats": {
                    "Dain": {
                        "affinity": 0
                    }
                }
            },
            {
                "next": "lunch2_dain_c3_1",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            }
        ]
    },
    "lunch2_dain_c1_1": {
        "background": "assets/images/background/store.png",
        "next": "lunch2_dain_end"
    },
    "lunch2_dain_c2_1": {
        "background": "assets/images/background/store.png",
        "next": "lunch2_dain_end"
    },
    "lunch2_dain_c3_1": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "lunch2_dain_c3_2"
    },
    "lunch2_dain_c3_2": {
        "background": "assets/images/background/store.png",
        "next": "lunch2_dain_end"
    },
    "lunch2_dain_end": {
        "background": "assets/images/background/store.png",
        "character": null,
        "next": "after2_start"
    }
});
