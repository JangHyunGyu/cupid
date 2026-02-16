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
        next: "day3_afternoon_check"
    },
    "day3_afternoon_check": {
        name: "Me",
        text: "(As I pack my bag...)",
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
        next: "day3_afternoon_tension_2"
    },
    "day3_afternoon_tension_2": {
        name: "Seoyeon",
        text: "\"...{name}, can we talk for a moment?\"",
        character: "assets/images/characters/seyoun_sad.png",
        next: "day3_afternoon_confrontation"
    },
    "day3_afternoon_confrontation": {
        name: "Me",
        text: "(Seoyeon takes me to the hallway. Her expression looks serious.)",
        background: "assets/images/background/load_school.png",
        next: "day3_afternoon_confrontation_2"
    },
    "day3_afternoon_confrontation_2": {
        name: "Seoyeon",
        text: "\"About lunch... Did you really make weekend plans with all of us?\"",
        character: "assets/images/characters/seyoun_sad.png",
        next: "day3_afternoon_confrontation_3"
    },
    "day3_afternoon_confrontation_3": {
        name: "Me",
        text: "(How should I answer...)",
        choices: [
            { text: "Admit honestly", next: "day3_afternoon_admit" },
            { text: "Say different times make it okay", next: "day3_afternoon_justify" },
            { text: "Say only Seoyeon is sincere", next: "day3_afternoon_lie_seoyeon" }
        ]
    },
    "day3_afternoon_admit": {
        name: "Me",
        text: "\"...Yes. Sorry. I couldn't turn anyone down...\"",
        next: "day3_afternoon_admit_react"
    },
    "day3_afternoon_admit_react": {
        name: "Seoyeon",
        text: "\"...Thanks for being honest. But I don't like that.\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day3_afternoon_admit_react_2"
    },
    "day3_afternoon_admit_react_2": {
        name: "Seoyeon",
        text: "\"If I'm really special to you... only meet me. Otherwise, I have options too.\"",
        character: "assets/images/characters/seyoun_normal.png",
        setFlag: "day3_seoyeon_ultimatum",
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_justify": {
        name: "Me",
        text: "\"The times are all different... so I thought I could meet everyone...\"",
        next: "day3_afternoon_justify_react"
    },
    "day3_afternoon_justify_react": {
        name: "Seoyeon",
        text: "\"...Don't you see that's the problem?\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: -5 } },
        next: "day3_afternoon_justify_react_2"
    },
    "day3_afternoon_justify_react_2": {
        name: "Seoyeon",
        text: "\"...Fine. We'll see this weekend.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_lie_seoyeon": {
        name: "Me",
        text: "\"Seoyeon, you're the only one I'm sincere about. The others are just friends...\"",
        next: "day3_afternoon_lie_seoyeon_react"
    },
    "day3_afternoon_lie_seoyeon_react": {
        name: "Seoyeon",
        text: "\"...Really? Can I trust that?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 3 } },
        setFlag: "day3_promised_seoyeon_only",
        next: "day3_afternoon_lie_warning"
    },
    "day3_afternoon_lie_warning": {
        name: "Me",
        text: "(Seoyeon smiles. But... is this right? What should I tell the others?)",
        next: "day3_afternoon_transition"
    },

    "day3_afternoon_jealousy_check": {
        name: "Me",
        text: "(The atmosphere was a bit weird during lunch... It should be fine, right?)",
        next: "day3_afternoon_approach"
    },
    "day3_afternoon_approach": {
        name: "Me",
        text: "(As I stand up to pack my bag, someone approaches.)",
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
        next: "day3_afternoon_seoyeon_talk"
    },
    "day3_afternoon_seoyeon_talk": {
        name: "Seoyeon",
        text: "\"About lunch... Sorry, I think I was being sensitive.\"",
        character: "assets/images/characters/seyoun_sad.png",
        next: "day3_afternoon_seoyeon_talk_2"
    },
    "day3_afternoon_seoyeon_talk_2": {
        name: "Seoyeon",
        text: "\"But honestly... seeing you close with Yuna or Dain bothers me a little.\"",
        character: "assets/images/characters/seyoun_normal.png",
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
        stats: { Seoyeon: { affinity: 8 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_seoyeon_friend": {
        name: "Seoyeon",
        text: "\"...Right. Friends. Got it.\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: -3 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_seoyeon_tease": {
        name: "Seoyeon",
        text: "\"W-what! That's not... Ugh, forget it!\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_yuna_approach": {
        name: "Yuna",
        text: "\"...{name}.\"",
        character: "assets/images/characters/yuna_normal.png",
        background: "assets/images/background/load_school.png",
        next: "day3_afternoon_yuna_talk"
    },
    "day3_afternoon_yuna_talk": {
        name: "Yuna",
        text: "\"At lunch... you chose Seoyeon.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_afternoon_yuna_talk_2"
    },
    "day3_afternoon_yuna_talk_2": {
        name: "Me",
        text: "(Yuna's eyes are colder than usual.)",
        choices: [
            { text: "\"I'm sorry, Yuna\"", next: "day3_afternoon_yuna_apologize" },
            { text: "\"I'll spend time with you tomorrow\"", next: "day3_afternoon_yuna_promise" },
            { text: "\"Why, are you upset?\"", next: "day3_afternoon_yuna_question" }
        ]
    },
    "day3_afternoon_yuna_apologize": {
        name: "Yuna",
        text: "\"...It's okay. We have tomorrow.\"",
        character: "assets/images/characters/yuna_normal.png",
        stats: { Yuna: { affinity: 5 } },
        next: "day3_afternoon_yuna_warning"
    },
    "day3_afternoon_yuna_promise": {
        name: "Yuna",
        text: "\"...I won't forget those words.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 8 } },
        setFlag: "day3_yuna_priority_promise",
        next: "day3_afternoon_yuna_warning"
    },
    "day3_afternoon_yuna_question": {
        name: "Yuna",
        text: "\"...Upset? No. I just... wanted to confirm.\"",
        character: "assets/images/characters/yuna_normal.png",
        stats: { Yuna: { affinity: -3 } },
        next: "day3_afternoon_yuna_warning"
    },
    "day3_afternoon_yuna_warning": {
        name: "Yuna",
        text: "\"Remember, {name}. If you lie to me... you know, right?\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_dain_approach": {
        name: "Dain",
        text: "\"Hey, {name}!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_afternoon_dain_talk"
    },
    "day3_afternoon_dain_talk": {
        name: "Dain",
        text: "\"Why didn't you include me at lunch?! I wanted to eat together too!\"",
        character: "assets/images/characters/dain_sad.png",
        next: "day3_afternoon_dain_talk_2"
    },
    "day3_afternoon_dain_talk_2": {
        name: "Me",
        text: "(Dain pouts and complains.)",
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
        stats: { Dain: { affinity: 5 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_dain_promise": {
        name: "Dain",
        text: "\"Really?! Then I forgive you! Look forward to my spike!\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 8 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_dain_tease": {
        name: "Dain",
        text: "\"W-what! Cute my foot! Dummy!\"",
        character: "assets/images/characters/dain_shy.png",
        stats: { Dain: { affinity: 5 } },
        next: "day3_afternoon_transition"
    },

    "day3_afternoon_normal": {
        name: "Me",
        text: "(A peaceful after school. Let me get ready to go home.)",
        next: "day3_afternoon_transition"
    },

    "day3_afternoon_transition": {
        name: "Me",
        text: "(As I'm about to leave through the school gate...)",
        background: "assets/images/background/school.png",
        next: "day3_afternoon_gate"
    },
    "day3_afternoon_gate": {
        name: "Me",
        text: "(Someone seems to be waiting.)",
        branches: [
            { next: "day3_afternoon_multiple_wait", condition: "day3_has_multiple_dates" },
            { next: "day3_afternoon_single_wait", condition: "day3_seoyeon_date_confirmed" },
            { next: "day3_afternoon_single_wait", condition: "day3_yuna_date_confirmed" },
            { next: "day3_afternoon_single_wait", condition: "day3_dain_date_confirmed" },
            { next: "day3_afternoon_teacher_wait", condition: "day3_teacher_date_confirmed" },
            { next: "day3_afternoon_nurse_wait", condition: "day3_nurse_date_confirmed" },
            { next: "day3_afternoon_alone_walk" }
        ]
    },

    "day3_afternoon_multiple_wait": {
        name: "Me",
        text: "(Uh... why is everyone at the gate...?)",
        next: "day3_afternoon_multiple_scene"
    },
    "day3_afternoon_multiple_scene": {
        name: "Seoyeon",
        text: "\"Hey, {name}! Let's walk together... huh?\"",
        character: "assets/images/characters/seyoun_normal.png",
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
        next: "day3_afternoon_three_way_2"
    },
    "day3_afternoon_three_way_2": {
        name: "Me",
        text: "(Seoyeon and Yuna are glaring at each other. The atmosphere is tense.)",
        next: "day3_afternoon_choose_walk"
    },
    "day3_afternoon_two_way_dain": {
        name: "Dain",
        text: "\"Oh? Seoyeon's here too? I was gonna walk home with {name}!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_afternoon_choose_walk"
    },
    "day3_afternoon_choose_walk": {
        name: "Me",
        text: "(Who should I walk with...?)",
        choices: [
            { text: "Go with Seoyeon", next: "day3_afternoon_seoyeon_walk" },
            { text: "Go with Yuna", next: "day3_afternoon_yuna_walk", condition: "day3_yuna_date_confirmed" },
            { text: "Go with Dain", next: "day3_afternoon_dain_walk", condition: "day3_dain_date_confirmed" },
            { text: "Go alone", next: "day3_afternoon_reject_all", stats: { Seoyeon: { affinity: -5 }, Yuna: { affinity: -5 }, Dain: { affinity: -5 } } }
        ]
    },

    "day3_afternoon_seoyeon_walk": {
        name: "Me",
        text: "\"Seoyeon, let's go together.\"",
        stats: { Seoyeon: { affinity: 5 } },
        setFlag: "day3_walked_with_seoyeon",
        next: "day3_afternoon_seoyeon_walk_2"
    },
    "day3_afternoon_seoyeon_walk_2": {
        name: "Seoyeon",
        text: "\"Sure! Let's go!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        background: "assets/images/background/school.png",
        next: "day3_afternoon_seoyeon_walk_others"
    },
    "day3_afternoon_seoyeon_walk_others": {
        name: "Me",
        text: "(I feel eyes on my back... but right now, walking with Seoyeon feels nice.)",
        branches: [
            { next: "day3_afternoon_seoyeon_walk_yuna_reaction", condition: "day3_yuna_date_confirmed" },
            { next: "day3_afternoon_seoyeon_walk_dain_reaction", condition: "day3_dain_date_confirmed" },
            { next: "day3_afternoon_seoyeon_talk_walk" }
        ]
    },
    "day3_afternoon_seoyeon_walk_yuna_reaction": {
        name: "Me",
        text: "(Yuna is watching us from a distance. That look... is scary.)",
        stats: { Yuna: { affinity: -8 } },
        setFlag: "day3_yuna_witnessed_seoyeon",
        next: "day3_afternoon_seoyeon_talk_walk"
    },
    "day3_afternoon_seoyeon_walk_dain_reaction": {
        name: "Dain",
        text: "\"Hmph! I'm going first!\"",
        character: "assets/images/characters/dain_sad.png",
        stats: { Dain: { affinity: -5 } },
        next: "day3_afternoon_seoyeon_talk_walk"
    },
    "day3_afternoon_seoyeon_talk_walk": {
        name: "Seoyeon",
        text: "\"...Hey, {name}. Let's take the riverside path back. The sunset is beautiful today.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day3_afternoon_seoyeon_sunset"
    },
    "day3_afternoon_seoyeon_sunset": {
        name: "Me",
        text: "(The sunset reflects off the river, sparkling. Seoyeon's face glows with an orange tint — she looks radiant.)",
        background: "assets/images/background/school.png",
        next: "day3_afternoon_seoyeon_sunset_2"
    },
    "day3_afternoon_seoyeon_sunset_2": {
        name: "Seoyeon",
        text: "(She suddenly stops and stands in front of me) \"...{name}. Can I ask you something?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day3_afternoon_seoyeon_sunset_3"
    },
    "day3_afternoon_seoyeon_sunset_3": {
        name: "Seoyeon",
        text: "(Against the sunset backdrop, Seoyeon's eyes shine) \"Tomorrow... you'll only meet me, right?\"",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            { text: "\"Of course\"", next: "day3_afternoon_seoyeon_pinky", stats: { Seoyeon: { affinity: 8 } } },
            { text: "(Take Seoyeon's hand)", next: "day3_afternoon_seoyeon_hand", stats: { Seoyeon: { affinity: 10 } } },
            { text: "\"...I'll try\"", next: "day3_afternoon_seoyeon_try", stats: { Seoyeon: { affinity: 3 } } }
        ]
    },
    "day3_afternoon_seoyeon_pinky": {
        name: "Seoyeon",
        text: "(Seoyeon holds out her pinky finger) \"Then let's pinky promise. If you break it... you swallow ten thousand needles?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day3_afternoon_seoyeon_freetalk"
    },
    "day3_afternoon_seoyeon_hand": {
        name: "Seoyeon",
        text: "(Seoyeon's hand trembles before she grips mine tight) \"...Dummy. What if someone sees us holding hands here.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day3_afternoon_seoyeon_freetalk"
    },
    "day3_afternoon_seoyeon_try": {
        name: "Seoyeon",
        text: "(Looking slightly disappointed, she forces a smile) \"...Okay. You'll try, right?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day3_afternoon_seoyeon_freetalk"
    },
    "day3_afternoon_seoyeon_freetalk": {
        name: "Me",
        text: "(Walking alongside Seoyeon down the riverside path as the sunset deepens.)",
        freeTalk: { turns: 4, context: "Walking with Seoyeon along the sunset riverside. She asked 'Will you only meet me tomorrow?' and they had a pinky promise/hand-holding moment. Sweet and romantic atmosphere." },
        next: "day3_afternoon_seoyeon_talk_walk_2"
    },
    "day3_afternoon_seoyeon_talk_walk_2": {
        name: "Seoyeon",
        text: "\"It's our time together, just the two of us. Right?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        branches: [
            { next: "day3_afternoon_seoyeon_guilt", condition: "day3_has_multiple_dates" },
            { next: "day3_afternoon_seoyeon_happy" }
        ]
    },
    "day3_afternoon_seoyeon_guilt": {
        name: "Me",
        text: "(...'Just the two of us'. My other plans flash through my mind.)",
        choices: [
            { text: "\"Yeah, I'm excited too\"", next: "day3_afternoon_seoyeon_happy", stats: { Seoyeon: { affinity: 5 } } },
            { text: "\"Actually...\" (Be honest)", next: "day3_afternoon_seoyeon_confess_walk", stats: { Seoyeon: { affinity: -10 } } }
        ]
    },
    "day3_afternoon_seoyeon_happy": {
        name: "Seoyeon",
        text: "\"Hehe, me too! See you tomorrow then! Sleep well!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_seoyeon_confess_walk": {
        name: "Seoyeon",
        text: "\"...What? You have other plans too?\"",
        character: "assets/images/characters/seyoun_sad.png",
        next: "day3_afternoon_seoyeon_angry"
    },
    "day3_afternoon_seoyeon_angry": {
        name: "Seoyeon",
        text: "\"...Fine. We'll see this weekend who you really like.\"",
        character: "assets/images/characters/seyoun_sad.png",
        setFlag: "day3_seoyeon_knows_others",
        fade: true,
        next: "day3_night_start"
    },

    "day3_afternoon_yuna_walk": {
        name: "Me",
        text: "\"Yuna, let's walk together.\"",
        stats: { Yuna: { affinity: 5 } },
        setFlag: "day3_walked_with_yuna",
        next: "day3_afternoon_yuna_walk_2"
    },
    "day3_afternoon_yuna_walk_2": {
        name: "Yuna",
        text: "\"...Okay.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day3_afternoon_yuna_walk_others"
    },
    "day3_afternoon_yuna_walk_others": {
        name: "Seoyeon",
        text: "\"...Okay. Be careful going home.\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: -8 } },
        setFlag: "day3_seoyeon_witnessed_yuna",
        next: "day3_afternoon_yuna_talk_walk"
    },
    "day3_afternoon_yuna_talk_walk": {
        name: "Me",
        text: "(Walking with Yuna down a quiet path. She doesn't say much, but the atmosphere is comfortable.)",
        background: "assets/images/background/school.png",
        next: "day3_afternoon_yuna_cat"
    },
    "day3_afternoon_yuna_cat": {
        name: "Me",
        text: "(A small cat is curled up by the roadside. Yuna suddenly stops.)",
        next: "day3_afternoon_yuna_cat_2"
    },
    "day3_afternoon_yuna_cat_2": {
        name: "Yuna",
        text: "(Quietly kneeling down to pet the cat) \"...I'm glad you're with me.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day3_afternoon_yuna_cat_3"
    },
    "day3_afternoon_yuna_cat_3": {
        name: "Me",
        text: "(The way Yuna pets the cat... she looks so gentle.)",
        choices: [
            { text: "(Pet the cat too)", next: "day3_afternoon_yuna_cat_pat", stats: { Yuna: { affinity: 3 } } },
            { text: "(Pat Yuna's head)", next: "day3_afternoon_yuna_head_pat", stats: { Yuna: { affinity: 10 } } },
            { text: "(Watch quietly)", next: "day3_afternoon_yuna_cat_watch", stats: { Yuna: { affinity: 5 } } }
        ]
    },
    "day3_afternoon_yuna_cat_pat": {
        name: "Yuna",
        text: "(Our hands meet on top of the cat) \"...Warm.\"",
        character: "assets/images/characters/yuna_shy.png",
        next: "day3_afternoon_yuna_freetalk"
    },
    "day3_afternoon_yuna_head_pat": {
        name: "Yuna",
        text: "(She freezes when I pat her head) \"...You're petting me?\"",
        character: "assets/images/characters/yuna_shy.png",
        next: "day3_afternoon_yuna_head_pat_2"
    },
    "day3_afternoon_yuna_head_pat_2": {
        name: "Yuna",
        text: "(Closing her eyes) \"...Don't stop. Just a little more.\"",
        character: "assets/images/characters/yuna_shy.png",
        next: "day3_afternoon_yuna_freetalk"
    },
    "day3_afternoon_yuna_cat_watch": {
        name: "Yuna",
        text: "(Holding the cat up) \"...This one looks like you, {name}. Warm and... clueless.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day3_afternoon_yuna_freetalk"
    },
    "day3_afternoon_yuna_freetalk": {
        name: "Me",
        text: "(Walking side by side with Yuna. Her expression is softer than usual.)",
        freeTalk: { turns: 4, context: "Walking home with Yuna after petting a cat together. Yuna's expression is softer than usual. Quiet and comfortable atmosphere." },
        next: "day3_afternoon_yuna_talk_walk_2"
    },
    "day3_afternoon_yuna_talk_walk_2": {
        name: "Yuna",
        text: "\"...{name}. Don't forget tomorrow night.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_afternoon_yuna_talk_walk_3"
    },
    "day3_afternoon_yuna_talk_walk_3": {
        name: "Yuna",
        text: "\"School back gate. 8 PM. Don't... be late.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_afternoon_yuna_warning_walk"
    },
    "day3_afternoon_yuna_warning_walk": {
        name: "Me",
        text: "(There's a strange pressure in Yuna's voice.)",
        choices: [
            { text: "\"I definitely won't be late\"", next: "day3_afternoon_yuna_promise_keep", stats: { Yuna: { affinity: 8 } } },
            { text: "\"What if I'm late?\"", next: "day3_afternoon_yuna_late_question" }
        ]
    },
    "day3_afternoon_yuna_promise_keep": {
        name: "Yuna",
        text: "\"...Good. I'll trust you.\"",
        character: "assets/images/characters/yuna_smile.png",
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_yuna_late_question": {
        name: "Yuna",
        text: "\"...That can't happen. Absolutely not.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_afternoon_yuna_late_warning"
    },
    "day3_afternoon_yuna_late_warning": {
        name: "Me",
        text: "(Yuna's eyes seemed to flash strangely for a moment... Must be my imagination?)",
        fade: true,
        next: "day3_night_start"
    },

    "day3_afternoon_dain_walk": {
        name: "Me",
        text: "\"Dain, let's walk together.\"",
        stats: { Dain: { affinity: 5 } },
        setFlag: "day3_walked_with_dain",
        next: "day3_afternoon_dain_walk_2"
    },
    "day3_afternoon_dain_walk_2": {
        name: "Dain",
        text: "\"Yay! Let's go!\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Seoyeon: { affinity: -5 }, Yuna: { affinity: -5 } },
        background: "assets/images/background/school.png",
        next: "day3_afternoon_dain_talk_walk"
    },
    "day3_afternoon_dain_talk_walk": {
        name: "Dain",
        text: "\"Hey, {name}! See that convenience store? I'm thirsty!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day3_afternoon_dain_store"
    },
    "day3_afternoon_dain_store": {
        name: "Me",
        text: "(Dain dashes to the convenience store. I follow and find her stopped at the ice cream section.)",
        next: "day3_afternoon_dain_store_2"
    },
    "day3_afternoon_dain_store_2": {
        name: "Dain",
        text: "\"You pick for me! If I pick, I'll want to buy everything...\"",
        character: "assets/images/characters/dain_shy.png",
        choices: [
            { text: "(Pick one for her)", next: "day3_afternoon_dain_ice_one", stats: { Dain: { affinity: 3 } } },
            { text: "(Buy two and share one)", next: "day3_afternoon_dain_ice_share", stats: { Dain: { affinity: 8 } } }
        ]
    },
    "day3_afternoon_dain_ice_one": {
        name: "Dain",
        text: "(Taking the ice cream) \"...Thanks. {name} is the best!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day3_afternoon_dain_park"
    },
    "day3_afternoon_dain_ice_share": {
        name: "Dain",
        text: "(Her face turns red at the idea of sharing) \"Th-that's sharing?! That's an indirect kiss! N-no! It's just sharing!\"",
        character: "assets/images/characters/dain_shy.png",
        next: "day3_afternoon_dain_park"
    },
    "day3_afternoon_dain_park": {
        name: "Me",
        text: "(Dain and I sit side by side on a park bench nearby. We eat ice cream while watching the sunset.)",
        next: "day3_afternoon_dain_park_2"
    },
    "day3_afternoon_dain_park_2": {
        name: "Dain",
        text: "(Suddenly getting quiet) \"...{name}. Actually, I couldn't sleep last night.\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_afternoon_dain_park_3"
    },
    "day3_afternoon_dain_park_3": {
        name: "Dain",
        text: "\"...You said you'd come to my practice tomorrow... You'll really come, right? You're not gonna stand me up?\"",
        character: "assets/images/characters/dain_sad.png",
        choices: [
            { text: "\"I would never stand you up\"", next: "day3_afternoon_dain_promise_firm", stats: { Dain: { affinity: 8 } } },
            { text: "(Pat Dain's head)", next: "day3_afternoon_dain_pat", stats: { Dain: { affinity: 10 } } }
        ]
    },
    "day3_afternoon_dain_promise_firm": {
        name: "Dain",
        text: "(Her eyes light up) \"...Really? Promise!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day3_afternoon_dain_freetalk"
    },
    "day3_afternoon_dain_pat": {
        name: "Dain",
        text: "(Patting her head makes Dain's face turn red) \"Hey, I'm not a kid! ...But don't stop.\"",
        character: "assets/images/characters/dain_shy.png",
        next: "day3_afternoon_dain_freetalk"
    },
    "day3_afternoon_dain_freetalk": {
        name: "Me",
        text: "(Eating ice cream and chatting with Dain on a park bench.)",
        freeTalk: { turns: 4, context: "Sharing ice cream with Dain on a park bench. She said 'I couldn't sleep last night' showing a serious side. She's being shy instead of her usual energetic self." },
        next: "day3_afternoon_dain_talk_walk_2"
    },
    "day3_afternoon_dain_talk_walk_2": {
        name: "Dain",
        text: "\"I want to show you my cool side!\"",
        character: "assets/images/characters/dain_shy.png",
        choices: [
            { text: "\"Looking forward to it!\"", next: "day3_afternoon_dain_excited", stats: { Dain: { affinity: 5 } } },
            { text: "\"I'll cheer for you\"", next: "day3_afternoon_dain_cheer", stats: { Dain: { affinity: 8 } } }
        ]
    },
    "day3_afternoon_dain_excited": {
        name: "Dain",
        text: "\"Great! Be prepared!\"",
        character: "assets/images/characters/dain_laugh.png",
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_dain_cheer": {
        name: "Dain",
        text: "\"Hehe... Hearing that makes me want to work even harder!\"",
        character: "assets/images/characters/dain_laugh.png",
        fade: true,
        next: "day3_night_start"
    },

    "day3_afternoon_reject_all": {
        name: "Me",
        text: "\"Sorry, I want to go alone today.\"",
        setFlag: "day3_walked_alone",
        next: "day3_afternoon_reject_reaction"
    },
    "day3_afternoon_reject_reaction": {
        name: "Me",
        text: "(Everyone's expressions harden. I can feel their disappointment.)",
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_alone_walk": {
        name: "Me",
        text: "(I head home alone. I wonder what tomorrow will bring...)",
        background: "assets/images/background/school.png",
        fade: true,
        next: "day3_night_start"
    },

    "day3_afternoon_single_wait": {
        name: "Me",
        text: "(Someone is standing in front of the gate.)",
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
        stats: { Seoyeon: { affinity: 3 } },
        next: "day3_afternoon_seoyeon_walk_2"
    },
    "day3_afternoon_yuna_solo": {
        name: "Yuna",
        text: "\"...I was waiting.\"",
        character: "assets/images/characters/yuna_normal.png",
        stats: { Yuna: { affinity: 3 } },
        next: "day3_afternoon_yuna_talk_walk"
    },
    "day3_afternoon_dain_solo": {
        name: "Dain",
        text: "\"Hey! Hurry up! Let's walk together!\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 3 } },
        next: "day3_afternoon_dain_talk_walk"
    },

    "day3_afternoon_teacher_wait": {
        name: "Homeroom Teacher",
        text: "\"{name}, do you have a minute? Want me to give you a ride?\"",
        character: "assets/images/characters/teacher_smile.png",
        choices: [
            { text: "\"Yes, thank you!\"", next: "day3_afternoon_teacher_ride", stats: { Teacher: { affinity: 5 } } },
            { text: "\"It's okay, I'll walk\"", next: "day3_afternoon_alone_walk" }
        ]
    },
    "day3_afternoon_teacher_ride": {
        name: "Me",
        text: "(I got in the teacher's car. The road home is bathed in sunset.)",
        character: "assets/images/characters/teacher_normal.png",
        background: "assets/images/background/school.png",
        next: "day3_afternoon_teacher_ride_2"
    },
    "day3_afternoon_teacher_ride_2": {
        name: "Homeroom Teacher",
        text: "(Driving quietly) \"...{name}. Being alone together like this... feels a bit strange.\"",
        character: "assets/images/characters/teacher_shy.png",
        next: "day3_afternoon_teacher_ride_3"
    },
    "day3_afternoon_teacher_ride_3": {
        name: "Me",
        text: "(We stop at a red light. The teacher quietly touches the back of my hand.)",
        choices: [
            { text: "(Hold her hand)", next: "day3_afternoon_teacher_hold", stats: { Teacher: { affinity: 10 } } },
            { text: "\"Teacher, we shouldn't\"", next: "day3_afternoon_teacher_stop", stats: { Teacher: { affinity: -3 } } },
            { text: "(Quietly lean my head on her shoulder)", next: "day3_afternoon_teacher_lean", stats: { Teacher: { affinity: 8 } } }
        ]
    },
    "day3_afternoon_teacher_hold": {
        name: "Homeroom Teacher",
        text: "(The teacher holds her breath) \"...When the light changes, I'm letting go. Promise.\"",
        character: "assets/images/characters/teacher_shy.png",
        next: "day3_afternoon_teacher_freetalk"
    },
    "day3_afternoon_teacher_stop": {
        name: "Homeroom Teacher",
        text: "(The teacher smiles wistfully) \"...You're right. Teacher needs to come to her senses.\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "day3_afternoon_teacher_freetalk"
    },
    "day3_afternoon_teacher_lean": {
        name: "Homeroom Teacher",
        text: "(Startled at first... then quietly strokes my hair) \"...The light hasn't changed yet.\"",
        character: "assets/images/characters/teacher_shy.png",
        next: "day3_afternoon_teacher_freetalk"
    },
    "day3_afternoon_teacher_freetalk": {
        name: "Me",
        text: "(Riding in the teacher's car on the way home.)",
        freeTalk: { turns: 3, context: "In the homeroom teacher's car heading home. After hand-holding or leaning on her shoulder in the sunset. The sweetness and guilt of a forbidden love." },
        next: "day3_afternoon_teacher_arrive"
    },
    "day3_afternoon_teacher_arrive": {
        name: "Homeroom Teacher",
        text: "(Arriving at my house) \"...You haven't forgotten our museum date on Sunday, right? I'll be looking forward to it.\"",
        character: "assets/images/characters/teacher_smile.png",
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_nurse_wait": {
        name: "School Nurse",
        text: "\"Oh my, {name}. I came out to leave and ran into you? Hehe.\"",
        character: "assets/images/characters/nurse_normal.png",
        choices: [
            { text: "\"Shall we walk together?\"", next: "day3_afternoon_nurse_walk", stats: { Nurse: { affinity: 5 } } },
            { text: "\"Have a good evening\"", next: "day3_afternoon_alone_walk" }
        ]
    },
    "day3_afternoon_nurse_walk": {
        name: "Me",
        text: "(Walking side by side with the nurse. She glances at the back of my hand.)",
        character: "assets/images/characters/nurse_normal.png",
        background: "assets/images/background/school.png",
        next: "day3_afternoon_nurse_band"
    },
    "day3_afternoon_nurse_band": {
        name: "School Nurse",
        text: "(She suddenly takes my hand and puts a band-aid on it) \"...There's a scratch here? You didn't notice.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day3_afternoon_nurse_band_2"
    },
    "day3_afternoon_nurse_band_2": {
        name: "Me",
        text: "(There's no scratch... Did she just want to hold my hand?)",
        choices: [
            { text: "\"There's no scratch though?\"", next: "day3_afternoon_nurse_caught", stats: { Nurse: { affinity: 5 } } },
            { text: "(Just hold her hand)", next: "day3_afternoon_nurse_hold", stats: { Nurse: { affinity: 10 } } }
        ]
    },
    "day3_afternoon_nurse_caught": {
        name: "School Nurse",
        text: "(Her face turns red as if caught) \"...Hmm, sharp eyes? It's just... teacher's mark.\"",
        character: "assets/images/characters/nurse_shy.png",
        next: "day3_afternoon_nurse_freetalk"
    },
    "day3_afternoon_nurse_hold": {
        name: "School Nurse",
        text: "(Surprised, she stops... then holds on tight) \"...Dangerous boy. Let's stay like this for ten seconds.\"",
        character: "assets/images/characters/nurse_shy.png",
        next: "day3_afternoon_nurse_freetalk"
    },
    "day3_afternoon_nurse_freetalk": {
        name: "Me",
        text: "(Walking home alongside the school nurse.)",
        freeTalk: { turns: 3, context: "Walking home with the school nurse. She used a band-aid as an excuse to hold my hand. The thrill and tension of a forbidden love." },
        next: "day3_afternoon_nurse_arrive"
    },
    "day3_afternoon_nurse_arrive": {
        name: "School Nurse",
        text: "\"Don't forget Sunday 7 PM, okay? I'll be waiting for you.\"",
        character: "assets/images/characters/nurse_normal.png",
        fade: true,
        next: "day3_night_start"
    }
});
