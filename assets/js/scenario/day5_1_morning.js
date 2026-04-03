/**
 * ============================================================================
 * CUPID - day5_1_morning
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

Object.assign(SCENARIO[5], {
    "morning5_start": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "bgm": "morning.mp3",
        "next": "morning5_start_ins"
    },
    "morning5_start_ins": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning5_start_2"
    },
    "morning5_start_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning5_start_2_ins"
    },
    "morning5_start_2_ins": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning5_mood_check"
    },
    "morning5_mood_check": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "affinityChar": "selectByHighestAffinity",
        "affinityBranches": [{"minAffinity":80,"next":"morning5_mood_high"},{"minAffinity":50,"next":"morning5_mood_mid"},{"minAffinity":-100,"next":"morning5_mood_low"}],
        "next": "morning5_mood_low"
    },
    "morning5_mood_high": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning5_seo_note_1"
    },
    "morning5_mood_mid": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning5_seo_note_1"
    },
    "morning5_mood_low": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning5_seo_note_1"
    },
    "morning5_seo_note_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning5_seo_note_1_ins"
    },
    "morning5_seo_note_1_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "morning5_seo_note_1_ins2"
    },
    "morning5_seo_note_1_ins2": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "morning5_seo_note_1_ins3"
    },
    "morning5_seo_note_1_ins3": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "morning5_seo_note_1_ins4"
    },
    "morning5_seo_note_1_ins4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning5_yuna_story_1"
    },
    "morning5_yuna_story_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning5_return_class"
    },
    "morning5_return_class": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning5_dain_1"
    },
    "morning5_dain_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning5_dain_1_ins"
    },
    "morning5_dain_1_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning5_dain_2"
    },
    "morning5_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "hidden_homeroom_d5_check"
    },
    "hidden_homeroom_d5_check": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_normal.png",
        "branches": [
            { "condition": "homeroom_day4", "next": "hidden_homeroom_d5_1" },
            { "next": "hidden_nurse_d5_check" }
        ]
    },
    "hidden_homeroom_d5_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_1_ins"
    },
    "hidden_homeroom_d5_1_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_1_ins2"
    },
    "hidden_homeroom_d5_1_ins2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_1_ins3"
    },
    "hidden_homeroom_d5_1_ins3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_1_ins4"
    },
    "hidden_homeroom_d5_1_ins4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_2"
    },
    "hidden_homeroom_d5_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_3"
    },
    "hidden_homeroom_d5_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_4"
    },
    "hidden_homeroom_d5_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_5"
    },
    "hidden_homeroom_d5_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_choice"
    },
    "hidden_homeroom_d5_choice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "hidden_homeroom_d5_choice_a", "stats": {"Teacher":{"affinity":14}} },
            { "next": "hidden_homeroom_d5_choice_b", "stats": {"Teacher":{"affinity":7}} }
        ]
    },
    "hidden_homeroom_d5_choice_a": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d5_6"
    },
    "hidden_homeroom_d5_choice_b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d5_choice_b_ins"
    },
    "hidden_homeroom_d5_choice_b_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d5_choice_b_ins2"
    },
    "hidden_homeroom_d5_choice_b_ins2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d5_choice_b_ins3"
    },
    "hidden_homeroom_d5_choice_b_ins3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d5_6"
    },
    "hidden_homeroom_d5_6": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins"
    },
    "hidden_homeroom_d5_6_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins2"
    },
    "hidden_homeroom_d5_6_ins2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins3"
    },
    "hidden_homeroom_d5_6_ins3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins4"
    },
    "hidden_homeroom_d5_6_ins4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins5"
    },
    "hidden_homeroom_d5_6_ins5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins6"
    },
    "hidden_homeroom_d5_6_ins6": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins7"
    },
    "hidden_homeroom_d5_6_ins7": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins8"
    },
    "hidden_homeroom_d5_6_ins8": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins9"
    },
    "hidden_homeroom_d5_6_ins9": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins10"
    },
    "hidden_homeroom_d5_6_ins10": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins11"
    },
    "hidden_homeroom_d5_6_ins11": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins12"
    },
    "hidden_homeroom_d5_6_ins12": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins13"
    },
    "hidden_homeroom_d5_6_ins13": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins14"
    },
    "hidden_homeroom_d5_6_ins14": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins15"
    },
    "hidden_homeroom_d5_6_ins15": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins16"
    },
    "hidden_homeroom_d5_6_ins16": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins17"
    },
    "hidden_homeroom_d5_6_ins17": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins18"
    },
    "hidden_homeroom_d5_6_ins18": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins19"
    },
    "hidden_homeroom_d5_6_ins19": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_ins20"
    },
    "hidden_homeroom_d5_6_ins20": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_7"
    },
    "hidden_homeroom_d5_7": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_7_ins"
    },
    "hidden_homeroom_d5_7_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_7_ins2"
    },
    "hidden_homeroom_d5_7_ins2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_8"
    },
    "hidden_homeroom_d5_8": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlags": ["homeroom_day5"],
        "stats": {"Teacher":{"affinity":5}},
        "next": "hidden_homeroom_d5_freetalk"
    },
    "hidden_homeroom_d5_freetalk": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_nurse_d5_check"
    },
    "hidden_nurse_d5_check": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "branches": [
            { "condition": "nurse_day4", "next": "hidden_nurse_d5_1" },
            { "next": "morning5_end" }
        ]
    },
    "hidden_nurse_d5_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_1_ins"
    },
    "hidden_nurse_d5_1_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_1_ins2"
    },
    "hidden_nurse_d5_1_ins2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_1_ins3"
    },
    "hidden_nurse_d5_1_ins3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_1_ins4"
    },
    "hidden_nurse_d5_1_ins4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_1_ins5"
    },
    "hidden_nurse_d5_1_ins5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_2"
    },
    "hidden_nurse_d5_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_2_ins"
    },
    "hidden_nurse_d5_2_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_2_ins2"
    },
    "hidden_nurse_d5_2_ins2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_2_ins3"
    },
    "hidden_nurse_d5_2_ins3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_3"
    },
    "hidden_nurse_d5_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_3_ins"
    },
    "hidden_nurse_d5_3_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_3_ins2"
    },
    "hidden_nurse_d5_3_ins2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_3_ins3"
    },
    "hidden_nurse_d5_3_ins3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_3_ins4"
    },
    "hidden_nurse_d5_3_ins4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_3_ins5"
    },
    "hidden_nurse_d5_3_ins5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_3_ins6"
    },
    "hidden_nurse_d5_3_ins6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_3_ins7"
    },
    "hidden_nurse_d5_3_ins7": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_3_ins8"
    },
    "hidden_nurse_d5_3_ins8": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_4"
    },
    "hidden_nurse_d5_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_4_ins"
    },
    "hidden_nurse_d5_4_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_4_ins2"
    },
    "hidden_nurse_d5_4_ins2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_4_ins3"
    },
    "hidden_nurse_d5_4_ins3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_5"
    },
    "hidden_nurse_d5_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_choice"
    },
    "hidden_nurse_d5_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            { "next": "hidden_nurse_d5_choice_a", "stats": {"Nurse":{"affinity":14}} },
            { "next": "hidden_nurse_d5_choice_b", "stats": {"Nurse":{"affinity":7}} }
        ]
    },
    "hidden_nurse_d5_choice_a": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "hidden_nurse_d5_choice_a_ins"
    },
    "hidden_nurse_d5_choice_a_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_6"
    },
    "hidden_nurse_d5_choice_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_choice_b_ins2"
    },
    "hidden_nurse_d5_choice_b_ins2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_choice_b_ins3"
    },
    "hidden_nurse_d5_choice_b_ins3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_choice_b_ins4"
    },
    "hidden_nurse_d5_choice_b_ins4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_choice_b_ins5"
    },
    "hidden_nurse_d5_choice_b_ins5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_choice_b_ins6"
    },
    "hidden_nurse_d5_choice_b_ins6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_choice_b_ins7"
    },
    "hidden_nurse_d5_choice_b_ins7": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_choice_b_ins8"
    },
    "hidden_nurse_d5_choice_b_ins8": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_6"
    },
    "hidden_nurse_d5_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_6_ins"
    },
    "hidden_nurse_d5_6_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_6_ins2"
    },
    "hidden_nurse_d5_6_ins2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_6_ins3"
    },
    "hidden_nurse_d5_6_ins3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_6_ins4"
    },
    "hidden_nurse_d5_6_ins4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_7"
    },
    "hidden_nurse_d5_7": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlags": ["nurse_day5"],
        "stats": {"Nurse":{"affinity":7}},
        "next": "hidden_nurse_d5_freetalk"
    },
    "hidden_nurse_d5_freetalk": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "morning5_end"
    },
    "morning5_end": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            { "condition": "route_dain", "next": "tour_dain_1_check" },
            { "condition": "route_yuna", "next": "tour_yuna_1_check" },
            { "condition": "route_seoyeon", "next": "tour_seo_1" },
            { "next": "tour_seo_1" }
        ]
    }
});
