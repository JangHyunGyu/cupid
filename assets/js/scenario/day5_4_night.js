/**
 * ============================================================================
 * CUPID - day5_4_night
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

Object.assign(SCENARIO[5], {

    // =========================================================================
    // ENDING START — main entry & condition routing
    // =========================================================================
    "ending_start": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "branches": [
            {
                "next": "hidden_true_homeroom_1",
                "condition": "homeroom_day5",
                "excludeCondition": "day3_has_multiple_dates"
            },
            {
                "next": "hidden_good_homeroom_1",
                "condition": "homeroom_day5"
            },
            {
                "next": "hidden_true_nurse_1",
                "condition": "nurse_day5",
                "excludeCondition": "day3_has_multiple_dates"
            },
            {
                "next": "hidden_good_nurse_1",
                "condition": "nurse_day5"
            },
            {
                "next": "day5_ending_true",
                "condition": "day4_confession_accepted",
                "excludeCondition": "day3_has_multiple_dates"
            },
            {
                "next": "day5_ending_good",
                "condition": "day4_confession_accepted"
            },
            {
                "next": "day5_ending_good",
                "condition": "day5_confessed"
            },
            {
                "next": "day5_ending_harem",
                "condition": "ending_harem"
            },
            {
                "next": "day5_ending_mayhem",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day5_ending_friend",
                "condition": "day4_waited"
            },
            {
                "next": "day5_ending_alone"
            }
        ]
    },

    // =========================================================================
    // TRUE LOVE END — entry & route branch
    // =========================================================================
    "day5_ending_true": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "true_seo_1",
                "character": "Seoyeon"
            },
            {
                "next": "true_yuna_1",
                "character": "Yuna"
            },
            {
                "next": "true_dain_1",
                "character": "Dain"
            }
        ]
    },

    // ── Seoyeon TRUE route ──
    "true_seo_1": {
        "background": "assets/images/background/seyoun_room.png",
        "character": null,
        "night": true,
        "fade": true,
        "next": "true_seo_2"
    },
    "true_seo_2": {
        "background": "assets/images/background/seyoun_room.png",
        "character": null,
        "night": true,
        "fade": true,
        "next": "true_seo_3"
    },
    "true_seo_3": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "fade": true,
        "next": "true_seo_4"
    },
    "true_seo_4": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "fade": true,
        "next": "true_seo_5"
    },
    "true_seo_5": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "night": true,
        "fade": true,
        "next": "true_seo_6"
    },
    "true_seo_6": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "night": true,
        "fade": true,
        "next": "true_seo_7"
    },
    "true_seo_7": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "true_seo_8"
    },
    "true_seo_8": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "true_epilogue_1"
    },

    // ── Yuna TRUE route ──
    "true_yuna_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": null,
        "night": true,
        "fade": true,
        "next": "true_yuna_2"
    },
    "true_yuna_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "fade": true,
        "next": "true_yuna_3"
    },
    "true_yuna_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "fade": true,
        "next": "true_yuna_4"
    },
    "true_yuna_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "fade": true,
        "next": "true_yuna_5"
    },
    "true_yuna_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_smile.png",
        "night": true,
        "fade": true,
        "next": "true_yuna_6"
    },
    "true_yuna_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "fade": true,
        "next": "true_yuna_7"
    },
    "true_yuna_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "fade": true,
        "next": "true_epilogue_1"
    },

    // ── Dain TRUE route ──
    "true_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "night": true,
        "fade": true,
        "next": "true_dain_2"
    },
    "true_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": null,
        "night": true,
        "fade": true,
        "next": "true_dain_3"
    },
    "true_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "fade": true,
        "next": "true_dain_4"
    },
    "true_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "fade": true,
        "next": "true_dain_5"
    },
    "true_dain_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "fade": true,
        "next": "true_dain_6"
    },
    "true_dain_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "fade": true,
        "next": "true_dain_7"
    },
    "true_dain_7": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "fade": true,
        "next": "true_dain_8"
    },
    "true_dain_8": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "fade": true,
        "next": "true_epilogue_1"
    },

    // ── Shared epilogue ──
    "true_epilogue_1": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "next": "true_epilogue_2"
    },
    "true_epilogue_2": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "true_epilogue_3"
    },
    "true_epilogue_3": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "true_epilogue_4"
    },
    "true_epilogue_4": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "true_epilogue_5"
    },
    "true_epilogue_5": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "true_epilogue_6"
    },
    "true_epilogue_6": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "true_epilogue_7"
    },
    "true_epilogue_7": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // GOOD END
    // =========================================================================
    "day5_ending_good": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "night2.mp3",
        "next": "good_1"
    },
    "good_1": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "good_2"
    },
    "good_2": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "good_3"
    },
    "good_3": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "good_4"
    },
    "good_4": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "good_5"
    },
    "good_5": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // MAYHEM END
    // =========================================================================
    "day5_ending_mayhem": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "night1.mp3",
        "next": "mayhem_1"
    },
    "mayhem_1": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "mayhem_2"
    },
    "mayhem_2": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "mayhem_3"
    },
    "mayhem_3": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "mayhem_4"
    },
    "mayhem_4": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "mayhem_5"
    },
    "mayhem_5": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "mayhem_6"
    },
    "mayhem_6": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "mayhem_7"
    },
    "mayhem_7": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // HAREM END
    // =========================================================================
    "day5_ending_harem": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "night1.mp3",
        "next": "harem_1"
    },
    "harem_1": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "harem_2"
    },
    "harem_2": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "harem_3"
    },
    "harem_3": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "harem_4"
    },
    "harem_4": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "harem_5"
    },
    "harem_5": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "harem_6"
    },
    "harem_6": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "harem_7"
    },
    "harem_7": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "harem_8"
    },
    "harem_8": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // FRIEND END
    // =========================================================================
    "day5_ending_friend": {
        "background": "assets/images/background/park.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "night2.mp3",
        "next": "friend_1"
    },
    "friend_1": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "friend_2"
    },
    "friend_2": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "friend_3"
    },
    "friend_3": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "friend_4"
    },
    "friend_4": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "friend_5"
    },
    "friend_5": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "friend_6"
    },
    "friend_6": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "friend_7"
    },
    "friend_7": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // ALONE END
    // =========================================================================
    "day5_ending_alone": {
        "background": "assets/images/background/student_room.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "night2.mp3",
        "next": "alone_1"
    },
    "alone_1": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "alone_2"
    },
    "alone_2": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "alone_3"
    },
    "alone_3": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "alone_4"
    },
    "alone_4": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "alone_5"
    },
    "alone_5": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // TEACHER TRUE LOVE END (Hidden Route)
    // =========================================================================
    "hidden_true_homeroom_1": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "hidden_true_homeroom_2"
    },
    "hidden_true_homeroom_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_homeroom_3"
    },
    "hidden_true_homeroom_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_homeroom_4"
    },
    "hidden_true_homeroom_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_homeroom_5"
    },
    "hidden_true_homeroom_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_homeroom_6"
    },
    "hidden_true_homeroom_6": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_homeroom_7"
    },
    "hidden_true_homeroom_7": {
        "background": "assets/images/background/cafe.png",
        "character": null,
        "night": true,
        "fade": true,
        "next": "hidden_true_homeroom_8"
    },
    "hidden_true_homeroom_8": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // TEACHER GOOD END (Hidden Route)
    // =========================================================================
    "hidden_good_homeroom_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "night": true,
        "fade": true,
        "bgm": "night2.mp3",
        "next": "hidden_good_homeroom_2"
    },
    "hidden_good_homeroom_2": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "fade": true,
        "next": "hidden_good_homeroom_3"
    },
    "hidden_good_homeroom_3": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "fade": true,
        "next": "hidden_good_homeroom_4"
    },
    "hidden_good_homeroom_4": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // NURSE TRUE LOVE END (Hidden Route)
    // =========================================================================
    "hidden_true_nurse_1": {
        "background": "assets/images/background/school.png",
        "character": null,
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "hidden_true_nurse_2"
    },
    "hidden_true_nurse_2": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_nurse_3"
    },
    "hidden_true_nurse_3": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_nurse_4"
    },
    "hidden_true_nurse_4": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_nurse_5"
    },
    "hidden_true_nurse_5": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_nurse_6"
    },
    "hidden_true_nurse_6": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_nurse_7"
    },
    "hidden_true_nurse_7": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "fade": true,
        "next": "hidden_true_nurse_8"
    },
    "hidden_true_nurse_8": {
        "background": "assets/images/background/cafe.png",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // NURSE GOOD END (Hidden Route)
    // =========================================================================
    "hidden_good_nurse_1": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "fade": true,
        "bgm": "night2.mp3",
        "next": "hidden_good_nurse_2"
    },
    "hidden_good_nurse_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "night": true,
        "fade": true,
        "next": "hidden_good_nurse_3"
    },
    "hidden_good_nurse_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": null,
        "night": true,
        "fade": true,
        "next": "hidden_good_nurse_4"
    },
    "hidden_good_nurse_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_credits"
    },

    // =========================================================================
    // CREDITS & RESTART
    // =========================================================================
    "day5_credits": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "type": "credits",
        "next": "day5_ending_restart"
    },
    "day5_ending_restart": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "choices": [
            {
                "next": "index.html"
            }
        ]
    }
});
