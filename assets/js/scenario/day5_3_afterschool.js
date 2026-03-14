/**
 * ============================================================================
 * CUPID - day5_3_afterschool
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

Object.assign(SCENARIO[5], {

    // ========== START: 행사 끝나감 ==========
    "after5_start": {
        "background": "assets/images/background/school_hallway.png",
        "bgm": "sunset1.mp3",
        "character": null,
        "sunset": true,
        "next": "after5_farewell_seo_1"
    },

    // ========== 서연 미선택 시 작별 (복도) ==========
    "after5_farewell_seo_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "sunset": true,
        "excludeCondition": "route_seoyeon",
        "next": "after5_farewell_seo_2"
    },
    "after5_farewell_seo_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "excludeCondition": "route_seoyeon",
        "next": "after5_farewell_seo_3"
    },
    "after5_farewell_seo_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "excludeCondition": "route_seoyeon",
        "next": "after5_farewell_seo_4"
    },
    "after5_farewell_seo_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "sunset": true,
        "excludeCondition": "route_seoyeon",
        "next": "after5_farewell_seo_5"
    },
    "after5_farewell_seo_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "excludeCondition": "route_seoyeon",
        "next": "after5_farewell_seo_6"
    },
    "after5_farewell_seo_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "sunset": true,
        "excludeCondition": "route_seoyeon",
        "next": "after5_farewell_seo_7"
    },
    "after5_farewell_seo_7": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "sunset": true,
        "excludeCondition": "route_seoyeon",
        "next": "after5_farewell_yuna_1"
    },

    // ========== 유나 미선택 시 작별 (도서관 앞) ==========
    "after5_farewell_yuna_1": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "excludeCondition": "route_yuna",
        "next": "after5_farewell_yuna_2"
    },
    "after5_farewell_yuna_2": {
        "background": "assets/images/background/library_old.png",
        "character": null,
        "sunset": true,
        "excludeCondition": "route_yuna",
        "next": "after5_farewell_yuna_3"
    },
    "after5_farewell_yuna_3": {
        "background": "assets/images/background/library_old.png",
        "character": null,
        "sunset": true,
        "excludeCondition": "route_yuna",
        "next": "after5_farewell_yuna_4"
    },
    "after5_farewell_yuna_4": {
        "background": "assets/images/background/library_old.png",
        "character": null,
        "sunset": true,
        "excludeCondition": "route_yuna",
        "next": "after5_farewell_yuna_5"
    },
    "after5_farewell_yuna_5": {
        "background": "assets/images/background/library_old.png",
        "character": null,
        "sunset": true,
        "excludeCondition": "route_yuna",
        "next": "after5_farewell_dain_1"
    },

    // ========== 다인 미선택 시 작별 (체육관 앞) ==========
    "after5_farewell_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "excludeCondition": "route_dain",
        "next": "after5_farewell_dain_2"
    },
    "after5_farewell_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "sunset": true,
        "excludeCondition": "route_dain",
        "next": "after5_farewell_dain_3"
    },
    "after5_farewell_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "excludeCondition": "route_dain",
        "next": "after5_farewell_dain_4"
    },
    "after5_farewell_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "excludeCondition": "route_dain",
        "next": "after5_farewell_dain_5"
    },
    "after5_farewell_dain_5": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "sunset": true,
        "excludeCondition": "route_dain",
        "next": "after5_sunset_1"
    },

    // ========== 엔딩 분기 (석양) ==========
    "after5_sunset_1": {
        "background": "assets/images/background/school_back.png",
        "bgm": "confession.mp3",
        "character": null,
        "sunset": true,
        "next": "after5_end"
    },
    "after5_end": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "sunset": true,
        "next": "ending_start"
    }
});
