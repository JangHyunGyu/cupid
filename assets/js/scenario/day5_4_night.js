/**
 * ============================================================================
 * CUPID - day5_4_night
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

(() => {
    const scenes = {
    "ending_start": {
        "background": "assets/images/background/park.png",
        "character": null,
        "branches": [
            { "condition": "day3_caught_multiple_dates", "next": "day5_ending_mayhem" },
            { "condition": "ending_harem", "next": "day5_ending_harem" },
            { "condition": "day4_counteroffer_penalty_deferred", "next": "ending_counteroffer_bitter" },
            { "condition": "day5_last_chance_path", "next": "ending_last_chance_resolve" },
            { "condition": "hidden_route_chosen_teacher", "next": "hidden_perfect_homeroom_check" },
            { "condition": "hidden_route_chosen_nurse", "next": "hidden_perfect_nurse_check" },
            { "condition": "day4_confession_accepted", "next": "ending_affinity_check" },
            { "condition": "day5_confessed", "next": "ending_confessed_aff_check" },
            { "condition": "day4_waited", "next": "day5_ending_friend" },
            { "condition": "both_hidden_day5", "next": "hidden_dual_route_1" },
            { "condition": "homeroom_day5", "next": "hidden_perfect_homeroom_check" },
            { "condition": "nurse_day5", "next": "hidden_perfect_nurse_check" },
            { "next": "day5_ending_alone" }
        ]
    },
    "ending_counteroffer_bitter": {
        "background": "assets/images/background/park.png",
        "character": null,
        "bgm": "night2.mp3",
        "setFlags": ["ending_bittersweet"],
        "routeBeforeRender": true,
        "branches": [
            { "condition": "day5_counteroffer_choice_lead", "next": "ending_counteroffer_choice_lead" },
            { "condition": "day5_counteroffer_choice_tempter", "next": "ending_counteroffer_choice_tempter" },
            { "condition": "day5_counteroffer_choice_neither", "next": "ending_counteroffer_choice_neither" },
            { "next": "ending_counteroffer_bitter_route" }
        ]
    },
    "ending_counteroffer_choice_lead": {
        "background": "assets/images/background/park.png",
        "character": null,
        "bgm": "night2.mp3",
        "next": "ending_counteroffer_bitter_route"
    },
    "ending_counteroffer_choice_tempter": {
        "background": "assets/images/background/park.png",
        "character": null,
        "bgm": "night2.mp3",
        "next": "ending_counteroffer_bitter_route"
    },
    "ending_counteroffer_choice_neither": {
        "background": "assets/images/background/park.png",
        "character": null,
        "bgm": "night2.mp3",
        "next": "ending_counteroffer_bitter_route"
    },
    "ending_counteroffer_bitter_route": {
        "background": "assets/images/background/park.png",
        "character": null,
        "routeBeforeRender": true,
        "branches": [
            { "condition": "day4_counteroffer_target_teacher", "next": "co_bitter_teacher_1" },
            { "condition": "day4_counteroffer_target_nurse", "next": "co_bitter_nurse_1" },
            { "condition": "route_seoyeon", "next": "co_bitter_seo_1" },
            { "condition": "route_yuna", "next": "co_bitter_yuna_1" },
            { "condition": "route_dain", "next": "co_bitter_dain_1" },
            { "next": "co_bitter_seo_1" }
        ]
    },
    "co_bitter_seo_1": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "co_bitter_seo_2"
    },
    "co_bitter_seo_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "co_bitter_seo_3"
    },
    "co_bitter_seo_3": {
        "background": "assets/images/background/ending_bittersweet.png",
        "character": null,
        "next": "bitter_epilogue_1"
    },
    "co_bitter_yuna_1": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "co_bitter_yuna_2"
    },
    "co_bitter_yuna_2": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "co_bitter_yuna_3"
    },
    "co_bitter_yuna_3": {
        "background": "assets/images/background/ending_bittersweet.png",
        "character": null,
        "next": "bitter_epilogue_1"
    },
    "co_bitter_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "co_bitter_dain_2"
    },
    "co_bitter_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "co_bitter_dain_3"
    },
    "co_bitter_dain_3": {
        "background": "assets/images/background/ending_bittersweet.png",
        "character": null,
        "next": "bitter_epilogue_1"
    },
    "co_bitter_teacher_1": {
        "background": "assets/images/background/school_hallway.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "co_bitter_teacher_2"
    },
    "co_bitter_teacher_2": {
        "background": "assets/images/background/school_hallway.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "co_bitter_teacher_3"
    },
    "co_bitter_teacher_3": {
        "background": "assets/images/background/ending_bittersweet_teacher.png",
        "character": null,
        "next": "hidden_bitter_homeroom_ending_title"
    },
    "co_bitter_nurse_1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_worried.png",
        "next": "co_bitter_nurse_2"
    },
    "co_bitter_nurse_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_worried.png",
        "next": "co_bitter_nurse_3"
    },
    "co_bitter_nurse_3": {
        "background": "assets/images/background/ending_bittersweet_nurse.png",
        "character": null,
        "next": "hidden_bitter_nurse_ending_title"
    },
    "ending_last_chance_resolve": {
        "background": "assets/images/background/park.png",
        "character": null,
        "branches": [
            { "condition": "day5_confessed", "next": "ending_confessed_aff_check" },
            { "next": "day5_ending_friend" }
        ]
    },
    "ending_confessed_aff_check": {
        "background": "assets/images/background/park.png",
        "character": null,
        "branches": [
            { "condition": "route_seoyeon", "next": "ending_confessed_aff_seo" },
            { "condition": "route_yuna", "next": "ending_confessed_aff_yuna" },
            { "condition": "route_dain", "next": "ending_confessed_aff_dain" },
            { "next": "day5_ending_friend" }
        ]
    },
    "ending_confessed_aff_seo": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "affinityChar": "Seoyeon",
        "affinityBranches": [{"minAffinity":50,"next":"day5_ending_good"}],
        "next": "day5_ending_confess_fail"
    },
    "ending_confessed_aff_yuna": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "affinityChar": "Yuna",
        "affinityBranches": [{"minAffinity":50,"next":"day5_ending_good"}],
        "next": "day5_ending_confess_fail"
    },
    "ending_confessed_aff_dain": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "affinityChar": "Dain",
        "affinityBranches": [{"minAffinity":50,"next":"day5_ending_good"}],
        "next": "day5_ending_confess_fail"
    },
    "day5_ending_confess_fail": {
        "background": "assets/images/background/park.png",
        "character": null,
        "bgm": "night2.mp3",
        "branches": [
            { "condition": "route_seoyeon", "next": "confess_fail_cg_seo" },
            { "condition": "route_yuna", "next": "confess_fail_cg_yuna" },
            { "condition": "route_dain", "next": "confess_fail_cg_dain" },
            { "next": "confess_fail_cg_seo" }
        ]
    },
    "confess_fail_cg_seo": {
        "background": "assets/images/background/ending_confess_fail_seoyeon.png",
        "character": null,
        "next": "confess_fail_1"
    },
    "confess_fail_cg_yuna": {
        "background": "assets/images/background/ending_confess_fail_yuna.png",
        "character": null,
        "next": "confess_fail_1"
    },
    "confess_fail_cg_dain": {
        "background": "assets/images/background/ending_confess_fail_dain.png",
        "character": null,
        "next": "confess_fail_1"
    },
    "confess_fail_1": {
        "background": "assets/images/background/ending_bittersweet.png",
        "character": null,
        "next": "confess_fail_2"
    },
    "confess_fail_2": {
        "background": "assets/images/background/ending_bittersweet.png",
        "character": null,
        "next": "confess_fail_3"
    },
    "confess_fail_3": {
        "background": "assets/images/background/ending_bittersweet.png",
        "character": null,
        "next": "confess_fail_4"
    },
    "confess_fail_4": {
        "background": "assets/images/background/ending_bittersweet.png",
        "character": null,
        "next": "confess_fail_5"
    },
    "confess_fail_5": {
        "background": "assets/images/background/ending_bittersweet.png",
        "character": null,
        "next": "day5_credits"
    },
    "day5_ending_friend": {
        "background": "assets/images/background/park.png",
        "character": null,
        "bgm": "night2.mp3",
        "next": "friend_1"
    },
    "friend_1": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "friend_2"
    },
    "friend_2": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "friend_3"
    },
    "friend_3": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "friend_route_check"
    },
    "friend_route_check": {
        "background": "assets/images/background/park.png",
        "character": null,
        "branches": [
            { "condition": "route_seoyeon", "next": "friend_4_seo" },
            { "condition": "route_yuna", "next": "friend_4_yuna" },
            { "condition": "route_dain", "next": "friend_4_dain" },
            { "next": "friend_4" }
        ]
    },
    "friend_4": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "friend_5"
    },
    "friend_4_seo": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "friend_5"
    },
    "friend_4_yuna": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "friend_5"
    },
    "friend_4_dain": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "friend_5"
    },
    "friend_5": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "friend_7"
    },
    "friend_7": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "friend_8"
    },
    "friend_8": {
        "background": "assets/images/background/ending_friend.png",
        "character": null,
        "next": "friend_9"
    },
    "friend_9": {
        "background": "assets/images/background/ending_friend.png",
        "character": null,
        "next": "friend_10"
    },
    "friend_10": {
        "background": "assets/images/background/ending_friend.png",
        "character": null,
        "next": "friend_12"
    },
    "friend_12": {
        "background": "assets/images/background/ending_friend.png",
        "character": null,
        "next": "day5_credits"
    },
    "day5_ending_mayhem": {
        "background": "assets/images/background/ending_mayhem.png",
        "character": null,
        "bgm": "night1.mp3",
        "next": "mayhem_1"
    },
    "mayhem_1": {
        "background": "assets/images/background/ending_mayhem.png",
        "character": null,
        "next": "mayhem_2"
    },
    "mayhem_2": {
        "background": "assets/images/background/ending_mayhem.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "mayhem_3"
    },
    "mayhem_3": {
        "background": "assets/images/background/ending_mayhem.png",
        "character": null,
        "next": "mayhem_4"
    },
    "mayhem_4": {
        "background": "assets/images/background/ending_mayhem.png",
        "character": null,
        "next": "mayhem_5"
    },
    "mayhem_5": {
        "background": "assets/images/background/ending_mayhem.png",
        "character": null,
        "next": "mayhem_6"
    },
    "mayhem_6": {
        "background": "assets/images/background/ending_mayhem.png",
        "character": null,
        "next": "mayhem_7"
    },
    "mayhem_7": {
        "background": "assets/images/background/ending_mayhem.png",
        "character": null,
        "next": "mayhem_8"
    },
    "mayhem_8": {
        "background": "assets/images/background/ending_mayhem.png",
        "character": null,
        "next": "day5_credits"
    },
    "day5_ending_harem": {
        "background": "assets/images/background/ending_harem.png",
        "character": null,
        "bgm": "night1.mp3",
        "next": "harem_1"
    },
    "harem_1": {
        "background": "assets/images/background/ending_harem.png",
        "character": null,
        "next": "harem_1_b"
    },
    "harem_1_b": {
        "background": "assets/images/background/ending_harem.png",
        "character": null,
        "next": "harem_2"
    },
    "harem_2": {
        "background": "assets/images/background/ending_harem.png",
        "character": null,
        "next": "harem_3"
    },
    "harem_3": {
        "background": "assets/images/background/ending_harem.png",
        "character": null,
        "next": "harem_4"
    },
    "harem_4": {
        "background": "assets/images/background/ending_harem.png",
        "character": null,
        "next": "harem_5"
    },
    "harem_5": {
        "background": "assets/images/background/ending_harem.png",
        "character": null,
        "next": "harem_6"
    },
    "harem_6": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "harem_7"
    },
    "harem_7": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "harem_8"
    },
    "harem_8": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "day5_credits"
    },
    "hidden_dual_route_1": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "hidden_dual_route_choice"
    },
    "hidden_dual_route_choice": {
        "background": "assets/images/background/park.png",
        "character": null,
        "choices": [
            { "next": "hidden_perfect_homeroom_check" },
            { "next": "hidden_perfect_nurse_check" }
        ]
    },
    "hidden_perfect_homeroom_check": {
        "background": "assets/images/background/room_school.png",
        "affinityChar": "Teacher",
        "affinityBranches": [{"minAffinity":100,"next":"hidden_perfect_homeroom_1"},{"minAffinity":60,"next":"hidden_true_homeroom_1"},{"minAffinity":40,"next":"hidden_good_homeroom_1"},{"minAffinity":-100,"next":"hidden_bitter_homeroom_1"}],
        "next": "hidden_bitter_homeroom_1"
    },
    "hidden_perfect_homeroom_1": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": null,
        "bgm": "ending.mp3",
        "setFlags": ["ending_perfect"],
        "next": "hidden_perfect_homeroom_1b"
    },
    "hidden_perfect_homeroom_1b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_perfect_homeroom_2"
    },
    "hidden_perfect_homeroom_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_perfect_homeroom_2b"
    },
    "hidden_perfect_homeroom_2b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_perfect_homeroom_2c"
    },
    "hidden_perfect_homeroom_2c": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_perfect_homeroom_3"
    },
    "hidden_perfect_homeroom_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_perfect_homeroom_3b"
    },
    "hidden_perfect_homeroom_3b": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_perfect_homeroom_3c"
    },
    "hidden_perfect_homeroom_3c": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_perfect_homeroom_3e"
    },
    "hidden_perfect_homeroom_3e": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_perfect_homeroom_3f"
    },
    "hidden_perfect_homeroom_3f": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_perfect_homeroom_3g"
    },
    "hidden_perfect_homeroom_3g": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_perfect_homeroom_4b"
    },
    "hidden_perfect_homeroom_4b": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_perfect_homeroom_4c"
    },
    "hidden_perfect_homeroom_4c": {
        "background": "assets/images/background/room_my.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_perfect_homeroom_4d"
    },
    "hidden_perfect_homeroom_4d": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_perfect_homeroom_4e"
    },
    "hidden_perfect_homeroom_4e": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_perfect_homeroom_4f"
    },
    "hidden_perfect_homeroom_4f": {
        "background": "assets/images/background/ending_perfect_teacher.png",
        "character": null,
        "next": "hidden_perfect_homeroom_4g"
    },
    "hidden_perfect_homeroom_4g": {
        "background": "assets/images/background/ending_perfect_teacher.png",
        "character": null,
        "setFlags": ["isDating_Teacher"],
        "next": "hidden_perfect_homeroom_ending_title"
    },
    "hidden_perfect_homeroom_ending_title": {
        "background": "assets/images/background/ending_perfect_teacher.png",
        "character": null,
        "next": "hidden_perfect_homeroom_5"
    },
    "hidden_perfect_homeroom_5": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_perfect_homeroom_ep1"
    },
    "hidden_perfect_homeroom_ep1": {
        "background": "assets/images/background/ending_perfect_teacher.png",
        "character": null,
        "next": "hidden_perfect_homeroom_ep2"
    },
    "hidden_perfect_homeroom_ep2": {
        "background": "assets/images/background/ending_perfect_teacher.png",
        "character": null,
        "next": "hidden_perfect_homeroom_ep3"
    },
    "hidden_perfect_homeroom_ep3": {
        "background": "assets/images/background/ending_perfect_teacher.png",
        "character": null,
        "next": "date_choice_perfect_teacher"
    },
    "hidden_perfect_homeroom_ep4": {
        "background": "assets/images/background/ending_perfect_teacher.png",
        "character": null,
        "next": "day5_teacher_ending_freetalk_intro"
    },
    "hidden_true_homeroom_1": {
        "background": "assets/images/background/bookstore.png",
        "character": null,
        "bgm": "ending.mp3",
        "setFlags": ["ending_true_love"],
        "next": "hidden_true_homeroom_2"
    },
    "hidden_true_homeroom_2": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_true_homeroom_2_b"
    },
    "hidden_true_homeroom_2_b": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_true_homeroom_3"
    },
    "hidden_true_homeroom_3": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_true_homeroom_3_b"
    },
    "hidden_true_homeroom_3_b": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_true_homeroom_3_c"
    },
    "hidden_true_homeroom_3_c": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_true_homeroom_4"
    },
    "hidden_true_homeroom_4": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_true_homeroom_4_b"
    },
    "hidden_true_homeroom_4_b": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_true_homeroom_4_c"
    },
    "hidden_true_homeroom_4_c": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_true_homeroom_4_d"
    },
    "hidden_true_homeroom_4_d": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_true_homeroom_4_e"
    },
    "hidden_true_homeroom_4_e": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_true_homeroom_4_f"
    },
    "hidden_true_homeroom_4_f": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_true_homeroom_4_g"
    },
    "hidden_true_homeroom_4_g": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_true_homeroom_4_h"
    },
    "hidden_true_homeroom_4_h": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_true_homeroom_5"
    },
    "hidden_true_homeroom_5": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_true_homeroom_5_b"
    },
    "hidden_true_homeroom_5_b": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_true_homeroom_5_c"
    },
    "hidden_true_homeroom_5_c": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_true_homeroom_6"
    },
    "hidden_true_homeroom_6": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_true_homeroom_6_b"
    },
    "hidden_true_homeroom_6_b": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_true_homeroom_7"
    },
    "hidden_true_homeroom_7": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_true_homeroom_7_b"
    },
    "hidden_true_homeroom_7_b": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_true_homeroom_7_c"
    },
    "hidden_true_homeroom_7_c": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_true_homeroom_7_d"
    },
    "hidden_true_homeroom_7_d": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_true_homeroom_8"
    },
    "hidden_true_homeroom_8": {
        "background": "assets/images/background/ending_true_teacher.png",
        "character": null,
        "next": "date_choice_true_teacher"
    },
    "hidden_true_homeroom_ending_title": {
        "background": "assets/images/background/ending_true_teacher.png",
        "character": null,
        "next": "day5_teacher_ending_freetalk_intro"
    },
    "hidden_good_homeroom_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "bgm": "night2.mp3",
        "next": "hidden_good_homeroom_2"
    },
    "hidden_good_homeroom_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_good_homeroom_3"
    },
    "hidden_good_homeroom_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_good_homeroom_4"
    },
    "hidden_good_homeroom_4": {
        "background": "assets/images/background/ending_good_teacher.png",
        "character": null,
        "next": "hidden_good_homeroom_ending_title"
    },
    "hidden_good_homeroom_ending_title": {
        "background": "assets/images/background/ending_good_teacher.png",
        "character": null,
        "next": "day5_teacher_ending_freetalk_intro"
    },
    "hidden_bitter_homeroom_1": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "bgm": "night2.mp3",
        "setFlags": ["ending_bittersweet"],
        "next": "hidden_bitter_homeroom_2"
    },
    "hidden_bitter_homeroom_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_bitter_homeroom_3"
    },
    "hidden_bitter_homeroom_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_bitter_homeroom_4"
    },
    "hidden_bitter_homeroom_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_bitter_homeroom_5"
    },
    "hidden_bitter_homeroom_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_bitter_homeroom_6"
    },
    "hidden_bitter_homeroom_6": {
        "background": "assets/images/background/ending_bittersweet_teacher.png",
        "character": null,
        "next": "hidden_bitter_homeroom_ending_title"
    },
    "hidden_bitter_homeroom_ending_title": {
        "background": "assets/images/background/ending_bittersweet_teacher.png",
        "character": null,
        "next": "day5_teacher_ending_freetalk_intro"
    },
    "hidden_perfect_nurse_check": {
        "background": "assets/images/background/nurse_room.png",
        "affinityChar": "Nurse",
        "affinityBranches": [{"minAffinity":100,"next":"hidden_perfect_nurse_1"},{"minAffinity":60,"next":"hidden_true_nurse_1"},{"minAffinity":40,"next":"hidden_good_nurse_1"},{"minAffinity":-100,"next":"hidden_bitter_nurse_1"}],
        "next": "hidden_bitter_nurse_1"
    },
    "hidden_perfect_nurse_1": {
        "background": "assets/images/background/street.png",
        "character": null,
        "bgm": "ending.mp3",
        "setFlags": ["ending_perfect"],
        "next": "hidden_perfect_nurse_2"
    },
    "hidden_perfect_nurse_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_perfect_nurse_3"
    },
    "hidden_perfect_nurse_3": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "hidden_perfect_nurse_3b"
    },
    "hidden_perfect_nurse_3b": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_perfect_nurse_4"
    },
    "hidden_perfect_nurse_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_perfect_nurse_4b"
    },
    "hidden_perfect_nurse_4b": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "next": "hidden_perfect_nurse_5"
    },
    "hidden_perfect_nurse_5": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_perfect_nurse_5b"
    },
    "hidden_perfect_nurse_5b": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "setFlags": ["isDating_Nurse"],
        "next": "hidden_perfect_nurse_ep1"
    },
    "hidden_perfect_nurse_ep1": {
        "background": "assets/images/background/ending_perfect_nurse.png",
        "character": null,
        "next": "hidden_perfect_nurse_ending_title"
    },
    "hidden_perfect_nurse_ending_title": {
        "background": "assets/images/background/ending_perfect_nurse.png",
        "character": null,
        "next": "hidden_perfect_nurse_ep2"
    },
    "hidden_perfect_nurse_ep2": {
        "background": "assets/images/background/nurse_house.png",
        "character": null,
        "next": "hidden_perfect_nurse_ep3"
    },
    "hidden_perfect_nurse_ep3": {
        "background": "assets/images/background/nurse_house.png",
        "character": null,
        "next": "date_choice_perfect_nurse"
    },
    "hidden_perfect_nurse_ep4": {
        "background": "assets/images/background/nurse_house.png",
        "character": null,
        "next": "day5_nurse_ending_freetalk_intro"
    },
    "hidden_true_nurse_1": {
        "background": "assets/images/background/street.png",
        "character": null,
        "bgm": "ending.mp3",
        "setFlags": ["ending_true_love"],
        "next": "hidden_true_nurse_2"
    },
    "hidden_true_nurse_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_true_nurse_2_b"
    },
    "hidden_true_nurse_2_b": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_true_nurse_2_c"
    },
    "hidden_true_nurse_2_c": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_true_nurse_2_d"
    },
    "hidden_true_nurse_2_d": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_true_nurse_3"
    },
    "hidden_true_nurse_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_true_nurse_3_b"
    },
    "hidden_true_nurse_3_b": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_true_nurse_4"
    },
    "hidden_true_nurse_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_true_nurse_5"
    },
    "hidden_true_nurse_5": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_true_nurse_5_b"
    },
    "hidden_true_nurse_5_b": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_true_nurse_5_c"
    },
    "hidden_true_nurse_5_c": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_true_nurse_5_d"
    },
    "hidden_true_nurse_5_d": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_true_nurse_5_e"
    },
    "hidden_true_nurse_5_e": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_true_nurse_5_f"
    },
    "hidden_true_nurse_5_f": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_true_nurse_6"
    },
    "hidden_true_nurse_6": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_true_nurse_7"
    },
    "hidden_true_nurse_7": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "hidden_true_nurse_7_b"
    },
    "hidden_true_nurse_7_b": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_true_nurse_7_c"
    },
    "hidden_true_nurse_7_c": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "hidden_true_nurse_7_d"
    },
    "hidden_true_nurse_7_d": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_true_nurse_8"
    },
    "hidden_true_nurse_8": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_true_nurse_8_b"
    },
    "hidden_true_nurse_8_b": {
        "background": "assets/images/background/nurse_house.png",
        "character": null,
        "next": "hidden_true_nurse_8_c"
    },
    "hidden_true_nurse_8_c": {
        "background": "assets/images/background/nurse_house.png",
        "character": null,
        "next": "hidden_true_nurse_8_d"
    },
    "hidden_true_nurse_8_d": {
        "background": "assets/images/background/nurse_house.png",
        "character": null,
        "next": "hidden_true_nurse_8_e"
    },
    "hidden_true_nurse_8_e": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_true_nurse_8_f"
    },
    "hidden_true_nurse_8_f": {
        "background": "assets/images/background/nurse_house.png",
        "character": null,
        "next": "hidden_true_nurse_8_g"
    },
    "hidden_true_nurse_8_g": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_true_nurse_8_h"
    },
    "hidden_true_nurse_8_h": {
        "background": "assets/images/background/ending_true_nurse.png",
        "character": null,
        "next": "date_choice_true_nurse"
    },
    "hidden_true_nurse_ending_title": {
        "background": "assets/images/background/ending_true_nurse.png",
        "character": null,
        "next": "day5_nurse_ending_freetalk_intro"
    },
    "hidden_good_nurse_1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "bgm": "night2.mp3",
        "next": "hidden_good_nurse_2"
    },
    "hidden_good_nurse_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_good_nurse_2_b"
    },
    "hidden_good_nurse_2_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_good_nurse_2_c"
    },
    "hidden_good_nurse_2_c": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_good_nurse_2_d"
    },
    "hidden_good_nurse_2_d": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_good_nurse_3"
    },
    "hidden_good_nurse_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_good_nurse_3_b"
    },
    "hidden_good_nurse_3_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_good_nurse_4"
    },
    "hidden_good_nurse_4": {
        "background": "assets/images/background/ending_good_nurse.png",
        "character": null,
        "next": "hidden_good_nurse_ending_title"
    },
    "hidden_good_nurse_ending_title": {
        "background": "assets/images/background/ending_good_nurse.png",
        "character": null,
        "next": "day5_nurse_ending_freetalk_intro"
    },
    "hidden_bitter_nurse_1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "bgm": "night2.mp3",
        "setFlags": ["ending_bittersweet"],
        "next": "hidden_bitter_nurse_2"
    },
    "hidden_bitter_nurse_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_bitter_nurse_3"
    },
    "hidden_bitter_nurse_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_bitter_nurse_4"
    },
    "hidden_bitter_nurse_4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_bitter_nurse_5"
    },
    "hidden_bitter_nurse_5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_bitter_nurse_6"
    },
    "hidden_bitter_nurse_6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_bitter_nurse_7"
    },
    "hidden_bitter_nurse_7": {
        "background": "assets/images/background/ending_bittersweet_nurse.png",
        "character": null,
        "next": "hidden_bitter_nurse_ending_title"
    },
    "hidden_bitter_nurse_ending_title": {
        "background": "assets/images/background/ending_bittersweet_nurse.png",
        "character": null,
        "next": "day5_nurse_ending_freetalk_intro"
    },
    "ending_affinity_check": {
        "background": "assets/images/background/park.png",
        "character": null,
        "branches": [
            { "condition": "route_seoyeon", "next": "ending_aff_check_seo" },
            { "condition": "route_yuna", "next": "ending_aff_check_yuna" },
            { "condition": "route_dain", "next": "ending_aff_check_dain" },
            { "next": "day5_ending_alone" }
        ]
    },
    "ending_aff_check_seo": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "affinityChar": "Seoyeon",
        "affinityBranches": [{"minAffinity":100,"next":"perfect_seo_1"},{"minAffinity":60,"next":"true_seo_1"},{"minAffinity":40,"next":"day5_ending_good"},{"minAffinity":-100,"next":"bitter_seo_1"}],
        "next": "bitter_seo_1"
    },
    "perfect_seo_1": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "bgm": "ending.mp3",
        "setFlags": ["ending_perfect"],
        "next": "perfect_seo_1_b"
    },
    "perfect_seo_1_b": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "perfect_seo_2"
    },
    "perfect_seo_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "perfect_seo_3"
    },
    "perfect_seo_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "perfect_seo_4"
    },
    "perfect_seo_4": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "perfect_seo_5"
    },
    "perfect_seo_5": {
        "background": "assets/images/background/ending_perfect_seoyeon.png",
        "character": null,
        "next": "perfect_seo_5_b"
    },
    "perfect_seo_5_b": {
        "background": "assets/images/background/ending_perfect_seoyeon.png",
        "character": null,
        "next": "perfect_epilogue_1_seo"
    },
    "perfect_epilogue_1_seo": {
        "background": "assets/images/background/ending_perfect_seoyeon.png",
        "character": null,
        "next": "perfect_epilogue_bridge_seo"
    },
    "perfect_epilogue_bridge_seo": {
        "background": "assets/images/background/ending_perfect_seoyeon.png",
        "character": null,
        "next": "perfect_epilogue_2_seo"
    },
    "perfect_epilogue_2_seo": {
        "background": "assets/images/background/ending_perfect_seoyeon.png",
        "character": null,
        "next": "perfect_epilogue_3_seo"
    },
    "perfect_epilogue_3_seo": {
        "background": "assets/images/background/ending_perfect_seoyeon.png",
        "character": null,
        "next": "perfect_seo_coda_1"
    },
    "perfect_seo_coda_1": {
        "background": "assets/images/background/ending_perfect_seoyeon.png",
        "character": null,
        "next": "perfect_seo_coda_2"
    },
    "perfect_seo_coda_2": {
        "background": "assets/images/background/ending_perfect_seoyeon.png",
        "character": null,
        "next": "perfect_seo_coda_3"
    },
    "perfect_seo_coda_3": {
        "background": "assets/images/background/ending_perfect_seoyeon.png",
        "character": null,
        "next": "date_choice_perfect_seo"
    },
    "perfect_epilogue_4_seo": {
        "background": "assets/images/background/ending_perfect_seoyeon.png",
        "character": null,
        "next": "day5_seo_ending_freetalk_intro"
    },
    "bitter_seo_1": {
        "background": "assets/images/background/park.png",
        "character": null,
        "bgm": "night2.mp3",
        "setFlags": ["ending_bittersweet"],
        "next": "bitter_seo_2"
    },
    "bitter_seo_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "bitter_seo_2_b"
    },
    "bitter_seo_2_b": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "bitter_seo_3"
    },
    "bitter_seo_3": {
        "background": "assets/images/background/ending_bittersweet.png",
        "character": null,
        "next": "bitter_epilogue_1"
    },
    "true_seo_1": {
        "background": "assets/images/background/seyoun_room.png",
        "character": null,
        "bgm": "ending.mp3",
        "setFlags": ["ending_true_love"],
        "next": "true_seo_2"
    },
    "true_seo_2": {
        "background": "assets/images/background/seyoun_room.png",
        "character": null,
        "next": "true_seo_3"
    },
    "true_seo_3": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "true_seo_4"
    },
    "true_seo_4": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "true_seo_5"
    },
    "true_seo_5": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "true_seo_6"
    },
    "true_seo_6": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "true_seo_6b"
    },
    "true_seo_6b": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "true_seo_7"
    },
    "true_seo_7": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "true_seo_7_b"
    },
    "true_seo_7_b": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "true_seo_7b"
    },
    "true_seo_7b": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "true_seo_8"
    },
    "true_seo_8": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "true_seo_bridge"
    },
    "true_seo_bridge": {
        "background": "assets/images/background/ending_true_seoyeon.png",
        "character": null,
        "next": "true_epilogue_1_seo"
    },
    "true_epilogue_1_seo": {
        "background": "assets/images/background/ending_true_seoyeon.png",
        "character": null,
        "next": "date_choice_true_seo"
    },
    "ending_aff_check_yuna": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "affinityChar": "Yuna",
        "affinityBranches": [{"minAffinity":100,"next":"perfect_yuna_1"},{"minAffinity":60,"next":"true_yuna_1"},{"minAffinity":40,"next":"day5_ending_good"},{"minAffinity":-100,"next":"bitter_yuna_1"}],
        "next": "bitter_yuna_1"
    },
    "perfect_yuna_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "bgm": "ending.mp3",
        "setFlags": ["ending_perfect"],
        "next": "perfect_yuna_2"
    },
    "perfect_yuna_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "perfect_yuna_3"
    },
    "perfect_yuna_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "perfect_yuna_4"
    },
    "perfect_yuna_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "perfect_yuna_5"
    },
    "perfect_yuna_5": {
        "background": "assets/images/background/ending_perfect_yuna.png",
        "character": null,
        "next": "perfect_epilogue_1_yuna"
    },
    "perfect_epilogue_1_yuna": {
        "background": "assets/images/background/ending_perfect_yuna.png",
        "character": null,
        "next": "perfect_epilogue_bridge_yuna"
    },
    "perfect_epilogue_bridge_yuna": {
        "background": "assets/images/background/ending_perfect_yuna.png",
        "character": null,
        "next": "perfect_epilogue_2_yuna"
    },
    "perfect_epilogue_2_yuna": {
        "background": "assets/images/background/ending_perfect_yuna.png",
        "character": null,
        "next": "perfect_epilogue_3_yuna"
    },
    "perfect_epilogue_3_yuna": {
        "background": "assets/images/background/ending_perfect_yuna.png",
        "character": null,
        "next": "perfect_yuna_coda_1"
    },
    "perfect_yuna_coda_1": {
        "background": "assets/images/background/ending_perfect_yuna.png",
        "character": null,
        "next": "perfect_yuna_coda_2"
    },
    "perfect_yuna_coda_2": {
        "background": "assets/images/background/ending_perfect_yuna.png",
        "character": null,
        "next": "perfect_yuna_coda_3"
    },
    "perfect_yuna_coda_3": {
        "background": "assets/images/background/ending_perfect_yuna.png",
        "character": null,
        "next": "date_choice_perfect_yuna"
    },
    "perfect_epilogue_4_yuna": {
        "background": "assets/images/background/ending_perfect_yuna.png",
        "character": null,
        "next": "day5_yuna_ending_freetalk_intro"
    },
    "bitter_yuna_1": {
        "background": "assets/images/background/park.png",
        "character": null,
        "bgm": "night2.mp3",
        "setFlags": ["ending_bittersweet"],
        "next": "bitter_yuna_2"
    },
    "bitter_yuna_2": {
        "branches": [
            { "condition": "chose_yuna_lunch", "next": "bitter_yuna_2_library" },
            { "next": "bitter_yuna_2_book" }
        ]
    },
    "bitter_yuna_2_library": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "bitter_yuna_3"
    },
    "bitter_yuna_2_book": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "bitter_yuna_3"
    },
    "bitter_yuna_3": {
        "background": "assets/images/background/ending_bittersweet.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "bitter_epilogue_1"
    },
    "true_yuna_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "bgm": "ending.mp3",
        "setFlags": ["ending_true_love"],
        "next": "true_yuna_2"
    },
    "true_yuna_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "true_yuna_2_b"
    },
    "true_yuna_2_b": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "true_yuna_2_c"
    },
    "true_yuna_2_c": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "true_yuna_2_d"
    },
    "true_yuna_2_d": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "true_yuna_3"
    },
    "true_yuna_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "true_yuna_4"
    },
    "true_yuna_4": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "true_yuna_5"
    },
    "true_yuna_5": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "heard_yuna_third_song",
                "next": "true_yuna_5_established"
            },
            {
                "next": "true_yuna_5_first"
            }
        ]
    },
    "true_yuna_5_established": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "true_yuna_5_b"
    },
    "true_yuna_5_first": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "true_yuna_5_b"
    },
    "true_yuna_5_b": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "true_yuna_6"
    },
    "true_yuna_6": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "heard_yuna_third_song",
                "next": "true_yuna_6_established"
            },
            {
                "next": "true_yuna_6_first"
            }
        ]
    },
    "true_yuna_6_established": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "true_yuna_6b"
    },
    "true_yuna_6_first": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "true_yuna_6b"
    },
    "true_yuna_6b": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "true_yuna_7"
    },
    "true_yuna_7": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "true_yuna_bridge"
    },
    "true_yuna_bridge": {
        "background": "assets/images/background/ending_true_yuna.png",
        "character": null,
        "next": "true_epilogue_1_yuna"
    },
    "true_epilogue_1_yuna": {
        "background": "assets/images/background/ending_true_yuna.png",
        "character": null,
        "next": "date_choice_true_yuna"
    },
    "ending_aff_check_dain": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "affinityChar": "Dain",
        "affinityBranches": [{"minAffinity":100,"next":"perfect_dain_1"},{"minAffinity":60,"next":"true_dain_1"},{"minAffinity":40,"next":"day5_ending_good"},{"minAffinity":-100,"next":"bitter_dain_1"}],
        "next": "bitter_dain_1"
    },
    "perfect_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "bgm": "ending.mp3",
        "setFlags": ["ending_perfect"],
        "next": "perfect_dain_2"
    },
    "perfect_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "perfect_dain_2b"
    },
    "perfect_dain_2b": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "perfect_dain_3"
    },
    "perfect_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "perfect_dain_3b"
    },
    "perfect_dain_3b": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "perfect_dain_4"
    },
    "perfect_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "perfect_dain_5"
    },
    "perfect_dain_5": {
        "background": "assets/images/background/ending_perfect_dain.png",
        "character": null,
        "next": "perfect_epilogue_1_dain"
    },
    "perfect_epilogue_1_dain": {
        "background": "assets/images/background/ending_perfect_dain.png",
        "character": null,
        "next": "perfect_epilogue_1b_dain"
    },
    "perfect_epilogue_1b_dain": {
        "next": "perfect_epilogue_1c_dain",
        "routeBeforeRender": true
    },
    "perfect_epilogue_1c_dain": {
        "background": "assets/images/background/ending_perfect_dain.png",
        "character": null,
        "next": "perfect_epilogue_bridge_dain"
    },
    "perfect_epilogue_bridge_dain": {
        "background": "assets/images/background/ending_perfect_dain.png",
        "character": null,
        "next": "perfect_epilogue_2_dain"
    },
    "perfect_epilogue_2_dain": {
        "background": "assets/images/background/ending_perfect_dain.png",
        "character": null,
        "next": "perfect_epilogue_3_dain"
    },
    "perfect_epilogue_3_dain": {
        "background": "assets/images/background/ending_perfect_dain.png",
        "character": null,
        "next": "perfect_dain_coda_1"
    },
    "perfect_dain_coda_1": {
        "background": "assets/images/background/ending_perfect_dain.png",
        "character": null,
        "next": "perfect_dain_coda_2"
    },
    "perfect_dain_coda_2": {
        "background": "assets/images/background/ending_perfect_dain.png",
        "character": null,
        "next": "perfect_dain_coda_3"
    },
    "perfect_dain_coda_3": {
        "background": "assets/images/background/ending_perfect_dain.png",
        "character": null,
        "next": "date_choice_perfect_dain"
    },
    "perfect_epilogue_4_dain": {
        "background": "assets/images/background/ending_perfect_dain.png",
        "character": null,
        "next": "day5_dain_ending_freetalk_intro"
    },
    "bitter_dain_1": {
        "background": "assets/images/background/park.png",
        "character": null,
        "bgm": "night2.mp3",
        "setFlags": ["ending_bittersweet"],
        "next": "bitter_dain_2"
    },
    "bitter_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "bitter_dain_3"
    },
    "bitter_dain_3": {
        "background": "assets/images/background/ending_bittersweet.png",
        "character": null,
        "next": "bitter_dain_3_b"
    },
    "bitter_dain_3_b": {
        "background": "assets/images/background/ending_bittersweet.png",
        "character": null,
        "next": "bitter_epilogue_1"
    },
    "bitter_epilogue_1": {
        "background": "assets/images/background/ending_bittersweet.png",
        "character": null,
        "next": "bitter_epilogue_2"
    },
    "bitter_epilogue_2": {
        "background": "assets/images/background/ending_bittersweet.png",
        "character": null,
        "next": "bitter_epilogue_3"
    },
    "bitter_epilogue_3": {
        "background": "assets/images/background/ending_bittersweet.png",
        "character": null,
        "next": "day5_main_ending_freetalk_router"
    },
    "true_dain_1": {
        "background": "assets/images/background/gym.png",
        "backgroundVariant": "lights-off",
        "character": null,
        "bgm": "ending.mp3",
        "setFlags": ["ending_true_love"],
        "next": "true_dain_2"
    },
    "true_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "true_dain_2b"
    },
    "true_dain_2b": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "true_dain_3"
    },
    "true_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "true_dain_4"
    },
    "true_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "true_dain_5"
    },
    "true_dain_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "true_dain_6"
    },
    "true_dain_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "true_dain_7"
    },
    "true_dain_7": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "true_dain_8"
    },
    "true_dain_8": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "true_dain_8b"
    },
    "true_dain_8b": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "true_dain_bridge"
    },
    "true_dain_bridge": {
        "background": "assets/images/background/ending_true_dain.png",
        "character": null,
        "next": "true_epilogue_1_dain"
    },
    "true_epilogue_1_dain": {
        "background": "assets/images/background/ending_true_dain.png",
        "character": null,
        "next": "date_choice_true_dain"
    },
    "true_epilogue_2": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "true_epilogue_3"
    },
    "true_epilogue_3": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "true_epilogue_4"
    },
    "true_epilogue_4": {
        "branches": [
            { "condition": "route_dain", "next": "true_epilogue_4_dain" },
            { "condition": "route_yuna", "next": "true_epilogue_4_yuna" },
            { "condition": "route_seoyeon", "next": "true_epilogue_4_seo" },
            { "next": "true_epilogue_4_seo" }
        ]
    },
    "true_epilogue_4_seo": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "true_epilogue_7"
    },
    "true_epilogue_4_yuna": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "true_epilogue_7"
    },
    "true_epilogue_4_dain": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "true_epilogue_7"
    },
    "true_epilogue_7": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "day5_main_ending_freetalk_router"
    },
    "day5_ending_good": {
        "background": "assets/images/background/park.png",
        "character": null,
        "bgm": "night2.mp3",
        "next": "good_1"
    },
    "good_1": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "good_1b"
    },
    "good_1b": {
        "background": "assets/images/background/park.png",
        "character": null,
        "next": "good_1c"
    },
    "good_1c": {
        "background": "assets/images/background/park.png",
        "character": null,
        "branches": [
            { "condition": "route_dain", "next": "good_1_dain" },
            { "condition": "route_yuna", "next": "good_1_yuna" },
            { "condition": "route_seoyeon", "next": "good_1_seo" },
            { "next": "good_1_seo" }
        ]
    },
    "good_1_seo": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "good_1_seo_b"
    },
    "good_1_seo_b": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "good_1_seo_c"
    },
    "good_1_seo_c": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "good_1_seo_d"
    },
    "good_1_seo_d": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "good_2_seo"
    },
    "good_2_seo": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "good_3_seo"
    },
    "good_3_seo": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "good_4_seo"
    },
    "good_4_seo": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "good_5_seo"
    },
    "good_5_seo": {
        "background": "assets/images/background/ending_good_seoyeon.png",
        "character": null,
        "next": "good_epilogue_1"
    },
    "good_epilogue_1": {
        "background": "assets/images/background/ending_good_seoyeon.png",
        "character": null,
        "next": "good_epilogue_2"
    },
    "good_epilogue_2": {
        "background": "assets/images/background/ending_good_seoyeon.png",
        "character": null,
        "next": "good_epilogue_3"
    },
    "good_epilogue_3": {
        "background": "assets/images/background/ending_good_seoyeon.png",
        "character": null,
        "next": "good_5_cg_seo"
    },
    "good_5_cg_seo": {
        "background": "assets/images/background/ending_good_seoyeon.png",
        "character": null,
        "next": "day5_seo_ending_freetalk_intro"
    },
    "good_1_yuna": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "good_1_yuna_b"
    },
    "good_1_yuna_b": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "good_1_yuna_b_b"
    },
    "good_1_yuna_b_b": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "good_2_yuna"
    },
    "good_2_yuna": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "good_3_yuna"
    },
    "good_3_yuna": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "good_4_yuna"
    },
    "good_4_yuna": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "good_5_yuna"
    },
    "good_5_yuna": {
        "background": "assets/images/background/ending_good_yuna.png",
        "character": null,
        "next": "good_epilogue_1_yuna"
    },
    "good_epilogue_1_yuna": {
        "routeBeforeRender": true,
        "branches": [
            {
                "condition": "chose_yuna_lunch",
                "next": "good_epilogue_1_yuna_established"
            },
            {
                "next": "good_epilogue_1_yuna_first"
            }
        ]
    },
    "good_epilogue_1_yuna_established": {
        "background": "assets/images/background/ending_good_yuna.png",
        "character": null,
        "next": "good_epilogue_2_yuna"
    },
    "good_epilogue_1_yuna_first": {
        "background": "assets/images/background/ending_good_yuna.png",
        "character": null,
        "next": "good_epilogue_2_yuna"
    },
    "good_epilogue_2_yuna": {
        "background": "assets/images/background/ending_good_yuna.png",
        "character": null,
        "next": "good_epilogue_3_yuna"
    },
    "good_epilogue_3_yuna": {
        "background": "assets/images/background/ending_good_yuna.png",
        "character": null,
        "next": "good_5_cg_yuna"
    },
    "good_5_cg_yuna": {
        "background": "assets/images/background/ending_good_yuna.png",
        "character": null,
        "next": "day5_yuna_ending_freetalk_intro"
    },
    "good_1_dain": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "good_2_dain"
    },
    "good_2_dain": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "good_3_dain"
    },
    "good_3_dain": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_pout.png",
        "next": "good_4_dain"
    },
    "good_4_dain": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "good_5_dain"
    },
    "good_5_dain": {
        "background": "assets/images/background/ending_good_dain.png",
        "character": null,
        "next": "good_epilogue_1_dain"
    },
    "good_epilogue_1_dain": {
        "background": "assets/images/background/ending_good_dain.png",
        "character": null,
        "next": "good_epilogue_2_dain"
    },
    "good_epilogue_2_dain": {
        "background": "assets/images/background/ending_good_dain.png",
        "character": null,
        "next": "good_epilogue_3_dain"
    },
    "good_epilogue_3_dain": {
        "background": "assets/images/background/ending_good_dain.png",
        "character": null,
        "next": "good_5_cg_dain"
    },
    "good_5_cg_dain": {
        "background": "assets/images/background/ending_good_dain.png",
        "character": null,
        "next": "day5_dain_ending_freetalk_intro"
    },
    "day5_ending_alone": {
        "background": "assets/images/background/ending_alone.png",
        "character": null,
        "bgm": "night2.mp3",
        "next": "alone_1"
    },
    "alone_1": {
        "background": "assets/images/background/ending_alone.png",
        "character": null,
        "next": "alone_2"
    },
    "alone_2": {
        "background": "assets/images/background/ending_alone.png",
        "character": null,
        "next": "alone_2_b"
    },
    "alone_2_b": {
        "background": "assets/images/background/ending_alone.png",
        "character": null,
        "next": "alone_4"
    },
    "alone_4": {
        "background": "assets/images/background/ending_alone.png",
        "character": null,
        "next": "alone_5"
    },
    "alone_5": {
        "background": "assets/images/background/ending_alone.png",
        "character": null,
        "next": "day5_credits"
    },
    "date_choice_perfect_seo": {
            "background": "assets/images/background/top_school.png",
            "character": "assets/images/characters/seyoun_laugh.png",
            "choices": [
                    {
                            "next": "date_perfect_seo_roof_1"
                    },
                    {
                            "next": "date_perfect_seo_cafe_1"
                    }
            ]
    },
    "date_perfect_seo_roof_1": {
            "background": "assets/images/background/top_school.png",
            "character": "assets/images/characters/seyoun_laugh.png",
            "next": "date_perfect_seo_roof_2"
    },
    "date_perfect_seo_roof_2": {
            "background": "assets/images/background/top_school.png",
            "character": "assets/images/characters/seyoun_laugh.png",
            "next": "date_perfect_seo_roof_3"
    },
    "date_perfect_seo_roof_3": {
            "background": "assets/images/background/top_school.png",
            "character": "assets/images/characters/seyoun_laugh.png",
            "next": "perfect_epilogue_4_seo"
    },
    "date_perfect_seo_cafe_1": {
            "background": "assets/images/background/cafe.png",
            "character": "assets/images/characters/seyoun_laugh.png",
            "next": "date_perfect_seo_cafe_2"
    },
    "date_perfect_seo_cafe_2": {
            "background": "assets/images/background/cafe.png",
            "character": "assets/images/characters/seyoun_laugh.png",
            "next": "date_perfect_seo_cafe_3"
    },
    "date_perfect_seo_cafe_3": {
            "background": "assets/images/background/cafe.png",
            "character": "assets/images/characters/seyoun_laugh.png",
            "next": "perfect_epilogue_4_seo"
    },
    "date_choice_perfect_yuna": {
            "background": "assets/images/background/bookstore.png",
            "character": "assets/images/characters/yuna_smile.png",
            "choices": [
                    {
                            "next": "date_perfect_yuna_book_1"
                    },
                    {
                            "next": "date_perfect_yuna_roof_1"
                    }
            ]
    },
    "date_perfect_yuna_book_1": {
            "background": "assets/images/background/bookstore.png",
            "character": "assets/images/characters/yuna_smile.png",
            "next": "date_perfect_yuna_book_2"
    },
    "date_perfect_yuna_book_2": {
            "background": "assets/images/background/bookstore.png",
            "character": "assets/images/characters/junho_normal.png",
            "next": "date_perfect_yuna_book_3"
    },
    "date_perfect_yuna_book_3": {
            "background": "assets/images/background/bookstore.png",
            "character": "assets/images/characters/junho_awkward.png",
            "next": "date_perfect_yuna_book_4"
    },
    "date_perfect_yuna_book_4": {
            "background": "assets/images/background/bookstore.png",
            "character": "assets/images/characters/yuna_smile.png",
            "next": "perfect_epilogue_4_yuna"
    },
    "date_perfect_yuna_roof_1": {
            "background": "assets/images/background/yuna_secret_rooftop.png",
            "character": "assets/images/characters/yuna_smile.png",
            "next": "date_perfect_yuna_roof_2"
    },
    "date_perfect_yuna_roof_2": {
            "background": "assets/images/background/yuna_secret_rooftop.png",
            "character": "assets/images/characters/yuna_smile.png",
            "next": "date_perfect_yuna_roof_3"
    },
    "date_perfect_yuna_roof_3": {
            "background": "assets/images/background/yuna_secret_rooftop.png",
            "character": "assets/images/characters/yuna_smile.png",
            "next": "perfect_epilogue_4_yuna"
    },
    "date_choice_perfect_dain": {
            "background": "assets/images/background/gym.png",
            "character": "assets/images/characters/dain_laugh.png",
            "choices": [
                    {
                            "next": "date_perfect_dain_gym_1"
                    },
                    {
                            "next": "date_perfect_dain_booth_1"
                    }
            ]
    },
    "date_perfect_dain_gym_1": {
            "background": "assets/images/background/gym.png",
            "character": "assets/images/characters/dain_laugh.png",
            "next": "date_perfect_dain_gym_2"
    },
    "date_perfect_dain_gym_2": {
            "background": "assets/images/background/gym.png",
            "character": "assets/images/characters/dain_laugh.png",
            "next": "date_perfect_dain_gym_3"
    },
    "date_perfect_dain_gym_3": {
            "background": "assets/images/background/gym.png",
            "character": "assets/images/characters/dain_laugh.png",
            "next": "perfect_epilogue_4_dain"
    },
    "date_perfect_dain_booth_1": {
            "background": "assets/images/background/dain_broadcast_booth.png",
            "character": "assets/images/characters/dain_laugh.png",
            "next": "date_perfect_dain_booth_2"
    },
    "date_perfect_dain_booth_2": {
            "background": "assets/images/background/dain_broadcast_booth.png",
            "character": "assets/images/characters/dain_laugh.png",
            "next": "date_perfect_dain_booth_3"
    },
    "date_perfect_dain_booth_3": {
            "background": "assets/images/background/dain_broadcast_booth.png",
            "character": "assets/images/characters/dain_laugh.png",
            "next": "perfect_epilogue_4_dain"
    },
    "date_choice_perfect_teacher": {
            "background": "assets/images/background/cafe.png",
            "character": "assets/images/characters/teacher_smile.png",
            "choices": [
                    {
                            "next": "date_perfect_teacher_cafe_1"
                    },
                    {
                            "next": "date_perfect_teacher_museum_1"
                    }
            ]
    },
    "date_perfect_teacher_cafe_1": {
            "background": "assets/images/background/cafe.png",
            "character": "assets/images/characters/teacher_smile.png",
            "next": "date_perfect_teacher_cafe_2"
    },
    "date_perfect_teacher_cafe_2": {
            "background": "assets/images/background/cafe.png",
            "character": "assets/images/characters/teacher_smile.png",
            "next": "date_perfect_teacher_cafe_3"
    },
    "date_perfect_teacher_cafe_3": {
            "background": "assets/images/background/cafe.png",
            "character": "assets/images/characters/teacher_smile.png",
            "next": "hidden_perfect_homeroom_ep4"
    },
    "date_perfect_teacher_museum_1": {
            "background": "assets/images/background/museum.png",
            "character": "assets/images/characters/teacher_smile.png",
            "next": "date_perfect_teacher_museum_2"
    },
    "date_perfect_teacher_museum_2": {
            "background": "assets/images/background/museum.png",
            "character": "assets/images/characters/teacher_smile.png",
            "next": "date_perfect_teacher_museum_3"
    },
    "date_perfect_teacher_museum_3": {
            "background": "assets/images/background/museum.png",
            "character": "assets/images/characters/teacher_smile.png",
            "next": "hidden_perfect_homeroom_ep4"
    },
    "date_choice_perfect_nurse": {
            "background": "assets/images/background/nurse_house.png",
            "character": "assets/images/characters/nurse_smile.png",
            "choices": [
                    {
                            "next": "date_perfect_nurse_home_1"
                    },
                    {
                            "next": "date_perfect_nurse_park_1"
                    }
            ]
    },
    "date_perfect_nurse_home_1": {
            "background": "assets/images/background/nurse_house.png",
            "character": "assets/images/characters/nurse_smile.png",
            "next": "date_perfect_nurse_home_2"
    },
    "date_perfect_nurse_home_2": {
            "background": "assets/images/background/nurse_house.png",
            "character": "assets/images/characters/nurse_smile.png",
            "next": "date_perfect_nurse_home_3"
    },
    "date_perfect_nurse_home_3": {
            "background": "assets/images/background/nurse_house.png",
            "character": "assets/images/characters/nurse_smile.png",
            "next": "hidden_perfect_nurse_ep4"
    },
    "date_perfect_nurse_park_1": {
            "background": "assets/images/background/park.png",
            "character": "assets/images/characters/nurse_smile.png",
            "next": "date_perfect_nurse_park_2"
    },
    "date_perfect_nurse_park_2": {
            "background": "assets/images/background/park.png",
            "character": "assets/images/characters/nurse_smile.png",
            "next": "date_perfect_nurse_park_3"
    },
    "date_perfect_nurse_park_3": {
            "background": "assets/images/background/park.png",
            "character": "assets/images/characters/nurse_smile.png",
            "next": "hidden_perfect_nurse_ep4"
    },
    "date_choice_true_seo": {
            "background": "assets/images/background/cafe.png",
            "character": "assets/images/characters/seyoun_shy.png",
            "choices": [
                    {
                            "next": "date_true_seo_1"
                    },
                    {
                            "next": "date_true_seo_alt_1"
                    }
            ]
    },
    "date_true_seo_1": {
            "background": "assets/images/background/cafe.png",
            "character": "assets/images/characters/seyoun_shy.png",
            "next": "date_true_seo_2"
    },
    "date_true_seo_2": {
            "background": "assets/images/background/cafe.png",
            "character": "assets/images/characters/seyoun_laugh.png",
            "next": "true_epilogue_2"
    },
    "date_true_seo_alt_1": {
            "background": "assets/images/background/top_school.png",
            "character": "assets/images/characters/seyoun_laugh.png",
            "next": "date_true_seo_alt_2"
    },
    "date_true_seo_alt_2": {
            "background": "assets/images/background/top_school.png",
            "character": "assets/images/characters/seyoun_laugh.png",
            "next": "true_epilogue_2"
    },
    "date_choice_true_yuna": {
            "background": "assets/images/background/bookstore.png",
            "character": "assets/images/characters/yuna_smile.png",
            "choices": [
                    {
                            "next": "date_true_yuna_book_1"
                    },
                    {
                            "next": "date_true_yuna_roof_1"
                    }
            ]
    },
    "date_true_yuna_book_1": {
            "background": "assets/images/background/bookstore.png",
            "character": "assets/images/characters/junho_normal.png",
            "next": "date_true_yuna_book_2"
    },
    "date_true_yuna_book_2": {
            "background": "assets/images/background/bookstore.png",
            "character": "assets/images/characters/yuna_smile.png",
            "next": "true_epilogue_2"
    },
    "date_true_yuna_roof_1": {
            "background": "assets/images/background/yuna_secret_rooftop.png",
            "character": "assets/images/characters/yuna_smile.png",
            "next": "date_true_yuna_roof_2"
    },
    "date_true_yuna_roof_2": {
            "background": "assets/images/background/yuna_secret_rooftop.png",
            "character": "assets/images/characters/yuna_smile.png",
            "next": "true_epilogue_2"
    },
    "date_choice_true_dain": {
            "background": "assets/images/background/gym.png",
            "character": "assets/images/characters/dain_laugh.png",
            "choices": [
                    {
                            "next": "date_true_dain_1"
                    },
                    {
                            "next": "date_true_dain_alt_1"
                    }
            ]
    },
    "date_true_dain_1": {
            "background": "assets/images/background/gym.png",
            "character": "assets/images/characters/dain_laugh.png",
            "next": "date_true_dain_2"
    },
    "date_true_dain_2": {
            "background": "assets/images/background/gym.png",
            "character": "assets/images/characters/dain_laugh.png",
            "next": "true_epilogue_2"
    },
    "date_true_dain_alt_1": {
            "background": "assets/images/background/dain_broadcast_booth.png",
            "character": "assets/images/characters/dain_laugh.png",
            "next": "date_true_dain_alt_2"
    },
    "date_true_dain_alt_2": {
            "background": "assets/images/background/dain_broadcast_booth.png",
            "character": "assets/images/characters/dain_laugh.png",
            "next": "true_epilogue_2"
    },
    "date_choice_true_teacher": {
            "background": "assets/images/background/cafe.png",
            "character": "assets/images/characters/teacher_smile.png",
            "choices": [
                    {
                            "next": "date_true_teacher_1"
                    },
                    {
                            "next": "date_true_teacher_alt_1"
                    }
            ]
    },
    "date_true_teacher_1": {
            "background": "assets/images/background/cafe.png",
            "character": "assets/images/characters/teacher_smile.png",
            "next": "date_true_teacher_2"
    },
    "date_true_teacher_2": {
            "background": "assets/images/background/cafe.png",
            "character": "assets/images/characters/teacher_smile.png",
            "next": "hidden_true_homeroom_ending_title"
    },
    "date_true_teacher_alt_1": {
            "background": "assets/images/background/museum.png",
            "character": "assets/images/characters/teacher_smile.png",
            "next": "date_true_teacher_alt_2"
    },
    "date_true_teacher_alt_2": {
            "background": "assets/images/background/museum.png",
            "character": "assets/images/characters/teacher_smile.png",
            "next": "hidden_true_homeroom_ending_title"
    },
    "date_choice_true_nurse": {
            "background": "assets/images/background/nurse_house.png",
            "character": "assets/images/characters/nurse_smile.png",
            "choices": [
                    {
                            "next": "date_true_nurse_1"
                    },
                    {
                            "next": "date_true_nurse_alt_1"
                    }
            ]
    },
    "date_true_nurse_1": {
            "background": "assets/images/background/nurse_house.png",
            "character": "assets/images/characters/nurse_smile.png",
            "next": "date_true_nurse_2"
    },
    "date_true_nurse_2": {
            "background": "assets/images/background/nurse_house.png",
            "character": "assets/images/characters/nurse_smile.png",
            "next": "hidden_true_nurse_ending_title"
    },
    "date_true_nurse_alt_1": {
            "background": "assets/images/background/park.png",
            "character": "assets/images/characters/nurse_smile.png",
            "next": "date_true_nurse_alt_2"
    },
    "date_true_nurse_alt_2": {
            "background": "assets/images/background/park.png",
            "character": "assets/images/characters/nurse_smile.png",
            "next": "hidden_true_nurse_ending_title"
    },
    "day5_main_ending_freetalk_router": {
        "background": "assets/images/background/park.png",
        "character": null,
        "routeBeforeRender": true,
        "branches": [
            { "condition": "route_seoyeon", "next": "day5_seo_ending_freetalk_intro" },
            { "condition": "route_yuna", "next": "day5_yuna_ending_freetalk_intro" },
            { "condition": "route_dain", "next": "day5_dain_ending_freetalk_intro" },
            { "next": "day5_credits" }
        ]
    },
    "day5_seo_ending_freetalk_intro": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "routeBeforeRender": true,
        "next": "day5_seo_ending_freetalk_router"
    },
    "day5_seo_ending_freetalk_router": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "routeBeforeRender": true,
        "branches": [
            { "condition": "ending_perfect", "next": "day5_seo_ending_freetalk_perfect" },
            { "condition": "ending_true_love", "next": "day5_seo_ending_freetalk_true_love" },
            { "condition": "ending_bittersweet", "next": "day5_seo_ending_freetalk_bittersweet" },
            { "condition": "day5_confessed", "next": "day5_seo_ending_freetalk_late_good" },
            { "next": "day5_seo_ending_freetalk_good" }
        ]
    },
    "day5_seo_ending_freetalk_perfect": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_seo_ending_freetalk_true_love": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_seo_ending_freetalk_good": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_seo_ending_freetalk_bittersweet": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_seo_ending_freetalk_late_good": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_yuna_ending_freetalk_intro": {
        "routeBeforeRender": true,
        "next": "day5_yuna_ending_freetalk_router"
    },
    "day5_yuna_ending_freetalk_router": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "routeBeforeRender": true,
        "branches": [
            { "condition": "ending_perfect", "next": "day5_yuna_ending_freetalk_perfect" },
            { "condition": "ending_true_love", "next": "day5_yuna_ending_freetalk_true_love" },
            { "condition": "ending_bittersweet", "next": "day5_yuna_ending_freetalk_bittersweet" },
            { "condition": "day5_confessed", "next": "day5_yuna_ending_freetalk_late_good" },
            { "next": "day5_yuna_ending_freetalk_good" }
        ]
    },
    "day5_yuna_ending_freetalk_perfect": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_smile.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_yuna_ending_freetalk_true_love": {
        "background": "assets/images/background/yuna_secret_rooftop.png",
        "character": "assets/images/characters/yuna_smile.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_yuna_ending_freetalk_good": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_yuna_ending_freetalk_bittersweet": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_sad.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_yuna_ending_freetalk_late_good": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_dain_ending_freetalk_intro": {
        "routeBeforeRender": true,
        "next": "day5_dain_ending_freetalk_router"
    },
    "day5_dain_ending_freetalk_router": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "routeBeforeRender": true,
        "branches": [
            { "condition": "ending_perfect", "next": "day5_dain_ending_freetalk_perfect" },
            { "condition": "ending_true_love", "next": "day5_dain_ending_freetalk_true_love" },
            { "condition": "ending_bittersweet", "next": "day5_dain_ending_freetalk_bittersweet" },
            { "condition": "day5_confessed", "next": "day5_dain_ending_freetalk_late_good" },
            { "next": "day5_dain_ending_freetalk_good" }
        ]
    },
    "day5_dain_ending_freetalk_perfect": {
        "background": "assets/images/background/dain_broadcast_booth.png",
        "character": "assets/images/characters/dain_laugh.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_dain_ending_freetalk_true_love": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_dain_ending_freetalk_good": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/dain_normal.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_dain_ending_freetalk_bittersweet": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_dain_ending_freetalk_late_good": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/dain_laugh.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_teacher_ending_freetalk_intro": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "routeBeforeRender": true,
        "next": "day5_teacher_ending_freetalk_router"
    },
    "day5_teacher_ending_freetalk_router": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "routeBeforeRender": true,
        "branches": [
            { "condition": "ending_perfect", "next": "day5_teacher_ending_freetalk_perfect" },
            { "condition": "ending_true_love", "next": "day5_teacher_ending_freetalk_true_love" },
            { "condition": "ending_bittersweet", "next": "day5_teacher_ending_freetalk_bittersweet" },
            { "next": "day5_teacher_ending_freetalk_good" }
        ]
    },
    "day5_teacher_ending_freetalk_perfect": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_smile.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_teacher_ending_freetalk_true_love": {
        "background": "assets/images/background/bookstore.png",
        "character": "assets/images/characters/teacher_smile.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_teacher_ending_freetalk_good": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_teacher_ending_freetalk_bittersweet": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_sad.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_nurse_ending_freetalk_intro": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "routeBeforeRender": true,
        "next": "day5_nurse_ending_freetalk_router"
    },
    "day5_nurse_ending_freetalk_router": {
        "background": "assets/images/background/nurse_house.png",
        "character": null,
        "routeBeforeRender": true,
        "branches": [
            { "condition": "ending_perfect", "next": "day5_nurse_ending_freetalk_perfect" },
            { "condition": "ending_true_love", "next": "day5_nurse_ending_freetalk_true_love" },
            { "condition": "ending_bittersweet", "next": "day5_nurse_ending_freetalk_bittersweet" },
            { "next": "day5_nurse_ending_freetalk_good" }
        ]
    },
    "day5_nurse_ending_freetalk_perfect": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_nurse_ending_freetalk_true_love": {
        "background": "assets/images/background/nurse_house.png",
        "character": "assets/images/characters/nurse_normal.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_nurse_ending_freetalk_good": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "day5_nurse_ending_freetalk_bittersweet": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "type": "free_talk",
        "affinityLocked": true,
        "maxTurns": 5,
        "next": "day5_credits",
        "isRemote": false
    },
    "forced_violation_day5_after_seoyeon": {
        "runtimeEntrypoint": true,
        "inheritVisualContext": true,
        "choices": [
            { "next": "forced_violation_day5_seoyeon_apologize" },
            { "next": "forced_violation_day5_seoyeon_excuse" }
        ]
    },
    "forced_violation_day5_seoyeon_apologize": {
        "inheritVisualContext": true,
        "next": "forced_violation_day5_resume"
    },
    "forced_violation_day5_seoyeon_excuse": {
        "inheritVisualContext": true,
        "next": "forced_violation_day5_resume"
    },
    "forced_violation_day5_after_yuna": {
        "runtimeEntrypoint": true,
        "inheritVisualContext": true,
        "choices": [
            { "next": "forced_violation_day5_yuna_apologize" },
            { "next": "forced_violation_day5_yuna_excuse" }
        ]
    },
    "forced_violation_day5_yuna_apologize": {
        "inheritVisualContext": true,
        "next": "forced_violation_day5_resume"
    },
    "forced_violation_day5_yuna_excuse": {
        "inheritVisualContext": true,
        "next": "forced_violation_day5_resume"
    },
    "forced_violation_day5_after_dain": {
        "runtimeEntrypoint": true,
        "inheritVisualContext": true,
        "choices": [
            { "next": "forced_violation_day5_dain_apologize" },
            { "next": "forced_violation_day5_dain_excuse" }
        ]
    },
    "forced_violation_day5_dain_apologize": {
        "inheritVisualContext": true,
        "next": "forced_violation_day5_resume"
    },
    "forced_violation_day5_dain_excuse": {
        "inheritVisualContext": true,
        "next": "forced_violation_day5_resume"
    },
    "forced_violation_day5_after_teacher": {
        "runtimeEntrypoint": true,
        "inheritVisualContext": true,
        "choices": [
            { "next": "forced_violation_day5_teacher_apologize" },
            { "next": "forced_violation_day5_teacher_excuse" }
        ]
    },
    "forced_violation_day5_teacher_apologize": {
        "inheritVisualContext": true,
        "next": "forced_violation_day5_resume"
    },
    "forced_violation_day5_teacher_excuse": {
        "inheritVisualContext": true,
        "next": "forced_violation_day5_resume"
    },
    "forced_violation_day5_after_nurse": {
        "runtimeEntrypoint": true,
        "inheritVisualContext": true,
        "choices": [
            { "next": "forced_violation_day5_nurse_apologize" },
            { "next": "forced_violation_day5_nurse_excuse" }
        ]
    },
    "forced_violation_day5_nurse_apologize": {
        "inheritVisualContext": true,
        "next": "forced_violation_day5_resume"
    },
    "forced_violation_day5_nurse_excuse": {
        "inheritVisualContext": true,
        "next": "forced_violation_day5_resume"
    },
    "forced_violation_day5_resume": {
        "routeBeforeRender": true,
        "forcedSexualViolationResume": true
    },
    "day5_credits": {
        "background": "assets/images/background/school.png",
        "character": null,
        "type": "credits",
        "next": "day5_ending_restart"
    },
    "day5_ending_restart": {
        "background": "assets/images/background/school.png",
        "character": null,
        "choices": [
            { "next": "index.html" }
        ]
    }
    };
    for (const scene of Object.values(scenes)) {
        if (scene && typeof scene === 'object') {
            Object.defineProperty(scene, "__sourceFile", {
                value: "day5_4_night",
                enumerable: false
            });
        }
    }
    Object.assign(SCENARIO[5], scenes);
})();
