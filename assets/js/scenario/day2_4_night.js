/**
 * ============================================================================
 * CUPID - day2_4_night
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[2]) SCENARIO[2] = {};

(() => {
    const scenes = {
    "night2_start": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "bgm": "night1.mp3",
        "next": "night2_msg_1"
    },
    "night2_msg_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "chose_dain_after2", "next": "night2_msg_dain_specific" },
            { "condition": "chose_seo_after2", "next": "night2_msg_seo_specific" },
            { "condition": "chose_yuna_after2", "next": "night2_msg_yuna_specific" },
            { "next": "night2_msg_generic" }
        ]
    },
    "night2_msg_dain_specific": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night2_msg_dain_specific_2"
    },
    "night2_msg_dain_specific_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night2_msg_seo_general"
    },
    "night2_msg_seo_general": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night2_msg_yuna_general"
    },
    "night2_msg_seo_specific": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night2_msg_seo_specific_2"
    },
    "night2_msg_seo_specific_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night2_msg_dain_general"
    },
    "night2_msg_yuna_specific": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night2_msg_yuna_specific_2"
    },
    "night2_msg_yuna_specific_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night2_msg_dain_general"
    },
    "night2_msg_dain_general": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night2_msg_dain_general_merge"
    },
    "night2_msg_dain_general_merge": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "branches": [
            { "condition": "chose_seo_after2", "next": "night2_msg_yuna_general" },
            { "next": "night2_msg_seo_general_alt" }
        ]
    },
    "night2_msg_seo_general_alt": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night2_msg_yuna_general"
    },
    "night2_msg_yuna_general": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night2_msg_7"
    },
    "night2_msg_generic": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night2_msg_generic_2"
    },
    "night2_msg_generic_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night2_msg_generic_3"
    },
    "night2_msg_generic_3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night2_msg_7"
    },
    "night2_msg_7": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night2_choice"
    },
    "night2_choice": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "choices": [
            { "next": "night2_reply_dain_1" },
            { "next": "night2_reply_seo_1" },
            { "next": "night2_reply_yuna_1" }
        ]
    },
    "night2_reply_dain_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "stats": {"Dain":{"affinity":5}},
        "next": "night2_reply_dain_2"
    },
    "night2_reply_dain_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night2_reply_dain_3"
    },
    "night2_reply_dain_3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night2_reply_dain_4"
    },
    "night2_reply_dain_4": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night2_reply_dain_5"
    },
    "night2_reply_dain_5": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "affinityChar": "Dain",
        "affinityBranches": [{"minAffinity":30,"next":"night2_reply_dain_react_high"},{"minAffinity":-100,"next":"night2_reply_dain_react_default"}],
        "next": "night2_reply_dain_react_default"
    },
    "night2_reply_dain_react_high": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "setFlags": ["night2_replied_dain"],
        "stats": {"Dain":{"affinity":2}},
        "next": "night2_dain_freetalk"
    },
    "night2_reply_dain_react_default": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "setFlags": ["night2_replied_dain"],
        "next": "night2_dain_freetalk"
    },
    "night2_dain_freetalk": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "type": "free_talk",
        "isRemote": true,
        "maxTurns": 3,
        "next": "night2_hidden_check"
    },
    "night2_reply_seo_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "stats": {"Seoyeon":{"affinity":3}},
        "next": "night2_reply_seo_2"
    },
    "night2_reply_seo_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night2_reply_seo_3"
    },
    "night2_reply_seo_3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night2_reply_seo_4"
    },
    "night2_reply_seo_4": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night2_reply_seo_5"
    },
    "night2_reply_seo_5": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "affinityChar": "Seoyeon",
        "affinityBranches": [{"minAffinity":30,"next":"night2_reply_seo_react_high"},{"minAffinity":-100,"next":"night2_reply_seo_react_default"}],
        "next": "night2_reply_seo_react_default"
    },
    "night2_reply_seo_react_high": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "setFlags": ["night2_replied_seo"],
        "stats": {"Seoyeon":{"affinity":2}},
        "next": "night2_seo_freetalk"
    },
    "night2_reply_seo_react_default": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "setFlags": ["night2_replied_seo"],
        "next": "night2_seo_freetalk"
    },
    "night2_seo_freetalk": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "type": "free_talk",
        "isRemote": true,
        "maxTurns": 3,
        "next": "night2_hidden_check"
    },
    "night2_reply_yuna_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "stats": {"Yuna":{"affinity":5}},
        "next": "night2_reply_yuna_2"
    },
    "night2_reply_yuna_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night2_reply_yuna_3"
    },
    "night2_reply_yuna_3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night2_reply_yuna_4"
    },
    "night2_reply_yuna_4": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night2_reply_yuna_5"
    },
    "night2_reply_yuna_5": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night2_reply_yuna_6"
    },
    "night2_reply_yuna_6": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night2_reply_yuna_6_b"
    },
    "night2_reply_yuna_6_b": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night2_reply_yuna_6_c"
    },
    "night2_reply_yuna_6_c": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night2_reply_yuna_7"
    },
    "night2_reply_yuna_7": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "affinityChar": "Yuna",
        "affinityBranches": [{"minAffinity":30,"next":"night2_reply_yuna_react_high"},{"minAffinity":-100,"next":"night2_reply_yuna_react_default"}],
        "next": "night2_reply_yuna_react_default"
    },
    "night2_reply_yuna_react_high": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "setFlags": ["night2_replied_yuna"],
        "stats": {"Yuna":{"affinity":2}},
        "next": "night2_yuna_freetalk"
    },
    "night2_reply_yuna_react_default": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "setFlags": ["night2_replied_yuna"],
        "next": "night2_yuna_freetalk"
    },
    "night2_yuna_freetalk": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "type": "free_talk",
        "isRemote": true,
        "maxTurns": 3,
        "next": "night2_hidden_check"
    },
    "night2_hidden_check": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "homeroom_day2", "next": "night2_hidden_homeroom_1" },
            { "condition": "nurse_day2", "next": "night2_hidden_nurse_1" },
            { "next": "night2_end_1" }
        ]
    },
    "night2_hidden_homeroom_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/teacher_normal.png","opacity":0.35}},
        "next": "night2_hidden_homeroom_2"
    },
    "night2_hidden_homeroom_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/teacher_normal.png","opacity":0.35}},
        "next": "night2_hidden_homeroom_3"
    },
    "night2_hidden_homeroom_3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/teacher_normal.png","opacity":0.35}},
        "branches": [
            { "condition": "nurse_day2", "next": "night2_hidden_nurse_1" },
            { "next": "night2_end_1" }
        ]
    },
    "night2_hidden_nurse_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/nurse_normal.png","opacity":0.35}},
        "next": "night2_hidden_nurse_2"
    },
    "night2_hidden_nurse_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/nurse_normal.png","opacity":0.35}},
        "next": "night2_end_1"
    },
    "night2_end_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night2_flashback_1"
    },
    "night2_flashback_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night2_flashback_2"
    },
    "night2_flashback_2": {
        "background": "assets/images/background/sojeong_flashback.png",
        "character": null,
        "next": "night2_flashback_3"
    },
    "night2_flashback_3": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night2_flashback_5"
    },
    "night2_flashback_5": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night2_flashback_7"
    },
    "night2_flashback_7": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night2_flashback_8"
    },
    "night2_flashback_8": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night2_flashback_9"
    },
    "night2_flashback_9": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night2_flashback_10"
    },
    "night2_flashback_10": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night2_end_2"
    },
    "night2_end_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night2_end_2_b"
    },
    "night2_end_2_b": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night2_end_3_b"
    },
    "night2_end_3_b": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night2_end_4_b"
    },
    "night2_end_4_b": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night2_end_4_c"
    },
    "night2_end_4_c": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "morning3_start"
    }
    };
    for (const scene of Object.values(scenes)) {
        if (scene && typeof scene === 'object') {
            Object.defineProperty(scene, "__sourceFile", {
                value: "day2_4_night",
                enumerable: false
            });
        }
    }
    Object.assign(SCENARIO[2], scenes);
})();
