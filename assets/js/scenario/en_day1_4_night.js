if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "after_home": {
        name: "Me",
        text: "(I arrived home after passing through the streets where the sun had set and darkness had fallen.)",
        background: "assets/images/background/room_night.png",
        character: null,
        night: true,
        next: "after_home_2"
    },
    "after_home_2": {
        name: "Me",
        text: "(Lying on the bed, I look back on today. So many things happened since my first day as a transfer student.)",
        night: true,
        next: "after_home_3"
    },
    "after_home_3": {
        name: "Me",
        text: "(What kind of things will be waiting for me tomorrow? I try to sleep with an excited heart.)",
        night: true,
        next: "night_home"
    },
    "night_home": {
        name: "Me",
        text: "(Before falling asleep, I check my smartphone.)",
        background: "assets/images/background/room_night.png",
        character: null,
        night: true,
        branches: [
            { next: "day1_end", excludeCondition: "has_any_contact" },
            { next: "night_home_check_contact" }
        ]
    },
    "night_home_check_contact": {
        name: "Me",
        text: "(Was there anyone I got contact info from today...?)",
        night: true,
        choices: [
            { text: "Send a message to Seoyeon.", next: "night_message_seyoun", condition: "has_number_seyoun" },
            { text: "Send a message to Yuna.", next: "night_message_yuna", condition: "has_number_yuna" },
            { text: "Send a message to Dain.", next: "night_message_dain", condition: "has_number_dain" },
            { text: "Just sleep.", next: "day1_end" }
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
        next: "day1_end"
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
        next: "day1_end"
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
        next: "day1_end"
    },
    "day1_end": {
        name: "Me",
        text: "(As I close my eyes, the faces of the girls I met today come to mind one by one. Will I be able to get closer to them tomorrow...?)",
        background: "assets/images/background/black.png",
        character: null,
        changeDay: 2,
        next: "day2_start"
    }
});
