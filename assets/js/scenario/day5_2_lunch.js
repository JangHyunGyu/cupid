/**
 * ============================================================================
 * CUPID - day5_2_lunch
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

(() => {
    const scenes = {
    "tour_co_branch": {
        "background": "assets/images/background/school.png",
        "character": null,
        "routeBeforeRender": true,
        "branches": [
            { "condition": "day4_counteroffer_target_teacher", "next": "tour_co_event_1" },
            { "condition": "day4_counteroffer_target_nurse", "next": "tour_co_event_1" },
            { "condition": "route_seoyeon", "next": "tour_co_seo_1" },
            { "condition": "route_yuna", "next": "tour_co_yuna_1" },
            { "condition": "route_dain", "next": "tour_co_dain_1" },
            { "next": "tour_co_event_1" }
        ]
    },
    "tour_co_event_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "bgm": "sunset1.mp3",
        "next": "tour_co_event_2"
    },
    "tour_co_event_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after5_start"
    },
    "tour_co_seo_1": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "bgm": "sunset1.mp3",
        "next": "tour_co_seo_2"
    },
    "tour_co_seo_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "tour_co_seo_3"
    },
    "tour_co_seo_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "after5_start"
    },
    "tour_co_yuna_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "bgm": "sunset1.mp3",
        "next": "tour_co_yuna_2"
    },
    "tour_co_yuna_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "tour_co_yuna_3"
    },
    "tour_co_yuna_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_pout.png",
        "next": "after5_start"
    },
    "tour_co_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "bgm": "sunset1.mp3",
        "next": "tour_co_dain_2"
    },
    "tour_co_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "tour_co_dain_3"
    },
    "tour_co_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "after5_start"
    },
    "tour_seo_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "bgm": "sunset1.mp3",
        "affinityGuard": {"character":"Seoyeon","minAffinity":40,"fallback":"tour_seo_low"},
        "next": "tour_seo_event_1"
    },
    "tour_seo_event_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "tour_seo_event_2"
    },
    "tour_seo_event_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_worried.png",
        "next": "tour_seo_event_3"
    },
    "tour_seo_event_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_event_4"
    },
    "tour_seo_event_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "tour_seo_event_5"
    },
    "tour_seo_event_5": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlags": ["day5_seoyeon_delegated"],
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
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
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
        "stats": {"Seoyeon":{"affinity":1}},
        "next": "tour_seo_freetalk"
    },
    "tour_seo_freetalk": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_end"
    },
    "tour_seo_end": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "after5_start"
    },
    "tour_yuna_1_check": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "bgm": "sunset1.mp3",
        "affinityGuard": {"character":"Yuna","minAffinity":40,"fallback":"tour_yuna_low"},
        "branches": [
            { "condition": "chose_yuna_lunch", "next": "tour_yuna_1" },
            { "next": "tour_yuna_1b" }
        ]
    },
    "tour_yuna_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_event_1"
    },
    "tour_yuna_1b": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_event_1"
    },
    "tour_yuna_event_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "tour_yuna_event_2"
    },
    "tour_yuna_event_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_worried.png",
        "next": "tour_yuna_event_3"
    },
    "tour_yuna_event_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_event_4"
    },
    "tour_yuna_event_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "tour_yuna_event_5"
    },
    "tour_yuna_event_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "setFlags": ["day5_yuna_signed_story"],
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
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
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
        "stats": {"Yuna":{"affinity":1}},
        "next": "tour_yuna_freetalk"
    },
    "tour_yuna_freetalk": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_end"
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
    "tour_dain_1_check": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "bgm": "sunset1.mp3",
        "affinityGuard": {"character":"Dain","minAffinity":40,"fallback":"tour_dain_low"},
        "branches": [
            { "condition": "chose_dain_lunch", "next": "tour_dain_1" },
            { "next": "tour_dain_1b" }
        ]
    },
    "tour_dain_1": {
        "background": "assets/images/background/gym.png",
        "backgroundVariant": "lights-off",
        "character": null,
        "next": "tour_dain_event_1"
    },
    "tour_dain_1b": {
        "background": "assets/images/background/gym.png",
        "backgroundVariant": "lights-off",
        "character": null,
        "next": "tour_dain_event_1"
    },
    "tour_dain_event_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "tour_dain_event_2"
    },
    "tour_dain_event_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "tour_dain_event_3"
    },
    "tour_dain_event_3": {
        "background": "assets/images/background/dain_broadcast_booth.png",
        "character": "assets/images/characters/dain_sweat.png",
        "next": "tour_dain_event_4"
    },
    "tour_dain_event_4": {
        "background": "assets/images/background/dain_broadcast_booth.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "tour_dain_event_5"
    },
    "tour_dain_event_5": {
        "background": "assets/images/background/dain_broadcast_booth.png",
        "character": "assets/images/characters/dain_normal.png",
        "setFlags": ["day5_dain_chose_commentary"],
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
        "next": "tour_dain_11_b"
    },
    "tour_dain_11_b": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
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
        "stats": {"Dain":{"affinity":3}},
        "next": "tour_dain_freetalk"
    },
    "tour_dain_freetalk": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "tour_dain_end_2"
    },
    "tour_dain_end_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after5_start"
    },
    "tour_seo_low": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_start"
    },
    "tour_yuna_low": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_start"
    },
    "tour_dain_low": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after5_start"
    }
    };
    for (const scene of Object.values(scenes)) {
        if (scene && typeof scene === 'object') {
            Object.defineProperty(scene, "__sourceFile", {
                value: "day5_2_lunch",
                enumerable: false
            });
        }
    }
    Object.assign(SCENARIO[5], scenes);
})();
