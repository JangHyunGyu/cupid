if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_end": {
        name: "Me",
        text: "(The second night is deepening. Is it just my imagination that the school air feels heavier than yesterday?)",
        background: "assets/images/background/room_night.png",
        night: true,
        next: "day2_end_2"
    },
    "day2_end_2": {
        name: "Me",
        text: "(Lying on the bed, I think about what happened today. The secret Yuna mentioned, and the time in the nurse's office...)",
        night: true,
        next: "day2_night_home"
    },
    "day2_night_home": {
        name: "Me",
        text: "(Before falling asleep, I check my smartphone.)",
        background: "assets/images/background/room_night.png",
        character: null,
        night: true,
        branches: [
            { next: "day2_final_scene", excludeCondition: "has_any_contact" },
            { next: "day2_night_home_check_contact" }
        ]
    },
    "day2_night_home_check_contact": {
        name: "Me",
        text: "(Should I send a message...?)",
        night: true,
        choices: [
            { text: "Send a message to Seoyeon.", next: "day2_night_message_seyoun", condition: "has_number_seyoun" },
            { text: "Send a message to Yuna.", next: "day2_night_message_yuna", condition: "has_number_yuna" },
            { text: "Send a message to Dain.", next: "day2_night_message_dain", condition: "has_number_dain" },
            { text: "Send a message to the Nurse.", next: "day2_night_message_nurse", condition: "has_number_nurse" },
            { text: "Just sleep.", next: "day2_final_scene" }
        ]
    },
    "day2_night_message_seyoun": {
        name: "Me",
        text: "(I sent a message to Seoyeon: 'I enjoyed helping with the student council work today. See you tomorrow!')",
        night: true,
        next: "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_reply": {
        name: "Seoyeon",
        text: "(A reply came.) 'I had a great time too! I feel so reassured thanks to {name?}. Don't forget to have lunch together tomorrow! Good night.'",
        night: true,
        stats: { Seoyeon: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_night_message_yuna": {
        name: "Me",
        text: "(I sent a message to Yuna: 'I won't forget what you showed me today. Good night.')",
        night: true,
        next: "day2_night_message_yuna_reply"
    },
    "day2_night_message_yuna_reply": {
        name: "Yuna",
        text: "(After a while, a reply came.) '...Yeah. I knew you would understand. I'll be watching you in your dreams too.'",
        night: true,
        stats: { Yuna: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_night_message_dain": {
        name: "Me",
        text: "(I sent a message to Dain: 'Good job with practice today! Don't forget the tteokbokki bet tomorrow.')",
        night: true,
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_reply": {
        name: "Dain",
        text: "(She replied immediately.) 'Of course! I'm going to win, so have your wallet ready! Haha, good night!'",
        night: true,
        stats: { Dain: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_night_message_nurse": {
        name: "Me",
        text: "(I sent a message to the Nurse: 'Teacher, thank you for today. I slept well thanks to you.')",
        night: true,
        next: "day2_night_message_nurse_reply"
    },
    "day2_night_message_nurse_reply": {
        name: "Nurse",
        text: "(A reply came.) 'Oh, are you thinking about me already? Hehe, rest well today and see you tomorrow. Good night, {name?}.'",
        night: true,
        stats: { Nurse: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_final_scene": {
        name: "Me",
        text: "(What kind of truth will be waiting for me tomorrow...)",
        next: "day2_final"
    },
    "day2_final": {
        name: "System",
        text: "(The scenario developed so far is up to here. Please look forward to the next update!)",
        next: "day2_final"
    }
});
