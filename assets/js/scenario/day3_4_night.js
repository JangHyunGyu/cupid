/**
 * ============================================================================
 * CUPID - day3_4_night
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[3]) SCENARIO[3] = {};

Object.assign(SCENARIO[3], {
    "day3_night_start": {
        "background": "assets/images/background/room_my.png",
        "bgm": "night2.mp3",
        "character": null,
        "night": true,
        "next": "day3_night_reflect"
    },
    "day3_night_reflect": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day3_night_reflect_trouble",
                "condition": "day3_caught_multiple_dates"
            },
            {
                "next": "day3_night_reflect_tension",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_night_reflect_normal"
            }
        ]
    },
    "day3_night_reflect_trouble": {
        "night": true,
        "next": "day3_night_phone_check"
    },
    "day3_night_reflect_tension": {
        "night": true,
        "next": "day3_night_phone_check"
    },
    "day3_night_reflect_normal": {
        "night": true,
        "next": "day3_night_phone_check"
    },
    "day3_night_phone_check": {
        "night": true,
        "branches": [
            {
                "next": "day3_night_multiple_messages",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_night_single_message",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_night_single_message",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_night_single_message",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_night_single_message",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_night_single_message",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_night_no_message"
            }
        ]
    },
    "day3_night_multiple_messages": {
        "night": true,
        "next": "day3_night_check_messages"
    },
    "day3_night_check_messages": {
        "night": true,
        "choices": [
            {
                "next": "day3_night_msg_seoyeon",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_night_msg_yuna",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_night_msg_dain",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_night_msg_nurse",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_night_msg_teacher",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_night_ignore_all"
            }
        ]
    },
    "day3_night_msg_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "setFlag": "checked_seoyeon_msg",
        "branches": [
            {
                "next": "day3_night_seoyeon_suspicious",
                "condition": "day3_seoyeon_knows_others"
            },
            {
                "next": "day3_night_seoyeon_jealous",
                "condition": "day3_caught_multiple_dates"
            },
            {
                "next": "day3_night_seoyeon_normal"
            }
        ]
    },
    "day3_night_seoyeon_suspicious": {
        "character": "assets/images/characters/seyoun_sad.png",
        "silhouette": true,
        "night": true,
        "choices": [
            {
                "next": "day3_night_seoyeon_lie",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                },
                "setFlag": "day3_lied_to_seoyeon"
            },
            {
                "next": "day3_night_seoyeon_honest",
                "stats": {
                    "Seoyeon": {
                        "affinity": -8
                    }
                }
            },
            {
                "next": "day3_night_seoyeon_ignore",
                "stats": {
                    "Seoyeon": {
                        "affinity": -5
                    }
                }
            }
        ]
    },
    "day3_night_seoyeon_lie": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_back_to_messages"
    },
    "day3_night_seoyeon_honest": {
        "character": "assets/images/characters/seyoun_sad.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_seoyeon_angry"
    },
    "day3_night_seoyeon_angry": {
        "character": "assets/images/characters/seyoun_sad.png",
        "silhouette": true,
        "night": true,
        "setFlag": "day3_seoyeon_angry",
        "next": "day3_night_back_to_messages"
    },
    "day3_night_seoyeon_ignore": {
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "setFlag": "day3_ignored_seoyeon",
        "next": "day3_night_back_to_messages"
    },
    "day3_night_seoyeon_jealous": {
        "character": "assets/images/characters/seyoun_sad.png",
        "silhouette": true,
        "night": true,
        "choices": [
            {
                "next": "day3_night_seoyeon_apologize",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_night_seoyeon_reassure",
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_night_seoyeon_ignore",
                "stats": {
                    "Seoyeon": {
                        "affinity": -5
                    }
                }
            }
        ]
    },
    "day3_night_seoyeon_apologize": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_back_to_messages"
    },
    "day3_night_seoyeon_reassure": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "night": true,
        "setFlag": "day3_seoyeon_expects_priority",
        "next": "day3_night_back_to_messages"
    },
    "day3_night_seoyeon_normal": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "night": true,
        "setFlag": "checked_seoyeon_msg",
        "choices": [
            {
                "next": "day3_night_seoyeon_good",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_night_seoyeon_good",
                "stats": {
                    "Seoyeon": {
                        "affinity": 2
                    }
                }
            }
        ]
    },
    "day3_night_seoyeon_good": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "night": true,
        "next": "day3_night_back_to_messages"
    },
    "day3_night_msg_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "setFlag": "checked_yuna_msg",
        "branches": [
            {
                "next": "day3_night_yuna_witnessed",
                "condition": "day3_yuna_witnessed_seoyeon"
            },
            {
                "next": "day3_night_yuna_knows",
                "condition": "day3_caught_multiple_dates"
            },
            {
                "next": "day3_night_yuna_normal"
            }
        ]
    },
    "day3_night_yuna_witnessed": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_yuna_warning"
    },
    "day3_night_yuna_warning": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "choices": [
            {
                "next": "day3_night_yuna_reassure",
                "stats": {
                    "Yuna": {
                        "affinity": 10
                    }
                },
                "setFlag": "day3_lied_to_yuna"
            },
            {
                "next": "day3_night_yuna_excuse",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_night_yuna_apologize",
                "stats": {
                    "Yuna": {
                        "affinity": -3
                    }
                }
            }
        ]
    },
    "day3_night_yuna_reassure": {
        "character": "assets/images/characters/yuna_smile.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_yuna_threat"
    },
    "day3_night_yuna_threat": {
        "character": "assets/images/characters/yuna_smile.png",
        "silhouette": true,
        "night": true,
        "setFlag": "day3_yuna_threatened",
        "next": "day3_night_back_to_messages"
    },
    "day3_night_yuna_excuse": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_back_to_messages"
    },
    "day3_night_yuna_apologize": {
        "character": "assets/images/characters/yuna_sad.png",
        "silhouette": true,
        "night": true,
        "setFlag": "day3_yuna_upset",
        "next": "day3_night_back_to_messages"
    },
    "day3_night_yuna_knows": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_yuna_knows_2"
    },
    "day3_night_yuna_knows_2": {
        "character": "assets/images/characters/yuna_smile.png",
        "silhouette": true,
        "night": true,
        "setFlag": "day3_yuna_confident",
        "next": "day3_night_back_to_messages"
    },
    "day3_night_yuna_normal": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "setFlag": "checked_yuna_msg",
        "choices": [
            {
                "next": "day3_night_yuna_sleep",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_night_yuna_dream",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            }
        ]
    },
    "day3_night_yuna_dream": {
        "character": "assets/images/characters/yuna_smile.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_back_to_messages"
    },
    "day3_night_yuna_sleep": {
        "night": true,
        "next": "day3_night_back_to_messages"
    },
    "day3_night_msg_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "setFlag": "checked_dain_msg",
        "branches": [
            {
                "next": "day3_night_dain_suspicious",
                "condition": "day3_caught_multiple_dates"
            },
            {
                "next": "day3_night_dain_normal"
            }
        ]
    },
    "day3_night_dain_suspicious": {
        "character": "assets/images/characters/dain_sad.png",
        "silhouette": true,
        "night": true,
        "choices": [
            {
                "next": "day3_night_dain_priority",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                },
                "setFlag": "day3_lied_to_dain"
            },
            {
                "next": "day3_night_dain_honest",
                "stats": {
                    "Dain": {
                        "affinity": -5
                    }
                }
            },
            {
                "next": "day3_night_dain_excuse",
                "stats": {
                    "Dain": {
                        "affinity": 2
                    }
                }
            }
        ]
    },
    "day3_night_dain_priority": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "night": true,
        "setFlag": "day3_dain_expects_priority",
        "next": "day3_night_back_to_messages"
    },
    "day3_night_dain_honest": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_back_to_messages"
    },
    "day3_night_dain_excuse": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_back_to_messages"
    },
    "day3_night_dain_normal": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "night": true,
        "setFlag": "checked_dain_msg",
        "choices": [
            {
                "next": "day3_night_dain_good",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_night_dain_good",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "day3_night_dain_good": {
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day3_night_back_to_messages"
    },
    "day3_night_msg_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "setFlag": "checked_nurse_msg",
        "next": "day3_night_nurse_2"
    },
    "day3_night_nurse_2": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "choices": [
            {
                "next": "day3_night_nurse_excited",
                "stats": {
                    "Nurse": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_night_nurse_curious",
                "stats": {
                    "Nurse": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "day3_night_nurse_excited": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_back_to_messages"
    },
    "day3_night_nurse_curious": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_back_to_messages"
    },
    "day3_night_msg_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "setFlag": "checked_teacher_msg",
        "next": "day3_night_teacher_2"
    },
    "day3_night_teacher_2": {
        "character": "assets/images/characters/teacher_smile.png",
        "silhouette": true,
        "night": true,
        "choices": [
            {
                "next": "day3_night_teacher_good",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_night_teacher_good",
                "stats": {
                    "Teacher": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "day3_night_teacher_good": {
        "character": "assets/images/characters/teacher_smile.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_back_to_messages"
    },
    "day3_night_back_to_messages": {
        "character": null,
        "night": true,
        "choices": [
            {
                "next": "day3_night_msg_seoyeon",
                "condition": "day3_seoyeon_date_confirmed",
                "excludeCondition": "checked_seoyeon_msg"
            },
            {
                "next": "day3_night_msg_yuna",
                "condition": "day3_yuna_date_confirmed",
                "excludeCondition": "checked_yuna_msg"
            },
            {
                "next": "day3_night_msg_dain",
                "condition": "day3_dain_date_confirmed",
                "excludeCondition": "checked_dain_msg"
            },
            {
                "next": "day3_night_msg_nurse",
                "condition": "day3_nurse_date_confirmed",
                "excludeCondition": "checked_nurse_msg"
            },
            {
                "next": "day3_night_msg_teacher",
                "condition": "day3_teacher_date_confirmed",
                "excludeCondition": "checked_teacher_msg"
            },
            {
                "next": "day3_night_sleep"
            }
        ]
    },
    "day3_night_single_message": {
        "night": true,
        "branches": [
            {
                "next": "day3_night_seoyeon_normal",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_night_yuna_normal",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_night_dain_normal",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_night_msg_nurse",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_night_msg_teacher",
                "condition": "day3_teacher_date_confirmed"
            }
        ]
    },
    "day3_night_no_message": {
        "night": true,
        "next": "day3_night_sleep"
    },
    "day3_night_ignore_all": {
        "night": true,
        "setFlag": "day3_ignored_all_messages",
        "stats": {
            "Seoyeon": {
                "affinity": -3
            },
            "Yuna": {
                "affinity": -3
            },
            "Dain": {
                "affinity": -3
            }
        },
        "next": "day3_night_sleep"
    },
    "day3_night_sleep": {
        "character": null,
        "night": true,
        "branches": [
            {
                "next": "day3_night_phone_seoyeon",
                "condition": "day3_walked_with_seoyeon"
            },
            {
                "next": "day3_night_phone_yuna",
                "condition": "day3_walked_with_yuna"
            },
            {
                "next": "day3_night_phone_dain",
                "condition": "day3_walked_with_dain"
            },
            {
                "next": "day3_night_phone_nurse",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_night_phone_teacher",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_night_sleep_2"
            }
        ]
    },
    "day3_night_phone_seoyeon": {
        "character": "assets/images/characters/seyoun_shy.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_seoyeon_freetalk"
    },
    "day3_night_phone_seoyeon_freetalk": {
        "type": "free_talk",
        "character": "assets/images/characters/seyoun_shy.png",
        "maxTurns": 3,
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_end"
    },
    "day3_night_phone_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_yuna_freetalk"
    },
    "day3_night_phone_yuna_freetalk": {
        "type": "free_talk",
        "character": "assets/images/characters/yuna_normal.png",
        "maxTurns": 2,
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_end"
    },
    "day3_night_phone_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_dain_freetalk"
    },
    "day3_night_phone_dain_freetalk": {
        "type": "free_talk",
        "character": "assets/images/characters/dain_normal.png",
        "maxTurns": 3,
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_end"
    },
    "day3_night_phone_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_nurse_freetalk"
    },
    "day3_night_phone_nurse_freetalk": {
        "type": "free_talk",
        "character": "assets/images/characters/nurse_normal.png",
        "maxTurns": 2,
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_end"
    },
    "day3_night_phone_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_teacher_freetalk"
    },
    "day3_night_phone_teacher_freetalk": {
        "type": "free_talk",
        "character": "assets/images/characters/teacher_normal.png",
        "maxTurns": 2,
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_end"
    },
    "day3_night_phone_end": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "day3_night_sleep_2"
    },
    "day3_night_sleep_2": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "day3_night_sleep_final"
    },
    "day3_night_sleep_final": {
        "character": null,
        "night": true,
        "branches": [
            {
                "next": "day3_night_nightmare",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_night_peaceful"
            }
        ]
    },
    "day3_night_nightmare": {
        "night": true,
        "branches": [
            {
                "next": "day3_night_nightmare_voice1",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_night_nightmare_voice2",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_night_nightmare_voice3",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_night_nightmare_choice"
            }
        ]
    },
    "day3_night_nightmare_voice1": {
        "character": "assets/images/characters/seyoun_sad.png",
        "silhouette": true,
        "night": true,
        "branches": [
            {
                "next": "day3_night_nightmare_voice2",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_night_nightmare_voice3",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_night_nightmare_choice"
            }
        ]
    },
    "day3_night_nightmare_voice2": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "branches": [
            {
                "next": "day3_night_nightmare_voice3",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_night_nightmare_choice"
            }
        ]
    },
    "day3_night_nightmare_voice3": {
        "character": "assets/images/characters/dain_sad.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_nightmare_choice"
    },
    "day3_night_nightmare_choice": {
        "character": null,
        "night": true,
        "choices": [
            {
                "next": "day3_night_nightmare_end",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_night_nightmare_end",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_night_nightmare_end",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_night_nightmare_end"
            }
        ]
    },
    "day3_night_nightmare_end": {
        "character": null,
        "night": true,
        "next": "day3_night_nightmare_wake"
    },
    "day3_night_nightmare_wake": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "day3_final_scene"
    },
    "day3_night_peaceful": {
        "night": true,
        "branches": [
            {
                "next": "day3_night_loyalty_seoyeon",
                "condition": "day3_seoyeon_date_confirmed",
                "excludeCondition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_night_loyalty_yuna",
                "condition": "day3_yuna_date_confirmed",
                "excludeCondition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_night_loyalty_dain",
                "condition": "day3_dain_date_confirmed",
                "excludeCondition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_night_loyalty_nurse",
                "condition": "day3_nurse_date_confirmed",
                "excludeCondition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_night_loyalty_teacher",
                "condition": "day3_teacher_date_confirmed",
                "excludeCondition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_final_scene"
            }
        ]
    },
    "day3_night_loyalty_seoyeon": {
        "night": true,
        "stats": {
            "Seoyeon": {
                "affinity": 10
            }
        },
        "setFlag": "day3_loyalty_bonus",
        "fade": true,
        "next": "day3_final_scene"
    },
    "day3_night_loyalty_yuna": {
        "night": true,
        "stats": {
            "Yuna": {
                "affinity": 10
            }
        },
        "setFlag": "day3_loyalty_bonus",
        "fade": true,
        "next": "day3_final_scene"
    },
    "day3_night_loyalty_dain": {
        "night": true,
        "stats": {
            "Dain": {
                "affinity": 10
            }
        },
        "setFlag": "day3_loyalty_bonus",
        "fade": true,
        "next": "day3_final_scene"
    },
    "day3_night_loyalty_nurse": {
        "night": true,
        "stats": {
            "Nurse": {
                "affinity": 10
            }
        },
        "setFlag": "day3_loyalty_bonus",
        "fade": true,
        "next": "day3_final_scene"
    },
    "day3_night_loyalty_teacher": {
        "night": true,
        "stats": {
            "Teacher": {
                "affinity": 10
            }
        },
        "setFlag": "day3_loyalty_bonus",
        "fade": true,
        "next": "day3_final_scene"
    },
    "day3_final_scene": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "changeDay": 4,
        "next": "day4_start"
    }
});
