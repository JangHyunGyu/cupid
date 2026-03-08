/**
 * ============================================================================
 * CUPID - day5_2_lunch
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

Object.assign(SCENARIO[5], {
    "day5_school_arrive": {
        "background": "assets/images/background/school.png",
        "bgm": "date.mp3",
        "next": "day5_school_arrive2"
    },
    "day5_school_arrive2": {
        "background": "assets/images/background/school.png",
        "next": "day5_school_arrive3"
    },
    "day5_school_arrive3": {
        "background": "assets/images/background/school.png",
        "next": "day5_school_arrive4"
    },
    "day5_school_arrive4": {
        "background": "assets/images/background/school.png",
        "next": "day5_school_meet"
    },
    "day5_school_meet": {
        "background": "assets/images/background/school.png",
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_meet_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_meet_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_meet_dain",
                "character": "Dain"
            },
            {
                "next": "day5_meet_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_meet_teacher",
                "character": "Teacher"
            }
        ]
    },
    "day5_meet_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day5_meet_seoyeon2"
    },
    "day5_meet_seoyeon2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day5_react_seoyeon"
    },
    "day5_react_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day5_seoyeon_d4_check"
    },
    "day5_seoyeon_d4_check": {
        "background": "assets/images/background/school.png",
        "branches": [
            {
                "next": "day5_seoyeon_d4_warmth",
                "condition": "day4_hugged_seoyeon"
            },
            {
                "next": "day5_seoyeon_d4_warmth_pinky",
                "condition": "day4_pinky_seoyeon"
            },
            {
                "next": "day5_outfit_reaction_check"
            }
        ]
    },
    "day5_seoyeon_d4_warmth": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day5_outfit_reaction_check"
    },
    "day5_seoyeon_d4_warmth_pinky": {
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day5_outfit_reaction_check"
    },
    "day5_meet_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day5_meet_yuna2"
    },
    "day5_meet_yuna2": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "day5_react_yuna"
    },
    "day5_react_yuna": {
        "character": "assets/images/characters/yuna_smile.png",
        "next": "day5_yuna_d4_check"
    },
    "day5_yuna_d4_check": {
        "background": "assets/images/background/school.png",
        "branches": [
            {
                "next": "day5_yuna_d4_warmth",
                "condition": "day4_held_yuna_hand"
            },
            {
                "next": "day5_yuna_d4_warmth_ally",
                "condition": "day4_yuna_ally"
            },
            {
                "next": "day5_outfit_reaction_check"
            }
        ]
    },
    "day5_yuna_d4_warmth": {
        "character": "assets/images/characters/yuna_shy.png",
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "day5_outfit_reaction_check"
    },
    "day5_yuna_d4_warmth_ally": {
        "character": "assets/images/characters/yuna_smile.png",
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "day5_outfit_reaction_check"
    },
    "day5_meet_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day5_meet_dain2"
    },
    "day5_meet_dain2": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day5_react_dain"
    },
    "day5_react_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "next": "day5_dain_d4_check"
    },
    "day5_dain_d4_check": {
        "background": "assets/images/background/school.png",
        "branches": [
            {
                "next": "day5_dain_d4_warmth",
                "condition": "day4_dain_tears"
            },
            {
                "next": "day5_outfit_reaction_check"
            }
        ]
    },
    "day5_dain_d4_warmth": {
        "character": "assets/images/characters/dain_shy.png",
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "day5_outfit_reaction_check"
    },
    "day5_meet_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day5_meet_nurse2"
    },
    "day5_meet_nurse2": {
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day5_react_nurse"
    },
    "day5_react_nurse": {
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day5_outfit_reaction_check"
    },
    "day5_meet_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day5_meet_teacher2"
    },
    "day5_meet_teacher2": {
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day5_react_teacher"
    },
    "day5_react_teacher": {
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day5_outfit_reaction_check"
    },
    "day5_outfit_reaction_check": {
        "background": "assets/images/background/school.png",
        "branches": [
            {
                "next": "day5_outfit_compliment",
                "condition": "day5_outfit_special"
            },
            {
                "next": "day5_walk_together"
            }
        ]
    },
    "day5_outfit_compliment": {
        "background": "assets/images/background/school.png",
        "next": "day5_walk_together"
    },
    "day5_walk_together": {
        "character": null,
        "next": "day5_walk_enter"
    },
    "day5_walk_enter": {
        "character": null,
        "background": "assets/images/background/school_hallway.png",
        "next": "day5_corridor1"
    },
    "day5_corridor1": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_corridor2"
    },
    "day5_corridor2": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_classroom_enter"
    },
    "day5_classroom_enter": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "day5_classroom1"
    },
    "day5_classroom1": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day5_classroom2"
    },
    "day5_classroom2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day5_classroom3"
    },
    "day5_classroom3": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day5_classroom_react"
    },
    "day5_classroom_react": {
        "background": "assets/images/background/room_school.png",
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_classroom_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_classroom_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_classroom_dain",
                "character": "Dain"
            },
            {
                "next": "day5_classroom_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_classroom_teacher",
                "character": "Teacher"
            }
        ]
    },
    "day5_classroom_seoyeon": {
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "day5_memory_spot_suggest"
    },
    "day5_classroom_yuna": {
        "character": "assets/images/characters/yuna_shy.png",
        "next": "day5_memory_spot_suggest"
    },
    "day5_classroom_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day5_memory_spot_suggest"
    },
    "day5_classroom_nurse": {
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day5_memory_spot_suggest"
    },
    "day5_classroom_teacher": {
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day5_memory_spot_suggest"
    },
    "day5_memory_spot_suggest": {
        "character": null,
        "next": "day5_memory_spot_branch"
    },
    "day5_memory_spot_branch": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_memory_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_memory_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_memory_dain",
                "character": "Dain"
            },
            {
                "next": "day5_memory_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_memory_teacher",
                "character": "Teacher"
            }
        ]
    },
    "day5_memory_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "background": "assets/images/background/park.png",
        "next": "day5_memory_seoyeon2"
    },
    "day5_memory_seoyeon2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day5_memory_common"
    },
    "day5_memory_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/library_old.png",
        "next": "day5_memory_yuna2"
    },
    "day5_memory_yuna2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_smile.png",
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "day5_memory_common"
    },
    "day5_memory_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "background": "assets/images/background/gym.png",
        "next": "day5_memory_dain2"
    },
    "day5_memory_dain2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "day5_memory_common"
    },
    "day5_memory_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "background": "assets/images/background/nurse_room.jpg",
        "next": "day5_memory_nurse2"
    },
    "day5_memory_nurse2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "day5_memory_common"
    },
    "day5_memory_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "background": "assets/images/background/room_school.png",
        "next": "day5_memory_teacher2"
    },
    "day5_memory_teacher2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "day5_memory_common"
    },
    "day5_memory_common": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "day5_memory_common2"
    },
    "day5_memory_common2": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "day5_rooftop_suggest"
    },
    "day5_rooftop_suggest": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "day5_rooftop_stairs1"
    },
    "day5_rooftop_stairs1": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_rooftop_stairs2"
    },
    "day5_rooftop_stairs2": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_rooftop_door"
    },
    "day5_rooftop_door": {
        "character": null,
        "background": "assets/images/background/top_school.png",
        "next": "day5_rooftop_view1"
    },
    "day5_rooftop_view1": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "next": "day5_rooftop_view2"
    },
    "day5_rooftop_view2": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "next": "day5_rooftop_lean"
    },
    "day5_rooftop_lean": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "next": "day5_rooftop_silence"
    },
    "day5_rooftop_silence": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "next": "day5_rooftop_talk_branch"
    },
    "day5_rooftop_talk_branch": {
        "background": "assets/images/background/top_school.png",
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_rooftop_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_rooftop_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_rooftop_dain",
                "character": "Dain"
            },
            {
                "next": "day5_rooftop_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_rooftop_teacher",
                "character": "Teacher"
            }
        ]
    },
    "day5_rooftop_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day5_rooftop_future_talk"
    },
    "day5_rooftop_yuna": {
        "character": "assets/images/characters/yuna_shy.png",
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day5_rooftop_future_talk"
    },
    "day5_rooftop_dain": {
        "character": "assets/images/characters/dain_sad.png",
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day5_rooftop_future_talk"
    },
    "day5_rooftop_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day5_rooftop_future_talk"
    },
    "day5_rooftop_teacher": {
        "character": "assets/images/characters/teacher_shy.png",
        "stats": {
            "Teacher": {
                "affinity": 5
            }
        },
        "next": "day5_rooftop_future_talk"
    },
    "day5_rooftop_future_talk": {
        "character": null,
        "next": "day5_rooftop_feeling1"
    },
    "day5_rooftop_feeling1": {
        "character": null,
        "next": "day5_rooftop_feeling2"
    },
    "day5_rooftop_feeling2": {
        "character": null,
        "next": "day5_lunch_suggest"
    },
    "day5_lunch_suggest": {
        "character": null,
        "next": "day5_lunch_setup"
    },
    "day5_lunch_setup": {
        "character": null,
        "next": "day5_lunch_sit"
    },
    "day5_lunch_sit": {
        "character": null,
        "next": "day5_lunch_eat1"
    },
    "day5_lunch_eat1": {
        "character": null,
        "next": "day5_lunch_talk1"
    },
    "day5_lunch_talk1": {
        "character": null,
        "next": "day5_lunch_talk2"
    },
    "day5_lunch_talk2": {
        "character": null,
        "next": "day5_lunch_talk3"
    },
    "day5_lunch_talk3": {
        "character": null,
        "next": "day5_lunch_talk4"
    },
    "day5_lunch_talk4": {
        "character": null,
        "next": "day5_lunch_moment_branch"
    },
    "day5_lunch_moment_branch": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_lunch_moment_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_lunch_moment_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_lunch_moment_dain",
                "character": "Dain"
            },
            {
                "next": "day5_lunch_moment_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_lunch_moment_teacher",
                "character": "Teacher"
            }
        ]
    },
    "day5_lunch_moment_seoyeon": {
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "day5_lunch_touch_seoyeon"
    },
    "day5_lunch_touch_seoyeon": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day5_lunch_after"
    },
    "day5_lunch_moment_yuna": {
        "character": "assets/images/characters/yuna_shy.png",
        "next": "day5_lunch_touch_yuna"
    },
    "day5_lunch_touch_yuna": {
        "character": "assets/images/characters/yuna_smile.png",
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day5_lunch_after"
    },
    "day5_lunch_moment_dain": {
        "character": "assets/images/characters/dain_shy.png",
        "next": "day5_lunch_touch_dain"
    },
    "day5_lunch_touch_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day5_lunch_after"
    },
    "day5_lunch_moment_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day5_lunch_touch_nurse"
    },
    "day5_lunch_touch_nurse": {
        "character": "assets/images/characters/nurse_shy.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day5_lunch_after"
    },
    "day5_lunch_moment_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day5_lunch_touch_teacher"
    },
    "day5_lunch_touch_teacher": {
        "character": "assets/images/characters/teacher_shy.png",
        "stats": {
            "Teacher": {
                "affinity": 5
            }
        },
        "next": "day5_lunch_after"
    },
    "day5_lunch_after": {
        "character": null,
        "next": "day5_lunch_cleanup"
    },
    "day5_lunch_cleanup": {
        "character": null,
        "next": "day5_pre_afternoon1"
    },
    "day5_pre_afternoon1": {
        "character": null,
        "next": "day5_pre_afternoon2"
    },
    "day5_pre_afternoon2": {
        "character": null,
        "next": "day5_pre_afternoon3"
    },
    "day5_pre_afternoon3": {
        "character": null,
        "next": "day5_pre_afternoon4"
    },
    "day5_pre_afternoon4": {
        "character": null,
        "fade": true,
        "next": "day5_afternoon_start"
    }
});
