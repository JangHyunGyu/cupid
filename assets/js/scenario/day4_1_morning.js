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
            }
        ]
    },
    "morning4_seo_msg_1": {
        "background": "assets/images/background/student_room.png",
        "character": null,
        "condition": "route_seoyeon",
        "next": "morning4_end"
    },
    "morning4_yuna_msg_1": {
        "background": "assets/images/background/student_room.png",
        "character": null,
        "condition": "route_yuna",
        "next": "morning4_end"
    },
    "morning4_dain_msg_1": {
        "background": "assets/images/background/student_room.png",
        "character": null,
        "condition": "route_dain",
        "next": "morning4_end"
    },
    "morning4_end": {
        "background": "assets/images/background/student_room.png",
        "character": null
    }
});
