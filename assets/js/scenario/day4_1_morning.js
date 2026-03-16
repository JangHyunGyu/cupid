/**
 * ============================================================================
 * CUPID - day4_1_morning
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

Object.assign(SCENARIO[4], {
    "morning4_start": {
        "background": "assets/images/background/student_room.png",
        "bgm": "intro.mp3",
        "character": null,
        "next": "morning4_start_2"
    },
    "morning4_start_2": {
        "background": "assets/images/background/student_room.png",
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
                "next": "morning4_end"
            }
        ]
    },
    "morning4_seo_msg_1": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "condition": "route_seoyeon",
        "next": "morning4_end"
    },
    "morning4_yuna_msg_1": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/yuna_normal.png",
        "condition": "route_yuna",
        "next": "morning4_end"
    },
    "morning4_dain_msg_1": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/dain_normal.png",
        "condition": "route_dain",
        "next": "morning4_end"
    },
    "morning4_hidden_check": {
        "background": "assets/images/background/student_room.png",
        "character": null,
        "branches": [
            { "condition": "homeroom_day3", "next": "hidden_homeroom_d4_1" },
            { "next": "hidden_nurse_d4_check" }
        ]
    },

    // === HIDDEN Day 4 담임 카페 ===
    "hidden_homeroom_d4_1": {
        "background": "assets/images/background/school.png",
        "character": null,
        "condition": "homeroom_day3",
        "next": "hidden_homeroom_d4_2"
    },
    "hidden_homeroom_d4_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_3"
    },
    "hidden_homeroom_d4_3": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "hidden_homeroom_d4_4"
    },
    "hidden_homeroom_d4_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_5"
    },
    "hidden_homeroom_d4_5": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_choice"
    },
    "hidden_homeroom_d4_choice": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "hidden_homeroom_d4_cafe_1", "stats": { "Teacher": { "affinity": 10 } } },
            { "next": "hidden_homeroom_d4_decline", "stats": { "Teacher": { "affinity": 5 } } }
        ]
    },
    "hidden_homeroom_d4_cafe_1": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
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
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlag": "homeroom_day4",
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
        "background": "assets/images/background/student_room.png",
        "character": null,
        "branches": [
            { "condition": "nurse_day3", "next": "hidden_nurse_d4_1" },
            { "next": "morning4_end" }
        ]
    },
    "hidden_nurse_d4_1": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": null,
        "condition": "nurse_day3",
        "next": "hidden_nurse_d4_2"
    },
    "hidden_nurse_d4_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_3"
    },
    "hidden_nurse_d4_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": null,
        "next": "hidden_nurse_d4_4"
    },
    "hidden_nurse_d4_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_5"
    },
    "hidden_nurse_d4_5": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_6"
    },
    "hidden_nurse_d4_6": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_choice"
    },
    "hidden_nurse_d4_choice": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            { "next": "hidden_nurse_d4_meal_1", "stats": { "Nurse": { "affinity": 10 } } },
            { "next": "hidden_nurse_d4_pass", "stats": { "Nurse": { "affinity": 3 } } }
        ]
    },
    "hidden_nurse_d4_meal_1": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_2"
    },
    "hidden_nurse_d4_meal_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_3"
    },
    "hidden_nurse_d4_meal_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_4"
    },
    "hidden_nurse_d4_meal_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlag": "nurse_day4",
        "next": "hidden_nurse_d4_freetalk"
    },
    "hidden_nurse_d4_pass": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlag": "nurse_day4",
        "next": "morning4_end"
    },
    "hidden_nurse_d4_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "morning4_end"
    },

    "morning4_end": {
        "background": "assets/images/background/student_room.png",
        "character": null,
        "selectByHighestAffinity": true,
        "branches": [
            {"character": "Seoyeon", "next": "date_seo_1"},
            {"character": "Yuna", "next": "date_yuna_1"},
            {"character": "Dain", "next": "date_dain_1"}
        ],
        "next": "date_seo_1"
    }
});
