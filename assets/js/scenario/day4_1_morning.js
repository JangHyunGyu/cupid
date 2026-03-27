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
        "bgm": "morning.mp3",
        "character": null,
        "next": "minsu_cheer_1"
    },
    "minsu_cheer_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "minsu_cheer_2"
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
        "character": null,
        "next": "morning4_start_2"
    },
    "morning4_start_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            {
                "next": "morning4_seo_msg_1",
                "condition": "route_seoyeon"
            },
            {
                "next": "morning4_yuna_msg_1",
                "condition": "route_yuna"
            },
            {
                "next": "morning4_dain_msg_1",
                "condition": "route_dain"
            },
            {
                "next": "morning4_hidden_check"
            }
        ]
    },
    "morning4_seo_msg_1": {
        "background": "assets/images/background/room_my.png",
        "characters": { "center": { "src": "assets/images/characters/seyoun_normal.png", "opacity": 0.35 } },
        "next": "morning4_hidden_check"
    },
    "morning4_yuna_msg_1": {
        "background": "assets/images/background/room_my.png",
        "characters": { "center": { "src": "assets/images/characters/yuna_normal.png", "opacity": 0.35 } },
        "next": "morning4_hidden_check"
    },
    "morning4_dain_msg_1": {
        "background": "assets/images/background/room_my.png",
        "characters": { "center": { "src": "assets/images/characters/dain_normal.png", "opacity": 0.35 } },
        "next": "morning4_hidden_check"
    },
    "morning4_hidden_check": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "homeroom_day3", "next": "morning4_manuscript_check" },
            { "condition": "nurse_route_unlocked && nurse_day4", "next": "hidden_nurse_d4_morning_1" },
            { "next": "hidden_nurse_d4_check" }
        ]
    },
    "morning4_manuscript_check": {
        "background": "assets/images/background/room_my.png",
        "character": null,
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

    // === HIDDEN Day 4 담임 카페 ===
    "hidden_homeroom_d4_1": {
        "background": "assets/images/background/street.png",
        "bgm": "morning.mp3",
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
        "next": "hidden_homeroom_d4_4"
    },
    "hidden_homeroom_d4_4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_5"
    },
    "hidden_homeroom_d4_5": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_choice"
    },
    "hidden_homeroom_d4_choice": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "hidden_homeroom_d4_cafe_1", "stats": { "Teacher": { "affinity": 12 } } },
            { "next": "hidden_homeroom_d4_decline", "stats": { "Teacher": { "affinity": 5 } } }
        ]
    },
    "hidden_homeroom_d4_cafe_1": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlags": ["homeroom_day4_cafe"],
        "next": "hidden_homeroom_d4_cafe_2"
    },
    "hidden_homeroom_d4_cafe_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_3"
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
            {
                "next": "hidden_homeroom_d4_cafe_choice_a",
                "stats": { "Teacher": { "affinity": 12 } }
            },
            {
                "next": "hidden_homeroom_d4_cafe_choice_b",
                "stats": { "Teacher": { "affinity": 5 } }
            }
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
        "next": "hidden_homeroom_d4_cafe_5"
    },
    "hidden_homeroom_d4_cafe_5": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_6"
    },
    "hidden_homeroom_d4_cafe_6": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlag": "homeroom_day4",
        "next": "hidden_homeroom_d4_freetalk"
    },
    "hidden_homeroom_d4_decline": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_nurse_d4_check"
    },
    "hidden_homeroom_d4_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_nurse_d4_check"
    },

    // === HIDDEN Day 4 보건 행사 도움 ===
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
        "bgm": "morning.mp3",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_2"
    },
    "hidden_nurse_d4_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_3"
    },
    "hidden_nurse_d4_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4"
    },
    "hidden_nurse_d4_4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_5"
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
            {
                "next": "hidden_nurse_d4_name_choice_a",
                "stats": { "Nurse": { "affinity": 12 } }
            },
            {
                "next": "hidden_nurse_d4_name_choice_b",
                "stats": { "Nurse": { "affinity": 5 } }
            }
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
        "next": "hidden_nurse_d4_choice"
    },
    "hidden_nurse_d4_choice": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            { "next": "hidden_nurse_d4_meal_walk", "stats": { "Nurse": { "affinity": 12 } } },
            { "next": "hidden_nurse_d4_pass", "stats": { "Nurse": { "affinity": 3 } } }
        ]
    },
    "hidden_nurse_d4_meal_walk": {
        "background": "assets/images/background/store.png",
        "character": null,
        "next": "hidden_nurse_d4_meal_1"
    },
    "hidden_nurse_d4_meal_1": {
        "background": "assets/images/background/store.png",
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
        "next": "hidden_nurse_d4_meal_3"
    },
    "hidden_nurse_d4_meal_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_4"
    },
    "hidden_nurse_d4_meal_4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlags": ["nurse_day4", "nurse_day4_help"],
        "next": "hidden_nurse_d4_freetalk"
    },
    "hidden_nurse_d4_pass": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "morning4_end"
    },
    "hidden_nurse_d4_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "morning4_end"
    },

    // === HIDDEN Day 4 보건선생님 주말 아침 전용 씬 (nurse_day4_afterschool) ===
    "hidden_nurse_d4_morning_1": {
        "background": "assets/images/background/nurse_room.png",
        "bgm": "morning.mp3",
        "character": "assets/images/characters/nurse_normal.png",
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
            {
                "next": "hidden_nurse_d4_morning_choice_a",
                "stats": { "Nurse": { "affinity": 10 } }
            },
            {
                "next": "hidden_nurse_d4_morning_choice_b",
                "stats": { "Nurse": { "affinity": 5 } }
            }
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
            {"condition": "route_dain", "next": "date_dain_1"},
            {"condition": "route_yuna", "next": "date_yuna_1"},
            {"condition": "route_seoyeon", "next": "date_seo_1"},
            {"condition": "accepted_dain_date", "next": "date_dain_1"},
            {"condition": "accepted_yuna_date", "next": "date_yuna_1"},
            {"condition": "accepted_seoyeon_date", "next": "date_seo_1"}
        ]
    }
});
