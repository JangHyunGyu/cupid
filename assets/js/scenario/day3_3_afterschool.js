/**
 * ============================================================================
 * CUPID - day3_3_afterschool
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[3]) SCENARIO[3] = {};

(() => {
    const scenes = {
    "after3_start": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "bgm": "sunset1.mp3",
        "next": "after3_route_check"
    },
    "after3_route_check": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "branches": [
            { "condition": "day3_has_multiple_dates", "next": "after3_multi_choice" },
            { "condition": "accepted_dain_date", "next": "after3_auto_dain" },
            { "condition": "accepted_yuna_date", "next": "after3_auto_yuna" },
            { "condition": "accepted_seoyeon_date", "next": "after3_auto_seo" },
            { "next": "after3_choice" }
        ]
    },
    "after3_auto_dain": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "setFlags": ["route_dain"],
        "next": "after3_reject_for_dain_1"
    },
    "after3_auto_yuna": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "setFlags": ["route_yuna"],
        "next": "after3_reject_for_yuna_1"
    },
    "after3_auto_seo": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "setFlags": ["route_seoyeon"],
        "next": "after3_reject_for_seo_1"
    },
    "after3_multi_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "choices": [
            { "next": "after3_reject_for_seo_1", "setFlags": ["route_seoyeon"] },
            { "next": "after3_reject_for_yuna_1", "setFlags": ["route_yuna"] },
            { "next": "after3_reject_for_dain_1", "setFlags": ["route_dain"] },
            { "next": "after3_choice" }
        ]
    },
    "after3_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "choices": [
            { "next": "after3_reject_for_seo_1", "setFlags": ["route_seoyeon"] },
            { "next": "after3_reject_for_yuna_1", "setFlags": ["route_yuna"] },
            { "next": "after3_reject_for_dain_1", "setFlags": ["route_dain"] }
        ]
    },
    "after3_reject_for_seo_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_reject_for_seo_2"
    },
    "after3_reject_for_seo_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_reject_for_seo_3"
    },
    "after3_reject_for_seo_3": {
        "background": "assets/images/background/library_old.png",
        "backgroundVariant": "empty",
        "characters": {"center":{"src":"assets/images/characters/yuna_sad.png","opacity":0.35}},
        "next": "after3_reject_for_seo_3b"
    },
    "after3_reject_for_seo_3b": {
        "background": "assets/images/background/library_old.png",
        "character": null,
        "next": "after3_reject_for_seo_3c"
    },
    "after3_reject_for_seo_3c": {
        "background": "assets/images/background/library_old.png",
        "character": null,
        "setFlags": ["yuna_trust_broken"],
        "next": "after3_reject_for_seo_4"
    },
    "after3_reject_for_seo_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after3_seo_1"
    },
    "after3_seo_1": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "bgm": "sunset1.mp3",
        "next": "after3_seo_3"
    },
    "after3_seo_3": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_4"
    },
    "after3_seo_4": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_5"
    },
    "after3_seo_5": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_5_b"
    },
    "after3_seo_5_b": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_seo_6"
    },
    "after3_seo_6": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_7"
    },
    "after3_seo_7": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_7_b"
    },
    "after3_seo_7_b": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_8"
    },
    "after3_seo_8": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_9"
    },
    "after3_seo_9": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_choice"
    },
    "after3_seo_choice": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "choices": [
            { "next": "after3_seo_pity_trap_1", "stats": {"Seoyeon":{"affinity":-18}}, "setFlags": ["seo_pity_broken"] },
            { "next": "after3_seo_correct_1", "stats": {"Seoyeon":{"affinity":18}} }
        ]
    },
    "after3_seo_pity_trap_1": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_pity_trap_2"
    },
    "after3_seo_pity_trap_2": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_pity_trap_3"
    },
    "after3_seo_pity_trap_3": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_pity_trap_4"
    },
    "after3_seo_pity_trap_4": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_pity_trap_5"
    },
    "after3_seo_pity_trap_5": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_seo_pity_trap_6"
    },
    "after3_seo_pity_trap_6": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_worried.png",
        "next": "after3_seo_pity_trap_7"
    },
    "after3_seo_pity_trap_7": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_worried.png",
        "next": "after3_seo_pity_trap_8"
    },
    "after3_seo_pity_trap_8": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_worried.png",
        "next": "after3_seo_pity_trap_9"
    },
    "after3_seo_pity_trap_9": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_worried.png",
        "next": "after3_seo_pity_trap_10"
    },
    "after3_seo_pity_trap_10": {
        "background": "assets/images/background/student_room.png",
        "character": null,
        "setFlags": ["seoyeon_day3_event","seo_pity_broken"],
        "next": "after3_seo_end"
    },
    "after3_seo_correct_1": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_seo_correct_2"
    },
    "after3_seo_correct_2": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_worried.png",
        "next": "after3_seo_correct_3"
    },
    "after3_seo_correct_3": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_seo_correct_4"
    },
    "after3_seo_correct_4": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_worried.png",
        "next": "after3_seo_correct_5"
    },
    "after3_seo_correct_5": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_seo_correct_6"
    },
    "after3_seo_correct_6": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_seo_correct_7"
    },
    "after3_seo_correct_7": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "after3_seo_correct_8"
    },
    "after3_seo_correct_8": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_pout.png",
        "next": "after3_seo_correct_9"
    },
    "after3_seo_correct_9": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_seo_correct_10"
    },
    "after3_seo_correct_10": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_seo_correct_11"
    },
    "after3_seo_correct_11": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "after3_seo_correct_12"
    },
    "after3_seo_correct_12": {
        "background": "assets/images/background/student_room.png",
        "character": null,
        "setFlags": ["seoyeon_day3_event","seo_trust_deep"],
        "next": "after3_seo_freetalk"
    },
    "after3_seo_freetalk": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "type": "free_talk",
        "maxTurns": 3,
        "next": "after3_seo_end"
    },
    "after3_seo_end": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "branches": [
            { "condition": "harem_seed", "next": "after3_final" },
            { "condition": "day3_has_multiple_dates", "next": "after3_confront_1" },
            { "next": "after3_final" }
        ]
    },
    "after3_reject_for_yuna_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_reject_for_yuna_2"
    },
    "after3_reject_for_yuna_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_reject_for_yuna_walk_gym"
    },
    "after3_reject_for_yuna_walk_gym": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "next": "after3_reject_for_yuna_3"
    },
    "after3_reject_for_yuna_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_reject_for_yuna_3_dain"
    },
    "after3_reject_for_yuna_3_dain": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_reject_for_yuna_3_react"
    },
    "after3_reject_for_yuna_3_react": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_reject_for_yuna_4"
    },
    "after3_reject_for_yuna_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after3_yuna_1"
    },
    "after3_yuna_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "bgm": "night1.mp3",
        "next": "after3_yuna_2"
    },
    "after3_yuna_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "next": "after3_yuna_4"
    },
    "after3_yuna_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "next": "after3_yuna_5_b"
    },
    "after3_yuna_5_b": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after3_yuna_6"
    },
    "after3_yuna_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after3_yuna_7"
    },
    "after3_yuna_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after3_yuna_8"
    },
    "after3_yuna_8": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_8b"
    },
    "after3_yuna_8b": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_9"
    },
    "after3_yuna_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_choice"
    },
    "after3_yuna_choice": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "choices": [
            { "next": "after3_yuna_decode_trap_1", "stats": {"Yuna":{"affinity":-22}}, "setFlags": ["yuna_safe_zone_broken"] },
            { "next": "after3_yuna_correct_1", "stats": {"Yuna":{"affinity":20}} }
        ]
    },
    "after3_yuna_decode_trap_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_decode_trap_2"
    },
    "after3_yuna_decode_trap_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after3_yuna_decode_trap_3"
    },
    "after3_yuna_decode_trap_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after3_yuna_decode_trap_4"
    },
    "after3_yuna_decode_trap_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "after3_yuna_decode_trap_5"
    },
    "after3_yuna_decode_trap_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "after3_yuna_decode_trap_6"
    },
    "after3_yuna_decode_trap_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "after3_yuna_decode_trap_7"
    },
    "after3_yuna_decode_trap_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "after3_yuna_decode_trap_8"
    },
    "after3_yuna_decode_trap_8": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "after3_yuna_decode_trap_9"
    },
    "after3_yuna_decode_trap_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "after3_yuna_decode_trap_10"
    },
    "after3_yuna_decode_trap_10": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "after3_yuna_decode_trap_11"
    },
    "after3_yuna_decode_trap_11": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "setFlags": ["yuna_day3_event","yuna_safe_zone_broken"],
        "next": "after3_yuna_end"
    },
    "after3_yuna_correct_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after3_yuna_correct_2"
    },
    "after3_yuna_correct_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after3_yuna_correct_3"
    },
    "after3_yuna_correct_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after3_yuna_correct_4"
    },
    "after3_yuna_correct_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_correct_5"
    },
    "after3_yuna_correct_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_correct_6"
    },
    "after3_yuna_correct_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after3_yuna_correct_7"
    },
    "after3_yuna_correct_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_correct_8"
    },
    "after3_yuna_correct_8": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_correct_9"
    },
    "after3_yuna_correct_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "after3_yuna_correct_10"
    },
    "after3_yuna_correct_10": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "after3_yuna_correct_11"
    },
    "after3_yuna_correct_11": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after3_yuna_correct_12"
    },
    "after3_yuna_correct_12": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_smile.png",
        "setFlags": ["yuna_day3_event","yuna_trust_deep"],
        "next": "after3_yuna_freetalk"
    },
    "after3_yuna_freetalk": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "type": "free_talk",
        "maxTurns": 3,
        "next": "after3_yuna_end"
    },
    "after3_yuna_end": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "branches": [
            { "condition": "harem_seed", "next": "after3_final" },
            { "condition": "day3_has_multiple_dates", "next": "after3_confront_1" },
            { "next": "after3_final" }
        ]
    },
    "after3_reject_for_dain_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_reject_for_dain_2"
    },
    "after3_reject_for_dain_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after3_reject_for_dain_2b"
    },
    "after3_reject_for_dain_2b": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "next": "after3_reject_for_dain_3"
    },
    "after3_reject_for_dain_3": {
        "background": "assets/images/background/library_old.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "after3_reject_for_dain_3b"
    },
    "after3_reject_for_dain_3b": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "after3_dain_1"
    },
    "after3_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "bgm": "daily2.mp3",
        "next": "after3_dain_3"
    },
    "after3_dain_3": {
        "background": "assets/images/background/dain_hurt_event1.png",
        "character": null,
        "next": "after3_dain_4"
    },
    "after3_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "next": "after3_dain_5"
    },
    "after3_dain_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "next": "after3_dain_5_b"
    },
    "after3_dain_5_b": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "next": "after3_dain_6"
    },
    "after3_dain_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_choice"
    },
    "after3_dain_choice": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "choices": [
            { "next": "after3_dain_pity_trap_1", "stats": {"Dain":{"affinity":-20}}, "setFlags": ["pitied_dain"] },
            { "next": "after3_dain_correct_1", "stats": {"Dain":{"affinity":18}} }
        ]
    },
    "after3_dain_pity_trap_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_pity_trap_2"
    },
    "after3_dain_pity_trap_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_pity_trap_3"
    },
    "after3_dain_pity_trap_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "after3_dain_pity_trap_4"
    },
    "after3_dain_pity_trap_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "after3_dain_pity_trap_5"
    },
    "after3_dain_pity_trap_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_pity_trap_6"
    },
    "after3_dain_pity_trap_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_pity_trap_7"
    },
    "after3_dain_pity_trap_7": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_pity_trap_8"
    },
    "after3_dain_pity_trap_8": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_pity_trap_9"
    },
    "after3_dain_pity_trap_9": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_pity_trap_10"
    },
    "after3_dain_pity_trap_10": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "setFlags": ["dain_day3_event","dain_pity_broken"],
        "next": "after3_dain_end_check"
    },
    "after3_dain_correct_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_correct_2"
    },
    "after3_dain_correct_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after3_dain_correct_3"
    },
    "after3_dain_correct_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after3_dain_correct_4"
    },
    "after3_dain_correct_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after3_dain_correct_5"
    },
    "after3_dain_correct_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after3_dain_correct_6"
    },
    "after3_dain_correct_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after3_dain_correct_7"
    },
    "after3_dain_correct_7": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_correct_8"
    },
    "after3_dain_correct_8": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after3_dain_correct_9"
    },
    "after3_dain_correct_9": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "next": "after3_dain_correct_10"
    },
    "after3_dain_correct_10": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after3_dain_correct_11"
    },
    "after3_dain_correct_11": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "next": "after3_dain_correct_12"
    },
    "after3_dain_correct_12": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_dilemma_tell"
    },
    "after3_dain_dilemma_tell": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after3_dain_dilemma_tell_2"
    },
    "after3_dain_dilemma_tell_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_dilemma_tell_3"
    },
    "after3_dain_dilemma_tell_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_dilemma_tell_4"
    },
    "after3_dain_dilemma_tell_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_dilemma_tell_5"
    },
    "after3_dain_dilemma_tell_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_dilemma_tell_6"
    },
    "after3_dain_dilemma_tell_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "after3_dain_dilemma_tell_7"
    },
    "after3_dain_dilemma_tell_7": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "after3_dain_dilemma_tell_8"
    },
    "after3_dain_dilemma_tell_8": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_dilemma_final"
    },
    "after3_dain_dilemma_final": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "choices": [
            { "next": "after3_dain_tell_confirm", "stats": {"Dain":{"affinity":-20}}, "setFlags": ["told_about_dain_knee"] },
            { "next": "after3_dain_tell_retreat", "stats": {"Dain":{"affinity":5}}, "setFlags": ["ignored_dain_knee"] }
        ]
    },
    "after3_dain_tell_confirm": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "after3_dain_tell_confirm_2"
    },
    "after3_dain_tell_confirm_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_angry.png",
        "next": "after3_dain_tell_confirm_3"
    },
    "after3_dain_tell_confirm_3": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "setFlags": ["dain_day3_event"],
        "next": "after3_dain_end_check"
    },
    "after3_dain_tell_retreat": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_choice1"
    },
    "after3_dain_choice1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_choice1_2"
    },
    "after3_dain_choice1_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_dain_choice1_3"
    },
    "after3_dain_choice1_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after3_dain_choice1_react"
    },
    "after3_dain_choice1_react": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after3_dain_choice1_react2"
    },
    "after3_dain_choice1_react2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after3_dain_choice1_react3"
    },
    "after3_dain_choice1_react3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "setFlags": ["dain_day3_event"],
        "next": "after3_dain_freetalk"
    },
    "after3_dain_freetalk": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "type": "free_talk",
        "maxTurns": 3,
        "next": "after3_dain_end_check"
    },
    "after3_dain_end_check": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "branches": [
            { "condition": "chose_dain_after2", "next": "after3_dain_end" },
            { "next": "after3_dain_end_first" }
        ]
    },
    "after3_dain_end": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "branches": [
            { "condition": "harem_seed", "next": "after3_final" },
            { "condition": "day3_has_multiple_dates", "next": "after3_confront_1" },
            { "next": "after3_final" }
        ]
    },
    "after3_dain_end_first": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "branches": [
            { "condition": "harem_seed", "next": "after3_final" },
            { "condition": "day3_has_multiple_dates", "next": "after3_confront_1" },
            { "next": "after3_final" }
        ]
    },
    "after3_confront_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "bgm": "mystery.mp3",
        "setFlags": ["day3_caught_multiple_dates"],
        "next": "after3_confront_2"
    },
    "after3_confront_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_3"
    },
    "after3_confront_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_4"
    },
    "after3_confront_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_5"
    },
    "after3_confront_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_5_b"
    },
    "after3_confront_5_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_confront_5_c"
    },
    "after3_confront_5_c": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "after3_confront_6"
    },
    "after3_confront_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_choice"
    },
    "after3_confront_choice": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "choices": [
            { "next": "after3_confront_admit", "stats": {"Seoyeon":{"affinity":-5}} },
            { "next": "after3_confront_excuse", "stats": {"Seoyeon":{"affinity":-8}} },
            { "next": "after3_confront_lie_b", "stats": {"Seoyeon":{"affinity":-3}}, "setFlags": ["conscience_minus"] }
        ]
    },
    "after3_confront_admit": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_admit_b"
    },
    "after3_confront_admit_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_admit_2"
    },
    "after3_confront_admit_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "after3_confront_admit_3"
    },
    "after3_confront_admit_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "next": "after3_confront_admit_4"
    },
    "after3_confront_admit_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_admit_4_b"
    },
    "after3_confront_admit_4_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_admit_5"
    },
    "after3_confront_admit_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_admit_6"
    },
    "after3_confront_admit_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_end"
    },
    "after3_confront_excuse": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "after3_confront_excuse_b"
    },
    "after3_confront_excuse_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "after3_confront_excuse_2"
    },
    "after3_confront_excuse_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "after3_confront_excuse_2_b"
    },
    "after3_confront_excuse_2_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_angry.png",
        "next": "after3_confront_end"
    },
    "after3_confront_lie_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_lie"
    },
    "after3_confront_lie": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_lie_2"
    },
    "after3_confront_lie_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_lie_2_b"
    },
    "after3_confront_lie_2_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_confront_end"
    },
    "after3_confront_end": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "after3_final"
    },
    "after3_final": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "haeun_check"
    },
    "haeun_check": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "branches": [
            { "condition": "seoyeon_day3_event", "next": "haeun_warn_1" },
            { "next": "minsu_d3_check" }
        ]
    },
    "minsu_d3_check": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_d3_1"
    },
    "minsu_d3_1": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_d3_2"
    },
    "minsu_d3_2": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_d3_3"
    },
    "minsu_d3_3": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_d3_4"
    },
    "minsu_d3_4": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_d3_5"
    },
    "minsu_d3_5": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_d3_5b"
    },
    "minsu_d3_5b": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_d3_6"
    },
    "minsu_d3_6": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_d3_6b"
    },
    "minsu_d3_6b": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_d3_7"
    },
    "minsu_d3_7": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_d3_8"
    },
    "minsu_d3_8": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_d3_9"
    },
    "minsu_d3_9": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_d3_10"
    },
    "minsu_d3_10": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "night3_start"
    },
    "haeun_warn_1": {
        "background": "assets/images/background/school_hallway.png",
        "backgroundVariant": "empty",
        "character": null,
        "next": "haeun_warn_1_b"
    },
    "haeun_warn_1_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_2"
    },
    "haeun_warn_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_2_b"
    },
    "haeun_warn_2_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_2b"
    },
    "haeun_warn_2b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_3"
    },
    "haeun_warn_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_3_b"
    },
    "haeun_warn_3_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_3_c"
    },
    "haeun_warn_3_c": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_4"
    },
    "haeun_warn_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_4b"
    },
    "haeun_warn_4b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_5"
    },
    "haeun_warn_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_5b"
    },
    "haeun_warn_5b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_5c"
    },
    "haeun_warn_5c": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_5c_b"
    },
    "haeun_warn_5c_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "haeun_warn_6"
    },
    "haeun_warn_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_6_b"
    },
    "haeun_warn_6_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_7"
    },
    "haeun_warn_7": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "haeun_warn_7_b"
    },
    "haeun_warn_7_b": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "haeun_warn_7_c"
    },
    "haeun_warn_7_c": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_normal.png",
        "next": "haeun_warn_7_d"
    },
    "haeun_warn_7_d": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "haeun_warn_8"
    },
    "haeun_warn_8": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "haeun_warn_8b"
    },
    "haeun_warn_8b": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/haeun_worried.png",
        "next": "night3_start"
    }
    };
    for (const scene of Object.values(scenes)) {
        if (scene && typeof scene === 'object') {
            Object.defineProperty(scene, "__sourceFile", {
                value: "day3_3_afterschool",
                enumerable: false
            });
        }
    }
    Object.assign(SCENARIO[3], scenes);
})();
