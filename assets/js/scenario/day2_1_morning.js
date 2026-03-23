/**
 * ============================================================================
 * CUPID - day2_1_morning
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[2]) SCENARIO[2] = {};

Object.assign(SCENARIO[2], {
    "morning2_start": {
        "background": "assets/images/background/room_school.png",
        "bgm": "daily.mp3",
        "character": null,
        "next": "morning2_start_2"
    },
    "morning2_start_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "affinityBranches": [
            { "char": "Seoyeon", "minAffinity": 15, "next": "morning2_greet_seo_1" },
            { "char": "Dain", "minAffinity": 15, "next": "morning2_greet_dain_1" },
            { "char": "Yuna", "minAffinity": 15, "next": "morning2_greet_yuna_1" }
        ],
        "next": "morning2_dain_1"
    },
    // =========================================================================
    // A-2: 호감도 최고 캐릭터 인사 분기
    // =========================================================================
    "morning2_greet_seo_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_greet_seo_2"
    },
    "morning2_greet_seo_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_greet_seo_others"
    },
    // B-1.5: 서연 접근 시 나머지 반응
    "morning2_greet_seo_others": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning2_greet_seo_others_2"
    },
    "morning2_greet_seo_others_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning2_note_1"
    },
    "morning2_greet_dain_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning2_greet_dain_2"
    },
    "morning2_greet_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning2_greet_dain_others"
    },
    // B-1.5: 다인 접근 시 나머지 반응
    "morning2_greet_dain_others": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning2_greet_dain_others_2"
    },
    "morning2_greet_dain_others_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning2_note_1"
    },
    "morning2_greet_yuna_1": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning2_greet_yuna_2"
    },
    "morning2_greet_yuna_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning2_greet_yuna_others"
    },
    // B-1.5: 유나 쪽지 시 나머지 반응
    "morning2_greet_yuna_others": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning2_greet_yuna_others_2"
    },
    "morning2_greet_yuna_others_2": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "next": "morning2_seo_2"
    },
    "morning2_dain_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning2_dain_2"
    },
    "morning2_dain_2": {
        "character": "assets/images/characters/dain_normal.png",
        "background": "assets/images/background/room_school.png",
        "next": "morning2_dain_3"
    },
    "morning2_dain_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning2_dain_4"
    },
    "morning2_dain_4": {
        "character": "assets/images/characters/dain_laugh.png",
        "background": "assets/images/background/room_school.png",
        "next": "morning2_dain_5"
    },
    "morning2_dain_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning2_dain_6"
    },
    "morning2_dain_6": {
        "character": "assets/images/characters/dain_laugh.png",
        "background": "assets/images/background/room_school.png",
        "next": "morning2_note_1"
    },
    "morning2_note_1": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "morning2_note_2"
    },
    "morning2_note_2": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "morning2_note_3"
    },
    "morning2_note_3": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "morning2_seo_1"
    },
    "morning2_seo_1": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "morning2_seo_2"
    },
    "morning2_seo_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_seo_3"
    },
    "morning2_seo_3": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/room_school.png",
        "next": "morning2_seo_4"
    },
    "morning2_seo_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "morning2_seo_5"
    },
    "morning2_seo_5": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "background": "assets/images/background/room_school.png",
        "next": "morning2_minsu_1"
    },
    "morning2_minsu_1": {
        "character": "assets/images/characters/minsu_normal.png",
        "background": "assets/images/background/room_school.png",
        "next": "morning2_minsu_2"
    },
    "morning2_minsu_2": {
        "character": "assets/images/characters/minsu_normal.png",
        "background": "assets/images/background/room_school.png",
        "next": "morning2_minsu_3"
    },
    "morning2_minsu_3": {
        "character": "assets/images/characters/minsu_smirk.png",
        "background": "assets/images/background/room_school.png",
        "next": "morning2_dain_claim_1"
    },
    "morning2_dain_claim_1": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "morning2_dain_claim_2"
    },
    "morning2_dain_claim_2": {
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "morning2_dain_claim_3"
    },
    "morning2_dain_claim_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning2_dain_claim_4"
    },
    "morning2_dain_claim_4": {
        "character": "assets/images/characters/dain_laugh.png",
        "background": "assets/images/background/room_school.png",
        "next": "morning2_dain_claim_5"
    },
    "morning2_dain_claim_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "morning2_dain_claim_6"
    },
    "morning2_dain_claim_6": {
        "character": "assets/images/characters/dain_laugh.png",
        "background": "assets/images/background/room_school.png",
        "branches": [
            { "condition": "homeroom_day1", "next": "hidden_homeroom_d2_1" },
            { "next": "morning2_break_1" }
        ]
    },
    "morning2_break_1": {
        "character": null,
        "background": "assets/images/background/school_hallway.png",
        "next": "morning2_seo_dust_1"
    },
    "morning2_seo_dust_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_seo_dust_2"
    },
    "morning2_seo_dust_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_seo_dust_3"
    },
    "morning2_seo_dust_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_seo_dust_4"
    },
    "morning2_seo_dust_4": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "next": "morning2_seo_dust_5"
    },
    "morning2_seo_dust_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "morning2_seo_dust_6"
    },
    "morning2_seo_dust_6": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "next": "morning2_dain_react_1"
    },
    "morning2_dain_react_1": {
        "character": null,
        "background": "assets/images/background/school_hallway.png",
        "next": "morning2_dain_react_2"
    },
    "morning2_dain_react_2": {
        "character": null,
        "background": "assets/images/background/school_hallway.png",
        "next": "morning2_dain_react_3"
    },
    "morning2_dain_react_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning2_dain_react_4"
    },
    "morning2_dain_react_4": {
        "character": "assets/images/characters/dain_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "next": "morning2_dain_react_5"
    },
    "morning2_dain_react_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "morning2_dain_react_6"
    },
    "morning2_dain_react_6": {
        "character": "assets/images/characters/dain_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "next": "morning2_haeun_1"
    },
    "morning2_haeun_1": {
        "character": "assets/images/characters/haeun_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "next": "morning2_haeun_2"
    },
    "morning2_haeun_2": {
        "character": "assets/images/characters/haeun_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "next": "morning2_haeun_3"
    },
    "morning2_haeun_3": {
        "character": "assets/images/characters/haeun_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "next": "morning2_haeun_4"
    },
    "morning2_haeun_4": {
        "character": "assets/images/characters/haeun_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "next": "morning2_haeun_5"
    },
    "morning2_haeun_5": {
        "character": "assets/images/characters/haeun_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "next": "morning2_haeun_6"
    },
    "morning2_haeun_6": {
        "character": "assets/images/characters/haeun_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "next": "morning2_haeun_6b"
    },
    "morning2_haeun_6b": {
        "character": "assets/images/characters/haeun_worried.png",
        "background": "assets/images/background/school_hallway.png",
        "next": "morning2_haeun_6c"
    },
    "morning2_haeun_6c": {
        "character": "assets/images/characters/haeun_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "next": "morning2_haeun_7"
    },
    "morning2_haeun_7": {
        "character": "assets/images/characters/haeun_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "next": "morning2_end"
    },
    "morning2_end": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "lunch2_start"
    },

    // =========================================================================
    // HIDDEN ROUTE - Day 2 담임 교무실 호출
    // =========================================================================
    "hidden_homeroom_d2_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_normal.png",
        "condition": "homeroom_day1",
        "next": "hidden_homeroom_d2_2"
    },
    "hidden_homeroom_d2_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_3"
    },
    "hidden_homeroom_d2_3": {
        "stats": { "Teacher": { "affinity": 7 } },
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_4"
    },
    "hidden_homeroom_d2_4": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_5"
    },
    "hidden_homeroom_d2_5": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_6"
    },
    "hidden_homeroom_d2_6": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_7"
    },
    "hidden_homeroom_d2_7": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_8"
    },
    "hidden_homeroom_d2_8": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_9"
    },
    "hidden_homeroom_d2_9": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_10"
    },
    "hidden_homeroom_d2_10": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_11"
    },
    "hidden_homeroom_d2_11": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_12"
    },
    "hidden_homeroom_d2_12": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "setFlags": ["homeroom_day2", "noticed_manuscript"],
        "next": "morning2_seo_dust_1"
    },
});
