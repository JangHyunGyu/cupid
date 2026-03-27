/**
 * ============================================================================
 * CUPID - day4_2_lunch
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

Object.assign(SCENARIO[4], {

    // ═══════════════════════════════════════════════════════════════
    // 서연 데이트 — 공원 산책 (condition: route_seoyeon)
    // ═══════════════════════════════════════════════════════════════

    "date_seo_1": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "bgm": "date.mp3",
        "condition": "route_seoyeon",
        "next": "date_seo_2"
    },
    "date_seo_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "date_seo_compliment_choice"
    },
    "date_seo_compliment_choice": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "affinityBranches": [
                    { "minAffinity": 50, "next": "date_seo_pretty_high" },
                    { "minAffinity": -100, "next": "date_seo_pretty_low" }
                ],
                "affinityChar": "Seoyeon"
            },
            {
                "next": "date_seo_bright",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            }
        ]
    },
    "date_seo_pretty_high": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 10
            }
        },
        "next": "date_seo_pretty_high_2"
    },
    "date_seo_pretty_high_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "date_seo_pretty_high_3"
    },
    "date_seo_pretty_high_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "date_seo_pretty_high_4"
    },
    "date_seo_pretty_high_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "date_seo_walk"
    },
    "date_seo_pretty_low": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "date_seo_walk"
    },
    "date_seo_bright": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "date_seo_walk"
    },
    "date_seo_walk": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "date_seo_duck"
    },
    "date_seo_duck": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "date_seo_duck_2"
    },
    "date_seo_duck_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "date_seo_duck_3"
    },
    "date_seo_duck_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "date_seo_duck_4"
    },
    "date_seo_duck_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "date_seo_flower"
    },
    "date_seo_flower": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "date_seo_flower_2"
    },
    "date_seo_flower_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "date_seo_succulent"
    },
    "date_seo_succulent": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "date_seo_succulent_2"
    },
    "date_seo_succulent_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "date_seo_succulent_3"
    },
    "date_seo_succulent_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "date_seo_freetalk"
    },
    "date_seo_end": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "date_seo_end_b"
    },
    "date_seo_end_b": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "pre_confess_minsu"
    },

    // ═══════════════════════════════════════════════════════════════
    // 유나 데이트 — 서점과 이어폰 (condition: route_yuna)
    // ═══════════════════════════════════════════════════════════════

    "date_yuna_1": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_normal.png",
        "bgm": "night1.mp3",
        "condition": "route_yuna",
        "next": "date_yuna_2"
    },
    "date_yuna_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "date_yuna_compliment_choice"
    },
    "date_yuna_compliment_choice": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "affinityBranches": [
                    { "minAffinity": 50, "next": "date_yuna_pretty_high" },
                    { "minAffinity": -100, "next": "date_yuna_pretty_low" }
                ],
                "affinityChar": "Yuna"
            },
            {
                "next": "date_yuna_bright",
                "stats": {
                    "Yuna": {
                        "affinity": 7
                    }
                }
            }
        ]
    },
    "date_yuna_pretty_high": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_shy.png",
        "stats": {
            "Yuna": {
                "affinity": 10
            }
        },
        "next": "date_yuna_pretty_high_2"
    },
    "date_yuna_pretty_high_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "date_yuna_pretty_high_3"
    },
    "date_yuna_pretty_high_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "date_yuna_pretty_high_4"
    },
    "date_yuna_pretty_high_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "date_yuna_pretty_high_5"
    },
    "date_yuna_pretty_high_5": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "date_yuna_bookstore"
    },
    "date_yuna_pretty_low": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_shy.png",
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "date_yuna_bookstore"
    },
    "date_yuna_bright": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "date_yuna_bookstore"
    },
    "date_yuna_bookstore": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "date_yuna_bookstore_2"
    },
    "date_yuna_bookstore_2": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "date_yuna_bookstore_3"
    },
    "date_yuna_bookstore_3": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "date_yuna_earphone"
    },
    "date_yuna_earphone": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "date_yuna_earphone_2"
    },
    "date_yuna_earphone_2": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "date_yuna_earphone_3"
    },
    "date_yuna_earphone_3": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "date_yuna_oldbook"
    },
    "date_yuna_oldbook": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "date_yuna_oldbook_2"
    },
    "date_yuna_oldbook_2": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "date_yuna_oldbook_3"
    },
    "date_yuna_oldbook_3": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "date_yuna_oldbook_4"
    },
    "date_yuna_oldbook_4": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "date_yuna_freetalk"
    },
    "date_yuna_end": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "pre_confess_minsu"
    },

    // ═══════════════════════════════════════════════════════════════
    // 다인 데이트 — 오락실 (condition: route_dain)
    // ═══════════════════════════════════════════════════════════════

    "date_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "bgm": "daily2.mp3",
        "condition": "route_dain",
        "next": "date_dain_2"
    },
    "date_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "date_dain_3"
    },
    "date_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "date_dain_4"
    },
    "date_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "date_dain_compliment_choice"
    },
    "date_dain_compliment_choice": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            {
                "next": "date_dain_bright",
                "stats": {
                    "Dain": {
                        "affinity": 7
                    }
                }
            },
            {
                "affinityBranches": [
                    { "minAffinity": 50, "next": "date_dain_pretty_high" },
                    { "minAffinity": -100, "next": "date_dain_pretty_low" }
                ],
                "affinityChar": "Dain"
            }
        ]
    },
    "date_dain_pretty_high": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "stats": {
            "Dain": {
                "affinity": 10
            }
        },
        "next": "date_dain_pretty_high_2"
    },
    "date_dain_pretty_high_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "date_dain_pretty_high_3"
    },
    "date_dain_pretty_high_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "date_dain_pretty_high_4"
    },
    "date_dain_pretty_high_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "date_dain_to_arcade"
    },
    "date_dain_pretty_low": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "date_dain_to_arcade"
    },
    "date_dain_bright": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "date_dain_to_arcade"
    },
    "date_dain_to_arcade": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "date_dain_arcade"
    },
    "date_dain_arcade": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "date_dain_arcade_2"
    },
    "date_dain_arcade_2": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "date_dain_arcade_3"
    },
    "date_dain_arcade_3": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "date_dain_rhythm"
    },
    "date_dain_rhythm": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "date_dain_rhythm_2"
    },
    "date_dain_rhythm_2": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "date_dain_rhythm_3"
    },
    "date_dain_rhythm_3": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "date_dain_knee"
    },
    "date_dain_knee": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "date_dain_knee_2"
    },
    "date_dain_knee_2": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "date_dain_knee_2b"
    },
    "date_dain_knee_2b": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "date_dain_shop"
    },
    "date_dain_shop": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "date_dain_shop_2"
    },
    "date_dain_shop_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "date_dain_shop_3"
    },
    "date_dain_shop_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "date_dain_freetalk"
    },
    "date_dain_end": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "pre_confess_minsu"
    },

    // ═══════════════════════════════════════════════════════════════
    // 민수 독려 + 소정이 콜백 (공통, 고백 직전)
    // ═══════════════════════════════════════════════════════════════
    "pre_confess_minsu": {
        "character": "assets/images/characters/minsu_smirk.png",
        "background": "assets/images/background/street.png",
        "sunset": true,
        "next": "pre_confess_minsu_2"
    },
    "pre_confess_minsu_2": {
        "character": "assets/images/characters/minsu_smirk.png",
        "background": "assets/images/background/street.png",
        "sunset": true,
        "next": "pre_confess_callback"
    },
    "pre_confess_callback": {
        "character": null,
        "background": "assets/images/background/street.png",
        "sunset": true,
        "next": "confess_seo_1"
    }
,
    "date_seo_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "date_seo_end"
    }
,
    "date_yuna_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "date_yuna_end"
    }
,
    "date_dain_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "date_dain_end"
    }
});
