/**
 * ============================================================================
 * CUPID - day4_1_morning
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

(() => {
    const scenes = {
    "day4_haeun_reputation_cg": {
        "background": "assets/images/background/event_haeun_reputation.png",
        "character": null,
        "next": "day4_haeun_concern_router"
    },
    "day4_haeun_gate": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "day4_haeun_event_done",
                "next": "morning4_end"
            },
            {
                "next": "day4_haeun_trust_check"
            }
        ]
    },
    "day4_haeun_trust_check": {
        "routeBeforeRender": true,
        "affinityChar": "Haeun",
        "affinityBranches": [
            {
                "minAffinity": 0,
                "next": "morning4_end"
            },
            {
                "minAffinity": -100,
                "next": "day4_haeun_approach"
            }
        ]
    },
    "day4_haeun_approach": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "day4_haeun_select_concern"
    },
    "day4_haeun_select_concern": {
        "routeBeforeRender": true,
        "randomTieFlag": "day4_haeun_rival",
        "rankedRivalBranches": [
            {
                "character": "Seoyeon",
                "next": "day4_haeun_concern_seoyeon_intro"
            },
            {
                "character": "Yuna",
                "next": "day4_haeun_concern_yuna_intro"
            },
            {
                "character": "Dain",
                "next": "day4_haeun_concern_dain_intro"
            },
            {
                "character": "Teacher",
                "next": "day4_haeun_concern_teacher_intro"
            },
            {
                "character": "Nurse",
                "next": "day4_haeun_concern_nurse_intro"
            }
        ]
    },
    "day4_haeun_concern_choice": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/haeun_worried.png",
        "choices": [
            {
                "next": "day4_haeun_concern_open",
                "clearFlags": [
                    "day4_haeun_delayed_explanation"
                ]
            },
            {
                "next": "day4_haeun_concern_delay",
                "setFlags": [
                    "day4_haeun_delayed_explanation"
                ]
            }
        ]
    },
    "day4_haeun_concern_open": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "day4_haeun_concern_clarify"
    },
    "day4_haeun_concern_delay": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "day4_haeun_concern_clarify"
    },
    "day4_haeun_concern_clarify": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/haeun_firm.png",
        "next": "day4_haeun_reputation_cg"
    },
    "day4_haeun_concern_router": {
        "routeBeforeRender": true,
        "randomTieFlag": "day4_haeun_rival",
        "rankedRivalBranches": [
            {
                "character": "Seoyeon",
                "next": "day4_haeun_concern_seoyeon_check"
            },
            {
                "character": "Yuna",
                "next": "day4_haeun_concern_yuna_check"
            },
            {
                "character": "Dain",
                "next": "day4_haeun_concern_dain_check"
            },
            {
                "character": "Teacher",
                "next": "day4_haeun_concern_teacher_check"
            },
            {
                "character": "Nurse",
                "next": "day4_haeun_concern_nurse_check"
            }
        ]
    },
    "day4_haeun_concern_seoyeon_intro": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "day4_haeun_concern_seoyeon_arrival"
    },
    "day4_haeun_concern_seoyeon_arrival": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "day4_haeun_concern_choice"
    },
    "day4_haeun_concern_seoyeon_check": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "day4_haeun_delayed_explanation",
                "next": "day4_haeun_concern_seoyeon_escalation_delay"
            },
            {
                "next": "day4_haeun_concern_seoyeon_escalation"
            }
        ]
    },
    "day4_haeun_concern_seoyeon_escalation": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "day4_haeun_concern_seoyeon_group_talk",
        "stats": {
            "Seoyeon": {
                "affinity": -15
            }
        },
        "setFlags": [
            "day4_haeun_misunderstanding_started"
        ]
    },
    "day4_haeun_concern_seoyeon_escalation_delay": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "day4_haeun_concern_seoyeon_group_talk",
        "stats": {
            "Seoyeon": {
                "affinity": -20
            }
        },
        "setFlags": [
            "day4_haeun_misunderstanding_started"
        ]
    },
    "day4_haeun_concern_seoyeon_group_talk": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "day4_haeun_finish",
        "type": "group_free_talk",
        "groupMode": "haeun_reputation",
        "isRemote": false,
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
        "dynamicGroupName": true,
        "groupChoiceFlag": "day4_haeun_delayed_explanation"
    },
    "day4_haeun_concern_yuna_intro": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "day4_haeun_concern_yuna_arrival"
    },
    "day4_haeun_concern_yuna_arrival": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "day4_haeun_concern_choice"
    },
    "day4_haeun_concern_yuna_check": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "day4_haeun_delayed_explanation",
                "next": "day4_haeun_concern_yuna_escalation_delay"
            },
            {
                "next": "day4_haeun_concern_yuna_escalation"
            }
        ]
    },
    "day4_haeun_concern_yuna_escalation": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "day4_haeun_concern_yuna_group_talk",
        "stats": {
            "Yuna": {
                "affinity": -15
            }
        },
        "setFlags": [
            "day4_haeun_misunderstanding_started"
        ]
    },
    "day4_haeun_concern_yuna_escalation_delay": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "day4_haeun_concern_yuna_group_talk",
        "stats": {
            "Yuna": {
                "affinity": -20
            }
        },
        "setFlags": [
            "day4_haeun_misunderstanding_started"
        ]
    },
    "day4_haeun_concern_yuna_group_talk": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "day4_haeun_finish",
        "type": "group_free_talk",
        "groupMode": "haeun_reputation",
        "isRemote": false,
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
        "dynamicGroupName": true,
        "groupChoiceFlag": "day4_haeun_delayed_explanation"
    },
    "day4_haeun_concern_dain_intro": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "day4_haeun_concern_dain_arrival"
    },
    "day4_haeun_concern_dain_arrival": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "day4_haeun_concern_choice"
    },
    "day4_haeun_concern_dain_check": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "day4_haeun_delayed_explanation",
                "next": "day4_haeun_concern_dain_escalation_delay"
            },
            {
                "next": "day4_haeun_concern_dain_escalation"
            }
        ]
    },
    "day4_haeun_concern_dain_escalation": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "day4_haeun_concern_dain_group_talk",
        "stats": {
            "Dain": {
                "affinity": -15
            }
        },
        "setFlags": [
            "day4_haeun_misunderstanding_started"
        ]
    },
    "day4_haeun_concern_dain_escalation_delay": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "day4_haeun_concern_dain_group_talk",
        "stats": {
            "Dain": {
                "affinity": -20
            }
        },
        "setFlags": [
            "day4_haeun_misunderstanding_started"
        ]
    },
    "day4_haeun_concern_dain_group_talk": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "day4_haeun_finish",
        "type": "group_free_talk",
        "groupMode": "haeun_reputation",
        "isRemote": false,
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
        "dynamicGroupName": true,
        "groupChoiceFlag": "day4_haeun_delayed_explanation"
    },
    "day4_haeun_concern_teacher_intro": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "day4_haeun_concern_teacher_arrival"
    },
    "day4_haeun_concern_teacher_arrival": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "day4_haeun_concern_choice"
    },
    "day4_haeun_concern_teacher_check": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "day4_haeun_delayed_explanation",
                "next": "day4_haeun_concern_teacher_escalation_delay"
            },
            {
                "next": "day4_haeun_concern_teacher_escalation"
            }
        ]
    },
    "day4_haeun_concern_teacher_escalation": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "day4_haeun_concern_teacher_group_talk",
        "stats": {
            "Teacher": {
                "affinity": -15
            }
        },
        "setFlags": [
            "day4_haeun_misunderstanding_started"
        ]
    },
    "day4_haeun_concern_teacher_escalation_delay": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "day4_haeun_concern_teacher_group_talk",
        "stats": {
            "Teacher": {
                "affinity": -20
            }
        },
        "setFlags": [
            "day4_haeun_misunderstanding_started"
        ]
    },
    "day4_haeun_concern_teacher_group_talk": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "day4_haeun_finish",
        "type": "group_free_talk",
        "groupMode": "haeun_reputation",
        "isRemote": false,
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
        "dynamicGroupName": true,
        "groupChoiceFlag": "day4_haeun_delayed_explanation"
    },
    "day4_haeun_concern_nurse_intro": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "day4_haeun_concern_nurse_arrival"
    },
    "day4_haeun_concern_nurse_arrival": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/nurse_worried.png",
        "next": "day4_haeun_concern_choice"
    },
    "day4_haeun_concern_nurse_check": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "day4_haeun_delayed_explanation",
                "next": "day4_haeun_concern_nurse_escalation_delay"
            },
            {
                "next": "day4_haeun_concern_nurse_escalation"
            }
        ]
    },
    "day4_haeun_concern_nurse_escalation": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/nurse_worried.png",
        "next": "day4_haeun_concern_nurse_group_talk",
        "stats": {
            "Nurse": {
                "affinity": -15
            }
        },
        "setFlags": [
            "day4_haeun_misunderstanding_started"
        ]
    },
    "day4_haeun_concern_nurse_escalation_delay": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/nurse_worried.png",
        "next": "day4_haeun_concern_nurse_group_talk",
        "stats": {
            "Nurse": {
                "affinity": -20
            }
        },
        "setFlags": [
            "day4_haeun_misunderstanding_started"
        ]
    },
    "day4_haeun_concern_nurse_group_talk": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "day4_haeun_finish",
        "type": "group_free_talk",
        "groupMode": "haeun_reputation",
        "isRemote": false,
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
        "dynamicGroupName": true,
        "groupChoiceFlag": "day4_haeun_delayed_explanation"
    },
    "day4_haeun_finish": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "morning4_end",
        "setFlags": [
            "day4_haeun_event_done"
        ]
    },
    "day4_date_branch": {
        "branches": [
            {
                "condition": "route_dain",
                "next": "date_dain_1"
            },
            {
                "condition": "route_yuna",
                "next": "date_yuna_1"
            },
            {
                "condition": "route_seoyeon",
                "next": "date_seo_1"
            },
            {
                "condition": "accepted_dain_date",
                "next": "date_dain_1"
            },
            {
                "condition": "accepted_yuna_date",
                "next": "date_yuna_1"
            },
            {
                "condition": "accepted_seoyeon_date",
                "next": "date_seo_1"
            },
            {
                "next": "day4_night_start"
            }
        ],
        "routeBeforeRender": true
    },
    "morning4_start": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "bgm": "morning.mp3",
        "next": "morning4_date_plan_check"
    },
    "morning4_date_plan_check": {
        "routeBeforeRender": true,
        "branches": [
            { "condition": "route_seoyeon", "next": "morning4_nightmare_check" },
            { "condition": "route_yuna", "next": "morning4_nightmare_check" },
            { "condition": "route_dain", "next": "morning4_nightmare_check" },
            { "condition": "accepted_seoyeon_date", "next": "morning4_nightmare_check" },
            { "condition": "accepted_yuna_date", "next": "morning4_nightmare_check" },
            { "condition": "accepted_dain_date", "next": "morning4_nightmare_check" },
            { "next": "morning4_fallback_msg" }
        ]
    },
    "morning4_nightmare_check": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "nightmare_chose_seoyeon", "next": "morning4_nightmare_seo" },
            { "condition": "nightmare_chose_yuna", "next": "morning4_nightmare_yuna" },
            { "condition": "nightmare_chose_dain", "next": "morning4_nightmare_dain" },
            { "next": "minsu_cheer_1" }
        ]
    },
    "morning4_nightmare_seo": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "morning4_nightmare_after"
    },
    "morning4_nightmare_yuna": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "morning4_nightmare_after"
    },
    "morning4_nightmare_dain": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "morning4_nightmare_after"
    },
    "morning4_nightmare_after": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "minsu_cheer_1"
    },
    "minsu_cheer_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "minsu_cheer_1_b"
    },
    "minsu_cheer_1_b": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/minsu_normal.png","opacity":0.35}},
        "next": "minsu_cheer_1_c"
    },
    "minsu_cheer_1_c": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/minsu_normal.png","opacity":0.35}},
        "next": "minsu_cheer_1_d"
    },
    "minsu_cheer_1_d": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/minsu_normal.png","opacity":0.35}},
        "next": "minsu_cheer_2"
    },
    "minsu_cheer_2": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/minsu_normal.png","opacity":0.35}},
        "next": "minsu_cheer_3"
    },
    "minsu_cheer_3": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/minsu_normal.png","opacity":0.35}},
        "next": "minsu_cheer_4_branch"
    },
    "minsu_cheer_4_branch": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "day3_has_multiple_dates", "next": "minsu_cheer_4_c" },
            { "next": "minsu_cheer_4_ins_single" }
        ]
    },
    "minsu_cheer_4_ins_single": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/minsu_normal.png","opacity":0.35}},
        "next": "morning4_start_2"
    },
    "minsu_cheer_4_c": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/minsu_normal.png","opacity":0.35}},
        "next": "minsu_cheer_4_d"
    },
    "minsu_cheer_4_d": {
        "next": "minsu_cheer_4_e",
        "routeBeforeRender": true
    },
    "minsu_cheer_4_e": {
        "next": "morning4_start_2",
        "routeBeforeRender": true
    },
    "morning4_start_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            { "condition": "route_seoyeon", "next": "morning4_seo_msg_1" },
            { "condition": "route_yuna", "next": "morning4_yuna_msg_1" },
            { "condition": "route_dain", "next": "morning4_dain_msg_1" },
            { "next": "morning4_fallback_msg" }
        ]
    },
    "morning4_seo_msg_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_pout.png","opacity":0.35}},
        "affinityGuard": {"character":"Seoyeon","minAffinity":30,"fallback":"morning4_hidden_check"},
        "next": "morning4_seo_msg_1_b"
    },
    "morning4_seo_msg_1_b": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_pout.png","opacity":0.35}},
        "next": "morning4_seo_msg_1_c"
    },
    "morning4_seo_msg_1_c": {
        "next": "morning4_hidden_check",
        "routeBeforeRender": true
    },
    "morning4_yuna_msg_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "affinityGuard": {"character":"Yuna","minAffinity":30,"fallback":"morning4_hidden_check"},
        "next": "morning4_yuna_msg_1_b"
    },
    "morning4_yuna_msg_1_b": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "morning4_yuna_msg_single"
    },
    "morning4_yuna_msg_single": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "morning4_hidden_check"
    },
    "morning4_dain_msg_1": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_sweat.png","opacity":0.35}},
        "affinityGuard": {"character":"Dain","minAffinity":30,"fallback":"morning4_hidden_check"},
        "next": "morning4_hidden_check"
    },
    "morning4_fallback_msg": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "morning4_hidden_check"
    },
    "morning4_hidden_check": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "routeBeforeRender": true,
        "branches": [
            { "condition": "homeroom_day3", "next": "morning4_manuscript_check" },
            { "condition": "nurse_day3", "next": "hidden_nurse_d4_morning_1" },
            { "next": "hidden_nurse_d4_check" }
        ]
    },
    "morning4_manuscript_check": {
        "background": "assets/images/background/room_my.png",
        "branches": [
            { "condition": "discovered_manuscript", "next": "hidden_homeroom_d4_1" },
            { "next": "hidden_homeroom_d4_skip" }
        ]
    },
    "hidden_homeroom_d4_skip": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "hidden_nurse_d4_check"
    },
    "hidden_homeroom_d4_1": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "bgm": "morning.mp3",
        "affinityGuard": {"character":"Teacher","minAffinity":0,"fallback":"hidden_homeroom_d4_skip"},
        "next": "hidden_homeroom_d4_1_b"
    },
    "hidden_homeroom_d4_1_b": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_2"
    },
    "hidden_homeroom_d4_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_3"
    },
    "hidden_homeroom_d4_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_3_b"
    },
    "hidden_homeroom_d4_3_b": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d4_3_c"
    },
    "hidden_homeroom_d4_3_c": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d4_3_d"
    },
    "hidden_homeroom_d4_3_d": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d4_3_e"
    },
    "hidden_homeroom_d4_3_e": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_4"
    },
    "hidden_homeroom_d4_4": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_4_b"
    },
    "hidden_homeroom_d4_4_b": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_4_c"
    },
    "hidden_homeroom_d4_4_c": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_4_d"
    },
    "hidden_homeroom_d4_4_d": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_angry.png",
        "next": "hidden_homeroom_d4_4_e"
    },
    "hidden_homeroom_d4_4_e": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d4_5"
    },
    "hidden_homeroom_d4_5": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_5_b"
    },
    "hidden_homeroom_d4_5_b": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_5_c"
    },
    "hidden_homeroom_d4_5_c": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_5_d"
    },
    "hidden_homeroom_d4_5_d": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d4_choice"
    },
    "hidden_homeroom_d4_choice": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "hidden_homeroom_d4_cafe_1", "stats": {"Teacher":{"affinity":5}} },
            { "next": "hidden_homeroom_d4_decline", "stats": {"Teacher":{"affinity":4}} },
            { "next": "hidden_homeroom_d4_choice_trap", "stats": {"Teacher":{"affinity":-4}} }
        ]
    },
    "hidden_homeroom_d4_choice_trap": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_worried.png",
        "next": "hidden_homeroom_d4_decline_b"
    },
    "hidden_homeroom_d4_cafe_1": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlags": ["homeroom_day4_cafe"],
        "next": "hidden_homeroom_d4_cafe_1_b"
    },
    "hidden_homeroom_d4_cafe_1_b": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_1_c"
    },
    "hidden_homeroom_d4_cafe_1_c": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_1_d"
    },
    "hidden_homeroom_d4_cafe_1_d": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d4_cafe_1_e"
    },
    "hidden_homeroom_d4_cafe_1_e": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d4_cafe_1_f"
    },
    "hidden_homeroom_d4_cafe_1_f": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_2"
    },
    "hidden_homeroom_d4_cafe_2": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_2_b"
    },
    "hidden_homeroom_d4_cafe_2_b": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_2_c"
    },
    "hidden_homeroom_d4_cafe_2_c": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d4_cafe_2_d"
    },
    "hidden_homeroom_d4_cafe_2_d": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d4_cafe_2_e"
    },
    "hidden_homeroom_d4_cafe_2_e": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_3"
    },
    "hidden_homeroom_d4_cafe_3": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_choice"
    },
    "hidden_homeroom_d4_cafe_choice": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "hidden_homeroom_d4_cafe_choice_a", "stats": {"Teacher":{"affinity":7}} },
            { "next": "hidden_homeroom_d4_cafe_choice_b", "stats": {"Teacher":{"affinity":4}} },
            { "next": "hidden_homeroom_d4_cafe_trap", "stats": {"Teacher":{"affinity":-4}} }
        ]
    },
    "hidden_homeroom_d4_cafe_choice_a": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d4_cafe_4"
    },
    "hidden_homeroom_d4_cafe_choice_b": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_4"
    },
    "hidden_homeroom_d4_cafe_trap": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_4"
    },
    "hidden_homeroom_d4_cafe_4": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_4_b"
    },
    "hidden_homeroom_d4_cafe_4_b": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d4_cafe_5"
    },
    "hidden_homeroom_d4_cafe_5": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_5_b"
    },
    "hidden_homeroom_d4_cafe_5_b": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d4_cafe_5_c"
    },
    "hidden_homeroom_d4_cafe_5_c": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d4_cafe_5_d"
    },
    "hidden_homeroom_d4_cafe_5_d": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_5_e"
    },
    "hidden_homeroom_d4_cafe_5_e": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_5_f"
    },
    "hidden_homeroom_d4_cafe_5_f": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d4_cafe_5_g"
    },
    "hidden_homeroom_d4_cafe_5_g": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_5_h"
    },
    "hidden_homeroom_d4_cafe_5_h": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_cafe_6"
    },
    "hidden_homeroom_d4_cafe_6": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlags": ["homeroom_day4"],
        "next": "hidden_homeroom_d4_cafe_6_b"
    },
    "hidden_homeroom_d4_cafe_6_b": {
        "next": "hidden_homeroom_d4_freetalk",
        "routeBeforeRender": true
    },
    "hidden_homeroom_d4_freetalk": {
        "background": "assets/images/background/cafe.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/teacher_normal.png",
        "type": "free_talk",
        "maxTurns": 3,
        "next": "hidden_nurse_d4_check",
        "isRemote": false
    },
    "hidden_homeroom_d4_decline": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d4_decline_b"
    },
    "hidden_homeroom_d4_decline_b": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_nurse_d4_check"
    },
    "hidden_nurse_d4_morning_1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "bgm": "morning.mp3",
        "affinityGuard": {"character":"Nurse","minAffinity":0,"fallback":"hidden_nurse_d4_skip"},
        "next": "hidden_nurse_d4_morning_3"
    },
    "hidden_nurse_d4_morning_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_4"
    },
    "hidden_nurse_d4_morning_4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_5"
    },
    "hidden_nurse_d4_morning_5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_6"
    },
    "hidden_nurse_d4_morning_6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_7"
    },
    "hidden_nurse_d4_morning_7": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_8"
    },
    "hidden_nurse_d4_morning_8": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_9"
    },
    "hidden_nurse_d4_morning_9": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_10"
    },
    "hidden_nurse_d4_morning_10": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_11"
    },
    "hidden_nurse_d4_morning_11": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_choice"
    },
    "hidden_nurse_d4_morning_choice": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            { "next": "hidden_nurse_d4_morning_choice_a", "stats": {"Nurse":{"affinity":8}} },
            { "next": "hidden_nurse_d4_morning_choice_b", "stats": {"Nurse":{"affinity":4}} },
            { "next": "hidden_nurse_d4_morning_choice_trap", "stats": {"Nurse":{"affinity":-5}} }
        ]
    },
    "hidden_nurse_d4_morning_choice_trap": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_worried.png",
        "next": "hidden_nurse_d4_morning_13"
    },
    "hidden_nurse_d4_morning_choice_a": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_12"
    },
    "hidden_nurse_d4_morning_choice_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_12"
    },
    "hidden_nurse_d4_morning_12": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_morning_13"
    },
    "hidden_nurse_d4_morning_13": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlags": ["nurse_day4_afterschool"],
        "next": "hidden_nurse_d4_morning_freetalk"
    },
    "hidden_nurse_d4_morning_freetalk": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_check"
    },
    "hidden_nurse_d4_check": {
        "character": null,
        "branches": [
            { "condition": "nurse_day3", "next": "hidden_nurse_d4_1" },
            { "next": "day4_haeun_gate" }
        ]
    },
    "hidden_nurse_d4_1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "bgm": "morning.mp3",
        "affinityGuard": {"character":"Nurse","minAffinity":0,"fallback":"hidden_nurse_d4_skip"},
        "next": "hidden_nurse_d4_1_b"
    },
    "hidden_nurse_d4_1_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_2"
    },
    "hidden_nurse_d4_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_2_b"
    },
    "hidden_nurse_d4_2_b": {
        "background": "assets/images/background/nurse_room.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "hidden_nurse_d4_2_c"
    },
    "hidden_nurse_d4_2_c": {
        "background": "assets/images/background/nurse_room.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/nurse_dry_smile.png",
        "next": "hidden_nurse_d4_2_d"
    },
    "hidden_nurse_d4_2_d": {
        "background": "assets/images/background/nurse_room.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "hidden_nurse_d4_2_e"
    },
    "hidden_nurse_d4_2_e": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_2_f"
    },
    "hidden_nurse_d4_2_f": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_2_g"
    },
    "hidden_nurse_d4_2_g": {
        "background": "assets/images/background/nurse_room.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/nurse_tired.png",
        "next": "hidden_nurse_d4_2_h"
    },
    "hidden_nurse_d4_2_h": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "hidden_nurse_d4_3"
    },
    "hidden_nurse_d4_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4"
    },
    "hidden_nurse_d4_4": {
        "background": "assets/images/background/nurse_room.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/nurse_tired.png",
        "next": "hidden_nurse_d4_4_b"
    },
    "hidden_nurse_d4_4_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_c"
    },
    "hidden_nurse_d4_4_c": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_tired.png",
        "next": "hidden_nurse_d4_4_d"
    },
    "hidden_nurse_d4_4_d": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_tired.png",
        "next": "hidden_nurse_d4_4_e"
    },
    "hidden_nurse_d4_4_e": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_f"
    },
    "hidden_nurse_d4_4_f": {
        "background": "assets/images/background/nurse_room.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "hidden_nurse_d4_4_g"
    },
    "hidden_nurse_d4_4_g": {
        "next": "hidden_nurse_d4_4_h",
        "routeBeforeRender": true
    },
    "hidden_nurse_d4_4_h": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_i"
    },
    "hidden_nurse_d4_4_i": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_j"
    },
    "hidden_nurse_d4_4_j": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_4_k"
    },
    "hidden_nurse_d4_4_k": {
        "background": "assets/images/background/nurse_room.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "hidden_nurse_d4_5"
    },
    "hidden_nurse_d4_5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_name_choice"
    },
    "hidden_nurse_d4_name_choice": {
        "background": "assets/images/background/nurse_room.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/nurse_shy.png",
        "choices": [
            { "next": "hidden_nurse_d4_name_choice_a", "stats": {"Nurse":{"affinity":4}} },
            { "next": "hidden_nurse_d4_name_choice_b", "stats": {"Nurse":{"affinity":2}} },
            { "next": "hidden_nurse_d4_name_trap", "stats": {"Nurse":{"affinity":-3}} }
        ]
    },
    "hidden_nurse_d4_name_choice_a": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_6"
    },
    "hidden_nurse_d4_name_choice_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_6"
    },
    "hidden_nurse_d4_name_trap": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_6"
    },
    "hidden_nurse_d4_6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_6_b"
    },
    "hidden_nurse_d4_6_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_6_c"
    },
    "hidden_nurse_d4_6_c": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_6_d"
    },
    "hidden_nurse_d4_6_d": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_choice"
    },
    "hidden_nurse_d4_choice": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            { "next": "hidden_nurse_d4_meal_walk", "stats": {"Nurse":{"affinity":5}} },
            { "next": "hidden_nurse_d4_pass", "stats": {"Nurse":{"affinity":2}} },
            { "next": "hidden_nurse_d4_trap", "stats": {"Nurse":{"affinity":-4}} }
        ]
    },
    "hidden_nurse_d4_meal_walk": {
        "background": "assets/images/background/store.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_1"
    },
    "hidden_nurse_d4_meal_1": {
        "background": "assets/images/background/store.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_1_b"
    },
    "hidden_nurse_d4_meal_1_b": {
        "background": "assets/images/background/store.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_1_c"
    },
    "hidden_nurse_d4_meal_1_c": {
        "background": "assets/images/background/store.png",
        "backgroundVariant": "warm",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_1b"
    },
    "hidden_nurse_d4_meal_1b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_2"
    },
    "hidden_nurse_d4_meal_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_2_b"
    },
    "hidden_nurse_d4_meal_2_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_3"
    },
    "hidden_nurse_d4_meal_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_3_b"
    },
    "hidden_nurse_d4_meal_3_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_3_c"
    },
    "hidden_nurse_d4_meal_3_c": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_3_d"
    },
    "hidden_nurse_d4_meal_3_d": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_3_e"
    },
    "hidden_nurse_d4_meal_3_e": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_meal_4"
    },
    "hidden_nurse_d4_meal_4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlags": ["nurse_day4","nurse_day4_help"],
        "next": "hidden_nurse_d4_meal_4_b"
    },
    "hidden_nurse_d4_meal_4_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_freetalk"
    },
    "hidden_nurse_d4_pass": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_freetalk"
    },
    "hidden_nurse_d4_trap": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d4_freetalk"
    },
    "hidden_nurse_d4_freetalk": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "type": "free_talk",
        "maxTurns": 3,
        "next": "day4_haeun_gate",
        "isRemote": false
    },
    "morning4_end": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "branches": [
            {
                "condition": "day3_caught_multiple_dates",
                "next": "day4_caught_fallout_1"
            },
            {
                "condition": "harem_seed",
                "next": "day4_harem_fallout_1"
            },
            {
                "next": "day4_date_branch"
            }
        ]
    },
    "hidden_homeroom_d4_skip": {
        "background": "assets/images/background/street.png",
        "character": null,
        "affinityChar": "Teacher",
        "routeBeforeRender": true,
        "affinityBranches": [{"minAffinity":-19,"next":"hidden_homeroom_d4_low"},{"minAffinity":-100,"next":"hidden_homeroom_d4_neg"}],
        "next": "hidden_homeroom_d4_neg"
    },
    "hidden_homeroom_d4_low": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_nurse_d4_check"
    },
    "hidden_homeroom_d4_neg": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_worried.png",
        "next": "hidden_nurse_d4_check"
    },
    "hidden_nurse_d4_skip": {
        "background": "assets/images/background/nurse_room.png",
        "character": null,
        "affinityChar": "Nurse",
        "routeBeforeRender": true,
        "affinityBranches": [{"minAffinity":-19,"next":"hidden_nurse_d4_low"},{"minAffinity":-100,"next":"hidden_nurse_d4_neg"}],
        "next": "hidden_nurse_d4_neg"
    },
    "hidden_nurse_d4_low": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day4_haeun_gate"
    },
    "hidden_nurse_d4_neg": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "day4_haeun_gate"
    }
    };
    for (const scene of Object.values(scenes)) {
        if (scene && typeof scene === 'object') {
            Object.defineProperty(scene, "__sourceFile", {
                value: "day4_1_morning",
                enumerable: false
            });
        }
    }
    Object.assign(SCENARIO[4], scenes);
})();
