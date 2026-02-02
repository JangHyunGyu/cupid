/**
 * ============================================================================
 * CUPID - Day 3 Night Scenario (English Version)
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}

if (!SCENARIO[3]) {
    SCENARIO[3] = {};
}

Object.assign(SCENARIO[3], {
    "day3_night_start": {
        name: "Me",
        text: "(I'm home. Friday night... Tomorrow starts the weekend.)",
        background: "assets/images/background/room_my.png",
        bgm: "night2.mp3",
        character: null,
        night: true,
        next: "day3_night_reflect"
    },
    "day3_night_reflect": {
        name: "Me",
        text: "(Lying on the bed, I reflect on today. What happened at lunch... what happened after school...)",
        night: true,
        branches: [
            { next: "day3_night_reflect_trouble", condition: "day3_caught_multiple_dates" },
            { next: "day3_night_reflect_tension", condition: "day3_has_multiple_dates" },
            { next: "day3_night_reflect_normal" }
        ]
    },
    "day3_night_reflect_trouble": {
        name: "Me",
        text: "(Everyone found out at lunch... Can the weekend go smoothly?)",
        night: true,
        next: "day3_night_phone_check"
    },
    "day3_night_reflect_tension": {
        name: "Me",
        text: "(I made multiple plans... I need to manage my time well.)",
        night: true,
        next: "day3_night_phone_check"
    },
    "day3_night_reflect_normal": {
        name: "Me",
        text: "(I'm looking forward to tomorrow. What kind of day will it be?)",
        night: true,
        next: "day3_night_phone_check"
    },

    "day3_night_phone_check": {
        name: "Me",
        text: "(I check my smartphone. There are messages.)",
        night: true,
        branches: [
            { next: "day3_night_multiple_messages", condition: "day3_has_multiple_dates" },
            { next: "day3_night_single_message", condition: "day3_seoyeon_date_confirmed" },
            { next: "day3_night_single_message", condition: "day3_yuna_date_confirmed" },
            { next: "day3_night_single_message", condition: "day3_dain_date_confirmed" },
            { next: "day3_night_single_message", condition: "day3_nurse_date_confirmed" },
            { next: "day3_night_single_message", condition: "day3_teacher_date_confirmed" },
            { next: "day3_night_no_message" }
        ]
    },

    "day3_night_multiple_messages": {
        name: "Me",
        text: "(There are multiple messages... My heart is pounding.)",
        night: true,
        next: "day3_night_check_messages"
    },
    "day3_night_check_messages": {
        name: "Me",
        text: "(Which message should I check first?)",
        night: true,
        choices: [
            { text: "Seoyeon's message", next: "day3_night_msg_seoyeon", condition: "day3_seoyeon_date_confirmed" },
            { text: "Yuna's message", next: "day3_night_msg_yuna", condition: "day3_yuna_date_confirmed" },
            { text: "Dain's message", next: "day3_night_msg_dain", condition: "day3_dain_date_confirmed" },
            { text: "School Nurse's message", next: "day3_night_msg_nurse", condition: "day3_nurse_date_confirmed" },
            { text: "Homeroom Teacher's message", next: "day3_night_msg_teacher", condition: "day3_teacher_date_confirmed" },
            { text: "Just go to sleep", next: "day3_night_ignore_all" }
        ]
    },

    "day3_night_msg_seoyeon": {
        name: "Seoyeon",
        text: "(Message: 10 PM) '{name}, are you still awake? I'm so excited for tomorrow!'",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        night: true,
        branches: [
            { next: "day3_night_seoyeon_suspicious", condition: "day3_seoyeon_knows_others" },
            { next: "day3_night_seoyeon_jealous", condition: "day3_caught_multiple_dates" },
            { next: "day3_night_seoyeon_normal" }
        ]
    },
    "day3_night_seoyeon_suspicious": {
        name: "Seoyeon",
        text: "(Additional message) 'But... you're only meeting me, right? No other plans?'",
        character: "assets/images/characters/seyoun_sad.png",
        silhouette: true,
        night: true,
        choices: [
            { text: "'Yes, only you!'", next: "day3_night_seoyeon_lie", stats: { Seoyeon: { affinity: 5 } }, setFlag: "day3_lied_to_seoyeon" },
            { text: "'Let me be honest...'", next: "day3_night_seoyeon_honest", stats: { Seoyeon: { affinity: -8 } } },
            { text: "(Leave on read)", next: "day3_night_seoyeon_ignore", stats: { Seoyeon: { affinity: -5 } } }
        ]
    },
    "day3_night_seoyeon_lie": {
        name: "Seoyeon",
        text: "'Really? I trust you! See you tomorrow! 💕'",
        character: "assets/images/characters/seyoun_happy.png",
        silhouette: true,
        night: true,
        next: "day3_night_back_to_messages"
    },
    "day3_night_seoyeon_honest": {
        name: "Seoyeon",
        text: "'...What? You have other plans? With who?'",
        character: "assets/images/characters/seyoun_sad.png",
        silhouette: true,
        night: true,
        next: "day3_night_seoyeon_angry"
    },
    "day3_night_seoyeon_angry": {
        name: "Seoyeon",
        text: "'...Fine. We'll see this weekend.'",
        character: "assets/images/characters/seyoun_sad.png",
        silhouette: true,
        night: true,
        setFlag: "day3_seoyeon_angry",
        next: "day3_night_back_to_messages"
    },
    "day3_night_seoyeon_ignore": {
        name: "Me",
        text: "(I didn't reply. Seoyeon will probably be disappointed...)",
        night: true,
        setFlag: "day3_ignored_seoyeon",
        next: "day3_night_back_to_messages"
    },
    "day3_night_seoyeon_jealous": {
        name: "Seoyeon",
        text: "(Additional message) 'About lunch today... it's still bothering me. Please be honest with me.'",
        character: "assets/images/characters/seyoun_sad.png",
        silhouette: true,
        night: true,
        choices: [
            { text: "'Sorry, I couldn't say no to anyone...'", next: "day3_night_seoyeon_apologize", stats: { Seoyeon: { affinity: 3 } } },
            { text: "'You're the most important to me'", next: "day3_night_seoyeon_reassure", stats: { Seoyeon: { affinity: 8 } } },
            { text: "(Leave on read)", next: "day3_night_seoyeon_ignore", stats: { Seoyeon: { affinity: -5 } } }
        ]
    },
    "day3_night_seoyeon_apologize": {
        name: "Seoyeon",
        text: "'...Thanks for being honest. But I don't like sharing with others.'",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_back_to_messages"
    },
    "day3_night_seoyeon_reassure": {
        name: "Seoyeon",
        text: "'...Really? I'll remember that. Prove it tomorrow.'",
        character: "assets/images/characters/seyoun_happy.png",
        silhouette: true,
        night: true,
        setFlag: "day3_seoyeon_expects_priority",
        next: "day3_night_back_to_messages"
    },
    "day3_night_seoyeon_normal": {
        name: "Seoyeon",
        text: "'Have you decided where to go tomorrow? You can leave it to me! Good night! 😊'",
        character: "assets/images/characters/seyoun_happy.png",
        silhouette: true,
        night: true,
        choices: [
            { text: "'I'll leave it to you! Good night!'", next: "day3_night_seoyeon_good", stats: { Seoyeon: { affinity: 3 } } },
            { text: "'Thanks, see you tomorrow!'", next: "day3_night_seoyeon_good", stats: { Seoyeon: { affinity: 2 } } }
        ]
    },
    "day3_night_seoyeon_good": {
        name: "Me",
        text: "(Finished chatting with Seoyeon.)",
        night: true,
        next: "day3_night_back_to_messages"
    },

    "day3_night_msg_yuna": {
        name: "Yuna",
        text: "(Message: 11:59 PM) '...{name}. Tomorrow night. Don't forget.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        branches: [
            { next: "day3_night_yuna_witnessed", condition: "day3_yuna_witnessed_seoyeon" },
            { next: "day3_night_yuna_knows", condition: "day3_caught_multiple_dates" },
            { next: "day3_night_yuna_normal" }
        ]
    },
    "day3_night_yuna_witnessed": {
        name: "Yuna",
        text: "(Additional message) 'Today after school... I saw you leaving with Seoyeon.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_yuna_warning"
    },
    "day3_night_yuna_warning": {
        name: "Yuna",
        text: "'If you lie to me... you'll regret it.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        choices: [
            { text: "'You're the most important to me'", next: "day3_night_yuna_reassure", stats: { Yuna: { affinity: 10 } }, setFlag: "day3_lied_to_yuna" },
            { text: "'Seoyeon and I are just friends'", next: "day3_night_yuna_excuse", stats: { Yuna: { affinity: 3 } } },
            { text: "'...Sorry'", next: "day3_night_yuna_apologize", stats: { Yuna: { affinity: -3 } } }
        ]
    },
    "day3_night_yuna_reassure": {
        name: "Yuna",
        text: "'...Really? I'll believe that. But if you betray me...'",
        character: "assets/images/characters/yuna_happy.png",
        silhouette: true,
        night: true,
        next: "day3_night_yuna_threat"
    },
    "day3_night_yuna_threat": {
        name: "Yuna",
        text: "'...You know, right? 😊'",
        character: "assets/images/characters/yuna_happy.png",
        silhouette: true,
        night: true,
        setFlag: "day3_yuna_threatened",
        next: "day3_night_back_to_messages"
    },
    "day3_night_yuna_excuse": {
        name: "Yuna",
        text: "'...Okay. Friends. I'll believe you.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_back_to_messages"
    },
    "day3_night_yuna_apologize": {
        name: "Yuna",
        text: "'...We'll talk when we meet tomorrow. Don't run away.'",
        character: "assets/images/characters/yuna_sad.png",
        silhouette: true,
        night: true,
        setFlag: "day3_yuna_upset",
        next: "day3_night_back_to_messages"
    },
    "day3_night_yuna_knows": {
        name: "Yuna",
        text: "(Additional message) '...You made promises with others too, didn't you?'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_yuna_knows_2"
    },
    "day3_night_yuna_knows_2": {
        name: "Yuna",
        text: "'It's okay. You'll come to me in the end.'",
        character: "assets/images/characters/yuna_happy.png",
        silhouette: true,
        night: true,
        setFlag: "day3_yuna_confident",
        next: "day3_night_back_to_messages"
    },
    "day3_night_yuna_normal": {
        name: "Yuna",
        text: "'...See you in your dreams.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        choices: [
            { text: "'Yeah, good night'", next: "day3_night_yuna_sleep", stats: { Yuna: { affinity: 3 } } },
            { text: "'What kind of dreams?'", next: "day3_night_yuna_dream", stats: { Yuna: { affinity: 5 } } }
        ]
    },
    "day3_night_yuna_dream": {
        name: "Yuna",
        text: "'...Secret. I'll tell you tomorrow night.'",
        character: "assets/images/characters/yuna_happy.png",
        silhouette: true,
        night: true,
        next: "day3_night_back_to_messages"
    },
    "day3_night_yuna_sleep": {
        name: "Me",
        text: "(Finished chatting with Yuna.)",
        night: true,
        next: "day3_night_back_to_messages"
    },

    "day3_night_msg_dain": {
        name: "Dain",
        text: "(Message: 9 PM) 'Hey!! 9 AM at the gym tomorrow!! Don't be late!!! 😤'",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        night: true,
        branches: [
            { next: "day3_night_dain_suspicious", condition: "day3_caught_multiple_dates" },
            { next: "day3_night_dain_normal" }
        ]
    },
    "day3_night_dain_suspicious": {
        name: "Dain",
        text: "(Additional message) 'But... did you really make plans with others too? I heard at lunch.'",
        character: "assets/images/characters/dain_sad.png",
        silhouette: true,
        night: true,
        choices: [
            { text: "'Your practice is most important!'", next: "day3_night_dain_priority", stats: { Dain: { affinity: 8 } }, setFlag: "day3_lied_to_dain" },
            { text: "'I do have other plans...'", next: "day3_night_dain_honest", stats: { Dain: { affinity: -5 } } },
            { text: "'The times are different so it's fine'", next: "day3_night_dain_excuse", stats: { Dain: { affinity: 2 } } }
        ]
    },
    "day3_night_dain_priority": {
        name: "Dain",
        text: "'Really?! Hehe, then it's fine! I'll show you something cool tomorrow!'",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        night: true,
        setFlag: "day3_dain_expects_priority",
        next: "day3_night_back_to_messages"
    },
    "day3_night_dain_honest": {
        name: "Dain",
        text: "'...I see? Well, can't help it. But you HAVE to come to my practice!'",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_back_to_messages"
    },
    "day3_night_dain_excuse": {
        name: "Dain",
        text: "'Hmm... well, if the times work out, I guess it's okay. But focus on me!'",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_back_to_messages"
    },
    "day3_night_dain_normal": {
        name: "Dain",
        text: "(Additional message) 'Let's go get tteokbokki after practice! My treat! 🍜'",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        night: true,
        choices: [
            { text: "'Sounds great! Looking forward to it!'", next: "day3_night_dain_good", stats: { Dain: { affinity: 5 } } },
            { text: "'lol okay!'", next: "day3_night_dain_good", stats: { Dain: { affinity: 3 } } }
        ]
    },
    "day3_night_dain_good": {
        name: "Me",
        text: "(Finished chatting with Dain.)",
        night: true,
        next: "day3_night_back_to_messages"
    },

    "day3_night_msg_nurse": {
        name: "School Nurse",
        text: "(Message: 11 PM) 'My cute transfer student, still awake? Hehe.'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_nurse_2"
    },
    "day3_night_nurse_2": {
        name: "School Nurse",
        text: "'You haven't forgotten Sunday evening, right? I'll prepare something special. 😉'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        choices: [
            { text: "'I'm looking forward to it!'", next: "day3_night_nurse_excited", stats: { Nurse: { affinity: 5 } } },
            { text: "'What is it?'", next: "day3_night_nurse_curious", stats: { Nurse: { affinity: 3 } } }
        ]
    },
    "day3_night_nurse_excited": {
        name: "School Nurse",
        text: "'You can look forward to it. Sleep well and see you Sunday, {name}. 💋'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_back_to_messages"
    },
    "day3_night_nurse_curious": {
        name: "School Nurse",
        text: "'Secret~ You'll find out on Sunday. Look forward to it.'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_back_to_messages"
    },

    "day3_night_msg_teacher": {
        name: "Homeroom Teacher",
        text: "(Message: 10 PM) '{name}, you haven't forgotten about the museum tomorrow, have you?'",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_teacher_2"
    },
    "day3_night_teacher_2": {
        name: "Homeroom Teacher",
        text: "'I'm excited since it's been a while since I had an outing. Sunday at 2 PM, museum entrance.'",
        character: "assets/images/characters/teacher_smile.png",
        silhouette: true,
        night: true,
        choices: [
            { text: "'Yes, I'm excited!'", next: "day3_night_teacher_good", stats: { Teacher: { affinity: 5 } } },
            { text: "'Good night!'", next: "day3_night_teacher_good", stats: { Teacher: { affinity: 3 } } }
        ]
    },
    "day3_night_teacher_good": {
        name: "Homeroom Teacher",
        text: "'Alright, sleep well and see you Sunday. Good night.'",
        character: "assets/images/characters/teacher_smile.png",
        silhouette: true,
        night: true,
        next: "day3_night_back_to_messages"
    },

    "day3_night_back_to_messages": {
        name: "Me",
        text: "(Should I check other messages?)",
        night: true,
        choices: [
            { text: "Seoyeon's message", next: "day3_night_msg_seoyeon", condition: "day3_seoyeon_date_confirmed", excludeCondition: "checked_seoyeon_msg" },
            { text: "Yuna's message", next: "day3_night_msg_yuna", condition: "day3_yuna_date_confirmed", excludeCondition: "checked_yuna_msg" },
            { text: "Dain's message", next: "day3_night_msg_dain", condition: "day3_dain_date_confirmed", excludeCondition: "checked_dain_msg" },
            { text: "School Nurse's message", next: "day3_night_msg_nurse", condition: "day3_nurse_date_confirmed", excludeCondition: "checked_nurse_msg" },
            { text: "Homeroom Teacher's message", next: "day3_night_msg_teacher", condition: "day3_teacher_date_confirmed", excludeCondition: "checked_teacher_msg" },
            { text: "Go to sleep", next: "day3_night_sleep" }
        ]
    },

    "day3_night_single_message": {
        name: "Me",
        text: "(There's a message.)",
        night: true,
        branches: [
            { next: "day3_night_seoyeon_normal", condition: "day3_seoyeon_date_confirmed" },
            { next: "day3_night_yuna_normal", condition: "day3_yuna_date_confirmed" },
            { next: "day3_night_dain_normal", condition: "day3_dain_date_confirmed" },
            { next: "day3_night_nurse_2", condition: "day3_nurse_date_confirmed" },
            { next: "day3_night_teacher_2", condition: "day3_teacher_date_confirmed" }
        ]
    },

    "day3_night_no_message": {
        name: "Me",
        text: "(No special messages. What should I do this weekend...)",
        night: true,
        next: "day3_night_sleep"
    },

    "day3_night_ignore_all": {
        name: "Me",
        text: "(I decided to just sleep without checking messages. I'll read them tomorrow morning...)",
        night: true,
        setFlag: "day3_ignored_all_messages",
        stats: { Seoyeon: { affinity: -3 }, Yuna: { affinity: -3 }, Dain: { affinity: -3 } },
        next: "day3_night_sleep"
    },

    "day3_night_sleep": {
        name: "Me",
        text: "(My eyes are closing. Tomorrow is Saturday... What kind of day will it be.)",
        night: true,
        fade: true,
        next: "day3_night_sleep_final"
    },
    "day3_night_sleep_final": {
        name: "Me",
        text: "(Multiple plans swirl through my mind. Can I satisfy everyone...?)",
        night: true,
        branches: [
            { next: "day3_night_nightmare", condition: "day3_has_multiple_dates" },
            { next: "day3_night_peaceful" }
        ]
    },
    "day3_night_nightmare": {
        name: "Me",
        text: "(I had an uneasy dream. Someone was crying, someone was angry... and someone was smiling coldly.)",
        night: true,
        fade: true,
        next: "day3_final_scene"
    },
    "day3_night_peaceful": {
        name: "Me",
        text: "(A peaceful night. I'm looking forward to tomorrow.)",
        night: true,
        fade: true,
        next: "day3_final_scene"
    },

    "day3_final_scene": {
        name: "Me",
        text: "(Friday night deepens... Tomorrow is finally Saturday.)",
        background: null,
        character: null,
        night: true,
        fade: true,
        next: "day4_start"
    },
    
    "day4_start": {
        name: "Me",
        text: "(I open my eyes. Morning sunlight fills the room... It's finally Saturday morning.)",
        background: "assets/images/background/room_my.png",
        bgm: "intro.mp3",
        character: null,
        fade: true,
        next: "day4_placeholder"
    },
    "day4_placeholder": {
        name: "Me",
        text: "(What kind of day will today be... I'm excited yet anxious.)",
        choices: [
            { text: "[To be continued...]", next: "index.html" }
        ]
    }
});
