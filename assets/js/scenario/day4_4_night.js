/**
 * ============================================================================
 * CUPID - day4_4_night
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[4]) SCENARIO[4] = {};

Object.assign(SCENARIO[4], {
    // ========================================================================
    // 시작 & 분기
    // ========================================================================
    "day4_night_start": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "bgm": "night2.mp3",
        "next": "day4_night_branch"
    },
    "day4_night_branch": {
        "background": "assets/images/background/room_my.png",
        "branches": [
            {
                "next": "wall_seo_1",
                "condition": "route_seoyeon"
            },
            {
                "next": "wall_dain_1",
                "condition": "route_dain"
            },
            {
                "next": "wall_yuna_1",
                "condition": "route_yuna"
            },
            {
                "next": "day4_night_regret",
                "condition": "day4_waited"
            },
            {
                "next": "day4_night_reflect"
            }
        ]
    },

    // ========================================================================
    // ★★★ 서연 밤 — 가면 벗기 (route_seoyeon)
    // ========================================================================
    "wall_seo_1": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "bgm": "night2.mp3",
        "next": "wall_seo_2"
    },
    "wall_seo_2": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "wall_seo_3"
    },
    "wall_seo_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "wall_seo_4"
    },
    "wall_seo_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "wall_seo_5"
    },
    "wall_seo_5": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "wall_seo_6"
    },
    "wall_seo_6": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "wall_seo_7"
    },
    "wall_seo_7": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "wall_seo_8"
    },
    "wall_seo_8": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "wall_seo_9"
    },
    "wall_seo_9": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "wall_seo_10"
    },
    "wall_seo_10": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "wall_seo_11"
    },
    "wall_seo_11": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "wall_seo_12"
    },
    "wall_seo_12": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "wall_seo_13"
    },
    "wall_seo_13": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "wall_seo_14"
    },
    "wall_seo_14": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "wall_seo_15"
    },
    "wall_seo_15": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "wall_seo_hug_choice"
    },

    // 선택지 1: 안아준다 / 새끼손가락
    "wall_seo_hug_choice": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "choices": [
            {
                "next": "wall_seo_hug_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 15
                    }
                },
                "setFlag": "day4_hugged_seoyeon"
            },
            {
                "next": "wall_seo_pinky_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 15
                    }
                },
                "setFlag": "day4_pinky_seoyeon"
            }
        ]
    },

    // 선택 1: 안아준다
    "wall_seo_hug_1": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "wall_seo_hug_2"
    },
    "wall_seo_hug_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "wall_seo_hug_3"
    },
    "wall_seo_hug_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "wall_seo_line_choice"
    },

    // 선택 2: 새끼손가락
    "wall_seo_pinky_1": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "wall_seo_pinky_2"
    },
    "wall_seo_pinky_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "wall_seo_pinky_3"
    },
    "wall_seo_pinky_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "wall_seo_pinky_4"
    },
    "wall_seo_pinky_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "wall_seo_pinky_5"
    },
    "wall_seo_pinky_5": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "next": "wall_seo_line_choice"
    },

    // 선택지 2: 핵심 대사 선택 (3지선다)
    "wall_seo_line_choice": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_cry.png",
        "night": true,
        "choices": [
            {
                "next": "wall_seo_after_line",
                "stats": {
                    "Seoyeon": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "wall_seo_after_line",
                "stats": {
                    "Seoyeon": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "wall_seo_after_line",
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            }
        ]
    },

    // 선택 후 공통 흐름
    "wall_seo_after_line": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "wall_seo_after_line_2"
    },
    "wall_seo_after_line_2": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "next": "wall_seo_after_line_3"
    },
    "wall_seo_after_line_3": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "next": "wall_seo_after_line_4"
    },
    "wall_seo_after_line_4": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "next": "wall_seo_after_line_5"
    },
    "wall_seo_after_line_5": {
        "background": "assets/images/background/park.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "setFlag": "day4_seoyeon_wall_broken",
        "next": "wall_seo_glimpse_1"
    },

    // Cross-route glimpse: 체육관에서 다인 목격
    "wall_seo_glimpse_1": {
        "background": "assets/images/background/school_back.png",
        "night": true,
        "next": "wall_seo_glimpse_2"
    },
    "wall_seo_glimpse_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_seo_glimpse_3"
    },
    "wall_seo_glimpse_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_seo_glimpse_4"
    },
    "wall_seo_glimpse_4": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "night": true,
        "fade": true,
        "next": "day4_final"
    },

    // ========================================================================
    // ★★★ 다인 밤 — 멈춰버린 꿈 (route_dain)
    // ========================================================================
    "wall_dain_1": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "bgm": "night2.mp3",
        "next": "wall_dain_2"
    },
    "wall_dain_2": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "wall_dain_3"
    },
    "wall_dain_3": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "wall_dain_4"
    },
    "wall_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "wall_dain_5"
    },
    "wall_dain_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "wall_dain_6"
    },
    "wall_dain_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "wall_dain_7"
    },
    "wall_dain_7": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "wall_dain_8"
    },
    "wall_dain_8": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "wall_dain_9"
    },
    "wall_dain_9": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_10"
    },
    "wall_dain_10": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_11"
    },
    "wall_dain_11": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sweat.png",
        "night": true,
        "next": "wall_dain_12"
    },
    "wall_dain_12": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_13"
    },
    "wall_dain_13": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_14"
    },
    "wall_dain_14": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_15"
    },
    "wall_dain_15": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_16"
    },
    "wall_dain_16": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_17"
    },
    "wall_dain_17": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_18"
    },
    "wall_dain_18": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_19"
    },
    "wall_dain_19": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_20"
    },
    "wall_dain_20": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_21"
    },
    "wall_dain_21": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_22"
    },
    "wall_dain_22": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_choice"
    },

    // 선택지: 새로운꿈 +10 / 울어도돼 +20 / 마지막토스 +15
    "wall_dain_choice": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "choices": [
            {
                "next": "wall_dain_newdream_1",
                "stats": {
                    "Dain": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "wall_dain_cry_1",
                "stats": {
                    "Dain": {
                        "affinity": 20
                    }
                },
                "setFlag": "day4_dain_tears"
            },
            {
                "next": "wall_dain_lastspike_1",
                "stats": {
                    "Dain": {
                        "affinity": 15
                    }
                }
            }
        ]
    },

    // 선택 1: 새로운 꿈
    "wall_dain_newdream_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_newdream_2"
    },
    "wall_dain_newdream_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "wall_dain_newdream_3"
    },
    "wall_dain_newdream_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "wall_dain_newdream_4"
    },
    "wall_dain_newdream_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_farewell_1"
    },

    // 선택 2: 울어도 돼 (울음 씬)
    "wall_dain_cry_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_cry_2"
    },
    "wall_dain_cry_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_cry_3"
    },
    "wall_dain_cry_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_cry_4"
    },
    "wall_dain_cry_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_cry_5"
    },
    "wall_dain_cry_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_cry_6"
    },
    "wall_dain_cry_6": {
        "background": "assets/images/background/gym.png",
        "night": true,
        "next": "wall_dain_farewell_1"
    },

    // 선택 3: 마지막 스파이크
    "wall_dain_lastspike_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_lastspike_2"
    },
    "wall_dain_lastspike_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "wall_dain_lastspike_3"
    },
    "wall_dain_lastspike_3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "wall_dain_lastspike_4"
    },
    "wall_dain_lastspike_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_lastspike_5"
    },
    "wall_dain_lastspike_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_sad.png",
        "night": true,
        "next": "wall_dain_lastspike_6"
    },
    "wall_dain_lastspike_6": {
        "background": "assets/images/background/gym.png",
        "night": true,
        "next": "wall_dain_farewell_1"
    },

    // 공통 이별 인사
    "wall_dain_farewell_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "setFlag": "day4_dain_wall_broken",
        "next": "wall_dain_farewell_2"
    },
    "wall_dain_farewell_2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "night": true,
        "next": "wall_dain_glimpse_1"
    },

    // Cross-route glimpse: 도서관 별관 유나 목격
    "wall_dain_glimpse_1": {
        "background": "assets/images/background/school_back.png",
        "night": true,
        "next": "wall_dain_glimpse_2"
    },
    "wall_dain_glimpse_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "wall_dain_glimpse_3"
    },
    "wall_dain_glimpse_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "wall_dain_glimpse_4"
    },
    "wall_dain_glimpse_4": {
        "background": "assets/images/background/school_back.png",
        "night": true,
        "fade": true,
        "next": "day4_final"
    },

    // ========================================================================
    // ★★★ 유나 밤 — 편지, 그리고 벽 너머 (route_yuna)
    // ========================================================================
    "wall_yuna_1": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "bgm": "night2.mp3",
        "next": "wall_yuna_2"
    },
    "wall_yuna_2": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "wall_yuna_3"
    },
    "wall_yuna_3": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "wall_yuna_4"
    },
    "wall_yuna_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "wall_yuna_5"
    },
    "wall_yuna_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "wall_yuna_6"
    },
    "wall_yuna_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "wall_yuna_7"
    },
    "wall_yuna_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "wall_yuna_8"
    },
    "wall_yuna_8": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "wall_yuna_9"
    },
    "wall_yuna_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "wall_yuna_10"
    },
    "wall_yuna_10": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "wall_yuna_11"
    },
    "wall_yuna_11": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "wall_yuna_12"
    },
    "wall_yuna_12": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "wall_yuna_13"
    },
    "wall_yuna_13": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "wall_yuna_14"
    },
    "wall_yuna_14": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "wall_yuna_15"
    },
    "wall_yuna_15": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "wall_yuna_16"
    },
    "wall_yuna_16": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "wall_yuna_choice"
    },

    // 선택지: 나는 그 선배가 아니야 +15 / 대역이어도 +10 / 선배 대신? -10
    "wall_yuna_choice": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "choices": [
            {
                "next": "wall_yuna_moved_1",
                "stats": {
                    "Yuna": {
                        "affinity": 15
                    }
                },
                "setFlag": "day4_yuna_ally"
            },
            {
                "next": "wall_yuna_sub_1",
                "stats": {
                    "Yuna": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "wall_yuna_reject_1",
                "stats": {
                    "Yuna": {
                        "affinity": -10
                    }
                }
            }
        ]
    },

    // 선택 1: "나는 그 선배가 아니야"
    "wall_yuna_moved_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "wall_yuna_moved_2"
    },
    "wall_yuna_moved_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "night": true,
        "next": "wall_yuna_moved_3"
    },
    "wall_yuna_moved_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "wall_yuna_moved_4"
    },
    "wall_yuna_moved_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "wall_yuna_moved_5"
    },
    "wall_yuna_moved_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "night": true,
        "setFlag": "day4_yuna_wall_broken",
        "next": "wall_yuna_glimpse_1"
    },

    // 선택 2: "대역이어도 괜찮아"
    "wall_yuna_sub_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "wall_yuna_sub_2"
    },
    "wall_yuna_sub_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "night": true,
        "setFlag": "day4_yuna_wall_broken",
        "next": "wall_yuna_glimpse_1"
    },

    // 선택 3: "선배 대신?" (최악)
    "wall_yuna_reject_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "wall_yuna_reject_2"
    },
    "wall_yuna_reject_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "wall_yuna_reject_3"
    },
    "wall_yuna_reject_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_sad.png",
        "night": true,
        "next": "wall_yuna_reject_4"
    },
    "wall_yuna_reject_4": {
        "background": "assets/images/background/yuna_hideout.png",
        "night": true,
        "next": "wall_yuna_glimpse_1"
    },

    // Cross-route glimpse: 교문 앞 서연 목격
    "wall_yuna_glimpse_1": {
        "background": "assets/images/background/school_back.png",
        "night": true,
        "next": "wall_yuna_glimpse_2"
    },
    "wall_yuna_glimpse_2": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "next": "wall_yuna_glimpse_3"
    },
    "wall_yuna_glimpse_3": {
        "background": "assets/images/background/school_back.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "night": true,
        "next": "wall_yuna_glimpse_4"
    },
    "wall_yuna_glimpse_4": {
        "background": "assets/images/background/school_back.png",
        "character": null,
        "night": true,
        "fade": true,
        "next": "day4_final"
    },

    // ========================================================================
    // 공통 ending / fallback
    // ========================================================================
    "day4_night_regret": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_regret_2"
    },
    "day4_night_regret_2": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_regret_msg"
    },
    "day4_night_regret_msg": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_regret_reply"
    },
    "day4_night_regret_reply": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_sleep"
    },
    "day4_night_reflect": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "next": "day4_night_sleep"
    },
    "day4_night_sleep": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "fade": true,
        "next": "day4_final"
    },
    "day4_final": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "changeDay": 5,
        "next": "morning5_start"
    }
});
