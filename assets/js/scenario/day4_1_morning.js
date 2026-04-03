/**
 * ============================================================================
 * CUPID - day4_1_morning
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

Object.assign(SCENARIO[4], {
    "morning4_start": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "bgm": "morning.mp3",
        "next": "minsu_cheer_1"
    },
    "minsu_cheer_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "minsu_cheer_1_ins"
    },
    "minsu_cheer_2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "minsu_cheer_3"
    },
    "minsu_cheer_3": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "minsu_cheer_4"
    },
    "minsu_cheer_4": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "minsu_cheer_4_ins"
    },
    "morning4_start_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "route_seoyeon", "next": "morning4_seo_msg_1" },
            { "condition": "route_yuna", "next": "morning4_yuna_msg_1" },
            { "condition": "route_dain", "next": "morning4_dain_msg_1" },
            { "next": "morning4_dain_msg_1_ins" }
        ]
    },
    "morning4_seo_msg_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "morning4_seo_msg_1_ins"
    },
    "morning4_yuna_msg_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "morning4_yuna_msg_1_ins"
    },
    "morning4_dain_msg_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "morning4_hidden_check"
    },
    "morning4_hidden_check": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "homeroom_day3", "next": "morning4_manuscript_check" },
            { "condition": "nurse_day4", "next": "hidden_nurse_d4_morning_1" },
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
        "next": "hidden_homeroom_d4_1_ins"
    },
    "hidden_homeroom_d4_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_3"
    },
    "hidden_homeroom_d4_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_3_ins"
    },
    "hidden_homeroom_d4_4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_4_ins"
    },
    "hidden_homeroom_d4_4_ins": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_4_ins2"
    },
    "hidden_homeroom_d4_4_ins2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_4_ins3"
    },
    "hidden_homeroom_d4_4_ins3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_4_ins4"
    },
    "hidden_homeroom_d4_4_ins4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_5"
    },
    "hidden_homeroom_d4_5": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_5_ins"
    },
    "hidden_homeroom_d4_5_ins": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_5_ins2"
    },
    "hidden_homeroom_d4_5_ins2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_5_ins3"
    },
    "hidden_homeroom_d4_5_ins3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_choice"
    },
    "hidden_homeroom_d4_choice": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "hidden_homeroom_d4_cafe_1", "stats": {"Teacher":{"affinity":12}} },
            { "next": "hidden_homeroom_d4_decline", "stats": {"Teacher":{"affinity":5}} }
        ]
    },
    "hidden_homeroom_d4_cafe_1": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlags": ["homeroom_day4_cafe"],
        "next": "hidden_homeroom_d4_cafe_1_ins"
    },
    "hidden_homeroom_d4_cafe_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_2_ins"
    },
    "hidden_homeroom_d4_cafe_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_choice"
    },
    "hidden_homeroom_d4_cafe_choice": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "hidden_homeroom_d4_cafe_choice_a", "stats": {"Teacher":{"affinity":12}} },
            { "next": "hidden_homeroom_d4_cafe_choice_b", "stats": {"Teacher":{"affinity":5}} }
        ]
    },
    "hidden_homeroom_d4_cafe_choice_a": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d4_cafe_4"
    },
    "hidden_homeroom_d4_cafe_choice_b": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_4"
    },
    "hidden_homeroom_d4_cafe_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_4_ins"
    },
    "hidden_homeroom_d4_cafe_5": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_5_ins"
    },
    "hidden_homeroom_d4_cafe_6": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlags": ["homeroom_day4"],
        "next": "hidden_homeroom_d4_cafe_6_ins"
    },
    "hidden_homeroom_d4_decline": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_decline_ins"
    },
    "hidden_homeroom_d4_freetalk": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "type": "free_talk",
        "next": "hidden_nurse_d4_check"
    },
    "hidden_nurse_d4_check": {
        "background": "assets/images/background/room_my.png",
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
        "next": "hidden_nurse_d4_1_ins"
    },
    "hidden_nurse_d4_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_2_ins"
    },
    "hidden_nurse_d4_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4"
    },
    "hidden_nurse_d4_4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_ins"
    },
    "hidden_nurse_d4_5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_name_choice"
    },
    "hidden_nurse_d4_name_choice": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            { "next": "hidden_nurse_d4_name_choice_a", "stats": {"Nurse":{"affinity":12}} },
            { "next": "hidden_nurse_d4_name_choice_b", "stats": {"Nurse":{"affinity":5}} }
        ]
    },
    "hidden_nurse_d4_name_choice_a": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "hidden_nurse_d4_6"
    },
    "hidden_nurse_d4_name_choice_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_6"
    },
    "hidden_nurse_d4_6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_6_ins"
    },
    "hidden_nurse_d4_choice": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            { "next": "hidden_nurse_d4_meal_walk", "stats": {"Nurse":{"affinity":12}} },
            { "next": "hidden_nurse_d4_pass", "stats": {"Nurse":{"affinity":3}} }
        ]
    },
    "hidden_nurse_d4_meal_walk": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_1"
    },
    "hidden_nurse_d4_meal_1": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_1_ins"
    },
    "hidden_nurse_d4_meal_1b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_2"
    },
    "hidden_nurse_d4_meal_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_2_ins"
    },
    "hidden_nurse_d4_meal_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_3_ins"
    },
    "hidden_nurse_d4_meal_4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlags": ["nurse_day4","nurse_day4_help"],
        "next": "hidden_nurse_d4_meal_4_ins"
    },
    "hidden_nurse_d4_pass": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "morning4_end"
    },
    "hidden_nurse_d4_freetalk": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "type": "free_talk",
        "next": "morning4_end"
    },
    "hidden_nurse_d4_morning_1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "bgm": "morning.mp3",
        "next": "hidden_nurse_d4_morning_2"
    },
    "hidden_nurse_d4_morning_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
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
            { "next": "hidden_nurse_d4_morning_choice_a", "stats": {"Nurse":{"affinity":10}} },
            { "next": "hidden_nurse_d4_morning_choice_b", "stats": {"Nurse":{"affinity":5}} }
        ]
    },
    "hidden_nurse_d4_morning_choice_a": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_shy.png",
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
            { "next": "date_seo_1" }
        ]
    },
    "minsu_cheer_4_ins": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "minsu_cheer_4_ins2"
    },
    "minsu_cheer_4_ins2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "minsu_cheer_4_ins3"
    },
    "minsu_cheer_4_ins3": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "minsu_cheer_4_ins4"
    },
    "minsu_cheer_4_ins4": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "morning4_start_2"
    },
    "minsu_cheer_1_ins": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "minsu_cheer_1_ins2"
    },
    "minsu_cheer_1_ins2": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "minsu_cheer_1_ins3"
    },
    "minsu_cheer_1_ins3": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "minsu_cheer_1_ins4"
    },
    "minsu_cheer_1_ins4": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "minsu_cheer_1_ins5"
    },
    "minsu_cheer_1_ins5": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "minsu_cheer_1_ins6"
    },
    "minsu_cheer_1_ins6": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "minsu_cheer_1_ins7"
    },
    "minsu_cheer_1_ins7": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "minsu_cheer_2"
    },
    "morning4_dain_msg_1_ins": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "morning4_dain_msg_1_ins2"
    },
    "morning4_dain_msg_1_ins2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "morning4_hidden_check"
    },
    "morning4_seo_msg_1_ins": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "morning4_seo_msg_1_ins2"
    },
    "morning4_seo_msg_1_ins2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "morning4_hidden_check"
    },
    "hidden_homeroom_d4_1_ins": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_1_ins2"
    },
    "hidden_homeroom_d4_1_ins2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_2"
    },
    "morning4_yuna_msg_1_ins": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "morning4_yuna_msg_1_ins2"
    },
    "morning4_yuna_msg_1_ins2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "morning4_yuna_msg_1_ins3"
    },
    "morning4_yuna_msg_1_ins3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "morning4_yuna_msg_1_ins4"
    },
    "morning4_yuna_msg_1_ins4": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "morning4_yuna_msg_1_ins5"
    },
    "morning4_yuna_msg_1_ins5": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "morning4_hidden_check"
    },
    "hidden_homeroom_d4_3_ins": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_3_ins2"
    },
    "hidden_homeroom_d4_3_ins2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_3_ins3"
    },
    "hidden_homeroom_d4_3_ins3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_3_ins4"
    },
    "hidden_homeroom_d4_3_ins4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_4"
    },
    "hidden_homeroom_d4_cafe_1_ins": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_1_ins2"
    },
    "hidden_homeroom_d4_cafe_1_ins2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_1_ins3"
    },
    "hidden_homeroom_d4_cafe_1_ins3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_1_ins4"
    },
    "hidden_homeroom_d4_cafe_1_ins4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_1_ins5"
    },
    "hidden_homeroom_d4_cafe_1_ins5": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_2"
    },
    "hidden_homeroom_d4_cafe_2_ins": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_2_ins2"
    },
    "hidden_homeroom_d4_cafe_2_ins2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_2_ins3"
    },
    "hidden_homeroom_d4_cafe_2_ins3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_2_ins4"
    },
    "hidden_homeroom_d4_cafe_2_ins4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_3"
    },
    "hidden_homeroom_d4_cafe_6_ins": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_freetalk"
    },
    "hidden_homeroom_d4_cafe_4_ins": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_5"
    },
    "hidden_homeroom_d4_cafe_5_ins": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_5_ins2"
    },
    "hidden_homeroom_d4_cafe_5_ins2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_5_ins3"
    },
    "hidden_homeroom_d4_cafe_5_ins3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_5_ins4"
    },
    "hidden_homeroom_d4_cafe_5_ins4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_5_ins5"
    },
    "hidden_homeroom_d4_cafe_5_ins5": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_5_ins6"
    },
    "hidden_homeroom_d4_cafe_5_ins6": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_5_ins7"
    },
    "hidden_homeroom_d4_cafe_5_ins7": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_6"
    },
    "hidden_homeroom_d4_decline_ins": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_decline_ins2"
    },
    "hidden_homeroom_d4_decline_ins2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_nurse_d4_check"
    },
    "hidden_nurse_d4_1_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_1_ins2"
    },
    "hidden_nurse_d4_1_ins2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_2"
    },
    "hidden_nurse_d4_2_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_2_ins2"
    },
    "hidden_nurse_d4_2_ins2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_2_ins3"
    },
    "hidden_nurse_d4_2_ins3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_2_ins4"
    },
    "hidden_nurse_d4_2_ins4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_2_ins5"
    },
    "hidden_nurse_d4_2_ins5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_2_ins6"
    },
    "hidden_nurse_d4_2_ins6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_2_ins7"
    },
    "hidden_nurse_d4_2_ins7": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_2_ins8"
    },
    "hidden_nurse_d4_2_ins8": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_3"
    },
    "hidden_nurse_d4_4_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_ins2"
    },
    "hidden_nurse_d4_4_ins2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_ins3"
    },
    "hidden_nurse_d4_4_ins3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_ins4"
    },
    "hidden_nurse_d4_4_ins4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_ins5"
    },
    "hidden_nurse_d4_4_ins5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_ins6"
    },
    "hidden_nurse_d4_4_ins6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_ins7"
    },
    "hidden_nurse_d4_4_ins7": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_ins8"
    },
    "hidden_nurse_d4_4_ins8": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_ins9"
    },
    "hidden_nurse_d4_4_ins9": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_ins10"
    },
    "hidden_nurse_d4_4_ins10": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_ins11"
    },
    "hidden_nurse_d4_4_ins11": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_5"
    },
    "hidden_nurse_d4_6_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_6_ins2"
    },
    "hidden_nurse_d4_6_ins2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_6_ins3"
    },
    "hidden_nurse_d4_6_ins3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_choice"
    },
    "hidden_nurse_d4_meal_1_ins": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_1_ins2"
    },
    "hidden_nurse_d4_meal_1_ins2": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_1b"
    },
    "hidden_nurse_d4_meal_2_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_3"
    },
    "hidden_nurse_d4_meal_3_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_3_ins2"
    },
    "hidden_nurse_d4_meal_3_ins2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_3_ins3"
    },
    "hidden_nurse_d4_meal_3_ins3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_3_ins4"
    },
    "hidden_nurse_d4_meal_3_ins4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_4"
    },
    "hidden_nurse_d4_meal_4_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_4_ins2"
    },
    "hidden_nurse_d4_meal_4_ins2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_freetalk"
    }
});
