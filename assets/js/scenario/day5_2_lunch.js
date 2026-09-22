/**
 * ============================================================================
 * CUPID - day5_2_lunch
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

(() => {
    const scenes = {
    "day5_haeun_gate": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "day5_haeun_event_done",
                "next": "day5_haeun_resume"
            },
            {
                "next": "day5_haeun_trust_check"
            }
        ]
    },
    "day5_haeun_trust_check": {
        "routeBeforeRender": true,
        "affinityChar": "Haeun",
        "affinityBranches": [
            {
                "minAffinity": 8,
                "next": "day5_haeun_select_rival"
            },
            {
                "minAffinity": 0,
                "next": "day5_haeun_resume"
            },
            {
                "minAffinity": -100,
                "next": "day5_haeun_select_concern"
            }
        ]
    },
    "day5_haeun_select_rival": {
        "routeBeforeRender": true,
        "randomTieFlag": "day5_haeun_rival",
        "rankedRivalBranches": [
            {
                "character": "Seoyeon",
                "next": "day5_haeun_high_intro"
            },
            {
                "character": "Yuna",
                "next": "day5_haeun_high_intro"
            },
            {
                "character": "Dain",
                "next": "day5_haeun_high_intro"
            },
            {
                "character": "Teacher",
                "next": "day5_haeun_high_intro"
            },
            {
                "character": "Nurse",
                "next": "day5_haeun_high_intro"
            }
        ]
    },
    "day5_haeun_high_intro": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "day5_haeun_high_clasp"
    },
    "day5_haeun_high_clasp": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "day5_haeun_arrival_router"
    },
    "day5_haeun_arrival_router": {
        "routeBeforeRender": true,
        "randomTieFlag": "day5_haeun_rival",
        "rankedRivalBranches": [
            {
                "character": "Seoyeon",
                "next": "day5_haeun_seoyeon_arrival"
            },
            {
                "character": "Yuna",
                "next": "day5_haeun_yuna_arrival"
            },
            {
                "character": "Dain",
                "next": "day5_haeun_dain_arrival"
            },
            {
                "character": "Teacher",
                "next": "day5_haeun_teacher_arrival"
            },
            {
                "character": "Nurse",
                "next": "day5_haeun_nurse_arrival"
            }
        ]
    },
    "day5_haeun_explain_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_worried.png",
        "choices": [
            {
                "next": "day5_haeun_explain_open",
                "clearFlags": [
                    "day5_haeun_delayed_explanation"
                ]
            },
            {
                "next": "day5_haeun_explain_delay",
                "setFlags": [
                    "day5_haeun_delayed_explanation"
                ]
            }
        ]
    },
    "day5_haeun_explain_open": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_haeun_defends"
    },
    "day5_haeun_explain_delay": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_haeun_defends"
    },
    "day5_haeun_defends": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_firm.png",
        "next": "day5_haeun_escalation_router"
    },
    "day5_haeun_escalation_router": {
        "routeBeforeRender": true,
        "randomTieFlag": "day5_haeun_rival",
        "rankedRivalBranches": [
            {
                "character": "Seoyeon",
                "next": "day5_haeun_seoyeon_escalation_check"
            },
            {
                "character": "Yuna",
                "next": "day5_haeun_yuna_escalation_check"
            },
            {
                "character": "Dain",
                "next": "day5_haeun_dain_escalation_check"
            },
            {
                "character": "Teacher",
                "next": "day5_haeun_teacher_escalation_check"
            },
            {
                "character": "Nurse",
                "next": "day5_haeun_nurse_escalation_check"
            }
        ]
    },
    "day5_haeun_finish": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_haeun_resume",
        "setFlags": [
            "day5_haeun_event_done"
        ]
    },
    "day5_haeun_low_intro": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_firm.png",
        "next": "day5_haeun_low_choice"
    },
    "day5_haeun_low_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_worried.png",
        "choices": [
            {
                "next": "day5_haeun_low_apology",
                "setFlags": [
                    "day5_haeun_apologized"
                ]
            },
            {
                "next": "day5_haeun_low_work",
                "clearFlags": [
                    "day5_haeun_apologized"
                ]
            },
            {
                "next": "day5_haeun_low_leave"
            }
        ]
    },
    "day5_haeun_low_apology": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_firm.png",
        "next": "day5_haeun_low_work"
    },
    "day5_haeun_low_work": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_haeun_low_result",
        "setFlags": [
            "day5_haeun_helped"
        ]
    },
    "day5_haeun_low_result": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "day5_haeun_apologized",
                "next": "day5_haeun_low_repair"
            },
            {
                "next": "day5_haeun_low_thanks"
            }
        ]
    },
    "day5_haeun_low_repair": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_relieved.png",
        "next": "day5_haeun_resume",
        "stats": {
            "Haeun": {
                "affinity": 5
            }
        },
        "setFlags": [
            "day5_haeun_event_done",
            "day5_haeun_trust_repaired"
        ]
    },
    "day5_haeun_low_thanks": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "day5_haeun_resume",
        "stats": {
            "Haeun": {
                "affinity": 2
            }
        },
        "setFlags": [
            "day5_haeun_event_done"
        ]
    },
    "day5_haeun_low_leave": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_firm.png",
        "next": "day5_haeun_resume",
        "setFlags": [
            "day5_haeun_event_done"
        ]
    },
    "day5_haeun_resume": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "day4_counteroffer_penalty_deferred",
                "next": "tour_co_branch"
            },
            {
                "condition": "route_dain",
                "next": "tour_dain_1_check"
            },
            {
                "condition": "route_yuna",
                "next": "tour_yuna_1_check"
            },
            {
                "next": "tour_seo_1"
            }
        ]
    },
    "day5_haeun_seoyeon_arrival": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "day5_haeun_explain_choice"
    },
    "day5_haeun_seoyeon_escalation_check": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "day5_haeun_delayed_explanation",
                "next": "day5_haeun_seoyeon_escalation_delay"
            },
            {
                "next": "day5_haeun_seoyeon_escalation"
            }
        ]
    },
    "day5_haeun_seoyeon_escalation": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "day5_haeun_seoyeon_group_talk",
        "stats": {
            "Seoyeon": {
                "affinity": -15
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_seoyeon_escalation_delay": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "day5_haeun_seoyeon_group_talk",
        "stats": {
            "Seoyeon": {
                "affinity": -20
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_seoyeon_group_talk": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_haeun_finish",
        "type": "group_free_talk",
        "groupMode": "haeun_misunderstanding", "isRemote": false,
        "maxTurns": 5,
        "groupParticipants": [
            {
                "id": "Seoyeon",
                "role": "focus",
                "side": "left",
                "initialExpression": "sad"
            },
            {
                "id": "Haeun",
                "role": "companion",
                "side": "right",
                "initialExpression": "worried"
            }
        ],
        "dynamicGroupName": true
    },
    "day5_haeun_yuna_arrival": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "day5_haeun_explain_choice"
    },
    "day5_haeun_yuna_escalation_check": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "day5_haeun_delayed_explanation",
                "next": "day5_haeun_yuna_escalation_delay"
            },
            {
                "next": "day5_haeun_yuna_escalation"
            }
        ]
    },
    "day5_haeun_yuna_escalation": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "day5_haeun_yuna_group_talk",
        "stats": {
            "Yuna": {
                "affinity": -15
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_yuna_escalation_delay": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "day5_haeun_yuna_group_talk",
        "stats": {
            "Yuna": {
                "affinity": -20
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_yuna_group_talk": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_haeun_finish",
        "type": "group_free_talk",
        "groupMode": "haeun_misunderstanding", "isRemote": false,
        "maxTurns": 5,
        "groupParticipants": [
            {
                "id": "Yuna",
                "role": "focus",
                "side": "left",
                "initialExpression": "sad"
            },
            {
                "id": "Haeun",
                "role": "companion",
                "side": "right",
                "initialExpression": "worried"
            }
        ],
        "dynamicGroupName": true
    },
    "day5_haeun_dain_arrival": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "day5_haeun_explain_choice"
    },
    "day5_haeun_dain_escalation_check": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "day5_haeun_delayed_explanation",
                "next": "day5_haeun_dain_escalation_delay"
            },
            {
                "next": "day5_haeun_dain_escalation"
            }
        ]
    },
    "day5_haeun_dain_escalation": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "day5_haeun_dain_group_talk",
        "stats": {
            "Dain": {
                "affinity": -15
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_dain_escalation_delay": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "day5_haeun_dain_group_talk",
        "stats": {
            "Dain": {
                "affinity": -20
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_dain_group_talk": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_haeun_finish",
        "type": "group_free_talk",
        "groupMode": "haeun_misunderstanding", "isRemote": false,
        "maxTurns": 5,
        "groupParticipants": [
            {
                "id": "Dain",
                "role": "focus",
                "side": "left",
                "initialExpression": "angry"
            },
            {
                "id": "Haeun",
                "role": "companion",
                "side": "right",
                "initialExpression": "worried"
            }
        ],
        "dynamicGroupName": true
    },
    "day5_haeun_teacher_arrival": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "day5_haeun_explain_choice"
    },
    "day5_haeun_teacher_escalation_check": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "day5_haeun_delayed_explanation",
                "next": "day5_haeun_teacher_escalation_delay"
            },
            {
                "next": "day5_haeun_teacher_escalation"
            }
        ]
    },
    "day5_haeun_teacher_escalation": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "day5_haeun_teacher_group_talk",
        "stats": {
            "Teacher": {
                "affinity": -15
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_teacher_escalation_delay": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "day5_haeun_teacher_group_talk",
        "stats": {
            "Teacher": {
                "affinity": -20
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_teacher_group_talk": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_haeun_finish",
        "type": "group_free_talk",
        "groupMode": "haeun_misunderstanding", "isRemote": false,
        "maxTurns": 5,
        "groupParticipants": [
            {
                "id": "Teacher",
                "role": "focus",
                "side": "left",
                "initialExpression": "sad"
            },
            {
                "id": "Haeun",
                "role": "companion",
                "side": "right",
                "initialExpression": "worried"
            }
        ],
        "dynamicGroupName": true
    },
    "day5_haeun_nurse_arrival": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_worried.png",
        "next": "day5_haeun_explain_choice"
    },
    "day5_haeun_nurse_escalation_check": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "day5_haeun_delayed_explanation",
                "next": "day5_haeun_nurse_escalation_delay"
            },
            {
                "next": "day5_haeun_nurse_escalation"
            }
        ]
    },
    "day5_haeun_nurse_escalation": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_worried.png",
        "next": "day5_haeun_nurse_group_talk",
        "stats": {
            "Nurse": {
                "affinity": -15
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_nurse_escalation_delay": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_worried.png",
        "next": "day5_haeun_nurse_group_talk",
        "stats": {
            "Nurse": {
                "affinity": -20
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_nurse_group_talk": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_haeun_finish",
        "type": "group_free_talk",
        "groupMode": "haeun_misunderstanding", "isRemote": false,
        "maxTurns": 5,
        "groupParticipants": [
            {
                "id": "Nurse",
                "role": "focus",
                "side": "left",
                "initialExpression": "worried"
            },
            {
                "id": "Haeun",
                "role": "companion",
                "side": "right",
                "initialExpression": "worried"
            }
        ],
        "dynamicGroupName": true
    },
    "day5_haeun_select_concern": {
        "routeBeforeRender": true,
        "randomTieFlag": "day5_haeun_rival",
        "rankedRivalBranches": [
            {
                "character": "Seoyeon",
                "next": "day5_haeun_concern_seoyeon_intro"
            },
            {
                "character": "Yuna",
                "next": "day5_haeun_concern_yuna_intro"
            },
            {
                "character": "Dain",
                "next": "day5_haeun_concern_dain_intro"
            },
            {
                "character": "Teacher",
                "next": "day5_haeun_concern_teacher_intro"
            },
            {
                "character": "Nurse",
                "next": "day5_haeun_concern_nurse_intro"
            }
        ]
    },
    "day5_haeun_concern_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_worried.png",
        "choices": [
            {
                "next": "day5_haeun_concern_open",
                "clearFlags": [
                    "day5_haeun_delayed_explanation"
                ]
            },
            {
                "next": "day5_haeun_concern_delay",
                "setFlags": [
                    "day5_haeun_delayed_explanation"
                ]
            }
        ]
    },
    "day5_haeun_concern_open": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_haeun_concern_clarify"
    },
    "day5_haeun_concern_delay": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_haeun_concern_clarify"
    },
    "day5_haeun_concern_clarify": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_firm.png",
        "next": "day5_haeun_concern_router"
    },
    "day5_haeun_concern_router": {
        "routeBeforeRender": true,
        "randomTieFlag": "day5_haeun_rival",
        "rankedRivalBranches": [
            {
                "character": "Seoyeon",
                "next": "day5_haeun_concern_seoyeon_check"
            },
            {
                "character": "Yuna",
                "next": "day5_haeun_concern_yuna_check"
            },
            {
                "character": "Dain",
                "next": "day5_haeun_concern_dain_check"
            },
            {
                "character": "Teacher",
                "next": "day5_haeun_concern_teacher_check"
            },
            {
                "character": "Nurse",
                "next": "day5_haeun_concern_nurse_check"
            }
        ]
    },
    "day5_haeun_concern_seoyeon_intro": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "day5_haeun_concern_seoyeon_arrival"
    },
    "day5_haeun_concern_seoyeon_arrival": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "day5_haeun_concern_choice"
    },
    "day5_haeun_concern_seoyeon_check": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "day5_haeun_delayed_explanation",
                "next": "day5_haeun_concern_seoyeon_escalation_delay"
            },
            {
                "next": "day5_haeun_concern_seoyeon_escalation"
            }
        ]
    },
    "day5_haeun_concern_seoyeon_escalation": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "day5_haeun_concern_seoyeon_group_talk",
        "stats": {
            "Seoyeon": {
                "affinity": -15
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_concern_seoyeon_escalation_delay": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "day5_haeun_concern_seoyeon_group_talk",
        "stats": {
            "Seoyeon": {
                "affinity": -20
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_concern_seoyeon_group_talk": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_haeun_low_intro",
        "type": "group_free_talk",
        "groupMode": "haeun_reputation", "isRemote": false,
        "maxTurns": 5,
        "groupParticipants": [
            {
                "id": "Seoyeon",
                "role": "focus",
                "side": "left",
                "initialExpression": "sad"
            },
            {
                "id": "Haeun",
                "role": "companion",
                "side": "right",
                "initialExpression": "worried"
            }
        ],
        "dynamicGroupName": true
    },
    "day5_haeun_concern_yuna_intro": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "day5_haeun_concern_yuna_arrival"
    },
    "day5_haeun_concern_yuna_arrival": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "day5_haeun_concern_choice"
    },
    "day5_haeun_concern_yuna_check": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "day5_haeun_delayed_explanation",
                "next": "day5_haeun_concern_yuna_escalation_delay"
            },
            {
                "next": "day5_haeun_concern_yuna_escalation"
            }
        ]
    },
    "day5_haeun_concern_yuna_escalation": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "day5_haeun_concern_yuna_group_talk",
        "stats": {
            "Yuna": {
                "affinity": -15
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_concern_yuna_escalation_delay": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "day5_haeun_concern_yuna_group_talk",
        "stats": {
            "Yuna": {
                "affinity": -20
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_concern_yuna_group_talk": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_haeun_low_intro",
        "type": "group_free_talk",
        "groupMode": "haeun_reputation", "isRemote": false,
        "maxTurns": 5,
        "groupParticipants": [
            {
                "id": "Yuna",
                "role": "focus",
                "side": "left",
                "initialExpression": "sad"
            },
            {
                "id": "Haeun",
                "role": "companion",
                "side": "right",
                "initialExpression": "worried"
            }
        ],
        "dynamicGroupName": true
    },
    "day5_haeun_concern_dain_intro": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "day5_haeun_concern_dain_arrival"
    },
    "day5_haeun_concern_dain_arrival": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "day5_haeun_concern_choice"
    },
    "day5_haeun_concern_dain_check": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "day5_haeun_delayed_explanation",
                "next": "day5_haeun_concern_dain_escalation_delay"
            },
            {
                "next": "day5_haeun_concern_dain_escalation"
            }
        ]
    },
    "day5_haeun_concern_dain_escalation": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "day5_haeun_concern_dain_group_talk",
        "stats": {
            "Dain": {
                "affinity": -15
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_concern_dain_escalation_delay": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "day5_haeun_concern_dain_group_talk",
        "stats": {
            "Dain": {
                "affinity": -20
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_concern_dain_group_talk": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_haeun_low_intro",
        "type": "group_free_talk",
        "groupMode": "haeun_reputation", "isRemote": false,
        "maxTurns": 5,
        "groupParticipants": [
            {
                "id": "Dain",
                "role": "focus",
                "side": "left",
                "initialExpression": "angry"
            },
            {
                "id": "Haeun",
                "role": "companion",
                "side": "right",
                "initialExpression": "worried"
            }
        ],
        "dynamicGroupName": true
    },
    "day5_haeun_concern_teacher_intro": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "day5_haeun_concern_teacher_arrival"
    },
    "day5_haeun_concern_teacher_arrival": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "day5_haeun_concern_choice"
    },
    "day5_haeun_concern_teacher_check": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "day5_haeun_delayed_explanation",
                "next": "day5_haeun_concern_teacher_escalation_delay"
            },
            {
                "next": "day5_haeun_concern_teacher_escalation"
            }
        ]
    },
    "day5_haeun_concern_teacher_escalation": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "day5_haeun_concern_teacher_group_talk",
        "stats": {
            "Teacher": {
                "affinity": -15
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_concern_teacher_escalation_delay": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "day5_haeun_concern_teacher_group_talk",
        "stats": {
            "Teacher": {
                "affinity": -20
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_concern_teacher_group_talk": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_haeun_low_intro",
        "type": "group_free_talk",
        "groupMode": "haeun_reputation", "isRemote": false,
        "maxTurns": 5,
        "groupParticipants": [
            {
                "id": "Teacher",
                "role": "focus",
                "side": "left",
                "initialExpression": "sad"
            },
            {
                "id": "Haeun",
                "role": "companion",
                "side": "right",
                "initialExpression": "worried"
            }
        ],
        "dynamicGroupName": true
    },
    "day5_haeun_concern_nurse_intro": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "day5_haeun_concern_nurse_arrival"
    },
    "day5_haeun_concern_nurse_arrival": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_worried.png",
        "next": "day5_haeun_concern_choice"
    },
    "day5_haeun_concern_nurse_check": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "day5_haeun_delayed_explanation",
                "next": "day5_haeun_concern_nurse_escalation_delay"
            },
            {
                "next": "day5_haeun_concern_nurse_escalation"
            }
        ]
    },
    "day5_haeun_concern_nurse_escalation": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_worried.png",
        "next": "day5_haeun_concern_nurse_group_talk",
        "stats": {
            "Nurse": {
                "affinity": -15
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_concern_nurse_escalation_delay": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_worried.png",
        "next": "day5_haeun_concern_nurse_group_talk",
        "stats": {
            "Nurse": {
                "affinity": -20
            }
        },
        "setFlags": [
            "day5_haeun_misunderstanding_started"
        ]
    },
    "day5_haeun_concern_nurse_group_talk": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "day5_haeun_low_intro",
        "type": "group_free_talk",
        "groupMode": "haeun_reputation", "isRemote": false,
        "maxTurns": 5,
        "groupParticipants": [
            {
                "id": "Nurse",
                "role": "focus",
                "side": "left",
                "initialExpression": "worried"
            },
            {
                "id": "Haeun",
                "role": "companion",
                "side": "right",
                "initialExpression": "worried"
            }
        ],
        "dynamicGroupName": true
    },
    "tour_co_branch": {
        "background": "assets/images/background/school.png",
        "character": null,
        "routeBeforeRender": true,
        "branches": [
            { "condition": "day4_counteroffer_target_teacher", "next": "tour_co_event_1" },
            { "condition": "day4_counteroffer_target_nurse", "next": "tour_co_event_1" },
            { "condition": "route_seoyeon", "next": "tour_co_seo_1" },
            { "condition": "route_yuna", "next": "tour_co_yuna_1" },
            { "condition": "route_dain", "next": "tour_co_dain_1" },
            { "next": "tour_co_event_1" }
        ]
    },
    "tour_co_event_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "bgm": "sunset1.mp3",
        "next": "tour_co_event_2"
    },
    "tour_co_event_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after5_start"
    },
    "tour_co_seo_1": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "bgm": "sunset1.mp3",
        "next": "tour_co_seo_2"
    },
    "tour_co_seo_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "tour_co_seo_3"
    },
    "tour_co_seo_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "after5_start"
    },
    "tour_co_yuna_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "bgm": "sunset1.mp3",
        "next": "tour_co_yuna_2"
    },
    "tour_co_yuna_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "tour_co_yuna_3"
    },
    "tour_co_yuna_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_pout.png",
        "next": "after5_start"
    },
    "tour_co_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "bgm": "sunset1.mp3",
        "next": "tour_co_dain_2"
    },
    "tour_co_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "tour_co_dain_3"
    },
    "tour_co_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "after5_start"
    },
    "tour_seo_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "bgm": "sunset1.mp3",
        "affinityGuard": {"character":"Seoyeon","minAffinity":40,"fallback":"tour_seo_skip"},
        "next": "tour_seo_affinity_check"
    },
    "tour_seo_affinity_check": {
        "background": "assets/images/background/school.png",
        "character": null,
        "affinityChar": "Seoyeon",
        "affinityBranches": [
            { "minAffinity": 80, "next": "tour_seo_affinity_80" },
            { "minAffinity": 60, "next": "tour_seo_affinity_60" },
            { "minAffinity": -100, "next": "tour_seo_event_1" }
        ]
    },
    "tour_seo_affinity_80": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "tour_seo_affinity_60"
    },
    "tour_seo_affinity_60": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "tour_seo_event_1"
    },
    "tour_seo_event_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "tour_seo_event_2"
    },
    "tour_seo_event_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_worried.png",
        "next": "tour_seo_event_3"
    },
    "tour_seo_event_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_event_4"
    },
    "tour_seo_event_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "tour_seo_event_5"
    },
    "tour_seo_event_5": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlags": ["day5_seoyeon_delegated"],
        "next": "tour_seo_2"
    },
    "tour_seo_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_3"
    },
    "tour_seo_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_4"
    },
    "tour_seo_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "tour_seo_5"
    },
    "tour_seo_5": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_6"
    },
    "tour_seo_6": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "tour_seo_7"
    },
    "tour_seo_7": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "tour_seo_8"
    },
    "tour_seo_8": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_9"
    },
    "tour_seo_9": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_10"
    },
    "tour_seo_10": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_11"
    },
    "tour_seo_11": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_12"
    },
    "tour_seo_12": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_13"
    },
    "tour_seo_13": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_14"
    },
    "tour_seo_14": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "stats": {"Seoyeon":{"affinity":1}},
        "next": "tour_seo_freetalk"
    },
    "tour_seo_freetalk": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "tour_seo_end"
    },
    "tour_seo_end": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "after5_start"
    },
    "tour_yuna_1_check": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "bgm": "sunset1.mp3",
        "affinityGuard": {"character":"Yuna","minAffinity":40,"fallback":"tour_yuna_skip"},
        "branches": [
            { "condition": "chose_yuna_lunch", "next": "tour_yuna_1" },
            { "next": "tour_yuna_1b" }
        ]
    },
    "tour_yuna_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_affinity_check"
    },
    "tour_yuna_1b": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_affinity_check"
    },
    "tour_yuna_affinity_check": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "affinityChar": "Yuna",
        "affinityBranches": [
            { "minAffinity": 80, "next": "tour_yuna_affinity_80" },
            { "minAffinity": 60, "next": "tour_yuna_affinity_60" },
            { "minAffinity": -100, "next": "tour_yuna_event_1" }
        ]
    },
    "tour_yuna_affinity_80": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "tour_yuna_affinity_60"
    },
    "tour_yuna_affinity_60": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "tour_yuna_event_1"
    },
    "tour_yuna_event_1": {
        "background": "assets/images/background/annex_exhibit_hallway.png",
        "character": null,
        "next": "tour_yuna_event_2"
    },
    "tour_yuna_event_2": {
        "background": "assets/images/background/annex_exhibit_hallway.png",
        "character": "assets/images/characters/yuna_worried.png",
        "next": "tour_yuna_event_3"
    },
    "tour_yuna_event_3": {
        "background": "assets/images/background/annex_exhibit_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_event_4"
    },
    "tour_yuna_event_4": {
        "background": "assets/images/background/annex_exhibit_hallway.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "tour_yuna_event_5"
    },
    "tour_yuna_event_5": {
        "background": "assets/images/background/annex_exhibit_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "setFlags": ["day5_yuna_signed_story"],
        "next": "tour_yuna_2"
    },
    "tour_yuna_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_3"
    },
    "tour_yuna_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_4"
    },
    "tour_yuna_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_5"
    },
    "tour_yuna_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_6"
    },
    "tour_yuna_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "tour_yuna_7"
    },
    "tour_yuna_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_8"
    },
    "tour_yuna_8": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_9"
    },
    "tour_yuna_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_10"
    },
    "tour_yuna_10": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "tour_yuna_11"
    },
    "tour_yuna_11": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "stats": {"Yuna":{"affinity":1}},
        "next": "tour_yuna_freetalk"
    },
    "tour_yuna_freetalk": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "tour_yuna_end"
    },
    "tour_yuna_end": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "tour_yuna_end_2"
    },
    "tour_yuna_end_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after5_start"
    },
    "tour_dain_1_check": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "bgm": "sunset1.mp3",
        "affinityGuard": {"character":"Dain","minAffinity":40,"fallback":"tour_dain_skip"},
        "branches": [
            { "condition": "chose_dain_lunch", "next": "tour_dain_1" },
            { "next": "tour_dain_1b" }
        ]
    },
    "tour_dain_1": {
        "background": "assets/images/background/gym.png",
        "backgroundVariant": "lights-off",
        "character": null,
        "next": "tour_dain_affinity_check"
    },
    "tour_dain_1b": {
        "background": "assets/images/background/gym.png",
        "backgroundVariant": "lights-off",
        "character": null,
        "next": "tour_dain_affinity_check"
    },
    "tour_dain_affinity_check": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "affinityChar": "Dain",
        "affinityBranches": [
            { "minAffinity": 80, "next": "tour_dain_affinity_80" },
            { "minAffinity": 60, "next": "tour_dain_affinity_60" },
            { "minAffinity": -100, "next": "tour_dain_event_1" }
        ]
    },
    "tour_dain_affinity_80": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "tour_dain_affinity_60"
    },
    "tour_dain_affinity_60": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "tour_dain_event_1"
    },
    "tour_dain_event_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_pain.png",
        "next": "tour_dain_event_2"
    },
    "tour_dain_event_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "tour_dain_event_3"
    },
    "tour_dain_event_3": {
        "background": "assets/images/background/dain_broadcast_booth.png",
        "character": "assets/images/characters/dain_sweat.png",
        "next": "tour_dain_event_4"
    },
    "tour_dain_event_4": {
        "background": "assets/images/background/dain_broadcast_booth.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "tour_dain_event_5"
    },
    "tour_dain_event_5": {
        "background": "assets/images/background/dain_broadcast_booth.png",
        "character": "assets/images/characters/dain_normal.png",
        "setFlags": ["day5_dain_chose_commentary"],
        "next": "tour_dain_2"
    },
    "tour_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "tour_dain_3"
    },
    "tour_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "tour_dain_4"
    },
    "tour_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "tour_dain_5"
    },
    "tour_dain_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "tour_dain_6"
    },
    "tour_dain_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "tour_dain_7"
    },
    "tour_dain_7": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "tour_dain_8"
    },
    "tour_dain_8": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "tour_dain_10"
    },
    "tour_dain_10": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "tour_dain_11"
    },
    "tour_dain_11": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "tour_dain_11_b"
    },
    "tour_dain_11_b": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "tour_dain_12"
    },
    "tour_dain_12": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "tour_dain_13"
    },
    "tour_dain_13": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "tour_dain_end"
    },
    "tour_dain_end": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "stats": {"Dain":{"affinity":3}},
        "next": "tour_dain_freetalk"
    },
    "tour_dain_freetalk": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "tour_dain_end_2"
    },
    "tour_dain_end_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after5_start"
    },
    "tour_seo_low": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_start"
    },
    "tour_yuna_low": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_start"
    },
    "tour_dain_low": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after5_start"
    },
    "tour_seo_skip": {
        "background": "assets/images/background/school.png",
        "character": null,
        "affinityChar": "Seoyeon",
        "affinityBranches": [{"minAffinity":0,"next":"tour_seo_low"},{"minAffinity":-19,"next":"tour_seo_low"},{"minAffinity":-100,"next":"tour_seo_neg"}],
        "next": "tour_seo_neg",
        "routeBeforeRender": true
    },
    "tour_yuna_skip": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "affinityChar": "Yuna",
        "affinityBranches": [{"minAffinity":0,"next":"tour_yuna_low"},{"minAffinity":-19,"next":"tour_yuna_low"},{"minAffinity":-100,"next":"tour_yuna_neg"}],
        "next": "tour_yuna_neg",
        "routeBeforeRender": true
    },
    "tour_dain_skip": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "affinityChar": "Dain",
        "affinityBranches": [{"minAffinity":0,"next":"tour_dain_low"},{"minAffinity":-19,"next":"tour_dain_low"},{"minAffinity":-100,"next":"tour_dain_neg"}],
        "next": "tour_dain_neg",
        "routeBeforeRender": true
    },
    "tour_seo_neg": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "after5_start"
    },
    "tour_yuna_neg": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_bored.png",
        "next": "after5_start"
    },
    "tour_dain_neg": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "after5_start"
    }
    };
    for (const scene of Object.values(scenes)) {
        if (scene && typeof scene === 'object') {
            Object.defineProperty(scene, "__sourceFile", {
                value: "day5_2_lunch",
                enumerable: false
            });
        }
    }
    Object.assign(SCENARIO[5], scenes);
})();
