if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "start": {
        name: "Me",
        text: "(Warm sunlight... The tension of the first day as a transfer student fills my body.)",
        background: "assets/images/background/school.png",
        character: null,
        next: "start_2"
    },
    "start_2": {
        name: "Me",
        text: "(Unfamiliar uniform, unfamiliar scenery. Everything feels awkward.)",
        next: "start_3"
    },
    "start_3": {
        name: "Me",
        text: "(Whew... One deep breath. Okay, let's go.)",
        next: "name_input_scene"
    },
    "name_input_scene": {
        type: "input",
        name: "System",
        text: "Please enter your name.",
        next: "start_4"
    },
    "start_4": {
        name: "???",
        text: "\"Hi? I haven't seen your face before. Standing here blankly... Are you the transfer student, {name}?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "intro_1"
    },
    "intro_1": {
        name: "Me",
        text: "(She approaches with a bright smile. A pleasant scent wafts over.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "intro_2"
    },
    "intro_2": {
        name: "Me",
        text: "(Her clear eyes stare at me intently. It's... a bit embarrassing.)",
        next: "intro_3"
    },
    "intro_3": {
        name: "Seoyeon",
        text: "\"I'm Seoyeon, the student council president. I came to meet you at the teacher's request. Nice to meet you!\"",
        setFlags: ["metSeoyeon", "knowsName_Seoyeon"],
        choices: [
            { text: "Yeah, nice to meet you. The school is so big I was getting lost.", next: "path_friendly_1", stats: { Seoyeon: { affinity: 3 } } },
            { text: "You... are really pretty. (My true feelings just slipped out...!)", next: "path_blush_1", stats: { Seoyeon: { affinity: 8 } } },
            { text: "Is it okay for a president to be this pretty? I'd like some special treatment!", next: "path_tease_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "(Staring blankly because she's so pretty.)", next: "path_silent_1", stats: { Seoyeon: { affinity: 3 } } },
            { text: "Oh, really? Can you move? I'm busy.", next: "path_rude_1", stats: { Seoyeon: { affinity: -30 } } }
        ]
    },
    "path_rude_1": {
        name: "Seoyeon",
        text: "(Seoyeon's expression hardens instantly. She bites her lip, looking flustered.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "path_rude_1_2"
    },
    "path_rude_1_2": {
        name: "Seoyeon",
        text: "\"Ah... sorry. I guess I was in the way. But I have to guide you to the office... follow me.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_1"
    },
    "path_friendly_1": {
        name: "Seoyeon",
        text: "(She smiles brightly and leads the way. I feel a bit more relaxed.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "path_friendly_1_2"
    },
    "path_friendly_1_2": {
        name: "Seoyeon",
        text: "\"Hehe, I thought so. It's a bit complicated at first, right? I'll guide you perfectly. Come on!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_1"
    },
    "path_tease_1": {
        name: "Seoyeon",
        text: "(She smiles playfully and winks.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "path_tease_1_2"
    },
    "path_tease_1_2": {
        name: "Seoyeon",
        text: "\"Oh, you're full of confidence? It's not special treatment, just... responsibility? But if you want, I'll pay special attention to you!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1"
    },
    "path_blush_1": {
        name: "Seoyeon",
        text: "(Seoyeon's face turns red. She flusteredly lowers her head in embarrassment.)",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "path_blush_1_2"
    },
    "path_blush_1_2": {
        name: "Seoyeon",
        text: "\"Eh...? Wh-what are you saying all of a sudden! Are all transfer students like you... so sly? Just follow me! You'll get in trouble with the homeroom teacher if you're late!\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "hallway_1"
    },
    "path_silent_1": {
        name: "Seoyeon",
        text: "(She waves her hand in front of my eyes, then puts her hand on my forehead to check for a fever.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "path_silent_1_2"
    },
    "path_silent_1_2": {
        name: "Seoyeon",
        text: "\"Um... are you okay? You're not sick, are you? Your face looks a bit red... It's better to go to the teacher's office first rather than the nurse's office. Should I support you?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1"
    },
    "hallway_1": {
        name: "Seoyeon",
        text: "(I walk down the hallway following Seoyeon. I can hear the lively voices of children outside the window.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_back.png",
        next: "hallway_name_ask"
    },
    "hallway_name_ask": {
        name: "Seoyeon",
        text: "(Seoyeon suddenly stops and turns to me.) \"Oh, come to think of it, I already said your name earlier. {name}, right? Let me introduce myself properly once more!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_name_share"
    },
    "hallway_name_share": {
        name: "Me",
        text: "\"Yeah, that's right. I'm {name}. I was a bit distracted earlier and couldn't greet you properly. Nice to meet you, Seoyeon.\"",
        setFlag: "knowsName_Seoyeon",
        next: "hallway_name_share_2"
    },
    "hallway_name_share_2": {
        name: "Seoyeon",
        text: "\"{name}... Hehe, that's a good name! Then I'll call you {name} from now on. Nice to meet you, {name}!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_1_2"
    },
    "hallway_1_2": {
        name: "Seoyeon",
        text: "(I walk down the hallway looking at her back.)",
        character: "assets/images/characters/seyoun_back.png",
        next: "hallway_free_talk"
    },
    "hallway_free_talk": {
        type: "free_talk",
        name: "Seoyeon",
        text: "\"Oh, come to think of it, we only introduced ourselves and haven't had a proper conversation yet! If you have any questions, feel free to ask!\"",
        context: "A situation where she is having a light conversation with the transfer student protagonist while walking down the school hallway together. After the conversation, Seoyeon will guide you through the school facilities as you pass through the hallway. At the end of the conversation, please mention that it's time to move or that you'll start the guidance.",
        personality: "A kind, gentle, and responsible student council president. She has a crush on the transfer student protagonist.",
        character: "assets/images/characters/seyoun_nomal.png",
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
        text: "(As I talked with Seoyeon, the school facility guidance began before I knew it. I was so engrossed in our conversation that I lost track of time. Now, I decided to follow her and look around the school.)",
        character: "assets/images/characters/seyoun_laugh.png",
        choices: [
            { 
                text: "The school is really lively. Seoyeon, do you also do club activities?", 
                stats: { Seoyeon: { affinity: 3 } },
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_club_high" },
                    { minAffinity: 0, next: "hallway_talk_club_normal" },
                    { minAffinity: -999, next: "hallway_talk_club_low" }
                ]
            },
            { 
                text: "The facilities are good, but it looks even better because of the person guiding me.", 
                stats: { Seoyeon: { affinity: 5 } },
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_flatter_high" },
                    { minAffinity: 0, next: "hallway_talk_flatter_normal" },
                    { minAffinity: -999, next: "hallway_talk_flatter_low" }
                ]
            },
            { 
                text: "My god, Seoyeon... You're really like a goddess. Just hearing your voice makes me feel like I'm in heaven.", 
                stats: { Seoyeon: { affinity: -25 } },
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_trap_high" },
                    { minAffinity: 0, next: "hallway_talk_trap_normal" },
                    { minAffinity: -999, next: "hallway_talk_trap_low" }
                ]
            },
            { 
                text: "(Quietly listening to her explanation while walking.)", 
                stats: { Seoyeon: { affinity: 2 } },
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
        text: "(Seoyeon's expression isn't good. I must have made a mistake during our conversation. she began the school guidance with a cold attitude.)",
        character: "assets/images/characters/seyoun_pout.png",
        choices: [
            { 
                text: "The school is really lively. Seoyeon, do you also do club activities?", 
                stats: { Seoyeon: { affinity: 3 } },
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_club_high" },
                    { minAffinity: 0, next: "hallway_talk_club_normal" },
                    { minAffinity: -999, next: "hallway_talk_club_low" }
                ]
            },
            { 
                text: "The facilities are good, but it looks even better because of the person guiding me.", 
                stats: { Seoyeon: { affinity: 5 } },
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_flatter_high" },
                    { minAffinity: 0, next: "hallway_talk_flatter_normal" },
                    { minAffinity: -999, next: "hallway_talk_flatter_low" }
                ]
            },
            { 
                text: "My god, Seoyeon... You're really like a goddess. Just hearing your voice makes me feel like I'm in heaven.", 
                stats: { Seoyeon: { affinity: -25 } },
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_trap_high" },
                    { minAffinity: 0, next: "hallway_talk_trap_normal" },
                    { minAffinity: -999, next: "hallway_talk_trap_low" }
                ]
            },
            { 
                text: "(Quietly listening to her explanation while walking.)", 
                stats: { Seoyeon: { affinity: 2 } },
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
        text: "(I started walking down the hallway under Seoyeon's guidance. She began to kindly explain various parts of the school.)",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { 
                text: "The school is really lively. Seoyeon, do you also do club activities?", 
                stats: { Seoyeon: { affinity: 3 } },
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_club_high" },
                    { minAffinity: 0, next: "hallway_talk_club_normal" },
                    { minAffinity: -999, next: "hallway_talk_club_low" }
                ]
            },
            { 
                text: "The facilities are good, but it looks even better because of the person guiding me.", 
                stats: { Seoyeon: { affinity: 5 } },
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_flatter_high" },
                    { minAffinity: 0, next: "hallway_talk_flatter_normal" },
                    { minAffinity: -999, next: "hallway_talk_flatter_low" }
                ]
            },
            { 
                text: "My god, Seoyeon... You're really like a goddess. Just hearing your voice makes me feel like I'm in heaven.", 
                stats: { Seoyeon: { affinity: -25 } },
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_trap_high" },
                    { minAffinity: 0, next: "hallway_talk_trap_normal" },
                    { minAffinity: -999, next: "hallway_talk_trap_low" }
                ]
            },
            { 
                text: "(Quietly listening to her explanation while walking.)", 
                stats: { Seoyeon: { affinity: 2 } },
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
        text: "(She is flustered and her face turns beet red.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_talk_trap_high_2"
    },
    "hallway_talk_trap_high_2": {
        name: "Seoyeon",
        text: "\"G-goddess? Th-that's too much! But... hearing it from you, my heart is racing. Geez, you're a real troublemaker.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_2"
    },
    "hallway_talk_trap_low": {
        name: "Seoyeon",
        text: "(She looks at me with clear contempt.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_talk_trap_low_2"
    },
    "hallway_talk_trap_low_2": {
        name: "Seoyeon",
        text: "\"...That's unpleasant. Please don't say such things again. It's rude.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_2"
    },
    "hallway_talk_trap_normal": {
        name: "Seoyeon",
        text: "(Seoyeon stops as if flustered and stares at me intently. Her eyes turn a bit cold.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_talk_trap_normal_2"
    },
    "hallway_talk_trap_normal_2": {
        name: "Seoyeon",
        text: "\"Um... well, thanks, but... that's a bit burdensome. We haven't known each other for long, right? I think the joke is a bit too much.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_talk_club_normal": {
        name: "Seoyeon",
        text: "(She looks at me as if glad.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_talk_club_normal_2"
    },
    "hallway_talk_club_normal_2": {
        name: "Seoyeon",
        text: "\"Yeah! I'm in the student council, but I'm actually also in the gardening club. I like taking care of flowers. Touching the soil makes me feel at peace. Come visit our greenhouse later if you have time!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_talk_club_high": {
        name: "Seoyeon",
        text: "(She looks at me with twinkling eyes as if glad. I can see her anticipation that we might share similar interests.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_talk_club_high_2"
    },
    "hallway_talk_club_high_2": {
        name: "Seoyeon",
        text: "\"Of course! I'm in the student council, but I'm actually also in the gardening club. I love taking care of flowers. Do you like flowers too, {name}? Come visit our greenhouse later if you have time! I'll give you a special tour.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_2"
    },
    "hallway_talk_club_low": {
        name: "Seoyeon",
        text: "(She nods with a business-like attitude. Her expression carries no emotion.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_talk_club_low_2"
    },
    "hallway_talk_club_low_2": {
        name: "Seoyeon",
        text: "\"Yes. I'm balancing student council and gardening club activities. Is that your only question? Then I'll continue the guidance.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_talk_flatter_high": {
        name: "Seoyeon",
        text: "(She answers while blushing and hiding her face.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_talk_flatter_high_2"
    },
    "hallway_talk_flatter_high_2": {
        name: "Seoyeon",
        text: "\"O-oh my... You keep saying such embarrassing things. But, I don't hate it. Actually, I feel really happy to be with you. I might end up wanting to be with you more... Hehe.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_2"
    },
    "hallway_talk_flatter_low": {
        name: "Seoyeon",
        text: "(She looks at me with a cold, suspicious gaze.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_talk_flatter_low_2"
    },
    "hallway_talk_flatter_low_2": {
        name: "Seoyeon",
        text: "\"...Is that your usual way of talking to people? It's a bit burdensome. Please focus on the school guidance.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_2"
    },
    "hallway_talk_flatter_normal": {
        name: "Seoyeon",
        text: "(She answers while blushing as if shy.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_talk_flatter_normal_2"
    },
    "hallway_talk_flatter_normal_2": {
        name: "Seoyeon",
        text: "\"Really... You speak so beautifully. Actually, I'm always nervous because of my position as the student council president, but I feel at ease when I'm with you. I might end up wanting to act spoiled without knowing... Hehe, just kidding.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_2"
    },
    "hallway_talk_listen_high": {
        name: "Seoyeon",
        text: "(She looks at me with twinkling eyes as if moved.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_talk_listen_high_2"
    },
    "hallway_talk_listen_high_2": {
        name: "Seoyeon",
        text: "\"Thank you so much for listening so intently. {name} has a really good heart. I want to tell you more about the school... Oh, am I being too talkative?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_2"
    },
    "hallway_talk_listen_low": {
        name: "Seoyeon",
        text: "(She briefly looks at me and continues the explanation.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_talk_listen_low_2"
    },
    "hallway_talk_listen_low_2": {
        name: "Seoyeon",
        text: "\"...I'll continue the explanation. Please listen carefully so you don't get lost.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_talk_listen_normal": {
        name: "Seoyeon",
        text: "(She continues her explanation as if excited.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_talk_listen_normal_2"
    },
    "hallway_talk_listen_normal_2": {
        name: "Seoyeon",
        text: "\"Thank you so much for listening to my explanation so well. {name} seems like a very sincere person! With this attitude, you'll adapt to school life in no time.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_2"
    },
    "hallway_2": {
        name: "Seoyeon",
        text: "(She suddenly stops and turns to me.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2_2"
    },
    "hallway_2_2": {
        name: "Seoyeon",
        text: "(She stares intently into my eyes.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2_3"
    },
    "hallway_2_3": {
        name: "Seoyeon",
        text: "\"What kind of club are you interested in? Our student council always welcomes new talent. If you join... I could even teach you the work myself.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "If I join the student council, can I be with you every day? Then I'll definitely apply!", next: "path_flirt_2", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Rather than a club... I want to know more about you, Seoyeon.", next: "path_direct_2", stats: { Seoyeon: { affinity: 6 } } },
            { text: "I'm not sure yet. I'll decide after I adapt to school life a bit.", next: "path_normal_2", stats: { Seoyeon: { affinity: -10 } } },
            { text: "Clubs are annoying... I'll just be alone.", next: "path_rude_2", stats: { Seoyeon: { affinity: -40 } } }
        ]
    },
    "path_rude_2": {
        name: "Seoyeon",
        text: "(She can't hide her disappointment. Her shoulders seem to drop a bit.)",
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
        text: "(Seoyeon's face turns red once again. While avoiding my gaze in embarrassment, a small smile spreads across her lips. Her fingers fiddle with the hem of her school uniform skirt. She shyly taps the floor with her toes.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "path_flirt_2_2"
    },
    "path_flirt_2_2": {
        name: "Seoyeon",
        text: "\"E-every day...? There's so much work! But if you join... I might be a little happy too. I'll be looking forward to it?\"",
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
        text: "(She nods and starts walking ahead again. I feel a bit disappointed.)",
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
        text: "(She stares at me blankly, then bursts into a clear laugh. That laughter echoes in the hallway like the sound of silver bells. A small tear in the corner of her eye sparkles in the sunlight. She laughs for a long time, holding her stomach.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "path_direct_2_2"
    },
    "path_direct_2_2": {
        name: "Seoyeon",
        text: "\"Hehe, you're really honest, aren't you? About me... Well, that depends on how you act from now on, I might tell you, or I might not. I'll look forward to it!\"",
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
        text: "(Upon arriving at the classroom door, Seoyeon gently holds my hand. My heart starts pounding at her soft touch.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_shy.png",
        next: "classroom_1_2_high"
    },
    "classroom_1_2_high": {
        name: "Seoyeon",
        text: "(Seoyeon bows her head slightly and whispers in my ear. Her sweet breath feels ticklish.) \"{name}, don't be too nervous. I'll always be by your side. You can do it.\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "classroom_1_3_high"
    },
    "classroom_1_3_high": {
        name: "Seoyeon",
        text: "\"Now, this is our class. ...This is a secret, but I asked the teacher to leave the seat right next to me empty for you. You must come there, okay? It's a promise!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "classroom_2"
    },
    "classroom_1_1_low": {
        name: "Seoyeon",
        text: "(Upon arriving at the classroom door, Seoyeon walks ahead of me, keeping her distance. Her back feels somewhat cold.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_back.png",
        next: "classroom_1_2_low"
    },
    "classroom_1_2_low": {
        name: "Seoyeon",
        text: "(She silently points to the sign next to the door with her chin. Her attitude of not even looking at me makes a corner of my heart feel cold.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "classroom_1_3_low"
    },
    "classroom_1_3_low": {
        name: "Seoyeon",
        text: "\"This is Class 2-3. The teacher will be waiting inside. Don't get on her bad side by being late on your first day, and just go in.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "classroom_2"
    },
    "classroom_1_1": {
        name: "Seoyeon",
        text: "(We arrived in front of the classroom door. I can hear the murmuring and laughter of children inside. Seoyeon lightly taps my shoulder to encourage me.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1_2"
    },
    "classroom_1_2": {
        name: "Seoyeon",
        text: "(The place where her hand touched feels hot. She looks into my eyes and gives a small cheer.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1_3"
    },
    "classroom_1_3": {
        name: "Seoyeon",
        text: "\"Now, this is Class 2-3 where you'll be staying. Don't be nervous. I'm right here, so just act as you usually do. Got it?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_2"
    },
    "classroom_2": {
        name: "Homeroom Teacher",
        text: "(As I stand in front of the podium, dozens of eyes are fixed on me at once. Curious eyes, wary eyes... Seoyeon is standing next to me, watching over me with a reassuring smile.)",
        background: "assets/images/background/room_school.png",
        characters: {
            left: "assets/images/characters/teacher.png",
            right: "assets/images/characters/seyoun_laugh.png"
        },
        setFlag: "metTeacher",
        next: "classroom_2_2"
    },
    "classroom_2_2": {
        name: "Homeroom Teacher",
        text: "(The air in the classroom feels heavy. The homeroom teacher taps the podium to focus attention.)",
        character: "assets/images/characters/teacher.png",
        next: "teacher_free_talk"
    },
    "teacher_free_talk": {
        type: "free_talk",
        name: "Homeroom Teacher",
        text: "\"Now, everyone is very interested in you. You must be nervous, but they're all good kids, so don't worry too much. Do you have any questions for me before you introduce yourself?\"",
        context: "Place: Inside Class 2-3, in front of the podium. Situation: A short waiting time just before the homeroom teacher introduces the transfer student protagonist to the students. Dozens of students are watching us. We are already in the middle of the classroom, definitely not in the hallway. We are having a conversation inside the classroom. After the conversation, the teacher will formally introduce the protagonist to the students, and the protagonist will have to introduce themselves in front of the podium. At the end of the conversation, please induce actions such as telling the protagonist to get ready to greet the students or to straighten up.",
        personality: "A professional teacher with a clear distinction between public and private life, but actually has a clumsy side and feels flustered by the protagonist's unexpectedly mature appearance. She has a 'gap moe' where she secretly wants to rely on the protagonist.",
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
        text: "(I was able to relax while talking with the teacher. I'm glad she seems to have a good impression of me. Now it's time to introduce myself in front of the kids.)",
        character: "assets/images/characters/teacher_smile.png",
        choices: [
            { text: "My name is '{name}'. Nice to meet you!", next: "teacher_name_share_high", setFlag: "knowsName_Teacher", stats: { Teacher: { affinity: 15 } } },
            { text: "Alright! Let's get along with the class from today.", next: "class_after_party", setFlags: ["personality_active", "knowsName_Teacher"], stats: { Teacher: { affinity: 5 } } },
            { text: "Hi! I like exercising and I have an active personality!", next: "class_after_active", setFlags: ["personality_active", "knowsName_Teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "Nice to meet you. I prefer staying quiet.", next: "class_after_quiet", setFlags: ["personality_quiet", "knowsName_Teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "I'm here to study. I hate being disturbed, so let's just keep our distance.", next: "class_after_study", setFlags: ["personality_study", "knowsName_Teacher"], stats: { Teacher: { affinity: -15 } } }
        ]
    },
    "classroom_2_3_low": {
        name: "Me",
        text: "(The teacher's gaze is sharp. My heart feels heavy as if I've lost points from the first impression. I have to start my introduction in a cold atmosphere.)",
        character: "assets/images/characters/teacher_angry.png",
        choices: [
            { text: "My name is '{name}'. Nice to meet you!", next: "teacher_name_share_low", setFlag: "knowsName_Teacher", stats: { Teacher: { affinity: 15 } } },
            { text: "Alright! Let's get along with the class from today.", next: "class_after_party", setFlags: ["personality_active", "knowsName_Teacher"], stats: { Teacher: { affinity: 5 } } },
            { text: "Hi! I like exercising and I have an active personality!", next: "class_after_active", setFlags: ["personality_active", "knowsName_Teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "Nice to meet you. I prefer staying quiet.", next: "class_after_quiet", setFlags: ["personality_quiet", "knowsName_Teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "I'm here to study. I hate being disturbed, so let's just keep our distance.", next: "class_after_study", setFlags: ["personality_study", "knowsName_Teacher"], stats: { Teacher: { affinity: -15 } } }
        ]
    },
    "classroom_2_3": {
        name: "Me",
        text: "(After the conversation with the teacher, the time has finally come to be formally introduced to the class. Numerous eyes are focused on me.)",
        character: "assets/images/characters/teacher.png",
        choices: [
            { text: "My name is '{name}'. Nice to meet you!", next: "teacher_name_share_normal", setFlag: "knowsName_Teacher", stats: { Teacher: { affinity: 15 } } },
            { text: "Alright! Let's get along with the class from today.", next: "class_after_party", setFlags: ["personality_active", "knowsName_Teacher"], stats: { Teacher: { affinity: 5 } } },
            { text: "Hi! I like exercising and I have an active personality!", next: "class_after_active", setFlags: ["personality_active", "knowsName_Teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "Nice to meet you. I prefer staying quiet.", next: "class_after_quiet", setFlags: ["personality_quiet", "knowsName_Teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "I'm here to study. I hate being disturbed, so let's just keep our distance.", next: "class_after_study", setFlags: ["personality_study", "knowsName_Teacher"], stats: { Teacher: { affinity: -15 } } }
        ]
    },
    "teacher_name_share_high": {
        name: "Homeroom Teacher",
        text: "\"Oh, {name}... It's a very pretty name. Now, {name}. friends, please give a warm welcome! Can you give a word of introduction?\"",
        character: "assets/images/characters/teacher_smile.png",
        choices: [
            { text: "Greet with incredibly high tension!", next: "class_after_party", setFlag: "personality_active" },
            { text: "Greet actively.", next: "class_after_active", setFlag: "personality_active" },
            { text: "Greet calmly.", next: "class_after_quiet", setFlag: "personality_quiet" },
            { text: "Greet roughly as if it's annoying.", next: "class_after_study", setFlag: "personality_study", stats: { Teacher: { affinity: -20 } } }
        ]
    },
    "teacher_name_share_low": {
        name: "Homeroom Teacher",
        text: "\"...Is that so. Then, {name}. Since we have to go through the procedure, please introduce yourself to the students.\"",
        character: "assets/images/characters/teacher_angry.png",
        choices: [
            { text: "Greet with incredibly high tension!", next: "class_after_party", setFlag: "personality_active" },
            { text: "Greet actively.", next: "class_after_active", setFlag: "personality_active" },
            { text: "Greet calmly.", next: "class_after_quiet", setFlag: "personality_quiet" },
            { text: "Greet roughly as if it's annoying.", next: "class_after_study", setFlag: "personality_study", stats: { Teacher: { affinity: -20 } } }
        ]
    },
    "teacher_name_share_normal": {
        name: "Homeroom Teacher",
        text: "\"Oh, so your name is {name}. It's a very pretty name. Now, {name}. Can you give a word of introduction to your friends?\"",
        character: "assets/images/characters/teacher.png",
        choices: [
            { text: "Greet with incredibly high tension!", next: "class_after_party", setFlag: "personality_active" },
            { text: "Greet actively.", next: "class_after_active", setFlag: "personality_active" },
            { text: "Greet calmly.", next: "class_after_quiet", setFlag: "personality_quiet" },
            { text: "Greet roughly as if it's annoying.", next: "class_after_study", setFlag: "personality_study", stats: { Teacher: { affinity: -20 } } }
        ]
    },
    "class_after_active": {
        name: "Kids",
        text: "(Cheers burst out from all over the classroom. Especially the boys sitting in the back eyes sparkle. Seoyeon also gives a satisfied smile and claps.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "class_after_active_2"
    },
    "class_after_active_2": {
        name: "Kids",
        text: "(The kids are already whispering about recruiting me to their team.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "class_after_active_3"
    },
    "class_after_active_3": {
        name: "Kids",
        text: "\"Oh~ You look like you exercise? How about a game of volleyball during lunch? Let's see the transfer student's skills!\"",
        character: null,
        next: "lunch_time"
    },
    "class_after_quiet": {
        name: "Kids",
        text: "(The kids nod and accept me calmly. A few girls whisper and look at me.)",
        character: null,
        next: "class_after_quiet_2"
    },
    "class_after_quiet_2": {
        name: "Kids",
        text: "(Seoyeon nods as if she likes my serious appearance. The classroom atmosphere becomes much calmer.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "class_after_quiet_3"
    },
    "class_after_quiet_3": {
        name: "Kids",
        text: "\"Wow, somehow there's an atmosphere... Can I say hi if we run into each other in the library later?\"",
        character: null,
        next: "lunch_time"
    },
    "class_after_party": {
        name: "Kids",
        text: "(The classroom instantly becomes as noisy as a marketplace. Kids already flock around me.)",
        character: null,
        next: "class_after_party_2"
    },
    "class_after_party_2": {
        name: "Kids",
        text: "(Seoyeon seems a bit flustered but soon bursts into laughter. The kids are already busy deciding on a menu.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "class_after_party_3"
    },
    "class_after_party_3": {
        name: "Kids",
        text: "\"Wow! {name}'s personality is really great! Okay, let's have lunch together today! We'll show you all the best spots!\"",
        character: null,
        next: "lunch_time"
    },
    "class_after_study": {
        name: "Kids",
        text: "(A cold silence flows in the classroom. The kids seem a bit flustered and whisper while looking at each other.)",
        character: null,
        next: "class_after_study_2"
    },
    "class_after_study_2": {
        name: "Kids",
        text: "(Seoyeon's expression also hardens a bit. Somehow it feels like a wall has been built. The kids become quiet, watching my reaction.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "class_after_study_3"
    },
    "class_after_study_3": {
        name: "Kids",
        text: "\"Wow... No joke. Is he a total study bug? It'll be big trouble if we mess with him...\"",
        character: null,
        next: "lunch_time"
    }
});



