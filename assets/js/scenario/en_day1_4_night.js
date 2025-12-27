if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "after_home": {
        name: "Me",
        text: "(The sun has set, and I've returned home through the dark streets. My first day at the new school... it's been a long one.)",
        background: "assets/images/background/room_night.png",
        character: null,
        night: true,
        next: "after_home_2"
    },
    "after_home_2": {
        name: "Me",
        text: "(I throw myself onto the bed. Staring at the ceiling, I retrace the day's events. The unfamiliar school, and the new faces...)",
        night: true,
        next: "after_home_3"
    },
    "after_home_3": {
        name: "Me",
        text: "(What kind of things are waiting for me tomorrow? With a strange sense of anticipation, I close my heavy eyelids.)",
        night: true,
        next: "night_home"
    },
    "night_home": {
        name: "Me",
        text: "(Before falling asleep, I check my phone out of habit.)",
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
        text: "(Did I exchange contact info with anyone today...?)",
        night: true,
        choices: [
            { text: "Send a message to Seoyeon.", next: "night_message_seyoun", condition: "has_number_seyoun" },
            { text: "Send a message to Yuna.", next: "night_message_yuna", condition: "has_number_yuna" },
            { text: "Send a message to Dain.", next: "night_message_dain", condition: "has_number_dain" },
            { text: "Send a message to the Nurse.", next: "night_message_nurse", condition: "has_number_nurse" },
            { text: "Check Affinity Status", next: "day1_check_affinity" },
            { text: "Just sleep.", next: "day1_end" }
        ]
    },
    "day1_check_affinity": {
        name: "System",
        text: "Current affinity status with the characters.{affinity_list}",
        background: "assets/images/background/room_night.png",
        night: true,
        next: "night_home_check_contact"
    },
    "night_message_seyoun": {
        name: "Me",
        text: "(I send a message to Seoyeon. 'The lunch was really delicious today. Thank you!')",
        night: true,
        next: "night_message_seyoun_reply"
    },
    "night_message_seyoun_reply": {
        name: "Seoyeon",
        text: "(Beep— An immediate reply.) 'Really? I'm so glad! Thank you for enjoying it. Look forward to tomorrow too! Good night, {name?}.'",
        night: true,
        stats: { Seoyeon: { affinity: 5 } },
        next: "day1_end"
    },
    "night_message_yuna": {
        name: "Me",
        text: "(I send a message to Yuna. 'I had fun today. Good night.')",
        night: true,
        next: "night_message_yuna_reply"
    },
    "night_message_yuna_reply": {
        name: "Yuna",
        text: "(A reply arrives after a short wait.) '...Yeah. You too. See you at school tomorrow, {name?}.'",
        night: true,
        stats: { Yuna: { affinity: 5 } },
        next: "day1_end"
    },
    "night_message_dain": {
        name: "Me",
        text: "(I send a message to Dain. 'The tteokbokki was great today! Good night.')",
        night: true,
        next: "night_message_dain_reply"
    },
    "night_message_dain_reply": {
        name: "Dain",
        text: "(A lively reply.) 'Right? I told you I know all the best spots! Rest up and see you tomorrow, {name?}! Good night!'",
        night: true,
        stats: { Dain: { affinity: 5 } },
        next: "day1_end"
    },
    "night_message_nurse": {
        name: "Me",
        text: "(I send a message to the Nurse. 'Teacher, thank you for today. Good night.')",
        night: true,
        next: "night_message_nurse_reply"
    },
    "night_message_nurse_reply": {
        name: "Nurse",
        text: "(An alluring reply.) 'Oh, you actually messaged me? What a good boy. Have sweet dreams, {name?}.'",
        night: true,
        stats: { Nurse: { affinity: 5 } },
        next: "day1_end"
    },
    "day1_end": {
        name: "Me",
        text: "(As I close my eyes, the faces of the girls I met today flicker through my mind. Will I be able to get closer to them tomorrow...?)",
        background: "assets/images/background/black.png",
        character: null,
        changeDay: 2,
        next: "day2_start"
    }
});
