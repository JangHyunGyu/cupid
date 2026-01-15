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
        bgm: null,
        character: null,
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
        character: null,
        choices: [
            { text: "Send a message to Seoyeon.", next: "day2_night_message_seyoun", condition: "has_number_seyoun", excludeCondition: "sent_msg_day2_seyoun" },
            { text: "Send a message to Yuna.", next: "day2_night_message_yuna", condition: "has_number_yuna", excludeCondition: "sent_msg_day2_yuna" },
            { text: "Send a message to Dain.", next: "day2_night_message_dain", condition: "has_number_dain", excludeCondition: "sent_msg_day2_dain" },
            { text: "Send a message to the Nurse.", next: "day2_night_message_nurse", condition: "has_number_nurse", excludeCondition: "sent_msg_day2_nurse" },
            { text: "Send a message to the Teacher.", next: "day2_night_message_teacher", condition: "has_number_teacher", excludeCondition: "sent_msg_day2_teacher" },
            { text: "Go to the Nurse's house.", next: "day2_night_nurse_home", condition: "invited_nurse_home" },
            { text: "Check Affinity Status", next: "day2_check_affinity" },
            { text: "Just sleep.", next: "day2_final_scene" }
        ]
    },
    "day2_night_nurse_home": {
        name: "Me",
        text: "(I headed to the address the teacher gave me. It's a quiet studio apartment near the school.)",
        background: "assets/images/background/nurse_house.png",
        character: null,
        night: true,
        next: "day2_night_nurse_home_2"
    },
    "day2_night_nurse_home_2": {
        name: "Nurse",
        text: "\"Oh, you really came? Come on in. It's cold outside, isn't it?\"",
        character: "assets/images/characters/nurse.png",
        night: true,
        next: "day2_night_nurse_home_3"
    },
    "day2_night_nurse_home_3": {
        name: "Nurse",
        text: "\"Here, have a seat. I'll give you a cup of warm tea. Being alone with my student like this... I feel a bit strange, don't I?\"",
        character: "assets/images/characters/nurse.png",
        night: true,
        next: "day2_night_nurse_home_4"
    },
    "day2_night_nurse_home_4": {
        name: "Me",
        text: "(A room left alone with the teacher... My heart beats so loud I can hear it in my ears. Her scent tickles the tip of my nose, and the night grows deeper.)",
        background: "assets/images/background/nurse_house.png",        character: null,        night: true,
        fade: true,
        next: "day2_final"
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
        text: "(What message should I send to Seoyeon?)",
        branches: [
            { next: "day2_night_message_seyoun_after", condition: "day2_met_seoyeon_after" },
            { next: "day2_night_message_seyoun_lunch", condition: "day2_ate_lunch_seoyeon" },
            { next: "day2_night_message_seyoun_generic" }
        ]
    },
    "day2_night_message_seyoun_after": {
        name: "Me",
        text: "(I send a message to Seoyeon. 'I enjoyed helping with the student council work today. See you tomorrow!')",
        night: true,
        setFlag: "sent_msg_day2_seyoun",
        next: "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_lunch": {
        name: "Me",
        text: "(I send a message to Seoyeon. 'The sandwich today was really delicious! See you tomorrow.')",
        night: true,
        setFlag: "sent_msg_day2_seyoun",
        next: "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_generic": {
        name: "Me",
        text: "(I send a message to Seoyeon. 'Did you have a good day? See you at school tomorrow.')",
        night: true,
        setFlag: "sent_msg_day2_seyoun",
        next: "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_reply": {
        type: "free_talk",
        maxTurns: 10,
        name: "Seoyeon",
        text: "(Vibrate~ An immediate reply.) 'I had a great time too! I feel so reassured thanks to {name}. Don't forget to have lunch together tomorrow! Good night.'",
        character: "assets/images/characters/seyoun_nomal.png",
        silhouette: true,
        context: "Night, a situation where you are exchanging smartphone messages from your respective homes. Seoyeon has sent a reply, happy with the protagonist's message. Keep the conversation going actively until it's finished. After the conversation, the protagonist will fall asleep, looking forward to tomorrow. ONLY at the final turn of the conversation, please naturally end the conversation by saying good night since it's late, or by saying see you at school tomorrow.",
        night: true,
        stats: { Seoyeon: { affinity: 3 } },
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "day2_night_message_seyoun_reply_high" },
            { minAffinity: 0, next: "day2_night_message_seyoun_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_seyoun_reply_low" }
        ],
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun_reply_high": {
        name: "Me",
        text: "(Seoyeon's warm reply makes me smile. Knowing she was waiting for my message makes my heart flutter. I'm already looking forward to having lunch with her tomorrow.)",
        character: "assets/images/characters/seyoun_nomal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun_reply_normal": {
        name: "Me",
        text: "(I finished the conversation with Seoyeon. I should make sure not to forget our lunch promise tomorrow.)",
        character: "assets/images/characters/seyoun_nomal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun_reply_low": {
        name: "Me",
        text: "(Seoyeon's reply seems a bit distant. I hope I didn't say anything to upset her.)",
        character: "assets/images/characters/seyoun_nomal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_yuna": {
        name: "Me",
        text: "(What message should I send to Yuna?)",
        branches: [
            { next: "day2_night_message_yuna_met", condition: "day2_met_yuna_after" },
            { next: "day2_night_message_yuna_met", condition: "day2_met_yuna_lunch" },
            { next: "day2_night_message_yuna_generic" }
        ]
    },
    "day2_night_message_yuna_met": {
        name: "Me",
        text: "(I send a message to Yuna. 'I won't forget what you showed me today. Good night.')",
        night: true,
        setFlag: "sent_msg_day2_yuna",
        next: "day2_night_message_yuna_reply"
    },
    "day2_night_message_yuna_generic": {
        name: "Me",
        text: "(I send a message to Yuna. 'How was your day? See you at school tomorrow.')",
        night: true,
        setFlag: "sent_msg_day2_yuna",
        next: "day2_night_message_yuna_reply"
    },
    "day2_night_message_yuna_reply": {
        type: "free_talk",
        maxTurns: 10,
        name: "Yuna",
        text: "(A reply arrives after a short wait.) '...Yeah. I knew you would understand. I'll be watching you in your dreams too, {name}.'",
        character: "assets/images/characters/yuna_nomal.png",
        silhouette: true,
        context: "Night, a situation where you are exchanging smartphone messages from your respective homes. Yuna has sent a short but deeply lingering reply to the protagonist's message. Keep the conversation going actively until it's finished. After the conversation, the protagonist will fall asleep, looking forward to tomorrow. ONLY at the final turn of the conversation, please naturally end the conversation by saying good night since it's late, or by saying see you at school tomorrow.",
        night: true,
        stats: { Yuna: { affinity: 3 } },
        affinityChar: "Yuna",
        affinityBranches: [
            { minAffinity: 25, next: "day2_night_message_yuna_reply_high" },
            { minAffinity: 0, next: "day2_night_message_yuna_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_yuna_reply_low" }
        ],
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_yuna_reply_high": {
        name: "Me",
        text: "(Yuna's mysterious yet intense message lingers in my mind. The thought of her watching over me even in my dreams is both strange and strangely comforting.)",
        character: "assets/images/characters/yuna_nomal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_yuna_reply_normal": {
        name: "Me",
        text: "(I finished the conversation with Yuna. Her words always seem to have a deeper meaning.)",
        character: "assets/images/characters/yuna_nomal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_yuna_reply_low": {
        name: "Me",
        text: "(Yuna's reply is cold and dismissive. It seems I've bothered her at a bad time.)",
        character: "assets/images/characters/yuna_nomal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_dain": {
        name: "Me",
        text: "(What message should I send to Dain?)",
        branches: [
            { next: "day2_night_message_dain_after", condition: "day2_met_dain_after" },
            { next: "day2_night_message_dain_lunch", condition: "day2_met_dain_lunch" },
            { next: "day2_night_message_dain_generic" }
        ]
    },
    "day2_night_message_dain_after": {
        name: "Me",
        text: "(I remember what happened during practice. What message should I send?)",
        branches: [
            { next: "day2_night_message_dain_bet", condition: "day2_dain_bet" },
            { next: "day2_night_message_dain_practice" }
        ]
    },
    "day2_night_message_dain_bet": {
        name: "Me",
        text: "(I send a message to Dain. 'Good job with practice today! Don't forget the tteokbokki bet tomorrow.')",
        night: true,
        setFlag: "sent_msg_day2_dain",
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_practice": {
        name: "Me",
        text: "(I send a message to Dain. 'Good job with practice today! It was fun. See you tomorrow!')",
        night: true,
        setFlag: "sent_msg_day2_dain",
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_lunch": {
        name: "Me",
        text: "(I send a message to Dain. 'It was fun seeing you at the store today! Let's go eat tteokbokki tomorrow.')",
        night: true,
        setFlag: "sent_msg_day2_dain",
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_generic": {
        name: "Me",
        text: "(I send a message to Dain. 'Dain, good job today! See you tomorrow.')",
        night: true,
        setFlag: "sent_msg_day2_dain",
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_reply": {
        type: "free_talk",
        maxTurns: 10,
        name: "Dain",
        text: "(A lively reply.) 'Of course! I'm going to win, so have your wallet ready! Haha, good night, {name}!'",
        character: "assets/images/characters/dain_nomal.png",
        silhouette: true,
        context: "Night, a situation where you are exchanging smartphone messages from your respective homes. Dain has sent an energetic reply to the protagonist's message. Keep the conversation going actively until it's finished. After the conversation, the protagonist will fall asleep, looking forward to tomorrow. ONLY at the final turn of the conversation, please naturally end the conversation by saying good night since it's late, or by saying see you at school tomorrow.",
        night: true,
        stats: { Dain: { affinity: 3 } },
        affinityChar: "Dain",
        affinityBranches: [
            { minAffinity: 25, next: "day2_night_message_dain_reply_high" },
            { minAffinity: 0, next: "day2_night_message_dain_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_dain_reply_low" }
        ],
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_dain_reply_high": {
        name: "Me",
        text: "(Dain's lively energy is contagious even through messages. Knowing she was thinking about me too makes my heart race. I definitely need to win that tteokbokki bet tomorrow.)",
        character: "assets/images/characters/dain_nomal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_dain_reply_normal": {
        name: "Me",
        text: "(I finished the conversation with Dain. I should prepare myself so I don't lose the tteokbokki bet tomorrow.)",
        character: "assets/images/characters/dain_nomal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_dain_reply_low": {
        name: "Me",
        text: "(Dain's response is unusually dry. I wonder if I did something to dampen her spirits.)",
        character: "assets/images/characters/dain_sad.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_nurse": {
        name: "Me",
        text: "(What message should I send to the Nurse?)",
        branches: [
            { next: "day2_night_message_nurse_rest", condition: "day2_met_nurse_after" },
            { next: "day2_night_message_nurse_rest", condition: "wokeUpInNurseRoom" },
            { next: "day2_night_message_nurse_generic" }
        ]
    },
    "day2_night_message_nurse_rest": {
        name: "Me",
        text: "(I send a message to the Nurse. 'Teacher, thank you for today. I slept well thanks to you.')",
        night: true,
        setFlag: "sent_msg_day2_nurse",
        next: "day2_night_message_nurse_reply"
    },
    "day2_night_message_nurse_generic": {
        name: "Me",
        text: "(I send a message to the Nurse. 'Teacher, good job today! Good night.')",
        night: true,
        setFlag: "sent_msg_day2_nurse",
        next: "day2_night_message_nurse_reply"
    },
    "day2_night_message_nurse_reply": {
        type: "free_talk",
        maxTurns: 10,
        name: "Nurse",
        text: "(An alluring reply.) 'Oh, are you thinking about me already? Hehe, rest well today and see you tomorrow. Good night, {name}.'",
        character: "assets/images/characters/nurse.png",
        silhouette: true,
        context: "Night, a situation where you are exchanging smartphone messages from your respective homes. The Nurse has sent a playful and alluring reply to the protagonist's message. Keep the conversation going actively until it's finished. After the conversation, the protagonist will fall asleep, looking forward to tomorrow. ONLY at the final turn of the conversation, please naturally end the conversation by saying good night since it's late, or by saying see you at school tomorrow.",
        night: true,
        stats: { Nurse: { affinity: 3 } },
        affinityChar: "Nurse",
        affinityBranches: [
            { minAffinity: 40, next: "day2_night_message_nurse_reply_high" },
            { minAffinity: 0, next: "day2_night_message_nurse_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_nurse_reply_low" }
        ],
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_nurse_reply_high": {
        name: "Me",
        text: "(The teacher's alluring words seem to echo in my ears. Knowing she was thinking about me too makes my heart pound. I should definitely stop by the infirmary tomorrow.)",
        character: "assets/images/characters/nurse.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_nurse_reply_normal": {
        name: "Me",
        text: "(I finished the conversation with the teacher. I should make sure to greet her warmly when I see her at school tomorrow.)",
        character: "assets/images/characters/nurse.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_nurse_reply_low": {
        name: "Me",
        text: "(The teacher's reply is a bit cold. Maybe it was rude of me to contact her so late at night?)",
        character: "assets/images/characters/nurse.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_teacher": {
        name: "Me",
        text: "(I send a message to the Teacher. 'Teacher, good job today. Good night.')",
        night: true,
        setFlag: "sent_msg_day2_teacher",
        next: "day2_night_message_teacher_reply"
    },
    "day2_night_message_teacher_reply": {
        type: "free_talk",
        maxTurns: 10,
        name: "Teacher",
        text: "(A reply arrives a bit late.) 'Oh, {name}. I'm a bit surprised to get a message at this hour. But thank you for your concern. Get some rest and don't be late tomorrow.'",
        character: "assets/images/characters/teacher.png",
        silhouette: true,
        context: "Night, a situation where you are exchanging smartphone messages from your respective homes. The Teacher is a bit surprised but grateful for the protagonist's message. Keep the conversation going actively until it's finished. After the conversation, the protagonist will fall asleep, looking forward to tomorrow. ONLY at the final turn of the conversation, please naturally end the conversation by saying good night since it's late, or by saying see you at school tomorrow.",
        night: true,
        stats: { Teacher: { affinity: 3 } },
        affinityChar: "Teacher",
        affinityBranches: [
            { minAffinity: 25, next: "day2_night_message_teacher_reply_high" },
            { minAffinity: 0, next: "day2_night_message_teacher_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_teacher_reply_low" }
        ],
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_teacher_reply_high": {
        name: "Me",
        text: "(The teacher's kind reply puts my mind at ease. Knowing she was thinking about me too makes me feel strangely reassured. I should make sure not to be late tomorrow.)",
        character: "assets/images/characters/teacher.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_teacher_reply_normal": {
        name: "Me",
        text: "(I finished the conversation with the teacher. I should be careful not to be late tomorrow.)",
        character: "assets/images/characters/teacher.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_teacher_reply_low": {
        name: "Me",
        text: "(The teacher's reply is short and firm. I feel like I've been scolded for contacting her so late.)",
        character: "assets/images/characters/teacher.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_final_scene": {
        name: "Me",
        text: "(What kind of truth will be waiting for me tomorrow...? My heavy eyelids close as I drift into sleep.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        fade: true,
        next: "day2_final"
    },
    "day2_final": {
        name: "System",
        text: "(The scenario developed so far is up to here. Please look forward to the next update!)",
        background: null,
        character: null,
        fade: true,
        choices: [
            { text: "Restart from the beginning", next: "index-en.html" }
        ]
    }
});
