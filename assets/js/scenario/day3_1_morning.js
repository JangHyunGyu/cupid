/**
 * ============================================================================
 * CUPID - day3_1_morning
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[3]) SCENARIO[3] = {};

Object.assign(SCENARIO[3], {
    "day3_start": {
        "background": "assets/images/background/room_my.png",
        "bgm": "intro.mp3",
        "character": null,
        "next": "day3_start_2"
    },
    "day3_nurse_home_morning": {
        "background": "assets/images/background/nurse_house.png",
        "character": null,
        "next": "day3_nurse_home_morning_2"
    },
    "day3_nurse_home_morning_2": {
        "background": "assets/images/background/nurse_house.png",
        "next": "day3_nurse_home_morning_3"
    },
    "day3_nurse_home_morning_3": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day3_nurse_home_morning_4"
    },
    "day3_nurse_home_morning_4": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "day3_nurse_home_morning_thanks"
            },
            {
                "next": "day3_nurse_home_morning_bold"
            },
            {
                "next": "day3_nurse_home_morning_shy"
            }
        ]
    },
    "day3_nurse_home_morning_thanks": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "day3_nurse_home_morning_leave"
    },
    "day3_nurse_home_morning_bold": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 8
            }
        },
        "next": "day3_nurse_home_morning_leave"
    },
    "day3_nurse_home_morning_shy": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day3_nurse_home_morning_leave"
    },
    "day3_nurse_home_morning_leave": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day3_nurse_home_morning_leave_2"
    },
    "day3_nurse_home_morning_leave_2": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlag": "day3_came_from_nurse_home",
        "next": "day3_nurse_home_school_arrival"
    },
    "day3_nurse_home_school_arrival": {
        "character": null,
        "background": "assets/images/background/school.png",
        "next": "day3_nurse_home_suspicion"
    },
    "day3_nurse_home_suspicion": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day3_nurse_home_suspicion_2"
    },
    "day3_nurse_home_suspicion_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "day3_nurse_home_lie"
            },
            {
                "next": "day3_nurse_home_half_lie"
            },
            {
                "next": "day3_nurse_home_stutter"
            }
        ]
    },
    "day3_nurse_home_lie": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlag": "day3_seoyeon_suspicious",
        "stats": {
            "Seoyeon": {
                "affinity": -10
            }
        },
        "next": "day3_nurse_home_yuna_appears"
    },
    "day3_nurse_home_half_lie": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "setFlag": "day3_seoyeon_jealous",
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "next": "day3_nurse_home_yuna_appears"
    },
    "day3_nurse_home_stutter": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "setFlag": "day3_seoyeon_very_suspicious",
        "stats": {
            "Seoyeon": {
                "affinity": -12
            }
        },
        "next": "day3_nurse_home_yuna_appears"
    },
    "day3_nurse_home_yuna_appears": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_nurse_home_yuna_appears_2"
    },
    "day3_nurse_home_yuna_appears_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_nurse_home_yuna_appears_3"
    },
    "day3_nurse_home_yuna_appears_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "day3_yuna_knows_secret",
        "stats": {
            "Yuna": {
                "affinity": -20
            }
        },
        "next": "day3_nurse_home_tension"
    },
    "day3_nurse_home_tension": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "stats": {
            "Seoyeon": {
                "affinity": -8
            }
        },
        "next": "day3_nurse_home_tension_2"
    },
    "day3_nurse_home_tension_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "choices": [
            {
                "next": "day3_nurse_home_escape"
            },
            {
                "next": "day3_nurse_home_excuse"
            }
        ]
    },
    "day3_nurse_home_escape": {
        "character": "assets/images/characters/seyoun_sad.png",
        "background": "assets/images/background/school.png",
        "next": "day3_classroom"
    },
    "day3_nurse_home_excuse": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "stats": {
            "Seoyeon": {
                "affinity": -10
            }
        },
        "next": "day3_nurse_home_excuse_2"
    },
    "day3_nurse_home_excuse_2": {
        "character": "assets/images/characters/seyoun_sad.png",
        "background": "assets/images/background/school.png",
        "next": "day3_classroom"
    },
    "day3_start_2": {
        "background": "assets/images/background/room_my.png",
        "next": "day3_start_3"
    },
    "day3_start_3": {
        "background": "assets/images/background/room_my.png",
        "branches": [
            {
                "next": "day3_morning_message_check",
                "condition": "has_any_contact"
            },
            {
                "next": "day3_prepare_school_no_contact"
            }
        ]
    },
    "day3_morning_message_check": {
        "choices": [
            {
                "next": "day3_show_message",
                "condition": "has_number_seyoun",
                "setFlags": [
                    "viewing_seoyeon",
                    "first_check"
                ]
            },
            {
                "next": "day3_show_message",
                "condition": "has_number_yuna",
                "setFlags": [
                    "viewing_yuna",
                    "first_check"
                ]
            },
            {
                "next": "day3_show_message",
                "condition": "has_number_dain",
                "setFlags": [
                    "viewing_dain",
                    "first_check"
                ]
            },
            {
                "next": "day3_show_message",
                "condition": "has_number_nurse",
                "setFlags": [
                    "viewing_nurse",
                    "first_check"
                ]
            },
            {
                "next": "day3_show_message",
                "condition": "has_number_teacher",
                "setFlags": [
                    "viewing_teacher",
                    "first_check"
                ]
            }
        ]
    },
    "day3_show_message": {
        "branches": [
            {
                "next": "day3_msg_seoyeon",
                "condition": "viewing_seoyeon"
            },
            {
                "next": "day3_msg_yuna",
                "condition": "viewing_yuna"
            },
            {
                "next": "day3_msg_dain",
                "condition": "viewing_dain"
            },
            {
                "next": "day3_msg_nurse",
                "condition": "viewing_nurse"
            },
            {
                "next": "day3_msg_teacher",
                "condition": "viewing_teacher"
            }
        ]
    },
    "day3_msg_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "next": "day3_msg_response_first"
    },
    "day3_msg_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day3_msg_response_first"
    },
    "day3_msg_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "next": "day3_msg_response_first"
    },
    "day3_msg_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day3_msg_response_first_teachers"
    },
    "day3_msg_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day3_msg_response_first_teachers"
    },
    "day3_msg_response_first": {
        "choices": [
            {
                "next": "day3_accept_walk",
                "stats": {
                    "#{current_character}": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_reject_walk",
                "stats": {
                    "#{current_character}": {
                        "affinity": -5
                    }
                }
            },
            {
                "next": "day3_check_more_messages"
            }
        ]
    },
    "day3_msg_response_first_teachers": {
        "choices": [
            {
                "next": "day3_accept_walk",
                "stats": {
                    "#{current_character}": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_reject_walk",
                "stats": {
                    "#{current_character}": {
                        "affinity": -5
                    }
                }
            },
            {
                "next": "day3_check_more_messages"
            }
        ]
    },
    "day3_msg_response_after_check": {
        "next": "day3_return_to_choice"
    },
    "day3_accept_walk": {
        "branches": [
            {
                "next": "day3_walk_with_seoyeon",
                "condition": "viewing_seoyeon"
            },
            {
                "next": "day3_walk_with_yuna",
                "condition": "viewing_yuna"
            },
            {
                "next": "day3_walk_with_dain",
                "condition": "viewing_dain"
            },
            {
                "next": "day3_walk_with_nurse",
                "condition": "viewing_nurse"
            },
            {
                "next": "day3_walk_with_teacher",
                "condition": "viewing_teacher"
            }
        ]
    },
    "day3_reject_walk": {
        "branches": [
            {
                "next": "day3_reject_msg_seoyeon",
                "condition": "viewing_seoyeon",
                "setFlags": [
                    "rejected_seoyeon"
                ]
            },
            {
                "next": "day3_reject_msg_yuna",
                "condition": "viewing_yuna",
                "setFlags": [
                    "rejected_yuna"
                ]
            },
            {
                "next": "day3_reject_msg_dain",
                "condition": "viewing_dain",
                "setFlags": [
                    "rejected_dain"
                ]
            },
            {
                "next": "day3_reject_msg_nurse",
                "condition": "viewing_nurse",
                "setFlags": [
                    "rejected_nurse"
                ]
            },
            {
                "next": "day3_reject_msg_teacher",
                "condition": "viewing_teacher",
                "setFlags": [
                    "rejected_teacher"
                ]
            }
        ]
    },
    "day3_reject_msg_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "next": "day3_after_reject"
    },
    "day3_reject_msg_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day3_after_reject"
    },
    "day3_reject_msg_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "next": "day3_after_reject"
    },
    "day3_reject_msg_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day3_after_reject"
    },
    "day3_reject_msg_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day3_after_reject"
    },
    "day3_after_reject": {
        "character": null,
        "choices": [
            {
                "next": "day3_check_more_after_reject"
            },
            {
                "next": "day3_prepare_school"
            }
        ]
    },
    "day3_check_more_messages": {
        "choices": [
            {
                "next": "day3_msg_seoyeon",
                "condition": "has_number_seyoun",
                "excludeCondition": "viewing_seoyeon",
                "clearFlags": [
                    "viewing_yuna",
                    "viewing_dain",
                    "viewing_nurse",
                    "viewing_teacher"
                ],
                "setFlags": [
                    "viewing_seoyeon"
                ]
            },
            {
                "next": "day3_msg_yuna",
                "condition": "has_number_yuna",
                "excludeCondition": "viewing_yuna",
                "clearFlags": [
                    "viewing_seoyeon",
                    "viewing_dain",
                    "viewing_nurse",
                    "viewing_teacher"
                ],
                "setFlags": [
                    "viewing_yuna"
                ]
            },
            {
                "next": "day3_msg_dain",
                "condition": "has_number_dain",
                "excludeCondition": "viewing_dain",
                "clearFlags": [
                    "viewing_seoyeon",
                    "viewing_yuna",
                    "viewing_nurse",
                    "viewing_teacher"
                ],
                "setFlags": [
                    "viewing_dain"
                ]
            },
            {
                "next": "day3_msg_nurse",
                "condition": "has_number_nurse",
                "excludeCondition": "viewing_nurse",
                "clearFlags": [
                    "viewing_seoyeon",
                    "viewing_yuna",
                    "viewing_dain",
                    "viewing_teacher"
                ],
                "setFlags": [
                    "viewing_nurse"
                ]
            },
            {
                "next": "day3_msg_teacher",
                "condition": "has_number_teacher",
                "excludeCondition": "viewing_teacher",
                "clearFlags": [
                    "viewing_seoyeon",
                    "viewing_yuna",
                    "viewing_dain",
                    "viewing_nurse"
                ],
                "setFlags": [
                    "viewing_teacher"
                ]
            },
            {
                "next": "day3_walk_with_seoyeon",
                "condition": "viewing_seoyeon",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_with_yuna",
                "condition": "viewing_yuna",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_with_dain",
                "condition": "viewing_dain",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_with_nurse",
                "condition": "viewing_nurse",
                "stats": {
                    "Nurse": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_with_teacher",
                "condition": "viewing_teacher",
                "stats": {
                    "Teacher": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_alone"
            }
        ]
    },
    "day3_check_more_after_reject": {
        "character": null,
        "silhouette": true,
        "choices": [
            {
                "next": "day3_msg_seoyeon_after_reject",
                "condition": "has_number_seyoun",
                "excludeCondition": "rejected_seoyeon",
                "clearFlags": [
                    "viewing_yuna",
                    "viewing_dain",
                    "viewing_nurse",
                    "viewing_teacher"
                ],
                "setFlags": [
                    "viewing_seoyeon"
                ]
            },
            {
                "next": "day3_msg_yuna_after_reject",
                "condition": "has_number_yuna",
                "excludeCondition": "rejected_yuna",
                "clearFlags": [
                    "viewing_seoyeon",
                    "viewing_dain",
                    "viewing_nurse",
                    "viewing_teacher"
                ],
                "setFlags": [
                    "viewing_yuna"
                ]
            },
            {
                "next": "day3_msg_dain_after_reject",
                "condition": "has_number_dain",
                "excludeCondition": "rejected_dain",
                "clearFlags": [
                    "viewing_seoyeon",
                    "viewing_yuna",
                    "viewing_nurse",
                    "viewing_teacher"
                ],
                "setFlags": [
                    "viewing_dain"
                ]
            },
            {
                "next": "day3_msg_nurse_after_reject",
                "condition": "has_number_nurse",
                "excludeCondition": "rejected_nurse",
                "clearFlags": [
                    "viewing_seoyeon",
                    "viewing_yuna",
                    "viewing_dain",
                    "viewing_teacher"
                ],
                "setFlags": [
                    "viewing_nurse"
                ]
            },
            {
                "next": "day3_msg_teacher_after_reject",
                "condition": "has_number_teacher",
                "excludeCondition": "rejected_teacher",
                "clearFlags": [
                    "viewing_seoyeon",
                    "viewing_yuna",
                    "viewing_dain",
                    "viewing_nurse"
                ],
                "setFlags": [
                    "viewing_teacher"
                ]
            },
            {
                "next": "day3_prepare_school"
            }
        ]
    },
    "day3_show_message_after_reject": {
        "branches": [
            {
                "next": "day3_msg_seoyeon_after_reject",
                "condition": "viewing_seoyeon"
            },
            {
                "next": "day3_msg_yuna_after_reject",
                "condition": "viewing_yuna"
            },
            {
                "next": "day3_msg_dain_after_reject",
                "condition": "viewing_dain"
            },
            {
                "next": "day3_msg_nurse_after_reject",
                "condition": "viewing_nurse"
            },
            {
                "next": "day3_msg_teacher_after_reject",
                "condition": "viewing_teacher"
            }
        ]
    },
    "day3_msg_seoyeon_after_reject": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_change_mind",
                "stats": {
                    "Seoyeon": {
                        "affinity": 1
                    }
                }
            },
            {
                "next": "day3_check_more_after_reject"
            },
            {
                "next": "day3_prepare_school"
            }
        ]
    },
    "day3_msg_yuna_after_reject": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_change_mind",
                "stats": {
                    "Yuna": {
                        "affinity": 1
                    }
                }
            },
            {
                "next": "day3_check_more_after_reject"
            },
            {
                "next": "day3_prepare_school"
            }
        ]
    },
    "day3_msg_dain_after_reject": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_change_mind",
                "stats": {
                    "Dain": {
                        "affinity": 1
                    }
                }
            },
            {
                "next": "day3_check_more_after_reject"
            },
            {
                "next": "day3_prepare_school"
            }
        ]
    },
    "day3_msg_nurse_after_reject": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_change_mind_teachers",
                "stats": {
                    "Nurse": {
                        "affinity": 1
                    }
                }
            },
            {
                "next": "day3_check_more_after_reject"
            },
            {
                "next": "day3_prepare_school"
            }
        ]
    },
    "day3_msg_teacher_after_reject": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_change_mind_teachers",
                "stats": {
                    "Teacher": {
                        "affinity": 1
                    }
                }
            },
            {
                "next": "day3_check_more_after_reject"
            },
            {
                "next": "day3_prepare_school"
            }
        ]
    },
    "day3_change_mind": {
        "character": null,
        "silhouette": true,
        "next": "day3_change_mind_reply"
    },
    "day3_change_mind_teachers": {
        "character": null,
        "silhouette": true,
        "next": "day3_change_mind_reply"
    },
    "day3_change_mind_reply": {
        "branches": [
            {
                "next": "day3_change_mind_seoyeon",
                "condition": "viewing_seoyeon"
            },
            {
                "next": "day3_change_mind_yuna",
                "condition": "viewing_yuna"
            },
            {
                "next": "day3_change_mind_dain",
                "condition": "viewing_dain"
            },
            {
                "next": "day3_change_mind_nurse",
                "condition": "viewing_nurse"
            },
            {
                "next": "day3_change_mind_teacher",
                "condition": "viewing_teacher"
            }
        ]
    },
    "day3_change_mind_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "next": "day3_walk_with_seoyeon"
    },
    "day3_change_mind_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day3_walk_with_yuna"
    },
    "day3_change_mind_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "next": "day3_walk_with_dain"
    },
    "day3_change_mind_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day3_walk_with_nurse"
    },
    "day3_change_mind_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day3_walk_with_teacher"
    },
    "day3_return_to_choice": {
        "choices": [
            {
                "next": "day3_walk_with_seoyeon",
                "condition": "has_number_seyoun",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_with_yuna",
                "condition": "has_number_yuna",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_with_dain",
                "condition": "has_number_dain",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_with_nurse",
                "condition": "has_number_nurse",
                "stats": {
                    "Nurse": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_with_teacher",
                "condition": "has_number_teacher",
                "stats": {
                    "Teacher": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_walk_alone"
            }
        ]
    },
    "day3_walk_with_seoyeon": {
        "background": "assets/images/background/street.png",
        "bgm": "daily2.mp3",
        "character": "assets/images/characters/seyoun_laugh.png",
        "setFlag": "day3_morning_with_seoyeon",
        "next": "day3_walk_with_seoyeon_2"
    },
    "day3_walk_with_seoyeon_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day3_walk_seoyeon_dream"
    },
    "day3_walk_seoyeon_dream": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day3_walk_seoyeon_dream_choice"
    },
    "day3_walk_seoyeon_dream_choice": {
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "day3_walk_seoyeon_dream_ask"
            },
            {
                "next": "day3_walk_seoyeon_dream_me"
            },
            {
                "next": "day3_walk_seoyeon_dream_bad"
            }
        ]
    },
    "day3_walk_seoyeon_dream_ask": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day3_walk_seoyeon_crosswalk"
    },
    "day3_walk_seoyeon_dream_me": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day3_walk_seoyeon_crosswalk"
    },
    "day3_walk_seoyeon_dream_bad": {
        "character": "assets/images/characters/seyoun_pout.png",
        "stats": {
            "Seoyeon": {
                "affinity": -2
            }
        },
        "next": "day3_walk_seoyeon_crosswalk"
    },
    "day3_walk_seoyeon_crosswalk": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day3_walk_seoyeon_crosswalk_2"
    },
    "day3_walk_seoyeon_crosswalk_2": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day3_walk_seoyeon_freetalk"
    },
    "day3_walk_seoyeon_freetalk": {
        "type": "free_talk",
        "character": "assets/images/characters/seyoun_shy.png",
        "maxTurns": 4,
        "next": "day3_seoyeon_weekend_talk"
    },
    "day3_seoyeon_weekend_talk": {
        "character": "assets/images/characters/seyoun_shy.png",
        "choices": [
            {
                "next": "day3_seoyeon_weekend_ask"
            },
            {
                "next": "day3_seoyeon_weekend_tease"
            },
            {
                "next": "day3_seoyeon_weekend_direct"
            }
        ]
    },
    "day3_seoyeon_weekend_ask": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day3_seoyeon_weekend_choice"
    },
    "day3_seoyeon_weekend_tease": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day3_seoyeon_weekend_choice"
    },
    "day3_seoyeon_weekend_direct": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day3_seoyeon_weekend_choice"
    },
    "day3_seoyeon_weekend_choice": {
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "day3_seoyeon_weekend_yes",
                "setFlag": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_seoyeon_weekend_later"
            },
            {
                "next": "day3_seoyeon_weekend_no"
            }
        ]
    },
    "day3_seoyeon_weekend_yes": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 8
            }
        },
        "next": "day3_arrive_school"
    },
    "day3_seoyeon_weekend_later": {
        "character": "assets/images/characters/seyoun_sad.png",
        "stats": {
            "Seoyeon": {
                "affinity": -5
            }
        },
        "next": "day3_arrive_school"
    },
    "day3_seoyeon_weekend_no": {
        "character": "assets/images/characters/seyoun_sad.png",
        "stats": {
            "Seoyeon": {
                "affinity": -15
            }
        },
        "next": "day3_arrive_school"
    },
    "day3_walk_with_yuna": {
        "background": "assets/images/background/street.png",
        "bgm": "daily2.mp3",
        "character": "assets/images/characters/yuna_normal.png",
        "setFlag": "day3_morning_with_yuna",
        "next": "day3_walk_yuna_greet"
    },
    "day3_walk_yuna_greet": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_walk_yuna_leaf"
    },
    "day3_walk_yuna_leaf": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_walk_yuna_leaf_2"
    },
    "day3_walk_yuna_leaf_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_walk_yuna_leaf_3"
    },
    "day3_walk_yuna_leaf_3": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_walk_yuna_necktie"
    },
    "day3_walk_yuna_necktie": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day3_walk_yuna_necktie_2"
    },
    "day3_walk_yuna_necktie_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day3_walk_yuna_necktie_still"
            },
            {
                "next": "day3_walk_yuna_necktie_cold"
            }
        ]
    },
    "day3_walk_yuna_necktie_still": {
        "character": "assets/images/characters/yuna_shy.png",
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day3_walk_yuna_freetalk"
    },
    "day3_walk_yuna_necktie_cold": {
        "character": "assets/images/characters/yuna_shy.png",
        "stats": {
            "Yuna": {
                "affinity": 8
            }
        },
        "next": "day3_walk_yuna_freetalk"
    },
    "day3_walk_yuna_freetalk": {
        "type": "free_talk",
        "character": "assets/images/characters/yuna_shy.png",
        "maxTurns": 3,
        "next": "day3_walk_yuna_talk"
    },
    "day3_walk_yuna_talk": {
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day3_yuna_weekend_ask"
            },
            {
                "next": "day3_yuna_weekend_curious"
            },
            {
                "next": "day3_yuna_weekend_direct"
            }
        ]
    },
    "day3_yuna_weekend_ask": {
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "day3_yuna_weekend_choice"
    },
    "day3_yuna_weekend_curious": {
        "character": "assets/images/characters/yuna_smile.png",
        "stats": {
            "Yuna": {
                "affinity": 1
            }
        },
        "next": "day3_yuna_weekend_choice"
    },
    "day3_yuna_weekend_direct": {
        "character": "assets/images/characters/yuna_smile.png",
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day3_yuna_weekend_choice"
    },
    "day3_yuna_weekend_choice": {
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "day3_yuna_weekend_yes",
                "setFlag": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_yuna_weekend_later"
            },
            {
                "next": "day3_yuna_weekend_no"
            }
        ]
    },
    "day3_yuna_weekend_yes": {
        "character": "assets/images/characters/yuna_shy.png",
        "stats": {
            "Yuna": {
                "affinity": 8
            }
        },
        "next": "day3_arrive_school"
    },
    "day3_yuna_weekend_later": {
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {
            "Yuna": {
                "affinity": -5
            }
        },
        "next": "day3_arrive_school"
    },
    "day3_yuna_weekend_no": {
        "character": "assets/images/characters/yuna_bored.png",
        "stats": {
            "Yuna": {
                "affinity": -15
            }
        },
        "next": "day3_arrive_school"
    },
    "day3_walk_with_dain": {
        "background": "assets/images/background/street.png",
        "bgm": "daily2.mp3",
        "character": "assets/images/characters/dain_laugh.png",
        "setFlag": "day3_morning_with_dain",
        "next": "day3_walk_dain_bump"
    },
    "day3_walk_dain_bump": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day3_walk_dain_bump_2"
    },
    "day3_walk_dain_bump_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day3_walk_dain_bump_3"
    },
    "day3_walk_dain_bump_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "day3_walk_dain_bump_4"
    },
    "day3_walk_dain_bump_4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "choices": [
            {
                "next": "day3_walk_dain_help"
            },
            {
                "next": "day3_walk_dain_bold"
            },
            {
                "next": "day3_walk_dain_freeze"
            }
        ]
    },
    "day3_walk_dain_help": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day3_walk_dain_greet"
    },
    "day3_walk_dain_bold": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "stats": {
            "Dain": {
                "affinity": 8
            }
        },
        "next": "day3_walk_dain_greet_shy"
    },
    "day3_walk_dain_freeze": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "day3_walk_dain_greet"
    },
    "day3_walk_dain_greet_shy": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "day3_walk_dain_greet"
    },
    "day3_walk_dain_greet": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day3_walk_dain_freetalk"
    },
    "day3_walk_dain_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "maxTurns": 4,
        "next": "day3_walk_dain_talk"
    },
    "day3_walk_dain_talk": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            {
                "next": "day3_dain_weekend_ask"
            },
            {
                "next": "day3_dain_weekend_early"
            },
            {
                "next": "day3_dain_weekend_hesitate"
            }
        ]
    },
    "day3_dain_weekend_ask": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "day3_dain_weekend_choice"
    },
    "day3_dain_weekend_early": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 1
            }
        },
        "next": "day3_dain_weekend_choice"
    },
    "day3_dain_weekend_hesitate": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_normal.png",
        "stats": {
            "Dain": {
                "affinity": -2
            }
        },
        "next": "day3_dain_weekend_choice"
    },
    "day3_dain_weekend_choice": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            {
                "next": "day3_dain_weekend_yes",
                "setFlag": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_dain_weekend_later"
            },
            {
                "next": "day3_dain_weekend_no"
            }
        ]
    },
    "day3_dain_weekend_yes": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 8
            }
        },
        "next": "day3_arrive_school"
    },
    "day3_dain_weekend_later": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_normal.png",
        "stats": {
            "Dain": {
                "affinity": -3
            }
        },
        "next": "day3_arrive_school"
    },
    "day3_dain_weekend_no": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_sad.png",
        "stats": {
            "Dain": {
                "affinity": -10
            }
        },
        "next": "day3_arrive_school"
    },
    "day3_walk_with_nurse": {
        "background": "assets/images/background/street.png",
        "bgm": "daily2.mp3",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlag": "day3_morning_with_nurse",
        "next": "day3_walk_nurse_greet"
    },
    "day3_walk_nurse_greet": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day3_walk_nurse_arm"
    },
    "day3_walk_nurse_arm": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "day3_walk_nurse_enjoy"
            },
            {
                "next": "day3_walk_nurse_worry"
            }
        ]
    },
    "day3_walk_nurse_enjoy": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day3_walk_nurse_conflict"
    },
    "day3_walk_nurse_worry": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 2
            }
        },
        "next": "day3_walk_nurse_conflict"
    },
    "day3_walk_nurse_conflict": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day3_walk_nurse_conflict_2"
    },
    "day3_walk_nurse_conflict_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "day3_walk_nurse_confess",
                "stats": {
                    "Nurse": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_walk_nurse_hand",
                "stats": {
                    "Nurse": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day3_walk_nurse_boundary",
                "stats": {
                    "Nurse": {
                        "affinity": -5
                    }
                }
            }
        ]
    },
    "day3_walk_nurse_confess": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day3_walk_nurse_freetalk"
    },
    "day3_walk_nurse_hand": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day3_walk_nurse_freetalk"
    },
    "day3_walk_nurse_boundary": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day3_walk_nurse_freetalk"
    },
    "day3_walk_nurse_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_shy.png",
        "maxTurns": 3,
        "next": "day3_walk_nurse_talk"
    },
    "day3_walk_nurse_talk": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "day3_nurse_weekend_ask"
            },
            {
                "next": "day3_nurse_weekend_curious"
            },
            {
                "next": "day3_nurse_weekend_none"
            }
        ]
    },
    "day3_nurse_weekend_ask": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "day3_nurse_weekend_choice"
    },
    "day3_nurse_weekend_curious": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 1
            }
        },
        "next": "day3_nurse_weekend_choice"
    },
    "day3_nurse_weekend_none": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 2
            }
        },
        "next": "day3_nurse_weekend_choice"
    },
    "day3_nurse_weekend_choice": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            {
                "next": "day3_nurse_weekend_yes",
                "setFlag": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_nurse_weekend_later"
            },
            {
                "next": "day3_nurse_weekend_no"
            }
        ]
    },
    "day3_nurse_weekend_yes": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 8
            }
        },
        "next": "day3_arrive_school"
    },
    "day3_nurse_weekend_later": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": -3
            }
        },
        "next": "day3_arrive_school"
    },
    "day3_nurse_weekend_no": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": -10
            }
        },
        "next": "day3_arrive_school"
    },
    "day3_walk_with_teacher": {
        "background": "assets/images/background/street.png",
        "bgm": "daily2.mp3",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlag": "day3_morning_with_teacher",
        "next": "day3_walk_teacher_greet"
    },
    "day3_walk_teacher_greet": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day3_walk_teacher_car"
    },
    "day3_walk_teacher_car": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day3_walk_teacher_hair"
    },
    "day3_walk_teacher_hair": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day3_walk_teacher_hair_2"
    },
    "day3_walk_teacher_hair_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "day3_walk_teacher_conflict"
    },
    "day3_walk_teacher_conflict": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "choices": [
            {
                "next": "day3_walk_teacher_warm",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_walk_teacher_hold",
                "stats": {
                    "Teacher": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_walk_teacher_calm",
                "stats": {
                    "Teacher": {
                        "affinity": 2
                    }
                }
            }
        ]
    },
    "day3_walk_teacher_warm": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "day3_walk_teacher_freetalk"
    },
    "day3_walk_teacher_hold": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "day3_walk_teacher_freetalk"
    },
    "day3_walk_teacher_calm": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day3_walk_teacher_freetalk"
    },
    "day3_walk_teacher_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "maxTurns": 3,
        "next": "day3_walk_teacher_talk"
    },
    "day3_walk_teacher_talk": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            {
                "next": "day3_teacher_weekend_ask"
            },
            {
                "next": "day3_teacher_weekend_curious"
            },
            {
                "next": "day3_teacher_weekend_none"
            }
        ]
    },
    "day3_teacher_weekend_ask": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "day3_teacher_weekend_choice"
    },
    "day3_teacher_weekend_curious": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "stats": {
            "Teacher": {
                "affinity": 1
            }
        },
        "next": "day3_teacher_weekend_choice"
    },
    "day3_teacher_weekend_none": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 2
            }
        },
        "next": "day3_teacher_weekend_choice"
    },
    "day3_teacher_weekend_choice": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            {
                "next": "day3_teacher_weekend_yes",
                "setFlag": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_teacher_weekend_later"
            },
            {
                "next": "day3_teacher_weekend_no"
            }
        ]
    },
    "day3_teacher_weekend_yes": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 8
            }
        },
        "next": "day3_arrive_school"
    },
    "day3_teacher_weekend_later": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "stats": {
            "Teacher": {
                "affinity": -3
            }
        },
        "next": "day3_arrive_school"
    },
    "day3_teacher_weekend_no": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "stats": {
            "Teacher": {
                "affinity": -10
            }
        },
        "next": "day3_arrive_school"
    },
    "day3_prepare_school": {
        "next": "day3_walk_alone"
    },
    "day3_prepare_school_no_contact": {
        "next": "day3_prepare_school_ads"
    },
    "day3_prepare_school_ads": {
        "next": "day3_walk_alone"
    },
    "day3_walk_alone": {
        "background": "assets/images/background/street.png",
        "bgm": "daily2.mp3",
        "character": null,
        "next": "day3_arrive_school"
    },
    "day3_arrive_school": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "day3_classroom"
    },
    "day3_classroom": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            {
                "next": "day3_classroom_note_seoyeon",
                "condition": "day3_morning_with_seoyeon"
            },
            {
                "next": "day3_classroom_note_yuna",
                "condition": "day3_morning_with_yuna"
            },
            {
                "next": "day3_classroom_note_dain",
                "condition": "day3_morning_with_dain"
            },
            {
                "next": "day3_classroom_empty"
            }
        ]
    },
    "day3_classroom_note_seoyeon": {
        "stats": {
            "Seoyeon": {
                "affinity": 2
            }
        },
        "next": "day3_classroom_class_start"
    },
    "day3_classroom_note_yuna": {
        "stats": {
            "Yuna": {
                "affinity": 2
            }
        },
        "next": "day3_classroom_class_start"
    },
    "day3_classroom_note_dain": {
        "stats": {
            "Dain": {
                "affinity": 2
            }
        },
        "next": "day3_classroom_class_start"
    },
    "day3_classroom_empty": {
        "next": "day3_classroom_class_start"
    },
    "day3_classroom_class_start": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day3_classroom_teacher_event"
    },
    "day3_classroom_teacher_event": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "branches": [
            {
                "next": "day3_classroom_teacher_wink",
                "condition": "isDating_Teacher"
            },
            {
                "next": "day3_classroom_teacher_glance",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_classroom_nurse_visit"
            }
        ]
    },
    "day3_classroom_teacher_wink": {
        "character": "assets/images/characters/teacher_shy.png",
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "day3_classroom_nurse_visit"
    },
    "day3_classroom_teacher_glance": {
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 2
            }
        },
        "next": "day3_classroom_nurse_visit"
    },
    "day3_classroom_nurse_visit": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day3_classroom_nurse_visit_2"
    },
    "day3_classroom_nurse_visit_2": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day3_classroom_nurse_visit_3"
    },
    "day3_classroom_nurse_visit_3": {
        "character": "assets/images/characters/nurse_normal.png",
        "branches": [
            {
                "next": "day3_classroom_nurse_secret",
                "condition": "isDating_Nurse"
            },
            {
                "next": "day3_classroom_nurse_band",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_classroom_nurse_pass"
            }
        ]
    },
    "day3_classroom_nurse_secret": {
        "character": "assets/images/characters/nurse_shy.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day3_classroom_nurse_leave"
    },
    "day3_classroom_nurse_band": {
        "character": "assets/images/characters/nurse_shy.png",
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "day3_classroom_nurse_leave"
    },
    "day3_classroom_nurse_pass": {
        "next": "day3_classroom_nurse_leave"
    },
    "day3_classroom_nurse_leave": {
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day3_break_time"
    },
    "day3_break_time": {
        "character": "assets/images/characters/nurse_shy.png",
        "silhouette": true,
        "branches": [
            {
                "next": "day3_weekend_check_seoyeon",
                "condition": "has_any_contact"
            },
            {
                "next": "day3_morning_end"
            }
        ]
    },
    "day3_weekend_check_seoyeon": {
        "branches": [
            {
                "next": "day3_weekend_invite_seoyeon",
                "condition": "has_number_seyoun",
                "excludeCondition": "day3_morning_with_seoyeon"
            },
            {
                "next": "day3_weekend_check_yuna"
            }
        ]
    },
    "day3_weekend_invite_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_weekend_yes_seoyeon",
                "setFlag": "day3_seoyeon_date_confirmed",
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_weekend_no_seoyeon",
                "stats": {
                    "Seoyeon": {
                        "affinity": -3
                    }
                }
            }
        ]
    },
    "day3_weekend_yes_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "next": "day3_weekend_check_yuna"
    },
    "day3_weekend_no_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "next": "day3_weekend_check_yuna"
    },
    "day3_weekend_check_yuna": {
        "branches": [
            {
                "next": "day3_weekend_invite_yuna",
                "condition": "has_number_yuna",
                "excludeCondition": "day3_morning_with_yuna"
            },
            {
                "next": "day3_weekend_check_dain"
            }
        ]
    },
    "day3_weekend_invite_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_weekend_yes_yuna",
                "setFlag": "day3_yuna_date_confirmed",
                "stats": {
                    "Yuna": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_weekend_no_yuna",
                "stats": {
                    "Yuna": {
                        "affinity": -3
                    }
                }
            }
        ]
    },
    "day3_weekend_yes_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day3_weekend_check_dain"
    },
    "day3_weekend_no_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day3_weekend_check_dain"
    },
    "day3_weekend_check_dain": {
        "branches": [
            {
                "next": "day3_weekend_invite_dain",
                "condition": "has_number_dain",
                "excludeCondition": "day3_morning_with_dain"
            },
            {
                "next": "day3_weekend_check_nurse"
            }
        ]
    },
    "day3_weekend_invite_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_weekend_yes_dain",
                "setFlag": "day3_dain_date_confirmed",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_weekend_no_dain",
                "stats": {
                    "Dain": {
                        "affinity": -3
                    }
                }
            }
        ]
    },
    "day3_weekend_yes_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "next": "day3_weekend_check_nurse"
    },
    "day3_weekend_no_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "next": "day3_weekend_check_nurse"
    },
    "day3_weekend_check_nurse": {
        "branches": [
            {
                "next": "day3_weekend_invite_nurse",
                "condition": "has_number_nurse",
                "excludeCondition": "day3_morning_with_nurse"
            },
            {
                "next": "day3_weekend_check_teacher"
            }
        ]
    },
    "day3_weekend_invite_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_weekend_yes_nurse",
                "setFlag": "day3_nurse_date_confirmed",
                "stats": {
                    "Nurse": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_weekend_no_nurse",
                "stats": {
                    "Nurse": {
                        "affinity": -3
                    }
                }
            }
        ]
    },
    "day3_weekend_yes_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day3_weekend_check_teacher"
    },
    "day3_weekend_no_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day3_weekend_check_teacher"
    },
    "day3_weekend_check_teacher": {
        "branches": [
            {
                "next": "day3_weekend_invite_teacher",
                "condition": "has_number_teacher",
                "excludeCondition": "day3_morning_with_teacher"
            },
            {
                "next": "day3_check_multiple_dates"
            }
        ]
    },
    "day3_weekend_invite_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "choices": [
            {
                "next": "day3_weekend_yes_teacher",
                "setFlag": "day3_teacher_date_confirmed",
                "stats": {
                    "Teacher": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_weekend_no_teacher",
                "stats": {
                    "Teacher": {
                        "affinity": -3
                    }
                }
            }
        ]
    },
    "day3_weekend_yes_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day3_check_multiple_dates"
    },
    "day3_weekend_no_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day3_check_multiple_dates"
    },
    "day3_check_multiple_dates": {
        "branches": [
            {
                "next": "day3_multi_from_seoyeon",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_multi_from_yuna",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_multi_from_dain",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_multi_from_nurse",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_morning_end"
            }
        ]
    },
    "day3_multi_from_seoyeon": {
        "branches": [
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_morning_end"
            }
        ]
    },
    "day3_multi_from_yuna": {
        "branches": [
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_morning_end"
            }
        ]
    },
    "day3_multi_from_dain": {
        "branches": [
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_morning_end"
            }
        ]
    },
    "day3_multi_from_nurse": {
        "branches": [
            {
                "next": "day3_set_multiple_dates",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_morning_end"
            }
        ]
    },
    "day3_set_multiple_dates": {
        "setFlag": "day3_has_multiple_dates",
        "next": "day3_morning_end"
    },
    "day3_morning_end": {
        "fade": true,
        "next": "day3_lunch_start"
    }
});
