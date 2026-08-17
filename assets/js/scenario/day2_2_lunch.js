/**
 * ============================================================================
 * CUPID - day2_2_lunch
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[2]) SCENARIO[2] = {};

(() => {
    const scenes = {
    "lunch2_start": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "bgm": "daily.mp3",
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
        "next": "lunch2_seo_2b_check"
    },
    "lunch2_seo_2b_check": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            { "condition": "chose_dain_lunch", "next": "lunch2_seo_2b_dain" },
            { "condition": "chose_yuna_lunch", "next": "lunch2_seo_2b_yuna" },
            { "next": "lunch2_seo_2b" }
        ]
    },
    "lunch2_seo_2b": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {"Seoyeon":{"affinity":6}},
        "next": "lunch2_seo_3"
    },
    "lunch2_seo_2b_dain": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_3b_dain"
    },
    "lunch2_seo_3b_dain": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_4b_dain"
    },
    "lunch2_seo_4b_dain": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_5b_dain"
    },
    "lunch2_seo_5b_dain": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_6b_dain"
    },
    "lunch2_seo_6b_dain": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "lunch2_seo_7"
    },
    "lunch2_seo_2b_yuna": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_3b_yuna"
    },
    "lunch2_seo_3b_yuna": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_4b_yuna"
    },
    "lunch2_seo_4b_yuna": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_5b_yuna"
    },
    "lunch2_seo_5b_yuna": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_6b_yuna"
    },
    "lunch2_seo_6b_yuna": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "lunch2_seo_7"
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
        "stats": {"Seoyeon":{"affinity":6}},
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
        "next": "lunch2_seo_13b_b"
    },
    "lunch2_seo_13b_b": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_14"
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
            { "next": "lunch2_seo_c1_1", "stats": {"Seoyeon":{"affinity":4}} },
            { "next": "lunch2_seo_c2_1", "stats": {"Seoyeon":{"affinity":2}} },
            { "next": "lunch2_seo_trap_1", "stats": {"Seoyeon":{"affinity":-2}} }
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
        "next": "lunch2_seo_c1_2_b"
    },
    "lunch2_seo_c1_2_b": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_seo_c1_3"
    },
    "lunch2_seo_c1_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_seo_c1_3_b"
    },
    "lunch2_seo_c1_3_b": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_c1_4"
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
    "lunch2_seo_trap_1": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_seo_end_c2"
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
    "lunch2_dain_1_check": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "branches": [
            { "condition": "chose_seoyeon_lunch", "next": "lunch2_dain_1b_seo" },
            { "condition": "chose_dain_lunch", "next": "lunch2_dain_1" },
            { "condition": "chose_yuna_lunch", "next": "lunch2_dain_1b_yuna" },
            { "next": "lunch2_dain_1b" }
        ]
    },
    "lunch2_dain_1b": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "bgm": "daily2.mp3",
        "next": "lunch2_dain_2"
    },
    "lunch2_dain_1b_seo": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "bgm": "daily2.mp3",
        "next": "lunch2_dain_2b_seo"
    },
    "lunch2_dain_2b_seo": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "stats": {"Dain":{"affinity":6}},
        "next": "lunch2_dain_3b_seo"
    },
    "lunch2_dain_3b_seo": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_4b_seo"
    },
    "lunch2_dain_4b_seo": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch2_dain_5b"
    },
    "lunch2_dain_1b_yuna": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "bgm": "daily2.mp3",
        "next": "lunch2_dain_2b_yuna"
    },
    "lunch2_dain_2b_yuna": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "stats": {"Dain":{"affinity":6}},
        "next": "lunch2_dain_3b_yuna"
    },
    "lunch2_dain_3b_yuna": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_4b_yuna"
    },
    "lunch2_dain_4b_yuna": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch2_dain_5b"
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
        "stats": {"Dain":{"affinity":6}},
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
    "lunch2_dain_4": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_5"
    },
    "lunch2_dain_5": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_6"
    },
    "lunch2_dain_3b": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_4b"
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
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch2_dain_10"
    },
    "lunch2_dain_10": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_pout.png",
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
        "next": "lunch2_dain_13_b"
    },
    "lunch2_dain_13_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch2_dain_choice"
    },
    "lunch2_dain_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            { "next": "lunch2_dain_c1_1", "stats": {"Dain":{"affinity":-3}} },
            { "next": "lunch2_dain_c2_1", "stats": {"Dain":{"affinity":0}} },
            { "next": "lunch2_dain_c3_1", "stats": {"Dain":{"affinity":4}} }
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
        "next": "lunch2_dain_end_b"
    },
    "lunch2_dain_end_b": {
        "background": "assets/images/background/playground.png",
        "character": null,
        "next": "lunch2_dain_end_c"
    },
    "lunch2_dain_end_c": {
        "background": "assets/images/background/playground.png",
        "character": null,
        "branches": [
            { "condition": "nurse_day1", "next": "lunch2_dain_end_d" },
            { "next": "lunch2_dain_end_ins4_first" }
        ]
    },
    "lunch2_dain_end_d": {
        "background": "assets/images/background/nurse_room.png",
        "character": null,
        "next": "lunch2_dain_end_e"
    },
    "lunch2_dain_end_e": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_f"
    },
    "lunch2_dain_end_ins4_first": {
        "background": "assets/images/background/nurse_room.png",
        "character": null,
        "next": "lunch2_dain_end_ins5_first"
    },
    "lunch2_dain_end_ins5_first": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_f"
    },
    "lunch2_dain_end_f": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "branches": [
            { "condition": "nurse_day1", "next": "lunch2_dain_end_g" },
            { "next": "lunch2_dain_end_ins7_first" }
        ]
    },
    "lunch2_dain_end_g": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_h"
    },
    "lunch2_dain_end_h": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_i"
    },
    "lunch2_dain_end_ins7_first": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_ins8_first"
    },
    "lunch2_dain_end_ins8_first": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_i"
    },
    "lunch2_dain_end_i": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_j"
    },
    "lunch2_dain_end_j": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_k"
    },
    "lunch2_dain_end_k": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_l"
    },
    "lunch2_dain_end_l": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "branches": [
            { "condition": "nurse_day1", "next": "lunch2_dain_end_nurse_short1" },
            { "next": "lunch2_dain_end_m" }
        ]
    },
    "lunch2_dain_end_m": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_n"
    },
    "lunch2_dain_end_n": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_o"
    },
    "lunch2_dain_end_o": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_p"
    },
    "lunch2_dain_end_p": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_q"
    },
    "lunch2_dain_end_q": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_r"
    },
    "lunch2_dain_end_r": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_s"
    },
    "lunch2_dain_end_s": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_t"
    },
    "lunch2_dain_end_t": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_u"
    },
    "lunch2_dain_end_u": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_v"
    },
    "lunch2_dain_end_v": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_w"
    },
    "lunch2_dain_end_w": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_x"
    },
    "lunch2_dain_end_x": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_y"
    },
    "lunch2_dain_end_y": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_z"
    },
    "lunch2_dain_end_z": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_b2"
    },
    "lunch2_dain_end_b2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_c2"
    },
    "lunch2_dain_end_c2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_d2"
    },
    "lunch2_dain_end_d2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after2_start"
    },
    "lunch2_dain_end_nurse_short1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_nurse_short2"
    },
    "lunch2_dain_end_nurse_short2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "lunch2_dain_end_nurse_short3"
    },
    "lunch2_dain_end_nurse_short3": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after2_start"
    },
    "lunch2_yuna_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "bgm": "night1.mp3",
        "next": "lunch2_yuna_intro_check"
    },
    "lunch2_yuna_intro_check": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "branches": [
            { "condition": "chose_seoyeon_lunch", "next": "lunch2_yuna_3_seo" },
            { "condition": "chose_yuna_lunch", "next": "lunch2_yuna_3_yuna" },
            { "next": "lunch2_yuna_3" }
        ]
    },
    "lunch2_yuna_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {"Yuna":{"affinity":6}},
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
    "lunch2_yuna_3_seo": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {"Yuna":{"affinity":6}},
        "next": "lunch2_yuna_4_seo"
    },
    "lunch2_yuna_4_seo": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_5_seo"
    },
    "lunch2_yuna_5_seo": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_6_seo"
    },
    "lunch2_yuna_6_seo": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_7_seo"
    },
    "lunch2_yuna_7_seo": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_8_seo"
    },
    "lunch2_yuna_8_seo": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_9"
    },
    "lunch2_yuna_3_yuna": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {"Yuna":{"affinity":6}},
        "next": "lunch2_yuna_4_yuna"
    },
    "lunch2_yuna_4_yuna": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_5_yuna"
    },
    "lunch2_yuna_5_yuna": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_6_yuna"
    },
    "lunch2_yuna_6_yuna": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_7_yuna"
    },
    "lunch2_yuna_7_yuna": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_8_yuna"
    },
    "lunch2_yuna_8_yuna": {
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
        "next": "lunch2_yuna_17_b"
    },
    "lunch2_yuna_17_b": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_choice"
    },
    "lunch2_yuna_choice": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            { "next": "lunch2_yuna_c1_1", "stats": {"Yuna":{"affinity":-3}} },
            { "next": "lunch2_yuna_c2_1", "stats": {"Yuna":{"affinity":4}} },
            { "next": "lunch2_yuna_trap_compare", "stats": {"Yuna":{"affinity":-4}} },
            { "next": "lunch2_yuna_trap_exclusive", "stats": {"Yuna":{"affinity":-5}} }
        ]
    },
    "lunch2_yuna_trap_compare": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "lunch2_yuna_c2_1"
    },
    "lunch2_yuna_trap_exclusive": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "lunch2_yuna_c2_1"
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
        "next": "lunch2_yuna_c1_9"
    },
    "lunch2_yuna_c1_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch2_yuna_c1_9_b"
    },
    "lunch2_yuna_c1_9_b": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_angry.png",
        "next": "lunch2_yuna_c1_10"
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
    }
    };
    for (const scene of Object.values(scenes)) {
        if (scene && typeof scene === 'object') {
            Object.defineProperty(scene, "__sourceFile", {
                value: "day2_2_lunch",
                enumerable: false
            });
        }
    }
    Object.assign(SCENARIO[2], scenes);
})();
