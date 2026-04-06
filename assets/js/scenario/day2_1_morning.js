/**
 * ============================================================================
 * CUPID - day2_1_morning
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[2]) SCENARIO[2] = {};

(() => {
    const scenes = {
    "morning2_start": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "bgm": "daily.mp3",
        "next": "morning2_start_2"
    },
    "morning2_start_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "affinityBranches": [{"char":"Seoyeon","minAffinity":10,"next":"morning2_greet_seo_1"},{"char":"Dain","minAffinity":10,"next":"morning2_greet_dain_1"},{"char":"Yuna","minAffinity":10,"next":"morning2_greet_yuna_1"}],
        "next": "morning2_dain_1"
    },
    "morning2_greet_seo_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_greet_seo_2"
    },
    "morning2_greet_seo_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_greet_seo_others_2"
    },
    "morning2_greet_seo_others_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_note_1"
    },
    "morning2_greet_dain_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning2_greet_dain_2"
    },
    "morning2_greet_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning2_greet_dain_others"
    },
    "morning2_greet_dain_others": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_greet_dain_others_seo"
    },
    "morning2_greet_dain_others_seo": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_greet_dain_others_yuna"
    },
    "morning2_greet_dain_others_yuna": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "next": "morning2_greet_dain_others_2"
    },
    "morning2_greet_dain_others_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning2_note_1"
    },
    "morning2_greet_yuna_1": {
        "background": "assets/images/background/room_school.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "morning2_greet_yuna_2"
    },
    "morning2_greet_yuna_2": {
        "background": "assets/images/background/room_school.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "morning2_greet_yuna_others"
    },
    "morning2_greet_yuna_others": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_greet_yuna_others_seo"
    },
    "morning2_greet_yuna_others_seo": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_greet_yuna_others_dain"
    },
    "morning2_greet_yuna_others_dain": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning2_greet_yuna_others_2"
    },
    "morning2_greet_yuna_others_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning2_seo_4"
    },
    "morning2_dain_1": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning2_dain_2"
    },
    "morning2_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning2_dain_3"
    },
    "morning2_dain_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning2_dain_4"
    },
    "morning2_dain_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning2_dain_5"
    },
    "morning2_dain_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning2_dain_6"
    },
    "morning2_dain_6": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning2_note_1"
    },
    "morning2_note_1": {
        "background": "assets/images/background/room_school.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "morning2_note_2"
    },
    "morning2_note_2": {
        "background": "assets/images/background/room_school.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "morning2_note_3"
    },
    "morning2_note_3": {
        "background": "assets/images/background/room_school.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "morning2_seo_1"
    },
    "morning2_seo_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_seo_4"
    },
    "morning2_seo_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_seo_5"
    },
    "morning2_seo_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_minsu_1"
    },
    "morning2_minsu_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "morning2_minsu_1b"
    },
    "morning2_minsu_1b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "morning2_minsu_3"
    },
    "morning2_minsu_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "morning2_dain_claim_1"
    },
    "morning2_dain_claim_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "morning2_dain_claim_2"
    },
    "morning2_dain_claim_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "morning2_dain_claim_3"
    },
    "morning2_dain_claim_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning2_dain_claim_4"
    },
    "morning2_dain_claim_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning2_dain_claim_5"
    },
    "morning2_dain_claim_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning2_dain_claim_6"
    },
    "morning2_dain_claim_6": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "branches": [
            { "condition": "homeroom_day1", "next": "hidden_homeroom_d2_1" },
            { "next": "morning2_break_transition" }
        ]
    },
    "morning2_break_transition": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "branches": [
            { "condition": "homeroom_day1", "next": "morning2_break_transition_ins" },
            { "next": "morning2_break_1" }
        ]
    },
    "morning2_break_transition_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "morning2_break_1"
    },
    "morning2_break_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "morning2_seo_dust_1"
    },
    "hidden_homeroom_d2_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_1_ins"
    },
    "hidden_homeroom_d2_1_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_1_ins2"
    },
    "hidden_homeroom_d2_1_ins2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_2"
    },
    "hidden_homeroom_d2_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_2_ins"
    },
    "hidden_homeroom_d2_2_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_3"
    },
    "hidden_homeroom_d2_3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_3_ins"
    },
    "hidden_homeroom_d2_3_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_3_ins2"
    },
    "hidden_homeroom_d2_3_ins2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_3_ins3"
    },
    "hidden_homeroom_d2_3_ins3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_3_ins4"
    },
    "hidden_homeroom_d2_3_ins4": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_3_ins5"
    },
    "hidden_homeroom_d2_3_ins5": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_3_ins6"
    },
    "hidden_homeroom_d2_3_ins6": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_choice1"
    },
    "hidden_homeroom_d2_choice1": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "hidden_homeroom_d2_choice1_a", "stats": {"Teacher":{"affinity":10}} },
            { "next": "hidden_homeroom_d2_choice1_b", "stats": {"Teacher":{"affinity":3}} }
        ]
    },
    "hidden_homeroom_d2_choice1_a": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_5"
    },
    "hidden_homeroom_d2_choice1_b": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_5"
    },
    "hidden_homeroom_d2_5": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_6"
    },
    "hidden_homeroom_d2_6": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_7"
    },
    "hidden_homeroom_d2_7": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_7_ins"
    },
    "hidden_homeroom_d2_7_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_8"
    },
    "hidden_homeroom_d2_8": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_8_ins"
    },
    "hidden_homeroom_d2_8_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_8_ins2"
    },
    "hidden_homeroom_d2_8_ins2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_8_ins3"
    },
    "hidden_homeroom_d2_8_ins3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_8_ins4"
    },
    "hidden_homeroom_d2_8_ins4": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_8_ins5"
    },
    "hidden_homeroom_d2_8_ins5": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_9"
    },
    "hidden_homeroom_d2_9": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_10"
    },
    "hidden_homeroom_d2_10": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_choice2"
    },
    "hidden_homeroom_d2_choice2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "hidden_homeroom_d2_choice2_a", "stats": {"Teacher":{"affinity":7}} },
            { "next": "hidden_homeroom_d2_choice2_b", "stats": {"Teacher":{"affinity":0}} }
        ]
    },
    "hidden_homeroom_d2_choice2_a": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d2_11"
    },
    "hidden_homeroom_d2_choice2_b": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_11"
    },
    "hidden_homeroom_d2_11": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_11_ins"
    },
    "hidden_homeroom_d2_11_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_12"
    },
    "hidden_homeroom_d2_12": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlags": ["homeroom_day2","noticed_manuscript"],
        "next": "morning2_seo_dust_1"
    },
    "morning2_seo_dust_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_seo_dust_2"
    },
    "morning2_seo_dust_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_seo_dust_3"
    },
    "morning2_seo_dust_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_seo_dust_4"
    },
    "morning2_seo_dust_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_seo_dust_5"
    },
    "morning2_seo_dust_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_seo_dust_6"
    },
    "morning2_seo_dust_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_dain_react_1"
    },
    "morning2_dain_react_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_dain_react_2"
    },
    "morning2_dain_react_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "morning2_dain_react_3"
    },
    "morning2_dain_react_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "morning2_dain_react_4"
    },
    "morning2_dain_react_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "morning2_dain_react_5"
    },
    "morning2_dain_react_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "morning2_dain_react_6"
    },
    "morning2_dain_react_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "morning2_haeun_1"
    },
    "morning2_haeun_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "morning2_haeun_2"
    },
    "morning2_haeun_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "morning2_haeun_3"
    },
    "morning2_haeun_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "morning2_haeun_4"
    },
    "morning2_haeun_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "morning2_haeun_5"
    },
    "morning2_haeun_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "morning2_haeun_6"
    },
    "morning2_haeun_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "morning2_haeun_6_ins"
    },
    "morning2_haeun_6_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "morning2_haeun_6b"
    },
    "morning2_haeun_6b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "morning2_haeun_6c"
    },
    "morning2_haeun_6c": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "morning2_end"
    },
    "morning2_end": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "lunch2_start"
    }
    };
    for (const scene of Object.values(scenes)) {
        if (scene && typeof scene === 'object') {
            Object.defineProperty(scene, "__sourceFile", {
                value: "day2_1_morning",
                enumerable: false
            });
        }
    }
    Object.assign(SCENARIO[2], scenes);
})();
