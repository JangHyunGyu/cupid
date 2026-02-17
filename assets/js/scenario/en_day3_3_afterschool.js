/**
 * ============================================================================
 * CUPID - Day 3 Afterschool Scenario (English Version)
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}

if (!SCENARIO[3]) {
    SCENARIO[3] = {};
}

Object.assign(SCENARIO[3], {
    "day3_afternoon_start": {
        name: "Me",
        text: "(Finally, homeroom is over. Friday after school... Freedom mixed with strange tension.)",
        background: "assets/images/background/room_school.png",
        bgm: "daily2.mp3",
        character: null,
        sunset: true,
        next: "day3_afternoon_check"
    },
    "day3_afternoon_check": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        text: "(As I pack my bag...)",
        sunset: true,
        branches: [
            { next: "day3_afternoon_tension", condition: "day3_caught_multiple_dates" },
            { next: "day3_afternoon_jealousy_check", condition: "day3_jealousy_seoyeon" },
            { next: "day3_afternoon_jealousy_check", condition: "day3_jealousy_yuna" },
            { next: "day3_afternoon_jealousy_check", condition: "day3_jealousy_dain" },
            { next: "day3_afternoon_normal" }
        ]
    },

    "day3_afternoon_tension": {
        name: "Me",
        text: "(The classroom atmosphere is heavy. Must be because of lunch...)",
        sunset: true,
        next: "day3_afternoon_tension_2"
    },
    "day3_afternoon_tension_2": {
        name: "Seoyeon",
        text: "\"...{name}, can we talk for a moment?\"",
        character: "assets/images/characters/seyoun_sad.png",
        sunset: true,
        next: "day3_afternoon_confrontation"
    },
    "day3_afternoon_confrontation": {
        name: "Me",
        character: "assets/images/characters/seyoun_sad.png",
        text: "(Seoyeon takes me to the hallway. Her expression looks serious.)",
        background: "assets/images/background/school_hallway.png",
        sunset: true,
        next: "day3_afternoon_confrontation_2"
    },
    "day3_afternoon_confrontation_2": {
        name: "Seoyeon",
        background: "assets/images/background/school_hallway.png",
        text: "\"About lunch... Did you really make weekend plans with all of us?\"",
        character: "assets/images/characters/seyoun_sad.png",
        sunset: true,
        next: "day3_afternoon_confrontation_3"
    },
    "day3_afternoon_confrontation_3": {
        name: "Me",
        background: "assets/images/background/school_hallway.png",
        character: "assets/images/characters/seyoun_sad.png",
        text: "(How should I answer...)",
        sunset: true,
        choices: [
            { text: "Admit honestly", next: "day3_afternoon_admit" },
            { text: "Say different times make it okay", next: "day3_afternoon_justify" },
            { text: "Say only Seoyeon is sincere", next: "day3_afternoon_lie_seoyeon" }
        ]
    },
    "day3_afternoon_admit": {
        name: "Me",
        background: "assets/images/background/school_hallway.png",
        character: "assets/images/characters/seyoun_sad.png",
        text: "\"...Yes. Sorry. I couldn't turn anyone down...\"",
        sunset: true,
        next: "day3_afternoon_admit_react"
    },
    "day3_afternoon_admit_react": {
        name: "Seoyeon",
        background: "assets/images/background/school_hallway.png",
        text: "\"...Thanks for being honest. But I don't like that.\"",
        character: "assets/images/characters/seyoun_sad.png",
        sunset: true,
        stats: { Seoyeon: { affinity: 5 } },
        next: "day3_afternoon_admit_react_2"
    },
    "day3_afternoon_admit_react_2": {
        name: "Seoyeon",
        background: "assets/images/background/school_hallway.png",
        text: "\"If I'm really special to you... only meet me. Otherwise, I have options too.\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        setFlag: "day3_seoyeon_ultimatum",
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_justify": {
        name: "Me",
        background: "assets/images/background/school_hallway.png",
        character: "assets/images/characters/seyoun_sad.png",
        text: "\"The times are all different... so I thought I could meet everyone...\"",
        sunset: true,
        next: "day3_afternoon_justify_react"
    },
    "day3_afternoon_justify_react": {
        name: "Seoyeon",
        background: "assets/images/background/school_hallway.png",
        text: "\"...Don't you see that's the problem?\"",
        character: "assets/images/characters/seyoun_sad.png",
        sunset: true,
        stats: { Seoyeon: { affinity: -5 } },
        next: "day3_afternoon_justify_react_2"
    },
    "day3_afternoon_justify_react_2": {
        name: "Seoyeon",
        background: "assets/images/background/school_hallway.png",
        text: "\"...Fine. We'll see this weekend.\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_lie_seoyeon": {
        name: "Me",
        background: "assets/images/background/school_hallway.png",
        character: "assets/images/characters/seyoun_sad.png",
        text: "\"Seoyeon, you're the only one I'm sincere about. The others are just friends...\"",
        sunset: true,
        next: "day3_afternoon_lie_seoyeon_react"
    },
    "day3_afternoon_lie_seoyeon_react": {
        name: "Seoyeon",
        background: "assets/images/background/school_hallway.png",
        text: "\"...Really? Can I trust that?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        stats: { Seoyeon: { affinity: 3 } },
        setFlag: "day3_promised_seoyeon_only",
        next: "day3_afternoon_lie_warning"
    },
    "day3_afternoon_lie_warning": {
        name: "Me",
        background: "assets/images/background/school_hallway.png",
        character: "assets/images/characters/seyoun_laugh.png",
        text: "(Seoyeon smiles. But... is this right? What should I tell the others?)",
        sunset: true,
        next: "day3_afternoon_transition"
    },

    "day3_afternoon_jealousy_check": {
        name: "Me",
        text: "(The atmosphere was a bit weird during lunch... It should be fine, right?)",
        sunset: true,
        next: "day3_afternoon_approach"
    },
    "day3_afternoon_approach": {
        name: "Me",
        text: "(As I stand up to pack my bag, someone approaches.)",
        sunset: true,
        branches: [
            { next: "day3_afternoon_seoyeon_approach", condition: "day3_jealousy_seoyeon" },
            { next: "day3_afternoon_yuna_approach", condition: "day3_jealousy_yuna" },
            { next: "day3_afternoon_dain_approach", condition: "day3_jealousy_dain" }
        ]
    },
    "day3_afternoon_seoyeon_approach": {
        name: "Seoyeon",
        text: "\"...{name}, do you have a minute?\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        next: "day3_afternoon_seoyeon_talk"
    },
    "day3_afternoon_seoyeon_talk": {
        name: "Seoyeon",
        text: "\"About lunch... Sorry, I think I was being sensitive.\"",
        character: "assets/images/characters/seyoun_sad.png",
        sunset: true,
        next: "day3_afternoon_seoyeon_talk_2"
    },
    "day3_afternoon_seoyeon_talk_2": {
        name: "Seoyeon",
        text: "\"But honestly... seeing you close with Yuna or Dain bothers me a little.\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        choices: [
            { text: "\"You're my favorite, Seoyeon\"", next: "day3_afternoon_seoyeon_comfort" },
            { text: "\"They're all precious friends\"", next: "day3_afternoon_seoyeon_friend" },
            { text: "\"Are you jealous?\"", next: "day3_afternoon_seoyeon_tease" }
        ]
    },
    "day3_afternoon_seoyeon_comfort": {
        name: "Seoyeon",
        text: "\"...Really? Hearing that... I feel a bit relieved.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        stats: { Seoyeon: { affinity: 8 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_seoyeon_friend": {
        name: "Seoyeon",
        text: "\"...Right. Friends. Got it.\"",
        character: "assets/images/characters/seyoun_sad.png",
        sunset: true,
        stats: { Seoyeon: { affinity: -3 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_seoyeon_tease": {
        name: "Seoyeon",
        text: "\"W-what! That's not... Ugh, forget it!\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_yuna_approach": {
        name: "Yuna",
        text: "\"...{name}.\"",
        character: "assets/images/characters/yuna_normal.png",
        background: "assets/images/background/school_hallway.png",
        sunset: true,
        next: "day3_afternoon_yuna_talk"
    },
    "day3_afternoon_yuna_talk": {
        name: "Yuna",
        background: "assets/images/background/school_hallway.png",
        text: "\"At lunch... you chose Seoyeon.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day3_afternoon_yuna_talk_2"
    },
    "day3_afternoon_yuna_talk_2": {
        name: "Me",
        background: "assets/images/background/school_hallway.png",
        character: "assets/images/characters/yuna_normal.png",
        text: "(Yuna's eyes are colder than usual.)",
        sunset: true,
        choices: [
            { text: "\"I'm sorry, Yuna\"", next: "day3_afternoon_yuna_apologize" },
            { text: "\"I'll spend time with you tomorrow\"", next: "day3_afternoon_yuna_promise" },
            { text: "\"Why, are you upset?\"", next: "day3_afternoon_yuna_question" }
        ]
    },
    "day3_afternoon_yuna_apologize": {
        name: "Yuna",
        background: "assets/images/background/school_hallway.png",
        text: "\"...It's okay. We have tomorrow.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        stats: { Yuna: { affinity: 5 } },
        next: "day3_afternoon_yuna_warning"
    },
    "day3_afternoon_yuna_promise": {
        name: "Yuna",
        background: "assets/images/background/school_hallway.png",
        text: "\"...I won't forget those words.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        stats: { Yuna: { affinity: 8 } },
        setFlag: "day3_yuna_priority_promise",
        next: "day3_afternoon_yuna_warning"
    },
    "day3_afternoon_yuna_question": {
        name: "Yuna",
        background: "assets/images/background/school_hallway.png",
        text: "\"...Upset? No. I just... wanted to confirm.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        stats: { Yuna: { affinity: -3 } },
        next: "day3_afternoon_yuna_warning"
    },
    "day3_afternoon_yuna_warning": {
        name: "Yuna",
        background: "assets/images/background/school_hallway.png",
        text: "\"Remember, {name}. If you lie to me... you know, right?\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_dain_approach": {
        name: "Dain",
        text: "\"Hey, {name}!\"",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "day3_afternoon_dain_talk"
    },
    "day3_afternoon_dain_talk": {
        name: "Dain",
        text: "\"Why didn't you include me at lunch?! I wanted to eat together too!\"",
        character: "assets/images/characters/dain_sad.png",
        sunset: true,
        next: "day3_afternoon_dain_talk_2"
    },
    "day3_afternoon_dain_talk_2": {
        name: "Me",
        character: "assets/images/characters/dain_sad.png",
        text: "(Dain pouts and complains.)",
        sunset: true,
        choices: [
            { text: "\"Sorry, let's eat together next time\"", next: "day3_afternoon_dain_sorry" },
            { text: "\"I'll come to your practice tomorrow\"", next: "day3_afternoon_dain_promise" },
            { text: "\"Cute, are you angry?\"", next: "day3_afternoon_dain_tease" }
        ]
    },
    "day3_afternoon_dain_sorry": {
        name: "Dain",
        text: "\"Hmph, you better! It's a promise!\"",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        stats: { Dain: { affinity: 5 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_dain_promise": {
        name: "Dain",
        text: "\"Really?! Then I forgive you! Look forward to my spike!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        stats: { Dain: { affinity: 8 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_dain_tease": {
        name: "Dain",
        text: "\"W-what! Cute my foot! Dummy!\"",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        stats: { Dain: { affinity: 5 } },
        next: "day3_afternoon_transition"
    },

    "day3_afternoon_normal": {
        name: "Me",
        text: "(A peaceful after school. Let me get ready to go home.)",
        sunset: true,
        next: "day3_afternoon_transition"
    },

    "day3_afternoon_transition": {
        name: "Me",
        character: null,
        text: "(As I'm about to leave through the school gate...)",
        background: "assets/images/background/school.png",
        sunset: true,
        next: "day3_afternoon_gate"
    },
    "day3_afternoon_gate": {
        name: "Me",
        background: "assets/images/background/school.png",
        text: "(Someone seems to be waiting.)",
        sunset: true,
        branches: [
            { next: "day3_afternoon_multiple_wait", condition: "day3_has_multiple_dates" },
            { next: "day3_afternoon_single_wait", condition: "day3_seoyeon_date_confirmed" },
            { next: "day3_afternoon_single_wait", condition: "day3_yuna_date_confirmed" },
            { next: "day3_afternoon_single_wait", condition: "day3_dain_date_confirmed" },
            { next: "day3_afternoon_teacher_wait", condition: "day3_teacher_date_confirmed" },
            { next: "day3_afternoon_nurse_wait", condition: "day3_nurse_date_confirmed" },
            { next: "day3_afternoon_nobody_waiting" }
        ]
    },

    "day3_afternoon_multiple_wait": {
        name: "Me",
        text: "(Uh... why is everyone at the gate...?)",
        sunset: true,
        branches: [
            { next: "day3_afternoon_multiple_scene", condition: "day3_seoyeon_date_confirmed" },
            { next: "day3_afternoon_multiple_no_seoyeon" }
        ]
    },
    "day3_afternoon_multiple_no_seoyeon": {
        name: "Me",
        text: "(Several people are standing at the school gate. Are they all waiting for me...?)",
        sunset: true,
        next: "day3_afternoon_choose_walk"
    },
    "day3_afternoon_multiple_scene": {
        name: "Seoyeon",
        text: "\"Hey, {name}! Let's walk together... huh?\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        branches: [
            { next: "day3_afternoon_three_way", condition: "day3_yuna_date_confirmed" },
            { next: "day3_afternoon_two_way_dain", condition: "day3_dain_date_confirmed" },
            { next: "day3_afternoon_seoyeon_walk" }
        ]
    },
    "day3_afternoon_three_way": {
        name: "Yuna",
        text: "\"...We meet again.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day3_afternoon_three_way_2"
    },
    "day3_afternoon_three_way_2": {
        name: "Me",
        character: "assets/images/characters/yuna_normal.png",
        text: "(Seoyeon and Yuna are glaring at each other. The atmosphere is tense.)",
        sunset: true,
        next: "day3_afternoon_choose_walk"
    },
    "day3_afternoon_two_way_dain": {
        name: "Dain",
        text: "\"Oh? Seoyeon's here too? I was gonna walk home with {name}!\"",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "day3_afternoon_choose_walk"
    },
    "day3_afternoon_choose_walk": {
        name: "Me",
        character: "assets/images/characters/yuna_normal.png",
        text: "(Who should I walk with...?)",
        sunset: true,
        choices: [
            { text: "Go with Seoyeon", next: "day3_afternoon_seoyeon_walk" },
            { text: "Go with Yuna", next: "day3_afternoon_yuna_walk", condition: "day3_yuna_date_confirmed" },
            { text: "Go with Dain", next: "day3_afternoon_dain_walk", condition: "day3_dain_date_confirmed" },
            { text: "Go alone", next: "day3_afternoon_reject_all", stats: { Seoyeon: { affinity: -5 }, Yuna: { affinity: -5 }, Dain: { affinity: -5 } } }
        ]
    },

    "day3_afternoon_seoyeon_walk": {
        name: "Me",
        character: null,
        text: "\"Seoyeon, let's go together.\"",
        sunset: true,
        stats: { Seoyeon: { affinity: 5 } },
        setFlag: "day3_walked_with_seoyeon",
        next: "day3_afternoon_seoyeon_walk_2"
    },
    "day3_afternoon_seoyeon_walk_2": {
        name: "Seoyeon",
        text: "\"Sure! Let's go!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        background: "assets/images/background/street.png",
        sunset: true,
        next: "day3_afternoon_seoyeon_walk_others"
    },
    "day3_afternoon_seoyeon_walk_others": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: "assets/images/characters/seyoun_laugh.png",
        text: "(I feel eyes on my back... but right now, walking with Seoyeon feels nice.)",
        sunset: true,
        branches: [
            { next: "day3_afternoon_seoyeon_walk_yuna_reaction", condition: "day3_yuna_date_confirmed" },
            { next: "day3_afternoon_seoyeon_walk_dain_reaction", condition: "day3_dain_date_confirmed" },
            { next: "day3_afternoon_seoyeon_talk_walk" }
        ]
    },
    "day3_afternoon_seoyeon_walk_yuna_reaction": {
        name: "Me",
        text: "(Yuna is watching us from a distance. That look... is scary.)",
        sunset: true,
        stats: { Yuna: { affinity: -8 } },
        setFlag: "day3_yuna_witnessed_seoyeon",
        next: "day3_afternoon_seoyeon_talk_walk"
    },
    "day3_afternoon_seoyeon_walk_dain_reaction": {
        name: "Dain",
        text: "\"Hmph! I'm going first!\"",
        character: "assets/images/characters/dain_sad.png",
        sunset: true,
        stats: { Dain: { affinity: -5 } },
        next: "day3_afternoon_seoyeon_talk_walk"
    },
    "day3_afternoon_seoyeon_talk_walk": {
        name: "Seoyeon",
        text: "\"...Hey, {name}. Let's take the riverside path back. The sunset is beautiful today.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        next: "day3_afternoon_seoyeon_sunset"
    },
    "day3_afternoon_seoyeon_sunset": {
        name: "Me",
        character: "assets/images/characters/seyoun_laugh.png",
        text: "(The sunset reflects off the river, sparkling. Seoyeon's face glows with an orange tint — she looks radiant.)",
        background: "assets/images/background/street.png",
        sunset: true,
        next: "day3_afternoon_seoyeon_sunset_2"
    },
    "day3_afternoon_seoyeon_sunset_2": {
        name: "Seoyeon",
        background: "assets/images/background/street.png",
        text: "(She suddenly stops and stands in front of me) \"...{name}. Can I ask you something?\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        next: "day3_afternoon_seoyeon_sunset_3"
    },
    "day3_afternoon_seoyeon_sunset_3": {
        name: "Seoyeon",
        background: "assets/images/background/street.png",
        text: "(Against the sunset backdrop, Seoyeon's eyes shine) \"Tomorrow... you'll only meet me, right?\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        choices: [
            { text: "\"Of course\"", next: "day3_afternoon_seoyeon_pinky", stats: { Seoyeon: { affinity: 8 } } },
            { text: "(Take Seoyeon's hand)", next: "day3_afternoon_seoyeon_hand", stats: { Seoyeon: { affinity: 10 } } },
            { text: "\"...I'll try\"", next: "day3_afternoon_seoyeon_try", stats: { Seoyeon: { affinity: 3 } } }
        ]
    },
    "day3_afternoon_seoyeon_pinky": {
        name: "Seoyeon",
        background: "assets/images/background/street.png",
        text: "(Seoyeon holds out her pinky finger) \"Then let's pinky promise. If you break it... you swallow ten thousand needles?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        next: "day3_afternoon_seoyeon_freetalk"
    },
    "day3_afternoon_seoyeon_hand": {
        name: "Seoyeon",
        background: "assets/images/background/street.png",
        text: "(Seoyeon's hand trembles before she grips mine tight) \"...Dummy. What if someone sees us holding hands here.\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        next: "day3_afternoon_seoyeon_freetalk"
    },
    "day3_afternoon_seoyeon_try": {
        name: "Seoyeon",
        background: "assets/images/background/street.png",
        text: "(Looking slightly disappointed, she forces a smile) \"...Okay. You'll try, right?\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        next: "day3_afternoon_seoyeon_freetalk"
    },
    "day3_afternoon_seoyeon_freetalk": {
        type: "free_talk",
        name: "Me",
        background: "assets/images/background/street.png",
        character: "assets/images/characters/seyoun_laugh.png",
        text: "(Walking alongside Seoyeon down the riverside path as the sunset deepens.)",
        sunset: true,
        context: "Walking with Seoyeon along the sunset riverside. She asked 'Will you only meet me tomorrow?' and they had a pinky promise/hand-holding moment. Sweet and romantic atmosphere.",
        maxTurns: 4,
        next: "day3_afternoon_seoyeon_talk_walk_2"
    },
    "day3_afternoon_seoyeon_talk_walk_2": {
        name: "Seoyeon",
        background: "assets/images/background/street.png",
        text: "\"It's our time together, just the two of us. Right?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        branches: [
            { next: "day3_afternoon_seoyeon_guilt", condition: "day3_has_multiple_dates" },
            { next: "day3_afternoon_seoyeon_happy" }
        ]
    },
    "day3_afternoon_seoyeon_guilt": {
        name: "Me",
        text: "(...'Just the two of us'. My other plans flash through my mind.)",
        sunset: true,
        choices: [
            { text: "\"Yeah, I'm excited too\"", next: "day3_afternoon_seoyeon_happy", stats: { Seoyeon: { affinity: 5 } } },
            { text: "\"Actually...\" (Be honest)", next: "day3_afternoon_seoyeon_confess_walk", stats: { Seoyeon: { affinity: -10 } } }
        ]
    },
    "day3_afternoon_seoyeon_happy": {
        name: "Seoyeon",
        text: "\"Hehe, me too! See you tomorrow then! Sleep well!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_seoyeon_confess_walk": {
        name: "Seoyeon",
        text: "\"...What? You have other plans too?\"",
        character: "assets/images/characters/seyoun_sad.png",
        sunset: true,
        next: "day3_afternoon_seoyeon_angry"
    },
    "day3_afternoon_seoyeon_angry": {
        name: "Seoyeon",
        text: "\"...Fine. We'll see this weekend who you really like.\"",
        character: "assets/images/characters/seyoun_sad.png",
        sunset: true,
        setFlag: "day3_seoyeon_knows_others",
        fade: true,
        next: "day3_night_start"
    },

    "day3_afternoon_yuna_walk": {
        name: "Me",
        character: "assets/images/characters/yuna_normal.png",
        text: "\"Yuna, let's walk together.\"",
        sunset: true,
        stats: { Yuna: { affinity: 5 } },
        setFlag: "day3_walked_with_yuna",
        next: "day3_afternoon_yuna_walk_2"
    },
    "day3_afternoon_yuna_walk_2": {
        name: "Yuna",
        text: "\"...Okay.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "day3_afternoon_yuna_walk_others"
    },
    "day3_afternoon_yuna_walk_others": {
        name: "Seoyeon",
        text: "\"...Okay. Be careful going home.\"",
        character: "assets/images/characters/seyoun_sad.png",
        sunset: true,
        stats: { Seoyeon: { affinity: -8 } },
        setFlag: "day3_seoyeon_witnessed_yuna",
        next: "day3_afternoon_yuna_talk_walk"
    },
    "day3_afternoon_yuna_talk_walk": {
        name: "Me",
        character: null,
        text: "(Walking with Yuna down a quiet path. She doesn't say much, but the atmosphere is comfortable.)",
        background: "assets/images/background/street.png",
        sunset: true,
        next: "day3_afternoon_yuna_cat"
    },
    "day3_afternoon_yuna_cat": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: null,
        text: "(A small cat is curled up by the roadside. Yuna suddenly stops.)",
        sunset: true,
        next: "day3_afternoon_yuna_cat_2"
    },
    "day3_afternoon_yuna_cat_2": {
        name: "Yuna",
        background: "assets/images/background/street.png",
        text: "(Quietly kneeling down to pet the cat) \"...I'm glad you're with me.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "day3_afternoon_yuna_cat_3"
    },
    "day3_afternoon_yuna_cat_3": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: "assets/images/characters/yuna_smile.png",
        text: "(The way Yuna pets the cat... she looks so gentle.)",
        sunset: true,
        choices: [
            { text: "(Pet the cat too)", next: "day3_afternoon_yuna_cat_pat", stats: { Yuna: { affinity: 3 } } },
            { text: "(Pat Yuna's head)", next: "day3_afternoon_yuna_head_pat", stats: { Yuna: { affinity: 10 } } },
            { text: "(Watch quietly)", next: "day3_afternoon_yuna_cat_watch", stats: { Yuna: { affinity: 5 } } }
        ]
    },
    "day3_afternoon_yuna_cat_pat": {
        name: "Yuna",
        background: "assets/images/background/street.png",
        text: "(Our hands meet on top of the cat) \"...Warm.\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        next: "day3_afternoon_yuna_freetalk"
    },
    "day3_afternoon_yuna_head_pat": {
        name: "Yuna",
        background: "assets/images/background/street.png",
        text: "(She freezes when I pat her head) \"...You're petting me?\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        next: "day3_afternoon_yuna_head_pat_2"
    },
    "day3_afternoon_yuna_head_pat_2": {
        name: "Yuna",
        background: "assets/images/background/street.png",
        text: "(Closing her eyes) \"...Don't stop. Just a little more.\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        next: "day3_afternoon_yuna_freetalk"
    },
    "day3_afternoon_yuna_cat_watch": {
        name: "Yuna",
        background: "assets/images/background/street.png",
        text: "(Holding the cat up) \"...This one looks like you, {name}. Warm and... clueless.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "day3_afternoon_yuna_freetalk"
    },
    "day3_afternoon_yuna_freetalk": {
        type: "free_talk",
        name: "Me",
        background: "assets/images/background/street.png",
        character: "assets/images/characters/yuna_shy.png",
        text: "(Walking side by side with Yuna. Her expression is softer than usual.)",
        sunset: true,
        context: "Walking home with Yuna after petting a cat together. Yuna's expression is softer than usual. Quiet and comfortable atmosphere.",
        maxTurns: 4,
        next: "day3_afternoon_yuna_talk_walk_2"
    },
    "day3_afternoon_yuna_talk_walk_2": {
        name: "Yuna",
        background: "assets/images/background/street.png",
        text: "\"...{name}. Don't forget tomorrow night.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day3_afternoon_yuna_talk_walk_3"
    },
    "day3_afternoon_yuna_talk_walk_3": {
        name: "Yuna",
        background: "assets/images/background/street.png",
        text: "\"School back gate. 8 PM. Don't... be late.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day3_afternoon_yuna_warning_walk"
    },
    "day3_afternoon_yuna_warning_walk": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: "assets/images/characters/yuna_normal.png",
        text: "(There's a strange pressure in Yuna's voice.)",
        sunset: true,
        choices: [
            { text: "\"I definitely won't be late\"", next: "day3_afternoon_yuna_promise_keep", stats: { Yuna: { affinity: 8 } } },
            { text: "\"What if I'm late?\"", next: "day3_afternoon_yuna_late_question" }
        ]
    },
    "day3_afternoon_yuna_promise_keep": {
        name: "Yuna",
        background: "assets/images/background/street.png",
        text: "\"...Good. I'll trust you.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_yuna_late_question": {
        name: "Yuna",
        background: "assets/images/background/street.png",
        text: "\"...That can't happen. Absolutely not.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day3_afternoon_yuna_late_warning"
    },
    "day3_afternoon_yuna_late_warning": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: "assets/images/characters/yuna_normal.png",
        text: "(Yuna's eyes seemed to flash strangely for a moment... Must be my imagination?)",
        sunset: true,
        fade: true,
        next: "day3_night_start"
    },

    "day3_afternoon_dain_walk": {
        name: "Me",
        character: null,
        text: "\"Dain, let's walk together.\"",
        sunset: true,
        stats: { Dain: { affinity: 5 } },
        setFlag: "day3_walked_with_dain",
        next: "day3_afternoon_dain_walk_2"
    },
    "day3_afternoon_dain_walk_2": {
        name: "Dain",
        text: "\"Yay! Let's go!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        stats: { Seoyeon: { affinity: -5 }, Yuna: { affinity: -5 } },
        background: "assets/images/background/street.png",
        next: "day3_afternoon_dain_talk_walk"
    },
    "day3_afternoon_dain_talk_walk": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "\"Hey, {name}! See that convenience store? I'm thirsty!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "day3_afternoon_dain_store"
    },
    "day3_afternoon_dain_store": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: "assets/images/characters/dain_laugh.png",
        text: "(Dain dashes to the convenience store. I follow and find her stopped at the ice cream section.)",
        sunset: true,
        next: "day3_afternoon_dain_store_2"
    },
    "day3_afternoon_dain_store_2": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "\"You pick for me! If I pick, I'll want to buy everything...\"",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        choices: [
            { text: "(Pick one for her)", next: "day3_afternoon_dain_ice_one", stats: { Dain: { affinity: 3 } } },
            { text: "(Buy two and share one)", next: "day3_afternoon_dain_ice_share", stats: { Dain: { affinity: 8 } } }
        ]
    },
    "day3_afternoon_dain_ice_one": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "(Taking the ice cream) \"...Thanks. {name} is the best!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "day3_afternoon_dain_park"
    },
    "day3_afternoon_dain_ice_share": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "(Her face turns red at the idea of sharing) \"Th-that's sharing?! That's an indirect kiss! N-no! It's just sharing!\"",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "day3_afternoon_dain_park"
    },
    "day3_afternoon_dain_park": {
        name: "Me",
        background: "assets/images/background/park.png",
        character: "assets/images/characters/dain_laugh.png",
        text: "(Dain and I sit side by side on a park bench nearby. We eat ice cream while watching the sunset.)",
        sunset: true,
        next: "day3_afternoon_dain_park_2"
    },
    "day3_afternoon_dain_park_2": {
        name: "Dain",
        background: "assets/images/background/park.png",
        text: "(Suddenly getting quiet) \"...{name}. Actually, I couldn't sleep last night.\"",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "day3_afternoon_dain_park_3"
    },
    "day3_afternoon_dain_park_3": {
        name: "Dain",
        background: "assets/images/background/park.png",
        text: "\"...You said you'd come to my practice tomorrow... You'll really come, right? You're not gonna stand me up?\"",
        character: "assets/images/characters/dain_sad.png",
        sunset: true,
        choices: [
            { text: "\"I would never stand you up\"", next: "day3_afternoon_dain_promise_firm", stats: { Dain: { affinity: 8 } } },
            { text: "(Pat Dain's head)", next: "day3_afternoon_dain_pat", stats: { Dain: { affinity: 10 } } }
        ]
    },
    "day3_afternoon_dain_promise_firm": {
        name: "Dain",
        background: "assets/images/background/park.png",
        text: "(Her eyes light up) \"...Really? Promise!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "day3_afternoon_dain_freetalk"
    },
    "day3_afternoon_dain_pat": {
        name: "Dain",
        background: "assets/images/background/park.png",
        text: "(Patting her head makes Dain's face turn red) \"Hey, I'm not a kid! ...But don't stop.\"",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "day3_afternoon_dain_freetalk"
    },
    "day3_afternoon_dain_freetalk": {
        type: "free_talk",
        name: "Me",
        background: "assets/images/background/park.png",
        character: "assets/images/characters/dain_laugh.png",
        text: "(Eating ice cream and chatting with Dain on a park bench.)",
        sunset: true,
        context: "Sharing ice cream with Dain on a park bench. She said 'I couldn't sleep last night' showing a serious side. She's being shy instead of her usual energetic self.",
        maxTurns: 4,
        next: "day3_afternoon_dain_talk_walk_2"
    },
    "day3_afternoon_dain_talk_walk_2": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "\"I want to show you my cool side!\"",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        choices: [
            { text: "\"Looking forward to it!\"", next: "day3_afternoon_dain_excited", stats: { Dain: { affinity: 5 } } },
            { text: "\"I'll cheer for you\"", next: "day3_afternoon_dain_cheer", stats: { Dain: { affinity: 8 } } }
        ]
    },
    "day3_afternoon_dain_excited": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "\"Great! Be prepared!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_dain_cheer": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "\"Hehe... Hearing that makes me want to work even harder!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        fade: true,
        next: "day3_night_start"
    },

    "day3_afternoon_reject_all": {
        name: "Me",
        character: "assets/images/characters/yuna_normal.png",
        text: "\"Sorry, I want to go alone today.\"",
        sunset: true,
        setFlag: "day3_walked_alone",
        next: "day3_afternoon_reject_reaction"
    },
    "day3_afternoon_reject_reaction": {
        name: "Me",
        character: "assets/images/characters/yuna_normal.png",
        text: "(Everyone's expressions harden. I can feel their disappointment.)",
        sunset: true,
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_nobody_waiting": {
        name: "Me",
        background: "assets/images/background/school.png",
        text: "(...No one's here. Must've been my imagination. Silly me for getting my hopes up.)",
        sunset: true,
        next: "day3_afternoon_alone_walk"
    },
    "day3_afternoon_alone_walk": {
        name: "Me",
        character: null,
        text: "(I head home alone. I wonder what tomorrow will bring...)",
        background: "assets/images/background/street.png",
        sunset: true,
        fade: true,
        next: "day3_night_start"
    },

    "day3_afternoon_single_wait": {
        name: "Me",
        text: "(Someone is standing in front of the gate.)",
        sunset: true,
        branches: [
            { next: "day3_afternoon_seoyeon_solo", condition: "day3_seoyeon_date_confirmed" },
            { next: "day3_afternoon_yuna_solo", condition: "day3_yuna_date_confirmed" },
            { next: "day3_afternoon_dain_solo", condition: "day3_dain_date_confirmed" }
        ]
    },
    "day3_afternoon_seoyeon_solo": {
        name: "Seoyeon",
        text: "\"{name}! Let's walk together!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "day3_afternoon_seoyeon_walk_2"
    },
    "day3_afternoon_yuna_solo": {
        name: "Yuna",
        text: "\"...I was waiting.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        stats: { Yuna: { affinity: 3 } },
        next: "day3_afternoon_yuna_talk_walk"
    },
    "day3_afternoon_dain_solo": {
        name: "Dain",
        text: "\"Hey! Hurry up! Let's walk together!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        stats: { Dain: { affinity: 3 } },
        next: "day3_afternoon_dain_talk_walk"
    },

    "day3_afternoon_teacher_wait": {
        name: "Homeroom Teacher",
        text: "\"{name}, do you have a minute? Want me to give you a ride?\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        choices: [
            { text: "\"Yes, thank you!\"", next: "day3_afternoon_teacher_ride", stats: { Teacher: { affinity: 5 } } },
            { text: "\"It's okay, I'll walk\"", next: "day3_afternoon_alone_walk" }
        ]
    },
    "day3_afternoon_teacher_ride": {
        name: "Me",
        text: "(I got in the teacher's car. The road home is bathed in sunset.)",
        character: "assets/images/characters/teacher_normal.png",
        background: "assets/images/background/street.png",
        sunset: true,
        next: "day3_afternoon_teacher_ride_2"
    },
    "day3_afternoon_teacher_ride_2": {
        name: "Homeroom Teacher",
        background: "assets/images/background/street.png",
        text: "(Driving quietly) \"...{name}. Being alone together like this... feels a bit strange.\"",
        character: "assets/images/characters/teacher_shy.png",
        sunset: true,
        next: "day3_afternoon_teacher_ride_3"
    },
    "day3_afternoon_teacher_ride_3": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: "assets/images/characters/teacher_shy.png",
        text: "(We stop at a red light. The teacher quietly touches the back of my hand.)",
        sunset: true,
        choices: [
            { text: "(Hold her hand)", next: "day3_afternoon_teacher_hold", stats: { Teacher: { affinity: 10 } } },
            { text: "\"Teacher, we shouldn't\"", next: "day3_afternoon_teacher_stop", stats: { Teacher: { affinity: -3 } } },
            { text: "(Quietly lean my head on her shoulder)", next: "day3_afternoon_teacher_lean", stats: { Teacher: { affinity: 8 } } }
        ]
    },
    "day3_afternoon_teacher_hold": {
        name: "Homeroom Teacher",
        background: "assets/images/background/street.png",
        text: "(The teacher holds her breath) \"...When the light changes, I'm letting go. Promise.\"",
        character: "assets/images/characters/teacher_shy.png",
        sunset: true,
        next: "day3_afternoon_teacher_freetalk"
    },
    "day3_afternoon_teacher_stop": {
        name: "Homeroom Teacher",
        background: "assets/images/background/street.png",
        text: "(The teacher smiles wistfully) \"...You're right. Teacher needs to come to her senses.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "day3_afternoon_teacher_freetalk"
    },
    "day3_afternoon_teacher_lean": {
        name: "Homeroom Teacher",
        background: "assets/images/background/street.png",
        text: "(Startled at first... then quietly strokes my hair) \"...The light hasn't changed yet.\"",
        character: "assets/images/characters/teacher_shy.png",
        sunset: true,
        next: "day3_afternoon_teacher_freetalk"
    },
    "day3_afternoon_teacher_freetalk": {
        type: "free_talk",
        name: "Me",
        background: "assets/images/background/street.png",
        character: "assets/images/characters/teacher_shy.png",
        text: "(Riding in the teacher's car on the way home.)",
        sunset: true,
        context: "In the homeroom teacher's car heading home. After hand-holding or leaning on her shoulder in the sunset. The sweetness and guilt of a forbidden love.",
        maxTurns: 3,
        next: "day3_afternoon_teacher_arrive"
    },
    "day3_afternoon_teacher_arrive": {
        name: "Homeroom Teacher",
        background: "assets/images/background/street.png",
        text: "(Arriving at my house) \"...You haven't forgotten our museum date on Sunday, right? I'll be looking forward to it.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_nurse_wait": {
        name: "School Nurse",
        text: "\"Oh my, {name}. I came out to leave and ran into you? Hehe.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        choices: [
            { text: "\"Shall we walk together?\"", next: "day3_afternoon_nurse_walk", stats: { Nurse: { affinity: 5 } } },
            { text: "\"Have a good evening\"", next: "day3_afternoon_alone_walk" }
        ]
    },
    "day3_afternoon_nurse_walk": {
        name: "Me",
        text: "(Walking side by side with the nurse. She glances at the back of my hand.)",
        character: "assets/images/characters/nurse_normal.png",
        background: "assets/images/background/street.png",
        sunset: true,
        next: "day3_afternoon_nurse_band"
    },
    "day3_afternoon_nurse_band": {
        name: "School Nurse",
        background: "assets/images/background/street.png",
        text: "(She suddenly takes my hand and puts a band-aid on it) \"...There's a scratch here? You didn't notice.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day3_afternoon_nurse_band_2"
    },
    "day3_afternoon_nurse_band_2": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: "assets/images/characters/nurse_normal.png",
        text: "(There's no scratch... Did she just want to hold my hand?)",
        sunset: true,
        choices: [
            { text: "\"There's no scratch though?\"", next: "day3_afternoon_nurse_caught", stats: { Nurse: { affinity: 5 } } },
            { text: "(Just hold her hand)", next: "day3_afternoon_nurse_hold", stats: { Nurse: { affinity: 10 } } }
        ]
    },
    "day3_afternoon_nurse_caught": {
        name: "School Nurse",
        background: "assets/images/background/street.png",
        text: "(Her face turns red as if caught) \"...Hmm, sharp eyes? It's just... teacher's mark.\"",
        character: "assets/images/characters/nurse_shy.png",
        sunset: true,
        next: "day3_afternoon_nurse_freetalk"
    },
    "day3_afternoon_nurse_hold": {
        name: "School Nurse",
        background: "assets/images/background/street.png",
        text: "(Surprised, she stops... then holds on tight) \"...Dangerous boy. Let's stay like this for ten seconds.\"",
        character: "assets/images/characters/nurse_shy.png",
        sunset: true,
        next: "day3_afternoon_nurse_freetalk"
    },
    "day3_afternoon_nurse_freetalk": {
        type: "free_talk",
        name: "Me",
        background: "assets/images/background/street.png",
        character: "assets/images/characters/nurse_shy.png",
        text: "(Walking home alongside the school nurse.)",
        sunset: true,
        context: "Walking home with the school nurse. She used a band-aid as an excuse to hold my hand. The thrill and tension of a forbidden love.",
        maxTurns: 3,
        next: "day3_afternoon_nurse_arrive"
    },
    "day3_afternoon_nurse_arrive": {
        name: "School Nurse",
        background: "assets/images/background/street.png",
        text: "\"Don't forget Sunday 7 PM, okay? I'll be waiting for you.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        fade: true,
        next: "day3_night_start"
    }
});
