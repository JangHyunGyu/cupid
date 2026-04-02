/**
 * ============================================================================
 * CUPID - day1_3_afterschool
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[1]) SCENARIO[1] = {};

(function() {
const _scenes = {
    "after_start": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "bgm": "daily.mp3",
        "next": "after_start_2"
    },
    "after_start_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after_kakao_1"
    },
    "after_kakao_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after_kakao_2"
    },
    "after_kakao_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after_kakao_3"
    },
    "after_kakao_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after_kakao_4"
    },
    "after_kakao_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after_kakao_5"
    },
    "after_kakao_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after_kakao_end"
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
            { "next": "after1_jealousy_seo_lie", "setFlags": ["day1_lied_to_dain"] }
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
        "next": "after1_jealousy_seo_yuna_2"
    },
    "after1_jealousy_seo_yuna_2": {
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
    "after_yuna_skip": {
        "background": "assets/images/background/school_hallway.png",
        "branches": [
            { "condition": "ate_lunch_seoyeon", "next": "after_end" },
            { "condition": "chose_seoyeon_lunch", "next": "after_end" },
            { "next": "after_miss_seoyeon_1" }
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
        "next": "after_miss_dain_6_ins"
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
    "after_miss_yuna_1": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "excludeCondition": "met_yuna",
        "next": "after_miss_yuna_1_ins"
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
        "next": "after_miss_yuna_3_ins"
    },
    "after_miss_yuna_4": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "setFlags": ["met_yuna"],
        "branches": [
            { "condition": "ate_lunch_seoyeon", "next": "after_end" },
            { "condition": "chose_seoyeon_lunch", "next": "after_end" },
            { "next": "after_miss_seoyeon_1" }
        ]
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
        "character": "assets/images/characters/seyoun_normal.png",
        "excludeCondition": "ate_lunch_seoyeon",
        "next": "after_miss_seoyeon_8"
    },
    "after_miss_seoyeon_8": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_shy.png",
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
        "next": "after_hidden_homeroom_3_ins"
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
            { "next": "after_homeroom_honest_1", "stats": {"Teacher":{"affinity":7}} }
        ]
    },
    "after_homeroom_ok": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_ok_ins"
    },
    "after_homeroom_ok_2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_ok_2_ins"
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
        "next": "after_homeroom_honest_3_ins"
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
        "next": "after_homeroom_honest_6_ins"
    },
    "after_homeroom_honest_choice2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "choices": [
            { "next": "after_homeroom_honest_choice2a", "stats": {"Teacher":{"affinity":10}} },
            { "next": "after_homeroom_honest_choice2b", "stats": {"Teacher":{"affinity":3}} }
        ]
    },
    "after_homeroom_honest_choice2a": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "after_homeroom_honest_choice2a_ins"
    },
    "after_homeroom_honest_choice2b": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "after_homeroom_honest_choice2b_ins"
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
        "next": "after_homeroom_honest_9_ins"
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
        "next": "night_start"
    },
    "after_hidden_nurse_intro": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after_hidden_nurse_intro_ins"
    },
    "after_hidden_nurse_intro_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after_hidden_nurse_choice"
    },
    "after_hidden_nurse_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "choices": [
            { "next": "after_nurse_enter_1", "stats": {"Nurse":{"affinity":7}} },
            { "next": "after_nurse_skip", "stats": {"Nurse":{"affinity":0}} }
        ]
    },
    "after_nurse_skip": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "night_start"
    },
    "after_nurse_enter_1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_2"
    },
    "after_nurse_enter_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_2_ins"
    },
    "after_nurse_enter_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_4"
    },
    "after_nurse_enter_4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_4_ins"
    },
    "after_nurse_enter_5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_6"
    },
    "after_nurse_enter_6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_6_ins"
    },
    "after_nurse_enter_7": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_7_ins"
    },
    "after_nurse_enter_choice": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            { "next": "after_nurse_enter_choice_a", "stats": {"Nurse":{"affinity":10}}, "setFlags": ["nurse_choice_a"] },
            { "next": "after_nurse_enter_choice_b", "stats": {"Nurse":{"affinity":3}}, "setFlags": ["nurse_choice_b"] }
        ]
    },
    "after_nurse_enter_choice_a": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "after_nurse_enter_8"
    },
    "after_nurse_enter_choice_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_8"
    },
    "after_nurse_enter_8": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_8_ins"
    },
    "after_nurse_enter_9": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_9_ins"
    },
    "after_nurse_enter_10": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_10_ins"
    },
    "after_nurse_enter_11": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11_ins"
    },
    "after_nurse_enter_12": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlags": ["nurse_day1"],
        "next": "after_nurse_enter_12_ins"
    },
    "after_nurse_freetalk": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "type": "free_talk",
        "next": "night_start"
    },
    "after_miss_dain_6_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after_miss_dain_7"
    },
    "after_miss_yuna_1_ins": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after_miss_yuna_1_ins2"
    },
    "after_miss_yuna_1_ins2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after_miss_yuna_2"
    },
    "after_miss_yuna_3_ins": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after_miss_yuna_4"
    },
    "after_hidden_homeroom_3_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_hidden_homeroom_3_ins2"
    },
    "after_hidden_homeroom_3_ins2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_hidden_homeroom_4"
    },
    "after_homeroom_ok_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_ok_2"
    },
    "after_homeroom_ok_2_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "night_start"
    },
    "after_homeroom_honest_3_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_honest_4"
    },
    "after_homeroom_honest_6_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_honest_choice2"
    },
    "after_homeroom_honest_choice2a_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "after_homeroom_honest_7"
    },
    "after_homeroom_honest_choice2b_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "after_homeroom_honest_choice2b_ins2"
    },
    "after_homeroom_honest_choice2b_ins2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "after_homeroom_honest_7"
    },
    "after_homeroom_honest_9_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after_homeroom_honest_10"
    },
    "after_hidden_nurse_intro_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after_hidden_nurse_intro_ins2"
    },
    "after_hidden_nurse_intro_ins2": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after_hidden_nurse_intro_2"
    },
    "after_nurse_enter_2_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_3"
    },
    "after_nurse_enter_4_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_4_ins2"
    },
    "after_nurse_enter_4_ins2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_4_ins3"
    },
    "after_nurse_enter_4_ins3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_4_ins4"
    },
    "after_nurse_enter_4_ins4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_5"
    },
    "after_nurse_enter_6_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_7"
    },
    "after_nurse_enter_7_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_7_ins2"
    },
    "after_nurse_enter_7_ins2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_7_ins3"
    },
    "after_nurse_enter_7_ins3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_choice"
    },
    "after_nurse_enter_8_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_8_ins2"
    },
    "after_nurse_enter_8_ins2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_8_ins3"
    },
    "after_nurse_enter_8_ins3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_9"
    },
    "after_nurse_enter_9_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_9_ins2"
    },
    "after_nurse_enter_9_ins2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_9_ins3"
    },
    "after_nurse_enter_9_ins3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_9_ins4"
    },
    "after_nurse_enter_9_ins4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_10"
    },
    "after_nurse_enter_10_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_10_ins2"
    },
    "after_nurse_enter_10_ins2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_10_ins3"
    },
    "after_nurse_enter_10_ins3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11"
    },
    "after_nurse_enter_11_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11_ins2"
    },
    "after_nurse_enter_11_ins2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11_ins3"
    },
    "after_nurse_enter_11_ins3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11_ins4"
    },
    "after_nurse_enter_11_ins4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "branches": [
            { "condition": "nurse_choice_a", "next": "after_nurse_enter_11_ins5" },
            { "condition": "nurse_choice_b", "next": "after_nurse_enter_11_ins7" },
            { "next": "after_nurse_enter_11_ins9" }
        ]
    },
    "after_nurse_enter_11_ins5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11_ins6"
    },
    "after_nurse_enter_11_ins6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11_ins9"
    },
    "after_nurse_enter_11_ins7": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11_ins8"
    },
    "after_nurse_enter_11_ins8": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11_ins9"
    },
    "after_nurse_enter_11_ins9": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11_ins10"
    },
    "after_nurse_enter_11_ins10": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11_ins11"
    },
    "after_nurse_enter_11_ins11": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_11_ins12"
    },
    "after_nurse_enter_11_ins12": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_12"
    },
    "after_nurse_enter_12_ins": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_enter_12_ins2"
    },
    "after_nurse_enter_12_ins2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after_nurse_freetalk"
    }
};
Object.assign(SCENARIO[1], _scenes);
Object.values(_scenes).forEach(s => { if (!(s.background||'').includes('ending_') && !(s.background||'').includes('_event')) s.sunset = true; });
})();