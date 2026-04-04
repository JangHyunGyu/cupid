/**
 * ============================================================================
 * CUPID - day3_4_night
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[3]) SCENARIO[3] = {};

(() => {
    const scenes = {
    "night3_start": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "bgm": "night1.mp3",
        "next": "night3_start_2"
    },
    "night3_start_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "day3_has_multiple_dates", "next": "night3_cheat_msg_1" },
            { "next": "night3_faithful_check" }
        ]
    },
    "night3_faithful_check": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "seoyeon_day3_event", "next": "night3_faithful_msg_seo_1" },
            { "condition": "yuna_day3_event", "next": "night3_faithful_msg_yuna_1" },
            { "condition": "dain_day3_event", "next": "night3_faithful_msg_dain_1" },
            { "next": "night3_dream_1" }
        ]
    },
    "night3_faithful_msg_seo_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night3_faithful_msg_seo_2"
    },
    "night3_faithful_msg_seo_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night3_faithful_msg_seo_3"
    },
    "night3_faithful_msg_seo_3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night3_dream_1"
    },
    "night3_faithful_msg_yuna_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night3_faithful_msg_yuna_2"
    },
    "night3_faithful_msg_yuna_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night3_faithful_msg_yuna_2_ins"
    },
    "night3_faithful_msg_yuna_2_ins": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night3_dream_1"
    },
    "night3_faithful_msg_dain_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night3_faithful_msg_dain_2"
    },
    "night3_faithful_msg_dain_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night3_faithful_msg_dain_3"
    },
    "night3_faithful_msg_dain_3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night3_dream_1"
    },
    "night3_dream_1": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "night3_dream_2"
    },
    "night3_dream_2": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "night3_dream_2_ins"
    },
    "night3_dream_2_ins": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "night3_faithful_reflect_1"
    },
    "night3_faithful_reflect_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_faithful_reflect_2"
    },
    "night3_faithful_reflect_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_faithful_reflect_2_ins"
    },
    "night3_faithful_reflect_2_ins": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_faithful_reflect_2_ins2"
    },
    "night3_faithful_reflect_2_ins2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_faithful_reflect_2_ins3"
    },
    "night3_faithful_reflect_2_ins3": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_faithful_reflect_2_ins4"
    },
    "night3_faithful_reflect_2_ins4": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_faithful_reflect_2_ins5"
    },
    "night3_faithful_reflect_2_ins5": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_faithful_reflect_2_ins6"
    },
    "night3_faithful_reflect_2_ins6": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_faithful_reflect_3"
    },
    "night3_faithful_reflect_3": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_faithful_reflect_3_ins"
    },
    "night3_faithful_reflect_3_ins": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_faithful_reflect_4"
    },
    "night3_faithful_reflect_4": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_faithful_reflect_4_ins"
    },
    "night3_faithful_reflect_4_ins": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_faithful_reflect_4_ins2"
    },
    "night3_faithful_reflect_4_ins2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_faithful_reflect_4_ins3"
    },
    "night3_faithful_reflect_4_ins3": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_faithful_reflect_4_ins6"
    },
    "night3_faithful_reflect_4_ins6": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_dream_3"
    },
    "night3_dream_3": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "seoyeon_day3_event", "next": "night3_dream_seo_bonus" },
            { "condition": "yuna_day3_event", "next": "night3_dream_yuna_bonus" },
            { "condition": "dain_day3_event", "next": "night3_dream_dain_bonus" },
            { "next": "night3_end" }
        ]
    },
    "night3_dream_seo_bonus": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "stats": {"Seoyeon":{"affinity":9}},
        "next": "night3_end"
    },
    "night3_dream_yuna_bonus": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "stats": {"Yuna":{"affinity":9}},
        "next": "night3_end"
    },
    "night3_dream_dain_bonus": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "stats": {"Dain":{"affinity":9}},
        "next": "night3_end"
    },
    "night3_cheat_msg_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_cheat_msg_2"
    },
    "night3_cheat_msg_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night3_cheat_msg_3"
    },
    "night3_cheat_msg_3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night3_cheat_msg_3_ins"
    },
    "night3_cheat_msg_3_ins": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "night3_cheat_msg_4"
    },
    "night3_cheat_msg_4": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night3_cheat_msg_4_ins"
    },
    "night3_cheat_msg_4_ins": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night3_cheat_msg_5"
    },
    "night3_cheat_msg_5": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night3_cheat_msg_6"
    },
    "night3_cheat_msg_6": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "night3_cheat_msg_dain_1"
    },
    "night3_cheat_msg_dain_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night3_cheat_msg_7"
    },
    "night3_cheat_msg_7": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "night3_nightmare_1"
    },
    "night3_nightmare_1": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "bgm": "mystery.mp3",
        "next": "night3_nightmare_2"
    },
    "night3_nightmare_2": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "night3_nightmare_2_ins"
    },
    "night3_nightmare_2_ins": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "night3_nightmare_3"
    },
    "night3_nightmare_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "night3_nightmare_3_ins"
    },
    "night3_nightmare_3_ins": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "night3_nightmare_4"
    },
    "night3_nightmare_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "night3_nightmare_4_ins"
    },
    "night3_nightmare_4_ins": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "night3_nightmare_5"
    },
    "night3_nightmare_5": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "night3_nightmare_6"
    },
    "night3_nightmare_6": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "night3_nightmare_choice"
    },
    "night3_nightmare_choice": {
        "background": "assets/images/background/school.png",
        "character": null,
        "choices": [
            { "next": "night3_nightmare_seo" },
            { "next": "night3_nightmare_yuna" },
            { "next": "night3_nightmare_dain" }
        ]
    },
    "night3_nightmare_seo": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_nightmare_end"
    },
    "night3_nightmare_yuna": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_nightmare_end"
    },
    "night3_nightmare_dain": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_nightmare_end"
    },
    "night3_nightmare_end": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_nightmare_end_2"
    },
    "night3_nightmare_end_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_nightmare_end_3"
    },
    "night3_nightmare_end_3": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_cheat_reflect_1"
    },
    "night3_cheat_reflect_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_cheat_reflect_2"
    },
    "night3_cheat_reflect_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_cheat_reflect_3"
    },
    "night3_cheat_reflect_3": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_cheat_reflect_3_ins"
    },
    "night3_cheat_reflect_3_ins": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_cheat_reflect_3_ins2"
    },
    "night3_cheat_reflect_3_ins2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_cheat_reflect_3_ins3"
    },
    "night3_cheat_reflect_3_ins3": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_cheat_reflect_3_ins4"
    },
    "night3_cheat_reflect_3_ins4": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_cheat_reflect_3_ins5"
    },
    "night3_cheat_reflect_3_ins5": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_cheat_reflect_3_ins6"
    },
    "night3_cheat_reflect_3_ins6": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_cheat_reflect_3_ins7"
    },
    "night3_cheat_reflect_3_ins7": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_cheat_reflect_4"
    },
    "night3_cheat_reflect_4": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_cheat_reflect_5"
    },
    "night3_cheat_reflect_5": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_cheat_reflect_5_ins"
    },
    "night3_cheat_reflect_5_ins": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_nightmare_end_4"
    },
    "night3_nightmare_end_4": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "night3_end"
    },
    "night3_end": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "morning4_start"
    }
    };
    for (const scene of Object.values(scenes)) {
        if (scene && typeof scene === 'object') {
            Object.defineProperty(scene, "__sourceFile", {
                value: "day3_4_night",
                enumerable: false
            });
        }
    }
    Object.assign(SCENARIO[3], scenes);
})();
