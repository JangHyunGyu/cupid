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
        "next": "night2_msg_2"
    },
    "night2_msg_2": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_msg_3"
    },
    "night2_msg_3": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_msg_4"
    },
    "night2_msg_4": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_msg_5"
    },
    "night2_msg_5": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_msg_6"
    },
    "night2_msg_6": {
        "character": null,
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
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "stats": { "Dain": { "affinity": 3 } },
        "next": "night2_reply_dain_2"
    },
    "night2_reply_dain_2": {
        "character": "assets/images/characters/dain_normal.png",
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_dain_3"
    },
    "night2_reply_dain_3": {
        "character": "assets/images/characters/dain_normal.png",
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_dain_4"
    },
    "night2_reply_dain_4": {
        "character": "assets/images/characters/dain_normal.png",
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_dain_5"
    },
    "night2_reply_dain_5": {
        "character": "assets/images/characters/dain_normal.png",
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_end_1"
    },
    "night2_reply_seo_1": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "stats": { "Seoyeon": { "affinity": 3 } },
        "next": "night2_reply_seo_2"
    },
    "night2_reply_seo_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_seo_3"
    },
    "night2_reply_seo_3": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_seo_4"
    },
    "night2_reply_seo_4": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_seo_5"
    },
    "night2_reply_seo_5": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_end_1"
    },
    "night2_reply_yuna_1": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "stats": { "Yuna": { "affinity": 3 } },
        "next": "night2_reply_yuna_2"
    },
    "night2_reply_yuna_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_yuna_3"
    },
    "night2_reply_yuna_3": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_yuna_4"
    },
    "night2_reply_yuna_4": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_yuna_5"
    },
    "night2_reply_yuna_5": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_yuna_6"
    },
    "night2_reply_yuna_6": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_reply_yuna_7"
    },
    "night2_reply_yuna_7": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night2_end_1"
    },
    "night2_end_1": {
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
});
