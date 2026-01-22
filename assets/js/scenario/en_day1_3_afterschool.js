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
            { text: "Go to the library to see Yuna.", next: "after_yuna", condition: "met_yuna" },
            { text: "Take a look around the library annex.", next: "after_yuna_new", excludeCondition: "met_yuna" },
            { text: "Go to the gym to check on Dain.", next: "after_dain", condition: "met_dain" },
            { text: "Head towards the noisy gymnasium.", next: "after_dain_new", excludeCondition: "met_dain" },
            { text: "Go to the nurse's office.", next: "after_nurse", condition: "met_nurse" },
            { text: "Explore the nurse's office.", next: "after_nurse_new", excludeCondition: "met_nurse" },
            { text: "Go to the faculty room to see the teacher.", next: "after_teacher" },
            { text: "That's it for today, I'm heading home.", next: "after_home" }
        ]
    },
    "after_home": {
        name: "Me",
        text: "(The evening sun has set, and the sky is turning to dusk. Time to go home.)",
        background: "assets/images/background/room_school.png",
        character: null,
        sunset: true,
        next: "after_home_2"
    },
    "after_home_2": {
        name: "Me",
        text: "(As I leave the school gate, I feel a sudden melancholy. A lot happened on my first day.)",
        next: "after_home_3"
    },
    "after_home_3": {
        name: "Me",
        text: "(What should I do? It feels like the night is just beginning.)",
        choices: [
            { text: "Go straight home and rest.", next: "day1_end" },
            { text: "Stop by the convenience store on my way.", next: "after_conv" }
        ]
    },
    "after_conv": {
        name: "Me",
        text: "(I stop by the convenience store near the school. The warm light from inside catches my eye.)",
        background: "assets/images/background/conv.png",
        character: null,
        next: "after_conv_2"
    },
    "after_conv_2": {
        name: "Me",
        text: "(I bought some snacks and ramen. It makes me feel better for some reason.)",
        next: "day1_end"
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
        next: "after_teacher_contact_ask"
    },
    "after_teacher_miss": {
        name: "Teacher",
        text: "\"Oh my... you're really something. It's a bit embarrassing, but I'm glad you came... Hehe.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "after_teacher_contact_ask"
    },
    "after_teacher_info": {
        name: "Teacher",
        text: "\"This school has a long history. There are many hidden places. I'll show you around sometime.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "after_teacher_contact_ask"
    },
    "after_teacher_contact_ask": {
        name: "Teacher",
        text: "\"By the way, {name}... (She takes out her phone with a slightly flushed face.) What do you think about exchanging numbers? In case of emergencies...\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        branches: [
            { next: "after_teacher_contact_already", condition: "has_number_teacher" },
            { next: "after_teacher_contact_choice" }
        ]
    },
    "after_teacher_contact_choice": {
        name: "Me",
        text: "(The teacher is shyly waiting for my answer. What should I do?)",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        choices: [
            { text: "Of course! It'd be reassuring to have your number, Teacher.", next: "after_teacher_contact_success", setFlags: ["has_number_teacher", "has_any_contact"], stats: { Teacher: { affinity: 10 } } },
            { text: "Sorry, I think it's a bit too early.", next: "after_teacher_contact_fail", stats: { Teacher: { affinity: -15 } } }
        ]
    },
    "after_teacher_contact_already": {
        name: "Teacher",
        text: "\"Oh wait, we already exchanged numbers earlier. Hehe, I forgot. Then I'll head back to work. See you tomorrow!\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "after_home"
    },
    "after_teacher_contact_success": {
        name: "Teacher",
        text: "(The teacher enters my number happily.) \"Thank you, {name}! Feel free to contact me anytime. I'll always answer!\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "after_home"
    },
    "after_teacher_contact_fail": {
        name: "Teacher",
        text: "(The teacher looks a bit disappointed but forces a smile.) \"Oh, I see... Sorry, was I being too hasty? Let's take our time getting to know each other. See you tomorrow.\"",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        next: "after_home"
    },
    "after_seoyeon": {
        name: "Me",
        text: "(I open the student council room door. Seoyeon is buried in paperwork.)",
        background: "assets/images/background/student_room.png",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 15, next: "after_seoyeon_high" },
            { minAffinity: -5, next: "after_seoyeon_standard" },
            { minAffinity: -100, next: "after_seoyeon_low" }
        ],
        next: "after_seoyeon_standard"
    },
    "after_seoyeon_high": {
        name: "Seoyeon",
        text: "(Seoyeon looks up and beams when she sees me.) \"{name}! I was just thinking of you! Were you... waiting for me?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        next: "after_seoyeon_high_2"
    },
    "after_seoyeon_high_2": {
        name: "Seoyeon",
        text: "\"Actually, I wanted to see you before going home! But I still have a bit of work left... Will you wait for me?\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        choices: [
            { text: "Of course! I'll help so we can finish faster.", next: "after_seoyeon_help", setFlag: "helped_seoyeon", stats: { Seoyeon: { affinity: 10 } } },
            { text: "I just wanted to see you. Don't push yourself too hard.", next: "after_seoyeon_worry", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Actually, I just came by.", next: "after_home", stats: { Seoyeon: { affinity: -10 } } }
        ]
    },
    "after_seoyeon_standard": {
        name: "Seoyeon",
        text: "\"Oh? {name}! You're still here? Were you... waiting for me?\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        choices: [
            { text: "I wanted to go home together. Need help?", next: "after_seoyeon_help", setFlag: "helped_seoyeon", stats: { Seoyeon: { affinity: 5 } } },
            { text: "I just wanted to see you. Don't push yourself too hard.", next: "after_seoyeon_worry", stats: { Seoyeon: { affinity: 3 } } },
            { text: "I just took a wrong turn.", next: "after_home", stats: { Seoyeon: { affinity: -10 } } }
        ]
    },
    "after_seoyeon_low": {
        name: "Seoyeon",
        text: "(She briefly glances up with a sulky expression.) \"...{name}? Why are you here? I'm busy, so if you don't have business, please leave.\"",
        character: "assets/images/characters/seyoun_pout.png",
        sunset: true,
        choices: [
            { text: "Sorry, I actually came to help you.", next: "after_seoyeon_help", setFlag: "helped_seoyeon", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Why so cranky? I just came by.", next: "after_home", stats: { Seoyeon: { affinity: -15 } } }
        ]
    },
    "after_seoyeon_help": {
        name: "Seoyeon",
        text: "(Her expression softens.) \"Really? Thank you! With your help, it'll be done in no time.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        bgm: "love1.mp3",
        next: "after_seoyeon_cafe"
    },
    "after_seoyeon_worry": {
        name: "Seoyeon",
        text: "(She blushes and shyly smiles.) \"Hehe, you're so sweet. Wait just a little, I'll hurry and finish!\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        next: "after_seoyeon_cafe"
    },
    "after_seoyeon_cafe": {
        name: "Me",
        text: "(I helped Seoyeon with her work. After a while, she finished organizing all the documents.)",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        next: "after_seoyeon_cafe_2"
    },
    "after_seoyeon_cafe_2": {
        name: "Seoyeon",
        text: "\"Phew, it's finally over! Thanks to you, I finished way earlier. Actually, {name}... there's a café I go to often...\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        next: "after_seoyeon_cafe_3"
    },
    "after_seoyeon_cafe_3": {
        name: "Seoyeon",
        text: "\"Would you like to stop by together? I'll buy you coffee as a thank you!\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        next: "after_seoyeon_promise"
    },
    "after_seoyeon_promise": {
        name: "Me",
        text: "(We went to the café Seoyeon recommended and spent a sweet time together.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        setFlag: "dated_seoyeon_day1",
        next: "after_seoyeon_contact_ask"
    },
    "after_seoyeon_contact_ask": {
        name: "Seoyeon",
        text: "(Seoyeon looks at me hesitantly, then takes out her phone.)",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        branches: [
            { next: "after_seoyeon_contact_already", condition: "has_number_seyoun" },
            { next: "after_seoyeon_contact_choice" }
        ]
    },
    "after_seoyeon_contact_choice": {
        name: "Seoyeon",
        text: "\"Um, {name}... We haven't exchanged numbers yet, right? If it's okay, could we exchange?\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 10, next: "after_seoyeon_contact_ask_high" },
            { minAffinity: -5, next: "after_seoyeon_contact_ask_normal" },
            { minAffinity: -100, next: "after_seoyeon_contact_ask_low" }
        ],
        next: "after_seoyeon_contact_ask_normal"
    },
    "after_seoyeon_contact_ask_high": {
        name: "Seoyeon",
        text: "(She hands over her phone with a blushing face.) \"I've been wanting to ask all day... Want to exchange numbers? I'd like to hear from you...\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        choices: [
            { text: "Of course! I've wanted your number too, Seoyeon.", next: "after_seoyeon_contact_success", setFlags: ["has_number_seyoun", "has_any_contact"], stats: { Seoyeon: { affinity: 10 } } },
            { text: "Sorry, I think it's a bit too early.", next: "after_seoyeon_contact_fail", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "after_seoyeon_contact_ask_normal": {
        name: "Seoyeon",
        text: "\"Um... Would it be okay to exchange numbers? There might be things to discuss about school...\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        choices: [
            { text: "Of course! I've wanted your number too, Seoyeon.", next: "after_seoyeon_contact_success", setFlags: ["has_number_seyoun", "has_any_contact"], stats: { Seoyeon: { affinity: 5 } } },
            { text: "Sorry, I think it's a bit too early.", next: "after_seoyeon_contact_fail", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "after_seoyeon_contact_ask_low": {
        name: "Seoyeon",
        text: "(She looks at me cautiously.) \"...If you don't mind, could we exchange numbers? As the student council president, I might need to contact you.\"",
        character: "assets/images/characters/seyoun_pout.png",
        sunset: true,
        choices: [
            { text: "Sure.", next: "after_seoyeon_contact_success", setFlags: ["has_number_seyoun", "has_any_contact"], stats: { Seoyeon: { affinity: 2 } } },
            { text: "Sorry, I think it's a bit too early.", next: "after_seoyeon_contact_fail", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "after_seoyeon_contact_already": {
        name: "Seoyeon",
        text: "\"Oh wait, we exchanged numbers earlier at lunch! Hehe, I forgot. Then... I'll message you tonight. You have to reply, okay?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        next: "after_home"
    },
    "after_seoyeon_contact_success": {
        name: "Seoyeon",
        text: "(She enters my number delightedly.) \"Thank you! Then... I'll message you later. You have to reply, okay? See you tomorrow, {name}!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        next: "after_home"
    },
    "after_seoyeon_contact_fail": {
        name: "Seoyeon",
        text: "(Her face falls for a moment, then she forces a smile.) \"Oh.. okay, sorry! Was I too hasty? We can get closer slowly, right?\"",
        character: "assets/images/characters/seyoun_pout.png",
        sunset: true,
        next: "after_home"
    },
    "after_yuna_new": {
        name: "Me",
        text: "(I wander to the library annex and find a mysterious girl reading a book. She seems to shimmer in the sunset light.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "after_yuna_new_intro"
    },
    "after_yuna_new_intro": {
        name: "???",
        text: "(She looks up from her book and stares at me. In a low voice, she speaks.) \"...Are you lost? Students don't usually come here.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        setFlag: "met_yuna",
        next: "after_yuna_new_name_ask"
    },
    "after_yuna_new_name_ask": {
        name: "???",
        text: "(Her deep purple eyes quietly observe me.) \"I'm 'Yuna'. What's your name?\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "after_yuna_new_name_share"
    },
    "after_yuna_new_name_share": {
        name: "Me",
        text: "\"I'm {name}. I just transferred today.\"",
        setFlag: "knows_name_yuna",
        next: "after_yuna_new_3"
    },
    "after_yuna_new_3": {
        name: "Yuna",
        text: "\"{name}... Hehe, that's a nice name. From you... I feel a strangely familiar aura.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        stats: { Yuna: { affinity: 5 } },
        next: "after_yuna_2"
    },
    "after_yuna": {
        name: "Me",
        text: "(I find Yuna in the library annex. The setting sun casts a long shadow over her book.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "after_yuna_2"
    },
    "after_yuna_2": {
        name: "Yuna",
        text: "(She looks up and a subtle smile appears.) \"{name}... You came to find me again? I didn't expect that.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "after_yuna_3"
    },
    "after_yuna_3": {
        name: "Me",
        text: "(I don't know what to say. What should I do?)",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        affinityChar: "Yuna",
        affinityBranches: [
            { minAffinity: 10, next: "after_yuna_high" },
            { minAffinity: -5, next: "after_yuna_standard" },
            { minAffinity: -100, next: "after_yuna_low" }
        ],
        next: "after_yuna_standard"
    },
    "after_yuna_high": {
        name: "Yuna",
        text: "(She closes her book and stares at me intently.) \"...You came to see me? Interesting. Most people can't even find this place.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        choices: [
            { text: "I want to read quietly next to you.", next: "after_yuna_know", stats: { Yuna: { affinity: 10 } } },
            { text: "I'm curious about this school's truth.", next: "after_yuna_secret_deep", stats: { Yuna: { affinity: 8 } } },
            { text: "Actually, I just dropped by.", next: "after_home", stats: { Yuna: { affinity: -10 } } }
        ]
    },
    "after_yuna_standard": {
        name: "Yuna",
        text: "\"...Why did you come here? This is a restricted area.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        choices: [
            { text: "I felt like I could find you here.", next: "after_yuna_know", stats: { Yuna: { affinity: 5 } } },
            { text: "The cafeteria food today was delicious.", next: "after_yuna_boring", stats: { Yuna: { affinity: -10 } } },
            { text: "You've been weird since this morning.", next: "after_yuna_rude", stats: { Yuna: { affinity: -15 } } }
        ]
    },
    "after_yuna_low": {
        name: "Yuna",
        text: "(She glances at me with cold eyes.) \"...You again? What do you want?\"",
        character: "assets/images/characters/yuna_bored.png",
        sunset: true,
        choices: [
            { text: "I felt like I could find you here.", next: "after_yuna_know", stats: { Yuna: { affinity: 5 } } },
            { text: "Nothing special.", next: "after_home", stats: { Yuna: { affinity: -5 } } }
        ]
    },
    "after_yuna_know": {
        name: "Yuna",
        text: "(Yuna stares at me quietly for a moment, then a faint smile appears.) \"...Being with you makes me feel calm. Fine, sit down for a while.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        bgm: "love1.mp3",
        next: "after_yuna_rooftop"
    },
    "after_yuna_rooftop": {
        name: "Me",
        text: "(As I sat next to Yuna, a comfortable silence filled the space. The golden sunset cast long shadows over us.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "after_yuna_rooftop_2"
    },
    "after_yuna_rooftop_2": {
        name: "Yuna",
        text: "(She puts down her book and gazes at the sunset.) \"...The boundary between day and night. The moment everything is dyed in ambiguous colors.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "after_yuna_rooftop_3"
    },
    "after_yuna_rooftop_3": {
        name: "Yuna",
        text: "(She turns to look at me.) \"{name}, you're different from others. I felt it at first sight... Will you stay with me?\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        setFlag: "dated_yuna_day1",
        next: "yuna_contact_exchange"
    },
    "after_yuna_secret": {
        name: "Yuna",
        text: "(She closes her book and stares at me with those deep purple eyes.)",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "after_yuna_secret_2"
    },
    "after_yuna_secret_2": {
        name: "Yuna",
        text: "\"Shh... Walls have ears. Once you know the truth, you can never return to an ordinary life. If you're okay with that... take my hand.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "after_yuna_know"
    },
    "after_yuna_secret_deep": {
        name: "Yuna",
        text: "(Yuna closes her book and stares at me. Her eyes seem to glow eerily purple.) \"...Truth? Are you ready to handle it? Alright, if your eyes are sincere too... follow me. Promise not to tell anyone.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 10 } },
        next: "after_yuna_rooftop"
    },
    "after_yuna_secret_fail": {
        name: "Yuna",
        text: "(Yuna gives a cold smile.) \"Truth... You still seem too light to bear its weight. Being curious is fine, but don't dig too deep. You might get hurt.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: -20 } },
        next: "after_home"
    },
    "after_yuna_boring": {
        name: "Yuna",
        text: "(Yuna sighs as if I'm pathetic and turns her eyes back to her book.)",
        character: "assets/images/characters/yuna_bored.png",
        stats: { Yuna: { affinity: -10 } },
        next: "after_yuna_boring_2"
    },
    "after_yuna_boring_2": {
        name: "Yuna",
        text: "\"Cafeteria food...? Talk about such mundane things with others. I'm busy, so don't bother me and leave.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "after_home"
    },
    "after_yuna_rude": {
        name: "Yuna",
        text: "(She closes her book and stares at me coldly. The air seems to freeze instantly.)",
        character: "assets/images/characters/yuna_normal.png",
        stats: { Yuna: { affinity: -15 } },
        next: "after_yuna_rude_2"
    },
    "after_yuna_rude_2": {
        name: "Yuna",
        text: "\"Since this morning...? You still know nothing. This strange aura surrounding the school... can't you feel it? Ignorance can sometimes be a sin. Disappear from my sight.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "after_home"
    },
    "yuna_contact_exchange": {
        name: "Yuna",
        text: "(Yuna hesitates, then slowly takes out her phone. She seems a bit awkward.)",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        branches: [
            { next: "yuna_contact_exchange_already", condition: "has_number_yuna" },
            { next: "yuna_contact_exchange_new" }
        ]
    },
    "yuna_contact_exchange_already": {
        name: "Yuna",
        text: "\"...Oh, we already exchanged numbers at lunch. Then I'll message you tonight. Don't worry... I'll always be watching over you.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "after_home"
    },
    "yuna_contact_exchange_new": {
        name: "Yuna",
        text: "\"...{name}. Can I have your number? If you don't want to... I won't force you.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        choices: [
            { text: "Of course. I want to talk more with you too, Yuna.", next: "yuna_contact_exchange_success", setFlags: ["has_number_yuna", "has_any_contact"], stats: { Yuna: { affinity: 10 } } },
            { text: "You want to call me late at night?", next: "yuna_contact_exchange_tease", stats: { Yuna: { affinity: 3 } } },
            { text: "Sorry, I want to think about it a bit more.", next: "yuna_contact_exchange_fail", stats: { Yuna: { affinity: -15 } } }
        ]
    },
    "yuna_contact_exchange_tease": {
        name: "Yuna",
        text: "(Yuna blinks, then a faint smile appears.) \"...Late night calls? If you want that... it's not impossible.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        setFlags: ["has_number_yuna", "has_any_contact"],
        stats: { Yuna: { affinity: 5 } },
        next: "after_home"
    },
    "yuna_contact_exchange_success": {
        name: "Yuna",
        text: "(She saves the number with a small smile.) \"...Thank you. Then, I'll contact you. May your dreams be peaceful, {name}.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "after_home"
    },
    "yuna_contact_exchange_fail": {
        name: "Yuna",
        text: "(She looks down with a cold expression.) \"...I see. Then I won't ask again. Goodbye.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        stats: { Yuna: { affinity: -5 } },
        next: "after_home"
    },
    "after_dain_new": {
        name: "Me",
        text: "(Heading towards the gym, I see volleyball players practicing in the court bathed in the sunset. Among them, one girl stands out.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        next: "after_dain_new_intro"
    },
    "after_dain_new_intro": {
        name: "???",
        text: "\"Hi! I'm Dain from the volleyball club. You're the transfer student, right?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        setFlag: "met_dain",
        next: "after_dain_new_name_ask"
    },
    "after_dain_new_name_ask": {
        name: "Dain",
        text: "\"By the way, what's your name? Feels like I'm the only one rushing to ask!\"",
        character: "assets/images/characters/dain_sweat.png",
        next: "after_dain_new_name_share"
    },
    "after_dain_new_name_share": {
        name: "Me",
        text: "\"I'm {name}, a second-year in class 3. Nice to meet you.\"",
        setFlag: "knows_name_dain",
        next: "after_dain_2"
    },
    "after_dain": {
        name: "Dain",
        text: "(Arriving at the gym, Dain is jumping high and slamming powerful spikes. Her healthy energy seems to brighten everything around her.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        next: "after_dain_2"
    },
    "after_dain_2": {
        name: "Dain",
        text: "(During a brief break from practice, Dain spots me and runs over while wiping her sweat with a towel.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        next: "dain_free_talk"
    },
    "dain_free_talk": {
        type: "free_talk",
        name: "Dain",
        text: "\"Wow, {name}! Even nicer to see you up close, right? Got any questions for me? About sports, school life, anything!\"",
        context: "After school at sunset in the gym, having a fun conversation with Dain who just finished practice. Keep the conversation going until it naturally concludes. When the conversation ends, Dain will finish her last practice set and suggest going to eat something delicious together. Only at the final turn, naturally mention needing to finish practice or being hungry to lead into the next scene.",
        personality: "A straight-forward volleyball club ace with an easy-going personality. Loves sports and is friendly and energetic towards the protagonist.",
        character: "assets/images/characters/dain_normal.png",
        affinityChar: "Dain",
        affinityBranches: [
            { minAffinity: 20, next: "after_dain_3_high" },
            { minAffinity: -10, next: "after_dain_3" },
            { minAffinity: -100, next: "after_dain_3_low" }
        ],
        next: "after_dain_3"
    },
    "after_dain_3_high": {
        name: "Me",
        text: "(Time flew by talking with Dain. Her bright energy lifted my spirits too. Dain suggested we go eat something delicious after her last practice set.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        choices: [
            { text: "Sure, I'll cheer you on! Go for it!", next: "after_dain_cheer_high", stats: { Dain: { affinity: 5 } } },
            { text: "I'll help with practice. Toss me the ball!", next: "after_dain_help_high", stats: { Dain: { affinity: 15 } } },
            { text: "I'm kinda tired today, can we just go home?", next: "after_dain_tired_high", stats: { Dain: { affinity: -20 } } }
        ]
    },
    "after_dain_3_low": {
        name: "Me",
        text: "(Dain doesn't look happy. Seems like I said something wrong to her while she was sensitive from practice. She curtly said she'd just finish her last set and leave.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_angry.png",
        sunset: true,
        choices: [
            { text: "Sure, I'll cheer you on! Go for it!", next: "after_dain_cheer_low", stats: { Dain: { affinity: 5 } } },
            { text: "I'll help with practice. Toss me the ball!", next: "after_dain_help_low", stats: { Dain: { affinity: 5 } } },
            { text: "I'm kinda tired today, can we just go home?", next: "after_dain_tired_low", stats: { Dain: { affinity: -20 } } }
        ]
    },
    "after_dain_3": {
        name: "Me",
        text: "(Had a nice chat with Dain. She asked me to wait while she finishes her last practice set. We agreed to go eat something delicious after.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        choices: [
            { text: "Sure, I'll cheer you on! Go for it!", next: "after_dain_cheer_normal", stats: { Dain: { affinity: 5 } } },
            { text: "I'll help with practice. Toss me the ball!", next: "after_dain_help_normal", stats: { Dain: { affinity: 15 } } },
            { text: "I'm kinda tired today, can we just go home?", next: "after_dain_tired_normal", stats: { Dain: { affinity: -20 } } }
        ]
    },
    "after_dain_tired_high": {
        name: "Dain",
        text: "(Dain can't hide her disappointment and briefly grabs my hand before letting go.)",
        character: "assets/images/characters/dain_shy.png",
        next: "after_dain_tired_high_2"
    },
    "after_dain_tired_high_2": {
        name: "Dain",
        text: "\"{name}, you're really leaving? I wanted to spend more time together... Oh no! You must be tired from your first day. Sorry for keeping you! Go rest. Promise we'll eat together tomorrow?\"",
        character: "assets/images/characters/dain_shy.png",
        next: "after_home"
    },
    "after_dain_tired_low": {
        name: "Dain",
        text: "(She glances at me coldly and picks up another ball.)",
        character: "assets/images/characters/dain_angry.png",
        next: "after_dain_tired_low_2"
    },
    "after_dain_tired_low_2": {
        name: "Dain",
        text: "\"Fine, do what you want. Sorry for keeping someone busy. Go home or whatever.\"",
        character: "assets/images/characters/dain_angry.png",
        next: "after_home"
    },
    "after_dain_tired_normal": {
        name: "Dain",
        text: "(Dain looks a bit disappointed but nods.)",
        character: "assets/images/characters/dain_sad.png",
        next: "after_dain_tired_normal_2"
    },
    "after_dain_tired_normal_2": {
        name: "Dain",
        text: "\"Oh... right. You must be tired from your first day. Sorry, I got too excited. Okay, go home today. See you tomorrow!\"",
        character: "assets/images/characters/dain_sad.png",
        next: "after_home"
    },
    "after_dain_help_high": {
        name: "Dain",
        text: "(Her eyes sparkle as she runs towards me, clearly overjoyed.)",
        character: "assets/images/characters/dain_laugh.png",
        next: "after_dain_help_high_2"
    },
    "after_dain_help_high_2": {
        name: "Dain",
        text: "\"Really? That's {name} for you! Helping me out feels so reassuring! Here, toss it up nice and high!\"",
        character: "assets/images/characters/dain_active.png",
        next: "after_dain_normal"
    },
    "after_dain_help_low": {
        name: "Dain",
        text: "(She looks at me suspiciously.)",
        character: "assets/images/characters/dain_angry.png",
        next: "after_dain_help_low_2"
    },
    "after_dain_help_low_2": {
        name: "Dain",
        text: "\"...Do you even know how? Just don't get in my way. Toss it however.\"",
        character: "assets/images/characters/dain_angry.png",
        next: "after_dain_normal"
    },
    "after_dain_help_normal": {
        name: "Dain",
        text: "(Her eyes light up as she hands me a ball.)",
        character: "assets/images/characters/dain_laugh.png",
        next: "after_dain_help_normal_2"
    },
    "after_dain_help_normal_2": {
        name: "Dain",
        text: "\"Oh! You'll help? Great! Toss it high towards the net! Here I go!\"",
        character: "assets/images/characters/dain_active.png",
        next: "after_dain_normal"
    },
    "after_dain_cheer_high": {
        name: "Dain",
        text: "(Dain blushes and beams with a wide smile.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "after_dain_cheer_high_2"
    },
    "after_dain_cheer_high_2": {
        name: "Dain",
        text: "\"With {name} cheering... I feel like I can do a hundred times better! Thanks. I'll show you my cool side so don't look away, okay?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_cheer_low": {
        name: "Dain",
        text: "(She frowns and responds curtly.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_angry.png",
        sunset: true,
        next: "after_dain_cheer_low_2"
    },
    "after_dain_cheer_low_2": {
        name: "Dain",
        text: "\"Don't need it. Having you watch is annoying, so stay back over there. I'm already good without cheering.\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_angry.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_cheer_normal": {
        name: "Dain",
        text: "(Dain scrunches her nose shyly and smiles.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "after_dain_cheer_normal_2"
    },
    "after_dain_cheer_normal_2": {
        name: "Dain",
        text: "\"W-what... Complimenting me like that so suddenly is embarrassing! It's not like I'm trying harder because you're watching. But still... having you watch does make me feel more energized somehow...\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_normal": {
        name: "Dain",
        text: "(Dain playfully taps my shoulder.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "after_dain_normal_2"
    },
    "after_dain_normal_2": {
        name: "Dain",
        text: "\"Hehe~ Not quite there yet. Alright, while we're at it, can you wait until our practice ends? Let's go get tteokbokki together!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_end": {
        name: "Me",
        text: "(I sat in the gym stands watching Dain until her practice ended.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        next: "after_dain_end_2"
    },
    "after_dain_end_2": {
        name: "Dain",
        text: "(After practice, Dain runs over to me, breathing heavily.) \"Phew... phew... Sorry for making you wait! Come on, let's go get that tteokbokki!\"",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        setFlag: "dated_dain_day1",
        next: "after_dain_tteokbokki"
    },
    "after_dain_tteokbokki": {
        name: "Dain",
        text: "(Taking a big bite of steaming tteokbokki, Dain smiles happily.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "after_dain_tteokbokki_2"
    },
    "after_dain_tteokbokki_2": {
        name: "Dain",
        text: "\"Ah, tteokbokki after practice is the best! Thanks for coming with me today. It tastes a hundred times better with you!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "after_dain_tteokbokki_3"
    },
    "after_dain_tteokbokki_3": {
        name: "Dain",
        text: "\"Let's come here often together tomorrow too.. no, from now on! Promise?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        branches: [
            { next: "after_home", condition: "has_number_dain" },
            { next: "dain_contact_exchange" }
        ]
    },
    "dain_contact_exchange": {
        name: "Dain",
        text: "(Dain wipes the sauce off and playfully waves her smartphone.) \"Hey {name}! If we're gonna eat out together from now on, we need each other's numbers! Give me yours!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        choices: [
            { text: "Sure! It'd be fun to explore restaurants with you, Dain.", next: "dain_contact_success", setFlags: ["has_number_dain", "has_any_contact"] },
            {
                text: "While we're exchanging numbers.. can I call you right now?",
                next: "dain_contact_call_fail",
                affinityChar: "Dain",
                affinityBranches: [
                    { minAffinity: 35, next: "dain_contact_call_success" }
                ],
                setFlags: ["has_number_dain", "has_any_contact"]
            },
            { text: "Hmm.. I'll let you know later when I get a chance.", next: "dain_contact_fail", stats: { Dain: { affinity: -20 } } }
        ]
    },
    "dain_contact_call_success": {
        name: "Dain",
        text: "(Dain blushes and laughs nervously.) \"W-what! Out of nowhere... Wanting to hear my voice... That's too heart-fluttering! I have early practice tomorrow so don't talk too long!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        stats: { Dain: { affinity: 20 } },
        next: "after_home"
    },
    "dain_contact_call_fail": {
        name: "Dain",
        text: "(Dain bursts out laughing.) \"Hey, you're hilarious. Calling right after getting the number, aren't you rushing? Let's start with texting and get closer!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        stats: { Dain: { affinity: -5 } },
        next: "after_home"
    },
    "dain_contact_success": {
        name: "Dain",
        text: "(Dain saves the number with a refreshing smile.) \"Contact sent! I'll text you as soon as I find a good place to eat!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        stats: { Dain: { affinity: 15 } },
        next: "after_home"
    },
    "dain_contact_fail": {
        name: "Dain",
        text: "(Dain pouts for a moment but then smiles it off.) \"What~ Playing hard to get? Alright, alright. I'll try harder to get your number!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        stats: { Dain: { affinity: -30 } },
        next: "after_home"
    },
    "after_nurse": {
        name: "Nurse",
        text: "(Opening the nurse's office door, the teacher is drinking tea by the window and smiles when she sees me.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "after_nurse_2"
    },
    "after_nurse_new": {
        name: "Me",
        text: "(I unconsciously felt drowsy and walked towards the nurse's office. Opening the door, a gentle herbal scent greets me along with a mature-looking teacher.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "after_nurse_new_2"
    },
    "after_nurse_new_2": {
        name: "Nurse",
        text: "\"My, a face I haven't seen before? Are you the new transfer student? I'm the school nurse. Are you here because something hurts?\"",
        character: "assets/images/characters/nurse_normal.png",
        setFlag: "met_nurse",
        next: "after_nurse_new_name_ask"
    },
    "after_nurse_new_name_ask": {
        name: "Nurse",
        text: "\"By the way, what's your name? Will you tell just me?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "after_nurse_new_name_share"
    },
    "after_nurse_new_name_share": {
        name: "Me",
        text: "\"My name is {name}.\"",
        setFlag: "knows_name_nurse",
        next: "nurse_after_day1_contact"
    },
    "after_nurse_2": {
        name: "Nurse",
        text: "\"{name}! Came to see me before going home? What a sweet student.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "nurse_after_day1_contact"
    },
    "nurse_after_day1_contact": {
        name: "Nurse",
        text: "\"Here, have a seat. Let me pour you some warm tea. Want to chat with me a bit more?\"",
        character: "assets/images/characters/nurse_normal.png",
        branches: [
            { next: "nurse_after_day1_contact_already", condition: "has_number_nurse" },
            { next: "nurse_after_day1_contact_choice" }
        ]
    },
    "nurse_after_day1_contact_already": {
        name: "Me",
        text: "(The warm scent of tea tickles my nose. What should I do?)",
        character: "assets/images/characters/nurse_normal.png",
        choices: [
            { text: "Yes, I'll rest a bit before going.", next: "nurse_after_day1_contact_already_stay", stats: { Nurse: { affinity: 5 } } },
            { text: "I'm a bit tired today...", next: "nurse_after_day1_contact_already_leave" }
        ]
    },
    "nurse_after_day1_contact_already_stay": {
        name: "Nurse",
        text: "\"Hehe, good student. It must have been tiring being your first day. Rest here with me for a bit.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "nurse_after_day1_contact_already_stay_2"
    },
    "nurse_after_day1_contact_already_stay_2": {
        name: "Nurse",
        text: "\"...Alright, time to head out soon. Contact me anytime if you need anything, okay?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "after_home"
    },
    "nurse_after_day1_contact_already_leave": {
        name: "Nurse",
        text: "\"Okay, don't push yourself. Contact me anytime if you need anything, okay? Get home safely.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "after_home"
    },
    "nurse_after_day1_contact_choice": {
        name: "Me",
        text: "(The warm scent of tea tickles my nose. What should I do?)",
        character: "assets/images/characters/nurse_normal.png",
        choices: [
            { text: "Yes, I'll rest a bit before going.", next: "nurse_after_day1_contact_stay", stats: { Nurse: { affinity: 5 } } },
            { text: "I'm a bit tired today...", next: "nurse_after_day1_contact_2" }
        ]
    },
    "nurse_after_day1_contact_stay": {
        name: "Nurse",
        text: "\"Hehe, good student. It must have been tiring being your first day. Rest here with me for a bit.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "nurse_after_day1_contact_stay_2"
    },
    "nurse_after_day1_contact_stay_2": {
        name: "Nurse",
        text: "\"...Alright, time to head out soon. {name}, just in case, save my number? Contact me anytime if you're sick or have worries.\"",
        character: "assets/images/characters/nurse_normal.png",
        choices: [
            { text: "Yes, please tell me!", next: "nurse_after_day1_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            { text: "It's still a bit uncomfortable.", next: "nurse_after_day1_contact_fail", stats: { Nurse: { affinity: -15 } } }
        ]
    },
    "nurse_after_day1_contact_2": {
        name: "Nurse",
        text: "\"Leaving already? Too bad... {name}, just in case, save my number? Contact me anytime if you're sick or have worries.\"",
        character: "assets/images/characters/nurse_normal.png",
        choices: [
            { text: "Yes, please tell me!", next: "nurse_after_day1_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            { text: "It's still a bit uncomfortable.", next: "nurse_after_day1_contact_fail", stats: { Nurse: { affinity: -15 } } }
        ]
    },
    "nurse_after_day1_contact_success": {
        name: "Nurse",
        text: "\"Hehe, good student. Then I'll text you tonight? Take care, {name}.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 10 } },
        next: "after_home"
    },
    "nurse_after_day1_contact_fail": {
        name: "Nurse",
        text: "\"Oh my, playing hard to get? Alright. Tell me if you change your mind. Get home safely!\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "after_home"
    }
});
