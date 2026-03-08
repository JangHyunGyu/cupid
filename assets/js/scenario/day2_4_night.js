/**
 * ============================================================================
 * CUPID - day2_4_night
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[2]) SCENARIO[2] = {};

Object.assign(SCENARIO[2], {
    "day2_end": {
        "background": "assets/images/background/street.png",
        "bgm": "night2.mp3",
        "character": null,
        "night": true,
        "next": "day2_end_walk_home"
    },
    "day2_end_walk_home": {
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "day2_end_evening_air"
    },
    "day2_end_evening_air": {
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "day2_end_arrive_home"
    },
    "day2_end_arrive_home": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_end_change_clothes"
    },
    "day2_end_change_clothes": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_end_settle"
    },
    "day2_end_settle": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_end_2"
    },
    "day2_end_2": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_reflect_start"
    },
    "day2_night_reflect_start": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_reflect_yuna_check"
    },
    "day2_night_reflect_yuna_check": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_reflect_yuna_secret",
                "condition": "met_yuna"
            },
            {
                "next": "day2_night_reflect_seoyeon_check"
            }
        ]
    },
    "day2_night_reflect_yuna_secret": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_reflect_seoyeon_check"
    },
    "day2_night_reflect_seoyeon_check": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_reflect_seoyeon",
                "condition": "met_seoyeon"
            },
            {
                "next": "day2_night_reflect_dain_check"
            }
        ]
    },
    "day2_night_reflect_seoyeon": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_reflect_dain_check"
    },
    "day2_night_reflect_dain_check": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_reflect_dain",
                "condition": "met_dain"
            },
            {
                "next": "day2_night_reflect_adults"
            }
        ]
    },
    "day2_night_reflect_dain": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_reflect_adults"
    },
    "day2_night_reflect_adults": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_snack_start"
    },
    "day2_night_snack_start": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_snack_kitchen"
    },
    "day2_night_snack_kitchen": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_snack_ramen"
    },
    "day2_night_snack_ramen": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_snack_think"
    },
    "day2_night_snack_think": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_home"
    },
    "day2_night_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "branches": [
            {
                "next": "day2_night_goodnight_start",
                "excludeCondition": "has_any_contact"
            },
            {
                "next": "day2_night_social_media"
            }
        ]
    },
    "day2_night_social_media": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_social_media_scroll"
    },
    "day2_night_social_media_scroll": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_social_media_post"
    },
    "day2_night_social_media_post": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_social_media_react"
    },
    "day2_night_social_media_react": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_home_check_contact"
    },
    "day2_night_home_check_contact": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "choices": [
            {
                "next": "day2_night_message_seyoun",
                "condition": "has_number_seyoun",
                "excludeCondition": "sent_msg_day2_seyoun"
            },
            {
                "next": "day2_night_message_yuna",
                "condition": "has_number_yuna",
                "excludeCondition": "sent_msg_day2_yuna"
            },
            {
                "next": "day2_night_message_dain",
                "condition": "has_number_dain",
                "excludeCondition": "sent_msg_day2_dain"
            },
            {
                "next": "day2_night_message_nurse",
                "condition": "has_number_nurse",
                "excludeCondition": "sent_msg_day2_nurse"
            },
            {
                "next": "day2_night_message_teacher",
                "condition": "has_number_teacher",
                "excludeCondition": "sent_msg_day2_teacher"
            },
            {
                "next": "day2_night_nurse_home",
                "condition": "invited_nurse_home"
            },
            {
                "next": "day2_check_affinity"
            },
            {
                "next": "day2_night_goodnight_start"
            }
        ]
    },
    "day2_check_affinity": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_home_check_contact"
    },
    "day2_night_nurse_home": {
        "background": "assets/images/background/nurse_house.png",
        "character": null,
        "night": true,
        "next": "day2_night_nurse_home_entrance"
    },
    "day2_night_nurse_home_entrance": {
        "character": "assets/images/characters/nurse_normal.png",
        "background": "assets/images/background/nurse_house.png",
        "night": true,
        "next": "day2_night_nurse_home_casual"
    },
    "day2_night_nurse_home_casual": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day2_night_nurse_home_2"
    },
    "day2_night_nurse_home_2": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day2_night_nurse_home_tea"
    },
    "day2_night_nurse_home_tea": {
        "character": "assets/images/characters/nurse_normal.png",
        "background": "assets/images/background/nurse_house.png",
        "night": true,
        "next": "day2_night_nurse_home_3"
    },
    "day2_night_nurse_home_3": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day2_night_nurse_home_talk_life"
    },
    "day2_night_nurse_home_talk_life": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "next": "day2_night_nurse_home_talk_alone"
    },
    "day2_night_nurse_home_talk_alone": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day2_night_nurse_home_decision"
    },
    "day2_night_nurse_home_decision": {
        "character": "assets/images/characters/nurse_normal.png",
        "background": "assets/images/background/nurse_house.png",
        "night": true,
        "choices": [
            {
                "next": "day2_night_nurse_home_4"
            },
            {
                "next": "day2_night_home_check_contact"
            }
        ]
    },
    "day2_night_nurse_home_4": {
        "background": "assets/images/background/nurse_home_event1.png",
        "character": null,
        "next": "day2_night_nurse_home_5"
    },
    "day2_night_nurse_home_5": {
        "background": "assets/images/background/nurse_house.png",
        "character": null,
        "night": true,
        "fade": true,
        "setFlag": "spent_night_at_nurse_home",
        "stats": {
            "Nurse": {
                "affinity": 15
            }
        },
        "changeDay": 3,
        "next": "day3_nurse_home_morning"
    },
    "day2_night_message_seyoun": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_message_seyoun_after",
                "condition": "day2_met_seoyeon_after"
            },
            {
                "next": "day2_night_message_seyoun_lunch",
                "condition": "day2_ate_lunch_seoyeon"
            },
            {
                "next": "day2_night_message_seyoun_generic"
            }
        ]
    },
    "day2_night_message_seyoun_after": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_seyoun",
        "next": "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_lunch": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_seyoun",
        "next": "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_generic": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_seyoun",
        "next": "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_reply": {
        "type": "free_talk",
        "maxTurns": 5,
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_night_message_seyoun_reply_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_night_message_seyoun_reply_normal"
            },
            {
                "minAffinity": -100,
                "next": "day2_night_message_seyoun_reply_low"
            }
        ],
        "next": "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun_reply_normal": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun_reply_low": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact"
    },
    "day2_night_message_yuna": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_message_yuna_met",
                "condition": "day2_met_yuna_after"
            },
            {
                "next": "day2_night_message_yuna_met",
                "condition": "day2_met_yuna_lunch"
            },
            {
                "next": "day2_night_message_yuna_generic"
            }
        ]
    },
    "day2_night_message_yuna_met": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_yuna",
        "next": "day2_night_message_yuna_reply"
    },
    "day2_night_message_yuna_generic": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_yuna",
        "next": "day2_night_message_yuna_reply"
    },
    "day2_night_message_yuna_reply": {
        "type": "free_talk",
        "maxTurns": 5,
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "affinityChar": "Yuna",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_night_message_yuna_reply_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_night_message_yuna_reply_normal"
            },
            {
                "minAffinity": -100,
                "next": "day2_night_message_yuna_reply_low"
            }
        ],
        "next": "day2_night_home_check_contact"
    },
    "day2_night_message_yuna_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact"
    },
    "day2_night_message_yuna_reply_normal": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact"
    },
    "day2_night_message_yuna_reply_low": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact"
    },
    "day2_night_message_dain": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_message_dain_after",
                "condition": "day2_met_dain_after"
            },
            {
                "next": "day2_night_message_dain_lunch",
                "condition": "day2_met_dain_lunch"
            },
            {
                "next": "day2_night_message_dain_generic"
            }
        ]
    },
    "day2_night_message_dain_after": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_message_dain_bet",
                "condition": "day2_dain_bet"
            },
            {
                "next": "day2_night_message_dain_practice"
            }
        ]
    },
    "day2_night_message_dain_bet": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_dain",
        "next": "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_practice": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_dain",
        "next": "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_lunch": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_dain",
        "next": "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_generic": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_dain",
        "next": "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_reply": {
        "type": "free_talk",
        "maxTurns": 5,
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "affinityChar": "Dain",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_night_message_dain_reply_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_night_message_dain_reply_normal"
            },
            {
                "minAffinity": -100,
                "next": "day2_night_message_dain_reply_low"
            }
        ],
        "next": "day2_night_home_check_contact"
    },
    "day2_night_message_dain_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact"
    },
    "day2_night_message_dain_reply_normal": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact"
    },
    "day2_night_message_dain_reply_low": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_sad.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact"
    },
    "day2_night_message_nurse": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day2_night_message_nurse_rest",
                "condition": "day2_met_nurse_after"
            },
            {
                "next": "day2_night_message_nurse_rest",
                "condition": "woke_up_in_nurse_room"
            },
            {
                "next": "day2_night_message_nurse_generic"
            }
        ]
    },
    "day2_night_message_nurse_rest": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_nurse",
        "next": "day2_night_message_nurse_reply"
    },
    "day2_night_message_nurse_generic": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_nurse",
        "next": "day2_night_message_nurse_reply"
    },
    "day2_night_message_nurse_reply": {
        "type": "free_talk",
        "maxTurns": 5,
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "affinityChar": "Nurse",
        "affinityBranches": [
            {
                "minAffinity": 40,
                "next": "day2_night_message_nurse_reply_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_night_message_nurse_reply_normal"
            },
            {
                "minAffinity": -100,
                "next": "day2_night_message_nurse_reply_low"
            }
        ],
        "next": "day2_night_home_check_contact"
    },
    "day2_night_message_nurse_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact"
    },
    "day2_night_message_nurse_reply_normal": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact"
    },
    "day2_night_message_nurse_reply_low": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact"
    },
    "day2_night_message_teacher": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day2_teacher",
        "next": "day2_night_message_teacher_reply"
    },
    "day2_night_message_teacher_reply": {
        "type": "free_talk",
        "maxTurns": 5,
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "affinityChar": "Teacher",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_night_message_teacher_reply_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_night_message_teacher_reply_normal"
            },
            {
                "minAffinity": -100,
                "next": "day2_night_message_teacher_reply_low"
            }
        ],
        "next": "day2_night_home_check_contact"
    },
    "day2_night_message_teacher_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact"
    },
    "day2_night_message_teacher_reply_normal": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact"
    },
    "day2_night_message_teacher_reply_low": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day2_night_home_check_contact"
    },
    "day2_night_goodnight_start": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_goodnight_stars"
    },
    "day2_night_goodnight_stars": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_goodnight_sounds"
    },
    "day2_night_goodnight_sounds": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_goodnight_tomorrow"
    },
    "day2_night_goodnight_tomorrow": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_goodnight_close"
    },
    "day2_night_goodnight_close": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_dream_start"
    },
    "day2_night_dream_start": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_dream_vision"
    },
    "day2_night_dream_vision": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_night_dream_end"
    },
    "day2_night_dream_end": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day2_final_scene"
    },
    "day2_final_scene": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "fade": true,
        "changeDay": 3,
        "next": "day3_start"
    }
});
