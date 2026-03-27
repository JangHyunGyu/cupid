/**
 * ============================================================================
 * CUPID - day5_2_lunch (추억의 장소 투어)
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

Object.assign(SCENARIO[5], {

    // ── 서연 루트 ──
    "tour_seo_1": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/school.png",
        "bgm": "sunset1.mp3",
        "next": "tour_seo_2"
    },
    "tour_seo_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_3"
    },
    "tour_seo_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_4"
    },
    "tour_seo_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "tour_seo_5"
    },
    "tour_seo_5": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_6"
    },
    "tour_seo_6": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "tour_seo_7"
    },
    "tour_seo_7": {
        "character": "assets/images/characters/seyoun_shy.png",
        "background": "assets/images/background/school.png",
        "next": "tour_seo_8"
    },
    "tour_seo_8": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_9"
    },
    "tour_seo_9": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_10"
    },
    "tour_seo_10": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_11"
    },
    "tour_seo_11": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_12"
    },
    "tour_seo_12": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_13"
    },
    "tour_seo_13": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_14"
    },
    "tour_seo_14": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "tour_seo_freetalk"
    },
    "tour_seo_end": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "after5_start"
    },

    // ── 유나 루트 ──
    "tour_yuna_1_check": {
        "character": null,
        "background": "assets/images/background/yuna_hideout.png",
        "bgm": "sunset1.mp3",
        "branches": [
            { "condition": "chose_yuna_lunch", "next": "tour_yuna_1" },
            { "next": "tour_yuna_1b" }
        ]
    },
    "tour_yuna_1": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/yuna_hideout.png",
        "next": "tour_yuna_2"
    },
    "tour_yuna_1b": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/yuna_hideout.png",
        "next": "tour_yuna_2"
    },
    "tour_yuna_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_3"
    },
    "tour_yuna_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_4"
    },
    "tour_yuna_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_5"
    },
    "tour_yuna_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_6"
    },
    "tour_yuna_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "tour_yuna_7"
    },
    "tour_yuna_7": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/yuna_hideout.png",
        "next": "tour_yuna_8"
    },
    "tour_yuna_8": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_9"
    },
    "tour_yuna_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_10"
    },
    "tour_yuna_10": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "tour_yuna_11"
    },
    "tour_yuna_11": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "stats": {
            "Yuna": {
                "affinity": 7
            }
        },
        "next": "tour_yuna_freetalk"
    },
    "tour_yuna_end": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "tour_yuna_end_2"
    },
    "tour_yuna_end_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after5_start"
    },

    // ── 다인 루트 ──
    "tour_dain_1_check": {
        "character": null,
        "background": "assets/images/background/gym.png",
        "bgm": "sunset1.mp3",
        "branches": [
            { "condition": "chose_dain_lunch", "next": "tour_dain_1" },
            { "next": "tour_dain_1b" }
        ]
    },
    "tour_dain_1": {
        "character": null,
        "background": "assets/images/background/gym.png",
        "next": "tour_dain_2"
    },
    "tour_dain_1b": {
        "character": null,
        "background": "assets/images/background/gym.png",
        "next": "tour_dain_2"
    },
    "tour_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "tour_dain_3"
    },
    "tour_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "tour_dain_4"
    },
    "tour_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "tour_dain_5"
    },
    "tour_dain_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "tour_dain_6"
    },
    "tour_dain_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "tour_dain_7"
    },
    "tour_dain_7": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "tour_dain_8"
    },
    "tour_dain_8": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "tour_dain_9"
    },
    "tour_dain_9": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "tour_dain_10"
    },
    "tour_dain_10": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "tour_dain_11"
    },
    "tour_dain_11": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "tour_dain_12"
    },
    "tour_dain_12": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "tour_dain_13"
    },
    "tour_dain_13": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "tour_dain_end"
    },
    "tour_dain_end": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "stats": {
            "Dain": {
                "affinity": 7
            }
        },
        "next": "tour_dain_freetalk"
    },
    "tour_dain_end_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after5_start"
    }
,
    "tour_seo_freetalk": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_end"
    }
,
    "tour_yuna_freetalk": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_end"
    }
,
    "tour_dain_freetalk": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "tour_dain_end_2"
    }
});
