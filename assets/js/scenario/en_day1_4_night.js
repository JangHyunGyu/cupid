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
        next: "night_choices"
    },
    "night_choices": {
        name: "Me",
        text: "(What should I do before going to bed?)",
        choices: [
            { text: "Send a message to Seoyeon.", next: "night_message_seyoun", condition: "has_number_seyoun" },
            { text: "Think about Yuna.", next: "night_think_yuna", condition: "metYuna" },
            { text: "Just sleep.", next: "night_sleep" }
        ]
    },
    "night_message_seyoun": {
        name: "Me",
        text: "(I sent a message to Seoyeon: 'Are you home safe?')",
        next: "night_message_seyoun_2"
    },
    "night_message_seyoun_2": {
        name: "Seoyeon",
        text: "(A reply came immediately!) 'Yes! I just finished showering. Thank you for worrying about me. See you tomorrow, {name?}!'",
        stats: { Seoyeon: { affinity: 5 } },
        next: "night_sleep"
    },
    "night_think_yuna": {
        name: "Me",
        text: "(Yuna's purple eyes keep coming to mind. What on earth is she...?)",
        stats: { Yuna: { affinity: 5 } },
        next: "night_sleep"
    },
    "night_sleep": {
        name: "Me",
        text: "(I fell into a deep sleep, looking forward to tomorrow.)",
        next: "day2_start"
    }
});
