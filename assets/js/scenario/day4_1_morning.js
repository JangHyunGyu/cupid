/**
 * ============================================================================
 * CUPID - day4_1_morning
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

(() => {
    const scenes = {
    "morning4_start": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "bgm": "morning.mp3",
        "next": "morning4_nightmare_check"
    },
    "morning4_nightmare_check": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "nightmare_chose_seoyeon", "next": "morning4_nightmare_seo" },
            { "condition": "nightmare_chose_yuna", "next": "morning4_nightmare_yuna" },
            { "condition": "nightmare_chose_dain", "next": "morning4_nightmare_dain" },
            { "next": "minsu_cheer_1" }
        ]
    },
    "morning4_nightmare_seo": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "morning4_nightmare_after"
    },
    "morning4_nightmare_yuna": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "morning4_nightmare_after"
    },
    "morning4_nightmare_dain": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "morning4_nightmare_after"
    },
    "morning4_nightmare_after": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "minsu_cheer_1"
    },
    "minsu_cheer_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "minsu_cheer_1_b"
    },
    "minsu_cheer_1_b": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/minsu_normal.png","opacity":0.35}},
        "next": "minsu_cheer_1_c"
    },
    "minsu_cheer_1_c": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/minsu_normal.png","opacity":0.35}},
        "next": "minsu_cheer_1_d"
    },
    "minsu_cheer_1_d": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/minsu_normal.png","opacity":0.35}},
        "next": "minsu_cheer_2"
    },
    "minsu_cheer_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/minsu_normal.png","opacity":0.35}},
        "next": "minsu_cheer_3"
    },
    "minsu_cheer_3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/minsu_normal.png","opacity":0.35}},
        "next": "minsu_cheer_4_branch"
    },
    "minsu_cheer_4_branch": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "day3_has_multiple_dates", "next": "minsu_cheer_4_c" },
            { "next": "minsu_cheer_4_ins_single" }
        ]
    },
    "minsu_cheer_4_ins_single": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/minsu_normal.png","opacity":0.35}},
        "next": "morning4_start_2"
    },
    "minsu_cheer_4_c": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/minsu_normal.png","opacity":0.35}},
        "next": "minsu_cheer_4_d"
    },
    "minsu_cheer_4_d": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/minsu_normal.png","opacity":0.35}},
        "next": "minsu_cheer_4_e"
    },
    "minsu_cheer_4_e": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/minsu_normal.png","opacity":0.35}},
        "next": "morning4_start_2"
    },
    "morning4_start_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "route_seoyeon", "next": "morning4_seo_msg_1" },
            { "condition": "route_yuna", "next": "morning4_yuna_msg_1" },
            { "condition": "route_dain", "next": "morning4_dain_msg_1" },
            { "next": "morning4_fallback_msg" }
        ]
    },
    "morning4_seo_msg_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_pout.png","opacity":0.35}},
        "next": "morning4_seo_msg_1_b"
    },
    "morning4_seo_msg_1_b": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_pout.png","opacity":0.35}},
        "next": "morning4_seo_msg_1_c"
    },
    "morning4_seo_msg_1_c": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_pout.png","opacity":0.35}},
        "next": "morning4_hidden_check"
    },
    "morning4_yuna_msg_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "morning4_yuna_msg_1_b"
    },
    "morning4_yuna_msg_1_b": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "morning4_yuna_msg_single"
    },
    "morning4_yuna_msg_single": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "morning4_hidden_check"
    },
    "morning4_dain_msg_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_sweat.png","opacity":0.35}},
        "next": "morning4_hidden_check"
    },
    "morning4_fallback_msg": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "morning4_hidden_check"
    },
    "morning4_hidden_check": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "homeroom_day3", "next": "morning4_manuscript_check" },
            { "condition": "nurse_day3", "next": "hidden_nurse_d4_morning_1" },
            { "next": "hidden_nurse_d4_check" }
        ]
    },
    "morning4_manuscript_check": {
        "background": "assets/images/background/room_my.png",
        "branches": [
            { "condition": "discovered_manuscript", "next": "hidden_homeroom_d4_1" },
            { "next": "hidden_homeroom_d4_skip" }
        ]
    },
    "hidden_homeroom_d4_skip": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "hidden_nurse_d4_check"
    },
    "hidden_homeroom_d4_1": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "bgm": "morning.mp3",
        "affinityGuard": {"character":"Teacher","minAffinity":15,"fallback":"hidden_homeroom_d4_low"},
        "next": "hidden_homeroom_d4_1_b"
    },
    "hidden_homeroom_d4_1_b": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_2"
    },
    "hidden_homeroom_d4_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_3"
    },
    "hidden_homeroom_d4_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_3_b"
    },
    "hidden_homeroom_d4_3_b": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d4_3_c"
    },
    "hidden_homeroom_d4_3_c": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d4_3_d"
    },
    "hidden_homeroom_d4_3_d": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d4_3_e"
    },
    "hidden_homeroom_d4_3_e": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_4"
    },
    "hidden_homeroom_d4_4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_4_b"
    },
    "hidden_homeroom_d4_4_b": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_4_c"
    },
    "hidden_homeroom_d4_4_c": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_4_d"
    },
    "hidden_homeroom_d4_4_d": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_angry.png",
        "next": "hidden_homeroom_d4_4_e"
    },
    "hidden_homeroom_d4_4_e": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d4_5"
    },
    "hidden_homeroom_d4_5": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_5_b"
    },
    "hidden_homeroom_d4_5_b": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_5_c"
    },
    "hidden_homeroom_d4_5_c": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_5_d"
    },
    "hidden_homeroom_d4_5_d": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d4_choice"
    },
    "hidden_homeroom_d4_choice": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "hidden_homeroom_d4_cafe_1", "stats": {"Teacher":{"affinity":9}} },
            { "next": "hidden_homeroom_d4_decline", "stats": {"Teacher":{"affinity":4}} }
        ]
    },
    "hidden_homeroom_d4_cafe_1": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlags": ["homeroom_day4_cafe"],
        "next": "hidden_homeroom_d4_cafe_1_b"
    },
    "hidden_homeroom_d4_cafe_1_b": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_1_c"
    },
    "hidden_homeroom_d4_cafe_1_c": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_1_d"
    },
    "hidden_homeroom_d4_cafe_1_d": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d4_cafe_1_e"
    },
    "hidden_homeroom_d4_cafe_1_e": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d4_cafe_1_f"
    },
    "hidden_homeroom_d4_cafe_1_f": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_2"
    },
    "hidden_homeroom_d4_cafe_2": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_2_b"
    },
    "hidden_homeroom_d4_cafe_2_b": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_2_c"
    },
    "hidden_homeroom_d4_cafe_2_c": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d4_cafe_2_d"
    },
    "hidden_homeroom_d4_cafe_2_d": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d4_cafe_2_e"
    },
    "hidden_homeroom_d4_cafe_2_e": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_3"
    },
    "hidden_homeroom_d4_cafe_3": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_choice"
    },
    "hidden_homeroom_d4_cafe_choice": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "hidden_homeroom_d4_cafe_choice_a", "stats": {"Teacher":{"affinity":9}} },
            { "next": "hidden_homeroom_d4_cafe_choice_b", "stats": {"Teacher":{"affinity":4}} },
            { "next": "hidden_homeroom_d4_cafe_trap", "stats": {"Teacher":{"affinity":-4}} }
        ]
    },
    "hidden_homeroom_d4_cafe_choice_a": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d4_cafe_4"
    },
    "hidden_homeroom_d4_cafe_choice_b": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_4"
    },
    "hidden_homeroom_d4_cafe_trap": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_4"
    },
    "hidden_homeroom_d4_cafe_4": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_4_b"
    },
    "hidden_homeroom_d4_cafe_4_b": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d4_cafe_5"
    },
    "hidden_homeroom_d4_cafe_5": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_5_b"
    },
    "hidden_homeroom_d4_cafe_5_b": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d4_cafe_5_c"
    },
    "hidden_homeroom_d4_cafe_5_c": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d4_cafe_5_d"
    },
    "hidden_homeroom_d4_cafe_5_d": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_5_e"
    },
    "hidden_homeroom_d4_cafe_5_e": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_5_f"
    },
    "hidden_homeroom_d4_cafe_5_f": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d4_cafe_5_g"
    },
    "hidden_homeroom_d4_cafe_5_g": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_5_h"
    },
    "hidden_homeroom_d4_cafe_5_h": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_6"
    },
    "hidden_homeroom_d4_cafe_6": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlags": ["homeroom_day4"],
        "next": "hidden_homeroom_d4_cafe_6_b"
    },
    "hidden_homeroom_d4_cafe_6_b": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_freetalk"
    },
    "hidden_homeroom_d4_freetalk": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "type": "free_talk",
        "maxTurns": 3,
        "next": "hidden_nurse_d4_check"
    },
    "hidden_homeroom_d4_decline": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_decline_b"
    },
    "hidden_homeroom_d4_decline_b": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_nurse_d4_check"
    },
    "hidden_nurse_d4_morning_1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "bgm": "morning.mp3",
        "affinityGuard": {"character":"Nurse","minAffinity":15,"fallback":"hidden_nurse_d4_low"},
        "next": "hidden_nurse_d4_morning_3"
    },
    "hidden_nurse_d4_morning_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_4"
    },
    "hidden_nurse_d4_morning_4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_5"
    },
    "hidden_nurse_d4_morning_5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_6"
    },
    "hidden_nurse_d4_morning_6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_7"
    },
    "hidden_nurse_d4_morning_7": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_8"
    },
    "hidden_nurse_d4_morning_8": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_9"
    },
    "hidden_nurse_d4_morning_9": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_10"
    },
    "hidden_nurse_d4_morning_10": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_11"
    },
    "hidden_nurse_d4_morning_11": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_choice"
    },
    "hidden_nurse_d4_morning_choice": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            { "next": "hidden_nurse_d4_morning_choice_a", "stats": {"Nurse":{"affinity":8}} },
            { "next": "hidden_nurse_d4_morning_choice_b", "stats": {"Nurse":{"affinity":4}} }
        ]
    },
    "hidden_nurse_d4_morning_choice_a": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_12"
    },
    "hidden_nurse_d4_morning_choice_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_12"
    },
    "hidden_nurse_d4_morning_12": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_13"
    },
    "hidden_nurse_d4_morning_13": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlags": ["nurse_day4_afterschool"],
        "next": "hidden_nurse_d4_morning_freetalk"
    },
    "hidden_nurse_d4_morning_freetalk": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_check"
    },
    "hidden_nurse_d4_check": {
        "character": null,
        "branches": [
            { "condition": "nurse_day3", "next": "hidden_nurse_d4_1" },
            { "next": "morning4_end" }
        ]
    },
    "hidden_nurse_d4_1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "bgm": "morning.mp3",
        "affinityGuard": {"character":"Nurse","minAffinity":15,"fallback":"hidden_nurse_d4_low"},
        "next": "hidden_nurse_d4_1_b"
    },
    "hidden_nurse_d4_1_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_2"
    },
    "hidden_nurse_d4_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_2_b"
    },
    "hidden_nurse_d4_2_b": {
        "background": "assets/images/background/nurse_room.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "hidden_nurse_d4_2_c"
    },
    "hidden_nurse_d4_2_c": {
        "background": "assets/images/background/nurse_room.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "hidden_nurse_d4_2_d"
    },
    "hidden_nurse_d4_2_d": {
        "background": "assets/images/background/nurse_room.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "hidden_nurse_d4_2_e"
    },
    "hidden_nurse_d4_2_e": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_2_f"
    },
    "hidden_nurse_d4_2_f": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_2_g"
    },
    "hidden_nurse_d4_2_g": {
        "background": "assets/images/background/nurse_room.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "hidden_nurse_d4_2_h"
    },
    "hidden_nurse_d4_2_h": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "hidden_nurse_d4_3"
    },
    "hidden_nurse_d4_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4"
    },
    "hidden_nurse_d4_4": {
        "background": "assets/images/background/nurse_room.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "hidden_nurse_d4_4_b"
    },
    "hidden_nurse_d4_4_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_c"
    },
    "hidden_nurse_d4_4_c": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_d"
    },
    "hidden_nurse_d4_4_d": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_e"
    },
    "hidden_nurse_d4_4_e": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_f"
    },
    "hidden_nurse_d4_4_f": {
        "background": "assets/images/background/nurse_room.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "hidden_nurse_d4_4_g"
    },
    "hidden_nurse_d4_4_g": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_h"
    },
    "hidden_nurse_d4_4_h": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_i"
    },
    "hidden_nurse_d4_4_i": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_j"
    },
    "hidden_nurse_d4_4_j": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_k"
    },
    "hidden_nurse_d4_4_k": {
        "background": "assets/images/background/nurse_room.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "hidden_nurse_d4_5"
    },
    "hidden_nurse_d4_5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_name_choice"
    },
    "hidden_nurse_d4_name_choice": {
        "background": "assets/images/background/nurse_room.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/nurse_shy.png",
        "choices": [
            { "next": "hidden_nurse_d4_name_choice_a", "stats": {"Nurse":{"affinity":6}} },
            { "next": "hidden_nurse_d4_name_choice_b", "stats": {"Nurse":{"affinity":2}} },
            { "next": "hidden_nurse_d4_name_trap", "stats": {"Nurse":{"affinity":-3}} }
        ]
    },
    "hidden_nurse_d4_name_choice_a": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_6"
    },
    "hidden_nurse_d4_name_choice_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_6"
    },
    "hidden_nurse_d4_name_trap": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_6"
    },
    "hidden_nurse_d4_6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_6_b"
    },
    "hidden_nurse_d4_6_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_6_c"
    },
    "hidden_nurse_d4_6_c": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_6_d"
    },
    "hidden_nurse_d4_6_d": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_choice"
    },
    "hidden_nurse_d4_choice": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            { "next": "hidden_nurse_d4_meal_walk", "stats": {"Nurse":{"affinity":9}} },
            { "next": "hidden_nurse_d4_pass", "stats": {"Nurse":{"affinity":2}} },
            { "next": "hidden_nurse_d4_trap", "stats": {"Nurse":{"affinity":-4}} }
        ]
    },
    "hidden_nurse_d4_meal_walk": {
        "background": "assets/images/background/store.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_1"
    },
    "hidden_nurse_d4_meal_1": {
        "background": "assets/images/background/store.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_1_b"
    },
    "hidden_nurse_d4_meal_1_b": {
        "background": "assets/images/background/store.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_1_c"
    },
    "hidden_nurse_d4_meal_1_c": {
        "background": "assets/images/background/store.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_1b"
    },
    "hidden_nurse_d4_meal_1b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_2"
    },
    "hidden_nurse_d4_meal_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_2_b"
    },
    "hidden_nurse_d4_meal_2_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_3"
    },
    "hidden_nurse_d4_meal_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_3_b"
    },
    "hidden_nurse_d4_meal_3_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_3_c"
    },
    "hidden_nurse_d4_meal_3_c": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_3_d"
    },
    "hidden_nurse_d4_meal_3_d": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_3_e"
    },
    "hidden_nurse_d4_meal_3_e": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_4"
    },
    "hidden_nurse_d4_meal_4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlags": ["nurse_day4","nurse_day4_help"],
        "next": "hidden_nurse_d4_meal_4_b"
    },
    "hidden_nurse_d4_meal_4_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_freetalk"
    },
    "hidden_nurse_d4_pass": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_freetalk"
    },
    "hidden_nurse_d4_trap": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_freetalk"
    },
    "hidden_nurse_d4_freetalk": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "type": "free_talk",
        "maxTurns": 3,
        "next": "morning4_end"
    },
    "morning4_end": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "route_dain", "next": "date_dain_1" },
            { "condition": "route_yuna", "next": "date_yuna_1" },
            { "condition": "route_seoyeon", "next": "date_seo_1" },
            { "condition": "accepted_dain_date", "next": "date_dain_1" },
            { "condition": "accepted_yuna_date", "next": "date_yuna_1" },
            { "condition": "accepted_seoyeon_date", "next": "date_seo_1" },
            { "next": "day4_night_start" }
        ]
    },
    "hidden_homeroom_d4_low": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_nurse_d4_check"
    },
    "hidden_nurse_d4_low": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "morning4_end"
    }
    };
    for (const scene of Object.values(scenes)) {
        if (scene && typeof scene === 'object') {
            Object.defineProperty(scene, "__sourceFile", {
                value: "day4_1_morning",
                enumerable: false
            });
        }
    }
    Object.assign(SCENARIO[4], scenes);
})();
