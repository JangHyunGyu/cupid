/**
 * ============================================================================
 * CUPID - day5_1_morning
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

Object.assign(SCENARIO[5], {
    "day5_start": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "bgm": "morning.mp3",
        "fade": true,
        "next": "day5_morning_wake"
    },
    "day5_morning_wake": {
        "background": "assets/images/background/room_my.png",
        "next": "day5_morning_stretch"
    },
    "day5_morning_stretch": {
        "background": "assets/images/background/room_my.png",
        "next": "day5_morning_think"
    },
    "day5_morning_think": {
        "background": "assets/images/background/room_my.png",
        "next": "day5_morning_mirror"
    },
    "day5_morning_mirror": {
        "background": "assets/images/background/room_my.png",
        "next": "day5_morning_mirror2"
    },
    "day5_morning_mirror2": {
        "background": "assets/images/background/room_my.png",
        "next": "day5_morning_phone_check"
    },
    "day5_morning_phone_check": {
        "background": "assets/images/background/room_my.png",
        "next": "day5_morning_msg_branch"
    },
    "day5_morning_msg_branch": {
        "background": "assets/images/background/room_my.png",
        "branches": [
            {
                "next": "day5_couple_msg_branch",
                "condition": "day4_confession_accepted"
            },
            {
                "next": "day5_pending_msg_branch",
                "condition": "day4_waited"
            },
            {
                "next": "day5_default_msg_start"
            }
        ]
    },
    "day5_couple_msg_branch": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_couple_msg_seoyeon",
                "character": "Seoyeon",
                "condition": "isDating_Seoyeon"
            },
            {
                "next": "day5_couple_msg_yuna",
                "character": "Yuna",
                "condition": "isDating_Yuna"
            },
            {
                "next": "day5_couple_msg_dain",
                "character": "Dain",
                "condition": "isDating_Dain"
            },
            {
                "next": "day5_couple_msg_nurse",
                "character": "Nurse",
                "condition": "isDating_Nurse"
            },
            {
                "next": "day5_couple_msg_teacher",
                "character": "Teacher",
                "condition": "isDating_Teacher"
            }
        ]
    },
    "day5_couple_msg_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "next": "day5_couple_react_seoyeon"
    },
    "day5_couple_react_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "stats": {
            "Seoyeon": {
                "affinity": 3
            }
        },
        "next": "day5_couple_reply_seoyeon"
    },
    "day5_couple_reply_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "next": "day5_morning_ready"
    },
    "day5_couple_msg_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day5_couple_react_yuna"
    },
    "day5_couple_react_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "stats": {
            "Yuna": {
                "affinity": 3
            }
        },
        "next": "day5_couple_reply_yuna"
    },
    "day5_couple_reply_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready"
    },
    "day5_couple_msg_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "next": "day5_couple_react_dain"
    },
    "day5_couple_react_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "stats": {
            "Dain": {
                "affinity": 3
            }
        },
        "next": "day5_couple_reply_dain"
    },
    "day5_couple_reply_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "next": "day5_morning_ready"
    },
    "day5_couple_msg_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day5_couple_react_nurse"
    },
    "day5_couple_react_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "next": "day5_couple_reply_nurse"
    },
    "day5_couple_reply_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready"
    },
    "day5_couple_msg_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day5_couple_react_teacher"
    },
    "day5_couple_react_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "stats": {
            "Teacher": {
                "affinity": 3
            }
        },
        "next": "day5_couple_reply_teacher"
    },
    "day5_couple_reply_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready"
    },
    "day5_pending_msg_branch": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_pending_msg_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_pending_msg_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_pending_msg_dain",
                "character": "Dain"
            },
            {
                "next": "day5_pending_msg_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_pending_msg_teacher",
                "character": "Teacher"
            }
        ]
    },
    "day5_pending_msg_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "next": "day5_pending_react_seoyeon"
    },
    "day5_pending_react_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "next": "day5_pending_reply_seoyeon"
    },
    "day5_pending_reply_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready"
    },
    "day5_pending_msg_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day5_pending_react_yuna"
    },
    "day5_pending_react_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day5_pending_reply_yuna"
    },
    "day5_pending_reply_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready"
    },
    "day5_pending_msg_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "next": "day5_pending_react_dain"
    },
    "day5_pending_react_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "next": "day5_pending_reply_dain"
    },
    "day5_pending_reply_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready"
    },
    "day5_pending_msg_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day5_pending_react_nurse"
    },
    "day5_pending_react_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day5_pending_reply_nurse"
    },
    "day5_pending_reply_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready"
    },
    "day5_pending_msg_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day5_pending_react_teacher"
    },
    "day5_pending_react_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day5_pending_reply_teacher"
    },
    "day5_pending_reply_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "next": "day5_morning_ready"
    },
    "day5_default_msg_start": {
        "next": "day5_default_msg_scroll"
    },
    "day5_default_msg_scroll": {
        "next": "day5_default_msg_reflect"
    },
    "day5_default_msg_reflect": {
        "next": "day5_default_msg_reflect2"
    },
    "day5_default_msg_reflect2": {
        "next": "day5_default_msg_resolve"
    },
    "day5_default_msg_resolve": {
        "next": "day5_default_msg_decide"
    },
    "day5_default_msg_decide": {
        "next": "day5_morning_ready"
    },
    "day5_morning_ready": {
        "character": null,
        "next": "day5_morning_closet"
    },
    "day5_morning_closet": {
        "character": null,
        "next": "day5_outfit_choice"
    },
    "day5_outfit_choice": {
        "character": null,
        "choices": [
            {
                "next": "day5_outfit_casual",
                "setFlag": "day5_outfit_casual"
            },
            {
                "next": "day5_outfit_special",
                "setFlag": "day5_outfit_special"
            }
        ]
    },
    "day5_outfit_casual": {
        "character": null,
        "next": "day5_breakfast"
    },
    "day5_outfit_special": {
        "character": null,
        "next": "day5_breakfast"
    },
    "day5_breakfast": {
        "character": null,
        "next": "day5_outfit_check"
    },
    "day5_outfit_check": {
        "character": null,
        "next": "day5_morning_items"
    },
    "day5_morning_items": {
        "character": null,
        "next": "day5_morning_depart"
    },
    "day5_morning_depart": {
        "character": null,
        "background": "assets/images/background/street.png",
        "fade": true,
        "next": "day5_walk_route_branch"
    },
    "day5_walk_route_branch": {
        "background": "assets/images/background/street.png",
        "branches": [
            {
                "next": "day5_walk_couple_branch",
                "condition": "day4_confession_accepted"
            },
            {
                "next": "day5_walk_pending_start",
                "condition": "day4_waited"
            },
            {
                "next": "day5_walk_default_start"
            }
        ]
    },
    "day5_walk_couple_branch": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_walk_couple_seoyeon",
                "character": "Seoyeon",
                "condition": "isDating_Seoyeon"
            },
            {
                "next": "day5_walk_couple_yuna",
                "character": "Yuna",
                "condition": "isDating_Yuna"
            },
            {
                "next": "day5_walk_couple_dain",
                "character": "Dain",
                "condition": "isDating_Dain"
            },
            {
                "next": "day5_walk_couple_nurse",
                "character": "Nurse",
                "condition": "isDating_Nurse"
            },
            {
                "next": "day5_walk_couple_teacher",
                "character": "Teacher",
                "condition": "isDating_Teacher"
            }
        ]
    },
    "day5_walk_couple_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day5_walk_seoyeon_2"
    },
    "day5_walk_seoyeon_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "day5_walk_seoyeon_talk"
    },
    "day5_walk_seoyeon_talk": {
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "day5_walk_seoyeon_react"
    },
    "day5_walk_seoyeon_react": {
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day5_walk_couple_common"
    },
    "day5_walk_couple_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day5_walk_yuna_2"
    },
    "day5_walk_yuna_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day5_walk_yuna_talk"
    },
    "day5_walk_yuna_talk": {
        "character": "assets/images/characters/yuna_normal.png",
        "next": "day5_walk_yuna_react"
    },
    "day5_walk_yuna_react": {
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day5_walk_couple_common"
    },
    "day5_walk_couple_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day5_walk_dain_2"
    },
    "day5_walk_dain_2": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day5_walk_dain_talk"
    },
    "day5_walk_dain_talk": {
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day5_walk_dain_react"
    },
    "day5_walk_dain_react": {
        "character": "assets/images/characters/dain_laugh.png",
        "stats": {
            "Dain": {
                "affinity": 5
            }
        },
        "next": "day5_walk_couple_common"
    },
    "day5_walk_couple_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day5_walk_nurse_2"
    },
    "day5_walk_nurse_2": {
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day5_walk_nurse_talk"
    },
    "day5_walk_nurse_talk": {
        "character": "assets/images/characters/nurse_shy.png",
        "next": "day5_walk_nurse_react"
    },
    "day5_walk_nurse_react": {
        "character": "assets/images/characters/nurse_shy.png",
        "stats": {
            "Nurse": {
                "affinity": 5
            }
        },
        "next": "day5_walk_couple_common"
    },
    "day5_walk_couple_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day5_walk_teacher_2"
    },
    "day5_walk_teacher_2": {
        "character": "assets/images/characters/teacher_normal.png",
        "next": "day5_walk_teacher_talk"
    },
    "day5_walk_teacher_talk": {
        "character": "assets/images/characters/teacher_smile.png",
        "next": "day5_walk_teacher_react"
    },
    "day5_walk_teacher_react": {
        "character": "assets/images/characters/teacher_smile.png",
        "stats": {
            "Teacher": {
                "affinity": 5
            }
        },
        "next": "day5_walk_couple_common"
    },
    "day5_walk_couple_common": {
        "character": null,
        "next": "day5_walk_couple_common2"
    },
    "day5_walk_couple_common2": {
        "character": null,
        "next": "day5_arrive_start"
    },
    "day5_walk_pending_start": {
        "next": "day5_walk_pending_think"
    },
    "day5_walk_pending_think": {
        "next": "day5_walk_pending_plan"
    },
    "day5_walk_pending_plan": {
        "next": "day5_walk_pending_nervous"
    },
    "day5_walk_pending_nervous": {
        "next": "day5_walk_pending_resolve"
    },
    "day5_walk_pending_resolve": {
        "next": "day5_walk_pending_memory"
    },
    "day5_walk_pending_memory": {
        "next": "day5_walk_pending_ready"
    },
    "day5_walk_pending_ready": {
        "next": "day5_walk_pending_almost"
    },
    "day5_walk_pending_almost": {
        "next": "day5_arrive_start"
    },
    "day5_walk_default_start": {
        "next": "day5_walk_default_reflect"
    },
    "day5_walk_default_reflect": {
        "next": "day5_walk_default_change"
    },
    "day5_walk_default_change": {
        "next": "day5_walk_default_people"
    },
    "day5_walk_default_people": {
        "next": "day5_walk_default_arrive"
    },
    "day5_walk_default_arrive": {
        "next": "day5_arrive_start"
    },
    "day5_arrive_start": {
        "character": null,
        "background": "assets/images/background/school.png",
        "next": "day5_arrive_nostalgia"
    },
    "day5_arrive_nostalgia": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "day5_arrive_firstday"
    },
    "day5_arrive_firstday": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "day5_arrive_now"
    },
    "day5_arrive_now": {
        "background": "assets/images/background/school.png",
        "character": null,
        "fade": true,
        "next": "day5_school_arrive"
    }
});
