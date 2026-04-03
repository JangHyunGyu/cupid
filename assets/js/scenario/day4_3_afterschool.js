/**
 * ============================================================================
 * CUPID - day4_3_afterschool
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

Object.assign(SCENARIO[4], {
    "confess_seo_1": {
        "background": "assets/images/background/top_school.png",
        "character": null,
        "bgm": "confession.mp3",
        "branches": [
            { "condition": "route_seoyeon", "next": "confess_seo_2" },
            { "condition": "route_yuna", "next": "confess_yuna_1" },
            { "condition": "route_dain", "next": "confess_dain_1" },
            { "next": "day4_night_start" }
        ]
    },
    "confess_seo_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "branches": [
            { "condition": "chose_seoyeon_lunch", "next": "confess_seo_3" },
            { "next": "confess_seo_3b" }
        ]
    },
    "confess_seo_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_4"
    },
    "confess_seo_3b": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_4"
    },
    "confess_seo_4": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_4_ins"
    },
    "confess_seo_4_ins": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_5"
    },
    "confess_seo_5": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_choice"
    },
    "confess_seo_choice": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            { "next": "confess_seo_yes_1", "setFlags": ["confessed_seoyeon"] },
            { "next": "confess_seo_no_1", "setFlags": ["postponed_seoyeon"] }
        ]
    },
    "confess_seo_yes_1": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_yes_2"
    },
    "confess_seo_yes_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_yes_3"
    },
    "confess_seo_yes_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_yes_4"
    },
    "confess_seo_yes_4": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_yes_5"
    },
    "confess_seo_yes_5": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_yes_6"
    },
    "confess_seo_yes_6": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_yes_7"
    },
    "confess_seo_yes_7": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "confess_seo_yes_8"
    },
    "confess_seo_yes_8": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "confess_seo_yes_9"
    },
    "confess_seo_yes_9": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "confess_seo_yes_10"
    },
    "confess_seo_yes_10": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "confess_seo_yes_11"
    },
    "confess_seo_yes_11": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "confess_seo_yes_11_ins"
    },
    "confess_seo_yes_11_ins": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "confess_seo_yes_12"
    },
    "confess_seo_yes_12": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "setFlags": ["day4_confession_accepted","isDating_Seoyeon"],
        "next": "day4_night_start"
    },
    "confess_seo_no_1": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_no_2"
    },
    "confess_seo_no_2": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_no_3"
    },
    "confess_seo_no_3": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "confess_seo_no_4"
    },
    "confess_seo_no_4": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "setFlags": ["day4_waited"],
        "next": "confess_seo_no_4_ins"
    },
    "confess_seo_no_4_ins": {
        "background": "assets/images/background/top_school.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "next": "day4_night_start"
    },
    "confess_yuna_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "bgm": "confession.mp3",
        "next": "confess_yuna_2"
    },
    "confess_yuna_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "branches": [
            { "condition": "chose_yuna_lunch", "next": "confess_yuna_3" },
            { "next": "confess_yuna_3b" }
        ]
    },
    "confess_yuna_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_4"
    },
    "confess_yuna_3b": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_4"
    },
    "confess_yuna_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_5"
    },
    "confess_yuna_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_choice"
    },
    "confess_yuna_choice": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            { "next": "confess_yuna_yes_1", "setFlags": ["confessed_yuna"] },
            { "next": "confess_yuna_no_1", "setFlags": ["postponed_yuna"] }
        ]
    },
    "confess_yuna_yes_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_yes_2"
    },
    "confess_yuna_yes_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_yes_3"
    },
    "confess_yuna_yes_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_yes_3_ins"
    },
    "confess_yuna_yes_3_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_yes_4"
    },
    "confess_yuna_yes_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_yes_5"
    },
    "confess_yuna_yes_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_yes_6"
    },
    "confess_yuna_yes_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "confess_yuna_yes_6_ins"
    },
    "confess_yuna_yes_6_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "confess_yuna_yes_7"
    },
    "confess_yuna_yes_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "confess_yuna_yes_8"
    },
    "confess_yuna_yes_8": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "confess_yuna_yes_8_ins"
    },
    "confess_yuna_yes_8_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "confess_yuna_yes_8_ins2"
    },
    "confess_yuna_yes_8_ins2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_yes_9"
    },
    "confess_yuna_yes_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "setFlags": ["day4_confession_accepted","isDating_Yuna"],
        "next": "confess_yuna_yes_9_ins"
    },
    "confess_yuna_yes_9_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "day4_night_start"
    },
    "confess_yuna_no_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_no_2"
    },
    "confess_yuna_no_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_no_3"
    },
    "confess_yuna_no_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "confess_yuna_no_4"
    },
    "confess_yuna_no_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "setFlags": ["day4_waited"],
        "next": "confess_yuna_no_4_ins"
    },
    "confess_yuna_no_4_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "next": "day4_night_start"
    },
    "confess_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "bgm": "confession.mp3",
        "next": "confess_dain_2"
    },
    "confess_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "branches": [
            { "condition": "chose_dain_lunch", "next": "confess_dain_3" },
            { "next": "confess_dain_3b" }
        ]
    },
    "confess_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_4"
    },
    "confess_dain_3b": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_4"
    },
    "confess_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_5"
    },
    "confess_dain_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_choice"
    },
    "confess_dain_choice": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            { "next": "confess_dain_yes_1", "setFlags": ["confessed_dain"] },
            { "next": "confess_dain_no_1", "setFlags": ["postponed_dain"] }
        ]
    },
    "confess_dain_yes_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_yes_2"
    },
    "confess_dain_yes_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_yes_3"
    },
    "confess_dain_yes_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_yes_3_ins"
    },
    "confess_dain_yes_3_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_yes_4"
    },
    "confess_dain_yes_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_yes_5"
    },
    "confess_dain_yes_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_yes_6"
    },
    "confess_dain_yes_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_yes_7"
    },
    "confess_dain_yes_7": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "confess_dain_yes_8"
    },
    "confess_dain_yes_8": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "confess_dain_yes_8_ins"
    },
    "confess_dain_yes_8_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "confess_dain_yes_9"
    },
    "confess_dain_yes_9": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "confess_dain_yes_9_ins"
    },
    "confess_dain_yes_9_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "confess_dain_yes_10"
    },
    "confess_dain_yes_10": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "setFlags": ["day4_confession_accepted","isDating_Dain"],
        "next": "confess_dain_yes_10_ins"
    },
    "confess_dain_yes_10_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "day4_night_start"
    },
    "confess_dain_no_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_no_2"
    },
    "confess_dain_no_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_no_3"
    },
    "confess_dain_no_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "confess_dain_no_4"
    },
    "confess_dain_no_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "setFlags": ["day4_waited"],
        "next": "confess_dain_no_4_ins"
    },
    "confess_dain_no_4_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "next": "confess_dain_no_4_ins2"
    },
    "confess_dain_no_4_ins2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "next": "confess_dain_no_4_ins3"
    },
    "confess_dain_no_4_ins3": {
        "background": "assets/images/background/street.png",
        "character": null,
        "next": "confess_dain_no_4_ins4"
    },
    "confess_dain_no_4_ins4": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "confess_dain_no_4_ins5"
    },
    "confess_dain_no_4_ins5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "confess_dain_no_4_ins6"
    },
    "confess_dain_no_4_ins6": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "confess_dain_no_4_ins7"
    },
    "confess_dain_no_4_ins7": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "confess_dain_no_4_ins8"
    },
    "confess_dain_no_4_ins8": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "confess_dain_no_4_ins9"
    },
    "confess_dain_no_4_ins9": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "confess_dain_no_4_ins10"
    },
    "confess_dain_no_4_ins10": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "confess_dain_no_4_ins11"
    },
    "confess_dain_no_4_ins11": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "confess_dain_no_4_ins12"
    },
    "confess_dain_no_4_ins12": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "confess_dain_no_4_ins13"
    },
    "confess_dain_no_4_ins13": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "confess_dain_no_4_ins14"
    },
    "confess_dain_no_4_ins14": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "confess_dain_no_4_ins15"
    },
    "confess_dain_no_4_ins15": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "confess_dain_no_4_ins16"
    },
    "confess_dain_no_4_ins16": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "confess_dain_no_4_ins17"
    },
    "confess_dain_no_4_ins17": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "confess_dain_no_4_ins18"
    },
    "confess_dain_no_4_ins18": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "confess_dain_no_4_ins19"
    },
    "confess_dain_no_4_ins19": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "confess_dain_no_4_ins20"
    },
    "confess_dain_no_4_ins20": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "confess_dain_no_4_ins21"
    },
    "confess_dain_no_4_ins21": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "confess_dain_no_4_ins22"
    },
    "confess_dain_no_4_ins22": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "branches": [
            { "condition": "nurse_day4_afterschool", "next": "confess_dain_no_4_nurse_skip" },
            { "next": "confess_dain_no_4_ins23" }
        ]
    },
    "confess_dain_no_4_ins23": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "confess_dain_no_4_ins24"
    },
    "confess_dain_no_4_ins24": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins25"
    },
    "confess_dain_no_4_ins25": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins26"
    },
    "confess_dain_no_4_ins26": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins27"
    },
    "confess_dain_no_4_ins27": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins28"
    },
    "confess_dain_no_4_ins28": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins29"
    },
    "confess_dain_no_4_ins29": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins30"
    },
    "confess_dain_no_4_ins30": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins31"
    },
    "confess_dain_no_4_ins31": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins32"
    },
    "confess_dain_no_4_ins32": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins33"
    },
    "confess_dain_no_4_ins33": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins34"
    },
    "confess_dain_no_4_ins34": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins35"
    },
    "confess_dain_no_4_ins35": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins36"
    },
    "confess_dain_no_4_ins36": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins37"
    },
    "confess_dain_no_4_ins37": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins38"
    },
    "confess_dain_no_4_ins38": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins39"
    },
    "confess_dain_no_4_ins39": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins40"
    },
    "confess_dain_no_4_ins40": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins41"
    },
    "confess_dain_no_4_ins41": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins42"
    },
    "confess_dain_no_4_ins42": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins43"
    },
    "confess_dain_no_4_ins43": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_ins44"
    },
    "confess_dain_no_4_ins44": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "confess_dain_no_4_nurse_skip"
    },
    "confess_dain_no_4_nurse_skip": {
        "background": "assets/images/background/nurse_room.png",
        "character": null,
        "next": "confess_dain_no_4_ins45"
    },
    "confess_dain_no_4_ins45": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "confess_dain_no_4_ins46"
    },
    "confess_dain_no_4_ins46": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "confess_dain_no_4_ins47"
    },
    "confess_dain_no_4_ins47": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "confess_dain_no_4_ins48"
    },
    "confess_dain_no_4_ins48": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "confess_dain_no_4_ins49"
    },
    "confess_dain_no_4_ins49": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "confess_dain_no_4_ins50"
    },
    "confess_dain_no_4_ins50": {
        "background": "assets/images/background/room_my.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "next": "day4_night_start"
    }
});
