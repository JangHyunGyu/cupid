/**
 * ============================================================================
 * CUPID - day4_1_morning
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

Object.assign(SCENARIO[4], {
    "day4_start": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "bgm": "morning.mp3",
        "fade": true,
        "next": "day4_morning_dream"
    },
    "day4_morning_dream": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_wake"
    },
    "day4_morning_wake": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_calendar"
    },
    "day4_morning_calendar": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_excitement"
    },
    "day4_morning_excitement": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_guilt_check"
    },
    "day4_morning_guilt_check": {
        "background": "assets/images/background/room_my.png",
        "branches": [
            {
                "next": "day4_morning_guilt",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day4_morning_stretch"
            }
        ]
    },
    "day4_morning_guilt": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_stretch"
    },
    "day4_morning_stretch": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_mirror"
    },
    "day4_morning_mirror": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_window"
    },
    "day4_morning_window": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_weather"
    },
    "day4_morning_weather": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_weather2"
    },
    "day4_morning_weather2": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_kitchen"
    },
    "day4_morning_kitchen": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_breakfast_choice"
    },
    "day4_morning_breakfast_choice": {
        "background": "assets/images/background/room_my.png",
        "choices": [
            {
                "next": "day4_morning_breakfast_eat"
            },
            {
                "next": "day4_morning_breakfast_skip"
            }
        ]
    },
    "day4_morning_breakfast_eat": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_breakfast_done"
    },
    "day4_morning_breakfast_skip": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_breakfast_done"
    },
    "day4_morning_breakfast_done": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_groom"
    },
    "day4_morning_groom": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_nervous"
    },
    "day4_morning_nervous": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_closet"
    },
    "day4_morning_closet": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_outfit"
    },
    "day4_morning_outfit": {
        "background": "assets/images/background/room_my.png",
        "choices": [
            {
                "next": "day4_outfit_casual",
                "setFlag": "day4_outfit_casual"
            },
            {
                "next": "day4_outfit_stylish",
                "setFlag": "day4_outfit_stylish"
            }
        ]
    },
    "day4_outfit_casual": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_casual_mirror"
    },
    "day4_casual_mirror": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_outfit_done"
    },
    "day4_outfit_stylish": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_stylish_mirror"
    },
    "day4_stylish_mirror": {
        "background": "assets/images/background/room_my.png",
        "stats": {
            "Seoyeon": {
                "affinity": 1
            },
            "Yuna": {
                "affinity": 1
            },
            "Dain": {
                "affinity": 1
            },
            "Teacher": {
                "affinity": 1
            },
            "Nurse": {
                "affinity": 1
            }
        },
        "next": "day4_morning_outfit_done"
    },
    "day4_morning_outfit_done": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_phone"
    },
    "day4_morning_phone": {
        "background": "assets/images/background/room_my.png",
        "next": "day4_morning_message_branch"
    },
    "day4_morning_message_branch": {
        "background": "assets/images/background/room_my.png",
        "branches": [
            {
                "next": "day4_morning_date_route",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day4_morning_date_route",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day4_morning_date_route",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day4_morning_date_route",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day4_morning_date_route",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day4_no_date_start"
            }
        ]
    },
    "day4_morning_date_route": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day4_msg_seoyeon",
                "character": "Seoyeon",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day4_msg_yuna",
                "character": "Yuna",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day4_msg_dain",
                "character": "Dain",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day4_msg_nurse",
                "character": "Nurse",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day4_msg_teacher",
                "character": "Teacher",
                "condition": "day3_teacher_date_confirmed"
            }
        ]
    },
    "day4_msg_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "setFlag": "day4_date_target_set",
        "next": "day4_morning_reply_seoyeon"
    },
    "day4_morning_reply_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "next": "day4_msg_seoyeon_2"
    },
    "day4_msg_seoyeon_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day4_reply_seoyeon_2"
    },
    "day4_reply_seoyeon_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "next": "day4_seoyeon_ready"
    },
    "day4_seoyeon_ready": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "next": "day4_morning_loyalty_check"
    },
    "day4_msg_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "setFlag": "day4_date_target_set",
        "next": "day4_morning_reply_yuna"
    },
    "day4_morning_reply_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day4_msg_yuna_2"
    },
    "day4_msg_yuna_2": {
        "character": "assets/images/characters/yuna_shy.png",
        "silhouette": true,
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "day4_reply_yuna_2"
    },
    "day4_reply_yuna_2": {
        "character": "assets/images/characters/yuna_shy.png",
        "silhouette": true,
        "next": "day4_yuna_ready"
    },
    "day4_yuna_ready": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day4_morning_loyalty_check"
    },
    "day4_msg_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "setFlag": "day4_date_target_set",
        "next": "day4_morning_reply_dain"
    },
    "day4_morning_reply_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "next": "day4_msg_dain_2"
    },
    "day4_msg_dain_2": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "day4_reply_dain_2"
    },
    "day4_reply_dain_2": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "next": "day4_dain_ready"
    },
    "day4_dain_ready": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "next": "day4_morning_loyalty_check"
    },
    "day4_msg_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "setFlag": "day4_date_target_set",
        "next": "day4_morning_reply_nurse"
    },
    "day4_morning_reply_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day4_msg_nurse_2"
    },
    "day4_msg_nurse_2": {
        "character": "assets/images/characters/nurse_shy.png",
        "silhouette": true,
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "day4_reply_nurse_2"
    },
    "day4_reply_nurse_2": {
        "character": "assets/images/characters/nurse_shy.png",
        "silhouette": true,
        "next": "day4_nurse_ready"
    },
    "day4_nurse_ready": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day4_morning_loyalty_check"
    },
    "day4_msg_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "setFlag": "day4_date_target_set",
        "next": "day4_morning_reply_teacher"
    },
    "day4_morning_reply_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day4_msg_teacher_2"
    },
    "day4_msg_teacher_2": {
        "character": "assets/images/characters/teacher_smile.png",
        "silhouette": true,
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "day4_reply_teacher_2"
    },
    "day4_reply_teacher_2": {
        "character": "assets/images/characters/teacher_smile.png",
        "silhouette": true,
        "next": "day4_teacher_ready"
    },
    "day4_teacher_ready": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day4_morning_loyalty_check"
    },
    "day4_morning_loyalty_check": {
        "background": "assets/images/background/room_my.png",
        "branches": [
            {
                "next": "day4_morning_loyalty_boost",
                "condition": "day3_loyalty_bonus"
            },
            {
                "next": "day4_morning_lastcheck"
            }
        ]
    },
    "day4_morning_loyalty_boost": {
        "background": "assets/images/background/room_my.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            },
            "Yuna": {
                "affinity": 3
            },
            "Dain": {
                "affinity": 3
            },
            "Teacher": {
                "affinity": 3
            },
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "day4_morning_lastcheck"
    },
    "day4_morning_lastcheck": {
        "character": null,
        "next": "day4_morning_wallet"
    },
    "day4_morning_wallet": {
        "character": null,
        "next": "day4_morning_lock"
    },
    "day4_morning_lock": {
        "character": null,
        "next": "day4_morning_outside"
    },
    "day4_morning_outside": {
        "character": null,
        "background": "assets/images/background/street.png",
        "next": "day4_morning_depart"
    },
    "day4_morning_depart": {
        "background": "assets/images/background/street.png",
        "character": null,
        "fade": true,
        "next": "day4_arrive"
    },
    "day4_no_date_start": {
        "next": "day4_no_date_2"
    },
    "day4_no_date_2": {
        "next": "day4_no_date_3"
    },
    "day4_no_date_3": {
        "choices": [
            {
                "next": "day4_no_date_park"
            },
            {
                "next": "day4_no_date_home"
            },
            {
                "next": "day4_no_date_cafe"
            }
        ]
    },
    "day4_no_date_park": {
        "background": "assets/images/background/park.png",
        "next": "day4_no_date_park_weather"
    },
    "day4_no_date_park_weather": {
        "background": "assets/images/background/park.png",
        "next": "day4_no_date_lonely"
    },
    "day4_no_date_home": {
        "next": "day4_no_date_home_bored"
    },
    "day4_no_date_home_bored": {
        "next": "day4_no_date_lonely"
    },
    "day4_no_date_cafe": {
        "background": "assets/images/background/cafe.png",
        "next": "day4_no_date_cafe_sit"
    },
    "day4_no_date_cafe_sit": {
        "background": "assets/images/background/cafe.png",
        "next": "day4_no_date_lonely"
    },
    "day4_no_date_lonely": {
        "background": "assets/images/background/park.png",
        "next": "day4_no_date_wander"
    },
    "day4_no_date_wander": {
        "background": "assets/images/background/street.png",
        "next": "day4_no_date_encounter"
    },
    "day4_no_date_encounter": {
        "background": "assets/images/background/street.png",
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day4_no_date_meet_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day4_no_date_meet_yuna",
                "character": "Yuna"
            },
            {
                "next": "day4_no_date_meet_dain",
                "character": "Dain"
            },
            {
                "next": "day4_no_date_meet_nurse",
                "character": "Nurse"
            },
            {
                "next": "day4_no_date_meet_teacher",
                "character": "Teacher"
            }
        ]
    },
    "day4_no_date_meet_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day4_no_date_chat_seoyeon"
    },
    "day4_no_date_chat_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day4_no_date_after_encounter"
    },
    "day4_no_date_meet_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day4_no_date_chat_yuna"
    },
    "day4_no_date_chat_yuna": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "day4_no_date_after_encounter"
    },
    "day4_no_date_meet_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day4_no_date_chat_dain"
    },
    "day4_no_date_chat_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day4_no_date_after_encounter"
    },
    "day4_no_date_meet_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day4_no_date_chat_nurse"
    },
    "day4_no_date_chat_nurse": {
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day4_no_date_after_encounter"
    },
    "day4_no_date_meet_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "stats": {
            "Teacher": {
                "affinity": 5
            }
        },
        "next": "day4_no_date_chat_teacher"
    },
    "day4_no_date_chat_teacher": {
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day4_no_date_after_encounter"
    },
    "day4_no_date_after_encounter": {
        "character": null,
        "next": "day4_no_date_reflect"
    },
    "day4_no_date_reflect": {
        "character": null,
        "next": "day4_no_date_sunset"
    },
    "day4_no_date_sunset": {
        "character": null,
        "background": "assets/images/background/street.png",
        "next": "day4_no_date_evening"
    },
    "day4_no_date_evening": {
        "background": "assets/images/background/street.png",
        "character": null,
        "fade": true,
        "next": "day4_night_start"
    }
});
