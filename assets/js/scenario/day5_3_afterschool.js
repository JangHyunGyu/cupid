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
        "branches": [
            { "condition": "homeroom_day5", "next": "after5_hidden_farewell_1" },
            { "condition": "nurse_day5", "next": "after5_hidden_farewell_1" },
            { "condition": "route_seoyeon", "next": "after5_farewell_yuna_check" },
            { "next": "after5_farewell_seo_1" }
        ]
    },

    // ========== 히든 루트 진입 시 전용 독백 ==========
    "after5_hidden_farewell_1": {
        "background": "assets/images/background/school.png",
        "character": null,
        "sunset": true,
        "next": "after5_hidden_farewell_2"
    },
    "after5_hidden_farewell_2": {
        "background": "assets/images/background/school.png",
        "character": null,
        "sunset": true,
        "next": "after5_hidden_farewell_3"
    },
    "after5_hidden_farewell_3": {
        "background": "assets/images/background/school.png",
        "character": null,
        "sunset": true,
        "next": "after5_sunset_1"
    },

    // ========== 서연 미선택 시 작별 (복도) ==========
    "after5_farewell_seo_1": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "sunset": true,
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
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "sunset": true,
        "excludeCondition": "route_seoyeon",
        "next": "after5_farewell_seo_5"
    },
    "after5_farewell_seo_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "after5_farewell_seo_6"
    },
    "after5_farewell_seo_6": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "sunset": true,
        "excludeCondition": "route_seoyeon",
        "next": "after5_farewell_seo_7"
    },
    "after5_farewell_seo_7": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "sunset": true,
        "next": "after5_farewell_yuna_check"
    },

    "after5_farewell_yuna_check": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "sunset": true,
        "branches": [
            { "condition": "route_yuna", "next": "after5_farewell_dain_check" },
            { "next": "after5_farewell_yuna_1" }
        ]
    },

    // ========== 유나 미선택 시 작별 (도서관 앞) ==========
    "after5_farewell_yuna_1": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "after5_farewell_yuna_2"
    },
    "after5_farewell_yuna_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/library_old.png",
        "sunset": true,
        "excludeCondition": "route_yuna",
        "next": "after5_farewell_yuna_3"
    },
    "after5_farewell_yuna_3": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/library_old.png",
        "sunset": true,
        "excludeCondition": "route_yuna",
        "next": "after5_farewell_yuna_4"
    },
    "after5_farewell_yuna_4": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/library_old.png",
        "sunset": true,
        "excludeCondition": "route_yuna",
        "next": "after5_farewell_yuna_5"
    },
    "after5_farewell_yuna_5": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/library_old.png",
        "sunset": true,
        "next": "after5_farewell_dain_check"
    },

    "after5_farewell_dain_check": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "sunset": true,
        "branches": [
            { "condition": "route_dain", "next": "after5_sunset_1" },
            { "next": "after5_farewell_dain_1" }
        ]
    },

    // ========== 다인 미선택 시 작별 (체육관 앞) ==========
    "after5_farewell_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "after5_farewell_dain_2"
    },
    "after5_farewell_dain_2": {
        "character": "assets/images/characters/dain_normal.png",
        "background": "assets/images/background/gym.png",
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
        "character": "assets/images/characters/dain_laugh.png",
        "background": "assets/images/background/gym.png",
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
        "next": "after5_ending_check"
    },

    // ========== 엔딩 플래그 설정 ==========
    "after5_ending_check": {
        "background": null,
        "character": null,
        "branches": [
            {
                "condition": "homeroom_day5",
                "next": "ending_start"
            },
            {
                "condition": "nurse_day5",
                "next": "ending_start"
            },
            {
                "condition": "day3_has_multiple_dates",
                "excludeCondition": "day3_caught_multiple_dates",
                "next": "after5_set_harem"
            },
            {
                "condition": "day3_has_multiple_dates",
                "next": "ending_start"
            },
            {
                "condition": "route_seoyeon",
                "excludeCondition": "day4_confession_accepted",
                "next": "after5_last_chance_1"
            },
            {
                "condition": "route_dain",
                "excludeCondition": "day4_confession_accepted",
                "next": "after5_last_chance_1"
            },
            {
                "condition": "route_yuna",
                "excludeCondition": "day4_confession_accepted",
                "next": "after5_last_chance_1"
            },
            {
                "next": "ending_start"
            }
        ]
    },
    "after5_set_harem": {
        "background": null,
        "character": null,
        "setFlag": "ending_harem",
        "next": "ending_start"
    },

    // ========== 마지막 고백 선택 (주인공 아크: "이번에는 고백하겠다") ==========
    "after5_last_chance_1": {
        "character": null,
        "background": "assets/images/background/school_back.png",
        "sunset": true,
        "next": "after5_last_chance_2"
    },
    "after5_last_chance_2": {
        "character": null,
        "background": "assets/images/background/school_back.png",
        "sunset": true,
        "next": "after5_last_chance_choice"
    },
    "after5_last_chance_choice": {
        "character": null,
        "background": "assets/images/background/school_back.png",
        "sunset": true,
        "choices": [
            {
                "next": "after5_confess_yes",
                "setFlags": ["day5_confessed"]
            },
            {
                "next": "after5_confess_no"
            }
        ]
    },
    "after5_confess_yes": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "sunset": true,
        "next": "after5_confess_yes_2"
    },
    "after5_confess_yes_2": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "sunset": true,
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
        "sunset": true,
        "next": "ending_start"
    },
    "after5_confess_react_dain": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "ending_start"
    },
    "after5_confess_react_yuna": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "ending_start"
    },
    "after5_confess_no": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "sunset": true,
        "next": "after5_confess_no_2"
    },
    "after5_confess_no_2": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day5_ending_alone"
    }
});
