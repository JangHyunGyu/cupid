/**
 * ============================================================================
 * CUPID - day1_4_night
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[1]) SCENARIO[1] = {};

Object.assign(SCENARIO[1], {
    "after_home": {
        "background": "assets/images/background/street.png",
        "bgm": "night1.mp3",
        "character": null,
        "night": true,
        "next": "after_home_walk"
    },
    "after_home_walk": {
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "after_home_neighborhood"
    },
    "after_home_neighborhood": {
        "background": "assets/images/background/street.png",
        "night": true,
        "next": "after_home_arrive"
    },
    "after_home_arrive": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "after_home_2"
    },
    "after_home_2": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "after_home_settle"
    },
    "after_home_settle": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "after_home_3"
    },
    "after_home_3": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_reflect_start"
    },
    "night_reflect_start": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "night_reflect_seoyeon",
                "condition": "met_seoyeon"
            },
            {
                "next": "night_reflect_yuna",
                "condition": "met_yuna"
            },
            {
                "next": "night_reflect_dain",
                "condition": "met_dain"
            },
            {
                "next": "night_reflect_nurse",
                "condition": "met_nurse"
            },
            {
                "next": "night_reflect_teacher",
                "condition": "met_teacher"
            },
            {
                "next": "night_reflect_end"
            }
        ]
    },
    "night_reflect_seoyeon": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "night_reflect_yuna",
                "condition": "met_yuna"
            },
            {
                "next": "night_reflect_dain",
                "condition": "met_dain"
            },
            {
                "next": "night_reflect_nurse",
                "condition": "met_nurse"
            },
            {
                "next": "night_reflect_teacher",
                "condition": "met_teacher"
            },
            {
                "next": "night_reflect_end"
            }
        ]
    },
    "night_reflect_yuna": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "night_reflect_dain",
                "condition": "met_dain"
            },
            {
                "next": "night_reflect_nurse",
                "condition": "met_nurse"
            },
            {
                "next": "night_reflect_teacher",
                "condition": "met_teacher"
            },
            {
                "next": "night_reflect_end"
            }
        ]
    },
    "night_reflect_dain": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "night_reflect_nurse",
                "condition": "met_nurse"
            },
            {
                "next": "night_reflect_teacher",
                "condition": "met_teacher"
            },
            {
                "next": "night_reflect_end"
            }
        ]
    },
    "night_reflect_nurse": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "night_reflect_teacher",
                "condition": "met_teacher"
            },
            {
                "next": "night_reflect_end"
            }
        ]
    },
    "night_reflect_teacher": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_reflect_end"
    },
    "night_reflect_end": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_diary_choice"
    },
    "night_diary_choice": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "choices": [
            {
                "next": "night_diary_write_1"
            },
            {
                "next": "night_home"
            }
        ]
    },
    "night_diary_write_1": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_diary_write_2"
    },
    "night_diary_write_2": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_diary_write_3"
    },
    "night_diary_write_3": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "wrote_diary_day1",
        "next": "night_home"
    },
    "night_home": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "branches": [
            {
                "next": "night_goodnight_start",
                "excludeCondition": "has_any_contact"
            },
            {
                "next": "night_home_check_contact"
            }
        ]
    },
    "night_home_check_contact": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "choices": [
            {
                "next": "night_message_seyoun",
                "condition": "has_number_seyoun",
                "excludeCondition": "sent_msg_day1_seyoun"
            },
            {
                "next": "night_message_yuna",
                "condition": "has_number_yuna",
                "excludeCondition": "sent_msg_day1_yuna"
            },
            {
                "next": "night_message_dain",
                "condition": "has_number_dain",
                "excludeCondition": "sent_msg_day1_dain"
            },
            {
                "next": "night_message_nurse",
                "condition": "has_number_nurse",
                "excludeCondition": "sent_msg_day1_nurse"
            },
            {
                "next": "night_message_teacher",
                "condition": "has_number_teacher",
                "excludeCondition": "sent_msg_day1_teacher"
            },
            {
                "next": "day1_check_affinity"
            },
            {
                "next": "night_goodnight_start"
            }
        ]
    },
    "day1_check_affinity": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_home_check_contact"
    },
    "night_message_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day1_teacher",
        "next": "night_message_teacher_reply"
    },
    "night_message_teacher_reply": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_smile.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "night_message_teacher_extra_1"
    },
    "night_message_teacher_extra_1": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_smile.png",
        "silhouette": true,
        "night": true,
        "next": "night_message_teacher_extra_2"
    },
    "night_message_teacher_extra_2": {
        "character": "assets/images/characters/teacher_smile.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_message_teacher_extra_3"
    },
    "night_message_teacher_extra_3": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "night_message_teacher_extra_4"
    },
    "night_message_teacher_extra_4": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_home_check_contact"
    },
    "night_message_seyoun": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "night_message_seyoun_lunch",
                "condition": "ate_lunch_seoyeon"
            },
            {
                "next": "night_message_seyoun_after",
                "condition": "helped_seoyeon"
            },
            {
                "next": "night_message_seyoun_generic"
            }
        ]
    },
    "night_message_seyoun_lunch": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day1_seyoun",
        "next": "night_message_seyoun_reply_lunch"
    },
    "night_message_seyoun_after": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day1_seyoun",
        "next": "night_message_seyoun_reply_generic"
    },
    "night_message_seyoun_generic": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day1_seyoun",
        "next": "night_message_seyoun_reply_generic"
    },
    "night_message_seyoun_reply_lunch": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "night_message_seyoun_followup"
    },
    "night_message_seyoun_reply_generic": {
        "background": "assets/images/background/room_my.png",
        "affinityChar": "Seoyeon",
        "night": true,
        "affinityBranches": [
            {
                "minAffinity": 15,
                "next": "night_message_seyoun_reply_high"
            },
            {
                "minAffinity": 0,
                "next": "night_message_seyoun_reply_standard"
            },
            {
                "minAffinity": -100,
                "next": "night_message_seyoun_reply_low"
            }
        ]
    },
    "night_message_seyoun_reply_standard": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "night_message_seyoun_followup"
    },
    "night_message_seyoun_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "night_message_seyoun_followup"
    },
    "night_message_seyoun_reply_low": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "next": "night_home_check_contact"
    },
    "night_message_seyoun_followup": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "choices": [
            {
                "next": "night_message_seyoun_followup_food"
            },
            {
                "next": "night_message_seyoun_followup_goodnight"
            },
            {
                "next": "night_home_check_contact"
            }
        ]
    },
    "night_message_seyoun_followup_food": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "night_message_seyoun_followup_end"
    },
    "night_message_seyoun_followup_goodnight": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "night_message_seyoun_followup_end"
    },
    "night_message_seyoun_followup_end": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_home_check_contact"
    },
    "night_message_yuna": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day1_yuna",
        "next": "night_message_yuna_reply"
    },
    "night_message_yuna_reply": {
        "background": "assets/images/background/room_my.png",
        "affinityChar": "Yuna",
        "night": true,
        "affinityBranches": [
            {
                "minAffinity": 10,
                "next": "night_message_yuna_reply_high"
            },
            {
                "minAffinity": 0,
                "next": "night_message_yuna_reply_standard"
            },
            {
                "minAffinity": -100,
                "next": "night_message_yuna_reply_low"
            }
        ]
    },
    "night_message_yuna_reply_standard": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "night_message_yuna_cryptic"
    },
    "night_message_yuna_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_smile.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "night_message_yuna_cryptic"
    },
    "night_message_yuna_reply_low": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "stats": {
            "Yuna": {
                "affinity": -5
            }
        },
        "next": "night_home_check_contact"
    },
    "night_message_yuna_cryptic": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "night_message_yuna_cryptic_react"
    },
    "night_message_yuna_cryptic_react": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_message_yuna_cryptic_choice"
    },
    "night_message_yuna_cryptic_choice": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "choices": [
            {
                "next": "night_message_yuna_cryptic_reply"
            },
            {
                "next": "night_message_yuna_cryptic_ask"
            }
        ]
    },
    "night_message_yuna_cryptic_reply": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "night_message_yuna_cryptic_end"
    },
    "night_message_yuna_cryptic_ask": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "night_message_yuna_cryptic_end"
    },
    "night_message_yuna_cryptic_end": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_smile.png",
        "silhouette": true,
        "night": true,
        "next": "night_home_check_contact"
    },
    "night_message_dain": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "night_message_dain_date",
                "condition": "dated_dain_day1"
            },
            {
                "next": "night_message_dain_generic"
            }
        ]
    },
    "night_message_dain_date": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day1_dain",
        "next": "night_message_dain_reply_date"
    },
    "night_message_dain_generic": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day1_dain",
        "next": "night_message_dain_reply_generic"
    },
    "night_message_dain_reply_date": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "night_message_dain_selfie"
    },
    "night_message_dain_reply_generic": {
        "background": "assets/images/background/room_my.png",
        "affinityChar": "Dain",
        "night": true,
        "affinityBranches": [
            {
                "minAffinity": 15,
                "next": "night_message_dain_reply_high"
            },
            {
                "minAffinity": -100,
                "next": "night_message_dain_reply_standard"
            }
        ]
    },
    "night_message_dain_reply_standard": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "night_message_dain_selfie"
    },
    "night_message_dain_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "night_message_dain_selfie"
    },
    "night_message_dain_selfie": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "night": true,
        "next": "night_message_dain_selfie_react"
    },
    "night_message_dain_selfie_react": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_message_dain_challenge"
    },
    "night_message_dain_challenge": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "next": "night_message_dain_challenge_choice"
    },
    "night_message_dain_challenge_choice": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "choices": [
            {
                "next": "night_message_dain_challenge_accept"
            },
            {
                "next": "night_message_dain_challenge_tease"
            }
        ]
    },
    "night_message_dain_challenge_accept": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "night_home_check_contact"
    },
    "night_message_dain_challenge_tease": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "night_home_check_contact"
    },
    "night_message_nurse": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "setFlag": "sent_msg_day1_nurse",
        "next": "night_message_nurse_reply"
    },
    "night_message_nurse_reply": {
        "background": "assets/images/background/room_my.png",
        "affinityChar": "Nurse",
        "night": true,
        "affinityBranches": [
            {
                "minAffinity": 10,
                "next": "night_message_nurse_reply_high"
            },
            {
                "minAffinity": -100,
                "next": "night_message_nurse_reply_standard"
            }
        ]
    },
    "night_message_nurse_reply_standard": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "night_message_nurse_extra_1"
    },
    "night_message_nurse_reply_high": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_shy.png",
        "silhouette": true,
        "night": true,
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "night_message_nurse_extra_1"
    },
    "night_message_nurse_extra_1": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "next": "night_message_nurse_extra_2"
    },
    "night_message_nurse_extra_2": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_message_nurse_extra_3"
    },
    "night_message_nurse_extra_3": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_shy.png",
        "silhouette": true,
        "night": true,
        "next": "night_message_nurse_extra_4"
    },
    "night_message_nurse_extra_4": {
        "character": "assets/images/characters/nurse_shy.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_home_check_contact"
    },
    "night_goodnight_start": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_goodnight_window"
    },
    "night_goodnight_window": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_goodnight_sounds"
    },
    "night_goodnight_sounds": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_goodnight_think"
    },
    "night_goodnight_think": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_goodnight_close"
    },
    "night_goodnight_close": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "night_surprise_check"
    },
    "night_surprise_check": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "night_surprise_msg",
                "condition": "has_any_contact"
            },
            {
                "next": "day1_end"
            }
        ]
    },
    "night_surprise_msg": {
        "selectByHighestAffinity": true,
        "night": true,
        "branches": [
            {
                "character": "Seoyeon",
                "next": "night_surprise_seyoun",
                "condition": "has_number_seyoun"
            },
            {
                "character": "Yuna",
                "next": "night_surprise_yuna",
                "condition": "has_number_yuna"
            },
            {
                "character": "Dain",
                "next": "night_surprise_dain",
                "condition": "has_number_dain"
            },
            {
                "character": "Nurse",
                "next": "night_surprise_nurse",
                "condition": "has_number_nurse"
            },
            {
                "character": "Teacher",
                "next": "night_surprise_teacher",
                "condition": "has_number_teacher"
            },
            {
                "next": "day1_end"
            }
        ]
    },
    "night_surprise_seyoun": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "silhouette": true,
        "night": true,
        "next": "night_surprise_seyoun_react"
    },
    "night_surprise_seyoun_react": {
        "character": "assets/images/characters/seyoun_shy.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "night_surprise_react"
    },
    "night_surprise_yuna": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "night_surprise_yuna_react"
    },
    "night_surprise_yuna_react": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "night_surprise_react"
    },
    "night_surprise_dain": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "night": true,
        "next": "night_surprise_dain_react"
    },
    "night_surprise_dain_react": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "night_surprise_react"
    },
    "night_surprise_nurse": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/nurse_shy.png",
        "silhouette": true,
        "night": true,
        "next": "night_surprise_nurse_react"
    },
    "night_surprise_nurse_react": {
        "character": "assets/images/characters/nurse_shy.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "night_surprise_react"
    },
    "night_surprise_teacher": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_smile.png",
        "silhouette": true,
        "night": true,
        "next": "night_surprise_teacher_react"
    },
    "night_surprise_teacher_react": {
        "character": "assets/images/characters/teacher_smile.png",
        "silhouette": true,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "night_surprise_react"
    },
    "night_surprise_react": {
        "character": null,
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day1_end"
    },
    "day1_end": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "fade": true,
        "changeDay": 2,
        "next": "day2_start"
    }
});
