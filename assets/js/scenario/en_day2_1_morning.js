if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

Object.assign(SCENARIO[2], {
    "day2_start": {
        name: "Me",
        text: "(Beep beep! The alarm pulls me from a deep sleep. It's the morning of my second day here.)",
        background: "assets/images/background/room_my.png",
        character: null,
        next: "day2_start_2"
    },
    "day2_start_2": {
        name: "Me",
        text: "(Yesterday feels like a blur, almost like a dream... but the uniform waiting for me is very real.)",
        next: "day2_start_3"
    },
    "day2_start_3": {
        name: "Me",
        text: "(I wonder who I'll meet today? With a mix of nerves and excitement, I head out.)",
        next: "day2_school_gate"
    },
    "day2_school_gate": {
        name: "Me",
        text: "(The school gate comes into view. It feels a little more familiar than it did yesterday.)",
        background: "assets/images/background/school.png",
        next: "day2_school_gate_2"
    },
    "day2_school_gate_2": {
        name: "Me",
        text: "(As I'm about to walk in, I feel a light tap on my shoulder.)",
        choices: [
            { text: "Turn around.", next: "day2_meet_someone" }
        ]
    },
    "day2_meet_someone": {
        name: "Me",
        text: "(I turn around to see...)",
        branches: [
            { next: "day2_meet_yuna", character: "Yuna", condition: "metYuna" },
            { next: "day2_meet_nurse", character: "Nurse", condition: "metNurse" },
            { next: "day2_meet_dain", character: "Dain", condition: "metDain" },
            { next: "day2_meet_seoyeon", character: "Seoyeon", condition: "metSeoyeon" },
            { next: "day2_meet_teacher" }
        ],
        selectByHighestAffinity: true
    },
    "day2_meet_yuna": {
        name: "Me",
        text: "(Under the large zelkova tree by the school gate, I saw Yuna standing with an indifferent expression. She closes her book and stares at me quietly.)",
        character: "assets/images/characters/yuna_nomal.png",
        branches: [
            { next: "day2_yuna_talk_msg", condition: "sent_msg_day1_yuna" },
            { next: "day2_yuna_talk" }
        ]
    },
    "day2_yuna_talk_msg": {
        name: "Yuna",
        text: "\"...Hi. Thanks for the message last night. It made my night a little warmer. Later... check the note.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_classroom"
    },
    "day2_yuna_talk": {
        name: "Yuna",
        text: "\"...Hi. That 'light' is still there today. I'm glad. Later... check the note.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "day2_classroom"
    },
    "day2_meet_nurse": {
        name: "Nurse",
        text: "\"Oh, {name?}! Good morning. You're looking lively today!\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_nurse_talk"
    },
    "day2_nurse_talk": {
        name: "Nurse",
        text: "(She leans in close and gives me a playful wink.)",
        character: "assets/images/characters/nurse.png",
        branches: [
            { next: "day2_nurse_talk_msg", condition: "sent_msg_day1_nurse" },
            { next: "day2_nurse_talk_has_number", condition: "has_number_nurse" },
            { next: "day2_nurse_talk_no_number" }
        ]
    },
    "day2_nurse_talk_msg": {
        name: "Nurse",
        text: "\"The message you sent last night was really cute. It helped me sleep with a smile on my face. If you feel unwell today, you know where to find me.\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_classroom"
    },
    "day2_nurse_talk_has_number": {
        name: "Nurse",
        text: "\"You weren't up all night thinking about me, were you? Hehe, just kidding. If you need a break, you know where to find me.\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_classroom"
    },
    "day2_nurse_talk_no_number": {
        name: "Nurse",
        text: "\"Only your second day and you're already a pro. Don't push yourself too hard, okay? My door is always open.\"",
        character: "assets/images/characters/nurse.png",
        next: "day2_classroom"
    },
    "day2_meet_seoyeon": {
        name: "Seoyeon",
        text: "\"Morning, {name?}! Did you sleep well? You're early again!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_seoyeon_talk"
    },
    "day2_seoyeon_talk": {
        name: "Seoyeon",
        text: "(She catches my eye and offers a warm, gentle smile.)",
        character: "assets/images/characters/seyoun_nomal.png",
        branches: [
            { next: "day2_seoyeon_talk_msg", condition: "sent_msg_day1_seyoun" },
            { next: "day2_seoyeon_talk_has_number", condition: "has_number_seyoun" },
            { next: "day2_seoyeon_talk_no_number" }
        ]
    },
    "day2_seoyeon_talk_msg": {
        name: "Seoyeon",
        text: "\"I was so happy to get your message last night! I wanted to reply right away, but I was worried I might be bothering you. Hehe, let's go to the classroom together!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_talk_has_number": {
        name: "Seoyeon",
        text: "\"Did you get home okay? I wanted to text you last night, but I was worried it might be too late...\"",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            { text: "I was actually waiting for your text! You can send one anytime.", next: "day2_seoyeon_happy", stats: { Seoyeon: { affinity: 10 } } },
            { text: "Ah, I see. I was so tired I crashed as soon as I got home.", next: "day2_seoyeon_normal", stats: { Seoyeon: { affinity: 2 } } }
        ]
    },
    "day2_seoyeon_talk_no_number": {
        name: "Seoyeon",
        text: "\"Did you get home well yesterday? I was worried since it was your first day, but I'm relieved to see you today. Let's do our best today too!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_happy": {
        name: "Seoyeon",
        text: "\"Really? Hehe, then from today on, we're sharing even the smallest things? Now, let's go to the classroom together!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_normal": {
        name: "Seoyeon",
        text: "\"Right? You must have been very tired on your first day. Now, let's do our best in school life today too!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "day2_classroom"
    },
    "day2_meet_dain": {
        name: "Dain",
        text: "\"Hey, {name?}! Good morning! You're early today!\"",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_dain_talk"
    },
    "day2_dain_talk": {
        name: "Dain",
        text: "(Dain taps my shoulder energetically.)",
        character: "assets/images/characters/dain_laugh.png",
        branches: [
            { next: "day2_dain_talk_msg", condition: "sent_msg_day1_dain" },
            { next: "day2_dain_talk_dated", condition: "datedDainDay1" },
            { next: "day2_dain_talk_not_dated" }
        ]
    },
    "day2_dain_talk_msg": {
        name: "Dain",
        text: "\"I got your message yesterday! You're surprisingly sweet, aren't you? Thanks to you, I slept like a baby. Let's have an energetic day today too!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_classroom"
    },
    "day2_dain_talk_dated": {
        name: "Dain",
        text: "\"Thanks to the tteokbokki we ate yesterday, I'm in top condition today! You too, right?\"",
        character: "assets/images/characters/dain_laugh.png",
        choices: [
            { text: "Yeah! I slept well thanks to Dain.", next: "day2_dain_happy", stats: { Dain: { affinity: 10 } } },
            { text: "I'm a bit tired... Dain, you really have great stamina.", next: "day2_dain_normal", stats: { Dain: { affinity: 2 } } }
        ]
    },
    "day2_dain_talk_not_dated": {
        name: "Dain",
        text: "\"Did you get home well yesterday? I don't know if you got to look around the school since it was your first day! Let's have an energetic day today too!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_classroom"
    },
    "day2_dain_happy": {
        name: "Dain",
        text: "\"Haha! My energy is a bit overflowing, isn't it? Okay, come to the gym during lunch today too! I'll be waiting!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_classroom"
    },
    "day2_dain_normal": {
        name: "Dain",
        text: "\"Aw~ Don't be a wimp! Stamina is national power if you want to adapt to school life! Now, let's go to the classroom!\"",
        character: "assets/images/characters/dain_nomal.png",
        next: "day2_classroom"
    },
    "day2_meet_teacher": {
        name: "Teacher",
        text: "\"Oh, isn't it {name?}? It's only your second day, but you seem to have adapted to school already. It's good to see you arriving early.\"",
        character: "assets/images/characters/teacher.png",
        next: "day2_classroom"
    },
    "day2_classroom": {
        name: "Me",
        text: "(I open the classroom door and feel a much warmer atmosphere than yesterday. Even the other students' glances seem friendlier.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "day2_classroom_2"
    },
    "day2_classroom_2": {
        name: "Me",
        text: "(As I'm about to unpack my bag, I notice a small, folded note tucked into the corner of my desk.)",
        choices: [
            { text: "Check the note.", next: "day2_check_note" }
        ]
    },
    "day2_check_note": {
        name: "Me",
        text: "(I carefully unfold it. The handwriting is elegant, yet carries a certain coldness.)",
        next: "day2_note_content"
    },
    "day2_note_content": {
        name: "System",
        text: "\"'Meet me behind the library annex during lunch. I have something to tell you.' - Yuna\"",
        next: "day2_morning_class"
    },
    "day2_morning_class": {
        name: "Me",
        text: "(Yuna's note stays on my mind all through class. What could she possibly want to tell me?)",
        branches: [
            { next: "day2_morning_class_yuna_msg", condition: "sent_msg_day1_yuna" },
            { next: "day2_morning_class_yuna_met", condition: "metYuna" },
            { next: "day2_morning_class_yuna_new" }
        ]
    },
    "day2_morning_class_yuna_msg": {
        name: "Me",
        text: "(Yuna, the girl I exchanged messages with last night... I already have her number, so why leave a note? I chuckle, thinking it's just like her.)",
        next: "day2_lunch_time"
    },
    "day2_morning_class_yuna_met": {
        name: "Me",
        text: "(Yuna... the girl I met yesterday. Why would she leave a note like this? I can't help but feel curious about her 'secret'.)",
        next: "day2_lunch_time"
    },
    "day2_morning_class_yuna_new": {
        name: "Me",
        text: "(Yuna...? I don't remember meeting anyone by that name yesterday. Who is she, and why is she looking for me?)",
        next: "day2_lunch_time"
    }
});
