/**
 * ============================================================================
 * CUPID - day5_3_afterschool
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

Object.assign(SCENARIO[5], {
    "after5_start": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "bgm": "sunset1.mp3",
        "branches": [
            { "condition": "homeroom_day5", "next": "after5_hidden_farewell_1" },
            { "condition": "nurse_day5", "next": "after5_hidden_farewell_1" },
            { "condition": "route_seoyeon", "next": "after5_farewell_yuna_check" },
            { "next": "after5_farewell_seo_1" }
        ]
    },
    "after5_hidden_farewell_1": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "after5_hidden_farewell_2"
    },
    "after5_hidden_farewell_2": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "after5_hidden_farewell_3"
    },
    "after5_hidden_farewell_3": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "after5_hidden_farewell_3b"
    },
    "after5_hidden_farewell_3b": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_sunset_1"
    },
    "after5_farewell_seo_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_farewell_seo_2"
    },
    "after5_farewell_seo_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "excludeCondition": "route_seoyeon",
        "next": "after5_farewell_seo_3"
    },
    "after5_farewell_seo_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "excludeCondition": "route_seoyeon",
        "next": "after5_farewell_seo_4"
    },
    "after5_farewell_seo_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "excludeCondition": "route_seoyeon",
        "next": "after5_farewell_seo_5"
    },
    "after5_farewell_seo_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_farewell_seo_6"
    },
    "after5_farewell_seo_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "excludeCondition": "route_seoyeon",
        "next": "after5_farewell_seo_6_ins"
    },
    "after5_farewell_seo_7": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_farewell_yuna_check"
    },
    "after5_farewell_yuna_check": {
        "background": "assets/images/background/school_hallway.png",
        "branches": [
            { "condition": "route_yuna", "next": "after5_farewell_dain_check" },
            { "next": "after5_farewell_yuna_1" }
        ]
    },
    "after5_farewell_yuna_1": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_farewell_yuna_2"
    },
    "after5_farewell_yuna_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "excludeCondition": "route_yuna",
        "next": "after5_farewell_yuna_3"
    },
    "after5_farewell_yuna_3": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "excludeCondition": "route_yuna",
        "next": "after5_farewell_yuna_4"
    },
    "after5_farewell_yuna_4": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "excludeCondition": "route_yuna",
        "next": "after5_farewell_yuna_5"
    },
    "after5_farewell_yuna_5": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_farewell_yuna_5b"
    },
    "after5_farewell_yuna_5b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_farewell_dain_check"
    },
    "after5_farewell_dain_check": {
        "background": "assets/images/background/school_hallway.png",
        "branches": [
            { "condition": "route_dain", "next": "after5_sunset_1" },
            { "next": "after5_farewell_dain_1" }
        ]
    },
    "after5_farewell_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after5_farewell_dain_2"
    },
    "after5_farewell_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "excludeCondition": "route_dain",
        "next": "after5_farewell_dain_3"
    },
    "after5_farewell_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "excludeCondition": "route_dain",
        "next": "after5_farewell_dain_4"
    },
    "after5_farewell_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "excludeCondition": "route_dain",
        "next": "after5_farewell_dain_4_ins"
    },
    "after5_farewell_dain_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "excludeCondition": "route_dain",
        "next": "after5_farewell_dain_5b"
    },
    "after5_farewell_dain_5b": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after5_sunset_1"
    },
    "after5_sunset_1": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "bgm": "confession.mp3",
        "next": "after5_end"
    },
    "after5_end": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_ending_check"
    },
    "after5_ending_check": {
        "branches": [
            { "condition": "homeroom_day5", "next": "ending_start" },
            { "condition": "nurse_day5", "next": "ending_start" },
            { "condition": "day3_has_multiple_dates", "next": "after5_set_harem" },
            { "condition": "day3_has_multiple_dates", "next": "ending_start" },
            { "condition": "route_seoyeon", "next": "after5_last_chance_1" },
            { "condition": "route_dain", "next": "after5_last_chance_1" },
            { "condition": "route_yuna", "next": "after5_last_chance_1" },
            { "next": "ending_start" }
        ]
    },
    "after5_set_harem": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "setFlags": ["ending_harem"],
        "next": "ending_start"
    },
    "after5_last_chance_1": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_last_chance_2"
    },
    "after5_last_chance_2": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_last_chance_2_ins"
    },
    "after5_last_chance_choice": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "choices": [
            { "next": "after5_confess_yes", "setFlags": ["day5_confessed"] },
            { "next": "after5_confess_no" }
        ]
    },
    "after5_confess_yes": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_confess_yes_2"
    },
    "after5_confess_yes_2": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "branches": [
            { "condition": "route_seoyeon", "next": "after5_confess_react_seo" },
            { "condition": "route_dain", "next": "after5_confess_react_dain" },
            { "condition": "route_yuna", "next": "after5_confess_react_yuna" },
            { "next": "ending_start" }
        ]
    },
    "after5_confess_react_seo": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "ending_start"
    },
    "after5_confess_react_dain": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "ending_start"
    },
    "after5_confess_react_yuna": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after5_confess_react_yuna_call"
    },
    "after5_confess_react_yuna_call": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_confess_react_yuna_ins"
    },
    "after5_confess_no": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_confess_no_2"
    },
    "after5_confess_no_2": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_confess_no_2b"
    },
    "after5_confess_no_2b": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "day5_ending_alone"
    },
    "after5_farewell_seo_6_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_farewell_seo_6_ins2"
    },
    "after5_farewell_seo_6_ins2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_farewell_seo_7"
    },
    "after5_farewell_dain_4_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after5_farewell_dain_4_ins2"
    },
    "after5_farewell_dain_4_ins2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after5_farewell_dain_4_ins3"
    },
    "after5_farewell_dain_4_ins3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after5_farewell_dain_5"
    },
    "after5_last_chance_2_ins": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_last_chance_2_ins2"
    },
    "after5_last_chance_2_ins2": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_last_chance_2_ins3"
    },
    "after5_last_chance_2_ins3": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_last_chance_2_ins4"
    },
    "after5_last_chance_2_ins4": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_last_chance_2_ins5"
    },
    "after5_last_chance_2_ins5": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_last_chance_2_ins6"
    },
    "after5_last_chance_2_ins6": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_last_chance_2_ins7"
    },
    "after5_last_chance_2_ins7": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_last_chance_2_ins8"
    },
    "after5_last_chance_2_ins8": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_last_chance_2_ins9"
    },
    "after5_last_chance_2_ins9": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_last_chance_2_ins10"
    },
    "after5_last_chance_2_ins10": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_last_chance_2_ins11"
    },
    "after5_last_chance_2_ins11": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_last_chance_2_ins12"
    },
    "after5_last_chance_2_ins12": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_last_chance_2_ins13"
    },
    "after5_last_chance_2_ins13": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after5_last_chance_2_ins14"
    },
    "after5_last_chance_2_ins14": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after5_last_chance_2_ins15"
    },
    "after5_last_chance_2_ins15": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after5_last_chance_2_ins16"
    },
    "after5_last_chance_2_ins16": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after5_last_chance_2_ins17"
    },
    "after5_last_chance_2_ins17": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after5_last_chance_2_ins18"
    },
    "after5_last_chance_2_ins18": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after5_last_chance_2_ins19"
    },
    "after5_last_chance_2_ins19": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after5_last_chance_choice"
    },
    "after5_confess_react_yuna_ins": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after5_confess_react_yuna_ins2"
    },
    "after5_confess_react_yuna_ins2": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_confess_react_yuna_ins3"
    },
    "after5_confess_react_yuna_ins3": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_confess_react_yuna_ins4"
    },
    "after5_confess_react_yuna_ins4": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after5_confess_react_yuna_ins5"
    },
    "after5_confess_react_yuna_ins5": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "after5_confess_react_yuna_ins6"
    },
    "after5_confess_react_yuna_ins6": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_confess_react_yuna_ins7"
    },
    "after5_confess_react_yuna_ins7": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_confess_react_yuna_ins8"
    },
    "after5_confess_react_yuna_ins8": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "ending_start"
    }
});
