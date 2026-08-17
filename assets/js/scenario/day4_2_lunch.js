/**
 * ============================================================================
 * CUPID - day4_2_lunch
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

(() => {
    const scenes = {
    "date_seo_1": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "bgm": "date.mp3",
        "condition": "route_seoyeon",
        "affinityGuard": {"character":"Seoyeon","minAffinity":15,"fallback":"date_seo_low"},
        "next": "date_seo_compliment_choice"
    },
    "date_seo_compliment_choice": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            { "affinityChar": "Seoyeon", "affinityBranches": [{"minAffinity":50,"next":"date_seo_pretty_high"},{"minAffinity":-100,"next":"date_seo_pretty_low"}] },
            { "next": "date_seo_bright", "stats": {"Seoyeon":{"affinity":4}} },
            { "next": "date_seo_role_trap", "stats": {"Seoyeon":{"affinity":-4}} }
        ]
    },
    "date_seo_pretty_high": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {"Seoyeon":{"affinity":2}},
        "next": "date_seo_pretty_high_b"
    },
    "date_seo_pretty_high_b": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
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
        "next": "date_seo_pretty_high_3_b"
    },
    "date_seo_pretty_high_3_b": {
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
        "stats": {"Seoyeon":{"affinity":2}},
        "next": "date_seo_walk"
    },
    "date_seo_bright": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "date_seo_walk"
    },
    "date_seo_role_trap": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
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
        "next": "date_seo_flower_b"
    },
    "date_seo_flower_b": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "date_seo_flower_2"
    },
    "date_seo_flower_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "date_seo_succulent_2"
    },
    "date_seo_succulent_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "date_seo_succulent_2_b"
    },
    "date_seo_succulent_2_b": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "date_seo_succulent_3"
    },
    "date_seo_succulent_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "date_seo_end"
    },
    "date_seo_end": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_worried.png",
        "next": "date_seo_end_b"
    },
    "date_seo_end_b": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "date_seo_end_c"
    },
    "date_seo_end_c": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "date_seo_end_d"
    },
    "date_seo_end_d": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "pre_confess_minsu"
    },
    "date_yuna_1": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_normal.png",
        "bgm": "night1.mp3",
        "condition": "route_yuna",
        "affinityGuard": {"character":"Yuna","minAffinity":15,"fallback":"date_yuna_low"},
        "next": "date_yuna_compliment_choice"
    },
    "date_yuna_compliment_choice": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            { "affinityChar": "Yuna", "affinityBranches": [{"minAffinity":50,"next":"date_yuna_pretty_high"},{"minAffinity":-100,"next":"date_yuna_pretty_low"}] },
            { "next": "date_yuna_bright", "stats": {"Yuna":{"affinity":4}} },
            { "next": "date_yuna_trap", "stats": {"Yuna":{"affinity":-3}} }
        ]
    },
    "date_yuna_pretty_high": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_shy.png",
        "stats": {"Yuna":{"affinity":3}},
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
        "next": "date_yuna_pretty_high_5_b"
    },
    "date_yuna_pretty_high_5_b": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "date_yuna_pretty_high_5_c"
    },
    "date_yuna_pretty_high_5_c": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "date_yuna_bookstore"
    },
    "date_yuna_pretty_low": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_shy.png",
        "stats": {"Yuna":{"affinity":2}},
        "next": "date_yuna_bookstore"
    },
    "date_yuna_bright": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "date_yuna_bookstore"
    },
    "date_yuna_trap": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_normal.png",
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
        "next": "date_yuna_bookstore_2_b"
    },
    "date_yuna_bookstore_2_b": {
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
        "character": "assets/images/characters/yuna_shy.png",
        "next": "date_yuna_earphone_2"
    },
    "date_yuna_earphone_2": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "date_yuna_earphone_2_b"
    },
    "date_yuna_earphone_2_b": {
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
        "next": "date_yuna_oldbook_b"
    },
    "date_yuna_oldbook_b": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "date_yuna_oldbook_c"
    },
    "date_yuna_oldbook_c": {
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
        "next": "date_yuna_end"
    },
    "date_yuna_end": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "date_yuna_end_b"
    },
    "date_yuna_end_b": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "date_yuna_end_c"
    },
    "date_yuna_end_c": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "pre_confess_minsu"
    },
    "date_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "bgm": "daily2.mp3",
        "condition": "route_dain",
        "affinityGuard": {"character":"Dain","minAffinity":15,"fallback":"date_dain_low"},
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
            { "affinityChar": "Dain", "affinityBranches": [{"minAffinity":50,"next":"date_dain_pretty_high"},{"minAffinity":-100,"next":"date_dain_pretty_low"}] },
            { "next": "date_dain_bright", "stats": {"Dain":{"affinity":-3}} },
            { "next": "date_dain_bright", "stats": {"Dain":{"affinity":-4}} },
            { "next": "date_dain_bright", "stats": {"Dain":{"affinity":-5}} }
        ]
    },
    "date_dain_pretty_high": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "stats": {"Dain":{"affinity":2}},
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
        "stats": {"Dain":{"affinity":2}},
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
        "next": "date_dain_arcade_2_b"
    },
    "date_dain_arcade_2_b": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "date_dain_arcade_3"
    },
    "date_dain_arcade_3": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "date_dain_arcade_3_b"
    },
    "date_dain_arcade_3_b": {
        "background": "assets/images/background/arcade.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "date_dain_arcade_3_c"
    },
    "date_dain_arcade_3_c": {
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
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_sweat.png",
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
        "next": "date_dain_shop_2_b"
    },
    "date_dain_shop_2_b": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "date_dain_shop_3"
    },
    "date_dain_shop_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "date_dain_shop_3_b"
    },
    "date_dain_shop_3_b": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "date_dain_end"
    },
    "date_dain_end": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_sweat.png",
        "next": "date_dain_end_b"
    },
    "date_dain_end_b": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "date_dain_end_c"
    },
    "date_dain_end_c": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_sweat.png",
        "next": "pre_confess_minsu"
    },
    "pre_confess_minsu": {
        "background": "assets/images/background/street.png",
        "characters": {"center":{"src":"assets/images/characters/minsu_smirk.png","opacity":0.35}},
        "next": "pre_confess_minsu_2"
    },
    "pre_confess_minsu_2": {
        "background": "assets/images/background/street.png",
        "characters": {"center":{"src":"assets/images/characters/minsu_smirk.png","opacity":0.35}},
        "next": "pre_confess_callback"
    },
    "pre_confess_callback": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "confess_seo_1"
    },
    "date_seo_low": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlags": ["day4_waited"],
        "next": "day4_night_start"
    },
    "date_yuna_low": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/yuna_normal.png",
        "setFlags": ["day4_waited"],
        "next": "day4_night_start"
    },
    "date_dain_low": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "setFlags": ["day4_waited"],
        "next": "day4_night_start"
    }
    };
    for (const scene of Object.values(scenes)) {
        if (scene && typeof scene === 'object') {
            Object.defineProperty(scene, "__sourceFile", {
                value: "day4_2_lunch",
                enumerable: false
            });
        }
    }
    Object.assign(SCENARIO[4], scenes);
})();
