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
        background: "assets/images/background/room_school.png",
        text: "(As I try to get up from my desk, I feel multiple eyes on me.)",
        branches: [
            { next: "day3_lunch_multiple_approach", condition: "day3_has_multiple_dates" },
            { next: "day3_lunch_single_approach", condition: "day3_seoyeon_date_confirmed" },
            { next: "day3_lunch_single_approach", condition: "day3_yuna_date_confirmed" },
            { next: "day3_lunch_single_approach", condition: "day3_dain_date_confirmed" },
            { next: "day3_lunch_single_approach", condition: "day3_teacher_date_confirmed" },
            { next: "day3_lunch_single_approach", condition: "day3_nurse_date_confirmed" },
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
        character: "assets/images/characters/seyoun_normal.png",
        text: "(This doesn't look good... What should I do?)",
        choices: [
            { text: "Have lunch with Seoyeon", next: "day3_lunch_choose_seoyeon" },
            { text: "Have lunch with Yuna", next: "day3_lunch_choose_yuna", condition: "day3_yuna_date_confirmed" },
            { text: "Have lunch with Dain", next: "day3_lunch_choose_dain", condition: "day3_dain_date_confirmed" },
            { text: "Suggest eating together", next: "day3_lunch_together_propose" },
            { text: "Run away to eat alone", next: "day3_lunch_escape", stats: { Seoyeon: { affinity: -3 }, Yuna: { affinity: -3 }, Dain: { affinity: -3 } } }
        ]
    },

    "day3_lunch_choose_seoyeon": {
        name: "Me",
        character: "assets/images/characters/seyoun_normal.png",
        text: "\"Seoyeon, let's go together. We had plans from yesterday, remember?\"",
        stats: { Seoyeon: { affinity: 5 } },
        setFlag: "day3_lunch_with_seoyeon",
        next: "day3_lunch_seoyeon_others_react"
    },
    "day3_lunch_seoyeon_others_react": {
        name: "Me",
        character: "assets/images/characters/seyoun_normal.png",
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
        stats: { Dain: { affinity: -5 } },
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
        background: "assets/images/background/store.png",
        character: "assets/images/characters/seyoun_normal.png",
        text: "(There's an unusual edge in Seoyeon's voice.)",
        choices: [
            { text: "\"You're the most important to me\"", next: "day3_lunch_seoyeon_reassure" },
            { text: "\"They're just friends\"", next: "day3_lunch_seoyeon_deny" },
            { text: "\"Why, are you jealous?\"", next: "day3_lunch_seoyeon_tease" }
        ]
    },
    "day3_lunch_seoyeon_reassure": {
        name: "Seoyeon",
        background: "assets/images/background/store.png",
        text: "\"...Really? I'll remember that.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 8 } },
        next: "day3_lunch_seoyeon_weekend"
    },
    "day3_lunch_seoyeon_deny": {
        name: "Seoyeon",
        background: "assets/images/background/store.png",
        text: "\"...Right, I guess so. Sorry, I said something weird.\"",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: 2 } },
        next: "day3_lunch_seoyeon_weekend"
    },
    "day3_lunch_seoyeon_tease": {
        name: "Seoyeon",
        background: "assets/images/background/store.png",
        text: "\"W-what! Who said I'm jealous! ...Maybe a little.\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day3_lunch_seoyeon_weekend"
    },
    "day3_lunch_seoyeon_weekend": {
        name: "Seoyeon",
        background: "assets/images/background/store.png",
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
            { text: "\"How about Sunday?\" (Lie)", next: "day3_lunch_seoyeon_lie", setFlag: "day3_seoyeon_sunday_promise" },
            { text: "Be honest", next: "day3_lunch_seoyeon_honest" },
            { text: "Dodge the question", next: "day3_lunch_seoyeon_dodge" }
        ]
    },
    "day3_lunch_seoyeon_lie": {
        name: "Seoyeon",
        text: "\"Really?! Then let's meet on Sunday! Can I pick where to go?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day3_lunch_seoyeon_end"
    },
    "day3_lunch_seoyeon_honest": {
        name: "Seoyeon",
        text: "\"...What? You have other plans? With who?\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: -5 } },
        next: "day3_lunch_seoyeon_honest_2"
    },
    "day3_lunch_seoyeon_honest_2": {
        name: "Me",
        character: "assets/images/characters/seyoun_sad.png",
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
        character: "assets/images/characters/seyoun_laugh.png",
        text: "(We finished lunch and sat on a bench behind the school. A gentle breeze is blowing.)",
        background: "assets/images/background/store.png",
        next: "day3_lunch_seoyeon_bench"
    },
    "day3_lunch_seoyeon_bench": {
        name: "Seoyeon",
        background: "assets/images/background/store.png",
        text: "(Quietly leaning her head on my shoulder) \"...{name}. I've been strange lately. I think about you every single day.\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day3_lunch_seoyeon_bench_2"
    },
    "day3_lunch_seoyeon_bench_2": {
        name: "Me",
        background: "assets/images/background/store.png",
        character: "assets/images/characters/seyoun_shy.png",
        text: "(The scent of shampoo from Seoyeon's hair. My heart is racing.)",
        choices: [
            { text: "(Pat Seoyeon's head)", next: "day3_lunch_seoyeon_pat", stats: { Seoyeon: { affinity: 8 } } },
            { text: "\"I feel the same way\"", next: "day3_lunch_seoyeon_same", stats: { Seoyeon: { affinity: 5 } } },
            { text: "(Stay still)", next: "day3_lunch_seoyeon_silent", stats: { Seoyeon: { affinity: 3 } } }
        ]
    },
    "day3_lunch_seoyeon_pat": {
        name: "Seoyeon",
        background: "assets/images/background/store.png",
        text: "(As I pat her head, Seoyeon buries her face) \"D-dummy... Don't do that in a place like this...\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day3_lunch_seoyeon_freetalk"
    },
    "day3_lunch_seoyeon_same": {
        name: "Seoyeon",
        background: "assets/images/background/store.png",
        text: "(Seoyeon lifts her head and looks at me) \"...Really? I'm going to remember that.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day3_lunch_seoyeon_freetalk"
    },
    "day3_lunch_seoyeon_silent": {
        name: "Seoyeon",
        background: "assets/images/background/store.png",
        text: "(Seoyeon quietly takes my hand) \"...This is nice. Just like this.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day3_lunch_seoyeon_freetalk"
    },
    "day3_lunch_seoyeon_freetalk": {
        name: "Me",
        background: "assets/images/background/store.png",
        character: "assets/images/characters/seyoun_shy.png",
        text: "(Sitting side by side with Seoyeon on the bench behind the school, chatting.)",
        freeTalk: { turns: 4, context: "Sitting with Seoyeon on a bench behind school. She leaned her head on my shoulder and confessed she thinks about me every day. Sweet atmosphere." },
        next: "day3_lunch_seoyeon_bell"
    },
    "day3_lunch_seoyeon_bell": {
        name: "Me",
        background: "assets/images/background/store.png",
        character: "assets/images/characters/seyoun_shy.png",
        text: "(The bell rings for class. Time with Seoyeon felt magically short.)",
        fade: true,
        next: "day3_afternoon_start"
    },

    "day3_lunch_choose_yuna": {
        name: "Me",
        character: null,
        text: "\"Yuna, let's go together.\"",
        stats: { Yuna: { affinity: 5 } },
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
        character: "assets/images/characters/yuna_normal.png",
        text: "(I followed Yuna to the rooftop. Yuna lays down a blanket on the floor and pulls out a lunchbox from her bag.)",
        background: "assets/images/background/top_school.png",
        next: "day3_lunch_yuna_bento"
    },
    "day3_lunch_yuna_bento": {
        name: "Yuna",
        background: "assets/images/background/top_school.png",
        text: "\"...I made it. For two.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_lunch_yuna_bento_2"
    },
    "day3_lunch_yuna_bento_2": {
        name: "Me",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/yuna_normal.png",
        text: "(Two lunch boxes placed side by side. One with a black lid, one with a pink lid. Did Yuna make these herself?)",
        choices: [
            { text: "\"You made these yourself?\"", next: "day3_lunch_yuna_bento_ask", stats: { Yuna: { affinity: 5 } } },
            { text: "(Quietly taste it)", next: "day3_lunch_yuna_bento_taste", stats: { Yuna: { affinity: 3 } } }
        ]
    },
    "day3_lunch_yuna_bento_ask": {
        name: "Yuna",
        background: "assets/images/background/top_school.png",
        text: "(Looking away) \"...You're perceptive. Throw it away if it's bad.\"",
        character: "assets/images/characters/yuna_shy.png",
        next: "day3_lunch_yuna_bento_eat"
    },
    "day3_lunch_yuna_bento_taste": {
        name: "Me",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/yuna_normal.png",
        text: "(I take a bite. Surprisingly... it's actually really good!)",
        next: "day3_lunch_yuna_bento_eat"
    },
    "day3_lunch_yuna_bento_eat": {
        name: "Yuna",
        background: "assets/images/background/top_school.png",
        text: "(Watching me eat, she smiles ever so slightly) \"...Is it good?\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day3_lunch_yuna_lap"
    },
    "day3_lunch_yuna_lap": {
        name: "Me",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/yuna_smile.png",
        text: "(After finishing the lunchbox, a gentle breeze makes me drowsy. Yuna suddenly pushes down on my shoulder.)",
        next: "day3_lunch_yuna_lap_2"
    },
    "day3_lunch_yuna_lap_2": {
        name: "Yuna",
        background: "assets/images/background/top_school.png",
        text: "\"...Lie down. On my lap.\"",
        character: "assets/images/characters/yuna_normal.png",
        choices: [
            { text: "(Lie on Yuna's lap)", next: "day3_lunch_yuna_lap_yes", stats: { Yuna: { affinity: 10 } } },
            { text: "\"It's okay, not yet...\"", next: "day3_lunch_yuna_lap_no", stats: { Yuna: { affinity: -2 } } }
        ]
    },
    "day3_lunch_yuna_lap_yes": {
        name: "Yuna",
        background: "assets/images/background/top_school.png",
        text: "(As I lie down, Yuna strokes my hair) \"...Just five minutes.\"",
        character: "assets/images/characters/yuna_shy.png",
        next: "day3_lunch_yuna_lap_talk"
    },
    "day3_lunch_yuna_lap_no": {
        name: "Yuna",
        background: "assets/images/background/top_school.png",
        text: "\"...Fine.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_lunch_yuna_talk_1"
    },
    "day3_lunch_yuna_lap_talk": {
        name: "Yuna",
        background: "assets/images/background/top_school.png",
        text: "(Quietly stroking my hair) \"...When we're like this, it feels like you're mine.\"",
        character: "assets/images/characters/yuna_shy.png",
        stats: { Yuna: { affinity: 3 } },
        next: "day3_lunch_yuna_freetalk"
    },
    "day3_lunch_yuna_freetalk": {
        name: "Me",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/yuna_shy.png",
        text: "(Lying on Yuna's lap, looking up at the sky from the rooftop, chatting.)",
        freeTalk: { turns: 4, context: "Lying on Yuna's lap on the rooftop. Yuna made a homemade lunchbox and is stroking my hair. Quiet, peaceful atmosphere." },
        next: "day3_lunch_yuna_talk_1"
    },
    "day3_lunch_yuna_talk_1": {
        name: "Yuna",
        background: "assets/images/background/top_school.png",
        text: "\"...{name}. I thought you were only nice to me.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_lunch_yuna_talk_2"
    },
    "day3_lunch_yuna_talk_2": {
        name: "Me",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/yuna_normal.png",
        text: "(There's thorns in Yuna's words.)",
        choices: [
            { text: "\"You're special to me\"", next: "day3_lunch_yuna_special" },
            { text: "\"I try to be nice to everyone\"", next: "day3_lunch_yuna_everyone" },
            { text: "\"Why do you say that?\"", next: "day3_lunch_yuna_question" }
        ]
    },
    "day3_lunch_yuna_special": {
        name: "Yuna",
        background: "assets/images/background/top_school.png",
        text: "\"...Really? Prove it. Tomorrow night.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 10 } },
        next: "day3_lunch_yuna_warning"
    },
    "day3_lunch_yuna_everyone": {
        name: "Yuna",
        background: "assets/images/background/top_school.png",
        text: "\"...I see. So I'm just one of 'everyone'.\"",
        character: "assets/images/characters/yuna_sad.png",
        stats: { Yuna: { affinity: -3 } },
        next: "day3_lunch_yuna_warning"
    },
    "day3_lunch_yuna_question": {
        name: "Yuna",
        background: "assets/images/background/top_school.png",
        text: "\"...You don't need to know. Not yet.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_lunch_yuna_warning"
    },
    "day3_lunch_yuna_warning": {
        name: "Yuna",
        background: "assets/images/background/top_school.png",
        text: "\"Remember one thing. If you betray me... you'll regret it.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_lunch_yuna_warning_2"
    },
    "day3_lunch_yuna_warning_2": {
        name: "Me",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/yuna_normal.png",
        text: "(Yuna's eyes flashed eerily for a moment... That was a joke, right?)",
        fade: true,
        next: "day3_afternoon_start"
    },

    "day3_lunch_choose_dain": {
        name: "Me",
        character: null,
        text: "\"Dain, let's go eat together.\"",
        stats: { Dain: { affinity: 5 } },
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
        background: "assets/images/background/store.png",
        text: "\"By the way... did you see Seoyeon's face just now? Totally jealous, right?\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_lunch_dain_talk_2"
    },
    "day3_lunch_dain_talk_2": {
        name: "Me",
        background: "assets/images/background/store.png",
        character: "assets/images/characters/dain_normal.png",
        text: "(Dain glances around and lowers her voice.)",
        next: "day3_lunch_dain_talk_3"
    },
    "day3_lunch_dain_talk_3": {
        name: "Dain",
        background: "assets/images/background/store.png",
        text: "\"Hey, be honest with me. Are you dating Seoyeon? Or Yuna? I know they're both interested in you.\"",
        character: "assets/images/characters/dain_normal.png",
        choices: [
            { text: "\"No, I like you\"", next: "day3_lunch_dain_confess" },
            { text: "\"We're just friends\"", next: "day3_lunch_dain_friends" },
            { text: "\"Why, are you jealous too?\"", next: "day3_lunch_dain_jealous_tease" }
        ]
    },
    "day3_lunch_dain_confess": {
        name: "Dain",
        background: "assets/images/background/store.png",
        text: "\"W-what?! Saying that out of nowhere... Geez!\"",
        character: "assets/images/characters/dain_shy.png",
        stats: { Dain: { affinity: 10 } },
        next: "day3_lunch_dain_end"
    },
    "day3_lunch_dain_friends": {
        name: "Dain",
        background: "assets/images/background/store.png",
        text: "\"Hmm~ Really? Their faces say otherwise though... Well, whatever!\"",
        character: "assets/images/characters/dain_normal.png",
        stats: { Dain: { affinity: 2 } },
        next: "day3_lunch_dain_end"
    },
    "day3_lunch_dain_jealous_tease": {
        name: "Dain",
        background: "assets/images/background/store.png",
        text: "\"Huh?! Who's jealous! I'm just curious! ...Maybe a little bothered though!\"",
        character: "assets/images/characters/dain_shy.png",
        stats: { Dain: { affinity: 5 } },
        next: "day3_lunch_dain_serious"
    },
    "day3_lunch_dain_serious": {
        name: "Dain",
        background: "assets/images/background/store.png",
        text: "(Suddenly putting down her chopsticks, quietly) \"...{name}. Let me ask you something seriously.\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_lunch_dain_serious_2"
    },
    "day3_lunch_dain_serious_2": {
        name: "Dain",
        background: "assets/images/background/store.png",
        text: "\"...What am I to you? Just a friend? Or... something else?\"",
        character: "assets/images/characters/dain_shy.png",
        next: "day3_lunch_dain_serious_choice"
    },
    "day3_lunch_dain_serious_choice": {
        name: "Me",
        background: "assets/images/background/store.png",
        character: "assets/images/characters/dain_shy.png",
        text: "(Dain's eyes are different from usual. She's serious.)",
        choices: [
            { text: "\"You're special, Dain\"", next: "day3_lunch_dain_special", stats: { Dain: { affinity: 10 } } },
            { text: "\"I'm not sure yet\"", next: "day3_lunch_dain_unsure", stats: { Dain: { affinity: 2 } } },
            { text: "\"A precious friend\"", next: "day3_lunch_dain_friend", stats: { Dain: { affinity: -5 } } }
        ]
    },
    "day3_lunch_dain_special": {
        name: "Dain",
        background: "assets/images/background/store.png",
        text: "(Her face turns beet red and she punches my arm) \"Wh-what?! Really?! My heart almost exploded, you know!\"",
        character: "assets/images/characters/dain_shy.png",
        next: "day3_lunch_dain_freetalk"
    },
    "day3_lunch_dain_unsure": {
        name: "Dain",
        background: "assets/images/background/store.png",
        text: "(Looking slightly disappointed but quickly brightening up) \"...Fine! Then I'll show you how special I can be! Just watch!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_lunch_dain_freetalk"
    },
    "day3_lunch_dain_friend": {
        name: "Dain",
        background: "assets/images/background/store.png",
        text: "(Her expression freezes for a moment before she forces a laugh) \"...Ahaha, right? A friend. Yeah, friends. Haha!\"",
        character: "assets/images/characters/dain_sad.png",
        next: "day3_lunch_dain_end"
    },
    "day3_lunch_dain_freetalk": {
        name: "Me",
        background: "assets/images/background/store.png",
        character: "assets/images/characters/dain_shy.png",
        text: "(Sitting side by side with Dain in the cafeteria, chatting. She's shier than usual.)",
        freeTalk: { turns: 3, context: "Having lunch with Dain. She asked 'What am I to you?' seriously. She's being shy instead of her usual energetic self." },
        next: "day3_lunch_dain_end"
    },
    "day3_lunch_dain_end": {
        name: "Dain",
        background: "assets/images/background/store.png",
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
            { text: "\"Of course!\"", next: "day3_lunch_dain_promise" },
            { text: "\"If I have time...\"", next: "day3_lunch_dain_maybe" }
        ]
    },
    "day3_lunch_dain_promise": {
        name: "Dain",
        text: "\"Great! Look forward to it! I'll show you my amazing spike!\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 5 } },
        fade: true,
        next: "day3_afternoon_start"
    },
    "day3_lunch_dain_maybe": {
        name: "Dain",
        text: "\"...What, if you have time? Do you have other plans?\"",
        character: "assets/images/characters/dain_sad.png",
        stats: { Dain: { affinity: -3 } },
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
        character: "assets/images/characters/seyoun_normal.png",
        text: "\"C-can't we all eat together?\"",
        next: "day3_lunch_together_react"
    },
    "day3_lunch_together_react": {
        name: "Me",
        character: "assets/images/characters/seyoun_normal.png",
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
        character: "assets/images/characters/seyoun_normal.png",
        text: "(Lunch in the cafeteria. The atmosphere is strangely tense.)",
        background: "assets/images/background/store.png",
        next: "day3_lunch_together_3"
    },
    "day3_lunch_together_3": {
        name: "Dain",
        background: "assets/images/background/store.png",
        text: "\"Hey, {name}. You're coming to see my volleyball practice tomorrow, right?\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_lunch_together_4"
    },
    "day3_lunch_together_4": {
        name: "Seoyeon",
        background: "assets/images/background/store.png",
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
        character: "assets/images/characters/yuna_normal.png",
        text: "(The air freezes rapidly. All eyes are on me.)",
        stats: { Seoyeon: { affinity: -5 }, Yuna: { affinity: -5 }, Dain: { affinity: -5 } },
        setFlag: "day3_caught_multiple_dates",
        next: "day3_lunch_together_silence"
    },
    "day3_lunch_together_silence": {
        name: "Me",
        character: "assets/images/characters/yuna_normal.png",
        text: "(A suffocating silence fills the air. Seoyeon's hands are trembling, Yuna's eyes darken, and Dain's expression hardens.)",
        next: "day3_lunch_together_seoyeon_react"
    },
    "day3_lunch_together_seoyeon_react": {
        name: "Seoyeon",
        text: "(Slowly putting down her spoon) \"...So. I wasn't the only special one.\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: -3 } },
        next: "day3_lunch_together_yuna_lie"
    },
    "day3_lunch_together_yuna_lie": {
        name: "Yuna",
        text: "(Standing up) \"...I knew. That {name} didn't only promise me.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_lunch_together_yuna_lie_2"
    },
    "day3_lunch_together_yuna_lie_2": {
        name: "Dain",
        text: "\"Huh? Really? Then why did you come knowing that?!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_lunch_together_yuna_lie_3"
    },
    "day3_lunch_together_yuna_lie_3": {
        name: "Yuna",
        text: "(Looking at me coldly) \"...That was a lie. I didn't know either. I just... didn't want to cry in front of the others.\"",
        character: "assets/images/characters/yuna_sad.png",
        stats: { Yuna: { affinity: -3 } },
        setFlag: "day3_yuna_lied",
        next: "day3_lunch_together_confront"
    },
    "day3_lunch_together_confront": {
        name: "Seoyeon",
        text: "\"Wait... {name}, did you make promises with all of us?\"",
        character: "assets/images/characters/seyoun_sad.png",
        choices: [
            { text: "Apologize honestly", next: "day3_lunch_apologize", stats: { Seoyeon: { affinity: -8 }, Yuna: { affinity: -8 }, Dain: { affinity: -8 } } },
            { text: "Make excuses about different times", next: "day3_lunch_excuse", stats: { Seoyeon: { affinity: -15 }, Yuna: { affinity: -15 }, Dain: { affinity: -15 } } },
            { text: "Run away", next: "day3_lunch_run", stats: { Seoyeon: { affinity: -20 }, Yuna: { affinity: -20 }, Dain: { affinity: -20 } } }
        ]
    },
    "day3_lunch_apologize": {
        name: "Me",
        character: "assets/images/characters/seyoun_sad.png",
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
        character: "assets/images/characters/seyoun_sad.png",
        text: "\"Well, the times are all different... Dain's in the morning, others in the evening...\"",
        next: "day3_lunch_excuse_react"
    },
    "day3_lunch_excuse_react": {
        name: "Seoyeon",
        text: "\"That's not the problem... Ugh, I don't know. I'm confused too.\"",
        character: "assets/images/characters/seyoun_sad.png",
        next: "day3_lunch_excuse_react_2"
    },
    "day3_lunch_excuse_react_2": {
        name: "Dain",
        text: "\"Hmm... can't you just manage your time well? I'm fine with it.\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_lunch_excuse_react_3"
    },
    "day3_lunch_excuse_react_3": {
        name: "Yuna",
        text: "\"...Someone like you might be fine with that. But I... (stands up) I'm leaving first.\"",
        character: "assets/images/characters/yuna_sad.png",
        stats: { Yuna: { affinity: -5 } },
        setFlag: "day3_yuna_hurt",
        next: "day3_lunch_together_end"
    },
    "day3_lunch_run": {
        name: "Me",
        character: "assets/images/characters/seyoun_sad.png",
        text: "(I hurriedly finished my food and escaped. That was the worst choice.)",
        setFlag: "day3_lunch_escaped",
        fade: true,
        next: "day3_afternoon_start"
    },
    "day3_lunch_together_end": {
        name: "Me",
        character: "assets/images/characters/dain_normal.png",
        text: "(Lunch ended in an awkward atmosphere. I'm worried about the weekend...)",
        fade: true,
        next: "day3_afternoon_start"
    },

    "day3_lunch_escape": {
        name: "Me",
        character: "assets/images/characters/seyoun_normal.png",
        text: "\"Oh, I just remembered something I need to do! See you later!\"",
        setFlag: "day3_lunch_escaped",
        next: "day3_lunch_escape_2"
    },
    "day3_lunch_escape_2": {
        name: "Me",
        character: "assets/images/characters/seyoun_normal.png",
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
            { text: "Visit the nurse's office", next: "day3_lunch_nurse", condition: "day3_nurse_date_confirmed" },
            { text: "Find the homeroom teacher", next: "day3_lunch_teacher", condition: "day3_teacher_date_confirmed" },
            { text: "Eat alone", next: "day3_lunch_alone" }
        ]
    },
    "day3_lunch_nurse": {
        name: "Me",
        text: "(I headed to the nurse's office during lunch. The teacher is eating a sandwich at her desk.)",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/nurse_normal.png",
        setFlag: "day3_lunch_with_nurse",
        next: "day3_lunch_nurse_2"
    },
    "day3_lunch_nurse_2": {
        name: "School Nurse",
        background: "assets/images/background/room_school.png",
        text: "(Beaming when she sees me) \"Oh my, {name}! Have you eaten? Want to eat with teacher?\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 5 } },
        next: "day3_lunch_nurse_3"
    },
    "day3_lunch_nurse_3": {
        name: "School Nurse",
        background: "assets/images/background/room_school.png",
        text: "(Locking the door) \"Actually... I wanted some time alone with you. Watching out for the kids is exhausting.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day3_lunch_nurse_freetalk"
    },
    "day3_lunch_nurse_freetalk": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/nurse_normal.png",
        text: "(Having lunch together in the nurse's office. My heart races at the secretive atmosphere.)",
        freeTalk: { turns: 3, context: "Having lunch alone with the school nurse in her office. She locked the door. It feels like a secret date. The thrill of a forbidden love." },
        next: "day3_lunch_nurse_4"
    },
    "day3_lunch_nurse_4": {
        name: "School Nurse",
        background: "assets/images/background/room_school.png",
        text: "(Glancing at the clock with a sigh) \"...Time's up. Get to class. See you Sunday.\"",
        character: "assets/images/characters/nurse_shy.png",
        stats: { Nurse: { affinity: 3 } },
        fade: true,
        next: "day3_afternoon_start"
    },
    "day3_lunch_teacher": {
        name: "Me",
        text: "(I visited the teachers' office during lunch. The teacher is having coffee alone.)",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/teacher_normal.png",
        setFlag: "day3_lunch_with_teacher",
        next: "day3_lunch_teacher_2"
    },
    "day3_lunch_teacher_2": {
        name: "Homeroom Teacher",
        background: "assets/images/background/room_school.png",
        text: "(Surprised to see me, then brightening up) \"...{name}? What brings you here? It's my lunch break...\"",
        character: "assets/images/characters/teacher_shy.png",
        stats: { Teacher: { affinity: 5 } },
        next: "day3_lunch_teacher_3"
    },
    "day3_lunch_teacher_3": {
        name: "Homeroom Teacher",
        background: "assets/images/background/room_school.png",
        text: "(Blushing) \"...Come in. Close the door.\"",
        character: "assets/images/characters/teacher_shy.png",
        next: "day3_lunch_teacher_freetalk"
    },
    "day3_lunch_teacher_freetalk": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/teacher_shy.png",
        text: "(Having lunch with the homeroom teacher in the teachers' office.)",
        freeTalk: { turns: 3, context: "Having lunch alone with the homeroom teacher in her office. She shyly closed the door. Secret date atmosphere." },
        next: "day3_lunch_teacher_4"
    },
    "day3_lunch_teacher_4": {
        name: "Homeroom Teacher",
        background: "assets/images/background/room_school.png",
        text: "(Putting down her coffee cup) \"...This shouldn't be happening. A student coming to spend lunch with a teacher, and the teacher enjoying it. Does that even make sense?\"",
        character: "assets/images/characters/teacher_shy.png",
        stats: { Teacher: { affinity: 3 } },
        fade: true,
        next: "day3_afternoon_start"
    },
    "day3_lunch_seoyeon_only": {
        name: "Seoyeon",
        text: "\"{name}! Let's eat together!\"",
        character: "assets/images/characters/seyoun_laugh.png",
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
        background: "assets/images/background/store.png",
        text: "(I hear laughter around me. Everyone looks happy with their friends.)",
        next: "day3_lunch_alone"
    },
    "day3_lunch_alone": {
        name: "Me",
        background: "assets/images/background/store.png",
        text: "(I quietly ate lunch alone. What should I do this weekend...)",
        fade: true,
        next: "day3_afternoon_start"
    }
});
