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
        "next": "morning3_seo_gate_6_b"
    },
    "morning3_seo_gate_6_b": {
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
        "next": "morning3_yuna_gate_6_b"
    },
    "morning3_yuna_gate_6_b": {
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
        "next": "morning3_dain_gate_4_b"
    },
    "morning3_dain_gate_4_b": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_dain_gate_5"
    },
    "morning3_dain_gate_5": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "setFlags": ["morning3_companion_dain"],
        "next": "morning3_dain_gate_5_b"
    },
    "morning3_dain_gate_5_b": {
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
        "next": "morning3_react_yuna_1_b"
    },
    "morning3_react_yuna_1_b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_react_yuna_2"
    },
    "morning3_react_yuna_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_react_yuna_2_b"
    },
    "morning3_react_yuna_2_b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
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
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "affinityGuard": {"character":"Teacher","minAffinity":0,"fallback":"hidden_homeroom_d3_low"},
        "next": "hidden_homeroom_d3_3"
    },
    "hidden_homeroom_d3_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d3_3_b"
    },
    "hidden_homeroom_d3_3_b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d3_4"
    },
    "hidden_homeroom_d3_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d3_4_b"
    },
    "hidden_homeroom_d3_4_b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d3_4_c"
    },
    "hidden_homeroom_d3_4_c": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d3_4_d"
    },
    "hidden_homeroom_d3_4_d": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d3_4_e"
    },
    "hidden_homeroom_d3_4_e": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d3_4_f"
    },
    "hidden_homeroom_d3_4_f": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d3_4_g"
    },
    "hidden_homeroom_d3_4_g": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d3_4_h"
    },
    "hidden_homeroom_d3_4_h": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d3_choice"
    },
    "hidden_homeroom_d3_choice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "hidden_homeroom_d3_reveal_1", "stats": {"Teacher":{"affinity":6}} },
            { "next": "hidden_homeroom_d3_hide_1", "stats": {"Teacher":{"affinity":-3}} },
            { "next": "hidden_homeroom_d3_reveal_1", "stats": {"Teacher":{"affinity":-5}} },
            { "next": "hidden_homeroom_d3_reveal_1", "stats": {"Teacher":{"affinity":-6}} }
        ]
    },
    "hidden_homeroom_d3_reveal_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_1_b"
    },
    "hidden_homeroom_d3_reveal_1_b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_1_c"
    },
    "hidden_homeroom_d3_reveal_1_c": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_1_d"
    },
    "hidden_homeroom_d3_reveal_1_d": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_1_e"
    },
    "hidden_homeroom_d3_reveal_1_e": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_1_f"
    },
    "hidden_homeroom_d3_reveal_1_f": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_2"
    },
    "hidden_homeroom_d3_reveal_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_2_b"
    },
    "hidden_homeroom_d3_reveal_2_b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_2_c"
    },
    "hidden_homeroom_d3_reveal_2_c": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_2_d"
    },
    "hidden_homeroom_d3_reveal_2_d": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_2_e"
    },
    "hidden_homeroom_d3_reveal_2_e": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_2_f"
    },
    "hidden_homeroom_d3_reveal_2_f": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_3"
    },
    "hidden_homeroom_d3_reveal_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_3_b"
    },
    "hidden_homeroom_d3_reveal_3_b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_3_c"
    },
    "hidden_homeroom_d3_reveal_3_c": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_4"
    },
    "hidden_homeroom_d3_reveal_4": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_4_b"
    },
    "hidden_homeroom_d3_reveal_4_b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_4_c"
    },
    "hidden_homeroom_d3_reveal_4_c": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_4_d"
    },
    "hidden_homeroom_d3_reveal_4_d": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_4_e"
    },
    "hidden_homeroom_d3_reveal_4_e": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_4_f"
    },
    "hidden_homeroom_d3_reveal_4_f": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_4_g"
    },
    "hidden_homeroom_d3_reveal_4_g": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_choice"
    },
    "hidden_homeroom_d3_reveal_choice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "hidden_homeroom_d3_reveal_choice_a", "stats": {"Teacher":{"affinity":7}} },
            { "next": "hidden_homeroom_d3_reveal_choice_b", "stats": {"Teacher":{"affinity":2}} },
            { "next": "hidden_homeroom_d3_reveal_choice_trap", "stats": {"Teacher":{"affinity":-4}} }
        ]
    },
    "hidden_homeroom_d3_reveal_choice_trap": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d3_reveal_5"
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
        "next": "hidden_homeroom_d3_reveal_6_b"
    },
    "hidden_homeroom_d3_reveal_6_b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_6_c"
    },
    "hidden_homeroom_d3_reveal_6_c": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d3_reveal_6_d"
    },
    "hidden_homeroom_d3_reveal_6_d": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_6_e"
    },
    "hidden_homeroom_d3_reveal_6_e": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d3_reveal_6_f"
    },
    "hidden_homeroom_d3_reveal_6_f": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d3_reveal_6_g"
    },
    "hidden_homeroom_d3_reveal_6_g": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
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
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "type": "free_talk",
        "maxTurns": 3,
        "next": "hidden_nurse_d3_check",
        "isRemote": false
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
        "affinityGuard": {"character":"Nurse","minAffinity":0,"fallback":"hidden_nurse_d3_low"},
        "next": "hidden_nurse_d3_1_b"
    },
    "hidden_nurse_d3_1_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_1_c"
    },
    "hidden_nurse_d3_1_c": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_1_d"
    },
    "hidden_nurse_d3_1_d": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_1_e"
    },
    "hidden_nurse_d3_1_e": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_2"
    },
    "hidden_nurse_d3_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "branches": [
            { "condition": "homeroom_day2", "next": "hidden_nurse_d3_2_b" },
            { "next": "hidden_nurse_d3_3" }
        ]
    },
    "hidden_nurse_d3_2_b": {
        "next": "hidden_nurse_d3_2_c",
        "routeBeforeRender": true
    },
    "hidden_nurse_d3_2_c": {
        "next": "hidden_nurse_d3_2_d",
        "routeBeforeRender": true
    },
    "hidden_nurse_d3_2_d": {
        "next": "hidden_nurse_d3_2_e",
        "routeBeforeRender": true
    },
    "hidden_nurse_d3_2_e": {
        "next": "hidden_nurse_d3_3",
        "routeBeforeRender": true
    },
    "hidden_nurse_d3_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_3_b"
    },
    "hidden_nurse_d3_3_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_3_c"
    },
    "hidden_nurse_d3_3_c": {
        "next": "hidden_nurse_d3_3_d",
        "routeBeforeRender": true
    },
    "hidden_nurse_d3_3_d": {
        "next": "hidden_nurse_d3_4",
        "routeBeforeRender": true
    },
    "hidden_nurse_d3_4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_b"
    },
    "hidden_nurse_d3_5_b": {
        "next": "hidden_nurse_d3_5_c",
        "routeBeforeRender": true
    },
    "hidden_nurse_d3_5_c": {
        "next": "hidden_nurse_d3_5_d",
        "routeBeforeRender": true
    },
    "hidden_nurse_d3_5_d": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_e"
    },
    "hidden_nurse_d3_5_e": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_f"
    },
    "hidden_nurse_d3_5_f": {
        "next": "hidden_nurse_d3_5_g",
        "routeBeforeRender": true
    },
    "hidden_nurse_d3_5_g": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_h"
    },
    "hidden_nurse_d3_5_h": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_i"
    },
    "hidden_nurse_d3_5_i": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_j"
    },
    "hidden_nurse_d3_5_j": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_k"
    },
    "hidden_nurse_d3_5_k": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_l"
    },
    "hidden_nurse_d3_5_l": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_m"
    },
    "hidden_nurse_d3_5_m": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_n"
    },
    "hidden_nurse_d3_5_n": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_o"
    },
    "hidden_nurse_d3_5_o": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_p"
    },
    "hidden_nurse_d3_5_p": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_5_q"
    },
    "hidden_nurse_d3_5_q": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_choice1"
    },
    "hidden_nurse_d3_choice1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            { "next": "hidden_nurse_d3_choice1_a", "stats": {"Nurse":{"affinity":3}} },
            { "next": "hidden_nurse_d3_choice1_b", "stats": {"Nurse":{"affinity":0}} },
            { "next": "hidden_nurse_d3_choice1_c", "stats": {"Nurse":{"affinity":-3}} }
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
    "hidden_nurse_d3_choice1_c": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_worried.png",
        "next": "hidden_nurse_d3_6"
    },
    "hidden_nurse_d3_6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_6_b"
    },
    "hidden_nurse_d3_6_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_6_c"
    },
    "hidden_nurse_d3_6_c": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_6_d"
    },
    "hidden_nurse_d3_6_d": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_6_e"
    },
    "hidden_nurse_d3_6_e": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_6_f"
    },
    "hidden_nurse_d3_6_f": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_7"
    },
    "hidden_nurse_d3_7": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_7_b"
    },
    "hidden_nurse_d3_7_b": {
        "next": "hidden_nurse_d3_8",
        "routeBeforeRender": true
    },
    "hidden_nurse_d3_8": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_8_b"
    },
    "hidden_nurse_d3_8_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_8_c"
    },
    "hidden_nurse_d3_8_c": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_8_d"
    },
    "hidden_nurse_d3_8_d": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_8_e"
    },
    "hidden_nurse_d3_8_e": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_8_f"
    },
    "hidden_nurse_d3_8_f": {
        "background": "assets/images/background/nurse_room.png",
        "character": null,
        "next": "hidden_nurse_d3_8_g"
    },
    "hidden_nurse_d3_8_g": {
        "background": "assets/images/background/nurse_room.png",
        "character": null,
        "next": "hidden_nurse_d3_8_h"
    },
    "hidden_nurse_d3_8_h": {
        "background": "assets/images/background/nurse_room.png",
        "character": null,
        "next": "hidden_nurse_d3_choice2"
    },
    "hidden_nurse_d3_choice2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            { "next": "hidden_nurse_d3_choice2_a", "stats": {"Nurse":{"affinity":9}} },
            { "next": "hidden_nurse_d3_choice2_b", "stats": {"Nurse":{"affinity":4}} },
            { "next": "hidden_nurse_d3_choice2_c", "stats": {"Nurse":{"affinity":-4}} }
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
    "hidden_nurse_d3_choice2_c": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_worried.png",
        "next": "hidden_nurse_d3_9"
    },
    "hidden_nurse_d3_9": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_9_b"
    },
    "hidden_nurse_d3_9_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_9_c"
    },
    "hidden_nurse_d3_9_c": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_9_d"
    },
    "hidden_nurse_d3_9_d": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_9_e"
    },
    "hidden_nurse_d3_9_e": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_9_f"
    },
    "hidden_nurse_d3_9_f": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d3_11"
    },
    "hidden_nurse_d3_11": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlags": ["nurse_day3","nurse_route_unlocked"],
        "next": "hidden_nurse_d3_freetalk"
    },
    "hidden_nurse_d3_freetalk": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "type": "free_talk",
        "maxTurns": 3,
        "next": "morning3_date_seo_1",
        "isRemote": false
    },
    "morning3_date_seo_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "affinityGuard": {"character":"Seoyeon","minAffinity":0,"fallback":"morning3_date_seo_low"},
        "next": "morning3_date_seo_choice"
    },
    "morning3_date_seo_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            { "next": "morning3_date_seo_accept", "stats": {"Seoyeon":{"affinity":4}}, "setFlags": ["accepted_seoyeon_date"] },
            { "next": "morning3_date_seo_decline", "stats": {"Seoyeon":{"affinity":-3}} },
            { "next": "morning3_date_seo_accept", "stats": {"Seoyeon":{"affinity":-4}} },
            { "next": "morning3_date_seo_accept", "stats": {"Seoyeon":{"affinity":-5}} }
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
        "affinityGuard": {"character":"Dain","minAffinity":0,"fallback":"morning3_date_dain_low"},
        "next": "morning3_date_dain_2"
    },
    "morning3_date_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning3_date_dain_choice"
    },
    "morning3_date_dain_choice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            { "next": "morning3_date_dain_accept", "stats": {"Dain":{"affinity":4}}, "setFlags": ["accepted_dain_date"] },
            { "next": "morning3_date_dain_decline", "stats": {"Dain":{"affinity":-3}} },
            { "next": "morning3_date_dain_accept", "stats": {"Dain":{"affinity":-4}} },
            { "next": "morning3_date_dain_accept", "stats": {"Dain":{"affinity":-5}} }
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
        "affinityGuard": {"character":"Yuna","minAffinity":0,"fallback":"morning3_date_yuna_low"},
        "next": "morning3_date_yuna_1_b"
    },
    "morning3_date_yuna_1_b": {
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
            { "next": "morning3_date_yuna_accept", "stats": {"Yuna":{"affinity":4}}, "setFlags": ["accepted_yuna_date"] },
            { "next": "morning3_date_yuna_decline", "stats": {"Yuna":{"affinity":-3}} },
            { "next": "morning3_date_yuna_accept", "stats": {"Yuna":{"affinity":-4}} },
            { "next": "morning3_date_yuna_accept", "stats": {"Yuna":{"affinity":-5}} }
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
        "next": "morning3_end_b"
    },
    "morning3_end_b": {
        "next": "lunch3_start",
        "routeBeforeRender": true
    },
    "hidden_homeroom_d3_low": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_nurse_d3_check"
    },
    "hidden_nurse_d3_low": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "morning3_date_seo_1"
    },
    "morning3_date_seo_low": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "clearFlags": ["accepted_seoyeon_date"],
        "setFlags": ["day3_seoyeon_date_withdrawn"],
        "next": "morning3_date_dain_1"
    },
    "morning3_date_dain_low": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "clearFlags": ["accepted_dain_date"],
        "setFlags": ["day3_dain_date_withdrawn"],
        "next": "morning3_date_yuna_1"
    },
    "morning3_date_yuna_low": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "clearFlags": ["accepted_yuna_date"],
        "setFlags": ["day3_yuna_date_withdrawn"],
        "next": "morning3_check_multiple"
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
