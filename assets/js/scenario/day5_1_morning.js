/**
 * ============================================================================
 * CUPID - day5_1_morning
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

(() => {
    const scenes = {
    "morning5_start": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "bgm": "morning.mp3",
        "next": "morning5_start_branch"
    },
    "morning5_start_branch": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            { "condition": "day4_counteroffer_penalty_deferred", "next": "morning5_temptation_counteroffer_branch" },
            { "condition": "day4_confession_accepted", "next": "morning5_temptation_discovery_branch" },
            { "next": "morning5_start_b" }
        ]
    },
    "morning5_temptation_discovery_branch": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            { "condition": "day4_counteroffer_penalty_deferred", "next": "morning5_temptation_counteroffer_branch" },
            { "next": "morning5_committed_start" }
        ]
    },
    "morning5_temptation_counteroffer_branch": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            { "condition": "day4_counteroffer_target_teacher", "next": "morning5_caught_teacher_counteroffer" },
            { "condition": "day4_counteroffer_target_nurse", "next": "morning5_caught_nurse_counteroffer" },
            { "condition": "day4_took_seoyeon_counteroffer", "next": "morning5_caught_by_seoyeon_route" },
            { "condition": "day4_took_yuna_counteroffer", "next": "morning5_caught_by_yuna_route" },
            { "condition": "day4_took_dain_counteroffer", "next": "morning5_caught_by_dain_route" },
            { "next": "morning5_committed_start" }
        ]
    },
    "morning5_caught_teacher_counteroffer": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_sad.png",
        "choices": [
            { "next": "morning5_caught_teacher_honest", "stats": {"Teacher":{"affinity":-40}}, "setFlags": ["day5_confessed_counteroffer", "day5_abandoned_teacher"] },
            { "next": "morning5_caught_teacher_lie", "stats": {"Teacher":{"affinity":-50}}, "setFlags": ["day5_lied_about_counteroffer", "day5_abandoned_teacher"] }
        ]
    },
    "morning5_caught_nurse_counteroffer": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_worried.png",
        "choices": [
            { "next": "morning5_caught_nurse_honest", "stats": {"Nurse":{"affinity":-40}}, "setFlags": ["day5_confessed_counteroffer", "day5_abandoned_nurse"] },
            { "next": "morning5_caught_nurse_lie", "stats": {"Nurse":{"affinity":-50}}, "setFlags": ["day5_lied_about_counteroffer", "day5_abandoned_nurse"] }
        ]
    },
    "morning5_caught_teacher_honest": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "morning5_counteroffer_group_talk"
    },
    "morning5_caught_teacher_lie": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_angry.png",
        "next": "morning5_counteroffer_group_talk"
    },
    "morning5_caught_nurse_honest": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_worried.png",
        "next": "morning5_counteroffer_group_talk"
    },
    "morning5_caught_nurse_lie": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_angry.png",
        "next": "morning5_counteroffer_group_talk"
    },
    "morning5_caught_by_seoyeon_route": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            { "condition": "route_dain", "next": "morning5_caught_dain_by_seoyeon" },
            { "condition": "route_yuna", "next": "morning5_caught_yuna_by_seoyeon" },
            { "next": "morning5_committed_start" }
        ]
    },
    "morning5_caught_by_yuna_route": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            { "condition": "route_seoyeon", "next": "morning5_caught_seoyeon_by_yuna" },
            { "condition": "route_dain", "next": "morning5_caught_dain_by_yuna" },
            { "next": "morning5_committed_start" }
        ]
    },
    "morning5_caught_by_dain_route": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            { "condition": "route_seoyeon", "next": "morning5_caught_seoyeon_by_dain" },
            { "condition": "route_yuna", "next": "morning5_caught_yuna_by_dain" },
            { "next": "morning5_committed_start" }
        ]
    },
    "morning5_caught_seoyeon_by_dain": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "choices": [
            { "next": "morning5_caught_seoyeon_honest", "stats": {"Seoyeon":{"affinity":-40}}, "setFlags": ["day5_confessed_counteroffer", "day5_abandoned_seoyeon"] },
            { "next": "morning5_caught_seoyeon_lie", "stats": {"Seoyeon":{"affinity":-50}}, "setFlags": ["day5_lied_about_counteroffer", "day5_abandoned_seoyeon"] }
        ]
    },
    "morning5_caught_seoyeon_by_yuna": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "choices": [
            { "next": "morning5_caught_seoyeon_honest", "stats": {"Seoyeon":{"affinity":-40}}, "setFlags": ["day5_confessed_counteroffer", "day5_abandoned_seoyeon"] },
            { "next": "morning5_caught_seoyeon_lie", "stats": {"Seoyeon":{"affinity":-50}}, "setFlags": ["day5_lied_about_counteroffer", "day5_abandoned_seoyeon"] }
        ]
    },
    "morning5_caught_dain_by_seoyeon": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_sad.png",
        "choices": [
            { "next": "morning5_caught_dain_honest", "stats": {"Dain":{"affinity":-40}}, "setFlags": ["day5_confessed_counteroffer", "day5_abandoned_dain"] },
            { "next": "morning5_caught_dain_lie", "stats": {"Dain":{"affinity":-50}}, "setFlags": ["day5_lied_about_counteroffer", "day5_abandoned_dain"] }
        ]
    },
    "morning5_caught_dain_by_yuna": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_sad.png",
        "choices": [
            { "next": "morning5_caught_dain_honest", "stats": {"Dain":{"affinity":-40}}, "setFlags": ["day5_confessed_counteroffer", "day5_abandoned_dain"] },
            { "next": "morning5_caught_dain_lie", "stats": {"Dain":{"affinity":-50}}, "setFlags": ["day5_lied_about_counteroffer", "day5_abandoned_dain"] }
        ]
    },
    "morning5_caught_yuna_by_seoyeon": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/yuna_sad.png",
        "choices": [
            { "next": "morning5_caught_yuna_honest", "stats": {"Yuna":{"affinity":-40}}, "setFlags": ["day5_confessed_counteroffer", "day5_abandoned_yuna"] },
            { "next": "morning5_caught_yuna_lie", "stats": {"Yuna":{"affinity":-50}}, "setFlags": ["day5_lied_about_counteroffer", "day5_abandoned_yuna"] }
        ]
    },
    "morning5_caught_yuna_by_dain": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/yuna_sad.png",
        "choices": [
            { "next": "morning5_caught_yuna_honest", "stats": {"Yuna":{"affinity":-40}}, "setFlags": ["day5_confessed_counteroffer", "day5_abandoned_yuna"] },
            { "next": "morning5_caught_yuna_lie", "stats": {"Yuna":{"affinity":-50}}, "setFlags": ["day5_lied_about_counteroffer", "day5_abandoned_yuna"] }
        ]
    },
    "morning5_caught_seoyeon_honest": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "morning5_counteroffer_group_talk"
    },
    "morning5_caught_seoyeon_lie": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "morning5_counteroffer_group_talk"
    },
    "morning5_caught_dain_honest": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "morning5_counteroffer_group_talk"
    },
    "morning5_caught_dain_lie": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "morning5_counteroffer_group_talk"
    },
    "morning5_caught_yuna_honest": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "morning5_counteroffer_group_talk"
    },
    "morning5_caught_yuna_lie": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "cold",
        "character": "assets/images/characters/yuna_angry.png",
        "next": "morning5_counteroffer_group_talk"
    },
    "morning5_counteroffer_group_talk": {
        "background": "assets/images/background/room_school.png",
        "type": "group_free_talk",
        "groupParticipants": "counteroffer_confrontation",
        "maxTurns": 3,
        "next": "morning5_after_counteroffer"
    },
    "morning5_after_counteroffer": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning5_after_counteroffer_hidden_check"
    },
    "morning5_after_counteroffer_hidden_check": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "routeBeforeRender": true,
        "branches": [
            { "condition": "day4_counteroffer_target_teacher", "next": "hidden_nurse_d5_after_co_check" },
            { "condition": "homeroom_day4", "next": "hidden_homeroom_d5_1" },
            { "next": "hidden_nurse_d5_after_co_check" }
        ]
    },
    "hidden_nurse_d5_after_co_check": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "routeBeforeRender": true,
        "branches": [
            { "condition": "day4_counteroffer_target_nurse", "next": "morning5_end_branch" },
            { "condition": "nurse_day4", "next": "hidden_nurse_d5_1" },
            { "next": "morning5_end_branch" }
        ]
    },
    "morning5_start_b": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning5_start_2_b"
    },
    "morning5_start_2_b": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning5_mood_check"
    },
    "morning5_mood_check": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "affinityChar": "selectByHighestAffinity",
        "affinityCandidates": ["Seoyeon","Yuna","Dain","Teacher","Nurse"],
        "affinityBranches": [{"minAffinity":80,"next":"morning5_mood_high"},{"minAffinity":50,"next":"morning5_mood_mid"},{"minAffinity":-100,"next":"morning5_mood_low"}],
        "next": "morning5_mood_low"
    },
    "morning5_mood_high": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning5_gate"
    },
    "morning5_mood_mid": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning5_gate"
    },
    "morning5_mood_low": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning5_gate"
    },
    "morning5_gate": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "morning5_seo_note_1"
    },
    "morning5_seo_note_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning5_seo_note_1_b"
    },
    "morning5_seo_note_1_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "branches": [
            { "condition": "yuna_trust_broken", "next": "morning5_yuna_story_gone" },
            { "next": "morning5_seo_note_1_c" }
        ]
    },
    "morning5_yuna_story_gone": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "morning5_yuna_story_gone_2"
    },
    "morning5_yuna_story_gone_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "morning5_return_class"
    },
    "morning5_seo_note_1_c": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "morning5_yuna_story_1"
    },
    "morning5_yuna_story_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "morning5_yuna_story_2"
    },
    "morning5_yuna_story_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "morning5_yuna_story_4"
    },
    "morning5_yuna_story_4": {
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
        "next": "morning5_dain_1_b"
    },
    "morning5_dain_1_b": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning5_dain_2"
    },
    "morning5_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "hidden_homeroom_d5_check"
    },
    "morning5_committed_start": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            { "condition": "route_seoyeon", "next": "morning5_committed_seo" },
            { "condition": "route_yuna", "next": "morning5_committed_yuna" },
            { "condition": "route_dain", "next": "morning5_committed_dain" },
            { "next": "hidden_homeroom_d5_check" }
        ]
    },
    "morning5_committed_seo": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hidden_homeroom_d5_check"
    },
    "morning5_committed_yuna": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "hidden_homeroom_d5_check"
    },
    "morning5_committed_dain": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "hidden_homeroom_d5_check"
    },
    "hidden_homeroom_d5_check": {
        "background": "assets/images/background/school_hallway.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "branches": [
            { "condition": "homeroom_day4", "next": "hidden_homeroom_d5_1" },
            { "next": "hidden_nurse_d5_check" }
        ]
    },
    "hidden_homeroom_d5_1": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_sad.png",
        "affinityGuard": {"character":"Teacher","minAffinity":15,"fallback":"hidden_homeroom_d5_low"},
        "next": "hidden_homeroom_d5_1_b"
    },
    "hidden_homeroom_d5_1_b": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_1_c"
    },
    "hidden_homeroom_d5_1_c": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_1_d"
    },
    "hidden_homeroom_d5_1_d": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_1_e"
    },
    "hidden_homeroom_d5_1_e": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_2"
    },
    "hidden_homeroom_d5_2": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d5_3"
    },
    "hidden_homeroom_d5_3": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_4"
    },
    "hidden_homeroom_d5_4": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d5_5"
    },
    "hidden_homeroom_d5_5": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_choice"
    },
    "hidden_homeroom_d5_choice": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_sad.png",
        "choices": [
            { "next": "hidden_homeroom_d5_praise_trap_1", "stats": {"Teacher":{"affinity":-25}}, "setFlags": ["teacher_praise_broken"] },
            { "next": "hidden_homeroom_d5_correct_1", "stats": {"Teacher":{"affinity":11}} }
        ]
    },
    "hidden_homeroom_d5_praise_trap_1": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_praise_trap_2"
    },
    "hidden_homeroom_d5_praise_trap_2": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_praise_trap_3"
    },
    "hidden_homeroom_d5_praise_trap_3": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_praise_trap_4"
    },
    "hidden_homeroom_d5_praise_trap_4": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d5_praise_trap_5"
    },
    "hidden_homeroom_d5_praise_trap_5": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d5_praise_trap_6"
    },
    "hidden_homeroom_d5_praise_trap_6": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_praise_trap_7"
    },
    "hidden_homeroom_d5_praise_trap_7": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_praise_trap_8"
    },
    "hidden_homeroom_d5_praise_trap_8": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_praise_trap_9"
    },
    "hidden_homeroom_d5_praise_trap_9": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d5_praise_trap_10"
    },
    "hidden_homeroom_d5_praise_trap_10": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_sad.png",
        "next": "hidden_homeroom_d5_praise_trap_11"
    },
    "hidden_homeroom_d5_praise_trap_11": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_praise_trap_12"
    },
    "hidden_homeroom_d5_praise_trap_12": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": null,
        "setFlags": ["homeroom_day5","teacher_praise_broken"],
        "next": "hidden_nurse_d5_check"
    },
    "hidden_homeroom_d5_correct_1": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_correct_2"
    },
    "hidden_homeroom_d5_correct_2": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_correct_3"
    },
    "hidden_homeroom_d5_correct_3": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_correct_4"
    },
    "hidden_homeroom_d5_correct_4": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_correct_5"
    },
    "hidden_homeroom_d5_correct_5": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_correct_6"
    },
    "hidden_homeroom_d5_correct_6": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d5_correct_7"
    },
    "hidden_homeroom_d5_correct_7": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d5_correct_8"
    },
    "hidden_homeroom_d5_correct_8": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d5_correct_9"
    },
    "hidden_homeroom_d5_correct_9": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_correct_10"
    },
    "hidden_homeroom_d5_correct_10": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d5_correct_11"
    },
    "hidden_homeroom_d5_correct_11": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d5_correct_12"
    },
    "hidden_homeroom_d5_correct_12": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d5_correct_13"
    },
    "hidden_homeroom_d5_correct_13": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d5_correct_14"
    },
    "hidden_homeroom_d5_correct_14": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": null,
        "setFlags": ["teacher_truth_seen"],
        "next": "hidden_homeroom_d5_6"
    },
    "hidden_homeroom_d5_6": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_b"
    },
    "hidden_homeroom_d5_6_b": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_c"
    },
    "hidden_homeroom_d5_6_c": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d5_6_d"
    },
    "hidden_homeroom_d5_6_d": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_e"
    },
    "hidden_homeroom_d5_6_e": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_f"
    },
    "hidden_homeroom_d5_6_f": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_g"
    },
    "hidden_homeroom_d5_6_g": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d5_6_h"
    },
    "hidden_homeroom_d5_6_h": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d5_6_i"
    },
    "hidden_homeroom_d5_6_i": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_j"
    },
    "hidden_homeroom_d5_6_j": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_shy.png",
        "next": "hidden_homeroom_d5_6_k"
    },
    "hidden_homeroom_d5_6_k": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_l"
    },
    "hidden_homeroom_d5_6_l": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_m"
    },
    "hidden_homeroom_d5_6_m": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d5_6_n"
    },
    "hidden_homeroom_d5_6_n": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d5_6_o"
    },
    "hidden_homeroom_d5_6_o": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_smile.png",
        "next": "hidden_homeroom_d5_6_p"
    },
    "hidden_homeroom_d5_6_p": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_q"
    },
    "hidden_homeroom_d5_6_q": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_r"
    },
    "hidden_homeroom_d5_6_r": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_s"
    },
    "hidden_homeroom_d5_6_s": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_6_t"
    },
    "hidden_homeroom_d5_6_t": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_7"
    },
    "hidden_homeroom_d5_7": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_7_b"
    },
    "hidden_homeroom_d5_7_b": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_7_c"
    },
    "hidden_homeroom_d5_7_c": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d5_8"
    },
    "hidden_homeroom_d5_8": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlags": ["homeroom_day5"],
        "stats": {"Teacher":{"affinity":15}},
        "next": "hidden_homeroom_d5_freetalk"
    },
    "hidden_homeroom_d5_freetalk": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_nurse_d5_check"
    },
    "hidden_nurse_d5_check": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "branches": [
            { "condition": "nurse_day4", "next": "hidden_nurse_d5_1" },
            { "next": "morning5_end_branch" }
        ]
    },
    "hidden_nurse_d5_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "affinityGuard": {"character":"Nurse","minAffinity":15,"fallback":"hidden_nurse_d5_low"},
        "next": "hidden_nurse_d5_1_b"
    },
    "hidden_nurse_d5_1_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_1_c"
    },
    "hidden_nurse_d5_1_c": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_1_d"
    },
    "hidden_nurse_d5_1_d": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_1_e"
    },
    "hidden_nurse_d5_1_e": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_1_f"
    },
    "hidden_nurse_d5_1_f": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_2_b"
    },
    "hidden_nurse_d5_2_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_2_c"
    },
    "hidden_nurse_d5_2_c": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_3"
    },
    "hidden_nurse_d5_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_3_b"
    },
    "hidden_nurse_d5_3_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_3_c"
    },
    "hidden_nurse_d5_3_c": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_3_d"
    },
    "hidden_nurse_d5_3_d": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_3_e"
    },
    "hidden_nurse_d5_3_e": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_3_f"
    },
    "hidden_nurse_d5_3_f": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_3_g"
    },
    "hidden_nurse_d5_3_g": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_3_h"
    },
    "hidden_nurse_d5_3_h": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_angry.png",
        "next": "hidden_nurse_d5_3_i"
    },
    "hidden_nurse_d5_3_i": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_4"
    },
    "hidden_nurse_d5_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_4_b"
    },
    "hidden_nurse_d5_4_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_4_c"
    },
    "hidden_nurse_d5_4_c": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_4_d"
    },
    "hidden_nurse_d5_4_d": {
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
            { "next": "hidden_nurse_d5_choice_a", "stats": {"Nurse":{"affinity":7}} },
            { "next": "hidden_nurse_d5_choice_b", "stats": {"Nurse":{"affinity":4}} },
            { "next": "hidden_nurse_d5_choice_trap", "stats": {"Nurse":{"affinity":-6}} }
        ]
    },
    "hidden_nurse_d5_choice_a": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_choice_a_b"
    },
    "hidden_nurse_d5_choice_a_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_6"
    },
    "hidden_nurse_d5_choice_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_choice_b_b"
    },
    "hidden_nurse_d5_choice_trap": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_choice_b_b"
    },
    "hidden_nurse_d5_choice_b_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_choice_b_c"
    },
    "hidden_nurse_d5_choice_b_c": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_choice_b_d"
    },
    "hidden_nurse_d5_choice_b_d": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_choice_b_e"
    },
    "hidden_nurse_d5_choice_b_e": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_angry.png",
        "next": "hidden_nurse_d5_choice_b_f"
    },
    "hidden_nurse_d5_choice_b_f": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_choice_b_g"
    },
    "hidden_nurse_d5_choice_b_g": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_6"
    },
    "hidden_nurse_d5_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_6_b"
    },
    "hidden_nurse_d5_6_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_6_c"
    },
    "hidden_nurse_d5_6_c": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d5_flag_check"
    },
    "hidden_nurse_d5_flag_check": {
        "background": "assets/images/background/school_hallway.png",
        "branches": [
            { "condition": "homeroom_day5", "next": "hidden_nurse_d5_7_both" },
            { "next": "hidden_nurse_d5_7" }
        ]
    },
    "hidden_nurse_d5_7": {
        "background": "assets/images/background/school_hallway.png",
        "setFlags": ["nurse_day5"],
        "stats": {"Nurse":{"affinity":15}},
        "next": "hidden_nurse_d5_freetalk"
    },
    "hidden_nurse_d5_7_both": {
        "background": "assets/images/background/school_hallway.png",
        "setFlags": ["nurse_day5","both_hidden_day5"],
        "stats": {"Nurse":{"affinity":15}},
        "next": "hidden_nurse_d5_freetalk"
    },
    "hidden_nurse_d5_freetalk": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "morning5_end_branch"
    },
    "morning5_end_branch": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning5_sojeong_1"
    },
    "morning5_sojeong_1": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": null,
        "next": "morning5_sojeong_2"
    },
    "morning5_sojeong_2": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": null,
        "next": "morning5_sojeong_3"
    },
    "morning5_sojeong_3": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": null,
        "next": "morning5_sojeong_4"
    },
    "morning5_sojeong_4": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": null,
        "setFlags": ["sojeong_apology_sent"],
        "next": "morning5_sojeong_5"
    },
    "morning5_sojeong_5": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": null,
        "next": "morning5_route_branch"
    },
    "morning5_route_branch": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "routeBeforeRender": true,
        "branches": [
            { "condition": "day4_counteroffer_penalty_deferred", "next": "tour_co_branch" },
            { "condition": "day4_confession_accepted", "next": "morning5_committed_end" },
            { "next": "morning5_end" }
        ]
    },
    "morning5_end": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            { "condition": "day4_counteroffer_penalty_deferred", "next": "tour_co_branch" },
            { "condition": "route_dain", "next": "tour_dain_1_check" },
            { "condition": "route_yuna", "next": "tour_yuna_1_check" },
            { "condition": "route_seoyeon", "next": "tour_seo_1" },
            { "next": "tour_seo_1" }
        ]
    },
    "morning5_committed_end": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            { "condition": "day4_counteroffer_penalty_deferred", "next": "tour_co_branch" },
            { "condition": "route_dain", "next": "tour_dain_1_check" },
            { "condition": "route_yuna", "next": "tour_yuna_1_check" },
            { "condition": "route_seoyeon", "next": "tour_seo_1" },
            { "next": "tour_seo_1" }
        ]
    },
    "hidden_homeroom_d5_low": {
        "background": "assets/images/background/room_school.png",
        "backgroundVariant": "empty",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_nurse_d5_check"
    },
    "hidden_nurse_d5_low": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "morning5_end_branch"
    }
    };
    for (const scene of Object.values(scenes)) {
        if (scene && typeof scene === 'object') {
            Object.defineProperty(scene, "__sourceFile", {
                value: "day5_1_morning",
                enumerable: false
            });
        }
    }
    Object.assign(SCENARIO[5], scenes);
})();
