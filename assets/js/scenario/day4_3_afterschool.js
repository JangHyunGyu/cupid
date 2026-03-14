/**
 * ============================================================================
 * CUPID - day4_3_afterschool
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

Object.assign(SCENARIO[4], {

    // ========== ENTRY: Route to confession scene ==========
    "confess_seo_1": {
        "background": "assets/images/background/top_school.png",
        "bgm": "confession.mp3",
        "character": null,
        "sunset": true,
        "branches": [
            {
                "next": "confess_seo_2",
                "condition": "route_seoyeon"
            },
            {
                "next": "confess_yuna_1",
                "condition": "route_yuna"
            },
            {
                "next": "confess_dain_1",
                "condition": "route_dain"
            },
            {
                "next": "day4_night_start"
            }
        ]
    },

    // ========== SEOYEON CONFESSION (옥상) ==========
    "confess_seo_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "confess_seo_3"
    },
    "confess_seo_3": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "sunset": true,
        "next": "confess_seo_4"
    },
    "confess_seo_4": {
        "background": "assets/images/background/top_school.png",
        "sunset": true,
        "next": "confess_seo_5"
    },
    "confess_seo_5": {
        "background": "assets/images/background/top_school.png",
        "sunset": true,
        "next": "confess_seo_choice"
    },
    "confess_seo_choice": {
        "background": "assets/images/background/top_school.png",
        "sunset": true,
        "choices": [
            {
                "next": "confess_seo_yes_1",
                "setFlags": ["confessed_seoyeon"]
            },
            {
                "next": "confess_seo_no_1",
                "setFlags": ["postponed_seoyeon"]
            }
        ]
    },

    // --- Seoyeon: Confession proceeds ---
    "confess_seo_yes_1": {
        "background": "assets/images/background/top_school.png",
        "sunset": true,
        "next": "confess_seo_yes_2"
    },
    "confess_seo_yes_2": {
        "background": "assets/images/background/top_school.png",
        "sunset": true,
        "next": "confess_seo_yes_3"
    },
    "confess_seo_yes_3": {
        "background": "assets/images/background/top_school.png",
        "sunset": true,
        "next": "confess_seo_yes_4"
    },
    "confess_seo_yes_4": {
        "background": "assets/images/background/top_school.png",
        "sunset": true,
        "next": "confess_seo_yes_5"
    },
    "confess_seo_yes_5": {
        "background": "assets/images/background/top_school.png",
        "sunset": true,
        "next": "confess_seo_yes_6"
    },
    "confess_seo_yes_6": {
        "background": "assets/images/background/top_school.png",
        "sunset": true,
        "next": "confess_seo_yes_7"
    },
    "confess_seo_yes_7": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "sunset": true,
        "next": "confess_seo_yes_8"
    },
    "confess_seo_yes_8": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "sunset": true,
        "next": "confess_seo_yes_9"
    },
    "confess_seo_yes_9": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "confess_seo_yes_10"
    },
    "confess_seo_yes_10": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "confess_seo_yes_11"
    },
    "confess_seo_yes_11": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "sunset": true,
        "next": "confess_seo_yes_12"
    },
    "confess_seo_yes_12": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "sunset": true,
        "setFlag": "day4_confession_accepted",
        "next": "day4_night_start"
    },

    // --- Seoyeon: Confession postponed ---
    "confess_seo_no_1": {
        "background": "assets/images/background/top_school.png",
        "sunset": true,
        "next": "confess_seo_no_2"
    },
    "confess_seo_no_2": {
        "background": "assets/images/background/top_school.png",
        "sunset": true,
        "next": "confess_seo_no_3"
    },
    "confess_seo_no_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "confess_seo_no_4"
    },
    "confess_seo_no_4": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "setFlag": "day4_waited",
        "next": "day4_night_start"
    },

    // ========== YUNA CONFESSION (도서관 별관) ==========
    "confess_yuna_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "bgm": "confession.mp3",
        "character": null,
        "sunset": true,
        "next": "confess_yuna_2"
    },
    "confess_yuna_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "confess_yuna_3"
    },
    "confess_yuna_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "sunset": true,
        "next": "confess_yuna_4"
    },
    "confess_yuna_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "sunset": true,
        "next": "confess_yuna_5"
    },
    "confess_yuna_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "sunset": true,
        "next": "confess_yuna_choice"
    },
    "confess_yuna_choice": {
        "background": "assets/images/background/yuna_hideout.png",
        "sunset": true,
        "choices": [
            {
                "next": "confess_yuna_yes_1",
                "setFlags": ["confessed_yuna"]
            },
            {
                "next": "confess_yuna_no_1",
                "setFlags": ["postponed_yuna"]
            }
        ]
    },

    // --- Yuna: Confession proceeds ---
    "confess_yuna_yes_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "sunset": true,
        "next": "confess_yuna_yes_2"
    },
    "confess_yuna_yes_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "sunset": true,
        "next": "confess_yuna_yes_3"
    },
    "confess_yuna_yes_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "sunset": true,
        "next": "confess_yuna_yes_4"
    },
    "confess_yuna_yes_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "sunset": true,
        "next": "confess_yuna_yes_5"
    },
    "confess_yuna_yes_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "sunset": true,
        "next": "confess_yuna_yes_6"
    },
    "confess_yuna_yes_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "confess_yuna_yes_7"
    },
    "confess_yuna_yes_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "confess_yuna_yes_8"
    },
    "confess_yuna_yes_8": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "sunset": true,
        "next": "confess_yuna_yes_9"
    },
    "confess_yuna_yes_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "sunset": true,
        "setFlag": "day4_confession_accepted",
        "next": "day4_night_start"
    },

    // --- Yuna: Confession postponed ---
    "confess_yuna_no_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "sunset": true,
        "next": "confess_yuna_no_2"
    },
    "confess_yuna_no_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "sunset": true,
        "next": "confess_yuna_no_3"
    },
    "confess_yuna_no_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "confess_yuna_no_4"
    },
    "confess_yuna_no_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "sunset": true,
        "setFlag": "day4_waited",
        "next": "day4_night_start"
    },

    // ========== DAIN CONFESSION (체육관) ==========
    "confess_dain_1": {
        "background": "assets/images/background/gym.png",
        "bgm": "confession.mp3",
        "character": null,
        "sunset": true,
        "next": "confess_dain_2"
    },
    "confess_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "confess_dain_3"
    },
    "confess_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "sunset": true,
        "next": "confess_dain_4"
    },
    "confess_dain_4": {
        "background": "assets/images/background/gym.png",
        "sunset": true,
        "next": "confess_dain_5"
    },
    "confess_dain_5": {
        "background": "assets/images/background/gym.png",
        "sunset": true,
        "next": "confess_dain_choice"
    },
    "confess_dain_choice": {
        "background": "assets/images/background/gym.png",
        "sunset": true,
        "choices": [
            {
                "next": "confess_dain_yes_1",
                "setFlags": ["confessed_dain"]
            },
            {
                "next": "confess_dain_no_1",
                "setFlags": ["postponed_dain"]
            }
        ]
    },

    // --- Dain: Confession proceeds ---
    "confess_dain_yes_1": {
        "background": "assets/images/background/gym.png",
        "sunset": true,
        "next": "confess_dain_yes_2"
    },
    "confess_dain_yes_2": {
        "background": "assets/images/background/gym.png",
        "sunset": true,
        "next": "confess_dain_yes_3"
    },
    "confess_dain_yes_3": {
        "background": "assets/images/background/gym.png",
        "sunset": true,
        "next": "confess_dain_yes_4"
    },
    "confess_dain_yes_4": {
        "background": "assets/images/background/gym.png",
        "sunset": true,
        "next": "confess_dain_yes_5"
    },
    "confess_dain_yes_5": {
        "background": "assets/images/background/gym.png",
        "sunset": true,
        "next": "confess_dain_yes_6"
    },
    "confess_dain_yes_6": {
        "background": "assets/images/background/gym.png",
        "sunset": true,
        "next": "confess_dain_yes_7"
    },
    "confess_dain_yes_7": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "next": "confess_dain_yes_8"
    },
    "confess_dain_yes_8": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "sunset": true,
        "next": "confess_dain_yes_9"
    },
    "confess_dain_yes_9": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "confess_dain_yes_10"
    },
    "confess_dain_yes_10": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "setFlag": "day4_confession_accepted",
        "next": "day4_night_start"
    },

    // --- Dain: Confession postponed ---
    "confess_dain_no_1": {
        "background": "assets/images/background/gym.png",
        "sunset": true,
        "next": "confess_dain_no_2"
    },
    "confess_dain_no_2": {
        "background": "assets/images/background/gym.png",
        "sunset": true,
        "next": "confess_dain_no_3"
    },
    "confess_dain_no_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "confess_dain_no_4"
    },
    "confess_dain_no_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "sunset": true,
        "setFlag": "day4_waited",
        "next": "day4_night_start"
    }
});
