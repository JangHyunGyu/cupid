if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "lunch_time": {
        name: "Me",
        text: "(Morning classes are over! Finally, it's the long-awaited lunch time. Students are rushing to the cafeteria.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "lunch_time_2"
    },
    "lunch_time_2": {
        name: "Me",
        text: "(Lunch time... Students are playing on the field outside the window. What should I do?)",
        choices: [
            { 
                text: "Go to Seoyeon and ask to have lunch together.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 40, next: "lunch_seoyeon_high" },
                    { minAffinity: 0, next: "lunch_seoyeon_normal_branch" },
                    { minAffinity: -100, next: "lunch_seoyeon_low" }
                ],
                next: "lunch_seoyeon_normal_branch" 
            },
            { text: "Find a quiet spot to explore the school alone.", next: "lunch_alone" },
            { text: "Follow the sound of volleyballs from the gym.", next: "lunch_dain" },
            { text: "Go to the nurse's office, feeling a bit unwell.", next: "lunch_nurse" },
            { text: "Go to the school store to buy some bread.", next: "lunch_store" },
            { text: "I'm tired, so I'll sleep in the classroom.", next: "lunch_sleep" }
        ]
    },
    "lunch_seoyeon_high": {
        name: "Seoyeon",
        text: "(As soon as she sees me, she runs over with a bright smile. Her eyes are full of joy.) \"{name}! I've been looking for you. Let's have lunch together. I'll take you to a very special place!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        setFlag: "met_seoyeon",
        next: "rooftop_1"
    },
    "lunch_seoyeon_low": {
        name: "Seoyeon",
        text: "(She gives me a slightly awkward smile when she sees me.) \"Oh, {name}... Good timing. The teacher asked me to look after you. If you don't mind, want to eat on the rooftop? It's quiet and nice.\"",
        character: "assets/images/characters/seyoun_pout.png",
        setFlag: "met_seoyeon",
        next: "lunch_seoyeon_2_normal"
    },
    "lunch_seoyeon_normal_branch": {
        name: "Seoyeon",
        text: "(When I approach Seoyeon, she nods with a sweet smile.)",
        character: "assets/images/characters/seyoun_normal.png",
        setFlag: "met_seoyeon",
        branches: [
            { next: "lunch_seoyeon_2_study", condition: "personality_study" },
            { next: "lunch_seoyeon_2_party", condition: "personality_active" },
            { next: "lunch_seoyeon_2_normal" }
        ]
    },
    "lunch_seoyeon_2_study": {
        name: "Seoyeon",
        text: "\"Transfer student, feels like we've gotten a bit closer? I was just about to look for you. Want to eat together on the rooftop?\"",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "Yeah! I wanted to eat with you, Seoyeon.", next: "rooftop_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Sorry, I want to be alone today.", next: "lunch_alone", stats: { Seoyeon: { affinity: -10 } } },
            { text: "The rooftop? Why go all the way up there?", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "lunch_seoyeon_2_party": {
        name: "Seoyeon",
        text: "\"Oh, transfer student! You seem to have adapted perfectly to our school already? How about lunch at our secret rooftop spot?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        choices: [
            { text: "Yeah! I wanted to eat with you, Seoyeon.", next: "rooftop_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Sorry, I want to be alone today.", next: "lunch_alone", stats: { Seoyeon: { affinity: -10 } } },
            { text: "The rooftop? Why go all the way up there?", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "lunch_seoyeon_2_normal": {
        name: "Seoyeon",
        text: "\"I was just about to look for you! Want to eat together at our secret rooftop spot?\"",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "Yeah! I wanted to eat with you, Seoyeon.", next: "rooftop_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Sorry, I want to be alone today.", next: "lunch_alone", stats: { Seoyeon: { affinity: -10 } } },
            { text: "The rooftop? Why go all the way up there?", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "rooftop_1": {
        name: "Seoyeon",
        text: "(The rooftop with a cool breeze. Seoyeon takes out a lunch box she carefully prepared.)",
        background: "assets/images/background/top_school.png",
        setFlag: "ate_lunch_seoyeon",
        next: "rooftop_1_2"
    },
    "rooftop_1_2": {
        name: "Seoyeon",
        text: "\"Ta-da! I made this lunch box myself. Actually... {name}, I was a bit worried if it would suit your taste.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_1_3"
    },
    "rooftop_1_3": {
        name: "Me",
        text: "(I take a bite of the lunch box. It has a warm taste full of care.)",
        next: "rooftop_1_4"
    },
    "rooftop_1_4": {
        name: "Me",
        text: "\"It's really delicious! You made this yourself? That's amazing...\"",
        next: "rooftop_1_5"
    },
    "rooftop_1_5": {
        name: "Seoyeon",
        text: "(Seoyeon smiles happily at my compliment.) \"Hehe, I'm so relieved! I'm glad you like it.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "rooftop_talk_main"
    },
    "rooftop_talk_main": {
        text: "(We chat while eating the lunch box together. My heart flutters as she smiles shyly.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_normal.png",
        next: "rooftop_1_2_2"
    },
    "rooftop_1_2_2": {
        name: "Seoyeon",
        text: "\"I'm glad you're enjoying it! Oh, and try this too. I put extra effort into this one.\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_normal.png",
        next: "rooftop_1_2_3"
    },
    "rooftop_1_2_3": {
        name: "Seoyeon",
        text: "\"Especially these octopus sausages are my masterpiece! Want to try one?\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "Wow, it looks so delicious! You're a cooking genius, Seoyeon.", next: "rooftop_talk_food", stats: { Seoyeon: { affinity: 3 } } },
            {
                text: "Say... 'ah~'",
                next: "rooftop_talk_ah_fail",
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 30, next: "rooftop_talk_ah" }
                ],
                stats: { Seoyeon: { affinity: 3 } }
            },
            { text: "This is the first lunch box with so much care I've seen. Thank you.", next: "rooftop_talk_thanks", stats: { Seoyeon: { affinity: 5 } } },
            { text: "It doesn't look that appetizing... Should've gone to the store.", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "rooftop_talk_ah_fail": {
        name: "Seoyeon",
        text: "(Seoyeon's expression freezes instantly. She puts down her chopsticks, flustered.) \"Um... that's a bit... {name}, we're not that close yet. The joke went too far.\"",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -15 } },
        next: "rooftop_awkward"
    },
    "rooftop_awkward": {
        name: "Me",
        text: "(The atmosphere became awkward instantly. We ate in silence for a while.)",
        next: "rooftop_2"
    },
    "rooftop_talk_rude": {
        name: "Seoyeon",
        text: "(Seoyeon's hand trembles slightly. She tries to force a smile but her eyes grow moist.)",
        character: "assets/images/characters/seyoun_sad.png",
        next: "rooftop_2"
    },
    "rooftop_talk_food": {
        name: "Seoyeon",
        text: "(Her cheeks flush with joy.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_talk_food_2"
    },
    "rooftop_talk_food_2": {
        name: "Seoyeon",
        text: "\"Really? I'm so relieved! Actually, this is the first time I've served my cooking to someone, so I was a bit nervous. Eat up, there's still plenty left!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_2"
    },
    "rooftop_talk_ah": {
        name: "Seoyeon",
        text: "(Seoyeon's face turns red. She carefully brings the sausage toward my mouth.)",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "rooftop_talk_ah_2"
    },
    "rooftop_talk_ah_2": {
        name: "Seoyeon",
        text: "\"Wh-what?! You really... saying such things so casually... Fine, you're hopeless. Just this once! Here... 'ah~'\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "rooftop_2"
    },
    "rooftop_talk_thanks": {
        name: "Seoyeon",
        text: "(She smiles and wipes the sauce from the corner of my mouth.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "rooftop_talk_thanks_2"
    },
    "rooftop_talk_thanks_2": {
        name: "Seoyeon",
        text: "\"Thank you?.. I should be the one thanking you for eating with me. It tastes so much better than eating alone. Will you eat with me like this again?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "rooftop_2"
    },
    "rooftop_2": {
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 0, next: "rooftop_2_normal" },
            { minAffinity: -100, next: "rooftop_2_low" }
        ],
        next: "rooftop_2_normal"
    },
    "rooftop_2_normal": {
        name: "Seoyeon",
        text: "(After finishing the meal, we sit side by side and gaze at the distant sky. Seoyeon speaks carefully.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "rooftop_2_2"
    },
    "rooftop_2_low": {
        name: "Seoyeon",
        text: "(After finishing the meal, Seoyeon speaks after a heavy silence. Her voice carries a hint of awkwardness.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "rooftop_2_2_low"
    },
    "rooftop_2_2_low": {
        name: "Seoyeon",
        text: "\"Hey, {name}... Actually, I wanted to get to know you better today, but conversation seems harder than I thought. Still, thanks for having lunch with me.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "rooftop_free_talk"
    },
    "rooftop_2_2": {
        name: "Seoyeon",
        text: "\"Hey, {name}... Actually, even though I just met you today, I feel like I can talk to you so easily, and that makes me happy. How about you?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "rooftop_free_talk"
    },
    "rooftop_free_talk": {
        type: "free_talk",
        name: "Seoyeon",
        text: "\"Hehe, was that too serious all of a sudden? Let's talk more comfortably. Aren't you curious about anything about me?\"",
        context: "A peaceful and romantic atmosphere after having lunch alone with Seoyeon on the school rooftop. Keep the conversation going until it naturally concludes. When the conversation ends, Seoyeon will mention that being with you feels comfortable and good, and ask why that might be. Only in the final turn, mention the special feeling or comfort between us and naturally ask the question.",
        personality: "A bit more bold and honest than usual. Wants to know how the protagonist thinks about their relationship and why they feel comfortable.",
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
        text: "(As I talked with Seoyeon, the atmosphere became subtle. She's staring into my eyes with a gentle smile. She asked me why being with me feels comfortable and good.)",
        character: "assets/images/characters/seyoun_shy2.png",
        choices: [
            { text: "Maybe it's something like fate?", next: "rooftop_destiny_high", affinityChar: "Seoyeon" },
            { text: "Maybe because you're so kind to me?", next: "rooftop_kind_high" },
            { text: "Well, I'm not sure yet.", next: "rooftop_comfortable_high" }
        ]
    },
    "rooftop_choices_low": {
        name: "Me",
        text: "(Seoyeon's expression is dark. The conversation didn't go well it seems. She sighed looking a bit confused, but still asked why being with me feels comfortable.)",
        character: "assets/images/characters/seyoun_pout.png",
        choices: [
            { text: "Maybe it's something like fate?", next: "rooftop_destiny_low", affinityChar: "Seoyeon" },
            { text: "Maybe because you're so kind to me?", next: "rooftop_kind_low" },
            { text: "Well, I'm not sure yet.", next: "rooftop_comfortable_low" }
        ]
    },
    "rooftop_choices": {
        name: "Me",
        text: "(I finished a pleasant conversation with Seoyeon. She's looking at me with sparkling eyes, waiting for my answer. She asked why being with me feels comfortable and good.)",
        choices: [
            { text: "Maybe it's something like fate?", next: "rooftop_destiny_normal" },
            { text: "Maybe because you're so kind to me?", next: "rooftop_kind_normal" },
            { text: "Well, I'm not sure yet.", next: "rooftop_comfortable_normal" }
        ]
    },
    "rooftop_destiny_high": {
        name: "Seoyeon",
        text: "(She blushes and holds my hand tightly. Our fingertips touch warmly.)",
        character: "assets/images/characters/seyoun_shy2.png",
        stats: { Seoyeon: { affinity: 7 } },
        next: "rooftop_destiny_high_2"
    },
    "rooftop_destiny_high_2": {
        name: "Seoyeon",
        text: "\"I think so too... Being like this with {name} feels like a dream. Can we continue to be together like this... like fate?\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_destiny_normal": {
        name: "Seoyeon",
        text: "(She smiles shyly and gently places her hand over mine.)",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "rooftop_destiny_normal_2"
    },
    "rooftop_destiny_normal_2": {
        name: "Seoyeon",
        text: "\"Fate... Hehe, that's a bit cheesy but I don't mind it. I feel that way sometimes when I'm with you too.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_destiny_low": {
        name: "Seoyeon",
        text: "(She quickly pulls her hand away, looking flustered.)",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -10 } },
        next: "rooftop_destiny_low_2"
    },
    "rooftop_destiny_low_2": {
        name: "Seoyeon",
        text: "\"Fate? Saying that on the first day of transfer... {name}, I think the joke went a bit too far. We're not in that kind of relationship yet.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_kind_high": {
        name: "Seoyeon",
        text: "(She tears up slightly and thanks me.)",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "rooftop_kind_high_2"
    },
    "rooftop_kind_high_2": {
        name: "Seoyeon",
        text: "\"You're thanking me for being kind... I should be the one thanking you. That you happily accepted my kindness gave me great strength too.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_kind_low": {
        name: "Seoyeon",
        text: "(She sighs and responds coldly.)",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -5 } },
        next: "rooftop_kind_low_2"
    },
    "rooftop_kind_low_2": {
        name: "Seoyeon",
        text: "\"You're comfortable because I was kind... Doesn't that mean you're just taking my kindness for granted? That's a bit disappointing.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_kind_normal": {
        name: "Seoyeon",
        text: "(She nods shyly with a smile.)",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "rooftop_kind_normal_2"
    },
    "rooftop_kind_normal_2": {
        name: "Seoyeon",
        text: "\"Hehe, that's such a model answer. But it's correct! I'm glad I could make you comfortable.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_comfortable_high": {
        name: "Seoyeon",
        text: "(She happily leans her head slightly on my shoulder.)",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 6 } },
        next: "rooftop_comfortable_high_2"
    },
    "rooftop_comfortable_high_2": {
        name: "Seoyeon",
        text: "\"Me too. Being with {name} really puts my mind at ease. Like we've known each other for a long time... Thank you for feeling the same way.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_comfortable_low": {
        name: "Seoyeon",
        text: "(She smiles bitterly and turns her head away.)",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: 2 } },
        next: "rooftop_comfortable_low_2"
    },
    "rooftop_comfortable_low_2": {
        name: "Seoyeon",
        text: "\"You're not sure... Does that mean you're still uncomfortable being with me? I guess I need to try harder.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_comfortable_normal": {
        name: "Seoyeon",
        text: "(She nods with satisfaction.)",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: 4 } },
        next: "rooftop_comfortable_normal_2"
    },
    "rooftop_comfortable_normal_2": {
        name: "Seoyeon",
        text: "\"I'm glad you feel comfortable. When I'm with you, I feel like I can set down the burden of being student council president for a while. Thank you, {name}.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_comfortable": {
        name: "Seoyeon",
        text: "(She nods with satisfaction.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "rooftop_comfortable_2"
    },
    "rooftop_comfortable_2": {
        name: "Seoyeon",
        text: "\"I'm glad you feel comfortable. When I'm with you, I feel like I can set down the burden of being student council president for a while. Thank you, {name}.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "seyoun_contact_exchange"
    },
    "seyoun_contact_exchange": {
        type: "free_talk",
        name: "Seoyeon",
        text: "(Seoyeon pauses while packing her bag, then hesitantly holds out her smartphone.)",
        character: "assets/images/characters/seyoun_normal.png",
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
        text: "(Seoyeon shyly holds out her smartphone.) \"Um... if it's okay, could you give me your number? I want to ask you about lunch menus...\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 3 } },
        choices: [
            { text: "Of course! I wanted to talk more with you too, Seoyeon.", next: "seyoun_contact_success", setFlags: ["has_number_seyoun", "has_any_contact"] },
            { text: "Sorry, I think it's a bit too early.", next: "seyoun_contact_fail", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "seyoun_contact_exchange_normal": {
        name: "Seoyeon",
        text: "\"Um... would it be okay to exchange contact info? There might be student council matters to discuss...\"",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "Of course! I wanted to talk more with you too, Seoyeon.", next: "seyoun_contact_success", setFlags: ["has_number_seyoun", "has_any_contact"] },
            { text: "Sorry, I think it's a bit too early.", next: "seyoun_contact_fail", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "seyoun_contact_exchange_low": {
        name: "Seoyeon",
        text: "(Seoyeon looks at me cautiously.) \"...Hey, there might be student council matters, so could you give me your number?\"",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "Sure, okay.", next: "seyoun_contact_success_cold", setFlags: ["has_number_seyoun", "has_any_contact"] },
            { text: "Sorry, I think it's a bit too early.", next: "seyoun_contact_fail", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "seyoun_contact_success_cold": {
        name: "Seoyeon",
        text: "(She saves the number.) \"Thanks. Then... I'll contact you when needed.\"",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: 2 } },
        next: "after_school_start"
    },
    "seyoun_contact_success": {
        name: "Seoyeon",
        text: "(She smiles brightly and saves the number. Her fingers move excitedly.) \"Thank you! Then... I'll message you later. You have to reply, okay?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 8 } },
        next: "after_school_start"
    },
    "seyoun_contact_fail": {
        name: "Seoyeon",
        text: "(She looks a bit dejected but then forces a smile and nods.) \"Oh.. okay, sorry! Was I too hasty? We can get closer slowly, right?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "after_school_start"
    },
    "lunch_alone": {
        name: "Me",
        text: "(Walking quietly down the hallway alone, I arrived at the Library Annex. There, I met a girl leaning by the window reading a book.)",
        background: "assets/images/background/library_old.png",
        character: null,
        next: "alone_2"
    },
    "alone_2": {
        name: "???",
        text: "(She looks up from her book and stares at me. In a low voice, she speaks.)",
        character: "assets/images/characters/yuna_normal.png",
        next: "alone_2_2"
    },
    "alone_2_2": {
        name: "???",
        text: "\"...Are you lost? Students don't usually come here. You found your way here somehow.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "yuna_intro"
    },
    "yuna_intro": {
        name: "???",
        text: "(Her deep, mysterious purple eyes quietly observe me. It's as if she's trying to see through my soul.)",
        next: "yuna_intro_name_ask"
    },
    "yuna_intro_name_ask": {
        name: "???",
        text: "\"I'm 'Yuna'. What's... your name?\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "yuna_intro_name_share"
    },
    "yuna_intro_name_share": {
        name: "Me",
        text: "\"I'm {name}. I just transferred today.\"",
        setFlag: "knows_name_yuna",
        next: "yuna_intro_2"
    },
    "yuna_intro_2": {
        name: "Yuna",
        text: "\"{name}... Hehe, that's a nice name. This school... is very different from what it looks like. From you too.. I feel a strangely familiar aura.\"",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "met_yuna",
        next: "yuna_free_talk"
    },
    "yuna_free_talk": {
        type: "free_talk",
        name: "Yuna",
        text: "\"...Is there something you're curious about? Or do you want to know about this school?\"",
        context: "In the quiet Library Annex, first meeting with Yuna who has a mysterious and cold atmosphere. Keep the conversation going until it naturally concludes. When the conversation ends, Yuna will ask if you want to know more about her or the school's secrets. Only in the final turn, show an attitude of checking if you're ready for deeper conversation.",
        personality: "A mysterious and cold girl with many secrets. She feels a strange interest in the protagonist.",
        character: "assets/images/characters/yuna_normal.png",
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
        text: "(As I talked with Yuna, I felt myself getting drawn into her mysterious aura. She stares at me with a faint smile and asked if I want to know more about her.)",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "The school is different? What do you mean by that?", next: "yuna_secret_high" },
            { text: "Familiar... Have you seen me before?", next: "yuna_scent_high" },
            { text: "You seem dangerous somehow. But I can't take my eyes off you.", next: "yuna_danger_high" }
        ]
    },
    "yuna_choices_low": {
        name: "Me",
        text: "(Yuna's gaze has grown colder. My attitude seems to have rubbed her the wrong way. She spoke as if warning me in a cold voice.)",
        character: "assets/images/characters/yuna_angry.png",
        choices: [
            { text: "The school is different? What do you mean by that?", next: "yuna_secret_low" },
            { text: "Familiar... Have you seen me before?", next: "yuna_scent_low" },
            { text: "You seem dangerous somehow. But I can't take my eyes off you.", next: "yuna_danger_low" }
        ]
    },
    "yuna_choices": {
        name: "Me",
        text: "(The conversation with Yuna has concluded for now. Her purple eyes still maintain a gaze as if seeing through me.)",
        choices: [
            { text: "The school is different? What do you mean by that?", next: "yuna_secret_normal" },
            { text: "Familiar... Have you seen me before?", next: "yuna_scent_normal" },
            { text: "You seem dangerous somehow. But I can't take my eyes off you.", next: "yuna_danger_normal" }
        ]
    },
    "yuna_secret_high": {
        name: "Yuna",
        text: "(She lightly brushes the back of my hand and gives a mysterious smile.)",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 6 } },
        next: "yuna_secret_high_2"
    },
    "yuna_secret_high_2": {
        name: "Yuna",
        text: "\"That look in your eyes... I really like it. What expression will you make when you learn the huge truth hidden beneath this school? You'll find out soon. I'll teach you myself.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "yuna_secret_low": {
        name: "Yuna",
        text: "(She pushes me away with a mocking expression.)",
        character: "assets/images/characters/yuna_angry.png",
        next: "yuna_secret_low_2"
    },
    "yuna_secret_low_2": {
        name: "Yuna",
        text: "\"Secrets? It's not something someone like you could handle. Don't poke your nose where it doesn't belong, just go about your school life quietly.\"",
        character: "assets/images/characters/yuna_angry.png",
        next: "after_school_start"
    },
    "yuna_secret_normal": {
        name: "Yuna",
        text: "(She closes her book with a mysterious smile on her lips. Her lips draw close to my ear and whisper.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_secret_normal_2"
    },
    "yuna_secret_normal_2": {
        name: "Yuna",
        text: "\"Hehe, curious? But sometimes not knowing secrets is better. The stories this school is trying to hide... you could get hurt if you know.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "yuna_scent_high": {
        name: "Yuna",
        text: "(She leans close to my face and takes a deep breath.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_scent_high_2"
    },
    "yuna_scent_high_2": {
        name: "Yuna",
        text: "\"As I thought... The sweet scent from your soul. I feel like I've been waiting for a long time. {name}, you might be a much more special existence than you think.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "yuna_scent_low": {
        name: "Yuna",
        text: "(She wrinkles her nose showing displeasure.)",
        character: "assets/images/characters/yuna_angry.png",
        next: "yuna_scent_low_2"
    },
    "yuna_scent_low_2": {
        name: "Yuna",
        text: "\"I guess I was mistaken. Just an unpleasant smell like any ordinary kid. Don't pretend you know me.\"",
        character: "assets/images/characters/yuna_angry.png",
        next: "after_school_start"
    },
    "yuna_scent_normal": {
        name: "Yuna",
        text: "(She takes a step closer and stares at me. She murmurs with a lonely expression.)",
        character: "assets/images/characters/yuna_normal.png",
        next: "yuna_scent_normal_2"
    },
    "yuna_scent_normal_2": {
        name: "Yuna",
        text: "\"No, it's the first time I've seen you. But the 'light' in your eyes... it's quite appealing. You seem different from the listless kids in this school. May I keep watching how you change?\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "after_school_start"
    },
    "yuna_danger_high": {
        name: "Yuna",
        text: "(She smiles enchantingly and slightly lifts my chin.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_danger_high_2"
    },
    "yuna_danger_high_2": {
        name: "Yuna",
        text: "\"So you're the type who enjoys danger? Hehe, good. I'm curious how much I can break you. I'm really looking forward to the time ahead.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "yuna_danger_low": {
        name: "Yuna",
        text: "(She warns me with icy eyes.)",
        character: "assets/images/characters/yuna_angry.png",
        next: "yuna_danger_low_2"
    },
    "yuna_danger_low_2": {
        name: "Yuna",
        text: "\"Watch your mouth. Unless you want to know what's worse than death. If you approach me carelessly, they won't even find your bones.\"",
        character: "assets/images/characters/yuna_angry.png",
        next: "after_school_start"
    },
    "yuna_danger_normal": {
        name: "Yuna",
        text: "(She brushes my cheek lightly with cold fingers. She stares into my eyes. A strange smile appears.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_danger_normal_2"
    },
    "yuna_danger_normal_2": {
        name: "Yuna",
        text: "\"Dangerous, you say... Hehe, correct. But people like you who approach knowing it's dangerous, I don't dislike. Until you lose that special light... I'll stay by your side.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "lunch_store": {
        name: "Me",
        text: "(I secured the last 'chocolate conch bread' at the store! With a victor's feeling, I take a big bite of the bread, and sweetness fills my mouth.)",
        background: "assets/images/background/store.png",
        next: "lunch_store_2"
    },
    "lunch_store_2": {
        name: "Me",
        text: "(Happily eating the bread and heading back, I bumped into someone.)",
        next: "lunch_store_teacher"
    },
    "lunch_store_teacher": {
        name: "Homeroom Teacher",
        text: "\"Oh, sorry! ...Wait, isn't that {name}? Did you come to buy bread at the store too?\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "lunch_store_teacher_2"
    },
    "lunch_store_teacher_2": {
        name: "Homeroom Teacher",
        text: "\"Hehe, that bread is really good. I came to buy it too but I was a step too late. Enjoy it!\"",
        character: "assets/images/characters/teacher_normal.png",
        stats: { Teacher: { affinity: 3 } },
        next: "after_school_start"
    },
    "lunch_sleep": {
        name: "Me",
        text: "(I lay my head on the desk to nap. The sunlight through the window warms my back.)",
        next: "lunch_sleep_2"
    },
    "lunch_sleep_2": {
        name: "Me",
        text: "(In my dream, I heard someone calling my name. A very longing and sad voice...)",
        next: "lunch_sleep_3"
    },
    "lunch_sleep_3": {
        name: "Me",
        text: "(When I opened my eyes, someone was staring down at my face.)",
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
        text: "\"You were sleeping so soundly I felt bad waking you... But you can't miss class. Hehe, see you after school!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "after_school_start"
    },
    "lunch_dain": {
        name: "Me",
        text: "(I hear the sound of volleyballs bouncing from the gym. I followed the sound and headed to the gym.)",
        background: "assets/images/background/playground.png",
        next: "lunch_dain_2"
    },
    "lunch_dain_2": {
        name: "???",
        text: "(When I opened the gym door, a girl was practicing volleyball. She spots me and waves with a bright smile.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        setFlag: "met_dain",
        branches: [
            { next: "lunch_dain_3_active", condition: "personality_active" },
            { next: "lunch_dain_3_normal" }
        ]
    },
    "lunch_dain_3_active": {
        name: "???",
        text: "\"Hey, you there! I saw you during self-introduction earlier. You had totally high energy! Don't just stand there watching, come here and play a round! You look athletic!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        next: "dain_name_share"
    },
    "lunch_dain_3_normal": {
        name: "???",
        text: "\"Hey, you there! Don't just stand there watching, come here and play a round! You look like you're good at sports!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        next: "dain_name_share"
    },
    "dain_name_share": {
        name: "Me",
        text: "\"Me? I'm {name}. I transferred today.\"",
        setFlag: "knows_name_dain",
        next: "dain_name_share_2"
    },
    "dain_name_share_2": {
        name: "Dain",
        text: "\"{name}? Cool name! I'm Dain from the volleyball club. No one in this school has better jumping ability than me, so get ready!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        next: "lunch_dain_gym_2"
    },
    "lunch_dain_gym_2": {
        name: "Dain",
        text: "\"Alright, this is my turf! {name}, are you ready? I won't go easy on you, so brace yourself!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        setFlag: "met_dain",
        choices: [
            { text: "Alright, let's do this!", next: "lunch_dain_play" },
            { text: "I'm not good at volleyball... Can you teach me?", next: "lunch_dain_teach" }
        ]
    },
    "lunch_dain_play": {
        name: "Dain",
        text: "\"Oh! That's the spirit! Here I go! (Dain delivers a powerful serve. I barely managed to receive it)\"",
        character: "assets/images/characters/dain_active.png",
        stats: { Dain: { affinity: 5 } },
        next: "lunch_dain_end"
    },
    "lunch_dain_teach": {
        name: "Dain",
        text: "\"Ehe, don't worry! The great Dain will teach you from the basics. Now, let's start with the posture!\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 15 } },
        next: "lunch_dain_end"
    },
    "lunch_dain_end": {
        name: "Me",
        text: "(After that, I sweated with Dain until lunch time was over. I didn't expect my first day of transfer to be this active... Before I knew it, afternoon classes were all done too.)",
        next: "after_school_start"
    },
    "lunch_nurse": {
        name: "Me",
        text: "(Maybe because it's my first day, the tension is giving me a slight headache. I quietly headed to the nurse's office.)",
        background: "assets/images/background/nurse_room.jpg",
        next: "lunch_nurse_2"
    },
    "lunch_nurse_2": {
        name: "???",
        text: "\"Oh my, a face I haven't seen before? Was there such a cute student in our school?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        branches: [
            { next: "nurse_intro", excludeCondition: "knows_name_nurse" },
            { next: "nurse_name_share_pre", condition: "knows_name_nurse" }
        ]
    },
    "nurse_intro": {
        name: "Nurse",
        text: "\"I'm the health teacher here. The kids just call me 'teacher' but.. I might tell you my name specially?\"",
        character: "assets/images/characters/nurse_normal.png",
        setFlag: "met_nurse",
        next: "nurse_name_share_pre"
    },
    "nurse_name_share_pre": {
        name: "Me",
        text: "\"My name is '{name}'.\"",
        setFlag: "knows_name_nurse",
        branches: [
            { next: "nurse_name_share_study", condition: "personality_study" },
            { next: "nurse_name_share_normal" }
        ]
    },
    "nurse_name_share_study": {
        name: "Nurse",
        text: "\"{name}... Hehe, your eyes are as clear as your name. I saw your self-introduction earlier and you seemed like a total model student? Are you here because studying gave you a headache? Or did you stop by because you're nervous on your first day?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "nurse_free_talk_day1"
    },
    "nurse_name_share_normal": {
        name: "Nurse",
        text: "\"{name}... Hehe, your eyes are as clear as your name. Are you here because something hurts? Or did you stop by because you're nervous on your first day?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "nurse_free_talk_day1"
    },
    "nurse_free_talk_day1": {
        type: "free_talk",
        name: "Nurse",
        text: "\"Don't be nervous. You can relax here. Is there anything you're curious about?\"",
        context: "Conversing with the nurse you just met in the nurse's office. The teacher shows a provocative attitude with strange interest in the protagonist. Keep the conversation going until it naturally concludes. When the conversation ends, lunch time ends and transitions to after school. Only in the final turn, see the protagonist off saying it's time for class.",
        personality: "A mature and charming 'big sister' style. Enjoys teasing the protagonist with provocative words but actually cares for and wants to protect them more than anyone.",
        character: "assets/images/characters/nurse_normal.png",
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
        text: "(While talking with the teacher, class time approached before I knew it. The teacher seemed reluctant to part and told me to definitely visit again. Time to head back to class.)",
        character: "assets/images/characters/nurse_normal.png",
        next: "after_school_start"
    },
    "nurse_day1_end_low": {
        name: "Me",
        text: "(The teacher's expression hardened. My joke must have gone too far. The teacher showed displeasure and told me to hurry back to class.)",
        character: "assets/images/characters/nurse_normal.png",
        next: "after_school_start"
    }
});
