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
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        next: "after_home_2"
    },
    "after_home_2": {
        name: "Me",
        text: "(I throw myself onto the bed. Staring at the ceiling, I retrace the day's events. The unfamiliar school, and the new faces...)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "after_home_3"
    },
    "after_home_3": {
        name: "Me",
        text: "(What kind of things are waiting for me tomorrow? With a strange sense of anticipation, I close my heavy eyelids.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_home"
    },
    "night_home": {
        name: "Me",
        text: "(Before falling asleep, I check my phone out of habit.)",
        background: "assets/images/background/room_my.png",
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
            { text: "Send a message to Seoyeon.", next: "night_message_seyoun", condition: "has_number_seyoun", excludeCondition: "sent_msg_day1_seyoun" },
            { text: "Send a message to Yuna.", next: "night_message_yuna", condition: "has_number_yuna", excludeCondition: "sent_msg_day1_yuna" },
            { text: "Send a message to Dain.", next: "night_message_dain", condition: "has_number_dain", excludeCondition: "sent_msg_day1_dain" },
            { text: "Send a message to the Nurse.", next: "night_message_nurse", condition: "has_number_nurse", excludeCondition: "sent_msg_day1_nurse" },
            { text: "Send a message to the Homeroom Teacher.", next: "night_message_teacher", condition: "has_number_teacher", excludeCondition: "sent_msg_day1_teacher" },
            { text: "Check Affinity Status", next: "day1_check_affinity" },
            { text: "Just sleep.", next: "day1_end" }
        ]
    },
    "day1_check_affinity": {
        name: "System",
        text: "Current affinity status with the characters.{affinity_list}",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_home_check_contact"
    },
    "night_message_teacher": {
        name: "Me",
        text: "(I send a message to the Homeroom Teacher. 'Teacher, thank you for taking care of me today. See you tomorrow!')",
        night: true,
        setFlag: "sent_msg_day1_teacher",
        next: "night_message_teacher_reply"
    },
    "night_message_teacher_reply": {
        name: "Homeroom Teacher",
        text: "(A kind reply.) 'Oh, it's {name}. You must have been tired on your first day, but you're so thoughtful. Rest well and see you tomorrow!'",
        night: true,
        stats: { Teacher: { affinity: 3 } },
        next: "night_home_check_contact"
    },
    "night_message_seyoun": {
        name: "Me",
        text: "(What message should I send to Seoyeon?)",
        night: true,
        branches: [
            { next: "night_message_seyoun_lunch", condition: "ate_lunch_seoyeon" },
            { next: "night_message_seyoun_after", condition: "helpedSeoyeon" },
            { next: "night_message_seyoun_generic" }
        ]
    },
    "night_message_seyoun_lunch": {
        name: "Me",
        text: "(I send a message to Seoyeon. 'The lunch was really delicious today. Thank you!')",
        night: true,
        setFlag: "sent_msg_day1_seyoun",
        next: "night_message_seyoun_reply_lunch"
    },
    "night_message_seyoun_after": {
        name: "Me",
        text: "(I send a message to Seoyeon. 'I enjoyed helping with the student council work today. See you tomorrow!')",
        night: true,
        setFlag: "sent_msg_day1_seyoun",
        next: "night_message_seyoun_reply_generic"
    },
    "night_message_seyoun_generic": {
        name: "Me",
        text: "(I send a message to Seoyeon. 'Did you have a good day? See you at school tomorrow.')",
        night: true,
        setFlag: "sent_msg_day1_seyoun",
        next: "night_message_seyoun_reply_generic"
    },
    "night_message_seyoun_reply_lunch": {
        name: "Seoyeon",
        text: "(Vibrate~ An immediate reply.) 'Really? I'm so glad! Thank you for enjoying it. Look forward to tomorrow too! Good night, {name}.'",
        night: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "night_home_check_contact"
    },
    "night_message_seyoun_reply_generic": {
        night: true,
        affinityBranches: [
            { character: "Seoyeon", threshold: 15, next: "night_message_seyoun_reply_high" },
            { next: "night_message_seyoun_reply_standard" }
        ]
    },
    "night_message_seyoun_reply_standard": {
        name: "Seoyeon",
        text: "(Vibrate~ An immediate reply.) 'I had a great time too! I feel so reassured thanks to {name}. See you at school tomorrow. Good night.'",
        night: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "night_home_check_contact"
    },
    "night_message_seyoun_reply_high": {
        name: "Seoyeon",
        text: "(Vibrate~ A reply with a heart emoticon.) 'I'll never forget the time I spent with you today. I hope to see you in my dreams... Good night, {name}.'",
        night: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "night_home_check_contact"
    },
    "night_message_yuna": {
        name: "Me",
        text: "(I send a message to Yuna. 'I had fun today. Good night.')",
        night: true,
        setFlag: "sent_msg_day1_yuna",
        next: "night_message_yuna_reply"
    },
    "night_message_yuna_reply": {
        night: true,
        affinityBranches: [
            { character: "Yuna", threshold: 10, next: "night_message_yuna_reply_high" },
            { next: "night_message_yuna_reply_standard" }
        ]
    },
    "night_message_yuna_reply_standard": {
        name: "Yuna",
        text: "(A reply arrives after a short wait.) '...Yeah. You too. See you at school tomorrow, {name}.'",
        night: true,
        stats: { Yuna: { affinity: 3 } },
        next: "night_home_check_contact"
    },
    "night_message_yuna_reply_high": {
        name: "Yuna",
        text: "(A reply arrives after a short wait.) 'Today... yeah, thank you. I think I was able to smile a bit thanks to you. Good night.'",
        night: true,
        stats: { Yuna: { affinity: 5 } },
        next: "night_home_check_contact"
    },
    "night_message_dain": {
        name: "Me",
        text: "(What message should I send to Dain?)",
        night: true,
        branches: [
            { next: "night_message_dain_date", condition: "datedDainDay1" },
            { next: "night_message_dain_generic" }
        ]
    },
    "night_message_dain_date": {
        name: "Me",
        text: "(I send a message to Dain. 'The tteokbokki was great today! Good night.')",
        night: true,
        setFlag: "sent_msg_day1_dain",
        next: "night_message_dain_reply_date"
    },
    "night_message_dain_generic": {
        name: "Me",
        text: "(I send a message to Dain. 'Dain, good job today! See you tomorrow.')",
        night: true,
        setFlag: "sent_msg_day1_dain",
        next: "night_message_dain_reply_generic"
    },
    "night_message_dain_reply_date": {
        name: "Dain",
        text: "(A lively reply.) 'Right? I told you I know all the best spots! Rest up and see you tomorrow, {name}! Good night!'",
        night: true,
        stats: { Dain: { affinity: 3 } },
        next: "night_home_check_contact"
    },
    "night_message_dain_reply_generic": {
        night: true,
        affinityBranches: [
            { character: "Dain", threshold: 15, next: "night_message_dain_reply_high" },
            { next: "night_message_dain_reply_standard" }
        ]
    },
    "night_message_dain_reply_standard": {
        name: "Dain",
        text: "(A lively reply.) 'Yeah! You too! See you at school tomorrow, {name}! Good night!'",
        night: true,
        stats: { Dain: { affinity: 3 } },
        next: "night_home_check_contact"
    },
    "night_message_dain_reply_high": {
        name: "Dain",
        text: "(A lively reply.) 'Are you already falling for my performance? Hehe, I'll make you fall for me even more tomorrow! Don't be surprised if I show up in your dreams~ Good night!'",
        night: true,
        stats: { Dain: { affinity: 5 } },
        next: "night_home_check_contact"
    },
    "night_message_nurse": {
        name: "Me",
        text: "(I send a message to the Nurse. 'Teacher, thank you for today. Good night.')",
        night: true,
        setFlag: "sent_msg_day1_nurse",
        next: "night_message_nurse_reply"
    },
    "night_message_nurse_reply": {
        night: true,
        affinityBranches: [
            { character: "Nurse", threshold: 10, next: "night_message_nurse_reply_high" },
            { next: "night_message_nurse_reply_standard" }
        ]
    },
    "night_message_nurse_reply_standard": {
        name: "Nurse",
        text: "(An alluring reply.) 'Oh, you actually messaged me? Our transfer student is so polite. Have sweet dreams, {name}.'",
        night: true,
        stats: { Nurse: { affinity: 3 } },
        next: "night_home_check_contact"
    },
    "night_message_nurse_reply_high": {
        name: "Nurse",
        text: "(An alluring reply.) 'Oh my... a message like this at night, are you trying to keep me awake? Just kidding. I really like your kind side. Good night.'",
        night: true,
        stats: { Nurse: { affinity: 5 } },
        next: "night_home_check_contact"
    },
    "day1_end": {
        name: "Me",
        text: "(As I close my eyes, the faces of the girls I met today flicker through my mind. Will I be able to get closer to them tomorrow...?)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        fade: true,
        changeDay: 2,
        next: "day2_start"
    }
});
