if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "lunch_time": {
        name: "Me",
        text: "(Morning classes are over! Finally, the long-awaited lunch time. Kids are rushing to the cafeteria.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "lunch_time_2"
    },
    "lunch_time_2": {
        name: "Me",
        text: "(Lunch time... Kids are playing on the field outside. What should I do?)",
        choices: [
            { 
                text: "Approach Seoyeon and suggest eating lunch together.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 40, next: "lunch_seoyeon_high" },
                    { minAffinity: 0, next: "lunch_seoyeon_normal_branch" },
                    { minAffinity: -100, next: "lunch_seoyeon_low" }
                ],
                next: "lunch_seoyeon_normal_branch" 
            },
            { text: "Look around the school alone and find a quiet place to eat.", next: "lunch_alone" },
            { text: "Follow the sound of a volleyball from the gym.", next: "lunch_dain" },
            { text: "I don't feel well, so I go to the nurse's office.", next: "lunch_nurse" },
            { text: "Go to the school store to buy some bread.", next: "lunch_store" },
            { text: "Take a nap in the classroom since I'm tired.", next: "lunch_sleep" }
        ]
    },
    "lunch_seoyeon_high": {
        name: "Seoyeon",
        text: "(As soon as Seoyeon finds me, she runs towards me with a blush on her face. Her eyes are sparkling with joy.) \"{name}! Where were you? I've been looking for you for a long time. Let's go have lunch together. I'll take you to a very special place!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        setFlag: "metSeoyeon",
        next: "rooftop_1"
    },
    "lunch_seoyeon_low": {
        name: "Seoyeon",
        text: "(Seoyeon shows a slightly uncomfortable expression when she sees me. However, perhaps because of her responsibility as student council president, she forces a smile.) \"Ah, {name}... Good timing. The teacher told me to take care of the transfer student. If it's okay, would you like to have lunch with me on the rooftop? It'll be quiet and good to talk.\"",
        character: "assets/images/characters/seyoun_pout.png",
        setFlag: "metSeoyeon",
        next: "lunch_seoyeon_2_normal"
    },
    "lunch_seoyeon_normal_branch": {
        name: "Seoyeon",
        text: "(As I approach Seoyeon, she welcomes me with a bright smile.)",
        character: "assets/images/characters/seyoun_nomal.png",
        setFlag: "metSeoyeon",
        branches: [
            { next: "lunch_seoyeon_2_study", condition: "personality_study" },
            { next: "lunch_seoyeon_2_party", condition: "personality_active" },
            { next: "lunch_seoyeon_2_normal" }
        ]
    },
    "lunch_seoyeon_2_study": {
        name: "Seoyeon",
        text: "\"I was a bit worried because you looked a little cold during the introduction... but I was just looking for you! Want to eat together at our secret spot on the rooftop?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Yeah! I wanted to eat with you, Seoyeon.", next: "rooftop_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Um... I promised to eat with others. (Decline)", next: "lunch_alone", stats: { Seoyeon: { affinity: -25 } } },
            { text: "Rooftop? Do I have to go all the way there? It's a hassle.", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -40 } } }
        ]
    },
    "lunch_seoyeon_2_party": {
        name: "Seoyeon",
        text: "\"You were amazing during the introduction! It feels like you've already become a celebrity. Hehe, I was just looking for you. Want to eat together at our secret spot on the rooftop?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        choices: [
            { text: "Yeah! I wanted to eat with you, Seoyeon.", next: "rooftop_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Um... I promised to eat with others. (Decline)", next: "lunch_alone", stats: { Seoyeon: { affinity: -25 } } },
            { text: "Rooftop? Do I have to go all the way there? It's a hassle.", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -40 } } }
        ]
    },
    "lunch_seoyeon_2_normal": {
        name: "Seoyeon",
        text: "\"I was just looking for you! We have a secret spot on the rooftop, want to eat there together?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Yeah! I wanted to eat with you, Seoyeon.", next: "rooftop_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Um... I promised to eat with others. (Decline)", next: "lunch_alone", stats: { Seoyeon: { affinity: -25 } } },
            { text: "Rooftop? Do I have to go all the way there? It's a hassle.", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -40 } } }
        ]
    },
    "rooftop_1": {
        name: "Seoyeon",
        text: "(The rooftop with a cool breeze. Seoyeon takes out a lunch box she prepared with care.)",
        background: "assets/images/background/top_school.png",
        setFlag: "ate_lunch_seoyeon",
        next: "rooftop_1_2"
    },
    "rooftop_1_2": {
        name: "Seoyeon",
        text: "(She hands me chopsticks and smiles shyly. My heart flutters a bit.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_1_2_2"
    },
    "rooftop_1_2_2": {
        name: "Seoyeon",
        text: "\"Here, I woke up early this morning to make this. I hope it suits your taste...\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_1_3"
    },
    "rooftop_1_3": {
        name: "Seoyeon",
        text: "\"Especially these octopus-shaped sausages, they're my masterpiece! Want to try one?\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Wow, it looks delicious! You're a great cook, Seoyeon.", next: "rooftop_talk_food", stats: { Seoyeon: { affinity: 3 } } },
            { 
                text: "Say 'Ah'... (Gathering courage!)", 
                next: "rooftop_talk_ah_fail",
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 20, next: "rooftop_talk_ah" }
                ],
                stats: { Seoyeon: { affinity: 3 } }
            },
            { text: "I've never had such a heartfelt lunch box. Thank you.", next: "rooftop_talk_thanks", stats: { Seoyeon: { affinity: 5 } } },
            { text: "It doesn't look that good... I should've just gone to the snack bar.", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -50 } } }
        ]
    },
    "rooftop_talk_ah_fail": {
        name: "Seoyeon",
        text: "(Seoyeon's face hardens instantly. She puts down her chopsticks, looking flustered.) \"Um... that's a bit... {name}, we're not that close yet, are we? I think the joke went too far.\"",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -30 } },
        next: "rooftop_awkward"
    },
    "rooftop_awkward": {
        name: "Me",
        text: "(The atmosphere turned awkward in an instant. We ate our lunch boxes in silence for a while.)",
        next: "rooftop_2"
    },
    "rooftop_talk_rude": {
        name: "Seoyeon",
        text: "(Seoyeon's hand trembles slightly. She tries to force a smile, but her eyes get watery.)",
        character: "assets/images/characters/seyoun_sad.png",
        next: "rooftop_2"
    },
    "rooftop_talk_food": {
        name: "Seoyeon",
        text: "(She blushes happily.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_talk_food_2"
    },
    "rooftop_talk_food_2": {
        name: "Seoyeon",
        text: "\"Really? I'm glad! Actually, I was worried if {name} would like it, so I even lost sleep thinking about the menu yesterday. Eat a lot, there's still plenty left!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_2"
    },
    "rooftop_talk_ah": {
        name: "Seoyeon",
        text: "(Seoyeon's face turns red. She carefully brings the sausage to my mouth.)",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "rooftop_talk_ah_2"
    },
    "rooftop_talk_ah_2": {
        name: "Seoyeon",
        text: "\"Wh-wh-what?! You really... say such things so casually... Sigh, I really can't with you. Here, just this once! Say ah...\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "rooftop_2"
    },
    "rooftop_talk_thanks": {
        name: "Seoyeon",
        text: "(She smiles and wipes the sauce off the corner of my mouth.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_talk_thanks_2"
    },
    "rooftop_talk_thanks_2": {
        name: "Seoyeon",
        text: "\"Don't mention it... I'm the one who's thankful for eating with me. I think it tastes much better than eating alone. Will you eat with me like this often from now on?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_2"
    },
    "rooftop_2": {
        name: "Seoyeon",
        text: "(After finishing the meal, we sit side by side and look at the distant sky. Seoyeon carefully opens her mouth.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_2_2"
    },
    "rooftop_2_2": {
        name: "Seoyeon",
        text: "\"Um, {name}... Actually, since I first saw you, somehow... I felt like we've known each other for a long time. How about you?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_free_talk"
    },
    "rooftop_free_talk": {
        type: "free_talk",
        name: "Seoyeon",
        text: "\"Hehe, was I too serious all of a sudden? Let's talk more comfortably. Is there anything you're curious about?\"",
        context: "Lunch time, a situation where they are having a conversation in a relaxed and romantic atmosphere after eating lunch boxes alone on the school rooftop. After the conversation, Seoyeon will mention that she feels comfortable and good when she's with the protagonist, and ask why he thinks that is. At the end of the conversation, please naturally ask the question by mentioning this special feeling of comfort.",
        personality: "A state where she has become a bit more bold and honest than usual. She wants to know why she feels so comfortable with the protagonist.",
        character: "assets/images/characters/seyoun_shy.png",
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "rooftop_choices_high" },
            { minAffinity: 0, next: "rooftop_choices" },
            { minAffinity: -100, next: "rooftop_choices_low" }
        ],
        next: "rooftop_choices"
    },
    "rooftop_choices_high": {
        name: "Me",
        text: "(As I talked with Seoyeon, the atmosphere became strange. She is staring at me intently and smiling softly. She told me she feels comfortable and good when she's with me, and asked why I think that is.)",
        character: "assets/images/characters/seyoun_shy2.png",
        choices: [
            { text: "Me too. Somehow it feels like destiny?", next: "rooftop_destiny_high", affinityChar: "Seoyeon", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Maybe it's because Seoyeon treated me so kindly?", next: "rooftop_kind_high", stats: { Seoyeon: { affinity: 3 } } },
            { text: "Well, I'm not sure yet. But I feel comfortable with you.", next: "rooftop_comfortable_high", stats: { Seoyeon: { affinity: 4 } } }
        ]
    },
    "rooftop_choices_low": {
        name: "Me",
        text: "(Seoyeon's expression is dark. It seems the conversation didn't go well. She sighed as if a bit confused, then asked why she feels comfortable and good with me despite the awkwardness.)",
        character: "assets/images/characters/seyoun_pout.png",
        choices: [
            { text: "Me too. Somehow it feels like destiny?", next: "rooftop_destiny_low", affinityChar: "Seoyeon", stats: { Seoyeon: { affinity: -5 } } },
            { text: "Maybe it's because Seoyeon treated me so kindly?", next: "rooftop_kind_low", stats: { Seoyeon: { affinity: 3 } } },
            { text: "Well, I'm not sure yet. But I feel comfortable with you.", next: "rooftop_comfortable_low", stats: { Seoyeon: { affinity: 4 } } }
        ]
    },
    "rooftop_choices": {
        name: "Me",
        text: "(I finished the conversation with Seoyeon. She is looking at me with sparkling eyes, as if waiting for my answer. She told me she feels comfortable and good when she's with me, and asked why I think that is.)",
        choices: [
            { text: "Me too. Somehow it feels like destiny?", next: "rooftop_destiny", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Maybe it's because Seoyeon treated me so kindly?", next: "rooftop_kind", stats: { Seoyeon: { affinity: 3 } } },
            { text: "Well, I'm not sure yet. But I feel comfortable with you.", next: "rooftop_comfortable", stats: { Seoyeon: { affinity: 4 } } }
        ]
    },
    "rooftop_destiny_high": {
        name: "Seoyeon",
        text: "(She blushes deeply and squeezes my hand. Our fingertips touch warmly.)",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "rooftop_destiny_high_2"
    },
    "rooftop_destiny_high_2": {
        name: "Seoyeon",
        text: "\"Destiny... I felt the same way. Ever since I first saw you, I thought we might share a special bond. {name}, will you... stay by my side from now on?\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_destiny": {
        name: "Seoyeon",
        text: "(She shyly smiles and gently overlaps her hand on mine.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_destiny_2"
    },
    "rooftop_destiny_2": {
        name: "Seoyeon",
        text: "\"Destiny... Hehe, I really like that word. Let's make many more pleasant memories from now on. Is it a promise?\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_destiny_low": {
        name: "Seoyeon",
        text: "(She quickly pulls her hand away, looking flustered.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "rooftop_destiny_low_2"
    },
    "rooftop_destiny_low_2": {
        name: "Seoyeon",
        text: "\"Destiny? Isn't that a bit too fast? We barely know each other yet. Let's... take it slow.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_kind_high": {
        name: "Seoyeon",
        text: "(Seoyeon bites her lip shyly and smiles.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_kind_high_2"
    },
    "rooftop_kind_high_2": {
        name: "Seoyeon",
        text: "\"I'm happy to hear you say that. But you know, I'm not this kind to everyone. Maybe it's because it's you, {name}, that I'm especially concerned... Hehe.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_kind_low": {
        name: "Seoyeon",
        text: "(She looks slightly disappointed, her expression stiffening.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "rooftop_kind_low_2"
    },
    "rooftop_kind_low_2": {
        name: "Seoyeon",
        text: "\"...I see. I was just acting as the student council president. I'm sorry if I gave you the wrong impression.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_kind": {
        name: "Seoyeon",
        text: "(She pouts her lips as if slightly sulky.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "rooftop_kind_2"
    },
    "rooftop_kind_2": {
        name: "Seoyeon",
        text: "\"Hmph... That's such a standard answer. But well, it's not wrong, so I'll let it slide. I'll look forward to a more honest answer from now on?\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_comfortable_high": {
        name: "Seoyeon",
        text: "(She nods happily with a bright smile.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "rooftop_comfortable_high_2"
    },
    "rooftop_comfortable_high_2": {
        name: "Seoyeon",
        text: "\"I'm so glad you feel that way! I also feel like all my stress disappears when I'm with you. Let's spend more time together like this, {name}.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_comfortable_low": {
        name: "Seoyeon",
        text: "(She forces a smile, but her eyes look a bit lonely.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_comfortable_low_2"
    },
    "rooftop_comfortable_low_2": {
        name: "Seoyeon",
        text: "\"...Is that so. I'm glad if you feel at ease. I'll try to make sure you can continue to feel comfortable in school.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_comfortable": {
        name: "Seoyeon",
        text: "(She nods as if satisfied.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_comfortable_2"
    },
    "rooftop_comfortable_2": {
        name: "Seoyeon",
        text: "\"I'm glad you feel comfortable. I also feel like I can put down the burden of being the student council president for a while when I'm with you. Thank you, {name}.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "seyoun_contact_exchange"
    },
    "seyoun_contact_exchange": {
        type: "free_talk",
        name: "Seoyeon",
        text: "(Seoyeon hesitates for a moment while packing her bag, then holds out her smartphone.)",
        character: "assets/images/characters/seyoun_nomal.png",
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 15, next: "seyoun_contact_exchange_high" },
            { minAffinity: 0, next: "seyoun_contact_exchange_normal" },
            { minAffinity: -999, next: "seyoun_contact_exchange_low" }
        ],
        next: "seyoun_contact_exchange_normal"
    },
    "seyoun_contact_exchange_high": {
        name: "Seoyeon",
        text: "(Seoyeon shyly holds out her smartphone.) \"Um... if it's okay, could you give me your contact information? I want to ask you when deciding on the lunch box menu from now on...\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 3 } },
        choices: [
            { text: "Of course! I wanted to talk more with Seoyeon too.", next: "seyoun_contact_success", setFlags: ["has_number_seyoun", "has_any_contact"] },
            { text: "Sorry, I think it's a bit early yet.", next: "seyoun_contact_fail", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "seyoun_contact_exchange_normal": {
        name: "Seoyeon",
        text: "\"Um... would it be okay to exchange contact information? There might be things to contact you about for student council work...\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Of course! I wanted to talk more with Seoyeon too.", next: "seyoun_contact_success", setFlags: ["has_number_seyoun", "has_any_contact"] },
            { text: "Sorry, I think it's a bit early yet.", next: "seyoun_contact_fail", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "seyoun_contact_exchange_low": {
        name: "Seoyeon",
        text: "(Seoyeon speaks while watching my reaction.) \"...Um, there might be things to contact you about for student council work, could you give me your number?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Sure, okay.", next: "seyoun_contact_success_cold", setFlags: ["has_number_seyoun", "has_any_contact"] },
            { text: "Sorry, I think it's a bit early yet.", next: "seyoun_contact_fail", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "seyoun_contact_success_cold": {
        name: "Seoyeon",
        text: "(She saves the number.) \"Thank you. Then... I'll contact you when necessary.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        stats: { Seoyeon: { affinity: 2 } },
        next: "after_school_start"
    },
    "seyoun_contact_success": {
        name: "Seoyeon",
        text: "(She smiles brightly and saves my number. Her fingers move busily as if happy.) \"Thank you! Then... I'll send you a message later. You have to reply, okay?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 8 } },
        next: "after_school_start"
    },
    "seyoun_contact_fail": {
        name: "Seoyeon",
        text: "(She makes a slightly gloomy expression, but soon forces a smile and nods.) \"Oh... yeah, sorry! I guess I was too hasty. We can get close slowly, right?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_school_start"
    },
    "lunch_alone": {
        name: "Me",
        text: "(Walking down the quiet hallway, I arrived at the library annex. There, I ran into a girl reading a book leaning against the window.)",
        background: "assets/images/background/library_old.png",        character: null,        next: "alone_2"
    },
    "alone_2": {
        name: "???",
        text: "(She shifts her gaze from the book she was reading and speaks in a low voice, staring straight at me.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "alone_2_2"
    },
    "alone_2_2": {
        name: "???",
        text: "\"...Are you lost? Students don't usually come here. You managed to find your way here.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_intro"
    },
    "yuna_intro": {
        name: "???",
        text: "(Her deep and mysterious purple eyes quietly observe me, as if trying to peer into my very soul.)",
        next: "yuna_intro_name_ask"
    },
    "yuna_intro_name_ask": {
        name: "???",
        text: "\"I'm Yuna. And you... what's your name?\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_intro_name_share"
    },
    "yuna_intro_name_share": {
        name: "Me",
        text: "\"I'm {name}. I just transferred today.\"",
        setFlag: "knowsName_Yuna",
        next: "yuna_intro_2"
    },
    "yuna_intro_2": {
        name: "Yuna",
        text: "\"{name}... Hehe, that's a nice name. This school... is very different from how it looks. From you... somehow I feel a familiar atmosphere.\"",
        setFlag: "metYuna",
        next: "yuna_free_talk"
    },
    "yuna_free_talk": {
        type: "free_talk",
        name: "Yuna",
        text: "\"...Do you have any questions for me? Or do you want to know about this school?\"",
        context: "Quiet library annex, a situation where he first met Yuna, who has a mysterious and cold atmosphere. After the conversation, Yuna will ask if you want to know more about her or the school's secrets. At the end of the conversation, please show an attitude of checking if the protagonist is ready to share deeper stories.",
        personality: "A mysterious, cold girl with many secrets. She feels a strange interest in the protagonist.",
        character: "assets/images/characters/yuna_nomal.png",
        affinityChar: "Yuna",
        affinityBranches: [
            { minAffinity: 15, next: "yuna_choices_high" },
            { minAffinity: 0, next: "yuna_choices" },
            { minAffinity: -100, next: "yuna_choices_low" }
        ],
        next: "yuna_choices"
    },
    "yuna_choices_high": {
        name: "Me",
        text: "(As I talked with Yuna, I felt like I was gradually falling into her mysterious atmosphere. She stared at me intently and smiled faintly, then asked if I wanted to know more about her.)",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "The school is different? What does that mean?", next: "yuna_secret_high", stats: { Yuna: { affinity: 4 } } },
            { text: "Familiar... Have you seen me before?", next: "yuna_scent_high", stats: { Yuna: { affinity: 4 } } },
            { text: "You look dangerous somehow. But I can't take my eyes off you.", next: "yuna_danger_high", stats: { Yuna: { affinity: 12 } } }
        ]
    },
    "yuna_choices_low": {
        name: "Me",
        text: "(Yuna's gaze became even colder. It seems my attitude offended her. She spat out words as if warning me in a cold voice.)",
        character: "assets/images/characters/yuna_nomal.png",
        choices: [
            { text: "The school is different? What does that mean?", next: "yuna_secret_low", stats: { Yuna: { affinity: 4 } } },
            { text: "Familiar... Have you seen me before?", next: "yuna_scent_low", stats: { Yuna: { affinity: 4 } } },
            { text: "You look dangerous somehow. But I can't take my eyes off you.", next: "yuna_danger_low", stats: { Yuna: { affinity: 12 } } }
        ]
    },
    "yuna_choices": {
        name: "Me",
        text: "(The conversation with Yuna has come to an end. Her purple eyes still maintain a gaze that seems to pierce through me.)",
        choices: [
            { text: "The school is different? What does that mean?", next: "yuna_secret_normal", stats: { Yuna: { affinity: 4 } } },
            { text: "Familiar... Have you seen me before?", next: "yuna_scent_normal", stats: { Yuna: { affinity: 4 } } },
            { text: "You look dangerous somehow. But I can't take my eyes off you.", next: "yuna_danger_normal", stats: { Yuna: { affinity: 12 } } }
        ]
    },
    "yuna_secret_high": {
        name: "Yuna",
        text: "(She lightly tickles the back of my hand and gives a mysterious smile.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_secret_high_2"
    },
    "yuna_secret_high_2": {
        name: "Yuna",
        text: "\"That gaze... I really like it. What kind of expression will you make when you find out the huge truth hidden under this school? You'll find out soon. I'll teach you myself.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "yuna_secret_low": {
        name: "Yuna",
        text: "(She pushes me away with a mocking expression.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_secret_low_2"
    },
    "yuna_secret_low_2": {
        name: "Yuna",
        text: "\"Secret? It's not a level someone like you can handle. Don't poke your head into useless places and just live a quiet school life.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_school_start"
    },
    "yuna_secret_normal": {
        name: "Yuna",
        text: "(She closes the book with a strange smile on her lips. She brings her lips close to my ear and whispers.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_secret_normal_2"
    },
    "yuna_secret_normal_2": {
        name: "Yuna",
        text: "\"Hehe, are you curious? But secrets might be better left unknown. The stories the school wants to hide... knowing them might get you hurt.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "yuna_secret": {
        name: "Yuna",
        text: "(She closes the book with a strange smile on her lips. She brings her lips close to my ear and whispers.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_secret_2"
    },
    "yuna_secret_2": {
        name: "Yuna",
        text: "\"Hehe, are you curious? But secrets might be better left unknown. The stories the school wants to hide... knowing them might get you hurt.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "yuna_scent_high": {
        name: "Yuna",
        text: "(She lightly leans her head against my chest and takes a deep breath.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_scent_high_2"
    },
    "yuna_scent_high_2": {
        name: "Yuna",
        text: "\"No, it's my first time. But that 'light' inside you... it's making me crazy. It's different from the dying children in this school. I'll watch over you forever so that light doesn't go out. Hehe...\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "yuna_scent_low": {
        name: "Yuna",
        text: "(She takes a step back and looks at me with an unpleasant expression.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_scent_low_2"
    },
    "yuna_scent_low_2": {
        name: "Yuna",
        text: "\"...Somehow, it's a very irritating scent. A light that's destined to go out soon anyway... It's better not to get too close.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_school_start"
    },
    "yuna_scent_normal": {
        name: "Yuna",
        text: "(She takes a step closer and stares at me intently. She mutters with a bitter expression.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_scent_normal_2"
    },
    "yuna_scent_normal_2": {
        name: "Yuna",
        text: "\"No, it's my first time seeing you. But that 'light' in your eyes... I really covet it. It's different from the dead children in this school. Can I keep watching so that light doesn't go out?\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_school_start"
    },
    "yuna_scent": {
        name: "Yuna",
        text: "(She takes a step closer and stares at me intently. She mutters with a bitter expression.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_scent_2"
    },
    "yuna_scent_2": {
        name: "Yuna",
        text: "\"No, it's my first time seeing you. But that 'light' in your eyes... I really covet it. It's different from the dead children in this school. Can I keep watching so that light doesn't go out?\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_school_start"
    },
    "yuna_danger_high": {
        name: "Yuna",
        text: "(She strokes my neck with her cold fingers and gives a provocative smile.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_danger_high_2"
    },
    "yuna_danger_high_2": {
        name: "Yuna",
        text: "\"Look dangerous? Correct. But you're already caught in my trap. Until your special light burns out... you can't take a single step out of here. You must stay only by my side.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "yuna_danger_low": {
        name: "Yuna",
        text: "(She cold-heartedly releases my hand she was holding.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_danger_low_2"
    },
    "yuna_danger_low_2": {
        name: "Yuna",
        text: "\"Dangerous? Hehe, as if a coward like you could handle my danger. Just keep trembling in fear.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_school_start"
    },
    "yuna_danger_normal": {
        name: "Yuna",
        text: "(She lightly brushes my cheek with her cold fingers. She stares intently into my eyes with a strange smile.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_danger_normal_2"
    },
    "yuna_danger_normal_2": {
        name: "Yuna",
        text: "\"I look dangerous... Hehe, correct. But I don't dislike people like you who approach even knowing it's dangerous. Until you lose that special light... I'll be by your side.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "yuna_danger": {
        name: "Yuna",
        text: "(She lightly brushes my cheek with her cold fingers. She stares intently into my eyes with a strange smile.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_danger_2"
    },
    "yuna_danger_2": {
        name: "Yuna",
        text: "\"I look dangerous... Hehe, correct. But I don't dislike people like you who approach even knowing it's dangerous. Until you lose that special light... I'll be by your side.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "lunch_store": {
        name: "Me",
        text: "(I won the last 'chocolate conch bread' at the store! As I take a bite of the bread with a winner's feeling, sweetness spreads throughout my mouth.)",
        background: "assets/images/background/store.png",
        next: "lunch_store_2"
    },
    "lunch_store_2": {
        name: "Me",
        text: "(As I turn around happily eating my bread, I bump into someone.)",
        next: "lunch_store_teacher"
    },
    "lunch_store_teacher": {
        name: "Homeroom Teacher",
        text: "\"Oh, sorry! ...Wait, isn't that {name}? Did you come to the store to buy bread too?\"",
        character: "assets/images/characters/teacher.png",
        next: "lunch_store_teacher_2"
    },
    "lunch_store_teacher_2": {
        name: "Homeroom Teacher",
        text: "\"Hehe, that bread is really delicious. I came to buy it too, but I guess I was a bit late. Enjoy!\"",
        character: "assets/images/characters/teacher.png",
        stats: { Teacher: { affinity: 3 } },
        next: "after_school_start"
    },
    "lunch_sleep": {
        name: "Me",
        text: "(I lie face down on the desk and try to sleep. The sunlight coming through the window warms my back.)",
        next: "lunch_sleep_2"
    },
    "lunch_sleep_2": {
        name: "Me",
        text: "(In my dream, I heard someone calling my name. A very nostalgic and sad voice...)",
        next: "lunch_sleep_3"
    },
    "lunch_sleep_3": {
        name: "Me",
        text: "(When I opened my eyes, someone was staring intently at my face.)",
        next: "lunch_sleep_seoyeon"
    },
    "lunch_sleep_seoyeon": {
        name: "Seoyeon",
        text: "\"Hey... {name}? Wake up. Class is starting.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "lunch_sleep_seoyeon_2"
    },
    "lunch_sleep_seoyeon_2": {
        name: "Seoyeon",
        text: "\"You were sleeping so soundly, I felt bad waking you... But you can't miss class! Hehe, see you after school!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "after_school_start"
    },
    "lunch_dain": {
        name: "Me",
        text: "(I hear the sound of a volleyball bouncing from the gym. I headed to the gym following the sound.)",
        background: "assets/images/background/playground.png",
        next: "lunch_dain_2"
    },
    "lunch_dain_2": {
        name: "???",
        text: "(As I open the gym door, a girl was practicing volleyball. She notices me and waves her hand with a bright smile.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        setFlag: "metDain",
        branches: [
            { next: "lunch_dain_3_active", condition: "personality_active" },
            { next: "lunch_dain_3_normal" }
        ]
    },
    "lunch_dain_3_active": {
        name: "???",
        text: "\"Hey, you there! I saw you during the introductions earlier. You were so high-energy! Don't just watch from there, come here and let's have a game! You look like you're good at sports?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "dain_name_share"
    },
    "lunch_dain_3_normal": {
        name: "???",
        text: "\"Hey, you there! Don't just watch from there, come here and let's have a game! You look like you're good at sports?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "dain_name_share"
    },
    "dain_name_share": {
        name: "Me",
        text: "\"Me? I'm {name}. I just transferred today.\"",
        setFlag: "knowsName_Dain",
        next: "dain_name_share_2"
    },
    "dain_name_share_2": {
        name: "Dain",
        text: "\"{name}? That's a cool name! I'm Dain from the volleyball club. No one in our school has a better jump than me, so be prepared!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "lunch_dain_gym_2"
    },
    "lunch_dain_gym_2": {
        name: "Dain",
        text: "\"Now, this is my territory! {name}, are you ready? I won't go easy on you, so be prepared!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        setFlag: "metDain",
        choices: [
            { text: "Alright, let's do this!", next: "lunch_dain_play", stats: { Dain: { affinity: 5 } } },
            { text: "I'm not great at volleyball... can you teach me?", next: "lunch_dain_teach", stats: { Dain: { affinity: 15 } } }
        ]
    },
    "lunch_dain_play": {
        name: "Dain",
        text: "\"Oh! That's the spirit! Here I come! (Dain sends a powerful serve. I barely manage to return it)\"",
        character: "assets/images/characters/dain_active.png",
        next: "lunch_dain_end"
    },
    "lunch_dain_teach": {
        name: "Dain",
        text: "\"Hehe, don't worry! I, Dain, will teach you from the basics. Now, let's start with your posture!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "lunch_dain_end"
    },
    "lunch_dain_end": {
        name: "Me",
        text: "(After that, I spent the rest of the lunch break working up a sweat with Dain. I didn't expect to spend my first day so energetically... Before I knew it, the afternoon classes were over.)",
        next: "after_school_start"
    },
    "lunch_nurse": {
        name: "Me",
        text: "(Maybe because it's my first day, my head is throbbing a bit due to tension. I headed to the quiet nurse's office.)",
        background: "assets/images/background/nurse_room.jpg",
        next: "lunch_nurse_2"
    },
    "lunch_nurse_2": {
        name: "???",
        text: "\"Oh, a new face? Was there such a cute student in our school?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse.png",
        branches: [
            { next: "nurse_intro", excludeCondition: "knowsName_Nurse" },
            { next: "nurse_name_share_pre", condition: "knowsName_Nurse" }
        ]
    },
    "nurse_intro": {
        name: "Nurse",
        text: "\"I'm the nurse here. Everyone just calls me 'Teacher'... but I could tell you my name specially?\"",
        character: "assets/images/characters/nurse.png",        setFlag: "metNurse",        next: "nurse_name_share_pre"
    },
    "nurse_name_share_pre": {
        name: "Me",
        text: "\"My name is '{name}'.\"",
        setFlag: "knowsName_Nurse",
        branches: [
            { next: "nurse_name_share_study", condition: "personality_study" },
            { next: "nurse_name_share_normal" }
        ]
    },
    "nurse_name_share_study": {
        name: "Nurse",
        text: "\"{name}... Hehe, your eyes are as clear as your name. I saw you during the introduction earlier, and you looked like a total model student. Is your head throbbing from studying too hard? Or... did you just want to see me?\"",
        character: "assets/images/characters/nurse.png",
        next: "nurse_free_talk_day1"
    },
    "nurse_name_share_normal": {
        name: "Nurse",
        text: "\"{name}... Hehe, your eyes are as clear as your name. Why did you come here? Are you sick? Or... did you just want to see me?\"",
        character: "assets/images/characters/nurse.png",
        next: "nurse_free_talk_day1"
    },
    "nurse_free_talk_day1": {
        type: "free_talk",
        name: "Nurse",
        text: "\"Don't be nervous. You can be comfortable here. Do you have anything you're curious about?\"",
        context: "A situation where you talk to the nurse you met for the first time in the nurse's office. The teacher shows a provocative attitude, feeling a strange interest in the protagonist. After the conversation, lunch time ends and the situation transitions to after school. At the end of the conversation, please see the protagonist off, saying it's time to go to class.",
        personality: "Mature and seductive 'older sister' style. Enjoys teasing the protagonist with provocative words, but actually cares for and tries to protect the protagonist more than anyone else.",
        character: "assets/images/characters/nurse.png",
        affinityChar: "Nurse",
        affinityBranches: [
            { minAffinity: 15, next: "nurse_day1_end_high" },
            { minAffinity: 0, next: "after_school_start" },
            { minAffinity: -100, next: "nurse_day1_end_low" }
        ],
        next: "after_school_start"
    },
    "nurse_day1_end_high": {
        name: "Me",
        text: "(As I keep talking with the teacher, I lost track of time! It's already time for the next class. The teacher also seems disappointed and told me to definitely stay longer next time. I should head back to the classroom now.)",
        character: "assets/images/characters/nurse.png",
        next: "after_school_start"
    },
    "nurse_day1_end_low": {
        name: "Me",
        text: "(The teacher's expression hardened. It seems my joke went too far. The teacher showed her displeasure and told me to get back to the classroom quickly.)",
        character: "assets/images/characters/nurse.png",
        next: "after_school_start"
    }
});


