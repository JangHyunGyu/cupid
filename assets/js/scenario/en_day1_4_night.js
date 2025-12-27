if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "night_start": {
        name: "Me",
        text: "(I arrived home. It was a long day.)",
        background: "assets/images/background/room_night.png",
        next: "night_choices_pre"
    },
    "night_choices_pre": {
        name: "Me",
        text: "(What should I do before going to bed?)",
        branches: [
            { next: "night_sleep", excludeCondition: "has_any_contact" },
            { next: "night_choices" }
        ]
    },
    "night_choices": {
        name: "Me",
        text: "(I should check my phone before sleeping.)",
        choices: [
            { text: "Send a message to Seoyeon.", next: "night_message_seyoun", condition: "has_number_seyoun" },
            { text: "Send a message to Yuna.", next: "night_message_yuna", condition: "has_number_yuna" },
            { text: "Send a message to Dain.", next: "night_message_dain", condition: "has_number_dain" },
            { text: "Just sleep.", next: "night_sleep" }
        ]
    },
    "night_message_seyoun": {
        name: "Me",
        text: "(I sent a message to Seoyeon: 'The lunch box was delicious today. Thank you!')",
        next: "night_message_seyoun_2"
    },
    "night_message_seyoun_2": {
        name: "Seoyeon",
        text: "(A reply came immediately!) 'Really? I'm so glad! Thank you for enjoying it. Look forward to tomorrow too! Good night, {name?}!'",
        stats: { Seoyeon: { affinity: 5 } },
        next: "night_sleep"
    },
    "night_message_yuna": {
        name: "Me",
        text: "(I sent a message to Yuna: 'I had fun today. Good night.')",
        next: "night_message_yuna_2"
    },
    "night_message_yuna_2": {
        name: "Yuna",
        text: "(After a while, a reply came.) '...Yeah. You too. See you at school tomorrow.'",
        stats: { Yuna: { affinity: 5 } },
        next: "night_sleep"
    },
    "night_message_dain": {
        name: "Me",
        text: "(I sent a message to Dain: 'The tteokbokki was great! Good night.')",
        next: "night_message_dain_2"
    },
    "night_message_dain_2": {
        name: "Dain",
        text: "(She replied almost instantly.) 'Right? I told you I know all the best places! Rest well and see you tomorrow! Good night!'",
        stats: { Dain: { affinity: 5 } },
        next: "night_sleep"
    },
    "night_sleep": {
        name: "Me",
        text: "(I fell into a deep sleep, looking forward to tomorrow.)",
        changeDay: 2,
        next: "day2_start"
    }
});
