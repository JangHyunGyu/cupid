/**
 * ============================================================================
 * CUPID - day2_4_night
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[2]) SCENARIO[2] = {};

Object.assign(SCENARIO[2], {
    "night2_start": {
        "background": "assets/images/background/room_my.png",
        "bgm": "night1.mp3",
        "character": null,
        "night": true,
        "next": "night2_msg_1"
    },
    "night2_msg_1": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            { "condition": "chose_dain_after2", "next": "night2_msg_dain_specific" },
            { "condition": "chose_seo_after2", "next": "night2_msg_seo_specific" },
            { "condition": "chose_yuna_after2", "next": "night2_msg_yuna_specific" },
            { "next": "night2_msg_generic" }
        ]
    },
    // --- 방과후 다인 루트: 다인은 떡볶이, 서연/유나는 일반 ---
    "night2_msg_dain_specific": {
        "characters": { "center": { "src": "assets/images/characters/dain_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_msg_dain_specific_2"
    },
    "night2_msg_dain_specific_2": {
        "characters": { "center": { "src": "assets/images/characters/dain_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_msg_seo_general"
    },
    // --- 방과후 서연 루트: 서연은 서류, 다인/유나는 일반 ---
    "night2_msg_seo_specific": {
        "characters": { "center": { "src": "assets/images/characters/seyoun_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_msg_seo_specific_2"
    },
    "night2_msg_seo_specific_2": {
        "characters": { "center": { "src": "assets/images/characters/seyoun_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_msg_dain_general"
    },
    // --- 방과후 유나 루트: 유나는 음악, 다인/서연은 일반 ---
    "night2_msg_yuna_specific": {
        "characters": { "center": { "src": "assets/images/characters/yuna_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_msg_yuna_specific_2"
    },
    "night2_msg_yuna_specific_2": {
        "characters": { "center": { "src": "assets/images/characters/yuna_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_msg_dain_general"
    },
    // --- 범용 (히든 루트 등) ---
    "night2_msg_generic": {
        "characters": { "center": { "src": "assets/images/characters/dain_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_msg_generic_2"
    },
    "night2_msg_generic_2": {
        "characters": { "center": { "src": "assets/images/characters/seyoun_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_msg_generic_3"
    },
    "night2_msg_generic_3": {
        "characters": { "center": { "src": "assets/images/characters/yuna_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_msg_7"
    },
    // --- 일반 메시지 (방과후에 안 만난 캐릭터용) ---
    "night2_msg_seo_general": {
        "characters": { "center": { "src": "assets/images/characters/seyoun_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_msg_yuna_general"
    },
    "night2_msg_dain_general": {
        "characters": { "center": { "src": "assets/images/characters/dain_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_msg_dain_general_merge"
    },
    "night2_msg_dain_general_merge": {
        "characters": { "center": { "src": "assets/images/characters/seyoun_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            { "condition": "chose_seo_after2", "next": "night2_msg_yuna_general" },
            { "next": "night2_msg_seo_general_alt" }
        ]
    },
    "night2_msg_seo_general_alt": {
        "characters": { "center": { "src": "assets/images/characters/seyoun_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_msg_yuna_general"
    },
    "night2_msg_yuna_general": {
        "characters": { "center": { "src": "assets/images/characters/yuna_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_msg_7"
    },
    "night2_msg_7": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_choice"
    },
    "night2_choice": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "choices": [
            { "next": "night2_reply_dain_1" },
            { "next": "night2_reply_seo_1" },
            { "next": "night2_reply_yuna_1" }
        ]
    },
    "night2_reply_dain_1": {
        "background": "assets/images/background/room_my.png",
        "characters": { "center": { "src": "assets/images/characters/dain_normal.png", "opacity": 0.35 } },
        "night": true,
        "stats": { "Dain": { "affinity": 3 } },
        "next": "night2_reply_dain_2"
    },
    "night2_reply_dain_2": {
        "characters": { "center": { "src": "assets/images/characters/dain_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_dain_3"
    },
    "night2_reply_dain_3": {
        "characters": { "center": { "src": "assets/images/characters/dain_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_dain_4"
    },
    "night2_reply_dain_4": {
        "characters": { "center": { "src": "assets/images/characters/dain_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_dain_5"
    },
    "night2_reply_dain_5": {
        "characters": { "center": { "src": "assets/images/characters/dain_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "affinityChar": "Dain",
        "affinityBranches": [
            { "minAffinity": 30, "next": "night2_reply_dain_react_high" },
            { "minAffinity": 0, "next": "night2_reply_dain_react_default" }
        ],
        "next": "night2_reply_dain_react_default"
    },
    "night2_reply_dain_react_high": {
        "characters": { "center": { "src": "assets/images/characters/dain_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "stats": { "Dain": { "affinity": 2 } },
        "setFlags": ["night2_replied_dain"],
        "next": "night2_dain_freetalk"
    },
    "night2_reply_dain_react_default": {
        "characters": { "center": { "src": "assets/images/characters/dain_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlags": ["night2_replied_dain"],
        "next": "night2_dain_freetalk"
    },
    "night2_reply_seo_1": {
        "background": "assets/images/background/room_my.png",
        "characters": { "center": { "src": "assets/images/characters/seyoun_normal.png", "opacity": 0.35 } },
        "night": true,
        "stats": { "Seoyeon": { "affinity": 3 } },
        "next": "night2_reply_seo_2"
    },
    "night2_reply_seo_2": {
        "characters": { "center": { "src": "assets/images/characters/seyoun_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_seo_3"
    },
    "night2_reply_seo_3": {
        "characters": { "center": { "src": "assets/images/characters/seyoun_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_seo_4"
    },
    "night2_reply_seo_4": {
        "characters": { "center": { "src": "assets/images/characters/seyoun_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_seo_5"
    },
    "night2_reply_seo_5": {
        "characters": { "center": { "src": "assets/images/characters/seyoun_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            { "minAffinity": 30, "next": "night2_reply_seo_react_high" },
            { "minAffinity": 0, "next": "night2_reply_seo_react_default" }
        ],
        "next": "night2_reply_seo_react_default"
    },
    "night2_reply_seo_react_high": {
        "characters": { "center": { "src": "assets/images/characters/seyoun_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "stats": { "Seoyeon": { "affinity": 2 } },
        "setFlags": ["night2_replied_seo"],
        "next": "night2_seo_freetalk"
    },
    "night2_reply_seo_react_default": {
        "characters": { "center": { "src": "assets/images/characters/seyoun_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlags": ["night2_replied_seo"],
        "next": "night2_seo_freetalk"
    },
    "night2_reply_yuna_1": {
        "background": "assets/images/background/room_my.png",
        "characters": { "center": { "src": "assets/images/characters/yuna_normal.png", "opacity": 0.35 } },
        "night": true,
        "stats": { "Yuna": { "affinity": 3 } },
        "next": "night2_reply_yuna_2"
    },
    "night2_reply_yuna_2": {
        "characters": { "center": { "src": "assets/images/characters/yuna_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_yuna_3"
    },
    "night2_reply_yuna_3": {
        "characters": { "center": { "src": "assets/images/characters/yuna_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_yuna_4"
    },
    "night2_reply_yuna_4": {
        "characters": { "center": { "src": "assets/images/characters/yuna_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_yuna_5"
    },
    "night2_reply_yuna_5": {
        "characters": { "center": { "src": "assets/images/characters/yuna_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_yuna_6"
    },
    "night2_reply_yuna_6": {
        "characters": { "center": { "src": "assets/images/characters/yuna_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_yuna_7"
    },
    "night2_reply_yuna_7": {
        "characters": { "center": { "src": "assets/images/characters/yuna_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "affinityChar": "Yuna",
        "affinityBranches": [
            { "minAffinity": 30, "next": "night2_reply_yuna_react_high" },
            { "minAffinity": 0, "next": "night2_reply_yuna_react_default" }
        ],
        "next": "night2_reply_yuna_react_default"
    },
    "night2_reply_yuna_react_high": {
        "characters": { "center": { "src": "assets/images/characters/yuna_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "stats": { "Yuna": { "affinity": 2 } },
        "setFlags": ["night2_replied_yuna"],
        "next": "night2_yuna_freetalk"
    },
    "night2_reply_yuna_react_default": {
        "characters": { "center": { "src": "assets/images/characters/yuna_normal.png", "opacity": 0.35 } },
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlags": ["night2_replied_yuna"],
        "next": "night2_yuna_freetalk"
    },
    "night2_end_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night2_flashback_1"
    },
    "night2_flashback_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night2_flashback_2"
    },
    "night2_flashback_2": {
        "background": "assets/images/background/sojeong_flashback.png",
        "character": null,
        "night": true,
        "next": "night2_flashback_3"
    },
    "night2_flashback_3": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night2_flashback_4"
    },
    "night2_flashback_4": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night2_flashback_5"
    },
    "night2_flashback_5": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night2_flashback_6"
    },
    "night2_flashback_6": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night2_flashback_7"
    },
    "night2_flashback_7": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night2_flashback_8"
    },
    "night2_flashback_8": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night2_end_2"
    },
    "night2_end_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night2_end_3"
    },
    "night2_end_3": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night2_end_4"
    },
    "night2_end_4": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "fade": true,
        "changeDay": 3,
        "next": "morning3_start"
    }
,
    "night2_seo_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "next": "night2_hidden_check"
    }
,
    "night2_dain_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "night2_hidden_check"
    }
,
    "night2_yuna_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "night2_hidden_check"
    },

    // =========================================================================
    // HIDDEN ROUTE - Day 2 Night messages
    // =========================================================================
    "night2_hidden_check": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "branches": [
            { "condition": "homeroom_day2", "next": "night2_hidden_homeroom_1" },
            { "condition": "nurse_day2", "next": "night2_hidden_nurse_1" },
            { "next": "night2_end_1" }
        ]
    },
    "night2_hidden_homeroom_1": {
        "background": "assets/images/background/room_my.png",
        "characters": { "center": { "src": "assets/images/characters/teacher_normal.png", "opacity": 0.35 } },
        "night": true,
        "next": "night2_hidden_homeroom_2"
    },
    "night2_hidden_homeroom_2": {
        "background": "assets/images/background/room_my.png",
        "characters": { "center": { "src": "assets/images/characters/teacher_normal.png", "opacity": 0.35 } },
        "night": true,
        "next": "night2_hidden_homeroom_3"
    },
    "night2_hidden_homeroom_3": {
        "background": "assets/images/background/room_my.png",
        "characters": { "center": { "src": "assets/images/characters/teacher_normal.png", "opacity": 0.35 } },
        "night": true,
        "branches": [
            { "condition": "nurse_day2", "next": "night2_hidden_nurse_1" },
            { "next": "night2_end_1" }
        ]
    },
    "night2_hidden_nurse_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night2_hidden_nurse_2"
    },
    "night2_hidden_nurse_2": {
        "background": "assets/images/background/room_my.png",
        "characters": { "center": { "src": "assets/images/characters/nurse_normal.png", "opacity": 0.35 } },
        "night": true,
        "next": "night2_end_1"
    },
});
