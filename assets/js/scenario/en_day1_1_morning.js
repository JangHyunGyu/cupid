if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "start": {
        name: "Me",
        text: "(Warm sunlight... Today is my first day at this school. I'm a bit nervous.)",
        background: "assets/images/background/school.png",
        bgm: "intro.mp3",
        character: null,
        next: "start_2"
    },
    "start_2": {
        name: "Me",
        text: "(An unfamiliar uniform, an unfamiliar scenery... But somehow I feel like something good is going to happen.)",
        next: "start_3"
    },
    "start_3": {
        name: "Me",
        text: "(Alright, let's go. It's a new beginning.)",
        next: "name_input_scene"
    },
    "name_input_scene": {
        type: "input",
        name: "System",
        text: "Transfer student, what's your name?",
        next: "start_4"
    },
    "start_4": {
        name: "???",
        text: "\"Hello? I haven't seen you before. Are you... {name}, the new transfer student?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "intro_1"
    },
    "intro_1": {
        name: "Me",
        text: "(A girl approaches me with a bright smile. A subtle scent of shampoo tickles my nose.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "intro_2"
    },
    "intro_2": {
        name: "Me",
        text: "(When our eyes meet, my heart skips a beat. She's so pretty...)",
        next: "intro_3"
    },
    "intro_3": {
        name: "Seoyeon",
        text: "\"I'm Seoyeon, the student council president. The teacher asked me to come greet you. Nice to meet you!\"",
        setFlags: ["met_seoyeon", "knows_name_seoyeon"],
        choices: [
            { text: "Nice to meet you too! This school is really beautiful.", next: "path_friendly_1", stats: { Seoyeon: { affinity: 3 } } },
            { text: "Wow... You're really pretty.", next: "path_blush_1", stats: { Seoyeon: { affinity: 10 } } },
            { text: "Is it even allowed for a student council president to be this pretty? That's cheating!", next: "path_tease_1", stats: { Seoyeon: { affinity: 7 } } },
            { text: "(Stare at her blankly, dazzled by her beauty.)", next: "path_silent_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Oh, okay? Can you move aside?", next: "path_rude_1", stats: { Seoyeon: { affinity: -30 } } }
        ]
    },
    "path_rude_1": {
        name: "Seoyeon",
        text: "(Seoyeon's eyes widen, and she bites her lower lip.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "path_rude_1_2"
    },
    "path_rude_1_2": {
        name: "Seoyeon",
        text: "\"Oh... Sorry. I must have been in your way. But guiding you is my job, so... follow me.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_1"
    },
    "path_friendly_1": {
        name: "Seoyeon",
        text: "(When she smiles brightly, the whole area seems to light up. My tension eases a bit.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "path_friendly_1_2"
    },
    "path_friendly_1_2": {
        name: "Seoyeon",
        text: "\"Hehe, right? It can be a bit confusing at first. I'll be your perfect guide. Come on, follow me!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_1"
    },
    "path_tease_1": {
        name: "Seoyeon",
        text: "(Her eyes widen, then she playfully winks at me.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "path_tease_1_2"
    },
    "path_tease_1_2": {
        name: "Seoyeon",
        text: "\"Oh my, flirting on the first day? I'll give you a passing grade. So, shall our 'special' transfer student follow me?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_1"
    },
    "path_blush_1": {
        name: "Seoyeon",
        text: "(Seoyeon's face instantly turns red. She avoids my gaze and plays with her hair.)",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "path_blush_1_2"
    },
    "path_blush_1_2": {
        name: "Seoyeon",
        text: "\"Th-that was so sudden... That's cheating. Anyway, transfer students these days... Just follow me!\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "hallway_1"
    },
    "path_silent_1": {
        name: "Seoyeon",
        text: "(She tilts her head and leans closer to my face. I can almost feel her breath.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "path_silent_1_2"
    },
    "path_silent_1_2": {
        name: "Seoyeon",
        text: "\"Hmm? What's wrong? Your face is really red... Did you already fall for me? Hehe.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_1"
    },
    "hallway_1": {
        name: "Seoyeon",
        text: "(I follow Seoyeon down the hallway. The lively voices of students can be heard through the windows.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_back.png",
        next: "hallway_name_ask"
    },
    "hallway_name_ask": {
        name: "Seoyeon",
        text: "(Seoyeon suddenly stops and turns to me.) \"Oh, come to think of it, I said your name first earlier. It's {name}, right? Let me introduce myself properly this time!\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_name_share"
    },
    "hallway_name_share": {
        name: "Me",
        text: "\"Yeah, that's right. I'm {name}. I was so distracted earlier that I couldn't introduce myself properly. Nice to meet you, Seoyeon.\"",
        setFlag: "knows_name_seoyeon",
        next: "hallway_name_share_2"
    },
    "hallway_name_share_2": {
        name: "Seoyeon",
        text: "\"{name}... Hehe, that's a nice name! I'll call you {name} from now on. Nice to meet you too, {name}!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_1_2"
    },
    "hallway_1_2": {
        name: "Seoyeon",
        text: "(I walk down the hallway, watching her from behind.)",
        character: "assets/images/characters/seyoun_back.png",
        next: "hallway_free_talk"
    },
    "hallway_free_talk": {
        type: "free_talk",
        name: "Seoyeon",
        text: "\"Oh, come to think of it, we only exchanged names and didn't really talk! If you have any questions, feel free to ask!\"",
        context: "Walking through the school hallway together with the transfer student protagonist, having a light conversation. Keep the conversation going until it naturally concludes. When the conversation ends, Seoyeon will start showing the protagonist around the school facilities. In the final turn only, mention that you'll start moving or begin the tour.",
        personality: "Kind, caring, and responsible student council president. She's developing feelings for the protagonist.",
        character: "assets/images/characters/seyoun_normal.png",
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 15, next: "hallway_1_3_high" },
            { minAffinity: 0, next: "hallway_1_3" },
            { minAffinity: -999, next: "hallway_1_3_low" }
        ],
        next: "hallway_1_3"
    },
    "hallway_1_3_high": {
        name: "Me",
        text: "(Before I knew it, chatting with Seoyeon has led us to the school tour. Time flies so fast... It's fun being with her.)",
        character: "assets/images/characters/seyoun_laugh.png",
        choices: [
            { 
                text: "The school is nice, but it looks even better because of the person showing me around.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_flatter_high" },
                    { minAffinity: 0, next: "hallway_talk_flatter_normal" },
                    { minAffinity: -999, next: "hallway_talk_flatter_low" }
                ]
            },
            { 
                text: "Seoyeon... You're like a goddess. Just hearing your voice heals me.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_trap_high" },
                    { minAffinity: 0, next: "hallway_talk_trap_normal" },
                    { minAffinity: -999, next: "hallway_talk_trap_low" }
                ]
            },
            { 
                text: "(Pretend to listen to her explanation while sneaking glances at her profile.)", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_listen_high" },
                    { minAffinity: 0, next: "hallway_talk_listen_normal" },
                    { minAffinity: -999, next: "hallway_talk_listen_low" }
                ]
            }
        ]
    },
    "hallway_1_3_low": {
        name: "Me",
        text: "(Seoyeon's expression doesn't look good. I must have made some mistake during our conversation. She started the school tour with a cold attitude.)",
        character: "assets/images/characters/seyoun_pout.png",
        choices: [
            { 
                text: "The school is really lively. Do you do any club activities, Seoyeon?", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_club_high" },
                    { minAffinity: 0, next: "hallway_talk_club_normal" },
                    { minAffinity: -999, next: "hallway_talk_club_low" }
                ]
            },
            { 
                text: "The facilities are nice, but it looks even better because of the person showing me around.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_flatter_high" },
                    { minAffinity: 0, next: "hallway_talk_flatter_normal" },
                    { minAffinity: -999, next: "hallway_talk_flatter_low" }
                ]
            },
            { 
                text: "Oh my, Seoyeon... You're like a goddess. Just hearing your voice makes me feel like I'm in heaven.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_trap_high" },
                    { minAffinity: 0, next: "hallway_talk_trap_normal" },
                    { minAffinity: -999, next: "hallway_talk_trap_low" }
                ]
            },
            { 
                text: "(Quietly listen to her explanation while walking.)", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_listen_high" },
                    { minAffinity: 0, next: "hallway_talk_listen_normal" },
                    { minAffinity: -999, next: "hallway_talk_listen_low" }
                ]
            }
        ]
    },
    "hallway_1_3": {
        name: "Me",
        text: "(I started walking down the hallway with Seoyeon's guidance. She kindly began explaining various parts of the school.)",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { 
                text: "The school is really lively. Do you do any club activities, Seoyeon?", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_club_high" },
                    { minAffinity: 0, next: "hallway_talk_club_normal" },
                    { minAffinity: -999, next: "hallway_talk_club_low" }
                ]
            },
            { 
                text: "The facilities are nice, but it looks even better because of the person showing me around.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_flatter_high" },
                    { minAffinity: 0, next: "hallway_talk_flatter_normal" },
                    { minAffinity: -999, next: "hallway_talk_flatter_low" }
                ]
            },
            { 
                text: "Oh my, Seoyeon... You're like a goddess. Just hearing your voice makes me feel like I'm in heaven.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_trap_high" },
                    { minAffinity: 0, next: "hallway_talk_trap_normal" },
                    { minAffinity: -999, next: "hallway_talk_trap_low" }
                ]
            },
            { 
                text: "(Quietly listen to her explanation while walking.)", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_listen_high" },
                    { minAffinity: 0, next: "hallway_talk_listen_normal" },
                    { minAffinity: -999, next: "hallway_talk_listen_low" }
                ]
            }
        ]
    },
    "hallway_talk_trap_high": {
        name: "Seoyeon",
        text: "(Seoyeon stops as if flustered and stares at me. Her face turns slightly red, but soon she gives a playful smile.)",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 7 } },
        next: "hallway_talk_trap_high_2"
    },
    "hallway_talk_trap_high_2": {
        name: "Seoyeon",
        text: "\"Oh my, {name}, are you the type to judge people by their looks? Hehe, but thank you. A goddess... I'm a bit happy. But don't go too far with the jokes!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_2"
    },
    "hallway_talk_trap_low": {
        name: "Seoyeon",
        text: "(Seoyeon stops without hiding her displeasure. Her eyes have gone cold.)",
        character: "assets/images/characters/seyoun_angry.png",
        stats: { Seoyeon: { affinity: -10 } },
        next: "hallway_talk_trap_low_2"
    },
    "hallway_talk_trap_low_2": {
        name: "Seoyeon",
        text: "\"Well... I know it's a compliment, but... isn't it a bit much? We just met. Please keep the jokes appropriate.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_2"
    },
    "hallway_talk_trap_normal": {
        name: "Seoyeon",
        text: "(Seoyeon stops as if flustered and stares at me. Her eyes turn a bit cold.)",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -5 } },
        next: "hallway_talk_trap_normal_2"
    },
    "hallway_talk_trap_normal_2": {
        name: "Seoyeon",
        text: "\"Hmm... Well, thanks, but... that kind of talk makes me uncomfortable. We haven't known each other long, right? The joke seems a bit too much.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_2"
    },
    "hallway_talk_club_high": {
        name: "Seoyeon",
        text: "(Her eyes sparkle with excitement as she looks at me. There's anticipation that we might share similar interests.)",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "hallway_talk_club_high_2"
    },
    "hallway_talk_club_high_2": {
        name: "Seoyeon",
        text: "\"Yeah! I'm in the student council, but I'm also in the gardening club. I love growing flowers. Do you like flowers, {name}? Come visit our greenhouse sometime! I'll give you a special tour.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_2"
    },
    "hallway_talk_club_low": {
        name: "Seoyeon",
        text: "(She nods with a businesslike attitude. There's no emotion on her face.)",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: -2 } },
        next: "hallway_talk_club_low_2"
    },
    "hallway_talk_club_low_2": {
        name: "Seoyeon",
        text: "\"Yeah. I'm in both the student council and gardening club. Is that all you wanted to ask? Then let's continue the tour.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_2"
    },
    "hallway_talk_club_normal": {
        name: "Seoyeon",
        text: "(She looks at me with delight.)",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "hallway_talk_club_normal_2"
    },
    "hallway_talk_club_normal_2": {
        name: "Seoyeon",
        text: "\"Yeah! I'm in the student council, but I'm also in the gardening club. I love growing flowers. Working with soil makes me feel at peace. Come visit our greenhouse sometime!\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_2"
    },
    "hallway_talk_flatter_high": {
        name: "Seoyeon",
        text: "(Seoyeon blushes with genuine happiness and smiles shyly. Her eyes are full of affection for me.)",
        character: "assets/images/characters/seyoun_shy2.png",
        stats: { Seoyeon: { affinity: 8 } },
        next: "hallway_talk_flatter_high_2"
    },
    "hallway_talk_flatter_high_2": {
        name: "Seoyeon",
        text: "\"Really... How do you say such sweet things? I was worried about whether you'd adjust well as a transfer student, but I feel comforted instead. Thank you, {name}. I feel really at ease when I'm with you.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_2"
    },
    "hallway_talk_flatter_low": {
        name: "Seoyeon",
        text: "(She looks at me coldly. The corner of her mouth is slightly twisted as if mocking.)",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -5 } },
        next: "hallway_talk_flatter_low_2"
    },
    "hallway_talk_flatter_low_2": {
        name: "Seoyeon",
        text: "\"You have a smooth way with words. Save the generic compliments. Right now, we're on a school tour, so just follow along.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_2"
    },
    "hallway_talk_flatter_normal": {
        name: "Seoyeon",
        text: "(She replies while blushing shyly.)",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "hallway_talk_flatter_normal_2"
    },
    "hallway_talk_flatter_normal_2": {
        name: "Seoyeon",
        text: "\"Really... You have such a nice way with words. Being the student council president, I'm always tense, but when I'm with you, I feel relaxed. I might end up wanting to act spoiled... Hehe, just kidding.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_2"
    },
    "hallway_talk_listen_high": {
        name: "Seoyeon",
        text: "(She continues her explanation excitedly with sparkling eyes. She seems happy with my every reaction.)",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "hallway_talk_listen_high_2"
    },
    "hallway_talk_listen_high_2": {
        name: "Seoyeon",
        text: "\"Wow, I'm so touched that you're listening so seriously! {name}, you seem like a really kind and diligent person. It feels rewarding to guide you! If you have any more questions, feel free to ask!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_2"
    },
    "hallway_talk_listen_low": {
        name: "Seoyeon",
        text: "(She continues her explanation mechanically. It feels like she's speaking to the air without even looking at me.)",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: -5 } },
        next: "hallway_talk_listen_low_2"
    },
    "hallway_talk_listen_low_2": {
        name: "Seoyeon",
        text: "\"Did you catch all that? Then let's move to the next place. Don't just stand there spacing out, follow me.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_2"
    },
    "hallway_talk_listen_normal": {
        name: "Seoyeon",
        text: "(She continues her explanation excitedly.)",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 2 } },
        next: "hallway_talk_listen_normal_2"
    },
    "hallway_talk_listen_normal_2": {
        name: "Seoyeon",
        text: "\"Thank you for listening so well. {name}, you seem like a really diligent person! With that attitude, you'll adjust to school life in no time.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_2"
    },
    "hallway_2": {
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 0, next: "hallway_2_normal" },
            { minAffinity: -100, next: "hallway_2_low" }
        ],
        next: "hallway_2_normal"
    },
    "hallway_2_normal": {
        name: "Seoyeon",
        text: "(She suddenly stops and turns to me.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_2_2"
    },
    "hallway_2_low": {
        name: "Seoyeon",
        text: "(Seoyeon, who was walking ahead, suddenly stops and turns to me with cold eyes.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_2_2_low"
    },
    "hallway_2_2_low": {
        name: "Seoyeon",
        text: "(I can feel the distance in her gaze.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_2_3_low"
    },
    "hallway_2_3_low": {
        name: "Seoyeon",
        text: "\"Acting like that on your first day of transfer will be troublesome. I'd appreciate it if you kept at least basic manners.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_2_2"
    },
    "hallway_2_2": {
        name: "Seoyeon",
        text: "(She stares intently into my eyes.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_2_3"
    },
    "hallway_2_3": {
        name: "Seoyeon",
        text: "\"What kind of clubs are you interested in? The student council always welcomes new talent. If you join... I could personally teach you the work.\"",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "If I join the student council, I can be with you every day? Then I'll definitely apply!", next: "path_flirt_2", stats: { Seoyeon: { affinity: 5 } } },
            { text: "More than clubs... I want to know more about you, Seoyeon.", next: "path_direct_2", stats: { Seoyeon: { affinity: 6 } } },
            { text: "I'm not sure yet. I'll decide after adjusting to school life.", next: "path_normal_2", stats: { Seoyeon: { affinity: -10 } } },
            { text: "Clubs are such a hassle... I'd rather be alone.", next: "path_rude_2", stats: { Seoyeon: { affinity: -40 } } }
        ]
    },
    "path_rude_2": {
        name: "Seoyeon",
        text: "(She can't hide her disappointment. Her shoulders seem to droop a little.)",
        character: "assets/images/characters/seyoun_pout.png",
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "classroom_1_1_high" },
            { minAffinity: 0, next: "classroom_1_1" },
            { minAffinity: -100, next: "classroom_1_1_low" }
        ],
        next: "classroom_1_1"
    },
    "path_flirt_2": {
        name: "Seoyeon",
        text: "(Seoyeon's face turns red again. She avoids my gaze in embarrassment, but a faint smile spreads across her lips. Her fingertips fidget with her skirt. She shyly taps the floor with her toe.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "path_flirt_2_2"
    },
    "path_flirt_2_2": {
        name: "Seoyeon",
        text: "\"E-every day? Do you know how much work there is! But if you join... I might be a little happy too. I'll be looking forward to it.\"",
        character: "assets/images/characters/seyoun_shy.png",
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "classroom_1_1_high" },
            { minAffinity: 0, next: "classroom_1_1" },
            { minAffinity: -100, next: "classroom_1_1_low" }
        ],
        next: "classroom_1_1"
    },
    "path_normal_2": {
        name: "Seoyeon",
        text: "(She nods and starts walking ahead again. I feel a bit of regret.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_back.png",
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "classroom_1_1_high" },
            { minAffinity: 0, next: "classroom_1_1" },
            { minAffinity: -100, next: "classroom_1_1_low" }
        ],
        next: "classroom_1_1"
    },
    "path_direct_2": {
        name: "Seoyeon",
        text: "(She stares at me blankly, then bursts into a clear, beautiful laugh. The sound echoes through the hallway like silver bells. Small tears at the corner of her eyes sparkle in the sunlight. She holds her stomach and laughs for a while...)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "path_direct_2_2"
    },
    "path_direct_2_2": {
        name: "Seoyeon",
        text: "\"Hehe, you're really honest, aren't you? About me... Well, I might tell you depending on how things go from here. Look forward to it!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "classroom_1_1_high" },
            { minAffinity: 0, next: "classroom_1_1" },
            { minAffinity: -100, next: "classroom_1_1_low" }
        ],
        next: "classroom_1_1"
    },
    "classroom_1_1_high": {
        name: "Seoyeon",
        text: "(When we arrive at the classroom door, Seoyeon gently takes my hand. My heart starts pounding at her soft touch.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_shy.png",
        next: "classroom_1_2_high"
    },
    "classroom_1_2_high": {
        name: "Seoyeon",
        text: "(Seoyeon lowers her head slightly and whispers in my ear. Her sweet breath tickles me.) \"{name}, don't be too nervous. I'll always be by your side. You can do it.\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "classroom_1_3_high"
    },
    "classroom_1_3_high": {
        name: "Seoyeon",
        text: "\"Here's our classroom. ...This is a secret, but I asked the teacher to move you to the seat next to mine. I wanted to get close to you as soon as possible.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "classroom_2"
    },
    "classroom_1_1_low": {
        name: "Seoyeon",
        text: "(When we arrive at the classroom door, Seoyeon walks ahead of me, keeping her distance. Her back somehow feels cold.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_back.png",
        next: "classroom_1_2_low"
    },
    "classroom_1_2_low": {
        name: "Seoyeon",
        text: "(She silently points at the sign next to the door with her chin. Her attitude of not even looking at me makes my heart feel cold.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "classroom_1_3_low"
    },
    "classroom_1_3_low": {
        name: "Seoyeon",
        text: "\"This is Class 2-3. The teacher is waiting inside. Don't be late on your first day of transfer and get on their bad side. Go on in.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "classroom_2"
    },
    "classroom_1_1": {
        name: "Seoyeon",
        text: "(We arrived at the classroom door. The chattering and laughter of students can be heard from inside. Seoyeon lightly pats my shoulder to encourage me.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_normal.png",
        next: "classroom_1_2"
    },
    "classroom_1_2": {
        name: "Seoyeon",
        text: "(Where her hand touched feels warm. She looks into my eyes and quietly cheers me on.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "classroom_1_3"
    },
    "classroom_1_3": {
        name: "Seoyeon",
        text: "\"Here's Class 2-3, where you'll be staying. Don't be nervous. I'm right next to you, so just be yourself. Got it?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "classroom_2"
    },
    "classroom_2": {
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "classroom_2_high" },
            { minAffinity: 0, next: "classroom_2_normal" },
            { minAffinity: -100, next: "classroom_2_low" }
        ],
        next: "classroom_2_normal"
    },
    "classroom_2_normal": {
        name: "Me",
        text: "(As I stand at the podium, dozens of eyes turn to me. Curious gazes, wary gazes... Seoyeon is smiling and watching over me from beside me.)",
        background: "assets/images/background/room_school.png",
        bgm: "daily.mp3",
        characters: {
            left: "assets/images/characters/teacher_normal.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        setFlag: "met_teacher",
        next: "classroom_2_2"
    },
    "classroom_2_high": {
        name: "Me",
        text: "(As I stand at the podium, dozens of eyes turn to me. Seoyeon is smiling supportively beside me, cheering me on.)",
        background: "assets/images/background/room_school.png",
        bgm: "daily.mp3",
        characters: {
            left: "assets/images/characters/teacher_normal.png",
            right: "assets/images/characters/seyoun_laugh.png"
        },
        setFlag: "met_teacher",
        next: "classroom_2_2"
    },
    "classroom_2_low": {
        name: "Me",
        text: "(As I stand at the podium, dozens of eyes turn to me. Seoyeon is standing a bit away with a cold expression.)",
        background: "assets/images/background/room_school.png",
        bgm: "daily.mp3",
        characters: {
            left: "assets/images/characters/teacher_normal.png",
            right: "assets/images/characters/seyoun_pout.png"
        },
        setFlag: "met_teacher",
        next: "classroom_2_2"
    },
    "classroom_2_2": {
        name: "Homeroom Teacher",
        text: "(The atmosphere in the classroom feels heavy. The homeroom teacher taps the podium to get everyone's attention.)",
        character: "assets/images/characters/teacher_normal.png",
        next: "teacher_free_talk"
    },
    "teacher_free_talk": {
        type: "free_talk",
        name: "Homeroom Teacher",
        text: "\"Well, everyone seems very interested in the new transfer student. You must be nervous, but everyone here is nice, so don't worry too much. Before you introduce yourself, do you have any questions for me?\"",
        context: "Location: In front of the podium in Class 2-3. Situation: A brief waiting period before the homeroom teacher introduces the transfer student protagonist to the class. Dozens of students are watching us, but this conversation should only be between the protagonist and the homeroom teacher. The protagonist's introduction to all the students is an official event that happens AFTER this conversation, so do NOT have the protagonist greet or introduce themselves to the students yet. Talk only about personal questions to the teacher, advice about school life, first impressions, etc. Keep the conversation going until it naturally concludes. In the final turn only, mention that you'll now officially introduce them to the class.",
        personality: "A professional teacher with clear boundaries between work and personal life, but actually has a clumsy side and gets flustered by the protagonist's unexpectedly mature demeanor. Has a hidden desire to lean on the protagonist - a 'gap moe' characteristic.",
        character: "assets/images/characters/teacher_smile.png",
        affinityChar: "Teacher",
        affinityBranches: [
            { minAffinity: 10, next: "classroom_2_3_high" },
            { minAffinity: -5, next: "classroom_2_3" },
            { minAffinity: -100, next: "classroom_2_3_low" }
        ],
        next: "classroom_2_3"
    },
    "classroom_2_3_high": {
        name: "Me",
        text: "(Talking with the teacher helped me relax. She seems to like me, which is a relief. Now it's time to introduce myself to the class.)",
        character: "assets/images/characters/teacher_smile.png",
        choices: [
            { text: "My name is '{name}'. Nice to meet you all!", next: "teacher_name_share_high", setFlag: "knows_name_teacher", stats: { Teacher: { affinity: 15 }, Seoyeon: { affinity: -3 } } },
            { text: "Alright! Let's get along starting today, classmates!", next: "class_after_party", setFlags: ["personality_active", "knows_name_teacher"], stats: { Teacher: { affinity: 5 } } },
            { text: "Hi! I love sports and have an active personality!", next: "class_after_active", setFlags: ["personality_active", "knows_name_teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "Nice to meet you. I prefer to keep to myself.", next: "class_after_quiet", setFlags: ["personality_quiet", "knows_name_teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "I'm here to study. I hate being disturbed, so let's keep things moderate.", next: "class_after_study", setFlags: ["personality_study", "knows_name_teacher"], stats: { Teacher: { affinity: -15 } } }
        ]
    },
    "classroom_2_3_low": {
        name: "Me",
        text: "(The teacher's gaze is sharp. It seems I made a bad first impression. I have to introduce myself in this cold atmosphere.)",
        character: "assets/images/characters/teacher_angry.png",
        choices: [
            { text: "My name is '{name}'. Nice to meet you all!", next: "teacher_name_share_low", setFlag: "knows_name_teacher", stats: { Teacher: { affinity: 15 }, Seoyeon: { affinity: -3 } } },
            { text: "Alright! Let's get along starting today, classmates!", next: "class_after_party", setFlags: ["personality_active", "knows_name_teacher"], stats: { Teacher: { affinity: 5 } } },
            { text: "Hi! I love sports and have an active personality!", next: "class_after_active", setFlags: ["personality_active", "knows_name_teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "Nice to meet you. I prefer to keep to myself.", next: "class_after_quiet", setFlags: ["personality_quiet", "knows_name_teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "I'm here to study. I hate being disturbed, so let's keep things moderate.", next: "class_after_study", setFlags: ["personality_study", "knows_name_teacher"], stats: { Teacher: { affinity: -15 } } }
        ]
    },
    "classroom_2_3": {
        name: "Me",
        text: "(The conversation with the teacher is over. Now it's time to officially introduce myself to the class. All eyes are on me.)",
        character: "assets/images/characters/teacher_normal.png",
        choices: [
            { text: "My name is '{name}'. Nice to meet you all!", next: "teacher_name_share_normal", setFlag: "knows_name_teacher", stats: { Teacher: { affinity: 15 }, Seoyeon: { affinity: -3 } } },
            { text: "Alright! Let's get along starting today, classmates!", next: "class_after_party", setFlags: ["personality_active", "knows_name_teacher"], stats: { Teacher: { affinity: 5 } } },
            { text: "Hi! I love sports and have an active personality!", next: "class_after_active", setFlags: ["personality_active", "knows_name_teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "Nice to meet you. I prefer to keep to myself.", next: "class_after_quiet", setFlags: ["personality_quiet", "knows_name_teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "I'm here to study. I hate being disturbed, so let's keep things moderate.", next: "class_after_study", setFlags: ["personality_study", "knows_name_teacher"], stats: { Teacher: { affinity: -15 } } }
        ]
    },
    "teacher_name_share_high": {
        name: "Homeroom Teacher",
        text: "\"(The teacher looks at me with a satisfied smile.) Oh, {name}... What a lovely name. Now, please say a few words to introduce yourself to the class. Everyone, please welcome them!\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "class_after_party"
    },
    "teacher_name_share_low": {
        name: "Homeroom Teacher",
        text: "\"...Alright, {name}. Give a brief introduction to your classmates and take your seat. Everyone, quiet down.\"",
        character: "assets/images/characters/teacher_angry.png",
        next: "class_after_quiet"
    },
    "teacher_name_share_normal": {
        name: "Homeroom Teacher",
        text: "\"Alright, {name}. Please say a few words to introduce yourself to the class.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "class_after_active"
    },
    "class_after_active": {
        name: "Classmates",
        text: "(Cheers erupt from all over the classroom. The boys in the back seats are especially excited. Seoyeon claps with a pleased smile.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "class_after_active_2"
    },
    "class_after_active_2": {
        name: "Classmates",
        text: "(The students are already whispering about recruiting me to their teams.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "class_after_active_3"
    },
    "class_after_active_3": {
        name: "Classmates",
        text: "\"Oh~ You seem athletic! How about a game of volleyball at lunch? Let's see what the transfer student's got!\"",
        character: null,
        next: "lunch_time"
    },
    "class_after_quiet": {
        name: "Classmates",
        text: "(The students nod and calmly accept me. Some girls whisper while looking at me.)",
        character: null,
        next: "class_after_quiet_2"
    },
    "class_after_quiet_2": {
        name: "Classmates",
        text: "(Seoyeon seems pleased with my serious demeanor and nods. The classroom atmosphere becomes more calm.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "class_after_quiet_3"
    },
    "class_after_quiet_3": {
        name: "Classmates",
        text: "\"Wow, they have a cool vibe... Would it be okay to say hi if we meet in the library?\"",
        character: null,
        next: "lunch_time"
    },
    "class_after_party": {
        name: "Classmates",
        text: "(The classroom instantly becomes as noisy as a marketplace. Students are already crowding around me.)",
        character: null,
        next: "class_after_party_2"
    },
    "class_after_party_2": {
        name: "Classmates",
        text: "(Seoyeon seems a bit flustered but soon bursts out laughing. The students are already busy deciding where to eat.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "class_after_party_3"
    },
    "class_after_party_3": {
        name: "Classmates",
        text: "\"Wow! {name}, you have such a great personality! Let's eat lunch together today! We'll show you all the good food spots!\"",
        character: null,
        next: "lunch_time"
    },
    "class_after_study": {
        name: "Classmates",
        text: "(A cold silence fills the classroom. The students look a bit taken aback and glance at each other while whispering.)",
        character: null,
        next: "class_after_study_2"
    },
    "class_after_study_2": {
        name: "Classmates",
        text: "(Seoyeon's expression stiffens a bit too. It feels like some kind of wall has formed. The students quiet down while watching me.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "class_after_study_3"
    },
    "class_after_study_3": {
        name: "Classmates",
        text: "\"Wow... That's intense. Must be a total study bug. We should probably not bother them...\"",
        character: null,
        next: "lunch_time"
    }
});
