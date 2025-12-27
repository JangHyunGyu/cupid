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
        text: "\"Hi? I haven't seen your face before. Standing here blankly... Are you the transfer student, {name?}?\"",
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
        setFlag: "metSeoyeon",
        choices: [
            { text: "Yeah, nice to meet you. The school is so big I was getting lost.", next: "path_friendly_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "You... are really pretty. (My true feelings just slipped out...!)", next: "path_blush_1", stats: { Seoyeon: { affinity: 15 } } },
            { text: "Oh, really? Can you move? I'm busy.", next: "path_rude_1", stats: { Seoyeon: { affinity: -20 } } }
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
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1"
    },
    "path_tease_1": {
        name: "Seoyeon",
        text: "(She smiles playfully and winks.)",
        character: "assets/images/characters/seyoun_nomal.png",
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
        text: "(Seoyeon's face turns red. She flusteredly turns around quickly.)",
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
        setFlag: "knowsName_서연",
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
        context: "A situation where she is having a light conversation with the transfer student protagonist while walking down the school hallway together.",
        personality: "A kind, gentle, and responsible student council president. She has a crush on the transfer student protagonist.",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_1_3"
    },
    "hallway_1_3": {
        name: "Seoyeon",
        text: "\"I'll briefly explain the school facilities as we pass through the hallway. That place you see over there is the library, which is our school's pride. And over there is...\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "The school is really lively. Seoyeon, do you also do club activities?", next: "hallway_talk_club", stats: { Seoyeon: { affinity: 5 } } },
            { text: "The facilities are good, but it looks even better because of the person guiding me.", next: "hallway_talk_flatter", stats: { Seoyeon: { affinity: 10 } } },
            { text: "My god, Seoyeon... You're really like a goddess. Just hearing your voice makes me feel like I'm in heaven.", next: "hallway_talk_trap", stats: { Seoyeon: { affinity: -15 } } },
            { text: "(Quietly listening to her explanation while walking.)", next: "hallway_talk_listen", stats: { Seoyeon: { affinity: 3 } } }
        ]
    },
    "hallway_talk_trap": {
        name: "Seoyeon",
        text: "(Seoyeon stops as if flustered and stares at me intently. Her eyes turn a bit cold.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_talk_trap_2"
    },
    "hallway_talk_trap_2": {
        name: "Seoyeon",
        text: "\"Um... well, thanks, but... that's a bit burdensome. We haven't known each other for long, right? I think the joke is a bit too much.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_talk_club": {
        name: "Seoyeon",
        text: "(She looks at me as if glad.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_talk_club_2"
    },
    "hallway_talk_club_2": {
        name: "Seoyeon",
        text: "\"Yeah! I'm in the student council, but I'm actually also in the gardening club. I like taking care of flowers. Touching the soil makes me feel at peace. Come visit our greenhouse later if you have time!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_2"
    },
    "hallway_talk_flatter": {
        name: "Seoyeon",
        text: "(She answers while blushing as if shy.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_talk_flatter_2"
    },
    "hallway_talk_flatter_2": {
        name: "Seoyeon",
        text: "\"Really... You speak so beautifully. Actually, I'm always nervous because of my position as the student council president, but I feel at ease when I'm with you. I might end up wanting to act spoiled without knowing... Hehe, just kidding.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "hallway_2"
    },
    "hallway_talk_listen": {
        name: "Seoyeon",
        text: "(She continues her explanation as if excited.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_talk_listen_2"
    },
    "hallway_talk_listen_2": {
        name: "Seoyeon",
        text: "\"Thank you so much for listening to my explanation so well. {name?} seems like a very sincere person! With this attitude, you'll adapt to school life in no time.\"",
        character: "assets/images/characters/seyoun_nomal.png",
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
            { text: "If I join the student council, can I be with you every day? Then I'll definitely apply!", next: "path_flirt_2", stats: { Seoyeon: { affinity: 10 } } },
            { text: "If it's the gardening club you're in, I'm interested too! I want to grow flowers with you.", next: "path_club_flower", stats: { Seoyeon: { affinity: 15 } } },
            { text: "Rather than a club... I want to know more about you, Seoyeon.", next: "path_direct_2", stats: { Seoyeon: { affinity: 12 } } },
            { text: "I'm not sure yet. I'll decide after I adapt to school life a bit.", next: "path_normal_2", stats: { Seoyeon: { affinity: -5 } } },
            { text: "Clubs are annoying... I'll just be alone.", next: "path_rude_2", stats: { Seoyeon: { affinity: -25 } } }
        ]
    },
    "path_rude_2": {
        name: "Seoyeon",
        text: "(She can't hide her disappointment. Her shoulders seem to drop a bit.)",
        character: "assets/images/characters/seyoun_pout.png",
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
        next: "classroom_1_1"
    },
    "path_club_flower": {
        name: "Seoyeon",
        text: "(She playfully taps my shoulder. I feel the distance between us has become much closer. I feel a pleasant warmth from her touch. She looks up at me with a playful expression.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "path_club_flower_2"
    },
    "path_club_flower_2": {
        name: "Seoyeon",
        text: "\"Hmph... Aren't you quite the player? I was worried because the gardening club has few members, but it'll get noisy if someone like you joins. You have to come, okay? It's a promise?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "classroom_1_1"
    },
    "path_normal_2": {
        name: "Seoyeon",
        text: "(She nods and starts walking ahead again. I feel a bit disappointed.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_back.png",
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
        next: "classroom_1_1"
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
        context: "Place: Inside Class 2-3, in front of the podium. Situation: A short waiting time just before the homeroom teacher introduces the transfer student protagonist to the students. Dozens of students are watching us. We are already in the middle of the classroom, definitely not in the hallway. We are having a conversation inside the classroom.",
        personality: "A professional teacher with a clear distinction between public and private life, but actually has a clumsy side and feels flustered by the protagonist's unexpectedly mature appearance. She has a 'gap moe' where she secretly wants to rely on the protagonist.",
        character: "assets/images/characters/teacher.png",
        next: "classroom_2_3"
    },
    "classroom_2_3": {
        name: "Homeroom Teacher",
        text: "\"Now, everyone pay attention! This is {name?}, who will be with us from today. Everyone, get along well. Now, shall we have a word of introduction?\"",
        character: "assets/images/characters/teacher.png",
        choices: [
            { text: "My name is '{name}'. Nice to meet you!", next: "teacher_name_share", setFlag: "knowsName_담임선생님", stats: { Teacher: { affinity: 5 } } },
            { text: "Waaaah! Nice to meet you guys! Let's get along well from today!", next: "class_after_party", setFlags: ["personality_active", "knowsName_담임선생님"], stats: { Teacher: { affinity: 3 } } },
            { text: "Hi! I like exercising and have an active personality!", next: "class_after_active", setFlags: ["personality_active", "knowsName_담임선생님"], stats: { Teacher: { affinity: 2 } } },
            { text: "Nice to meet you. I'm the type who likes reading books quietly.", next: "class_after_quiet", setFlags: ["personality_quiet", "knowsName_담임선생님"], stats: { Teacher: { affinity: 2 } } },
            { text: "I came here to study. I hate being disturbed, so let's just get along moderately.", next: "class_after_study", setFlags: ["personality_study", "knowsName_담임선생님"], stats: { Teacher: { affinity: -2 } } }
        ]
    },
    "teacher_name_share": {
        name: "Homeroom Teacher",
        text: "\"Oh, so your name is {name}. It's a very pretty name. Now, {name}. Can you give a word of introduction to your friends?\"",
        character: "assets/images/characters/teacher.png",
        choices: [
            { text: "Greet with incredibly high tension!", next: "class_after_party", setFlag: "personality_active" },
            { text: "Greet actively.", next: "class_after_active", setFlag: "personality_active" },
            { text: "Greet calmly.", next: "class_after_quiet", setFlag: "personality_quiet" },
            { text: "Greet roughly as if it's annoying.", next: "class_after_study", setFlag: "personality_study", stats: { Teacher: { affinity: -10 } } }
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
        text: "\"Wow! {name?}'s personality is really great! Okay, let's have lunch together today! We'll show you all the best spots!\"",
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
