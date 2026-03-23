/**
 * ============================================================================
 * CUPID - day3_4_night
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[3]) SCENARIO[3] = {};

Object.assign(SCENARIO[3], {
    "night3_start": {
        "background": "assets/images/background/room_my.png",
        "bgm": "night1.mp3",
        "character": null,
        "night": true,
        "next": "night3_start_2"
    },
    "night3_start_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "branches": [
            {
                "next": "night3_cheat_msg_1",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "night3_faithful_check"
            }
        ]
    },
    "night3_faithful_check": {
        "character": null,
        "night": true,
        "branches": [
            {
                "next": "night3_faithful_msg_seo_1",
                "condition": "seoyeon_day3_event"
            },
            {
                "next": "night3_faithful_msg_yuna_1",
                "condition": "yuna_day3_event"
            },
            {
                "next": "night3_faithful_msg_dain_1",
                "condition": "dain_day3_event"
            },
            {
                "next": "night3_dream_1"
            }
        ]
    },
    "night3_faithful_msg_seo_1": {
        "characters": { "center": { "src": "assets/images/characters/seyoun_normal.png", "opacity": 0.35 } },
        "night": true,
        "condition": "seoyeon_day3_event",
        "next": "night3_faithful_msg_seo_2"
    },
    "night3_faithful_msg_seo_2": {
        "characters": { "center": { "src": "assets/images/characters/seyoun_normal.png", "opacity": 0.35 } },
        "night": true,
        "next": "night3_faithful_msg_seo_3"
    },
    "night3_faithful_msg_seo_3": {
        "characters": { "center": { "src": "assets/images/characters/seyoun_normal.png", "opacity": 0.35 } },
        "night": true,
        "next": "night3_dream_1"
    },
    "night3_faithful_msg_yuna_1": {
        "characters": { "center": { "src": "assets/images/characters/yuna_normal.png", "opacity": 0.35 } },
        "night": true,
        "condition": "yuna_day3_event",
        "next": "night3_faithful_msg_yuna_2"
    },
    "night3_faithful_msg_yuna_2": {
        "characters": { "center": { "src": "assets/images/characters/yuna_normal.png", "opacity": 0.35 } },
        "night": true,
        "next": "night3_dream_1"
    },
    "night3_faithful_msg_dain_1": {
        "characters": { "center": { "src": "assets/images/characters/dain_normal.png", "opacity": 0.35 } },
        "night": true,
        "condition": "dain_day3_event",
        "next": "night3_faithful_msg_dain_2"
    },
    "night3_faithful_msg_dain_2": {
        "characters": { "center": { "src": "assets/images/characters/dain_normal.png", "opacity": 0.35 } },
        "night": true,
        "next": "night3_faithful_msg_dain_3"
    },
    "night3_faithful_msg_dain_3": {
        "character": null,
        "night": true,
        "next": "night3_dream_1"
    },
    "night3_dream_1": {
        "character": null,
        "night": true,
        "next": "night3_dream_2"
    },
    "night3_dream_2": {
        "character": null,
        "night": true,
        "next": "night3_faithful_reflect_1"
    },
    "night3_faithful_reflect_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night3_faithful_reflect_2"
    },
    "night3_faithful_reflect_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night3_faithful_reflect_3"
    },
    "night3_faithful_reflect_3": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night3_faithful_reflect_4"
    },
    "night3_faithful_reflect_4": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night3_dream_3"
    },
    "night3_dream_3": {
        "character": null,
        "night": true,
        "fade": true,
        "branches": [
            { "condition": "seoyeon_day3_event", "next": "night3_dream_seo_bonus" },
            { "condition": "yuna_day3_event", "next": "night3_dream_yuna_bonus" },
            { "condition": "dain_day3_event", "next": "night3_dream_dain_bonus" },
            { "next": "night3_end" }
        ]
    },
    "night3_dream_seo_bonus": {
        "character": null,
        "night": true,
        "fade": true,
        "stats": { "Seoyeon": { "affinity": 10 }, "Dain": { "affinity": -5 }, "Yuna": { "affinity": -5 } },
        "next": "night3_end"
    },
    "night3_dream_yuna_bonus": {
        "character": null,
        "night": true,
        "fade": true,
        "stats": { "Yuna": { "affinity": 10 }, "Seoyeon": { "affinity": -5 }, "Dain": { "affinity": -5 } },
        "next": "night3_end"
    },
    "night3_dream_dain_bonus": {
        "character": null,
        "night": true,
        "fade": true,
        "stats": { "Dain": { "affinity": 10 }, "Seoyeon": { "affinity": -5 }, "Yuna": { "affinity": -5 } },
        "next": "night3_end"
    },
    "night3_cheat_msg_1": {
        "character": null,
        "night": true,
        "condition": "day3_has_multiple_dates",
        "next": "night3_cheat_msg_2"
    },
    "night3_cheat_msg_2": {
        "characters": { "center": { "src": "assets/images/characters/seyoun_normal.png", "opacity": 0.35 } },
        "night": true,
        "next": "night3_cheat_msg_3"
    },
    "night3_cheat_msg_3": {
        "characters": { "center": { "src": "assets/images/characters/seyoun_normal.png", "opacity": 0.35 } },
        "night": true,
        "next": "night3_cheat_msg_4"
    },
    "night3_cheat_msg_4": {
        "characters": { "center": { "src": "assets/images/characters/yuna_normal.png", "opacity": 0.35 } },
        "night": true,
        "next": "night3_cheat_msg_5"
    },
    "night3_cheat_msg_5": {
        "characters": { "center": { "src": "assets/images/characters/yuna_normal.png", "opacity": 0.35 } },
        "night": true,
        "next": "night3_cheat_msg_6"
    },
    "night3_cheat_msg_6": {
        "characters": { "center": { "src": "assets/images/characters/yuna_normal.png", "opacity": 0.35 } },
        "night": true,
        "next": "night3_cheat_msg_dain_1"
    },
    "night3_cheat_msg_dain_1": {
        "characters": { "center": { "src": "assets/images/characters/dain_normal.png", "opacity": 0.35 } },
        "night": true,
        "next": "night3_cheat_msg_7"
    },
    "night3_cheat_msg_7": {
        "character": null,
        "night": true,
        "next": "night3_nightmare_1"
    },
    "night3_nightmare_1": {
        "background": "assets/images/background/school_back.png",
        "bgm": "mystery.mp3",
        "character": null,
        "night": true,
        "next": "night3_nightmare_2"
    },
    "night3_nightmare_2": {
        "character": null,
        "night": true,
        "next": "night3_nightmare_3"
    },
    "night3_nightmare_3": {
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "next": "night3_nightmare_4"
    },
    "night3_nightmare_4": {
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "night3_nightmare_5"
    },
    "night3_nightmare_5": {
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "night3_nightmare_6"
    },
    "night3_nightmare_6": {
        "character": null,
        "night": true,
        "next": "night3_nightmare_choice"
    },
    "night3_nightmare_choice": {
        "character": null,
        "night": true,
        "choices": [
            {
                "next": "night3_nightmare_seo"
            },
            {
                "next": "night3_nightmare_yuna"
            },
            {
                "next": "night3_nightmare_dain"
            }
        ]
    },
    "night3_nightmare_seo": {
        "character": null,
        "night": true,
        "next": "night3_nightmare_end"
    },
    "night3_nightmare_yuna": {
        "character": null,
        "night": true,
        "next": "night3_nightmare_end"
    },
    "night3_nightmare_dain": {
        "character": null,
        "night": true,
        "next": "night3_nightmare_end"
    },
    "night3_nightmare_end": {
        "character": null,
        "night": true,
        "next": "night3_nightmare_end_2"
    },
    "night3_nightmare_end_2": {
        "character": null,
        "night": true,
        "next": "night3_nightmare_end_3"
    },
    "night3_nightmare_end_3": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night3_cheat_reflect_1"
    },
    "night3_cheat_reflect_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night3_cheat_reflect_2"
    },
    "night3_cheat_reflect_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night3_cheat_reflect_3"
    },
    "night3_cheat_reflect_3": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night3_cheat_reflect_4"
    },
    "night3_cheat_reflect_4": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night3_cheat_reflect_5"
    },
    "night3_cheat_reflect_5": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night3_nightmare_end_4"
    },
    "night3_nightmare_end_4": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "night3_end"
    },
    "night3_end": {
        "character": null,
        "night": true,
        "fade": true,
        "changeDay": 4,
        "next": "morning4_start"
    }
});
