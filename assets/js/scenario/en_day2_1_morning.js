if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_start": {
        name: "Me",
        text: "(The moment I open my eyes, the faces I met yesterday flash through my mind. It's the morning of my second day.)",
        background: "assets/images/background/room_my.png",
        bgm: "intro.mp3",
        character: null,
        next: "day2_start_2"
    },
    "day2_start_2": {
        name: "Me",
        text: "(Yesterday felt as sweet as a dream. But the uniform on my desk tells me this is reality. I have a feeling today will be even better.)",
        next: "day2_start_3"
    },
    "day2_start_3": {
        name: "Me",
        text: "(Let's go. I wonder what kind of heart-fluttering moments are waiting for me today?)",
        next: "day2_school_gate"
    },
    "day2_school_gate": {
        name: "Me",
        text: "(The school entrance feels much more welcoming today. My steps are naturally light.)",
        background: "assets/images/background/school.png",
        bgm: "daily2.mp3",
        next: "day2_school_gate_2"
    },
    "day2_school_gate_2": {
        name: "Me",
        text: "(As I pass through the gate, someone taps me on the shoulder.)",
        choices: [
            { text: "Turn around.", next: "day2_meet_someone" }
        ]
    },
    "day2_meet_someone": {
        name: "Me",
        text: "(I turn around to see...)",
        branches: [
            { next: "day2_meet_yuna", character: "Yuna", condition: "met_yuna" },
            { next: "day2_meet_nurse", character: "Nurse", condition: "met_nurse" },
            { next: "day2_meet_dain", character: "Dain", condition: "met_dain" },
            { next: "day2_meet_seoyeon", character: "Seoyeon", condition: "met_seoyeon" },
            { next: "day2_meet_teacher" }
        ],
        selectByHighestAffinity: true
    },
    "day2_meet_yuna": {
        name: "Me",
        text: "(Yuna is standing under the large zelkova tree, her expression as calm as ever. She closes her book and Gazes at me.)",
        character: "assets/images/characters/yuna_normal.png",
        branches: [
            { next: "day2_yuna_talk_msg", condition: "sent_msg_day1_yuna" },
            { next: "day2_yuna_talk" }
        ]
    },
    "day2_yuna_talk_msg": {
        name: "Yuna",
        text: "\"...Hi. Thanks for the message last night. It made my night a little warmer. Later... check the note on your desk.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_classroom"
    },
    "day2_yuna_talk": {
        name: "Yuna",
        text: "\"...Hi. That 'light' around you is still there today. I'm glad. Later... check the note on your desk.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day2_classroom"
    },
    "day2_meet_nurse": {
        affinityChar: "Nurse",
        affinityBranches: [
            { minAffinity: 20, next: "day2_meet_nurse_high" },
            { minAffinity: -5, next: "day2_meet_nurse_standard" },
            { minAffinity: -100, next: "day2_meet_nurse_low" }
        ]
    },
    "day2_meet_nurse_standard": {
        name: "Nurse",
        text: "\"Oh, {name}! Good morning. You're looking quite lively today!\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_nurse_talk"
    },
    "day2_meet_nurse_high": {
        name: "Nurse",
        text: "(She walks up and tidies my uniform with a gentle touch.) \"My dear transfer student, what kind of dream did you have to be so radiant? I actually overslept a bit because I was thinking about you.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 5 } },
        next: "day2_nurse_talk"
    },
    "day2_meet_nurse_low": {
        name: "Nurse",
        text: "(She sighs and looks away as soon as she sees me.) \"Oh... it's you. It's a bit exhausting to see your face first thing in the morning. Head to class if you're done here.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_classroom"
    },
    "day2_nurse_talk": {
        name: "Nurse",
        text: "(She leans in and gives me a playful wink.)",
        character: "assets/images/characters/nurse_normal.png",
        branches: [
            { next: "day2_nurse_talk_msg", condition: "sent_msg_day1_nurse" },
            { next: "day2_nurse_talk_has_number", condition: "has_number_nurse" },
            { next: "day2_nurse_talk_no_number" }
        ]
    },
    "day2_nurse_talk_msg": {
        name: "Nurse",
        text: "\"The message you sent last night was so sweet. It helped me sleep with a smile. If you feel tired today, you know where to find me.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_classroom"
    },
    "day2_nurse_talk_has_number": {
        name: "Nurse",
        text: "\"You weren't up all night thinking about me, were you? Hehe, just kidding. If you need a break, the nurse's office is always open.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_classroom"
    },
    "day2_nurse_talk_no_number": {
        name: "Nurse",
        text: "\"Only your second day and you're already settling in. Don't push yourself too hard. Come visit me if you feel stressed.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_classroom"
    },
    "day2_meet_seoyeon": {
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "day2_meet_seoyeon_high" },
            { minAffinity: -5, next: "day2_meet_seoyeon_standard" },
            { minAffinity: -100, next: "day2_meet_seoyeon_low" }
        ]
    },
    "day2_meet_seoyeon_standard": {
        name: "Seoyeon",
        text: "\"Morning, {name}! Did you sleep well? You're early again!\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day2_seoyeon_talk"
    },
    "day2_meet_seoyeon_high": {
        name: "Seoyeon",
        text: "(She spots me and runs over with a bright beam.) \"{name}! I was waiting for you! I couldn't sleep much because I was so curious if you were resting well.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day2_seoyeon_talk"
    },
    "day2_meet_seoyeon_low": {
        name: "Seoyeon",
        text: "(She stiffens and looks away as soon as she spots me.) \"...Oh, you're here. At least you're not late. Have a good day.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_talk": {
        name: "Seoyeon",
        text: "(She catches my eye and offers a warm, shy smile.)",
        character: "assets/images/characters/seyoun_normal.png",
        branches: [
            { next: "day2_seoyeon_talk_msg", condition: "sent_msg_day1_seyoun" },
            { next: "day2_seoyeon_talk_has_number", condition: "has_number_seyoun" },
            { next: "day2_seoyeon_talk_no_number" }
        ]
    },
    "day2_seoyeon_talk_msg": {
        name: "Seoyeon",
        text: "\"Thanks for the message last night! It really cheered me up. Let's do our best today too!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_talk_has_number": {
        name: "Seoyeon",
        text: "\"Did you get home okay? I wanted to text you last night, but I was so worried I might be bothering you that I just... held it in.\"",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            { text: "I was actually waiting for your text! Please send one next time.", next: "day2_seoyeon_happy", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Ah, I see. I was so tired I passed out immediately.", next: "day2_seoyeon_normal", stats: { Seoyeon: { affinity: 1 } } }
        ]
    },
    "day2_seoyeon_talk_no_number": {
        name: "Seoyeon",
        text: "\"Did you get home well yesterday? I was a bit worried since it was your first day, but I'm relieved to see you. Let's have a great day!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_happy": {
        name: "Seoyeon",
        text: "\"Really? Then from now on, let's share every little thing. Deal? Now, let's head to class together!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_normal": {
        name: "Seoyeon",
        text: "\"I bet. You must have been exhausted. Well, let's make today even better than yesterday!\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day2_classroom"
    },
    "day2_meet_dain": {
        name: "Dain",
        text: "\"Yo, {name}! Good morning! You're surprisingly early today!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day2_dain_talk"
    },
    "day2_dain_talk": {
        name: "Dain",
        text: "(She gives me an energetic tap on the shoulder.)",
        character: "assets/images/characters/dain_laugh.png",
        branches: [
            { next: "day2_dain_talk_msg", condition: "sent_msg_day1_dain" },
            { next: "day2_dain_talk_dated", condition: "dated_dain_day1" },
            { next: "day2_dain_talk_not_dated" }
        ]
    },
    "day2_dain_talk_msg": {
        name: "Dain",
        text: "\"I got your message! You're surprisingly sweet, you know? Thanks to you, I slept like a baby. Let's keep this energy up all day!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_classroom"
    },
    "day2_dain_talk_dated": {
        name: "Dain",
        text: "\"Thanks to that tteokbokki yesterday, I'm feeling top-notch today! You too, right?\"",
        character: "assets/images/characters/dain_laugh.png",
        choices: [
            { text: "Yeah! I slept well thanks to you.", next: "day2_dain_happy", stats: { Dain: { affinity: 5 } } },
            { text: "I'm still a bit tired... You have crazy stamina.", next: "day2_dain_normal", stats: { Dain: { affinity: 1 } } }
        ]
    },
    "day2_dain_talk_not_dated": {
        name: "Dain",
        text: "\"Did you get home okay? I hope you're starting to like it here! Let's have an awesome day!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_classroom"
    },
    "day2_dain_happy": {
        name: "Dain",
        text: "\"Haha! I do have a bit too much energy, don't I? Alright, see you at the gym during lunch! Don't be late!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_classroom"
    },
    "day2_dain_normal": {
        name: "Dain",
        text: "\"Aw, come on! You need stamina to survive this school! Now, let's get to class!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day2_classroom"
    },
    "day2_meet_teacher": {
        name: "Teacher",
        text: "\"Oh, {name}. Already settling in, I see. It's good to see you arriving early on your second day.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day2_teacher_free_talk"
    },
    "day2_teacher_free_talk": {
        type: "free_talk",
        name: "Teacher",
        text: "\"We still have some time before the bell. Anything on your mind?\"",
        context: "Meeting the homeroom teacher at the school gate and walking to the classroom together. Keep the conversation going actively until it's finished. After the conversation, the teacher will ask for the protagonist's contact information for the emergency contact list. ONLY at the final turn of the conversation, please find a timing to ask for the number or hint that there is official business to discuss.",
        personality: "A professional teacher who is strict about rules but has a soft spot for the protagonist.",
        character: "assets/images/characters/teacher_normal.png",
        affinityChar: "Teacher",
        affinityBranches: [
            { minAffinity: 20, next: "day2_teacher_contact_ask_high" },
            { minAffinity: 0, next: "day2_teacher_contact_ask" },
            { minAffinity: -100, next: "day2_teacher_contact_ask_low" }
        ],
        next: "day2_teacher_contact_ask"
    },
    "day2_teacher_contact_ask_high": {
        name: "Me",
        text: "(I walked to class chatting pleasantly with the teacher. She seems to be in a great mood and asks for my number for the emergency contact list.)",
        character: "assets/images/characters/teacher_smile.png",
        choices: [
            { text: "Sure, here's my number.", next: "day2_teacher_contact_success_high", setFlags: ["has_number_teacher", "has_any_contact"] },
            { text: "I'll let you know later in the faculty room.", next: "day2_classroom" }
        ]
    },
    "day2_teacher_contact_ask_low": {
        name: "Me",
        text: "(The teacher's expression is stern. I might have been too reckless this morning. She sighs and asks for my number for official records.)",
        character: "assets/images/characters/teacher_angry.png",
        choices: [
            { text: "Yes, here it is.", next: "day2_teacher_contact_success_low", setFlags: ["has_number_teacher", "has_any_contact"] },
            { text: "I'll let you know later in the faculty room.", next: "day2_classroom" }
        ]
    },
    "day2_teacher_contact_ask": {
        name: "Me",
        text: "(I walked to class discussing various things with the teacher. She eventually asks for my number for the emergency contact list.)",
        character: "assets/images/characters/teacher_normal.png",
        choices: [
            { text: "Sure, here's my number.", next: "day2_teacher_contact_success_normal", setFlags: ["has_number_teacher", "has_any_contact"] },
            { text: "I'll let you know later in the faculty room.", next: "day2_classroom" }
        ]
    },
    "day2_teacher_contact_success_high": {
        name: "Teacher",
        text: "\"Thanks, {name}! I used the emergency list as an excuse, but... I actually just wanted to be closer to you. Contact me if school gets tough, okay?\"",
        character: "assets/images/characters/teacher_smile.png",
        stats: { Teacher: { affinity: 15 } },
        next: "day2_classroom"
    },
    "day2_teacher_contact_success_low": {
        name: "Teacher",
        text: "\"...I see. Thank you. This is for official use only, so don't worry. Now, get to class before you're late.\"",
        character: "assets/images/characters/teacher_angry.png",
        stats: { Teacher: { affinity: 2 } },
        next: "day2_classroom"
    },
    "day2_teacher_contact_success_normal": {
        name: "Teacher",
        text: "\"Thank you. I'll reach out if anything comes up. Now, let's head in.\"",
        character: "assets/images/characters/teacher_normal.png",
        stats: { Teacher: { affinity: 10 } },
        next: "day2_classroom"
    },

    "day2_classroom": {
        name: "Me",
        text: "(I open the classroom door and the air feels much softer than yesterday. Even the other students seem more friendly.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "day2_classroom_2"
    },
    "day2_classroom_2": {
        name: "Me",
        text: "(As I'm about to unpack my bag, I notice a small note tucked into the corner of my desk.)",
        choices: [
            { text: "Check the note.", next: "day2_check_note" }
        ]
    },
    "day2_check_note": {
        name: "Me",
        text: "(I carefully unfold it. The handwriting is elegant, yet carries a certain coolness.)",
        next: "day2_note_content"
    },
    "day2_note_content": {
        name: "System",
        text: "\"'Come to the library annex backyard during lunch. I have something to tell you.' - Yuna\"",
        next: "day2_morning_class"
    },
    "day2_morning_class": {
        name: "Me",
        text: "(Yuna's note lingers in my mind all through class. What could it be?)",
        branches: [
            { next: "day2_morning_class_yuna_msg", condition: "sent_msg_day1_yuna" },
            { next: "day2_morning_class_yuna_met", condition: "met_yuna" },
            { next: "day2_morning_class_yuna_new" }
        ]
    },
    "day2_morning_class_yuna_msg": {
        name: "Me",
        text: "(Yuna... we just texted last night. Why leave a note instead of calling? I chuckle, finding it very much like her.)",
        next: "day2_lunch_time"
    },
    "day2_morning_class_yuna_met": {
        name: "Me",
        text: "(Yuna... the girl from yesterday. Why would she leave a note like this? I'm getting more and more curious.)",
        next: "day2_lunch_time"
    },
    "day2_morning_class_yuna_new": {
        name: "Me",
        text: "(Yuna...? I haven't heard that name yet. Who could she be, and why is she looking for me?)",
        next: "day2_lunch_time"
    }
});
