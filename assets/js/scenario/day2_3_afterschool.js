/**
 * ============================================================================
 * CUPID - day2_3_afterschool
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[2]) SCENARIO[2] = {};

Object.assign(SCENARIO[2], {
    "after2_start": {
        "background": "assets/images/background/room_school.png",
        "bgm": "sunset1.mp3",
        "character": null,
        "branches": [
            { "condition": "nurse_day1", "next": "hidden_nurse_d2_1" },
            { "next": "after2_choice" }
        ]
    },
    "after2_choice": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "bgm": "sunset1.mp3",
        "choices": [
            { "next": "after2_dain_1" },
            { "next": "after2_seo_1" },
            { "next": "after2_yuna_1" }
        ]
    },
    "after2_dain_1": {
        "background": "assets/images/background/gym.png",
        "bgm": "daily2.mp3",
        "character": "assets/images/characters/dain_active.png",
        "stats": { "Dain": { "affinity": 8 } },
        "next": "after2_dain_2"
    },
    "after2_dain_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_active.png",
        "next": "after2_dain_3"
    },
    "after2_dain_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_active.png",
        "next": "after2_dain_4"
    },
    "after2_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after2_dain_5"
    },
    "after2_dain_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_active.png",
        "next": "after2_dain_6"
    },
    "after2_dain_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_active.png",
        "next": "after2_dain_7"
    },
    "after2_dain_7": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "next": "after2_dain_8"
    },
    "after2_dain_8": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_9"
    },
    "after2_dain_9": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_10"
    },
    "after2_dain_10": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_11"
    },
    "after2_dain_11": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_12"
    },
    "after2_dain_12": {
        "background": "assets/images/background/street.png",
        "bgm": "daily.mp3",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_13"
    },
    "after2_dain_13": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_14"
    },
    "after2_dain_14": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after2_dain_15"
    },
    "after2_dain_15": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after2_dain_16"
    },
    "after2_dain_16": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_freetalk"
    },
    "after2_dain_end": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_end_2"
    },
    "after2_dain_end_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_end_3"
    },
    "after2_dain_end_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "minsu_warn_1"
    },
    "after2_seo_1": {
        "background": "assets/images/background/teacher_office.png",
        "bgm": "sunset1.mp3",
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": { "Seoyeon": { "affinity": 8 } },
        "next": "after2_seo_2"
    },
    "after2_seo_2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_3"
    },
    "after2_seo_3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "after2_seo_4"
    },
    "after2_seo_4": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_5"
    },
    "after2_seo_5": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_6"
    },
    "after2_seo_6": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_7"
    },
    "after2_seo_7": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_8"
    },
    "after2_seo_8": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_choice1"
    },
    "after2_seo_choice1": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "after2_seo_sunset_joke",
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "after2_seo_neck_worry",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            }
        ]
    },
    "after2_seo_sunset_joke": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "after2_seo_sunset_react"
    },
    "after2_seo_sunset_react": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "after2_seo_9"
    },
    "after2_seo_neck_worry": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_neck_react"
    },
    "after2_seo_neck_react": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_9"
    },
    "after2_seo_9": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_choice2"
    },
    "after2_seo_choice2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            {
                "next": "after2_seo_stay",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "after2_seo_leave",
                "stats": {
                    "Seoyeon": {
                        "affinity": 0
                    }
                }
            }
        ]
    },
    "after2_seo_stay": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "after2_seo_stay_2"
    },
    "after2_seo_stay_2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "after2_seo_stay_3"
    },
    "after2_seo_stay_3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "after2_seo_end"
    },
    "after2_seo_leave": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_end"
    },
    "after2_seo_end": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "minsu_warn_1"
    },
    "after2_yuna_1": {
        "character": "assets/images/characters/yuna_normal.png",
        "background": "assets/images/background/yuna_hideout.png",
        "bgm": "night1.mp3",
        "next": "after2_yuna_2"
    },
    "after2_yuna_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "stats": { "Yuna": { "affinity": 8 } },
        "next": "after2_yuna_3"
    },
    "after2_yuna_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_4"
    },
    "after2_yuna_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_5"
    },
    "after2_yuna_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_6"
    },
    "after2_yuna_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_7"
    },
    "after2_yuna_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_8"
    },
    "after2_yuna_8": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_9"
    },
    "after2_yuna_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_choice"
    },
    "after2_yuna_choice": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            {
                "next": "after2_yuna_everyday",
                "stats": {
                    "Yuna": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "after2_yuna_quiet",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            }
        ]
    },
    "after2_yuna_everyday": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after2_yuna_everyday_react"
    },
    "after2_yuna_everyday_react": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after2_yuna_end"
    },
    "after2_yuna_quiet": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "after2_yuna_quiet_react"
    },
    "after2_yuna_quiet_react": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "after2_yuna_end"
    },
    "after2_yuna_end": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "minsu_warn_1"
    }
,
    // =========================================================================
    // 민수의 직설 (Day 2 방과후 공통 — 모든 루트 합류)
    // =========================================================================
    "minsu_warn_1": {
        "background": "assets/images/background/school.png",
        "bgm": "sunset1.mp3",
        "character": null,
        "next": "minsu_warn_2"
    },
    "minsu_warn_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_3"
    },
    "minsu_warn_3": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_warn_4"
    },
    "minsu_warn_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_5"
    },
    "minsu_warn_5": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_warn_6"
    },
    "minsu_warn_6": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_7"
    },
    "minsu_warn_7": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_warn_8"
    },
    "minsu_warn_8": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_8b"
    },
    "minsu_warn_8b": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_warn_9"
    },
    "minsu_warn_9": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_10"
    },
    "minsu_warn_10": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_warn_11"
    },
    "minsu_warn_11": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_11b"
    },
    "minsu_warn_11b": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_warn_11c"
    },
    "minsu_warn_11c": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_12"
    },
    "minsu_warn_12": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_warn_13"
    },
    "minsu_warn_13": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_13b"
    },
    "minsu_warn_13b": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_warn_14"
    },
    "minsu_warn_14": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "minsu_warn_15"
    },
    "minsu_warn_15": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "night2_start"
    },

    "after2_dain_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after2_dain_end"
    },

    // =========================================================================
    // HIDDEN ROUTE - Day 2 보건선생님 체육 시간
    // =========================================================================
    "hidden_nurse_d2_1": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "condition": "nurse_day1",
        "next": "hidden_nurse_d2_2"
    },
    "hidden_nurse_d2_2": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_3"
    },
    "hidden_nurse_d2_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_4"
    },
    "hidden_nurse_d2_4": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_5"
    },
    "hidden_nurse_d2_5": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_6"
    },
    "hidden_nurse_d2_6": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_7"
    },
    "hidden_nurse_d2_7": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_8"
    },
    "hidden_nurse_d2_8": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_9"
    },
    "hidden_nurse_d2_9": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlag": "nurse_day2",
        "next": "hidden_nurse_d2_freetalk"
    },
    "hidden_nurse_d2_freetalk": {
        "type": "free_talk",
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after2_choice"
    },
});
