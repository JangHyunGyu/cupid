if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_start": {
        name: "Me",
        text: "(I woke up to the sound of the alarm. It's the morning of my second day as a transfer student.)",
        background: "assets/images/background/room_my.png",
        character: null,
        next: "day2_start_2"
    },
    "day2_start_2": {
        name: "Me",
        text: "(Yesterday's events feel like a dream, but the uniform on the desk reminds me that it's reality.)",
        next: "day2_start_3"
    },
    "day2_start_3": {
        name: "Me",
        text: "(What kind of things will happen today? I quickly prepared and headed to school.)",
        next: "day2_school_gate"
    },
    "day2_school_gate": {
        name: "Me",
        text: "(Arriving in front of the school gate, a much more familiar scenery than yesterday welcomes me.)",
        background: "assets/images/background/school.png",
        next: "day2_school_gate_2"
    },
    "day2_school_gate_2": {
        name: "Me",
        text: "(As I try to pass through the school gate, someone taps my shoulder.)",
        choices: [
            { text: "Turn around.", next: "day2_meet_someone" }
        ]
    },
    "day2_meet_someone": {
        name: "Me",
        text: "(When I turn around, there is...)",
        branches: [
            { next: "day2_meet_nurse", character: "Nurse" },
            { next: "day2_meet_dain", character: "Dain" },
            { next: "day2_meet_seoyeon", character: "Seoyeon" },
            { next: "day2_meet_teacher" }
        ],
        selectByHighestAffinity: true
    },
    "day2_meet_nurse": {
        name: "Nurse",
        text: "\"Oh, {name?}! Good morning. You look full of energy today too?\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_nurse_talk"
    },
    "day2_nurse_talk": {
        name: "Nurse",
        text: "(The teacher approaches me and winks slightly.)",
        character: "assets/images/characters/nurse.png",
        branches: [
            { next: "day2_nurse_talk_has_number", condition: "has_number_nurse" },
            { next: "day2_nurse_talk_no_number" }
        ]
    },
    "day2_nurse_talk_has_number": {
        name: "Nurse",
        text: "\"You didn't stay up all night thinking about me, did you? Hehe, just kidding. If you feel sick today, come to the nurse's office anytime.\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_classroom"
    },
    "day2_nurse_talk_no_number": {
        name: "Nurse",
        text: "\"It's only your second day, but you seem to have adapted to school already. Don't overdo it today, and if it's hard, come to the nurse's office to rest.\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_classroom"
    },
    "day2_meet_seoyeon": {
        name: "Seoyeon",
        text: "\"Hi, {name?}! Did you sleep well? You're early today too!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_seoyeon_talk"
    },
    "day2_seoyeon_talk": {
        name: "Seoyeon",
        text: "(Seoyeon makes eye contact with me and smiles slightly.)",
        character: "assets/images/characters/seyoun_nomal.png",
        branches: [
            { next: "day2_seoyeon_talk_has_number", condition: "has_number_seyoun" },
            { next: "day2_seoyeon_talk_no_number" }
        ]
    },
    "day2_seoyeon_talk_has_number": {
        name: "Seoyeon",
        text: "\"Did you get home well yesterday? After we exchanged contact information, I was debating whether to send a message or not... I thought it was too late, so I held back.\"",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            { text: "I was waiting for Seoyeon's message too! Send it now.", next: "day2_seoyeon_happy", stats: { Seoyeon: { affinity: 10 } } },
            { text: "Oh, I see. I was tired, so I fell asleep right away.", next: "day2_seoyeon_normal", stats: { Seoyeon: { affinity: 2 } } }
        ]
    },
    "day2_seoyeon_talk_no_number": {
        name: "Seoyeon",
        text: "\"Did you get home well yesterday? I was worried since it was your first day, but I'm relieved to see you today. Let's do our best today too!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_happy": {
        name: "Seoyeon",
        text: "\"Really? Hehe, then from today on, we're sharing even the smallest things? Now, let's go to the classroom together!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_normal": {
        name: "Seoyeon",
        text: "\"Right? You must have been very tired on your first day. Now, let's do our best in school life today too!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_classroom"
    },
    "day2_meet_dain": {
        name: "Dain",
        text: "\"Hey, {name?}! Good morning! You're early today!\"",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_dain_talk"
    },
    "day2_dain_talk": {
        name: "Dain",
        text: "(Dain taps my shoulder energetically.)",
        character: "assets/images/characters/dain_laugh.png",
        branches: [
            { next: "day2_dain_talk_dated", condition: "datedDainDay1" },
            { next: "day2_dain_talk_not_dated" }
        ]
    },
    "day2_dain_talk_dated": {
        name: "Dain",
        text: "\"Thanks to the tteokbokki we ate yesterday, I'm in top condition today! You too, right?\"",
        character: "assets/images/characters/dain_laugh.png",
        choices: [
            { text: "Yeah! I slept well thanks to Dain.", next: "day2_dain_happy", stats: { Dain: { affinity: 10 } } },
            { text: "I'm a bit tired... Dain, you really have great stamina.", next: "day2_dain_normal", stats: { Dain: { affinity: 2 } } }
        ]
    },
    "day2_dain_talk_not_dated": {
        name: "Dain",
        text: "\"Did you get home well yesterday? I don't know if you got to look around the school since it was your first day! Let's have an energetic day today too!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_classroom"
    },
    "day2_dain_happy": {
        name: "Dain",
        text: "\"Haha! My energy is a bit overflowing, isn't it? Okay, come to the gym during lunch today too! I'll be waiting!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_classroom"
    },
    "day2_dain_normal": {
        name: "Dain",
        text: "\"Aw~ Don't be a wimp! Stamina is national power if you want to adapt to school life! Now, let's go to the classroom!\"",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_classroom"
    },
    "day2_meet_teacher": {
        name: "Teacher",
        text: "\"Oh, isn't it {name?}? It's only your second day, but you seem to have adapted to school already. It's good to see you arriving early.\"",
        character: "assets/images/characters/teacher.png",
        next: "day2_classroom"
    },
    "day2_classroom": {
        name: "Me",
        text: "(As I enter the classroom, the kids greet me much more friendly than yesterday.)",
        background: "assets/images/background/room_school.png",
        next: "day2_classroom_2"
    },
    "day2_classroom_2": {
        name: "Me",
        text: "(As I sit down and try to prepare for class, there is a small note on the desk.)",
        choices: [
            { text: "Check the note.", next: "day2_check_note" }
        ]
    },
    "day2_check_note": {
        name: "Me",
        text: "(The note says this in neat handwriting.)",
        next: "day2_note_content"
    },
    "day2_note_content": {
        name: "System",
        text: "\"'Come to the library annex backyard during lunch. I have something to say.' - Yuna\"",
        next: "day2_morning_class"
    },
    "day2_morning_class": {
        name: "Me",
        text: "(Throughout the class, Yuna's note doesn't leave my head. What on earth does she have to say?)",
        branches: [
            { next: "day2_morning_class_yuna_met", condition: "metYuna" },
            { next: "day2_morning_class_yuna_new" }
        ]
    },
    "day2_morning_class_yuna_met": {
        name: "Me",
        text: "(Yuna, whom I met yesterday... Why did she leave me such a note? I'm curious about what the secret is.)",
        next: "day2_lunch_time"
    },
    "day2_morning_class_yuna_new": {
        name: "Me",
        text: "(Yuna...? It's a name I haven't heard yesterday. Who on earth is she to leave me such a note?)",
        next: "day2_lunch_time"
    }
});
