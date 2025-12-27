if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}

SCENARIO[2] = {
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
            { next: "day2_meet_dain", character: "Dain" },
            { next: "day2_meet_seoyeon", character: "Seoyeon" }
        ],
        selectByHighestAffinity: true
    },
    "day2_meet_dain": {
        name: "Dain",
        text: "\"Hey, {name?}! Good morning! You're early today!\"",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_dain_talk"
    },
    "day2_meet_seoyeon": {
        name: "Seoyeon",
        text: "\"Hi, {name?}! Did you sleep well? You're early today too!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_seoyeon_talk"
    },
    "day2_seoyeon_talk": {
        name: "Seoyeon",
        text: "\"Did you get home well yesterday? After we exchanged contact information, I was debating whether to send a message or not... I thought it was too late, so I held back.\"",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            { text: "I was waiting for Seoyeon's message too! Send it now.", next: "day2_seoyeon_happy", stats: { Seoyeon: { affinity: 10 } } },
            { text: "Oh, I see. I was tired, so I fell asleep right away.", next: "day2_seoyeon_normal", stats: { Seoyeon: { affinity: 2 } } }
        ]
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
    "day2_dain_talk": {
        name: "Dain",
        text: "\"Thanks to the tteokbokki we ate yesterday, I'm in top condition today! You too, right?\"",
        character: "assets/images/characters/dain_laugh.png",
        choices: [
            { text: "Yeah! I slept well thanks to Dain.", next: "day2_dain_happy", stats: { Dain: { affinity: 10 } } },
            { text: "I'm a bit tired... Dain, you really have great stamina.", next: "day2_dain_normal", stats: { Dain: { affinity: 2 } } }
        ]
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
        next: "day2_lunch_time"
    },
    "day2_lunch_time": {
        name: "Me",
        text: "(Finally, the lunch bell rang. Kids rush to the cafeteria.)",
        choices: [
            { text: "Head to the library annex backyard as promised with Yuna.", next: "day2_lunch_yuna" },
            { text: "Go to Seoyeon and ask to have lunch together.", next: "day2_lunch_seoyeon" },
            { text: "Go to the gym to see Dain.", next: "day2_lunch_dain" }
        ]
    },
    "day2_lunch_yuna": {
        name: "Me",
        text: "(Library annex backyard. Yuna is standing among the lush trees.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_talk"
    },
    "day2_yuna_talk": {
        name: "Yuna",
        text: "\"...You came. I thought you wouldn't come after seeing the note.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_yuna_talk_2"
    },
    "day2_yuna_talk_2": {
        name: "Yuna",
        text: "\"Do you remember... what I said yesterday? About the school's secret. Actually, there's something I want to show only to you.\"",
        character: "assets/images/characters/yuna_nomal.png",
        choices: [
            { text: "What is it? I'm curious too.", next: "day2_yuna_secret", stats: { Yuna: { affinity: 10 } } },
            { text: "I'm not interested in secrets. I just came because I wanted to talk to you.", next: "day2_yuna_normal", stats: { Yuna: { affinity: 5 } } }
        ]
    },
    "day2_yuna_secret": {
        name: "Yuna",
        text: "(Yuna takes my hand and leads me toward the old warehouse. Her hand feels colder than yesterday.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_yuna_secret_2"
    },
    "day2_yuna_secret_2": {
        name: "Yuna",
        text: "\"Inside here... are records the school has hidden for a long time. If you see this... everything will change.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_afternoon_class"
    },
    "day2_yuna_normal": {
        name: "Yuna",
        text: "\"...Really? You're a very strange kid. All the other kids are scared. Okay, then let's just stay like this today.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_afternoon_class"
    },
    "day2_lunch_seoyeon": {
        name: "Seoyeon",
        text: "(Seoyeon was eating a lunch box in the student council room and smiles brightly when she sees me.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_seoyeon_lunch_talk"
    },
    "day2_seoyeon_lunch_talk": {
        name: "Seoyeon",
        text: "\"{name?}! I was just waiting to eat together! Now, sit here.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_afternoon_class"
    },
    "day2_lunch_dain": {
        name: "Dain",
        text: "(Dain was practicing volleyball in the gym and runs over when she discovers me.)",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_dain_lunch_talk"
    },
    "day2_dain_lunch_talk": {
        name: "Dain",
        text: "\"Oh! You really came? Okay, lunch is on me today! Let's go to the store!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_afternoon_class"
    },
    "day2_afternoon_class": {
        name: "Me",
        text: "(Afternoon classes also ended safely. Now it's after school time.)",
        background: "assets/images/background/room_school.png",
        sunset: true,
        next: "day2_after_school"
    },
    "day2_after_school": {
        name: "Me",
        text: "(I have a feeling that something more special will happen today than yesterday.)",
        sunset: true,
        choices: [
            { text: "Help Seoyeon with student council work.", next: "day2_after_seoyeon" },
            { text: "Help Dain with volleyball practice.", next: "day2_after_dain" },
            { text: "Uncover more of the school's secrets with Yuna.", next: "day2_after_yuna" }
        ]
    },
    "day2_after_seoyeon": {
        name: "Seoyeon",
        text: "(I helped Seoyeon with document organization in the student council room until late. It's already dark outside.)",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        night: true,
        next: "day2_seoyeon_night_talk"
    },
    "day2_seoyeon_night_talk": {
        name: "Seoyeon",
        text: "\"{name?}... Thank you so much for today. When I'm with you, I forget all the hard work. Can we... stay together a bit longer?\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_end"
    },
    "day2_after_dain": {
        name: "Dain",
        text: "(I practiced while sweating with Dain in the gym. The ionic drink Dain handed me is cool.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        night: true,
        next: "day2_dain_night_talk"
    },
    "day2_dain_night_talk": {
        name: "Dain",
        text: "\"Wow! Your athletic nerves are really great? I'd even want to recruit you to our team! Good job today, {name?}!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_end"
    },
    "day2_after_yuna": {
        name: "Yuna",
        text: "(I discovered strange patterns in the school basement warehouse with Yuna. Yuna's expression becomes serious.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "day2_yuna_night_talk"
    },
    "day2_yuna_night_talk": {
        name: "Yuna",
        text: "\"This... is not just a scribble. It's related to the purpose of this school's establishment. {name?}, you've now chosen a path you can't turn back from.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_end"
    },
    "day2_end": {
        name: "Me",
        text: "(The second night is deepening. Is it just my imagination that the school air feels heavier than yesterday?)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_end_2"
    },
    "day2_end_2": {
        name: "Me",
        text: "(What kind of truth will be waiting for me tomorrow...)",
        next: "day2_final"
    },
    "day2_final": {
        name: "System",
        text: "(The scenario developed so far is up to here. Please look forward to the next update!)",
        next: "day2_final"
    }
};
