/**
 * ============================================================================
 * CUPID - day1_1_morning
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[1]) SCENARIO[1] = {};

(() => {
    const scenes = {
    "start": {
        "background": "assets/images/background/school.png",
        "character": null,
        "bgm": "intro.mp3",
        "next": "start_3"
    },
    "start_3": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "name_input_scene"
    },
    "name_input_scene": {
        "background": "assets/images/background/school.png",
        "character": null,
        "type": "input",
        "next": "gate_1"
    },
    "gate_1": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "seoyeon_meet_1"
    },
    "seoyeon_meet_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "seoyeon_meet_2"
    },
    "seoyeon_meet_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "seoyeon_meet_3"
    },
    "seoyeon_meet_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "seoyeon_meet_4"
    },
    "seoyeon_meet_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "seoyeon_meet_5"
    },
    "seoyeon_meet_5": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "seoyeon_meet_6"
    },
    "seoyeon_meet_6": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "seoyeon_meet_7"
    },
    "seoyeon_meet_7": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "seoyeon_meet_8"
    },
    "seoyeon_meet_8": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "seoyeon_choice"
    },
    "seoyeon_choice": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "choices": [
            { "next": "choice_flirt_1", "stats": {"Seoyeon":{"affinity":5}} },
            { "next": "choice_joke_1", "stats": {"Seoyeon":{"affinity":3}} },
            { "next": "choice_dismiss_1", "stats": {"Seoyeon":{"affinity":-3}} }
        ]
    },
    "choice_dismiss_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "choice_dismiss_2"
    },
    "choice_dismiss_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "choice_dismiss_3"
    },
    "choice_dismiss_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "classroom_1"
    },
    "choice_flirt_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "choice_flirt_2"
    },
    "choice_flirt_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "choice_flirt_3"
    },
    "choice_flirt_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "choice_flirt_4"
    },
    "choice_flirt_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "choice_flirt_5"
    },
    "choice_flirt_5": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "choice_flirt_6"
    },
    "choice_flirt_6": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "choice_flirt_7"
    },
    "choice_flirt_7": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "hallway_1"
    },
    "choice_joke_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "choice_joke_2"
    },
    "choice_joke_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "choice_joke_3"
    },
    "choice_joke_3": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_1"
    },
    "hallway_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_back.png",
        "next": "hallway_3"
    },
    "hallway_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_4"
    },
    "hallway_4": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_5"
    },
    "hallway_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_6"
    },
    "hallway_6": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_6_ins"
    },
    "hallway_6_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_6_ins2"
    },
    "hallway_6_ins2": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_7"
    },
    "hallway_7": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_8"
    },
    "hallway_8": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "hallway_10"
    },
    "hallway_10": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_11"
    },
    "hallway_11": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_12"
    },
    "hallway_12": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_13"
    },
    "hallway_13": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_back.png",
        "next": "hallway_13_ins"
    },
    "hallway_13_ins": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_back.png",
        "setFlags": ["met_seoyeon"],
        "next": "classroom_1"
    },
    "classroom_1": {
        "background": "assets/images/background/room_school.png",
        "character": null,
        "bgm": "daily.mp3",
        "next": "classroom_2_ins"
    },
    "classroom_2_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "classroom_3"
    },
    "classroom_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "classroom_3_ins"
    },
    "classroom_3_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "classroom_5_ins2"
    },
    "classroom_5_ins2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "classroom_5_ins3"
    },
    "classroom_5_ins3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "classroom_dain_1"
    },
    "classroom_dain_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "classroom_dain_2"
    },
    "classroom_dain_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "classroom_dain_3"
    },
    "classroom_dain_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "classroom_dain_4"
    },
    "classroom_dain_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "classroom_dain_5"
    },
    "classroom_dain_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "classroom_dain_5_ins"
    },
    "classroom_dain_5_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "classroom_dain_5_ins2"
    },
    "classroom_dain_5_ins2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "classroom_dain_5_ins3"
    },
    "classroom_dain_5_ins3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_angry.png",
        "next": "classroom_yuna_1"
    },
    "classroom_yuna_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "next": "classroom_yuna_2"
    },
    "classroom_yuna_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "next": "classroom_yuna_4"
    },
    "classroom_yuna_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "next": "classroom_seat_1"
    },
    "classroom_seat_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "classroom_seat_2"
    },
    "classroom_seat_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "classroom_minsu_1"
    },
    "classroom_minsu_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "classroom_minsu_2"
    },
    "classroom_minsu_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "classroom_minsu_3"
    },
    "classroom_minsu_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/minsu_smirk.png",
        "next": "classroom_minsu_2_ins"
    },
    "classroom_minsu_2_ins": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "classroom_dain_talk_1"
    },
    "classroom_dain_talk_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/minsu_normal.png",
        "next": "classroom_dain_talk_2"
    },
    "classroom_dain_talk_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "classroom_dain_talk_3"
    },
    "classroom_dain_talk_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "classroom_dain_talk_4"
    },
    "classroom_dain_talk_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "classroom_dain_talk_5"
    },
    "classroom_dain_talk_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "classroom_dain_talk_6"
    },
    "classroom_dain_talk_6": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "classroom_dain_talk_7"
    },
    "classroom_dain_talk_7": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "classroom_dain_talk_8"
    },
    "classroom_dain_talk_8": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "classroom_yuna_note_1"
    },
    "classroom_yuna_note_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "next": "classroom_yuna_note_3"
    },
    "classroom_yuna_note_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "next": "classroom_yuna_note_5"
    },
    "classroom_yuna_note_5": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "next": "classroom_yuna_note_6"
    },
    "classroom_yuna_note_6": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "next": "lunch_start"
    }
    };
    for (const scene of Object.values(scenes)) {
        if (scene && typeof scene === 'object') {
            Object.defineProperty(scene, "__sourceFile", {
                value: "day1_1_morning",
                enumerable: false
            });
        }
    }
    Object.assign(SCENARIO[1], scenes);
})();
