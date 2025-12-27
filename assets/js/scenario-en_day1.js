if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}

SCENARIO[1] = {
    "start": {
        name: "Me",
        text: "(In front of the school gate with warm sunlight. I feel the tension of my first day as a transfer student.)",
        background: "assets/images/background/school.png",
        character: null,
        next: "start_2"
    },
    "start_2": {
        name: "Me",
        text: "(Unfamiliar uniforms and scenery... everything feels new.)",
        next: "start_3"
    },
    "start_3": {
        name: "Me",
        text: "(Taking a deep breath, I took a step toward the school gate.)",
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
        text: "\"Hi? I haven't seen your face before. Standing blankly in front of the school gate at this time... Are you the {name?} who's supposed to come today?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "intro_1"
    },
    "intro_1": {
        name: "Me",
        text: "(She approaches with a smile. I can smell a faint scent.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "intro_2"
    },
    "intro_2": {
        name: "Me",
        text: "(Her clear eyes stare at me intently.)",
        next: "intro_3"
    },
    "intro_3": {
        name: "Seoyeon",
        text: "\"I'm 'Seoyeon', the student council president. I came to meet you at the request of your homeroom teacher. Nice to meet you!\"",
        setFlag: "metSeoyeon",
        choices: [
            { text: "Yeah, nice to meet you. The school is so big that I was getting a bit lost.", next: "path_friendly_1", stats: { Seoyeon: { affinity: 5 } } },
            { text: "You... are really pretty. (My true feelings came out without me knowing!)", next: "path_blush_1", stats: { Seoyeon: { affinity: 15 } } },
            { text: "Oh, really? But can you move? I'm busy.", next: "path_rude_1", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "path_rude_1": {
        name: "Seoyeon",
        text: "(Seoyeon's expression hardens instantly. She bites her lip as if flustered.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "path_rude_1_2"
    },
    "path_rude_1_2": {
        name: "Seoyeon",
        text: "\"Oh... sorry. I guess I was in the way. But I have to guide you to the teacher's office... follow me.\"",
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
        text: "\"Hehe, I thought so. It's a bit complicated when you first come to our school, right? I'll guide you perfectly to the teacher's office. Just trust me and follow!\"",
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
        text: "\"Oh, {name?} is full of confidence? It's not so much special treatment as... a sense of responsibility as the student council president? But if you think so, I'll pay special attention to you today!\"",
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
        text: "(Seoyeon suddenly stops and turns to me.) \"Oh, come to think of it, I only introduced myself and haven't heard your name yet! {name?}, what's your name?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "hallway_name_share"
    },
    "hallway_name_share": {
        name: "Me",
        text: "\"My name is '{name}'. Nice to meet you.\"",
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
        text: "\"Wow! {name?}'s personality is really great! Okay, I'm buying tteokbokki today! Let's go for a full course including karaoke!\"",
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
    },
    "lunch_time": {
        name: "Me",
        text: "(Morning classes passed by in a blur, and finally the bell for lunch rang. Kids rush to the cafeteria.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "lunch_time_2"
    },
    "lunch_time_2": {
        name: "Me",
        text: "(It's lunch time. Kids are playing on the playground outside the window.)",
        choices: [
            { text: "Approach Seoyeon and suggest having lunch together.", next: "lunch_seoyeon", setFlag: "metSeoyeon" },
            { text: "Look around the school alone and find a quiet place to eat.", next: "lunch_alone", setFlag: "metYuna" },
            { text: "Follow the sound of the volleyball from the gym.", next: "lunch_dain", setFlag: "metDain" }
        ]
    },
    "lunch_seoyeon": {
        name: "Seoyeon",
        text: "(As I approach Seoyeon, she welcomes me gladly.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "lunch_seoyeon_2"
    },
    "lunch_seoyeon_2": {
        name: "Seoyeon",
        text: "\"I was just about to look for you. We have a secret place on the rooftop, do you want to eat there together?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Yeah! I wanted to eat with Seoyeon.", next: "rooftop_1", stats: { Seoyeon: { affinity: 10 } } },
            { text: "Um... I decided to eat with other kids. (Refuse)", next: "lunch_alone", stats: { Seoyeon: { affinity: -15 } } },
            { text: "Rooftop? Do I have to go all the way there? It's annoying.", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -25 } } }
        ]
    },
    "rooftop_1": {
        name: "Seoyeon",
        text: "(Rooftop with a cool breeze. Seoyeon unfolds her lunch box.)",
        background: "assets/images/background/top_school.png",
        next: "rooftop_1_2"
    },
    "rooftop_1_2": {
        name: "Seoyeon",
        text: "(She hands me chopsticks and smiles shyly.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_1_2_2"
    },
    "rooftop_1_2_2": {
        name: "Seoyeon",
        text: "\"Here, I made this myself this morning. I don't know if it'll suit your taste...\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_1_3"
    },
    "rooftop_1_3": {
        name: "Seoyeon",
        text: "\"Especially this octopus-shaped sausage is my masterpiece! Do you want to try one?\"",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Wow, it looks really delicious! Seoyeon, you're good at cooking too.", next: "rooftop_talk_food", stats: { Seoyeon: { affinity: 5 } } },
            { 
                text: "Ah... say ah. (Taking courage!)", 
                next: "rooftop_talk_ah_fail", 
                affinityChar: "Seoyeon",
                affinityBranches: [
                    { minAffinity: 40, next: "rooftop_talk_ah" }
                ],
                stats: { Seoyeon: { affinity: 5 } } 
            },
            { text: "I've never had such a sincere lunch box before. Thank you so much.", next: "rooftop_talk_thanks", stats: { Seoyeon: { affinity: 10 } } },
            { text: "It doesn't look very tasty... I should have just bought bread at the store.", next: "rooftop_talk_rude", stats: { Seoyeon: { affinity: -30 } } }
        ]
    },
    "rooftop_talk_ah_fail": {
        name: "Seoyeon",
        text: "(Seoyeon's face hardens instantly. She puts down her chopsticks as if flustered.) \"Um... that's a bit... {name?}, aren't we not that close yet? I think the joke is a bit too much.\"",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -15 } },
        next: "rooftop_2"
    },
    "rooftop_talk_rude": {
        name: "Seoyeon",
        text: "(Seoyeon's hand trembles slightly. She forces a smile, but her eyes become moist.)",
        character: "assets/images/characters/seyoun_sad.png",
        next: "rooftop_2"
    },
    "rooftop_talk_food": {
        name: "Seoyeon",
        text: "(She answers while blushing as if happy.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_talk_food_2"
    },
    "rooftop_talk_food_2": {
        name: "Seoyeon",
        text: "\"Really? I'm glad! Actually, I was worried if {name?} would like it, so I even lost sleep thinking about the menu yesterday. Eat a lot, there's still plenty left!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_2"
    },
    "rooftop_talk_ah": {
        name: "Seoyeon",
        text: "(Seoyeon's face turns red. She carefully brings the sausage to my mouth.)",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "rooftop_talk_ah_2"
    },
    "rooftop_talk_ah_2": {
        name: "Seoyeon",
        text: "\"Wh-wh-what?! You really... say such things so casually... Sigh, I really can't with you. Here, just this once! Say ah...\"",
        character: "assets/images/characters/seyoun_shy2.png",
        next: "rooftop_2"
    },
    "rooftop_talk_thanks": {
        name: "Seoyeon",
        text: "(She smiles and wipes the sauce off the corner of my mouth.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_talk_thanks_2"
    },
    "rooftop_talk_thanks_2": {
        name: "Seoyeon",
        text: "\"Don't mention it... I'm the one who's thankful for eating with me. I think it tastes much better than eating alone. Will you eat with me like this often from now on?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_2"
    },
    "rooftop_2": {
        name: "Seoyeon",
        text: "(After finishing the meal, we sit side by side and look at the distant sky. Seoyeon carefully opens her mouth.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_2_2"
    },
    "rooftop_2_2": {
        name: "Seoyeon",
        text: "\"Um, {name?}... Actually, since I first saw you, somehow... I felt like we've known each other for a long time. How about you?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_free_talk"
    },
    "rooftop_free_talk": {
        type: "free_talk",
        name: "Seoyeon",
        text: "\"Hehe, was I too serious all of a sudden? Let's talk more comfortably. What kind of style of person do you like?\"",
        context: "Lunch time, a situation where they are having a conversation in a relaxed and romantic atmosphere after eating lunch boxes alone on the school rooftop.",
        personality: "A state where she has become a bit more bold and honest than usual. She wants to know deeply about the protagonist's tastes or thoughts.",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_choices"
    },
    "rooftop_choices": {
        name: "Seoyeon",
        text: "(She sparkles her eyes, waiting for my answer.)",
        choices: [
            { text: "Me too. Somehow it feels like destiny?", next: "rooftop_destiny", stats: { Seoyeon: { affinity: 10 } } },
            { text: "Maybe it's because Seoyeon treated me so kindly?", next: "rooftop_kind", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Well, I'm not sure yet. But I feel comfortable with you.", next: "rooftop_comfortable", stats: { Seoyeon: { affinity: 7 } } }
        ]
    },
    "rooftop_destiny": {
        name: "Seoyeon",
        text: "(She shyly smiles and gently overlaps her hand on mine.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "rooftop_destiny_2"
    },
    "rooftop_destiny_2": {
        name: "Seoyeon",
        text: "\"Destiny... Hehe, I really like that word. Let's make many more pleasant memories from now on. Is it a promise?\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_kind": {
        name: "Seoyeon",
        text: "(She pouts her lips as if slightly sulky.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "rooftop_kind_2"
    },
    "rooftop_kind_2": {
        name: "Seoyeon",
        text: "\"Hmph... That's such a standard answer. But well, it's not wrong, so I'll let it slide. I'll look forward to a more honest answer from now on?\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "seyoun_contact_exchange"
    },
    "rooftop_comfortable": {
        name: "Seoyeon",
        text: "(She nods as if satisfied.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "rooftop_comfortable_2"
    },
    "rooftop_comfortable_2": {
        name: "Seoyeon",
        text: "\"I'm glad you feel comfortable. I also feel like I can put down the burden of being the student council president for a while when I'm with you. Thank you, {name?}.\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "seyoun_contact_exchange"
    },
    "seyoun_contact_exchange": {
        name: "Seoyeon",
        text: "(Seoyeon hesitates for a moment while packing her bag, then shyly holds out her smartphone.) \"Um... if it's okay, could you give me your contact information? I want to ask you when deciding on the lunch box menu from now on...\"",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            { text: "Of course! I wanted to talk more with Seoyeon too.", next: "seyoun_contact_success", setFlags: ["has_number_seyoun", "has_any_contact"] },
            { text: "Sorry, I think it's a bit early yet.", next: "seyoun_contact_fail", stats: { Seoyeon: { affinity: -10 } } }
        ]
    },
    "seyoun_contact_success": {
        name: "Seoyeon",
        text: "(She smiles brightly and saves my number. Her fingers move busily as if happy.) \"Thank you! Then... I'll send you a message later. You have to reply, okay?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 15 } },
        next: "after_school_start"
    },
    "seyoun_contact_fail": {
        name: "Seoyeon",
        text: "(She makes a slightly gloomy expression, but soon forces a smile and nods.) \"Oh... yeah, sorry! I guess I was too hasty. We can get close slowly, right?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_school_start"
    },
    "lunch_alone": {
        name: "Me",
        text: "(Walking down the quiet hallway, I arrived at the library annex. There, I ran into a girl reading a book leaning against the window.)",
        background: "assets/images/background/library_old.png",
        next: "alone_2"
    },
    "alone_2": {
        name: "???",
        text: "(She speaks in a low voice without taking her eyes off the book.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "alone_2_2"
    },
    "alone_2_2": {
        name: "???",
        text: "\"...Are you lost? Students don't usually come here. You found it well, {name?}.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_intro"
    },
    "yuna_intro": {
        name: "???",
        text: "(She slowly raises her head and looks at me. Her deep and mysterious purple eyes quietly observe me.)",
        next: "yuna_intro_2"
    },
    "yuna_intro_2": {
        name: "???",
        text: "\"I'm 'Yuna'. I'm just... someone who likes to stay quiet. This school... is very different from how it looks. From you... somehow I feel a familiar atmosphere.\"",
        setFlag: "metYuna",
        next: "yuna_free_talk"
    },
    "yuna_free_talk": {
        type: "free_talk",
        name: "Yuna",
        text: "\"...Do you have any questions for me? Or do you want to know about this school?\"",
        context: "Quiet library annex, a situation where he first met Yuna, who has a mysterious and cold atmosphere.",
        personality: "A mysterious, cold girl with many secrets. She feels a strange interest in the protagonist.",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_choices"
    },
    "yuna_choices": {
        name: "Yuna",
        text: "(Her purple eyes seem to pierce through me.)",
        choices: [
            { text: "The school is different? What does that mean?", next: "yuna_secret", stats: { Yuna: { affinity: 5 } } },
            { text: "Familiar... Have you seen me before?", next: "yuna_scent", stats: { Yuna: { affinity: 5 } } },
            { text: "You look dangerous somehow. But I can't take my eyes off you.", next: "yuna_danger", stats: { Yuna: { affinity: 10 } } }
        ]
    },
    "yuna_secret": {
        name: "Yuna",
        text: "(She closes the book with a strange smile on her lips. She brings her lips close to my ear and whispers.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_secret_2"
    },
    "yuna_secret_2": {
        name: "Yuna",
        text: "\"Hehe, are you curious? But secrets might be better left unknown. The stories the school wants to hide... knowing them might get you hurt.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "yuna_scent": {
        name: "Yuna",
        text: "(She takes a step closer and stares at me intently. She mutters with a bitter expression.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "yuna_scent_2"
    },
    "yuna_scent_2": {
        name: "Yuna",
        text: "\"No, it's my first time seeing you. But that 'light' in your eyes... I really covet it. It's different from the dead children in this school. Can I keep watching so that light doesn't go out?\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_school_start"
    },
    "yuna_danger": {
        name: "Yuna",
        text: "(She lightly brushes my cheek with her cold fingers. She stares intently into my eyes with a strange smile.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "yuna_danger_2"
    },
    "yuna_danger_2": {
        name: "Yuna",
        text: "\"I look dangerous... Hehe, correct. But I don't dislike people like you who approach even knowing it's dangerous. Until you lose that special light... I'll be by your side.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_school_start"
    },
    "lunch_store": {
        name: "Me",
        text: "(I won the last 'chocolate conch bread' at the store! As I take a bite of the bread with a winner's feeling, sweetness spreads throughout my mouth.)",
        next: "lunch_store_2"
    },
    "lunch_store_2": {
        name: "Me",
        text: "\"Kuu~ As expected, this is the taste! I feel like the fatigue of my first day as a transfer student is completely gone?\"",
        next: "after_school_start"
    },
    "lunch_sleep": {
        name: "Me",
        text: "(I lie face down on the desk and try to sleep. The sunlight coming through the window warms my back.)",
        next: "lunch_sleep_2"
    },
    "lunch_sleep_2": {
        name: "Me",
        text: "(In my dream, I heard someone calling my name. A very nostalgic and sad voice... But when I opened my eyes, there was no one by my side.)",
        next: "after_school_start"
    },
    "lunch_dain": {
        name: "Me",
        text: "(I hear the sound of a volleyball bouncing from the gym. I headed to the gym following the sound.)",
        background: "assets/images/background/playground.png",
        next: "lunch_dain_2"
    },
    "lunch_dain_2": {
        name: "???",
        text: "(As I open the gym door, she was there. She discovers me and smiles brightly, waving her hand.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        setFlag: "metDain",
        next: "lunch_dain_3"
    },
    "lunch_dain_3": {
        name: "???",
        text: "\"Hey, {name?}! Don't just watch from there, come here and let's have a game! You look like you're good at sports?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "dain_name_share"
    },
    "dain_name_share": {
        name: "Me",
        text: "\"My name is '{name}'.\"",
        setFlag: "knowsName_다인",
        next: "dain_name_share_2"
    },
    "dain_name_share_2": {
        name: "Dain",
        text: "\"{name}? That's a cool name! I'm Dain from the volleyball club. No one in our school has a better jump than me, so be prepared!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        next: "lunch_dain_gym_2"
    },
    "lunch_dain_gym_2": {
        name: "Dain",
        text: "\"Now, this is my territory! {name?}, are you ready? I won't go easy on you, so be prepared!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        setFlag: "metDain",
        next: "after_school_start"
    },
    "after_school_start": {
        name: "Me",
        text: "(Before I knew it, all classes were over and the bell announcing after school echoed.)",
        background: "assets/images/background/room_school.png",
        character: null,
        sunset: true,
        next: "after_school_start_2"
    },
    "after_school_start_2": {
        name: "Me",
        text: "(As I pack my bag and try to leave the classroom... the hallway is full of the footsteps of children going home.)",
        sunset: true,
        next: "after_school_start_3"
    },
    "after_school_start_3": {
        name: "Me",
        text: "(Today was a really long day. What should I do now?)",
        sunset: true,
        choices: [
            { text: "Stop by the student council room where Seoyeon is.", next: "after_seoyeon", condition: "metSeoyeon" },
            { text: "Go toward the student council room.", next: "after_seoyeon", excludeCondition: "metSeoyeon", setFlag: "metSeoyeon" },
            { text: "Head to the library annex where Yuna was.", next: "after_yuna", condition: "metYuna" },
            { text: "Look around the quiet places of the school more.", next: "after_yuna_new", excludeCondition: "metYuna" },
            { text: "Go to see Dain practicing in the gym.", next: "after_dain", condition: "metDain" },
            { text: "Head to the gym where lively sounds are heard.", next: "after_dain_new", excludeCondition: "metDain" },
            { text: "I'm tired today, so I'll go straight home.", next: "after_home" }
        ]
    },
    "after_dain_new": {
        name: "Me",
        text: "(As I head to the gym, I see children practicing volleyball while sweating under the window where the sunset light seeps in. Among them, one girl particularly stands out.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        next: "after_dain_new_intro"
    },
    "after_dain_new_intro": {
        name: "???",
        text: "\"Hi! I'm Dain from the volleyball club. You're that kid who transferred today, right?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        setFlag: "metDain",
        next: "after_dain_2"
    },
    "after_dain": {
        name: "Dain",
        text: "(As I arrive at the gym, Dain is jumping high and delivering a powerful spike. Her healthy energy seems to brighten the surroundings.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        next: "after_dain_2"
    },
    "after_dain_2": {
        name: "Dain",
        text: "(During a brief pause in practice, Dain discovers me and runs over while wiping her sweat with a towel.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        next: "dain_free_talk"
    },
    "dain_free_talk": {
        type: "free_talk",
        name: "Dain",
        text: "\"Wow, {name?}! It's even better to see you up close! Do you have any questions for me? About sports, or school life!\"",
        context: "After school, a situation where he is having a conversation with Dain, who has finished practice in the gym where the sun is setting.",
        personality: "A cool and easygoing volleyball club ace. She loves sports, is friendly to the protagonist, and is full of energy.",
        character: "assets/images/characters/dain_nomal.png",
        next: "after_dain_3"
    },
    "after_dain_3": {
        name: "Dain",
        text: "\"Hehe, {name?}! How do I look practicing? Don't I look a bit cool? You haven't fallen for me, have you?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        choices: [
            { text: "Yeah, seeing Dain practice makes me feel energized too.", next: "after_dain_cheer", stats: { Dain: { affinity: 10 } } },
            { text: "Yeah, you really looked cool. I couldn't take my eyes off you playing volleyball.", next: "after_dain_cheer", stats: { Dain: { affinity: 15 } } },
            { text: "Dain, you look really sexy sweating. We're all alone right now...", next: "after_dain_trap", stats: { Dain: { affinity: -20 } } },
            { text: "I came because it was noisy. Can't you practice a bit more quietly?", next: "after_dain_rude", stats: { Dain: { affinity: -30 } } }
        ]
    },
    "after_dain_trap": {
        name: "Dain",
        text: "(Dain's face turns red like a carrot instantly, then changes to an angry expression.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "after_dain_trap_2"
    },
    "after_dain_trap_2": {
        name: "Dain",
        text: "\"Wh-wh-what... what are you saying, you pervert! I'm really disappointed in you! Get out right now! If you don't leave, I'll spike you with a volleyball!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_angry.png",
        sunset: true,
        next: "after_home"
    },
    "after_dain_rude": {
        name: "Dain",
        text: "(Dain's expression hardens instantly. She grips the volleyball tightly and glares at me.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_angry.png",
        sunset: true,
        next: "after_dain_rude_2"
    },
    "after_dain_rude_2": {
        name: "Dain",
        text: "\"What...? Noisy? Ha, that's ridiculous. Don't disturb the practice and get out right now! I have nothing to show to someone like you!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_angry.png",
        sunset: true,
        next: "after_home"
    },
    "after_dain_cheer": {
        name: "Dain",
        text: "(Dain smiles while wrinkling her nose as if shy.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_cheer_2"
    },
    "after_dain_cheer_2": {
        name: "Dain",
        text: "\"Wh-what... It's embarrassing if you praise me all of a sudden! Don't get me wrong, I didn't work hard just for you to hear! But... I feel like I'm getting more energized because you're watching...\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_normal": {
        name: "Dain",
        text: "(Dain playfully taps my shoulder.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_normal_2"
    },
    "after_dain_normal_2": {
        name: "Dain",
        text: "\"Aw~ You're not being honest! Well, fine. Since you're here, can you wait until our practice is over? Let's go eat tteokbokki together!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_nomal.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_end": {
        name: "Me",
        text: "(I sat on the gym stand and watched her until Dain's practice was over.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        next: "after_dain_end_2"
    },
    "after_dain_end_2": {
        name: "Dain",
        text: "(Dain, who finished practice, approaches me while breathing heavily.) \"Phew... phew... Sorry for making you wait! Now, let's go eat the tteokbokki we promised!\"",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        setFlag: "datedDainDay1",
        next: "after_dain_tteokbokki"
    },
    "after_dain_tteokbokki": {
        name: "Dain",
        text: "(Dain makes a happy smile while taking a bite of the steaming tteokbokki.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "after_dain_tteokbokki_2"
    },
    "after_dain_tteokbokki_2": {
        name: "Dain",
        text: "\"Kyah~ As expected, tteokbokki after exercising is the best! Thank you so much for coming with me today. Thanks to you, it seems twice as delicious as usual!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "after_dain_tteokbokki_3"
    },
    "after_dain_tteokbokki_3": {
        name: "Dain",
        text: "\"Let's come to eat together often from now on... not just tomorrow! Is it a promise?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        next: "dain_contact_exchange"
    },
    "dain_contact_exchange": {
        name: "Dain",
        text: "(Dain playfully shakes her smartphone while wiping the tteokbokki sauce.) \"Hey, {name?}! If we want to go around eating delicious things together from now on, shouldn't we at least have each other's contact information? Give me your number!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shirt.png",
        night: true,
        choices: [
            { text: "Sure! It'll be fun to go on a food tour with Dain.", next: "dain_contact_success", setFlags: ["has_number_dain", "has_any_contact"] },
            { 
                text: "While we're at it... can I call you right now?", 
                next: "dain_contact_call_fail",
                affinityChar: "Dain",
                affinityBranches: [
                    { minAffinity: 50, next: "dain_contact_call_success" }
                ],
                setFlags: ["has_number_dain", "has_any_contact"]
            },
            { text: "Um... I'll let you know when I have a chance later.", next: "dain_contact_fail", stats: { Dain: { affinity: -10 } } }
        ]
    },
    "dain_contact_call_success": {
        name: "Dain",
        text: "(Dain blushes and laughs as if flustered.) \"Wh-what! All of a sudden? ...Well, if you want to hear my voice, it's not like I can't. But don't do it for too long! I have to go to practice early tomorrow!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shy.png",
        stats: { Dain: { affinity: 15 } },
        next: "after_home"
    },
    "dain_contact_call_fail": {
        name: "Dain",
        text: "(Dain bursts into a hollow laugh as if it's absurd.) \"Ha! You're really bold, aren't you? Calling as soon as you get the number, aren't you getting ahead of yourself? Let's get close by exchanging messages first!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_nomal.png",
        stats: { Dain: { affinity: -5 } },
        next: "after_home"
    },
    "dain_contact_success": {
        name: "Dain",
        text: "(Dain smiles coolly and saves my number.) \"Okay! Received! I'll send a message as soon as I find a delicious place, so be on standby, okay?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        stats: { Dain: { affinity: 15 } },
        next: "after_home"
    },
    "dain_contact_fail": {
        name: "Dain",
        text: "(Dain looks surprised for a moment, then soon laughs it off vigorously.) \"What~ Are you playing hard to get? Okay, okay! I'll work harder and get your number!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_nomal.png",
        night: true,
        next: "after_home"
    },
    "after_yuna_new": {
        name: "Me",
        text: "(Looking for a quiet place in the school, I arrived at the old library annex. There, a girl is sitting by the window looking at the sunset.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_new_2"
    },
    "after_yuna_new_2": {
        name: "???",
        text: "\"Hi? Coming all the way here at this time... You're quite unique too. I'm Yuna.\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        setFlag: "metYuna",
        next: "after_yuna_3"
    },
    "after_seoyeon": {
        name: "Seoyeon",
        text: "(As I open the student council room door, I see Seoyeon struggling among the piles of documents.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_2"
    },
    "after_seoyeon_2": {
        name: "Seoyeon",
        text: "(As I enter, she looks up in surprise. She puts down her pen and stretches.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_3"
    },
    "after_seoyeon_3": {
        name: "Seoyeon",
        text: "\"Oh? {name?}! What brings you here at this time? Don't tell me... you waited for me?\"",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Yeah, I wanted to go home together. Should I help?", next: "after_seoyeon_help", setFlag: "helpedSeoyeon", stats: { Seoyeon: { affinity: 10 } } },
            { text: "I just came because I wanted to see your face. Aren't you overdoing it?", next: "after_seoyeon_worry", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Don't get me wrong. I just took the wrong way.", next: "after_seoyeon_rude", stats: { Seoyeon: { affinity: -20 } } }
        ]
    },
    "after_seoyeon_rude": {
        name: "Seoyeon",
        text: "(Seoyeon's expression hardens instantly. She turns her gaze back to the documents.)",
        character: "assets/images/characters/seyoun_angry.png",
        next: "after_seoyeon_rude_2"
    },
    "after_seoyeon_rude_2": {
        name: "Seoyeon",
        text: "\"Oh... really? Then can you leave without disturbing me? I'm a bit busy right now.\"",
        character: "assets/images/characters/seyoun_angry.png",
        next: "after_home"
    },
    "after_seoyeon_help": {
        name: "Seoyeon",
        text: "(She opens her eyes wide as if moved. Soon she smiles brightly and gives me a seat next to her.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "after_seoyeon_help_2"
    },
    "after_seoyeon_help_2": {
        name: "Seoyeon",
        text: "(We feel a strange bond while organizing documents in silence.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_help_2_2"
    },
    "after_seoyeon_help_2_2": {
        name: "Seoyeon",
        text: "\"Really? Thank you! If you help me, I think I can finish it quickly. Now, can you help me sort these documents?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "after_seoyeon_help_3"
    },
    "after_seoyeon_help_3": {
        name: "Seoyeon",
        text: "\"Let's... go eat something delicious together after we're done!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_seoyeon_cafe"
    },
    "after_seoyeon_cafe": {
        name: "Seoyeon",
        text: "(After finishing the document organization, we stopped by a small cafe in front of the school.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe_2"
    },
    "after_seoyeon_cafe_2": {
        name: "Seoyeon",
        text: "(Seoyeon makes a happy expression while drinking a drink with plenty of whipped cream.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe_2_2"
    },
    "after_seoyeon_cafe_2_2": {
        name: "Seoyeon",
        text: "\"Phew~ Now I feel like I'm living. Thank you so much for today, {name?}.\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe_3"
    },
    "after_seoyeon_cafe_3": {
        name: "Seoyeon",
        text: "\"Thanks to you, I was able to finish the student council work happily. Can we... go home together tomorrow too?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_nomal.png",
        choices: [
            { text: "Of course. I'll wait for you tomorrow too.", next: "after_seoyeon_promise", stats: { Seoyeon: { affinity: 10 } } },
            { text: "Well, depending on my mood tomorrow? (Joke)", next: "after_seoyeon_tease", stats: { Seoyeon: { affinity: 7 } } }
        ]
    },
    "after_seoyeon_promise": {
        name: "Seoyeon",
        text: "(She smiles brightly while holding out her pinky finger.)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_seoyeon_promise_2"
    },
    "after_seoyeon_promise_2": {
        name: "Seoyeon",
        text: "\"Is it a promise? You can't break it! Then see you tomorrow, {name?}. Get home safely!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_home"
    },
    "after_seoyeon_tease": {
        name: "Seoyeon",
        text: "(She glares at me while puffing out her cheeks.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "after_seoyeon_tease_2"
    },
    "after_seoyeon_tease_2": {
        name: "Seoyeon",
        text: "\"Hmph... You're really mean! But you still have to come, okay? If you don't come, I'll punish you with the authority of the student council president! Hehe, just kidding. See you tomorrow!\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "after_home"
    },
    "after_seoyeon_worry": {
        name: "Seoyeon",
        text: "(She smiles while scratching her head as if shy.)",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_worry_2"
    },
    "after_seoyeon_worry_2": {
        name: "Seoyeon",
        text: "\"Hehe, you caught me. Being the student council president has more work than I thought. But I feel energized because you're worrying about me like this! Just wait a bit, I'll finish it quickly and let's go together!\"",
        character: "assets/images/characters/seyoun_nomal.png",
        next: "after_seoyeon_cafe"
    },
    "after_yuna": {
        name: "Yuna",
        text: "(The library annex is darker and quieter than during the day. There, a girl is sitting by the window looking at the sunset.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_2"
    },
    "after_yuna_2": {
        name: "Yuna",
        text: "(She looks out the window for a long time even though she knows I've come.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_3"
    },
    "after_yuna_3": {
        name: "Yuna",
        text: "\"Oh, {name?}... I like the library after school because it's quieter. What brings you here?\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "yuna_name_share_pre"
    },
    "yuna_name_share_pre": {
        name: "Me",
        text: "\"My name is '{name}'. I want to get close to you.\"",
        setFlag: "knowsName_유나",
        next: "yuna_name_share"
    },
    "after_yuna_secret_deep": {
        name: "Yuna",
        text: "(Yuna closes the book and stares at me intently. Her eyes seem to glow strangely in purple.) \"...The truth? Are you ready to handle it? Okay, if you're that serious... follow me. Promise me you won't tell anyone.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 20 } },
        next: "after_yuna_rooftop"
    },
    "after_yuna_secret_fail": {
        name: "Yuna",
        text: "(Yuna gives a cold smile.) \"The truth... Hehe, you still look too light to bear that weight. You're free to be curious, but don't dig too deep. You might get hurt.\"",
        character: "assets/images/characters/yuna_nomal.png",
        stats: { Yuna: { affinity: -10 } },
        next: "after_home"
    },
    "after_yuna_boring": {
        name: "Yuna",
        text: "(Yuna sighs as if it's pathetic and turns her gaze back to the book.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_yuna_boring_2"
    },
    "after_yuna_boring_2": {
        name: "Yuna",
        text: "\"Lunch...? Talk about such worldly things with other kids. I'm busy right now, so can you leave without disturbing me?\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_home"
    },
    "after_yuna_rude": {
        name: "Yuna",
        text: "(She closes the book and looks at me coldly. The air seems to freeze instantly.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_yuna_rude_2"
    },
    "after_yuna_rude_2": {
        name: "Yuna",
        text: "\"Gloomy...? Hehe, you still don't know anything. This strange energy surrounding this school... don't you feel it? Ignorance is sometimes a sin. Disappear from my sight right now.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_home"
    },
    "yuna_name_share": {
        name: "Yuna",
        text: "(She recites my name in a low voice.) \"...{name}. I'll remember it. But names... might not have much meaning in this school.\"",
        character: "assets/images/characters/yuna_nomal.png",
        sunset: true,
        next: "after_yuna_know"
    },
    "after_yuna_know": {
        name: "Yuna",
        text: "(She slowly turns her head and looks at me. A faint smile spreads across her lips.)",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "after_yuna_know_2"
    },
    "after_yuna_know_2": {
        name: "Yuna",
        text: "(She takes my hand and leads me to the annex rooftop.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_know_2_2"
    },
    "after_yuna_know_2_2": {
        name: "Yuna",
        text: "\"About me...? Hehe, I don't know if you're brave or reckless.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_know_3"
    },
    "after_yuna_know_3": {
        name: "Yuna",
        text: "\"Okay, tonight will be long. I'll tell you little by little... very little by little. Follow me.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_rooftop"
    },
    "after_yuna_rooftop": {
        name: "Yuna",
        text: "(The school seen from the annex rooftop is completely different from during the day.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_yuna_rooftop_2"
    },
    "after_yuna_rooftop_2": {
        name: "Yuna",
        text: "(Yuna leans against the railing and gazes into the distance.)",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_yuna_rooftop_2_2"
    },
    "after_yuna_rooftop_2_2": {
        name: "Yuna",
        text: "\"People think this school is perfect. But nothing is perfect.\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        next: "after_yuna_rooftop_3"
    },
    "after_yuna_rooftop_3": {
        name: "Yuna",
        text: "\"It's just that problems that haven't been revealed are festering. This heavy energy filling this school... didn't you feel such a sense of incongruity?\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        choices: [
            { text: "I can go anywhere with you.", next: "after_yuna_together" },
            { text: "Darkness... it's a bit scary.", next: "after_yuna_scared" }
        ]
    },
    "after_yuna_together": {
        name: "Yuna",
        text: "(She grips my hand tightly. She looks into my eyes and gives a sad smile.)",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        next: "after_yuna_together_2"
    },
    "after_yuna_together_2": {
        name: "Yuna",
        text: "\"What a foolish thing to say... But I don't dislike that answer. Okay, then... how about we become a relationship that shares each other's secrets?\"",
        character: "assets/images/characters/yuna_sadsmile.png",
        night: true,
        next: "yuna_contact_exchange"
    },
    "yuna_contact_exchange": {
        name: "Yuna",
        text: "(Yuna steps away from the rooftop railing and nonchalantly holds out her smartphone.) \"To share secrets... we should at least have a means of contact. Leave your number here.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        choices: [
            { text: "Yeah, I want to share more secrets with Yuna.", next: "yuna_contact_success", setFlags: ["has_number_yuna", "has_any_contact"] },
            { text: "Sorry, I'm still a bit cautious.", next: "yuna_contact_fail", stats: { Yuna: { affinity: -15 } } }
        ]
    },
    "yuna_contact_success": {
        name: "Yuna",
        text: "(Yuna saves my number and smiles faintly.) \"...Done. Now we're connected. If I call... you have to come anytime.\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        stats: { Yuna: { affinity: 15 } },
        next: "night_home"
    },
    "yuna_contact_fail": {
        name: "Yuna",
        text: "(Yuna looks at me with cold eyes and puts her smartphone away.) \"...Yeah. I won't force you. But keep in mind that opportunities don't come often.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "night_home"
    },
    "after_yuna_scared": {
        name: "Yuna",
        text: "(She laughs coldly and lets go of my hand. She turns her gaze back to the window and pushes me away.)",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "after_yuna_scared_2"
    },
    "after_yuna_scared_2": {
        name: "Yuna",
        text: "\"Hehe, as expected. It's too heavy a story for an ordinary student. Go back for today. Don't try to know any deeper.\"",
        character: "assets/images/characters/yuna_nomal.png",
        night: true,
        next: "night_home"
    },
    "after_yuna_secret": {
        name: "Yuna",
        text: "(She puts her finger to her lips and signals to be quiet.)",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_yuna_secret_2"
    },
    "after_yuna_secret_2": {
        name: "Yuna",
        text: "\"Shh... Even walls have ears. Once you know the truth, you can no longer return to your ordinary daily life. If you're still okay with that... take my hand.\"",
        character: "assets/images/characters/yuna_nomal.png",
        next: "after_yuna_rooftop"
    },
    "after_home": {
        name: "Me",
        text: "(As I leave the school gate, I look back on today. For my first day as a transfer student, a lot of things happened.)",
        background: "assets/images/background/school.png",
        character: null,
        sunset: true,
        next: "after_home_2"
    },
    "after_home_2": {
        name: "Me",
        text: "(Walking down the street where the sun is setting, I look forward to what will happen tomorrow.)",
        sunset: true,
        next: "after_home_2_2"
    },
    "after_home_2_2": {
        name: "Me",
        text: "(Tomorrow... I'll be able to meet them again, right?)",
        sunset: true,
        next: "evening_home"
    },
    "night_home": {
        name: "Me",
        text: "(Walking down the darkened street, I head home. The streetlights stretch out long.)",
        background: "assets/images/background/school.png",
        character: null,
        night: true,
        next: "evening_home"
    },
    "evening_home": {
        name: "Me",
        text: "(When I return home and lie on the bed, the events of today pass through my mind like a kaleidoscope.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        next: "evening_home_2"
    },
    "evening_home_2": {
        name: "Me",
        text: "(Looking at the ceiling, I fall into deep thought.)",
        night: true,
        next: "evening_home_2_2"
    },
    "evening_home_2_2": {
        name: "Me",
        text: "(I didn't know it would be this eventful from the first day of transfer... What kind of things are waiting for me tomorrow?)",
        night: true,
        choices: [
            { text: "Recall Seoyeon's kind smile.", next: "evening_think_seoyeon", condition: "metSeoyeon" },
            { text: "Ponder over the things Yuna said.", next: "evening_think_yuna_met", condition: "metYuna" },
            { text: "Recall Dain's lively smile.", next: "evening_think_dain", condition: "metDain" },
            { text: "Recall the questions I felt about the school.", next: "evening_think_yuna", excludeCondition: "metYuna" },
            { text: "I'm tired, so let's just sleep without thinking about anything.", next: "evening_sleep" }
        ]
    },
    "evening_think_seoyeon": {
        name: "Me",
        text: "(Seoyeon's kind smile and voice don't leave my head. Thanks to her, I feel a bit more confident in my unfamiliar school life.)",
        night: true,
        next: "evening_sleep"
    },
    "evening_think_dain": {
        name: "Me",
        text: "(Dain's healthy laughter seems to linger in my ears. I went to sleep looking forward to the tteokbokki I'll eat with her tomorrow.)",
        night: true,
        next: "evening_sleep"
    },
    "evening_think_yuna": {
        name: "Me",
        text: "(The strange atmosphere and rumors I felt throughout the school don't leave my head. What on earth is this school hiding?)",
        night: true,
        next: "evening_sleep"
    },
    "evening_think_yuna_met": {
        name: "Me",
        text: "(Yuna's words about the 'school's secret' don't leave my head. What on earth does she know?)",
        night: true,
        next: "evening_sleep"
    },
    "evening_sleep": {
        name: "Me",
        text: "(As soon as I closed my eyes, I fell into a deep sleep. In my dream, I was running down an endless hallway.)",
        night: true,
        changeDay: 2,
        next: "day2_start"
    }
};
