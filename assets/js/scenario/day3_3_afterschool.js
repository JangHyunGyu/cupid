/**
 * ============================================================================
 * CUPID - day3_3_afterschool
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[3]) SCENARIO[3] = {};

Object.assign(SCENARIO[3], {
    "after3_start": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "bgm": "sunset1.mp3",
        "next": "after3_route_check"
    },
    "after3_route_check": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "branches": [
            { "condition": "day3_has_multiple_dates", "next": "after3_multi_choice" },
            { "condition": "accepted_dain_date", "next": "after3_auto_dain" },
            { "condition": "accepted_yuna_date", "next": "after3_auto_yuna" },
            { "condition": "accepted_seoyeon_date", "next": "after3_auto_seo" },
            { "next": "after3_choice" }
        ]
    },
    "after3_auto_dain": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "setFlags": ["route_dain"],
        "next": "after3_reject_for_dain_1"
    },
    "after3_auto_yuna": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "setFlags": ["route_yuna"],
        "next": "after3_reject_for_yuna_1"
    },
    "after3_auto_seo": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "setFlags": ["route_seoyeon"],
        "next": "after3_reject_for_seo_1"
    },
    "after3_multi_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "choices": [
            { "next": "after3_reject_for_seo_1", "setFlags": ["route_seoyeon"] },
            { "next": "after3_reject_for_yuna_1", "setFlags": ["route_yuna"] },
            { "next": "after3_reject_for_dain_1", "setFlags": ["route_dain"] },
            { "next": "after3_choice" }
        ]
    },
    "after3_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "choices": [
            { "next": "after3_reject_for_seo_1", "setFlags": ["route_seoyeon"] },
            { "next": "after3_reject_for_yuna_1", "setFlags": ["route_yuna"] },
            { "next": "after3_reject_for_dain_1", "setFlags": ["route_dain"] }
        ]
    },
    "after3_reject_for_seo_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_reject_for_seo_2"
    },
    "after3_reject_for_seo_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_reject_for_seo_3"
    },
    "after3_reject_for_seo_3": {
        "background": "assets/images/background/library_old.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "after3_reject_for_seo_4"
    },
    "after3_reject_for_seo_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after3_seo_1"
    },
    "after3_reject_for_yuna_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_reject_for_yuna_2"
    },
    "after3_reject_for_yuna_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_reject_for_yuna_walk_gym"
    },
    "after3_reject_for_yuna_walk_gym": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_reject_for_yuna_3"
    },
    "after3_reject_for_yuna_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_reject_for_yuna_3_dain"
    },
    "after3_reject_for_yuna_3_dain": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_reject_for_yuna_3_react"
    },
    "after3_reject_for_yuna_3_react": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_reject_for_yuna_4"
    },
    "after3_reject_for_yuna_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after3_yuna_1"
    },
    "after3_reject_for_dain_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_reject_for_dain_2"
    },
    "after3_reject_for_dain_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_reject_for_dain_2b"
    },
    "after3_reject_for_dain_2b": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "next": "after3_reject_for_dain_3"
    },
    "after3_reject_for_dain_3": {
        "background": "assets/images/background/library_old.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "after3_reject_for_dain_3b"
    },
    "after3_reject_for_dain_3b": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after3_reject_for_dain_4"
    },
    "after3_reject_for_dain_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after3_dain_1"
    },
    "after3_seo_1": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "bgm": "sunset1.mp3",
        "next": "after3_seo_2"
    },
    "after3_seo_2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_3"
    },
    "after3_seo_3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_4"
    },
    "after3_seo_4": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_5"
    },
    "after3_seo_5": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_5_ins"
    },
    "after3_seo_6": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_7"
    },
    "after3_seo_7": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_7_ins"
    },
    "after3_seo_8": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_9"
    },
    "after3_seo_9": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_choice"
    },
    "after3_seo_choice": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "choices": [
            { "next": "after3_seo_choice1", "stats": {"Seoyeon":{"affinity":10}} },
            { "next": "after3_seo_choice2", "stats": {"Seoyeon":{"affinity":5}} }
        ]
    },
    "after3_seo_choice1": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "after3_seo_choice1_react"
    },
    "after3_seo_choice1_react": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "setFlags": ["seoyeon_day3_event"],
        "next": "after3_seo_choice1_react_ins"
    },
    "after3_seo_choice2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlags": ["seoyeon_day3_event"],
        "next": "after3_seo_end_c2"
    },
    "after3_seo_end": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "branches": [
            { "condition": "day3_has_multiple_dates", "next": "after3_confront_1" },
            { "next": "after3_final" }
        ]
    },
    "after3_seo_end_c2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "branches": [
            { "condition": "day3_has_multiple_dates", "next": "after3_confront_1" },
            { "next": "after3_final" }
        ]
    },
    "after3_yuna_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "bgm": "night1.mp3",
        "next": "after3_yuna_2"
    },
    "after3_yuna_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "next": "after3_yuna_3"
    },
    "after3_yuna_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "next": "after3_yuna_4"
    },
    "after3_yuna_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "next": "after3_yuna_5"
    },
    "after3_yuna_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "next": "after3_yuna_5_ins"
    },
    "after3_yuna_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after3_yuna_7"
    },
    "after3_yuna_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after3_yuna_8"
    },
    "after3_yuna_8": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_8b"
    },
    "after3_yuna_8b": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_9"
    },
    "after3_yuna_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_choice"
    },
    "after3_yuna_choice": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "choices": [
            { "next": "after3_yuna_choice1", "stats": {"Yuna":{"affinity":8}} },
            { "next": "after3_yuna_choice2", "stats": {"Yuna":{"affinity":12}} }
        ]
    },
    "after3_yuna_choice1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_choice1_2"
    },
    "after3_yuna_choice1_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_choice1_2_ins"
    },
    "after3_yuna_choice1_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_choice1_react"
    },
    "after3_yuna_choice1_react": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "setFlags": ["yuna_day3_event"],
        "next": "after3_yuna_freetalk"
    },
    "after3_yuna_choice2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_choice2_2"
    },
    "after3_yuna_choice2_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_choice2_3"
    },
    "after3_yuna_choice2_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_choice2_3_ins"
    },
    "after3_yuna_choice2_react": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "setFlags": ["yuna_day3_event"],
        "next": "after3_yuna_end"
    },
    "after3_yuna_end": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "branches": [
            { "condition": "day3_has_multiple_dates", "next": "after3_confront_1" },
            { "next": "after3_final" }
        ]
    },
    "after3_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "bgm": "daily2.mp3",
        "next": "after3_dain_2"
    },
    "after3_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after3_dain_3"
    },
    "after3_dain_3": {
        "background": "assets/images/background/dain_hurt_event1.png",
        "character": null,
        "next": "after3_dain_4"
    },
    "after3_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "next": "after3_dain_5"
    },
    "after3_dain_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "next": "after3_dain_5_ins"
    },
    "after3_dain_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_choice"
    },
    "after3_dain_choice": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "choices": [
            { "next": "after3_dain_choice1", "stats": {"Dain":{"affinity":12}} },
            { "next": "after3_dain_choice2", "stats": {"Dain":{"affinity":5}} }
        ]
    },
    "after3_dain_choice1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_choice1_2"
    },
    "after3_dain_choice1_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_choice1_3"
    },
    "after3_dain_choice1_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after3_dain_choice1_react"
    },
    "after3_dain_choice1_react": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after3_dain_choice1_react2"
    },
    "after3_dain_choice1_react2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after3_dain_choice1_react3"
    },
    "after3_dain_choice1_react3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "setFlags": ["dain_day3_event"],
        "next": "after3_dain_freetalk"
    },
    "after3_dain_choice2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "next": "after3_dain_choice2_ins"
    },
    "after3_dain_end": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "branches": [
            { "condition": "day3_has_multiple_dates", "next": "after3_confront_1" },
            { "next": "after3_final" }
        ]
    },
    "after3_confront_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "bgm": "mystery.mp3",
        "next": "after3_confront_2"
    },
    "after3_confront_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_3"
    },
    "after3_confront_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_4"
    },
    "after3_confront_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_5"
    },
    "after3_confront_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_5_ins"
    },
    "after3_confront_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_choice"
    },
    "after3_confront_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "choices": [
            { "next": "after3_confront_admit", "stats": {"Seoyeon":{"affinity":-5}} },
            { "next": "after3_confront_excuse", "stats": {"Seoyeon":{"affinity":-8}} },
            { "next": "after3_confront_lie_ins", "stats": {"Seoyeon":{"affinity":-3}}, "setFlags": ["conscience_minus"] }
        ]
    },
    "after3_confront_admit": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_admit_ins"
    },
    "after3_confront_admit_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "after3_confront_admit_3"
    },
    "after3_confront_admit_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "after3_confront_admit_4"
    },
    "after3_confront_admit_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_admit_4_ins"
    },
    "after3_confront_admit_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_admit_6"
    },
    "after3_confront_admit_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_end"
    },
    "after3_confront_excuse": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "after3_confront_excuse_ins"
    },
    "after3_confront_excuse_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "after3_confront_excuse_2_ins"
    },
    "after3_confront_lie_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_lie"
    },
    "after3_confront_lie": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_lie_2"
    },
    "after3_confront_lie_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_lie_2_ins"
    },
    "after3_confront_end": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_final"
    },
    "after3_final": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "haeun_check"
    },
    "haeun_check": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "branches": [
            { "condition": "seoyeon_day3_event", "next": "haeun_warn_1" },
            { "next": "minsu_d3_check" }
        ]
    },
    "haeun_warn_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "haeun_warn_1_ins"
    },
    "haeun_warn_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_2_ins"
    },
    "haeun_warn_2b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_3"
    },
    "haeun_warn_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_3_ins"
    },
    "haeun_warn_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_4b"
    },
    "haeun_warn_4b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_5"
    },
    "haeun_warn_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_5b"
    },
    "haeun_warn_5b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_5c"
    },
    "haeun_warn_5c": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_5c_ins"
    },
    "haeun_warn_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_6_ins"
    },
    "haeun_warn_7": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "haeun_warn_7_ins"
    },
    "haeun_warn_8": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "haeun_warn_8b"
    },
    "haeun_warn_8b": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "minsu_d3_check"
    },
    "minsu_d3_check": {
        "background": "assets/images/background/school.png",
        "character": null,
        "branches": [
            { "condition": "day3_has_multiple_dates", "next": "minsu_d3_1" },
            { "next": "night3_start" }
        ]
    },
    "minsu_d3_1": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_d3_2"
    },
    "minsu_d3_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_d3_3"
    },
    "minsu_d3_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_d3_3_ins"
    },
    "minsu_d3_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_d3_4_ins"
    },
    "minsu_d3_5": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_d3_5_ins"
    },
    "minsu_d3_5b": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_d3_6"
    },
    "minsu_d3_6": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_d3_6b"
    },
    "minsu_d3_6b": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_d3_6b_ins"
    },
    "minsu_d3_7": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_d3_7_ins"
    },
    "minsu_d3_8": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_d3_8_ins"
    },
    "minsu_d3_9": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_d3_10"
    },
    "minsu_d3_10": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "minsu_d3_10_ins"
    },
    "after3_seo_freetalk": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "type": "free_talk",
        "next": "after3_seo_end"
    },
    "after3_yuna_freetalk": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "type": "free_talk",
        "next": "after3_yuna_end"
    },
    "after3_dain_freetalk": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "type": "free_talk",
        "next": "after3_dain_end"
    },
    "after3_seo_5_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_seo_6"
    },
    "after3_seo_choice1_react_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "after3_seo_choice1_react_ins2"
    },
    "after3_seo_choice1_react_ins2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "after3_seo_choice1_react_ins3"
    },
    "after3_seo_choice1_react_ins3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "after3_seo_choice1_react_ins4"
    },
    "after3_seo_choice1_react_ins4": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_seo_choice1_react_ins5"
    },
    "after3_seo_choice1_react_ins5": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "after3_seo_choice1_react_ins6"
    },
    "after3_seo_choice1_react_ins6": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_seo_choice1_react_ins7"
    },
    "after3_seo_choice1_react_ins7": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_seo_choice1_react_ins8"
    },
    "after3_seo_choice1_react_ins8": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "after3_seo_freetalk"
    },
    "after3_yuna_5_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after3_yuna_6"
    },
    "after3_yuna_choice1_2_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after3_yuna_choice1_3"
    },
    "after3_yuna_choice2_3_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_choice2_react"
    },
    "after3_seo_7_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_8"
    },
    "after3_dain_5_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "next": "after3_dain_6"
    },
    "after3_dain_choice2_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after3_dain_choice2_ins2"
    },
    "after3_dain_choice2_ins2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after3_dain_choice2_ins3"
    },
    "after3_dain_choice2_ins3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after3_dain_choice2_ins4"
    },
    "after3_dain_choice2_ins4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after3_dain_choice2_ins5"
    },
    "after3_dain_choice2_ins5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after3_dain_choice2_ins6"
    },
    "after3_dain_choice2_ins6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "setFlags": ["dain_day3_event"],
        "next": "after3_dain_end"
    },
    "after3_confront_5_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_confront_5_ins2"
    },
    "after3_confront_5_ins2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_6"
    },
    "haeun_warn_5c_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "haeun_warn_6"
    },
    "after3_confront_admit_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_admit_2"
    },
    "after3_confront_admit_4_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_admit_5"
    },
    "after3_confront_excuse_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "after3_confront_excuse_2"
    },
    "after3_confront_excuse_2_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "after3_confront_end"
    },
    "after3_confront_lie_2_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_lie_2_ins2"
    },
    "after3_confront_lie_2_ins2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_end"
    },
    "haeun_warn_1_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "haeun_warn_2"
    },
    "haeun_warn_2_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_2b"
    },
    "haeun_warn_3_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_3_ins2"
    },
    "haeun_warn_3_ins2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_4"
    },
    "haeun_warn_6_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_7"
    },
    "haeun_warn_7_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "haeun_warn_7_ins2"
    },
    "haeun_warn_7_ins2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_7_ins3"
    },
    "haeun_warn_7_ins3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "haeun_warn_7_ins4"
    },
    "haeun_warn_7_ins4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "haeun_warn_8"
    },
    "minsu_d3_8_ins": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_d3_9"
    },
    "minsu_d3_3_ins": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_d3_4"
    },
    "minsu_d3_4_ins": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_d3_4_ins2"
    },
    "minsu_d3_4_ins2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "minsu_d3_5"
    },
    "minsu_d3_5_ins": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_d3_5b"
    },
    "minsu_d3_6b_ins": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_d3_7"
    },
    "minsu_d3_7_ins": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_d3_7_ins2"
    },
    "minsu_d3_7_ins2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_d3_7_ins3"
    },
    "minsu_d3_7_ins3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_d3_8"
    },
    "minsu_d3_10_ins": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "night3_start"
    }
});
