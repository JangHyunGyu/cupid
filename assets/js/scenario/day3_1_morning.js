/**
 * ============================================================================
 * CUPID - day3_1_morning
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[3]) SCENARIO[3] = {};

(() => {
    const scenes = {
    "morning3_start": {
        "background": "assets/images/background/school.png",
        "character": null,
        "bgm": "morning.mp3",
        "next": "morning3_start_2"
    },
    "morning3_start_2": {
        "background": "assets/images/background/school.png",
        "character": null,
        "branches": [
            { "condition": "homeroom_day2", "next": "hidden_homeroom_d3_1" },
            { "condition": "nurse_day2", "next": "hidden_nurse_d3_check" },
            { "next": "morning3_gate_branch" }
        ]
    },
    "morning3_gate_branch": {
        "background": "assets/images/background/school.png",
        "affinityBranches": [{"char":"Seoyeon","minAffinity":1,"next":"morning3_seo_gate_1"},{"char":"Dain","minAffinity":1,"next":"morning3_dain_gate_1"},{"char":"Yuna","minAffinity":1,"next":"morning3_yuna_gate_1"}],
        "next": "morning3_seo_gate_1"
    },
    "morning3_seo_gate_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [{"minAffinity":35,"next":"morning3_seo_gate_warm_1"},{"minAffinity":15,"next":"morning3_seo_gate_2"},{"minAffinity":-100,"next":"morning3_seo_gate_cold_1"}]
    },
    "morning3_seo_gate_warm_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "morning3_seo_gate_warm_2"
    },
    "morning3_seo_gate_warm_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "morning3_seo_gate_warm_3"
    },
    "morning3_seo_gate_warm_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "morning3_seo_gate_warm_4"
    },
    "morning3_seo_gate_warm_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "setFlags": ["morning3_companion_seoyeon"],
        "next": "morning3_classroom_1"
    },
    "morning3_seo_gate_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_seo_gate_3"
    },
    "morning3_seo_gate_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_seo_gate_4"
    },
    "morning3_seo_gate_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_seo_gate_5"
    },
    "morning3_seo_gate_5": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "morning3_seo_gate_6"
    },
    "morning3_seo_gate_6": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_seo_gate_6_ins"
    },
    "morning3_seo_gate_6_ins": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_seo_gate_7"
    },
    "morning3_seo_gate_7": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlags": ["morning3_companion_seoyeon"],
        "next": "morning3_classroom_1"
    },
    "morning3_seo_gate_cold_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_seo_gate_cold_2"
    },
    "morning3_seo_gate_cold_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_seo_gate_cold_3"
    },
    "morning3_seo_gate_cold_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlags": ["morning3_companion_seoyeon"],
        "next": "morning3_classroom_1"
    },
    "morning3_yuna_gate_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "affinityChar": "Yuna",
        "affinityBranches": [{"minAffinity":35,"next":"morning3_yuna_gate_warm_1"},{"minAffinity":15,"next":"morning3_yuna_gate_2"},{"minAffinity":-100,"next":"morning3_yuna_gate_cold_1"}]
    },
    "morning3_yuna_gate_warm_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "morning3_yuna_gate_warm_2"
    },
    "morning3_yuna_gate_warm_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "morning3_yuna_gate_warm_3"
    },
    "morning3_yuna_gate_warm_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "morning3_yuna_gate_warm_4"
    },
    "morning3_yuna_gate_warm_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "setFlags": ["morning3_companion_yuna"],
        "next": "morning3_classroom_1"
    },
    "morning3_yuna_gate_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning3_yuna_gate_3"
    },
    "morning3_yuna_gate_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning3_yuna_gate_4"
    },
    "morning3_yuna_gate_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning3_yuna_gate_5"
    },
    "morning3_yuna_gate_5": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning3_yuna_gate_6"
    },
    "morning3_yuna_gate_6": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning3_yuna_gate_6_ins"
    },
    "morning3_yuna_gate_6_ins": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning3_yuna_gate_6_ins2"
    },
    "morning3_yuna_gate_6_ins2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning3_yuna_gate_6_ins3"
    },
    "morning3_yuna_gate_6_ins3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning3_yuna_gate_7"
    },
    "morning3_yuna_gate_7": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "setFlags": ["morning3_companion_yuna"],
        "next": "morning3_classroom_1"
    },
    "morning3_yuna_gate_cold_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning3_yuna_gate_cold_2"
    },
    "morning3_yuna_gate_cold_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "setFlags": ["morning3_companion_yuna"],
        "next": "morning3_classroom_1"
    },
    "morning3_dain_gate_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "affinityChar": "Dain",
        "affinityBranches": [{"minAffinity":35,"next":"morning3_dain_gate_warm_1"},{"minAffinity":15,"next":"morning3_dain_gate_2"},{"minAffinity":-100,"next":"morning3_dain_gate_cold_1"}]
    },
    "morning3_dain_gate_warm_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning3_dain_gate_warm_2"
    },
    "morning3_dain_gate_warm_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning3_dain_gate_warm_3"
    },
    "morning3_dain_gate_warm_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_shy.png",
        "setFlags": ["morning3_companion_dain"],
        "next": "morning3_classroom_1"
    },
    "morning3_dain_gate_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_dain_gate_3"
    },
    "morning3_dain_gate_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_dain_gate_4"
    },
    "morning3_dain_gate_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_dain_gate_4_ins"
    },
    "morning3_dain_gate_4_ins": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_dain_gate_5"
    },
    "morning3_dain_gate_5": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "setFlags": ["morning3_companion_dain"],
        "next": "morning3_dain_gate_5_ins"
    },
    "morning3_dain_gate_5_ins": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_classroom_1"
    },
    "morning3_dain_gate_cold_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_dain_gate_cold_2"
    },
    "morning3_dain_gate_cold_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "setFlags": ["morning3_companion_dain"],
        "next": "morning3_classroom_1"
    },
    "morning3_classroom_1": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            { "condition": "morning3_companion_seoyeon", "next": "morning3_react_seo_1" },
            { "condition": "morning3_companion_yuna", "next": "morning3_react_yuna_1" },
            { "condition": "morning3_companion_dain", "next": "morning3_react_dain_1" },
            { "next": "morning3_react_seo_1" }
        ]
    },
    "morning3_react_seo_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_react_seo_2"
    },
    "morning3_react_seo_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "next": "morning3_date_intro"
    },
    "morning3_react_yuna_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "morning3_react_yuna_1_ins"
    },
    "morning3_react_yuna_1_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "morning3_react_yuna_1b"
    },
    "morning3_react_yuna_1b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "morning3_react_yuna_2"
    },
    "morning3_react_yuna_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_react_yuna_2_ins"
    },
    "morning3_react_yuna_2_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_date_intro"
    },
    "morning3_react_dain_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_react_dain_2"
    },
    "morning3_react_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning3_date_intro"
    },
    "morning3_date_intro": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning3_date_intro_b"
    },
    "morning3_date_intro_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "morning3_date_seo_1"
    },
    "hidden_homeroom_d3_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_2"
    },
    "hidden_homeroom_d3_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_3"
    },
    "hidden_homeroom_d3_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d3_3_ins"
    },
    "hidden_homeroom_d3_3_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d3_3_ins2"
    },
    "hidden_homeroom_d3_3_ins2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d3_4"
    },
    "hidden_homeroom_d3_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d3_4_ins"
    },
    "hidden_homeroom_d3_4_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d3_4_ins2"
    },
    "hidden_homeroom_d3_4_ins2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d3_4_ins3"
    },
    "hidden_homeroom_d3_4_ins3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d3_4_ins4"
    },
    "hidden_homeroom_d3_4_ins4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d3_4_ins5"
    },
    "hidden_homeroom_d3_4_ins5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d3_choice"
    },
    "hidden_homeroom_d3_choice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "hidden_homeroom_d3_reveal_1", "stats": {"Teacher":{"affinity":12}} },
            { "next": "hidden_homeroom_d3_hide_1", "stats": {"Teacher":{"affinity":3}} }
        ]
    },
    "hidden_homeroom_d3_reveal_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_1_ins"
    },
    "hidden_homeroom_d3_reveal_1_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_1_ins2"
    },
    "hidden_homeroom_d3_reveal_1_ins2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_1_ins3"
    },
    "hidden_homeroom_d3_reveal_1_ins3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_1_ins4"
    },
    "hidden_homeroom_d3_reveal_1_ins4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_1_ins5"
    },
    "hidden_homeroom_d3_reveal_1_ins5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_2"
    },
    "hidden_homeroom_d3_reveal_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_2_ins"
    },
    "hidden_homeroom_d3_reveal_2_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_2_ins2"
    },
    "hidden_homeroom_d3_reveal_2_ins2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_2_ins3"
    },
    "hidden_homeroom_d3_reveal_2_ins3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_2_ins4"
    },
    "hidden_homeroom_d3_reveal_2_ins4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_2_ins5"
    },
    "hidden_homeroom_d3_reveal_2_ins5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_3"
    },
    "hidden_homeroom_d3_reveal_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_3_ins"
    },
    "hidden_homeroom_d3_reveal_3_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_3_ins2"
    },
    "hidden_homeroom_d3_reveal_3_ins2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_4"
    },
    "hidden_homeroom_d3_reveal_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_4_ins"
    },
    "hidden_homeroom_d3_reveal_4_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_4_ins2"
    },
    "hidden_homeroom_d3_reveal_4_ins2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_4_ins3"
    },
    "hidden_homeroom_d3_reveal_4_ins3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_4_ins4"
    },
    "hidden_homeroom_d3_reveal_4_ins4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_4_ins5"
    },
    "hidden_homeroom_d3_reveal_4_ins5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_4_ins6"
    },
    "hidden_homeroom_d3_reveal_4_ins6": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_choice"
    },
    "hidden_homeroom_d3_reveal_choice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "hidden_homeroom_d3_reveal_choice_a", "stats": {"Teacher":{"affinity":9}} },
            { "next": "hidden_homeroom_d3_reveal_choice_b", "stats": {"Teacher":{"affinity":3}} }
        ]
    },
    "hidden_homeroom_d3_reveal_choice_a": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d3_reveal_5"
    },
    "hidden_homeroom_d3_reveal_choice_b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_5"
    },
    "hidden_homeroom_d3_reveal_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_6"
    },
    "hidden_homeroom_d3_reveal_6": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "setFlags": ["discovered_manuscript"],
        "next": "hidden_homeroom_d3_reveal_6_ins"
    },
    "hidden_homeroom_d3_reveal_6_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_6_ins2"
    },
    "hidden_homeroom_d3_reveal_6_ins2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d3_reveal_6_ins3"
    },
    "hidden_homeroom_d3_reveal_6_ins3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_6_ins4"
    },
    "hidden_homeroom_d3_reveal_6_ins4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d3_reveal_6_ins5"
    },
    "hidden_homeroom_d3_reveal_6_ins5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_6_ins6"
    },
    "hidden_homeroom_d3_reveal_6_ins6": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d3_reveal_6_ins7"
    },
    "hidden_homeroom_d3_reveal_6_ins7": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d3_end"
    },
    "hidden_homeroom_d3_hide_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_end"
    },
    "hidden_homeroom_d3_end": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "setFlags": ["homeroom_day3","homeroom_route_unlocked"],
        "next": "hidden_homeroom_d3_freetalk"
    },
    "hidden_homeroom_d3_freetalk": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "type": "free_talk",
        "next": "hidden_nurse_d3_check"
    },
    "hidden_nurse_d3_check": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            { "condition": "nurse_day2", "next": "hidden_nurse_d3_1" },
            { "next": "morning3_date_seo_1" }
        ]
    },
    "hidden_nurse_d3_1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_1_ins"
    },
    "hidden_nurse_d3_1_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_1_ins2"
    },
    "hidden_nurse_d3_1_ins2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_1_ins3"
    },
    "hidden_nurse_d3_1_ins3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_1_ins4"
    },
    "hidden_nurse_d3_1_ins4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_1_ins5"
    },
    "hidden_nurse_d3_1_ins5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_2"
    },
    "hidden_nurse_d3_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_2_ins"
    },
    "hidden_nurse_d3_2_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_nurse_d3_2_ins2"
    },
    "hidden_nurse_d3_2_ins2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_nurse_d3_2_ins3"
    },
    "hidden_nurse_d3_2_ins3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_nurse_d3_2_ins4"
    },
    "hidden_nurse_d3_2_ins4": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "hidden_nurse_d3_2_ins5"
    },
    "hidden_nurse_d3_2_ins5": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "hidden_nurse_d3_3"
    },
    "hidden_nurse_d3_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_3_ins"
    },
    "hidden_nurse_d3_3_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_3_ins2"
    },
    "hidden_nurse_d3_3_ins2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_3_ins3"
    },
    "hidden_nurse_d3_3_ins3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_3_ins4"
    },
    "hidden_nurse_d3_3_ins4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_4"
    },
    "hidden_nurse_d3_4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5"
    },
    "hidden_nurse_d3_5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_ins"
    },
    "hidden_nurse_d3_5_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_ins2"
    },
    "hidden_nurse_d3_5_ins2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_ins3"
    },
    "hidden_nurse_d3_5_ins3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_ins4"
    },
    "hidden_nurse_d3_5_ins4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_ins5"
    },
    "hidden_nurse_d3_5_ins5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_ins6"
    },
    "hidden_nurse_d3_5_ins6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_ins7"
    },
    "hidden_nurse_d3_5_ins7": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_ins8"
    },
    "hidden_nurse_d3_5_ins8": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_ins9"
    },
    "hidden_nurse_d3_5_ins9": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_ins10"
    },
    "hidden_nurse_d3_5_ins10": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_ins11"
    },
    "hidden_nurse_d3_5_ins11": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_ins12"
    },
    "hidden_nurse_d3_5_ins12": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_ins13"
    },
    "hidden_nurse_d3_5_ins13": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_ins14"
    },
    "hidden_nurse_d3_5_ins14": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_ins15"
    },
    "hidden_nurse_d3_5_ins15": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_ins16"
    },
    "hidden_nurse_d3_5_ins16": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_choice1"
    },
    "hidden_nurse_d3_choice1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            { "next": "hidden_nurse_d3_choice1_a", "stats": {"Nurse":{"affinity":7}} },
            { "next": "hidden_nurse_d3_choice1_b", "stats": {"Nurse":{"affinity":0}} }
        ]
    },
    "hidden_nurse_d3_choice1_a": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_6"
    },
    "hidden_nurse_d3_choice1_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_6"
    },
    "hidden_nurse_d3_6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_6_ins"
    },
    "hidden_nurse_d3_6_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_6_ins2"
    },
    "hidden_nurse_d3_6_ins2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_6_ins3"
    },
    "hidden_nurse_d3_6_ins3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_6_ins4"
    },
    "hidden_nurse_d3_6_ins4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_6_ins5"
    },
    "hidden_nurse_d3_6_ins5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_6_ins6"
    },
    "hidden_nurse_d3_6_ins6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_6_ins7"
    },
    "hidden_nurse_d3_6_ins7": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_7"
    },
    "hidden_nurse_d3_7": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_7_ins"
    },
    "hidden_nurse_d3_7_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_8"
    },
    "hidden_nurse_d3_8": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_8_ins"
    },
    "hidden_nurse_d3_8_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_8_ins2"
    },
    "hidden_nurse_d3_8_ins2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_8_ins3"
    },
    "hidden_nurse_d3_8_ins3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_8_ins4"
    },
    "hidden_nurse_d3_8_ins4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_8_ins5"
    },
    "hidden_nurse_d3_8_ins5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_choice2"
    },
    "hidden_nurse_d3_choice2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            { "next": "hidden_nurse_d3_choice2_a", "stats": {"Nurse":{"affinity":12}} },
            { "next": "hidden_nurse_d3_choice2_b", "stats": {"Nurse":{"affinity":5}} }
        ]
    },
    "hidden_nurse_d3_choice2_a": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_9"
    },
    "hidden_nurse_d3_choice2_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_9"
    },
    "hidden_nurse_d3_9": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_9_ins"
    },
    "hidden_nurse_d3_9_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_9_ins2"
    },
    "hidden_nurse_d3_9_ins2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_9_ins3"
    },
    "hidden_nurse_d3_9_ins3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_9_ins4"
    },
    "hidden_nurse_d3_9_ins4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_9_ins5"
    },
    "hidden_nurse_d3_9_ins5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_9_ins6"
    },
    "hidden_nurse_d3_9_ins6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_9_ins7"
    },
    "hidden_nurse_d3_9_ins7": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_9_ins8"
    },
    "hidden_nurse_d3_9_ins8": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_10"
    },
    "hidden_nurse_d3_10": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_11"
    },
    "hidden_nurse_d3_11": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_shy.png",
        "setFlags": ["nurse_day3","nurse_route_unlocked"],
        "next": "hidden_nurse_d3_freetalk"
    },
    "hidden_nurse_d3_freetalk": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "type": "free_talk",
        "next": "morning3_date_seo_1"
    },
    "morning3_date_seo_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_date_seo_choice"
    },
    "morning3_date_seo_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            { "next": "morning3_date_seo_accept", "stats": {"Seoyeon":{"affinity":5}}, "setFlags": ["accepted_seoyeon_date"] },
            { "next": "morning3_date_seo_decline", "stats": {"Seoyeon":{"affinity":-3}} }
        ]
    },
    "morning3_date_seo_accept": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "morning3_date_seo_accept_b"
    },
    "morning3_date_seo_accept_b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "morning3_date_dain_1"
    },
    "morning3_date_seo_decline": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_date_seo_decline_b"
    },
    "morning3_date_seo_decline_b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_date_dain_1"
    },
    "morning3_date_dain_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_date_dain_2"
    },
    "morning3_date_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_date_dain_3"
    },
    "morning3_date_dain_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_date_dain_choice"
    },
    "morning3_date_dain_choice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            { "next": "morning3_date_dain_accept", "stats": {"Dain":{"affinity":5}}, "setFlags": ["accepted_dain_date"] },
            { "next": "morning3_date_dain_decline", "stats": {"Dain":{"affinity":-3}} }
        ]
    },
    "morning3_date_dain_accept": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning3_date_dain_decline_narr"
    },
    "morning3_date_dain_decline": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_date_dain_decline_narr"
    },
    "morning3_date_dain_decline_narr": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning3_date_dain_decline_inner"
    },
    "morning3_date_dain_decline_inner": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning3_date_dain_decline_inner_2"
    },
    "morning3_date_dain_decline_inner_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning3_date_yuna_1"
    },
    "morning3_date_yuna_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning3_date_yuna_1_ins"
    },
    "morning3_date_yuna_1_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning3_date_yuna_2"
    },
    "morning3_date_yuna_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning3_date_yuna_choice"
    },
    "morning3_date_yuna_choice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            { "next": "morning3_date_yuna_accept", "stats": {"Yuna":{"affinity":5}}, "setFlags": ["accepted_yuna_date"] },
            { "next": "morning3_date_yuna_decline", "stats": {"Yuna":{"affinity":-3}} }
        ]
    },
    "morning3_date_yuna_accept": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "morning3_check_multiple"
    },
    "morning3_date_yuna_decline": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "morning3_check_multiple"
    },
    "morning3_check_multiple": {
        "background": "assets/images/background/room_school.png",
        "branches": [
            { "condition": "accepted_seoyeon_date", "next": "morning3_multi_from_seo" },
            { "condition": "accepted_dain_date", "next": "morning3_multi_from_dain" },
            { "condition": "accepted_yuna_date", "next": "morning3_multi_from_yuna" },
            { "next": "morning3_end" }
        ]
    },
    "morning3_multi_from_seo": {
        "background": "assets/images/background/room_school.png",
        "branches": [
            { "condition": "accepted_dain_date", "next": "morning3_set_multiple" },
            { "condition": "accepted_yuna_date", "next": "morning3_set_multiple" },
            { "next": "morning3_end" }
        ]
    },
    "morning3_multi_from_dain": {
        "background": "assets/images/background/room_school.png",
        "branches": [
            { "condition": "accepted_yuna_date", "next": "morning3_set_multiple" },
            { "next": "morning3_end" }
        ]
    },
    "morning3_set_multiple": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "setFlags": ["day3_has_multiple_dates"],
        "next": "morning3_end"
    },
    "morning3_multi_from_yuna": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "morning3_end"
    },
    "morning3_end": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning3_end_ins"
    },
    "morning3_end_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch3_start"
    }
    };
    for (const scene of Object.values(scenes)) {
        if (scene && typeof scene === 'object') {
            Object.defineProperty(scene, "__sourceFile", {
                value: "day3_1_morning",
                enumerable: false
            });
        }
    }
    Object.assign(SCENARIO[3], scenes);
})();
