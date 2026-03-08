/**
 * ============================================================================
 * CUPID - day5_3_afterschool
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

Object.assign(SCENARIO[5], {
    "day5_afternoon_start": {
        "background": "assets/images/background/top_school.png",
        "bgm": "sunset1.mp3",
        "sunset": true,
        "next": "day5_afternoon_branch"
    },
    "day5_afternoon_branch": {
        "background": "assets/images/background/top_school.png",
        "branches": [
            {
                "next": "day5_true_love_start",
                "condition": "day4_confession_accepted",
                "excludeCondition": "day3_has_multiple_dates"
            },
            {
                "next": "day5_good_start",
                "condition": "day4_confession_accepted"
            },
            {
                "next": "day5_mayhem_start",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day5_friend_start",
                "condition": "day4_waited"
            },
            {
                "next": "day5_alone_start"
            }
        ]
    },
    "day5_true_love_start": {
        "sunset": true,
        "setFlag": "ending_true_love",
        "next": "day5_true_talk_1"
    },
    "day5_true_talk_1": {
        "sunset": true,
        "next": "day5_true_talk_2"
    },
    "day5_true_talk_2": {
        "sunset": true,
        "next": "day5_true_response"
    },
    "day5_true_response": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_true_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_true_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_true_dain",
                "character": "Dain"
            },
            {
                "next": "day5_true_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_true_teacher",
                "character": "Teacher"
            }
        ]
    },
    "day5_true_seoyeon": {
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "day5_true_kiss_buildup"
    },
    "day5_true_yuna": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "day5_true_kiss_buildup"
    },
    "day5_true_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_true_kiss_buildup"
    },
    "day5_true_nurse": {
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "next": "day5_true_kiss_buildup"
    },
    "day5_true_teacher": {
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "next": "day5_true_kiss_buildup"
    },
    "day5_true_kiss_buildup": {
        "character": null,
        "sunset": true,
        "next": "day5_true_kiss_2"
    },
    "day5_true_kiss_2": {
        "character": null,
        "sunset": true,
        "next": "day5_true_kiss_3"
    },
    "day5_true_kiss_3": {
        "character": null,
        "sunset": true,
        "next": "day5_true_kiss_4"
    },
    "day5_true_kiss_4": {
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day5_true_kiss_5"
    },
    "day5_true_kiss_5": {
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day5_true_kiss_6"
    },
    "day5_true_kiss_6": {
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day5_true_kiss_after"
    },
    "day5_true_kiss_after": {
        "character": null,
        "sunset": true,
        "next": "day5_true_evening_branch"
    },
    "day5_true_evening_branch": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_bed_seoyeon_1",
                "character": "Seoyeon"
            },
            {
                "next": "day5_bed_yuna_1",
                "character": "Yuna"
            },
            {
                "next": "day5_bed_dain_1",
                "character": "Dain"
            },
            {
                "next": "day5_bed_nurse_1",
                "character": "Nurse"
            },
            {
                "next": "day5_bed_teacher_1",
                "character": "Teacher"
            }
        ]
    },
    "day5_bed_seoyeon_1": {
        "night": true,
        "next": "day5_bed_seoyeon_2"
    },
    "day5_bed_seoyeon_2": {
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day5_bed_seoyeon_3"
    },
    "day5_bed_seoyeon_3": {
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_seoyeon_4"
    },
    "day5_bed_seoyeon_4": {
        "character": "assets/images/characters/seyoun_shy.png",
        "background": "assets/images/background/seyoun_room.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_seoyeon_4b"
    },
    "day5_bed_seoyeon_4b": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_seoyeon_5"
    },
    "day5_bed_seoyeon_5": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_seoyeon_6"
    },
    "day5_bed_seoyeon_6": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_seoyeon_7"
    },
    "day5_bed_seoyeon_7": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_true_morning_seoyeon_1"
    },
    "day5_bed_yuna_1": {
        "night": true,
        "next": "day5_bed_yuna_2"
    },
    "day5_bed_yuna_2": {
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day5_bed_yuna_3"
    },
    "day5_bed_yuna_3": {
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_yuna_4"
    },
    "day5_bed_yuna_4": {
        "character": "assets/images/characters/yuna_shy.png",
        "background": "assets/images/background/yuna_hideout.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_yuna_5"
    },
    "day5_bed_yuna_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_yuna_6"
    },
    "day5_bed_yuna_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_yuna_7"
    },
    "day5_bed_yuna_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_true_morning_yuna_1"
    },
    "day5_bed_dain_1": {
        "night": true,
        "next": "day5_bed_dain_2"
    },
    "day5_bed_dain_2": {
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day5_bed_dain_3"
    },
    "day5_bed_dain_3": {
        "character": "assets/images/characters/dain_laugh.png",
        "background": "assets/images/background/gym.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_dain_4"
    },
    "day5_bed_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_dain_5"
    },
    "day5_bed_dain_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_dain_6"
    },
    "day5_bed_dain_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_dain_7"
    },
    "day5_bed_dain_7": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_true_morning_dain_1"
    },
    "day5_bed_nurse_1": {
        "night": true,
        "next": "day5_bed_nurse_2"
    },
    "day5_bed_nurse_2": {
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day5_bed_nurse_3"
    },
    "day5_bed_nurse_3": {
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_nurse_4"
    },
    "day5_bed_nurse_4": {
        "character": "assets/images/characters/nurse_shy.png",
        "background": "assets/images/background/nurse_room.jpg",
        "night": true,
        "fade": true,
        "next": "day5_bed_nurse_5"
    },
    "day5_bed_nurse_5": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_nurse_6"
    },
    "day5_bed_nurse_6": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_nurse_7"
    },
    "day5_bed_nurse_7": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_true_morning_nurse_1"
    },
    "day5_bed_teacher_1": {
        "night": true,
        "next": "day5_bed_teacher_2"
    },
    "day5_bed_teacher_2": {
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day5_bed_teacher_3"
    },
    "day5_bed_teacher_3": {
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_teacher_4"
    },
    "day5_bed_teacher_4": {
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_teacher_5"
    },
    "day5_bed_teacher_5": {
        "character": "assets/images/characters/teacher_shy.png",
        "background": "assets/images/background/teacher_room.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_teacher_6"
    },
    "day5_bed_teacher_6": {
        "background": "assets/images/background/teacher_room.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_teacher_7"
    },
    "day5_bed_teacher_7": {
        "background": "assets/images/background/teacher_room.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_true_morning_teacher_1"
    },
    "day5_true_morning_seoyeon_1": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_true_morning_seoyeon_2"
    },
    "day5_true_morning_seoyeon_2": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_true_morning_seoyeon_3"
    },
    "day5_true_morning_seoyeon_3": {
        "background": null,
        "character": "assets/images/characters/seyoun_shy.png",
        "fade": true,
        "next": "day5_true_morning_seoyeon_4"
    },
    "day5_true_morning_seoyeon_4": {
        "background": null,
        "character": "assets/images/characters/seyoun_shy.png",
        "fade": true,
        "next": "day5_true_morning_seoyeon_5"
    },
    "day5_true_morning_seoyeon_5": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_ending_true"
    },
    "day5_true_morning_yuna_1": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_true_morning_yuna_2"
    },
    "day5_true_morning_yuna_2": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_true_morning_yuna_3"
    },
    "day5_true_morning_yuna_3": {
        "background": null,
        "character": "assets/images/characters/yuna_shy.png",
        "fade": true,
        "next": "day5_true_morning_yuna_4"
    },
    "day5_true_morning_yuna_4": {
        "background": null,
        "character": "assets/images/characters/yuna_shy.png",
        "fade": true,
        "next": "day5_true_morning_yuna_5"
    },
    "day5_true_morning_yuna_5": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_ending_true"
    },
    "day5_true_morning_dain_1": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_true_morning_dain_2"
    },
    "day5_true_morning_dain_2": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_true_morning_dain_3"
    },
    "day5_true_morning_dain_3": {
        "background": null,
        "character": "assets/images/characters/dain_laugh.png",
        "fade": true,
        "next": "day5_true_morning_dain_4"
    },
    "day5_true_morning_dain_4": {
        "background": null,
        "character": "assets/images/characters/dain_laugh.png",
        "fade": true,
        "next": "day5_true_morning_dain_5"
    },
    "day5_true_morning_dain_5": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_ending_true"
    },
    "day5_true_morning_nurse_1": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_true_morning_nurse_2"
    },
    "day5_true_morning_nurse_2": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_true_morning_nurse_3"
    },
    "day5_true_morning_nurse_3": {
        "background": null,
        "character": "assets/images/characters/nurse_shy.png",
        "fade": true,
        "next": "day5_true_morning_nurse_4"
    },
    "day5_true_morning_nurse_4": {
        "background": null,
        "character": "assets/images/characters/nurse_shy.png",
        "fade": true,
        "next": "day5_true_morning_nurse_5"
    },
    "day5_true_morning_nurse_5": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_ending_true"
    },
    "day5_true_morning_teacher_1": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_true_morning_teacher_2"
    },
    "day5_true_morning_teacher_2": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_true_morning_teacher_3"
    },
    "day5_true_morning_teacher_3": {
        "background": null,
        "character": "assets/images/characters/teacher_shy.png",
        "fade": true,
        "next": "day5_true_morning_teacher_4"
    },
    "day5_true_morning_teacher_4": {
        "background": null,
        "character": "assets/images/characters/teacher_shy.png",
        "fade": true,
        "next": "day5_true_morning_teacher_5"
    },
    "day5_true_morning_teacher_5": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_ending_true"
    },
    "day5_good_start": {
        "sunset": true,
        "setFlag": "ending_good",
        "next": "day5_good_talk_1"
    },
    "day5_good_talk_1": {
        "sunset": true,
        "next": "day5_good_talk_2"
    },
    "day5_good_talk_2": {
        "sunset": true,
        "next": "day5_good_response"
    },
    "day5_good_response": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_good_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_good_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_good_dain",
                "character": "Dain"
            },
            {
                "next": "day5_good_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_good_teacher",
                "character": "Teacher"
            }
        ]
    },
    "day5_good_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day5_good_final"
    },
    "day5_good_yuna": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "day5_good_final"
    },
    "day5_good_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_good_final"
    },
    "day5_good_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day5_good_final"
    },
    "day5_good_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day5_good_final"
    },
    "day5_good_final": {
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day5_ending_good"
    },
    "day5_mayhem_start": {
        "sunset": true,
        "next": "day5_mayhem_2"
    },
    "day5_mayhem_2": {
        "character": null,
        "sunset": true,
        "next": "day5_mayhem_3"
    },
    "day5_mayhem_3": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_4"
    },
    "day5_mayhem_4": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day5_mayhem_5"
    },
    "day5_mayhem_5": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_5b"
    },
    "day5_mayhem_5b": {
        "sunset": true,
        "branches": [
            {
                "next": "day5_mayhem_teacher_watch",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day5_mayhem_nurse_watch",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day5_mayhem_6"
            }
        ]
    },
    "day5_mayhem_teacher_watch": {
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day5_mayhem_nurse_check"
    },
    "day5_mayhem_nurse_check": {
        "sunset": true,
        "branches": [
            {
                "next": "day5_mayhem_nurse_watch",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day5_mayhem_6"
            }
        ]
    },
    "day5_mayhem_nurse_watch": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day5_mayhem_6"
    },
    "day5_mayhem_6": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_7"
    },
    "day5_mayhem_7": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_8"
    },
    "day5_mayhem_8": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day5_mayhem_9"
    },
    "day5_mayhem_9": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day5_mayhem_10"
    },
    "day5_mayhem_10": {
        "character": null,
        "sunset": true,
        "next": "day5_mayhem_11"
    },
    "day5_mayhem_11": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_12"
    },
    "day5_mayhem_12": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day5_mayhem_honest"
            },
            {
                "next": "day5_mayhem_confess"
            },
            {
                "next": "day5_mayhem_run"
            }
        ]
    },
    "day5_mayhem_honest": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_honest_2"
    },
    "day5_mayhem_honest_2": {
        "sunset": true,
        "next": "day5_mayhem_honest_3"
    },
    "day5_mayhem_honest_3": {
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "next": "day5_mayhem_honest_4"
    },
    "day5_mayhem_honest_4": {
        "character": "assets/images/characters/yuna_sad.png",
        "sunset": true,
        "next": "day5_mayhem_honest_5"
    },
    "day5_mayhem_honest_5": {
        "character": "assets/images/characters/dain_sad.png",
        "sunset": true,
        "next": "day5_mayhem_final"
    },
    "day5_mayhem_run": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_run_2"
    },
    "day5_mayhem_run_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_run_3"
    },
    "day5_mayhem_run_3": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day5_mayhem_run_4"
    },
    "day5_mayhem_run_4": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_run_5"
    },
    "day5_mayhem_run_5": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_final"
    },
    "day5_mayhem_confess": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_2"
    },
    "day5_mayhem_confess_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_3"
    },
    "day5_mayhem_confess_3": {
        "sunset": true,
        "next": "day5_mayhem_confess_seoyeon"
    },
    "day5_mayhem_confess_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_yuna"
    },
    "day5_mayhem_confess_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_dain"
    },
    "day5_mayhem_confess_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_silence"
    },
    "day5_mayhem_confess_silence": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_seoyeon_2"
    },
    "day5_mayhem_confess_seoyeon_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_confess_yuna_2"
    },
    "day5_mayhem_confess_yuna_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_dain_2"
    },
    "day5_mayhem_confess_dain_2": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_confess_react"
    },
    "day5_mayhem_confess_react": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_confess_final"
    },
    "day5_mayhem_confess_final": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "fade": true,
        "setFlag": "ending_harem",
        "next": "day5_ending_harem"
    },
    "day5_mayhem_final": {
        "sunset": true,
        "character": null,
        "next": "day5_mayhem_final_2"
    },
    "day5_mayhem_final_2": {
        "character": null,
        "sunset": true,
        "fade": true,
        "setFlag": "ending_mayhem",
        "next": "day5_ending_mayhem"
    },
    "day5_friend_start": {
        "sunset": true,
        "next": "day5_friend_choice"
    },
    "day5_friend_choice": {
        "sunset": true,
        "choices": [
            {
                "next": "day5_friend_confess",
                "setFlag": "day5_confessed"
            },
            {
                "next": "day5_friend_stay"
            }
        ]
    },
    "day5_friend_confess": {
        "sunset": true,
        "next": "day5_friend_confess_response"
    },
    "day5_friend_confess_response": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_late_accept_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_late_accept_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_late_accept_dain",
                "character": "Dain"
            },
            {
                "next": "day5_late_accept_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_late_accept_teacher",
                "character": "Teacher"
            }
        ]
    },
    "day5_late_accept_seoyeon": {
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 15
            }
        },
        "setFlag": "ending_good",
        "next": "day5_late_accept_transition1"
    },
    "day5_late_accept_yuna": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 15
            }
        },
        "setFlag": "ending_good",
        "next": "day5_late_accept_transition1"
    },
    "day5_late_accept_dain": {
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 15
            }
        },
        "setFlag": "ending_good",
        "next": "day5_late_accept_transition1"
    },
    "day5_late_accept_nurse": {
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "stats": {
            "Nurse": {
                "affinity": 15
            }
        },
        "setFlag": "ending_good",
        "next": "day5_late_accept_transition1"
    },
    "day5_late_accept_teacher": {
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "stats": {
            "Teacher": {
                "affinity": 15
            }
        },
        "setFlag": "ending_good",
        "next": "day5_late_accept_transition1"
    },
    "day5_late_accept_transition1": {
        "sunset": true,
        "next": "day5_late_accept_transition2"
    },
    "day5_late_accept_transition2": {
        "sunset": true,
        "next": "day5_good_final"
    },
    "day5_friend_stay": {
        "sunset": true,
        "setFlag": "ending_friend",
        "next": "day5_friend_response"
    },
    "day5_friend_response": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_friend_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_friend_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_friend_dain",
                "character": "Dain"
            },
            {
                "next": "day5_friend_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_friend_teacher",
                "character": "Teacher"
            }
        ]
    },
    "day5_friend_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day5_friend_bitter"
    },
    "day5_friend_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day5_friend_bitter"
    },
    "day5_friend_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day5_friend_bitter"
    },
    "day5_friend_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day5_friend_bitter"
    },
    "day5_friend_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day5_friend_bitter"
    },
    "day5_friend_bitter": {
        "sunset": true,
        "character": null,
        "next": "day5_friend_final"
    },
    "day5_friend_final": {
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day5_ending_friend"
    },
    "day5_alone_start": {
        "sunset": true,
        "setFlag": "ending_alone",
        "next": "day5_alone_2"
    },
    "day5_alone_2": {
        "sunset": true,
        "next": "day5_alone_3"
    },
    "day5_alone_3": {
        "sunset": true,
        "next": "day5_alone_4"
    },
    "day5_alone_4": {
        "sunset": true,
        "next": "day5_alone_5"
    },
    "day5_alone_5": {
        "sunset": true,
        "next": "day5_alone_6"
    },
    "day5_alone_6": {
        "sunset": true,
        "fade": true,
        "next": "day5_ending_alone"
    }
});
