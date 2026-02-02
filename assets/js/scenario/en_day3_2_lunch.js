/**
 * ============================================================================
 * CUPID - Day 3 Lunch Scenario (English Version)
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}

if (!SCENARIO[3]) {
    SCENARIO[3] = {};
}

Object.assign(SCENARIO[3], {
    "day3_lunch_start": {
        name: "Me",
        text: "(The lunch bell rings. It's Friday... Tomorrow is the weekend.)",
        background: "assets/images/background/room_school.png",
        bgm: "daily.mp3",
        character: null,
        next: "day3_lunch_check_dates"
    },
    
    "day3_lunch_check_dates": {
        name: "Me",
        text: "(As I try to get up from my desk, I feel multiple eyes on me.)",
        branches: [
            { next: "day3_lunch_multiple_approach", condition: "day3_has_multiple_dates" },
            { next: "day3_lunch_single_approach", condition: "day3_seoyeon_date_confirmed" },
            { next: "day3_lunch_single_approach", condition: "day3_yuna_date_confirmed" },
            { next: "day3_lunch_single_approach", condition: "day3_dain_date_confirmed" },
            { next: "day3_lunch_normal" }
        ]
    },

    "day3_lunch_multiple_approach": {
        name: "Me",
        text: "(Uh... wait, why is everyone coming this way...?)",
        character: null,
        next: "day3_lunch_collision"
    },
    "day3_lunch_collision": {
        name: "Seoyeon",
        text: "\"Hey, {name}! Want to have lunch... huh?\"",
        character: "assets/images/characters/seyoun_normal.png",
        branches: [
            { next: "day3_lunch_collision_seoyeon_yuna", condition: "day3_yuna_date_confirmed" },
            { next: "day3_lunch_collision_seoyeon_dain", condition: "day3_dain_date_confirmed" },
            { next: "day3_lunch_seoyeon_only" }
        ]
    },
    "day3_lunch_collision_seoyeon_yuna": {
        name: "Yuna",
        text: "\"...{name}. Come with me.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_lunch_tension_1"
    },
    "day3_lunch_collision_seoyeon_dain": {
        name: "Dain",
        text: "\"Hey, {name}! Let's go eat! Oh... Seoyeon too?\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_lunch_tension_1"
    },
    "day3_lunch_tension_1": {
        name: "Me",
        text: "(Suddenly, the classroom fills with tension. Their eyes meeting each other don't look friendly.)",
        character: null,
        next: "day3_lunch_tension_2"
    },
    "day3_lunch_tension_2": {
        name: "Seoyeon",
        text: "\"...Excuse me, I spoke to {name} first?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day3_lunch_tension_3"
    },
    "day3_lunch_tension_3": {
        name: "Me",
        text: "(This doesn't look good... What should I do?)",
        choices: [
            { text: "Have lunch with Seoyeon", next: "day3_lunch_choose_seoyeon", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Have lunch with Yuna", next: "day3_lunch_choose_yuna", condition: "day3_yuna_date_confirmed", stats: { Yuna: { affinity: 5 } } },
            { text: "Have lunch with Dain", next: "day3_lunch_choose_dain", condition: "day3_dain_date_confirmed", stats: { Dain: { affinity: 5 } } },
            { text: "Suggest eating together", next: "day3_lunch_together_propose" },
            { text: "Run away to eat alone", next: "day3_lunch_escape", stats: { Seoyeon: { affinity: -3 }, Yuna: { affinity: -3 }, Dain: { affinity: -3 } } }
        ]
    },

    "day3_lunch_choose_seoyeon": {
        name: "Me",
        text: "\"Seoyeon, let's go together. We had plans from yesterday, remember?\"",
        setFlag: "day3_lunch_with_seoyeon",
        next: "day3_lunch_seoyeon_others_react"
    },
    "day3_lunch_seoyeon_others_react": {
        name: "Me",
        text: "(I can feel the others' expressions harden.)",
        branches: [
            { next: "day3_lunch_yuna_jealous", condition: "day3_yuna_date_confirmed" },
            { next: "day3_lunch_dain_jealous", condition: "day3_dain_date_confirmed" },
            { next: "day3_lunch_with_seoyeon_start" }
        ]
    },
    "day3_lunch_yuna_jealous": {
        name: "Yuna",
        text: "\"...I see. Enjoy your meal.\"",
        character: "assets/images/characters/yuna_normal.png",
        stats: { Yuna: { affinity: -5 } },
        setFlag: "day3_jealousy_yuna",
        next: "day3_lunch_yuna_jealous_2"
    },
    "day3_lunch_yuna_jealous_2": {
        name: "Me",
        text: "(Yuna leaves the classroom without a word. Her back looks somehow lonely.)",
        character: null,
        next: "day3_lunch_with_seoyeon_start"
    },
    "day3_lunch_dain_jealous": {
        name: "Dain",
        text: "\"What, you're not including me? Hmph, fine!\"",
        character: "assets/images/characters/dain_sad.png",
        stats: { Dain: { affinity: -3 } },
        setFlag: "day3_jealousy_dain",
        next: "day3_lunch_dain_jealous_2"
    },
    "day3_lunch_dain_jealous_2": {
        name: "Me",
        text: "(Dain grumbles and goes to her other friends. I'm a bit worried...)",
        character: null,
        next: "day3_lunch_with_seoyeon_start"
    },
    "day3_lunch_with_seoyeon_start": {
        name: "Seoyeon",
        text: "\"Phew... Finally just the two of us. Honestly, {name}, don't you think too many people are interested in you lately?\"",
        character: "assets/images/characters/seyoun_normal.png",
        background: "assets/images/background/store.png",
        next: "day3_lunch_seoyeon_jealous_talk"
    },
    "day3_lunch_seoyeon_jealous_talk": {
        name: "Me",
        text: "(There's an unusual edge in Seoyeon's voice.)",
        choices: [
            { text: "\"You're the most important to me\"", next: "day3_lunch_seoyeon_reassure", stats: { Seoyeon: { affinity: 8 } } },
            { text: "\"They're just friends\"", next: "day3_lunch_seoyeon_deny", stats: { Seoyeon: { affinity: 2 } } },
            { text: "\"Why, are you jealous?\"", next: "day3_lunch_seoyeon_tease", stats: { Seoyeon: { affinity: 3 } } }
        ]
    },
    "day3_lunch_seoyeon_reassure": {
        name: "Seoyeon",
        text: "\"...Really? I'll remember that.\"",
        character: "assets/images/characters/seyoun_happy.png",
        next: "day3_lunch_seoyeon_weekend"
    },
    "day3_lunch_seoyeon_deny": {
        name: "Seoyeon",
        text: "\"...Right, I guess so. Sorry, I said something weird.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day3_lunch_seoyeon_weekend"
    },
    "day3_lunch_seoyeon_tease": {
        name: "Seoyeon",
        text: "\"W-what! Who said I'm jealous! ...Maybe a little.\"",
        character: "assets/images/characters/seyoun_blush.png",
        next: "day3_lunch_seoyeon_weekend"
    },
    "day3_lunch_seoyeon_weekend": {
        name: "Seoyeon",
        text: "\"By the way, what are you doing this weekend? I... want to hang out somewhere together if you're free.\"",
        character: "assets/images/characters/seyoun_normal.png",
        branches: [
            { next: "day3_lunch_seoyeon_caught", condition: "day3_has_multiple_dates" },
            { next: "day3_lunch_seoyeon_promise" }
        ]
    },
    "day3_lunch_seoyeon_caught": {
        name: "Me",
        text: "(Wait, I already have other plans... What should I do?)",
        choices: [
            { text: "\"How about Sunday?\" (Lie)", next: "day3_lunch_seoyeon_lie", stats: { Seoyeon: { affinity: 3 } }, setFlag: "day3_seoyeon_sunday_promise" },
            { text: "Be honest", next: "day3_lunch_seoyeon_honest", stats: { Seoyeon: { affinity: -5 } } },
            { text: "Dodge the question", next: "day3_lunch_seoyeon_dodge" }
        ]
    },
    "day3_lunch_seoyeon_lie": {
        name: "Seoyeon",
        text: "\"Really?! Then let's meet on Sunday! Can I pick where to go?\"",
        character: "assets/images/characters/seyoun_happy.png",
        next: "day3_lunch_seoyeon_end"
    },
    "day3_lunch_seoyeon_honest": {
        name: "Seoyeon",
        text: "\"...What? You have other plans? With who?\"",
        character: "assets/images/characters/seyoun_sad.png",
        next: "day3_lunch_seoyeon_honest_2"
    },
    "day3_lunch_seoyeon_honest_2": {
        name: "Me",
        text: "(Seoyeon's eyes turn cold. The atmosphere has frozen.)",
        next: "day3_lunch_seoyeon_end"
    },
    "day3_lunch_seoyeon_dodge": {
        name: "Seoyeon",
        text: "\"Why are you hesitating? ...Do you have other plans?\"",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: -2 } },
        next: "day3_lunch_seoyeon_end"
    },
    "day3_lunch_seoyeon_promise": {
        name: "Me",
        text: "\"Sure, let's hang out this weekend.\"",
        stats: { Seoyeon: { affinity: 5 } },
        setFlag: "day3_seoyeon_weekend_promise",
        next: "day3_lunch_seoyeon_end"
    },
    "day3_lunch_seoyeon_end": {
        name: "Me",
        text: "(Lunch time is ending. Time with Seoyeon was sweet but somehow unsettling.)",
        fade: true,
        next: "day3_afternoon_start"
    },

    "day3_lunch_choose_yuna": {
        name: "Me",
        text: "\"Yuna, let's go together.\"",
        setFlag: "day3_lunch_with_yuna",
        next: "day3_lunch_yuna_others_react"
    },
    "day3_lunch_yuna_others_react": {
        name: "Seoyeon",
        text: "\"...Okay. Got it.\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: -5 } },
        setFlag: "day3_jealousy_seoyeon",
        next: "day3_lunch_with_yuna_start"
    },
    "day3_lunch_with_yuna_start": {
        name: "Yuna",
        text: "\"...Follow me.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_lunch_yuna_rooftop"
    },
    "day3_lunch_yuna_rooftop": {
        name: "Me",
        text: "(I followed Yuna to the rooftop. Are we eating here?)",
        background: "assets/images/background/top_school.png",
        next: "day3_lunch_yuna_talk_1"
    },
    "day3_lunch_yuna_talk_1": {
        name: "Yuna",
        text: "\"...{name}. I thought you were only nice to me.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_lunch_yuna_talk_2"
    },
    "day3_lunch_yuna_talk_2": {
        name: "Me",
        text: "(There's thorns in Yuna's words.)",
        choices: [
            { text: "\"You're special to me\"", next: "day3_lunch_yuna_special", stats: { Yuna: { affinity: 10 } } },
            { text: "\"I try to be nice to everyone\"", next: "day3_lunch_yuna_everyone", stats: { Yuna: { affinity: -3 } } },
            { text: "\"Why do you say that?\"", next: "day3_lunch_yuna_question" }
        ]
    },
    "day3_lunch_yuna_special": {
        name: "Yuna",
        text: "\"...Really? Prove it. Tomorrow night.\"",
        character: "assets/images/characters/yuna_happy.png",
        next: "day3_lunch_yuna_warning"
    },
    "day3_lunch_yuna_everyone": {
        name: "Yuna",
        text: "\"...I see. So I'm just one of 'everyone'.\"",
        character: "assets/images/characters/yuna_sad.png",
        next: "day3_lunch_yuna_warning"
    },
    "day3_lunch_yuna_question": {
        name: "Yuna",
        text: "\"...You don't need to know. Not yet.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_lunch_yuna_warning"
    },
    "day3_lunch_yuna_warning": {
        name: "Yuna",
        text: "\"Remember one thing. If you betray me... you'll regret it.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_lunch_yuna_warning_2"
    },
    "day3_lunch_yuna_warning_2": {
        name: "Me",
        text: "(Yuna's eyes flashed eerily for a moment... That was a joke, right?)",
        fade: true,
        next: "day3_afternoon_start"
    },

    "day3_lunch_choose_dain": {
        name: "Me",
        text: "\"Dain, let's go eat together.\"",
        setFlag: "day3_lunch_with_dain",
        next: "day3_lunch_dain_others_react"
    },
    "day3_lunch_dain_others_react": {
        name: "Seoyeon",
        text: "\"...Okay. See you later.\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: -4 } },
        setFlag: "day3_jealousy_seoyeon",
        next: "day3_lunch_with_dain_start"
    },
    "day3_lunch_with_dain_start": {
        name: "Dain",
        text: "\"Yay! {name} is the best! Let's go, today's lunch is chicken!\"",
        character: "assets/images/characters/dain_laugh.png",
        background: "assets/images/background/store.png",
        next: "day3_lunch_dain_talk_1"
    },
    "day3_lunch_dain_talk_1": {
        name: "Dain",
        text: "\"By the way... did you see Seoyeon's face just now? Totally jealous, right?\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_lunch_dain_talk_2"
    },
    "day3_lunch_dain_talk_2": {
        name: "Me",
        text: "(Dain glances around and lowers her voice.)",
        next: "day3_lunch_dain_talk_3"
    },
    "day3_lunch_dain_talk_3": {
        name: "Dain",
        text: "\"Hey, be honest with me. Are you dating Seoyeon? Or Yuna? I know they're both interested in you.\"",
        character: "assets/images/characters/dain_normal.png",
        choices: [
            { text: "\"No, I like you\"", next: "day3_lunch_dain_confess", stats: { Dain: { affinity: 10 } } },
            { text: "\"We're just friends\"", next: "day3_lunch_dain_friends", stats: { Dain: { affinity: 2 } } },
            { text: "\"Why, are you jealous too?\"", next: "day3_lunch_dain_jealous_tease", stats: { Dain: { affinity: 5 } } }
        ]
    },
    "day3_lunch_dain_confess": {
        name: "Dain",
        text: "\"W-what?! Saying that out of nowhere... Geez!\"",
        character: "assets/images/characters/dain_blush.png",
        next: "day3_lunch_dain_end"
    },
    "day3_lunch_dain_friends": {
        name: "Dain",
        text: "\"Hmm~ Really? Their faces say otherwise though... Well, whatever!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_lunch_dain_end"
    },
    "day3_lunch_dain_jealous_tease": {
        name: "Dain",
        text: "\"Huh?! Who's jealous! I'm just curious! ...Maybe a little bothered though!\"",
        character: "assets/images/characters/dain_blush.png",
        next: "day3_lunch_dain_end"
    },
    "day3_lunch_dain_end": {
        name: "Dain",
        text: "\"Anyway! You're coming to my practice tomorrow, right? You promised!\"",
        character: "assets/images/characters/dain_laugh.png",
        branches: [
            { next: "day3_lunch_dain_conflict", condition: "day3_has_multiple_dates" },
            { next: "day3_lunch_dain_promise" }
        ]
    },
    "day3_lunch_dain_conflict": {
        name: "Me",
        text: "(Tomorrow... I have other plans too...)",
        choices: [
            { text: "\"Of course!\"", next: "day3_lunch_dain_promise", stats: { Dain: { affinity: 5 } } },
            { text: "\"If I have time...\"", next: "day3_lunch_dain_maybe", stats: { Dain: { affinity: -3 } } }
        ]
    },
    "day3_lunch_dain_promise": {
        name: "Dain",
        text: "\"Great! Look forward to it! I'll show you my amazing spike!\"",
        character: "assets/images/characters/dain_laugh.png",
        fade: true,
        next: "day3_afternoon_start"
    },
    "day3_lunch_dain_maybe": {
        name: "Dain",
        text: "\"...What, if you have time? Do you have other plans?\"",
        character: "assets/images/characters/dain_sad.png",
        next: "day3_lunch_dain_suspicious"
    },
    "day3_lunch_dain_suspicious": {
        name: "Dain",
        text: "\"Hmph, fine. But if you stand me up, I'll be really mad!\"",
        character: "assets/images/characters/dain_normal.png",
        fade: true,
        next: "day3_afternoon_start"
    },

    "day3_lunch_together_propose": {
        name: "Me",
        text: "\"C-can't we all eat together?\"",
        next: "day3_lunch_together_react"
    },
    "day3_lunch_together_react": {
        name: "Me",
        text: "(A moment of silence. Three pairs of eyes scan each other.)",
        next: "day3_lunch_together_awkward"
    },
    "day3_lunch_together_awkward": {
        name: "Seoyeon",
        text: "\"...Fine. Let's all eat together.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day3_lunch_together_2"
    },
    "day3_lunch_together_2": {
        name: "Me",
        text: "(Lunch in the cafeteria. The atmosphere is strangely tense.)",
        background: "assets/images/background/store.png",
        next: "day3_lunch_together_3"
    },
    "day3_lunch_together_3": {
        name: "Dain",
        text: "\"Hey, {name}. You're coming to see my volleyball practice tomorrow, right?\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_lunch_together_4"
    },
    "day3_lunch_together_4": {
        name: "Seoyeon",
        text: "\"Huh? {name} has plans with me tomorrow?\"",
        character: "assets/images/characters/seyoun_normal.png",
        branches: [
            { next: "day3_lunch_together_yuna", condition: "day3_yuna_date_confirmed" },
            { next: "day3_lunch_together_explosion" }
        ]
    },
    "day3_lunch_together_yuna": {
        name: "Yuna",
        text: "\"...{name} promised me. Tomorrow night.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_lunch_together_explosion"
    },
    "day3_lunch_together_explosion": {
        name: "Me",
        text: "(The air freezes rapidly. All eyes are on me.)",
        stats: { Seoyeon: { affinity: -5 }, Yuna: { affinity: -5 }, Dain: { affinity: -5 } },
        setFlag: "day3_caught_multiple_dates",
        next: "day3_lunch_together_confront"
    },
    "day3_lunch_together_confront": {
        name: "Seoyeon",
        text: "\"Wait... {name}, did you make promises with all of us?\"",
        character: "assets/images/characters/seyoun_sad.png",
        choices: [
            { text: "Apologize honestly", next: "day3_lunch_apologize", stats: { Seoyeon: { affinity: 3 }, Dain: { affinity: 3 } } },
            { text: "Make excuses about different times", next: "day3_lunch_excuse" },
            { text: "Run away", next: "day3_lunch_run", stats: { Seoyeon: { affinity: -10 }, Yuna: { affinity: -10 }, Dain: { affinity: -10 } } }
        ]
    },
    "day3_lunch_apologize": {
        name: "Me",
        text: "\"I'm sorry... I couldn't say no to anyone...\"",
        next: "day3_lunch_apologize_react"
    },
    "day3_lunch_apologize_react": {
        name: "Dain",
        text: "\"...Being honest is good, but still annoying.\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_lunch_together_end"
    },
    "day3_lunch_excuse": {
        name: "Me",
        text: "\"Well, the times are all different... Dain's in the morning, others in the evening...\"",
        next: "day3_lunch_excuse_react"
    },
    "day3_lunch_excuse_react": {
        name: "Yuna",
        text: "\"...So you're planning to meet all of us?\"",
        character: "assets/images/characters/yuna_normal.png",
        stats: { Yuna: { affinity: -5 } },
        next: "day3_lunch_together_end"
    },
    "day3_lunch_run": {
        name: "Me",
        text: "(I hurriedly finished my food and escaped. That was the worst choice.)",
        setFlag: "day3_lunch_escaped",
        fade: true,
        next: "day3_afternoon_start"
    },
    "day3_lunch_together_end": {
        name: "Me",
        text: "(Lunch ended in an awkward atmosphere. I'm worried about the weekend...)",
        fade: true,
        next: "day3_afternoon_start"
    },

    "day3_lunch_escape": {
        name: "Me",
        text: "\"Oh, I just remembered something I need to do! See you later!\"",
        setFlag: "day3_lunch_escaped",
        next: "day3_lunch_escape_2"
    },
    "day3_lunch_escape_2": {
        name: "Me",
        text: "(I escaped the classroom as if running away. I think I heard sighs behind me...)",
        fade: true,
        next: "day3_afternoon_start"
    },

    "day3_lunch_single_approach": {
        name: "Me",
        text: "(It's lunch time. Who should I eat with?)",
        choices: [
            { text: "Eat with Seoyeon", next: "day3_lunch_seoyeon_only", condition: "has_number_seyoun" },
            { text: "Eat with Yuna", next: "day3_lunch_yuna_only", condition: "has_number_yuna" },
            { text: "Eat with Dain", next: "day3_lunch_dain_only", condition: "has_number_dain" },
            { text: "Eat alone", next: "day3_lunch_alone" }
        ]
    },
    "day3_lunch_seoyeon_only": {
        name: "Seoyeon",
        text: "\"{name}! Let's eat together!\"",
        character: "assets/images/characters/seyoun_happy.png",
        background: "assets/images/background/store.png",
        stats: { Seoyeon: { affinity: 3 } },
        setFlag: "day3_lunch_with_seoyeon",
        next: "day3_lunch_seoyeon_weekend"
    },
    "day3_lunch_yuna_only": {
        name: "Yuna",
        text: "\"...{name}. Rooftop.\"",
        character: "assets/images/characters/yuna_normal.png",
        stats: { Yuna: { affinity: 3 } },
        setFlag: "day3_lunch_with_yuna",
        next: "day3_lunch_yuna_rooftop"
    },
    "day3_lunch_dain_only": {
        name: "Dain",
        text: "\"Let's go eat! Today's chicken day!\"",
        character: "assets/images/characters/dain_laugh.png",
        background: "assets/images/background/store.png",
        stats: { Dain: { affinity: 3 } },
        setFlag: "day3_lunch_with_dain",
        next: "day3_lunch_dain_talk_1"
    },

    "day3_lunch_normal": {
        name: "Me",
        text: "(No special plans... I'll just have a normal lunch today.)",
        background: "assets/images/background/store.png",
        next: "day3_lunch_normal_2"
    },
    "day3_lunch_normal_2": {
        name: "Me",
        text: "(I hear laughter around me. Everyone looks happy with their friends.)",
        next: "day3_lunch_alone"
    },
    "day3_lunch_alone": {
        name: "Me",
        text: "(I quietly ate lunch alone. What should I do this weekend...)",
        fade: true,
        next: "day3_afternoon_start"
    }
});
