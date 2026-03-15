/**
 * ============================================================================
 * CUPID - day1_1_morning
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[1]) SCENARIO[1] = {};

Object.assign(SCENARIO[1], {
    "start": {
        "background": "assets/images/background/school.png",
        "bgm": "intro.mp3",
        "character": null,
        "next": "start_2"
    },
    "start_2": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "start_3"
    },
    "start_3": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "start_4"
    },
    "start_4": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "start_5"
    },
    "start_5": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "start_6"
    },
    "start_6": {
        "background": "assets/images/background/school.png",
        "character": null,
        "next": "name_input_scene"
    },
    "name_input_scene": {
        "character": null,
        "type": "input",
        "background": "assets/images/background/school.png",
        "next": "gate_1"
    },
    "gate_1": {
        "character": null,
        "background": "assets/images/background/school.png",
        "next": "gate_2"
    },
    "gate_2": {
        "character": null,
        "background": "assets/images/background/school.png",
        "next": "gate_3"
    },
    "gate_3": {
        "character": null,
        "background": "assets/images/background/school.png",
        "next": "seoyeon_meet_1"
    },
    "seoyeon_meet_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "seoyeon_meet_2"
    },
    "seoyeon_meet_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/school.png",
        "next": "seoyeon_meet_3"
    },
    "seoyeon_meet_3": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/school.png",
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
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/school.png",
        "next": "seoyeon_meet_7"
    },
    "seoyeon_meet_7": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "seoyeon_meet_8"
    },
    "seoyeon_meet_8": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "seoyeon_meet_9"
    },
    "seoyeon_meet_9": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/school.png",
        "next": "seoyeon_choice"
    },
    "seoyeon_choice": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "choices": [
            {
                "next": "choice_flirt_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "choice_joke_1",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            }
        ]
    },
    "choice_flirt_1": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "background": "assets/images/background/school.png",
        "next": "choice_flirt_2"
    },
    "choice_flirt_2": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "choice_flirt_3"
    },
    "choice_flirt_3": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "background": "assets/images/background/school.png",
        "next": "choice_flirt_4"
    },
    "choice_flirt_4": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "choice_flirt_5"
    },
    "choice_flirt_5": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/school.png",
        "next": "choice_flirt_6"
    },
    "choice_flirt_6": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "choice_flirt_7"
    },
    "choice_flirt_7": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "background": "assets/images/background/school.png",
        "next": "hallway_1"
    },
    "choice_joke_1": {
        "background": "assets/images/background/school.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "next": "choice_joke_2"
    },
    "choice_joke_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "background": "assets/images/background/school.png",
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
        "next": "hallway_2"
    },
    "hallway_2": {
        "character": "assets/images/characters/seyoun_back.png",
        "background": "assets/images/background/school_hallway.png",
        "next": "hallway_3"
    },
    "hallway_3": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_4"
    },
    "hallway_4": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "next": "hallway_5"
    },
    "hallway_5": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_6"
    },
    "hallway_6": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/school_hallway.png",
        "next": "hallway_7"
    },
    "hallway_7": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "next": "hallway_8"
    },
    "hallway_8": {
        "character": "assets/images/characters/seyoun_shy.png",
        "background": "assets/images/background/school_hallway.png",
        "next": "hallway_9"
    },
    "hallway_9": {
        "character": "assets/images/characters/seyoun_shy.png",
        "background": "assets/images/background/school_hallway.png",
        "next": "hallway_10"
    },
    "hallway_10": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "next": "hallway_11"
    },
    "hallway_11": {
        "character": "assets/images/characters/seyoun_normal.png",
        "background": "assets/images/background/school_hallway.png",
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
        "next": "hallway_14"
    },
    "hallway_14": {
        "character": "assets/images/characters/seyoun_back.png",
        "background": "assets/images/background/school_hallway.png",
        "setFlags": ["met_seoyeon"],
        "next": "classroom_1"
    },
    "classroom_1": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "bgm": "daily.mp3",
        "next": "classroom_2"
    },
    "classroom_2": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "classroom_3"
    },
    "classroom_3": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "classroom_4"
    },
    "classroom_4": {
        "character": "assets/images/characters/teacher_normal.png",
        "background": "assets/images/background/room_school.png",
        "next": "classroom_5"
    },
    "classroom_5": {
        "character": "assets/images/characters/teacher_normal.png",
        "background": "assets/images/background/room_school.png",
        "next": "classroom_6"
    },
    "classroom_6": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "classroom_dain_1"
    },
    "classroom_dain_1": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "classroom_dain_2"
    },
    "classroom_dain_2": {
        "character": "assets/images/characters/dain_normal.png",
        "background": "assets/images/background/room_school.png",
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
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "classroom_yuna_1"
    },
    "classroom_yuna_1": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "classroom_yuna_2"
    },
    "classroom_yuna_2": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "classroom_seat_1"
    },
    "classroom_seat_1": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "classroom_seat_2"
    },
    "classroom_seat_2": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "classroom_minsu_1"
    },
    "classroom_minsu_1": {
        "character": "assets/images/characters/minsu_silhouette.svg",
        "background": "assets/images/background/room_school.png",
        "next": "classroom_minsu_2"
    },
    "classroom_minsu_2": {
        "character": "assets/images/characters/minsu_silhouette.svg",
        "background": "assets/images/background/room_school.png",
        "next": "classroom_minsu_3"
    },
    "classroom_minsu_3": {
        "character": "assets/images/characters/minsu_silhouette.svg",
        "background": "assets/images/background/room_school.png",
        "next": "classroom_minsu_4"
    },
    "classroom_minsu_4": {
        "character": "assets/images/characters/minsu_silhouette.svg",
        "background": "assets/images/background/room_school.png",
        "next": "classroom_dain_talk_1"
    },
    "classroom_dain_talk_1": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "classroom_dain_talk_2"
    },
    "classroom_dain_talk_2": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "classroom_dain_talk_3"
    },
    "classroom_dain_talk_3": {
        "character": "assets/images/characters/dain_normal.png",
        "background": "assets/images/background/room_school.png",
        "next": "classroom_dain_talk_4"
    },
    "classroom_dain_talk_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_normal.png",
        "next": "classroom_dain_talk_5"
    },
    "classroom_dain_talk_5": {
        "character": "assets/images/characters/dain_normal.png",
        "background": "assets/images/background/room_school.png",
        "next": "classroom_dain_talk_6"
    },
    "classroom_dain_talk_6": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/dain_laugh.png",
        "next": "classroom_dain_talk_7"
    },
    "classroom_dain_talk_7": {
        "character": "assets/images/characters/dain_laugh.png",
        "background": "assets/images/background/room_school.png",
        "next": "classroom_dain_talk_8"
    },
    "classroom_dain_talk_8": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "classroom_yuna_note_1"
    },
    "classroom_yuna_note_1": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "classroom_yuna_note_2"
    },
    "classroom_yuna_note_2": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "classroom_yuna_note_3"
    },
    "classroom_yuna_note_3": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "next": "classroom_yuna_note_4"
    },
    "classroom_yuna_note_4": {
        "background": "assets/images/background/room_school.png",
        "character": "assets/images/characters/yuna_bored.png",
        "next": "classroom_yuna_note_5"
    },
    "classroom_yuna_note_5": {
        "character": "assets/images/characters/yuna_bored.png",
        "background": "assets/images/background/room_school.png",
        "next": "classroom_yuna_note_6"
    },
    "classroom_yuna_note_6": {
        "character": null,
        "background": "assets/images/background/room_school.png",
        "setFlags": ["met_dain", "met_yuna"],
        "next": "lunch_start"
    }
});
