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
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_club_high" },
                    { minAffinity: 0, next: "hallway_talk_club_normal" },
                    { minAffinity: -999, next: "hallway_talk_club_low" }
                ]
            },
            { 
                text: "The facilities are good, but it looks even better because of the person guiding me.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_flatter_high" },
                    { minAffinity: 0, next: "hallway_talk_flatter_normal" },
                    { minAffinity: -999, next: "hallway_talk_flatter_low" }
                ]
            },
            { 
                text: "My god, Seoyeon... You're really like a goddess. Just hearing your voice makes me feel like I'm in heaven.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_trap_high" },
                    { minAffinity: 0, next: "hallway_talk_trap_normal" },
                    { minAffinity: -999, next: "hallway_talk_trap_low" }
                ]
            },
            { 
                text: "(Quietly listening to her explanation while walking.)", 
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
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_club_high" },
                    { minAffinity: 0, next: "hallway_talk_club_normal" },
                    { minAffinity: -999, next: "hallway_talk_club_low" }
                ]
            },
            { 
                text: "The facilities are good, but it looks even better because of the person guiding me.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_flatter_high" },
                    { minAffinity: 0, next: "hallway_talk_flatter_normal" },
                    { minAffinity: -999, next: "hallway_talk_flatter_low" }
                ]
            },
            { 
                text: "My god, Seoyeon... You're really like a goddess. Just hearing your voice makes me feel like I'm in heaven.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_trap_high" },
                    { minAffinity: 0, next: "hallway_talk_trap_normal" },
                    { minAffinity: -999, next: "hallway_talk_trap_low" }
                ]
            },
            { 
                text: "(Quietly listening to her explanation while walking.)", 
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
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_club_high" },
                    { minAffinity: 0, next: "hallway_talk_club_normal" },
                    { minAffinity: -999, next: "hallway_talk_club_low" }
                ]
            },
            { 
                text: "The facilities are good, but it looks even better because of the person guiding me.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_flatter_high" },
                    { minAffinity: 0, next: "hallway_talk_flatter_normal" },
                    { minAffinity: -999, next: "hallway_talk_flatter_low" }
                ]
            },
            { 
                text: "My god, Seoyeon... You're really like a goddess. Just hearing your voice makes me feel like I'm in heaven.", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 15, next: "hallway_talk_trap_high" },
                    { minAffinity: 0, next: "hallway_talk_trap_normal" },
                    { minAffinity: -999, next: "hallway_talk_trap_low" }
                ]
            },
            { 
                text: "(Quietly listening to her explanation while walking.)", 
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
        stats: { Seoyeon: { affinity: 7 } },
        next: "hallway_talk_trap_high_2"
    },
    "hallway_talk_trap_high_2": {
        name: "Seoyeon",
        text: "\"Oh my, {name}... Do you judge people only by their looks? Hehe, but thank you. Calling me a goddess... it makes me a bit happy. But you shouldn't joke too much!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_2"
    },
    "hallway_talk_trap_low": {
        name: "Seoyeon",
        text: "(Seoyeon doesn't hide her displeasure and stops. Her eyes grow cold.)",
        character: "assets/images/characters/seyoun_angry.png",
        stats: { Seoyeon: { affinity: -25 } },
        next: "hallway_talk_trap_low_2"
    },
    "hallway_talk_trap_low_2": {
        name: "Seoyeon",
        text: "\"Stop it. What you just said is no different from sexual harassment. It's problematic to act that way from the first day of transfer. I'll end the guidance here, so find your own way.\"",
        character: "assets/images/characters/seyoun_angry.png",
        next: "hallway_2"
    },
    "hallway_talk_trap_normal": {
        name: "Seoyeon",
        text: "(Seoyeon stops in confusion and stares at me. Her eyes become a bit cold.)",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -5 } },
        next: "hallway_talk_trap_normal_2"
    },
    "hallway_talk_trap_normal_2": {
        name: "Seoyeon",
        text: "\"Um... well, thanks, but... saying things like that is a bit burdensome. We only just met, right? I think your joke went too far.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_talk_club_high": {
        name: "Seoyeon",
        text: "(She looks at me with sparkling eyes, appearing delighted. I can see a hint of expectation that we might share similar interests.)",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "hallway_talk_club_high_2"
    },
    "hallway_talk_club_high_2": {
        name: "Seoyeon",
        text: "\"Yes! I'm active in the student council, but I'm actually also a member of the gardening club. I love taking care of flowers. Do you like flowers, {name}? If you have time later, be sure to visit our greenhouse! I'll give you a special tour.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_2"
    },
    "hallway_talk_club_low": {
        name: "Seoyeon",
        text: "(She nods with a business-like attitude. There is no emotion in her expression.)",
        character: "assets/images/characters/seyoun_nomal.png",
        stats: { Seoyeon: { affinity: -2 } },
        next: "hallway_talk_club_low_2"
    },
    "hallway_talk_club_low_2": {
        name: "Seoyeon",
        text: "\"Yes. I'm balancing student council and gardening club activities. Is that your only question? Then I'll continue the guidance.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_talk_club_normal": {
        name: "Seoyeon",
        text: "(She looks at me as if she's glad to see me.)",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "hallway_talk_club_normal_2"
    },
    "hallway_talk_club_normal_2": {
        name: "Seoyeon",
        text: "\"Yes! I'm active in the student council, but I'm actually also a member of the gardening club. I love taking care of flowers. I feel at peace when I'm touching the soil. If you have time later, come visit our greenhouse!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_talk_flatter_high": {
        name: "Seoyeon",
        text: "(Seoyeon blushes and smiles widely with true joy. Her eyes are filled with affection for me.)",
        character: "assets/images/characters/seyoun_shy2.png",
        stats: { Seoyeon: { affinity: 8 } },
        next: "hallway_talk_flatter_high_2"
    },
    "hallway_talk_flatter_high_2": {
        name: "Seoyeon",
        text: "\"Really... how can you say such pretty things? To be honest, I was worried if you, as a transfer student, could adapt well, but I feel like I'm the one being comforted. Thank you, {name}. Being with you somehow makes me feel very at ease.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_2"
    },
    "hallway_talk_flatter_low": {
        name: "Seoyeon",
        text: "(She glances at me with a cold expression. The corners of her mouth are slightly twisted as if in mock.)",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -5 } },
        next: "hallway_talk_flatter_low_2"
    },
    "hallway_talk_flatter_low_2": {
        name: "Seoyeon",
        text: "\"You have a silver tongue. I've had enough of compliments that anyone can give. I'm guiding you through the school right now, so just follow behind me properly.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_2"
    },
    "hallway_talk_flatter_normal": {
        name: "Seoyeon",
        text: "(She blushes in embarrassment and answers.)",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "hallway_talk_flatter_normal_2"
    },
    "hallway_talk_flatter_normal_2": {
        name: "Seoyeon",
        text: "\"Really... you say such pretty things. Actually, I always feel tense because of my position as student council president, but being with you somehow puts me at ease. I might even start wanting to act like a baby towards you... Hehe, just kidding.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_2"
    },
    "hallway_talk_listen_high": {
        name: "Seoyeon",
        text: "(She continues her explanation with excitement and sparkling eyes. She seems to enjoy every single reaction of mine.)",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "hallway_talk_listen_high_2"
    },
    "hallway_talk_listen_high_2": {
        name: "Seoyeon",
        text: "\"Wow, I'm so touched that you're listening to my explanation so seriously! I think {name} is a truly kind and sincere person. Helping you feels so rewarding! If you have any more questions, feel free to ask!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_2"
    },
    "hallway_talk_listen_low": {
        name: "Seoyeon",
        text: "(She continues her explanation mechanically. It feels like she's speaking into thin air without even looking at me.)",
        character: "assets/images/characters/seyoun_nomal.png",
        stats: { Seoyeon: { affinity: -5 } },
        next: "hallway_talk_listen_low_2"
    },
    "hallway_talk_listen_low_2": {
        name: "Seoyeon",
        text: "\"Did you mostly get that? Then let's move to the next place. Don't just stand there blankly, follow me properly.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_talk_listen_normal": {
        name: "Seoyeon",
        text: "(She continues her explanation with excitement.)",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 2 } },
        next: "hallway_talk_listen_normal_2"
    },
    "hallway_talk_listen_normal_2": {
        name: "Seoyeon",
        text: "\"Thank you so much for listening to my explanation so well. {name}, you seem like a very sincere person! With that attitude, you'll adapt to school life in no time.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_2": {
        name: "Seoyeon",
        text: "(She suddenly stops and turns to look at me.)",
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
        text: "\"What kind of clubs are you interested in? Our student council is always welcoming new talent. If you join... I could even teach you the tasks myself.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "If I join the student council, can I be with you every day? Then I'll definitely apply!", next: "path_flirt_2", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Rather than a club... I want to know more about you, Seoyeon.", next: "path_direct_2", stats: { Seoyeon: { affinity: 6 } } },
            { text: "I'm not sure yet. I'll decide after I adapt to school life.", next: "path_normal_2", stats: { Seoyeon: { affinity: -10 } } },
            { text: "What's the point of a bothersome club... I'll just be by myself.", next: "path_rude_2", stats: { Seoyeon: { affinity: -40 } } }
        ]
    },
    "path_rude_2": {
        name: "Seoyeon",
        text: "(She can't hide her disappointment. Her shoulders seem to droop slightly.)",
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
        text: "(Seoyeon's face turns red once again. Although she avoids my gaze in embarrassment, a faint smile spreads across her lips. Her fingertips fiddle with the hem of her school skirt. She bashfully taps the floor with her toe.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "path_flirt_2_2"
    },
    "path_flirt_2_2": {
        name: "Seoyeon",
        text: "\"Eh, every day? There's so much work! But if you join... I might be a little bit happy too. I'll be looking forward to it?\"",
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
        text: "(She nods and starts leading the way again. I feel a bit regretful.)",
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
        text: "(She stares at me blankly for a moment, then bursts into a clear and beautiful laugh. The sound of her laughter echoes in the hallway like the sound of silver bells. Small tears at the corners of her eyes sparkle in the sunlight. She laughs for a long time, holding her stomach...)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "path_direct_2_2"
    },
    "path_direct_2_2": {
        name: "Seoyeon",
        text: "\"Hehe, you're really honest, aren't you? About me... well, I might tell you or I might not, depending on how you act from now on. I'll have high expectations!\"",
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
        text: "(Upon arriving at the classroom door, Seoyeon gently holds my hand. The soft sensation makes my heart start to throb.)",
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
        text: "\"Now, this is our class. ...This is a secret, but I asked the teacher to leave the seat right next to mine empty for you. You have to sit there, okay? Promise!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "classroom_2"
    },
    "classroom_1_1_low": {
        name: "Seoyeon",
        text: "(Upon arriving at the classroom door, Seoyeon walks ahead of me and keeps her distance. Her back somehow feels cold.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_back.png",
        next: "classroom_1_2_low"
    },
    "classroom_1_2_low": {
        name: "Seoyeon",
        text: "(She silently points with her chin at the sign next to the door. Her attitude of not even looking at me makes my heart feel chilly.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "classroom_1_3_low"
    },
    "classroom_1_3_low": {
        name: "Seoyeon",
        text: "\"This is Class 2-3. The teacher will be waiting inside. Don't get noticed by being late from the first day and go in quickly.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "classroom_2"
    },
    "classroom_1_1": {
        name: "Seoyeon",
        text: "(We arrived at the classroom door. I can hear the murmur and laughter of kids inside. Seoyeon lightly pats my shoulder to cheer me on.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1_2"
    },
    "classroom_1_2": {
        name: "Seoyeon",
        text: "(The place where her hand touched feels hot. She looks at me and shouts a small 'Fighting!')",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1_3"
    },
    "classroom_1_3": {
        name: "Seoyeon",
        text: "\"Now, this is Class 2-3 where you'll be staying. Don't be nervous. Since I'm right next to you, just do as you always do. Got it?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_2"
    },
    "classroom_2": {
        name: "Homeroom Teacher",
        text: "(Standing in front of the teacher's desk, dozens of eyes are fixed on me all at once. Curious looks, wary looks... Seoyeon is standing reliably next to me, watching over me with a smile.)",
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
        text: "(The air inside the classroom feels heavy. The homeroom teacher taps on the desk to draw attention.)",
        character: "assets/images/characters/teacher.png",
        next: "teacher_free_talk"
    },
    "teacher_free_talk": {
        type: "free_talk",
        name: "Homeroom Teacher",
        text: "\"Now, everyone seems very interested in the transfer student. You might be nervous, but they're all good kids, so don't worry too much. Do you have any questions for me before you introduce yourself?\"",
        context: "Location: In front of the teacher's desk in Class 2-3 classroom. Situation: Short waiting time just before the homeroom teacher introduces the transfer student protagonist to the students. Dozens of students are watching us. We are already standing in the middle of the classroom, and it is definitely not a hallway. Talking inside the classroom. After the conversation, the teacher will formally introduce the protagonist to the students, leading to a situation where the protagonist must introduce himself in front of the teacher's desk. At the end of the conversation, please prompt the protagonist to prepare to greet the students or tidy up the situation.",
        personality: "A professional teacher with a clear distinction between public and private matters, but actually clumsy and her heart flutters at the protagonist's unexpectedly mature appearance. She has a 'gap moe' where she secretly wants to depend on the protagonist.",
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
        text: "(I was able to relax while talking with the teacher. I'm glad she seems to think well of me. Now it's time to introduce myself in front of the kids.)",
        character: "assets/images/characters/teacher_smile.png",
        choices: [
            { text: "My name is '{name}'. Please take care of me!", next: "teacher_name_share_high", setFlag: "knowsName_Teacher", stats: { Teacher: { affinity: 15 } } },
            { text: "Alright! Let's get along well from today, classmates.", next: "class_after_party", setFlags: ["personality_active", "knowsName_Teacher"], stats: { Teacher: { affinity: 5 } } },
            { text: "Hello! I like exercising and have an active personality!", next: "class_after_active", setFlags: ["personality_active", "knowsName_Teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "Nice to meet you. I prefer staying quiet.", next: "class_after_quiet", setFlags: ["personality_quiet", "knowsName_Teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "I'm here to study. I hate being disturbed, so let's just get along appropriately.", next: "class_after_study", setFlags: ["personality_study", "knowsName_Teacher"], stats: { Teacher: { affinity: -15 } } }
        ]
    },
    "classroom_2_3_low": {
        name: "Me",
        text: "(The teacher's eyes are sharp. My heart is heavy because I feel like I lost points from the first impression. I have to start the self-introduction in a cold atmosphere.)",
        character: "assets/images/characters/teacher_angry.png",
        choices: [
            { text: "My name is '{name}'. Please take care of me!", next: "teacher_name_share_low", setFlag: "knowsName_Teacher", stats: { Teacher: { affinity: 15 } } },
            { text: "Alright! Let's get along well from today, classmates.", next: "class_after_party", setFlags: ["personality_active", "knowsName_Teacher"], stats: { Teacher: { affinity: 5 } } },
            { text: "Hello! I like exercising and have an active personality!", next: "class_after_active", setFlags: ["personality_active", "knowsName_Teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "Nice to meet you. I prefer staying quiet.", next: "class_after_quiet", setFlags: ["personality_quiet", "knowsName_Teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "I'm here to study. I hate being disturbed, so let's just get along appropriately.", next: "class_after_study", setFlags: ["personality_study", "knowsName_Teacher"], stats: { Teacher: { affinity: -15 } } }
        ]
    },
    "classroom_2_3": {
        name: "Me",
        text: "(After the conversation with the teacher, it's finally time to be formally introduced to the classmates. Countless eyes are focused on me.)",
        character: "assets/images/characters/teacher.png",
        choices: [
            { text: "My name is '{name}'. Please take care of me!", next: "teacher_name_share_normal", setFlag: "knowsName_Teacher", stats: { Teacher: { affinity: 15 } } },
            { text: "Alright! Let's get along well from today, classmates.", next: "class_after_party", setFlags: ["personality_active", "knowsName_Teacher"], stats: { Teacher: { affinity: 5 } } },
            { text: "Hello! I like exercising and have an active personality!", next: "class_after_active", setFlags: ["personality_active", "knowsName_Teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "Nice to meet you. I prefer staying quiet.", next: "class_after_quiet", setFlags: ["personality_quiet", "knowsName_Teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "I'm here to study. I hate being disturbed, so let's just get along appropriately.", next: "class_after_study", setFlags: ["personality_study", "knowsName_Teacher"], stats: { Teacher: { affinity: -15 } } }
        ]
    },
    "teacher_name_share_high": {
        name: "Homeroom Teacher",
        text: "\"Oh, {name}... that's a very pretty name. Now, {name}. Please say a word of introduction to your friends. Everyone, please welcome him!\"",
        character: "assets/images/characters/teacher_smile.png",
        choices: [
            { text: "Greet with incredibly high tension!", next: "class_after_party", setFlag: "personality_active" },
            { text: "Greet actively.", next: "class_after_active", setFlag: "personality_active" },
            { text: "Greet calmly.", next: "class_after_quiet", setFlag: "personality_quiet" },
            { text: "Greet loosely as if it's bothersome.", next: "class_after_study", setFlag: "personality_study", stats: { Teacher: { affinity: -20 } } }
        ]
    },
    "teacher_name_share_low": {
        name: "Homeroom Teacher",
        text: "\"...Now, {name}. Please introduce yourself briefly to your friends and take your seat. Everyone, be quiet.\"",
        character: "assets/images/characters/teacher_angry.png",
        choices: [
            { text: "Greet with incredibly high tension!", next: "class_after_party", setFlag: "personality_active" },
            { text: "Greet actively.", next: "class_after_active", setFlag: "personality_active" },
            { text: "Greet calmly.", next: "class_after_quiet", setFlag: "personality_quiet" },
            { text: "Greet loosely as if it's bothersome.", next: "class_after_study", setFlag: "personality_study", stats: { Teacher: { affinity: -20 } } }
        ]
    },
    "teacher_name_share_normal": {
        name: "Homeroom Teacher",
        text: "\"Now, {name}. Please say a word of introduction to your friends.\"",
        character: "assets/images/characters/teacher.png",
        choices: [
            { text: "Greet with incredibly high tension!", next: "class_after_party", setFlag: "personality_active" },
            { text: "Greet actively.", next: "class_after_active", setFlag: "personality_active" },
            { text: "Greet calmly.", next: "class_after_quiet", setFlag: "personality_quiet" },
            { text: "Greet loosely as if it's bothersome.", next: "class_after_study", setFlag: "personality_study", stats: { Teacher: { affinity: -20 } } }
        ]
    },
    "teacher_name_share": {
        name: "Homeroom Teacher",
        text: "\"Oh, {name}... that's a very pretty name. Now, {name}. Please say a word of introduction to your friends.\"",
        character: "assets/images/characters/teacher_smile.png",
        choices: [
            { text: "Greet with incredibly high tension!", next: "class_after_party", setFlag: "personality_active" },
            { text: "Greet actively.", next: "class_after_active", setFlag: "personality_active" },
            { text: "Greet calmly.", next: "class_after_quiet", setFlag: "personality_quiet" },
            { text: "Greet loosely as if it's bothersome.", next: "class_after_study", setFlag: "personality_study", stats: { Teacher: { affinity: -20 } } }
        ]
    },
    "class_after_party": {
        name: "Classmates",
        text: "\"Whoa~! Our transfer student has great energy! Nice to meet you!\"",
        next: "class_after_common"
    },
    "class_after_active": {
        name: "Classmates",
        text: "\"Hello! Let's get along!\"",
        next: "class_after_common"
    },
    "class_after_quiet": {
        name: "Classmates",
        text: "\"Hehe, he looks a bit shy. Welcome!\"",
        next: "class_after_common"
    },
    "class_after_study": {
        name: "Classmates",
        text: "\"...Is he a bit prickly? Well, alright.\"",
        next: "class_after_common"
    },
    "class_after_common": {
        name: "Homeroom Teacher",
        text: "\"Alright, introduction is over. {name}, you go sit in the empty seat next to Seoyeon. Seoyeon, raise your hand!\"",
        character: "assets/images/characters/teacher.png",
        next: "class_after_common_2"
    },
    "class_after_common_2": {
        name: "Seoyeon",
        text: "(Seoyeon raises her hand with a bright smile. Beside her, the seat is empty as promised.)",
        characters: {
            left: "assets/images/characters/teacher.png",
            right: "assets/images/characters/seyoun_laugh.png"
        },
        next: "class_after_common_3"
    },
    "class_after_common_3": {
        name: "Me",
        text: "(I walk towards the seat next to Seoyeon. My heart is beating fast... Today is going to be an interesting day.)",
        next: "morning_end"
    },
    "morning_end": {
        name: "System",
        text: "Morning school arrival scene completed. Lunchtime will now begin.",
        next: "lunch_start"
    }
});
