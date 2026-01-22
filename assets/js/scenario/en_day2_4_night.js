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
        background: "assets/images/background/nurse_house.png",
        character: "assets/images/characters/nurse_home_event1.png",
        night: true,
        next: "day2_night_nurse_home_3"
    },
    "day2_night_nurse_home_3": {
        name: "Nurse",
        text: "\"Sit here. I'll get you a cup of warm tea. Being alone with our transfer student... I feel somewhat strange?\"",
        character: "assets/images/characters/nurse_home_event1.png",
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
        type: "free_talk",
        maxTurns: 10,
        name: "Seoyeon",
        text: "(A message arrived from Seoyeon.) \"I had a great time too! I feel reassured thanks to {name}. Is there anything else you want to say?\"",
        context: "Late night smartphone messaging with Seoyeon. Seoyeon is blushing because it's her first time messaging like this with the protagonist. Keep the conversation going naturally until it concludes. Only in the final turn, naturally end with saying goodnight or suggesting it's late.",
        personality: "Usually calm and responsible as student council president, but becomes shy and stutters when alone with the protagonist. Shows a cute side different from usual.",
        character: "assets/images/characters/seyoun_shy.png",
        silhouette: true,
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 60, next: "day2_night_message_seyoun_reply_high" },
            { minAffinity: 20, next: "day2_night_message_seyoun_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_seyoun_reply_low" }
        ],
        next: "day2_night_message_seyoun_reply_normal"
    },
    "day2_night_message_seyoun_reply_high": {
        name: "Me",
        text: "(Seoyeon's warm message makes my heart flutter. 'I have a smile on my face because of you'... such words. Even with my eyes closed, the smile won't leave my face.)",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun_reply_normal": {
        name: "Me",
        text: "(I finished chatting with Seoyeon. Looking forward to tomorrow's lunch, I close my eyes.)",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun_reply_low": {
        name: "Me",
        text: "(Her reply is polite but feels cold. I wonder if I sent the message at a bad time. A little disappointed, I fall asleep.)",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_yuna": {
        name: "Me",
        text: "(What message should I send to Yuna?)",
        branches: [
            { next: "day2_night_message_yuna_met", condition: "day2_met_yuna_lunch" },
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
        type: "free_talk",
        maxTurns: 10,
        name: "Yuna",
        text: "(A short message arrived from Yuna.) \"...So you want to talk with me at night too. Interesting.\"",
        context: "Late night smartphone messaging with the mysterious Yuna. Yuna speaks in riddles and says cryptic things like 'secrets of this school', 'the other side', etc. Keep the conversation going naturally until it concludes. Only in the final turn, end mysteriously by saying she'll enter your dreams.",
        personality: "Mysterious, cold, and speaks as if knowing secrets. Drops cryptic hints. Occasionally shows unexpected warmth only to the protagonist.",
        character: "assets/images/characters/yuna_smile.png",
        silhouette: true,
        affinityChar: "Yuna",
        affinityBranches: [
            { minAffinity: 40, next: "day2_night_message_yuna_reply_high" },
            { minAffinity: 10, next: "day2_night_message_yuna_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_yuna_reply_low" }
        ],
        next: "day2_night_message_yuna_reply_normal"
    },
    "day2_night_message_yuna_reply_high": {
        name: "Me",
        text: "(Yuna's message feels like it's quietly seeping into my soul. Even as I close my eyes, it feels like her gaze is watching over me from the darkness. A strange sensation, but not unpleasant.)",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_yuna_reply_normal": {
        name: "Me",
        text: "(I finished chatting with Yuna. Thinking about the secrets she mentioned, I slowly drift into sleep.)",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_yuna_reply_low": {
        name: "Me",
        text: "(Her reply feels cold and cuts like ice. Did I offend her somehow? My mind fills with worry.)",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_dain": {
        name: "Me",
        text: "(What message should I send to Dain?)",
        branches: [
            { next: "day2_night_message_dain_bet", condition: "day2_dain_bet" },
            { next: "day2_night_message_dain_practice", condition: "day2_met_dain_lunch" },
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
        type: "free_talk",
        maxTurns: 10,
        name: "Dain",
        text: "(An energetic message from Dain.) \"Oh! You messaged first! Hehe, were you thinking about me?\"",
        context: "Late night smartphone messaging with Dain. Dain is energetic, talks about sports and practice, and loves teasing. Keep the conversation going naturally until it concludes. Only in the final turn, naturally end by saying she needs to sleep early for tomorrow's practice.",
        personality: "Bright, energetic, sporty. Loves teasing the protagonist but sometimes shows an unexpectedly shy and cute side.",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        affinityChar: "Dain",
        affinityBranches: [
            { minAffinity: 50, next: "day2_night_message_dain_reply_high" },
            { minAffinity: 15, next: "day2_night_message_dain_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_dain_reply_low" }
        ],
        next: "day2_night_message_dain_reply_normal"
    },
    "day2_night_message_dain_reply_high": {
        name: "Me",
        text: "(Dain's bright energy reaches me through the screen. 'Get your wallet ready' - her playful teasing is vivid in my mind. Should I lose the tteokbokki bet on purpose for her tomorrow?)",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_dain_reply_normal": {
        name: "Me",
        text: "(I finished chatting happily with Dain. I should prepare mentally to not lose the tteokbokki bet tomorrow.)",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_dain_reply_low": {
        name: "Me",
        text: "(Dain's reply is unusually dry. Was my message bothersome? My hand holding the phone feels awkward.)",
        character: "assets/images/characters/dain_sad.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_nurse": {
        name: "Me",
        text: "(What message should I send to the nurse?)",
        branches: [
            { next: "day2_night_message_nurse_rest", condition: "day2_met_nurse_after" },
            { next: "day2_night_message_nurse_rest", condition: "woke_up_in_nurse_room" },
            { next: "day2_night_message_nurse_generic" }
        ]
    },
    "day2_night_message_nurse_rest": {
        name: "Me",
        text: "(I sent a message to the nurse. 'Teacher, thank you for today. I rested well thanks to you.')",
        night: true,
        setFlag: "sent_msg_day2_nurse",
        next: "day2_night_message_nurse_reply"
    },
    "day2_night_message_nurse_generic": {
        name: "Me",
        text: "(I sent a message to the nurse. 'Teacher, good job today. Good night.')",
        night: true,
        setFlag: "sent_msg_day2_nurse",
        next: "day2_night_message_nurse_reply"
    },
    "day2_night_message_nurse_reply": {
        type: "free_talk",
        maxTurns: 10,
        name: "Nurse",
        text: "(A seductive reply.) 'Oh my, already thinking of me? Hehe, sleep well tonight and let's see each other again tomorrow. Good night, {name}.'",
        context: "Late night smartphone messaging with the nurse from your own rooms. The nurse sent a playful and seductive reply. Keep the conversation going naturally until it concludes. After the conversation ends, the protagonist will fall asleep looking forward to tomorrow. Only in the final turn, naturally end with goodnight or suggesting to meet at school tomorrow.",
        personality: "Languid and seductive yet caring school nurse. Boldly flirts with the protagonist. As a mature adult, not flustered by provocative comments.",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        stats: { Nurse: { affinity: 3 } },
        affinityChar: "Nurse",
        affinityBranches: [
            { minAffinity: 40, next: "day2_night_message_nurse_reply_high" },
            { minAffinity: 0, next: "day2_night_message_nurse_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_nurse_reply_low" }
        ],
        next: "day2_night_message_nurse_reply_normal"
    },
    "day2_night_message_nurse_reply_high": {
        name: "Me",
        text: "(The teacher's seductive words seem to echo in my ears. I can picture her smile through the screen, making my heart tremble. I must visit the nurse's office no matter what tomorrow.)",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_nurse_reply_normal": {
        name: "Me",
        text: "(I finished chatting with the teacher safely. I should greet her warmly when I see her at school tomorrow.)",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_nurse_reply_low": {
        name: "Me",
        text: "(The teacher's reply is too businesslike. It feels bitter to be treated as just another student.)",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_teacher": {
        name: "Me",
        text: "(I sent a message to the homeroom teacher. 'Teacher, good job today. Good night.')",
        night: true,
        setFlag: "sent_msg_day2_teacher",
        next: "day2_night_message_teacher_reply"
    },
    "day2_night_message_teacher_reply": {
        type: "free_talk",
        maxTurns: 10,
        name: "Teacher",
        text: "(A slightly delayed reply.) 'Oh, {name}. A message at this hour... I'm a bit surprised. But thank you for caring. Get some good rest and don't be late tomorrow.'",
        context: "Late night smartphone messaging with the homeroom teacher from your own rooms. The teacher is a bit flustered but grateful for your message. Keep the conversation going naturally until it concludes. After the conversation ends, the protagonist will fall asleep looking forward to tomorrow. Only in the final turn, naturally end with goodnight or reminding not to be late tomorrow.",
        personality: "A kind and responsible homeroom teacher. Shows appropriate care for students but maintains professional boundaries. Gets a bit flustered with personal messages from students.",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        night: true,
        stats: { Teacher: { affinity: 3 } },
        affinityChar: "Teacher",
        affinityBranches: [
            { minAffinity: 25, next: "day2_night_message_teacher_reply_high" },
            { minAffinity: 0, next: "day2_night_message_teacher_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_teacher_reply_low" }
        ],
        next: "day2_night_message_teacher_reply_normal"
    },
    "day2_night_message_teacher_reply_high": {
        name: "Me",
        text: "(The teacher's kind reply warms my heart. It feels like I'm being respected not just as a student, but as an individual. I look forward to going to school tomorrow.)",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_teacher_reply_normal": {
        name: "Me",
        text: "(I finished chatting with the teacher safely. I should be careful not to be late tomorrow.)",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_teacher_reply_low": {
        name: "Me",
        text: "(The teacher's reply is short and strict. Contacting her during personal time seems to have been a big mistake. Regret washes over me.)",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
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
        text: "(This is the end of the currently developed scenario. Please look forward to the next update!)",
        background: null,
        character: null,
        fade: true,
        choices: [
            { text: "Start again from the beginning", next: "index.html" }
        ]
    }
});
