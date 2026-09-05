/**
 * ============================================================================
 * CUPID - day1_3_afterschool
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[1]) SCENARIO[1] = {};

(() => {
    const scenes = {
    "after_start": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "bgm": "daily.mp3",
        "next": "after_kakao_1"
    },
    "after_kakao_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after_kakao_3"
    },
    "after_kakao_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after_kakao_5"
    },
    "after_kakao_5": {
        "next": "after_kakao_end",
        "routeBeforeRender": true
    },
    "after_kakao_end": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "branches": [
            { "condition": "chose_seoyeon_lunch", "next": "after1_jealousy_seo_1" },
            { "condition": "chose_dain_lunch", "next": "after1_jealousy_dain_1" },
            { "condition": "chose_yuna_lunch", "next": "after1_jealousy_yuna_1" },
            { "next": "after1_pre_miss" }
        ]
    },
    "after1_jealousy_seo_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after1_jealousy_seo_2"
    },
    "after1_jealousy_seo_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after1_jealousy_seo_3"
    },
    "after1_jealousy_seo_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "after1_jealousy_seo_choice"
    },
    "after1_jealousy_seo_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_pout.png",
        "choices": [
            { "next": "after1_jealousy_seo_honest", "stats": {"Dain":{"affinity":-2}}, "setFlags": ["day1_honest_to_dain"] },
            { "next": "after1_jealousy_seo_lie", "setFlags": ["day1_lied_to_dain"] },
            { "next": "after1_jealousy_seo_honest", "stats": {"Dain":{"affinity":-3}} },
            { "next": "after1_jealousy_seo_honest", "stats": {"Dain":{"affinity":-4}} }
        ]
    },
    "after1_jealousy_seo_honest": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "after1_jealousy_seo_honest_2"
    },
    "after1_jealousy_seo_honest_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after1_jealousy_seo_yuna"
    },
    "after1_jealousy_seo_lie": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after1_jealousy_seo_lie_2"
    },
    "after1_jealousy_seo_lie_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after1_jealousy_seo_yuna"
    },
    "after1_jealousy_seo_yuna": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after1_pre_miss"
    },
    "after1_jealousy_dain_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after1_jealousy_dain_2"
    },
    "after1_jealousy_dain_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "after1_pre_miss"
    },
    "after1_jealousy_yuna_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after1_jealousy_yuna_2"
    },
    "after1_jealousy_yuna_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after1_pre_miss"
    },
    "after1_pre_miss": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "branches": [
            { "condition": "met_dain", "next": "after_dain_skip" },
            { "next": "after_miss_dain_1" }
        ]
    },
    "after_dain_skip": {
        "background": "assets/images/background/school_hallway.png",
        "branches": [
            { "condition": "met_yuna", "next": "after_yuna_skip" },
            { "next": "after_miss_yuna_1" }
        ]
    },
    "after_miss_dain_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "excludeCondition": "met_dain",
        "next": "after_miss_dain_2"
    },
    "after_miss_dain_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "excludeCondition": "met_dain",
        "next": "after_miss_dain_3"
    },
    "after_miss_dain_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "excludeCondition": "met_dain",
        "next": "after_miss_dain_4"
    },
    "after_miss_dain_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_laugh.png",
        "excludeCondition": "met_dain",
        "next": "after_miss_dain_5"
    },
    "after_miss_dain_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_laugh.png",
        "excludeCondition": "met_dain",
        "next": "after_miss_dain_6"
    },
    "after_miss_dain_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_laugh.png",
        "excludeCondition": "met_dain",
        "next": "after_miss_dain_6_b"
    },
    "after_miss_dain_6_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after_miss_dain_7"
    },
    "after_miss_dain_7": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_laugh.png",
        "setFlags": ["met_dain"],
        "branches": [
            { "condition": "met_yuna", "next": "after_yuna_skip" },
            { "next": "after_miss_yuna_1" }
        ]
    },
    "after_yuna_skip": {
        "background": "assets/images/background/school_hallway.png",
        "branches": [
            { "condition": "ate_lunch_seoyeon", "next": "after_end" },
            { "condition": "chose_seoyeon_lunch", "next": "after_end" },
            { "next": "after_miss_seoyeon_1" }
        ]
    },
    "after_miss_yuna_1": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "excludeCondition": "met_yuna",
        "next": "after_miss_yuna_1_b"
    },
    "after_miss_yuna_1_b": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after_miss_yuna_1_c"
    },
    "after_miss_yuna_1_c": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after_miss_yuna_2"
    },
    "after_miss_yuna_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "excludeCondition": "met_yuna",
        "next": "after_miss_yuna_3"
    },
    "after_miss_yuna_3": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "excludeCondition": "met_yuna",
        "next": "after_miss_yuna_3_b"
    },
    "after_miss_yuna_3_b": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after_miss_yuna_4"
    },
    "after_miss_yuna_4": {
        "setFlags": [
            "met_yuna"
        ],
        "branches": [
            {
                "condition": "ate_lunch_seoyeon",
                "next": "after_end"
            },
            {
                "condition": "chose_seoyeon_lunch",
                "next": "after_end"
            },
            {
                "next": "after_miss_seoyeon_1"
            }
        ],
        "routeBeforeRender": false
    },
    "after_miss_seoyeon_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "excludeCondition": "ate_lunch_seoyeon",
        "next": "after_miss_seoyeon_2"
    },
    "after_miss_seoyeon_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "excludeCondition": "ate_lunch_seoyeon",
        "next": "after_miss_seoyeon_3"
    },
    "after_miss_seoyeon_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "excludeCondition": "ate_lunch_seoyeon",
        "next": "after_miss_seoyeon_4"
    },
    "after_miss_seoyeon_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "excludeCondition": "ate_lunch_seoyeon",
        "next": "after_miss_seoyeon_5"
    },
    "after_miss_seoyeon_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "excludeCondition": "ate_lunch_seoyeon",
        "next": "after_miss_seoyeon_6"
    },
    "after_miss_seoyeon_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "excludeCondition": "ate_lunch_seoyeon",
        "next": "after_miss_seoyeon_7"
    },
    "after_miss_seoyeon_7": {
        "background": "assets/images/background/school_hallway.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/seyoun_normal.png",
        "excludeCondition": "ate_lunch_seoyeon",
        "next": "after_miss_seoyeon_8"
    },
    "after_miss_seoyeon_8": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "excludeCondition": "ate_lunch_seoyeon",
        "next": "after_end"
    },
    "after_end": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "choices": [
            { "next": "after_hidden_homeroom_1", "setFlags": ["homeroom_day1_choice"] },
            { "next": "after_hidden_nurse_intro", "setFlags": ["nurse_day1_choice"] },
            { "next": "night_start", "setFlags": ["skip_hidden_day1"] }
        ]
    },
    "after_hidden_homeroom_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after_hidden_homeroom_2"
    },
    "after_hidden_homeroom_2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_hidden_homeroom_3"
    },
    "after_hidden_homeroom_3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_hidden_homeroom_3_b"
    },
    "after_hidden_homeroom_3_b": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_hidden_homeroom_3_c"
    },
    "after_hidden_homeroom_3_c": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_hidden_homeroom_4"
    },
    "after_hidden_homeroom_4": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_hidden_homeroom_choice"
    },
    "after_hidden_homeroom_choice": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "after_homeroom_ok", "stats": {"Teacher":{"affinity":0}} },
            { "next": "after_homeroom_honest_1", "stats": {"Teacher":{"affinity":6}} },
            { "next": "after_homeroom_choice_trap", "stats": {"Teacher":{"affinity":-2}} }
        ]
    },
    "after_homeroom_choice_trap": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_worried.png",
        "next": "after_homeroom_ok_6"
    },
    "after_homeroom_ok": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_ok_b"
    },
    "after_homeroom_ok_b": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_ok_3"
    },
    "after_homeroom_ok_3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_ok_4"
    },
    "after_homeroom_ok_4": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_ok_5"
    },
    "after_homeroom_ok_5": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_ok_6"
    },
    "after_homeroom_ok_6": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlags": ["homeroom_day1"],
        "next": "night_start"
    },
    "after_homeroom_honest_1": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_honest_2"
    },
    "after_homeroom_honest_2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_honest_3"
    },
    "after_homeroom_honest_3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_honest_3_b"
    },
    "after_homeroom_honest_3_b": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_honest_4"
    },
    "after_homeroom_honest_4": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_honest_5"
    },
    "after_homeroom_honest_5": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_honest_6"
    },
    "after_homeroom_honest_6": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_honest_6_b"
    },
    "after_homeroom_honest_6_b": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_honest_choice2"
    },
    "after_homeroom_honest_choice2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "after_homeroom_honest_choice2a", "stats": {"Teacher":{"affinity":8}} },
            { "next": "after_homeroom_honest_choice2b", "stats": {"Teacher":{"affinity":-2}} },
            { "next": "after_homeroom_honest_choice2b", "stats": {"Teacher":{"affinity":-4}} },
            { "next": "after_homeroom_honest_choice2b", "stats": {"Teacher":{"affinity":-5}} }
        ]
    },
    "after_homeroom_honest_choice2a": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "after_homeroom_honest_choice2a_b"
    },
    "after_homeroom_honest_choice2a_b": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "after_homeroom_honest_7"
    },
    "after_homeroom_honest_choice2b": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "after_homeroom_honest_choice2b_b"
    },
    "after_homeroom_honest_choice2b_b": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "after_homeroom_honest_7"
    },
    "after_homeroom_honest_7": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_honest_8"
    },
    "after_homeroom_honest_8": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_honest_9"
    },
    "after_homeroom_honest_9": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_honest_9_b"
    },
    "after_homeroom_honest_9_b": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_honest_10"
    },
    "after_homeroom_honest_10": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlags": ["homeroom_day1"],
        "next": "after_homeroom_freetalk"
    },
    "after_homeroom_freetalk": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_normal.png",
        "type": "free_talk",
        "maxTurns": 3,
        "next": "night_start",
        "isRemote": false
    },
    "after_hidden_nurse_intro": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after_hidden_nurse_choice"
    },
    "after_hidden_nurse_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "choices": [
            { "next": "after_hidden_nurse_intro_b" },
            { "next": "after_nurse_skip", "stats": {"Nurse":{"affinity":0}} },
            { "next": "after_hidden_nurse_intro_b", "stats": {"Nurse":{"affinity":-3}} },
            { "next": "after_hidden_nurse_intro_b", "stats": {"Nurse":{"affinity":-4}} }
        ]
    },
    "after_hidden_nurse_intro_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after_nurse_enter_1"
    },
    "after_nurse_enter_1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_2"
    },
    "after_nurse_enter_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "stats": {"Nurse":{"affinity":6}},
        "next": "after_nurse_enter_2_b"
    },
    "after_nurse_enter_2_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_3"
    },
    "after_nurse_enter_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_4"
    },
    "after_nurse_enter_4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_4_b"
    },
    "after_nurse_enter_4_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_4_c"
    },
    "after_nurse_enter_4_c": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_4_d"
    },
    "after_nurse_enter_4_d": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_5"
    },
    "after_nurse_enter_5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_6"
    },
    "after_nurse_enter_6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_6_b"
    },
    "after_nurse_enter_6_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_7"
    },
    "after_nurse_enter_7": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_7_b"
    },
    "after_nurse_enter_7_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_7_c"
    },
    "after_nurse_enter_7_c": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_7_d"
    },
    "after_nurse_enter_7_d": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_choice"
    },
    "after_nurse_enter_choice": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            { "next": "after_nurse_enter_choice_a", "stats": {"Nurse":{"affinity":8}}, "setFlags": ["nurse_choice_a"] },
            { "next": "after_nurse_enter_choice_b", "stats": {"Nurse":{"affinity":2}}, "setFlags": ["nurse_choice_b"] },
            { "next": "after_nurse_enter_trap", "stats": {"Nurse":{"affinity":-3}}, "setFlags": ["nurse_choice_trap"] }
        ]
    },
    "after_nurse_enter_choice_a": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_8"
    },
    "after_nurse_enter_choice_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_8"
    },
    "after_nurse_enter_trap": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_8"
    },
    "after_nurse_enter_8": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_8_b"
    },
    "after_nurse_enter_8_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_8_c"
    },
    "after_nurse_enter_8_c": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_8_d"
    },
    "after_nurse_enter_8_d": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_9_b"
    },
    "after_nurse_enter_9_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_9_c"
    },
    "after_nurse_enter_9_c": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_9_d"
    },
    "after_nurse_enter_9_d": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_9_e"
    },
    "after_nurse_enter_9_e": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_10"
    },
    "after_nurse_enter_10": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_10_b"
    },
    "after_nurse_enter_10_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_10_c"
    },
    "after_nurse_enter_10_c": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11"
    },
    "after_nurse_enter_11": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11_b"
    },
    "after_nurse_enter_11_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_angry.png",
        "next": "after_nurse_enter_11_c"
    },
    "after_nurse_enter_11_c": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11_d"
    },
    "after_nurse_enter_11_d": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_angry.png",
        "next": "after_nurse_enter_11_e"
    },
    "after_nurse_enter_11_e": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "branches": [
            { "condition": "nurse_choice_a", "next": "after_nurse_enter_11_f" },
            { "condition": "nurse_choice_b", "next": "after_nurse_enter_11_h" },
            { "next": "after_nurse_enter_11_j" }
        ]
    },
    "after_nurse_enter_11_f": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11_g"
    },
    "after_nurse_enter_11_g": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11_j"
    },
    "after_nurse_enter_11_h": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11_i"
    },
    "after_nurse_enter_11_i": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11_j"
    },
    "after_nurse_enter_11_j": {
        "next": "after_nurse_enter_11_k",
        "routeBeforeRender": true
    },
    "after_nurse_enter_11_k": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11_l"
    },
    "after_nurse_enter_11_l": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11_m"
    },
    "after_nurse_enter_11_m": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_12"
    },
    "after_nurse_enter_12": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlags": ["nurse_day1"],
        "next": "after_nurse_enter_12_b"
    },
    "after_nurse_enter_12_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_freetalk"
    },
    "after_nurse_freetalk": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "type": "free_talk",
        "maxTurns": 3,
        "next": "night_start",
        "isRemote": false
    },
    "after_nurse_skip": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "night_start"
    }
    };
    for (const scene of Object.values(scenes)) {
        if (scene && typeof scene === 'object') {
            Object.defineProperty(scene, "__sourceFile", {
                value: "day1_3_afterschool",
                enumerable: false
            });
        }
    }
    Object.assign(SCENARIO[1], scenes);
})();
