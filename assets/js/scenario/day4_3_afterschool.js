/**
 * ============================================================================
 * CUPID - day4_3_afterschool
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

(() => {
    const scenes = {
    "confess_seo_1": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "bgm": "confession.mp3",
        "branches": [
            { "condition": "route_seoyeon", "next": "confess_seo_2" },
            { "condition": "route_yuna", "next": "confess_yuna_1" },
            { "condition": "route_dain", "next": "confess_dain_1" },
            { "next": "day4_night_start" }
        ]
    },
    "confess_seo_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            { "condition": "chose_seoyeon_lunch", "next": "confess_seo_3" },
            { "next": "confess_seo_3b" }
        ]
    },
    "confess_seo_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_4"
    },
    "confess_seo_3b": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_4"
    },
    "confess_seo_4": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_4_ins"
    },
    "confess_seo_4_ins": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_5"
    },
    "confess_seo_5": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_choice"
    },
    "confess_seo_choice": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            { "next": "confess_seo_yes_1", "setFlags": ["confessed_seoyeon"] },
            { "next": "confess_seo_no_1", "setFlags": ["postponed_seoyeon"] }
        ]
    },
    "confess_seo_yes_1": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_yes_2"
    },
    "confess_seo_yes_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_yes_3"
    },
    "confess_seo_yes_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_yes_4"
    },
    "confess_seo_yes_4": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_yes_5"
    },
    "confess_seo_yes_5": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_yes_6"
    },
    "confess_seo_yes_6": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_yes_7"
    },
    "confess_seo_yes_7": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "confess_seo_yes_8"
    },
    "confess_seo_yes_8": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "confess_seo_yes_9"
    },
    "confess_seo_yes_9": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "confess_seo_yes_10"
    },
    "confess_seo_yes_10": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "confess_seo_yes_11"
    },
    "confess_seo_yes_11": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "confess_seo_yes_11_ins"
    },
    "confess_seo_yes_11_ins": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "confess_seo_yes_12"
    },
    "confess_seo_yes_12": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "setFlags": ["day4_confession_accepted","isDating_Seoyeon"],
        "next": "day4_night_start"
    },
    "confess_seo_no_1": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_no_2"
    },
    "confess_seo_no_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_no_3"
    },
    "confess_seo_no_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_no_4"
    },
    "confess_seo_no_4": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "setFlags": ["day4_waited"],
        "next": "confess_seo_no_4_ins"
    },
    "confess_seo_no_4_ins": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "day4_night_start"
    },
    "confess_yuna_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "bgm": "confession.mp3",
        "next": "confess_yuna_2"
    },
    "confess_yuna_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "branches": [
            { "condition": "chose_yuna_lunch", "next": "confess_yuna_3" },
            { "next": "confess_yuna_3b" }
        ]
    },
    "confess_yuna_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_4"
    },
    "confess_yuna_3b": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_4"
    },
    "confess_yuna_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_5"
    },
    "confess_yuna_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_choice"
    },
    "confess_yuna_choice": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            { "next": "confess_yuna_yes_1", "setFlags": ["confessed_yuna"] },
            { "next": "confess_yuna_no_1", "setFlags": ["postponed_yuna"] }
        ]
    },
    "confess_yuna_yes_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_yes_2"
    },
    "confess_yuna_yes_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_yes_3"
    },
    "confess_yuna_yes_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_yes_3_ins"
    },
    "confess_yuna_yes_3_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_yes_4"
    },
    "confess_yuna_yes_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_yes_5"
    },
    "confess_yuna_yes_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_yes_6"
    },
    "confess_yuna_yes_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "confess_yuna_yes_6_ins"
    },
    "confess_yuna_yes_6_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "confess_yuna_yes_7"
    },
    "confess_yuna_yes_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "confess_yuna_yes_8"
    },
    "confess_yuna_yes_8": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "confess_yuna_yes_8_ins"
    },
    "confess_yuna_yes_8_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "confess_yuna_yes_8_ins2"
    },
    "confess_yuna_yes_8_ins2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_yes_9"
    },
    "confess_yuna_yes_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "setFlags": ["day4_confession_accepted","isDating_Yuna"],
        "next": "confess_yuna_yes_9_ins"
    },
    "confess_yuna_yes_9_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "day4_night_start"
    },
    "confess_yuna_no_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_no_2"
    },
    "confess_yuna_no_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_no_3"
    },
    "confess_yuna_no_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_no_4"
    },
    "confess_yuna_no_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "setFlags": ["day4_waited"],
        "next": "confess_yuna_no_4_ins"
    },
    "confess_yuna_no_4_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "day4_night_start"
    },
    "confess_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "bgm": "confession.mp3",
        "next": "confess_dain_2"
    },
    "confess_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "branches": [
            { "condition": "chose_dain_lunch", "next": "confess_dain_3" },
            { "next": "confess_dain_3b" }
        ]
    },
    "confess_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_4"
    },
    "confess_dain_3b": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_4"
    },
    "confess_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_5"
    },
    "confess_dain_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_choice"
    },
    "confess_dain_choice": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            { "next": "confess_dain_yes_1", "setFlags": ["confessed_dain"] },
            { "next": "confess_dain_no_1", "setFlags": ["postponed_dain"] }
        ]
    },
    "confess_dain_yes_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_yes_2"
    },
    "confess_dain_yes_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_yes_3"
    },
    "confess_dain_yes_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_yes_3_ins"
    },
    "confess_dain_yes_3_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_yes_4"
    },
    "confess_dain_yes_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_yes_5"
    },
    "confess_dain_yes_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_yes_6"
    },
    "confess_dain_yes_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_yes_7"
    },
    "confess_dain_yes_7": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "confess_dain_yes_8"
    },
    "confess_dain_yes_8": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "confess_dain_yes_8_ins"
    },
    "confess_dain_yes_8_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "confess_dain_yes_9"
    },
    "confess_dain_yes_9": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "confess_dain_yes_9_ins"
    },
    "confess_dain_yes_9_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "confess_dain_yes_10"
    },
    "confess_dain_yes_10": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "setFlags": ["day4_confession_accepted","isDating_Dain"],
        "next": "confess_dain_yes_10_ins"
    },
    "confess_dain_yes_10_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day4_night_start"
    },
    "confess_dain_no_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_no_2"
    },
    "confess_dain_no_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_no_3"
    },
    "confess_dain_no_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_no_4"
    },
    "confess_dain_no_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "setFlags": ["day4_waited"],
        "next": "confess_dain_no_4_ins"
    },
    "confess_dain_no_4_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "day4_night_start"
    }
    };
    for (const scene of Object.values(scenes)) {
        if (scene && typeof scene === 'object') {
            Object.defineProperty(scene, "__sourceFile", {
                value: "day4_3_afterschool",
                enumerable: false
            });
        }
    }
    Object.assign(SCENARIO[4], scenes);
})();
