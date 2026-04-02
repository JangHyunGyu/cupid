/**
 * ============================================================================
 * CUPID - day2_3_afterschool
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[2]) SCENARIO[2] = {};

(function() {
const _scenes = {
    "after2_start": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "bgm": "sunset1.mp3",
        "next": "after2_msg_dain"
    },
    "after2_msg_dain": {
        "background": "assets/images/background/room_school.png",
        "characters": {"center":{"src":"assets/images/characters/dain_active.png","opacity":0.35}},
        "next": "after2_msg_seo"
    },
    "after2_msg_seo": {
        "background": "assets/images/background/room_school.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "after2_msg_yuna"
    },
    "after2_msg_yuna": {
        "background": "assets/images/background/room_school.png",
        "characters": {"center":{"src":"assets/images/characters/yuna_normal.png","opacity":0.35}},
        "branches": [
            { "condition": "nurse_day1", "next": "after2_nurse_transition" },
            { "next": "after2_choice" }
        ]
    },
    "after2_nurse_transition": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "hidden_nurse_d2_1"
    },
    "after2_choice": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "bgm": "sunset1.mp3",
        "choices": [
            { "next": "after2_dain_1" },
            { "next": "after2_seo_1" },
            { "next": "after2_yuna_1" }
        ]
    },
    "after2_dain_1": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_active.png",
        "bgm": "daily2.mp3",
        "setFlags": ["chose_dain_after2"],
        "stats": {"Dain":{"affinity":8}},
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
        "character": "assets/images/characters/dain_laugh.png",
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
        "next": "after2_dain_9_ins"
    },
    "after2_dain_10": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_11"
    },
    "after2_dain_11": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_11b"
    },
    "after2_dain_11b": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_12"
    },
    "after2_dain_12": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "bgm": "daily.mp3",
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
        "affinityChar": "Dain",
        "affinityBranches": [{"minAffinity":25,"next":"after2_dain_skinship_1"},{"minAffinity":-100,"next":"after2_dain_freetalk"}],
        "next": "after2_dain_freetalk"
    },
    "after2_dain_skinship_1": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_skinship_2"
    },
    "after2_dain_skinship_2": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after2_dain_skinship_3"
    },
    "after2_dain_skinship_3": {
        "background": "assets/images/background/street.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "after2_dain_freetalk"
    },
    "after2_dain_end": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_end_ins"
    },
    "after2_dain_end_first": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_end_ins"
    },
    "after2_dain_end_2": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_end_2b"
    },
    "after2_dain_end_2b": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_end_2c"
    },
    "after2_dain_end_2c": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_end_2d"
    },
    "after2_dain_end_2d": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_end_3"
    },
    "after2_dain_end_3": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_end_3b"
    },
    "after2_dain_end_3b": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_end_3c"
    },
    "after2_dain_end_3c": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_end_3d"
    },
    "after2_dain_end_3d": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_end_3e"
    },
    "after2_dain_end_3e": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_shy.png",
        "stats": {"Seoyeon":{"affinity":-5},"Yuna":{"affinity":-5}},
        "next": "after2_dain_return"
    },
    "after2_dain_return": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/dain_shy.png",
        "next": "minsu_warn_1"
    },
    "after2_seo_1": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "bgm": "sunset1.mp3",
        "setFlags": ["chose_seo_after2"],
        "stats": {"Seoyeon":{"affinity":8}},
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
        "next": "after2_seo_4_ins"
    },
    "after2_seo_5": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_6"
    },
    "after2_seo_6": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_6_ins"
    },
    "after2_seo_7": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_8"
    },
    "after2_seo_8": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_8a2"
    },
    "after2_seo_8a2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_8a3"
    },
    "after2_seo_8a3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_8a4"
    },
    "after2_seo_8a4": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_8b"
    },
    "after2_seo_8b": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_8b2"
    },
    "after2_seo_8b2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_8b3"
    },
    "after2_seo_8b3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_8b4"
    },
    "after2_seo_8b4": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "after2_seo_8b4_ins"
    },
    "after2_seo_choice1": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            { "next": "after2_seo_sunset_joke", "stats": {"Seoyeon":{"affinity":5}} },
            { "next": "after2_seo_neck_worry", "stats": {"Seoyeon":{"affinity":3}} }
        ]
    },
    "after2_seo_sunset_joke": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "after2_seo_sunset_joke_ins"
    },
    "after2_seo_sunset_react": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_shy2.png",
        "next": "after2_seo_sunset_react_ins"
    },
    "after2_seo_neck_worry": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_neck_react"
    },
    "after2_seo_neck_react": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_neck_react_ins"
    },
    "after2_seo_neck_touch": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "affinityChar": "Seoyeon",
        "affinityBranches": [{"minAffinity":50,"next":"after2_seo_neck_high"},{"minAffinity":-100,"next":"after2_seo_neck_low"}]
    },
    "after2_seo_neck_high": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "after2_seo_neck_high_ins"
    },
    "after2_seo_neck_high_2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "after2_seo_neck_high_2_ins"
    },
    "after2_seo_neck_high_2_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "after2_seo_9"
    },
    "after2_seo_neck_low": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_neck_low_ins"
    },
    "after2_seo_neck_low_2": {
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
            { "next": "after2_seo_stay", "stats": {"Seoyeon":{"affinity":5}} },
            { "next": "after2_seo_leave", "stats": {"Seoyeon":{"affinity":0}} }
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
        "next": "after2_seo_stay_3b"
    },
    "after2_seo_stay_3b": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "after2_seo_stay_3c"
    },
    "after2_seo_stay_3c": {
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
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "stats": {"Dain":{"affinity":-5},"Yuna":{"affinity":-5}},
        "affinityChar": "Seoyeon",
        "affinityBranches": [{"minAffinity":25,"next":"after2_seo_skinship_1"},{"minAffinity":-100,"next":"after2_seo_return"}],
        "next": "after2_seo_return"
    },
    "after2_seo_skinship_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_skinship_2"
    },
    "after2_seo_skinship_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "after2_seo_skinship_3"
    },
    "after2_seo_skinship_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_return"
    },
    "after2_seo_return": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "minsu_warn_1"
    },
    "after2_yuna_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "bgm": "night1.mp3",
        "setFlags": ["chose_yuna_after2"],
        "next": "after2_yuna_1_ins"
    },
    "after2_yuna_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "stats": {"Yuna":{"affinity":8}},
        "next": "after2_yuna_2_ins"
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
        "next": "after2_yuna_8b"
    },
    "after2_yuna_8b": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_8b_ins"
    },
    "after2_yuna_8c": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_8d"
    },
    "after2_yuna_8d": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_9"
    },
    "after2_yuna_9": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_choice_pre1"
    },
    "after2_yuna_choice_pre1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_choice_pre2"
    },
    "after2_yuna_choice_pre2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_choice_pre3"
    },
    "after2_yuna_choice_pre3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_choice_pre3_ins"
    },
    "after2_yuna_choice": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "choices": [
            { "next": "after2_yuna_everyday", "stats": {"Yuna":{"affinity":8}} },
            { "next": "after2_yuna_quiet", "stats": {"Yuna":{"affinity":5}} }
        ]
    },
    "after2_yuna_everyday": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after2_yuna_everyday_ins"
    },
    "after2_yuna_everyday_react": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after2_yuna_everyday_react_ins"
    },
    "after2_yuna_everyday_react_ins": {
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
        "stats": {"Seoyeon":{"affinity":-5},"Dain":{"affinity":-5}},
        "affinityChar": "Yuna",
        "affinityBranches": [{"minAffinity":25,"next":"after2_yuna_skinship_1"},{"minAffinity":-100,"next":"after2_yuna_return"}],
        "next": "after2_yuna_return"
    },
    "after2_yuna_skinship_1": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_skinship_2"
    },
    "after2_yuna_skinship_2": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "next": "after2_yuna_skinship_3"
    },
    "after2_yuna_skinship_3": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_return"
    },
    "after2_yuna_return": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/yuna_smile.png",
        "next": "minsu_warn_1"
    },
    "minsu_warn_1": {
        "background": "assets/images/background/school.png",
        "character": null,
        "bgm": "sunset1.mp3",
        "next": "minsu_warn_1_ins"
    },
    "minsu_warn_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_3"
    },
    "minsu_warn_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_4"
    },
    "minsu_warn_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_4_ins"
    },
    "minsu_warn_5": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_6"
    },
    "minsu_warn_6": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_7"
    },
    "minsu_warn_7": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_7_ins"
    },
    "minsu_warn_8": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_8b"
    },
    "minsu_warn_8b": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_9"
    },
    "minsu_warn_9": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_10"
    },
    "minsu_warn_10": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_11"
    },
    "minsu_warn_11": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_11b"
    },
    "minsu_warn_11b": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_11c"
    },
    "minsu_warn_11c": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_12"
    },
    "minsu_warn_12": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_12_ins"
    },
    "minsu_warn_13": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_13_ins"
    },
    "minsu_warn_13b": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_14"
    },
    "minsu_warn_14": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_15"
    },
    "minsu_warn_15": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_15_ins"
    },
    "after2_dain_freetalk": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_normal.png",
        "branches": [
            { "condition": "chose_dain_lunch", "next": "after2_dain_end" },
            { "next": "after2_dain_end_first" }
        ]
    },
    "hidden_nurse_d2_1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_2"
    },
    "hidden_nurse_d2_2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_3"
    },
    "hidden_nurse_d2_3": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_4"
    },
    "hidden_nurse_d2_4": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_5"
    },
    "hidden_nurse_d2_5": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_choice1"
    },
    "hidden_nurse_d2_choice1": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            { "next": "hidden_nurse_d2_choice1_a", "stats": {"Nurse":{"affinity":10}} },
            { "next": "hidden_nurse_d2_choice1_b", "stats": {"Nurse":{"affinity":3}} }
        ]
    },
    "hidden_nurse_d2_choice1_a": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_shy.png",
        "next": "hidden_nurse_d2_6"
    },
    "hidden_nurse_d2_choice1_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_6"
    },
    "hidden_nurse_d2_6": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_7"
    },
    "hidden_nurse_d2_7": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_choice2"
    },
    "hidden_nurse_d2_choice2": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "choices": [
            { "next": "hidden_nurse_d2_choice2_a", "stats": {"Nurse":{"affinity":7}} },
            { "next": "hidden_nurse_d2_choice2_b", "stats": {"Nurse":{"affinity":0}} }
        ]
    },
    "hidden_nurse_d2_choice2_a": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_8"
    },
    "hidden_nurse_d2_choice2_b": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_8"
    },
    "hidden_nurse_d2_8": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "hidden_nurse_d2_9"
    },
    "hidden_nurse_d2_9": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "setFlags": ["nurse_day2"],
        "next": "hidden_nurse_d2_freetalk"
    },
    "hidden_nurse_d2_freetalk": {
        "background": "assets/images/background/nurse_room.png",
        "character": "assets/images/characters/nurse_normal.png",
        "next": "after2_choice"
    },
    "after2_dain_9_ins": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_9_ins2"
    },
    "after2_dain_9_ins2": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_9_ins3"
    },
    "after2_dain_9_ins3": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "after2_dain_9_ins4"
    },
    "after2_dain_9_ins4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_9_ins5"
    },
    "after2_dain_9_ins5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_9_ins6"
    },
    "after2_dain_9_ins6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_10"
    },
    "after2_dain_end_ins": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_end_ins2"
    },
    "after2_dain_end_ins2": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_end_ins3"
    },
    "after2_dain_end_ins3": {
        "background": "assets/images/background/store.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "after2_dain_end_2"
    },
    "after2_seo_4_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_5"
    },
    "after2_seo_6_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_6_ins2"
    },
    "after2_seo_6_ins2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_7"
    },
    "after2_seo_8b4_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "after2_seo_8b4_ins2"
    },
    "after2_seo_8b4_ins2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "after2_seo_choice1"
    },
    "after2_seo_sunset_joke_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_sunset_react"
    },
    "after2_seo_sunset_react_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_9"
    },
    "after2_seo_neck_react_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_neck_react_ins2"
    },
    "after2_seo_neck_react_ins2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_neck_touch"
    },
    "after2_seo_neck_high_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_neck_high_ins2"
    },
    "after2_seo_neck_high_ins2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "after2_seo_neck_high_2"
    },
    "after2_seo_neck_low_ins": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_neck_low_ins2"
    },
    "after2_seo_neck_low_ins2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "after2_seo_neck_low_2"
    },
    "after2_yuna_1_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_2"
    },
"after2_yuna_2_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_3"
    },
"after2_yuna_8b_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_8c"
    },
"after2_yuna_choice_pre3_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_choice"
    },
    "after2_yuna_everyday_ins": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_normal.png",
        "next": "after2_yuna_everyday_react"
    },
    "minsu_warn_4_ins": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "minsu_warn_5"
    },
    "minsu_warn_1_ins": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "minsu_warn_2"
    },
    "minsu_warn_7_ins": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_7_ins2"
    },
    "minsu_warn_7_ins2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "minsu_warn_8"
    },
    "minsu_warn_12_ins": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_13"
    },
    "minsu_warn_13_ins": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_13b"
    },
    "minsu_warn_15_ins": {
        "background": "assets/images/background/school.png",
        "characters": {"center":{"src":"assets/images/characters/dain_normal.png","opacity":0.35}},
        "next": "minsu_warn_15_ins2"
    },
    "minsu_warn_15_ins2": {
        "background": "assets/images/background/school.png",
        "characters": {"center":{"src":"assets/images/characters/seyoun_normal.png","opacity":0.35}},
        "next": "minsu_warn_15_ins3"
    },
    "minsu_warn_15_ins3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "minsu_warn_15_ins4"
    },
    "minsu_warn_15_ins4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "night2_start"
    }
};
Object.assign(SCENARIO[2], _scenes);
Object.values(_scenes).forEach(s => { if (!(s.background||'').includes('ending_') && !(s.background||'').includes('_event')) s.sunset = true; });
})();