if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "after_school_start": {
        name: "Me",
        text: "(School's over. The crimson sunset seeps through the window. It was a rather special day today.)",
        background: "assets/images/background/room_school.png",
        bgm: "sunset1.mp3",
        character: null,
        sunset: true,
        next: "after_school_start_2"
    },
    "after_school_start_2": {
        name: "Me",
        text: "(As I pack my bag, I feel a sense of regret. I kind of want to see someone more...)",
        sunset: true,
        next: "after_school_start_3"
    },
    "after_school_start_3": {
        name: "Me",
        text: "(What should I do? The sunset is too beautiful to just head home.)",
        sunset: true,
        choices: [
            { text: "Go to the student council room to see Seoyeon.", next: "after_seoyeon" },
            { text: "Go to the library to see Yuna.", next: "after_yuna", condition: "metYuna" },
            { text: "Take a look around the library annex.", next: "after_yuna_new", excludeCondition: "metYuna" },
            { text: "Go to the gym to check on Dain.", next: "after_dain", condition: "metDain" },
            { text: "Head towards the noisy gymnasium.", next: "after_dain_new", excludeCondition: "metDain" },
            { text: "Go to the nurse's office.", next: "after_nurse", condition: "metNurse" },
            { text: "Explore the nurse's office.", next: "after_nurse_new", excludeCondition: "metNurse" },
            { text: "Go to the faculty room to see the teacher.", next: "after_teacher" },
            { text: "That's it for today, I'm heading home.", next: "after_home" }
        ]
    },
    "after_teacher": {
        name: "Me",
        text: "(I open the faculty room door. My teacher is organizing documents alone.)",
        background: "assets/images/background/teacher_room.png",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        next: "after_teacher_2"
    },
    "after_teacher_2": {
        name: "Teacher",
        text: "\"Oh, {name}! What brings you here so late?\"",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        next: "after_teacher_3"
    },
    "after_teacher_3": {
        name: "Teacher",
        text: "\"You must have many questions since it's your first day. Is there anything on your mind?\"",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        choices: [
            { text: "When are you leaving? I'd love to help.", next: "after_teacher_help", stats: { Teacher: { affinity: 5 } } },
            { text: "I just wanted to see you again before I left.", next: "after_teacher_miss", stats: { Teacher: { affinity: 15 } } },
            { text: "Any secret spots in this school?", next: "after_teacher_info", stats: { Teacher: { affinity: 3 } } }
        ]
    },
    "after_teacher_help": {
        name: "Teacher",
        text: "\"Hehe, that's sweet of you. But this is my job. You should go home and rest, {name}.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "after_teacher_contact"
    },
    "after_teacher_miss": {
        name: "Teacher",
        text: "\"Oh my... you're really something. It's a bit embarrassing, but I'm glad you came... Hehe.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "after_teacher_contact"
    },
    "after_teacher_info": {
        name: "Teacher",
        text: "\"This school has a long history. There are many hidden places. I'll show you around sometime.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "after_teacher_contact"
    },
    "after_teacher_contact": {
        name: "Teacher",
        text: "\"By the way... save my number. Contact me if anything urgent happens, okay?\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        branches: [
            { next: "after_home", condition: "has_number_teacher" },
            { next: "after_teacher_contact_ask" }
        ]
    },
    "after_teacher_contact_ask": {
        name: "Teacher",
        text: "\"Here's my number. Save it correctly.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        setFlags: ["has_number_teacher", "has_any_contact"],
        stats: { Teacher: { affinity: 5 } },
        next: "after_home"
    },
    "after_seoyeon": {
        name: "Seoyeon",
        text: "(I open the student council room door. Seoyeon is buried in paperwork.)",
        background: "assets/images/background/student_room.png",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        next: "after_seoyeon_2"
    },
    "after_seoyeon_2": {
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 15, next: "after_seoyeon_3_high" },
            { minAffinity: -5, next: "after_seoyeon_3_standard" },
            { minAffinity: -100, next: "after_seoyeon_3_low" }
        ]
    },
    "after_seoyeon_3_standard": {
        name: "Seoyeon",
        text: "\"Oh? {name}! You're still here? Were you... waiting for me?\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        choices: [
            { text: "I wanted to go home together. Need help?", next: "after_seoyeon_help", setFlag: "helpedSeoyeon", stats: { Seoyeon: { affinity: 5 } } },
            { text: "I just wanted to see you. Don't push yourself too hard.", next: "after_seoyeon_worry", stats: { Seoyeon: { affinity: 3 } } },
            { text: "I just took a wrong turn.", next: "after_home", stats: { Seoyeon: { affinity: -10 } } }
        ]
    },
    "after_seoyeon_3_high": {
        name: "Seoyeon",
        text: "(She looks up and beams.) \"{name}! I knew you would come. I was actually waiting for you. Want to... head home together?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        choices: [
            { text: "I'll help you finish so we can leave together.", next: "after_seoyeon_help", setFlag: "helpedSeoyeon", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Were you waiting for me? I'm so happy.", next: "after_seoyeon_worry", stats: { Seoyeon: { affinity: 8 } } },
            { text: "You look even prettier under the sunset.", next: "after_seoyeon_help", stats: { Seoyeon: { affinity: 10 } } }
        ]
    },
    "after_seoyeon_3_low": {
        name: "Seoyeon",
        text: "\"...{name}? Why are you here? I'm busy, so if you don't have business, please leave.\"",
        character: "assets/images/characters/seyoun_pout.png",
        sunset: true,
        choices: [
            { text: "Sorry, I didn't mean to bother you.", next: "after_home", stats: { Seoyeon: { affinity: -5 } } },
            { text: "Why so cranky? I just came by.", next: "after_home", stats: { Seoyeon: { affinity: -15 } } }
        ]
    },
    "after_seoyeon_help": {
        name: "Seoyeon",
        text: "\"Really? If you help, it'll be done in no time! Thank you, {name}. You're so reliable.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        bgm: "love1.mp3",
        next: "after_seoyeon_finish"
    },
    "after_seoyeon_worry": {
        name: "Seoyeon",
        text: "\"Hehe, thanks for worrying. I'm almost done, so wait a bit. We'll leave together!\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        next: "after_seoyeon_finish"
    },
    "after_seoyeon_finish": {
        name: "Seoyeon",
        text: "\"Phew, it's finally over! Ready? Let's go home together. I want to talk more.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        next: "after_seoyeon_contact"
    },
    "after_seoyeon_contact": {
        name: "Seoyeon",
        text: "\"Wait, let's exchange numbers. I want to message you when I'm bored.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        branches: [
            { next: "after_home", condition: "has_number_seoyeon" },
            { next: "after_seoyeon_contact_ask" }
        ]
    },
    "after_seoyeon_contact_ask": {
        name: "Seoyeon",
        text: "\"Here's my number. Don't lose it!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        setFlags: ["has_number_seoyeon", "has_any_contact"],
        stats: { Seoyeon: { affinity: 5 } },
        next: "after_home"
    },
    "after_yuna_new": {
        name: "Me",
        text: "(I explore the library annex and see Yuna reading. She seems even more ethereal under the sunset.)",
        background: "assets/images/background/lib_room.png",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        setFlag: "metYuna",
        next: "after_yuna_2"
    },
    "after_yuna": {
        name: "Me",
        text: "(I find Yuna in the library. The setting sun casts a long shadow over her book.)",
        background: "assets/images/background/lib_room.png",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "after_yuna_2"
    },
    "after_yuna_2": {
        name: "Me",
        text: "(What should I do? I don't want to disturb her focus.)",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        choices: [
            { text: "Sit quietly and read next to her.", next: "after_yuna_quiet", stats: { Yuna: { affinity: 10 } } },
            { text: "Ask if she wants to go home together.", next: "after_yuna_go", stats: { Yuna: { affinity: 5 } } },
            { text: "Startle her on purpose.", next: "after_home", stats: { Yuna: { affinity: -10 } } }
        ]
    },
    "after_yuna_quiet": {
        name: "Yuna",
        text: "(She briefly looks up and smiles softly.) \"The silence is... warmer with you here. Let's stay like this a bit longer.\"",
        character: "assets/images/characters/yuna_laugh.png",
        bgm: "love1.mp3",
        sunset: true,
        next: "after_yuna_finish"
    },
    "after_yuna_go": {
        name: "Yuna",
        text: "\"Oh... going home? A bit more... no, I'll go if it's with you.\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        next: "after_yuna_finish"
    },
    "after_yuna_finish": {
        name: "Yuna",
        text: "\"Hehe, I enjoyed today. Let's talk more next time.\"",
        character: "assets/images/characters/yuna_laugh.png",
        sunset: true,
        next: "after_yuna_contact"
    },
    "after_yuna_contact": {
        name: "Yuna",
        text: "\"Wait... can I have your number? I'd like to hear from you...\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        branches: [
            { next: "after_home", condition: "has_number_yuna" },
            { next: "after_yuna_contact_ask" }
        ]
    },
    "after_yuna_contact_ask": {
        name: "Yuna",
        text: "\"Here's mine. Message me when you get home.\"",
        character: "assets/images/characters/yuna_laugh.png",
        sunset: true,
        setFlags: ["has_number_yuna", "has_any_contact"],
        stats: { Yuna: { affinity: 5 } },
        next: "after_home"
    },
    "after_dain_new": {
        name: "Me",
        text: "(I visit the gym and see a girl spiking a ball with incredible intensity. She looks stunning under the sunset.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        setFlag: "metDain",
        next: "after_dain_2"
    },
    "after_dain": {
        name: "Me",
        text: "(I find Dain in the gym. Her powerful spikes echo through the quiet building.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        next: "after_dain_2"
    },
    "after_dain_2": {
        name: "Me",
        text: "(She spots me and jogs over, wiping sweat from her forehead. She smells of fresh energy.)",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        choices: [
            { text: "Your spike was amazing! You're so cool.", next: "after_dain_cool", stats: { Dain: { affinity: 10 } } },
            { text: "Want some water? You look exhausted.", next: "after_dain_water", stats: { Dain: { affinity: 5 } } },
            { text: "Aren't you tired of doing this every day?", next: "after_home", stats: { Dain: { affinity: -10 } } }
        ]
    },
    "after_dain_cool": {
        name: "Dain",
        text: "\"Hehe, did you see that? I'm the ace for a reason! Want me to teach you a move?\"",
        character: "assets/images/characters/dain_active.png",
        bgm: "love1.mp3",
        sunset: true,
        next: "after_dain_finish"
    },
    "after_dain_water": {
        name: "Dain",
        text: "\"Oh, thanks! You're quite thoughtful. Want to walk home together after I finish up?\"",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        next: "after_dain_finish"
    },
    "after_dain_finish": {
        name: "Dain",
        text: "\"I'm glad you came by. I feel even more energized now!\"",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        next: "after_dain_contact"
    },
    "after_dain_contact": {
        name: "Dain",
        text: "\"Hey, give me your number! We should definitely hang out sometime.\"",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        branches: [
            { next: "after_home", condition: "has_number_dain" },
            { next: "after_dain_contact_ask" }
        ]
    },
    "after_dain_contact_ask": {
        name: "Dain",
        text: "\"Here's mine. Message me later, okay? Don't make me wait!\"",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        setFlags: ["has_number_dain", "has_any_contact"],
        stats: { Dain: { affinity: 5 } },
        next: "after_home"
    },
    "after_nurse_new": {
        name: "Me",
        text: "(I visit the nurse's office. A mature woman greeted me with a seductive smile.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        setFlag: "metNurse",
        next: "after_nurse_new_2"
    },
    "after_nurse_new_2": {
        name: "Nurse",
        text: "\"Oh? A new face. You must be the transfer student. I'm the school nurse. What brings you here? Not feeling well?\"",
        character: "assets/images/characters/nurse_normal.png",
        setFlag: "metNurse",
        next: "after_nurse_new_name_ask"
    },
    "after_nurse_new_name_ask": {
        name: "Nurse",
        text: "\"By the way, what's your name? Won't you tell me?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "after_nurse_new_name_share"
    },
    "after_nurse_new_name_share": {
        name: "Me",
        text: "\"My name is {name}.\"",
        setFlag: "knowsName_Nurse",
        next: "nurse_after_day1_contact"
    },
    "after_nurse": {
        name: "Me",
        text: "(I head to the nurse's office. The evening sun makes the room feel warm and private.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "after_nurse_2"
    },
    "after_nurse_2": {
        name: "Nurse",
        text: "\"{name}! Stopping by to say goodbye? What a sweet student you are.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "nurse_after_day1_contact"
    },
    "nurse_after_day1_contact": {
        name: "Nurse",
        text: "\"Come, sit. Why don't we chat for a bit before you head home? I'll pour you some tea.\"",
        character: "assets/images/characters/nurse_normal.png",
        branches: [
            { next: "nurse_after_day1_contact_already", condition: "has_number_nurse" },
            { next: "nurse_after_day1_contact_choice" }
        ]
    },
    "nurse_after_day1_contact_already": {
        name: "Me",
        text: "(The warm scent of tea fills the air. It's so peaceful here.)",
        character: "assets/images/characters/nurse_normal.png",
        choices: [
            { text: "Sure, I'll rest for a bit.", next: "nurse_after_day1_contact_already_stay", stats: { Nurse: { affinity: 5 } } },
            { text: "I'm a bit tired today...", next: "after_home" }
        ]
    },
    "nurse_after_day1_contact_already_stay": {
        name: "Nurse",
        text: "\"Hehe, how sweet. Take a short break with me. I've been waiting for someone to talk to.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "nurse_after_day1_contact_already_stay_2"
    },
    "nurse_after_day1_contact_already_stay_2": {
        name: "Nurse",
        text: "\"...Well, it's about time you head home. Contact me anytime if you double-think anything, okay?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "after_home"
    },
    "nurse_after_day1_contact_choice": {
        name: "Me",
        text: "(The warm tea is tempting. What should I do?)",
        character: "assets/images/characters/nurse_normal.png",
        choices: [
            { text: "Sure, I'll rest for a bit.", next: "nurse_after_day1_contact_stay", stats: { Nurse: { affinity: 5 } } },
            { text: "I'm a bit tired today...", next: "after_home" }
        ]
    },
    "nurse_after_day1_contact_stay": {
        name: "Nurse",
        text: "\"Hehe, how sweet. Being a transfer student must be exhausting. Relax here for a while.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "nurse_after_day1_contact_stay_2"
    },
    "nurse_after_day1_contact_stay_2": {
        name: "Nurse",
        text: "\"...It's time you head home. {name}, just in case, save my number. You can call me even if you're not sick.\"",
        character: "assets/images/characters/nurse_normal.png",
        choices: [
            { text: "Yes, please tell me!", next: "nurse_after_day1_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            { text: "It's a bit overwhelming for now.", next: "after_home", stats: { Nurse: { affinity: -10 } } }
        ]
    },
    "nurse_after_day1_contact_success": {
        name: "Nurse",
        text: "\"Hehe, such a diligent student. Then I'll contact you tonight, okay? Goodbye, {name}.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 10 } },
        next: "after_home"
    },
    "after_home": {
        name: "Me",
        text: "(Finally, it's time to head home. The first day was more eventful than I expected.)",
        background: "assets/images/background/room_school.png",
        next: "go_home_choice"
    },
    "go_home_choice": {
        name: "Me",
        text: "(What should I do? It feels like the night is just beginning.)",
        choices: [
            { text: "Go straight home and rest.", next: "go_home_night" },
            { text: "Go to the convenience store.", next: "go_conv_night" }
        ]
    },
    "go_home_night": {
        name: "Me",
        text: "(I'm exhausted. I'll just head home and sleep.)",
        next: "day1_end"
    },
    "go_conv_night": {
        name: "Me",
        text: "(I'm a bit hungry. I'll stop by the convenience store on my way home.)",
        next: "conv_night_1"
    },
    "conv_night_1": {
        name: "Me",
        text: "(The convenience store is bright and quiet. I managed to grab a couple of snacks.)",
        next: "day1_end"
    }
});
