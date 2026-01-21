if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_end": {
        name: "Me",
        text: "(The second night at the school. The darkness outside feels much deeper and more mysterious than yesterday. Only the sound of the humidifier fills the silence.)",
        background: "assets/images/background/room_my.png",
        bgm: "night2.mp3",
        character: null,
        night: true,
        next: "day2_end_2"
    },
    "day2_end_2": {
        name: "Me",
        text: "(Lying still in bed, I slowly trace back today's events. The secrets Yuna whispered, and the heart-fluttering encounters...)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_home"
    },
    "day2_night_home": {
        name: "Me",
        text: "(Before falling asleep, I habitually check my smartphone.)",
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
        text: "(Shall I send a message to someone...?)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        choices: [
            { text: "Send a message to Seoyeon.", next: "day2_night_message_seyoun", condition: "has_number_seyoun", excludeCondition: "sent_msg_day2_seyoun" },
            { text: "Send a message to Yuna.", next: "day2_night_message_yuna", condition: "has_number_yuna", excludeCondition: "sent_msg_day2_yuna" },
            { text: "Send a message to Dain.", next: "day2_night_message_dain", condition: "has_number_dain", excludeCondition: "sent_msg_day2_dain" },
            { text: "Send a message to the Nurse.", next: "day2_night_message_nurse", condition: "has_number_nurse", excludeCondition: "sent_msg_day2_nurse" },
            { text: "Send a message to the Teacher.", next: "day2_night_message_teacher", condition: "has_number_teacher", excludeCondition: "sent_msg_day2_teacher" },
            { text: "Head to the nurse's house.", next: "day2_night_nurse_home", condition: "invited_nurse_home" },
            { text: "Check Affinity Levels", next: "day2_check_affinity" },
            { text: "Just go to sleep.", next: "day2_final_scene" }
        ]
    },
    "day2_night_nurse_home": {
        name: "Me",
        text: "(I headed to the address the teacher gave me. It's a quiet studio near the school.)",
        background: "assets/images/background/nurse_house.png",
        character: null,
        night: true,
        next: "day2_night_nurse_home_2"
    },
    "day2_night_nurse_home_2": {
        name: "Nurse",
        text: "\"Oh my, you actually came? Come in quickly. It's quite cold outside, isn't it?\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day2_night_nurse_home_3"
    },
    "day2_night_nurse_home_3": {
        name: "Nurse",
        text: "\"Sit here. I'll get you a cup of warm tea. Being alone with our transfer student... I feel somewhat strange?\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day2_night_nurse_home_4"
    },
    "day2_night_nurse_home_4": {
        name: "Me",
        text: "(A room left alone with the teacher... my heartbeat sounds loud enough to ring in my ears. Her scent tickles the tip of my nose, and the night grows deeper.)",
        background: "assets/images/background/nurse_house.png",
        character: null,
        night: true,
        fade: true,
        next: "day2_final"
    },
    "day2_check_affinity": {
        name: "System",
        text: "Current affinity status with characters: {affinity_list}",
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
        text: "I was really happy to be with you today, from the sunset to the work we did. See you tomorrow!",
        setFlag: "sent_msg_day2_seyoun",
        next: "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_lunch": {
        name: "Me",
        text: "The lunch today was really delicious! Thanks. See you tomorrow.",
        setFlag: "sent_msg_day2_seyoun",
        next: "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_generic": {
        name: "Me",
        text: "Did you have a good day today? See you at school tomorrow.",
        setFlag: "sent_msg_day2_seyoun",
        next: "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_reply": {
        name: "Seoyeon",
        text: "(A message arrived from Seoyeon.) \"I had a great time too! I feel reassured thanks to {name}. Don't forget our lunch tomorrow! Good night.\"",
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 60, next: "day2_night_message_seyoun_high" },
            { minAffinity: 20, next: "day2_night_message_seyoun_normal" },
            { minAffinity: -100, next: "day2_night_message_seyoun_low" }
        ],
        next: "day2_night_message_seyoun_normal"
    },
    "day2_night_message_seyoun_high": {
        name: "Me",
        text: "(Seoyeon's warm message makes my heart flutter. It feels like our distance has shortened a bit. I fall asleep with a smile.)",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_night_message_seyoun_normal": {
        name: "Me",
        text: "(I feel happy at Seoyeon's kind reply. Looking forward to tomorrow, I close my eyes.)",
        stats: { Seoyeon: { affinity: 2 } },
        next: "day2_final_scene"
    },
    "day2_night_message_seyoun_low": {
        name: "Me",
        text: "(Her reply is polite but feels a bit distant. I wonder if I should have been more careful. I fall into a restless sleep.)",
        next: "day2_final_scene"
    },
    "day2_night_message_yuna": {
        name: "Me",
        text: "(What message should I send to Yuna?)",
        branches: [
            { next: "day2_night_message_yuna_met", condition: "day2_met_yuna" },
            { next: "day2_night_message_yuna_generic" }
        ]
    },
    "day2_night_message_yuna_met": {
        name: "Me",
        text: "What you showed me today... I won't forget it. Good night.",
        setFlag: "sent_msg_day2_yuna",
        next: "day2_night_message_yuna_reply"
    },
    "day2_night_message_yuna_generic": {
        name: "Me",
        text: "How was your day? See you at school tomorrow.",
        setFlag: "sent_msg_day2_yuna",
        next: "day2_night_message_yuna_reply"
    },
    "day2_night_message_yuna_reply": {
        name: "Yuna",
        text: "(A short message arrived from Yuna.) \"...Yeah. I knew you'd understand. I'll be watching you even in your dreams, {name}.\"",
        affinityChar: "Yuna",
        affinityBranches: [
            { minAffinity: 40, next: "day2_night_message_yuna_high" },
            { minAffinity: 10, next: "day2_night_message_yuna_normal" },
            { minAffinity: -100, next: "day2_night_message_yuna_low" }
        ],
        next: "day2_night_message_yuna_normal"
    },
    "day2_night_message_yuna_high": {
        name: "Me",
        text: "(Her mysterious message strangely comforts me. It feels like she's really watching over me. I fall into a deep, dark sleep.)",
        stats: { Yuna: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_night_message_yuna_normal": {
        name: "Me",
        text: "(Thinking about the secrets Yuna mentioned, I slowly drift into sleep.)",
        stats: { Yuna: { affinity: 2 } },
        next: "day2_final_scene"
    },
    "day2_night_message_yuna_low": {
        name: "Me",
        text: "(Her message feels cold and eerie. A chill runs down my spine. I pull the blanket up tight and close my eyes.)",
        next: "day2_final_scene"
    },
    "day2_night_message_dain": {
        name: "Me",
        text: "(What message should I send to Dain?)",
        branches: [
            { next: "day2_night_message_dain_bet", condition: "day2_dain_bet" },
            { next: "day2_night_message_dain_practice", condition: "day2_met_dain" },
            { next: "day2_night_message_dain_generic" }
        ]
    },
    "day2_night_message_dain_bet": {
        name: "Me",
        text: "Good job practicing today! Don't forget our tteokbokki bet tomorrow.",
        setFlag: "sent_msg_day2_dain",
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_practice": {
        name: "Me",
        text: "Good job practicing today! It was fun thanks to you. See you tomorrow!",
        setFlag: "sent_msg_day2_dain",
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_generic": {
        name: "Me",
        text: "Are you resting well? See you at school tomorrow.",
        setFlag: "sent_msg_day2_dain",
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_reply": {
        name: "Dain",
        text: "(An energetic message from Dain.) \"Of course! I'm going to win, so get your wallet ready! Haha, good night, {name}!\"",
        affinityChar: "Dain",
        affinityBranches: [
            { minAffinity: 50, next: "day2_night_message_dain_high" },
            { minAffinity: 15, next: "day2_night_message_dain_normal" },
            { minAffinity: -100, next: "day2_night_message_dain_low" }
        ],
        next: "day2_night_message_dain_normal"
    },
    "day2_night_message_dain_high": {
        name: "Me",
        text: "(Dain's bright energy seems to reach me through the screen. I feel refreshed and fall asleep looking forward to tomorrow.)",
        stats: { Dain: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_night_message_dain_normal": {
        name: "Me",
        text: "(Thinking about tomorrow's bet with Dain, I fall asleep with a light heart.)",
        stats: { Dain: { affinity: 2 } },
        next: "day2_final_scene"
    },
    "day2_night_message_dain_low": {
        name: "Me",
        text: "(Her reply is surprisingly dry. Did I say something wrong? I feel a bit restless.)",
        next: "day2_final_scene"
    },
    "day2_night_message_nurse": {
        name: "Me",
        text: "(What message should I send to the nurse?)",
        setFlag: "sent_msg_day2_nurse",
        next: "day2_night_message_nurse_reply"
    },
    "day2_night_message_nurse_reply": {
        name: "Nurse",
        text: "(A playful message from the nurse.) \"Oh my, thinking of me already? Sleep well and see you again tomorrow. Good night, {name}.\"",
        affinityChar: "Nurse",
        affinityBranches: [
            { minAffinity: 40, next: "day2_night_message_nurse_high" },
            { minAffinity: 10, next: "day2_night_message_nurse_normal" },
            { minAffinity: -100, next: "day2_night_message_nurse_low" }
        ],
        next: "day2_night_message_nurse_normal"
    },
    "day2_night_message_nurse_high": {
        name: "Me",
        text: "(Her seductive message keeps me awake for a while. My heart won't stop racing. I finally fall asleep dreaming of her aroma.)",
        stats: { Nurse: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_night_message_nurse_normal": {
        name: "Me",
        text: "(I smile at her playful reply and fall asleep comfortably.)",
        stats: { Nurse: { affinity: 2 } },
        next: "day2_final_scene"
    },
    "day2_night_message_nurse_low": {
        name: "Me",
        text: "(Her message is strictly professional. I feel a bit disappointed. I wonder how I can get closer to her.)",
        next: "day2_final_scene"
    },
    "day2_night_message_teacher": {
        name: "Me",
        text: "Teacher, good job today. Good night.",
        setFlag: "sent_msg_day2_teacher",
        next: "day2_night_message_teacher_reply"
    },
    "day2_night_message_teacher_reply": {
        name: "Teacher",
        text: "(A message from the homeroom teacher.) \"Oh, {name}. I was a bit surprised, but thank you for caring. Get some rest and don't be late tomorrow.\"",
        affinityChar: "Teacher",
        affinityBranches: [
            { minAffinity: 30, next: "day2_night_message_teacher_high" },
            { minAffinity: 0, next: "day2_night_message_teacher_normal" },
            { minAffinity: -100, next: "day2_night_message_teacher_low" }
        ],
        next: "day2_night_message_teacher_normal"
    },
    "day2_night_message_teacher_high": {
        name: "Me",
        text: "(I feel warm knowing the teacher cares. I fall asleep feeling respected.)",
        stats: { Teacher: { affinity: 5 } },
        next: "day2_final_scene"
    },
    "day2_night_message_teacher_normal": {
        name: "Me",
        text: "(Reminding myself not to be late tomorrow, I fall asleep.)",
        stats: { Teacher: { affinity: 2 } },
        next: "day2_final_scene"
    },
    "day2_night_message_teacher_low": {
        name: "Me",
        text: "(She only warns me about being late. I regret sending the message. I fall into a heavy sleep.)",
        next: "day2_final_scene"
    },
    "day2_final_scene": {
        name: "Me",
        text: "(What truth awaits me tomorrow... I fall into a deep sleep, closing my heavy eyelids.)",
        background: "assets/images/background/room_my.png",
        night: true,
        fade: true,
        next: "day2_final"
    },
    "day2_final": {
        name: "System",
        text: "This is the end of the currently developed scenario. Please look forward to the next update!",
        background: "assets/images/background/room_my.png",
        next: "day2_final"
    }
});
