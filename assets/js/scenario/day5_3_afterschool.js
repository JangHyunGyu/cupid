/**
 * ============================================================================
 * CUPID - day5_3_afterschool
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

(() => {
    const scenes = {
    "after5_start": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "bgm": "sunset1.mp3",
        "routeBeforeRender": true,
        "branches": [
            { "condition": "day4_counteroffer_penalty_deferred", "next": "after5_co_start" },
            { "next": "after5_normal_start" }
        ]
    },
    "after5_normal_start": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "bgm": "sunset1.mp3",
        "branches": [
            { "condition": "day4_waited", "next": "after5_waited_start_branch" },
            { "condition": "day4_confession_accepted", "next": "after5_waited_start_branch" },
            { "condition": "route_seoyeon", "next": "after5_farewell_yuna_check" },
            { "next": "after5_farewell_seo_1" }
        ]
    },
    "after5_co_start": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "bgm": "sunset1.mp3",
        "next": "after5_co_abandoned_branch"
    },
    "after5_co_abandoned_branch": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "routeBeforeRender": true,
        "branches": [
            { "condition": "day4_counteroffer_target_teacher", "next": "after5_co_teacher_1" },
            { "condition": "day4_counteroffer_target_nurse", "next": "after5_co_nurse_1" },
            { "condition": "route_seoyeon", "next": "after5_co_seo_1" },
            { "condition": "route_yuna", "next": "after5_co_yuna_1" },
            { "condition": "route_dain", "next": "after5_co_dain_1" },
            { "next": "after5_co_tempter_branch" }
        ]
    },
    "after5_co_seo_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after5_co_seo_2"
    },
    "after5_co_seo_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "after5_co_tempter_branch"
    },
    "after5_co_yuna_1": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "after5_co_yuna_2"
    },
    "after5_co_yuna_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_angry.png",
        "next": "after5_co_tempter_branch"
    },
    "after5_co_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after5_co_dain_2"
    },
    "after5_co_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "after5_co_tempter_branch"
    },
    "after5_co_teacher_1": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "after5_co_teacher_2"
    },
    "after5_co_teacher_2": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_angry.png",
        "next": "after5_co_tempter_branch"
    },
    "after5_co_nurse_1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_worried.png",
        "next": "after5_co_nurse_2"
    },
    "after5_co_nurse_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_angry.png",
        "next": "after5_co_tempter_branch"
    },
    "after5_co_tempter_branch": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "routeBeforeRender": true,
        "branches": [
            { "condition": "day4_took_seoyeon_counteroffer", "next": "after5_co_tempter_seo_1" },
            { "condition": "day4_took_yuna_counteroffer", "next": "after5_co_tempter_yuna_1" },
            { "condition": "day4_took_dain_counteroffer", "next": "after5_co_tempter_dain_1" },
            { "next": "after5_waited_start_branch" }
        ]
    },
    "after5_co_tempter_seo_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after5_co_tempter_seo_2"
    },
    "after5_co_tempter_seo_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_waited_start_branch"
    },
    "after5_co_tempter_yuna_1": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "after5_co_tempter_yuna_2"
    },
    "after5_co_tempter_yuna_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_waited_start_branch"
    },
    "after5_co_tempter_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after5_co_tempter_dain_2"
    },
    "after5_co_tempter_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after5_waited_start_branch"
    },
    "after5_waited_start_branch": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "routeBeforeRender": true,
        "branches": [
            { "condition": "route_seoyeon", "next": "after5_farewell_yuna_check" },
            { "condition": "day4_took_seoyeon_counteroffer", "next": "after5_farewell_yuna_check" },
            { "next": "after5_farewell_seo_1" }
        ]
    },
    "after5_farewell_seo_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "affinityGuard": {"character":"Seoyeon","minAffinity":40,"fallback":"after5_farewell_seo_low"},
        "next": "after5_farewell_seo_affinity_check"
    },
    "after5_farewell_seo_affinity_check": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "affinityChar": "Seoyeon",
        "affinityBranches": [{"minAffinity":80,"next":"after5_farewell_seo_high_1"},{"minAffinity":-100,"next":"after5_farewell_seo_2"}],
        "next": "after5_farewell_seo_2"
    },
    "after5_farewell_seo_high_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_farewell_seo_high_2"
    },
    "after5_farewell_seo_high_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after5_farewell_seo_6_b"
    },
    "after5_farewell_seo_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "excludeCondition": "route_seoyeon",
        "next": "after5_farewell_seo_3"
    },
    "after5_farewell_seo_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "excludeCondition": "route_seoyeon",
        "next": "after5_farewell_seo_4"
    },
    "after5_farewell_seo_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "excludeCondition": "route_seoyeon",
        "next": "after5_farewell_seo_5"
    },
    "after5_farewell_seo_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_farewell_seo_6"
    },
    "after5_farewell_seo_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "excludeCondition": "route_seoyeon",
        "next": "after5_farewell_seo_6_b"
    },
    "after5_farewell_seo_6_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_farewell_seo_7"
    },
    "after5_farewell_seo_7": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after5_farewell_yuna_check"
    },
    "after5_farewell_yuna_check": {
        "background": "assets/images/background/school_hallway.png",
        "routeBeforeRender": true,
        "branches": [
            { "condition": "route_yuna", "next": "after5_farewell_dain_check" },
            { "condition": "day4_took_yuna_counteroffer", "next": "after5_farewell_dain_check" },
            { "next": "after5_farewell_yuna_1" }
        ]
    },
    "after5_farewell_yuna_1": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "affinityGuard": {"character":"Yuna","minAffinity":40,"fallback":"after5_farewell_yuna_low"},
        "next": "after5_farewell_yuna_affinity_check"
    },
    "after5_farewell_yuna_affinity_check": {
        "background": "assets/images/background/library_old.png",
        "character": null,
        "affinityChar": "Yuna",
        "affinityBranches": [{"minAffinity":80,"next":"after5_farewell_yuna_high_1"},{"minAffinity":-100,"next":"after5_farewell_yuna_2"}],
        "next": "after5_farewell_yuna_2"
    },
    "after5_farewell_yuna_high_1": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_farewell_yuna_high_2"
    },
    "after5_farewell_yuna_high_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "after5_farewell_yuna_5b"
    },
    "after5_farewell_yuna_2": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "excludeCondition": "route_yuna",
        "next": "after5_farewell_yuna_3"
    },
    "after5_farewell_yuna_3": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_smile.png",
        "excludeCondition": "route_yuna",
        "next": "after5_farewell_yuna_4"
    },
    "after5_farewell_yuna_4": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "excludeCondition": "route_yuna",
        "next": "after5_farewell_yuna_5"
    },
    "after5_farewell_yuna_5": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "after5_farewell_yuna_5b"
    },
    "after5_farewell_yuna_5b": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after5_farewell_dain_check"
    },
    "after5_farewell_dain_check": {
        "background": "assets/images/background/school_hallway.png",
        "routeBeforeRender": true,
        "branches": [
            { "condition": "route_dain", "next": "after5_sunset_1" },
            { "condition": "day4_took_dain_counteroffer", "next": "after5_sunset_1" },
            { "next": "after5_farewell_dain_1" }
        ]
    },
    "after5_farewell_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "affinityGuard": {"character":"Dain","minAffinity":40,"fallback":"after5_farewell_dain_low"},
        "next": "after5_farewell_dain_affinity_check"
    },
    "after5_farewell_dain_affinity_check": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "affinityChar": "Dain",
        "affinityBranches": [{"minAffinity":80,"next":"after5_farewell_dain_high_1"},{"minAffinity":-100,"next":"after5_farewell_dain_2"}],
        "next": "after5_farewell_dain_2"
    },
    "after5_farewell_dain_high_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after5_farewell_dain_high_2"
    },
    "after5_farewell_dain_high_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after5_farewell_dain_4_d"
    },
    "after5_farewell_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "excludeCondition": "route_dain",
        "next": "after5_farewell_dain_3"
    },
    "after5_farewell_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "excludeCondition": "route_dain",
        "next": "after5_farewell_dain_4"
    },
    "after5_farewell_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "excludeCondition": "route_dain",
        "next": "after5_farewell_dain_4_b"
    },
    "after5_farewell_dain_4_b": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after5_farewell_dain_4_c"
    },
    "after5_farewell_dain_4_c": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after5_farewell_dain_4_d"
    },
    "after5_farewell_dain_4_d": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after5_farewell_dain_5"
    },
    "after5_farewell_dain_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "excludeCondition": "route_dain",
        "next": "after5_farewell_dain_5b"
    },
    "after5_farewell_dain_5b": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_sunset_1"
    },
    "after5_sunset_1": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "bgm": "confession.mp3",
        "next": "after5_ending_check"
    },
    "after5_ending_check": {
        "branches": [
            { "condition": "day3_caught_multiple_dates", "next": "ending_start" },
            { "condition": "harem_seed", "next": "after5_set_harem" },
            { "condition": "day4_counteroffer_penalty_deferred", "next": "ending_start" },
            { "condition": "homeroom_day5", "next": "after5_hidden_route_choice_check" },
            { "condition": "nurse_day5", "next": "after5_hidden_route_choice_check" },
            { "condition": "day4_waited", "next": "after5_last_chance_1" },
            { "condition": "day4_confession_accepted", "next": "ending_start" },
            { "next": "ending_start" }
        ]
    },
    "after5_hidden_route_choice_check": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "branches": [
            { "condition": "day4_confession_accepted", "next": "ending_start" },
            { "condition": "day4_waited", "next": "after5_hidden_route_choice" },
            { "next": "after5_hidden_route_choice" }
        ]
    },
    "after5_hidden_route_choice": {
        "background": "assets/images/background/park.png",
        "character": null,
        "choices": [
            { "next": "after5_last_chance_1", "clearFlags": ["hidden_route_chosen_teacher", "hidden_route_chosen_nurse"] },
            { "condition": "homeroom_day5", "next": "after5_hidden_teacher_affinity_check", "setFlags": ["hidden_route_chosen_teacher"], "clearFlags": ["hidden_route_chosen_nurse"] },
            { "condition": "nurse_day5", "next": "after5_hidden_nurse_affinity_check", "setFlags": ["hidden_route_chosen_nurse"], "clearFlags": ["hidden_route_chosen_teacher"] }
        ]
    },
    "after5_hidden_teacher_affinity_check": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "affinityChar": "Teacher",
        "affinityBranches": [{"minAffinity":60,"next":"after5_hidden_teacher_high"},{"minAffinity":40,"next":"after5_hidden_teacher_mid"},{"minAffinity":-100,"next":"after5_hidden_teacher_low"}],
        "next": "after5_hidden_teacher_low"
    },
    "after5_hidden_teacher_high": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "after5_hidden_return_to_park"
    },
    "after5_hidden_teacher_mid": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after5_hidden_return_to_park"
    },
    "after5_hidden_teacher_low": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "after5_hidden_return_to_park"
    },
    "after5_hidden_nurse_affinity_check": {
        "background": "assets/images/background/nurse_room.png",
        "character": null,
        "affinityChar": "Nurse",
        "affinityBranches": [{"minAffinity":60,"next":"after5_hidden_nurse_high"},{"minAffinity":40,"next":"after5_hidden_nurse_mid"},{"minAffinity":-100,"next":"after5_hidden_nurse_low"}],
        "next": "after5_hidden_nurse_low"
    },
    "after5_hidden_nurse_high": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_smile.png",
        "next": "after5_hidden_return_to_park"
    },
    "after5_hidden_nurse_mid": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after5_hidden_return_to_park"
    },
    "after5_hidden_nurse_low": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after5_hidden_return_to_park"
    },
    "after5_hidden_return_to_park": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "ending_start"
    },
    "after5_last_chance_1": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "setFlags": ["day5_last_chance_path"],
        "next": "after5_last_chance_2"
    },
    "after5_last_chance_2": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_last_chance_route_check"
    },
    "after5_last_chance_route_check": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "branches": [
            { "condition": "route_seoyeon", "next": "after5_last_chance_seo_history_check" },
            { "condition": "route_dain", "next": "after5_last_chance_dain_history_check" },
            { "condition": "route_yuna", "next": "after5_last_chance_yuna_history_check" },
            { "next": "after5_last_chance_choice" }
        ]
    },
    "after5_last_chance_seo_history_check": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "branches": [
            { "condition": "postponed_seoyeon", "next": "after5_last_chance_seo_postponed" },
            { "condition": "day4_tentative_seoyeon", "next": "after5_last_chance_seo_tentative" },
            { "condition": "day4_distance_seoyeon", "next": "after5_last_chance_seo_distance" },
            { "next": "after5_last_chance_seo_aff_check" }
        ]
    },
    "after5_last_chance_seo_postponed": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_last_chance_seo_aff_check"
    },
    "after5_last_chance_seo_tentative": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_last_chance_seo_aff_check"
    },
    "after5_last_chance_seo_distance": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after5_last_chance_seo_aff_check"
    },
    "after5_last_chance_seo_aff_check": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "affinityChar": "Seoyeon",
        "affinityBranches": [{"minAffinity":50,"next":"after5_last_chance_2_b"},{"minAffinity":-100,"next":"after5_last_chance_seo_low_1"}],
        "next": "after5_last_chance_seo_low_1"
    },
    "after5_last_chance_2_b": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_last_chance_2_c"
    },
    "after5_last_chance_2_c": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_last_chance_2_d"
    },
    "after5_last_chance_2_d": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_last_chance_2_e"
    },
    "after5_last_chance_2_e": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_last_chance_2_f"
    },
    "after5_last_chance_2_f": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_worried.png",
        "next": "after5_last_chance_2_g"
    },
    "after5_last_chance_2_g": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_last_chance_2_h"
    },
    "after5_last_chance_2_h": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_last_chance_2_i"
    },
    "after5_last_chance_2_i": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_last_chance_2_j"
    },
    "after5_last_chance_2_j": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "after5_last_chance_choice"
    },
    "after5_last_chance_seo_low_1": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_last_chance_seo_low_2"
    },
    "after5_last_chance_seo_low_2": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after5_last_chance_choice"
    },
    "after5_last_chance_dain_history_check": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "branches": [
            { "condition": "postponed_dain", "next": "after5_last_chance_dain_postponed" },
            { "condition": "day4_tentative_dain", "next": "after5_last_chance_dain_tentative" },
            { "condition": "day4_distance_dain", "next": "after5_last_chance_dain_distance" },
            { "next": "after5_last_chance_dain_aff_check" }
        ]
    },
    "after5_last_chance_dain_postponed": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after5_last_chance_dain_aff_check"
    },
    "after5_last_chance_dain_tentative": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after5_last_chance_dain_aff_check"
    },
    "after5_last_chance_dain_distance": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after5_last_chance_dain_aff_check"
    },
    "after5_last_chance_dain_aff_check": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "affinityChar": "Dain",
        "affinityBranches": [{"minAffinity":50,"next":"after5_last_chance_2_k"},{"minAffinity":-100,"next":"after5_last_chance_dain_low_1"}],
        "next": "after5_last_chance_dain_low_1"
    },
    "after5_last_chance_2_k": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_last_chance_2_l"
    },
    "after5_last_chance_2_l": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after5_last_chance_2_m"
    },
    "after5_last_chance_2_m": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after5_last_chance_2_n"
    },
    "after5_last_chance_2_n": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after5_last_chance_2_o"
    },
    "after5_last_chance_2_o": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after5_last_chance_2_p"
    },
    "after5_last_chance_2_p": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after5_last_chance_2_q"
    },
    "after5_last_chance_2_q": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after5_last_chance_2_r"
    },
    "after5_last_chance_2_r": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after5_last_chance_2_s"
    },
    "after5_last_chance_2_s": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after5_last_chance_choice"
    },
    "after5_last_chance_dain_low_1": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_last_chance_dain_low_2"
    },
    "after5_last_chance_dain_low_2": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after5_last_chance_choice"
    },
    "after5_last_chance_yuna_history_check": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "branches": [
            { "condition": "postponed_yuna", "next": "after5_last_chance_yuna_postponed" },
            { "condition": "day4_tentative_yuna", "next": "after5_last_chance_yuna_tentative" },
            { "condition": "day4_distance_yuna", "next": "after5_last_chance_yuna_distance" },
            { "next": "after5_last_chance_yuna_aff_check" }
        ]
    },
    "after5_last_chance_yuna_postponed": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_last_chance_yuna_aff_check"
    },
    "after5_last_chance_yuna_tentative": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_last_chance_yuna_aff_check"
    },
    "after5_last_chance_yuna_distance": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "after5_last_chance_yuna_aff_check"
    },
    "after5_last_chance_yuna_aff_check": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "affinityChar": "Yuna",
        "affinityBranches": [{"minAffinity":50,"next":"after5_last_chance_yuna_1"},{"minAffinity":-100,"next":"after5_last_chance_yuna_low_1"}],
        "next": "after5_last_chance_yuna_low_1"
    },
    "after5_last_chance_yuna_1": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_last_chance_yuna_2"
    },
    "after5_last_chance_yuna_2": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_last_chance_yuna_3"
    },
    "after5_last_chance_yuna_3": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_last_chance_yuna_4"
    },
    "after5_last_chance_yuna_4": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_last_chance_yuna_5"
    },
    "after5_last_chance_yuna_5": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after5_last_chance_yuna_6"
    },
    "after5_last_chance_yuna_6": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after5_last_chance_yuna_7"
    },
    "after5_last_chance_yuna_7": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after5_last_chance_choice"
    },
    "after5_last_chance_yuna_low_1": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_last_chance_yuna_low_2"
    },
    "after5_last_chance_yuna_low_2": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_last_chance_choice"
    },
    "after5_last_chance_choice": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "choices": [
            { "next": "after5_confess_yes", "setFlags": ["day5_confessed"] },
            { "next": "after5_confess_no" },
            { "next": "after5_defer_route_check", "stats": {"#{current_character}":{"affinity":-4}} }
        ]
    },
    "after5_defer_route_check": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "branches": [
            { "condition": "route_seoyeon", "next": "after5_defer_seo" },
            { "condition": "route_dain", "next": "after5_defer_dain" },
            { "condition": "route_yuna", "next": "after5_defer_yuna" },
            { "next": "after5_confess_no" }
        ]
    },
    "after5_defer_seo": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after5_confess_no_2"
    },
    "after5_defer_dain": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after5_confess_no_2"
    },
    "after5_defer_yuna": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "after5_confess_no_2"
    },
    "after5_confess_yes": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_confess_yes_2"
    },
    "after5_confess_yes_2": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "branches": [
            { "condition": "route_seoyeon", "next": "after5_confess_aff_seo" },
            { "condition": "route_dain", "next": "after5_confess_aff_dain" },
            { "condition": "route_yuna", "next": "after5_confess_aff_yuna" },
            { "next": "ending_start" }
        ]
    },
    "after5_confess_aff_seo": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "affinityChar": "Seoyeon",
        "affinityBranches": [{"minAffinity":50,"next":"after5_confess_react_seo"},{"minAffinity":-100,"next":"after5_confess_react_seo_low"}],
        "next": "after5_confess_react_seo_low"
    },
    "after5_confess_react_seo": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "ending_start"
    },
    "after5_confess_react_seo_low": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after5_confess_fail_walk_1"
    },
    "after5_confess_aff_dain": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "affinityChar": "Dain",
        "affinityBranches": [{"minAffinity":50,"next":"after5_confess_react_dain"},{"minAffinity":-100,"next":"after5_confess_react_dain_low"}],
        "next": "after5_confess_react_dain_low"
    },
    "after5_confess_react_dain": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "ending_start"
    },
    "after5_confess_react_dain_low": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after5_confess_fail_walk_1"
    },
    "after5_confess_aff_yuna": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "affinityChar": "Yuna",
        "affinityBranches": [{"minAffinity":50,"next":"after5_confess_react_yuna"},{"minAffinity":-100,"next":"after5_confess_react_yuna_low"}],
        "next": "after5_confess_react_yuna_low"
    },
    "after5_confess_react_yuna": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after5_confess_react_yuna_call"
    },
    "after5_confess_react_yuna_call": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_confess_react_yuna_b"
    },
    "after5_confess_react_yuna_b": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after5_confess_react_yuna_c"
    },
    "after5_confess_react_yuna_c": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_confess_react_yuna_d"
    },
    "after5_confess_react_yuna_d": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_confess_react_yuna_e"
    },
    "after5_confess_react_yuna_e": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after5_confess_react_yuna_f"
    },
    "after5_confess_react_yuna_f": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "after5_confess_react_yuna_g"
    },
    "after5_confess_react_yuna_g": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_confess_react_yuna_h"
    },
    "after5_confess_react_yuna_h": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_confess_react_yuna_i"
    },
    "after5_confess_react_yuna_i": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "ending_start"
    },
    "after5_confess_react_yuna_low": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "after5_confess_fail_walk_1"
    },
    "after5_confess_fail_walk_1": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_confess_fail_walk_2"
    },
    "after5_confess_fail_walk_2": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "ending_start"
    },
    "after5_confess_no": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_confess_no_2"
    },
    "after5_confess_no_2": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_confess_no_2b"
    },
    "after5_confess_no_2b": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "ending_start"
    },
    "after5_set_harem": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_harem_commit"
    },
    "after5_harem_commit": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "setFlags": ["ending_harem"],
        "next": "after5_harem_walk_1"
    },
    "after5_harem_walk_1": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "next": "after5_harem_walk_2"
    },
    "after5_harem_walk_2": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "ending_start"
    },
    "after5_farewell_seo_low": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after5_farewell_yuna_check"
    },
    "after5_farewell_yuna_low": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after5_farewell_dain_check"
    },
    "after5_farewell_dain_low": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after5_sunset_1"
    }
    };
    for (const scene of Object.values(scenes)) {
        if (scene && typeof scene === 'object') {
            Object.defineProperty(scene, "__sourceFile", {
                value: "day5_3_afterschool",
                enumerable: false
            });
        }
    }
    Object.assign(SCENARIO[5], scenes);
})();
