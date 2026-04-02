/**
 * ============================================================================
 * CUPID - day1_2_lunch
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[1]) SCENARIO[1] = {};

Object.assign(SCENARIO[1], {
    "lunch_start": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "bgm": "daily.mp3",
        "next": "lunch_start_2"
    },
    "lunch_start_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "lunch_start_3"
    },
    "lunch_start_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "lunch_start_4"
    },
    "lunch_start_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "lunch_start_4_ins"
    },
    "lunch_start_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_start_6"
    },
    "lunch_start_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "lunch_start_7"
    },
    "lunch_start_7": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "lunch_start_7b"
    },
    "lunch_start_7b": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "lunch_choice"
    },
    "lunch_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "choices": [
            { "next": "lunch_seo_1", "setFlags": ["chose_seoyeon_lunch","ate_lunch_seoyeon"] },
            { "next": "lunch_dain_1", "setFlags": ["chose_dain_lunch"] },
            { "next": "lunch_yuna_1", "setFlags": ["chose_yuna_lunch"] }
        ]
    },
    "lunch_seo_1": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "bgm": "sunset1.mp3",
        "affinityChar": "Seoyeon",
        "affinityBranches": [{"minAffinity":5,"next":"lunch_seo_1_aff_high"},{"minAffinity":-100,"next":"lunch_seo_1_aff_default"}],
        "next": "lunch_seo_1_aff_default"
    },
    "lunch_seo_1_aff_high": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "lunch_seo_2"
    },
    "lunch_seo_1_aff_default": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_2"
    },
    "lunch_seo_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_3"
    },
    "lunch_seo_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {"Seoyeon":{"affinity":10}},
        "next": "lunch_seo_4"
    },
    "lunch_seo_4": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_5"
    },
    "lunch_seo_5": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_6"
    },
    "lunch_seo_6": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_6_ins"
    },
    "lunch_seo_8": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "lunch_seo_9"
    },
    "lunch_seo_9": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_10"
    },
    "lunch_seo_10": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_11"
    },
    "lunch_seo_11": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_12"
    },
    "lunch_seo_12": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_13"
    },
    "lunch_seo_13": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_14"
    },
    "lunch_seo_14": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_15"
    },
    "lunch_seo_15": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_16"
    },
    "lunch_seo_16": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_17"
    },
    "lunch_seo_17": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_18"
    },
    "lunch_seo_18": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_19"
    },
    "lunch_seo_19": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_20"
    },
    "lunch_seo_20": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_21"
    },
    "lunch_seo_21": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "lunch_seo_22"
    },
    "lunch_seo_22": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "lunch_seo_23"
    },
    "lunch_seo_23": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_choice"
    },
    "lunch_seo_choice": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            { "next": "lunch_seo_c1_1", "stats": {"Seoyeon":{"affinity":5}} },
            { "next": "lunch_seo_c2_1", "stats": {"Seoyeon":{"affinity":3}} }
        ]
    },
    "lunch_seo_c1_1": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_c1_2"
    },
    "lunch_seo_c1_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_c1_2_ins"
    },
    "lunch_seo_c1_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "lunch_seo_c1_3_ins"
    },
    "lunch_seo_c2_1": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_c2_2"
    },
    "lunch_seo_c2_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_c2_3"
    },
    "lunch_seo_c2_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_after"
    },
    "lunch_seo_after": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_after_2"
    },
    "lunch_seo_after_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_after_3"
    },
    "lunch_seo_after_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_after_4"
    },
    "lunch_seo_after_4": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_after_5"
    },
    "lunch_seo_after_5": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_after_6"
    },
    "lunch_seo_after_6": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_after_7"
    },
    "lunch_seo_after_7": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_freetalk"
    },
    "lunch_dain_1": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "bgm": "daily2.mp3",
        "affinityChar": "Dain",
        "affinityBranches": [{"minAffinity":1,"next":"lunch_dain_1_aff_high"},{"minAffinity":-100,"next":"lunch_dain_1_aff_default"}],
        "next": "lunch_dain_1_aff_default"
    },
    "lunch_dain_1_aff_high": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch_dain_2"
    },
    "lunch_dain_1_aff_default": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_2"
    },
    "lunch_dain_2": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "stats": {"Dain":{"affinity":12}},
        "next": "lunch_dain_3"
    },
    "lunch_dain_3": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_4"
    },
    "lunch_dain_4": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_5"
    },
    "lunch_dain_5": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_6"
    },
    "lunch_dain_6": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_7"
    },
    "lunch_dain_7": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_8"
    },
    "lunch_dain_8": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_9"
    },
    "lunch_dain_9": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_10"
    },
    "lunch_dain_10": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_11"
    },
    "lunch_dain_11": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_12"
    },
    "lunch_dain_12": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "lunch_dain_12_ins"
    },
    "lunch_dain_14": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "lunch_dain_15"
    },
    "lunch_dain_15": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_16"
    },
    "lunch_dain_16": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_17"
    },
    "lunch_dain_17": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_18"
    },
    "lunch_dain_18": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch_dain_19"
    },
    "lunch_dain_19": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch_dain_20"
    },
    "lunch_dain_20": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch_dain_21"
    },
    "lunch_dain_21": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_22"
    },
    "lunch_dain_22": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_23"
    },
    "lunch_dain_23": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch_dain_choice"
    },
    "lunch_dain_choice": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "choices": [
            { "next": "lunch_dain_c1_1", "stats": {"Dain":{"affinity":7}} },
            { "next": "lunch_dain_c2_1", "stats": {"Dain":{"affinity":3}} }
        ]
    },
    "lunch_dain_c1_1": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch_dain_c1_2"
    },
    "lunch_dain_c1_2": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch_dain_after"
    },
    "lunch_dain_c2_1": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch_dain_after"
    },
    "lunch_dain_after": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch_dain_after_2"
    },
    "lunch_dain_after_2": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_after_3"
    },
    "lunch_dain_after_3": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_after_4"
    },
    "lunch_dain_after_4": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_after_5"
    },
    "lunch_dain_after_5": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_after_6"
    },
    "lunch_dain_after_6": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch_dain_freetalk"
    },
    "lunch_yuna_1": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "bgm": "night1.mp3",
        "affinityChar": "Yuna",
        "affinityBranches": [{"minAffinity":1,"next":"lunch_yuna_1_aff_high"},{"minAffinity":-100,"next":"lunch_yuna_1_aff_default"}],
        "next": "lunch_yuna_1_aff_default"
    },
    "lunch_yuna_1_aff_high": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_2"
    },
    "lunch_yuna_1_aff_default": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_2"
    },
    "lunch_yuna_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_3"
    },
    "lunch_yuna_3": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_4"
    },
    "lunch_yuna_4": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {"Yuna":{"affinity":12}},
        "next": "lunch_yuna_5"
    },
    "lunch_yuna_5": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_5_ins"
    },
    "lunch_yuna_7": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_8"
    },
    "lunch_yuna_8": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_9"
    },
    "lunch_yuna_9": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_10"
    },
    "lunch_yuna_10": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_10_ins"
    },
    "lunch_yuna_11": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_12"
    },
    "lunch_yuna_12": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_13"
    },
    "lunch_yuna_13": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_14"
    },
    "lunch_yuna_14": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_15"
    },
    "lunch_yuna_15": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_16"
    },
    "lunch_yuna_16": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_17"
    },
    "lunch_yuna_17": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_18"
    },
    "lunch_yuna_18": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_19"
    },
    "lunch_yuna_19": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_20"
    },
    "lunch_yuna_20": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_21"
    },
    "lunch_yuna_21": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_22"
    },
    "lunch_yuna_22": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_23"
    },
    "lunch_yuna_23": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_24"
    },
    "lunch_yuna_24": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_25"
    },
    "lunch_yuna_25": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_26"
    },
    "lunch_yuna_26": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_choice"
    },
    "lunch_yuna_choice": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            { "next": "lunch_yuna_c1_1", "stats": {"Yuna":{"affinity":5}} },
            { "next": "lunch_yuna_c2_1", "stats": {"Yuna":{"affinity":3}} }
        ]
    },
    "lunch_yuna_c1_1": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_c1_2"
    },
    "lunch_yuna_c1_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "lunch_yuna_freetalk"
    },
    "lunch_yuna_c2_1": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_c2_2"
    },
    "lunch_yuna_c2_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_freetalk"
    },
    "lunch_end": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after_start"
    },
    "lunch_seo_freetalk": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "type": "free_talk",
        "next": "lunch_end"
    },
    "lunch_dain_freetalk": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "type": "free_talk",
        "next": "lunch_end"
    },
    "lunch_yuna_freetalk": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "type": "free_talk",
        "next": "lunch_end"
    },
    "lunch_start_4_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "lunch_start_5"
    },
    "lunch_seo_6_ins": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "lunch_seo_8"
    },
    "lunch_seo_c1_2_ins": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch_seo_c1_3"
    },
    "lunch_seo_c1_3_ins": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "lunch_seo_after"
    },
    "lunch_dain_12_ins": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "lunch_dain_14"
    },
    "lunch_yuna_5_ins": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_7"
    },
    "lunch_yuna_10_ins": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch_yuna_11"
    }
});
