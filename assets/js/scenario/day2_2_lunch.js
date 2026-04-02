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
        "character": null,
        "bgm": "daily.mp3",
        "next": "lunch2_start_2"
    },
    "lunch2_start_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "lunch2_choice"
    },
    "lunch2_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "choices": [
            { "next": "lunch2_yuna_1" },
            { "next": "lunch2_seo_1_check" },
            { "next": "lunch2_dain_1_check" }
        ]
    },
    "lunch2_seo_1_check": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "branches": [
            { "condition": "chose_seoyeon_lunch", "next": "lunch2_seo_1" },
            { "next": "lunch2_seo_1b" }
        ]
    },
    "lunch2_seo_1b": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "bgm": "sunset1.mp3",
        "next": "lunch2_seo_2b"
    },
    "lunch2_seo_2b": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {"Seoyeon":{"affinity":8}},
        "next": "lunch2_seo_3"
    },
    "lunch2_dain_1_check": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "branches": [
            { "condition": "chose_dain_lunch", "next": "lunch2_dain_1" },
            { "next": "lunch2_dain_1b" }
        ]
    },
    "lunch2_dain_1b": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "bgm": "daily2.mp3",
        "next": "lunch2_dain_2"
    },
    "lunch2_yuna_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "bgm": "night1.mp3",
        "next": "lunch2_yuna_2"
    },
    "lunch2_yuna_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_3"
    },
    "lunch2_yuna_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {"Yuna":{"affinity":8}},
        "next": "lunch2_yuna_4"
    },
    "lunch2_yuna_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_5"
    },
    "lunch2_yuna_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_6"
    },
    "lunch2_yuna_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_7"
    },
    "lunch2_yuna_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_8"
    },
    "lunch2_yuna_8": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
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
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_12"
    },
    "lunch2_yuna_12": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_13"
    },
    "lunch2_yuna_13": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_14"
    },
    "lunch2_yuna_14": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_15"
    },
    "lunch2_yuna_15": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_16"
    },
    "lunch2_yuna_16": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_17"
    },
    "lunch2_yuna_17": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_17_ins"
    },
    "lunch2_yuna_choice": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            { "next": "lunch2_yuna_c1_1", "stats": {"Yuna":{"affinity":3}} },
            { "next": "lunch2_yuna_c2_1", "stats": {"Yuna":{"affinity":5}} }
        ]
    },
    "lunch2_yuna_c1_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c1_2"
    },
    "lunch2_yuna_c1_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c1_3"
    },
    "lunch2_yuna_c1_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c1_4"
    },
    "lunch2_yuna_c1_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "lunch2_yuna_c1_5"
    },
    "lunch2_yuna_c1_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c1_6"
    },
    "lunch2_yuna_c1_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c1_7"
    },
    "lunch2_yuna_c1_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c1_8"
    },
    "lunch2_yuna_c1_8": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c1_9"
    },
    "lunch2_yuna_c1_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c1_9_ins"
    },
    "lunch2_yuna_c1_10": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c1_11"
    },
    "lunch2_yuna_c1_11": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c1_12"
    },
    "lunch2_yuna_c1_12": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c1_13"
    },
    "lunch2_yuna_c1_13": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c1_14"
    },
    "lunch2_yuna_c1_14": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_end"
    },
    "lunch2_yuna_c2_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c2_2"
    },
    "lunch2_yuna_c2_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c2_3"
    },
    "lunch2_yuna_c2_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c2_4"
    },
    "lunch2_yuna_c2_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c2_5"
    },
    "lunch2_yuna_c2_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c2_6"
    },
    "lunch2_yuna_c2_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c2_7"
    },
    "lunch2_yuna_c2_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c2_8"
    },
    "lunch2_yuna_c2_8": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c2_9"
    },
    "lunch2_yuna_c2_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_end"
    },
    "lunch2_yuna_end": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {"Seoyeon":{"affinity":-3},"Dain":{"affinity":-3}},
        "next": "after2_start"
    },
    "lunch2_seo_1": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "bgm": "sunset1.mp3",
        "next": "lunch2_seo_2"
    },
    "lunch2_seo_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {"Seoyeon":{"affinity":8}},
        "next": "lunch2_seo_3"
    },
    "lunch2_seo_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_4"
    },
    "lunch2_seo_4": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "lunch2_seo_5"
    },
    "lunch2_seo_5": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "lunch2_seo_6"
    },
    "lunch2_seo_6": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_7"
    },
    "lunch2_seo_7": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_8"
    },
    "lunch2_seo_8": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
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
        "character": "assets/images/characters/dain_normal.png",
        "branches": [
            { "condition": "chose_dain_lunch", "next": "lunch2_seo_13" },
            { "next": "lunch2_seo_13b" }
        ]
    },
    "lunch2_seo_13": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_seo_14"
    },
    "lunch2_seo_13b": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_seo_13b_ins"
    },
    "lunch2_seo_14": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_15"
    },
    "lunch2_seo_15": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
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
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_seo_19"
    },
    "lunch2_seo_19": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
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
            { "next": "lunch2_seo_c1_1", "stats": {"Seoyeon":{"affinity":5}} },
            { "next": "lunch2_seo_c2_1", "stats": {"Seoyeon":{"affinity":3}} }
        ]
    },
    "lunch2_seo_c1_1": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_c1_2"
    },
    "lunch2_seo_c1_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_c1_2_ins"
    },
    "lunch2_seo_c1_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_seo_c1_3_ins"
    },
    "lunch2_seo_c1_4": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "lunch2_seo_c1_5"
    },
    "lunch2_seo_c1_5": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "lunch2_seo_end_c1"
    },
    "lunch2_seo_end_c1": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {"Dain":{"affinity":-3},"Yuna":{"affinity":-3}},
        "next": "after2_start"
    },
    "lunch2_seo_c2_1": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_c2_2"
    },
    "lunch2_seo_c2_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "lunch2_seo_c2_3"
    },
    "lunch2_seo_c2_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "lunch2_seo_end_c2"
    },
    "lunch2_seo_end_c2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "stats": {"Dain":{"affinity":-3},"Yuna":{"affinity":-3}},
        "next": "after2_start"
    },
    "lunch2_dain_1": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "bgm": "daily2.mp3",
        "next": "lunch2_dain_2"
    },
    "lunch2_dain_2": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "stats": {"Dain":{"affinity":8}},
        "branches": [
            { "condition": "chose_dain_lunch", "next": "lunch2_dain_3" },
            { "next": "lunch2_dain_3b" }
        ]
    },
    "lunch2_dain_3": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_4"
    },
    "lunch2_dain_3b": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_4b"
    },
    "lunch2_dain_4": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_5"
    },
    "lunch2_dain_4b": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_5b"
    },
    "lunch2_dain_5b": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "lunch2_dain_6"
    },
    "lunch2_dain_5": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_6"
    },
    "lunch2_dain_6": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "lunch2_dain_7"
    },
    "lunch2_dain_7": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "lunch2_dain_8"
    },
    "lunch2_dain_8": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "lunch2_dain_9"
    },
    "lunch2_dain_9": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "lunch2_dain_10"
    },
    "lunch2_dain_10": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_11"
    },
    "lunch2_dain_11": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_12"
    },
    "lunch2_dain_12": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_13"
    },
    "lunch2_dain_13": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_13_ins"
    },
    "lunch2_dain_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            { "next": "lunch2_dain_c1_1", "stats": {"Dain":{"affinity":-3}} },
            { "next": "lunch2_dain_c2_1", "stats": {"Dain":{"affinity":0}} },
            { "next": "lunch2_dain_c3_1", "stats": {"Dain":{"affinity":5}} }
        ]
    },
    "lunch2_dain_c1_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "lunch2_dain_end"
    },
    "lunch2_dain_c2_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_end"
    },
    "lunch2_dain_c3_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "lunch2_dain_c3_2"
    },
    "lunch2_dain_c3_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "lunch2_dain_end"
    },
    "lunch2_dain_end": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_pout.png",
        "stats": {"Seoyeon":{"affinity":-3},"Yuna":{"affinity":-3}},
        "next": "lunch2_dain_end_ins"
    },
    "lunch2_yuna_17_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_choice"
    },
    "lunch2_yuna_c1_9_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_angry.png",
        "next": "lunch2_yuna_c1_10"
    },
    "lunch2_seo_13b_ins": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_14"
    },
    "lunch2_seo_c1_2_ins": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_seo_c1_3"
    },
    "lunch2_seo_c1_3_ins": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_c1_4"
    },
    "lunch2_dain_13_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_choice"
    },
    "lunch2_dain_end_ins": {
        "background": "assets/images/background/playground.png",
        "character": null,
        "next": "lunch2_dain_end_ins2"
    },
    "lunch2_dain_end_ins2": {
        "background": "assets/images/background/playground.png",
        "character": null,
        "next": "lunch2_dain_end_ins3"
    },
    "lunch2_dain_end_ins3": {
        "background": "assets/images/background/playground.png",
        "character": null,
        "branches": [
            { "condition": "nurse_day1", "next": "lunch2_dain_end_ins4" },
            { "next": "lunch2_dain_end_ins4_first" }
        ]
    },
    "lunch2_dain_end_ins4": {
        "background": "assets/images/background/nurse_room.png",
        "character": null,
        "next": "lunch2_dain_end_ins5"
    },
    "lunch2_dain_end_ins4_first": {
        "background": "assets/images/background/nurse_room.png",
        "character": null,
        "next": "lunch2_dain_end_ins5_first"
    },
    "lunch2_dain_end_ins5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins6"
    },
    "lunch2_dain_end_ins5_first": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins6"
    },
    "lunch2_dain_end_ins6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "branches": [
            { "condition": "nurse_day1", "next": "lunch2_dain_end_ins7" },
            { "next": "lunch2_dain_end_ins7_first" }
        ]
    },
    "lunch2_dain_end_ins7": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins8"
    },
    "lunch2_dain_end_ins7_first": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins8_first"
    },
    "lunch2_dain_end_ins8": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins9"
    },
    "lunch2_dain_end_ins8_first": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins9"
    },
    "lunch2_dain_end_ins9": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins10"
    },
    "lunch2_dain_end_ins10": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins11"
    },
    "lunch2_dain_end_ins11": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins12"
    },
    "lunch2_dain_end_ins12": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins13"
    },
    "lunch2_dain_end_ins13": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins14"
    },
    "lunch2_dain_end_ins14": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins15"
    },
    "lunch2_dain_end_ins15": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins16"
    },
    "lunch2_dain_end_ins16": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins17"
    },
    "lunch2_dain_end_ins17": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins18"
    },
    "lunch2_dain_end_ins18": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins19"
    },
    "lunch2_dain_end_ins19": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins20"
    },
    "lunch2_dain_end_ins20": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins21"
    },
    "lunch2_dain_end_ins21": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins22"
    },
    "lunch2_dain_end_ins22": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins23"
    },
    "lunch2_dain_end_ins23": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins24"
    },
    "lunch2_dain_end_ins24": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins25"
    },
    "lunch2_dain_end_ins25": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins26"
    },
    "lunch2_dain_end_ins26": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins27"
    },
    "lunch2_dain_end_ins27": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins28"
    },
    "lunch2_dain_end_ins28": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins29"
    },
    "lunch2_dain_end_ins29": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins30"
    },
    "lunch2_dain_end_ins30": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins31"
    },
    "lunch2_dain_end_ins31": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after2_start"
    }
});
