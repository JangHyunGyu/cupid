/**
 * ============================================================================
 * CUPID - day2_1_morning
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[2]) SCENARIO[2] = {};

Object.assign(SCENARIO[2], {
    "day2_start": {
        "background": "assets/images/background/room_my.png",
        "bgm": "intro.mp3",
        "character": null,
        "next": "day2_start_2"
    },
    "day2_start_2": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_morning_phone"
    },
    "day2_morning_phone": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_morning_phone_2"
    },
    "day2_morning_phone_2": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_morning_routine"
    },
    "day2_morning_routine": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_morning_routine_2"
    },
    "day2_morning_routine_2": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_breakfast"
    },
    "day2_breakfast": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_breakfast_2"
    },
    "day2_breakfast_2": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_start_3"
    },
    "day2_start_3": {
        "background": "assets/images/background/room_my.png",
        "next": "day2_road_to_school"
    },
    "day2_road_to_school": {
        "background": "assets/images/background/street.png",
        "next": "day2_road_to_school_2"
    },
    "day2_road_to_school_2": {
        "background": "assets/images/background/street.png",
        "next": "day2_road_to_school_3"
    },
    "day2_road_to_school_3": {
        "background": "assets/images/background/street.png",
        "next": "day2_school_gate"
    },
    "day2_school_gate": {
        "background": "assets/images/background/school.png",
        "bgm": "daily2.mp3",
        "next": "day2_school_gate_2"
    },
    "day2_school_gate_2": {
        "background": "assets/images/background/school.png",
        "choices": [
            {
                "next": "day2_meet_someone"
            }
        ]
    },
    "day2_meet_someone": {
        "background": "assets/images/background/school.png",
        "branches": [
            {
                "next": "day2_meet_yuna",
                "character": "Yuna",
                "condition": "met_yuna"
            },
            {
                "next": "day2_meet_nurse",
                "character": "Nurse",
                "condition": "met_nurse"
            },
            {
                "next": "day2_meet_dain",
                "character": "Dain",
                "condition": "met_dain"
            },
            {
                "next": "day2_meet_seoyeon",
                "character": "Seoyeon",
                "condition": "met_seoyeon"
            },
            {
                "next": "day2_meet_teacher"
            }
        ],
        "selectByHighestAffinity": true
    },
    "day2_meet_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "branches": [
            {
                "next": "day2_yuna_talk_msg",
                "condition": "sent_msg_day1_yuna"
            },
            {
                "next": "day2_yuna_morning_talk"
            }
        ]
    },
    "day2_yuna_talk_msg": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "day2_classroom_from_yuna"
    },
    "day2_yuna_morning_talk": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day2_classroom_from_yuna"
    },
    "day2_meet_nurse": {
        "affinityChar": "Nurse",
        "affinityBranches": [
            {
                "minAffinity": 20,
                "next": "day2_meet_nurse_high"
            },
            {
                "minAffinity": -5,
                "next": "day2_meet_nurse_standard"
            },
            {
                "minAffinity": -100,
                "next": "day2_meet_nurse_low"
            }
        ]
    },
    "day2_meet_nurse_standard": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_nurse_talk"
    },
    "day2_meet_nurse_high": {
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day2_nurse_talk"
    },
    "day2_meet_nurse_low": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_classroom"
    },
    "day2_nurse_talk": {
        "character": "assets/images/characters/nurse_normal.png",
        "branches": [
            {
                "next": "day2_nurse_talk_msg",
                "condition": "sent_msg_day1_nurse"
            },
            {
                "next": "day2_nurse_talk_has_number",
                "condition": "has_number_nurse"
            },
            {
                "next": "day2_nurse_talk_no_number"
            }
        ]
    },
    "day2_nurse_talk_msg": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_classroom_from_nurse"
    },
    "day2_nurse_talk_has_number": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_classroom_from_nurse"
    },
    "day2_nurse_talk_no_number": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day2_classroom_from_nurse"
    },
    "day2_meet_seoyeon": {
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            {
                "minAffinity": 25,
                "next": "day2_meet_seoyeon_high"
            },
            {
                "minAffinity": -5,
                "next": "day2_meet_seoyeon_standard"
            },
            {
                "minAffinity": -100,
                "next": "day2_meet_seoyeon_low"
            }
        ]
    },
    "day2_meet_seoyeon_standard": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day2_seoyeon_talk"
    },
    "day2_meet_seoyeon_high": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day2_seoyeon_talk"
    },
    "day2_meet_seoyeon_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "day2_classroom"
    },
    "day2_seoyeon_talk": {
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            {
                "next": "day2_seoyeon_talk_msg",
                "condition": "sent_msg_day1_seyoun"
            },
            {
                "next": "day2_seoyeon_talk_has_number",
                "condition": "has_number_seyoun"
            },
            {
                "next": "day2_seoyeon_talk_no_number"
            }
        ]
    },
    "day2_seoyeon_talk_msg": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day2_classroom_from_seoyeon"
    },
    "day2_seoyeon_talk_has_number": {
        "character": "assets/images/characters/seyoun_shy.png",
        "choices": [
            {
                "next": "day2_seoyeon_happy",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_seoyeon_normal",
                "stats": {
                    "Seoyeon": {
                        "affinity": 1
                    }
                }
            }
        ]
    },
    "day2_seoyeon_talk_no_number": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day2_classroom_from_seoyeon"
    },
    "day2_seoyeon_happy": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day2_classroom_from_seoyeon"
    },
    "day2_seoyeon_normal": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day2_classroom_from_seoyeon"
    },
    "day2_meet_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day2_dain_talk"
    },
    "day2_dain_talk": {
        "character": "assets/images/characters/dain_laugh.png",
        "branches": [
            {
                "next": "day2_dain_talk_msg",
                "condition": "sent_msg_day1_dain"
            },
            {
                "next": "day2_dain_talk_dated",
                "condition": "dated_dain_day1"
            },
            {
                "next": "day2_dain_talk_not_dated"
            }
        ]
    },
    "day2_dain_talk_msg": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_classroom_from_dain"
    },
    "day2_dain_talk_dated": {
        "character": "assets/images/characters/dain_laugh.png",
        "choices": [
            {
                "next": "day2_dain_happy",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_dain_normal",
                "stats": {
                    "Dain": {
                        "affinity": 1
                    }
                }
            }
        ]
    },
    "day2_dain_talk_not_dated": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_classroom_from_dain"
    },
    "day2_dain_happy": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_classroom_from_dain"
    },
    "day2_dain_normal": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day2_classroom_from_dain"
    },
    "day2_meet_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_teacher_free_talk"
    },
    "day2_teacher_free_talk": {
        "type": "free_talk",
        "character": "assets/images/characters/teacher_normal.png",
        "affinityChar": "Teacher",
        "affinityBranches": [
            {
                "minAffinity": 20,
                "next": "day2_teacher_contact_ask_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_teacher_contact_ask"
            },
            {
                "minAffinity": -100,
                "next": "day2_teacher_contact_ask_low"
            }
        ],
        "next": "day2_teacher_contact_ask"
    },
    "day2_teacher_contact_ask_high": {
        "character": "assets/images/characters/teacher_smile.png",
        "choices": [
            {
                "next": "day2_teacher_contact_success_high",
                "setFlags": [
                    "has_number_teacher",
                    "has_any_contact"
                ]
            },
            {
                "next": "day2_classroom_from_teacher"
            }
        ]
    },
    "day2_teacher_contact_ask_low": {
        "character": "assets/images/characters/teacher_angry.png",
        "choices": [
            {
                "next": "day2_teacher_contact_success_low",
                "setFlags": [
                    "has_number_teacher",
                    "has_any_contact"
                ]
            },
            {
                "next": "day2_classroom_from_teacher"
            }
        ]
    },
    "day2_teacher_contact_ask": {
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            {
                "next": "day2_teacher_contact_success_normal",
                "setFlags": [
                    "has_number_teacher",
                    "has_any_contact"
                ]
            },
            {
                "next": "day2_classroom_from_teacher"
            }
        ]
    },
    "day2_teacher_contact_success_high": {
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 15
            }
        },
        "next": "day2_classroom_from_teacher"
    },
    "day2_teacher_contact_success_low": {
        "character": "assets/images/characters/teacher_angry.png",
        "stats": {
            "Teacher": {
                "affinity": 2
            }
        },
        "next": "day2_classroom_from_teacher"
    },
    "day2_teacher_contact_success_normal": {
        "character": "assets/images/characters/teacher_normal.png",
        "stats": {
            "Teacher": {
                "affinity": 10
            }
        },
        "next": "day2_classroom_from_teacher"
    },
    "day2_classroom_from_teacher": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day2_classroom_from_teacher_2"
    },
    "day2_classroom_from_teacher_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_teacher"
    },
    "day2_classroom_greet_teacher": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_teacher_2"
    },
    "day2_classroom_greet_teacher_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_teacher"
    },
    "day2_classroom_settle_teacher": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_teacher_2"
    },
    "day2_classroom_settle_teacher_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_teacher_3"
    },
    "day2_classroom_settle_teacher_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_2"
    },
    "day2_classroom_from_seoyeon": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day2_classroom_from_seoyeon_2"
    },
    "day2_classroom_from_seoyeon_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_seoyeon"
    },
    "day2_classroom_greet_from_seoyeon": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_seoyeon_2"
    },
    "day2_classroom_greet_from_seoyeon_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_seoyeon"
    },
    "day2_classroom_settle_from_seoyeon": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_seoyeon_2"
    },
    "day2_classroom_settle_from_seoyeon_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_seoyeon_3"
    },
    "day2_classroom_settle_from_seoyeon_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_2"
    },
    "day2_classroom_from_dain": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_classroom_from_dain_2"
    },
    "day2_classroom_from_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_dain"
    },
    "day2_classroom_greet_from_dain": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_dain_2"
    },
    "day2_classroom_greet_from_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day2_classroom_settle_from_dain"
    },
    "day2_classroom_settle_from_dain": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_dain_2"
    },
    "day2_classroom_settle_from_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_dain_3"
    },
    "day2_classroom_settle_from_dain_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_2"
    },
    "day2_classroom_from_nurse": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_from_nurse_2"
    },
    "day2_classroom_from_nurse_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_nurse"
    },
    "day2_classroom_greet_from_nurse": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_nurse_2"
    },
    "day2_classroom_greet_from_nurse_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_nurse"
    },
    "day2_classroom_settle_from_nurse": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_nurse_2"
    },
    "day2_classroom_settle_from_nurse_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_nurse_3"
    },
    "day2_classroom_settle_from_nurse_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_2"
    },
    "day2_classroom_from_yuna": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_from_yuna_2"
    },
    "day2_classroom_from_yuna_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_yuna"
    },
    "day2_classroom_greet_from_yuna": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_from_yuna_2"
    },
    "day2_classroom_greet_from_yuna_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_yuna"
    },
    "day2_classroom_settle_from_yuna": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_yuna_2"
    },
    "day2_classroom_settle_from_yuna_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_from_yuna_3"
    },
    "day2_classroom_settle_from_yuna_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_2"
    },
    "day2_classroom": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet"
    },
    "day2_classroom_greet": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_greet_2"
    },
    "day2_classroom_greet_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_alone"
    },
    "day2_classroom_settle_alone": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_alone_2"
    },
    "day2_classroom_settle_alone_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_settle_alone_3"
    },
    "day2_classroom_settle_alone_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_classroom_2"
    },
    "day2_classroom_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "choices": [
            {
                "next": "day2_check_note"
            }
        ]
    },
    "day2_check_note": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_content"
    },
    "day2_note_content": {
        "background": "assets/images/background/room_school.png",
        "next": "day2_note_reaction"
    },
    "day2_note_reaction": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_speculation"
    },
    "day2_note_speculation": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_speculation_2"
    },
    "day2_note_speculation_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_speculation_3"
    },
    "day2_note_speculation_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_ask_around"
    },
    "day2_note_ask_around": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            {
                "next": "day2_note_ask_around_met",
                "condition": "met_yuna"
            },
            {
                "next": "day2_note_ask_around_new"
            }
        ]
    },
    "day2_note_ask_around_met": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_ask_around_2"
    },
    "day2_note_ask_around_new": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_ask_around_2"
    },
    "day2_note_ask_around_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_note_ask_around_3"
    },
    "day2_note_ask_around_3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_homeroom_start"
    },
    "day2_homeroom_start": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_homeroom_rollcall"
    },
    "day2_homeroom_rollcall": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_homeroom_rollcall_2"
    },
    "day2_homeroom_rollcall_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_homeroom_rollcall_3"
    },
    "day2_homeroom_rollcall_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day2_homeroom_notice"
    },
    "day2_homeroom_notice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_homeroom_notice_2"
    },
    "day2_homeroom_notice_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day2_homeroom_event"
    },
    "day2_homeroom_event": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day2_homeroom_event_2"
    },
    "day2_homeroom_event_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day2_homeroom_event_3"
    },
    "day2_homeroom_event_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day2_morning_class"
    },
    "day2_morning_class": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "branches": [
            {
                "next": "day2_morning_class_yuna_msg",
                "condition": "sent_msg_day1_yuna"
            },
            {
                "next": "day2_morning_class_yuna_met",
                "condition": "met_yuna"
            },
            {
                "next": "day2_morning_class_yuna_new"
            }
        ]
    },
    "day2_morning_class_yuna_msg": {
        "next": "day2_morning_class_focus"
    },
    "day2_morning_class_yuna_met": {
        "next": "day2_morning_class_focus"
    },
    "day2_morning_class_yuna_new": {
        "next": "day2_morning_class_focus"
    },
    "day2_morning_class_focus": {
        "next": "day2_morning_class_quiz"
    },
    "day2_morning_class_quiz": {
        "character": null,
        "next": "day2_morning_class_quiz_2"
    },
    "day2_morning_class_quiz_2": {
        "choices": [
            {
                "next": "day2_quiz_try"
            },
            {
                "next": "day2_quiz_pass"
            }
        ]
    },
    "day2_quiz_try": {
        "next": "day2_quiz_try_2"
    },
    "day2_quiz_try_2": {
        "character": null,
        "next": "day2_quiz_result"
    },
    "day2_quiz_pass": {
        "next": "day2_quiz_pass_2"
    },
    "day2_quiz_pass_2": {
        "character": null,
        "next": "day2_quiz_result"
    },
    "day2_quiz_result": {
        "next": "day2_second_class"
    },
    "day2_second_class": {
        "next": "day2_second_class_2"
    },
    "day2_second_class_2": {
        "next": "day2_second_class_3"
    },
    "day2_second_class_3": {
        "next": "day2_last_class_before_lunch"
    },
    "day2_last_class_before_lunch": {
        "next": "day2_last_class_before_lunch_2"
    },
    "day2_last_class_before_lunch_2": {
        "next": "day2_last_class_before_lunch_3"
    },
    "day2_last_class_before_lunch_3": {
        "next": "day2_last_class_before_lunch_4"
    },
    "day2_last_class_before_lunch_4": {
        "next": "day2_class_end_bell"
    },
    "day2_class_end_bell": {
        "next": "day2_class_end"
    },
    "day2_class_end": {
        "next": "day2_packing_up"
    },
    "day2_packing_up": {
        "next": "day2_lunch_decision"
    },
    "day2_lunch_decision": {
        "next": "day2_lunch_time"
    }
});
