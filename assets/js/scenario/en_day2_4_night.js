if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_end": {
        name: "Me",
        text: "(The second night is deepening. Is it just my imagination, or does the darkness outside the window feel even heavier than yesterday?)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_end_2"
    },
    "day2_end_2": {
        name: "Me",
        text: "(Lying on the bed, I retrace the events of the day. The school's secrets Yuna spoke of, and the time spent with the girls...)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_home"
    },
    "day2_night_home": {
        name: "Me",
        text: "(Before falling asleep, I check my phone out of habit.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        branches: [
            { next: "day2_final_scene", excludeCondition: "has_any_contact" },
            { next: "day2_night_home_check_contact" }
        ]
    },
    "day2_night_home_check_contact": {
        name: "Me",
        text: "(Should I send a message to someone...?)",
        background: "assets/images/background/room_my.png",
        night: true,
        choices: [
            { text: "Send a message to Seoyeon.", next: "day2_night_message_seyoun", condition: "has_number_seyoun" },
            { text: "Send a message to Yuna.", next: "day2_night_message_yuna", condition: "has_number_yuna" },
            { text: "Send a message to Dain.", next: "day2_night_message_dain", condition: "has_number_dain" },
            { text: "Send a message to the Nurse.", next: "day2_night_message_nurse", condition: "has_number_nurse" },
            { text: "Check Affinity Status", next: "day2_check_affinity" },
            { text: "Just sleep.", next: "day2_final_scene" }
        ]
    },
    "day2_check_affinity": {
        name: "System",
        text: "Current affinity status with the characters.{affinity_list}",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun": {
        name: "Me",
        text: "(I send a message to Seoyeon. 'I enjoyed helping with the student council work today. See you tomorrow!')",
        night: true,
        next: "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_reply": {
        name: "Seoyeon",
        text: "(Beep— An immediate reply.) 'I had a great time too! I feel so reassured thanks to {name?}. Don't forget to have lunch together tomorrow! Good night.'",
        night: true,
        stats: { Seoyeon: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_night_message_yuna": {
        name: "Me",
        text: "(I send a message to Yuna. 'I won't forget what you showed me today. Good night.')",
        night: true,
        next: "day2_night_message_yuna_reply"
    },
    "day2_night_message_yuna_reply": {
        name: "Yuna",
        text: "(A reply arrives after a short wait.) '...Yeah. I knew you would understand. I'll be watching you in your dreams too, {name?}.'",
        night: true,
        stats: { Yuna: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_night_message_dain": {
        name: "Me",
        text: "(I send a message to Dain. 'Good job with practice today! Don't forget the tteokbokki bet tomorrow.')",
        night: true,
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_reply": {
        name: "Dain",
        text: "(A lively reply.) 'Of course! I'm going to win, so have your wallet ready! Haha, good night, {name?}!'",
        night: true,
        stats: { Dain: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_night_message_nurse": {
        name: "Me",
        text: "(I send a message to the Nurse. 'Teacher, thank you for today. I slept well thanks to you.')",
        night: true,
        next: "day2_night_message_nurse_reply"
    },
    "day2_night_message_nurse_reply": {
        name: "Nurse",
        text: "(An alluring reply.) 'Oh, are you thinking about me already? Hehe, rest well today and see you tomorrow. Good night, {name?}.'",
        night: true,
        stats: { Nurse: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_final_scene": {
        name: "Me",
        text: "(What kind of truth will be waiting for me tomorrow...? My heavy eyelids close as I drift into sleep.)",
        next: "day2_final"
    },
    "day2_final": {
        name: "System",
        text: "(The scenario developed so far is up to here. Please look forward to the next update!)",
        next: "day2_final"
    }
});
