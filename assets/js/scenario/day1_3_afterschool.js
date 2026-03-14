/**
 * ============================================================================
 * CUPID - day1_3_afterschool
 * ============================================================================
 */
if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[1]) SCENARIO[1] = {};

Object.assign(SCENARIO[1], {
    "after_start": {
        "background": "assets/images/background/school_hallway.png",
        "bgm": "daily.mp3",
        "character": null,
        "next": "after_start_2"
    },
    "after_start_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after_kakao_1"
    },
    "after_kakao_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after_kakao_2"
    },
    "after_kakao_2": {
        "background": "assets/images/background/school_hallway.png",
        "next": "after_kakao_3"
    },
    "after_kakao_3": {
        "background": "assets/images/background/school_hallway.png",
        "next": "after_kakao_4"
    },
    "after_kakao_4": {
        "background": "assets/images/background/school_hallway.png",
        "next": "after_kakao_5"
    },
    "after_kakao_5": {
        "background": "assets/images/background/school_hallway.png",
        "next": "after_kakao_end"
    },
    "after_kakao_end": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "branches": [
            { "condition": "met_dain", "next": "after_dain_skip" },
            { "next": "after_miss_dain_1" }
        ]
    },
    "after_dain_skip": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "branches": [
            { "condition": "met_yuna", "next": "after_yuna_skip" },
            { "next": "after_miss_yuna_1" }
        ]
    },
    "after_yuna_skip": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "branches": [
            { "condition": "ate_lunch_seoyeon", "next": "after_end" },
            { "next": "after_miss_seoyeon_1" }
        ]
    },
    "after_miss_dain_1": {
        "background": "assets/images/background/school_hallway.png",
        "excludeCondition": "met_dain",
        "next": "after_miss_dain_2"
    },
    "after_miss_dain_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "excludeCondition": "met_dain",
        "next": "after_miss_dain_3"
    },
    "after_miss_dain_3": {
        "background": "assets/images/background/school_hallway.png",
        "excludeCondition": "met_dain",
        "next": "after_miss_dain_4"
    },
    "after_miss_dain_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_laugh.png",
        "excludeCondition": "met_dain",
        "next": "after_miss_dain_5"
    },
    "after_miss_dain_5": {
        "background": "assets/images/background/school_hallway.png",
        "excludeCondition": "met_dain",
        "next": "after_miss_dain_6"
    },
    "after_miss_dain_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_laugh.png",
        "excludeCondition": "met_dain",
        "next": "after_miss_dain_7"
    },
    "after_miss_dain_7": {
        "background": "assets/images/background/school_hallway.png",
        "setFlag": "met_dain",
        "branches": [
            { "condition": "met_yuna", "next": "after_yuna_skip" },
            { "next": "after_miss_yuna_1" }
        ]
    },
    "after_miss_yuna_1": {
        "background": "assets/images/background/library_old.png",
        "excludeCondition": "met_yuna",
        "next": "after_miss_yuna_2"
    },
    "after_miss_yuna_2": {
        "background": "assets/images/background/library_old.png",
        "excludeCondition": "met_yuna",
        "next": "after_miss_yuna_3"
    },
    "after_miss_yuna_3": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "excludeCondition": "met_yuna",
        "next": "after_miss_yuna_4"
    },
    "after_miss_yuna_4": {
        "background": "assets/images/background/library_old.png",
        "setFlag": "met_yuna",
        "branches": [
            { "condition": "ate_lunch_seoyeon", "next": "after_end" },
            { "next": "after_miss_seoyeon_1" }
        ]
    },
    "after_miss_seoyeon_1": {
        "background": "assets/images/background/school_hallway.png",
        "excludeCondition": "ate_lunch_seoyeon",
        "next": "after_miss_seoyeon_2"
    },
    "after_miss_seoyeon_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "excludeCondition": "ate_lunch_seoyeon",
        "next": "after_miss_seoyeon_3"
    },
    "after_miss_seoyeon_3": {
        "background": "assets/images/background/school_hallway.png",
        "excludeCondition": "ate_lunch_seoyeon",
        "next": "after_miss_seoyeon_4"
    },
    "after_miss_seoyeon_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "excludeCondition": "ate_lunch_seoyeon",
        "next": "after_miss_seoyeon_5"
    },
    "after_miss_seoyeon_5": {
        "background": "assets/images/background/school_hallway.png",
        "excludeCondition": "ate_lunch_seoyeon",
        "next": "after_miss_seoyeon_6"
    },
    "after_miss_seoyeon_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "excludeCondition": "ate_lunch_seoyeon",
        "next": "after_miss_seoyeon_7"
    },
    "after_miss_seoyeon_7": {
        "background": "assets/images/background/school_hallway.png",
        "excludeCondition": "ate_lunch_seoyeon",
        "next": "after_miss_seoyeon_8"
    },
    "after_miss_seoyeon_8": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "excludeCondition": "ate_lunch_seoyeon",
        "next": "after_end"
    },
    "after_end": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "night_start"
    }
});
