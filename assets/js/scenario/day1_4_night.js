/**
 * ============================================================================
 * CUPID - day1_4_night
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[1]) SCENARIO[1] = {};

(() => {
    const scenes = {
    "night_start": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "bgm": "night1.mp3",
        "next": "night_start_2"
    },
    "night_start_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night_start_3"
    },
    "night_start_3": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "chose_seoyeon_lunch", "next": "night_msg_seo_1" },
            { "condition": "chose_yuna_lunch", "next": "night_msg_yuna_1" },
            { "condition": "chose_dain_lunch", "next": "night_msg_dain_1" },
            { "next": "night_hidden_check" }
        ]
    },
    "night_msg_seo_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night_msg_seo_2"
    },
    "night_msg_seo_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night_msg_seo_3"
    },
    "night_msg_seo_3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night_msg_seo_4"
    },
    "night_msg_seo_4": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night_msg_seo_5"
    },
    "night_msg_seo_5": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night_hidden_check"
    },
    "night_msg_yuna_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night_msg_yuna_2"
    },
    "night_msg_yuna_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night_msg_yuna_3"
    },
    "night_msg_yuna_3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night_hidden_check"
    },
    "night_msg_dain_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night_msg_dain_2"
    },
    "night_msg_dain_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night_msg_dain_3"
    },
    "night_msg_dain_3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night_msg_dain_4"
    },
    "night_msg_dain_4": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night_hidden_check"
    },
    "night_hidden_check": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "homeroom_day1", "next": "night_hidden_homeroom_1" },
            { "condition": "nurse_day1", "next": "night_hidden_nurse_1" },
            { "next": "night_late_transition" }
        ]
    },
    "night_hidden_homeroom_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/teacher_normal.png","opacity":0.35}},
        "next": "night_hidden_homeroom_2"
    },
    "night_hidden_homeroom_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/teacher_normal.png","opacity":0.35}},
        "branches": [
            { "condition": "nurse_day1", "next": "night_hidden_nurse_1" },
            { "next": "night_late_transition" }
        ]
    },
    "night_hidden_nurse_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/nurse_normal.png","opacity":0.35}},
        "next": "night_hidden_nurse_2"
    },
    "night_hidden_nurse_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/nurse_normal.png","opacity":0.35}},
        "next": "night_late_transition"
    },
    "night_late_transition": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night_late_transition_2"
    },
    "night_late_transition_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night_late_branch"
    },
    "night_late_branch": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "affinityBranches": [{"char":"Seoyeon","minAffinity":10,"next":"night_seo_late_1"},{"char":"Dain","minAffinity":10,"next":"night_dain_late_1"},{"char":"Yuna","minAffinity":10,"next":"night_yuna_late_1"}],
        "next": "night_end_1"
    },
    "night_seo_late_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night_seo_late_2"
    },
    "night_seo_late_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night_seo_late_3"
    },
    "night_seo_late_3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night_seo_freetalk"
    },
    "night_seo_freetalk": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "type": "free_talk",
        "next": "night_end_1"
    },
    "night_yuna_late_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night_yuna_late_2"
    },
    "night_yuna_late_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night_yuna_late_3"
    },
    "night_yuna_late_3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night_yuna_late_4"
    },
    "night_yuna_late_4": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night_yuna_freetalk"
    },
    "night_yuna_freetalk": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "type": "free_talk",
        "next": "night_end_1"
    },
    "night_dain_late_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night_dain_late_2"
    },
    "night_dain_late_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night_dain_late_3"
    },
    "night_dain_late_3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night_dain_late_4"
    },
    "night_dain_late_4": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night_dain_late_4_ins"
    },
    "night_dain_late_4_ins": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night_dain_freetalk"
    },
    "night_dain_freetalk": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "type": "free_talk",
        "next": "night_end_1"
    },
    "night_end_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night_end_3"
    },
    "night_end_3": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "morning2_start"
    }
    };
    for (const scene of Object.values(scenes)) {
        if (scene && typeof scene === 'object') {
            Object.defineProperty(scene, "__sourceFile", {
                value: "day1_4_night",
                enumerable: false
            });
        }
    }
    Object.assign(SCENARIO[1], scenes);
})();
