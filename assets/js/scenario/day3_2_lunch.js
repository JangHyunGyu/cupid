/**
 * ============================================================================
 * CUPID - day3_2_lunch
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[3]) SCENARIO[3] = {};

Object.assign(SCENARIO[3], {
    "lunch3_start": {
        "background": "assets/images/background/room_school.png",
        "bgm": "daily.mp3",
        "next": "lunch3_start_2"
    },
    "lunch3_start_2": {
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_start_2_ins"
    },
    "lunch3_meal_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch3_meal_2"
    },
    "lunch3_meal_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch3_meal_3"
    },
    "lunch3_meal_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch3_meal_4"
    },
    "lunch3_meal_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch3_meal_5"
    },
    "lunch3_meal_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch3_meal_6"
    },
    "lunch3_meal_6": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch3_meal_7"
    },
    "lunch3_meal_7": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch3_meal_7_ins"
    },
    "lunch3_meal_8": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "next": "lunch3_meal_9"
    },
    "lunch3_meal_9": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "next": "lunch3_meal_10"
    },
    "lunch3_meal_10": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "next": "lunch3_meal_10_ins"
    },
    "lunch3_meal_11": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "next": "lunch3_choice"
    },
    "lunch3_choice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "choices": [
            { "next": "lunch3_give_seo_1" },
            { "next": "lunch3_give_dain_1" },
            { "next": "lunch3_give_yuna_1" },
            { "next": "lunch3_share_1" }
        ]
    },
    "lunch3_give_seo_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "setFlags": ["lunch3_gave_seoyeon"],
        "stats": {"Seoyeon":{"affinity":5}},
        "next": "lunch3_seo_skin_check"
    },
    "lunch3_seo_skin_check": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [{"minAffinity":40,"next":"lunch3_seo_skin_1"},{"minAffinity":-100,"next":"lunch3_give_seo_2"}]
    },
    "lunch3_seo_skin_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "lunch3_seo_skin_2"
    },
    "lunch3_seo_skin_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "lunch3_seo_skin_3"
    },
    "lunch3_seo_skin_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "setFlags": ["day3_skinship_seoyeon"],
        "next": "lunch3_give_seo_2"
    },
    "lunch3_give_seo_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_pout.png",
        "stats": {"Dain":{"affinity":-3}},
        "branches": [
            { "condition": "day3_has_multiple_dates", "next": "lunch3_give_seo_3" },
            { "next": "lunch3_seo_witness_1" }
        ]
    },
    "lunch3_seo_witness_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "lunch3_seo_witness_choice"
    },
    "lunch3_seo_witness_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_sad.png",
        "choices": [
            { "next": "lunch3_seo_chase_dain_1", "stats": {"Seoyeon":{"affinity":-3},"Dain":{"affinity":2}} },
            { "next": "lunch3_seo_focus_1", "stats": {"Dain":{"affinity":-5}} }
        ]
    },
    "lunch3_seo_chase_dain_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch3_seo_chase_dain_2"
    },
    "lunch3_seo_chase_dain_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "lunch3_seo_chase_dain_2b"
    },
    "lunch3_seo_chase_dain_2b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "lunch3_give_seo_3"
    },
    "lunch3_seo_focus_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch3_seo_focus_2"
    },
    "lunch3_seo_focus_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch3_give_seo_3"
    },
    "lunch3_give_seo_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_sad.png",
        "stats": {"Yuna":{"affinity":-3}},
        "branches": [
            { "condition": "day3_has_multiple_dates", "next": "lunch3_expose_1" },
            { "next": "lunch3_end" }
        ]
    },
    "lunch3_give_dain_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "setFlags": ["lunch3_gave_dain"],
        "stats": {"Dain":{"affinity":7}},
        "next": "lunch3_dain_skin_check"
    },
    "lunch3_dain_skin_check": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "affinityChar": "Dain",
        "affinityBranches": [{"minAffinity":40,"next":"lunch3_dain_skin_1"},{"minAffinity":-100,"next":"lunch3_give_dain_2"}]
    },
    "lunch3_dain_skin_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "lunch3_dain_skin_2"
    },
    "lunch3_dain_skin_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "lunch3_dain_skin_3"
    },
    "lunch3_dain_skin_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_shy.png",
        "setFlags": ["day3_skinship_dain"],
        "next": "lunch3_give_dain_2"
    },
    "lunch3_give_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "stats": {"Seoyeon":{"affinity":-3}},
        "next": "lunch3_dain_witness_1"
    },
    "lunch3_dain_witness_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "lunch3_dain_witness_2"
    },
    "lunch3_dain_witness_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "lunch3_dain_witness_2b"
    },
    "lunch3_dain_witness_2b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "lunch3_give_dain_3"
    },
    "lunch3_give_dain_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_sad.png",
        "stats": {"Yuna":{"affinity":-3}},
        "branches": [
            { "condition": "day3_has_multiple_dates", "next": "lunch3_expose_1" },
            { "next": "lunch3_end" }
        ]
    },
    "lunch3_give_yuna_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "setFlags": ["lunch3_gave_yuna"],
        "stats": {"Yuna":{"affinity":7}},
        "next": "lunch3_yuna_skin_check"
    },
    "lunch3_yuna_skin_check": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "affinityChar": "Yuna",
        "affinityBranches": [{"minAffinity":40,"next":"lunch3_yuna_skin_1"},{"minAffinity":-100,"next":"lunch3_give_yuna_2"}]
    },
    "lunch3_yuna_skin_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "lunch3_yuna_skin_2"
    },
    "lunch3_yuna_skin_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "lunch3_yuna_skin_3"
    },
    "lunch3_yuna_skin_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "setFlags": ["day3_skinship_yuna"],
        "next": "lunch3_give_yuna_2"
    },
    "lunch3_give_yuna_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "stats": {"Seoyeon":{"affinity":-3}},
        "next": "lunch3_yuna_witness_1"
    },
    "lunch3_yuna_witness_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch3_yuna_witness_2"
    },
    "lunch3_yuna_witness_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch3_give_yuna_3"
    },
    "lunch3_give_yuna_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_pout.png",
        "stats": {"Dain":{"affinity":-3}},
        "branches": [
            { "condition": "day3_has_multiple_dates", "next": "lunch3_expose_1" },
            { "next": "lunch3_end" }
        ]
    },
    "lunch3_share_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "branches": [
            { "condition": "day3_has_multiple_dates", "next": "lunch3_harem_1" },
            { "next": "lunch3_end" }
        ]
    },
    "lunch3_harem_1": {
        "background": "assets/images/background/room_school.png",
        "setFlags": ["ending_harem"],
        "next": "lunch3_end"
    },
    "lunch3_expose_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "setFlags": ["day3_caught_multiple_dates"],
        "next": "lunch3_expose_2"
    },
    "lunch3_expose_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch3_expose_3"
    },
    "lunch3_expose_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch3_expose_3_ins"
    },
    "lunch3_expose_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch3_expose_5"
    },
    "lunch3_expose_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "lunch3_expose_6"
    },
    "lunch3_expose_6": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "lunch3_expose_7"
    },
    "lunch3_expose_7": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "lunch3_expose_7_ins"
    },
    "lunch3_expose_8": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "lunch3_expose_9"
    },
    "lunch3_expose_9": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch3_expose_10"
    },
    "lunch3_expose_10": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch3_expose_11"
    },
    "lunch3_expose_11": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "lunch3_expose_12"
    },
    "lunch3_expose_12": {
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_expose_13"
    },
    "lunch3_expose_13": {
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_expose_14"
    },
    "lunch3_expose_14": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "lunch3_expose_15"
    },
    "lunch3_expose_15": {
        "background": "assets/images/background/room_school.png",
        "next": "lunch3_expose_choice"
    },
    "lunch3_expose_choice": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "choices": [
            { "next": "lunch3_expose_honest_1", "stats": {"Seoyeon":{"affinity":-5},"Yuna":{"affinity":-5},"Dain":{"affinity":-5}} },
            { "next": "lunch3_expose_excuse_1", "stats": {"Seoyeon":{"affinity":-8},"Yuna":{"affinity":-8},"Dain":{"affinity":-8}} },
            { "next": "lunch3_expose_run_1", "stats": {"Seoyeon":{"affinity":-10},"Yuna":{"affinity":-10},"Dain":{"affinity":-10}} }
        ]
    },
    "lunch3_expose_honest_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "lunch3_expose_honest_2"
    },
    "lunch3_expose_honest_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "lunch3_expose_honest_3"
    },
    "lunch3_expose_honest_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "lunch3_expose_honest_4"
    },
    "lunch3_expose_honest_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "lunch3_expose_honest_4_ins"
    },
    "lunch3_expose_honest_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "lunch3_expose_honest_6"
    },
    "lunch3_expose_honest_6": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "lunch3_expose_honest_7"
    },
    "lunch3_expose_honest_7": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_sad.png",
        "setFlags": ["day3_dain_no_exclamation"],
        "next": "lunch3_end"
    },
    "lunch3_expose_excuse_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "lunch3_expose_excuse_2"
    },
    "lunch3_expose_excuse_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "lunch3_expose_excuse_2_ins"
    },
    "lunch3_expose_excuse_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "lunch3_expose_excuse_4"
    },
    "lunch3_expose_excuse_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_sad.png",
        "setFlags": ["day3_dain_no_exclamation"],
        "next": "lunch3_end"
    },
    "lunch3_expose_run_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "setFlags": ["day3_lunch_escaped"],
        "next": "lunch3_expose_run_2"
    },
    "lunch3_expose_run_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "lunch3_expose_run_2_ins"
    },
    "lunch3_end": {
        "background": "assets/images/background/room_school.png",
        "next": "after3_start"
    },
    "lunch3_start_2_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "lunch3_meal_1"
    },
    "lunch3_meal_7_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch3_meal_8"
    },
    "lunch3_meal_10_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "next": "lunch3_meal_10_ins2"
    },
    "lunch3_meal_10_ins2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "branches": [
            { "condition": "route_seoyeon", "next": "lunch3_meal_10_ins3" },
            { "condition": "route_dain", "next": "lunch3_meal_10_ins4" },
            { "condition": "route_yuna", "next": "lunch3_meal_10_ins5" },
            { "next": "lunch3_meal_11" }
        ]
    },
    "lunch3_meal_10_ins3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch3_meal_11"
    },
    "lunch3_meal_10_ins4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch3_meal_11"
    },
    "lunch3_meal_10_ins5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "lunch3_meal_11"
    },
    "lunch3_expose_3_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "lunch3_expose_4"
    },
    "lunch3_expose_7_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "lunch3_expose_8"
    },
    "lunch3_expose_honest_4_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "lunch3_expose_honest_5"
    },
    "lunch3_expose_excuse_2_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "lunch3_expose_excuse_3"
    },
    "lunch3_expose_run_2_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "lunch3_end"
    }
});
