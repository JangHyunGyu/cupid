/**
 * ============================================================================
 * CUPID - day4_3_afterschool
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

Object.assign(SCENARIO[4], {
    "day4_afternoon_start": {
        "background": "assets/images/background/street.png",
        "bgm": "sunset2.mp3",
        "sunset": true,
        "next": "day4_walk_together"
    },
    "day4_walk_together": {
        "background": "assets/images/background/street.png",
        "next": "day4_walk_street"
    },
    "day4_walk_street": {
        "background": "assets/images/background/street.png",
        "next": "day4_walk_market"
    },
    "day4_walk_market": {
        "background": "assets/images/background/street.png",
        "next": "day4_walk_food_choice"
    },
    "day4_walk_food_choice": {
        "background": "assets/images/background/street.png",
        "choices": [
            {
                "next": "day4_walk_food_share"
            },
            {
                "next": "day4_walk_food_look"
            }
        ]
    },
    "day4_walk_food_share": {
        "background": "assets/images/background/street.png",
        "next": "day4_walk_close"
    },
    "day4_walk_food_look": {
        "background": "assets/images/background/street.png",
        "next": "day4_walk_close"
    },
    "day4_walk_close": {
        "background": "assets/images/background/street.png",
        "sunset": true,
        "next": "day4_walk_feelings"
    },
    "day4_walk_feelings": {
        "background": "assets/images/background/street.png",
        "next": "day4_afternoon_walk"
    },
    "day4_afternoon_walk": {
        "background": "assets/images/background/street.png",
        "next": "day4_special_notice"
    },
    "day4_special_notice": {
        "background": "assets/images/background/street.png",
        "next": "day4_special_visit"
    },
    "day4_special_visit": {
        "background": "assets/images/background/street.png",
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day4_special_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day4_special_yuna",
                "character": "Yuna"
            },
            {
                "next": "day4_special_dain",
                "character": "Dain"
            },
            {
                "next": "day4_special_nurse",
                "character": "Nurse"
            },
            {
                "next": "day4_special_teacher",
                "character": "Teacher"
            }
        ]
    },
    "day4_special_seoyeon": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day4_special_seoyeon_react"
    },
    "day4_special_seoyeon_react": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "choices": [
            {
                "next": "day4_afternoon_special",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_afternoon_special",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "day4_special_yuna": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day4_special_yuna_react"
    },
    "day4_special_yuna_react": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_smile.png",
        "choices": [
            {
                "next": "day4_afternoon_special",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_afternoon_special",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "day4_special_dain": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day4_special_dain_react"
    },
    "day4_special_dain_react": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_shy.png",
        "choices": [
            {
                "next": "day4_afternoon_special",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_afternoon_special",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "day4_special_nurse": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day4_special_nurse_react"
    },
    "day4_special_nurse_react": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/nurse_shy.png",
        "choices": [
            {
                "next": "day4_afternoon_special",
                "stats": {
                    "Nurse": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_afternoon_special",
                "stats": {
                    "Nurse": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "day4_special_teacher": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day4_special_teacher_react"
    },
    "day4_special_teacher_react": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/teacher_shy.png",
        "choices": [
            {
                "next": "day4_afternoon_special",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day4_afternoon_special",
                "stats": {
                    "Teacher": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "day4_afternoon_special": {
        "character": null,
        "background": "assets/images/background/park.png",
        "sunset": true,
        "next": "day4_afternoon_park"
    },
    "day4_afternoon_park": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "day4_sunset_approach"
    },
    "day4_sunset_approach": {
        "background": "assets/images/background/park.png",
        "character": null,
        "sunset": true,
        "next": "day4_sunset_colors"
    },
    "day4_sunset_colors": {
        "background": "assets/images/background/park.png",
        "character": null,
        "sunset": true,
        "next": "day4_sunset_wind"
    },
    "day4_sunset_wind": {
        "background": "assets/images/background/park.png",
        "character": null,
        "sunset": true,
        "next": "day4_sunset_stare"
    },
    "day4_sunset_stare": {
        "background": "assets/images/background/park.png",
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day4_sunset_stare_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day4_sunset_stare_yuna",
                "character": "Yuna"
            },
            {
                "next": "day4_sunset_stare_dain",
                "character": "Dain"
            },
            {
                "next": "day4_sunset_stare_nurse",
                "character": "Nurse"
            },
            {
                "next": "day4_sunset_stare_teacher",
                "character": "Teacher"
            }
        ]
    },
    "day4_sunset_stare_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day4_afternoon_sunset"
    },
    "day4_sunset_stare_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day4_afternoon_sunset"
    },
    "day4_sunset_stare_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day4_afternoon_sunset"
    },
    "day4_sunset_stare_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day4_afternoon_sunset"
    },
    "day4_sunset_stare_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day4_afternoon_sunset"
    },
    "day4_afternoon_sunset": {
        "character": null,
        "bgm": "confession.mp3",
        "sunset": true,
        "next": "day4_afternoon_silence"
    },
    "day4_afternoon_silence": {
        "character": null,
        "sunset": true,
        "next": "day4_afternoon_feeling"
    },
    "day4_afternoon_feeling": {
        "character": null,
        "sunset": true,
        "next": "day4_confession_choice"
    },
    "day4_confession_choice": {
        "character": null,
        "sunset": true,
        "choices": [
            {
                "next": "day4_confess",
                "setFlag": "day4_confessed"
            },
            {
                "next": "day4_wait",
                "setFlag": "day4_waited"
            }
        ]
    },
    "day4_confess": {
        "character": null,
        "sunset": true,
        "next": "day4_confess_heartbeat"
    },
    "day4_confess_heartbeat": {
        "character": null,
        "sunset": true,
        "next": "day4_confess_2"
    },
    "day4_confess_2": {
        "character": null,
        "sunset": true,
        "next": "day4_confess_breathe"
    },
    "day4_confess_breathe": {
        "character": null,
        "sunset": true,
        "next": "day4_confess_3"
    },
    "day4_confess_3": {
        "character": null,
        "sunset": true,
        "next": "day4_confess_silence"
    },
    "day4_confess_silence": {
        "character": null,
        "sunset": true,
        "next": "day4_confess_response"
    },
    "day4_confess_response": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day4_confess_to_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day4_confess_to_yuna",
                "character": "Yuna"
            },
            {
                "next": "day4_confess_to_dain",
                "character": "Dain"
            },
            {
                "next": "day4_confess_to_nurse",
                "character": "Nurse"
            },
            {
                "next": "day4_confess_to_teacher",
                "character": "Teacher"
            }
        ]
    },
    "day4_confess_to_seoyeon": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "sunset": true,
        "next": "day4_accept_seoyeon"
    },
    "day4_confess_to_yuna": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "day4_accept_yuna"
    },
    "day4_confess_to_dain": {
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "next": "day4_accept_dain"
    },
    "day4_confess_to_nurse": {
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "next": "day4_accept_nurse"
    },
    "day4_confess_to_teacher": {
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "next": "day4_accept_teacher"
    },
    "day4_accept_seoyeon": {
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 20
            }
        },
        "setFlags": [
            "day4_confession_accepted",
            "isDating_Seoyeon"
        ],
        "next": "day4_accept_seoyeon_moment"
    },
    "day4_accept_seoyeon_moment": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "sunset": true,
        "next": "day4_accept_seoyeon_close"
    },
    "day4_accept_seoyeon_close": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "sunset": true,
        "next": "day4_after_confess"
    },
    "day4_accept_yuna": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 20
            }
        },
        "setFlags": [
            "day4_confession_accepted",
            "isDating_Yuna"
        ],
        "next": "day4_accept_yuna_moment"
    },
    "day4_accept_yuna_moment": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "day4_accept_yuna_close"
    },
    "day4_accept_yuna_close": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "day4_after_confess"
    },
    "day4_accept_dain": {
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 20
            }
        },
        "setFlags": [
            "day4_confession_accepted",
            "isDating_Dain"
        ],
        "next": "day4_accept_dain_moment"
    },
    "day4_accept_dain_moment": {
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "next": "day4_accept_dain_close"
    },
    "day4_accept_dain_close": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day4_after_confess"
    },
    "day4_accept_nurse": {
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "stats": {
            "Nurse": {
                "affinity": 20
            }
        },
        "setFlags": [
            "day4_confession_accepted",
            "isDating_Nurse"
        ],
        "next": "day4_accept_nurse_moment"
    },
    "day4_accept_nurse_moment": {
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "next": "day4_accept_nurse_close"
    },
    "day4_accept_nurse_close": {
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "next": "day4_after_confess"
    },
    "day4_accept_teacher": {
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "stats": {
            "Teacher": {
                "affinity": 20
            }
        },
        "setFlags": [
            "day4_confession_accepted",
            "isDating_Teacher"
        ],
        "next": "day4_accept_teacher_moment"
    },
    "day4_accept_teacher_moment": {
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "next": "day4_accept_teacher_close"
    },
    "day4_accept_teacher_close": {
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day4_after_confess"
    },
    "day4_after_confess": {
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day4_night_start"
    },
    "day4_wait": {
        "character": null,
        "sunset": true,
        "next": "day4_wait_conflict"
    },
    "day4_wait_conflict": {
        "character": null,
        "sunset": true,
        "next": "day4_wait_walk"
    },
    "day4_wait_walk": {
        "character": null,
        "sunset": true,
        "next": "day4_wait_talk"
    },
    "day4_wait_talk": {
        "character": null,
        "sunset": true,
        "next": "day4_wait_linger"
    },
    "day4_wait_linger": {
        "character": null,
        "sunset": true,
        "next": "day4_wait_feelings"
    },
    "day4_wait_feelings": {
        "character": null,
        "sunset": true,
        "next": "day4_wait_response"
    },
    "day4_wait_response": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day4_wait_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day4_wait_yuna",
                "character": "Yuna"
            },
            {
                "next": "day4_wait_dain",
                "character": "Dain"
            },
            {
                "next": "day4_wait_nurse",
                "character": "Nurse"
            },
            {
                "next": "day4_wait_teacher",
                "character": "Teacher"
            }
        ]
    },
    "day4_wait_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day4_wait_goodbye"
    },
    "day4_wait_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day4_wait_goodbye"
    },
    "day4_wait_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day4_wait_goodbye"
    },
    "day4_wait_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day4_wait_goodbye"
    },
    "day4_wait_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "stats": {
            "Teacher": {
                "affinity": 5
            }
        },
        "next": "day4_wait_goodbye"
    },
    "day4_wait_goodbye": {
        "character": null,
        "sunset": true,
        "next": "day4_wait_regret"
    },
    "day4_wait_regret": {
        "character": null,
        "sunset": true,
        "next": "day4_wait_home"
    },
    "day4_wait_home": {
        "character": null,
        "sunset": true,
        "next": "day4_wait_end"
    },
    "day4_wait_end": {
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day4_night_start"
    }
});
