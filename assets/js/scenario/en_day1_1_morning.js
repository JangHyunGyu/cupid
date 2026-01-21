if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

Object.assign(SCENARIO[1], {
    "start": {
        name: "Me",
        text: "(Warm sunlight... It's my first day at this school. I'm a bit nervous.)",
        background: "assets/images/background/school.png",
        bgm: "intro.mp3",
        character: null,
        next: "start_2"
    },
    "start_2": {
        name: "Me",
        text: "(An unfamiliar uniform, a new environment... but I have a feeling something good will happen.)",
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
        text: "\"Hello? I haven't seen you before. Are you the new student joining us today?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "intro_1"
    },
    "intro_1": {
        name: "Me",
        text: "(A girl with a bright smile approached me. A sweet scent of shampoo drifted by.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "intro_2"
    },
    "intro_2": {
        name: "Me",
        text: "(When our eyes met, my heart skipped a beat. She's... stunningly beautiful.)",
        next: "intro_3"
    },
    "intro_3": {
        name: "Seoyeon",
        text: "\"I'm Seoyeon, the student council president. I'm here to show you around. Nice to meet you!\"",
        setFlags: ["metSeoyeon", "knowsName_Seoyeon"],
        choices: [
            { text: "Nice to meet you! This school is beautiful.", next: "path_friendly_1", stats: { Seoyeon: { affinity: 3 } } },
            { text: "Wow... you're really pretty.", next: "path_blush_1", stats: { Seoyeon: { affinity: 10 } } },
            { text: "Too pretty for a student council president, isn't it?", next: "path_tease_1", stats: { Seoyeon: { affinity: 7 } } },
            { text: "(Stare blankly at her.)", next: "path_silent_1", stats: { Seoyeon: { affinity: 5 } } }
        ]
    },
    "path_friendly_1": {
        name: "Seoyeon",
        text: "(She smiled, and the whole world seemed to light up.) \"Hehe, I hoped you'd like it! Follow me.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_1"
    },
    "path_tease_1": {
        name: "Seoyeon",
        text: "(She winked playfully.) \"Oh, a flatterer on the first day? I'll give you a passing grade. Let's go!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "hallway_1"
    },
    "path_blush_1": {
        name: "Seoyeon",
        text: "(Her face turned bright red.) \"Th-that was so sudden! Honestly... anyway, just follow me!\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "hallway_1"
    },
    "path_silent_1": {
        name: "Seoyeon",
        text: "(She leaned in close, her eyes sparkling.) \"Hmm? What's wrong? Fallen for me already? Hehe.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_1"
    },
    "hallway_1": {
        name: "Me",
        text: "(I followed Seoyeon down the hallway. The school felt alive with the voices of students.)",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_back.png",
        next: "hallway_2"
    },
    "hallway_2": {
        name: "Seoyeon",
        text: "\"This is the hallway leading to the classrooms. It's usually quiet during classes, but very lively during breaks.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_talk_choice"
    },
    "hallway_talk_choice": {
        name: "Seoyeon",
        text: "\"Any questions so far? I'm here to help, so don't be shy.\"",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "I'm curious about you, Seoyeon.", next: "hallway_talk_about_seoyeon", stats: { Seoyeon: { affinity: 10 } } },
            { text: "Tell me more about the school rules.", next: "hallway_talk_rules", stats: { Seoyeon: { affinity: 5 } } },
            { text: "I just want to get to my class quickly.", next: "hallway_talk_quick", stats: { Seoyeon: { affinity: -5 } } }
        ]
    },
    "hallway_talk_about_seoyeon": {
        name: "Seoyeon",
        text: "\"Me? Hehe, there's not much to tell. I just like helping people. I hope we can be good friends!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        bgm: "love1.mp3",
        next: "hallway_finish"
    },
    "hallway_talk_rules": {
        name: "Seoyeon",
        text: "\"Rules? Well, just don't be late and be nice to everyone. You'll do fine!\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "hallway_finish"
    },
    "hallway_talk_quick": {
        name: "Seoyeon",
        text: "\"Oh, I see. You're quite diligent! Let's head straight to the teacher's office then.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "hallway_finish"
    },
    "hallway_finish": {
        name: "Seoyeon",
        text: "\"Alright, we're almost there. The teacher's office is just around the corner.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "teacher_office_start"
    },
    "teacher_office_start": {
        type: "free_talk",
        name: "Seoyeon",
        text: "\"Oh, we've shared names but haven't really talked. Anything you're curious about? Ask me anything!\"",
        context: "Walking down the school hallway with the transfer student protagonist. Keep the conversation light. Continue until finished. At the final turn, suggest moving on with the tour.",
        personality: "Kind, friendly, and responsible student council president. Developing a crush on the protagonist.",
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
        text: "(Talking with Seoyeon made the tour fly by. Being with her is so much fun.)",
        character: "assets/images/characters/seyoun_laugh.png",
        choices: [
            { text: "The school is great, but it's even better with you as my guide.", next: "hallway_talk_flatter_high", stats: { Seoyeon: { affinity: 8 } } },
            { text: "Seoyeon... you're like a goddess. Just hearing your voice is healing.", next: "hallway_talk_trap_high", stats: { Seoyeon: { affinity: 7 } } },
            { text: "(Sneak a peek at her profile while listening.)", next: "hallway_talk_listen_high", stats: { Seoyeon: { affinity: 3 } } }
        ]
    },
    "hallway_1_3_low": {
        name: "Me",
        text: "(Seoyeon's expression doesn't look great. I must have said something wrong. She started the tour with a cold attitude.)",
        character: "assets/images/characters/seyoun_pout.png",
        choices: [
            { text: "The school is lively. Are you in any clubs?", next: "hallway_talk_club_low", stats: { Seoyeon: { affinity: -2 } } },
            { text: "Even the school looks better because you're showing me around.", next: "hallway_talk_flatter_low", stats: { Seoyeon: { affinity: -5 } } },
            { text: "Seoyeon... you're like a goddess. Hearing your voice is like being in heaven.", next: "hallway_talk_trap_low", stats: { Seoyeon: { affinity: -25 } } }
        ]
    },
    "hallway_1_3": {
        name: "Me",
        text: "(I started walking down the hallway with Seoyeon. She began to kindly explain various parts of the school.)",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "The school is lively. Do you do any club activities?", next: "hallway_talk_club_normal", stats: { Seoyeon: { affinity: 3 } } },
            { text: "The facilities are good, but it looks even better because of you.", next: "hallway_talk_flatter_normal", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Seoyeon... you're like a goddess. Just hearing your voice is like heaven.", next: "hallway_talk_trap_normal", stats: { Seoyeon: { affinity: -5 } } },
            { text: "(Listen quietly to her explanation.)", next: "hallway_talk_listen_normal", stats: { Seoyeon: { affinity: 2 } } }
        ]
    },
    "hallway_talk_trap_high": {
        name: "Seoyeon",
        text: "(She stops and looks at me, blushing slightly but with a playful grin.) \"Oh my... are you always so blunt? Hehe, but thank you. Just don't tease me too much!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 7 } },
        next: "hallway_2"
    },
    "hallway_talk_trap_low": {
        name: "Seoyeon",
        text: "(She stops, her eyes cold as ice.) \"Stop. That's inappropriate. I find it problematic on your first day. Find the rest of the way yourself.\"",
        character: "assets/images/characters/seyoun_angry.png",
        stats: { Seoyeon: { affinity: -25 } },
        next: "hallway_2"
    },
    "hallway_talk_trap_normal": {
        name: "Seoyeon",
        text: "(She stops and looks at me, her eyes cooling slightly.) \"Um... thanks, but that's a bit much. We just met. That joke went a bit too far.\"",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -5 } },
        next: "hallway_2"
    },
    "hallway_talk_club_high": {
        name: "Seoyeon",
        text: "(Her eyes sparkle.) \"Yes! I'm in the gardening club. I love flowers. Do you like them too? Visit the greenhouse later! I'll give you a special tour.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "hallway_2"
    },
    "hallway_talk_club_low": {
        name: "Seoyeon",
        text: "(She nods mechanically.) \"Yes. I'm in the student council and gardening club. Was that all? Let's move on.\"",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: -2 } },
        next: "hallway_2"
    },
    "hallway_talk_club_normal": {
        name: "Seoyeon",
        text: "(She looks pleased.) \"Yes! I'm in the gardening club. Touching the soil really calms me down. Come visit the greenhouse whenever you like!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "hallway_2"
    },
    "hallway_talk_flatter_high": {
        name: "Seoyeon",
        text: "(She blushes deeply and smiles.) \"You really have a way with words. I was worried if you'd adjust, but now I'm the one being cheered up. Thanks, I feel so comfortable with you.\"",
        character: "assets/images/characters/seyoun_shy2.png",
        stats: { Seoyeon: { affinity: 8 } },
        next: "hallway_2"
    },
    "hallway_talk_flatter_low": {
        name: "Seoyeon",
        text: "(She shoots a cold glance.) \"You're quite the smooth talker. I've heard enough empty compliments. Just keep up and focus on the tour.\"",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -5 } },
        next: "hallway_2"
    },
    "hallway_talk_flatter_normal": {
        name: "Seoyeon",
        text: "(She blushes with a shy smile.) \"Really... you say such sweet things. I'm usually so tense, but I feel relaxed around you. I might even start relying on you too much... Hehe.\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "hallway_2"
    },
    "hallway_talk_listen_high": {
        name: "Seoyeon",
        text: "(She continues excitedly.) \"It's so nice to have someone listen so closely! You're really kind, {name}. This tour is actually fun! Ask anything else!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "hallway_2"
    },
    "hallway_talk_listen_low": {
        name: "Seoyeon",
        text: "\"Did you get all that? Then let's move on. Don't just stand there dazed, follow me.\"",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: -5 } },
        next: "hallway_2"
    },
    "hallway_talk_listen_normal": {
        name: "Seoyeon",
        text: "\"Thanks for listening so well. You're very sincere, {name}! I'm sure you'll fit in here in no time.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 2 } },
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
        text: "(She stops and turns to face me, looking intently into my eyes.) \"Any clubs you're interested in? The student council is always open. If you join... I could even show you the ropes myself.\"",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "If I join, can I see you every day? Then I'm in!", next: "path_flirt_2", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Actually... I'm more interested in getting to know YOU, Seoyeon.", next: "path_direct_2", stats: { Seoyeon: { affinity: 6 } } },
            { text: "I'll decide once I've settled in.", next: "path_normal_2", stats: { Seoyeon: { affinity: -10 } } },
            { text: "Clubs sound like a lot of work. I'll pass.", next: "path_rude_2", stats: { Seoyeon: { affinity: -40 } } }
        ]
    },
    "hallway_2_low": {
        name: "Seoyeon",
        text: "(She stops, her gaze cold.) \"That kind of behavior is unacceptable. Show some courtesy. We're at the classroom door. Go in.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "classroom_1_1"
    },
    "path_rude_2": {
        name: "Seoyeon",
        text: "(She doesn't hide her disappointment.) \"I see. Well, the classroom is right here. Go on in.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "classroom_1_1"
    },
    "path_flirt_2": {
        name: "Seoyeon",
        text: "(She flushes, a small smile playing on her lips.) \"E-every day? I'd be a little happy if you joined. I'll be waiting!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "classroom_1_1"
    },
    "path_normal_2": {
        name: "Seoyeon",
        text: "(She nods and leads the way again. I feel a slight pang of regret.)",
        character: "assets/images/characters/seyoun_back.png",
        next: "classroom_1_1"
    },
    "path_direct_2": {
        name: "Seoyeon",
        text: "(She lets out a clear, beautiful laugh.) \"Hehe, you're really honest, aren't you? About me... well, I might tell you, or I might not! I have high expectations!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "classroom_1_1"
    },
    "classroom_1_1": {
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "classroom_1_1_high" },
            { minAffinity: 0, next: "classroom_1_1_normal" },
            { minAffinity: -100, next: "classroom_1_1_low" }
        ],
        next: "classroom_1_1_normal"
    },
    "classroom_1_1_high": {
        name: "Seoyeon",
        text: "(She gently takes my hand. Her soft touch makes my heart skip a beat.) \"{name}, don't be nervous. I'm right here. ...Also, I asked to have you sit right next to me. Keep it a secret!\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "classroom_2"
    },
    "classroom_1_1_low": {
        name: "Seoyeon",
        text: "(She walks ahead without looking back, her back cold and distant.) \"This is Class 2-3. Go in. Don't be late on your first day.\"",
        character: "assets/images/characters/seyoun_back.png",
        next: "classroom_2"
    },
    "classroom_1_1_normal": {
        name: "Seoyeon",
        text: "(She gives me an encouraging tap on the shoulder.) \"This is Class 2-3. Don't be nervous. I'm right here with you, so just be yourself. Okay?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "classroom_2"
    },
    "classroom_2": {
        name: "Homeroom Teacher",
        text: "(Dozens of eyes turn toward me. The teacher taps on the desk to quiet the room.)",
        background: "assets/images/background/room_school.png",
        bgm: "daily.mp3",
        character: "assets/images/characters/teacher.png",
        setFlag: "metTeacher",
        next: "teacher_free_talk"
    },
    "teacher_free_talk": {
        type: "free_talk",
        name: "Homeroom Teacher",
        text: "\"It seems everyone is very interested. You might be nervous, but they're all good kids. Any questions before you introduce yourself?\"",
        context: "In Class 2-3. Just before the introduction. Keep conversation going. At the final turn, prompt the student to prepare for the greeting.",
        personality: "Professional but secretly clumsy and flustered by the student's mature appearance. Secretly wants to depend on others.",
        character: "assets/images/characters/teacher_smile.png",
        affinityChar: "Teacher",
        affinityBranches: [
            { minAffinity: 10, next: "classroom_2_3_high" },
            { minAffinity: -10, next: "classroom_2_3_low" },
            { minAffinity: -999, next: "classroom_2_3" }
        ],
        next: "classroom_2_3"
    },
    "classroom_2_3_high": {
        name: "Me",
        text: "(Talking with the teacher helped me relax. She seems to like me. Time to introduce myself.)",
        character: "assets/images/characters/teacher_smile.png",
        choices: [
            { text: "My name is '{name}'. Nice to meet you all!", next: "class_after_party", setFlags: ["personality_active", "knowsName_Teacher"], stats: { Teacher: { affinity: 15 } } },
            { text: "Hi! I love sports, let's get along!", next: "class_after_active", setFlags: ["personality_active", "knowsName_Teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "Nice to meet you. I'm usually the quiet type.", next: "class_after_quiet", setFlags: ["personality_quiet", "knowsName_Teacher"], stats: { Teacher: { affinity: 4 } } },
            { text: "I'm just here to study. Keep it quiet.", next: "class_after_study", setFlags: ["personality_study", "knowsName_Teacher"], stats: { Teacher: { affinity: -15 } } }
        ]
    },
    "classroom_2_3_low": {
        name: "Me",
        text: "(The teacher's gaze is sharp. I made a bad first impression. I'll have to introduce myself in this chilly air.)",
        character: "assets/images/characters/teacher_angry.png",
        choices: [
            { text: "My name is '{name}'. Nice to meet you all!", next: "class_after_party", setFlags: ["personality_active", "knowsName_Teacher"], stats: { Teacher: { affinity: 5 } } },
            { text: "Hi! I love sports, let's get along!", next: "class_after_active", setFlags: ["personality_active", "knowsName_Teacher"], stats: { Teacher: { affinity: 2 } } },
            { text: "Nice to meet you. I'm usually the quiet type.", next: "class_after_quiet", setFlags: ["personality_quiet", "knowsName_Teacher"], stats: { Teacher: { affinity: 2 } } },
            { text: "I'm just here to study. Keep it quiet.", next: "class_after_study", setFlags: ["personality_study", "knowsName_Teacher"], stats: { Teacher: { affinity: -25 } } }
        ]
    },
    "classroom_2_3": {
        name: "Me",
        text: "(The talk with the teacher is over. Time for my official introduction. All eyes are on me.)",
        character: "assets/images/characters/teacher.png",
        choices: [
            { text: "My name is '{name}'. Nice to meet you all!", next: "class_after_party", setFlags: ["personality_active", "knowsName_Teacher"], stats: { Teacher: { affinity: 10 } } },
            { text: "Hi! I love sports, let's get along!", next: "class_after_active", setFlags: ["personality_active", "knowsName_Teacher"], stats: { Teacher: { affinity: 3 } } },
            { text: "Nice to meet you. I'm usually the quiet type.", next: "class_after_quiet", setFlags: ["personality_quiet", "knowsName_Teacher"], stats: { Teacher: { affinity: 3 } } },
            { text: "I'm just here to study. Keep it quiet.", next: "class_after_study", setFlags: ["personality_study", "knowsName_Teacher"], stats: { Teacher: { affinity: -20 } } }
        ]
    },
    "class_after_active": {
        name: "Classmates",
        text: "(Cheers erupt. The guys in the back are excited. Seoyeon claps with a smile.) \"Whoa! Transfer student, wanna play volleyball at lunch?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "lunch_time"
    },
    "class_after_quiet": {
        name: "Classmates",
        text: "(The class nods calmly. Seoyeon looks pleased by my serious vibe.) \"Wow, he's got a nice vibe... I'll say hi later.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "lunch_time"
    },
    "class_after_party": {
        name: "Classmates",
        text: "(The classroom bursts into lively chatter. Seoyeon laughs.) \"{name}, you're so cool! Eat lunch with us today!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "lunch_time"
    },
    "class_after_study": {
        name: "Classmates",
        text: "(A chilly silence falls. Seoyeon's expression stiffens slightly.) \"Wow... intense. Better not get in his way...\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "lunch_time"
    }
});
