/**
 * ============================================================================
 * CUPID - day5_4_night
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

Object.assign(SCENARIO[5], {

    // =========================================================================
    // ENDING START — main entry & condition routing
    // =========================================================================
    "ending_start": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "branches": [
            {
                "next": "hidden_perfect_homeroom_check",
                "condition": "homeroom_day5",
                "excludeCondition": "day3_has_multiple_dates || day4_confession_accepted"
            },
            {
                "next": "hidden_good_homeroom_1",
                "condition": "homeroom_day5",
                "excludeCondition": "day4_confession_accepted"
            },
            {
                "next": "hidden_perfect_nurse_check",
                "condition": "nurse_day5",
                "excludeCondition": "day3_has_multiple_dates || day4_confession_accepted"
            },
            {
                "next": "hidden_good_nurse_1",
                "condition": "nurse_day5",
                "excludeCondition": "day4_confession_accepted"
            },
            {
                "next": "ending_affinity_check",
                "condition": "day4_confession_accepted",
                "excludeCondition": "day3_has_multiple_dates"
            },
            {
                "next": "day5_ending_harem",
                "condition": "ending_harem"
            },
            {
                "next": "day5_ending_good",
                "condition": "day4_confession_accepted"
            },
            {
                "next": "day5_ending_mayhem",
                "condition": "day3_has_multiple_dates",
                "excludeCondition": "ending_harem"
            },
            {
                "next": "ending_confessed_aff_check",
                "condition": "day5_confessed"
            },
            {
                "next": "day5_ending_alone"
            }
        ]
    },

    // =========================================================================
    // ENDING AFFINITY CHECK — route → character affinity branch
    // =========================================================================
    "ending_affinity_check": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "branches": [
            { "condition": "route_seoyeon", "next": "ending_aff_check_seo" },
            { "condition": "route_yuna", "next": "ending_aff_check_yuna" },
            { "condition": "route_dain", "next": "ending_aff_check_dain" }
        ],
        "next": "day5_ending_good"
    },
    "ending_aff_check_seo": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "night": true,
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            { "minAffinity": 80, "next": "perfect_seo_1" },
            { "minAffinity": 60, "next": "true_seo_1" },
            { "minAffinity": 40, "next": "day5_ending_good" },
            { "minAffinity": 0, "next": "bitter_seo_1" }
        ],
        "next": "bitter_seo_1"
    },
    "ending_aff_check_yuna": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "night": true,
        "affinityChar": "Yuna",
        "affinityBranches": [
            { "minAffinity": 80, "next": "perfect_yuna_1" },
            { "minAffinity": 60, "next": "true_yuna_1" },
            { "minAffinity": 40, "next": "day5_ending_good" },
            { "minAffinity": 0, "next": "bitter_yuna_1" }
        ],
        "next": "bitter_yuna_1"
    },
    "ending_aff_check_dain": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "night": true,
        "affinityChar": "Dain",
        "affinityBranches": [
            { "minAffinity": 80, "next": "perfect_dain_1" },
            { "minAffinity": 60, "next": "true_dain_1" },
            { "minAffinity": 40, "next": "day5_ending_good" },
            { "minAffinity": 0, "next": "bitter_dain_1" }
        ],
        "next": "bitter_dain_1"
    },

    // =========================================================================
    // CONFESSED AFFINITY CHECK — day5_confessed + affinity 50+/50-
    // =========================================================================
    "ending_confessed_aff_check": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "branches": [
            { "condition": "route_seoyeon", "next": "ending_confessed_aff_seo" },
            { "condition": "route_yuna", "next": "ending_confessed_aff_yuna" },
            { "condition": "route_dain", "next": "ending_confessed_aff_dain" },
            { "next": "day5_ending_friend" }
        ]
    },
    "ending_confessed_aff_seo": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "night": true,
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            { "minAffinity": 50, "next": "day5_ending_good" }
        ],
        "next": "day5_ending_confess_fail"
    },
    "ending_confessed_aff_yuna": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "night": true,
        "affinityChar": "Yuna",
        "affinityBranches": [
            { "minAffinity": 50, "next": "day5_ending_good" }
        ],
        "next": "day5_ending_confess_fail"
    },
    "ending_confessed_aff_dain": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "night": true,
        "affinityChar": "Dain",
        "affinityBranches": [
            { "minAffinity": 50, "next": "day5_ending_good" }
        ],
        "next": "day5_ending_confess_fail"
    },

    // =========================================================================
    // PERFECT END — Seoyeon
    // =========================================================================
    "perfect_seo_1": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "setFlag": "ending_perfect",
        "next": "perfect_seo_2"
    },
    "perfect_seo_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "perfect_seo_3"
    },
    "perfect_seo_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "perfect_seo_4"
    },
    "perfect_seo_4": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "night": true,
        "next": "perfect_seo_5"
    },
    "perfect_seo_5": {
        "background": "assets/images/background/ending_perfect_seoyeon.png",
        "character": null,
        "night": true,
        "next": "perfect_epilogue_1"
    },

    // =========================================================================
    // PERFECT END — Yuna
    // =========================================================================
    "perfect_yuna_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "setFlag": "ending_perfect",
        "next": "perfect_yuna_2"
    },
    "perfect_yuna_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "perfect_yuna_3"
    },
    "perfect_yuna_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "perfect_yuna_4"
    },
    "perfect_yuna_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "perfect_yuna_5"
    },
    "perfect_yuna_5": {
        "background": "assets/images/background/ending_perfect_yuna.png",
        "character": null,
        "night": true,
        "next": "perfect_epilogue_1"
    },

    // =========================================================================
    // PERFECT END — Dain
    // =========================================================================
    "perfect_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "setFlag": "ending_perfect",
        "next": "perfect_dain_2"
    },
    "perfect_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "perfect_dain_2b"
    },
    "perfect_dain_2b": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "perfect_dain_3"
    },
    "perfect_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "perfect_dain_3b"
    },
    "perfect_dain_3b": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "night": true,
        "next": "perfect_dain_4"
    },
    "perfect_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "next": "perfect_dain_5"
    },
    "perfect_dain_5": {
        "background": "assets/images/background/ending_perfect_dain.png",
        "character": null,
        "night": true,
        "next": "perfect_seo_5b"
    },
    "perfect_seo_5b": {
        "character": null,
        "night": true,
        "next": "perfect_epilogue_1"
    },

    // =========================================================================
    // PERFECT END — Shared Epilogue
    // =========================================================================
    "perfect_epilogue_1": {
        "character": null,
        "branches": [
            { "condition": "route_seoyeon", "next": "perfect_epilogue_1_seo" },
            { "condition": "route_yuna", "next": "perfect_epilogue_1_yuna" },
            { "next": "perfect_epilogue_1_dain" }
        ]
    },
    "perfect_epilogue_1_seo": {
        "background": "assets/images/background/ending_perfect_seoyeon.png",
        "character": null,
        "night": true,
        "next": "perfect_epilogue_bridge_seo"
    },
    "perfect_epilogue_1_yuna": {
        "background": "assets/images/background/ending_perfect_yuna.png",
        "character": null,
        "night": true,
        "next": "perfect_epilogue_bridge_yuna"
    },
    "perfect_epilogue_1_dain": {
        "background": "assets/images/background/ending_perfect_dain.png",
        "character": null,
        "night": true,
        "next": "perfect_epilogue_bridge_dain"
    },
    "perfect_epilogue_bridge_seo": {
        "character": null,
        "night": true,
        "next": "perfect_epilogue_2_seo"
    },
    "perfect_epilogue_bridge_yuna": {
        "character": null,
        "night": true,
        "next": "perfect_epilogue_2_yuna"
    },
    "perfect_epilogue_bridge_dain": {
        "character": null,
        "night": true,
        "next": "perfect_epilogue_2_dain"
    },
    "perfect_epilogue_2_seo": {
        "character": null,
        "night": true,
        "next": "perfect_epilogue_3_seo"
    },
    "perfect_epilogue_2_yuna": {
        "character": null,
        "night": true,
        "next": "perfect_epilogue_3_yuna"
    },
    "perfect_epilogue_2_dain": {
        "character": null,
        "night": true,
        "next": "perfect_epilogue_3_dain"
    },
    "perfect_epilogue_3_seo": {
        "character": null,
        "night": true,
        "next": "perfect_epilogue_4_seo"
    },
    "perfect_epilogue_3_yuna": {
        "character": null,
        "night": true,
        "next": "perfect_epilogue_4_yuna"
    },
    "perfect_epilogue_3_dain": {
        "character": null,
        "night": true,
        "next": "perfect_epilogue_4_dain"
    },
    "perfect_epilogue_4_seo": {
        "character": null,
        "night": true,
        "next": "day5_credits"
    },
    "perfect_epilogue_4_yuna": {
        "character": null,
        "night": true,
        "next": "day5_credits"
    },
    "perfect_epilogue_4_dain": {
        "character": null,
        "night": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // BITTERSWEET END — Seoyeon
    // =========================================================================
    "bitter_seo_1": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "night2.mp3",
        "setFlag": "ending_bittersweet",
        "next": "bitter_seo_2"
    },
    "bitter_seo_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "next": "bitter_seo_3"
    },
    "bitter_seo_3": {
        "background": "assets/images/background/ending_bittersweet.png",
        "character": null,
        "night": true,
        "next": "bitter_epilogue_1"
    },

    // =========================================================================
    // BITTERSWEET END — Yuna
    // =========================================================================
    "bitter_yuna_1": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "night2.mp3",
        "setFlag": "ending_bittersweet",
        "next": "bitter_yuna_2"
    },
    "bitter_yuna_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "bitter_yuna_3"
    },
    "bitter_yuna_3": {
        "background": "assets/images/background/ending_bittersweet.png",
        "character": null,
        "night": true,
        "next": "bitter_epilogue_1"
    },

    // =========================================================================
    // BITTERSWEET END — Dain
    // =========================================================================
    "bitter_dain_1": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "night2.mp3",
        "setFlag": "ending_bittersweet",
        "next": "bitter_dain_2"
    },
    "bitter_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "bitter_dain_3"
    },
    "bitter_dain_3": {
        "background": "assets/images/background/ending_bittersweet.png",
        "character": null,
        "night": true,
        "next": "bitter_epilogue_1"
    },

    // =========================================================================
    // BITTERSWEET END — Shared Epilogue
    // =========================================================================
    "bitter_epilogue_1": {
        "character": null,
        "night": true,
        "next": "bitter_epilogue_2"
    },
    "bitter_epilogue_2": {
        "character": null,
        "night": true,
        "next": "bitter_epilogue_3"
    },
    "bitter_epilogue_3": {
        "character": null,
        "night": true,
        "next": "day5_credits"
    },

    // ── Seoyeon TRUE route ──
    "true_seo_1": {
        "background": "assets/images/background/seyoun_room.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "setFlag": "ending_true_love",
        "next": "true_seo_2"
    },
    "true_seo_2": {
        "background": "assets/images/background/seyoun_room.png",
        "character": null,
        "night": true,
        "next": "true_seo_3"
    },
    "true_seo_3": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "next": "true_seo_4"
    },
    "true_seo_4": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "next": "true_seo_5"
    },
    "true_seo_5": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "night": true,
        "next": "true_seo_6"
    },
    "true_seo_6": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "night": true,
        "next": "true_seo_6b"
    },
    "true_seo_6b": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "true_seo_7"
    },
    "true_seo_7": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "true_seo_7b"
    },
    "true_seo_7b": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "true_seo_8"
    },
    "true_seo_8": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "true_seo_bridge"
    },
    "true_seo_bridge": {
        "background": "assets/images/background/ending_true_seoyeon.png",
        "character": null,
        "night": true,
        "next": "true_epilogue_1"
    },

    // ── Yuna TRUE route ──
    "true_yuna_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "setFlag": "ending_true_love",
        "next": "true_yuna_2"
    },
    "true_yuna_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "true_yuna_3"
    },
    "true_yuna_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "true_yuna_4"
    },
    "true_yuna_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "true_yuna_5"
    },
    "true_yuna_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "true_yuna_6"
    },
    "true_yuna_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "true_yuna_6b"
    },
    "true_yuna_6b": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "true_yuna_7"
    },
    "true_yuna_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "true_yuna_bridge"
    },
    "true_yuna_bridge": {
        "background": "assets/images/background/ending_true_yuna.png",
        "character": null,
        "night": true,
        "next": "true_epilogue_1"
    },

    // ── Dain TRUE route ──
    "true_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "setFlag": "ending_true_love",
        "next": "true_dain_2"
    },
    "true_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "night": true,
        "next": "true_dain_2b"
    },
    "true_dain_2b": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "next": "true_dain_3"
    },
    "true_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "true_dain_4"
    },
    "true_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "true_dain_5"
    },
    "true_dain_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "next": "true_dain_6"
    },
    "true_dain_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "next": "true_dain_7"
    },
    "true_dain_7": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "true_dain_8"
    },
    "true_dain_8": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "true_dain_8b"
    },
    "true_dain_8b": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "true_dain_bridge"
    },
    "true_dain_bridge": {
        "background": "assets/images/background/ending_true_dain.png",
        "character": null,
        "night": true,
        "next": "true_epilogue_1"
    },

    // ── Shared epilogue ──
    "true_epilogue_1": {
        "character": null,
        "branches": [
            { "condition": "route_seoyeon", "next": "true_epilogue_1_seo" },
            { "condition": "route_yuna", "next": "true_epilogue_1_yuna" },
            { "next": "true_epilogue_1_dain" }
        ]
    },
    "true_epilogue_1_seo": {
        "background": "assets/images/background/ending_true_seoyeon.png",
        "character": null,
        "night": true,
        "next": "true_epilogue_2"
    },
    "true_epilogue_1_yuna": {
        "background": "assets/images/background/ending_true_yuna.png",
        "character": null,
        "night": true,
        "next": "true_epilogue_2"
    },
    "true_epilogue_1_dain": {
        "background": "assets/images/background/ending_true_dain.png",
        "character": null,
        "night": true,
        "next": "true_epilogue_2"
    },
    "true_epilogue_2": {
        "character": null,
        "night": true,
        "next": "true_epilogue_3"
    },
    "true_epilogue_3": {
        "character": null,
        "night": true,
        "next": "true_epilogue_4"
    },
    "true_epilogue_4": {
        "character": null,
        "night": true,
        "next": "true_epilogue_7"
    },
    "true_epilogue_7": {
        "character": null,
        "night": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // GOOD END
    // =========================================================================
    "day5_ending_good": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "night2.mp3",
        "next": "good_1"
    },
    "good_1": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "next": "good_1b"
    },
    "good_1b": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "next": "good_1c"
    },
    "good_1c": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "branches": [
            { "condition": "route_seoyeon", "next": "good_1_seo" },
            { "condition": "route_yuna", "next": "good_1_yuna" },
            { "condition": "route_dain", "next": "good_1_dain" },
            { "next": "good_2_seo" }
        ]
    },
    "good_1_seo": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "next": "good_2_seo"
    },
    "good_1_yuna": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "good_1_yuna_b"
    },
    "good_1_yuna_b": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "next": "good_2_yuna"
    },
    "good_1_dain": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/dain_pout.png",
        "night": true,
        "next": "good_2_dain"
    },
    // ── Seoyeon good route (벚꽃 길) ──
    "good_2_seo": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "next": "good_3_seo"
    },
    "good_3_seo": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "next": "good_4_seo"
    },
    "good_4_seo": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "next": "good_5_seo"
    },
    "good_5_seo": {
        "background": "assets/images/background/ending_good_seoyeon.png",
        "character": null,
        "night": true,
        "next": "good_epilogue_1"
    },
    // ── Yuna good route (옥상) ──
    "good_2_yuna": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "night": true,
        "next": "good_3_yuna"
    },
    "good_3_yuna": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "night": true,
        "next": "good_4_yuna"
    },
    "good_4_yuna": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "night": true,
        "next": "good_5_yuna"
    },
    "good_5_yuna": {
        "background": "assets/images/background/ending_good_yuna.png",
        "character": null,
        "night": true,
        "next": "good_epilogue_1_yuna"
    },
    // ── Dain good route (학교 교문) ──
    "good_2_dain": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "next": "good_3_dain"
    },
    "good_3_dain": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "next": "good_4_dain"
    },
    "good_4_dain": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "next": "good_5_dain"
    },
    "good_5_dain": {
        "background": "assets/images/background/ending_good_dain.png",
        "character": null,
        "night": true,
        "next": "good_epilogue_1_dain"
    },
    "good_epilogue_1": {
        "character": null,
        "night": true,
        "next": "good_epilogue_2"
    },
    "good_epilogue_2": {
        "character": null,
        "night": true,
        "next": "good_epilogue_3"
    },
    "good_epilogue_3": {
        "character": null,
        "night": true,
        "next": "good_5_cg_seo"
    },
    "good_epilogue_1_yuna": {
        "character": null,
        "night": true,
        "next": "good_epilogue_2_yuna"
    },
    "good_epilogue_2_yuna": {
        "character": null,
        "night": true,
        "next": "good_epilogue_3_yuna"
    },
    "good_epilogue_3_yuna": {
        "character": null,
        "night": true,
        "next": "good_5_cg_yuna"
    },
    "good_epilogue_1_dain": {
        "character": null,
        "night": true,
        "next": "good_epilogue_2_dain"
    },
    "good_epilogue_2_dain": {
        "character": null,
        "night": true,
        "next": "good_epilogue_3_dain"
    },
    "good_epilogue_3_dain": {
        "character": null,
        "night": true,
        "next": "good_5_cg_dain"
    },
    "good_5_cg_seo": {
        "background": "assets/images/background/ending_good_seoyeon.png",
        "character": null,
        "night": true,
        "next": "day5_credits"
    },
    "good_5_cg_yuna": {
        "background": "assets/images/background/ending_good_yuna.png",
        "character": null,
        "night": true,
        "next": "day5_credits"
    },
    "good_5_cg_dain": {
        "background": "assets/images/background/ending_good_dain.png",
        "character": null,
        "night": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // MAYHEM END
    // =========================================================================
    "day5_ending_mayhem": {
        "background": "assets/images/background/ending_mayhem.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "night1.mp3",
        "next": "mayhem_1"
    },
    "mayhem_1": {
        "background": "assets/images/background/ending_mayhem.png",
        "character": null,
        "night": true,
        "next": "mayhem_2"
    },
    "mayhem_2": {
        "background": "assets/images/background/ending_mayhem.png",
        "character": null,
        "night": true,
        "next": "mayhem_3"
    },
    "mayhem_3": {
        "background": "assets/images/background/ending_mayhem.png",
        "character": null,
        "night": true,
        "next": "mayhem_4"
    },
    "mayhem_4": {
        "background": "assets/images/background/ending_mayhem.png",
        "character": null,
        "night": true,
        "next": "mayhem_5"
    },
    "mayhem_5": {
        "background": "assets/images/background/ending_mayhem.png",
        "character": null,
        "night": true,
        "next": "mayhem_6"
    },
    "mayhem_6": {
        "background": "assets/images/background/ending_mayhem.png",
        "character": null,
        "night": true,
        "next": "mayhem_7"
    },
    "mayhem_7": {
        "background": "assets/images/background/ending_mayhem.png",
        "character": null,
        "night": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // HAREM END
    // =========================================================================
    "day5_ending_harem": {
        "background": "assets/images/background/ending_harem.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "night1.mp3",
        "next": "harem_1"
    },
    "harem_1": {
        "background": "assets/images/background/ending_harem.png",
        "character": null,
        "night": true,
        "next": "harem_2"
    },
    "harem_2": {
        "background": "assets/images/background/ending_harem.png",
        "character": null,
        "night": true,
        "next": "harem_3"
    },
    "harem_3": {
        "background": "assets/images/background/ending_harem.png",
        "character": null,
        "night": true,
        "next": "harem_4"
    },
    "harem_4": {
        "background": "assets/images/background/ending_harem.png",
        "character": null,
        "night": true,
        "next": "harem_5"
    },
    "harem_5": {
        "background": "assets/images/background/ending_harem.png",
        "character": null,
        "night": true,
        "next": "harem_6"
    },
    "harem_6": {
        "background": "assets/images/background/ending_harem.png",
        "character": null,
        "night": true,
        "next": "harem_7"
    },
    "harem_7": {
        "background": "assets/images/background/ending_harem.png",
        "character": null,
        "night": true,
        "next": "harem_8"
    },
    "harem_8": {
        "background": "assets/images/background/ending_harem.png",
        "character": null,
        "night": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // CONFESS FAIL END (고백했으나 호감 부족)
    // =========================================================================
    "day5_ending_confess_fail": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "night2.mp3",
        "branches": [
            { "condition": "route_seoyeon", "next": "confess_fail_cg_seo" },
            { "condition": "route_yuna", "next": "confess_fail_cg_yuna" },
            { "condition": "route_dain", "next": "confess_fail_cg_dain" }
        ],
        "next": "confess_fail_1"
    },
    "confess_fail_cg_seo": {
        "background": "assets/images/background/ending_confess_fail_seoyeon.png",
        "character": null,
        "night": true,
        "next": "confess_fail_1"
    },
    "confess_fail_cg_yuna": {
        "background": "assets/images/background/ending_confess_fail_yuna.png",
        "character": null,
        "night": true,
        "next": "confess_fail_1"
    },
    "confess_fail_cg_dain": {
        "background": "assets/images/background/ending_confess_fail_dain.png",
        "character": null,
        "night": true,
        "next": "confess_fail_1"
    },
    "confess_fail_1": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "next": "confess_fail_2"
    },
    "confess_fail_2": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "next": "confess_fail_3"
    },
    "confess_fail_3": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "next": "confess_fail_4"
    },
    "confess_fail_4": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "next": "confess_fail_5"
    },
    "confess_fail_5": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // FRIEND END
    // =========================================================================
    "day5_ending_friend": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "night2.mp3",
        "next": "friend_1"
    },
    "friend_1": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "next": "friend_2"
    },
    "friend_2": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "next": "friend_3"
    },
    "friend_3": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "next": "friend_4"
    },
    "friend_4": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "next": "friend_5"
    },
    "friend_5": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "next": "friend_6"
    },
    "friend_6": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "next": "friend_7"
    },
    "friend_7": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "next": "friend_8"
    },
    "friend_8": {
        "background": "assets/images/background/ending_friend.png",
        "character": null,
        "night": true,
        "next": "friend_9"
    },
    "friend_9": {
        "background": "assets/images/background/ending_friend.png",
        "character": null,
        "night": true,
        "next": "friend_10"
    },
    "friend_10": {
        "background": "assets/images/background/ending_friend.png",
        "character": null,
        "night": true,
        "next": "friend_11"
    },
    "friend_11": {
        "background": "assets/images/background/ending_friend.png",
        "character": null,
        "night": true,
        "next": "friend_12"
    },
    "friend_12": {
        "background": "assets/images/background/ending_friend.png",
        "character": null,
        "night": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // ALONE END
    // =========================================================================
    "day5_ending_alone": {
        "background": "assets/images/background/ending_alone.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "night2.mp3",
        "next": "alone_1"
    },
    "alone_1": {
        "background": "assets/images/background/ending_alone.png",
        "character": null,
        "night": true,
        "next": "alone_2"
    },
    "alone_2": {
        "background": "assets/images/background/ending_alone.png",
        "character": null,
        "night": true,
        "next": "alone_3"
    },
    "alone_3": {
        "background": "assets/images/background/ending_alone.png",
        "character": null,
        "night": true,
        "next": "alone_4"
    },
    "alone_4": {
        "background": "assets/images/background/ending_alone.png",
        "character": null,
        "night": true,
        "next": "alone_5"
    },
    "alone_5": {
        "background": "assets/images/background/ending_alone.png",
        "character": null,
        "night": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // TEACHER PERFECT / TRUE LOVE — Affinity Check
    // =========================================================================
    "hidden_perfect_homeroom_check": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "night": true,
        "affinityChar": "Teacher",
        "affinityBranches": [
            { "minAffinity": 80, "next": "hidden_perfect_homeroom_1" },
            { "minAffinity": 40, "next": "hidden_true_homeroom_1" },
            { "minAffinity": 0, "next": "hidden_good_homeroom_1" }
        ],
        "next": "hidden_good_homeroom_1"
    },

    // =========================================================================
    // TEACHER PERFECT END (Hidden Route — Affinity 80+)
    // =========================================================================
    "hidden_perfect_homeroom_1": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "setFlags": ["ending_perfect", "isDating_Teacher"],
        "next": "hidden_perfect_homeroom_2"
    },
    "hidden_perfect_homeroom_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "next": "hidden_perfect_homeroom_3"
    },
    "hidden_perfect_homeroom_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "hidden_perfect_homeroom_4"
    },
    "hidden_perfect_homeroom_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "hidden_perfect_homeroom_5"
    },
    "hidden_perfect_homeroom_5": {
        "background": "assets/images/background/ending_perfect_teacher.png",
        "character": null,
        "night": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // NURSE PERFECT / TRUE LOVE — Affinity Check
    // =========================================================================
    "hidden_perfect_nurse_check": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": null,
        "night": true,
        "affinityChar": "Nurse",
        "affinityBranches": [
            { "minAffinity": 80, "next": "hidden_perfect_nurse_1" },
            { "minAffinity": 40, "next": "hidden_true_nurse_1" },
            { "minAffinity": 0, "next": "hidden_good_nurse_1" }
        ],
        "next": "hidden_good_nurse_1"
    },

    // =========================================================================
    // NURSE PERFECT END (Hidden Route — Affinity 80+)
    // =========================================================================
    "hidden_perfect_nurse_1": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "setFlags": ["ending_perfect", "isDating_Nurse"],
        "next": "hidden_perfect_nurse_2"
    },
    "hidden_perfect_nurse_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "hidden_perfect_nurse_3"
    },
    "hidden_perfect_nurse_3": {
        "background": "assets/images/background/nurse_home_event1.png",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "hidden_perfect_nurse_4"
    },
    "hidden_perfect_nurse_4": {
        "background": "assets/images/background/nurse_home_event1.png",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "hidden_perfect_nurse_5"
    },
    "hidden_perfect_nurse_5": {
        "background": "assets/images/background/ending_perfect_nurse.png",
        "character": null,
        "night": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // TEACHER TRUE LOVE END (Hidden Route)
    // =========================================================================
    "hidden_true_homeroom_1": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "setFlag": "ending_true_love",
        "next": "hidden_true_homeroom_2"
    },
    "hidden_true_homeroom_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "next": "hidden_true_homeroom_3"
    },
    "hidden_true_homeroom_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "next": "hidden_true_homeroom_4"
    },
    "hidden_true_homeroom_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "next": "hidden_true_homeroom_5"
    },
    "hidden_true_homeroom_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "next": "hidden_true_homeroom_6"
    },
    "hidden_true_homeroom_6": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "hidden_true_homeroom_7"
    },
    "hidden_true_homeroom_7": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "night": true,
        "next": "hidden_true_homeroom_8"
    },
    "hidden_true_homeroom_8": {
        "background": "assets/images/background/ending_true_teacher.png",
        "character": null,
        "night": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // TEACHER GOOD END (Hidden Route)
    // =========================================================================
    "hidden_good_homeroom_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "fade": true,
        "bgm": "night2.mp3",
        "next": "hidden_good_homeroom_2"
    },
    "hidden_good_homeroom_2": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "next": "hidden_good_homeroom_3"
    },
    "hidden_good_homeroom_3": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "next": "hidden_good_homeroom_4"
    },
    "hidden_good_homeroom_4": {
        "background": "assets/images/background/ending_good_teacher.png",
        "character": null,
        "night": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // NURSE TRUE LOVE END (Hidden Route)
    // =========================================================================
    "hidden_true_nurse_1": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "setFlag": "ending_true_love",
        "next": "hidden_true_nurse_2"
    },
    "hidden_true_nurse_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "hidden_true_nurse_3"
    },
    "hidden_true_nurse_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "hidden_true_nurse_4"
    },
    "hidden_true_nurse_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "hidden_true_nurse_5"
    },
    "hidden_true_nurse_5": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "hidden_true_nurse_6"
    },
    "hidden_true_nurse_6": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "hidden_true_nurse_7"
    },
    "hidden_true_nurse_7": {
        "background": "assets/images/background/nurse_home_event1.png",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "hidden_true_nurse_8"
    },
    "hidden_true_nurse_8": {
        "background": "assets/images/background/ending_true_nurse.png",
        "character": null,
        "night": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // NURSE GOOD END (Hidden Route)
    // =========================================================================
    "hidden_good_nurse_1": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "fade": true,
        "bgm": "night2.mp3",
        "next": "hidden_good_nurse_2"
    },
    "hidden_good_nurse_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "hidden_good_nurse_3"
    },
    "hidden_good_nurse_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": null,
        "night": true,
        "next": "hidden_good_nurse_4"
    },
    "hidden_good_nurse_4": {
        "background": "assets/images/background/ending_good_nurse.png",
        "character": null,
        "night": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // CREDITS & RESTART
    // =========================================================================
    "day5_credits": {
        "background": null,
        "character": null,
        "night": true,
        "type": "credits",
        "next": "day5_ending_restart"
    },
    "day5_ending_restart": {
        "background": null,
        "character": null,
        "night": true,
        "choices": [
            {
                "next": "index.html"
            }
        ]
    }
});
